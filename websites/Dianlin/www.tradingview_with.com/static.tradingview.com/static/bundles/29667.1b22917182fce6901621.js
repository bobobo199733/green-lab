"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [29667], {
        246433: (e, t, n) => {
            var o;
            n.d(t, {
                    ConnectionStatus: () => o
                }),
                function(e) {
                    e[e.Closed = 0] = "Closed", e[e.Connecting = 1] = "Connecting", e[e.Open = 2] = "Open"
                }(o || (o = {}))
        },
        37704: (e, t, n) => {
            n.d(t, {
                PersistentEventSourceTransport: () => r
            });
            var o = n(246433),
                s = n(673438);
            const i = (0, n(911905).getLogger)("PersistentWebsocketTransport");
            class r extends s.PersistentTransport {
                constructor(e) {
                    super(e, i), this._specializedErrorHandlerBound = this._specializedErrorHandler.bind(this)
                }
                _createNativeTransport(e) {
                    const t = new EventSource(e, {
                        withCredentials: !0
                    });
                    return t.addEventListener("error", this._specializedErrorHandlerBound), t.addEventListener("open", this._socketOpenHandler), t.addEventListener("message", this._socketMessageHandler), t
                }
                _disconnectTransport() {
                    if (null === this._socket) return;
                    this._socket.removeEventListener("error", this._specializedErrorHandlerBound), this._socket.removeEventListener("open", this._socketOpenHandler), this._socket.removeEventListener("message", this._socketMessageHandler), this._removeOnOfflineListener();
                    const e = this._socket;
                    this._socket = null, this._connectionStatus.setValue(o.ConnectionStatus.Closed), e.readyState !== WebSocket.CLOSED && e.close()
                }
                _specializedErrorHandler(e) {
                    e.eventPhase === EventSource.CLOSED ? this._socketCloseHandler(e) : this._socketErrorHandler()
                }
            }
        },
        673438: (e, t, n) => {
            n.d(t, {
                PersistentTransport: () => l
            });
            var o = n(246433),
                s = n(55111),
                i = n(262325),
                r = n.n(i),
                a = n(97639),
                c = n.n(a),
                h = n(761068);
            class l {
                constructor(e, t, n) {
                    this._url = "", this._socket = null, this._reconnectCount = 0, this._onlineCancellationToken = null, this._connectionStatus = new(r())(o.ConnectionStatus.Closed), this._socketCloseHandler = this._onCloseCallback.bind(this), this._socketErrorHandler = this._onErrorCallback.bind(this), this._socketOpenHandler = this._onOpenCallback.bind(this), this._socketMessageHandler = this._onMessageCallback.bind(this), this._maxReconnectReachedEventDelegate = new(c()), this._shouldReconnect = !0, this._maxReconnectCount = null, this._reconnectTimeoutId = 0, this._connectAbortController = null, this._tryReconnect = () => {
                        if (this._disconnect(), this._shouldReconnect) {
                            const e = this._getReconnectTimeout();
                            this._logger.logNormal(`Sleeping some time before reconnect ${e}ms`), this._reconnectTimeoutId = setTimeout(this._tryReconnectImpl.bind(this), e)
                        } else this._logger.logNormal("Skip reconnecting because of shouldReconnect state")
                    }, this._onOfflineHandler = () => {
                        this._removeOnOfflineListener(), this._logger.logInfo("Network status changed to offline - trying to reconnect"), this._tryReconnect()
                    }, this._logger = t, this._messageHandler = e, this._closeHandler = n, window.addEventListener("unload", (() => {
                        t.logNormal("Unload event comes - disconnecting without reconnect after that..."), this._shouldReconnect = !1, this._disconnect()
                    }), !1)
                }
                setUrl(e) {
                    if (this._url === e) return;
                    const t = this._connectionStatus.value() !== o.ConnectionStatus.Closed;
                    t && this._disconnect(), this._url = e, t && this.connect()
                }
                url() {
                    return this._url
                }
                connect() {
                    this._connectImpl()
                }
                setMaxReconnectCount(e) {
                    this._maxReconnectCount = e
                }
                connectionStatus() {
                    return this._connectionStatus.readonly()
                }
                disconnect() {
                    this._shouldReconnect = !1, this._disconnect()
                }
                maxReconnectReachedEvent() {
                    return this._maxReconnectReachedEventDelegate
                }
                async _prepareParamsForConnection(e) {}
                _disconnect() {
                    var e;
                    null === (e = this._connectAbortController) || void 0 === e || e.abort(), this._connectAbortController = null, clearTimeout(this._reconnectTimeoutId), this._reconnectTimeoutId = 0, this._connectionStatus.value() !== o.ConnectionStatus.Closed ? this._socket ? (this._logger.logNormal(`Closing connection to: ${this._socket.url}, currentStatus: ${o.ConnectionStatus[this._connectionStatus.value()]}`), this._disconnectTransport()) : this._logger.logNormal("Disconnecting without socket - probably within preparing, it should be already scheduled for aborting") : this._logger.logNormal("Attempt to close connection but it is closed already")
                }
                _onErrorCallback() {
                    this._logger.logInfo("Connection is closed by error"), this._tryReconnect()
                }
                _onCloseCallback(e) {
                    var t;
                    this._logger.logInfo(`Connection is closed - code=${e.code} msg=${e.reason}`), null === (t = this._closeHandler) || void 0 === t || t.call(this, e), this._tryReconnect()
                }
                _tryReconnectImpl() {
                    return null !== this._maxReconnectCount && this._reconnectCount === this._maxReconnectCount ? (this._logger.logWarn("Maximum attempts to reconnect to websocket reached"), void this._maxReconnectReachedEventDelegate.fire()) : (this._reconnectCount += 1, this._logger.logInfo(`Reconnecting count: ${this._reconnectCount}`), navigator.onLine ? (this._logger.logInfo("Network status: online - trying to connect"), void this.connect()) : (this._logger.logInfo("Network status: offline - wait until online"), void(this._onlineCancellationToken = (0, s.callWhenOnline)((() => {
                        this._logger.logInfo("Network status changed to online - trying to connect"), this.connect()
                    })))))
                }
                _onOpenCallback() {
                    this._logger.logNormal("Connection opened"), this._reconnectCount = 0, this._connectionStatus.setValue(o.ConnectionStatus.Open)
                }
                _onMessageCallback(e) {
                    this._messageHandler(e.data)
                }
                _getReconnectTimeout() {
                    return this._reconnectCount < 5 ? 300 : 5e3
                }
                _setOnOfflineListener() {
                    window.addEventListener("offline", this._onOfflineHandler)
                }
                _removeOnOfflineListener() {
                    window.removeEventListener("offline", this._onOfflineHandler)
                }
                async _connectImpl() {
                    if (this._connectionStatus.value() !== o.ConnectionStatus.Closed) return void this._logger.logNormal("Attempt to open connection but it is not closed");
                    this._socket && (this._logger.logError("Something went wrong - code 0x2"), this.disconnect()), this._onlineCancellationToken && (this._onlineCancellationToken(), this._onlineCancellationToken = null), this._logger.logNormal(`Connecting to ${this._url}`), this._shouldReconnect = !0, this._connectAbortController = new AbortController;
                    const e = this._connectAbortController.signal;
                    try {
                        if (this._connectionStatus.setValue(o.ConnectionStatus.Connecting), await this._prepareParamsForConnection(e), e.aborted) throw (0, h.createAbortError)();
                        this._socket = this._createNativeTransport(this._url), this._setOnOfflineListener()
                    } catch (e) {
                        this._connectionStatus.setValue(o.ConnectionStatus.Closed), (0, h.skipAbortError)(e)
                    } finally {
                        this._connectAbortController = null
                    }
                }
            }
        },
        394485: (e, t, n) => {
            n.d(t, {
                PersistentWebsocketTransport: () => a
            });
            var o = n(911905),
                s = n(246433),
                i = n(673438);
            const r = (0, o.getLogger)("PersistentWebsocketTransport");
            class a extends i.PersistentTransport {
                constructor(e, t) {
                    super(e, r, t)
                }
                sendMessage(e) {
                    this._connectionStatus.value() === s.ConnectionStatus.Open ? this._socket ? this._socket.send(e) : r.logError("Something went wrong - code 0x3") : r.logWarn("Attempt to send message but connection is not opened")
                }
                _createNativeTransport(e) {
                    const t = new WebSocket(e);
                    return t.binaryType = "arraybuffer", t.addEventListener("error", this._socketErrorHandler), t.addEventListener("close", this._socketCloseHandler), t.addEventListener("open", this._socketOpenHandler), t.addEventListener("message", this._socketMessageHandler), t
                }
                _disconnectTransport() {
                    if (null === this._socket) return;
                    this._socket.removeEventListener("error", this._socketErrorHandler), this._socket.removeEventListener("close", this._socketCloseHandler), this._socket.removeEventListener("open", this._socketOpenHandler), this._socket.removeEventListener("message", this._socketMessageHandler), this._removeOnOfflineListener();
                    const e = this._socket;
                    this._socket = null, this._connectionStatus.setValue(s.ConnectionStatus.Closed), e.readyState !== WebSocket.CLOSED && e.close()
                }
            }
        },
        931493: (e, t, n) => {
            function o(e) {
                return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            n.d(t, {
                regExpEscape: () => o
            })
        },
        809965: (e, t, n) => {
            var o, s, i;
            n.d(t, {
                    ProPlans: () => o,
                    BrokerPlans: () => s,
                    BrokerPlansIds: () => i
                }),
                function(e) {
                    e.Free = "free", e.Pro = "pro", e.ProTrial = "pro_trial", e.ProRealtime = "pro_realtime", e.ProRealtimeTrial = "pro_realtime_trial", e.ProPremium = "pro_premium", e.ProPremiumTrial = "pro_premium_trial", e.ProMiniAlerts = "pro_mini_alerts", e.ProMiniAds = "pro_mini_ads", e.ProMiniLayouts = "pro_mini_layouts", e.ProEdu = "pro_edu"
                }(o || (o = {})),
                function(e) {
                    e.Platinum = "platinum", e.Gold = "gold", e.Silver = "silver", e.Free = "free"
                }(s || (s = {})),
                function(e) {
                    e[e.Platinum = 3] = "Platinum", e[e.Gold = 2] = "Gold", e[e.Silver = 1] = "Silver", e[e.Free = 0] = "Free"
                }(i || (i = {}))
        },
        761068: (e, t, n) => {
            function o(e) {
                let t = null;
                return (n, ...o) => (null == t || t.abort(), t = new AbortController, null == n || n.addEventListener("error", (() => null == t ? void 0 : t.abort()), {
                    once: !0
                }), e(t.signal, ...o))
            }

            function s(e) {
                if (!c(e)) throw e
            }

            function i(e) {
                if (c(e)) throw e
            }

            function r(e) {
                return (null == e ? void 0 : e.aborted) ? Promise.reject(a()) : new Promise(((t, n) => {
                    null == e || e.addEventListener("abort", (() => n(a())), {
                        once: !0
                    })
                }))
            }

            function a() {
                return new DOMException("Aborted", "AbortError")
            }

            function c(e) {
                return e instanceof Error && "AbortError" === e.name
            }

            function h(e, t) {
                return Promise.race([r(e), t])
            }
            async function l(e, t) {
                let n;
                try {
                    await h(e, new Promise((e => {
                        n = setTimeout(e, t)
                    })))
                } finally {
                    clearTimeout(n)
                }
            }
            n.d(t, {
                respectLatest: () => o,
                skipAbortError: () => s,
                rethrowAbortError: () => i,
                createAbortError: () => a,
                isAbortError: () => c,
                respectAbort: () => h,
                delay: () => l
            })
        },
        55111: (e, t, n) => {
            n.d(t, {
                callWhenOnline: () => s,
                waitForOnline: () => i
            });
            var o = n(761068);

            function s(e) {
                let t = e;
                const n = () => {
                    window.removeEventListener("online", n), t && t()
                };
                return window.addEventListener("online", n), () => {
                    t = null
                }
            }
            async function i(e = null) {
                return !0 === navigator.onLine || void 0 === navigator.onLine ? Promise.resolve() : (0, o.respectAbort)(e, new Promise((e => {
                    const t = () => {
                        window.removeEventListener("online", t), e()
                    };
                    window.addEventListener("online", t)
                })))
            }
        },
        849289: (e, t, n) => {
            var o, s, i, r = n(823127),
                a = n(77034);

            function c() {
                return o || (this instanceof c ? void(o = this) : new c)
            }
            c.prototype.browser = function() {
                return s || (s = a.name + " " + a.version), s
            }, c.prototype.setBrowser = function(e) {
                "string" == typeof e && e && (s = e)
            }, c.prototype.os = function() {
                if (!i) {
                    var e = Object.keys(a);
                    i = ["mac", "windows", "windowsphone", "linux", "chromeos", "android", "ios", "blackberry", "firefoxos", "webos", "bada", "tizen", "sailfish"].filter((function(t) {
                        return e.includes(t)
                    }))[0]
                }
                return i
            }, c.prototype.setOS = function(e) {
                "string" == typeof e && e && (i = e)
            }, c.prototype.cookieEnabled = function() {
                return navigator.cookieEnabled
            }, c.prototype.viewportSize = function() {
                return r(window).width() + " x " + r(window).height()
            }, c.prototype.screenSize = function() {
                return window.screen && (screen.width || screen.availWidth) + " x " + (screen.height || screen.availHeight) || "unknown"
            }, c.prototype.colorDepth = function() {
                return window.screen && screen.colorDepth || "unknown"
            }, c.prototype.pixelRatio = function() {
                return window.devicePixelRatio || 0
            }, c.prototype.wsTestResult = function() {
                return "Pending"
            }, c.prototype.maxTouchPoints = function() {
                return navigator.maxTouchPoints || 0
            }, c.prototype.orientation = function() {
                return "onorientationchange" in window
            }, c.prototype.touchevents = function() {
                return "ontouchstart" in window
            }, c.prototype.hover = function() {
                try {
                    return window.matchMedia("(any-hover: hover)").matches
                } catch (e) {
                    return null
                }
            }, c.prototype.state = function() {
                return {
                    os: this.os(),
                    browser: this.browser(),
                    cookieEnabled: this.cookieEnabled(),
                    viewportSize: this.viewportSize(),
                    screenSize: this.screenSize(),
                    colorDepth: this.colorDepth(),
                    pixelRatio: this.pixelRatio(),
                    maxTouchPoints: this.maxTouchPoints(),
                    orientation: this.orientation(),
                    touchevents: this.touchevents(),
                    hover: this.hover()
                }
            }, e.exports = c
        },
        501867: (e, t, n) => {
            var o = n(95935),
                s = n(226722).TVXWindowEvents,
                i = n(345848).trackEvent,
                r = n(49437).TVLocalStorage,
                a = n(932496).PushStream,
                c = n(932496).TransportType,
                h = n(246433).ConnectionStatus,
                l = n(175203).telemetry,
                u = n(911905);
            const d = n(125226).isFeatureEnabled;
            var _ = u.getLogger,
                g = u.getRawLogHistory,
                m = "PushStreamMultiplexer",
                f = _(m);
            const p = {
                    url: window.PUSHSTREAM_URL,
                    urlPath: "message-pipe-ws",
                    transportType: c.WebSocket
                },
                v = {
                    url: window.PUSHSTREAM_URL.replace("wss://", "https://"),
                    urlPath: "message-pipe-es",
                    transportType: c.EventSource
                };
            var S = function() {
                var e = null,
                    t = null,
                    n = {},
                    c = {},
                    u = [],
                    _ = null,
                    S = "multiplexer-bc-",
                    w = "pushStreamMultiplexerState.",
                    C = "private_",
                    b = h.Closed,
                    y = h.Closed,
                    E = !1;
                const P = d("enable_eventsource_pushstream_transport") ? v : p;
                var k, T = {
                    _codeParams: function(e) {
                        return (e = Array.prototype.slice.call(e)).push((new Date).getTime()), JSON.stringify(e)
                    },
                    _decodeParams: function(e) {
                        var t = JSON.parse(e);
                        return t.pop(), t
                    },
                    guid: o.guid(),
                    _init: function() {
                        if (this._needInstantiating()) this._instantiatePushStream();
                        else {
                            var e = this._decodeConnectionStatus(r.getItem(this._connectionStatusKey));
                            b = e[0], y = e[1]
                        }
                        setTimeout((function() {
                            T.isConnected() || (f.logNormal("Not connected for a while after init..."), i("pushstream", "not connected after init", navigator.userAgent))
                        }), T._activityTimeout)
                    },
                    _instantiatePushStream: function(n) {
                        this._setMark(), e && (i("PushstreamDoublePublic", window.user && window.user.username || "Guest", navigator.userAgent), e.disconnect()), (e = new a(this._dispatchMessage.bind(this), P)).connectionStatus().subscribe(function(e) {
                            this._dispatchStatusChange(e, y)
                        }.bind(this)), t && (i("PushstreamDoublePrivate", window.user && window.user.username || "Guest", navigator.userAgent), t.disconnect()), (t = new a(this._dispatchMessage.bind(this), P)).connectionStatus().subscribe(function(e) {
                            this._dispatchStatusChange(b, e)
                        }.bind(this)), this.on("pushstream_set_user_channel", function(e) {
                            this._setUserChannel(e)
                        }.bind(this)), this._connectChannels(n)
                    },
                    _destructPushStream: function() {
                        var n = e;
                        e = null, n.disconnect(), n = t, t = null, n.disconnect(), this._dispatchStatusChangeFromOther(r.getItem(this._connectionStatusKey))
                    },
                    _activityTimeout: 5e3,
                    _delayTimeout: 2e4,
                    _pulseActivity: function() {
                        this.ownPushStream() ? this._lostOwn() ? (f.logNormal("Lost own pushstream connection"), l.sendReport("site", "pushstream_lost_own"), this._destructPushStream()) : this._setMark() : this._needInstantiating() && !E && (f.logNormal("Creating pushstream connection, because other tab lost it"), l.sendReport("site", "pushstream_pick_up"), this._instantiatePushStream(this.getChannels()))
                    },
                    _markName: w + "mark",
                    _lostOwn: function() {
                        var e = r.getItem(this._markName);
                        return !!e && (e = this._decodeParams(e))[0] !== this.guid
                    },
                    _getMark: function() {
                        return this._decodeParams(r.getItem(this._markName))
                    },
                    _setMark: function() {
                        r.setItem(this._markName, this._codeParams([this.guid, (new Date).getTime()]))
                    },
                    _unsetMark: function() {
                        r.setItem(this._markName, "")
                    },
                    _needInstantiating: function() {
                        var e = r.getItem(this._markName);
                        if (e) {
                            var t = (e = this._decodeParams(e))[1];
                            return (new Date).getTime() - t > this._delayTimeout
                        }
                        return !0
                    },
                    _onRequestRecreate: function(e) {
                        if (!this.ownPushStream() && this._needInstantiating()) {
                            var t = this._decodeParams(e)[0];
                            f.logNormal("Creating pushstream connection after recreate request"), this._instantiatePushStream(t)
                        }
                    },
                    _onUnload: function() {
                        this.ownPushStream() && (this._unsetMark(), this._sendRecreateRequest())
                    },
                    _getChannels: function() {
                        return e.getChannels().concat(t.getChannels())
                    },
                    _channelsName: w + "channels",
                    _getChannelsFromStorage: function() {
                        var e = r.getItem(this._channelsName);
                        return e ? JSON.parse(e) : []
                    },
                    getChannels: function() {
                        return this.ownPushStream() ? this._getChannels() : this._getChannelsFromStorage()
                    },
                    _storeChannels: function() {
                        r.setItem(this._channelsName, JSON.stringify(this._getChannels()))
                    },
                    _sendRecreateRequest: function() {
                        var e = this._getChannels();
                        s.emit(this._xEventRecreate, this._codeParams([e]))
                    },
                    ownPushStream: function() {
                        return !!e || !!t
                    },
                    pushStream: function() {
                        if (!this.ownPushStream()) throw new Error("Not own PushStream");
                        return e
                    },
                    isConnected: function() {
                        return b > 0
                    },
                    status: function() {
                        return b || h.Closed
                    },
                    statusPrivate: function() {
                        return y || h.Closed
                    },
                    _userChannel: function(e) {
                        return C + e
                    },
                    userChannel: function() {
                        if (!_) throw new Error("No user channel");
                        return this._userChannel(_)
                    },
                    _xEventRecreate: S + "recreate",
                    _xEventSend: S + "send",
                    _xEventChannelAdd: S + "channelAdd",
                    _xEventChannelRemove: S + "channelRemove",
                    _xEventRequiredChannels: S + "requirech",
                    _xEventConnectionStatus: S + "connectionStatus",
                    _xEventReconnectCommand: S + "reconnectCommand",
                    _xEventRequestLogs: S + "requestLogs",
                    _xEventShareLogs: S + "shareLogs",
                    _shareLogsKey: w + "shareLogs",
                    _connectionStatusKey: w + "connectionStatus",
                    _addChannel: function(n) {
                        var o = n.startsWith(C) ? t : e;
                        o.hasChannel(n) || (o.addChannel(n), this._storeChannels())
                    },
                    addChannel: function(e) {
                        this.ownPushStream() ? this._addChannel(e) : s.emit(this._xEventChannelAdd, this._codeParams([e]))
                    },
                    _addChannelFromOther: function(e) {
                        var t = this._decodeParams(e)[0];
                        this.ownPushStream() && this._addChannel(t)
                    },
                    _removeChannel: function(n) {
                        var o = n.startsWith(C) ? t : e;
                        o.hasChannel(n) && (o.removeChannel(n), this._storeChannels())
                    },
                    removeChannel: function(e) {
                        this.ownPushStream() ? this._removeChannel(e) : s.emit(this._xEventChannelRemove, this._codeParams([e]))
                    },
                    _removeChannelFromOther: function(e) {
                        var t = this._decodeParams(e)[0];
                        this.ownPushStream() && this._removeChannel(t)
                    },
                    _connectChannels: function(t) {
                        e.addChannel("public"), void 0 !== t && t.length > 0 && t.forEach((function(t) {
                            t.startsWith(C) || e.hasChannel(t) || e.addChannel(t)
                        })), "is_authenticated" in window ? this._connectUserChannelInitial(!0) : window.loginStateChange && loginStateChange.subscribe(this, this._connectUserChannelInitial), e.connect()
                    },
                    _connectUserChannelInitial: function(e) {
                        e && (is_authenticated ? (_ = user.private_channel, t.addChannel(this.userChannel()), t.connect()) : _ = null)
                    },
                    _changeLoginState: function(e) {
                        e || (is_authenticated ? (_ = user.private_channel, this.ownPushStream() && (this._addChannel(this.userChannel()), t.connect())) : (this.ownPushStream() && (this._removeChannel(this.userChannel()), t.disconnect()), _ = null))
                    },
                    _setUserChannel: function(e) {
                        f.logNormal("Set user channel " + e), e !== _ && (this.ownPushStream() && _ && this._removeChannel(this.userChannel()), _ = e, this.ownPushStream() && _ && this._addChannel(this.userChannel()))
                    },
                    _dispatchStatusChange: function(e, t) {
                        this._dispatchStatusChangeToOthers(e, t), this._dispatchStatusChangeToSelf(e, t)
                    },
                    _dispatchStatusChangeToSelf: function(e, t) {
                        e !== b && (b = e, this._callStatusHandlers(e, !1)), t !== y && (y = t, this._callStatusHandlers(t, !0))
                    },
                    _callStatusHandlers: function(e, t) {
                        f.logNormal("Connection status change: " + e + ", private " + t), l.sendReport("site", "pushstream_status_change"), u.forEach((function(n) {
                            n.isPrivate === t && n.handler(e)
                        }))
                    },
                    _decodeConnectionStatus: function(e) {
                        var t = parseInt(e, 10);
                        return isNaN(t) ? this._decodeParams(e) : [t, t]
                    },
                    _dispatchStatusChangeFromOther: function(e) {
                        var t = this._decodeConnectionStatus(e),
                            n = t[0],
                            o = t[1];
                        this.ownPushStream() || this._dispatchStatusChangeToSelf(n, o)
                    },
                    _dispatchStatusChangeToOthers: function(e, t) {
                        if (this.ownPushStream()) {
                            var n = this._codeParams([e, t]);
                            r.setItem(this._connectionStatusKey, n), s.emit(this._xEventConnectionStatus, n)
                        }
                    },
                    _dispatchMessage: function(e, t, n) {
                        this._dispatchMessageToOthers(e, t, n), this._dispatchMessageToSelf(e, t, n, !1)
                    },
                    _dispatchMessageToSelf: function(e, t, n, o) {
                        n = e.channel, e = e.content, this._emit(e, t, n, o)
                    },
                    _dispatchMessageToOthers: function(e, t, n) {
                        var o = [e, t, n, (new Date).getTime()];
                        s.emit(this._xEventSend, this._codeParams(o))
                    },
                    _dispatchMessageFromOther: function(e) {
                        if (!this.ownPushStream()) {
                            var t = this._decodeParams(e),
                                n = t[0],
                                o = t[1],
                                s = t[2];
                            this._dispatchMessageToSelf(n, o, s, !0)
                        }
                    },
                    _isSpecialChannel: function(e) {
                        return /\*/.test(e)
                    },
                    _emit: function(e, t, o, s) {
                        function i(n) {
                            n.call(this, e, t, o, s)
                        }
                        for (var r in n[o] && n[o].forEach(i, this), c) {
                            var a = "^" + r.replace(/\*/g, ".*?") + "$";
                            new RegExp(a).test(o) && c[r].forEach(i, this)
                        }
                    },
                    on: function(e, t) {
                        var o = this._isSpecialChannel(e) ? c : n;
                        o[e] || (o[e] = []), o[e].push(t)
                    },
                    off: function(e, t) {
                        var o = this._isSpecialChannel(e) ? c : n;
                        switch (arguments.length) {
                            case 0:
                                n = {}, c = {};
                                break;
                            case 1:
                                o[e] && delete o[e];
                                break;
                            default:
                                if (o[e]) {
                                    var s = o[e].indexOf(t);
                                    ~s && o[e].splice(s, 1)
                                }
                        }
                    },
                    onStatus: function(e) {
                        u.push({
                            handler: e,
                            isPrivate: !1
                        }), setTimeout((function() {
                            e(b)
                        }), 0)
                    },
                    onPrivateStatus: function(e) {
                        u.push({
                            handler: e,
                            isPrivate: !0
                        }), setTimeout((function() {
                            e(y)
                        }), 0)
                    },
                    offStatus: function(e) {
                        u = u.filter((function(t) {
                            return t.handler !== e
                        }))
                    },
                    forceConnect: function() {
                        E = !1, f.logNormal("Creating pushstream connection after force connect"), this.ownPushStream() ? (e.disconnect(), t.disconnect(), this._instantiatePushStream(this.getChannels())) : this._needInstantiating() ? this._instantiatePushStream() : s.emit(this._xEventReconnectCommand, {})
                    },
                    disconnect: function() {
                        this.ownPushStream() && (this._destructPushStream(), this._unsetMark(), E = !0)
                    },
                    _dispatchReconnectCommandFromOther: function() {
                        this.ownPushStream() && this.forceConnect()
                    },
                    _getOwnLogs: function(e) {
                        if (this.ownPushStream()) {
                            var t = g(e, m),
                                n = this.pushStream().getLogs();
                            return [].concat(t, n)
                        }
                        return []
                    },
                    _onRequestLogs: function(e) {
                        if (this.ownPushStream()) {
                            var t = this._getOwnLogs(e),
                                n = "";
                            try {
                                n = JSON.stringify(t)
                            } catch (e) {
                                f.logError("Failed to stringify own pushstream logs")
                            }
                            r.setItem(this._shareLogsKey, n), s.emit(this._xEventShareLogs, n)
                        }
                    },
                    getLogs: function(e) {
                        return new Promise(function(t) {
                            var n = setTimeout(function() {
                                    var e = r.getItem(this._shareLogsKey);
                                    t(null !== e ? JSON.parse(e) : [])
                                }.bind(this), 1e3),
                                o = function(e) {
                                    var i;
                                    s.off(this._xEventShareLogs, o), s.emit(this._xEventShareLogs, ""), clearTimeout(n);
                                    try {
                                        i = JSON.parse(e)
                                    } catch (e) {
                                        i = [], f.logError("Failed to parse logs received from master tab")
                                    }
                                    t(i)
                                }.bind(this);
                            this.ownPushStream() ? t(this._getOwnLogs(e)) : (s.on(this._xEventShareLogs, o), s.emit(this._xEventRequestLogs))
                        }.bind(this))
                    }
                };
                return T._init(), window.addEventListener("unload", T._onUnload.bind(T)), s.on(T._xEventRecreate, T._onRequestRecreate.bind(T)), s.on(T._xEventSend, T._dispatchMessageFromOther.bind(T)), s.on(T._xEventChannelAdd, T._addChannelFromOther.bind(T)), s.on(T._xEventChannelRemove, T._removeChannelFromOther.bind(T)), s.on(T._xEventConnectionStatus, T._dispatchStatusChangeFromOther.bind(T)), s.on(T._xEventReconnectCommand, T._dispatchReconnectCommandFromOther.bind(T)), s.on(T._xEventRequestLogs, T._onRequestLogs.bind(T)), k = function() {
                        window.loginStateChange && loginStateChange.subscribe(T, T._changeLoginState)
                    },
                    "loading" !== document.readyState ? k() : document.addEventListener("DOMContentLoaded", k), setInterval(T._pulseActivity.bind(T), T._activityTimeout), T._pulseActivity(), T
            }();
            e.exports = S
        },
        932496: (e, t, n) => {
            n.d(t, {
                TransportType: () => l,
                PushStream: () => u
            });
            var o = n(588537),
                s = n(37704),
                i = n(394485),
                r = n(175203),
                a = n(911905);
            const c = "PushStream",
                h = (0, a.getLogger)(c);
            var l;
            ! function(e) {
                e[e.EventSource = 0] = "EventSource", e[e.WebSocket = 1] = "WebSocket"
            }(l || (l = {}));
            class u {
                constructor(e, t) {
                    this._channels = [], this._transport = t.transportType === l.EventSource ? new s.PersistentEventSourceTransport(this._onPushStreamMessage.bind(this)) : new i.PersistentWebsocketTransport(this._onPushStreamMessage.bind(this), this._onPushStreamClose.bind(this)), this._settings = t, this._messageHandler = e
                }
                addChannel(e) {
                    (0, o.assert)(!this.hasChannel(e), "Channel already subscribed"), h.logNormal(`Adding channel ${e}`), this._channels.push(e), this._transport.setUrl(this._generateUrl())
                }
                removeChannel(e) {
                    const t = this._channels.indexOf(e);
                    (0, o.assert)(-1 !== t, "There is no that channel"), h.logNormal(`Removing channel ${e}`), this._channels.splice(t, 1), this._transport.setUrl(this._generateUrl())
                }
                getChannels() {
                    return this._channels
                }
                hasChannel(e) {
                    return -1 !== this._channels.indexOf(e)
                }
                connectionStatus() {
                    return this._transport.connectionStatus()
                }
                connect() {
                    (0, o.assert)(0 !== this._channels.length, "There is no channels"), this._transport.connect()
                }
                disconnect() {
                    this._transport.disconnect()
                }
                getLogs(e) {
                    return (0, a.getRawLogHistory)(e, c)
                }
                _onPushStreamMessage(e) {
                    if ("string" != typeof e) throw new Error("Wrong message type, expected string");
                    const t = JSON.parse(e),
                        n = t.id,
                        o = t.channel; - 2 === n ? h.logWarn("Received unexpected message: about removed the channel") : n > 0 && (h.logDebug(`Received message: id="${n}" channel="${o}"`), this._messageHandler(t.text, n, o))
                }
                _onPushStreamClose(e) {
                    1005 === e.code && r.telemetry.sendChartReport("websocket_code_1005")
                }
                _generateUrl() {
                    const e = this._channels.join("/");
                    return `${this._settings.url}/${this._settings.urlPath}/${e}`
                }
            }
        },
        564894: (e, t, n) => {
            n.r(t), n.d(t, {
                registerService: () => r,
                unregisterService: () => a,
                hasService: () => c,
                service: () => h,
                waitServiceRegistered: () => l
            });
            var o = n(579917);
            const s = {},
                i = new Map;

            function r(e, t) {
                if (c(e)) throw new Error("Service already registered");
                s[e.id] = t;
                const n = i.get(e.id);
                void 0 !== n && (i.delete(e.id), n.resolve(t))
            }

            function a(e) {
                if (!c(e)) throw new Error("Service not found");
                s[e.id] = void 0
            }

            function c(e) {
                return void 0 !== s[e.id]
            }

            function h(e) {
                const t = s[e.id];
                if (void 0 === t) throw new Error("ServiceLocator: Service " + e.id + " not found");
                return t
            }

            function l(e) {
                if (c(e)) return Promise.resolve(h(e));
                let t = i.get(e.id);
                return void 0 === t && (t = (0, o.createDeferredPromise)(), i.set(e.id, t)), t.promise
            }
        },
        62802: (e, t, n) => {
            e = n.nmd(e), n(638456);
            var o = n(86674).fetch,
                s = n(931493).regExpEscape,
                i = n(226722).TVXWindowEvents,
                r = n(49437).TVLocalStorage,
                a = n(97639),
                c = n(611688),
                h = n(125226).isFeatureEnabled,
                l = n(911905).getLogger("Lib.TVSettings"),
                u = ["s.tradingview.com", "betacdn.tradingview.com"],
                d = (c.enabled("use_localstorage_for_settings"), window.TVSettings = function() {
                    var e = !1,
                        t = null,
                        n = !1;

                    function _() {
                        return !(t || window.is_authenticated)
                    }
                    try {
                        e = !TradingView.onWidget() && parent && parent !== window && !!parent.IS_DEMO_PAGE
                    } catch (e) {}
                    if (e) {
                        var g = {
                                "widgetbar.layout-settings": {
                                    widgets: {},
                                    settings: {
                                        minimized: !0
                                    }
                                },
                                notShowMainWizard: !0
                            },
                            m = function(e, t, n) {
                                var o = g[e];
                                return null == o ? t : o
                            },
                            f = function() {};
                        return {
                            loaded: !1,
                            loadedModel: !1,
                            getValue: m,
                            getJSON: m,
                            getBool: m,
                            getFloat: m,
                            getInt: m,
                            setValue: f,
                            setJSON: f,
                            remove: f,
                            keys: function() {
                                return Object.keys(g)
                            },
                            keysMask: function() {
                                return []
                            },
                            sync: f,
                            onSync: {
                                subscribe: function() {}
                            }
                        }
                    }
                    var p = 12e4;
                    "local" === window.environment && (p = 5e3);
                    var v, S, w, C = TradingView.onWidget() ? "tradingview-widget" : "tradingview",
                        b = C + ".",
                        y = {},
                        E = [],
                        P = [/^widgetbar\.widget\.watchlist.+/, /.+quicks$/, /^widgetbar\.layout-settings$/, /^ChartSideToolbarWidget\.visible$/, /^onwidget\.watchlist$/, /^domepanel.visible$/, /^orderpanel.visible$/, /^chart\.favoriteDrawings$/, /^chart\.favoriteDrawingsPosition$/, /^loadChartDialog.favorites$/, /^ChartFavoriteDrawingToolbarWidget\.visible/, /^trading\.chart\.proterty$/, /^trading_floating_toolbar\.position$/, /^trading\.orderWidgetMode\./, /^symbolWatermark$/, /^pinereference\.size$/, /^pinereference\.position$/, /^hint\.+/, /^ChartDrawingToolbarWidget\.visible/];

                    function k(e) {
                        return b + e
                    }

                    function T(e) {
                        return e.substring(b.length)
                    }

                    function O(e, t) {
                        var n = y[e];
                        return null == n ? t : n
                    }

                    function R(e, t, n) {
                        n = n || {};
                        var o = "" + t;
                        return y[e] !== o && (y[e] = o, I(e)), n.forceFlush && !S && (S = setTimeout((function() {
                            S = void 0, N()
                        }), 10)), d
                    }

                    function L(e, t) {
                        return t = t || {}, null != y[e] && (delete y[e], I(e)), t.forceFlush && N(), d
                    }

                    function x() {
                        v = void 0, E.length && N()
                    }

                    function I(e) {
                        if (t) null == y[e] ? t.removeValue(e) : t.setValue(e, y[e]);
                        else if (_()) try {
                            null == y[e] ? r.removeItem(k(e)) : r.setItem(k(e), y[e])
                        } catch (e) {} else E.push(e), v || (v = setTimeout(x, p));
                        i.emit("settings", JSON.stringify({
                            key: e,
                            value: y[e]
                        }))
                    }

                    function N(e) {
                        if (!n && !w)
                            if (h("disable_save_settings")) l.logWarn("Settings flashing has been skipped because of disable_save_settings featuretoggle");
                            else if (!c.enabled("widget") && !_() && 0 !== E.length) {
                            var t = E;
                            E = [];
                            for (var s = {}, i = t.length; i--;) {
                                var r = t[i],
                                    a = y[r];
                                void 0 === a && (a = null), s[r] = a
                            }
                            var u = new FormData;
                            u.append("delta", JSON.stringify(s)), e && navigator.sendBeacon ? navigator.sendBeacon("/savesettings/", u) : o("/savesettings/", {
                                method: "POST",
                                credentials: "include",
                                body: u
                            }).then((function(n) {
                                if (n.ok || (E = E.concat(t)), [429, 503].includes(n.status)) {
                                    var o = 1e3 * +n.headers.get("retry-after") || 3e5;
                                    w = setTimeout((() => {
                                        w = void 0, N(e)
                                    }), o)
                                }
                            })).catch((function() {
                                E = E.concat(t)
                            }))
                        }
                    }

                    function A() {
                        return Object.keys(y)
                    }

                    function M(e) {
                        for (var t = 0; t < P.length; ++t)
                            if (P[t].exec(e)) return !0;
                        return !1
                    }

                    function H(e) {
                        return e.substring(0, b.length) === b
                    }

                    function $(e) {
                        y = {};
                        const t = 0 === Object.keys(e).length;
                        t || function(e) {
                                Object.keys(e).forEach((function(t) {
                                    y[t] = e[t] + ""
                                }))
                            }(e),
                            function(e) {
                                for (var t = r.length; t--;) {
                                    var n = r.key(t);
                                    n && H(n) && (e && R(T(n), r.getItem(n)), r.removeItem(n))
                                }
                            }(t)
                    }
                    i.on("settings", (function(e) {
                        var t = JSON.parse(e);
                        null == t.value ? delete y[t.key] : y[t.key] = t.value
                    }));
                    var D = new a;
                    return document.addEventListener("visibilitychange", (function() {
                        "hidden" !== document.visibilityState && !0 !== document.hidden || N()
                    })), window.addEventListener("beforeunload", (function() {
                        N(!0)
                    })), {
                        loaded: !1,
                        loadedModel: !1,
                        getValue: O,
                        getJSON: function(e, t) {
                            var n = O(e, void 0);
                            if (null == n) return t;
                            try {
                                return JSON.parse(n)
                            } catch (n) {
                                return L(e), t
                            }
                        },
                        getBool: function(e, t) {
                            var n = O(e);
                            return null == n ? t : !(!n || "false" === n || 0 == +n)
                        },
                        getFloat: function(e, t, n) {
                            var o = O(e, void 0);
                            if (null == o) return t;
                            var s = parseFloat(o);
                            if (!isFinite(s)) throw new TypeError('"' + o + '" is not float (key: "' + e + '")');
                            return s
                        },
                        getInt: function(e, t, n) {
                            var o = O(e, void 0);
                            if (null == o) return t;
                            var s = parseInt(o, 10);
                            if (!isFinite(s)) throw new TypeError('"' + o + '" is not int (key: "' + e + '")');
                            return s
                        },
                        setValue: R,
                        setJSON: function(e, t, n) {
                            return R(e, JSON.stringify(t), n), d
                        },
                        remove: L,
                        keys: A,
                        keysMask: function(e, t) {
                            for (var n = A(), o = [], i = (e = new RegExp("^" + s(e).replace(/\\\*\\\*/gi, ".+").replace(/\\\*/gi, "[^.]+") + "$", "gi"), n.length - 1); i >= 0; i--) e.test(n[i]) && o.push(n[i]), e.lastIndex = 0;
                            return o
                        },
                        sync: function(e) {
                            null !== e ? (t ? $(t.initialSettings || {}) : _() ? (function() {
                                if (TradingView.onWidget() && u.includes(window.location.host))
                                    for (var e = "tradingview.", t = r.length; t--;) {
                                        var n = r.key(t);
                                        if (0 === n.indexOf(e)) {
                                            var o = n.replace(e, C + ".");
                                            r.setItem(o, r.getItem(n)), r.removeItem(n)
                                        }
                                    }
                            }(), function() {
                                y = {};
                                for (var e = !c.enabled("save_chart_properties_to_local_storage"), t = r.length; t--;) {
                                    var n = r.key(t);
                                    if (n && H(n)) {
                                        var o = n.substring(b.length);
                                        e && !M(o) || (y[o] = r.getItem(n))
                                    }
                                }
                            }()) : $(e || {}), D.fire()) : n = !0
                        },
                        onSync: D,
                        setSettingsAdapter: function(e) {
                            t = e
                        }
                    }
                }());
            setTimeout((function() {
                n.e(30362).then(n.bind(n, 276141)).then((e => {
                    e.clearOldSettings()
                }))
            }), 3e4), e && e.exports && (e.exports = d)
        },
        175203: (e, t, n) => {
            n.d(t, {
                telemetry: () => u
            });
            var o = n(97639),
                s = n.n(o),
                i = n(86674),
                r = n(638456),
                a = n(314802);
            n(659863);
            const c = (0, n(911905).getLogger)("Common.Telemetry"),
                h = {
                    default: 15e3,
                    site: 3e5
                },
                l = ["before_websocket_connection_time_frame", "websocket_connection_time_frame", "first_series_full_time_frame", "page_full_load_time_frame", "page_load_time_frame"];
            const u = new class {
                constructor() {
                    this.reportSent = new(s()), this.timeCounters = {
                        series: {
                            marks: []
                        },
                        study: {},
                        pine: {}
                    }, this._timeoutIds = {}, this._commonAdditionalData = {
                        cluster: null,
                        userId: "0"
                    }, this._reportStash = {}
                }
                setSessionInfo(e) {
                    const t = this._parseCluster(e);
                    null !== t && (this._commonAdditionalData.cluster = t)
                }
                sendReport(e, t, n) {
                    var o;
                    if (!this._isAbleToSendReport(t)) return;
                    const s = this._getSubserviceType(e),
                        i = this._getHost(e, s);
                    if (null !== i) {
                        if (n = void 0 === n ? {
                                count: 1
                            } : n, this._addReportToStash(n, t, i), !this._timeoutIds[e]) {
                            const t = null !== (o = h[e]) && void 0 !== o ? o : h.default;
                            this._timeoutIds[e] = setTimeout(this._sendTelemetryToService.bind(this, e, i), t)
                        }
                    } else c.logError(`Unable to get host for counter: ${t}, metric type: ${e}, serivce type: ${s}`)
                }
                sendChartReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("charts", e, t, n)
                }
                sendLineToolsStorageReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("line_tools_storage", e, t, n)
                }
                _sendServiceSpecifiedReport(e, t, n, o = !0) {
                    this._updateUserInfo(), n = void 0 === n ? {
                            count: 1
                        } : n, o && (n = this._appendCommonAdditionalInfo(n, ["cluster", "userId"])),
                        this.sendReport(e, t, n)
                }
                _updateUserInfo() {
                    const e = "user" in window && "id" in window.user ? window.user.id : "0";
                    this._commonAdditionalData.userId = String(e)
                }
                _isAbleToSendReport(e) {
                    const t = window.TELEMETRY_HOSTS,
                        n = l.includes(e),
                        o = Boolean(window.TradingView.onChartPage || (0, r.onWidget)());
                    return t && (!n || o)
                }
                _sendTelemetryToService(e, t) {
                    if (this._reportStash.hasOwnProperty(t)) {
                        const e = this._cropParams(this._reportStash[t]),
                            n = this._renameAllParams(e),
                            o = {
                                event: "report_stash",
                                params: this._cleanAllParams(n)
                            };
                        c.logDebug(`Report to host: ${t}; stash: ${JSON.stringify(this._reportStash[t])}`), this.reportSent.fire(this._reportStash[t]), delete this._reportStash[t], (0, i.fetch)(`${t}/report`, {
                            method: "POST",
                            body: JSON.stringify(o)
                        })
                    }
                    this._timeoutIds[e] = null
                }
                _getHost(e, t) {
                    const n = window.TELEMETRY_HOSTS,
                        o = n[e] && n[e][t];
                    return Boolean(o) ? o : null
                }
                _getSubserviceType(e) {
                    if (!["charts", "site"].includes(e)) return "all";
                    let t = "free";
                    const n = window.user.is_pro;
                    return "charts" === e && (0, a.isOnMobileAppPage)("old") ? t = n ? "ios_pro" : "ios_free" : "charts" === e && (0, a.isOnMobileAppPage)("new") ? t = n ? "android_pro" : "android_free" : (0, r.onWidget)() ? t = "widget" : n && (t = "pro"), t
                }
                _parseCluster(e) {
                    let t;
                    try {
                        t = JSON.parse(e).session_id
                    } catch (e) {
                        return c.logError("Could not parse cluster id (session id)"), null
                    }
                    const n = /(.*@)(.*)/gi.exec(t);
                    return null !== n && n.length >= 3 ? n[2] : null
                }
                _appendCommonAdditionalInfo(e, t) {
                    return t.forEach((t => {
                        t in this._commonAdditionalData && (e.additional = e.additional || {}, e.additional[t] = this._commonAdditionalData[t])
                    })), e
                }
                _cropParams(e) {
                    var t;
                    for (const n in e) e.hasOwnProperty(n) && e[n].length > 1e3 && (e.too_much_metrics_frame = null !== (t = e.too_much_metrics_frame) && void 0 !== t ? t : [], e.too_much_metrics_frame.push({
                        value: e[n].length,
                        additional: {
                            event: n
                        }
                    }), delete e[n]);
                    return e
                }
                _renameAllParams(e) {
                    const t = {};
                    for (const n in e) e.hasOwnProperty(n) && (t[n] = [], e[n].forEach((e => {
                        t[n].push(this._renameEntryParams(e))
                    })));
                    return t
                }
                _renameEntryParams(e) {
                    const t = {
                        count: "c",
                        value: "v",
                        text: "t",
                        additional: "a"
                    };
                    return Object.keys(e).reduce(((n, o) => (n[t[o]] = e[o], n)), {})
                }
                _cleanAllParams(e) {
                    const t = {};
                    for (const n in e)
                        if (e.hasOwnProperty(n)) {
                            t[n] = [];
                            const o = {
                                c: 0
                            };
                            e[n].forEach((e => {
                                const s = this._cleanEntryParams(e),
                                    i = Object.keys(s).length;
                                1 === i && void 0 !== s.c ? o.c += s.c : i > 0 && t[n].push(s)
                            })), o.c > 0 && t[n].push(o), 0 === t[n].length && delete t[n]
                        }
                    return t
                }
                _cleanEntryParams(e) {
                    const t = Object.keys(e).reduce(((t, n) => "c" !== n && "t" !== n || e[n] ? (t[n] = e[n], t) : t), {});
                    return "c" in t || "v" in t || "t" in t ? t : {}
                }
                _addReportToStash(e, t, n) {
                    n in this._reportStash || (this._reportStash[n] = {}), t in this._reportStash[n] || (this._reportStash[n][t] = []), Object.keys(e).length > 0 && this._reportStash[n][t].push(e)
                }
            }
        }
    }
]);