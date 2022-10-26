"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [23812, 19346], {
        926281: (o, r, e) => {
            var l;
            e.d(r, {
                    PriceAxisLastValueMode: () => l
                }),
                function(o) {
                    o[o.LastPriceAndPercentageValue = 0] = "LastPriceAndPercentageValue", o[o.LastValueAccordingToScale = 1] = "LastValueAccordingToScale"
                }(l || (l = {}))
        },
        721386: (o, r, e) => {
            e.r(r), e.d(r, {
                generateColor: () => t,
                applyAlpha: () => c,
                alphaToTransparency: () => n,
                transparencyToAlpha: () => a,
                applyTransparency: () => i,
                resetTransparency: () => d,
                getLuminance: () => s,
                isHexColor: () => g,
                colorFromBackground: () => u,
                gradientColorAtPercent: () => b,
                isColorDark: () => p,
                rgbaFromInteger: () => h,
                rgbaToInteger: () => m,
                colorToInteger: () => y
            });
            var l = e(724377);

            function t(o, r, e) {
                if (r = r || 0, !g(o)) return e ? (0, l.rgbaToString)((0, l.rgba)((0, l.parseRgb)(o), (0, l.normalizeAlphaComponent)(a(r)))) : o;
                const [t, c, n] = (0, l.parseRgb)(o), i = (0, l.normalizeAlphaComponent)(a(r));
                return (0, l.rgbaToString)([t, c, n, i])
            }

            function c(o, r) {
                return t(o, n(r))
            }

            function n(o) {
                return 100 * (1 - o)
            }

            function a(o) {
                if (o < 0 || o > 100) throw new Error("invalid transparency");
                return 1 - o / 100
            }

            function i(o, r) {
                if ("transparent" === o) return o;
                const e = (0, l.parseRgba)(o),
                    t = e[3];
                return (0, l.rgbaToString)((0, l.rgba)(e[0], e[1], e[2], a(r) * t))
            }

            function d(o) {
                return "transparent" === o || g(o) ? o : (0, l.rgbaToString)((0, l.rgba)((0, l.parseRgb)(o), (0, l.normalizeAlphaComponent)(1)))
            }

            function s(o) {
                const r = (0, l.parseRgb)(o).map((o => (o /= 255) <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4)));
                return Number((.2126 * r[0] + .7152 * r[1] + .0722 * r[2]).toFixed(3))
            }

            function g(o) {
                return 0 === o.indexOf("#")
            }

            function u(o) {
                return "black" === (0, l.rgbToBlackWhiteString)((0, l.parseRgb)(o), 150) ? "#ffffff" : "#000000"
            }

            function b(o, r, e) {
                const [t, c, n, a] = (0, l.parseRgba)(o), [i, d, s, g] = (0, l.parseRgba)(r), u = (0, l.rgba)(Math.round(t + e * (i - t)), Math.round(c + e * (d - c)), Math.round(n + e * (s - n)), a + e * (g - a));
                return (0, l.rgbaToString)(u)
            }

            function p(o) {
                return s(d(o)) < .5
            }

            function h(o) {
                const r = (o = Math.round(o)) % 256;
                o -= r;
                const e = (o /= 256) % 256;
                o -= e;
                const l = (o /= 256) % 256;
                o -= l;
                return `rgba(${r},${e},${l},${(o/=256)/255})`
            }

            function m(o) {
                const r = Math.round(255 * o[3]);
                return o[0] + 256 * o[1] + 65536 * o[2] + 16777216 * r
            }

            function y(o) {
                const r = (0, l.tryParseRgba)(o);
                return null === r ? 0 : m(r)
            }
        },
        484400: (o, r, e) => {
            e.d(r, {
                DEFAULT_THEME: () => l
            });
            const l = "light"
        },
        709353: (o, r, e) => {
            e.d(r, {
                themes: () => i
            });
            var l = e(919346),
                t = e(575932);
            const c = JSON.parse('{"color-bg-primary":"color-cold-gray-850","color-bg-primary-hover":"color-cold-gray-800","color-bg-secondary":"color-cold-gray-900","color-bg-highlight":"color-cold-gray-900","color-bg-scroll-buttons":"color-cold-gray-800","color-legacy-bg-scroll-buttons":"color-cold-gray-550","color-legacy-bg-widget":"color-cold-gray-900","color-text-primary":"color-cold-gray-200","color-text-secondary":"color-cold-gray-450","color-text-tertiary":"color-cold-gray-400","color-text-disabled":"color-cold-gray-650","color-accent-content":"color-white","color-divider":"color-cold-gray-700","color-divider-hover":"color-cold-gray-800","color-divider-secondary":"color-cold-gray-800","color-box-shadow":"color-cold-gray-900","color-active-hover-text":"color-cold-gray-300","color-alert-text":"color-cold-gray-200","color-border":"color-cold-gray-750","color-border-chat-fields":"color-cold-gray-750","color-border-hover":"color-cold-gray-650","color-border-table":"color-cold-gray-800","color-brand":"color-tv-blue-500","color-brand-hover":"color-tv-blue-600","color-brand-active":"color-tv-blue-700","color-button-hover-bg":"color-cold-gray-850","color-chart-page-bg":"color-cold-gray-800","color-common-tooltip-bg":"color-cold-gray-750","color-danger":"color-ripe-red-600","color-danger-hover":"color-ripe-red-500","color-danger-active":"color-ripe-red-400","color-depthrenderer-fill-style":"color-cold-gray-150","color-depthrenderer-stroke-style":"color-cold-gray-650","color-disabled-border-and-color":"color-cold-gray-800","color-disabled-input":"color-cold-gray-750","color-empty-container-message":"color-cold-gray-450","color-highlight-new":"color-tv-blue-a800","color-icons":"color-cold-gray-450","color-input-bg":"color-cold-gray-800","color-input-textarea-readonly":"color-cold-gray-650","color-input-placeholder-text":"color-cold-gray-700","color-input-publish-bg":"color-cold-gray-900","color-item-active-blue":"color-tv-blue-a900","color-item-hover-active-bg":"color-cold-gray-800","color-item-hover-bg":"color-cold-gray-800","color-item-hover-blue":"color-tv-blue-a800","color-item-selected-blue":"color-tv-blue-a800","color-item-active-text":"color-cold-gray-200","color-item-active-bg":"color-tv-blue-500","color-link":"color-tv-blue-500","color-link-hover":"color-tv-blue-600","color-link-active":"color-tv-blue-700","color-list-item":"color-cold-gray-450","color-list-nth-child-bg":"color-cold-gray-850","color-news-highlight":"color-cold-gray-800","color-pane-bg":"color-cold-gray-900","color-pane-secondary-bg":"color-cold-gray-850","color-placeholder":"color-cold-gray-650","color-popup-menu-item-hover-bg":"color-cold-gray-800","color-popup-menu-separator":"color-cold-gray-700","color-row-hover-active-bg":"color-cold-gray-800","color-sb-scrollbar-body-bg":"color-cold-gray-650","color-screener-description":"color-cold-gray-200","color-section-separator-border":"color-cold-gray-750","color-search-button-hover":"color-cold-gray-700","color-separator-table-chat":"color-cold-gray-750","color-success":"color-minty-green-700","color-success-hover":"color-minty-green-600","color-success-active":"color-minty-green-500","color-tag-active-bg":"color-cold-gray-750","color-tag-hover-bg":"color-cold-gray-800","color-text-regular":"color-cold-gray-200","color-toolbar-button-text":"color-cold-gray-300","color-toolbar-button-text-hover":"color-cold-gray-300","color-toolbar-button-text-active":"color-tv-blue-500","color-toolbar-button-text-active-hover":"color-tv-blue-600","color-toolbar-button-background-hover":"color-cold-gray-800","color-toolbar-button-background-secondary-hover":"color-cold-gray-750","color-toolbar-toggle-button-background-active":"color-tv-blue-500","color-toolbar-toggle-button-background-active-hover":"color-tv-blue-600","color-toolbar-toggle-button-icon":"color-cold-gray-650","color-toolbar-interactive-element-text-normal":"color-cold-gray-300","color-toolbar-interactive-element-text-hover":"color-cold-gray-250","color-toolbar-opened-element-bg":"color-cold-gray-800","color-tooltip-bg":"color-cold-gray-750","color-tv-button-checked":"color-cold-gray-500","color-tv-dialog-caption":"color-cold-gray-50","color-tv-dropdown-item-hover-bg":"color-cold-gray-800","color-underlined-text":"color-cold-gray-300","color-widget-pages-bg":"color-cold-gray-900","color-warning":"color-tan-orange-700","color-forex-icon":"color-white","color-list-item-active-bg":"color-tv-blue-500","color-list-item-hover-bg":"color-cold-gray-800","color-list-item-text":"color-cold-gray-200","color-price-axis-label-back":"color-cold-gray-800","color-price-axis-label-text":"color-cold-gray-500","color-price-axis-gear":"color-cold-gray-500","color-price-axis-gear-hover":"color-cold-gray-400","color-price-axis-highlight":"color-cold-gray-800","color-bid":"color-tv-blue-500","color-scroll-bg":"color-cold-gray-750","color-scroll-border":"color-cold-gray-850","color-widget-border":"color-cold-gray-800","color-scroll-buttons-arrow":"color-white","color-control-intent-default":"color-cold-gray-650","color-control-intent-success":"color-minty-green-600","color-control-intent-primary":"color-tv-blue-500","color-control-intent-warning":"color-tan-orange-500","color-control-intent-danger":"color-ripe-red-700","color-growing":"color-minty-green-500","color-falling":"color-ripe-red-500","color-goto-label-background":"color-cold-gray-650","color-pre-market":"color-tan-orange-600","color-pre-market-bg":"color-tan-orange-400","color-post-market":"color-tv-blue-500","color-post-market-bg":"color-tv-blue-400","color-market-open":"color-minty-green-500","color-market-open-bg":"color-minty-green-400","color-market-closed":"color-cold-gray-400","color-market-holiday":"color-cold-gray-400","color-invalid-symbol":"color-ripe-red-400","color-invalid-symbol-hover":"color-ripe-red-500","color-replay-mode":"color-tv-blue-500","color-replay-mode-icon":"color-tv-blue-50","color-replay-mode-hover":"color-tv-blue-600","color-notaccurate-mode":"color-berry-pink-700","color-notaccurate-mode-bg":"color-berry-pink-400","color-delay-mode":"color-tan-orange-700","color-delay-mode-bg":"color-tan-orange-400","color-eod-mode":"color-grapes-purple-700","color-eod-mode-bg":"color-grapes-purple-400","color-data-problem":"color-ripe-red-600","color-data-problem-bg":"color-ripe-red-400","color-data-problem-hover":"color-ripe-red-500","color-list-item-bg-highlighted":"color-tv-blue-a900","color-list-item-bg-selected":"color-tv-blue-a800","color-list-item-bg-highlighted-hover":"color-tv-blue-a800","color-list-item-bg-selected-hover":"color-tv-blue-a700","color-screener-header-bg":"color-cold-gray-850","color-screener-header-bg-hover":"color-cold-gray-800","color-overlay":"color-cold-gray-950","color-boost-button-text":"color-tv-blue-300","color-card-border":"color-cold-gray-700","color-card-border-hover":"color-cold-gray-600","color-background-special-primary":"color-black","color-stroke-special-primary":"color-cold-gray-800","color-selection-bg":"color-tv-blue-a700"}'),
                n = JSON.parse('{"color-toolbar-button-text-active":"color-seeking-alpha-brand"}');
            var a = e(679520);
            const i = {
                [l.StdTheme.Light]: {
                    name: l.StdTheme.Light,
                    label: () => (0, t.t)("Light", {
                        context: "colorThemeName"
                    }),
                    order: 2,
                    getThemedColor: o => (0, a.getHexColorByName)(o)
                },
                [l.StdTheme.Dark]: {
                    name: l.StdTheme.Dark,
                    label: () => (0, t.t)("Dark", {
                        context: "colorThemeName"
                    }),
                    order: 1,
                    getThemedColor: o => {
                        const r = c[o] || o;
                        return (0, a.getHexColorByName)(r)
                    }
                }
            };
            i.sa = {
                isPrivate: !0,
                noChartTheme: !0,
                name: "sa",
                getThemedColor: o => {
                    const r = n[o] || o;
                    return (0, a.getHexColorByName)(r)
                }
            }
        },
        919346: (o, r, e) => {
            e.r(r), e.d(r, {
                StdTheme: () => a.StdTheme,
                getStdChartTheme: () => s,
                getStdThemeNames: () => d,
                getThemeNameIfStdTheme: () => b,
                isStdTheme: () => u,
                translateThemeName: () => g
            });
            var l = e(575932),
                t = e(724377);
            const c = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#131722","lineColor":"rgba(42, 46, 57, 0)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"horzGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#ffffff","backgroundGradientStartColor":"#ffffff","backgroundGradientEndColor":"#ffffff","separatorColor":"#E0E3EB"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#B2B5BE","candleStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#737375","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"haStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#737375","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"barStyle":{"downColor":"#F23645","upColor":"#089981"},"pnfStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"baselineStyle":{"baselineColor":"#758696","topFillColor1":"rgba(8, 153, 129, 0.28)","topFillColor2":"rgba(8, 153, 129, 0.05)","bottomFillColor1":"rgba(242, 54, 69, 0.05)","bottomFillColor2":"rgba(242, 54, 69, 0.28)","topLineColor":"#089981","bottomLineColor":"#F23645"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"hiloStyle":{"color":"#2962FF","borderColor":"#2962FF","labelColor":"#2962FF"},"columnStyle":{"upColor":"rgba(8, 153, 129, 0.5)","downColor":"rgba(242, 54, 69, 0.5)","priceSource":"close"},"renkoStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae","wickUpColor":"#089981","wickDownColor":"#F23645"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"pbStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae"},"rangeStyle":{"upColor":"#089981","downColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"}}}}'),
                n = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#B2B5BE","lineColor":"rgba(240, 243, 250, 0)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"horzGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#131722","backgroundGradientStartColor":"#181C27","backgroundGradientEndColor":"#131722","backgroundType":"gradient","separatorColor":"#2A2E39"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#5d606b","candleStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#B5B5B8","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"haStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#B5B5B8","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"barStyle":{"downColor":"#F23645","upColor":"#089981"},"pnfStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#336854","downColorProjection":"#7f323f"},"baselineStyle":{"baselineColor":"#758696","topFillColor1":"rgba(8, 153, 129, 0.28)","topFillColor2":"rgba(8, 153, 129, 0.05)","bottomFillColor1":"rgba(242, 54, 69, 0.05)","bottomFillColor2":"rgba(242, 54, 69, 0.28)","topLineColor":"#089981","bottomLineColor":"#F23645"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"hiloStyle":{"color":"#2962FF","borderColor":"#2962FF","labelColor":"#2962FF"},"columnStyle":{"upColor":"rgba(8, 153, 129, 0.5)","downColor":"rgba(242, 54, 69, 0.5)","priceSource":"close"},"renkoStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f","wickUpColor":"#089981","wickDownColor":"#F23645"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#336854","downColorProjection":"#7f323f"},"pbStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f"},"rangeStyle":{"upColor":"#089981","downColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f"}}}}');
            var a = e(61499);

            function i() {
                return {
                    [a.StdTheme.Light]: JSON.parse(JSON.stringify(c)),
                    [a.StdTheme.Dark]: JSON.parse(JSON.stringify(n))
                }
            }

            function d() {
                return [a.StdTheme.Light, a.StdTheme.Dark]
            }

            function s(o) {
                return i()[o]
            }

            function g(o) {
                return {
                    [a.StdTheme.Light]: l.t("Light", {
                        context: "colorThemeName"
                    }),
                    [a.StdTheme.Dark]: l.t("Dark", {
                        context: "colorThemeName"
                    })
                }[o] || o
            }

            function u(o) {
                const r = i();
                return d().some((e => p(r[e], o)))
            }

            function b(o) {
                const r = i(),
                    e = d();
                for (const l of e)
                    if (p(r[l], o)) return l;
                return null
            }

            function p(o, r) {
                let e = o.content === r.content;
                return function(o = {}, r) {
                    try {
                        h(o, [], r)
                    } catch (o) {
                        return
                    }
                }(o.content, ((o, l) => {
                    const c = function(o, r = {}) {
                        let e = r;
                        for (let r = 0; r < o.length; r++) {
                            if (!e || "object" != typeof e) return;
                            e = e[o[r]]
                        }
                        if ("string" == typeof e || "number" == typeof e) return e;
                        return
                    }(o, r.content);
                    return e = function(o, r) {
                        if (o === r) return !0;
                        if ("string" != typeof o || "string" != typeof r) return !1;
                        try {
                            return function(o, r) {
                                return Math.hypot(o[3] * o[0] - r[3] * r[0], o[3] * o[1] - r[3] * r[1], o[3] * o[2] - r[3] * r[2], 255 * o[3] - 255 * r[3]) < 48
                            }((0, t.parseRgba)(o), (0, t.parseRgba)(r))
                        } catch (o) {}
                        return !1
                    }(l, c), !e
                })), e
            }

            function h(o, r, e) {
                for (const l in o)
                    if (o.hasOwnProperty(l)) {
                        const t = r.concat(l);
                        if ("object" == typeof o[l]) h(o[l], t, e);
                        else if (e(t, o[l])) throw new Error("exit")
                    }
            }
        },
        61499: (o, r, e) => {
            var l;
            e.d(r, {
                    StdTheme: () => l
                }),
                function(o) {
                    o.Light = "light", o.Dark = "dark"
                }(l || (l = {}))
        },
        902981: (o, r, e) => {
            e.d(r, {
                getThemeFromUserSettings: () => c,
                saveThemeInUserSettings: () => n
            });
            var l = e(62802);

            function t(o) {
                const r = function() {
                        const o = location.hostname.split(".").filter(Boolean);
                        return o.every(isFinite) ? location.host : o.slice(-2).join(".")
                    }(),
                    e = void 0 === o ? -1 : 3e8;
                document.cookie = `theme=${o};path=/;domain=${r};max-age=${e}`
            }

            function c() {
                return /(?:^|;)\s*theme=(dark|light)(?:;|$)|$/.exec(document.cookie)[1] || (0, l.getValue)("current_theme.name") || null
            }

            function n(o) {
                t(o), (0, l.setValue)("current_theme.name", o, {
                    forceFlush: !0
                })
            }
        },
        440135: (o, r, e) => {
            e.r(r), e.d(r, {
                DEFAULT_THEME: () => u.DEFAULT_THEME,
                extractThemeFromModel: () => L,
                getCurrentTheme: () => h,
                getStdTheme: () => k,
                getStdThemeNames: () => S,
                getStdThemedValue: () => P,
                getTheme: () => w,
                getThemeNames: () => T,
                getThemedColor: () => m,
                isPublicTheme: () => p,
                isStdTheme: () => U,
                isStdThemeName: () => F,
                isStdThemedDefaultValue: () => x,
                isThemeExist: () => E,
                loadTheme: () => y,
                removeTheme: () => j,
                restoreTheme: () => f,
                saveTheme: () => D,
                savedThemeName: () => C,
                syncTheme: () => v,
                themes: () => b.themes,
                translateStdThemeName: () => N
            });
            var l = e(724377),
                t = e(385518),
                c = e(902981),
                n = e(86674);
            const a = (0, e(911905).getLogger)("Themes.Provider");
            let i = null;

            function d(o) {
                return (0, n.fetch)("/theme/?themeName=" + encodeURIComponent(o), {
                    credentials: "include",
                    method: "GET"
                }).then((o => o.json())).then((o => {
                    const r = {};
                    return o.content && (r.content = JSON.parse(o.content)), r
                }))
            }
            var s = e(919346),
                g = e(909740),
                u = e(484400),
                b = e(709353);

            function p(o) {
                return !o.isPrivate
            }

            function h() {
                return b.themes[g.watchedTheme.value()] || b.themes[u.DEFAULT_THEME]
            }

            function m(o) {
                return h().getThemedColor(o)
            }
            async function y(o, r) {
                const {
                    themeName: e,
                    standardTheme: l,
                    syncState: c = !0,
                    noUndo: n = !1,
                    applyOverrides: a = !1
                } = r, i = await (l ? Promise.resolve(k(e)) : w(e)), d = !l;
                if (void 0 !== i.content) {
                    const r = !l;
                    a && (void 0 !== (s = i.content).chartProperties && (0, t.applyDefaultsOverrides)(s.chartProperties), void 0 !== s.mainSourceProperties && (0, t.applyDefaultsOverrides)(s.mainSourceProperties, void 0, !0, "mainSeriesProperties")), await o.applyTheme({
                        theme: i.content,
                        onlyActiveChart: r,
                        restoreNonThemeDefaults: d,
                        themeName: e,
                        standardTheme: l,
                        syncState: c,
                        noUndo: n
                    })
                }
                var s;
                return i
            }

            function f() {
                (0, g.setTheme)((0, c.getThemeFromUserSettings)() || u.DEFAULT_THEME)
            }

            function C() {
                return (0, c.getThemeFromUserSettings)()
            }

            function v() {
                (0, c.saveThemeInUserSettings)(h().name)
            }

            function w(o) {
                return d(o)
            }

            function T() {
                return i || (0, n.fetch)("/themes/", {
                    credentials: "include",
                    method: "GET"
                }).then((o => (i = o.json(), i)))
            }

            function S() {
                return s.getStdThemeNames()
            }

            function F(o) {
                return S().includes(o)
            }

            function k(o) {
                return s.getStdChartTheme(o) || {
                    content: void 0
                }
            }

            function P(o, r) {
                const e = r || h().name,
                    l = s.getStdChartTheme(e),
                    t = 0 !== o.length && o.split(".");
                return l && l.content && t ? t.reduce(((o, r) => o[r]), l.content) : null
            }

            function x(o, r, e) {
                const t = P(o, e);
                return null !== t && (0, l.areEqualRgba)((0, l.parseRgba)(t), (0, l.parseRgba)(String(r)))
            }

            function D(o, r) {
                return function(o, r) {
                    const e = new FormData;
                    return e.append("content", JSON.stringify(r)), e.append("name", o), i = null, (0, n.fetch)("/save-theme/", {
                        credentials: "include",
                        method: "POST",
                        body: e
                    }).then((o => o.json()), (o => a.logError(o)))
                }(o, r)
            }

            function j(o) {
                return function(o) {
                    const r = new FormData;
                    return r.append("name", o), i = null, (0, n.fetch)("/remove-theme/", {
                        credentials: "include",
                        method: "POST",
                        body: r
                    }).then((o => o.json()), (o => a.logError(o)))
                }(o)
            }

            function E(o) {
                return function(o) {
                    return d(o).then((o => Boolean(o.content)))
                }(o)
            }

            function N(o) {
                return s.translateThemeName(o)
            }

            function U(o) {
                return s.isStdTheme(o)
            }

            function L(o) {
                return {
                    content: {
                        chartProperties: {
                            paneProperties: o.model().properties().childs().paneProperties.state(),
                            scalesProperties: o.model().properties().childs().scalesProperties.state()
                        },
                        sessions: o.model().sessions().properties().state(),
                        mainSourceProperties: o.model().mainSeries().properties().state(),
                        version: o.model().version()
                    }
                }
            }
        },
        909740: (o, r, e) => {
            e.r(r), e.d(r, {
                setTheme: () => c,
                watchedTheme: () => t
            });
            var l = e(262325);
            const t = new(e.n(l)());

            function c(o) {
                t.setValue(o)
            }
            t.subscribe((o => {
                ! function(o, r = window) {
                    const e = "theme-" + o,
                        l = r.document.documentElement.classList;
                    for (const o of Array.from(l)) o.startsWith("theme-") && o !== e && l.remove(o);
                    l.add(e)
                }(o, window)
            }))
        }
    }
]);