(self.webpackChunkvk = self.webpackChunkvk || []).push([
  [40885],
  {
    984287: (e, t, i) => {
      "use strict";
      i.d(t, { drawAlbumPartRow: () => s });
      i(59357);
      var o = i(786067);
      function s(e) {
        return `<div class="audio_album_part_row">${(0, o.getLang)(
          "audio_album_part"
        ).replace("{part}", e)}</div>`;
      }
    },
    430463: (e, t, i) => {
      "use strict";
      i.d(t, { getAlbumParts: () => s });
      var o = i(820587);
      function s(e) {
        if (e && e.getAudiosCount() && e.isFullyLoadable() && !e.hasMore()) {
          for (
            var t = e.getAudiosList(),
              i = e.getAudiosCount(),
              s = [],
              a = 0,
              l = 0;
            l < i;
            l++
          ) {
            var r = t[l][o.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_ALBUM_PART];
            r > a && ((a = r), s.push({ number: r, offset: l }));
          }
          if (s.length > 1) return s;
        }
        return !1;
      }
    },
    234247: (e, t, i) => {
      "use strict";
      i.d(t, { showAudioAlbum: () => l });
      var o = i(185850),
        s = i(45634),
        a = i(986773);
      function l(e, t) {
        return cur.viewAsBox
          ? cur.viewAsBox()
          : ((t = s.AudioUtils.audioTupleToAudioObject(t)),
            layers.fullhide && layers.fullhide(),
            (0, a.onAdditionalEvent)(e, t, { type: o.TYPE_SHOW_ALBUM }),
            s.AudioUtils.showAudioPlaylist(t.album[0], t.album[1], t.album[2]));
      }
    },
    463091: (e, t, i) => {
      "use strict";
      i.d(t, { followArtist: () => _ });
      var o = i(386409),
        s = i(45634),
        a = i(786067),
        l = i(124041),
        r = i(486125);
      function _(e, t, i, _) {
        (0, o.lockButton)(_),
          ajax.post(
            "al_artist.php",
            { act: "follow", artist_id: e, ref: t, hash: i },
            {
              onFail: () => (0, o.unlockButton)(_),
              onDone: (i) => {
                (0, o.unlockButton)(_),
                  l.FlatButton.setLabel(
                    _,
                    (0, a.getLang)("audio_following_artist_button")
                  ),
                  _.classList.add("MusicAuthor__follow_btn__followed"),
                  (0, r.showDoneBoxFull)(
                    "",
                    {},
                    {
                      text: (0, a.getLang)(
                        "audio_follow_artist_success_notification_text"
                      ),
                      title: (0, a.getLang)(
                        "audio_follow_artist_success_notification_title"
                      ),
                    }
                  ),
                  (_.onclick = (o) => {
                    o.preventDefault(), s.AudioUtils.unfollowArtist(e, t, i, _);
                  });
              },
            }
          );
      }
    },
    57472: (e, t, i) => {
      "use strict";
      function o(e, t) {
        ajax.post(
          "al_artist.php",
          { act: "track_to_official", hash: e, url: t },
          { onFail: () => !0 }
        );
      }
      i.d(t, { trackArtistToOfficial: () => o });
    },
    636760: (e, t, i) => {
      "use strict";
      i.d(t, { unfollowArtist: () => _ });
      var o = i(386409),
        s = i(45634),
        a = i(786067),
        l = i(315544),
        r = i(124041);
      function _(e, t, i, _) {
        (0, o.lockButton)(_),
          ajax.post(
            "al_artist.php",
            { act: "unfollow", artist_id: e, ref: t, hash: i },
            {
              onFail: () => (0, o.unlockButton)(_),
              onDone: (i) => {
                _ &&
                  ((0, o.unlockButton)(_),
                  (0, l.hasClass)(_, "MusicAuthor__follow_btn__can_follow")
                    ? (r.FlatButton.setLabel(
                        _,
                        (0, a.getLang)("audio_follow_artist_button")
                      ),
                      _.classList.remove("MusicAuthor__follow_btn__followed"),
                      (_.onclick = (o) => {
                        o.preventDefault(),
                          s.AudioUtils.followArtist(e, t, i, _);
                      }))
                    : (0, l.re)(_));
              },
            }
          );
      }
    },
    442277: (e, t, i) => {
      "use strict";
      i.d(t, { getRowActionName: () => a });
      var o = i(786067),
        s = i(45634);
      function a(e, t, i) {
        var a,
          l = s.AudioUtils.getAddRestoreInfo();
        switch (e) {
          case "current_delete":
            a = (0, o.getLang)("audio_delete_from_current");
            break;
          case "recoms_delete":
            a = (0, o.getLang)("audio_dont_show");
            break;
          case "listened_delete":
            a = (0, o.getLang)("audio_remove_from_list");
            break;
          case "delete":
            if (s.AudioUtils.isPodcast(t))
              a = (0, o.getLang)("audio_podcast_delete_episode");
            else if (window.AudioPage && window.AudioPage.isInRecentPlayed(i))
              a = (0, o.getLang)("audio_remove_from_list");
            else {
              var r = l[t.fullId];
              a =
                r && r.deleteAll
                  ? r.deleteAll.text
                  : (0, o.getLang)("global_delete_audio");
            }
            break;
          case "restore_recoms":
            a = (0, o.getLang)("audio_restore_audio");
            break;
          case "more":
            a = (0, o.getLang)("global_media_selector_more");
            break;
          case "add":
            var _ = l[t.fullId];
            if (
              (_ && l[_.addedFullId] && (_ = null), s.AudioUtils.isPodcast(t))
            )
              a = (0, o.getLang)("audio_podcast_restore_episode");
            else if (_ && "deleted" == _.state)
              a = (0, o.getLang)("audio_restore_audio");
            else if (_ && "added" == _.state)
              a = (0, o.getLang)("global_delete_audio");
            else {
              var d = !!window.AudioPage && currentAudioPage(i);
              a =
                d &&
                d.getOwnerId() < 0 &&
                d.canAddToGroup() &&
                d.getOwnerId() !== t.ownerId
                  ? (0, o.getLang)("audio_add_to_group")
                  : (0, o.getLang)("audio_add_to_audio");
            }
            break;
          case "edit":
            a = s.AudioUtils.isPodcast(t)
              ? (0, o.getLang)("audio_podcast_edit_episode")
              : (0, o.getLang)("audio_edit_audio");
            break;
          case "next":
            a =
              (cur.lang && cur.lang.global_audio_set_next_audio) ||
              (0, o.getLang)("audio_set_next_audio");
            break;
          case "recoms":
            a = (0, o.getLang)("audio_show_recommendations");
            break;
          case "fave":
            a = s.AudioUtils.isPodcast(t)
              ? (0, o.getLang)("audio_podcast_listen_later")
              : "";
            break;
          default:
            a = "";
        }
        return a;
      }
    },
    160260: (e, t, i) => {
      "use strict";
      i.d(t, { hasAudioHQBodyClass: () => s });
      var o = i(820587);
      function s() {
        return document.body.classList.contains(
          o.AUDIO_PLAYER_ENUMS.AUDIO_HQ_LABEL_CLS
        );
      }
    },
    930982: (e, t, i) => {
      "use strict";
      i.d(t, { renderAudioDiag: () => l });
      var o = i(315544),
        s = i(695724),
        a = i(820587);
      function l() {
        var e = (0, o.ge)("audio_diag_log"),
          t = ls.get(a.AUDIO_PLAYER_ENUMS.LOG_LS_KEY) || [];
        e &&
          (0, s.each)(t, function (t, i) {
            var s = new Date(i.shift()).toUTCString();
            (i = i.join(", ")),
              e.appendChild(
                (0, o.se)(
                  '<div class="audio_diag_log_row"><span class="audio_diag_log_time">' +
                    s +
                    "</span>" +
                    i +
                    "</div>"
                )
              );
          });
      }
    },
    655700: (e, t, i) => {
      "use strict";
      i.d(t, { toggleAudioHQBodyClass: () => s });
      var o = i(820587);
      function s() {
        var e = AudioPlayer.showHQLabel();
        document.body.classList.toggle(
          o.AUDIO_PLAYER_ENUMS.AUDIO_HQ_LABEL_CLS,
          e
        );
      }
    },
    869053: (e, t, i) => {
      "use strict";
      i.d(t, { updateQueueReceivedPost: () => a });
      var o = i(315544),
        s = i(695724);
      function a(e) {
        e &&
          (0, s.each)((0, o.geByClass)("_audio_row", e), function () {
            (0,
            o.domData)(this, "new-post", "groups" == cur.module ? "wall" : "feed");
          });
      }
    },
    67766: (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        AudioPlaylist: () => AudioPlaylist,
      });
      var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(66108),
        core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(530522),
        core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(579665),
        core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(95767),
        core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(820075),
        core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(940851),
        core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(296253),
        core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(898837),
        core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(976142),
        core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(59357),
        core_js_modules_es6_array_slice__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(850110),
        core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(751876),
        _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(40906),
        _web_lib_box_utils__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(486125),
        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(695724),
        _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45634),
        _playlist_loadAllPlaylistAudios__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(270148),
        _web_indexer_indexer__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(18149);
      function _toArray(e) {
        return (
          _arrayWithHoles(e) ||
          _iterableToArray(e) ||
          _unsupportedIterableToArray(e) ||
          _nonIterableRest()
        );
      }
      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function _unsupportedIterableToArray(e, t) {
        if (e) {
          if ("string" == typeof e) return _arrayLikeToArray(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i
              ? Array.from(e)
              : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? _arrayLikeToArray(e, t)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o;
      }
      function _iterableToArray(e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e;
      }
      class AudioPlaylist {
        static splitId(e) {
          var t = _toArray(e.split("_")),
            i = t[0],
            o = t[1],
            s = t.slice(2);
          return [i, o, (s = s.join("_"))];
        }
        constructor(e, t, i) {
          var o = {};
          if (
            e &&
            (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isFunction)(
              e.getId
            )
          )
            return e.isReference()
              ? (window.getAudioPlayer().addPlaylist(this), e)
              : ((this._ref = e),
                void window.getAudioPlayer().addPlaylist(this));
          (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isObject)(e)
            ? ((o = e), this._ensureIndex())
            : ((o.ownerId = t),
              (o.type = e),
              (o.albumId = i || ++AudioPlaylist.plIndex)),
            (this._type = o.type),
            (this._ownerId = o.ownerId || vk.id),
            (this._albumId = o.albumId || 0),
            (this._fromId = o.fromId || 0),
            (this._list = []),
            (this._context = o.context || ""),
            (this._blockId = o.blockId),
            (this._isFakeId = !1),
            (this._expire = o.expire || null),
            (this._noDiscover = o.hasOwnProperty("noDiscover")
              ? o.noDiscover
              : null),
            (this._nextOffset = o.nextOffset),
            (this._forceReload = !1),
            this.mergeWith(o),
            window.getAudioPlayer().addPlaylist(this);
        }
        updatePlaylist(e) {
          var t = this.getSelf(),
            i = !1;
          return t && e
            ? (t._title !== e.title && ((t._title = e.title), (i = !0)),
              t._titleLang !== e.titleLang &&
                ((t._titleLang = e.titleLang), (i = !0)),
              i)
            : i;
        }
        _ensureIndex(e) {
          var t = this.getSelf();
          if (t._index) e && e();
          else {
            var i = function (e, t) {
              var i = (0,
              _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.intval)(t);
              return i >= 33 && i < 48 ? String.fromCharCode(i) : e;
            };
            t._index =
              new _web_indexer_indexer__WEBPACK_IMPORTED_MODULE_17__.vkIndexer(
                t._list,
                function (e) {
                  return (
                    e[
                      _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                        .AUDIO_ITEM_INDEX_PERFORMER
                    ] +
                    " " +
                    e[
                      _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                        .AUDIO_ITEM_INDEX_TITLE
                    ]
                  ).replace(/\&\#(\d+);?/gi, i);
                },
                e
              );
          }
        }
        cleanIndex() {
          this.getSelf()._index = null;
        }
        search(e, t) {
          var i = this.getSelf();
          (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isObject)(e) ||
            (e = { q: e }),
            this._ensureIndex(() => {
              var o = i._index ? i._index.search(e.q) : [];
              return (
                (o = o.filter(function (t) {
                  return (
                    !e.lyrics ||
                    "" !==
                      t[
                        _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                          .AUDIO_ITEM_INDEX_LYRICS
                      ]
                  );
                })),
                t(o)
              );
            });
        }
        setNextOffset(e) {
          this._nextOffset = e;
        }
        getNextOffset() {
          var e = this.getSelf();
          return e._forceReload
            ? 0
            : "" === e._nextOffset
            ? e._nextOffset
            : e._nextOffset || this.getAudiosCount();
        }
        getIsFakeId() {
          return this.getSelf()._isFakeId;
        }
        setIsFakeId(e) {
          this.getSelf()._isFakeId = e;
        }
        getId() {
          return (
            this.getType() + "_" + this.getOwnerId() + "_" + this.getAlbumId()
          );
        }
        getFullId() {
          return (
            this.getOwnerId() +
            "_" +
            this.getAlbumId() +
            (this.getAccessHash() ? "_" + this.getAccessHash() : "")
          );
        }
        isReference() {
          return !!this._ref;
        }
        getSelf() {
          return this._ref &&
            (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isObject)(
              this._ref
            )
            ? this._ref
            : this;
        }
        getType() {
          return this.getSelf()._type;
        }
        getExpire() {
          return this.getSelf()._expire;
        }
        getOwnerId() {
          return +this.getSelf()._ownerId;
        }
        getAlbumId() {
          return this.getSelf()._albumId;
        }
        getPlaylistId() {
          return this.getSelf()._albumId;
        }
        getOriginalPlaylistRawId() {
          return this.getSelf()._originalPlaylistRawId;
        }
        getFollowHash() {
          return this.getSelf()._followHash;
        }
        getContext() {
          return this.getSelf()._context;
        }
        setContext(e) {
          this.getSelf()._context = e;
        }
        getRef() {
          return this.getSelf()._ref;
        }
        getRawId() {
          return this.getSelf()._implPlay_rawId;
        }
        getGridCovers() {
          return this.getSelf()._gridCovers || "";
        }
        getTitle() {
          return this.getSelf()._title || "";
        }
        getTitleLang() {
          return null == this.getSelf()._titleLang
            ? null
            : this.getSelf()._titleLang;
        }
        getSubtitle() {
          return this.getSelf()._subTitle || "";
        }
        getDescription() {
          return this.getSelf()._description || "";
        }
        getRawDescription() {
          return this.getSelf()._rawDescription || "";
        }
        getAccessHash() {
          return this.getSelf()._accessHash || "";
        }
        getFromId() {
          return this.getSelf()._fromId || 0;
        }
        setFromId(e) {
          this.getSelf()._fromId = e;
        }
        getAuthorLine() {
          return this.getSelf()._authorLine || "";
        }
        getAuthorHref() {
          return this.getSelf()._authorHref || "";
        }
        getAuthorName() {
          return this.getSelf()._authorName || "";
        }
        getInfoLine1() {
          return this.getSelf()._infoLine1 || "";
        }
        getInfoLine2() {
          return this.getSelf()._infoLine2 || "";
        }
        getListens() {
          return this.getSelf()._listens || 0;
        }
        getAddClasses() {
          return this.getSelf()._addClasses || "";
        }
        getLastUpdated() {
          return this.getSelf()._lastUpdated || "";
        }
        getEditHash() {
          return this.getSelf()._editHash || "";
        }
        getDeleteHash() {
          return this.getSelf()._deleteHash || "";
        }
        getReplaceHash() {
          return this.getSelf()._replaceHash || "";
        }
        getCoverUrl() {
          return this.getSelf()._coverUrl || "";
        }
        getBlocks() {
          return this.getSelf()._blocks || {};
        }
        getSearchParams() {
          return this.getSelf()._searchParams || null;
        }
        getSearchQid() {
          return this.getSelf()._searchQid || null;
        }
        getLocalFoundCount() {
          return this.getSelf()._localFoundTotal || 0;
        }
        getTotalCount() {
          return this.getSelf()._totalCount;
        }
        getTotalCountHash() {
          return this.getSelf()._totalCountHash;
        }
        getFriendId() {
          return this.getSelf()._friend;
        }
        getNoDiscover() {
          return this.getSelf()._noDiscover;
        }
        getAudiosList() {
          return this.getSelf()._list;
        }
        getPostId() {
          return this.getSelf()._postId;
        }
        getWallQuery() {
          return this.getSelf()._wallQuery;
        }
        getWallType() {
          return this.getSelf()._wallType;
        }
        getCommunititesBlock() {
          return this.getSelf()._communitiesBlock;
        }
        getArtistsBlock() {
          return this.getSelf()._artistsBlock;
        }
        getPlaylistsBlock() {
          return this.getSelf()._playlistsBlock;
        }
        getLiveInfo() {
          var e = this.getSelf()._live;
          return (
            !!e && { hostId: (e = e.split(","))[0], audioId: e[1], hash: e[2] }
          );
        }
        getAudiosCount() {
          var e = this.getSelf();
          return Array.isArray(e._list) ? e._list.length : 0;
        }
        getTotalDuration() {
          var e = this.getAudiosList(),
            t = 0;
          return (
            (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
              e,
              function (e, i) {
                t +=
                  i[
                    _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                      .AUDIO_ITEM_INDEX_DURATION
                  ];
              }
            ),
            t
          );
        }
        getAudio(e) {
          if (!e) return null;
          var t = this.getSelf();
          "string" == typeof e && (e = e.split("_"));
          for (var i = 0, o = t._list.length; i < o; i++)
            if (
              e[0] ==
                t._list[i][
                  _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                    .AUDIO_ITEM_INDEX_OWNER_ID
                ] &&
              e[1] ==
                t._list[i][
                  _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                    .AUDIO_ITEM_INDEX_ID
                ]
            )
              return t._list[i];
          return null;
        }
        getAudioAt(e) {
          var t = this.getSelf();
          return e < t._list.length ? t._list[e] : null;
        }
        setLocalFoundCount(e) {
          this.getSelf()._localFoundTotal = e;
        }
        setAdsAllowed(e) {
          return (this.getSelf()._isAdsAllowed = e);
        }
        setFollowed(e) {
          var t = this.getAddClasses() || "";
          return (
            (t = t.replace("audio_playlist__followed", "")),
            e && (t += " audio_playlist__followed"),
            (this.getSelf()._addClasses = t),
            (this.getSelf()._isFollowed = e)
          );
        }
        isBlocked() {
          return !!this.getSelf()._isBlocked;
        }
        hasMore() {
          return !!this.getSelf()._hasMore;
        }
        isOfficial() {
          return !!this.getSelf()._isOfficial;
        }
        isFollowed() {
          return this.getSelf()._isFollowed;
        }
        isAdsAllowed() {
          return !!this.getSelf()._isAdsAllowed;
        }
        getForceReload() {
          return this.getSelf()._forceReload;
        }
        isFullyLoadable() {
          return this.getType() === AudioPlaylist.TYPE_PLAYLIST;
        }
        isLive() {
          return !!this.getLiveInfo();
        }
        getFeedOffset() {
          return this._feedOffset;
        }
        getFeedFrom() {
          return this._feedFrom;
        }
        _unref() {
          var e = this._ref;
          if (
            (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isObject)(e)
          ) {
            var t = {};
            for (var i in e)
              if (
                e.hasOwnProperty(i) &&
                !(0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isFunction)(
                  e[i]
                ) &&
                0 === i.indexOf("_")
              ) {
                var o = e[i];
                t[i.substr(1)] = (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isObject)(o)
                  ? (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.clone)(
                      o
                    )
                  : o;
              }
            (t.hasMore = !1),
              delete this._ref,
              (this._type = AudioPlaylist.TYPE_TEMP),
              (this._albumId = t.albumId),
              (this._list = []),
              this.mergeWith(t);
          }
        }
        equals(e) {
          return this.getSelf() === e.getSelf();
        }
        serialize() {
          return JSON.stringify(this.asObject());
        }
        indexOfAudio(e) {
          if (!e) return -1;
          var t = [];
          (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isString)(e)
            ? (t = e.split("_"))
            : (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isObject)(e)
            ? (t = [e.ownerId, e.id])
            : (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isArray)(
                e
              ) &&
              (t = [
                e[
                  _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                    .AUDIO_ITEM_INDEX_OWNER_ID
                ],
                e[
                  _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                    .AUDIO_ITEM_INDEX_ID
                ],
              ]);
          var i = this._list;
          if (!i) return -1;
          for (var o = 0, s = i.length; o < s; o++)
            if (
              i[o] &&
              t[0] ==
                i[o][
                  _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                    .AUDIO_ITEM_INDEX_OWNER_ID
                ] &&
              t[1] ==
                i[o][
                  _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                    .AUDIO_ITEM_INDEX_ID
                ]
            )
              return o;
          return -1;
        }
        asObject() {
          var e = {};
          return (
            (e.type = this.getType() || AudioPlaylist.TYPE_TEMP),
            (e.ownerId = this.getOwnerId()),
            (e.albumId = this.getAlbumId()),
            (e.accessHash = this.getAccessHash()),
            (e.hasMore = this.hasMore()),
            (e.nextOffset = this.getNextOffset()),
            (e.title = this.getTitle()),
            (e.titleLang = this.getTitleLang()),
            (e.context = window.getAudioPlayer()._getPlayingContext()),
            (e.originalPlaylistRawId = this.getOriginalPlaylistRawId()),
            (e.expire = this.getExpire ? this.getExpire() : null),
            (e.blockId = this.getBlockId()),
            this.getType() === AudioPlaylist.TYPE_PLAYLIST &&
              this.getAlbumId() > 0 &&
              (e.originalPlaylistRawId =
                this.getOwnerId() +
                "_" +
                this.getAlbumId() +
                "_" +
                this.getAccessHash()),
            e
          );
        }
        asPlaylistData() {
          return {
            type: this.getType(),
            ownerId: this.getOwnerId(),
            id: this.getId(),
            title: this.getTitle(),
            hasMore: this.hasMore(),
            list: this.getAudiosList(),
            nextOffset: this.getNextOffset(),
            subtitle: this.getSubtitle(),
            totalCount: this.getTotalCount(),
            blockId: this.getBlockId(),
          };
        }
        toString() {
          return this.getId();
        }
        clean(e) {
          e || this._unref();
          var t = this.getSelf();
          (t._hasMore = !0),
            (t._list = []),
            (t._feedOffset = t._feedFrom = 0),
            (t._nextOffset = 0);
        }
        initSortedList(e) {
          return (this.getSelf()._list = e || []);
        }
        setForceReload(e) {
          var t = this.getSelf();
          return e && (t._hasMore = !0), (t._forceReload = e);
        }
        getBlockId() {
          return this.getSelf()._blockId;
        }
        getAudioIds() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "default",
            t = `${this.getOwnerId()}_${this.getPlaylistId()}`,
            i = this.getBlockId(),
            o = this.getAlbumId();
          return (
            (i || o) && (t = ""),
            i || this.getPlaylistId()
              ? new Promise((s) => {
                  ajax.post(
                    "al_audio.php",
                    {
                      act: "get_audio_ids_by_source",
                      block_id: i || o,
                      playlist_id: t,
                      track_type: e,
                      context: this.getContext(),
                    },
                    {
                      onDone: (e) => {
                        s(e);
                      },
                      onFail: () => (s([]), !1),
                    }
                  );
                })
              : Promise.resolve([])
          );
        }
        loadAll(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (!this.isFullyLoadable()) return e && e(this);
          this.load(0, e, !0, "default", t);
        }
        loadByBlockId(e, t, i) {
          var o = this,
            s = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                i = o._onDoneLoading;
              delete o._onDoneLoading,
                delete o._loadingAll,
                (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
                  i || [],
                  (e, i) => {
                    i && i(o, t);
                  }
                );
            },
            a = this.getNextOffset();
          return !this.getAudiosCount() || (e && e === a)
            ? ((this._onDoneLoading = this._onDoneLoading || []),
              this._onDoneLoading.push(t),
              this._loadingAll
                ? void 0
                : i
                ? ((this._loadingAll = !0),
                  void (0,
                  _playlist_loadAllPlaylistAudios__WEBPACK_IMPORTED_MODULE_16__.loadAllPlaylistAudios)(
                    this,
                    s
                  ))
                : void ajax.post(
                    "al_audio.php?act=load_block_playlist",
                    { block_id: this._blockId, start_from: a },
                    {
                      onDone: (e) => {
                        this._blockId = e.blockId;
                        var t = window.getAudioPlayer();
                        t.mergePlaylistData(this, e),
                          s(this),
                          t.saveStateCurrentPlaylist(),
                          "" === this.getNextOffset() &&
                            (clearTimeout(this._sendSearchStatsTimeout),
                            (this._sendSearchStatsTimeout = setTimeout(
                              this.sendSearchStats.bind(this, "search_view"),
                              3e3
                            )),
                            (this._searchPlayStatsSent = !1));
                      },
                    }
                  ))
            : t && t(this);
        }
        load(offset, _onDone, needAll) {
          var trackType =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "default",
            viewType =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null;
          (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isFunction)(
            offset
          )
            ? ((_onDone = offset), (offset = 0))
            : (offset = (0,
              _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.intval)(
                offset
              )),
            this.getSelf().isExpired() &&
              ((this.getSelf()._hasMore = !0),
              this.getSelf().setForceReload(!0));
          var searchParams = this.getSearchParams(),
            wasPreload = !1,
            countAvailable = this.getType() === this.getAudiosCount(),
            isGoingToLoadAll =
              this.isFullyLoadable() && needAll && this.hasMore(),
            callOnDones = (e, t, i) => {
              var o = this._onDoneLoading;
              i || (delete this._onDoneLoading, delete this._loadingAll),
                (!wasPreload ||
                  (wasPreload &&
                    cur.audioChooseBox &&
                    (0,
                    _web_lib_box_utils__WEBPACK_IMPORTED_MODULE_13__.curBox)())) &&
                  (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
                    o || [],
                    (i, o) => {
                      o && o(e, t);
                    }
                  ),
                i && (wasPreload = !0);
            },
            params;
          if (
            this.getSelf().getForceReload() &&
            ((offset < countAvailable && !isGoingToLoadAll) ||
              "" === this.getNextOffset() ||
              !this.hasMore() ||
              (searchParams &&
                this.getType() === AudioPlaylist.TYPE_SEARCH &&
                !searchParams.globalQuery))
          )
            return _onDone && _onDone(this);
          if (
            ((this._onDoneLoading = this._onDoneLoading || []),
            this._onDoneLoading.push(_onDone),
            this._loadingAll)
          )
            return _onDone && _onDone(this);
          if (needAll)
            return (
              (this._loadingAll = !0),
              void (0,
              _playlist_loadAllPlaylistAudios__WEBPACK_IMPORTED_MODULE_16__.loadAllPlaylistAudios)(
                this,
                callOnDones,
                viewType
              )
            );
          (offset = this.getNextOffset()),
            offset === this.getLocalFoundCount() &&
              (offset -= this.getLocalFoundCount()),
            offset || clearTimeout(this._sendSearchStatsTimeout),
            this.getSelf().getForceReload() &&
              this.getSelf().setForceReload(!1);
          var isCatalog = !1;
          if (this._blockId)
            (params = {
              act: "load_block_playlist",
              block_id: this._blockId,
              start_from: this.getNextOffset(),
            }),
              (isCatalog = !0);
          else {
            var ownerId =
              cur.audioPage && this.getType() === AudioPlaylist.TYPE_SEARCH
                ? cur.audioPage.getOwnerId()
                : this.getOwnerId();
            params = {
              act: "load_section",
              type: this.getType(),
              owner_id: ownerId,
              playlist_id: this.getPlaylistId(),
              offset,
              context: this.getContext(),
              access_hash: this.getAccessHash(),
              search_q: searchParams ? searchParams.globalQuery : null,
              search_performer: searchParams ? searchParams.performer : null,
              search_lyrics: searchParams ? searchParams.lyrics : null,
              search_sort: searchParams ? searchParams.sort : null,
              search_history: searchParams
                ? (0,
                  _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.intval)(
                    searchParams.fromHistory
                  )
                : null,
              search_qid: this.getSearchQid(),
              feed_from: this.getFeedFrom(),
              feed_offset: this.getFeedOffset(),
              post_id: this.getPostId(),
              wall_query: this.getWallQuery(),
              wall_type: this.getWallType(),
              claim: (0,
              _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.intval)(
                nav.objLoc.claim
              ),
              track_type: trackType,
            };
          }
          return ajax.post("al_audio.php", params, {
            onDone: (loadedPlaylist, tpl, langs, templatesScript, data) => {
              if (!loadedPlaylist)
                return (
                  this.getSelf().setNextOffset(""),
                  void (isCatalog
                    ? _onDone && _onDone(loadedPlaylist)
                    : callOnDones(loadedPlaylist))
                );
              if (
                (window.addTemplates({ audio_playlist_snippet: tpl }),
                (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.extend)(
                  cur.lang,
                  langs
                ),
                templatesScript && eval(templatesScript),
                !this._loadingAll || needAll)
              ) {
                var audioPlayer = window.getAudioPlayer();
                audioPlayer.mergePlaylistData(this, loadedPlaylist),
                  isCatalog
                    ? _onDone && _onDone(loadedPlaylist.list)
                    : callOnDones(loadedPlaylist),
                  audioPlayer.saveStateCurrentPlaylist(),
                  (offset && "" !== loadedPlaylist.nextOffset) ||
                    (clearTimeout(this._sendSearchStatsTimeout),
                    (this._sendSearchStatsTimeout = setTimeout(
                      this.sendSearchStats.bind(this, "search_view"),
                      3e3
                    )),
                    (this._searchPlayStatsSent = !1));
              }
            },
            onFail: () => !0,
            cache: this.getType() === AudioPlaylist.TYPE_SEARCH ? 1 : 0,
          });
        }
        isExpired() {
          var e = this.getExpire();
          return !!e && new Date(1e3 * e).getTime() < new Date().getTime();
        }
        mergeInfo(e) {
          this._albumId = e.id || this._albumId;
          (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.each)(
            [
              "accessHash",
              "addClasses",
              "artistsBlock",
              "authorLine",
              "authorHref",
              "authorName",
              "communitiesBlock",
              "coverUrl",
              "description",
              "gridCovers",
              "editHash",
              "feedFrom",
              "feedOffset",
              "followHash",
              "hasMore",
              "infoLine1",
              "infoLine2",
              "isAdsAllowed",
              "isFollowed",
              "isOfficial",
              "isBlocked",
              "lastUpdated",
              "listens",
              "live",
              "nextOffset",
              "originalList",
              "ownerId",
              "playlistsBlock",
              "postId",
              "rawId",
              "rawDescription",
              "searchQid",
              "searchParams",
              "subTitle",
              "title",
              "titleLang",
              "noDiscover",
              "totalCount",
              "totalCountHash",
              "type",
              "wallQuery",
              "wallType",
              "expire",
            ],
            (t, i) => {
              void 0 !== e[i] && (this["_" + i] = e[i]);
            }
          );
        }
        mergeWith(e) {
          var t = e.list;
          this.isExpired() && (this.getSelf()._list = []),
            t && t.length && this.pushAudio(t),
            this.mergeInfo(e);
        }
        pushAudio(e, t) {
          this._unref();
          var i = void 0 === t,
            o = (e) => {
              var o = this.getAudiosList(),
                s = this.indexOfAudio(e);
              if (s >= 0) {
                if (i) return;
                o.splice(s, 1);
              }
              ((e = (0,
              _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.clone)(e))[
                _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils.AUDIO_ITEM_INDEX_TITLE
              ] = (0,
              _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.clean)(
                (0,
                _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.replaceEntities)(
                  e[
                    _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                      .AUDIO_ITEM_INDEX_TITLE
                  ]
                ).replace(/(<em>|<\/em>)/g, "")
              )),
                (e[
                  _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils.AUDIO_ITEM_INDEX_PERFORMER
                ] = (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_14__.clean)(
                  (0,
                  _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.replaceEntities)(
                    e[
                      _utils__WEBPACK_IMPORTED_MODULE_15__.AudioUtils
                        .AUDIO_ITEM_INDEX_PERFORMER
                    ]
                  ).replace(/(<em>|<\/em>)/g, "")
                )),
                i ? o.push(e) : o.splice(t, 0, e),
                this._index && this._index.add(e);
            };
          if (
            (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isArray)(e) &&
            (0, _shared_lib_common__WEBPACK_IMPORTED_MODULE_12__.isArray)(e[0])
          )
            for (var s = 0, a = e.length; s < a; s++) o(e[s]);
          else e && e.length && o(e);
        }
        moveAudio(e, t) {
          this._unref();
          var i = this._list.splice(e, 1);
          e < t && (t -= 1), this._list.splice(t, 0, i[0]);
        }
        removeAudio(e) {
          var t = this.indexOfAudio(e);
          if (t >= 0) {
            this._unref();
            var i = this._list.splice(t, 1);
            return (
              this._index && this._index.remove(i[0]),
              window.getAudioPlayer().saveStateCurrentPlaylist(),
              t
            );
          }
          return -1;
        }
        sendSearchStats(e) {
          if ("search_play" === e) {
            if (this._searchPlayStatsSent) return;
            this._searchPlayStatsSent = !0;
          }
          ajax.post("al_audio.php?act=search_stats", {
            event_type: e,
            search_type: this.getSearchQid() ? "external" : "internal",
            search_params: JSON.stringify(this.getSearchParams()),
            results_count: this.getTotalCount(),
          });
        }
        fetchNextLiveAudio(e) {
          var t = this.getLiveInfo();
          ajax.post(
            "al_audio.php",
            { act: "a_get_audio_status", host_id: t.hostId, hash: t.hash },
            { onDone: (t) => e && e(t), onFail: () => !0 }
          );
        }
      }
      (AudioPlaylist.plIndex = 0),
        (AudioPlaylist.TYPE_CURRENT = "current"),
        (AudioPlaylist.TYPE_PLAYLIST = "playlist"),
        (AudioPlaylist.TYPE_MY = "my"),
        (AudioPlaylist.TYPE_ALBUM = "album"),
        (AudioPlaylist.TYPE_TEMP = "temp"),
        (AudioPlaylist.TYPE_RECOM = "recoms"),
        (AudioPlaylist.TYPE_SEARCH = "search"),
        (AudioPlaylist.TYPE_FEED = "feed"),
        (AudioPlaylist.TYPE_LIVE = "live"),
        (AudioPlaylist.TYPE_WALL = "wall"),
        (AudioPlaylist.TYPE_RECENT = "recent"),
        (AudioPlaylist.DEFAULT_PLAYLIST_ID = -1);
    },
    461292: (e, t, i) => {
      "use strict";
      i.d(t, { TopAudioPlayer: () => p });
      var o = i(45634),
        s = i(726271),
        a = i(850167),
        l = i(786067),
        r = i(49535),
        _ = i(695724),
        d = i(315544),
        n = i(200134),
        u = i(563175),
        c = i(996512),
        h = "top_audio_player_enabled";
      class p {
        constructor(e) {
          (this.ap = (0, a.getAudioPlayer)()),
            (this._el = e),
            (this._playIconBtn = (0, d.ge)("top_audio")),
            (this._audioBtnGroup = (0, d.ge)("top_audio_btn_group")),
            this.init();
        }
        static init() {
          var e = (0, d.ge)("top_audio_player"),
            t = (0, d.data)(e, "object");
          t || ((t = new p(e)), (0, d.data)(e, "object", t));
        }
        init() {
          var e = this;
          function t(t) {
            return (0, d.hasClass)(this, "top_audio_player_play")
              ? (e.ap.podcastSetActionRef(
                  e.ap.getCurrentAudio(),
                  e.ap.isPlaying()
                    ? o.AudioUtils.PodcastsLogs.ACTION_PAUSE
                    : o.AudioUtils.PodcastsLogs.ACTION_PLAY,
                  "top_player"
                ),
                e.ap.isPlaying() ? e.ap.pause() : e.ap.play(),
                !1)
              : (0, d.hasClass)(this, "top_audio_player_prev")
              ? (e.ap.playPrev(), !1)
              : (0, d.hasClass)(this, "top_audio_player_next")
              ? (e.ap.playNext(), !1)
              : void 0;
          }
          this.ap.on(this, n.events.UPDATE, this.onUpdate.bind(this)),
            this.ap.on(this, n.events.PLAY, this.onPlay.bind(this)),
            this.ap.on(this, n.events.PLAY_REQUESTED, this.onPlay.bind(this)),
            this.ap.on(
              this,
              [n.events.PAUSE, n.events.STOP],
              this.onPause.bind(this)
            ),
            (this.ap.top = this),
            (0, _.each)(["prev", "play", "next"], function (i, o) {
              (0,
              r.addEvent)((0, d.geByClass1)("top_audio_player_" + o, e._el), "click", t);
            }),
            (0, r.addEvent)(this._el, "mousedown", function (t) {
              if (!(0, d.gpeByClass)("top_audio_player_btn", t.target, e._el))
                return (
                  1 != t.which ||
                    (0, d.hasClass)(t.target, "top_audio_player_btn") ||
                    (0, d.hasClass)(t.target, "top_audio_player_act_icon") ||
                    o.AudioUtils.getLayer().toggle(),
                  (0, r.cancelEvent)(t)
                );
            }),
            (0, r.addEvent)((0, d.ge)("top_audio"), "mousedown", function (e) {
              return (
                !0 !== (0, r.checkEvent)(e) &&
                (o.AudioUtils.getLayer().toggle(), (0, r.cancelEvent)(e))
              );
            }),
            s.browser.safari ||
              (0, r.addEvent)(document, "keydown keyup", function (e) {
                (0,
                d.toggleClass)((0, d.ge)("top_audio_play"), "shuffle", e.shiftKey);
              }),
            this._resetAudio(),
            this._updateTitle(this.ap.getCurrentAudio());
        }
        onPause() {
          this._el &&
            ((0, d.removeClass)(this._el, "top_audio_player_playing"),
            (this._el.querySelector(".top_audio_player_play svg").outerHTML =
              (0, c.getIcon24Play)().icon));
          var e = (0, d.geByClass1)("_top_audio_player_play_blind_label");
          e && (e.innerHTML = (0, l.getLang)("global_audio_play"));
        }
        onPlay(e, t, i) {
          this._hideButton(),
            requestAnimationFrame(function () {
              var e = o.AudioUtils.getLayer();
              e && e.isShown() && e.updatePosition();
            }),
            (0, d.addClass)(this._el, h),
            (0, d.toggleClass)(this._el, "top_audio_player_playing", !0),
            (this._el.querySelector(".top_audio_player_play svg").outerHTML =
              (0, u.getIcon24Pause)().icon);
          var s = (0, d.geByClass1)("_top_audio_player_play_blind_label");
          s &&
            (s.innerHTML = this.ap.isPlaying()
              ? (0, l.getLang)("global_audio_pause")
              : (0, l.getLang)("global_audio_play")),
            this._updateTitle(e, i);
        }
        onUpdate(e) {
          e
            ? (this._updateTitle(e),
              this._hideButton(),
              (0, d.addClass)(this._el, h))
            : this._resetAudio();
        }
        _updateTitle(e, t) {
          if (
            ((t = (0, _.intval)(t)),
            (e = o.AudioUtils.audioTupleToAudioObject(e)),
            (0, d.toggleClass)(
              this._el,
              "audio_player_podcast",
              o.AudioUtils.isPodcast(e)
            ),
            (0, d.toggleClass)(
              this._el,
              "audio_player_article_tts",
              o.AudioUtils.isArticleTts(e)
            ),
            e)
          ) {
            void 0 !== this._currTitleReTO && clearTimeout(this._currTitleReTO);
            var i = (0, d.geByClass1)("top_audio_player_title_out", this._el);
            (0, d.re)(i);
            var s = (0, d.geByClass1)("top_audio_player_title", this._el);
            if (0 !== t) {
              var a = t < 0 ? -10 : 10,
                l = `opacity: 0; top: ${a}px; left: ${s.offsetLeft}px`,
                r = this.getTitleText(e),
                n = (0, d.se)(
                  '<div class="top_audio_player_title top_audio_player_title_next" style="' +
                    l +
                    '">' +
                    r +
                    "</div>"
                );
              n.setAttribute("onmouseover", "setTitle(this)"),
                t > 0
                  ? (0, d.domInsertAfter)(n, s)
                  : (0, d.domInsertBefore)(n, s),
                (0, d.addClass)(s, "top_audio_player_title_out"),
                (0, d.setStyle)(s, { top: -a, opacity: 0 }),
                setTimeout(function () {
                  (0, d.setStyle)(n, { top: 0, opacity: 1 });
                }, 10),
                clearTimeout(this._currTitleReTO),
                (this._currTitleReTO = setTimeout(function () {
                  (0, d.re)(s),
                    (0, d.removeClass)(n, "top_audio_player_title_next");
                }, p.TITLE_CHANGE_ANIM_SPEED));
            } else
              s &&
                ((s.innerHTML = this.getTitleText(e)),
                (s.titleSet = 0),
                s.setAttribute("onmouseover", "setTitle(this)"));
          }
        }
        getTitleText(e) {
          return e.performer + " &mdash; " + e.title;
        }
        _resetAudio() {
          (0, d.removeClass)(this._playIconBtn, h),
            (0, d.removeClass)(this._el, h),
            (0, d.removeClass)(this._el, "top_audio_player_playing"),
            (0, d.removeClass)(this._el, "audio_player_podcast"),
            (0, d.removeClass)(this._el, "audio_player_article_tts"),
            (0, d.show)(this._audioBtnGroup);
          var e = o.AudioUtils.getLayer();
          e && e.isShown() && e.updatePosition();
        }
        _hideButton() {
          (0, d.hide)(this._audioBtnGroup),
            (0, d.hasClass)(this._playIconBtn, h) ||
              (0, d.addClass)(this._playIconBtn, h);
        }
      }
      p.TITLE_CHANGE_ANIM_SPEED = 190;
    },
    189158: (e, t, i) => {
      "use strict";
      i.d(t, { WebPlayerAdapter: () => _ });
      var o = i(343860),
        s = i(695724),
        a = i(45634),
        l = i(315544),
        r = i(624715);
      class _ extends o.AudioStatsPlayerAdapter {
        getPausedBy(e) {
          var t = this.player,
            i = t.pausedByVideo,
            o = t.pausedByStories,
            s = t.pausedByAudio,
            a = t.pausedByQueue;
          return (i && e < i) || (window.Videoview && Videoview.isLayerShown())
            ? "video"
            : (o && e < o) || (window.cur && cur.storyLayer)
            ? "stories"
            : s && e < s
            ? "audio"
            : a && e < a
            ? "queue"
            : null;
        }
        getState() {
          var e = super.getState(),
            t = this.getAudioId();
          if (t) {
            var i = (0, l.geByClass)(
              "_audio_row_" + t + " audio_row__current",
              (0, l.ge)("page_layout")
            );
            if (i && i.length) return o.FULL_SCREEN_STATE;
          }
          return e;
        }
        getAudio() {
          return (0, r.audioTupleToAudioObject)(this.player.getCurrentAudio());
        }
        getProgress() {
          return this.player.getCurrentProgress();
        }
        getProgressInSeconds() {
          var e = this.player.getCurrentAudio();
          return e
            ? Math.round(
                this.player.getCurrentProgress() *
                  e[a.AudioUtils.AUDIO_ITEM_INDEX_DURATION]
              )
            : 0;
        }
        getVolume() {
          return Math.round(
            100 *
              ((e = this.player.getVolume()),
              Math.log(1 + 34 * e) / Math.log(35))
          );
          var e;
        }
        getAudioId() {
          var e = this.player.getCurrentAudio();
          if (e)
            return (
              e[a.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] +
              "_" +
              e[a.AudioUtils.AUDIO_ITEM_INDEX_ID]
            );
        }
        getAudioTrackCode() {
          var e = this.player.getCurrentAudio();
          if (e) return e[a.AudioUtils.AUDIO_ITEM_INDEX_TRACK_CODE];
        }
        getPrevAudioId() {
          var e = this.player._prevAudio;
          if (e)
            return (
              e[a.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] +
              "_" +
              e[a.AudioUtils.AUDIO_ITEM_INDEX_ID]
            );
        }
        getPrevPlaylistId() {
          var e = this.player._prevPlaylist;
          return e && !e.getIsFakeId() ? e.getFullId() : null;
        }
        getPlaylistId() {
          var e = this.player.getCurrentPlaylist();
          return e && !e.getIsFakeId() ? e.getFullId() : null;
        }
        getContext() {
          return this.player._getPlayingContext();
        }
        getSequence() {
          return this.player._seq;
        }
        getType() {
          if (this.player._impl) return this.player._impl.type;
        }
        getSearchParams() {
          var e = this.player.getCurrentPlaylist();
          if (e) return e.getSearchParams();
        }
        isShuffledPlaylist() {
          var e = this.player.getPlaylistQueue();
          if (e) return e.isShuffled();
        }
        isRealPlaylist() {
          var e = this.player.getCurrentPlaylist();
          return !!e && e.getType() === AudioPlaylist.TYPE_PLAYLIST;
        }
        isRealPrevPlaylist() {
          var e = this.player._prevPlaylist;
          return !!e && e.getType() === AudioPlaylist.TYPE_PLAYLIST;
        }
        isPodcast() {
          var e = this.player.getCurrentAudio();
          return a.AudioUtils.isPodcast(e);
        }
        isArticleTts() {
          var e = this.player.getCurrentAudio();
          return a.AudioUtils.isArticleTts(e);
        }
        isLastTrack() {
          var e = this.player.getCurrentAudio(),
            t = this.player.getCurrentPlaylist();
          return (
            !!e && (!(!e || t) || t.indexOfAudio(e) + 1 === t.getAudiosCount())
          );
        }
        hasPlaylist() {
          return Boolean(this.player.getCurrentPlaylist());
        }
        hasSearchParams() {
          return this.getContext() === AudioPlaylist.TYPE_SEARCH;
        }
        isDebug() {
          return Boolean(ls.get(AudioPlayer.LS_PREFIX + "stats_debug"));
        }
        sendListenedData(e) {
          var t = this.player.getListenedHash();
          !t &&
            window.cur &&
            cur.audioPage &&
            (t = cur.audioPage._data.listenedHash);
          var i = (0, s.extend)(
            {
              act: "listened_data",
              impl: this.getType(),
              hash: t,
              v: 5,
              loc: nav.strLoc,
            },
            e
          );
          ajax.post("al_audio.php", i, {
            onDone: (e) => {
              this.player.setAdsConfig && this.player.setAdsConfig(e);
            },
            onFail: () => !0,
          });
        }
        getPlaylistQueue() {
          this.player.getPlaylistQueue();
        }
      }
    },
    840887: (e, t, i) => {
      "use strict";
      i.d(t, { followCurator: () => d });
      var o = i(386409),
        s = i(45634),
        a = i(786067),
        l = i(124041),
        r = i(850167),
        _ = i(200134);
      function d(e, t, i) {
        (0, o.lockButton)(i),
          ajax.post(
            "al_curator.php",
            { act: "follow", curator_id: e, hash: t },
            {
              onFail: () => (0, o.unlockButton)(i),
              onDone: (t) => {
                (0, r.getAudioPlayer)().notify(_.events.CURATOR_FOLLOW),
                  (0, o.unlockButton)(i),
                  l.FlatButton.setLabel(
                    i,
                    (0, a.getLang)("audio_following_artist_button")
                  ),
                  i.classList.add("MusicAuthor__follow_btn__followed"),
                  (i.onclick = (o) => {
                    o.preventDefault(), s.AudioUtils.unfollowCurator(e, t, i);
                  });
              },
            }
          );
      }
    },
    190347: (e, t, i) => {
      "use strict";
      i.d(t, { unfollowCurator: () => d });
      var o = i(386409),
        s = i(45634),
        a = i(786067),
        l = i(124041),
        r = i(850167),
        _ = i(200134);
      function d(e, t, i) {
        (0, o.lockButton)(i),
          ajax.post(
            "al_curator.php",
            { act: "unfollow", curator_id: e, hash: t },
            {
              onFail: () => (0, o.unlockButton)(i),
              onDone: (t) => {
                (0, r.getAudioPlayer)().notify(_.events.CURATOR_UNFOLLOW),
                  (0, o.unlockButton)(i),
                  l.FlatButton.setLabel(
                    i,
                    (0, a.getLang)("audio_follow_artist_button")
                  ),
                  i.classList.remove("MusicAuthor__follow_btn__followed"),
                  (i.onclick = (o) => {
                    o.preventDefault(), s.AudioUtils.followCurator(e, t, i);
                  });
              },
            }
          );
      }
    },
    470353: (e, t, i) => {
      "use strict";
      i.d(t, { addToGroupBox: () => r });
      var o = i(315544),
        s = i(786067),
        a = i(654612),
        l = i(486125);
      function r(e, t, i) {
        var r = e + "_" + t,
          _ = (0, a.showBox)("al_audio.php", {
            act: "add_to_groups_box",
            playlist_id: r,
            access_hash: i,
          }).setButtons((0, s.getLang)("Save"), () => {
            var e = [];
            for (var t in cur.wdd.follow_playlist_wwd.selected)
              e.push(cur.wdd.follow_playlist_wwd.selected[t][0]);
            e.length &&
              (((0, o.ge)("add_playlist_to_group_fail").innerHTML = ""),
              ajax.post(
                "al_audio.php",
                {
                  act: "add_to_group",
                  group_ids: e,
                  hash: (0, o.ge)("add_playlist_to_group_hash").value,
                  playlist_id: r,
                },
                {
                  onDone(e) {
                    _.hide(), (0, l.showDoneBox)(e);
                  },
                  onFail: (e) => (
                    ((0, o.ge)("add_playlist_to_group_fail").innerHTML = e), !0
                  ),
                }
              ));
          });
      }
    },
    748409: (e, t, i) => {
      "use strict";
      i.d(t, { removeFromGroup: () => r });
      var o = i(315544),
        s = i(786067),
        a = i(654612),
        l = i(486125);
      function r(e, t, i) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          _ = e + "_" + t,
          d = (cur.audioPage && -cur.audioPage._ownerId) || cur.group_id;
        if (d > 0)
          var n = (0, a.showBox)("al_audio.php", {
            act: "delete_from_group_box",
            playlist_id: _,
            group_id: d,
          })
            .setButtons(
              (0, s.getLang)("global_yes"),
              () => {
                ajax.post(
                  "al_audio.php",
                  {
                    act: "delete_from_group",
                    group_id: d,
                    hash: i,
                    playlist_id: _,
                  },
                  {
                    onDone(e) {
                      if ((n.hide(), (0, l.showDoneBox)(e), r)) {
                        var t = (0, o.gpeByClass)("audio_pl_snippet2", r);
                        t &&
                          t.classList.remove("audio_pl__can_remove_from_club");
                      }
                    },
                    onFail: (e) => (n.hide(), (0, l.showDoneBox)(e), !0),
                  }
                );
              },
              (0, s.getLang)("global_cancel"),
              () => n.hide()
            )
            .show();
      }
    },
    459285: (e, t, i) => {
      "use strict";
      i.d(t, { addToPlaylistsBoxInit: () => c });
      i(991181), i(856997), i(296253), i(898837);
      var o = i(315544),
        s = i(49535),
        a = i(695724),
        l = i(486125),
        r = i(386409),
        _ = i(786067),
        d = i(609720),
        n = i(806439),
        u = i(219202);
      function c(e, t, i, h, p) {
        if ("undefined" == typeof AutoList)
          return window.stManager.add(window.jsc("web/auto_list.js"), () => {
            c(e, t, i, h, p);
          });
        var A = (0, l.curBox)(),
          g = (0, o.geByClass1)("_audio_atp_content", A.bodyNode),
          y = (0, o.geByClass1)("_audio_atp_list", A.bodyNode),
          f = (0, o.ge)("audio_atp_search"),
          P = (0, o.geByClass1)("_audio_atp_empty"),
          E = (0, o.getSize)(g)[1];
        (0, o.setStyle)(y, { height: E - (0, o.getSize)(f)[1] });
        var v,
          I = "";
        function m() {
          v && v.destroy(), (y.innerHTML = "");
          var e = [];
          (e = I ? h.filter((e) => e[2].toLowerCase().indexOf(I) >= 0) : h),
            (0, o.toggle)(y, 0 != e.length),
            (0, o.toggle)(P, 0 == e.length),
            (v = new AutoList(y, {
              onNeedRows: (t, i) => {
                for (
                  var o = [], s = i, a = Math.min(e.length, i + 30), l = s;
                  l < a;
                  l++
                ) {
                  var r = e[l];
                  if (r) {
                    var _ = r[4] ? "ape_selected" : "",
                      d = `<div class="ape_check">\n              <div class="ape_check--unchecked">${
                        (0, n.getIcon24CheckCircleOff)().icon
                      }</div>\n              <div class="ape_check--checked">${
                        (0, u.getIcon24CheckCircleOn)().icon
                      }</div>\n            </div>`,
                      c = `<div class="ape_pl_item _ape_pl_item ${_}" data-id="${r[1]}">${d}<div class="ape_pl_item_inner"><span class="ape_pl_title">${r[2]}</span> <span class="ape_pl_size">${r[3]}</span></div></div>`;
                    o.push(c);
                  }
                }
                t(o);
              },
            }));
        }
        m(),
          (cur.addToPlaylistSearch = (0, d.debounce)(function (e) {
            (I = (0, a.trim)(e).toLowerCase()), m();
          }, 200));
        var w = {},
          O = {};
        (0, s.addEvent)(y, "click", (e) => {
          var t = (0, o.domClosest)("_ape_pl_item", e.target),
            i = (0, o.domData)(t, "id");
          (0, o.toggleClass)(t, "ape_selected")
            ? ((O[i] = !0), delete w[i])
            : ((w[i] = !0), delete O[i]);
        }),
          A.removeButtons(),
          A.addButton(
            (0, _.getLang)("global_save"),
            (o) => {
              var s = Object.keys(O),
                a = Object.keys(w);
              ajax.post(
                "al_audio.php",
                {
                  act: "save_audio_in_playlists",
                  add_pl_ids: s.join(","),
                  remove_pl_ids: a.join(","),
                  owner_id: e,
                  audio_owner_id: t,
                  audio_id: i,
                  hash: p,
                },
                {
                  showProgress: () => (0, r.lockButton)(o),
                  hideProgress: () => (0, r.unlockButton)(o),
                  onDone: () => {
                    A.hide();
                  },
                  onFail: () => (A.hide(), !0),
                }
              );
            },
            "ok",
            !0
          ),
          A.addButton(
            (0, _.getLang)("global_cancel"),
            A.hide.bind(this),
            "no",
            !0
          );
      }
    },
    953054: (e, t, i) => {
      "use strict";
      i.d(t, { claimPlaylist: () => s });
      var o = i(486125);
      function s(e, t, i) {
        var s = nav.objLoc.claim;
        if (s) {
          var a = {
            act: i ? "a_unclaim_playlist" : "a_claim_playlist",
            claim: s,
            type: "audio",
            owner_id: e,
            playlist_id: t,
          };
          ajax.post("al_claims.php", a, {
            onDone: (e) => {
              (0, o.showDoneBox)(e);
            },
          });
        }
      }
    },
    734264: (e, t, i) => {
      "use strict";
      i.d(t, { copyPlaylistLink: () => _ });
      var o = i(601984),
        s = i(786067),
        a = i(479957),
        l = i(486125),
        r = i(812595);
      function _(e, t, i) {
        (0, a.statlogsValueEvent)("audio_copy_link", vk.id),
          (0, o.copyToClipboard)((0, r.getPlaylistUrl)(e, t, i, !0)),
          (0, l.showDoneBox)((0, s.getLang)("audio_playlist_link_copied"));
      }
    },
    548616: (e, t, i) => {
      "use strict";
      function o(e, t, i, o) {
        window.stManager.add(
          [
            window.jsc("web/audio.js"),
            "audio.css",
            window.jsc("web/auto_list.js"),
          ],
          function () {
            ajax.post(
              "al_audio.php?act=playlists_edit_data",
              { owner_id: e, playlist_id: t },
              {
                onDone: function (s) {
                  s.audio_playlist_cover_upload_options &&
                    ((cur.audioCoverUploadOptions =
                      cur.audioCoverUploadOptions || {}),
                    (cur.audioCoverUploadOptions[e] =
                      s.audio_playlist_cover_upload_options)),
                    s.editorial_playlists_params &&
                      (cur.editorialPlaylistsParams =
                        s.editorial_playlists_params),
                    AudioPage.editPlaylist(e, t, i, o);
                },
                onFail: () => !0,
              }
            );
          }
        );
      }
      i.d(t, { editPlaylist: () => o });
    },
    703780: (e, t, i) => {
      "use strict";
      i.d(t, { followPlaylist: () => c });
      i(898837), i(59357);
      var o = i(315544),
        s = i(850167),
        a = i(786067),
        l = i(40906),
        r = i(486125),
        _ = i(695724),
        d = i(654612),
        n = i(200134),
        u = [];
      function c(e, t, i, c) {
        var h = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          p =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        if (vk && vk.widget && !vk.id && window.Widgets)
          return Widgets.oauth(), !1;
        var A = (0, s.getAudioPlayer)().getPlaylist(
          AudioPlaylist.TYPE_PLAYLIST,
          t,
          i
        );
        function g(s) {
          var a = (0, o.domData)(e, "text-followed"),
            l = (0, o.domData)(e, "text-follow"),
            r = s ? a : l;
          (0, o.domData)(e, "tooltip-text", r),
            ((
              (0, o.geByClass1)("audio_pl_snippet__action_btn_add_text", e) || e
            ).innerHTML = r),
            A.setFollowed(s);
          var d = A.getAddClasses() || "";
          (d = d.replace("audio_pl__followed", "")),
            s && (d += " audio_pl__followed"),
            A.mergeWith({ addClasses: d }),
            (0, _.each)((0, o.geByClass)(`_audio_pl_${t}_${i}`), (t, i) => {
              (0, o.toggleClass)(i, "audio_pl__followed", s);
              var a = i.querySelectorAll(
                ".audio_pl_snippet__action_btn_add"
              )[0];
              a && (a.innerHTML = e.innerHTML);
            });
        }
        function y(e) {
          if (
            cur.audioPage &&
            cur.audioPage._data.playlists &&
            cur.audioPage.getOwnerId() === vk.id
          ) {
            if (e) {
              var o = null;
              (u = u.filter((e) => {
                var s = e.playlistId === i && e.playlistOwnerId === t;
                return s && (o = e.pl), !s;
              })),
                o && cur.audioPage._data.playlists.unshift(o);
            } else
              cur.audioPage._data.playlists =
                cur.audioPage._data.playlists.filter((e) => {
                  var o = e.id === i && e.owner_id === t;
                  return (
                    o && u.push({ playlistId: i, playlistOwnerId: t, pl: e }),
                    !o
                  );
                });
            cur.audioPage.updatePlaylistsCounter(vk.id);
          }
        }
        var f = (0, o.gpeByClass)("_audio_pl", e),
          P = (0, o.toggleClass)(f, "audio_pl__followed");
        g(P),
          y(P),
          ajax.post(
            "al_audio.php",
            {
              act: "follow_playlist",
              playlist_owner_id: t,
              playlist_id: i,
              hash: c,
              showcase: h,
              block_id: p,
            },
            {
              onDone(e) {
                (0, l.isObject)(e) &&
                  P &&
                  (0, s.getAudioPlayer)().notify(
                    n.events.MUSIC_PLAYLISTS_ADD,
                    e
                  );
              },
              onFail: (e) => (
                new d.MessageBox({ title: (0, a.getLang)("global_error") })
                  .content(e)
                  .setButtons((0, a.getLang)("audio_ok"), function () {
                    (0, r.curBox)().hide();
                  })
                  .show(),
                g(!1),
                y(!1),
                !0
              ),
            }
          );
      }
    },
    295224: (e, t, i) => {
      "use strict";
      i.d(t, { getContextPlaylist: () => d });
      i(530522),
        i(66108),
        i(296253),
        i(579665),
        i(95767),
        i(898837),
        i(59357),
        i(751876),
        i(850110);
      var o = i(315544),
        s = i(45634),
        a = i(850167),
        l = i(695724);
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == i) return;
            var o,
              s,
              a = [],
              l = !0,
              r = !1;
            try {
              for (
                i = i.call(e);
                !(l = (o = i.next()).done) &&
                (a.push(o.value), !t || a.length !== t);
                l = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                l || null == i.return || i.return();
              } finally {
                if (r) throw s;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return _(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return _(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o;
      }
      function d(e, t) {
        var i = (0, a.getAudioPlayer)(),
          _ = s.AudioUtils.getAudioFromEl(e, !0);
        if (_) {
          var d = null,
            n = [],
            u = (0, o.domData)(e, "new-post"),
            c = !1,
            h = null,
            p = AudioPlaylist.TYPE_TEMP,
            A = vk.id,
            g = null,
            y = {},
            f = window.AudioPage && currentAudioPage(e);
          if (
            ((0, o.traverseParent)(
              e,
              (e) => (c = (0, o.domData)(e, "audio-context"))
            ),
            (c =
              (c = _.context || c) ||
              ("audio" == cur.module ? cur.submodule : cur.module)),
            t)
          )
            return { context: c };
          var P = r(s.AudioUtils.contextSplit(c), 2),
            E = P[0],
            v = P[1],
            I = (0, o.gpeByClass)("_audio_pl", e),
            m = !1;
          if (I) {
            var w = (0, o.domData)(I, "playlist-id");
            (h = i.getPlaylistByBlockId(w)) ||
              (h = i.getPlaylist(...AudioPlaylist.splitId(w || "")));
            var O = (0, o.domData)(I, "title") || "";
            O && h.mergeWith({ title: (0, l.clean)(O) });
            var D = (0, o.domData)(I, "access-hash") || "";
            D && h.mergeWith({ accessHash: D });
          } else if (f && f.getPageCurrentPlaylist())
            h = f.getPageCurrentPlaylist();
          else if ("module" == E) {
            var b = v;
            (h = i.getPlaylist(
              AudioPlaylist.TYPE_PLAYLIST,
              b || cur.oid || vk.id,
              AudioPlaylist.DEFAULT_PLAYLIST_ID
            )),
              (n = [d]);
          } else if (0 === _.context.indexOf("admin"))
            (h = i.getPlaylist(
              AudioPlaylist.TYPE_PLAYLIST,
              _.ownerId,
              0,
              _.accessKey
            )).getAudiosCount() || h.setForceReload(!0);
          else if (0 === _.context.indexOf("im"))
            (d =
              (d = (0, o.gpeByClass)("_im_peer_history", e)) ||
              (0, o.gpeByClass)("_fc_tab_log_msgs", e)),
              (g = "im" + (cur.peer || ""));
          else if (0 === _.context.indexOf("board"))
            (m = !0),
              (g = _.context),
              (n = x((0, o.geByClass)("_wall_audio_rows", d)));
          else if (0 === _.context.indexOf("widget")) (m = !0), (g = _.context);
          else if (0 === _.context.indexOf("wiki")) (m = !0), (g = "wiki");
          else if (0 === _.context.indexOf("post")) {
            (p = AudioPlaylist.TYPE_WALL), (g = _.context), (m = !0);
            var C = _.context.replace("post", "").split("_");
            (A = C[0]), (y = { postId: C[1] });
          } else if (0 === _.context.indexOf("choose")) g = _.context;
          else if (
            "feed" == u ||
            0 === _.context.indexOf("feed") ||
            0 === _.context.indexOf("feedsearch")
          )
            (g = "feed"), (m = !0), (n = x((0, o.geByClass)("wall_text", d)));
          else if (
            "group_wall" == E ||
            "user_wall" == E ||
            0 === _.context.indexOf("reply") ||
            "wall" == u
          ) {
            (p = AudioPlaylist.TYPE_WALL), (A = cur.oid);
            var T = (v || "").split("_")[1],
              U = cur.wallQuery || "",
              L = (0, o.ge)("wall_search"),
              M = (0, l.inArray)(cur.wallType, ["own", "full_own"])
                ? "own"
                : "all";
            (g = hashCode(M + "_" + U)),
              (m = !0),
              "wall" == cur.module && (0, o.val)(L) && (U = (0, o.val)(L)),
              T && (y = { postId: T, wallQuery: U, wallType: M }),
              0 === _.context.indexOf("reply") &&
                ((n = x([(0, o.gpeByClass)("_replies_list", e)])),
                (g = "reply" + g),
                (m = !0));
            var S = (0, o.gpeByClass)("wide_column", e);
            if (S) {
              var R = (0, o.geByClass)("wall_text", S);
              n =
                Array.isArray(R) && R.length > 0
                  ? n.concat(R)
                  : n.concat(x([d]));
            } else n = n.concat(x([d]));
          } else "article" == E && (h = cur.articlePlaylist);
          return (
            d || (d = (0, o.domPN)(e)),
            ((n = n.filter(function (e) {
              return !!e;
            })) &&
              0 != n.length) ||
              (n = [d]),
            "function" ==
              typeof (h = h || i.getPlaylist(p, A, g)).setIsFakeId &&
              h.setIsFakeId(m),
            (h = h.getAudiosCount()
              ? h
              : s.AudioUtils.initDomPlaylist(h, n)).mergeWith(y || {}),
            -1 == h.indexOfAudio(_) &&
              (h = s.AudioUtils.initDomPlaylist(h, [(0, o.domPN)(e)])),
            { playlist: h, context: c }
          );
        }
        function x(e) {
          return [].slice.call(e);
        }
      }
    },
    920817: (e, t, i) => {
      "use strict";
      i.d(t, { hidePlaylistFromRecoms: () => l });
      var o = i(213294),
        s = i(786067),
        a = i(486125);
      function l(e, t, i) {
        ajax.post(
          "al_audio.php?act=hide_playlist_from_recoms",
          { owner_id: e, playlist_id: t, access_hash: i },
          {
            onDone() {
              (0, a.showDoneBox)(
                (0, s.getLang)("audio_playlist_recoms_was_hidden")
              );
              var o = document.getElementsByClassName(
                "ui_actions_menu_item playlist_recoms_hide_or_show"
              )[0];
              (o.innerHTML = (0, s.getLang)("audio_playlist_recoms_show")),
                o.setAttribute(
                  "onclick",
                  "AudioUtils.showPlaylistInRecoms(" +
                    e +
                    ", " +
                    t +
                    ", '" +
                    i +
                    "');"
                );
              for (
                var l = 0, r = ["audio_search", "audio_search_layer"];
                l < r.length;
                l++
              ) {
                var _ = r[l],
                  d = document.getElementById(_);
                if (d)
                  window
                    .currentAudioPage(d)
                    .catalogController.currentSection.reloadBlock(
                      "recommended_playlists"
                    );
              }
            },
            onFail(e) {
              (0, o.showErrorBox)(e || (0, s.getLang)("global_unknown_error"));
            },
          }
        );
      }
    },
    517097: (e, t, i) => {
      "use strict";
      i.d(t, { initDomPlaylist: () => a });
      var o = i(695724),
        s = i(78838);
      function a(e, t) {
        var i = [];
        return (
          (0, o.each)(t, function (e, t) {
            t &&
              [...t.querySelectorAll("._audio_row")].forEach((e) => {
                i.push((0, s.getAudioFromEl)(e));
              });
          }),
          e.pushAudio(i),
          e
        );
      }
    },
    271891: (e, t, i) => {
      "use strict";
      i.d(t, { initRowPlaylistsChooser: () => s });
      var o = i(45634);
      function s(e, t, i) {
        var s,
          a = o.AudioUtils.audioTupleToAudioObject(e);
        (s =
          cur.audioPage &&
          cur.audioPage.getOwnerId() < 0 &&
          cur.audioPage.canEditGroup()
            ? cur.audioPage.getOwnerId()
            : vk.id),
          (o.AudioUtils.playlistsByAudioDataCache =
            o.AudioUtils.playlistsByAudioDataCache || {});
        var l = o.AudioUtils.playlistsByAudioDataCache,
          r = s + "_" + a.ownerId + "_" + a.id;
        l[r]
          ? o.AudioUtils._showPlaylistsChooser(i, t, l[r], s, a, e)
          : ajax.post(
              "al_audio.php",
              {
                act: "playlists_by_audio",
                owner_id: s,
                audio_owner_id: a.ownerId,
                audio_id: a.id,
              },
              {
                onDone: (_, d, n) => {
                  var u = (l[r] = {
                    playlists: _,
                    morePlaylists: d,
                    newPlaylistHash: n,
                  });
                  o.AudioUtils._showPlaylistsChooser(i, t, u, s, a, e);
                },
                onFail: () => !0,
              }
            );
      }
    },
    270148: (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        loadAllPlaylistAudios: () => loadAllPlaylistAudios,
      });
      var _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(695724),
        _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(850167),
        AUDIO_LOAD_CHUNK_SIZE = 1e3,
        chunks,
        isDeleted,
        isAttach,
        onDone,
        playlist,
        preloadedCount,
        totalCount = void 0;
      function loadAllPlaylistAudios(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (e.getForceReload()) e.list = [];
        else if (!e.hasMore() || !e.isFullyLoadable())
          return onDone && onDone();
        e.setForceReload(!1),
          (chunks = []),
          (isAttach = "attach" === i),
          (onDone = t),
          (playlist = e),
          (preloadedCount = 0),
          (totalCount = e.getTotalCount()),
          loadChunk(0, () => {
            isDeleted
              ? onAllLoaded()
              : (isAttach && onAllLoaded(), loadAllChunks(onAllLoaded, 1));
          });
      }
      function onAllLoaded() {
        if (isDeleted) return onDone && onDone(null, isDeleted);
        var e = [];
        ((0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.each)(
          chunks,
          function (t, i) {
            i && (e = e.concat(i));
          }
        ),
        (0,
        _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_1__.getAudioPlayer)()
          .getPlaylists()
          .forEach((t) => {
            t.getId() === playlist.getId() && (t._list = e);
          }),
        (0,
        _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_1__.getAudioPlayer)().mergePlaylistData(
          playlist,
          { hasMore: !1 }
        ),
        onDone) &&
          onDone(playlist, !1, isAttach && totalCount > preloadedCount);
      }
      function loadAllChunks(e, t) {
        t = t || 0;
        var i = Math.max(
          0,
          Math.ceil((totalCount - preloadedCount) / AUDIO_LOAD_CHUNK_SIZE)
        );
        isAttach && t && totalCount > preloadedCount && i === t && i++,
          i - t <= 0
            ? e()
            : (function () {
                for (var o = new CallHub(e, i - t), s = t; s < i; s++)
                  loadChunk(s, () => {
                    o.done();
                  });
              })();
      }
      function loadChunk(chunkIndex, callback) {
        var isPreload = isAttach && !chunkIndex ? 1 : 0,
          offset = chunkIndex * AUDIO_LOAD_CHUNK_SIZE;
        preloadedCount &&
          (offset = Math.abs(
            AUDIO_LOAD_CHUNK_SIZE -
              preloadedCount -
              chunkIndex * AUDIO_LOAD_CHUNK_SIZE
          )),
          ajax.post(
            "al_audio.php?act=load_section",
            {
              type: playlist.getType(),
              owner_id: playlist.getOwnerId(),
              playlist_id: playlist.getPlaylistId(),
              access_hash: playlist.getAccessHash(),
              from_id: playlist.getFromId(),
              offset,
              is_loading_all: 1,
              is_preload: isPreload,
              context: playlist.getContext(),
              claim: (0,
              _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.intval)(
                nav.objLoc.claim
              ),
              ref: playlist.getRef(),
            },
            {
              onDone: function onDone(data, tpl, langs, templatesScript) {
                if (0 === chunkIndex) {
                  if (
                    ((0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.addTemplates)(
                      { audio_playlist_snippet: tpl }
                    ),
                    (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_0__.extend)(
                      cur.lang,
                      langs
                    ),
                    templatesScript && eval(templatesScript),
                    !data)
                  )
                    return (isDeleted = !0), callback();
                  (isDeleted = !1),
                    (totalCount = data.totalCount),
                    (preloadedCount = data.list.length),
                    (0,
                    _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_1__.getAudioPlayer)().mergePlaylistData(
                      playlist,
                      data
                    );
                }
                (chunks[chunkIndex] = data.list), callback();
              },
              onFail: () => !0,
            }
          );
      }
    },
    759448: (e, t, i) => {
      "use strict";
      i.d(t, { onAudioAddedToPlaylist: () => l });
      var o = i(315544),
        s = i(850167),
        a = i(695724);
      function l(e, t, i, l) {
        (0, s.getAudioPlayer)()
          .getPlaylist(AudioPlaylist.TYPE_PLAYLIST, e, t)
          .pushAudio(l, 0),
          (0, a.each)((0, o.geByClass)(`_audio_pl_${e}_${t}`), (e, t) => {
            (0, o.domReplaceEl)(t, (0, o.se)(i));
          });
      }
    },
    409082: (e, t, i) => {
      "use strict";
      function o(e, t) {
        var i = t.getAccessHash();
        cur.chooseMedia(
          "audio_playlist",
          t.getOwnerId() + "_" + t.getPlaylistId() + (i ? ":" + i : ""),
          {
            id: t.getPlaylistId(),
            ownerId: t.getOwnerId(),
            coverUrl: t.getCoverUrl(),
            gridCovers: t.getGridCovers(),
            title: t.getTitle(),
            authorName: t.getAuthorName(),
            authorHref: t.getAuthorHref(),
            accessHash: t.getAccessHash(),
          }
        );
      }
      i.d(t, { onPlaylistChoose: () => o });
    },
    563767: (e, t, i) => {
      "use strict";
      i.d(t, { showAudioPlaylist: () => p });
      i(751876);
      var o = i(315544),
        s = i(45634),
        a = i(726271),
        l = i(850167),
        r = i(786067),
        _ = i(486125),
        d = i(695724),
        n = i(49535),
        u = i(654612),
        c = i(897213),
        h = i(812595);
      function p(e, t, i, p, A, g) {
        if (cur.apLayer) return (0, n.cancelEvent)(A);
        if (vk.widget) return !0;
        if (!A || !((A.metaKey && a.browser.mac) || A.ctrlKey)) {
          var y = null;
          return (
            window.Photoview &&
              window.cur &&
              cur.pvShown &&
              ((y = (0, d.clone)(nav.objLoc)), Photoview.hide(!0)),
            (0, _.boxRefreshCoords)(boxLoader),
            (0, o.show)(boxLoader),
            (0, o.show)(boxLayerWrap),
            window.stManager.add(
              [window.jsc("web/auto_list.js"), "audio.css"],
              function () {
                var a,
                  A,
                  f = (0, l.getAudioPlayer)().getPlaylist(
                    AudioPlaylist.TYPE_PLAYLIST,
                    e,
                    t,
                    i
                  );
                function P(e) {
                  boxQueue.hideAll(),
                    cur.apLayerAutoList &&
                      (cur.apLayerAutoList.destroy(),
                      (cur.apLayerAutoList = null)),
                    layers.wraphide(window.audioPlaylistLayerWrap),
                    (layers.fullhide = !1),
                    a &&
                      (0, n.removeEvent)(
                        window.audioPlaylistLayerWrap,
                        "click",
                        a
                      ),
                    A && (0, n.removeEvent)(bodyNode, "keydown", A),
                    delete cur.apLayer,
                    delete cur.apLayerPlaylistId,
                    (0, o.removeClass)(layerBG, "ap_layer_bg_dark"),
                    y ? nav.change(y) : nav.change({ z: !1 }),
                    layerQueue.pop();
                }
                f.setContext(p),
                  f.setForceReload(!0),
                  f.setFromId(cur.oid),
                  f.loadAll(function (f, E) {
                    if (
                      ((0, o.hide)(boxLoader), (0, o.hide)(boxLayerWrap), E)
                    ) {
                      var v = (0, r.getLang)(
                        "audio_error_deleted_playlist_box"
                      ).split("/");
                      return (
                        new u.MessageBox({ title: v[0] })
                          .content(v[1])
                          .setButtons(
                            (0, r.getLang)("global_close"),
                            function () {
                              (0, _.curBox)().hide(), y && nav.change(y);
                            }
                          )
                          .show(),
                        void nav.setLoc((0, d.extend)(nav.objLoc, { z: !1 }))
                      );
                    }
                    var I = (0, d.extend)(nav.objLoc, {
                      z: "audio_playlist" + e + "_" + t + (i ? "/" + i : ""),
                    });
                    nav.setLoc(I),
                      window.audioPlaylistLayerWrap ||
                        ((window.audioPlaylistLayerWrap = (0, o.se)(
                          '<div class="ap_layer_wrap"></div>'
                        )),
                        bodyNode.appendChild(window.audioPlaylistLayerWrap));
                    window.audioPlaylistLayerWrap.innerHTML = "";
                    var m = f && f.getAudiosList ? f.getAudiosList().length : 0,
                      w = f.isBlocked && f.isBlocked(),
                      O = (0, h.getPlaylistUrl)(
                        f.getOwnerId(),
                        f.getPlaylistId(),
                        f.getAccessHash()
                      ),
                      D = (0, d.getTemplate)("audio_playlist_snippet", {
                        title: f.getTitle(),
                        subTitle: f.getSubtitle(),
                        description: f.getDescription(),
                        coverStyle: f.getCoverUrl()
                          ? "background-image:url('" +
                            f.getCoverUrl() +
                            "'); background-size: cover;"
                          : "",
                        authorLine: f.getAuthorLine(),
                        infoLine1: f.getInfoLine1(),
                        infoLine2: f.getInfoLine2(),
                        id: f.getPlaylistId(),
                        ownerId: f.getOwnerId(),
                        href: O,
                        addCls: f.getAddClasses(),
                        followHash: f.getFollowHash(),
                        accessHash: f.getAccessHash(),
                        editHash: f.getEditHash(),
                        deleteHash: f.getDeleteHash(),
                        replaceHash: f.getReplaceHash(),
                        gridCovers: f.getGridCovers(),
                        type: f.getType(),
                        context: p,
                        followButtonText: f.isFollowed()
                          ? (0, r.getLang)("audio_playlist_btn_added")
                          : (0, r.getLang)("audio_playlist_btn_add"),
                      });
                    if (
                      ((cur.apLayer = (0, o.se)(
                        `\n        <div class="ap_layer">\n          <div class="ap_layer__content">\n            ${D}\n          </div>\n          <div class="ap_layer__close _ap_layer__close"></div>\n        </div>\n      `
                      )),
                      w)
                    ) {
                      (0, o.geByClass1)(
                        "audio_pl_snippet__body",
                        cur.apLayer
                      ).innerHTML = (0, d.getTemplate)("playlist_snippet_stub");
                    }
                    window.audioPlaylistLayerWrap.appendChild(cur.apLayer),
                      (0, n.addEvent)(
                        window.audioPlaylistLayerWrap,
                        "click",
                        (a = function (e) {
                          (e.target != window.audioPlaylistLayerWrap &&
                            e.target !=
                              (0, o.geByClass1)(
                                "_ap_layer__close",
                                cur.apLayer
                              )) ||
                            (layers && layers.fullhide && layers.fullhide());
                        })
                      ),
                      (0, n.addEvent)(
                        bodyNode,
                        "keydown",
                        (A = function (e) {
                          if (27 == e.keyCode)
                            return (
                              layers && layers.fullhide && layers.fullhide(),
                              (0, n.cancelEvent)(e)
                            );
                        })
                      ),
                      layerQueue.push(),
                      layerQueue.hide(),
                      boxQueue.hideAll(),
                      layers.wrapshow(window.audioPlaylistLayerWrap, 0.7),
                      (0, o.addClass)(layerBG, "ap_layer_bg_dark");
                    var b = (0, o.geByClass1)(
                        "_audio_pl_snippet__list",
                        cur.apLayer
                      ),
                      C = s.AudioUtils.getAlbumParts(f),
                      T = 0;
                    m &&
                      !w &&
                      (cur.apLayerAutoList = new c.default(b, {
                        scrollNode: window.audioPlaylistLayerWrap,
                        onNeedRows: function (e, t) {
                          for (
                            var i = [], o = f.getAudiosList(), a = (t -= T);
                            a < t + 30;
                            a++
                          ) {
                            var l = o[a];
                            if (!l) break;
                            if (C && C.length && C[0].offset === a) {
                              var r = C.shift();
                              T++,
                                i.push(s.AudioUtils.drawAlbumPartRow(r.number));
                            }
                            i.push(s.AudioUtils.drawAudio(l));
                          }
                          e(i);
                        },
                      }));
                    (0, _.boxRefreshCoords)(cur.apLayer),
                      (0, l.getAudioPlayer)().updateCurrentPlaying(),
                      (layers.fullhide = P),
                      (cur.apLayerPlaylistId = [e, t]),
                      g && g();
                  });
              }
            ),
            !1
          );
        }
      }
    },
    254492: (e, t, i) => {
      "use strict";
      i.d(t, { showPlaylistInRecoms: () => l });
      var o = i(213294),
        s = i(786067),
        a = i(486125);
      function l(e, t, i) {
        ajax.post(
          "al_audio.php?act=show_playlist_in_recoms",
          { owner_id: e, playlist_id: t, access_hash: i },
          {
            onDone() {
              (0, a.showDoneBox)(
                (0, s.getLang)("audio_playlist_recoms_was_showed")
              );
              var o = document.getElementsByClassName(
                "ui_actions_menu_item playlist_recoms_hide_or_show"
              )[0];
              (o.innerHTML = (0, s.getLang)("audio_playlist_recoms_hide")),
                o.setAttribute(
                  "onclick",
                  "AudioUtils.hidePlaylistFromRecoms(" +
                    e +
                    ", " +
                    t +
                    ", '" +
                    i +
                    "');"
                );
              for (
                var l = 0, r = ["audio_search", "audio_search_layer"];
                l < r.length;
                l++
              ) {
                var _ = r[l],
                  d = document.getElementById(_);
                if (d)
                  window
                    .currentAudioPage(d)
                    .catalogController.currentSection.reloadBlock(
                      "recommended_playlists"
                    );
              }
            },
            onFail(e) {
              (0, o.showErrorBox)(e || (0, s.getLang)("global_unknown_error"));
            },
          }
        );
      }
    },
    403753: (e, t, i) => {
      "use strict";
      i.d(t, { showPlaylistsChooser: () => n });
      i(751876);
      var o = i(315544),
        s = i(45634),
        a = i(786067),
        l = i(654612),
        r = i(695724),
        _ = i(185850),
        d = i(986773);
      function n(e, t, i, n, u, c) {
        var h = i.playlists,
          p = i.newPlaylistHash,
          A = i.morePlaylists;
        (s.AudioUtils.copiedToPlaylistAudios =
          s.AudioUtils.copiedToPlaylistAudios || {}),
          (s.AudioUtils.copiedToPlaylistAudiosHashes =
            s.AudioUtils.copiedToPlaylistAudiosHashes || {});
        var g = t,
          y = (0, o.se)(
            (0, o.rs)(s.AudioUtils.AUDIO_ROW_ACTION_ROW_ITEM, [
              "pl_new",
              0,
              (0, a.getLang)("audio_add_to_new_pl"),
              "audio_row__action_playlist",
            ])
          );
        if (
          ((0, o.domInsertAfter)(y, g),
          (g = y),
          y.addEventListener("click", () => {
            s.AudioUtils.editPlaylist(n, !1, "edit", {
              addAudio: c,
              newPlaylistHash: p,
            });
          }),
          (0, r.each)(h, (e, t) => {
            var i = !0,
              a = t[0] + "_" + t[1] + "_" + u.fullId,
              l = s.AudioUtils.copiedToPlaylistAudios[a],
              n = "audio_row__action_playlist";
            (t[3] || l) && ((i = !1), (n += " audio_row__more_playlist_added"));
            var c = (0, o.se)(
              (0, o.rs)(s.AudioUtils.AUDIO_ROW_ACTION_ROW_ITEM, [
                "pl_" + t[0] + "_" + t[1],
                0,
                t[2],
                n,
              ])
            );
            (0, o.domInsertAfter)(c, g), (g = c);
            var h = !1;
            c.addEventListener("click", () => {
              if (!h) {
                h = !0;
                var e = u.ownerId,
                  l = u.id,
                  n = s.AudioUtils.copiedToPlaylistAudios[a];
                n && ((e = (n = n.split("_"))[0]), (l = n[1])),
                  i && (s.AudioUtils.copiedToPlaylistAudiosHashes[a] = t[4]),
                  ajax.post(
                    "al_audio.php",
                    {
                      act: "add_audio_to_playlist",
                      hash: t[4],
                      playlist_id: t[1],
                      playlist_owner_id: t[0],
                      audio_owner_id: e,
                      audio_id: l,
                      do_add: (0, r.intval)(i),
                    },
                    {
                      onDone: (e, o, l) => {
                        (0, d.onAdditionalEvent)(c, u, {
                          type: i ? _.TYPE_ADDED : _.TYPE_REMOVED,
                          playlistId: t[0] + "_" + t[1],
                        }),
                          (s.AudioUtils.copiedToPlaylistAudios[a] = !!i && l),
                          (t[4] = i
                            ? e
                            : s.AudioUtils.copiedToPlaylistAudiosHashes[a]),
                          (i = !i),
                          (h = !1);
                      },
                      onFail: () => !0,
                    }
                  ),
                  (0, o.toggleClass)(c, "audio_row__more_playlist_added", i);
              }
            });
          }),
          A)
        ) {
          var f = (0, o.se)(
            (0, o.rs)(s.AudioUtils.AUDIO_ROW_ACTION_ROW_ITEM, [
              "pl_more",
              0,
              (0, a.getLang)("audio_row_show_all_playlists"),
              "audio_row__action_playlist",
            ])
          );
          f.addEventListener("click", () => {
            (0, l.showBox)(
              "al_audio.php?act=more_playlists_add",
              { owner_id: n, audio_owner_id: u.ownerId, audio_id: u.id },
              { params: { bodyStyle: "padding: 0px", width: 560 } }
            );
          }),
            (0, o.domInsertAfter)(f, g),
            (g = f);
        }
        e.updatePosition();
      }
    },
    355145: (e, t, i) => {
      "use strict";
      i.d(t, { turnPlaylistDiscover: () => s });
      var o = i(486125);
      function s(e, t) {
        var i = { act: "turn_playlist_discover", owner_id: e, playlist_id: t };
        ajax.post("al_audio.php", i, {
          onDone: (e) => {
            (0, o.showDoneBox)(e);
          },
        });
      }
    },
    888614: (e, t, i) => {
      "use strict";
      i.d(t, { deleteEpisode: () => s });
      var o = i(12733);
      function s(e, t) {
        (0, o.isPodcast)(t) &&
          window.stManager.add([window.jsc("web/podcast.js")], function () {
            Podcast.deleteEpisode(t.fullId, t.deleteHash);
          });
      }
    },
    798783: (e, t, i) => {
      "use strict";
      i.d(t, { editEpisode: () => s });
      var o = i(12733);
      function s(e, t) {
        (0, o.isPodcast)(t) &&
          ((cur.podcastEditData = { audioId: t.fullId }),
          window.stManager.add([window.jsc("web/podcast.js")], function () {
            Podcast.edit(t.fullId);
          }));
      }
    },
    747447: (e, t, i) => {
      "use strict";
      i.d(t, { faveEpisode: () => l });
      var o = i(12733),
        s = i(717051),
        a = i(850167);
      function l(e, t) {
        if (e && (0, o.isPodcast)(t)) {
          var i = (0, s.getAudioExtra)(t).faveHash;
          (0, a.bookmarkPodcast)(
            e.querySelector(".audio_row__action_fave"),
            t.fullId,
            i
          );
        }
      }
    },
    557761: (e, t, i) => {
      "use strict";
      i.d(t, { isPrivatePodcast: () => a });
      var o = i(12733),
        s = i(717051);
      function a(e) {
        return !(!(0, o.isPodcast)(e) || !(0, s.getAudioExtra)(e).private);
      }
    },
    425209: (e, t, i) => {
      "use strict";
      i.d(t, { openEpisode: () => l });
      var o = i(850167),
        s = i(624715),
        a = i(12733);
      function l(e, t) {
        (t = (0, s.audioTupleToAudioObject)(t)),
          (0, a.isPodcast)(t) && (0, o.showPodcast)(e, t.fullId, null, "audio");
      }
    },
    568062: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          ACTION_PLAY: () => s,
          ACTION_PAUSE: () => a,
          ACTION_SEEK: () => l,
          ACTION_HEARTBEAT: () => r,
          ACTION_TIME_MARKER: () => _,
          log: () => d,
        });
      var o = i(12733),
        s = "play",
        a = "pause",
        l = "seek",
        r = "heartbeat",
        _ = "time_marker";
      function d(e, t) {
        var i = t.audio;
        (0, o.isPodcast)(i) &&
          window.stManager.add([window.jsc("web/podcast.js")], function () {
            Podcast.log(e, t);
          });
      }
    },
    750288: (e, t, i) => {
      "use strict";
      i.d(t, { restoreEpisode: () => s });
      var o = i(12733);
      function s(e, t) {
        (0, o.isPodcast)(t) &&
          window.stManager.add([window.jsc("web/podcast.js")], function () {
            Podcast.restoreEpisode(t.fullId, t.editHash);
          });
      }
    },
    739724: (e, t, i) => {
      "use strict";
      function o(e, t) {
        cur.audioPage && cur.audioPage.showRecoms(!1, t.fullId);
      }
      i.d(t, { showRecoms: () => o });
    },
    867696: (e, t, i) => {
      "use strict";
      i.d(t, { audioSearchPerformer: () => s });
      i(59357);
      var o = i(40906);
      function s(e, t, i) {
        var s = !!window.AudioPage && currentAudioPage(e),
          a = (window.AudioPage && currentAudioPage(e)) || cur.audioPage;
        layers.fullhide && layers.fullhide(!0),
          setTimeout(function () {
            s && a
              ? ((t = (0, o.unclean)(t).replace(/<em>|<\/em>/g, "")),
                nav.change({ q: t, performer: 1 }, i, {
                  searchPerformer: !0,
                  nav: !0,
                  isLayer: s.isLayer(),
                }))
              : nav.go(e, i);
          }, 50);
      }
    },
    986773: (e, t, i) => {
      "use strict";
      i.d(t, { onAdditionalEvent: () => _ });
      i(175115), i(850110);
      var o = i(185850),
        s = i(189158),
        a = i(850167),
        l = i(713359);
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var o in i)
                  Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      function _(e, t) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          _ = new o.AudioStats(new s.WebPlayerAdapter((0, a.getAudioPlayer)())),
          d = (t && t.context) || (e && (0, l.getContext)(e)) || "",
          n = t && t.album && t.album.slice(0, 2).join("_"),
          u = r({}, t, { context: d, playlistId: n }, i);
        _.sendCurrentAudioEvent({
          type: u.type,
          subtype: u.subtype || _.getPlaySubtype(),
          ownerId: u.ownerId,
          audioId: u.id,
          trackCode: u.trackCode,
          state: _.playerAdapter.getState(),
          ref:
            window.cur && vk.widget
              ? String(cur.widgetReferrer || "").substring(0, 20)
              : "",
          context: u.context,
          playlistId: u.playlistId,
        });
      }
    },
    207879: (e, t, i) => {
      "use strict";
      i.d(t, { addAudio: () => f });
      var o = i(315544),
        s = i(45634),
        a = i(850167),
        l = i(486125),
        r = i(695724),
        _ = i(200134),
        d = i(185850),
        n = i(986773),
        u = i(295224),
        c = i(40906),
        h = i(99392),
        p = i(786067),
        A = i(293680),
        g = i(49535),
        y = i(654612);
      function f(e, t, i) {
        if (cur.viewAsBox) return cur.viewAsBox();
        if (vk && vk.widget && !vk.id && window.Widgets)
          return Widgets.oauth(), !1;
        function f(t) {
          return (0, o.domData)(e, "in-progress", (0, r.intval)(t));
        }
        if (
          !(0, r.intval)((0, o.domData)(e, "in-progress")) &&
          (f(!0), (t = t || s.AudioUtils.getAudioFromEl(e, !0)))
        ) {
          var P = window.AudioPage && currentAudioPage(e),
            E =
              P &&
              P.getOwnerId() < 0 &&
              P.canAddToGroup() &&
              P.getOwnerId() !== t.ownerId
                ? -P.getOwnerId()
                : 0,
            v = s.AudioUtils.getAddRestoreInfo(),
            I = v[t.fullId];
          I && v[I.addedFullId] && (I = null);
          var m = (0, o.geByClass1)("_audio_row_" + t.fullId);
          m = m != e && m;
          var w = P && P.getPageCurrentPlaylist(),
            O = (0, u.getContextPlaylist)(e, !0),
            D = {
              group_id: E,
              audio_owner_id: t.ownerId,
              audio_id: t.id,
              hash: t.addHash,
              from: (O && O.context) || "",
              track_code: t.trackCode,
            };
          I
            ? "recom_hidden" == I.state
              ? (P && (P.restoreRecommendation(e), f(!1)),
                s.AudioUtils.onRowOver(e, !1, !0))
              : "deleted" == I.state
              ? (A.ajax.post(
                  "al_audio.php",
                  {
                    act: "restore_audio",
                    oid: t.ownerId,
                    aid: t.id,
                    hash: t.restoreHash,
                    track_code: t.trackCode,
                  },
                  {
                    onDone: function () {
                      (0, n.onAdditionalEvent)(e, t, { type: d.TYPE_ADDED }),
                        f(!1);
                    },
                    onFail: () => (f(!1), !0),
                  }
                ),
                (0, o.removeClass)(e, "audio_row__deleted"),
                delete v[t.fullId],
                s.AudioUtils.onRowOver(e, !1, !0))
              : "added" == I.state &&
                (A.ajax.post(
                  "al_audio.php",
                  {
                    act: "delete_audio",
                    oid: I.audio.ownerId,
                    aid: I.audio.id,
                    hash: I.audio.deleteHash,
                    track_code: t.trackCode,
                  },
                  {
                    onDone: function () {
                      (0, n.onAdditionalEvent)(e, t, { type: d.TYPE_REMOVED });
                      var i = (0, a.getAudioPlayer)();
                      i &&
                        (i
                          .getPlaylist(
                            AudioPlaylist.TYPE_PLAYLIST,
                            E ? -E : vk.id,
                            AudioPlaylist.DEFAULT_PLAYLIST_ID
                          )
                          .removeAudio(I.addedFullId),
                        i.notify(_.events.MUSIC_AUDIOS_DELETE, t)),
                        f(!1);
                    },
                    onFail: () => (f(!1), !0),
                  }
                ),
                (0, o.removeClass)(e, "audio_row__added"),
                m && (0, o.removeClass)(m, "audio_row__added"),
                delete v[t.fullId],
                (0, a.getAudioPlayer)().notify(
                  _.events.REMOVED,
                  t.fullId,
                  I.addedFullId
                ))
            : (A.ajax.post("al_audio.php?act=add", D, {
                onDone: function (l, r) {
                  if (
                    ((0, n.onAdditionalEvent)(e, t, { type: d.TYPE_ADDED }), l)
                  ) {
                    var u =
                      l[s.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] +
                      "_" +
                      l[s.AudioUtils.AUDIO_ITEM_INDEX_ID];
                    (v[t.fullId] = {
                      state: "added",
                      addedFullId: u,
                      audio: s.AudioUtils.audioTupleToAudioObject(l),
                    }),
                      (0, a.getAudioPlayer)().notify(
                        _.events.MUSIC_AUDIOS_ADD,
                        t
                      ),
                      (0, c.isFunction)(i) && i(),
                      (function (e, t) {
                        var i;
                        if (!t || !t.id) return;
                        var s =
                          null == e ||
                          null === (i = e.parentElement) ||
                          void 0 === i
                            ? void 0
                            : i.querySelector(".audio_page_player_share");
                        if (!s) return;
                        var a = (0, o.se)(
                            `\n    <div class="ta_l">\n      <div>${t.text}</div>\n    </div>\n `
                          ),
                          l = () => {
                            window.ajax.post("al_index.php", {
                              act: "help_hints_hide",
                              hash: t.hash,
                              hint_id: t.id,
                            });
                          };
                        (0, g.addEvent)(a, "click", l);
                        var r = new h.ElementTooltip(s, {
                          appendToParent: !0,
                          cls: "feature_intro_tt feature_intro_blue_tt feature_intro_blue_tt--heightSmall",
                          content: a,
                          offset: [0, 10],
                          align: h.ElementTooltip.ALIGN_RIGHT,
                          onHide: l,
                        });
                        r.show(),
                          s.addEventListener("mouseenter", () => {
                            r.hide();
                          });
                      })(e, r);
                  }
                  f(!1);
                },
                onFail: function (t) {
                  return (
                    t &&
                      new y.MessageBox({
                        title: (0, p.getLang)("global_error"),
                      })
                        .content(t)
                        .setButtons((0, p.getLang)("global_close"), () =>
                          (0, l.curBox)().hide()
                        )
                        .show(),
                    (0, o.removeClass)(e, "audio_row__added"),
                    f(!1),
                    !0
                  );
                },
              }),
              (0, o.addClass)(e, "audio_row__added"),
              m && (0, o.addClass)(m, "audio_row__added"),
              (0, a.getAudioPlayer)().notify(_.events.ADDED, t.fullId),
              P && w && P.onUserAction(t, w));
        }
      }
    },
    874229: (e, t, i) => {
      "use strict";
      i.d(t, { addAudioToOwner: () => s });
      var o = i(49535);
      function s(e, t) {
        return (
          (window.onAudioPageLoaded = function () {
            return this.uploadAudio({});
          }),
          nav.go("audios" + e),
          (0, o.cancelEvent)(t)
        );
      }
    },
    141593: (e, t, i) => {
      "use strict";
      i.d(t, { cancelReplacement: () => s });
      var o = i(315544);
      function s(e, t, i) {
        ajax.post(
          "al_audio.php",
          { act: "cancel_replacement", hash: t, audio_id: e },
          { onFail: () => !0 }
        ),
          (0, o.re)(i);
      }
    },
    59943: (e, t, i) => {
      "use strict";
      i.d(t, { chooseAudioBox: () => a });
      var o = i(315544),
        s = i(49535);
      function a(e, t, i) {
        if (void 0 !== e.selected)
          cur.lastAddMedia.unchooseMedia(e.selected),
            (e.selected = void 0),
            (0, o.removeClass)((0, o.domPN)(e), "audio_selected"),
            (e.innerHTML = t.labels.add);
        else {
          var a = (cur.attachCount && cur.attachCount()) || 0;
          cur.chooseMedia("audio", t.owner_id + "_" + t.id, t.info),
            (!cur.attachCount || cur.attachCount() > a) &&
              cur.lastAddMedia &&
              ((e.selected = cur.lastAddMedia.chosenMedias.length - 1),
              (0, o.addClass)((0, o.domPN)(e), "audio_selected"),
              (e.innerHTML = t.labels.cancel));
        }
        return (0, s.cancelEvent)(i);
      }
    },
    438022: (e, t, i) => {
      "use strict";
      i.d(t, { claim: () => l });
      var o = i(315544),
        s = i(505260),
        a = i(624715);
      function l(e, t, i) {
        (0, o.addClass)(t, "audio_moder_claimed"),
          (0, s.onRowOver)(t, !1, !0),
          (e = (0, a.audioTupleToAudioObject)(e)),
          window.ajax.post("al_claims.php", {
            act: "a_claim",
            claim: i,
            type: "audio",
            id: e.id,
            owner_id: e.ownerId,
          });
      }
    },
    569272: (e, t, i) => {
      "use strict";
      i.d(t, { deleteAudio: () => p });
      var o = i(315544),
        s = i(850167),
        a = i(695724),
        l = i(386409),
        r = i(654612),
        _ = i(786067),
        d = i(185850),
        n = i(986773),
        u = i(45634),
        c = i(295224),
        h = i(200134);
      function p(e, t, i, p, A) {
        function g(t) {
          return (0, o.domData)(e, "in-progress", (0, a.intval)(t));
        }
        if (
          (window.tooltips && tooltips.hideAll(),
          !(0, a.intval)((0, o.domData)(e, "in-progress")))
        ) {
          g(!0);
          var y = !1;
          t.isClaimed && (y = !0);
          var f = u.AudioUtils.getAddRestoreInfo(),
            P = f[t.fullId];
          if (P && P.deleteAll)
            (0, r.showFastBox)(
              {
                title: (0, _.getLang)("audio_delete_all_title"),
                dark: 1,
                onHide: () => g(!1),
              },
              P.deleteConfirmMsg || "",
              (0, _.getLang)("global_delete"),
              function (e) {
                var t = (0, a.extend)({ act: "delete_all" }, P.deleteAll);
                ajax.post("al_audio.php", t, {
                  showProgress: () => (0, l.lockButton)(e),
                  onDone: function () {
                    var e = (0, s.getAudioPlayer)().getPlaylist(
                      AudioPlaylist.TYPE_PLAYLIST,
                      P.deleteAll.from_id,
                      AudioPlaylist.DEFAULT_PLAYLIST_ID
                    );
                    (0, s.getAudioPlayer)().deletePlaylist(e), nav.reload();
                  },
                  onFail: () => !0,
                });
              },
              (0, _.getLang)("global_cancel")
            );
          else {
            if (
              (y ? (0, o.re)(e) : (0, o.addClass)(e, "audio_row__deleted"), A)
            ) {
              ajax.post(
                "al_audio.php",
                {
                  act: "remove_listened",
                  audio_id: t.id,
                  audio_owner_id: t.ownerId,
                  hash: t.actionHash,
                },
                { onFail: () => !0 }
              ),
                (0, o.re)(e);
              var E = (0, s.getAudioPlayer)().getCurrentPlaylist();
              E &&
                E.getType() == AudioPlaylist.TYPE_RECOM &&
                E.getAlbumId() == u.AudioUtils.AUDIO_RECOMS_TYPE_LISTENED &&
                E.removeAudio(t.fullId);
            } else if (p) {
              var v = u.AudioUtils.getAudioExtra(t).recom,
                I = null,
                m = (0, c.getContextPlaylist)(e);
              m && (I = m.playlist && m.playlist.getAlbumId());
              var w = {
                act: "hide_recommendation",
                hash: v.hash,
                audio_id: t.fullId,
                playlist_id: I,
              };
              nav.objLoc.audio_id && (w.recommendation_type = "query"),
                ajax.post("al_audio.php", w, {
                  onDone: () => {
                    (0, n.onAdditionalEvent)(e, t, {
                      type: d.TYPE_RECOMMENDATION_REMOVED,
                    }),
                      g(!1);
                  },
                  onFail: () => (g(!1), !0),
                }),
                (f[t.fullId] = { state: "recom_hidden" });
              var O = (0, s.getAudioPlayer)().getCurrentPlaylist();
              O &&
                O.getType() == AudioPlaylist.TYPE_RECOM &&
                (f[t.fullId].removedCurrentPos = O.removeAudio(t));
            } else
              ajax.post(
                "al_audio.php",
                {
                  act: "delete_audio",
                  oid: t.ownerId,
                  aid: t.id,
                  hash: t.deleteHash,
                  restore: 1,
                  track_code: t.trackCode,
                },
                {
                  onDone: (i, o) => {
                    (0, n.onAdditionalEvent)(e, t, { type: d.TYPE_REMOVED }),
                      y || g(!1),
                      (f[t.fullId] = {
                        state: "deleted",
                        deleteAll: i,
                        deleteConfirmMsg: o,
                      }),
                      y && u.AudioUtils.deleteDeletedAudios(),
                      (0, s.getAudioPlayer)().notify(
                        h.events.MUSIC_AUDIOS_DELETE,
                        t
                      ),
                      u.AudioUtils.onRowOver(e, !1, !0);
                  },
                  onFail: () => !0,
                }
              );
            u.AudioUtils.onRowOver(e, !1, !0);
          }
        }
      }
    },
    875751: (e, t, i) => {
      "use strict";
      i.d(t, { deleteCurrentAudio: () => a });
      var o = i(315544),
        s = i(850167);
      function a(e, t) {
        window.tooltips &&
          "function" == typeof window.tooltips.hideAll &&
          window.tooltips.hideAll(e);
        var i = (0, s.getAudioPlayer)().getPlaylistQueue();
        i && i.removeAudio(t.fullId), (0, o.re)(e);
      }
    },
    600732: (e, t, i) => {
      "use strict";
      i.d(t, { deleteDeletedAudios: () => l });
      var o = i(695724),
        s = i(850167),
        a = i(894391);
      function l() {
        (0, o.each)((0, a.getAddRestoreInfo)(), (e, t) => {
          ("deleted" !== t.state && "recom_hidden" !== t.state) ||
            (0, s.getAudioPlayer)().deleteAudioFromAllPlaylists(e);
        });
      }
    },
    580260: (e, t, i) => {
      "use strict";
      i.d(t, { deleteListenedAudio: () => s });
      var o = i(569272);
      function s(e, t) {
        (0, o.deleteAudio)(e, t, !1, !1, !0);
      }
    },
    926100: (e, t, i) => {
      "use strict";
      i.d(t, { deleteRecomsAudio: () => s });
      var o = i(569272);
      function s(e, t) {
        (0, o.deleteAudio)(e, t, !1, !0);
      }
    },
    81679: (e, t, i) => {
      "use strict";
      i.d(t, { getDurationMod: () => n, drawAudio: () => u });
      i(530522),
        i(66108),
        i(296253),
        i(850110),
        i(579665),
        i(95767),
        i(59357),
        i(751876);
      var o = i(624715),
        s = i(45634),
        a = i(355645),
        l = i(695724),
        r = i(289988);
      function _(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == i) return;
            var o,
              s,
              a = [],
              l = !0,
              r = !1;
            try {
              for (
                i = i.call(e);
                !(l = (o = i.next()).done) &&
                (a.push(o.value), !t || a.length !== t);
                l = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                l || null == i.return || i.return();
              } finally {
                if (r) throw s;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return d(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
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
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o;
      }
      function n(e) {
        return e < 600 ? "s" : e < 3600 ? "m" : e < 36e3 ? "l" : "n";
      }
      function u(e, t) {
        for (
          var i = JSON.parse((0, l.getTemplate)("audio_bits_to_cls")),
            d = e[s.AudioUtils.AUDIO_ITEM_INDEX_FLAGS],
            u = [],
            c = 0;
          c < 32;
          c++
        ) {
          var h = 1 << c;
          d & h && u.push(i[h]);
        }
        var p = (0, o.audioTupleToAudioObject)(e),
          A = s.AudioUtils.isPodcast(e);
        A &&
          (u.push("audio_podcast"),
          s.AudioUtils.isPrivatePodcast(e) && u.push("audio_podcast_private")),
          t && u.push(t);
        var g,
          y = _(e[s.AudioUtils.AUDIO_ITEM_INDEX_COVER_URL].split(","), 1)[0],
          f = void 0 === y ? "" : y,
          P = s.AudioUtils.getAudioPerformers(e),
          E = e[s.AudioUtils.AUDIO_ITEM_INDEX_DURATION],
          v = (0, r.formatTime)(E),
          I = (0, l.clean)(JSON.stringify(e));
        try {
          var m = (0, l.getTemplate)("podcast_row", e);
          g = A && m ? m : (0, l.getTemplate)("audio_row", e);
        } catch (e) {
          return "";
        }
        var w = "";
        return (
          p.hasTrackPage &&
            (u.push("audio_has_track_page"), (w = `/audio${p.trackPageId}`)),
          (g = (g = (g = (g = (g = (g = (g = (g = (g = g.replace(/%cls%/, () =>
            u.join(" ")
          )).replace(/%duration%/, () => v)).replace(
            /%serialized%/,
            () => I
          )).replace(/%cover_image%/, () => {
            return (
              (e = f),
              (t = p.title),
              e
                ? `<img class='audio_row__cover' alt='${t}' src='${e}' loading='lazy' decoding='async' width='40' height='40' />`
                : `<div class='audio_row__cover audio_row__without_cover'>${
                    (0, a.getIcon24Song)().icon
                  }</div>`
            );
            var e, t;
          })).replace(/%performers%/, () => P)).replace(
            /%track_url%/,
            () => w
          )).replace(/%duration_mod%/, () => n(E))).replace(
            /%chart_info_position%/,
            () => {
              return (t =
                e[s.AudioUtils.AUDIO_ITEM_CHART_INFO_INDEX] &&
                e[s.AudioUtils.AUDIO_ITEM_CHART_INFO_INDEX].position)
                ? `<div class="audio_row__position">${t}</div>`
                : "";
              var t;
            }
          )).replace(/%chart_info_state%/, () =>
            (function (e) {
              var t = "";
              switch (e) {
                case 0:
                  t = "audio_row__state-new_release";
                  break;
                case 1:
                  t = "audio_row__state-no_changes";
                  break;
                case 2:
                  t = "audio_row__state-moved_up";
                  break;
                case 3:
                  t = "audio_row__state-moved_down";
                  break;
                case 4:
                  t = "audio_row__state-crown";
                  break;
                default:
                  t = "";
              }
              return t ? `<div class="audio_row__state ${t}"></div>` : "";
            })(
              e[s.AudioUtils.AUDIO_ITEM_CHART_INFO_INDEX] &&
                e[s.AudioUtils.AUDIO_ITEM_CHART_INFO_INDEX].state
            )
          ))
        );
      }
    },
    263677: (e, t, i) => {
      "use strict";
      i.d(t, { editAudio: () => s });
      var o = i(654612);
      function s(e, t, i) {
        (0, o.showBox)(
          "al_audio.php",
          { act: "edit_audio_box", aid: t.fullId, force_edit_hash: i },
          {
            params: {
              width: "456px",
              bodyStyle: "padding: 20px;",
              hideButtons: 1,
            },
            dark: 1,
          }
        );
      }
    },
    873040: (e, t, i) => {
      "use strict";
      i.d(t, { getActionIcon: () => p });
      var o = i(908928),
        s = i(221324),
        a = i(685098),
        l = i(177801),
        r = i(14377),
        _ = i(385023),
        d = i(743707),
        n = i(784502),
        u = i(244030),
        c = i(165266),
        h = {
          current_delete: (0, n.getIcon20Cancel)(),
          recoms_delete: (0, n.getIcon20Cancel)(),
          listened_delete: (0, n.getIcon20Cancel)(),
          delete: (0, n.getIcon20Cancel)(),
          restore_recoms: (0, d.getIcon20Add)(),
          more: (0, c.getIcon20More)(),
          edit: (0, l.getIcon20WriteOutline)(),
          recoms: (0, a.getIcon20Stars)(),
        };
      function p(e) {
        var t = h[e],
          i = "";
        if (t) i = A(t);
        else
          switch (e) {
            case "add":
              i = A((0, u.getIcon20Check)()) + A((0, d.getIcon20Add)());
              break;
            case "next":
              i = `<div class="audio_row__icon--horizontal">${
                A((0, r.getIcon20ListPlayOutline)()) +
                A((0, _.getIcon20ListAddOutline)())
              }</div>`;
              break;
            case "fave":
              i =
                A((0, o.getIcon24FavoriteOutline)()) +
                A((0, s.getIcon24Favorite)());
          }
        return i;
      }
      function A(e) {
        return `<div class="audio_row__icon audio_row__icon_${e.name}">${e.icon}</div>`;
      }
    },
    894391: (e, t, i) => {
      "use strict";
      function o() {
        return (
          window.audioAddRestoreInfo || (window.audioAddRestoreInfo = {}),
          window.audioAddRestoreInfo
        );
      }
      i.d(t, { getAddRestoreInfo: () => o });
    },
    717051: (e, t, i) => {
      "use strict";
      i.d(t, { getAudioExtra: () => s });
      var o = i(624715);
      function s(e) {
        return "object" == typeof (e = (0, o.audioTupleToAudioObject)(e)).extra
          ? e.extra
          : JSON.parse(e.extra || "{}");
      }
    },
    78838: (e, t, i) => {
      "use strict";
      i.d(t, { getAudioFromEl: () => a });
      var o = i(315544),
        s = i(45634);
      function a(e, t) {
        e = (0, o.domClosest)("_audio_row", e);
        var i =
          (0, o.data)(e, "audio") || JSON.parse((0, o.domData)(e, "audio"));
        if (!i) return null;
        if (t) {
          ((i = s.AudioUtils.audioTupleToAudioObject(i)).isDeleted = (0,
          o.hasClass)(e, "audio_row__deleted")),
            (i.isCurrent = (0, o.hasClass)(e, s.AudioUtils.AUDIO_CURRENT_CLS)),
            (i.isPlaying = (0, o.hasClass)(e, s.AudioUtils.AUDIO_PLAYING_CLS)),
            (i.isFromCurrentPlaylist = !!(0, o.gpeByClass)(
              "_audio_section__current",
              e
            )),
            (i.isNumeric = !!(0, o.gpeByClass)("audio_numeric", e)),
            (i.isWithCovers = !!(0, o.gpeByClass)("audio_w_covers", e)),
            (i.withInlinePlayer =
              !i.isWithCovers &&
              !(0, o.gpeByClass)("audio_no_inline_player", e)),
            (i.isInSnippet = !!(0, o.gpeByClass)("_audio_pl_snippet__list", e)),
            (i.isInEditBox = !!(0, o.gpeByClass)("_audio_pl_edit_box", e)),
            (i.isInRecomsBlock = !!(0, o.gpeByClass)(
              "_audio_recoms_blocks",
              e
            )),
            (i.isInFastChat = !!(0, o.gpeByClass)("fc_tab", e)),
            (i.isInAttach = !!(0, o.gpeByClass)("media_preview", e)),
            (i.isSetClaimed = (0, o.hasClass)(e, "audio_moder_claimed")),
            (i.isPodcastListSnippet = (0, o.hasClass)(
              e,
              "podcast_list_snippet"
            ));
          var a = (0, o.gpeByClass)("_audio_pl", e);
          i.isCurrentAlbumSnippet =
            !!i.album &&
            !!a &&
            a.dataset.playlistId === `playlist_${i.album[0]}_${i.album[1]}`;
        }
        return i;
      }
    },
    729956: (e, t, i) => {
      "use strict";
      i.d(t, { getAudioFullId: () => s });
      var o = i(820587);
      function s(e) {
        return (
          e[o.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_OWNER_ID] +
          "_" +
          e[o.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_ID]
        );
      }
    },
    979663: (e, t, i) => {
      "use strict";
      i.d(t, { onAudioChoose: () => r });
      var o = i(695724),
        s = i(786067),
        a = i(315544),
        l = i(49535);
      function r(e, t, i, r) {
        if ((0, o.isUndefined)(t.selected)) {
          var _ = (cur.attachCount && cur.attachCount()) || 0,
            d = i.fullId + (i.accessKey ? "_" + i.accessKey : "");
          if (
            (cur.chooseMedia("audio", d, r),
            (!cur.attachCount || cur.attachCount() > _) && cur.lastAddMedia)
          ) {
            (t.selected = cur.lastAddMedia.chosenMedias.length - 1),
              (0, a.addClass)((0, a.domPN)(t), "audio_selected");
            var n = (0, a.getSize)(t)[0];
            (0, a.setStyle)(t, "width", n),
              (t.innerHTML = (0, s.getLang)("global_cancel"));
          }
        } else
          cur.lastAddMedia.unchooseMedia(t.selected),
            (t.selected = void 0),
            (0, a.removeClass)((0, a.domPN)(t), "audio_selected"),
            (t.innerHTML = (0, s.getLang)("global_add_media"));
        return (0, l.cancelEvent)(e);
      }
    },
    934495: (e, t, i) => {
      "use strict";
      i.d(t, { onRowLeave: () => s });
      var o = i(315544);
      function s(e) {
        (0, o.data)(e, "leaved", !0);
        var t = (0, o.data)(e, "tt");
        if (
          (!t || !t.isShown()) &&
          (clearTimeout(window.audioRowHoverTO), (0, o.data)(e, "actions"))
        ) {
          var i = (0, o.geByClass1)("_audio_row__actions", e),
            s = (0, o.geByClass1)("_audio_row__duration", e);
          (0, o.re)(i),
            (0, o.setStyle)(s, "visibility", "visible"),
            (0, o.data)(e, "actions", 0);
        }
      }
    },
    505260: (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        onRowOver: () => onRowOver,
      });
      var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(530522),
        core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(66108),
        core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(296253),
        core_js_modules_es6_array_slice__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(850110),
        core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(579665),
        core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(95767),
        core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(898837),
        _lib_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(315544),
        _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(45634),
        _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(850167),
        _web_lib_lang__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(786067),
        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(49535),
        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(695724),
        _web_audio_player_track_getActionIcon__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(873040);
      function _slicedToArray(e, t) {
        return (
          _arrayWithHoles(e) ||
          _iterableToArrayLimit(e, t) ||
          _unsupportedIterableToArray(e, t) ||
          _nonIterableRest()
        );
      }
      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function _unsupportedIterableToArray(e, t) {
        if (e) {
          if ("string" == typeof e) return _arrayLikeToArray(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i
              ? Array.from(e)
              : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? _arrayLikeToArray(e, t)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o;
      }
      function _iterableToArrayLimit(e, t) {
        var i =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != i) {
          var o,
            s,
            a = [],
            l = !0,
            r = !1;
          try {
            for (
              i = i.call(e);
              !(l = (o = i.next()).done) &&
              (a.push(o.value), !t || a.length !== t);
              l = !0
            );
          } catch (e) {
            (r = !0), (s = e);
          } finally {
            try {
              l || null == i.return || i.return();
            } finally {
              if (r) throw s;
            }
          }
          return a;
        }
      }
      function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e;
      }
      function onRowOver(audioEl, event, forceRedraw) {
        (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.hasClass)(
          audioEl,
          "podcast_list_snippet"
        ) ||
          (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.hasClass)(
            audioEl,
            "podcast_snippet__controls"
          ) ||
          ((0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.data)(
            audioEl,
            "leaved",
            !1
          ),
          ((0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.data)(
            audioEl,
            "actions"
          ) &&
            !forceRedraw) ||
            (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.hasClass)(
              audioEl,
              "no_extra"
            ) ||
            (clearTimeout(window.audioRowHoverTO),
            (window.audioRowHoverTO = setTimeout(
              () => {
                window.tooltips &&
                  "function" == typeof window.tooltips.hideAll &&
                  window.tooltips.hideAll(audioEl);
                var audio =
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.getAudioFromEl(
                      audioEl
                    ),
                  audioObject =
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.getAudioFromEl(
                      audioEl,
                      !0
                    ),
                  actions = [],
                  moreActions = [],
                  context =
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.getContextPlaylist(
                      audioEl,
                      !0
                    ),
                  _AudioUtils$contextSp =
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.contextSplit(
                      context
                    ),
                  _AudioUtils$contextSp2 = _slicedToArray(
                    _AudioUtils$contextSp,
                    2
                  ),
                  sectionContext = _AudioUtils$contextSp2[0],
                  blockContext = _AudioUtils$contextSp2[1],
                  extra =
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.getAudioExtra(
                      audioObject
                    );
                if (((context = sectionContext), audioObject.isDeleted))
                  if (
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isPodcast(
                      audioObject
                    )
                  )
                    actions.push([
                      "add",
                      _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                        .AudioUtils.restoreEpisode,
                      "",
                      'onmouseover="audioShowActionTooltip(this)"',
                    ]);
                  else if ("recoms_recoms" === context)
                    actions.push([
                      "restore_recoms",
                      _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                        .AudioUtils.addAudio,
                      "",
                      'onmouseover="audioShowActionTooltip(this)"',
                    ]);
                  else {
                    var deleteRestoreInfo =
                      _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.getAddRestoreInfo();
                    deleteRestoreInfo[audioObject.fullId] &&
                      deleteRestoreInfo[audioObject.fullId].deleteAll &&
                      actions.push([
                        "delete",
                        _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                          .AudioUtils.deleteAudio,
                        "",
                        'onmouseover="audioShowActionTooltip(this)"',
                      ]),
                      actions.push([
                        "add",
                        _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                          .AudioUtils.addAudio,
                        "",
                        'onmouseover="audioShowActionTooltip(this)"',
                      ]);
                  }
                else {
                  var actionsList = [
                    "next",
                    "add",
                    "share",
                    "open_album",
                    "add_to_playlist",
                  ];
                  if (
                    (extra.claim && nav.objLoc.claim) ||
                    audioObject.isReplaceable
                  )
                    actionsList = [];
                  else if (
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isPodcast(
                      audioObject
                    )
                  )
                    actionsList = (0,
                    _lib_dom__WEBPACK_IMPORTED_MODULE_7__.hasClass)(
                      audioEl,
                      "audio_podcast_no_actions"
                    )
                      ? []
                      : ["fave", "edit", "delete", "open_episode", "share"];
                  else if (
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isArticleTts(
                      audioObject
                    )
                  )
                    actionsList = [];
                  else if (audioObject.isFromCurrentPlaylist)
                    actionsList = [
                      "recoms",
                      "add",
                      !audioObject.isCurrent && "current_delete",
                      "share",
                      "open_album",
                      "add_to_playlist",
                    ];
                  else if (audioObject.isInSnippet)
                    actionsList = [
                      "recoms",
                      "next",
                      "edit",
                      "add",
                      "share",
                      "open_album",
                      "add_to_playlist",
                    ];
                  else if (audioObject.isInEditBox) actionsList = [];
                  else if (audioObject.isInFastChat) actionsList = ["add"];
                  else if (vk.widget) actionsList = ["add"];
                  else if (context)
                    if ("my_audios_block" === blockContext)
                      actionsList = [
                        "recoms",
                        "edit",
                        "next",
                        "add",
                        "delete",
                        "share",
                        "open_album",
                        "add_to_playlist",
                      ];
                    else
                      switch (context) {
                        case "album_page":
                          actionsList = [
                            "recoms",
                            "next",
                            "edit",
                            "add",
                            "share",
                            "open_album",
                            "add_to_playlist",
                          ];
                          break;
                        case "my":
                        case "my_audios_short":
                        case "module":
                        case "user_list":
                        case "group_list":
                          actionsList = [
                            "recoms",
                            "edit",
                            "next",
                            "add",
                            "delete",
                            "share",
                            "open_album",
                            "add_to_playlist",
                          ];
                          break;
                        case "edit_playlist":
                          actionsList = ["add", "next", "edit"];
                          break;
                        case "recoms_recoms":
                          actionsList = [
                            "recoms",
                            "next",
                            "add",
                            "recoms_delete",
                            "share",
                            "open_album",
                            "add_to_playlist",
                          ];
                          break;
                        case "recoms_recent_audios":
                          actionsList = [
                            "recoms",
                            "edit",
                            "next",
                            "add",
                            "listened_delete",
                            "share",
                            "open_album",
                            "add_to_playlist",
                          ];
                          break;
                        case "attach":
                        case "attach_preview":
                        case "podcast":
                          actionsList = [];
                          break;
                        case "search_results":
                          "search_owned_audios" === blockContext &&
                            (actionsList = [
                              "recoms",
                              "edit",
                              "next",
                              "add",
                              "delete",
                              "share",
                              "open_album",
                              "add_to_playlist",
                            ]);
                          break;
                        case "recommendations":
                          "recoms_recoms_detail" === blockContext &&
                            (actionsList = [
                              "recoms",
                              "next",
                              "add",
                              "recoms_delete",
                              "share",
                              "open_album",
                              "add_to_playlist",
                            ]);
                          break;
                        case "apps_edit":
                          actionsList = ["apps_edit_delete"];
                          break;
                        default:
                          audioObject.isCurrent &&
                            audioObject.withInlinePlayer &&
                            (actionsList = [
                              "recoms",
                              "add",
                              "share",
                              "open_album",
                              "add_to_playlist",
                            ]);
                      }
                  ("moderation_video" === context ||
                    window.AdminVideoCatalogue) &&
                    (actionsList = ["link_to_clip"]),
                    actionsList.push("uma"),
                    audioObject.isReplaceable && actionsList.push("replace"),
                    extra.moder_actions &&
                      (0,
                      _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_12__.each)(
                        extra.moder_actions,
                        (i, act) => {
                          moreActions.push([
                            "moder_" + i,
                            (audioEl, audio) => {
                              eval(act[1]);
                            },
                            act[2],
                          ]);
                        }
                      ),
                    audioObject.isCurrentAlbumSnippet &&
                      (actionsList = actionsList.filter(
                        (e) => "open_album" !== e
                      )),
                    vk.id ||
                      (actionsList = actionsList.filter(
                        (e) => "open_album" === e
                      ));
                  var ap = (0,
                    _web_lib_feature_entries__WEBPACK_IMPORTED_MODULE_9__.getAudioPlayer)(),
                    currentAudioPage =
                      window.currentAudioPage &&
                      window.currentAudioPage(audioEl),
                    isInLayer = currentAudioPage && currentAudioPage.isLayer(),
                    shouldShowEdit =
                      !isInLayer &&
                      audioObject.canEdit &&
                      !vk.widget &&
                      (_web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isPodcast(
                        audioObject
                      ) ||
                        (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_12__.inArray)(
                          context,
                          [
                            "my",
                            "my_audios_short",
                            "group_list",
                            "search_results",
                            "my_playlists",
                          ]
                        ));
                  (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_12__.each)(
                    actionsList,
                    (e, t) => {
                      switch (t) {
                        case "next":
                          audioObject.isCurrent ||
                            audioObject.isClaimed ||
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isPodcast(
                              audioObject
                            ) ||
                            actions.push([
                              "next",
                              ap.setNext.bind(ap),
                              "",
                              'onmouseover="audioShowActionTooltip(this)"',
                            ]);
                          break;
                        case "restore_recoms":
                          actions.push([
                            "restore_recoms",
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                              .AudioUtils.addAudio,
                            "",
                            'onmouseover="audioShowActionTooltip(this)"',
                          ]);
                          break;
                        case "add":
                          var i = vk.id;
                          cur.audioPage &&
                            cur.audioPage.canAddToGroup() &&
                            cur.audioPage.getOwnerId() !==
                              audioObject.ownerId &&
                            (i = cur.audioPage.getOwnerId()),
                            !audioObject.isClaimed &&
                              audioObject.canAdd &&
                              audioObject.ownerId != i &&
                              actions.push([
                                "add",
                                _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                  .AudioUtils.addAudio,
                                "",
                                'onmouseover="audioShowActionTooltip(this)"',
                              ]);
                          break;
                        case "recoms":
                          !audioObject.isClaimed &&
                            cur.audioPage &&
                            actions.push([
                              "recoms",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                .AudioUtils.showRecoms,
                              "",
                              'onmouseover="audioShowActionTooltip(this)"',
                            ]);
                          break;
                        case "uma":
                          audioObject.isUMA &&
                            actions.push([
                              "uma",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                .AudioUtils.getUMAInfo,
                              "UMA",
                            ]);
                          break;
                        case "replace":
                          audioObject.isReplaceable &&
                            actions.push([
                              "replace",
                              () => {
                                showAudioClaimWarning(
                                  audioObject,
                                  extra.claim,
                                  _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.replaceWithOriginal.bind(
                                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils,
                                    audioEl,
                                    audioObject
                                  )
                                );
                              },
                              (0,
                              _web_lib_lang__WEBPACK_IMPORTED_MODULE_10__.getLang)(
                                "global_audio_replace"
                              ),
                            ]);
                          break;
                        case "edit":
                          shouldShowEdit &&
                            actions.push([
                              "edit",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isPodcast(
                                audioObject
                              )
                                ? _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                    .AudioUtils.editEpisode
                                : _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                    .AudioUtils.editAudio,
                              "",
                              'onmouseover="audioShowActionTooltip(this)"',
                            ]);
                          break;
                        case "delete":
                          !audioObject.canDelete ||
                            audioObject.isInRecomsBlock ||
                            vk.widget ||
                            actions.push([
                              "delete",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isPodcast(
                                audioObject
                              )
                                ? _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                    .AudioUtils.deleteEpisode
                                : _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                    .AudioUtils.deleteAudio,
                              "",
                              'onmouseover="audioShowActionTooltip(this)"',
                            ]);
                          break;
                        case "current_delete":
                          actions.push([
                            "current_delete",
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                              .AudioUtils.deleteCurrentAudio,
                            "",
                            'onmouseover="audioShowActionTooltip(this)"',
                          ]);
                          break;
                        case "recoms_delete":
                          actions.push([
                            "recoms_delete",
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                              .AudioUtils.deleteRecomsAudio,
                            "",
                            'onmouseover="audioShowActionTooltip(this)"',
                          ]);
                          break;
                        case "listened_delete":
                          audioObject.isInRecomsBlock ||
                            actions.push([
                              "listened_delete",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                .AudioUtils.deleteListenedAudio,
                              "",
                              'onmouseover="audioShowActionTooltip(this)"',
                            ]);
                          break;
                        case "apps_edit_delete":
                          actions.push([
                            "delete",
                            window.AppsEdit.removeAudio,
                            "",
                            'onmouseover="AppsEdit.showRemoveAudioTooltip(this)"',
                          ]);
                          break;
                        case "fave":
                          _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isPodcast(
                            audioObject
                          ) &&
                            actions.push([
                              "fave",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                .AudioUtils.faveEpisode,
                              "",
                              'onmouseover="audioShowActionTooltip(this)"',
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.getAudioExtra(
                                audioObject
                              ).fave
                                ? " activated"
                                : "",
                            ]);
                          break;
                        case "share":
                          audioObject.isClaimed ||
                            moreActions.push([
                              "share",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                .AudioUtils.shareAudio,
                              (0,
                              _web_lib_lang__WEBPACK_IMPORTED_MODULE_10__.getLang)(
                                "audio_share_audio"
                              ),
                            ]);
                          break;
                        case "add_to_playlist":
                          audioObject.isClaimed ||
                            cur.viewAsBox ||
                            moreActions.push([
                              "add_to_playlist",
                              "",
                              (0,
                              _web_lib_lang__WEBPACK_IMPORTED_MODULE_10__.getLang)(
                                "audio_add_to_playlist"
                              ),
                            ]);
                          break;
                        case "open_album":
                          !audioObject.isClaimed &&
                            audioObject.album &&
                            moreActions.push([
                              "open_album",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                .AudioUtils.showAudioAlbum,
                              (0,
                              _web_lib_lang__WEBPACK_IMPORTED_MODULE_10__.getLang)(
                                "audio_open_album"
                              ),
                            ]);
                          break;
                        case "open_episode":
                          _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.isPodcast(
                            audioObject
                          ) &&
                            moreActions.push([
                              "open_episode",
                              _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                                .AudioUtils.openEpisode,
                              (0,
                              _web_lib_lang__WEBPACK_IMPORTED_MODULE_10__.getLang)(
                                "audio_podcast_open_episode"
                              ),
                            ]);
                      }
                    }
                  ),
                    extra.claim &&
                      nav.objLoc.claim &&
                      (audioObject.isSetClaimed
                        ? actions.push([
                            "claim_btn",
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.unclaim.bind(
                              this,
                              audio,
                              audioEl,
                              extra.claim
                            ),
                            "Unclaim",
                          ])
                        : actions.push([
                            "claim_btn",
                            _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.claim.bind(
                              this,
                              audio,
                              audioEl,
                              extra.claim
                            ),
                            "Claim",
                          ]));
                }
                if (
                  (moreActions.length && actions.push(["more"]), actions.length)
                ) {
                  var actionsEl = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.se)(
                    '<div class="_audio_row__actions audio_row__actions"></div>'
                  );
                  (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_12__.each)(
                    actions,
                    (e, t) => {
                      var i =
                          _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.getRowActionName(
                            t[0],
                            audioObject,
                            audioEl
                          ),
                        o = (0,
                        _web_audio_player_track_getActionIcon__WEBPACK_IMPORTED_MODULE_13__.getActionIcon)(
                          t[0]
                        ),
                        s = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.se)(
                          `<button\naria-label="${i}"\ndata-action="${
                            t[0]
                          }"\nclass="audio_row__action audio_row__action_${
                            t[0]
                          } _audio_row__action_${t[0]}${
                            t[4] ? " " + t[4] : ""
                          }" ${t[3] || ""}>\n${t[2] || o}\n</button>`
                        );
                      t[1] &&
                        s.addEventListener(
                          "click",
                          (e) => (
                            t[1] && t[1].call(window, audioEl, audioObject),
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__.cancelEvent)(
                              e
                            )
                          )
                        ),
                        actionsEl.appendChild(s);
                    }
                  );
                  var rectoreInfo =
                      _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.getAddRestoreInfo(),
                    audioRestorationInfo = rectoreInfo[audioObject.fullId];
                  audioRestorationInfo &&
                    rectoreInfo[audioRestorationInfo.addedFullId] &&
                    (audioRestorationInfo = null),
                    audioRestorationInfo &&
                      "added" === audioRestorationInfo.state &&
                      (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.addClass)(
                        audioEl,
                        "audio_row__added"
                      );
                  var rowInfoEl = (0,
                    _lib_dom__WEBPACK_IMPORTED_MODULE_7__.geByClass1)(
                      "_audio_row__info",
                      audioEl
                    ),
                    rowDurationEl = (0,
                    _lib_dom__WEBPACK_IMPORTED_MODULE_7__.geByClass1)(
                      "_audio_row__duration",
                      audioEl
                    ),
                    rowAlreadyActionsEl = (0,
                    _lib_dom__WEBPACK_IMPORTED_MODULE_7__.geByClass1)(
                      "_audio_row__actions",
                      audioEl
                    );
                  if (!rowInfoEl) return;
                  (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.re)(
                    rowAlreadyActionsEl
                  ),
                    (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.setStyle)(
                      rowDurationEl,
                      "visibility",
                      "hidden"
                    ),
                    rowInfoEl.appendChild(actionsEl);
                  var moreActionsBtnEl = (0,
                  _lib_dom__WEBPACK_IMPORTED_MODULE_7__.geByClass1)(
                    "_audio_row__action_more",
                    actionsEl
                  );
                  moreActions.length &&
                    moreActionsBtnEl &&
                    setMoreAction(
                      audioEl,
                      audio,
                      audioObject,
                      moreActions,
                      moreActionsBtnEl
                    ),
                    (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.data)(
                      audioEl,
                      "actions",
                      1
                    );
                }
              },
              forceRedraw ? 0 : 10
            ))));
      }
      function setMoreAction(e, t, i, o, s) {
        var a = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.gpeByClass)(
            "im-page_classic",
            e
          ),
          l = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.gpeByClass)(
            "_im_peer_history_w",
            e
          ),
          r = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.gpeByClass)(
            "_im_peer_history",
            e
          ),
          _ = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.gpeByClass)(
            "_im_chat_body_abs",
            e
          ),
          d = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.se)(
            '<div class="_audio_row__more_actions audio_row__more_actions"></div>'
          ),
          n = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.gpeByClass)(
            "wk_history_audio_content",
            e
          ),
          u = e.closest(".CatalogBlock"),
          c = {};
        r
          ? ((c.getWrapEl = () => (a ? null : _)), (c.appendTo = r))
          : n
          ? (c.appendTo = n)
          : u
          ? (c.appendTo = u)
          : (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.gpeByClass)("post", e)
          ? (c.appendTo = document.body)
          : (c.appendToParent = !0);
        var h = new ElementTooltip(
          s,
          (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_12__.extend)(
            {
              cls: "_audio_row__tt",
              defaultSide: "bottom",
              rightShift: 20,
              content: d,
              bottomGap:
                a && l
                  ? parseInt(
                      (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.getStyle)(
                        l,
                        "border-bottom-width"
                      )
                    ) +
                    30 +
                    150
                  : 150,
              preventSideChange: !0,
              autoShow: !0,
              onFirstTimeShow: function (e, t) {
                (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.domData)(
                  t,
                  "nodrag",
                  1
                ),
                  setTimeout(
                    function () {
                      this.getOptions().bottomGap = 0;
                    }.bind(this)
                  );
              },
              onHide: () => {
                (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.data)(e, "leaved") &&
                  _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.onRowLeave(
                    e
                  );
              },
            },
            c
          )
        );
        (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_12__.each)(
          o,
          (o, s) => {
            var a,
              l,
              r = (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.se)(
                (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.rs)(
                  _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__
                    .AudioUtils.AUDIO_ROW_ACTION_ROW_ITEM,
                  s
                )
              );
            "add_to_playlist" === s[0]
              ? (r.addEventListener(
                  "mouseenter",
                  (a = () => {
                    clearTimeout(l),
                      (l = setTimeout(() => {
                        r.removeEventListener("mouseenter", a),
                          _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.initRowPlaylistsChooser(
                            t,
                            r,
                            h
                          );
                      }, 150));
                  })
                ),
                r.addEventListener("click", () => {
                  l ||
                    _web_audio_player_utils__WEBPACK_IMPORTED_MODULE_8__.AudioUtils.initRowPlaylistsChooser(
                      t,
                      r,
                      h
                    );
                }),
                r.addEventListener("mouseleave", () => {
                  clearTimeout(l);
                }))
              : r.addEventListener(
                  "click",
                  (t) => (
                    s[1].call(window, e, i),
                    (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__.cancelEvent)(
                      t
                    )
                  )
                );
            d.appendChild(r);
          }
        ),
          (0, _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__.addEvent)(
            s,
            "click",
            (e) => {
              h.isShown() || h.show(),
                (0,
                _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__.cancelEvent)(
                  e
                );
            }
          ),
          (0, _lib_dom__WEBPACK_IMPORTED_MODULE_7__.data)(e, "tt", h);
      }
    },
    373761: (e, t, i) => {
      "use strict";
      i.d(t, { replaceWithOriginal: () => _ });
      var o = i(315544),
        s = i(850167),
        a = i(820587),
        l = i(81679),
        r = i(624715);
      function _(e, t, i) {
        (t = t || (0, s.getAudioPlayer)().getCurrentAudio()) &&
          ((t = (0, r.audioTupleToAudioObject)(t)),
          ajax.post(
            "al_audio.php",
            {
              act: "replace_with_original",
              hash: t.replaceHash,
              audio_id: t.fullId,
            },
            {
              onDone: function (s) {
                var r = JSON.parse(t.extra).claim.original;
                (r[a.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_ID] = s),
                  (r[a.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_OWNER_ID] =
                    t.ownerId);
                var _ = (0, o.se)((0, l.drawAudio)(r));
                e.parentElement.insertBefore(_, e),
                  e.parentElement.removeChild(e),
                  i && i();
              },
              onFail: () => (i(), !0),
            }
          ));
      }
    },
    531254: (e, t, i) => {
      "use strict";
      i.d(t, { shareAudio: () => n });
      var o = i(185850),
        s = i(850167),
        a = i(654612),
        l = i(486125),
        r = i(986773),
        _ = i(12733),
        d = i(624715);
      function n(e, t) {
        if (cur.viewAsBox) return cur.viewAsBox();
        if ((t = t || (0, s.getAudioPlayer)().getCurrentAudio())) {
          t = (0, d.audioTupleToAudioObject)(t);
          var i = (0, _.isPodcast)(t) ? "podcast" : "audio";
          return (
            (0, r.onAdditionalEvent)(e, t, { type: o.TYPE_SHARE_AUDIO }),
            !(0, a.showBox)(
              "like.php",
              {
                act: "publish_box",
                object: i + t.fullId,
                list: t.actionHash,
                to: "mail",
              },
              {
                stat: [
                  "page.js",
                  "page.css",
                  "wide_dd.js",
                  "wide_dd.css",
                  window.jsc("web/sharebox.js"),
                ],
                onFail: function (e) {
                  return (0, l.showDoneBox)(e), !0;
                },
              }
            )
          );
        }
      }
    },
    21734: (e, t, i) => {
      "use strict";
      i.d(t, { showAudioRestriction: () => E });
      var o = i(624715),
        s = i(786067),
        a = i(486125),
        l = i(695724),
        r = i(81679),
        _ = i(820587),
        d = i(315544),
        n = i(982452),
        u = i(850167),
        c = i(654612),
        h = i(460615),
        p = i(40906),
        A = i(124041),
        g = i(420130),
        y = i(785039);
      function f(e) {
        var t = A.FlatButton.render({
          children: (0, s.getLang)("global_close"),
          appearance: A.FlatButtonAppearance.PRIMARY,
          size: A.FlatButtonSize.M,
          restAttrs: { onclick: "curBox().hide()" },
        });
        (0, c.showFastBox)(
          {
            hideButtons: !0,
            title: !1,
            containerClass: "audio_restriction_box",
            onHide: () => {
              (0, h.statlogsValueEvent)(
                "audio_restriction_popup",
                "hide",
                e.restrictionStatus
              );
            },
          },
          `\n    <button class="audio_restriction_box__close" onclick="curBox().hide()" aria-label="${(0,
          s.getLang)("global_close")}">\n      ${
            (0, g.getIcon24Cancel)().icon
          }\n    </button>\n    <div class="audio_restriction_box__icon">${
            (0, y.getIcon56PensiveFace)().icon
          }</div>\n    <div class="audio_restriction_box__title">${(0,
          s.getLang)(
            "audio_restriction_title_claim"
          )}</div>\n    <div class="audio_restriction_box__controls">\n      ${t}\n    </div>\n  `
        );
      }
      function P(e) {
        var t = (0, d.geByClass)("_audio_row_" + e.fullId);
        if (!t || !t.length) return !1;
        var i = (0, n.parseJSON)((0, d.domData)(t[0], "audio"));
        if (!i) return !1;
        var o = (0, n.parseJSON)(
          i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA]
        );
        o && delete o.claim,
          (i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_RESTRICTION] = 0),
          (i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_FLAGS] &=
            ~_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_CLAIMED_BIT),
          (i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA] = JSON.stringify(o));
        var s = (0, u.getAudioPlayer)().getCurrentPlaylist(),
          a = (0, d.se)((0, r.drawAudio)(i, "no_extra"));
        if (s) {
          var c =
              i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_OWNER_ID] +
              "_" +
              i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_ID],
            h = s.getAudio(c);
          h &&
            ((h[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_RESTRICTION] =
              i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_RESTRICTION]),
            (h[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_FLAGS] =
              i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_FLAGS]),
            (h[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA] =
              i[_.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA]));
        }
        return (
          (0, l.each)(t, (e, t) => {
            var o = e > 0 ? (0, d.se)((0, r.drawAudio)(i, "no_extra")) : a;
            t.parentElement.insertBefore(o, t), t.parentElement.removeChild(t);
          }),
          a
        );
      }
      function E(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) return !1;
        if ((e = (0, o.audioTupleToAudioObject)(e)).restrictionStatus) {
          if (e.actionHash) {
            (0, h.statlogsValueEvent)(
              "audio_restriction_popup",
              "show",
              e.restrictionStatus
            );
            var i = (0, c.showBox)(
              "al_audio.php",
              {
                act: "restriction_box",
                audio_id: e.id,
                owner_id: e.owner_id,
                hash: e.actionHash,
              },
              {
                params: {
                  hideButtons: !0,
                  onShow: function () {
                    var i = (0, a.curBox)();
                    (0, p.isFunction)(t.onShow) && t.onShow(),
                      i &&
                        i.once("click:ok", () => {
                          (0, h.statlogsValueEvent)(
                            "audio_restriction_popup",
                            "click",
                            e.restrictionStatus
                          );
                        });
                  },
                  onHide: (i) => {
                    (0, p.isFunction)(t.onHide) && t.onHide(),
                      i ||
                        (0, h.statlogsValueEvent)(
                          "audio_restriction_popup",
                          "hide",
                          e.restrictionStatus
                        );
                  },
                },
                containerClass:
                  "audio_restriction_box audio_restriction_box_type_" +
                  e.restrictionStatus,
                onDone: (t, i) => {
                  if (i && i.play) {
                    t.hide();
                    var s = P(
                        i.audio ? (0, o.audioTupleToAudioObject)(i.audio) : e
                      ),
                      a = (0, u.getAudioPlayer)();
                    s && a.toggleAudio(s, { target: s });
                  }
                },
                onFail: () => (i && i.hide(), f(e), !0),
              }
            );
          } else f(e);
          return !0;
        }
        return !1;
      }
    },
    402297: (e, t, i) => {
      "use strict";
      i.d(t, { toggleAudioLyrics: () => a });
      var o = i(315544),
        s = i(45634);
      function a(e, t) {
        var i = (0, o.geByClass1)("_audio_row__lyrics", e);
        if (i) {
          if ((0, o.toggle)(i)) {
            var a = (0, o.getSize)(e)[1],
              l = (0, o.getSize)(i)[1];
            (0, o.setStyle)(e, "height", a + l),
              (0, o.data)(e, "prevHeight", a);
          } else {
            var r = (0, o.data)(e, "prevHeight");
            (0, o.setStyle)(e, "height", r);
          }
        } else {
          (0, o.addClass)(e, "audio_loading");
          var _ = { act: "get_lyrics", aid: t.fullId, lid: t.lyrics };
          s.AudioUtils.isPodcast(t) && (_.podcast = !0),
            ajax.post("al_audio.php", _, {
              onDone: function (a) {
                (0, o.removeClass)(e, "audio_loading"),
                  (i = (0, o.se)(
                    `<div class="_audio_row__lyrics audio_row__lyrics" data-nodrag="1" style="display:none;"><div class="audio_row__lyrics_inner">${a}</div></div>`
                  )),
                  (0, o.geByClass1)("_audio_row_content", e).appendChild(i),
                  s.AudioUtils.toggleAudioLyrics(e, t);
              },
              onFail: () => !0,
            });
        }
      }
    },
    703912: (e, t, i) => {
      "use strict";
      i.d(t, { unclaim: () => l });
      var o = i(315544),
        s = i(505260),
        a = i(624715);
      function l(e, t, i) {
        (0, o.removeClass)(t, "audio_moder_claimed"),
          (0, s.onRowOver)(t, !1, !0),
          (e = (0, a.audioTupleToAudioObject)(e)),
          window.ajax.post("al_claims.php", {
            act: "a_unclaim",
            claim: i,
            type: "audio",
            id: e.id,
            owner_id: e.ownerId,
            hash: e.actionHash,
          });
      }
    },
    782928: (e, t, i) => {
      "use strict";
      i.d(t, { initUpload: () => u });
      i(175115), i(59357), i(751876);
      var o = i(315544),
        s = i(45634),
        a = i(726271),
        l = i(447215),
        r = i(786067),
        _ = i(486125),
        d = i(695724);
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var o in i)
                  Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      function u(e, t, i, u, c, h, p, A, g, y, f, P) {
        (cur.loadAudioDone = function (t, i) {
          if (cur.audioPage) {
            if (
              (cur.boxClose && cur.audioPage.onAudioAllUploaded(),
              cur.audioPage.onAudioUploaded(t, i),
              cur.boxClose)
            ) {
              delete cur.boxClose;
              var a =
                cur.audiosLoaded > 1
                  ? (0, r.getLang)("audio_success_msg_multiple")
                  : (0, r.getLang)("audio_success_msg");
              e.setOptions({
                title: (0, r.getLang)("audio_uploading_over"),
                bodyStyle: "padding: 16px 23px;",
              }),
                e.content(a),
                (0, o.hide)(e.progress),
                setTimeout(function () {
                  e.hide(200);
                }, 2e3),
                delete cur.audiosLoaded,
                _tbLink &&
                  _tbLink.loc &&
                  ((cur.__phinputs = cur.__phinputs || []),
                  (0, l.globalHistoryDestroy)(_tbLink.loc));
            }
          } else
            cur.boxClose &&
              nav.go(
                "/audios" + i[s.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID],
                !1,
                {
                  onDone: function () {
                    (cur.__phinputs = cur.__phinputs || []),
                      (0, l.globalHistoryDestroy)(nav.objLoc[0]);
                  },
                }
              );
        }),
          (cur.loadAudioFailed = function (i, s) {
            (0, o.hide)(e.progress), Upload.embed(i);
            var a = (0, o.ge)("audio_new_error"),
              l = a && (0, o.domFC)(a),
              _ = s.split("|");
            l &&
              ((s = _[0]),
              (_ = _[1]),
              (l.innerHTML =
                _ ||
                t[s] ||
                (0, r.getLang)("audio_loading_error").replace(
                  "{code}",
                  (0, d.intval)(s)
                )),
              (0, o.show)(a));
          }),
          Upload.init("audio_add_upload_btn", i, u, {
            file_name: "file",
            file_size_limit: c,
            file_types_description: "Audio files (*.mp3)",
            file_types: "*.mp3;*.MP3",
            accept: "audio/mpeg",
            lang: h,
            onUploadStart: function (t, i) {
              "form" === Upload.types[t] && (0, o.show)(e.progress),
                ("form" !== Upload.types[t] && "fileApi" !== Upload.types[t]) ||
                  ((0, o.geByClass1)(
                    "file",
                    (0, o.ge)("audio_add_upload_btn")
                  ).disabled = !0),
                ((0, _.curBox)().changed = !0);
            },
            onUploadProgress: function (e, t, i) {
              if (!(0, o.ge)("form" + e + "_progress")) {
                for (
                  var s = Upload.obj[e],
                    l = (0, o.getSize)(s)[1] / 2 + 10,
                    r = s.firstChild;
                  r;

                )
                  1 === r.nodeType &&
                    (r.id === "uploader" + e && a.browser.msie
                      ? (0, o.setStyle)(r, {
                          position: "relative",
                          left: "-5000px",
                        })
                      : (0, o.setStyle)(r, { visibility: "hidden" })),
                    (r = r.nextSibling);
                s.appendChild(
                  (0, o.ce)(
                    "div",
                    {
                      innerHTML:
                        '<div class="audio_progress_wrap"><div id="form' +
                        e +
                        '_progress" class="audio_progress" style="width: 0%;"></div></div></div>',
                    },
                    { height: l + "px", marginTop: -l + "px" }
                  )
                );
              }
              var _ = (0, d.intval)((t / i) * 100);
              (0, o.setStyle)((0, o.ge)("form" + e + "_progress"), {
                width: _ + "%",
              });
            },
            onUploadComplete: function (e, t) {
              var i;
              this.use_go_uploader || (t = t.replace(/\+/g, " "));
              try {
                i = JSON.parse(t);
              } catch (e) {
                i = AjaxConvert.fromQueryString(t);
              }
              var o = {};
              this.use_go_uploader
                ? (o = { act: "done_add", upldr: 1, go_uploader_response: t })
                : ((i.title = decodeURIComponent(i.title)),
                  (i.artist = decodeURIComponent(i.artist)),
                  (o = n({}, i, {}, { act: "done_add", upldr: 1 }))),
                i.code
                  ? cur.loadAudioFailed(e, i.code)
                  : ajax.post("al_audio.php", o, {
                      onDone: function (t) {
                        cur.loadAudioDone(e, t);
                      },
                      onFail: function (t) {
                        return cur.loadAudioFailed(e, t), !0;
                      },
                    });
            },
            onUploadCompleteAll: function (e, t) {
              cur.boxClose = !0;
            },
            onUploadError: cur.loadAudioFailed,
            clear: 1,
            multiple: 1,
            force_max_files: !0,
            max_files: p,
            max_files_hide_last: 1,
            type: "audio",
            max_attempts: 3,
            reverse_files: 1,
            server: A,
            error: g,
            error_hash: y,
            dropbox: "choose_audio_dropbox",
            use_go_uploader: P,
          }),
          e.setControlsText(f);
      }
    },
    700688: (e, t, i) => {
      "use strict";
      i.d(t, { getUMAInfo: () => s });
      var o = i(654612);
      function s(e, t) {
        t.isInEditBox ||
          (0, o.showBox)(
            "al_audio.php",
            {
              act: "get_uma_restrictions",
              id: t.id,
              owner_id: t.owner_id,
              hash: t.actionHash,
            },
            { params: { width: 1e3 } }
          );
      }
    },
    251980: (e, t, i) => {
      "use strict";
      i.d(t, { getUMAInfoAlbum: () => s });
      var o = i(654612);
      function s(e, t) {
        t.isInEditBox ||
          (0, o.showBox)(
            "al_audio.php",
            { act: "get_uma_restrictions_album", playlist_raw_id: e },
            { params: { width: 750 } }
          );
      }
    },
    45634: (e, t, i) => {
      "use strict";
      i.d(t, { AudioUtils: () => Te });
      i(175115);
      var o = i(820587),
        s = i(867696),
        a = i(402297),
        l = i(442277),
        r = i(505260),
        _ = i(934495),
        d = i(759448),
        n = i(403753),
        u = i(271891),
        c = i(459285),
        h = i(739724),
        p = i(531254),
        A = i(234247),
        g = i(425209),
        y = i(373761),
        f = i(263677),
        P = i(798783),
        E = i(875751),
        v = i(926100),
        I = i(580260),
        m = i(569272),
        w = i(888614),
        O = i(750288),
        D = i(600732),
        b = i(747447),
        C = i(949002),
        T = i(563767),
        U = i(979663),
        L = i(409082),
        M = i(548616),
        S = i(703780),
        R = i(285200),
        x = i(869053),
        B = i(655700),
        k = i(160260),
        N = i(894391),
        W = i(207879),
        j = i(874229),
        K = i(59943),
        F = i(597970),
        H = i(844900),
        Y = i(81679),
        X = i(927313),
        Q = i(717051),
        V = i(78838),
        G = i(729956),
        $ = i(624715),
        q = i(517097),
        z = i(295224),
        J = i(270605),
        Z = i(930982),
        ee = i(438022),
        te = i(703912),
        ie = i(700688),
        oe = i(251980),
        se = i(141593),
        ae = i(748409),
        le = i(470353),
        re = i(12733),
        _e = i(849115),
        de = i(557761),
        ne = i(568062),
        ue = i(734264),
        ce = i(21734),
        he = i(430463),
        pe = i(984287),
        Ae = i(463091),
        ge = i(636760),
        ye = i(840887),
        fe = i(190347),
        Pe = i(285132),
        Ee = i(291976),
        ve = i(57472),
        Ie = i(953054),
        me = i(782928),
        we = i(355145),
        Oe = i(920817),
        De = i(254492),
        be = i(944568);
      function Ce() {
        return (
          (Ce =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var o in i)
                  Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
              }
              return e;
            }),
          Ce.apply(this, arguments)
        );
      }
      var Te = Ce({}, o.AUDIO_PLAYER_ENUMS, {
        audioSearchPerformer: s.audioSearchPerformer,
        toggleAudioLyrics: a.toggleAudioLyrics,
        getRowActionName: l.getRowActionName,
        initRowPlaylistsChooser: u.initRowPlaylistsChooser,
        addToPlaylistsBoxInit: c.addToPlaylistsBoxInit,
        showRecoms: h.showRecoms,
        shareAudio: p.shareAudio,
        showAudioAlbum: A.showAudioAlbum,
        openEpisode: g.openEpisode,
        replaceWithOriginal: y.replaceWithOriginal,
        editAudio: f.editAudio,
        editEpisode: P.editEpisode,
        deleteCurrentAudio: E.deleteCurrentAudio,
        deleteRecomsAudio: v.deleteRecomsAudio,
        deleteListenedAudio: I.deleteListenedAudio,
        deleteAudio: m.deleteAudio,
        deleteEpisode: w.deleteEpisode,
        restoreEpisode: O.restoreEpisode,
        deleteDeletedAudios: D.deleteDeletedAudios,
        faveEpisode: b.faveEpisode,
        contextSplit: C.contextSplit,
        showAudioPlaylist: T.showAudioPlaylist,
        editPlaylist: M.editPlaylist,
        followPlaylist: S.followPlaylist,
        getLayer: R.getLayer,
        updateQueueReceivedPost: x.updateQueueReceivedPost,
        toggleAudioHQBodyClass: B.toggleAudioHQBodyClass,
        hasAudioHQBodyClass: k.hasAudioHQBodyClass,
        getAddRestoreInfo: N.getAddRestoreInfo,
        addAudio: W.addAudio,
        addAudioToOwner: j.addAudioToOwner,
        chooseAudioBox: K.chooseAudioBox,
        getAudioArtistsString: F.getAudioArtistsString,
        getAudioPerformers: H.getAudioPerformers,
        drawAudio: Y.drawAudio,
        isClaimedAudio: X.isClaimedAudio,
        getDurationMod: Y.getDurationMod,
        getAudioExtra: Q.getAudioExtra,
        getAudioFromEl: V.getAudioFromEl,
        getAudioFullId: G.getAudioFullId,
        audioTupleToAudioObject: $.audioTupleToAudioObject,
        initDomPlaylist: q.initDomPlaylist,
        getContextPlaylist: z.getContextPlaylist,
        renderAudioDiag: Z.renderAudioDiag,
        claim: ee.claim,
        unclaim: te.unclaim,
        getUMAInfo: ie.getUMAInfo,
        getUMAInfoAlbum: oe.getUMAInfoAlbum,
        cancelReplacement: se.cancelReplacement,
        removeFromGroup: ae.removeFromGroup,
        addToGroupBox: le.addToGroupBox,
        showAudioRestriction: ce.showAudioRestriction,
        isPodcast: re.isPodcast,
        isArticleTts: _e.isArticleTts,
        isPrivatePodcast: de.isPrivatePodcast,
        followArtist: Ae.followArtist,
        unfollowArtist: ge.unfollowArtist,
        followCurator: ye.followCurator,
        unfollowCurator: fe.unfollowCurator,
        followOwner: Pe.followOwner,
        unfollowOwner: Ee.unfollowOwner,
        trackArtistToOfficial: ve.trackArtistToOfficial,
        PodcastsLogs: ne,
        copyPlaylistLink: ue.copyPlaylistLink,
        getAlbumParts: he.getAlbumParts,
        drawAlbumPartRow: pe.drawAlbumPartRow,
        onRowOver: r.onRowOver,
        onRowLeave: _.onRowLeave,
        onAudioAddedToPlaylist: d.onAudioAddedToPlaylist,
        onAudioChoose: U.onAudioChoose,
        onPlaylistChoose: L.onPlaylistChoose,
        claimPlaylist: Ie.claimPlaylist,
        initUpload: me.initUpload,
        turnPlaylistDiscover: we.turnPlaylistDiscover,
        hidePlaylistFromRecoms: Oe.hidePlaylistFromRecoms,
        showPlaylistInRecoms: De.showPlaylistInRecoms,
        hideCatalogBlock: be.hideCatalogBlock,
        _showPlaylistsChooser: n.showPlaylistsChooser,
        debugLog: J.debugLog,
      });
    },
    105832: (e, t, i) => {
      "use strict";
      function o(e) {
        return e && e <= -2e9 && e >= -2002e6;
      }
      i.d(t, { checkIsOfficialPlaylist: () => o });
    },
    782508: (e, t, i) => {
      "use strict";
      i.d(t, { connectListenQueue: () => A });
      var o = i(511867),
        s = i(45634),
        a = i(850167),
        l = i(654612),
        r = i(143707),
        _ = i(19331),
        d = null,
        n = null,
        u = !1,
        c = 0,
        h = new o.WebQueueListener(function (e) {
          if (e.failed) return void A(!0);
          for (
            var t = (0, a.getAudioPlayer)(),
              i = t.isPlaying(),
              o = t.getCurrentAudio(),
              r = s.AudioUtils.isPodcast(o),
              _ = 0;
            _ < e.events.length;
            _++
          ) {
            var d = e.events[_].data;
            if (
              "start" === d.type &&
              AudioPlayer.getDeviceId() !== d.uuid &&
              !n &&
              !r &&
              i
            ) {
              (t.pausedByQueue = Date.now()),
                t.pause(),
                (n = (0, l.showBox)(
                  "al_audio.php",
                  {
                    act: "start_playback_box",
                    uuid: d.uuid,
                    device_name: d.device_name,
                  },
                  {
                    params: {
                      hideButtons: !0,
                      onHide: () => {
                        n = !1;
                      },
                    },
                    containerClass: "audio_playback_box",
                  }
                ));
              break;
            }
          }
        }),
        p = new o.WebQueueListener(function (e) {
          e.events.length &&
            e.events.forEach((e) => {
              1 === e.data.product_id &&
                (vk.audioAdsConfig.enabled = !e.data.active);
            });
        });
      function A(e) {
        if (window.Notifier && vk.id) {
          var t = window.ap && (0, a.getAudioPlayer)(),
            i = t && t.getCurrentAudio(),
            o = window.Notifier && !vk.widget,
            l = !u && i ? h.listenQueueKey : p.listenQueueKey,
            n = s.AudioUtils.isPodcast(i);
          (e || (o && !n && !l)) &&
            (i || (0, _.partConfigEnabled)("audio_subscription_update")) &&
            (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : () => {},
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : () => !0;
              ajax.post(
                "al_audio.php",
                {
                  act: "queue_params",
                  audio_id: e.id,
                  owner_id: e.owner_id,
                  hash: e.actionHash,
                },
                { onDone: t, onFail: i }
              );
            })(
              (i = i ? s.AudioUtils.audioTupleToAudioObject(i) : {}),
              (e) => {
                var t = (function (e) {
                  var t = (0, r.unpackQueues)(e);
                  t.audio && h.connect(t.audio);
                  t.subscription && p.connect(t.subscription);
                  return t;
                })(e);
                (u = !i || !t.audio),
                  (t.audio || t.subscription) &&
                    (d && clearTimeout(d),
                    (d = window.setTimeout(() => A(!0), 3e4)));
              },
              () => (++c < 3 && A(!0), !0)
            );
        }
      }
    },
    949002: (e, t, i) => {
      "use strict";
      i.d(t, { contextSplit: () => s });
      i(751876);
      var o = i(40906);
      function s(e) {
        return (0, o.isObject)(e) && (e = e.context), (e || "").split(":");
      }
    },
    270605: (e, t, i) => {
      "use strict";
      function o() {}
      i.d(t, { debugLog: () => o });
    },
    713359: (e, t, i) => {
      "use strict";
      i.d(t, { getContext: () => a });
      var o = i(295224),
        s = i(949002);
      function a(e) {
        var t,
          i = window.currentAudioPage && window.currentAudioPage(e),
          a = i && i.getPageCurrentPlaylist(),
          l = (0, o.getContextPlaylist)(e, !0);
        return (
          l &&
            ((l = (0, s.contextSplit)(l)),
            Array.isArray(l) && l.length > 0 && (t = l[0])),
          (("search" === t && a && a.getSearchQid()) ||
            ("search" === window.cur.module && window.cur.qid)) &&
            (t = "search:external"),
          t
        );
      }
    },
    285200: (e, t, i) => {
      "use strict";
      function o() {
        var e = window.audioLayer;
        return e || (window.audioLayer = e = new AudioLayer()), e;
      }
      i.d(t, { getLayer: () => o });
    },
    812595: (e, t, i) => {
      "use strict";
      i.d(t, { getPlaylistUrl: () => s });
      var o = i(105832);
      function s(e, t, i) {
        var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          a = (0, o.checkIsOfficialPlaylist)(e) ? "album" : "playlist",
          l = `/music/${a}/${e}_${t}${i ? `_${i}` : ""}`;
        return s ? `${location.protocol}//${location.host}${l}` : l;
      }
    },
    397807: (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { default: () => AudioLayer });
      var _lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(787481),
        _web_lib_cancel_stack__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(475632),
        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(315544);
      class AudioLayer {
        static prepare(e) {
          window.stManager.add(
            [
              window.jsc("web/audio.js"),
              "audio.css",
              window.jsc("web/suggester.js"),
              window.jsc("web/auto_list.js"),
              window.jsc("web/indexer.js"),
            ],
            () => {
              e && e();
            }
          );
        }
        constructor() {
          this._els = {
            layerPlace: (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)(
              "top_audio_layer_place"
            ),
            topPlayBtn: (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
              "_top_audio_player_play"
            ),
            topNotaBtn: (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
              "TopNavBtn__audio"
            ),
            topNotaBtnGroup: (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)(
              "top_audio_btn_group"
            ),
          };
        }
        toggle(e, t) {
          this._initTooltip();
          var i = this._els.tooltip,
            o = void 0 !== e ? e : !i.isShown();
          o && this.initPage(),
            o
              ? (i.show(),
                (0,
                _web_lib_cancel_stack__WEBPACK_IMPORTED_MODULE_1__.cancelStackPush)(
                  "top_audio",
                  () => {
                    this.toggle(!1, !0);
                  },
                  !0
                ))
              : (t ||
                  (0,
                  _web_lib_cancel_stack__WEBPACK_IMPORTED_MODULE_1__.cancelStackPop)(),
                i.hide()),
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(
              this._els.topNotaBtn,
              "TopNavBtn--active",
              o
            );
        }
        hide() {
          this._els.tooltip.hide();
        }
        isShown() {
          return this._els.tooltip && this._els.tooltip.isShown();
        }
        updatePosition() {
          return this._els.tooltip && this._els.tooltip.updatePosition();
        }
        _layerPosition() {
          var e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(
              this._els.layerPlace
            ),
            t =
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(
                "ts_wrap"
              )[0] -
              e[0] -
              1,
            i = 0;
          (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.isVisible)(
            this._els.topNotaBtnGroup
          )
            ? (i =
                -t +
                ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(
                  this._els.topNotaBtn
                )[0] -
                  e[0]) +
                15)
            : (i =
                -t +
                ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(
                  this._els.topPlayBtn
                )[0] -
                  e[0]) +
                3);
          return { left: t, top: 0, arrowPosition: i };
        }
        getPageInstance() {
          return this._page;
        }
        getTemplate() {
          return `\n      <div class="audio_layer_container">\n        <div class="top_audio_loading">\n          ${(0,
          _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.rs)(vk.pr_tpl, {
            id: "",
            cls: "pr_big",
          })}\n        </div>\n      </div>\n    `;
        }
        _initTooltip() {
          this._els.tooltip ||
            ((this._els.container = (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.se)(this.getTemplate())),
            (this._els.tooltip = new ElementTooltip(this._els.layerPlace, {
              id: "audio_layer_tt",
              content: this._els.container,
              width: 660,
              offset: [22, 5],
              autoShow: !1,
              customShow: !0,
              setPos: this._layerPosition.bind(this),
              forceSide: "bottom",
              onHide: () => {
                this._page && this._page.onLayerHide();
              },
              onShow: () => {
                this._page && this._page.onLayerShow(this._initSection);
              },
            })));
        }
        initPage() {
          this._page ||
            ajax.post(
              "al_audio.php",
              {
                act: "layer",
                is_layer: 1,
                section: window.ap.getCurrentPlaylist() ? "current" : "all",
              },
              {
                onDone: (html, data, templatesScript) => {
                  if (this._els.tooltip.isShown()) {
                    try {
                      eval(templatesScript);
                    } catch (e) {
                      (0,
                      _lib_debug_tools__WEBPACK_IMPORTED_MODULE_0__.logEvalError)(
                        e,
                        templatesScript
                      );
                    }
                    (this._els.container.innerHTML = html),
                      (this._page = new AudioPage(
                        (0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
                          "_audio_page_layout",
                          this._els.container
                        ),
                        data
                      )),
                      (this._initSection = data.initSection || void 0),
                      this._page.onLayerShow(this._initSection);
                  }
                },
                onFail: () => !0,
              }
            );
        }
      }
    },
    913151: (e, t, i) => {
      "use strict";
      i.d(t, { AudioPlayer: () => Q });
      i(175115),
        i(530522),
        i(66108),
        i(579665),
        i(95767),
        i(176774),
        i(940851),
        i(296253),
        i(898837),
        i(850110),
        i(751876);
      var o = i(45634),
        s = i(726271),
        a = i(206735),
        l = i(850167),
        r = i(786067),
        _ = i(787481),
        d = i(40906),
        n = i(654612),
        u = i(479957),
        c = i(49535),
        h = i(289988),
        p = i(486125),
        A = i(376567),
        g = i(695724),
        y = i(67766),
        f = i(315544),
        P = i(189158),
        E = i(147347),
        v = i(185850),
        I = i(615152),
        m = i(804333),
        w = i(222994),
        O = i(200134),
        D = i(171171),
        b = i(471323),
        C = i(331811),
        T = i(624715),
        U = i(522683),
        L = i(767356),
        M = i(782508),
        S = i(191040),
        R = i(893301),
        x = i(729956),
        B = i(19331),
        k = i(859866),
        N = i(273271),
        W = i(383611),
        j = i(842776);
      function K() {
        return (
          (K =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var o in i)
                  Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
              }
              return e;
            }),
          K.apply(this, arguments)
        );
      }
      function F(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == i) return;
            var o,
              s,
              a = [],
              l = !0,
              r = !1;
            try {
              for (
                i = i.call(e);
                !(l = (o = i.next()).done) &&
                (a.push(o.value), !t || a.length !== t);
                l = !0
              );
            } catch (e) {
              (r = !0), (s = e);
            } finally {
              try {
                l || null == i.return || i.return();
              } finally {
                if (r) throw s;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return H(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return H(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function H(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o;
      }
      var Y = {},
        X = (0, S.throttledPromise)(() => {}, 1500, !0);
      class Q {
        constructor() {
          if (
            ((this.ensureUrlReject = null),
            (this._currentAudio = !1),
            (this._isPlaying = !1),
            (this._prevPlaylist = null),
            (this._currentPlaylist = null),
            (this._playlistQueue = new E.PlaylistQueue()),
            (this._playlists = []),
            (this.subscribers = []),
            (this._statusExport = {}),
            (this._currentPlayingRows = []),
            (this._podcastsActionRef = {}),
            (this._podcastsActionLastId = {}),
            (this._allowPrefetchNext = !0),
            !vk.isBanned)
          ) {
            o.AudioUtils.debugLog("Player creation"),
              (this.eventBus = new C.EventBus());
            var e = new P.WebPlayerAdapter(this);
            (this.stats = new v.AudioStats(e)),
              (this.ads = new w.AudioAds(this, Q.getVersion())),
              this.connectEvents(),
              (0, M.connectListenQueue)(),
              this._restoreVolumeState(),
              this._initImpl(),
              this._initEvents(),
              this._podcastCleanStates(),
              this._listenStatusExport(),
              setTimeout(() => {
                this.restoreState(),
                  o.AudioUtils.toggleAudioHQBodyClass(),
                  this.updateCurrentPlaying();
              });
            var t = new j.WebMediaSessionAdapter(this);
            new W.AudioMediaSession(t).init();
          }
        }
        static getVersion() {
          return 15;
        }
        static _sendLCNotification() {
          var e = window.Notifier;
          e && e.lcSend("audio_start");
          try {
            window.Videoview && Videoview.togglePlay(!1);
          } catch (e) {}
        }
        static showHQLabel(e) {
          var t = "_audio_show_hq_label";
          return void 0 === e
            ? !!ls.get(t)
            : ((e = !!e),
              ls.set(t, e),
              o.AudioUtils.toggleAudioHQBodyClass(),
              e);
        }
        static getAudioElementsByAudioId(e, t) {
          return (0, f.geByClass)(`_audio_row_${e}`, t);
        }
        static getDeviceId() {
          var e = ls.get(Q.LS_PREFIX + Q.LS_UUID);
          return e || ((e = D()), ls.set(Q.LS_PREFIX + Q.LS_UUID, e)), e;
        }
        static showSubscriptionPopup() {
          (0, n.showBox)(
            "/al_audio.php",
            { act: "subscription_box" },
            {
              params: {
                containerClass: "audio_subscription_popup",
                grey: !0,
                width: 520,
              },
            }
          );
        }
        static getDurationType() {
          return (0, g.intval)(ls.get(Q.LS_PREFIX + Q.LS_DURATION_TYPE));
        }
        static _setTabIcon(e) {
          (0, a.setFavIcon)(Q.tabIcons[e]);
        }
        static _lsGet(e) {
          return ls.get(Q.LS_PREFIX + e);
        }
        static _lsSet(e, t) {
          return ls.set(Q.LS_PREFIX + e, t);
        }
        static _podcastGetStates() {
          return (Q._lsGet(Q.LS_PODCASTS) || Y).states || {};
        }
        static _podcastSetStates(e) {
          var t = Q._lsGet(Q.LS_PODCASTS) || Y;
          (t.states = e), Q._lsSet(Q.LS_PODCASTS, t), (Y = t);
        }
        static podcastToggleFave(e, t) {
          if (t) {
            t = o.AudioUtils.audioTupleToAudioObject(t);
            var i = o.AudioUtils.getAudioExtra(t).faveHash;
            i && bookmarkPodcast(e, t.fullId, i);
          }
        }
        static podcastGetPlaybackRate() {
          return (Q._lsGet(Q.LS_PODCASTS) || Y).rate || 1;
        }
        static getLang(e) {
          var t = (0, l.getAudioPlayer)();
          return t && t.langs ? t.langs[e] : e;
        }
        static clearDeprecatedCacheKeys() {
          Q._iterateCacheKeys((e) => e === Q.LS_VER);
        }
        static clearOutdatedCacheKeys() {
          (ls.get(Q.LS_PREFIX + Q.LS_SAVED) || 0) < (0, d.vkNow)() - 72e5 &&
            Q._iterateCacheKeys(
              (e, t) => !(0, g.inArray)(t, [Q.LS_PL, Q.LS_TRACK, Q.LS_PROGRESS])
            );
        }
        getCurrentAudioLs() {
          return ap.getCurrentAudio() || Q._lsGet(Q.LS_TRACK);
        }
        static clearAllCacheKeys() {
          Q._iterateCacheKeys(() => !1),
            (0, A.setCookie)("remixcurr_audio", "", -1);
        }
        static _iterateCacheKeys(e) {
          U.vkLocalStorage
            .getPrefixedKeys(`${Q.LS_KEY_PREFIX}_`)
            .forEach((t) => {
              var i = F(t.split("_"), 3),
                o = i[1],
                s = i[2];
              e(o, s) || U.vkLocalStorage.removeItem(s);
            });
        }
        _initImpl() {
          this._impl && this._impl.destroy();
          var e = 0,
            t = !1,
            i = (t) => {
              if (-1 !== e) {
                if (t && (e++, this.implTaskManager.delay(200), e > 3)) {
                  e = -1;
                  var i = new MessageBox({
                    title: (0, r.getLang)("global_error"),
                  })
                    .content((0, r.getLang)("audio_error_loading"))
                    .setButtons("Ok", function () {
                      (e = 0), (0, p.curBox)().hide();
                    });
                  return (
                    i.show(),
                    (0, m.setWorkerTimeout)(function () {
                      (e = 0), i.hide();
                    }, 3e3),
                    this.notify(O.events.ENDED),
                    void this.notify(O.events.FAILED)
                  );
                }
                o.AudioUtils.isPodcast(this.getCurrentAudio())
                  ? (this.setIsPlaying(!1),
                    this.notify(O.events.PAUSE),
                    this.notify(O.events.ENDED),
                    this.stop())
                  : this._repeatCurrent
                  ? ((this._autoNext = !0),
                    this.notify(O.events.ENDED),
                    this.notify(O.events.PROGRESS, 0),
                    this.implTaskManager.seekImmediate(0),
                    (0, m.setWorkerTimeout)(() => {
                      this._impl &&
                        this._impl.clearAudioNode &&
                        (this._impl.stop(),
                        this._implSetUrl(this.getCurrentAudio())),
                        this._implPlay();
                    }))
                  : (this.setIsPlaying(!1),
                    this.notify(O.events.ENDED),
                    this.playNext(!0));
              }
            },
            s = {
              onPause: () => {
                this.setIsPlaying(!1), this.notify(O.events.PAUSE), (t = !1);
              },
              onPlay: () => {
                this.setIsPlaying(!0),
                  this.setVolume(this.getVolume()),
                  this.notify(O.events.PLAY),
                  (t = !1);
              },
              onBufferUpdate: (e) => {
                this.notify(O.events.BUFFERED, e);
              },
              onEnd: i,
              onFail: () => {
                this._sendPlayerErrorStats(this._impl), i(!0);
              },
              onCanPlay: () => this.notify(O.events.CAN_PLAY),
              onProgressUpdate: (e, i) => {
                var s = this.getCurrentAudio();
                if (!this._muteProgressEvents && s) {
                  var a =
                    this._impl.getDuration() ||
                    s[o.AudioUtils.AUDIO_ITEM_INDEX_DURATION];
                  this.notify(O.events.PROGRESS, e, a, i),
                    !vk.id &&
                      a - i < Q.UNAUTH_FADE_TIME &&
                      !t &&
                      ((t = !0), this.fadeOut(1e3 * Q.UNAUTH_FADE_TIME));
                }
              },
              onFrequency: (e) => {
                this.notify(O.events.FREQ_UPDATE, e);
              },
              defaultVolume: this._userVolume,
            };
          (this._impl = new I.AudioPlayerHTML5(s)),
            (this.implTaskManager = new L.AudioTaskManager(this._impl)),
            this.implTaskManager.setVolume(0);
        }
        fadeIn() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 300;
          this.implTaskManager.setVolume(this.getVolume(), !0, e);
        }
        fadeOut() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 300;
          this.implTaskManager.setVolume(0, !0, e);
        }
        onMediaKeyPressedEvent(e) {
          if (this.getCurrentAudio())
            switch (e.keyCode) {
              case 179:
                this.isPlaying() ? this.pause() : this.play();
                break;
              case 178:
                this.seek(0), this.pause();
                break;
              case 177:
                this.playPrev();
                break;
              case 176:
                this.playNext();
            }
        }
        setAdsConfig(e) {
          this.ads && this.ads.setAdsConfig(e);
        }
        deletePlaylist(e) {
          for (var t = 0; t < this._playlists.length; t++)
            this._playlists[t] === e && this._playlists.splice(t, 1);
        }
        mergePlaylistData(e, t) {
          this._playlists.forEach((i) => {
            i.getId() === e.getId() &&
              i.getOwnerId() === e.getOwnerId() &&
              (i.hasMore() ? i.mergeWith(t) : i.mergeInfo(t));
          });
        }
        deleteCurrentPlaylist() {
          this.getPlaylistQueue().removeSortedList(),
            delete this._currentAudio,
            delete this._currentPlaylist,
            this.notify(O.events.UPDATE),
            this.notify(O.events.PLAYLIST_CHANGED),
            this.stop(),
            this.updateCurrentPlaying();
        }
        updateCurrentPlaying(e) {
          e = !!e;
          var t = o.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio()),
            i = [];
          if (t) {
            var s = (0, f.geByClass)("_audio_row_" + t.fullId);
            i = i.concat([].slice.call(s));
          }
          for (var a = 0, l = this._currentPlayingRows.length; a < l; a++) {
            var r = this._currentPlayingRows[a];
            r && !(0, g.inArray)(r, i) && this.toggleCurrentAudioRow(r, !1, e);
          }
          if (t)
            for (var _ = 0, d = i.length; _ < d; _++) {
              var n = i[_];
              if (n) {
                if ((0, f.gpeByClass)("article_editor_canvas", n)) continue;
                this.toggleCurrentAudioRow(n, !0, e);
              }
            }
          (this._currentPlayingRows = i),
            (0, g.each)((0, f.geByClass)("_audio_pl"), (e, t) =>
              (0, f.removeClass)(t, "audio_pl__playing")
            );
          var u = this.getCurrentPlaylist();
          if (this.isPlaying() && u) {
            var c = (0, f.geByClass)(
              `_audio_pl_${u.getOwnerId()}_${u.getPlaylistId()}`
            );
            c &&
              (0, g.each)(c, (e, t) => (0, f.addClass)(t, "audio_pl__playing"));
          }
        }
        scrollToCurrentPlaying(e, t) {
          var i = Q.getAudioElementsByAudioId(e);
          window.AudioPage &&
            i.forEach((e) => {
              var i = window.currentAudioPage(e);
              if (i && i._scroll) {
                var o = i.getCurrentSectionEl() || i.getPageContainer();
                Q.getAudioElementsByAudioId(t, o).length || i.drawMore(),
                  i.scrollIntoView(Q.getAudioElementsByAudioId(t, o)[0], 150);
              }
            });
        }
        toggleCurrentAudioRow(e, t, i) {
          var s = o.AudioUtils.getAudioFromEl(e, !0);
          (0, f.addClass)(e, o.AudioUtils.AUDIO_CURRENT_CLS),
            s.withInlinePlayer &&
              (0, f.toggleClass)(e, "audio_row__player_transition", i),
            (i = !!s.withInlinePlayer && i)
              ? setTimeout(() => this._updateAudioEl(t, e, s, i), 0)
              : this._updateAudioEl(t, e, s, i);
        }
        _updateAudioEl(e, t, i, s) {
          var a = (0, f.geByClass1)("_audio_row__play_btn", t),
            l = (0, f.geByClass1)("_audio_row__title", t),
            _ = (0, f.geByClass1)("_audio_row__duration", t),
            n = o.AudioUtils.getDurationMod(
              e ? i.duration : i.duration * this.getCurrentProgress()
            );
          e &&
            t &&
            !1 === this.isPlaying() &&
            ((0, f.removeClass)(t, "audio_row__playing"),
            a &&
              (0, f.attr)(a, "aria-label", (0, r.getLang)("global_audio_play")),
            l && (0, f.attr)(l, "role", ""));
          var u = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            if (_) {
              var i = o.AudioUtils.getDurationMod(e);
              (_.innerHTML = t + (0, h.formatTime)(e)),
                i !== n &&
                  ((0, f.replaceClass)(
                    _,
                    o.AudioUtils.AUDIO_DURATION_CLS + "-" + n,
                    o.AudioUtils.AUDIO_DURATION_CLS + "-" + i
                  ),
                  (n = i));
            }
          };
          if (
            (i.withInlinePlayer &&
              (e ? this._addRowPlayer(t) : this._removeRowPlayer(t)),
            e)
          ) {
            this.on(t, [O.events.PLAY, O.events.PLAY_REQUESTED], (e) => {
              o.AudioUtils.audioTupleToAudioObject(e).fullId === i.fullId &&
                ((0, f.addClass)(t, o.AudioUtils.AUDIO_PLAYING_CLS),
                a &&
                  (0, f.attr)(
                    a,
                    "aria-label",
                    (0, r.getLang)("global_audio_pause")
                  ),
                l && (0, f.attr)(l, "role", "heading"));
            }),
              this.on(t, O.events.PROGRESS, (e, t, o) => {
                if (i.withInlinePlayer || !this.ads.isPlaying()) {
                  o = (0, g.intval)(o);
                  var s = 0,
                    a = "";
                  Q.getDurationType()
                    ? ((s = Math.round(o - t * o)), (a = "-"))
                    : (s = Math.round(t * o)),
                    u(s, a);
                } else u(i.duration);
              });
            var c = (0, f.data)(t, "bars");
            if (
              !c &&
              (i.isWithCovers || i.isNumeric || i.isPodcastListSnippet)
            ) {
              if (
                ((c = (0, f.se)(
                  '<canvas class="audio_row__sound_bars"></canvas>'
                )),
                i.isPodcastListSnippet
                  ? (0, f.geByClass1)(
                      "podcast_list_snippet__cover",
                      t
                    ).appendChild(c)
                  : t.appendChild(c),
                (c.width =
                  o.AudioUtils.AUDIO_ROW_COVER_SIZE *
                  ((0, d.isRetina)() ? 2 : 1)),
                (c.height =
                  o.AudioUtils.AUDIO_ROW_COVER_SIZE *
                  ((0, d.isRetina)() ? 2 : 1)),
                (c.style.width = o.AudioUtils.AUDIO_ROW_COVER_SIZE),
                (c.style.height = o.AudioUtils.AUDIO_ROW_COVER_SIZE),
                (0, d.isRetina)())
              )
                c.getContext("2d").scale(2, 2);
              var p = getComputedStyle(c).color;
              this.on(t, O.events.FREQ_UPDATE, (e, t) => V(c, t, p)),
                V(c, [0, 0, 0, 0], p),
                (0, f.data)(t, "bars", c);
            }
            (0, f.toggleClass)(
              t,
              o.AudioUtils.AUDIO_PLAYING_CLS,
              this.isPlaying()
            );
          } else {
            this.off(t),
              (0, f.removeClass)(t, o.AudioUtils.AUDIO_PLAYING_CLS),
              (0, f.removeClass)(t, o.AudioUtils.AUDIO_CURRENT_CLS),
              u(i.duration),
              a &&
                (0, f.attr)(
                  a,
                  "aria-label",
                  (0, r.getLang)("global_audio_play")
                ),
              l && (0, f.attr)(l, "role", "");
            var A = (0, f.data)(t, "bars");
            A && ((0, f.re)(A), (0, f.data)(t, "bars", null));
          }
          s
            ? setTimeout(() => {
                var e = o.AudioUtils.getAudioFromEl(t, !0);
                (0, f.toggleClass)(
                  t,
                  o.AudioUtils.AUDIO_CURRENT_CLS,
                  !!e.isCurrent
                );
              }, 0)
            : (0, f.toggleClass)(t, o.AudioUtils.AUDIO_CURRENT_CLS, e);
        }
        _removeRowPlayer(e) {
          (0, f.removeClass)(e, o.AudioUtils.AUDIO_CURRENT_CLS);
          var t = (0, f.data)(e, "player_inited");
          if (t) {
            setTimeout(
              () => (0, f.re)((0, f.geByClass1)("_audio_inline_player", e)),
              200
            );
            var i = (0, f.geByClass1)("_audio_duration", e);
            i &&
              (i.innerHTML = (0, h.formatTime)(
                o.AudioUtils.getAudioFromEl(e, !0).duration
              )),
              this.off(e),
              (0, g.each)(t.sliders, (e, t) => t.destroy()),
              (0, f.data)(e, "player_inited", !1);
            var s = (0, f.geByClass1)("has_audio_player", e);
            s && (0, f.removeClass)(s, "has_audio_player");
          }
        }
        _addRowPlayer(e) {
          if (
            !(
              (0, f.geByClass1)("_audio_inline_player", e) ||
              (0, f.hasClass)(e, "podcast_list_snippet") ||
              (0, f.hasClass)(e, "podcast_snippet__controls") ||
              (0, f.hasClass)(e, "PodcastWidget__player")
            )
          ) {
            var t = (0, f.se)(
                vk.audioInlinePlayerTpl ||
                  (0, g.getTemplate)("audio_inline_player")
              ),
              i = (0, f.geByClass1)("_audio_player__place", e);
            i.appendChild(t), (0, f.addClass)(i, "has_audio_player");
            var s = new Slider(
                (0, f.geByClass1)("audio_inline_player_volume", t),
                {
                  value: this.getVolume(),
                  backValue: 0,
                  size: 1,
                  hintClass: "audio_player_hint",
                  withBackLine: !0,
                  log: !0,
                  formatHint: (e) => Math.round(100 * e) + "%",
                  onChange: (e) => this.setVolume(e),
                }
              ),
              a = new Slider(
                (0, f.geByClass1)("audio_inline_player_progress", t),
                {
                  value: 0,
                  backValue: 0,
                  size: 1,
                  hintClass: "audio_player_hint",
                  withBackLine: !0,
                  formatHint: (e) =>
                    (0, h.formatTime)(Math.round(e * this._impl.getDuration())),
                  onEndDragging: (e) => {
                    var i = o.AudioUtils.audioTupleToAudioObject(
                      this.getCurrentAudio()
                    );
                    i &&
                      o.AudioUtils.isPodcast(i) &&
                      this.podcastSetActionRef(
                        i,
                        o.AudioUtils.PodcastsLogs.ACTION_SEEK,
                        "",
                        t
                      ),
                      this.seek(e);
                  },
                }
              );
            this.ads.isPlaying() && a.toggleAdState(!0),
              vk.id || a.setBlocked(!0),
              this.on(e, O.events.AD_DEINITED, () => {}),
              this.on(e, O.events.AD_READY, () => {}),
              this.on(e, O.events.AD_STARTED, () => {
                a.toggleAdState(!0), a.setBackValue(0);
              }),
              this.on(e, O.events.AD_COMPLETED, () => a.toggleAdState(!1)),
              this.on(e, O.events.START_LOADING, () => a.toggleLoading(!0)),
              this.on(e, O.events.CAN_PLAY, () => a.toggleLoading(!1)),
              this.on(e, O.events.BUFFERED, (e, t) => a.setBackValue(t)),
              this.on(e, O.events.PROGRESS, (e, t) => {
                a.toggleLoading(!1), a.setValue(t);
              }),
              this.on(e, O.events.VOLUME, (e, t) => {
                s.setValue(t, !0);
              }),
              (0, f.data)(e, "player_inited", { sliders: [s, a] });
          }
        }
        hasStatusExport() {
          for (var e in this._statusExport)
            if (this._statusExport.hasOwnProperty(e) && this._statusExport[e])
              return !0;
          return !1;
        }
        getStatusExportInfo() {
          return this._statusExport;
        }
        setStatusExportInfo(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          (this._statusExport = e), t && this.setStatusExportInfoStorage(e);
        }
        setStatusExportInfoStorage(e) {
          Q._lsSet(Q.LS_STATUS_EXPORT, e);
        }
        deleteAudioFromAllPlaylists(e) {
          (e =
            (0, d.isObject)(e) || (0, d.isArray)(e)
              ? o.AudioUtils.audioTupleToAudioObject(e).fullId
              : e),
            (0, g.each)(this._playlists, (t, i) => i.removeAudio(e)),
            this.getPlaylistQueue().removeAudio(e);
        }
        updateAudio(e, t) {
          var i = "";
          return (
            (0, d.isString)(e)
              ? (i = e)
              : (0, d.isArray)(e) &&
                (i = o.AudioUtils.audioTupleToAudioObject(e).fullId),
            t || (t = e),
            (0, g.each)(this._playlists, (e, s) => {
              for (
                var a = s.getAudiosList(),
                  l = function (e, s) {
                    `${a[e][o.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID]}_${
                      a[e][o.AudioUtils.AUDIO_ITEM_INDEX_ID]
                    }` === i &&
                      ((0, d.isObject)(t) &&
                        (0, g.each)(t, (t, i) => (a[e][t] = i)),
                      (0, d.isArray)(t) && (a[e] = t));
                  },
                  r = 0,
                  _ = a.length;
                r < _;
                r++
              )
                l(r);
            }),
            `${this._currentAudio[o.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID]}_${
              this._currentAudio[o.AudioUtils.AUDIO_ITEM_INDEX_ID]
            }` === i &&
              ((0, d.isObject)(t) &&
                (0, g.each)(t, (e, t) => (this._currentAudio[e] = t)),
              (0, d.isArray)(t) &&
                ((this._currentAudio = t),
                this.notify(O.events.CURRENT_CHANGED))),
            this.notify(O.events.UPDATE),
            e
          );
        }
        _triggerTNSPixel() {
          var e = Q._lsGet("tns_triggered_time_v3") || 0,
            t = (0, d.vkNow)();
          t - e < 864e5 ||
            (Q._lsSet("tns_triggered_time_v3", t),
            ((0,
            d.vkImage)().src = `https://www.tns-counter.ru/V13a****mail_ru/ru/CP1251/tmsec=mail_audiostart/${(0,
            d.irand)(1, 1e9)}`));
        }
        _restoreVolumeState() {
          Q.clearDeprecatedCacheKeys(), Q.clearOutdatedCacheKeys();
          var e = Q._lsGet(Q.LS_VOLUME);
          this._userVolume = null == e || !1 === e ? b.DEFAULT_VOLUME : e;
        }
        restoreState() {
          if (
            !vk.widget &&
            (Q.clearDeprecatedCacheKeys(),
            Q.clearOutdatedCacheKeys(),
            !window.cur.audioPreventRestoreTrack)
          ) {
            this._currentAudio = Q._lsGet(Q.LS_TRACK);
            var e = Q._lsGet(Q.LS_PL);
            e &&
              ((e = JSON.parse(e)),
              this.getPlaylistQueue().setSortedQueue(e.list),
              (this._currentPlaylist = new y.AudioPlaylist(e)),
              this._initPlayingContext(e.context),
              e.originalPlaylistRawId &&
                (this._currentPlaylist._originalPlaylistRawId =
                  e.originalPlaylistRawId)),
              this._currentPlaylist && this._currentAudio
                ? this.notify(O.events.UPDATE)
                : (this._currentPlaylist = this._currentAudio = null);
            var t = 0;
            if (o.AudioUtils.isPodcast(this._currentAudio)) {
              var i = Q._podcastGetStates(),
                s = `${
                  this._currentAudio[o.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID]
                }_${this._currentAudio[o.AudioUtils.AUDIO_ITEM_INDEX_ID]}`;
              t =
                ((i[s] || {}).position || 0) /
                this._currentAudio[o.AudioUtils.AUDIO_ITEM_INDEX_DURATION];
            } else t = Q._lsGet(Q.LS_PROGRESS) || 0;
            this._currentAudio &&
              this._impl &&
              this._implSetUrl(this._currentAudio, !0)
                .then(() => {
                  t && t < 1
                    ? this.implTaskManager.seek(t)
                    : this.implTaskManager.setVolume(0),
                    this.notify(O.events.CURRENT_CHANGED);
                })
                .catch(() => {
                  this.deleteCurrentPlaylist(),
                    this.notify(O.events.CURRENT_CHANGED);
                }),
              this._updatePlaybackRate();
          }
        }
        _implPlay() {
          var e = o.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
          this.implTaskManager.play().then(() => {
            if (
              ((this._muteProgressEvents = !1),
              (this._allowPrefetchNext = !s.browser.safari),
              e.actionHash &&
                ((0, M.connectListenQueue)(),
                ajax.post(
                  "al_audio.php",
                  {
                    act: "start_playback",
                    audio_id: e.id,
                    owner_id: e.owner_id,
                    hash: e.actionHash,
                    uuid: Q.getDeviceId(),
                  },
                  { onFail: () => !0 }
                )),
              o.AudioUtils.isPodcast(e))
            ) {
              var t = this._podcastRestoreState();
              this._podcastUpdateState(
                e,
                t,
                0,
                o.AudioUtils.PodcastsLogs.ACTION_PLAY
              );
            }
          });
        }
        _implSetUrl(e, t) {
          this.implTaskManager.clearTask(L.TaskName.URL),
            t || this.notify(O.events.START_LOADING);
          var i = (0, T.audioTupleToAudioObject)(e);
          return this._ensureHasURL(i).then((e) => {
            if (e.url)
              return this.implTaskManager.setUrl(e.url).catch(() => {
                this.implTaskManager.clearAllTasks(),
                  this.notify(O.events.FAILED),
                  this.isPlaying() && (this.pause(), this.playNext(!0, !0));
              });
            throw new Error();
          });
        }
        toggleDurationType() {
          var e = Q.LS_PREFIX + Q.LS_DURATION_TYPE,
            t = (0, g.intval)(ls.get(e));
          ls.set(e, !t),
            this.notify(O.events.UPDATE, this.getCurrentProgress());
        }
        getCurrentProgress() {
          return this._impl ? this._impl.getCurrentProgress() : 0;
        }
        getCurrentBuffered() {
          return this._impl ? this._impl.getCurrentBuffered() : 0;
        }
        _initEvents() {
          var e = window.Notifier;
          e &&
            (e.addRecvClbk("audio_start", "audio", () => {
              (this.isPlaying() || this.ads.isPlaying()) &&
                ((this.pausedByAudio = Date.now()), this.pause()),
                delete this.pausedByVideo;
            }),
            e.addRecvClbk("video_start", "audio", () => {
              (this.isPlaying() || this.ads.isPlaying()) &&
                (this.pause(), (this.pausedByVideo = Date.now()));
            }),
            e.addRecvClbk("video_hide", "audio", () => {
              !this.isPlaying() &&
                this.pausedByVideo &&
                (Date.now() - this.pausedByVideo < 18e4 && this.play(),
                delete this.pausedByVideo);
            }),
            e.addRecvClbk("logged_off", "audio", () => {
              (cur.loggingOff = !0), Q.clearAllCacheKeys(), this.stop();
            }),
            e.addRecvClbk("stories_video_start", "audio", () => {
              this.isPlaying() &&
                (this.pause(), (this.pausedByStories = (0, d.vkNow)()));
            }),
            e.addRecvClbk("stories_video_end", "audio", () => {
              !this.isPlaying() &&
                this.pausedByStories &&
                ((0, d.vkNow)() - this.pausedByStories < 18e4 && this.play(),
                delete this.pausedByStories);
            }));
        }
        addPlaylist(e) {
          var t = this.hasPlaylist(e.getId());
          t ? t.mergeWith(e.asObject()) : this._playlists.push(e);
        }
        _cleanUpPlaylists() {
          for (var e = 0, t = -1, i = this._playlists.length - 1; i >= 0; i--) {
            var o = this._playlists[i];
            if (!o.isReference() && (e += o.getAudiosCount()) > 4e3) {
              t = i;
              break;
            }
          }
          if (-1 !== t) {
            t += 1;
            for (
              var s = this._playlists.slice(0, t),
                a = this.getCurrentPlaylist(),
                l = [],
                r = 0;
              r < s.length;
              r++
            ) {
              var d = s[r];
              if ((a === d && (d = !1), d && !d.isReference()))
                for (var n = t; n < this._playlists.length; n++) {
                  var u = this._playlists[n];
                  u.isReference() && u.getSelf() === d && (d = !1);
                }
              d && l.push(r);
            }
            for (var c = 0; c < l.length; c++) {
              var h = l[c];
              this._playlists.splice(h, 1);
            }
            l.length &&
              (0, _.debugLog)(
                "AudioPlayer - " + l.length + " playlists removed"
              );
          }
        }
        hasPlaylist(e, t, i, o) {
          var s;
          if (o)
            return (
              this._playlists.find(
                (e) => e.getBlockId() === o || e.getAlbumId() === o
              ) || !1
            );
          s = void 0 !== t && void 0 !== i ? `${e}_${t}_${i}` : e;
          for (var a = 0; a < this._playlists.length; a++) {
            var l = this._playlists[a];
            if (!l.isReference() && l.getId() === s) return l;
          }
          return !1;
        }
        getPlaylistByBlockId(e) {
          return this.hasPlaylist(null, null, null, e) || null;
        }
        getPlaylistsByType(e) {
          return this._playlists.filter((t) => t.getType() === e) || null;
        }
        getPlaylist(e, t, i, o) {
          var s =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
          if (e && !t && !i) {
            var a = F(y.AudioPlaylist.splitId(e), 3);
            (e = a[0]), (t = a[1]), (i = a[2]);
          }
          var l = this.hasPlaylist(e, t, i, s);
          return l
            ? (l.mergeWith({ accessHash: o }), l)
            : new y.AudioPlaylist({
                type: e,
                ownerId: t,
                albumId: i,
                hasMore: e !== y.AudioPlaylist.TYPE_TEMP,
                accessHash: o,
                blockId: s,
              });
        }
        getPlaylistQueue() {
          return this._playlistQueue;
        }
        isFromNextSequence() {
          return 1 === this._seq;
        }
        isFromPrevSequence() {
          return -1 === this._seq;
        }
        isAutoPlayed() {
          return !!this._autoNext;
        }
        hasPrevAudio() {
          return !(
            !this._prevAudio ||
            o.AudioUtils.getAudioFullId(this._currentAudio) ===
              o.AudioUtils.getAudioFullId(this._prevAudio)
          );
        }
        hasPrevPlaylist() {
          return !!this._prevPlaylist;
        }
        toggleRepeatCurrentAudio() {
          (this._repeatCurrent = !this._repeatCurrent), (this._repeatAll = !1);
        }
        isRepeatCurrentAudio() {
          return !!this._repeatCurrent;
        }
        toggleRepeatAll() {
          (this._repeatAll = !this._repeatAll), (this._repeatCurrent = !1);
        }
        isRepeatAll() {
          return !!this._repeatAll;
        }
        setNext(e, t) {
          if (vk && vk.widget && !vk.id && window.Widgets)
            return Widgets.oauth(), !1;
          var i = "audio_row__added_next";
          if (!(0, f.hasClass)(e, i)) {
            (0, f.addClass)(e, i);
            var s = this.getCurrentPlaylist(),
              a = this.getPlaylistQueue();
            if (s) {
              var l = o.AudioUtils.audioTupleToAudioObject(
                this.getCurrentAudio()
              );
              if (l && t.fullId === l.fullId) return;
              var r = a.indexOfAudio(l);
              if (-1 === r) return;
              this.notify(O.events.PLAY_NEXT, l.fullId, t.fullId);
              var _ = this.getPlaylistQueue(),
                d = a.indexOfAudio(t);
              -1 !== d
                ? _.moveAudio(d, r + 1)
                : (_.addAudio((0, R.serializeAudio)(t), r + 1),
                  this.getCurrentPlaylist().pushAudio(
                    (0, R.serializeAudio)(t),
                    r + 1
                  ));
            } else {
              var n = o.AudioUtils.getContextPlaylist(e);
              this.play(t, n.playlist, n.context);
            }
            var u = window.AudioPage && window.currentAudioPage(e);
            if (u) {
              var c = u.getPageCurrentPlaylist();
              c && u.onUserAction(t, c);
            }
          }
        }
        on(e, t, i) {
          (0, d.isArray)(t) || (t = [t]),
            (0, g.each)(t, (t, o) =>
              this.subscribers.push({ context: e, et: o, cb: i })
            );
        }
        off(e) {
          this.subscribers = this.subscribers.filter((t) => t.context !== e);
        }
        connectEvents() {
          var e = this;
          (this.eventBus.precheck = (e) =>
            !!this._impl &&
            !(
              !this.ads.isPlaying() &&
              this._muteProgressEvents &&
              (0, g.inArray)(e, [O.events.BUFFERED, O.events.PROGRESS])
            )),
            (this.eventBus.onAnyCallBack = function (t) {
              for (
                var i = arguments.length,
                  o = new Array(i > 1 ? i - 1 : 0),
                  s = 1;
                s < i;
                s++
              )
                o[s - 1] = arguments[s];
              return e.onEvent(t, ...o);
            }),
            this.subscribe(O.events.VOLUME, () =>
              Q._lsSet(Q.LS_VOLUME, this._userVolume)
            ),
            this.subscribe(O.events.PLAY_REQUESTED, () => {
              this.updateCurrentPlaying(!0),
                this.saveStateCurrentPlaylist(),
                this._saveStateCurrentAudio(),
                Q._setTabIcon("play"),
                this._sendStatusExport();
            }),
            this.subscribe(O.events.PLAY, () => this.updateCurrentPlaying(!0)),
            this.subscribe(O.events.PLAYLIST_CHANGED, () => {
              this.saveStateCurrentPlaylist(), this._saveStateCurrentAudio();
            }),
            this.subscribe(O.events.PROGRESS, (e, t, i) => {
              var s = this.getCurrentAudio(),
                a = this.getPlaylistQueue(),
                l = (0, T.audioTupleToAudioObject)(s);
              if (((this._listenedTime = i), o.AudioUtils.isPodcast(l)))
                e &&
                  i &&
                  this._podcastUpdateState(
                    l,
                    e,
                    i,
                    o.AudioUtils.PodcastsLogs.ACTION_HEARTBEAT
                  );
              else if (!this.ads.isPlaying()) {
                var r = this._impl.getCurrentProgress();
                vk.widget || Q._lsSet(Q.LS_PROGRESS, r),
                  !vk.widget &&
                    this._allowPrefetchNext &&
                    r >= 0.8 &&
                    a.getNextAudio(s).then((e) => {
                      e &&
                        this._impl.isFullyLoaded() &&
                        ((this._allowPrefetchNext = !1),
                        this._prefetchAudio(e));
                    });
              }
            }),
            this.subscribe(O.events.PAUSE, () => {
              this.updateCurrentPlaying(!0);
              var e = this.getCurrentAudio(),
                t = (0, T.audioTupleToAudioObject)(e);
              o.AudioUtils.isPodcast(t) &&
                this._podcastUpdateState(
                  t,
                  this.getCurrentProgress(),
                  this._impl.getPlayedTime(),
                  o.AudioUtils.PodcastsLogs.ACTION_PAUSE
                ),
                Q._setTabIcon("pause");
            }),
            this.subscribe(O.events.SEEK, () => {
              var e = this.getCurrentAudio(),
                t = (0, T.audioTupleToAudioObject)(e);
              o.AudioUtils.isPodcast(t) &&
                this._podcastUpdateState(
                  t,
                  this.getCurrentProgress(),
                  this._impl.getPlayedTime(),
                  o.AudioUtils.PodcastsLogs.ACTION_SEEK
                );
            }),
            this.subscribe(O.events.ENDED, () => {
              var e = this.getCurrentAudio(),
                t = (0, T.audioTupleToAudioObject)(e);
              o.AudioUtils.isPodcast(t) &&
                this._podcastUpdateState(
                  t,
                  this.getCurrentProgress(),
                  this._impl.getPlayedTime(),
                  o.AudioUtils.PodcastsLogs.ACTION_HEARTBEAT
                ),
                window.vk &&
                  !window.vk.widget &&
                  !window.vk.id &&
                  (0, B.partConfigEnabled)("audio_unauth_preview_box") &&
                  (this.stop(),
                  N.Unauthorized.showMoreBox(
                    null,
                    0,
                    k.UnauthorizedSourceType.AUDIO
                  ));
            });
        }
        subscribe(e, t) {
          this.eventBus.subscribe(e, t);
        }
        unsubscribe(e, t) {
          this.eventBus.unsubscribe(e, t);
        }
        onEvent(e, t, i, o) {
          (0, g.inArray)(e, [
            O.events.PLAY,
            O.events.PLAY_REQUESTED,
            O.events.PAUSE,
          ]) &&
            (this.subscribers = this.subscribers.filter(
              (e) =>
                !(e.context instanceof Element) || bodyNode.contains(e.context)
            )),
            (0, g.each)(this.subscribers || [], (s, a) => {
              a.et === e && a.cb(this.getCurrentAudio(), t, i, o);
            });
        }
        notify(e) {
          for (
            var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            i[o - 1] = arguments[o];
          this.eventBus.emit(e, ...i);
        }
        addWithReplacePlaylists(e) {
          var t = e.reduce((e, t) => ((e[t.getFullId()] = t), e), {}),
            i = {};
          this._playlists.forEach((e, o) => {
            var s = e.getFullId();
            t[s] && ((this._playlists[o] = t[s]), (i[s] = !0));
          }),
            t.forEach((e) => {
              i[e.getFullId()] || this._playlists.push(e);
            });
        }
        _sendPlayerErrorStats(e) {
          var t = o.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
          if (t) {
            var i = t.full_id,
              s = (0, g.extend)(
                {
                  audio: i,
                  progress: this.getCurrentProgress(),
                  buffered: this.getCurrentBuffered(),
                },
                e.getErrorData()
              );
            ajax.post("al_audio.php?act=player_error_stats", s);
          }
        }
        playLive(e, t) {
          var i = this.getPlaylist(y.AudioPlaylist.TYPE_LIVE, vk.id, f.data[0]),
            o = this.getPlaylistQueue();
          i.mergeWith({ live: e, hasMore: !1 }),
            (e = i.getLiveInfo()),
            ajax.post(
              "al_audio.php",
              {
                act: "a_play_audio_status",
                audio_id: e.audioId,
                host_id: e.hostId,
                hash: e.hash,
              },
              (0, g.extend)(t, {
                onDone: (e, t, s) => {
                  i.mergeWith({ title: t && t.title, list: [e] }),
                    o.addAudio(e),
                    this.play(e, i, s);
                },
                onFail: () => !0,
              })
            );
        }
        _listenStatusExport() {
          window.addEventListener("storage", (e) => {
            if (e.key === Q.LS_PREFIX + Q.LS_STATUS_EXPORT) {
              var t = Q._lsGet(Q.LS_STATUS_EXPORT);
              this.setStatusExportInfo(t),
                cur.audioPage && cur.audioPage.updateStatusExportControls();
            }
          });
        }
        _sendStatusExport() {
          var e = o.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
          if (e) {
            var t = this.statusSent ? this.statusSent.split(",") : [!1, 0],
              i = (0, d.vkNow)() - (0, g.intval)(t[1]);
            if (
              this.hasStatusExport() &&
              !o.AudioUtils.isPodcast(e) &&
              (e.id != t[0] || i > 3e5)
            ) {
              var s = this.getCurrentPlaylist(),
                a = s ? s.playbackParams : null;
              setTimeout(
                ajax.post.pbind(
                  "al_audio.php",
                  {
                    act: "audio_status",
                    full_id: e.fullId,
                    hash: vk.statusExportHash,
                    top: (0, g.intval)(a && (a.top_audio || a.top)),
                  },
                  { onFail: () => !0 }
                ),
                0
              ),
                (this.statusSent = e.id + "," + (0, d.vkNow)());
            }
          }
        }
        saveStateCurrentPlaylist() {
          var e = this.getCurrentPlaylist(),
            t = this.getPlaylistQueue();
          if (!vk.widget && e && t) {
            var i = this._getPreparePlayQueueForSaving(e, t);
            Q._lsSet(Q.LS_PL, i), Q._lsSet(Q.LS_SAVED, (0, d.vkNow)());
          }
        }
        _getPreparePlayQueueForSaving(e, t) {
          var i = e.asObject(),
            s = this.getCurrentAudio(),
            a = Math.max(0, t.indexOfAudio(s)),
            l = K({}, i, {
              list: (0, g.clone)(
                t.getQueue().slice(Math.max(0, a - 100), a + 300),
                !0
              ),
            });
          return (
            (0, g.each)(l.list, function (e, t) {
              t[o.AudioUtils.AUDIO_ITEM_INDEX_URL] = "";
            }),
            JSON.stringify(l)
          );
        }
        _saveStateCurrentAudio() {
          if (!vk.widget) {
            var e = this.getCurrentAudio();
            if (e) {
              var t = (0, g.clone)(e);
              (t[o.AudioUtils.AUDIO_ITEM_INDEX_URL] = ""),
                Q._lsSet(Q.LS_TRACK, t),
                (0, A.setCookie)(
                  "remixcurr_audio",
                  `${e[o.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID]}_${
                    e[o.AudioUtils.AUDIO_ITEM_INDEX_ID]
                  }`,
                  1
                );
            } else
              Q._lsSet(Q.LS_TRACK, null),
                (0, A.setCookie)("remixcurr_audio", null, 1);
          }
        }
        getListenedTime() {
          return this._listenedTime;
        }
        seekCurrentAudio(e, t) {
          if (this.ads.isPlaying()) return !1;
          var i =
              (t = t || 10) /
              o.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio())
                .duration,
            s = this.getCurrentProgress() + (e ? i : -i);
          (s = Math.max(0, Math.min(1, s))), this.seek(s);
        }
        setVolume(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = Math.min(1, Math.max(0, e));
          this._userVolume !== i &&
            ((this._userVolume = i), this.notify(O.events.VOLUME, i)),
            this.implTaskManager.setVolume(i, t),
            this.ads.updateVolume();
        }
        getVolume() {
          return void 0 === this._userVolume ? 0.8 : this._userVolume;
        }
        seek(e) {
          this.implTaskManager.seek(e), this.notify(O.events.SEEK);
        }
        seekToTime(e, t) {
          var i = this.getCurrentAudio();
          if (!i) return 0;
          var s = e / i[o.AudioUtils.AUDIO_ITEM_INDEX_DURATION];
          if (
            ((s = Math.max(0, s)),
            (s = Math.min(s, 1)),
            this.seek(s),
            o.AudioUtils.isPodcast(i))
          ) {
            var a = "",
              l = o.AudioUtils.audioTupleToAudioObject(i);
            t &&
              ((a = o.AudioUtils.PodcastsLogs.ACTION_TIME_MARKER),
              this.podcastSetActionRef(
                l,
                o.AudioUtils.PodcastsLogs.ACTION_SEEK,
                t
              )),
              this._podcastUpdateState(l, s, 0, a);
          }
          return s;
        }
        _ensureHasURL(e) {
          this._currentUrlEnsure = this._currentUrlEnsure || {};
          var t = [];
          if (!e) return Promise.reject();
          if (e.url) return Promise.resolve(e);
          var i = this.getPlaylistQueue(),
            s = i.indexOfAudio(e);
          return s >= 0
            ? i
                .getAudioAt(s)
                .then((e) => o.AudioUtils.audioTupleToAudioObject(e))
            : (this._currentUrlEnsure[e.fullId] ||
                t.push(e.fullId + "_" + e.actionHash + "_" + e.urlHash),
              (() => {
                var i;
                return (
                  !t.length && this.currentEnsureUrlPromise
                    ? (i = this.currentEnsureUrlPromise)
                    : ((i = new Promise((e, i) => {
                        this.ensureUrlReject && this.ensureUrlReject(),
                          (this.ensureUrlReject = i),
                          X()
                            .then(() => this.fetchAudioUrls(t))
                            .then((t) => {
                              (this.ensureUrlReject = null), e(t);
                            })
                            .catch((o) => {
                              switch (o) {
                                case "bad_hash":
                                  (this.ensureUrlReject = null),
                                    this.fetchAudios(t)
                                      .then((e) => this.fetchAudioUrls(e))
                                      .then(e)
                                      .catch(() => !0);
                                  break;
                                case "no_audios":
                                  (this.ensureUrlReject = null), i();
                              }
                              return !0;
                            });
                      })),
                      (this.currentEnsureUrlPromise = i)),
                  i.then(
                    (t) => (
                      Array.isArray(t) &&
                        t.forEach((t) => {
                          if (e.fullId === (0, x.getAudioFullId)(t)) {
                            var i = (0, T.audioTupleToAudioObject)(t);
                            (e.url = i.url),
                              (e.ads = i.ads),
                              (e.flags = i.flags),
                              (e.extra = i.extra);
                          }
                        }),
                      e
                    )
                  )
                );
              })());
        }
        fetchAudioUrls(e) {
          return new Promise((t, i) => {
            ajax.post(
              "al_audio.php?act=reload_audio",
              { ids: e.join(",") },
              {
                onDone: (e, i, s, a) => {
                  this.setStatusExportInfo(i),
                    (this._listenedHash = s),
                    a && this._podcastSaveData(a),
                    (0, g.each)(e, (e, t) => {
                      t = o.AudioUtils.audioTupleToAudioObject(t);
                      var i = {};
                      (i[o.AudioUtils.AUDIO_ITEM_INDEX_URL] = t.url),
                        (i[o.AudioUtils.AUDIO_ITEM_INDEX_ADS] = t.ads),
                        (i[o.AudioUtils.AUDIO_ITEM_INDEX_FLAGS] = t.flags),
                        (i[o.AudioUtils.AUDIO_ITEM_INDEX_EXTRA] = t.extra),
                        this.updateAudio(t.fullId, i),
                        this._currentAudio &&
                          (0, x.getAudioFullId)(this._currentAudio) ===
                            t.fullId &&
                          ((this._currentAudio[
                            o.AudioUtils.AUDIO_ITEM_INDEX_URL
                          ] = t.url),
                          (this._currentAudio[
                            o.AudioUtils.AUDIO_ITEM_INDEX_ADS
                          ] = t.ads),
                          (this._currentAudio[
                            o.AudioUtils.AUDIO_ITEM_INDEX_FLAGS
                          ] = t.flags),
                          (this._currentAudio[
                            o.AudioUtils.AUDIO_ITEM_INDEX_EXTRA
                          ] = t.extra)),
                        delete this._currentUrlEnsure[t.fullId];
                    }),
                    t(e);
                },
                onFail: (e) => (i(e), !0),
              }
            );
          });
        }
        fetchAudios(e) {
          return new Promise((t, i) => {
            ajax.post(
              "al_audio.php?act=reload_audios",
              { audio_ids: e.join(",") },
              {
                onDone: (e) => {
                  var o = [],
                    s = this.getCurrentPlaylist().getAudiosList();
                  if (Array.isArray(e)) {
                    for (
                      var a = e.reduce(
                          (e, t) => ((e[(0, x.getAudioFullId)(t)] = t), e),
                          {}
                        ),
                        l = 0;
                      l < s.length;
                      l++
                    ) {
                      var r = (0, x.getAudioFullId)(s[l]);
                      if (a[r]) {
                        s[l] = a[r];
                        var _ = (0, T.audioTupleToAudioObject)(a[r]);
                        o.push(`${_.fullId}_${_.actionHash}_${_.urlHash}`);
                      }
                    }
                    t(o);
                  } else i();
                },
              }
            );
          });
        }
        toggleAudio(e, t) {
          if (
            vk &&
            vk.widget &&
            window.Widgets &&
            !vk.widgetPodcast &&
            !vk.id &&
            !(0, B.partConfigEnabled)("audio_unauth_preview")
          )
            return Widgets.oauth(), !1;
          if ((0, f.domClosest)("_audio_row__tt", t.target))
            return (0, c.cancelEvent)(t);
          var i = (0, f.domClosest)("_audio_row", e),
            s = o.AudioUtils.getAudioFromEl(i, !0);
          if (window.getSelection && window.getSelection().rangeCount) {
            var a = window.getSelection().getRangeAt(0);
            if (a) {
              var r = a.commonAncestorContainer;
              if (
                r &&
                (0, f.domClosest)("_audio_row", r) === i &&
                a.startOffset !== a.endOffset
              )
                return !1;
            }
          }
          if (t && (0, f.hasClass)(t.target, "mem_link"))
            return (
              nav.go((0, f.attr)(t.target, "href"), t, {
                navigateToUploader: !0,
              }),
              (0, c.cancelEvent)(t)
            );
          if ((0, f.hasClass)(t.target, "_audio_row__title_inner")) {
            if (o.AudioUtils.isPodcast(s))
              return (0, l.showPodcast)(i, s.fullId), (0, c.cancelEvent)(t);
            if (s.lyrics && !s.isInAttach)
              return (
                o.AudioUtils.toggleAudioLyrics(i, s), (0, c.cancelEvent)(t)
              );
            if (s.hasTrackPage && !s.isClaimed) return;
            (0, c.cancelEvent)(t);
          }
          if ((0, f.hasClass)(t.target.parentNode, "audio_row__performers")) {
            if ((0, c.checkEvent)(t) || vk.widget) return !0;
            if (!(0, f.gpeByClass)("_ape_audio_item", t.target)) {
              var _ = (0, f.domData)(t.target, "performer");
              if (_)
                return (
                  o.AudioUtils.audioSearchPerformer(t.target, _, t),
                  (0, c.cancelEvent)(t)
                );
            }
            return !0;
          }
          var d =
              cur.cancelClick ||
              (t &&
                ((0, f.hasClass)(t.target, "audio_lyrics") ||
                  (0, f.domClosest)("_audio_duration_wrap", t.target) ||
                  (0, f.domClosest)("_audio_inline_player", t.target) ||
                  (0, f.domClosest)("audio_performer", t.target))),
            n =
              (0, f.hasClass)(t.target, "slider") ||
              (0, f.domClosest)("slider", t.target),
            u =
              cur._sliderMouseUpNowEl &&
              (cur._sliderMouseUpNowEl ===
                (0, f.geByClass1)("audio_inline_player_progress", i) ||
                cur._sliderMouseUpNowEl ===
                  (0, f.geByClass1)("audio_inline_player_volume", i));
          if (
            ((n || u) && (d = !0),
            delete cur.cancelClick,
            delete cur._sliderMouseUpNowEl,
            d)
          )
            return !0;
          if (o.AudioUtils.isClaimedAudio(s) || s.isReplaceable) {
            var h = o.AudioUtils.getAudioExtra(s).claim;
            if (h)
              return void (
                (0, f.hasClass)(i, "no_actions") ||
                s.isInEditBox ||
                showAudioClaimWarning(
                  s,
                  h,
                  o.AudioUtils.replaceWithOriginal.bind(o.AudioUtils, i, s)
                )
              );
          }
          if (
            (this.podcastSetActionRef(
              s,
              s.isPlaying
                ? o.AudioUtils.PodcastsLogs.ACTION_PAUSE
                : o.AudioUtils.PodcastsLogs.ACTION_PLAY,
              "",
              i
            ),
            s.isPlaying)
          )
            this.pause();
          else {
            var p = o.AudioUtils.getContextPlaylist(i);
            if (this.getPlaylistQueue().isShuffled() && window.AudioPage) {
              var A = window.currentAudioPage(e),
                g = A && A.getCurrentSection();
              (!A ||
                !(
                  g &&
                  "current" === g &&
                  "placeholder_audios_wrapper" === p.context
                )) &&
                this.getPlaylistQueue().resetShuffle();
            }
            this.play(s.fullId, p.playlist, s.context || p.context),
              cur.audioPage && cur.audioPage.onUserAction(s, p.playlist);
          }
          o.AudioUtils.onRowOver(i, !1, !0);
        }
        playNextPlaylist(e, t, i) {
          var o = this.getPlaylist(y.AudioPlaylist.TYPE_PLAYLIST, e, t, i);
          o.loadAll(() => {
            var e = this.getCurrentPlaylist(),
              t = this.getPlaylistQueue();
            e
              ? (e.pushAudio(o.getAudiosList()), t.addPlaylist(o))
              : (t.addPlaylist(o),
                (this._currentPlaylist = new y.AudioPlaylist(o)),
                t.getAudioAt(0).then((e) => {
                  e &&
                    ((this._currentAudio = e),
                    this.notify(O.events.UPDATE),
                    this.notify(O.events.PLAYLIST_CHANGED),
                    this.updateCurrentPlaying(),
                    this.isPlaying() || this.play(e.fullId, o));
                })),
              boxQueue && boxQueue.hideAll(),
              layers && layers.fullhide && layers.fullhide();
          });
        }
        playPlaylist(e, t, i, o, s) {
          if (
            vk &&
            vk.widget &&
            !vk.id &&
            window.Widgets &&
            !(0, B.partConfigEnabled)("audio_unauth_preview")
          )
            return Widgets.oauth(), !1;
          this.playNextInPlaylist(e, t, i, o, {
            shuffled: s,
            preDoPlay: (e) => {
              s &&
                (e.isShuffled() && e.resetShuffle(),
                e.shuffle(!0, !0),
                cur.audioPage && cur.audioPage.updateShuffleButton());
            },
          });
        }
        playBlock(e, t, i, o, s) {
          var a =
            arguments.length > 5 && void 0 !== arguments[5]
              ? arguments[5]
              : "default";
          this.playNextInPlaylist(e, t, i, o, {
            type: s,
            trackType: a,
            shuffled: !1,
          });
        }
        playNextInPlaylist(e, t, i, o) {
          var s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {},
            a = this.getCurrentPlaylist(),
            l = this.getPlaylist(
              s.type || y.AudioPlaylist.TYPE_PLAYLIST,
              e,
              t,
              i
            ),
            r = this.getPlaylistQueue();
          if (
            (l.setContext(o),
            a && a.getId() === l.getId() && this.isPlaying() && !s.shuffled)
          )
            this.pause();
          else {
            var _ = !1,
              d = () => {
                _ ||
                  (r.setSortedQueue(l.getAudiosList()),
                  (_ = !0),
                  s.shuffled && (this._currentPlaylist = l),
                  s.preDoPlay && s.preDoPlay(r),
                  r.getNextAudio(null, !0).then((e) => {
                    e && this.play(e, l, o);
                  }));
              };
            if (l.getAudiosCount() && !s.shuffled && !l.isExpired())
              return void d();
            this._impl &&
              this._impl.preparePlay &&
              !this.ads.isPlaying() &&
              this._impl.preparePlay(),
              l.load(0, d, null, s.trackType);
          }
        }
        _initPlayingContext(e) {
          this._playingContext = e;
        }
        getListenedHash() {
          return this._listenedHash || "";
        }
        _getPlayingContext() {
          return this._playingContext || "";
        }
        _getPlayingContextSection() {
          return this._getPlayingContext().split(":")[0];
        }
        play(e, t, i, s, a) {
          if (!cur.loggingOff && this._impl) {
            var l;
            (this._seq = s),
              (this._autoNext = a),
              (this._prevAudio = this._currentAudio),
              ((0, d.isObject)(e) || (0, d.isArray)(e)) &&
                ((l = e),
                (e = o.AudioUtils.audioTupleToAudioObject(e)) &&
                  (e = e.fullId));
            var r = this.getPlaylistQueue(),
              n = o.AudioUtils.audioTupleToAudioObject(this._currentAudio),
              u = this.getCurrentPlaylist();
            !e && n && (e = n.fullId);
            var c = !1,
              h = e && n && e == n.fullId;
            if (
              (t
                ? u &&
                  (c = h
                    ? t.getFullId() === u.getSelf().getFullId()
                    : t === u.getSelf() || t === u)
                : ((t = u), (c = !0)),
              c ||
                i ||
                (0, _.debugLog)("New playlist play init without context"),
              i &&
                ((this._prevContext = this._playingContext),
                this._initPlayingContext(i)),
              !c)
            ) {
              this._cleanUpPlaylists(),
                this._currentPlaylist &&
                  ((this._prevPlaylist = this._currentPlaylist),
                  (this._prevAudio = this._currentAudio)),
                (this._currentPlaylist = new y.AudioPlaylist(t));
              var p = this.getCurrentPlaylist().getAudiosList();
              p.length && r.setSortedQueue(p),
                this.notify(O.events.PLAYLIST_CHANGED);
            }
            if (!(r.indexOfAudio(e) >= 0)) {
              var A = t.getAudio(e);
              !A && l && (A = l), r.addAudio(A);
            }
            r.getAudio(e).then((i) => {
              h ||
                (i && t && r.addPlaylist(t),
                t &&
                  t.getType() === y.AudioPlaylist.TYPE_SEARCH &&
                  t.indexOfAudio(i) >= t.getLocalFoundCount() &&
                  t.sendSearchStats("search_play"),
                n &&
                  o.AudioUtils.isPodcast(n) &&
                  this.isPlaying() &&
                  this._podcastUpdateState(
                    n,
                    this.getCurrentProgress(),
                    this._impl.getPlayedTime(),
                    o.AudioUtils.PodcastsLogs.ACTION_PAUSE,
                    { needResetListen: !0 }
                  ),
                this.ads.isPlaying() || this.ads.deinit()),
                Q._sendLCNotification(),
                h
                  ? this.ads.isPlaying()
                    ? this.ads.resume()
                    : this.isPlaying() ||
                      (this.setIsPlaying(!0),
                      this.implTaskManager.clearAllTasks(),
                      this._implSetUrl(n)
                        .then(() => {
                          this._implPlay(),
                            this._updatePlaybackRate(),
                            this.implTaskManager.setVolume(
                              this.getVolume(),
                              !!this._impl.getCurrentProgress()
                            ),
                            o.AudioUtils.isPodcast(i) &&
                              this._podcastUpdateState(
                                o.AudioUtils.audioTupleToAudioObject(i),
                                this.getCurrentProgress(),
                                this._impl.getPlayedTime()
                              );
                        })
                        .catch(() => {}))
                  : e &&
                    i &&
                    (!a && n && this._impl.setUrl(b.SILENCE),
                    (this._currentAudio = i),
                    this.setIsPlaying(!0),
                    this.ads.isPlaying()
                      ? this.ads.resume()
                      : (this.notify(
                          O.events.PLAY_REQUESTED,
                          !0,
                          (0, g.intval)(s),
                          a
                        ),
                        (this._muteProgressEvents = !0),
                        this.implTaskManager.clearAllTasks(),
                        this._impl.preparePlay && this._impl.preparePlay(),
                        this.ads.startPlay(
                          o.AudioUtils.audioTupleToAudioObject(i),
                          () => this.playAfterAd()
                        ),
                        this.notify(O.events.PROGRESS, 0)),
                    this.updateCurrentPlaying(!0),
                    n && this.scrollToCurrentPlaying(n.fullId, e));
            });
          }
        }
        playAfterAd() {
          this.notify(O.events.CURRENT_CHANGED);
          var e = this.getCurrentAudio();
          e &&
            (this.notify(O.events.UPDATE),
            this._implSetUrl(e)
              .then(() => {
                this._implPlay(),
                  this._updatePlaybackRate(),
                  vk.id
                    ? this.implTaskManager.setVolume(this.getVolume())
                    : this.fadeIn(1e3 * Q.UNAUTH_FADE_TIME),
                  this._triggerTNSPixel();
              })
              .catch(() => (this.pause(), !0)));
        }
        instantPlay(e, t, i) {
          var o = !s.browser.safari && t && t.shiftKey;
          this.playPlaylist(
            vk.id,
            y.AudioPlaylist.DEFAULT_PLAYLIST_ID,
            i,
            "header",
            o
          ),
            (0, u.statlogsValueEvent)(
              "client_header_play_button",
              o ? "shuffle" : "play"
            ),
            setTimeout(() => {
              (0, f.addClass)(e, "loading");
            }, 400);
        }
        _prefetchAudio(e) {
          (e = o.AudioUtils.audioTupleToAudioObject(e)) &&
            e.url &&
            this._impl.prefetch(e.url);
        }
        getCurrentPlaylist() {
          return this._currentPlaylist;
        }
        getPlaylists() {
          return (0, g.clone)(this._playlists);
        }
        pause() {
          this.ads.isPlaying() && setTimeout(() => this.ads.pause(), 100),
            this.implTaskManager.setVolume(0, !0),
            this.implTaskManager.pause();
        }
        stop() {
          this.setIsPlaying(!1),
            this.ads.isPlaying() ? this.ads.stop() : this._impl.stop(),
            this.notify(O.events.STOP);
        }
        isPlaying() {
          return this._isPlaying;
        }
        setIsPlaying(e) {
          this._isPlaying = e;
        }
        getCurrentAudio() {
          return this._currentAudio;
        }
        playNext(e) {
          this._playNext(1, e);
        }
        playPrev() {
          this._playNext(-1);
        }
        _playNext(e, t) {
          if (!this.ads.isPlaying()) {
            var i = this.getCurrentAudio(),
              s = this.getCurrentPlaylist(),
              a = this.getPlaylistQueue(),
              l = (e, i) => {
                o.AudioUtils.isClaimedAudio(e) || this.play(e, s, !1, i, t);
              };
            if (i && s)
              if (e > 0) {
                var r = a.indexOfAudio(i) + 1,
                  _ = r + 10;
                a.getAudios(r, _).then((e) => {
                  var t = null;
                  if (e) {
                    t = e[0];
                    for (
                      var r = 0;
                      r <= 10 && t && o.AudioUtils.isClaimedAudio(t);

                    )
                      (t = e[r]), r++;
                  }
                  if (t) l(t, 1);
                  else if (s.isLive())
                    (this._muteProgressEvents = !0),
                      s.fetchNextLiveAudio((e) => {
                        if (e) {
                          var t = this.getPlaylistQueue(),
                            i = t.indexOfAudio(e);
                          i >= 0
                            ? t.moveAudio(i, t.getAudiosCount() - 1)
                            : t.addAudio(e);
                        }
                        l(e);
                      });
                  else {
                    a.getAudios(0, 30).then((e) => {
                      if (e) {
                        if (
                          ((t = e.find((e) => !o.AudioUtils.isClaimedAudio(e))),
                          !this.isRepeatAll())
                        )
                          if (a.indexOfAudio(i) + 1 === a.getAudiosCount())
                            return (
                              this.implTaskManager.seekImmediate(0),
                              this.stop(),
                              void (
                                o.AudioUtils.isClaimedAudio(t) ||
                                ((this._currentAudio = t),
                                this._implSetUrl(this._currentAudio),
                                this.updateCurrentPlaying(!0),
                                this.notify(O.events.CURRENT_CHANGED),
                                this.notify(O.events.UPDATE))
                              )
                            );
                        l(t, 1);
                      }
                    });
                  }
                });
              } else {
                var d = a.indexOfAudio(this._currentAudio);
                if (d < 1 || this._impl.getCurrentTime() > 5) this.seek(0);
                else {
                  var n = d - 1,
                    u = n - 10;
                  a.getAudios(u, n).then((e) => {
                    var t = null;
                    if (e)
                      for (
                        t = e[(n = e.length - 1)];
                        n >= 0 && t && o.AudioUtils.isClaimedAudio(t);

                      )
                        t = e[--n];
                    t ? l(t, -1) : this.seek(0);
                  });
                }
              }
          }
        }
        adsGetCurrentProgress() {
          return this.ads.getCurrentProgress();
        }
        _podcastUpdateState(e, t, i, o, s) {
          var a = Q._podcastGetStates(),
            l = Math.round(e.duration * t);
          (a[e.fullId] = { t: (0, d.vkNow)(), position: l }),
            Q._podcastSetStates(a),
            o && this._podcastSendLogs(o, e, i, l, s);
        }
        _podcastSendLogs(e, t, i, s, a) {
          if (
            t &&
            e &&
            o.AudioUtils.isPodcast(t) &&
            (!cur._podcastsActionId ||
              !cur._podcastsActionId[e] ||
              this._podcastsActionLastId[e] !== cur._podcastsActionId[e])
          ) {
            var l = this._podcastsActionRef[t.fullId] || {},
              r = l[e] || {};
            o.AudioUtils.PodcastsLogs.log(
              e,
              (0, g.extend)({ audio: t, position: s, listen: i }, r, a || {})
            ),
              delete l[e],
              (this._podcastsActionLastId[e] = cur._podcastsActionId
                ? cur._podcastsActionId[e]
                : null);
          }
        }
        podcastSetActionRef(e, t, i, s) {
          (e = o.AudioUtils.audioTupleToAudioObject(e)),
            t &&
              o.AudioUtils.isPodcast(e) &&
              ((this._podcastsActionRef[e.fullId] =
                this._podcastsActionRef[e.fullId] || {}),
              (this._podcastsActionRef[e.fullId][t] = { ref: i, refEl: s }),
              (cur._podcastsActionId = cur._podcastsActionId || {}),
              (cur._podcastsActionId[t] = (0, d.irand)(0, 1e6)));
        }
        _podcastCleanStates() {
          var e = Q._podcastGetStates(),
            t = !1;
          return (
            (0, g.each)(e, (i, o) => {
              Date.now() - o.t > 2419200 && (delete e[i], (t = !0));
            }),
            t && Q._podcastSetStates(e),
            e
          );
        }
        _podcastSaveData(e) {
          var t = Q._podcastGetStates();
          (0, g.each)(e, (e, i) => {
            var o = i.state;
            if (o) {
              var s = +o[1];
              (!t[e] || !t[e][1] || (s && s > t[e][1])) &&
                (t[e] = { position: +o[0], t: Date.now() });
            }
          }),
            Q._podcastSetStates(t);
        }
        _podcastRestoreState() {
          var e = o.AudioUtils.audioTupleToAudioObject(this.getCurrentAudio());
          if (!o.AudioUtils.isPodcast(e)) return 0;
          var t = 0;
          cur.podcastSeekToTime
            ? ((t = this.seekToTime(
                cur.podcastSeekToTime,
                cur.podcastSeekToTimeRef
              )),
              delete cur.podcastSeekToTime,
              delete cur.podcastSeekToTimeRef)
            : (t =
                ((Q._podcastGetStates()[e.fullId] || {}).position || 0) /
                e.duration) &&
              t < 1 &&
              this.implTaskManager.seek(t);
          return t && t < 1 ? (this.updateCurrentPlaying(), t) : 0;
        }
        getCurrentFaveStatus() {
          return (
            !!o.AudioUtils.isPodcast(this._currentAudio) &&
            o.AudioUtils.getAudioExtra(this._currentAudio).fave
          );
        }
        _updatePlaybackRate() {
          var e =
              o.AudioUtils.isPodcast(this._currentAudio) ||
              o.AudioUtils.isArticleTts(this._currentAudio),
            t = !this.ads.isPlaying() && e ? Q.podcastGetPlaybackRate() : 1;
          this.implTaskManager.updatePlaybackRate(t);
        }
        podcastChangePlaybackRate(e) {
          var t = Q._lsGet(Q.LS_PODCASTS) || Y,
            i = t.rate || 1;
          e ? (i -= Q.PLAYBACK_RATE_STEP) : (i += Q.PLAYBACK_RATE_STEP),
            !e && i > Q.PLAYBACK_RATE_MAX
              ? (i = 1)
              : e && i < 1 && (i = Q.PLAYBACK_RATE_MAX),
            (t.rate = i),
            Q._lsSet(Q.LS_PODCASTS, t),
            (Y = t),
            this._updatePlaybackRate();
        }
        playAudio(e) {
          var t = new y.AudioPlaylist(y.AudioPlaylist.TYPE_TEMP);
          t.mergeWith({ list: [e] }), this.play(e, t);
        }
      }
      function V(e, t, i) {
        var o = e.getContext("2d");
        o.clearRect(0, 0, e.width, e.height), (o.fillStyle = i);
        for (var s = 0; s < 4; s++) {
          var a = 2 + 12 * t[s];
          o.fillRect(13 + 4 * s, 12 - a + 14, 2, a);
        }
      }
      (Q.UNAUTH_FADE_TIME = 0.8),
        (Q.LS_VER = "v20"),
        (Q.LS_KEY_PREFIX = "audio"),
        (Q.LS_PREFIX = Q.LS_KEY_PREFIX + "_" + Q.LS_VER + "_"),
        (Q.LS_STATUS_EXPORT = Q.LS_KEY_PREFIX + "_status_export"),
        (Q.LS_VOLUME = "vol"),
        (Q.LS_PL = "pl"),
        (Q.LS_TRACK = "track"),
        (Q.LS_SAVED = "saved"),
        (Q.LS_PROGRESS = "progress"),
        (Q.LS_PODCASTS = "podcasts"),
        (Q.LS_DURATION_TYPE = "dur_type"),
        (Q.LS_UUID = "uuid"),
        (Q.LS_ADS_CURRENT_DELAY = "ads_current_delay_v4"),
        (Q.PLAYBACK_RATE_STEP = 0.5),
        (Q.PLAYBACK_RATE_MAX = 3),
        (Q.tabIcons = {
          def: "/images/icons/favicons/fav_logo.ico",
          play: "/images/icons/favicons/fav_play.ico",
          pause: "/images/icons/favicons/fav_pause.ico",
        });
    },
    848001: (e, t, i) => {
      "use strict";
      i.d(t, { init: () => _ });
      var o = i(397807),
        s = i(45634),
        a = i(461292),
        l = i(67766),
        r = i(913151);
      function _() {
        (window.AudioLayer = o.default),
          (window.AudioUtils = s.AudioUtils),
          (window.TopAudioPlayer = a.TopAudioPlayer),
          (window.AudioPlaylist = l.AudioPlaylist),
          (window.AudioPlayer = r.AudioPlayer);
      }
    },
    147347: (e, t, i) => {
      "use strict";
      i.d(t, { PlaylistQueue: () => d });
      var o = i(570655),
        s = i(695724),
        a = i(982452),
        l = i(293680),
        r = i(40906),
        _ = i(45634),
        d = (function () {
          function e() {
            if (
              ((this.isEmptyAudio = function (e) {
                return !(
                  e &&
                  (e[_.AudioUtils.AUDIO_ITEM_INDEX_URL] ||
                    _.AudioUtils.isClaimedAudio(e))
                );
              }),
              e.instance)
            )
              return e.instance;
            (this.list = []),
              (this.originalList = []),
              (this.sources = { playlists: [], blocks: [] }),
              (e.instance = this);
          }
          return (
            (e.prototype.getQueue = function () {
              return this.list || [];
            }),
            (e.prototype.setSortedQueue = function (e) {
              if (!Array.isArray(e)) return !1;
              (this.sorted = !0),
                (this.shuffled = !1),
                (this.list = (0, o.__spreadArray)([], (0, o.__read)(e), !1)),
                (this.originalList = (0, o.__spreadArray)(
                  [],
                  (0, o.__read)(e),
                  !1
                )),
                (this.sources.blocks = []),
                (this.sources.playlists = []);
            }),
            (e.prototype.isInitedSortedList = function () {
              return !!this.sorted;
            }),
            (e.prototype.getAudioIds = function (e) {
              return "string" == typeof e
                ? e.split("_")
                : "object" != typeof e || Array.isArray(e)
                ? [
                    e[_.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID],
                    e[_.AudioUtils.AUDIO_ITEM_INDEX_ID],
                  ]
                : [e.ownerId, e.id];
            }),
            (e.prototype.compareAudiosIds = function (e, t) {
              return (
                !(!Array.isArray(e) || e.length < 2 || !t) &&
                e[0] == t[_.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] &&
                e[1] == t[_.AudioUtils.AUDIO_ITEM_INDEX_ID]
              );
            }),
            (e.prototype.fetchAudios = function (e) {
              var t = e;
              return (
                Array.isArray(e) && (t = e.join(",")),
                new Promise(function (e, i) {
                  l.ajax.post(
                    "al_audio.php?act=reload_audios",
                    { audio_ids: t },
                    {
                      onDone: function (t) {
                        e(t);
                      },
                      onFail: function (e) {
                        return i(e), !1;
                      },
                    }
                  );
                })
              );
            }),
            (e.prototype.findAndFetchEmptyAudiosFrom = function (e) {
              var t = [],
                i = [],
                o = this.list,
                s = e + _.AudioUtils.AUDIO_QUEUE_MAX_AUDIOS_COUNT;
              s = s < this.list.length ? s : this.list.length - 1;
              for (var a = e; a <= s; a++) {
                var l = o[a];
                if (this.isEmptyAudio(l) && l) {
                  var r =
                    l[_.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] +
                    "_" +
                    l[_.AudioUtils.AUDIO_ITEM_INDEX_ID] +
                    "_" +
                    l[_.AudioUtils.AUDIO_ITEM_ACCESS_KEY];
                  t.push(r), i.push(a);
                }
              }
              return t.length < 1
                ? Promise.resolve(!0)
                : this.fetchAudios(t)
                    .then(function (e) {
                      return (
                        !!e &&
                        (i.forEach(function (t, i) {
                          e[i] &&
                            ((e[i][_.AudioUtils.AUDIO_ITEM_INDEX_TRACK_CODE] =
                              o[t][_.AudioUtils.AUDIO_ITEM_INDEX_TRACK_CODE]),
                            (o[t] = e[i]));
                        }),
                        !0)
                      );
                    })
                    .catch(function () {
                      return !1;
                    });
            }),
            (e.prototype.getAudio = function (e) {
              var t = this;
              if (!e) return Promise.resolve(null);
              var i = null,
                o = null,
                s = this.getAudioIds(e);
              return (
                this.list.find(function (e, a) {
                  return !!t.compareAudiosIds(s, e) && ((o = a), (i = e), !0);
                }),
                i && null !== o
                  ? this.isEmptyAudio(i)
                    ? this.findAndFetchEmptyAudiosFrom(o)
                        .then(function (e) {
                          return e && null !== o
                            ? Promise.resolve(t.list[o])
                            : Promise.resolve(null);
                        })
                        .catch(function () {
                          return Promise.resolve(null);
                        })
                    : Promise.resolve(i)
                  : Promise.resolve(null)
              );
            }),
            (e.prototype.getNextAudio = function (e, t) {
              var i = this;
              if (!e)
                return this.getAudioAt(0).then(function (e) {
                  var o;
                  return e &&
                    t &&
                    (null === (o = _.AudioUtils.audioTupleToAudioObject(e)) ||
                    void 0 === o
                      ? void 0
                      : o.isClaimed)
                    ? i.getNextAudio(e, !0)
                    : e;
                });
              var o = this.indexOfAudio(e);
              return o < 0
                ? Promise.resolve(null)
                : o + 1 < this.getAudiosCount()
                ? this.getAudioAt(o + 1).then(function (e) {
                    var o;
                    return e &&
                      t &&
                      (null === (o = _.AudioUtils.audioTupleToAudioObject(e)) ||
                      void 0 === o
                        ? void 0
                        : o.isClaimed)
                      ? i.getNextAudio(e, !0)
                      : e;
                  })
                : Promise.resolve(null);
            }),
            (e.prototype.indexOfAudio = function (e) {
              var t = this;
              if (!e) return -1;
              var i = this.getAudioIds(e);
              return this.list
                ? this.list.findIndex(function (e) {
                    return t.compareAudiosIds(i, e);
                  })
                : -1;
            }),
            (e.prototype.getAudioAt = function (e) {
              var t = this;
              return !Array.isArray(this.list) || this.list.length <= e
                ? Promise.resolve(null)
                : this.findAndFetchEmptyAudiosFrom(e).then(function () {
                    return t.list[e];
                  });
            }),
            (e.prototype.getPrevAndNextAudios = function (e) {
              if (!e) return Promise.resolve([]);
              var t = null,
                i = null,
                o = this.list.findIndex(function (t) {
                  return (
                    t[_.AudioUtils.AUDIO_ITEM_INDEX_TRACK_CODE] ===
                    e[_.AudioUtils.AUDIO_ITEM_INDEX_TRACK_CODE]
                  );
                }),
                s = o - 1,
                a = o + 1;
              return (
                s >= 0 && (t = this.list[s]),
                a < this.list.length && (i = this.list[a]),
                (t && this.isEmptyAudio(t)) || (i && this.isEmptyAudio(i))
                  ? this.findAndFetchEmptyAudiosFrom(s > 0 ? s : o)
                      .then(function () {
                        return [t, i];
                      })
                      .catch(function () {
                        return [t, i];
                      })
                  : Promise.resolve([t, i])
              );
            }),
            (e.prototype.getAudios = function (e, t) {
              var i = this;
              return Number.isInteger(e) && Number.isInteger(t)
                ? (e < 0 && (e = 0),
                  e > this.list.length
                    ? Promise.resolve(null)
                    : (t - e > _.AudioUtils.AUDIO_QUEUE_MAX_AUDIOS_COUNT &&
                        (t = e + _.AudioUtils.AUDIO_QUEUE_MAX_AUDIOS_COUNT),
                      t > this.list.length && (t = this.list.length),
                      this.findAndFetchEmptyAudiosFrom(e).then(function () {
                        return i.list.slice(e, t + 1);
                      })))
                : Promise.resolve(null);
            }),
            (e.prototype.getAudiosCount = function () {
              return Array.isArray(this.list) ? this.list.length : 0;
            }),
            (e.prototype.removeAudio = function (e) {
              var t = this.indexOfAudio(e);
              return t >= 0
                ? (this.list.splice(t, 1),
                  window.getAudioPlayer().saveStateCurrentPlaylist(),
                  t)
                : -1;
            }),
            (e.prototype.addToList = function (e, t, i) {
              var o = this.list,
                a = this.indexOfAudio(e);
              if (a >= 0) {
                if (t) return;
                o.splice(a, 1);
              }
              ((e = (0, s.clone)(e))[_.AudioUtils.AUDIO_ITEM_INDEX_TITLE] = (0,
              s.clean)(
                (0, r.replaceEntities)(
                  e[_.AudioUtils.AUDIO_ITEM_INDEX_TITLE]
                ).replace(/(<em>|<\/em>)/g, "")
              )),
                (e[_.AudioUtils.AUDIO_ITEM_INDEX_PERFORMER] = (0, s.clean)(
                  (0, r.replaceEntities)(
                    e[_.AudioUtils.AUDIO_ITEM_INDEX_PERFORMER]
                  ).replace(/(<em>|<\/em>)/g, "")
                )),
                t || !i ? o.push(e) : o.splice(i, 0, e);
            }),
            (e.prototype.addAudio = function (e, t) {
              var i = void 0 === t;
              if (Array.isArray(e) && Array.isArray(e[0]))
                for (var o = 0, s = e.length; o < s; o++)
                  this.addToList(e[o], i, t);
              else e && e.length && this.addToList(e, i, t);
            }),
            (e.prototype.addPlaylist = function (e) {
              var t = this,
                i = e.getOwnerId() + "_" + e.getPlaylistId(),
                s = e.getBlockId();
              return this.sources.blocks.includes(s) ||
                this.sources.playlists.includes(i)
                ? Promise.resolve(!0)
                : (s
                    ? this.sources.blocks.push(s)
                    : this.sources.playlists.push(i),
                  e
                    .getAudioIds()
                    .then(function (e) {
                      var i = [];
                      return (
                        e.forEach(function (e) {
                          var t = (0, o.__read)(e.split("_")),
                            s = t[0],
                            a = t[1],
                            l = t[2],
                            r = t.slice(3).join("_"),
                            d = [];
                          (d[_.AudioUtils.AUDIO_ITEM_INDEX_OWNER_ID] = s),
                            (d[_.AudioUtils.AUDIO_ITEM_INDEX_ID] = a),
                            (d[_.AudioUtils.AUDIO_ITEM_ACCESS_KEY] = l || ""),
                            (d[_.AudioUtils.AUDIO_ITEM_INDEX_TRACK_CODE] = r),
                            i.push(d);
                        }),
                        t.addAudio(i, void 0),
                        t.findAndFetchEmptyAudiosFrom(0),
                        !0
                      );
                    })
                    .catch(function () {
                      return !1;
                    }));
            }),
            (e.prototype.moveAudio = function (e, t) {
              var i = this.list.splice(e, 1);
              e < t && (t -= 1), this.list.splice(t, 0, i[0]);
            }),
            (e.prototype.getShuffle = function () {
              return this.shuffled;
            }),
            (e.prototype.clean = function () {
              (this.list = []),
                (this.originalList = []),
                (this.shuffled = !1),
                (this.sorted = !0),
                (this.sources.blocks = []),
                (this.sources.playlists = []);
            }),
            (e.prototype.moveCurrentAudioAtFirstPosition = function () {
              var e = window.getAudioPlayer().getCurrentAudio(),
                t = this.indexOfAudio(e);
              -1 !== t
                ? (this.list.splice(t, 1), this.list.unshift(e))
                : this.list.unshift(e);
            }),
            (e.prototype.removeSortedList = function () {
              this.originalList && (this.list = [].concat(this.originalList)),
                (this.sorted = !1),
                (this.shuffled = !1);
            }),
            (e.prototype.isShuffled = function () {
              return !!this.getShuffle();
            }),
            (e.prototype.isEmpty = function () {
              return 0 === this.list.length;
            }),
            (e.prototype.shuffle = function (e, t) {
              if (!((e && this.isShuffled()) || (!e && !this.isShuffled())))
                return (
                  e
                    ? ((this.originalList = (0, o.__spreadArray)(
                        [],
                        (0, o.__read)(this.list),
                        !1
                      )),
                      (this.list = (0, a.shuffle)(
                        (0, o.__spreadArray)([], (0, o.__read)(this.list), !1)
                      )),
                      t || this.moveCurrentAudioAtFirstPosition(),
                      (this.sorted = !1),
                      (this.shuffled = !0))
                    : ((this.list = (0, o.__spreadArray)(
                        [],
                        (0, o.__read)(this.originalList),
                        !1
                      )),
                      (this.sorted = !0),
                      (this.shuffled = !1)),
                  !0
                );
            }),
            (e.prototype.resetShuffle = function () {
              this.shuffle(!1);
            }),
            e
          );
        })();
    },
    285132: (e, t, i) => {
      "use strict";
      i.d(t, { followOwner: () => a });
      var o = i(200134),
        s = i(850167);
      function a(e, t) {
        window.ajax.post(
          "/al_audio.php?act=follow_owner",
          { owner_id: e, hash: t },
          {
            onDone: function () {
              (0, s.getAudioPlayer)().notify(o.events.MUSIC_OWNERS_FOLLOW);
            },
          }
        );
      }
    },
    291976: (e, t, i) => {
      "use strict";
      i.d(t, { unfollowOwner: () => a });
      var o = i(200134),
        s = i(850167);
      function a(e, t) {
        window.ajax.post(
          "/al_audio.php?act=unfollow_owner",
          { owner_id: e, hash: t },
          {
            onDone: function () {
              (0, s.getAudioPlayer)().notify(o.events.MUSIC_OWNERS_UNFOLLOW);
            },
          }
        );
      }
    },
    511867: (e, t, i) => {
      "use strict";
      i.d(t, { WebQueueListener: () => s });
      var o = i(570655),
        s = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            (0, o.__extends)(t, e),
            (t.prototype.connect = function (e) {
              var t = this;
              e &&
                this.listenQueueKey !== e.key &&
                ((this.connected = !0),
                (this.listenQueueKey = e.key),
                window.Notifier.addKey(
                  { key: e.key, ts: e.timestamp },
                  function (e, i) {
                    return t.queueHandler(i);
                  }
                ));
            }),
            t
          );
        })(i(772703).QueueListener);
    },
    842776: (e, t, i) => {
      "use strict";
      i.d(t, { WebMediaSessionAdapter: () => o });
      var o = (function () {
        function e(e) {
          (this.player = e),
            this.player.eventBus &&
              (this.subscriptions = this.player.eventBus.subscriptions),
            (this.ads = this.player.ads);
        }
        return (
          (e.prototype.play = function () {
            return this.player.play();
          }),
          (e.prototype.pause = function () {
            return this.player.pause();
          }),
          (e.prototype.isPlaying = function () {
            var e = this.player.getCurrentPlaylist();
            return (!!(null == e ? void 0 : e.isLive) && e.isLive()) || !1;
          }),
          (e.prototype.getAudioAt = function (e) {
            return this.player.getPlaylistQueue
              ? this.player.getPlaylistQueue().getAudioAt(e)
              : Promise.resolve(null);
          }),
          (e.prototype.getAudios = function (e, t) {
            return this.player.getPlaylistQueue
              ? this.player.getPlaylistQueue().getAudios(e, t)
              : Promise.resolve(null);
          }),
          (e.prototype.next = function () {
            return this.player.playNext();
          }),
          (e.prototype.prev = function () {
            return this.player.playPrev();
          }),
          (e.prototype.seek = function (e) {
            return this.player.seek(e);
          }),
          (e.prototype.getCurrentPlaylist = function () {
            return this.player.getCurrentPlaylist();
          }),
          (e.prototype.getCurrentPlaylistId = function () {
            return "";
          }),
          (e.prototype.subscribe = function (e, t) {
            var i;
            return null === (i = this.player.eventBus) || void 0 === i
              ? void 0
              : i.subscribe(e, t);
          }),
          (e.prototype.unsubscribe = function (e, t) {
            var i;
            return null === (i = this.player.eventBus) || void 0 === i
              ? void 0
              : i.unsubscribe(e, t);
          }),
          (e.prototype.getCurrentAudio = function () {
            return this.player.getCurrentAudio();
          }),
          (e.prototype.getCurrentProgress = function () {
            return 0;
          }),
          e
        );
      })();
    },
  },
]);
try {
  stManager.done("dist/audioplayer.1fff3154e7b8519a9805.js");
} catch (e) {}
