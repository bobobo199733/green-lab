var AutoSuggest, __extends, Bing, sa_inst;
(function (n) {
  var t;
  (function (n) {
    var t, i, r, u, f, e;
    (function (n) {
      n.User = "SRCHHPGUSR";
    })((t = n.CookieNames || (n.CookieNames = {}))),
      (function (n) {
        n.AutoSuggest = "AS";
      })((i = n.CrumbNames || (n.CrumbNames = {}))),
      (function (n) {
        n.CursorPosition = "cp";
        n.ConversationId = "cvid";
        n.SuggestionCount = "sc";
        n.PartialQuery = "pq";
        n.SuggestionPosition = "sp";
        n.SuggestionType = "qs";
        n.PreviewPaneSuggestionType = "qsc";
        n.SkipValue = "sk";
        n.PreviewPaneSkipValue = "skc";
        n.Ghosting = "ghc";
        n.Css = "css";
        n.Count = "count";
        n.DataSet = "ds";
        n.SessionId = "sid";
        n.TimeStamp = "qt";
        n.Query = "q";
        n.ImpressionGuid = "ig";
        n.QFQuery = "qry";
        n.BaseQuery = "bq";
        n.FormCode = "form";
        n.HashedMuid = "nclid";
        n.RequestElToken = "elvr";
        n.ElTokenValue = "elv";
        n.AppId = "appid";
        n.History = "history";
        n.NoHistory = "nohs";
        n.ApiTextDecoration = "textdecorations";
        n.ClientId = "clientid";
        n.Market = "mkt";
        n.Scope = "scope";
        n.CountryCode = "cc";
        n.HomeGeographicRegion = "hgr";
        n.SetLang = "setlang";
        n.ZeroInputSerp = "zis";
        n.ASVersion = "asv";
        n.GhShown = "ghsh";
        n.GhAccepted = "ghacc";
        n.GhPrefixLength = "ghpl";
      })((r = n.QueryParams || (n.QueryParams = {}))),
      (function (n) {
        n.ImpressionGuid = "X-MSEdge-IG";
      })((u = n.Headers || (n.Headers = {}))),
      (function (n) {
        n.HitHighlighting = "h";
        n.PopularNow = "p";
        n.Local = "l";
        n.Answers = "a";
      })((f = n.Options || (n.Options = {}))),
      (function (n) {
        n.Id = "id";
        n.Query = "query";
        n.Url = "url";
        n.Navigation = "nav";
        n.Type = "stype";
        n.Autocomplete = "hc";
        n.InstData = "h";
        n.AriaLabel = "aria-label";
        n.RequestGuid = "rg";
        n.AdQuery = "adq";
        n.GhostingText = "ghtxt";
      })((e = n.SuggestionAttributes || (n.SuggestionAttributes = {})));
  })((t = n.Service || (n.Service = {})));
})(AutoSuggest || (AutoSuggest = {})),
  (function (n) {
    var t;
    (function (n) {
      var t;
      (function (n) {
        function s(n) {
          return n ? n[n[i] !== undefined ? i : u] : undefined;
        }
        function r(n, t) {
          n &&
            t !== null &&
            t !== undefined &&
            (n[n[i] !== undefined ? i : u] = t);
        }
        function h(n) {
          return _w.getComputedStyle
            ? _w.getComputedStyle(n, null)
            : n.currentStyle;
        }
        function c(n, t) {
          var r = new RegExp("[?&]{1}" + t + "=([^&]+)"),
            i = n.match(r);
          return i ? i[1] : null;
        }
        function l(n, t, i) {
          if (n.setSelectionRange) n.setSelectionRange(t, i);
          else {
            var r = n.createTextRange();
            r.moveEnd("sentence", -1e5);
            r.moveStart("character", t);
            r.moveEnd("character", i - t);
            r.select();
          }
        }
        function a(n, t) {
          for (var r, i, u = 0; (i = t[u]); ++u)
            (r = n.getAttribute(i)), r && (n[i] = r);
        }
        function v(n) {
          var t = sj_ev(n);
          return { x: t.clientX, y: t.clientY };
        }
        function y(n, t) {
          return function (i) {
            var r = sj_ev(i),
              u =
                r.relatedTarget ||
                (r.type == "mouseout" ? r.toElement : r.fromElement);
            t === u || f(u, t) || n.call(t, r);
          };
        }
        function p(n, t) {
          var i = 0,
            r = _d.selection;
          if (n.selectionStart != null) i = n.selectionStart;
          else if (r && n.createTextRange) {
            t && n.focus();
            var u = n.createTextRange(),
              f = u.duplicate(),
              e = r.createRange();
            t && u.moveToBookmark(e.getBookmark());
            f.setEndPoint("EndToStart", e);
            i = f.text.length;
          }
          return i;
        }
        function w(n, t) {
          n && (n.className = n.className.replace(t, ""));
        }
        function b(n, t) {
          var u, i, r, f;
          if (n) {
            for (u = n.className.split(" "), i = 0, r = u; i < r.length; i++)
              if (((f = r[i]), f === t)) return;
            n.className.length > 0 && (n.className += " ");
            n.className += t;
          }
        }
        function k(n, t) {
          return n
            ? n.replace(o, function (n, i) {
                return t[i];
              })
            : n;
        }
        function d(n, t) {
          var i = t.replace(/\s+$/g, "");
          return t[t.length - 1] == " " && n.length > 0 && ut(t, i, n[0])
            ? i
            : t;
        }
        function f(n, t) {
          if (!n || !t || t === n) return !1;
          while (n && t !== n) n = n.parentElement;
          return t == n;
        }
        function g(n, t, i) {
          var u = e.exec(t);
          if (!u || !u[1])
            throw new Error("Given text format doesn't contain link markup");
          r(i, u[1]);
          r(n, sa_loc.SearchRemoved);
          n.innerHTML = n.innerHTML.replace("%e" + i.innerHTML + "%E", rt(i));
        }
        function nt(n, t, i, r) {
          var u, f;
          return (
            i === void 0 && (i = null),
            r === void 0 && (r = !1),
            (u = _d.createElement("span")),
            (u.textContent = t),
            (u.style.visibility = "hidden"),
            i && (u.style.fontSize = i),
            r && (u.style.fontWeight = "bold"),
            n.appendChild(u),
            (f = u.offsetWidth),
            n.removeChild(u),
            f
          );
        }
        function tt(n, t, i) {
          try {
            return n();
          } catch (r) {
            return i && i(), t;
          }
        }
        function it(n) {
          return n ? "Bearer ".concat(n) : "";
        }
        function rt(n) {
          var t = sj_ce("div");
          return t.appendChild(n), t.innerHTML;
        }
        function ut(n, t, i) {
          return n == i.substr(0, n.length) || t == i;
        }
        function t(n) {
          var t = Math.abs(Math.floor(n));
          return (t < 10 ? "0" : "") + t;
        }
        function ft() {
          var n = new Date(),
            i = -n.getTimezoneOffset(),
            r = i >= 0 ? "+" : "-";
          return (
            n.getFullYear() +
            "-" +
            t(n.getMonth() + 1) +
            "-" +
            t(n.getDate()) +
            "T" +
            t(n.getHours()) +
            ":" +
            t(n.getMinutes()) +
            ":" +
            t(n.getSeconds()) +
            "." +
            t(n.getMilliseconds()) +
            r +
            t(i / 60) +
            ":" +
            t(i % 60)
          );
        }
        function et(t, i, r, u, f, e) {
          var s, o;
          if (!t || !i || !r) return "";
          s = encodeURIComponent(i);
          o = { triggeringMode: "Explicit", intent: r };
          u && (o.entityId = u);
          e && (o.itemId = e);
          f && (o.contentSource = f);
          var c = JSON.stringify(o),
            l = encodeURIComponent(c),
            h = n.formatString(t.bfbSearchUrl, [s, l, t.bfbfrmcde]);
          return _G && _G.IG
            ? "".concat(h, "&cvid=").concat(encodeURIComponent(_G.IG))
            : h;
        }
        function ot(n) {
          var t = "/search";
          return n && n.substr(0, t.length) === t ? "/work" + n : n;
        }
        var i = "textContent",
          u = "innerText",
          e = /%e([^%]+)%E/,
          o = /{([0-9]+)}/g;
        n.GetTextContent = s;
        n.SetTextContent = r;
        n.GetComputedStyle = h;
        n.GetQueryStringParam = c;
        n.SetSelectionRange = l;
        n.RewriteAttribsToProps = a;
        n.GetMouseCoords = v;
        n.MouseEnterLeave = y;
        n.getCursorPosition = p;
        n.RemoveClassName = w;
        n.AddClassName = b;
        n.formatString = k;
        n.TrimmedQueryFromSuggestions = d;
        n.isChildOf = f;
        n.SetTextContentWithLink = g;
        n.CalcWidth = nt;
        n.safeExecute = tt;
        n.getBearerTokenHeader = it;
        n.getDateWithTimezone = ft;
        n.buildBfbSearchUrl = et;
        n.getMSBWorkVerticalSearchUrl = ot;
      })((t = n.Utils || (n.Utils = {})));
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {})),
  (function (n) {
    var t;
    (function (n) {
      var i = (function () {
          function n() {
            this._eventRegistry = [];
          }
          return (
            (n.prototype.registerEvents = function (n) {
              this._eventRegistry.push(n);
            }),
            (n.prototype.raiseEvent = function (n) {
              for (var i, r, f, u = [], t = 1; t < arguments.length; t++)
                u[t - 1] = arguments[t];
              for (i = 0, r = this._eventRegistry; i < r.length; i++)
                (f = r[i]), f.raise(n, u);
            }),
            (n.prototype.clearEvents = function () {
              this._eventRegistry = [];
            }),
            n
          );
        })(),
        t;
      n.EventRegisterer = i;
      t = (function () {
        function n(n) {
          this._eventParent = n;
          this.events = [];
        }
        return (
          (n.prototype.add = function (n, t) {
            this.events[n] = t;
          }),
          (n.prototype.proxy = function (n) {
            for (
              var i, r, e, u = this, f = [], t = 1;
              t < arguments.length;
              t++
            )
              f[t - 1] = arguments[t];
            for (i = 0, r = f; i < r.length; i++)
              (e = r[i]),
                (function (t) {
                  u.events[t] = function () {
                    for (var r = [], i = 0; i < arguments.length; i++)
                      r[i] = arguments[i];
                    r.splice(0, 0, t);
                    n.apply(u._eventParent, r);
                  };
                })(e);
          }),
          (n.prototype.raise = function (n, t) {
            var i = this.events[n];
            i && i.apply(this._eventParent, t);
          }),
          n
        );
      })();
      n.EventRegistration = t;
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {}));
(__extends =
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
        i === null ? Object.create(i) : ((r.prototype = i.prototype), new r());
    };
  })()),
  (function (n) {
    var t;
    (function (t) {
      var r, h, s;
      (function (n) {
        n.Web = "Web";
        n.BingAtWork = "BAW";
        n.Substrate = "SSUE";
        n.MicrosoftSearchInBing = "MSB";
        n.MicrosoftSearchInBingCached = "MSBC";
        n.MSBEngagment = "MSBE";
      })((r = t.DataSources || (t.DataSources = {}))),
        (function (n) {
          n.Bookmarks = "Bookmarks";
          n.People = "People";
        })((h = t.BingAtWorkDataTypes || (t.BingAtWorkDataTypes = {})));
      var i = AutoSuggest.Service.QueryParams,
        e = "ajax.unload",
        c = "msb:qf:rdy",
        u = "NONPROM",
        f = "PROM",
        o = [i.SuggestionPosition, i.Ghosting],
        l = o.concat([
          i.PartialQuery,
          i.SuggestionCount,
          i.SuggestionType,
          i.SkipValue,
          i.ConversationId,
          i.GhShown,
          i.GhAccepted,
          i.GhPrefixLength,
        ]);
      t.searchBoxFocusEventId = "SearchBox_Focus";
      s = (function (s) {
        function h(n, t, i, r, u, f, e, o, h, c, l) {
          var a = s.call(this) || this;
          return (
            (a.canvas = n),
            (a._dataProvider = t),
            (a._bingAtWorkDataProvider = i),
            (a._substrateDataProvider = r),
            (a._msbDataProvider = u),
            (a._msbEngagementDataProvider = f),
            (a._instrumentation = e),
            (a._bingAtWorkSuggestionsParser = o),
            (a._substrateSuggestionsParser = h),
            (a._msbSuggestionsParser = c),
            (a._bingAtWorkWebTelemetry = l),
            (a.currentQuery = ""),
            (a.data = {}),
            (a.ghostInstValue = 0),
            (a.networkLatencyInfo = ""),
            (a.ghostingShown = 0),
            (a.ghostingAccepted = 0),
            (a.ghostingPrefixLength = ""),
            (a._cursorPosition = 0),
            (a._queryWithCurrentSuggestions = ""),
            (a._receivedAtLeastOnceValidResponse = !1),
            (a._isDisposed = !1),
            (a._requestSequence = -1),
            (a._isBawPayloadAdded = !1),
            (a._originalQuery = ""),
            (a._previousLocationCache = null),
            (a._emptyWebSuggestionsResponse = "<span></span>"),
            (a.msbNtpKeyStrokeMaxRetry = 0),
            (a.isMsbCachingBundleReady = !1),
            a
          );
        }
        return (
          __extends(h, s),
          (h.prototype.init = function (n, i, r) {
            var u = this,
              e,
              s,
              c,
              l,
              f,
              a,
              v,
              o;
            for (
              this._originalQuery = r.value,
                this.config = n,
                this._container = i,
                this.registerAjaxSerpUnloadEvent(),
                e = 0,
                s = h.ScopeExtensions;
              e < s.length;
              e++
            )
              (c = s[e]), c.init(this);
            h.ScopeExtensions = [];
            l = function (n, t, i, r, f) {
              return u.dataProviderCallbackFunc(n, t, i, r, f);
            };
            this._dataProvider.init(n, n.u, l);
            this.canvas.init(this, n, i, r);
            f = new t.EventRegistration(this);
            f.proxy(this.raiseEvent, 10, 12, 11);
            this._bingAtWorkDataProvider &&
              ((a = function (n, t, i, r, f, e) {
                return u.onBingAtWorkResponseReceived(n, t, i, e);
              }),
              this._bingAtWorkDataProvider.init(
                n,
                this.config.bingAtWorkUrl,
                a
              ));
            this._substrateDataProvider &&
              ((v = function (n, t, i) {
                return u.onSubstrateResponseReceived(n, t, i);
              }),
              this._substrateDataProvider.init(n, "", v));
            this._msbDataProvider &&
              ((o = function (n, t, i, r, f, e) {
                return u.onSearchBoxFocusWithRetry(1, i, function () {
                  return u.onMsbResponseReceived(n, t, i, r, f, e);
                });
              }),
              this._msbDataProvider.init(o, this._bingAtWorkWebTelemetry));
            this._msbEngagementDataProvider &&
              ((o = function (n, t) {
                return u.onSearchBoxFocusWithRetry(1, t, function () {
                  return u.onMsbEngagementResponseReceived(n, t);
                });
              }),
              this._msbEngagementDataProvider.init(o));
            f.add(4, function (n, t, i) {
              u.raiseEvent(4, n, t, i);
            });
            f.add(20, function (n, t) {
              t.className.indexOf("as_qb") != -1 &&
                (u.raiseEvent(13, n.query + " ", !1),
                _w.Log &&
                  Log.Log &&
                  Log.Log(
                    "Select",
                    "QueryBuilder",
                    "Click",
                    !1,
                    "ImpressionGuid",
                    u.data.Inst.IG
                  ));
            });
            f.add(25, function (n) {
              u.raiseEvent(13, n.query + " ", !1);
              _w.Log &&
                Log.Log &&
                Log.Log(
                  "Select",
                  "MobileNextWordSuggestion",
                  "Click",
                  !1,
                  "ImpressionGuid",
                  u.data.Inst.IG
                );
            });
            this.canvas.registerEvents(f);
            this.raiseEvent(6, this);
            n.isEdgeNtp &&
              this.isMsbEnabled(n.enabledDataSources) &&
              ((this.msbNtpKeyStrokeMaxRetry = n.msbKsTnsTryMax || 0),
              this.raiseEvent(21));
            (n.msbqc || this.config.isNtpClientqfEnabled) &&
              this.initMsbQfCaching();
          }),
          (h.prototype.initMsbQfCaching = function () {
            for (
              var i = this, t = !1, n = 0;
              n < this.config.enabledDataSources.length;
              ++n
            )
              if (
                this.config.enabledDataSources[n] === r.MicrosoftSearchInBing
              ) {
                this.config.enabledDataSources.splice(
                  n,
                  null,
                  r.MicrosoftSearchInBingCached
                );
                t = !0;
                break;
              }
            t ||
              this.config.enabledDataSources.push(
                r.MicrosoftSearchInBingCached
              );
            sj_evt.bind(
              c,
              function () {
                return (i.isMsbCachingBundleReady = !0);
              },
              !0
            );
          }),
          (h.prototype.isMsbEnabled = function (n) {
            var i, t, u, f;
            if (!n) return !1;
            for (i = !1, t = 0, u = n; t < u.length; t++)
              if (
                ((f = u[t]),
                f === r.BingAtWork || f === r.MicrosoftSearchInBing)
              ) {
                i = !0;
                break;
              }
            return i;
          }),
          (h.prototype.raiseUpdateGhostedText = function (n, t, i) {
            this.raiseEvent(14, n, t, i);
          }),
          (h.prototype.raiseUpdateTextAndRequery = function (n, t) {
            this.raiseEvent(13, n, t);
          }),
          (h.prototype.raiseUpdateText = function (n) {
            this.raiseEvent(12, n);
          }),
          (h.prototype.raiseTextChanged = function (n, t) {
            this.raiseEvent(18, n, t);
          }),
          (h.prototype.onBfbNavigateCallback = function (n, t, i, r, e) {
            if (this._bingAtWorkWebTelemetry) {
              var o = {
                LogicalId: _G.LogicalId ? _G.LogicalId : "",
                N: r ? r.length : 0,
                QTYP: t,
                TT: i ? f : u,
                eventId: "QueryFormulation_Click",
              };
              this._bingAtWorkWebTelemetry.logClicked(n, o);
              this._bingAtWorkWebTelemetry.log3SClickedEvent(
                "QueryFormulation_Click",
                e
              );
            }
          }),
          (h.prototype.onHighConfidencePromoted = function (n) {
            if (this._bingAtWorkWebTelemetry && this.config.enableQfHcLog) {
              var t = this._bingAtWorkWebTelemetry.getLogicalId(),
                i = {
                  LogicalId: t,
                  N: this.currentQuery.length,
                  TT: n ? f : u,
                  eventId: "QueryFormulation_HighConfidence_Impression",
                };
              this._bingAtWorkWebTelemetry.logShown("", i);
            }
          }),
          (h.prototype.onBfbSearchBoxAction = function (n) {
            this._bingAtWorkWebTelemetry &&
              (n === t.searchBoxFocusEventId &&
                this._bingAtWorkWebTelemetry.createAndUpdateConversationId &&
                this._bingAtWorkWebTelemetry.createAndUpdateConversationId(),
              this._bingAtWorkWebTelemetry.log3SClickedEvent &&
                this._bingAtWorkWebTelemetry.log3SClickedEvent(n));
          }),
          (h.prototype.onSubstrateNavigateCallback = function (n) {
            this._substrateDataProvider &&
              this._substrateDataProvider.instrumentClick(n);
          }),
          (h.prototype.setData = function (n) {
            this.data = n;
          }),
          (h.prototype.dataProviderCallbackFunc = function (i, u, f, e, o) {
            var a, v, h, c, y, p, l, s, w;
            ((this._previousLocationCache = o || this._previousLocationCache),
            !this._isDisposed &&
              (this.canvas.searchBoxHasFocus() || this.config.mnw)) &&
              (t.CachedResponseUtils &&
                t.CachedResponseUtils.checkCachedResponseAndLog &&
                (i = t.CachedResponseUtils.checkCachedResponseAndLog(i, e)),
              this.raiseEvent(8),
              f == this.currentQuery) &&
              i != null &&
              (this.raiseEvent(9, f, u, r.Web),
              (this._queryWithCurrentSuggestions = f),
              this.canvas.render(i, this.currentQuery, u, r.Web),
              (this._receivedAtLeastOnceValidResponse = !0),
              this.config.enbleClientPerfTelemetry &&
                this._instrumentation &&
                this._instrumentation.logASNetworkCallLatency &&
                typeof performance != "undefined" &&
                performance &&
                performance.getEntries &&
                ((a = this._instrumentation.logASNetworkCallLatency()),
                a !== "" && this.appendLatency(a)),
              (v = _ge("sa_msbblockheader")),
              (h = _ge("sa_msbblockheaderwithtenantname")),
              h &&
                v &&
                ((c = v),
                (y = n.AS.BingAtWorkTemplateManager.getTenantDisplayName()),
                y &&
                  ((p = h.innerHTML.replace("{0}", y)),
                  p.length <= 70 && ((c = h), (c.innerHTML = p))),
                (c.style.display = "block"),
                (l = _ge("as_msbblkhdrnew")),
                (s = n.AS.BingAtWorkTemplateManager.getTenantThemeColors()),
                s &&
                  s.length > 2 &&
                  (l === null || l === void 0
                    ? void 0
                    : l.setAttribute(
                        "style",
                        "background-color : #" +
                          s[1] +
                          "; color : #" +
                          s[2] +
                          ";"
                      ))),
              this._instrumentation &&
                ((w = this.data && this.data.Inst ? this.data.Inst.IG : null),
                this._instrumentation.updateImpressionGuid(w, u)));
          }),
          (h.prototype.onSubstrateResponseReceived = function (n, i, u) {
            var f = this,
              e,
              o;
            !this._isDisposed &&
              this.canvas.searchBoxHasFocus() &&
              u == this.currentQuery &&
              ((this.config.handleDuplicateFetch &&
                i < this._requestSequence) ||
                ((e = sb_gt()),
                (o = function (n, o) {
                  var s = t.BingAtWorkTemplateManager.generateHtml(
                    f.config,
                    n,
                    u
                  );
                  n.length &&
                    (f._instrumentation.instrumentResponseReceived(
                      r.Substrate,
                      i,
                      e
                    ),
                    f._bingAtWorkWebTelemetry &&
                      f._bingAtWorkWebTelemetry.logPerf("SSUESuggestions"));
                  f._instrumentation.instrumentDataSource(r.Substrate, n, i, o);
                  f.config.msbSusR &&
                    (f._substrateDataProvider.updateTraceId(o.TraceID),
                    f.canvas.render(s, f.currentQuery, i, r.Substrate),
                    s &&
                      (f._instrumentation.updateRendered(i),
                      f._bingAtWorkWebTelemetry &&
                        (f._bingAtWorkWebTelemetry.setContext({
                          traceId: o.TraceID,
                          tenantId: f.config.bawTenantId,
                          uid: f.config.bawUserId,
                        }),
                        n.forEach(function (n) {
                          f._bingAtWorkWebTelemetry.logShown(n.id);
                        }))));
                }),
                this._substrateSuggestionsParser.parse(u, n, i, o)));
          }),
          (h.prototype.onMsbEngagementResponseReceived = function (n, i) {
            if (
              !this._isDisposed &&
              this.canvas.searchBoxHasFocus() &&
              i == this.currentQuery &&
              (!this.config.handleDuplicateFetch ||
                !(n < this._requestSequence))
            ) {
              var u = t.BingAtWorkTemplateManager.generateMSBEngagementHtml(
                this.config,
                i,
                this.config.msbengagementformcode
              );
              u && this.canvas.render(u, this.currentQuery, n, r.MSBEngagment);
            }
          }),
          (h.prototype.onMsbResponseReceived = function (n, i, e, o, s, h) {
            var c = this;
            if (
              !this._isDisposed &&
              this.canvas.searchBoxHasFocus() &&
              e == this.currentQuery &&
              (!this.config.handleDuplicateFetch ||
                !(i < this._requestSequence))
            ) {
              var a = sb_gt(),
                l = o ? r.MicrosoftSearchInBingCached : r.MicrosoftSearchInBing,
                v = function (n, r, h) {
                  var y, b, p, v, w, k, d;
                  if (
                    ((y =
                      c.config.promoteUserHistoryForAADUser && l === "MSBC"
                        ? t.BingAtWorkTemplateManager.generateMsbHtml(
                            c.config,
                            n,
                            e,
                            c.config.isMsbInline,
                            h === null || h === void 0 ? void 0 : h.LogicalId
                          )
                        : c.config.webMsbQFRanking && l === "MSBC"
                        ? t.BingAtWorkTemplateManager.generateMsbHtml(
                            c.config,
                            n,
                            e,
                            c.config.isMsbInline,
                            h === null || h === void 0 ? void 0 : h.LogicalId
                          )
                        : t.BingAtWorkTemplateManager.generateHtml(
                            c.config,
                            n,
                            e,
                            c.config.isMsbInline
                          )),
                    n.length &&
                      c._instrumentation.instrumentResponseReceived(l, i, a),
                    c._instrumentation.instrumentDataSource(l, n, i, r),
                    c.canvas.render(y, c.currentQuery, i, l),
                    y &&
                      (c.config.isEdgeNtp ||
                        c._instrumentation.updateRendered(i),
                      c._bingAtWorkWebTelemetry))
                  ) {
                    if (
                      (c._bingAtWorkWebTelemetry.setContext({
                        traceId: r ? r.TraceID : "",
                        tenantId: c.config.bawTenantId,
                        uid: c.config.bawUserId,
                      }),
                      (s = s || c._bingAtWorkWebTelemetry.getLogicalId()),
                      (b = JSON.stringify(
                        n.map(function (n) {
                          return n.stype;
                        })
                      )),
                      (p = {
                        LogicalId: s,
                        N: c.currentQuery.length,
                        QTYP: b,
                        TT: u,
                        QTYPE:
                          c.currentQuery.length == 0
                            ? "zqf"
                            : o
                            ? "cache"
                            : "backfill",
                      }),
                      c.config.isLowConfidenceWeb)
                    )
                      for (v = 0, w = n; v < w.length; v++)
                        if (((k = w[v]), k.confidence == "High")) {
                          p.TT = f;
                          break;
                        }
                    d = JSON.stringify(
                      n.map(function (n) {
                        return n.id;
                      })
                    );
                    c._bingAtWorkWebTelemetry.logShown(d, p);
                    c._bingAtWorkWebTelemetry.log3sRenderedEvent(h);
                  }
                };
              this._msbSuggestionsParser.parse(n, i, v, h);
            }
          }),
          (h.prototype.onBingAtWorkResponseReceived = function (n, i, u, f) {
            var e = this,
              o,
              s;
            !this._isDisposed &&
              this.canvas.searchBoxHasFocus() &&
              u == this.currentQuery &&
              ((this.config.handleDuplicateFetch &&
                i < this._requestSequence) ||
                ((o = sb_gt()),
                this.config.isEdgeNtp &&
                  (this.raiseEvent(8),
                  f == 401 &&
                    this.msbNtpKeyStrokeMaxRetry > 0 &&
                    (this.msbNtpKeyStrokeMaxRetry--, this.raiseEvent(21))),
                (s = function (n, f) {
                  var s = t.BingAtWorkTemplateManager.generateHtml(
                    e.config,
                    n,
                    u,
                    e.config.isMsbInline
                  );
                  n.length &&
                    (e.config.isEdgeNtp
                      ? e.raiseEvent(9, u, i, r.BingAtWork)
                      : (e._instrumentation &&
                          e._instrumentation.instrumentResponseReceived(
                            r.BingAtWork,
                            i,
                            o
                          ),
                        e._bingAtWorkWebTelemetry &&
                          e._bingAtWorkWebTelemetry.logPerf("BAWSuggestions")));
                  e._instrumentation &&
                    e._instrumentation.instrumentDataSource(
                      r.BingAtWork,
                      n,
                      i,
                      f
                    );
                  e.canvas.render(s, e.currentQuery, i, r.BingAtWork);
                  s &&
                    (!e.config.isEdgeNtp &&
                      e._instrumentation &&
                      e._instrumentation.updateRendered(i),
                    e._bingAtWorkWebTelemetry &&
                      (e._bingAtWorkWebTelemetry.setContext({
                        traceId: f.TraceID,
                        tenantId: e.config.bawTenantId,
                      }),
                      n.forEach(function (n) {
                        e._bingAtWorkWebTelemetry.logShown(n.id);
                      })));
                }),
                this._bingAtWorkSuggestionsParser.parse(u, n, i, s)));
          }),
          (h.prototype.getAllSuggestionInstUrl = function (n, t) {
            for (
              var u,
                f,
                o = this.getInstrumentationKeys(t),
                i = [],
                r = 0,
                e = o;
              r < e.length;
              r++
            )
              (u = e[r]),
                (f = this.getSuggestionInstValue(u, !0, n)),
                f !== null && (i = i.concat(["&", u, "=", f]));
            return i.join("");
          }),
          (h.prototype.getAllSuggestionInstObject = function (n, t) {
            for (
              var r,
                u,
                o = this.getInstrumentationKeys(t),
                f = {},
                i = 0,
                e = o;
              i < e.length;
              i++
            )
              (r = e[i]),
                (u = this.getSuggestionInstValue(r, !1, n)),
                u !== null && (f[r] = u);
            return f;
          }),
          (h.prototype.getInstrumentationKeys = function (n) {
            return n ? l : o;
          }),
          (h.prototype.getSuggestionInstValue = function (n, t, r) {
            r = r || this.canvas.selectedSuggestion;
            switch (n) {
              case i.SuggestionCount:
                return (
                  this.canvas.currentSuggestionList.length +
                  "-" +
                  this._queryWithCurrentSuggestions.length
                );
              case i.PartialQuery:
                return t
                  ? encodeURIComponent(this._queryWithCurrentSuggestions)
                  : this._queryWithCurrentSuggestions;
              case i.SuggestionPosition:
                return (
                  this.config.mnw &&
                    r &&
                    r.ord > this.canvas.mnwSuggestionsCount &&
                    (r.ord = r.ord - this.canvas.mnwSuggestionsCount),
                  r
                    ? "" + r.ord
                    : this.config.mnw &&
                      this.isMNWSuggestionSelected(
                        this.canvas.clickedMNWSuggestionType
                      )
                    ? this.canvas.clickedMNWSuggestionPosition.toString()
                    : "-1"
                );
              case i.SuggestionType:
                return r
                  ? r.src
                  : this.config.mnw &&
                    this.isMNWSuggestionSelected(
                      this.canvas.clickedMNWSuggestionType
                    )
                  ? this.canvas.clickedMNWSuggestionType
                  : "n";
              case i.SkipValue:
                return r && r.sk ? r.sk : "";
              case i.Ghosting:
                return this.ghostInstValue == 0
                  ? null
                  : this.ghostInstValue.toString();
              case i.ConversationId:
                return _G.IG;
              case i.GhShown:
                return this.ghostingShown.toString();
              case i.GhAccepted:
                return this.ghostingAccepted.toString();
              case i.GhPrefixLength:
                return this.ghostingPrefixLength;
              default:
                return null;
            }
          }),
          (h.prototype.isMNWSuggestionSelected = function (n) {
            return n == "MNW" ||
              n == "MNWU" ||
              n == "MNWB" ||
              n == "MNWT" ||
              n == "MNWF"
              ? !0
              : !1;
          }),
          (h.prototype.setCursorPosition = function (n) {
            this._cursorPosition = n;
          }),
          (h.prototype.finalizeKeystroke = function () {
            this._instrumentation &&
              this._requestSequence > -1 &&
              this._instrumentation.finalizeKeystroke(this._requestSequence);
          }),
          (h.prototype.fetch = function (n) {
            this.finalizeKeystroke();
            this._requestSequence++;
            this._instrumentation &&
              this._instrumentation.beginRequest(this._requestSequence);
            this.fetchWeb(n, this._requestSequence, !1);
            (this.config.msbqc || this.config.isNtpClientqfEnabled) &&
            this.isMsbCachingBundleReady
              ? this.fetchMsb(n, this._requestSequence)
              : this.config.msbqc ||
                this.fetchBingAtWork(n, this._requestSequence);
            this.config.msbSusE &&
              this.fetchSubstrate(n, this._requestSequence);
            var t = n && n.length;
            this._msbEngagementDataProvider &&
              t >= this.config.MSBMinQueryLengthForEngagementQF &&
              this._msbEngagementDataProvider.show(n, this._requestSequence);
          }),
          (h.prototype.fetchZeroQF = function () {
            this.config.enableZeroQfWork &&
              (this.finalizeKeystroke(),
              this._requestSequence++,
              this._instrumentation &&
                this._instrumentation.beginRequest(this._requestSequence),
              this.fetchWeb("", this._requestSequence, !1),
              (this.config.msbqc || this.config.isNtpClientqfEnabled) &&
                this.isMsbCachingBundleReady &&
                this.fetchZeroQf(this._requestSequence));
          }),
          (h.prototype.fetchSubstrate = function (n, i) {
            if (
              this._substrateDataProvider &&
              this.currentQuery.length >= this.config.bawminqlen
            ) {
              var r = t.BingAtWorkTemplateManager.getTenantConfig(this.config);
              r && r.displayName && this._substrateDataProvider.fetch(n, i, !1);
            }
          }),
          (h.prototype.fetchBingAtWork = function (n, i) {
            if (
              this._bingAtWorkDataProvider &&
              this.currentQuery.length >= this.config.bawminqlen
            ) {
              var r = t.BingAtWorkTemplateManager.getTenantConfig(this.config);
              r && r.displayName
                ? (this.addBawPayload(n),
                  this._bingAtWorkDataProvider.fetch(n, i, !1))
                : this.config.isEdgeNtp &&
                  this.msbNtpKeyStrokeMaxRetry > 0 &&
                  (this.msbNtpKeyStrokeMaxRetry--, this.raiseEvent(21));
            }
          }),
          (h.prototype.fetchMsb = function (n, i) {
            var r, u, e, f;
            ((r = this._bingAtWorkWebTelemetry) === null || r === void 0
              ? void 0
              : r.is3sQfLoggerExists) &&
              this._bingAtWorkWebTelemetry.is3sQfLoggerExists() &&
              (e = this._bingAtWorkWebTelemetry.createQfLoggerContext());
            this._msbDataProvider &&
              this.currentQuery.length >= this.config.bawminqlen &&
              ((f = t.BingAtWorkTemplateManager.getTenantConfig(this.config)),
              f &&
                f.displayName &&
                (((u = this._bingAtWorkWebTelemetry) === null || u === void 0
                  ? void 0
                  : u.is3sQfLoggerExists) &&
                this._bingAtWorkWebTelemetry.is3sQfLoggerExists()
                  ? this._msbDataProvider.fetch(n, i, e)
                  : this._msbDataProvider.fetch(n, i)));
          }),
          (h.prototype.fetchZeroQf = function (n) {
            var t, i, r;
            ((t = this._bingAtWorkWebTelemetry) === null || t === void 0
              ? void 0
              : t.is3sQfLoggerExists) &&
              this._bingAtWorkWebTelemetry.is3sQfLoggerExists() &&
              (r = this._bingAtWorkWebTelemetry.createQfLoggerContext());
            this._msbDataProvider &&
              this.currentQuery == "" &&
              (((i = this._bingAtWorkWebTelemetry) === null || i === void 0
                ? void 0
                : i.is3sQfLoggerExists) &&
              this._bingAtWorkWebTelemetry.is3sQfLoggerExists()
                ? this._msbDataProvider.fetchZeroQF(n, r)
                : this._msbDataProvider.fetchZeroQF(n));
          }),
          (h.prototype.addBawPayload = function (n) {
            var r = this.config.bawmax,
              t,
              i;
            this._isBawPayloadAdded
              ? this._bingAtWorkDataProvider.addPostValue("Query", n)
              : ((t = ["Bookmark", "Qna", "Building"]),
                this.config.msbSusR || t.push("Person"),
                (i = { count: r, domains: t, query: n, conversationId: _G.IG }),
                this._bingAtWorkDataProvider.addBody(i));
          }),
          (h.prototype.onSearchBoxFocusWithRetry = function (n, t, i, r) {
            var u = this;
            if (t !== this.currentQuery) {
              r && r();
              return;
            }
            this.canvas.searchBoxHasFocus()
              ? i()
              : n < 5 &&
                sb_st(function () {
                  u.onSearchBoxFocusWithRetry(n + 1, t, i, r);
                }, 15);
          }),
          (h.prototype.fetchWeb = function (n, t, u) {
            var f, e;
            this.config.msbnocons && this._receivedAtLeastOnceValidResponse
              ? this.canvas.render(
                  this._emptyWebSuggestionsResponse,
                  this.currentQuery,
                  t,
                  r.Web
                )
              : (this.config.shouldUseAsCodeVersion &&
                  this._dataProvider.addParam(i.ASVersion, "1"),
                this._dataProvider.addParam(
                  i.CursorPosition,
                  this._cursorPosition.toString()
                ),
                this._container != null &&
                  this._container.parentNode != null &&
                  ((f = this._container.parentNode.offsetWidth.toString()),
                  this.config.cors
                    ? this._dataProvider.addParam("contentWidth", f)
                    : this._dataProvider.addHeader(
                        "X-Autosuggest-ContentWidth",
                        f
                      )),
                _ge("sidebar_search_experience") &&
                  this._dataProvider.addHeader("X-SIDEBAR-SEARCH", "true"),
                this._receivedAtLeastOnceValidResponse ||
                  this._dataProvider.addParam(i.Css, "1"),
                this.config.ezis &&
                  this._originalQuery === n &&
                  this._requestSequence == 0 &&
                  this._dataProvider.addParam(i.ZeroInputSerp, "1"),
                this.config.pc &&
                  this._dataProvider.addParam("pubcode", this.config.pc),
                this.config.footnote &&
                  this._dataProvider.addParam("footnote", "1"),
                this.config.adcached &&
                  this._adCachedQuery &&
                  this._adCachedImpressionGuid &&
                  (this._dataProvider.addParam("adq", this._adCachedQuery),
                  this._dataProvider.addParam(
                    "adig",
                    this._adCachedImpressionGuid
                  )),
                this.config.pcov &&
                  ((e = this.getPartnerCodeOverride()),
                  e && this._dataProvider.addParam("pc", e)),
                this._msbDataProvider == null &&
                  this._bingAtWorkDataProvider == null &&
                  this._dataProvider.addParam("msbqf", "false"),
                this.config.IsBingPrivate &&
                  this._dataProvider.addHeader("preferAnonymous", "1"),
                this._dataProvider.fetch(n, t, !0),
                this.raiseEvent(7, this.currentQuery, t),
                u || sj_evt.fire("AS.RequestSent", this.currentQuery));
          }),
          (h.prototype.registerAjaxSerpUnloadEvent = function () {
            var n = this,
              t = function (i) {
                var r = i && i[1];
                (r && r.isInstantRequest) ||
                  ((n._isDisposed = !0),
                  sj_evt.unbind(e, t),
                  n.raiseEvent(17),
                  n.clearEvents());
              };
            sj_evt.bind(e, t, !1);
          }),
          (h.prototype.getPartnerCodeOverride = function () {
            var n,
              t =
                (n = _ge(this.config.f)) === null || n === void 0
                  ? void 0
                  : n.querySelector("[name='pc']"),
              r = t && t.value,
              u =
                _d.location.href.indexOf("ntp.msn.com/edge/ntp") >= 0 ||
                _d.location.href.indexOf("ntp.msn.cn/edge/ntp") >= 0,
              i;
            return !r && u && (i = "U531"), i;
          }),
          (h.prototype.setRawQuery = function (n) {
            this.canvas.updateRawQuery(n);
          }),
          (h.prototype.setQuery = function (n) {
            if (
              ((this.currentQuery = n),
              typeof n == "undefined" ||
                (n.length == 0 && !this.config.fetchOnEmpty))
            ) {
              this.fetchZeroQF();
              return;
            }
            this.fetch(n);
          }),
          (h.prototype.pretechQuery = function (n) {
            this.fetchWeb(n, 0, !0);
          }),
          (h.prototype.setAdCachedQuery = function (n, t) {
            this._adCachedQuery = n;
            this._adCachedImpressionGuid = t;
          }),
          (h.prototype.appendLatency = function (n) {
            this.networkLatencyInfo =
              this.data && this.data.Inst
                ? this.networkLatencyInfo == ""
                  ? this.data.Inst.IG + ":" + n
                  : this.networkLatencyInfo + "&" + this.data.Inst.IG + ":" + n
                : this.networkLatencyInfo == ""
                ? n
                : this.networkLatencyInfo + "&" + n;
          }),
          (h.ScopeExtensions = []),
          h
        );
      })(t.EventRegisterer);
      t.WebCore = s;
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {})),
  (function (n) {
    var t;
    (function (n) {
      function i(n, t, i) {
        Log.Log(n, "AS", "PerfInst", i, "Meta", t);
      }
      function r(n, t, i, r) {
        Log.Log(n, "AS", "PerfInst", i, "Meta", t, "Latency", r);
      }
      function t(n, t) {
        var i = "q:" + n;
        return t && (i += ",i:" + t), i;
      }
      function u(n) {
        var t = 0,
          i = new Date().getTime();
        return n != 0 && (t = i - n), { latency: t, currentTime: i };
      }
      var f = (function () {
        function f() {}
        return (
          (f.prototype.init = function (t) {
            this._coreInstance = t;
            this._startTime = 0;
            var i = new n.EventRegistration(this);
            i.add(18, this.onTextChanged);
            i.add(7, this.onRequestSent);
            i.add(9, this.onValidResponseReceived);
            i.add(10, this.onSuggestionsRendered);
            t.registerEvents(i);
          }),
          (f.prototype.onTextChanged = function (n, u) {
            this._coreInstance.config.enableClientPerfLatencyCalc
              ? ((this._startTime = new Date().getTime()),
                r("Change", t(n, u), !1, "0"))
              : i("Change", t(n, u), !1);
          }),
          (f.prototype.onRequestSent = function (n, f) {
            if (this._coreInstance.config.enableClientPerfLatencyCalc) {
              var e = u(this._startTime),
                o = e.latency,
                s = e.currentTime;
              this._startTime = s;
              r("Request", t(n, f), !1, o.toString());
            } else i("Request", t(n, f), !1);
          }),
          (f.prototype.onValidResponseReceived = function (f, e, o) {
            if (o == n.DataSources.Web)
              if (this._coreInstance.config.enableClientPerfLatencyCalc) {
                var s = u(this._startTime),
                  h = s.latency,
                  c = s.currentTime;
                this._startTime = c;
                r("Load", t(f, e), !1, h.toString());
              } else i("Load", t(f, e), !1);
          }),
          (f.prototype.onSuggestionsRendered = function (f, e, o, s, h) {
            var c;
            if (h == n.DataSources.Web)
              if (
                ((c = t(f, o)),
                this._coreInstance.data &&
                  this._coreInstance.data.Inst &&
                  this._coreInstance.data.Inst.IG &&
                  (c += ",ig:" + this._coreInstance.data.Inst.IG),
                this._coreInstance.config.enableClientPerfLatencyCalc)
              ) {
                var l = u(this._startTime),
                  a = l.latency,
                  v = l.currentTime;
                this._startTime = v;
                r("Show", c, !1, a.toString());
              } else i("Show", c, !1);
          }),
          f
        );
      })();
      n.WebCore.ScopeExtensions.push(new f());
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {}));
(__extends =
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
        i === null ? Object.create(i) : ((r.prototype = i.prototype), new r());
    };
  })()),
  (function (n) {
    var t;
    (function (n) {
      var u = AutoSuggest.Service.QueryParams,
        t = "sa_errorCnt",
        i = (function () {
          function n() {
            this._callParams = {};
            this._callHeaders = {};
            this._callBody = {};
          }
          return (
            (n.prototype.fetchUrl = function () {}),
            (n.prototype.init = function (n, t, i) {
              this._config = n;
              this._baseUrl = t;
              this._callbackFunc = i;
            }),
            (n.prototype.addParam = function (n, t) {
              this._callParams[n] = t;
            }),
            (n.prototype.addHeader = function (n, t) {
              if (this._config.cors)
                throw "Custom headers are not allowed for cross domain calls";
              this._callHeaders[n] = t;
            }),
            (n.prototype.addPostValue = function (n, t) {
              this._callBody[n] = t;
            }),
            (n.prototype.addBody = function (n) {
              this._callBody = n;
            }),
            (n.prototype.fetch = function (n, t, i) {
              this._requestSequence = t;
              var r = this.getFinalFetchUrl(n);
              this.fetchUrl(r, n, t, i);
            }),
            (n.prototype.getBaseUrl = function () {
              return this._baseUrl;
            }),
            (n.prototype.isPostCall = function () {
              return (
                this._callBody &&
                typeof this._callBody == "object" &&
                Object.keys(this._callBody).length > 0
              );
            }),
            (n.prototype.getFinalFetchUrl = function (n) {
              var i =
                  decodeURIComponent(this.getBaseUrl()) + encodeURIComponent(n),
                t;
              this.addParam(u.ConversationId, _G.IG);
              this._config.adform && this.addParam("form", this._config.adform);
              for (t in this._callParams)
                i += "&" + t + "=" + this._callParams[t];
              return (this._callParams = {}), i;
            }),
            n
          );
        })(),
        r;
      n.DataProviderBase = i;
      r = (function (i) {
        function r() {
          return (i !== null && i.apply(this, arguments)) || this;
        }
        return (
          __extends(r, i),
          (r.prototype.fetchUrl = function (i, r, u, f) {
            var o = this,
              e = sj_gx(),
              s,
              h;
            e.open(this.isPostCall() ? "POST" : "GET", i, !0);
            for (s in this._callHeaders)
              e.setRequestHeader(s, this._callHeaders[s]);
            this._callHeaders = {};
            e.onreadystatechange = function () {
              var s, n, h, c, l;
              if (e.readyState == 4) {
                if (
                  ((e.onreadystatechange = function () {}),
                  (s = void 0),
                  (n = e.status),
                  n == 200
                    ? (s = e.responseText)
                    : _w[t] &&
                      (n == 0 ||
                        ((n / 100) | 0) == 4 ||
                        ((n / 100) | 0) == 5) &&
                      (s = _w[t]),
                  (h = null),
                  f &&
                    (!o._config.cors || o._config.rbhc) &&
                    e.getResponseHeader &&
                    (h = e.getResponseHeader("X-BingQF-BLIS")),
                  o._config.instHeader &&
                    e.getResponseHeader &&
                    ((c = e.getResponseHeader("X-BingQF-It")), c))
                )
                  try {
                    l = JSON.parse(c);
                    l.Inst && sa_inst.setData(l);
                  } catch (a) {}
                o._callbackFunc(s, u, r, i, h, n);
              }
            };
            e.withCredentials !== undefined && (e.withCredentials = !0);
            this.isPostCall()
              ? ((h = n.Utils.safeExecute(function () {
                  return JSON.stringify(o._callBody);
                }, "")),
                e.send(h))
              : e.send();
          }),
          r
        );
      })(i);
      n.DataProvider = r;
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {}));
(__extends =
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
        i === null ? Object.create(i) : ((r.prototype = i.prototype), new r());
    };
  })()),
  (function (n) {
    var t;
    (function (t) {
      var w = ["MD", "ADS"],
        b = ["CustomSearch"],
        h = ["previousSibling", "nextSibling"],
        f = ["lastChild", "firstChild"],
        c = "sa_hv",
        l = /(\s|^)sa_hv/g,
        e = "data-sugcont",
        a = "as_rsform",
        o = /(\s|^)as_rsform/g,
        s = "BAWC",
        k = "bw-cn",
        v = ",",
        y = "result",
        r = t.Utils,
        u = AutoSuggest.Service.SuggestionAttributes,
        p = [
          t.DataSources.BingAtWork,
          t.DataSources.Substrate,
          t.DataSources.MicrosoftSearchInBing,
          t.DataSources.MicrosoftSearchInBingCached,
        ],
        i = { RS: "RS", PAA: "PAA", PASF: "PASF" },
        d = (function (d) {
          function g() {
            var n = d.call(this) || this;
            return (
              (n.currentSuggestionList = []),
              (n._ie9orLower = sb_ie && !_w.atob),
              (n._currentRequestSequence = -1),
              (n._suggestionsQueue = {}),
              (n._hasSwitched = !1),
              n
            );
          }
          return (
            __extends(g, d),
            (g.prototype.init = function (n, i, r, u) {
              this.autoSuggestInstance = n;
              this.config = i;
              this.container = r;
              this._searchBox = u;
              this._asContainer = _ge(i.c || "sw_as");
              var f = new t.EventRegistration(this);
              f.add(17, this.clearEvents);
              this.autoSuggestInstance.registerEvents(f);
              this._hasPrefixQueryBeenUpdated = !1;
              this.nextWordRemoved = !1;
              this.hasAsExpanded = !1;
              this.searchTypeDivIndex = 0;
              this._header = document.querySelector("#b_header")
                ? document.querySelector("#b_header")
                : null;
              this.resizeNextWord = i.nwRz;
              this.isFirstNWFullEnabled = i.nextWordNFullSuggsOne;
              this.isSecondNWFullEnabled = i.nextWordNFullSuggsTwo;
            }),
            (g.prototype.updateWidth = function () {
              var r = _ge("sw_as"),
                n,
                u,
                f,
                i;
              if (
                this.nextWordRemoved &&
                r &&
                ((n = document.querySelectorAll("li.sa_sg")),
                (u = t.Utils.GetComputedStyle(r).width),
                n)
              )
                for (f = n.length, i = 0; i < f; i++) n[i].style.width = u;
            }),
            (g.prototype.removeNextWordOnMSBHistory = function (n) {
              var e = _ge("sw_as"),
                i,
                f,
                u,
                r,
                o;
              if (
                n &&
                e &&
                ((i = document.querySelectorAll("li.sa_sg")),
                (f = i === null || i === void 0 ? void 0 : i.length),
                f > 0)
              ) {
                for (u = 0; u < f; u++)
                  i[u].stype.indexOf("NW") != -1 &&
                    (i[u].parentElement.removeChild(i[u]),
                    (this.nextWordRemoved = !0));
                this.nextWordRemoved &&
                  (this.config.enforceMsnNWStyle
                    ? ((r = document.querySelector(".sa_as.sa_nw.sa_msn_nw")),
                      r &&
                        (r.classList.remove("sa_nw"),
                        r.classList.remove("sa_msn_nw")))
                    : ((r = document.querySelector(".sa_as.sa_nw")),
                      r && r.classList.remove("sa_nw")),
                  (this.containsNextWord = !1),
                  (o = new t.Layout(this.config, e, this)),
                  o.update());
              }
            }),
            (g.prototype.lastElementBorderCurve = function () {
              var e, s, n, h, t, u, i, f;
              if (!this.config.isMobile) {
                var r = "0 0 0 0",
                  o = _ge("as_foot");
                if (
                  (this.config.CommonFooter &&
                    o != null &&
                    ((e = o.parentElement.firstElementChild) === null ||
                    e === void 0
                      ? void 0
                      : e.id) == "sa_ul" &&
                    ((n = _ge("sa_ul")),
                    n &&
                      n != undefined &&
                      ((n.style.borderRadius = r),
                      (n.lastElementChild.style.borderRadius = r))),
                  this.config.enableAsPanelExpansion && this.hasAsExpanded)
                ) {
                  if (
                    ((s = document.querySelector(".as_rmhswarning")),
                    (n = document.querySelector(".sa_as")),
                    s && s != undefined)
                  )
                    n &&
                      n != undefined &&
                      (n.style.borderRadius = "0 0 24px 24px");
                  else if (this.isLeftSectionLongerForRichRequery()) {
                    var a = _ge("sa_ul"),
                      v = a.lastElementChild;
                    v.style.borderRadius = "0 0 0 24px";
                  }
                } else if (!_ge("sa_baw") && o == null) return;
                if (
                  ((h = "sa_ul"), _ge(h)) &&
                  ((t = _ge(h)),
                  t.children && t.children.length && t.lastElementChild)
                ) {
                  var y = t.lastElementChild,
                    c = document.querySelectorAll("#sw_as #sa_ul > div"),
                    l = c.length;
                  if (l !== 0) {
                    for (u = 0; u < l; u++)
                      if (((i = c[u]), i.children && i.children.length)) {
                        if (i === y) {
                          f = t.children.length;
                          f > 1 &&
                            t.children[f - 2].tagName.toUpperCase() === "LI" &&
                            (t.children[f - 2].style.borderRadius = r);
                          break;
                        }
                        i.lastElementChild.style.borderRadius = r;
                      }
                    return;
                  }
                }
              }
            }),
            (g.prototype.insertHistoryBanner = function (n, t) {
              for (
                var o,
                  s,
                  u,
                  f,
                  e,
                  i =
                    (f = this.container) === null || f === void 0
                      ? void 0
                      : f.getElementsByTagName("UL"),
                  r = 0;
                r < (i === null || i === void 0 ? void 0 : i.length);
                r++
              )
                if (i[r].className.indexOf("sa_drw") != -1) {
                  e = i[r];
                  break;
                }
              if (this.config.CommonFooter) {
                if (t && !_ge("as_foot")) {
                  s = void 0;
                  u = document.querySelectorAll(".sa_as");
                  u.length > 0 && (s = u[u.length - 1]);
                  var h = this.config.aadManageHistoryUrl,
                    c = sa_loc.ManageHistory
                      ? sa_loc.ManageHistory.slice(2, -2)
                      : "Manage Your Search History",
                    l =
                      '<div id="as_foot" class="as_rmhswarning out_fd_side"><a _target="blank" class="as_rmhswarningtxt" tabindex="0" href= '
                        .concat(h, ">")
                        .concat(c, "</a></div>"),
                    o = this.createDivFromAjaxResponse(l);
                  this.insertAjaxResponseDivIntoDom(s, o, 1, "MSB");
                }
              } else
                n != "" &&
                  ((o = this.createDivFromAjaxResponse(n)),
                  this.insertAjaxResponseDivIntoDom(
                    e && !this.hasAsExpanded ? e : this.container,
                    o,
                    1,
                    "MSB"
                  ));
            }),
            (g.prototype.UpdateClassForBoldEntity = function () {
              var n = document.querySelector(".bold_ent");
              if (n && n != undefined) {
                var r = document.querySelector(".pp_tile.pp_sTile"),
                  u = document.querySelector(".pp_tile.pp_sTile #sa_ans"),
                  t = document.querySelector(
                    ".pp_tile.pp_sTile .entity_container .cico"
                  ),
                  i = document.querySelector(
                    ".pp_tile.pp_sTile .entity_container .cico img"
                  );
                t.style.height = "160px";
                t.style.width = "170px";
                r.classList.add("pp_bold");
                i.style.height = "160px";
                i.style.width = "170px";
                u.id = "sa_ans_bold";
              }
            }),
            (g.prototype.render = function (i, u, f, e) {
              var ot,
                st,
                ht,
                ct,
                y,
                w,
                k,
                b,
                g,
                lt,
                at,
                c,
                a,
                h,
                tt,
                nt,
                rt,
                vt,
                it,
                ft,
                yt,
                ut,
                pt,
                wt,
                v,
                dt,
                gt,
                et,
                bt,
                ni,
                kt;
              for (
                f > this._currentRequestSequence &&
                  ((this._suggestionsQueue = {}),
                  (this._currentQuery = u),
                  (this._currentRequestSequence = f)),
                  this._suggestionsQueue[e] = {
                    suggestions: i,
                    rendered: !1,
                    dataSource: e,
                  },
                  this.config.asLowNetworkScneario &&
                    !this.container.parentElement &&
                    ((ct = document.querySelector(".sa_as")),
                    (this.container = ct ? ct : this.container)),
                  this.nextWordRemoved = !1,
                  this.hasAsExpanded = !1,
                  y = "",
                  w = !1,
                  k = 0;
                k < this.config.enabledDataSources.length;
                k++
              ) {
                var l = [],
                  d = this.config.enabledDataSources,
                  s = this._suggestionsQueue[d[k]];
                if (!s) {
                  this.insertHistoryBanner(y ? y : "", w);
                  this.lastElementBorderCurve();
                  return;
                }
                if (s.rendered) {
                  k == this.config.enabledDataSources.length - 1 &&
                    this.lastElementBorderCurve();
                  continue;
                }
                for (
                  b = _ge("sa_baw"),
                    g = null,
                    p.indexOf(s.dataSource) != -1 &&
                      (b
                        ? this.config.msbSusR &&
                          (g = this.config.bawmax * 2 - b.children.length)
                        : this.config.promoteUserHistoryForAADUser &&
                          s.dataSource === "MSBC"
                        ? ((c = s.suggestions.split("|||")),
                          (s.suggestions = ""),
                          c &&
                            c.length == 3 &&
                            (c[0] != "" &&
                              ((w = !0),
                              (s.suggestions =
                                '<div data-region="BAWC" id="bawuh" data-sugcont="1" role="none">'.concat(
                                  c[0],
                                  "</div>"
                                ))),
                            c[1] != "" &&
                              (s.suggestions +=
                                "|||" +
                                '<div data-region="BAWC" id="bawh" data-sugcont="1" role="none">'.concat(
                                  c[1],
                                  "</div>"
                                )),
                            c[2] != "" &&
                              (s.suggestions +=
                                "|||" +
                                '<div data-region="BAWC" id="sa_baw" data-sugcont="1" role="none">'.concat(
                                  c[2],
                                  "</div>"
                                )),
                            (a =
                              t.BingAtWorkTemplateManager === null ||
                              t.BingAtWorkTemplateManager === void 0
                                ? void 0
                                : t.BingAtWorkTemplateManager.replaceLocalizedStringsInMSBHtml(
                                    s.suggestions,
                                    u
                                  )),
                            a &&
                              ((lt = '<li id="as_foot"'),
                              a.indexOf(lt) != -1
                                ? ((at = a.split(lt)),
                                  (s.suggestions = at[0] + "</div>"),
                                  (y =
                                    '<li id="as_foot"' +
                                    at[1].split("</div>")[0]))
                                : (s.suggestions = a))))
                        : this.config.webMsbQFRanking && s.dataSource === "MSBC"
                        ? ((c = s.suggestions.split("|||")),
                          (s.suggestions =
                            c[0] != ""
                              ? '<div data-region="BAWC" id="bawh" data-sugcont="1" role="none">'.concat(
                                  c[0],
                                  "</div>"
                                ) +
                                "|||" +
                                '<div data-region="BAWC" id="sa_baw" data-sugcont="1" role="none">'.concat(
                                  c[1],
                                  "</div>"
                                )
                              : '<div data-region="BAWC" id="sa_baw" data-sugcont="1" role="none">'.concat(
                                  c[1],
                                  "</div>"
                                )))
                        : s.dataSource !== "MSBE" &&
                          (s.suggestions =
                            '<div data-region="BAWC" id="sa_baw" data-sugcont="1" role="none">'.concat(
                              s.suggestions,
                              "</div>"
                            ))),
                    s.dataSource === "MSBE" &&
                      ((a =
                        t.BingAtWorkTemplateManager === null ||
                        t.BingAtWorkTemplateManager === void 0
                          ? void 0
                          : t.BingAtWorkTemplateManager.replaceLocalizedStringsInMSBEHtml(
                              s.suggestions,
                              u
                            )),
                      a && (s.suggestions = a)),
                    d[0] == s.dataSource &&
                      ((this.container.innerHTML = ""),
                      (this.currentSuggestionList = []),
                      (this._currentSuggestion = null),
                      (this.selectedSuggestion = null),
                      (this._hasSwitched = !1),
                      (this._currentMsbSuggestionsListSize = 0),
                      (this.containsNextWordInWebSuggestions = !1),
                      this._searchBox.removeAttribute("aria-activedescendant")),
                    h = void 0,
                    tt = this.container.getElementsByTagName("UL"),
                    nt = 0;
                  nt < tt.length;
                  nt++
                )
                  if (tt[nt].className.indexOf("sa_drw") != -1) {
                    h = tt[nt];
                    break;
                  }
                if (
                  ((b = _ge("sa_baw")),
                  s.dataSource === "MSBE" || !b || (h = b),
                  this.config.promoteUserHistoryForAADUser &&
                    s.dataSource === "MSBC" &&
                    s.suggestions.indexOf("|||") != -1)
                ) {
                  for (
                    it = s.suggestions.split("|||"),
                      this.isFirstNWFullEnabled ||
                        this.isSecondNWFullEnabled ||
                        this.removeNextWordOnMSBHistory(w),
                      rt = 0,
                      vt = it;
                    rt < vt.length;
                    rt++
                  )
                    (ut = vt[rt]),
                      (v = this.createDivFromAjaxResponse(ut)),
                      this.insertAjaxResponseDivIntoDom(
                        h ? h : this.container,
                        v,
                        g,
                        s.dataSource
                      ),
                      this.config.resolveStrictCspForMSBSuggestion &&
                        ((ot = n.AS.BingAtWorkTemplateManager) === null ||
                        ot === void 0
                          ? void 0
                          : ot.handleMsbImageError) &&
                        n.AS.BingAtWorkTemplateManager.handleMsbImageError(
                          s,
                          h ? h : this.container
                        ),
                      this.buildSuggestions(l, s.dataSource);
                  this.updateWidth();
                } else if (
                  this.config.webMsbQFRanking &&
                  s.dataSource === "MSBC" &&
                  s.suggestions.indexOf("|||") != -1
                )
                  for (
                    it = s.suggestions.split("|||"), ft = 0, yt = it;
                    ft < yt.length;
                    ft++
                  )
                    (ut = yt[ft]),
                      (v = this.createDivFromAjaxResponse(ut)),
                      this.insertAjaxResponseDivIntoDom(
                        h ? h : this.container,
                        v,
                        g,
                        s.dataSource
                      ),
                      this.config.resolveStrictCspForMSBSuggestion &&
                        ((st = n.AS.BingAtWorkTemplateManager) === null ||
                        st === void 0
                          ? void 0
                          : st.handleMsbImageError) &&
                        n.AS.BingAtWorkTemplateManager.handleMsbImageError(
                          s,
                          h ? h : this.container
                        ),
                      this.buildSuggestions(l, s.dataSource);
                else
                  (s.dataSource === "MSBE" &&
                    this.containsNextWordInWebSuggestions) ||
                    (s.dataSource == "MSBE" &&
                      ((pt = "asmsbribbon_li"),
                      this.isLeftSectionLongerForRichRequery() &&
                        ((pt = "asmsbribbon_li_lb"),
                        (wt = s.suggestions.split("asmsbribbon_li")),
                        (s.suggestions = wt[0] + pt + wt[1]))),
                    (v = this.createDivFromAjaxResponse(s.suggestions)),
                    s.dataSource !== "MSBC" ||
                      this.isFirstNWFullEnabled ||
                      this.isSecondNWFullEnabled ||
                      this.removeNextWordOnMSBHistory(w),
                    this.config.webMsbQFRanking &&
                      this.setLowConfidenceWebSignal(v),
                    this.insertAjaxResponseDivIntoDom(
                      h ? h : this.container,
                      v,
                      g,
                      s.dataSource
                    ),
                    this.updateWidth(),
                    this.config.boldEntity &&
                      s.dataSource === "Web" &&
                      this.UpdateClassForBoldEntity(),
                    this.config.resolveStrictCspForMSBSuggestion &&
                      ((ht = n.AS.BingAtWorkTemplateManager) === null ||
                      ht === void 0
                        ? void 0
                        : ht.handleMsbImageError) &&
                      n.AS.BingAtWorkTemplateManager.handleMsbImageError(
                        s,
                        h ? h : this.container
                      ),
                    this.buildSuggestions(l, s.dataSource),
                    s.dataSource === "Web" &&
                      (this.containsNextWordInWebSuggestions =
                        this.containsNextWord),
                    (dt =
                      document.getElementsByClassName("b_searchboxForm")[0]),
                    this.config.enableAsPanelExpansion &&
                    !this.containsNextWordInWebSuggestions &&
                    s.dataSource === "Web" &&
                    this.shouldShowOtherSuggestions()
                      ? this.showSearchType(
                          s,
                          this.config.enabledSearchTypes,
                          h,
                          l,
                          this.config.maxSuggestionsToShow
                        )
                      : this.config.enableAsPanelExpansion &&
                        !this.shouldShowOtherSuggestions() &&
                        (r.RemoveClassName(this._header, o),
                        r.RemoveClassName(dt, o)));
                if (
                  ((this._previousQuery = this._currentQuery),
                  (this._searchTypeDivs = _d.querySelectorAll("#sa_ul")),
                  (s.rendered = !0),
                  s.dataSource == t.DataSources.Web)
                )
                  if (l.length > 0)
                    this.config.bi &&
                      ((gt = {
                        currentQuery: u,
                        suggestionElements: l,
                        requestSequence: f,
                      }),
                      sj_evt.fire("AS.SuggestionsRendered", gt));
                  else
                    for (et = 0, bt = d; et < bt.length; et++)
                      if (((ni = bt[et]), p.indexOf(ni) != -1)) {
                        kt = sj_ce("ul", this.config.slid, "sa_drw");
                        kt.setAttribute("data-priority", "2");
                        this.container.appendChild(kt);
                        break;
                      }
                l.length > 0 &&
                  (sj_evt.fire("AS.Canvas.Show"),
                  this.config.asLowNetworkScneario &&
                    this.container.style.display == "none" &&
                    (this.container.style.display = "block"),
                  this.raiseEvent(10, u, l, f, this.container, s.dataSource));
                this.currentSuggestionList.length === 0 &&
                  (sj_evt.fire("AS.Canvas.Hide"),
                  d[d.length - 1] == s.dataSource
                    ? this.raiseEvent(11, u)
                    : e === t.DataSources.Web && this.raiseEvent(24, u));
              }
              this.insertHistoryBanner(y ? y : "", w);
              this.lastElementBorderCurve();
            }),
            (g.prototype.updateRawQuery = function (n) {
              this._rawQuery = n;
            }),
            (g.prototype.isLeftSectionLongerForRichRequery = function () {
              var i = _d.querySelectorAll("#sa_ul"),
                e = 0,
                r = 0,
                n,
                t,
                f;
              if (i.length > 1) {
                var o = 34,
                  u = i[0];
                for (
                  n = 0;
                  n <
                  (u === null || u === void 0 ? void 0 : u.childNodes.length);
                  n++
                )
                  e += u.childNodes[n].offsetHeight;
                for (
                  n = 1;
                  n < (i === null || i === void 0 ? void 0 : i.length);
                  n++
                ) {
                  t = i[n];
                  switch (t.className) {
                    case "paa_drw":
                    case "rs_drw":
                      for (
                        f = 0;
                        f <
                        (t === null || t === void 0
                          ? void 0
                          : t.childNodes.length);
                        f++
                      )
                        r += t.childNodes[f].offsetHeight;
                      r += o;
                      break;
                    case "pasf_rich_drw":
                      r += t.offsetHeight + 12 + o;
                  }
                }
                r += 10;
              }
              return e > r;
            }),
            (g.prototype.showSearchType = function (n, t, i, u, f) {
              var s, h, e;
              if (
                (u === void 0 && (u = []),
                this.config.asExpandNoHeightInc &&
                  this.adjustNumberOfSuggestionsBasedOnASHeight(t, f, u.length),
                (s = document.getElementsByClassName("b_searchboxForm")[0]),
                (h = this.addOtherSuggesstionsOnASPanel(t, f)),
                h !== undefined)
              )
                for (
                  this.hasAsExpanded = !0,
                    r.AddClassName(this._header, a),
                    r.AddClassName(s, a),
                    this.insertAjaxResponseDivIntoDom(
                      i ? i : this.container,
                      h,
                      f.reduce(function (n, t) {
                        return n + t;
                      }, 0),
                      n.dataSource
                    ),
                    e = 0;
                  e < t.length;
                  ++e
                )
                  this.buildSuggestions(u, t[e]);
              else r.RemoveClassName(this._header, o), r.RemoveClassName(s, o);
            }),
            (g.prototype.adjustNumberOfSuggestionsBasedOnASHeight = function (
              n,
              t,
              r
            ) {
              var h = 14,
                e = 36,
                o = 10,
                c = 176,
                s = e * r,
                u,
                f;
              n.length == 1
                ? (n[0] === i.RS || n[0] === i.PAA) &&
                  ((u = Math.floor((s - h) / (e + o))),
                  s >= h + (u + 1) * e + u * o && u++,
                  (t[0] = u))
                : (n[0] === i.RS || n[0] === i.PAA) && n[1] === i.PASF
                ? ((u = Math.floor((s - c) / (e + o))),
                  s >= c + (u + 1) * e + u * o && u++,
                  (t[0] = u))
                : n[0] === i.RS &&
                  n[1] === i.PAA &&
                  ((f = Math.floor((s - h * 2) / (e + o))),
                  s >= h * 2 + (f + 1) * e + f * o && f++,
                  (t[0] = Math.ceil(f / 2)),
                  f - t[0] == 1 ? ((t[0] = f), (t[1] = 0)) : (t[1] = f - t[0]));
            }),
            (g.prototype.addOtherSuggesstionsOnASPanel = function (n, i) {
              var s,
                f = "",
                r,
                u,
                o,
                e;
              if (
                !this.config.asExpandNoHeightInc ||
                n.length != 2 ||
                (t.SearchTypeUtils.isResultTypePresent(n[0]) &&
                  t.SearchTypeUtils.isResultTypePresent(n[1]))
              )
                for (e = 0; e < n.length; ++e) {
                  var r = this.getSuggestionsAndLabel(n[e], i[e]),
                    u = r[0],
                    o = r[1];
                  u && u.length !== 0 && (f += o + u);
                }
              else
                (r = ["", ""]),
                  t.SearchTypeUtils.isResultTypePresent(n[0])
                    ? t.SearchTypeUtils.isResultTypePresent(n[1]) ||
                      (r = this.getSuggestionsAndLabel(n[0], i[0] + i[1]))
                    : (r = this.getSuggestionsAndLabel(n[1], i[0] + i[1])),
                  (u = r[0]),
                  (o = r[1]),
                  u && u.length !== 0 && (f += o + u);
              return (
                f &&
                  f.length !== 0 &&
                  (s = this.createDivFromAjaxResponse(
                    "<div class='sa_drw'>".concat(f, "</div>")
                  )),
                s
              );
            }),
            (g.prototype.getSuggestionsAndLabel = function (n, r) {
              return typeof t.SearchTypeUtils == "undefined"
                ? ["", ""]
                : n === i.RS
                ? [
                    t.SearchTypeUtils.getRsSuggestions(
                      this._previousQuery,
                      this._currentQuery,
                      r
                    ),
                    sa_loc.RelatedSearches
                      ? "<p class='rs_tx'>" + sa_loc.RelatedSearches + "</p>"
                      : "<p class='rs_tx'>Related Searches</p>",
                  ]
                : n === i.PAA
                ? [
                    t.SearchTypeUtils.getPaaAnswers(
                      this._previousQuery,
                      this._currentQuery,
                      r,
                      this.config.hitHighlightPaa
                    ),
                    sa_loc.PeopleAlsoAsk
                      ? "<p class='paa_tx'>" + sa_loc.PeopleAlsoAsk + "</p>"
                      : "<p class='paa_tx'>People Also Ask</p>",
                  ]
                : n === i.PASF
                ? [
                    t.SearchTypeUtils.getPASFData(
                      this._previousQuery,
                      this._currentQuery,
                      r
                    ),
                    sa_loc.PeopleAlsoSearchFor
                      ? "<p class='pasf_tx'>" +
                        sa_loc.PeopleAlsoSearchFor +
                        "</p>"
                      : "<p class='pasf_tx'>People Also Search For</p>",
                  ]
                : ["", ""];
            }),
            (g.prototype.shouldShowOtherSuggestions = function () {
              var n = _d.querySelectorAll("#sa_ul li");
              return n === undefined || n.length == 0
                ? !1
                : ((this._hasPrefixQueryBeenUpdated =
                    this._hasPrefixQueryBeenUpdated ||
                    (this._previousQuery !== undefined &&
                      this._previousQuery !== this._currentQuery)),
                  !this._hasPrefixQueryBeenUpdated);
            }),
            (g.prototype.getNumberOfSuggestionsToBuild = function (n) {
              var i, t, r;
              if ((n === void 0 && (n = "AS"), (i = 0), n === "Web"))
                this._suggestionsContainer = _ge(this.config.slid);
              else if (n === "RS") t = _d.querySelectorAll("#sa_ul.rs_drw");
              else if (n === "PAA") t = _d.querySelectorAll("#sa_ul.paa_drw");
              else if (n === "PASF")
                t = _d.querySelectorAll("#sa_ul.psaf_rs_drw");
              else {
                if (n === "MSBC")
                  return (
                    (t = _d.querySelectorAll("[data-region=".concat(s, "]"))),
                    t &&
                      t.length > 0 &&
                      ((r = t.length),
                      (this._suggestionsContainer = t[r - 1]),
                      (i = t[r - 1].childElementCount)),
                    i
                  );
                n === "MSBE"
                  ? (t = _d.querySelectorAll("#sa_ul"))
                  : (this._suggestionsContainer = _ge(this.config.slid));
              }
              return (
                t &&
                  t.length > 0 &&
                  ((this._suggestionsContainer = t[0]),
                  (i = t[0].childElementCount)),
                i
              );
            }),
            (g.prototype.buildSuggestions = function (n, i) {
              var nt,
                tt,
                it,
                h,
                c,
                ft,
                et,
                w,
                f,
                l,
                vt,
                b,
                o,
                ot,
                st,
                d,
                ht,
                a,
                ct,
                g;
              i === void 0 && (i = "Web");
              this._nextWordRawQuerySize = null;
              this._largestSuggestion = 0;
              this._nextWordRawQuerySize = 1e4;
              this.containsNextWord = !1;
              this.mnwSuggestionsCount = 0;
              var lt = !1,
                yt = this.getNumberOfSuggestionsToBuild(i),
                p = null,
                rt = null,
                ut = document.createElement("canvas").getContext("2d"),
                at =
                  (document.querySelector("#sw_as")
                    ? document.querySelector("#sw_as").offsetWidth
                    : Number.MAX_VALUE) - 100;
              if (
                (this.isSecondNWFullEnabled && this.setFontInContext(ut),
                this._suggestionsContainer)
              ) {
                for (
                  h = null,
                    h =
                      this.config.enableAsPanelExpansion && this.hasAsExpanded
                        ? this._asContainer.getElementsByTagName("li")
                        : this._suggestionsContainer.getElementsByTagName("li"),
                    c = this.currentSuggestionList.length,
                    ft = h.length,
                    this.config.ghostingThreshold ||
                      !this.config.webMsbQFRanking ||
                      !this._hasSwitched ||
                      this.nextWordRemoved ||
                      this.isFirstNWFullEnabled ||
                      this.isSecondNWFullEnabled ||
                      ((c = this._currentMsbSuggestionsListSize),
                      (this._currentMsbSuggestionsListSize +=
                        h.length - this.currentSuggestionList.length),
                      (ft = this._currentMsbSuggestionsListSize),
                      (this._hasSwitched = !1)),
                    et = this.nextWordRemoved ? 0 : c,
                    et = yt > 0 ? 0 : c,
                    w = et;
                  w < ft;
                  ++w
                )
                  if (
                    ((f = h[w]),
                    (l = f.parentNode),
                    l.id === this.config.slid ||
                      l.getAttribute(e) ||
                      l.className === "sa_mnw_region")
                  ) {
                    if (f.className.indexOf("sa_hd") != -1) {
                      f.hd = !0;
                      continue;
                    }
                    if (
                      (r.RewriteAttribsToProps(f, [
                        u.Url,
                        u.Query,
                        u.Type,
                        u.Autocomplete,
                        u.RequestGuid,
                        u.AdQuery,
                        u.GhostingText,
                      ]),
                      f.stype)
                    )
                      if (f.stype == "HS")
                        (o = f.firstElementChild),
                          o && o.setAttribute("aria-hidden", "true");
                      else {
                        for (
                          vt =
                            ((nt = f.children) === null || nt === void 0
                              ? void 0
                              : nt.length) || 0,
                            b = 0;
                          b < vt;
                          b++
                        )
                          (o = f.children[b]),
                            o && o.setAttribute("aria-hidden", "true");
                        ot = "";
                        l.getAttribute("data-region") == s &&
                          ((st = f.getElementsByClassName(k)),
                          (ot =
                            st.length > 0
                              ? [
                                  v,
                                  st[0].innerText,
                                  f.stype.toLowerCase(),
                                  y,
                                ].join(" ")
                              : [v, f.stype.toLowerCase(), y].join(" ")),
                          this.config.enableMsbQFWorkRedirect &&
                            ((f.url = t.Utils.getMSBWorkVerticalSearchUrl(
                              f.url
                            )),
                            f.setAttribute("url", f.url)));
                        f.stype.indexOf("NW") != 0 ||
                          lt ||
                          this.config.isMobile ||
                          ((d = this.isSpyGlassPresent(f)),
                          (this.resizeNextWord = !d),
                          ((it =
                            (tt = f.lastChild) === null || tt === void 0
                              ? void 0
                              : tt.firstChild) === null || it === void 0
                            ? void 0
                            : it.innerText) &&
                            ((ht =
                              f.lastChild.firstChild.innerText.indexOf("...") ==
                              0),
                            (this.isFirstNWFullEnabled = d && ht),
                            (this.isSecondNWFullEnabled = d && !ht),
                            (lt = !0)));
                        this.isFirstNWFullEnabled && f.stype.indexOf("NW") == 0
                          ? f.setAttribute("aria-label", f.innerText.substr(4))
                          : f.setAttribute("aria-label", f.innerText + ot);
                      }
                    f.className.indexOf("pp_tile") != -1 &&
                      (f.panel = { ot: sb_gt() });
                    (f.stype &&
                      this.isSuggestionTypeInstrumentationDisabled(f.stype)) ||
                      (f.addInst = !0);
                    f.stype &&
                      this.isNavigationalSuggestion(f.stype) &&
                      (f.nav = !0);
                    this.config.mnw &&
                      (f.stype == "MNW" ||
                        f.stype == "MNWU" ||
                        f.stype == "MNWB" ||
                        f.stype == "MNWT" ||
                        f.stype == "MNWF") &&
                      (this.mnwSuggestionsCount += 1);
                    this.config.eNw &&
                      f.stype &&
                      f.stype.indexOf("NW") > -1 &&
                      ((this.containsNextWord = !0),
                      this.resizeNextWord &&
                        ((a = f.textContent || f.innerText),
                        a &&
                          ((ct = f.query.replace(a, "")),
                          a.length > this._largestSuggestion &&
                            ct.length <= this._nextWordRawQuerySize &&
                            ((this._largestSuggestion = a.length),
                            (this._nextWordRawQuerySize = ct.length),
                            (this.largestNextWordElement = f)))),
                      this.isSecondNWFullEnabled &&
                        f.stype &&
                        f.stype.indexOf("NW") == 0 &&
                        ((g = ut.measureText(f.innerText).width),
                        g > at &&
                          (p == null || rt < g) &&
                          ((p = f), (rt = g))));
                    this.currentSuggestionList.push(f.query);
                    this.decorateSuggestion(f, ++c);
                    n.push(f);
                  }
                p != null &&
                  this.truncateCommonPrefixInSuggestions(n, rt, p, at, ut);
              }
            }),
            (g.prototype.setFontInContext = function (n) {
              var t = window.getComputedStyle(
                document.querySelector("#sw_as"),
                null
              );
              n.font = ""
                .concat(t.getPropertyValue("font-weight"), " ")
                .concat(t.getPropertyValue("font-size"), " ")
                .concat(t.getPropertyValue("font-family"), " ");
            }),
            (g.prototype.truncateCommonPrefixInSuggestions = function (
              n,
              t,
              i,
              r,
              u
            ) {
              for (
                var l = t, a = i.innerText, f = a, s, h, e, o, c, v;
                l >= r;

              ) {
                if (((s = f.indexOf(" ")), s == -1)) break;
                f = f.substr(s + 1);
                l = u.measureText(f).width;
              }
              if (((h = a.indexOf(f)), h > -1))
                for (e = 0; e < n.length; e++)
                  (o = n[e]),
                    o.stype &&
                      o.stype.indexOf("NW") == 0 &&
                      ((c = o.lastChild.firstChild),
                      (v = "... " + c.innerHTML.substr(h)),
                      (c.innerHTML = v));
            }),
            (g.prototype.isSuggestionTypeInstrumentationDisabled = function (
              n
            ) {
              for (var r, t = 0, i = w; t < i.length; t++)
                if (((r = i[t]), r === n)) return !0;
              return !1;
            }),
            (g.prototype.isNavigationalSuggestion = function (n) {
              for (var r, t = 0, i = b; t < i.length; t++)
                if (((r = i[t]), r === n)) return !0;
              return !1;
            }),
            (g.prototype.mouseOverSuggestionHandler = function (n, i) {
              var r = t.Utils.GetMouseCoords(n);
              i.url &&
              this._previousMouseCoords &&
              (this._previousMouseCoords.x != r.x ||
                this._previousMouseCoords.y != r.y)
                ? ((this._previousMouseCoords = r),
                  i.className.indexOf(c) == -1 && this.highlightSuggestion(i))
                : (this._previousMouseCoords = this._previousMouseCoords || r);
            }),
            (g.prototype.decorateSuggestion = function (n, i) {
              var r = this,
                u;
              n.src = n.stype;
              n.ord = i;
              sj_be(n, "mousemove", function (t) {
                return r.mouseOverSuggestionHandler(t, n);
              });
              sj_be(n, "mouseover", function (i) {
                var u = t.Utils.MouseEnterLeave(function (t) {
                  return r.mouseOverSuggestionHandler(t, n);
                }, n);
                u(i);
              });
              sj_be(n, "mousedown", function (t) {
                return r.onMouseDownSuggestion(t, n);
              });
              sj_be(n, "mouseup", function (t) {
                r.cancelEventBubbling(t);
                r.onMouseUpSuggestion(t, n);
              });
              u = window.navigator.msPointerEnabled
                ? "onMSPointerDown"
                : "ontouchstart";
              u.toLowerCase() in _w &&
                sj_be(n, u.substr(2), function (t) {
                  if (((n.it = "m"), t.pointerType))
                    switch (t.pointerType) {
                      case t.MSPOINTER_TYPE_TOUCH:
                        n.it = "t";
                        break;
                      case t.MSPOINTER_TYPE_PEN:
                        n.it = "p";
                    }
                  else n.it = "t";
                });
            }),
            (g.prototype.getSearchDivIndex = function (n) {
              for (var t = 0; t < this._searchTypeDivs.length; ++t)
                if (this._searchTypeDivs[t].className.indexOf(n) > -1) return t;
              return 0;
            }),
            (g.prototype.getTargetElementExpandAs = function (n, t, i) {
              var l, o, c;
              i === void 0 && (i = 0);
              var a = h[t],
                u = f[t],
                r = n ? n[a] : this._searchTypeDivs[this.searchTypeDivIndex][u];
              return (
                t === 2
                  ? ((u = f[1]),
                    this.searchTypeDivIndex++,
                    (r = this._searchTypeDivs[this.searchTypeDivIndex][u]))
                  : t === 3 &&
                    ((u = f[1]),
                    this.searchTypeDivIndex--,
                    (r = this._searchTypeDivs[this.searchTypeDivIndex][u])),
                r
                  ? ((l = r.getAttribute(e)),
                    l && r.innerHTML
                      ? ((r = r[u]),
                        this.isSuggestionElement(r) ||
                          (r = this.getTargetElementExpandAs(r, t)))
                      : this.isSuggestionElement(r) ||
                        (r = this.getTargetElementExpandAs(r, t)))
                  : this._currentSuggestion &&
                    ((o = this._currentSuggestion.parentElement),
                    o.getAttribute("data-region") &&
                    o.getAttribute("data-region") === s &&
                    i < 2
                      ? (r = this.getTargetElementExpandAs(o, t, i + 1))
                      : ((this.searchTypeDivIndex = this.getSearchDivIndex(
                          o.className
                        )),
                        (c = !1),
                        this.searchTypeDivIndex ===
                          this._searchTypeDivs.length - 1 &&
                          t === 1 &&
                          (c = !0),
                        (this.searchTypeDivIndex =
                          (this.searchTypeDivIndex +
                            this._searchTypeDivs.length +
                            (t === 1 ? 1 : -1)) %
                          this._searchTypeDivs.length),
                        this.unHighlightSuggestionHandler(),
                        (r = c
                          ? undefined
                          : this.getTargetElementExpandAs(null, t)))),
                r
              );
            }),
            (g.prototype.getTargetElement = function (n, t) {
              var s = h[t],
                u = f[t],
                i = n ? n[s] : _ge(this.config.slid)[u],
                o,
                r;
              return (
                i
                  ? ((o = i.getAttribute(e)),
                    o && i.innerHTML
                      ? ((i = i[u]),
                        this.isSuggestionElement(i) ||
                          (i = this.getTargetElement(i, t)))
                      : this.isSuggestionElement(i) ||
                        (i = this.getTargetElement(i, t)))
                  : this._currentSuggestion &&
                    ((r = this._currentSuggestion.parentNode),
                    this.unHighlightSuggestionHandler(),
                    r.getAttribute(e) && (i = this.getTargetElement(r, t))),
                i
              );
            }),
            (g.prototype.isSuggestionElement = function (n) {
              return n.url && n.tagName === "LI";
            }),
            (g.prototype.selectItem = function (n) {
              var t =
                  this.config.enableAsPanelExpansion && this.hasAsExpanded
                    ? this.getTargetElementExpandAs(this._currentSuggestion, n)
                    : this.getTargetElement(this._currentSuggestion, n),
                i;
              t
                ? (this.setSearchValue(t), this.highlightSuggestion(t))
                : this.clearSelectedSuggestion();
              this.config.bi &&
                ((i = {
                  currentQuery: this._currentQuery,
                  suggestionElements: [t],
                  requestSequence: this._currentRequestSequence,
                }),
                sj_evt.fire("AS.SuggestionSelected", i));
            }),
            (g.prototype.isClickOnElementWithClass = function (n, t) {
              var i = n.target;
              return i && i.className.indexOf(t) > -1;
            }),
            (g.prototype.cancelEventBubbling = function (n) {
              n = sj_ev(n);
              sj_sp(n);
            }),
            (g.prototype.highlightSuggestion = function (n) {
              this.unHighlightSuggestionHandler();
              this._currentSuggestion = n;
              this.addHighlightClassName(this._currentSuggestion);
              this._currentSuggestion != n && this.addHighlightClassName(n);
              this._searchBox.setAttribute("aria-activedescendant", n.id);
              n.setAttribute("aria-selected", "true");
            }),
            (g.prototype.unHighlightSuggestionHandler = function () {
              this._currentSuggestion &&
                (this.removeHighlightClassName(this._currentSuggestion),
                this._currentSuggestion.removeAttribute("aria-selected"),
                (this._currentSuggestion = null));
            }),
            (g.prototype.clearSelectedSuggestion = function () {
              this.setSearchValue();
              this.unHighlightSuggestionHandler();
              this._searchBox.removeAttribute("aria-activedescendant");
            }),
            (g.prototype.addHighlightClassName = function (n) {
              l.test(n.className) || (n.className += " " + c);
            }),
            (g.prototype.removeHighlightClassName = function (n) {
              r.RemoveClassName(n, l);
            }),
            (g.prototype.onMouseDownSuggestion = function (n, t) {
              n = sj_ev(n);
              var i = n.button;
              i == 2
                ? (this.cancelEventBubbling(n), sj_pd(n))
                : t.url && (this.clickedSuggestion = t);
            }),
            (g.prototype.modifyUrl = function (n, t) {
              var i = n.split("q="),
                r = i[0];
              return r + "q=" + t + "&" + i[1].split("&")[1];
            }),
            (g.prototype.onMouseUpSuggestion = function (n, t) {
              this.clickedSuggestion &&
                this.clickedSuggestion == t &&
                (this.config.boldEntity &&
                  this.isClickOnElementWithClass(n, "entiybubble_a") &&
                  (t.url = this.modifyUrl(t.url, n.target.target)),
                (n = sj_ev(n)),
                this.config.clickIco &&
                this.isClickOnElementWithClass(n, "as_icon")
                  ? this.raiseEvent(20, t, sj_et(n))
                  : (this.config.mnw &&
                    (t.stype == "MNW" ||
                      t.stype == "MNWU" ||
                      t.stype == "MNWB" ||
                      t.stype == "MNWT" ||
                      t.stype == "MNWF")
                      ? ((this._currentQuery = this._currentQuery
                          .substring(0, this._currentQuery.lastIndexOf(" ") + 1)
                          .concat(this.clickedSuggestion.query)),
                        (this.clickedSuggestion.query = this._currentQuery),
                        (this.clickedMNWSuggestionType =
                          this.clickedSuggestion.stype),
                        (this.clickedMNWSuggestionPosition = this.config.mnwbtm
                          ? 90 +
                            this.clickedSuggestion.ord -
                            (this.currentSuggestionList.length -
                              this.mnwSuggestionsCount)
                          : 90 + this.clickedSuggestion.ord),
                        this.highlightSuggestion(this.clickedSuggestion),
                        this.raiseEvent(25, this.clickedSuggestion))
                      : (this.setSearchValue(this.clickedSuggestion),
                        sj_evt.fire("AS.Navigate", t, "mouseup"),
                        this.raiseEvent(4, t, !1, this.config.linkTarget)),
                    (this.clickedSuggestion = null)));
            }),
            (g.prototype.searchBoxHasFocus = function () {
              return typeof this._searchBox != "undefined" &&
                typeof this._searchBox.getRootNode == "function"
                ? this._searchBox.getRootNode().activeElement ===
                    this._searchBox
                : _d.activeElement == this._searchBox;
            }),
            (g.prototype.setSearchValue = function (n) {
              var t, i;
              this.raiseEvent(19, this.selectedSuggestion, n);
              this.selectedSuggestion = n;
              t = this._currentQuery;
              this.config.trimwsnr &&
                this._rawQuery &&
                this._rawQuery[this._rawQuery.length - 1] == " " &&
                (t = t + " ");
              i = "";
              i = n
                ? n.rg
                  ? this.autoSuggestInstance.currentQuery
                  : n.query
                : t;
              this.raiseEvent(12, i);
            }),
            (g.prototype.getCssHolder = function () {
              var n = _ge("ajaxStyles"),
                t,
                i;
              return (
                n ||
                  ((n = sj_ce("div")),
                  (n.id = "ajaxStyles"),
                  (t = _ge("srchfrm")),
                  (i =
                    t != null &&
                    typeof t.getRootNode != "undefined" &&
                    t.getRootNode()),
                  i && i != _d && t
                    ? t.appendChild(n)
                    : sj_b.insertBefore(n, sj_b.firstChild)),
                n
              );
            }),
            (g.prototype.insertScriptIntoDom = function (n) {
              var r = this,
                t = sj_ce("script"),
                i;
              t.type = n.type;
              i = n.getAttribute("src");
              i
                ? t.setAttribute("src", i)
                : (t.setAttribute("data-bing-script", "1"),
                  (t.text = n.innerHTML));
              n.parentNode.removeChild(n);
              this._asContainer.appendChild(t);
              sb_st(function () {
                r._asContainer.contains(t) && r._asContainer.removeChild(t);
              }, 1);
            }),
            (g.prototype.insertStyleIntoDom = function (n) {
              this._ie9orLower
                ? (sj_ic(n.innerHTML), n.parentNode.removeChild(n))
                : (n.setAttribute("data-rms", "1"),
                  this.autoSuggestInstance.config.bi &&
                    t.Utils.AddClassName(n, "bi_preserve"),
                  this.getCssHolder().appendChild(n));
            }),
            (g.prototype.createDivFromAjaxResponse = function (n) {
              if (!n) return undefined;
              var t = sj_ce("div");
              return (t.innerHTML = n), t;
            }),
            (g.prototype.setLowConfidenceWebSignal = function (n) {
              this.config.isLowConfidenceWeb = !1;
              var t = n === null || n === void 0 ? void 0 : n.childNodes[0];
              (t === null || t === void 0
                ? void 0
                : t.hasAttribute("data-lowconfweb")) &&
                (this.config.isLowConfidenceWeb = !0);
            }),
            (g.prototype.insertAjaxResponseDivIntoDom = function (n, t, i) {
              var r, e, h;
              if (t) {
                for (
                  var u = _d.createDocumentFragment(),
                    o = t.childNodes,
                    f = !1,
                    s = !1;
                  o.length;

                ) {
                  r = o[0];
                  switch (r.tagName) {
                    case "SCRIPT":
                      this.insertScriptIntoDom(r);
                      break;
                    case "STYLE":
                      this.insertStyleIntoDom(r);
                      break;
                    default:
                      i === null || i > 0
                        ? (r.id === "bawh" && (f = !0),
                          r.id === "bawuh" &&
                            ((s = !0),
                            this.handleDuplicatesForAADUserHistory(n, r)),
                          u.appendChild(r),
                          i != null && i--)
                        : t.removeChild(r);
                  }
                }
                if (
                  (s
                    ? (n.insertBefore(u, n.firstChild),
                      (this._hasSwitched = !0))
                    : this.config.webMsbQFRanking &&
                      f &&
                      this.config.isLowConfidenceWeb
                    ? ((e = n.firstElementChild),
                      e.id === "bawuh"
                        ? (n.insertBefore(u, e.nextSibling),
                          (this._hasSwitched = !0))
                        : (n.insertBefore(u, n.firstChild),
                          (this._hasSwitched = !0)))
                    : this.hasAsExpanded && _ge("as_foot") != null
                    ? ((h = _ge("as_foot")), n.insertBefore(u, h))
                    : n.appendChild(u),
                  this._suggestionsQueue.Web &&
                    this._suggestionsQueue.Web.rendered &&
                    this._suggestionsQueue.MSBC &&
                    !this._suggestionsQueue.MSBC.rendered)
                )
                  this.autoSuggestInstance.onHighConfidencePromoted(
                    f && this.config.isLowConfidenceWeb
                  );
              }
            }),
            (g.prototype.handleDuplicatesForAADUserHistory = function (n, t) {
              var f, r, i, u;
              if (n && t)
                for (
                  f = t.childNodes, r = n.childNodes, i = 0;
                  i < r.length;
                  i++
                )
                  for (u = 0; u < f.length; u++)
                    r[i].getAttribute("query") == f[u].getAttribute("query") &&
                      r[i].parentElement.removeChild(r[i]);
            }),
            (g.prototype.isSpyGlassPresent = function (n) {
              return n.firstChild && n.firstChild.className
                ? n.firstChild.className === "sa_sg_icon_area"
                : !1;
            }),
            g
          );
        })(t.EventRegisterer);
      t.Canvas = d;
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {})),
  (function (n) {
    var t;
    (function (n) {
      var i = "sa_nw",
        r = /(\s|^)sa_nw/g,
        u = "sa_msn_nw",
        f = /(\s|^)sa_msn_nw/g,
        t = 36,
        e = (function () {
          function e(t, i, r) {
            this.config = t;
            this._container = i;
            this._canvas = r;
            this._isRtl = n.Utils.GetComputedStyle(sj_b).direction == "rtl";
            this._isRtl && this._container.setAttribute("dir", "rtl");
            var u = document.querySelector(".sa_as");
            this._searchBoxElem = _ge(t.i);
            this._outerContainer = u ? u : sj_ce("div", "", "sa_as");
            this._outerContainer.setAttribute("data-priority", "2");
            this.hide();
            this._container.appendChild(this._outerContainer);
          }
          return (
            (e.prototype.getSuggestionsDrawer = function () {
              return this._outerContainer;
            }),
            (e.prototype.show = function () {
              this._outerContainer.style.display = "block";
            }),
            (e.prototype.hide = function () {
              this._outerContainer.style.display = "none";
            }),
            (e.prototype.setMargin = function (n, i) {
              var r = 0,
                u = 0;
              return (
                this.config.searchBoxSpyglass &&
                  ((r = this._isRtl ? t : t * -1),
                  (u = this._isRtl ? t * -1 : t)),
                this._isRtl ? [i + u, n + r] : [n + u, i + r]
              );
            }),
            (e.prototype.update = function () {
              var l,
                t,
                o,
                e = n.Utils.GetComputedStyle(this._container.parentNode),
                a,
                v,
                h;
              if (
                this.config.eNw &&
                this._canvas.resizeNextWord &&
                this._canvas.containsNextWord &&
                this._canvas.largestNextWordElement
              ) {
                this.setMargins(0, 0);
                a = n.Utils.GetComputedStyle(this._searchBoxElem);
                sj_evt.fire("AS.Layout.NextWord.Show");
                n.Utils.AddClassName(this._outerContainer, i);
                this.config.enforceMsnNWStyle &&
                  n.Utils.AddClassName(this._outerContainer, u);
                v = this._outerContainer.style.display;
                this.setCanvasVisibility("hidden", "block");
                var s = this._canvas.largestNextWordElement,
                  y = n.Utils.GetTextContent(s),
                  c = this.getFirstChild(s),
                  p = s.query.replace(y, ""),
                  w = c && c.innerHTML.indexOf("<strong>") > -1,
                  b = n.Utils.CalcWidth(s, (c && c.textContent) || y, null, w),
                  k = n.Utils.CalcWidth(s, p, a.fontSize),
                  d = _ge(this.config.f)
                    ? _ge(this.config.f).offsetWidth
                    : Number.MAX_VALUE,
                  g = _ge("sa_ul")
                    ? _ge("sa_ul").offsetWidth
                    : Number.MAX_VALUE;
                t = Math.min(k + 4, d - (g + 12));
                o =
                  this._outerContainer.offsetWidth -
                  t -
                  b -
                  this.getNwExtraSz(s) -
                  4;
                l = this.setMargin(t, o);
                t = l[0];
                o = l[1];
                this.setCanvasVisibility("", v);
                this.config.IsBingPrivate &&
                  ((h = _ge("as_foot")),
                  t != 0 || o != 0
                    ? h != null && (h.style.display = "none")
                    : h != null && (h.style.display = "list-item"));
              } else
                sj_evt.fire("AS.Layout.NextWord.Hide"),
                  n.Utils.RemoveClassName(this._outerContainer, r),
                  this.config.enforceMsnNWStyle &&
                    n.Utils.RemoveClassName(this._outerContainer, f),
                  this._isRtl
                    ? ((o =
                        (this.toFloat(e.paddingRight) +
                          this.toFloat(e.borderRightWidth)) *
                        -1),
                      (t =
                        this.toFloat(e.borderLeftWidth) -
                        this.toFloat(e.paddingLeft)))
                    : ((t =
                        (this.toFloat(e.paddingLeft) +
                          this.toFloat(e.borderLeftWidth)) *
                        -1),
                      (o =
                        this.toFloat(e.borderRightWidth) -
                        this.toFloat(e.paddingRight)));
              this.setMargins(t, o);
              this._searchBoxElem != null &&
                this._searchBoxElem.dir.length > 0 &&
                (this._outerContainer.dir = this._searchBoxElem.dir);
            }),
            (e.prototype.toFloat = function (n) {
              var t = parseFloat(n);
              return isNaN(t) ? 0 : t;
            }),
            (e.prototype.setCanvasVisibility = function (n, t) {
              this._outerContainer.style.visibility = n;
              this._outerContainer.style.display = t;
            }),
            (e.prototype.setMargins = function (n, t) {
              this._container.style.marginLeft = n + "px";
              this._container.style.marginRight = t + "px";
            }),
            (e.prototype.getFirstChild = function (n) {
              return (
                n && n.childNodes && n.childNodes.length > 0 && n.childNodes[0]
              );
            }),
            (e.prototype.getNwExtraSz = function (t) {
              var r = this.getFirstChild(t),
                i;
              return r
                ? ((i = n.Utils.GetComputedStyle(r)),
                  this.toFloat(i.marginLeft) * 2 +
                    this.toFloat(i.borderLeft) +
                    this.toFloat(i.borderRight))
                : 0;
            }),
            e
          );
        })();
      n.Layout = e;
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {}));
(__extends =
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
        i === null ? Object.create(i) : ((r.prototype = i.prototype), new r());
    };
  })()),
  (function (n) {
    var t;
    (function (n) {
      function e(n) {
        return typeof n == "number" ? n : '"' + n.replace(/"/g, '\\"') + '"';
      }
      var o = "SRCHHPGUSR",
        s = "AS",
        h = 4,
        i = "AS.CurrentImpressionQuerySelected",
        c = "bawh",
        r = sb_ie && sb_de.style.opacity === undefined,
        u = -1,
        t = !1,
        f,
        l = (function (l) {
          function a(i, r) {
            var f = l.call(this) || this,
              e,
              o,
              s;
            for (
              f.config = i,
                f.autosuggest = r,
                f._pollInterval = 0,
                f._pendingRequestCount = 0,
                f._bRequeryOnTextChange = !0,
                f._hiddenFields = [],
                f._lastQuery = "",
                f._lastRawQuery = "",
                f._trimRegex = new RegExp("^\\s*", "g"),
                f._removeSpacesRegex = new RegExp("\\s+", "g"),
                f._lastTextChanged = "",
                f._textChangeSequence = 0,
                f._isSearchBoxWebComponent = !1,
                f._asContainer = f.getContainer(),
                f.focusHistory = function (n) {
                  var t = _ge("as_foot"),
                    i;
                  if (t && t.style.display != "none") {
                    f.autosuggest.canvas.clearSelectedSuggestion();
                    f.autosuggest.canvas.searchTypeDivIndex = 0;
                    i = document.querySelector(".as_rmhswarning.out_fd_side a");
                    i.focus();
                    n.preventDefault();
                    return;
                  }
                  f.hideDropDownOnFocusChange();
                },
                f.onBlur = function () {
                  var n = !_ge("fbpgdg");
                  n &&
                    document.activeElement.id == "sd_fdb" &&
                    (f.autosuggest.canvas.clearSelectedSuggestion(),
                    f.hideDropDownOnFocusChange(),
                    _ge("sb_form_q").focus());
                },
                f.focusFeedback = function (n) {
                  var t = _ge("sb_fdb");
                  if (t && t.style.display != "none") {
                    f.autosuggest.canvas.clearSelectedSuggestion();
                    f.autosuggest.canvas.searchTypeDivIndex = 0;
                    t.focus();
                    t.onblur = f.onBlur;
                    n.preventDefault();
                    return;
                  }
                  f.hideDropDownOnFocusChange();
                },
                f.searchBoxTouchAction = function () {
                  f.config.handleClickOnly ||
                    (f.config.handleDuplicateFetch &&
                      f._lastClickQuery == f.getCurrentQuery(!0)) ||
                    (f.autosuggest.canvas.searchBoxHasFocus() ||
                      f.searchBox.focus(),
                    f.onSearchBoxClick(),
                    (f._lastClickQuery = f.getCurrentQuery(!0)));
                },
                f.addSearchBoxLeftSpyglass = function () {
                  var n = _ge("sb_leftsg"),
                    t;
                  n ||
                    ((n = sj_ce("div", "sb_leftsg")),
                    (n.style.display = "none"),
                    f.searchBox.parentNode.insertBefore(n, f.searchBox));
                  n.innerHTML === "" &&
                    ((t =
                      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25"><path stroke="#767676" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M23.75 23.75l-9-9"></path><circle stroke="#767676" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" cx="9" cy="9" r="7.75" fill="none"></circle><path fill="none" d="M25 25h-25v-25h25z"></path></svg>'),
                    (n.innerHTML = t));
                },
                f.addSearchBoxBackBtn = function () {
                  var n = _ge("sb_backbtn"),
                    t;
                  return (
                    n ||
                      ((n = sj_ce("div", "sb_backbtn")),
                      (n.style.display = "none"),
                      f.searchBox.parentNode.insertBefore(n, f.searchBox)),
                    n.innerHTML === "" &&
                      ((t =
                        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.73171 16.7951C9.03264 17.0797 9.50733 17.0665 9.79196 16.7656C10.0766 16.4646 10.0634 15.9899 9.76243 15.7053L4.52339 10.7502H17.2471C17.6613 10.7502 17.9971 10.4144 17.9971 10.0002C17.9971 9.58598 17.6613 9.25019 17.2471 9.25019H4.52112L9.76243 4.29294C10.0634 4.00831 10.0766 3.53362 9.79196 3.23269C9.50733 2.93175 9.03264 2.91853 8.73171 3.20316L2.31449 9.2726C2.14819 9.42989 2.04819 9.63 2.01448 9.83879C2.00308 9.89077 1.99707 9.94478 1.99707 10.0002C1.99707 10.0578 2.00356 10.1139 2.01585 10.1677C2.05084 10.3735 2.15039 10.5704 2.31449 10.7256L8.73171 16.7951Z" fill="#A19F9D"/></svg>'),
                      (n.innerHTML = t)),
                    n
                  );
                },
                f.searchBoxClickAction = function () {
                  (f._lastClickQuery == f.getCurrentQuery(!0) &&
                    f.autosuggest.canvas.searchBoxHasFocus()) ||
                    (f.searchBox.focus(),
                    f.config.handleDuplicateFetch &&
                      (f._lastClickQuery = f.getCurrentQuery(!0)),
                    f.onSearchBoxClick());
                  f.config.handleDuplicateFetch || (f._lastClickQuery = null);
                },
                f.onSubmit = function (n) {
                  var i, r, u, t;
                  if (
                    (f.cancelDefaultHandler(n),
                    f.config.ghostingWithGreyText &&
                      f._ghostingText &&
                      f.searchBox.selectionStart != f.searchBox.selectionEnd &&
                      ((i = f.searchBox.value.indexOf(f._ghostingText)),
                      i != -1 &&
                        ((r = f.searchBox.value.slice(0, i)),
                        (f.searchBox.value = r)),
                      (f._ghostingText = null)),
                    f.isEmptyQuery())
                  ) {
                    u = _w._H && _w._H.sbeb;
                    u &&
                      sb_st(function () {
                        return f.hideDropDown(2);
                      }, 5);
                    return;
                  }
                  if (
                    (sb_st(function () {
                      return f.hideDropDown(2);
                    }, 5),
                    (t = f.autosuggest.canvas.selectedSuggestion),
                    sj_evt.fire("AS.Navigate", t, "submit"),
                    t)
                  )
                    f.navigate(t, !0, f.config.linkTarget);
                  else {
                    f.submitForm(!0);
                    f.autosuggest.onBfbSearchBoxAction("SearchDone");
                  }
                },
                f.onSearchBoxKeyDown = function (n) {
                  var r = n.keyCode,
                    e = (r == 38 || r == 40) && u == 229 && !t,
                    s,
                    i;
                  switch (r) {
                    case 13:
                      if (f.config.submitOnEnterOnPhone) f.onSubmit(n);
                      break;
                    case 27:
                      f.isQueryGhosted() ||
                        (f.hideDropDown(1), f.cancelDefaultHandler(n));
                      break;
                    case 38:
                      f._isLayoutVisible &&
                        (f.config.waitForCompositionEnd && e
                          ? f.imeCheckForJapanese()
                          : f.autosuggest.canvas.selectItem(0),
                        f.cancelDefaultHandler(n));
                      break;
                    case 40:
                      f._isLayoutVisible
                        ? f.config.waitForCompositionEnd && e
                          ? f.imeCheckForJapanese()
                          : f.autosuggest.canvas.selectItem(1)
                        : f.config.fetchOnDownArrowKey &&
                          f.fetchForCurrentQuery();
                      break;
                    case 9:
                      f._ghostingText = null;
                      f._searchDivs = document.querySelectorAll("#sa_ul");
                      var h = f._searchDivs.length - 1,
                        o = f.autosuggest.canvas.searchTypeDivIndex,
                        c = _ge("as_foot");
                      if (!f.isQueryGhosted()) {
                        if (n.shiftKey) {
                          f._isLayoutVisible &&
                          o > 0 &&
                          f.config.enableAsPanelExpansion
                            ? (f.autosuggest.canvas.selectItem(3),
                              n.preventDefault())
                            : f.hideDropDownOnFocusChange();
                          break;
                        }
                        if (f.config.removeSuggUrl) {
                          if (
                            ((s = f.autosuggest.canvas.selectedSuggestion), !s)
                          ) {
                            f.hideDropDownOnFocusChange();
                            break;
                          }
                          if (
                            ((i = f.getSelectedSuggestionRemoveButton()), i)
                          ) {
                            i.tabIndex = 0;
                            i.focus();
                            i.onblur = f.onBlur;
                            n.preventDefault();
                            break;
                          }
                        }
                        f._isLayoutVisible &&
                        o < h &&
                        f.config.enableAsPanelExpansion
                          ? (f.autosuggest.canvas.selectItem(2),
                            n.preventDefault())
                          : f.config.CommonFooter == !0 &&
                            f._isLayoutVisible &&
                            c != null &&
                            document.activeElement.id == "sb_form_q"
                          ? f.focusHistory(n)
                          : f.focusFeedback(n);
                      }
                      break;
                    case 39:
                      f._ghostingText = null;
                  }
                  u = r;
                },
                f.onASKeyDown = function (n) {
                  var t = document.querySelector("#sb_fdb"),
                    i = document.querySelector("#as_foot"),
                    r = n.keyCode;
                  r == 9 &&
                    (n.shiftKey
                      ? f._isLayoutVisible &&
                        document.activeElement.id == "sb_fdb" &&
                        i
                        ? f.focusHistory(n)
                        : (f.hideDropDownOnFocusChange(),
                          _ge("sb_form_q").focus(),
                          n.preventDefault())
                      : document.activeElement.className ==
                          "as_rmhswarningtxt" && t
                      ? f.focusFeedback(n)
                      : (f.hideDropDownOnFocusChange(),
                        _ge("sb_form_q").focus(),
                        n.preventDefault()));
                },
                f.getSelectedSuggestionRemoveButton = function () {
                  var i = f.autosuggest.canvas.selectedSuggestion,
                    n,
                    t;
                  return i
                    ? ((n = i.firstElementChild), !n)
                      ? null
                      : n.classList && n.classList.contains("as_hr")
                      ? n
                      : ((t = n.lastElementChild),
                        t && t.classList && t.classList.contains("sa_rm"))
                      ? t.firstElementChild
                      : null
                    : null;
                },
                f.onSearchBoxClick = function () {
                  f._ghostingText = null;
                  f._isLayoutVisible ||
                    f.suppressRequestForQuery ||
                    f.fetchForCurrentQuery();
                  f.autosuggest.onBfbSearchBoxAction(n.searchBoxFocusEventId);
                },
                f.hideDropDownOnFocusChange = function (n) {
                  f.hideDropDown(1, n);
                },
                f.onTextInput = function () {
                  var n = f.searchBox.value;
                  f.triggerTextChangedEvent(n);
                },
                f.raiseEvent(5, i),
                e = 0,
                o = a.ScopeExtensions;
              e < o.length;
              e++
            )
              (s = o[e]), s.init(f);
            return (a.ScopeExtensions = []), f;
          }
          return (
            __extends(a, l),
            (a.prototype.init = function (i) {
              var o, f, e, u, s, h, r;
              ((this.config.globalId = i),
              (this.config.slid = "sa_ul"),
              (this._bDisabled = this.isDisabled())) ||
                (_w._H && _w._H.ajax
                  ? ((o = _ge("serpHeader")),
                    o &&
                      ((f = o.getElementsByTagName("form")),
                      f &&
                        f.length > 0 &&
                        ((this.searchForm = f[0]),
                        (e =
                          this.searchForm.getElementsByClassName(
                            "b_searchbox"
                          )),
                        e && e.length > 0 && (this.searchBox = e[0]))))
                  : ((this.searchForm = _ge(this.config.f)),
                    (this.searchBox = _ge(this.config.i))),
                this.searchBox &&
                  typeof this.searchBox.shadowRoot != "undefined" &&
                  (this._isSearchBoxWebComponent = !0),
                this.searchForm.form &&
                  (this.config.fc = this.searchForm.form.value),
                (this._currentImpressionQuery = this.searchBox.value),
                (u = this.getContainer()),
                sj_be(u, "mousedown", function (n) {
                  return sj_sp(n);
                }),
                (u.style.display = "block"),
                (this.layout = this._layout =
                  new n.Layout(this.config, u, this.autosuggest.canvas)),
                this.layout.update(),
                this.registerUIElement(u),
                this.registerUIElement(this.searchBox),
                (s = _ge("sb_form_go")),
                s && this.registerUIElement(s),
                (this._pollInterval = this.config.d),
                (this._pollThrottlingEnabled = this.config.t),
                (h = this._layout.getSuggestionsDrawer()),
                this.autosuggest.init(this.config, h, this.searchBox),
                (this._lastQuery = this.getQueryToFetch()),
                this.searchBox.setAttribute("aria-autocomplete", "both"),
                this.searchBox.setAttribute("aria-controls", "sw_as"),
                this.searchForm.setAttribute("aria-live", "polite"),
                this.searchForm.setAttribute("aria-expanded", "false"),
                (r = new n.EventRegistration(this)),
                r.add(8, this.handleResponseReceived),
                r.add(11, this.startNoMatchTimeout),
                r.add(10, this.showDropDown),
                r.add(12, this.onUpdateText),
                r.add(13, this.onUpdateTextAndRequery),
                r.add(14, this.onUpdateGhostedText),
                r.add(4, this.navigate),
                r.add(17, this.dispose),
                this.autosuggest.registerEvents(r),
                this.bindEvents(sj_be, sj_evt.bind),
                this.pollForQueryChange(),
                this.raiseEvent(6, this),
                this.config.waitForCompositionEnd &&
                  (this.searchBox.addEventListener(
                    "compositionend",
                    function () {
                      t = !0;
                    }
                  ),
                  this.searchBox.addEventListener(
                    "compositionstart",
                    function () {
                      t = !1;
                    }
                  )));
            }),
            (a.prototype.setData = function (n) {
              this.autosuggest.setData(n);
            }),
            (a.prototype.getCurrentImpressionQuery = function () {
              return this._currentImpressionQuery;
            }),
            (a.prototype.isDisabled = function () {
              return !this.config.pv && sj_cook.get(o, s) == "0";
            }),
            (a.prototype.registerUIElement = function (n) {
              sj_be(n, "touchend", sj_sp);
              sj_be(n, "click", sj_sp);
            }),
            (a.prototype.addHiddenField = function (n, t) {
              var i = sj_ce("input");
              return (
                (i.id = "sa_" + n),
                (i.name = n),
                (i.value = t),
                (i.type = "hidden"),
                this.searchForm.appendChild(i),
                this.config.sbt && this._hiddenFields.push(i),
                i
              );
            }),
            (a.prototype.cancelDefaultHandler = function (n) {
              sj_sp(n);
              sj_pd(n);
            }),
            (a.prototype.show = function () {
              this.config.handleDuplicateFetch &&
                this._lastClickQuery != this.getCurrentQuery(!0) &&
                (this._lastClickQuery = this.getCurrentQuery(!0));
              this.onSearchBoxClick();
            }),
            (a.prototype.getCursorPosition = function () {
              return n.Utils.getCursorPosition(this.searchBox, !0);
            }),
            (a.prototype.makeAutoSuggestGPingCall = function (n) {
              var i = _ge(n.replace("&", "")),
                f;
              if (i && document.images) {
                var u = i.getAttribute("h"),
                  r = void 0,
                  t = {
                    a: [],
                    add: function (n, t) {
                      this.a.push(e(n) + ":" + e(t));
                    },
                    get: function () {
                      return this.a.length
                        ? "&PR={" + this.a.join(",") + "}"
                        : "";
                    },
                  };
                t.add(
                  "i",
                  this.autosuggest.canvas.clickedSuggestion ? i.it || "m" : "k"
                );
                this.autosuggest.ghostInstValue &&
                  t.add("ghc", this.autosuggest.ghostInstValue);
                i.panel && t.add("et", sb_gt() - i.panel.ot);
                this.autosuggest.ghostingShown &&
                  t.add("ghsh", this.autosuggest.ghostingShown.toString());
                this.autosuggest.ghostingAccepted &&
                  t.add("ghacc", this.autosuggest.ghostingAccepted.toString());
                this.autosuggest.ghostingPrefixLength &&
                  t.add(
                    "ghpl",
                    this.autosuggest.ghostingPrefixLength.toString()
                  );
                r =
                  this.autosuggest.data && this.autosuggest.data.Inst
                    ? this.autosuggest.data.Inst.IG
                    : null;
                r &&
                  u &&
                  ((f = new Image()),
                  (f.src = this.getGPingUrl() + "IG=" + r + "&" + u + t.get()));
              }
              return !0;
            }),
            (a.prototype.getGPingUrl = function () {
              return _w &&
                _w.location &&
                _w.location.host &&
                _w.location.host.indexOf("bing.com") > -1 &&
                _G.gpUrl
                ? _G.gpUrl
                : "https://www.bing.com" + _G.gpUrl;
            }),
            (a.prototype.navigate = function (n, t, i) {
              var u = this,
                r;
              sb_st(function () {
                return u.hideDropDown(2);
              }, 5);
              this.makeAutoSuggestGPingCall(n.id);
              r = n.query;
              n.rg
                ? this.updateSearchBoxValue(this.getLastRequestedQuery())
                : r != undefined && this.updateSearchBoxValue(r);
              this.config.logClickOnSuggestion &&
                (t
                  ? typeof Log != "undefined" &&
                    Log &&
                    Log.Log &&
                    Log.Log("Autosuggest", "Suggestion", "EnterClick", !1)
                  : typeof Log != "undefined" &&
                    Log &&
                    Log.Log &&
                    Log.Log("Autosuggest", "Suggestion", "MouseClick", !1));
              this.config.enbleClientPerfTelemetry &&
                typeof this.autosuggest.networkLatencyInfo != undefined &&
                this.autosuggest.networkLatencyInfo &&
                this.logAutoSuggestNetworkLatency();
              this.config.sbt && n.addInst && !n.nav
                ? this.submitForm(t, n.url)
                : this.navigateToUrl(n, t, i);
            }),
            (a.prototype.submitForm = function (n, t) {
              var e, c, r, u, s, h, f;
              if (this.config.sbt) {
                for (e = void 0; (e = this._hiddenFields.shift()); )
                  this.searchForm.removeChild(e);
                this._hiddenFields = [];
              }
              if (
                n &&
                (this.raiseEvent(15),
                this.config.bi &&
                  this._currentImpressionQuery === this.searchBox.value)
              ) {
                sj_evt.fire(i);
                return;
              }
              this._instrumentationData =
                this.autosuggest.getAllSuggestionInstObject(null, n);
              c = this.getCustomUrlParams(t);
              r = _ge("sa_ghc");
              r && r.parentNode.removeChild(r);
              for (
                var l = 0, o = void 0, a = [this._instrumentationData, c];
                (o = a[l++]);

              )
                for (u in o)
                  (r = _ge("sa_" + u)),
                    (s = o[u]),
                    r ? (r.value = s) : this.addHiddenField(u, s);
              this.autosuggest.ghostInstValue = 0;
              n || sj_evt.fire("onSearch", this.searchForm);
              this.makeSearchboxGPingCall();
              this.fireEvt
                ? ((h = this.searchForm.getAttribute("action")),
                  t && this.searchForm.setAttribute("action", t),
                  this.searchForm.submit(),
                  this.firePartnerEvents(n),
                  h && this.searchForm.setAttribute("action", h))
                : (_w._H && _w._H.ajax && _w.sj_isAjax && n) ||
                  this.searchForm.submit();
              this.fireEvt &&
                ((this.autosuggest.canvas.selectedSuggestion = null),
                (this.autosuggest.ghostInstValue = 0),
                (f = _ge("sa_ghc")),
                !this._instrumentationData.ghc &&
                  f &&
                  f.parentNode.removeChild(f));
              this.config.enbleClientPerfTelemetry &&
                typeof this.autosuggest.networkLatencyInfo != undefined &&
                this.autosuggest.networkLatencyInfo &&
                this.logAutoSuggestNetworkLatency();
            }),
            (a.prototype.makeSearchboxGPingCall = function () {
              var t = this.searchForm.getAttributeNode("onsubmit"),
                n;
              t &&
                _w.si_T &&
                ((n = t.value.match(/si_T\('(.*)'\)/)),
                n && n[1] && _w.si_T(n[1]));
            }),
            (a.prototype.isMsbSuggestion = function (n) {
              return (
                n == "Bookmark" ||
                n == "Building" ||
                n == "Person" ||
                n == "Qna" ||
                n == "Acronym" ||
                n == "External" ||
                n == "File" ||
                n == "EducationAssignment" ||
                n == "Group" ||
                n == "UserHistory" ||
                n == "External"
              );
            }),
            (a.prototype.navigateToUrl = function (t, r, u) {
              var e,
                o,
                s =
                  ((e = t.parentElement) === null || e === void 0
                    ? void 0
                    : e.id) == c && this.config.isLowConfidenceWeb,
                h =
                  ((o = t.parentElement) === null || o === void 0
                    ? void 0
                    : o.getAttribute("data-region")) == "BAWC",
                f;
              if (t.stype == n.BingAtWorkDataTypes.Bookmarks)
                this.autosuggest.onBfbNavigateCallback(
                  t.id,
                  t.stype,
                  s,
                  t.query,
                  t.getAttribute("logicalId")
                );
              else if (t.stype == n.BingAtWorkDataTypes.People)
                if (this.config.msbSusR)
                  this.autosuggest.onSubstrateNavigateCallback(t.id);
                else
                  this.autosuggest.onBfbNavigateCallback(
                    t.id,
                    t.stype,
                    s,
                    t.query,
                    t.getAttribute("logicalId")
                  );
              else if (this.isMsbSuggestion(t.stype))
                this.autosuggest.onBfbNavigateCallback(
                  t.id,
                  t.stype,
                  s,
                  t.query,
                  t.getAttribute("logicalId")
                );
              if (h && t.getAttribute("menu") === "webSerpMenu")
                this.autosuggest.onBfbSearchBoxAction("Search_Web_Qf_Click");
              if (this.searchForm.onsubmit) this.searchForm.onsubmit(null);
              if (
                (this.firePartnerEvents(r),
                this.config.bi && this._currentImpressionQuery === t.query)
              ) {
                sj_evt.fire(i);
                return;
              }
              f =
                t.url +
                (t.addInst ? this.autosuggest.getAllSuggestionInstUrl() : "");
              f = this.addExtraQueryStrings(f);
              t.nav &&
                !n.Utils.GetQueryStringParam(f, "form") &&
                (f = this.addFormCode(f));
              u
                ? _w.open(f, u)
                : typeof sj_lc != "undefined"
                ? sj_lc(f)
                : (_w.location.href = f);
            }),
            (a.prototype.firePartnerEvents = function (n) {
              !n &&
                this.fireEvt &&
                this.fireEvt(this.searchForm, "ASSugClicked");
            }),
            (a.prototype.getCustomUrlParams = function (n) {
              var r = {},
                t;
              if (n)
                for (
                  var i = void 0,
                    f = /\+/g,
                    e = /([^&=]+)=?([^&]*)/g,
                    u = function (n) {
                      return decodeURIComponent(n.replace(f, " "));
                    },
                    o = n.substring(n.indexOf("?") + 1);
                  (i = e.exec(o));

                )
                  (t = u(i[1]).toLowerCase()),
                    t !== "q" && t !== "form" && (r[t] = u(i[2]));
              return r;
            }),
            (a.prototype.bindEvents = function (n, t) {
              var i = this,
                u,
                r;
              n(sj_b, "click", this.hideDropDownOnFocusChange);
              n(sj_b, "touchend", this.hideDropDownOnFocusChange);
              n(this.searchForm, "submit", this.onSubmit);
              n(this.searchBox, "keydown", this.onSearchBoxKeyDown);
              this.config.CommonFooter &&
                n(this._asContainer, "keydown", this.onASKeyDown);
              this.config.enableSbLeftSpyglass &&
                this.addSearchBoxLeftSpyglass();
              this.config.enableSbLeftBackBtn &&
                ((u = this.addSearchBoxBackBtn()),
                n(u, "click", this.hideDropDownOnFocusChange));
              "ontouchend" in _w &&
                n(this.searchBox, "touchend", this.searchBoxTouchAction);
              n(this.searchBox, "click", this.searchBoxClickAction);
              this.config.expandOnFocus &&
                n(this.searchBox, "focus", this.searchBoxClickAction);
              this.fireEvt && n(_w, "blur", this.hideDropDownOnFocusChange);
              r = function () {
                t("focusChange", function (n) {
                  return i.focusChange(n);
                });
                t("hideDrawer", function () {
                  return i.hideDropDown(3);
                });
              };
              r();
              this.config.bi &&
                t("ajax.load", function (n) {
                  var t = n && n[1];
                  t &&
                    t.isInstantRequest &&
                    ((i._currentImpressionQuery = t.query || i.searchBox.value),
                    i.pollForQueryChange(),
                    r());
                });
              "oninput" in this.searchBox &&
                n(this.searchBox, "input", this.onTextInput);
            }),
            (a.prototype.fetchForCurrentQuery = function () {
              (this._noResultsTimeout && sb_ct(this._noResultsTimeout),
              this._bDisabled) ||
                ((this._lastQuery = null),
                this.fetchSuggestions(
                  this.getQueryToFetch(),
                  this.getCurrentQuery(!0)
                ));
            }),
            (a.prototype.showDropDown = function () {
              if ((this._layout.update(), this.fireEvt)) {
                var n = this.autosuggest.canvas.containsNextWord ? "1" : "0";
                this.searchForm.setAttribute("SuggMode", n);
                this.fireEvt(this.searchForm, "autosuggestRendered");
              }
              this._isLayoutVisible ||
                (sj_evt.fire("focusChange", this.searchBox),
                this._layout.show(),
                (this._isLayoutVisible = !0),
                sb_i6 && sj_evt.fire("autosuggestShown", this.searchBox),
                sj_evt.fire("onPopTR"),
                this.fireEvt &&
                  this.fireEvt(this.searchForm, "autosuggestShown"),
                this.searchForm.setAttribute("aria-expanded", "true"),
                this.searchForm.setAttribute("aria-owns", "sw_as"));
            }),
            (a.prototype.hideDropDown = function (n, t) {
              var i;
              n != 0 && (this._lastClickQuery = null);
              this._isLayoutVisible &&
                (this.searchForm.setAttribute("aria-expanded", "false"),
                this._layout.hide(),
                (this._isLayoutVisible = !1),
                this.searchForm.removeAttribute("aria-owns"),
                n != 0 && (this._lastQuery = this.getQueryToFetch()),
                this.raiseEvent(16),
                this.autosuggest.finalizeKeystroke(),
                ((t && this.config.hdm) ||
                  (t &&
                    this.config.enableSbLeftBackBtn &&
                    (t.target == _ge("sb_backbtn") ||
                      ((i = t.target) === null || i === void 0
                        ? void 0
                        : i.parentNode) == _ge("sb_backbtn")))) &&
                  sj_pd(t),
                _w._H && sj_evt.fire("ASHide"),
                this.autosuggest.setQuery(undefined));
              sj_evt.fire("autosuggestHide", this.searchBox, n);
              this.fireEvt &&
                (this.searchForm.removeAttribute("SuggMode"),
                this.fireEvt(this.searchForm, "autosuggestHide"));
            }),
            (a.prototype.focusChange = function (n) {
              n[1] !== this.searchBox && this.hideDropDown(1);
            }),
            (a.prototype.startNoMatchTimeout = function () {
              var n = this;
              this._noResultsTimeout = sb_st(function () {
                return n.hideDropDown(0);
              }, 50);
            }),
            (a.prototype.onUpdateText = function (n) {
              this.getCurrentQuery() != n && (this._bRequeryOnTextChange = !1);
              this.updateSearchBoxValue(n);
            }),
            (a.prototype.updateSearchBoxValue = function (t, i) {
              var u = i ? t + i : t,
                f;
              this._autoCompletedPrefixLength = i ? t.length : null;
              this.config.ghostingWithGreyText && i && (this._ghostingText = i);
              u !== null &&
                ((this.searchBox.value = u),
                r ||
                  (this.searchBox.setAttribute("value", u),
                  sj_evt.fire("AS.Input.Update", { target: this.searchBox })),
                (f = u.length),
                f &&
                  this.getCurrentQuery() != t &&
                  n.Utils.SetSelectionRange(this.searchBox, f, f),
                t &&
                  t != this._lastTextChanged &&
                  this.triggerTextChangedEvent(t));
            }),
            (a.prototype.onUpdateTextAndRequery = function (t, i) {
              if (
                ((this._bRequeryOnTextChange = !0),
                this.updateSearchBoxValue(t),
                !i)
              ) {
                var r = t.length;
                this.searchBox.focus();
                n.Utils.SetSelectionRange(this.searchBox, r, r);
              }
            }),
            (a.prototype.onUpdateGhostedText = function (n, t, i) {
              this._bRequeryOnTextChange = i === undefined ? !0 : i;
              this.updateSearchBoxValue(n, t);
            }),
            (a.prototype.triggerTextChangedEvent = function (n) {
              this._lastTextChanged = n;
              this.autosuggest.raiseTextChanged(n, ++this._textChangeSequence);
            }),
            (a.prototype.pollForQueryChange = function () {
              var u = this,
                n,
                t,
                i;
              this._bDisabled ||
                ((n = this.getCurrentQuery(!0)),
                this._lastRawQuery != n &&
                  (this.autosuggest.setRawQuery(n),
                  (this._lastRawQuery = n),
                  this.config.bi && sj_evt.fire("AS.RawQueryChanged"),
                  (t = this.getQueryToFetch()),
                  (this._lastQuery == t && this._bRequeryOnTextChange) ||
                    r ||
                    (this.config.enableSbUpdate &&
                      this.searchBox.setAttribute("value", t),
                    this._isSearchBoxWebComponent &&
                      this.config.enableSbUpdate &&
                      (this.searchBox.value = n)),
                  t != this._lastQuery &&
                    (this._bRequeryOnTextChange && !this.suppressRequestForQuery
                      ? this.fetchSuggestions(t, n)
                      : this.suppressRequestForQuery &&
                        this.config.eNw &&
                        this.autosuggest.canvas.resizeNextWord &&
                        this._bRequeryOnTextChange
                      ? this.hideDropDown(4)
                      : this._bRequeryOnTextChange ||
                        (this._bRequeryOnTextChange = !0),
                    (this._lastQuery = t))),
                (i = this._pollInterval),
                this._pollThrottlingEnabled &&
                  (i *=
                    1 << (Math.max(0, this._pendingRequestCount - h + 1) / 2)),
                sb_st(function () {
                  return u.pollForQueryChange();
                }, i));
            }),
            (a.prototype.fetchSuggestions = function (n, t) {
              this._noResultsTimeout && sb_ct(this._noResultsTimeout);
              this.autosuggest.setCursorPosition(
                this.adjustCursorPositionForModifiedQuery(t, n)
              );
              this.autosuggest.setQuery(n);
              n.length != 0 ||
                this.config.fetchOnEmpty ||
                this.config.enableZeroQfWork ||
                this.hideDropDown(0);
              this._pendingRequestCount++;
            }),
            (a.prototype.adjustCursorPositionForModifiedQuery = function (
              n,
              t
            ) {
              var r = this.getCursorPosition(),
                i;
              if (t !== n && t != "")
                for (i = 0; i < n.length && n[i] != t[0]; i++) r--;
              return r;
            }),
            (a.prototype.handleResponseReceived = function () {
              this._pendingRequestCount--;
            }),
            (a.prototype.getQueryToFetch = function () {
              var t = this.getCurrentQuery();
              return (
                this.config.trimwsnr &&
                  (t = n.Utils.TrimmedQueryFromSuggestions(
                    this.autosuggest.canvas.currentSuggestionList,
                    t
                  )),
                t
              );
            }),
            (a.prototype.isQueryGhosted = function () {
              return !!this._autoCompletedPrefixLength;
            }),
            (a.prototype.getCurrentQuery = function (n) {
              var t = this._autoCompletedPrefixLength
                ? this.searchBox.value.substr(
                    0,
                    this._autoCompletedPrefixLength
                  )
                : this.searchBox.value;
              return n
                ? t
                : t
                    .replace(this._trimRegex, "")
                    .replace(this._removeSpacesRegex, " ")
                    .toLowerCase();
            }),
            (a.prototype.getPartnerCode = function (n) {
              var u = "",
                i = n.indexOf("pc"),
                f,
                t,
                e,
                r;
              return (
                i >= 0 &&
                  ((f = n.indexOf("&", i)),
                  (r = f >= 0 ? n.substr(i, f - i) : n.substr(i)),
                  (u += "&" + r)),
                (t = n.indexOf("pt")),
                t >= 0 &&
                  ((e = n.indexOf("&", t)),
                  (r = e >= 0 ? n.substr(t, e - t) : n.substr(t)),
                  (u += "&" + r)),
                u
              );
            }),
            (a.prototype.checkMonitr = function (n) {
              var t = n.indexOf("form=monitr");
              return t >= 0 ? "&" + n.substr(t, 11) : "";
            }),
            (a.prototype.getPubcode = function (n) {
              if (
                n.indexOf("pubcode=null") !== -1 &&
                n.indexOf("pt=opentetris") !== -1
              )
                return "&pubcode=null";
              var t = n.indexOf("pubcode");
              return "&pubcode=" + n.substr(t + 8, 32);
            }),
            (a.prototype.addExtraQueryStrings = function (n) {
              return this.config.pv
                ? n +
                    this.getPubcode(document.URL) +
                    "&pubexp=1&msbqf=false" +
                    this.getPartnerCode(document.URL) +
                    this.checkMonitr(document.URL)
                : n;
            }),
            (a.prototype.addFormCode = function (n) {
              return n + "&form=" + this.searchForm.form.defaultValue;
            }),
            (a.prototype.getLastRequestedQuery = function () {
              return this._lastQuery;
            }),
            (a.prototype.notifyDeleteHistory = function (n) {
              this.raiseEvent(22, n);
            }),
            (a.prototype.dispose = function () {
              this.clearEvents();
              this.bindEvents(sj_ue, sj_evt.unbind);
              sb_ct(this._noResultsTimeout);
            }),
            (a.prototype.isEmptyQuery = function () {
              var n = _ge("sb_form_q");
              return n && !n.value;
            }),
            (a.prototype.getContainer = function () {
              return _ge(this.config.c || "sw_as");
            }),
            (a.prototype.imeCheckForJapanese = function () {
              if (
                (this.searchBox.blur(),
                this.searchBox.focus(),
                document.createEvent)
              ) {
                var n = new Event("blurfocusIme");
                this.searchBox.dispatchEvent(n);
              }
              f = this.searchBox.value;
              setTimeout(function () {
                document.querySelector("#sb_form_q").value = f;
              }, 50);
            }),
            (a.prototype.logAutoSuggestNetworkLatency = function () {
              _w.Log &&
                Log.Log &&
                Log.Log(
                  "Autosuggest",
                  "NetworkLatency",
                  "PerfInst",
                  !1,
                  "Meta",
                  this.autosuggest.networkLatencyInfo
                );
            }),
            (a.ScopeExtensions = []),
            a
          );
        })(n.EventRegisterer);
      n.SearchForm = l;
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {}));
var GhostingType = {
    GhostFirstSuggNW: "GhostFirstSuggNW",
    GhostFirstFSugg: "GhostFirstFSugg",
    NwBasedGhosting: "NwBasedGhosting",
    GhostHistory: "GhostHistory",
  },
  TabPromptType = { TabInline: "TabInline", TabSuperScript: "TabSuperScript" },
  STypes = { Entity: "MB", AADHistory: "UserHistory", ASHistory: "HS" },
  MSBDataRegion = "BAWC",
  Bing;
(function (n) {
  var t;
  (function (n) {
    var t = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
      i = (function () {
        function i() {
          this._imeInProgress = !1;
          this._rerankqfEnabled = !1;
          this._ghostMsb = !1;
          this.boldGhosting = !1;
        }
        return (
          (i.prototype.init = function (t) {
            if (t.config.eHC) {
              var i = new n.EventRegistration(this);
              i.add(6, this.onSearchFormInitialized);
              t.registerEvents(i);
            }
            this._instantEnabled = !!t.config.bi;
            this._rerankqfEnabled = t.config.webMsbQFRanking;
          }),
          (i.prototype.onSearchFormInitialized = function (i) {
            var r = this,
              u,
              e;
            this.searchFormInstance = i;
            u = i.autosuggest;
            u.ghostInstValue = 0;
            this.ghostingType = i.config.ghostingWithGreyText;
            this.boldGhosting = i.config.ghostWithBoldText;
            var c = function () {
                return (u.ghostInstValue = 2);
              },
              l = function () {
                u.ghostInstValue == 0 && (u.ghostInstValue = 1);
              },
              f = i.searchBox,
              s = function (t, i) {
                n.Utils.SetSelectionRange(f, t, i);
                r.ghostingType &&
                  !r.boldGhosting &&
                  t !== i &&
                  (n.Utils.AddClassName(f, "sb_form_ghosting"),
                  r.previousQuery != u.currentQuery &&
                    (u.ghostingShown = u.ghostingShown
                      ? u.ghostingShown + 1
                      : 1),
                  (r.previousQuery = u.currentQuery),
                  (f.spellcheck = !1));
              };
            this.isCursorPositionAtTheEnd = function () {
              return i.getCursorPosition() == r.getPartialQuery().length;
            };
            this.getSearchBoxValue = function () {
              return f.value;
            };
            this.getPartialQuery = function () {
              return i.getCurrentQuery(!0);
            };
            this.getGhostedQuery = function () {
              return i.isQueryGhosted() ? r.getSearchBoxValue() : null;
            };
            this.getCurrentImpressionQuery = i.getCurrentImpressionQuery;
            this.resetGhosting = function (t, i, e) {
              var o, h, l;
              u.raiseUpdateGhostedText(null, null, t);
              r.ghostingType &&
                !r.boldGhosting &&
                (n.Utils.RemoveClassName(f, /(\s|^)sb_form_ghosting/g),
                r.setTabPosition(!1),
                (f.spellcheck = !0));
              i && ((l = r.getSearchBoxValue().length), s(l, l));
              e &&
                ((u.ghostingAccepted = u.ghostingAccepted
                  ? u.ghostingAccepted + 1
                  : 1),
                (u.ghostingPrefixLength = r.previousQuery
                  ? u.ghostingPrefixLength == ""
                    ? "".concat(
                        (o = r.previousQuery) === null || o === void 0
                          ? void 0
                          : o.length
                      )
                    : ""
                        .concat(u.ghostingPrefixLength, "-")
                        .concat(
                          (h = r.previousQuery) === null || h === void 0
                            ? void 0
                            : h.length
                        )
                  : ""),
                c());
            };
            this.removeGhosting = function (t) {
              r.ghostingType &&
                !r.boldGhosting &&
                (n.Utils.RemoveClassName(f, /(\s|^)sb_form_ghosting/g),
                (f.spellcheck = !0),
                r.setTabPosition(!1));
              t
                ? u.raiseUpdateTextAndRequery(r.getPartialQuery())
                : u.raiseUpdateText(r.getPartialQuery());
            };
            this.setGhostValue = function (n, t) {
              t
                ? (u.raiseUpdateGhostedText(n, t),
                  s(n.length, (n + t).length),
                  l(),
                  r.ghostingType && n !== t && r.setTabPosition(!0))
                : (u.raiseUpdateTextAndRequery(n),
                  r.ghostingType && r.setTabPosition(!1));
            };
            var a = function (n) {
                return r.handleSearchBoxKeyPress(n);
              },
              v = function (n) {
                return r.handleSearchBoxKeyDown(n);
              },
              y = function () {
                return r.handleSearchBoxMouseDown();
              },
              p = function () {
                return r.removeGhosting(!1);
              },
              w = function () {
                return r.handleCompositionStart();
              },
              b = function () {
                return function () {
                  return r.handleCompositionEnd();
                };
              },
              k = function (n) {
                return r.handleSearchBoxKeyUp(n);
              },
              h = function (n, i) {
                n(f, "keypress", a);
                n(f, "keydown", v);
                n(f, "mousedown", y);
                i("onFeedbackStarting", p);
                t
                  ? (n(f, "compositionstart", w), n(f, "compositionend", b))
                  : n(f, "keyup", k);
              },
              o = new n.EventRegistration(this);
            o.add(10, this.handleSuggestionsRendered);
            o.add(17, function () {
              return h(sj_ue, sj_evt.unbind);
            });
            u.registerEvents(o);
            e = new n.EventRegistration(this);
            e.add(15, function () {
              r.getGhostedQuery() && r.resetGhosting(!1, !0, !0);
            });
            e.add(16, this.onDropDownHidden);
            i.registerEvents(e);
            h(sj_be, sj_evt.bind);
          }),
          (i.prototype.onDropDownHidden = function () {
            var n = this.getGhostedQuery();
            n &&
              (this._instantEnabled
                ? this.getCurrentImpressionQuery() === n &&
                  this.resetGhosting(!1, !0, !0)
                : this.removeGhosting(!1));
          }),
          (i.prototype.handleCompositionStart = function () {
            this._imeInProgress = !0;
          }),
          (i.prototype.handleCompositionEnd = function () {
            this._imeInProgress &&
              ((this._imeInProgress = !1),
              this.resetGhosting(!0, !1, !1),
              this._pendingGhostFirstSuggestion &&
                sb_st(this._pendingGhostFirstSuggestion, 0));
          }),
          (i.prototype.ghostFirstSuggestion = function (n, t, i) {
            var r, f, e, s, u, o;
            if (
              ((this._pendingGhostFirstSuggestion = null),
              n && t == n.toLowerCase()) &&
              this._lastKeyDown != 46 &&
              this._lastKeyDown != 8 &&
              this.isCursorPositionAtTheEnd()
            ) {
              if (this.ghostingType == GhostingType.GhostFirstFSugg)
                r = i[0].query;
              else if (
                this.ghostingType == GhostingType.GhostHistory &&
                this.suggestionIsHistory(i[0])
              )
                r = i[0].query;
              else
                for (e = 0, s = i; e < s.length; e++)
                  if (
                    ((u = s[e]),
                    f === undefined && (f = u.query),
                    this.ghostingType == GhostingType.NwBasedGhosting &&
                      u.ghtxt)
                  ) {
                    r = u.ghtxt;
                    break;
                  } else if (this._rerankqfEnabled && this._ghostMsb) {
                    r = this.suggestionIsHistory(u) ? "" : u.query;
                    break;
                  } else if (u.hc && u.type !== "ADS") {
                    r = u.query;
                    break;
                  }
              r && r.indexOf(t) == 0 && r.length > n.length
                ? ((o = r.slice(n.length)), this.setGhostValue(n, o))
                : this.ghostingType == GhostingType.GhostFirstSuggNW &&
                  f !== undefined &&
                  f.indexOf(t) == 0 &&
                  f.length > n.length &&
                  ((o = f.slice(n.length).split(" ")[0]),
                  this.setGhostValue(n, o));
            }
          }),
          (i.prototype.handleSuggestionsRendered = function (t, i, r, u, f) {
            var a = this,
              o,
              s,
              e =
                (s =
                  (o = u === null || u === void 0 ? void 0 : u.children) ===
                    null || o === void 0
                    ? void 0
                    : o.namedItem("sa_ul")) === null || s === void 0
                  ? void 0
                  : s.children,
              h,
              c,
              l;
            (e === null || e === void 0 ? void 0 : e.length) > 0 &&
              (h = this.searchFormInstance.config.ghostingThreshold
                ? e[0].id === "bawh" || e[0].id === "bawuh"
                  ? e[0]
                  : null
                : e[0].id === "bawh"
                ? e[0]
                : null);
            this._ghostMsb = !1;
            this._rerankqfEnabled &&
              f == n.DataSources.MicrosoftSearchInBingCached &&
              h &&
              (this.getGhostedQuery() && this.removeGhosting(!0),
              h.childNodes.length >= 1 &&
                ((this._ghostMsb = !0),
                (c = this.getPartialQuery()),
                this._imeInProgress
                  ? (this._pendingGhostFirstSuggestion = function () {
                      return a.ghostFirstSuggestion(c, t, i);
                    })
                  : this.ghostFirstSuggestion(c, t, i)));
            f == n.DataSources.Web &&
              ((l = this.getPartialQuery()),
              this._imeInProgress
                ? (this._pendingGhostFirstSuggestion = function () {
                    return a.ghostFirstSuggestion(l, t, i);
                  })
                : this.ghostFirstSuggestion(l, t, i));
          }),
          (i.prototype.handleSearchBoxKeyDown = function (i) {
            var f = this,
              r = (this._lastKeyDown = i.keyCode),
              u,
              e;
            if (i.ctrlKey && r == 90) {
              sj_pd(i);
              return;
            }
            if (
              (t ||
                this._imeInProgress ||
                r != 229 ||
                this.handleCompositionStart(),
              this._imeInProgress ||
                !this.getGhostedQuery() ||
                r == 38 ||
                r == 40)
            ) {
              this.ghostingType &&
                !this.boldGhosting &&
                ((u = document.querySelector("#sb_form_q")),
                n.Utils.RemoveClassName(u, /(\s|^)sb_form_ghosting/g));
              return;
            }
            r == 13
              ? this.ghostingType && !this.boldGhosting
                ? this.resetGhosting(!1, !1, !1)
                : this.resetGhosting(!1, !0, !0)
              : r == 37 || r == 33 || (i.shiftKey && r == 39)
              ? this.resetGhosting(!1, !1, !0)
              : r == 35 || r == 34 || r == 39
              ? this.resetGhosting(!0, !1, !0)
              : i.ctrlKey && r == 65
              ? (this.ghostingType &&
                  !this.boldGhosting &&
                  ((u = document.querySelector("#sb_form_q")),
                  n.Utils.RemoveClassName(u, /(\s|^)sb_form_ghosting/g)),
                this.resetGhosting(!0, !1, !0))
              : r == 9
              ? (this.resetGhosting(!0, !0, !0), sj_pd(i))
              : r == 27 || (i.ctrlKey && r == 8)
              ? (this.removeGhosting(!0), sj_pd(i))
              : r == 46 || r == 8 || (i.ctrlKey && r == 88)
              ? this.resetGhosting(!0, !1, !1)
              : (i.ctrlKey && r == 86) || (i.shiftKey && r == 45)
              ? this.removeGhosting(!0)
              : ((e = this.getSearchBoxValue().toLowerCase()),
                sb_st(function () {
                  e != f.getSearchBoxValue().toLowerCase() &&
                    f.resetGhosting(!0, !1, !1);
                }, 0));
          }),
          (i.prototype.handleSearchBoxKeyUp = function (n) {
            this.setTabPosition(!1);
            var t = n.keyCode;
            this._imeInProgress &&
              (t == 13 || t == 27 || t == 8 || t == 37 || t == 39) &&
              this.handleCompositionEnd();
          }),
          (i.prototype.handleSearchBoxKeyPress = function (n) {
            var t;
            if ((this.setTabPosition(!1), (t = this.getGhostedQuery()), t)) {
              var i = n.char
                  ? n.char
                  : String.fromCharCode(n.charCode ? n.charCode : n.keyCode),
                r = this.getPartialQuery(),
                u = t.slice(r.length);
              u.charAt(0) == i.toLowerCase() &&
                (this.setGhostValue(r + i, u.slice(1)), sj_pd(n));
            }
          }),
          (i.prototype.handleSearchBoxMouseDown = function () {
            this.getGhostedQuery() && this.resetGhosting(!1, !1, !0);
          }),
          (i.prototype.setTabPosition = function (n) {
            var t, r, i;
            this.searchFormInstance.config.enableTabPrompt &&
              ((t = this.searchFormInstance.searchBox),
              (r = document.querySelector(".b_searchboxForm .sb_ghostingTab")),
              r &&
                ((i = r),
                n && t
                  ? (i.classList.add("sb_ghostingTab_visible"),
                    (i.style.marginLeft = this.getLeftMargin(t)),
                    (i.style.marginTop =
                      this.searchFormInstance.config.enableTabPrompt ==
                      TabPromptType.TabInline
                        ? "".concat(
                            ~~((t.parentElement.offsetHeight - 24) / 2),
                            "px"
                          )
                        : "".concat(
                            ~~((t.parentElement.offsetHeight - 24) / 4),
                            "px"
                          )))
                  : i.classList.remove("sb_ghostingTab_visible")));
          }),
          (i.prototype.getLeftMargin = function (n) {
            var t = window.getComputedStyle(n, null),
              u = ""
                .concat(t.getPropertyValue("font-weight"), " ")
                .concat(t.getPropertyValue("font-size"), " ")
                .concat(t.getPropertyValue("font-family"), " "),
              f = document.createElement("canvas"),
              r = f.getContext("2d"),
              i;
            return (
              (r.font = u),
              (i = r.measureText(this.getSearchBoxValue())),
              this.searchFormInstance.config.searchBoxSpyglass
                ? "".concat(i.width + 66, "px")
                : "".concat(i.width + 30, "px")
            );
          }),
          (i.prototype.suggestionIsHistory = function (n) {
            return (
              n.stype == STypes.AADHistory ||
              n.stype == STypes.ASHistory ||
              n.className.indexOf("pp_sTileHS") != -1
            );
          }),
          i
        );
      })();
    n.SearchForm.ScopeExtensions.push(new i());
  })((t = n.AS || (n.AS = {})));
})(Bing || (Bing = {})),
  (function (n) {
    var t;
    (function (n) {
      var i = (function () {
          function t() {}
          return (
            (t.prototype.getCallbacks = function () {
              var t = new n.EventRegistration(this);
              return (
                t.add(11, this.onNoResults),
                t.add(10, this.onSuggestionsRendered),
                t
              );
            }),
            (t.prototype.set = function (n) {
              this._data = n;
              this._data.currentQuery.length <= 1 &&
                (this._lastQueryWithNoResults = null);
            }),
            (t.prototype.match = function () {
              return (
                this._lastQueryWithNoResults &&
                this._data.currentQuery.substr(
                  0,
                  this._lastQueryWithNoResults.length
                ) == this._lastQueryWithNoResults
              );
            }),
            (t.prototype.onNoResults = function (n) {
              this._lastQueryWithNoResults = n;
            }),
            (t.prototype.onSuggestionsRendered = function (t, i, r, u, f) {
              f == n.DataSources.Web && (this._lastQueryWithNoResults = null);
            }),
            t
          );
        })(),
        r = (function () {
          function t(n) {
            this._searchFormInstance = n;
            this._exceededNextWordLimit = !1;
          }
          return (
            (t.prototype.getCallbacks = function () {
              return new n.EventRegistration(this);
            }),
            (t.prototype.set = function () {
              var t = this._searchFormInstance.getCurrentQuery(),
                i = this._searchFormInstance.searchBox.offsetWidth,
                r = this._searchFormInstance.searchForm
                  ? n.Utils.CalcWidth(this._searchFormInstance.searchForm, t)
                  : 0,
                u = r / i;
              this._exceededNextWordLimit = u > 0.7;
            }),
            (t.prototype.match = function () {
              return this._exceededNextWordLimit;
            }),
            t
          );
        })(),
        t = (function () {
          function t() {
            this._rules = [];
          }
          return (
            (t.prototype.init = function (t) {
              var i = new n.EventRegistration(this);
              i.add(6, this.onSearchFormInitialized);
              t.registerEvents(i);
            }),
            (t.prototype.onSearchFormInitialized = function (n) {
              this._searchFormInstance = n;
              this.addRules();
              this.addCallbacks();
            }),
            (t.prototype.addRules = function () {
              var n = this._searchFormInstance.config;
              n.eNw &&
                n.nwLim &&
                this._rules.push(new r(this._searchFormInstance));
              n.suppnores && this._rules.push(new i(n));
            }),
            (t.prototype.addCallbacks = function () {
              var o = this._rules.length,
                i,
                r,
                t,
                u,
                e,
                f;
              if (o)
                for (
                  i = this._searchFormInstance.autosuggest,
                    r = new n.EventRegistration(this),
                    r.add(18, this.onTextChanged),
                    i.registerEvents(r),
                    t = 0,
                    u = this._rules;
                  t < u.length;
                  t++
                )
                  (e = u[t]), (f = e.getCallbacks()), f && i.registerEvents(f);
            }),
            (t.prototype.updateDataForRules = function () {
              var n, t, i;
              for (
                this._data = {
                  currentQuery: this._searchFormInstance.getCurrentQuery(),
                },
                  n = 0,
                  t = this._rules;
                n < t.length;
                n++
              )
                (i = t[n]), i.set(this._data);
            }),
            (t.prototype.getSuppressRequestForQuery = function () {
              var n, t, i;
              if (this._data.currentQuery.length > 100) return 1;
              if (
                !this._searchFormInstance.config.noNextWordTermination &&
                this._data.currentQuery.length > 1
              )
                for (n = 0, t = this._rules; n < t.length; n++)
                  if (((i = t[n]), i.match())) return 1;
              return 0;
            }),
            (t.prototype.onTextChanged = function () {
              this.updateDataForRules();
              this._searchFormInstance.suppressRequestForQuery =
                this.getSuppressRequestForQuery();
            }),
            t
          );
        })();
      n.PrefixThrottling = t;
      n.SearchForm.ScopeExtensions.push(new t());
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {})),
  (function (n) {
    var t;
    (function (n) {
      var r = 10,
        t = AutoSuggest.Service.SuggestionAttributes,
        u = "ich",
        f = (function () {
          function u() {}
          return (
            (u.prototype.init = function (t) {
              var i, u;
              t.config.removeSuggUrl &&
                ((i = new n.EventRegistration(this)),
                i.add(6, this.internalInit),
                t.registerEvents(i),
                (u = t.config.removeTextLength),
                u &&
                  sj_ic(
                    '#sw_as .sa_tmHS, .rtl #sw_as .sa_as[dir="ltr"] .sa_tmHS { padding-right: {0}px; padding-left: initial; } .rtl #sw_as .sa_as .sa_tmHS { padding-right: initial; padding-left: {0}px; }'.replace(
                      /\{0\}/g,
                      (u + r).toString()
                    )
                  ));
            }),
            (u.prototype.internalInit = function (t) {
              var u = this,
                r;
              return (
                (this.searchForm = t),
                (r = new n.EventRegistration(this)),
                r.add(19, this.setTabIndexes),
                t.autosuggest.canvas.registerEvents(r),
                new i(
                  t.autosuggest,
                  function (n, t) {
                    return u.getUrl(n, t);
                  },
                  function (n, t, i) {
                    return u.handleResult(n, t, i);
                  }
                )
              );
            }),
            (u.prototype.getUrl = function (n, t) {
              return n.getAttribute("href") == "#rm" ||
                (typeof n.className == "string" &&
                  n.className.indexOf("as_hr") != -1)
                ? this.searchForm.config.removeSuggUrl.replace(
                    "%7b0%7d",
                    encodeURIComponent(t.query)
                  )
                : undefined;
            }),
            (u.prototype.setTabIndexes = function () {
              for (var r, t, f, u = [], i = 0; i < arguments.length; i++)
                u[i] = arguments[i];
              if (document.querySelectorAll)
                for (
                  r =
                    this.searchForm.autosuggest.canvas.container.querySelectorAll(
                      'a[ich="1"]'
                    ),
                    t = 0;
                  t < r.length;
                  t++
                )
                  (f = "1"),
                    u[1] && n.Utils.isChildOf(r[t], u[1]) && (f = "0"),
                    r[t].setAttribute("tabindex", f);
            }),
            (u.prototype.handleResult = function (n, i) {
              var u = JSON.parse(n),
                r;
              u.success &&
                ((r = i.offsetHeight),
                (i.className = "sa_rmvd"),
                [t.InstData, t.Url, t.Query, t.AriaLabel].map(function (n) {
                  delete i[n];
                  i.removeAttribute(n);
                }),
                (i.style.paddingTop = i.style.paddingBottom = "0"),
                (i.style.height = r + "px"),
                this.searchForm.notifyDeleteHistory(r - 2));
            }),
            u
          );
        })(),
        i;
      n.SearchForm.ScopeExtensions.push(new f());
      i = (function () {
        function i(t, i, r) {
          var u = this,
            f;
          this._autosuggest = t;
          this._getUrl = i;
          this._handleResponse = r;
          f = new n.EventRegistration(this);
          f.add(20, function (n, t) {
            u.isValidLink(t) && u.process(t, !0);
          });
          t.canvas.registerEvents(f);
          this._container = t.canvas.container;
          sj_be(
            this._container,
            "mousedown",
            function (n) {
              u.isValidLink(sj_et(n)) && sj_sp(n);
            },
            !0
          );
          sj_be(
            this._container,
            "click",
            function (n) {
              var t = sj_et(n),
                i = n.screenX != 0 && n.screenY != 0;
              u.isValidLink(t) && u.process(t, i) && (sj_sp(n), sj_pd(n));
            },
            !0
          );
        }
        return (
          (i.prototype.process = function (n, t) {
            var i, r, u;
            if (
              (t === void 0 && (t = !1),
              (i = this.getSuggestionContainer(n)),
              !i)
            )
              throw new Error("Suggestion container not found.");
            return ((r = this._getUrl(n, i)), r)
              ? (this.sendRequest(r, i, t),
                typeof Log != "undefined" &&
                  typeof Log.Log != "undefined" &&
                  ((u = this.getGpingData(i)),
                  Log.Log(
                    "Request",
                    "Delete",
                    "Click",
                    !1,
                    "ImpressionGuid",
                    this._autosuggest.data.Inst.IG,
                    "AppNS",
                    u.appNs,
                    "K",
                    u.k
                  )),
                !0)
              : !1;
          }),
          (i.prototype.isValidLink = function (n) {
            return (
              n &&
              ((n.tagName == "A" && !!n.getAttribute(u)) ||
                (typeof n.className == "string" &&
                  n.className.indexOf("as_hr") != -1))
            );
          }),
          (i.prototype.sendRequest = function (n, t, i) {
            var u = this,
              r = sj_gx();
            r.open("GET", n, !0);
            r.onreadystatechange = function () {
              r.readyState == 4 &&
                r.status == 200 &&
                u._handleResponse(r.responseText, t, i);
            };
            r.withCredentials !== undefined && (r.withCredentials = !0);
            r.send();
          }),
          (i.prototype.getSuggestionContainer = function (n) {
            while (n && n != this._container && !n[t.Query])
              n = n.parentElement;
            return n[t.Query] ? n : undefined;
          }),
          (i.prototype.getGpingData = function (n) {
            var i = n.getAttribute("h"),
              t;
            if (!i)
              throw new Error("Missing 'h' attribute on suggestion element.");
            if (((t = i.replace("ID=", "").split(",")), t.length != 2))
              throw new Error("Invalid 'h' attribute on suggestion element.");
            return { appNs: t[0], k: t[1] };
          }),
          i
        );
      })();
    })((t = n.AS || (n.AS = {})));
  })(Bing || (Bing = {})),
  (function () {
    for (
      var n,
        v,
        t = sa_config,
        y = new Bing.AS.Canvas(),
        p = Bing.AS.CommonPrefixDataProvider
          ? new Bing.AS.CommonPrefixDataProvider()
          : new Bing.AS.DataProvider(),
        f,
        e,
        o,
        s,
        h,
        c,
        l,
        r,
        i,
        u = 0,
        a = t.enabledDataSources;
      u < a.length;
      u++
    )
      (n = a[u]),
        (n === Bing.AS.DataSources.BingAtWork ||
          n === Bing.AS.DataSources.Substrate ||
          n === Bing.AS.DataSources.MicrosoftSearchInBing) &&
          (i ||
            (i = AutoSuggest.BingAtWorkWebTelemetry
              ? new AutoSuggest.BingAtWorkWebTelemetry(t, "AS")
              : null),
          r ||
            (r = Bing.AS.WebClientInstrumentation
              ? new Bing.AS.WebClientInstrumentation()
              : null)),
        n === Bing.AS.DataSources.BingAtWork
          ? ((f = Bing.AS.CachingDataProvider
              ? new Bing.AS.CachingDataProvider(n)
              : Bing.AS.BingAtWorkDataProvider
              ? new Bing.AS.BingAtWorkDataProvider()
              : null),
            (h = Bing.AS.BingAtWorkSuggestionsParserV3
              ? new Bing.AS.BingAtWorkSuggestionsParserV3(t)
              : null))
          : n === Bing.AS.DataSources.Substrate
          ? ((e = Bing.AS.SubstrateDataProvider
              ? new Bing.AS.SubstrateDataProvider(i)
              : null),
            (c = Bing.AS.SubstrateSuggestionsParser
              ? new Bing.AS.SubstrateSuggestionsParser(t)
              : null))
          : n === Bing.AS.DataSources.MicrosoftSearchInBing
          ? ((o = Bing.AS.MsbDataProvider
              ? new Bing.AS.MsbDataProvider()
              : null),
            (l = Bing.AS.MsbSuggestionsParser
              ? new Bing.AS.MsbSuggestionsParser(t)
              : null))
          : n === Bing.AS.DataSources.MSBEngagment &&
            (s = Bing.AS.MSBEngagementDataProvider
              ? new Bing.AS.MSBEngagementDataProvider()
              : null);
    v = new Bing.AS.WebCore(y, p, f, e, o, s, r, h, c, l, i);
    sa_inst = new Bing.AS.SearchForm(t, v);
    sa_inst.init("sa_inst");
    sa_eL && sa_inst.show();
    _w.sj_evt && sj_evt.fire("autoSugLoaded");
    sj_evt.bind("ajax.load", function (n) {
      var t = n && n[1];
      t && t.isInstantRequest && _w.sj_evt && sj_evt.fire("autoSugLoaded");
    });
  })();
