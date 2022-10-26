(self.webpackChunkvk = self.webpackChunkvk || []).push([
  [7143],
  {
    956578: (t, e, n) => {
      "use strict";
      n.d(e, { BrowserBackend: () => _ });
      var r = n(66856),
        i = n(1984),
        s = n(909317),
        o = n(13819),
        a = n(808823),
        u = n(784773),
        c = n(220754),
        p = n(68690),
        d = n(620116),
        l = n(768131),
        _ = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.__extends)(e, t),
            (e.prototype.eventFromException = function (t, e) {
              return (0, u.eventFromException)(
                t,
                e,
                this._options.attachStacktrace
              );
            }),
            (e.prototype.eventFromMessage = function (t, e, n) {
              return (
                void 0 === e && (e = o.Severity.Info),
                (0, u.eventFromMessage)(t, e, n, this._options.attachStacktrace)
              );
            }),
            (e.prototype._setupTransport = function () {
              if (!this._options.dsn)
                return t.prototype._setupTransport.call(this);
              var e = (0, r.__assign)(
                  (0, r.__assign)({}, this._options.transportOptions),
                  {
                    dsn: this._options.dsn,
                    tunnel: this._options.tunnel,
                    sendClientReports: this._options.sendClientReports,
                    _metadata: this._options._metadata,
                  }
                ),
                n = (0, i.initAPIDetails)(e.dsn, e._metadata, e.tunnel),
                s = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(
                  n.dsn,
                  n.tunnel
                );
              if (this._options.transport)
                return new this._options.transport(e);
              if ((0, a.supportsFetch)()) {
                var o = (0, r.__assign)({}, e.fetchParameters);
                return (
                  (this._newTransport = (0, c.makeNewFetchTransport)({
                    requestOptions: o,
                    url: s,
                  })),
                  new p.FetchTransport(e)
                );
              }
              return (
                (this._newTransport = (0, d.makeNewXHRTransport)({
                  url: s,
                  headers: e.headers,
                })),
                new l.XHRTransport(e)
              );
            }),
            e
          );
        })(s.BaseBackend);
    },
    49680: (t, e, n) => {
      "use strict";
      n.d(e, { BrowserClient: () => l });
      var r = n(66856),
        i = n(840105),
        s = n(744219),
        o = n(82991),
        a = n(712343),
        u = n(956578),
        c = n(524326),
        p = n(986891),
        d = n(890564),
        l = (function (t) {
          function e(e) {
            void 0 === e && (e = {});
            return (
              (e._metadata = e._metadata || {}),
              (e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [
                  { name: "npm:@sentry/browser", version: i.SDK_VERSION },
                ],
                version: i.SDK_VERSION,
              }),
              t.call(this, u.BrowserBackend, e) || this
            );
          }
          return (
            (0, r.__extends)(e, t),
            (e.prototype.showReportDialog = function (t) {
              void 0 === t && (t = {}),
                (0, o.getGlobalObject)().document &&
                  (this._isEnabled()
                    ? (0, p.injectReportDialog)(
                        (0, r.__assign)((0, r.__assign)({}, t), {
                          dsn: t.dsn || this.getDsn(),
                        })
                      )
                    : c.IS_DEBUG_BUILD &&
                      a.logger.error(
                        "Trying to call showReportDialog with Sentry Client disabled"
                      ));
            }),
            (e.prototype._prepareEvent = function (e, n, r) {
              return (
                (e.platform = e.platform || "javascript"),
                t.prototype._prepareEvent.call(this, e, n, r)
              );
            }),
            (e.prototype._sendEvent = function (e) {
              var n = this.getIntegration(d.Breadcrumbs);
              n && n.addSentryBreadcrumb(e),
                t.prototype._sendEvent.call(this, e);
            }),
            e
          );
        })(s.BaseClient);
    },
    784773: (t, e, n) => {
      "use strict";
      n.d(e, {
        exceptionFromError: () => l,
        eventFromException: () => v,
        eventFromMessage: () => y,
        eventFromUnknownInput: () => m,
      });
      var r = n(66856),
        i = n(13819),
        s = n(567597),
        o = n(320535),
        a = n(90322),
        u = n(130360),
        c = n(362844),
        p = n(196893),
        d = n(34469);
      function l(t) {
        var e = h(t),
          n = { type: t && t.name, value: g(t) };
        return (
          e.length && (n.stacktrace = { frames: e }),
          void 0 === n.type &&
            "" === n.value &&
            (n.value = "Unrecoverable error caught"),
          n
        );
      }
      function _(t) {
        return { exception: { values: [l(t)] } };
      }
      function h(t) {
        var e = t.stacktrace || t.stack || "",
          n = (function (t) {
            if (t) {
              if ("number" == typeof t.framesToPop) return t.framesToPop;
              if (f.test(t.message)) return 1;
            }
            return 0;
          })(t);
        try {
          return (0, u.createStackParser)(
            d.opera10StackParser,
            d.opera11StackParser,
            d.chromeStackParser,
            d.winjsStackParser,
            d.geckoStackParser
          )(e, n);
        } catch (t) {}
        return [];
      }
      var f = /Minified React error #\d+;/i;
      function g(t) {
        var e = t && t.message;
        return e
          ? e.error && "string" == typeof e.error.message
            ? e.error.message
            : e
          : "No error message";
      }
      function v(t, e, n) {
        var r = m(t, (e && e.syntheticException) || void 0, n);
        return (
          (0, c.addExceptionMechanism)(r),
          (r.level = i.Severity.Error),
          e && e.event_id && (r.event_id = e.event_id),
          (0, p.resolvedSyncPromise)(r)
        );
      }
      function y(t, e, n, r) {
        void 0 === e && (e = i.Severity.Info);
        var s = E(t, (n && n.syntheticException) || void 0, r);
        return (
          (s.level = e),
          n && n.event_id && (s.event_id = n.event_id),
          (0, p.resolvedSyncPromise)(s)
        );
      }
      function m(t, e, n, i) {
        var u;
        if ((0, s.isErrorEvent)(t) && t.error) return _(t.error);
        if ((0, s.isDOMError)(t) || (0, s.isDOMException)(t)) {
          var p = t;
          if ("stack" in t) u = _(t);
          else {
            var d =
                p.name || ((0, s.isDOMError)(p) ? "DOMError" : "DOMException"),
              l = p.message ? d + ": " + p.message : d;
            (u = E(l, e, n)), (0, c.addExceptionTypeValue)(u, l);
          }
          return (
            "code" in p &&
              (u.tags = (0, r.__assign)((0, r.__assign)({}, u.tags), {
                "DOMException.code": "" + p.code,
              })),
            u
          );
        }
        return (0, s.isError)(t)
          ? _(t)
          : (0, s.isPlainObject)(t) || (0, s.isEvent)(t)
          ? ((u = (function (t, e, n) {
              var r = {
                exception: {
                  values: [
                    {
                      type: (0, s.isEvent)(t)
                        ? t.constructor.name
                        : n
                        ? "UnhandledRejection"
                        : "Error",
                      value:
                        "Non-Error " +
                        (n ? "promise rejection" : "exception") +
                        " captured with keys: " +
                        (0, o.extractExceptionKeysForMessage)(t),
                    },
                  ],
                },
                extra: { __serialized__: (0, a.normalizeToSize)(t) },
              };
              if (e) {
                var i = h(e);
                i.length && (r.stacktrace = { frames: i });
              }
              return r;
            })(t, e, i)),
            (0, c.addExceptionMechanism)(u, { synthetic: !0 }),
            u)
          : ((u = E(t, e, n)),
            (0, c.addExceptionTypeValue)(u, "" + t, void 0),
            (0, c.addExceptionMechanism)(u, { synthetic: !0 }),
            u);
      }
      function E(t, e, n) {
        var r = { message: t };
        if (n && e) {
          var i = h(e);
          i.length && (r.stacktrace = { frames: i });
        }
        return r;
      }
    },
    524326: (t, e, n) => {
      "use strict";
      n.d(e, { IS_DEBUG_BUILD: () => r });
      var r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    },
    986891: (t, e, n) => {
      "use strict";
      n.d(e, {
        shouldIgnoreOnError: () => _,
        wrap: () => f,
        injectReportDialog: () => g,
      });
      var r = n(66856),
        i = n(539666),
        s = n(1984),
        o = n(82991),
        a = n(320535),
        u = n(362844),
        c = n(712343),
        p = n(524326),
        d = (0, o.getGlobalObject)(),
        l = 0;
      function _() {
        return l > 0;
      }
      function h() {
        (l += 1),
          setTimeout(function () {
            l -= 1;
          });
      }
      function f(t, e, n) {
        if ((void 0 === e && (e = {}), "function" != typeof t)) return t;
        try {
          var s = t.__sentry_wrapped__;
          if (s) return s;
          if ((0, a.getOriginalFunction)(t)) return t;
        } catch (e) {
          return t;
        }
        var o = function () {
          var s = Array.prototype.slice.call(arguments);
          try {
            n && "function" == typeof n && n.apply(this, arguments);
            var o = s.map(function (t) {
              return f(t, e);
            });
            return t.apply(this, o);
          } catch (t) {
            throw (
              (h(),
              (0, i.withScope)(function (n) {
                n.addEventProcessor(function (t) {
                  return (
                    e.mechanism &&
                      ((0, u.addExceptionTypeValue)(t, void 0, void 0),
                      (0, u.addExceptionMechanism)(t, e.mechanism)),
                    (t.extra = (0, r.__assign)((0, r.__assign)({}, t.extra), {
                      arguments: s,
                    })),
                    t
                  );
                }),
                  (0, i.captureException)(t);
              }),
              t)
            );
          }
        };
        try {
          for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && (o[c] = t[c]);
        } catch (t) {}
        (0, a.markFunctionWrapped)(o, t),
          (0, a.addNonEnumerableProperty)(t, "__sentry_wrapped__", o);
        try {
          Object.getOwnPropertyDescriptor(o, "name").configurable &&
            Object.defineProperty(o, "name", {
              get: function () {
                return t.name;
              },
            });
        } catch (t) {}
        return o;
      }
      function g(t) {
        if ((void 0 === t && (t = {}), d.document))
          if (t.eventId)
            if (t.dsn) {
              var e = d.document.createElement("script");
              (e.async = !0),
                (e.src = (0, s.getReportDialogEndpoint)(t.dsn, t)),
                t.onLoad && (e.onload = t.onLoad);
              var n = d.document.head || d.document.body;
              n && n.appendChild(e);
            } else
              p.IS_DEBUG_BUILD &&
                c.logger.error("Missing dsn option in showReportDialog call");
          else
            p.IS_DEBUG_BUILD &&
              c.logger.error("Missing eventId option in showReportDialog call");
      }
    },
    890564: (t, e, n) => {
      "use strict";
      n.d(e, { Breadcrumbs: () => l });
      var r = n(66856),
        i = n(938641),
        s = n(13819),
        o = n(362844),
        a = n(409732),
        u = n(858464),
        c = n(216547),
        p = n(857321),
        d = n(82991),
        l = (function () {
          function t(e) {
            (this.name = t.id),
              (this._options = (0, r.__assign)(
                {
                  console: !0,
                  dom: !0,
                  fetch: !0,
                  history: !0,
                  sentry: !0,
                  xhr: !0,
                },
                e
              ));
          }
          return (
            (t.prototype.addSentryBreadcrumb = function (t) {
              this._options.sentry &&
                (0, i.getCurrentHub)().addBreadcrumb(
                  {
                    category:
                      "sentry." +
                      ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: (0, o.getEventDescription)(t),
                  },
                  { event: t }
                );
            }),
            (t.prototype.setupOnce = function () {
              this._options.console &&
                (0, a.addInstrumentationHandler)("console", _),
                this._options.dom &&
                  (0, a.addInstrumentationHandler)(
                    "dom",
                    (function (t) {
                      function e(e) {
                        var n,
                          r =
                            "object" == typeof t
                              ? t.serializeAttribute
                              : void 0;
                        "string" == typeof r && (r = [r]);
                        try {
                          n = e.event.target
                            ? (0, u.htmlTreeAsString)(e.event.target, r)
                            : (0, u.htmlTreeAsString)(e.event, r);
                        } catch (t) {
                          n = "<unknown>";
                        }
                        0 !== n.length &&
                          (0, i.getCurrentHub)().addBreadcrumb(
                            { category: "ui." + e.name, message: n },
                            { event: e.event, name: e.name, global: e.global }
                          );
                      }
                      return e;
                    })(this._options.dom)
                  ),
                this._options.xhr && (0, a.addInstrumentationHandler)("xhr", h),
                this._options.fetch &&
                  (0, a.addInstrumentationHandler)("fetch", f),
                this._options.history &&
                  (0, a.addInstrumentationHandler)("history", g);
            }),
            (t.id = "Breadcrumbs"),
            t
          );
        })();
      function _(t) {
        var e = {
          category: "console",
          data: { arguments: t.args, logger: "console" },
          level: (0, c.severityFromString)(t.level),
          message: (0, p.safeJoin)(t.args, " "),
        };
        if ("assert" === t.level) {
          if (!1 !== t.args[0]) return;
          (e.message =
            "Assertion failed: " +
            ((0, p.safeJoin)(t.args.slice(1), " ") || "console.assert")),
            (e.data.arguments = t.args.slice(1));
        }
        (0, i.getCurrentHub)().addBreadcrumb(e, {
          input: t.args,
          level: t.level,
        });
      }
      function h(t) {
        if (t.endTimestamp) {
          if (t.xhr.__sentry_own_request__) return;
          var e = t.xhr.__sentry_xhr__ || {},
            n = e.method,
            r = e.url,
            s = e.status_code,
            o = e.body;
          (0, i.getCurrentHub)().addBreadcrumb(
            {
              category: "xhr",
              data: { method: n, url: r, status_code: s },
              type: "http",
            },
            { xhr: t.xhr, input: o }
          );
        } else;
      }
      function f(t) {
        t.endTimestamp &&
          ((t.fetchData.url.match(/sentry_key/) &&
            "POST" === t.fetchData.method) ||
            (t.error
              ? (0, i.getCurrentHub)().addBreadcrumb(
                  {
                    category: "fetch",
                    data: t.fetchData,
                    level: s.Severity.Error,
                    type: "http",
                  },
                  { data: t.error, input: t.args }
                )
              : (0, i.getCurrentHub)().addBreadcrumb(
                  {
                    category: "fetch",
                    data: (0, r.__assign)((0, r.__assign)({}, t.fetchData), {
                      status_code: t.response.status,
                    }),
                    type: "http",
                  },
                  { input: t.args, response: t.response }
                )));
      }
      function g(t) {
        var e = (0, d.getGlobalObject)(),
          n = t.from,
          r = t.to,
          s = (0, o.parseUrl)(e.location.href),
          a = (0, o.parseUrl)(n),
          u = (0, o.parseUrl)(r);
        a.path || (a = s),
          s.protocol === u.protocol && s.host === u.host && (r = u.relative),
          s.protocol === a.protocol && s.host === a.host && (n = a.relative),
          (0, i.getCurrentHub)().addBreadcrumb({
            category: "navigation",
            data: { from: n, to: r },
          });
      }
    },
    869730: (t, e, n) => {
      "use strict";
      n.d(e, { Dedupe: () => s });
      var r = n(712343),
        i = n(524326),
        s = (function () {
          function t() {
            this.name = t.id;
          }
          return (
            (t.prototype.setupOnce = function (e, n) {
              e(function (e) {
                var s = n().getIntegration(t);
                if (s) {
                  try {
                    if (
                      (function (t, e) {
                        if (!e) return !1;
                        if (
                          (function (t, e) {
                            var n = t.message,
                              r = e.message;
                            if (!n && !r) return !1;
                            if ((n && !r) || (!n && r)) return !1;
                            if (n !== r) return !1;
                            if (!a(t, e)) return !1;
                            if (!o(t, e)) return !1;
                            return !0;
                          })(t, e)
                        )
                          return !0;
                        if (
                          (function (t, e) {
                            var n = u(e),
                              r = u(t);
                            if (!n || !r) return !1;
                            if (n.type !== r.type || n.value !== r.value)
                              return !1;
                            if (!a(t, e)) return !1;
                            if (!o(t, e)) return !1;
                            return !0;
                          })(t, e)
                        )
                          return !0;
                        return !1;
                      })(e, s._previousEvent)
                    )
                      return (
                        i.IS_DEBUG_BUILD &&
                          r.logger.warn(
                            "Event dropped due to being a duplicate of previously captured event."
                          ),
                        null
                      );
                  } catch (t) {
                    return (s._previousEvent = e);
                  }
                  return (s._previousEvent = e);
                }
                return e;
              });
            }),
            (t.id = "Dedupe"),
            t
          );
        })();
      function o(t, e) {
        var n = c(t),
          r = c(e);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        if (((n = n), (r = r).length !== n.length)) return !1;
        for (var i = 0; i < r.length; i++) {
          var s = r[i],
            o = n[i];
          if (
            s.filename !== o.filename ||
            s.lineno !== o.lineno ||
            s.colno !== o.colno ||
            s.function !== o.function
          )
            return !1;
        }
        return !0;
      }
      function a(t, e) {
        var n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        (n = n), (r = r);
        try {
          return !(n.join("") !== r.join(""));
        } catch (t) {
          return !1;
        }
      }
      function u(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      function c(t) {
        var e = t.exception;
        if (e)
          try {
            return e.values[0].stacktrace.frames;
          } catch (t) {
            return;
          }
        else if (t.stacktrace) return t.stacktrace.frames;
      }
    },
    652136: (t, e, n) => {
      "use strict";
      n.d(e, { GlobalHandlers: () => h });
      var r = n(66856),
        i = n(938641),
        s = n(13819),
        o = n(409732),
        a = n(567597),
        u = n(858464),
        c = n(712343),
        p = n(362844),
        d = n(784773),
        l = n(524326),
        _ = n(986891),
        h = (function () {
          function t(e) {
            (this.name = t.id),
              (this._installFunc = { onerror: f, onunhandledrejection: g }),
              (this._options = (0, r.__assign)(
                { onerror: !0, onunhandledrejection: !0 },
                e
              ));
          }
          return (
            (t.prototype.setupOnce = function () {
              Error.stackTraceLimit = 50;
              var t,
                e = this._options;
              for (var n in e) {
                var r = this._installFunc[n];
                r &&
                  e[n] &&
                  ((t = n),
                  l.IS_DEBUG_BUILD &&
                    c.logger.log("Global Handler attached: " + t),
                  r(),
                  (this._installFunc[n] = void 0));
              }
            }),
            (t.id = "GlobalHandlers"),
            t
          );
        })();
      function f() {
        (0, o.addInstrumentationHandler)("error", function (t) {
          var e = (0, r.__read)(m(), 2),
            n = e[0],
            i = e[1];
          if (n.getIntegration(h)) {
            var o = t.msg,
              u = t.url,
              c = t.line,
              p = t.column,
              l = t.error;
            if (
              !((0, _.shouldIgnoreOnError)() || (l && l.__sentry_own_request__))
            ) {
              var f =
                void 0 === l && (0, a.isString)(o)
                  ? (function (t, e, n, r) {
                      var i =
                          /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
                        s = (0, a.isErrorEvent)(t) ? t.message : t,
                        o = "Error",
                        u = s.match(i);
                      u && ((o = u[1]), (s = u[2]));
                      return v(
                        { exception: { values: [{ type: o, value: s }] } },
                        e,
                        n,
                        r
                      );
                    })(o, u, c, p)
                  : v(
                      (0, d.eventFromUnknownInput)(l || o, void 0, i, !1),
                      u,
                      c,
                      p
                    );
              (f.level = s.Severity.Error), y(n, l, f, "onerror");
            }
          }
        });
      }
      function g() {
        (0, o.addInstrumentationHandler)("unhandledrejection", function (t) {
          var e = (0, r.__read)(m(), 2),
            n = e[0],
            i = e[1];
          if (n.getIntegration(h)) {
            var o = t;
            try {
              "reason" in t
                ? (o = t.reason)
                : "detail" in t &&
                  "reason" in t.detail &&
                  (o = t.detail.reason);
            } catch (t) {}
            if ((0, _.shouldIgnoreOnError)() || (o && o.__sentry_own_request__))
              return !0;
            var u = (0, a.isPrimitive)(o)
              ? {
                  exception: {
                    values: [
                      {
                        type: "UnhandledRejection",
                        value:
                          "Non-Error promise rejection captured with value: " +
                          String(o),
                      },
                    ],
                  },
                }
              : (0, d.eventFromUnknownInput)(o, void 0, i, !0);
            (u.level = s.Severity.Error), y(n, o, u, "onunhandledrejection");
          }
        });
      }
      function v(t, e, n, r) {
        var i = (t.exception = t.exception || {}),
          s = (i.values = i.values || []),
          o = (s[0] = s[0] || {}),
          c = (o.stacktrace = o.stacktrace || {}),
          p = (c.frames = c.frames || []),
          d = isNaN(parseInt(r, 10)) ? void 0 : r,
          l = isNaN(parseInt(n, 10)) ? void 0 : n,
          _ = (0, a.isString)(e) && e.length > 0 ? e : (0, u.getLocationHref)();
        return (
          0 === p.length &&
            p.push({
              colno: d,
              filename: _,
              function: "?",
              in_app: !0,
              lineno: l,
            }),
          t
        );
      }
      function y(t, e, n, r) {
        (0, p.addExceptionMechanism)(n, { handled: !1, type: r }),
          t.captureEvent(n, { originalException: e });
      }
      function m() {
        var t = (0, i.getCurrentHub)(),
          e = t.getClient();
        return [t, e && e.getOptions().attachStacktrace];
      }
    },
    161634: (t, e, n) => {
      "use strict";
      n.d(e, { LinkedErrors: () => u });
      var r = n(66856),
        i = n(146769),
        s = n(938641),
        o = n(567597),
        a = n(784773),
        u = (function () {
          function t(e) {
            void 0 === e && (e = {}),
              (this.name = t.id),
              (this._key = e.key || "cause"),
              (this._limit = e.limit || 5);
          }
          return (
            (t.prototype.setupOnce = function () {
              (0, i.addGlobalEventProcessor)(function (e, n) {
                var i = (0, s.getCurrentHub)().getIntegration(t);
                return i
                  ? (function (t, e, n, i) {
                      if (
                        !(
                          n.exception &&
                          n.exception.values &&
                          i &&
                          (0, o.isInstanceOf)(i.originalException, Error)
                        )
                      )
                        return n;
                      var s = c(e, i.originalException, t);
                      return (
                        (n.exception.values = (0, r.__spread)(
                          s,
                          n.exception.values
                        )),
                        n
                      );
                    })(i._key, i._limit, e, n)
                  : e;
              });
            }),
            (t.id = "LinkedErrors"),
            t
          );
        })();
      function c(t, e, n, i) {
        if (
          (void 0 === i && (i = []),
          !(0, o.isInstanceOf)(e[n], Error) || i.length + 1 >= t)
        )
          return i;
        var s = (0, a.exceptionFromError)(e[n]);
        return c(t, e[n], n, (0, r.__spread)([s], i));
      }
    },
    653692: (t, e, n) => {
      "use strict";
      n.d(e, { TryCatch: () => c });
      var r = n(66856),
        i = n(82991),
        s = n(320535),
        o = n(130360),
        a = n(986891),
        u = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        c = (function () {
          function t(e) {
            (this.name = t.id),
              (this._options = (0, r.__assign)(
                {
                  XMLHttpRequest: !0,
                  eventTarget: !0,
                  requestAnimationFrame: !0,
                  setInterval: !0,
                  setTimeout: !0,
                },
                e
              ));
          }
          return (
            (t.prototype.setupOnce = function () {
              var t = (0, i.getGlobalObject)();
              this._options.setTimeout && (0, s.fill)(t, "setTimeout", p),
                this._options.setInterval && (0, s.fill)(t, "setInterval", p),
                this._options.requestAnimationFrame &&
                  (0, s.fill)(t, "requestAnimationFrame", d),
                this._options.XMLHttpRequest &&
                  "XMLHttpRequest" in t &&
                  (0, s.fill)(XMLHttpRequest.prototype, "send", l);
              var e = this._options.eventTarget;
              e && (Array.isArray(e) ? e : u).forEach(_);
            }),
            (t.id = "TryCatch"),
            t
          );
        })();
      function p(t) {
        return function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r = e[0];
          return (
            (e[0] = (0, a.wrap)(r, {
              mechanism: {
                data: { function: (0, o.getFunctionName)(t) },
                handled: !0,
                type: "instrument",
              },
            })),
            t.apply(this, e)
          );
        };
      }
      function d(t) {
        return function (e) {
          return t.apply(this, [
            (0, a.wrap)(e, {
              mechanism: {
                data: {
                  function: "requestAnimationFrame",
                  handler: (0, o.getFunctionName)(t),
                },
                handled: !0,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function l(t) {
        return function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r = this,
            i = ["onload", "onerror", "onprogress", "onreadystatechange"];
          return (
            i.forEach(function (t) {
              t in r &&
                "function" == typeof r[t] &&
                (0, s.fill)(r, t, function (e) {
                  var n = {
                      mechanism: {
                        data: {
                          function: t,
                          handler: (0, o.getFunctionName)(e),
                        },
                        handled: !0,
                        type: "instrument",
                      },
                    },
                    r = (0, s.getOriginalFunction)(e);
                  return (
                    r && (n.mechanism.data.handler = (0, o.getFunctionName)(r)),
                    (0, a.wrap)(e, n)
                  );
                });
            }),
            t.apply(this, e)
          );
        };
      }
      function _(t) {
        var e = (0, i.getGlobalObject)(),
          n = e[t] && e[t].prototype;
        n &&
          n.hasOwnProperty &&
          n.hasOwnProperty("addEventListener") &&
          ((0, s.fill)(n, "addEventListener", function (e) {
            return function (n, r, i) {
              try {
                "function" == typeof r.handleEvent &&
                  (r.handleEvent = (0, a.wrap)(r.handleEvent.bind(r), {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: (0, o.getFunctionName)(r),
                        target: t,
                      },
                      handled: !0,
                      type: "instrument",
                    },
                  }));
              } catch (t) {}
              return e.apply(this, [
                n,
                (0, a.wrap)(r, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: (0, o.getFunctionName)(r),
                      target: t,
                    },
                    handled: !0,
                    type: "instrument",
                  },
                }),
                i,
              ]);
            };
          }),
          (0, s.fill)(n, "removeEventListener", function (t) {
            return function (e, n, r) {
              var i = n;
              try {
                var s = i && i.__sentry_wrapped__;
                s && t.call(this, e, s, r);
              } catch (t) {}
              return t.call(this, e, i, r);
            };
          }));
      }
    },
    333931: (t, e, n) => {
      "use strict";
      n.d(e, { UserAgent: () => a });
      var r = n(66856),
        i = n(146769),
        s = n(938641),
        o = (0, n(82991).getGlobalObject)(),
        a = (function () {
          function t() {
            this.name = t.id;
          }
          return (
            (t.prototype.setupOnce = function () {
              (0, i.addGlobalEventProcessor)(function (e) {
                if ((0, s.getCurrentHub)().getIntegration(t)) {
                  if (!o.navigator && !o.location && !o.document) return e;
                  var n =
                      (e.request && e.request.url) ||
                      (o.location && o.location.href),
                    i = (o.document || {}).referrer,
                    a = (o.navigator || {}).userAgent,
                    u = (0, r.__assign)(
                      (0, r.__assign)(
                        (0, r.__assign)({}, e.request && e.request.headers),
                        i && { Referer: i }
                      ),
                      a && { "User-Agent": a }
                    ),
                    c = (0, r.__assign)((0, r.__assign)({}, n && { url: n }), {
                      headers: u,
                    });
                  return (0, r.__assign)((0, r.__assign)({}, e), {
                    request: c,
                  });
                }
                return e;
              });
            }),
            (t.id = "UserAgent"),
            t
          );
        })();
    },
    619011: (t, e, n) => {
      "use strict";
      n.d(e, {
        defaultIntegrations: () => S,
        init: () => b,
        showReportDialog: () => x,
        lastEventId: () => k,
        forceLoad: () => w,
        onLoad: () => I,
        flush: () => D,
        close: () => T,
        wrap: () => U,
      });
      var r = n(66856),
        i = n(242422),
        s = n(19116),
        o = n(367966),
        a = n(938641),
        u = n(82991),
        c = n(712343),
        p = n(196893),
        d = n(409732),
        l = n(49680),
        _ = n(524326),
        h = n(986891),
        f = n(653692),
        g = n(890564),
        v = n(652136),
        y = n(161634),
        m = n(869730),
        E = n(333931),
        S = [
          new i.InboundFilters(),
          new s.FunctionToString(),
          new f.TryCatch(),
          new g.Breadcrumbs(),
          new v.GlobalHandlers(),
          new y.LinkedErrors(),
          new m.Dedupe(),
          new E.UserAgent(),
        ];
      function b(t) {
        if (
          (void 0 === t && (t = {}),
          void 0 === t.defaultIntegrations && (t.defaultIntegrations = S),
          void 0 === t.release)
        ) {
          var e = (0, u.getGlobalObject)();
          e.SENTRY_RELEASE &&
            e.SENTRY_RELEASE.id &&
            (t.release = e.SENTRY_RELEASE.id);
        }
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
          void 0 === t.sendClientReports && (t.sendClientReports = !0),
          (0, o.initAndBind)(l.BrowserClient, t),
          t.autoSessionTracking &&
            (function () {
              if (void 0 === (0, u.getGlobalObject)().document)
                return void (
                  _.IS_DEBUG_BUILD &&
                  c.logger.warn(
                    "Session tracking in non-browser environment with @sentry/browser is not supported."
                  )
                );
              var t = (0, a.getCurrentHub)();
              if (!t.captureSession) return;
              B(t),
                (0, d.addInstrumentationHandler)("history", function (t) {
                  var e = t.from,
                    n = t.to;
                  void 0 !== e && e !== n && B((0, a.getCurrentHub)());
                });
            })();
      }
      function x(t) {
        void 0 === t && (t = {});
        var e = (0, a.getCurrentHub)(),
          n = e.getScope();
        n &&
          (t.user = (0, r.__assign)((0, r.__assign)({}, n.getUser()), t.user)),
          t.eventId || (t.eventId = e.lastEventId());
        var i = e.getClient();
        i && i.showReportDialog(t);
      }
      function k() {
        return (0, a.getCurrentHub)().lastEventId();
      }
      function w() {}
      function I(t) {
        t();
      }
      function D(t) {
        var e = (0, a.getCurrentHub)().getClient();
        return e
          ? e.flush(t)
          : (_.IS_DEBUG_BUILD &&
              c.logger.warn("Cannot flush events. No client defined."),
            (0, p.resolvedSyncPromise)(!1));
      }
      function T(t) {
        var e = (0, a.getCurrentHub)().getClient();
        return e
          ? e.close(t)
          : (_.IS_DEBUG_BUILD &&
              c.logger.warn(
                "Cannot flush events and disable SDK. No client defined."
              ),
            (0, p.resolvedSyncPromise)(!1));
      }
      function U(t) {
        return (0, h.wrap)(t)();
      }
      function B(t) {
        t.startSession({ ignoreDuration: !0 }), t.captureSession();
      }
    },
    34469: (t, e, n) => {
      "use strict";
      n.d(e, {
        chromeStackParser: () => u,
        geckoStackParser: () => d,
        winjsStackParser: () => _,
        opera10StackParser: () => f,
        opera11StackParser: () => v,
      });
      var r = n(66856),
        i = "?";
      function s(t, e, n, r) {
        var i = { filename: t, function: e, in_app: !0 };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
      }
      var o =
          /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        u = [
          30,
          function (t) {
            var e = o.exec(t);
            if (e) {
              if (e[2] && 0 === e[2].indexOf("eval")) {
                var n = a.exec(e[2]);
                n && ((e[2] = n[1]), (e[3] = n[2]), (e[4] = n[3]));
              }
              var u = (0, r.__read)(y(e[1] || i, e[2]), 2),
                c = u[0];
              return s(u[1], c, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
            }
          },
        ],
        c =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        p = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        d = [
          50,
          function (t) {
            var e,
              n = c.exec(t);
            if (n) {
              if (n[3] && n[3].indexOf(" > eval") > -1) {
                var o = p.exec(n[3]);
                o &&
                  ((n[1] = n[1] || "eval"),
                  (n[3] = o[1]),
                  (n[4] = o[2]),
                  (n[5] = ""));
              }
              var a = n[3],
                u = n[1] || i;
              return (
                (u = (e = (0, r.__read)(y(u, a), 2))[0]),
                s((a = e[1]), u, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
              );
            }
          },
        ],
        l =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        _ = [
          40,
          function (t) {
            var e = l.exec(t);
            return e
              ? s(e[2], e[1] || i, +e[3], e[4] ? +e[4] : void 0)
              : void 0;
          },
        ],
        h = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        f = [
          10,
          function (t) {
            var e = h.exec(t);
            return e ? s(e[2], e[3] || i, +e[1]) : void 0;
          },
        ],
        g =
          / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        v = [
          20,
          function (t) {
            var e = g.exec(t);
            return e ? s(e[5], e[3] || e[4] || i, +e[1], +e[2]) : void 0;
          },
        ],
        y = function (t, e) {
          var n = -1 !== t.indexOf("safari-extension"),
            r = -1 !== t.indexOf("safari-web-extension");
          return n || r
            ? [
                -1 !== t.indexOf("@") ? t.split("@")[0] : i,
                n ? "safari-extension:" + e : "safari-web-extension:" + e,
              ]
            : [t, e];
        };
    },
    385162: (t, e, n) => {
      "use strict";
      n.d(e, { BaseTransport: () => y });
      var r = n(66856),
        i = n(1984),
        s = n(629324),
        o = n(82991),
        a = n(681227),
        u = n(712343),
        c = n(847165),
        p = n(330292),
        d = n(358725),
        l = n(400136),
        _ = n(480228),
        h = n(524326),
        f = n(477050);
      function g(t) {
        return "event" === t ? "error" : t;
      }
      var v = (0, o.getGlobalObject)(),
        y = (function () {
          function t(t) {
            var e = this;
            (this.options = t),
              (this._buffer = (0, a.makePromiseBuffer)(30)),
              (this._rateLimits = {}),
              (this._outcomes = {}),
              (this._api = (0, i.initAPIDetails)(t.dsn, t._metadata, t.tunnel)),
              (this.url = (0, i.getStoreEndpointWithUrlEncodedAuth)(
                this._api.dsn
              )),
              this.options.sendClientReports &&
                v.document &&
                v.document.addEventListener("visibilitychange", function () {
                  "hidden" === v.document.visibilityState && e._flushOutcomes();
                });
          }
          return (
            (t.prototype.sendEvent = function (t) {
              return this._sendRequest(
                (0, s.eventToSentryRequest)(t, this._api),
                t
              );
            }),
            (t.prototype.sendSession = function (t) {
              return this._sendRequest(
                (0, s.sessionToSentryRequest)(t, this._api),
                t
              );
            }),
            (t.prototype.close = function (t) {
              return this._buffer.drain(t);
            }),
            (t.prototype.recordLostEvent = function (t, e) {
              var n;
              if (this.options.sendClientReports) {
                var r = g(e) + ":" + t;
                h.IS_DEBUG_BUILD && u.logger.log("Adding outcome: " + r),
                  (this._outcomes[r] =
                    (null != (n = this._outcomes[r]) ? n : 0) + 1);
              }
            }),
            (t.prototype._flushOutcomes = function () {
              if (this.options.sendClientReports) {
                var t = this._outcomes;
                if (((this._outcomes = {}), Object.keys(t).length)) {
                  h.IS_DEBUG_BUILD &&
                    u.logger.log(
                      "Flushing outcomes:\n" + JSON.stringify(t, null, 2)
                    );
                  var e = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(
                      this._api.dsn,
                      this._api.tunnel
                    ),
                    n = Object.keys(t).map(function (e) {
                      var n = (0, r.__read)(e.split(":"), 2),
                        i = n[0];
                      return { reason: n[1], category: i, quantity: t[e] };
                    }),
                    s = (0, c.createClientReportEnvelope)(
                      n,
                      this._api.tunnel && (0, p.dsnToString)(this._api.dsn)
                    );
                  try {
                    (0, f.sendReport)(e, (0, d.serializeEnvelope)(s));
                  } catch (t) {
                    h.IS_DEBUG_BUILD && u.logger.error(t);
                  }
                } else h.IS_DEBUG_BUILD && u.logger.log("No outcomes to flush");
              }
            }),
            (t.prototype._handleResponse = function (t) {
              var e = t.requestType,
                n = t.response,
                r = t.headers,
                i = t.resolve,
                s = t.reject,
                o = (0, l.eventStatusFromHttpCode)(n.status);
              (this._rateLimits = (0, _.updateRateLimits)(this._rateLimits, r)),
                this._isRateLimited(e) &&
                  h.IS_DEBUG_BUILD &&
                  u.logger.warn(
                    "Too many " +
                      e +
                      " requests, backing off until: " +
                      this._disabledUntil(e)
                  ),
                "success" !== o ? s(n) : i({ status: o });
            }),
            (t.prototype._disabledUntil = function (t) {
              var e = g(t);
              return new Date((0, _.disabledUntil)(this._rateLimits, e));
            }),
            (t.prototype._isRateLimited = function (t) {
              var e = g(t);
              return (0, _.isRateLimited)(this._rateLimits, e);
            }),
            t
          );
        })();
    },
    68690: (t, e, n) => {
      "use strict";
      n.d(e, { FetchTransport: () => c });
      var r = n(66856),
        i = n(808823),
        s = n(196893),
        o = n(880409),
        a = n(385162),
        u = n(477050),
        c = (function (t) {
          function e(e, n) {
            void 0 === n && (n = (0, u.getNativeFetchImplementation)());
            var r = t.call(this, e) || this;
            return (r._fetch = n), r;
          }
          return (
            (0, r.__extends)(e, t),
            (e.prototype._sendRequest = function (t, e) {
              var n = this;
              if (this._isRateLimited(t.type))
                return (
                  this.recordLostEvent("ratelimit_backoff", t.type),
                  Promise.reject({
                    event: e,
                    type: t.type,
                    reason:
                      "Transport for " +
                      t.type +
                      " requests locked till " +
                      this._disabledUntil(t.type) +
                      " due to too many requests.",
                    status: 429,
                  })
                );
              var r = {
                body: t.body,
                method: "POST",
                referrerPolicy: (0, i.supportsReferrerPolicy)() ? "origin" : "",
              };
              return (
                void 0 !== this.options.fetchParameters &&
                  Object.assign(r, this.options.fetchParameters),
                void 0 !== this.options.headers &&
                  (r.headers = this.options.headers),
                this._buffer
                  .add(function () {
                    return new s.SyncPromise(function (e, i) {
                      n._fetch(t.url, r)
                        .then(function (r) {
                          var s = {
                            "x-sentry-rate-limits": r.headers.get(
                              "X-Sentry-Rate-Limits"
                            ),
                            "retry-after": r.headers.get("Retry-After"),
                          };
                          n._handleResponse({
                            requestType: t.type,
                            response: r,
                            headers: s,
                            resolve: e,
                            reject: i,
                          });
                        })
                        .catch(i);
                    });
                  })
                  .then(void 0, function (e) {
                    throw (
                      (e instanceof o.SentryError
                        ? n.recordLostEvent("queue_overflow", t.type)
                        : n.recordLostEvent("network_error", t.type),
                      e)
                    );
                  })
              );
            }),
            e
          );
        })(a.BaseTransport);
    },
    220754: (t, e, n) => {
      "use strict";
      n.d(e, { makeNewFetchTransport: () => o });
      var r = n(66856),
        i = n(645431),
        s = n(477050);
      function o(t, e) {
        return (
          void 0 === e && (e = (0, s.getNativeFetchImplementation)()),
          (0, i.createTransport)({ bufferSize: t.bufferSize }, function (n) {
            var i = (0, r.__assign)(
              { body: n.body, method: "POST", referrerPolicy: "origin" },
              t.requestOptions
            );
            return e(t.url, i).then(function (t) {
              return t.text().then(function (e) {
                return {
                  body: e,
                  headers: {
                    "x-sentry-rate-limits": t.headers.get(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": t.headers.get("Retry-After"),
                  },
                  reason: t.statusText,
                  statusCode: t.status,
                };
              });
            });
          })
        );
      }
    },
    620116: (t, e, n) => {
      "use strict";
      n.d(e, { makeNewXHRTransport: () => s });
      var r = n(645431),
        i = n(196893);
      function s(t) {
        return (0, r.createTransport)(
          { bufferSize: t.bufferSize },
          function (e) {
            return new i.SyncPromise(function (n, r) {
              var i = new XMLHttpRequest();
              for (var s in ((i.onreadystatechange = function () {
                if (4 === i.readyState) {
                  var t = {
                    body: i.response,
                    headers: {
                      "x-sentry-rate-limits": i.getResponseHeader(
                        "X-Sentry-Rate-Limits"
                      ),
                      "retry-after": i.getResponseHeader("Retry-After"),
                    },
                    reason: i.statusText,
                    statusCode: i.status,
                  };
                  n(t);
                }
              }),
              i.open("POST", t.url),
              t.headers))
                Object.prototype.hasOwnProperty.call(t.headers, s) &&
                  i.setRequestHeader(s, t.headers[s]);
              i.send(e.body);
            });
          }
        );
      }
    },
    477050: (t, e, n) => {
      "use strict";
      n.d(e, { getNativeFetchImplementation: () => p, sendReport: () => d });
      var r,
        i = n(82991),
        s = n(808823),
        o = n(712343),
        a = n(208623),
        u = n(524326),
        c = (0, i.getGlobalObject)();
      function p() {
        if (r) return r;
        if ((0, s.isNativeFetch)(c.fetch)) return (r = c.fetch.bind(c));
        var t = c.document,
          e = c.fetch;
        if (t && "function" == typeof t.createElement)
          try {
            var n = t.createElement("iframe");
            (n.hidden = !0), t.head.appendChild(n);
            var i = n.contentWindow;
            i && i.fetch && (e = i.fetch), t.head.removeChild(n);
          } catch (t) {
            u.IS_DEBUG_BUILD &&
              o.logger.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                t
              );
          }
        return (r = e.bind(c));
      }
      function d(t, e) {
        if (
          "[object Navigator]" ===
            Object.prototype.toString.call(c && c.navigator) &&
          "function" == typeof c.navigator.sendBeacon
        )
          return c.navigator.sendBeacon.bind(c.navigator)(t, e);
        if ((0, s.supportsFetch)()) {
          var n = p();
          return (0, a.forget)(
            n(t, {
              body: e,
              method: "POST",
              credentials: "omit",
              keepalive: !0,
            })
          );
        }
      }
    },
    768131: (t, e, n) => {
      "use strict";
      n.d(e, { XHRTransport: () => o });
      var r = n(66856),
        i = n(196893),
        s = n(880409),
        o = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.__extends)(e, t),
            (e.prototype._sendRequest = function (t, e) {
              var n = this;
              return this._isRateLimited(t.type)
                ? (this.recordLostEvent("ratelimit_backoff", t.type),
                  Promise.reject({
                    event: e,
                    type: t.type,
                    reason:
                      "Transport for " +
                      t.type +
                      " requests locked till " +
                      this._disabledUntil(t.type) +
                      " due to too many requests.",
                    status: 429,
                  }))
                : this._buffer
                    .add(function () {
                      return new i.SyncPromise(function (e, r) {
                        var i = new XMLHttpRequest();
                        for (var s in ((i.onreadystatechange = function () {
                          if (4 === i.readyState) {
                            var s = {
                              "x-sentry-rate-limits": i.getResponseHeader(
                                "X-Sentry-Rate-Limits"
                              ),
                              "retry-after": i.getResponseHeader("Retry-After"),
                            };
                            n._handleResponse({
                              requestType: t.type,
                              response: i,
                              headers: s,
                              resolve: e,
                              reject: r,
                            });
                          }
                        }),
                        i.open("POST", t.url),
                        n.options.headers))
                          Object.prototype.hasOwnProperty.call(
                            n.options.headers,
                            s
                          ) && i.setRequestHeader(s, n.options.headers[s]);
                        i.send(t.body);
                      });
                    })
                    .then(void 0, function (e) {
                      throw (
                        (e instanceof s.SentryError
                          ? n.recordLostEvent("queue_overflow", t.type)
                          : n.recordLostEvent("network_error", t.type),
                        e)
                      );
                    });
            }),
            e
          );
        })(n(385162).BaseTransport);
    },
    1984: (t, e, n) => {
      "use strict";
      n.d(e, {
        initAPIDetails: () => s,
        getStoreEndpointWithUrlEncodedAuth: () => p,
        getEnvelopeEndpointWithUrlEncodedAuth: () => d,
        getReportDialogEndpoint: () => l,
      });
      var r = n(330292),
        i = n(320535);
      !(function () {
        function t(t, e, n) {
          void 0 === e && (e = {}),
            (this.dsn = t),
            (this._dsnObject = (0, r.makeDsn)(t)),
            (this.metadata = e),
            (this._tunnel = n);
        }
        (t.prototype.getDsn = function () {
          return this._dsnObject;
        }),
          (t.prototype.forceEnvelope = function () {
            return !!this._tunnel;
          }),
          (t.prototype.getBaseApiEndpoint = function () {
            return o(this._dsnObject);
          }),
          (t.prototype.getStoreEndpoint = function () {
            return c(this._dsnObject);
          }),
          (t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
            return p(this._dsnObject);
          }),
          (t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
            return d(this._dsnObject, this._tunnel);
          });
      })();
      function s(t, e, n) {
        return {
          initDsn: t,
          metadata: e || {},
          dsn: (0, r.makeDsn)(t),
          tunnel: n,
        };
      }
      function o(t) {
        var e = t.protocol ? t.protocol + ":" : "",
          n = t.port ? ":" + t.port : "";
        return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/";
      }
      function a(t, e) {
        return "" + o(t) + t.projectId + "/" + e + "/";
      }
      function u(t) {
        return (0, i.urlEncode)({
          sentry_key: t.publicKey,
          sentry_version: "7",
        });
      }
      function c(t) {
        return a(t, "store");
      }
      function p(t) {
        return c(t) + "?" + u(t);
      }
      function d(t, e) {
        return (
          e ||
          (function (t) {
            return a(t, "envelope");
          })(t) +
            "?" +
            u(t)
        );
      }
      function l(t, e) {
        var n = (0, r.makeDsn)(t),
          i = o(n) + "embed/error-page/",
          s = "dsn=" + (0, r.dsnToString)(n);
        for (var a in e)
          if ("dsn" !== a)
            if ("user" === a) {
              if (!e.user) continue;
              e.user.name && (s += "&name=" + encodeURIComponent(e.user.name)),
                e.user.email &&
                  (s += "&email=" + encodeURIComponent(e.user.email));
            } else
              s += "&" + encodeURIComponent(a) + "=" + encodeURIComponent(e[a]);
        return i + "?" + s;
      }
    },
    909317: (t, e, n) => {
      "use strict";
      n.d(e, { BaseBackend: () => p });
      var r = n(551421),
        i = n(712343),
        s = n(880409),
        o = n(1984),
        a = n(353298),
        u = n(629324),
        c = n(622134),
        p = (function () {
          function t(t) {
            (this._options = t),
              this._options.dsn ||
                (a.IS_DEBUG_BUILD &&
                  i.logger.warn(
                    "No DSN provided, backend will not do anything."
                  )),
              (this._transport = this._setupTransport());
          }
          return (
            (t.prototype.eventFromException = function (t, e) {
              throw new s.SentryError(
                "Backend has to implement `eventFromException` method"
              );
            }),
            (t.prototype.eventFromMessage = function (t, e, n) {
              throw new s.SentryError(
                "Backend has to implement `eventFromMessage` method"
              );
            }),
            (t.prototype.sendEvent = function (t) {
              if (
                this._newTransport &&
                this._options.dsn &&
                this._options._experiments &&
                this._options._experiments.newTransport
              ) {
                var e = (0, o.initAPIDetails)(
                    this._options.dsn,
                    this._options._metadata,
                    this._options.tunnel
                  ),
                  n = (0, u.createEventEnvelope)(t, e);
                this._newTransport.send(n).then(null, function (t) {
                  a.IS_DEBUG_BUILD &&
                    i.logger.error("Error while sending event:", t);
                });
              } else
                this._transport.sendEvent(t).then(null, function (t) {
                  a.IS_DEBUG_BUILD &&
                    i.logger.error("Error while sending event:", t);
                });
            }),
            (t.prototype.sendSession = function (t) {
              if (this._transport.sendSession)
                if (
                  this._newTransport &&
                  this._options.dsn &&
                  this._options._experiments &&
                  this._options._experiments.newTransport
                ) {
                  var e = (0, o.initAPIDetails)(
                      this._options.dsn,
                      this._options._metadata,
                      this._options.tunnel
                    ),
                    n = (0, r.__read)((0, u.createSessionEnvelope)(t, e), 1)[0];
                  this._newTransport.send(n).then(null, function (t) {
                    a.IS_DEBUG_BUILD &&
                      i.logger.error("Error while sending session:", t);
                  });
                } else
                  this._transport.sendSession(t).then(null, function (t) {
                    a.IS_DEBUG_BUILD &&
                      i.logger.error("Error while sending session:", t);
                  });
              else
                a.IS_DEBUG_BUILD &&
                  i.logger.warn(
                    "Dropping session because custom transport doesn't implement sendSession"
                  );
            }),
            (t.prototype.getTransport = function () {
              return this._transport;
            }),
            (t.prototype._setupTransport = function () {
              return new c.NoopTransport();
            }),
            t
          );
        })();
    },
    744219: (t, e, n) => {
      "use strict";
      n.d(e, { BaseClient: () => v });
      var r = n(551421),
        i = n(146769),
        s = n(330292),
        o = n(362844),
        a = n(712343),
        u = n(567597),
        c = n(196893),
        p = n(721170),
        d = n(90322),
        l = n(857321),
        _ = n(880409),
        h = n(353298),
        f = n(522967),
        g = "Not capturing exception because it's already been captured.",
        v = (function () {
          function t(t, e) {
            (this._integrations = {}),
              (this._numProcessing = 0),
              (this._backend = new t(e)),
              (this._options = e),
              e.dsn && (this._dsn = (0, s.makeDsn)(e.dsn));
          }
          return (
            (t.prototype.captureException = function (t, e, n) {
              var r = this;
              if (!(0, o.checkOrSetAlreadyCaught)(t)) {
                var i = e && e.event_id;
                return (
                  this._process(
                    this._getBackend()
                      .eventFromException(t, e)
                      .then(function (t) {
                        return r._captureEvent(t, e, n);
                      })
                      .then(function (t) {
                        i = t;
                      })
                  ),
                  i
                );
              }
              h.IS_DEBUG_BUILD && a.logger.log(g);
            }),
            (t.prototype.captureMessage = function (t, e, n, r) {
              var i = this,
                s = n && n.event_id,
                o = (0, u.isPrimitive)(t)
                  ? this._getBackend().eventFromMessage(String(t), e, n)
                  : this._getBackend().eventFromException(t, n);
              return (
                this._process(
                  o
                    .then(function (t) {
                      return i._captureEvent(t, n, r);
                    })
                    .then(function (t) {
                      s = t;
                    })
                ),
                s
              );
            }),
            (t.prototype.captureEvent = function (t, e, n) {
              if (
                !(
                  e &&
                  e.originalException &&
                  (0, o.checkOrSetAlreadyCaught)(e.originalException)
                )
              ) {
                var r = e && e.event_id;
                return (
                  this._process(
                    this._captureEvent(t, e, n).then(function (t) {
                      r = t;
                    })
                  ),
                  r
                );
              }
              h.IS_DEBUG_BUILD && a.logger.log(g);
            }),
            (t.prototype.captureSession = function (t) {
              this._isEnabled()
                ? "string" != typeof t.release
                  ? h.IS_DEBUG_BUILD &&
                    a.logger.warn(
                      "Discarded session because of missing or non-string release"
                    )
                  : (this._sendSession(t), t.update({ init: !1 }))
                : h.IS_DEBUG_BUILD &&
                  a.logger.warn("SDK not enabled, will not capture session.");
            }),
            (t.prototype.getDsn = function () {
              return this._dsn;
            }),
            (t.prototype.getOptions = function () {
              return this._options;
            }),
            (t.prototype.getTransport = function () {
              return this._getBackend().getTransport();
            }),
            (t.prototype.flush = function (t) {
              var e = this;
              return this._isClientDoneProcessing(t).then(function (n) {
                return e
                  .getTransport()
                  .close(t)
                  .then(function (t) {
                    return n && t;
                  });
              });
            }),
            (t.prototype.close = function (t) {
              var e = this;
              return this.flush(t).then(function (t) {
                return (e.getOptions().enabled = !1), t;
              });
            }),
            (t.prototype.setupIntegrations = function () {
              this._isEnabled() &&
                !this._integrations.initialized &&
                (this._integrations = (0, f.setupIntegrations)(this._options));
            }),
            (t.prototype.getIntegration = function (t) {
              try {
                return this._integrations[t.id] || null;
              } catch (e) {
                return (
                  h.IS_DEBUG_BUILD &&
                    a.logger.warn(
                      "Cannot retrieve integration " +
                        t.id +
                        " from the current Client"
                    ),
                  null
                );
              }
            }),
            (t.prototype._updateSessionFromEvent = function (t, e) {
              var n,
                i,
                s = !1,
                o = !1,
                a = e.exception && e.exception.values;
              if (a) {
                o = !0;
                try {
                  for (
                    var u = (0, r.__values)(a), c = u.next();
                    !c.done;
                    c = u.next()
                  ) {
                    var p = c.value.mechanism;
                    if (p && !1 === p.handled) {
                      s = !0;
                      break;
                    }
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    c && !c.done && (i = u.return) && i.call(u);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
              var d = "ok" === t.status;
              ((d && 0 === t.errors) || (d && s)) &&
                (t.update(
                  (0, r.__assign)(
                    (0, r.__assign)({}, s && { status: "crashed" }),
                    { errors: t.errors || Number(o || s) }
                  )
                ),
                this.captureSession(t));
            }),
            (t.prototype._sendSession = function (t) {
              this._getBackend().sendSession(t);
            }),
            (t.prototype._isClientDoneProcessing = function (t) {
              var e = this;
              return new c.SyncPromise(function (n) {
                var r = 0,
                  i = setInterval(function () {
                    0 == e._numProcessing
                      ? (clearInterval(i), n(!0))
                      : ((r += 1), t && r >= t && (clearInterval(i), n(!1)));
                  }, 1);
              });
            }),
            (t.prototype._getBackend = function () {
              return this._backend;
            }),
            (t.prototype._isEnabled = function () {
              return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
            }),
            (t.prototype._prepareEvent = function (t, e, n) {
              var s = this,
                a = this.getOptions(),
                u = a.normalizeDepth,
                l = void 0 === u ? 3 : u,
                _ = a.normalizeMaxBreadth,
                h = void 0 === _ ? 1e3 : _,
                f = (0, r.__assign)((0, r.__assign)({}, t), {
                  event_id:
                    t.event_id ||
                    (n && n.event_id ? n.event_id : (0, o.uuid4)()),
                  timestamp: t.timestamp || (0, p.dateTimestampInSeconds)(),
                });
              this._applyClientOptions(f), this._applyIntegrationsMetadata(f);
              var g = e;
              n &&
                n.captureContext &&
                (g = i.Scope.clone(g).update(n.captureContext));
              var v = (0, c.resolvedSyncPromise)(f);
              return (
                g && (v = g.applyToEvent(f, n)),
                v.then(function (t) {
                  return (
                    t &&
                      (t.sdkProcessingMetadata = (0, r.__assign)(
                        (0, r.__assign)({}, t.sdkProcessingMetadata),
                        {
                          normalizeDepth:
                            (0, d.normalize)(l) + " (" + typeof l + ")",
                        }
                      )),
                    "number" == typeof l && l > 0
                      ? s._normalizeEvent(t, l, h)
                      : t
                  );
                })
              );
            }),
            (t.prototype._normalizeEvent = function (t, e, n) {
              if (!t) return null;
              var i = (0, r.__assign)(
                (0, r.__assign)(
                  (0, r.__assign)(
                    (0, r.__assign)(
                      (0, r.__assign)({}, t),
                      t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map(function (t) {
                          return (0,
                          r.__assign)((0, r.__assign)({}, t), t.data && { data: (0, d.normalize)(t.data, e, n) });
                        }),
                      }
                    ),
                    t.user && { user: (0, d.normalize)(t.user, e, n) }
                  ),
                  t.contexts && { contexts: (0, d.normalize)(t.contexts, e, n) }
                ),
                t.extra && { extra: (0, d.normalize)(t.extra, e, n) }
              );
              return (
                t.contexts &&
                  t.contexts.trace &&
                  (i.contexts.trace = t.contexts.trace),
                (i.sdkProcessingMetadata = (0, r.__assign)(
                  (0, r.__assign)({}, i.sdkProcessingMetadata),
                  { baseClientNormalized: !0 }
                )),
                i
              );
            }),
            (t.prototype._applyClientOptions = function (t) {
              var e = this.getOptions(),
                n = e.environment,
                r = e.release,
                i = e.dist,
                s = e.maxValueLength,
                o = void 0 === s ? 250 : s;
              "environment" in t ||
                (t.environment = "environment" in e ? n : "production"),
                void 0 === t.release && void 0 !== r && (t.release = r),
                void 0 === t.dist && void 0 !== i && (t.dist = i),
                t.message && (t.message = (0, l.truncate)(t.message, o));
              var a =
                t.exception && t.exception.values && t.exception.values[0];
              a && a.value && (a.value = (0, l.truncate)(a.value, o));
              var u = t.request;
              u && u.url && (u.url = (0, l.truncate)(u.url, o));
            }),
            (t.prototype._applyIntegrationsMetadata = function (t) {
              var e = Object.keys(this._integrations);
              e.length > 0 &&
                ((t.sdk = t.sdk || {}),
                (t.sdk.integrations = (0, r.__spread)(
                  t.sdk.integrations || [],
                  e
                )));
            }),
            (t.prototype._sendEvent = function (t) {
              this._getBackend().sendEvent(t);
            }),
            (t.prototype._captureEvent = function (t, e, n) {
              return this._processEvent(t, e, n).then(
                function (t) {
                  return t.event_id;
                },
                function (t) {
                  h.IS_DEBUG_BUILD && a.logger.error(t);
                }
              );
            }),
            (t.prototype._processEvent = function (t, e, n) {
              var r = this,
                i = this.getOptions(),
                s = i.beforeSend,
                o = i.sampleRate,
                a = this.getTransport();
              function p(t, e) {
                a.recordLostEvent && a.recordLostEvent(t, e);
              }
              if (!this._isEnabled())
                return (0, c.rejectedSyncPromise)(
                  new _.SentryError("SDK not enabled, will not capture event.")
                );
              var d = "transaction" === t.type;
              return !d && "number" == typeof o && Math.random() > o
                ? (p("sample_rate", "event"),
                  (0, c.rejectedSyncPromise)(
                    new _.SentryError(
                      "Discarding event because it's not included in the random sample (sampling rate = " +
                        o +
                        ")"
                    )
                  ))
                : this._prepareEvent(t, n, e)
                    .then(function (n) {
                      if (null === n)
                        throw (
                          (p("event_processor", t.type || "event"),
                          new _.SentryError(
                            "An event processor returned null, will not send event."
                          ))
                        );
                      return (e && e.data && !0 === e.data.__sentry__) ||
                        d ||
                        !s
                        ? n
                        : (function (t) {
                            var e =
                              "`beforeSend` method has to return `null` or a valid event.";
                            if ((0, u.isThenable)(t))
                              return t.then(
                                function (t) {
                                  if (!(0, u.isPlainObject)(t) && null !== t)
                                    throw new _.SentryError(e);
                                  return t;
                                },
                                function (t) {
                                  throw new _.SentryError(
                                    "beforeSend rejected with " + t
                                  );
                                }
                              );
                            if (!(0, u.isPlainObject)(t) && null !== t)
                              throw new _.SentryError(e);
                            return t;
                          })(s(n, e));
                    })
                    .then(function (e) {
                      if (null === e)
                        throw (
                          (p("before_send", t.type || "event"),
                          new _.SentryError(
                            "`beforeSend` returned `null`, will not send event."
                          ))
                        );
                      var i = n && n.getSession && n.getSession();
                      return (
                        !d && i && r._updateSessionFromEvent(i, e),
                        r._sendEvent(e),
                        e
                      );
                    })
                    .then(null, function (t) {
                      if (t instanceof _.SentryError) throw t;
                      throw (
                        (r.captureException(t, {
                          data: { __sentry__: !0 },
                          originalException: t,
                        }),
                        new _.SentryError(
                          "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                            t
                        ))
                      );
                    });
            }),
            (t.prototype._process = function (t) {
              var e = this;
              (this._numProcessing += 1),
                t.then(
                  function (t) {
                    return (e._numProcessing -= 1), t;
                  },
                  function (t) {
                    return (e._numProcessing -= 1), t;
                  }
                );
            }),
            t
          );
        })();
    },
    353298: (t, e, n) => {
      "use strict";
      n.d(e, { IS_DEBUG_BUILD: () => r });
      var r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    },
    522967: (t, e, n) => {
      "use strict";
      n.d(e, { setupIntegrations: () => d });
      var r = n(551421),
        i = n(146769),
        s = n(938641),
        o = n(712343),
        a = n(320535),
        u = n(353298),
        c = [];
      function p(t) {
        return t.reduce(function (t, e) {
          return (
            t.every(function (t) {
              return e.name !== t.name;
            }) && t.push(e),
            t
          );
        }, []);
      }
      function d(t) {
        var e = {};
        return (
          (function (t) {
            var e =
                (t.defaultIntegrations &&
                  (0, r.__spread)(t.defaultIntegrations)) ||
                [],
              n = t.integrations,
              i = (0, r.__spread)(p(e));
            Array.isArray(n)
              ? (i = (0, r.__spread)(
                  i.filter(function (t) {
                    return n.every(function (e) {
                      return e.name !== t.name;
                    });
                  }),
                  p(n)
                ))
              : "function" == typeof n &&
                ((i = n(i)), (i = Array.isArray(i) ? i : [i]));
            var s = i.map(function (t) {
                return t.name;
              }),
              o = "Debug";
            return (
              -1 !== s.indexOf(o) &&
                i.push.apply(i, (0, r.__spread)(i.splice(s.indexOf(o), 1))),
              i
            );
          })(t).forEach(function (t) {
            (e[t.name] = t),
              (function (t) {
                -1 === c.indexOf(t.name) &&
                  (t.setupOnce(i.addGlobalEventProcessor, s.getCurrentHub),
                  c.push(t.name),
                  u.IS_DEBUG_BUILD &&
                    o.logger.log("Integration installed: " + t.name));
              })(t);
          }),
          (0, a.addNonEnumerableProperty)(e, "initialized", !0),
          e
        );
      }
    },
    19116: (t, e, n) => {
      "use strict";
      n.d(e, { FunctionToString: () => s });
      var r,
        i = n(320535),
        s = (function () {
          function t() {
            this.name = t.id;
          }
          return (
            (t.prototype.setupOnce = function () {
              (r = Function.prototype.toString),
                (Function.prototype.toString = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  var n = (0, i.getOriginalFunction)(this) || this;
                  return r.apply(n, t);
                });
            }),
            (t.id = "FunctionToString"),
            t
          );
        })();
    },
    242422: (t, e, n) => {
      "use strict";
      n.d(e, { InboundFilters: () => c });
      var r = n(551421),
        i = n(712343),
        s = n(362844),
        o = n(857321),
        a = n(353298),
        u = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        c = (function () {
          function t(e) {
            void 0 === e && (e = {}), (this._options = e), (this.name = t.id);
          }
          return (
            (t.prototype.setupOnce = function (e, n) {
              e(function (e) {
                var c = n();
                if (c) {
                  var p = c.getIntegration(t);
                  if (p) {
                    var l = c.getClient(),
                      _ = l ? l.getOptions() : {},
                      h = (function (t, e) {
                        void 0 === t && (t = {});
                        void 0 === e && (e = {});
                        return {
                          allowUrls: (0, r.__spread)(
                            t.whitelistUrls || [],
                            t.allowUrls || [],
                            e.whitelistUrls || [],
                            e.allowUrls || []
                          ),
                          denyUrls: (0, r.__spread)(
                            t.blacklistUrls || [],
                            t.denyUrls || [],
                            e.blacklistUrls || [],
                            e.denyUrls || []
                          ),
                          ignoreErrors: (0, r.__spread)(
                            t.ignoreErrors || [],
                            e.ignoreErrors || [],
                            u
                          ),
                          ignoreInternal:
                            void 0 === t.ignoreInternal || t.ignoreInternal,
                        };
                      })(p._options, _);
                    return (function (t, e) {
                      if (
                        e.ignoreInternal &&
                        (function (t) {
                          try {
                            return "SentryError" === t.exception.values[0].type;
                          } catch (t) {}
                          return !1;
                        })(t)
                      )
                        return (
                          a.IS_DEBUG_BUILD &&
                            i.logger.warn(
                              "Event dropped due to being internal Sentry Error.\nEvent: " +
                                (0, s.getEventDescription)(t)
                            ),
                          !0
                        );
                      if (
                        (function (t, e) {
                          if (!e || !e.length) return !1;
                          return (function (t) {
                            if (t.message) return [t.message];
                            if (t.exception)
                              try {
                                var e =
                                    (t.exception.values &&
                                      t.exception.values[0]) ||
                                    {},
                                  n = e.type,
                                  r = void 0 === n ? "" : n,
                                  o = e.value,
                                  u = void 0 === o ? "" : o;
                                return ["" + u, r + ": " + u];
                              } catch (e) {
                                return (
                                  a.IS_DEBUG_BUILD &&
                                    i.logger.error(
                                      "Cannot extract message for event " +
                                        (0, s.getEventDescription)(t)
                                    ),
                                  []
                                );
                              }
                            return [];
                          })(t).some(function (t) {
                            return e.some(function (e) {
                              return (0, o.isMatchingPattern)(t, e);
                            });
                          });
                        })(t, e.ignoreErrors)
                      )
                        return (
                          a.IS_DEBUG_BUILD &&
                            i.logger.warn(
                              "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                                (0, s.getEventDescription)(t)
                            ),
                          !0
                        );
                      if (
                        (function (t, e) {
                          if (!e || !e.length) return !1;
                          var n = d(t);
                          return (
                            !!n &&
                            e.some(function (t) {
                              return (0, o.isMatchingPattern)(n, t);
                            })
                          );
                        })(t, e.denyUrls)
                      )
                        return (
                          a.IS_DEBUG_BUILD &&
                            i.logger.warn(
                              "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                                (0, s.getEventDescription)(t) +
                                ".\nUrl: " +
                                d(t)
                            ),
                          !0
                        );
                      if (
                        !(function (t, e) {
                          if (!e || !e.length) return !0;
                          var n = d(t);
                          return (
                            !n ||
                            e.some(function (t) {
                              return (0, o.isMatchingPattern)(n, t);
                            })
                          );
                        })(t, e.allowUrls)
                      )
                        return (
                          a.IS_DEBUG_BUILD &&
                            i.logger.warn(
                              "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                                (0, s.getEventDescription)(t) +
                                ".\nUrl: " +
                                d(t)
                            ),
                          !0
                        );
                      return !1;
                    })(e, h)
                      ? null
                      : e;
                  }
                }
                return e;
              });
            }),
            (t.id = "InboundFilters"),
            t
          );
        })();
      function p(t) {
        void 0 === t && (t = []);
        for (var e = t.length - 1; e >= 0; e--) {
          var n = t[e];
          if (
            n &&
            "<anonymous>" !== n.filename &&
            "[native code]" !== n.filename
          )
            return n.filename || null;
        }
        return null;
      }
      function d(t) {
        try {
          if (t.stacktrace) return p(t.stacktrace.frames);
          var e;
          try {
            e = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          return e ? p(e) : null;
        } catch (e) {
          return (
            a.IS_DEBUG_BUILD &&
              i.logger.error(
                "Cannot extract url for event " + (0, s.getEventDescription)(t)
              ),
            null
          );
        }
      }
    },
    629324: (t, e, n) => {
      "use strict";
      n.d(e, {
        createSessionEnvelope: () => p,
        sessionToSentryRequest: () => d,
        createEventEnvelope: () => l,
        eventToSentryRequest: () => _,
      });
      var r = n(551421),
        i = n(330292),
        s = n(358725),
        o = n(90322),
        a = n(1984);
      function u(t) {
        if (t.metadata && t.metadata.sdk) {
          var e = t.metadata.sdk;
          return { name: e.name, version: e.version };
        }
      }
      function c(t, e) {
        return e
          ? ((t.sdk = t.sdk || {}),
            (t.sdk.name = t.sdk.name || e.name),
            (t.sdk.version = t.sdk.version || e.version),
            (t.sdk.integrations = (0, r.__spread)(
              t.sdk.integrations || [],
              e.integrations || []
            )),
            (t.sdk.packages = (0, r.__spread)(
              t.sdk.packages || [],
              e.packages || []
            )),
            t)
          : t;
      }
      function p(t, e) {
        var n = u(e),
          o = (0, r.__assign)(
            (0, r.__assign)(
              { sent_at: new Date().toISOString() },
              n && { sdk: n }
            ),
            !!e.tunnel && { dsn: (0, i.dsnToString)(e.dsn) }
          ),
          a = "aggregates" in t ? "sessions" : "session",
          c = [{ type: a }, t];
        return [(0, s.createEnvelope)(o, [c]), a];
      }
      function d(t, e) {
        var n = (0, r.__read)(p(t, e), 2),
          i = n[0],
          o = n[1];
        return {
          body: (0, s.serializeEnvelope)(i),
          type: o,
          url: (0, a.getEnvelopeEndpointWithUrlEncodedAuth)(e.dsn, e.tunnel),
        };
      }
      function l(t, e) {
        var n = u(e),
          o = t.type || "event",
          a = (t.sdkProcessingMetadata || {}).transactionSampling || {},
          p = a.method,
          d = a.rate;
        c(t, e.metadata.sdk),
          (t.tags = t.tags || {}),
          (t.extra = t.extra || {}),
          (t.sdkProcessingMetadata &&
            t.sdkProcessingMetadata.baseClientNormalized) ||
            ((t.tags.skippedNormalization = !0),
            (t.extra.normalizeDepth = t.sdkProcessingMetadata
              ? t.sdkProcessingMetadata.normalizeDepth
              : "unset")),
          delete t.sdkProcessingMetadata;
        var l = (0, r.__assign)(
            (0, r.__assign)(
              { event_id: t.event_id, sent_at: new Date().toISOString() },
              n && { sdk: n }
            ),
            !!e.tunnel && { dsn: (0, i.dsnToString)(e.dsn) }
          ),
          _ = [{ type: o, sample_rates: [{ id: p, rate: d }] }, t];
        return (0, s.createEnvelope)(l, [_]);
      }
      function _(t, e) {
        var n,
          p = u(e),
          d = t.type || "event",
          l = "transaction" === d || !!e.tunnel,
          _ = (t.sdkProcessingMetadata || {}).transactionSampling || {},
          h = _.method,
          f = _.rate;
        c(t, e.metadata.sdk),
          (t.tags = t.tags || {}),
          (t.extra = t.extra || {}),
          (t.sdkProcessingMetadata &&
            t.sdkProcessingMetadata.baseClientNormalized) ||
            ((t.tags.skippedNormalization = !0),
            (t.extra.normalizeDepth = t.sdkProcessingMetadata
              ? t.sdkProcessingMetadata.normalizeDepth
              : "unset")),
          delete t.sdkProcessingMetadata;
        try {
          n = JSON.stringify(t);
        } catch (e) {
          (t.tags.JSONStringifyError = !0), (t.extra.JSONStringifyError = e);
          try {
            n = JSON.stringify((0, o.normalize)(t));
          } catch (t) {
            var g = t;
            n = JSON.stringify({
              message: "JSON.stringify error after renormalization",
              extra: { message: g.message, stack: g.stack },
            });
          }
        }
        var v = {
          body: n,
          type: d,
          url: l
            ? (0, a.getEnvelopeEndpointWithUrlEncodedAuth)(e.dsn, e.tunnel)
            : (0, a.getStoreEndpointWithUrlEncodedAuth)(e.dsn),
        };
        if (l) {
          var y = (0, r.__assign)(
              (0, r.__assign)(
                { event_id: t.event_id, sent_at: new Date().toISOString() },
                p && { sdk: p }
              ),
              !!e.tunnel && { dsn: (0, i.dsnToString)(e.dsn) }
            ),
            m = [{ type: d, sample_rates: [{ id: h, rate: f }] }, v.body],
            E = (0, s.createEnvelope)(y, [m]);
          v.body = (0, s.serializeEnvelope)(E);
        }
        return v;
      }
    },
    367966: (t, e, n) => {
      "use strict";
      n.d(e, { initAndBind: () => o });
      var r = n(938641),
        i = n(712343),
        s = n(353298);
      function o(t, e) {
        !0 === e.debug &&
          (s.IS_DEBUG_BUILD
            ? i.logger.enable()
            : console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              ));
        var n = (0, r.getCurrentHub)(),
          o = n.getScope();
        o && o.update(e.initialScope);
        var a = new t(e);
        n.bindClient(a);
      }
    },
    645431: (t, e, n) => {
      "use strict";
      n.d(e, { createTransport: () => u });
      var r = n(681227),
        i = n(358725),
        s = n(480228),
        o = n(196893),
        a = n(400136);
      function u(t, e, n) {
        void 0 === n && (n = (0, r.makePromiseBuffer)(t.bufferSize || 30));
        var u = {};
        return {
          send: function (t) {
            var r = (0, i.getEnvelopeType)(t),
              p = "event" === r ? "error" : r,
              d = { category: p, body: (0, i.serializeEnvelope)(t) };
            return (0, s.isRateLimited)(u, p)
              ? (0, o.rejectedSyncPromise)({
                  status: "rate_limit",
                  reason: c(u, p),
                })
              : n.add(function () {
                  return e(d).then(function (t) {
                    var e = t.body,
                      n = t.headers,
                      r = t.reason,
                      i = t.statusCode,
                      d = (0, a.eventStatusFromHttpCode)(i);
                    return (
                      n && (u = (0, s.updateRateLimits)(u, n)),
                      "success" === d
                        ? (0, o.resolvedSyncPromise)({ status: d, reason: r })
                        : (0, o.rejectedSyncPromise)({
                            status: d,
                            reason:
                              r ||
                              e ||
                              ("rate_limit" === d
                                ? c(u, p)
                                : "Unknown transport error"),
                          })
                    );
                  });
                });
          },
          flush: function (t) {
            return n.drain(t);
          },
        };
      }
      function c(t, e) {
        return (
          "Too many " +
          e +
          " requests, backing off until: " +
          new Date((0, s.disabledUntil)(t, e)).toISOString()
        );
      }
    },
    622134: (t, e, n) => {
      "use strict";
      n.d(e, { NoopTransport: () => i });
      var r = n(196893),
        i = (function () {
          function t() {}
          return (
            (t.prototype.sendEvent = function (t) {
              return (0, r.resolvedSyncPromise)({
                reason:
                  "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: "skipped",
              });
            }),
            (t.prototype.close = function (t) {
              return (0, r.resolvedSyncPromise)(!0);
            }),
            t
          );
        })();
    },
    840105: (t, e, n) => {
      "use strict";
      n.d(e, { SDK_VERSION: () => r });
      var r = "6.19.7";
    },
    219017: (t, e, n) => {
      "use strict";
      n.d(e, { IS_DEBUG_BUILD: () => r });
      var r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    },
    938641: (t, e, n) => {
      "use strict";
      n.d(e, {
        Hub: () => l,
        makeMain: () => h,
        getCurrentHub: () => f,
        getHubFromCarrier: () => v,
      });
      var r = n(168907),
        i = n(362844),
        s = n(721170),
        o = n(712343),
        a = n(82991),
        u = n(361422),
        c = n(219017),
        p = n(146769),
        d = n(695771),
        l = (function () {
          function t(t, e, n) {
            void 0 === e && (e = new p.Scope()),
              void 0 === n && (n = 4),
              (this._version = n),
              (this._stack = [{}]),
              (this.getStackTop().scope = e),
              t && this.bindClient(t);
          }
          return (
            (t.prototype.isOlderThan = function (t) {
              return this._version < t;
            }),
            (t.prototype.bindClient = function (t) {
              (this.getStackTop().client = t),
                t && t.setupIntegrations && t.setupIntegrations();
            }),
            (t.prototype.pushScope = function () {
              var t = p.Scope.clone(this.getScope());
              return (
                this.getStack().push({ client: this.getClient(), scope: t }), t
              );
            }),
            (t.prototype.popScope = function () {
              return !(this.getStack().length <= 1) && !!this.getStack().pop();
            }),
            (t.prototype.withScope = function (t) {
              var e = this.pushScope();
              try {
                t(e);
              } finally {
                this.popScope();
              }
            }),
            (t.prototype.getClient = function () {
              return this.getStackTop().client;
            }),
            (t.prototype.getScope = function () {
              return this.getStackTop().scope;
            }),
            (t.prototype.getStack = function () {
              return this._stack;
            }),
            (t.prototype.getStackTop = function () {
              return this._stack[this._stack.length - 1];
            }),
            (t.prototype.captureException = function (t, e) {
              var n = (this._lastEventId =
                  e && e.event_id ? e.event_id : (0, i.uuid4)()),
                s = e;
              if (!e) {
                var o = void 0;
                try {
                  throw new Error("Sentry syntheticException");
                } catch (t) {
                  o = t;
                }
                s = { originalException: t, syntheticException: o };
              }
              return (
                this._invokeClient(
                  "captureException",
                  t,
                  (0, r.__assign)((0, r.__assign)({}, s), { event_id: n })
                ),
                n
              );
            }),
            (t.prototype.captureMessage = function (t, e, n) {
              var s = (this._lastEventId =
                  n && n.event_id ? n.event_id : (0, i.uuid4)()),
                o = n;
              if (!n) {
                var a = void 0;
                try {
                  throw new Error(t);
                } catch (t) {
                  a = t;
                }
                o = { originalException: t, syntheticException: a };
              }
              return (
                this._invokeClient(
                  "captureMessage",
                  t,
                  e,
                  (0, r.__assign)((0, r.__assign)({}, o), { event_id: s })
                ),
                s
              );
            }),
            (t.prototype.captureEvent = function (t, e) {
              var n = e && e.event_id ? e.event_id : (0, i.uuid4)();
              return (
                "transaction" !== t.type && (this._lastEventId = n),
                this._invokeClient(
                  "captureEvent",
                  t,
                  (0, r.__assign)((0, r.__assign)({}, e), { event_id: n })
                ),
                n
              );
            }),
            (t.prototype.lastEventId = function () {
              return this._lastEventId;
            }),
            (t.prototype.addBreadcrumb = function (t, e) {
              var n = this.getStackTop(),
                i = n.scope,
                a = n.client;
              if (i && a) {
                var u = (a.getOptions && a.getOptions()) || {},
                  c = u.beforeBreadcrumb,
                  p = void 0 === c ? null : c,
                  d = u.maxBreadcrumbs,
                  l = void 0 === d ? 100 : d;
                if (!(l <= 0)) {
                  var _ = (0, s.dateTimestampInSeconds)(),
                    h = (0, r.__assign)({ timestamp: _ }, t),
                    f = p
                      ? (0, o.consoleSandbox)(function () {
                          return p(h, e);
                        })
                      : h;
                  null !== f && i.addBreadcrumb(f, l);
                }
              }
            }),
            (t.prototype.setUser = function (t) {
              var e = this.getScope();
              e && e.setUser(t);
            }),
            (t.prototype.setTags = function (t) {
              var e = this.getScope();
              e && e.setTags(t);
            }),
            (t.prototype.setExtras = function (t) {
              var e = this.getScope();
              e && e.setExtras(t);
            }),
            (t.prototype.setTag = function (t, e) {
              var n = this.getScope();
              n && n.setTag(t, e);
            }),
            (t.prototype.setExtra = function (t, e) {
              var n = this.getScope();
              n && n.setExtra(t, e);
            }),
            (t.prototype.setContext = function (t, e) {
              var n = this.getScope();
              n && n.setContext(t, e);
            }),
            (t.prototype.configureScope = function (t) {
              var e = this.getStackTop(),
                n = e.scope,
                r = e.client;
              n && r && t(n);
            }),
            (t.prototype.run = function (t) {
              var e = h(this);
              try {
                t(this);
              } finally {
                h(e);
              }
            }),
            (t.prototype.getIntegration = function (t) {
              var e = this.getClient();
              if (!e) return null;
              try {
                return e.getIntegration(t);
              } catch (e) {
                return (
                  c.IS_DEBUG_BUILD &&
                    o.logger.warn(
                      "Cannot retrieve integration " +
                        t.id +
                        " from the current Hub"
                    ),
                  null
                );
              }
            }),
            (t.prototype.startSpan = function (t) {
              return this._callExtensionMethod("startSpan", t);
            }),
            (t.prototype.startTransaction = function (t, e) {
              return this._callExtensionMethod("startTransaction", t, e);
            }),
            (t.prototype.traceHeaders = function () {
              return this._callExtensionMethod("traceHeaders");
            }),
            (t.prototype.captureSession = function (t) {
              if ((void 0 === t && (t = !1), t)) return this.endSession();
              this._sendSessionUpdate();
            }),
            (t.prototype.endSession = function () {
              var t = this.getStackTop(),
                e = t && t.scope,
                n = e && e.getSession();
              n && n.close(), this._sendSessionUpdate(), e && e.setSession();
            }),
            (t.prototype.startSession = function (t) {
              var e = this.getStackTop(),
                n = e.scope,
                i = e.client,
                s = (i && i.getOptions()) || {},
                o = s.release,
                u = s.environment,
                c = ((0, a.getGlobalObject)().navigator || {}).userAgent,
                p = new d.Session(
                  (0, r.__assign)(
                    (0, r.__assign)(
                      (0, r.__assign)(
                        { release: o, environment: u },
                        n && { user: n.getUser() }
                      ),
                      c && { userAgent: c }
                    ),
                    t
                  )
                );
              if (n) {
                var l = n.getSession && n.getSession();
                l && "ok" === l.status && l.update({ status: "exited" }),
                  this.endSession(),
                  n.setSession(p);
              }
              return p;
            }),
            (t.prototype._sendSessionUpdate = function () {
              var t = this.getStackTop(),
                e = t.scope,
                n = t.client;
              if (e) {
                var r = e.getSession && e.getSession();
                r && n && n.captureSession && n.captureSession(r);
              }
            }),
            (t.prototype._invokeClient = function (t) {
              for (var e, n = [], i = 1; i < arguments.length; i++)
                n[i - 1] = arguments[i];
              var s = this.getStackTop(),
                o = s.scope,
                a = s.client;
              a && a[t] && (e = a)[t].apply(e, (0, r.__spread)(n, [o]));
            }),
            (t.prototype._callExtensionMethod = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var r = _(),
                i = r.__SENTRY__;
              if (i && i.extensions && "function" == typeof i.extensions[t])
                return i.extensions[t].apply(this, e);
              c.IS_DEBUG_BUILD &&
                o.logger.warn(
                  "Extension method " + t + " couldn't be found, doing nothing."
                );
            }),
            t
          );
        })();
      function _() {
        var t = (0, a.getGlobalObject)();
        return (
          (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t
        );
      }
      function h(t) {
        var e = _(),
          n = v(e);
        return y(e, t), n;
      }
      function f() {
        var t = _();
        return (
          (g(t) && !v(t).isOlderThan(4)) || y(t, new l()),
          (0, u.isNodeEnv)()
            ? (function (t) {
                try {
                  var e = _().__SENTRY__,
                    n =
                      e &&
                      e.extensions &&
                      e.extensions.domain &&
                      e.extensions.domain.active;
                  if (!n) return v(t);
                  if (!g(n) || v(n).isOlderThan(4)) {
                    var r = v(t).getStackTop();
                    y(n, new l(r.client, p.Scope.clone(r.scope)));
                  }
                  return v(n);
                } catch (e) {
                  return v(t);
                }
              })(t)
            : v(t)
        );
      }
      function g(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
      }
      function v(t) {
        return (0, a.getGlobalSingleton)(
          "hub",
          function () {
            return new l();
          },
          t
        );
      }
      function y(t, e) {
        return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e), !0);
      }
    },
    146769: (t, e, n) => {
      "use strict";
      n.d(e, { Scope: () => u, addGlobalEventProcessor: () => p });
      var r = n(168907),
        i = n(567597),
        s = n(721170),
        o = n(196893),
        a = n(82991),
        u = (function () {
          function t() {
            (this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {}),
              (this._sdkProcessingMetadata = {});
          }
          return (
            (t.clone = function (e) {
              var n = new t();
              return (
                e &&
                  ((n._breadcrumbs = (0, r.__spread)(e._breadcrumbs)),
                  (n._tags = (0, r.__assign)({}, e._tags)),
                  (n._extra = (0, r.__assign)({}, e._extra)),
                  (n._contexts = (0, r.__assign)({}, e._contexts)),
                  (n._user = e._user),
                  (n._level = e._level),
                  (n._span = e._span),
                  (n._session = e._session),
                  (n._transactionName = e._transactionName),
                  (n._fingerprint = e._fingerprint),
                  (n._eventProcessors = (0, r.__spread)(e._eventProcessors)),
                  (n._requestSession = e._requestSession)),
                n
              );
            }),
            (t.prototype.addScopeListener = function (t) {
              this._scopeListeners.push(t);
            }),
            (t.prototype.addEventProcessor = function (t) {
              return this._eventProcessors.push(t), this;
            }),
            (t.prototype.setUser = function (t) {
              return (
                (this._user = t || {}),
                this._session && this._session.update({ user: t }),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.getUser = function () {
              return this._user;
            }),
            (t.prototype.getRequestSession = function () {
              return this._requestSession;
            }),
            (t.prototype.setRequestSession = function (t) {
              return (this._requestSession = t), this;
            }),
            (t.prototype.setTags = function (t) {
              return (
                (this._tags = (0, r.__assign)(
                  (0, r.__assign)({}, this._tags),
                  t
                )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setTag = function (t, e) {
              var n;
              return (
                (this._tags = (0, r.__assign)(
                  (0, r.__assign)({}, this._tags),
                  (((n = {})[t] = e), n)
                )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setExtras = function (t) {
              return (
                (this._extra = (0, r.__assign)(
                  (0, r.__assign)({}, this._extra),
                  t
                )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setExtra = function (t, e) {
              var n;
              return (
                (this._extra = (0, r.__assign)(
                  (0, r.__assign)({}, this._extra),
                  (((n = {})[t] = e), n)
                )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setFingerprint = function (t) {
              return (
                (this._fingerprint = t), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.setLevel = function (t) {
              return (this._level = t), this._notifyScopeListeners(), this;
            }),
            (t.prototype.setTransactionName = function (t) {
              return (
                (this._transactionName = t), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.setTransaction = function (t) {
              return this.setTransactionName(t);
            }),
            (t.prototype.setContext = function (t, e) {
              var n;
              return (
                null === e
                  ? delete this._contexts[t]
                  : (this._contexts = (0, r.__assign)(
                      (0, r.__assign)({}, this._contexts),
                      (((n = {})[t] = e), n)
                    )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setSpan = function (t) {
              return (this._span = t), this._notifyScopeListeners(), this;
            }),
            (t.prototype.getSpan = function () {
              return this._span;
            }),
            (t.prototype.getTransaction = function () {
              var t = this.getSpan();
              return t && t.transaction;
            }),
            (t.prototype.setSession = function (t) {
              return (
                t ? (this._session = t) : delete this._session,
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.getSession = function () {
              return this._session;
            }),
            (t.prototype.update = function (e) {
              if (!e) return this;
              if ("function" == typeof e) {
                var n = e(this);
                return n instanceof t ? n : this;
              }
              return (
                e instanceof t
                  ? ((this._tags = (0, r.__assign)(
                      (0, r.__assign)({}, this._tags),
                      e._tags
                    )),
                    (this._extra = (0, r.__assign)(
                      (0, r.__assign)({}, this._extra),
                      e._extra
                    )),
                    (this._contexts = (0, r.__assign)(
                      (0, r.__assign)({}, this._contexts),
                      e._contexts
                    )),
                    e._user &&
                      Object.keys(e._user).length &&
                      (this._user = e._user),
                    e._level && (this._level = e._level),
                    e._fingerprint && (this._fingerprint = e._fingerprint),
                    e._requestSession &&
                      (this._requestSession = e._requestSession))
                  : (0, i.isPlainObject)(e) &&
                    ((e = e),
                    (this._tags = (0, r.__assign)(
                      (0, r.__assign)({}, this._tags),
                      e.tags
                    )),
                    (this._extra = (0, r.__assign)(
                      (0, r.__assign)({}, this._extra),
                      e.extra
                    )),
                    (this._contexts = (0, r.__assign)(
                      (0, r.__assign)({}, this._contexts),
                      e.contexts
                    )),
                    e.user && (this._user = e.user),
                    e.level && (this._level = e.level),
                    e.fingerprint && (this._fingerprint = e.fingerprint),
                    e.requestSession &&
                      (this._requestSession = e.requestSession)),
                this
              );
            }),
            (t.prototype.clear = function () {
              return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._requestSession = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.addBreadcrumb = function (t, e) {
              var n = "number" == typeof e ? Math.min(e, 100) : 100;
              if (n <= 0) return this;
              var i = (0, r.__assign)(
                { timestamp: (0, s.dateTimestampInSeconds)() },
                t
              );
              return (
                (this._breadcrumbs = (0, r.__spread)(this._breadcrumbs, [
                  i,
                ]).slice(-n)),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.clearBreadcrumbs = function () {
              return (
                (this._breadcrumbs = []), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.applyToEvent = function (t, e) {
              if (
                (this._extra &&
                  Object.keys(this._extra).length &&
                  (t.extra = (0, r.__assign)(
                    (0, r.__assign)({}, this._extra),
                    t.extra
                  )),
                this._tags &&
                  Object.keys(this._tags).length &&
                  (t.tags = (0, r.__assign)(
                    (0, r.__assign)({}, this._tags),
                    t.tags
                  )),
                this._user &&
                  Object.keys(this._user).length &&
                  (t.user = (0, r.__assign)(
                    (0, r.__assign)({}, this._user),
                    t.user
                  )),
                this._contexts &&
                  Object.keys(this._contexts).length &&
                  (t.contexts = (0, r.__assign)(
                    (0, r.__assign)({}, this._contexts),
                    t.contexts
                  )),
                this._level && (t.level = this._level),
                this._transactionName &&
                  (t.transaction = this._transactionName),
                this._span)
              ) {
                t.contexts = (0, r.__assign)(
                  { trace: this._span.getTraceContext() },
                  t.contexts
                );
                var n = this._span.transaction && this._span.transaction.name;
                n && (t.tags = (0, r.__assign)({ transaction: n }, t.tags));
              }
              return (
                this._applyFingerprint(t),
                (t.breadcrumbs = (0, r.__spread)(
                  t.breadcrumbs || [],
                  this._breadcrumbs
                )),
                (t.breadcrumbs =
                  t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                (t.sdkProcessingMetadata = this._sdkProcessingMetadata),
                this._notifyEventProcessors(
                  (0, r.__spread)(c(), this._eventProcessors),
                  t,
                  e
                )
              );
            }),
            (t.prototype.setSDKProcessingMetadata = function (t) {
              return (
                (this._sdkProcessingMetadata = (0, r.__assign)(
                  (0, r.__assign)({}, this._sdkProcessingMetadata),
                  t
                )),
                this
              );
            }),
            (t.prototype._notifyEventProcessors = function (t, e, n, s) {
              var a = this;
              return (
                void 0 === s && (s = 0),
                new o.SyncPromise(function (o, u) {
                  var c = t[s];
                  if (null === e || "function" != typeof c) o(e);
                  else {
                    var p = c((0, r.__assign)({}, e), n);
                    (0, i.isThenable)(p)
                      ? p
                          .then(function (e) {
                            return a
                              ._notifyEventProcessors(t, e, n, s + 1)
                              .then(o);
                          })
                          .then(null, u)
                      : a
                          ._notifyEventProcessors(t, p, n, s + 1)
                          .then(o)
                          .then(null, u);
                  }
                })
              );
            }),
            (t.prototype._notifyScopeListeners = function () {
              var t = this;
              this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach(function (e) {
                  e(t);
                }),
                (this._notifyingListeners = !1));
            }),
            (t.prototype._applyFingerprint = function (t) {
              (t.fingerprint = t.fingerprint
                ? Array.isArray(t.fingerprint)
                  ? t.fingerprint
                  : [t.fingerprint]
                : []),
                this._fingerprint &&
                  (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
            }),
            t
          );
        })();
      function c() {
        return (0, a.getGlobalSingleton)("globalEventProcessors", function () {
          return [];
        });
      }
      function p(t) {
        c().push(t);
      }
    },
    695771: (t, e, n) => {
      "use strict";
      n.d(e, { Session: () => o });
      var r = n(362844),
        i = n(721170),
        s = n(320535),
        o = (function () {
          function t(t) {
            (this.errors = 0),
              (this.sid = (0, r.uuid4)()),
              (this.duration = 0),
              (this.status = "ok"),
              (this.init = !0),
              (this.ignoreDuration = !1);
            var e = (0, i.timestampInSeconds)();
            (this.timestamp = e), (this.started = e), t && this.update(t);
          }
          return (
            (t.prototype.update = function (t) {
              if (
                (void 0 === t && (t = {}),
                t.user &&
                  (!this.ipAddress &&
                    t.user.ip_address &&
                    (this.ipAddress = t.user.ip_address),
                  this.did ||
                    t.did ||
                    (this.did = t.user.id || t.user.email || t.user.username)),
                (this.timestamp = t.timestamp || (0, i.timestampInSeconds)()),
                t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
                t.sid &&
                  (this.sid = 32 === t.sid.length ? t.sid : (0, r.uuid4)()),
                void 0 !== t.init && (this.init = t.init),
                !this.did && t.did && (this.did = "" + t.did),
                "number" == typeof t.started && (this.started = t.started),
                this.ignoreDuration)
              )
                this.duration = void 0;
              else if ("number" == typeof t.duration)
                this.duration = t.duration;
              else {
                var e = this.timestamp - this.started;
                this.duration = e >= 0 ? e : 0;
              }
              t.release && (this.release = t.release),
                t.environment && (this.environment = t.environment),
                !this.ipAddress &&
                  t.ipAddress &&
                  (this.ipAddress = t.ipAddress),
                !this.userAgent &&
                  t.userAgent &&
                  (this.userAgent = t.userAgent),
                "number" == typeof t.errors && (this.errors = t.errors),
                t.status && (this.status = t.status);
            }),
            (t.prototype.close = function (t) {
              t
                ? this.update({ status: t })
                : "ok" === this.status
                ? this.update({ status: "exited" })
                : this.update();
            }),
            (t.prototype.toJSON = function () {
              return (0, s.dropUndefinedKeys)({
                sid: "" + this.sid,
                init: this.init,
                started: new Date(1e3 * this.started).toISOString(),
                timestamp: new Date(1e3 * this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did:
                  "number" == typeof this.did || "string" == typeof this.did
                    ? "" + this.did
                    : void 0,
                duration: this.duration,
                attrs: {
                  release: this.release,
                  environment: this.environment,
                  ip_address: this.ipAddress,
                  user_agent: this.userAgent,
                },
              });
            }),
            t
          );
        })();
    },
    539666: (t, e, n) => {
      "use strict";
      n.d(e, {
        captureException: () => o,
        captureMessage: () => a,
        captureEvent: () => u,
        configureScope: () => c,
        addBreadcrumb: () => p,
        setContext: () => d,
        setExtras: () => l,
        setTags: () => _,
        setExtra: () => h,
        setTag: () => f,
        setUser: () => g,
        withScope: () => v,
        startTransaction: () => y,
      });
      var r = n(603634),
        i = n(938641);
      function s(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        var s = (0, i.getCurrentHub)();
        if (s && s[t]) return s[t].apply(s, (0, r.__spread)(e));
        throw new Error(
          "No hub defined or " +
            t +
            " was not found on the hub, please open a bug report."
        );
      }
      function o(t, e) {
        return s("captureException", t, {
          captureContext: e,
          originalException: t,
          syntheticException: new Error("Sentry syntheticException"),
        });
      }
      function a(t, e) {
        var n = new Error(t),
          i = "string" != typeof e ? { captureContext: e } : void 0;
        return s(
          "captureMessage",
          t,
          "string" == typeof e ? e : void 0,
          (0, r.__assign)({ originalException: t, syntheticException: n }, i)
        );
      }
      function u(t) {
        return s("captureEvent", t);
      }
      function c(t) {
        s("configureScope", t);
      }
      function p(t) {
        s("addBreadcrumb", t);
      }
      function d(t, e) {
        s("setContext", t, e);
      }
      function l(t) {
        s("setExtras", t);
      }
      function _(t) {
        s("setTags", t);
      }
      function h(t, e) {
        s("setExtra", t, e);
      }
      function f(t, e) {
        s("setTag", t, e);
      }
      function g(t) {
        s("setUser", t);
      }
      function v(t) {
        s("withScope", t);
      }
      function y(t, e) {
        return s("startTransaction", (0, r.__assign)({}, t), e);
      }
    },
  },
]);
try {
  stManager.done(
    "dist/bbd3772e7186114b708bce2cac0c3676.3c2cbcd43e9c477fc4f3.js"
  );
} catch (t) {}
