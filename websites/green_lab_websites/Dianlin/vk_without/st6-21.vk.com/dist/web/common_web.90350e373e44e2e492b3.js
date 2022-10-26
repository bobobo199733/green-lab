(() => {
  var e,
    t,
    o,
    n,
    i = {
      267317: (e, t, o) => {
        "use strict";
        o.d(t, { init: () => a });
        o(991181), o(856997), o(296253), o(820075), o(319371);
        var n = o(479957),
          i = o(555971),
          r = "supportedFeatures";
        function a() {
          var e = {
              is_schemes_supported: (0, i.isCSSVariablesSupported)(),
              is_auto_schemes_supported: (0, i.isAutoSchemesSupported)(),
              current_scheme: (0, i.isDarkTheme)() ? 2 : (0, i.isLightTheme)(),
            },
            t = Object.keys(e)
              .sort()
              .map((t) => `${t}:${Number(e[t])}`)
              .join("/");
          if (localStorage && localStorage.getItem) {
            var o = localStorage.getItem(r);
            (null !== o && t === o) ||
              (localStorage.setItem(r, t),
              (0, n.statlogsValueEvent)("browser_features", t));
          }
        }
      },
      679239: (e, t, o) => {
        "use strict";
        o.d(t, { default: () => a });
        o(530522),
          o(66108),
          o(850110),
          o(579665),
          o(95767),
          o(940851),
          o(991181),
          o(856997),
          o(296253);
        var n = o(171516);
        function i(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null == o) return;
              var n,
                i,
                r = [],
                a = !0,
                s = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (r.push(n.value), !t || r.length !== t);
                  a = !0
                );
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw i;
                }
              }
              return r;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return r(e, t);
              var o = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === o && e.constructor && (o = e.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(e);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return r(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
          return n;
        }
        const a = {
          URL: "special-event",
          ACT: "getPopup",
          start: function (e, t) {
            if (
              (t.stopPropagation(),
              t.preventDefault(),
              (this.id = window.domData(e, "id")),
              this.id && (this.sendStats("click"), !this.timeoutHandle))
            ) {
              var o = Number(window.domData(e, "v")) || 0;
              this.duration ||
                (this.duration = Number(window.domData(e, "duration")) || 0),
                this.animationUrl ||
                  (this.animationUrl =
                    String(atob(window.domData(e, "animation-url"))) || 0),
                this.width ||
                  (this.width = Number(window.domData(e, "width")) || 0),
                this.height ||
                  (this.height = Number(window.domData(e, "height")) || 0),
                (this.hasPopup = Boolean(window.domData(e, "popup"))),
                this.duration && this.animationUrl
                  ? !this.animationData ||
                    !this.animationData.v ||
                    ("number" == typeof this.v && this.v !== o)
                    ? ((this.v = o),
                      Promise.all([
                        this._getAnimation(),
                        this._loadAnimator(),
                      ]).then((e) => {
                        var t = i(e, 2),
                          o = t[0],
                          n = t[1];
                        (this.animationData = JSON.parse(o)),
                          (this.animator = n),
                          this._play();
                      }))
                    : this._play()
                  : this.hasPopup &&
                    this._loadPopupData(() => this._showPopup());
            }
          },
          _getAnimation: function () {
            return new Promise((e) => {
              var t = new XMLHttpRequest();
              t.open("GET", this.animationUrl, !0),
                t.send(),
                (t.onreadystatechange = () => {
                  4 === t.readyState && e(t.responseText);
                });
            });
          },
          _showPopup: function () {
            if ("function" == typeof window.MessageBox) {
              var e = this._popupData || {},
                t = e.html,
                o = e.title,
                n = void 0 === o ? "" : o,
                i = e.js,
                r = void 0 === i ? "" : i;
              if (t) {
                var a = new window.MessageBox({
                  title: n,
                  hideButtons: !0,
                  needShadow: !1,
                  containerClass: "ImageStatusPopup__container",
                  onDestroy: () => {
                    window.cur.specialBox = null;
                  },
                  onShow: () => {
                    this.sendStats("popup_showed");
                  },
                });
                (window.cur.specialBox = a),
                  a.content(t),
                  a.show(),
                  setTimeout(() => {
                    a.evalBox(r, this.URL, { act: this.ACT });
                  }),
                  delete this._popupData;
              }
            }
          },
          _loadPopupData(e) {
            vk.id &&
              this.hasPopup &&
              ajax.post(
                this.URL,
                { act: this.ACT },
                {
                  onDone: (t, o, n) => {
                    (this._popupData = { title: t, html: o, js: n }), e && e();
                  },
                  onFail: () => !0,
                }
              );
          },
          _play: function () {
            if (this.animator) {
              this.frame ||
                ((this.frame = document.createElement("div")),
                (this.frame.className = "special_event_frame"),
                document.body.appendChild(this.frame)),
                this.width && (this.frame.style.width = this.width + "px"),
                this.height && (this.frame.style.height = this.height + "px"),
                (this.frame.style.display = "block");
              var e = this.animator.loadAnimation({
                container: this.frame,
                renderer: "svg",
                loop: !1,
                autoplay: !0,
                animationData: this.animationData,
              });
              this._loadPopupData(),
                (this.timeoutHandle = setTimeout(() => {
                  e.stop(),
                    e.destroy(),
                    (this.frame.style.display = "none"),
                    (this.timeoutHandle = null),
                    this.sendStats("showed"),
                    this._showPopup();
                }, this.duration));
            }
          },
          init(e) {
            var t = e.platform,
              o = e.animatorLoader;
            (this.platform = t), (this._loadAnimator = o);
          },
          popupAction() {
            this.sendStats("popup_action");
            var e = curBox();
            e &&
              setTimeout(() => {
                e.hide();
              }, 0);
          },
          sendStats(e) {
            e &&
              (0, n.saveStatlogEvents)({
                name: "special_event",
                value: e,
                keys: [this.platform, this.id],
              });
          },
        };
      },
      239316: (e, t, o) => {
        "use strict";
        o.d(t, { messageWrap: () => i, messageCheck: () => r });
        o(21466);
        var n = o(961540);
        function i(e) {
          return { type: "sw", data: e };
        }
        function r(e) {
          return (
            ("" === e.origin || e.origin.match(n.VK_ORIGIN_REGEX_STRICT)) &&
            e.data &&
            e.data.data &&
            "sw" === e.data.type
          );
        }
      },
      124702: (e, t, o) => {
        "use strict";
        o.d(t, { initCommonWeb: () => Ee });
        o(976142), o(59357), o(966337), o(504836);
        var n = o(267317),
          i = (o(761508), o(428163)),
          r = o(426173),
          a = o(473009),
          s = (o(511417), o(912322), o(159121)),
          d = o(376567),
          l = o(293680),
          w = o(896011),
          c = o(668040),
          u = o(726271),
          h = o(99392),
          p = o(206735),
          f = o(676821),
          m = o(635676),
          g = o(364890),
          v = o(786067),
          y = o(671131),
          b = o(26330),
          _ = o(961540),
          k = o(787910),
          S = o(803834),
          T = o(561697),
          B = o(460615),
          C = o(386409),
          E = o(325489),
          x = o(695690),
          A = o(689433),
          L = o(516604),
          I = o(447215),
          P = o(289988),
          O = o(787481),
          D = o(754204),
          N = o(635429),
          M = o(654612),
          R = o(486125),
          H = o(998312),
          V = o(635093),
          j = o(850167),
          U = o(996497),
          F = o(523459),
          W = o(376852),
          q = o(427909),
          z = o(517719),
          G = o(376270),
          K = o(100416),
          Q = o(789466),
          Y = o(982452),
          $ = o(609720),
          X = o(475632),
          J = o(315544),
          Z = o(363604),
          ee = o(695724),
          te = o(49535),
          oe = o(778273),
          ne = o(379633),
          ie = o(999924),
          re = o(113165),
          ae = o(982884),
          se = o(848001),
          de = o(19331),
          le = o(649846),
          we = o(838648),
          ce = o(187276),
          ue = (o(665288), o(840130)),
          he = o(449849),
          pe = o(196022),
          fe = o(448632),
          me = o(189798);
        (0, a.init)();
        var ge = window.vk;
        function ve() {
          (window.ajaxCache = {}),
            (window.globalAjaxCache = {}),
            (window.ajax = l.ajax),
            window.ajax.enabled ||
              u.browser.search_bot ||
              location.replace("/badbrowser.php"),
            (window.AjaxConvert = c),
            (window.ajx2q = c.toQueryString),
            (window.q2ajx = c.fromQueryString),
            (window.requestBox = w.requestBox),
            (window.activateMobileBox = w.activateMobileBox),
            (window.validateMobileBox = w.validateMobileBox),
            (window.validatePassBox = w.validatePassBox);
        }
        function ye() {
          (window.NextPageID = 1),
            (window.__debugMode = !0),
            (window.__dev =
              /[a-z0-9_\-]+\.[a-z0-9_\-]+\.[a-z0-9_\-]+\.[a-z0-9_\-]+/i.test(
                locHost
              ) &&
              !/[a-z0-9_\-]+\.tau\.[a-z0-9_\-]+\.[a-z0-9_\-]+/i.test(locHost) &&
              !/^tk-/.test(locHost)),
            window.__dev || (window.__debugMode = !1),
            (window._wf = 0),
            (window.cur = {
              destroy: [],
              beforeNavigateRequestHandlers: [],
              nav: [],
            }),
            (ge.width = 960),
            (ge.started = (0, ee.vkNow)()),
            (ge.counts = {}),
            (0, d.setCookie)("remixscreen_width", window.screen.width, 365),
            (0, d.setCookie)("remixscreen_height", window.screen.height, 365),
            (0, d.setCookie)(
              "remixscreen_dpr",
              window.devicePixelRatio || 1,
              365
            ),
            (0, d.setCookie)(
              "remixscreen_depth",
              window.screen.pixelDepth
                ? window.screen.pixelDepth
                : window.screen.colorDepth,
              365
            ),
            (0, d.setCookie)(
              "remixscreen_orient",
              Number(window.screen.width >= window.screen.height),
              7
            );
          var e = window.outerWidth / window.innerWidth;
          (e = e && e > 0.95 && e < 1.05 ? "1" : e ? e.toFixed(2) : "0"),
            (0, d.setCookie)("remixscreen_winzoom", e, 365),
            (0, I.initNavCounters)(),
            (0, T.fillStaticFilesData)(),
            (function () {
              (0, te.addEvent)(window, "unload", function () {
                for (var e in vkCache)
                  vkCache[e].handle &&
                    vkCache[e].handle.elem !== window &&
                    (0, te.removeEvent)(vkCache[e].handle.elem);
              }),
                (0, te.addEvent)(window, "DOMContentLoaded load", function () {
                  ge.loaded || ((ge.loaded = !0), (0, C.updSideTopLink)()),
                    (0, N.checkPageBlocks)();
                }),
                (0, te.addEvent)(document, "mousedown", function (e) {
                  (window._wf = 1), (cur.__mdEvent = e);
                }),
                window.browser.mobile ||
                  (0, te.addEvent)(document, "keydown", Q.handleGlobalEsc);
              window.hideCookiesPolicy = Q.hideCookiesPolicy;
            })();
        }
        window.MediaSelector ||
          (window.MediaSelector = function () {
            return (
              (0, M.showFastBox)(
                (0, v.getLang)("global_adblock_error_title"),
                (0, v.getLang)("global_adblock_error_notice")
              ),
              {}
            );
          });
        var be = 0;
        function _e() {
          if (
            ((window.headNode = (0, J.geByTag1)("head")),
            (window.icoNode = (0, J.geByTag1)("link", headNode)),
            (window.bodyNode = (0, J.geByTag1)("body")),
            (window.htmlNode = (0, J.geByTag1)("html")),
            (window.utilsNode = (0, J.ge)("utils")),
            (window._fixedNav = !1),
            (window._tbLink = {}),
            (0, te.addEvent)(bodyNode, "resize", N.onBodyResize.pbind(!1)),
            utilsNode)
          ) {
            u.browser.mozilla
              ? (0, J.addClass)(bodyNode, "firefox")
              : u.browser.mobile && (0, J.addClass)(bodyNode, "mobfixed"),
              (0, q.initLegacyBrowserDetectionInAttribute)();
            var e = (0, J.ge)("layer_bg"),
              t = e.nextSibling,
              o = (0, J.ge)("box_layer_bg"),
              n = o.nextSibling;
            (window.layerBG = e),
              (window.boxLayerBG = o),
              (window.layerWrap = t),
              (window.layer = t.firstChild),
              (window.boxLayerWrap = n),
              (window.boxLayer = n.firstChild),
              (window.boxLoader = n.firstChild.firstChild),
              (window._stlSide = (0, J.ge)("stl_side")),
              (window._stlLeft = (0, J.ge)("stl_left")),
              (window._stlShown = 0),
              (window._stlWas = 0),
              (window._stlWasSet = 0),
              (window._stlBack = 0),
              (window._regBar = 0),
              (window.__afterFocus = !1),
              u.browser.mobile || (0, Z.initStl)(),
              (0, te.addEvent)(n, "click", boxQueue.hideLastCheck),
              (window.layers = (0, y.initLayers)(e, t, o, n)),
              hab.init(),
              window._retinaInit ? window._retinaInit() : (be = 1),
              ge.disableSW ||
                ((window.PushNotifier = ne.default),
                (window.sw = new ie.SWClient()),
                window.sw
                  .register()
                  .then(() => {
                    (window.pushNotifier = new ne.default(
                      window.sw,
                      ie.SWClient
                    )),
                      window.sw.storePushHash();
                  })
                  .catch((e) => console.log(e)));
          }
        }
        function ke() {
          if (utilsNode) {
            (0, Z.updateSTL)();
            var e = (0, J.ge)("side_bar");
            if (
              ((window.pageNode = (0, J.ge)("page_wrap")),
              (window._fixedNav =
                e && "fixed" === (0, J.getStyle)(e, "position")),
              (window._tbLink = (0, J.ge)("top_back_link")),
              u.browser.chrome || u.browser.msie_edge
                ? (window.scrollNode = document.scrollingElement || bodyNode)
                : (window.scrollNode = u.browser.safari ? bodyNode : htmlNode),
              (0, N.onBodyResize)(),
              (ge.dt = (0, de.calculateTimeOffsets)()),
              setTimeout(N.onBodyResize.pbind(!1), 0),
              (0, G.updateAriaElements)(),
              (0, G.makeInteractiveMVKA11yProposal)(),
              (0, n.init)(),
              window.addEventListener("scroll", N.onBodyScroll, {
                passive: !0,
              }),
              window.debuglogInit && window.debuglogInit(),
              !ge.id &&
                b.default.checkVersion() &&
                b.default.get("last_reloaded"))
            )
              try {
                var t = {};
                (0, ee.each)(
                  ["sound_notify_off", "im_ui_notify_off", "_okcls_uuid"],
                  (e, o) => {
                    var n = b.default.get(o);
                    null !== n && (t[o] = n);
                  }
                ),
                  window.localStorage.clear(),
                  (0, ee.each)(t, (e, t) => b.default.set(e, t));
              } catch (e) {}
          }
        }
        function Se() {
          le.navigationStat.addStatEvent(
            le.navigationStat.getModule(),
            le.NavigationProductionStatEventTypes.TAB_OPEN
          );
        }
        class Te {
          constructor(e, t) {
            (this.count = t || 1), (this.func = e);
          }
          done() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            (this.count -= e), this.count <= 0 && this.func();
          }
        }
        function Be(e) {
          ge.loaded ? e() : (0, te.addEvent)(window, "load", e);
        }
        function Ce() {
          (window.showWriteMessageBox = V.showWriteMessageBox),
            (window.giftsBox = V.giftsBox),
            (window.moneyTransferBox = V.moneyTransferBox),
            (window.reportAd = V.reportAd),
            (window.mobilePromo = V.mobilePromo),
            (window.showAudioClaimWarning = V.showAudioClaimWarning),
            (window.menuSettings = V.menuSettings),
            (window.showSettingsAddressBox = V.showSettingsAddressBox),
            (window.sureDeleteAll = V.sureDeleteAll),
            (window.imageStatusPopup = V.imageStatusPopup),
            (window.TopNotifier = (0, j.initTopNotifier)()),
            (window.showPhoto = j.showPhoto),
            (window.showManyPhoto = j.showManyPhoto),
            (window.showAlbums = j.showAlbums),
            (window.showAlbum = j.showAlbum),
            (window.showPhotoTags = j.showPhotoTags),
            (window.AudioMessagePlayer = j.AudioMessagePlayer),
            (window.showVideoTags = j.showVideoTags),
            (window.videoCallback = j.videoCallback),
            (window.showWiki = j.showWiki),
            (window.showApp = j.showApp),
            (window.showPodcast = j.showPodcast),
            (window.podcastStartFrom = j.podcastStartFrom),
            (window.showAttachProductBox = j.showAttachProductBox),
            (window.articlePrepare = j.articlePrepare),
            (window.isArticleLayerOpen = j.isArticleLayerOpen),
            (window.openArticleEditor = j.openArticleEditor),
            (window.mentionOver = H.mentionOver),
            (window.mentionClick = j.mentionClick),
            (window.mobileOnlineTip = H.mobileOnlineTip),
            (window.pageVerifiedTip = H.pageVerifiedTip),
            (window.audioShowActionTooltip = H.audioShowActionTooltip),
            (window.shareAudioPlaylist = j.shareAudioPlaylist),
            (window.getAudioPlayer = j.getAudioPlayer),
            (window.deleteAudioOnClaim = j.deleteAudioOnClaim),
            (window.initTopAudioPlayer = j.initTopAudioPlayer),
            (window.bookmark = j.bookmark),
            (window.bookmarkPost = j.bookmarkPost),
            (window.bookmarkArticle = j.bookmarkArticle),
            (window.bookmarkLink = j.bookmarkLink),
            (window.bookmarkPodcast = j.bookmarkPodcast),
            (window.bookmarkNarrative = j.bookmarkNarrative),
            (window.bookmarkEvent = j.bookmarkEvent),
            (window.bookmarkYoulaProduct = j.bookmarkYoulaProduct),
            (window.bookmarkTooltip = H.bookmarkTooltip),
            (window.showStory = re.showStory),
            (window.showNarrative = re.showNarrative),
            (window.storiesPreloadStatic = re.storiesPreloadStatic),
            (window.sendMask = re.sendMask),
            (window.showDonutSubscribePopup = j.showDonutSubscribePopup),
            (window.sendCoronaStatusStat = j.sendCoronaStatusStat),
            (window.sendImageStatusStat = j.sendImageStatusStat),
            (window.vkConnectTermsModal = new ce.VkConnectTermsModal()),
            (window.showAskQuestionBox = F.showAskQuestionBox),
            (0, ue.exposePageBottomBanners)(),
            (0, U.initFeatureEntriesInteractiveHandlers)();
        }
        var Ee = () => {
          (window.partConfigEnabled = de.partConfigEnabled),
            (0, J.initDomScripts)(),
            (window.ge = J.ge),
            (window.geByTag = J.geByTag),
            (window.geByTag1 = J.geByTag1),
            (window.geByClass = J.geByClass),
            (window.geByClass1 = J.geByClass1),
            (window.gpeByClass = J.gpeByClass),
            (window.domQuery = J.domQuery),
            (window.domQuery1 = J.domQuery1),
            (window.domClosest = J.domClosest),
            (window.ce = J.ce),
            (window.cf = J.cf),
            (window.re = J.re),
            (window.se = J.se),
            (window.sech = J.sech),
            (window.rs = J.rs),
            (window.domReplaceEl = J.domReplaceEl),
            (window.domEL = J.domEL),
            (window.domNS = J.domNS),
            (window.domPS = J.domPS),
            (window.domFC = J.domFC),
            (window.domLC = J.domLC),
            (window.domPN = J.domPN),
            (window.domChildren = J.domChildren),
            (window.domInsertBefore = J.domInsertBefore),
            (window.domInsertAfter = J.domInsertAfter),
            (window.domByClass = J.domByClass),
            (window.domData = J.domData),
            (window.domChildIndex = J.domChildIndex),
            (window.domCA = J.domCA),
            (window.domClosestSibling = J.domClosestSibling),
            (window.matchesSelector = J.matchesSelector),
            (window.isHover = J.isHover),
            (window.isAncestor = J.isAncestor),
            (window.getScroll = J.getScroll),
            (window.domClosestPositioned = J.domClosestPositioned),
            (window.domClosestOverflowHidden = J.domClosestOverflowHidden),
            (window.show = J.show),
            (window.hide = J.hide),
            (window.isVisible = J.isVisible),
            (window.clientHeight = J.clientHeight),
            (window.getClientRectOffsetY = J.getClientRectOffsetY),
            (window.toggle = J.toggle),
            (window.boundingRectEnabled = J.boundingRectEnabled),
            (window.getXYRect = J.getXYRect),
            (window.getXY = J.getXY),
            (window.isWindow = J.isWindow),
            (window.getSize = J.getSize),
            (window.hasClass = J.hasClass),
            (window.addClass = J.addClass),
            (window.addClassDelayed = J.addClassDelayed),
            (window.removeClass = J.removeClass),
            (window.removeClassDelayed = J.removeClassDelayed),
            (window.toggleClass = J.toggleClass),
            (window.toggleClassDelayed = J.toggleClassDelayed),
            (window.replaceClass = J.replaceClass),
            (window.getStyle = J.getStyle),
            (window.setStyle = J.setStyle),
            (window.data = J.data),
            (window.attr = J.attr),
            (window.removeAttr = J.removeAttr),
            (window.removeData = J.removeData),
            (window.cleanElems = J.cleanElems),
            (window.setTitle = J.setTitle),
            (window.getZoom = J.getZoom),
            (window.val = J.val),
            (window.elfocus = J.elfocus),
            (window.traverseParent = J.traverseParent),
            (window.getH = J.getH),
            (window.getW = J.getW),
            (window.domClosestByTag = J.domClosestByTag),
            (window.setDocumentTitle = J.setDocumentTitle),
            (window.lockDocumentTitle = J.lockDocumentTitle),
            (window.KEY = te.KEY),
            (window.addEvent = te.addEvent),
            (window.removeEvent = te.removeEvent),
            (window.triggerEvent = te.triggerEvent),
            (window.cancelEvent = te.cancelEvent),
            (window.stopEvent = te.stopEvent),
            (window.normEvent = te.normEvent),
            (window.checkEvent = te.checkEvent),
            (window.checkKeyboardEvent = te.checkKeyboardEvent),
            (window.checkOver = te.checkOver),
            (0, ee.initUtilsCommon)(),
            (window.isRetina = ee.isRetina),
            (window.extractUrls = ee.extractUrls),
            (window.serializeForm = ee.serializeForm),
            (window.addTemplates = ee.addTemplates),
            (window.getTemplate = ee.getTemplate),
            (window.rand = ee.rand),
            (window.irand = ee.irand),
            (window.isUndefined = ee.isUndefined),
            (window.isFunction = ee.isFunction),
            (window.isArray = ee.isArray),
            (window.isString = ee.isString),
            (window.isObject = ee.isObject),
            (window.isEmpty = ee.isEmpty),
            (window.vkNow = ee.vkNow),
            (window.vkImage = ee.vkImage),
            (window.trim = ee.trim),
            (window.stripHTML = ee.stripHTML),
            (window.escapeRE = ee.escapeRE),
            (window.intval = ee.intval),
            (window.floatval = ee.floatval),
            (window.positive = ee.positive),
            (window.isNumeric = ee.isNumeric),
            (window.winToUtf = ee.winToUtf),
            (window.replaceEntities = ee.replaceEntities),
            (window.clean = ee.clean),
            (window.unclean = ee.unclean),
            (window.each = ee.each),
            (window.indexOf = ee.indexOf),
            (window.inArray = ee.inArray),
            (window.clone = ee.clone),
            (window.extend = ee.extend),
            (window.vkLocal = ee.vkLocal),
            (window.lTimeout = ee.lTimeout),
            (window.formatCount = ee.formatCount),
            (window.encodeHtml = ee.encodeHtml),
            (window.decodeHtml = ee.decodeHtml),
            (window.encodeHTMLEntities = he.encodeHTMLEntities),
            (window.decodeHTMLEntities = he.decodeHTMLEntities),
            (window.logout = i.logout),
            (window.writeLogoutStat = r.writeLogout),
            (window.getHostName = _.getHostName),
            ve(),
            (0, d.initCookies)(),
            (window.getCookie = d.getCookie),
            (window.setCookie = d.setCookie),
            (0, O.initDebugTools)(),
            (window.debugLog = O.debugLog),
            (window.logImError = D.logImError),
            (window.isToday = P.isToday),
            (window.isYesterday = P.isYesterday),
            (window.isTomorrow = P.isTomorrow),
            (window.isSameDate = P.isSameDate),
            (window.leadingZero = P.leadingZero),
            (window.formatTime = P.formatTime),
            (window.getServerTime = P.getServerTime),
            (window.parseLatin = v.parseLatin),
            (window.parseCyr = v.parseCyr),
            (window.parseLatKeys = v.parseLatKeys),
            (window.langNumeric = v.langNumeric),
            (window.langSex = v.langSex),
            (window.langStr = v.langStr),
            (window.addLangKeys = v.addLangKeys),
            (window.getLang = v.getLang),
            (window.langDate = v.langDate),
            (window.getShortDate = v.getShortDate),
            (window.getShortDateWithTime = v.getShortDateWithTime),
            (window.getShortDateOrTime = v.getShortDateOrTime),
            (window.langWordNumeric = v.langWordNumeric),
            (window.getDateText = v.getDateText),
            (window.getBigDateNew = v.getBigDateNew),
            (window.getSmDate = v.getSmDate),
            (window.scrollToY = S.scrollToY),
            (window.scrollToTop = S.scrollToTop),
            (window.scrollGetX = S.scrollGetX),
            (window.scrollGetY = S.scrollGetY),
            (window.disableBodyScroll = S.disableBodyScroll),
            (window.enableBodyScroll = S.enableBodyScroll),
            (window.Chat = q.Chat),
            (window.__qlTimer = null),
            (window.__qlClear = q.__qlClear),
            (window.onLoginDone = q.onLoginDone),
            (window.onLoginFailed = q.onLoginFailed),
            (window.onLoginCaptcha = q.onLoginCaptcha),
            (window.onLoginReCaptcha = q.onLoginReCaptcha),
            (window.storePasswordCredential = q.storePasswordCredential),
            (window.cssAnim = q.cssAnim),
            (window.imagesLoader = q.imagesLoader),
            (window.nodeUpdated = q.nodeUpdated),
            (window.hideNewsAnnounce = q.hideNewsAnnounce),
            (window.leftAdBlockClose = q.leftAdBlockClose),
            (window.leftBlockToggleFriend = q.leftBlockToggleFriend),
            (window.leftBlockFriendTooltip = q.leftBlockFriendTooltip),
            (window.placeholderSetup = K.placeholderSetup),
            (window.placeholderInit = K.placeholderInit),
            (window.showTooltip = W.showTooltip),
            (window.showTitle = W.showTitle),
            (window.showHint = W.showHint),
            (window.topMsg = s.topMsg),
            (window.showMsg = s.showMsg),
            (window.topError = s.topError),
            (window.showGlobalPrg = s.showGlobalPrg),
            (window.checkTextLength = Y.checkTextLength),
            (window.getSelectionText = Y.getSelectionText),
            (window.goAway = Y.goAway),
            (window.debounce = $.debounce),
            (window.hashCode = Y.hashCode),
            (window.isFullScreen = Y.isFullScreen),
            (window.parallel = Y.parallel),
            (window.parseJSON = Y.parseJSON),
            (window.shuffle = Y.shuffle),
            (window.throttle = Y.throttle),
            (window.toggleOnline = Y.toggleOnline),
            (window.updateMoney = Y.updateMoney),
            (window.onlinePlatformClass = Y.onlinePlatformClass),
            (window.Fx = m.Fx),
            (window.fx = m.Fx),
            (window.animate = m.animate),
            (window.cubicBezier = m.cubicBezier),
            (window.fadeTo = m.fadeTo),
            (window.genFx = m.genFx),
            (window.getRGB = m.getRGB),
            (window.getColor = m.getColor),
            (window.slideDown = m.slideDown),
            (window.slideUp = m.slideUp),
            (window.slideToggle = m.slideToggle),
            (window.fadeIn = m.fadeIn),
            (window.fadeOut = m.fadeOut),
            (window.fadeToggle = m.fadeToggle),
            (window.animateCount = m.animateCount),
            (window.updateAriaElements = G.updateAriaElements),
            (window.updateAriaCheckboxes = G.updateAriaCheckboxes),
            (window.cancelStackFilter = X.cancelStackFilter),
            (window.cancelStackPush = X.cancelStackPush),
            (window.cancelStackPop = X.cancelStackPop),
            (0, se.init)(),
            (window.MarketAnalyticsManager = we.MarketAnalyticsManager),
            (0, pe.makeAuthAndApiGlobal)(),
            (0, me.setLoginConfig)({
              onCaptcha: fe.handleCaptcha,
              domain: ge.apiConfigDomains.loginDomain,
            }),
            (0, me.setApiConfig)({
              onCaptcha: fe.handleCaptcha,
              domain: ge.apiConfigDomains.apiDomain,
            }),
            (window.ElementTooltip = h.default),
            (0, p.initFavIcon)(),
            (window.setFavIcon = p.setFavIcon),
            1 === ge.al
              ? (location.search || "/" !== location.pathname) &&
                location.replace("/")
              : (3 !== ge.al || history.pushState || (ge.al = 2),
                location.search ||
                  "/index.php" !== location.pathname ||
                  location.replace("/"),
                (ge.version = !1)),
            (0, T.initStaticManager)(),
            (0, u.initBrowserUtils)(),
            (window.browser = u.browser),
            (window.mobPlatforms = u.mobPlatforms),
            (window.browserFeatures = u.browserFeatures),
            (0, f.initFlashUtils)(),
            (window.toggleFlash = f.toggleFlash),
            (window.renderFlash = f.renderFlash),
            ye(),
            (window.updateHeaderStyles = I.updateHeaderStyles),
            (window.updateNarrow = N.updateNarrow),
            (window.checkPageBlocks = N.checkPageBlocks),
            (window.redraw = N.redraw),
            (window.onBodyResize = N.onBodyResize),
            (window.onBodyScroll = N.onBodyScroll),
            (window.leftBlockOver = N.leftBlockOver),
            (window.leftBlockOut = N.leftBlockOut),
            (window.leftBlockHide = N.leftBlockHide),
            (window.onDocumentClick = Q.onDocumentClick),
            (window.onEnter = Q.onEnter),
            (window.onCtrlEnter = Q.onCtrlEnter),
            (window.logLeftMenuClicks = B.logLeftMenuClicks),
            (window.autosizeSetup = N.autosizeSetup),
            (window.getProgressBarEl = N.getProgressBarEl),
            (window.getProgressHtml = N.getProgressHtml),
            (0, oe.initAds)(),
            (window.onDomReady = (e) => e()),
            (window.currentModule = () =>
              cur.currentModule ? cur.currentModule() : cur.module),
            (window.hab = (0, g.initHub)()),
            (window.ls = b.default),
            (window.shortCurrency = k.shortCurrency),
            (window.statlogsValueEvent = B.statlogsValueEvent),
            (window.saveSearchAttemptStats = B.saveSearchAttemptStats),
            (window.removeSearchPositionTracker =
              B.removeSearchPositionTracker),
            (window.callHub = Te),
            (window.CallHub = Te),
            (window.zNav = I.zNav),
            (window.handlePageView = I.handlePageView),
            (window.handlePageParams = I.handlePageParams),
            (window.handlePageCount = I.handlePageCount),
            (window.processDestroy = I.processDestroy),
            (window.globalHistoryDestroy = I.globalHistoryDestroy),
            (window.showBackLink = I.showBackLink),
            (window.nav = L.default),
            nav.init(),
            setTimeout(function () {
              var e = (0, ee.intval)((0, d.getCookie)("remixrt"));
              window.devicePixelRatio >= 2 &&
              (!u.browser.iphone || (0, d.getCookie)("remixme"))
                ? 1 & e ||
                  ((0, d.setCookie)("remixrt", 1 | e, 365),
                  (window._retinaInit = function () {
                    window.stManager.add(["retina.css"]),
                      (0, J.addClass)(document.body, "is_2x");
                  }),
                  be && window._retinaInit())
                : 1 & e && (0, d.setCookie)("remixrt", 1 ^ e, 365);
            }, 0),
            (0, R.initBoxQueue)(),
            (window.boxRefreshCoords = R.boxRefreshCoords),
            (window.MessageBox = M.MessageBox),
            (window.showBox = M.showBox),
            (window.showTabbedBox = M.showTabbedBox),
            (window.showFastBox = M.showFastBox),
            (window.showCaptchaBox = M.showCaptchaBox),
            (window.showReCaptchaBox = M.showReCaptchaBox),
            (window.showDoneBox = R.showDoneBox),
            (window.TopMenu = N.TopMenu),
            (window.TopSearch = A.default),
            (window.handleScroll = Y.handleScroll),
            (window.loadScript = x.loadScript),
            (window.SpecialEvent = ae.default),
            (0, C.initUiHelpers)(),
            (window.notaBene = C.notaBene),
            (window.updSideTopLink = C.updSideTopLink),
            (window.createButton = C.createButton),
            (window.actionsMenuItemLocked = C.actionsMenuItemLocked),
            (window.lockActionsMenuItem = C.lockActionsMenuItem),
            (window.unlockActionsMenuItem = C.unlockActionsMenuItem),
            (window.linkLocked = C.linkLocked),
            (window.lockLink = C.lockLink),
            (window.unlockLink = C.unlockLink),
            (window.lockButton = C.lockButton),
            (window.unlockButton = C.unlockButton),
            (window.buttonLocked = C.isButtonLocked),
            (window.isButtonLocked = C.isButtonLocked),
            (window.disableButton = C.disableButton),
            (window.sbWidth = C.sbWidth),
            (window.isChecked = C.isChecked),
            (window.checkbox = C.checkbox),
            (window.disable = C.disable),
            (window.radioval = C.radioval),
            (window.radiobtn = C.radiobtn),
            (window.showProgress = C.showProgress),
            (window.hideProgress = C.hideProgress),
            (window.disableEl = C.disableEl),
            (window.enableEl = C.enableEl),
            (0, E.initVideo)(),
            (window.VideoConstants = E.VideoConstants),
            (window.showVideo = E.showVideo),
            (window.showInlineVideo = E.showInlineVideo),
            (window.loadInlineVideo = E.loadInlineVideo),
            (window.revertLastInlineVideo = E.revertLastInlineVideo),
            (window.pauseLastInlineVideo = E.pauseLastInlineVideo),
            (window.playLastInlineVideo = E.playLastInlineVideo),
            (0, z.initLongView)(),
            (0, q.initPostsLegacyVars)(),
            Ce(),
            (window.onLoaded = Be),
            (window.domStarted = _e),
            (window.domReady = ke),
            (window.curReady = Se),
            (0, O.debugLog)("common module enabled");
        };
      },
      676821: (e, t, o) => {
        "use strict";
        o.d(t, {
          initFlashUtils: () => l,
          toggleFlash: () => c,
          renderFlash: () => u,
        });
        o(751876), o(66108), o(296253), o(59357);
        var n = o(695724),
          i = o(315544),
          r = o(49535),
          a = o(376567),
          s = o(726271),
          d = o(668040);
        function l() {
          var e = "ShockwaveFlash.ShockwaveFlash",
            t = [0, 0, 0],
            o = "embed",
            i = 'type="application/x-shockwave-flash" ',
            r = (e) =>
              e.toString().replace("&", "&amp;").replace('"', "&quot;");
          if (
            navigator.plugins &&
            navigator.mimeTypes &&
            navigator.mimeTypes.length
          ) {
            var d = navigator.plugins["Shockwave Flash"];
            if (d && d.description)
              for (
                var l = d.description
                    .replace(/([a-zA-Z]|\s)+/, "")
                    .replace(/(\s+r|\s+b[0-9]+)/, ".")
                    .split("."),
                  w = 0;
                w < 3;
                ++w
              )
                t[w] = l[w] || 0;
          } else {
            if (_ua.indexOf("Windows CE") >= 0)
              for (var c = !0, u = 6; c; )
                try {
                  ++u, (c = new ActiveXObject(e + "." + u)), (t[0] = u);
                } catch (e) {}
            else
              try {
                t = new ActiveXObject(e + ".7")
                  .GetVariable("$version")
                  .split(" ")[1]
                  .split(",");
              } catch (e) {}
            (o = "object"),
              (i = 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
          }
          (s.browser.flashwrap =
            "embed" === o
              ? function (e, t) {
                  (t = (0, n.extend)(
                    {
                      id: e.id,
                      name: e.id,
                      width: e.width,
                      height: e.height,
                      style: e.style,
                      preventhide: e.preventhide,
                    },
                    t
                  )),
                    s.browser.flash >= e.version
                      ? (t.src = e.url)
                      : (t.src = e.express);
                  var o = [];
                  for (var a in t)
                    if (t.hasOwnProperty(a)) {
                      var d = t[a];
                      null != d && o.push(a + '="' + r(d) + '" ');
                    }
                  return `<embed ${i + o.join("")}/>`;
                }
              : function (e, t) {
                  s.browser.flash >= e.version
                    ? (t.movie = e.url)
                    : (t.movie = e.express);
                  var o = {
                      id: e.id,
                      width: e.width,
                      height: e.height,
                      style: e.style,
                      preventhide: e.preventhide,
                    },
                    n = [];
                  for (var a in o)
                    if (o.hasOwnProperty(a)) {
                      var d = o[a];
                      null != d && n.push(a + '="' + r(d) + '" ');
                    }
                  var l = [];
                  for (var w in t)
                    if (t.hasOwnProperty(w)) {
                      var c = t[w];
                      null != c &&
                        l.push(
                          '<param name="' + w + '" value="' + r(c) + '" />'
                        );
                    }
                  return `<object ${i + n.join("")}>${l.join("")}</object>`;
                }),
            t[0] < 7 && (t = [0, 0, 0]),
            (s.browser.flash = (0, n.intval)(t[0])),
            (0, a.setCookie)(
              "remixflash",
              `${(0, n.intval)(t[0])}.${(0, n.intval)(t[1])}.${(0, n.intval)(
                t[2]
              )}`,
              30
            );
        }
        var w = 0;
        function c(e, t) {
          if ((clearTimeout(w), t > 0)) w = setTimeout(() => c(e, 0), t);
          else {
            var o = e ? "visible" : "hidden";
            (0, r.triggerEvent)(document, e ? "unblock" : "block");
            var a = function (t, n) {
              n.getAttribute("preventhide") ||
                "internal/link" === n.getAttribute("type") ||
                ("flash_app" === n.id && s.browser.msie
                  ? e
                    ? (0, i.setStyle)(n, { position: "static", top: 0 })
                    : (0, i.setStyle)(n, {
                        position: "absolute",
                        top: "-5000px",
                      })
                  : (n.style.visibility = o));
            };
            (0, n.each)((0, i.geByTag)("embed"), a),
              (0, n.each)((0, i.geByTag)("object"), a);
          }
        }
        function u(e, t, o, r) {
          if (!t.url || !t.id) return !1;
          var a = (t = (0, n.extend)({ version: 9, width: 1, height: 1 }, t))
            .url;
          return (
            stVersions[a] || (stVersions[a] = ""),
            __debugMode &&
              stVersions[a] < 1e6 &&
              (stVersions[a] += (0, n.irand)(1e6, 2e6)),
            stVersions[a] &&
              (t.url +=
                (-1 === t.url.indexOf("?") ? "?" : "&") +
                "_stV=" +
                stVersions[a]),
            (o = (0, n.extend)(
              { quality: "high", flashvars: (0, d.toQueryString)(r) },
              o
            )),
            !(s.browser.flash < t.version) &&
              (((0, i.ge)(e).innerHTML = s.browser.flashwrap(t, o)), !0)
          );
        }
      },
      364890: (e, t, o) => {
        "use strict";
        o.d(t, { initHub: () => w });
        o(530522),
          o(850110),
          o(579665),
          o(95767),
          o(59357),
          o(66108),
          o(296253),
          o(21466),
          o(976142),
          o(751876);
        var n = o(49535),
          i = o(695724),
          r = o(668040),
          a = o(726271);
        function s(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null == o) return;
              var n,
                i,
                r = [],
                a = !0,
                s = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (r.push(n.value), !t || r.length !== t);
                  a = !0
                );
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw i;
                }
              }
              return r;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return d(e, t);
              var o = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === o && e.constructor && (o = e.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(e);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return d(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function d(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
          return n;
        }
        function l(e) {
          var t,
            o = function (e) {
              var t = s(e.split("#"), 2),
                o = t[0],
                n = t[1],
                i = s(o.split("?"), 2),
                a = i[0],
                d = i[1];
              return (
                a +
                (d
                  ? "?" + (0, r.toQueryString)((0, r.fromQueryString)(d))
                  : "") +
                (n ? "#" + n : "")
              );
            },
            d = (0, i.extend)({ onLocChange: () => {} }, e),
            l = function () {
              var e = "";
              return (
                (3 == vk.al ||
                  (e =
                    (location.toString().match(/#(.*)/) || {})[1] || "").substr(
                    0,
                    1
                  ) != vk.navPrefix) &&
                  (e =
                    (location.pathname || "") +
                    (location.search || "") +
                    (location.hash || "")),
                !e &&
                  vk.al > 1 &&
                  (e = (location.pathname || "") + (location.search || "")),
                o(e.replace(/^(\/|!)/, ""))
              );
            },
            w = l(),
            c = function (e) {
              var t = l();
              (t === w && !0 !== e) || (d.onLocChange(t), (w = t));
            };
          return {
            setLoc: function (e) {
              w = o(e);
              var t = (location.toString().match(/#(.*)/) || {})[1] || "";
              if (
                (!t &&
                  vk.al > 1 &&
                  (t = (location.pathname || "") + (location.search || "")),
                (t = (t = o(t)).replace(/^(\/|!)/, "")) !== w)
              ) {
                if (3 == vk.al)
                  try {
                    return (
                      window.saveScrollTopOnBack &&
                        (delete window.saveScrollTopOnBack,
                        history.replaceState(
                          {
                            scrollTop: window.lastScrollTop,
                            preventScroll: window.preventLocationScroll,
                          },
                          "",
                          `/${t}`
                        ),
                        window.preventLocationScroll &&
                          delete window.preventLocationScroll),
                      void history.pushState({}, "", `/${w}`)
                    );
                  } catch (e) {}
                (window.chHashFlag = !0),
                  (location.hash = "#" + vk.navPrefix + w);
              }
            },
            getLoc: l,
            init: function () {
              1 == vk.al && c(!0),
                3 == vk.al
                  ? ((0, n.addEvent)(window, "popstate", c),
                    a.browser.safari &&
                      (0, n.addEvent)(window, "hashchange", c))
                  : "onhashchange" in window
                  ? (0, n.addEvent)(window, "hashchange", function () {
                      window.chHashFlag ? (window.chHashFlag = !1) : c();
                    })
                  : (t = setInterval(c, 200));
            },
            setOptions: function (e) {
              d = (0, i.extend)(d, e);
            },
            checker: c,
            stop: function () {
              vk.al < 3
                ? clearInterval(t)
                : 3 == vk.al && (0, n.removeEvent)(window, "popstate", c);
            },
          };
        }
        function w() {
          return new l({
            onLocChange: function (e) {
              var t = { back: !0, hist: !0 };
              3 === vk.al &&
                history.state &&
                (0, i.isObject)(history.state) &&
                (t.scrollTop = (0, i.intval)(history.state.scrollTop)),
                nav.go("/" + e, void 0, t);
            },
          });
        }
      },
      671131: (e, t, o) => {
        "use strict";
        o.d(t, { initLayers: () => h });
        o(850110);
        var n = o(676821),
          i = o(315544),
          r = o(803834),
          a = o(325489),
          s = o(113165),
          d = o(695724),
          l = o(475632),
          w = o(850167),
          c = {
            sh: function (e, t) {
              (0, i.show)(e), (0, d.isFunction)(t) && t();
            },
            hd: function (e, t) {
              (0, i.hide)(e), (0, d.isFunction)(t) && t();
            },
            visible: !1,
            _show: function (e, t, o, s) {
              var d = "layers" + (boxQueue.count() + 1);
              (0, l.cancelStackPush)(d, function () {}),
                (0, i.setStyle)(e, {
                  opacity: o || "",
                  backgroundColor: s || "",
                }),
                c.visible || ((0, n.toggleFlash)(), (0, r.disableBodyScroll)()),
                c.visible || (0, a.pauseLastInlineVideo)(),
                (c.visible = !0),
                (0, i.addClass)(bodyNode, "layers_shown"),
                t.visibilityHide
                  ? (0, i.removeClass)(t, "box_layer_hidden")
                  : (0, i.show)(t),
                c.sh(e),
                window.updateWndVScroll && updateWndVScroll();
            },
            _hide: function (e, t) {
              c.hd(e, function () {
                var e = "layers" + (boxQueue.count() + 1);
                (0, l.cancelStackFilter)(e),
                  t && t.visibilityHide
                    ? (0, i.addClass)(t, "box_layer_hidden")
                    : (0, i.hide)(t),
                  (0, i.isVisible)(layerWrap) ||
                    cur._inLayer ||
                    ((0, i.isVisible)(boxLayerWrap) &&
                      !boxLayerWrap.visibilityHide) ||
                    !(
                      (window.mvcur && mvcur.minimized) ||
                      !(0, i.isVisible)(window.mvLayerWrap)
                    ) ||
                    (0, i.isVisible)(window.wkLayerWrap) ||
                    ((c.visible = !1),
                    (0, i.removeClass)(bodyNode, "layers_shown"),
                    (0, n.toggleFlash)(!0),
                    (0, r.enableBodyScroll)()),
                  window.updateWndVScroll && updateWndVScroll();
              }),
                c.visible || (0, a.playLastInlineVideo)();
            },
          },
          u = {
            push: function (e) {
              var t;
              window.Calls &&
                window.Calls.isInActiveCall &&
                "function" == typeof window.Calls.collapseCall &&
                window.Calls.collapseCall();
              var o = !!u.count() && u._layers[u._layers.length - 1];
              if (cur.pvShown && "temp" != cur.pvListId)
                t = [
                  "photo",
                  cur.pvData[cur.pvListId][cur.pvIndex].id,
                  cur.pvListId,
                  {
                    onHide: cur.pvOptions.onHide,
                    scroll: cur.pvNarrowScrollbar
                      ? cur.pvNarrowScrollbar.data.scrollTop
                      : 0,
                    onShow: e,
                    noHistory: !!cur.pvNoHistory,
                    histLen: cur.pvHistoryLength,
                  },
                ];
              else if (window.mvcur && mvcur.mvShown && !mvcur.minimized) {
                var n =
                    mvcur.options &&
                    (mvcur.options.autoplay || mvcur.options.focusPlay),
                  i = {
                    scroll: mvLayerWrap.scrollTop,
                    noHistory: !!mvcur.noHistory,
                    nomin: 1,
                    autoplay: n,
                    prevLoc: mvcur.mvPrevLoc,
                  };
                VideoPlaylist.getCurListId() &&
                  (i = (0, d.extend)(i, {
                    playlistId: VideoPlaylist.getCurListId(),
                    module: Videoview.getVideoModule(),
                    addParams: { force_no_repeat: 1, show_next: 1 },
                  })),
                  (t = ["video", mvcur.videoRaw, mvcur.listId, i]);
              } else if (window.wkcur && wkcur.shown)
                t = [
                  "wiki",
                  wkcur.wkRaw,
                  !1,
                  {
                    toScroll: wkLayerWrap.scrollTop,
                    prevLoc: wkcur.prevLoc,
                    myLoc: wkcur.myLoc,
                    onHide: wkcur.onHide,
                  },
                ];
              else if (cur.storyLayer)
                t = ["stories", cur.storyLayer.getList()];
              else {
                if (!cur.podcastEpisode || !cur.podcastEpisode.shown) return !1;
                t = ["podcast", cur.podcastEpisode.getEpisodeId()];
              }
              return (
                (o && t[0] == o[0] && t[1] == o[1] && t[2] == o[2]) ||
                  u._layers.push(t),
                (u.skipVideo = !1),
                !0
              );
            },
            noHistory: function () {
              for (var e = u._layers, t = e.length; t > 0; --t)
                ("photo" === e[t - 1][0] || "video" === e[t - 1][0]) &&
                  (e[t - 1][3].noHistory = 1);
            },
            hide: function () {
              (u._bl = !0),
                window.WkView && c.fullhide == WkView.hide
                  ? ((0, i.hide)(wkLayerWrap), clearTimeout(wkcur.showT))
                  : c.fullhide && c.fullhide(!0, !0),
                setTimeout(u.unblock, 5);
            },
            unblock: function () {
              u._bl = !1;
            },
            pop: function () {
              if (u.count() && !u._bl) {
                var e = u._layers.pop();
                if (u.skipVideo && ((u.skipVideo = !1), "video" == e[0]))
                  return u._layers.push(e), void (u.skipVideo = !1);
                "photo" === e[0]
                  ? ((0, d.extend)(e[3], { fromQueue: !0 }),
                    (0, w.showPhoto)(e[1], e[2], e[3], !1))
                  : "video" === e[0]
                  ? ((0, d.extend)(e[3], { fromQueue: !0 }),
                    (0, a.showVideo)(e[1], e[2], e[3], !1))
                  : "wiki" === e[0]
                  ? (0, w.showWiki)({ w: e[1] }, !1, !1, e[3])
                  : "stories" === e[0]
                  ? (0, s.showStory)(e[1])
                  : "podcast" === e[0] &&
                    (0, w.showPodcast)(null, e[1], null, "layer_back");
              }
            },
            back: function (e, t, o, n) {
              for (var i = u._layers, r = i.length; r > 0; --r)
                if (
                  (i[r - 1][0] == e && i[r - 1][1] == t) ||
                  (i[r - 1][0] == o && i[r - 1][1] == n)
                )
                  return (u._layers = i.slice(0, r)), u.pop(), !0;
              return !1;
            },
            count: function () {
              return u._layers.length;
            },
            clear: function () {
              u._layers = [];
            },
            _layers: [],
          };
        function h(e, t, o, n) {
          return (
            (window.layerQueue = u),
            (0, d.extend)(c, {
              show: c._show.pbind(e, t),
              boxshow: c._show.pbind(o, n),
              wrapshow: c._show.pbind(e),
              hide: c._hide.pbind(e, t),
              boxhide: c._hide.pbind(o, n),
              wraphide: c._hide.pbind(e),
            }),
            c
          );
        }
      },
      517719: (e, t, o) => {
        "use strict";
        o.d(t, { initLongView: () => N });
        o(751876), o(319371), o(991181), o(856997), o(296253);
        var n = o(26330),
          i = o(315544),
          r = o(49535),
          a = o(982452),
          s = o(803834),
          d = o(695724),
          l = "_longViewType",
          w = "_longViewIdled",
          c = "_longViewModule",
          u = "_longViewStarted",
          h = "_longViewProcessed",
          p = "_longViewCached",
          f = "_longViewHeight",
          m = "_longViewTop",
          g = "_longViewBottom",
          v = "REGULAR",
          y = "AUTOPLAY_AD",
          b = "LongView.viewed",
          _ = "LongView.idled",
          k = vk.longViewTestGroup,
          S = [],
          T = [],
          B = [],
          C = Date.now(),
          E = 0,
          x = 0,
          A = !1,
          L = null,
          I = null,
          P = null,
          O = null,
          D = {};
        function N() {
          k
            ? ((0, r.addEvent)(window, "blur", U),
              (0, r.addEvent)(window, "focus", F),
              onDomReady(() => setTimeout(M, 500)),
              (window.LongView = {
                register: H,
                onScroll: (0, a.throttle)(V, 50),
                onBeforePageChange: W,
                clearElemsCache: R,
                _debug: function () {
                  return {
                    started: T,
                    tracking: S,
                    viewedData: B,
                    viewIndexes: D,
                    blindTop: E,
                    blindBottom: x,
                  };
                },
              }))
            : (window.LongView = {
                register: () => {},
                onScroll: () => {},
                onBeforePageChange: () => {},
                clearElemsCache: () => {},
              });
        }
        function M() {
          var e = te();
          e.length && (X(e), oe());
        }
        function R() {
          S.forEach(function (e) {
            e[p] = !1;
          });
        }
        function H(e, t) {
          "im" === t &&
            !e[l] &&
            (function (e) {
              if ((0, i.hasClass)(e, "im-mess--post")) return !0;
              var t = e && (0, i.domFC)(e);
              if (!t) return !1;
              if (
                "ads_feed_placeholder" === t.getAttribute("id") ||
                e.classList.contains("no_posts")
              )
                return !1;
              return !0;
            })(e) &&
            ((e[l] = (function (e) {
              var t = e && (0, i.domFC)(e);
              return t && t.hasAttribute("data-ad-video-autoplay") ? y : v;
            })(e)),
            (e[c] = t),
            S.push(e));
        }
        function V(e, t) {
          var o = V;
          !(function (e, t) {
            var o = [];
            S.forEach(function (n) {
              de(n)
                ? o.push(n)
                : !(function (e, t, o) {
                    return !e[u] && ie(e, 0.5, t, o);
                  })(n, e, t)
                ? (function (e, t, o) {
                    return e[u] && !ie(e, 0.25, t, o);
                  })(n, e, t) &&
                  (n[w] ? delete n[w] : (le(T, n), (B = B.concat(se(n)))),
                  delete n[u])
                : ((n[u] = Date.now()), T.push(n));
            }),
              o.forEach(function (e) {
                le(S, e);
              });
          })(e || (0, s.scrollGetY)(), t || window.innerHeight),
            A
              ? (clearTimeout(o.timer), (o.timer = setTimeout(j, 150)))
              : ((A = !0),
                z(),
                (function () {
                  if ("/im" === location.pathname) {
                    var e = (0, i.geByClass1)("im-page--chat-header"),
                      t = (0, i.geByClass1)("im-page--chat-input");
                    (E = e.getBoundingClientRect().top + e.offsetHeight),
                      (x = window.innerHeight - t.getBoundingClientRect().top);
                  } else (E = (0, i.ge)("page_header").offsetHeight), (x = 0);
                })());
        }
        function j() {
          z(), q(), (A = !1);
        }
        function U() {
          z(), $();
        }
        function F() {
          (B = []),
            T.forEach((e) => (e[u] = Date.now())),
            J(null),
            Z(null),
            q();
        }
        function W() {
          z(), $(), (B = []), (T = []), J(null), Z(null);
        }
        function q() {
          (L = setTimeout(G, 2500)),
            (I = setTimeout(K, 5e3)),
            (P = setTimeout(Q, 6e3)),
            (O = setTimeout(Y, 2e4));
        }
        function z() {
          clearTimeout(L), clearTimeout(I), clearTimeout(P), clearTimeout(O);
        }
        function G() {
          B.length && J(B);
        }
        function K() {
          X(B), (B = []), J(null);
        }
        function Q() {
          T.length && (Z(ae(T, !0, !0)), (P = setTimeout(Q, 1e3)));
        }
        function Y() {
          clearTimeout(P),
            X(ae(T)),
            T.forEach((e) => (e[w] = !0)),
            (T = []),
            Z(null);
        }
        function $() {
          X(B.concat(ae(T)));
        }
        function X(e) {
          e &&
            e.length &&
            ajax.post("/al_page.php", {
              act: "seen",
              data: re(e),
              long_view: 1,
            });
        }
        function J(e) {
          ee(b, e);
        }
        function Z(e) {
          ee(_, e);
        }
        function ee(e, t) {
          var o = n.default.get(e) || {};
          t ? (o[C] = t) : delete o[C], n.default.set(e, o);
        }
        function te() {
          var e = te,
            t = [],
            o = n.default.get(b) || {},
            i = n.default.get(_) || {};
          return (
            e.iterator ||
              (e.iterator = (e) => (o) => {
                ne(o) && (t = t.concat(e[o]));
              }),
            Object.keys(o).forEach(e.iterator(o)),
            Object.keys(i).forEach(e.iterator(i)),
            t
          );
        }
        function oe() {
          var e = oe,
            t = n.default.get(b) || {},
            o = n.default.get(_) || {};
          e.iterator ||
            (e.iterator = (e) => (t) => {
              ne(t) && delete e[t];
            }),
            Object.keys(t).forEach(e.iterator(t)),
            Object.keys(o).forEach(e.iterator(o)),
            n.default.set(b, t),
            n.default.set(_, o);
        }
        function ne(e) {
          var t = Number(e);
          return t !== C && Date.now() - t >= 36e4;
        }
        function ie(e, t, o, n) {
          if (!e) return !1;
          e[p] ||
            ((e[p] = !0),
            (e[f] = e.offsetHeight),
            (e[m] = o + e.getBoundingClientRect().top),
            (e[g] = e[m] + e[f]));
          var i = n - E - x,
            r = o + E,
            a = o + n - x,
            s = e[f],
            d = e[m],
            l = e[g];
          return (
            (l > r && d < a ? Math.min(a, l) - Math.max(r, d) : 0) >=
            Math.min(i * t, s * t)
          );
        }
        function re(e) {
          var t = {};
          e.forEach(function (e) {
            var o = e.ownerId,
              n = "ad" === o ? "" : ":" + e.duration + ":" + e.index;
            t[o] || (t[o] = []),
              t[o].push(
                e.module +
                  e.postId +
                  n +
                  (e.sessionId ? ":" + e.sessionId : "") +
                  (e.q ? ":" + e.q : "") +
                  ":" +
                  e.viewIndex
              );
          });
          var o = [];
          return (
            (0, d.each)(t, (e, t) => o.push(e + "_" + t.join(","))), o.join(";")
          );
        }
        function ae(e, t, o) {
          return e.map((e) => se(e, t, o));
        }
        function se(e, t, o) {
          if (de(e)) return [];
          var n = Math.min(3e5, Date.now() - e[u]);
          if ((e[l] === v && n < 300) || (e[l] === y && n < 1e3)) return [];
          o || (e[h] = !0);
          var r,
            a = (function (e) {
              var t = e[c];
              if ("im" === t) {
                var o = (0, i.attr)(e, "data-post-id"),
                  n = (0, i.attr)(e, "data-copy"),
                  r = { index: -1, module: "im" };
                return o && (r[o] = -1), n && (r[n] = -1), r;
              }
              try {
                return window[t].postsGetRaws(e);
              } catch (t) {
                return console.error("Unable to extract data from elem", e), [];
              }
            })(e),
            s =
              {
                feed: "f",
                public: "c",
                groups: "c",
                profile: "p",
                im: "m",
                feed_search: "s",
                feed_news_recent: "r",
                feed_news: "r",
                feed_news_top: "t",
                feed_recommended: "d",
                feed_recommended_recent: "d",
                feed_recommended_top: "e",
                feed_photos: "h",
                feed_videos: "v",
                feed_friends: "n",
                feed_likes: "k",
                feed_list: "z",
                feed_other: "o",
              }["feed_other" === (r = a.module) ? `feed_${cur.section}` : r] ||
              "u",
            d = cur.feed_session_id || "na",
            w = [];
          for (var p in a)
            if ("index" !== p && "module" !== p && "q" !== p) {
              var f = p.split("_"),
                m = f[0],
                g = f[1];
              "ads" === m && (g = f[3]),
                /^post\d+$/.test(m) && ((m = f[1]), (g = f[2]));
              var b = void 0;
              t || (D[(b = m + "_" + g)] || (D[b] = 0), D[b]++),
                w.push(
                  "ad" === m
                    ? { ownerId: "ad", postId: g, module: s, viewIndex: D[b] }
                    : "ads" === m
                    ? {
                        ownerId: "ads",
                        postId: g,
                        module: s,
                        index: a.index,
                        duration: n,
                        sessionId: d,
                        viewIndex: D[b],
                      }
                    : {
                        ownerId: m,
                        postId: (1 === a[p] ? "" : "-") + g,
                        module: s,
                        index: a.index,
                        duration: n,
                        sessionId: d,
                        q: a.q || null,
                        viewIndex: D[b],
                      }
                );
            }
          return w;
        }
        function de(e) {
          return ("page_view" === k && e[h]) || !document.body.contains(e);
        }
        function le(e, t) {
          var o = e.indexOf(t);
          o >= 0 && e.splice(o, 1);
        }
      },
      982884: (e, t, o) => {
        "use strict";
        o.d(t, { default: () => r });
        o(940851), o(296253);
        var n = o(679239),
          i = o(791963);
        n.default.init({
          platform: "web2",
          animatorLoader: () => Promise.resolve(i.default),
        });
        const r = n.default;
      },
      999924: (e, t, o) => {
        "use strict";
        o.d(t, { SWClient: () => a });
        o(530522),
          o(66108),
          o(850110),
          o(579665),
          o(95767),
          o(991181),
          o(856997),
          o(940851),
          o(296253);
        var n = o(239316);
        function i(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null == o) return;
              var n,
                i,
                r = [],
                a = !0,
                s = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (r.push(n.value), !t || r.length !== t);
                  a = !0
                );
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw i;
                }
              }
              return r;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return r(e, t);
              var o = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === o && e.constructor && (o = e.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(e);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return r(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
          return n;
        }
        class a {
          constructor() {
            (this.registration = null), (this._handlers = []);
          }
          static addVersion(e) {
            return vk && vk.sw_version ? e + "?v=" + vk.sw_version : e;
          }
          static isSupported() {
            return "serviceWorker" in navigator;
          }
          register() {
            if (!a.isSupported())
              return Promise.reject("serviceWorker is unavailable");
            if (this.registration) return Promise.resolve(this.registration);
            var e = a.addVersion("/dist/sw/sw.js"),
              t = { scope: "/" };
            return navigator.serviceWorker
              .getRegistrations()
              .then(
                (o) => (
                  o.forEach((t) => {
                    t.active &&
                      !t.active.scriptURL.endsWith(e) &&
                      t.unregister();
                  }),
                  navigator.serviceWorker.register(e, t)
                )
              )
              .then(this._onactive.bind(this))
              .then(
                (e) => (
                  this.registration ||
                    ((this.registration = e),
                    this._addEventListener(
                      navigator.serviceWorker,
                      "message",
                      this._onmessage.bind(this),
                      !1
                    )),
                  e
                )
              );
          }
          unregister() {
            this.registration && this.registration.unregister(),
              this._handlers.forEach((e) =>
                e[0].removeEventListener(e[1], e[2])
              ),
              (this._handlers = []);
          }
          update() {
            this.registration && this.registration.update();
          }
          _addEventListener(e, t, o) {
            var n =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              i = !1;
            this._handlers.forEach(function (n) {
              n[0] === e && n[1] === t && n[2] === o && (i = !0);
            }),
              (i && !n) ||
                (this._handlers.push([e, t, o]), e.addEventListener(t, o));
          }
          _onactive(e) {
            return e.active
              ? Promise.resolve(e)
              : new Promise((t) => {
                  this._addEventListener(e.installing, "statechange", (o) => {
                    "activated" === o.currentTarget.state && t(e);
                  });
                });
          }
          action_devicePixelRatio() {
            return window.devicePixelRatio;
          }
          action_pushHash() {
            return this.getPushHash();
          }
          getPushHash() {
            return window.vk.push_hash;
          }
          storePushHash() {
            var e = this.getPushHash();
            this.action("storePushHash", { hash: e });
          }
          action(e, t) {
            var o = Array.isArray(e) ? e : [[e, t]];
            return this._message({ actions: o }).then((e) =>
              e.answers
                ? Promise.resolve(1 === o.length ? e.answers[0] : e.answers)
                : Promise.reject(new Error("ServiceWorker answer is incorrect"))
            );
          }
          _message(e) {
            return this.register()
              .then(
                () =>
                  new Promise((t, o) => {
                    var i = new MessageChannel();
                    (i.port1.onmessage = function (e) {
                      (0, n.messageCheck)(e)
                        ? t(e.data.data)
                        : o(new Error("ServiceWorker message is incorrect"));
                    }),
                      this.registration.active.postMessage(
                        (0, n.messageWrap)(e),
                        [i.port2]
                      );
                  })
              )
              .catch((e) => console.log(e));
          }
          _onmessage(e) {
            if ((0, n.messageCheck)(e)) {
              var t = e.data.data;
              if (t.actions && Array.isArray(t.actions)) {
                var o = [];
                t.actions.forEach((t) => {
                  var n = i(t, 2),
                    r = n[0],
                    a = n[1],
                    s = "action_" + r;
                  o.push(Promise.resolve(this[s] ? this[s](a, e) : void 0));
                }),
                  Promise.all(o).then(function (t) {
                    var o = {};
                    t.forEach((e, t) => {
                      void 0 !== e && (o[t] = e);
                    }),
                      Object.keys(o).length &&
                        e.ports[0].postMessage(
                          (0, n.messageWrap)({ answers: o })
                        );
                  });
              }
            }
          }
        }
      },
      187276: (e, t, o) => {
        "use strict";
        o.d(t, { VkConnectTermsModal: () => a });
        var n = o(654612),
          i = o(49535),
          r = o(376852);
        class a {
          constructor() {
            this.acceptSend = !1;
          }
          show(e) {
            (0, n.showBox)(
              "al_login.php",
              { act: "vk_connect_policy", hash: e },
              {
                containerClass: "vk_connect_policy",
                stat: ["vk_connect.css"],
                params: {
                  hideButtons: !0,
                  noCloseButton: !0,
                  hideOnBGClick: !1,
                  preventHideLastWithCheck: !0,
                  onHideAttempt: () => this.acceptSend,
                },
              }
            );
          }
          initBox(e, t, o, n) {
            e.removeButtons();
            var r = document.querySelector("#vkconnect_continue_button");
            (0, i.addEvent)(r, "click", () => {
              var i = {
                act: "vkconnect_policy_accept",
                hash: t,
                accept_hash: o,
              };
              ajax.post("al_login.php", i, {
                onDone: () => {
                  this.showTooltip(n);
                },
              }),
                (this.acceptSend = !0),
                e.hide();
            });
          }
          showTooltip(e) {
            var t = document.querySelector(
                "#top_profile_link .top_profile_img"
              ),
              o = {
                className: "vkconnect_guide_tooltip",
                text: e,
                dir: "top",
                slide: 10,
                shift: [179, 20],
                width: 230,
              };
            (0, r.showTooltip)(t, o);
          }
        }
      },
      504836: (e, t, o) => {
        "use strict";
        var n, i, r, a, s, d, l;
        o(850110), o(21466), o(446964);
        (n = window),
          (i = n.HTMLCanvasElement && n.HTMLCanvasElement.prototype),
          (r =
            n.Blob &&
            (function () {
              try {
                return Boolean(new Blob());
              } catch (e) {
                return !1;
              }
            })()),
          (a =
            r &&
            n.Uint8Array &&
            (function () {
              try {
                return 100 === new Blob([new Uint8Array(100)]).size;
              } catch (e) {
                return !1;
              }
            })()),
          (s =
            n.BlobBuilder ||
            n.WebKitBlobBuilder ||
            n.MozBlobBuilder ||
            n.MSBlobBuilder),
          (d = /^data:((.*?)(;charset=.*?)?)(;base64)?,/),
          (l =
            (r || s) &&
            n.atob &&
            n.ArrayBuffer &&
            n.Uint8Array &&
            function (e) {
              var t, o, n, i, l, w, c, u, h;
              if (!(t = e.match(d))) throw new Error("invalid data URI");
              for (
                o = t[2] ? t[1] : "text/plain" + (t[3] || ";charset=US-ASCII"),
                  n = !!t[4],
                  i = e.slice(t[0].length),
                  l = n ? atob(i) : decodeURIComponent(i),
                  w = new ArrayBuffer(l.length),
                  c = new Uint8Array(w),
                  u = 0;
                u < l.length;
                u += 1
              )
                c[u] = l.charCodeAt(u);
              return r
                ? new Blob([a ? c : w], { type: o })
                : ((h = new s()).append(w), h.getBlob(o));
            }),
          n.HTMLCanvasElement &&
            !i.toBlob &&
            (i.mozGetAsFile
              ? (i.toBlob = function (e, t, o) {
                  e(
                    o && i.toDataURL && l
                      ? l(this.toDataURL(t, o))
                      : this.mozGetAsFile("blob", t)
                  );
                })
              : i.toDataURL &&
                l &&
                (i.toBlob = function (e, t, o) {
                  e(l(this.toDataURL(t, o)));
                })),
          "function" == typeof define && define.amd
            ? define(function () {
                return l;
              })
            : "object" == typeof module && module.exports
            ? (module.exports = l)
            : (n.dataURLtoBlob = l);
      },
      966337: () => {
        !(function () {
          "use strict";
          if ("object" == typeof window)
            if (
              "IntersectionObserver" in window &&
              "IntersectionObserverEntry" in window &&
              "intersectionRatio" in window.IntersectionObserverEntry.prototype
            )
              "isIntersecting" in window.IntersectionObserverEntry.prototype ||
                Object.defineProperty(
                  window.IntersectionObserverEntry.prototype,
                  "isIntersecting",
                  {
                    get: function () {
                      return this.intersectionRatio > 0;
                    },
                  }
                );
            else {
              var e = (function (e) {
                  for (var t = window.document, o = i(t); o; )
                    o = i((t = o.ownerDocument));
                  return t;
                })(),
                t = [],
                o = null,
                n = null;
              (a.prototype.THROTTLE_TIMEOUT = 100),
                (a.prototype.POLL_INTERVAL = null),
                (a.prototype.USE_MUTATION_OBSERVER = !0),
                (a._setupCrossOriginUpdater = function () {
                  return (
                    o ||
                      (o = function (e, o) {
                        (n =
                          e && o
                            ? c(e, o)
                            : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0,
                              }),
                          t.forEach(function (e) {
                            e._checkForIntersections();
                          });
                      }),
                    o
                  );
                }),
                (a._resetCrossOriginUpdater = function () {
                  (o = null), (n = null);
                }),
                (a.prototype.observe = function (e) {
                  if (
                    !this._observationTargets.some(function (t) {
                      return t.element == e;
                    })
                  ) {
                    if (!e || 1 != e.nodeType)
                      throw new Error("target must be an Element");
                    this._registerInstance(),
                      this._observationTargets.push({
                        element: e,
                        entry: null,
                      }),
                      this._monitorIntersections(e.ownerDocument),
                      this._checkForIntersections();
                  }
                }),
                (a.prototype.unobserve = function (e) {
                  (this._observationTargets = this._observationTargets.filter(
                    function (t) {
                      return t.element != e;
                    }
                  )),
                    this._unmonitorIntersections(e.ownerDocument),
                    0 == this._observationTargets.length &&
                      this._unregisterInstance();
                }),
                (a.prototype.disconnect = function () {
                  (this._observationTargets = []),
                    this._unmonitorAllIntersections(),
                    this._unregisterInstance();
                }),
                (a.prototype.takeRecords = function () {
                  var e = this._queuedEntries.slice();
                  return (this._queuedEntries = []), e;
                }),
                (a.prototype._initThresholds = function (e) {
                  var t = e || [0];
                  return (
                    Array.isArray(t) || (t = [t]),
                    t.sort().filter(function (e, t, o) {
                      if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
                        throw new Error(
                          "threshold must be a number between 0 and 1 inclusively"
                        );
                      return e !== o[t - 1];
                    })
                  );
                }),
                (a.prototype._parseRootMargin = function (e) {
                  var t = (e || "0px").split(/\s+/).map(function (e) {
                    var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                    if (!t)
                      throw new Error(
                        "rootMargin must be specified in pixels or percent"
                      );
                    return { value: parseFloat(t[1]), unit: t[2] };
                  });
                  return (
                    (t[1] = t[1] || t[0]),
                    (t[2] = t[2] || t[0]),
                    (t[3] = t[3] || t[1]),
                    t
                  );
                }),
                (a.prototype._monitorIntersections = function (t) {
                  var o = t.defaultView;
                  if (o && -1 == this._monitoringDocuments.indexOf(t)) {
                    var n = this._checkForIntersections,
                      r = null,
                      a = null;
                    if (
                      (this.POLL_INTERVAL
                        ? (r = o.setInterval(n, this.POLL_INTERVAL))
                        : (s(o, "resize", n, !0),
                          s(t, "scroll", n, !0),
                          this.USE_MUTATION_OBSERVER &&
                            "MutationObserver" in o &&
                            (a = new o.MutationObserver(n)).observe(t, {
                              attributes: !0,
                              childList: !0,
                              characterData: !0,
                              subtree: !0,
                            })),
                      this._monitoringDocuments.push(t),
                      this._monitoringUnsubscribes.push(function () {
                        var e = t.defaultView;
                        e && (r && e.clearInterval(r), d(e, "resize", n, !0)),
                          d(t, "scroll", n, !0),
                          a && a.disconnect();
                      }),
                      t != ((this.root && this.root.ownerDocument) || e))
                    ) {
                      var l = i(t);
                      l && this._monitorIntersections(l.ownerDocument);
                    }
                  }
                }),
                (a.prototype._unmonitorIntersections = function (t) {
                  var o = this._monitoringDocuments.indexOf(t);
                  if (-1 != o) {
                    var n = (this.root && this.root.ownerDocument) || e,
                      r = this._observationTargets.some(function (e) {
                        var o = e.element.ownerDocument;
                        if (o == t) return !0;
                        for (; o && o != n; ) {
                          var r = i(o);
                          if ((o = r && r.ownerDocument) == t) return !0;
                        }
                        return !1;
                      });
                    if (!r) {
                      var a = this._monitoringUnsubscribes[o];
                      if (
                        (this._monitoringDocuments.splice(o, 1),
                        this._monitoringUnsubscribes.splice(o, 1),
                        a(),
                        t != n)
                      ) {
                        var s = i(t);
                        s && this._unmonitorIntersections(s.ownerDocument);
                      }
                    }
                  }
                }),
                (a.prototype._unmonitorAllIntersections = function () {
                  var e = this._monitoringUnsubscribes.slice(0);
                  (this._monitoringDocuments.length = 0),
                    (this._monitoringUnsubscribes.length = 0);
                  for (var t = 0; t < e.length; t++) e[t]();
                }),
                (a.prototype._checkForIntersections = function () {
                  if (this.root || !o || n) {
                    var e = this._rootIsInDom(),
                      t = e
                        ? this._getRootRect()
                        : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0,
                          };
                    this._observationTargets.forEach(function (n) {
                      var i = n.element,
                        a = l(i),
                        s = this._rootContainsTarget(i),
                        d = n.entry,
                        w =
                          e &&
                          s &&
                          this._computeTargetAndRootIntersection(i, a, t),
                        c = (n.entry = new r({
                          time:
                            window.performance &&
                            performance.now &&
                            performance.now(),
                          target: i,
                          boundingClientRect: a,
                          rootBounds: o && !this.root ? null : t,
                          intersectionRect: w,
                        }));
                      d
                        ? e && s
                          ? this._hasCrossedThreshold(d, c) &&
                            this._queuedEntries.push(c)
                          : d && d.isIntersecting && this._queuedEntries.push(c)
                        : this._queuedEntries.push(c);
                    }, this),
                      this._queuedEntries.length &&
                        this._callback(this.takeRecords(), this);
                  }
                }),
                (a.prototype._computeTargetAndRootIntersection = function (
                  t,
                  i,
                  r
                ) {
                  if ("none" != window.getComputedStyle(t).display) {
                    for (
                      var a, s, d, w, u, p, f, m, g = i, v = h(t), y = !1;
                      !y && v;

                    ) {
                      var b = null,
                        _ = 1 == v.nodeType ? window.getComputedStyle(v) : {};
                      if ("none" == _.display) return null;
                      if (v == this.root || 9 == v.nodeType)
                        if (((y = !0), v == this.root || v == e))
                          o && !this.root
                            ? !n || (0 == n.width && 0 == n.height)
                              ? ((v = null), (b = null), (g = null))
                              : (b = n)
                            : (b = r);
                        else {
                          var k = h(v),
                            S = k && l(k),
                            T =
                              k &&
                              this._computeTargetAndRootIntersection(k, S, r);
                          S && T
                            ? ((v = k), (b = c(S, T)))
                            : ((v = null), (g = null));
                        }
                      else {
                        var B = v.ownerDocument;
                        v != B.body &&
                          v != B.documentElement &&
                          "visible" != _.overflow &&
                          (b = l(v));
                      }
                      if (
                        (b &&
                          ((a = b),
                          (s = g),
                          (d = void 0),
                          (w = void 0),
                          (u = void 0),
                          (p = void 0),
                          (f = void 0),
                          (m = void 0),
                          (d = Math.max(a.top, s.top)),
                          (w = Math.min(a.bottom, s.bottom)),
                          (u = Math.max(a.left, s.left)),
                          (p = Math.min(a.right, s.right)),
                          (m = w - d),
                          (g =
                            ((f = p - u) >= 0 &&
                              m >= 0 && {
                                top: d,
                                bottom: w,
                                left: u,
                                right: p,
                                width: f,
                                height: m,
                              }) ||
                            null)),
                        !g)
                      )
                        break;
                      v = v && h(v);
                    }
                    return g;
                  }
                }),
                (a.prototype._getRootRect = function () {
                  var t;
                  if (this.root) t = l(this.root);
                  else {
                    var o = e.documentElement,
                      n = e.body;
                    t = {
                      top: 0,
                      left: 0,
                      right: o.clientWidth || n.clientWidth,
                      width: o.clientWidth || n.clientWidth,
                      bottom: o.clientHeight || n.clientHeight,
                      height: o.clientHeight || n.clientHeight,
                    };
                  }
                  return this._expandRectByRootMargin(t);
                }),
                (a.prototype._expandRectByRootMargin = function (e) {
                  var t = this._rootMarginValues.map(function (t, o) {
                      return "px" == t.unit
                        ? t.value
                        : (t.value * (o % 2 ? e.width : e.height)) / 100;
                    }),
                    o = {
                      top: e.top - t[0],
                      right: e.right + t[1],
                      bottom: e.bottom + t[2],
                      left: e.left - t[3],
                    };
                  return (
                    (o.width = o.right - o.left),
                    (o.height = o.bottom - o.top),
                    o
                  );
                }),
                (a.prototype._hasCrossedThreshold = function (e, t) {
                  var o = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                    n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                  if (o !== n)
                    for (var i = 0; i < this.thresholds.length; i++) {
                      var r = this.thresholds[i];
                      if (r == o || r == n || r < o != r < n) return !0;
                    }
                }),
                (a.prototype._rootIsInDom = function () {
                  return !this.root || u(e, this.root);
                }),
                (a.prototype._rootContainsTarget = function (t) {
                  return (
                    u(this.root || e, t) &&
                    (!this.root || this.root.ownerDocument == t.ownerDocument)
                  );
                }),
                (a.prototype._registerInstance = function () {
                  t.indexOf(this) < 0 && t.push(this);
                }),
                (a.prototype._unregisterInstance = function () {
                  var e = t.indexOf(this);
                  -1 != e && t.splice(e, 1);
                }),
                (window.IntersectionObserver = a),
                (window.IntersectionObserverEntry = r);
            }
          function i(e) {
            try {
              return (e.defaultView && e.defaultView.frameElement) || null;
            } catch (e) {
              return null;
            }
          }
          function r(e) {
            (this.time = e.time),
              (this.target = e.target),
              (this.rootBounds = w(e.rootBounds)),
              (this.boundingClientRect = w(e.boundingClientRect)),
              (this.intersectionRect = w(
                e.intersectionRect || {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                }
              )),
              (this.isIntersecting = !!e.intersectionRect);
            var t = this.boundingClientRect,
              o = t.width * t.height,
              n = this.intersectionRect,
              i = n.width * n.height;
            this.intersectionRatio = o
              ? Number((i / o).toFixed(4))
              : this.isIntersecting
              ? 1
              : 0;
          }
          function a(e, t) {
            var o,
              n,
              i,
              r = t || {};
            if ("function" != typeof e)
              throw new Error("callback must be a function");
            if (r.root && 1 != r.root.nodeType)
              throw new Error("root must be an Element");
            (this._checkForIntersections =
              ((o = this._checkForIntersections.bind(this)),
              (n = this.THROTTLE_TIMEOUT),
              (i = null),
              function () {
                i ||
                  (i = setTimeout(function () {
                    o(), (i = null);
                  }, n));
              })),
              (this._callback = e),
              (this._observationTargets = []),
              (this._queuedEntries = []),
              (this._rootMarginValues = this._parseRootMargin(r.rootMargin)),
              (this.thresholds = this._initThresholds(r.threshold)),
              (this.root = r.root || null),
              (this.rootMargin = this._rootMarginValues
                .map(function (e) {
                  return e.value + e.unit;
                })
                .join(" ")),
              (this._monitoringDocuments = []),
              (this._monitoringUnsubscribes = []);
          }
          function s(e, t, o, n) {
            "function" == typeof e.addEventListener
              ? e.addEventListener(t, o, n || !1)
              : "function" == typeof e.attachEvent &&
                e.attachEvent("on" + t, o);
          }
          function d(e, t, o, n) {
            "function" == typeof e.removeEventListener
              ? e.removeEventListener(t, o, n || !1)
              : "function" == typeof e.detatchEvent &&
                e.detatchEvent("on" + t, o);
          }
          function l(e) {
            var t;
            try {
              t = e.getBoundingClientRect();
            } catch (e) {}
            return t
              ? ((t.width && t.height) ||
                  (t = {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.right - t.left,
                    height: t.bottom - t.top,
                  }),
                t)
              : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
          function w(e) {
            return !e || "x" in e
              ? e
              : {
                  top: e.top,
                  y: e.top,
                  bottom: e.bottom,
                  left: e.left,
                  x: e.left,
                  right: e.right,
                  width: e.width,
                  height: e.height,
                };
          }
          function c(e, t) {
            var o = t.top - e.top,
              n = t.left - e.left;
            return {
              top: o,
              left: n,
              height: t.height,
              width: t.width,
              bottom: o + t.height,
              right: n + t.width,
            };
          }
          function u(e, t) {
            for (var o = t; o; ) {
              if (o == e) return !0;
              o = h(o);
            }
            return !1;
          }
          function h(t) {
            var o = t.parentNode;
            return 9 == t.nodeType && t != e
              ? i(t)
              : o && 11 == o.nodeType && o.host
              ? o.host
              : o && o.assignedSlot
              ? o.assignedSlot.parentNode
              : o;
          }
        })();
      },
      838648: (e, t, o) => {
        "use strict";
        o.d(t, { MarketAnalyticsManager: () => i });
        var n = { screens: [], hash: "", replacedScreen: "", isEnabled: !1 },
          i = {
            setHash: function (e) {
              n.hash = e;
            },
            getHash: function () {
              return n.hash;
            },
            getScreens: function () {
              var e = [];
              return (
                n.screens.forEach(function (t) {
                  e.push(t);
                }),
                e
              );
            },
            replaceScreen: function (e) {
              n.replacedScreen = e;
            },
            setScreen: function (e) {
              n.screens.push(e), n.screens.length > 5 && n.screens.shift();
            },
            getScreen: function () {
              return "" !== n.replacedScreen
                ? n.replacedScreen
                : n.screens.length > 0
                ? n.screens[n.screens.length - 1]
                : "";
            },
            getPrevScreen: function () {
              return n.screens.length > 1
                ? n.screens[n.screens.length - 2]
                : "";
            },
            popScreen: function () {
              return n.screens.length > 0 ? String(n.screens.pop()) : "";
            },
            setEnabled: function (e) {
              n.isEnabled = e;
            },
            isEnabled: function () {
              return n.isEnabled;
            },
          };
      },
      935451: (e, t, o) => {
        "use strict";
        var n, i, r;
        o.d(t, { BannerType: () => n, BannerActionType: () => i }),
          (function (e) {
            (e.COOKIES = "cookies"),
              (e.BAD_BROWSER = "bad_browser"),
              (e.UNAUTH = "unauth");
          })(n || (n = {})),
          (function (e) {
            (e.SIGN_IN = "sign_in"),
              (e.SIGN_UP = "sign_up"),
              (e.OPEN_IN_APP = "open_in_app"),
              (e.AJAX_ACTION = "ajax_action");
          })(i || (i = {})),
          (function (e) {
            (e.REGULAR = "regular"), (e.GREEN = "green");
          })(r || (r = {}));
      },
      665288: (e, t, o) => {
        "use strict";
        var n = o(765256);
        window.SAKIntegration = n.SAKIntegration;
      },
      426173: (e, t, o) => {
        "use strict";
        o.d(t, { writeLogout: () => r });
        var n = o(479957),
          i = o(28238),
          r = function (e, t) {
            if (
              (void 0 === e && (e = "unknown"), void 0 === t && (t = ""), t)
            ) {
              var o = 0;
              try {
                var r = (0, i.imDbGet)(window.vk.id);
                Object.entries(r).forEach(function (e) {
                  var t = e[0],
                    n = e[1];
                  t.startsWith("draft_") &&
                    (n.txt || (n.attaches && n.attaches.length)) &&
                    o++;
                });
              } catch (e) {}
              (0, n.statlogsValueEvent)("logout_stat", e, t, o);
            }
          };
      },
      752750: (e, t, o) => {
        "use strict";
        (0, o(124702).initCommonWeb)(),
          window.stManager.done(window.jsc("web/common_web.js"));
      },
      996497: (e, t, o) => {
        "use strict";
        o.d(t, { initFeatureEntriesInteractiveHandlers: () => r });
        var n = o(182804),
          i = o(635676);
        function r() {
          (0, n.tq)().setInteractiveHandler(
            "Common/hide_full_version_bar",
            function (e) {
              var t = e.payload.dataAttrs || {},
                o = t.save,
                n = t.hash;
              window.ajax.post("al_index.php", {
                act: "hide_fv_bar",
                save: Number(o),
                hash: n,
              });
              var r = document.querySelector(".SaveFullVersionBar");
              r &&
                (0, i.slideUp)(r, 200, function () {
                  r.remove();
                });
            }
          );
        }
      },
      371764: (e, t, o) => {
        "use strict";
        o.d(t, { bannerActionsToClickMap: () => w });
        var n,
          i = o(214547),
          r = o(740517),
          a = o(935451),
          s = o(215949),
          d = o(351258);
        function l(e) {
          i.marketingTransitionItemStat.logEvent(
            r.MarketingTransitionItemCampaignType.UNAUTH_BOTTOM_BANNER,
            e,
            "",
            window.location.href
          ),
            window.ajax.post(
              "/al_index.php?act=a_unauthorized_banner_btn_click",
              { action: e }
            );
        }
        var w =
          (((n = {})[a.BannerActionType.SIGN_IN] = function (e, t, o) {
            (0, s.showQuickLoginBox)(),
              o === a.BannerType.UNAUTH &&
                l(r.MarketingTransitionItemEventType.CLICK_SIGN_IN);
          }),
          (n[a.BannerActionType.SIGN_UP] = function (e, t, o) {
            (0, s.showJoinBox)(),
              o === a.BannerType.UNAUTH &&
                l(r.MarketingTransitionItemEventType.CLICK_SIGN_UP);
          }),
          (n[a.BannerActionType.OPEN_IN_APP] = null),
          (n[a.BannerActionType.AJAX_ACTION] = function (e, t, o) {
            e && e.preventDefault(),
              (0, d.removeBanner)(o),
              window.ajax.post(t.url, t.params);
          }),
          n);
      },
      351258: (e, t, o) => {
        "use strict";
        o.d(t, {
          createOrGetBannersRoot: () => r,
          selectBannerElement: () => a,
          removeBanner: () => s,
        });
        var n = o(935451),
          i = "page_bottom_banners_root";
        function r() {
          var e = document.querySelector("#" + i);
          return (
            e ||
              (((e = document.createElement("div")).id = i),
              document.body.appendChild(e)),
            e
          );
        }
        function a(e) {
          if (e === n.BannerType.COOKIES) {
            var t = document.querySelector("#cookies_policy_wrap");
            if (t) return t;
          }
          if (e === n.BannerType.BAD_BROWSER) {
            var o = document.querySelector(".OldBrowser");
            if (o) return o;
          }
          return document.querySelector(".PageBottomBanner--" + e);
        }
        function s(e) {
          var t = a(e);
          t && t.remove();
        }
      },
      840130: (e, t, o) => {
        "use strict";
        o.d(t, { exposePageBottomBanners: () => h });
        var n = o(570655),
          i = o(659397),
          r = o(935451),
          a = o(351258),
          s = o(693697),
          d = o(479957),
          l = { currentUnauthBanner: null, currentBanner: null };
        function w(e) {
          if (
            !(0, a.selectBannerElement)(r.BannerType.COOKIES) &&
            !(0, a.selectBannerElement)(r.BannerType.BAD_BROWSER)
          ) {
            var t = (0, a.createOrGetBannersRoot)();
            if (e) {
              if ((0, i.isEqual)(l.currentBanner, e)) return;
              (e.is_animated = !1),
                (0, s.destroyBanner)(t),
                (0, s.renderBanner)(e, t, function () {
                  return (function (e) {
                    if (((0, a.removeBanner)(e.type), e.hide_url)) {
                      var t = {};
                      e.hide_params &&
                        !Array.isArray(e.hide_params) &&
                        (t = e.hide_params),
                        window.ajax.post(
                          e.hide_url,
                          (0, n.__assign)({ url: window.location.href }, t)
                        );
                    }
                  })(e);
                }),
                (l.currentBanner = e);
            } else (0, s.destroyBanner)(t), (l.currentBanner = null);
          }
        }
        function c(e) {
          if (
            !(0, a.selectBannerElement)(r.BannerType.COOKIES) &&
            !(0, a.selectBannerElement)(r.BannerType.BAD_BROWSER)
          ) {
            var t = (0, a.createOrGetBannersRoot)(),
              o = (0, a.selectBannerElement)(r.BannerType.UNAUTH);
            if (e) {
              if ((0, i.isEqual)(l.currentUnauthBanner, e)) return;
              o && (e.is_animated = !1),
                (0, s.destroyBanner)(t),
                (0, s.renderBanner)(e, t, function () {
                  return (function (e) {
                    e && e.preventDefault();
                    (0, a.removeBanner)(r.BannerType.UNAUTH),
                      window.ajax.post("/settings", {
                        act: "a_hide_unauth_bottom_banner",
                        url: window.location.href,
                      });
                  })();
                }),
                (l.currentUnauthBanner = e);
            } else (0, s.destroyBanner)(t), (l.currentUnauthBanner = null);
          }
        }
        var u = {
          hideCookiesPolicy: function () {
            var e = document.querySelector("#cookies_policy_wrap");
            e && e.remove(),
              window.ajax.post("/settings", { act: "a_hide_cookies_policy" });
          },
          initUnauthBanner: function (e) {
            setTimeout(function () {
              return c(e);
            }, 100);
          },
          initBanner: function (e) {
            setTimeout(function () {
              return w(e);
            }, 100);
          },
        };
        function h() {
          window.PageBottomBanners = u;
          try {
            Object.defineProperty(window, "PageBottomBanners", {
              value: u,
              writable: !1,
              enumerable: !1,
              configurable: !1,
            });
          } catch (e) {
            (0, d.statlogsValueEvent)("web_inject_banners_error", 1);
          }
        }
      },
      693697: (e, t, o) => {
        "use strict";
        o.d(t, { renderBanner: () => a, destroyBanner: () => s });
        var n = o(376852),
          i = o(371764),
          r = o(315544);
        function a(e, t, o) {
          (0, r.emptyNode)(t), (t.innerHTML = e.html);
          var a = t.firstElementChild;
          a &&
            (e.is_animated || a.classList.remove("PageBottomBanner--animated"),
            (function (e, t, o) {
              t.querySelectorAll(".PageBottomBanner__actionBtn").forEach(
                function (t) {
                  var o = null;
                  try {
                    o = JSON.parse(t.getAttribute("data-action") || "");
                  } catch (e) {}
                  if (o) {
                    var n = i.bannerActionsToClickMap[o.type];
                    n &&
                      t.addEventListener("click", function (t) {
                        o && n(t, o, e.type);
                      });
                  }
                }
              );
              var r = t.querySelector(".PageBottomBanner__close");
              r &&
                (r.addEventListener("click", function (e) {
                  e.preventDefault(), e.stopPropagation(), o(e);
                }),
                r.addEventListener("mouseover", function (e) {
                  var t = e.currentTarget;
                  (0, n.showTitle)(t, t.getAttribute("aria-label"));
                }));
            })(e, a, o));
        }
        function s(e) {
          (0, r.emptyNode)(e);
        }
      },
    },
    r = {};
  function a(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var o = (r[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(o.exports, o, o.exports, a), (o.loaded = !0), o.exports;
  }
  (a.m = i),
    (e = []),
    (a.O = (t, o, n, i) => {
      if (!o) {
        var r = 1 / 0;
        for (w = 0; w < e.length; w++) {
          for (var [o, n, i] = e[w], s = !0, d = 0; d < o.length; d++)
            (!1 & i || r >= i) && Object.keys(a.O).every((e) => a.O[e](o[d]))
              ? o.splice(d--, 1)
              : ((s = !1), i < r && (r = i));
          if (s) {
            e.splice(w--, 1);
            var l = n();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      i = i || 0;
      for (var w = e.length; w > 0 && e[w - 1][2] > i; w--) e[w] = e[w - 1];
      e[w] = [o, n, i];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (e, n) {
      if ((1 & n && (e = this(e)), 8 & n)) return e;
      if ("object" == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      a.r(i);
      var r = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var s = 2 & n && e; "object" == typeof s && !~t.indexOf(s); s = o(s))
        Object.getOwnPropertyNames(s).forEach((t) => (r[t] = () => e[t]));
      return (r.default = () => e), a.d(i, r), i;
    }),
    (a.d = (e, t) => {
      for (var o in t)
        a.o(t, o) &&
          !a.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, o) => (a.f[o](e, t), t), []))),
    (a.u = (e) => {
      if (24817 === e) return "hls.b1709de73bd425f76104.js";
    }),
    (a.miniCssF = (e) => {}),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.hmd = (e) => (
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
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (a.l = (e, t, o, i) => {
      if (n[e]) n[e].push(t);
      else {
        var r, s;
        if (void 0 !== o)
          for (
            var d = document.getElementsByTagName("script"), l = 0;
            l < d.length;
            l++
          ) {
            var w = d[l];
            if (
              w.getAttribute("src") == e ||
              w.getAttribute("data-webpack") == "vk:" + o
            ) {
              r = w;
              break;
            }
          }
        r ||
          ((s = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          a.nc && r.setAttribute("nonce", a.nc),
          r.setAttribute("data-webpack", "vk:" + o),
          (r.src = e)),
          (n[e] = [t]);
        var c = (t, o) => {
            (r.onerror = r.onload = null), clearTimeout(u);
            var i = n[e];
            if (
              (delete n[e],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((e) => e(o)),
              t)
            )
              return t(o);
          },
          u = setTimeout(
            c.bind(null, void 0, { type: "timeout", target: r }),
            12e4
          );
        (r.onerror = c.bind(null, r.onerror)),
          (r.onload = c.bind(null, r.onload)),
          s && document.head.appendChild(r);
      }
    }),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.p = "/dist/"),
    (() => {
      var e = { 43090: 0 };
      (a.f.j = (t, o) => {
        var n = a.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) o.push(n[2]);
          else {
            var i = new Promise((o, i) => (n = e[t] = [o, i]));
            o.push((n[2] = i));
            var r = a.p + a.u(t),
              s = new Error();
            a.l(
              r,
              (o) => {
                if (a.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var i = o && ("load" === o.type ? "missing" : o.type),
                    r = o && o.target && o.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = r),
                    n[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (a.O.j = (t) => 0 === e[t]);
      var t = (t, o) => {
          var n,
            i,
            [r, s, d] = o,
            l = 0;
          for (n in s) a.o(s, n) && (a.m[n] = s[n]);
          if (d) var w = d(a);
          for (t && t(o); l < r.length; l++)
            (i = r[l]), a.o(e, i) && e[i] && e[i][0](), (e[r[l]] = 0);
          return a.O(w);
        },
        o = (self.webpackChunkvk = self.webpackChunkvk || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var s = a.O(void 0, [11216, 24509, 40885, 38288, 68592], () => a(752750));
  s = a.O(s);
})();
