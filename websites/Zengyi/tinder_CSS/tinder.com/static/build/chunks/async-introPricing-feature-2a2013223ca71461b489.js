/*! For license information please see async-introPricing-feature-2a2013223ca71461b489.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [17559], {
        629579: (e, i, t) => {
            t.d(i, {
                Fl: () => a,
                U8: () => o,
                YY: () => r,
                b2: () => l
            });
            var n = t(799327),
                d = t(469379);
            const o = (0, n.PH)(d.SET_INTRO_PRICE_PAYWALL_VIEWED, (e => e)),
                a = (0, n.PH)(d.SET_INTRO_PRICE_PAYWALL_VIEWED_SUCCESS, (e => e)),
                l = (0, n.PH)(d.SET_INTRO_PRICE_PAYWALL_VIEWED_ERROR),
                r = (0, n.PH)(d.SET_INTRO_PRICE_NOTIFICATION_SHOWN)
        },
        594559: (e, i, t) => {
            t.r(i), t.d(i, {
                loadIntroPriceDataSaga: () => w,
                setIntroPricePaywallViewedSaga: () => g
            });
            var n = t(13241),
                d = t(259668),
                o = t(235430),
                a = t(517727),
                l = t(911654),
                r = t(3088),
                s = t(661996),
                c = t(568343),
                P = t(915759),
                I = t(799327),
                y = t(463608),
                E = t(20115),
                _ = t(233874),
                S = t(83453),
                R = t(629579);
            const b = new(t(371948).yX)({}, {
                    processResult: {
                        viewedAt: "viewedAt",
                        expiresAt: "expiresAt"
                    }
                }),
                g = (0, d.bi)((function*(e) {
                    const i = yield(0, n.RE)(yield(0, n.RE)(o.ds, a.aS, "introPriceViewed"), e.payload), t = yield(0, I.Ff)(i, b);
                    yield(0, n.gz)((0, R.Fl)(t))
                }), {
                    name: "setIntroPricePaywallViewedSaga",
                    * errorHandler() {
                        yield(0, n.gz)((0, R.b2)())
                    }
                }),
                w = (0, d.bi)((function*() {
                    const e = yield(0, n.Ys)(c.qq), i = yield(0, n.Ys)(S.fq), t = yield(0, n.Ys)(S.DL), d = i - Date.now(), o = d > 0 && d < P.dV;
                    e && o && !t && (yield(0, n.gz)((0, R.YY)()), yield(0, n.gz)((0, l.c0)({
                        theme: r.WN,
                        title: [{
                            id: "tinder"
                        }],
                        body: [{
                            id: 1 === e.terms ? "IntroPricing.notificationSubtitleOneMonth" : "IntroPricing.notificationSubtitleSixMonth"
                        }, {
                            discount: e.discountPercentage
                        }],
                        options: {
                            modalType: s.GX,
                            modalProps: {
                                from: _.ye
                            }
                        }
                    })), yield(0, n.gz)((0, y.L)(E.d4)))
                }))
        }
    }
]);