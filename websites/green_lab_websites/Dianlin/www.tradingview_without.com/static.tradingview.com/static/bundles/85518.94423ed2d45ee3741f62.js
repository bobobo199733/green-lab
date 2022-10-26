"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [85518], {
        732677: (e, o, l) => {
            l.d(o, {
                axisLabelBackgroundColor: () => t
            });
            var r = l(679520);
            const t = {
                common: r.colorsPalette["color-tv-blue-500"],
                active: r.colorsPalette["color-tv-blue-800"]
            }
        },
        492747: (e, o, l) => {
            var r;
            l.d(o, {
                    ColorType: () => r
                }),
                function(e) {
                    e.Solid = "solid", e.Gradient = "gradient"
                }(r || (r = {}))
        },
        385518: (e, o, l) => {
            var r = l(781995).PlDisplay;
            const {
                getHexColorByName: t
            } = l(679520), {
                generateColor: i
            } = l(721386);
            var n = l(781995).TradingSourcesHorizontalAlignment,
                a = l(195048),
                s = l(278142).LineToolPitchforkStyle,
                c = l(813580).LineToolBarsPatternMode,
                d = l(418458),
                u = d.LineStudyPlotStyle,
                v = d.STUDYPLOTDISPLAYTARGET,
                h = l(121195),
                b = l(926281).PriceAxisLastValueMode,
                g = l(563346).StoriesTimeLineItemType,
                w = l(359266).MagnetMode,
                L = l(963985).LineEnd,
                y = l(492747).ColorType,
                p = l(950947).StatsPosition,
                C = l(734815).sessionsPreferencesDefault,
                f = l(732677).axisLabelBackgroundColor,
                S = l(911905).getLogger("Chart.Defaults");
            const E = t("color-black"),
                k = t("color-white"),
                T = i(k, 75),
                B = t("color-tv-blue-50"),
                P = t("color-tv-blue-500"),
                m = i(P, 30),
                x = i(P, 70),
                I = i(P, 72),
                D = i(P, 75),
                A = i(P, 80),
                _ = t("color-tv-blue-600"),
                N = t("color-deep-blue-200"),
                O = t("color-deep-blue-300"),
                z = t("color-deep-blue-400"),
                R = i(z, 80),
                Y = t("color-deep-blue-500"),
                V = t("color-sky-blue-500"),
                W = i(V, 80),
                M = i(V, 50),
                F = t("color-sky-blue-700"),
                H = i(F, 30),
                U = t("color-youtube"),
                q = t("color-ripe-red-200"),
                j = t("color-ripe-red-300"),
                G = t("color-ripe-red-400"),
                Z = t("color-ripe-red-500"),
                J = i(Z, 70),
                K = i(Z, 80),
                Q = i(Z, 72),
                X = i(Z, 95),
                $ = t("color-ripe-red-600"),
                ee = t("color-grapes-purple-400"),
                oe = i(ee, 80),
                le = t("color-grapes-purple-500"),
                re = i(le, 100),
                te = i(le, 80),
                ie = i(le, 30),
                ne = i(t("color-berry-pink-400"), 85),
                ae = t("color-berry-pink-500"),
                se = i(ae, 80),
                ce = t("color-minty-green-100"),
                de = t("color-minty-green-500"),
                ue = i(de, 80),
                ve = i(de, 72),
                he = i(de, 95),
                be = t("color-iguana-green-300"),
                ge = t("color-iguana-green-500"),
                we = i(ge, 80),
                Le = t("color-tan-orange-300"),
                ye = t("color-tan-orange-500"),
                pe = i(ye, 80),
                Ce = t("color-tan-orange-600"),
                fe = t("color-tan-orange-700"),
                Se = i(fe, 80),
                Ee = t("color-cold-gray-150"),
                ke = t("color-cold-gray-300"),
                Te = t("color-cold-gray-400"),
                Be = t("color-cold-gray-500"),
                Pe = t("color-cold-gray-800"),
                me = i(Pe, 94),
                xe = i(Pe, 100),
                Ie = t("color-cold-gray-900"),
                De = t("color-cold-gray-750"),
                Ae = t("color-slate-gray"),
                _e = t("color-silver-tree"),
                Ne = i(_e, 95),
                Oe = t("color-mandy"),
                ze = i(Oe, 95);
            var Re = function(e) {
                var o = function(e, o) {
                        return {
                            color: e,
                            visible: o
                        }
                    },
                    l = function(e, o, l) {
                        return {
                            coeff: e,
                            color: o,
                            visible: l
                        }
                    },
                    t = function(e, o, l, r, t) {
                        return {
                            coeff: e,
                            color: o,
                            visible: l,
                            linestyle: void 0 === r ? CanvasEx.LINESTYLE_SOLID : r,
                            linewidth: void 0 === t ? 1 : t
                        }
                    },
                    d = function(e, o, l) {
                        return {
                            color: e,
                            width: l,
                            visible: o
                        }
                    },
                    S = function(e, o, l, r, t) {
                        return {
                            color: e,
                            visible: o,
                            width: l,
                            x: r,
                            y: t
                        }
                    },
                    Pe = function(e, o, l, r, t, i) {
                        return {
                            coeff1: e,
                            coeff2: o,
                            color: l,
                            visible: r,
                            linestyle: void 0 === t ? CanvasEx.LINESTYLE_SOLID : t,
                            linewidth: void 0 === i ? 1 : i
                        }
                    };
                if (void 0 === TradingView.defaultProperties) {
                    var Re;
                    switch (window.locale) {
                        case "ar_AE":
                            Re = "Asia/Dubai";
                            break;
                        case "au":
                            Re = "Australia/Sydney";
                            break;
                        case "br":
                            Re = "America/Sao_Paulo";
                            break;
                        case "ca":
                            Re = "America/Toronto";
                            break;
                        case "de_DE":
                        case "it":
                            Re = "Europe/Berlin";
                            break;
                        case "es":
                            Re = "Europe/Madrid";
                            break;
                        case "fa_IR":
                            Re = "Asia/Tehran";
                            break;
                        case "fr":
                        case "sv_SE":
                            Re = "Europe/Paris";
                            break;
                        case "he_IL":
                        case "tr":
                            Re = "Europe/Athens";
                            break;
                        case "hu_HU":
                        case "pl":
                            Re = "Europe/Warsaw";
                            break;
                        case "id":
                        case "th_TH":
                        case "vi_VN":
                            Re = "Asia/Bangkok";
                            break;
                        case "in":
                            Re = "Asia/Kolkata";
                            break;
                        case "ja":
                        case "kr":
                            Re = "Asia/Tokyo";
                            break;
                        case "ms_MY":
                            Re = "Asia/Singapore";
                            break;
                        case "ru":
                            Re = "Europe/Moscow";
                            break;
                        case "uk":
                            Re = "Europe/London";
                            break;
                        case "zh_CN":
                        case "zh_TW":
                            Re = "Asia/Shanghai";
                            break;
                        default:
                            Re = "Etc/UTC"
                    }
                    TradingView.defaultProperties = {
                        chartproperties: {
                            timezone: Re,
                            priceScaleSelectionStrategyName: "auto",
                            dataWindowProperties: {
                                background: "rgba( 255, 254, 206, 0.2)",
                                border: "#606090",
                                font: "Verdana",
                                fontBold: !1,
                                fontItalic: !1,
                                fontSize: 10,
                                transparency: 80,
                                visible: !0
                            },
                            paneProperties: {
                                backgroundType: y.Solid,
                                background: k,
                                backgroundGradientStartColor: k,
                                backgroundGradientEndColor: k,
                                vertGridProperties: {
                                    color: me,
                                    style: CanvasEx.LINESTYLE_SOLID
                                },
                                horzGridProperties: {
                                    color: me,
                                    style: CanvasEx.LINESTYLE_SOLID
                                },
                                crossHairProperties: {
                                    color: Te,
                                    style: CanvasEx.LINESTYLE_DASHED,
                                    transparency: 0,
                                    width: 1
                                },
                                topMargin: 10,
                                bottomMargin: 8,
                                axisProperties: {
                                    autoScale: !0,
                                    autoScaleDisabled: !1,
                                    lockScale: !1,
                                    percentage: !1,
                                    percentageDisabled: !1,
                                    indexedTo100: !1,
                                    log: !1,
                                    logDisabled: !1,
                                    alignLabels: !0,
                                    isInverted: !1
                                },
                                legendProperties: {
                                    showStudyArguments: !0,
                                    showStudyTitles: !0,
                                    showStudyValues: !0,
                                    showSeriesTitle: !0,
                                    showSeriesOHLC: !0,
                                    showLegend: !0,
                                    showBarChange: !0,
                                    showVolume: !1,
                                    showBackground: !0,
                                    backgroundTransparency: 50
                                },
                                separatorColor: Ee
                            },
                            scalesProperties: {
                                backgroundColor: k,
                                lineColor: xe,
                                textColor: Ie,
                                fontSize: 12,
                                scaleSeriesOnly: !1,
                                showSeriesLastValue: !0,
                                seriesLastValueMode: b.LastValueAccordingToScale,
                                showSeriesPrevCloseValue: !1,
                                showStudyLastValue: !0,
                                showSymbolLabels: !1,
                                showStudyPlotLabels: !1,
                                showBidAskLabels: !1,
                                showPrePostMarketPriceLabel: !0,
                                showFundamentalNameLabel: !1,
                                showFundamentalLastValue: !0,
                                barSpacing: h.DEFAULT_BAR_SPACING,
                                axisHighlightColor: D,
                                axisLineToolLabelBackgroundColorCommon: f.common,
                                axisLineToolLabelBackgroundColorActive: f.active,
                                showPriceScaleCrosshairLabel: !0,
                                showTimeScaleCrosshairLabel: !0,
                                crosshairLabelBgColorLight: Ie,
                                crosshairLabelBgColorDark: De
                            },
                            mainSeriesProperties: {
                                style: a.STYLE_CANDLES,
                                esdShowDividends: !0,
                                esdShowSplits: !0,
                                esdShowEarnings: !0,
                                esdShowBreaks: !1,
                                esdFlagSize: 2,
                                showContinuousContractSwitches: !0,
                                showContinuousContractSwitchesBreaks: !1,
                                showCountdown: !0,
                                bidAsk: {
                                    visible: !1,
                                    lineStyle: CanvasEx.LINESTYLE_DOTTED,
                                    lineWidth: 1,
                                    bidLineColor: P,
                                    askLineColor: G
                                },
                                prePostMarket: {
                                    visible: !0,
                                    lineStyle: CanvasEx.LINESTYLE_DOTTED,
                                    lineWidth: 1,
                                    preMarketColor: Ce,
                                    postMarketColor: P
                                },
                                highLowAvgPrice: {
                                    highLowPriceLinesVisible: !1,
                                    highLowPriceLabelsVisible: !1,
                                    averageClosePriceLineVisible: !1,
                                    averageClosePriceLabelVisible: !1
                                },
                                visible: !0,
                                showPriceLine: !0,
                                priceLineWidth: 1,
                                priceLineColor: "",
                                baseLineColor: ke,
                                showPrevClosePriceLine: !1,
                                prevClosePriceLineWidth: 1,
                                prevClosePriceLineColor: "#555555",
                                minTick: "default",
                                dividendsAdjustment: !1,
                                backAdjustment: !1,
                                settlementAsClose: !0,
                                sessionId: "regular",
                                sessVis: !1,
                                statusViewStyle: {
                                    fontSize: 16,
                                    showExchange: !0,
                                    showInterval: !0,
                                    symbolTextSource: "description"
                                },
                                candleStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "#378658",
                                    borderUpColor: de,
                                    borderDownColor: Z,
                                    wickColor: "#737375",
                                    wickUpColor: de,
                                    wickDownColor: Z,
                                    barColorsOnPrevClose: !1,
                                    drawBody: !0
                                },
                                hollowCandleStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "#378658",
                                    borderUpColor: de,
                                    borderDownColor: Z,
                                    wickColor: "#737375",
                                    wickUpColor: de,
                                    wickDownColor: Z,
                                    drawBody: !0
                                },
                                haStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "#378658",
                                    borderUpColor: de,
                                    borderDownColor: Z,
                                    wickColor: "#737375",
                                    wickUpColor: de,
                                    wickDownColor: Z,
                                    showRealLastPrice: !1,
                                    barColorsOnPrevClose: !1,
                                    inputs: {},
                                    inputInfo: {},
                                    drawBody: !0
                                },
                                barStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    barColorsOnPrevClose: !1,
                                    dontDrawOpen: !1,
                                    thinBars: !0
                                },
                                hiloStyle: {
                                    color: P,
                                    showBorders: !0,
                                    borderColor: P,
                                    showLabels: !0,
                                    labelColor: P,
                                    drawBody: !0
                                },
                                columnStyle: {
                                    upColor: i(de, 50),
                                    downColor: i(Z, 50),
                                    barColorsOnPrevClose: !0,
                                    priceSource: "close"
                                },
                                lineStyle: {
                                    color: P,
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 2,
                                    priceSource: "close",
                                    styleType: a.STYLE_LINE_TYPE_SIMPLE
                                },
                                areaStyle: {
                                    color1: I,
                                    color2: P,
                                    linecolor: P,
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 2,
                                    priceSource: "close",
                                    transparency: 100
                                },
                                priceAxisProperties: {
                                    autoScale: !0,
                                    autoScaleDisabled: !1,
                                    lockScale: !1,
                                    percentage: !1,
                                    percentageDisabled: !1,
                                    indexedTo100: !1,
                                    log: !1,
                                    logDisabled: !1,
                                    isInverted: !1,
                                    alignLabels: !0
                                },
                                renkoStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    borderUpColor: de,
                                    borderDownColor: Z,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    borderUpColorProjection: "#a9dcc3",
                                    borderDownColorProjection: "#f5a6ae",
                                    wickUpColor: de,
                                    wickDownColor: Z,
                                    inputs: {
                                        source: "close",
                                        sources: "Close",
                                        boxSize: 3,
                                        style: "ATR",
                                        atrLength: 14,
                                        wicks: !0
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        sources: {
                                            name: "Source"
                                        },
                                        boxSize: {
                                            name: "Box size"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        wicks: {
                                            name: "Wicks"
                                        }
                                    }
                                },
                                pbStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    borderUpColor: de,
                                    borderDownColor: Z,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    borderUpColorProjection: "#a9dcc3",
                                    borderDownColorProjection: "#f5a6ae",
                                    inputs: {
                                        source: "close",
                                        lb: 3
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        lb: {
                                            name: "Number of line"
                                        }
                                    }
                                },
                                kagiStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    inputs: {
                                        source: "close",
                                        style: "ATR",
                                        atrLength: 14,
                                        reversalAmount: 1
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        reversalAmount: {
                                            name: "Reversal amount"
                                        }
                                    }
                                },
                                pnfStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    inputs: {
                                        sources: "Close",
                                        reversalAmount: 3,
                                        boxSize: 1,
                                        style: "ATR",
                                        atrLength: 14,
                                        oneStepBackBuilding: !1
                                    },
                                    inputInfo: {
                                        sources: {
                                            name: "Source"
                                        },
                                        boxSize: {
                                            name: "Box size"
                                        },
                                        reversalAmount: {
                                            name: "Reversal amount"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        oneStepBackBuilding: {
                                            name: "One step back building"
                                        }
                                    }
                                },
                                baselineStyle: {
                                    baselineColor: Ae,
                                    topFillColor1: ve,
                                    topFillColor2: he,
                                    bottomFillColor1: X,
                                    bottomFillColor2: Q,
                                    topLineColor: de,
                                    bottomLineColor: Z,
                                    topLineWidth: 2,
                                    bottomLineWidth: 2,
                                    priceSource: "close",
                                    transparency: 50,
                                    baseLevelPercentage: 50
                                },
                                rangeStyle: {
                                    upColor: de,
                                    downColor: Z,
                                    thinBars: !0,
                                    upColorProjection: "#a9dcc3",
                                    downColorProjection: "#f5a6ae",
                                    inputs: {
                                        range: 10,
                                        phantomBars: !1
                                    },
                                    inputInfo: {
                                        range: {
                                            name: "Range"
                                        },
                                        phantomBars: {
                                            name: "Phantom bars"
                                        }
                                    }
                                }
                            },
                            chartEventsSourceProperties: {
                                visible: !0,
                                futureOnly: !0,
                                breaks: {
                                    color: "#555555",
                                    visible: !1,
                                    style: CanvasEx.LINESTYLE_DASHED,
                                    width: 1
                                }
                            },
                            tradingProperties: {
                                showPositions: !0,
                                positionPL: {
                                    visibility: !0,
                                    display: r.Money
                                },
                                bracketsPL: {
                                    visibility: !0,
                                    display: r.Money
                                },
                                showOrders: !0,
                                showExecutions: !0,
                                showExecutionsLabels: !1,
                                showReverse: !0,
                                horizontalAlignment: n.Right,
                                extendLeft: !0,
                                lineLength: 5,
                                lineWidth: 1,
                                lineStyle: CanvasEx.LINESTYLE_SOLID
                            },
                            editorFontsList: ["Verdana", "Courier New", "Times New Roman", "Arial"],
                            volumePaneSize: "large"
                        },
                        sessions: C,
                        drawings: {
                            magnet: !1,
                            magnetMode: w.WeakMagnet,
                            stayInDrawingMode: !1,
                            drawOnAllCharts: !0,
                            drawOnAllChartsMode: 1
                        },
                        linetoolorder: {
                            extendLeft: "inherit",
                            lineLength: "inherit",
                            lineColor: U,
                            lineActiveBuyColor: "#4094e8",
                            lineInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            lineActiveSellColor: "#e75656",
                            lineInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            lineStyle: "inherit",
                            lineWidth: "inherit",
                            bodyBorderActiveBuyColor: "#4094e8",
                            bodyBorderInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            bodyBorderActiveSellColor: "#e75656",
                            bodyBorderInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            bodyBackgroundColor: T,
                            bodyBackgroundTransparency: 25,
                            bodyTextInactiveLimitColor: "rgba(38, 140, 2, 0.5)",
                            bodyTextActiveLimitColor: "#268c02",
                            bodyTextInactiveStopColor: "rgba(231, 86, 86, 0.5)",
                            bodyTextActiveStopColor: "#e75656",
                            bodyTextInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            bodyTextActiveBuyColor: "#4094e8",
                            bodyTextInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            bodyTextActiveSellColor: "#e75656",
                            bodyFontFamily: "Verdana",
                            bodyFontSize: 9,
                            bodyFontBold: !0,
                            bodyFontItalic: !1,
                            quantityBorderActiveBuyColor: "#4094e8",
                            quantityBorderInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            quantityBorderActiveSellColor: "#e75656",
                            quantityBorderInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            quantityBackgroundInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            quantityBackgroundActiveBuyColor: "#4094e8",
                            quantityBackgroundInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            quantityBackgroundActiveSellColor: "#e75656",
                            quantityTextColor: k,
                            quantityTextTransparency: 0,
                            quantityFontFamily: "Verdana",
                            quantityFontSize: 9,
                            quantityFontBold: !0,
                            quantityFontItalic: !1,
                            cancelButtonBorderActiveBuyColor: "#4094e8",
                            cancelButtonBorderInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            cancelButtonBorderActiveSellColor: "#e75656",
                            cancelButtonBorderInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            cancelButtonBackgroundColor: T,
                            cancelButtonBackgroundTransparency: 25,
                            cancelButtonIconActiveBuyColor: "#4094e8",
                            cancelButtonIconInactiveBuyColor: "rgba(64, 148, 232, 0.5)",
                            cancelButtonIconActiveSellColor: "#e75656",
                            cancelButtonIconInactiveSellColor: "rgba(231, 86, 86, 0.5)",
                            tooltip: "",
                            modifyTooltip: "",
                            cancelTooltip: ""
                        },
                        linetoolposition: {
                            extendLeft: "inherit",
                            lineLength: "inherit",
                            lineBuyColor: "#4094e8",
                            lineSellColor: "#e75656",
                            lineStyle: "inherit",
                            lineWidth: "inherit",
                            bodyBorderBuyColor: "#4094e8",
                            bodyBorderSellColor: "#e75656",
                            bodyBackgroundColor: T,
                            bodyBackgroundTransparency: 25,
                            bodyTextPositiveColor: "#268c02",
                            bodyTextNeutralColor: "#646464",
                            bodyTextNegativeColor: "#e75656",
                            bodyFontFamily: "Verdana",
                            bodyFontSize: 9,
                            bodyFontBold: !0,
                            bodyFontItalic: !1,
                            quantityBorderBuyColor: "#4094e8",
                            quantityBorderSellColor: "#e75656",
                            quantityBackgroundBuyColor: "#4094e8",
                            quantityBackgroundSellColor: "#e75656",
                            quantityTextColor: k,
                            quantityTextTransparency: 0,
                            quantityFontFamily: "Verdana",
                            quantityFontSize: 9,
                            quantityFontBold: !0,
                            quantityFontItalic: !1,
                            reverseButtonBorderBuyColor: "#4094e8",
                            reverseButtonBorderSellColor: "#e75656",
                            reverseButtonBackgroundColor: T,
                            reverseButtonBackgroundTransparency: 25,
                            reverseButtonIconBuyColor: "#4094e8",
                            reverseButtonIconSellColor: "#e75656",
                            closeButtonBorderBuyColor: "#4094e8",
                            closeButtonBorderSellColor: "#e75656",
                            closeButtonBackgroundColor: T,
                            closeButtonBackgroundTransparency: 25,
                            closeButtonIconBuyColor: "#4094e8",
                            closeButtonIconSellColor: "#e75656",
                            tooltip: "",
                            protectTooltip: "",
                            closeTooltip: "",
                            reverseTooltip: ""
                        },
                        linetoolexecution: {
                            direction: "buy",
                            arrowHeight: 8,
                            arrowSpacing: 1,
                            arrowBuyColor: "#4094e8",
                            arrowSellColor: "#e75656",
                            text: "",
                            textColor: E,
                            textTransparency: 0,
                            fontFamily: "Verdana",
                            fontSize: 10,
                            fontBold: !1,
                            fontItalic: !1,
                            tooltip: ""
                        },
                        linetoolicon: {
                            color: P,
                            size: 40,
                            icon: 61720,
                            angle: .5 * Math.PI
                        },
                        linetoolimage: {
                            transparency: 0,
                            cssWidth: 0,
                            cssHeight: 0,
                            angle: 0
                        },
                        linetoolbezierquadro: {
                            linecolor: P,
                            linewidth: 1,
                            fillBackground: !1,
                            backgroundColor: A,
                            transparency: 50,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal
                        },
                        linetoolbeziercubic: {
                            linecolor: V,
                            linewidth: 1,
                            fillBackground: !1,
                            backgroundColor: W,
                            transparency: 50,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal
                        },
                        linetooltrendline: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: P,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: p.Right
                        },
                        linetoolinfoline: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: P,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !0,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !0,
                            showBarsRange: !0,
                            showDateTimeRange: !0,
                            showDistance: !0,
                            showAngle: !0,
                            statsPosition: p.Center
                        },
                        linetooltimecycles: {
                            linecolor: "#159980",
                            linewidth: 1,
                            fillBackground: !0,
                            backgroundColor: "rgba(106, 168, 79, 0.5)",
                            transparency: 50,
                            linestyle: CanvasEx.LINESTYLE_SOLID
                        },
                        linetoolsineline: {
                            linecolor: "#159980",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID
                        },
                        linetooltrendangle: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            textcolor: P,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            extendRight: !1,
                            extendLeft: !1,
                            statsPosition: p.Right
                        },
                        linetooldisjointangle: {
                            linecolor: de,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            fillBackground: !0,
                            backgroundColor: ue,
                            transparency: 20,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal,
                            textcolor: de,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            showPrices: !1,
                            showPriceRange: !1,
                            showDateTimeRange: !1,
                            showBarsRange: !1
                        },
                        linetoolflatbottom: {
                            linecolor: ye,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            fillBackground: !0,
                            backgroundColor: pe,
                            transparency: 20,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal,
                            textcolor: ye,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            showPrices: !1,
                            showPriceRange: !1,
                            showDateTimeRange: !1,
                            showBarsRange: !1
                        },
                        linetoolfibspiral: {
                            counterclockwise: !1,
                            linecolor: de,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID
                        },
                        linetoolriskrewardshort: {
                            linecolor: Be,
                            linewidth: 1,
                            textcolor: k,
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: "#585858",
                            fillBackground: !0,
                            stopBackground: K,
                            profitBackground: ue,
                            stopBackgroundTransparency: 80,
                            profitBackgroundTransparency: 80,
                            drawBorder: !1,
                            borderColor: "#667b8b",
                            compact: !1,
                            riskDisplayMode: "percents",
                            accountSize: 1e3,
                            lotSize: 1,
                            risk: 25,
                            alwaysShowStats: !1,
                            showPriceLabels: !0
                        },
                        linetoolriskrewardlong: {
                            linecolor: Be,
                            linewidth: 1,
                            textcolor: k,
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: "#585858",
                            fillBackground: !0,
                            stopBackground: K,
                            profitBackground: ue,
                            stopBackgroundTransparency: 80,
                            profitBackgroundTransparency: 80,
                            drawBorder: !1,
                            borderColor: "#667b8b",
                            compact: !1,
                            riskDisplayMode: "percents",
                            accountSize: 1e3,
                            lotSize: 1,
                            risk: 25,
                            alwaysShowStats: !1,
                            showPriceLabels: !0
                        },
                        linetoolarrow: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: L.Normal,
                            rightEnd: L.Arrow,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: P,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: p.Right
                        },
                        linetoolray: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !0,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: P,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: p.Right
                        },
                        linetoolextended: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !0,
                            extendRight: !0,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: P,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: p.Right
                        },
                        linetoolhorzline: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showPrice: !0,
                            showLabel: !1,
                            textcolor: P,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "top"
                        },
                        linetoolhorzray: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showPrice: !0,
                            showLabel: !1,
                            textcolor: P,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "top"
                        },
                        linetoolvertline: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLine: !0,
                            showTime: !0,
                            showLabel: !1,
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "top",
                            textcolor: P,
                            textOrientation: "vertical",
                            fontsize: 14,
                            bold: !1,
                            italic: !1
                        },
                        linetoolcrossline: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showPrice: !0,
                            showTime: !0
                        },
                        linetoolcirclelines: {
                            trendline: {
                                visible: !0,
                                color: "#808080",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            linecolor: "#80ccdb",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID
                        },
                        linetoolfibtimezone: {
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "bottom",
                            baselinecolor: "#808080",
                            linecolor: "#0055db",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showLabels: !0,
                            fillBackground: !1,
                            transparency: 80,
                            trendline: {
                                visible: !0,
                                color: "#808080",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            level1: t(0, Be, !0),
                            level2: t(1, P, !0),
                            level3: t(2, P, !0),
                            level4: t(3, P, !0),
                            level5: t(5, P, !0),
                            level6: t(8, P, !0),
                            level7: t(13, P, !0),
                            level8: t(21, P, !0),
                            level9: t(34, P, !0),
                            level10: t(55, P, !0),
                            level11: t(89, P, !0)
                        },
                        linetooltext: {
                            color: P,
                            fontsize: 14,
                            fillBackground: !1,
                            backgroundColor: "rgba(91, 133, 191, 0.3)",
                            backgroundTransparency: 70,
                            drawBorder: !1,
                            borderColor: "#667b8b",
                            bold: !1,
                            italic: !1,
                            fixedSize: !0,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetooltextabsolute: {
                            color: P,
                            fontsize: 14,
                            fillBackground: !1,
                            backgroundColor: "rgba(155, 190, 213, 0.3)",
                            backgroundTransparency: 70,
                            drawBorder: !1,
                            borderColor: "#667b8b",
                            bold: !1,
                            italic: !1,
                            fixedSize: !1,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetoolballoon: {
                            color: k,
                            backgroundColor: ie,
                            borderColor: re,
                            fontsize: 14,
                            transparency: 30
                        },
                        linetoolbrush: {
                            linecolor: V,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            smooth: 5,
                            fillBackground: !1,
                            backgroundColor: M,
                            transparency: 50,
                            leftEnd: L.Normal,
                            rightEnd: L.Normal
                        },
                        linetoolhighlighter: {
                            linecolor: ne,
                            smooth: 5,
                            transparency: 85
                        },
                        linetoolpolyline: {
                            linecolor: z,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            fillBackground: !0,
                            backgroundColor: R,
                            transparency: 50,
                            filled: !1
                        },
                        linetoolsignpost: {
                            itemType: g.Emoji,
                            emoji: "🙂",
                            showImage: !1,
                            plateColor: P,
                            fontSize: 12,
                            bold: !1,
                            italic: !1
                        },
                        linetoolpath: {
                            lineColor: P,
                            lineWidth: 2,
                            lineStyle: CanvasEx.LINESTYLE_SOLID,
                            leftEnd: L.Normal,
                            rightEnd: L.Arrow
                        },
                        linetoolarrowmarkleft: {
                            color: P,
                            arrowColor: P,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkup: {
                            color: de,
                            arrowColor: de,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkright: {
                            color: P,
                            arrowColor: P,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkdown: {
                            color: $,
                            arrowColor: $,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolflagmark: {
                            flagColor: P
                        },
                        linetoolnote: {
                            markerColor: P,
                            textColor: k,
                            backgroundColor: m,
                            backgroundTransparency: 0,
                            borderColor: P,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            fixedSize: !0
                        },
                        linetoolnoteabsolute: {
                            markerColor: P,
                            textColor: k,
                            backgroundColor: m,
                            backgroundTransparency: 0,
                            borderColor: P,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            fixedSize: !0
                        },
                        linetoolpricelabel: {
                            color: k,
                            backgroundColor: P,
                            borderColor: P,
                            fontWeight: "bold",
                            fontsize: 14,
                            transparency: 0
                        },
                        linetoolpricenote: {
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textColor: P,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            lineColor: P,
                            priceLabelBackgroundColor: P,
                            priceLabelBorderColor: P,
                            priceLabelTextColor: k,
                            priceLabelFontSize: 12,
                            priceLabelBold: !1,
                            priceLabelItalic: !1
                        },
                        linetoolarrowmarker: {
                            backgroundColor: _,
                            textColor: _,
                            bold: !0,
                            italic: !1,
                            fontsize: 16,
                            showLabel: !0
                        },
                        linetoolrectangle: {
                            color: le,
                            fillBackground: !0,
                            backgroundColor: te,
                            linewidth: 1,
                            transparency: 50,
                            showLabel: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            textColor: le,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            extendLeft: !1,
                            extendRight: !1
                        },
                        linetoolrotatedrectangle: {
                            color: ge,
                            fillBackground: !0,
                            backgroundColor: we,
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolcircle: {
                            color: ye,
                            backgroundColor: pe,
                            fillBackground: !0,
                            linewidth: 1,
                            showLabel: !1,
                            textColor: ye,
                            fontSize: 14,
                            bold: !1,
                            italic: !1
                        },
                        linetoolellipse: {
                            color: ae,
                            fillBackground: !0,
                            backgroundColor: se,
                            transparency: 50,
                            linewidth: 1,
                            showLabel: !1,
                            textColor: ae,
                            fontSize: 14,
                            bold: !1,
                            italic: !1
                        },
                        linetoolarc: {
                            color: ee,
                            fillBackground: !0,
                            backgroundColor: oe,
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolprediction: {
                            linecolor: P,
                            linewidth: 1,
                            sourceBackColor: P,
                            sourceTextColor: k,
                            sourceStrokeColor: P,
                            targetStrokeColor: P,
                            targetBackColor: P,
                            targetTextColor: k,
                            successBackground: ge,
                            successTextColor: k,
                            failureBackground: Z,
                            failureTextColor: k,
                            intermediateBackColor: "#ead289",
                            intermediateTextColor: "#6d4d22",
                            transparency: 10,
                            centersColor: "#202020"
                        },
                        linetooltriangle: {
                            color: fe,
                            fillBackground: !0,
                            backgroundColor: Se,
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolcallout: {
                            color: k,
                            backgroundColor: H,
                            transparency: 50,
                            linewidth: 1,
                            fontsize: 14,
                            bordercolor: F,
                            bold: !1,
                            italic: !1,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetoolparallelchannel: {
                            linecolor: P,
                            linewidth: 2,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            fillBackground: !0,
                            backgroundColor: A,
                            transparency: 20,
                            showMidline: !0,
                            midlinecolor: P,
                            midlinewidth: 1,
                            midlinestyle: CanvasEx.LINESTYLE_DASHED
                        },
                        linetoolelliottimpulse: {
                            degree: 7,
                            showWave: !0,
                            color: "#3d85c6",
                            linewidth: 1
                        },
                        linetoolelliotttriangle: {
                            degree: 7,
                            showWave: !0,
                            color: ye,
                            linewidth: 1
                        },
                        linetoolelliotttriplecombo: {
                            degree: 7,
                            showWave: !0,
                            color: "#6aa84f",
                            linewidth: 1
                        },
                        linetoolelliottcorrection: {
                            degree: 7,
                            showWave: !0,
                            color: "#3d85c6",
                            linewidth: 1
                        },
                        linetoolelliottdoublecombo: {
                            degree: 7,
                            showWave: !0,
                            color: "#6aa84f",
                            linewidth: 1
                        },
                        linetoolbarspattern: {
                            color: P,
                            mode: c.Bars,
                            mirrored: !1,
                            flipped: !1
                        },
                        linetoolghostfeed: {
                            averageHL: 20,
                            variance: 50,
                            candleStyle: {
                                upColor: ce,
                                downColor: q,
                                drawWick: !0,
                                drawBorder: !0,
                                borderColor: "#378658",
                                borderUpColor: de,
                                borderDownColor: Z,
                                wickColor: Be
                            },
                            transparency: 50
                        },
                        study: {
                            inputs: {},
                            styles: {},
                            palettes: {},
                            bands: {},
                            area: {},
                            graphics: {},
                            plots: {},
                            ohlcPlots: {},
                            filledAreasStyle: {},
                            filledAreas: {},
                            visible: !0,
                            showLegendValues: !0,
                            showLabelsOnPriceScale: !0,
                            precision: "default"
                        },
                        linetoolpitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Original,
                            median: {
                                visible: !0,
                                color: Z,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            extendLines: !1,
                            level0: t(.25, Le, !1),
                            level1: t(.382, be, !1),
                            level2: t(.5, ge, !0),
                            level3: t(.618, de, !1),
                            level4: t(.75, "#64b5f6", !1),
                            level5: t(1, P, !0),
                            level6: t(1.5, le, !1),
                            level7: t(1.75, ae, !1),
                            level8: t(2, j, !1)
                        },
                        linetoolpitchfan: {
                            fillBackground: !0,
                            transparency: 80,
                            median: {
                                visible: !0,
                                color: Z,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level0: t(.25, Le, !1),
                            level1: t(.382, be, !1),
                            level2: t(.5, ge, !0),
                            level3: t(.618, de, !1),
                            level4: t(.75, "#64b5f6", !1),
                            level5: t(1, P, !0),
                            level6: t(1.5, le, !1),
                            level7: t(1.75, ae, !1),
                            level8: t(2, j, !1)
                        },
                        linetoolgannfan: {
                            showLabels: !0,
                            fillBackground: !0,
                            transparency: 80,
                            level1: Pe(1, 8, Le, !0),
                            level2: Pe(1, 4, be, !0),
                            level3: Pe(1, 3, ge, !0),
                            level4: Pe(1, 2, de, !0),
                            level5: Pe(1, 1, "#64b5f6", !0),
                            level6: Pe(2, 1, P, !0),
                            level7: Pe(3, 1, le, !0),
                            level8: Pe(4, 1, ae, !0),
                            level9: Pe(8, 1, j, !0)
                        },
                        linetoolganncomplex: {
                            fillBackground: !1,
                            arcsBackground: {
                                fillBackground: !0,
                                transparency: 80
                            },
                            reverse: !1,
                            scaleRatio: "",
                            showLabels: !0,
                            labelsStyle: {
                                fontSize: 12,
                                bold: !1,
                                italic: !1
                            },
                            levels: [d(Be, !0, 1), d(ye, !0, 1), d(be, !0, 1), d(ge, !0, 1), d(de, !0, 1), d(Be, !0, 1)],
                            fanlines: [S(N, !1, 1, 8, 1), S(Z, !1, 1, 5, 1), S(Be, !1, 1, 4, 1), S(ye, !1, 1, 3, 1), S(be, !0, 1, 2, 1), S(ge, !0, 1, 1, 1), S(de, !0, 1, 1, 2), S(de, !1, 1, 1, 3), S(P, !1, 1, 1, 4), S(O, !1, 1, 1, 5), S(N, !1, 1, 1, 8)],
                            arcs: [S(ye, !0, 1, 1, 0), S(ye, !0, 1, 1, 1), S(ye, !0, 1, 1.5, 0), S(be, !0, 1, 2, 0), S(be, !0, 1, 2, 1), S(ge, !0, 1, 3, 0), S(ge, !0, 1, 3, 1), S(de, !0, 1, 4, 0), S(de, !0, 1, 4, 1), S(P, !0, 1, 5, 0), S(P, !0, 1, 5, 1)]
                        },
                        linetoolgannfixed: {
                            fillBackground: !1,
                            arcsBackground: {
                                fillBackground: !0,
                                transparency: 80
                            },
                            reverse: !1,
                            levels: [d(Be, !0, 1), d(ye, !0, 1), d(be, !0, 1), d(ge, !0, 1), d(de, !0, 1), d(Be, !0, 1)],
                            fanlines: [S(N, !1, 1, 8, 1), S(Z, !1, 1, 5, 1), S(Be, !1, 1, 4, 1), S(ye, !1, 1, 3, 1), S(be, !0, 1, 2, 1), S(ge, !0, 1, 1, 1), S(de, !0, 1, 1, 2), S(de, !1, 1, 1, 3), S(P, !1, 1, 1, 4), S(O, !1, 1, 1, 5), S(N, !1, 1, 1, 8)],
                            arcs: [S(ye, !0, 1, 1, 0), S(ye, !0, 1, 1, 1), S(ye, !0, 1, 1.5, 0), S(be, !0, 1, 2, 0), S(be, !0, 1, 2, 1), S(ge, !0, 1, 3, 0), S(ge, !0, 1, 3, 1), S(de, !0, 1, 4, 0), S(de, !0, 1, 4, 1), S(P, !0, 1, 5, 0), S(P, !0, 1, 5, 1)]
                        },
                        linetoolgannsquare: {
                            color: "rgba(21, 56, 153, 0.8)",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showTopLabels: !0,
                            showBottomLabels: !0,
                            showLeftLabels: !0,
                            showRightLabels: !0,
                            fillHorzBackground: !0,
                            horzTransparency: 80,
                            fillVertBackground: !0,
                            vertTransparency: 80,
                            reverse: !1,
                            fans: o(Te, !1),
                            hlevel1: l(0, Be, !0),
                            hlevel2: l(.25, fe, !0),
                            hlevel3: l(.382, be, !0),
                            hlevel4: l(.5, ge, !0),
                            hlevel5: l(.618, de, !0),
                            hlevel6: l(.75, P, !0),
                            hlevel7: l(1, Be, !0),
                            vlevel1: l(0, Be, !0),
                            vlevel2: l(.25, fe, !0),
                            vlevel3: l(.382, be, !0),
                            vlevel4: l(.5, ge, !0),
                            vlevel5: l(.618, de, !0),
                            vlevel6: l(.75, P, !0),
                            vlevel7: l(1, Be, !0)
                        },
                        linetoolfibspeedresistancefan: {
                            fillBackground: !0,
                            transparency: 80,
                            grid: {
                                color: "rgba(21, 56, 153, 0.8)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                visible: !0
                            },
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showTopLabels: !0,
                            showBottomLabels: !0,
                            showLeftLabels: !0,
                            showRightLabels: !0,
                            reverse: !1,
                            hlevel1: l(0, Be, !0),
                            hlevel2: l(.25, fe, !0),
                            hlevel3: l(.382, be, !0),
                            hlevel4: l(.5, ge, !0),
                            hlevel5: l(.618, de, !0),
                            hlevel6: l(.75, P, !0),
                            hlevel7: l(1, Be, !0),
                            vlevel1: l(0, Be, !0),
                            vlevel2: l(.25, fe, !0),
                            vlevel3: l(.382, be, !0),
                            vlevel4: l(.5, ge, !0),
                            vlevel5: l(.618, de, !0),
                            vlevel6: l(.75, P, !0),
                            vlevel7: l(1, Be, !0)
                        },
                        linetoolfibretracement: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLines: !1,
                            extendLinesLeft: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            reverse: !1,
                            coeffsAsPercents: !1,
                            fibLevelsBasedOnLogScale: !1,
                            labelFontSize: 12,
                            trendline: {
                                visible: !0,
                                color: Be,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: l(0, Be, !0),
                            level2: l(.236, Z, !0),
                            level3: l(.382, be, !0),
                            level4: l(.5, ge, !0),
                            level5: l(.618, de, !0),
                            level6: l(.786, "#64b5f6", !0),
                            level7: l(1, Be, !0),
                            level8: l(1.618, P, !0),
                            level9: l(2.618, Z, !0),
                            level10: l(3.618, le, !0),
                            level11: l(4.236, ae, !0),
                            level12: l(1.272, be, !1),
                            level13: l(1.414, Z, !1),
                            level16: l(2, de, !1),
                            level14: l(2.272, be, !1),
                            level15: l(2.414, ge, !1),
                            level17: l(3, "#64b5f6", !1),
                            level18: l(3.272, Be, !1),
                            level19: l(3.414, P, !1),
                            level20: l(4, "#cc2828", !1),
                            level21: l(4.272, le, !1),
                            level22: l(4.414, ae, !1),
                            level23: l(4.618, be, !1),
                            level24: l(4.764, de, !1)
                        },
                        linetoolfibchannel: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLeft: !1,
                            extendRight: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "middle",
                            coeffsAsPercents: !1,
                            labelFontSize: 12,
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: l(0, Be, !0),
                            level2: l(.236, Z, !0),
                            level3: l(.382, be, !0),
                            level4: l(.5, ge, !0),
                            level5: l(.618, de, !0),
                            level6: l(.786, "#64b5f6", !0),
                            level7: l(1, Be, !0),
                            level8: l(1.618, P, !0),
                            level9: l(2.618, Z, !0),
                            level10: l(3.618, le, !0),
                            level11: l(4.236, ae, !0),
                            level12: l(1.272, be, !1),
                            level13: l(1.414, Z, !1),
                            level16: l(2, de, !1),
                            level14: l(2.272, be, !1),
                            level15: l(2.414, ge, !1),
                            level17: l(3, "#64b5f6", !1),
                            level18: l(3.272, Be, !1),
                            level19: l(3.414, P, !1),
                            level20: l(4, "#cc2828", !1),
                            level21: l(4.272, le, !1),
                            level22: l(4.414, ae, !1),
                            level23: l(4.618, be, !1),
                            level24: l(4.764, de, !1)
                        },
                        linetoolprojection: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            color1: A,
                            color2: te,
                            linewidth: 1,
                            trendline: {
                                visible: !0,
                                color: Te,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: t(1, "#808080", !0)
                        },
                        linetool5pointspattern: {
                            color: P,
                            textcolor: k,
                            fillBackground: !0,
                            backgroundColor: P,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolcypherpattern: {
                            color: P,
                            textcolor: k,
                            fillBackground: !0,
                            backgroundColor: P,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetooltrianglepattern: {
                            color: Y,
                            textcolor: k,
                            fillBackground: !0,
                            backgroundColor: Y,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolabcd: {
                            color: de,
                            textcolor: k,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            linewidth: 1
                        },
                        linetoolthreedrivers: {
                            color: Y,
                            textcolor: k,
                            fillBackground: !0,
                            backgroundColor: "rgba(149, 40, 204, 0.5)",
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolheadandshoulders: {
                            color: de,
                            textcolor: k,
                            fillBackground: !0,
                            backgroundColor: de,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolfibwedge: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            trendline: {
                                visible: !0,
                                color: "#808080",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: t(.236, Z, !0),
                            level2: t(.382, be, !0),
                            level3: t(.5, ge, !0),
                            level4: t(.618, de, !0),
                            level5: t(.786, "#64b5f6", !0),
                            level6: t(1, Be, !0),
                            level7: t(1.618, P, !1),
                            level8: t(2.618, Z, !1),
                            level9: t(3.618, Y, !1),
                            level10: t(4.236, ae, !1),
                            level11: t(4.618, ae, !1)
                        },
                        linetoolfibcircles: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            coeffsAsPercents: !1,
                            trendline: {
                                visible: !0,
                                color: Be,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            level1: t(.236, Z, !0),
                            level2: t(.382, be, !0),
                            level3: t(.5, ge, !0),
                            level4: t(.618, de, !0),
                            level5: t(.786, "#64b5f6", !0),
                            level6: t(1, Be, !0),
                            level7: t(1.618, P, !0),
                            level8: t(2.618, Z, !0),
                            level9: t(3.618, Y, !0),
                            level10: t(4.236, ae, !0),
                            level11: t(4.618, ae, !0)
                        },
                        linetoolfibspeedresistancearcs: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            fullCircles: !1,
                            trendline: {
                                visible: !0,
                                color: Be,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            level1: t(.236, Z, !0),
                            level2: t(.382, be, !0),
                            level3: t(.5, ge, !0),
                            level4: t(.618, de, !0),
                            level5: t(.786, "#64b5f6", !0),
                            level6: t(1, Be, !0),
                            level7: t(1.618, P, !0),
                            level8: t(2.618, Z, !0),
                            level9: t(3.618, Y, !0),
                            level10: t(4.236, ae, !0),
                            level11: t(4.618, ae, !0)
                        },
                        linetooltrendbasedfibextension: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLines: !1,
                            extendLinesLeft: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            reverse: !1,
                            coeffsAsPercents: !1,
                            fibLevelsBasedOnLogScale: !1,
                            labelFontSize: 12,
                            trendline: {
                                visible: !0,
                                color: Be,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: l(0, Be, !0),
                            level2: l(.236, Z, !0),
                            level3: l(.382, be, !0),
                            level4: l(.5, ge, !0),
                            level5: l(.618, de, !0),
                            level6: l(.786, "#64b5f6", !0),
                            level7: l(1, Be, !0),
                            level8: l(1.618, P, !0),
                            level9: l(2.618, Z, !0),
                            level10: l(3.618, le, !0),
                            level11: l(4.236, ae, !0),
                            level12: l(1.272, be, !1),
                            level13: l(1.414, Z, !1),
                            level16: l(2, de, !1),
                            level14: l(2.272, be, !1),
                            level15: l(2.414, ge, !1),
                            level17: l(3, "#64b5f6", !1),
                            level18: l(3.272, Be, !1),
                            level19: l(3.414, P, !1),
                            level20: l(4, "#cc2828", !1),
                            level21: l(4.272, le, !1),
                            level22: l(4.414, ae, !1),
                            level23: l(4.618, be, !1),
                            level24: l(4.764, de, !1)
                        },
                        linetooltrendbasedfibtime: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "bottom",
                            trendline: {
                                visible: !0,
                                color: Be,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            level1: t(0, Be, !0),
                            level2: t(.382, Z, !0),
                            level3: t(.5, be, !1),
                            level4: t(.618, ge, !0),
                            level5: t(1, de, !0),
                            level6: t(1.382, "#64b5f6", !0),
                            level7: t(1.618, Be, !0),
                            level8: t(2, P, !0),
                            level9: t(2.382, Z, !0),
                            level10: t(2.618, le, !0),
                            level11: t(3, ae, !0)
                        },
                        linetoolschiffpitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Schiff,
                            median: {
                                visible: !0,
                                color: Z,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            extendLines: !1,
                            level0: t(.25, Le, !1),
                            level1: t(.382, be, !1),
                            level2: t(.5, ge, !0),
                            level3: t(.618, de, !1),
                            level4: t(.75, "#64b5f6", !1),
                            level5: t(1, P, !0),
                            level6: t(1.5, le, !1),
                            level7: t(1.75, ae, !1),
                            level8: t(2, j, !1)
                        },
                        linetoolschiffpitchfork2: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Schiff2,
                            median: {
                                visible: !0,
                                color: Z,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            extendLines: !1,
                            level0: t(.25, Le, !1),
                            level1: t(.382, be, !1),
                            level2: t(.5, ge, !0),
                            level3: t(.618, de, !1),
                            level4: t(.75, "#64b5f6", !1),
                            level5: t(1, P, !0),
                            level6: t(1.5, le, !1),
                            level7: t(1.75, ae, !1),
                            level8: t(2, j, !1)
                        },
                        linetoolinsidepitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Inside,
                            median: {
                                visible: !0,
                                color: Z,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            extendLines: !1,
                            level0: t(.25, Le, !1),
                            level1: t(.382, be, !1),
                            level2: t(.5, ge, !0),
                            level3: t(.618, de, !1),
                            level4: t(.75, "#64b5f6", !1),
                            level5: t(1, P, !0),
                            level6: t(1.5, le, !1),
                            level7: t(1.75, ae, !1),
                            level8: t(2, j, !1)
                        },
                        linetoolregressiontrend: {
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            styles: {
                                upLine: {
                                    display: v.All,
                                    color: x,
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 2
                                },
                                downLine: {
                                    display: v.All,
                                    color: x,
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 2
                                },
                                baseLine: {
                                    display: v.All,
                                    color: J,
                                    linestyle: CanvasEx.LINESTYLE_DASHED,
                                    linewidth: 1
                                },
                                extendLines: !1,
                                showPearsons: !0,
                                transparency: 70
                            }
                        }
                    }, Ve(TradingView.defaultProperties.chartproperties), Me()
                }
                if (void 0 === TradingView.defaultProperties["study_MA@tv-basicstudies"] && (TradingView.defaultProperties["study_MA@tv-basicstudies"] = {
                        description: "Moving Average",
                        shortDescription: "MA",
                        inputs: {
                            length: 9,
                            source: "close"
                        },
                        styles: {
                            MovAvg: {
                                display: v.All,
                                color: P,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0,
                                title: "MA"
                            }
                        }
                    }), void 0 === TradingView.defaultProperties["study_PivotPointsHighLow@tv-basicstudies"] && (TradingView.defaultProperties["study_PivotPointsHighLow@tv-basicstudies"] = {
                        fontsize: 10,
                        borderColor: P,
                        backColor: B,
                        textColor: Ie
                    }), void 0 === TradingView.defaultProperties["study_PivotPointsStandard@tv-basicstudies"]) {
                    var Ye = !0;
                    TradingView.defaultProperties["study_PivotPointsStandard@tv-basicstudies"] = {
                        _hardCodedDefaultsVersion: 1,
                        fontsize: 11,
                        levelsStyle: {
                            showLabels: !0,
                            visibility: {
                                P: Ye,
                                "S1/R1": Ye,
                                "S2/R2": Ye,
                                "S3/R3": Ye,
                                "S4/R4": Ye,
                                "S5/R5": Ye
                            },
                            colors: {
                                P: Ce,
                                "S1/R1": Ce,
                                "S2/R2": Ce,
                                "S3/R3": Ce,
                                "S4/R4": Ce,
                                "S5/R5": Ce
                            },
                            widths: {
                                P: 1,
                                "S1/R1": 1,
                                "S2/R2": 1,
                                "S3/R3": 1,
                                "S4/R4": 1,
                                "S5/R5": 1
                            }
                        }
                    }
                }
                if (void 0 === TradingView.defaultProperties["study_ZigZag@tv-basicstudies"] && (TradingView.defaultProperties["study_ZigZag@tv-basicstudies"] = {
                        color: P,
                        linewidth: 2
                    }), void 0 === TradingView.defaultProperties["study_ElliottWave@tv-basicstudies"] && (TradingView.defaultProperties["study_ElliottWave@tv-basicstudies"] = {
                        inputs: {},
                        level0: o(U, !1),
                        level1: o("#008000", !1),
                        level2: o("#0000ff", !1),
                        level3: o("#ff00ff", !1),
                        level4: o("#0080ff", !0),
                        level5: o(U, !0),
                        level6: o("#008000", !0),
                        level7: o("#0000ff", !0),
                        level8: o("#ff00ff", !0)
                    }), void 0 === TradingView.defaultProperties["study_LinearRegression@tv-basicstudies"] && (TradingView.defaultProperties["study_LinearRegression@tv-basicstudies"] = {
                        styles: {
                            upLine: {
                                display: v.All,
                                color: x,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1
                            },
                            downLine: {
                                display: v.All,
                                color: x,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1
                            },
                            baseLine: {
                                display: v.All,
                                color: J,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1
                            },
                            extendLines: !0,
                            showPearsons: !0,
                            backgroundColor: "rgba(153, 21, 21, 0.3)",
                            transparency: 70
                        }
                    }), void 0 === TradingView.defaultProperties["study_Compare@tv-basicstudies"] && (TradingView.defaultProperties["study_Compare@tv-basicstudies"] = {
                        minTick: "default"
                    }), void 0 === TradingView.defaultProperties["study_Overlay@tv-basicstudies"]) {
                    TradingView.defaultProperties["study_Overlay@tv-basicstudies"] = {
                        style: a.STYLE_LINE,
                        allowExtendTimeScale: !1,
                        showPriceLine: !1,
                        minTick: "default",
                        candleStyle: {
                            upColor: "#6ba583",
                            downColor: "#d75442",
                            drawWick: !0,
                            drawBorder: !0,
                            drawBody: !0,
                            borderColor: "#378658",
                            borderUpColor: "#225437",
                            borderDownColor: "#5b1a13",
                            wickColor: "#737375",
                            wickUpColor: "#737375",
                            wickDownColor: "#737375",
                            barColorsOnPrevClose: !1
                        },
                        hollowCandleStyle: {
                            upColor: "#6ba583",
                            downColor: "#d75442",
                            drawWick: !0,
                            drawBorder: !0,
                            drawBody: !0,
                            borderColor: "#378658",
                            borderUpColor: "#225437",
                            borderDownColor: "#5b1a13",
                            wickColor: "#737375",
                            wickUpColor: "#737375",
                            wickDownColor: "#737375",
                            barColorsOnPrevClose: !1
                        },
                        barStyle: {
                            upColor: "#6ba583",
                            downColor: "#d75442",
                            barColorsOnPrevClose: !1,
                            dontDrawOpen: !1,
                            thinBars: !0
                        },
                        lineStyle: {
                            color: fe,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            linewidth: 2,
                            priceSource: "close",
                            styleType: a.STYLE_LINE_TYPE_SIMPLE
                        },
                        areaStyle: {
                            color1: P,
                            color2: P,
                            linecolor: P,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            linewidth: 2,
                            priceSource: "close",
                            transparency: 95
                        },
                        baselineStyle: {
                            baselineColor: Ae,
                            topFillColor1: Ne,
                            topFillColor2: Ne,
                            bottomFillColor1: ze,
                            bottomFillColor2: ze,
                            topLineColor: _e,
                            bottomLineColor: Oe,
                            topLineWidth: 2,
                            bottomLineWidth: 2,
                            priceSource: "close",
                            transparency: 50,
                            baseLevelPercentage: 50
                        },
                        hiloStyle: {
                            color: P,
                            showBorders: !0,
                            borderColor: P,
                            showLabels: !0,
                            labelColor: P,
                            drawBody: !0
                        },
                        columnStyle: {
                            upColor: i(de, 50),
                            downColor: i(Z, 50),
                            barColorsOnPrevClose: !0,
                            priceSource: "close"
                        },
                        styles: {
                            open: {
                                display: v.All,
                                color: U,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0
                            },
                            high: {
                                display: v.All,
                                color: U,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0
                            },
                            low: {
                                display: v.All,
                                color: U,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0
                            },
                            close: {
                                display: v.All,
                                color: U,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: u.Line,
                                histogramBase: 0
                            }
                        }
                    }
                }
                for (var We = e.split("."), Fe = TradingView.defaultProperties, He = 0; He < We.length; He++) Fe && (Fe = Fe[We[He]]);
                return null != Fe ? TradingView.clone(Fe) : {}
            };

            function Ye(e, o, l, r, t) {
                if (r)
                    for (var i in r) {
                        var n = i.split("."),
                            a = c(n[0]),
                            s = void 0 !== t && t === n[0];
                        0 !== n.length && s && (a = c((n = n.slice(1))[0])), 0 !== n.length && e.hasOwnProperty(a) ? d(e, n, r[i]) || u(i) : s && u(i)
                    }

                function c(e) {
                    return o && o[e] ? o[e] : e
                }

                function d(e, o, l, r) {
                    var t = c(o[0]);
                    return !!e.hasOwnProperty(t) && (o.length > 1 ? d(e[t], o.slice(1), l) : (e[t] && e[t].setValue ? e[t].setValue(l) : e[t] = l, !0))
                }

                function u(e) {
                    l || S.logWarn("Path `" + e + "` does not exist.")
                }
            }

            function Ve(e, o, l, r) {
                window.__defaultsOverrides && Ye(e, o, l, window.__defaultsOverrides, r)
            }

            function We(e, o) {
                window.__settingsOverrides && Ye(e, null, !1, window.__settingsOverrides, o)
            }

            function Me() {
                var e = /^linetool.+/;
                Object.keys(TradingView.defaultProperties).forEach((function(o) {
                    e.test(o) && Ve(TradingView.defaultProperties[o], null, !1, o)
                }))
            }

            function Fe(e, o) {
                return o ? function(e, o) {
                    var l = Re(e);
                    if (!window._UNIT_TESTS) {
                        var r = TradingView.clone(TVSettings.getJSON(e, null));
                        if (function(e) {
                                var o = new Set(["linetoolregressiontrend"]);
                                return e.startsWith("study_") || o.has(e)
                            }(e) && r && function(e) {
                                if (!e) return !1;
                                e = e.toString();
                                var o = new RegExp("\\d+").exec(e);
                                return null !== o && o[0] === e
                            }(r.version)) {
                            var t = r.inputs,
                                i = o.updateStudyInputs(r.id, r.version, "last", t, null);
                            r.inputs = i, r = o.updateStudyState(r, r)
                        }
                        TradingView.merge(l, r), We(l, e)
                    }
                    return l
                }(e, o) : function(e) {
                    var o = Re(e);
                    if (!window._UNIT_TESTS) {
                        var l = TradingView.clone(TVSettings.getJSON(e, null));
                        if (l) {
                            TradingView.merge(o, l);
                            const r = e.split(".");
                            We(o, void 0 === r[1] ? e : r[1])
                        }
                    }
                    return o
                }(e)
            }
            Fe.create = function(e, o) {
                    if (o) {
                        var l = Re(e);
                        TradingView.defaultProperties[e] = Object.assign(o, l)
                    }
                }, Fe.remove = function(e) {
                    TradingView.defaultProperties[e] = void 0
                },
                TradingView.saveDefaults = function(e, o) {
                    void 0 === o ? TVSettings.remove(e) : TVSettings.setJSON(e, o)
                }, TradingView.factoryDefaults = Re, window.applyDefaultOverridesToLinetools = Me, window.applyDefaultsOverrides = Ve, window.applyPropertiesOverrides = Ye, window.defaults = Fe, o.applyDefaultOverridesToLinetools = Me, o.applyDefaultsOverrides = Ve, o.applyPropertiesOverrides = Ye, o.defaults = Fe, o.factoryDefaults = Re, o.saveDefaults = TradingView.saveDefaults
        },
        781995: (e, o, l) => {
            var r, t;
            l.d(o, {
                    PlDisplay: () => r,
                    TradingSourcesHorizontalAlignment: () => t,
                    tradingPreferencesDefault: () => i,
                    CustomSourceLayer: () => n
                }),
                function(e) {
                    e[e.Money = 0] = "Money", e[e.Pips = 1] = "Pips", e[e.Percentage = 2] = "Percentage"
                }(r || (r = {})),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right"
                }(t || (t = {}));
            const i = {
                showPositions: !1,
                positionPL: {
                    visibility: !1,
                    display: r.Money
                },
                bracketsPL: {
                    visibility: !1,
                    display: r.Money
                },
                showOrders: !1,
                showExecutions: !1,
                showExecutionsLabels: !1,
                showReverse: !1,
                extendLeft: !1,
                lineLength: 0,
                horizontalAlignment: t.Right,
                lineWidth: 0,
                lineStyle: 0
            };
            var n;
            ! function(e) {
                e[e.Background = 0] = "Background", e[e.Foreground = 1] = "Foreground", e[e.Topmost = 2] = "Topmost"
            }(n || (n = {}))
        },
        813580: (e, o, l) => {
            var r;
            l.d(o, {
                    LineToolBarsPatternMode: () => r
                }),
                function(e) {
                    e[e.Bars = 0] = "Bars", e[e.Line = 1] = "Line", e[e.OpenClose = 2] = "OpenClose", e[e.LineOpen = 3] = "LineOpen", e[e.LineHigh = 4] = "LineHigh", e[e.LineLow = 5] = "LineLow", e[e.LineHL2 = 6] = "LineHL2"
                }(r || (r = {}))
        },
        278142: (e, o, l) => {
            var r;
            l.d(o, {
                    LineToolPitchforkStyle: () => r
                }),
                function(e) {
                    e[e.Original = 0] = "Original", e[e.Schiff = 1] = "Schiff", e[e.Inside = 2] = "Inside", e[e.Schiff2 = 3] = "Schiff2"
                }(r || (r = {}))
        },
        359266: (e, o, l) => {
            var r;
            l.d(o, {
                    MagnetMode: () => r
                }),
                function(e) {
                    e[e.WeakMagnet = 0] = "WeakMagnet", e[e.StrongMagnet = 1] = "StrongMagnet"
                }(r || (r = {}))
        },
        963985: (e, o, l) => {
            var r;
            l.d(o, {
                    LineEnd: () => r
                }),
                function(e) {
                    e[e.Normal = 0] = "Normal", e[e.Arrow = 1] = "Arrow", e[e.Circle = 2] = "Circle"
                }(r || (r = {}))
        },
        950947: (e, o, l) => {
            var r;
            l.d(o, {
                    StatsPosition: () => r
                }),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right"
                }(r || (r = {}))
        },
        734815: (e, o, l) => {
            l.d(o, {
                sessionsPreferencesDefault: () => t
            });
            var r = l(679520);
            const t = {
                graphics: {
                    backgrounds: {
                        outOfSession: {
                            color: r.colorsPalette["color-tv-blue-500"],
                            transparency: 92,
                            visible: !1
                        },
                        preMarket: {
                            color: "#FF9800",
                            transparency: 92,
                            visible: !1
                        },
                        postMarket: {
                            color: r.colorsPalette["color-tv-blue-500"],
                            transparency: 92,
                            visible: !1
                        }
                    },
                    vertlines: {
                        sessBreaks: {
                            color: "#4985e7",
                            style: 2,
                            visible: !1,
                            width: 1
                        }
                    }
                }
            }
        },
        563346: (e, o, l) => {
            var r;
            l.d(o, {
                    StoriesTimeLineItemType: () => r
                }),
                function(e) {
                    e[e.Image = 0] = "Image", e[e.Emoji = 1] = "Emoji"
                }(r || (r = {}))
        },
        418458: (e, o, l) => {
            var r, t, i;

            function n(e) {
                return "line" === e.type
            }

            function a(e) {
                return "shapes" === e.type
            }

            function s(e) {
                return "chars" === e.type
            }

            function c(e) {
                return "arrows" === e.type
            }

            function d(e) {
                return "data" === e.type
            }

            function u(e) {
                return "dataoffset" === e.type
            }

            function v(e) {
                return "ohlc_open" === e.type
            }

            function h(e) {
                return "ohlc_high" === e.type
            }

            function b(e) {
                return "ohlc_low" === e.type
            }

            function g(e) {
                return "ohlc_close" === e.type
            }

            function w(e) {
                return v(e) || h(e) || b(e) || g(e)
            }

            function L(e) {
                return "colorer" === e.type && "palette" in e
            }

            function y(e) {
                return "colorer" === e.type && !("palette" in e)
            }

            function p(e) {
                return "colorer" === e.type
            }

            function C(e) {
                return "bar_colorer" === e.type
            }

            function f(e) {
                return "bg_colorer" === e.type
            }

            function S(e) {
                return "text_colorer" === e.type
            }

            function E(e) {
                return "ohlc_colorer" === e.type
            }

            function k(e) {
                return "wick_colorer" === e.type
            }

            function T(e) {
                return "border_colorer" === e.type
            }

            function B(e) {
                return "up_colorer" === e.type
            }

            function P(e) {
                return "down_colorer" === e.type
            }

            function m(e) {
                return "alertcondition" === e.type
            }

            function x(e) {
                return n(e) || a(e) || s(e) || c(e)
            }

            function I(e) {
                return "Plot" !== e
            }

            function D(e) {
                return "ohlc_bars" === e.plottype
            }

            function A(e) {
                return "ohlc_candles" === e.plottype
            }

            function _(e) {
                return p(e) || C(e) || f(e) || d(e) || u(e) || E(e) || m(e) || B(e) || P(e) || T(e) || k(e) || S(e)
            }

            function N(e) {
                return p(e) || S(e) || C(e) || d(e) || u(e) || E(e) || k(e) || T(e) || B(e) || P(e) || m(e)
            }
            l.r(o), l.d(o, {
                    LineStudyPlotStyle: () => r,
                    STUDYPLOTDISPLAYTARGET: () => t,
                    isLinePlot: () => n,
                    isShapesPlot: () => a,
                    isCharsPlot: () => s,
                    isArrowsPlot: () => c,
                    isDataPlot: () => d,
                    isDataOffsetPlot: () => u,
                    isOhlcOpenPlot: () => v,
                    isOhlcHighPlot: () => h,
                    isOhlcLowPlot: () => b,
                    isOhlcClosePlot: () => g,
                    isOhlcPlot: () => w,
                    isPaletteColorerPlot: () => L,
                    isRgbaColorerPlot: () => y,
                    isColorerPlot: () => p,
                    isBarColorerPlot: () => C,
                    isBgColorerPlot: () => f,
                    isTextColorerPlot: () => S,
                    isOhlcColorerPlot: () => E,
                    isCandleWickColorerPlot: () => k,
                    isCandleBorderColorerPlot: () => T,
                    isUpColorerPlot: () => B,
                    isDownColorerPlot: () => P,
                    isAlertConditionPlot: () => m,
                    isPlotSupportDisplay: () => x,
                    isPlotTitleDefined: () => I,
                    isOhlcPlotStyleBars: () => D,
                    isOhlcPlotStyleCandles: () => A,
                    PlotSymbolSize: () => i,
                    isPlotWithTechnicalValues: () => _,
                    isNonVisualPlot: () => N
                }),
                function(e) {
                    e[e.Line = 0] = "Line", e[e.Histogram = 1] = "Histogram", e[e.Cross = 3] = "Cross", e[e.Area = 4] = "Area", e[e.Columns = 5] = "Columns", e[e.Circles = 6] = "Circles", e[e.LineWithBreaks = 7] = "LineWithBreaks", e[e.AreaWithBreaks = 8] = "AreaWithBreaks", e[e.StepLine = 9] = "StepLine", e[e.StepLineWithDiamonds = 10] = "StepLineWithDiamonds"
                }(r || (r = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Pane = 1] = "Pane", e[e.DataWindow = 2] = "DataWindow", e[e.PriceScale = 4] = "PriceScale", e[e.StatusLine = 8] = "StatusLine", e[e.All = 15] = "All"
                }(t || (t = {})),
                function(e) {
                    e.Auto = "auto", e.Tiny = "tiny", e.Small = "small", e.Normal = "normal", e.Large = "large", e.Huge = "huge"
                }(i || (i = {}))
        },
        121195: (e, o, l) => {
            l.r(o), l.d(o, {
                MINUTE_SPAN: () => r,
                HOUR_SPAN: () => t,
                DAY_SPAN: () => i,
                WEEK_SPAN: () => n,
                MONTH_SPAN: () => a,
                YEAR_SPAN: () => s,
                DEFAULT_BAR_SPACING: () => c
            });
            const r = 20,
                t = 30,
                i = 40,
                n = 50,
                a = 60,
                s = 70,
                c = 6
        }
    }
]);