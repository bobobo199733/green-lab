var __assign =
    (this && this.__assign) ||
    function () {
      return (
        (__assign =
          Object.assign ||
          function (n) {
            for (var t, r, i = 1, u = arguments.length; i < u; i++) {
              t = arguments[i];
              for (r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }),
        __assign.apply(this, arguments)
      );
    },
  __rest =
    (this && this.__rest) ||
    function (n, t) {
      var u = {},
        r;
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) &&
          t.indexOf(i) < 0 &&
          (u[i] = n[i]);
      if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (r = 0, i = Object.getOwnPropertySymbols(n); r < i.length; r++)
          t.indexOf(i[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(n, i[r]) &&
            (u[i[r]] = n[i[r]]);
      return u;
    },
  __spreadArray =
    (this && this.__spreadArray) ||
    function (n, t, i) {
      if (i || arguments.length === 2)
        for (var r = 0, f = t.length, u; r < f; r++)
          (!u && r in t) ||
            (u || (u = Array.prototype.slice.call(t, 0, r)), (u[r] = t[r]));
      return n.concat(u || Array.prototype.slice.call(t));
    },
  __awaiter =
    (this && this.__awaiter) ||
    function (n, t, i, r) {
      function u(n) {
        return n instanceof i
          ? n
          : new i(function (t) {
              t(n);
            });
      }
      return new (i || (i = Promise))(function (i, f) {
        function o(n) {
          try {
            e(r.next(n));
          } catch (t) {
            f(t);
          }
        }
        function s(n) {
          try {
            e(r["throw"](n));
          } catch (t) {
            f(t);
          }
        }
        function e(n) {
          n.done ? i(n.value) : u(n.value).then(o, s);
        }
        e((r = r.apply(n, t || [])).next());
      });
    },
  __generator =
    (this && this.__generator) ||
    function (n, t) {
      function o(n) {
        return function (t) {
          return s([n, t]);
        };
      }
      function s(e) {
        if (f) throw new TypeError("Generator is already executing.");
        while (r)
          try {
            if (
              ((f = 1),
              u &&
                (i =
                  e[0] & 2
                    ? u["return"]
                    : e[0]
                    ? u["throw"] || ((i = u["return"]) && i.call(u), 0)
                    : u.next) &&
                !(i = i.call(u, e[1])).done)
            )
              return i;
            ((u = 0), i) && (e = [e[0] & 2, i.value]);
            switch (e[0]) {
              case 0:
              case 1:
                i = e;
                break;
              case 4:
                return r.label++, { value: e[1], done: !1 };
              case 5:
                r.label++;
                u = e[1];
                e = [0];
                continue;
              case 7:
                e = r.ops.pop();
                r.trys.pop();
                continue;
              default:
                if (
                  !((i = r.trys), (i = i.length > 0 && i[i.length - 1])) &&
                  (e[0] === 6 || e[0] === 2)
                ) {
                  r = 0;
                  continue;
                }
                if (e[0] === 3 && (!i || (e[1] > i[0] && e[1] < i[3]))) {
                  r.label = e[1];
                  break;
                }
                if (e[0] === 6 && r.label < i[1]) {
                  r.label = i[1];
                  i = e;
                  break;
                }
                if (i && r.label < i[2]) {
                  r.label = i[2];
                  r.ops.push(e);
                  break;
                }
                i[2] && r.ops.pop();
                r.trys.pop();
                continue;
            }
            e = t.call(n, r);
          } catch (o) {
            e = [6, o];
            u = 0;
          } finally {
            f = i = 0;
          }
        if (e[0] & 5) throw e[1];
        return { value: e[0] ? e[1] : void 0, done: !0 };
      }
      var r = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        f,
        u,
        i,
        e;
      return (
        (e = { next: o(0), throw: o(1), return: o(2) }),
        typeof Symbol == "function" &&
          (e[Symbol.iterator] = function () {
            return this;
          }),
        e
      );
    },
  __extends =
    (this && this.__extends) ||
    (function () {
      var n = function (t, i) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, t) {
                n.__proto__ = t;
              }) ||
            function (n, t) {
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
            }),
          n(t, i)
        );
      };
      return function (t, i) {
        function r() {
          this.constructor = t;
        }
        if (typeof i != "function" && i !== null)
          throw new TypeError(
            "Class extends value " + String(i) + " is not a constructor or null"
          );
        n(t, i);
        t.prototype =
          i === null
            ? Object.create(i)
            : ((r.prototype = i.prototype), new r());
      };
    })();
define("Components/Core/ModelContextPreact", ["require", "exports"], function (
  n,
  t
) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.ModelContext = void 0;
  t.ModelContext = preact.createContext(null);
});
define("InstrumentPreact", ["require", "exports"], function (n, t) {
  "use strict";
  var r, e, o, s, h, c, l, a, v, y, p, w, b, k, d;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.InstForm =
    t.Region =
    t.InstLinkClient =
    t.InstLink =
    t.logWidgetClick =
    t.logError =
    t.logTime =
    t.logHide =
    t.logShow =
    t.logHover =
    t.logHolidayClick =
    t.logClick =
    t.logHiddenLink =
    t.logDataEvent =
    t.resetInstrumentation =
      void 0;
  r = {};
  e = function () {
    r = {};
  };
  t.resetInstrumentation = e;
  var u = "HpApp",
    g = function (n) {
      return Array.prototype.slice.apply(n).reduce(function (n, t, i) {
        return n + (i + 1) * t.charCodeAt(0);
      }, 0);
    },
    nt = function (n, t) {
      return n + t;
    },
    f = function (n, t, i) {
      var f = nt(n, t),
        e = "",
        o = !1;
      return (
        f in r
          ? i &&
            i.current &&
            ((r[f] = i.current.getAttribute("data-h")), (e = r[f].slice(3)))
          : ((e = "".concat(g("".concat(t || "root", ".").concat(n)), ".1")),
            (r[f] = "ID=".concat(u, ",").concat(e)),
            (o = !0)),
        { key: f, h: r[f], id: e, isNew: o }
      );
    },
    i = function (n, t) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      setTimeout(function () {
        window &&
          window.performance &&
          window.performance.now &&
          i.push("time", Math.round(performance.now()));
        Log &&
          Log.Log &&
          Log.Log.apply(Log, __spreadArray([n, "HP", t, !0], i || [], !1));
      }, 0);
    },
    tt = function (n) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      i.apply(void 0, __spreadArray(["Data", n], r || [], !1));
    };
  t.logDataEvent = tt;
  o = function (n) {
    var t = document.getElementById(n);
    t && si_T(t.getAttribute("h"));
  };
  t.logHiddenLink = o;
  s = function (n) {
    for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
    i.apply(void 0, __spreadArray(["DHTMLClick", n], r || [], !1));
  };
  t.logClick = s;
  h = function (n) {
    for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
    i.apply(void 0, __spreadArray(["Click", n], r || [], !1));
  };
  t.logHolidayClick = h;
  c = function (n) {
    for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
    i.apply(void 0, __spreadArray(["Hover", n], r || [], !1));
  };
  t.logHover = c;
  l = function (n) {
    for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
    i.apply(void 0, __spreadArray(["Show", n], r || [], !1));
  };
  t.logShow = l;
  a = function (n) {
    for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
    i.apply(void 0, __spreadArray(["Hide", n], r || [], !1));
  };
  t.logHide = a;
  v = function (n) {
    window &&
      window.performance &&
      window.performance.now &&
      i("Latency", n, "Time", Math.round(performance.now()));
  };
  t.logTime = v;
  y = function (n) {
    for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
    i.apply(void 0, __spreadArray(["Error", n], r || [], !1));
  };
  t.logError = y;
  p = function (n) {
    for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
    i.apply(void 0, __spreadArray(["Click", n], r || [], !1));
  };
  t.logWidgetClick = p;
  w = function (n) {
    var s = n.children,
      t = n.nodeName,
      i = n.parentNodeName,
      r = n.href,
      h = n.loggingData,
      c = __rest(n, [
        "children",
        "nodeName",
        "parentNodeName",
        "href",
        "loggingData",
      ]),
      o = preactHooks.useRef(null),
      e = f(t, i, o),
      l = e.h,
      a = e.id,
      v = e.isNew;
    return (
      typeof ServerSideLayoutInstrumentation != "undefined" &&
        v &&
        (ServerSideLayoutInstrumentation.startLink(u, a, t, i, r),
        ServerSideLayoutInstrumentation.closeLink()),
      preact.h(
        "a",
        __assign(
          {
            href: r,
            "data-h": l,
            ref: o,
            onClick: function () {
              Log &&
                Log.Log &&
                Log.Log.apply(
                  Log,
                  __spreadArray(
                    [
                      "Click",
                      "HP",
                      t,
                      !0,
                      "nodeName",
                      t,
                      "parentNodeName",
                      i,
                      "url",
                      r,
                    ],
                    h || [],
                    !1
                  )
                );
            },
          },
          c
        ),
        s
      )
    );
  };
  t.InstLink = w;
  b = function (n) {
    var u = n.children,
      i = n.href,
      t = n.nodeName,
      r = n.parentNodeName,
      e = n.loggingData,
      o = __rest(n, [
        "children",
        "href",
        "nodeName",
        "parentNodeName",
        "loggingData",
      ]),
      s = f(t, r).h;
    return preact.h(
      "a",
      __assign(
        {
          href: i,
          "data-h": s,
          onClick: function () {
            Log &&
              Log.Log &&
              Log.Log.apply(
                Log,
                __spreadArray(
                  [
                    "Click",
                    "HP",
                    t,
                    !0,
                    "nodeName",
                    t,
                    "parentNodeName",
                    r,
                    "url",
                    i,
                  ],
                  e || [],
                  !1
                )
              );
          },
        },
        o
      ),
      u
    );
  };
  t.InstLinkClient = b;
  k = function (n) {
    var e = n.children,
      t = n.nodeName,
      i = n.parentNodeName,
      o = n.insertId,
      s = f(t, i).isNew,
      r;
    return (
      typeof ServerSideLayoutInstrumentation != "undefined" &&
        s &&
        ((r = { appNS: u, type: "L.Box", insertId: o, displayRegion: t }),
        ServerSideLayoutInstrumentation.startRegion(r, t, i),
        ServerSideLayoutInstrumentation.closeRegion()),
      preact.h(preact.Fragment, null, e)
    );
  };
  t.Region = k;
  d = function (n) {
    var h = n.children,
      t = n.nodeName,
      r = n.parentNodeName,
      s = n.loggingData,
      c = __rest(n, ["children", "nodeName", "parentNodeName", "loggingData"]),
      i = preactHooks.useRef(null),
      e = f(t, r, i),
      o = e.h,
      l = e.id,
      a = e.isNew;
    return (
      typeof ServerSideLayoutInstrumentation != "undefined" &&
        a &&
        (ServerSideLayoutInstrumentation.startLink(u, l, t, r),
        ServerSideLayoutInstrumentation.closeLink()),
      preactHooks.useEffect(
        function () {
          i &&
            i.current &&
            (i.current.onsubmit = function () {
              Log.Log.apply(
                Log,
                __spreadArray(
                  [
                    "Click",
                    "HP",
                    t,
                    !0,
                    "nodeName",
                    t,
                    "parentNodeName",
                    r,
                    "click_type",
                    "form",
                  ],
                  s || [],
                  !1
                )
              );
              si_T && si_T(o);
            });
        },
        [i.current]
      ),
      preact.h(
        "form",
        __assign(
          {
            ref: i,
            "data-h": o,
            onSubmit: function () {
              Log.Log.apply(
                Log,
                __spreadArray(
                  [
                    "Click",
                    "HP",
                    t,
                    !0,
                    "nodeName",
                    t,
                    "parentNodeName",
                    r,
                    "click_type",
                    "form",
                  ],
                  s || [],
                  !1
                )
              );
              si_T && si_T(o);
            },
          },
          c || []
        ),
        h
      )
    );
  };
  t.InstForm = d;
});
define("Components/Core/HooksPreact", [
  "require",
  "exports",
  "InstrumentPreact",
], function (n, t, i) {
  "use strict";
  var r, u, f, e, o, s, h, c, l;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.useGraphQl =
    t.useAudio =
    t.useForceUpdate =
    t.useClientRect =
    t.useFetch =
    t.useClientSideRender =
    t.useClientSettings =
    t.useScrollPosition =
    t.useSpeechRecognizer =
      void 0;
  r = function (n, t, i) {
    t === void 0 && (t = null);
    i === void 0 && (i = "");
    var r = preactHooks.useState(null),
      u = r[0],
      f = r[1];
    return (
      preactHooks.useEffect(function () {
        var u = location.protocol == "https:" ? "wss:" : "ws:",
          e = t
            ? "?" +
              Object.keys(t)
                .map(function (n) {
                  return "".concat(n, "=").concat(t[n]);
                })
                .join("&")
            : "",
          o = "".concat(u).concat(n).concat(e),
          r = SpeechSDK.SpeechConfig.fromEndpoint(new URL(o), "key"),
          s = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
        i && (r.speechRecognitionLanguage = i);
        f(new SpeechSDK.SpeechRecognizer(r, s));
      }, []),
      [u]
    );
  };
  t.useSpeechRecognizer = r;
  u = function (n, t) {
    var i = preactHooks.useState({ top: 0, left: 0 }),
      u = i[0],
      r = i[1];
    return (
      preactHooks.useEffect(
        function () {
          if (n) {
            var t = function () {
              r({ left: n.scrollLeft, top: n.scrollTop });
            };
            return (
              n.addEventListener("scroll", t),
              function () {
                n &&
                  n.removeEventListener &&
                  n.removeEventListener("scroll", t);
              }
            );
          }
        },
        [n]
      ),
      preactHooks.useEffect(
        function () {
          n && r({ left: n.scrollLeft, top: n.scrollTop });
        },
        [t]
      ),
      u
    );
  };
  t.useScrollPosition = u;
  f = function (n) {
    var i = preactHooks.useState(n.ClientSettings),
      t = i[0],
      r = i[1];
    return (
      (n.ClientSettings = __assign({}, t)),
      preactHooks.useEffect(
        function () {
          var n = t.Pn.Qs + 2 * t.Sc.Qs + 4 * t.Iotd + 16 * t.Gwb,
            r,
            i;
          sj_cook.set("_UR", "QS", n.toString(), !0, "/");
          n += 8 * t.Mvs;
          sj_cook.set("_UR", "TQS", n.toString(), !0, "/");
          r = btoa(JSON.stringify(t));
          sj_cook.set("_HPVN", "CS", r, !0, "/");
          i = document.createEvent("CustomEvent");
          i.initCustomEvent("ClientSettingsUpdated", !0, !0, t);
          dispatchEvent(i);
        },
        [t]
      ),
      preactHooks.useEffect(function () {
        addEventListener("ClientSettingsUpdated", function (n) {
          n.detail && (r(n.detail), (window._model.ClientSettings = n.detail));
        });
      }, []),
      { clientSettings: t, updateClientSettings: r }
    );
  };
  t.useClientSettings = f;
  e = function () {
    var n = preactHooks.useState(!1),
      t = n[0],
      i = n[1];
    return (
      preactHooks.useEffect(function () {
        i(!0);
      }, []),
      t
    );
  };
  t.useClientSideRender = e;
  o = function (n, t, r, u, f) {
    t === void 0 && (t = "json");
    r === void 0 && (r = null);
    f === void 0 && (f = "GET");
    var o = preactHooks.useState(r),
      s = o[0],
      e = o[1];
    return (
      preactHooks.useEffect(
        function () {
          return __awaiter(void 0, void 0, void 0, function () {
            var r, o, s;
            return __generator(this, function () {
              return ((r = n), !r)
                ? [2, null]
                : ((r +=
                    r.indexOf("?") > 0
                      ? "&" + location.search.slice(1)
                      : location.search),
                  typeof i.logDataEvent != "undefined" &&
                    i.logDataEvent(
                      "requested",
                      "func",
                      "useFetch",
                      "url",
                      r,
                      "format",
                      t
                    ),
                  (o =
                    _model && _model.InPrivate
                      ? {
                          "Content-type": "application/json",
                          preferAnonymous: "1",
                        }
                      : { "Content-type": "application/json" }),
                  (s = {
                    method: f,
                    mode: "cors",
                    credentials: "include",
                    body: u,
                    headers: o,
                  }),
                  fetch(r, s)
                    .then(function (n) {
                      return (
                        typeof i.logDataEvent != "undefined" &&
                          i.logDataEvent(
                            "fetched",
                            "func",
                            "useFetch",
                            "url",
                            r,
                            "format",
                            t,
                            "status",
                            n.status
                          ),
                        t == "html" || t == "dom" ? n.text() : n.json()
                      );
                    })
                    .then(function (n) {
                      if (
                        (typeof i.logDataEvent != "undefined" &&
                          i.logDataEvent(
                            "parsed",
                            "func",
                            "useFetch",
                            "url",
                            r,
                            "format",
                            t
                          ),
                        t == "dom" || t == "html")
                      ) {
                        var f = new DOMParser(),
                          u = f.parseFromString(n, "text/html");
                        t == "html" ? e(u.body.innerHTML) : e(u);
                      } else e(n);
                    })
                    .catch(function (n) {
                      typeof i.logDataEvent != "undefined" &&
                        i.logDataEvent(
                          "error",
                          "func",
                          "useFetch",
                          "url",
                          r,
                          "format",
                          t,
                          "message",
                          n
                        );
                      e(null);
                    }),
                  [2]);
            });
          });
        },
        [n]
      ),
      s
    );
  };
  t.useFetch = o;
  s = function (n) {
    var t = preactHooks.useState(null),
      i = t[0],
      r = t[1];
    return (
      preactHooks.useEffect(
        function () {
          n && r(n.getBoundingClientRect());
        },
        [n]
      ),
      i
    );
  };
  t.useClientRect = s;
  h = function () {
    var n = preactHooks.useState(0),
      i = n[0],
      t = n[1];
    return function () {
      return t(function (n) {
        return ++n;
      });
    };
  };
  t.useForceUpdate = h;
  c = function (n) {
    var s = preactHooks.useState(n),
      f = s[0],
      l = s[1],
      h = preactHooks.useState(!1),
      e = h[0],
      r = h[1],
      c = preactHooks.useState(null),
      t = c[0],
      u = c[1],
      o = function () {
        u(null);
        r(!1);
        i.logDataEvent("speech", "audio", "end");
      },
      a = function () {
        i.logDataEvent("speech", "audio", "onPlay");
      },
      v = function () {
        i.logDataEvent("speech", "audio", "onPlaying");
      },
      y = function () {
        i.logDataEvent("speech", "audio", "onError");
        o();
      },
      p = function () {
        i.logDataEvent("speech", "audio", "onEnded");
        o();
      },
      w = function () {
        i.logDataEvent("speech", "audio", "onPause");
        o();
      };
    return (
      preactHooks.useEffect(
        function () {
          f ? u(new Audio(f)) : r(!1);
        },
        [f]
      ),
      preactHooks.useEffect(
        function () {
          t &&
            ((t.onpause = w),
            (t.onended = p),
            (t.onerror = y),
            (t.onplay = a),
            (t.onplaying = v),
            r(!0));
        },
        [t]
      ),
      preactHooks.useEffect(
        function () {
          if (t)
            if (e) {
              var n = t.play();
              n !== undefined
                ? n.catch(function () {
                    u(null);
                    r(!1);
                  })
                : typeof i.logDataEvent != "undefined" &&
                  i.logDataEvent("speech", "audio", "noPlayPromise");
            } else t && (t.pause(), u(null));
        },
        [e]
      ),
      [e, l]
    );
  };
  t.useAudio = c;
  l = function (n, i, r) {
    var u = { query: i, variables: r };
    return t.useFetch(n, "json", null, JSON.stringify(u));
  };
  t.useGraphQl = l;
});
define("Components/Core/MediaPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
], function (n, t, i, r, u) {
  "use strict";
  var f;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MediaContainer = void 0;
  f = function () {
    var k = preactHooks.useContext(r.ModelContext),
      n = k.model,
      t = k.backgroundOpacity,
      d = n.CurrentIndex,
      it = n.MediaContents,
      rt = n.ImageCropSize,
      v = n.IsMobile,
      g = n.BgQuality,
      nt = n.MbBgASAP,
      tt = n.MbBgOnLoad,
      ut = it[d].ImageContent,
      f = ut.Image.Url,
      y,
      b;
    g != 100 && f.search("&qlt=") < 0 && (f += "&qlt=".concat(g));
    f = "url(".concat(f.replace("1920x1080", rt), ")");
    var ft = preactHooks.useRef(null),
      p = v ? t : "",
      w = "block";
    return (v &&
      (nt && (p = t === "0" ? "" : t),
      tt && ((p = t), (w = "none"), u.useClientSideRender() && (w = "block"))),
    (y = { backgroundImage: f, opacity: p, display: w }),
    (b = { opacity: v ? 0 : t }),
    v)
      ? preact.h(
          "div",
          {
            id: "img_cont",
            className: "img_cont",
            style: nt || tt || u.useClientSideRender() ? y : null,
          },
          preact.h(h, { "data-priority": "2" }),
          preact.h(o, { "data-priority": "2" }),
          preact.h(s, { "data-priority": "2" }),
          preact.h(c, { "data-priority": "2" })
        )
      : (n.HasVidEvtLog &&
          preactHooks.useEffect(
            function () {
              return __awaiter(void 0, void 0, void 0, function () {
                var n;
                return __generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, e()];
                    case 1:
                      return (
                        (n = t.sent()),
                        n && i.logDataEvent("hp_hasMinVidReqs"),
                        [2]
                      );
                  }
                });
              });
            },
            [d]
          ),
        preact.h(
          "div",
          null,
          preact.h(
            "div",
            { className: "hp_top_cover_container", "data-priority": "2" },
            n.IsChromeNewTab ? null : preact.h(l, null),
            preact.h(
              "div",
              { className: "hp_top_cover", style: y },
              preact.h("div", { className: "hp_top_cover_dim", style: b })
            )
          ),
          preact.h(
            "div",
            { className: "hp_media_container" },
            n.IsChromeNewTab ? null : preact.h(a, null),
            preact.h(
              "div",
              { className: "img_cont", style: y, ref: ft },
              preact.h("div", {
                className: "hp_top_cover_dim",
                style: b,
                "data-priority": "2",
              }),
              preact.h(h, { "data-priority": "2" }),
              preact.h(o, { "data-priority": "2" }),
              preact.h(s, { "data-priority": "2" })
            )
          )
        ));
  };
  t.MediaContainer = f;
  var c = function () {
      return preact.h(
        "div",
        { className: "shaders" },
        preact.h("div", { className: "topLeft" }),
        preact.h("div", { className: "topRight" }),
        preact.h("div", { className: "bottom" })
      );
    },
    l = function () {
      return preact.h(
        "div",
        { className: "shaders" },
        preact.h("div", { className: "topLeft" }),
        preact.h("div", { className: "topRight" })
      );
    },
    a = function () {
      return preact.h(
        "div",
        { className: "shaders" },
        preact.h("div", { className: "bottom" })
      );
    },
    e = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var n, t, i;
        return __generator(this, function (r) {
          switch (r.label) {
            case 0:
              return ((t =
                navigator &&
                navigator.getBattery &&
                navigator.hardwareConcurrency &&
                navigator.connection &&
                navigator.connection.effectiveType &&
                navigator.deviceMemory),
              !t)
                ? [3, 2]
                : [4, navigator.getBattery()];
            case 1:
              t = (i = r.sent()) === null || i === void 0 ? void 0 : i.charging;
              r.label = 2;
            case 2:
              return ((n = t), !n)
                ? [3, 4]
                : [4, navigator.hardwareConcurrency];
            case 3:
              n = r.sent() > 2;
              r.label = 4;
            case 4:
              return [
                2,
                n &&
                  navigator.connection.effectiveType === "4g" &&
                  navigator.deviceMemory >= 4,
              ];
          }
        });
      });
    },
    o = function () {
      var f = preactHooks.useContext(r.ModelContext),
        s = f.model,
        p = f.backgroundOpacity,
        h = f.clientSettings,
        l = f.scrolled,
        n = f.scrollPosition,
        c = h.Ap,
        w = h.Mute,
        a = preactHooks.useState("none"),
        b = a[0],
        v = a[1],
        o = preactHooks.useRef(null),
        k = s.CurrentIndex,
        d = s.MediaContents,
        t = d[k].VideoContent,
        g = s.IsMobile || h.Iotd == 0;
      if (
        g &&
        u.useClientSideRender() &&
        t &&
        t.Enabled &&
        t.Url &&
        t.Url != ""
      ) {
        var y = t.Url,
          nt = t.HasAudio,
          tt = t.Loop;
        return (preactHooks.useEffect(
          function () {
            return __awaiter(void 0, void 0, void 0, function () {
              var u, r, t;
              return __generator(this, function (f) {
                switch (f.label) {
                  case 0:
                    return [4, e()];
                  case 1:
                    return (
                      (u = f.sent()),
                      o.current && u && s.IsVideoEnabled
                        ? (o.current.addEventListener(
                            "canplaythrough",
                            function () {
                              v("block");
                              i.logShow("hp_video");
                            }
                          ),
                          c ? o.current.play() : o.current.pause())
                        : v("none"),
                      u ||
                        ((r = document.querySelector("#video_ctrl")),
                        r === null || r === void 0
                          ? void 0
                          : r.classList.add("hide"),
                        i.logHide("hp_video")),
                      (t = document.querySelector(".hp_top_cover")),
                      !l && t
                        ? (t.style.display = "none")
                        : (n === null || n === void 0 ? void 0 : n.top) > 100 &&
                          t &&
                          (t.style.display = "block"),
                      [2]
                    );
                }
              });
            });
          },
          [y, c, n, l]
        ),
        (n === null || n === void 0 ? void 0 : n.top) > 100)
          ? void 0
          : preact.h("video", {
              className: "bg_video",
              src: y,
              ref: o,
              autoPlay: c,
              muted: !nt || w,
              playsInline: !0,
              loop: tt,
              style: { display: b, opacity: "calc(1 - ".concat(p, "*10)") },
            });
      }
    },
    s = function () {
      var e = preactHooks.useContext(r.ModelContext),
        t = e.model,
        o = e.clientSettings,
        i = o.Mute,
        f = preactHooks.useRef(null),
        c = t.CurrentIndex,
        l = t.MediaContents,
        n = l[c].AudioContent,
        a = t.IsMobile || o.Iotd == 0,
        s,
        h;
      if (a)
        return u.useClientSideRender() && n && n.Enabled && n.Url && n.Url != ""
          ? ((s = n.Url),
            (h = n.Loop),
            preactHooks.useEffect(
              function () {
                i ? f.current.pause() : f.current.play();
              },
              [i]
            ),
            preact.h("audio", {
              className: "bg_audio",
              src: s,
              ref: f,
              autoPlay: !i,
              playsInline: !0,
              loop: h,
              style: { display: "block" },
            }))
          : void 0;
    },
    h = function () {
      var s = function (n) {
          var t = 3840,
            i = 2160;
          return f.IsVideoEnabled &&
            n.indexOf("//img-s-msn-com.akamaized.net/tenant/amp/entityid/") >= 0
            ? n
            : ((n = n
                .replace(/w\=\d+/gi, "w=".concat(t))
                .replace(/h\=\d+/gi, "h=".concat(i))
                .replace(/1920x1080/gi, "UHD")),
              n.search("&w=") < 0 && (n += "&w=".concat(t)),
              n.search("&h=") < 0 && (n += "&h=".concat(i)),
              n + "&c=8&rs=1&o=3&r=0");
        },
        i = preactHooks.useContext(r.ModelContext),
        f = i.model,
        h = i.backgroundOpacity,
        c = f.IsMobile,
        l = { opacity: c ? 0 : h },
        o;
      if (
        u.useClientSideRender() &&
        typeof devicePixelRatio != "undefined" &&
        devicePixelRatio >= 1.5
      ) {
        var t = preactHooks.useContext(r.ModelContext).model,
          a = t.CurrentIndex,
          v = t.MediaContents,
          y = t.IsMobile,
          e = v[a],
          p = e.ImageContent,
          n = e.VideoContent,
          w = n && n.Enabled && n.Url && n.Url != "";
        return w || y
          ? void 0
          : ((o = "url(".concat(s(p.Image.Url), ")")),
            preact.h(
              "div",
              {
                className: "img_uhd",
                style: { backgroundImage: o, opacity: 1 },
              },
              preact.h("div", { className: "hp_top_cover_dim", style: l })
            ));
      }
    };
});
define("Components/Core/UtilsPreact", ["require", "exports"], function (n, t) {
  "use strict";
  var u, f;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.AccessiblePopup = t.FormatWorkString = t.formatString = void 0;
  u = function (n) {
    for (var t, i = [], r = 1; r < arguments.length; r++)
      i[r - 1] = arguments[r];
    for (t = 0; t < (i === null || i === void 0 ? void 0 : i.length); t++)
      n =
        (n === null || n === void 0 ? void 0 : n.indexOf("{".concat(t, "}"))) >=
        0
          ? n === null || n === void 0
            ? void 0
            : n.replace("{".concat(t, "}"), i[t])
          : n;
    return n;
  };
  t.formatString = u;
  f = function (n, i) {
    var r,
      u,
      f = n.LocStrings,
      e = n.IsEdu,
      o = e
        ? (r = f.LOC_MODULES_BINGATWORK_SCHOOL_TITLE) === null || r === void 0
          ? void 0
          : r.toLocaleLowerCase()
        : (u = f.LOC_MODULES_BINGATWORK_TITLE) === null || u === void 0
        ? void 0
        : u.toLocaleLowerCase();
    return t.formatString(i, o);
  };
  t.FormatWorkString = f;
  var r = function (n) {
      n.classList.add("focusin");
      n.setAttribute("aria-expanded", "true");
    },
    i = function (n) {
      n.classList.remove("focusin");
      n.setAttribute("aria-expanded", "false");
    },
    e = function (n) {
      n !== null &&
        (n.addEventListener("mouseenter", function () {
          r(n);
        }),
        n.addEventListener("focusin", function () {
          r(n);
        }),
        n.addEventListener("mouseleave", function () {
          n.contains(document.activeElement) || i(n);
        }),
        n.addEventListener("focusout", function (t) {
          n.contains(document.activeElement) ||
            n.contains(t.relatedTarget) ||
            i(n);
        }),
        n.addEventListener("keydown", function (t) {
          if (t.keyCode === 13) {
            r(n);
            return;
          }
          if (t.keyCode === 27) {
            i(n);
            n.focus();
            return;
          }
        }),
        window.addEventListener("keydown", function (t) {
          t.keyCode == 27 && i(n);
        }));
    };
  t.AccessiblePopup = e;
});
define("Components/Core/DownloadWallpaperPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/ModelContextPreact",
], function (n, t, i, r) {
  "use strict";
  var u, f;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.DownloadIcon = void 0;
  u = function (n) {
    var s = n.parentName,
      u = preactHooks.useContext(r.ModelContext).model,
      y = u.CurrentIndex,
      p = u.MediaContents,
      h = u.LocStrings,
      c = u.IsMobile,
      w = p[y].ImageContent,
      l = w.Image,
      t = l.Downloadable,
      e = l.Wallpaper,
      a = "BingWallpaper.jpg",
      o,
      v;
    if (t || !c)
      return (
        (o = c && e ? e.replace("1920x1200", "1080x1920_logo") : e),
        (v = s + "download"),
        preact.h(
          i.InstLink,
          {
            className: "downloadLink ".concat(t ? "" : "disabled"),
            href: t ? o : "#",
            download: t ? a : null,
            nodeName: v,
            parentNodeName: s,
            title: t
              ? h.LOC_HOMEPAGE_WALLPAPERDOWNLOAD_TOOLTIP
              : h.LOC_HOMEPAGE_WALLPAPERNOTAVAILABLE,
            tabIndex: t ? 0 : -1,
            role: "button",
            onClick: function (n) {
              t &&
                navigator &&
                navigator.msSaveBlob &&
                (n.preventDefault(),
                fetch(o, { headers: { responseType: "blob" } })
                  .then(function (n) {
                    return n.blob();
                  })
                  .then(function (n) {
                    navigator.msSaveBlob(n, a);
                  }));
            },
          },
          preact.h(f, null)
        )
      );
  };
  t.DownloadIcon = u;
  f = function () {
    return preact.h(
      "svg",
      {
        className: "downloadIcon",
        x: "0px",
        y: "0px",
        viewBox: "0 0 22 22",
        "enable-background": "new 0 0 22 22",
        "aria-hidden": "true",
        role: "presentation",
      },
      preact.h("path", {
        d: "M17.842 11.483l-6.671 6.725-6.671-6.725.967-.967 5.017 5.049v-15.565h1.375v15.565l5.017-5.049.966.967zm-12.859 10.517v-1.375h12.375v1.375h-12.375z",
      })
    );
  };
});
define("Components/Core/MuseumCard/TravelPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
  "InstrumentPreact",
  "Components/Core/UtilsPreact",
], function (n, t, i, r, u, f) {
  "use strict";
  var e, o, s;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Travel = void 0;
  e = function () {
    var t = preactHooks.useContext(i.ModelContext).model,
      e = t.IsMobile,
      c = t.CurrentIndex,
      l = t.MediaContents,
      h = t.LocStrings,
      a = t.Market,
      v = t.IsTravelEnabled,
      y = l[c].ImageContent,
      p = y.BackstageUrl,
      n;
    if (v)
      return (
        (n = r.useFetch(
          "/hp/api/v1/travel?format=json&mkt=".concat(a, "&backstageUrl=") +
            encodeURIComponent(p)
        )),
        n && n.data && n.data.travelText && n.data.travelGuideUrl
          ? preact.h(
              u.Region,
              { nodeName: "TravelCard", parentNodeName: "MuseumCard" },
              preact.h(o, null),
              preact.h(
                "div",
                { className: "hp_travel" },
                preact.h(
                  "div",
                  { className: "logo_text_container" },
                  preact.h(s, null),
                  preact.h(
                    u.InstLink,
                    {
                      href: n.data.travelGuideUrl,
                      nodeName: "tvl_card",
                      parentNodeName: "MuseumCard",
                      "aria-label": "travel_guide",
                    },
                    e
                      ? preact.h(
                          "div",
                          { className: "travel_text_teal" },
                          f.formatString(
                            h.LOC_HOMEPAGE_TRAVEL_GUIDE_TITLE,
                            n.data.travelText
                          )
                        )
                      : preact.h(
                          "div",
                          { className: "travel_text" },
                          f.formatString(
                            h.LOC_HOMEPAGE_TRAVEL_GUIDE_TITLE,
                            n.data.travelText
                          )
                        )
                  )
                ),
                preact.h("div", {
                  className: "".concat(e ? "next_arrow_teal" : "next_arrow"),
                })
              )
            )
          : void 0
      );
  };
  t.Travel = e;
  o = function () {
    var n = preactHooks.useContext(i.ModelContext).model,
      t = n.IsMobile;
    return preact.h(
      "div",
      { className: "hr_travel" },
      t ? preact.h("div", { className: "hr_travel_gray" }) : null
    );
  };
  s = function () {
    var n = preactHooks.useContext(i.ModelContext).model,
      t = n.IsMobile;
    if (t) return preact.h("div", { className: "travelguide_logo" }, " ");
  };
});
define("Components/Core/MuseumCard/TriviaPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/UtilsPreact",
  "Components/Core/HooksPreact",
  "Components/Core/UtilsPreact",
], function (n, t, i, r, u, f, e) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Trivia = void 0;
  var o = function () {
    var n = preactHooks.useContext(r.ModelContext).model,
      l = n.CurrentIndex,
      a = n.MediaContents,
      o = n.LocStrings,
      s = a[l],
      v = s.ImageContent,
      h = s.VideoContent,
      y = v.TriviaId,
      t,
      c;
    if (
      n.HasTriviaQuiz &&
      !(n.IsVideoEnabled && h && h.Enabled) &&
      ((t = f.useFetch("/hp/api/v1/trivia?format=json&id=".concat(y))),
      (c = preactHooks.useCallback(e.AccessiblePopup, [])),
      t && t.data)
    )
      return preact.h(
        "div",
        { className: "hp_trivia_outer show" },
        preact.h(
          "div",
          {
            className: "hp_trivia_inner",
            "data-iid": "Trivia",
            role: "button",
            "aria-haspopup": !0,
            ref: c,
          },
          preact.h(
            "div",
            { className: "trivia" },
            preact.h(
              "div",
              { className: "title" },
              preact.h("img", {
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADRElEQVRYCb2XXUtUQRjH3dANJQUhZaOLCoK0IO+CLiKjNQL7FCoGQQSRQkhvFFEXSULd1OfoqsKtLLqriz5AUdobvZBa+FKn3/+ceXb3bOd4zu62/uHnzJmZ5+XMzpkZM00p5XneRoYegmOwF7Y4PMr38AFewD0oZDKZZcr6ReAc3IIFSKt5Bk5Bd1IGmbgBGGfpuwinoA0kvdU0FGAW9ObyodnYCpqhgyBbaQEm4QozsqKGVCK43voZmN5QGYJNSQ4Y0wGj8A5Mj6l0Jdn6/QzsAzNepj4O+v2rEjatMAErIL2GPWs6YYDe3IJ/pq7prEv4OAxfQVIS0euCjizYtCv4zroilxnjqwcsiSfUbY2URtF4FSRNe91vXvIc1PA5AKsgnQv106CpX1QPGg91/scHfJ/3I3jeD8rST8HDbdeh1V71gkubI77bYM7FmvLtFBBskxlK66zWccQ64RL4QtncxJ+jrmGJMvE7rzWw2RGjE+zTzG+gQ3u7NM1upZ2roSLGNwLMuCCDSqDPPRRcuR6FxdqlBHIuovb29ZLF2qEEdJBIOljWSxYrpwQ8FzX2ZGxgVotKwLKxmWhgvKJr24TmlYBuMpLO87rFJ9abwsk2N2ZWCbx0D7pM1CWCn8TBK8rhBEf9rv+pNqIjIOkQ6kgwjO3Gthd+g/QHIpOgvR206Ul5JZAF3eGk0dgIKTqwHwYFlyKToP203+t5HymDc4eKLpCSLiOtKWLFDsE+Ngn69LJvQbpQdMJDN9gsTBQ7aqzgKzIJ2q+D9BPsSwii0HBJPUgHRb7G2EUzfFQmcZM2WyO6aYdFZws8AknXp57wiOqf8FGehPxK9yF606OjC3RxlJTEQPVhwxb40JuXayw8ouKJkbvBktAdTtco+8ekYnT8IzZacNfApp2qL30dI/GW9DBgMxT84cGfOQrdZDrXNAxs9Z3rU7PVTtV7CGNQ/on6SUT/FoGjFoqzcAbaQVoFXSYKoCNV54gOM63o7dAP+8Gu3b+o6wY8yUVEiWhzuguKK7vkfQcjzcYN+A5ppfVzGf75d4y2EbCZuBM7A2QXEkbNNByAQdAtSqenLjPy8Ql0qD2HBzDDGy9RRkpJ0LEPjv8FY4TA6cLS3Z0AAAAASUVORK5CYII=",
                class: "image_q",
                role: "presentation",
              }),
              preact.h("span", null, o.LOC_HOMEPAGE_TRIVIA_TITLE)
            ),
            preact.h("div", { className: "question" }, t.data.question),
            preact.h(
              "ul",
              { className: "options" },
              t.data.options.map(function (n) {
                return preact.h(
                  "li",
                  { className: "option" },
                  preact.h(
                    i.InstLinkClient,
                    {
                      href: n.url,
                      nodeName: "tr_hidden",
                      parentNodeName: "MediaControls",
                      "aria-label": u.formatString(
                        o.LOC_HOMEPAGE_TRIVIA_ANSWER_ARIALABEL,
                        n.bullet,
                        n.text
                      ),
                    },
                    preact.h("span", { className: "bullet" }, n.bullet),
                    preact.h("span", { className: "answer" }, n.text)
                  )
                );
              })
            )
          )
        )
      );
  };
  t.Trivia = o;
});
define("Components/Core/MuseumCard/MuseumCardPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/UtilsPreact",
  "Components/Core/DownloadWallpaperPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/MuseumCard/TravelPreact",
  "Components/Core/MuseumCard/TriviaPreact",
  "Components/Core/UtilsPreact",
], function (n, t, i, r, u, f, e, o, s) {
  "use strict";
  var a, w;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.AudioButton = t.MuseumCard = void 0;
  a = function () {
    var n = preactHooks.useCallback(r.AccessiblePopup, []);
    return preact.h(
      i.Region,
      { nodeName: "MediaControls", parentNodeName: "Core" },
      preact.h(
        "div",
        { className: "mc_caro" },
        preact.h(o.Trivia, null),
        preact.h(
          i.Region,
          { nodeName: "MuseumCard", parentNodeName: "MediaControls" },
          preact.h(
            "div",
            {
              className: "musCard",
              "aria-haspopup": !0,
              ref: n,
              onMouseEnter: function () {
                var n = document.querySelector("#vs_hidden");
                Log && Log.Log("Show", "MuseumCard", "Show", !0);
                Log && Log.Log("Click", "MuseumCard", "Show", !0);
                si_T && n && si_T(n.getAttribute("data-h"));
              },
            },
            preact.h(b, null),
            preact.h(g, null)
          )
        )
      )
    );
  };
  t.MuseumCard = a;
  var b = function () {
      return preact.h("div", { className: "musCardCont" }, preact.h(k, null));
    },
    k = function () {
      var n = preactHooks.useContext(f.ModelContext).model,
        t = n.IsMobile,
        i = n.IsBingAppEnabled;
      return i
        ? preact.h(d, null)
        : t
        ? preact.h(
            preact.Fragment,
            null,
            preact.h(h, null),
            preact.h(c, null),
            preact.h(y, null),
            preact.h(l, null),
            preact.h(e.Travel, null)
          )
        : preact.h(
            preact.Fragment,
            null,
            preact.h(y, null),
            preact.h(l, null),
            preact.h(h, null),
            preact.h(c, null),
            preact.h(e.Travel, null)
          );
    },
    h = function () {
      var n = preactHooks.useContext(f.ModelContext).model,
        e = n.CurrentIndex,
        o = n.MediaContents,
        h = n.LocStrings,
        r = o[e].ImageContent,
        u = r.Title,
        t = r.BackstageUrl,
        c = t && t != "#",
        l = c ? "title" : "title no_link";
      return preact.h(
        "h2",
        null,
        preact.h(
          i.InstLink,
          {
            className: l,
            href: t,
            nodeName: "img_title",
            parentNodeName: "MuseumCard",
            "aria-label": s.formatString(
              h.LOC_HOMEPAGE_VERTICAL_SCROLL_IOTD_ARIA,
              u
            ),
          },
          u
        )
      );
    },
    c = function () {
      var n = preactHooks.useContext(f.ModelContext).model,
        t = n.CurrentIndex,
        i = n.MediaContents,
        r = i[t].ImageContent,
        e = r.Copyright;
      return preact.h(
        "div",
        { className: "copyright-container" },
        preact.h(
          "div",
          { className: "copyright", id: "copyright" },
          e,
          preact.h(v, null)
        ),
        preact.h(
          "ul",
          { className: "share" },
          preact.h(
            "li",
            null,
            preact.h(u.DownloadIcon, { parentName: "MuseumCard" })
          )
        )
      );
    },
    v = function () {
      var t = preactHooks.useContext(f.ModelContext).model,
        u = t.CurrentIndex,
        e = t.MediaContents,
        n = e[u].AudioContent,
        i,
        r;
      if (n && n.Enabled)
        return (
          (i = n.Copyright),
          (r = n.Caption),
          preact.h(
            "div",
            null,
            preact.h("div", { class: "copyright av_cap" }, r),
            preact.h("div", { class: "copyright av_copy" }, i)
          )
        );
    },
    y = function () {
      var n = preactHooks.useContext(f.ModelContext).model,
        e = n.IsMobile,
        t = n.LocStrings,
        o = n.CurrentIndex,
        s = n.MediaContents,
        r = s[o].VideoContent,
        u = !0;
      return (
        n.IsChromeNewTab && !n.IsCntShareEnabled && (u = !1),
        r && r.Enabled && n.IsVideoEnabled && (u = !1),
        !e && n.IsBingWpAppEnabled
          ? preact.h(
              preact.Fragment,
              null,
              preact.h(
                "div",
                { className: "bingwpapptext" },
                preact.h(
                  i.InstLink,
                  {
                    className: "bingwpapplink",
                    href: t.LOC_BING_WP_APP_LINK,
                    nodeName: "bingwpapptext",
                    parentNodeName: "MuseumCard",
                    target: "_blank",
                    rel: "noopener",
                    tabIndex: 0,
                  },
                  preact.h("div", null, t.LOC_BING_WP_APP_LINK_TEXT)
                )
              )
            )
          : void 0
      );
    },
    d = function () {
      var n = preactHooks.useContext(f.ModelContext).model,
        t = n.IsMobile,
        i = n.IsBingAppEnabled;
      if (i) {
        if (t) {
          var r = n.CurrentIndex,
            e = n.MediaContents,
            o = e[r].ImageContent,
            s = o.Copyright;
          return preact.h(
            preact.Fragment,
            null,
            preact.h(h, null),
            preact.h(
              "ul",
              { className: "mobileOperationsInline" },
              preact.h(
                "li",
                { className: "copyrightInline" },
                preact.h(
                  "div",
                  { className: "copyright-container" },
                  preact.h(
                    "div",
                    { className: "copyright", id: "copyright" },
                    s,
                    preact.h(v, null)
                  )
                )
              ),
              preact.h(
                "li",
                null,
                preact.h(u.DownloadIcon, { parentName: "MuseumCard" })
              )
            ),
            preact.h(p, null)
          );
        }
        return preact.h(
          preact.Fragment,
          null,
          preact.h(h, null),
          preact.h(c, null),
          preact.h(l, null),
          preact.h(p, null)
        );
      }
    },
    p = function () {
      var t = preactHooks.useContext(f.ModelContext).model,
        r = t.IsMobile,
        n = t.LocStrings;
      return r
        ? preact.h(
            i.Region,
            { nodeName: "BingAppDownloadMobile", parentNodeName: "MuseumCard" },
            preact.h(
              i.InstLink,
              {
                href: n.LOC_BING_APP_LINK_MOBILE,
                nodeName: "bingappdownloadMobile",
                parentNodeName: "MuseumCard",
              },
              preact.h(
                "div",
                { className: "bingapptext_mobile" },
                preact.h("div", {
                  className: "app_logo",
                  alt: "Bing app logo",
                  "aria-hidden": "true",
                }),
                preact.h(
                  "div",
                  { className: "text" },
                  n.LOC_BING_APP_TEXT_MOBILE
                ),
                preact.h(
                  "div",
                  { className: "button" },
                  n.LOC_BING_APP_DOWNLOAD_TEXT_MOBILE
                )
              )
            )
          )
        : preact.h(
            i.Region,
            { nodeName: "BingAppDownloadPC", parentNodeName: "MuseumCard" },
            preact.h("div", { className: "bingapptext" }, n.LOC_BING_APP_TEXT),
            preact.h(
              "div",
              { className: "bingappdownload" },
              preact.h(
                i.InstLink,
                {
                  className: "button",
                  href: n.LOC_BING_APP_LINK_PC,
                  nodeName: "bingappdownloadPC",
                  parentNodeName: "MuseumCard",
                  rel: "noopener",
                  role: "button",
                  tabIndex: 0,
                  target: "_blank",
                },
                preact.h(
                  "svg",
                  {
                    width: "10",
                    height: "16",
                    viewBox: "0 0 10 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  preact.h("path", {
                    d: "M4 12C3.72386 12 3.5 12.2239 3.5 12.5C3.5 12.7761 3.72386 13 4 13H6C6.27614 13 6.5 12.7761 6.5 12.5C6.5 12.2239 6.27614 12 6 12H4ZM2 0C0.89543 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.89543 9.10457 0 8 0H2ZM1 2C1 1.44772 1.44772 1 2 1H8C8.55228 1 9 1.44772 9 2V14C9 14.5523 8.55228 15 8 15H2C1.44772 15 1 14.5523 1 14V2Z",
                    fill: "white",
                  })
                ),
                n.LOC_BING_APP_DOWNLOAD_TEXT
              ),
              preact.h(
                i.InstLink,
                {
                  className: "button",
                  href: n.LOC_BING_WP_APP_LINK,
                  nodeName: "bingwpapptext",
                  parentNodeName: "MuseumCard",
                  rel: "noopener",
                  tabIndex: 0,
                  target: "_blank",
                  role: "button",
                },
                preact.h(
                  "svg",
                  {
                    width: "17",
                    height: "16",
                    viewBox: "0 0 17 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  preact.h("path", {
                    d: "M2.5 0C1.39543 0 0.5 0.895431 0.5 2V11C0.5 12.1046 1.39543 13 2.5 13H5.5V15H4C3.72386 15 3.5 15.2239 3.5 15.5C3.5 15.7761 3.72386 16 4 16H13C13.2761 16 13.5 15.7761 13.5 15.5C13.5 15.2239 13.2761 15 13 15H11.5V13H14.5C15.6046 13 16.5 12.1046 16.5 11V2C16.5 0.89543 15.6046 0 14.5 0H2.5ZM10.5 13V15H6.5V13H10.5ZM1.5 2C1.5 1.44772 1.94772 1 2.5 1H14.5C15.0523 1 15.5 1.44772 15.5 2V11C15.5 11.5523 15.0523 12 14.5 12H2.5C1.94772 12 1.5 11.5523 1.5 11V2Z",
                    fill: "white",
                  })
                ),
                n.LOC_BING_WP_APP_DOWNLOAD_TEXT
              )
            )
          );
    },
    l = function () {
      var n = preactHooks.useContext(f.ModelContext).model,
        t = n.IsMobile;
      if (!t) return preact.h("div", { className: "hr" });
    },
    g = function () {
      var n = preactHooks.useContext(f.ModelContext).model,
        u = n.IsMobile,
        e = n.CurrentIndex,
        o = n.MediaContents,
        s = n.LocStrings,
        r = o[e].ImageContent,
        h = r.Headline ? r.Headline : s.LOC_HOMEPAGE_INFO_TEXT;
      if (!u)
        return preact.h(
          "div",
          { className: "headline" },
          preact.h(
            "div",
            { className: "icon_text" },
            preact.h(
              i.InstLink,
              {
                href: r.BackstageUrl,
                nodeName: "mc_backstage",
                parentNodeName: "MuseumCard",
              },
              preact.h(nt, null),
              preact.h("h1", { className: "text", id: "headline" }, h)
            )
          ),
          preact.h(it, null),
          preact.h(t.AudioButton, null),
          preact.h(w, null)
        );
    },
    nt = function () {
      return preact.h(
        "div",
        { className: "icon" },
        preact.h(
          "svg",
          {
            className: "mappin",
            height: "16",
            width: "16",
            viewBox: "0 0 12 12",
            "aria-hidden": "true",
            role: "presentation",
          },
          preact.h("path", { d: "M0 0h12v12h-12z", fill: "none" }),
          preact.h("path", {
            d: "M6.5 3a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm0-3a4.5 4.5 0 0 0-4.5 4.5 5.607 5.607 0 0 0 .087.873c.453 2.892 2.951 5.579 3.706 6.334a1 1 0 0 0 1.414 0c.755-.755 3.253-3.442 3.706-6.334a5.549 5.549 0 0 0 .087-.873 4.5 4.5 0 0 0-4.5-4.5zm3.425 5.218c-.36 2.296-2.293 4.65-3.425 5.782-1.131-1.132-3.065-3.486-3.425-5.782a4.694 4.694 0 0 1-.075-.718 3.5 3.5 0 0 1 7 0 4.634 4.634 0 0 1-.075.718z",
          })
        )
      );
    },
    tt = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var n, t, i;
        return __generator(this, function (r) {
          switch (r.label) {
            case 0:
              return ((t =
                navigator &&
                navigator.getBattery &&
                navigator.hardwareConcurrency &&
                navigator.connection &&
                navigator.connection.effectiveType &&
                navigator.deviceMemory),
              !t)
                ? [3, 2]
                : [4, navigator.getBattery()];
            case 1:
              t = (i = r.sent()) === null || i === void 0 ? void 0 : i.charging;
              r.label = 2;
            case 2:
              return ((n = t), !n)
                ? [3, 4]
                : [4, navigator.hardwareConcurrency];
            case 3:
              n = r.sent() > 2;
              r.label = 4;
            case 4:
              return [
                2,
                n &&
                  navigator.connection.effectiveType === "4g" &&
                  navigator.deviceMemory >= 4,
              ];
          }
        });
      });
    },
    it = function () {
      var n = preactHooks.useContext(f.ModelContext),
        t = n.model,
        u = n.clientSettings,
        h = n.updateClientSettings,
        e = t.CurrentIndex,
        c = t.MediaContents,
        o = c[e].VideoContent,
        r = u.Ap,
        s = preactHooks.useState(!1),
        l = s[0],
        a = s[1];
      return (
        preactHooks.useEffect(
          function () {
            return __awaiter(void 0, void 0, void 0, function () {
              var n;
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (n = a), [4, tt()];
                  case 1:
                    return n.apply(void 0, [t.sent()]), [2];
                }
              });
            });
          },
          [e, r]
        ),
        o && o.Enabled && t.IsVideoEnabled && l
          ? preact.h(
              "span",
              null,
              preact.h(
                i.InstLink,
                {
                  href: "#",
                  id: "video_ctrl",
                  className: "media ".concat(r ? "on" : ""),
                  nodeName: "video_ctrl",
                  parentNodeName: "MuseumCard",
                  onClick: function () {
                    h(__assign(__assign({}, u), { Ap: !r }));
                  },
                  role: "button",
                },
                preact.h(
                  "svg",
                  {
                    className: "video",
                    viewBox: "0 0 16 16",
                    height: "16",
                    width: "16",
                    "aria-hidden": "true",
                    role: "presentation",
                  },
                  preact.h("path", {
                    className: "off",
                    d: "M12.682,7.388L4.176,1.436C4.042,1.343,3.894,1.3,3.75,1.3C3.362,1.3,3,1.609,3,2.049V13.95c0,0.442,0.362,0.75,0.75,0.75 c0.145,0,0.292-0.043,0.427-0.136l8.505-5.952C13.106,8.314,13.106,7.686,12.682,7.388z M4.246,12.994V3.006L11.384,8 C11.384,8,4.246,12.994,4.246,12.994z",
                  }),
                  preact.h("path", {
                    className: "on",
                    d: "M10.625,2C10.28,2,10,2.28,10,2.625v10.75C10,13.72,10.28,14,10.625,14s0.625-0.28,0.625-0.625V2.625 C11.25,2.28,10.97,2,10.625,2z M5.375,2C5.03,2,4.75,2.28,4.75,2.625v10.75C4.75,13.72,5.03,14,5.375,14S6,13.72,6,13.375V2.625 C6,2.28,5.72,2,5.375,2z",
                  })
                )
              )
            )
          : void 0
      );
    },
    rt = function () {
      var n = preactHooks.useContext(f.ModelContext),
        r = n.model,
        u = n.clientSettings,
        h = n.updateClientSettings,
        c = r.CurrentIndex,
        l = r.MediaContents,
        e = l[c],
        o = e.AudioContent,
        t = e.VideoContent,
        s = u.Mute;
      if ((o && o.Enabled) || (t && t.Enabled && t.HasAudio))
        return preact.h(
          "span",
          null,
          preact.h(
            i.InstLink,
            {
              href: "#",
              id: "audio_ctrl",
              className: "media ".concat(s ? "" : "on"),
              nodeName: "video_ctrl",
              parentNodeName: "MuseumCard",
              onClick: function () {
                h(__assign(__assign({}, u), { Mute: !s }));
              },
              role: "button",
            },
            preact.h(
              "svg",
              {
                class: "audio",
                viewBox: "0 0 16 16",
                height: "16",
                width: "16",
                "aria-hidden": "true",
                role: "presentation",
              },
              preact.h("path", {
                d: "M5.624,1.815c-0.107,0-0.202,0.046-0.271,0.119L2.404,4.878C2.336,4.95,2.24,4.997,2.133,4.997H0.5 c-0.276,0-0.5,0.224-0.5,0.5v5c0,0.276,0.224,0.5,0.5,0.5h1.633c0.102,0,0.195,0.041,0.262,0.108l2.961,2.958 c0.069,0.069,0.164,0.113,0.268,0.113C5.832,14.176,6,14.008,6,13.8V2.191C6,1.983,5.832,1.815,5.624,1.815z M5,12.293l-1.903-1.901 c-0.259-0.255-0.602-0.395-0.964-0.395H1v-4h1.133c0.375,0,0.739-0.158,0.978-0.412L5,3.699C5,3.699,5,12.293,5,12.293z",
              }),
              preact.h("path", {
                class: "on",
                d: "M9.096,5.475c-0.069-0.08-0.167-0.132-0.28-0.132c-0.098,0-0.185,0.039-0.251,0.1L8.194,5.811 c-0.068,0.067-0.11,0.16-0.11,0.264c0,0.085,0.033,0.168,0.081,0.231C8.531,6.773,8.75,7.362,8.75,8.001 c0,0.612-0.202,1.177-0.541,1.635L8.207,9.64C8.13,9.709,8.083,9.815,8.083,9.927c0,0.089,0.036,0.168,0.087,0.233l0.406,0.407 c0.065,0.056,0.147,0.093,0.24,0.093c0.133,0,0.254-0.072,0.32-0.176l0.017-0.021C9.684,9.785,10,8.93,10,8.001 c0-0.957-0.336-1.835-0.896-2.523L9.096,5.475z M13.336,1.214L13.336,1.214c-0.07-0.072-0.165-0.119-0.273-0.119 c-0.103,0-0.194,0.042-0.261,0.11l-0.003-0.002l-0.368,0.366l0.003,0.002c-0.063,0.067-0.102,0.156-0.102,0.256 c0,0.096,0.039,0.182,0.098,0.249l-0.001,0.005c1.435,1.559,2.313,3.639,2.313,5.92c0,2.273-0.872,4.346-2.299,5.903l-0.014,0.016 l-0.002,0.004v0.001c-0.06,0.067-0.099,0.152-0.099,0.248c0,0.101,0.04,0.191,0.104,0.257l-0.001,0.002l0.362,0.361l0.003-0.001 c0.067,0.069,0.16,0.114,0.265,0.114c0.109,0,0.204-0.047,0.273-0.12l0.005-0.001c1.646-1.783,2.653-4.165,2.653-6.784 C15.992,5.38,14.984,2.996,13.336,1.214z M11.222,3.339H11.22c-0.069-0.075-0.165-0.125-0.276-0.125 c-0.098,0-0.187,0.039-0.254,0.102l-0.003-0.002l-0.374,0.374l0.002,0.003c-0.063,0.066-0.102,0.156-0.102,0.255 c0,0.088,0.035,0.165,0.085,0.229l0.001,0.011C11.201,5.201,11.75,6.539,11.75,8c0,1.458-0.545,2.792-1.443,3.806l0.001,0.003 c-0.059,0.066-0.097,0.15-0.097,0.245c0,0.101,0.039,0.19,0.103,0.257l-0.002,0.002l0.367,0.366l0.002-0.003 c0.067,0.069,0.159,0.112,0.262,0.112c0.113,0,0.21-0.052,0.28-0.13h0.003C12.329,11.42,13,9.789,13,8 C13,6.209,12.328,4.576,11.222,3.339z",
              }),
              preact.h("path", {
                class: "off",
                d: "M15.845,10.908L12.938,8l2.907-2.907c0.206-0.207,0.206-0.543,0-0.75l-0.188-0.188 c-0.207-0.207-0.543-0.207-0.751,0L12,7.062L9.093,4.156c-0.208-0.208-0.543-0.208-0.75,0L8.155,4.344 c-0.207,0.207-0.207,0.542,0,0.75L11.062,8l-2.907,2.907c-0.207,0.207-0.207,0.543,0,0.75l0.188,0.188 c0.207,0.207,0.542,0.207,0.75,0L12,8.937l2.907,2.908c0.208,0.207,0.543,0.207,0.75,0l0.188-0.188 C16.052,11.451,16.052,11.114,15.845,10.908z",
              })
            )
          )
        );
    };
  t.AudioButton = rt;
  w = function () {
    var r = preactHooks.useContext(f.ModelContext),
      n = r.model,
      u = r.updateModel,
      s = n.MediaContents,
      t = n.CurrentIndex,
      e = n.LocStrings,
      o = s.length - 1;
    return preact.h(
      "div",
      { className: "nav" },
      preact.h(i.InstLink, {
        href: "#",
        nodeName: "left_nav",
        parentNodeName: "MuseumCard",
        id: "leftNav",
        className: "leftNav ".concat(t >= o ? "disabled" : ""),
        onClick: function () {
          u(__assign(__assign({}, n), { CurrentIndex: Math.max(0, t + 1) }));
        },
        role: "button",
        "aria-label": e.LOC_HOMEPAGE_ARCHIVE_PREV,
      }),
      preact.h(i.InstLink, {
        href: "#",
        nodeName: "right_nav",
        parentNodeName: "MuseumCard",
        id: "rightNav",
        className: "rightNav ".concat(t <= 0 ? "disabled" : ""),
        onClick: function () {
          u(__assign(__assign({}, n), { CurrentIndex: Math.min(o, t - 1) }));
        },
        role: "button",
        "aria-label": e.LOC_HOMEPAGE_ARCHIVE_NEXT,
      })
    );
  };
});
define("Components/Core/Modules/ImageGalleryPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/UtilsPreact",
  "Components/Core/HooksPreact",
], function (n, t, i, r, u, f) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.ImageGallery = void 0;
  var e;
  (function (n) {
    n.ImageGallery = function () {
      var i = preactHooks.useContext(r.ModelContext).model,
        o = i.IsMobile,
        s = i.CurrentIndex,
        h = i.MediaContents,
        c = i.LocStrings,
        u = h[s].Ssd,
        e = preactHooks.useState(u),
        l = e[0],
        a = e[1],
        n;
      return (
        a(u),
        !o &&
        ((n = f.useFetch("/hp/api/v1/imagegallery?format=json&ssd=".concat(l))),
        n && n.data)
          ? preact.h(
              "div",
              { className: "module show" },
              preact.h(
                "div",
                { className: "vsmodule", id: "vert_images" },
                preact.h(
                  "h2",
                  { className: "vs_title" },
                  c.LOC_HOMEPAGE_GALLERY_CARD_TITLE
                ),
                preact.h(
                  "div",
                  { className: "gallery" },
                  preact.h(
                    "div",
                    { className: "hero" },
                    preact.h(t, { image: n.data.images[0], isHero: !0 })
                  ),
                  preact.h(
                    "ul",
                    { className: "other" },
                    n.data.images.slice(1).map(function (n) {
                      return preact.h(
                        "li",
                        { className: "item" },
                        preact.h(t, { image: n, isHero: !1 })
                      );
                    })
                  )
                )
              )
            )
          : void 0
      );
    };
    var t = function (n) {
      var f = n.image,
        l = n.isHero,
        o = preactHooks.useContext(r.ModelContext).model,
        a = o.ClientSettings,
        v = o.LocStrings,
        s = f.imageUrls,
        y = f.clickUrl,
        h = f.date,
        p = l ? "720" : "360",
        e,
        t,
        c;
      if (a && s && ((e = s.landscape), e))
        return (
          (t = e.highDef),
          (c = u.formatString(
            v.LOC_HOMEPAGE_VERTICAL_SCROLL_GALLERY_IMAGE_ARIALABEL,
            h
          )),
          preact.h(
            i.InstLinkClient,
            {
              className: "img",
              href: y,
              nodeName: "vs_hidden",
              loggingData: ["name", "image_gallery"],
            },
            preact.h("img", {
              src: ""
                .concat(t)
                .concat(
                  (t === null || t === void 0 ? void 0 : t.indexOf("?")) > -1
                    ? "&"
                    : "?",
                  "w="
                )
                .concat(p),
              alt: "".concat(c),
            }),
            preact.h("div", { className: "info" }, h)
          )
        );
    };
  })((e = t.ImageGallery || (t.ImageGallery = {})));
});
define("Components/Core/Modules/ImageOfDayPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/DownloadWallpaperPreact",
  "Components/Core/ModelContextPreact",
], function (n, t, i, r, u) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.ImageOfDay = void 0;
  var f;
  (function (n) {
    n.ImageOfDay = function () {
      var n = preactHooks.useContext(u.ModelContext).model,
        r = n.IsMobile,
        o = n.LocStrings,
        s = n.CurrentIndex,
        h = n.MediaContents,
        i = h[s].VideoContent;
      if (!r && !(n.IsVideoEnabled && i && i.Enabled))
        return preact.h(
          "div",
          { className: "module show" },
          preact.h(
            "div",
            { className: "vsmodule vert_iotd", id: "vert_iotd" },
            preact.h(
              "h2",
              { className: "vs_title" },
              o.LOC_HOMEPAGE_VERTICAL_SCROLL_IOTD
            ),
            preact.h(
              "div",
              { className: "vs_iotd" },
              preact.h(
                "div",
                { className: "vs_row" },
                preact.h(t, null),
                preact.h(f, null),
                preact.h(e, null)
              )
            )
          )
        );
    };
    var t = function () {
        var n = preactHooks.useContext(u.ModelContext).model,
          r = n.CurrentIndex,
          f = n.MediaContents,
          e = n.LocStrings,
          t = f[r].ImageContent,
          o = t.BackstageUrl;
        return preact.h(
          i.InstLinkClient,
          {
            className: "vs_rowitem vs_iotd_img",
            href: o,
            nodeName: "vs_hidden",
            parentNodeName: "HPVSModules",
          },
          preact.h("div", {
            className: "img",
            style: { backgroundImage: "url(".concat(t.Image.Url, ")") },
            role: "img",
            "aria-labelledby": "iotd_title",
            alt: e.LOC_HOMEPAGE_VERTICAL_SCROLL_IOTD,
          })
        );
      },
      f = function () {
        var t = preactHooks.useContext(u.ModelContext).model,
          r = t.CurrentIndex,
          f = t.MediaContents,
          e = t.LocStrings,
          n = f[r].ImageContent;
        return preact.h(
          "div",
          { className: "vs_rowitem vs_iotd_bs" },
          preact.h(
            "h3",
            { className: "vs_bs_title", id: "iotd_title" },
            n.Headline
          ),
          preact.h("div", { className: "vs_bs_credit" }, n.Copyright),
          preact.h(
            "div",
            { className: "vs_bs_desc" },
            preact.h(
              "span",
              { className: "text", id: "iotd_desc" },
              n.Description
            )
          ),
          preact.h(
            i.InstLink,
            {
              href: n.BackstageUrl,
              className: "learn_more",
              nodeName: "iotd_learnmore",
              parentNodeName: "HPVSModules",
            },
            e.LOC_HOMEPAGE_VERTICAL_SCROLL_IOTD_LEARN_MORE
          ),
          preact.h(c, null)
        );
      },
      e = function () {
        var e = preactHooks.useContext(u.ModelContext).model,
          v = e.CurrentIndex,
          y = e.MediaContents,
          f = y[v].ImageContent,
          n = f.QuickFact,
          i = f.MapLink,
          t = f.SocialGood,
          r = null,
          l,
          a;
        if (n && n.MainText) {
          var c = n.MainText,
            p = n.LinkText,
            w = n.LinkUrl;
          r = preact.h(o, { text: c, linkText: p, linkUrl: w });
        } else if (i && i.Url)
          (l = i.Link), (a = i.Url), (r = preact.h(s, { link: l, url: a }));
        else if (t && t.MainText) {
          var c = t.MainText,
            b = t.ButtonUrl,
            k = t.IsDonate;
          r = preact.h(h, { text: c, url: b, hasButton: k });
        }
        return preact.h("div", { className: "vs_rowitem vs_iotd_mod" }, r);
      },
      o = function (n) {
        var f = n.text,
          t = n.linkText,
          r = n.linkUrl,
          e = preactHooks.useContext(u.ModelContext).model,
          o = e.LocStrings;
        return preact.h(
          "div",
          { className: "p1" },
          preact.h(
            "h3",
            { className: "p1t" },
            o.LOC_HOMEPAGE_VERTICAL_SCROLL_FACT
          ),
          preact.h("div", { className: "p1mt" }, f),
          t && r
            ? preact.h(
                i.InstLinkClient,
                {
                  href: r,
                  className: "p1qf show",
                  nodeName: "vs_hidden",
                  parentNodeName: "HPVSModules",
                },
                t
              )
            : null
        );
      },
      s = function (n) {
        var t = n.link,
          r = n.url,
          f = preactHooks.useContext(u.ModelContext).model,
          e = f.LocStrings,
          o = {
            backgroundSize: "cover",
            backgroundImage: 'url("'.concat(r, '")'),
          };
        return preact.h(i.InstLink, {
          href: t,
          style: o,
          className: "map",
          target: "_blank",
          nodeName: "iotd_map",
          parentNodeName: "HPVSModules",
          "aria-label": e.LOC_HOMEPAGE_VERTICAL_SCROLL_MAP,
        });
      },
      h = function (n) {
        var r = n.text,
          f = n.url,
          e = n.hasButton,
          o = preactHooks.useContext(u.ModelContext).model,
          t = o.LocStrings;
        return preact.h(
          "div",
          { className: "p1" },
          preact.h(
            "span",
            { className: "p1t sg show" },
            t.LOC_HOMEPAGE_VERTICAL_SCROLL_GET_INVOLVED
          ),
          preact.h("span", { className: "p1mt" }, r),
          e
            ? preact.h(
                i.InstLinkClient,
                {
                  href: f,
                  className: "p1l",
                  nodeName: "vs_hidden",
                  parentNodeName: "HPVSModules",
                },
                t.LOC_HOMEPAGE_HOLIDAY_BTN_DONATE
              )
            : null
        );
      },
      c = function () {
        return preact.h(
          "div",
          { className: "vs_bs_controls" },
          preact.h(
            "ul",
            null,
            preact.h(
              "li",
              { className: "item download" },
              preact.h(r.DownloadIcon, { parentName: "HPVSModules" })
            )
          )
        );
      };
  })((f = t.ImageOfDay || (t.ImageOfDay = {})));
});
define("Components/Core/Modules/MakeDefaultPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
], function (n, t, i, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MakeBingDefault = void 0;
  var u;
  (function (n) {
    n.MakeBingDefault = function () {
      var t = preactHooks.useContext(i.ModelContext).model,
        u = t.IsMobile,
        n = t.LocStrings;
      if (!u)
        return preact.h(
          "div",
          { className: "vert_make_default", id: "vs_default" },
          preact.h(
            r.InstLink,
            {
              href: "/set/homepage?PUBL=BINGCOM",
              nodeName: "make_default",
              parentNodeName: "HPVSModules",
            },
            preact.h(
              "div",
              { className: "button" },
              n.LOC_HOMEPAGE_SETDEFAULTHPLINK
            )
          ),
          preact.h(
            "div",
            { className: "text" },
            preact.h(
              "h1",
              { className: "title" },
              n.LOC_HOMEPAGE_SETDEFAULTHPLINK_DESC_TITLE
            ),
            preact.h(
              "div",
              { className: "desc" },
              n.LOC_HOMEPAGE_SETDEFAULTHPLINK_DESC_TEXT
            )
          )
        );
    };
  })((u = t.MakeBingDefault || (t.MakeBingDefault = {})));
});
define("Components/Core/Modules/MomentsInTimePreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
  "Components/Core/HooksPreact",
], function (n, t, i, r, u) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MomentsInTime = void 0;
  var f;
  (function (n) {
    n.MomentsInTime = function () {
      var e = preactHooks.useContext(i.ModelContext),
        r = e.model,
        a = e.scrolled,
        s = r.IsMobile,
        h = r.CurrentIndex,
        c = r.MediaContents,
        l = c[h].Ssd,
        n,
        o,
        f;
      if (
        !s &&
        ((n = u.useFetch(
          "/hp/api/v1/momentsintime?format=json&ssd=".concat(l)
        )),
        n &&
          n.data &&
          n.data.items &&
          ((o = n.title), (f = n.data.items), f.length > 0))
      )
        return preact.h(
          "div",
          { className: "module show" },
          preact.h(
            "div",
            { className: "vsmodule", id: "vert_mit" },
            preact.h("h2", { className: "vs_title" }, o),
            preact.h(
              "ul",
              { className: "mit" },
              f.map(function (n) {
                return preact.h(t, { item: n });
              })
            )
          )
        );
    };
    var t = function (n) {
      var t = n.item,
        i = t.imageUrl,
        u = t.title,
        f = t.description,
        e = t.url,
        o = t.credit;
      return preact.h(
        "li",
        {
          className: "item",
          style: { backgroundImage: "url(".concat(i, ")") },
        },
        preact.h(
          r.InstLinkClient,
          {
            href: e,
            nodeName: "vs_hidden",
            parentNodeName: "HPVSModules",
            loggingData: ["module", "mit"],
            title: o,
          },
          preact.h("img", { src: i, style: { visibility: "hidden" } }),
          preact.h("div", { className: "mask" }),
          preact.h(
            "div",
            { className: "info" },
            preact.h("div", { className: "title" }, u),
            preact.h("div", { className: "desc" }, f)
          )
        )
      );
    };
  })((f = t.MomentsInTime || (t.MomentsInTime = {})));
});
define("Components/Core/Modules/NearByMobilePreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
  "InstrumentPreact",
  "Components/Core/UtilsPreact",
], function (n, t, i, r, u, f) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Nearby = void 0;
  var e;
  (function (n) {
    n.Nearby = function () {
      var f = preactHooks.useContext(i.ModelContext).model,
        e = f.IsMobile,
        n,
        u;
      if (
        e &&
        ((n = r.useFetch("/hp/api/v1/nearbycard?format=json")),
        n && n.data && n.data.items && n.data.items.length)
      )
        return (
          (u = n.data.items),
          preact.h(
            "div",
            { className: "hc_card", id: "hc_nearby" },
            preact.h(
              "div",
              { className: "card_body" },
              preact.h(
                "ul",
                { className: "options" },
                u.map(function (n) {
                  return preact.h(t, { item: n });
                })
              )
            )
          )
        );
    };
    var t = function (n) {
      var t = n.item,
        e = preactHooks.useContext(i.ModelContext).model,
        o = e.LocStrings,
        r = f.formatString(o.LOC_HOMEPAGE_SEARCH_FOR_TYPE, t.name);
      return preact.h(
        "li",
        { className: "option" },
        preact.h(
          u.InstLinkClient,
          { href: t.link, nodeName: "nearby", parentNodeName: "HPVSModules" },
          preact.h(
            "div",
            { className: "nearby_circle" },
            preact.h("img", {
              className: "nearby_image",
              src: "/th?id=" + t.thumbnailId,
              role: "presentation",
              alt: r,
            })
          ),
          preact.h(
            "div",
            { className: "info" },
            preact.h("div", { className: "text", "aria-label": r }, t.name)
          )
        )
      );
    };
  })((e = t.Nearby || (t.Nearby = {})));
});
define("Components/Core/Modules/OnThisDayPreact_noscrollbar", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
  "InstrumentPreact",
  "Components/Core/UtilsPreact",
], function (n, t, i, r, u, f) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.OnThisDay = void 0;
  var e;
  (function (n) {
    n.OnThisDay = function () {
      var f = preactHooks.useContext(i.ModelContext),
        u = f.model,
        o = f.scrolled,
        s = u.IsMobile,
        h = u.CurrentIndex,
        c = u.MediaContents,
        l = u.LocStrings,
        a = c[h].Ssd,
        n,
        v,
        e;
      if (
        !s &&
        o &&
        ((n = r.useFetch("/hp/api/v1/onthisday?format=json&ssd=".concat(a))),
        n && n.data && n.data.items)
      )
        return (
          (v = n.title),
          (e = n.data.items),
          preact.h(
            "div",
            { className: "module show" },
            preact.h(
              "div",
              { className: "vsmodule", id: "vert_otd" },
              preact.h(
                "h2",
                { className: "vs_title" },
                l.LOC_HOMEPAGE_ON_THIS_DAY_TITLE
              ),
              preact.h(
                "ul",
                { className: "otd" },
                e.map(function (n) {
                  return preact.h(t, { item: n });
                })
              )
            )
          )
        );
    };
    var t = function (n) {
      var t = n.item,
        r = preactHooks.useContext(i.ModelContext).model,
        e = r.LocStrings;
      return preact.h(
        "li",
        { className: "item" },
        preact.h(
          u.InstLinkClient,
          {
            href: t.url,
            nodeName: "vs_hidden",
            parentNodeName: "HPVSModules",
            loggingData: ["name", "otd"],
          },
          preact.h("img", {
            src: t.imageUrl,
            alt: f.formatString(
              e.LOC_HOMEPAGE_ON_THIS_DAY_IMAGE_ARIALABEL,
              t.year,
              t.title
            ),
          }),
          preact.h(
            "div",
            { className: "info", "aria-hidden": "true" },
            preact.h("div", { className: "title" }, t.title),
            preact.h("div", { className: "year" }, t.year)
          )
        )
      );
    };
  })((e = t.OnThisDay || (t.OnThisDay = {})));
});
define("Components/Core/Modules/OpalUpsellMobilePreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
], function (n, t, i, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.OpalUpsell = void 0;
  var u;
  (function (n) {
    n.OpalUpsell = function () {
      var f = preactHooks.useContext(i.ModelContext),
        n = f.model,
        e = f.scrolled,
        u = n.LocStrings,
        o = n.IsMobile,
        s = n.OpalUpsellEnabled;
      if (o && s && e)
        return preact.h(
          r.InstLinkClient,
          {
            href: "https://bnc.lt/kDTk/Sj5XGAjTzv?%24deeplink_path=home%3focid%3dopalfooter",
            role: "presentation",
            nodeName: "make_default",
            parentNodeName: "HPVSModules",
          },
          preact.h(
            "div",
            {
              id: "hc_opalinst",
              className: "bnp_hpcard text_small",
              "aria-label":
                u.LOC_HOMEPAGE_OPALUPSELL_INSTALLCARD_TIP +
                " - Click to download the Bing App.",
            },
            preact.h("div", {
              className: "app_logo",
              alt: "Bing app logo",
              "aria-hidden": "true",
            }),
            preact.h(
              "div",
              { className: "text" },
              preact.h(
                "div",
                { className: "text_inner" },
                preact.h(
                  "div",
                  {
                    className: "text_main",
                    id: "hc_opalinst_text_main",
                    "aria-label":
                      u.LOC_HOMEPAGE_OPALUPSELL_INSTALLCARD_TIP +
                      " - Download the Bing App.",
                  },
                  u.LOC_HOMEPAGE_OPALUPSELL_INSTALLCARD_TIP
                ),
                preact.h(
                  "div",
                  {
                    className: "rating_stars",
                    "aria-label": "Rated 4.5 out of 5",
                    role: "figure",
                    tabIndex: 0,
                  },
                  preact.h(t, { isFull: !0 }),
                  preact.h(t, { isFull: !0 }),
                  preact.h(t, { isFull: !0 }),
                  preact.h(t, { isFull: !0 }),
                  preact.h(t, { isFull: !1 })
                )
              ),
              preact.h(
                "div",
                { class: "get_button_cont" },
                preact.h(
                  "span",
                  {
                    id: "hc_opalinst_cta",
                    "aria-hidden": "true",
                    className: "cta",
                    role: "none",
                  },
                  "GET"
                )
              )
            )
          )
        );
    };
    var t = function (n) {
      var t = n.isFull,
        i = t
          ? "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNERDQ4MTQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcuNjEsNi43NEw4Ljk0LDExLDUuNSw4LjM2LDIuMDYsMTEsMy4zOSw2Ljc0LDAsNC4xM0g0LjIxTDUuNSwwLDYuNzksNC4xM0gxMVoiLz48L3N2Zz4="
          : "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNERDQ4MTQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcuNjEsNi43NEw4Ljk0LDExLDUuNSw4LjM2LDIuMDYsMTEsMy4zOSw2Ljc0LDAsNC4xM0g0LjIxTDUuNSwwLDYuNzksNC4xM0gxMVptMCwyLjRMNy4yMiw3LjgxLDYuODEsNi40OCw3LjksNS42NSw5LDQuODFINi4yOEw1LjUsMi4zVjcuNDlaIi8+PC9zdmc+";
      return preact.h("img", {
        className: "rating_star rms_img",
        src: i,
        "aria-hidden": "true",
      });
    };
  })((u = t.OpalUpsell || (t.OpalUpsell = {})));
});
define("Components/Core/Modules/RewardsPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
], function (n, t, i, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Rewards = void 0;
  var u;
  (function (n) {
    var t = preact.createContext(null);
    n.Rewards = function () {
      var s = preactHooks.useContext(i.ModelContext),
        l = s.scrolled,
        h = s.model,
        a = h.IsMobile,
        v = h.InPrivate,
        n;
      if (
        !a &&
        !v &&
        l &&
        ((n = r.useFetch("/hp/api/v1/rewards?format=json")), n && n.data)
      ) {
        var c = n.title,
          f = n.data,
          y = f.balance,
          o = f.offersAvailable,
          p = o[0],
          w = o[1];
        if (c && f && y > 0 && o)
          return preact.h(
            t.Provider,
            { value: f },
            preact.h(
              "div",
              { className: "module show" },
              preact.h(
                "div",
                { className: "vsmodule", id: "vsrewds" },
                preact.h("h2", { className: "vs_title" }, c),
                preact.h(
                  "div",
                  { className: "vs_row_pad vsrewds_cont", id: "vsrewds_cont" },
                  preact.h(
                    "div",
                    { className: "vs_row" },
                    preact.h(e, null),
                    preact.h(u, { item: p }),
                    preact.h(u, { item: w })
                  )
                )
              )
            )
          );
      }
    };
    var u = function (n) {
        var t = n.item;
        if (t) {
          var i = t.title,
            r = t.description,
            u = t.icon,
            f = t.maxPoints,
            e = t.url;
          if (i && r && u && f && e)
            return preact.h(
              "div",
              {
                className: "vs_rowitem vsrewds_module",
                style: { left: "50%", width: "25%" },
              },
              preact.h(
                "div",
                { className: "vsrewds_imgcont" },
                preact.h(
                  "a",
                  { className: "vsrewds_img_link", target: "_blank", href: e },
                  preact.h(
                    "div",
                    { className: "vsrewds_imgtextcont" },
                    preact.h(
                      "div",
                      { className: "vsrewds_img_row" },
                      preact.h("img", {
                        className: "vsrewds_img rms_img",
                        src: u,
                      })
                    ),
                    preact.h("div", { className: "vsrewds_offer_title" }, i),
                    preact.h("div", { className: "vsrewds_subtext" }, r),
                    preact.h(
                      "div",
                      { className: "vsrewds_img_btn" },
                      "".concat(f, " points")
                    )
                  )
                )
              )
            );
        }
      },
      e = function () {
        var i = preactHooks.useContext(t),
          n = i.offersProgress,
          r = n[0],
          u = n[1];
        if (n)
          return preact.h(
            "div",
            {
              className: "vs_rowitem vsrewds_module",
              style: { left: "0%", width: "50%" },
            },
            preact.h(
              "div",
              { className: "vsrewds_generalitemcont" },
              preact.h(s, null),
              preact.h(h, null),
              preact.h(f, { item: r }),
              preact.h(f, { item: u }),
              preact.h(o, null)
            )
          );
      },
      f = function (n) {
        var t = n.item;
        if (t) {
          var u = t.title,
            f = t.icon,
            i = t.maxPoints,
            r = t.earnedPoints,
            e = t.description;
          if (f && i && r && (u || e))
            return preact.h(
              "div",
              { className: "vsrewds_searchcont" },
              preact.h("img", { className: "vsrewds_searchimg", src: f }),
              preact.h("div", { className: "vsrewds_searchtitle" }, e || u),
              preact.h(
                "div",
                { className: "vsrewds_searchpoints" },
                "".concat(r, " of ").concat(i)
              ),
              preact.h(
                "div",
                { className: "vsrewds_progbar" },
                preact.h("div", { className: "vsrewds_progbar_total" }),
                preact.h("div", {
                  className: "vsrewds_progbar_cur",
                  style: { width: "".concat((r / i) * 100, "%") },
                })
              )
            );
        }
      },
      o = function () {
        return preact.h(
          "div",
          { className: "vsrewds_dashboard_link_row" },
          preact.h(
            "a",
            {
              className: "vsrewds_dashboardlink",
              id: "vsrewds_dashboard_link",
              target: "_blank",
              href: "/rewards/dashboard",
            },
            preact.h(
              "span",
              { className: "vsrewds_dashboard_txt" },
              "Go to your Rewards page"
            ),
            preact.h("img", { className: "vsrewds_chevron rms_img", src: "" })
          )
        );
      },
      s = function () {
        var n = preactHooks.useContext(t),
          i = n.balance;
        return preact.h(
          "div",
          { className: "vsrewds_pointrow" },
          preact.h(
            "span",
            { className: "vsrewds_totalpoints", id: "vsrewds_total_points" },
            new Intl.NumberFormat(document.documentElement.lang).format(i)
          ),
          preact.h(
            "span",
            { className: "vsrewds_pts", id: "vsrewds_pts" },
            "PTS"
          )
        );
      },
      h = function () {
        return preact.h(
          "div",
          { className: "vsrewds_desc", id: "vsrewds_desc" },
          "You're earning Microsoft Rewards points when you search with Bing."
        );
      };
  })((u = t.Rewards || (t.Rewards = {})));
});
define("Components/Core/Modules/SocialMobilePreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
], function (n, t, i, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Social = void 0;
  var u;
  (function (n) {
    n.Social = function () {
      var n = preactHooks.useContext(i.ModelContext),
        t = n.model,
        u = n.scrolled,
        f = t.IsMobile,
        e = t.LocStrings;
      if (f && u)
        return preact.h(
          "div",
          { id: "hc_followus", className: "hc_card" },
          preact.h(
            "div",
            { className: "card_body" },
            preact.h("h2", { className: "header" }, e.LOC_HOMEPAGE_FOLLOW_US),
            preact.h(
              r.InstLinkClient,
              {
                href: "https://www.facebook.com/Bing/",
                nodeName: "followus",
                parentNodeName: "HPVSModules",
              },
              preact.h("img", {
                alt: "Facebook",
                className: "rms_img",
                src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMTh2MThoLTE4eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0xNy4wMDY4MzU5IDBjLjEzNDc2NjMgMCAuMjYyMjA2NS4wMjYzNjY5Mi4zODIzMjQzLjA3OTEwMTU2LjEyMDExNzcuMDUyNzM0NjQuMjI1NTg1NC4xMjQ1MTEyNy4zMTY0MDYyLjIxNTMzMjAzLjA5MDgyMDguMDkwODIwNzcuMTYyNTk3NC4xOTYyODg0Ny4yMTUzMzIuMzE2NDA2MjUuMDUyNzM0Ny4xMjAxMTc3OS4wNzkxMDE2LjI0NzU1NzkyLjA3OTEwMTYuMzgyMzI0MjJ2MTYuMDEzNjcxODRjMCAuMTM0NzY2My0uMDI2MzY2OS4yNjIyMDY1LS4wNzkxMDE2LjM4MjMyNDMtLjA1MjczNDYuMTIwMTE3Ny0uMTI0NTExMi4yMjU1ODU0LS4yMTUzMzIuMzE2NDA2MnMtLjE5NjI4ODUuMTYyNTk3NC0uMzE2NDA2Mi4yMTUzMzJjLS4xMjAxMTc4LjA1MjczNDctLjI0NzU1OC4wNzkxMDE2LS4zODIzMjQzLjA3OTEwMTZoLTQuNTg3ODkwNnYtNi45Njk3MjY2aDIuMzM3ODkwNmwuMzUxNTYyNS0yLjcxNTgyMDI4aC0yLjY4OTQ1MzF2LTEuNzMxNDQ1MzFjMC0uNDgwNDcxMTUuMTAyNTM4LS44MjE3NzYzMy4zMDc2MTcyLTEuMDIzOTI1NzhzLjU1MDc3ODgtLjMwMzIyMjY1IDEuMDM3MTA5NC0uMzAzMjIyNjVoMS40NDE0MDYydi0yLjQyNTc4MTI2Yy0uMzQ1NzA0OC0uMDQ2ODc1MjMtLjY5NDMzNDItLjA3NzYzNjY0LTEuMDQ1ODk4NC0uMDkyMjg1MTUtLjM1MTU2NDMtLjAxNDY0ODUxLS43MDMxMjMzLS4wMjE5NzI2Ni0xLjA1NDY4NzUtLjAyMTk3MjY2LS41NTY2NDM0IDAtMS4wNTAyOTA4LjA4NDk2MDA5LTEuNDgwOTU3LjI1NDg4MjgxLS40MzA2NjYzLjE2OTkyMjczLS43OTU0MDg3LjQxMTYxOTUzLTEuMDk0MjM4My43MjUwOTc2NnMtLjUyNTg3ODIuNjkxNDA0MDQtLjY4MTE1MjM3IDEuMTMzNzg5MDZjLS4xNTUyNzQyMS40NDIzODUwMy0uMjMyOTEwMTUuOTM2MDMyNDQtLjIzMjkxMDE1IDEuNDgwOTU3MDR2Mi4wMDM5MDYyNGgtMi4zNDY2Nzk2OXYyLjcxNTgyMDI4aDIuMzQ2Njc5Njl2Ni45Njk3MjY2aC04LjYyMjA3MDMyYy0uMTM0NzY2MyAwLS4yNjIyMDY0My0uMDI2MzY2OS0uMzgyMzI0MjItLjA3OTEwMTYtLjEyMDExNzc4LS4wNTI3MzQ2LS4yMjU1ODU0OC0uMTI0NTExMi0uMzE2NDA2MjUtLjIxNTMzMi0uMDkwODIwNzYtLjA5MDgyMDgtLjE2MjU5NzM5LS4xOTYyODg1LS4yMTUzMzIwMy0uMzE2NDA2Mi0uMDUyNzM0NjQtLjEyMDExNzgtLjA3OTEwMTU2LS4yNDc1NTgtLjA3OTEwMTU2LS4zODIzMjQzdi0xNi4wMTM2NzE4NGMwLS4xMzQ3NjYzLjAyNjM2NjkyLS4yNjIyMDY0My4wNzkxMDE1Ni0uMzgyMzI0MjIuMDUyNzM0NjQtLjEyMDExNzc4LjEyNDUxMTI3LS4yMjU1ODU0OC4yMTUzMzIwMy0uMzE2NDA2MjUuMDkwODIwNzctLjA5MDgyMDc2LjE5NjI4ODQ3LS4xNjI1OTczOS4zMTY0MDYyNS0uMjE1MzMyMDMuMTIwMTE3NzktLjA1MjczNDY0LjI0NzU1NzkyLS4wNzkxMDE1Ni4zODIzMjQyMi0uMDc5MTAxNTZ6IiBmaWxsPSIjNzY3Njc2Ii8+PC9nPjwvc3ZnPg==",
              })
            ),
            preact.h(
              r.InstLinkClient,
              {
                href: "https://www.instagram.com/bing/",
                nodeName: "followus",
                parentNodeName: "HPVSModules",
              },
              preact.h("img", {
                alt: "Instagram",
                className: "rms_img",
                src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0wIDcuMDk1Mjc2MjNjMC0zLjkxODYxMjg2IDMuMTc3NzIzMDctNy4wOTUyNzYyMyA3LjA5NTI3NjIzLTcuMDk1Mjc2MjNoOS44MDk0NDc1N2MzLjkxODYxMjggMCA3LjA5NTI3NjIgMy4xNzc3MjMwNyA3LjA5NTI3NjIgNy4wOTUyNzYyM3Y5LjgwOTQ0NzU3YzAgMy45MTg2MTI4LTMuMTc3NzIzMSA3LjA5NTI3NjItNy4wOTUyNzYyIDcuMDk1Mjc2MmgtOS44MDk0NDc1N2MtMy45MTg2MTI4NiAwLTcuMDk1Mjc2MjMtMy4xNzc3MjMxLTcuMDk1Mjc2MjMtNy4wOTUyNzYyem0yLjA4Njk1NjUyIDB2OS44MDk0NDc1N2MwIDIuNzY1MzczIDIuMjQyNzE1MjYgNS4wMDgzMTk3IDUuMDA4MzE5NzEgNS4wMDgzMTk3aDkuODA5NDQ3NTdjMi43NjUzNzMgMCA1LjAwODMxOTctMi4yNDI3MTUzIDUuMDA4MzE5Ny01LjAwODMxOTd2LTkuODA5NDQ3NTdjMC0yLjc2NTM3MzA4LTIuMjQyNzE1My01LjAwODMxOTcxLTUuMDA4MzE5Ny01LjAwODMxOTcxaC05LjgwOTQ0NzU3Yy0yLjc2NTM3MzA4IDAtNS4wMDgzMTk3MSAyLjI0MjcxNTI2LTUuMDA4MzE5NzEgNS4wMDgzMTk3MXptMy43NTY1MjE3NCA0Ljk1Njg5NzY3YzAtMy40Mjg5Njc5MSAyLjc3ODk3Mzc5LTYuMjA4Njk1NjQgNi4yMDg2OTU2NC02LjIwODY5NTY0IDMuNDI4OTY3OSAwIDYuMjA4Njk1NyAyLjc3ODk3Mzc5IDYuMjA4Njk1NyA2LjIwODY5NTY0IDAgMy40Mjg5Njc5LTIuNzc4OTczOCA2LjIwODY5NTctNi4yMDg2OTU3IDYuMjA4Njk1Ny0zLjQyODk2NzkxIDAtNi4yMDg2OTU2NC0yLjc3ODk3MzgtNi4yMDg2OTU2NC02LjIwODY5NTd6bTIuMDg2OTU2NTIgMGMwIDIuMjc2ODI4IDEuODQ1MDY1ODcgNC4xMjE3MzkxIDQuMTIxNzM5MTIgNC4xMjE3MzkxIDIuMjc2ODI4IDAgNC4xMjE3MzkxLTEuODQ1MDY1OCA0LjEyMTczOTEtNC4xMjE3MzkxIDAtMi4yNzY4MjgwMS0xLjg0NTA2NTgtNC4xMjE3MzkxMi00LjEyMTczOTEtNC4xMjE3MzkxMi0yLjI3NjgyODAxIDAtNC4xMjE3MzkxMiAxLjg0NTA2NTg3LTQuMTIxNzM5MTIgNC4xMjE3MzkxMnptOS4wNzgyNjA5Mi02LjQxNzM5MTI5YzAtLjgwNjgxNTk4LjY0ODQyODYtMS40NjA4Njk1NyAxLjQ2MDg2OTUtMS40NjA4Njk1Ny44MDY4MTYgMCAxLjQ2MDg2OTYuNjQ4NDI4NjEgMS40NjA4Njk2IDEuNDYwODY5NTcgMCAuODA2ODE1OTgtLjY0ODQyODYgMS40NjA4Njk1Ni0xLjQ2MDg2OTYgMS40NjA4Njk1Ni0uODA2ODE2IDAtMS40NjA4Njk1LS42NDg0Mjg2MS0xLjQ2MDg2OTUtMS40NjA4Njk1NnoiIGZpbGw9IiM3Njc2NzYiLz48L2c+PC9zdmc+",
              })
            ),
            preact.h(
              r.InstLinkClient,
              {
                href: "https://twitter.com/bing",
                nodeName: "followus",
                parentNodeName: "HPVSModules",
              },
              preact.h("img", {
                alt: "Twitter",
                className: "rms_img",
                src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0yNCA0LjU1ODU5Mzc1Yy0uMzI4MTI2Ni40OTIxODk5Ni0uNjk5MjE2Ny45NTExNjk3NS0xLjExMzI4MTIgMS4zNzY5NTMxMy0uNDE0MDY0Ni40MjU3ODMzNy0uODYzMjc4OS44MTQ0NTEzNi0xLjM0NzY1NjMgMS4xNjYwMTU2Mi4wMDc4MTI1LjEwOTM3NTU1LjAxMzY3MTkuMjE2Nzk2MzUuMDE3NTc4MS4zMjIyNjU2Mi4wMDM5MDYzLjEwNTQ2OTI4LjAwNTg1OTQuMjEyODkwMDguMDA1ODU5NC4zMjIyNjU2MyAwIC45ODQzNzk5Mi0uMTA1NDY3NyAxLjk1NzAyNjQ1LS4zMTY0MDYyIDIuOTE3OTY4NzUtLjIxMDkzODYuOTYwOTQyMy0uNTE1NjIzMSAxLjg5MDYyMDUtLjkxNDA2MjYgMi43ODkwNjI1LS41NzgxMjc4IDEuMzA0Njk0LTEuMzAwNzc2OSAyLjQ3MDY5OC0yLjE2Nzk2ODcgMy40OTgwNDY5cy0xLjg0OTYwMzkgMS44OTY0ODA4LTIuOTQ3MjY1NiAyLjYwNzQyMThjLTEuMDk3NjYxOC43MTA5NDExLTIuMjk0OTE1NCAxLjI1MzkwNDQtMy41OTE3OTY5IDEuNjI4OTA2M3MtMi42NTYyNDI4OS41NjI1LTQuMDc4MTI1LjU2MjVjLTEuMzQzNzU2NzIgMC0yLjY1NDI5MDQ5LS4xODU1NDUtMy45MzE2NDA2Mi0uNTU2NjQwNi0xLjI3NzM1MDE0LS4zNzEwOTU2LTIuNDgyNDE2MjItLjkyMzgyNDUtMy42MTUyMzQzOC0xLjY1ODIwMzIuMzgyODE0NDEuMDQ2ODc1My43NzM0MzU1MS4wNzAzMTI1IDEuMTcxODc1LjA3MDMxMjUgMS4xMTcxOTMwOSAwIDIuMTk3MjYwNDEtLjE3OTY4NTcgMy4yNDAyMzQzOC0uNTM5MDYyNSAxLjA0Mjk3Mzk2LS4zNTkzNzY3IDIuMDAxOTQ4NzUtLjg4MjgwOSAyLjg3Njk1MzEyLTEuNTcwMzEyNC0uNTIzNDQwMTItLjAwNzgxMjYtMS4wMjczNDEzMy0uMDk1NzAyMy0xLjUxMTcxODc1LS4yNjM2NzE5cy0uOTI3NzMyMzYtLjQwMjM0MjMtMS4zMzAwNzgxMy0uNzAzMTI1Yy0uNDAyMzQ1NzYtLjMwMDc4MjgtLjc1MzkwNDc0LS42NTgyMDExLTEuMDU0Njg3NS0xLjA3MjI2NTctLjMwMDc4Mjc1LS40MTQwNjQ1LS41MzMyMDIzLS44NzEwOTEyLS42OTcyNjU2Mi0xLjM3MTA5MzcuMTU2MjUwNzguMDIzNDM3Ni4zMTA1NDYxMS4wNDI5Njg3LjQ2Mjg5MDYyLjA1ODU5MzcuMTUyMzQ0NTIuMDE1NjI1MS4zMDY2Mzk4NS4wMjM0Mzc1LjQ2Mjg5MDYzLjAyMzQzNzUuNDM3NTAyMTkgMCAuODY3MTg1MzktLjA1ODU5MzEgMS4yODkwNjI1LS4xNzU3ODEyLS41NzgxMjc4OS0uMTE3MTg4MS0xLjEwNzQxOTQ3LS4zMjQyMTczLTEuNTg3ODkwNjMtLjYyMTA5MzgtLjQ4MDQ3MTE1LS4yOTY4NzY0LS44OTY0ODI2MS0uNjU4MjAwOS0xLjI0ODA0Njg3LTEuMDgzOTg0M3MtLjYyNDk5OTAyLS45MDYyNDczLS44MjAzMTI1LTEuNDQxNDA2M2MtLjE5NTMxMzQ4LS41MzUxNTg5LS4yOTI5Njg3NS0xLjA5NTcwMDE3LS4yOTI5Njg3NS0xLjY4MTY0MDZ2LS4wNTg1OTM3NWMuNjg3NTAzNDQuMzkwNjI2OTUgMS40MzM1ODk3My41OTc2NTYxMyAyLjIzODI4MTI1LjYyMTA5Mzc1LS4zNDM3NTE3Mi0uMjM0Mzc2MTctLjY1MDM4OTI4LS41MDE5NTE2Mi0uOTE5OTIxODctLjgwMjczNDM4LS4yNjk1MzI2LS4zMDA3ODI3NS0uNDk4MDQ1OTQtLjYyNjk1MTM2LS42ODU1NDY4OC0uOTc4NTE1NjJzLS4zMzIwMzA3NC0uNzIyNjU0My0uNDMzNTkzNzUtMS4xMTMyODEyNS0uMTUyMzQzNzUtLjc5Mjk2NjY4LS4xNTIzNDM3NS0xLjIwNzAzMTI1YzAtLjQzNzUwMjE5LjA1NDY4Njk1LS44NjUyMzIyOS4xNjQwNjI1LTEuMjgzMjAzMTIuMTA5Mzc1NTUtLjQxNzk3MDg0LjI3NzM0MjYyLS44MTQ0NTEyNi41MDM5MDYyNS0xLjE4OTQ1MzEzLjYyNTAwMzEzLjc3MzQ0MTM3IDEuMzIwMzA4NjcgMS40NjY3OTM4MSAyLjA4NTkzNzUgMi4wODAwNzgxMy43NjU2Mjg4My42MTMyODQzMSAxLjU4MDA3MzgxIDEuMTM4NjY5NjggMi40NDMzNTkzNyAxLjU3NjE3MTg3Ljg2MzI4NTU3LjQzNzUwMjE5IDEuNzY3NTczNC43ODMyMDE4NiAyLjcxMjg5MDYzIDEuMDM3MTA5MzcuOTQ1MzE3MjMuMjUzOTA3NTIgMS45MTQwNTc1NS40MDQyOTY2NSAyLjkwNjI1MDA1LjQ1MTE3MTg4LS4wNDY4NzUzLS4xNzk2ODg0LS4wODAwNzgxLS4zNjUyMzM0Mi0uMDk5NjA5NC0uNTU2NjQwNjItLjAxOTUzMTQtLjE5MTQwNzIxLS4wMjkyOTY5LS4zODA4NTg0NC0uMDI5Mjk2OS0uNTY4MzU5MzggMC0uNjc5NjkwOS4xMjg5MDUtMS4zMTgzNTYzOS4zODY3MTg3LTEuOTE2MDE1NjMuMjU3ODEzOC0uNTk3NjU5MjMuNjA5MzcyOC0xLjExOTEzODM5IDEuMDU0Njg3Ni0xLjU2NDQ1MzEyLjQ0NTMxNDctLjQ0NTMxNDczLjk2Njc5MzgtLjc5Njg3MzcxIDEuNTY0NDUzMS0xLjA1NDY4NzUuNTk3NjU5Mi0uMjU3ODEzNzkgMS4yMzYzMjQ3LS4zODY3MTg3NSAxLjkxNjAxNTYtLjM4NjcxODc1LjY4NzUwMzQgMCAxLjM0MTc5MzguMTM0NzY0MjggMS45NjI4OTA2LjQwNDI5Njg4LjYyMTA5NjkuMjY5NTMyNTkgMS4xNjYwMTMzLjY1NDI5NDM3IDEuNjM0NzY1NyAxLjE1NDI5Njg3LjU1NDY5MDItLjEwOTM3NTU1IDEuMDkxNzk0Mi0uMjYzNjcwODggMS42MTEzMjgxLS40NjI4OTA2My41MTk1MzM4LS4xOTkyMTk3NCAxLjAyMTQ4MTktLjQ0MzM1NzkyIDEuNTA1ODU5My0uNzMyNDIxODctLjE3OTY4ODMuNTcwMzE1MzUtLjQ1NTA3NjIgMS4wODk4NDE0MS0uODI2MTcxOCAxLjU1ODU5Mzc1cy0uODE0NDUwNi44NTU0NjcyMy0xLjMzMDA3ODIgMS4xNjAxNTYyNWMuOTg0MzgtLjExNzE4ODA5IDEuOTI1Nzc2OC0uMzc0OTk4MDEgMi44MjQyMTg4LS43NzM0Mzc1eiIgZmlsbD0iIzc2NzY3NiIvPjwvZz48L3N2Zz4=",
              })
            )
          )
        );
    };
  })((u = t.Social || (t.Social = {})));
});
define("Components/Core/Modules/VerticalScrollModulesPreact", [
  "require",
  "exports",
  "Components/Core/Modules/ImageGalleryPreact",
  "Components/Core/Modules/ImageOfDayPreact",
  "Components/Core/Modules/MakeDefaultPreact",
  "Components/Core/Modules/MomentsInTimePreact",
  "Components/Core/Modules/NearByMobilePreact",
  "Components/Core/Modules/OnThisDayPreact_noscrollbar",
  "Components/Core/Modules/OpalUpsellMobilePreact",
  "Components/Core/Modules/RewardsPreact",
  "Components/Core/Modules/SocialMobilePreact",
  "Components/Core/ModelContextPreact",
], function (n, t, i, r, u, f, e, o, s, h, c, l) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.VerticalScrollModules = void 0;
  var a = function () {
    var n = preactHooks.useContext(l.ModelContext).model,
      t = n.IsMobile,
      a = n.IsBingAppEnabled;
    return preact.h(
      "div",
      { className: "moduleCont" },
      preact.h(r.ImageOfDay.ImageOfDay, null),
      preact.h(f.MomentsInTime.MomentsInTime, null),
      preact.h(i.ImageGallery.ImageGallery, null),
      preact.h(o.OnThisDay.OnThisDay, null),
      preact.h(h.Rewards.Rewards, null),
      preact.h(u.MakeBingDefault.MakeBingDefault, null),
      preact.h(e.Nearby.Nearby, null),
      preact.h(c.Social.Social, null),
      t && a ? null : preact.h(s.OpalUpsell.OpalUpsell, null)
    );
  };
  t.VerticalScrollModules = a;
});
define("Components/Core/Modules/WidgetSharedPeregrineNewsFeed", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
], function (n, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.WidgetSharedPeregrineNewsFeed = void 0;
  var r = (function (n) {
    function t() {
      return (n !== null && n.apply(this, arguments)) || this;
    }
    return (
      __extends(t, n),
      (t.prototype.shouldComponentUpdate = function () {
        return !1;
      }),
      (t.prototype.componentDidMount = function () {
        this.props.widgetModule.startWidgetInitializer();
      }),
      (t.prototype.render = function () {
        var u = preactHooks.useContext(i.ModelContext).model,
          s = u.Market,
          h = u.TrueMarket,
          v = u.MSN_OCID,
          n = {},
          f,
          e,
          o,
          c,
          r,
          l,
          t,
          a;
        return (
          (n.appType = "bingHomepage"),
          (n.pageType = "widgetfeed"),
          (f = s ? s.toLowerCase() : ""),
          (e = h ? h.toLowerCase() : ""),
          (n.cm = f == "en-ww" || (f == "en-id" && e == "id-id") ? e : f),
          (n.pcsAdditionalQsp = ""),
          (o = {}),
          (o.wpoPageId = "wpoads"),
          (n.feed = o),
          (n.cc = this.props.cookieData),
          (c = { tmpl: u.EnabledFlights, pageProduct: "bing", ocid: v }),
          (n.telemetry = c),
          (r = {}),
          (r.shouldPreFetchPcsResponse = !0),
          (r.shouldUsePWOnlyFlights = !0),
          (r.shouldShowLoadingIcon = !0),
          (n.clientPerf = r),
          (l = JSON.stringify(n)),
          (t = {}),
          (t.widgetGroup = "widgetGroup-testpage"),
          (t.experienceName = "BingHomepageFeed"),
          (t.configRef = "".concat(t.experienceName, "/default")),
          (a = JSON.stringify(t)),
          preact.h(
            "div",
            { class: "widget_container", id: "widget_container" },
            preact.h("div", {
              id: "widgetGroup-testpage",
              class: "peregrine-widgetgroup",
              "data-widget": l,
            }),
            preact.h("div", { class: "peregrine-widgets", "data-widget": a })
          )
        );
      }),
      t
    );
  })(preact.Component);
  t.WidgetSharedPeregrineNewsFeed = r;
});
define("Components/Core/HooksPreactImportShim", [
  "require",
  "exports",
  "InstrumentPreact",
], function (n, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.useDynamicModules = void 0;
  var r = function (n) {
    var u = preactHooks.useState(new Map()),
      t = u[0],
      f = u[1],
      r = function (n, t, r) {
        typeof i.logDataEvent != "undefined" &&
          i.logDataEvent(
            n,
            "func",
            "useDynamicModules",
            "module",
            t,
            "error",
            r ? r : ""
          );
      };
    return (
      preactHooks.useEffect(
        function () {
          var u = [],
            i;
          n.forEach(function (n) {
            t.has(n) ||
              (r("Importing", n),
              u.push(
                new Promise(function (t, i) {
                  importShim(n)
                    .then(function (i) {
                      r("Imported", n);
                      t([n, i]);
                    })
                    .catch(function (t) {
                      r("ImportError", n, t.toString());
                      i([n, t]);
                    });
                })
              ));
          });
          i = new Map(t);
          Promise.all(u)
            .then(function (n) {
              n.forEach(function (n) {
                i.set(n[0], n[1]);
              });
              f(i);
            })
            .catch(function (n) {
              i.set(
                "error",
                "Error importing ".concat(n[0], ": ").concat(n[1])
              );
              f(i);
            });
        },
        [JSON.stringify(n)]
      ),
      t
    );
  };
  t.useDynamicModules = r;
});
define("Components/Core/Modules/WidgetSharedPeregrineNewsFeedModule", [
  "require",
  "exports",
  "Components/Core/Modules/WidgetSharedPeregrineNewsFeed",
  "Components/Core/HooksPreactImportShim",
  "InstrumentPreact",
  "Components/Core/Modules/VerticalScrollModulesPreact",
  "Components/Core/ModelContextPreact",
], function (n, t, i, r, u, f, e) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.WidgetSharedPeregrineNewsFeedModule = void 0;
  var o = function () {
    var a =
        "https://assets.msn.com/bundles/v1/bingHomepage/latest/widget-initializer.js",
      o = preactHooks.useRef(null),
      h = r.useDynamicModules([a]),
      n = ["Loading", "Loaded", "Fail"],
      v = preactHooks.useState(n[0]),
      c = v[0],
      s = v[1],
      l = !h.size && !h.get("error") ? null : h.get(a),
      y = preactHooks.useState(!1),
      ut = y[0],
      p = y[1],
      w = preactHooks.useContext(e.ModelContext),
      t = w.model,
      ft = w.updateWidgetAccessible,
      b = t.IsEUCookieConsentEnabled,
      k = t.EnableManagedCookiePreference,
      et = t.EuCookieName,
      ot = t.HasVerticalScroll,
      d = t.IsNonAadUser,
      g = "widgetHost.cookieConsent",
      nt = function () {
        var t = { mscc: sj_cook.get(et), bcp: sj_cook.get("BCP") },
          n = {};
        return (
          (n.required = b ? 1 : 0),
          n.required &&
            (k &&
              t.bcp &&
              (n.categories = {
                AD: parseInt(sj_cook.get("BCP", "AD")),
                AL: parseInt(sj_cook.get("BCP", "AL")),
                ES: 1,
                SM: parseInt(sj_cook.get("BCP", "SM")),
              }),
            !k && t.mscc && (n.categories = { AD: 1, AL: 1, ES: 1, SM: 1 })),
          n
        );
      },
      tt = function () {
        return sj_cook.get("MUID") != null && sj_cook.get("MUID") != undefined;
      },
      it,
      rt;
    return (preactHooks.useEffect(
      function () {
        (h.get("error") &&
          (s(n[2]), ft(!1), u.logError("ImportedWidgetModuleErrorEvent")),
        l) && s(n[1]);
      },
      [l]
    ),
    preactHooks.useEffect(function () {
      if ((p(!b || tt()), !t.HasMSBTOB)) {
        var i = !1;
        sj_evt.bind(
          "aad:signedin",
          function () {
            i || s(n[2]);
          },
          1
        );
        sj_evt.bind(
          "wl:auth",
          function () {
            i = !0;
          },
          1
        );
      }
      sj_evt.bind("ConsentUpdated", function () {
        var t = nt(),
          n;
        tt() && p(!0);
        sj_evt.fire(g, t);
        n = document.createEvent("CustomEvent");
        n.initCustomEvent(g, !0, !0, t.categories);
        window.dispatchEvent(n);
      });
      window.addEventListener("CustomWidgetErrorEvent", function (t) {
        var i, r, f, e, o, h;
        s(n[2]);
        u.logError(
          "CustomWidgetErrorEvent",
          "type",
          (i = t === null || t === void 0 ? void 0 : t.detail) === null ||
            i === void 0
            ? void 0
            : i.type,
          "message",
          (f =
            (r = t === null || t === void 0 ? void 0 : t.detail) === null ||
            r === void 0
              ? void 0
              : r.payload) === null || f === void 0
            ? void 0
            : f.message,
          "payload",
          (h =
            (o =
              (e = t === null || t === void 0 ? void 0 : t.detail) === null ||
              e === void 0
                ? void 0
                : e.payload) === null || o === void 0
              ? void 0
              : o.extra) === null || h === void 0
            ? void 0
            : h.payload
        );
      });
    }, []),
    preactHooks.useEffect(
      function () {
        if (o.current) {
          o.current.addEventListener("BingHomepageFeedErrorEvent", function () {
            s(n[2]);
            u.logError("BingHomepageFeedErrorEvent");
          });
          var t = document.querySelector("#peregrine-widget-inst");
          o.current
            .querySelector(".peregrine-widgetgroup")
            .addEventListener("PeregrineWidgetEvent", function (n) {
              var e, o, s, h, c, l, a, v, y, p, w, i, f, r;
              (n || n.detail) &&
                ((i = n.detail),
                ((e = i === null || i === void 0 ? void 0 : i.payload) ===
                  null || e === void 0
                  ? void 0
                  : e.name) === "MS.News.Web.PageAction" &&
                  ((s =
                    (o = i === null || i === void 0 ? void 0 : i.payload) ===
                      null || o === void 0
                      ? void 0
                      : o.data) === null || s === void 0
                    ? void 0
                    : s.actionType) == "click" &&
                  ((
                    (h = i.payload.data.object) === null || h === void 0
                      ? void 0
                      : h.destinationUrl
                  )
                    ? (u.logWidgetClick(
                        "PeregrineWidgetFeed-NavClick",
                        "nodeName",
                        "PeregrineWidgetFeed",
                        "parentNodeName",
                        "HPVSModules",
                        "url",
                        (c = i.payload.data.object) === null || c === void 0
                          ? void 0
                          : c.destinationUrl
                      ),
                      si_T && t && si_T(t.getAttribute("data-h")))
                    : u.logWidgetClick(
                        "PeregrineWidgetFeed-NonNavClick",
                        "nodeName",
                        "PeregrineWidgetFeed",
                        "parentNodeName",
                        "HPVSModules"
                      )),
                ((l = i === null || i === void 0 ? void 0 : i.payload) ===
                  null || l === void 0
                  ? void 0
                  : l.name) == "MS.News.Web.LoadTime" &&
                  ((f =
                    (y =
                      (v =
                        (a =
                          i === null || i === void 0 ? void 0 : i.payload) ===
                          null || a === void 0
                          ? void 0
                          : a.data) === null || v === void 0
                        ? void 0
                        : v.extSchema) === null || y === void 0
                      ? void 0
                      : y.markers),
                  (r =
                    (w =
                      (p = i === null || i === void 0 ? void 0 : i.payload) ===
                        null || p === void 0
                        ? void 0
                        : p.data) === null || w === void 0
                      ? void 0
                      : w.flight),
                  f &&
                    f["TTF.BingHomepageFeed"] &&
                    f["TTVR.BingHomepageFeed"] &&
                    u.logShow(
                      "PeregrineWidgetShow",
                      "nodeName",
                      "PeregrineWidgetFeed",
                      "parentNodeName",
                      "HPVSModules",
                      "TTF",
                      f["TTF.BingHomepageFeed"],
                      "TTVR",
                      f["TTVR.BingHomepageFeed"],
                      "setupStart",
                      f.WidgetSetupStart,
                      "pcsCallStart",
                      f.WidgetsPcsCallStart,
                      "pcsCallEnd",
                      f.WidgetsPcsCallEnd
                    ),
                  ((r === null || r === void 0 ? void 0 : r.id) ||
                    (r === null || r === void 0 ? void 0 : r.tmpl)) &&
                    u.logDataEvent(
                      "PeregrineWidgetFlights",
                      "flightID",
                      (r === null || r === void 0 ? void 0 : r.id) || {},
                      "tmpl",
                      (r === null || r === void 0 ? void 0 : r.tmpl) || {}
                    )));
            });
        }
      },
      [o.current]
    ),
    c == n[0])
      ? null
      : ((it = c == n[1] && ut),
        (rt = (c == n[2] || (!d && !t.HasMSBTOB)) && ot),
        preact.h(
          "div",
          { className: "moduleCont", style: { backgroundColor: "unset" } },
          it && !t.IsEdu && (d || t.HasMSBTOB)
            ? preact.h(
                "div",
                {
                  class: "module show",
                  ref: o,
                  style: { backgroundColor: "unset" },
                },
                preact.h(u.InstLinkClient, {
                  href: "#",
                  nodeName: "PeregrineWidgetFeed",
                  parentNodeName: "HPVSModules",
                  id: "peregrine-widget-inst",
                  tabIndex: -1,
                  "aria-label": "instrument link",
                  "aria-hidden": "true",
                }),
                preact.h(i.WidgetSharedPeregrineNewsFeed, {
                  widgetModule: l,
                  cookieData: nt(),
                })
              )
            : rt
            ? preact.h(f.VerticalScrollModules, null)
            : null
        ));
  };
  t.WidgetSharedPeregrineNewsFeedModule = o;
});
define("Components/Core/Modules/VerticalScrollModulesWidgetNewsFeedPreact", [
  "require",
  "exports",
  "Components/Core/Modules/WidgetSharedPeregrineNewsFeedModule",
], function (n, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.VerticalScrollModulesMSNFeed = void 0;
  var r = function () {
    return preact.h(i.WidgetSharedPeregrineNewsFeedModule, null);
  };
  t.VerticalScrollModulesMSNFeed = r;
});
define("Components/Core/Modules/ModulesPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/Modules/VerticalScrollModulesPreact",
  "Components/Core/Modules/VerticalScrollModulesWidgetNewsFeedPreact",
], function (n, t, i, r, u, f) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Modules = void 0;
  var e = function () {
    var n = preactHooks.useContext(r.ModelContext).model,
      t = n.HasVerticalScroll,
      e = n.IsWidgetCompatible;
    return preact.h(
      i.Region,
      { nodeName: "HPVSModules", parentNodeName: "Core" },
      preact.h(i.InstLink, {
        href: "#",
        id: "vs_hidden",
        nodeName: "vs_hidden",
        parentNodeName: "HPVSModules",
        tabIndex: -1,
        "aria-label": "instrument link",
        "aria-hidden": "true",
      }),
      e && (n.IsBingAtWorkEnabled != !0 || n.HasMSBTOB)
        ? preact.h(f.VerticalScrollModulesMSNFeed, null)
        : t
        ? preact.h(u.VerticalScrollModules, null)
        : null
    );
  };
  t.Modules = e;
});
define("Components/Core/Carousel/CarouselContextPreact", [
  "require",
  "exports",
], function (n, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.CarouselContext = void 0;
  t.CarouselContext = preact.createContext(null);
});
define("Components/Core/Carousel/NavigationPreact", [
  "require",
  "exports",
  "Components/Core/Carousel/CarouselContextPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
  "InstrumentPreact",
], function (n, t, i, r, u, f) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.CarouselNavigation = void 0;
  var e = function () {
    var t = preactHooks.useContext(i.CarouselContext),
      tt = t.updateUrlParam,
      it = t.updateOffset,
      rt = t.updateCount,
      ut = t.count,
      ft = t.filters,
      n = t.carouselRef,
      et = t.tileGroups,
      ot = t.interestTitlesCount,
      s = preactHooks.useContext(r.ModelContext),
      w = s.clientSettings,
      st = s.updateClientSettings,
      ht = s.scrolled,
      a = s.model,
      v = a.IsMobile,
      o = a.RtlLang,
      y = a.LocStrings,
      b = preactHooks.useState(!1),
      ct = b[0],
      lt = b[1],
      e = u.useScrollPosition(n.current, et).left,
      h = 0,
      c = n.current ? n.current.scrollWidth - n.current.clientWidth - 1 : 0,
      k = 194,
      at = n.current ? Math.floor(n.current.offsetWidth / k) : 0,
      d = n.current ? (at - 1) * k : 0,
      l = v ? { "aria-hidden": "true", tabindex: "-1" } : { tabindex: "0" },
      vt = function () {
        var n = w.Pn,
          t = n.St,
          i = __assign(__assign({}, n), { St: (t + 1) % 3 }),
          r = __assign(__assign({}, w), { Pn: i });
        st(r);
      },
      g = function (n) {
        var t = preactHooks.useContext(r.ModelContext),
          u = t.clientSettings,
          f = t.carouselLoaded,
          i;
        return f ? ((i = u.Pn.St), n[i]) : n[2];
      },
      nt = function () {
        n.current && n.current.scrollBy({ left: -d, behavior: "smooth" });
      },
      p = function () {
        if (
          n.current &&
          (n.current.scrollBy({ left: d, behavior: "smooth" }), !ct)
        )
          it(ut), rt(50), tt("filters=".concat(ft)), lt(!0);
      };
    return (
      v && ht && p(),
      preact.h(
        "div",
        { className: "nav" },
        preact.h(
          f.InstLink,
          __assign(
            {
              className: "down",
              id: "hideShowCaro",
              href: "#",
              onClick: vt,
              nodeName: "caro_nav_down",
              parentNodeName: "PopNowModule",
              role: "button",
              "aria-label": g([
                "The taskbar was expanded. Press to collapse taskbar",
                "The taskbar was collapsed. Press to hide taskbar",
                "The taskbar was hidden. Press to expand taskbar",
              ]),
              "aria-expanded": g(["true", "true", "false"]),
            },
            l
          )
        ),
        preact.h(
          f.InstLink,
          __assign(
            {
              className: "edit_interests",
              id: "editInterets",
              href: "/profile/interests?FORM=O2HV45",
              nodeName: "interests",
              parentNodeName: "PopNowModule",
              role: "button",
              "aria-label": y.LOC_MODULES_PROACTIVE_EDIT_TOOLTIP,
              style: { display: !v && ot > 0 ? "block" : "none" },
            },
            l
          ),
          preact.h(
            "svg",
            {
              viewBox: "0 0 12 12",
              "enable-background": "new 0 0 12 12",
              height: "16",
              width: "16",
            },
            preact.h("path", {
              d: "M9.724 3.734l-1.459-1.459 1.338-1.336.002-.001v-.001l1.459 1.459-1.34 1.338zm-5.459 5.451c-.108-.325-.273-.662-.534-.923-.262-.262-.602-.425-.931-.529l4.801-4.795 1.46 1.46-4.796 4.787zm-1.01 1.009l-2.089.641.615-2.085.35-.349c.337.106.686.274.954.542.257.257.417.583.523.899l-.353.352zm8.471-8.462l-1.458-1.458c-.182-.182-.422-.274-.663-.274-.241 0-.481.092-.663.274l-7.992 7.981-.888 3.012c-.088.364.193.695.544.695l.142-.018 3.003-.92.05-.052v.012l.663-.663v-.01l5.259-5.251.002.002.663-.663-.001-.002 1.34-1.338c.364-.366.364-.962-.001-1.327z",
            })
          )
        ),
        preact.h(
          f.InstLink,
          __assign(
            {
              className: "leftNav ".concat(
                (o ? e >= c : e <= h) ? "disabled" : ""
              ),
              id: "leftNavCaro",
              onClick: o ? p : nt,
              nodeName: "caro_nav_left",
              parentNodeName: "PopNowModule",
              role: "button",
              "aria-label": y.LOC_HOMEPAGE_CAROUSEL_PREV,
              "aria-disabled": "".concat(o ? e >= c : e <= h),
            },
            l
          )
        ),
        preact.h(
          f.InstLink,
          __assign(
            {
              className: "rightNav ".concat(
                (o ? e <= h : e >= c) ? "disabled" : ""
              ),
              id: "rightNavCaro",
              onClick: o ? nt : p,
              nodeName: "caro_nav_right",
              parentNodeName: "PopNowModule",
              role: "button",
              "aria-label": y.LOC_HOMEPAGE_CAROUSEL_MORE,
              "aria-disabled": "".concat(o ? e <= h : e >= c),
            },
            l
          )
        )
      )
    );
  };
  t.CarouselNavigation = e;
});
define("Components/Core/Carousel/NewsInterestPreact", [
  "require",
  "exports",
  "Components/Core/Carousel/CarouselContextPreact",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
], function (n, t, i, r, u) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.NewsInterest = void 0;
  var f = function (n) {
    var t = n.items,
      f = preactHooks.useContext(i.CarouselContext).interestTitlesCount,
      e = preactHooks.useContext(r.ModelContext).model,
      o = e.IsMobile;
    return (
      !o && f > 4 && (t = t.slice(0, 1)),
      preactHooks.useEffect(function () {
        u.logShow("ProactiveNewsTiles", "Count", (t || []).length);
      }, []),
      preact.h(
        preact.Fragment,
        null,
        t.map(function (n) {
          return preact.h(
            "li",
            { className: "itile crs_wide" },
            preact.h(
              u.InstLinkClient,
              {
                href: n.url,
                nodeName: "tile_click",
                parentNodeName: "PopNowModule",
                loggingData: ["tile", "newsinterest"],
                target: "_blank",
              },
              preact.h(
                "span",
                { className: "crs_item crs_news_item" },
                preact.h("div", { className: "hp_text" }, n.shortTitle),
                preact.h(
                  "div",
                  { className: "crs_content" },
                  n.imageUrl
                    ? preact.h("img", {
                        src: n.imageUrl,
                        className: "crs_newsthmb",
                        alt: n.longTitle,
                      })
                    : null,
                  preact.h(
                    "span",
                    {
                      className: "crs_news crs_item_ctnt ".concat(
                        n.imageUrl ? "hasimg" : ""
                      ),
                    },
                    preact.h("p", { className: "crs_newsqry" }, n.longTitle),
                    preact.h("span", { className: "crs_newstm" }, n.subtext)
                  )
                )
              )
            )
          );
        })
      )
    );
  };
  t.NewsInterest = f;
});
define("Components/Core/Carousel/TrendingNowBadgePreact", [
  "require",
  "exports",
  "Components/Core/HooksPreact",
  "Components/Core/Carousel/CarouselContextPreact",
  "Components/Core/ModelContextPreact",
], function (n, t, i, r, u) {
  "use strict";
  var f, e;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.TrendingNowBadge = void 0;
  f = function (n) {
    var f = n.item,
      k = f.badge,
      o = f.dataTags,
      d = f.tooltip,
      s = __assign({}, k),
      h = s.color,
      t = s.type;
    if (h && t) {
      var c = preactHooks.useContext(r.CarouselContext),
        g = c.carouselRef,
        nt = c.tileGroups,
        l = i.useScrollPosition(g.current, nt).left,
        a = preactHooks.useState(0),
        st = a[0],
        tt = a[1],
        it = preactHooks.useContext(u.ModelContext).model,
        v = it.LocStrings,
        rt = v.LOC_MODULES_AD_NEWS_TITLE,
        ut = v.LOC_MODULES_BREAKING_NEWS_TITLE,
        y = t == "RtbAd" ? rt : t == "Breaking" ? ut : null,
        p = preactHooks.useRef(null),
        w = preactHooks.useState(o ? o["data-mv"] || null : null),
        b = w[0],
        ft = w[1],
        et = t == "RtbAd" && b != null && e(p.current) ? b : null,
        ot = i.useFetch(et);
      return (
        ot != null && ft(null),
        preactHooks.useEffect(
          function () {
            tt(l);
          },
          [l]
        ),
        preact.h(
          "div",
          {
            className: "badge ".concat(h),
            "aria-label": "... ".concat(y, "! ").concat(d),
            ref: t == "RtbAd" ? p : null,
          },
          y
        )
      );
    }
  };
  t.TrendingNowBadge = f;
  e = function (n) {
    if (!n || !n.getBoundingClientRect) return !1;
    var i = function () {
        return n.getBoundingClientRect();
      },
      t = function () {
        return document.querySelector("#crs_pane").getBoundingClientRect();
      };
    return i().left > t().left && i().left + 186 < t().left + t().width;
  };
});
define("Components/Core/Carousel/TrendingNowPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/Carousel/TrendingNowBadgePreact",
], function (n, t, i, r, u) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.TrendingNow = void 0;
  var f = function (n) {
    var f = n.items,
      t = preactHooks.useContext(r.ModelContext).model,
      e = t.CarouselTooltipEnabled,
      o = t.TOBHasMsnIcon,
      s = t.OpenTrendingTileNewTab;
    return (
      preactHooks.useEffect(function () {
        i.logShow("ProactiveTrendingNowTiles", "Count", (f || []).length);
      }, []),
      preact.h(
        preact.Fragment,
        null,
        f.map(function (n) {
          var h = n.badge,
            r = n.imageCredit,
            c = n.url,
            l = n.imageUrl,
            a = n.title,
            v = n.tooltip,
            t = n.linksTarget,
            y = n.additionalMetaData,
            f = __assign({}, h).type;
          return preact.h(
            "li",
            { className: "pntile" },
            preact.h(
              i.InstLinkClient,
              {
                href: "".concat(c),
                nodeName: "tile_click",
                parentNodeName: "PopNowModule",
                target: s ? "_blank" : t && t.length ? t : null,
                loggingData: ["tile", "trendingnow"],
              },
              preact.h(
                "span",
                { className: "crs_item ".concat(f ? f.toLowerCase() : "") },
                preact.h("h2", { title: e ? v : "", className: "hp_text" }, a),
                preact.h("img", {
                  src: l,
                  title: r,
                  role: "presentation",
                  alt: r,
                }),
                o
                  ? preact.h(
                      "a",
                      {
                        href: "".concat(y.msn.clickThroughUrl),
                        target: "_blank",
                        title: "Read Article",
                      },
                      preact.h(
                        "svg",
                        {
                          class: "msnicon",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        preact.h("path", {
                          d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",
                          fill: "black",
                          "fill-opacity": "0.54",
                        }),
                        preact.h("path", {
                          d: "M7.28571 6.85715C6.57563 6.85715 6 7.43278 6 8.14286V15.8571C6 16.5672 6.57563 17.1429 7.28571 17.1429H10.2857C10.9867 17.1429 11.609 16.8063 12 16.2859C12.391 16.8063 13.0133 17.1429 13.7143 17.1429H16.7143C17.4244 17.1429 18 16.5672 18 15.8571V8.14286C18 7.43278 17.4244 6.85715 16.7143 6.85715H13.7143C13.0133 6.85715 12.391 7.19372 12 7.71408C11.609 7.19372 10.9867 6.85715 10.2857 6.85715H7.28571ZM11.5714 9V15C11.5714 15.7101 10.9958 16.2857 10.2857 16.2857H7.28571C7.04902 16.2857 6.85714 16.0938 6.85714 15.8571V8.14286C6.85714 7.90617 7.04902 7.71429 7.28571 7.71429H10.2857C10.9958 7.71429 11.5714 8.28992 11.5714 9ZM12.4286 15V9C12.4286 8.28992 13.0042 7.71429 13.7143 7.71429H16.7143C16.951 7.71429 17.1429 7.90617 17.1429 8.14286V15.8571C17.1429 16.0938 16.951 16.2857 16.7143 16.2857H13.7143C13.0042 16.2857 12.4286 15.7101 12.4286 15Z",
                          fill: "white",
                        })
                      )
                    )
                  : null,
                preact.h(u.TrendingNowBadge, { item: n })
              )
            )
          );
        })
      )
    );
  };
  t.TrendingNow = f;
});
define("Components/Core/Carousel/CarouselPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/Carousel/CarouselContextPreact",
  "Components/Core/Carousel/NavigationPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/Carousel/NewsInterestPreact",
  "Components/Core/Carousel/TrendingNowPreact",
  "Components/Core/HooksPreact",
], function (n, t, i, r, u, f, e, o, s) {
  "use strict";
  var h;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Carousel = void 0;
  h = function () {
    var o = preactHooks.useContext(f.ModelContext),
      t = o.model,
      g = o.updateCarouselLoaded,
      nt = o.isTobDisabledOnClient,
      tt = t.CarouselApiUrl,
      it = t.HasCarousel,
      rt = t.IsTobDisabled,
      ut = t.IsEdu,
      h = ut && (rt || nt);
    if (it) {
      var l = preactHooks.useState(""),
        ft = l[0],
        et = l[1],
        a = preactHooks.useState(0),
        ot = a[0],
        st = a[1],
        v = preactHooks.useState(20),
        y = v[0],
        ht = v[1],
        p = preactHooks.useState(""),
        w = p[0],
        ct = p[1],
        b = preactHooks.useState([]),
        n = b[0],
        lt = b[1],
        k = preactHooks.useState(0),
        at = k[0],
        vt = k[1],
        d = preactHooks.useRef(null),
        e = s.useFetch(
          ""
            .concat(tt, "&format=json&ecount=")
            .concat(y, "&efirst=")
            .concat(ot, "&")
            .concat(w)
        );
      return (
        preactHooks.useEffect(
          function () {
            !h &&
              e &&
              e.data &&
              (e.data.map(function (t) {
                if (t)
                  if (typeof t == "string") et(t);
                  else if (t.typeName && t.items) {
                    var i = t.typeName,
                      r = t.items,
                      u = !1;
                    i != "TrendingNow" &&
                      i != "Msn" &&
                      vt(function (n) {
                        return n + r.length;
                      });
                    n.map(function (n) {
                      var t;
                      n.typeName == i &&
                        ((t = n.items).push.apply(t, r), (u = !0));
                    });
                    u || n.push(t);
                  }
              }),
              i.logDataEvent(
                "fetched",
                "func",
                "carousel",
                "count",
                n && n.length
              ),
              n && n.length > 0 && (lt(__spreadArray([], n, !0)), g(!0)));
          },
          [e]
        ),
        preact.h(
          r.CarouselContext.Provider,
          {
            value: {
              urlParam: w,
              updateUrlParam: ct,
              updateCount: ht,
              count: y,
              updateOffset: st,
              filters: ft,
              tileGroups: n,
              carouselRef: d,
              interestTitlesCount: at,
            },
          },
          preact.h(
            i.Region,
            { nodeName: "HPModules", parentNodeName: "Core" },
            preact.h(
              i.Region,
              { nodeName: "PopNowModule", parentNodeName: "HPModules" },
              preact.h(i.InstLink, {
                href: "#",
                nodeName: "tile_click",
                parentNodeName: "PopNowModule",
                tabIndex: -1,
                "aria-label": "instrument link",
                "aria-hidden": "true",
              }),
              preact.h(i.InstLink, {
                href: "#",
                nodeName: "caro_hidden",
                parentNodeName: "PopNowModule",
                tabIndex: -1,
                "aria-label": "instrument link",
                "aria-hidden": "true",
              }),
              preact.h(
                "div",
                {
                  className: "carousel ".concat(h ? "hide" : "show"),
                  id: "carousel",
                },
                preact.h(u.CarouselNavigation, null),
                preact.h(
                  "ul",
                  { id: "crs_pane", ref: d },
                  preact.h(c, { tileGroups: n })
                )
              )
            )
          )
        )
      );
    }
  };
  t.Carousel = h;
  var c = function (n) {
      var t = n.tileGroups,
        e = preactHooks.useContext(r.CarouselContext).interestTitlesCount,
        o = preactHooks.useContext(f.ModelContext).model,
        s = o.IsMobile,
        i,
        u;
      return (
        !s &&
          e > 0 &&
          ((i = t.length),
          (u = { typeName: "MyUpdates", items: [] }),
          (t = __spreadArray(
            __spreadArray([], (t || []).slice(0, i - 1), !0),
            [u, t[i - 1]],
            !1
          ))),
        preact.h(
          preact.Fragment,
          null,
          t.map(function (n) {
            return preact.h(l, { group: n });
          })
        )
      );
    },
    l = function (n) {
      var t = n.group,
        i = preactHooks.useContext(f.ModelContext).model,
        r = i.LocStrings,
        u = i.IsMobile;
      if (
        (s.useFetch(
          t.items && t.typeName && t.typeName == "TrendingNow"
            ? a(t.items)
            : null
        ),
        t.typeName && t.items)
      ) {
        if (t.typeName == "NewsInterest" || t.typeName == "Msn")
          return preact.h(
            "li",
            { className: "tile_grp" },
            u
              ? preact.h(
                  "h2",
                  { class: "screen_reader_text" },
                  r.LOC_HOMEPAGE_CAROUSEL_SWITCHER_INTERESTS
                )
              : null,
            preact.h(
              "ul",
              { id: "news_interest_tile" },
              preact.h(e.NewsInterest, { items: t.items })
            )
          );
        if (t.typeName == "TrendingNow")
          return preact.h(
            "li",
            { className: "tile_grp" },
            u
              ? preact.h(
                  "h2",
                  { class: "card_title" },
                  r.LOC_HOMEPAGE_VERTICAL_SCROLL_TOB
                )
              : null,
            preact.h(
              "ul",
              { id: "trending_now_tile" },
              preact.h(o.TrendingNow, { items: t.items })
            )
          );
      }
    },
    a = function (n) {
      var t, i;
      return n
        ? ((t = n.filter(function (n) {
            return n && n.dataTags && n.dataTags["data-mi"];
          })),
          !(t && t.length && t.length > 0))
          ? null
          : ((i = "/api/v1/mediation/tracking/?data="),
            t.map(function (n) {
              i += "".concat(encodeURIComponent(n.dataTags["data-mi"]), ",");
            }),
            (i += "&rtype=miFeedBackGroup"))
        : null;
    };
});
define("Components/Core/SpeechPreact_Utils", ["require", "exports"], function (
  n,
  t
) {
  "use strict";
  var i, r;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.iconInit = t.updateText = void 0;
  i = function (n, t) {
    var i = document.querySelector("#sb_form_q"),
      e,
      f,
      r,
      u;
    i &&
      ((i.value = n),
      typeof t != "undefined" && t && t.sboxtgt && (i.form.action = t.sboxtgt),
      URLSearchParams &&
        ((e = new URLSearchParams(window.location.search)),
        (f = e.get("location")),
        f &&
          ((r = sj_ce("input")),
          (r.type = "hidden"),
          (r.name = "location"),
          (r.value = f),
          i.form.appendChild(r))),
      (_G === null || _G === void 0 ? void 0 : _G.IG) &&
        ((u = sj_ce("input")),
        (u.type = "hidden"),
        (u.name = "uqurequestid"),
        (u.value = _G.IG),
        i.form.appendChild(u)),
      i.form.submit());
  };
  t.updateText = i;
  r = function () {
    var n = document.querySelector("#sb_form");
    n && n.classList.add("hasmic");
  };
  t.iconInit = r;
});
define("Components/Core/GiveWithBing", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
  "InstrumentPreact",
], function (n, t, i, r, u) {
  "use strict";
  var f;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.GiveWithBing = void 0;
  f = function () {
    var u = preactHooks.useContext(i.ModelContext),
      f = u.model,
      n = u.scrollPosition,
      e = r.useClientSettings(f),
      h = e.clientSettings,
      a = e.updateClientSettings,
      t = f.GiveWithBingSettings,
      s = preactHooks.useState(!1),
      c = s[0],
      l = s[1];
    return (
      preactHooks.useEffect(function () {
        sj_evt.bind(
          "RewardsCookieUpdated",
          function () {
            return __awaiter(void 0, void 0, void 0, function () {
              return __generator(this, function () {
                return l(!0), [2];
              });
            });
          },
          1
        );
      }, []),
      (!n || (n === null || n === void 0 ? void 0 : n.top) < 150) &&
      r.useClientSideRender() &&
      t &&
      t.IsGiveWithBingEnabled &&
      t.GiveV3EnabledStatus == 0 &&
      (c || sj_cook.get("_SS", "GB")) &&
      h.Gwb == 0
        ? preact.h(preact.Fragment, null, preact.h(o, null))
        : void 0
    );
  };
  t.GiveWithBing = f;
  var e = function () {
      return (
        sj_cook.get("_RwBf", "o") == "0" || sj_cook.get("_RwBf", "o") == "16"
      );
    },
    s = function () {
      var r = preactHooks.useContext(i.ModelContext).model,
        n = r.GiveWithBingSettings,
        t = r.LocStrings,
        f = e();
      if (
        !f &&
        n &&
        n.IsGiveWithBingEligibleUserType &&
        n.ShowOnlyForNonGiveUsers
      )
        return preact.h(
          u.InstLinkClient,
          {
            className: "bsb_signup",
            href: n.LearnMoreLandingUrl,
            nodeName: "GWB_LearnMore",
            parentNodeName: "Searchbox",
          },
          preact.h(
            "span",
            { className: "text left" },
            preact.h("span", { className: "gwb_icon" }, " "),
            preact.h(
              "span",
              { className: "signup_prefix" },
              t.GWB_BELOW_SEARCHBOX_MESSAGE_PREFIX
            ),
            preact.h("span", null, " "),
            preact.h(
              "span",
              { className: "signup_gwb" },
              t.GWB_BELOW_SEARCHBOX_MESSAGE_GWB
            ),
            preact.h("span", null, " "),
            preact.h(
              "span",
              { className: "signup_postfix" },
              t.GWB_BELOW_SEARCHBOX_MESSAGE_POSTFIX
            )
          ),
          preact.h(
            "span",
            { className: "text right" },
            preact.h(
              "span",
              { className: "signup_learnmore" },
              preact.h("span", null, t.GWB_BELOW_SEARCHBOX_LEARN_MORE),
              preact.h("span", { className: "chevron" })
            )
          )
        );
    },
    h = function () {
      var t = preactHooks.useContext(i.ModelContext).model,
        n = t.GiveWithBingSettings,
        r = t.LocStrings,
        u = e();
      if (
        !u &&
        n &&
        n.IsGiveWithBingEligibleUserType &&
        n.IsTotalDonationVisible &&
        n.ShowOnlyForNonGiveUsers
      )
        return preact.h(
          "div",
          { className: "bsb_donation" },
          preact.h(
            "div",
            { className: "current_donation" },
            preact.h(
              "span",
              { className: "text" },
              preact.h("span", null, n.CurrentTotalDonationInLocalCurrency)
            )
          ),
          preact.h(
            "div",
            { className: "donation_text" },
            preact.h(
              "span",
              { className: "text" },
              preact.h(
                "span",
                null,
                r.GWB_BELOW_SEARCHBOX_DONATION_GIVE_WITH_BING
              )
            )
          )
        );
    },
    o = function () {
      var r = preactHooks.useContext(i.ModelContext).model,
        f = r.GiveWithBingSettings,
        n = r.LocStrings,
        s = sj_cook.get("_RwBf", "g") == "1",
        e = sj_cook.get("_RwBf", "cname"),
        o = sj_cook.get("_SS", "GB"),
        t;
      if (s && e && o)
        return (
          (t = decodeURIComponent(e).replace(/\+/g, " ")),
          preact.h(
            "div",
            { className: "bsb_gwb" },
            preact.h(
              "div",
              { className: "cause" },
              preact.h("span", { className: "gwb_icon" }, " "),
              preact.h("span", null, n.GWB_BELOW_SEARCHBOX_ORG_PREFIX),
              preact.h("span", null, " "),
              preact.h(
                "span",
                { id: "cause_name", className: "cause_name", title: t },
                t
              )
            ),
            preact.h(
              u.InstLinkClient,
              {
                className: "donation_box text",
                href: f.ImpactCtaUrl,
                nodeName: "GWB_Impact",
                parentNodeName: "Searchbox",
              },
              preact.h(
                "div",
                { className: "contribution" },
                preact.h(
                  "div",
                  { className: "contribution_title" },
                  n.GWB_BELOW_SEARCHBOX_DONATION_THIS_MONTH
                ),
                preact.h(
                  "div",
                  { className: "points" },
                  preact.h(
                    "div",
                    { id: "month_point", className: "month_point" },
                    parseInt(o).toLocaleString()
                  ),
                  preact.h(
                    "div",
                    { className: "point_postfix" },
                    n.GWB_BELOW_SEARCHBOX_DONATION_POINTS
                  )
                ),
                preact.h(
                  "div",
                  { className: "impact" },
                  preact.h("span", null, n.GWB_BELOW_SEARCHBOX_DONATION_IMPACT),
                  preact.h("span", { className: "chevron" })
                )
              ),
              preact.h(
                "div",
                { className: "total" },
                preact.h(
                  "div",
                  { className: "donation_title" },
                  n.GWB_BELOW_SEARCHBOX_DONATION_GIVE_WITH_BING
                ),
                preact.h(
                  "div",
                  { className: "donation_amount" },
                  f.CurrentTotalDonationInLocalCurrency
                )
              )
            )
          )
        );
    };
});
define("Components/NewTab/ChromePreact", [
  "require",
  "exports",
  "Components/Core/HooksPreact",
  "Components/Core/ModelContextPreact",
], function (n, t, i, r) {
  "use strict";
  var u, f;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.NewTabMostVisitedSites = void 0;
  u = preact.createContext(null);
  f = function () {
    var t = preactHooks.useContext(r.ModelContext),
      h = t.scrolled,
      f = t.clientSettings,
      n;
    if (
      (!f || f.Mvs == 0) &&
      i.useClientSideRender() &&
      !h &&
      typeof chrome != "undefined" &&
      chrome.embeddedSearch &&
      ((n = chrome.embeddedSearch.newTabPage), n)
    ) {
      var o = preactHooks.useState(null),
        c = o[0],
        l = o[1],
        a = i.useForceUpdate();
      return (
        preactHooks.useEffect(function () {
          n.onmostvisitedchange = function () {
            a();
          };
        }, []),
        preact.h(
          u.Provider,
          { value: { newTabPage: n, deletedMvs: c, updateDeletedMvs: l } },
          preact.h(
            "div",
            { className: "mvs_cont show" },
            preact.h(e, null),
            preact.h(s, null)
          )
        )
      );
    }
  };
  t.NewTabMostVisitedSites = f;
  var e = function () {
      var n = preactHooks.useContext(u).newTabPage,
        t = n.mostVisited.slice(0, 8);
      return preact.h(
        "ul",
        { id: "mvs" },
        t.map(function (n) {
          return preact.h(o, { site: n });
        })
      );
    },
    o = function (n) {
      var t = n.site,
        i = preactHooks.useContext(u),
        e = i.newTabPage,
        o = i.deletedMvs,
        s = i.updateDeletedMvs,
        r,
        f;
      if (t && t.rid && o != t.rid)
        return (
          (r = "chrome-search://most-visited/title.html?rid="
            .concat(t.rid, "&c=000000ff&fs=")
            .concat(12, "&f=arial, sans-serif&pos=10&ta=left")),
          (f = "chrome-search://most-visited/title.html?rid=".concat(
            t.rid,
            "&fs=0"
          )),
          preact.h(
            "li",
            { className: "tile" },
            preact.h("img", { src: t.faviconUrl }),
            preact.h("iframe", {
              className: "title",
              src: r,
              style: { height: "14px" },
            }),
            preact.h("iframe", { className: "empty_cont", src: f }),
            preact.h(
              "a",
              {
                className: "close",
                href: "#",
                onClick: function () {
                  e.deleteMostVisitedItem(t.rid);
                  s(t.rid);
                },
              },
              "✖"
            )
          )
        );
    },
    s = function () {
      var n = preactHooks.useContext(u),
        t = n.newTabPage,
        i = n.deletedMvs,
        r = n.updateDeletedMvs;
      if (i)
        return preact.h(
          "div",
          { className: "undo show" },
          preact.h("span", { className: "text" }, "Tile removed."),
          preact.h(
            "a",
            {
              className: "undo_last",
              href: "#",
              onClick: function () {
                t.undoMostVisitedDeletion(i);
                r(null);
              },
            },
            "Undo"
          ),
          preact.h(
            "a",
            {
              className: "undo_all",
              href: "#",
              onClick: function () {
                t.undoAllMostVisitedDeletions();
                r(null);
              },
            },
            "Restore all"
          )
        );
    };
});
define("Components/Core/SpeechPreact", [
  "require",
  "exports",
  "Components/Core/HooksPreact",
  "InstrumentPreact",
], function (n, t, i, r) {
  "use strict";
  var u, e;
  Object.defineProperty(t, "__esModule", { value: !0 });
  (t.Speech = void 0),
    (function (n) {
      n.Waiting = "Waiting...";
      n.Listening = "Listening...";
      n.Blocked = "Microphone permissions denied, check browser settings.";
      n.NoMic = "No microphone device was found";
    })(u || (u = {})),
    (function (n) {
      n.None = "";
      n.Error = "There was a problem accessing your microphone.";
      n.NoText = "No speech was detected.";
    })(e || (e = {}));
  var f = "SRCHHPGUSR",
    ot = "VSPVTC",
    v = "VSPVN",
    y = "VSPL",
    st = "VSPDI",
    p = "VSPG",
    w = "VSPMI",
    b = "VSPVTH",
    k = "VSPVTN",
    ht = "BingPersonalVoiceNeural",
    ct = "en-US",
    lt = "Male",
    at = "pvbph",
    vt = "pvbpn",
    yt = "pvmi",
    pt = "pvdi",
    wt = "https://www.bing.com/public/",
    o = preact.createContext(null),
    s =
      (typeof _model != "undefined" && _model.IsMobile) ||
      (typeof _vs != "undefined" && _vs.mobile) ||
      !1,
    d = (typeof _vs != "undefined" && _vs.reopenmic) || !1,
    bt = typeof _model != "undefined" && _model.IsChromeNewTab,
    kt =
      typeof _model != "undefined" && _model.FormCode
        ? _model.FormCode
        : "QBLH",
    dt = (typeof _vs != "undefined" && _vs.ttsFromSsmlEnabled) || !1,
    g = (typeof _vs != "undefined" && _vs.permRequestOverlayEnabled) || !1,
    nt = (typeof _vs != "undefined" && _vs.allowForceQuery) || !1,
    gt = (typeof _vs != "undefined" && _vs.forceHelloQuery) || !1,
    tt = (typeof _vs != "undefined" && _vs.testOverlay) || "",
    ni = (typeof _vs != "undefined" && _vs.enableVoiceSRDomain) || !1,
    it = (typeof _vs != "undefined" && _vs.micFabAlwaysVisible) || !1,
    ti = (typeof _vs != "undefined" && _vs.spokenResponseTypeLogEnabled) || !1,
    ii = (typeof _vs != "undefined" && _vs.noSpeechDetectedReopenMic) || !1,
    h = (typeof _vs != "undefined" && _vs.showSuggestion) || !1,
    l = (typeof _vs != "undefined" && _vs.enablePersonalVoice) || !1,
    ri = (typeof _vs != "undefined" && _vs.enableSecondTooltip) || !1,
    ui = (typeof _vs != "undefined" && _vs.testQuery) || !1,
    fi = (typeof _vs != "undefined" && _vs.enableGMicIcon) || !1,
    rt = (typeof _vs != "undefined" && _vs.mockPersonalVoice) || !1,
    a = (typeof _vs != "undefined" && _vs.mockSuggestion) || !1,
    ei = "suggestion",
    ut = 0,
    oi = function (n) {
      var t = n.props,
        et = preactHooks.useState(!1),
        c = et[0],
        l = et[1],
        ot = preactHooks.useState(null),
        fr = ot[0],
        er = ot[1],
        kt = preactHooks.useState(null),
        or = kt[0],
        sr = kt[1],
        dt = preactHooks.useState(null),
        hr = dt[0],
        cr = dt[1],
        gt = preactHooks.useState(null),
        lr = gt[0],
        ar = gt[1],
        ni = preactHooks.useState(!1),
        vr = ni[0],
        yr = ni[1],
        ti = preactHooks.useState(!1),
        a = ti[0],
        pr = ti[1],
        ii = preactHooks.useState(u.Waiting),
        d = ii[0],
        nt = ii[1],
        ri = preactHooks.useState(e.None),
        wr = ri[0],
        br = ri[1],
        ui = preactHooks.useState(!1),
        kr = ui[0],
        dr = ui[1],
        fi = preactHooks.useState(null),
        gr = fi[0],
        nu = fi[1],
        ei = preactHooks.useState(!1),
        oi = ei[0],
        it = ei[1],
        si = i.useAudio(null),
        tu = si[0],
        iu = si[1],
        hi = preactHooks.useState(!1),
        ru = hi[0],
        uu = hi[1],
        h = t.loggingName,
        ci = t.textareaId,
        fu = t.handleText,
        eu = t.iconInit,
        ou = t.isPartner,
        su = t.langLocQuery,
        hu = t.langLocProp,
        cu = s ? "Mobile" : bt ? "ChromeNewTab" : "Desktop",
        lu = t.clientbuild + cu,
        au = t.allowReadout,
        vu = t.isAjaxPage,
        yu = t.isInPrivate,
        pu = t.iconColor,
        yi = preactHooks.useState(!1),
        wu = yi[0],
        bu = yi[1],
        pi = preactHooks.useState(!1),
        ku = pi[0],
        du = pi[1],
        wi = preactHooks.useState(null),
        gu = wi[0],
        rt = wi[1],
        bi = preactHooks.useState(null),
        nf = bi[0],
        ut = bi[1],
        ki = preactHooks.useState(!1),
        tf = ki[0],
        di = ki[1],
        gi = preactHooks.useState(!0),
        rf = gi[0],
        uf = gi[1],
        ff = t.preloadMic,
        ef = t.showMicOnSBClick,
        of = t.micTT
          ? t.micTT
          : typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.mictt
          ? _vs.locstr.mictt
          : "Search using voice",
        nr = preactHooks.useState([]),
        sf = nr[0],
        hf = nr[1],
        tr = preactHooks.useState(!0),
        ir = tr[0],
        rr = tr[1],
        ur,
        ft;
      return typeof Promise == "undefined"
        ? (r.logDataEvent(h, "PromiseUndefined", !0), null)
        : ((ur = function () {
            return {
              recording: c,
              updateRecordingState: l,
              hypothesisText: or,
              updateHypothesisText: sr,
              detectedText: fr,
              updateDetectedText: er,
              suggestionText: hr,
              updateSuggestionText: cr,
              earcons: lr,
              readoutPlayed: vr,
              updateReadoutPlayed: yr,
              readoutEnabled: a,
              microphoneState: d,
              updateMicrophoneState: nt,
              isPartner: ou,
              errorState: wr,
              updateErrorState: br,
              shouldReopenMic: kr,
              updateReopenMic: dr,
              readoutText: gr,
              updateReadoutText: nu,
              loggingName: h,
              textareaId: ci,
              handleText: fu,
              iconInit: eu,
              clientbuild: lu,
              langLocQuery: su,
              langLocProp: hu,
              showPromptOverlay: oi,
              updateShowOverlay: it,
              allowReadout: au,
              audioPlaying: tu,
              updateAudioSource: iu,
              showUpsell: ru,
              updateShowUpsell: uu,
              isAjaxPage: vu,
              isInPrivate: yu,
              iconColor: pu,
              showTooltip: wu,
              updateShowTooltip: bu,
              showLearnOverlay: ku,
              updateShowLearnOverlay: du,
              bingPageVoiceTalentHandle: gu,
              updateBingPageVoiceTalentHandle: rt,
              bingPageVoiceTalentName: nf,
              updateBingPageVoiceTalentName: ut,
              showPersonalVoiceLandingTooltip: tf,
              updateShowPersonalVoiceLandingTooltip: di,
              isFirstRender: rf,
              updateIsFirstRender: uf,
              enablePreloadMic: ff,
              enableShowMicOnSBClick: ef,
              micTT: of,
              hiddenElements: sf,
              updateHiddenElements: hf,
              isFirstFocus: ir,
              updateIsFirstFocus: rr,
            };
          }),
          tt == "micAsk"
            ? it(!0)
            : tt == "micBlocked" && (l(!1), nt(u.Blocked)),
          preactHooks.useEffect(function () {
            sj_evt.bind(
              "voice.askperms",
              function () {
                it(!0);
              },
              !0
            );
            sj_evt.bind(
              "voice.micblock",
              function () {
                l(!1);
                nt(u.Blocked);
              },
              !0
            );
          }, []),
          (ft = function (n) {
            r.logDataEvent(h, "sbox", "typing");
            n.target.removeEventListener("input", ft);
          }),
          preactHooks.useEffect(function () {
            var n = sj_cook.get(f, "VSRO");
            pr(!n || n == "1");
          }, []),
          preactHooks.useEffect(function () {
            var g = window.location.search,
              n = new URLSearchParams(g),
              u = wt + n.get(at),
              e = n.get(vt),
              s,
              c,
              l,
              a,
              t,
              i;
            if (u != null && e != null) {
              r.logDataEvent(h, "isPersonalVoiceURL", !0);
              s = decodeURIComponent(u);
              rt(s);
              c = decodeURIComponent(e);
              ut(c);
              l = encodeURIComponent(u);
              sj_cook.set(f, b, l, !1, "/");
              a = encodeURIComponent(e);
              sj_cook.set(f, k, a, !1, "/");
              var nt = sj_cook.get(f, v),
                tt = sj_cook.get(f, y),
                it = sj_cook.get(f, p),
                ft = sj_cook.get(f, w),
                o = n.get(yt),
                d = n.get(pt);
              o == null
                ? r.logDataEvent(h, "error", "personalVoiceURLMissingModelId")
                : o != ft &&
                  d != null &&
                  (sj_cook.set(f, st, d, !1, "/"),
                  sj_cook.set(f, w, o, !1, "/"),
                  di(!0));
              nt == null && sj_cook.set(f, v, ht, !1, "/");
              tt == null && sj_cook.set(f, y, ct, !1, "/");
              it == null && sj_cook.set(f, p, lt, !1, "/");
            } else (t = sj_cook.get(f, b)), (t = decodeURIComponent(t)), rt(t), (i = sj_cook.get(f, k)), (i = decodeURIComponent(i)), ut(i);
          }, []),
          preactHooks.useEffect(
            function () {
              a &&
                (typeof Audio != "undefined"
                  ? ar({
                      start: new Audio("/vs/ec/start.mp3"),
                      stop: new Audio("/vs/ec/stop.mp3"),
                    })
                  : r.logDataEvent(h, "AudioUndefined", !0));
            },
            [a]
          ),
          preactHooks.useEffect(function () {
            var n = document.querySelector(ci);
            n && n.addEventListener("input", ft);
            r.logDataEvent(h, "comp", "loaded");
            r.logDataEvent(h, "micComponent", "rendered");
          }, []),
          preactHooks.useEffect(
            function () {
              var n = document.querySelector(".mic_cont"),
                t = document.querySelector(".dimmer"),
                i,
                r;
              c
                ? (n && n.classList.remove("icon"),
                  t && t.classList.add("dim"),
                  (r = document.getElementById("b_mic_close")),
                  r && r.focus())
                : (n &&
                    !n.classList.contains("icon") &&
                    n.classList.add("icon"),
                  t && t.classList.remove("dim"),
                  ir
                    ? rr(!1)
                    : ((i = _d.querySelector(".mic_cont .b_icon")),
                      i && i.focus()));
            },
            [c]
          ),
          preact.h(
            o.Provider,
            { value: ur() },
            !s && g && d != u.NoMic && (oi || (!c && d == u.Blocked))
              ? preact.h(vi, null)
              : null,
            c ? preact.h(li, null) : preact.h(ai, null)
          ));
    };
  t.Speech = oi;
  var si = function () {
      var n = preactHooks.useContext(o).recording;
      return preact.h(
        "div",
        null,
        n
          ? preact.h("input", {
              type: "hidden",
              name: "uquinputtype",
              value: "speech",
            })
          : null,
        preact.h("input", {
          type: "hidden",
          name: "uquresponseformat",
          value: n ? 1 : 0,
        }),
        preact.h("input", {
          type: "hidden",
          name: "uqubfprlg",
          value: n ? 1 : 0,
        }),
        preact.h("input", {
          type: "hidden",
          name: "clientid",
          value: sj_cook.get("MUID", "MUID"),
        }),
        preact.h("input", { type: "hidden", name: "input", value: 2 })
      );
    },
    hi = function () {
      var n = preactHooks.useContext(o),
        r = n.hypothesisText,
        f = n.detectedText,
        s = n.microphoneState,
        t = n.errorState,
        i = r || f,
        c = i ? escape(f) : di(s),
        h = t != e.None ? gi(t) : c,
        l = t != e.None ? "alert" : "contentinfo",
        a =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.nomicLinkText
            ? _vs.locstr.nomicLinkText
            : "Setting up a microphone",
        v =
          "/search?q=" +
          (typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.nomicQuery
            ? _vs.locstr.nomicQuery
            : "set up microphone"),
        y = function (n) {
          var t, i;
          n.keyCode == 9 &&
            n.shiftKey &&
            ((i =
              (t = _ge("b_suggestion_item")) !== null && t !== void 0
                ? t
                : _ge("b_mic_close")),
            i && (i.focus(), sj_sp(n), sj_pd(n)));
        };
      return preact.h(
        "div",
        {
          className: "b_rec_text ".concat(i ? "" : "b_rec_placeholder"),
          id: "b_rec_text",
          tabIndex: 0,
          onKeyDown: y,
        },
        preact.h("span", { role: l, "aria-label": h }, h),
        preact.h("span", { className: "b_hyp" }, i ? r : ""),
        s == u.NoMic ? preact.h("a", { id: "b_noMic", href: v }, a) : null
      );
    },
    ci = function () {
      var n = preactHooks.useContext(o),
        f = n.updateHypothesisText,
        e = n.updateDetectedText,
        s = n.updateMicrophoneState,
        l = n.updateRecordingState,
        t = n.suggestionText,
        i = n.loggingName,
        v =
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.speechSuggestionAria
            ? _vs.locstr.speechSuggestionAria
            : "",
        y = function () {
          r.logClick(i, "click", "suggestionText");
          r.logClick(i, "dialog", "suggestionSubmit");
          e(t);
          f(t);
          s(u.Waiting);
          l(!1);
          c(t);
        },
        p = function (n) {
          if (n.keyCode == 9 && !n.shiftKey) {
            var t = _ge("b_rec_text");
            t && (t.focus(), sj_sp(n), sj_pd(n));
          }
        };
      return (h || a) && t
        ? (r.logDataEvent(i, "showVoiceSearchSuggestion", !0),
          preact.h(
            "div",
            { className: "b_speech_suggestion_container" },
            preact.h(
              "button",
              {
                className: "b_suggestion_item",
                id: "b_suggestion_item",
                role: "button",
                "aria-label": v,
                onKeyDown: p,
                onClick: function () {
                  y();
                },
              },
              preact.h("span", { className: "b_suggestion_item_text" }, t)
            )
          ))
        : null;
    },
    li = function () {
      var n = preactHooks.useContext(o),
        b = n.earcons,
        v = n.detectedText,
        tt = n.updateDetectedText,
        y = n.hypothesisText,
        d = n.updateHypothesisText,
        tr = n.suggestionText,
        rt = n.updateSuggestionText,
        fi = n.recording,
        ct = n.updateRecordingState,
        l = n.microphoneState,
        k = n.updateMicrophoneState,
        oi = n.isPartner,
        ft = n.updateErrorState,
        t = n.loggingName,
        li = n.clientbuild,
        pt = n.langLocQuery,
        et = n.langLocProp,
        ai = n.isAjaxPage,
        vi = n.isInPrivate,
        wt = n.hiddenElements,
        bt = n.updateHiddenElements,
        dt = "xx-yy",
        g,
        p,
        lt,
        at,
        vt,
        yt;
      pt &&
        et &&
        ((g = _d.querySelector(pt)),
        g && g[et] && g[et] !== "" && (dt = g[et]));
      p = {
        clientbuild: li,
        referer: encodeURIComponent(document.location.href).substring(0, 1e3),
        form: oi ? "QBRE" : kt,
      };
      ai && (p.isAjaxPage = "1");
      vi && (p.preferanonymous = "1");
      URLSearchParams &&
        ((lt = new URLSearchParams(window.location.search)),
        (at = lt.get("location")),
        at && (p.location = at),
        (vt = lt.get("translatelg")),
        vt && (p.translatelg = vt));
      (_G === null || _G === void 0 ? void 0 : _G.IG) &&
        (p.uqurequestid = _G.IG);
      var yi =
          (ni ? "//sr" : "//www") +
          ".bing.com/opaluqu/speech/recognition/interactive/cognitiveservices/v1",
        f = i.useSpeechRecognizer(yi, p, dt)[0],
        w = [
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion0
            ? _vs.locstr.upsellsuggestion0
            : "Weather tomorrow",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion1
            ? _vs.locstr.upsellsuggestion1
            : "When does the sun set today?",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion2
            ? _vs.locstr.upsellsuggestion2
            : "How to spell parallelogram?",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion3
            ? _vs.locstr.upsellsuggestion3
            : "What does the word incredulous mean?",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion4
            ? _vs.locstr.upsellsuggestion4
            : "What time is it in Beijing?",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion5
            ? _vs.locstr.upsellsuggestion5
            : "What languages are spoken in Mozambique?",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion6
            ? _vs.locstr.upsellsuggestion6
            : "How many plastic bottles are used in a year?",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion7
            ? _vs.locstr.upsellsuggestion7
            : "How to say hello in Japanese?",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion8
            ? _vs.locstr.upsellsuggestion8
            : "How much is 2000 dollars in euro?",
          typeof _vs != "undefined" &&
          _vs.locstr &&
          _vs.locstr.upsellsuggestion9
            ? _vs.locstr.upsellsuggestion9
            : "How many meters is 3 feet?",
        ],
        pi = 3e3,
        ot = 0,
        st = function () {
          if (
            (f.close(),
            ht(),
            ct(!1),
            b && b.stop && b.stop.play(),
            tt(""),
            d(""),
            rt(""),
            k(u.Waiting),
            ft(e.None),
            r.logHiddenLink("link_noop"),
            r.logClick(t, "click", "micx"),
            r.logClick(t, "dialog", "closed"),
            it && sj_evt.fire("vs_fab_vis_feature", !0),
            s)
          ) {
            for (var n = 0; n < wt.length; n++)
              wt[n].removeAttribute("aria-hidden");
            bt([]);
          }
        },
        ti = function (n) {
          var i = _d.querySelector(".b_speech_overlay");
          fi &&
            i &&
            !i.contains(n.target) &&
            (r.logClick(t, "dialog", "softClosed"), st());
        },
        ri = function () {
          f &&
            f.recognizeOnceAsync(
              function () {},
              function (n) {
                n.indexOf("NotAllowedError") > -1 ||
                n.indexOf("NotReadableError") > -1
                  ? (l != u.Blocked &&
                      r.logDataEvent(t, "micPermissionRequest", "denied"),
                    k(u.Blocked),
                    r.logDataEvent(t, "blocked", !0),
                    s || ct(!1))
                  : n.indexOf("NotFoundError") > -1 ||
                    n.indexOf("OverconstrainedError") > -1
                  ? (l != u.NoMic && r.logDataEvent(t, "mic", "notDetected"),
                    r.logDataEvent(t, "nomic", !0),
                    k(u.NoMic))
                  : (ft(e.Error), r.logDataEvent(t, "error", n));
              }
            );
        },
        wi = function () {
          tt("");
          d("");
          k(u.Waiting);
          ft(e.None);
          ri();
        },
        bi = function () {
          var i, n, t;
          if (h || a)
            if (a) rt(ei);
            else {
              for (n = w.length, t = 0; n > 0; )
                (t = Math.floor(Math.random() * n)),
                  (n -= 1),
                  t != n && ((i = [w[n], w[t]]), (w[t] = i[0]), (w[n] = i[1]));
              ot = 0;
              ui();
              ki();
            }
        },
        ki = function () {
          h && (ut = sb_si(di, pi));
        },
        ht = function () {
          sb_ct(ut);
        },
        ui = function () {
          var n, t;
          rt(w[ot]);
          ot = (ot + 1) % w.length;
          n = _ge("b_suggestion_item");
          n && h && ((t = sj_fader()), t.init(n, 0, 100, 5, null));
        },
        di = function () {
          var n, t;
          h &&
            (l == u.Listening && (v + y == "" || v + y == "undefined")
              ? ((n = _ge("b_suggestion_item")),
                n && ((t = sj_fader()), t.init(n, 100, 0, 5, ui)))
              : ht());
        },
        gi = function (n) {
          if (n.keyCode != 9 || n.shiftKey)
            n.keyCode == 13 && (yt(n), sj_sp(n), sj_pd(n));
          else {
            var t = _ge("b_rec_text"),
              i = _ge("b_suggestion_item");
            t && !i && (t.focus(), sj_sp(n), sj_pd(n));
          }
        },
        nr = function (n) {
          n.keyCode == 27 && st();
        };
      return (
        preactHooks.useEffect(function () {
          var n, t, r;
          if (s) {
            var i = _d.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
              ),
              u = [],
              f = _d.querySelector(".b_speech_overlay");
            for (n = 0; n < i.length; n++)
              (t = i[n]),
                t.getAttribute("aria-hidden") == "true" ||
                  f.contains(i[n]) ||
                  (u.push(t), t.setAttribute("aria-hidden", "true"));
            bt(u);
          }
          r = _ge("b_mic_close");
          r && r.focus();
        }, []),
        preactHooks.useEffect(
          function () {
            var n = !1;
            if (f)
              return (
                tt(""),
                d(""),
                rt(""),
                _d.addEventListener("click", ti),
                (f.sessionStarted = function () {
                  b && b.start && b.start.play();
                  k(u.Listening);
                  bi();
                }),
                (f.recognized = function (n, i) {
                  var u = i.result.text;
                  d("");
                  tt(u);
                  r.logDataEvent(t, "dialog", "timeoutSubmit");
                }),
                (f.recognizing = function (i, u) {
                  var f = u.result.text;
                  ht();
                  d(f);
                  r.logDataEvent(t, "updatedHypothesisText", !0);
                  n || (r.logDataEvent(t, "speech", "detected"), (n = !0));
                }),
                (f.speechEndDetected = function () {}),
                (f.sessionStopped = function () {
                  var n = preactHooks.useContext(o).detectedText;
                  ht();
                  typeof n == "undefined"
                    ? (ft(e.NoText),
                      k(u.Waiting),
                      r.logDataEvent(t, "empty", !0),
                      r.logDataEvent(t, "speech", "empty"))
                    : ct(!1);
                }),
                ri(),
                function () {
                  var n = preactHooks.useContext(o).detectedText;
                  _d.removeEventListener("click", ti);
                  c(n);
                }
              );
          },
          [f]
        ),
        (yt = function (n) {
          if (nt && v + y != "" && v + y != "undefined")
            r.logClick(t, "click", "forcequery"),
              r.logClick(t, "dialog", "forceSubmit"),
              c(v + y);
          else if (gt && (v + y == "undefined" || l == u.Listening)) {
            r.logClick(t, "click", "forcequeryHello");
            r.logClick(t, "dialog", "forceHelloQuery");
            var i =
              typeof _vs != "undefined" &&
              _vs &&
              _vs.locstr &&
              _vs.locstr.helloQuery
                ? _vs.locstr.helloQuery
                : "hello";
            c(i);
          } else
            ii && v + y == "undefined" && l == u.Waiting
              ? (n.preventDefault(),
                r.logClick(t, "click", "noSpeechDetectedReopenMic"),
                r.logClick(t, "dialog", "noSpeechReopened"),
                wi())
              : (r.logClick(t, "click", "noSpeechDetectedForceClose"),
                r.logClick(t, "dialog", "forceClosed"),
                st());
        }),
        preact.h(
          "div",
          { className: "b_speech_overlay", tabIndex: 0, onKeyDown: nr },
          s
            ? preact.h("div", {
                className: "b_speech_bg",
                onClick: function () {
                  st();
                },
              })
            : null,
          preact.h(
            "div",
            { className: "b_speech_cont" },
            preact.h(hi, null),
            preact.h(
              "button",
              {
                className: "b_mic_close",
                id: "b_mic_close",
                role: "button",
                "aria-label": "Stop listening",
                onKeyDown: gi,
                onClick: yt,
              },
              preact.h(
                "svg",
                {
                  width: "102",
                  height: "102",
                  viewBox: "0 0 102 102",
                  fill: "none",
                },
                preact.h("circle", {
                  className: l == u.Listening ? "b_mic_pulse" : "",
                  cx: "51",
                  cy: "51",
                  r: "40",
                  fill: "#007698",
                  "fill-opacity": "0.2",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M51 91C73.0914 91 91 73.0914 91 51C91 28.9086 73.0914 11 51 11C28.9086 11 11 28.9086 11 51C11 73.0914 28.9086 91 51 91Z",
                  fill: "#267596",
                }),
                preact.h(
                  "mask",
                  {
                    id: "mask0",
                    "mask-type": "alpha",
                    maskUnits: "userSpaceOnUse",
                    x: "11",
                    y: "11",
                    width: "80",
                    height: "80",
                  },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M51 91C73.0914 91 91 73.0914 91 51C91 28.9086 73.0914 11 51 11C28.9086 11 11 28.9086 11 51C11 73.0914 28.9086 91 51 91Z",
                    fill: "white",
                  })
                ),
                preact.h(
                  "g",
                  { mask: "url(#mask0)" },
                  preact.h("path", {
                    className: l == u.Listening ? "b_mic_wave" : "",
                    opacity: "0.689286",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M-25 63.7205C65.4167 64.6725 43.2719 38.6305 126.786 26V108.802H-25V63.7205Z",
                    fill: "#4290B8",
                  }),
                  preact.h("path", {
                    className: l == u.Listening ? "b_mic_wave" : "",
                    opacity: "0.689286",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M-28 53.2162C-28 53.2162 14.3477 25.984 45.2093 36.3562C76.0709 46.7284 113.462 88.2649 112.362 88.6179V107.078H-28V53.2162Z",
                    fill: "#42A5B8",
                  })
                ),
                nt
                  ? preact.h(
                      "svg",
                      { viewBox: "-15 -15 50 50" },
                      preact.h("path", { d: "m0 0h20v20h-20z", fill: "none" }),
                      preact.h("path", {
                        className: "icon_path",
                        d: "m16.379 11.694c-.458-.194-.983-.019-1.241.406-.252.416-.553.8-.895 1.142-.544.543-1.191.983-1.908 1.286-.717.304-1.504.472-2.335.472s-1.618-.168-2.335-.471-1.364-.743-1.908-1.286c-.342-.343-.644-.726-.895-1.142-.257-.425-.783-.6-1.24-.407-.552.233-.793.906-.484 1.42.338.563.744 1.081 1.205 1.543.723.722 1.584 1.308 2.542 1.714.664.28 1.375.467 2.115.56v2.069c0 .552.448 1 1 1s1-.448 1-1v-2.069c.74-.093 1.451-.279 2.114-.559h.001c.958-.406 1.819-.991 2.542-1.713l.001-.001c.461-.462.866-.979 1.205-1.542.308-.516.068-1.188-.484-1.422zm-6.379 1.306c2.209 0 4-1.791 4-4v-5c0-2.209-1.791-4-4-4s-4 1.791-4 4v5c0 2.209 1.791 4 4 4zm-2-9c0-1.103.897-2 2-2s2 .897 2 2v5c0 1.103-.897 2-2 2s-2-.897-2-2z",
                        fill: "white",
                      })
                    )
                  : preact.h("path", {
                      d: "M52.8408 51L64 62.1592L62.1592 64L51 52.8408L39.8408 64L38 62.1592L49.1592 51L38 39.8408L39.8408 38L51 49.1592L62.1592 38L64 39.8408L52.8408 51Z",
                      fill: "white",
                    })
              )
            ),
            preact.h(ci, null),
            preact.h(si, null)
          )
        )
      );
    },
    ai = function () {
      var n = preactHooks.useContext(o),
        ht = n.updateRecordingState,
        w = n.readoutPlayed,
        ct = n.updateReadoutPlayed,
        bt = n.microphoneState,
        h = n.updateMicrophoneState,
        kt = n.recording,
        b = n.readoutEnabled,
        lt = n.shouldReopenMic,
        k = n.updateReopenMic,
        at = n.updateErrorState,
        t = n.loggingName,
        nt = n.iconInit,
        dt = n.showPromptOverlay,
        tt = n.updateShowOverlay,
        vt = n.allowReadout,
        i = n.audioPlaying,
        ut = n.updateAudioSource,
        yt = n.isPartner,
        a = n.enablePreloadMic,
        pt = n.enableShowMicOnSBClick,
        ft = n.showTooltip,
        wt = n.updateShowTooltip,
        et = n.showPersonalVoiceLandingTooltip,
        v = n.micTT,
        y,
        p,
        st;
      return (
        s &&
          (sj_evt.bind("autosuggestHide", function (n) {
            var i,
              u = n[0],
              f = n[1],
              r = n[2],
              t = _d.querySelector(".mic_cont");
            r != 0 &&
              t &&
              ((i = t === null || t === void 0 ? void 0 : t.classList) ===
                null || i === void 0
                ? void 0
                : i.remove("b_hide"));
          }),
          sj_evt.bind("AS.RequestSent", function () {
            var t,
              i,
              n = _d.querySelector(".mic_cont"),
              r;
            n &&
              (pt
                ? ((r = document.querySelector("#sb_form_q")),
                  !r ||
                    ((i = n === null || n === void 0 ? void 0 : n.classList) ===
                      null || i === void 0
                      ? void 0
                      : i.contains("b_hide")) ||
                    sj_be(r, "textInput", function () {
                      var t;
                      (t =
                        n === null || n === void 0 ? void 0 : n.classList) ===
                        null || t === void 0
                        ? void 0
                        : t.add("b_hide");
                    }))
                : (t = n === null || n === void 0 ? void 0 : n.classList) ===
                    null || t === void 0
                ? void 0
                : t.add("b_hide"));
          })),
        (y = function () {
          return __awaiter(void 0, void 0, void 0, function () {
            var i, f, n, c, o, s;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((i = !1),
                    (f = !1),
                    !(
                      g &&
                      ((o =
                        navigator === null || navigator === void 0
                          ? void 0
                          : navigator.permissions) === null || o === void 0
                        ? void 0
                        : o.query)
                    ))
                  )
                    return [3, 4];
                  l.label = 1;
                case 1:
                  return (
                    l.trys.push([1, 3, , 4]),
                    [4, navigator.permissions.query({ name: "microphone" })]
                  );
                case 2:
                  return (
                    (n = l.sent()),
                    n.state == "granted"
                      ? ((i = !0),
                        r.logDataEvent(t, "micPermission", "previouslyGranted"))
                      : n.state == "denied"
                      ? ((f = !0),
                        r.logDataEvent(t, "micPermission", "previouslyDenied"))
                      : n.state == "prompt" && tt(!0),
                    [3, 4]
                  );
                case 3:
                  return (c = l.sent()), [3, 4];
                case 4:
                  return (
                    (s =
                      navigator === null || navigator === void 0
                        ? void 0
                        : navigator.mediaDevices) === null || s === void 0
                      ? void 0
                      : s.getUserMedia
                  )
                    ? [
                        4,
                        navigator.mediaDevices
                          .getUserMedia({ audio: !0 })
                          .then(function () {
                            h(u.Listening);
                            i ||
                              r.logDataEvent(
                                t,
                                "micPermissionRequest",
                                "granted"
                              );
                          })
                          .catch(function (n) {
                            n.name == "NotAllowedError" ||
                            n.name == "NotReadableError"
                              ? (h(u.Blocked),
                                r.logDataEvent(t, "blocked", !0),
                                f ||
                                  r.logDataEvent(
                                    t,
                                    "micPermissionRequest",
                                    "denied"
                                  ))
                              : n.name == "NotFoundError" ||
                                n.name == "OverconstrainedError"
                              ? (h(u.NoMic),
                                r.logDataEvent(t, "nomic", !0),
                                r.logDataEvent(t, "mic", "notDetected"))
                              : (at(e.Error),
                                r.logDataEvent(t, "getUserMediaError", n));
                          }),
                      ]
                    : [3, 6];
                case 5:
                  return l.sent(), [3, 7];
                case 6:
                  h(u.Waiting);
                  l.label = 7;
                case 7:
                  return tt(!1), ht(!0), [2];
              }
            });
          });
        }),
        (p = function () {
          return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function () {
              return (
                r.logHiddenLink("link_noop"),
                i
                  ? (ut(null), r.logClick(t, "spokenResponse", "userStopped"))
                  : (ui ? c("test") : y(),
                    r.logClick(t, "click", "mic"),
                    r.logClick(t, "micComponent", "clicked"),
                    it && sj_evt.fire("vs_fab_vis_feature", !1)),
                [2]
              );
            });
          });
        }),
        preactHooks.useEffect(function () {
          nt && nt();
        }, []),
        preactHooks.useEffect(
          function () {
            !w &&
              b &&
              vt &&
              (ct(!0),
              ki(k, t).then(function (n) {
                var u, i;
                n != "" &&
                  (a &&
                    ((i = _d.querySelector(".mic_icon")),
                    i &&
                      ((u =
                        i === null || i === void 0 ? void 0 : i.classList) ===
                        null || u === void 0
                        ? void 0
                        : u.add("b_hide"))),
                  ut(n),
                  r.logDataEvent(t, "spokenResponse", "startPlaying"),
                  l &&
                    sj_cook.get(f, ot) != "1" &&
                    typeof uquSpokenResponse != "undefined" &&
                    uquSpokenResponse.voiceType &&
                    wt(uquSpokenResponse.voiceType === "Personal"));
              }));
          },
          [b]
        ),
        preactHooks.useEffect(
          function () {
            d &&
              lt &&
              w &&
              !i &&
              (k(!1), y(), r.logDataEvent(t, "reopenedMic", !0));
          },
          [i]
        ),
        preactHooks.useEffect(
          function () {
            var n,
              t = _d.querySelector(".mic_icon");
            !i &&
              a &&
              ((n = t === null || t === void 0 ? void 0 : t.classList) ===
                null || n === void 0
                ? void 0
                : n.remove("b_hide"));
          },
          [i]
        ),
        (st = 0),
        preact.h(
          "div",
          {
            className:
              ft || et
                ? "b_icon tooltip disableDefaultTooltip"
                : "b_icon tooltip",
            role: "button",
            tabIndex: st,
            "aria-label": v,
            "data-sbtipx": v,
            "data-tooltip": v,
            style: !yt && a ? "height: 100%;" : null,
            onClick: function () {
              p();
            },
            onKeyDown: function (n) {
              (n.key == "Enter" || n.which == 13) && p();
            },
          },
          i ? preact.h(wi, null) : preact.h(bi, null),
          (l && et) || rt == 2
            ? preact.h(pi, null)
            : (l && ri && ft) || rt == 1
            ? preact.h(yi, null)
            : null
        )
      );
    },
    vi = function () {
      var i = preactHooks.useContext(o),
        h = i.microphoneState,
        c = i.updateMicrophoneState,
        l = i.recording,
        f = i.showPromptOverlay,
        a = i.updateShowOverlay,
        n = i.loggingName,
        t = !l && h == u.Blocked,
        v =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.micAllowTitle
            ? _vs.locstr.micAllowTitle
            : "Want to search with your voice?",
        y =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.micAllowDesc
            ? _vs.locstr.micAllowDesc
            : "Select Allow to let Bing use your microphone",
        p =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.micReTitle
            ? _vs.locstr.micReTitle
            : "Voice search is turned off",
        w =
          typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.micReDesc
            ? _vs.locstr.micReDesc
            : "To turn it on",
        b =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.micReList1
            ? _vs.locstr.micReList1
            : "Click the mic button in your browser address bar",
        k =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.micReList2
            ? _vs.locstr.micReList2
            : "Select Always Allow to let Bing use your microphone";
      t
        ? (r.logDataEvent(n, "blockedUXShown", !0),
          r.logDataEvent(n, "micPermissionDeniedDialog", "rendered"))
        : (r.logDataEvent(n, "permissionRequestUXShown", !0),
          r.logDataEvent(n, "micPermissionRequestDialog", "rendered"));
      var e = function () {
          t
            ? (c(u.Waiting),
              r.logClick(n, "click", "blockedUXClose"),
              r.logClick(n, "micPermissionDeniedDialog", "closed"))
            : f &&
              (r.logClick(n, "click", "permissionRequestUXClose"),
              r.logClick(n, "micPermissionRequestDialog", "closed"),
              a(!1));
        },
        s = function () {
          t
            ? r.logClick(n, "micPermissionDeniedDialog", "hardDismiss")
            : f && r.logClick(n, "micPermissionRequestDialog", "hardDismiss");
          e();
        },
        d = function (i) {
          var u = _ge("b_vs_ov");
          i.target == u &&
            (t
              ? r.logClick(n, "micPermissionDeniedDialog", "softDismiss")
              : f && r.logClick(n, "micPermissionRequestDialog", "softDismiss"),
            e());
        };
      return preact.h(
        "div",
        {
          id: "b_vs_ov",
          class: "b_allowOverlay" + (t ? " b_ov_blocked" : ""),
          onClick: d,
        },
        preact.h(
          "div",
          { class: "b_overlayCont" },
          preact.h(
            "svg",
            {
              class: "b_ov_dots",
              width: "133",
              height: "28",
              viewBox: "0 0 133 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            preact.h("rect", {
              x: "53",
              width: "80",
              height: "28",
              rx: "6",
              fill: "#E8E8E8",
            }),
            preact.h("circle", {
              cx: "4",
              cy: "7",
              r: "4",
              fill: "#E83A3A",
              onClick: s,
            }),
            preact.h("circle", { cx: "21", cy: "7", r: "4", fill: "#FFC328" }),
            preact.h("circle", { cx: "38", cy: "7", r: "4", fill: "#0EB244" })
          ),
          preact.h(
            "div",
            { class: "b_ov_close", onClick: s },
            preact.h("img", {
              class: "rms_image",
              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABN0lEQVRIS+2TsWoCQRCGjwiBgBqCEJELGFJYpfchhTxHEGxSxCp2kkqTgH0KU6T1Ae4u38Aoe7iju6cQED8YZm9u9p+5ud3kX8jzvJ1l2VNRFDcaioJ9NfYP0OlpqAwvWiQssE/WTQ0HoeJj7Jf1vYa3QbhB0lxM1hreiSO+ZE+qYRvpnuQPsX1FEL8g7zVYfI0IO0W843I6/yHnTsPhIFBns3dc0WOxkO4RKY2r8lgsRFiLzBB/wL9g1cZigdgVohNshX3xfKuvjgfCI76gwE9xlxo+HMTWP/Sbzvv4d8w8XVE44psfio++jF4QN0+LdE886DJ6cTo3T4sIO0XCx+UbiwW55mX0smssFtI9+fvHhfg1SW9Y9CUSYS2yYN3RcBlepBQZ4rsaioJ98iXP+EcNnTldkuQPM36+K+YUoS4AAAAASUVORK5CYII=",
            })
          ),
          preact.h(
            "div",
            { class: "b_ov_sb" },
            preact.h(
              "div",
              { class: "b_ov_bar" },
              preact.h(
                "svg",
                {
                  class: "b_ov_micx",
                  width: "8",
                  height: "10",
                  viewBox: "0 0 8 10",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                preact.h("path", {
                  d: "M4.52605 2.49992V4.79084C4.3221 4.887 4.13241 5.01421 3.96162 5.16717C3.96939 5.11271 3.97345 5.05684 3.97345 4.99992V2.49992C3.97345 1.92462 3.56109 1.45825 3.05244 1.45825C2.54378 1.45825 2.13143 1.92462 2.13143 2.49992V4.99992C2.13143 5.57521 2.54378 6.04159 3.05244 6.04159C3.15589 6.04159 3.25536 6.02229 3.34819 5.98671C3.24563 6.19729 3.16712 6.425 3.11684 6.665C3.09551 6.66604 3.07403 6.66659 3.05244 6.66659C2.23859 6.66659 1.57883 5.92038 1.57883 4.99992V2.49992C1.57883 1.57944 2.23859 0.833252 3.05244 0.833252C3.86628 0.833252 4.52605 1.57944 4.52605 2.49992Z",
                  fill: "#717171",
                }),
                preact.h("path", {
                  d: "M3.05245 7.29159C3.05245 7.74825 3.1524 8.17854 3.32887 8.55596L3.32876 8.85409C3.32876 9.02667 3.20505 9.16659 3.05245 9.16659C2.91257 9.16659 2.79697 9.049 2.77866 8.8965L2.77615 8.85409V7.909C1.5174 7.80475 0.518884 6.64075 0.475128 5.20254L0.473633 5.10409V4.89575C0.473633 4.72317 0.597339 4.58325 0.749935 4.58325C0.889818 4.58325 1.00542 4.70084 1.02371 4.85334L1.02624 4.89575V5.10409C1.02624 6.282 1.84942 7.24246 2.88063 7.28975L2.96035 7.29159H3.05245Z",
                  fill: "#717171",
                }),
                preact.h("path", {
                  d: "M7.47327 7.29167C7.47327 8.55733 6.56612 9.58333 5.44705 9.58333C4.32799 9.58333 3.42084 8.55733 3.42084 7.29167C3.42084 6.026 4.32799 5 5.44705 5C6.56612 5 7.47327 6.026 7.47327 7.29167ZM3.97344 7.29167C3.97344 7.63896 4.06738 7.96146 4.22805 8.22842L6.2753 5.91296C6.03926 5.73125 5.75412 5.625 5.44705 5.625C4.63322 5.625 3.97344 6.37121 3.97344 7.29167ZM5.44705 8.95833C6.26089 8.95833 6.92067 8.21212 6.92067 7.29167C6.92067 6.94437 6.82672 6.62187 6.66606 6.35492L4.61881 8.67038C4.85485 8.85208 5.13999 8.95833 5.44705 8.95833Z",
                  fill: "#717171",
                })
              ),
              preact.h(
                "svg",
                {
                  class: "b_ov_star",
                  width: "10",
                  height: "9",
                  viewBox: "0 0 10 9",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                preact.h("path", {
                  d: "M4.3366 1.2928C4.54294 0.874729 5.1391 0.874729 5.34544 1.2928L6.32794 3.28352L8.52481 3.60275C8.98619 3.66979 9.17039 4.23679 8.83656 4.5622L7.24685 6.11175L7.62214 8.29979C7.70093 8.75929 7.21864 9.1097 6.80598 8.89275L4.84102 7.8597L2.87607 8.89275C2.46341 9.1097 1.9811 8.75929 2.05991 8.29979L2.43519 6.11175L0.845502 4.5622C0.511648 4.23679 0.695873 3.66979 1.15725 3.60275L3.35414 3.28352L4.3366 1.2928ZM4.84102 1.68297L3.90005 3.58959C3.81812 3.75561 3.65974 3.87068 3.47652 3.8973L1.37244 4.20304L2.89497 5.68712C3.02754 5.81637 3.08804 6.00254 3.05674 6.18504L2.69732 8.28062L4.57927 7.2912C4.74314 7.20504 4.93889 7.20504 5.10277 7.2912L6.98473 8.28062L6.62531 6.18504C6.59402 6.00254 6.65452 5.81637 6.78706 5.68712L8.3096 4.20304L6.20552 3.8973C6.02231 3.87068 5.86393 3.75561 5.78202 3.58959L4.84102 1.68297Z",
                  fill: "#717171",
                })
              )
            )
          ),
          preact.h(
            "div",
            { class: "b_ov_body" },
            preact.h(
              "div",
              { class: "b_ov_perms" },
              t
                ? preact.h("img", {
                    class: "rms_image",
                    src: "data:image/png;base64,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",
                  })
                : preact.h("img", {
                    class: "rms_image",
                    src: "data:image/png;base64,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",
                  })
            ),
            preact.h(
              "div",
              { class: "b_ov_permZoom" },
              t
                ? preact.h("img", {
                    class: "rms_image",
                    src: "data:image/png;base64,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",
                  })
                : preact.h("img", {
                    class: "rms_image",
                    src: "data:image/png;base64,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",
                  }),
              preact.h(
                "div",
                { class: "b_ov_click" },
                preact.h(
                  "svg",
                  {
                    width: "30",
                    height: "30",
                    viewBox: "0 0 30 30",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  preact.h("circle", {
                    cx: "14.977",
                    cy: "14.977",
                    r: "14.977",
                    fill: "#FF0D0D",
                    "fill-opacity": "0.4",
                  })
                ),
                preact.h(
                  "div",
                  { class: "b_ov_hand" },
                  preact.h("img", {
                    class: "rms_image",
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAACY0lEQVR4Ab1Wy3GDQAwVSQ72jRIogQ5MCaQDSnAHpgPsCnAqYHLzjXSAO8Ad2B2QfesVo4i/7cmb0di7iNXbJ4ldojsCY7mxylhpLKF/QGCsNtYo2y5YY0cPkI4RKAiCpqqqJssyGTzo8feNZY4sghWPkk7gnCRJw9hut7xA6QJhodz5dtQB6aIomt1ux3NX994oQjj7vt/UdW0DX69XOxaLdAJJdSTpKIrYL6MZOMI5juN2ASk5AuV5bn8xTtO09UNQkARZAOQFyXAqcMA7K8uyXZQDYXdSCczLQJiTZFSqJpHCGVIxQEKTQQC9a54bSFU0FRjFYAtnv9//yZncIX4xlvLy3ECqappRaLa1+nImd8hKQFIG0oE6kAjDkIOnNANln5SSDCuh06DBBGlme0XOuZMz2TZ4hh1x4Q1BtFdOM7AnVWics7Ed9oGrnhYUWqe9QETmdS646mlJe6FaGZBc5nkuVHslWPx9JPAPnG63m+95Hpnd0mq1srYUeGe9XtPpdGI1v6beiUi116NQu56scMC21yO51RB9PfkNB7PYOS+uaA3RWtHbgLx80KOyC35wOBzoVfhQYwRsbw8mJ2SqmoxEdrzZbOgZnM/n9q+cT8gVEm4Sz8qqge843WWuNCFMdD70rwKf7dRzGbRHIn+fXwnx5aqpB23boOfw8ce5jIMBbQDGqEqcuZifkwqsI24jg20UUveaOmogczweOyohIMgJeTsSeyp4QPfjCyRuxr7pXoFnN8Zz7u0NiXs3Kh9dcLlcrAlg8Emqkp8FCPRd6NH/pXveC49eB6gENS7ORvELebtMMIsEIccAAAAASUVORK5CYII=",
                  }),
                  preact.h("span", { class: "b_ov_hand_step" }, t ? "2" : "")
                )
              )
            ),
            t
              ? preact.h(
                  "div",
                  { class: "b_ov_click b_ov_click2" },
                  preact.h(
                    "svg",
                    {
                      width: "30",
                      height: "30",
                      viewBox: "0 0 30 30",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    preact.h("circle", {
                      cx: "14.977",
                      cy: "14.977",
                      r: "14.977",
                      fill: "#FF0D0D",
                      "fill-opacity": "0.4",
                    })
                  ),
                  preact.h(
                    "div",
                    { class: "b_ov_hand" },
                    preact.h("img", {
                      class: "rms_image",
                      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAACY0lEQVR4Ab1Wy3GDQAwVSQ72jRIogQ5MCaQDSnAHpgPsCnAqYHLzjXSAO8Ad2B2QfesVo4i/7cmb0di7iNXbJ4ldojsCY7mxylhpLKF/QGCsNtYo2y5YY0cPkI4RKAiCpqqqJssyGTzo8feNZY4sghWPkk7gnCRJw9hut7xA6QJhodz5dtQB6aIomt1ux3NX994oQjj7vt/UdW0DX69XOxaLdAJJdSTpKIrYL6MZOMI5juN2ASk5AuV5bn8xTtO09UNQkARZAOQFyXAqcMA7K8uyXZQDYXdSCczLQJiTZFSqJpHCGVIxQEKTQQC9a54bSFU0FRjFYAtnv9//yZncIX4xlvLy3ECqappRaLa1+nImd8hKQFIG0oE6kAjDkIOnNANln5SSDCuh06DBBGlme0XOuZMz2TZ4hh1x4Q1BtFdOM7AnVWics7Ed9oGrnhYUWqe9QETmdS646mlJe6FaGZBc5nkuVHslWPx9JPAPnG63m+95Hpnd0mq1srYUeGe9XtPpdGI1v6beiUi116NQu56scMC21yO51RB9PfkNB7PYOS+uaA3RWtHbgLx80KOyC35wOBzoVfhQYwRsbw8mJ2SqmoxEdrzZbOgZnM/n9q+cT8gVEm4Sz8qqge843WWuNCFMdD70rwKf7dRzGbRHIn+fXwnx5aqpB23boOfw8ce5jIMBbQDGqEqcuZifkwqsI24jg20UUveaOmogczweOyohIMgJeTsSeyp4QPfjCyRuxr7pXoFnN8Zz7u0NiXs3Kh9dcLlcrAlg8Emqkp8FCPRd6NH/pXveC49eB6gENS7ORvELebtMMIsEIccAAAAASUVORK5CYII=",
                    }),
                    preact.h("span", { class: "b_ov_hand_step" }, "1")
                  )
                )
              : null,
            preact.h(
              "div",
              { class: "b_ov_textCont" },
              preact.h(
                "div",
                { class: "b_ov_mic" },
                preact.h(
                  "svg",
                  {
                    width: "36",
                    height: "50",
                    viewBox: "0 0 36 50",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  preact.h("path", {
                    d: "M33.6249 22.5C34.5742 22.5 35.3587 23.2055 35.4829 24.1205L35.4999 24.375V25.625C35.4999 34.5235 28.6124 41.8135 19.8774 42.4543L19.8749 48.125C19.8749 49.1605 19.0354 50 17.9999 50C17.0507 50 16.2662 49.2945 16.1419 48.3795L16.1249 48.125V42.4545C7.58301 41.829 0.807013 34.845 0.510088 26.2158L0.499939 25.625V24.375C0.499939 23.3395 1.33941 22.5 2.37494 22.5C3.32419 22.5 4.10866 23.2055 4.23281 24.1205L4.24994 24.375V25.625C4.24994 32.6925 9.83606 38.4552 16.8339 38.739L17.3749 38.75H18.6249C25.6924 38.75 31.4552 33.164 31.7389 26.166L31.7499 25.625V24.375C31.7499 23.3395 32.5894 22.5 33.6249 22.5ZM17.9999 0C23.5227 0 27.9999 4.47715 27.9999 10V25C27.9999 30.5228 23.5227 35 17.9999 35C12.4771 35 7.99994 30.5228 7.99994 25V10C7.99994 4.47715 12.4771 0 17.9999 0ZM17.9999 3.75C14.5482 3.75 11.7499 6.54822 11.7499 10V25C11.7499 28.4517 14.5482 31.25 17.9999 31.25C21.4517 31.25 24.2499 28.4517 24.2499 25V10C24.2499 6.54822 21.4517 3.75 17.9999 3.75Z",
                    fill: "white",
                  })
                )
              ),
              preact.h("div", { class: "b_ov_title" }, t ? p : v),
              preact.h(
                "div",
                { class: "b_ov_text" },
                t ? w : y,
                t
                  ? preact.h(
                      "ol",
                      { class: "b_ov_txt_lst" },
                      preact.h("li", { class: "b_ov_txt_lst_itm" }, b),
                      preact.h("li", { class: "b_ov_txt_lst_itm" }, k)
                    )
                  : null
              )
            )
          )
        )
      );
    },
    yi = function () {
      var n = preactHooks.useContext(o),
        u = n.updateShowTooltip,
        f = n.bingPageVoiceTalentHandle,
        e = n.bingPageVoiceTalentName,
        t = function () {
          return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function () {
              return u(!1), [2];
            });
          });
        },
        s = function (n) {
          var i = _ge("pv_tooltip");
          i.contains(n.target) || (t(), sj_sp(n));
        };
      preactHooks.useEffect(function () {
        _d.addEventListener("click", s);
      });
      var h =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.personalVoiceTooltipTitle
            ? _vs.locstr.personalVoiceTooltipTitle
            : "Personal Voice",
        c =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.personalVoiceTooltipDescription
            ? _vs.locstr.personalVoiceTooltipDescription
            : "This synthetic voice was created by {0}",
        i =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.personalVoiceTooltipClose
            ? _vs.locstr.personalVoiceTooltipClose
            : "Close",
        r = c.split("{0}");
      return preact.h(
        "div",
        {
          id: "pv_tooltip",
          role: "dialog",
          onClick: function (n) {
            n.stopPropagation();
          },
        },
        preact.h("div", { class: "b_tooltip_point" }),
        preact.h(
          "div",
          {
            class: "b_tooltip_close_btn",
            role: "button",
            tabIndex: 0,
            "aria-label": i,
            onClick: function () {
              t();
            },
          },
          preact.h("div", { class: "b_tooltip_close", alt: i })
        ),
        preact.h("h1", { class: "b_tooltip_title", role: "heading" }, h),
        preact.h(
          "h1",
          { class: "b_tooltip_description", role: "heading" },
          r[0],
          " ",
          preact.h("a", { href: f, target: "_blank" }, e),
          " ",
          r[1]
        )
      );
    },
    pi = function () {
      var n = preactHooks.useContext(o),
        t = n.updateShowPersonalVoiceLandingTooltip,
        e = n.updateShowTooltip,
        s = n.bingPageVoiceTalentHandle,
        h = n.bingPageVoiceTalentName,
        c = n.loggingName,
        i = function () {
          return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function () {
              return t(!1), e(!1), [2];
            });
          });
        },
        l = function (n) {
          var t = _ge("pvl_tooltip");
          t.contains(n.target) || (i(), sj_sp(n));
        };
      preactHooks.useEffect(function () {
        _d.addEventListener("click", l);
      });
      var a = function (n) {
          var i = n.target;
          i.closest(".b_pvl_cont") == null
            ? sj_sp(n)
            : (r.logClick(c, "click", "PersonalVoiceLandingTooltipClick"),
              t(!1));
        },
        v =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.personalVoiceTooltipTitle
            ? _vs.locstr.personalVoiceTooltipTitle
            : "Personal voice enabled",
        u =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.personalVoiceTooltipClose
            ? _vs.locstr.personalVoiceTooltipClose
            : "Close",
        y =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.personalVoiceTooltipEnabledText
            ? _vs.locstr.personalVoiceTooltipEnabledText
            : "Voice results will be read to you using a synthetic voice created by {0}",
        p =
          (typeof _model != "undefined" &&
            _model.LocStrings &&
            _model.LocStrings.Speech_LearnMore_Instruction2) ||
          (typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.learnMoreInst
            ? _vs.locstr.learnMoreInst
            : "Try saying,"),
        w =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.personalVoiceTooltipExampleQuery
            ? _vs.locstr.personalVoiceTooltipExampleQuery
            : '"How many ounces are in one gallon?"',
        b =
          typeof _vs != "undefined" &&
          _vs &&
          _vs.locstr &&
          _vs.locstr.personalVoiceTooltipSettingsText
            ? _vs.locstr.personalVoiceTooltipSettingsText
            : "Manage your read out voice in Settings",
        f = y.split("{0}");
      return preact.h(
        "div",
        { id: "pvl_tooltip", role: "dialog", onClick: a },
        preact.h("div", { class: "b_tooltip_point" }),
        preact.h(
          "div",
          {
            class: "b_tooltip_close_btn",
            role: "button",
            tabIndex: 0,
            "aria-label": u,
            onClick: function () {
              i();
            },
          },
          preact.h("div", { class: "b_tooltip_close", alt: u })
        ),
        preact.h("h1", { class: "b_tooltip_title", role: "heading" }, v),
        preact.h(
          "h1",
          { class: "b_tooltip_description", role: "heading" },
          f[0],
          " ",
          preact.h("a", { href: s, target: "_blank" }, h),
          " ",
          f[1]
        ),
        preact.h(
          "div",
          { className: "b_pvl_cont" },
          preact.h(
            "div",
            { className: "b_pvl_icon" },
            preact.h(
              "svg",
              {
                width: "64",
                height: "64",
                viewBox: "0 0 64 64",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              preact.h("circle", {
                cx: "32",
                cy: "32",
                r: "30",
                fill: "white",
                stroke: "#00809D",
                "stroke-width": "4",
              }),
              preact.h("path", {
                d: "M42.6742 34.8624C41.8321 34.5255 40.9899 34.8624 40.6531 35.5361C40.1478 36.2097 39.6426 36.8834 39.1373 37.3887C38.2952 38.2308 37.1163 39.0729 35.9373 39.5782C34.5899 40.0834 33.2426 40.4203 31.8952 40.4203C30.5478 40.4203 29.2005 40.0834 28.0215 39.5782C26.8426 39.0729 25.6636 38.3992 24.8215 37.3887C24.3163 36.8834 23.811 36.2097 23.3057 35.5361C22.8005 34.8624 21.9584 34.5255 21.2847 34.8624C20.2742 35.1992 19.9373 36.3782 20.4426 37.2203C20.9478 38.2308 21.6215 39.0729 22.4636 39.7466C23.6426 40.9255 25.1584 41.936 26.6742 42.6097C27.8531 43.115 29.0321 43.4518 30.211 43.6203V47.1571C30.211 48.1676 30.8847 48.8413 31.8952 48.8413C32.9057 48.8413 33.5794 48.1676 33.5794 47.1571V43.6203C34.7584 43.4518 36.1057 43.115 37.1163 42.6097C38.8005 41.936 40.1478 40.9255 41.3268 39.7466C42.1689 38.9045 42.8426 38.0624 43.3478 37.2203C44.0215 36.3782 43.5163 35.1992 42.6742 34.8624ZM31.8952 37.0518C35.6005 37.0518 38.6321 34.0203 38.6321 30.315V21.8939C38.6321 18.1887 35.6005 15.1571 31.8952 15.1571C28.19 15.1571 25.1584 18.1887 25.1584 21.8939V30.315C25.1584 34.0203 28.19 37.0518 31.8952 37.0518ZM28.5268 21.8939C28.5268 20.0413 30.0426 18.5255 31.8952 18.5255C33.7478 18.5255 35.2636 20.0413 35.2636 21.8939V30.315C35.2636 32.1676 33.7478 33.6834 31.8952 33.6834C30.0426 33.6834 28.5268 32.1676 28.5268 30.315V21.8939Z",
                fill: "#00809D",
              })
            )
          ),
          preact.h("span", null, p),
          preact.h("span", null, w)
        ),
        preact.h("hr", { class: "b_tooltip_divider" }),
        preact.h(
          "h1",
          { class: "b_tooltip_description", role: "heading" },
          preact.h(
            "a",
            {
              href: "https://www.bing.com/account/general?ru=https%3a%2f%2fwww.bing.com%2f#settings_voice",
              target: "_blank",
            },
            b
          )
        )
      );
    },
    wi = function () {
      return preact.h(
        "svg",
        {
          className: "read_icon",
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
        },
        preact.h(
          "g",
          { filter: "url(#filter0_d)" },
          preact.h("path", {
            className: "icon_path",
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36Z",
          })
        ),
        preact.h("line", {
          className: "b_read_sl",
          x1: "12",
          y1: "19",
          x2: "12",
          y2: "21",
          stroke: "white",
          "stroke-width": "1.5",
        }),
        preact.h("line", {
          className: "b_read_ml",
          x1: "16",
          y1: "16",
          x2: "16",
          y2: "24",
          stroke: "white",
          "stroke-width": "1.5",
        }),
        preact.h("line", {
          className: "b_read_ll",
          x1: "20",
          y1: "13",
          x2: "20",
          y2: "27",
          stroke: "white",
          "stroke-width": "1.5",
        }),
        preact.h("line", {
          className: "b_read_ml",
          x1: "24",
          y1: "16",
          x2: "24",
          y2: "24",
          stroke: "white",
          "stroke-width": "1.5",
        }),
        preact.h("line", {
          className: "b_read_sl",
          x1: "28",
          y1: "19",
          x2: "28",
          y2: "21",
          stroke: "white",
          "stroke-width": "1.5",
        }),
        preact.h(
          "defs",
          null,
          preact.h(
            "filter",
            {
              id: "filter0_d",
              x: "0",
              y: "0",
              width: "40",
              height: "40",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
            },
            preact.h("feFlood", {
              "flood-opacity": "0",
              result: "BackgroundImageFix",
            }),
            preact.h("feColorMatrix", {
              in: "SourceAlpha",
              type: "matrix",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            }),
            preact.h("feOffset", null),
            preact.h("feGaussianBlur", { stdDeviation: "2" }),
            preact.h("feColorMatrix", {
              type: "matrix",
              values: "0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0.2 0",
            }),
            preact.h("feBlend", {
              mode: "normal",
              in2: "BackgroundImageFix",
              result: "effect1_dropShadow",
            }),
            preact.h("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "effect1_dropShadow",
              result: "shape",
            })
          )
        )
      );
    },
    bi = function () {
      var n = preactHooks.useContext(o),
        t = n.isPartner,
        u = n.iconColor,
        f = n.isFirstRender,
        e = n.updateIsFirstRender,
        i = n.enablePreloadMic,
        s = n.enableShowMicOnSBClick;
      return (
        preactHooks.useEffect(function () {
          if (t && i && f) {
            var n = _ge("vs_mic_icon");
            n && Lib.CssClass.remove(n, "disabled");
            sj_evt.fire("micLoaded");
            r.logTime("Loaded");
            e(!1);
          }
        }, []),
        t && i
          ? null
          : t && fi
          ? preact.h(
              "svg",
              {
                id: "vs_mic_icon",
                class: "mic_icon sb_icon disabled",
                viewBox: "0 0 24 24",
              },
              preact.h("path", {
                d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z",
              })
            )
          : preact.h(
              "svg",
              { viewBox: "0 0 20 20" },
              preact.h("path", { d: "m0 0h20v20h-20z", fill: "none" }),
              preact.h("path", {
                className: "icon_path",
                fill: i ? u : null,
                d: "m16.379 11.694c-.458-.194-.983-.019-1.241.406-.252.416-.553.8-.895 1.142-.544.543-1.191.983-1.908 1.286-.717.304-1.504.472-2.335.472s-1.618-.168-2.335-.471-1.364-.743-1.908-1.286c-.342-.343-.644-.726-.895-1.142-.257-.425-.783-.6-1.24-.407-.552.233-.793.906-.484 1.42.338.563.744 1.081 1.205 1.543.723.722 1.584 1.308 2.542 1.714.664.28 1.375.467 2.115.56v2.069c0 .552.448 1 1 1s1-.448 1-1v-2.069c.74-.093 1.451-.279 2.114-.559h.001c.958-.406 1.819-.991 2.542-1.713l.001-.001c.461-.462.866-.979 1.205-1.542.308-.516.068-1.188-.484-1.422zm-6.379 1.306c2.209 0 4-1.791 4-4v-5c0-2.209-1.791-4-4-4s-4 1.791-4 4v5c0 2.209 1.791 4 4 4zm-2-9c0-1.103.897-2 2-2s2 .897 2 2v5c0 1.103-.897 2-2 2s-2-.897-2-2z",
              })
            )
      );
    },
    c = function (n) {
      var t = preactHooks.useContext(o).handleText;
      n && typeof document != "undefined" && t(n, _vs);
    },
    ki = function (n, t) {
      return __awaiter(void 0, void 0, void 0, function () {
        var f, o, s, u, e, i;
        return __generator(this, function (h) {
          switch (h.label) {
            case 0:
              return typeof document != "undefined"
                ? ((f = ""),
                  (o = location.search.indexOf("?")),
                  (s =
                    location.search
                      .slice(o + 1)
                      .split("&")
                      .indexOf("uqubfprlg=1") >= 0),
                  !s)
                  ? [3, 6]
                  : (d &&
                      typeof uquSpokenResponse != "undefined" &&
                      uquSpokenResponse.reopenMic &&
                      n(uquSpokenResponse.reopenMic),
                    !(
                      typeof uquSpokenResponse != "undefined" &&
                      uquSpokenResponse.url
                    ))
                  ? [3, 1]
                  : ((f = uquSpokenResponse.url),
                    et(uquSpokenResponse, t),
                    [3, 6])
                : [3, 7];
            case 1:
              return typeof uquSpokenResponse != "undefined" &&
                uquSpokenResponse.messageType == "spokenResponse" &&
                uquSpokenResponse.encodedData
                ? ((f = "data:audio/wav;base64,".concat(
                    uquSpokenResponse.encodedData
                  )),
                  et(uquSpokenResponse, t),
                  [3, 6])
                : [3, 2];
            case 2:
              return dt
                ? ((u = document.querySelector(".b_cat3a [data-ssml]")),
                  u ||
                    (u = document.querySelector(".b_poleContent [data-ssml]")),
                  u || (u = document.querySelector("[data-ssml]")),
                  !u)
                  ? [3, 4]
                  : (r.logTime("TTSApiStart"),
                    (e = u.getAttribute("data-ssml")),
                    [4, ft(e)])
                : [3, 6];
            case 3:
              return (
                (i = h.sent()),
                i && i.audio && (f = "data:audio/wav;base64,".concat(i.audio)),
                r.logTime("TTSApiEnd"),
                [3, 6]
              );
            case 4:
              return r.logTime("TTSApiStart"), (e = ""), [4, ft(e)];
            case 5:
              i = h.sent();
              i && i.audio && (f = "data:audio/wav;base64,".concat(i.audio));
              r.logTime("TTSApiEnd");
              h.label = 6;
            case 6:
              return [2, f];
            case 7:
              return [2];
          }
        });
      });
    },
    ft = function (n) {
      var t = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/xml",
          "X-UQU-TTSOption": "DefaultSSML",
        },
        method: "POST",
        body: n,
      };
      return fetch("/opaluqu/tts/v1", t)
        .then(function (n) {
          if (n.ok) return n.json();
        })
        .catch(function () {
          return null;
        });
    },
    et = function (n, t) {
      n.fallbackSpokenText &&
        r.logDataEvent(t, "spokenText", n.fallbackSpokenText);
      ti &&
        n.spokenResponseType &&
        r.logDataEvent(t, "spokenResponseType", n.spokenResponseType);
    },
    di = function (n) {
      switch (n) {
        case u.Waiting:
          return typeof _vs != "undefined" &&
            _vs &&
            _vs.locstr &&
            _vs.locstr.wait
            ? _vs.locstr.wait
            : u.Waiting;
        case u.Listening:
          return typeof _vs != "undefined" &&
            _vs &&
            _vs.locstr &&
            _vs.locstr.listen
            ? _vs.locstr.listen
            : u.Listening;
        case u.Blocked:
          return typeof _vs != "undefined" &&
            _vs &&
            _vs.locstr &&
            _vs.locstr.block
            ? _vs.locstr.block
            : u.Blocked;
        case u.NoMic:
          return typeof _vs != "undefined" &&
            _vs &&
            _vs.locstr &&
            _vs.locstr.nomic
            ? _vs.locstr.nomic
            : u.NoMic;
      }
    },
    gi = function (n) {
      switch (n) {
        case e.Error:
          return typeof _vs != "undefined" &&
            _vs &&
            _vs.locstr &&
            _vs.locstr.error
            ? _vs.locstr.error
            : e.Error;
        case e.NoText:
          return typeof _vs != "undefined" &&
            _vs &&
            _vs.locstr &&
            _vs.locstr.notext
            ? _vs.locstr.notext
            : e.NoText;
      }
    };
});
define("Components/Core/SearchPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/SpeechPreact_Utils",
  "Components/Core/HooksPreact",
  "Components/Core/GiveWithBing",
  "Components/Core/ModelContextPreact",
  "Components/NewTab/ChromePreact",
  "Components/Core/SpeechPreact",
], function (n, t, i, r, u, f, e, o, s) {
  "use strict";
  var h;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.SearchBox = t.SearchContext = t.searchboxParallaxRatio = void 0;
  t.searchboxParallaxRatio = 0.7;
  t.SearchContext = preact.createContext(null);
  h = function () {
    var u = preactHooks.useState(v()),
      f = u[0],
      a = u[1],
      o = preactHooks.useState(f != "" ? !0 : !1),
      y = o[0],
      p = o[1],
      s = preactHooks.useState(""),
      b = s[0],
      k = s[1],
      n = preactHooks.useContext(e.ModelContext),
      d = n.model,
      r = n.scrollPosition,
      h = n.searchboxFixed,
      g = n.dimmer,
      c = d.IsMobile,
      nt = preactHooks.useRef(null),
      it = "sbox ".concat(h || (c && g) ? "fix" : ""),
      l =
        !c && r && r.top != 0 && !h
          ? "translate3d(0, ".concat(-(r.top * 0.15), "px, 0)")
          : "",
      rt = l ? { transform: l } : null;
    return preact.h(
      t.SearchContext.Provider,
      {
        value: {
          searchText: f,
          updateSearchText: a,
          hasText: y,
          updateHasText: p,
          ghostText: b,
          updateGhostText: k,
        },
      },
      preact.h(
        i.Region,
        { nodeName: "Searchbox", parentNodeName: "Core" },
        preact.h(tt, null),
        preact.h(
          "main",
          { className: it, style: rt, ref: nt },
          preact.h(w, null)
        )
      )
    );
  };
  t.SearchBox = h;
  var c = function () {
      var n = preactHooks.useContext(e.ModelContext).model,
        o = n.LocStrings,
        s = n.InPrivate,
        h = n.IsMobile,
        r = n.LargeTargNoTT,
        c = n.IconsMaxTarg,
        l = n.SearchBoxLeftIconStatus,
        a = s ? "#111" : "#007DAA",
        v = s ? "#111" : "#1A73E8",
        t = l == "unclickable",
        i = preactHooks.useRef(null),
        u = r ? "largeTargNoTT" : "tooltip",
        y,
        f;
      return (
        l && (t && (u = "unclickable"), (u += " leftIcon")),
        (y = function (n) {
          var t;
          (n.key == "Enter" || n.which == 13) &&
            ((t = i === null || i === void 0 ? void 0 : i.current) === null ||
            t === void 0
              ? void 0
              : t.click());
        }),
        (f = function (n) {
          var i = _ge("sb_form_go"),
            t = _d.getElementsByClassName("search icon")[0];
          (n.key == "Tab" || n.which == 9) &&
            i &&
            t &&
            Lib.CssClass.add(t, "tooltip");
        }),
        preactHooks.useEffect(function () {
          return (
            r && window.addEventListener("keydown", f),
            function () {
              r && window.removeEventListener("keydown", f);
            }
          );
        }, []),
        preact.h(
          preact.Fragment,
          null,
          preact.h("input", {
            id: "sb_form_go",
            type: "submit",
            "aria-label": o.LOC_SEARCH_THE_WEB,
            name: "search",
            value: "",
            ref: i,
            tabIndex: h || t ? -1 : 0,
          }),
          preact.h(
            "label",
            {
              for: t ? "" : "sb_form_go",
              className: "search icon ".concat(u),
              role: t ? "" : "button",
              id: "search_icon",
              "aria-label": o.LOC_SEARCH_THE_WEB,
              onKeyDown: y,
              tabIndex: h ? 0 : -1,
            },
            t
              ? preact.h(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "18",
                    height: "18",
                    viewBox: "0 0 25 25",
                  },
                  preact.h("path", {
                    stroke: "#767676",
                    "stroke-width": "2.5",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10",
                    fill: "none",
                    d: "M23.75 23.75l-9-9",
                  }),
                  preact.h("circle", {
                    stroke: "#767676",
                    "stroke-width": "2.5",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10",
                    cx: "9",
                    cy: "9",
                    r: "7.75",
                    fill: "none",
                  }),
                  preact.h("path", { fill: "none", d: "M25 25h-25v-25h25z" })
                )
              : preact.h(
                  "svg",
                  { viewBox: "0 0 25 25" },
                  preact.h("path", {
                    stroke: c ? v : a,
                    "stroke-width": "2.5",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10",
                    fill: "none",
                    d: "M23.75 23.75l-9-9",
                  }),
                  preact.h("circle", {
                    stroke: c ? v : a,
                    "stroke-width": "2.5",
                    "stroke-linecap": "round",
                    "stroke-miterlimit": "10",
                    cx: "9",
                    cy: "9",
                    r: "7.75",
                    fill: "none",
                  }),
                  preact.h("path", { fill: "none", d: "M25 25h-25v-25h25z" })
                )
          )
        )
      );
    },
    y = function () {
      var n = preactHooks.useContext(e.ModelContext).model,
        t = n.LocStrings,
        r = n.MultiLangKeyboardEnabled,
        i = n.InPrivate,
        u = i ? "#111" : "#007DAA",
        f = i ? "#111" : "#1A73E8",
        o = function () {
          var n = _ge("vkeyIcon");
          n != null && n.click();
        },
        s = "icon ".concat(n.IconsMaxTarg ? "keyboard_cont" : "tooltip"),
        h = n.IconsMaxTarg ? "" : t.LOC_KEYBOARD_ICON_TOOLTIP;
      if (r)
        return preact.h(
          "div",
          {
            class: s,
            "aria-label": h,
            onClick: n.IconsMaxTarg ? o : undefined,
            role: "button",
          },
          n.IconsMaxTarg
            ? preact.h(
                "div",
                {
                  id: "vkeyIconCont",
                  class: "tooltip",
                  "aria-label": t.LOC_KEYBOARD_ICON_TOOLTIP,
                },
                preact.h(
                  "div",
                  { id: "vkeyIcon", class: "vkeyRest" },
                  preact.h(
                    "svg",
                    {
                      viewBox: "0 0 25 24",
                      "enable-background": "new 0 0 25 24",
                    },
                    preact.h("path", {
                      fill: f,
                      d: "M19 8h-3c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h3c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-12.5 0h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm4.5 2.5h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1zm8 2.5h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-5 0h-3c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h3c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-7.5 0h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm15.5-11h-19c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h19c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3zm.5 17c0 .276-.225.5-.5.5h-19c-.275 0-.5-.224-.5-.5v-14c0-.276.225-.5.5-.5h19c.275 0 .5.224.5.5v14z",
                    }),
                    preact.h("path", { fill: "none", d: "M0 0h25v24h-25z" })
                  )
                )
              )
            : preact.h(
                "div",
                { id: "vkeyIcon", class: "vkeyRest" },
                preact.h(
                  "svg",
                  {
                    viewBox: "0 0 25 24",
                    "enable-background": "new 0 0 25 24",
                  },
                  preact.h("path", {
                    fill: u,
                    d: "M19 8h-3c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h3c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-12.5 0h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm4.5 2.5h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1zm8 2.5h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-5 0h-3c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h3c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-7.5 0h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm15.5-11h-19c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h19c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3zm.5 17c0 .276-.225.5-.5.5h-19c-.275 0-.5-.224-.5-.5v-14c0-.276.225-.5.5-.5h19c.275 0 .5.224.5.5v14z",
                  }),
                  preact.h("path", { fill: "none", d: "M0 0h25v24h-25z" })
                )
              )
        );
    },
    p = function (n) {
      function b(n) {
        n === void 0 && (n = document);
        var t = n.activeElement;
        return t ? (t.shadowRoot ? b(t.shadowRoot) : t) : null;
      }
      var y = n.updateContainerBorder,
        g = n.isAutoSuggestActive,
        i = preactHooks.useRef(null),
        s = preactHooks.useContext(e.ModelContext),
        r = s.updateDimmer,
        nt = s.dimmer,
        h = s.model,
        c = h.IsMobile,
        o = h.SearchTypeFix,
        tt = h.LocStrings,
        f = preactHooks.useContext(t.SearchContext),
        u = f.searchText,
        l = f.updateSearchText,
        it = f.hasText,
        p = f.updateHasText,
        w = f.updateGhostText,
        k,
        a,
        d;
      return (
        preactHooks.useEffect(
          function () {
            o
              ? i.current && i.current.form && u && u != ""
                ? i.current.focus()
                : l(v())
              : i.current &&
                i.current.form &&
                u &&
                u != "" &&
                (i.current.focus(), i.current.form.submit());
          },
          [u]
        ),
        preactHooks.useEffect(
          function () {
            var u = preactHooks.useContext(e.ModelContext),
              f = function (n) {
                var r = preactHooks.useContext(t.SearchContext),
                  u,
                  i;
                if (
                  r != null &&
                  ((u = r.searchText), (i = r.ghostText), i && i != u)
                ) {
                  if (n && !i.startsWith(u)) return;
                  l(i);
                  w("");
                }
              },
              n,
              o;
            u &&
              u.model &&
              ((n = u.model),
              (o = n.IsWidgetCompatible),
              o
                ? addEventListener("keydown", function (n) {
                    var t,
                      u,
                      f,
                      e,
                      o,
                      s =
                        ((u =
                          (t = n.target) === null || t === void 0
                            ? void 0
                            : t.tagName) === null || u === void 0
                          ? void 0
                          : u.toLowerCase()) == "bing-homepage-feed",
                      h =
                        (f = n.target) === null || f === void 0
                          ? void 0
                          : f.shadowRoot,
                      c =
                        s && h
                          ? ((o =
                              (e = b(h)) === null || e === void 0
                                ? void 0
                                : e.tagName) === null || o === void 0
                              ? void 0
                              : o.toLowerCase()) == "input"
                          : !1;
                    !i.current ||
                      (n.target != document.body &&
                        n.target != i.current &&
                        (!s || c)) ||
                      n.ctrlKey ||
                      n.shiftKey ||
                      n.altKey ||
                      (n.key && n.key.length) != 1 ||
                      (r(!0), i.current.focus());
                  })
                : addEventListener("keydown", function (n) {
                    !i.current ||
                      (n.target != document.body && n.target != i.current) ||
                      n.ctrlKey ||
                      n.shiftKey ||
                      n.altKey ||
                      (n.key && n.key.length) != 1 ||
                      (r(!0), i.current.focus());
                  }),
              addEventListener("keyup", function (t) {
                t.key == "Enter"
                  ? y()
                  : t.key == "Escape"
                  ? (y(), r(!1))
                  : t.key == "Tab" ||
                    (n.RtlLang && t.key == "ArrowLeft") ||
                    (!n.RtlLang && t.key == "ArrowRight")
                  ? f(!0)
                  : (t.key == "ArrowDown" || t.key == "ArrowUp") && f(!1);
              }),
              i &&
                i.current &&
                (i.current.addEventListener("click", function () {
                  r(!0);
                }),
                c ||
                  (i.current.addEventListener("blur", function () {
                    r(!1);
                  }),
                  i.current.addEventListener("blurfocusIme", function () {
                    r(!0);
                  }))));
          },
          [i.current]
        ),
        (k = function (n) {
          var t = n.target;
          t.value ? p(!0) : p(!1);
          o && l(t.value);
        }),
        (a = function (n) {
          if (n.length && !(n.length < 2)) {
            var t = n[1].target;
            o && w(t.value);
          }
        }),
        preactHooks.useEffect(function () {
          return (
            sj_evt.bind("AS.Input.Update", a),
            function () {
              sj_evt.unbind("AS.Input.Update", a);
            }
          );
        }, []),
        (d = c && !it && i.current && i.current.value),
        d && (i.current.value = ""),
        preact.h(
          "div",
          {
            id: "sb_form_c",
            className: "sb_form_c ".concat(g || nt ? "" : "tooltip"),
            "aria-label": tt.LOC_SEARCHBOX_TITLE,
          },
          preact.h("input", {
            id: "sb_form_q",
            className: "sb_form_q",
            name: "q",
            type: "search",
            maxLength: 1e3,
            autocomplete: "off",
            spellcheck: !1,
            "aria-labelledby": "sb_form_c",
            autofocus: !0,
            "aria-controls": "sw_as",
            "aria-autocomplete": "both",
            "aria-owns": "sw_as",
            onClick: r.bind(null, !0),
            onInput: c || o ? k : null,
            value: u || (i.current && i.current.value),
            ref: i,
          })
        )
      );
    },
    w = function () {
      var r = preactHooks.useState("/search"),
        ut = r[0],
        u = r[1],
        f = preactHooks.useState(!1),
        t = f[0],
        o = f[1],
        s = preactHooks.useState(!1),
        ft = s[0],
        h = s[1],
        l = preactHooks.useContext(e.ModelContext).model,
        et = l.IconsMaxTarg,
        a = l.SearchBoxLeftIconStatus,
        v = function () {
          o(!0);
        },
        n = function () {
          o(!1);
        },
        w = function () {
          h(!0);
        },
        tt = function () {
          h(!1);
        };
      return (
        preactHooks.useEffect(function () {
          var n,
            t,
            i,
            r,
            f,
            e =
              (f =
                (r =
                  (i =
                    (t =
                      (n = location.search) === null || n === void 0
                        ? void 0
                        : n.slice(1)) === null || t === void 0
                      ? void 0
                      : t.split("&")) === null || i === void 0
                    ? void 0
                    : i.filter(function (n) {
                        return n.indexOf("scope=") == 0;
                      })[0]) === null || r === void 0
                  ? void 0
                  : r.split("=")[1]) !== null && f !== void 0
                ? f
                : "";
          switch (e) {
            case "image":
            case "images":
              u("/images/search");
              break;
            case "video":
            case "videos":
              u("/videos/search");
          }
        }, []),
        preactHooks.useEffect(
          function () {
            return (
              sj_evt.bind("AS.Canvas.Show", v),
              sj_evt.bind("AS.Canvas.Hide", n),
              sj_evt.bind("ASHide", n),
              sj_evt.bind("AS.Layout.NextWord.Show", w),
              sj_evt.bind("AS.Layout.NextWord.Hide", tt),
              function () {
                sj_evt.unbind("AS.Canvas.Show", v);
                sj_evt.unbind("AS.Canvas.Hide", n);
                sj_evt.unbind("ASHide", n);
                sj_evt.unbind("AS.Layout.NextWord.Show", w);
                sj_evt.unbind("AS.Layout.NextWord.Hide", tt);
              }
            );
          },
          [t]
        ),
        preact.h(
          i.InstForm,
          {
            className: "sb_form hassbi "
              .concat(t ? "as_show" : "", " ")
              .concat(ft ? "as_nextword" : "", " ")
              .concat(et ? "icons_max_targ" : ""),
            id: "sb_form",
            action: ut,
            nodeName: "Searchform",
            parentNodeName: "Searchbox",
          },
          !!a && preact.h(c, null),
          preact.h(p, { updateContainerBorder: n, isAutoSuggestActive: t }),
          preact.h(rt, null),
          preact.h(b, null),
          preact.h(k, null),
          preact.h(y, null),
          preact.h(d, null),
          !a && preact.h(c, null),
          preact.h(nt, null),
          preact.h(it, null),
          preact.h(g, null)
        )
      );
    },
    b = function () {
      var n = preactHooks.useContext(e.ModelContext).model,
        t = n.Features,
        o = n.LocStrings,
        i = {
          isPartner: !1,
          loggingName: "speech",
          textareaId: "#sb_form_q",
          handleText: r.updateText,
          iconInit: r.iconInit,
          clientbuild: "bing",
          allowReadout: !1,
          isAjaxPage: !1,
          preloadMic: n.EnablePreloadMic,
          showMicOnSBClick: n.EnableShowMicOnSBClick,
          micTT: o.LOC_MICROPHONE_TOOLTIP,
        },
        f;
      if (n.EnablePreloadMic) {
        if (t.MicEnabled == "true")
          return preact.h(
            "div",
            { className: "mic_cont icon" },
            preact.h(s.Speech, { props: i })
          );
      } else if (
        ((f = function () {
          var n = _d.getElementsByClassName("b_icon")[0];
          n != null && n.click();
        }),
        t.MicEnabled == "true" && u.useClientSideRender())
      )
        return preact.h(
          "div",
          {
            className: "mic_cont icon",
            onClick: n.IconsMaxTarg ? f : undefined,
          },
          preact.h(s.Speech, { props: i })
        );
    },
    k = function () {
      var f = preactHooks.useContext(e.ModelContext),
        t = f.model,
        c = f.dimmer,
        l = t.InPrivate,
        a = t.IsMobile,
        v = t.SearchByImageEnabled,
        s,
        h;
      if (!l && v) {
        var r = preactHooks.useRef(null),
          o = preactHooks.useState("none"),
          y = o[0],
          p = o[1],
          w = typeof _G != "undefined" && _G.IG,
          b = "camera icon ".concat(a && c ? "hidden" : ""),
          n = u.useFetch(
            "/images/sbi?mmasync=1&ptn=Homepage&IID=SBI&IG=".concat(w),
            "dom"
          );
        return (
          preactHooks.useEffect(
            function () {
              if (n && r.current) {
                var t = n.querySelector("#sbiarea");
                t &&
                  (r.current.appendChild(t),
                  Array.prototype.slice
                    .call(n.querySelectorAll("style"))
                    .forEach(function (n) {
                      document.head.appendChild(n);
                    }),
                  Array.prototype.slice
                    .call(n.querySelectorAll("script"))
                    .forEach(function (n) {
                      var t = document.createElement("script");
                      n.src
                        ? t.src
                        : ((t.innerHTML = n.innerHTML),
                          t.setAttribute("data-bing-script", "1"));
                      document.body.appendChild(t);
                    }),
                  p("block"));
              }
            },
            [n]
          ),
          (s = function (n) {
            var t = _ge("sb_sbip");
            t != null && (sj_evt.fire("sbidlg.show", t), n.stopPropagation());
          }),
          (h = preact.h("div", {
            className: b,
            style: { display: y },
            ref: r,
            onClick: t.IconsMaxTarg ? s : undefined,
          })),
          preact.h(
            i.Region,
            { nodeName: "sbi", parentNodeName: "Searchbox", insertId: "SBI" },
            u.useClientSideRender() ? h : null
          )
        );
      }
    },
    d = function () {
      var i = preactHooks.useContext(e.ModelContext),
        s = i.model,
        h = i.dimmer,
        n = preactHooks.useContext(t.SearchContext),
        c = n.hasText,
        r = n.updateHasText,
        u = n.updateSearchText,
        l = s.IsMobile,
        f,
        o;
      if (l)
        return (
          (f = function (n) {
            (n.key == "Enter" || n.which == 13) && (r(!1), u(""));
          }),
          (o = "clear icon ".concat(h && c ? "show" : "hidden")),
          preact.h(
            "div",
            {
              className: o,
              role: "button",
              "aria-label": "Clear",
              onClick: function () {
                r(!1);
                u("");
              },
              onKeyUp: f,
              tabIndex: 0,
            },
            "×"
          )
        );
    },
    g = function () {
      var n = preactHooks.useContext(e.ModelContext).model,
        t = n.FormCode;
      return preact.h(
        preact.Fragment,
        null,
        preact.h(i.InstLink, {
          id: "sb_hidden",
          nodeName: "sb_hidden",
          parentNodeName: "Searchbox",
        }),
        preact.h("input", { type: "hidden", value: t, name: "form" })
      );
    },
    nt = function () {
      return preact.h(
        "div",
        {
          id: "sw_as",
          style: "display: block; margin-left: 0px; margin-right: -10px;",
        },
        preact.h("div", {
          className: "sa_as",
          "data-priority": "2",
          style: "display: none;",
        })
      );
    },
    tt = function () {
      var n = preactHooks.useContext(e.ModelContext),
        t = n.dimmer,
        i = n.updateDimmer;
      return preact.h("div", {
        className: "dimmer ".concat(t ? "dim" : ""),
        onClick: i.bind(null, !1),
      });
    },
    it = function () {
      var n = preactHooks.useContext(e.ModelContext).model,
        t = n.InPrivate;
      return t
        ? preact.h(
            "div",
            { className: "below_sbox" },
            preact.h(a, null),
            preact.h(l, null)
          )
        : preact.h(
            "div",
            { className: "below_sbox" },
            preact.h(a, null),
            preact.h(l, null),
            preact.h(f.GiveWithBing, null),
            preact.h(o.NewTabMostVisitedSites, null)
          );
    },
    l = function () {
      var n = preactHooks.useContext(e.ModelContext).model,
        t = n.SupportedLanguages,
        r = n.LocStrings;
      if (t.length > 2)
        return preact.h(
          i.Region,
          { nodeName: "LanguageSwitcher", parentNodeName: "Core" },
          preact.h(
            "div",
            { class: "switch_lang" },
            preact.h("span", null, r.LOC_HOMEPAGE_LANGUAGESWITCH_TITLETEXT),
            t.map(function (t) {
              return preact.h(
                i.InstLink,
                {
                  href: t.Url + "&cc=" + n.Region,
                  nodeName: "Language",
                  parentNodeName: "LanguageSwitcher",
                  "aria-label": t.EnglishName,
                },
                t.Name
              );
            })
          )
        );
    },
    a = function () {
      var t = preactHooks.useContext(e.ModelContext),
        r = t.scrollPosition,
        u = t.model,
        n = u.SymbolOfSolidarity;
      if (n && n.Message) {
        var f = n.Message,
          o = n.Url,
          s = n.UrlText;
        if (!r || r.top == 0)
          return preact.h(
            "div",
            { class: "sos" },
            preact.h(
              "span",
              { class: "text" },
              preact.h("span", null, f),
              preact.h("span", null, " "),
              preact.h(
                i.InstLink,
                { href: o, nodeName: "SOS", parentNodeName: "Searchbox" },
                s
              )
            )
          );
      }
    },
    rt = function () {
      var n = preactHooks.useContext(e.ModelContext).model,
        t = n.InPrivate,
        i = n.LocStrings;
      if (t)
        return preact.h(
          "div",
          { className: "sb_bpr" },
          preact.h("span", null, i.InPrivate)
        );
    },
    v = function () {
      var n;
      return typeof _ge != "undefined"
        ? (n = _ge("sb_form_q")) === null || n === void 0
          ? void 0
          : n.value
        : "";
    };
});
define("Components/Core/Msb/MsbContextPreact", [
  "require",
  "exports",
], function (n, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MsbContextProvider = void 0;
  t.MsbContextProvider = preact.createContext(null);
});
define("Components/Core/Msb/Modules/MsbLogoModule", [
  "require",
  "exports",
  "Components/Core/Msb/MsbContextPreact",
  "InstrumentPreact",
], function (n, t, i, r) {
  "use strict";
  var u, f, e;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MsbLogo = void 0;
  u = function () {
    var t,
      u,
      e,
      n = preactHooks.useContext(i.MsbContextProvider).tenantConfig;
    return preact.h(
      r.Region,
      { nodeName: "MsbLogoModule", parentNodeName: "MsbWrapper" },
      preact.h(
        "div",
        { class: "msbLogo" },
        preact.h(f, {
          icon:
            (t = n === null || n === void 0 ? void 0 : n.iconLarge) !== null &&
            t !== void 0
              ? t
              : null,
          title:
            (u = n === null || n === void 0 ? void 0 : n.tenantDisplayName) !==
              null && u !== void 0
              ? u
              : null,
          theme:
            (e = n === null || n === void 0 ? void 0 : n.theme) !== null &&
            e !== void 0
              ? e
              : "#000",
        })
      )
    );
  };
  t.MsbLogo = u;
  f = function (n) {
    var i = n.icon,
      t = n.title,
      f = n.theme,
      u,
      r;
    return i
      ? ((u = "".concat(e(i), ";base64,").concat(i)),
        (r = t !== null && t !== void 0 ? t : ""),
        preactHooks.useEffect(function () {
          Log.Log("CompanyLogo", "HP", "ImageDisplayed");
        }, []),
        preact.h("img", {
          class: "msbLogoImg",
          src: u,
          title: r,
          "aria-label": r,
        }))
      : (preactHooks.useEffect(function () {
          Log.Log("CompanyLogo", "HP", "TextDisplayed");
        }, []),
        preact.h(
          "span",
          { class: "msbTextLogo", style: "color: ".concat(f) },
          t !== null && t !== void 0 ? t : ""
        ));
  };
  e = function (n) {
    var t = n && n.length > 0 ? n.charAt(0) : "i";
    switch (t) {
      case "/":
        return "data:image/jpeg";
      case "P":
        return "data:image/svg+xml";
      default:
        return "data:image/png";
    }
  };
});
define("Components/Core/Msb/PrivacyIcon", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/UtilsPreact",
], function (n, t, i, r) {
  "use strict";
  var u, f;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.PrivacyIcon = void 0;
  u = function (n) {
    var u = n.message,
      e = n.learnMoreTitle,
      t = n.className,
      o = n.solidLock,
      s = preactHooks.useContext(i.ModelContext).model,
      h = s.LocStrings,
      c = preactHooks.useCallback(r.AccessiblePopup, []);
    return preact.h(
      "div",
      {
        class: "calloutIconContainer ".concat(
          t !== null && t !== void 0 ? t : ""
        ),
      },
      preact.h(
        "button",
        {
          class: "button buttonWithInfoBubble",
          "aria-label": u,
          "aria-haspopup": "true",
          ref: c,
        },
        preact.h(
          "div",
          { class: "iconContainer" },
          preact.h(f, { solidLock: o })
        ),
        preact.h(
          "div",
          { class: "infoBubbleContainer" },
          preact.h("div", { class: "lockOverlayText" }, u),
          preact.h(
            "a",
            {
              class: "learnMoreLink link",
              role: "link",
              target: "_blank",
              href: "https://go.microsoft.com/fwlink/?linkid=2054140",
              "aria-label": h.LOC_MSB_LEARN_MORE_FULL_MESSAGE,
            },
            e
          )
        )
      )
    );
  };
  t.PrivacyIcon = u;
  f = function (n) {
    var t = n.solidLock;
    return t
      ? preact.h(
          "svg",
          {
            class: "lock",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 2048 2048",
          },
          preact.h("path", {
            d: "M1792 896v1152H256V896h256V522q0-108 39-203t108-166T821 41t203-41q109 0 202 41t163 112 108 166 39 203v374h256zm-1152 0h768V522q0-81-29-152t-80-126-122-85-153-31q-82 0-152 31t-122 85-81 125-29 153v374z",
          })
        )
      : preact.h(
          "svg",
          {
            class: "lock",
            version: "1.1",
            viewBox: "0 0 14.552 14.817",
            xmlns: "http://www.w3.org/2000/svg",
          },
          preact.h(
            "g",
            { transform: "translate(-20.694 -19.05)" },
            preact.h("path", {
              d: "m24.928 25.665h-1.8521v7.9375h10.583v-7.9375h-1.8521c0-1.5762 0.24252-3.3875-0.75517-4.7339-1.4568-1.966-4.6333-1.64-5.7385 0.50467-0.63669 1.2355-0.38544 2.8833-0.38544 4.2292m6.0854 0h-5.2917c0-1.2272-0.25292-2.8128 0.38544-3.9189 0.97174-1.6838 3.3966-1.6173 4.4146-0.03532 0.7198 1.1185 0.4916 2.6878 0.4916 3.9542m1.5875 1.0583v6.0854h-8.7312v-6.0854z",
            })
          )
        );
  };
});
define("Components/Core/Msb/MsbSharedComponents", [
  "require",
  "exports",
  "Components/Core/Msb/PrivacyIcon",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
], function (n, t, i, r, u) {
  "use strict";
  var f, e, o;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.showMsbModule = t.ProductivityHeader = t.ProductivityButton = void 0;
  f = function (n) {
    var i = n.href,
      t = n.displayText;
    return preact.h(
      u.InstLinkClient,
      {
        className: "productivityCardButton",
        href: i,
        "aria-label": t,
        nodeName: "ProductivityCardButton",
        parentNodeName: "MsbDoormatModule",
        loggingData: ["MsbDoormat"],
      },
      preact.h(
        "span",
        { class: "flexbox-container bookmark" },
        preact.h(
          "svg",
          {
            class: "bookmark-svg",
            version: "1.1",
            viewBox: "0 0 30.162 37.571",
            xmlns: "http://www.w3.org/2000/svg",
          },
          preact.h(
            "g",
            { transform: "translate(-90.752 -72.685)" },
            preact.h("path", {
              d: "m97.896 75.066v4.2333h-4.2333v29.104c2.909-1.2787 7.3767-4.9181 10.583-4.7601 3.3033 0.16272 7.3034 3.4346 10.319 4.7601v-6.0854l4.2333 1.8521v-29.104h-20.902m19.05 2.1167v23.548c-2.8906-0.73052-2.3812-3.0689-2.3812-5.5563v-15.875h-14.817v-2.1167h17.198m-4.2333 4.2333v23.548l-8.4667-3.5838-8.7312 3.5838v-23.548z",
              fill: "#021891",
            })
          )
        ),
        preact.h("span", { class: "actionButtonLink" }, t)
      )
    );
  };
  t.ProductivityButton = f;
  e = function (n) {
    var t = n.title,
      r = n.hideLock,
      u = n.privacyMessage,
      f = n.learnMoreTitle;
    return preact.h(
      "div",
      { class: "productivityCardHeader clearFix" },
      preact.h(
        "div",
        { class: "productivityCardMiniTitle" },
        preact.h("h2", null, t)
      ),
      preact.h(
        "div",
        { class: "calloutIcon ".concat(r ? "hide" : "") },
        preact.h(i.PrivacyIcon, { message: u, learnMoreTitle: f })
      )
    );
  };
  t.ProductivityHeader = e;
  o = function () {
    var t,
      i,
      f,
      e,
      o = preactHooks.useContext(r.ModelContext),
      v = o.model,
      p = o.isMsbReady,
      w = o.isMsbOptOut;
    if (w || !p) {
      s();
      return;
    }
    a();
    var c = document.querySelector(".msbModule"),
      l = document.querySelector(".msbModule .module"),
      n = document.querySelector(".hpapp"),
      b = document.querySelector(".nav a.down");
    (t = c === null || c === void 0 ? void 0 : c.classList) === null ||
    t === void 0
      ? void 0
      : t.remove("hide");
    (i = l === null || l === void 0 ? void 0 : l.classList) === null ||
    i === void 0
      ? void 0
      : i.add("show");
    v.HasMSBTOB &&
      ((f = n === null || n === void 0 ? void 0 : n.classList) === null ||
      f === void 0
        ? void 0
        : f.add("feed"));
    (e = n === null || n === void 0 ? void 0 : n.classList) === null ||
    e === void 0
      ? void 0
      : e.add("msb");
    v.HasMSBTOB || (y(), b.classList.add("msbFix"));
    h();
    u.logShow("MsbModule");
  };
  t.showMsbModule = o;
  var s = function () {
      var n,
        t,
        i,
        r,
        f = document.querySelector(".msbModule"),
        e = document.querySelector(".msbModule .module"),
        o = document.querySelector(".hpapp"),
        s = document.querySelector(".nav a.down");
      (n = f === null || f === void 0 ? void 0 : f.classList) === null ||
      n === void 0
        ? void 0
        : n.add("hide");
      (t = e === null || e === void 0 ? void 0 : e.classList) === null ||
      t === void 0
        ? void 0
        : t.remove("show");
      (i = o === null || o === void 0 ? void 0 : o.classList) === null ||
      i === void 0
        ? void 0
        : i.remove("msb");
      (r = s === null || s === void 0 ? void 0 : s.classList) === null ||
      r === void 0
        ? void 0
        : r.remove("msbFix");
      l();
      h();
      u.logHide("MsbModule");
    },
    h = function () {
      var n = preactHooks.useContext(r.ModelContext),
        t = n.clientSettings,
        i = n.model,
        u = n.isMsbReady,
        f = n.updateIsMsbPeekScroll,
        e = t.Pn,
        o = e.St;
      if (i.IsBingAtWorkEnabled && u) {
        f(!0);
        switch (o) {
          case 0:
            window === null || window === void 0
              ? void 0
              : window.scrollTo(0, 470);
            break;
          case 2:
            window === null || window === void 0
              ? void 0
              : window.scrollTo(0, 0);
        }
      }
    },
    a = function () {
      var u,
        f = preactHooks.useContext(r.ModelContext),
        e = f.hasClonedToggle,
        o = f.updateHasClonedToggle,
        i,
        n,
        t;
      e ||
        ((i = document.getElementById("bfb_workCont")),
        (n = document.querySelector(".msbModule .msbHeader .optOutWrapper")),
        i &&
          n &&
          n.insertBefore &&
          (n.insertBefore(i, n.firstChild),
          (u = i.classList) === null || u === void 0
            ? void 0
            : u.remove("hide"),
          (t = document.getElementById("bfw_workToggleButton")),
          t &&
            t.addEventListener &&
            (t.addEventListener("click", c), t.addEventListener("keypress", v)),
          o(!0)));
    },
    c = function () {
      Log.Log("Click", "WorkToggle", "ClickWorkToggle");
      sj_cook.set("BFBUSR", "BFBHP", "0", !0, "/");
      s();
    },
    v = function (n) {
      n.key === "Enter" && c();
    },
    y = function () {
      var t,
        i,
        f = preactHooks.useContext(r.ModelContext),
        u = f.model,
        e = f.isTobDisabledOnClient,
        o = u.LocStrings,
        s = u.IsTobDisabled,
        h = u.IsEdu,
        n;
      if (h && (s || e)) {
        l();
        return;
      }
      n = document.querySelector(".vert_tob_title");
      n &&
        ((t = n.classList) === null || t === void 0 ? void 0 : t.remove("hide"),
        (i = n.classList) === null || i === void 0 ? void 0 : i.add("show"),
        (n.textContent = o.LOC_HOMEPAGE_VERTICAL_SCROLL_TOB));
    },
    l = function () {
      var t,
        i,
        n = document.querySelector(".vert_tob_title");
      n &&
        ((t = n.classList) === null || t === void 0 ? void 0 : t.remove("show"),
        (i = n.classList) === null || i === void 0 ? void 0 : i.add("hide"),
        (n.textContent = ""));
    };
});
define("Components/Core/Msb/Modules/ProductivityModules/MsbProductivityCardFooter", [
  "require",
  "exports",
  "InstrumentPreact",
], function (n, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MsbProductivityCardFooter = void 0;
  var r = function (n) {
    var t = n.link,
      r = n.displayTxt,
      u = n.ariaText;
    return preact.h(
      "div",
      { class: "productivityCardFooter" },
      preact.h(
        i.InstLink,
        {
          href: t,
          class: "seeMoreLink",
          role: "link",
          nodeName: "MsbProductivityCardFooter_click",
          parentNodeName: "MsbProductivityModule",
          target: "_blank",
          "aria-label": u,
        },
        r
      )
    );
  };
  t.MsbProductivityCardFooter = r;
});
define("Components/Core/Msb/Modules/ProductivityModules/MsbDefaultCard", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/Msb/Modules/ProductivityModules/MsbProductivityCardFooter",
], function (n, t, i, r, u) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MsbDefaultCard = void 0;
  var f = function (n) {
    var f = n.svgIcon,
      e = n.cardContent,
      o = n.link,
      s = n.linkTitle,
      t = n.isLoading,
      h = preactHooks.useContext(r.ModelContext).model,
      c = h.LocStrings,
      l = t ? c.LOC_MSB_LOAD : e,
      a = t ? "defaultCard defaultLoad" : "defaultCard",
      v = t
        ? null
        : preact.h(u.MsbProductivityCardFooter, { link: o, displayTxt: s });
    return preact.h(
      i.Region,
      { nodeName: "MsbDefaultCardModule" },
      preact.h(
        "div",
        { class: "flexbox-child" },
        preact.h(
          "div",
          { class: "flexbox-child-item" },
          preact.h(
            "div",
            { class: a },
            preact.h("div", null, " ", f, " "),
            preact.h("div", { class: "title defaultMsg" }, " ", l, " ")
          ),
          v
        )
      )
    );
  };
  t.MsbDefaultCard = f;
});
define("Components/Core/Msb/Modules/ProductivityModules/MsbFilesModule", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/UtilsPreact",
  "Components/Core/Msb/MsbSharedComponents",
  "InstrumentPreact",
  "Components/Core/Msb/Modules/ProductivityModules/MsbDefaultCard",
  "Components/Core/Msb/Modules/ProductivityModules/MsbProductivityCardFooter",
], function (n, t, i, r, u, f, e, o) {
  "use strict";
  function v(n) {
    var tt = preactHooks.useContext(i.ModelContext).model,
      t = tt.LocStrings,
      y = new Date(Date.now()),
      nt = new Date(n * c),
      u = y.getTime() - nt.getTime(),
      v,
      f,
      e,
      o,
      h;
    return u < 0
      ? u <= d
        ? ""
        : t.LOC_MSB_FILE_CARD_JUST_NOW
      : ((v = u / p), (f = u / l), v > w)
      ? g(nt, y)
      : f >= b
      ? ((e = Math.round(v)), e > 1)
        ? r.formatString(
            t.LOC_MSB_FILE_CARD_DAYS_AGO,
            e === null || e === void 0 ? void 0 : e.toString()
          )
        : t.LOC_MSB_FILE_CARD_ONE_DAY_AGO
      : f >= a
      ? ((o = Math.round(f)), o > 1)
        ? r.formatString(
            t.LOC_MSB_FILE_CARD_HOURS_AGO,
            o === null || o === void 0 ? void 0 : o.toString()
          )
        : t.LOC_MSB_FILE_CARD_ONE_HOUR_AGO
      : f >= k
      ? t.LOC_MSB_FILE_CARD_ONE_HOUR_AGO
      : ((h = Math.round(u / s)), h <= a)
      ? t.LOC_MSB_FILE_CARD_JUST_NOW
      : r.formatString(
          t.LOC_MSB_FILE_CARD_MINS_AGO,
          h === null || h === void 0 ? void 0 : h.toString()
        );
  }
  var h;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.getModifiedTimeDescription = t.Files = void 0;
  h = function (n) {
    var s = n.filesState,
      h = n.isLoading,
      c = preactHooks.useContext(i.ModelContext).model,
      t = c.LocStrings;
    return s == null || s.length == 0
      ? preact.h(e.MsbDefaultCard, {
          svgIcon: tt(),
          cardContent: t.LOC_MSB_FILE_CARD_NO_FILE,
          link: "https://www.office.com/launch/word",
          linkTitle: t.LOC_MSB_FILE_CARD_CREATE_NEW,
          isLoading: h,
        })
      : preact.h(
          f.Region,
          {
            nodeName: "MsbFilesModule",
            parentNodeName: "MsbProductivityModule",
          },
          preact.h(
            "div",
            { class: "flexbox-child" },
            preact.h(
              "div",
              { class: "flexbox-child-item fileCard no-margin" },
              preact.h(
                "div",
                null,
                preact.h(u.ProductivityHeader, {
                  title: t.LOC_MSB_FILE_CARD_TITLE,
                  privacyMessage: t.LOC_MSB_FILE_CARD_PRIVACY,
                  learnMoreTitle: t.LOC_MSB_LEARN_MORE,
                }),
                s &&
                  s.slice(0, 3).map(function (n) {
                    var i;
                    return preact.h(
                      "div",
                      { class: "productivityCard" },
                      preact.h(
                        "div",
                        null,
                        preact.h(
                          "div",
                          { class: "fileCardContent" },
                          preact.h(
                            f.InstLinkClient,
                            {
                              href: n === null || n === void 0 ? void 0 : n.url,
                              nodeName: "MsbFilesModule_click",
                              parentNodeName: "MsbFilesModule",
                              loggingData: ["MsbFiles"],
                              target: "_blank",
                            },
                            preact.h(
                              "div",
                              { "aria-hidden": "true", class: "fileIcon" },
                              preact.h("img", {
                                src: y(
                                  n === null || n === void 0
                                    ? void 0
                                    : n.fileType
                                ),
                                role: "presentation",
                              })
                            ),
                            preact.h(
                              "div",
                              { class: "textPairInfo" },
                              preact.h(
                                "div",
                                { class: "title" },
                                n === null || n === void 0 ? void 0 : n.title,
                                " "
                              ),
                              preact.h(
                                "div",
                                { class: "subTitle" },
                                r.formatString(
                                  t.LOC_MSB_FILE_CARD_LAST_MODIFIED,
                                  nt(
                                    (i =
                                      n === null || n === void 0
                                        ? void 0
                                        : n.lastModifiedBy) === null ||
                                      i === void 0
                                      ? void 0
                                      : i.fullName
                                  ),
                                  v(
                                    n === null || n === void 0
                                      ? void 0
                                      : n.lastModifiedTime
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  }),
                preact.h(o.MsbProductivityCardFooter, {
                  link:
                    "/work/search?form=ENTPSR&q=" +
                    t.LOC_MSB_DOORMAT_CARD_BOOKMARK_FILES,
                  displayTxt: t.LOC_MSB_SEE_MORE,
                  ariaText: r.formatString(
                    t.LOC_MSB_SEE_MORE_PARAM,
                    t.LOC_MSB_DOORMAT_CARD_BOOKMARK_FILES
                  ),
                })
              )
            )
          )
        );
  };
  t.Files = h;
  var y = function (n) {
      var t = [
        { key: "access", value: "accdb" },
        { key: "excel", value: "xlsx" },
        { key: "infopath", value: "xsn" },
        { key: "onenote", value: "one" },
        { key: "powerpoint", value: "pptx" },
        { key: "project", value: "mpp" },
        { key: "video", value: "video" },
        { key: "stream", value: "stream" },
        { key: "sway", value: "sway" },
        { key: "visio", value: "vstx" },
        { key: "word", value: "docx" },
        { key: "sharepoint", value: "spo" },
        { key: "folder", value: "folder" },
      ].filter(function (t) {
        return t.key == (n === null || n === void 0 ? void 0 : n.toLowerCase());
      });
      return t && t.length > 0
        ? "https://spoprod-a.akamaihd.net/files/fabric/assets/item-types/32/".concat(
            t[0].value,
            ".svg"
          )
        : "https://spoprod-a.akamaihd.net/files/fabric/assets/item-types/32/genericfile.svg";
    },
    c = 1e3,
    s = c * 60,
    l = s * 60,
    p = l * 24,
    w = 7,
    b = 24,
    a = 2,
    k = 0.8,
    d = -10 * s;
  t.getModifiedTimeDescription = v;
  var g = function (n, t) {
      var u = preactHooks.useContext(i.ModelContext).model,
        r = u.Market,
        f = n.toLocaleDateString(r, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        e = n.toLocaleDateString(r, { month: "long", day: "numeric" });
      return t.getFullYear() === n.getFullYear() ? e : f;
    },
    nt = function (n) {
      return n && n.indexOf(" ") ? n.split(" ")[0] : n;
    },
    tt = function () {
      return preact.h(
        "svg",
        {
          className: "defaultIcon",
          viewBox: "0 0 80 80",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24.2088 6.81555H70.5075C71.5959 6.81555 72.4788 7.69802 72.4788 8.78682V25.7587V73.4835C72.4788 74.8732 71.3521 76 69.9623 76H22.8403C21.5976 76 20.5907 74.9922 20.5907 73.7495V10.4341C20.5907 8.43554 22.2107 6.81555 24.2088 6.81555Z",
          fill: "#9BCAD6",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M30.1968 21.9965H63.8801C64.6931 21.9965 65.3522 21.1874 65.3522 20.1898C65.3522 19.1918 64.6931 18.3827 63.8801 18.3827H30.1968C29.3838 18.3827 28.7247 19.1918 28.7247 20.1898C28.7247 21.1874 29.3838 21.9965 30.1968 21.9965Z",
          fill: "#E9F6FA",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M30.1968 32.1138H63.8801C64.6931 32.1138 65.3522 31.3051 65.3522 30.3071C65.3522 29.3091 64.6931 28.5 63.8801 28.5H30.1968C29.3838 28.5 28.7247 29.3091 28.7247 30.3071C28.7247 31.3051 29.3838 32.1138 30.1968 32.1138Z",
          fill: "#E9F6FA",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M30.1968 42.2317H63.8801C64.6931 42.2317 65.3522 41.4226 65.3522 40.4246C65.3522 39.427 64.6931 38.6174 63.8801 38.6174H30.1968C29.3838 38.6174 28.7247 39.427 28.7247 40.4246C28.7247 41.4226 29.3838 42.2317 30.1968 42.2317Z",
          fill: "#E9F6FA",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M30.1968 52.3491H63.8801C64.6931 52.3491 65.3522 51.5404 65.3522 50.5424C65.3522 49.5444 64.6931 48.7352 63.8801 48.7352H30.1968C29.3838 48.7352 28.7247 49.5444 28.7247 50.5424C28.7247 51.5404 29.3838 52.3491 30.1968 52.3491Z",
          fill: "#E9F6FA",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M30.1968 62.4666H63.8801C64.6931 62.4666 65.3522 61.6579 65.3522 60.6599C65.3522 59.6619 64.6931 58.8528 63.8801 58.8528H30.1968C29.3838 58.8528 28.7247 59.6619 28.7247 60.6599C28.7247 61.6579 29.3838 62.4666 30.1968 62.4666Z",
          fill: "#E9F6FA",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.10811 0.226504C2.10811 0.226504 44.5884 -0.114972 49.8789 0.0406322C51.0022 0.0738845 51.8881 0.994718 51.8881 2.11848V67.5846C51.8881 68.5937 51.0709 69.4109 50.0622 69.4109H1.78667C0.800187 69.4109 0 68.6107 0 67.6238V2.33504C0 1.17036 0.943854 0.226504 2.10811 0.226504Z",
          fill: "#D3EDF1",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M26.1926 7.88745H43.0502C44.1787 7.88745 45.0936 8.87948 45.0936 10.1034V29.8979C45.0936 31.1219 44.1787 32.1139 43.0502 32.1139H26.1926C25.0642 32.1139 24.1493 31.1219 24.1493 29.8979V10.1034C24.1493 8.87948 25.0642 7.88745 26.1926 7.88745Z",
          fill: "#A3CFD8",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.13171 32.1138H17.8338C18.712 32.1138 19.4236 31.3051 19.4236 30.3071C19.4236 29.3091 18.712 28.5 17.8338 28.5H7.13171C6.25351 28.5 5.54199 29.3091 5.54199 30.3071C5.54199 31.3051 6.25351 32.1138 7.13171 32.1138Z",
          fill: "#A3CFD8",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.13171 11.8789H17.8338C18.712 11.8789 19.4236 11.0701 19.4236 10.0722C19.4236 9.07415 18.712 8.26501 17.8338 8.26501H7.13171C6.25351 8.26501 5.54199 9.07415 5.54199 10.0722C5.54199 11.0701 6.25351 11.8789 7.13171 11.8789Z",
          fill: "#A3CFD8",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.13171 21.9965H17.8338C18.712 21.9965 19.4236 21.1874 19.4236 20.1898C19.4236 19.1918 18.712 18.3827 17.8338 18.3827H7.13171C6.25351 18.3827 5.54199 19.1918 5.54199 20.1898C5.54199 21.1874 6.25351 21.9965 7.13171 21.9965Z",
          fill: "#A3CFD8",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.13171 42.2317H43.5038C44.382 42.2317 45.0935 41.4226 45.0935 40.4246C45.0935 39.427 44.382 38.6174 43.5038 38.6174H7.13171C6.25351 38.6174 5.54199 39.427 5.54199 40.4246C5.54199 41.4226 6.25351 42.2317 7.13171 42.2317Z",
          fill: "#A3CFD8",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.13171 52.3491H43.5038C44.382 52.3491 45.0935 51.5404 45.0935 50.5424C45.0935 49.5444 44.382 48.7352 43.5038 48.7352H7.13171C6.25351 48.7352 5.54199 49.5444 5.54199 50.5424C5.54199 51.5404 6.25351 52.3491 7.13171 52.3491Z",
          fill: "#A3CFD8",
        }),
        preact.h("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.13171 62.4666H43.5038C44.382 62.4666 45.0935 61.6579 45.0935 60.6599C45.0935 59.6619 44.382 58.8528 43.5038 58.8528H7.13171C6.25351 58.8528 5.54199 59.6619 5.54199 60.6599C5.54199 61.6579 6.25351 62.4666 7.13171 62.4666Z",
          fill: "#A3CFD8",
        })
      );
    };
});
define("Components/Core/Msb/Modules/ProductivityModules/MsbCalendarModule", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/UtilsPreact",
  "Components/Core/Msb/MsbSharedComponents",
  "Components/Core/Msb/Modules/ProductivityModules/MsbDefaultCard",
  "Components/Core/Msb/Modules/ProductivityModules/MsbProductivityCardFooter",
  "InstrumentPreact",
], function (n, t, i, r, u, f, e, o) {
  "use strict";
  var h, l;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.GetCalenderSvg = t.GetCalendarMeetings = t.Calendar = void 0;
  h = function (n) {
    var h = n.calendarState,
      l = n.isLoading,
      v = preactHooks.useContext(i.ModelContext).model,
      s = v.LocStrings,
      y = v.IsEdu;
    return l || h == null || h.length == 0
      ? preact.h(f.MsbDefaultCard, {
          svgIcon: t.GetCalenderSvg(),
          cardContent: s.LOC_MSB_CALENDAR_CARD_NO_MEETING,
          link: "https://outlook.office.com/owa/?path=/calendar/action/compose",
          linkTitle: s.LOC_MSB_CALENDAR_CARD_BOOK_NEW,
          isLoading: l,
        })
      : preact.h(
          o.Region,
          {
            nodeName: "MsbCalendarModule",
            parentNodeName: "MsbProductivityModule",
          },
          preact.h(
            "div",
            { class: "flexbox-child" },
            preact.h(
              "div",
              { class: "flexbox-child-item calendarCard" },
              preact.h(
                "div",
                { class: "productivityCard" },
                preact.h(
                  "div",
                  { class: "calendarCardContainer" },
                  preact.h(u.ProductivityHeader, {
                    title: s.LOC_MSB_CALENDAR_CARD_TITLE,
                    privacyMessage: s.LOC_MSB_CALENDAR_CARD_PRIVACY,
                    learnMoreTitle: s.LOC_MSB_LEARN_MORE,
                  }),
                  h &&
                    h.slice(0, 2).map(function (n) {
                      var t;
                      return preact.h(
                        "div",
                        { class: "calendarCardContent" },
                        preact.h(
                          "div",
                          { class: "iconTextPair" },
                          preact.h(
                            o.InstLinkClient,
                            {
                              href:
                                "https://outlook.office.com/calendar/deeplink/read/" +
                                encodeURIComponent(
                                  n === null || n === void 0 ? void 0 : n.id
                                ),
                              nodeName: "MsbCalendarModule_click",
                              parentNodeName: "MsbCalendarModule",
                              loggingData: ["MsbCalendar"],
                              target: "_blank",
                            },
                            preact.h(
                              "svg",
                              {
                                class: "calendar",
                                version: "1.1",
                                viewBox: "0 0 26.458 25.929",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                              preact.h(
                                "g",
                                { transform: "translate(-56.83 -42.731)" },
                                preact.h("path", {
                                  d: "m62.121 44.583v1.5875h-4.7625v22.225h25.135v-22.225h-4.7625v-1.5875h-1.3229v1.5875h-12.965v-1.5875h-1.3229m0 3.175v1.5875h1.3229v-1.5875h12.965v1.5875h1.3229v-1.5875h3.4396v3.175h-22.49v-3.175h3.4396m19.05 4.7625v14.288h-22.49v-14.288h22.49m-14.288 1.5875v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m-14.288 3.175v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m-14.288 3.175v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m-14.288 3.175v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875h-1.3229m4.7625 0v1.5875h1.3229v-1.5875z",
                                  fill: "#656565",
                                })
                              )
                            ),
                            preact.h(
                              "div",
                              { class: "textPairInfo" },
                              preact.h(
                                "div",
                                { class: "title" },
                                n.meetingSubject,
                                " "
                              ),
                              preact.h(
                                "div",
                                { class: "subTitle" },
                                preact.h(
                                  "span",
                                  { class: "startTime" },
                                  c(n.meetingStart)
                                ),
                                " - ",
                                preact.h(
                                  "span",
                                  { class: "endTime" },
                                  " ",
                                  c(n.meetingEnd)
                                ),
                                preact.h(
                                  "span",
                                  { class: "location" },
                                  n.meetingLocation
                                    ? "· ".concat(n.meetingLocation)
                                    : "",
                                  " "
                                )
                              )
                            )
                          ),
                          preact.h(
                            "div",
                            { class: "calendarAttendees" },
                            preact.h(
                              "div",
                              { class: "calendarAttendeeList" },
                              n.requiredAttendees &&
                                n.requiredAttendees
                                  .concat(
                                    (t = n.optionalAttendees) !== null &&
                                      t !== void 0
                                      ? t
                                      : []
                                  )
                                  .slice(0, 6)
                                  .map(function (n) {
                                    return preact.h(a, { person: n });
                                  })
                            )
                          )
                        )
                      );
                    }),
                  preact.h(e.MsbProductivityCardFooter, {
                    link:
                      "/work/search?form=ENTPSR&q=" +
                      s.LOC_MSB_DOORMAT_CARD_BOOKMARK_CALENDAR,
                    displayTxt: s.LOC_MSB_SEE_MORE,
                    ariaText: r.formatString(
                      s.LOC_MSB_SEE_MORE_PARAM,
                      s.LOC_MSB_DOORMAT_CARD_BOOKMARK_CALENDAR
                    ),
                  })
                )
              )
            )
          )
        );
  };
  t.Calendar = h;
  var a = function (n) {
      var u,
        t = n.person,
        f = preactHooks.useCallback(r.AccessiblePopup, []),
        e = preactHooks.useContext(i.ModelContext).model,
        s = e.IsEdu,
        h = s ? "school" : "work";
      return preact.h(
        "div",
        { class: "circle circle-border", ref: f },
        preact.h(
          o.InstLinkClient,
          {
            role: "link",
            class: "personaContainer circle personalLink",
            "aria-label": t === null || t === void 0 ? void 0 : t.fullName,
            href: "/"
              .concat(h, "/search?q=")
              .concat(
                encodeURIComponent(
                  (u = t === null || t === void 0 ? void 0 : t.fullName) ===
                    null || u === void 0
                    ? void 0
                    : u.trim()
                ),
                "&form=ENTPSR"
              ),
            nodeName: "MsbCalendarModule_persona_click",
            parentNodeName: "MsbCalendarModule",
            loggingData: ["MsbCalendar"],
          },
          preact.h(
            "div",
            { class: "persona" },
            preact.h(
              "div",
              { class: "coin" },
              preact.h(
                "div",
                { class: "personaInitials", "aria-hidden": "true" },
                preact.h(
                  "span",
                  null,
                  v(t === null || t === void 0 ? void 0 : t.fullName)
                ),
                preact.h(
                  "div",
                  { class: "buttonWithInfoBubble" },
                  preact.h(
                    "div",
                    { class: "infoBubbleContainer" },
                    preact.h(
                      "div",
                      { class: "lockOverlayText" },
                      t === null || t === void 0 ? void 0 : t.fullName
                    ),
                    preact.h(
                      "div",
                      { class: "lockOverlayText" },
                      t === null || t === void 0 ? void 0 : t.email
                    )
                  )
                )
              )
            )
          )
        )
      );
    },
    v = function (n) {
      if (
        ((n = n.trim()),
        ((n && n.indexOf && n.indexOf(" ") <= 0) || !n) &&
          n.length &&
          n.length >= 1)
      )
        return n[0];
      var t = n.split(" ");
      return t.length == 2
        ? t[0][0] + t[1][0]
        : n.length >= 2
        ? n[0] + n[0]
        : "...";
    },
    s = function (n, t) {
      var i;
      return (i = n.toLocaleTimeString(t).replace(/:\d\d\s/g, " ")) !== null &&
        i !== void 0
        ? i
        : n.toLocaleTimeString(t);
    },
    y = function (n, t) {
      return n.toLocaleDateString(t, { weekday: "short" });
    },
    c = function (n) {
      var o = preactHooks.useContext(i.ModelContext).model,
        h = o.LocStrings,
        f = o.Market,
        t = new Date(n * 1e3),
        e = new Date(Date.now()),
        u;
      return t.getFullYear() == e.getFullYear() &&
        t.getMonth() == e.getMonth() &&
        t.getDate() == e.getDate()
        ? r.formatString(h.LOC_MSB_CALENDAR_CARD_TODAY, s(t, f))
        : ((u = new Date(Date.now())),
          u.setDate(u.getDate() + 1),
          t.getFullYear() == u.getFullYear() &&
            t.getMonth() == u.getMonth() &&
            t.getDate() == u.getDate())
        ? r.formatString(h.LOC_MSB_CALENDAR_CARD_TOMORROW, s(t, f))
        : "".concat(y(t, f), " ").concat(s(t, f));
    },
    p = function (n) {
      return __awaiter(void 0, void 0, void 0, function () {
        var t, r, i;
        return __generator(this, function (u) {
          switch (u.label) {
            case 0:
              return [
                4,
                fetch("/work/api/v3/browse/calendar", {
                  body: '{"email":"' + n + '","userPrincipalName":"' + n + '"}',
                  method: "POST",
                }),
              ];
            case 1:
              return [4, u.sent().json()];
            case 2:
              return (
                (t = u.sent()),
                (r =
                  (i = t === null || t === void 0 ? void 0 : t.results) !==
                    null && i !== void 0
                    ? i
                    : []),
                [2, r]
              );
          }
        });
      });
    };
  t.GetCalendarMeetings = p;
  l = function () {
    return preact.h(
      "svg",
      {
        className: "defaultIcon",
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M70.9506 76.8516H11.3431C7.44975 76.8516 4.2937 73.6956 4.2937 69.8022V24.925C4.2937 21.0317 7.44975 17.8752 11.3431 17.8752H70.9506C74.844 17.8752 78 21.0317 78 24.925V69.8022C78 73.6956 74.844 76.8516 70.9506 76.8516Z",
        fill: "#9BCAD6",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M70.5085 74.5581H7.19822C4.32741 74.5581 2 72.231 2 69.3602V20.7799C2 17.9091 4.32741 15.582 7.19822 15.582H70.5085C73.3793 15.582 75.7063 17.9091 75.7063 20.7799V69.3602C75.7063 72.231 73.3793 74.5581 70.5085 74.5581Z",
        fill: "#D3EDF1",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M70.5085 15.5818H7.19786C4.32741 15.5818 2 17.9088 2 20.7796V33.3728H75.7063V20.7796C75.7063 17.9088 73.3793 15.5818 70.5085 15.5818Z",
        fill: "#AED7DF",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.2825 45.2248H15.5951C14.1689 45.2248 13.0132 44.0691 13.0132 42.6432C13.0132 41.217 14.1689 40.0613 15.5951 40.0613H18.2825C19.7084 40.0613 20.8641 41.217 20.8641 42.6432C20.8641 44.0691 19.7084 45.2248 18.2825 45.2248Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.2825 55.8105H15.5951C14.1689 55.8105 13.0132 54.6548 13.0132 53.2289C13.0132 51.8027 14.1689 50.647 15.5951 50.647H18.2825C19.7084 50.647 20.8641 51.8027 20.8641 53.2289C20.8641 54.6548 19.7084 55.8105 18.2825 55.8105Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.2825 66.3966H15.5951C14.1689 66.3966 13.0132 65.2405 13.0132 63.8146C13.0132 62.3888 14.1689 61.2327 15.5951 61.2327H18.2825C19.7084 61.2327 20.8641 62.3888 20.8641 63.8146C20.8641 65.2405 19.7084 66.3966 18.2825 66.3966Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32.483 45.2248H29.7956C28.3694 45.2248 27.2136 44.0691 27.2136 42.6432C27.2136 41.217 28.3694 40.0613 29.7956 40.0613H32.483C33.9088 40.0613 35.0646 41.217 35.0646 42.6432C35.0646 44.0691 33.9088 45.2248 32.483 45.2248Z",
        fill: "#A3CFD8",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32.483 55.8105H29.7956C28.3694 55.8105 27.2136 54.6548 27.2136 53.2289C27.2136 51.8027 28.3694 50.647 29.7956 50.647H32.483C33.9088 50.647 35.0646 51.8027 35.0646 53.2289C35.0646 54.6548 33.9088 55.8105 32.483 55.8105Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32.483 66.3966H29.7956C28.3694 66.3966 27.2136 65.2405 27.2136 63.8146C27.2136 62.3888 28.3694 61.2327 29.7956 61.2327H32.483C33.9088 61.2327 35.0646 62.3888 35.0646 63.8146C35.0646 65.2405 33.9088 66.3966 32.483 66.3966Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M46.6837 45.2248H43.9963C42.5701 45.2248 41.4143 44.0691 41.4143 42.6432C41.4143 41.217 42.5701 40.0613 43.9963 40.0613H46.6837C48.1095 40.0613 49.2653 41.217 49.2653 42.6432C49.2653 44.0691 48.1095 45.2248 46.6837 45.2248Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M46.6837 55.8105H43.9963C42.5701 55.8105 41.4143 54.6548 41.4143 53.2289C41.4143 51.8027 42.5701 50.647 43.9963 50.647H46.6837C48.1095 50.647 49.2653 51.8027 49.2653 53.2289C49.2653 54.6548 48.1095 55.8105 46.6837 55.8105Z",
        fill: "#A3CFD8",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M46.6837 66.3966H43.9963C42.5701 66.3966 41.4143 65.2405 41.4143 63.8146C41.4143 62.3888 42.5701 61.2327 43.9963 61.2327H46.6837C48.1095 61.2327 49.2653 62.3888 49.2653 63.8146C49.2653 65.2405 48.1095 66.3966 46.6837 66.3966Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M60.8839 45.2248H58.1965C56.7703 45.2248 55.6145 44.0691 55.6145 42.6432C55.6145 41.217 56.7703 40.0613 58.1965 40.0613H60.8839C62.3097 40.0613 63.4655 41.217 63.4655 42.6432C63.4655 44.0691 62.3097 45.2248 60.8839 45.2248Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M60.8839 55.8105H58.1965C56.7703 55.8105 55.6145 54.6548 55.6145 53.2289C55.6145 51.8027 56.7703 50.647 58.1965 50.647H60.8839C62.3097 50.647 63.4655 51.8027 63.4655 53.2289C63.4655 54.6548 62.3097 55.8105 60.8839 55.8105Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M60.8839 66.3966H58.1965C56.7703 66.3966 55.6145 65.2405 55.6145 63.8146C55.6145 62.3888 56.7703 61.2327 58.1965 61.2327H60.8839C62.3097 61.2327 63.4655 62.3888 63.4655 63.8146C63.4655 65.2405 62.3097 66.3966 60.8839 66.3966Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M27.2184 18.3432C27.2184 21.4967 24.6617 24.053 21.5086 24.053C18.3547 24.053 15.7983 21.4967 15.7983 18.3432C15.7983 15.1896 18.3547 12.6333 21.5086 12.6333C24.6617 12.6333 27.2184 15.1896 27.2184 18.3432Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.5085 22.2656C19.3407 22.2656 17.583 20.5079 17.583 18.3401V6.92584C17.583 4.75765 19.3407 3 21.5085 3C23.6763 3 25.434 4.75765 25.434 6.92584V18.3401C25.434 20.5079 23.6763 22.2656 21.5085 22.2656Z",
        fill: "#9BCAD6",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.5828 6.92584V18.3401C17.5828 20.5083 19.3404 22.2656 21.5086 22.2656V3C19.3404 3 17.5828 4.75765 17.5828 6.92584Z",
        fill: "#CBE5EA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M61.9081 18.3432C61.9081 21.4967 59.3518 24.053 56.1982 24.053C53.0444 24.053 50.488 21.4967 50.488 18.3432C50.488 15.1896 53.0444 12.6333 56.1982 12.6333C59.3518 12.6333 61.9081 15.1896 61.9081 18.3432Z",
        fill: "#E9F6FA",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M56.1982 22.2656C54.03 22.2656 52.2727 20.5079 52.2727 18.3401V6.92584C52.2727 4.75765 54.03 3 56.1982 3C58.3664 3 60.1237 4.75765 60.1237 6.92584V18.3401C60.1237 20.5079 58.3664 22.2656 56.1982 22.2656Z",
        fill: "#9BCAD6",
      }),
      preact.h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M52.2727 6.92584V18.3401C52.2727 20.5083 54.03 22.2656 56.1982 22.2656V3C54.03 3 52.2727 4.75765 52.2727 6.92584Z",
        fill: "#CBE5EA",
      })
    );
  };
  t.GetCalenderSvg = l;
});
define("Components/Core/Msb/Modules/ProductivityModules/MsbDoormatModule", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/Msb/MsbSharedComponents",
  "Components/Core/ModelContextPreact",
], function (n, t, i, r, u) {
  "use strict";
  var e, f, o;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.GetDefaultBookmarks = t.Doormat = void 0;
  e = function (n) {
    var t = n.bookmarks,
      e = preactHooks.useContext(u.ModelContext).model,
      o = e.LocStrings;
    return preact.h(
      i.Region,
      { nodeName: "MsbDoormatModule", parentNodeName: "MsbProductivityModule" },
      preact.h(
        "div",
        { class: "flexbox-child" },
        preact.h(
          "div",
          { class: "flexbox-child-item doormatCard" },
          e.HasMSBTOB ? null : preact.h(f, null),
          preact.h(
            "div",
            { class: "bookmarkTitle" },
            o.LOC_MSB_DOORMAT_CARD_BOOKMARK
          ),
          preact.h(
            "div",
            null,
            preact.h(
              "div",
              { class: "productivityCard" },
              preact.h(
                "div",
                { class: "cardContainer flexbox-row" },
                preact.h(
                  "div",
                  { class: "doormatActionButtons flexbox-container" },
                  t &&
                    t.slice(0, 6).map(function (n) {
                      return preact.h(r.ProductivityButton, {
                        href: ""
                          .concat(
                            t.IsDefault ? "" : "/work",
                            "/search?form=ENTPSR&msbd=%257B%2522triggeringMode%2522%253A%2522Explicit%2522%257D&q="
                          )
                          .concat(n, "&frb=1"),
                        displayText: n,
                      });
                    })
                )
              )
            )
          ),
          e.HasMSBTOB ? preact.h(f, null) : null
        )
      )
    );
  };
  t.Doormat = e;
  f = function () {
    var t = preactHooks.useContext(u.ModelContext).model,
      n = t.LocStrings;
    return preact.h(
      "div",
      null,
      t.HasMSBTOB
        ? null
        : preact.h(r.ProductivityHeader, {
            title: n.LOC_MSB_DOORMAT_CARD_TITLE,
            hideLock: !0,
          }),
      preact.h(
        "div",
        { class: "doormatCard cardContainer bottom" },
        preact.h(
          "div",
          { class: "clearFix" },
          t.HasMSBTOB
            ? null
            : preact.h(
                "svg",
                {
                  class: "iconSvg",
                  viewBox: "0 0 80 80",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M41.4098 52.3183L43.513 51.9091C43.513 51.9091 44.7015 51.8484 44.8842 50.7727C45.0704 49.6785 45.3413 48.4546 45.3413 48.4546C45.3413 48.4546 45.4329 48 45.9814 48C46.457 48 46.5299 48.4092 46.5299 48.4092L47.033 50.7727C47.033 50.7727 47.17 51.5911 47.9017 51.7727C48.633 51.9545 50.3701 52.2729 50.3701 52.2729C50.3701 52.2729 51.0088 52.4025 51.0088 52.9701C51.0088 53.6847 50.2788 53.7728 50.2788 53.7728L47.8101 54.1363C47.8101 54.1363 47.3303 53.9998 47.033 55.1821C47.0124 55.2642 46.6215 57.3182 46.6215 57.3182C46.6215 57.3182 46.506 58 45.9358 58C45.2894 58 45.25 57.3182 45.25 57.3182L44.8842 55.2729C44.8842 55.2729 44.7458 54.2695 43.6943 54.0422C42.6427 53.8149 41.4098 53.5455 41.4098 53.5455C41.4098 53.5455 41.0088 53.4634 41.0088 52.8866C41.0088 52.3853 41.4098 52.3183 41.4098 52.3183Z",
                  fill: "#A3CFD8",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5.24955 25.5909L6.51129 25.3455C6.51129 25.3455 7.22479 25.309 7.33426 24.6639C7.44584 24.0072 7.60837 23.2731 7.60837 23.2731C7.60837 23.2731 7.66326 23 7.99257 23C8.27791 23 8.32187 23.2457 8.32187 23.2457L8.62328 24.6639C8.62328 24.6639 8.70546 25.1547 9.14453 25.2635C9.58331 25.3726 10.6258 25.5635 10.6258 25.5635C10.6258 25.5635 11.0088 25.6415 11.0088 25.9819C11.0088 26.4106 10.5709 26.4637 10.5709 26.4637L9.08965 26.6816C9.08965 26.6816 8.80189 26.5999 8.62328 27.309C8.61115 27.3582 8.37676 28.5906 8.37676 28.5906C8.37676 28.5906 8.30732 29 7.96497 29C7.57714 29 7.55379 28.5906 7.55379 28.5906L7.33426 27.3636C7.33426 27.3636 7.25117 26.7615 6.62045 26.6253C5.98913 26.489 5.24955 26.3271 5.24955 26.3271C5.24955 26.3271 5.00879 26.278 5.00879 25.9322C5.00879 25.6313 5.24955 25.5909 5.24955 25.5909Z",
                  fill: "#A3CFD8",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M34.2896 9.02273L35.7617 8.73617C35.7617 8.73617 36.5938 8.69389 36.7217 7.94077C36.8519 7.17474 37.0418 6.31798 37.0418 6.31798C37.0418 6.31798 37.1059 6 37.4897 6C37.8225 6 37.8739 6.28627 37.8739 6.28627L38.2256 7.94077C38.2256 7.94077 38.3216 8.51361 38.8339 8.64075C39.3457 8.76817 40.5617 8.99102 40.5617 8.99102C40.5617 8.99102 41.0088 9.08146 41.0088 9.47901C41.0088 9.97903 40.4976 10.041 40.4976 10.041L38.7699 10.2952C38.7699 10.2952 38.4341 10.1998 38.2256 11.0272C38.2112 11.0845 37.9377 12.5226 37.9377 12.5226C37.9377 12.5226 37.8568 13 37.4579 13C37.0052 13 36.978 12.5226 36.978 12.5226L36.7217 11.0909C36.7217 11.0909 36.6248 10.3883 35.8886 10.2292C35.1528 10.07 34.2896 9.88184 34.2896 9.88184C34.2896 9.88184 34.0088 9.824 34.0088 9.42028C34.0088 9.06942 34.2896 9.02273 34.2896 9.02273Z",
                  fill: "#A3CFD8",
                }),
                preact.h("path", {
                  d: "M29.1567 24.3052C30.8957 20.1939 34.9662 17.3096 39.7106 17.3096C46.0366 17.3096 51.1648 22.4378 51.1648 28.7636C51.1648 35.0896 46.0366 40.2178 39.7106 40.2178C33.8012 40.2178 28.9373 35.7424 28.3221 29.9963L28.1785 28.6288",
                  stroke: "#9BCAD6",
                  "stroke-width": "1.59488",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M26.1588 37.8073C24.4329 36.4856 24.5008 33.8546 26.2974 32.4418C27.5217 31.4789 29.2431 31.4343 30.4198 32.3347C32.1469 33.6561 32.0787 36.2885 30.2812 37.7016C29.0567 38.6639 27.3352 38.708 26.1588 37.8073ZM35.0381 28.3226C30.8449 24.1295 23.8657 24.3098 19.4502 28.7253C16.0626 32.1129 16.1148 38.7655 17.8633 40.7225L10.7922 47.7933L10.0484 50.5984L7.2436 51.3422L6.49976 54.147L3.69499 54.8908L1.26465 60.1562L1.75271 61.7948C1.74302 61.9921 1.90043 62.1495 2.09777 62.1398L6.49858 61.5185C6.57875 61.5146 6.65628 61.48 6.71442 61.4218L21.5775 46.5584C21.6844 46.4518 21.8401 46.4193 21.9746 46.4712C25.9311 48.0012 31.3101 47.2359 34.6355 43.9105C39.051 39.4947 39.2316 32.5158 35.0381 28.3226Z",
                  fill: "#9BCAD5",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M25.7447 36.6115C24.057 35.3194 24.1234 32.7469 25.88 31.3655C27.077 30.4244 28.7603 30.3803 29.9105 31.2607C31.5991 32.5531 31.5327 35.1265 29.7752 36.5078C28.5776 37.449 26.8946 37.4922 25.7447 36.6115ZM33.8314 26.7888C29.8872 23.4214 23.8216 23.6093 19.7295 27.2208C16.034 30.4822 15.3345 35.8292 16.9244 39.8982C16.9735 40.0236 16.9429 40.1692 16.8434 40.2685L10.739 46.3731C10.6776 46.4342 10.6392 46.5141 10.6292 46.5984L10.3173 49.2939C10.2982 49.4583 10.1649 49.5914 10.0008 49.6107L7.47321 49.9029C7.30024 49.9229 7.16016 50.0633 7.1399 50.2359L6.84888 52.752C6.82921 52.9229 6.6906 53.0619 6.51939 53.0815L3.82152 53.3934C3.74635 53.4025 3.67528 53.4371 3.62037 53.4918L1.99436 55.1181C1.93357 55.1789 1.89745 55.2593 1.89334 55.343L1.26461 60.1561C1.25463 60.3532 1.41144 60.5094 1.6082 60.5L6.41368 59.8713C6.50236 59.8669 6.58782 59.829 6.65184 59.7644L21.4876 44.9289C21.5916 44.8246 21.7446 44.7923 21.8761 44.8437C25.7363 46.3473 30.7811 45.8301 34.0326 42.5787C38.5491 38.0622 38.5335 30.8032 33.8314 26.7888Z",
                  fill: "#B3DDE3",
                }),
                preact.h(
                  "mask",
                  {
                    id: "mask0",
                    "mask-type": "alpha",
                    maskUnits: "userSpaceOnUse",
                    x: "1",
                    y: "24",
                    width: "37",
                    height: "37",
                  },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M19.7297 27.2209C16.048 30.4699 15.0619 36.2615 16.9073 39.853C16.9816 39.9984 16.9287 40.1837 16.8077 40.3047L10.7386 46.3738C10.6781 46.4346 10.6391 46.5136 10.6297 46.597L10.3196 49.2766C10.2996 49.4511 10.158 49.5923 9.98361 49.6126L7.46575 49.9036C7.29748 49.9233 7.16064 50.0598 7.14125 50.2281L6.84935 52.75C6.82968 52.9221 6.69019 53.0616 6.5181 53.0819L3.83051 53.3926C3.74976 53.4023 3.67311 53.4396 3.61438 53.498L2.0057 55.1067C1.93786 55.1748 1.89734 55.2647 1.89293 55.3583L1.26332 60.1835C1.25451 60.3653 1.39899 60.5098 1.58106 60.5012L6.41327 59.8713C6.50225 59.8669 6.588 59.8285 6.6526 59.7639L21.5072 44.909C21.5997 44.8168 21.7354 44.7886 21.8517 44.8341C25.7165 46.3512 30.7746 45.837 34.0327 42.5788C38.5493 38.0623 38.5337 30.8029 33.8316 26.7886C31.9472 25.1799 29.5782 24.3826 27.1719 24.3823C24.5416 24.3823 21.8666 25.3347 19.7297 27.2209ZM25.7446 36.6116C24.0569 35.3195 24.1233 32.747 25.88 31.3656C27.0772 30.4244 28.7602 30.3804 29.9105 31.2608C31.599 32.5529 31.5327 35.1265 29.7751 36.5079C29.1522 36.9971 28.3981 37.2438 27.6557 37.2438C26.9709 37.2438 26.2964 37.0342 25.7446 36.6116Z",
                    fill: "white",
                  })
                ),
                preact.h(
                  "g",
                  { mask: "url(#mask0)" },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M-4.59287 67.2882L-17.6497 53.6229L27.2779 8.69531L40.3347 22.3606L-4.59287 67.2882Z",
                    fill: "#D3ECF1",
                  })
                ),
                preact.h(
                  "mask",
                  {
                    id: "mask1",
                    "mask-type": "alpha",
                    maskUnits: "userSpaceOnUse",
                    x: "1",
                    y: "24",
                    width: "37",
                    height: "37",
                  },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M19.7297 27.2209C16.048 30.4699 15.0619 36.2615 16.9073 39.853C16.9816 39.9984 16.9287 40.1837 16.8077 40.3047L10.7386 46.3738C10.6781 46.4346 10.6391 46.5136 10.6297 46.597L10.3196 49.2766C10.2996 49.4511 10.158 49.5923 9.98361 49.6126L7.46575 49.9036C7.29748 49.9233 7.16064 50.0598 7.14125 50.2281L6.84935 52.75C6.82968 52.9221 6.69019 53.0616 6.5181 53.0819L3.83051 53.3926C3.74976 53.4023 3.67311 53.4396 3.61438 53.498L2.0057 55.1067C1.93786 55.1748 1.89734 55.2647 1.89293 55.3583L1.26332 60.1835C1.25451 60.3653 1.39899 60.5098 1.58106 60.5012L6.41327 59.8713C6.50225 59.8669 6.588 59.8285 6.6526 59.7639L21.5072 44.909C21.5997 44.8168 21.7354 44.7886 21.8517 44.8341C25.7165 46.3512 30.7746 45.837 34.0327 42.5788C38.5493 38.0623 38.5337 30.8029 33.8316 26.7886C31.9472 25.1799 29.5782 24.3826 27.1719 24.3823C24.5416 24.3823 21.8666 25.3347 19.7297 27.2209ZM25.7446 36.6116C24.0569 35.3195 24.1233 32.747 25.88 31.3656C27.0772 30.4244 28.7602 30.3804 29.9105 31.2608C31.599 32.5529 31.5327 35.1265 29.7751 36.5079C29.1522 36.9971 28.3981 37.2438 27.6557 37.2438C26.9709 37.2438 26.2964 37.0342 25.7446 36.6116Z",
                    fill: "white",
                  })
                ),
                preact.h(
                  "g",
                  { mask: "url(#mask1)" },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M-5.28524 65.9868L-18.7808 52.4913L26.1468 7.56372L39.6423 21.0592L-5.28524 65.9868Z",
                    fill: "#B3DDE3",
                  })
                ),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M29.9088 34.8131C28.4034 34.8131 27.1833 33.4907 27.1833 31.8597C27.1833 30.229 28.4034 28.9067 29.9088 28.9067C31.4141 28.9067 32.6342 30.229 32.6342 31.8597C32.6342 33.4907 31.4141 34.8131 29.9088 34.8131ZM29.9086 24.364C24.4389 24.364 20.0049 29.168 20.0049 35.0944C20.0049 41.0208 24.4389 45.8248 29.9086 45.8248C35.3784 45.8248 39.8124 41.0208 39.8124 35.0944C39.8124 29.168 35.3784 24.364 29.9086 24.364Z",
                  fill: "#9BCAD5",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M19.9173 60.0852H27.4517C27.8667 60.0852 28.2035 60.4217 28.2035 60.837V62.6891C28.2035 63.1043 27.8667 63.4409 27.4517 63.4409H19.9173C19.5023 63.4409 19.1658 63.1043 19.1658 62.6891V60.837C19.1658 60.4217 19.5023 60.0852 19.9173 60.0852Z",
                  fill: "#9BCAD5",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M19.9173 69.6548H27.4517C27.8667 69.6548 28.2035 69.9913 28.2035 70.4066V72.259C28.2035 72.6739 27.8667 73.0105 27.4517 73.0105H19.9173C19.5023 73.0105 19.1658 72.6739 19.1658 72.259V70.4066C19.1658 69.9913 19.5023 69.6548 19.9173 69.6548Z",
                  fill: "#9BCAD5",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M19.9173 59.0222H27.4517C27.8667 59.0222 28.2035 59.3588 28.2035 59.7737V61.6261C28.2035 62.0411 27.8667 62.3776 27.4517 62.3776H19.9173C19.5023 62.3776 19.1658 62.0411 19.1658 61.6261V59.7737C19.1658 59.3588 19.5023 59.0222 19.9173 59.0222Z",
                  fill: "#D3ECF1",
                }),
                preact.h(
                  "mask",
                  {
                    id: "mask2",
                    "mask-type": "alpha",
                    maskUnits: "userSpaceOnUse",
                    x: "19",
                    y: "59",
                    width: "10",
                    height: "4",
                  },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M19.9175 59.0222C19.5026 59.0222 19.166 59.3588 19.166 59.7737V61.6261C19.166 62.0411 19.5026 62.3776 19.9175 62.3776H27.452C27.8669 62.3776 28.2037 62.0411 28.2037 61.6261V59.7737C28.2037 59.3588 27.8669 59.0222 27.452 59.0222H19.9175Z",
                    fill: "white",
                  })
                ),
                preact.h(
                  "g",
                  { mask: "url(#mask2)" },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M14.7949 60.1112H30.8224V56.4202H14.7949V60.1112Z",
                    fill: "#EAF6FA",
                  })
                ),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M19.9173 68.8088H27.4517C27.8667 68.8088 28.2035 69.1454 28.2035 69.5603V71.4127C28.2035 71.8277 27.8667 72.1642 27.4517 72.1642H19.9173C19.5023 72.1642 19.1658 71.8277 19.1658 71.4127V69.5603C19.1658 69.1454 19.5023 68.8088 19.9173 68.8088Z",
                  fill: "#D3ECF1",
                }),
                preact.h(
                  "mask",
                  {
                    id: "mask3",
                    "mask-type": "alpha",
                    maskUnits: "userSpaceOnUse",
                    x: "19",
                    y: "68",
                    width: "10",
                    height: "5",
                  },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M19.9175 68.8086C19.5026 68.8086 19.166 69.1451 19.166 69.5601V71.4125C19.166 71.8274 19.5026 72.164 19.9175 72.164H27.452C27.8669 72.164 28.2037 71.8274 28.2037 71.4125V69.5601C28.2037 69.1451 27.8669 68.8086 27.452 68.8086H19.9175Z",
                    fill: "white",
                  })
                ),
                preact.h(
                  "g",
                  { mask: "url(#mask3)" },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M14.7949 69.8976H30.8224V66.2065H14.7949V69.8976Z",
                    fill: "#EAF6FA",
                  })
                ),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M27.1455 42.5454H30.8028C31.3487 42.5454 31.7915 42.988 31.7915 43.5339V75.6408C31.7915 76.1867 31.3487 76.6293 30.8028 76.6293H27.1455C26.5996 76.6293 26.1567 76.1867 26.1567 75.6408V43.5339C26.1567 42.988 26.5996 42.5454 27.1455 42.5454Z",
                  fill: "#9BCAD5",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M27.0441 39.7749H29.5916C30.0818 39.7749 30.4788 40.1725 30.4788 40.6621V74.6786C30.4788 75.1688 30.0818 75.5661 29.5916 75.5661H27.0441C26.5543 75.5661 26.157 75.1688 26.157 74.6786V40.6621C26.157 40.1725 26.5543 39.7749 27.0441 39.7749Z",
                  fill: "#B3DDE3",
                }),
                preact.h(
                  "mask",
                  {
                    id: "mask4",
                    "mask-type": "alpha",
                    maskUnits: "userSpaceOnUse",
                    x: "25",
                    y: "39",
                    width: "6",
                    height: "37",
                  },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M26.851 39.8267C26.3612 39.8267 25.9639 40.224 25.9639 40.7141V74.7304C25.9639 75.2208 26.3612 75.6179 26.851 75.6179H29.3982C29.8887 75.6179 30.286 75.2208 30.286 74.7304V40.7141C30.286 40.224 29.8887 39.8267 29.3982 39.8267H26.851Z",
                    fill: "white",
                  })
                ),
                preact.h(
                  "g",
                  { mask: "url(#mask4)" },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M23.6145 83.2886H27.7258V34.5408H23.6145V83.2886Z",
                    fill: "#D3ECF1",
                  })
                ),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M28.318 34.6718C26.7207 34.6718 25.426 33.377 25.426 31.7798C25.426 30.1826 26.7207 28.8878 28.318 28.8878C29.9149 28.8878 31.2099 30.1826 31.2099 31.7798C31.2099 33.377 29.9149 34.6718 28.318 34.6718ZM28.3178 24.4395C22.5145 24.4395 17.8103 29.1442 17.8103 34.9473C17.8103 40.7503 22.5145 45.4551 28.3178 45.4551C34.1212 45.4551 38.8253 40.7503 38.8253 34.9473C38.8253 29.1442 34.1212 24.4395 28.3178 24.4395Z",
                  fill: "#B3DDE3",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M52.9562 23.2835C53.5793 24.5427 53.064 26.0686 51.8047 26.6918C50.5455 27.3152 49.0197 26.7998 48.3965 25.5406C47.7734 24.2811 48.2887 22.7552 49.5482 22.1321C50.8072 21.5089 52.333 22.0246 52.9562 23.2835ZM43.641 19.5555C42.5389 20.6426 42.2581 22.3139 42.945 23.7014L46.4898 30.8638C47.214 32.3268 48.7948 33.1605 50.4108 32.9315L57.0866 31.9862C57.6437 31.9072 58.1846 31.7416 58.6897 31.4952L77.4265 22.3523C78.8334 21.6561 79.4096 19.9508 78.7133 18.5438L72.4897 5.96923C71.7735 4.52265 70.0203 3.93063 68.574 4.64629L49.146 14.1257L43.641 19.5555Z",
                  fill: "#9BCAD6",
                }),
                preact.h("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M51.7618 22.1676C52.7676 23.5701 52.1104 25.515 50.46 26.0201C49.4607 26.3261 48.3463 25.9497 47.7372 25.1001C46.7311 23.6976 47.388 21.7526 49.0387 21.2475C50.038 20.9416 51.1528 21.318 51.7618 22.1676ZM42.8668 18.8827C41.7885 19.9463 41.5142 21.5814 42.1858 22.9384L45.6539 29.9458C46.3622 31.3768 47.9087 32.1923 49.4895 31.9683L55.8361 31.0696C56.503 30.9751 57.1511 30.7766 57.7563 30.4814L75.919 21.619C77.2951 20.938 77.8586 19.2697 77.1776 17.893L71.0891 5.59156C70.3888 4.17641 68.6735 3.59701 67.2586 4.2971L49.1144 13.1501C48.5436 13.4288 48.0217 13.7982 47.5695 14.2446L42.8668 18.8827Z",
                  fill: "#C1DFE4",
                }),
                preact.h("path", {
                  d: "M50.1787 33.4193C48.3216 37.591 44.0541 40.4152 39.2152 40.2055C34.3005 39.9926 30.2432 36.7127 28.811 32.2925",
                  stroke: "#9BCAD6",
                  "stroke-width": "1.59488",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                preact.h("path", {
                  d: "M30.2976 22.2338C32.4642 19.116 36.133 17.1423 40.2066 17.3188C44.5646 17.5073 48.2477 20.1074 50.0252 23.7755",
                  stroke: "#9BCAD6",
                  "stroke-width": "1.59488",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                preact.h(
                  "mask",
                  {
                    id: "mask5",
                    "mask-type": "alpha",
                    maskUnits: "userSpaceOnUse",
                    x: "16",
                    y: "23",
                    width: "12",
                    height: "23",
                  },
                  preact.h("rect", {
                    x: "16.5667",
                    y: "23.969",
                    width: "11.1591",
                    height: "21.731",
                    fill: "#D3ECF1",
                  })
                ),
                preact.h(
                  "g",
                  { mask: "url(#mask5)" },
                  preact.h("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M28.318 34.6718C26.7207 34.6718 25.426 33.377 25.426 31.7798C25.426 30.1826 26.7207 28.8878 28.318 28.8878C29.9149 28.8878 31.2099 30.1826 31.2099 31.7798C31.2099 33.377 29.9149 34.6718 28.318 34.6718ZM28.3178 24.4395C22.5145 24.4395 17.8103 29.1442 17.8103 34.9473C17.8103 40.7503 22.5145 45.4551 28.3178 45.4551C34.1212 45.4551 38.8253 40.7503 38.8253 34.9473C38.8253 29.1442 34.1212 24.4395 28.3178 24.4395Z",
                    fill: "#D3ECF1",
                  })
                )
              ),
          t.HasMSBTOB
            ? null
            : preact.h(
                "div",
                { class: "title doormatCardTitle" },
                n.LOC_MSB_DOORMAT_CARD_PRIVACY
              ),
          preact.h(
            "div",
            null,
            preact.h(
              "div",
              { class: "subTitle" },
              preact.h("span", null, n.LOC_MSB_DOORMAT_CARD_PRIVACY_SUBTITLE)
            ),
            preact.h(
              i.InstLink,
              {
                href: "https://go.microsoft.com/fwlink/?linkid=2054140",
                class: "doormatCardLearnMore link",
                role: "link",
                "aria-label": n.LOC_MSB_LEARN_MORE_FULL_MESSAGE,
                nodeName: "MsbDoormatLearnMore_click",
                parentNodeName: "MsbDoormatModule",
                target: "_blank",
              },
              n.LOC_MSB_LEARN_MORE
            )
          )
        )
      )
    );
  };
  o = function () {
    var i = preactHooks.useContext(u.ModelContext).model,
      n = i.LocStrings,
      r = i.IsEdu,
      t = [
        n.LOC_MSB_DOORMAT_CARD_BOOKMARK_ME,
        n.LOC_MSB_DOORMAT_CARD_BOOKMARK_OFFICE,
        n.LOC_MSB_DOORMAT_CARD_BOOKMARK_GROUP,
        n.LOC_MSB_DOORMAT_CARD_BOOKMARK_ORGAN,
        n.LOC_MSB_DOORMAT_CARD_BOOKMARK_CALENDAR,
        n.LOC_MSB_DOORMAT_CARD_BOOKMARK_FILES,
      ];
    return (
      r &&
        (t = [
          n.LOC_MSB_DOORMAT_CARD_BOOKMARK_ASSIGNMENTS,
          n.LOC_MSB_DOORMAT_CARD_BOOKMARK_PROFILE,
          n.LOC_MSB_DOORMAT_CARD_BOOKMARK_CLASSES,
        ]),
      (t.IsDefault = !0),
      t
    );
  };
  t.GetDefaultBookmarks = o;
});
define("Components/Core/Msb/Modules/ProductivityModules/MsbProductivityModulePreact", [
  "require",
  "exports",
  "Components/Core/Msb/Modules/ProductivityModules/MsbFilesModule",
  "Components/Core/Msb/Modules/ProductivityModules/MsbCalendarModule",
  "Components/Core/Msb/Modules/ProductivityModules/MsbDoormatModule",
  "Components/Core/Msb/MsbContextPreact",
  "Components/Core/Msb/Modules/ProductivityModules/MsbCalendarModule",
  "InstrumentPreact",
], function (n, t, i, r, u, f, e, o) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MsbProductivityModule = void 0;
  var s = function () {
    var s = preactHooks.useState([]),
      w = s[0],
      h = s[1],
      c = preactHooks.useState(!0),
      b = c[0],
      k = c[1],
      l = preactHooks.useState([]),
      d = l[0],
      g = l[1],
      a = preactHooks.useState(!0),
      nt = a[0],
      tt = a[1],
      v = preactHooks.useState(u.GetDefaultBookmarks()),
      it = v[0],
      y = v[1],
      p = preactHooks.useContext(f.MsbContextProvider),
      t = p.tenantConfig,
      n = p.userInfo;
    return (
      preactHooks.useEffect(function () {
        sj_evt.bind(
          "bfbTenantSettingsUserInfo",
          function () {
            return __awaiter(void 0, void 0, void 0, function () {
              var u, f, o, r, l, i, a, s, c;
              return __generator(this, function (v) {
                switch (v.label) {
                  case 0:
                    return (
                      (u = function (n) {
                        sj_evt.unbind("bfbCalendarMeetings", u);
                        k(!1);
                        n[1] &&
                          n[1].results &&
                          n[1].results.length &&
                          n[1].results.length > 0 &&
                          h(n[1].results);
                      }),
                      (f = function (n) {
                        sj_evt.unbind("bfbDocuments", f);
                        tt(!1);
                        n[1] &&
                          n[1].results &&
                          n[1].results.length &&
                          n[1].results.length > 0 &&
                          g(n[1].results);
                      }),
                      (o = !1),
                      (r = function (n) {
                        sj_evt.unbind("bfbTopBookmarks", r);
                        n[1] &&
                          n[1].queries &&
                          n[1].queries.length &&
                          n[1].queries.length > 0 &&
                          (y(n[1].queries), (o = !0));
                      }),
                      (l = function (n) {
                        sj_evt.unbind("bfbTopSearches", r);
                        !o &&
                          n[1] &&
                          n[1].queries &&
                          n[1].queries.length &&
                          n[1].queries.length > 0 &&
                          y(n[1].queries);
                      }),
                      sj_evt.bind("bfbDocuments", f),
                      sj_evt.bind("bfbCalendarMeetings", u),
                      sj_evt.bind("bfbTopBookmarks", r),
                      sj_evt.bind("bfbTopSearches", l),
                      (i = [
                        { foo: null },
                        {
                          tenantDisplayName:
                            (s =
                              t === null || t === void 0
                                ? void 0
                                : t.tenantDisplayName) !== null && s !== void 0
                              ? s
                              : "",
                        },
                      ]),
                      (i.topQueryType = "TopBookmarks"),
                      BingAtWork === null || BingAtWork === void 0
                        ? void 0
                        : BingAtWork.startPrefetchingTopQueries(i),
                      BingAtWork === null || BingAtWork === void 0
                        ? void 0
                        : BingAtWork.startPrefetchingDocuments(i),
                      (i.topQueryType = "TopSearches"),
                      BingAtWork === null || BingAtWork === void 0
                        ? void 0
                        : BingAtWork.startPrefetchingTopQueries(i),
                      (i[2] = n),
                      BingAtWork &&
                        BingAtWork.context &&
                        (BingAtWork.context.productivityMeetingsFetchDuration = 592200),
                      BingAtWork === null || BingAtWork === void 0
                        ? void 0
                        : BingAtWork.startPrefetchingCalendarMeetings(i),
                      (a = h),
                      [
                        4,
                        e.GetCalendarMeetings(
                          (c =
                            n === null || n === void 0
                              ? void 0
                              : n.userPrincipalName) !== null && c !== void 0
                            ? c
                            : ""
                        ),
                      ]
                    );
                  case 1:
                    return a.apply(void 0, [v.sent()]), [2];
                }
              });
            });
          },
          !0
        );
      }, []),
      preact.h(
        o.Region,
        { nodeName: "MsbProductivityModule", parentNodeName: "MsbWrapper" },
        preact.h(
          "div",
          { class: "flexbox-container productivityContainer" },
          preact.h(u.Doormat, { bookmarks: it }),
          preact.h(r.Calendar, { calendarState: w, isLoading: b }),
          preact.h(i.Files, { filesState: d, isLoading: nt })
        )
      )
    );
  };
  t.MsbProductivityModule = s;
});
define("Components/Core/Msb/MsbModulePreact", [
  "require",
  "exports",
  "Components/Core/UtilsPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/Msb/MsbContextPreact",
  "Components/Core/Msb/Modules/MsbLogoModule",
  "Components/Core/Msb/Modules/ProductivityModules/MsbProductivityModulePreact",
  "Components/Core/Msb/PrivacyIcon",
  "InstrumentPreact",
  "Components/Core/Msb/MsbSharedComponents",
], function (n, t, i, r, u, f, e, o, s, h) {
  "use strict";
  var c, l, a;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.MsbModule = void 0;
  c = function () {
    var n = preactHooks.useContext(r.ModelContext),
      c = n.updateIsMsbReady,
      v = n.updateIsMsbOptOut,
      y = n.updateIsTobDisabledOnClient,
      t = preactHooks.useState({
        displayName: "work",
        tenantDisplayName: "work",
        iconLarge: "",
        theme: "",
        isEnabled: !0,
      }),
      i = t[0],
      f = t[1],
      e = preactHooks.useState({
        displayName: "",
        id: "",
        userPrincipalName: "",
      }),
      o = e[0],
      h = e[1];
    try {
      return (
        preactHooks.useEffect(function () {
          var n = sj_cook.get("BFBUSR", "BFBHP") == "0";
          v(n);
          sj_evt.bind(
            "bfbTenantSettings",
            function () {
              return __awaiter(void 0, void 0, void 0, function () {
                var n;
                return __generator(this, function () {
                  return (
                    (n = function (t) {
                      var r, u, l, e, s;
                      f(
                        (u =
                          (r = t[1]) === null || r === void 0
                            ? void 0
                            : r.tenantSettings) !== null && u !== void 0
                          ? u
                          : i
                      );
                      y(!0 && l !== void 0 ? l : !1);
                      h(
                        (s =
                          (e = t[1]) === null || e === void 0
                            ? void 0
                            : e.user) !== null && s !== void 0
                          ? s
                          : o
                      );
                      c(!0);
                      sj_evt.unbind("bfbTenantSettingsInMsb", n);
                    }),
                    sj_evt.bind("bfbTenantSettingsInMsb", n),
                    BingAtWork && BingAtWork.startPrefetchTenantSettings
                      ? BingAtWork.startPrefetchTenantSettings()
                      : l(),
                    [2]
                  );
                });
              });
            },
            1
          );
        }, []),
        preact.h(
          s.Region,
          { nodeName: "MsbWrapper", parentNodeName: "Core" },
          preact.h(
            s.Region,
            {
              nodeName: "HPCompliantProductivityModule",
              parentNodeName: "Core",
            },
            preact.h(
              u.MsbContextProvider.Provider,
              {
                value: {
                  tenantConfig: i,
                  updateTenantConfig: f,
                  userInfo: o,
                  updateUserInfo: h,
                },
              },
              preact.h(a, null)
            )
          )
        )
      );
    } catch (p) {
      Log && Log.Log && Log.Log("Error", "HP", "MsbModuleError");
    }
  };
  t.MsbModule = c;
  l = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var n, s, t, i, r, u, f, e, o;
      return __generator(this, function (h) {
        switch (h.label) {
          case 0:
            return ((n =
              (i =
                (t =
                  BingAtWork === null || BingAtWork === void 0
                    ? void 0
                    : BingAtWork.hpTenantSettingsClient) === null ||
                t === void 0
                  ? void 0
                  : t.tenantSettingsApiUrl) !== null && i !== void 0
                ? i
                : null),
            (n =
              n !== null && n !== void 0
                ? n
                : (o =
                    ((u =
                      (r =
                        BingAtWork === null || BingAtWork === void 0
                          ? void 0
                          : BingAtWork.context) === null || r === void 0
                        ? void 0
                        : r.mtCfg) === null || u === void 0
                      ? void 0
                      : u.apiUriBase) +
                    ((e =
                      (f =
                        BingAtWork === null || BingAtWork === void 0
                          ? void 0
                          : BingAtWork.context) === null || f === void 0
                        ? void 0
                        : f.mtCfg) === null || e === void 0
                      ? void 0
                      : e.tenantSettingsApiUri)) !== null && o !== void 0
                ? o
                : null),
            !n)
              ? [2]
              : [
                  4,
                  fetch(n, {
                    headers: {
                      accept: "*/*",
                      "accept-language": "en-US,en;q=0.9",
                      "cache-control": "no-cache",
                      pragma: "no-cache",
                      "sec-fetch-dest": "empty",
                      "sec-fetch-mode": "cors",
                      "sec-fetch-site": "same-site",
                    },
                    referrerPolicy: "strict-origin-when-cross-origin",
                    body: null,
                    method: "GET",
                    mode: "cors",
                    credentials: "include",
                  }),
                ];
          case 1:
            return [4, h.sent().json()];
          case 2:
            return (
              (s = h.sent()), sj_evt.fire("bfbTenantSettingsInMsb", s), [2]
            );
        }
      });
    });
  };
  a = function () {
    var c,
      l,
      a,
      n = (
        (c = preactHooks.useContext(u.MsbContextProvider)) !== null &&
        c !== void 0
          ? c
          : { tenantConfig: null }
      ).tenantConfig,
      v = preactHooks.useContext(r.ModelContext),
      t = v.model,
      p = v.isMsbReady,
      w = v.isMsbOptOut,
      s = t.LocStrings,
      y;
    if (!w && p)
      return (
        preactHooks.useEffect(
          function () {
            if ((h.showMsbModule(), t.HasMSBTOB)) {
              var n = document.getElementById("hideShowCaro");
              n.className = "down msbFix";
            }
          },
          [w, p]
        ),
        (y = i.FormatWorkString(t, s.LOC_MSB_LATEST_FROM_ORGANIZATION)),
        t.HasMSBTOB &&
          (y = s.LOC_MSB_LATEST_FROM.replace(
            "{0}",
            (n === null || n === void 0 ? void 0 : n.tenantDisplayName) ||
              i.FormatWorkString(t, "{0}")
          )),
        preact.h(
          "div",
          { class: "msbModule moduleCont hide" },
          preact.h(f.MsbLogo, null),
          preact.h(
            "div",
            { class: "module" },
            preact.h(
              "div",
              null,
              preact.h("h2", { class: "vs_title" }, y),
              preact.h(
                "div",
                { class: "msbHeader" },
                preact.h(o.PrivacyIcon, {
                  message: i.formatString(
                    s.LOC_MSB_PRIVACY,
                    (a =
                      (l =
                        n === null || n === void 0
                          ? void 0
                          : n.tenantDisplayName) !== null && l !== void 0
                        ? l
                        : n === null || n === void 0
                        ? void 0
                        : n.displayName) !== null && a !== void 0
                      ? a
                      : i.FormatWorkString(t, "your {0}")
                  ),
                  learnMoreTitle: s.LOC_MSB_LEARN_MORE,
                  className: "lockSolid",
                  solidLock: !0,
                }),
                preact.h("div", { class: "optOutWrapper" })
              )
            ),
            preact.h(e.MsbProductivityModule, null)
          ),
          preact.h("div", { class: "module vert_tob_title" })
        )
      );
  };
});
define("Components/Core/Modules/FooterForEndlessScrollPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
], function (n, t, i, r) {
  "use strict";
  var u, f;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.EndlessScrollFooter = void 0;
  u = function () {
    if (r.useClientSideRender()) {
      var u = preactHooks.useContext(i.ModelContext),
        t = u.model,
        n = u.scrollPosition,
        e = t.Footer,
        o = t.LocStrings,
        s = t.MediaContents,
        h = s[0].Ssd,
        c = h.match(/(\d{4})/),
        l = o.LOC_HOMEPAGE_COPYRIGHT_FORMAT.replace("{0}", c[1]),
        a = function () {
          var r,
            i = "footer dynamic_footer",
            t = document.getElementById("widget_container"),
            f =
              ((r =
                t === null || t === void 0
                  ? void 0
                  : t.querySelector(".peregrine-widgets")) === null ||
              r === void 0
                ? void 0
                : r.getAttribute("data-widget-state")) == "loaded",
            e = n === null || n === void 0 ? void 0 : n.top,
            u;
          return f
            ? e
              ? ((u =
                  (Math.abs(t.scrollHeight - n.top) / t.scrollHeight) * 100),
                u <= 5 ? i + " show_footer" : i)
              : i
            : i;
        };
      return preact.h(
        "footer",
        { className: a(), id: "footer" },
        preact.h(
          "div",
          { className: "card_body" },
          preact.h("span", { className: "msft" }, l),
          preact.h(
            "ul",
            { className: "items" },
            e.map(function (n) {
              return preact.h(
                "li",
                { className: "item" },
                preact.h(f, { Id: n.Id, BaseUrl: n.BaseUrl, Text: n.Text })
              );
            })
          )
        )
      );
    }
  };
  t.EndlessScrollFooter = u;
  f = function (n) {
    var t = n.Id,
      i = n.BaseUrl,
      r = n.Text;
    return t == "sb_mcp" || t == "menu_sb_mcp"
      ? preact.h(
          "div",
          {
            class: "mcp_footer",
            onClick: function () {
              mcp_banner !== undefined && mcp_banner(i);
            },
          },
          preact.h("span", null, r)
        )
      : i
      ? preact.h("a", { id: t, href: i, role: "link" }, r)
      : preact.h("span", { id: t }, r);
  };
});
define("Components/Core/Modules/FooterPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
], function (n, t, i, r) {
  "use strict";
  var u, f;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Footer = void 0;
  u = function () {
    if (r.useClientSideRender()) {
      var n = preactHooks.useContext(i.ModelContext).model,
        u = n.Footer,
        t = n.HasVerticalScroll,
        e = n.LocStrings,
        o = n.MediaContents,
        s = o[0].Ssd,
        h = s.match(/(\d{4})/),
        c = e.LOC_HOMEPAGE_COPYRIGHT_FORMAT.replace("{0}", h[1]);
      return preact.h(
        "footer",
        {
          className: "footer hc_card".concat(t ? "" : " no_mod"),
          id: "footer",
          style: t ? null : { position: "fixed" },
        },
        preact.h(
          "div",
          { className: "card_body" },
          preact.h("span", { className: "msft" }, c),
          preact.h(
            "ul",
            { className: "items" },
            u.map(function (n) {
              return preact.h(
                "li",
                { className: "item" },
                preact.h(f, { Id: n.Id, BaseUrl: n.BaseUrl, Text: n.Text })
              );
            })
          )
        )
      );
    }
  };
  t.Footer = u;
  f = function (n) {
    var t = n.Id,
      i = n.BaseUrl,
      r = n.Text;
    return t == "sb_mcp"
      ? preact.h(
          "div",
          {
            class: "mcp_footer",
            onClick: function () {
              mcp_banner !== undefined && mcp_banner(i);
            },
          },
          preact.h("span", null, r)
        )
      : i
      ? preact.h("a", { id: t, href: i, role: "link" }, r)
      : preact.h("span", { id: t }, r);
  };
});
define("Components/Core/ScrollPreact", [
  "require",
  "exports",
  "Components/Core/MuseumCard/MuseumCardPreact",
  "Components/Core/Modules/ModulesPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/HooksPreact",
  "Components/Core/Carousel/CarouselPreact",
  "Components/Core/SearchPreact",
  "Components/Core/Msb/MsbModulePreact",
  "Components/Core/Modules/FooterForEndlessScrollPreact",
  "Components/Core/Modules/FooterPreact",
], function (n, t, i, r, u, f, e, o, s, h, c) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.ScrollContainer = void 0;
  var l = function () {
    var l = preactHooks.useRef(null),
      ht = preactHooks.useRef(null),
      ct = preactHooks.useRef(null),
      d = preactHooks.useRef(null),
      y = preactHooks.useContext(u.ModelContext),
      g = y.updateScrollPosition,
      p = y.updateScrolled,
      nt = y.updateSearchboxFixed,
      tt = y.updateBackgroundOpacity,
      w = y.scrolled,
      b = preactHooks.useContext(u.ModelContext),
      n = b.model,
      lt = b.isMsbReady,
      it = b.widgetAccessible,
      at = n.HasVerticalScroll,
      a = n.IsMobile,
      v = n.IsWidgetCompatible,
      vt = n.IsBingAtWorkEnabled,
      yt = n.HasCarousel,
      t = f.useScrollPosition(l.current).top,
      rt = preactHooks.useState(-1),
      ut = rt[0],
      ft = rt[1],
      et = a && ut != -1 ? "".concat(ut, "px") : "",
      pt = et ? { height: et } : null,
      wt = v && it && !vt ? "msnpeek" + (yt ? "" : "_notob") : "",
      k,
      ot;
    preactHooks.useEffect(
      function () {
        var n, i, r, u;
        a &&
          l &&
          l.current &&
          ((i = l.current.getBoundingClientRect().height),
          !w &&
            t > 0 &&
            ((r = document.querySelector("#vs_hidden")),
            Log &&
              Log.Log(
                "Show",
                "HPVS",
                "Scroll",
                !0,
                "top",
                t === null || t === void 0 ? void 0 : t.toString()
              ),
            si_T && r && si_T(r.getAttribute("data-h"))),
          g({ top: t, height: i }),
          p(t > 0),
          nt(t > i * o.searchboxParallaxRatio),
          (u = a ? 0 : 0.3),
          tt(
            (n = Math.max(u, 1 - t / window.innerHeight)) === null ||
              n === void 0
              ? void 0
              : n.toString()
          ));
      },
      [t]
    );
    preactHooks.useLayoutEffect(function () {
      !a &&
        document &&
        (document.addEventListener("scroll", k, { passive: !0 }),
        window.addEventListener("resize", k));
    }, []);
    preactHooks.useEffect(
      function () {
        var n, t;
        !a &&
          document &&
          w &&
          ((t = document.querySelector("#vs_hidden")),
          Log &&
            Log.Log(
              "Show",
              "HPVS",
              "Scroll",
              !0,
              "top",
              (n = window.scrollY) === null || n === void 0
                ? void 0
                : n.toString()
            ),
          si_T && t && si_T(t.getAttribute("data-h")));
      },
      [w]
    );
    k = function () {
      requestAnimationFrame(ot);
    };
    ot = function () {
      var r, t, f;
      if (document) {
        if (
          ((r = preactHooks.useContext(u.ModelContext)),
          (!v || n.HasMSBTOB) && r)
        ) {
          var i = preactHooks.useContext(u.ModelContext),
            e = i.isMsbReady,
            s = i.isMsbPeekScroll,
            h = i.updateIsMsbPeekScroll;
          if (e && s) {
            h(!1);
            p(!1);
            return;
          }
        }
        t = window.pageYOffset;
        f = d.current.getBoundingClientRect().height;
        g({ top: t });
        p(t > 0);
        nt(t > f * o.searchboxParallaxRatio);
        tt(bt(t));
      }
    };
    preactHooks.useEffect(function () {
      (document.addEventListener("keydown", dt), a) &&
        (sj_evt &&
          sj_evt.bind("bnp.notif.shown", function (n) {
            st(n, !0);
          }),
        sj_evt &&
          sj_evt.bind("bnp.embed.close", function (n) {
            st(n, !1);
          }));
    }, []);
    var bt = function (t) {
        var i,
          r =
            (i = Math.min(0.7, t / window.innerHeight)) === null || i === void 0
              ? void 0
              : i.toString();
        return (!v || n.HasMSBTOB) && (r = lt ? "0" : r), r;
      },
      kt = function () {
        var t = preactHooks.useContext(u.ModelContext),
          i = t.clientSettings,
          r = t.carouselLoaded,
          n;
        return r
          ? ((n = i.Pn.St),
            n == 0 ? "show_all" : n == 1 ? "show_title" : "show_none")
          : "show_none";
      },
      dt = function (n) {
        var r = preactHooks.useContext(u.ModelContext),
          t = r.model,
          f = r.updateModel,
          o = t.MediaContents,
          e = t.CurrentIndex,
          s = o.length - 1,
          i;
        n.target != document.body ||
          n.shiftKey ||
          n.ctrlKey ||
          (n.code == "ArrowLeft"
            ? ((i = __assign(__assign({}, t), {
                CurrentIndex: Math.min(s, e + 1),
              })),
              f(i))
            : n.code == "ArrowRight" &&
              ((i = __assign(__assign({}, t), {
                CurrentIndex: Math.max(0, e - 1),
              })),
              f(i)));
      },
      st = function (n, t) {
        var i, r, u;
        if (a && l && l.current) {
          if (!t) {
            ft(-1);
            return;
          }
          ((i = n[1] && document.getElementById(n[1].vid)),
          i && i.offsetTop == 0) &&
            ((r = l.current.clientHeight),
            (u = i.clientHeight),
            r > u && ft(r - i.clientHeight));
        }
      };
    return preact.h(
      "div",
      {
        className: "bottom_row ".concat(v ? "widget" : "", " ").concat(wt),
        style: pt,
        ref: d,
        "data-priority": "2",
      },
      preact.h(
        "div",
        {
          className: "scroll_cont ".concat(kt()).concat(at ? "" : " no_vs"),
          id: "scroll_cont",
          ref: l,
        },
        preact.h(
          "div",
          { className: "vs_cont", id: "vs_cont", ref: ht },
          preact.h(i.MuseumCard, null),
          preact.h(
            "div",
            { className: "vs" },
            n.HasMSBTOB && preact.h(e.Carousel, null),
            !v || n.HasMSBTOB ? preact.h(s.MsbModule, null) : null,
            !n.HasMSBTOB && preact.h(e.Carousel, null),
            preact.h(
              "div",
              { className: "modules_wrapper", ref: ct },
              preact.h(r.Modules, null)
            )
          ),
          v && it
            ? preact.h(h.EndlessScrollFooter, null)
            : preact.h(c.Footer, null)
        )
      )
    );
  };
  t.ScrollContainer = l;
});
define("Components/Core/Header/ScopesPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
], function (n, t, i, r) {
  "use strict";
  var e;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Scopes = void 0;
  e = function () {
    var h = preactHooks.useContext(i.ModelContext),
      t = h.model,
      e = h.clientSettings,
      c = t.Scopes,
      l = t.IsMobile,
      a = t.LocStrings,
      n = preactHooks.useRef(null);
    if (!l)
      return e && e.Sc && e.Sc.St == 0
        ? (preactHooks.useEffect(function () {
            n &&
              n.current &&
              (n.current.addEventListener("mouseenter", function () {
                f(n.current);
              }),
              n.current.addEventListener("mouseleave", function () {
                n.current.contains(document.activeElement) || u(n.current);
              }),
              n.current.addEventListener("focusout", function (t) {
                n.current.contains(document.activeElement) ||
                  n.current.contains(t.relatedTarget) ||
                  u(n.current);
              }),
              n.current.addEventListener("keydown", function (t) {
                if (t.keyCode === 13) {
                  f(n.current);
                  return;
                }
                if (t.keyCode === 27) {
                  u(n.current);
                  n.current.focus();
                  return;
                }
              }));
          }, []),
          preact.h(
            r.Region,
            { nodeName: "ScopeBar", parentNodeName: "Header" },
            preact.h(
              "ul",
              { className: "scopes" },
              c.map(function (n) {
                if (!n.Overflow || (n.Overflow && n.ExposeIfPossible))
                  return preact.h(
                    "li",
                    {
                      className: "scope ".concat(
                        n.ExposeIfPossible ? "try_exp" : ""
                      ),
                      id: n.Id,
                    },
                    preact.h(s, { item: n, hasIcon: !1 })
                  );
              }),
              preact.h(
                "li",
                {
                  className: "scope dots",
                  id: "dots_overflow_menu_container",
                  tabIndex: 0,
                  role: "button",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                  "aria-label": a.LOC_OVERFLOWMENU_MORE_ARIALABEL,
                  ref: n,
                },
                preact.h(o, {
                  items: c.filter(function (n) {
                    return n.Overflow;
                  }),
                  hasIcon: !1,
                })
              )
            )
          ))
        : void 0;
  };
  t.Scopes = e;
  var o = function (n) {
      var t = n.items,
        i = n.hasIcon;
      return preact.h(
        "ul",
        { className: "overflow_menu" },
        t.map(function (n) {
          var r = n.SubScopes.length > 0,
            t = preactHooks.useRef(null);
          return (
            preactHooks.useEffect(function () {
              t &&
                t.current &&
                r &&
                (t.current.addEventListener("mouseenter", function () {
                  f(t.current);
                }),
                t.current.addEventListener("mouseleave", function () {
                  t.current.contains(document.activeElement) || u(t.current);
                }),
                t.current.addEventListener("focusout", function (n) {
                  t.current.contains(document.activeElement) ||
                    t.current.contains(n.relatedTarget) ||
                    u(t.current);
                }),
                t.current.addEventListener("keydown", function (n) {
                  if (
                    n.keyCode === 13 &&
                    !t.current.classList.contains("focusin")
                  ) {
                    event.preventDefault();
                    f(t.current);
                    return;
                  }
                  if (
                    n.keyCode === 27 &&
                    t.current.classList.contains("focusin")
                  ) {
                    u(t.current);
                    event.stopPropagation();
                    t.current.getElementsByTagName("a")[0].focus();
                    return;
                  }
                }));
            }, []),
            preact.h(
              "li",
              {
                className: "overflow_item"
                  .concat(r ? " has_sub" : "")
                  .concat(n.IsDivider ? " divider" : "")
                  .concat(n.ExposeIfPossible ? " try_exp" : ""),
                id: n.Id,
                role: r ? "button" : "presentation",
                "aria-haspopup": r ? "true" : "false",
                "aria-expanded": r ? "false" : undefined,
                "aria-label": n.Text,
                ref: t,
              },
              preact.h(s, { item: n, hasIcon: i }),
              r
                ? preact.h(
                    preact.Fragment,
                    null,
                    preact.h("span", { className: "scarrow" }),
                    preact.h(
                      "div",
                      { className: "overflow_container" },
                      preact.h(
                        "div",
                        { className: "submenu" },
                        preact.h(o, { items: n.SubScopes, hasIcon: !0 })
                      )
                    )
                  )
                : null
            )
          );
        })
      );
    },
    s = function (n) {
      var t = n.item,
        f = n.hasIcon,
        i = t.Text,
        e = t.Id,
        u = t.BaseUrl,
        o = u.indexOf("//") == 0;
      return preact.h(
        r.InstLink,
        {
          href: u,
          nodeName: e,
          parentNodeName: "Header",
          target: o ? "_blank" : "",
          rel: "noopener",
        },
        f
          ? [
              preact.h("div", { className: "icon" }),
              preact.h("div", { className: "text" }, i),
            ]
          : i
      );
    },
    f = function (n) {
      n.classList.add("focusin");
      n.setAttribute("aria-expanded", "true");
    },
    u = function (n) {
      n.classList.remove("focusin");
      n.setAttribute("aria-expanded", "false");
    };
});
define("Components/Core/Header/LanguageSwitcherPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
], function (n, t, i, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.LanguageSwitcher = void 0;
  var u = function () {
    var n = preactHooks.useContext(i.ModelContext).model,
      u = n.IsMobile,
      t = n.SupportedLanguages;
    if (!u && t.length <= 2)
      return preact.h(
        r.Region,
        { nodeName: "LanguageSwitcher", parentNodeName: "Core" },
        preact.h(
          "span",
          { class: "sw_mktsw" },
          t.map(function (t) {
            return preact.h(
              r.InstLink,
              {
                nodeName: t.Name,
                parentNodeName: "LanguageSwitcher",
                className: "sw_lang",
                href: t.Url + "&cc=" + n.Region,
              },
              t.Name
            );
          })
        )
      );
  };
  t.LanguageSwitcher = u;
});
define("Components/Core/Header/QuickSettingsPreact", [
  "require",
  "exports",
  "Components/Core/UtilsPreact",
  "Components/Core/HooksPreact",
  "InstrumentPreact",
], function (n, t, i, r, u) {
  "use strict";
  var f, o;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.QuickSettings = void 0;
  f = preact.createContext(null);
  o = function (n) {
    var t = n.model,
      i = preactHooks.useState(!0),
      r = i[0],
      u = i[1],
      o = t.LocStrings;
    return preact.h(
      f.Provider,
      { value: t },
      preact.h(
        "div",
        { className: "hb_sect_container hp_qs ".concat(r ? "expanded" : "") },
        preact.h(e, {
          id: "qs_hp_expando",
          title: o.LOC_HOMEPAGE_QS_TITLE,
          type: "chevron",
          icon: "hbic_homepage",
          onToggle: function (n) {
            u(n);
          },
          enabled: r,
          ariaControlsId: "hb_expandible",
        }),
        preact.h(
          "div",
          { id: "hb_expandible", className: "hb_expandible" },
          preact.h(l, null),
          preact.h(a, null),
          preact.h(v, null),
          preact.h(c, null),
          preact.h(p, null),
          preact.h(h, null)
        )
      ),
      preact.h(y, null)
    );
  };
  t.QuickSettings = o;
  var h = function () {
      var r = preactHooks.useContext(f).LocStrings,
        u = preactHooks.useContext(f),
        n = "BFBHP",
        t = "BFBUSR",
        o = sj_cook.get(t, n);
      if (o == "0")
        return preact.h(e, {
          id: "qs_bfb_ctrl",
          title: i.FormatWorkString(u, r.LOC_MSB_OPTIN_TOGGLE_TITLE),
          type: "toggle",
          enabled: !1,
          onToggle: function () {
            sj_cook.set(t, n, "1", !0, "/");
            location.reload();
          },
        });
    },
    c = function () {
      var n = preactHooks.useContext(f),
        t = r.useClientSettings(n),
        i = t.clientSettings,
        h = t.updateClientSettings,
        c = n.LocStrings,
        o = preactHooks.useState(!1),
        a = o[0],
        l = o[1],
        s;
      return (
        preactHooks.useEffect(function () {
          sj_evt.bind(
            "RewardsCookieUpdated",
            function () {
              return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function () {
                  return l(!0), [2];
                });
              });
            },
            1
          );
        }, []),
        (s = function () {
          return sj_cook.get("_RwBf", "g") == "1";
        }),
        s()
          ? preact.h(e, {
              id: "qs_gwb_ctrl",
              title: c.LOC_HOMEPAGE_QS_TOGGLEGWB,
              type: "toggle",
              enabled: i.Gwb == 0,
              onToggle: function (n) {
                h(__assign(__assign({}, i), { Gwb: n ? 0 : 1 }));
                u.logClick.apply(
                  void 0,
                  __spreadArray(
                    ["gwb"],
                    ["id", "Gwb_V2NSI_Toggle_Turn".concat(n ? "On" : "Off")],
                    !1
                  )
                );
              },
            })
          : void 0
      );
    },
    l = function () {
      var i = preactHooks.useContext(f),
        t = r.useClientSettings(i),
        n = t.clientSettings,
        u = t.updateClientSettings,
        o = preactHooks.useContext(f).LocStrings;
      return preact.h(e, {
        id: "qs_menu_ctrl",
        title: o.LOC_HOMEPAGE_QS_TOGGLENAV,
        type: "toggle",
        enabled: n.Sc.St == 0,
        onToggle: function (t) {
          u(
            __assign(__assign({}, n), {
              Sc: __assign(__assign({}, n.Sc), { St: t ? 0 : 1 }),
            })
          );
        },
      });
    },
    a = function () {
      var n = preactHooks.useContext(f),
        u = n.HasCarousel,
        o = n.LocStrings,
        i = r.useClientSettings(n),
        t = i.clientSettings,
        s = i.updateClientSettings;
      if (u)
        return preact.h(e, {
          id: "qs_carousel_ctrl",
          title: o.LOC_HOMEPAGE_QS_TOGGLECAROUSEL,
          type: "toggle",
          enabled: t.Pn.St < 2,
          onToggle: function (n) {
            s(
              __assign(__assign({}, t), {
                Pn: __assign(__assign({}, t.Pn), { St: n ? 0 : 2 }),
              })
            );
          },
        });
    },
    v = function () {
      var n = preactHooks.useContext(f),
        t = r.useClientSettings(n),
        i = t.clientSettings,
        u = t.updateClientSettings,
        o = n.LocStrings;
      return preact.h(e, {
        id: "qs_iotd_ctrl",
        title: o.LOC_HOMEPAGE_QS_TOGGLEIOTD,
        type: "toggle",
        enabled: i.Iotd == 0,
        onToggle: function (n) {
          u(__assign(__assign({}, i), { Iotd: n ? 0 : 1 }));
        },
      });
    },
    y = function () {
      if (r.useClientSideRender()) {
        var n = preactHooks.useContext(f),
          t = n.Footer,
          i = n.LocStrings,
          u = n.MediaContents,
          e = u[0].Ssd,
          o = e.match(/(\d{4})/),
          s = i.LOC_HOMEPAGE_COPYRIGHT_FORMAT.replace("{0}", o[1]);
        return preact.h(
          "div",
          { className: "hb_sect_container" },
          preact.h(
            "div",
            { className: "hb_section_nohover" },
            preact.h(
              "ul",
              { className: "menuFooter items" },
              t
                .filter(function (n) {
                  return n.Id.toLowerCase() != "sb_feedback";
                })
                .map(function (n, t, i) {
                  var r = i.length;
                  return preact.h(
                    "li",
                    { className: "item" },
                    preact.h(nt, {
                      Id: n.Id ? "menu_".concat(n.Id) : null,
                      BaseUrl: n.BaseUrl,
                      Text: n.Text,
                    }),
                    r - 1 != t
                      ? preact.h("label", { class: "separator" }, "•")
                      : null
                  );
                })
            ),
            preact.h("span", { className: "msft" }, s)
          )
        );
      }
    },
    p = function () {
      if (typeof chrome != "undefined" && chrome.embeddedSearch) {
        var n = preactHooks.useContext(f),
          t = r.useClientSettings(n),
          i = t.clientSettings,
          u = t.updateClientSettings,
          o = n.LocStrings;
        return preact.h(e, {
          id: "qs_mvs_ctrl",
          title: o.LOC_HOMEPAGE_QS_TOGGLEMVS,
          type: "toggle",
          enabled: i.Mvs == 0,
          onToggle: function (n) {
            u(__assign(__assign({}, i), { Mvs: n ? 0 : 1 }));
          },
        });
      }
    },
    w = function (n) {
      var t = n.enabled;
      return preact.h(
        "div",
        { className: "hb_value_col" },
        t
          ? preact.h("span", { className: "hbic_chevup" })
          : preact.h("span", { className: "hbic_chevdown" })
      );
    },
    b = function (n) {
      var t = n.enabled;
      return preact.h(
        "div",
        {
          className: "hb_value_col toggle_ctrl",
          style: { overflow: "visible" },
        },
        preact.h(
          "div",
          {
            className: "toggle_img ".concat(t ? "toggle_on" : ""),
            style: { top: 0, height: "100%" },
          },
          preact.h(
            "svg",
            { viewBox: "0 0 36 16", "enable-background": "new 0 0 36 16" },
            preact.h("path", {
              fill: t ? "#00809d" : "#919191",
              "stroke-miterlimit": "10",
              d: "M28 15.5h-20c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h20c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z",
            }),
            preact.h("circle", {
              style: { transition: "all .2s" },
              fill: "#fff",
              cx: t ? "28" : "8",
              cy: "8",
              r: "5",
            })
          )
        )
      );
    },
    k = function (n) {
      var t = n.icon;
      return preact.h(
        "div",
        { className: "hbic_col" },
        t ? preact.h("span", { className: t }) : null
      );
    },
    d = function (n) {
      var t = n.title;
      return preact.h("div", { className: "hb_title_col" }, t);
    },
    g = function (n) {
      var t = n.type,
        i = n.enabled;
      return t == "chevron"
        ? preact.h(w, { enabled: i })
        : t == "toggle"
        ? preact.h(b, { enabled: i })
        : void 0;
    },
    e = function (n) {
      var r = n.type,
        u = n.icon,
        f = n.title,
        t = n.enabled,
        i = n.onToggle,
        e = n.id,
        o = n.ariaControlsId,
        s =
          r == "toggle"
            ? { role: "button", "aria-pressed": t }
            : { role: "menuitem", "aria-expanded": t, "aria-controls": o };
      return preact.h(
        "div",
        __assign({ id: e, className: "hb_section", tabIndex: 0 }, s, {
          onClick: function () {
            i && i(!t);
          },
          onKeyPress: function () {
            i && i(!t);
          },
        }),
        preact.h(
          "div",
          { className: "hb_titlerow", style: { height: "auto !important" } },
          preact.h(k, { icon: u }),
          preact.h(d, { title: f }),
          preact.h(g, { type: r, enabled: t })
        )
      );
    },
    s = function (n) {
      sj_evt.fire("onHideMCP");
      sj_evt.fire("onMenuDismiss");
      mcp_banner !== undefined && mcp_banner(n);
    },
    nt = function (n) {
      var t = n.Id,
        i = n.BaseUrl,
        r = n.Text;
      return t == "sb_mcp" || t == "menu_sb_mcp"
        ? preact.h(
            "div",
            {
              class: "hb_section mcp_footer",
              tabIndex: 0,
              onClick: function () {
                s(i);
              },
              onKeyUp: function (n) {
                n.key == "Enter" && s(i);
              },
            },
            preact.h("span", null, r)
          )
        : i
        ? preact.h(
            "a",
            {
              id: t,
              href: i,
              role: "link",
              class: "hb_section menuFooterLink",
              tabIndex: 0,
            },
            r
          )
        : preact.h("span", { class: "menuFooterText", id: t }, r);
    };
});
define("Components/Core/Header/IdentityPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
  "Components/Core/Header/LanguageSwitcherPreact",
  "Components/Core/Header/QuickSettingsPreact",
], function (n, t, i, r, u, f) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Identity = void 0;
  var e = function () {
    var t = preactHooks.useContext(i.ModelContext).model,
      n = preactHooks.useRef(null),
      e = !1,
      o = function () {
        if (!e) {
          var n = document.createElement("div"),
            i = document.querySelector("#HBContent");
          i &&
            (i.appendChild(n),
            preact.render(preact.h(f.QuickSettings, { model: t }), n),
            (e = !0));
        }
      };
    return (
      preactHooks.useEffect(function () {
        var t = document.querySelector("#hpapp_id");
        n.current &&
          t &&
          t.children &&
          t.children.length > 0 &&
          (Array.prototype.slice.call(t.children).map(function (t) {
            n.current.appendChild(t);
          }),
          sj_evt && sj_evt.bind("id:refreshed", o),
          sj_evt && sj_evt.bind("hpqsOpened", o));
      }, []),
      t.IsSuperApp
        ? null
        : preact.h(
            r.Region,
            { nodeName: "IdControl", parentNodeName: "Header" },
            preact.h(
              "div",
              { id: "idCont", ref: n },
              preact.h(u.LanguageSwitcher, null)
            )
          )
    );
  };
  t.Identity = e;
});
define("Components/Core/LogoPreact", [
  "require",
  "exports",
  "Components/Core/HooksPreact",
], function (n, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.BingLogo = void 0;
  var r = function () {
    return preact.h(
      "h1",
      { className: "logo_cont", "aria-labelledby": "bLogo" },
      i.useClientSideRender()
        ? preact.h(
            "svg",
            {
              id: "bLogo",
              className: "logo",
              viewBox: "0 0 154 28",
              "aria-label": "Bing",
            },
            preact.h(
              "svg",
              { class: "squares" },
              preact.h("path", {
                class: "top_l",
                d: "M11.35 0H0v11.35h11.35z",
              }),
              preact.h("path", {
                class: "top_r",
                d: "M23.88 0H12.53v11.35h11.35z",
              }),
              preact.h("path", {
                class: "bom_l",
                d: "M11.35 12.53H0v11.35h11.35z",
              }),
              preact.h("path", {
                class: "bom_r",
                d: "M23.88 12.53H12.53v11.35h11.35z",
              })
            ),
            preact.h("path", {
              class: "ms_text",
              d: "M46.55 4.77V19.1h-2.48V7.87h-.05L39.59 19.1h-1.65L33.37 7.87h-.03V19.1h-2.3V4.77h3.57l4.11 10.62h.06l4.35-10.62zm2.08 1.1c0-.4.15-.74.44-1.01.29-.27.63-.4 1.03-.4a1.44 1.44 0 011.48 1.4c0 .4-.14.73-.43 1-.28.26-.64.4-1.05.4s-.76-.14-1.04-.41c-.29-.27-.43-.6-.43-.99zm2.67 2.96V19.1h-2.42V8.83zm7.34 8.51c.35 0 .75-.08 1.18-.24.44-.17.84-.39 1.2-.66v2.24c-.38.22-.82.4-1.3.5a7.2 7.2 0 01-1.62.17 4.97 4.97 0 01-3.7-1.43A4.99 4.99 0 0153 14.26c0-1.65.48-3.01 1.45-4.08.96-1.07 2.33-1.6 4.1-1.6a5.62 5.62 0 012.48.58v2.31a5 5 0 00-1.14-.63 3.32 3.32 0 00-1.2-.23c-.95 0-1.72.31-2.3.93s-.89 1.46-.89 2.51c0 1.04.29 1.85.85 2.43.56.58 1.33.86 2.3.86zm9.27-8.68a2.54 2.54 0 01.91.14v2.45a2.56 2.56 0 00-1.44-.4c-.6 0-1.1.26-1.5.76s-.62 1.27-.62 2.3v5.2h-2.42V8.82h2.42v1.62h.04c.22-.56.56-1 1-1.31.45-.32.98-.48 1.6-.48zm1.04 5.46c0-1.7.48-3.05 1.44-4.04s2.3-1.49 4-1.49c1.6 0 2.85.48 3.76 1.43s1.35 2.25 1.35 3.88c0 1.66-.48 2.99-1.44 3.97a5.22 5.22 0 01-3.92 1.48c-1.59 0-2.85-.47-3.79-1.4a5.17 5.17 0 01-1.4-3.83zm2.52-.08c0 1.07.24 1.89.73 2.46s1.18.84 2.09.84c.87 0 1.54-.28 2-.84s.7-1.41.7-2.52c0-1.1-.24-1.94-.72-2.5a2.48 2.48 0 00-2-.85c-.89 0-1.57.3-2.06.88-.5.6-.74 1.44-.74 2.53zm11.63-2.51c0 .35.1.62.33.82.22.2.7.44 1.46.74.96.39 1.64.82 2.03 1.3.39.49.58 1.07.58 1.76 0 .96-.37 1.74-1.11 2.33s-1.75.88-3.01.88a7.25 7.25 0 01-2.73-.56v-2.37c.44.3.91.55 1.42.73.5.18.97.27 1.38.27.55 0 .95-.08 1.21-.23.26-.16.39-.41.39-.77 0-.34-.14-.62-.4-.85-.28-.23-.79-.5-1.54-.8-.89-.37-1.52-.79-1.9-1.26s-.56-1.05-.56-1.77c0-.93.37-1.7 1.1-2.29.75-.6 1.7-.9 2.87-.9a7.06 7.06 0 012.33.44v2.3c-.32-.22-.7-.4-1.12-.56a3.74 3.74 0 00-1.27-.23c-.46 0-.82.1-1.07.27a.86.86 0 00-.4.75zm5.44 2.59c0-1.7.48-3.05 1.44-4.04a5.3 5.3 0 014-1.49c1.6 0 2.86.48 3.76 1.43s1.35 2.25 1.35 3.88c0 1.66-.48 2.99-1.44 3.97a5.22 5.22 0 01-3.91 1.48c-1.6 0-2.86-.47-3.8-1.4a5.17 5.17 0 01-1.4-3.83zm2.52-.08c0 1.07.24 1.89.73 2.46s1.18.84 2.1.84c.87 0 1.54-.28 2-.84s.7-1.41.7-2.52c0-1.1-.25-1.94-.72-2.5a2.48 2.48 0 00-2-.85c-.89 0-1.58.3-2.07.88a3.8 3.8 0 00-.74 2.53zm16.06-3.23h-3.6v8.3h-2.45v-8.3h-1.72V8.83h1.72V7.4a3.56 3.56 0 013.75-3.69c.3 0 .56.02.78.05.23.03.43.08.6.14v2.09a2.42 2.42 0 00-1.1-.27c-.51 0-.9.16-1.18.47-.27.32-.4.78-.4 1.4v1.25h3.6V6.53l2.42-.74v3.05H112v1.97h-2.45v4.8c0 .64.12 1.09.35 1.35.23.26.59.39 1.08.39a2.35 2.35 0 001.02-.34v2c-.15.09-.4.17-.76.24s-.7.1-1.06.1c-1.01 0-1.78-.26-2.29-.8-.5-.55-.76-1.36-.76-2.46v-5.28z",
            }),
            preact.h("path", {
              class: "b_text",
              d: "M117.5 19.24V5.07h4.5c1.37 0 2.46.3 3.26.9.8.6 1.2 1.38 1.2 2.34 0 .8-.23 1.5-.68 2.1a3.68 3.68 0 01-1.89 1.26v.04c.98.11 1.75.47 2.33 1.09.59.6.88 1.4.88 2.37 0 1.21-.48 2.2-1.43 2.94s-2.16 1.13-3.62 1.13zm2.35-12.28v4.03h1.52c.82 0 1.46-.2 1.92-.57.47-.4.7-.94.7-1.64 0-1.22-.81-1.82-2.43-1.82zm0 5.92v4.48h2c.88 0 1.56-.2 2.03-.6.48-.41.72-.97.72-1.68 0-1.47-1.01-2.2-3.05-2.2zM129.97 7c-.37 0-.7-.13-.96-.37-.27-.24-.4-.55-.4-.93s.13-.69.4-.94.59-.37.97-.37.71.12.98.37.4.57.4.94c0 .36-.13.66-.4.92-.27.25-.6.38-.99.38zm1.14 12.24h-2.29V9.12h2.3zM142.46 19.24h-2.29v-5.7c0-1.9-.67-2.84-2-2.84-.7 0-1.28.27-1.74.8a2.9 2.9 0 00-.68 1.97v5.77h-2.3V9.12h2.3v1.68h.04a3.6 3.6 0 013.28-1.92c1.1 0 1.94.36 2.52 1.08.58.71.87 1.74.87 3.1zM153.81 18.43c0 3.71-1.86 5.57-5.6 5.57a8.35 8.35 0 01-3.45-.66v-2.1c1.1.64 2.16.95 3.15.95 2.4 0 3.61-1.18 3.61-3.55v-1.1h-.04a3.71 3.71 0 01-3.42 1.93 3.72 3.72 0 01-2.98-1.34 5.49 5.49 0 01-1.13-3.63c0-1.72.4-3.08 1.22-4.1s1.92-1.52 3.34-1.52c1.33 0 2.32.55 2.97 1.64h.04v-1.4h2.3zm-2.27-3.82v-1.32c0-.71-.24-1.32-.71-1.82a2.3 2.3 0 00-1.76-.76c-.87 0-1.55.33-2.04.97a4.34 4.34 0 00-.74 2.69c0 1 .24 1.79.7 2.39.48.6 1.1.89 1.88.89.8 0 1.44-.29 1.93-.85.5-.58.74-1.3.74-2.2z",
            })
          )
        : null
    );
  };
  t.BingLogo = r;
});
define("Components/Core/Header/HeaderPreact", [
  "require",
  "exports",
  "InstrumentPreact",
  "Components/Core/Header/ScopesPreact",
  "Components/Core/Header/IdentityPreact",
  "Components/Core/LogoPreact",
  "Components/Core/ModelContextPreact",
  "Components/Core/UtilsPreact",
], function (n, t, i, r, u, f, e, o) {
  "use strict";
  var s, h;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.Header = void 0;
  s = function () {
    var n = preactHooks.useContext(e.ModelContext).model;
    return preact.h(
      i.Region,
      { nodeName: "Header", parentNodeName: "Core" },
      preact.h(
        "header",
        { className: "header", id: "hdr", "data-priority": "2" },
        preact.h(
          "div",
          { className: "head_cont" },
          preact.h(f.BingLogo, null),
          preact.h("div", { class: "scope_cont" }, preact.h(r.Scopes, null))
        ),
        preact.h(u.Identity, null),
        preact.h(h, null)
      )
    );
  };
  t.Header = s;
  h = function () {
    var n = preactHooks.useContext(e.ModelContext).model,
      r = n.IsMobile,
      u = n.InPrivate,
      t = n.LocStrings,
      i = preactHooks.useState(!0),
      f = i[0],
      s = i[1];
    return r || u || !n.DsbClickThru
      ? null
      : preact.h(
          "div",
          { id: "dsbflyout".concat(f ? "" : "_hide") },
          preact.h("div", {
            className: "close",
            onClick: function () {
              s(!1);
            },
          }),
          preact.h("div", { className: "rewards_maximal_asset" }),
          preact.h(
            "div",
            { className: "dsb_bottom_half" },
            preact.h(
              "span",
              { className: "big_white_text" },
              o.formatString(t.LOC_BIRTHDAY_CLICKTHRU_CLAIMTEXT, "100")
            ),
            preact.h(
              "a",
              {
                className: "rewards_button",
                href: "https://rewards.bing.com/Signout?redirectUrl=https://rewards.bing.com",
              },
              t.LOC_BIRTHDAY_CLICKTHRU_REWARDSTEXT
            ),
            preact.h(
              "a",
              {
                className: "news_feed_button",
                href: "https://www.msn.com/en-us/feed?ocid=winpsearchboxbd",
              },
              t.LOC_BIRTHDAY_CLICKTHRU_FEEDTEXT
            )
          )
        );
  };
});
define("Components/Core/SpecialExperience", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
], function (n, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.SpecialExperience = void 0;
  var r = function () {
    var n = preactHooks.useContext(i.ModelContext),
      t = n.model,
      r = n.widgetAccessible,
      u = t.IsWidgetCompatible,
      f = u && r ? "msnpeek" : "";
    return preact.h("div", {
      className: "hp_special_experience ".concat(f),
      "data-priority": "2",
    });
  };
  t.SpecialExperience = r;
});
define("MainPreact", [
  "require",
  "exports",
  "Components/Core/ModelContextPreact",
  "InstrumentPreact",
  "Components/Core/MediaPreact",
  "Components/Core/HooksPreact",
  "Components/Core/ScrollPreact",
  "Components/Core/Header/HeaderPreact",
  "Components/Core/SearchPreact",
  "Components/Core/SpecialExperience",
], function (n, t, i, r, u, f, e, o, s, h) {
  "use strict";
  var l, c;
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.HomepageApp = void 0;
  l = function (n) {
    var ht = n.__model,
      a = preactHooks.useState(ht),
      t = a[0],
      v = a[1],
      y = preactHooks.useState(!1),
      ct = y[0],
      lt = y[1],
      p = preactHooks.useState(!1),
      w = p[0],
      at = p[1],
      b = preactHooks.useState(!1),
      vt = b[0],
      yt = b[1],
      k = preactHooks.useState(null),
      pt = k[0],
      wt = k[1],
      d = preactHooks.useState(!1),
      bt = d[0],
      kt = d[1],
      g = preactHooks.useState("0"),
      dt = g[0],
      gt = g[1],
      nt = preactHooks.useState(!1),
      ni = nt[0],
      ti = nt[1],
      tt = preactHooks.useState(!1),
      ii = tt[0],
      ri = tt[1],
      it = preactHooks.useState(!1),
      ui = it[0],
      fi = it[1],
      rt = preactHooks.useState(!1),
      ei = rt[0],
      oi = rt[1],
      ut = preactHooks.useState(!1),
      si = ut[0],
      hi = ut[1],
      ft = preactHooks.useState(!0),
      ci = ft[0],
      li = ft[1],
      et = f.useClientSettings(t),
      ot = et.clientSettings,
      ai = et.updateClientSettings,
      l = f.useFetch("/hp/api/model");
    if (
      (preactHooks.useEffect(
        function () {
          var n = t.CarouselApiUrl,
            i = t.IsChromeNewTab,
            r = t.FormCode;
          l &&
            ((l.CarouselApiUrl = n),
            (l.IsChromeNewTab = i),
            (l.FormCode = r),
            v(l),
            (window._model = l));
        },
        [l]
      ),
      t)
    ) {
      var st = t.IsMobile,
        vi = st || ot.Iotd == 0,
        yi = st && w;
      return preact.h(
        i.ModelContext.Provider,
        {
          value: {
            model: t,
            updateModel: v,
            dimmer: ct,
            updateDimmer: lt,
            clientSettings: ot,
            updateClientSettings: ai,
            scrolled: w,
            updateScrolled: at,
            scrollPosition: pt,
            updateScrollPosition: wt,
            searchboxFixed: vt,
            updateSearchboxFixed: yt,
            carouselLoaded: bt,
            updateCarouselLoaded: kt,
            backgroundOpacity: dt,
            updateBackgroundOpacity: gt,
            isMsbReady: ni,
            updateIsMsbReady: ti,
            isMsbOptOut: ii,
            updateIsMsbOptOut: ri,
            isMsbPeekScroll: ui,
            updateIsMsbPeekScroll: fi,
            hasClonedToggle: ei,
            updateHasClonedToggle: oi,
            isTobDisabledOnClient: si,
            updateIsTobDisabledOnClient: hi,
            widgetAccessible: ci,
            updateWidgetAccessible: li,
          },
        },
        preact.h(
          r.Region,
          { nodeName: "Core" },
          preact.h(
            "div",
            {
              className: "hp_body "
                .concat(vi ? "" : "no_image", " ")
                .concat(yi ? "scrolled" : ""),
            },
            preact.h(u.MediaContainer, null),
            preact.h(c, null),
            preact.h(
              c,
              { className: "hp_cont", role: "main" },
              preact.h(o.Header, null),
              preact.h(s.SearchBox, null)
            ),
            preact.h(c, null, preact.h(h.SpecialExperience, null)),
            preact.h(c, null, preact.h(e.ScrollContainer, null)),
            preact.h(c, null)
          )
        )
      );
    }
  };
  t.HomepageApp = l;
  c = function (n) {
    var i = n.children,
      t = n.className,
      r = n.role;
    return preact.h(
      "div",
      { className: "hpl".concat(t ? " ".concat(t) : ""), role: r },
      i
    );
  };
});
define("App/default/AppPreact", ["require", "exports", "MainPreact"], function (
  n,
  t,
  i
) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  typeof window != "undefined" &&
    preact.hydrate(
      preact.h(i.HomepageApp, { __model: _model }),
      document.querySelector(".hpapp")
    );
});
