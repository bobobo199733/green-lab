"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [96528], {
        966966: (e, t, a) => {
            a.r(t), a.d(t, {
                display: () => d,
                FeedPlacement: () => n
            });
            var i = a(137934),
                r = a(579917);
            const _ = {
                    lightLtr: "/21803441042/ideas_stream_ad_unit",
                    lightRtl: "/21803441042/ideas_stream_ad_unit/ideas_stream_ad_unit_rtl",
                    darkLtr: "/21803441042/ideas_stream_ad_unit/ideas_stream_ad_unit",
                    darkRtl: "/21803441042/ideas_stream_ad_unit/ideas_stream_ad_unit_rtl_dark"
                },
                s = {
                    lightLtr: "/21803441042/new_main_ideas_stream_ad_unit",
                    lightRtl: "/21803441042/new_main_ideas_stream_ad_unit/new_main_ideas_stream_ad_unit_rtl",
                    darkLtr: "/21803441042/new_main_ideas_stream_ad_unit/new_main_ideas_stream_ad_unit_dark",
                    darkRtl: "/21803441042/new_main_ideas_stream_ad_unit/new_main_ideas_stream_ad_unit_rtl_dark"
                };
            async function d(e, t, a) {
                const r = await async function(e) {
                    return {
                        placementId: "feed",
                        adUnitPath: await (0, i.getAdUnitPath)(e ? s : _),
                        size: "fluid",
                        optDiv: "div-gpt-ad-1579255427657-0"
                    }
                }(a);
                if (!(0, i.isEnabled)()) return void(t && t(!0));
                const d = new IntersectionObserver((a => {
                    for (const _ of a) _.isIntersecting && (e.setAttribute("id", r.optDiv), (0, i.displaySlot)(r, (e => {
                        t && t(e), (0, i.trackAdDialogEvent)(i.AdUnit.IdeasStream, i.Placement.Feeds, "show", !e)
                    })), d.unobserve(e))
                }), {
                    rootMargin: "50px",
                    threshold: 0
                });
                d.observe(e)
            }
            class n {
                constructor() {
                    this._ready = (0, r.createDeferredPromise)()
                }
                load(e, t) {
                    d(e, (e => {
                        this._ready.resolve(e), this._ready = (0, r.createDeferredPromise)()
                    }), t)
                }
                ready() {
                    return this._ready.promise
                }
            }
        }
    }
]);