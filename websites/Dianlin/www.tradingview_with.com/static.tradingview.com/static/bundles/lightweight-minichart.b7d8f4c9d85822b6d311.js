(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [80717], {
        706617: (t, e) => {
            "use strict";
            e.hasProperty = e.isObject = void 0, e.isObject = function(t) {
                var e = typeof t;
                return null !== t && ("object" === e || "function" === e)
            }, e.hasProperty = function(t, e) {
                return e in t
            }
        },
        28027: (t, e, s) => {
            "use strict";
            s.d(e, {
                default: () => r
            });
            const r = function(t, e, s, r) {
                for (var i = t.length, n = s + (r ? 1 : -1); r ? n-- : ++n < i;)
                    if (e(t[n], n, t)) return n;
                return -1
            }
        },
        800417: (t, e, s) => {
            "use strict";
            s.d(e, {
                default: () => h
            });
            var r = s(28027),
                i = s(498827),
                n = s(745582),
                a = Math.max,
                o = Math.min;
            const h = function(t, e, s) {
                var h = null == t ? 0 : t.length;
                if (!h) return -1;
                var l = h - 1;
                return void 0 !== s && (l = (0, n.default)(s), l = s < 0 ? a(h + l, 0) : o(l, h - 1)), (0, r.default)(t, (0, i.default)(e, 3), l, !0)
            }
        },
        745582: (t, e, s) => {
            "use strict";
            s.d(e, {
                default: () => a
            });
            var r = s(968877),
                i = 1 / 0;
            const n = function(t) {
                return t ? (t = (0, r.default)(t)) === i || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
            };
            const a = function(t) {
                var e = n(t),
                    s = e % 1;
                return e == e ? s ? e - s : e : 0
            }
        },
        755275: t => {
            t.exports = {
                "tv-spinner__container-rotate": "tv-spinner__container-rotate-OAzoNsnS"
            }
        },
        607436: (t, e, s) => {
            "use strict";
            s.d(e, {
                DEFAULT_SIZE: () => r,
                spinnerSizeMap: () => i
            });
            const r = "large",
                i = {
                    mini: "xsmall",
                    xsmall: "xsmall",
                    small: "small",
                    medium: "medium",
                    large: "large"
                }
        },
        941285: (t, e, s) => {
            "use strict";
            s.d(e, {
                Spinner: () => a
            });
            s(755275);
            var r = s(698969),
                i = s(607436);
            const n = (0, r.parseHtmlElement)(function(t = "") {
                return `<div class="tv-spinner ${t}" role="progressbar"></div>`
            }());
            class a {
                constructor(t) {
                    this._shown = !1, this._el = n.cloneNode(!0), this.setSize(i.spinnerSizeMap[t || i.DEFAULT_SIZE])
                }
                spin(t) {
                    return this._el.classList.add("tv-spinner--shown"), void 0 === this._container && (this._container = t, void 0 !== t && t.appendChild(this._el)), this._shown = !0, this
                }
                stop(t) {
                    return t && void 0 !== this._container && this._container.removeChild(this._el), this._el.classList.remove("tv-spinner--shown"), this._shown = !1, this
                }
                setStyle(t) {
                    return Object.keys(t).forEach((e => {
                        const s = t[e];
                        void 0 !== s && this._el.style.setProperty(e, s)
                    })), this
                }
                style() {
                    return this._el.style
                }
                setSize(t) {
                    const e = void 0 !== t ? `tv-spinner--size_${t}` : "";
                    return this._el.className = `tv-spinner ${e} ${this._shown?"tv-spinner--shown":""}`, this
                }
                getEl() {
                    return this._el
                }
                destroy() {
                    this.stop(), delete this._el, delete this._container
                }
            }
        },
        328289: (t, e, s) => {
            "use strict";
            s.d(e, {
                ChartSession: () => h
            });
            var r = s(97639),
                i = s.n(r),
                n = s(711806),
                a = s(270617);
            const o = (0, s(911905).getLogger)("ChartSession");
            class h extends n.Session {
                constructor(t, e = !1) {
                    super(t, "cs", !1), this._sessionDisabled = !1, this._handler = null, this._criticalError = new(i()), this._symbolResolveMap = new Map, this._disableStatistics = e
                }
                destroy() {
                    this._criticalError.destroy(), this._handler = null, this._symbolResolveMap.clear(), super.destroy()
                }
                serverTimeOffset() {
                    return this._getChartApi().serverTimeOffset()
                }
                switchTimezone(t) {
                    return this._getChartApi().switchTimezone(this.sessionId(), t)
                }
                defaultResolutions() {
                    return this._getChartApi().defaultResolutions()
                }
                availableCurrencies() {
                    return this._getChartApi().availableCurrencies()
                }
                availableUnits() {
                    return this._getChartApi().availableUnits()
                }
                resolveSymbol(t, e, s) {
                    if (this._symbolResolveMap.has(e)) {
                        const [t, r] = this._symbolResolveMap.get(e);
                        return Array.isArray(r) ? r.push(s) : r.then(s), t
                    } {
                        const r = [s];
                        return this._getChartApi().resolveSymbol(this.sessionId(), t, e, (s => {
                            "symbol_error" === s.method ? this._symbolResolveMap.delete(e) : this._symbolResolveMap.set(e, [t, Promise.resolve(s)]), r.forEach((t => t(s)))
                        })), this._symbolResolveMap.set(e, [t, r]), t
                    }
                }
                requestFirstBarTime(t, e, s) {
                    return this._getChartApi().requestFirstBarTime(this.sessionId(), t, e, s)
                }
                createSeries(t, e, s, r, i, n, a) {
                    return this._getChartApi().createSeries(this.sessionId(), t, e, s, r, i, n, a)
                }
                modifySeries(t, e, s, r, i, n) {
                    return this._getChartApi().modifySeries(this.sessionId(), t, e, s, r, i, n)
                }
                removeSeries(t) {
                    return !!this.isConnected().value() && this._getChartApi().removeSeries(this.sessionId(), t)
                }
                requestMoreData(t, e, s) {
                    return "number" == typeof t ? this._getChartApi().requestMoreData(this.sessionId(), t) : this._getChartApi().requestMoreData(this.sessionId(), t, e, s)
                }
                requestMoreTickmarks(t, e, s) {
                    return (0, a.isNumber)(t) ? this._getChartApi().requestMoreTickmarks(this.sessionId(), t) : this._getChartApi().requestMoreTickmarks(this.sessionId(), t, e, s)
                }
                requestMetadata(t, e) {
                    const s = () => this._getChartApi().requestMetadata(this.sessionId(), t, e);
                    window.localForageReady.done(s).fail((t => {
                        o.logError("localForage is not initialized, cannot proceed. " + t)
                    }))
                }
                isCanCreateStudy(t) {
                    return this._getChartApi().isCanCreateStudy(t)
                }
                createStudy(t, e, s, r, i, n, a) {
                    return this._getChartApi().createStudy(this.sessionId(), t, e, s, r, i, n, a)
                }
                rebindStudy(t, e, s, r, i, n, a) {
                    return this._getChartApi().rebindStudy(this.sessionId(), t, e, s, r, i, n, a)
                }
                modifyStudy(t, e, s, r) {
                    return this._getChartApi().modifyStudy(this.sessionId(), t, e, s, r)
                }
                removeStudy(t, e) {
                    return this._getChartApi().removeStudy(this.sessionId(), t, e)
                }
                createPointset(t, e, s, r, i, n) {
                    return this._getChartApi().createPointset(this.sessionId(), t, e, s, r, i, n)
                }
                modifyPointset(t, e, s, r) {
                    return this._getChartApi().modifyPointset(this.sessionId(), t, e, s, r)
                }
                removePointset(t) {
                    return this._getChartApi().removePointset(this.sessionId(), t)
                }
                setVisibleTimeRange(t, e, s, r, i, n) {
                    0
                }
                criticalError() {
                    return this._criticalError
                }
                connect(t = null) {
                    null !== t && (this._handler = t), this._symbolResolveMap.clear(), super.connect()
                }
                setHandler(t) {
                    this._handler = t
                }
                connected() {
                    return this.isConnected().value() && !this._sessionDisabled
                }
                disable() {
                    this._sessionDisabled = !0
                }
                chartApi() {
                    return this._getChartApi()
                }
                _sendCreateSession() {
                    Object.keys(this).forEach((t => {
                        /^(s|st|symbol_)\d+$/.test(t) && delete this[t]
                    })), this._getChartApi().chartCreateSession(this.sessionId(), this._disableStatistics)
                }
                _sendRemoveSession() {
                    this._getChartApi().chartDeleteSession(this.sessionId())
                }
                _onMessage(t) {
                    this._handler && this._handler(t)
                }
                _onCriticalError(t, e) {
                    this._criticalError.fire(t, e), super._onCriticalError(t, e)
                }
            }
        },
        377884: (t, e, s) => {
            "use strict";

            function r(t, e) {
                return t < e
            }

            function i(t, e, s, r, i) {
                let n = i - r;
                for (; 0 < n;) {
                    const i = n >> 1,
                        a = r + i;
                    s(t(a), e) ? (r = a + 1, n -= i + 1) : n = i
                }
                return r
            }

            function n(t, e, s, r = 0, n = t.length) {
                return i((e => t[e]), e, s, r, n)
            }

            function a(t, e, s = 0, i = t.length) {
                return n(t, e, r, s, i)
            }

            function o(t, e, s, r = 0, i = t.length) {
                let n = i - r;
                for (; 0 < n;) {
                    const i = n >> 1,
                        a = r + i;
                    s(e, t[a]) ? n = i : (r = a + 1, n -= i + 1)
                }
                return r
            }

            function h(t, e) {
                return t.filter((t => !e.includes(t)))
            }

            function l(t, e) {
                const s = t.indexOf(e);
                return s < 0 ? t.slice() : [e].concat(t.slice(0, s)).concat(t.slice(s + 1))
            }

            function d(t, e, s) {
                const r = new Set(e),
                    i = [],
                    n = [],
                    o = [];
                return t.forEach(((t, e) => {
                    r.has(t) ? n.push(t) : (i.push(t), o.push(e))
                })), s = s < t.length - 1 ? a(o, s + 1) : i.length, i.splice(s, 0, ...n), {
                    newItems: i,
                    movedItemsStartIndex: s
                }
            }

            function u(t, e, s) {
                const r = new Set(e),
                    i = [],
                    n = [],
                    o = [];
                return t.forEach(((t, e) => {
                    r.has(t) ? n.push(t) : (i.push(t), o.push(e))
                })), s = s <= t.length - 1 ? a(o, s) : i.length, i.splice(s, 0, ...n), {
                    newItems: i,
                    movedItemsStartIndex: s
                }
            }

            function c(t, e) {
                const s = new Set;
                return t.forEach((t => {
                    e.has(t) && s.add(t)
                })), s
            }
            s.d(e, {
                lowerboundExt: () => i,
                lowerbound: () => n,
                upperbound: () => o,
                subtract: () => h,
                moveToHead: () => l,
                moveAfter: () => d,
                moveBefore: () => u,
                intersect: () => c
            })
        },
        15693: (t, e, s) => {
            "use strict";

            function r(t) {
                return "=" + JSON.stringify(i(t))
            }

            function i(t) {
                return Object.keys(t).sort().reduce(((e, s) => ("[object Object]" === Object.prototype.toString.call(t[s]) ? e[s] = i(t[s]) : e[s] = t[s], e)), {})
            }

            function n(t) {
                return Boolean(t.inputs) || function(t) {
                    return Boolean(t.replay)
                }(t) || t.session || t.adjustment || t["currency-id"] || t["unit-id"] ? r(t) : t.symbol
            }

            function a(t) {
                return "=" === t[0]
            }

            function o(t) {
                if (!a(t)) return {
                    symbol: t
                };
                try {
                    return JSON.parse(t.slice(1))
                } catch (e) {
                    return {
                        symbol: t
                    }
                }
            }

            function h(t) {
                return "string" == typeof t ? t : h(t.symbol)
            }
            s.d(e, {
                encodeExtendedSymbolOrGetSimpleSymbolString: () => n,
                isEncodedExtendedSymbol: () => a,
                decodeExtendedSymbol: () => o,
                unwrapSimpleSymbol: () => h
            })
        },
        504122: (t, e, s) => {
            "use strict";
            s.d(e, {
                DateFormatter: () => n
            });
            var r = s(381269),
                i = s(830318);
            class n {
                constructor(t = "yyyy-MM-dd", e = !1) {
                    this._dateFormatFunc = e ? (0, i.getDateFormatWithWeekday)(t) : i.dateFormatFunctions[t]
                }
                format(t) {
                    return r.customFormatters && r.customFormatters.dateFormatter ? r.customFormatters.dateFormatter.format(t) : this._dateFormatFunc(t, !1)
                }
                formatLocal(t) {
                    return r.customFormatters.dateFormatter ? r.customFormatters.dateFormatter.formatLocal ? r.customFormatters.dateFormatter.formatLocal(t) : r.customFormatters.dateFormatter.format(t) : this._dateFormatFunc(t, !0)
                }
            }
        },
        715303: (t, e, s) => {
            "use strict";
            s.d(e, {
                DateTimeFormatter: () => a
            });
            var r = s(820187),
                i = s(504122);
            const n = {
                dateFormat: "yyyy-MM-dd",
                withWeekday: !1,
                timeFormat: r.hourMinuteSecondFormat,
                dateTimeSeparator: " "
            };
            class a {
                constructor(t = {}) {
                    const e = Object.assign({}, n, t);
                    this._dateFormatter = new i.DateFormatter(e.dateFormat, e.withWeekday), this._timeFormatter = new r.TimeFormatter(e.timeFormat), this._separator = e.dateTimeSeparator
                }
                format(t) {
                    return `${this._dateFormatter.format(t)}${this._separator}${this._timeFormatter.format(t)}`
                }
                formatLocal(t) {
                    return `${this._dateFormatter.formatLocal(t)}${this._separator}${this._timeFormatter.formatLocal(t)}`
                }
            }
        },
        908803: (t, e, s) => {
            "use strict";
            var r;
            s.d(e, {
                    SymbolErrorPermissionDeniedReason: () => r,
                    permissionDenied: () => i,
                    invalidSymbol: () => n
                }),
                function(t) {
                    t.Symbol = "symbol", t.GroupPermission = "group"
                }(r || (r = {}));
            const i = "permission denied",
                n = "invalid symbol"
        },
        695078: (t, e, s) => {
            "use strict";
            s.d(e, {
                ensureTimePointIndexIndex: () => a,
                unpackNonSeriesData: () => o
            });
            var r = s(706617),
                i = s(588537);

            function n(t) {
                if (!(0, r.isObject)(t)) throw new Error("Graphics commands should be wrapped in an object");
                if ((0, r.hasProperty)(t, "create"), (0, r.hasProperty)(t, "erase")) {
                    const e = t.erase;
                    (0, i.assert)(Array.isArray(e), "Collection of erase commands should be array");
                    for (const t of e) {
                        if (!(0, r.isObject)(t) || !(0, r.hasProperty)(t, "action")) throw new Error("Command should be an object with 'action' property");
                        (0, i.assert)("all" === t.action || "one" === t.action, "Erase command action should be 'all' or 'one'")
                    }
                }
                return t
            }

            function a(t) {
                if (t < 0) throw new Error("TimePointIndexIndex should be non-negative integer");
                return t
            }
            async function o(t) {
                if ("" === t) return null;
                const e = JSON.parse(t);
                if (!(0, r.isObject)(e) || "function" == typeof e) throw new Error("Non-object content in the non-series envelope");
                if ((0, r.hasProperty)(e, "indexes_replace")) return {
                    indexes_replace: !0
                };
                const i = {
                    indexes_replace: !1
                };
                if ((0, r.hasProperty)(e, "offsets") && (i.offsets = e.offsets), (0, r.hasProperty)(e, "isUpdate")) {
                    if ("boolean" != typeof e.isUpdate) throw new Error('Invalid type of "isUpdate" field');
                    i.isUpdate = e.isUpdate
                }
                if ((0, r.hasProperty)(e, "data") && (i.data = e.data), (0, r.hasProperty)(e, "graphicsCmds") && (i.graphicsCmds = n(e.graphicsCmds)), (0, r.hasProperty)(e, "dataCompressed") || (0, r.hasProperty)(e, "graphicsCmdsCompressed")) {
                    const {
                        default: t
                    } = await Promise.all([s.e(93194), s.e(81578)]).then(s.t.bind(s, 593194, 23));
                    if ((0, r.hasProperty)(e, "dataCompressed")) {
                        const s = await (new t).loadAsync(e.dataCompressed, {
                            base64: !0
                        });
                        i.data = JSON.parse(await s.file("").async("text"))
                    }
                    if ((0, r.hasProperty)(e, "graphicsCmdsCompressed")) {
                        const s = await (new t).loadAsync(e.graphicsCmdsCompressed, {
                            base64: !0
                        });
                        i.graphicsCmds = n(JSON.parse(await s.file("").async("text")))
                    }
                    return i
                }
                return i
            }
        },
        752280: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                PlotRowSearchMode: () => o,
                PlotList: () => u,
                mergeMinMax: () => c,
                mergePlotRows: () => _
            });
            var r = s(588537),
                i = s(377884),
                n = s(676745);
            const a = (0, s(911905).getLogger)("Chart.PlotList");
            var o;
            ! function(t) {
                t[t.NearestLeft = -1] = "NearestLeft", t[t.Exact = 0] = "Exact", t[t.NearestRight = 1] = "NearestRight"
            }(o || (o = {}));
            const h = 30;

            function l(t) {
                return t.index
            }

            function d(t) {
                return t.value[0]
            }
            class u {
                constructor(t = null, e = null) {
                    this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache = new Map, this._rowSearchCacheByIndex = new Map, this._rowSearchCacheByIndexWithoutEmptyValues = new Map, this._rowSearchCacheByTime = new Map, this._rowSearchCacheByTimeWithoutEmptyValues = new Map, this._plotFunctions = t || new Map, this._emptyValuePredicate = e
                }
                clear() {
                    this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache.clear(), this._invalidateSearchCaches()
                }
                first() {
                    return this.size() > 0 ? this._items[this._start] : null
                }
                last() {
                    return this.size() > 0 ? this._items[this._end - 1] : null
                }
                firstIndex() {
                    return this.size() > 0 ? this._indexAt(this._start) : null
                }
                lastIndex() {
                    return this.size() > 0 ? this._indexAt(this._end - 1) : null
                }
                size() {
                    return this._end - this._start
                }
                isEmpty() {
                    return 0 === this.size()
                }
                contains(t) {
                    return null !== this.search(t, o.Exact)
                }
                valueAt(t) {
                    const e = this.search(t);
                    return null !== e ? e.value : null
                }
                add(t, e) {
                    if (this._shareRead) return a.logDebug("add: readonly collection modification attempt"), !1;
                    const s = {
                            index: t,
                            value: e
                        },
                        r = this._nonCachedSearch(t, o.Exact, l);
                    return this._invalidateSearchCaches(), null === r ? (this._items.splice(this._lowerbound(t, l), 0, s), this._start = 0, this._end = this._items.length, !0) : (this._items[r] = s, !1)
                }
                search(t, e = o.Exact, s) {
                    return this._searchImpl(t, e, this._rowSearchCacheByIndex, this._rowSearchCacheByIndexWithoutEmptyValues, l, s)
                }
                searchByTime(t, e = o.Exact, s) {
                    return this._searchImpl(t, e, this._rowSearchCacheByTime, this._rowSearchCacheByTimeWithoutEmptyValues, d, s)
                }
                fold(t, e) {
                    let s = e;
                    for (let e = this._start; e < this._end; ++e) {
                        s = t(this._indexAt(e), this._valueAt(e), s)
                    }
                    return s
                }
                findFirst(t, e) {
                    const s = void 0 !== e && Math.min(this._start + e, this._end) || this._end;
                    for (let e = this._start; e < s; ++e) {
                        const s = this._indexAt(e),
                            r = this._valueAt(e);
                        if (t(s, r)) return {
                            index: s,
                            value: r
                        }
                    }
                    return null
                }
                findLast(t, e) {
                    const s = void 0 !== e && Math.max(this._end - e, this._start) || this._start;
                    for (let e = this._end - 1; e >= s; --e) {
                        const s = this._indexAt(e),
                            r = this._valueAt(e);
                        if (t(s, r)) return {
                            index: s,
                            value: r
                        }
                    }
                    return null
                }
                each(t) {
                    for (let e = this._start; e < this._end; ++e) {
                        if (t(this._indexAt(e), this._valueAt(e))) break
                    }
                }
                reduce(t, e) {
                    let s = e;
                    for (let e = this._start; e < this._end; ++e) {
                        s = t(s, this._indexAt(e), this._valueAt(e))
                    }
                    return s
                }
                range(t, e) {
                    const s = new u(this._plotFunctions, this._emptyValuePredicate);
                    return s._items = this._items, s._start = this._lowerbound(t, l), s._end = this._upperbound(e), s._shareRead = !0, s
                }
                plottableRange(t) {
                    const e = new u(this._plotFunctions, this._emptyValuePredicate);
                    return e._items = this._items, e._start = this._upperbound(n.UNPLOTTABLE_TIME_POINT_INDEX), e._end = this._end, e._shareRead = !0, !0 === t && e._start > this._start && (e._start -= 1), e
                }
                rangeIterator(t, e) {
                    const s = this._lowerbound(t, l),
                        r = this._upperbound(e);
                    if (s === r) return {
                        hasNext: () => !1,
                        next: () => {
                            throw new Error("Invalid operation")
                        }
                    };
                    let i = s - 1;
                    return {
                        hasNext: () => i < r - 1,
                        next: () => (i += 1, this._items[i])
                    }
                }
                minMaxOnRangeCached(t, e, s) {
                    if (this.isEmpty()) return null;
                    let r = null;
                    for (const i of s) {
                        r = c(r, this._minMaxOnRangeCachedImpl(t - i.offset, e - i.offset, i.name))
                    }
                    return r
                }
                minMaxOnRange(t, e, s) {
                    if (this.isEmpty()) return null;
                    let r = null;
                    for (const i of s) {
                        r = c(r, this._minMaxOnRange(t - i.offset, e - i.offset, i.name))
                    }
                    return r
                }
                merge(t) {
                    return this._shareRead ? (a.logDebug("merge: readonly collection modification attempt"), null) : 0 === t.length ? null : this.isEmpty() || t[t.length - 1].index < this._items[0].index ? this._prepend(t) : t[0].index > this._items[this._items.length - 1].index ? this._append(t) : 1 === t.length && t[0].index === this._items[this._items.length - 1].index ? (this._updateLast(t[0]), t[0]) : this._merge(t)
                }
                addTail(t, e = !1) {
                    let s = 0;
                    e && this._end - this._start > 0 && (s = 1, this._items[this._end - this._start - 1].value = t[0].value);
                    for (let e = s; e < t.length; ++e) {
                        const s = t[e],
                            r = this.lastIndex();
                        if (null === r) {
                            a.logError("Can't add tail to the empty plotlist");
                            break
                        }
                        this.add(r + 1, s.value)
                    }
                    this._invalidateSearchCaches()
                }
                move(t) {
                    if (this._shareRead) return void a.logDebug("move: readonly collection modification attempt");
                    if (0 === t.length) return;
                    const e = this._items.slice();
                    for (const s of t) {
                        const t = this._bsearch(s.old, l);
                        if (null !== t && void 0 !== e[t])
                            if (s.new === n.INVALID_TIME_POINT_INDEX) e[t] = void 0;
                            else {
                                e[t] = {
                                    index: s.new,
                                    value: e[t].value
                                };
                                const r = this._bsearch(s.new, l);
                                if (null !== r) {
                                    const t = e[r];
                                    void 0 !== t && t.index === s.new && (e[r] = void 0)
                                }
                            }
                    }
                    this._items = e.filter((t => void 0 !== t)).sort(((t, e) => t.index - e.index)), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._start = 0, this._end = this._items.length
                }
                remove(t) {
                    if (this._shareRead) return a.logDebug("remove: readonly collection modification attempt"), null;
                    const e = this._nonCachedSearch(t, o.NearestRight, l);
                    if (null === e) return null;
                    const s = this._items.splice(e);
                    return this._end = this._items.length, this._minMaxCache.clear(), this._invalidateSearchCaches(), s.length > 0 ? s[0] : null
                }
                state() {
                    return {
                        start: this._start,
                        end: this._end,
                        data: this._items,
                        shareread: this._shareRead
                    }
                }
                restoreState(t) {
                    t ? (this._start = t.start, this._end = t.end, this._shareRead = t.shareread, this._items = t.data, this._minMaxCache.clear(), this._invalidateSearchCaches()) : this.clear()
                }
                _indexAt(t) {
                    return this._items[t].index
                }
                _valueAt(t) {
                    return this._items[t].value
                }
                _length() {
                    return this._items.length
                }
                _searchImpl(t, e, s, r, i, n) {
                    const a = void 0 !== n ? s : r,
                        o = void 0 !== n ? 1e4 * (e + 1) + n : e;
                    let h = a.get(t);
                    if (void 0 !== h) {
                        const t = h.get(o);
                        if (void 0 !== t) return t
                    }
                    const l = this._nonCachedSearch(t, e, i, n);
                    if (null === l) return null;
                    const d = {
                        index: this._indexAt(l),
                        value: this._valueAt(l)
                    };
                    return void 0 === h && (h = new Map, a.set(t, h)), h.set(o, d), d
                }
                _nonCachedSearch(t, e, s, r) {
                    const i = this._lowerbound(t, s),
                        n = i === this._end || t !== s(this._items[i]);
                    if (n && e !== o.Exact) switch (e) {
                        case o.NearestLeft:
                            return this._searchNearestLeft(i, r);
                        case o.NearestRight:
                            return this._searchNearestRight(i, r);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                    if (void 0 === r || n || e === o.Exact) return n ? null : i;
                    switch (e) {
                        case o.NearestLeft:
                            return this._nonEmptyNearestLeft(i, r);
                        case o.NearestRight:
                            return this._nonEmptyNearestRight(i, r);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                }
                _nonEmptyNearestRight(t, e) {
                    const s = (0, r.ensure)(this._emptyValuePredicate),
                        i = (0, r.ensure)(e);
                    for (; t < this._end && s(this._valueAt(t), i);) t += 1;
                    return t === this._end ? null : t
                }
                _nonEmptyNearestLeft(t, e) {
                    const s = (0, r.ensureNotNull)(this._emptyValuePredicate),
                        i = (0, r.ensure)(e);
                    for (; t >= this._start && s(this._valueAt(t), i);) t -= 1;
                    return t < this._start ? null : t
                }
                _searchNearestLeft(t, e) {
                    if (t === this._start) return null;
                    const s = t - 1,
                        r = s !== this._end ? s : null;
                    return void 0 !== e && null !== r ? this._nonEmptyNearestLeft(r, e) : r
                }
                _searchNearestRight(t, e) {
                    const s = t,
                        r = s !== this._end ? s : null;
                    return void 0 !== e && null !== r ? this._nonEmptyNearestRight(r, e) : r
                }
                _bsearch(t, e) {
                    const s = this._lowerbound(t, e);
                    return s !== this._end && t === e(this._items[s]) ? s : null
                }
                _lowerbound(t, e) {
                    return (0, i.lowerbound)(this._items, t, ((t, s) => e(t) < s), this._start, this._end)
                }
                _upperbound(t) {
                    return (0, i.upperbound)(this._items, t, ((t, e) => e.index > t), this._start, this._end)
                }
                _plotMinMax(t, e, s) {
                    let r = null;
                    const i = this._plotFunctions.get(s);
                    if (void 0 === i) throw new Error(`Plot "${s}" is not registered`);
                    for (let s = t; s < e; s++) {
                        const t = i(this._items[s].value);
                        null == t || Number.isNaN(t) || (null === r ? r = {
                            min: t,
                            max: t
                        } : (t < r.min && (r.min = t), t > r.max && (r.max = t)))
                    }
                    return r
                }
                _invalidateCacheForRow(t) {
                    const e = Math.floor(t.index / h);
                    this._minMaxCache.forEach((t => t.delete(e)))
                }
                _prepend(t) {
                    return (0, r.assert)(!this._shareRead, "collection should not be readonly"), (0, r.assert)(0 !== t.length, "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = t.concat(this._items), this._start = 0, this._end = this._items.length, t[0]
                }
                _append(t) {
                    return (0, r.assert)(!this._shareRead, "collection should not be readonly"), (0, r.assert)(0 !== t.length, "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = this._items.concat(t), this._start = 0, this._end = this._items.length, t[0]
                }
                _updateLast(t) {
                    (0, r.assert)(!this.isEmpty(), "plot list should not be empty");
                    const e = this._items[this._end - 1];
                    (0, r.assert)(e.index === t.index, "last row index should match new row index"), this._invalidateCacheForRow(t), this._invalidateSearchCaches(), this._items[this._end - 1] = t
                }
                _merge(t) {
                    return (0, r.assert)(0 !== t.length, "plot rows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = _(this._items, t), this._start = 0, this._end = this._items.length, t[0]
                }
                _minMaxOnRangeCachedImpl(t, e, s) {
                    if (this.isEmpty()) return null;
                    let i = null;
                    const n = (0, r.ensureNotNull)(this.firstIndex()),
                        a = (0, r.ensureNotNull)(this.lastIndex()),
                        o = Math.max(t, n),
                        l = Math.min(e, a),
                        d = Math.ceil(o / h) * h,
                        u = Math.max(d, Math.floor(l / h) * h);
                    i = c(i, this._minMaxOnRange(o, Math.min(d, e, l), s));
                    let _ = this._minMaxCache.get(s);
                    void 0 === _ && (_ = new Map, this._minMaxCache.set(s, _));
                    for (let t = Math.max(d + 1, o); t < u; t += h) {
                        const e = Math.floor(t / h);
                        let r = _.get(e);
                        if (void 0 === r) {
                            const t = e * h,
                                i = (e + 1) * h - 1;
                            r = this._minMaxOnRange(t, i, s), _.set(e, r)
                        }
                        i = c(i, r)
                    }
                    i = c(i, this._minMaxOnRange(u, l, s));
                    return i
                }
                _minMaxOnRange(t, e, s) {
                    return this._plotMinMax(this._lowerbound(t, l), this._upperbound(e), s)
                }
                _invalidateSearchCaches() {
                    this._rowSearchCacheByIndex.clear(), this._rowSearchCacheByIndexWithoutEmptyValues.clear(), this._rowSearchCacheByTime.clear(), this._rowSearchCacheByTimeWithoutEmptyValues.clear()
                }
            }

            function c(t, e) {
                if (null === t) return e;
                if (null === e) return t;
                return {
                    min: Math.min(t.min, e.min),
                    max: Math.max(t.max, e.max)
                }
            }

            function _(t, e) {
                const s = function(t, e) {
                        const s = t.length,
                            r = e.length;
                        let i = s + r,
                            n = 0,
                            a = 0;
                        for (; n < s && a < r;) t[n].index < e[a].index ? n++ : t[n].index > e[a].index ? a++ : (n++, a++, i--);
                        return i
                    }(t, e),
                    r = new Array(s);
                let i = 0,
                    n = 0;
                const a = t.length,
                    o = e.length;
                let h = 0;
                for (; i < a && n < o;) t[i].index < e[n].index ? (r[h] = t[i], i++) : t[i].index > e[n].index ? (r[h] = e[n], n++) : (r[h] = e[n], i++, n++), h++;
                for (; i < a;) r[h] = t[i], i++, h++;
                for (; n < o;) r[h] = e[n], n++, h++;
                return r
            }
        },
        860949: (t, e, s) => {
            "use strict";
            s.d(e, {
                createPrimitiveProperty: () => n
            });
            var r = s(232567),
                i = s.n(r);

            function n(t) {
                return new(i())(t)
            }
        },
        232567: (t, e, s) => {
            "use strict";
            var r = s(97639),
                i = s(270617).isFunction;

            function n(t) {
                if (this._listeners = new r, this._childs = [], this._muteChildChanges = !1,
                    void 0 !== t)
                    if (this.isPrimitiveType(t)) this._value = t;
                    else
                        for (var e in t) this.addProperty(e, t[e])
            }
            n.prototype.merge = function(t, e) {
                var s = null;
                if (e) var r = (s = []).length;
                if (void 0 === t) return s;
                if (this.isPrimitiveType(t)) return e && this._value !== t && s.push(this), this._value = t, s;
                if (Array.isArray(t))
                    for (var i = 0; i < t.length; i++)
                        if (this[i]) {
                            var n = this[i].merge(t[i], e);
                            e && (s = s.concat(n))
                        } else this.addProperty(i, t[i]), e && s.push(this[i]);
                else
                    for (var a in t)
                        if (this[a]) {
                            n = this[a].merge(t[a], e);
                            e && void 0 !== n && (s = s.concat(n))
                        } else this.addProperty(a, t[a]), e && s.push(this[a]);
                return e && s.length > r && s.push(this), s
            }, n.prototype.mergeAndFire = function(t) {
                var e = this.merge(t, !0);
                this._muteChildChanges = !0, e.forEach((function(t) {
                    t._muteChildChanges = !0
                })), e.forEach((function(t) {
                    t._muteChildChanges = !1, t.listeners().fire(t)
                })), this._muteChildChanges = !1, e.length > 0 && this.listeners().fire(this)
            }, n.prototype.state = function(t) {
                var e = i(this.value) ? this.value() : void 0;
                void 0 === e && (e = {});
                for (var s = 0; s < this._childs.length; s++) {
                    var r = this._childs[s];
                    if (t && -1 !== t.indexOf(r)) continue;
                    const i = this[r];
                    let h;
                    if (t) {
                        for (var n = [], a = 0; a < t.length; a++) {
                            var o = t[a];
                            o.startsWith(r + ".") && n.push(o.substring(r.length + 1))
                        }
                        h = i.state(n)
                    } else h = i.state();
                    (void 0 !== h || i.storeStateIfUndefined()) && (e[r] = h)
                }
                return e
            }, n.prototype.storeStateIfUndefined = function() {
                return !0
            }, n.prototype.clone = function(t) {
                return new n(this.state())
            }, n.prototype.isPrimitiveType = function(t) {
                return null === t || (!!isNumber(t) || (!!new TradingView.TypeValidator(String).check(t) || TradingView.isBoolean(t)))
            }, n.prototype.value = function() {
                return this._value
            }, n.prototype.listeners = function() {
                return this._listeners
            }, n.prototype.childCount = function() {
                return this._childs.length
            }, n.prototype.childNames = function() {
                return this._childs
            }, n.prototype.child = function(t) {
                return this[t]
            }, n.prototype.setValue = function(t, e) {
                (this._value !== t || e) && (this._value = t, this._listeners.fire(this))
            }, n.prototype.setValueSilently = function(t) {
                this._value = t
            }, n.prototype.addProperty = function(t, e) {
                var s = new n(e);
                this[t] = s, this._childs.push(t), s.subscribe(this, this.childChanged)
            }, n.prototype.removeProperty = function(t) {
                this[t].unsubscribe(this, this.childChanged), delete this[t], this._childs = this._childs.filter((function(e) {
                    return e !== t
                }))
            }, n.prototype.hasChild = function(t) {
                return this._childs.indexOf(t) >= 0
            }, n.prototype.addChild = function(t, e) {
                this[t] && this[t].unsubscribe(this, this.childChanged), this[t] = e, -1 === this._childs.indexOf(t) && this._childs.push(t), e.subscribe(this, this.childChanged)
            }, n.prototype.childChanged = function(t, e) {
                this._muteChildChanges || this.listeners().fire(this)
            }, n.prototype.subscribe = function(t, e) {
                this.listeners().subscribe(t, e, !1)
            }, n.prototype.unsubscribe = function(t, e) {
                this.listeners().unsubscribe(t, e)
            }, n.prototype.unsubscribeAll = function(t) {
                this.listeners().unsubscribeAll(t)
            }, n.prototype.childs = function() {
                return this
            }, t.exports = n
        },
        103653: (t, e, s) => {
            "use strict";
            s.d(e, {
                seriesPlotFunctionMap: () => l,
                barFunction: () => d,
                SeriesData: () => _
            });
            var r, i = s(588537),
                n = s(752280),
                a = s(377884);
            ! function(t) {
                t[t.FromLeft = -1] = "FromLeft",
                    t[t.FromRight = 1] = "FromRight"
            }(r || (r = {}));
            const o = {
                    open: t => t[1],
                    high: t => t[2],
                    low: t => t[3],
                    close: t => t[4],
                    hl2: t => (t[2] + t[3]) / 2,
                    hlc3: t => (t[2] + t[3] + t[4]) / 3,
                    ohlc4: t => (t[1] + t[2] + t[3] + t[4]) / 4
                },
                h = ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"];

            function l() {
                const t = new Map;
                return h.forEach(((e, s) => {
                    t.set(e, d(e))
                })), t
            }

            function d(t, e) {
                const s = o[null != e ? e : t],
                    r = o[t];
                return (t, e) => 0 === e ? s(t) : r(t)
            }

            function u(t, e) {
                return null == t[e]
            }
            const c = [{
                barsToMerge: 10,
                forBarspacingLargerThen: .03
            }, {
                barsToMerge: 30,
                forBarspacingLargerThen: .01
            }, {
                barsToMerge: 100,
                forBarspacingLargerThen: .003
            }, {
                barsToMerge: 500,
                forBarspacingLargerThen: 0
            }];
            class _ {
                constructor() {
                    this._pressedChunks = {
                        chunks: new Map,
                        priceSource: "uninitialized"
                    }, this.m_bars = new n.PlotList(l(), u), this.m_nsBars = new n.PlotList(l(), u), this._clearPressedChunks()
                }
                bars() {
                    return this.m_bars
                }
                nsBars() {
                    return this.m_nsBars
                }
                pressedChunks(t, e) {
                    if (e !== this._pressedChunks.priceSource) {
                        this._pressedChunks.priceSource = e;
                        const t = this.m_bars.first();
                        t && (this._clearPressedChunks(), this._rebuildPressedChunks(t))
                    }
                    const s = (0, i.ensureDefined)(c.find((e => e.forBarspacingLargerThen <= t)));
                    return (0, i.ensureDefined)(this._pressedChunks.chunks.get(s.barsToMerge))
                }
                mergeRegularBars(t) {
                    const e = this.m_bars.size(),
                        s = this.m_bars.merge(t);
                    return s && "uninitialized" !== this._pressedChunks.priceSource && (e === this.m_bars.size() && s.index === this.m_bars.lastIndex() ? this._updateLatestChunks() : this._rebuildPressedChunks(s)), s
                }
                size() {
                    return this.m_bars.size() + this.m_nsBars.size()
                }
                each(t) {
                    this.m_bars.each(t), this.m_nsBars.each(t)
                }
                clear() {
                    this.m_bars.clear(), this.m_nsBars.clear(), this.lastProjectionPrice = void 0, this._clearPressedChunks()
                }
                isEmpty() {
                    return this.m_bars.isEmpty() && this.m_nsBars.isEmpty()
                }
                first() {
                    return this.m_bars.isEmpty() ? this.m_nsBars.first() : this.m_bars.first()
                }
                last() {
                    return this.m_nsBars.isEmpty() ? this.m_bars.last() : this.m_nsBars.last()
                }
                search(t, e) {
                    return this.nsBars().isEmpty() ? this.bars().search(t, e) : this.bars().isEmpty() || (0, i.ensureNotNull)(this.nsBars().firstIndex()) <= t ? this.nsBars().search(t, e) : this.bars().search(t, e)
                }
                valueAt(t) {
                    const e = this.search(t);
                    return null !== e ? e.value : null
                }
                plotValueToTimePointIndex(t, e, s) {
                    if (s === r.FromRight) {
                        const s = (s, r) => {
                                const i = r[e];
                                return null != i && t >= i
                            },
                            r = this.m_bars.findLast(s);
                        if (null !== r) return r.index;
                        const i = this.m_nsBars.findLast(s);
                        return null !== i ? i.index : this.m_bars.firstIndex()
                    }
                    if (s === r.FromLeft) {
                        const s = (s, r) => {
                                const i = r[e];
                                return null != i && t <= i
                            },
                            r = this.m_bars.findFirst(s);
                        if (null !== r) return r.index;
                        const i = this.m_nsBars.findFirst(s);
                        return null !== i ? i.index : this.m_bars.lastIndex()
                    }
                    throw new Error("plotValueToTimePointIndex: unsupported search mode")
                }
                moveData(t) {
                    this.m_bars.move(t), this.m_nsBars.move(t), this.m_bars.size() > 0 && this._rebuildPressedChunks((0, i.ensureNotNull)(this.m_bars.first()))
                }
                _rebuildPressedChunks(t) {
                    const e = this._pressedChunks.priceSource;
                    if ("uninitialized" === e) return;
                    const s = t.index,
                        r = o[e],
                        n = (t, e, s) => {
                            let i = null;
                            for (; t.hasNext();) {
                                const n = t.next(),
                                    a = r(n.value);
                                i && n.index - i.startTime >= s.barsToMerge && (e.push(i), i = null), i ? (i.endTime = n.index,
                                    i.high = Math.max(i.high, a), i.low = Math.min(i.low, a), i.close = a) : i = {
                                    startTime: n.index,
                                    endTime: n.index,
                                    open: a,
                                    high: a,
                                    low: a,
                                    close: a
                                }
                            }
                            i && e.push(i)
                        };
                    c.forEach((t => {
                        const e = (0, i.ensureDefined)(this._pressedChunks.chunks.get(t.barsToMerge)),
                            r = (0, a.lowerbound)(e, s, ((t, e) => t.endTime < e));
                        if (0 === r && e.length > 0) {
                            const s = e[0].startTime - 1,
                                r = (0, i.ensureNotNull)(this.m_bars.firstIndex()),
                                a = this.m_bars.rangeIterator(r, s),
                                o = [];
                            n(a, o, t);
                            const h = o.concat(e);
                            this._pressedChunks.chunks.set(t.barsToMerge, h)
                        } else {
                            const s = (0, i.ensureNotNull)(this.m_bars.lastIndex());
                            e.splice(r);
                            let a = (0, i.ensureNotNull)(this.m_bars.firstIndex());
                            e.length && (a = e[e.length - 1].endTime + 1);
                            const o = this.m_bars.rangeIterator(a, s);
                            n(o, e, t)
                        }
                    }))
                }
                _updateLatestChunks() {
                    const t = (0, i.ensureNotNull)(this.m_bars.lastIndex());
                    c.forEach((e => {
                        const s = (0, i.ensureDefined)(this._pressedChunks.chunks.get(e.barsToMerge)),
                            r = this.m_bars.rangeIterator(t, t).next(),
                            n = r.value[4],
                            a = s[s.length - 1];
                        a.high = Math.max(a.high, n), a.low = Math.min(a.low, n), a.close = n, a.endTime = r.index
                    }))
                }
                _clearPressedChunks() {
                    c.forEach((t => this._pressedChunks.chunks.set(t.barsToMerge, [])))
                }
            }
        },
        180372: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                SeriesDataSource: () => v,
                initialRequestOptionsToNumBars: () => b,
                parseJapaneseProjectionBars: () => S
            });
            var r = s(588537),
                i = s(270617),
                n = s(15693),
                a = s(273044),
                o = s(103653),
                h = s(695078),
                l = s(908803),
                d = s(97639),
                u = s.n(d);
            class c {
                constructor() {
                    this._modified = new(u()), this._loading = new(u()), this._completed = new(u()), this._error = new(u()), this._symbolError = new(u()), this._symbolResolved = new(u()), this._seriesError = new(u()), this._symbolNotPermitted = new(u()), this._symbolInvalid = new(u()), this._symbolGroupNotPermitted = new(u()), this._chartTypeNotPermitted = new(u()), this._intradaySpreadNotPermitted = new(u()), this._intradayExchangeNotPermitted = new(u()), this._customIntervalNotPermitted = new(u()), this._secondsIntervalNotPermitted = new(u()), this._tickMarksRangeChanged = new(u()), this._barReceived = new(u()), this._seriesTimeFrame = new(u()), this._dataUpdated = new(u())
                }
                destroy() {
                    this._modified.destroy(), this._loading.destroy(), this._completed.destroy(), this._error.destroy(), this._symbolError.destroy(), this._symbolResolved.destroy(), this._seriesError.destroy(), this._symbolInvalid.destroy(), this._symbolNotPermitted.destroy(), this._symbolGroupNotPermitted.destroy(), this._chartTypeNotPermitted.destroy(), this._intradaySpreadNotPermitted.destroy(), this._intradayExchangeNotPermitted.destroy(), this._customIntervalNotPermitted.destroy(), this._secondsIntervalNotPermitted.destroy(), this._tickMarksRangeChanged.destroy(), this._barReceived.destroy(), this._seriesTimeFrame.destroy(), this._dataUpdated.destroy()
                }
                modified() {
                    return this._modified
                }
                loading() {
                    return this._loading
                }
                completed() {
                    return this._completed
                }
                error() {
                    return this._error
                }
                symbolError() {
                    return this._symbolError
                }
                symbolResolved() {
                    return this._symbolResolved
                }
                seriesError() {
                    return this._seriesError
                }
                symbolInvalid() {
                    return this._symbolInvalid
                }
                symbolNotPermitted() {
                    return this._symbolNotPermitted
                }
                symbolGroupNotPermitted() {
                    return this._symbolGroupNotPermitted
                }
                chartTypeNotPermitted() {
                    return this._chartTypeNotPermitted
                }
                intradaySpreadNotPermitted() {
                    return this._intradaySpreadNotPermitted
                }
                intradayExchangeNotPermitted() {
                    return this._intradayExchangeNotPermitted
                }
                customIntervalNotPermitted() {
                    return this._customIntervalNotPermitted
                }
                secondsIntervalNotPermitted() {
                    return this._secondsIntervalNotPermitted
                }
                tickMarksRangeChanged() {
                    return this._tickMarksRangeChanged
                }
                barReceived() {
                    return this._barReceived
                }
                seriesTimeFrame() {
                    return this._seriesTimeFrame
                }
                dataUpdated() {
                    return this._dataUpdated
                }
                fireCompleted(t, e, s) {
                    this._completed.fire(t, e, s)
                }
                fireModified() {
                    this._modified.fire()
                }
                fireLoading(t) {
                    this._loading.fire(t)
                }
                fireError() {
                    this._error.fire()
                }
                fireSymbolError(t) {
                    this._symbolError.fire(t), this.fireError()
                }
                fireSymbolResolved(t) {
                    this._symbolResolved.fire(t)
                }
                fireSeriesError(t) {
                    this._seriesError.fire(t), this.fireError()
                }
                fireSymbolInvalid() {
                    this._symbolInvalid.fire()
                }
                fireSymbolNotPermitted(t) {
                    this._symbolNotPermitted.fire(t)
                }
                fireSymbolGroupNotPermitted(t) {
                    this._symbolGroupNotPermitted.fire(t)
                }
                fireChartTypeNotPermitted(t) {
                    this._chartTypeNotPermitted.fire(t), this.fireError()
                }
                fireIntradaySpreadNotPermitted() {
                    this._intradaySpreadNotPermitted.fire(), this.fireError()
                }
                fireIntradayExchangeNotPermitted() {
                    this._intradayExchangeNotPermitted.fire(), this.fireError()
                }
                fireCustomIntervalNotPermitted() {
                    this._customIntervalNotPermitted.fire(), this.fireError()
                }
                fireSecondsIntervalNotPermitted() {
                    this._secondsIntervalNotPermitted.fire(), this.fireError()
                }
                fireTickMarksRangeChanged(t) {
                    this._tickMarksRangeChanged.fire(t)
                }
                fireBarReceived(t) {
                    this._barReceived.fire(t)
                }
                fireSeriesTimeFrame(t, e, s, r, i) {
                    this._seriesTimeFrame.fire(t, e, s, r, i)
                }
                fireDataUpdated(t, e, s) {
                    this._dataUpdated.fire(t, e, s)
                }
            }
            var _ = s(911905),
                m = s(749473);
            const p = (0, _.getLogger)("Chart.SeriesDataSource");
            var f;
            ! function(t) {
                t[t.Idle = 0] = "Idle", t[t.AwaitingConnection = 1] = "AwaitingConnection", t[t.AwaitingFirstDataUpdate = 2] = "AwaitingFirstDataUpdate", t[t.Active = 3] = "Active"
            }(f || (f = {}));
            let g = 1;
            let y = 1;

            function b(t) {
                return t.startDate ? t.endDate || t.count ? t.endDate ? ["from_to", t.startDate, t.endDate] : ["bar_count", t.startDate, (0, r.ensure)(t.count)] : ["from_to", t.startDate] : t.count || 300
            }
            class v {
                constructor(t, e, s, r) {
                    this._symbol = null, this._resolvedSymbolName = null, this._instanceId = null, this._symbolInstanceId = null, this._resolution = null, this._timeFrame = null, this._data = new o.SeriesData, this._dataEvents = new c, this._status = f.Idle, this._turnaroundCounter = 1, this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this), this._ongoingDataUpdate = Promise.resolve(), this._gateway = t, this._turnaroundPrefix = e, this._createSeriesParams = b(null != s ? s : {
                        count: 300
                    }), this._timeFrame = r || null, this._gateway.isConnected().subscribe(this._boundOnGatewayIsConnectedChanged)
                }
                destroy() {
                    this.stop(), this._gateway.isConnected().unsubscribe(this._boundOnGatewayIsConnectedChanged)
                }
                modifySeries(t, e, s = null, n = !1) {
                    n && (p.logNormal("Due to force flag clearing symbol & resolution to force re-requesting data."), this._symbol = null, this._resolution = null);
                    const o = this._symbol,
                        h = this._resolution;
                    if (this._symbol = t, this._resolution = e,
                        null === this._instanceId) return void(this._timeFrame = s);
                    const l = !(0, i.deepEquals)(o, t)[0] || null !== this._resolvedSymbolName && this._resolvedSymbolName !== this._getSymbolNameString(t),
                        d = null === h || !a.Interval.isEqual(h, e);
                    (l || d || null !== s) && (this._timeFrame = null, (l || d) && this._turnaroundCounter++, l && this._resolveSymbol(), this._gateway.modifySeries(this._instanceId, this.turnaround(), (0, r.ensureNotNull)(this._symbolInstanceId), this._resolution, s, this._onMessage.bind(this)), this._dataEvents.fireModified())
                }
                requestMoreData(t) {
                    null !== this._instanceId && this._gateway.requestMoreData(this._instanceId, t, this._onMessage.bind(this))
                }
                requestMoreTickmarks(t) {
                    null !== this._instanceId && this._gateway.requestMoreTickmarks(this._instanceId, t, this._onMessage.bind(this))
                }
                isStarted() {
                    return this._status !== f.Idle
                }
                isActive() {
                    return this._status === f.Active
                }
                resolution() {
                    return this._resolution
                }
                start() {
                    this.isStarted() ? p.logNormal("start: data source is already started, nothing to do") : ((0, r.assert)(null !== this._symbol, "symbol must be set before start"), (0, r.assert)(null !== this._resolution, "resolution must be set before start"), this._gateway.isConnected().value() ? this._createSeries() : this._changeStatusTo(f.AwaitingConnection))
                }
                stop() {
                    this.isStarted() ? (null !== this._instanceId && (this._gateway.removeSeries(this._instanceId), this._instanceId = null), this._changeStatusTo(f.Idle)) : p.logNormal("stop: data source is already stopped, nothing to do")
                }
                instanceId() {
                    return this._instanceId
                }
                data() {
                    return this._data
                }
                clearData() {
                    this.isStarted() ? this._enqueueUpdate((() => this._clearDataImpl())) : this._clearDataImpl()
                }
                dataEvents() {
                    return this._dataEvents
                }
                turnaround() {
                    return `${this._turnaroundPrefix}${this._turnaroundCounter}`
                }
                symbolInstanceId() {
                    return this._symbolInstanceId
                }
                symbol() {
                    return this._symbol
                }
                moveData(t) {
                    this._enqueueUpdate((() => this._data.moveData(t)))
                }
                _resolveSymbol() {
                    null !== this._symbol && (this._symbolInstanceId = this._gateway.resolveSymbol("sds_sym_" + g++, (0, n.encodeExtendedSymbolOrGetSimpleSymbolString)(this._symbol), this._onMessage.bind(this)))
                }
                _clearDataImpl() {
                    this._data.clear()
                }
                _changeStatusTo(t) {
                    (0, r.assert)(this._status !== t, "Source and destination status should be distinct"), p.logNormal(`Status changed from ${f[this._status]} to ${f[t]}`), this._status = t
                }
                _createSeries() {
                    (0, r.assert)(this._status !== f.Active, 'Status should not be "Active" when creating a study'), this._instanceId = "sds_" + y++, this._resolveSymbol(), this._gateway.createSeries(this._instanceId, this.turnaround(), (0, r.ensureNotNull)(this._symbolInstanceId), (0, r.ensureNotNull)(this._resolution), this._createSeriesParams, this._timeFrame, this._onMessage.bind(this)), this._timeFrame = null, this._changeStatusTo(f.AwaitingFirstDataUpdate)
                }
                _onGatewayIsConnectedChanged(t) {
                    t ? this._onGatewayConnected() : this._onGatewayDisconnected()
                }
                _onGatewayConnected() {
                    this._status === f.AwaitingConnection && this._createSeries()
                }
                _onGatewayDisconnected() {
                    this._status !== f.Idle && this._status !== f.AwaitingConnection && (this._instanceId = null, this._changeStatusTo(f.AwaitingConnection)), this._turnaroundCounter = 1
                }
                _onMessage(t) {
                    this._enqueueUpdate((() => this._onMessageImpl(t)))
                }
                async _onMessageImpl(t) {
                    switch (t.method) {
                        case "symbol_resolved":
                            {
                                const [e, s] = t.params;
                                if (e !== this._symbolInstanceId) {
                                    p.logNormal(`Resolve for old symbol, expected: ${this._symbolInstanceId}, actual ${t.params[0]}`);
                                    break
                                }
                                this._onSymbolResolved(s);
                                break
                            }
                        case "symbol_error":
                            if (t.params[0] !== this._symbolInstanceId) {
                                p.logNormal(`Symbol error for old symbol, expected: ${this._symbolInstanceId}, actual ${t.params[0]}`);
                                break
                            }
                            this._onSymbolError(t);
                            break;
                        case "series_timeframe":
                            {
                                const [e, s, r, i, n, a, o] = t.params;
                                if (!this._checkTurnaround(e, s)) {
                                    p.logNormal(`Time frame for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e} (${s})`);
                                    break
                                }
                                this._onSeriesTimeFrame(r, i, n, a, o);
                                break
                            }
                        case "series_error":
                            {
                                const [e, s] = t.params;
                                if (!this._checkTurnaround(e, s)) {
                                    p.logNormal(`Series error for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e} (${s})`);
                                    break
                                }
                                this._onSeriesError(t.params[2]);
                                break
                            }
                        case "series_loading":
                            {
                                const [e, s] = t.params;
                                if (!this._checkTurnaround(e, s)) break;this._onSeriesLoading(t.time);
                                break
                            }
                        case "series_completed":
                            {
                                const [e, s, r, i] = t.params;
                                if (!this._checkTurnaround(e, r)) {
                                    p.logNormal(`Series completed for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e} (${r})`);
                                    break
                                }
                                this._onSeriesCompleted(s, t.time, i);
                                break
                            }
                        case "data_update":
                            if (!this._checkTurnaround(t.params.customId, t.params.turnaround)) {
                                p.logNormal(`Data update for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t.params.customId} (${t.params.turnaround})`);
                                break
                            }
                            await this._onDataUpdate(t.params.plots, t.params.nonseries, t.params.lastBar);
                            break;
                        case "clear_data":
                            if (t.params.turnaround !== this.turnaround()) {
                                p.logNormal(`Clear data for old data, expected: ${this.turnaround()}, actual ${t.params.turnaround}`);
                                break
                            }
                            this._clearDataImpl(), this._dataEvents.fireDataUpdated(void 0, !1, null)
                    }
                }
                _onSeriesError(t) {
                    let e, s;
                    if ("string" == typeof t) s = {
                        error: t
                    }, e = t;
                    else if (s = t, t.ctx) {
                        const s = {};
                        Object.entries(t.ctx).forEach((([t, e]) => {
                            s[t] = e.toString()
                        })), e = t.error.format(s)
                    } else e = t.error;
                    if (e.startsWith("study_not_auth:")) {
                        const t = e.split(":", 2)[1].split("@", 2)[0];
                        ["BarSetRenko", "BarSetPriceBreak", "BarSetKagi", "BarSetPnF"].includes(t) ? this._dataEvents.fireChartTypeNotPermitted(t) : "BarSetSpread" === t ? this._dataEvents.fireIntradaySpreadNotPermitted() : "BarSetRange" === t && this._dataEvents.fireCustomIntervalNotPermitted()
                    } else "resolution_not_entitled" === e ? this._dataEvents.fireIntradayExchangeNotPermitted() : "custom_resolution" === e ? this._dataEvents.fireCustomIntervalNotPermitted() : "seconds_not_entitled" === e && this._dataEvents.fireSecondsIntervalNotPermitted();
                    this._dataEvents.fireSeriesError(s)
                }
                _onSeriesTimeFrame(t, e, s, r, i) {
                    this._dataEvents.fireSeriesTimeFrame(t, e, s, null == r || r, i)
                }
                _onSymbolError(t) {
                    if (t.params[1] === l.permissionDenied) switch (t.params[2]) {
                        case l.SymbolErrorPermissionDeniedReason.Symbol:
                            this._dataEvents.fireSymbolNotPermitted(t.params[3]);
                            break;
                        case l.SymbolErrorPermissionDeniedReason.GroupPermission:
                            this._dataEvents.fireSymbolGroupNotPermitted(t.params[3]);
                            break;
                        default:
                            this._dataEvents.fireSymbolNotPermitted(t.params[2])
                    } else t.params[1] === l.invalidSymbol && this._dataEvents.fireSymbolInvalid();
                    this._dataEvents.fireSymbolError(t.params[1])
                }
                _onSymbolResolved(t) {
                    this._resolvedSymbolName = (0, m.symbolForApi)(t, this._getSymbolNameString((0, r.ensureNotNull)(this._symbol))), this._dataEvents.fireSymbolResolved(t)
                }
                _getSymbolNameString(t) {
                    return "string" == typeof t.symbol ? t.symbol : t.symbol.symbol
                }
                async _onDataUpdate(t, e, s) {
                    this._onDataUnpacked(t, s, await S(e))
                }
                _enqueueUpdate(t) {
                    return this._ongoingDataUpdate = this._ongoingDataUpdate.then(t, t), this._ongoingDataUpdate
                }
                _onDataUnpacked(t, e, s) {
                    if (this._status === f.Idle) return;
                    this._status === f.AwaitingFirstDataUpdate && (this._changeStatusTo(f.Active), this._clearDataImpl());
                    const r = this._data.bars().size(),
                        i = this._data.bars().firstIndex(),
                        n = this._data.mergeRegularBars(t);
                    null !== s && (this._data.nsBars().clear(), this._data.nsBars().merge(s.projectionPlots), this._data.lastProjectionPrice = s.lastPrice, null !== s.boxSize && (this._data.boxSize = s.boxSize), this._data.reversalAmount = s.reversalAmount);
                    const a = null === i || null !== n && n.index < i;
                    this._dataEvents.fireDataUpdated(e, a, n), r !== this._data.bars().size() && null !== n && this._dataEvents.fireBarReceived(n)
                }
                _onSeriesLoading(t) {
                    this._dataEvents.fireLoading(t)
                }
                _onSeriesCompleted(t, e, s) {
                    this._dataEvents.fireCompleted(t, e, s)
                }
                _checkTurnaround(t, e) {
                    return this._instanceId === t && (void 0 === e || e === this.turnaround())
                }
            }
            async function S(t) {
                if (void 0 === t) return {
                    projectionPlots: [],
                    boxSize: null
                };
                if ("" === t.d || "nochange" === t.indexes) return null;
                const e = await (0, h.unpackNonSeriesData)(t.d);
                if (null === e || e.indexes_replace) return null;
                const s = t.indexes,
                    {
                        bars: r,
                        price: i,
                        boxSize: n,
                        reversalAmount: a
                    } = e.data;
                return {
                    lastPrice: i,
                    projectionPlots: (r || []).map((t => {
                        let e;
                        return "factor" in t ? e = t.factor : "additionalPrice" in t && (e = t.additionalPrice), {
                            index: s[t.time],
                            value: [0, t.open, t.high, t.low, t.close, t.volume, e]
                        }
                    })),
                    reversalAmount: a,
                    boxSize: n
                }
            }
        },
        711806: (t, e, s) => {
            "use strict";
            s.d(e, {
                Session: () => d
            });
            var r = s(588537),
                i = s(262325),
                n = s.n(i),
                a = s(97639),
                o = s.n(a),
                h = s(95935);
            const l = (0, s(911905).getLogger)("ChartApi.AbstractSession");
            class d {
                constructor(t, e, s) {
                    this._isConnected = new(n())(!1), this._state = 0, this._isConnectForbidden = !1, this._sessionId = "", this._sessionIdChanged = new(o()), this._chartApi = t, this._sessionPrefix = e, this._shouldReconnectAfterCriticalError = s
                }
                destroy() {
                    this._logNormal("Destroying session"), this._isConnected.unsubscribe(), this.disconnect(), this._sessionIdChanged.destroy(), delete this._chartApi, this._logNormal("Session has been destroyed")
                }
                isConnected() {
                    return this._isConnected
                }
                sessionId() {
                    return this._sessionId
                }
                onSessionIdChanged() {
                    return this._sessionIdChanged
                }
                connect() {
                    0 === this._state && ((0, r.assert)(!this._isConnectForbidden, "Cannot call connect because it is forbidden at this moment"), this._setSessionId(`${this._sessionPrefix}_${(0,h.randomHash)()}`), this._logNormal("Connecting session - wait until transport stay connected"), this._state = 1,
                        this._chartApi.createSession(this._sessionId, this))
                }
                disconnect() {
                    0 !== this._state && ((0, r.assert)("" !== this._sessionId, "sessionId must not be invalid"), this._logNormal("Disconnecting session..."), this._forbidConnectWhile((() => {
                        this._chartApi.connected() && this._sendRemoveSession(), this._processDestroyingOnServer()
                    })))
                }
                onMessage(t) {
                    switch (t.method) {
                        case "connected":
                            return void this._onChartApiConnected();
                        case "disconnected":
                            return void this._onChartApiDisconnected();
                        case "critical_error":
                            const e = String(t.params[0]),
                                s = String(t.params[1]);
                            return void this._onCriticalError(e, s)
                    }
                    this._onMessage(t)
                }
                _getChartApi() {
                    return this._chartApi
                }
                _generateLogMessage(t) {
                    return `[${this._sessionId}] ${t}`
                }
                _onCriticalError(t, e) {
                    this._logError(`Critical error. Reason=${t}, info=${e}.`), this._forbidConnectWhile((() => {
                        this._processDestroyingOnServer()
                    })), this._shouldReconnectAfterCriticalError ? (this._logNormal("Reconnecting after critical error..."), this.connect()) : this._logNormal("Reconnecting after critical error skipped")
                }
                _onChartApiConnected() {
                    (0, r.assert)(1 === this._state, "Session is not registered"), this._logNormal("Transport is connected. Creating session on the server"), this._sendCreateSession(), this._state = 2, this._isConnected.setValue(!0)
                }
                _onChartApiDisconnected() {
                    this._logNormal("Transport is disconnected. Reconnecting..."), this._forbidConnectWhile((() => {
                        this._processDestroyingOnServer()
                    })), this.connect()
                }
                _setSessionId(t) {
                    const e = this._sessionId;
                    this._logNormal(`Changing sessionId: old=${e}, new=${t}`), this._sessionId = t, this._sessionIdChanged.fire(t, e)
                }
                _logNormal(t) {
                    l.logNormal(this._generateLogMessage(t))
                }
                _logError(t) {
                    l.logError(this._generateLogMessage(t))
                }
                _processDestroyingOnServer() {
                    this._state = 0, this._isConnected.setValue(!1), this._chartApi.removeSession(this._sessionId), this._setSessionId("")
                }
                _forbidConnectWhile(t) {
                    this._isConnectForbidden = !0, t(), this._isConnectForbidden = !1
                }
            }
        },
        183939: (t, e, s) => {
            "use strict";
            var r;
            s.d(e, {
                    StudyStatusType: () => r
                }),
                function(t) {
                    t[t.Undefined = 0] = "Undefined", t[t.Loading = 1] = "Loading", t[t.Completed = 2] = "Completed", t[t.Error = 3] = "Error"
                }(r || (r = {}))
        },
        476543: (t, e, s) => {
            "use strict";
            s.d(e, {
                makeNextSymbolId: () => i,
                makeNextStudyId: () => a
            });
            let r = 0;

            function i() {
                return r++, "ss_" + r
            }
            let n = 0;

            function a() {
                return n++, "st" + n
            }
        },
        676745: (t, e, s) => {
            "use strict";
            s.d(e, {
                INVALID_TIME_POINT_INDEX: () => r,
                UNPLOTTABLE_TIME_POINT_INDEX: () => i
            });
            const r = -2e6,
                i = -1e6
        },
        932255: (t, e, s) => {
            "use strict";
            s.d(e, {
                timeHoursFormatProperty: () => o,
                restoreTimeHoursFormatSettingsValue: () => h
            });
            var r = s(62802),
                i = s(860949);
            const n = "time_hours_format";

            function a() {
                return r.getValue(n, "24-hours")
            }
            const o = (0, i.createPrimitiveProperty)(a());

            function h() {
                o.setValue("24-hours"), r.remove(n)
            }
            r.onSync.subscribe(null, (() => o.setValue(a()))), o.subscribe(null, (() => r.setValue(n, o.value())))
        },
        535818: (t, e, s) => {
            "use strict";
            s.d(e, {
                getHourMinuteFormat: () => n,
                getHourMinuteSecondFormat: () => a,
                getTimeFormatForInterval: () => o
            });
            var r = s(820187),
                i = s(932255);

            function n() {
                return "12-hours" === i.timeHoursFormatProperty.value() ? r.twelveHourMinuteFormat : r.hourMinuteFormat
            }

            function a() {
                return "12-hours" === i.timeHoursFormatProperty.value() ? r.twelveHourMinuteSecondFormat : r.hourMinuteSecondFormat
            }

            function o(t) {
                return t.isSeconds() || t.isTicks() ? a() : n()
            }
        },
        721386: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                generateColor: () => i,
                applyAlpha: () => n,
                alphaToTransparency: () => a,
                transparencyToAlpha: () => o,
                applyTransparency: () => h,
                resetTransparency: () => l,
                getLuminance: () => d,
                isHexColor: () => u,
                colorFromBackground: () => c,
                gradientColorAtPercent: () => _,
                isColorDark: () => m,
                rgbaFromInteger: () => p,
                rgbaToInteger: () => f,
                colorToInteger: () => g
            });
            var r = s(724377);

            function i(t, e, s) {
                if (e = e || 0, !u(t)) return s ? (0, r.rgbaToString)((0, r.rgba)((0, r.parseRgb)(t), (0, r.normalizeAlphaComponent)(o(e)))) : t;
                const [i, n, a] = (0, r.parseRgb)(t), h = (0, r.normalizeAlphaComponent)(o(e));
                return (0, r.rgbaToString)([i, n, a, h])
            }

            function n(t, e) {
                return i(t, a(e))
            }

            function a(t) {
                return 100 * (1 - t)
            }

            function o(t) {
                if (t < 0 || t > 100) throw new Error("invalid transparency");
                return 1 - t / 100
            }

            function h(t, e) {
                if ("transparent" === t) return t;
                const s = (0, r.parseRgba)(t),
                    i = s[3];
                return (0, r.rgbaToString)((0, r.rgba)(s[0], s[1], s[2], o(e) * i))
            }

            function l(t) {
                return "transparent" === t || u(t) ? t : (0, r.rgbaToString)((0, r.rgba)((0, r.parseRgb)(t), (0, r.normalizeAlphaComponent)(1)))
            }

            function d(t) {
                const e = (0, r.parseRgb)(t).map((t => (t /= 255) <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)));
                return Number((.2126 * e[0] + .7152 * e[1] + .0722 * e[2]).toFixed(3))
            }

            function u(t) {
                return 0 === t.indexOf("#")
            }

            function c(t) {
                return "black" === (0, r.rgbToBlackWhiteString)((0, r.parseRgb)(t), 150) ? "#ffffff" : "#000000"
            }

            function _(t, e, s) {
                const [i, n, a, o] = (0, r.parseRgba)(t), [h, l, d, u] = (0, r.parseRgba)(e), c = (0, r.rgba)(Math.round(i + s * (h - i)), Math.round(n + s * (l - n)), Math.round(a + s * (d - a)), o + s * (u - o));
                return (0, r.rgbaToString)(c)
            }

            function m(t) {
                return d(l(t)) < .5
            }

            function p(t) {
                const e = (t = Math.round(t)) % 256;
                t -= e;
                const s = (t /= 256) % 256;
                t -= s;
                const r = (t /= 256) % 256;
                t -= r;
                return `rgba(${e},${s},${r},${(t/=256)/255})`
            }

            function f(t) {
                const e = Math.round(255 * t[3]);
                return t[0] + 256 * t[1] + 65536 * t[2] + 16777216 * e
            }

            function g(t) {
                const e = (0, r.tryParseRgba)(t);
                return null === e ? 0 : f(e)
            }
        }
    }
]);