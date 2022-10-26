"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [96301], {
        343370: (t, e, s) => {
            s.d(e, {
                default: () => n
            });
            var i = s(12481),
                o = s(598279);
            const n = function(t, e, s) {
                var n = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return (0, o.default)(s) && (n = "leading" in s ? !!s.leading : n, a = "trailing" in s ? !!s.trailing : a), (0, i.default)(t, e, {
                    leading: n,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        141802: (t, e, s) => {
            s.r(e), s.d(e, {
                QuoteCache: () => o,
                QUOTE_FIELDS: () => n,
                QUOTE_FIELDS_CACHE: () => a
            });
            var i = s(588537);
            class o {
                constructor(t) {
                    this._cache = new Map, this._fields = [...t.fields]
                }
                update(t, e, s) {
                    const o = (0, i.ensureDefined)(t.symbolname);
                    if (this._cache.has(o) || this._cache.set(o, {
                            symbolname: o,
                            status: t.status,
                            values: {}
                        }), "error" === t.status) return;
                    const n = (0, i.ensureDefined)(this._cache.get(o));
                    n.status = t.status;
                    for (const i of this._fields) {
                        if (!e.has(i)) continue;
                        const o = t.values[i];
                        (s || void 0 !== o) && (n.values[i] = o)
                    }
                }
                get(t) {
                    var e;
                    return null !== (e = this._cache.get(t)) && void 0 !== e ? e : null
                }
                fields() {
                    return this._fields
                }
            }
            const n = new Set(["pro_name", "logoid", "currency-logoid", "base-currency-logoid", "short_name", "description", "exchange", "listed_exchange", "type", "country_code", "provider_id", "sector", "typespecs", "industry", "currency_id", "last_price", "fractional", "minmov", "minmove2", "pricescale", "change", "change_percent", "volume", "average_volume", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "earnings_release_next_date", "earnings_per_share_forecast_next_fq", "earnings_release_date", "earnings_per_share_fq", "fundamental_currency_code", "symbol-primaryname", "currency_code", "rates_mc", "rates_fy", "rates_ttm", "value_unit_id", "update_mode", "language", "local_description", "short_description", "source", "source2"]),
                a = new o({
                    fields: n
                })
        },
        124418: (t, e, s) => {
            s.r(e), s.d(e, {
                getQuoteSessionInstance: () => a,
                setQuoteSessionInstance: () => r,
                getQuoteSessionNoEnsure: () => c,
                destroyQuoteSessions: () => _
            });
            var i = s(167904),
                o = s.n(i);
            const n = {};

            function a(t = "full") {
                return n[t] || r(t, new(o())(t)), n[t]
            }

            function r(t = "full", e) {
                n[t] = e
            }

            function c(t = "full") {
                return n[t]
            }

            function _() {
                for (const t in n)
                    if (n.hasOwnProperty(t)) {
                        const e = n[t];
                        void 0 !== e && e.destroy(), delete n[t]
                    }
            }
        },
        574764: (t, e, s) => {
            s.d(e, {
                QuoteSession: () => o
            });
            var i = s(95935);
            class o {
                constructor(t, e = (0, i.randomHash)()) {
                    this._sessionstarted = !1, this._globalHandler = null, this._chartApi = t, this._sessionid = "qs_" + e
                }
                destroy() {
                    this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid), this._sessionstarted = !1)
                }
                connected() {
                    return this._chartApi.connected()
                }
                connect(t) {
                    this._globalHandler = t, this._chartApi.createSession(this._sessionid, this), this._chartApi.connect()
                }
                disconnect() {
                    this._chartApi.disconnect()
                }
                quoteAddSymbols(t) {
                    this._chartApi.quoteAddSymbols(this._sessionid, t)
                }
                quoteRemoveSymbols(t) {
                    this._chartApi.quoteRemoveSymbols(this._sessionid, t)
                }
                quoteFastSymbols(t) {
                    this._chartApi.quoteFastSymbols(this._sessionid, t)
                }
                quoteSetFields(t) {
                    this._chartApi.quoteSetFields(this._sessionid, t)
                }
                onMessage(t) {
                    var e;
                    switch (t.method) {
                        case "connected":
                            this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid), this._sessionstarted = !0);
                            break;
                        case "disconnected":
                            this._sessionstarted = !1
                    }
                    null === (e = this._globalHandler) || void 0 === e || e.call(this, t)
                }
                quoteHibernateAll() {
                    this._chartApi.quoteHibernateAll(this._sessionid)
                }
            }
            window.TradingView.QuoteSession = o
        },
        167904: (t, e, s) => {
            t = s.nmd(t);
            var i = s(97639),
                o = s(343370).default,
                n = s(12481).default,
                a = s(689765).PriceFormatter;
            const {
                uniq: r
            } = s(977809);
            var c = s(95935);
            const {
                normalizeUpdateMode: _
            } = s(461909);
            var l = s(198796).deepExtend;
            const {
                QUOTE_FIELDS_CACHE: u,
                QUOTE_FIELDS: d
            } = s(141802);
            var h;

            function p(t, e) {
                this.options = Object.assign({
                    throttleTimeout: 125
                }, e), this._connected = !1, this._symbol_data = {}, this._subscriptions = {}, this.onConnect = new i, this.onDisconnect = new i, this._quoteApi = new h(window.ChartApiInstance), this._type = t || "full", this._delayUpdateFastSymbols = n(this._updateFastSymbols, 250), this._throttledSymbolData = {}, this._formatterValuesCache = {}, this._waitingForFormatters = {}, this._snapshotValuesCache = {}, this._waitingForSnapshot = {}, this.connect()
            }
            h = s(574764).QuoteSession, p.prototype.destroy = function() {
                    this._quoteApi.destroy(), this._quoteApi = null, this._connected = !1, this.onDisconnect.fire()
                }, p.prototype.typeFields = {}, p.prototype.typeFields.simple = ["base-currency-logoid", "ch", "chp", "currency-logoid", "currency_code", "currency_id", "base_currency_id", "current_session", "description", "exchange", "format", "fractional", "is_tradable", "language", "local_description", "listed_exchange", "logoid", "lp", "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", "short_name", "type", "typespecs", "update_mode", "volume", "value_unit_id"], p.prototype.typeFields.simpleDetailed = [].concat(p.prototype.typeFields.simple, ["ask", "bid", "fundamentals", "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time", "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", "industry", "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"]), p.prototype.typeFields.full = [], p.prototype.typeFields.watchlist = [].concat(p.prototype.typeFields.simple, ["rchp", "rtc", "country_code", "provider_id"]), p.prototype.typeFields.portfolio = ["pro_name", "short_name", "exchange", "listed_exchange", "description", "sector", "type", "typespecs", "industry", "currency_code", "currency_id", "ch", "chp", "logoid", "currency-logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq", "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq", "lp", "fractional", "minmov", "minmove2", "pricescale", "volume", "average_volume", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "fundamental_currency_code", "rates_mc", "rates_fy", "rates_ttm"], p.prototype.typeFields.notes = ["short_name", "pro_name", "logoid", "currency-logoid", "base-currency-logoid", "symbol-primaryname", "type", "typespecs"], p.prototype.connect = function(t) {
                    this._quoteApi.connect(this.quoteHandler.bind(this))
                },
                p.prototype.quoteHandler = function(t) {
                    var e = t.method,
                        s = t.params;
                    switch (e) {
                        case "connected":
                            this._connected || (this._connected = !0, this.onConnected());
                            break;
                        case "quote_list_fields":
                            break;
                        case "quote_symbol_data":
                            this._connected && this.onSymbolData(s[0]);
                            break;
                        case "quote_completed":
                            this._connected && this.onSymbolData({
                                symbolname: s[0],
                                complete: performance.now(),
                                values: {}
                            });
                            break;
                        case "disconnected":
                            this._connected && (this._connected = !1, this.onDisconnect.fire())
                    }
                }, p.prototype.onConnected = function() {
                    this.setFields();
                    var t = Object.keys(this._symbol_data);
                    t.length && (this._quoteApi.quoteAddSymbols(t), this._delayUpdateFastSymbols()), this.onConnect.fire()
                }, p.prototype.setFields = function() {
                    var t = p.prototype.typeFields[this._type];
                    t && t.length && this._quoteApi.quoteSetFields(t)
                }, p.prototype.onSymbolData = function(t) {
                    try {
                        t.status && u.update(t, d, !1)
                    } catch (t) {}
                    var e = t.symbolname,
                        s = this._throttledSymbolData[e];
                    s || (s = this._throttledSymbolData[e] = {
                        fnDispatch: o(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
                    }), s.cache ? l(s.cache, t) : s.cache = t, s.fnDispatch(e)
                }, p.prototype._parseUpdateMode = function(t) {
                    _(t)
                }, p.prototype.dipatchSymbolData = function(t) {
                    var e = this._symbol_data[t],
                        s = this._throttledSymbolData[t].cache;
                    if (delete this._throttledSymbolData[t].cache, this._symbol_data[t])
                        for (var i in l(e, s), e.values && this._parseUpdateMode(e.values), this._subscriptions) {
                            var o = this._subscriptions[i];
                            o.has(t) && o.get(t).forEach((function(t) {
                                t(e, s)
                            }))
                        }
                }, p.prototype.subscribe = function(t, e, s) {
                    this._subscriptions[t] = this._subscriptions[t] || new Map;
                    var i = this._subscriptions[t];
                    e = [].concat(e);
                    var o = [];
                    e.forEach((function(t) {
                        this._symbol_data[t] ? i && i.has(t) || this._symbol_data[t].subscribers_count++ : (this._symbol_data[t] = {
                            subscribers_count: 1
                        }, o.push(t)), i.has(t) || i.set(t, []), i.get(t).push(s), i.get(t).fast = !0, this._symbol_data[t] && this._symbol_data[t].values && s(this._symbol_data[t], this._symbol_data[t])
                    }), this), o.length && this._connected && (this._quoteApi.quoteAddSymbols(o), this._delayUpdateFastSymbols())
                }, p.prototype.unsubscribe = function(t, e, s) {
                    e = [].concat(e);
                    for (var i = this._subscriptions[t], o = [], n = 0; n < e.length; n++) {
                        var a = e[n];
                        if (i)
                            if (i.has(a) && s) {
                                var r = i.get(a).indexOf(s);
                                ~r && i.get(a).splice(r, 1), i.get(a).length || i.delete(a)
                            } else i.delete(a);
                        i && 0 === i.size && delete this._subscriptions[t], this._symbol_data.hasOwnProperty(a) && (i && !i.has(a) && this._symbol_data[a].subscribers_count--, this._symbol_data[a].subscribers_count || (delete this._symbol_data[a], o.push(a)))
                    }
                    o.length && this._connected && (this._quoteApi.quoteRemoveSymbols(o), this._delayUpdateFastSymbols())
                }, p.prototype.setFastSymbols = function(t, e) {
                    if (this._subscriptions[t])
                        for (var s = this._subscriptions[t], i = Array.from(s.keys()), o = 0; o < i.length; ++o) {
                            var n = i[o];
                            s.get(n).fast = -1 !== e.indexOf(n)
                        }
                    this._delayUpdateFastSymbols()
                }, p.prototype._updateFastSymbols = function() {
                    if (this._connected) {
                        var t = this._fastSymbols();
                        0 === t.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(t)
                    }
                }, p.prototype._delayUpdateFastSymbols = p.prototype._updateFastSymbols, p.prototype._fastSymbols = function() {
                    var t = [];
                    for (var e in this._subscriptions)
                        for (var s = this._subscriptions[e], i = Array.from(s.keys()), o = 0; o < i.length; ++o) {
                            var n = i[o];
                            s.get(n).fast && t.push(n)
                        }
                    return t = r(t)
                }, p.prototype.formatter = function(t, e) {
                    var s = this;
                    if (this._waitingForFormatters[t]) return this._waitingForFormatters[t];

                    function i(t) {
                        var s = e && !t.fractional ? 1 : t.minmov;
                        return new a(t.pricescale, s, t.fractional, t.minmove2)
                    }
                    var o = new Promise((function(e, o) {
                        if (s._formatterValuesCache[t]) e(i(s._formatterValuesCache[t]));
                        else {
                            var n = c.guid();
                            s.subscribe(n, [t], (function(a) {
                                "error" === a.status && (s._waitingForFormatters[t] = null, o("Quotes snapshot is not received")),
                                    function(t) {
                                        return t && null != t.pricescale && null != t.minmov
                                    }(a.values) && (s._waitingForFormatters[t] = null, s._formatterValuesCache[t] = a.values, e(i(a.values)), s.unsubscribe(n, t))
                            }))
                        }
                    }));
                    return this._waitingForFormatters[t] = o, o
                }, p.prototype.snapshot = function(t) {
                    var e = this;
                    if (this._waitingForSnapshot[t]) return this._waitingForSnapshot[t];
                    var s = new Promise((function(s, i) {
                        if (e._snapshotValuesCache[t]) s(e._snapshotValuesCache[t]);
                        else {
                            var o = c.guid();
                            e.subscribe(o, [t], (function(n) {
                                "error" === n.status && (e._waitingForSnapshot[t] = null, i("Quotes snapshot is not received"));
                                var a = n.values;
                                a && a.minmov && a.pricescale && a.description && (e._waitingForSnapshot[t] = null, e._snapshotValuesCache[t] = a, s(a), e.unsubscribe(o, t))
                            }))
                        }
                    }));
                    return this._waitingForSnapshot[t] = s, s
                }, TradingView.QuoteSessionMultiplexer = p, t && t.exports && (t.exports = p)
        },
        198796: (t, e, s) => {
            function i(t, ...e) {
                return t && "object" == typeof t ? (0 === e.length || e.forEach((e => {
                    null != e && "object" == typeof e && Object.keys(e).forEach((s => {
                        const n = t[s],
                            a = e[s];
                        if (a === t) return;
                        const r = Array.isArray(a);
                        if (a && (o(a) || r)) {
                            let e;
                            e = r ? n && Array.isArray(n) ? n : [] : n && o(n) ? n : {}, t[s] = i(e, a)
                        } else void 0 !== a && (t[s] = a)
                    }))
                })), t) : t
            }

            function o(t) {
                if (!t || "[object Object]" !== Object.prototype.toString.call(t)) return !1;
                const e = Object.getPrototypeOf(t);
                if (!e) return !0;
                const s = Object.hasOwnProperty.toString,
                    i = e.hasOwnProperty("constructor") && e.constructor;
                return "function" == typeof i && s.call(i) === s.call(Object)
            }
            s.d(e, {
                deepExtend: () => i
            })
        },
        977809: (t, e, s) => {
            function i(t) {
                return t.reduce((function(t, e, s) {
                    return ~t.indexOf(e) || t.push(e), t
                }), [])
            }
            s.r(e), s.d(e, {
                uniq: () => i
            })
        },
        461909: (t, e, s) => {
            function i(t) {
                if (void 0 === t) return null;
                const e = t.match(/(delayed_streaming)_([\d]{1,4})/);
                return null === e ? null : {
                    mode: e[1],
                    interval: parseInt(e[2])
                }
            }

            function o(t) {
                const e = i(t.update_mode);
                return null === e || (t.update_mode = e.mode, t.update_mode_seconds = e.interval), t
            }
            s.r(e), s.d(e, {
                parseUpdateMode: () => i,
                normalizeUpdateMode: () => o
            })
        }
    }
]);