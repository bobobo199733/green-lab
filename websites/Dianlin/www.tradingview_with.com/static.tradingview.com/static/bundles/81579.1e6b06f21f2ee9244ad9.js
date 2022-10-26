"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [81579], {
        15693: (e, t, r) => {
            function s(e) {
                return "=" + JSON.stringify(n(e))
            }

            function n(e) {
                return Object.keys(e).sort().reduce(((t, r) => ("[object Object]" === Object.prototype.toString.call(e[r]) ? t[r] = n(e[r]) : t[r] = e[r], t)), {})
            }

            function i(e) {
                return Boolean(e.inputs) || function(e) {
                    return Boolean(e.replay)
                }(e) || e.session || e.adjustment || e["currency-id"] || e["unit-id"] ? s(e) : e.symbol
            }

            function o(e) {
                return "=" === e[0]
            }

            function a(e) {
                if (!o(e)) return {
                    symbol: e
                };
                try {
                    return JSON.parse(e.slice(1))
                } catch (t) {
                    return {
                        symbol: e
                    }
                }
            }

            function l(e) {
                return "string" == typeof e ? e : l(e.symbol)
            }
            r.d(t, {
                encodeExtendedSymbolOrGetSimpleSymbolString: () => i,
                isEncodedExtendedSymbol: () => o,
                decodeExtendedSymbol: () => a,
                unwrapSimpleSymbol: () => l
            })
        },
        482612: (e, t, r) => {
            var s;
            r.d(t, {
                    AlertsPushStreamMessage: () => s
                }),
                function(e) {
                    let t, r, s;
                    ! function(e) {
                        e.Event = "event", e.Running = "alert_running", e.Stopped = "alert_stopped", e.Deleted = "alert_deleted", e.Cloned = "new_alerts"
                    }(t = e.Method || (e.Method = {})),
                    function(e) {
                        e.None = "", e.Manual = "manual", e.Expired = "expired", e.ProPlanExpired = "pro_plan_expired", e.Auto = "auto", e.Error = "error", e.FireControl = "fire_control", e.Cloned = "cloned", e.StudyPermsExpired = "study_perm_expired"
                    }(r = e.StopReason || (e.StopReason = {})),
                    function(e) {
                        e.None = "", e.StudyError = "study_error", e.ResolveError = "resolve_error", e.DrawingIsExpired = "drawing_is_expired"
                    }(s = e.Error || (e.Error = {}))
                }(s || (s = {}))
        },
        14997: (e, t, r) => {
            r.d(t, {
                getAlertsPushApi: () => m
            });
            var s = r(895171),
                n = r(501867),
                i = r.n(n),
                o = (r(659863), r(97639)),
                a = r.n(o),
                l = r(911905),
                c = r(482612);
            const u = (0, l.getLogger)("Alerts.AlertsPushApi");
            class d {
                constructor(e) {
                    this._eventDelegates = {
                        alerts_updated: new(a()),
                        alerts_created: new(a()),
                        alerts_deleted: new(a()),
                        alert_fired: new(a()),
                        fires_deleted: new(a())
                    }, this._onPushStreamMessage = async e => {
                        const t = JSON.parse(e);
                        try {
                            let e;
                            switch (t.m) {
                                case c.AlertsPushStreamMessage.Method.Running:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alerts_updated",
                                            p: [f(e)]
                                        }
                                    }(t);
                                    break;
                                case c.AlertsPushStreamMessage.Method.Cloned:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alerts_created",
                                            p: e.alerts.map(f)
                                        }
                                    }(t);
                                    break;
                                case c.AlertsPushStreamMessage.Method.Stopped:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alerts_updated",
                                            p: [{
                                                alert_id: e.id,
                                                active: !1,
                                                last_stop_reason: e.stop || null,
                                                last_error: e.error || null,
                                                symbol: e.sym,
                                                message: e.desc,
                                                name: e.name
                                            }]
                                        }
                                    }(t);
                                    break;
                                case c.AlertsPushStreamMessage.Method.Deleted:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alerts_deleted",
                                            p: [e.id]
                                        }
                                    }(t);
                                    break;
                                case c.AlertsPushStreamMessage.Method.Event:
                                    e = function({
                                        p: e
                                    }) {
                                        return {
                                            m: "alert_fired",
                                            p: {
                                                fire_id: e.id,
                                                alert_id: e.aid,
                                                symbol: e.sym,
                                                resolution: e.res,
                                                message: e.desc,
                                                sound_file: e.snd ? e.snd_file : null,
                                                sound_duration: e.snd_duration,
                                                popup: e.popup,
                                                fire_time: _(e.fire_time),
                                                bar_time: _(e.bar_time),
                                                cross_interval: e.cross_int,
                                                name: e.name
                                            }
                                        }
                                    }(t)
                            }
                            this._eventDelegates[e.m].fire(e.p)
                        } catch (e) {
                            u.logError(`Could not convert legacy message ${t.m}: ${e}`)
                        }
                    }, this._messageEmitter = e, this._messageEmitter.on("alert", this._onPushStreamMessage)
                }
                on(e, t) {
                    if ("fires_deleted" === e) throw new Error(`Conversions for message type ${e} are not implemented`);
                    this._eventDelegates[e].subscribe(null, t)
                }
                off(e, t) {
                    this._eventDelegates[e].unsubscribe(null, t)
                }
                destroy() {
                    this._messageEmitter.off("alert", this._onPushStreamMessage);
                    for (const e of Object.values(this._eventDelegates)) e.destroy()
                }
            }

            function f(e) {
                return {
                    alert_id: e.id,
                    type: e.alert_type,
                    last_fire_time: null === e.fire_time ? null : _(e.fire_time),
                    active: e.active,
                    last_stop_reason: e.stop || null,
                    last_error: e.error || null,
                    symbol: e.sym,
                    resolution: e.res,
                    expiration: e.inf_exp ? null : _(e.exp),
                    web_hook: e.web_hook,
                    message: e.desc,
                    name: e.name
                }
            }

            function _(e) {
                return new Date(1e3 * e).toISOString()
            }
            const m = (0, s.default)((() => new d(i())))
        },
        974457: (e, t, r) => {
            r.d(t, {
                AlertsRestApiError: () => A,
                getAlertsRestApi: () => v
            });
            var s = r(895171),
                n = r(588537),
                i = r(588948),
                o = r(175203),
                a = (r(659863), r(956131)),
                l = r(706617),
                c = r(86674),
                u = r(911905),
                d = r(278341);

            function f(e) {
                return e.map(g)
            }

            function _(e) {
                return e.map((e => ({
                    fires_count: e.fires_count,
                    latest_fire: g(e.latest_fire)
                })))
            }

            function m(e) {
                return e.map(b)
            }

            function h(e) {
                return e.map(p)
            }

            function p(e) {
                return "description" in e ? { ...e,
                    message: e.description
                } : e
            }

            function g(e) {
                return "description" in e ? { ...e,
                    message: e.description
                } : e
            }

            function b(e) {
                return "description" in e ? { ...e,
                    message: e.description
                } : e
            }
            const y = (0, u.getLogger)("Alerts.AlertsRestApi");
            class w {
                constructor(e, t, r, s) {
                    this._baseRestUrl = e, this._getRequestMetadata = t, this._resetToken = r, this._fetch = s ? function(e, t) {
                        return async (...r) => {
                            const s = Date.now(),
                                n = await e(...r),
                                i = Date.now();
                            try {
                                t({
                                    delay: i - s,
                                    statusCode: n.status
                                })
                            } catch (e) {
                                y.logError(`Exception raised during metrics collection: ${e}`)
                            }
                            return n
                        }
                    }(c.fetch, s) : c.fetch
                }
                createAlert(e) {
                    return this._getResource("/create_alert", e)
                }
                restartAlert(e) {
                    return this._getResource("/restart_alert", e)
                }
                deleteAlerts(e) {
                    return this._performAction("/delete_alerts", e)
                }
                stopAlerts(e) {
                    return this._performAction("/stop_alerts", e)
                }
                restartAlerts(e) {
                    return this._performAction("/restart_alerts", e)
                }
                cloneAlerts(e) {
                    return this._getResource("/clone_alerts", e)
                }
                listAlerts() {
                    return this._getResource("/list_alerts", void 0, h)
                }
                getAlerts(e) {
                    return this._getResource("/get_alerts", e)
                }
                deleteFires(e) {
                    return this._performAction("/delete_fires", e)
                }
                listFires(e) {
                    return this._getResource("/list_fires", e, f)
                }
                getOfflineFires() {
                    return this._getResource("/get_offline_fires", void 0, _)
                }
                getOfflineFireControls() {
                    return this._getResource("/get_offline_fire_controls", void 0, m)
                }
                clearOfflineFires(e) {
                    return this._performAction("/clear_offline_fires", e)
                }
                clearOfflineFireControls(e) {
                    return this._performAction("/clear_offline_fire_controls", e)
                }
                async _getResponse(e, t, r = !1) {
                    if (d.alertsMaintenanceTracker.value()) return y.logError(`Request ${e} has not been performed due to maintenance`), Promise.reject(new A("maintenance", "Maintenance"));
                    const {
                        jwt: s,
                        username: n,
                        buildTime: i
                    } = await this._getRequestMetadata(), o = "string" == typeof s ? s : s.token, a = new URL(this._baseRestUrl + e, window.location.origin);
                    if (a.searchParams.set("log_username", n), a.searchParams.set("build_time", i), "string" != typeof s) {
                        const e = 2 * Number(s.wasReset) + Number(r);
                        a.searchParams.set("token_init_time", String(s.initTime)),
                            a.searchParams.set("token_check_time", String(s.checkTime)), a.searchParams.set("token_reset_status", String(e)), a.searchParams.set("token_is_initial", String(s.isInitial ? 1 : 0))
                    }
                    const c = Date.now(),
                        u = await this._fetch(a.toString(), {
                            method: "POST",
                            body: JSON.stringify({
                                jwt: o,
                                payload: t || {}
                            }),
                            credentials: "include"
                        }, {
                            logBodyOnError: !0
                        }),
                        f = Date.now(),
                        _ = function(e) {
                            const t = { ...e
                            };
                            "req_id" in t && (t.id = t.req_id);
                            return t
                        }(await u.json()),
                        m = f - c,
                        h = JSON.stringify(_),
                        p = h.length;
                    return function(e) {
                        return (0, l.isObject)(e) && ("req_id" in e || "id" in e) && "s" in e
                    }(_) ? "err" in _ ? "jwt_token_expired" !== _.err.code || r ? (y.logError(`Request ${_.id} failed with error: ${_.errmsg}, Status: ${u.status}, Time response: ${m} ms, lengthResponse: ${p}, Method: ${e}`), Promise.reject(new A(_.err.code, _.errmsg))) : (y.logWarn(`Request ${_.id} contained an expired token, retrying with a token refresh`), this._resetToken(), this._getResponse(e, t, !0)) : (y.logNormal(`Request ${_.id} finished successfully,  Status: ${u.status}, Time response: ${m} ms, lengthResponse: ${p}, Method: ${e}`), _) : (y.logError(`Expected valid rest api response but received: ${h}, Status: ${u.status}, Time response: ${m} ms, lengthResponse: ${p}, Method: ${e}`), Promise.reject(new A("general", "Invalid response")))
                }
                async _getResource(e, t, r) {
                    const s = await this._getResponse(e, t);
                    return r ? r(s.r) : s.r
                }
                async _performAction(e, t) {
                    await this._getResponse(e, t)
                }
            }
            class A extends Error {
                constructor(e, t) {
                    super(t), this.name = "AlertsRestApiError", this.code = e
                }
            }
            const v = (0, s.default)((() => {
                const {
                    priceAlertsFacadeClientUrl: e
                } = (0, i.getFreshInitData)(), t = (0, a.getAlertsTokenManager)();
                return new w((0, n.ensureDefined)(e), (async () => ({
                    jwt: await R(t),
                    username: window.user.username,
                    buildTime: window.BUILD_TIME
                })), (() => t.reset()), (({
                    delay: e,
                    statusCode: t
                }) => {
                    o.telemetry.sendReport("alerts", "api_http_status", {
                        value: t
                    }), o.telemetry.sendReport("alerts", "api_time_frame", {
                        value: e
                    })
                }))
            }));
            const E = Date.now();
            async function R(e) {
                const t = await e.get(),
                    r = 1e3 * JSON.parse(atob(t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))).exp,
                    s = Date.now();
                if (s + 3e5 > r) return e.reset(), {
                    token: await e.get(),
                    isInitial: !1,
                    initTime: E,
                    checkTime: s,
                    wasReset: !0
                };
                return {
                    token: t,
                    isInitial: t === window.user.auth_token,
                    initTime: E,
                    checkTime: s,
                    wasReset: !1
                }
            }
        },
        956131: (e, t, r) => {
            r.d(t, {
                getAlertsTokenManager: () => i
            });
            var s = r(895171),
                n = r(48192);
            const i = (0, s.default)((() => new n.AuthToken))
        },
        181579: (e, t, r) => {
            r.r(t), r.d(t, {
                getUnreadFireControlsBuffer: () => A,
                getUnreadFiresBuffer: () => w
            });
            var s = r(895171),
                n = r(226722),
                i = (r(659863), r(974457)),
                o = r(14997),
                a = r(15693),
                l = r(685459),
                c = r.n(l),
                u = r(484156),
                d = r(729584),
                f = r(911905),
                _ = r(761068);
            class m {
                constructor(e, t) {
                    this._mergedIds = new Set, this._mergedRequest = null, this._delay = e, this._apiCallback = t
                }
                mergeRequest(e) {
                    if (e.forEach((e => this._mergedIds.add(e))), !this._mergedRequest) {
                        const e = this._mergedRequest = (t = this._delay, new Promise((e => {
                            setTimeout(e, t)
                        }))).then((() => {
                            const t = this._mergedRequest === e ? this._apiCallback({
                                alert_id: Array.from(this._mergedIds)
                            }) : Promise.reject((0, _.createAbortError)());
                            return this.undoRequest(), t
                        }))
                    }
                    var t;
                    return this._mergedRequest
                }
                undoRequest() {
                    this._mergedRequest = null, this._mergedIds.clear()
                }
            }
            const h = (0, f.getLogger)("Alerts.UnreadBuffers");
            var p;
            ! function(e) {
                e.Fires = "fires", e.FiresControl = "fire controls"
            }(p || (p = {}));
            class g extends(c()) {
                constructor(e, t) {
                    super(), this._abortController = new AbortController, this._notifications = {}, this._restApi = e, this._pushApi = t, this._unsubscribePushApi = this._subscribePushApi(this._pushApi), this._clearOfflineEventsMerger = new m(1e3, this._getClearOfflineEventsCallback(this._restApi))
                }
                async requestOfflineEvents() {
                    return (0, _.respectAbort)(this._abortController.signal, this._restApiGetOfflineEvents(this._restApi).then((e => {
                        this._processOfflineEvents(e, this._notifications)
                    })).catch((e => {
                        throw h.logError(`Getting offline ${this._classNameForLogger} failed`), e
                    })))
                }
                destroy() {
                    (0, d.assertNoEmitterListeners)(this, ["add", "remove"]), this._abortController.abort(), this._unsubscribePushApi()
                }
                markRead(e) {
                    const t = new Set;
                    for (const r of e) this._notifications[r] && t.add(r);
                    if (t.size) {
                        const e = Array.from(t);
                        this._notifications = (0, u.default)(this._notifications, e), this.emit("remove", e), this._clearOfflineEventsMerger.mergeRequest(e).catch((t => {
                            (0, _.isAbortError)(t) || h.logError(`Clearing offline ${this._classNameForLogger} of alerts with ids ${e} failed`)
                        }))
                    }
                }
                value() {
                    return this._notifications
                }
                _addNotifications(e) {
                    this._notifications = { ...this._notifications,
                        ...e
                    }, this.emit("add", e)
                }
            }

            function b(e) {
                const t = e.latest_fire;
                return {
                    firesCount: e.fires_count,
                    latestFire: {
                        fireId: t.fire_id,
                        alertId: t.alert_id,
                        resolution: t.resolution,
                        description: t.message,
                        soundFile: t.sound_file,
                        soundDuration: t.sound_duration,
                        popup: t.popup,
                        crossInterval: t.cross_interval,
                        name: t.name,
                        symbol: (0, a.decodeExtendedSymbol)(t.symbol),
                        fireTime: new Date(t.fire_time),
                        barTime: new Date(t.bar_time)
                    }
                }
            }

            function y(e) {
                return {
                    alertId: e.alert_id,
                    symbol: (0, a.decodeExtendedSymbol)(e.symbol),
                    description: e.message,
                    name: e.name
                }
            }
            const w = v(class extends g {
                    constructor() {
                        super(...arguments), this._classNameForLogger = p.Fires
                    }
                    _getClearOfflineEventsCallback(e) {
                        return e.clearOfflineFires.bind(e)
                    }
                    _subscribePushApi(e) {
                        const t = e => {
                            var t, r;
                            const s = null !== (r = null === (t = this.value()[e.alert_id]) || void 0 === t ? void 0 : t.firesCount) && void 0 !== r ? r : 0,
                                n = {
                                    [e.alert_id]: b({
                                        fires_count: s + 1,
                                        latest_fire: e
                                    })
                                };
                            this._addNotifications(n)
                        };
                        return e.on("alert_fired", t), () => {
                            e.off("alert_fired", t)
                        }
                    }
                    _restApiGetOfflineEvents(e) {
                        return e.getOfflineFires()
                    }
                    _processOfflineEvents(e, t) {
                        const r = {};
                        for (const s of e) {
                            const e = s.latest_fire.alert_id;
                            t[e] ? r[e] = {
                                firesCount: t[e].firesCount + s.fires_count,
                                latestFire: t[e].latestFire
                            } : r[e] = b(s)
                        }
                        Object.keys(r).length && this._addNotifications(r)
                    }
                }, "alerts-unread-fires-buffer"),
                A = v(class extends g {
                    constructor() {
                        super(...arguments), this._classNameForLogger = p.FiresControl
                    }
                    _getClearOfflineEventsCallback(e) {
                        return e.clearOfflineFireControls.bind(e)
                    }
                    _subscribePushApi(e) {
                        const t = e => {
                            const t = {};
                            for (const r of e) r.active || "fire_control" !== r.last_stop_reason || (t[r.alert_id] = y({
                                alert_id: r.alert_id,
                                symbol: r.symbol,
                                name: r.name,
                                message: r.message
                            }));
                            Object.keys(t).length > 0 && this._addNotifications(t)
                        };
                        return e.on("alerts_updated", t), () => {
                            e.off("alerts_updated", t)
                        }
                    }
                    _restApiGetOfflineEvents(e) {
                        return e.getOfflineFireControls()
                    }
                    _processOfflineEvents(e, t) {
                        const r = {};
                        for (const s of e) t[s.alert_id] || (r[s.alert_id] = y(s));
                        Object.keys(r).length > 0 && this._addNotifications(r)
                    }
                }, "alerts-unread-fire-controls-buffer");

            function v(e, t) {
                return (0, s.default)((() => {
                    const r = new e((0, i.getAlertsRestApi)(), (0, o.getAlertsPushApi)());
                    return function(e, t, r) {
                        const s = `${r}.remove`;

                        function n(e) {
                            t.emit(s, JSON.stringify(e))
                        }

                        function i(t) {
                            e.markRead(JSON.parse(t))
                        }
                        e.on("remove", n), t.on(s, i)
                    }(r, n.TVXWindowEvents, t), r
                }))
            }
        },
        729584: (e, t, r) => {
            r.d(t, {
                assertNoEmitterListeners: () => s
            });
            r(588537);

            function s(e, t) {
                0
            }
        }
    }
]);