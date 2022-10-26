(() => {
  "use strict";
  var e,
    r,
    t,
    n = {
      566886: (e, r, t) => {
        t.d(r, {
          Severity: () => n.Severity,
          addGlobalEventProcessor: () => o.addGlobalEventProcessor,
          addBreadcrumb: () => i.addBreadcrumb,
          captureException: () => i.captureException,
          captureEvent: () => i.captureEvent,
          captureMessage: () => i.captureMessage,
          configureScope: () => i.configureScope,
          getHubFromCarrier: () => a.getHubFromCarrier,
          getCurrentHub: () => a.getCurrentHub,
          Hub: () => a.Hub,
          makeMain: () => a.makeMain,
          Scope: () => o.Scope,
          Session: () => s.Session,
          startTransaction: () => i.startTransaction,
          SDK_VERSION: () => u.SDK_VERSION,
          setContext: () => i.setContext,
          setExtra: () => i.setExtra,
          setExtras: () => i.setExtras,
          setTag: () => i.setTag,
          setTags: () => i.setTags,
          setUser: () => i.setUser,
          withScope: () => i.withScope,
          BrowserClient: () => l.BrowserClient,
          injectReportDialog: () => d.injectReportDialog,
          eventFromException: () => c.eventFromException,
          eventFromMessage: () => c.eventFromMessage,
          defaultIntegrations: () => v.defaultIntegrations,
          forceLoad: () => v.forceLoad,
          init: () => v.init,
          lastEventId: () => v.lastEventId,
          onLoad: () => v.onLoad,
          showReportDialog: () => v.showReportDialog,
          flush: () => v.flush,
          close: () => v.close,
          wrap: () => v.wrap,
          SDK_NAME: () => f.SDK_NAME,
        });
        var n = t(13819),
          o = t(146769),
          i = t(539666),
          a = t(938641),
          s = t(695771),
          u = t(840105),
          l = t(49680),
          d = t(986891),
          c = t(784773),
          v = t(619011),
          f = t(440683);
      },
      247820: (e, r, t) => {
        t.r(r),
          t.d(r, {
            BrowserClient: () => o.BrowserClient,
            Hub: () => o.Hub,
            SDK_NAME: () => o.SDK_NAME,
            SDK_VERSION: () => o.SDK_VERSION,
            Scope: () => o.Scope,
            Session: () => o.Session,
            Severity: () => o.Severity,
            addBreadcrumb: () => o.addBreadcrumb,
            addGlobalEventProcessor: () => o.addGlobalEventProcessor,
            captureEvent: () => o.captureEvent,
            captureException: () => o.captureException,
            captureMessage: () => o.captureMessage,
            close: () => o.close,
            configureScope: () => o.configureScope,
            defaultIntegrations: () => o.defaultIntegrations,
            eventFromException: () => o.eventFromException,
            eventFromMessage: () => o.eventFromMessage,
            flush: () => o.flush,
            forceLoad: () => o.forceLoad,
            getCurrentHub: () => o.getCurrentHub,
            getHubFromCarrier: () => o.getHubFromCarrier,
            init: () => o.init,
            injectReportDialog: () => o.injectReportDialog,
            lastEventId: () => o.lastEventId,
            makeMain: () => o.makeMain,
            onLoad: () => o.onLoad,
            setContext: () => o.setContext,
            setExtra: () => o.setExtra,
            setExtras: () => o.setExtras,
            setTag: () => o.setTag,
            setTags: () => o.setTags,
            setUser: () => o.setUser,
            showReportDialog: () => o.showReportDialog,
            startTransaction: () => o.startTransaction,
            withScope: () => o.withScope,
            wrap: () => o.wrap,
            Integrations: () => c,
            Transports: () => u,
          });
        var n = t(66856),
          o = t(566886),
          i = t(653162),
          a = t(82991),
          s = t(607687),
          u = t(208153),
          l = {},
          d = (0, a.getGlobalObject)();
        d.Sentry && d.Sentry.Integrations && (l = d.Sentry.Integrations);
        var c = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, l), i), s);
      },
      607687: (e, r, t) => {
        t.r(r),
          t.d(r, {
            GlobalHandlers: () => n.GlobalHandlers,
            TryCatch: () => o.TryCatch,
            Breadcrumbs: () => i.Breadcrumbs,
            LinkedErrors: () => a.LinkedErrors,
            UserAgent: () => s.UserAgent,
            Dedupe: () => u.Dedupe,
          });
        var n = t(652136),
          o = t(653692),
          i = t(890564),
          a = t(161634),
          s = t(333931),
          u = t(869730);
      },
      208153: (e, r, t) => {
        t.r(r),
          t.d(r, {
            BaseTransport: () => n.BaseTransport,
            FetchTransport: () => o.FetchTransport,
            XHRTransport: () => i.XHRTransport,
            makeNewFetchTransport: () => a.makeNewFetchTransport,
            makeNewXHRTransport: () => s.makeNewXHRTransport,
          });
        var n = t(385162),
          o = t(68690),
          i = t(768131),
          a = t(220754),
          s = t(620116);
      },
      440683: (e, r, t) => {
        t.d(r, { SDK_NAME: () => n });
        var n = "sentry.javascript.browser";
      },
      653162: (e, r, t) => {
        t.r(r),
          t.d(r, {
            FunctionToString: () => n.FunctionToString,
            InboundFilters: () => o.InboundFilters,
          });
        var n = t(19116),
          o = t(242422);
      },
      985513: (e, r, t) => {
        t.d(r, { initSentry: () => p });
        var n = t(570655),
          o = t(619011),
          i = t(539666),
          a = t(247820),
          s = t(649846),
          u = t(19331),
          l = t(961540),
          d = t(930216),
          c = t(209509),
          v = t(401208),
          f = s.navigationStat.getModule,
          p = function (e) {
            var r = e.dsn,
              t = e.moduleChangeListener,
              s = e.peKeyOfVerboseMode,
              p = e.ignoreErrors,
              g = e.initialScope,
              _ = e.integrations,
              m = (0, n.__rest)(e, [
                "dsn",
                "moduleChangeListener",
                "peKeyOfVerboseMode",
                "ignoreErrors",
                "initialScope",
                "integrations",
              ]),
              y = (0, l.getGlobalObject)().vk || {},
              E = y.statsMeta,
              S = y.id,
              b = !!(null == E ? void 0 : E.st) && (0, u.partConfigEnabled)(s),
              h = (0, d.getEnvironment)(),
              w = (0, d.getRelease)(h);
            o.init(
              (0, n.__assign)(
                {
                  environment: h,
                  release: w,
                  dsn: "https://" + r[0] + "@stacks.vk-portal.net/" + r[1],
                  ignoreErrors: c.commonIgnoreErrors.concat(p || []),
                  sampleRate: 1,
                  maxBreadcrumbs: b ? 3 : 1,
                  autoSessionTracking: !w || !t,
                  integrations: (0, n.__spreadArray)(
                    (0, n.__spreadArray)(
                      (0, n.__spreadArray)(
                        (0, n.__spreadArray)(
                          (0, n.__spreadArray)(
                            [],
                            (0, n.__read)(
                              (0, u.partConfigEnabled)(
                                "sentry_js_sanitize_frames"
                              )
                                ? [new v.FramesSanitizer()]
                                : []
                            ),
                            !1
                          ),
                          [new v.BadScripts(), new v.ModuleDetect(f)],
                          !1
                        ),
                        (0, n.__read)(
                          (0, u.partConfigEnabled)("sentry_js_reference_errors")
                            ? [new v.ReferenceErrors()]
                            : []
                        ),
                        !1
                      ),
                      (0, n.__read)(
                        (0, u.partConfigEnabled)("sentry_js_parsers")
                          ? [new v.Parsers()]
                          : []
                      ),
                      !1
                    ),
                    (0, n.__read)(_ || []),
                    !1
                  ),
                  initialScope: (0, n.__assign)(
                    {
                      tags: (0, n.__assign)(
                        (0, n.__assign)(
                          (0, n.__assign)(
                            {},
                            (null == g ? void 0 : g.tags) || {}
                          ),
                          {}
                        ),
                        { is_logged_in: Boolean(S), module: f() }
                      ),
                    },
                    S ? { user: { id: String(S) } } : {}
                  ),
                },
                m
              )
            ),
              o.onLoad(function () {
                return null == t
                  ? void 0
                  : t(function () {
                      return i.setTag("module", f());
                    });
              }),
              (window.Sentry = a);
          };
      },
      914301: (e, r, t) => {
        t.d(r, { BadScripts: () => a });
        var n = t(13819),
          o = t(930216),
          i = t(209509),
          a = (function () {
            function e() {
              (this.name = e.id),
                (this.lastSentErrors = new Set()),
                (this.maxLastSentErrors = 10);
            }
            return (
              (e.getFrames = function (e) {
                var r;
                return null === (r = (0, o.getStacktrace)(e)) || void 0 === r
                  ? void 0
                  : r.frames;
              }),
              (e.getLastFrame = function (r) {
                var t;
                return null === (t = e.getFrames(r)) || void 0 === t
                  ? void 0
                  : t.slice(-1).pop();
              }),
              (e.onLocalWindows = function (e) {
                var r;
                return /^file:\/\/\/[A-Z]:(\\|\/)/.test(
                  (null === (r = null == e ? void 0 : e.request) || void 0 === r
                    ? void 0
                    : r.url) || ""
                );
              }),
              (e.inAnonymousFilename = function (e) {
                return e === i.anonymousName;
              }),
              (e.inNativeCode = function (e) {
                return e === i.nativeCode;
              }),
              (e.prototype.inExtension = function (r) {
                var t;
                return null === (t = e.getFrames(r)) || void 0 === t
                  ? void 0
                  : t.some(function (e) {
                      return i.extensionPrefixes.some(function (r) {
                        var t;
                        return null === (t = e.filename) || void 0 === t
                          ? void 0
                          : t.startsWith(r);
                      });
                    });
              }),
              (e.prototype.alreadySent = function (e, r) {
                var t = [
                  (0, o.getTitleFromEventOrHint)(e, r),
                  (0, o.getStackStringFromEventOrHint)(e, r),
                ].join("_");
                return (
                  this.lastSentErrors.size > this.maxLastSentErrors &&
                    this.lastSentErrors.clear(),
                  !!this.lastSentErrors.has(t) ||
                    (this.lastSentErrors.add(t), !1)
                );
              }),
              (e.prototype.findAllPredicates = function (r, t) {
                var n = e.getLastFrame(r),
                  i = {
                    inExtension: this.inExtension(r),
                    isServiceWorker: (0, o.isServiceWorker)(t),
                    inAnonymousFilename: !1,
                    inNativeCode: !1,
                    onLocalWindows: e.onLocalWindows(r),
                    withoutFrames: !e.getFrames(r),
                  };
                return (
                  n &&
                    ((i.inAnonymousFilename = e.inAnonymousFilename(
                      null == n ? void 0 : n.filename
                    )),
                    (i.inNativeCode = e.inNativeCode(
                      null == n ? void 0 : n.filename
                    ))),
                  i
                );
              }),
              (e.prototype.setupOnce = function (r, t) {
                var a = this;
                r(function (r, s) {
                  if (t().getIntegration(e)) {
                    var u = a.findAllPredicates(r, s),
                      l = [
                        u.inExtension,
                        u.isServiceWorker,
                        u.inAnonymousFilename,
                        u.inNativeCode,
                        u.withoutFrames,
                      ].some(Boolean),
                      d = [l].some(Boolean);
                    return [u.onLocalWindows].some(Boolean)
                      ? null
                      : (u.inExtension &&
                          (0, o.setException)(r, {
                            type: i.CustomSentryErrorTypes.ERROR_OF_EXTENSION,
                          }),
                        d && (r.level = n.Severity.Warning),
                        l && a.alreadySent(r, s) ? null : r);
                  }
                  return r;
                });
              }),
              (e.id = "BadScripts"),
              e
            );
          })();
      },
      4126: (e, r, t) => {
        t.d(r, { FramesSanitizer: () => i });
        var n = t(570655),
          o = t(840105),
          i = (function () {
            function e() {
              this.name = e.id;
            }
            return (
              (e.prototype.setupOnce = function (r, t) {
                r(function (r) {
                  var n = t().getIntegration(e);
                  return n ? n.process(r) : r;
                });
              }),
              (e.prototype.process = function (e) {
                var r,
                  t = e;
                return (
                  Array.isArray(
                    null === (r = null == e ? void 0 : e.exception) ||
                      void 0 === r
                      ? void 0
                      : r.values
                  ) && (t = this._processExceptionsEvent(t)),
                  o.SDK_VERSION.startsWith("6") &&
                    (null == e ? void 0 : e.stacktrace) &&
                    (t = this._processStacktraceEvent(t)),
                  t
                );
              }),
              (e.isSentryFrame = function (e) {
                var r = e.filename;
                return ["web/sentry", "mobile/vendor~sentry"].some(function (
                  e
                ) {
                  return null == r ? void 0 : r.includes("/dist/" + e + ".");
                });
              }),
              (e.isRavenFrame = function (e) {
                var r = e.filename;
                return ["web/raven_logger", "mobile/vendor~raven"].some(
                  function (e) {
                    return null == r ? void 0 : r.includes("/dist/" + e + ".");
                  }
                );
              }),
              (e.iteratee = function (r) {
                return [e.isSentryFrame, e.isRavenFrame].some(function (e) {
                  return e(r);
                })
                  ? void 0
                  : r;
              }),
              (e.prototype._processExceptionsEvent = function (e) {
                var r = this;
                try {
                  return (0, n.__assign)((0, n.__assign)({}, e), {
                    exception: (0, n.__assign)(
                      (0, n.__assign)({}, e.exception),
                      {
                        values: e.exception.values.map(function (e) {
                          return (0,
                          n.__assign)((0, n.__assign)({}, e), e.stacktrace && { stacktrace: r._processStacktrace(e.stacktrace) });
                        }),
                      }
                    ),
                  });
                } catch (r) {
                  return e;
                }
              }),
              (e.prototype._processStacktraceEvent = function (e) {
                try {
                  return (0, n.__assign)((0, n.__assign)({}, e), {
                    stacktrace: this._processStacktrace(e.stacktrace),
                  });
                } catch (r) {
                  return e;
                }
              }),
              (e.prototype._processStacktrace = function (r) {
                var t;
                return (0, n.__assign)((0, n.__assign)({}, r), {
                  frames:
                    null === (t = null == r ? void 0 : r.frames) || void 0 === t
                      ? void 0
                      : t.reduce(function (r, t) {
                          var o = e.iteratee(t);
                          return o
                            ? (0, n.__spreadArray)(
                                (0, n.__spreadArray)(
                                  [],
                                  (0, n.__read)(r || []),
                                  !1
                                ),
                                [o],
                                !1
                              )
                            : r;
                        }, void 0),
                });
              }),
              (e.id = "FramesSanitizer"),
              e
            );
          })();
      },
      401208: (e, r, t) => {
        t.d(r, {
          BadScripts: () => n.BadScripts,
          ModuleDetect: () => o.ModuleDetect,
          FramesSanitizer: () => i.FramesSanitizer,
          KnownIssues: () => a.KnownIssues,
          ReferenceErrors: () => s.ReferenceErrors,
          Parsers: () => u.Parsers,
        });
        var n = t(914301),
          o = t(201361),
          i = t(4126),
          a = t(535925),
          s = t(93922),
          u = t(639558);
      },
      535925: (e, r, t) => {
        t.d(r, { KnownIssues: () => u });
        var n = t(570655),
          o = t(13819),
          i = t(19331),
          a = t(209509),
          s = t(930216),
          u = (function () {
            function e(r) {
              (this.getKnownIssues = r), (this.name = e.id);
            }
            return (
              (e.prototype.isWellKnown = function (e) {
                var r = Object.entries(this.getKnownIssues(e) || {});
                return (
                  !!r.length &&
                  r.reduce(function (e, r) {
                    var t = (0, n.__read)(r, 2),
                      o = t[0],
                      i = t[1];
                    return (null == i ? void 0 : i.every(Boolean))
                      ? parseFloat(o)
                      : e;
                  }, !1)
                );
              }),
              (e.prototype.setupOnce = function (r, t) {
                var n = this;
                r(function (r) {
                  if (t().getIntegration(e)) {
                    var u = n.isWellKnown(r);
                    if (u) {
                      if (!(0, i.randEnabled)(u)) return null;
                      var l = (0, s.getException)(r) || {},
                        d = l.type,
                        c = l.value;
                      d &&
                        c &&
                        ((r.level = o.Severity.Warning),
                        (r.fingerprint = ["{{ default }}", "{{ type }}"]),
                        (0, s.setException)(r, {
                          type: a.CustomSentryErrorTypes.KNOWN_ISSUE,
                          value: d + ": " + c,
                        }));
                    }
                  }
                  return r;
                });
              }),
              (e.id = "KnownIssues"),
              e
            );
          })();
      },
      201361: (e, r, t) => {
        t.d(r, { ModuleDetect: () => s });
        var n = t(961540),
          o = t(930216),
          i = t(209509),
          a = t(394849),
          s = (function () {
            function e(r) {
              (this.getModuleFallback = r), (this.name = e.id);
            }
            return (
              (e.isExternalService = function (e) {
                return (
                  (null == e ? void 0 : e.startsWith("http")) &&
                  !n.VK_URL_REGEX_STRICT.test(e)
                );
              }),
              (e.detectModuleInSentryEvent = function (r, t) {
                var n = (0, o.getStackStringFromEventOrHint)(r, t);
                return (0, o.isServiceWorker)(t)
                  ? a.SentryExplicitModule.SERVICE_WORKER
                  : e.isExternalService(n)
                  ? a.SentryExplicitModule.EXTERNAL
                  : (0, o.findModuleByStacktrace)((0, o.getStacktrace)(r)) ||
                    (0, o.findModuleByStackString)(n);
              }),
              (e.prototype.setupOnce = function (r, t) {
                var n = this;
                r(function (r, o) {
                  if (t().getIntegration(e)) {
                    if (null == r ? void 0 : r.tags) {
                      var a = i.PROTECTED_MODULE_NAME_TAG;
                      r.tags[a] ||
                        (r.tags.module =
                          e.detectModuleInSentryEvent(r, o) ||
                          n.getModuleFallback()),
                        r.tags.hasOwnProperty(a) && delete r.tags[a];
                    }
                    return r;
                  }
                  return r;
                });
              }),
              (e.id = "ModuleDetect"),
              e
            );
          })();
      },
      639558: (e, r, t) => {
        t.d(r, { Parsers: () => i });
        var n = t(930216),
          o = t(209509),
          i = (function () {
            function e() {
              this.name = e.id;
            }
            return (
              (e.prototype.setupOnce = function (r, t) {
                r(function (r) {
                  var i, a;
                  if (t().getIntegration(e)) {
                    var s =
                        null !== (i = (0, n.getException)(r)) && void 0 !== i
                          ? i
                          : {},
                      u = s.type,
                      l = s.value,
                      d = (
                        null !== (a = (0, n.getStacktrace)(r)) && void 0 !== a
                          ? a
                          : {}
                      ).frames;
                    u &&
                      l &&
                      (null == d
                        ? void 0
                        : d.some(function (e) {
                            return e.function === o.globalCode;
                          })) &&
                      (r.fingerprint = [o.globalCode, u, l]);
                  }
                  return r;
                });
              }),
              (e.id = "Parsers"),
              e
            );
          })();
      },
      93922: (e, r, t) => {
        t.d(r, { ReferenceErrors: () => a });
        var n = t(209509),
          o = t(930216),
          i = [" is not defined", "Can't find variable: "],
          a = (function () {
            function e() {
              this.name = e.id;
            }
            return (
              (e.prototype.setupOnce = function (r, t) {
                r(function (r) {
                  var a, s, u;
                  if (t().getIntegration(e)) {
                    var l =
                        null !== (a = (0, o.getException)(r)) && void 0 !== a
                          ? a
                          : {},
                      d = l.type,
                      c = l.value;
                    if (d !== n.ReferenceError || !c) return r;
                    var v = String(
                        null !==
                          (u =
                            null === (s = r.tags) || void 0 === s
                              ? void 0
                              : s.module) && void 0 !== u
                          ? u
                          : "unknown"
                      ),
                      f = i
                        .reduce(function (e, r) {
                          return e.replace(r, "");
                        }, c)
                        .replace(/['"]/g, "");
                    r.fingerprint = [d, v, f];
                  }
                  return r;
                });
              }),
              (e.id = "ReferenceErrors"),
              e
            );
          })();
      },
      394849: (e, r, t) => {
        var n;
        t.d(r, { SentryExplicitModule: () => n }),
          (function (e) {
            (e.SERVICE_WORKER = "service_worker"),
              (e.EXTERNAL = "external"),
              (e.UNKNOWN = "unknown");
          })(n || (n = {}));
      },
      930216: (e, r, t) => {
        t.d(r, {
          getException: () => d,
          setException: () => c,
          getTitleFromEventOrHint: () => v,
          getStackStringFromEventOrHint: () => f,
          getStacktrace: () => p,
          getEnvironment: () => g,
          getRelease: () => _,
          isServiceWorker: () => m,
          findModuleByStackString: () => y,
          findModuleByStacktrace: () => E,
        });
        var n = t(570655),
          o = t(840105),
          i = t(40906),
          a = t(209509),
          s = (t(394849), (0, t(961540).getGlobalObject)()),
          u = (s.location, s.vk),
          l = function (e, r) {
            var t = (e || {}).originalException;
            return "string" == typeof t ? t : null == t ? void 0 : t[r];
          },
          d = function (e) {
            var r, t;
            return null ===
              (t =
                null === (r = null == e ? void 0 : e.exception) || void 0 === r
                  ? void 0
                  : r.values) || void 0 === t
              ? void 0
              : t[0];
          },
          c = function (e, r) {
            var t,
              o,
              a = d(e);
            if ((0, i.isObject)(a))
              try {
                for (
                  var s = (0, n.__values)(Object.entries(r)), u = s.next();
                  !u.done;
                  u = s.next()
                ) {
                  var l = (0, n.__read)(u.value, 2),
                    c = l[0],
                    v = l[1];
                  (null == a ? void 0 : a.hasOwnProperty(c)) && (a[c] = v);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  u && !u.done && (o = s.return) && o.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
            return e;
          },
          v = function (e, r) {
            var t = d(e) || {},
              n = t.type,
              o = t.value;
            return l(r, "message") || [n, o].join(" ");
          },
          f = function (e, r) {
            return (
              l(r, "stack") ||
              (function (e) {
                var r, t;
                return null ===
                  (t =
                    null === (r = e.exception) || void 0 === r
                      ? void 0
                      : r.values) || void 0 === t
                  ? void 0
                  : t
                      .map(function (e) {
                        var r,
                          t = e.stacktrace;
                        return null === (r = null == t ? void 0 : t.frames) ||
                          void 0 === r
                          ? void 0
                          : r.map(function (e) {
                              return e.filename;
                            });
                      })
                      .join();
              })(e)
            );
          },
          p = function (e) {
            var r,
              t = null === (r = d(e)) || void 0 === r ? void 0 : r.stacktrace;
            return o.SDK_VERSION.startsWith("6")
              ? t || (null == e ? void 0 : e.stacktrace)
              : t;
          },
          g = function () {
            var e;
            return (
              null === (e = null == u ? void 0 : u.statsMeta) || void 0 === e
                ? void 0
                : e.st
            )
              ? "staging"
              : "production";
          },
          _ = function (e) {
            return null == u ? void 0 : u.rv;
          },
          m = function (e) {
            var r,
              t = null == e ? void 0 : e.originalException;
            return (
              !(
                !t ||
                "mvk" !==
                  (null === (r = null == u ? void 0 : u.statsMeta) ||
                  void 0 === r
                    ? void 0
                    : r.platform)
              ) &&
              ("string" == typeof t
                ? t
                : String(null == t ? void 0 : t.message)
              )
                .toLowerCase()
                .includes("serviceworker")
            );
          },
          y = function (e) {
            var r, t, o;
            if (e)
              try {
                for (
                  var i = (0, n.__values)(
                      Object.entries(a.moduleDetectionConfig.includes)
                    ),
                    s = i.next();
                  !s.done;
                  s = i.next()
                ) {
                  var u = (0, n.__read)(s.value, 2),
                    l = u[0],
                    d = u[1];
                  if (e.includes(d)) {
                    o = l;
                    break;
                  }
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  s && !s.done && (t = i.return) && t.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
            return o;
          },
          E = function (e) {
            var r, t, o, i, s;
            if (e && Array.isArray(e.frames)) {
              var u = e.frames.reverse();
              try {
                for (
                  var l = (0, n.__values)(
                      Object.entries(a.moduleDetectionConfig.some)
                    ),
                    d = l.next();
                  !d.done;
                  d = l.next()
                ) {
                  var c = (0, n.__read)(d.value, 2),
                    v = c[0];
                  if ((0, c[1])(u)) {
                    s = v;
                    break;
                  }
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  d && !d.done && (t = l.return) && t.call(l);
                } finally {
                  if (r) throw r.error;
                }
              }
              if (!s)
                try {
                  for (
                    var f = (0, n.__values)(u), p = f.next();
                    !p.done;
                    p = f.next()
                  ) {
                    var g = p.value,
                      _ = y(g.filename);
                    if (_) {
                      s = _;
                      break;
                    }
                  }
                } catch (e) {
                  o = { error: e };
                } finally {
                  try {
                    p && !p.done && (i = f.return) && i.call(f);
                  } finally {
                    if (o) throw o.error;
                  }
                }
            }
            return s;
          };
      },
      528603: (e, r, t) => {
        var n,
          o = t(570655),
          i = t(985513),
          a = t(19331),
          s = t(300801),
          u = t(401208),
          l = t(246111),
          d = t(961540);
        (0, i.initSentry)({
          dsn: ["d98c13466f87431e8460fb4d0f55aa15", 25],
          peKeyOfVerboseMode: "sentry_js_web_verbose",
          moduleChangeListener:
            null === (n = (0, d.getGlobalObject)().nav) || void 0 === n
              ? void 0
              : n.subscribeOnModuleEvaluated,
          integrations: (0, o.__spreadArray)(
            (0, o.__spreadArray)(
              (0, o.__spreadArray)(
                [],
                (0, o.__read)(
                  (0, a.partConfigEnabled)(
                    "sentry_js_server_errors_integration"
                  )
                    ? [new s.ServerErrors()]
                    : []
                ),
                !1
              ),
              (0, o.__read)(
                (0, a.partConfigEnabled)("sentry_js_handled_errors_integration")
                  ? [new s.HandledErrors()]
                  : []
              ),
              !1
            ),
            (0, o.__read)(
              (0, a.partConfigEnabled)("sentry_js_known_issues_web_integration")
                ? [new u.KnownIssues(l.getKnownIssuesOfWeb)]
                : []
            ),
            !1
          ),
        });
        try {
          window.stManager.done(window.jsc("web/sentry.js"));
        } catch (e) {}
      },
      246111: (e, r, t) => {
        t.d(r, {
          WebCustomSentryErrorTypes: () => n,
          getKnownIssuesOfWeb: () => a,
        });
        var n,
          o = t(209509),
          i = t(930216);
        !(function (e) {
          (e.TIMEOUT = "Timeout"), (e.TOP_ERROR = "TopError");
        })(n || (n = {}));
        var a = function (e) {
          var r,
            t,
            n = (0, i.getException)(e) || {},
            a = n.type,
            s = n.value,
            u = (n.stacktrace || {}).frames,
            l = String(
              null === (r = null == e ? void 0 : e.tags) || void 0 === r
                ? void 0
                : r.module
            );
          return Array.isArray(u)
            ? {
                0.05: [
                  a === o.TypeError,
                  "Cannot redefine property: getChannelData" === s,
                  !(null === (t = null == e ? void 0 : e.tags) || void 0 === t
                    ? void 0
                    : t.is_logged_in),
                  u.every(function (e) {
                    return "<anonymous>" === e.filename;
                  }),
                  ["video", "unknown"].includes(l),
                ],
                0.075: [
                  a === o.TypeError,
                  null == s ? void 0 : s.includes(".finally is not a function"),
                  ["videoplayer", "notifier"].includes(l),
                ],
                0.1: [
                  a === o.CustomSentryErrorTypes.ERROR_OF_EXTENSION,
                  u.some(function (e) {
                    var r;
                    return null === (r = e.filename) || void 0 === r
                      ? void 0
                      : r.includes("/vkopt.js");
                  }),
                  "profile" === l,
                ],
                0.15: [
                  a === o.Error,
                  null == s
                    ? void 0
                    : s.includes("Empty response. Method: auth.anonymLogin"),
                  "videoplayer" === l,
                ],
              }
            : {};
        };
      },
      798302: (e, r, t) => {
        t.d(r, { HandledErrors: () => u });
        var n = t(209509),
          o = t(362844),
          i = t(246111),
          a = t(401208),
          s = t(930216),
          u = (function () {
            function e() {
              this.name = e.id;
            }
            return (
              (e.breadcrumbWithCustomCategory = function (e) {
                var r = e.breadcrumbs;
                return null == r
                  ? void 0
                  : r.find(function (e) {
                      return e.category === n.customBreadcrumbCategory;
                    });
              }),
              (e.shortenMessage = function (e) {
                var r,
                  t = e.split("#")[0].trim();
                return t.startsWith(
                  null ===
                    (r =
                      null === window || void 0 === window
                        ? void 0
                        : window.lang) || void 0 === r
                    ? void 0
                    : r.global_unknown_error
                )
                  ? "unknown_error"
                  : t;
              }),
              (e.getModuleFromCustomBreadcrumb = function (e) {
                var r,
                  t =
                    null === (r = null == e ? void 0 : e.data) || void 0 === r
                      ? void 0
                      : r.module;
                return "string" == typeof t && "[undefined]" !== t ? t : void 0;
              }),
              (e.prototype.setupOnce = function (r, t) {
                r(function (r, u) {
                  var l, d;
                  if (
                    t().getIntegration(e) &&
                    (0, s.getException)(r) &&
                    (null === (l = r.tags) || void 0 === l
                      ? void 0
                      : l.module) === n.topErrorModuleName
                  ) {
                    var c =
                        null === (d = r.extra) || void 0 === d
                          ? void 0
                          : d.__serialized__,
                      v = "string" == typeof c ? {} : c || {},
                      f = v.url,
                      p = v.type,
                      g = e.breadcrumbWithCustomCategory(r),
                      _ = f && (0, o.stripUrlQueryAndFragment)(f),
                      m = p && n.errorEventNames[p];
                    (0, s.setException)(r, {
                      type: i.WebCustomSentryErrorTypes.TOP_ERROR,
                    }),
                      g &&
                        _ &&
                        m &&
                        ((r.tags.module =
                          e.getModuleFromCustomBreadcrumb(g) ||
                          a.ModuleDetect.detectModuleInSentryEvent(r, u) ||
                          n.topErrorModuleName),
                        (0, s.setException)(r, {
                          value: [
                            _,
                            "[" + m + "]",
                            '"' + e.shortenMessage(g.message || "") + '"',
                          ].join(" "),
                        }),
                        (r.fingerprint = [_, m]));
                  }
                  return r;
                });
              }),
              (e.id = "HandledErrors"),
              e
            );
          })();
      },
      300801: (e, r, t) => {
        t.d(r, {
          ServerErrors: () => n.ServerErrors,
          HandledErrors: () => o.HandledErrors,
        });
        var n = t(528910),
          o = t(798302);
      },
      528910: (e, r, t) => {
        t.d(r, { ServerErrors: () => f });
        var n = t(570655),
          o = t(13819),
          i = t(930216),
          a = t(85372),
          s = t(561697),
          u = t(246111),
          l = t(171516),
          d = t(649846),
          c = t(19331),
          v = d.navigationStat.getModule,
          f = (function () {
            function e() {
              this.name = e.id;
            }
            return (
              (e.typeOfStaticTimedOut = function (e) {
                var r, t, o;
                return (
                  (null === (r = e.tags) || void 0 === r
                    ? void 0
                    : r.module) === s.staticManagerModuleName &&
                  (null ===
                    (o =
                      null ===
                        (t = Object.entries(this.timedOutMessagesOf).filter(
                          function (r) {
                            var t,
                              o,
                              a = (0, n.__read)(r, 2)[1];
                            return null ===
                              (o =
                                null === (t = (0, i.getException)(e)) ||
                                void 0 === t
                                  ? void 0
                                  : t.value) || void 0 === o
                              ? void 0
                              : o.includes(a);
                          }
                        )) || void 0 === t
                        ? void 0
                        : t.pop()) || void 0 === o
                    ? void 0
                    : o[0])
                );
              }),
              (e.hasBadStatusCode = function (e) {
                var r;
                return null === (r = null == e ? void 0 : e.breadcrumbs) ||
                  void 0 === r
                  ? void 0
                  : r.some(function (e) {
                      var r;
                      return [502, 503, 504].includes(
                        null === (r = null == e ? void 0 : e.data) ||
                          void 0 === r
                          ? void 0
                          : r.status_code
                      );
                    });
              }),
              (e.modifyEventOfTimeout = function (e, r) {
                var t;
                if (!e) return null;
                (e.level = o.Severity.Warning),
                  (e.fingerprint = [s.staticManagerModuleName + "_" + r]),
                  (0, i.setException)(e, {
                    type: u.WebCustomSentryErrorTypes.TIMEOUT,
                  }),
                  e.tags &&
                    (e.tags.module =
                      (0, i.findModuleByStackString)(
                        null === (t = (0, i.getException)(e)) || void 0 === t
                          ? void 0
                          : t.value
                      ) || v());
              }),
              (e.prototype.setupOnce = function (r, t) {
                r(function (r) {
                  var n;
                  if (t().getIntegration(e)) {
                    var i = e.typeOfStaticTimedOut(r);
                    if (
                      (e.hasBadStatusCode(r) && (r.level = o.Severity.Fatal),
                      i &&
                        (e.modifyEventOfTimeout(r, i),
                        (0, c.partConfigEnabled)(
                          "sentry_js_web_timeouts_forwarding"
                        ) &&
                          (0, l.saveStatlogEvents)({
                            name: "sentry_web_issues",
                            value: 1,
                            keys: [
                              String(
                                null === (n = null == r ? void 0 : r.tags) ||
                                  void 0 === n
                                  ? void 0
                                  : n.module
                              ),
                              o.Severity.Warning,
                              u.WebCustomSentryErrorTypes.TIMEOUT +
                                "Of" +
                                i.toUpperCase(),
                            ],
                          }),
                        !(0, c.partConfigEnabled)("sentry_js_web_timeouts")))
                    )
                      return null;
                  }
                  return r;
                });
              }),
              (e.id = "ServerErrors"),
              (e.timedOutMessagesOf = {
                js: a.JS_LOAD_ERROR_TEXT,
                css: a.CSS_LOAD_ERROR_TEXT,
              }),
              e
            );
          })();
      },
    },
    o = {};
  function i(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var t = (o[e] = { id: e, loaded: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.loaded = !0), t.exports;
  }
  (i.m = n),
    (e = []),
    (i.O = (r, t, n, o) => {
      if (!t) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [t, n, o] = e[d], s = !0, u = 0; u < t.length; u++)
            (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[u]))
              ? t.splice(u--, 1)
              : ((s = !1), o < a && (a = o));
          if (s) {
            e.splice(d--, 1);
            var l = n();
            void 0 !== l && (r = l);
          }
        }
        return r;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [t, n, o];
    }),
    (i.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return i.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, n) {
      if ((1 & n && (e = this(e)), 8 & n)) return e;
      if ("object" == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      i.r(o);
      var a = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var s = 2 & n && e; "object" == typeof s && !~r.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((r) => (a[r] = () => e[r]));
      return (a.default = () => e), i.d(o, a), o;
    }),
    (i.d = (e, r) => {
      for (var t in r)
        i.o(r, t) &&
          !i.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (i.e = () => Promise.resolve()),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 60112: 0 };
      i.O.j = (r) => 0 === e[r];
      var r = (r, t) => {
          var n,
            o,
            [a, s, u] = t,
            l = 0;
          for (n in s) i.o(s, n) && (i.m[n] = s[n]);
          if (u) var d = u(i);
          for (r && r(t); l < a.length; l++)
            (o = a[l]), i.o(e, o) && e[o] && e[o][0](), (e[a[l]] = 0);
          return i.O(d);
        },
        t = (self.webpackChunkvk = self.webpackChunkvk || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var a = i.O(void 0, [11216, 68592, 86072, 7143], () => i(528603));
  a = i.O(a);
})();
