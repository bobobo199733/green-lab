"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [34604], {
        588537: (e, t) => {
            function n(e, t) {
                if (void 0 === e) throw new Error((null != t ? t : "Value") + " is undefined");
                return e
            }

            function s(e, t) {
                if (null === e) throw new Error((null != t ? t : "Value") + " is null");
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ensureNever = t.ensure = t.ensureNotNull = t.ensureDefined = t.assert = void 0, t.assert = function(e, t) {
                if (!e) throw new Error("Assertion failed" + (t ? ": " + t : ""))
            }, t.ensureDefined = n, t.ensureNotNull = s, t.ensure = function(e, t) {
                return s(n(e, t), t)
            }, t.ensureNever = function(e) {}
        },
        262325: (e, t, n) => {
            e = n.nmd(e);
            var s = n(911905).getLogger("Common.WatchedValue");

            function o() {}

            function r(e) {
                if (!(this instanceof r)) return new r(e);
                arguments.length > 0 && (this._value = e), this._listeners = []
            }
            r.prototype.value = function() {
                return this._owner ? this._owner._value : this._value
            }, r.prototype.setValue = function(e, t) {
                var n = this._owner ? this._owner : this;
                if ("function" == typeof n.hook && (e = n.hook(e)), n.writeLock) return n._value;
                var o = n._value === e || Number.isNaN(n._value) && Number.isNaN(e);
                if (!t && o && n.hasOwnProperty("_value")) return e;
                n._value = e;
                for (var r = n._listeners.slice(), i = 0, a = 0; a < r.length; a++) {
                    r[a].once && (n._listeners.splice(a - i, 1), i++);
                    try {
                        r[a].cb(e)
                    } catch (e) {
                        s.logError(e.stack || e.message)
                    }
                }
                return e
            }, r.prototype.deleteValue = function() {
                var e = this._owner ? this._owner : this;
                if (e.hasOwnProperty("_value")) {
                    if (e.writeLock) return e._value;
                    delete e._value;
                    for (var t = e._listeners.slice(), n = 0, o = 0; o < t.length; o++) {
                        t[o].once && (e._listeners.splice(o - n, 1), n++);
                        try {
                            t[o].cb()
                        } catch (e) {
                            s.logError(e.stack || e.message)
                        }
                    }
                }
            }, r.prototype.subscribe = function(e, t) {
                if ("function" != typeof e) throw new TypeError("callback must be a function");
                var n = !!t && !!t.once,
                    o = !!t && !!t.callWithLast,
                    r = this._owner ? this._owner : this;
                if (o && r.hasOwnProperty("_value")) {
                    try {
                        e(r._value)
                    } catch (e) {
                        s.logError(e.stack || e.message)
                    }
                    if (n) return
                }
                r._listeners.push({
                    cb: e,
                    owner: this,
                    once: !!t && !!t.once
                })
            }, r.prototype.unsubscribe = function(e) {
                var t = this._owner ? this._owner : this;
                void 0 === e && (e = null);
                for (var n = t._listeners, s = n.length; s--;) n[s].owner !== this && t !== this || n[s].cb !== e && null !== e || n.splice(s, 1)
            }, r.prototype.listeners = function() {
                return (this._owner ? this._owner : this)._listeners
            }, r.prototype.readonly = function() {
                if (this._readonlyInstance) return this._readonlyInstance;
                var e = this._readonlyInstance = new o;
                return e.subscribe = this.subscribe.bind(this), e.unsubscribe = this.unsubscribe.bind(this), e.value = this.value.bind(this), e.when = this.when.bind(this), e.spawn = function() {
                    return this.spawn.apply(this, arguments).readonly()
                }.bind(this), this.destroy && (e.destroy = this.destroy.bind(this)), e
            }, r.prototype.spawn = function(e) {
                var t = new r;
                return delete t._listeners, t._owner = this._owner || this, t.destroy = function() {
                    if ("function" == typeof e) try {
                        e()
                    } catch (e) {
                        s.logError(e.stack || e.message)
                    }
                    this.unsubscribe(), delete this._owner
                }, t
            }, r.prototype.when = function(e) {
                var t = this;
                if (this.value()) try {
                    e()
                } catch (e) {
                    s.logError(e.stack || e.message)
                } else {
                    var n = function(s) {
                        s && (t.unsubscribe(n), e())
                    };
                    t.subscribe(n)
                }
            }, r.prototype.opposite = function() {
                if (!this._opposite) {
                    var e = this,
                        t = new r(!this.value());
                    this.subscribe((function(e) {
                        t.setValue(!e)
                    })), t.subscribe((function(t) {
                        e.setValue(!t)
                    })), this._opposite = t
                }
                return this._opposite
            }, "undefined" != typeof window && (window.WatchedValue = r), e && e.exports && (e.exports = r)
        },
        246433: (e, t, n) => {
            var s;
            n.d(t, {
                    ConnectionStatus: () => s
                }),
                function(e) {
                    e[e.Closed = 0] = "Closed", e[e.Connecting = 1] = "Connecting", e[e.Open = 2] = "Open"
                }(s || (s = {}))
        },
        37704: (e, t, n) => {
            n.d(t, {
                PersistentEventSourceTransport: () => i
            });
            var s = n(246433),
                o = n(673438);
            const r = (0, n(911905).getLogger)("PersistentWebsocketTransport");
            class i extends o.PersistentTransport {
                constructor(e) {
                    super(e, r), this._specializedErrorHandlerBound = this._specializedErrorHandler.bind(this)
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
                    this._socket = null, this._connectionStatus.setValue(s.ConnectionStatus.Closed), e.readyState !== WebSocket.CLOSED && e.close()
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
            var s = n(246433),
                o = n(55111),
                r = n(262325),
                i = n.n(r),
                a = n(97639),
                c = n.n(a),
                h = n(761068);
            class l {
                constructor(e, t, n) {
                    this._url = "", this._socket = null, this._reconnectCount = 0, this._onlineCancellationToken = null, this._connectionStatus = new(i())(s.ConnectionStatus.Closed), this._socketCloseHandler = this._onCloseCallback.bind(this), this._socketErrorHandler = this._onErrorCallback.bind(this), this._socketOpenHandler = this._onOpenCallback.bind(this), this._socketMessageHandler = this._onMessageCallback.bind(this), this._maxReconnectReachedEventDelegate = new(c()), this._shouldReconnect = !0, this._maxReconnectCount = null, this._reconnectTimeoutId = 0, this._connectAbortController = null, this._tryReconnect = () => {
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
                    const t = this._connectionStatus.value() !== s.ConnectionStatus.Closed;
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
                    null === (e = this._connectAbortController) || void 0 === e || e.abort(), this._connectAbortController = null, clearTimeout(this._reconnectTimeoutId), this._reconnectTimeoutId = 0, this._connectionStatus.value() !== s.ConnectionStatus.Closed ? this._socket ? (this._logger.logNormal(`Closing connection to: ${this._socket.url}, currentStatus: ${s.ConnectionStatus[this._connectionStatus.value()]}`), this._disconnectTransport()) : this._logger.logNormal("Disconnecting without socket - probably within preparing, it should be already scheduled for aborting") : this._logger.logNormal("Attempt to close connection but it is closed already")
                }
                _onErrorCallback() {
                    this._logger.logInfo("Connection is closed by error"), this._tryReconnect()
                }
                _onCloseCallback(e) {
                    var t;
                    this._logger.logInfo(`Connection is closed - code=${e.code} msg=${e.reason}`), null === (t = this._closeHandler) || void 0 === t || t.call(this, e), this._tryReconnect()
                }
                _tryReconnectImpl() {
                    return null !== this._maxReconnectCount && this._reconnectCount === this._maxReconnectCount ? (this._logger.logWarn("Maximum attempts to reconnect to websocket reached"), void this._maxReconnectReachedEventDelegate.fire()) : (this._reconnectCount += 1, this._logger.logInfo(`Reconnecting count: ${this._reconnectCount}`), navigator.onLine ? (this._logger.logInfo("Network status: online - trying to connect"), void this.connect()) : (this._logger.logInfo("Network status: offline - wait until online"), void(this._onlineCancellationToken = (0, o.callWhenOnline)((() => {
                        this._logger.logInfo("Network status changed to online - trying to connect"), this.connect()
                    })))))
                }
                _onOpenCallback() {
                    this._logger.logNormal("Connection opened"), this._reconnectCount = 0, this._connectionStatus.setValue(s.ConnectionStatus.Open)
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
                    if (this._connectionStatus.value() !== s.ConnectionStatus.Closed) return void this._logger.logNormal("Attempt to open connection but it is not closed");
                    this._socket && (this._logger.logError("Something went wrong - code 0x2"), this.disconnect()), this._onlineCancellationToken && (this._onlineCancellationToken(), this._onlineCancellationToken = null), this._logger.logNormal(`Connecting to ${this._url}`), this._shouldReconnect = !0, this._connectAbortController = new AbortController;
                    const e = this._connectAbortController.signal;
                    try {
                        if (this._connectionStatus.setValue(s.ConnectionStatus.Connecting), await this._prepareParamsForConnection(e), e.aborted) throw (0, h.createAbortError)();
                        this._socket = this._createNativeTransport(this._url), this._setOnOfflineListener()
                    } catch (e) {
                        this._connectionStatus.setValue(s.ConnectionStatus.Closed), (0, h.skipAbortError)(e)
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
            var s = n(911905),
                o = n(246433),
                r = n(673438);
            const i = (0, s.getLogger)("PersistentWebsocketTransport");
            class a extends r.PersistentTransport {
                constructor(e, t) {
                    super(e, i, t)
                }
                sendMessage(e) {
                    this._connectionStatus.value() === o.ConnectionStatus.Open ? this._socket ? this._socket.send(e) : i.logError("Something went wrong - code 0x3") : i.logWarn("Attempt to send message but connection is not opened")
                }
                _createNativeTransport(e) {
                    const t = new WebSocket(e);
                    return t.binaryType = "arraybuffer", t.addEventListener("error", this._socketErrorHandler), t.addEventListener("close", this._socketCloseHandler), t.addEventListener("open", this._socketOpenHandler), t.addEventListener("message", this._socketMessageHandler), t
                }
                _disconnectTransport() {
                    if (null === this._socket) return;
                    this._socket.removeEventListener("error", this._socketErrorHandler), this._socket.removeEventListener("close", this._socketCloseHandler), this._socket.removeEventListener("open", this._socketOpenHandler), this._socket.removeEventListener("message", this._socketMessageHandler), this._removeOnOfflineListener();
                    const e = this._socket;
                    this._socket = null, this._connectionStatus.setValue(o.ConnectionStatus.Closed), e.readyState !== WebSocket.CLOSED && e.close()
                }
            }
        },
        761068: (e, t, n) => {
            function s(e) {
                let t = null;
                return (n, ...s) => (null == t || t.abort(), t = new AbortController, null == n || n.addEventListener("error", (() => null == t ? void 0 : t.abort()), {
                    once: !0
                }), e(t.signal, ...s))
            }

            function o(e) {
                if (!c(e)) throw e
            }

            function r(e) {
                if (c(e)) throw e
            }

            function i(e) {
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
                return Promise.race([i(e), t])
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
                respectLatest: () => s,
                skipAbortError: () => o,
                rethrowAbortError: () => r,
                createAbortError: () => a,
                isAbortError: () => c,
                respectAbort: () => h,
                delay: () => l
            })
        },
        55111: (e, t, n) => {
            n.d(t, {
                callWhenOnline: () => o,
                waitForOnline: () => r
            });
            var s = n(761068);

            function o(e) {
                let t = e;
                const n = () => {
                    window.removeEventListener("online", n), t && t()
                };
                return window.addEventListener("online", n), () => {
                    t = null
                }
            }
            async function r(e = null) {
                return !0 === navigator.onLine || void 0 === navigator.onLine ? Promise.resolve() : (0, s.respectAbort)(e, new Promise((e => {
                    const t = () => {
                        window.removeEventListener("online", t), e()
                    };
                    window.addEventListener("online", t)
                })))
            }
        },
        910288: (e, t, n) => {
            function s(e, t, n, s, o) {
                let r = "";
                if (s = s ? "; path=" + s : "", o = o ? "; domain=" + o : "", n) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=" + e.toUTCString()
                } else r = "";
                document.cookie = e + "=" + t + r + o + s
            }

            function o(e) {
                const t = e + "=",
                    n = document.cookie.split(";");
                for (let e = 0; e < n.length; e++) {
                    let s = n[e];
                    for (;
                        " " === s.charAt(0);) s = s.substring(1, s.length);
                    if (0 === s.indexOf(t)) return s.substring(t.length, s.length)
                }
                return null
            }
            n.d(t, {
                set: () => s,
                get: () => o
            })
        },
        95935: (e, t, n) => {
            n.r(t), n.d(t, {
                guid: () => o,
                randomHash: () => r,
                randomHashN: () => i
            });
            const s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function o() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }))
            }

            function r() {
                return i(12)
            }

            function i(e) {
                let t = "";
                for (let n = 0; n < e; ++n) {
                    const e = Math.floor(Math.random() * s.length);
                    t += s[e]
                }
                return t
            }
        },
        251954: (e, t, n) => {
            n.r(t), n.d(t, {
                unsubscribe: () => c,
                on: () => h,
                subscribe: () => l,
                subscribeToAll: () => u,
                emit: () => d,
                emitOnce: () => _
            });
            var s = n(97639),
                o = n.n(s);
            const r = {},
                i = [],
                a = {};

            function c(e, t, n) {
                r[e].unsubscribe(n, t)
            }

            function h(e, t, n) {
                l(e, t, n)
            }

            function l(e, t, n, s) {
                r.hasOwnProperty(e) || (r[e] = new(o())), a[e] ? t.call(n) : r[e].subscribe(n, t, s)
            }

            function u(e) {
                i.push(e)
            }

            function d(e, ...t) {
                const n = [e].concat(t);
                i.forEach((e => {
                    e.apply(null, n)
                })), r.hasOwnProperty(e) && r[e].fire.apply(r[e], t)
            }

            function _(e) {
                a[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`), a[e] = !0, d.apply(null, arguments)
            }
        },
        314802: (e, t, n) => {
            n.d(t, {
                isOnMobileAppPage: () => o,
                urlWithMobileAppParams: () => r
            });
            var s = n(910288);

            function o(e, t = !1) {
                const {
                    searchParams: n
                } = new URL(String(location)), o = s.get("tv_app") || "";
                let r = "true" === n.get("mobileapp_new"),
                    i = "true" === n.get("mobileapp");
                return t || (r || (r = ["android", "android_nps"].includes(o)), i || (i = "ios" === o)), !("new" !== e && "any" !== e || !r) || !("new" === e || !i)
            }

            function r(e) {
                if (o("new")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp_new", "true"), e = t.toString()
                }
                if (o("old")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp", "true"), e = t.toString()
                }
                return e
            }
        },
        501867: (e, t, n) => {
            var s = n(95935),
                o = n(226722).TVXWindowEvents,
                r = n(345848).trackEvent,
                i = n(49437).TVLocalStorage,
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
            var w = function() {
                var e = null,
                    t = null,
                    n = {},
                    c = {},
                    u = [],
                    _ = null,
                    w = "multiplexer-bc-",
                    S = "pushStreamMultiplexerState.",
                    C = "private_",
                    b = h.Closed,
                    y = h.Closed,
                    E = !1;
                const k = d("enable_eventsource_pushstream_transport") ? v : p;
                var P, T = {
                    _codeParams: function(e) {
                        return (e = Array.prototype.slice.call(e)).push((new Date).getTime()), JSON.stringify(e)
                    },
                    _decodeParams: function(e) {
                        var t = JSON.parse(e);
                        return t.pop(), t
                    },
                    guid: s.guid(),
                    _init: function() {
                        if (this._needInstantiating()) this._instantiatePushStream();
                        else {
                            var e = this._decodeConnectionStatus(i.getItem(this._connectionStatusKey));
                            b = e[0], y = e[1]
                        }
                        setTimeout((function() {
                            T.isConnected() || (f.logNormal("Not connected for a while after init..."), r("pushstream", "not connected after init", navigator.userAgent))
                        }), T._activityTimeout)
                    },
                    _instantiatePushStream: function(n) {
                        this._setMark(), e && (r("PushstreamDoublePublic", window.user && window.user.username || "Guest", navigator.userAgent), e.disconnect()), (e = new a(this._dispatchMessage.bind(this), k)).connectionStatus().subscribe(function(e) {
                            this._dispatchStatusChange(e, y)
                        }.bind(this)), t && (r("PushstreamDoublePrivate", window.user && window.user.username || "Guest", navigator.userAgent), t.disconnect()), (t = new a(this._dispatchMessage.bind(this), k)).connectionStatus().subscribe(function(e) {
                            this._dispatchStatusChange(b, e)
                        }.bind(this)), this.on("pushstream_set_user_channel", function(e) {
                            this._setUserChannel(e)
                        }.bind(this)), this._connectChannels(n)
                    },
                    _destructPushStream: function() {
                        var n = e;
                        e = null, n.disconnect(), n = t, t = null, n.disconnect(), this._dispatchStatusChangeFromOther(i.getItem(this._connectionStatusKey))
                    },
                    _activityTimeout: 5e3,
                    _delayTimeout: 2e4,
                    _pulseActivity: function() {
                        this.ownPushStream() ? this._lostOwn() ? (f.logNormal("Lost own pushstream connection"), l.sendReport("site", "pushstream_lost_own"), this._destructPushStream()) : this._setMark() : this._needInstantiating() && !E && (f.logNormal("Creating pushstream connection, because other tab lost it"), l.sendReport("site", "pushstream_pick_up"), this._instantiatePushStream(this.getChannels()))
                    },
                    _markName: S + "mark",
                    _lostOwn: function() {
                        var e = i.getItem(this._markName);
                        return !!e && (e = this._decodeParams(e))[0] !== this.guid
                    },
                    _getMark: function() {
                        return this._decodeParams(i.getItem(this._markName))
                    },
                    _setMark: function() {
                        i.setItem(this._markName, this._codeParams([this.guid, (new Date).getTime()]))
                    },
                    _unsetMark: function() {
                        i.setItem(this._markName, "")
                    },
                    _needInstantiating: function() {
                        var e = i.getItem(this._markName);
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
                    _channelsName: S + "channels",
                    _getChannelsFromStorage: function() {
                        var e = i.getItem(this._channelsName);
                        return e ? JSON.parse(e) : []
                    },
                    getChannels: function() {
                        return this.ownPushStream() ? this._getChannels() : this._getChannelsFromStorage()
                    },
                    _storeChannels: function() {
                        i.setItem(this._channelsName, JSON.stringify(this._getChannels()))
                    },
                    _sendRecreateRequest: function() {
                        var e = this._getChannels();
                        o.emit(this._xEventRecreate, this._codeParams([e]))
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
                    _xEventRecreate: w + "recreate",
                    _xEventSend: w + "send",
                    _xEventChannelAdd: w + "channelAdd",
                    _xEventChannelRemove: w + "channelRemove",
                    _xEventRequiredChannels: w + "requirech",
                    _xEventConnectionStatus: w + "connectionStatus",
                    _xEventReconnectCommand: w + "reconnectCommand",
                    _xEventRequestLogs: w + "requestLogs",
                    _xEventShareLogs: w + "shareLogs",
                    _shareLogsKey: S + "shareLogs",
                    _connectionStatusKey: S + "connectionStatus",
                    _addChannel: function(n) {
                        var s = n.startsWith(C) ? t : e;
                        s.hasChannel(n) || (s.addChannel(n), this._storeChannels())
                    },
                    addChannel: function(e) {
                        this.ownPushStream() ? this._addChannel(e) : o.emit(this._xEventChannelAdd, this._codeParams([e]))
                    },
                    _addChannelFromOther: function(e) {
                        var t = this._decodeParams(e)[0];
                        this.ownPushStream() && this._addChannel(t)
                    },
                    _removeChannel: function(n) {
                        var s = n.startsWith(C) ? t : e;
                        s.hasChannel(n) && (s.removeChannel(n), this._storeChannels())
                    },
                    removeChannel: function(e) {
                        this.ownPushStream() ? this._removeChannel(e) : o.emit(this._xEventChannelRemove, this._codeParams([e]))
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
                            s = t[1];
                        this.ownPushStream() || this._dispatchStatusChangeToSelf(n, s)
                    },
                    _dispatchStatusChangeToOthers: function(e, t) {
                        if (this.ownPushStream()) {
                            var n = this._codeParams([e, t]);
                            i.setItem(this._connectionStatusKey, n), o.emit(this._xEventConnectionStatus, n)
                        }
                    },
                    _dispatchMessage: function(e, t, n) {
                        this._dispatchMessageToOthers(e, t, n), this._dispatchMessageToSelf(e, t, n, !1)
                    },
                    _dispatchMessageToSelf: function(e, t, n, s) {
                        n = e.channel, e = e.content, this._emit(e, t, n, s)
                    },
                    _dispatchMessageToOthers: function(e, t, n) {
                        var s = [e, t, n, (new Date).getTime()];
                        o.emit(this._xEventSend, this._codeParams(s))
                    },
                    _dispatchMessageFromOther: function(e) {
                        if (!this.ownPushStream()) {
                            var t = this._decodeParams(e),
                                n = t[0],
                                s = t[1],
                                o = t[2];
                            this._dispatchMessageToSelf(n, s, o, !0)
                        }
                    },
                    _isSpecialChannel: function(e) {
                        return /\*/.test(e)
                    },
                    _emit: function(e, t, s, o) {
                        function r(n) {
                            n.call(this, e, t, s, o)
                        }
                        for (var i in n[s] && n[s].forEach(r, this), c) {
                            var a = "^" + i.replace(/\*/g, ".*?") + "$";
                            new RegExp(a).test(s) && c[i].forEach(r, this)
                        }
                    },
                    on: function(e, t) {
                        var s = this._isSpecialChannel(e) ? c : n;
                        s[e] || (s[e] = []), s[e].push(t)
                    },
                    off: function(e, t) {
                        var s = this._isSpecialChannel(e) ? c : n;
                        switch (arguments.length) {
                            case 0:
                                n = {}, c = {};
                                break;
                            case 1:
                                s[e] && delete s[e];
                                break;
                            default:
                                if (s[e]) {
                                    var o = s[e].indexOf(t);
                                    ~o && s[e].splice(o, 1)
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
                        E = !1, f.logNormal("Creating pushstream connection after force connect"), this.ownPushStream() ? (e.disconnect(), t.disconnect(), this._instantiatePushStream(this.getChannels())) : this._needInstantiating() ? this._instantiatePushStream() : o.emit(this._xEventReconnectCommand, {})
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
                            i.setItem(this._shareLogsKey, n), o.emit(this._xEventShareLogs, n)
                        }
                    },
                    getLogs: function(e) {
                        return new Promise(function(t) {
                            var n = setTimeout(function() {
                                    var e = i.getItem(this._shareLogsKey);
                                    t(null !== e ? JSON.parse(e) : [])
                                }.bind(this), 1e3),
                                s = function(e) {
                                    var r;
                                    o.off(this._xEventShareLogs, s), o.emit(this._xEventShareLogs, ""), clearTimeout(n);
                                    try {
                                        r = JSON.parse(e)
                                    } catch (e) {
                                        r = [], f.logError("Failed to parse logs received from master tab")
                                    }
                                    t(r)
                                }.bind(this);
                            this.ownPushStream() ? t(this._getOwnLogs(e)) : (o.on(this._xEventShareLogs, s), o.emit(this._xEventRequestLogs))
                        }.bind(this))
                    }
                };
                return T._init(), window.addEventListener("unload", T._onUnload.bind(T)), o.on(T._xEventRecreate, T._onRequestRecreate.bind(T)), o.on(T._xEventSend, T._dispatchMessageFromOther.bind(T)), o.on(T._xEventChannelAdd, T._addChannelFromOther.bind(T)), o.on(T._xEventChannelRemove, T._removeChannelFromOther.bind(T)), o.on(T._xEventConnectionStatus, T._dispatchStatusChangeFromOther.bind(T)), o.on(T._xEventReconnectCommand, T._dispatchReconnectCommandFromOther.bind(T)), o.on(T._xEventRequestLogs, T._onRequestLogs.bind(T)), P = function() {
                    window.loginStateChange && loginStateChange.subscribe(T, T._changeLoginState)
                }, "loading" !== document.readyState ? P() : document.addEventListener("DOMContentLoaded", P), setInterval(T._pulseActivity.bind(T), T._activityTimeout), T._pulseActivity(), T
            }();
            e.exports = w
        },
        932496: (e, t, n) => {
            n.d(t, {
                TransportType: () => l,
                PushStream: () => u
            });
            var s = n(588537),
                o = n(37704),
                r = n(394485),
                i = n(175203),
                a = n(911905);
            const c = "PushStream",
                h = (0, a.getLogger)(c);
            var l;
            ! function(e) {
                e[e.EventSource = 0] = "EventSource", e[e.WebSocket = 1] = "WebSocket"
            }(l || (l = {}));
            class u {
                constructor(e, t) {
                    this._channels = [], this._transport = t.transportType === l.EventSource ? new o.PersistentEventSourceTransport(this._onPushStreamMessage.bind(this)) : new r.PersistentWebsocketTransport(this._onPushStreamMessage.bind(this), this._onPushStreamClose.bind(this)), this._settings = t, this._messageHandler = e
                }
                addChannel(e) {
                    (0, s.assert)(!this.hasChannel(e), "Channel already subscribed"), h.logNormal(`Adding channel ${e}`), this._channels.push(e), this._transport.setUrl(this._generateUrl())
                }
                removeChannel(e) {
                    const t = this._channels.indexOf(e);
                    (0, s.assert)(-1 !== t, "There is no that channel"), h.logNormal(`Removing channel ${e}`), this._channels.splice(t, 1), this._transport.setUrl(this._generateUrl())
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
                    (0, s.assert)(0 !== this._channels.length, "There is no channels"), this._transport.connect()
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
                        s = t.channel; - 2 === n ? h.logWarn("Received unexpected message: about removed the channel") : n > 0 && (h.logDebug(`Received message: id="${n}" channel="${s}"`), this._messageHandler(t.text, n, s))
                }
                _onPushStreamClose(e) {
                    1005 === e.code && i.telemetry.sendChartReport("websocket_code_1005")
                }
                _generateUrl() {
                    const e = this._channels.join("/");
                    return `${this._settings.url}/${this._settings.urlPath}/${e}`
                }
            }
        },
        659863: (e, t, n) => {
            n.r(t), n.d(t, {
                qaGlobals: () => s
            });
            const s = new class {
                constructor(e, t) {
                    this._test = e[t] = {}
                }
                provide(e, t) {
                    this._test[e] = t
                }
            }(window, "qaGlobals")
        },
        175203: (e, t, n) => {
            n.d(t, {
                telemetry: () => u
            });
            var s = n(97639),
                o = n.n(s),
                r = n(86674),
                i = n(638456),
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
                    this.reportSent = new(o()), this.timeCounters = {
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
                    var s;
                    if (!this._isAbleToSendReport(t)) return;
                    const o = this._getSubserviceType(e),
                        r = this._getHost(e, o);
                    if (null !== r) {
                        if (n = void 0 === n ? {
                                count: 1
                            } : n, this._addReportToStash(n, t, r), !this._timeoutIds[e]) {
                            const t = null !== (s = h[e]) && void 0 !== s ? s : h.default;
                            this._timeoutIds[e] = setTimeout(this._sendTelemetryToService.bind(this, e, r), t)
                        }
                    } else c.logError(`Unable to get host for counter: ${t}, metric type: ${e}, serivce type: ${o}`)
                }
                sendChartReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("charts", e, t, n)
                }
                sendLineToolsStorageReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("line_tools_storage", e, t, n)
                }
                _sendServiceSpecifiedReport(e, t, n, s = !0) {
                    this._updateUserInfo(), n = void 0 === n ? {
                        count: 1
                    } : n, s && (n = this._appendCommonAdditionalInfo(n, ["cluster", "userId"])), this.sendReport(e, t, n)
                }
                _updateUserInfo() {
                    const e = "user" in window && "id" in window.user ? window.user.id : "0";
                    this._commonAdditionalData.userId = String(e)
                }
                _isAbleToSendReport(e) {
                    const t = window.TELEMETRY_HOSTS,
                        n = l.includes(e),
                        s = Boolean(window.TradingView.onChartPage || (0, i.onWidget)());
                    return t && (!n || s)
                }
                _sendTelemetryToService(e, t) {
                    if (this._reportStash.hasOwnProperty(t)) {
                        const e = this._cropParams(this._reportStash[t]),
                            n = this._renameAllParams(e),
                            s = {
                                event: "report_stash",
                                params: this._cleanAllParams(n)
                            };
                        c.logDebug(`Report to host: ${t}; stash: ${JSON.stringify(this._reportStash[t])}`), this.reportSent.fire(this._reportStash[t]), delete this._reportStash[t], (0, r.fetch)(`${t}/report`, {
                            method: "POST",
                            body: JSON.stringify(s)
                        })
                    }
                    this._timeoutIds[e] = null
                }
                _getHost(e, t) {
                    const n = window.TELEMETRY_HOSTS,
                        s = n[e] && n[e][t];
                    return Boolean(s) ? s : null
                }
                _getSubserviceType(e) {
                    if (!["charts", "site"].includes(e)) return "all";
                    let t = "free";
                    const n = window.user.is_pro;
                    return "charts" === e && (0, a.isOnMobileAppPage)("old") ? t = n ? "ios_pro" : "ios_free" : "charts" === e && (0, a.isOnMobileAppPage)("new") ? t = n ? "android_pro" : "android_free" : (0, i.onWidget)() ? t = "widget" : n && (t = "pro"), t
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
                    return Object.keys(e).reduce(((n, s) => (n[t[s]] = e[s], n)), {})
                }
                _cleanAllParams(e) {
                    const t = {};
                    for (const n in e)
                        if (e.hasOwnProperty(n)) {
                            t[n] = [];
                            const s = {
                                c: 0
                            };
                            e[n].forEach((e => {
                                const o = this._cleanEntryParams(e),
                                    r = Object.keys(o).length;
                                1 === r && void 0 !== o.c ? s.c += o.c : r > 0 && t[n].push(o)
                            })), s.c > 0 && t[n].push(s), 0 === t[n].length && delete t[n]
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
        },
        345848: (e, t, n) => {
            n.d(t, {
                trackEvent: () => c,
                disableTrackingEvents: () => h
            });
            var s = n(251954),
                o = n(611688);
            const r = (0, n(911905).getLogger)("Common.TrackEvent"),
                i = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/];
            let a = !1;
            const c = (e, t, n) => {
                if (a) return;
                if (o.enabled("charting_library_base")) return void((e, t, n) => {
                    t = t || e || n || "";
                    let o = "";
                    for (let e = 0; e < i.length; e++) {
                        const n = t.match(i[e]);
                        if (n && 3 === n.length) {
                            t = n[1], o = n[2];
                            break
                        }
                    }(0, s.emit)(t.toLowerCase().replace(" ", "_"), {
                        category: e,
                        label: n,
                        value: o
                    })
                })(e, t, n);
                let c = (e ? e + ":" : "") + t;
                n && (c += " " + n), r.logNormal(c), o.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                    event_category: e,
                    event_label: n
                })
            };

            function h() {
                a = !0
            }
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = c)
        },
        226722: (e, t, n) => {
            n.r(t), n.d(t, {
                TVXWindowEvents: () => i,
                getScopedTVXWindowEvents: () => a
            });
            n(897116);
            var s = n(911905),
                o = n(49437);
            const r = (0, s.getLogger)("XWindowEvents");
            var i;

            function a(e) {
                return {
                    on: (t, n) => i.on(`${e}.${t}`, n),
                    off: (t, n) => i.off(`${e}.${t}`, n),
                    emit: (t, n) => i.emit(`${e}.${t}`, n)
                }
            }! function(e) {
                const t = "tvxwevents.",
                    n = {};
                let s;
                window.BroadcastChannel ? (s = new BroadcastChannel("tvxwevents"), s.addEventListener("message", (function(e) {
                    const {
                        data: {
                            event: t,
                            value: s
                        }
                    } = e;
                    n[t] && n[t].forEach((e => {
                        e(s)
                    }))
                })), function() {
                    const e = [],
                        n = performance.now();
                    for (let n = 0; n < o.TVLocalStorage.length; n++) {
                        const s = o.TVLocalStorage.key(n);
                        s.startsWith(t) && e.push(s)
                    }
                    const s = o.TVLocalStorage.length;
                    for (const t of e) o.TVLocalStorage.removeItem(t);
                    const i = performance.now() - n;
                    r.logNormal(`Total keys amount in local storage on operation start: ${s}`), r.logNormal(`Keys amount in local storage to be deleted: ${e.length}`), r.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(e)}`), r.logNormal(`Removing keys from local storage took ${i} ms`)
                }()) : window.addEventListener("storage", (function(e) {
                    const {
                        newValue: s,
                        key: r
                    } = e;
                    if (null === s || !r || !r.startsWith(t)) return;
                    const i = r.substring(t.length);
                    n[i] && n[i].forEach((t => {
                        t(e.newValue)
                    }));
                    o.TVLocalStorage.removeItem(r)
                })), e.on = function(e, t) {
                    n[e] || (n[e] = []), n[e].push(t)
                }, e.off = function(e, t) {
                    if (!n[e]) return;
                    const s = n[e].indexOf(t); - 1 !== s && (1 === n[e].length ? delete n[e] : n[e].splice(s, 1))
                }, e.emit = function(e, n = Date.now()) {
                    try {
                        s ? s.postMessage({
                            event: e,
                            value: n
                        }) : o.TVLocalStorage.setItem(t + e, n.toString())
                    } catch (e) {
                        r.logError(e.message)
                    }
                }
            }(i || (i = {}))
        }
    }
]);