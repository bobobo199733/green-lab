(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [77297], {
        440362: e => {
            e.exports = {
                wrapperPromoSymbolsContainer: "wrapperPromoSymbolsContainer-zAv6nTtm",
                promoSymbolsContainer: "promoSymbolsContainer-zAv6nTtm",
                symbol: "symbol-zAv6nTtm",
                icon: "icon-zAv6nTtm",
                logo: "logo-zAv6nTtm",
                symbolInfo: "symbolInfo-zAv6nTtm",
                symbolVisibility: "symbolVisibility-zAv6nTtm",
                name: "name-zAv6nTtm",
                symbolValueText: "symbolValueText-zAv6nTtm",
                currencySign: "currencySign-zAv6nTtm",
                positiveValue: "positiveValue-zAv6nTtm",
                negativeValue: "negativeValue-zAv6nTtm",
                animationBlock: "animationBlock-zAv6nTtm",
                animationWrapper: "animationWrapper-zAv6nTtm",
                translateUpFirstItem: "translateUpFirstItem-zAv6nTtm",
                priceUpAndDown: "priceUpAndDown-zAv6nTtm",
                translateUpSecondItem: "translateUpSecondItem-zAv6nTtm"
            }
        },
        264462: (e, t, o) => {
            "use strict";
            o.d(t, {
                Symbol: () => d
            });
            var s = o(559496),
                r = o(497754),
                i = o(849204),
                n = o(160742),
                a = o(692598),
                m = o(14582),
                l = o(965513),
                h = o(440362);

            function d(e) {
                const {
                    symbol: t,
                    className: i,
                    isPromoVisible: n,
                    onlyIcon: a
                } = e, [d, u] = (0, s.useState)(null), [g, _] = (0, s.useState)(null), [R, p] = (0, s.useState)(null), [v, y] = (0, s.useState)(null), [f, w] = (0, s.useState)(""), b = (0, m.getShortNameAndProName)(t.proName).shortName;
                let C = null;
                (0, s.useEffect)((() => (async function() {
                    return (await o.e(96301).then(o.bind(o, 124418))).getQuoteSessionInstance("simple")
                }().then((e => {
                    C = e;
                    C.subscribe("promoSymbol", t.proName, (e => {
                        const {
                            values: t
                        } = e;
                        u(Object.keys(t).length ? { ...t
                        } : null)
                    }))
                })), () => {
                    null !== C && C.unsubscribe("promoSymbol", t.proName)
                })), []), (0, s.useEffect)((() => {
                    var e;
                    if (!d) return;
                    if (a) return;
                    const t = new l.PercentageFormatter,
                        o = d.change_percent,
                        s = `${t.format(o,!0,2,!0)}`;
                    _(d.last_price ? d.last_price.toLocaleString("ru", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).replace(",", ".") : null), p(null !== (e = d.currency_code) && void 0 !== e ? e : null), y(s), w(o > 0 ? h.positiveValue : h.negativeValue)
                }), [d]);
                const S = {
                    logoid: null == d ? void 0 : d.logoid,
                    "currency-logoid": "BTCUSD" === b || null == d ? void 0 : d["currency-logoid"],
                    "base-currency-logoid": null == d ? void 0 : d["base-currency-logoid"]
                };
                return a ? s.createElement(c, {
                    size: "xxsmall",
                    symbol: t,
                    logoIdData: S,
                    shortName: b
                }) : s.createElement("a", {
                    href: `/chart/?symbol=${encodeURIComponent(t.proName)}`,
                    className: r(h.symbol, i)
                }, s.createElement(c, {
                    size: "xsmall",
                    symbol: t,
                    logoIdData: S,
                    shortName: b
                }), s.createElement("div", {
                    className: h.symbolInfo
                }, s.createElement("span", {
                    className: h.name
                }, b), s.createElement("div", {
                    className: h.animationBlock
                }, s.createElement("div", {
                    className: h.animationWrapper
                }, s.createElement("span", {
                    className: r(h.symbolValueText, n && h.translateUpFirstItem)
                }, s.createElement("span", null, g), s.createElement("span", {
                    className: h.currencySign
                }, R)), s.createElement("span", {
                    className: r(h.symbolValueText, f, n && h.translateUpSecondItem)
                }, v)))))
            }

            function c(e) {
                var t;
                const {
                    size: o,
                    symbol: r,
                    logoIdData: m,
                    shortName: l
                } = e;
                return s.createElement(n.CircleLogoAny, {
                    className: h.logo,
                    logoUrls: (null === (t = r.logoUrls) || void 0 === t ? void 0 : t[0]) ? [r.logoUrls[0]] : (0, a.removeUsdAndStableCoinFromCryptoPairLogos)((0, a.resolveLogoUrls)(m, i.LogoSize.Medium)),
                    size: o,
                    placeholderLetter: l[0],
                    singleCircleLogoClassName: h.icon
                })
            }
        },
        917181: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                SYMBOL_ROOM_PREFIX: () => m,
                highlightNewMessages: () => l,
                getChatHistoryMessageURL: () => h,
                symbolRoomId: () => d,
                isSymbolRoom: () => c,
                renderIconTemplate: () => u,
                symbolFromChatRoomId: () => g,
                defaultSymbolRoomMesssage: () => _
            });
            o(823127), o(173845);
            var s = o(575932),
                r = o(559496),
                i = o(587995),
                n = o(264462),
                a = o(823127);
            const m = "symbol_";

            function l(e, t, o) {
                let s = 0;
                const r = a(e.find(".ch-item").toArray().reverse().slice(0, t));
                if (!(!r.length || t < 1 || o < 1)) {
                    for (; t > 0;) {
                        t -= r.eq(s).find(".ch-item-text").length, s++
                    }
                    r.slice(0, s).highlight(o)
                }
            }

            function h(e, t) {
                const o = new Date(e),
                    s = o.getMonth() + 1,
                    r = o.getDate(),
                    i = o.getHours(),
                    n = o.getMinutes();
                return "/chat/history/?room=" + t + "&date=" + (o.getFullYear() + "-" + (s < 10 ? "0" : "") + s + "-" + (r < 10 ? "0" : "") + r) + "&timefrom=" + ((i < 10 ? "0" : "") + i + "%3A" + (n < 10 ? "0" : "") + n) + "&timeto=00%3A00&usernames=&order=asc&tzoffset=" + o.getTimezoneOffset()
            }

            function d(e, t = m) {
                const o = e.replace(/[^a-z0-9]/gi, "_");
                return "en" === window.locale ? `${t}${o}` : `${t}${o}_${window.locale}`
            }

            function c(e) {
                return e.startsWith(m)
            }

            function u(e, t) {
                i.render(r.createElement(n.Symbol, {
                    symbol: {
                        proName: e
                    },
                    isPromoVisible: !1,
                    onlyIcon: !0
                }), t)
            }

            function g(e) {
                let t = e.replace(new RegExp(`^${m}`), "");
                return "en" !== window.locale && (t = t.replace(new RegExp(`_${window.locale}$`), "")), t
            }

            function _() {
                return {
                    symbol: "",
                    time: "Thu Jan 10 15:00:00 2022 UTC",
                    meta: {
                        version: "0.2",
                        links: {}
                    },
                    username: "TradingView",
                    user_pic: "https://s3.tradingview.com/userpics/6171439-Hlns_mid.png",
                    text: (0, s.t)("Well hello there. This is a symbol chat – it's where you can discuss the asset you're currently looking at, along with everybody else watching the same price movements. Remember, kindness pays itself forward, so don't go breaking Rule 6 of the House Rules on us (or any of the others for that matter).")
                }
            }
        },
        952521: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                makeLiveSeparateModel: () => P,
                makePrivateModel: () => O,
                makePublicModel: () => F,
                setPublicInitialRooms: () => M
            });
            var s = o(97639),
                r = o.n(s),
                i = o(776734),
                n = o(501867),
                a = o.n(n),
                m = o(823127),
                l = o.n(m),
                h = o(725567),
                d = o(541962);
            class c {
                constructor(e) {
                    this._statInterval = "", this._statSymbol = "", this._historyRequest = null, this._room = "", this._isActive = !0, this._messageReceivedDelegate = new(r()), this._messageDeletedDelegate = new(r()), this._messageReceivedInOtherRoomDelegate = new(r()), this._messageDeletedInOtherRoomDelegate = new(r()), this._unknownEventDelegate = new(r()), this._pendingMessages = {}, this._newRoomInfoRequests = {}, this._onRoomDataHandler = this._pushStreamRoomDataHandler.bind(this), this._chatRooms = e, this._getChatRooms().startListenPushstream(), this._getChatRooms().roomsChanged().subscribe(this, this._flushPendingMessages), this._getChatRooms().otherEventReceived().subscribe(this, this._onOtherRoomEventReceived)
                }
                destroy() {
                    this.setRoom(""), this._getChatRooms().roomsChanged().unsubscribe(this, this._flushPendingMessages), this._getChatRooms().otherEventReceived().unsubscribe(this, this._onOtherRoomEventReceived), this._getChatRooms().stopListenPushstream(), this._historyRequest && this._historyRequest.abort()
                }
                roomAdded() {
                    return this._getChatRooms().roomAdded()
                }
                roomChanged() {
                    return this._getChatRooms().roomChanged()
                }
                roomDeleted() {
                    return this._getChatRooms().roomDeleted()
                }
                roomsChanged() {
                    return this._getChatRooms().roomsChanged()
                }
                messageReceived() {
                    return this._messageReceivedDelegate
                }
                messageDeleted() {
                    return this._messageDeletedDelegate
                }
                messageReceivedInOtherRoom() {
                    return this._messageReceivedInOtherRoomDelegate
                }
                messageDeletedInOtherRoom() {
                    return this._messageDeletedInOtherRoomDelegate
                }
                otherEventReceived() {
                    return this._unknownEventDelegate
                }
                createRoom(e, t, o, s) {
                    this._getChatRooms().createRoom(e, t, o, s)
                }
                editRoom(e, t, o, s) {
                    return this._getChatRooms().editRoom(e, t, o, s)
                }
                getRooms() {
                    return this._getChatRooms().rooms()
                }
                getRoomById(e) {
                    return this._getChatRooms().getRoomById(e)
                }
                getRoomInfo(e, t, o, s) {
                    return this._getChatRooms().getRoomInfo(e, t, o, s)
                }
                setActive(e) {
                    this._isActive = e
                }
                isActive() {
                    return this._isActive
                }
                room() {
                    return this._room
                }
                isHistoryLoading() {
                    return null !== this._historyRequest
                }
                setStatSymbol(e) {
                    this._statSymbol = e
                }
                setStatInterval(e) {
                    this._statInterval = e
                }
                loadHistory(e, t) {
                    this._loadHistoryInternal(e, t)
                }
                setRoom(e, t) {
                    this._room !== e && (this._historyRequest && (this._historyRequest.abort(), this._historyRequest = null), this._room && a().off(this._getChannel(), this._onRoomDataHandler), this._room = e, this._room && (this._historyRequest = this._loadHistoryInternal(0, ((e, o, s) => {
                        t && t(e, o, s), a().on(this._getChannel(), this._onRoomDataHandler)
                    })), this._historyRequest.always((() => {
                        this._historyRequest = null
                    }))))
                }
                getBanStatus(e, t) {
                    window.user.is_moderator && window.user.id !== e.user_id && !e.is_moderator ? l().get("/ban-status/", {
                        user_id: e.user_id
                    }, (e => {
                        t(!0, !e.error)
                    })) : t(!1)
                }
                ignoredUsers() {
                    return window.user.ignore_list
                }
                ignoredUsersV2() {
                    return window.user.ignore_list_v2
                }
                ignoreUser(e, t, o, s) {
                    const r = {
                        action: t ? "add" : "remove",
                        user_id: e.user_id,
                        username: e.username
                    };
                    l().post(t ? "/api/v1/user/privacy/ignore_list/add/" : "/api/v1/user/privacy/ignore_list/remove/", r, (s => {
                        s.detail || (t ? window.user.ignore_list[e.user_id] = e.username : delete window.user.ignore_list[e.user_id], window.crossTabSyncUserAttr && window.crossTabSyncUserAttr("ignore_list")), o && o(s)
                    })).fail((e => {
                        if (s) {
                            const t = JSON.parse(e.responseText);
                            t.error = t.detail, s(t)
                        }
                    }))
                }
                ignoreUserV2(e, t, o, s) {
                    t ? d.IgnoreUsers.add(e.username).then((t => {
                        t.detail || window.user.ignore_list.push(e.user_id), o(t)
                    })).catch((e => s(e))) : d.IgnoreUsers.remove(e.username).then((t => {
                        t.detail || (window.user.ignore_list = window.user.ignore_list.filter((t => t !== e.user_id))), o(t)
                    })).catch((e => s(e))), window.crossTabSyncUserAttr && window.crossTabSyncUserAttr("ignore_list")
                }
                sendMessageToRoom(e, t, o, s, r, n) {
                    if ((o = o || {}).interval = this._statInterval, !(t = t.trim()) && !o.text) return !1;
                    const a = window.TradingView.onChartPage ? this._statSymbol : "",
                        m = {
                            meta: JSON.stringify(o),
                            room_id: e,
                            symbol: a,
                            text: t
                        };
                    s && s.messageType && (m.type = s.messageType, s.warningType && (o.warning_type = s.warningType)), this._extendCommonRequestData(m), l().post("/conversation-post/", m).done(r).fail(n);
                    const h = "1" === m.is_private;
                    return (0, i.getTracker)().then((t => {
                        null !== t && t.trackChat(e, !1, h, window.locale)
                    })), !0
                }
                sendMessage(e, t, o, s, r) {
                    return "" !== this._room && this.sendMessageToRoom(this._room, e, t, o, s, r)
                }
                reportMessage(e) {
                    new h.ReportSendingAgent({
                        entityText: e.text,
                        entityType: "message",
                        entityURL: e.id.replace(/-/g, ""),
                        username: e.username
                    }, this._reportMessageOptions()).send()
                }
                deleteMessage(e, t, o) {
                    l().post("/conversation-delete/", {
                        ids: e
                    }).done(t).fail(o)
                }
                _getChatRooms() {
                    return this._chatRooms
                }
                _reportMessageOptions() {
                    return {}
                }
                _pushStreamRoomDataHandler(e, t, o, s) {
                    switch (e.action) {
                        case "message":
                            this._messageReceivedDelegate.fire(e.data, e.data.room_id, s);
                            break;
                        case "message-delete":
                            this._messageDeletedDelegate.fire(e.data, e.data.room_id, s);
                            break;
                        default:
                            throw new Error(`AbstractChatModel._pushStreamRoomDataHandler: unknown action ${e.action}`)
                    }
                }
                _onOtherRoomEventReceived(e, t, o, s) {
                    const r = e.data.room_id;
                    r !== this.room() && ("message" === e.action || "message-delete" === e.action ? this.getRoomById(r) ? "message" === e.action ? this._messageReceivedInOtherRoomDelegate.fire(e.data, r, s) : this._messageDeletedInOtherRoomDelegate.fire(e.data, r, s) : (this._pendingMessages[r] = this._pendingMessages[r] || [], this._pendingMessages[r].push({
                        external: s,
                        message: e
                    }), this._newRoomInfoRequests[r] || (this._newRoomInfoRequests[r] = !0, this._getChatRooms().getRoomInfo(r, (() => {
                        delete this._newRoomInfoRequests[r], this._flushPendingMessages()
                    }), (() => {
                        delete this._newRoomInfoRequests[r], this._getChatRooms().updateRooms()
                    })))) : this._unknownEventDelegate.fire(e, t, o, s))
                }
                _flushPendingMessages() {
                    Object.keys(this._pendingMessages).forEach((e => {
                        if (!this._pendingMessages[e] || !this.getRoomById(e)) return;
                        let t;
                        t = e === this.room() ? {
                            message: this._messageReceivedDelegate,
                            "message-delete": this._messageDeletedDelegate
                        } : {
                            message: this._messageReceivedInOtherRoomDelegate,
                            "message-delete": this._messageDeletedInOtherRoomDelegate
                        }, this._pendingMessages[e].forEach((o => {
                            t[o.message.action].fire(o.message.data, e, o.external)
                        })), delete this._pendingMessages[e]
                    }))
                }
                _loadHistoryInternal(e, t) {
                    const o = {
                        _rand: Math.random(),
                        offset: e,
                        room_id: this._room,
                        stat_interval: this._statInterval,
                        stat_symbol: this._statSymbol
                    };
                    return this._extendCommonRequestData(o), l().get("/conversation-status/", o, (e => {
                        t && t(e, 0 === e.messages.length, !1)
                    }))
                }
            }
            var u = o(911905);
            const g = (0, u.getLogger)("Chat.PrivateChatModel");
            class _ extends c {
                constructor(e) {
                    super(e), this._roomMessagesReadDelegate = new(r()), this._otherRoomMessagesReadDelegate = new(r())
                }
                roomMessagesRead() {
                    return this._roomMessagesReadDelegate
                }
                otherRoomMessagesRead() {
                    return this._otherRoomMessagesReadDelegate
                }
                setMessagesRead() {
                    this._updateRoomLastVisitedTime()
                }
                loadHistory(e, t) {
                    super.loadHistory(e, ((e, o, s) => {
                        this.setMessagesRead(), t && t(e, o, s)
                    }))
                }
                loadMoreRooms(e) {
                    return this._getChatRooms().loadMoreRooms(e)
                }
                leaveFromRoom(e, t) {
                    return this._getChatRooms().leaveFromRoom(e, t)
                }
                updateRoomUsers(e, t, o, s) {
                    return this._getChatRooms().updateRoomUsers(e, t, o, s)
                }
                updateRoomInfo(e, t) {
                    this._getChatRooms().getRoomInfo(e, t, void 0, !0)
                }
                hiddenRooms() {
                    return this._getChatRooms().hiddenRooms()
                }
                addHiddenRoom(e) {
                    this._getChatRooms().addHiddenRoom(e), this._updateRoomLastVisitedTime(e)
                }
                removeHiddenRoom(e) {
                    this._getChatRooms().removeHiddenRoom(e)
                }
                isRoomHidden(e) {
                    return this._getChatRooms().isRoomHidden(e)
                }
                searchUsers(e, t) {
                    m.get("/username_hint/", {
                        s: e
                    }, t)
                }
                _extendCommonRequestData(e) {
                    e.is_private = "1"
                }
                _getChannel() {
                    return this.room()
                }
                _pushStreamRoomDataHandler(e, t, o, s) {
                    switch (e.action) {
                        case "message":
                            this.setMessagesRead();
                            break;
                        case "messages-read":
                            const t = this.getRoomById(e.data.room_id);
                            return void(t ? this._roomMessagesReadDelegate.fire(t) : g.logError(`Received messages-read event for unknown room ${e.data.room_id}`))
                    }
                    super._pushStreamRoomDataHandler(e, t, o, s)
                }
                _onOtherRoomEventReceived(e, t, o, s) {
                    const r = e.data.room_id;
                    if (r !== this.room())
                        if ("messages-read" !== e.action) super._onOtherRoomEventReceived(e, t, o, s);
                        else {
                            const e = this.getRoomById(r);
                            e && this._otherRoomMessagesReadDelegate.fire(e)
                        }
                }
                _updateRoomLastVisitedTime(e) {
                    (e && e !== this.room() || this.isActive()) && (e = e || this.room(), m.post("/chats/status/", {
                        room_id: e
                    }))
                }
            }
            var R = o(575932),
                p = o(86674);
            class v extends c {
                constructor(e, t = !0) {
                    super(e), this._activeReconnect = !0, this._activeReconnect = t
                }
                deleteRoom(e, t) {
                    return this._getChatRooms().deleteRoom(e, t)
                }
                async voteForChart(e, t, o) {
                    (0, p.fetch)(`/api/v1/ideas/${e.id}/like/`, {
                        method: "POST",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            value: t ? 1 : 0
                        })
                    }).then((e => e.json())).then(o)
                }
                voteForMessageWithSnapshot(e, t, o) {
                    m.post("/conversation-vote/", {
                        id: e.id,
                        vote: t ? 1 : 0
                    }, o)
                }
                favoriteRooms() {
                    return this._getChatRooms().favoriteRooms()
                }
                isRoomFavorite(e) {
                    return this._getChatRooms().isRoomFavorite(e)
                }
                addFavoriteRoom(e) {
                    this._getChatRooms().addFavoriteRoom(e)
                }
                removeFavoriteRoom(e) {
                    this._getChatRooms().removeFavoriteRoom(e)
                }
                isShownOnlyFavorites() {
                    return this._getChatRooms().isShownOnlyFavorites()
                }
                toggleShownOnlyFavorites() {
                    this._getChatRooms().toggleShownOnlyFavorites()
                }
                _reportMessageOptions() {
                    const e = this.getRoomById(this.room());
                    return e ? {
                        additionalText: (0, R.t)("Posted in {title}").format({
                            title: e.title
                        })
                    } : {}
                }
                _extendCommonRequestData(e) {
                    e.is_private = ""
                }
                _getChannel() {
                    return `chat_${this.room()}`
                }
            }
            class y extends v {
                setActive(e) {
                    super.setActive(e), e ? a().addChannel("chat") : this._activeReconnect && a().removeChannel("chat")
                }
            }
            class f extends v {
                setActive(e) {
                    super.setActive(e);
                    const t = this.getRooms()[0].room_id;
                    e ? a().addChannel(t) : this._activeReconnect && a().removeChannel(t)
                }
            }
            class w {
                constructor(e) {
                    this._roomAddedDelegate = new(r()), this._roomChangedDelegate = new(r()), this._roomDeletedDelegate = new(r()), this._roomsChangedDelegate = new(r()), this._otherEventReceivedDelegate = new(r()), this._subscribersCount = 0, this._rooms = e || [], setTimeout((() => {
                        0 === this._rooms.length && this.updateRooms()
                    }), 0)
                }
                getRoomInfo(e, t, o, s) {
                    const r = this.getRoomById(e);
                    t && r && t(r)
                }
                startListenPushstream() {
                    ++this._subscribersCount, 1 === this._subscribersCount && (this._multiplexerCallback = this._pushStreamBroadcastHandler.bind(this), a().on(this._multiplexerEvent(), this._multiplexerCallback))
                }
                stopListenPushstream() {
                    --this._subscribersCount, 0 === this._subscribersCount && a().off(this._multiplexerEvent(), this._multiplexerCallback)
                }
                rooms() {
                    return this._rooms
                }
                getRoomById(e) {
                    const t = this._getRoomIndex(e);
                    return -1 === t ? null : this._rooms[t]
                }
                roomAdded() {
                    return this._roomAddedDelegate
                }
                roomChanged() {
                    return this._roomChangedDelegate
                }
                roomDeleted() {
                    return this._roomDeletedDelegate
                }
                roomsChanged() {
                    return this._roomsChangedDelegate
                }
                otherEventReceived() {
                    return this._otherEventReceivedDelegate
                }
                _onRoomAdded(e) {
                    e && (this._rooms.push(e), this._roomAddedDelegate.fire(e))
                }
                _onRoomChanged(e) {
                    if (!e) return;
                    const t = this._getRoomIndex(e.room_id); - 1 !== t && (this._rooms[t] = e, this._roomChangedDelegate.fire(e))
                }
                _onRoomDeleted(e) {
                    if (!e) return;
                    const t = this._getRoomIndex(e.room_id); - 1 !== t && (this._rooms.splice(t, 1), this._roomDeletedDelegate.fire(e))
                }
                _onRoomsChanged(e) {
                    const t = this._rooms;
                    this._rooms = e, this._roomsChangedDelegate.fire(e, t)
                }
                _pushStreamBroadcastHandler(e, t, o, s) {
                    this._otherEventReceivedDelegate.fire(e, t, o, s)
                }
                _getRoomIndex(e) {
                    for (let t = this._rooms.length - 1; t >= 0; --t)
                        if (this._rooms[t].room_id === e) return t;
                    return -1
                }
            }
            var b = o(62802);
            const C = (0, u.getLogger)("Chat.PrivateChatRooms"),
                S = "privatemessages.hiddenrooms";
            class D extends w {
                constructor(e = !0) {
                    super(null), this._updateRoomRequest = null, this._withPagination = !0, this._withPagination = e, window.loginStateChange.subscribe(this, this._onLoginStateChanged), this._onLoginStateChanged()
                }
                updateRooms(e = 30) {
                    if (this._updateRoomRequest) return;
                    this._withPagination || (e = 0);
                    const t = window;
                    t.user && t.is_authenticated ? (this._updateRoomRequest = m.get("/chats/get/", {
                        limit: e
                    }, this._onRoomsChanged.bind(this)), this._updateRoomRequest.always((() => {
                        this._updateRoomRequest = null
                    }))) : this._onRoomsChanged([])
                }
                loadMoreRooms(e = 30) {
                    this.updateRooms(this.rooms().length + e)
                }
                createRoom(e, t, o, s) {
                    m.post("/chats/create/", {
                        members: o
                    }, (e => {
                        e.error || e.room.existing || this._onRoomAdded(e.room), s && s(e), (0, i.getTracker)().then((t => {
                            null !== t && t.trackChat(e.room.room_id, !0, !0, window.locale)
                        }))
                    }))
                }
                editRoom(e, t, o, s) {
                    const r = this.getRoomById(e);
                    if (!r) return !1;
                    const i = {
                        room_id: e,
                        room_title: t
                    };
                    return m.post("/chats/title/", i, (e => {
                        e.error || (r.title = t, this._onRoomChanged(r)), s && s(e)
                    })), !0
                }
                getRoomInfo(e, t, o, s) {
                    const r = this.getRoomById(e);
                    !r || s ? m.get("/chats/info/", {
                        room_id: e
                    }, (r => {
                        if (r.error) return void(o && o());
                        const i = this.getRoomById(e);
                        s && i ? this._onRoomChanged(r.room) : i || this._onRoomAdded(r.room), t && t(r.room)
                    })).fail(o) : t && t(r)
                }
                leaveFromRoom(e, t) {
                    return !!this.getRoomById(e) && (m.post("/chats/leave/", {
                        room_id: e
                    }, (o => {
                        if (!o.error) {
                            const t = this.getRoomById(e);
                            t ? this._onRoomDeleted(t) : C.logError(`We are already left the room ${e}`)
                        }
                        t && t(o)
                    })), !0)
                }
                updateRoomUsers(e, t, o, s) {
                    if (!this.getRoomById(e)) return !1;
                    const r = {
                        members: t,
                        room_id: e,
                        update_existing: null == s ? void 0 : s.updateExistingRoom
                    };
                    return m.post("/chats/update/", r, (t => {
                        const s = this.getRoomById(e);
                        s && (t.room && t.room.members_info && t.room.room_id === s.room_id && (s.members_info = t.room.members_info), this._onRoomChanged(s)), o && o(t)
                    })), !0
                }
                hiddenRooms() {
                    return this._hiddenRooms
                }
                addHiddenRoom(e) {
                    this.isRoomHidden(e) || (this._hiddenRooms.push(e), this._flushHiddenRooms())
                }
                removeHiddenRoom(e) {
                    if (!this.isRoomHidden(e)) return;
                    const t = this._hiddenRooms.indexOf(e);
                    this._hiddenRooms.splice(t, 1),
                        this._flushHiddenRooms()
                }
                isRoomHidden(e) {
                    return -1 !== this._hiddenRooms.indexOf(e)
                }
                _multiplexerEvent() {
                    return "pm_*"
                }
                _pushStreamBroadcastHandler(e, t, o, s) {
                    const r = e.data.type;
                    if ("join" === r || "leave" === r) {
                        if ("leave" === r && window.user.id === e.data.user_id) return;
                        this.getRoomInfo(e.data.room_id, void 0, void 0, !0)
                    }
                    super._pushStreamBroadcastHandler(e, t, o, s)
                }
                _flushHiddenRooms() {
                    (0, b.setJSON)(S, this._hiddenRooms, {
                        forceFlush: !0
                    })
                }
                _onLoginStateChanged() {
                    this._hiddenRooms = (0, b.getJSON)(S, []), this.updateRooms()
                }
            }

            function U(e) {
                return "en" !== window.language && (e = `${e}.${window.locale}`), e
            }
            const I = "publiccharts.favorites",
                A = "chat.show_only_favorites";
            class T extends w {
                constructor(e) {
                    super(e), this._favoriteRooms = (0, b.getJSON)(U(I), {}), this._showOnlyFavorites = !!(0, b.getBool)(A)
                }
                updateRooms() {
                    m.get("/chats/public/get/", this._onRoomsChanged.bind(this))
                }
                createRoom(e, t, o, s) {
                    const r = {
                        desc: t,
                        title: e
                    };
                    m.post("/chats/public/create/", r, (e => {
                        e.error || m.post("/chats/public/createpingback/", {
                            room_id: e.room.room_id
                        }), s && s(e), (0, i.getTracker)().then((t => {
                            null !== t && t.trackChat(e.room.room_id, !0, !1, window.locale)
                        }))
                    }))
                }
                editRoom(e, t, o, s) {
                    if (!this.getRoomById(e)) return !1;
                    const r = {
                        desc: o,
                        room_id: e,
                        title: t
                    };
                    return m.post("/chats/public/edit/", r, s), !0
                }
                deleteRoom(e, t) {
                    return !!this.getRoomById(e) && (m.post("/chats/public/delete/", {
                        room_id: e
                    }, t), !0)
                }
                favoriteRooms() {
                    return Object.keys(this._favoriteRooms)
                }
                isRoomFavorite(e) {
                    return e in this._favoriteRooms
                }
                addFavoriteRoom(e) {
                    this._favoriteRooms[e] = !0, this._saveFavorires()
                }
                removeFavoriteRoom(e) {
                    delete this._favoriteRooms[e], this._saveFavorires()
                }
                isShownOnlyFavorites() {
                    return this._showOnlyFavorites
                }
                toggleShownOnlyFavorites() {
                    this._showOnlyFavorites = !this._showOnlyFavorites, (0, b.setValue)(A, this._showOnlyFavorites)
                }
                _multiplexerEvent() {
                    return "chat_*"
                }
                _pushStreamBroadcastHandler(e, t, o, s) {
                    if ("create_room" === e.data.type && e.data.meta.lang === window.locale) return void this._onRoomAdded(e.data.meta.room);
                    const r = this.getRoomById(e.data.room_id);
                    if (r) switch (r.last_message_time = Date.now(), e.data.type) {
                        case "edit_room":
                            return r.title = e.data.meta.room_title, r.description = e.data.meta.room_desc, void this._onRoomChanged(r);
                        case "delete_room":
                            return void this._onRoomDeleted(r)
                    }
                    super._pushStreamBroadcastHandler(e, t, o, s)
                }
                _saveFavorires() {
                    (0, b.setJSON)(U(I), this._favoriteRooms)
                }
            }
            const x = (0, u.getLogger)("Chat.ChatModelsFactory");
            let N = null,
                E = null,
                k = null;

            function O(e = !0) {
                if (function(e = !0) {
                        E || (E = new D(e))
                    }(e), !E) throw new Error("Unable to create private chat model");
                return new _(E)
            }

            function F(e = !0) {
                if (k || (k = new T(N)), !k) throw new Error("Unable to create public chat model");
                return new y(k, e)
            }

            function M(e) {
                k ? x.logError("Trying set initial rooms after creating") : N = e
            }

            function P(e) {
                const t = new T(e);
                return new f(t)
            }
        },
        725567: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                ReportSendingAgent: () => n
            });
            var s = o(575932),
                r = (o(897116), o(229534)),
                i = o(823127);
            class n {
                constructor(e, t = {}) {
                    switch (this._fullURL = `${window.location.protocol}//${window.location.host}`, this._data = e, this._options = t, e.entityType) {
                        case "message":
                            this._entityString = (0, s.t)("message"),
                                this._actionString = (0, s.t)("removed"), this._fullURL += `/chat/m/${e.entityURL}/`;
                            break;
                        case "comment":
                            this._entityString = (0, s.t)("comment"), this._actionString = (0, s.t)("removed"), this._fullURL += `${e.entityURL}#tc${e.entityID}`;
                            break;
                        case "idea":
                            this._entityString = (0, s.t)("idea"), this._actionString = (0, s.t)("hidden"), this._fullURL += e.entityURL;
                            break;
                        case "script":
                            this._entityString = (0, s.t)("script"), this._actionString = (0, s.t)("hidden"), this._fullURL += e.entityURL;
                            break;
                        case "stream":
                            this._entityString = (0, s.t)("stream"), this._actionString = (0, s.t)("hidden"), this._fullURL += e.entityURL;
                            break;
                        case "mind":
                            this._entityString = (0, s.t)("publication"), this._actionString = (0, s.t)("removed"), this._fullURL += e.entityURL;
                            break;
                        case "mind-comment":
                            this._entityString = (0, s.t)("comment"), this._actionString = (0, s.t)("removed"), this._fullURL += e.entityURL
                    }
                }
                send() {
                    const e = {
                        report_type: this._data.entityType,
                        text: ""
                    };
                    this._options.chartId && (e.chart_id = this._options.chartId), this._data.entityID && (e.object_id = this._data.entityID);
                    const t = {
                        is_report: !0,
                        meta: JSON.stringify(e),
                        text: this.getText()
                    };
                    i.post("/conversation-post/", t).done((e => {
                        e && e.error && (0, r.showErrorDialog)({
                            title: "Error",
                            content: e.error,
                            btnType: "danger"
                        })
                    }))
                }
                getTitle() {
                    return (0, s.t)("Report {entity} from {username} to moderators").format({
                        entity: this._entityString,
                        username: `<strong>${this._data.username}</strong>`
                    })
                }
                getText() {
                    let e = (0, s.t)("Reported {entity} from @{username}, {url}").format({
                        entity: this._entityString,
                        username: this._data.username,
                        url: this._fullURL
                    });
                    return this._options.additionalText && (e += `\n${this._options.additionalText}`), this._data.entityText && (e += `\n\n${this._data.entityText}`), e
                }
                getEntity() {
                    return this._entityString
                }
                getAction() {
                    return this._actionString
                }
            }
        },
        541962: (e, t, o) => {
            "use strict";
            o.d(t, {
                IgnoreUsers: () => a
            });
            var s, r = o(575932);

            function i(e) {
                const t = new FormData;
                return t.append("username", e), t
            }! function(e) {
                e[e.Unknown = 0] = "Unknown", e[e.BadRequest = 400] = "BadRequest", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.UnprocessableEntity = 422] = "UnprocessableEntity"
            }(s || (s = {}));
            const n = r.t("Oh no! Something went wrong. Please try again.");
            var a;
            ! function(e) {
                e.getAll = function() {
                    return fetch("/api/v1/user/privacy/ignore_list/", {
                        method: "GET"
                    }).then((e => {
                        if (e.ok) return e.json();
                        throw new Error(n)
                    }))
                }, e.add = async function(e) {
                    return fetch("/api/v1/user/privacy/ignore_list/add/", {
                        method: "POST",
                        body: i(e)
                    }).then((e => {
                        if (e.ok) return e.json();
                        if ([s.UnprocessableEntity].includes(e.status)) return e.json().then((t => {
                            if (!e.ok) {
                                const e = t.detail;
                                throw new Error(e)
                            }
                        }));
                        throw new Error(n)
                    }))
                }, e.remove = function(e) {
                    return fetch("/api/v1/user/privacy/ignore_list/remove/", {
                        method: "POST",
                        body: i(e)
                    }).then((e => {
                        if (e.ok) return e.json();
                        if ([s.UnprocessableEntity].includes(e.status)) return e.json().then((t => {
                            if (!e.ok) {
                                const e = t.detail;
                                throw new Error(e)
                            }
                        }));
                        throw new Error(n)
                    }))
                }
            }(a || (a = {}))
        },
        355263: (e, t, o) => {
            "use strict";
            o.d(t, {
                isCurrencySymbol: () => r
            });
            var s = o(519073);

            function r(e, t) {
                return "forex" === e || (0, s.hasCryptoTypespec)(e, null != t ? t : [])
            }
        },
        553275: (e, t, o) => {
            "use strict";
            o.d(t, {
                getSymbolPagePath: () => a,
                makeSymbolChartUrl: () => _,
                makeSymbolFinancialsPageUrl: () => R,
                makeSymbolPageUrl: () => g,
                makeSymbolTimelinePageUrl: () => p,
                makeTemplateSymbolUrl: () => c
            });
            var s = o(102901);
            var r = o(179380),
                i = o(355263),
                n = o(889267);

            function a(e, t) {
                if ("spread" === e.type || "expression" === e.type) {
                    const t = e.shortName && m(e.shortName),
                        o = e.proName && m(e.proName);
                    e = { ...e,
                        type: void 0,
                        shortName: t,
                        proName: o
                    }
                }
                return h(d(e, t), l(e))
            }

            function m(e) {
                var t;
                return null === (t = (0, n.tokenize)(e).find((e => "symbol" === e.type))) || void 0 === t ? void 0 : t.value
            }

            function l(e) {
                const t = {
                    shortName: e.shortName,
                    exchange: e.exchange,
                    proName: e.proName,
                    type: e.type
                };
                return e.proName && e.proName.includes(":") && ([t.exchange, t.shortName] = e.proName.split(":")), t
            }

            function h(e, t) {
                const o = encodeURIComponent(t.shortName || ""),
                    s = encodeURIComponent(t.exchange || ""),
                    r = encodeURIComponent(t.proName || "");
                return e.replace("{tvexchange}", s).replace("{tvsymbol}", o).replace("{tvprosymbol}", r)
            }

            function d(e, t = "") {
                const o = ["UKOIL", "USOIL", "XAGAUD", "XAGCAD", "XAGCHF", "XAGEUR", "XAGGBP", "XAGHKD", "XAGJPY", "XAGUSD", "XAUAUD", "XAUCAD", "XAUCHF", "XAUEUR", "XAUGBP", "XAUHKD", "XAUJPY", "XAUNZD", "XAUUSD", "XPDUSD", "XPTUSD", "SPX"];
                return void 0 === e.shortName && void 0 === e.proName ? (console.warn("Params missed"), "/") : v(e) ? e.exchange ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : `/symbols/{tvsymbol}/${t}` : e.exchange || e.proName ? e.shortName && o.includes(e.shortName) ? `/symbols/{tvsymbol}/${t}` : `/symbols/{tvexchange}-{tvsymbol}/${t}` : `/symbols/{tvsymbol}/${t}`
            }

            function c(e, t) {
                let o = e;
                if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(e)) {
                    let s = "tvprosymbol";
                    void 0 === t.proName && (s = "tvsymbol"), o = `${e}?tvwidgetsymbol={${s}}`
                }
                const s = h(o, l(t));
                if (!(0, r.isSafeUrl)(s)) throw new Error(`The symbol URL ${s} is not allowed.`);
                return s
            }

            function u(e, t, o, r) {
                const i = window.locale_domains ? function(e, t) {
                        const o = t || window.locale || "en";
                        let s = e[o] ? e[o] : e.en;
                        return s = "tradingview.com" === s ? "www.tradingview.com" : s, s ? document.location.protocol + "//" + s : ""
                    }(window.locale_domains, r) : window.location.origin,
                    n = i + h(e, l(t));
                return o ? (0, s.addUtmToUrl)(n, o) : n
            }

            function g(e, t, o, s) {
                return u(d(e, s), e, t, o)
            }

            function _(e, t) {
                return u("/chart/?symbol={tvprosymbol}", e, t)
            }

            function R(e, t, o) {
                return g(e, t, o, "financials-overview/")
            }

            function p(e, t, o) {
                return u(function(e) {
                    return e.exchange && !v(e) ? "/symbols/{tvexchange}-{tvsymbol}/history-timeline/" : "/symbols/{tvsymbol}/history-timeline/"
                }(e), e, t, o)
            }

            function v(e) {
                return !!e.type && (0, i.isCurrencySymbol)(e.type, e.typespecs)
            }
        },
        102901: (e, t, o) => {
            "use strict";
            o.d(t, {
                addUtmToUrl: () => r
            });
            var s = o(114939);

            function r(e, t) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(e)) return e;
                const o = (0, s.buildUtmQueryString)(t);
                if ("" === o) return e;
                const r = e.indexOf("?"),
                    i = e.indexOf("#"),
                    n = -1 !== i;
                if (-1 !== r && (!n || r < i)) {
                    return `${e.slice(0,r)}?${n?e.slice(r+1,i):e.slice(r+1)}&${o}${n?e.slice(i):""}`
                }
                if (n) {
                    return `${e.slice(0,i)}?${o}${e.slice(i)}`
                }
                return `${e}?${o}`
            }
        },
        114939: (e, t, o) => {
            "use strict";
            o.d(t, {
                filterUtmInfo: () => n,
                buildUtmQueryString: () => a,
                buildUtmQueryStringFromUrlParams: () => m
            });
            var s = o(514998),
                r = o(184601);
            const i = ["utm_source", "utm_medium", "utm_campaign"];

            function n(e) {
                const t = {};
                return i.forEach((o => {
                    const s = e[o];
                    "string" == typeof s && "" !== s && (t[o] = (0, r.htmlEscape)(s))
                })), t
            }

            function a(e, t = !1) {
                const o = (0, s.createUrlParams)(e);
                return o && t ? "?" + o : o
            }

            function m(e) {
                return a(n((0, s.getUrlParams)()), e)
            }
        },
        14582: (e, t, o) => {
            "use strict";

            function s(e) {
                if (e.includes("|")) {
                    const [t, o] = e.split("|"), {
                        proName: s,
                        shortName: i
                    } = r(t);
                    return {
                        proName: s,
                        shortName: i,
                        interval: o
                    }
                } {
                    const {
                        proName: t,
                        shortName: o
                    } = r(e);
                    return {
                        proName: t,
                        shortName: o,
                        interval: void 0
                    }
                }
            }

            function r(e) {
                let t, o;
                return e.includes(":") ? (o = e.split(":")[1], t = e) : o = e, {
                    proName: t,
                    shortName: o
                }
            }
            o.d(t, {
                getSymbolDataFromSymbolString: () => s,
                getShortNameAndProName: () => r
            })
        },
        519073: (e, t, o) => {
            "use strict";

            function s(e, t) {
                return t.includes("crypto") || ["bitcoin", "crypto"].includes(e)
            }
            o.d(t, {
                hasCryptoTypespec: () => s
            })
        }
    }
]);