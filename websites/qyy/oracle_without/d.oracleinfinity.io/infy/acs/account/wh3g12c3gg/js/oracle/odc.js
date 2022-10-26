/*
 Copyright © 1995, 2021, Oracle and/or its affiliates. All rights reserved.

 For information, please see the following link:
 https://www.oracle.com/legal/copyright.html

 Oracle Infinity
 @preserve Copyright (c) 2017, 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 odc.js v1.0.7
 Created: 2022-03-02T13:42:33+0000
 Copyright © 2015, 2020, Oracle and/or its affiliates. All rights reserved.  mmapi v2.2 */
(function () {
  function k(E, u) {
    var C = { major: 1, minor: 0, inc: 7 },
      g = this,
      S = !1,
      T = 2e3,
      R = location.protocol,
      ea = "sizzle",
      ca = null,
      da = !1,
      V = !1,
      Z = !1,
      n = {};
    this.getTagId = function () {
      return "oracle";
    };
    this.inHead = function () {
      return V;
    };
    this.applyStyleSheet = function (a, b) {
      try {
        var c = u.getElementsByTagName("head")[0],
          e = u.createElement("style");
        e.type = "text/css";
        e.id = b;
        e.styleSheet
          ? (e.styleSheet.cssText = a)
          : e.appendChild(u.createTextNode(a));
        c.appendChild(e);
      } catch (d) {
        ORA.Debug.error(
          "applyStyleSheet:  Failed to failed to apply stylesheet",
          "004",
          d
        );
      }
    };
    this.removeStyleSheet = function (a) {
      try {
        var b = u.getElementById(a);
        "undefined" !== typeof b && null !== b && b.parentNode.removeChild(b);
      } catch (c) {
        ORA.Debug.debug("removeStyleSheet:  Failed to remove stylesheet");
      }
    };
    this.getSelector = function () {
      if ("sizzle" === ea) {
        if ("undefined" !== typeof Sizzle && ORA.hasVal(Sizzle)) return Sizzle;
        if ("undefined" !== typeof ORA.Sizzle) return ORA.Sizzle;
      } else {
        if (null !== ca) return ca;
        ORA.Debug.error("getSelector:  No Selector found", "003");
      }
      return !1;
    };
    this.setCustomSelector = function (a, b) {
      ea = a;
      ca = b;
    };
    this.hasVal = function (a) {
      return null !== a && "undefined" !== typeof a;
    };
    var ha = function (a, b, c) {
        a = g.hasVal(a) && "shift" !== b && !V;
        b = g.hasVal(b);
        c = g.hasVal(c);
        return a && b && c;
      },
      ia = function (a, b, c) {
        var e = "hideAndShow:  ";
        e = V ? e + "tag inHead" : e + "tag not inHead";
        e = c ? e + ", showing" : e + ", hiding";
        e = a && a.nodeName ? e + (", " + a.nodeName) : e + ", unnamed elem";
        return e + ('"  with type "' + b + ' "');
      },
      ja = function (a, b, c) {
        V
          ? a("body{ display: none !important}")
          : ((b.style.display = ""),
            c && (b.style.display = "none"),
            b === u.body || c || (u.body.style.display = ""));
      },
      ka = function (a, b, c) {
        V
          ? a("body{ visibility: hidden !important}")
          : ((b.style.visibility = "visible"),
            c || (b.style.visibility = "hidden"),
            (b.style.hidden = !c),
            b === u.body ||
              c ||
              ((u.body.style.visibility = "visible"),
              (u.body.style.hidden = !1)));
      },
      aa = function (a, b, c) {
        c
          ? (a = u.getElementById("ora_shiftStyle")) &&
            a.parentNode.removeChild(a)
          : ((a = u.getElementsByTagName("head")[0]),
            (b = u.createElement("style")),
            (b.type = "text/css"),
            (b.id = "ora_shiftStyle"),
            b.styleSheet
              ? (b.styleSheet.cssText =
                  "body{position:absolute !important; left: -1000% !important; visibility: hidden}")
              : b.appendChild(
                  u.createTextNode(
                    "body{position:absolute !important; left: -1000% !important;}"
                  )
                ),
            a.appendChild(b));
      },
      ba = function (a, b, c, e) {
        b = u.getElementById("ora_overlay");
        var d = u.getElementById("ora_overlayStyle");
        a = e;
        g.hasVal(e) && (a = "#ffffff");
        c && b
          ? (b.parentNode.removeChild(b), d && d.parentNode.removeChild(d))
          : c ||
            b ||
            (V &&
              g.Debug.error(
                "hideAndShow: Warning! tag detected in head, overlay mode may error out or cause flickering",
                "007"
              ),
            d ||
              ((c = u.createElement("style")),
              c.setAttribute("type", "text/css"),
              c.setAttribute("id", "ora_overlayStyle"),
              (a =
                "#ora_overlay{position:absolute;width:100%;height:100%;top:0px;right:0px;bottom:0px;left:0px;background-color:" +
                (a + ";z-index:2147483646}")),
              c.styleSheet
                ? (c.styleSheet.cssText = a)
                : c.appendChild(u.createTextNode(a)),
              u.getElementsByTagName("head")[0].appendChild(c)),
            g.hasVal(e)
              ? (b = u.createElement("div"))
              : ((b = u.createElement("iframe")), (b.frameBorder = 0)),
            (b.id = "ora_overlay"),
            u.getElementsByTagName("body")[0].appendChild(b));
      };
    this.hideAndShow = function (a, b, c) {
      try {
        if (ha(a, b, c)) {
          g.Debug.debug(ia(a, b, c));
          var e = function (d) {
            c ? g.removeStyleSheet("o_style") : g.applyStyleSheet(d, "o_style");
          };
          switch (b) {
            case "display":
              ja(e, a, c);
              break;
            case "visibility":
              ka(e, a, c);
              break;
            case "shift":
            case "supershift":
              aa(e, a, c);
              break;
            case "overlay":
              ba(e, a, c);
              break;
            case "none":
              ORA.Debug.trace("LOADER: type: none");
              break;
            default:
              g.Debug.debug(
                "hideAndShow did not contain a matching type, so not hiding/showing"
              );
          }
          e = {};
          e.displayType = b;
          e.display = c;
          g.fireEvent(
            new ORA.Event(ORA.Event.HIDESHOW, ORA.Event.STATUS_SUCCESS, a, e)
          );
        } else g.Debug.error("hideAndShow param list incomplete", "006");
      } catch (d) {
        g.Debug.error(
          "Failure in hide/show functionality.  Verify valid HTML syntax",
          "008",
          d
        );
      }
    };
    V = (function () {
      try {
        var a = u.getElementsByTagName("script");
        return "HEAD" === a[a.length - 1].parentNode.nodeName;
      } catch (b) {
        return (
          WT.Debug.error(
            "inHead: Failed to detect if in head, assuming inHead",
            "001",
            b
          ),
          !0
        );
      }
    })();
    var Q = function () {
        da ||
          ((da = !0),
          ORA.fireEvent(
            new ORA.Event(ORA.Event.DOM_READY, ORA.Event.STATUS_SUCCESS),
            !0
          ));
      },
      W = function () {
        Z ||
          ((Z = !0),
          ORA.fireEvent(
            new ORA.Event(ORA.Event.DOM_ONLOAD, ORA.Event.STATUS_SUCCESS),
            !0
          ));
      },
      l = function (a) {
        for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
          var e = [];
          e[0] = b[c].substring(0, b[c].indexOf("\x3d"));
          for (
            e[1] = b[c].substring(b[c].indexOf("\x3d") + 1);
            " " === e[0].charAt(0);

          )
            e[0] = e[0].substring(1, e[0].length);
          if (e[0] === a) return e[1];
        }
        return null;
      },
      x = function (a) {
        for (
          var b = document.getElementsByTagName("meta"), c = 0;
          c < b.length;
          c++
        )
          if (b[c].name === a) return b[c].content;
        return null;
      };
    this.execute = function (a) {
      Array.prototype.slice.call(arguments, 1);
      fireEventName(ORA.Event.LOADER_PRE_EXECUTE, a);
      fireEventName(ORA.Event.LOADER_EXECUTE, a);
    };
    this.loaderConversionTimeoutDefault = function () {
      return T;
    };
    this.setLoaderConversionTimeoutDefault = function (a) {
      T = a;
    };
    this.reset = function () {
      for (var a in n) n.hasOwnProperty(a) && n[a].reset();
      fireEventName(ORA.Event.LOADER_RESET, null);
    };
    this.pollForCondition = function (a, b, c) {
      var e = 200,
        d = function (h, f, v, r, G) {
          window.setTimeout(function () {
            e--;
            h()
              ? (g.Debug.trace(
                  "pollForCondition success result\x3d" + h(),
                  "LOADER"
                ),
                g.Debug.superfine(
                  "pollForCondition success condition\x3d" + h.toString(),
                  "LOADER"
                ),
                f &&
                  (f(),
                  g.Debug.trace("pollForCondition running callback", "LOADER"),
                  g.Debug.superfine(
                    "pollForCondition callback\x3d" + f.toString(),
                    "LOADER"
                  )))
              : 0 < e
              ? (g.Debug.trace(
                  "LOADER:  pollForCondition timeoutCount\x3d" + e
                ),
                d(h, f, v, e))
              : (g.Debug.error(
                  "pollForCondition Fail on " + h.toString(),
                  "009"
                ),
                v &&
                  (v(),
                  g.Debug.superfine(
                    "pollForCondition callbackFailure\x3d" + v.toString(),
                    "LOADER"
                  )));
          }, G);
        };
      d(a, b, c, e, 5);
    };
    this.paramsMerge = function (a, b, c) {
      var e = {};
      if (ORA.hasVal(a)) for (var d in a) a.hasOwnProperty(d) && (e[d] = a[d]);
      for (var h in b)
        ORA.hasVal(b[h]) &&
          b.hasOwnProperty(h) &&
          (ORA.hasVal(c) && ORA.hasVal(c[h]) ? (e[h] = c[h]) : (e[h] = b[h]));
      return e;
    };
    this.downloadLib = function (a, b, c, e, d, h) {
      h &&
        (g.Debug.info(
          "LOADER:  Start download: " +
            R +
            h +
            " \x26 attach to " +
            a +
            ", async\x3d" +
            d
        ),
        window.setTimeout(function () {
          var f = u.getElementsByTagName(a)[0],
            v = u.createElement("script");
          v.type = "text/javascript";
          v.src = R + h;
          v.setAttribute("async", d);
          v.setAttribute("defer", d);
          v.oraHasRun = !1;
          var r = function () {
            !1 === this.oraHasRun
              ? (b(),
                (this.oraHasRun = !0),
                g.Debug.info(
                  "Completed download: " +
                    R +
                    h +
                    ", callback running oraHasRun\x3d" +
                    this.oraHasRun,
                  "LOADER"
                ),
                g.Debug.superfine(
                  "downloadLib: successCallback\x3d" + b.toString(),
                  "LOADER"
                ))
              : g.Debug.trace(
                  "downloadLib: not running successCallback, since oraHasRun\x3d" +
                    this.oraHasRun,
                  "LOADER"
                );
          };
          b && ((v.onload = r), (v.onreadystatechange = r));
          v.onerror = function () {
            g.Debug.error(
              "FAILED download: " +
                R +
                h +
                " \x26 attach to " +
                a +
                ", async\x3d" +
                d,
              "010"
            );
            c &&
              (c(),
              g.Debug.superfine("failCallback: " + c.toString(), "LOADER"));
          };
          "undefined" !== typeof f
            ? f.appendChild(v)
            : g.Debug.info(
                "LOADER:  Dom element: " +
                  a +
                  " is not found so not Downloading"
              );
        }, e));
    };
    this.downloadLibs = function (a, b, c, e, d) {
      if ("undefined" === typeof d)
        g.Debug.info("LOADER:  downloadLibs srcs is empty");
      else {
        var h = {},
          f = function (r) {
            return function () {
              h[r] = "complete";
              g.Debug.trace(
                "LOADER:  downloadLibs is complete src:" + r + " \x3d " + d[r]
              );
            };
          },
          v;
        for (v in d)
          d.hasOwnProperty(v) &&
            ((h[v] = "waiting"),
            g.Debug.trace(
              "LOADER:  downloadLibs is waiting on src:" + v + " \x3d " + d[v]
            ),
            g.downloadLib(a, f(v), null, c, e, d[v]));
        g.pollForCondition(
          function () {
            for (var r in h)
              if (h.hasOwnProperty(r) && "complete" !== h[r]) return !1;
            return !0;
          },
          function () {
            g.Debug.debug("LOADER:  downloadLibs completed on all downloads");
            b();
          }
        );
      }
    };
    this.parseQueryString = function (a) {
      var b = a;
      (g.hasVal(a) && g.hasVal(a.location) && g.hasVal(a.location.search)) ||
        (b = document);
      a = function (c) {
        var e = c.split("\x26"),
          d = {};
        null !== e && 0 === e.length && (e = c.split(";"));
        if (null === e) return d;
        c = 0;
        e && (c = e.length - 1);
        for (var h = 0; h <= c; h++) {
          var f = e[h].split("\x3d");
          f[0] = unescape(f[0]);
          f[1] = unescape(f[1]);
          f[0] = f[0].replace(/\+/g, " ");
          f[1] = f[1].replace(/\+/g, " ");
          f[1] = f[1].replace(/<.*\?>/g, "");
          d[f[0]] = f[1];
        }
        return d;
      };
      return b.location.search
        ? ((b = b.location.search.substring(1, b.location.search.length)), a(b))
        : b.location.href
        ? ((b = b.location.href.split("?")), 2 === b.length ? a(b[1]) : null)
        : null;
    };
    this.abortModuleHelper = function (a, b) {
      ORA.fireEvent(
        new ORA.Event(
          a + "_" + ORA.Event.LOADER_MODULE_ABORT,
          ORA.Event.STATUS_SUCCESS
        )
      );
      ORA.setExecuteState(a, ORA.Event.LOADER_MODULE_ABORT);
      ORA.Debug.error("Aborting product: " + a, "011");
      ORA.Debug.error("LOADER Error", "011", b);
    };
    this.Event = function (a, b, c, e) {
      a && (a = a.toLowerCase());
      this.name = a;
      this.handler = null;
      this.state = ORA.Event.STATUS_UNKNOWN;
      b && (this.state = b);
      this.target = c;
      this.params = {};
      e && (this.params = e);
    };
    this.fireEventName = function (a, b) {
      ORA.fireEvent(
        new ORA.Event(a, ORA.Event.STATUS_SUCCESS, null, b),
        null,
        null,
        !0
      );
    };
    this.EventEngineClass = function () {
      var a = {},
        b = {},
        c = function (h, f, v, r) {
          S &&
            !r &&
            g.Debug.error(
              "fireEvent: Loader global abort, Aborted due to prior error",
              "012",
              null,
              "LOADER"
            );
          f.handler = h;
          f.params.eventID = new Date().getTime();
          r = "not set";
          v && (r = v);
          g.Debug.trace(
            "fireEvent: [name: " +
              f.name +
              "], state:" +
              f.state +
              "async[" +
              r +
              "]",
            "LOADER"
          );
          g.Debug.superfine("function:" + f.handler.toString() + "]", "LOADER");
          v
            ? window.setTimeout(
                (function (G, p) {
                  return function () {
                    G(p);
                  };
                })(h, f),
                0
              )
            : f.handler(f);
          return 1;
        },
        e = function (h, f, v, r, G) {
          for (var p = 0; p < b[h][G].length; p++)
            if (
              g.hasVal(b[h][G][p]) &&
              b[h][G][p].toString() === r.toString() &&
              !0 !== f
            ) {
              v = !0;
              break;
            }
          v ||
            (b[h][G].push(r),
            (f = "addEventHandler success handler" + b[h][G].length),
            (f += " for " + h + "\nhandler\x3d" + r.toString()),
            g.Debug.superfine(f, "LOADER"));
          return v;
        };
      a.addEventHandler = function (h, f, v, r) {
        var G = h;
        h = 0;
        var p = !1;
        if (!G || (!f && !v))
          return (
            g.Debug.debug(
              "events: Can not add event handler, missing name or listeners. ",
              "LOADER"
            ),
            -1
          );
        var A = (G = G.toLowerCase());
        b[A] || (b[A] = {});
        b[A].success || (b[A].success = []);
        b[A].fault || (b[A].fault = []);
        f && (p = e(G, r, !1, f, "success"));
        p || (h = 1);
        v && (p = e(G, r, !1, v, "fault"));
        p || (h += 1);
        r = G;
        if (b[r].queue && 0 !== b[r].queue.length)
          for (G = b[r].queue.length - 1; 0 <= G; G--)
            (p = b[r].queue[G]),
              f && "success" === p.event.state
                ? c(f, p.event, p.async, p.override)
                : v &&
                  "fault" === p.event.state &&
                  c(v, p.event, p.async, p.override),
              b[r].queue.splice(G, 1);
        return h;
      };
      var d = function (h, f, v) {
        for (var r = 0; r < b[h][v].length; r++)
          if (g.hasVal(b[h][v][r]) && b[h][v][r].toString() === f.toString())
            return b[h][v].splice(r, 1), 1;
        return 0;
      };
      a.removeEventHandler = function (h, f, v) {
        if (!h)
          return (
            g.Debug.trace(
              "LOADER removeEventHandler:  events: Can not remove event handler, missing event name."
            ),
            -1
          );
        h = h.toLowerCase();
        if (!b[h]) return 0;
        if (!f && !v) return delete b[h], 0;
        var r = 0;
        f && (r += d(h, f, "success"));
        v && (r += d(h, v, "fault"));
        return r;
      };
      a.fireEvent = function (h, f, v, r) {
        if (S && !v)
          return (
            g.Debug.error(
              "fireEvent: Loader global abort, Aborted due to prior error",
              "012",
              null,
              "LOADER"
            ),
            h.name
              ? g.Debug.error(
                  "fireEvent(event\x3d" +
                    h.name +
                    "): g_loaderAborted due to prior error",
                  "012",
                  null,
                  "LOADER"
                )
              : g.Debug.error(
                  "fireEvent: Aborted due to prior error, check error message for details.",
                  "012"
                ),
            -1
          );
        var G = h.name,
          p = h.state;
        var A = !!b[G],
          I = !(!A || !b[G][p]),
          F = !(!A || !b[G].queue);
        (I && 0 !== b[G][p].length) || !r
          ? A
            ? I
              ? (r = 1)
              : (g.Debug.trace(
                  "fireEvent: [name:" +
                    G +
                    ", state:" +
                    p +
                    "] no event handler was found",
                  "LOADER"
                ),
                (r = -1))
            : (g.Debug.trace(
                "fireEvent: [name: " + G + "], no registered event was found",
                "LOADER"
              ),
              (r = -1))
          : (g.Debug.trace(
              "fireEvent: [name: " +
                G +
                "], no registered event was found, enqueueing",
              "LOADER"
            ),
            A || (b[G] = {}),
            F || (b[G].queue = []),
            b[G].queue.push({ event: h, async: f, override: v }),
            (r = 0));
        if (0 >= r) return r;
        r = b[G][p];
        for (I = A = 0; I < r.length; I++)
          if (r[I])
            try {
              c(r[I], h, f, v), A++;
            } catch (U) {
              (F =
                "Unhandled Event Exception, [name: " +
                G +
                ", state: " +
                p +
                ", function: "),
                (F += h.handler.toString() + "]"),
                g.Debug.error(F, "013", U);
            }
        return A;
      };
      a.getEventHandlers = function () {
        return b;
      };
      a.length = function () {
        var h = 0,
          f;
        for (f in b) b.hasOwnProperty(f) && h++;
        return h;
      };
      a.addFireOnce = function (h, f, v) {
        var r = function () {
          f();
          a.removeEventHandler(h, r, v);
        };
        a.addEventHandler(h, r, v);
      };
      a.clearAllEventHandlers = function () {
        b = {};
      };
      return a;
    };
    var y = new this.EventEngineClass();
    this.addEventHandler = y.addEventHandler;
    this.removeEventHandler = y.removeEventHandler;
    this.fireEvent = y.fireEvent;
    this.addFireOnce = y.addFireOnce;
    this.clearAllEventHandlers = y.clearAllEventHandlers;
    this.Event.PREINIT = "preinit";
    this.Event.INIT = "init";
    this.Event.PRELOAD = "preload";
    this.Event.LOAD = "load";
    this.Event.POSTLOAD = "postload";
    this.Event.LOADER_ABORT = "loader_abort";
    this.Event.LOADER_MODULE_ABORT = "loader_module_abort";
    this.Event.DEBUGGER_CLEAR_COOKIES = "debugger_clear_cookies";
    this.Event.DEBUGGER_DUMP_PARAMS = "debugger_dump_params";
    this.Event.DEBUG_ERROR_OUT = "debug_error_out";
    this.Event.DOM_READY = "dom_ready";
    this.Event.DOM_ONLOAD = "dom_onload";
    this.Event.TIMER_EXPIRE = "timer_expire";
    this.Event.TIMER_CLEAR = "timer_clear";
    this.Event.STATUS_SUCCESS = "success";
    this.Event.STATUS_FAULT = "fault";
    this.Event.STATUS_UNKNOWN = "unknown";
    this.Event.PAGEVIEW = "pageview";
    this.Event.CONVERSION = "conversion";
    this.Event.DEBUGGER_CHECK_MODE = "debugger_check_mode";
    this.Event.SCRIPT_LOAD_COMPLETE = "script_load_complete";
    this.Event.HIDESHOW = "hide_show";
    this.Event.SET_CLIENT_ID = "set_client_id";
    this.Event.CLEAR_CLIENT_ID = "clear_client_id";
    this._Debug = function () {
      var a = -1;
      this._shutdown = !1;
      var b = [],
        c = this,
        e = function (d, h, f) {
          f && (h = f + ":  " + h);
          if (!(a < d) && "undefined" !== typeof console && console) {
            f = !0;
            switch (d) {
              case 0:
                console.error && (console.error(h), (f = !1));
                break;
              case 1:
                console.warn && (console.warn(h), (f = !1));
                break;
              case 2:
                console.info && (console.info(h), (f = !1));
                break;
              case 3:
              case 4:
              case 5:
                console.log && (console.log(h), (f = !1));
            }
            !0 === f && console.log && console.log(h);
          }
        };
      c.superfine = function (d, h) {
        e(5, d, h);
      };
      c.trace = function (d, h) {
        e(4, d, h);
      };
      c.debug = function (d, h) {
        e(3, d, h);
      };
      c.info = function (d, h) {
        e(2, d, h);
      };
      c.error = function (d, h, f, v) {
        var r = "";
        f &&
          ("string" === typeof f
            ? (r = "\n" + f)
            : f.toString
            ? ((r = f.toString()), f.stack && (r += ", [stack]: " + f.stack))
            : (r = f.message
                ? f.name
                  ? f.fileName
                    ? "\n" +
                      f.message +
                      " [" +
                      f.name +
                      "]\n (" +
                      f.fileName +
                      ":" +
                      f.lineNumber +
                      ")\n" +
                      f.stack
                    : "\n" + f.message + " [" + f.name + "]"
                  : f.fileName
                  ? "\n" +
                    f.message +
                    "\n (" +
                    f.fileName +
                    ":" +
                    f.lineNumber +
                    ")\n" +
                    f.stack
                  : "\n" + f.message
                : f.name
                ? f.fileName
                  ? "\n [" +
                    f.name +
                    "]\n (" +
                    f.fileName +
                    ":" +
                    f.lineNumber +
                    ")\n" +
                    f.stack
                  : "\n [" + f.name + "]"
                : f.fileName
                ? "\n\n (" + f.fileName + ":" + f.lineNumber + ")\n" + f.stack
                : "\n"));
        e(0, (h ? h + ": " : "") + d + r, v);
        ORA.fireEvent(
          new ORA.Event(ORA.Event.DEBUG_ERROR_OUT, ORA.Event.STATUS_SUCCESS, f)
        );
      };
      c.dir = function (d, h, f) {
        h && e(2, h, f);
        console && "function" === typeof console.dir
          ? console.dir(d)
          : c.dirStr(d);
      };
      c.dirStr = function (d, h) {
        var f = d || {},
          v = h || "",
          r;
        for (r in f)
          f.hasOwnProperty(r) &&
            "function" !== typeof f[r] &&
            c.debug("\t" + r + " : " + f[r], v);
      };
      c.setDebugLevel = function (d) {
        a = d;
      };
      c.getDebugLevel = function () {
        return a;
      };
      c.dumpParams = function () {
        var d = c.getConfigParams(),
          h;
        for (h in d)
          d.hasOwnProperty(h) &&
            "object" === typeof d[h] &&
            c.dir(d[h], "Config parameters", h);
        return d;
      };
      c.getConfigParams = function () {
        var d = {};
        d.loader = {
          version: C,
          versionStr: [C.major, C.minor, C.inc].join("."),
        };
        return d;
      };
      c.checkMode = function (d) {
        ORA.fireEvent(
          new ORA.Event(
            ORA.Event.DEBUGGER_CHECK_MODE,
            ORA.Event.STATUS_SUCCESS,
            { resetFlag: d }
          )
        );
      };
      c.getHistory = function () {
        return b;
      };
    };
    var t = function (a, b) {
        this._name = a;
        this._state = b;
        this._met = !1;
      },
      z = function (a, b, c) {
        var e = this,
          d = {},
          h = [];
        this.prodId = a;
        this.plugin = new b();
        this.executeState = z.WAITING;
        this.stopTime = this.startTime = this.timer = null;
        this.configName = "default";
        "undefined" !== typeof c && (this.configName = c);
        this.putDependency = function (f) {
          d[f._name] = f;
        };
        this.reset = function () {
          e.executeState = z.WAITING;
          d = {};
          h = [];
        };
        this.clearDependencies = function () {
          d = {};
        };
        this.getDependency = function (f) {
          for (var v in d)
            if (d.hasOwnProperty(v) && d[v]._name === f) return d[v];
          return null;
        };
        this.getDependents = function () {
          0 === h.length && (h = ORA.getDependents(e.prodId));
          return h;
        };
        this.updateDependents = function () {
          h = ORA.getDependents(e.prodId);
        };
        this.getExecuteState = function () {
          return this.executeState;
        };
        this.hasMetDeps = function () {
          for (var f in d)
            if (d.hasOwnProperty(f) && "" !== f && !0 !== d[f]._met)
              if (n[f].getExecuteState() === d[f]._state) d[f]._met = !0;
              else return !1;
          return !0;
        };
        this.updateDependencyState = function (f, v) {
          var r = e.getDependency(f);
          null !== r && r._state === v && (r._met = !0);
        };
        this._startTimer = function (f) {
          this.timer
            ? g.Debug.info(
                "LOADER:  " +
                  this.prodId +
                  " timer already started, using current timer."
              )
            : (g.Debug.debug("LOADER:  starting timer for " + e.prodId),
              (this.timer = window.setTimeout(function () {
                g.Debug.error(
                  "LOADER:  " + e.prodId + "module timer expired calling Abort",
                  "015"
                );
                g.fireEvent(
                  new ORA.Event(
                    e.prodId + "_" + ORA.Event.TIMER_EXPIRE,
                    ORA.Event.STATUS_SUCCESS
                  )
                );
                g.fireEvent(
                  new ORA.Event(
                    e.prodId + "_" + ORA.Event.LOADER_MODULE_ABORT,
                    ORA.Event.STATUS_SUCCESS
                  )
                );
              }, f)),
              (this.startTime = new Date()),
              g.Debug.info(
                "LOADER:  " +
                  this.prodId +
                  " timer started [" +
                  this.startTime +
                  "]."
              ));
        };
        this._clearTimer = function () {
          this.stopTime = new Date();
          this.timer && (clearTimeout(this.timer), (this.timer = null));
          g.Debug.info(
            "LOADER:  " + this.prodId + " timer cleared [" + this.stopTime + "]"
          );
        };
        this.tryExecPostload = function () {
          var f = e.getExecuteState() === z.READY,
            v = e.hasMetDeps(),
            r = void 0 !== e.plugin[ORA.Event.POSTLOAD];
          if (v && f && r)
            return (
              g.Debug.debug(
                "setExecuteState:  " +
                  e.prodId +
                  " has met all dependencies \x26\x26 ready, running postload"
              ),
              e.plugin[ORA.Event.POSTLOAD](),
              !0
            );
          if (v && f)
            return (
              ORA.Debug.superfine(e.prodId + ", has no postLoad section"), !0
            );
          ORA.Debug.superfine(
            e.prodId + ", did not meet postload exec conditionals"
          );
          return !1;
        };
      };
    z.WAITING = "waiting";
    z.DOWNLOADING = "downloading";
    z.READY = "ready";
    z.RUNNING = "running";
    z.ABORTED = "aborted";
    this.registerPlugin = function (a, b) {
      n[a.ProductName] = new z(a.ProductName, a, b);
      n[a.ProductName].executeState = z.WAITING;
      ORA.hasVal(a.prototype.abort) &&
        ORA.addEventHandler(
          a.ProductName + "_" + ORA.Event.LOADER_MODULE_ABORT,
          a.prototype.abort
        );
      if (
        ORA.hasVal(a.prototype.oraConfigObj) &&
        ORA.hasVal(a.prototype.oraConfigObj.s_dependencies)
      )
        for (
          var c = a.prototype.oraConfigObj.s_dependencies.split(","), e = 0;
          e < c.length;
          e++
        ) {
          var d = c[e].split(":");
          n[a.ProductName].putDependency(new t(d[0], d[1]));
        }
      for (var h in n) n.hasOwnProperty(h) && n[h].updateDependents();
      a.prototype &&
        a.prototype.oraConfigObj &&
        a.prototype.oraConfigObj.s_useTrackingPipeline &&
        !0 === a.prototype.oraConfigObj.s_useTrackingPipeline &&
        ((n[a.ProductName].useTrackingPipeline = !0),
        (c = a.prototype.oraConfigObj),
        ORA.hasVal(c.s_pageTimeout) && ORA.hasVal(c.s_TrackingPipelineTimeout)
          ? (n[a.ProductName].s_TrackingPipelineTimeout = Math.max(
              c.s_pageTimeout,
              c.s_TrackingPipelineTimeout
            ))
          : ORA.hasVal(c.s_pageTimeout)
          ? (n[a.ProductName].s_TrackingPipelineTimeout = c.s_pageTimeout)
          : ORA.hasVal(c.s_TrackingPipelineTimeout) &&
            (n[a.ProductName].s_TrackingPipelineTimeout =
              c.s_TrackingPipelineTimeout));
    };
    this.clearPlugins = function () {
      n = {};
    };
    this.hasMetDeps = function (a) {
      return n[a].hasMetDeps();
    };
    this.getDependents = function (a) {
      var b = [],
        c;
      for (c in n)
        n.hasOwnProperty(c) && null !== n[c].getDependency(a) && b.push(c);
      return b;
    };
    this.updateDependencies = function (a, b) {
      if (!a || !n[a]) return null;
      if (!b) return n[a].clearDependencies(), null;
      var c = b.split(",");
      if (!c || 0 === c.length) return null;
      n[a].clearDependencies();
      for (var e = 0; e < c.length; e++) {
        var d = c[e].split(":");
        if (2 === d.length) n[a].putDependency(new t(d[0], d[1]));
        else break;
      }
      return null;
    };
    var L = function (a) {
      var b = n[a];
      if (b.tryExecPostload()) {
        b.executeState = "running";
        a = b.getDependents(a);
        for (var c in a) a.hasOwnProperty(c) && L(a[c]);
      }
    };
    this.setExecuteState = function (a, b) {
      if (b === ORA.Event.LOADER_MODULE_ABORT) n[a].executeState = z.ABORTED;
      else if (g.getExecuteState(a) !== ORA.Event.LOADER_MODULE_ABORT) {
        n[a].executeState = b;
        g.Debug.trace("setExecuteState:  " + a + " to " + b);
        var c = n[a].getDependents(),
          e;
        for (e in c)
          c.hasOwnProperty(e) &&
            n.hasOwnProperty(c[e]) &&
            n[c[e]].updateDependencyState(a, b);
        L(a);
      }
    };
    this.getExecuteState = function (a) {
      return ORA.hasVal(n[a])
        ? n[a].executeState === z.ABORTED
          ? ORA.Event.LOADER_MODULE_ABORT
          : n[a].executeState
        : null;
    };
    this.isDependency = function (a) {
      for (var b in n)
        if (n.hasOwnProperty(b) && null !== n[b].getDependency(a))
          return (
            g.Debug.trace("isDependency:  " + a + " is dependency of " + b), !0
          );
      g.Debug.trace(
        "isDependency:  " + a + " is not a dependency of any product"
      );
      return !1;
    };
    this.getTrackingPipelineProducts = function () {
      var a = [],
        b;
      for (b in n)
        if (n.hasOwnProperty(b) && n[b].useTrackingPipeline) {
          var c = {};
          c.name = b;
          n[b].s_TrackingPipelineTimeout &&
            (c.timeout = n[b].s_TrackingPipelineTimeout);
          a.push(c);
        }
      return a;
    };
    this.getContextUrl = function (a, b) {
      return (
        "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/" +
        a +
        "-" +
        b +
        ".js"
      );
    };
    this.getProduct = function (a) {
      for (var b in n)
        if (n.hasOwnProperty(b) && a === n[b].prodId) return n[b];
      return null;
    };
    this.isProductEnabled = function (a) {
      a += "Module";
      return ORA[a] && ORA[a].prototype.oraConfigObj
        ? void 0 === ORA[a].prototype.oraConfigObj.enabled
          ? !0
          : ORA[a].prototype.oraConfigObj.enabled
        : !1;
    };
    this.isReady = function () {
      return da;
    };
    this.isLoaded = function () {
      return Z;
    };
    this.addDOMEvent = function (a, b, c) {
      try {
        return (
          a.addEventListener
            ? a.addEventListener(b, c, !1)
            : a.attachEvent
            ? a.attachEvent("on" + b, c)
            : eval("elm." + b + "\x3dfunc;"),
          0
        );
      } catch (e) {
        return -1;
      }
    };
    this.removeDOMEvent = function (a, b, c) {
      try {
        return (
          a.removeEventListener
            ? a.removeEventListener(b, c, !1)
            : a.detachEvent && a.detachEvent("on" + b, c),
          0
        );
      } catch (e) {
        return -1;
      }
    };
    this.getSafeEventName = function (a, b) {
      var c = b.substr(0, 2);
      if (a.addEventListener) {
        if ("on" === c) return b.substring(2);
      } else if (a.attachEvent && "on" !== c) return "on" + b;
      return b;
    };
    var N = function () {
        ("complete" !== document.readyState &&
          "undefined" !== typeof document.readyState) ||
          Q();
        document.addEventListener(
          "DOMContentLoaded",
          function () {
            document.removeEventListener(
              "DOMContentLoaded",
              arguments.callee,
              !1
            );
            Q();
          },
          !1
        );
        if (/WebKit|Opera/i.test(navigator.userAgent))
          var a = setInterval(function () {
            /loaded|complete/.test(document.readyState) &&
              (clearInterval(a), Q());
          }, 10);
      },
      D = function () {
        ("complete" !== document.readyState &&
          "loading" !== document.readyState) ||
          Q();
        document.attachEvent("onreadystatechange", function () {
          if (
            "complete" === document.readyState ||
            "loading" === document.readyState
          )
            document.detachEvent("onreadystatechange", arguments.callee), Q();
        });
      },
      M = function () {
        try {
          document.addEventListener && N(),
            document.attachEvent && D(),
            window.addEventListener
              ? window.addEventListener(
                  "load",
                  function () {
                    window.removeEventListener("load", arguments.callee, !1);
                    Q();
                  },
                  !1
                )
              : window.attachEvent &&
                window.attachEvent("onload", function () {
                  window.detachEvent("onload", arguments.callee, !1);
                  Q();
                }),
            Z
              ? W()
              : window.addEventListener
              ? window.addEventListener(
                  "load",
                  function () {
                    window.removeEventListener("load", arguments.callee, !1);
                    W();
                  },
                  !1
                )
              : window.attachEvent &&
                window.attachEvent("onload", function () {
                  window.detachEvent("onload", arguments.callee, !1);
                  W();
                });
        } catch (a) {
          Q(), W();
        }
      };
    g.Debug = new g._Debug();
    var H = this.parseQueryString(E);
    g.hasVal(H) &&
      g.hasVal(H["_ora.debug"]) &&
      g.Debug.setDebugLevel(H["_ora.debug"]);
    var O = function (a) {
        var b = {};
        a = a.split(/[;,]/);
        for (var c in a)
          if (a.hasOwnProperty(c)) {
            var e = a[c].split(":");
            b[e[0]] = e[1];
          }
        return b;
      },
      B = (function () {
        var a = l("_ora.context");
        var b = l("_ora.config");
        a = a || b || null;
        b = x("_ora.context");
        var c = x("_ora.config");
        b = b || c || null;
        c = H && (H["_ora.context"] || H["_ora.config"] || null);
        for (
          var e = document.getElementsByTagName("SCRIPT"),
            d,
            h = /_ora\.context=([^&]*)|_ora\.config=([^&]*)/g,
            f = 0;
          f < e.length && !d;
          f++
        )
          e[f].src && /odc\.js\?/.test(e[f].src) && (d = h.exec(e[f].src));
        if (null !== c) return O(c);
        if ("undefined" !== typeof a && null !== a) return O(a);
        if ("undefined" !== typeof b && null !== b) return O(b);
        if (d && 2 < d.length)
          return void 0 !== d[2]
            ? O(d[2])
            : void 0 !== d[1]
            ? O(d[1])
            : O(d[0]);
      })();
    if ("undefined" !== typeof B) {
      g.Debug.info("LOADER:  Found one or more context(s)");
      for (var J in B)
        B.hasOwnProperty(J) &&
          g.Debug.trace(
            'LOADER:  triggers have set contextTriggerMap "' +
              J +
              '":"' +
              B[J] +
              '"'
          );
    }
    var P = function (a) {
        return "undefined" !== typeof B &&
          "undefined" !== typeof n[a].configName &&
          "undefined" !== typeof B[a] &&
          B[a] === n[a].configName
          ? (g.Debug.trace(
              'LOADER:  context "' + n[a].configName + '" triggered for ' + a
            ),
            !0)
          : "undefined" === typeof B || "undefined" === typeof B[a]
          ? (g.Debug.trace("LOADER:  published context triggered for " + a), !0)
          : !1;
      },
      q = function (a) {
        g.Debug.error("Loader Error: " + a, "016");
      };
    g.Debug.info("LOADER:  Version " + [C.major, C.minor, C.inc].join("."));
    this.addEventHandler(
      this.Event.PREINIT,
      function () {
        var a = "unknown";
        try {
          for (a in n) {
            var b;
            if ((b = n.hasOwnProperty(a))) {
              var c = a;
              b =
                ORA.hasVal(n[c].plugin) &&
                ORA.hasVal(n[c].plugin[ORA.Event.PREINIT]);
            }
            b &&
              P(a) &&
              ORA.getExecuteState(a) !== ORA.Event.LOADER_MODULE_ABORT &&
              ((c = 'LOADER:  product "' + a + '" with context name "'),
              (c += n[a].configName + '" _preinit phase start'),
              g.Debug.trace(c),
              n[a].plugin[ORA.Event.PREINIT](),
              (c = 'LOADER:  product "' + a + '" with context name "'),
              (c += n[a].configName + '" _preinit phase complete'),
              g.Debug.trace(c));
          }
        } catch (e) {
          ORA.abortModuleHelper(a, e);
        }
      },
      function () {
        q("preinit fail");
      }
    );
    this.addEventHandler(
      this.Event.INIT,
      function () {
        var a = "unknown";
        try {
          for (a in n) {
            var b;
            if ((b = n.hasOwnProperty(a))) {
              var c = a;
              b =
                ORA.hasVal(n[c].plugin) &&
                ORA.hasVal(n[c].plugin[ORA.Event.INIT]);
            }
            b &&
              P(a) &&
              ORA.getExecuteState(a) !== ORA.Event.LOADER_MODULE_ABORT &&
              ((c = 'LOADER:  product "' + a + '" with context name "'),
              (c += n[a].configName + '" _init phase start'),
              g.Debug.trace(c),
              n[a].plugin[ORA.Event.INIT](),
              (c = 'LOADER:  product "' + a + '" with context name "'),
              (c += n[a].configName + '" _init phase complete'),
              g.Debug.trace(c));
          }
        } catch (e) {
          ORA.abortModuleHelper(a, e);
        }
      },
      function () {
        q("init fail");
      }
    );
    this.addEventHandler(
      this.Event.PRELOAD,
      function () {
        var a = "unknown";
        try {
          for (a in n) {
            var b;
            if ((b = n.hasOwnProperty(a))) {
              var c = a;
              b =
                ORA.hasVal(n[c].plugin) &&
                ORA.hasVal(n[c].plugin[ORA.Event.PRELOAD]) &&
                ORA.hasVal(n[c].plugin.oraConfigObj) &&
                !0 === n[c].plugin.oraConfigObj.doLoad;
            }
            b &&
              P(a) &&
              ORA.getExecuteState(a) !== ORA.Event.LOADER_MODULE_ABORT &&
              ((c = 'LOADER:  product "' + a + '" with context name "'),
              (c += n[a].configName + '" _preload phase start'),
              g.Debug.trace(c),
              n[a].plugin[ORA.Event.PRELOAD](),
              (c = 'LOADER:  product "' + a + '" with context name "'),
              (c += n[a].configName + '" _preload phase complete'),
              g.Debug.trace(c));
          }
        } catch (e) {
          ORA.abortModuleHelper(a, e);
        }
      },
      function () {
        q("preload fail");
      }
    );
    this.addEventHandler(
      this.Event.LOAD,
      function () {
        var a = "unknown";
        try {
          var b = function (d) {
              return function () {
                ORA.Debug.debug(d + " downloaded successfully");
              };
            },
            c = function (d) {
              d += "Module";
              return ORA[d] &&
                ORA[d].prototype.oraConfigObj &&
                ORA[d].prototype.oraConfigObj.loadPriority
                ? ORA[d].prototype.oraConfigObj.loadPriority
                : 0;
            },
            e = function (d) {
              var h;
              if ((h = n.hasOwnProperty(d)))
                h =
                  ORA.hasVal(n[d].plugin) &&
                  ORA.hasVal(n[d].plugin[ORA.Event.LOAD]) &&
                  ORA.hasVal(n[d].plugin.oraConfigObj) &&
                  !0 === n[d].plugin.oraConfigObj.doLoad;
              h &&
                P(d) &&
                ORA.getExecuteState(d) !== ORA.Event.LOADER_MODULE_ABORT &&
                (ORA.setExecuteState(d, z.DOWNLOADING),
                (h =
                  'LOADER:  product "' +
                  d +
                  '" with context name "' +
                  (n[d].configName + '" _load phase start')),
                g.Debug.trace(h),
                n[d].plugin[ORA.Event.LOAD](b(d)),
                (h =
                  'LOADER:  product "' +
                  d +
                  '" with context name "' +
                  (n[d].configName + '" _load phase complete')),
                g.Debug.trace(h));
            };
          for (a in n) n.hasOwnProperty(a) && c(a) && e(a);
          for (a in n) n.hasOwnProperty(a) && !c(a) && e(a);
        } catch (d) {
          ORA.abortModuleHelper(a, d);
        }
      },
      function () {
        q("load fail");
      }
    );
    this.addEventHandler(
      this.Event.LOADER_ABORT,
      function () {
        var a = "unknown";
        S = !0;
        g.Debug.error("Loader global abort event", "017");
        try {
          for (a in n)
            n.hasOwnProperty(a) &&
              ORA.hasVal(n[a].plugin) &&
              !0 === n[a].plugin.oraConfigObj.doLoad &&
              (ORA.fireEvent(
                new ORA.Event(
                  a + "_" + ORA.Event.LOADER_MODULE_ABORT,
                  ORA.Event.STATUS_SUCCESS
                ),
                !1,
                !0
              ),
              ORA.setExecuteState(a, ORA.Event.LOADER_MODULE_ABORT),
              ORA.clearTimer(a),
              ORA.Debug.error("Aborting product: " + a, "018"));
        } catch (b) {
          ORA.abortModuleHelper(a, b);
        }
      },
      function () {
        q("abort fail");
      }
    );
    var K = [];
    this.start = function () {
      var a = function () {
          g.fireEvent(
            new ORA.Event(ORA.Event.PREINIT, ORA.Event.STATUS_SUCCESS)
          );
          g.fireEvent(new ORA.Event(ORA.Event.INIT, ORA.Event.STATUS_SUCCESS));
          g.fireEvent(
            new ORA.Event(ORA.Event.PRELOAD, ORA.Event.STATUS_SUCCESS)
          );
          g.fireEvent(new ORA.Event(ORA.Event.LOAD, ORA.Event.STATUS_SUCCESS));
          g.Debug.debug(
            "LOADER:  Synchronous functionality has finished firing"
          );
        },
        b = function () {
          for (var c in B)
            if (B.hasOwnProperty(c)) {
              var e = g.getContextUrl(c, B[c]);
              "undefined" !== typeof e &&
                (g.Debug.debug("LOADER:  adding " + e + " to download"),
                K.push(e));
            }
        };
      try {
        M(),
          ORA.hasVal(B)
            ? (g.Debug.debug("LOADER:  contextTriggerMap contains contexts"),
              b(),
              g.downloadLibs("head", a, 0, !0, K))
            : a();
      } catch (c) {
        g.fireEvent(
          new ORA.Event(ORA.Event.LOADER_ABORT, ORA.Event.STATUS_SUCCESS)
        );
      }
    };
    this.productReady = function (a, b, c) {
      var e = n[a];
      c = c || "_product_ready";
      if (!e || (e.executeState !== z.READY && e.executeState !== z.RUNNING))
        e
          ? (ORA.addEventHandler(a + c, b),
            ORA.Debug.debug("attached lister for " + a + " " + c))
          : (ORA.Debug.debug(
              "product was not found attaching to " + a + " " + c
            ),
            ORA.addEventHandler(a + c, b, null, !0));
      else
        try {
          b();
        } catch (d) {
          ORA.Debug.debug(
            "User supplied product ready callback failed " + d.message
          );
        }
    };
    this.productReady.push = function (a) {
      ORA.productReady.apply(this, a);
      ORA.Debug.debug("productReady pushing function for " + a[0], "LOADER");
    };
    g.Debug.debug("ORA object created", "LOADER");
    g.Debug.info('To dump config params use: "ORA.Debug.dumpParams()"');
    g.Debug.info(
      'To check the mode use: "ORA.Debug.checkMode(false)" - Use true if you wish to reset the mode.'
    );
  }
  var m = function (E) {
    var u = [];
    try {
      for (; 0 < E.length; )
        (u = E.shift()),
          ORA.Debug.debug(
            "productReady queue found when loading for " + u[0],
            "LOADER"
          ),
          ORA.productReady.apply(this, u);
    } catch (C) {
      ORA.Debug.debug(
        "Error processing ORA.productReady queue " + C.message,
        "LOADER"
      );
    }
  };
  if (
    "undefined" === typeof ORA ||
    ("undefined" !== typeof ORA && !ORA.ready)
  ) {
    var w = [];
    "undefined" !== typeof ORA && ORA.productReady && (w = ORA.productReady);
    ORA = new k(window, window.document, window.navigator, window.location);
    m(w);
    ORA.ready = !0;
  } else
    console.error(
      "ORA global namespace already in use, Infinity not loaded/setup"
    );
})();
(function () {
  "undefined" !== typeof ORA &&
    !0 === ORA.ready &&
    (!0 === ORA.isInitCompleted
      ? ORA.Debug.error(
          "The tag is being loaded multiple times. Exiting second tag initialization request."
        )
      : ((ORA.isInitCompleted = !0),
        (ORA.registerPlugin = ORA.registerPlugin),
        (ORA.abortModuleHelper = ORA.abortModuleHelper),
        (ORA.setLoaderConversionTimeoutDefault =
          ORA.setLoaderConversionTimeoutDefault),
        (ORA.loaderConversionTimeoutDefault =
          ORA.loaderConversionTimeoutDefault),
        (ORA.downloadLib = ORA.downloadLib),
        (ORA.reset = ORA.reset),
        (ORA.productLoadInit = function () {
          ORA.analyticsModule = function () {};
          ORA.analyticsModule.prototype.oraConfigObj = {
            s_disableSeed: !1,
            alwaysLoad: !0,
            "ora-plugins": {
              cg: {
                enable: !0,
                cgDefs:
                  "wt.cg_l1 wt.cg_l2 wt.cg_l3 wt.cg_l4 wt.cg_l5 wt.cg_l6 wt.cg_l7 wt.cg_l8 wt.cg_l9 wt.cg_l10".split(
                    " "
                  ),
                blockCollect: !0,
              },
              evtTrack: {
                enable: !0,
                trackSocial: !0,
                standardEvents: {
                  anchor: !1,
                  onsite: !1,
                  offsite: !0,
                  rightclick: !1,
                  download: !0,
                  javascript: !1,
                  scrollTracking: !0,
                },
                downloadtypes:
                  "xls, doc, pdf, txt, csv, zip, docx, xlsx, rar, gzip, pptx",
              },
              yt: {
                enable: !0,
                legacy: !1,
                poll: !0,
                pctInc: 25,
                seek: !0,
                pause: !0,
                load: !1,
                cued: !1,
                loadMeta: !0,
                beacon: !0,
                mode: "auto",
                quartile: !0,
                buffering: !1,
                loadAPI: !1,
                bins: 15,
                beaconRate: 60,
                volume: !1,
              },
              fragment: {
                virtualPageView: !1,
                prefix: "anchor",
                blockCollect: !0,
                virtialDl: 26,
                paramHandeling: "addPrefix",
                addAnchorName: "name",
                applyClickEventOnly: !1,
              },
              bc: {
                enable: !0,
                poll: !1,
                pctInc: 25,
                beraconType: "auto",
                seek: !0,
                pollRate: 250,
                beaconCurve: {
                  300: 30,
                  60: 10,
                  600: 60,
                  130: 30,
                  420: 45,
                  1800: 150,
                },
                pause: !0,
                load: !1,
                cued: !1,
                loadMeta: !1,
                screenMode: !1,
                beacon: !0,
                maxBinds: 10,
                postMessage: !1,
                fixed: !1,
                playerId:
                  "div[id^\x3d'bcvid']:not([id$\x3d'_api']):not([id*\x3d'_component']):not(video)",
                quartile: !0,
                buffering: !1,
                bins: 15,
                beaconRate: 60,
                metaTags: !0,
                volume: !1,
              },
              heatmap: { enable: !0, maxymiserEnable: !0 },
              cookieCutter: {
                readCookies: [
                  { cookie: { TEST: "ora.cook_a" }, options: { persist: !0 } },
                  {
                    cookie: {
                      ORA_FPC: {
                        id: "ora.c_id",
                        ss: "ora.c_ss",
                        lv: "ora.c_lv",
                      },
                    },
                    options: { parseOn: ":", parseLv: "\x3d" },
                  },
                  {
                    cookie: {
                      ELOQUA: {
                        GUID: "ora.elq.vid",
                        FPCVISITED: "ora.eloqua_flag",
                      },
                    },
                    options: { parseOn: "\x26", persist: !0 },
                  },
                  {
                    cookie: {
                      utag_main: {
                        _ss: "ora.u_ss",
                        _st: "ora.u_st",
                        v_id: "ora.u_vid",
                        _sn: "ora.u_sn",
                        ses_id: "ora.u_ses_id",
                      },
                    },
                    options: { parseOn: "$", parseLv: ":", persist: !1 },
                  },
                  {
                    cookie: { WTPERSIST: { elqCid: "ora.elq.cid" } },
                    options: { parseOn: "\x26", parseLv: "\x3d" },
                  },
                ],
                enable: !0,
              },
              pp: {
                enable: !0,
                cookieDays: 365,
                priority: 100,
                lowerCaseValues: !0,
                defPrefix: "DCSext",
                params:
                  "dcsvid infy riid rid customer_id elqCID elqCid elq_cid elq_mid product".split(
                    " "
                  ),
                useMostRecent: !0,
                cookieName: "WTPERSIST",
              },
            },
            timezone: 0,
            enabled: !0,
            DNTBehavior: "honorDNT",
            skip_qp_no_equals: !0,
            s_dependencies: "common:running",
            "hosted-plugins": {
              InfinityPlugin: {
                enable: !0,
                src: "https://www.oracle.com/asset/web/analytics/infinity_common.js",
                blockCollect: !1,
              },
              infinity_click_tracking_ocom: {
                enable: !0,
                src: "https://www.oracle.com/asset/web/analytics/infinity_click_tracking_ocom.js",
                blockCollect: !1,
              },
            },
            defaultCollectionServer: "dc.oracleinfinity.io",
            s_useTrackingPipeline: !0,
            s_waitForSetClientId: !1,
            libUrl:
              "//d.oracleinfinity.io/infy/acs/account/wh3g12c3gg/js/oracle/analytics-production/analytics.js",
            accountGuid: "wh3g12c3gg",
            tagId: "oracle",
            secureCookie: !1,
            FPCConfig: { domain: ".oracle.com", sessionOnly: !1, autoTLD: !1 },
            cookieTypes: "firstpartyonly",
            destinations: [{ accountGuid: "wh3g12c3gg" }],
            s_TrackingPipelineTimeout: 4e3,
          };
          typeof ORA.analyticsModule.prototype.oraConfigObj.enabled &&
          !1 === ORA.analyticsModule.prototype.oraConfigObj.enabled
            ? ORA.Debug.debug(
                "analytics  module disabled - exiting module setup"
              )
            : ((ORA.analyticsModule.prototype.preinit = function () {
                try {
                  ORA.Debug.debug("PREINIT: Executing Preinit script");
                } catch (k) {
                  ORA.abortModuleHelper("analytics", k);
                }
              }),
              (ORA.analyticsModule.prototype.init = function () {
                try {
                  (this.oraConfigObj.key = "value"),
                    void 0 === this.oraConfigObj.doLoad &&
                      (this.oraConfigObj.doLoad = !0),
                    (this.oraConfigObj.doLoad =
                      this.oraConfigObj.doLoad || this.oraConfigObj.alwaysLoad);
                } catch (k) {
                  ORA.abortModuleHelper("analytics", k);
                }
              }),
              (ORA.analyticsModule.prototype.preload = function () {
                try {
                  var k = 0;
                  ORA.analyticsModule.prototype.oraConfigObj
                    .s_conversionTimeout &&
                    (k =
                      ORA.analyticsModule.prototype.oraConfigObj
                        .s_conversionTimeout);
                  ORA.setLoaderConversionTimeoutDefault(
                    Math.max(k, ORA.loaderConversionTimeoutDefault())
                  );
                  ORA.Debug.debug("PRELOAD:  Executing preload script");
                } catch (m) {
                  ORA.abortModuleHelper("analytics", m);
                }
              }),
              (ORA.analyticsModule.prototype.load = function (k) {
                try {
                  ORA.Debug.debug("LOAD:  Executing load phase"),
                    ORA.productReady.push([
                      "analytics",
                      function () {
                        var m = [
                          {
                            paramSrc: "source",
                            paramTarget: "ora.mc_l",
                            skipFirstEmpty: !0,
                            lowerCase: !1,
                          },
                        ];
                        ORA.analytics.addMutation(
                          "campaign_split",
                          function (w) {
                            try {
                              var E = w.payload;
                              for (w = 0; w <= m.length; w++)
                                if (void 0 !== E[m[w].paramSrc])
                                  for (
                                    var u = String(E[m[w].paramSrc]).split(
                                        m[w].seperator || ":"
                                      ),
                                      C = 0,
                                      g;
                                    0 < u.length;

                                  ) {
                                    g = u.shift();
                                    m[w].lowerCase && (g = g.toLowerCase());
                                    if (
                                      (void 0 !== g && "" !== g) ||
                                      0 !== C ||
                                      !0 !== m[w].skipFirstEmpty
                                    )
                                      "" === g && (g = "undefined"),
                                        (E[m[w].paramTarget + C.toString()] =
                                          g);
                                    C++;
                                  }
                            } catch (S) {
                              ORA.Debug.debug(
                                "campaign_split mutation error:" + S.message
                              );
                            }
                          }
                        );
                        ORA.analytics.addMutation(
                          "lowercase_gcm_uid",
                          function (w) {
                            try {
                              w.payload &&
                                w.payload["wt.gcm_uid"] &&
                                (w.payload["wt.gcm_uid"] =
                                  w.payload["wt.gcm_uid"].toLowerCase());
                            } catch (E) {
                              ORA.Debug.debug(
                                "lowercase_gcm_uid mutation error:" + E.message
                              );
                            }
                          }
                        );
                      },
                      "_ora_plugins_init",
                    ]),
                    ORA.downloadLib(
                      "head",
                      k,
                      function () {
                        ORA.fireEvent(
                          new ORA.Event(
                            "analytics_" + ORA.Event.LOADER_MODULE_ABORT,
                            ORA.Event.STATUS_SUCCESS
                          )
                        );
                      },
                      0,
                      !0,
                      this.oraConfigObj.libUrl
                    );
                } catch (m) {
                  ORA.abortModuleHelper("analytics", m);
                }
              }),
              (ORA.analyticsModule.prototype.postload = function () {
                ORA.Debug.debug(
                  "POSTLOAD:  Executing postload analytics complete"
                );
                try {
                  ORA.Debug.info(
                    "LOADER:  ORA.analyticsModule.prototype: postload"
                  ),
                    ORA.analytics.setup(
                      ORA.analyticsModule.prototype.oraConfigObj
                    );
                } catch (k) {
                  ORA.abortModuleHelper("analytics", k);
                }
              }),
              (ORA.analyticsModule.prototype.abort = function () {
                try {
                  ORA.Debug.debug("ABORT:  Executing analyticsModule abort");
                } catch (k) {
                  ORA.abortModuleHelper("analytics", k);
                }
              }));
          ORA.analyticsModule.ProductName = "analytics";
          ORA.registerPlugin(ORA.analyticsModule, "production");
          ORA.maxymiserModule = function () {};
          ORA.maxymiserModule.prototype.oraConfigObj = {
            request: {
              api: "//service.maxymiser.net/platform/us/api/",
              server: "//service.maxymiser.net/cg/v5us/?",
            },
            alwaysLoad: !0,
            enabled: !1,
            site: "oracle.com",
            s_dependencies: "",
            defaultCollectionServer: "dc.oracleinfinity.io",
            s_useTrackingPipeline: !1,
            hide: "body { opacity: .01 !important; pointer-events: none !important; user-select: none !important; }",
            libUrl:
              "//d.oracleinfinity.io/infy/acs/account/wh3g12c3gg/js/oracle/maxymiser-development/mmapi.js",
            accountGuid: "wh3g12c3gg",
            tagId: "oracle",
            beforeInit: "function(loader){ }",
            storage: { secure: !0 },
          };
          typeof ORA.maxymiserModule.prototype.oraConfigObj.enabled &&
          !1 === ORA.maxymiserModule.prototype.oraConfigObj.enabled
            ? ORA.Debug.debug(
                "maxymiser  module disabled - exiting module setup"
              )
            : ((ORA.maxymiserModule.prototype.preinit = function () {
                try {
                  ORA.Debug.debug("PREINIT: Executing Preinit script");
                  try {
                    var k = ORA.maxymiserModule.prototype.oraConfigObj;
                    ORA.maxymiserModule.prototype.oraConfigObj.maxymiser &&
                      (k =
                        ORA.maxymiserModule.prototype.oraConfigObj.maxymiser
                          .config);
                    for (var m in k)
                      if (
                        "string" === typeof k[m] &&
                        -1 < k[m].indexOf("function")
                      ) {
                        var w = k[m]
                            .substring(k[m].indexOf("(") + 1, k[m].indexOf(")"))
                            .split(","),
                          E = k[m].replace(/^function[^\{](.*?)\{|\}$/g, "");
                        k[m] = new Function(w, "{" + E + "}");
                      }
                  } catch (u) {
                    ORA.Debug.error(
                      "Maxymyser Module parsing functions: " + u.message,
                      ORA.maxymiserModule.ProductName
                    );
                  }
                } catch (u) {
                  ORA.abortModuleHelper("maxymiser", u);
                }
              }),
              (ORA.maxymiserModule.prototype.init = function () {
                try {
                  this.oraConfigObj.doLoad =
                    this.oraConfigObj.doLoad || this.oraConfigObj.alwaysLoad;
                } catch (k) {
                  ORA.abortModuleHelper("maxymiser", k);
                }
              }),
              (ORA.maxymiserModule.prototype.preload = function () {
                try {
                  var k = 0;
                  ORA.maxymiserModule.prototype.oraConfigObj
                    .s_conversionTimeout &&
                    (k =
                      ORA.maxymiserModule.prototype.oraConfigObj
                        .s_conversionTimeout);
                  ORA.setLoaderConversionTimeoutDefault(
                    Math.max(k, ORA.loaderConversionTimeoutDefault())
                  );
                  ORA.Debug.debug("PRELOAD:  Executing preload script");
                  try {
                    ORA.maxymiserModule.Start(),
                      ORA.fireEvent(
                        new ORA.Event(
                          ORA.maxymiserModule.ProductName +
                            "_" +
                            ORA.Event.MAXY_INIT_START,
                          ORA.Event.STATUS_SUCCESS
                        )
                      );
                  } catch (m) {
                    ORA.Debug.debug(
                      "Maxymyser Module Failed to Start witn error: " +
                        m.message,
                      ORA.maxymiserModule.ProductName
                    );
                  }
                } catch (m) {
                  ORA.abortModuleHelper("maxymiser", m);
                }
              }),
              (ORA.maxymiserModule.prototype.load = function (k) {
                try {
                  ORA.Debug.debug("LOAD:  Executing load phase"),
                    ORA.setExecuteState("maxymiser", "ready"),
                    ORA.Debug.debug("setProductReady()", "maxymiser");
                } catch (m) {
                  ORA.abortModuleHelper("maxymiser", m);
                }
              }),
              (ORA.maxymiserModule.prototype.postload = function () {
                ORA.Debug.debug(
                  "POSTLOAD:  Executing postload maxymiser complete"
                );
                try {
                  ORA.Debug.info(
                    "LOADER:  ORA.maxymiserModule.prototype: postload"
                  );
                } catch (k) {
                  ORA.abortModuleHelper("maxymiser", k);
                }
              }),
              (ORA.maxymiserModule.prototype.abort = function () {
                try {
                  ORA.Debug.debug("ABORT:  Executing maxymiserModule abort"),
                    ORA.fireEvent(
                      new ORA.Event(
                        ORA.maxymiserModule.ProductName +
                          "_" +
                          ORA.Event.LOADER_MODULE_ABORT,
                        ORA.Event.STATUS_SUCCESS
                      )
                    );
                } catch (k) {
                  ORA.abortModuleHelper("maxymiser", k);
                }
              }));
          (function (k) {
            function m(l) {
              return "function" === typeof l;
            }
            function w(l) {
              return "[object Array]" === Object.prototype.toString.call(l);
            }
            function E(l) {
              return "undefined" === typeof l;
            }
            function u(l) {
              return E(l) || null === l;
            }
            function C(l, x) {
              for (var y in l)
                Object.prototype.hasOwnProperty.call(l, y) && x(l[y], y);
            }
            function g(l) {
              var x = {};
              C(l, function (y, t) {
                x[t] = y;
              });
              return x;
            }
            function S(l) {
              l = JSON.parse('{"v":' + l + "}");
              return "v" in l ? l.v : l;
            }
            function T(l, x, y, t) {
              try {
                m(l) && l.apply(x, y);
              } catch (z) {
                m(t) && t(z);
              }
            }
            function R(l, x) {
              if (!u(l) && "object" !== typeof l && u(x)) return l;
              l = u(l) ? {} : l;
              x = u(x) ? {} : x;
              if ("object" !== typeof x) return x;
              var y = {};
              "object" === typeof l &&
                C(l, function (t, z) {
                  y[z] = t;
                });
              C(x, function (t, z) {
                y[z]
                  ? w(y[z]) && w(x[z])
                    ? (y[z] = y[z].concat(t))
                    : (y[z] = R(y[z], t))
                  : (y[z] = t);
              });
              return y;
            }
            function ea(l) {
              var x = this;
              this.enableUtility = function (y) {
                var t =
                  l.getParam("un", l.baseStorage.storeStrategy.persistent) ||
                  "";
                new RegExp("(^|,)" + y + "($|,)").test(t) ||
                  ((t = t.split(",")),
                  t.push(y),
                  l.setParam(
                    "un",
                    t.join(",").replace(/(^,)|(,$)/g, ""),
                    l.baseStorage.storeStrategy.persistent
                  ));
                return x;
              };
              this.disableUtility = function (y) {
                var t =
                  l.getParam("un", l.baseStorage.storeStrategy.persistent) ||
                  "";
                new RegExp("(^|,)" + y + "($|,)").test(t) &&
                  ((t = t
                    .replace(new RegExp("(^|,)" + y + "($|,)", "gi"), ",")
                    .replace(/(^,)|(,$)/g, "")),
                  l.setParam("un", t, l.baseStorage.storeStrategy.persistent));
                return x;
              };
              this.enable = function () {
                l.enable();
                return x;
              };
              this.disable = function () {
                l.disable();
                return x;
              };
              this.settings = l.settings;
            }
            function ca(l, x) {
              function y(q, K) {
                Object.prototype.hasOwnProperty.call(K, "un") &&
                  "string" === typeof K.un &&
                  ((q = 0 === q.indexOf("http:") ? q.substring(5) : q),
                  (q = 0 === q.indexOf("//") ? "https:" + q : q));
                return q;
              }
              function t(q) {
                if ("object" !== typeof q) return q;
                if (w(q)) return q.join(";");
                var K = [];
                C(q, function (a, b) {
                  w(a)
                    ? C(a, function (c) {
                        K.push(b + "\x3d" + c);
                      })
                    : K.push(b + "\x3d" + encodeURIComponent(a));
                });
                return K.join(";");
              }
              function z(q, K, a) {
                a = a || {};
                a.type = "text/javascript";
                a.id = q;
                a.src = K;
                if (B) {
                  q = P.getElementsByTagName("head")[0];
                  var b = P.createElement("script");
                  C(a, function (c, e) {
                    b.setAttribute(e, c);
                  });
                  q.insertBefore(b, q.lastChild);
                } else O(a);
              }
              function L(q) {
                var K = y(l.request.server, q),
                  a = [];
                C(q, function (b, c) {
                  a.push(
                    encodeURIComponent(c) + "\x3d" + encodeURIComponent(t(b))
                  );
                });
                return K + a.join("\x26");
              }
              function N(q, K, a) {
                (function (b, c) {
                  x.mmRequestCallbacks[b] = function (e) {
                    c(e);
                    delete x.mmRequestCallbacks[b];
                  };
                })(q, a);
                D(K, x.mmRequestCallbacks[q]);
              }
              function D(q, K) {
                var a = new x.XMLHttpRequest();
                a.withCredentials = !0;
                a.onreadystatechange = function () {
                  if (4 === this.readyState && 200 === this.status) {
                    var b = x.JSON.parse(this.responseText);
                    K(b);
                  } else 4 === this.readyState && 200 !== this.status && K(!1);
                };
                a.open("GET", q, !0);
                a.send();
              }
              function M(q, K, a) {
                var b = "mmrequest." + q;
                (function (c, e) {
                  x.mmRequestCallbacks[c] = function (d) {
                    e(d);
                    (d = P.getElementById(b)) &&
                      (d.parentNode
                        ? d.parentNode.removeChild(d)
                        : d.removeAttribute("src"));
                    delete x.mmRequestCallbacks[c];
                  };
                })(q, a);
                z(b, K, {
                  onerror: 'window["mmRequestCallbacks"][' + q + "](false);",
                });
              }
              var H = {},
                O,
                B,
                J = !1,
                P = x.document;
              this.loadPruh = function (q, K, a) {
                x.mmInitCallback = function (b) {
                  b(q, K, a);
                };
                z("MM.PRUH", l.request.api + "utils/pruh.js");
              };
              this.loadPackages = function (q, K, a) {
                var b = (K && K.Packages) || [],
                  c = b.length;
                if (0 < c && !J) {
                  x.mmInitCallback = function (d) {
                    d(q, K, {
                      skipResponseProcessing: !0,
                      skipPersistentData: !0,
                      useLoaderStorage: !0,
                      debug: H,
                    });
                    c--;
                    0 === c && ((J = !0), a(), delete x.mmInitCallback);
                  };
                  for (var e = 0; e < b.length; e++)
                    z(
                      "mmpack." + e,
                      0 === b[e].indexOf("//") ? b[e] : l.request.api + b[e]
                    );
                } else a();
              };
              this.request = function (q, K) {
                x.mmRequestCallbacks = x.mmRequestCallbacks || {};
                var a = q.ri;
                "json" !== l.request.response &&
                  (q.jsncl = "mmRequestCallbacks[" + a + "]");
                var b = L(q);
                "json" !== l.request.response ? M(a, b, K) : N(a, b, K);
              };
              this.setAsync = function (q) {
                B = q;
              };
              this.setSyncRequestFunction = function (q) {
                O = q;
              };
            }
            function da(l, x) {
              function y() {
                for (
                  var N = x.document.cookie.split(/;\s+/g), D = {}, M = 0;
                  M < N.length;
                  M++
                ) {
                  var H = N[M].split(/[;=]/);
                  1 < H.length && (D[H[0]] = H[1]);
                }
                return D;
              }
              var t = this,
                z = encodeURIComponent,
                L = decodeURIComponent;
              t.set = function (N, D, M, H) {
                H || (D = z(D));
                H = x.document;
                N =
                  z(N) +
                  "\x3d" +
                  D +
                  ";domain\x3d" +
                  l.storage.domain +
                  ";path\x3d/";
                M
                  ? ((D = new x.Date()),
                    D.setTime(D.getTime() + 864e5 * M),
                    (M = ";expires\x3d" + D.toGMTString()))
                  : (M = "");
                H.cookie =
                  N + M + (l.storage.secure ? ";secure;sameSite\x3dnone" : "");
                return t;
              };
              t.remove = function (N) {
                t.set(N, "", -1);
                return t;
              };
              t.removeAll = function (N) {
                if (N) {
                  var D = y();
                  C(D, function (M, H) {
                    new RegExp("^" + N).test(H) && t.remove(L(H));
                  });
                }
              };
              t.get = function (N, D) {
                var M = RegExp("([.$?*|{}()[]\\/+^])", "g");
                M = new RegExp(
                  "(?:^|; )" + z(N).replace(M, "\\$1") + "\x3d([^;]+)"
                );
                if ((M = x.document.cookie.match(M))) {
                  var H = M[1];
                  H = D ? H : L(H);
                }
                return H;
              };
              t.getAll = function (N, D) {
                if (N) {
                  var M = y();
                  var H = {};
                  C(M, function (O, B) {
                    new RegExp("^" + N).test(B) && (H[L(B)] = D ? O : L(O));
                  });
                }
                return H;
              };
              return this;
            }
            function V(l, x, y, t) {
              function z() {
                return x.storage.prefix + "." + y + ".";
              }
              function L(B) {
                return E(B) ? 0 : Math.min(x.storage.expiration, B);
              }
              function N(B) {
                var J = z();
                if (!B) {
                  B = J.replace(/\./g, "\\.");
                  B = l.getAll(B);
                  var P = J.length,
                    q = {};
                  C(B, function (K, a) {
                    q[a.substring(P)] = S(K);
                  });
                  return q;
                }
                return (J = l.get(J + B)) ? S(J) : J;
              }
              function D(B, J, P) {
                var q = z();
                null === J || E(J)
                  ? l.remove(q + B)
                  : ((J = JSON.stringify({ v: J })),
                    (J = J.substring(5, J.length - 1)),
                    l.set(q + B, J, L(P)));
              }
              function M(B) {
                if (B) {
                  if ((B = H[B]) && B.value) var J = B.value;
                } else
                  (J = {}),
                    C(H, function (P, q) {
                      J[q] = P.value;
                    });
                return J;
              }
              y = ("mmengine" === y ? "e" : null) || y || "def";
              var H = {},
                O;
              this.get = function (B) {
                return O ? M(B) : N(B);
              };
              this.set = function (B, J, P) {
                O
                  ? null === J || E(J)
                    ? delete H[B]
                    : (H[B] = { value: J, expires: L(P) })
                  : D(B, J, P);
                return this;
              };
              this.removeAll = function () {
                H = {};
                l.removeAll(z().replace(/\./g, "\\."));
                return this;
              };
              this.assignToMemory = function () {
                void 0 === O && (O = !0);
              };
              this.assignToCookies = function () {
                O = !1;
                C(H, function (B, J) {
                  D(J, B.value, B.expires);
                });
                H = {};
              };
            }
            function Z(l, x) {
              var y = this,
                t,
                z;
              this.hide = function (L) {
                u(t) &&
                  l.hide &&
                  l.hide.rule &&
                  ((z = L),
                  (L = x.document.getElementsByTagName("head")[0]),
                  (t = x.document.createElement("style")),
                  t.setAttribute("id", "mm_style_mm_hide"),
                  t.setAttribute("type", "text/css"),
                  (t.textContent = l.hide.rule),
                  L.insertBefore(t, L.lastChild),
                  u(l.hide.timeout) ||
                    x.setTimeout(function () {
                      m(z) && z();
                      y.show();
                    }, l.hide.timeout));
              };
              this.show = function () {
                z = null;
                if (!u(t)) {
                  var L = x.document.getElementsByTagName("head")[0];
                  L.contains(t) && L.removeChild(t);
                  t = null;
                }
              };
            }
            function n(l, x, y, t, z) {
              function L(p) {
                G && m(G.error) && G.error(p);
              }
              function N(p, A) {
                if (w(b[p]))
                  for (var I = b[p].slice(), F = 0; F < I.length; F++)
                    I[F].call({}, A);
              }
              function D(p) {
                p = p ? B(p) : {};
                var A = {};
                C(p, function (I, F) {
                  "mmcore." === F.substring(0, 7) && (A[F.substring(7)] = I);
                });
                return A;
              }
              function M() {
                var p = {},
                  A = z.screen;
                p.dmn = l.site;
                p.ref = v.referrer.substring(0, 256);
                p.page = r.href.substring(0, 1024);
                p.scrw = A.width;
                p.scrh = A.height;
                p.cok = q.baseStorage.testStorage();
                p.lver = "2.2";
                p.ri = a;
                p.lto = -new z.Date().getTimezoneOffset();
                A = "s";
                "jsonp-inline" === l.request.response && (A = "f");
                "json" === l.request.response && (A = "j");
                p.jrt = A;
                return p;
              }
              function H(p, A) {
                var I = p.ri;
                t.request(p, function (F) {
                  function U() {
                    Y ||
                      ((Y = !0),
                      t.loadPackages(q, F, function () {
                        var X = ((K[I - 1] = F) && F.PersistData) || [],
                          la =
                            (F &&
                              F.SystemData &&
                              F.SystemData[0] &&
                              F.SystemData[0].ResponseId) ||
                            0;
                        if (la >= f) {
                          for (var fa = X.length - 1; 0 <= fa; fa--)
                            q.setParam(
                              X[fa].Name,
                              X[fa].Value,
                              d.persistent,
                              X[fa].Expiration
                            );
                          f = la;
                        }
                        N("response", F);
                        A(!!F);
                        y.show();
                        N("responseExecuted", F);
                        t.setAsync(!0);
                      }));
                  }
                  var Y = !1;
                  P() || (E(h) ? U() : h(F, U));
                });
              }
              function O() {
                var p = {};
                return {
                  get: function (A) {
                    return A ? p[A] : p;
                  },
                  set: function (A, I, F) {
                    0 > parseInt(F) ? delete p[A] : (p[A] = I);
                  },
                  removeAll: function () {
                    p = {};
                  },
                };
              }
              function B(p) {
                p = p.split(/[?&]/);
                for (var A = {}, I, F, U = 0; U < p.length; U++)
                  if (p[U]) {
                    I = p[U].split("\x3d");
                    try {
                      F = decodeURIComponent(I[1] || "");
                    } catch (Y) {
                      F = I[1];
                    }
                    A[I[0]] = F;
                  }
                return A;
              }
              function J(p, A) {
                var I = {
                  settings: p,
                  setValidator: q.validateResponses,
                  on: function (F, U) {
                    q.on(F, function (Y) {
                      T(U, {}, [Y], L);
                    });
                  },
                  disable: function () {
                    t.setAsync(!0);
                    e[d.page].set("disabled", 1);
                  },
                  enable: function () {
                    1 === e[d.page].get("disabled") &&
                      (e[d.page].set("disabled", 0), A());
                  },
                  storage: {
                    assignToCookies: x.assignToCookies,
                    assignToMemory: x.assignToMemory,
                    clear: x.clear,
                    get: q.getParam,
                    set: q.setParam,
                    storeStrategies: g(d),
                  },
                };
                T(p.beforeInit, {}, [I], L);
                m(p.request.syncRequestFunction) &&
                  t.setSyncRequestFunction(p.request.syncRequestFunction);
                1 !== e[d.page].get("disabled") &&
                  t.setAsync(!m(p.request.syncRequestFunction));
              }
              function P() {
                return (
                  1 === e[d.persistent].get("disabled") ||
                  1 === e[d.page].get("disabled")
                );
              }
              this.version = "2.2";
              var q = this,
                K = [],
                a = 1,
                b = {},
                c = [],
                e = [],
                d = { persistent: 0, deferredRequest: 1, request: 2, page: 3 },
                h,
                f = 0,
                v = z.document,
                r = v.location,
                G = z.console;
              this.baseStorage = x.createBuilder();
              this.baseStorage.storeStrategy = d;
              this.settings = l;
              this.mergeParams = R;
              this.CGRequest = function (p, A) {
                if (!P()) {
                  p = p || function () {};
                  A = A || {};
                  var I = q.mergeParams(
                    M(),
                    q.mergeParams(
                      q.mergeParams(
                        c[d.persistent].get(),
                        q.mergeParams(
                          c[d.deferredRequest].get(),
                          q.mergeParams(c[d.page].get(), c[d.request].get())
                        )
                      ),
                      D(r.search)
                    )
                  );
                  I = q.mergeParams(I, A);
                  c[d.deferredRequest].removeAll();
                  c[d.request].removeAll();
                  N("request", { params: I });
                  H(I, p);
                  a++;
                }
                return this;
              };
              this.getResponses = function () {
                return K;
              };
              this.setParam = function (p, A, I, F) {
                c[I].set(p, A, E(F) ? l.storage.expiration : F);
                return this;
              };
              this.getParam = function (p, A) {
                return c[A].get(p);
              };
              this.removeParam = function (p, A) {
                c[A].set(p, "", -1);
                return this;
              };
              this.on = function (p, A) {
                b[p] && b[p].push(A);
                return q;
              };
              this.disable = function () {
                e[d.persistent].set("disabled", 1, 0);
                return this;
              };
              this.enable = function () {
                e[d.persistent].set("disabled", null, -1);
                return this;
              };
              this.validateResponses = function (p) {
                m(p) && (h = p);
              };
              this.calcCookieDomain =
                l.storage.domain || z.location.hostname.replace(/^www\./i, "");
              (function (p) {
                function A() {
                  (!P() || 1 < a) && q.CGRequest(void 0, {});
                }
                var I = D(r.search);
                if ("1" !== I.disabled) {
                  b.request = [];
                  b.response = [];
                  b.responseExecuted = [];
                  b.hideTimeout = [];
                  e[d.persistent] = q.baseStorage("ls");
                  e[d.page] = O();
                  c[d.persistent] = q.baseStorage("p");
                  c[d.deferredRequest] = q.baseStorage("d");
                  c[d.request] = O();
                  c[d.page] = O();
                  var F = D(v.referrer).pruh;
                  I = I.pruh;
                  var U = z.mmpruh,
                    Y = q.getParam("pruh", 0),
                    X = [];
                  F && X.push(F);
                  I && X.push(I);
                  U && X.push(U);
                  Y && X.push(Y);
                  F = X.join(",");
                  J(p, A);
                  y.hide(function () {
                    N("hideTimeout");
                  });
                  F ? t.loadPruh(q, F, A) : A();
                }
              })(l);
              return this;
            }
            function ha(l, x) {
              var y = this,
                t = x.location;
              t = {
                site: null,
                storage: {
                  domain: (
                    t.hostname.match(/^[\d.]+$|/)[0] ||
                    "." +
                      (t.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/) || [
                        t.hostname,
                      ])[0]
                  ).replace(/^www\./i, ""),
                  expiration: 365,
                  prefix: "mmapi",
                  secure: !0,
                },
                request: {},
                hide: { timeout: 2e3 },
              };
              t = R(t, l);
              C(t, function (z, L) {
                y[L] = z;
              });
            }
            function ia(l, x, y) {
              this.getStorage = function (t) {
                return new V(x, l, t, y);
              };
            }
            function ja(l, x, y, t) {
              function z() {
                var D = t.Date.now().toString().slice(-5);
                y.set(l.storage.prefix + ".tst", D, 10);
                D = y.get(l.storage.prefix + ".tst", !0) === D ? 1 : 0;
                y.remove(l.storage.prefix + ".tst");
                return D;
              }
              var L = [],
                N;
              this.createBuilder = function () {
                var D = function (M) {
                  M = x.getStorage(M);
                  N && M.assignToMemory();
                  L.push(M);
                  return M;
                };
                D.isSecure = l.storage.secure;
                D.testStorage = z;
                return D;
              };
              this.assignToMemory = function () {
                N = !0;
                for (var D = 0; D < L.length; D++) L[D].assignToMemory();
              };
              this.assignToCookies = function () {
                N = !1;
                for (var D = 0; D < L.length; D++) L[D].assignToCookies();
              };
              this.clear = function () {
                for (var D = 0; D < L.length; D++) L[D].removeAll();
              };
            }
            function ka() {
              if (!k.mmsystem) {
                var l = new ha(Q.prototype.oraConfigObj, k),
                  x = new da(l, k),
                  y = new ia(l, x, k);
                x = new ja(l, y, x, k);
                y = new Z(l, k);
                var t = new ca(l, k);
                l = new n(l, x, y, t, k);
                k.mmsystem = new ea(l);
                aa.common.TrackingPipeline.productIsReady(W);
                aa.fireEvent(
                  new ba(W + "_" + ba.MAXY_INIT_COMPLETE, ba.STATUS_SUCCESS)
                );
                aa.Debug.debug("setProductReady()", W);
              }
            }
            if (!k.mmsystem) {
              var aa = k.ORA,
                ba = aa.Event,
                Q = aa.maxymiserModule,
                W = "maxymiser";
              ba.MAXY_INIT_START = W + "_init_start";
              ba.MAXY_INIT_COMPLETE = W + "_init_complete";
              Q.Settings = ha;
              Q.BaseMMSystem = ea;
              Q.CookieManager = da;
              Q.CookieStorage = V;
              Q.ContentRequester = ca;
              Q.Loader = n;
              Q.StorageFactory = ia;
              Q.StorageManager = ja;
              Q.HidingModule = Z;
              Q.Start = ka;
            }
          })(window);
          ORA.maxymiserModule.ProductName = "maxymiser";
          ORA.registerPlugin(ORA.maxymiserModule, "development");
        }),
        (function () {
          var k = !0;
          ORA.sizzleModule = function () {};
          ORA.sizzleModule.prototype.oraConfigObj = {
            libUrl:
              "//d.oracleinfinity.io/infy/acs/common/js/lib/sizzle.min.js",
            doLoad: !0,
            s_dependencies: "",
          };
          ORA.sizzleModule.setLoaded = function (m) {
            k = m;
          };
          ORA.sizzleModule.getLoaded = function () {
            return k;
          };
          ORA.sizzleModule.prototype.load = function (m) {
            try {
              ORA.updateDependencies(
                "sizzle",
                this.oraConfigObj.s_dependencies
              ),
                "undefined" === typeof JSON && ORA.isDependency("sizzle")
                  ? (ORA.Debug.debug("Sizzle not detected"),
                    ORA.sizzleModule.setLoaded(!1),
                    ORA.downloadLib(
                      "head",
                      m,
                      function () {
                        ORA.abortModuleHelper(
                          "sizzle",
                          "failed to download sizzle"
                        );
                      },
                      0,
                      !0,
                      this.oraConfigObj.libUrl
                    ))
                  : (ORA.sizzleModule.setLoaded(!0),
                    ORA.setExecuteState("sizzle", "ready"));
            } catch (w) {
              ORA.abortModuleHelper("sizzle", w);
            }
          };
          ORA.sizzleModule.prototype.postload = function () {};
          ORA.sizzleModule.ProductName = "sizzle";
          ORA.registerPlugin(ORA.sizzleModule, "default");
        })(),
        (function () {
          var k = !0;
          ORA.jsonModule = function () {};
          ORA.jsonModule.prototype.oraConfigObj = {
            libUrl: "//d.oracleinfinity.io/infy/acs/common/js/lib/json2.js",
            doLoad: !0,
            s_dependencies: "",
          };
          ORA.jsonModule.setLoaded = function (m) {
            k = m;
          };
          ORA.jsonModule.getLoaded = function () {
            return k;
          };
          ORA.jsonModule.prototype.load = function (m) {
            try {
              ORA.updateDependencies("json", this.oraConfigObj.s_dependencies),
                "undefined" === typeof JSON && ORA.isDependency("json")
                  ? (ORA.Debug.debug("JSON not detected"),
                    ORA.jsonModule.setLoaded(!1),
                    ORA.downloadLib(
                      "head",
                      m,
                      function () {
                        ORA.abortModuleHelper(
                          "json",
                          "failed to download json"
                        );
                        ORA.abortModuleHelper(
                          "analytics",
                          "failed to download json"
                        );
                      },
                      0,
                      !0,
                      this.oraConfigObj.libUrl
                    ))
                  : (ORA.jsonModule.setLoaded(!0),
                    ORA.setExecuteState("json", "ready"));
            } catch (w) {
              ORA.abortModuleHelper("analytics", w);
            }
          };
          ORA.jsonModule.prototype.postload = function () {};
          ORA.jsonModule.ProductName = "json";
          ORA.registerPlugin(ORA.jsonModule, "default");
        })(),
        (function () {
          ORA.Event.BLUEKAI_DATA_READY = "bluekai_data_ready";
          var k = {},
            m = function () {};
          "undefined" === typeof Array.isArray &&
            (Array.isArray = function (g) {
              return "[object Array]" === Object.prototype.toString.call(g);
            });
          var w = function (g, S) {
              var T = S || "",
                R;
              for (R in g)
                g.hasOwnProperty(R) &&
                  (Array.isArray(g[R])
                    ? (k["ora." + T + "_" + R] = g[R].join(";"))
                    : "object" === typeof g[R]
                    ? w(g[R], T + "_" + R)
                    : (k["ora." + T + "_" + R] = g[R]));
              return null;
            },
            E = function (g) {
              var S = [],
                T;
              for (T in g)
                g.hasOwnProperty(T) &&
                  (S.push(String(T)), S.push(encodeURIComponent(g[T])));
              return S.join(",");
            },
            u = function (g) {
              g &&
                g.data &&
                "bluekai" === g.data.source &&
                (w(g.data, "odc"),
                "undefined" !== typeof ORA.setCookie
                  ? ORA.setCookie("bluekai_uid_plugin", E(k), "; path\x3d/")
                  : (document.cookie =
                      "bluekai_uid_plugin\x3d" + E(k) + "; path\x3d/"));
              m();
            },
            C = function () {
              window.addEventListener
                ? window.addEventListener("message", u, !1)
                : ORA.Debug.debug(
                    "bluekai reguires addEventListener support",
                    "LOADER-bluekai"
                  );
            };
          m = function () {
            ORA.Debug.debug(
              "Removing postMessage lister for bluekai data",
              "ANA-bluekai_uid_plugin"
            );
            window.removeEventListener
              ? window.removeEventListener("message", u)
              : window.removeEvent
              ? window.removeEvent("onmessage", u)
              : ORA.Debug.debug(
                  "Browser does not support Removing messageListeners - exiting",
                  "ANA-bluekai_uid_plugin"
                );
            ORA.fireEvent(
              new ORA.Event(
                ORA.Event.BLUEKAI_DATA_READY,
                ORA.Event.STATUS_SUCCESS
              )
            );
          };
          ORA && ORA.fireEvent && ORA.Debug && setTimeout(C, 1);
          window.ORA.bkLoader = C;
        })(),
        (function () {
          ORA.commonModule = function () {};
          ORA.Event.COMMON_LOAD_COMPLETE = "common_load_complete";
          ORA.Event.COMMON_ORA_PLUGINMGR_READY = "common_ora_pluginmgr_ready";
          ORA.Event.COMMON_HOSTED_PLUGINMGR_READY =
            "common_hosted_pluginmgr_ready";
          ORA.Event.COMMON_TRACKING_FLUSH = "common_tracking_flush";
          ORA.Event.COMMON_COM_EXEC_REQ = "common_com_exec_req";
          ORA.Event.COMMON_BEFORE_GETID = "common_before_getid";
          ORA.Event.COMMON_GETID = "common_get_id";
          ORA.Event.COMMON_PRODUCT_READY = "common_product_ready";
          ORA.commonModule.prototype.oraConfigObj = {
            libUrl: "//d.oracleinfinity.io/infy/acs/common/js/1.3.45/common.js",
            doLoad: !0,
            s_dependencies: "json:running",
          };
          ORA.commonModule.prototype.load = function (k) {
            try {
              (!ORA.hasVal(ORA.common) ||
                (ORA.hasVal(ORA.common) &&
                  !ORA.hasVal(ORA.common.TrackingPipeline))) &&
                ORA.isDependency("common") &&
                ORA.downloadLib(
                  "head",
                  k,
                  function () {
                    ORA.fireEvent(
                      new ORA.Event(
                        "common" + ORA.Event.LOADER_MODULE_ABORT,
                        ORA.Event.STATUS_SUCCESS
                      )
                    );
                  },
                  0,
                  !0,
                  this.oraConfigObj.libUrl
                );
            } catch (m) {
              ORA.abortModuleHelper("common", m);
            }
          };
          ORA.commonModule.prototype.postload = function () {
            ORA.common.setup();
          };
          ORA.commonModule.ProductName = "common";
          ORA.registerPlugin(ORA.commonModule, "default");
        })(),
        (function () {
          ORA.Event.ANA_LOAD_COMPLETE = "analytics_load_complete";
          ORA.Event.ANA_ORA_PLUGINS_LOADED = "analytics_ora_plugins_loaded";
          ORA.Event.ANA_HOSTED_PLUGINS_LOADED =
            "analytics_hosted_plugins_loaded";
          ORA.Event.ANA_ORA_PLUGINS_INIT = "analytics_ora_plugins_init";
          ORA.Event.ANA_HOSTED_PLUGINS_INIT = "analytics_hosted_plugins_init";
          ORA.Event.ANA_DCS_SETUP = "analytics_dcs_setup";
          ORA.Event.ANA_PRODUCT_READY = "analytics_product_ready";
          ORA.Event.ANA_SETUP_COMPLETE = "analytics_setup_complete";
          ORA.Event.ANA_BEFORE_PAGE_ANALYSIS = "analytics_before_page_analysis";
          ORA.Event.ANA_AFTER_PAGE_ANALYSIS = "analytics_after_page_analysis";
          ORA.Event.ANA_BEFORE_GETID = "analytics_before_getid";
          ORA.Event.ANA_AFTER_GETID = "analytics_after_getid";
          ORA.Event.ANA_PV_MUTATE = "analytics_pv_mutate";
          ORA.Event.ANA_DATA_SEND = "analytics_data_send";
          ORA.Event.LOADER_CLICK = "loader_click";
          ORA.Event.LOADER_PRE_EXECUTE = "loader_pre_execute";
          ORA.Event.LOADER_EXECUTE = "loader_execute";
          ORA.Event.LOADER_RESET = "loader_reset";
          ORA.Event.LOADER_COLLECT = "loader_collect";
          ORA.Event.LOADER_VIEW = "loader_view";
          ORA.getContextName = function () {
            return (
              (ORA.getProduct("analytics") &&
                ORA.getProduct("analytics").configName) ||
              ""
            );
          };
          ORA.getConfigName = function () {
            return (
              (ORA.getProduct("analytics") &&
                ORA.getProduct("analytics").configName) ||
              ""
            );
          };
          var k = function (m, w) {
            ORA.fireEvent(
              new ORA.Event(m, ORA.Event.STATUS_SUCCESS, null, w),
              null,
              null,
              !0
            );
          };
          ORA.collect = function (m) {
            k(ORA.Event.LOADER_COLLECT, m);
            return !0;
          };
          ORA.view = function (m) {
            k(ORA.Event.LOADER_VIEW, m);
            return !0;
          };
          ORA.click = ORA.sendEvent = function (m) {
            k(ORA.Event.LOADER_CLICK, m);
            return !0;
          };
          ORA.regPlugin = function (m, w, E) {
            var u = function () {
              ORA.Debug.debug(
                "regPlugin - call of deferred register of " + m,
                "LOADER"
              );
              void 0 === ORA.analytics.plugins[m]
                ? (ORA.Debug.debug("Registering init for " + m),
                  ORA.common.pluginMgr._regPlugin(m, w, E))
                : ORA.analytics.plugins[m] && ORA.analytics.plugins[m].src
                ? ((ORA.analytics.plugins[m].loaded = !0),
                  ORA.common.hostedPluginMgr._regPlugin(
                    m,
                    w,
                    E,
                    "hosted-plugins"
                  ))
                : ORA.common.pluginMgr._regPlugin(m, w, E);
            };
            ORA.common &&
            ORA.common.pluginMgr &&
            ORA.common.pluginMgr.isReady &&
            !0 === ORA.common.pluginMgr.isReady()
              ? (ORA.Debug.debug(
                  "ORA.common.pluginMgr exists so register is possible"
                ),
                u())
              : (ORA.Debug.debug(
                  "regPlugin - deferred register of " + m,
                  "LOADER"
                ),
                ORA.analytics.plugins[m] && ORA.analytics.plugins[m].src
                  ? ORA.addEventHandler(
                      ORA.Event.COMMON_HOSTED_PLUGINMGR_READY,
                      u,
                      null,
                      !0
                    )
                  : ORA.addEventHandler(
                      ORA.Event.COMMON_ORA_PLUGINMGR_READY,
                      u,
                      null,
                      !0
                    ));
          };
        })(),
        (function () {
          ORA.responsysModule = function () {};
          ORA.responsysModule.prototype.oraConfigObj = {
            doLoad: !0,
            s_dependencies: "",
            config: {
              cookie_name: "responsys_cookie_default",
              fallback_cookie_domain_level: 0,
              fallback_timeout: "2000",
              urlSuffix: "/pub/cc",
              responsysURL: "",
              additionalParms: "_pb_\x3dR\x26_tt_\x3dQ",
            },
          };
          ORA.responsysModule.prototype.moveAndToResp = function (k, m) {
            for (var w in k.config)
              k.config.hasOwnProperty(w) &&
                "" !== k.config[w] &&
                (m.config[w] = k.config[w]);
          };
          ORA.responsysModule.prototype.validateSettings = function (k) {
            k.config.responsysURL ||
              (ORA.debug(
                "missing required setting for responsysURL, disabling module",
                "responsys"
              ),
              (k.enabled = !1));
          };
          ORA.responsysModule.prototype.postload = function () {
            var k = function () {
                ORA.Debug.debug(
                  "responsysModule load pixel failed - fallback to standard cookie",
                  ORA.responsysModule.ProductName
                );
                ORA.responsysModule.prototype.cookieFallback();
              },
              m = function () {
                ORA.Debug.debug(
                  "responsysModule load pixel success",
                  ORA.responsysModule.ProductName
                );
              };
            try {
              if (this.responsysExists()) {
                var w =
                  this.prepareUrl() +
                  this.removeParameterList(
                    location.search,
                    this.oraConfigObj.config.additionalParms
                  );
                w +=
                  "\x26" +
                  this.oraConfigObj.config.additionalParms +
                  location.hash;
                this.responsysLoadPixel(
                  w,
                  m,
                  k,
                  this.oraConfigObj.config.fallback_timeout
                );
                return !0;
              }
              ORA.setExecuteState("responsysModule", "ready");
            } catch (E) {
              return (
                ORA.Debug.debug("responsysModule load error " + E.message), !1
              );
            }
          };
          ORA.responsysModule.prototype.load = function () {
            try {
              var k = {};
              if (
                ORA.analyticsModule &&
                ORA.analyticsModule.prototype &&
                ORA.analyticsModule.prototype.oraConfigObj &&
                ORA.analyticsModule.prototype.oraConfigObj.responsys
              ) {
                var m = ORA.responsysModule.prototype.oraConfigObj;
                k = ORA.analyticsModule.prototype.oraConfigObj.responsys;
                k.doLoad && (m.doLoad = k.doLoad);
                k.s_dependencies && (m.s_dependencies = k.s_dependencies);
                ORA.responsysModule.prototype.moveAndToResp(k, m);
                ORA.responsysModule.prototype.validateSettings(k);
              }
              void 0 !== k.enabled && k.enabled
                ? (ORA.updateDependencies(
                    "responsysModule",
                    "analytics:downloading"
                  ),
                  ORA.setExecuteState("responsysModule", "ready"))
                : ORA.debug("responsys module not enabled", "responsys");
            } catch (w) {
              ORA.Debug.debug("responsysModule load error " + w.message);
            }
          };
          ORA.responsysModule.prototype.responsysExists = function (k) {
            k = ORA.parseQueryString(k);
            return !!(k && k._ri_ && k._ei_);
          };
          ORA.responsysModule.prototype.responsysLoadPixel = function (
            k,
            m,
            w,
            E
          ) {
            var u = new Image(),
              C = !1;
            u.onload = function () {
              C ||
                ((C = !0),
                m(),
                ORA.Debug.debug(
                  "Responsys pixel loaded",
                  ORA.responsysModule.ProductName
                ));
            };
            u.onerror = function () {
              C ||
                ((C = !0),
                w(),
                ORA.Debug.debug(
                  "Responsys pixel load failed",
                  ORA.responsysModule.ProductName
                ));
            };
            window.setTimeout(function () {
              (C && 1 !== E) ||
                ((C = !0),
                ORA.Debug.debug(
                  "Responsys pixel load failed",
                  ORA.responsysModule.ProductName
                ),
                w());
            }, E);
            u.src = k;
          };
          ORA.responsysModule.prototype.cookieFallback = function (k) {
            var m = ORA.parseQueryString(k),
              w = this.oraConfigObj.config;
            k = w.cookie_name;
            m = "_ri_" + m._ri_ + "\x26_ei_" + m._ei_;
            var E = location.hostname.split(".");
            w = w.fallback_cookie_domain_level;
            var u = new Date(),
              C = "";
            for (u.setTime(u.getTime() + 63113851500); w; ) E.shift(), w--;
            E.join(".") !== location.host && (C = ";domain\x3d" + E.join("."));
            E = "; path\x3d/ ; expires\x3d " + u.toGMTString() + C;
            ORA.Debug.debug("Setting fallback cookie", "responsysModule");
            ORA.setCookie(k, m, E);
          };
          ORA.responsysModule.prototype.removeParameter = function (k, m) {
            var w = k.split("?");
            if (2 <= w.length) {
              for (
                var E = encodeURIComponent(m) + "\x3d",
                  u = w[1].split(/[&;]/g),
                  C = u.length;
                0 < C;

              )
                C--, -1 !== u[C].lastIndexOf(E, 0) && u.splice(C, 1);
              return 0 < u.length ? w[0] + u.join("\x26") : w[0];
            }
            return k;
          };
          ORA.responsysModule.prototype.removeParameterList = function (k, m) {
            for (var w = k, E = m.split("\x26"), u = 0; u < E.length; u++) {
              var C = E[u].split("\x3d");
              w = this.removeParameter(w, C[0]);
            }
            return "?" + w;
          };
          ORA.responsysModule.prototype.prepareUrl = function () {
            var k = this.oraConfigObj.config,
              m = k.responsysURL;
            k.urlBase && "" !== k.urlBase && (m = k.urlBase);
            return m + k.urlSuffix;
          };
          ORA.responsysModule.ProductName = "responsysModule";
          ORA.registerPlugin(ORA.responsysModule, "default");
        })(),
        ORA.productLoadInit(),
        ORA.start()));
})();
