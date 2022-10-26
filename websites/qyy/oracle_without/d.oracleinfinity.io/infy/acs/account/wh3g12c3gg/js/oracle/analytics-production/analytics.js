/*
 Oracle Infinity
 @preserve Copyright (c) 2017, 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 analytics.js v1.0
 Created: 2022-03-02T13:42:33+0000
*/
(function (g, a) {
  if (!g.ORA.analytics) {
    var b = function () {
      ORA.fireEvent(
        new ORA.Event(ORA.Event.ANA_PRODUCT_READY, ORA.Event.STATUS_SUCCESS)
      );
      ORA.common.TrackingPipeline.productIsReady("analytics");
      ORA.Debug.debug("setProductReady()", "ANA");
    };
    ORA.analytics = {
      dcsRef: null,
      plugins: {},
      addEventListener: ORA.addDOMEvent,
      eventQueue: null,
      version: { major: 1, minor: 0, inc: 4 },
      versionStr: "1.0.4",
      qryparams: {},
      dcsdelay: 25,
      productReadyLatch: {},
      isSeedMessageTriggered: !1,
      elemOfEvent: function (c, d) {
        var f = c.target || c.srcElement,
          l = d || {};
        "string" === typeof d && ((l = {}), (l[d.toUpperCase()] = 1));
        for (; f && f.tagName && !l[f.tagName.toUpperCase()]; )
          f = f.parentElement || f.parentNode;
        return f;
      },
      multiTrack: function (c) {
        try {
          return ORA.analytics.dcsRef.dcsMultiTrack(c), !1;
        } catch (d) {
          throw (
            (ORA.Debug.error(
              "Error ORA.analytics.multiTrack: " + d.toSource(),
              "ANA"
            ),
            d)
          );
        }
      },
      instantiateExternal: function () {
        ORA.analytics.qryparams = ORA.common.QueryParamCache.getCache();
        ORA.analytics.loadJS = ORA.common.loadJS;
        ORA.analytics.eventQueue = new ORA.common.Queue();
        ORA.analytics.prettify = ORA.common.JSONPrettify;
        ORA.analytics.dcsSaveCookie = ORA.common._setCookie;
        ORA.analytics.dcsDeleteCookie = ORA.common._deleteCookie;
        ORA.analytics.extendArray = ORA.common.extendArray;
        ORA.analytics.isFn = ORA.common.isFn;
        ORA.analytics.isArray = ORA.common.isArray;
        ORA.analytics.getCookieAsObj = ORA.common._getCookieAsObj;
        ORA.analytics.isEmpty = ORA.common.isEmpty;
        ORA.analytics.click = ORA.click;
        ORA.analytics.view = ORA.view;
        ORA.analytics.collect = ORA.collect;
        ORA.analytics.regPlugin = ORA.regPlugin;
        ORA.analytics.getTagId = ORA.getTagId;
        ORA.analytics.getContextName = ORA.getContextName;
        ORA.analytics.getPluginsConfig = ORA.analytics._getPluginsConfig;
        ORA.analytics.setCookie = ORA.common._setCookie;
        ORA.analytics.deleteCookie = ORA.common._deleteCookie;
        ORA.analytics.getCookieRaw = ORA.common._getCookieRaw;
        ORA.analytics.getIEVer = ORA.common._getIEVer;
        ORA.analytics.isOptedOut = ORA.common._isOptedOut;
        ORA.analytics.setInfinityOptOut = ORA.common._setInfinityOptOut;
        ORA.analytics.addMutation = ORA.analytics.addMutation;
        ORA.analytics.rmMutation = ORA.analytics.rmMutation;
        ORA.analytics.getFPC = function () {
          var c = ORA.analytics.getCookieAsObj(
            ORA.analytics.dcsRef.FPCConfig.name
          );
          return c && c.id ? c.id : null;
        };
      },
      reset: function () {
        ORA.Debug.info("Analytics reset()", "ANA");
        ORA.analytics.dscRef = {};
      },
      execute: function (c) {
        ORA.Debug.info("Analytics execute()", "ANA");
        ORA.analytics.reset();
        var d = ORA.analyticsModule.prototype.oraConfigObj;
        c && c.params && ORA.hasVal(c.params)
          ? ((c = ORA.common.getMergedConfigs(d, c.params)),
            ORA.analytics.setup(c))
          : ORA.analytics.setup(d);
      },
      performView: function () {
        ORA.common.clientID.isWaitForSetClientId &&
          ORA.common.clientID.isClientIdSet &&
          (ORA.addEventHandler(ORA.Event.ANA_PRODUCT_READY, ORA.view()),
          (ORA.common.clientID.isWaitForSetClientId = !1));
      },
      registerLoaderEvents: function () {
        ORA.addEventHandler(ORA.Event.LOADER_RESET, this.reset);
        ORA.addEventHandler(ORA.Event.LOADER_EXECUTE, this.execute);
        ORA.common.clientID.isClientIdSet
          ? this.performView()
          : ORA.addEventHandler(ORA.Event.SET_CLIENT_ID, this.performView);
      },
      setupPluginMgr: function (c) {
        var d = ORA.analytics.getPluginCount("ora-plugins"),
          f = ORA.common.pluginMgr,
          l = function () {
            ORA.fireEvent(
              new ORA.Event(
                ORA.Event.ANA_ORA_PLUGINS_INIT,
                ORA.Event.STATUS_SUCCESS
              )
            );
            ORA.Debug.debug(
              "setupPluginMgr - ora Plugins Initialized, productReadyLatch.countDown()",
              "ANA"
            );
            ORA.analytics.productReadyLatch.countDown();
          };
        0 < d
          ? (ORA.Debug.debug(
              "setupPluginMgr - ora pluginCount(" +
                d +
                "), deferring initPluginsCallback until plugins loaded",
              "ANA"
            ),
            f.setNumExpectedPlugins(d),
            f.setInitPluginsCallback(l),
            f.setInjectConfigsCb(
              ORA.analytics._getPluginsConfig,
              "ora-plugins"
            ))
          : (0 === d && c.waitForGetClientIDCallback.apply(c)
              ? (ORA.Debug.debug(
                  "setupPluginMgr - ora pluginCount(" +
                    d +
                    "), now waiting on getId, so wait to countDown latch ",
                  "ANA"
                ),
                ORA.fireEvent(
                  new ORA.Event(
                    ORA.Event.ANA_ORA_PLUGINS_INIT,
                    ORA.Event.STATUS_SUCCESS
                  )
                ))
              : ORA.Debug.debug(
                  "setupPluginMgr - ora pluginCount(" +
                    d +
                    "), not waiting on getId so countDown immediately",
                  "ANA"
                ),
            l());
        f.setReady();
        ORA.fireEvent(
          new ORA.Event(
            ORA.Event.COMMON_ORA_PLUGINMGR_READY,
            ORA.Event.STATUS_SUCCESS
          )
        );
        f = ORA.analytics.getPluginCount("hosted-plugins");
        var q = ORA.common.hostedPluginMgr,
          u = function () {
            ORA.fireEvent(
              new ORA.Event(
                ORA.Event.ANA_HOSTED_PLUGINS_INIT,
                ORA.Event.STATUS_SUCCESS
              )
            );
            ORA.Debug.debug(
              "setupPluginMgr - Hosted Plugins Initialized, productReadyLatch.countDown()",
              "ANA"
            );
            ORA.analytics.productReadyLatch.countDown();
          };
        0 < f
          ? (ORA.Debug.debug(
              "setupPluginMgr - Hosted pluginCount(" +
                f +
                "), deferring initPluginsCallback until plugins loaded",
              "ANA"
            ),
            q.setNumExpectedPlugins(f),
            q.setInitPluginsCallback(u),
            q.setInjectConfigsCb(ORA.analytics._getPluginsConfig),
            q.processHostedPlugins(c.config["hosted-plugins"]))
          : 0 === f && c.waitForGetClientIDCallback.apply(c)
          ? (ORA.Debug.debug(
              "setupPluginMgr - hosted pluginCount(" +
                d +
                "), now waiting on getId, so wait to countDown latch ",
              "ANA"
            ),
            ORA.fireEvent(
              new ORA.Event(
                ORA.Event.ANA_HOSTED_PLUGINS_INIT,
                ORA.Event.STATUS_SUCCESS
              )
            ),
            l())
          : (ORA.Debug.debug(
              "setupPluginMgr - Hosted pluginCount(" +
                d +
                "), not waiting on getId so countDown immediately",
              "ANA"
            ),
            u());
        q.setReady();
        ORA.fireEvent(
          new ORA.Event(
            ORA.Event.COMMON_HOSTED_PLUGINMGR_READY,
            ORA.Event.STATUS_SUCCESS
          )
        );
      },
      setupProductCountdownLatch: function (c) {
        var d = 2;
        c.waitForGetClientIDCallback.apply(c) &&
          (ORA.Debug.trace(
            "prodCountdownLatch: waitForGetIdCall, latchCount++",
            "ANA"
          ),
          d++);
        ORA.analytics.productReadyLatch = new ORA.common.CountDownLatchClass(
          d,
          b,
          "ProductReadyLatch"
        );
        ORA.Debug.debug("set productReadyLatch to " + d, "ANA");
      },
      setCheckSetDisableSeed: function (c) {
        !0 === c.s_disableSeed && ORA.common.TrackingPipeline.disableSeed();
      },
      setWaitForSetClientId: function (c) {
        !0 === c.s_waitForSetClientId &&
          ORA.common.clientID.waitForSetClientId();
      },
      setup: function (c) {
        try {
          ORA.Debug.debug("Analytics setup() started", "ANA");
          this.instantiateExternal();
          this.setCheckSetDisableSeed(c);
          this.setWaitForSetClientId(c);
          var d = new ORA.analytics.dcs();
          d.init(c);
          this.setupProductCountdownLatch(d);
          d.setup();
          this.dcsRef = d;
          this.setupPluginMgr(this.dcsRef);
          this.registerLoaderEvents();
          ORA.fireEvent(
            new ORA.Event(
              ORA.Event.ANA_SETUP_COMPLETE,
              ORA.Event.STATUS_SUCCESS
            )
          );
          ORA.Debug.debug("Analytics setup() has finished", "ANA");
        } catch (f) {
          ORA.Debug.error("Analytics setup() failure", 201, f, "ANA");
        }
      },
      addMutation: function (c, d, f) {
        return ORA.common.TrackingPipeline.registerMutation(c, d, f ? f : 2);
      },
      rmMutation: function (c) {
        return ORA.common.TrackingPipeline.deregisterMutation(c);
      },
      getProductTimeout: function () {
        return ORA.common.TrackingPipeline.getProduct("analytics").timeout;
      },
      _getPluginsConfig: function (c, d) {
        var f = {};
        ORA.analyticsModule.prototype.oraConfigObj[d] &&
          ORA.analyticsModule.prototype.oraConfigObj[d][c] &&
          (f = ORA.analyticsModule.prototype.oraConfigObj[d][c]);
        return f;
      },
      getPluginCount: function (c) {
        return ORA.analyticsModule.prototype.oraConfigObj[c]
          ? ORA.common
              .extendObject(ORA.analyticsModule.prototype.oraConfigObj[c])
              .length()
          : 0;
      },
      getConfigParams: function () {
        var c = ORA.analytics,
          d = {},
          f = ORA.analytics.dcsRef;
        f &&
          ORA.common
            .extendArray([
              "accountGuid",
              "destinations",
              "enabled",
              "i18n",
              "timezone",
            ])
            .forEach(function (l) {
              f[l] && (d[l] = f[l]);
            });
        d.version = c.version;
        d.versionStr = [d.version.major, d.version.minor, d.version.inc].join(
          "."
        );
        d.dcsdelay = c.dcsdelay;
        return d;
      },
      getEndPoint: function () {
        return (
          "https://" +
          ORA.analytics.dcsRef.destinations[0].collectionServer +
          "/v3/" +
          ORA.analytics.dcsRef.destinations[0].accountGuid
        );
      },
    };
    ORA.Debug.debug("ORA.analytics instantiation success", "ANA");
  }
})(window, window.document);
(function (g, a) {
  ORA.analytics.dcs = function () {
    var b = g.RegExp
      ? /dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)/i
      : "";
    this.exre = b;
    this.re = {};
    this.plugins = this.plugins = {};
    this.trackingData = this.trackingData = {};
    this.DCS = this.DCS = {};
    this.destinations = [];
    this.DCSext = this.DCSext = {};
    this.errors = this.errors = [];
    this.FPCConfig = this.FPCConfig = {};
    this._onsitedoms = [];
    this.gTempWtId = this.gWtAccountRollup = this.oraId = "";
    this.prettify = ORA.analytics.prettify;
    return this;
  };
  ORA.analytics.dcs.prototype = {
    init: function (b) {
      var c = b;
      try {
        ORA.Debug.debug("dcs init() start", "ANA");
        "undefined" === typeof c && (c = {});
        this.config = c;
        var d = this;
        b = function (u, r) {
          return c.hasOwnProperty(u) ? c[u] : r;
        };
        var f = function (u, r, n) {
          return u ? (u.hasOwnProperty(r) ? u[r] : n) : n;
        };
        this.extendArray = ORA.common.extendArray;
        this.errorlogger = function (u) {
          ORA.Debug.error("Dcs", 100, u, "ANA");
        };
        c.defaultCollectionServer ||
          ORA.Debug.error("dcs init:  missing defaultCollectionServer");
        this.destinations = this.destinations = (function (u) {
          if (!u || 0 === u.length)
            throw Error("Destinations are not configured");
          for (var r = [], n = 0; n < u.length; n++) {
            var e = f(u[n], "collectionServer", c.defaultCollectionServer),
              k = {};
            k.collectionServer = k.collectionServer = e;
            k.timeout = k.timeout = f(u[n], "timeout", 2e3);
            k.accountGuid = k.accountGuid = u[n].accountGuid;
            k.endpoint = k.endpoint = d.collectionEndpoint(e, u[n].accountGuid);
            r.push(k);
          }
          return r;
        })(c.destinations);
        this.accountGuid = this.accountGuid = this.destinations[0].accountGuid;
        this.queue = this.queue = b("queue", []);
        this.wtidTimeout = b("wtidTimeout", 1e3);
        this.timezone = this.timezone = b("timezone", -8);
        this.enabled = this.enabled = b("enabled", !0);
        this.i18n = this.i18n = b("i18n", !1);
        this.re = g.RegExp
          ? d.i18n
            ? { "%25": /%/g, "%26": /&/g, "%23": /#/g }
            : {
                "%25": /%/g,
                "%09": /\t/g,
                "%20": /\x20|\xA0|\x7F/g,
                "%23": /#/g,
                "%26": /&/g,
                "%2B": /\+/g,
                "%3F": /\?/g,
                "%5C": /\\/g,
                "%22": /"/g,
              }
          : "";
        if (c.metanames) {
          var l = c.metanames.toLowerCase();
          this.metanames = ORA.common.extendArray(l.split(","));
        }
        if (!0 === c.metatagAuto || "true" === c.metatagAuto)
          this.metatagAuto = !0;
        this.skip_qp_no_value = this.skip_qp_no_value = b(
          "skip_qp_no_value",
          !1
        );
        this.skip_qp_no_equals = this.skip_qp_no_equals = b(
          "skip_qp_no_equals",
          !1
        );
        this.skip_qp = this.skip_qp = b("skip_qp", !1);
        this.vtid = this.vtid = b("vtid", void 0);
        this.paidsearchparams = b("paidsearchparams", "gclid");
        ORA.analytics.dcsdelay = c.dcsdelay || ORA.analytics.dcsdelay;
        this.delayAll = this.delayAll = b("delayAll", !1);
        this.preserve = this.preserve = b("preserve", !0);
        this._onsitedoms = b("onsitedoms", "");
        ORA.common.isFn(this._onsitedoms.test) ||
          ((this._onsitedoms = ORA.common.extendArray(
            this._onsitedoms.toLowerCase().split(",")
          )),
          this._onsitedoms.forEach(function (u, r, n) {
            n[r] = u.replace(/^\s*/, "").replace(/\s*$/, "");
          }));
        b("adimpressions", !1) && (this.adclickparam = b("adsparam", "WT.ac"));
        this.FPCConfig.enabled = this.FPCConfig.enabled = f(
          c.FPCConfig,
          "enabled",
          !0
        );
        this.FPCConfig.domain = this.FPCConfig.domain = f(
          c.FPCConfig,
          "domain",
          ""
        );
        this.FPCConfig.name = this.FPCConfig.name = f(
          c.FPCConfig,
          "name",
          "ORA_FPC"
        );
        this.FPCConfig.optOutCName = this.FPCConfig.optOutCName = f(
          c.FPCConfig,
          "optOutCName",
          "Infinity.optout"
        );
        this.FPCConfig.legacyCName = this.FPCConfig.legacyCName = f(
          c.FPCConfig,
          "legacyCName",
          "WT_FPC"
        );
        this.FPCConfig.expiry = this.FPCConfig.expiry = f(
          c.FPCConfig,
          "expires",
          63113851500
        );
        63113851500 < this.FPCConfig.expiry &&
          (this.FPCConfig.expiry = 63113851500);
        this.FPCConfig.expireDate = new Date(
          this.getTime() + this.FPCConfig.expiry
        );
        this.FPCConfig.sessionOnly =
          0 === this.FPCConfig.expiry || f(c.FPCConfig, "sessionOnly", !1);
        this.FPCConfig.autoTLD = this.FPCConfig.autoTLD = f(
          c.FPCConfig,
          "autoTLD",
          !1
        );
        c.cookieTypes &&
          (this.FPCConfig.enabled = "none" !== c.cookieTypes.toLowerCase());
        var q = {
          DNTBehavior:
            (ORA.common._getConfigObject() &&
              ORA.common._getConfigObject().DNTBehavior) ||
            "honorDNT",
          wtidTimeout: this.wtidTimeout,
          cookie: {
            enable: this.FPCConfig.enabled,
            name: this.FPCConfig.name,
            expires: this.FPCConfig.expiry,
            autoTLD: this.FPCConfig.autoTLD,
            sessionOnly: this.FPCConfig.sessionOnly,
            expireDate: this.FPCConfig.expireDate,
            domain: this.FPCConfig.domain,
          },
          endpoint: {
            clientIDServer: this.destinations[0].collectionServer,
            accountGuid: this.destinations[0].accountGuid,
            protocol: "https",
          },
        };
        ORA.common.clientID.clientId = this.dcsGetFPC().id || null;
        ORA.common.clientID.setConfig(q);
        this.plugins = c.plugins || {};
        ORA.analytics.dcs.prototype.action_collect =
          ORA.analytics.dcs.prototype.action_collect;
        ORA.analytics.dcs.prototype.init = ORA.analytics.dcs.prototype.init;
        ORA.analytics.dcs.prototype.setup = ORA.analytics.dcs.prototype.setup;
        ORA.analytics.dcs.prototype.dcsGetFPC =
          ORA.analytics.dcs.prototype.dcsGetFPC;
        ORA.analytics.dcs.prototype.dcsGetCookie =
          ORA.analytics.dcs.prototype.dcsGetCookie;
        ORA.analytics.dcs.prototype.dcsNavigation =
          ORA.analytics.dcs.prototype.dcsNavigation;
        this.registerProtocol();
        ORA.Debug.debug("dcs init() finish", "ANA");
        return this;
      } catch (u) {
        throw (ORA.Debug.error("Error in init() - " + u.toString()), u);
      }
    },
    registerProtocol: function () {
      var b = ORA.common.TrackingPipeline;
      null === b.getCommProtocol(ORA.common.CommManager.GIF) &&
        ((ORA.common._analyticsProtocol = ORA.common.protocols.gifProtocol),
        b.setCommProtocol(
          ORA.common.CommManager.GIF,
          ORA.common._analyticsProtocol
        ));
    },
    collectionEndpoint: function (b, c, d) {
      b || ORA.Debug.debug("Warning:  missing collectServer");
      b = b ? b : "";
      if (!c) throw Error("accountGuid must be configured for " + b);
      return "https://" + b + "/" + c + "/" + (d ? d : "dcs.gif");
    },
    setReady: function () {
      ORA.Debug.debug("setReady()", "ANA");
      this._readySet ||
        (this.flushqueue(), this.redirectqueue(), (this._readySet = !0));
    },
    flushqueue: function () {
      ORA.Debug.trace("flushqueue()", "ANA");
      for (var b = 0; b < this.queue.length; b++) this.doAction(this.queue[b]);
      this.queue = [];
    },
    redirectqueue: function () {
      var b = this;
      this.queue.push = function (c) {
        b.doAction(c);
      };
    },
    dcsGetCookie: function (b) {
      return ORA.analytics.dcsGetCookie(b, this.FPCConfig.name);
    },
    dcsIsFpcSet: function (b, c) {
      var d = ORA.analytics.getCookieAsObj,
        f = ORA.analytics.isEmpty;
      d = d(b);
      this.gTempWtId = d.id;
      return f(d) ? 2 : c === d.id ? 0 : 3;
    },
    dcsGetFPC: function () {
      return ORA.analytics.getCookieAsObj(this.FPCConfig.name);
    },
    dcsFPC: function () {
      var b =
        (ORA.common._getConfigObject() &&
          ORA.common._getConfigObject().DNTBehavior) ||
        "honorDNT";
      if (!ORA.analytics.isOptedOut())
        if (this.FPCConfig.enabled) {
          this.trackingData.ce = "1";
          var c = this.trackingData,
            d = this.FPCConfig.name,
            f = new Date(),
            l = 6e4 * f.getTimezoneOffset() + 36e5 * this.timezone;
          f.setTime(f.getTime() + l);
          var q = new Date(f.getTime());
          c.co_f = c.vtid = "";
          c.vtvs = c.vt_f = "";
          var u = ORA.analytics.getCookieAsObj(d);
          l = function (n) {
            var e = u.id;
            null !== e &&
              ((c.co_f = e),
              f.getTime() > q.getTime() + 288e5 && q.setTime(f.getTime()),
              "undefined" === typeof n.gTempWtId || n.gTempWtId !== e) &&
              ((c.vt_f = "1"), (n.gTempWtId = e));
          };
          if (!ORA.common._isDNTSet() || "honorDNT" !== b) {
            l(this);
            c.co_f = escape(c.co_f);
            c.vtid =
              "undefined" === typeof this.vtid ? c.co_f : this.vtid || "";
            u.id = c.co_f;
            this.FPCConfig.sessionOnly
              ? ORA.common.mobile.nativeAppCkSend({
                  name: d,
                  value: u,
                  domain: this.FPCConfig.domain,
                  date: this.FPCConfig.expireDate,
                  path: "/",
                  type: "session",
                  timeout: this.FPCConfig.expiry,
                })
              : ORA.common.mobile.nativeAppCkSend({
                  name: d,
                  value: u,
                  domain: this.FPCConfig.domain,
                  date: this.FPCConfig.expireDate,
                  path: "/",
                  type: "persisted",
                  timeout: this.FPCConfig.expiry,
                });
            b = ORA.common.isFpcSet(d, c.co_f);
            0 !== b &&
              ((c.co_f = ""),
              "undefined" === typeof this.vtid && (c.vtid = ""),
              (c.vt_f = b));
            var r = {};
            ORA.common.extendObject(c).forEach(function (n, e) {
              null !== n && "" !== n && (r["WT." + e] = n);
            });
            return r;
          }
        } else
          (this.trackingData.ce = "0"),
            (this.trackingData.vtid = this.vtid ? this.vtid : "");
    },
    dcsGetIdCallback: function (b) {
      "undefined" !== typeof b &&
        (this.oraId || (this.oraId = b),
        ORA.fireEvent(
          new ORA.Event(ORA.Event.ANA_AFTER_GETID, ORA.Event.STATUS_SUCCESS)
        ));
      this.setReady();
      ORA.analytics.productReadyLatch.countDown();
    },
    waitForGetClientIDCallback: function () {
      var b = ORA.common._getCookieAsObj(),
        c = 2 !== this.dcsIsFpcSet(this.FPCConfig.name),
        d =
          (ORA.common._getConfigObject() &&
            ORA.common._getConfigObject().DNTBehavior) ||
          "honorDNT";
      d = ORA.common._isDNTSet() && "honorDNT" === d;
      return ORA.common._isOptedOut(b) ||
        c ||
        !this.FPCConfig.enabled ||
        d ||
        ORA.common._getConfigObject().s_waitForSetClientId
        ? !1
        : !0;
    },
    setup: function () {
      try {
        var b = this,
          c = function (d) {
            b.dcsGetIdCallback.apply(b, [d]);
          };
        this.FPCConfig.enabled
          ? ORA.common.mobile.delay(
              function () {
                b.waitForGetClientIDCallback.apply(b)
                  ? ORA.common.clientID.getClientID(c)
                  : b.setReady.apply(b, []);
              },
              "ANA",
              ORA.analyticsModule.prototype.oraConfigObj
            )
          : this.setReady();
        this.enQueue("collect", { element: void 0, event: void 0 });
        ORA.fireEvent(
          new ORA.Event(ORA.Event.ANA_DCS_SETUP, ORA.Event.STATUS_SUCCESS)
        );
        ORA.addEventHandler(
          ORA.Event.SET_CLIENT_ID,
          function (d) {
            b.oraId = d.params;
          },
          null,
          !0
        );
        ORA.addEventHandler(
          ORA.Event.CLEAR_CLIENT_ID,
          function () {
            ORA.analytics.pageAnalysis["WT.co_f"] = ORA.analytics.pageAnalysis[
              "WT.vtid"
            ] = null;
          },
          null,
          !0
        );
        return this;
      } catch (d) {
        this.errors.push(d), this.errorlogger(d);
      }
    },
    addQueryParameters: function (b, c) {
      var d = this.DCS;
      if (0 < b.length() && !this.skip_qp) {
        b.forEach(function (q, u) {
          var r = q;
          if (
            !(
              ((this.skip_qp_no_value || this.skip_qp_no_equals) &&
                "undefined" === typeof q) ||
              (this.skip_qp_no_equals && "" === q)
            )
          ) {
            if ("undefined" === typeof q || null === q) r = "undefined";
            d[u] = r;
          }
        }, this);
        var f = this.paidsearchparams.length
          ? this.paidsearchparams.toLowerCase().split(",")
          : [];
        for (var l = 0; l < f.length; l++)
          if (ORA.common.QueryParamCache.contains(f[l], !0)) {
            c.srch = "1";
            break;
          }
      }
    },
    dcsVar: function () {
      var b = this.trackingData;
      this.i18n &&
        (b.le =
          "string" === typeof a.defaultCharset
            ? a.defaultCharset
            : "string" === typeof a.characterSet
            ? a.characterSet
            : "unknown");
      b.tv = ORA.analytics.versionStr;
      var c = ORA.common.QueryParamCache.getCache();
      this.addQueryParameters(c, b);
      !0 === this.metatagAuto &&
        ORA.common.visitMetaTags(this.dcsMetaTagsAutoScrape, a, this.DCSext);
      this.metanames &&
        ORA.common.visitMetaTags(
          this.dcsMetaTagArrScrape(this.metanames),
          a,
          this.DCSext
        );
    },
    dcsMetaTagArrScrape: function (b) {
      return function (c, d, f) {
        c = c.toLowerCase();
        -1 !== b.indexOf(c) && (f["meta_" + c] = d);
      };
    },
    dcsMetaTagsAutoScrape: function (b, c, d) {
      0 === b.indexOf("ORA.")
        ? (d[b] = c)
        : 0 === b.indexOf("DCS.")
        ? ((b = b.split("DCS.")), b[1] && (d[b[1]] = c))
        : 0 === b.indexOf("DCSext.") &&
          ((b = b.split("DCSext.")), b[1] && (d[b[1]] = c));
    },
    getPageAnalysis: function () {
      var b = ORA.analytics.dcsRef.dcsFPC(),
        c = ORA.common.extendArray;
      ORA.analytics.pageAnalysis
        ? c(["vt_f"]).forEach(function (d) {
            ORA.analytics.pageAnalysis["WT." + d] &&
              delete ORA.analytics.pageAnalysis["WT." + d];
          })
        : (ORA.analytics.pageAnalysis = ORA.analytics.dcsRef.genPageAnalysis());
      return ORA.paramsMerge(ORA.analytics.pageAnalysis, b);
    },
    genPageAnalysis: function () {
      try {
        if (
          (ORA.fireEvent(
            new ORA.Event(
              ORA.Event.ANA_BEFORE_PAGE_ANALYSIS,
              ORA.Event.STATUS_SUCCESS
            )
          ),
          !ORA.analytics.isOptedOut())
        ) {
          var b = this.trackingData,
            c = this.DCS,
            d = this.DCSext,
            f = this.i18n;
          f && (b.dep = "");
          var l = {},
            q;
          for (q in c)
            c.hasOwnProperty(q) &&
              void 0 !== c[q] &&
              "function" !== typeof c[q] &&
              (l[q] = c[q]);
          for (var u in b)
            b.hasOwnProperty(u) &&
              "" !== b[u] &&
              void 0 !== b[u] &&
              "function" !== typeof b[u] &&
              (l["WT." + u] = b[u]);
          for (var r in d)
            d.hasOwnProperty(r) &&
              "" !== d[r] &&
              void 0 !== d[r] &&
              "function" !== typeof d[r] &&
              (f && (b.dep = 0 === b.dep.length ? r : b.dep + ";" + r),
              (l[r] = d[r]));
          f && 0 < b.dep.length && (l["WT.dep"] = b.dep);
          ORA.Debug.superfine("pageAnalysis: " + this.prettify(l), "ANA");
          ORA.fireEvent(
            new ORA.Event(
              ORA.Event.ANA_AFTER_PAGE_ANALYSIS,
              ORA.Event.STATUS_SUCCESS
            )
          );
          return l;
        }
      } catch (n) {
        ORA.Debug.error("error in pageAnalyze: " + n.toString());
      }
    },
    doRequest: function () {
      var b = this.destinations,
        c = this.getPageAnalysis;
      ORA.common.TrackingPipeline.registerMutation(
        "analyticsAnnotate",
        function (d) {
          if (
            d.params.mutation &&
            (!0 === d.params.mutation.pageview ||
              !0 === d.params.mutation.conversion ||
              !0 === d.params.mutation.click ||
              (!0 === d.params.mutation.collect &&
                !1 !== d.params.sendSessionInfo) ||
              !0 === d.params.mutation.view)
          ) {
            var f = c(),
              l;
            for (l in f)
              f.hasOwnProperty(l) && !d.getParam(l) && d.setParam(l, f[l]);
            d.setParam("ora.tag_id", ORA.getTagId());
            d.setParam("ora.tag_config", ORA.getContextName());
            ORA.Debug.debug(
              d.params.desc
                ? "annotating " + d.params.desc + " w/ analytics page analysis"
                : "annotating w/ analytics page analysis",
              "ANA"
            );
            ORA.Debug.trace(
              "annotating payload w/ " + ORA.analytics.prettify(f),
              "ANA"
            );
            ORA.Debug.trace("Endpoints: " + ORA.analytics.prettify(b), "ANA");
            if ("collect" !== d.params.desc)
              for (f = 0; f < b.length; f++)
                d.endpoints.push({
                  endpoint: b[f].endpoint,
                  timeout: b[f].timeout,
                  conf: ORA.analytics.dcsRef,
                  protocolType: ORA.common.CommManager.GIF,
                });
            ORA.fireEvent(
              new ORA.Event(ORA.Event.ANA_PV_MUTATE, ORA.Event.STATUS_SUCCESS)
            );
          }
        },
        1
      );
      ORA.Debug.debug("doRequest() - register mutation", "ANA");
    },
    pageAnalyze: function () {
      ORA.Debug.trace("pageAnalyze()");
      this.dcsVar();
      this.adclickparam && 0 < this.adclickparam.length && this.dcsAdSearch();
      this.pageAnalyzehasRun = !0;
    },
    getTime: function () {
      return new Date().getTime();
    },
    dumpCounter: 0,
    spinLock: function (b) {
      for (var c = this.getTime(); this.getTime() - c < b; ) this.dumpCounter++;
    },
    enQueue: function (b, c) {
      var d = b;
      ORA.Debug.debug(
        "enQueue() - action: " +
          JSON.stringify(d) +
          " msg: " +
          JSON.stringify(c),
        "ANA"
      );
      d || (d = "collect");
      this.queue.push({ action: d, message: c });
    },
    doAction: function (b) {
      ORA.Debug.debug("doAction() - cmd: " + this.prettify(b), "ANA");
      var c = "action_" + b.action;
      b = b.message;
      this.pageAnalyzehasRun || this.pageAnalyze();
      b.event &&
        !b.element &&
        (b.element = ORA.analytics.elemOfEvent(b.event, { A: 1 }));
      if (ORA.analytics.isFn(this[c])) this[c](b);
    },
    action_collect: function (b) {
      ORA.Debug.debug("action_collect()", "ANA");
      this.doRequest(b);
    },
    dcsIsOnsite: function (b, c) {
      var d = b;
      if (0 < d.length) {
        d = d.toLowerCase();
        if (d === window.location.hostname.toLowerCase()) return !0;
        if (ORA.analytics.isFn(c.test)) return c.test(d);
        if (0 < c.length)
          for (var f = c.length, l = 0; l < f; l++) if (d === c[l]) return !0;
      }
      return !1;
    },
    dcsNavigation: function (b, c) {
      var d = "",
        f = "",
        l = c.length,
        q;
      for (q = 0; q < l; q++) {
        var u = c[q];
        if (
          u.length &&
          ((f = ORA.analytics.elemOfEvent(b, u)),
          (d =
            f.getAttribute && f.getAttribute("id") ? f.getAttribute("id") : ""),
          (f = f.className || ""),
          d.length || f.length)
        )
          break;
      }
      return d.length ? d : f;
    },
    dcsAdSearch: function () {
      if (a.links) {
        var b = this.adclickparam + "\x3d",
          c = b.length;
        b = new RegExp(b, "i");
        var d = a.links.length,
          f = a.URL + "",
          l = f.search(b);
        if (-1 !== l) {
          var q = f.indexOf("\x26", l);
          var u = -1 !== q ? f.substring(l, q) : f.substring(l, f.length);
          var r = new RegExp(u + "(\x26|#)", "i");
        }
        for (f = 0; f < d; f++)
          if (a.links[f].href) {
            var n = a.links[f].href + "";
            u && 0 < u.length && (n = n.replace(r, "$1"));
            q = n.search(b);
            -1 !== q &&
              ((l = q + c),
              (q = n.indexOf("\x26", l)),
              (q = -1 !== q ? n.substring(l, q) : n.substring(l, n.length)),
              (this.trackingData.ad = this.trackingData.ad
                ? this.trackingData.ad + ";" + q
                : q));
          }
      }
    },
  };
  ORA.Debug.debug("dcs class loaded", "ANA");
})(window, window.document);
(function (g, a, b) {
  ORA.analytics.find = function (c) {
    ORA.analytics.selectorEngine ||
      (ORA.analytics.selectorEngine = ORA.analytics.findSelector());
    return ORA.analytics.selectorEngine(c);
  };
  ORA.analytics.findSelector = function () {
    var c = /MSIE (\d+)/.exec(b.userAgent);
    c = c ? c[1] : 99;
    var d = a.body;
    if (a.querySelectorAll && d && 8 < c)
      return function (f) {
        return d.querySelectorAll(f);
      };
    if (g.jQuery) return g.jQuery.find;
    if (g.Sizzle) return g.Sizzle;
    if (g.YAHOO && YAHOO.util && YAHOO.util.Selector)
      return YAHOO.util.Selector.query;
    if ("qwery" in g) return qwery;
    g.YUI &&
      YUI().use("node", function (f) {
        return f.all;
      });
    return a.querySelectorAll && d
      ? function (f) {
          return d.querySelectorAll(f);
        }
      : function () {
          return [];
        };
  };
  ORA.Debug.debug("selectorEngine initialized", "ANA");
})(window, window.document, window.navigator);
(function () {
  var g = {
    cgDefs: ["wt.cg_n", "wt.cg_s", "wt.cg_s#"],
    urlData: window.location.pathname.split("/"),
    init: function (a, b) {
      var c = a.config || {},
        d = b || function () {};
      c.cgDefs && (g.cgDefs = c.cgDefs);
      if (void 0 === c.enable || c.enable) {
        for (c = 0; c < g.urlData.length; ) {
          if ("" === g.urlData[c] || -1 < g.urlData[c].indexOf("."))
            g.urlData.splice(c, 1), c--;
          c++;
        }
        ORA.Debug.debug(
          "cg URL parsing is " +
            JSON.stringify({ urlData: g.urlData }, null, 4),
          "ANA-cg"
        );
        ORA.analytics.addMutation("addCg", g.addCgMutation);
        d();
        ORA.Debug.debug("cg Plugin init complete", "ANA-cg");
      } else
        ORA.Debug.debug("content group plugin is disabled, exiting", "ANA-cg"),
          d();
    },
    addCgMutation: function (a) {
      try {
        for (
          var b = g.cgDefs || [], c = 0;
          (c < b.length || -1 < b[b.length - 1].indexOf("#")) &&
          c < g.urlData.length;
          c++
        )
          c >= b.length - 1 && -1 < b[b.length - 1].indexOf("#")
            ? (a.payload[b[b.length - 1].replace("#", c)] = g.urlData[c])
            : (a.payload[b[c]] = g.urlData[c]);
      } catch (d) {
        ORA.Debug.debug("cg Plugin mutation error", "ANA-cg");
      }
    },
    rmCgMutation: function () {
      ORA.analytics.rmMutation("addCg");
    },
  };
  ORA.Debug.debug("cg - Registering Plugin", "ANA-cg");
  ORA.regPlugin("cg", g.init, { blockCollect: !0 });
  ORA.analytics.plugins || (ORA.analytics.plugins = {});
  ORA.analytics.plugins.cg || (ORA.analytics.plugins.cg = {});
  ORA.analytics.plugins.cg.addCg = g;
})();
(function () {
  var g = {
    cfg: {
      standardEvents: {
        download: !1,
        offsite: !1,
        onsite: !1,
        rightclick: !1,
        anchor: !1,
        javascript: !1,
        scrollTracking: !1,
      },
      eventList: {},
      cookieName: "ORA_EVENT",
      downloadtypes: "xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip",
      socialTypes: {},
      trackSocial: !0,
    },
    init: function (a, b) {
      var c = a.config || {},
        d = b || function () {};
      ORA.Debug.debug("Event Track plugin Start Init", "ANA-ET");
      try {
        for (var f in c) c.hasOwnProperty(f) && (g.cfg[f] = c[f]);
        if (void 0 !== g.cfg.enable && !g.cfg.enable)
          return (
            ORA.Debug.debug(
              "Event Track plugin is disabled - exiting",
              "ANA-ET"
            ),
            d()
          );
        var l = ORA.getIEVer();
        if (l && 9 > l)
          return (
            ORA.Debug.info("requires \x3e\x3d ie9, disabling plugin", "ANA-ET"),
            d()
          );
        ORA.Debug.info("Adding standard events", "ANA-ET");
        g._addStandardEvents();
        if (!document.querySelectorAll)
          return (
            ORA.Debug.info(
              "Event Track plugin requires querySelectorAll function",
              "ANA-ET"
            ),
            d(),
            !1
          );
        g._addMatches();
        ORA.Debug.info("Binding to objects", "ANA-ET");
        g._bind();
      } catch (q) {
        ORA.Debug.error("Event Track plugin Init Error" + q.message, "ANA-ET"),
          d();
      }
      ORA.analytics.rmMutation("evt", g.deferMutation);
      ORA.Debug.debug("Adding deferred mutation", "ANA-ET");
      ORA.analytics.addMutation("evt", g.deferMutation);
      ORA.Debug.debug("Calling deferred message flush", "ANA-ET");
      g._flushMsg();
      d();
      ORA.Debug.debug("Event Track plugin Start Init Complete", "ANA-ET");
    },
    _getFullUrl: function (a) {
      if ("A" === a.nodeName) {
        var b = a.cloneNode(!0);
        b.href = a.href;
        return b;
      }
      return a;
    },
    _pageWillReloads: function (a) {
      var b = [];
      try {
        b = a.split("#");
        var c = window.location.href.split("#")[0];
      } catch (d) {
        return ORA.Debug.error(d.message), !1;
      }
      return 1 === b.length ? !0 : b[0] !== c;
    },
    _eventCallback: function (a, b) {
      try {
        for (
          var c = (a.eventTrigger && a.eventTrigger.split(" ")) || [
              "mousedown",
            ],
            d = function (l, q, u) {
              u._evtMsg(l);
              try {
                var r = u._fnCreator(a.eventCallback)(l, q);
                u._isEmptyObj(r) ||
                  (r.defer && (r.data["wt.isDeferred"] = "1"),
                  ORA.click({ data: r.data }),
                  u._fnCreator(a.fnFinishCallback)(l));
              } catch (n) {
                ORA.Debug.error(
                  "Event Track error in event callback: " + n.message,
                  "ANA-ET"
                );
              }
            },
            f = 0;
          f < c.length;
          f++
        )
          "immediate" !== c[f].toLowerCase()
            ? (ORA.Debug.info(
                "Event Track for " +
                  b +
                  " bind to " +
                  a.selector +
                  " event: " +
                  c[f],
                "ANA"
              ),
              this._delegate(
                document,
                c[f].toLowerCase(),
                a.selector,
                d,
                a,
                this
              ))
            : (ORA.Debug.info("Event Track Immediate: " + b, "ANA"),
              d(null, null, this));
      } catch (l) {
        ORA.Debug.error(
          "Error binding adding selector for: " + b + " err: " + l.message,
          "ANA-ET"
        );
      }
    },
    _delegate: function (a, b, c, d, f, l) {
      function q(r) {
        return function (n, e, k) {
          var v = n.target || n.srcElement,
            p = v;
          "scroll" === n.type && d.call(null, n, e, k);
          for (
            "A" === v.nodeName && v.href && (p = g._getFullUrl(v));
            p && p !== document;

          )
            p.matches(c) && d.call(p, n, e, k), (p = p.parentNode);
        }.apply(this, [r, f, l]);
      }
      if (a.addEventListener)
        a.addEventListener(b, function (r) {
          q(r);
        });
      else {
        var u = b;
        "click" === b && (u = "mousedown");
        a.attachEvent("on" + u, function (r) {
          q(r);
        });
      }
    },
    _bind: function () {
      var a = this.cfg.eventList,
        b;
      for (b in a) a.hasOwnProperty(b) && this._eventCallback(a[b], b);
    },
    _evtMsg: function (a) {
      if (a) {
        var b =
          "Event Triggered:" +
          a.type +
          " node:" +
          (a.srcElement || a.target).nodeName +
          " #";
        b +=
          (a.srcElement || a.target).id +
          " class:" +
          (a.srcElement || a.target).className;
        ORA.Debug.info(b, "ANA-ET");
      } else ORA.Debug.info("Event Triggered for immediate event", "ANA-ET");
    },
    _fnCreator: function (a) {
      return "string" === typeof a
        ? new Function("e", a)
        : "function" === typeof a
        ? a
        : function () {};
    },
    _addMatches: function () {
      Element.prototype.matches ||
        ((Element.prototype.matches =
          Element.prototype.matchesSelector ||
          Element.prototype.mozMatchesSelector),
        (Element.prototype.matches =
          Element.prototype.matches ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector),
        (Element.prototype.matches =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          function (a) {
            a = (this.document || this.ownerDocument).querySelectorAll(a);
            var b = a.length;
            for (--b; 0 <= b && a.item(b) !== this; ) --b;
            return -1 < b;
          }));
    },
    _isRightClick: function (a) {
      a = a || window.event;
      if (a.which) a = 3 === a.which;
      else if (a.button) a = 2 === a.button;
      else return !1;
      return a;
    },
    _getHrefInfo: function (a) {
      var b = a.target || a.srcElement || {},
        c = {},
        d = b,
        f = document.createElement("a");
      b = this._findA(b);
      if (!b.href) return {};
      f.href = b.href;
      c.dcssip = f.hostname
        ? f.hostname.split(":")[0]
        : window.location.hostname;
      f.pathname && 0 !== f.pathname.indexOf("/")
        ? (c.dcsuri = "/" + f.pathname)
        : (c.dcsuri = f.pathname ? f.pathname : "/");
      f.search &&
        (c.dcsqry = f.search.substring(
          f.search.indexOf("?") + 1,
          f.search.length
        ));
      c.dcsref = document.referrer;
      c["WT.nv"] = this._findNV(d, a, { DIV: 1, TABLE: 1 });
      c["WT.dl"] = "24";
      return this._cleanPayload(c);
    },
    _findNV: function (a, b, c) {
      for (; a && a !== document && a.tagName && !c[a.tagName]; )
        a = b.parentElement || a.parentNode;
      return a !== document ? a.id || a.className : "";
    },
    _cleanPayload: function (a) {
      for (var b in a) a.hasOwnProperty(b) && !a[b] && delete a[b];
      return a;
    },
    _findA: function (a) {
      for (; a && "A" !== a.nodeName; ) a = a.parentNode;
      return a;
    },
    _checkOnsiteDom: function (a, b) {
      var c = ORA.analytics.dcsRef._onsitedoms;
      c.test ||
        (1 === c.length && "" === c[0] && (c = [location.host.split(":")[0]]),
        (c = new RegExp(
          c
            .join(",")
            .toLowerCase()
            .replace(",", "|")
            .replace(/^\s*/, "")
            .replace(/\s*$/, "")
        )));
      return !(g._isRightClick(b) || !c.test(a.hostname));
    },
    _checkDeferred: function (a, b) {
      return (
        b.href &&
        g._getFullUrl(b).matches('A[href*\x3d"' + location.host + '/"]')
          ? 0
          : void 0 !== b.target && "_blank" !== b.target
      )
        ? { defer: !0, data: a }
        : { defer: !1, data: a };
    },
    _isEmptyObj: function (a) {
      if ("object" !== typeof a) return !0;
      for (var b in a) if (a.hasOwnProperty(b)) return !1;
      return !0;
    },
    _deferMutation: function (a) {
      try {
        a.params &&
          a.params.payload["wt.isdeferred"] &&
          (ORA.Debug.debug("Deferring payload, saving into cookie", "ANA-ET"),
          delete a.params.payload["wt.isdeferred"],
          (a.params.payload["wt.deferredpayload"] = "1"),
          this._saveMsg(a),
          a.sendDisable());
      } catch (b) {}
    },
    deferMutation: function (a) {
      g._deferMutation(a);
    },
    _saveMsg: function (a) {
      if (window.JSON) {
        var b = [],
          c = this.cfg.cookieName;
        ORA.analytics.getCookieRaw(c) &&
          (b = ORA.common.decode(ORA.analytics.getCookieRaw(c)));
        b.push(a.payload);
        ORA.setCookie(c, ORA.common.encode(b), "; path\x3d/");
        ORA.Debug.debug(
          "Saved payload into cookie: " + document.cookie,
          "ANA-ET"
        );
      } else
        ORA.Debug.debug(
          "Browser version does not support saving payloads into cookies",
          "ANA-ET"
        );
    },
    _flushMsg: function () {
      var a = this.cfg.cookieName;
      try {
        if (ORA.analytics.getCookieRaw(a)) {
          ORA.Debug.debug("Found ORA_EVENT cookie - sending events", "ANA-ET");
          var b = ORA.common.decode(ORA.analytics.getCookieRaw(a));
          ORA.Debug.debug(
            "Found " + b.length + " deferred Payloads - sending now",
            "ANA-ET"
          );
          for (var c = 0; c < b.length; c++) {
            var d = b[c],
              f = new Date();
            d["wt.ets"] = new Date(
              f.getTime() + 6e4 * f.getTimezoneOffset()
            ).getTime();
            ORA.click({ data: d });
          }
          ORA.deleteCookie(a, "/");
        }
      } catch (l) {
        ORA.Debug.debug("Error parsing ORA_EVENT cookie - removing cookie"),
          ORA.deleteCookie(a, "/");
      }
    },
    _addStandardEvents: function () {
      var a = {
          download: "_addDownloadTracking",
          offsite: "_addOffsiteTracking",
          onsite: "_addOnsiteLinkTracking",
          anchor: "_addAnchorTracking",
          rightclick: "_addRightClickTracking",
          javascript: "_addJavaScriptTracking",
          scrollTracking: "_addScrollTracking",
        },
        b;
      for (b in this.cfg.standardEvents)
        if (
          this.cfg.standardEvents.hasOwnProperty(b) &&
          this.cfg.standardEvents[b]
        )
          this[a[b]]();
    },
    _addDownloadTracking: function () {
      ORA.Debug.info("Event Track plugin Add download tracking", "ANA-ET");
      for (
        var a = [], b = g.cfg.downloadtypes.toLowerCase().split(","), c = 0;
        c < b.length;
        c++
      )
        a.push('A[href*\x3d".' + b[c] + '"]');
      g.cfg.eventList.download = {
        eventTrigger: "click",
        selector: a.join(","),
        eventCallback: function (d) {
          var f = d.target || d.srcElement || d.target || {},
            l = g._getHrefInfo(d);
          ORA.Debug.debug("Download Callback Called");
          if (g._isRightClick(d) || !l) return {};
          l["WT.ti"] = "Download:" + f.textContent || f.innerText;
          l["WT.dl"] = "20";
          return g._checkDeferred(l, f);
        },
      };
    },
    testSocial: function (a, b, c) {
      for (var d = 0; d < a[b].length; d++)
        if (-1 < c.toLowerCase().indexOf(a[b][d].toLowerCase())) return !0;
      return !1;
    },
    isSocial: function (a) {
      var b = g.cfg.socialTypes,
        c;
      for (c in b) if (b.hasOwnProperty(c) && g.testSocial(b, c, a)) return c;
      return null;
    },
    _addOnsiteLinkTracking: function () {
      ORA.Debug.info("Event Track plugin add onsite link tracking", "ANA-ET");
      for (
        var a = g.cfg.downloadtypes.toLowerCase().split(","),
          b = ':not([href*\x3d"javascript:"])',
          c = 0;
        c < a.length;
        c++
      )
        b += ':not([href*\x3d".' + a[c] + '"])';
      a = ['A:not([href^\x3d"//"])' + b];
      c = [location.hostname];
      ORA.analytics.dcsRef &&
        ORA.analytics.dcsRef._onsitedoms &&
        (c = ORA.analytics.dcsRef._onsitedoms);
      if (!c.test) {
        if ("" === c || 0 === c[0].length) c = [location.hostname];
        for (var d = 0; d < c.length; d++)
          a.push('A[href*\x3d"' + c[d] + '"]' + b);
      }
      g.cfg.eventList.onsite = {
        eventTrigger: "click",
        selector: a.join(","),
        eventCallback: function (f) {
          var l = f.target || f.srcElement || {},
            q = g._getHrefInfo(f);
          ORA.Debug.debug("Onsite Link Callback Called");
          if (g._isEmptyObj(q)) return {};
          for (; l && "A" !== l.nodeName; ) l = l.parentNode;
          if (!g._checkOnsiteDom(l, f))
            return (
              ORA.Debug.debug(
                "Onsite Link Callback Called - fails onsite test. Exiting"
              ),
              {}
            );
          q["WT.ti"] = "Onsite:" + q.dcssip + q.dcsuri;
          q.dcsqry && (q["WT.ti"] += q.dcsqry);
          q["WT.dl"] = "1";
          return { defer: g._pageWillReloads(l.href), data: q };
        },
      };
    },
    _addOffsiteTracking: function () {
      ORA.Debug.info("Event Track plugin add offsite tracking", "ANA-ET");
      var a = ['A:not(A[href*\x3d"javascript:"])'],
        b = [location.hostname];
      ORA.analytics.dcsRef &&
        ORA.analytics.dcsRef._onsitedoms &&
        (b = ORA.analytics.dcsRef._onsitedoms);
      if (!b.test) {
        a = [];
        "" === b && (b = [location.host]);
        for (var c = 0; c < b.length; c++)
          a.push(
            'A:not([href*\x3d"' + b[c] + '"]):not([href*\x3d"javascript:"])'
          );
      }
      g.cfg.eventList.offsite = {
        eventTrigger: "click",
        selector: a.join(","),
        eventCallback: function (d) {
          var f = d.target || d.srcElement || {},
            l = g._getHrefInfo(d);
          ORA.Debug.debug("Offsite Callback Called");
          if (g._isEmptyObj(l)) return {};
          for (; f && "A" !== f.nodeName; ) f = f.parentNode;
          var q = g.isSocial(f.href);
          q && g.cfg.trackSocial && (l["WT.soc_action"] = q + ":click");
          if (g._checkOnsiteDom(f, d))
            return (
              ORA.Debug.debug(
                "Offsite Callback Called - fails offsite test exiting"
              ),
              {}
            );
          l["WT.ti"] = "Offsite:" + l.dcssip + l.dcsuri;
          l.dcsqry && (l["WT.ti"] += l.dcsqry);
          l["WT.dl"] = "24";
          return g._checkDeferred(l, f);
        },
      };
    },
    _addRightClickTracking: function () {
      ORA.Debug.info("Event Track plugin add right click tracking", "ANA-ET");
      for (
        var a = [], b = g.cfg.downloadtypes.toLowerCase().split(","), c = 0;
        c < b.length;
        c++
      )
        a.push('A[href*\x3d".' + b[c] + '"]');
      g.cfg.eventList.rightClick = {
        eventTrigger: "mousedown",
        selector: a.join(","),
        eventCallback: function (d) {
          ORA.Debug.debug("Rightclick Callback Called");
          if (!g._isRightClick(d) && !g.cfg.testRightClick)
            return (
              ORA.Debug.debug(
                "RightClick Callback Called - exiting fails rightclick test"
              ),
              {}
            );
          var f = d.element || d.srcElement || d.target || {};
          d = g._getHrefInfo(d);
          if (!d) return {};
          d["WT.ti"] = "RightClick:" + f.textContent || f.innerText;
          d["WT.dl"] = "25";
          return { data: d };
        },
      };
    },
    _addJavaScriptTracking: function () {
      ORA.Debug.info("Event Track plugin add javascript tracking", "ANA-ET");
      g.cfg.eventList.javaScript = {
        eventTrigger: "click",
        selector: 'A[href*\x3d"javascript:"]',
        eventCallback: function (a) {
          var b = a.element || a.srcElement || a.target || {};
          a = g._getHrefInfo(a);
          if (g._isEmptyObj(a)) return {};
          ORA.Debug.debug("JavaScript Callback Called");
          a["WT.ti"] = b.innerHTML
            ? "JavaScript:" + b.innerHTML
            : "JavaScript:";
          a["WT.dl"] = "22";
          a.dcssip = window.location.hostname;
          a.dcsuri = b.href;
          return { data: a };
        },
      };
    },
    _addAnchorTracking: function () {
      ORA.Debug.info("Event Track plugin add anchor tracking", "ANA-ET");
      var a = window.location.pathname.split("/").pop();
      g.cfg.eventList.anchorTracking = {
        eventTrigger: "click",
        selector: 'A[href^\x3d"#"],A[href*\x3d"' + a + '#"]',
        eventCallback: function (b, c) {
          var d = b.target || b.srcElement || {},
            f = g._getHrefInfo(b);
          if (g._isEmptyObj(f)) return {};
          for (
            ORA.Debug.debug("Anchor Callback Called");
            d && "A" !== d.nodeName;

          )
            d = d.parentNode;
          if (!g._checkOnsiteDom(d, b) || !c.hasHash(d))
            return (
              ORA.Debug.debug(
                "Anchor Callback Called - no Hash address found, or offsite link - exiting hash:" +
                  d.hash,
                "ANA-ET"
              ),
              {}
            );
          f["WT.ti"] = "Anchor:" + (d.hash || "#");
          f["WT.dl"] = "21";
          c.checkFragment(d);
          return { data: f };
        },
        hasHash: function (b) {
          return b.hash && -1 < b.hash.indexOf("#");
        },
        checkFragment: function (b) {
          ORA.analytics.plugins &&
            ORA.analytics.plugins.fragment &&
            ORA.analytics.plugins.fragment.updateFragData &&
            ORA.analytics.plugins.fragment.updateFragData(b.hash);
        },
      };
    },
    _addScrollTracking: function () {
      ORA.Debug.info("Event Track plugin add anchor tracking", "ANA-ET");
      g.cfg.eventList.scrollTracking = {
        selector: "",
        eventTrigger: "scroll",
        eventCallback: function () {
          window.scrollTracker ||
            (window.scrollTracker = { 1: !1, 2: !1, 3: !1, 4: !1 });
          var a = document.documentElement,
            b = document.body;
          a = Number(
            ((("CSS1Compat" === document.compatMode
              ? a.clientHeight || window.innerHeight || 0
              : b.clientHeight || 0) +
              (window.pageYOffset || (a && a.scrollTop) || b.scrollTop)) /
              Math.max(
                b.scrollHeight,
                a.scrollHeight,
                b.offsetHeight,
                a.offsetHeight,
                b.clientHeight,
                a.clientHeight
              )) *
              4
          ).toFixed(0);
          if (!window.scrollTracker[a]) {
            window.scrollTracker[a] = !0;
            for (var c in window.scrollTracker)
              window.scrollTracker.hasOwnProperty(c) &&
                c < a &&
                !window.scrollTracker[c] &&
                ((window.scrollTracker[c] = !0),
                ORA.click({
                  data: { "WT.page_scroll_depth": 25 * c, "WT.dl": "71" },
                }));
            return {
              data: { "WT.page_scroll_depth": 25 * Number(a), "WT.dl": "71" },
            };
          }
          return {};
        },
      };
    },
    addTracking: function (a, b) {
      "object" === typeof a && "string" === typeof b
        ? g._eventCallback(a, b)
        : ORA.Debug.debug(
            "Ignoring addTrack call - obj or trigger type error",
            "ANA-ET"
          );
    },
  };
  ORA.regPlugin("evtTrack", g.init);
  ORA.analytics.plugins.evtTrack || (ORA.analytics.plugins.evtTrack = {});
  ORA.analytics.plugins.evtTrack.addTracking = g.addTracking;
  ORA.analytics.plugins.evtTrack._flushMsg = g._flushMsg;
  ORA.analytics.plugins.evtTrack.eventTrack = g;
})();
(function () {
  var g = [],
    a = [],
    b = function () {
      if (window.onYouTubeIframeAPIReady) {
        var e = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function () {
          e();
          c();
        };
      } else
        window.onYouTubeIframeAPIReady = function () {
          c();
        };
    },
    c = function () {
      for (
        var e = document.querySelectorAll("IFRAME"), k = 0;
        k < e.length;
        k++
      )
        e[k].src &&
          (0 <= e[k].src.toLowerCase().indexOf("//www.youtube.com/embed") ||
            0 <= e[k].src.toLowerCase().indexOf("//www.unittest.com/embed")) &&
          "ytBound" !== e[k].getAttribute("data-ora") &&
          (-1 === e[k].src.indexOf("enablejsapi") &&
            (-1 === e[k].src.indexOf("?")
              ? (e[k].src += "?enablejsapi\x3d1")
              : (e[k].src += "\x26enablejsapi\x3d1")),
          d(e[k]));
    },
    d = function (e) {
      var k = g.length;
      g[k] = new l(e, k);
      f(e) && e.setAttribute("data-ora", "ytBound");
      f(e)
        ? ORA.Debug.debug(
            "YT - adding player number " + k + " - binding to " + e.src,
            "YT_PLUGIN"
          )
        : ORA.Debug.debug(
            "YT - adding player number " +
              k +
              " - binding to manual player object",
            "YT_PLUGIN"
          );
      "function" === typeof q.addPlayerCallback && q.addPlayerCallback(e);
    },
    f = function (e) {
      return "object" === typeof HTMLElement
        ? e instanceof HTMLElement
        : e &&
            "object" === typeof e &&
            1 === e.nodeType &&
            "string" === typeof e.nodeName;
    },
    l = function (e, k, v) {
      var p = this,
        m = {
          id: k,
          ready: !1,
          loaded: !1,
          info: {
            playerState: null,
            currentTime: null,
            duration: null,
            videoData: {
              video_id: null,
              video_author: "",
              title: "",
              list: null,
            },
            isMuted: !1,
            volume: null,
            videoUrl: "",
            playbackQuality: null,
            playlist: null,
            playlistIndex: -1,
          },
        },
        w = null,
        y = function (t) {
          var x = h.getVideoData();
          m.info.videoData.video_id = x.video_id;
          m.info.videoData.title = x.title;
          m.info.videoData.author = x.author;
          m.info.duration = h.getDuration();
          m.info.currentTime = h.getCurrentTime();
          m.info.playerState = h.getPlayerState();
          m.info.playlist = h.getPlaylist();
          m.info.playlistIndex = h.getPlaylistIndex();
          m.info.muted = h.isMuted();
          m.info.volume = h.getVolume();
          m.info.playbackQuality = h.getPlaybackQuality();
          m.info.videoUrl = h.getVideoUrl();
          t &&
            (videoEventFn(p.videoStates, m, "updatemeta"),
            videoEventFn(p.videoStates, m, "load"));
        },
        z = function () {
          m.info.currentTime = h.getCurrentTime();
          h.isMuted() !== m.info.isMuted &&
            ((m.info.isMuted = h.isMuted()),
            videoEventFn(p.videoStates, m, "mute"));
          h.getVolume() !== m.info.volume &&
            ((m.info.volume = h.getVolume()),
            videoEventFn(p.videoStates, m, "volume"));
          h.getPlayerState() !== m.info.playerState &&
            (ORA.Debug.debug(
              "YT discovered missing change event - resending " +
                m.info.videoData.title +
                " - Last State:" +
                m.info.playerState +
                " current state:" +
                h.getPlayerState(),
              "YT_PLUGIN"
            ),
            window["ORA_YTStateChange" + m.id]({
              target: h,
              data: h.getPlayerState(),
            }));
          videoEventFn(p.videoStates, m, "timeupdate");
        };
      var h = f(e) ? new YT.Player(e) : e;
      p.videoStates = {
        WT: {
          clip_n: null,
          clip_id: null,
          clip_secs: null,
          clip_mins: null,
          clip_ct: null,
          clip_perc: null,
          clip_ev: null,
          clip_duration: null,
          clip_t: null,
          clip_player: "youtube",
          clip_provider: null,
          clip_vol: null,
          clip_res: null,
          clip_player_res: null,
          clip_duration_n: null,
          clip_tv: "2.0.0",
          clip_mode: null,
          dl: 40,
        },
        _state: "loading",
        _lastBeacon: 0,
        _eventThrottle: 0,
        _lastQuartile: 0,
        _pauseDelay: null,
        _currentQuartile: 0,
        _pauseTime: null,
        _hasPlayed: !1,
      };
      p.isReady = function () {
        return m.ready;
      };
      h.oraId = k;
      videoEventFn = v ? v : n;
      window["ORA_YTReady" + k] = function (t) {
        ORA.Debug.debug(
          "YT Player ready for " + t.target.getVideoData().title,
          "YT_PLUGIN"
        );
        y(!0);
        w || (w = setInterval(z, 100));
        m.ready = !0;
      };
      h.addEventListener("onReady", "ORA_YTReady" + k);
      window["ORA_YTStateChange" + k] = function (t) {
        var x = t.target.getVideoData(),
          A = "unstarted ended play pause buffering undefined cued".split(" "),
          B = m.info.playerState;
        t.data !== YT.PlayerState.PAUSED &&
          (m.info.currentTime = h.getCurrentTime());
        ORA.Debug.debug(
          "YT " +
            x.title +
            " State Change to " +
            A[t.data + 1] +
            " from " +
            A[m.info.playerState + 1],
          "YT_PLUGIN"
        );
        m.info.playerState = t.data;
        (t.data === YT.PlayerState.UNSTARTED ||
          (B === YT.PlayerState.UNSTARTED &&
            t.data === YT.PlayerState.BUFFERING)) &&
          y(t.data === YT.PlayerState.BUFFERING);
        t.data === YT.PlayerState.ENDED ||
        (t.data === YT.PlayerState.UNSTARTED && B !== YT.PlayerState.CUED)
          ? (w && clearInterval(w), (w = null), (m.loaded = !1))
          : w || w || (w = setInterval(z, 100));
        ORA.Debug.debug(
          "YT " +
            x.title +
            " videoEventCallback " +
            A[t.data + 1] +
            " at " +
            h.getCurrentTime(),
          "YT_PLUGIN"
        );
        videoEventFn(p.videoStates, m, A[t.data + 1]);
      };
      h.addEventListener("onStateChange", "ORA_YTStateChange" + k);
      window["ORA_YTError" + k] = function (t) {
        ORA.Debug.debug(
          "YT Player error for " + t.target.getVideoData().title,
          "YT_PLUGIN"
        );
        m.error = t.data;
        videoEventFn(p.videoStates, m, "error");
      };
      h.addEventListener("onError", "ORA_YTError" + k);
      p.getMeta = function () {
        return m;
      };
      p.player = h;
      p.getProgressEventId = function () {
        return w;
      };
      p.reset = function () {
        w && clearInterval(w);
        w = null;
        delete window["ORA_YTError" + m.id];
        delete window["ORA_YTStateChange" + m.id];
        delete window["ORA_YTReady" + m.id];
      };
    },
    q = {
      load: !0,
      loadMeta: !0,
      pause: !0,
      quartile: !0,
      beacon: !0,
      seek: !0,
      beaconRate: 30,
      pctInc: 25,
      volume: !0,
      buffering: !0,
      cued: !0,
      mute: !0,
      bins: 15,
      poll: !1,
      pollRate: 500,
      screenMode: !0,
      trackCallback: function (e) {
        ORA.click({ data: e.args });
      },
      loadAPI: !1,
      mode: "automatic",
      pollId: null,
    },
    u = function (e, k) {
      var v,
        p = e.config || {};
      window.ORA && ORA.Debug.info("YouTube Plugin Init Started", "YT_PLUGIN");
      try {
        if (!window.postMessage) {
          ORA.Debug(
            "YT - Browser does not support postMessage which is required for YouTube tracking - exiting",
            "YT_PLUGIN"
          );
          k && k();
          return;
        }
        for (v in p) p.hasOwnProperty(v) && void 0 !== p[v] && (q[v] = p[v]);
        if (void 0 !== q.enable && !q.enable) {
          ORA.Debug.info("YT loading is disabled plugin", "YT_PLUGIN");
          return;
        }
        window.YT && window.YT.Player
          ? r()
          : (ORA.Debug.debug(
              "YT - defering init, the youtube iframe_api script has not loaded"
            ),
            b());
        if (q.loadAPI && !window.YT) {
          ORA.Debug.info("YT loading iframe_api plugin", "YT_PLUGIN");
          var m = document.createElement("script");
          m.src = "//www.youtube.com/iframe_api";
          var w = document.getElementsByTagName("script")[0];
          w.parentNode.insertBefore(m, w);
        }
      } catch (y) {
        window.ORA &&
          (ORA.Debug.info("YT Plugin Init Error", "YT_PLUGIN"), k && k());
      }
      window.ORA && ORA.Debug.info("YT Plugin Init Complete", "YT_PLUGIN");
      k && k();
    },
    r = function () {
      "automatic" === q.mode || "auto" === q.mode
        ? (ORA.Debug.info("YT configuring for automatic mode", "YT_PLUGIN"),
          c())
        : ORA.Debug.info("YT configuring for manual mode", "YT_PLUGIN");
      q.poll &&
        (ORA.Debug.info("YT polling for videos", "YT_PLUGIN"),
        (q.pollId = setTimeout(function () {
          c();
        }, q.pollRate)));
      ORA.Debug.info("YT Plugin Init Complete", "YT_PLUGIN");
    },
    n = function (e, k, v) {
      var p = q;
      var m = k.info;
      var w = k.info.videoData;
      "timeupdate" !== v &&
        window.ORA &&
        window.ORA.Debug.debug(
          "YT Plugin player event received: " + v + " for " + e.WT.clip_n,
          "YT_PLUGIN"
        );
      m.playlist &&
        ((e.WT.clip_playlist_items = m.playlist.length),
        -1 !== m.playlistIndex && (e.WT.clip_playlist_index = m.playlistIndex));
      var y = !1;
      switch (v) {
        case "play":
          e._pauseDelay &&
            (clearTimeout(e._pauseDelay),
            (e._pauseDelay = null),
            1.2 < Math.abs(e._pauseTime - m.currentTime)
              ? (n(e, k, "seek"), (e._state = v))
              : n(e, k, "sendpause"));
          if ("play" === e._state) break;
          if ("seek" === e._state) {
            e._state = v;
            break;
          }
          "pause" === e._state
            ? p.pause && ((e.WT.clip_ev = "Resume"), (y = !0))
            : ("loading" === e._state && (n(e, k, "load"), n(e, k, "meta")),
              n(e, k, "meta"),
              (e.WT.clip_ev = "Play"),
              (e._lastBeacon = 0),
              (e.WT.clip_perc = null),
              (e.WT.clip_secs = null),
              (e.WT.clip_mins = null),
              (e._currentQuartile = 0),
              (e._lastQuartile = 0),
              (e._hasPlayed = !0),
              (y = "play" !== e._state));
          e._state = v;
          break;
        case "pause":
          e._pauseTime = m.currentTime;
          e._pauseDelay ||
            "seek" === e._state ||
            (e._pauseDelay = setTimeout(function () {
              e._pauseDelay = null;
              n(e, k, "sendpause");
            }, 2e3));
          break;
        case "sendpause":
          p.pause && (y = !0);
          e._state = "pause";
          e.WT.clip_ev = "Pause";
          break;
        case "ended":
          if ("compete" === e._state || !e._hasPlayed) {
            e._state = "complete";
            break;
          }
          k.info.currentTime = k.info.duration;
          n(e, k, "timeupdate");
          e.WT.clip_ev = "Complete";
          e._hasPlayed = !1;
          y = !0;
          e._state = v;
          break;
        case "buffering":
          e._pauseDelay
            ? (clearTimeout(e._pauseDelay),
              (e._pauseDelay = null),
              n(e, k, "seek"),
              p.buffering &&
                ((e.WT.clip_ev = "Buffering"), (y = !0), (e._state = "seek")))
            : p.buffering &&
              ((e.WT.clip_ev = "Buffering"), (y = !0), (e._state = v));
          break;
        case "unstarted":
          n(e, k, "updatemeta");
          e._lastBeacon = 0;
          e.WT.clip_perc = null;
          e.WT.clip_secs = null;
          e.WT.clip_mins = null;
          e._currentQuartile = 0;
          e._lastQuartile = 0;
          e.WT.dl = 40;
          break;
        case "cued":
          p.cued && ((e.WT.clip_ev = "Cued"), (y = !0), (e._state = v));
          break;
        case "timeupdate":
          e.WT.clip_secs = Math.floor(100 * m.currentTime) / 100;
          e.WT.clip_mins = Math.floor((100 * m.currentTime) / 60) / 100;
          e.WT.clip_vol = Math.floor(m.volume);
          0 < m.duration &&
            0 < m.currentTime &&
            (e.WT.clip_perc = Math.floor((m.currentTime / m.duration) * 100));
          if (
            0 === e._eventThrottle &&
            p.beacon &&
            m.currentTime > e._lastBeacon + p.beaconRate
          ) {
            e.WT.clip_ev = "Beacon";
            y = !0;
            e._lastBeacon = m.currentTime + p.beaconRate;
            break;
          }
          if (
            p.quartile &&
            (e.WT.clip_perc || 0) >= e._lastQuartile + p.pctInc
          ) {
            e._currentQuartile =
              Math.floor(e.WT.clip_perc / p.pctInc) * p.pctInc;
            e._currentQuartile > e._lastQuartile + p.pctInc &&
              ((m = JSON.parse(JSON.stringify(e))),
              (m._currentQuartile -= p.pctInc),
              n(m, k, "quartile"));
            n(e, k, "quartile");
            break;
          }
          0 < a.length && p.trackCallback(a.shift());
          0 < e._eventThrottle && e._eventThrottle--;
          break;
        case "quartile":
          e.WT.clip_perc = e._currentQuartile;
          e._lastQuartile = e._currentQuartile;
          e.WT.clip_ev = "Quartile";
          y = !0;
          break;
        case "seek":
          if (0 === m.currentTime && "play" !== e._state) {
            e._state = "Ended";
            break;
          }
          e._lastBeacon = m.currentTime;
          "ended" !== e._state &&
            p.seek &&
            0 === e._eventThrottle &&
            0 !== m.currentTime &&
            p.seek &&
            ((e.WT.clip_ev = "Seek"), (y = !0));
          e._state = "seek";
          e._eventThrottle = 10;
          break;
        case "load":
          k.loaded ||
            (p.load && ((e.WT.clip_ev = "Load"), (e.WT.dl = 40), (y = !0)),
            (e._lastBeacon = 0),
            (e.WT.clip_perc = null),
            (e.WT.clip_secs = null),
            (e.WT.clip_mins = null),
            (e._currentQuartile = 0),
            (e._lastQuartile = 0),
            (e._state = v),
            (k.loaded = !0));
          break;
        case "mute":
          p.mute && ((e.WT.clip_ev = m.isMuted ? "Mute" : "UnMute"), (y = !0));
          e._state = v;
          break;
        case "meta":
          n(e, k, "updatemeta");
          k.loaded || n(e, k, "load");
          p.loadMeta && ((e.WT.clip_ev = "Loadedmetadata"), (y = !0));
          break;
        case "updatemeta":
          isFinite(m.duration)
            ? ((e.WT.clip_duration = Math.floor(100 * m.duration) / 100),
              (e.WT.clip_duration_min =
                Math.floor((100 * m.duration) / 60) / 100),
              (e.WT.clip_mode = "FixedDuration"))
            : ((p.quartile = !1), (e.WT.clip_mode = "Stream"));
          p.bins &&
            isFinite(m.duration) &&
            ((y = Math.floor((m.duration + p.bins) / p.bins)),
            (e.WT.clip_duration_n = (y - 1) * p.bins + "-" + y * p.bins));
          m.videoUrl
            ? ((e.WT.clip_src = m.videoUrl),
              (e.WT.clip_ct = "youtube"),
              1 < m.videoUrl.match(/:\/\/(www\.)?(.[^/:]+)/).length
                ? (e.WT.clip_provider = m.videoUrl.match(
                    /:\/\/(www\.)?(.[^/:]+)/
                  )[2])
                : (e.WT.clip_provider = "unknown"))
            : ((e.WT.clip_ct = "unknown"), (e.WT.clip_provider = "self"));
          e.WT.clip_n = w.title
            ? w.title
            : m.videoUrl
            ? m.videoUrl.split("/").pop().split(".")[0]
            : "unknown";
          w.video_id && (e.WT.clip_id = w.video_id);
          m.playerType && (e.WT.clip_t = m.playerType);
          m.playbackQuality && (e.WT.clip_res = m.playbackQuality);
          e.WT.clip_vol = Math.floor(m.volume);
          y = !1;
          break;
        case "volume":
          p.volume &&
            0 === e._eventThrottle &&
            ((e.WT.clip_vol = Math.floor(m.volume)),
            (e.WT.clip_ev = "Volume"),
            (y = !0),
            (e._eventThrottle = 20));
          break;
        case "error":
          switch (k.error) {
            case 2:
              e.WT.clip_ev = "Error - request contains invalid parameter";
              break;
            case 5:
              e.WT.clip_ev =
                "Error - Content can not be played in a H%ML5 Player";
              break;
            case 100:
              e.WT.clip_ev = "Error - Requested video was not found";
              break;
            case 101:
            case 102:
              e.WT.clip_ev =
                "Error - Video can not be played in embeded players";
              break;
            default:
              e.WT.clip_ev = "Error - Unknown video error";
          }
          e.WT.dl = 42;
          y = !0;
      }
      if (y) {
        window.ORA &&
          window.ORA.Debug.debug(
            "YT Plugin queueing data for " + e.WT.clip_n + " : " + e.WT.clip_ev,
            "YT_PLUGIN"
          );
        y = {};
        m = Object.keys(e.WT);
        for (w = 0; w < m.length; w++)
          "number" === typeof e.WT[m[w]]
            ? (y["WT." + m[w]] = e.WT[m[w]].toString())
            : null === e.WT[m[w]]
            ? delete y["WT." + m[w]]
            : (y["WT." + m[w]] = e.WT[m[w]]);
        a.push({
          element: this,
          args: y,
          transform: p.transformCallback,
          data: e.WT,
        });
        if ("function" === typeof p.trackCallback)
          try {
            p.trackCallback(a.pop());
          } catch (z) {
            window.ORA &&
              ORA.Debug.info("YT Plugin Error with trackCallback", "YT_PLUGIN");
          }
      }
      e.WT.dl = 41;
    };
  ORA.analytics.plugins || (ORA.analytics.plugins = {});
  ORA.analytics.plugins.yt || (ORA.analytics.plugins.yt = {});
  ORA.analytics.plugins.yt.init = u;
  ORA.analytics.plugins.yt.reset = function () {
    for (var e in g) g.hasOwnProperty(e) && g[e].reset();
    q.pollId && (clearInterval(q.pollId), (q.pollId = null));
    g = [];
  };
  ORA.analytics.plugins.yt.ytVideoClass = l;
  ORA.analytics.plugins.yt.videoEventCallback = n;
  ORA.analytics.plugins.yt.getConfig = function () {
    return q;
  };
  ORA.analytics.plugins.yt.setConfig = function (e) {
    q = e;
  };
  ORA.analytics.plugins.yt.addPlayer = d;
  ORA.Debug.debug("YouTube Plugin registration start", "ANA");
  ORA.regPlugin("yt", u);
})();
(function () {
  var g = {
    fragCfg: {
      paramHandling: "none",
      prefix: "fragment",
      addAnchorName: "none",
      virtualDl: 26,
      testFragment: null,
      testPayload: null,
    },
    fragData: { fragName: null, parmObj: {}, fragFullStr: null },
    setConfig: function (a) {
      var b = g.fragCfg,
        c;
      for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
    },
    init: function (a, b) {
      var c = g,
        d = c.fragData,
        f = c.fragCfg,
        l = b || function () {};
      c.setConfig(a.config || {});
      void 0 !== f.enable &&
        !1 === f.enable &&
        (ORA.Debug.debug("Plugin is disabled", "ANA-fragment"), l());
      d.fragFullStr = f.testFragment || window.location.hash;
      d.fragFullStr
        ? (c.updateFragData(d.fragFullStr),
          ORA.analytics.addMutation("fragmentIdentifier", c.addFragMutation),
          f.virtualPageView &&
            (ORA.Debug.debug(
              "Sending virtual fragment page view",
              "ANA-fragment"
            ),
            ORA.click({
              data: { "wt.dl": f.virtualDl, "wt.anchor_name": d.fragName },
            })))
        : ORA.Debug.debug(
            "No fragments found for the URL on this page",
            "ANA-fragment"
          );
      l();
      ORA.Debug.debug("fragment Plugin init complete", "ANA-fragment");
    },
    updateFragData: function (a) {
      var b = g.fragData,
        c = [];
      a && (c = a.split("?"));
      ORA.Debug.debug("Updating Fragment data using: " + a, "ANA-fragment");
      b.fragFullStr = a;
      b.fragName = c[0];
      b.parmObj = 1 < c.length ? ORA.common.getQryParams(c[1]) : {};
    },
    addFragMutation: function (a) {
      g.isClickEvent(a.payload["wt.dl"]) && (a = g.applyClickEvent(a));
      return a;
    },
    isClickEvent: function (a) {
      var b = this.fragCfg,
        c = this.isClickEvent;
      c.applyClickEventOnly ||
        (c.applyClickEventOnly =
          void 0 === b.applyClickEventOnly || !1 === b.applyClickEventOnly);
      return void 0 !== a &&
        "21" === a &&
        void 0 !== b.applyClickEventOnly &&
        !0 === b.applyClickEventOnly
        ? !0
        : c.applyClickEventOnly;
    },
    applyClickEvent: function (a) {
      var b = this.fragData,
        c = this.fragCfg,
        d = "";
      "addPrefix" === c.paramHandling && (d = c.prefix + "_");
      for (var f in b.parmObj)
        b.parmObj.hasOwnProperty(f) && (a.payload[d + f] = b.parmObj[f]);
      switch (c.addAnchorName) {
        case "name":
          a.payload["wt.anchor_name"] = b.fragName;
          break;
        case "fullString":
          a.payload["wt.anchor_name"] = b.fragFullStr;
      }
      return a;
    },
    rmFragMutation: function () {
      ORA.analytics.rmMutation("fragmentIdentifier");
    },
  };
  ORA.Debug.debug("fragmentIdentifier - Registering Plugin", "ANA-fragment");
  ORA.regPlugin("fragment", g.init, { blockCollect: !0 });
  ORA.analytics.plugins || (ORA.analytics.plugins = {});
  ORA.analytics.plugins.fragment || (ORA.analytics.plugins.fragment = {});
  ORA.analytics.plugins.fragment.updateFragData = g.updateFragData;
  window.QUnit && (ORA.analytics.plugins.fragment = g);
})();
(function () {
  var g = {
    cache: [],
    pollId: null,
    playerBoundCount: 0,
    config: {
      load: !1,
      loadMeta: !1,
      pause: !0,
      quartile: !0,
      beacon: !1,
      beaconType: "auto",
      seek: !0,
      mute: !0,
      beaconRate: 30,
      pctInc: 25,
      volume: !0,
      bins: 15,
      fullscreen: !0,
      playerId:
        "div[id^\x3d'vjs_video']:not([id$\x3d'_api']):not([id*\x3d'_component'])",
      trackCallback: function (a) {
        ORA.click({ data: a.args });
      },
      nameCallback: null,
      preProcess: null,
      transformCallback: null,
      beaconCurve: { 60: 10, 120: 20, 300: 30, 420: 45, 600: 60, 1800: 150 },
      postMessage: !1,
      pollRate: 250,
      poll: !0,
      playerReadyTimeout: 20,
      maxBinds: 10,
      mediaTags: !0,
    },
    videoStates: function () {
      this.data = {
        ORA: {
          clip_n: null,
          clip_id: null,
          clip_secs: null,
          clip_mins: null,
          clip_ct: null,
          clip_perc: null,
          clip_ev: null,
          clip_duration: null,
          clip_t: "Flash",
          clip_player: "Brightcove vjs",
          clip_vol: null,
          clip_res: null,
          clip_player_res: null,
          clip_duration_n: null,
          clip_tv: "1.0.3",
          clip_mode: "FixedDuration",
          clip_player_ver: null,
          player_id: null,
          player_playlist_id: null,
          clip_video_id: null,
          clip_accountId: null,
          dl: 41,
        },
        _state: 0,
        _lastBeacon: 0,
        _lastQuartile: 0,
        _volSettle: -1,
        _seekSettle: -1,
        _loaded: !1,
        _duration: null,
        _timer: null,
        _start: !1,
        _sentLoad: !1,
        _myBeaconRate: 0,
        _isMuted: !1,
        player: null,
        _fullScreen: !1,
        _isValidMeta: !1,
        _waitMeta: !1,
      };
    },
    playEvent: function (a, b, c) {
      var d = this.config,
        f = !1;
      if (
        "play" === a.data._state ||
        !a.data._loaded ||
        a.data._waitMeta ||
        0 < a.data._seekSettle
      )
        return !1;
      !a.data._isValidMeta && b.isReady_ && this.bcCallback(a, "meta", c);
      "pause" === a.data._state || "stop" === a.data._state
        ? d.pause &&
          ((a.data.ORA.clip_ev = "Resume"), (f = !0), (a.data._state = "play"))
        : ((a.data.ORA.clip_ev = "Play"),
          (f = a.data._loaded = !0),
          (a.data._state = "play"),
          (a.data._lastBeacon = 0),
          (a.data._lastQuartile = 0),
          (a.data.ORA.clip_perc = "0"),
          (a.data.ORA.clip_secs = null),
          (a.data.ORA.clip_mins = null),
          (a.data.ORA.clip_res = b.height() + "x" + b.width()),
          (a.data._seekSettle = 55));
      a.data._start = !0;
      return f;
    },
    metaEvent: function (a, b, c) {
      var d = this.config,
        f = !1,
        l = b.mediainfo;
      if (void 0 === l) return f;
      var q = b.options();
      b.currentType() && (a.data.ORA.clip_ct = b.currentType());
      "string" === typeof b.techName_ &&
        (a.data.ORA.clip_t = b.techName_.toUpperCase());
      a.data.ORA.clip_id = l.id;
      a.data.ORA.player_id = q["data-player"];
      a.data.ORA.clip_player_ver = videojs.VERSION;
      a.data.ORA.player_playlist_id = q["data-playlist-id"];
      a.data.ORA.clip_video_id = l.id;
      a.data.ORA.clip_accountId = l.account_id;
      this.setMediaDuration(a, l);
      a.data._duration ||
        ((a.data.ORA.clip_mode = "Stream"),
        (a.data.ORA.clip_duration = null),
        (a.data._duration = null));
      a.data._myBeaconRate = d.beaconRate;
      this.setName(a, l, b);
      this.setBins(a);
      d.mediaTags &&
        void 0 !== l.tags &&
        0 < l.tags.length &&
        this.metaTags(a, l);
      a.data._fullScreen = b.isFullscreen();
      a.data._sentLoad ? (a.data._loaded = !0) : this.bcCallback(a, "load", c);
      a.data._isValidMeta = !0;
      a.data._waitMeta = !1;
      d.loadMeta &&
        ((f = !0), (a.data.ORA.clip_ev = "Meta"), (a.data.ORA.dl = 41));
      return f;
    },
    setMediaDuration: function (a, b) {
      b.duration
        ? ((a.data.ORA.clip_duration = Math.floor(100 * b.duration) / 100),
          (a.data._duration = b.duration))
        : ((a.data.ORA.clip_duration = null), (a.data._duration = null));
    },
    setName: function (a, b, c) {
      var d = this.config;
      a.data.ORA.clip_n =
        void 0 !== b.name
          ? b.name
          : b.src
          ? b.src.split("/")[b.src.split("/").length - 1].split(".")[0]
          : "not provided in meta";
      "function" === typeof d.nameCallback &&
        (a.data.ORA.clip_n = d.nameCallback(c));
    },
    setBins: function (a) {
      var b = this.config;
      if (b.bins && a.data._duration && 0 < a.data._duration) {
        var c = Math.floor((a.data._duration + b.bins) / b.bins);
        a.data.ORA.clip_durration_n = (c - 1) * b.bins + "-" + c * b.bins;
      }
    },
    metaTags: function (a, b) {
      try {
        for (var c = [], d = 0; d < b.tags.length; d++) {
          var f = b.tags[d].split("\x3d")[0];
          1 < b.tags[d].split("\x3d").length
            ? (a.data.ORA["clip_tag_" + f] = b.tags[d].split("\x3d")[1])
            : c.push(f);
        }
        0 < c.length && (a.data.ORA.clip_tags = c.join(";"));
      } catch (l) {}
    },
    pauseEvent: function (a, b, c, d) {
      b = this.config;
      var f = !1;
      if (0 < a.data._seekSettle) return f;
      if (97 < a.data.ORA.clip_perc) this.bcCallback(a, "complete", c);
      else {
        if (
          !a.data._loaded ||
          !a.data._start ||
          ("start" === a.data._state && "begin" === a.data._state)
        )
          return f;
        b.pause && (f = !0);
        a.data._state = d;
        a.data.ORA.clip_ev = "Pause";
      }
      return f;
    },
    completeEvent: function (a, b, c, d) {
      b = !1;
      a.data._state = d;
      this.bcCallback(a, "timeupdate", c);
      "Complete" !== a.data.ORA.clip_ev && (b = !0);
      a.data.ORA.clip_ev = "Complete";
      a.data._start = !1;
      a.data.ORA.clip_perc = 100;
      a.data._loaded = !1;
      a.data._isValidMeta = !1;
      return b;
    },
    errorEvent: function (a, b) {
      a.data.ORA.clip_ev = "Error ";
      a.data.ORA.clip_ev += b.error_.type;
      return !0;
    },
    progressEvent: function (a, b, c) {
      var d = this.config,
        f = b.currentTime(),
        l = !1;
      0 < a.data._seekSettle && --a.data._seekSettle;
      5 < Math.abs(Math.floor(100 * f) / 100 - a.data.ORA.clip_secs) &&
        "complete" !== a.data._state &&
        this.bcCallback(a, "seek", c);
      a.data.ORA.clip_secs = Math.floor(f);
      a.data.ORA.clip_mins = Math.floor((f / 60) * 100) / 100;
      if ((d.quartile && this.processQuartile(a)) || this.processBeacon(a, f))
        return !0;
      0 <= a.data._volSettle && --a.data._volSettle;
      l = this.checkEnded(a, b, c, l);
      this.setBins(a);
      this.isMuted(a, b, c);
      this.isPaused(a, b, c);
      this.setScreen(a, b, c);
      this.setVolume(a, b);
      return l;
    },
    isPaused: function (a, b, c) {
      a.data._start || b.paused() || this.bcCallback(a, "play", c);
    },
    isMuted: function (a, b, c) {
      b.muted() !== a.data._isMuted && this.bcCallback(a, "mute", c);
    },
    checkEnded: function (a, b, c, d, f) {
      b = f;
      "ended" === a.data._state &&
        ((a.data.ORA.clip_ev = "complete"),
        (a.data.ORA.clip_secs = "0"),
        (a.data.ORA.clip_mins = "0"),
        (a.data.ORA.clip_perc = null),
        (b = !1),
        (a.data._state = "ended"));
      return b;
    },
    setVolume: function (a, b) {
      void 0 !== b.volume() &&
        (b.volume() === isNaN
          ? (a.data.ORA.clip_vol = 100)
          : (a.data.ORA.clip_vol = Math.floor(1e3 * b.volume()) / 10));
    },
    setScreen: function (a, b, c) {
      a.data._fullScreen !== b.isFullscreen() &&
        0 < b.readyState() &&
        ((a.data._fullScreen = b.isFullscreen()),
        b.isFullscreen()
          ? this.bcCallback(a, "fullscreen", c)
          : this.bcCallback(a, "fullscreenexit", c));
    },
    processQuartile: function (a) {
      var b = this.config;
      if (a.data.ORA.clip_perc >= a.data._lastQuartile + b.pctInc)
        return (
          (a.data.ORA.clip_perc =
            Math.floor(a.data.ORA.clip_perc / b.pctInc) * b.pctInc),
          (a.data._lastQuartile = a.data.ORA.clip_perc),
          (a.data.ORA.clip_ev = "Quartile"),
          !0
        );
      "complete" === a.data._state && 100 !== a.data._lastQuartile
        ? ((a.data.ORA.clip_perc = 100),
          (a.data._lastQuartile = a.data.ORA.clip_perc),
          (a.data.ORA.clip_ev = "Quartile"),
          (a = !0))
        : (a = !1);
      return a;
    },
    beaconCurve: function (a) {
      var b = this.config,
        c;
      for (c in b.beaconCurve)
        if (b.beaconCurve.hasOwnProperty(c) && a <= c) return b.beaconCurve[c];
      return null;
    },
    processBeacon: function (a, b) {
      var c = this.config,
        d = !1,
        f =
          null !== a.data.ORA.clip_mode &&
          "stream" === a.data.ORA.clip_mode.toLowerCase(),
        l = this.beaconCurve(b);
      try {
        (("auto" === c.beaconType.toLowerCase() && f) ||
          "curve" === c.beaconType) &&
        null !== beaconCurve
          ? (0 === b && (a.data._lastBeacon = 0), (a.data._myBeaconRate = l))
          : (a.data._myBeaconRate = c.beaconRate);
      } catch (q) {
        a.data._myBeaconRate = c.beaconRate;
      }
      b > a.data._lastBeacon + a.data._myBeaconRate &&
        c.beacon &&
        ((a.data.ORA.clip_ev = "Beacon"),
        (d = !0),
        (a.data._lastBeacon += a.data._myBeaconRate));
      return d;
    },
    seekedEvent: function (a, b, c, d) {
      c = this.config;
      b = b.currentTime();
      var f = !1;
      a.data._lastBeacon = b;
      "ended" !== a.data._state &&
        c.seek &&
        0 === a.data._seekSettle &&
        0 !== b &&
        ((a.data.ORA.clip_ev = "Seek"), (f = !0), (a.data._seekSettle = 20));
      a.data._state = d;
      return f;
    },
    cancelseekEvent: function (a) {
      a.data._seekSettle = -1;
      return !1;
    },
    fullscreenEvent: function (a, b) {
      var c = !1;
      this.config.fullscreen &&
        b.isFullscreen() &&
        ((a.data.ORA.clip_ev = "Fullscreen"), (c = !0));
      return c;
    },
    loadstartEvent: function (a) {
      var b = !1;
      this.config.load && (b = a.data._sentLoad = !1);
      return b;
    },
    loadEvent: function (a) {
      var b = !1;
      this.config.load &&
        !a.data._sentLoad &&
        ((a.data.ORA.clip_ev = "Load"), (b = !0));
      a.data._sentLoad = !0;
      a.data._loaded = !0;
      return b;
    },
    fullscreenexitEvent: function (a, b) {
      var c = !1;
      this.config.fullscreen &&
        !b.isFullscreen() &&
        ((a.data.ORA.clip_ev = "Fullscreenexit"), (c = !0));
      return c;
    },
    muteEvent: function (a, b) {
      var c = !1;
      this.config.mute &&
        (b.muted()
          ? ((a.data.ORA.clip_ev = "Muted"), (a.data._isMuted = !0))
          : ((a.data.ORA.clip_ev = "UnMuted"), (a.data._isMuted = !1)),
        (a.data._isMuted = b.muted()),
        (c = !0));
      return c;
    },
    volumechangeEvent: function (a, b) {
      var c = !1;
      !this.config.volume ||
        -1 !== a.data._volSettle ||
        a.data._isMuted ||
        b.muted() ||
        ((a.data.ORA.clip_vol = Math.floor(1e3 * b.volume()) / 10),
        (a.data._volSettle = 20),
        (a.data.ORA.clip_ev = "Volume"),
        (c = !0));
      return c;
    },
    bcCallback: function (a, b, c) {
      var d = document.getElementById(c),
        f = window.videojs(c).player(),
        l = !1,
        q = f.currentTime();
      window.ORA &&
        ORA.Debug &&
        "progress" !== b &&
        "timeupdate" !== b &&
        ORA.Debug.debug("video_bc Plugin event " + b, "ANA");
      a.data.ORA.clip_perc =
        q && a.data._duration && 0 < a.data._duration
          ? Math.floor((q / a.data._duration) * 1e4) / 100
          : null;
      a.data.ORA.dl = 40;
      this.loadedmetadataEvent = this.metaEvent;
      this.endEvent = this.completeEvent;
      this.timeupdateEvent = this.progressEvent;
      this.seekEvent = this.seekedEvent;
      "undefined" !== typeof this[b + "Event"] &&
        (l = this[b + "Event"](a, f, c, b, l));
      l && this.sendTrackEvent(a, d);
    },
    sendTrackEvent: function (a, b) {
      var c = this.config;
      window.ORA &&
        ORA.Debug.info(
          "video_bc queueing data for " +
            a.data.ORA.clip_n +
            " : " +
            a.data.ORA.clip_ev,
          "ANA"
        );
      var d = {},
        f;
      for (f in a.data.ORA)
        a.data.ORA.hasOwnProperty(f) && this.setTagParm(a, f, d);
      this.cache.push({
        element: this,
        args: d,
        transform: c.transformCallback,
        data: a.data.ORA,
        videoEle: b,
      });
      if ("function" === typeof c.trackCallback)
        try {
          c.trackCallback(this.cache.pop());
        } catch (l) {
          window.ORA &&
            ORA.Debug.info("video_bc Error with trackCallback", "ANA");
        }
    },
    setTagParm: function (a, b, c) {
      "number" === typeof a.data.ORA[b]
        ? (("clip_secs" === b || "clip_perc" === b || "clip_mins" === b) &&
            0 === a.data.ORA[b]) ||
          isNaN(a.data.ORA[b])
          ? delete c["WT." + b]
          : (c["WT." + b] = a.data.ORA[b].toString())
        : null === a.data.ORA[b]
        ? delete c["WT." + b]
        : (c["WT." + b] = a.data.ORA[b]);
    },
    bindPlayer: function (a) {
      var b =
        "pause play end mute complete loadstart loadeddata resize progress seeked error meta timeupdate cancelseek volumechange loadedmetadata".split(
          " "
        );
      if (g.playerBoundCount > this.config.maxBinds)
        window.ORA && ORA.Debug.info("video_bc max binds reached", "ANA");
      else
        try {
          window.videojs(a).ready(function () {
            var c = new g.videoStates(),
              d = this,
              f = g.config;
            c.data.player = this;
            b.forEach(function (l) {
              (function () {
                this.config = f;
                d.on(l, function () {
                  g.bcCallback(c, l, a);
                });
              }.apply(this, [l, a, c, d, f]));
            });
            window.videojs(a).isReady_ && g.bcCallback(c, "meta", a);
            window.ORA &&
              ORA.Debug.info("video_bc Plugin bound to player " + a, "ANA");
          });
        } catch (c) {
          window.ORA &&
            ORA.Debug.info(
              "video_bc Plugin error binding to player " + a,
              "ANA"
            );
        }
      g.playerBoundCount++;
    },
    waitForPlayer: function (a) {
      var b = this,
        c = a;
      setTimeout(function () {
        void 0 !== window.videojs &&
        0 <
          document.querySelectorAll(
            g.config.playerId + ':not([data-wt\x3d"wtBound"])'
          ).length
          ? b.lookForPlayers()
          : "infinite" === c || 0 < c
          ? (isNaN(c) || c--, b.waitForPlayer(c))
          : window.ORA &&
            ORA.Debug.info(
              "video_bc Plugin time out waiting for player",
              "ANA"
            );
      }, 500);
    },
    pollPlayer: function (a) {
      var b = this;
      this.pollId = setInterval(function () {
        b.lookForPlayers();
      }, a);
    },
    reset: function () {
      if (this.pollId) {
        clearInterval(this.pollId);
        var a = document.querySelectorAll(g.config.playerId);
        if (0 < a.length)
          for (var b = 0; b < a.length; b++) a[b].setAttribute("data-wtbc", "");
      }
    },
    lookForPlayers: function () {
      try {
        var a = document.querySelectorAll(this.config.playerId);
      } catch (c) {
        window.ORA &&
          ORA.Debug.info(
            "video_bc Plugin error with selector " + this.config.playerId,
            "ANA"
          );
      }
      if (
        void 0 !== window.videojs &&
        0 <
          document.querySelectorAll(
            this.config.playerId + ":not([data-wtbc\x3d'Bound'])"
          ).length
      )
        for (var b = 0; b < a.length; b++)
          this.bindPlayer(a[b].id),
            a[b].setAttribute("data-wtbc", "Bound"),
            window.ORA &&
              ORA.Debug.info(
                "video_bc Plugin binding to player " + a[b].id,
                "ANA"
              );
    },
    bcInit: function (a) {
      a = a.config || {};
      this.bcInfo("video_bc Plugin init start");
      if (void 0 === a.enable || a.enable) {
        var b = ORA.common._getIEVer();
        if (b && 11 > b)
          this.bcInfo(
            "video_bc Plugin requires \x3e\x3d ie11, disabling plugin"
          );
        else {
          for (var c in this.config)
            this.config.hasOwnProperty(c) &&
              void 0 !== a[c] &&
              (this.config[c] = a[c]);
          this.reset();
          this.config.poll
            ? this.pollPlayer(this.config.pollRate)
            : (this.lookForPlayers(),
              this.waitForPlayer(this.config.playerReadyTimeout));
          this.bcInfo("video_bc Plugin init complete");
        }
      } else this.bcInfo("video_bc Plugin is disabled");
    },
    bcInfo: function (a) {
      window.ORA && ORA.Debug.info(a, "ANA");
    },
    init: function (a) {
      g.bcInit(a);
    },
  };
  window.ORA &&
    ORA.regPlugin &&
    (ORA.regPlugin("bc", g.init),
    window.ORA.Debug.info("video_html5 Plugin registration request", "ANA"),
    ORA.analytics.plugins || (ORA.analytics.plugins = {}),
    (ORA.analytics.plugins.bcVideo = g));
})();
(function () {
  var g = this,
    a = "onmousedown",
    b = "scroll",
    c = 50,
    d = null,
    f = "default",
    l = new Date().getTime(),
    q = 5,
    u = null,
    r = !1,
    n = function (h, t, x) {
      return parseInt(h, 10) >= parseInt(t, 10)
        ? x - 1
        : Math.floor((x / parseInt(t, 10)) * parseInt(h, 10));
    },
    e = function (h) {
      h = Math.round(Number(h));
      1 > h && (h = 1);
      100 < h && (h = 100);
      for (var t = {}, x = h; 100 >= x; ) (t[x] = !1), (x += h);
      return t;
    };
  u = e(q);
  var k = function () {
      var h = 0,
        t = 0;
      "number" === typeof window.pageYOffset
        ? ((t = window.pageYOffset), (h = window.pageXOffset))
        : document.body && document.body.scrollLeft && document.body.scrollTop
        ? ((t = document.body.scrollTop), (h = document.body.scrollLeft))
        : document.documentElement &&
          document.documentElement.scrollLeft &&
          document.documentElement.scrollTop &&
          ((t = document.documentElement.scrollTop),
          (h = document.documentElement.scrollLeft));
      return { x_offset: h, y_offset: t };
    },
    v = function (h) {
      var t = 0,
        x = 0;
      "number" === typeof window.innerWidth
        ? ((t = window.innerWidth), (x = window.innerHeight))
        : document.documentElement &&
          document.documentElement.clientWidth &&
          document.documentElement.clientHeight
        ? ((t = document.documentElement.clientWidth),
          (x = document.documentElement.clientHeight))
        : document.body &&
          document.body.clientWidth &&
          document.body.clientHeight &&
          ((t = document.body.clientWidth), (x = document.body.clientHeight));
      var A = k();
      return h.clientX > t ||
        0 > h.clientX ||
        h.clientY > x ||
        0 > h.clientY ||
        "NaN" === h.clientX ||
        "NaN" === A.x_offset ||
        "NaN" === t ||
        "Nan" === x
        ? {}
        : { x: h.clientX + A.x_offset, y: h.clientY + A.y_offset };
    },
    p = {},
    m = function (h) {
      var t = h.target || h.srcElement,
        x = d(t);
      if (document.querySelector) {
        x = document.querySelector(x).getBoundingClientRect();
        var A = x.width;
        t = x.height;
        var B = k(),
          C = B.x_offset;
        B = B.y_offset;
        B = B + h.clientY - (B + x.top);
        h = n(C + h.clientX - (C + x.left), A, c);
        t = n(B, t, c);
        return { x: h, y: t };
      }
      return { x: t.clientX, y: t.clientY };
    },
    w = function (h) {
      var t = new Date().getTime();
      h["wt.hm_timeSpan"] = t - l;
    },
    y = function (h) {
      try {
        if (
          window &&
          window.MMExperience &&
          "object" === typeof window.MMExperience &&
          r
        ) {
          for (
            var t = Object.getOwnPropertyNames(window.MMExperience).sort(),
              x = "",
              A = 0;
            A < t.length;
            A++
          ) {
            var B = t[A],
              C = "";
            if (window.MMExperience.hasOwnProperty(B)) {
              for (
                var E = window.MMExperience[B],
                  D = Object.getOwnPropertyNames(E).sort(),
                  F = E,
                  H = "",
                  G = 0;
                G < D.length;
                G++
              ) {
                var I = D[G],
                  K = F[I],
                  J = "";
                G + 1 < D.length && (J = "|");
                H += "" + I.toLowerCase() + ":" + K.toLowerCase() + J;
              }
              C = H;
            }
            F = "";
            A + 1 < t.length && (F = ",");
            x += "" + B.toLowerCase() + "\x3d" + C + F;
          }
          h["wt.hm_experience"] = x;
        }
      } catch (L) {}
    };
  this.genClickData = function (h) {
    var t = h || window.event;
    (t && (t.target || t.srcElement)) ||
      ORA.Debug.debug(
        "WARNING: defaultClickHandler unable to detect target element, not sending heatmap track",
        "ANA-hm"
      );
    var x = t.target || t.srcElement;
    (ORA.hasVal(x.offsetLeft) && ORA.hasVal(t.clientX)) ||
      ORA.Debug.debug(
        "WARNING: defaultClickHandler event is missing click coords or target dom object missing offset, not sending heatmap track",
        "ANA-hm"
      );
    var A = v(t),
      B = d(x),
      C = k();
    (A && B && C) ||
      ORA.Debug.debug(
        "WARNING: defaultClickHandler missing scroll or targetId, not sending heatmap track",
        "ANA-hm"
      );
    h = m(h);
    var E = function () {
      var D = t.target || t.srcElement;
      return { h: D.clientHeight || 0, w: D.clientWidth || 0 };
    };
    x = {
      "wt.hm_winx": t.clientX,
      "wt.hm_winy": t.clientY,
      "wt.hm_targetx": x.offsetLeft,
      "wt.hm_targety": x.offsetTop,
      "wt.hm_scrolldx": C.x_offset,
      "wt.hm_scrolldy": C.y_offset,
      "wt.hm_x": A.x - x.offsetLeft,
      "wt.hm_y": A.y - x.offsetTop,
      "wt.hm_width": x.clientWidth,
      "wt.hm_height": x.clientHeight,
      "wt.hm_scaled_x": h.x,
      "wt.hm_scaled_y": h.y,
      "wt.hm_target_id": B,
      "wt.hm_targetw": E().w,
      "wt.hm_targeth": E().h,
      "wt.hm_resolution": c,
      "wt.hm_selectorType": f,
      "wt.dl": 125,
    };
    w(x);
    y(x);
    return x;
  };
  this.getHorzScroll = function (h, t) {
    return "CSS1Compat" === document.compatMode
      ? h.clientHeight || window.innerHeight || 0
      : t.clientHeight || 0;
  };
  this.genScrollData = function (h) {
    var t = document.documentElement,
      x = document.body,
      A = getHorzScroll(t, x);
    t = Number(
      ((A + (window.pageYOffset || (t && t.scrollTop) || x.scrollTop)) /
        Math.max(
          x.scrollHeight,
          t.scrollHeight,
          x.offsetHeight,
          t.offsetHeight,
          x.clientHeight,
          t.clientHeight
        )) *
        100
    ).toFixed(0);
    switch (h) {
      case "regular":
        if ("boolean" !== typeof u[t] || u[t]) return null;
        u[t] = !0;
        break;
      case "start":
        break;
      default:
        return null;
    }
    h = { "wt.hm_scrollDepth": t, "wt.hm_scrollDepthType": h, "wt.dl": 125 };
    w(h);
    y(h);
    return h;
  };
  g.setEventClickName = function (h) {
    a = h;
  };
  g.setEventScrollName = function (h) {
    b = h;
  };
  g.getEventClickName = function () {
    return a;
  };
  g.getEventScrollName = function () {
    return b;
  };
  g.removeClickHandler = function (h) {
    ORA.removeDOMEvent(document, ORA.getSafeEventName(document, a), h);
  };
  g.removeScrollHandler = function (h) {
    ORA.removeDOMEvent(document, ORA.getSafeEventName(document, b), h);
  };
  g.addClickHandler = function (h) {
    ORA.addDOMEvent(document, ORA.getSafeEventName(document, a), h);
  };
  g.addScrollHandler = function (h) {
    ORA.addDOMEvent(document, ORA.getSafeEventName(document, b), h);
  };
  g.replaceDefaultClickHandler = function (h) {
    g.removeClickHandler(g.defaultClickHandler);
    g.addClickHandler(h);
  };
  g.replaceDefaultScrollHandler = function (h) {
    g.removeScrollHandler(g.defaultScrollHandler);
    g.addScrollHandler(h);
  };
  g.defaultClickHandler = function (h) {
    try {
      var t = g.genClickData(h);
      ORA.Debug.trace(ORA.common.JSONPrettify(t));
      ORA.click({ data: t });
    } catch (x) {
      ORA.Debug.error(
        "WARNING: click heatmap failed to track",
        "013",
        x,
        "clickHeatmap defaultHandler"
      );
    }
  };
  g.defaultScrollHandler = function () {
    try {
      if (!defaultScrollHandler.caller && r) {
        var h = g.genScrollData("regular");
        h &&
          (ORA.Debug.trace(ORA.common.JSONPrettify(h)), ORA.click({ data: h }));
      }
    } catch (t) {
      ORA.Debug.error(
        "WARNING: scroll heatmap failed to track",
        "13",
        t,
        "scrollHeatmap defaultHandler"
      );
    }
  };
  var z = function () {
    var h = g.genScrollData("start");
    h && (ORA.Debug.trace(ORA.common.JSONPrettify(h)), ORA.click({ data: h }));
  };
  g.reset = function () {
    g.removeClickHandler(g.defaultClickHandler);
    g.removeScrollHandler(g.defaultScrollHandler);
  };
  g.setup = function (h) {
    h = h || {};
    p = {
      default: ORA.common.getObjId,
      strict: ORA.common.getObjIdStrict,
      classes: ORA.common.getObjIdClasses,
    };
    h.selectorEngineType && (f = h.selectorEngineType);
    d = p.hasOwnProperty(f) ? p[f] : p["default"];
    h.clickEventName && (a = h.clickEventName);
    h.resolution && (c = h.resolution);
    h.scrollStep && ((q = h.scrollStep), (u = e(q)));
    h.maxymiserEnable && (r = h.maxymiserEnable);
    g.addClickHandler(g.defaultClickHandler);
    g.addScrollHandler(g.defaultScrollHandler);
  };
  ORA.Debug.debug("heatmap - Registering Plugin", "ANA-hm");
  ORA.regPlugin("heatmap", function (h, t) {
    ORA.Debug.debug("heatmap - init start", "ANA-hm");
    var x = t || function () {};
    if (h && h.config && void 0 !== h.config.enable && !h.config.enable)
      ORA.Debug.info("heatmap Plugin is disabled", "ANA"), x();
    else {
      var A = ORA.analytics.getIEVer();
      A && 9 > A
        ? (ORA.Debug.info(
            "heatmap Plugin requires \x3e IE9, disabling plugin",
            "ANA"
          ),
          x())
        : (g.setup(h.config),
          ORA.Debug.debug("heatmap - Starting scroll tracking", "ANA-hm"),
          document &&
          document.body &&
          ("complete" === document.readyState ||
            "interactive" === document.readyState)
            ? z()
            : document.addEventListener("DOMContentLoaded", function () {
                z();
              }),
          x(),
          ORA.Debug.debug("heatmap - init complete ", "ANA-hm"));
    }
  });
  ORA.analytics.plugins || (ORA.analytics.plugins = {});
  ORA.analytics.plugins.heatmap || (ORA.analytics.plugins.heatmap = {});
  ORA.analytics.plugins.heatmap = g;
})();
(function () {
  var g = { readCookies: [], enable: !0 },
    a = {},
    b = {},
    c,
    d = function (u, r, n) {
      -1 < u.indexOf(r.parseOn || ":") || -1 < u.indexOf(r.parseLv || "\x3d")
        ? u.split(r.parseOn || ":").forEach(function (e) {
            c[n] || (c[n] = {});
            c[n][e.substr(0, e.indexOf(r.parseLv || "\x3d"))] = e.substr(
              e.indexOf(r.parseLv || "\x3d") + 1
            );
          })
        : (c[n] = u);
    },
    f = function (u, r, n) {
      var e = !0;
      n && void 0 !== n.persist && (e = n.persist);
      e ? (a[r] = u) : (b[r] = u);
    },
    l = function (u) {
      for (var r in a) a.hasOwnProperty(r) && u.setParam(r, a[r]);
      if ("seed message" === u.desc)
        for (var n in b) b.hasOwnProperty(n) && u.setParam(n, b[n]);
    },
    q = function (u) {
      for (var r in g) g.hasOwnProperty(r) && void 0 !== u[r] && (g[r] = u[r]);
    };
  ORA.Debug.info("cookie cutter start registration", "ANA-cookieCutter");
  ORA.regPlugin("cookieCutter", function (u, r) {
    ORA.Debug.info("cookie cutter start init", "ANA-cookieCutter");
    var n = r || function () {},
      e = ORA.getIEVer();
    if (e && 9 > e)
      return (
        ORA.Debug.info(
          "requires \x3e\x3d ie9, disabling plugin",
          "ANA-cookieCutter"
        ),
        n()
      );
    q(u.config);
    if (!g.enable)
      return (
        ORA.Debug.info("cookie cutter is disables", "ANA-cookieCutter"), n()
      );
    Object.values ||
      (Object.values = function (k) {
        var v = [],
          p;
        for (p in k) k.hasOwnProperty(p) && v.push(k[p]);
        return v;
      });
    g.readCookies.forEach(function (k) {
      var v = Object.keys(k.cookie).shift(),
        p = Object.values(k.cookie).shift(),
        m = k.options;
      c || (c = {});
      if (void 0 === c[v]) {
        var w = document.cookie.split(";");
        m = m || {};
        for (var y = w.length - 1; 0 <= y; y--) {
          var z = w[y]
              .substr(0, w[y].indexOf("\x3d"))
              .replace(/^\s+|\s+$/g, ""),
            h = w[y].substr(w[y].indexOf("\x3d") + 1);
          v && z === v && d(h, m, z);
        }
      }
      w = c[v] || "";
      ORA.Debug.debug("cookieCutter looking at: " + v);
      if (w)
        if (((k = k.options), "object" === typeof w))
          for (var t in w)
            w.hasOwnProperty(t) &&
              void 0 !== p[t] &&
              (f(w[t], p[t], k),
              ORA.Debug.debug(
                "cookie cutter found target " +
                  p[t] +
                  "\x3d" +
                  w[t] +
                  " - " +
                  JSON.stringify(k)
              ));
        else
          f(w, p, k),
            ORA.Debug.debug(
              "cookie cutter found target " +
                w +
                "\x3d" +
                p +
                " - " +
                JSON.stringify(k)
            );
    });
    ORA.analytics.addMutation("cookiecutter", l);
    ORA.Debug.info("cookie cutter complete init", "ANA-cookieCutter");
    return n();
  });
  ORA.Debug.info(
    "cookie cutter start registration complete",
    "ANA-cookieCutter"
  );
  ORA.analytics.plugins.cookieCutter = {};
  ORA.analytics.plugins.cookieCutter.testNode = function (u) {
    return eval(u);
  };
  ORA.analytics.plugins.cookieCutter.t1 = function () {
    return g;
  };
  ORA.analytics.plugins.cookieCutter.t2 = function () {
    return c;
  };
  ORA.analytics.plugins.cookieCutter.t3 = function () {
    return { persist: a, session: b };
  };
  ORA.analytics.plugins.cookieCutter.t3 = function () {
    a = {};
    b = {};
  };
})();
(function () {
  var g,
    a,
    b,
    c,
    d = {
      enable: !0,
      cookieDays: 365,
      cookieName: "ORAPERSIST",
      cookieDomain: "",
      params:
        "dcsvid infy riid rid customer_id elqCID elq_cid elq_mid product".split(
          " "
        ),
      defPrefix: "DCSext",
      priority: 100,
      useMostRecent: !0,
      lowerCaseValues: !0,
    },
    f = new (function () {
      var r = this;
      r.getQueryParamsMap = function (n, e) {
        var k = ORA.common.extendObject({}),
          v = [],
          p = n,
          m = e || d;
        try {
          k = JSON.parse(n);
        } catch (h) {
          "string" === typeof p &&
            ((p = p.replace(/^[&\?\s]+/i, "")), (v = p.split("\x26")));
          for (var w = 0, y = v.length; w < y; ++w) {
            p = v[w];
            p = p.split("\x3d");
            var z = p[0].toLowerCase();
            "" !== z &&
              (k[z] = m.lowerCaseValues
                ? decodeURIComponent(p[1].toLowerCase())
                : decodeURIComponent(p[1]));
          }
        }
        return k;
      };
      r.getValueOfExistingParam = function (n, e, k, v, p) {
        var m = null,
          w,
          y = p || d;
        n.forEach(function (z, h) {
          if (h.toLowerCase() === k || h.toLowerCase() === e)
            w =
              y.lowerCaseValues && "string" === typeof z ? z.toLowerCase() : z;
        });
        w
          ? ((m = w),
            ORA.Debug.debug(
              "Taking current value from QRY: " + k + '\x3d"' + m + '"',
              "ANA - pp"
            ))
          : null !== v.getParam(k) &&
            ((m = v.getParam(k)),
            ORA.Debug.debug(
              "Taking current value from dcsMsg: " + k + '\x3d"' + m + '"',
              "ANA - pp"
            ));
        m &&
          ORA.Debug.debug(
            "Param (current value): " + k + '\x3d"' + m + '"',
            "ANA - pp"
          );
        return m;
      };
      r.getParamValue = function (n, e, k, v, p) {
        n = r.getValueOfExistingParam(n, e, k, v);
        k = r.getQueryParam(p, k);
        null === n ||
          "undefined" === n ||
          (!d.useMostRecent && null !== k) ||
          (k = n);
        return k;
      };
      r.getQueryParam = function (n, e) {
        var k = null;
        n.forEach(function (v, p) {
          p.toLowerCase() === e && (k = v);
        });
        return k;
      };
      r.applyPreviouslyPersistedParamsValues = function (n, e, k) {
        for (
          var v = "",
            p = ORA.common.extendObject({}),
            m = 0,
            w = d.params.length;
          m < w;
          ++m
        ) {
          var y = d.params[m],
            z = y;
          ORA.Debug.info("Processing param: " + y, "ANA - pp");
          e[y] = r.getParamValue(n, y, z, k, e);
          var h = r.getQueryParam(e, y);
          h &&
            (ORA.Debug.info(
              "Overriding MSG value with saved value: " + z + '\x3d"' + h + '"',
              "ANA - pp"
            ),
            k.setParam(z, h, !0),
            (p[z] = h));
          (z = r.getQueryParam(n, y) || r.getQueryParam(n, z)) &&
            ORA.common.QueryParamCache.set(y, z);
        }
        p.forEach(function (t, x) {
          v = v + "\x26" + x + "\x3d" + encodeURIComponent(t);
        });
        return (v = v.replace(/^[&\?\s]+/i, ""));
      };
      r.arrayIndexOf = function (n, e) {
        if (!ORA.analytics.isArray(n)) return -1;
        if (Array.prototype.indexOf) return n.indexOf(e);
        for (var k = 0, v = n.length; k < v; k++) if (n[k] === e) return k;
        return -1;
      };
    })(),
    l = function () {
      this.getCookieDomain = function () {
        var r = "",
          n = d.cookieDomain;
        n == location.hostname && (n = "");
        b && b.FPCConfig && b.FPCConfig.domain && (r = b.FPCConfig.domain);
        ORA.Debug.debug("sDCSDomain: " + r, "ANA - pp");
        n && "." === n.charAt(0) && (n = n.slice(1));
        return d.cookieDomain
          ? n
          : r
          ? r
          : ORA.cookieMgr.checkCookieOnDomainAndGetTLDomain();
      };
    },
    q = function () {
      this.savePersistedParams = function (r, n, e, k) {
        var v = new Date();
        v.setDate(v.getDate() + k);
        k = ";domain\x3d" + e + ";path\x3d/;expires\x3d" + v.toUTCString();
        e || (k = ";path\x3d/;expires\x3d" + v.toUTCString());
        g(r, n, k);
      };
      this.getPersistedParams = function (r) {
        var n = ORA.common.extendObject({});
        r = a(r);
        return null === r ? n : (n = f.getQueryParamsMap(r));
      };
    };
  var u = new (function () {
    var r = this,
      n = new l(),
      e = new q();
    r.ppMutation = function (k) {
      var v = ORA.common.QueryParamCache.getCache(),
        p = e.getPersistedParams(d.cookieName);
      ORA.Debug.debug("QRY params: " + JSON.stringify(v), "ANA - pp");
      k = f.applyPreviouslyPersistedParamsValues(v, p, k);
      c ||
        ((c = n.getCookieDomain()),
        ORA.Debug.debug("Cookie domain to use: " + c, "ANA - pp"));
      ORA.Debug.debug(
        "Saving persistent params in cookie: " +
          d.cookieName +
          '\x3d"' +
          k +
          '"',
        "ANA - pp"
      );
      e.savePersistedParams(d.cookieName, k, c, d.cookieDays);
    };
    r.ppInit = function (k, v) {
      var p = k.config;
      if (p) {
        for (var m in p) p.hasOwnProperty(m) && (d[m] = p[m]);
        p = [];
        m = 0;
        for (var w = d.params.length; m < w; ++m)
          (d.params[m] = d.params[m].toLowerCase()), p.push(d.params[m]);
        d.params = p;
      }
      ORA.Debug.info("initializing...", "ANA - pp");
      d.enable
        ? d.params && 0 !== d.params.length
          ? (ORA.Debug.debug(
              "params to persist: " + d.params.join(", "),
              "ANA - pp"
            ),
            (g = ORA.analytics.setCookie),
            (a = ORA.analytics.getCookieRaw),
            (b = ORA.analytics.dcsRef),
            ORA.analytics.addMutation("persistParams", r.ppMutation, 3))
          : ORA.Debug.debug(
              "no persist params defined - will not run",
              "ANA - pp"
            )
        : ORA.Debug.debug("disabled in config - will not run", "ANA - pp");
      d.blockCollect && v && v();
    };
  })();
  ORA.regPlugin("pp", u.ppInit);
  ORA.plugins || (ORA.plugins = {});
  ORA.plugins.pp || (ORA.plugins.pp = {});
  ORA.Debug.debug("PP: Plugin initialized", "ANA - pp");
  ORA.plugins.pp.Domain = new l();
  ORA.plugins.pp.PersistParams = new q();
  ORA.plugins.pp.OraclePP = u;
  ORA.plugins.pp.helper = f;
  ORA.plugins.pp.config = d;
})();
ORA.Debug.debug("PP: Loading Plugin", "ANA");
ORA.setExecuteState("analytics", "ready");
ORA.fireEvent(
  new ORA.Event(ORA.Event.ANA_LOAD_COMPLETE, ORA.Event.STATUS_SUCCESS),
  !0
);
