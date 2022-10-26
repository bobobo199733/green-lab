"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [65481], {
        638515: (e, t, n) => {
            n.d(t, {
                OfferButtonMenuItem: () => f
            });
            var r = n(559496),
                a = n(497754),
                o = (n(897116), n(682318)),
                i = n(231039);

            function f(e) {
                const {
                    title: t,
                    href: n,
                    class_name: a,
                    subtitle: i,
                    expiration: f,
                    tabIndex: u,
                    role: c,
                    reference: s
                } = e;
                return r.createElement(r.Fragment, null, Object.keys(e).length > 1 && r.createElement(l, {
                    href: n,
                    className: a,
                    tabIndex: u,
                    role: c,
                    reference: s
                }, r.createElement("span", {
                    className: "tv-header__offer-button-title"
                }, t), r.createElement("small", null, i || (0, o.getTextDurationCurrentOffer)(f))))
            }

            function l(e) {
                return r.createElement("span", {
                    className: a("tv-header__offer-button-container", e.className)
                }, r.createElement("a", {
                    className: "tv-header__offer-button",
                    href: e.href || "",
                    onClick: t => {
                        e.href || (t.preventDefault(), (0, i.showSignModal)({
                            mode: "signup",
                            source: "Go pro page header button"
                        }))
                    },
                    children: e.children,
                    tabIndex: e.tabIndex,
                    ref: e.reference,
                    role: e.role
                }))
            }
        },
        193612: (e, t, n) => {
            n.r(t), n.d(t, {
                offerButtonInit: () => l
            });
            var r = n(559496),
                a = n(587995),
                o = n(638515),
                i = n(588948),
                f = n(376240);

            function l() {
                (0, f.initFromInitData)();
                const e = document.querySelector(".js-offer-button"),
                    t = (0, i.getInitData)().offerButtonInfo;
                !e || window.is_authenticated && "/gopro/" === location.pathname || "/black-friday/" === location.pathname || !t || a.hydrate(r.createElement(o.OfferButtonMenuItem, { ...t
                }), e)
            }
        },
        682318: (e, t, n) => {
            n.d(t, {
                getTextDurationCurrentOffer: () => o,
                getTrialOfferText: () => i
            });
            var r = n(575932),
                a = n(72694);

            function o(e) {
                if (e) {
                    const t = new Date(1e3 * Number(e)),
                        n = new Date,
                        a = Math.ceil((t.getTime() - n.getTime()) / 864e5);
                    return a <= 1 ? r.t("Offer ends today") : r.t("Offer ends in {offerDuration} day", {
                        plural: "Offer ends in {offerDuration} days",
                        count: a
                    }).format({
                        offerDuration: a.toString()
                    })
                }
                return null
            }

            function i() {
                var e, t;
                const n = null === (t = null === (e = window.user.available_offers) || void 0 === e ? void 0 : e[a.OFFERS.trial]) || void 0 === t ? void 0 : t.length;
                return void 0 !== n ? r.t("{days}-day free trial", {
                    plural: "{days}-day free trial",
                    count: n
                }).format({
                    days: n.toString()
                }) : null
            }
        },
        376240: (e, t, n) => {
            n.d(t, {
                initFromInitData: () => o
            });
            var r = n(588948),
                a = n(909740);

            function o() {
                (0, r.updateInitData)();
                const e = (0, r.getInitData)();
                "theme" in e && (0, a.setTheme)(e.theme)
            }
        },
        909740: (e, t, n) => {
            n.r(t), n.d(t, {
                setTheme: () => o,
                watchedTheme: () => a
            });
            var r = n(262325);
            const a = new(n.n(r)());

            function o(e) {
                a.setValue(e)
            }
            a.subscribe((e => {
                ! function(e, t = window) {
                    const n = "theme-" + e,
                        r = t.document.documentElement.classList;
                    for (const e of Array.from(r)) e.startsWith("theme-") && e !== n && r.remove(e);
                    r.add(n)
                }(e, window)
            }))
        }
    }
]);