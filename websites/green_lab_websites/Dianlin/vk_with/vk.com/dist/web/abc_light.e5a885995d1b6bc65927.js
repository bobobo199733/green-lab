(() => {
  "use strict";
  var __webpack_modules__ = {
      866282: (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          AdsLight: () => AdsLight,
        });
        var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(530522),
          core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(66108),
          core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(296253),
          core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(751876),
          core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(820075),
          core_js_modules_es6_array_slice__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(850110),
          core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(319371),
          _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(787481),
          _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(40906),
          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(49535),
          _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(635676),
          _web_lib_scroll__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(803834),
          _shared_lib_cookies__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(376567),
          _shared_lib_parse__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(520820),
          _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(695724),
          _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(315544),
          _web_lib_tooltip_utils__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(376852),
          _shared_lib_site__WEBPACK_IMPORTED_MODULE_17__ =
            __webpack_require__(961540),
          AdsLight = {},
          isVkDomain =
            document.domain ===
            (0, _shared_lib_site__WEBPACK_IMPORTED_MODULE_17__.getHostName)(),
          uaLight = navigator.userAgent.toLowerCase(),
          browserLight = {
            msie6: /msie 6/i.test(uaLight) && !/opera/i.test(uaLight),
            msie7: /msie 7/i.test(uaLight) && !/opera/i.test(uaLight),
            msie8: /msie 8/i.test(uaLight) && !/opera/i.test(uaLight),
          };
        isVkDomain &&
          ("__adsLoaded" in window ||
            (window.__adsLoaded = (0,
            _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)()),
          (window.AdsLight = AdsLight)),
          (AdsLight.init = function () {
            window.vk__adsLight ||
              ((window.vk__adsLight = {}),
              AdsLight.initUserHandlers(),
              (vk__adsLight.widgetsIds = {}),
              (vk__adsLight.observersInited = !1),
              (vk__adsLight.publishTimers = {}),
              (vk__adsLight.windowId = Math.round(1e9 * Math.random() + 1)),
              (vk__adsLight.activeTab = 0),
              (vk__adsLight.userEventTime = 0),
              (vk__adsLight.wrapVisible = !1),
              (vk__adsLight.imagesTimer = !1),
              (vk__adsLight.reloadTimer = !1),
              (vk__adsLight.updateBlockTimer = !1),
              (vk__adsLight.adsCanShow = 1),
              (vk__adsLight.adsSection = !1),
              (vk__adsLight.adsShowed = ""),
              (vk__adsLight.adsShowedHash = +new Date()),
              (vk__adsLight.adsParams = !1),
              (vk__adsLight.updateProgress = 0),
              (vk__adsLight.adsShowedAll = {}),
              (vk__adsLight.loadComplete = !1),
              (vk__adsLight.loaderParams = !1),
              (vk__adsLight.adsIdsApplyNeeded = {}),
              (vk__adsLight.adsIdsApplyProcess = []),
              (vk__adsLight.adsIdsApplyTimer = !1),
              (vk__adsLight.adsIdsApplyLocked = !1),
              "onfocusin" in window
                ? window.addEventListener
                  ? (window.addEventListener(
                      "focusin",
                      vk__adsLight.userHandlers.onFocusWindow,
                      !1
                    ),
                    window.addEventListener(
                      "focusout",
                      vk__adsLight.userHandlers.onBlurWindow,
                      !1
                    ))
                  : window.attachEvent &&
                    (window.attachEvent(
                      "onfocusin",
                      vk__adsLight.userHandlers.onFocusWindow
                    ),
                    window.attachEvent(
                      "onfocusout",
                      vk__adsLight.userHandlers.onBlurWindow
                    ))
                : window.addEventListener &&
                  (window.addEventListener(
                    "focus",
                    vk__adsLight.userHandlers.onFocusWindow,
                    { capture: !0, passive: !0 }
                  ),
                  window.addEventListener(
                    "blur",
                    vk__adsLight.userHandlers.onBlurWindow,
                    { capture: !0, passive: !0 }
                  )),
              document.addEventListener
                ? (window.addEventListener(
                    "scroll",
                    vk__adsLight.userHandlers.onScrollWindow,
                    { capture: !0, passive: !0 }
                  ),
                  document.addEventListener(
                    "mousedown",
                    vk__adsLight.userHandlers.onMouseDownDocument,
                    { capture: !0, passive: !0 }
                  ))
                : document.attachEvent &&
                  (window.attachEvent(
                    "onscroll",
                    vk__adsLight.userHandlers.onScrollWindow
                  ),
                  document.attachEvent(
                    "onmousedown",
                    vk__adsLight.userHandlers.onMouseDownDocument
                  )),
              !isVkDomain &&
                window.VK &&
                VK.addCallback &&
                VK.addCallback("adsPublish", AdsLight.handleEvent),
              (vk__adsLight.yaDirectLoaded = !1),
              (vk__adsLight.yaDirectAdActive = !1),
              (vk__adsLight.yaDirectLoadTries = 0),
              (vk__adsLight.gadxLoaded = !1),
              (vk__adsLight.gadxLoading = !1),
              (vk__adsLight.gadxLoadTries = 0),
              (vk__adsLight.showWmgAd = !0),
              (vk__adsLight.wmgLoading = !1),
              (vk__adsLight.wmgLoadTries = 0),
              (vk__adsLight.GPTLoading = !1),
              (vk__adsLight.GPTLoaded = !1),
              (vk__adsLight.GPTLoadTries = 0),
              vk__adsLight.userHandlers.onInit(!0));
          }),
          (AdsLight.initUserHandlers = function () {
            vk__adsLight.userHandlers = {
              onInit: function (_) {
                AdsLight.initObservers(),
                  _ && AdsLight.handleEvent("ads.onEvent", "onInit", 0);
                _ || AdsLight.loadAds();
                document.hasFocus && document.hasFocus() && s(!0);
              },
              onHasFocus: s,
              onFocusWindow: function (e) {
                e && AdsLight.handleEvent("ads.onEvent", "onFocusWindow", 0);
                if (_) return;
                (_ = !0),
                  (t =
                    (window.vkNow &&
                      (0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)()) ||
                    0),
                  (vk__adsLight.userEventTime =
                    (window.vkNow &&
                      (0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)()) ||
                    0),
                  o();
              },
              onBlurWindow: function (e) {
                if (
                  ((_ = !1),
                  window.vkNow &&
                    (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() -
                      t <
                      1e3)
                )
                  return;
                e && AdsLight.handleEvent("ads.onEvent", "onBlurWindow", 0);
                vk__adsLight.activeTab =
                  (window.vkNow &&
                    -(0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)()) ||
                  0;
              },
              onScrollWindow: function _(e, t) {
                if (e && !t)
                  return (
                    clearTimeout(d),
                    void (d = setTimeout(function () {
                      _(e, !0);
                    }, 100))
                  );
                e && AdsLight.handleEvent("ads.onEvent", "onScrollWindow", 0);
                (vk__adsLight.userEventTime =
                  (window.vkNow &&
                    (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)()) ||
                  0),
                  o(),
                  isVkDomain &&
                    window.vkNow &&
                    window.vk &&
                    vk.ads_rotate_interval &&
                    s() &&
                    (clearTimeout(i),
                    (i = setTimeout(function () {
                      s() && ((window.__adsLoaded = 0), AdsLight.updateBlock());
                    }, 10)));
                isVkDomain && AdsLight.applyAds();
                function s() {
                  return (
                    ("web" === vk__adsLight.adsSection &&
                      (0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() -
                        window.__adsLoaded >=
                        vk.ads_rotate_interval) ||
                    (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() -
                      window.__adsLoaded >=
                      5 * vk.ads_rotate_interval
                  );
                }
              },
              onMouseDownDocument: function (_) {
                _ &&
                  AdsLight.handleEvent("ads.onEvent", "onMouseDownDocument", 0);
                if (
                  ((vk__adsLight.userEventTime =
                    (window.vkNow &&
                      (0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)()) ||
                    0),
                  o(),
                  !_)
                )
                  return;
                var e = _.target;
                for (; e && "A" != e.tagName && !e.onclick; ) e = e.parentNode;
                if (!e) return;
                a(!0);
              },
              onMouseDownDocumentAction: a,
              onActiveTab: o,
            };
            var _ = !1,
              e = !1,
              t = !1,
              i = !1,
              d = !1;
            function s(_) {
              _ && AdsLight.handleEvent("ads.onEvent", "onHasFocus", 0), o();
            }
            function a(_) {
              _ &&
                AdsLight.handleEvent(
                  "ads.onEvent",
                  "onMouseDownDocumentAction",
                  0
                ),
                clearTimeout(i),
                (e = !0),
                setTimeout(function () {
                  e = !1;
                }, 10);
            }
            function o(_) {
              function t() {
                return (
                  (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() -
                    window.__adsLoaded >=
                  vk.ads_rotate_interval
                );
              }
              isVkDomain &&
                window.vkNow &&
                window.vk &&
                vk.ads_rotate_interval &&
                !e &&
                vk__adsLight.activeTab < 0 &&
                (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() +
                  vk__adsLight.activeTab >=
                  15e3 &&
                t() &&
                (clearTimeout(i),
                (i = setTimeout(function () {
                  t() && ((window.__adsLoaded = 0), AdsLight.updateBlock());
                }, 10))),
                (vk__adsLight.activeTab = 1);
            }
          }),
          (AdsLight.initWeb = function (_, e, t, i) {
            if (((vk__adsLight.adsSection = _), top !== window)) {
              var d = {
                adsPublish: function () {
                  AdsLight.handleEvent.apply(AdsLight, arguments);
                },
                onAdsAttached: function () {
                  vk__adsLight.rpc.callMethod("publish", "ads.subscribeEvents");
                },
                onInit: function () {
                  vk__adsLight.rpc.callMethod("publish", "ads.subscribeEvents");
                },
              };
              try {
                vk__adsLight.rpc = new fastXDM.Client(d);
                var s =
                    window.stDeps && window.stDeps["/dist/web/ads_light.js"],
                  a = ["/dist/web/ads_light.js"];
                s && (a = s.map((_) => `/${_}`)),
                  vk__adsLight.rpc.callMethod(
                    "newAdsOnInitLoader",
                    JSON.stringify(a)
                  ),
                  (vk__adsLight.loaderParams = e),
                  (vk__adsLight.adsParamsExport = i);
              } catch (_) {
                (0, _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_7__.debugLog)(
                  _
                );
              }
            }
          }),
          (AdsLight.initObservers = function () {
            if (
              window.VK &&
              VK.Observer &&
              VK.Observer.subscribe &&
              !vk__adsLight.observersInited
            )
              for (var _ in ((vk__adsLight.observersInited = !0),
              VK.Observer.subscribe(
                "ads.isVisibleBlockWrap",
                e("ads.isVisibleBlockWrap")
              ),
              VK.Observer.subscribe(
                "ads.subscribeEvents",
                e("ads.subscribeEvents")
              ),
              VK.Observer.subscribe("ads.onEvent", e("ads.onEvent")),
              VK.Observer.subscribe("ads.onAdsShowed", e("ads.onAdsShowed")),
              VK.Widgets.RPC))
                VK.Widgets.RPC[_].methods.adsOnInit &&
                  VK.Widgets.RPC[_].callMethod("onAdsAttached");
            function e(_) {
              return function () {
                var e = Array.prototype.slice.call(arguments);
                e.unshift(_), AdsLight.handleEvent.apply(AdsLight, e);
              };
            }
          }),
          (AdsLight.handleEvent = function () {
            var _ = Array.prototype.slice.call(arguments),
              e = _.shift();
            switch (e) {
              case "ads.isVisibleBlockWrap":
                AdsLight.isVisibleBlockWrapRpc.apply(AdsLight, _);
                break;
              case "ads.subscribeEvents":
                var t = _[0];
                t &&
                  !vk__adsLight.widgetsIds[t] &&
                  (vk__adsLight.widgetsIds[t] = !0),
                  vk__adsLight.userHandlers.onInit(!0);
                break;
              case "ads.onEvent":
                AdsLight.onEvent.apply(AdsLight, _);
                break;
              case "ads.onAdsShowed":
                AdsLight.onAdsShowed.apply(AdsLight, _);
            }
          }),
          (AdsLight.onEvent = function (_, e) {
            if (0 === e) e = [];
            else {
              var t = !1;
              for (var i in e)
                if (e[i] == vk__adsLight.windowId) {
                  t = !0;
                  break;
                }
              if (t) return;
              vk__adsLight.userHandlers[_] && vk__adsLight.userHandlers[_](!1);
            }
            e.push(vk__adsLight.windowId),
              AdsLight.publish(!1, "ads.onEvent", _, e);
          }),
          (AdsLight.onAdsShowed = function (_) {
            0 === _ && (_ = {});
            var e = [];
            for (var t in _) _.hasOwnProperty(t) && e.push(parseInt(t));
            e.sort();
            for (var i = [], d = 0, s = e.length; d < s; d++) {
              var a = e[d];
              i.push(_[a].ads_showed_hash);
            }
            var o =
                (i = i.join("_")) &&
                _[vk__adsLight.windowId] &&
                i === _[vk__adsLight.windowId].publish_hash,
              n = +new Date();
            for (var r in (_[vk__adsLight.windowId] ||
              ((_[vk__adsLight.windowId] = {}),
              e.push(vk__adsLight.windowId),
              e.sort()),
            (_[vk__adsLight.windowId].ads_showed = vk__adsLight.adsShowed),
            (_[vk__adsLight.windowId].ads_showed_hash =
              vk__adsLight.adsShowedHash),
            (_[vk__adsLight.windowId].update_progress =
              vk__adsLight.updateProgress),
            vk__adsLight.adsShowedAll))
              vk__adsLight.adsShowedAll.hasOwnProperty(r) &&
                (!_[r] ||
                  vk__adsLight.adsShowedAll[r].publish_time >
                    _[r].publish_time) &&
                n - vk__adsLight.adsShowedAll[r].publish_time < 1e4 &&
                (_[r] = vk__adsLight.adsShowedAll[r]);
            i = [];
            for (var l = 0, g = e.length; l < g; l++) {
              var c = e[l];
              i.push(_[c].ads_showed_hash);
            }
            for (var h in ((i = i.join("_")),
            (_[vk__adsLight.windowId].publish_time = n),
            (_[vk__adsLight.windowId].publish_hash = i),
            _))
              _.hasOwnProperty(h) && (vk__adsLight.adsShowedAll[h] = _[h]);
            o || AdsLight.publish(!0, "ads.onAdsShowed", _);
          }),
          (AdsLight.publish = function (_, e) {
            var t,
              i = Array.prototype.slice.call(arguments, 1),
              d = i.slice(),
              s = i.slice(),
              a = i.slice(),
              o = i.slice();
            d.unshift("adsPublish"),
              s.unshift("adsPublish"),
              a.unshift("adsPublish"),
              o.unshift("publish");
            var n = [];
            if (window.VK && VK.Widgets && VK.Widgets.RPC) {
              var r = function (_) {
                var e;
                VK.Widgets.RPC[_] &&
                  VK.Widgets.RPC[_].callMethod &&
                  ((e = _),
                  (t = function () {
                    VK.Widgets.RPC[e].callMethod.apply(VK.Widgets.RPC[e], d);
                  }),
                  n.push(t));
              };
              for (var l in vk__adsLight.widgetsIds) r(l);
            }
            function g() {
              for (var _ = 0, e = n.length; _ < e; _++) n[_]();
            }
            !isVkDomain &&
              window.VK &&
              VK.callMethod &&
              ((t = function () {
                VK.callMethod.apply(VK, s);
              }),
              n.push(t)),
              isVkDomain &&
                "web" !== vk__adsLight.adsSection &&
                window.cur &&
                cur.app &&
                cur.app.runCallback &&
                ((t = function () {
                  cur.app.runCallback.apply(cur.app, a);
                }),
                n.push(t)),
              isVkDomain &&
                "web" === vk__adsLight.adsSection &&
                vk__adsLight.rpc &&
                vk__adsLight.rpc.callMethod &&
                ((t = function () {
                  vk__adsLight.rpc.callMethod.apply(vk__adsLight.rpc, o);
                }),
                n.push(t)),
              clearTimeout(vk__adsLight.publishTimers[e]),
              n.length > 1 && _
                ? (vk__adsLight.publishTimers[e] = setTimeout(g, 50))
                : g();
          }),
          (AdsLight.canUpdate = function (_) {
            var e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                "ads_left"
              ),
              t = _ && !1 === window.__adsLoaded,
              i = !0;
            return (
              (i =
                (i =
                  i &&
                  e &&
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.isVisible)(
                    e
                  ) &&
                  ((vk__adsLight.activeTab > 0 &&
                    AdsLight.isVisibleBlockWrap()) ||
                    t)) &&
                vk.id &&
                (vk__adsLight.adsCanShow >= 1 ||
                  (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() +
                    vk__adsLight.adsCanShow >
                    36e5)),
              (i =
                "web" === vk__adsLight.adsSection
                  ? i && 2 === vk__adsLight.loadComplete
                  : (i =
                      i &&
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.isVisible)(
                        "side_bar"
                      ) &&
                      !layers.visible &&
                      !(0,
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.isVisible)(
                        "left_friends"
                      )) &&
                    !AdsLight.isNoAds() &&
                    (vk.loaded || t))
            );
          }),
          (AdsLight.isNoAds = function () {
            return vk.no_ads || AdsLight.isNoAdsForce();
          }),
          (AdsLight.isNoAdsForce = function () {
            return window.cur && window.cur.no_left_ads;
          }),
          (AdsLight.getAjaxParams = function (_, e) {
            var t = {},
              i = AdsLight.canUpdate(!0);
            return (
              cur.group_id && (t._ads_group_id = cur.group_id),
              e.noAds || e.cache
                ? (t.al_ad = 0)
                : i || e.ads
                ? ((e.ads ||
                    (window.vkNow &&
                      window.vk &&
                      vk.ads_rotate_interval &&
                      "web" !== vk__adsLight.adsSection &&
                      (0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() -
                        window.__adsLoaded >=
                        vk.ads_rotate_interval)) &&
                    ((window.__adsLoaded = (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)()),
                    (t.al_ad = 1)),
                  (_.al_ad || t.al_ad) &&
                    ((t.ads_section = vk__adsLight.adsSection),
                    (t.ads_showed = AdsLight.getAdsShowed())))
                : (t.al_ad = null),
              t
            );
          }),
          (AdsLight.doRequest = function (_, e) {
            var t =
              "web" === vk__adsLight.adsSection &&
              1 === vk__adsLight.loadComplete;
            if (!e)
              return (
                (vk__adsLight.updateProgress = 1),
                AdsLight.onAdsShowed(0),
                void setTimeout(AdsLight.doRequest.pbind(_, !0), 300)
              );
            var i,
              d,
              s = 0,
              a = {};
            !(function e(o) {
              var n = +new Date(),
                r = 0;
              for (var l in vk__adsLight.adsShowedAll)
                if (vk__adsLight.adsShowedAll.hasOwnProperty(l)) {
                  var g = vk__adsLight.adsShowedAll[l];
                  if (n - g.publish_time >= 3e4)
                    delete vk__adsLight.adsShowedAll[l];
                  else if (!t || !a[l]) {
                    if (2 == g.update_progress) {
                      r = l;
                      break;
                    }
                    1 == g.update_progress && (!r || l < r) && (r = l);
                  }
                }
              o || !r || r == vk__adsLight.windowId
                ? (clearInterval(i),
                  clearTimeout(d),
                  (vk__adsLight.updateProgress = 2),
                  AdsLight.onAdsShowed(0),
                  _())
                : r != s &&
                  ((s = r),
                  clearInterval(i),
                  clearTimeout(d),
                  (i = setInterval(e, t ? 100 : 200)),
                  (d = setTimeout(e.pbind(!0), 5050)));
              a[r] = a[r] ? a[r] + 1 : 1;
            })();
          }),
          (AdsLight.getAdsShowed = function () {
            var _ = [];
            for (var e in vk__adsLight.adsShowedAll)
              if (vk__adsLight.adsShowedAll.hasOwnProperty(e)) {
                var t = vk__adsLight.adsShowedAll[e];
                t.ads_showed && _.push(t.ads_showed);
              }
            return (_ = _.join(","));
          }),
          (AdsLight.updateBlock = function (_, e) {
            if ("very_lazy" !== _) {
              if ("lazy" === _) {
                if (window.__adsLoaded) return void (window.__adsLoaded = 0);
                window.__adsLoaded = 0;
              }
              if (
                ("force" === _ && (window.__adsLoaded = 0),
                "force_hard" === _ && (window.__adsLoaded = 0),
                "already" !== _)
              ) {
                if (!window.__adsLoaded && !1 !== window.__adsLoaded) {
                  if (!e)
                    return (
                      clearTimeout(vk__adsLight.updateBlockTimer),
                      void (vk__adsLight.updateBlockTimer = setTimeout(
                        AdsLight.updateBlock.pbind(!1, 1),
                        1e3
                      ))
                    );
                  var t = AdsLight.canUpdate();
                  if (1 != e) {
                    if (t || ("force_hard" == _ && !AdsLight.isNoAdsForce())) {
                      window.__adsLoaded = (0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)();
                      var i = {};
                      for (var d in vk__adsLight.adsParams)
                        vk__adsLight.adsParams.hasOwnProperty(d) &&
                          (i[d] = vk__adsLight.adsParams[d]);
                      AdsLight.doRequest(function () {
                        (i.ads_showed = AdsLight.getAdsShowed()),
                          (i.ya_ad_active = +vk__adsLight.yaDirectAdActive),
                          ajax.post("/ads_rotate.php?act=al_update_ad", i, {
                            ads: 1,
                            onDone: a,
                            onFail: s,
                          });
                      });
                    }
                  } else setTimeout(AdsLight.updateBlock.pbind(!1, 2), 500);
                }
              } else
                window.__adsLoaded = (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)();
            } else window.__adsLoaded = 0;
            function s() {
              return a(), !0;
            }
            function a() {
              vk__adsLight.updateProgress = 3;
            }
          }),
          (AdsLight.sendExperimentStat = function (_, e, t) {
            if (window.vk && vk.id) {
              if (vk.id % 20 != 2) return;
            } else if (Math.random() >= 0.05) return;
            var i;
            switch (e) {
              case "try":
                i = _ + 1;
                break;
              case "success":
                i = _ + 2;
                break;
              case "fail":
                i = _ + 3;
                break;
              case "noresult":
                i = _ + 7;
                break;
              case "lineup":
                i = _ + 8;
                break;
              case "extra":
                i = _ + 9;
                break;
              default:
                return;
            }
            var d = "/wkview.php?act=mlet&mt=" + i;
            t && (d += "&extra=" + encodeURIComponent(t)),
              ajax.post(
                d,
                {},
                {
                  onFail: function () {
                    return !0;
                  },
                }
              );
          }),
          (AdsLight.tryExperiment = function (_) {
            var e = function (e) {
              if (_.hasOwnProperty(e)) {
                e = (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.intval)(e);
                var i = _[e].split(":"),
                  d = i[0],
                  s = parseInt(i[1]),
                  a = i.slice(2),
                  o = a.length ? a[a.length - 1] : "",
                  n = "label=",
                  r = "";
                switch (
                  (o.substr(0, n.length) === n &&
                    ((r = o.substr(n.length)), (a = a.slice(0, -1))),
                  (vk__adsLight.yaDirectAdActive = !1),
                  d)
                ) {
                  case "ya_direct":
                    return (
                      AdsLight.sendExperimentStat(s, "lineup"),
                      (vk__adsLight.yaCloseLink = a[0]),
                      vk__adsLight.yaDirectLoaded
                        ? (AdsLight.tryRenderYaDirect(
                            a[1],
                            s,
                            r,
                            _.slice(e + 1)
                          ),
                          (t = e),
                          { v: !0 })
                        : (vk__adsLight.yaDirectLoadTries > 3
                            ? (AdsLight.sendExperimentStat(s, "fail"),
                              AdsLight.tryExperiment(_.slice(e + 1)))
                            : (AdsLight.initYaDirect(a[2]),
                              setTimeout(function () {
                                AdsLight.tryExperiment(_);
                              }, 300)),
                          (t = e),
                          { v: void 0 })
                    );
                  case "criteo":
                    return (
                      AdsLight.sendExperimentStat(s, "lineup"),
                      AdsLight.tryRenderCriteo(s, _.slice(e + 1)),
                      (t = e),
                      { v: !0 }
                    );
                  case "rb":
                    return (
                      AdsLight.sendExperimentStat(s, "lineup"),
                      AdsLight.tryRenderTarget(
                        a[0],
                        a[1],
                        s,
                        r,
                        a[2],
                        a[3],
                        a[4],
                        a[6],
                        a[5],
                        _.slice(e + 1),
                        a[7]
                      ),
                      (t = e),
                      { v: !0 }
                    );
                  case "vk":
                    AdsLight.sendExperimentStat(s, "lineup"),
                      AdsLight.sendExperimentStat(s, "try");
                    var l = +new Date(),
                      g = "__vkAdsReq_" + l;
                    (window[g] = function (_) {
                      _.ads_count && AdsLight.sendExperimentStat(s, "success"),
                        delete window[g];
                    }),
                      setTimeout(function () {
                        delete window[g];
                      }, 6e4);
                    var c = vk__adsLight.adsParams;
                    return (
                      (vk__adsLight.adsParams = vk__adsLight.adsParams || {}),
                      (vk__adsLight.adsParams.ads_req_id = l),
                      (vk__adsLight.adsParams.ignore_experiments = s),
                      AdsLight.updateBlock("force_hard", 2),
                      (vk__adsLight.adsParams = c),
                      (t = e),
                      { v: !0 }
                    );
                  case "gadx":
                    var h;
                    if (
                      (AdsLight.sendExperimentStat(s, "lineup"),
                      !vk__adsLight.gadxLoaded)
                    )
                      return (
                        vk__adsLight.gadxLoadTries > 3
                          ? (AdsLight.sendExperimentStat(s, "fail"),
                            AdsLight.tryExperiment(_.slice(e + 1)))
                          : (AdsLight.initGADX(
                              a[0],
                              [a[1], a[2]],
                              s,
                              _.slice(e + 1)
                            ),
                            setTimeout(function () {
                              AdsLight.tryExperiment(_);
                            }, 300)),
                        (t = e),
                        { v: void 0 }
                      );
                    var L = AdsLight.getBusyBlockID(vk__adsLight.gadxBlocks),
                      E = AdsLight.getFreeBlockID(vk__adsLight.gadxBlocks);
                    if (!E)
                      return (
                        AdsLight.sendExperimentStat(s, "fail"),
                        (t = e),
                        { v: void 0 }
                      );
                    if (L) {
                      h = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(L);
                      var u = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                          "ads_left"
                        ),
                        w = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getSize)(
                          u
                        )[1];
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                        u,
                        { minHeight: w, maxHeight: w }
                      ),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                          h,
                          {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                          }
                        ),
                        (h = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                          "div",
                          { id: E },
                          { maxHeight: 0, overflow: "hidden" }
                        )),
                        u.appendChild(h);
                    } else {
                      h = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                        "div",
                        { id: E },
                        { maxHeight: 0, overflow: "hidden" }
                      );
                      var v = (0,
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                        "ads_left"
                      );
                      if (!v)
                        return (
                          AdsLight.sendExperimentStat(s, "fail"),
                          AdsLight.tryExperiment(_.slice(e + 1)),
                          (t = e),
                          { v: void 0 }
                        );
                      if (v.innerHTML)
                        return (
                          AdsLight.showNewBlock(v, "", !0),
                          setTimeout(function () {
                            ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                              "ads_left"
                            ).innerHTML = ""),
                              AdsLight.tryExperiment(_);
                          }, 1e3),
                          (t = e),
                          { v: void 0 }
                        );
                      v.appendChild(h);
                    }
                    return (
                      googletag.cmd.push(
                        function (_, e) {
                          AdsLight.sendExperimentStat(e, "try"),
                            googletag
                              .pubads()
                              .refresh([vk__adsLight.gadxSlots[_]]),
                            googletag.display(_);
                        }.pbind(E, s)
                      ),
                      (t = e),
                      { v: !0 }
                    );
                  case "wmg":
                    return (
                      AdsLight.sendExperimentStat(s, "lineup"),
                      (AdsLight.wmgMessageCallback = function (t) {
                        AdsLight.checkWmgMessage.call(this, t, s, _, e);
                      }),
                      addEventListener("message", AdsLight.wmgMessageCallback),
                      window.glade
                        ? ((vk__adsLight.showWmgAd = !0),
                          AdsLight.tryRenderWmg(s, _.slice(e + 1)),
                          (t = e),
                          { v: !0 })
                        : vk__adsLight.wmgLoadTries > 3
                        ? ((vk__adsLight.showWmgAd = !1),
                          AdsLight.onWmgRenderUnsuccessful(s, _.slice(e + 1)),
                          (t = e),
                          { v: !0 })
                        : ((vk__adsLight.showWmgAd = !0),
                          AdsLight.initWmg(),
                          setTimeout(function () {
                            AdsLight.tryExperiment(_);
                          }, 300),
                          (t = e),
                          { v: !0 })
                    );
                  case "gpt":
                    return (
                      AdsLight.sendExperimentStat(s, "lineup"),
                      window.googletag &&
                      window.googletag.apiReady &&
                      vk__adsLight.GPTLoaded
                        ? (AdsLight.tryRenderGPT(s, _, _.slice(e + 1)),
                          (t = e),
                          { v: !0 })
                        : vk__adsLight.GPTLoadTries > 3
                        ? (AdsLight.onGPTRenderUnsuccessful(s, _.slice(e + 1)),
                          (t = e),
                          { v: !0 })
                        : (AdsLight.initGPT(s, _.slice(e + 1)),
                          setTimeout(function () {
                            AdsLight.tryExperiment(_);
                          }, 300),
                          (t = e),
                          { v: !0 })
                    );
                }
              }
              t = e;
            };
            for (var t in _) {
              var i = e(t);
              if ("object" == typeof i) return i.v;
            }
            return !1;
          }),
          (AdsLight.setNewBlock = function (_, e, t, i, d, s) {
            "string" == typeof e && (vk__adsLight.adsSection = e);
            var a = "\x3c!--ads_experiment";
            if (_ && _.slice(0, a.length) === a) {
              var o = _.split(";");
              AdsLight.tryExperiment(o.slice(1, -1));
            } else {
              var n = "\x3c!--ads_props_data;",
                r = _ ? _.indexOf(n) : -1,
                l = -1 != r ? _.indexOf(";--\x3e", r + n.length) : -1;
              if (
                (-1 != l && (s = _.slice(r + n.length, l)),
                s && "string" == typeof s)
              )
                try {
                  s = window.parseJSON
                    ? (0,
                      _shared_lib_parse__WEBPACK_IMPORTED_MODULE_13__.parseJSON)(
                        s
                      )
                    : JSON.parse(s);
                } catch (_) {}
              if (
                ((s &&
                  "[object Object]" === Object.prototype.toString.call(s)) ||
                  (s = {}),
                (vk__adsLight.adsCanShow =
                  t || "0" === t
                    ? 1
                    : -(0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)()),
                (vk__adsLight.adsShowed = i),
                (vk__adsLight.adsShowedHash = +new Date()),
                d && (vk__adsLight.adsParams = d),
                !_)
              )
                if (AdsLight.isNoAds()) _ = "";
                else {
                  if ("im" !== vk__adsLight.adsSection || 0 != window.__seenAds)
                    return void AdsLight.resizeBlockWrap([0, 0], !1, !1, !0);
                  _ = "";
                }
              window.__adsLoaded = (0,
              _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)();
              var g = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                  "ads_left"
                ),
                c =
                  (g &&
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.isVisible)(
                      g
                    )) ||
                  vk.ad_preview;
              if (!g) {
                var h = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                  "side_bar"
                );
                if (!h)
                  return void AdsLight.resizeBlockWrap([0, 0], !1, !1, !0);
                g = h.appendChild(
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                    "div",
                    { id: "ads_left", className: "ads_left_empty" },
                    { display: c ? "block" : "none" }
                  )
                );
              }
              if (
                (AdsLight.showNewBlock(g, _, c),
                window.vk &&
                  vk.ads_rotate_interval &&
                  "web" === vk__adsLight.adsSection &&
                  (clearInterval(vk__adsLight.reloadTimer),
                  (vk__adsLight.reloadTimer = setInterval(function () {
                    (0,
                    _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() -
                      window.__adsLoaded >=
                      vk.ads_rotate_interval &&
                      (0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() -
                        vk__adsLight.userEventTime <=
                        (3 * vk.ads_rotate_interval) / 4 &&
                      ((window.__adsLoaded = 0), AdsLight.updateBlock());
                  }, vk.ads_rotate_interval))),
                s.ads_req_id)
              )
                try {
                  var L = "__vkAdsReq_" + s.ads_req_id;
                  window[L] && window[L](s);
                } catch (_) {}
              setTimeout(function () {
                (vk__adsLight.updateProgress = 3), AdsLight.onAdsShowed(0);
              }, 100),
                "undefined" != typeof abp &&
                  window.abp &&
                  (0,
                  _shared_lib_cookies__WEBPACK_IMPORTED_MODULE_12__.setCookie)(
                    "remixab",
                    1,
                    30
                  );
            }
          }),
          (AdsLight.replaceScriptsInElement = function (_) {
            Array.from(_.querySelectorAll("script")).forEach((_) => {
              var e = document.createElement("script");
              Array.from(_.attributes).forEach((_) => {
                e.setAttribute(_.name, _.value);
              }),
                e.appendChild(document.createTextNode(_.innerHTML)),
                _.parentNode.replaceChild(e, _);
            });
          }),
          (AdsLight.mailAdsLeftReady = function () {
            AdsLight.startProcessingImages();
          }),
          (AdsLight.showNewBlock = function (_, e, t) {
            if (
              ((vk__adsLight.containerElem = _),
              !t || browserLight.msie6 || browserLight.msie7)
            ) {
              t ||
                (0, _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_7__.debugLog)(
                  "Ads container is hidden"
                ),
                (_.innerHTML = e),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.toggleClass)(
                  _,
                  "ads_left_empty",
                  !e
                );
              var i = AdsLight.getBlockSize(_);
              return (
                AdsLight.resizeBlockWrap(i, !1, !1, !0),
                void AdsLight.updateExternalStats(_)
              );
            }
            vk__adsLight.isNewBlockEmpty = !e;
            var d = e;
            "string" == typeof e &&
              (d = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                "div",
                { innerHTML: e },
                { display: "none" }
              )).querySelector("#render-type-js") &&
              AdsLight.replaceScriptsInElement(d),
              (d = _.appendChild(d)),
              (vk__adsLight.newBlockElem = d),
              d.querySelector("#render-type-js") ||
                AdsLight.startProcessingImages();
          }),
          (AdsLight.startProcessingImages = function () {
            for (
              var _ = vk__adsLight,
                e = _.newBlockElem,
                t = _.containerElem,
                i = _.isNewBlockEmpty,
                d =
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getXY)(t)[1] +
                    50 >
                  (0,
                  _web_lib_scroll__WEBPACK_IMPORTED_MODULE_11__.scrollGetY)() +
                    lastWindowHeight
                    ? 0
                    : 200,
                s = AdsLight.getBlockSize(t),
                a = [0, 0],
                o =
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass1)(
                    "ads_ads_box3",
                    e
                  ) || e,
                n = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByTag)(
                  "img",
                  e
                ),
                r = [],
                l = 0,
                g = n.length;
              l < g;
              l++
            ) {
              var c = (0,
              _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkImage)();
              (c.onload = h), (c.onerror = h), (c.src = n[l].src), r.push(c);
            }
            function h() {
              if (
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.isVisible)(e)
              ) {
                var _ = AdsLight.getBlockSize(o);
                AdsLight.resizeBlockWrap(_, s, a);
              }
            }
            function L() {
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.toggleClass)(
                t,
                "ads_left_empty",
                i
              ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.cleanElems)(t);
              var _ = AdsLight.getBlockSize(o);
              AdsLight.resizeBlockWrap(_, !1, a, !0),
                i
                  ? E()
                  : (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                      e,
                      { opacity: 1 },
                      d,
                      E.pbind()
                    );
            }
            function E() {
              if (i)
                if (e.previousSibling)
                  for (var _ = e; (_ = _.previousSibling); )
                    if (_.nodeType === Node.ELEMENT_NODE) {
                      var t = _.previousSibling ? null : u.pbind();
                      (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                        _,
                        { opacity: 0 },
                        d,
                        t
                      );
                    } else u();
                else u();
              else u();
            }
            function u() {
              for (
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.cleanElems)(e);
                e.previousSibling;

              )
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(
                  e.previousSibling
                );
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(e, {
                position: "static",
                zIndex: "",
                width: "",
              }),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(t, {
                  width: "",
                  height: "",
                  overflow: "visible",
                }),
                window.updSideTopLink && window.updSideTopLink(),
                AdsLight.updateExternalStats(t),
                i || AdsLight.scrollToPreview();
            }
            clearInterval(vk__adsLight.imagesTimer),
              (vk__adsLight.imagesTimer = setInterval(
                function (_) {
                  if (--_.count > 0)
                    for (var n in r) if (!r[n].width || !r[n].height) return;
                  clearInterval(vk__adsLight.imagesTimer),
                    (function () {
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                        t,
                        { overflow: "hidden" }
                      ),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                          e,
                          {
                            display: "block",
                            position: "absolute",
                            left: 0,
                            top: 0,
                            opacity: 0,
                            zIndex: 10,
                            width: "100%",
                          }
                        );
                      var _ = AdsLight.getBlockSize(o);
                      (_ = AdsLight.resizeBlockWrap(_, s, a)),
                        i
                          ? L()
                          : (0,
                            _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                              t,
                              { width: _[0], height: _[1] },
                              d,
                              L.pbind()
                            );
                    })();
                }.pbind({ count: 40 }),
                50
              ));
          }),
          (AdsLight.updateExternalStats = function (_) {
            var e;
            e =
              _ && _.getAttribute("external_stats_src")
                ? [_]
                : (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass)(
                    "ads_ad_external_stats",
                    _
                  );
            for (var t, i = 0; (t = e[i]); i++)
              t.getAttribute("external_stats_complete") ||
                (t.setAttribute("external_stats_complete", 1),
                ((0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkImage)().src =
                  t.getAttribute("external_stats_src")));
          }),
          (AdsLight.addAdsToApply = function (_) {
            var e;
            for (var t in (window.cur
              ? (window.cur.adsIdsApplyNeeded ||
                  (window.cur.adsIdsApplyNeeded = {}),
                (e = window.cur.adsIdsApplyNeeded))
              : (e = vk__adsLight.adsIdsApplyNeeded),
            _))
              _.hasOwnProperty(t) && (e[t] = _[t]);
            AdsLight.applyAds();
          }),
          (AdsLight.applyAds = function (_) {
            var e =
              (window.cur && window.cur.adsIdsApplyNeeded) ||
              vk__adsLight.adsIdsApplyNeeded ||
              {};
            if (
              !(0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.isEmpty)(e)
            ) {
              if (!_)
                return (
                  clearTimeout(vk__adsLight.adsIdsApplyTimer),
                  void (vk__adsLight.adsIdsApplyTimer = setTimeout(
                    AdsLight.applyAds.pbind(!0),
                    100
                  ))
                );
              !(function () {
                for (var _ in e)
                  if (e.hasOwnProperty(_)) {
                    var i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                      _
                    );
                    if (!i) {
                      delete e[_];
                      continue;
                    }
                    var d = i.getBoundingClientRect();
                    if (d.bottom > 0 && d.top < lastWindowHeight) {
                      var s = document.elementFromPoint(d.left + 1, d.top + 1),
                        a = document.elementFromPoint(
                          d.right - 1,
                          d.bottom - 1
                        );
                      if (
                        (s &&
                          (s === i ||
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.isAncestor)(
                              s,
                              i
                            ))) ||
                        (a &&
                          (a === i ||
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.isAncestor)(
                              a,
                              i
                            )))
                      ) {
                        vk__adsLight.adsIdsApplyProcess.push(e[_][0]),
                          delete e[_];
                        continue;
                      }
                    }
                    e[_][1] &&
                      ((0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.vkNow)() -
                        vk.started) /
                        1e3 >
                        e[_][1] &&
                      ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(i),
                      delete e[_]);
                  }
                t();
              })();
            }
            function t(_) {
              if (
                0 != vk__adsLight.adsIdsApplyProcess.length &&
                !vk__adsLight.adsIdsApplyLocked
              ) {
                if (!_)
                  return (
                    clearTimeout(vk__adsLight.adsIdsApplyTimer),
                    void (vk__adsLight.adsIdsApplyTimer = setTimeout(
                      t.pbind(!0),
                      100
                    ))
                  );
                vk__adsLight.adsIdsApplyLocked = !0;
                var e = {};
                (e.ads_ids_apply = vk__adsLight.adsIdsApplyProcess.join(";")),
                  cur &&
                    cur.adsDelayedViewsSrc &&
                    (e.ads_src = cur.adsDelayedViewsSrc),
                  (vk__adsLight.adsIdsApplyProcess = []),
                  ajax.post("/ads_light.php?act=apply_views", e, {
                    onDone: i,
                    onFail: i,
                  });
              }
            }
            function i(_) {
              if (
                ((vk__adsLight.adsIdsApplyLocked = !1),
                _ &&
                  (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.isObject)(
                    _
                  ))
              ) {
                for (var e in _)
                  if (_.hasOwnProperty(e)) {
                    var t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                      "ads_ad_box2_" + e
                    );
                    if (!t) continue;
                    for (var i in _[e])
                      _[e].hasOwnProperty(i) && t.setAttribute(i, _[e][i]);
                  }
                AdsLight.applyAds();
              }
            }
          }),
          (AdsLight.isVisibleBlockWrap = function (_) {
            var e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                "ads_left"
              ),
              t = e.getBoundingClientRect(),
              i = [];
            return (
              t.right &&
                t.bottom &&
                (i.push([
                  t.left + (1 * (t.right - t.left)) / 5,
                  t.top + (1 * (t.bottom - t.top)) / 5,
                ]),
                i.push([
                  t.left + (4 * (t.right - t.left)) / 5,
                  t.top + (4 * (t.bottom - t.top)) / 5,
                ])),
              AdsLight.isVisibleBlockWrapCoords(
                i,
                e,
                function (_) {
                  vk__adsLight.wrapVisible = _;
                },
                _
              ),
              vk__adsLight.wrapVisible
            );
          }),
          (AdsLight.isVisibleBlockWrapCoords = function (_, e, t, i) {
            for (var d, s = !1, a = [], o = 0, n = _.length; o < n; o++) {
              var r = document.elementFromPoint(_[o][0], _[o][1]),
                l = r && (r === e || c(r, e));
              (s = s || l), l && a.push(_[o]);
            }
            s = !!s;
            var g = function (_) {
              clearTimeout(d), t(void 0 !== _ ? _ : s);
            };
            function c(_, e) {
              if (!_ || !e) return !1;
              for (; (_ = _.parentNode); ) if (_ === e) return !0;
              return !1;
            }
            !i &&
            a.length &&
            window != parent &&
            isVkDomain &&
            "web" === vk__adsLight.adsSection &&
            vk__adsLight.rpc &&
            vk__adsLight.rpc.callMethod
              ? (vk__adsLight.rpc.callMethod(
                  "publish",
                  "ads.isVisibleBlockWrap",
                  a,
                  g
                ),
                (d = setTimeout(g, 300)))
              : !i &&
                a.length &&
                window != parent &&
                !isVkDomain &&
                window.VK &&
                VK.callMethod
              ? (VK.callMethod("adsPublish", "ads.isVisibleBlockWrap", a, g),
                (d = setTimeout(g, 300)))
              : g();
          }),
          (AdsLight.isVisibleBlockWrapRpc = function (_, e, t) {
            for (
              var i,
                d = (i = t
                  ? VK.Widgets.RPC[t].frame
                  : cur.app.frame).getBoundingClientRect(),
                s = [],
                a = 0,
                o = _.length;
              a < o;
              a++
            ) {
              var n = _[a][0] + d.left,
                r = _[a][1] + d.top;
              s.push([n, r]);
            }
            AdsLight.isVisibleBlockWrapCoords(s, i, e);
          }),
          (AdsLight.getBlockSize = function (_) {
            var e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass)(
                "ads_ad_box",
                _
              ),
              t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass)(
                "ads_ad_box5",
                _
              );
            (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
              t,
              function (_, e) {
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.addClass)(
                  e,
                  "max_size"
                );
              }
            ),
              browserLight.msie8 &&
                (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
                  e,
                  function (_, e) {
                    var t = Math.ceil(
                        (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.floatval)(
                          (0,
                          _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getStyle)(
                            e,
                            "width"
                          )
                        )
                      ),
                      i = Math.ceil(
                        (0,
                        _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.floatval)(
                          (0,
                          _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getStyle)(
                            e,
                            "max-width"
                          )
                        )
                      );
                    i && i > 200 && t >= i && (e.style.width = i + "px");
                  }
                );
            var i = [
              Math.ceil(
                (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.floatval)(
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getStyle)(
                    _,
                    "width"
                  )
                )
              ),
              Math.ceil(
                (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.floatval)(
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getStyle)(
                    _,
                    "height"
                  )
                )
              ),
            ];
            return (
              (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
                t,
                function (_, e) {
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.removeClass)(
                    e,
                    "max_size"
                  );
                }
              ),
              i
            );
          }),
          (AdsLight.resizeBlockWrap = function (_, e, t, i) {
            if (!_) return [0, 0];
            var d = _[0],
              s = _[1];
            d &&
              vk__adsLight.adsParams &&
              vk__adsLight.adsParams.ads_ad_unit_width_real > d &&
              (d = vk__adsLight.adsParams.ads_ad_unit_width_real),
              s &&
                vk__adsLight.adsParams &&
                vk__adsLight.adsParams.ads_ad_unit_height_real > s &&
                (s = vk__adsLight.adsParams.ads_ad_unit_height_real);
            var a = !!(i || (e && d > e[0]) || (t && t[0] && d > t[0])),
              o = !!(i || (e && s > e[1]) || (t && t[1] && s > t[1]));
            return a || o
              ? (t && (a && (t[0] = d), o && (t[1] = s)),
                isVkDomain &&
                  "web" === vk__adsLight.adsSection &&
                  vk__adsLight.rpc &&
                  vk__adsLight.rpc.callMethod &&
                  vk__adsLight.rpc.callMethod("resizeWidget", a && d, o && s),
                [d, s])
              : [d, s];
          }),
          (AdsLight.loadAds = function () {
            if (
              isVkDomain &&
              vk__adsLight.loaderParams &&
              !vk__adsLight.loadComplete
            ) {
              vk__adsLight.loadComplete = 1;
              var adsParamsExport = vk__adsLight.adsParamsExport;
              delete vk__adsLight.adsParamsExport;
              var ajaxParams = {};
              for (var i in vk__adsLight.loaderParams)
                vk__adsLight.loaderParams.hasOwnProperty(i) &&
                  (ajaxParams[i] = vk__adsLight.loaderParams[i]);
              ajaxParams.url = document.referrer;
              try {
                ajaxParams.url_top = top.location.toString();
              } catch (_) {}
              var isVisibleWeb = AdsLight.isVisibleBlockWrap(!0);
              isVisibleWeb || (ajaxParams.web_invisible = 1),
                document.documentMode &&
                  (ajaxParams.ie_document_mode = document.documentMode),
                AdsLight.doRequest(function () {
                  (ajaxParams.ads_showed = AdsLight.getAdsShowed()),
                    ajax.post("/ads_rotate.php?act=ads_web", ajaxParams, {
                      onDone: onComplete,
                      onFail: onComplete,
                    });
                });
            }
            function onComplete(response, nothing, js) {
              if (
                ((vk__adsLight.updateProgress = 3),
                response &&
                  (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.isObject)(
                    response
                  ) &&
                  "ads_html" in response)
              ) {
                var styleElemOld = (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                    "ads_style_web_loader"
                  ),
                  sheetOld = styleElemOld.sheet
                    ? styleElemOld.sheet
                    : styleElemOld.styleSheet,
                  deleteFunc = sheetOld.deleteRule
                    ? "deleteRule"
                    : "removeRule";
                sheetOld[deleteFunc](0);
                var styleElemNew = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)("style", {
                  type: "text/css",
                });
                styleElemNew.styleSheet
                  ? (styleElemNew.styleSheet.cssText = response.css)
                  : styleElemNew.appendChild(
                      document.createTextNode(response.css)
                    ),
                  headNode.appendChild(styleElemNew),
                  AdsLight.setNewBlock(
                    response.ads_html,
                    response.ads_section,
                    response.ads_can_show,
                    response.ads_showed,
                    response.ads_params
                  );
                var _adsParamsExport = response.ads_params_export;
                if (_adsParamsExport.ads_params_unclean)
                  for (var _i3 in (delete _adsParamsExport.ads_params_unclean,
                  _adsParamsExport))
                    _adsParamsExport.hasOwnProperty(_i3) &&
                      (_adsParamsExport[_i3] = (0,
                      _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.unclean)(
                        _adsParamsExport[_i3]
                      ));
                vk__adsLight.rpc.callMethod(
                  "adsOnInit",
                  response.ads_count,
                  _adsParamsExport
                ),
                  (vk__adsLight.loadComplete = 2);
              } else {
                if ("string" == typeof js)
                  try {
                    eval(js);
                  } catch (_) {
                    (0,
                    _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_7__.logEvalError)(
                      _,
                      js
                    ),
                      (0,
                      _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_7__.debugLog)(
                        _
                      );
                  }
                AdsLight.loadAdsFailed(-3001, adsParamsExport);
              }
            }
          }),
          (AdsLight.loadAdsFailed = function (_, e) {
            if (!vk__adsLight.rpc) return !1;
            if (-1 === vk__adsLight.loadComplete) return !0;
            if (((vk__adsLight.loadComplete = -1), e.ads_params_unclean))
              for (var t in (delete e.ads_params_unclean, e))
                e.hasOwnProperty(t) &&
                  (e[t] = (0,
                  _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.unclean)(
                    e[t]
                  ));
            return (
              vk__adsLight.rpc.callMethod("resizeWidget", 0, 0),
              vk__adsLight.rpc.callMethod("adsOnInit", _, e),
              !0
            );
          }),
          (AdsLight.blockOverOut = function (_, e, t) {
            var i,
              d = "mouseover" === _.type,
              s = !1;
            if (
              ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.hasClass)(e, t)
                ? ((i = e),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.toggleClass)(
                    i,
                    "over",
                    d
                  ),
                  (s = d ? 1 : 0.3))
                : (((i = (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass1)(
                    t,
                    i
                  )).over = 1),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.hasClass)(
                    i,
                    "over"
                  ) || (s = d ? 0.3 : 0)),
              !1 !== s &&
                (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                  i,
                  { opacity: s },
                  200
                ),
              d && e == i)
            ) {
              var a = (0,
              _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass1)(
                "tooltip_text",
                i
              );
              a &&
                (0,
                _web_lib_tooltip_utils__WEBPACK_IMPORTED_MODULE_16__.showTooltip)(
                  i,
                  { text: a.innerHTML, showdt: 0, black: 1, shift: [14, 3, 3] }
                );
            }
          }),
          (AdsLight.closeNewsBlock = function (_, e, t) {
            for (
              ;
              !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.hasClass)(
                _,
                "feed_row"
              );

            )
              _ = _.parentNode;
            function i() {
              return !0;
            }
            (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.slideUp)(_, 200),
              ajax.post(
                "/ads_light.php?act=close_news",
                { hash: e, ads_section: t },
                { onDone: i, onFail: i }
              );
          }),
          (AdsLight.scrollToPreview = function (_) {
            if (_) {
              var e = (0,
              _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass1)(
                "ads_ads_preview"
              );
              if (
                e &&
                !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.hasClass)(
                  e,
                  "ads_ads_preview_viewed"
                )
              ) {
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.addClass)(
                  e,
                  "ads_ads_preview_viewed"
                );
                var t = (0,
                  _web_lib_scroll__WEBPACK_IMPORTED_MODULE_11__.scrollGetY)(),
                  i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getXY)(
                    e
                  )[1],
                  d = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getSize)(
                    e
                  )[1],
                  s = vk.staticheader
                    ? 0
                    : (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getSize)(
                        "page_header_cont"
                      )[1];
                (i + d > t + lastWindowHeight || i < t + s) &&
                  (d >= lastWindowHeight - s
                    ? (0,
                      _web_lib_scroll__WEBPACK_IMPORTED_MODULE_11__.scrollToY)(
                        i - 10,
                        500
                      )
                    : (0,
                      _web_lib_scroll__WEBPACK_IMPORTED_MODULE_11__.scrollToY)(
                        i - (lastWindowHeight - d) / 2,
                        500
                      ));
              }
            } else setTimeout(AdsLight.scrollToPreview.pbind(!0), 100);
          }),
          (AdsLight.overrideClickEvents = function (_, e, t) {
            if (!_) return !1;
            var i = _.getAttribute("onclick_inside"),
              d = _.getAttribute("onclick_outside");
            if (!d) return !1;
            if (
              ((i = new Function("event", i || d)),
              (d = new Function("event", d)),
              !t)
            )
              for (
                var s,
                  a = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByTag)(
                    "a",
                    _
                  ),
                  o = 0;
                (s = a[o]);
                o++
              )
                s.setAttribute("_href", s.href), s.removeAttribute("href");
            var n = !1;
            return (
              (0, _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_9__.addEvent)(
                _,
                "click dblclick mousedown mouseup touchstart touchmove touchend",
                function (_) {
                  var e = !1;
                  if (((_ = normEvent(_)), !n))
                    if (
                      "mouseup" == _.type &&
                      (2 == _.which ||
                        (1 == _.which &&
                          (0,
                          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_9__.checkEvent)(
                            _
                          )))
                    ) {
                      if (
                        "A" == _.target.nodeName &&
                        _.target.hasAttribute("href") &&
                        "#" !== _.target.getAttribute("href")
                      )
                        return !0;
                      (n = !0),
                        setTimeout(function () {
                          n = !1;
                        }, 100),
                        d(_);
                    } else "click" == _.type && 1 == _.which && (e = i(_));
                  if (t && !e) return !0;
                  return (0,
                  _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_9__.cancelEvent)(
                    _
                  );
                },
                !1,
                !1,
                !0
              ),
              e ||
                cur.destroy.push(
                  function (_) {
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.cleanElems)(
                      _
                    );
                  }.pbind(_)
                ),
              !0
            );
          }),
          (AdsLight.initYaDirect = function (_) {
            var e, t, i, d, s;
            (vk__adsLight.yaDirectLoadTries++, vk__adsLight.yaDirectLoading) ||
              ((vk__adsLight.yaDirectLoading = !0),
              (e = window),
              (t = window.document),
              (e[(i = "yandexContextAsyncCallbacks")] = e[i] || []),
              e[i].push(function () {
                (vk__adsLight.yaDirectLoaded = !0),
                  (vk__adsLight.yaDirectLoading = !1);
              }),
              (s = t.getElementsByTagName("script")[0]),
              ((d = t.createElement("script")).type = "text/javascript"),
              (d.src = _ || "//an.yandex.ru/system/context.js"),
              (d.async = !0),
              s.parentNode.insertBefore(d, s));
          }),
          (AdsLight.tryRenderYaDirect = function (_, e, t, i) {
            if (vk__adsLight.yaDirectLoaded) {
              var d,
                s = "yandex_ad_" + _;
              if ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(s))
                (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(s),
                  { opacity: 0 },
                  200,
                  function () {
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(s),
                      AdsLight.tryRenderYaDirect(_, e, t, i);
                  }
                );
              else {
                d = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)("div", {
                  id: s,
                });
                var a = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                  "ads_left"
                );
                if (!a)
                  return (
                    AdsLight.sendExperimentStat(e, "fail"),
                    void AdsLight.onYaDirectRenderUnsuccessful(i)
                  );
                a.appendChild(d),
                  (d = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(s)),
                  Ya.Context.AdvManager.render(
                    {
                      blockId: _,
                      renderTo: s,
                      async: !0,
                      onRender: function () {
                        t &&
                          !(0,
                          _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass1)(
                            "ads_label",
                            d
                          ) &&
                          d.insertBefore(
                            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.se)(
                              t
                            ),
                            d.firstChild
                          ),
                          AdsLight.sendExperimentStat(e, "success"),
                          AdsLight.onYaDirectRenderSuccessful(d);
                      },
                    },
                    function () {
                      AdsLight.sendExperimentStat(e, "fail"),
                        AdsLight.onYaDirectRenderUnsuccessful(i);
                    }
                  ),
                  AdsLight.sendExperimentStat(e, "try");
              }
            }
          }),
          (AdsLight.onYaDirectRenderSuccessful = function (_) {
            if (vk__adsLight.yaCloseLink) {
              var e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.se)(
                `<div id="ya_direct" style="display:none;" onmouseover="leftBlockOver('ya_direct');" onmouseout="leftBlockOut('ya_direct');"><div id="left_hideya_direct" class="left_hide_button" onmouseover="leftBlockOver(this);" onmouseout="leftBlockOut(this);" onclick="leftAdBlockClose('ya_direct', '${vk__adsLight.yaCloseLink}'); return cancelEvent(event);"></div></div>`
              );
              e.appendChild(_), (_ = e);
            }
            AdsLight.showNewBlock(
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)("ads_left"),
              _,
              !0
            ),
              (vk__adsLight.yaDirectAdActive = !0);
          }),
          (AdsLight.onYaDirectRenderUnsuccessful = function (_) {
            (vk__adsLight.yaDirectAdActive = !1), AdsLight.tryExperiment(_);
          }),
          (AdsLight.tryRenderCriteo = function (_, e) {
            var t = "criteo-iframe",
              i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(t);
            i
              ? (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                  i,
                  { opacity: 0 },
                  200,
                  function () {
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(i),
                      AdsLight.tryRenderCriteo(e);
                  }
                )
              : (AdsLight.sendExperimentStat(_, "try"),
                ((i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                  "iframe",
                  {
                    id: t,
                    frameBorder: "0",
                    marginWidth: "0",
                    marginHeight: "0",
                    height: "0",
                    width: "118",
                    scrolling: "no",
                  },
                  { opacity: 0 }
                )).onload = function () {
                  i.contentDocument.body.scrollHeight > 400
                    ? (AdsLight.sendExperimentStat(_, "success"),
                      (i.height = 600),
                      (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                        i,
                        { opacity: 1 },
                        200
                      ))
                    : (AdsLight.sendExperimentStat(_, "fail"),
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(i),
                      AdsLight.tryExperiment(e));
                }),
                (i.src = "/ads_light.php?act=criteo"),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                  "ads_left"
                ).appendChild(i));
          }),
          (AdsLight.initWmg = function () {
            if ((vk__adsLight.wmgLoadTries++, !vk__adsLight.wmgLoading)) {
              vk__adsLight.wmgLoading = !0;
              var _ = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByTag1)(
                  "script"
                ),
                e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                  "script",
                  {
                    type: "text/javascript",
                    async: !0,
                    src: "https://securepubads.g.doubleclick.net/static/glade.js",
                  }
                );
              _.parentNode.insertBefore(e, _), (vk__adsLight.wmgLoading = !1);
            }
          }),
          (AdsLight.tryRenderWmg = function (_, e) {
            if (!vk__adsLight.wmgLoading)
              if (
                ((vk__adsLight.wmgLoading = !0),
                AdsLight.sendExperimentStat(_, "try"),
                vk__adsLight.showWmgAd &&
                  window &&
                  window.glade &&
                  window.glade.run)
              ) {
                var t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                  "ads_left"
                );
                if (t) {
                  var i = AdsLight.getWmgDivId(t),
                    d = AdsLight.addWmgBlock(i);
                  t.appendChild(d),
                    d.addEventListener(
                      "gladeAdFetched",
                      AdsLight.onLoadWmgAd.pbind(_, e)
                    ),
                    d.addEventListener(
                      "gladeAdRendered",
                      AdsLight.onRenderWmgAd.pbind(i, d, t, _, e)
                    ),
                    window.glade.run();
                } else AdsLight.onWmgRenderUnsuccessful(_, e);
              } else AdsLight.onWmgRenderUnsuccessful(_, e);
          }),
          (AdsLight.getWmgDivId = function (_) {
            var e = "glade-aslot-1";
            return _.innerHTML
              ? ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                  "glade-aslot-1"
                ) && (e = "glade-aslot-2"),
                e)
              : e;
          }),
          (AdsLight.addWmgBlock = function (_) {
            var e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
              "div",
              { id: _ },
              { display: "none", opacity: 0 }
            );
            return (
              e.setAttribute("data-ad-unit-path", "/205338224/120x600_vk.com"),
              e.setAttribute(
                "data-click-url",
                (0,
                _shared_lib_site__WEBPACK_IMPORTED_MODULE_17__.getHostName)()
              ),
              e.setAttribute("data-glade", !0),
              e.setAttribute("width", "120"),
              e.setAttribute("height", "600"),
              e
            );
          }),
          (AdsLight.onLoadWmgAd = function (_, e, t) {
            (vk__adsLight.wmgLoadTries = 0),
              (t && t.detail && !t.detail.empty) ||
                ((vk__adsLight.showWmgAd = !1),
                AdsLight.onWmgRenderUnsuccessful(_, e));
          }),
          (AdsLight.onRenderWmgAd = function (_, e, t, i, d) {
            vk__adsLight.showWmgAd &&
              AdsLight.onWmgRenderSuccessful(_, e, t, i, d);
          }),
          (AdsLight.onWmgRenderUnsuccessful = function (_, e) {
            (vk__adsLight.wmgLoading = !1),
              AdsLight.wmgMessageCallback &&
                removeEventListener("message", AdsLight.wmgMessageCallback),
              AdsLight.sendExperimentStat(_, "fail"),
              AdsLight.tryExperiment(e);
          }),
          (AdsLight.onWmgRenderSuccessful = function (_, e, t, i, d) {
            (vk__adsLight.wmgLoading = !1),
              AdsLight.sendExperimentStat(i, "success"),
              e.removeEventListener(
                "gladeAdFetched",
                AdsLight.onLoadWmgAd.pbind(i, d)
              ),
              e.removeEventListener(
                "gladeAdRendered",
                AdsLight.onRenderWmgAd.pbind(_, e, t, i, d)
              ),
              AdsLight.showWmgAfterFetch(_, e, t);
          }),
          (AdsLight.showWmgAfterFetch = function (_, e, t) {
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
              "ads_left",
              { overflow: "hidden" }
            ),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(_, {
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 0,
                zIndex: 10,
                width: "100%",
              });
            var i = AdsLight.getBlockSize(t),
              d =
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass1)(
                  "ads_ads_box3",
                  e
                ) || e,
              s = AdsLight.getBlockSize(d);
            (s = AdsLight.resizeBlockWrap(s, i, [0, 0])),
              (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                "ads_left",
                { width: s[0], height: s[1] },
                200,
                function () {
                  AdsLight.cleanAdBlockForWmg(_, e, t);
                }
              );
          }),
          (AdsLight.cleanAdBlockForWmg = function (_, e, t) {
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.removeClass)(
              t,
              "ads_left_empty"
            ),
              (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                _,
                { opacity: 1 },
                200,
                function () {
                  if (t.innerHTML)
                    for (var i = 0, d = t.childNodes.length; i < d; i++) {
                      var s = t.childNodes[i]
                        ? t.childNodes[i].getAttribute("id")
                        : "";
                      if (s && s === _) return;
                      var a = t.childNodes[i];
                      (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                        a,
                        { opacity: 0 },
                        200,
                        function (_) {
                          (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(_),
                            AdsLight.showWmgBlock(e, t);
                        }
                      );
                    }
                }
              );
          }),
          (AdsLight.showWmgBlock = function (_, e) {
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(_, {
              position: "static",
              zIndex: "",
              width: "",
            }),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(e, {
                width: "",
                height: "",
                overflow: "visible",
              });
          }),
          (AdsLight.getRBAds = function (_, e, t, i) {
            var d,
              s,
              a = "__rb" + new Date().getTime(),
              o = i.slot_id,
              n =
                "https://ad.mail.ru/adq/?callback=" +
                a +
                "&q%5B%5D=" +
                o +
                "%3Fn%3D" +
                encodeURIComponent(_),
              r = {};
            for (s in (i && i.test_id && (r.test_id = i.test_id),
            i &&
              i.cpm_floor &&
              "0" != i.cpm_floor &&
              (r.cpm_floor = i.cpm_floor),
            i && i.vk_id && (r.vk_id = i.vk_id),
            i && i.count && (r.count = i.count),
            i && i.sign && (r.sign = i.sign),
            i && i.brandsafety && (r.brandsafety = i.brandsafety),
            r))
              r.hasOwnProperty(s) && (n += `&${s}=${r[s]}`);
            return (
              (function (e, t, s) {
                clearTimeout(d),
                  (d = setTimeout(function () {
                    s({ reason: "timeout" });
                  }, 5e3)),
                  (window[a] = function (e) {
                    if ((clearTimeout(d), e && e[0] && e[0].html)) {
                      try {
                        var a = (0,
                          _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(_),
                          o =
                            (a &&
                              (0,
                              _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.isVisible)(
                                a
                              )) ||
                            vk.ad_preview;
                        if (!a) {
                          var n = (0,
                          _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                            "side_bar"
                          );
                          if (!n)
                            return (
                              AdsLight.resizeBlockWrap([0, 0], !1, !1, !0),
                              void s({ reason: "no-side-bar" })
                            );
                          a = n.appendChild(
                            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                              "div",
                              { id: "ads_left", className: "ads_left_empty" },
                              { display: o ? "block" : "none" }
                            )
                          );
                        }
                        AdsLight.showNewBlock(
                          a,
                          (i.label ? i.label : "") + e[0].html,
                          o
                        );
                      } catch (_) {}
                      t(e);
                    } else s({ reason: "no-ads" });
                  });
                var o = document.createElement("script");
                (o.src = e),
                  document.getElementsByTagName("head")[0].appendChild(o);
              })(n, e, t),
              a
            );
          }),
          (AdsLight.tryRenderTarget = function (
            _,
            e,
            t,
            i,
            d,
            s,
            a,
            o,
            n,
            r,
            l
          ) {
            var g = {
              slot_id: e,
              label: i,
              cpm_floor: d,
              test_id: s,
              count: a,
            };
            l && (g.brandsafety = 1),
              _ && (g.test_id = _),
              window.vk && vk.id && ((g.vk_id = vk.id), o && (g.sign = o)),
              AdsLight.sendExperimentStat(t, "try");
            var c = !1,
              h = setTimeout(function () {
                AdsLight.sendExperimentStat(t, "noresult"),
                  c && window[c] && (window[c] = function () {}),
                  AdsLight.tryExperiment(r);
              }, 6e3),
              L = "ads_left";
            window.stManager.add(["mrtarg.js", "mrtarg.css"], function () {
              c = AdsLight.getRBAds(
                L,
                function (_) {
                  clearTimeout(h),
                    AdsLight.sendExperimentStat(t, "success"),
                    window.RB && window.RB.doCheck && window.RB.doCheck();
                  var e = (function (_) {
                    var e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                      L
                    );
                    if (e) {
                      var t = (0,
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByClass1)(
                        "trg-b-banner-block",
                        e
                      );
                      return (
                        t ||
                          ((0,
                          _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.isArray)(
                            _
                          ) &&
                            (0,
                            _shared_lib_common__WEBPACK_IMPORTED_MODULE_8__.isObject)(
                              _[0]
                            ) &&
                            _[0].banner &&
                            (t = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                              "b" + _[0].banner
                            ))),
                        t
                      );
                    }
                  })(_);
                  if (e) {
                    var i = [
                      "rbccl",
                      e.getAttribute("c"),
                      e.getAttribute("ac"),
                      n,
                    ].join(";");
                    AdsLight.sendExperimentStat(t, "extra", i);
                  }
                },
                function (_) {
                  clearTimeout(h),
                    AdsLight.sendExperimentStat(t, "fail"),
                    AdsLight.tryExperiment(r);
                },
                g
              );
            });
          }),
          (AdsLight.initGADX = function (_, e, t, i) {
            if (
              (vk__adsLight.gadxLoadTries++,
              !vk__adsLight.gadxLoading && !vk__adsLight.gadxLoaded)
            ) {
              (vk__adsLight.gadxLoading = !0), (vk__adsLight.gadxBlocks = e);
              var d = window.document.getElementsByTagName("script")[0],
                s = window.document.createElement("script");
              (s.type = "text/javascript"),
                (s.src = "//www.googletagservices.com/tag/js/gpt.js"),
                (s.async = !0),
                d.parentNode.insertBefore(s, d),
                (window.googletag = window.googletag || {}),
                (googletag.cmd = googletag.cmd || []),
                (vk__adsLight.gadxSlots = {}),
                googletag.cmd.push(function () {
                  (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
                    e,
                    function (e, t) {
                      var i = googletag.defineSlot(_, ["fluid"], t);
                      (vk__adsLight.gadxSlots[t] = i),
                        i.addService(googletag.pubads());
                    }
                  ),
                    googletag.pubads().enableSingleRequest(),
                    googletag
                      .pubads()
                      .addEventListener("slotRenderEnded", function (_) {
                        AdsLight.initGoogleRenderFinished(
                          _,
                          t,
                          i,
                          vk__adsLight.gadxBlocks
                        );
                      }),
                    googletag.pubads().disableInitialLoad(),
                    googletag.enableServices(),
                    (vk__adsLight.gadxLoaded = !0),
                    (vk__adsLight.gadxLoading = !1);
                });
            }
          }),
          (AdsLight.initGoogleRenderFinished = function (_, e, t, i) {
            setTimeout(function () {
              var d = _.slot.getSlotElementId(),
                s = AdsLight.getBusyBlockID(i, d);
              _.isEmpty
                ? (s &&
                    ((0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(s),
                      { maxHeight: 0 },
                      300,
                      function () {
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(s);
                      }
                    ),
                    (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                        "ads_left"
                      ),
                      { minHeight: 0, maxHeight: 400 },
                      300,
                      function () {
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                          (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                            "ads_left"
                          ),
                          { minHeight: "", maxHeight: "" }
                        );
                      }
                    )),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(d),
                  AdsLight.sendExperimentStat(e, "fail"),
                  AdsLight.tryExperiment(t))
                : (s
                    ? ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(d),
                        { maxHeight: "", opacity: 0.01 }
                      ),
                      (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(d),
                        { opacity: 1 },
                        200
                      ),
                      (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                        s,
                        { opacity: 0 },
                        200,
                        function () {
                          (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.re)(s);
                        }
                      ),
                      (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                          "ads_left"
                        ),
                        { minHeight: 0, maxHeight: 400 },
                        300,
                        function () {
                          (0,
                          _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                              "ads_left"
                            ),
                            { minHeight: "", maxHeight: "" }
                          );
                        }
                      ))
                    : (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_10__.animate)(
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(d),
                        { maxHeight: 400 },
                        300,
                        function () {}
                      ),
                  AdsLight.sendExperimentStat(e, "success"));
            }, 500);
          }),
          (AdsLight.getFreeBlockID = function (_) {
            var e;
            for (var t in _)
              if (
                _.hasOwnProperty(t) &&
                ((e = _[t]),
                !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(e))
              )
                return e;
            return !1;
          }),
          (AdsLight.getBusyBlockID = function (_, e) {
            var t;
            for (var i in _)
              if (_.hasOwnProperty(i)) {
                if (((t = _[i]), e && e === t)) continue;
                if ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(t))
                  return t;
              }
            return !1;
          }),
          (AdsLight.checkWmgMessage = function (_, e, t, i) {
            "ads_wmg_no_ad" === _.data &&
              AdsLight.onWmgRenderUnsuccessful(e, t.slice(i + 1));
          }),
          (AdsLight.initGPT = function (_, e) {
            if (
              (vk__adsLight.GPTLoadTries++,
              !vk__adsLight.GPTLoading && !vk__adsLight.GPTLoaded)
            ) {
              (vk__adsLight.GPTLoading = !0),
                (vk__adsLight.GPTBlocks = [
                  "ads_tgb_google_0",
                  "ads_tgb_google_1",
                ]);
              var t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.geByTag1)(
                  "script"
                ),
                i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                  "script",
                  {
                    type: "text/javascript",
                    async: !0,
                    src: "https://www.googletagservices.com/tag/js/gpt.js",
                  }
                );
              t.parentNode.insertBefore(i, t),
                (window.googletag = window.googletag || {}),
                (googletag.cmd = googletag.cmd || []),
                (vk__adsLight.GPTAdSlots = {}),
                googletag.cmd.push(function () {
                  (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
                    vk__adsLight.GPTBlocks,
                    function (_, e) {
                      var t = googletag.defineSlot(
                        "/21802649096/vk_native_left",
                        ["fluid"],
                        e
                      );
                      (vk__adsLight.GPTAdSlots[e] = t),
                        t.addService(googletag.pubads());
                    }
                  ),
                    googletag.pubads().enableSingleRequest(),
                    googletag
                      .pubads()
                      .addEventListener("slotRenderEnded", function (t) {
                        AdsLight.initGoogleRenderFinished(
                          t,
                          _,
                          e,
                          vk__adsLight.GPTBlocks
                        );
                      }),
                    googletag.pubads().disableInitialLoad(),
                    googletag.enableServices(),
                    (vk__adsLight.GPTLoading = !1),
                    (vk__adsLight.GPTLoaded = !0);
                });
            }
          }),
          (AdsLight.onGPTRenderUnsuccessful = function (_, e) {
            (vk__adsLight.GPTLoading = !1),
              AdsLight.sendExperimentStat(_, "fail"),
              AdsLight.tryExperiment(e);
          }),
          (AdsLight.tryRenderGPT = function (_, e, t) {
            if (!vk__adsLight.GPTLoading)
              if (
                ((vk__adsLight.GPTLoading = !0),
                window &&
                  window.googletag &&
                  window.googletag.apiReady &&
                  vk__adsLight.GPTLoaded)
              ) {
                var i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                  "ads_left"
                );
                if (i) {
                  var d = AdsLight.getBusyBlockID(vk__adsLight.GPTBlocks),
                    s = AdsLight.getFreeBlockID(vk__adsLight.GPTBlocks);
                  if (s) {
                    if (d) {
                      var a = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(d),
                        o = (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.getSize)(
                          i
                        )[1];
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                        i,
                        { minHeight: o, maxHeight: o }
                      ),
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.setStyle)(
                          a,
                          {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                          }
                        ),
                        (a = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                          "div",
                          { id: s },
                          { maxHeight: 0, overflow: "hidden" }
                        )),
                        i.appendChild(a);
                    } else {
                      var n = (0,
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ce)(
                        "div",
                        { id: s },
                        { maxHeight: 0, overflow: "hidden" }
                      );
                      if (i.innerHTML)
                        return (
                          AdsLight.showNewBlock(i, "", !0),
                          void setTimeout(function () {
                            ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_15__.ge)(
                              "ads_left"
                            ).innerHTML = ""),
                              AdsLight.tryExperiment(e);
                          }, 1e3)
                        );
                      i.appendChild(n);
                    }
                    googletag.cmd.push(
                      function (_, e) {
                        AdsLight.sendExperimentStat(e, "try"),
                          googletag
                            .pubads()
                            .refresh([vk__adsLight.GPTAdSlots[_]]),
                          googletag.display(_);
                      }.pbind(s, _)
                    );
                  } else AdsLight.onGPTRenderUnsuccessful(_, t);
                } else AdsLight.onGPTRenderUnsuccessful(_, t);
              } else AdsLight.onGPTRenderUnsuccessful(_, t);
          });
      },
      60694: (_, e, t) => {
        t(866282).AdsLight.init();
        try {
          window.stManager.done(window.jsc("web/ads_light.js"));
        } catch (_) {}
      },
    },
    __webpack_module_cache__ = {},
    deferred,
    leafPrototypes,
    getProto;
  function __webpack_require__(_) {
    var e = __webpack_module_cache__[_];
    if (void 0 !== e) return e.exports;
    var t = (__webpack_module_cache__[_] = { id: _, loaded: !1, exports: {} });
    return (
      __webpack_modules__[_].call(t.exports, t, t.exports, __webpack_require__),
      (t.loaded = !0),
      t.exports
    );
  }
  (__webpack_require__.m = __webpack_modules__),
    (deferred = []),
    (__webpack_require__.O = (_, e, t, i) => {
      if (!e) {
        var d = 1 / 0;
        for (n = 0; n < deferred.length; n++) {
          for (var [e, t, i] = deferred[n], s = !0, a = 0; a < e.length; a++)
            (!1 & i || d >= i) &&
            Object.keys(__webpack_require__.O).every((_) =>
              __webpack_require__.O[_](e[a])
            )
              ? e.splice(a--, 1)
              : ((s = !1), i < d && (d = i));
          if (s) {
            deferred.splice(n--, 1);
            var o = t();
            void 0 !== o && (_ = o);
          }
        }
        return _;
      }
      i = i || 0;
      for (var n = deferred.length; n > 0 && deferred[n - 1][2] > i; n--)
        deferred[n] = deferred[n - 1];
      deferred[n] = [e, t, i];
    }),
    (__webpack_require__.n = (_) => {
      var e = _ && _.__esModule ? () => _.default : () => _;
      return __webpack_require__.d(e, { a: e }), e;
    }),
    (getProto = Object.getPrototypeOf
      ? (_) => Object.getPrototypeOf(_)
      : (_) => _.__proto__),
    (__webpack_require__.t = function (_, e) {
      if ((1 & e && (_ = this(_)), 8 & e)) return _;
      if ("object" == typeof _ && _) {
        if (4 & e && _.__esModule) return _;
        if (16 & e && "function" == typeof _.then) return _;
      }
      var t = Object.create(null);
      __webpack_require__.r(t);
      var i = {};
      leafPrototypes = leafPrototypes || [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto),
      ];
      for (
        var d = 2 & e && _;
        "object" == typeof d && !~leafPrototypes.indexOf(d);
        d = getProto(d)
      )
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => _[e]));
      return (i.default = () => _), __webpack_require__.d(t, i), t;
    }),
    (__webpack_require__.d = (_, e) => {
      for (var t in e)
        __webpack_require__.o(e, t) &&
          !__webpack_require__.o(_, t) &&
          Object.defineProperty(_, t, { enumerable: !0, get: e[t] });
    }),
    (__webpack_require__.e = () => Promise.resolve()),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (_) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.hmd = (_) => (
      (_ = Object.create(_)).children || (_.children = []),
      Object.defineProperty(_, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              _.id
          );
        },
      }),
      _
    )),
    (__webpack_require__.o = (_, e) =>
      Object.prototype.hasOwnProperty.call(_, e)),
    (__webpack_require__.r = (_) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(_, "__esModule", { value: !0 });
    }),
    (() => {
      var _ = { 73004: 0 };
      __webpack_require__.O.j = (e) => 0 === _[e];
      var e = (e, t) => {
          var i,
            d,
            [s, a, o] = t,
            n = 0;
          for (i in a)
            __webpack_require__.o(a, i) && (__webpack_require__.m[i] = a[i]);
          if (o) var r = o(__webpack_require__);
          for (e && e(t); n < s.length; n++)
            (d = s[n]),
              __webpack_require__.o(_, d) && _[d] && _[d][0](),
              (_[s[n]] = 0);
          return __webpack_require__.O(r);
        },
        t = (self.webpackChunkvk = self.webpackChunkvk || []);
      t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
    })();
  var __webpack_exports__ = __webpack_require__.O(void 0, [11216, 68592], () =>
    __webpack_require__(60694)
  );
  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
