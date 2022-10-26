"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [99140], {
        130179: (e, a, t) => {
            t.r(a), t.d(a, {
                openCoinsDialogOnLoad: () => i
            });
            var n = t(778314),
                r = t(74349),
                o = t(763920);

            function i() {
                const e = function() {
                    const e = window.location.hash.slice(1);
                    if (e && !e.includes("/")) switch (e) {
                        case "coins-redeem":
                            return {
                                tab: r.MainTab.Redeem
                            };
                        case "referred-friends":
                            return {
                                tab: r.MainTab.Refer
                            };
                        case "get-coins":
                            return {
                                tab: r.MainTab.GetCoins
                            };
                        case "coins-stats":
                            return {
                                tab: r.MainTab.History
                            };
                        case "about-coins":
                            return {
                                tab: r.MainTab.About
                            };
                        case "partner-program":
                            return {
                                tab: r.MainTab.PartnerProgram,
                                bubble: o.PartnerProgramPages.AboutPartnerProgram
                            }
                    } else if (e && e.includes("/")) {
                        const a = e.split("/").pop();
                        if ("partner-program" !== e.slice(0, e.indexOf("/"))) return;
                        switch (a) {
                            case "links":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: o.PartnerProgramPages.Links
                                };
                            case "clicks":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: o.PartnerProgramPages.Clicks
                                };
                            case "reports":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: o.PartnerProgramPages.Reports
                                };
                            case "finance":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: o.PartnerProgramPages.Finance
                                };
                            case "about":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: o.PartnerProgramPages.AboutPartnerProgram
                                };
                            case "friend":
                                return {
                                    tab: r.MainTab.PartnerProgram,
                                    bubble: o.PartnerProgramPages.ReferFriend
                                };
                            default:
                                return
                        }
                    }
                }();
                e && (e.tab === r.MainTab.PartnerProgram ? (0, n.showTVCoinsDialog)({
                    page: r.CoinsPage.Main,
                    tab: r.MainTab.PartnerProgram,
                    bubble: e.bubble
                }) : (0, n.showTVCoinsDialog)({
                    page: r.CoinsPage.Main,
                    tab: e.tab
                }))
            }
        },
        763920: (e, a, t) => {
            t.d(a, {
                PartnerProgramPages: () => n,
                TimeRangeSelector: () => r,
                PartnerReportType: () => o,
                SELECTOR_ITEM_NAMES: () => s,
                PartnersDataActionType: () => b
            });
            var n, r, o, i = t(575932);
            ! function(e) {
                e.Links = "Links", e.Clicks = "Clicks", e.Reports = "Reports", e.Finance = "Finance", e.AboutPartnerProgram = "FAQ", e.ReferFriend = "Refer a friend"
            }(n || (n = {})),
            function(e) {
                e.AllTime = "all time", e.Today = "today", e.Yesterday = "yesterday", e.LastSevenDays = "last 7 days", e.MonthToDate = "month to date", e.LastMonth = "last month", e.LastSixMonths = "last 6 months"
            }(r || (r = {})),
            function(e) {
                e.Overview = "overview", e.Conversion = "conversion"
            }(o || (o = {}));
            const s = [{
                content: (0, i.t)("All time"),
                value: r.AllTime
            }, {
                content: (0, i.t)("Today"),
                value: r.Today
            }, {
                content: (0, i.t)("Yesterday"),
                value: r.Yesterday
            }, {
                content: (0, i.t)("Last 7 days"),
                value: r.LastSevenDays
            }, {
                content: (0, i.t)("Month to date"),
                value: r.MonthToDate
            }, {
                content: (0, i.t)("Last month"),
                value: r.LastMonth
            }, {
                content: (0, i.t)("Last 6 months"),
                value: r.LastSixMonths
            }];
            var b;
            ! function(e) {
                e.UpdateClicks = "UPDATE_CLICKS", e.UpdateReports = "UPDATE_REPORTS", e.UpdateFinancesData = "UPDATE_FINANCES_DATA", e.SetClicksTimeRange = "SET_CLICKS_TIME_RANGE", e.SetReportTimeRange = "SET_REPORT_TIME_RANGE", e.SetLoadingState = "SET_LOADING_STATE", e.SetPayoutSettings = "SET_PAYOUT_SETTINGS"
            }(b || (b = {}))
        },
        778314: (e, a, t) => {
            t.d(a, {
                showTVCoinsDialog: () => r
            });
            var n = t(74349);

            function r(e) {
                Promise.all([t.e(15107), t.e(55099), t.e(84845), t.e(50407), t.e(71452), t.e(5953), t.e(75514), t.e(25977), t.e(40228), t.e(72590), t.e(28458)]).then(t.bind(t, 283484)).then((a => {
                    const {
                        page: t = n.CoinsPage.Main,
                        tab: r = n.MainTab.GetCoins,
                        productId: o = n.ProductId.Coin500,
                        ...i
                    } = e || {};
                    new a.TVCoinsDialog({
                        page: t,
                        tab: r,
                        ...i
                    }).open()
                }))
            }
        },
        74349: (e, a, t) => {
            var n, r, o;
            t.d(a, {
                    ProductId: () => n,
                    CoinsPage: () => r,
                    MainTab: () => o
                }),
                function(e) {
                    e.TestCoins = "100_coins", e.Coin500 = "500_coins", e.Coin1000 = "1000_coins", e.BagAndCoin = "5000_coins"
                }(n || (n = {})),
                function(e) {
                    e.Buy = "Buy", e.Main = "Main"
                }(r || (r = {})),
                function(e) {
                    e.About = "About", e.PartnerProgram = "Partner program", e.Refer = "Refer", e.GetCoins = "Get coins", e.History = "History", e.Redeem = "Redeem"
                }(o || (o = {}))
        }
    }
]);