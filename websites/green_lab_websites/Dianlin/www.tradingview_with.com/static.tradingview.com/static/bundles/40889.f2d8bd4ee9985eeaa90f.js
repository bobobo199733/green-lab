(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [40889], {
        6898: e => {
            e.exports = {
                floatingTooltipContainer: "floatingTooltipContainer-ddEQt9il",
                floatingTooltipContainer_show: "floatingTooltipContainer_show-ddEQt9il",
                floatingTooltip: "floatingTooltip-ddEQt9il",
                floatingTooltip_style_line: "floatingTooltip_style_line-ddEQt9il",
                floatingTooltip_align_left: "floatingTooltip_align_left-ddEQt9il",
                priceAndVolume: "priceAndVolume-ddEQt9il",
                priceAndVolume__price: "priceAndVolume__price-ddEQt9il",
                priceAndVolume__volume: "priceAndVolume__volume-ddEQt9il",
                ohlc: "ohlc-ddEQt9il",
                ohlc__row: "ohlc__row-ddEQt9il",
                ohlc__column: "ohlc__column-ddEQt9il",
                ohlc__column_volume: "ohlc__column_volume-ddEQt9il",
                ohlc__legends: "ohlc__legends-ddEQt9il",
                time: "time-ddEQt9il"
            }
        },
        247443: e => {
            e.exports = {
                fade: "fade-w6JzqKCn"
            }
        },
        667704: (e, t, i) => {
            "use strict";
            i.d(t, {
                FloatingPriceTimeTooltipRenderer: () => S
            });
            var s = i(559496),
                o = i(587995),
                r = i(497754),
                a = i.n(r),
                n = i(575932),
                l = i(6898);
            const h = (0, n.t)("O", {
                    context: "in_legend"
                }),
                c = (0, n.t)("H", {
                    context: "in_legend"
                }),
                u = (0, n.t)("L", {
                    context: "in_legend"
                }),
                d = (0, n.t)("C", {
                    context: "in_legend"
                }),
                _ = (0, n.t)("Vol", {
                    context: "in_legend"
                }),
                m = [h, c, u, d];

            function p(e) {
                const {
                    time: t,
                    children: i,
                    style: o,
                    className: r
                } = e;
                return s.createElement("div", {
                    className: a()(l.floatingTooltip, "line" === o && l.floatingTooltip_style_line, r)
                }, s.createElement("div", null, i), s.createElement("div", {
                    className: l.time
                }, t))
            }

            function b(e) {
                const {
                    price: t,
                    volume: i,
                    time: o,
                    style: r
                } = e;
                return s.createElement(p, {
                    time: o,
                    style: r
                }, s.createElement("div", {
                    className: l.priceAndVolume
                }, s.createElement("div", {
                    className: l.priceAndVolume__price
                }, t), i && s.createElement("div", {
                    className: l.priceAndVolume__volume
                }, `${_} ${i}`)))
            }

            function v(e) {
                const {
                    prices: t,
                    volume: i,
                    time: o,
                    style: r
                } = e;
                return s.createElement(p, {
                    time: o,
                    className: l.floatingTooltip_align_left,
                    style: r
                }, s.createElement("div", {
                    className: l.ohlc
                }, s.createElement(s.Fragment, null, t.map(((e, t) => s.createElement(g, {
                    key: m[t],
                    legend: m[t],
                    price: e
                }))), i && s.createElement(g, {
                    legend: _,
                    price: i,
                    className: l.ohlc__column_volume
                }))))
            }

            function g(e) {
                const {
                    legend: t,
                    price: i,
                    className: o
                } = e;
                return s.createElement("div", {
                    className: l.ohlc__row
                }, s.createElement("div", {
                    className: a()(l.ohlc__column, l.ohlc__legends)
                }, t), s.createElement("div", {
                    className: a()(l.ohlc__column, o)
                }, i))
            }

            function y(e) {
                switch (e.type) {
                    case "ohlc":
                        {
                            const {
                                type: t,
                                ...i
                            } = e;
                            return s.createElement(v, { ...i
                            })
                        }
                    case "line":
                        {
                            const {
                                type: t,
                                ...i
                            } = e;
                            return s.createElement(b, { ...i
                            })
                        }
                    default:
                        return s.createElement("div", null)
                }
            }
            class S {
                constructor(e = document.body, t, i, s) {
                    this._cursorPosition = null, this._updatePosition = () => {
                        var e, t, i, s, o;
                        const {
                            width: r,
                            height: a
                        } = this._tooltipContainer.getBoundingClientRect(), {
                            width: n,
                            height: l,
                            left: h,
                            top: c
                        } = this._container.getBoundingClientRect();
                        let {
                            x: u,
                            y: d
                        } = null !== (t = null === (e = this._cursorPosition) || void 0 === e ? void 0 : e.cursorPosition) && void 0 !== t ? t : {
                            x: 0,
                            y: 0
                        };
                        if (null !== this._cursorPosition && void 0 !== this._coordinateSourceContainer) {
                            const {
                                left: e,
                                top: t
                            } = this._coordinateSourceContainer.getBoundingClientRect();
                            u += e - h, d += t - c
                        }
                        const _ = Math.max(0, Math.min(n - r, u - r / 2)),
                            m = null !== (s = null === (i = this._cursorPosition) || void 0 === i ? void 0 : i.yMargin) && void 0 !== s ? s : 12;
                        let p;
                        1 === (null === (o = this._cursorPosition) || void 0 === o ? void 0 : o.verticalAlign) ? (p = d + m, p > l && (p = d - (a + m))) : (p = d - (a + m), p < 0 && (p = d + m)), this._tooltipContainer.style.left = _ + "px", this._tooltipContainer.style.top = p + "px"
                    }, this._container = e, this._style = i;
                    const o = document.createElement("div");
                    o.classList.add(l.floatingTooltipContainer), void 0 !== s && o.classList.add(s), this._tooltipContainer = o, this._coordinateSourceContainer = t, this._container.appendChild(o)
                }
                destroy() {
                    o.unmountComponentAtNode(this._tooltipContainer), this._tooltipContainer.remove()
                }
                hide() {
                    this._tooltipContainer.classList.remove(l.floatingTooltipContainer_show)
                }
                show() {
                    this._tooltipContainer.classList.add(l.floatingTooltipContainer_show)
                }
                update(e) {
                    if (e) {
                        const {
                            cursorPosition: t,
                            yMargin: i,
                            verticalAlign: s
                        } = e;
                        this._cursorPosition = {
                            cursorPosition: t,
                            yMargin: i,
                            verticalAlign: s
                        }, this._updateMultilineParams(e), this.show()
                    } else this._cursorPosition = null, this.hide()
                }
                _updateMultilineParams(e) {
                    const {
                        time: t,
                        prices: i,
                        volume: s,
                        priceColor: o = "initial",
                        volumeColor: r = "initial"
                    } = e;
                    this._tooltipContainer.style.setProperty("--priceColor", o), this._tooltipContainer.style.setProperty("--volumeColor", r), Array.isArray(i) ? this._render({
                        type: "ohlc",
                        prices: i,
                        volume: s,
                        time: t,
                        style: this._style
                    }) : this._render({
                        type: "line",
                        price: i,
                        volume: s,
                        time: t,
                        style: this._style
                    })
                }
                _render(e) {
                    o.render(s.createElement(y, e), this._tooltipContainer, this._updatePosition)
                }
            }
        },
        340889: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LightweightMiniChart: () => te
            });
            var s = i(311857),
                o = i(897304),
                r = i(588537),
                a = i(679520),
                n = i(575932),
                l = i(977809),
                h = i(911905),
                c = i(328289),
                u = i(458691),
                d = i(273044),
                _ = i(721386),
                m = i(941285),
                p = i(667704),
                b = i(504122),
                v = i(591419),
                g = i(715303),
                y = i(535818),
                S = i(180372),
                f = i(800417),
                C = i(270617),
                D = i(262325),
                w = i.n(D),
                P = i(97639),
                T = i.n(P);
            const E = (0, h.getLogger)("Chart.MiniChart");

            function M(e, t, i) {
                return {
                    time: e,
                    color: i,
                    value: t[4]
                }
            }

            function O(e, t) {
                return {
                    time: e,
                    open: t[1],
                    high: t[2],
                    low: t[3],
                    close: t[4]
                }
            }

            function V(e) {
                return (0, C.isInteger)(e)
            }
            class x {
                constructor(e, t, i) {
                    this._symbolChanged = new(T()), this._series = null, this._volume = null, this._symbolResolved = new(T()), this._seriesDataLength = 0, this._originalScaleMode = null, this._isDestroyed = new(w())(!1), this._symbol = "", this._status = new(w())(0), this._noData = new(w())(null), this._symbolInfo = null, this._availableResolutions = [], this._miniChart = e, this._originalSeriesOptions = t, this._currentSeriesOptions = (0, o.default)({}, t), this._originalVolumeOptions = i
                }
                destroy() {
                    this._status.unsubscribe(), this._isDestroyed.setValue(!0)
                }
                status() {
                    return this._status.readonly()
                }
                noData() {
                    return this._noData.readonly()
                }
                symbolInfo() {
                    return this._symbolInfo
                }
                availableResolutions() {
                    return this._availableResolutions
                }
                symbol() {
                    return this._symbol
                }
                setSymbol(e, t) {
                    void 0 !== t && this._updateSeriesOptions(t), this._symbol !== e && (this._symbol = e, this._symbolChanged.fire())
                }
                changeChartType(e, t) {
                    this._updateSeriesOptions(t), this.deleteView(), 3 === this._status.value() && this.updateData(!1, !0)
                }
                symbolResolved() {
                    return this._symbolResolved
                }
                symbolChanged() {
                    return this._symbolChanged
                }
                restoreOriginalScaleMode() {
                    null !== this._originalScaleMode && null !== this._series && this._series.priceScale().applyOptions({
                        mode: this._originalScaleMode
                    })
                }
                chartSession() {
                    return this._miniChart.chartSession()
                }
                currentSeriesOptions() {
                    return this._currentSeriesOptions
                }
                series() {
                    return this._series
                }
                volume() {
                    return this._volume
                }
                updateData(e, t) {
                    var i;
                    const o = this._miniChart;
                    e && this.clearSourceData();
                    const r = this._originalSeriesOptions;
                    let a;
                    switch (r.chartType) {
                        case "line":
                        case "area":
                            a = this._getViewData(M);
                            break;
                        case "bars":
                        case "candlesticks":
                            a = this._getViewData(O)
                    }
                    const n = a.series.length;
                    if (n) {
                        if ("area" === r.chartType) {
                            const e = this._currentSeriesOptions,
                                t = a.series;
                            t[(0, f.default)(t, (e => "value" in e))].value > t[0].value ? (e.lineColor = r.growingLineColor || r.lineColor, e.topColor = r.growingTopColor || r.topColor, e.bottomColor = r.growingBottomColor || r.bottomColor) : (e.lineColor = r.fallingLineColor || r.lineColor, e.topColor = r.fallingTopColor || r.topColor, e.bottomColor = r.fallingBottomColor || r.bottomColor)
                        } else if ("line" === r.chartType) {
                            const {
                                color: e,
                                growingColor: t = e,
                                fallingColor: i = e
                            } = r, s = this._currentSeriesOptions, o = a.series;
                            o[(0, f.default)(o, (e => "value" in e))].value >= o[0].value ? s.color = t : s.color = i
                        }
                        if (this._series) this._series.applyOptions(this._currentSeriesOptions);
                        else {
                            switch (this._currentSeriesOptions.chartType) {
                                case "line":
                                    this._series = o.widget().addLineSeries(this._currentSeriesOptions);
                                    break;
                                case "area":
                                    this._series = o.widget().addAreaSeries(this._currentSeriesOptions);
                                    break;
                                case "bars":
                                    this._series = o.widget().addBarSeries(this._currentSeriesOptions);
                                    break;
                                case "candlesticks":
                                    this._series = o.widget().addCandlestickSeries(this._currentSeriesOptions)
                            }
                            null === this._originalScaleMode && (this._originalScaleMode = this._series.priceScale().options().mode), this._miniChart.hasAdditionalPlots() && this._series.priceScale().applyOptions({
                                mode: s.PriceScaleMode.Percentage
                            }), this._series.priceScale().applyOptions({
                                scaleMargins: this._currentSeriesOptions.scaleMargins
                            })
                        }
                        null === this._volume && this._originalVolumeOptions.visible && (this._volume = o.widget().addHistogramSeries(this._originalVolumeOptions), this._volume.priceScale().applyOptions({
                            scaleMargins: this._originalVolumeOptions.scaleMargins
                        })), this._applyPriceScaleFormatter(), t || this._beforeDataReady(), this._seriesDataLength = n, this._series.setData(a.series), null === (i = this._volume) || void 0 === i || i.setData(a.volume), this._isMainPlot() && this._miniChart.resizeByContainer()
                    }
                }
                updateSeriesOptions(e) {
                    var t;
                    this._originalSeriesOptions = e, this._currentSeriesOptions = (0, o.default)({}, e), null === (t = this._series) || void 0 === t || t.applyOptions(e)
                }
                fitContent() {
                    const e = this._seriesDataLength;
                    if (0 === e) return;
                    const t = this._miniChart.widget(),
                        i = 4 / ((t.options().width - t.priceScale("left").width() - t.priceScale("right").width()) / (e + 1));
                    t.timeScale().setVisibleLogicalRange({
                        from: .5 - i,
                        to: e - .5 + i
                    })
                }
                deleteView() {
                    this._series && (this._miniChart.widget().removeSeries(this._series), this._series = null), this._volume && (this._miniChart.widget().removeSeries(this._volume), this._volume = null)
                }
                clearData() {
                    this._symbolInfo = null, this._seriesDataLength = 0, this._status.setValue(0), this._noData.setValue(null)
                }
                resolution() {
                    return this._miniChart.resolution()
                }
                _isMainPlot() {
                    return !1
                }
                _beforeDataReady() {}
                _onSymbolResolved(e) {
                    this._symbolInfo = e, this._availableResolutions = [], "spread" === e.type && (this._availableResolutions = ["D", "W", "M"]), this._symbolResolved.fire(this._symbolInfo)
                }
                _getViewData(e) {
                    const t = {
                        series: [],
                        volume: []
                    };
                    let i = -1 / 0;
                    const s = this._bars();
                    if (s.isEmpty()) return t;
                    const o = (0, r.ensureNotNull)(this.minBarIndex()),
                        a = (0, r.ensureNotNull)(this.maxBarIndex()),
                        n = V(o) ? o : s.firstIndex(),
                        l = V(a) ? a : s.lastIndex();
                    return null === n || null === l || s.range(n, l).each(((s, o) => {
                        const r = function(e) {
                            const t = new Date(e);
                            return Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()) / 1e3
                        }(1e3 * o[0]);
                        if (r <= i) return !1;
                        i = r, t.series.push(e(r, o));
                        const a = o[4] >= o[1] ? this._originalVolumeOptions.upColor : this._originalVolumeOptions.downColor;
                        return t.volume.push({
                            time: r,
                            value: o[5],
                            color: a
                        }), !1
                    })), t
                }
                _onSymbolError(e) {
                    E.logWarn(this._symbol + " symbol resolving error: " + e), this.updateData(!0), this._status.setValue(1)
                }
                _onSymbolNotPermitted() {
                    this._noData.setValue(1)
                }
                _onSymbolGroupNotPermitted() {
                    this._noData.setValue(1)
                }
                _onSymbolInvalid() {
                    this._noData.setValue(0)
                }
                _onResolutionOrExchangeNotPermittedError() {
                    E.logError(this._symbol + " resolution or exchange permission error"), this.updateData(!0), this._isMainPlot() && this._miniChart.showMessage((0, n.t)("No data for this resolution")), this._availableResolutions = ["D", "W", "M"], setTimeout((() => this._miniChart.updateAvailableTimeframes()), 1e3)
                }
                _onDataError() {
                    1 !== this._status.value() && this._status.setValue(2), this._noData.setValue(3)
                }
                _onDataCompleted() {
                    this._status.setValue(3), this._noData.setValue(0 === this._bars().size() ? 2 : null), 2 === this._noData.value() && this._isMainPlot() && this._miniChart.showMessage((0, n.t)("No data for this conditions"))
                }
                _onData() {
                    null !== this.minBarIndex() && null !== this.maxBarIndex() && this.updateData(!1)
                }
                _applyPriceScaleFormatter() {
                    const e = (0, r.ensureNotNull)(this._symbolInfo);
                    if ("volume" === e.format) this._currentSeriesOptions.priceFormat = {
                        type: "volume",
                        precision: 2,
                        minMove: e.minmov / e.pricescale
                    };
                    else {
                        let t = e.pricescale,
                            i = 0;
                        for (; t > 1;) t /= 10, i += 1;
                        this._currentSeriesOptions.priceFormat = {
                            type: "price",
                            precision: i,
                            minMove: e.minmov / e.pricescale
                        }
                    }
                    this._series && this._series.applyOptions(this._currentSeriesOptions)
                }
                _updateSeriesOptions(e) {
                    this._originalSeriesOptions = e, this._currentSeriesOptions = (0, o.default)({}, e)
                }
            }
            class N extends x {
                constructor(e, t, i, s) {
                    super(e, t, i), this._seriesDataSource = null, this._minBarIndex = null, this._maxBarIndex = null, this._additionalPlots = s
                }
                requestData() {
                    const e = this._getSeriesDataSource();
                    e.modifySeries({
                        symbol: this.symbol()
                    }, this.resolution(), this._miniChart.timeframe()), e.isStarted() || e.start()
                }
                clearSourceData() {
                    var e;
                    null === (e = this._seriesDataSource) || void 0 === e || e.clearData(), this._additionalPlots().forEach((e => e.clearSourceData()))
                }
                disconnect() {
                    null !== this._seriesDataSource && this._seriesDataSource.stop()
                }
                clearData() {
                    super.clearData(),
                        this._minBarIndex = null, this._maxBarIndex = null, null !== this._seriesDataSource && (this._seriesDataSource.stop(), this.clearSourceData())
                }
                seriesDataSource() {
                    return this._getSeriesDataSource()
                }
                firstBar() {
                    return V(this._minBarIndex) ? this._bars().search(this._minBarIndex) : this._bars().first()
                }
                lastBar() {
                    return V(this._maxBarIndex) ? this._bars().search(this._maxBarIndex) : this._bars().last()
                }
                minBarIndex() {
                    return this._minBarIndex
                }
                maxBarIndex() {
                    return this._maxBarIndex
                }
                _isMainPlot() {
                    return !0
                }
                _beforeDataReady() {
                    this._additionalPlots().forEach((e => e.deleteView()))
                }
                _subscribeToSeriesDataSourceEvents(e) {
                    const t = e.dataEvents();
                    t.symbolResolved().subscribe(this, this._onSymbolResolved), t.symbolNotPermitted().subscribe(this, this._onSymbolNotPermitted), t.symbolGroupNotPermitted().subscribe(this, this._onSymbolGroupNotPermitted), t.symbolInvalid().subscribe(this, this._onSymbolInvalid), t.symbolError().subscribe(this, this._onSymbolError), t.intradayExchangeNotPermitted().subscribe(this, this._onResolutionOrExchangeNotPermittedError), t.customIntervalNotPermitted().subscribe(this, this._onResolutionOrExchangeNotPermittedError), t.completed().subscribe(this, this._onDataCompleted), t.seriesError().subscribe(this, this._onDataError), t.seriesTimeFrame().subscribe(this, this._onTimeFrame), t.dataUpdated().subscribe(this, this._onData)
                }
                _unsubscribeFromSeriesDataSourceEvents(e) {
                    const t = e.dataEvents();
                    t.symbolResolved().unsubscribe(this, this._onSymbolResolved), t.symbolNotPermitted().unsubscribe(this, this._onSymbolNotPermitted), t.symbolGroupNotPermitted().unsubscribe(this, this._onSymbolGroupNotPermitted), t.symbolInvalid().unsubscribe(this, this._onSymbolInvalid), t.symbolError().unsubscribe(this, this._onSymbolError), t.intradayExchangeNotPermitted().unsubscribe(this, this._onResolutionOrExchangeNotPermittedError), t.customIntervalNotPermitted().unsubscribe(this, this._onResolutionOrExchangeNotPermittedError), t.completed().unsubscribe(this, this._onDataCompleted), t.seriesError().unsubscribe(this, this._onDataError), t.seriesTimeFrame().unsubscribe(this, this._onTimeFrame), t.dataUpdated().unsubscribe(this, this._onData)
                }
                _getSeriesDataSource() {
                    return null === this._seriesDataSource && (this._seriesDataSource = new S.SeriesDataSource(this.chartSession(), "s"), this._subscribeToSeriesDataSourceEvents(this._seriesDataSource)), this._seriesDataSource
                }
                _bars() {
                    return this._getSeriesDataSource().data().bars()
                }
                _onTimeFrame(e, t) {
                    this._minBarIndex = e, this._maxBarIndex = t, this.updateData(!1)
                }
            }
            var I = i(908803),
                R = i(752280),
                L = i(476543),
                F = i(183939);
            const k = {
                    plots: [{
                        id: "open",
                        type: "line"
                    }, {
                        id: "high",
                        type: "line"
                    }, {
                        id: "low",
                        type: "line"
                    }, {
                        id: "close",
                        type: "line"
                    }],
                    fullId: "Overlay@tv-basicstudies-164",
                    packageId: "tv-basicstudies",
                    graphics: {}
                },
                B = new R.PlotList;
            class A extends x {
                constructor(e, t, i) {
                    super(e, t, i), this._studyDataSource = null, this._requestActive = !1, this._createStudyDataSource()
                }
                requestData() {
                    if (this._requestActive = !0, null === this._studyDataSource) return;
                    const e = this.symbolInfo();
                    null !== e ? (this._studyDataSource.setInputs({
                            symbol: e.full_name
                        }),
                        this._studyDataSource.isStarted() || this._studyDataSource.start()) : this.chartSession().resolveSymbol((0, L.makeNextSymbolId)(), this.symbol(), this._onSymbolMessage.bind(this))
                }
                clearSourceData() {
                    var e;
                    null === (e = this._studyDataSource) || void 0 === e || e.clearData()
                }
                disconnect() {
                    this._requestActive = !1, null !== this._studyDataSource && this._studyDataSource.stop()
                }
                clearData() {
                    this._requestActive = !1, super.clearData(), null !== this._studyDataSource && (this._studyDataSource.stop(), this.clearSourceData())
                }
                minBarIndex() {
                    return this._miniChart.mainPlot().minBarIndex()
                }
                maxBarIndex() {
                    return this._miniChart.mainPlot().maxBarIndex()
                }
                _subscribeToStudyDataSourceEvents(e) {
                    e.studyStatusChanged().subscribe(this, this._onStudyStatusChanged), e.dataUpdated().subscribe(this, this._onData)
                }
                _unsubscribeFromSeriesDataSourceEvents(e) {
                    e.studyStatusChanged().unsubscribe(this, this._onStudyStatusChanged), e.dataUpdated().unsubscribe(this, this._onData)
                }
                async _createStudyDataSource() {
                    const e = await Promise.all([i.e(64679), i.e(3657)]).then(i.bind(i, 12270));
                    this._isDestroyed.value() || (this._studyDataSource = new e.StudyDataSource(this.chartSession(), this._miniChart.seriesDataSource(), "st", k), this._subscribeToStudyDataSourceEvents(this._studyDataSource), this._requestActive && this.requestData())
                }
                _bars() {
                    var e, t;
                    return null !== (t = null === (e = this._studyDataSource) || void 0 === e ? void 0 : e.plots()) && void 0 !== t ? t : B
                }
                _onStudyStatusChanged(e, t) {
                    t.type === F.StudyStatusType.Completed && (0, r.ensureNotNull)(this._studyDataSource).pendingUpdatesReady().then((() => this._onDataCompleted())), t.type === F.StudyStatusType.Error && this._onDataError()
                }
                _onSymbolMessage(e) {
                    if (!this._isDestroyed.value()) switch (e.method) {
                        case "symbol_resolved":
                            const t = e.params[1];
                            this._onSymbolResolved(t), this._requestActive && this.requestData();
                            break;
                        case "symbol_error":
                            this._onSymbolErrorMessage(e)
                    }
                }
                _onSymbolErrorMessage(e) {
                    if (e.params[1] === I.permissionDenied) switch (e.params[2]) {
                        case I.SymbolErrorPermissionDeniedReason.Symbol:
                            this._onSymbolNotPermitted();
                            break;
                        case I.SymbolErrorPermissionDeniedReason.GroupPermission:
                            this._onSymbolGroupNotPermitted();
                            break;
                        default:
                            this._onSymbolNotPermitted()
                    } else e.params[1] === I.invalidSymbol && this._onSymbolInvalid();
                    this._onSymbolError(e.params[1])
                }
            }
            var q = i(247443);
            const U = (0, h.getLogger)("Chart.MiniChart"),
                z = new v.VolumeFormatter,
                Q = {
                    value: "12M",
                    type: "period-back"
                },
                W = {
                    top: .01,
                    bottom: .01
                },
                G = {
                    chartType: "area",
                    topColor: (0, _.generateColor)(a.colorsPalette["color-tv-blue-500"], 70),
                    bottomColor: (0, _.generateColor)(a.colorsPalette["color-tv-blue-500"], 100),
                    lineColor: a.colorsPalette["color-tv-blue-500"],
                    lineWidth: 2,
                    priceLineVisible: !1,
                    crosshairMarkerVisible: !1,
                    lastValueVisible: !1,
                    scaleMargins: W
                },
                H = {
                    lineWidth: 2,
                    priceLineVisible: !1,
                    crosshairMarkerVisible: !1,
                    lastValueVisible: !1,
                    scaleMargins: W
                },
                $ = {
                    priceLineVisible: !1,
                    lastValueVisible: !1,
                    scaleMargins: W
                },
                j = {
                    priceLineVisible: !1,
                    lastValueVisible: !1,
                    scaleMargins: W
                },
                J = {
                    scaleMargins: {
                        top: .8,
                        bottom: 0
                    },
                    priceScaleId: "overlay",
                    upColor: (0, _.applyTransparency)(a.colorsPalette["color-minty-green-400"], 50),
                    downColor: (0, _.applyTransparency)("#ef5350", 50),
                    visible: !1,
                    lastValueVisible: !1,
                    priceLineVisible: !1
                },
                K = {
                    spinner: {
                        visible: !1,
                        width: 4,
                        color: a.colorsPalette["color-brand"]
                    },
                    fade: {
                        visible: !1
                    },
                    clearDataOnSymbolChange: !0,
                    clearDataOnTimeframeChange: !0
                },
                Y = {
                    onFirstData: null,
                    description: "",
                    showDescription: !0,
                    valuesTracking: "0",
                    timeframe: {
                        visible: !1,
                        value: Q.value,
                        options: new Set(["1D", "1M", "3M", "12M", "60M", "ALL"])
                    },
                    chartOptions: {
                        minWidth: 0,
                        minHeight: 0,
                        chart: {
                            grid: {
                                horzLines: {
                                    color: "rgba(120, 123, 134, 0.1)",
                                    visible: !1
                                },
                                vertLines: {
                                    color: "#ffffff",
                                    visible: !1
                                }
                            },
                            crosshair: {
                                horzLine: {
                                    visible: !1,
                                    style: 3,
                                    width: 1,
                                    labelVisible: !1
                                },
                                vertLine: {
                                    visible: !1,
                                    style: 3,
                                    width: 1,
                                    labelVisible: !1
                                }
                            },
                            layout: {
                                fontFamily: "Trebuchet MS",
                                fontSize: 10,
                                textColor: "#83888D",
                                background: {
                                    type: s.ColorType.Solid,
                                    color: "transparent"
                                }
                            },
                            watermark: {
                                visible: !1,
                                color: "#83888D",
                                fontSize: 12
                            },
                            rightPriceScale: {
                                visible: !0,
                                borderVisible: !1,
                                entireTextOnly: !0,
                                mode: s.PriceScaleMode.Normal
                            },
                            leftPriceScale: {
                                visible: !1,
                                borderVisible: !1,
                                entireTextOnly: !0,
                                mode: s.PriceScaleMode.Normal
                            },
                            timeScale: {
                                borderVisible: !1,
                                timeVisible: !0,
                                secondsVisible: !1,
                                lockVisibleTimeRangeOnResize: !0
                            },
                            handleScale: !1,
                            handleScroll: !1
                        },
                        series: G,
                        volume: J,
                        loading: K
                    }
                },
                X = {
                    "1y": {
                        value: "12M",
                        type: "period-back"
                    },
                    "5y": {
                        value: "60M",
                        type: "period-back"
                    },
                    max: {
                        value: "ALL",
                        type: "period-back"
                    }
                };

            function Z(e) {
                var t;
                let i;
                switch (null !== (t = e.chartType) && void 0 !== t ? t : "area") {
                    case "bars":
                        i = $;
                        break;
                    case "candlesticks":
                        i = j;
                        break;
                    case "area":
                        i = G;
                        break;
                    case "line":
                        i = H
                }
                return (0, o.default)({}, i, e)
            }

            function ee(e, t) {
                const i = e ? (0, r.ensureNotNull)(t).up : (0, r.ensureNotNull)(t).down;
                return (0, _.resetTransparency)(i)
            }
            class te {
                constructor(e, t, i, r, a = u.miniTimeFrameOptions) {
                    var n;
                    this._elTimeframe = null, this._timeframeView = null, this._availableResolutions = [], this._additionalPlots = [], this._chartSession = null, this._connectCallback = null, this._connected = !1, this._loadErrorTimeout = null, this._isLoading = !1, this._spinner = null, this._floatingTooltip = null, this._onCrosshairMoveBound = null, this._seriesUpDownColors = null, this._volumeUpDownColors = null, this._updateTimerId = null, this.resizeByContainer = () => {
                            const e = this.container().clientHeight,
                                t = this.container().clientWidth;
                            this._widget.applyOptions({
                                height: e,
                                width: t
                            }), this._mainPlot.fitContent()
                        }, this._onPlotStatusChanged = () => {
                            const e = this._mainPlot.status().value(),
                                t = this._additionalPlots.every((e => 0 !== e.status().value()));
                            switch (e) {
                                case 3:
                                    t && this._onPlotsDataReady();
                                    break;
                                case 2:
                                    this._onMainPlotDataError();
                                    break;
                                case 1:
                                    this._onMainPlotSymbolResolvingError()
                            }
                            if (this._options.chartOptions.loading.fade.visible) switch (e) {
                                case 0:
                                    this._innerContainer.classList.add(q.fade);
                                    break;
                                case 2:
                                case 1:
                                case 3:
                                    this._innerContainer.classList.remove(q.fade)
                            }
                        }, this._onChartSessionIsConnectedChanged = e => {
                            e ? (this._connected = !0, "function" == typeof this._connectCallback && this._connectCallback(), this._requestData()) : (this._connected = !1, this._mainPlot.disconnect(), this._additionalPlots.forEach((e => e.disconnect())))
                        }, this._options = (0, o.default)({}, Y, r), this._container = t, this._innerContainer = t.ownerDocument.createElement("div"), this._innerContainer.style.position = "relative", t.appendChild(this._innerContainer),
                        this._widget = (0, s.createChart)(this._innerContainer, null === (n = this._options.chartOptions) || void 0 === n ? void 0 : n.chart), this._timeFrameOptions = a, this._tooltipContainer = i, this._timeframe = {
                            type: "period-back",
                            value: this._options.timeframe.value
                        }, this.setTimeframe(this._timeframe, !0), this._mainPlot = this._createMainPlot(e), this.connect(), this._createFloatingTooltip(), window.addEventListener("resize", this.resizeByContainer), this._updateSeriesUpDownColors();
                    const l = this._options.chartOptions.volume;
                    this._volumeUpDownColors = {
                        up: l.upColor,
                        down: l.downColor
                    }, this.resizeByContainer()
                }
                container() {
                    return this._container
                }
                getChartContainer() {
                    var e, t, i, s, o;
                    return null !== (o = null === (s = null === (i = null === (t = null === (e = this._container.getElementsByTagName("div").item(0)) || void 0 === e ? void 0 : e.getElementsByTagName("table").item(0)) || void 0 === t ? void 0 : t.getElementsByTagName("tr").item(0)) || void 0 === i ? void 0 : i.getElementsByTagName("td").item(1)) || void 0 === s ? void 0 : s.getElementsByTagName("div").item(0)) && void 0 !== o ? o : null
                }
                seriesDataSource() {
                    return this._mainPlot.seriesDataSource()
                }
                connect(e) {
                    "function" == typeof e && (this._connectCallback = e), this._clearReconnectionTimeout(), this.connected() || (this._showLoading(), this._mainPlot.clearData(), this._additionalPlots.forEach((e => e.clearData())), this._chartSession || (this._chartSession = new c.ChartSession(window.ChartApiInstance, !0)), this._chartSession.isConnected().subscribe(this._onChartSessionIsConnectedChanged), this._chartSession.criticalError().subscribe(this, this._onChartSessionCriticalError), this._chartSession.connect(), this._clearLoadErrorTimeout(), this._loadErrorTimeout = setTimeout((() => {
                        this.showMessage((0, n.t)("No data here yet")), "function" == typeof this._options.onFirstData && (this._options.onFirstData(), this._options.onFirstData = null)
                    }), 15e3))
                }
                disconnect() {
                    if (!this.connected()) return;
                    const e = (0, r.ensureNotNull)(this._chartSession);
                    e.criticalError().unsubscribe(this, this._onChartSessionCriticalError), e.isConnected().unsubscribe(this._onChartSessionIsConnectedChanged), this._mainPlot.disconnect(), this._additionalPlots.forEach((e => e.disconnect())), this._chartSession && this._chartSession.isConnected().value() && this._chartSession.disconnect(), this._connected = !1, this._clearLoadErrorTimeout()
                }
                connected() {
                    return Boolean(this._connected && this._chartSession && this._chartSession.isConnected().value())
                }
                setTimeframe(e, t = !1) {
                    const i = this._timeframe;
                    let s = e;
                    const o = X[s.value];
                    void 0 !== o && (s = o), this._timeframe = this._timeframeIsValid(s) ? s : Q, this._timeframeView && this._options.timeframe.visible && this._timeframeView.update({
                        activeRange: this._timeframe.value
                    }), t || i === this._timeframe || (this._options.chartOptions.loading.clearDataOnTimeframeChange && (this.mainPlot().deleteView(), this._additionalPlots.forEach((e => e.deleteView()))), this.connected() ? this._requestData() : this.connect())
                }
                chartSession() {
                    return (0, r.ensureNotNull)(this._chartSession)
                }
                widget() {
                    return this._widget
                }
                timeframe() {
                    return this._timeframe
                }
                resolution() {
                    const e = this._timeFrameOptions.find((e => e.value.value === this.timeframe().value));
                    return (0,
                        r.ensureDefined)(null == e ? void 0 : e.targetResolution)
                }
                changeSymbol(e, t) {
                    void 0 !== t && this._updateSeriesOptions(t), this._options.chartOptions.loading.clearDataOnSymbolChange && (this._mainPlot.deleteView(), this._additionalPlots.forEach((e => e.deleteView()))), this._mainPlot.setSymbol(e, this._options.chartOptions.series), this._mainPlot.requestData(), this._additionalPlots.forEach((e => e.requestData())), this.connect()
                }
                changeChartType(e, t) {
                    this._updateSeriesOptions(t), this._updateSeriesUpDownColors(), this._mainPlot.changeChartType(e, this._options.chartOptions.series)
                }
                showMessage(e) {
                    this._hideLoading(), this._mainPlot.deleteView(), this._additionalPlots.forEach((e => e.deleteView())), this._widget.applyOptions({
                        watermark: {
                            visible: !0,
                            text: e
                        }
                    })
                }
                hideMessage() {
                    this._widget.applyOptions({
                        watermark: {
                            visible: !1
                        }
                    })
                }
                from() {
                    const e = this._timeFrameOptions.find((e => e.value.value === this.timeframe().value));
                    return [null == e ? void 0 : e.from]
                }
                enable(e) {
                    this.connect(e)
                }
                disable() {
                    this.disconnect()
                }
                destroy() {
                    var e;
                    window.removeEventListener("resize", this.resizeByContainer), this.disconnect(), this._destroyFloatingTooltip(), this._widget.remove(), this._mainPlot.symbolResolved().unsubscribeAll(null), this._mainPlot.destroy(), this._additionalPlots.forEach((e => e.destroy())), null === (e = this._timeframeView) || void 0 === e || e.destroy()
                }
                updateAvailableTimeframes() {
                    const e = this._mainPlot.availableResolutions().slice() || [],
                        t = this._mainPlot.symbolInfo();
                    t ? (e.push(...t.resolutions || []), this._availableResolutions = (0, l.uniq)(e), this._timeframeView && this._options.timeframe.visible && this._timeframeView.update({
                        ranges: this._getAvailableTimeFrames()
                    }), this.setTimeframe(this._timeframe)) : U.logWarn("Updating available resolutions without full symbol info")
                }
                mainPlot() {
                    return this._mainPlot
                }
                hasAdditionalPlots() {
                    return this._additionalPlots.length > 0
                }
                addAdditionalPlot(e, t) {
                    var i;
                    const r = new A(this, Z(t), (0, o.default)({}, this._options.chartOptions.volume, {
                        visible: !1
                    }));
                    return r.setSymbol(e), this._additionalPlots.push(r), r.status().subscribe(this._onPlotStatusChanged), null === (i = this.mainPlot().series()) || void 0 === i || i.priceScale().applyOptions({
                        mode: s.PriceScaleMode.Percentage
                    }), this.connected() ? r.requestData() : this.connect(), {
                        noData: r.noData(),
                        status: r.status(),
                        remove: () => {
                            this._removeAdditionalPlot(r)
                        },
                        symbol: () => r.symbol(),
                        options: () => r.currentSeriesOptions()
                    }
                }
                subscribeCrosshairMove(e) {
                    this.unsubscribeCrosshairMove(), this._onCrosshairMoveBound = t => {
                        e(this._onCrosshairMoveHandler(t))
                    }, this._widget.subscribeCrosshairMove(this._onCrosshairMoveBound)
                }
                unsubscribeCrosshairMove() {
                    this._onCrosshairMoveBound && this._widget.unsubscribeCrosshairMove(this._onCrosshairMoveBound)
                }
                _getChartPlotClass() {
                    return N
                }
                _createMainPlot(e) {
                    const t = new(this._getChartPlotClass())(this, this._options.chartOptions.series, this._options.chartOptions.volume, (() => this._additionalPlots));
                    return t.setSymbol(e), t.symbolResolved().subscribe(this, this._onSymbolResolved), t.status().subscribe(this._onPlotStatusChanged), t
                }
                _removeAdditionalPlot(e) {
                    const t = this._additionalPlots.indexOf(e);
                    (0, r.assert)(-1 !== t),
                    this._additionalPlots.splice(t, 1), e.status().unsubscribe(this._onPlotStatusChanged), e.deleteView(), e.clearData(), e.destroy(), this.hasAdditionalPlots() || this._mainPlot.restoreOriginalScaleMode()
                }
                _updateSeriesUpDownColors() {
                    var e, t;
                    const i = this._options.chartOptions.series;
                    switch (i.chartType) {
                        case "candlesticks":
                            this._seriesUpDownColors = {
                                up: null !== (e = i.borderUpColor) && void 0 !== e ? e : i.upColor,
                                down: null !== (t = i.borderDownColor) && void 0 !== t ? t : i.downColor
                            };
                            break;
                        case "bars":
                            this._seriesUpDownColors = {
                                up: i.upColor,
                                down: i.downColor
                            };
                            break;
                        default:
                            this._seriesUpDownColors = null
                    }
                }
                _updateSeriesOptions(e) {
                    this._options.chartOptions.series = Z(e)
                }
                _onPlotsDataReady() {
                    "function" == typeof this._options.onFirstData && (this._options.onFirstData(), this._options.onFirstData = null), this._hideLoading(), this.hideMessage(), this._clearLoadErrorTimeout(), this.disconnect(), this._createReconnectionTimeout()
                }
                _onMainPlotDataError() {
                    this._hideLoading(), this.showMessage((0, n.t)("Error")), this._clearLoadErrorTimeout(), this.disconnect()
                }
                _onMainPlotSymbolResolvingError() {
                    this._hideLoading(), this.showMessage((0, n.t)("No data here yet")), this._clearLoadErrorTimeout(), this.disconnect()
                }
                _createReconnectionTimeout() {
                    const e = this._options.updateTimeout;
                    void 0 !== e && e > 0 && (this._updateTimerId = setTimeout((() => {
                        this._updateTimerId = null, this.connected() ? this._requestData() : this.connect()
                    }), e))
                }
                _clearReconnectionTimeout() {
                    null !== this._updateTimerId && (clearInterval(this._updateTimerId), this._updateTimerId = null)
                }
                _clearLoadErrorTimeout() {
                    this._loadErrorTimeout && (clearTimeout(this._loadErrorTimeout), this._loadErrorTimeout = null)
                }
                _onCrosshairMoveHandler(e) {
                    var t, i;
                    const {
                        point: s,
                        time: o,
                        seriesData: r
                    } = e, a = this._mainPlot.series(), n = this._mainPlot.volume();
                    if (void 0 === s || void 0 === o || null === a) return;
                    const l = r.get(a);
                    if (void 0 === l) return;
                    const h = n && (null !== (i = null === (t = r.get(n)) || void 0 === t ? void 0 : t.value) && void 0 !== i ? i : null),
                        c = null !== h ? z.format(h) : void 0;
                    let u, d, _;
                    const m = a.priceFormatter();
                    if ("Area" === a.seriesType() || "Line" === a.seriesType()) {
                        const {
                            value: e,
                            color: t
                        } = l;
                        u = m.format(e);
                        const i = this._mainPlot.currentSeriesOptions();
                        "line" === i.chartType ? d = t || i.color : "area" === i.chartType && (d = i.lineColor)
                    } else {
                        const e = l;
                        u = [m.format(e.open), m.format(e.high), m.format(e.low), m.format(e.close)];
                        const t = e.close >= e.open;
                        d = ee(t, this._seriesUpDownColors), void 0 !== c && (_ = ee(t, this._volumeUpDownColors))
                    }
                    const p = this._dateTimeFormatter.format(new Date(1e3 * o));
                    return {
                        cursorPosition: {
                            x: this._widget.priceScale("left").width() + s.x,
                            y: s.y
                        },
                        time: p,
                        prices: u,
                        volume: c,
                        priceColor: d,
                        volumeColor: _
                    }
                }
                _initTimeframeSelector() {
                    if (!this._options.timeframe.visible || this._timeframeView) return;
                    this._options.timeframe.container ? this._elTimeframe = this._options.timeframe.container : (this._elTimeframe = document.createElement("div"), this._container.appendChild(this._elTimeframe));
                    const e = (e, t) => {
                        this._timeframeView = new e.TimeFrameViewRenderer((0, r.ensureNotNull)(this._elTimeframe), {
                            name: "minichart_timeframe",
                            activeRange: this._timeframe.value,
                            ranges: this._getAvailableTimeFrames(),
                            onSelectRange: e => {
                                this.setTimeframe({
                                    value: e,
                                    type: "period-back"
                                }), (0, r.ensureNotNull)(this._timeframeView).update({
                                    activeRange: e
                                })
                            },
                            theme: t
                        })
                    };
                    Promise.all([i.e(14205), i.e(31891)]).then(i.bind(i, 358450)).then((t => {
                        (this._options.timeframe.getTheme || (() => Promise.resolve(void 0)))().then((i => e(t, i)))
                    }))
                }
                _getAvailableTimeFrames() {
                    const e = [];
                    for (const t of this._timeFrameOptions) this._timeframeIsValid(t.value) && this._options.timeframe.options.has(t.value.value) && e.push({
                        value: t.value.value,
                        text: t.text,
                        description: t.description
                    });
                    return e
                }
                _timeframeIsValid(e) {
                    const t = this._timeFrameOptions.find((t => t.value.value === e.value)),
                        i = !!t,
                        s = this._availableResolutions && this._availableResolutions.length;
                    let o = !1;
                    if (t && s) {
                        const e = /(\d+)(\w+)/.exec(t.targetResolution);
                        null !== e && -1 !== this._availableResolutions.indexOf(e[2]) && (o = !0)
                    }
                    return i && (!s || o)
                }
                _onChartSessionCriticalError() {
                    this._connected = !1
                }
                _requestData() {
                    this._clearReconnectionTimeout();
                    const e = d.Interval.parse(this.resolution());
                    this._widget.timeScale().applyOptions({
                        timeVisible: !e.isDWM(),
                        secondsVisible: e.isSeconds()
                    });
                    const t = this._widget.options().localization.dateFormat;
                    e.isDWM() ? this._dateTimeFormatter = new b.DateFormatter(t) : this._dateTimeFormatter = new g.DateTimeFormatter({
                        dateFormat: t,
                        timeFormat: (0, y.getTimeFormatForInterval)(e),
                        dateTimeSeparator: "\n"
                    }), this._mainPlot.requestData(), this._additionalPlots.forEach((e => e.requestData())), this._widget.applyOptions({
                        timeScale: {
                            timeVisible: !d.Interval.parse(this._mainPlot.resolution()).isDWM()
                        }
                    })
                }
                _onSymbolResolved() {
                    this.updateAvailableTimeframes(), this._initTimeframeSelector()
                }
                _showLoading() {
                    if (this._isLoading) return;
                    this.hideMessage();
                    const e = this._options.chartOptions.loading;
                    e.spinner.visible && (null === this._spinner && (this._spinner = new m.Spinner("mini").setStyle({
                        color: e.spinner.color,
                        width: e.spinner.width.toString(),
                        zIndex: "10"
                    })), this._spinner.spin(this._innerContainer)), e.fade.visible && this._innerContainer.classList.add(q.fade), this._isLoading = !0
                }
                _hideLoading() {
                    this._isLoading && (this._spinner && this._spinner.stop(), this._isLoading = !1)
                }
                _createFloatingTooltip() {
                    var e, t;
                    if (this._tooltipContainer) {
                        const {
                            position: e
                        } = window.getComputedStyle(this._tooltipContainer), t = ["relative", "fixed", "absolute"];
                        t.includes(e) || U.logWarn("Container position property must be: " + t.join(", "))
                    }
                    switch (this._options.valuesTracking) {
                        case "0":
                        case "3":
                        default:
                            return;
                        case "1":
                            this._floatingTooltip = new p.FloatingPriceTimeTooltipRenderer(null !== (e = this._tooltipContainer) && void 0 !== e ? e : void 0, this._innerContainer);
                            break;
                        case "2":
                            this._floatingTooltip = new p.FloatingPriceTimeTooltipRenderer(null !== (t = this._tooltipContainer) && void 0 !== t ? t : void 0, this._innerContainer, "line")
                    }
                    this.subscribeCrosshairMove(this._floatingTooltip.update.bind(this._floatingTooltip))
                }
                _destroyFloatingTooltip() {
                    this._floatingTooltip && (this._floatingTooltip.destroy(), this.unsubscribeCrosshairMove(), this._floatingTooltip = null)
                }
            }
        }
    }
]);