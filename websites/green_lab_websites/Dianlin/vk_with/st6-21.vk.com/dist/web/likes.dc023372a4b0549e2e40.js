(() => {
  "use strict";
  var e,
    t,
    i,
    n = {
      542041: (e, t, i) => {
        i.d(t, { Likes: () => f });
        i(991181),
          i(856997),
          i(296253),
          i(796409),
          i(59357),
          i(175115),
          i(21466);
        var n = i(315544),
          r = i(49535),
          o = i(376852),
          a = i(695724),
          s = i(635676),
          l = i(850167),
          u = i(40906),
          c = i(654612),
          d = i(786067),
          _ = i(465864),
          v = i(325698),
          p = i(95146),
          w = i(908706),
          h = i(107337),
          k = i(576772),
          m = i(210277);
        function y() {
          return (
            (y =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var i = arguments[t];
                  for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                }
                return e;
              }),
            y.apply(this, arguments)
          );
        }
        var f = {
          toggle(e, t, i, o) {
            if (
              ((0, r.cancelEvent)(t),
              (0, u.isObject)(window.cur) && (0, u.isFunction)(cur.viewAsBox))
            )
              return cur.viewAsBox();
            if (vk.widget && !vk.id) return window.Widgets.oauth();
            var a = (0, n.hasClass)(e, "active");
            (0, n.addClass)(e, "animate"),
              this.clientUpdate(i, v.LikeButtonTypes.like, a ? -1 : 1, !a);
            var s = () => {
              (0, n.toggleClass)(e, "active", a),
                this.clientUpdate(i, v.LikeButtonTypes.like, a ? 1 : -1, a);
            };
            window.ajax.post(
              "like.php",
              {
                act: a ? "a_do_unlike" : "a_do_like",
                object: i,
                hash: o,
                list: cur.pvListId,
                wall: 2,
                from: this._getReference(i),
                from_widget: vk.widget ? 1 : 0,
              },
              {
                onDone: (t) => {
                  if (t.unauth_action_box)
                    return (
                      s(), void k.UnauthActionBox.show(t.unauth_action_box)
                    );
                  this.update(i, t);
                  var n = i.match(/^(wall|market)(.*)/);
                  n && cur.onLike && cur.onLike(e, n[1], n[2], a);
                },
                onFail: () => (s(), !1),
              }
            ),
              (0, u.intval)((0, n.domData)(e, "count")) > 0
                ? f.showLikes(e, i, { fast: !0 })
                : e.tt && e.tt.destroy && e.tt.destroy();
          },
          _getReference: (e) =>
            cur.pvShown
              ? "photo_viewer"
              : e === cur.wallLayer
              ? "wkview"
              : window.mvcur && window.mvcur.mvShown
              ? "videoview"
              : cur.wallType
              ? "feed" === cur.wallType
                ? "news" === cur.section
                  ? `feed_${cur.subsection ? cur.subsection : cur.section}`
                  : "recommended" === cur.section
                  ? "feed_recommended" +
                    ("recent" !== cur.subsection ? "_" + cur.subsection : "")
                  : (0, a.inArray)(cur.section, [
                      "friends",
                      "groups",
                      "videos",
                      "photos",
                    ])
                  ? "feed_" + (cur.subsection ? "_" + cur.subsection : "")
                  : `feed_${cur.section}`
                : "top" === cur.wallType
                ? "wall_top"
                : "wall_" +
                  (cur.onepost
                    ? "one"
                    : (cur.wallType || "").indexOf("full_")
                    ? "page"
                    : "full")
              : cur.module,
          share(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (vk.widget && !vk.id) return window.Widgets.oauth();
            if ((0, u.isObject)(window.cur) && (0, u.isFunction)(cur.viewAsBox))
              return cur.viewAsBox();
            var i = (0, _.parseLikeObjectId)(e),
              n = i.objectType,
              r = i.objectId;
            (vk.widget ? window.showBox : c.showBox)(
              "like.php",
              y(
                {
                  act: "publish_box",
                  object: e,
                  from_widget: vk.widget ? 1 : 0,
                },
                t
              ),
              {
                onDone: (e, t) => {
                  t.unauth_action_box &&
                    (e.hide(), k.UnauthActionBox.show(t.unauth_action_box));
                },
                stat: [
                  "page.js",
                  "page.css",
                  "wide_dd.js",
                  "wide_dd.css",
                  window.jsc("web/sharebox.js"),
                ],
              }
            ),
              "wall" === n &&
                window.Wall &&
                window.Wall.triggerAdPostStat(r, "share_post"),
              cur.RpcMethods &&
                (cur.RpcMethods.likeFullUpdate = (t) =>
                  f.update(e, window.cleanObj(t)));
          },
          clientUpdate(e, t, i, r) {
            var o = this._getButtonsByType(e, t);
            if (o.length) {
              var a = (0, u.intval)((0, n.domData)(o[0], "count")) + i;
              this._updateDom(e, t, a, r),
                this.updateExternalIndex(e, { type: t, count: a, isActive: r });
            }
          },
          update(e, t) {
            if (!isNaN(parseInt(t.like_num))) {
              var i = (0, u.isUndefined)(t.like_my)
                ? void 0
                : !!(0, u.intval)(t.like_my);
              this._updateDom(
                e,
                v.LikeButtonTypes.like,
                t.like_num,
                i,
                t.like_title
              ),
                this.updateExternalIndex(e, {
                  type: v.LikeButtonTypes.like,
                  count: t.like_num,
                  isActive: i,
                });
            }
            if (!isNaN(parseInt(t.share_num))) {
              var n = (0, u.isUndefined)(t.share_my)
                ? void 0
                : !!(0, u.intval)(t.share_my);
              this._updateDom(
                e,
                v.LikeButtonTypes.share,
                t.share_num,
                n,
                t.share_title
              ),
                this.updateExternalIndex(e, {
                  type: v.LikeButtonTypes.share,
                  count: t.share_num,
                });
            }
            if (
              ((0, a.isNumeric)(t.views_num) &&
                this._updateDom(
                  e,
                  v.LikeButtonTypes.views,
                  t.views_num,
                  void 0,
                  t.views_title
                ),
              (0, a.isNumeric)(t.comment_num) &&
                this._updateDom(e, v.LikeButtonTypes.comment, t.comment_num),
              t[p.REACTIONS_COUNTS_RESPONSE_FIELD])
            ) {
              var r = !!t.isQueueUpdate;
              (0, h.triggerReactionsUpdate)(
                e,
                t[p.REACTIONS_COUNTS_RESPONSE_FIELD],
                void 0,
                {
                  isQueueUpdate: r,
                  isUserAction: !1,
                  previewVisibility: w.previewVisibilityUseCurrent,
                }
              );
            }
          },
          updateComments(e, t) {
            this.update(e, { comment_num: t });
          },
          _updateDom(e, t, i, r, o) {
            var l = this._getButtonsByType(e, t),
              c = t === v.LikeButtonTypes.views;
            if (null == l ? void 0 : l.length) {
              var p = "";
              c
                ? (p = i)
                : i > 0 &&
                  (p = vk.widget
                    ? (0, a.formatCount)(i)
                    : (0, d.langNumeric)(i, "%s", !0)),
                c || (i = (0, u.intval)(i));
              for (var w = 0; w < l.length; w++) {
                var h = l[w];
                if (!(0, n.hasClass)(h, "no_counter")) {
                  var k,
                    y,
                    f = c ? l[w] : (0, _.getElementLikeButtonCount)(l[w]);
                  if (
                    ((0, s.animateCount)(f, p, {
                      str: "auto",
                      noWrapWidth: !c,
                      noSpaceIfEmpty: !0,
                    }),
                    (0, n.toggleClass)(h, "empty", i <= 0),
                    "boolean" == typeof r && (0, n.toggleClass)(h, "active", r),
                    (0, n.attr)(l[w], "data-count", i),
                    (0, m.updateAriaLabelCounter)(h, i, t),
                    c)
                  )
                    null == h ||
                      null === (k = h.closest) ||
                      void 0 === k ||
                      null === (y = k.call(h, ".like_views")) ||
                      void 0 === y ||
                      y.setAttribute("title", o || "");
                  var g = l[w].tt;
                  if (g) {
                    var b = (0, n.domByClass)(g.container, "_content"),
                      L = (0, n.domByClass)(g.container, "_value"),
                      T = (0, n.domByClass)(g.container, "_title"),
                      S = (0, u.intval)((0, n.val)(L));
                    (0, n.val)(L, i),
                      o && (0, n.val)(T, o),
                      (0, u.isObject)(g) && (g.likeInvalidated = !0),
                      ((S !== i && S < 7) || !1 === o) &&
                        (t === v.LikeButtonTypes.like
                          ? (h.needReinitLikesTT = !0)
                          : t === v.LikeButtonTypes.share &&
                            (h.needReinitShareTT = !0)),
                      t === v.LikeButtonTypes.like &&
                        (0, n.toggleClass)(b, "me_hidden", !r),
                      !1 === o && g.destroy && g.destroy();
                  }
                }
              }
            }
          },
          _getButtonsByType: (e, t) =>
            (0, n.domQuery)(
              `._like_${e} ._${t}, ._like_${e} [data-like-button-type="${t}"]`
            ),
          showLikes(e, t) {
            var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (
              e &&
              e instanceof HTMLElement &&
              !e.postDontShowLikes &&
              (!vk.widget || !vk.show_external_auth_box)
            ) {
              var r = i.views ? { views: 1 } : i.share ? { published: 1 } : {};
              i.listId && (r.list = i.listId),
                i.like_hash && (r.like_hash = i.like_hash),
                i.like_stats_params && Object.assign(r, i.like_stats_params);
              var s = !!(0, n.geByClass1)(
                  "share",
                  (0, n.gpeByClass)("like_wrap", e)
                ),
                l = document.body,
                c = !1,
                d = getComputedStyle(e),
                v = (0, u.intval)(
                  d.getPropertyValue("padding-left").replace("px", "")
                ),
                p = (0, u.intval)(
                  d.getPropertyValue("padding-top").replace("px", "")
                ),
                w = (0, _.getElementLikeButtonIcon)(e),
                h = 40;
              "wpost" === i.from && (h = 24);
              var k,
                m,
                y = [h - (0, n.getSize)(w)[0] / 2 - v, 10 - p],
                g = i.cl || "";
              if (i.share) g += "likes_tt_share";
              else if (((g += "likes_tt_like"), "widget_community" === i.from))
                y[0] = 6;
              else if (
                "wcomments" === i.from ||
                "widget_comments" === cur.wallType
              ) {
                y[0] =
                  (0, n.getSize)(e)[0] + 16 - (0, n.getSize)(w)[0] / 2 - 10;
              } else "photo_carousel" === i.from && (y[1] = 10);
              if (!!(null == i ? void 0 : i.isFromReactionsPreview)) {
                var b = e.querySelector("._ReactionsPreview__itemsContainer");
                if (b) {
                  var L = b.querySelector(".ReactionsPreviewItem"),
                    T = (0, n.getXYRect)(L, !1),
                    S = (T.width || 0) / 2,
                    O = S;
                  (l = b),
                    T.left + T.width / 2 > window.innerWidth / 2 &&
                      ((c = !0), (O = b.offsetWidth - S)),
                    (y[0] = -O + h);
                }
              }
              i.share
                ? ((k = "needReinitLikesTT"), (m = "resetLikesTTTimer"))
                : ((k = "needReinitShareTT"), (m = "resetShareTTTimer")),
                clearTimeout(e[m]),
                (0, o.showTooltip)(e, {
                  url: "/like.php",
                  params: (0, a.extend)(
                    { act: "a_get_stats", object: t, has_share: s ? 1 : "" },
                    r
                  ),
                  appendEl: l,
                  slide: 15,
                  shift: y,
                  ajaxdt: i.fast ? 0 : 100,
                  showdt: i.fast ? 0 : 400,
                  hidedt: 200,
                  dir: "auto",
                  checkLeft: !0,
                  needLeft: c,
                  reverseOffset: 80,
                  noZIndex: !0,
                  hasover: !0,
                  tip: {
                    over: () => {
                      f.showLikes(e, t, i);
                    },
                  },
                  typeClass: "like_tt",
                  className: g,
                  onHide: () => {
                    clearTimeout(e[m]),
                      e[k] &&
                        (e[m] = setTimeout(() => {
                          delete e[k], e.tt && e.tt.destroy && e.tt.destroy();
                        }, 200));
                  },
                });
            }
          },
          showShare: function (e, t, i) {
            f.showLikes(e, t, (0, a.extend)(i, { share: 1 }));
          },
          updateViews: (e, t) => {
            (vk.widget && vk.show_external_auth_box) ||
              window.ajax.post(
                "like.php",
                { act: "a_get_stats", object: e, views: 1 },
                {
                  cache: 1,
                  onDone(t, i) {
                    var r = (0, n.ce)("div", { innerHTML: i });
                    f._updateDom(
                      e,
                      v.LikeButtonTypes.views,
                      t,
                      void 0,
                      r.innerText || r.textContent
                    );
                  },
                }
              );
          },
          makeTemplate(e, t) {
            if (!e) return "";
            ((t = (0, a.extend)(
              {
                buttons_prepend: "",
                object_raw: "",
                likes_count: "",
                liked: !1,
                share_count: "",
                shared: "",
                views_count: "",
                share_opts: {},
                like_opts: {},
                class_name: "",
                like_cont_class: "",
                like_class_name: "",
                [p.REACTIONS_COUNTS_RESPONSE_FIELD]: "",
                reactions_class_name: "",
              },
              t
            )).like_active = t.liked ? "active" : ""),
              (t.share_active = t.shared ? "active" : ""),
              (t.comment_active = ""),
              (t.likes_formatted_count =
                t.likes_count > 0
                  ? (0, d.langNumeric)(t.likes_count, "%s", !0)
                  : ""),
              (t.share_formatted_count =
                t.share_count > 0
                  ? (0, d.langNumeric)(t.share_count, "%s", !0)
                  : ""),
              (t.share_opts = this._convertOptsToString(t.share_opts)),
              (t.like_opts = this._convertOptsToString(t.like_opts)),
              (t.like_class_name += t.likes_count > 0 ? "" : " empty"),
              (t.share_class_name = t.share_count > 0 ? "" : "empty");
            var i = t[p.REACTIONS_COUNTS_RESPONSE_FIELD],
              r = !!i && Object.values(i).some((e) => !!e);
            return (
              (t.reactions_class_name += r ? "" : " PostBottomAction--empty"),
              (0, n.rs)(e, t)
            );
          },
          _convertOptsToString: (e) => JSON.stringify(e).replace(/\"/g, "'"),
          updateExternalIndex(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = (0, _.parseLikeObjectId)(e),
              n = i.objectType,
              r = i.objectId;
            switch (n) {
              case "photo":
                if (!cur.pvShown || !cur.pvCurPhoto || cur.pvCurPhoto.id !== r)
                  return;
                var o = cur.pvListId,
                  a = cur.pvIndex,
                  s = cur.pvData[o][a];
                t.type === v.LikeButtonTypes.like
                  ? ((s.likes = t.count),
                    (s.liked = t.isActive),
                    (cur.pvCommsLikes[s.id][1] = t.count))
                  : t.type === v.LikeButtonTypes.share && (s.shares = t.count);
                break;
              case "video":
                if (
                  window.mvcur &&
                  window.mvcur.mvShown &&
                  window.mvcur.videoRaw === r &&
                  t.type === v.LikeButtonTypes.like
                ) {
                  var l = window.Videoview.getMvData();
                  (l.likes = t.count),
                    void 0 !== t.isActive &&
                      ((l.liked = t.isActive),
                      window.Videoview.playerOnLiked(t.isActive),
                      window.Videoview.recache());
                }
            }
          },
          showLikesList(e, t) {
            cur.viewAsBox ||
              (0, n.hasClass)((0, n.gpeByClass)("like_btn", e), "no_counter") ||
              (0, l.showWiki)({ w: "likes/" + (0, a.clean)(t) }, !1, !1, {
                queue: 1,
              });
          },
          showSharesList(e, t) {
            cur.viewAsBox ||
              (0, n.hasClass)((0, n.gpeByClass)("like_btn", e), "no_counter") ||
              (0, l.showWiki)({ w: "shares/" + (0, a.clean)(t) }, !1, !1, {
                queue: 1,
              });
          },
        };
      },
      910460: (e, t, i) => {
        i.r(t);
        var n = i(542041);
        window.Likes = n.Likes;
        try {
          window.stManager.done(window.jsc("web/likes.js"));
        } catch (e) {}
      },
      465864: (e, t, i) => {
        i.d(t, {
          parseLikeObjectId: () => r,
          likePostObjectId: () => o,
          likeReplyObjectId: () => a,
          getElementLikeButtonCount: () => s,
          getElementLikeButtonIcon: () => l,
          getElementLikeButtonLabel: () => u,
        });
        var n = i(570655);
        function r(e) {
          var t = e.match(/^([a-z_]+)([0-9\-_]+)$/);
          if (!t) return null;
          var i = (0, n.__read)(t, 3);
          return { objectType: i[1], objectId: i[2] };
        }
        var o = function (e) {
            return "wall" + e;
          },
          a = function (e) {
            return "wall_reply" + e;
          },
          s = function (e) {
            var t;
            return null !==
              (t =
                null == e
                  ? void 0
                  : e.querySelector(
                      ".like_button_count, ._like_button_count"
                    )) && void 0 !== t
              ? t
              : void 0;
          },
          l = function (e) {
            var t;
            return null !==
              (t =
                null == e
                  ? void 0
                  : e.querySelector(".like_button_icon, ._like_button_icon")) &&
              void 0 !== t
              ? t
              : void 0;
          },
          u = function (e) {
            var t;
            return null !==
              (t = e.querySelector(
                ".like_button_label, ._like_button_label"
              )) && void 0 !== t
              ? t
              : void 0;
          };
      },
      325698: (e, t, i) => {
        i.d(t, { LikeButtonTypes: () => n });
        var n = {
          like: "like",
          share: "share",
          views: "views",
          comment: "comment",
        };
      },
      908706: (e, t, i) => {
        i.d(t, {
          isVariantInActionStatusBar: () => r,
          isVariantHidden: () => o,
          previewVisibilityUseCurrent: () => a,
          isIntentPreviewInActionStatusBar: () => s,
          isIntentPreviewHidden: () => l,
          isIntentPreviewUseCurrent: () => u,
          previewVisibilityIntentForVariant: () => c,
          parsePreviewVariant: () => d,
        });
        var n = i(404608),
          r = function (e) {
            return e === n.PreviewVariantActionStatusBar;
          },
          o = function (e) {
            return e === n.PreviewVariantHidden;
          },
          a = { kind: "useCurrent" },
          s = function (e) {
            return e.kind === n.PreviewVariantActionStatusBar;
          },
          l = function (e) {
            return e.kind === n.PreviewVariantHidden;
          },
          u = function (e) {
            return "useCurrent" === e.kind;
          },
          c = function (e) {
            return e ? { kind: e } : a;
          },
          d = function (e) {
            return n.PreviewVariants.includes(e) ? e : void 0;
          };
      },
      404608: (e, t, i) => {
        i.d(t, {
          PreviewVariantActionStatusBar: () => n,
          PreviewVariantHidden: () => r,
          PreviewVariants: () => o,
        });
        var n = "action_status_bar",
          r = "hidden",
          o = [n, r];
      },
      95146: (e, t, i) => {
        i.d(t, {
          SUPPORTED_OBJECT_TYPES: () => n,
          SIZE_32: () => r,
          SIZE_40: () => o,
          SIZE_96: () => a,
          SIZE_128: () => s,
          REACTIONS_COUNTS_RESPONSE_FIELD: () => l,
          WK_SECTION_PREFIX_REACTIONS: () => u,
        });
        var n = { wall: "wall", wall_reply: "wall_reply" },
          r = { width: 32, height: 32 },
          o = { width: 40, height: 40 },
          a = { width: 96, height: 96 },
          s = { width: 128, height: 128 },
          l = "reactions_counts",
          u = "reactions";
      },
      665872: (e, t, i) => {
        i.d(t, {
          reactionsCountsUpdatePayload: () => o,
          isReactionsFullUpdatePayload: () => a,
          reactionsCountsOnlyUpdatePayload: () => s,
        });
        var n = i(570655),
          r = i(571904),
          o = function (e, t) {
            return (0, n.__assign)(
              (0, n.__assign)({ kind: r.PayloadKindFull }, e),
              { reactionIdState: { reactionId: t.id } }
            );
          },
          a = function (e) {
            return e.kind === r.PayloadKindFull;
          },
          s = function (e) {
            return (0, n.__assign)({ kind: r.PayloadKindCountsOnly }, e);
          };
      },
      571904: (e, t, i) => {
        i.d(t, { PayloadKindCountsOnly: () => n, PayloadKindFull: () => r });
        var n = "counts_only",
          r = "counts_with_current_reaction";
      },
      107337: (e, t, i) => {
        i.d(t, { triggerReactionsUpdate: () => s });
        var n = i(465864),
          r = i(95146),
          o = i(453580),
          a = i(665872),
          s = function (e, t, i, s) {
            var l = (0, n.parseLikeObjectId)(e);
            l && l.objectType === r.SUPPORTED_OBJECT_TYPES.wall && l.objectId
              ? (0, o.emitEvent)(
                  o.WallDataEvents.post_reactions_counts_update,
                  (function (e, t, i, n) {
                    var r = {
                      counts: e,
                      isFromWkLayer: null == t ? void 0 : t.isFromWkLayer,
                      isPrimaryLikeButtonClick:
                        null == t ? void 0 : t.isPrimaryLikeButtonClick,
                      isQueueUpdate: null == t ? void 0 : t.isQueueUpdate,
                      isUserAction: t.isUserAction,
                      postFullId: i.objectId,
                      previewVisibility: t.previewVisibility,
                      reactionIdState: n ? { reactionId: n.id } : void 0,
                    };
                    return n
                      ? (0, a.reactionsCountsUpdatePayload)(r, n)
                      : (0, a.reactionsCountsOnlyUpdatePayload)(r);
                  })(t, s, l, i)
                )
              : l &&
                l.objectType === r.SUPPORTED_OBJECT_TYPES.wall_reply &&
                l.objectId
              ? (0, o.emitEvent)(
                  o.WallDataEvents.reply_reactions_counts_update,
                  {
                    counts: t,
                    replyFullId: l.objectId,
                    reactionIdState: i ? { reactionId: i.id } : void 0,
                  }
                )
              : console.warn("Unsupported reactions object update", e);
          };
      },
      453580: (e, t, i) => {
        i.d(t, {
          WallDataEvents: () => a,
          registerUniqueListener: () => u,
          registerNonGlobalNonUniqueListener: () => c,
          emitEvent: () => d,
        });
        var n = i(570655),
          r = i(761508),
          o = i(469687),
          a = {
            post_reactions_counts_update: "wall/post_reactions_counts_update",
            reply_reactions_counts_update: "wall/reply_reactions_counts_update",
          },
          s = (0, o.makeSharedState)("wall-data", function () {
            return {
              emitter: new r.default(),
              keyedListeners: Object.create(null),
            };
          }),
          l = function (e, t, i) {
            var r,
              o,
              a = s(),
              l =
                null ===
                  (o =
                    null === (r = a.keyedListeners) || void 0 === r
                      ? void 0
                      : r[e]) || void 0 === o
                  ? void 0
                  : o[t];
            return (
              l && a.emitter.removeListener(e, l),
              (function (e, t, i) {
                var r,
                  o = s();
                return (
                  o.emitter.addListener(e, i),
                  (o.keyedListeners[e] = (0, n.__assign)(
                    (0, n.__assign)({}, o.keyedListeners[e]),
                    (((r = {})[t] = i), r)
                  )),
                  function () {
                    var n, r;
                    o.emitter.removeListener(e, i),
                      (null === (n = o.keyedListeners[e]) || void 0 === n
                        ? void 0
                        : n[t]) === i &&
                        (null === (r = o.keyedListeners[e]) ||
                          void 0 === r ||
                          delete r[t]);
                  }
                );
              })(e, t, i)
            );
          },
          u = function (e, t, i) {
            return l(t, e, i);
          },
          c = function (e, t) {
            return (function (e, t) {
              var i = s();
              return (
                i.emitter.addListener(e, t),
                function () {
                  i.emitter.removeListener(e, t);
                }
              );
            })(e, t);
          },
          d = function (e, t) {
            s().emitter.emit(e, t);
          };
      },
      210277: (e, t, i) => {
        i.d(t, { updateAriaLabelCounter: () => o });
        var n = i(786067),
          r = i(325698),
          o = function (e, t, i) {
            if (
              "number" == typeof t &&
              e instanceof HTMLElement &&
              e.classList.contains("PostBottomAction")
            ) {
              var o = (function (e) {
                var t = void 0;
                switch (e) {
                  case r.LikeButtonTypes.comment:
                    t = (0, n.getLang)("likes_comments_N_aria_short", "raw");
                    break;
                  case r.LikeButtonTypes.like:
                    t = (0, n.getLang)("likes_likes_N_aria_short", "raw");
                    break;
                  case r.LikeButtonTypes.share:
                    t = (0, n.getLang)("likes_shares_N_aria_short", "raw");
                }
                return t;
              })(i);
              if (o) {
                var a = (0, n.langNumeric)(t, o, !1);
                e.setAttribute("aria-label", a);
              }
            }
          };
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = (r[e] = { id: e, loaded: !1, exports: {} });
    return n[e].call(i.exports, i, i.exports, o), (i.loaded = !0), i.exports;
  }
  (o.m = n),
    (e = []),
    (o.O = (t, i, n, r) => {
      if (!i) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [i, n, r] = e[c], s = !0, l = 0; l < i.length; l++)
            (!1 & r || a >= r) && Object.keys(o.O).every((e) => o.O[e](i[l]))
              ? i.splice(l--, 1)
              : ((s = !1), r < a && (a = r));
          if (s) {
            e.splice(c--, 1);
            var u = n();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      r = r || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
      e[c] = [i, n, r];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (i = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, n) {
      if ((1 & n && (e = this(e)), 8 & n)) return e;
      if ("object" == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && "function" == typeof e.then) return e;
      }
      var r = Object.create(null);
      o.r(r);
      var a = {};
      t = t || [null, i({}), i([]), i(i)];
      for (var s = 2 & n && e; "object" == typeof s && !~t.indexOf(s); s = i(s))
        Object.getOwnPropertyNames(s).forEach((t) => (a[t] = () => e[t]));
      return (a.default = () => e), o.d(r, a), r;
    }),
    (o.d = (e, t) => {
      for (var i in t)
        o.o(t, i) &&
          !o.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (o.e = () => Promise.resolve()),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.hmd = (e) => (
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
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 22568: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, i) => {
          var n,
            r,
            [a, s, l] = i,
            u = 0;
          for (n in s) o.o(s, n) && (o.m[n] = s[n]);
          if (l) var c = l(o);
          for (t && t(i); u < a.length; u++)
            (r = a[u]), o.o(e, r) && e[r] && e[r][0](), (e[a[u]] = 0);
          return o.O(c);
        },
        i = (self.webpackChunkvk = self.webpackChunkvk || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })();
  var a = o.O(void 0, [11216, 24509, 40885, 68592], () => o(910460));
  a = o.O(a);
})();
