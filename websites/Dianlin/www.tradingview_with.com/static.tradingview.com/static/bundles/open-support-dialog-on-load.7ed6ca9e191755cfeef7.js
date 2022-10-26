"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [72226], {
        727655: (t, r, o) => {
            o.r(r), o.d(r, {
                openSupportDialogOnLoad: () => s
            });
            var n = o(619101),
                e = o(945275);
            var i = o(514998);
            async function s() {
                const t = await async function() {
                        return window.is_authenticated && (0, e.isSupportApiAvailable)()
                    }(),
                    r = (0, i.getUrlParams)(),
                    o = function(t) {
                        if ("ticket" in t) {
                            const r = parseInt(t.ticket, 10);
                            return isNaN(r) ? null : r
                        }
                        return null
                    }(r);
                if (null !== o) return void(0, n.showSupportDialog)(t ? {
                    ticketId: o
                } : void 0);
                if (function(t) {
                        return "support-tickets" in t || "support" === window.location.hash.slice(1)
                    }(r)) return void(0, n.showSupportDialog)(t ? {
                    initialState: "tickets"
                } : void 0);
                (function(t) {
                    return "open-ticket" in t
                })(r) && (0, n.showSupportDialog)(t ? {
                    initialState: "open-ticket"
                } : void 0);
                const s = function(t) {
                    if ("solution" in t) {
                        const r = parseInt(t.solution, 10);
                        return isNaN(r) ? null : r
                    }
                    return null
                }(r);
                null === s ? function(t) {
                    return "support" in t
                }(r) && (0, n.showSupportDialog)() : (0, n.showSupportDialog)({
                    solutionId: s
                })
            }
        },
        945275: (t, r, o) => {
            o.d(r, {
                isSupportApiAvailable: () => u,
                supportApi: () => S
            });
            var n = o(86674),
                e = o(66974),
                i = o(911905);
            o(659863);
            const s = (0, i.getLogger)("Support.Api"),
                a = window.DATA_ISSUES_HOST,
                c = void 0 !== a ? a + "/api/v1" : void 0;

            function u() {
                return void 0 !== c
            }

            function h(t) {
                if (!u()) throw new Error("Helpdesk host is not defined.");
                return `${c}${t}`
            }
            const l = {
                    count: () => ({
                        method: "GET",
                        url: h("/tickets/count_by_userid")
                    }),
                    list: t => ({
                        method: "GET",
                        url: h(`/tickets/by_userid/?page=${t}`)
                    }),
                    get: t => ({
                        method: "GET",
                        url: h(`/tickets/${t}`)
                    }),
                    send: () => ({
                        method: "POST",
                        url: h("/tickets/save")
                    }),
                    close: () => ({
                        method: "POST",
                        url: h("/tickets/close")
                    }),
                    getSatisfactionRatings: t => ({
                        method: "GET",
                        url: h(`/tickets/${t}/get_satisfaction_ratings`)
                    }),
                    addSatisfactionRating: t => ({
                        method: "POST",
                        url: h(`/tickets/${t}/add_satisfaction_rating`)
                    })
                },
                d = {
                    list: (t, r) => ({
                        method: "GET",
                        url: h(`/tickets/${t}/${r}/comments`)
                    }),
                    send: () => ({
                        method: "POST",
                        url: h("/tickets/add_comment")
                    })
                },
                w = {
                    get: () => ({
                        method: "GET",
                        url: h("/unreads/get")
                    }),
                    update: () => ({
                        method: "PATCH",
                        url: h("/unreads/update")
                    }),
                    drop: () => ({
                        method: "PATCH",
                        url: h("/unreads/drop")
                    })
                },
                g = {
                    getPopulars: t => ({
                        method: "GET",
                        url: h(`/solutions/popular/${t}`)
                    }),
                    getTree: t => ({
                        method: "GET",
                        url: h(`/solutions/get_solutions_tree/${t}`)
                    }),
                    search: (t, r) => ({
                        method: "GET",
                        url: h(`/solutions/search/${t}?term=${r}`)
                    }),
                    get: (t, r) => ({
                        method: "GET",
                        url: h(`/solutions/${t}/${r}`)
                    })
                },
                p = {
                    get: () => ({
                        method: "GET",
                        url: h("/business_hours")
                    })
                },
                f = {
                    get: t => ({
                        method: "GET",
                        url: h(`/freshdeskId/${t}`)
                    })
                },
                E = {
                    refund: () => ({
                        method: "POST",
                        url: h("/payment/refund")
                    })
                };

            function m(t, r, o) {
                const i = {
                    method: t,
                    credentials: "include"
                };
                return i.headers = new Headers, (0, e.isProd)() || (i.headers.set("X-UserId", String(window.user.id)), i.headers.set("X-UserPerm", JSON.stringify({
                    is_pro_admin: 1,
                    is_support_unreads_admin: 1
                }))), void 0 !== o && (i.headers.set("Content-Type", "application/json"), i.body = JSON.stringify(o)), (0, n.fetch)(r, i)
            }
            async function y(t) {
                const r = await t.text();
                if (!t.ok) throw new Error(`Response was not OK. Status: ${t.status}. Content: ${r}`);
                return r
            }
            async function k(t) {
                const r = await t.text();
                if (!t.ok) {
                    const o = JSON.parse(r);
                    if (o.code) throw new Error(o.code);
                    throw new Error(`Response was not OK. Status: ${t.status}. Content: ${r}`)
                }
                try {
                    return JSON.parse(r)
                } catch (o) {
                    throw new Error(`Failed to parse JSON response (at ${t.url}). Original error: "${o.name}: ${o.message}". Tried to parse: ${r}`)
                }
            }
            const S = {
                tickets: {
                    count: async function() {
                        const {
                            method: t,
                            url: r
                        } = l.count();
                        try {
                            const o = await m(t, r);
                            return await k(o)
                        } catch (t) {
                            throw s.logError("Error while fetching tickets count. " + t), t
                        }
                    },
                    list: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = l.list(t);
                        try {
                            const t = await m(r, o);
                            return await k(t)
                        } catch (t) {
                            throw s.logError("Error while fetching tickets. " + t), t
                        }
                    },
                    get: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = l.get(t);
                        try {
                            const t = await m(r, o);
                            return await k(t)
                        } catch (r) {
                            throw s.logError(`Error while fetching ticket ${t}. ` + r), r
                        }
                    },
                    send: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = l.send();
                        try {
                            const n = await m(r, o, t);
                            return await k(n)
                        } catch (t) {
                            throw s.logError("Error while sending new ticket. " + t), t
                        }
                    },
                    close: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = l.close();
                        try {
                            const n = await m(r, o, t);
                            return await k(n)
                        } catch (r) {
                            throw s.logError(`Error while fetching ticket ${t.reportId}. ` + r), r
                        }
                    },
                    getSatisfactionRatings: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = l.getSatisfactionRatings(t);
                        try {
                            const t = await m(r, o);
                            return await k(t)
                        } catch (t) {
                            throw s.logError("Error while fetching ticket satisfaction ratings. " + t), t
                        }
                    },
                    addSatisfactionRating: async function(t, r) {
                        const {
                            method: o,
                            url: n
                        } = l.addSatisfactionRating(t);
                        try {
                            const t = await m(o, n, r);
                            return await k(t)
                        } catch (t) {
                            throw s.logError("Error while sending new ticket satisfaction rating. " + t), t
                        }
                    }
                },
                conversations: {
                    list: async function(t, r) {
                        const {
                            method: o,
                            url: n
                        } = d.list(t, r);
                        try {
                            const t = await m(o, n);
                            return await k(t)
                        } catch (t) {
                            throw s.logError("Error while fetching ticket conversations. " + t), t
                        }
                    },
                    send: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = d.send();
                        try {
                            const n = await m(r, o, t);
                            return await k(n)
                        } catch (t) {
                            throw s.logError("Error while sending new ticket note. " + t), t
                        }
                    }
                },
                unreads: {
                    get: async function() {
                        const {
                            method: t,
                            url: r
                        } = w.get();
                        try {
                            const o = await m(t, r);
                            return await k(o)
                        } catch (t) {
                            throw s.logWarn("Error while fetching support unreads count. " + t), t
                        }
                    },
                    update: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = w.update();
                        try {
                            const n = await m(r, o, t);
                            await y(n)
                        } catch (t) {
                            throw s.logError("Error while updating ticket conversations unreads. " + t), t
                        }
                    },
                    drop: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = w.drop();
                        try {
                            const n = await m(r, o, t);
                            await y(n)
                        } catch (t) {
                            throw s.logError("Error while dropping ticket conversations unreads. " + t), t
                        }
                    }
                },
                solutions: {
                    getPopulars: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = g.getPopulars(t);
                        try {
                            const t = await m(r, o);
                            return await k(t)
                        } catch (t) {
                            throw s.logError("Error while fetching popular solutions. " + t), t
                        }
                    },
                    getTree: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = g.getTree(t);
                        try {
                            const t = await m(r, o);
                            return await k(t)
                        } catch (t) {
                            throw s.logError("Error while fetching solutions tree. " + t), t
                        }
                    },
                    search: async function(t, r) {
                        const {
                            method: o,
                            url: n
                        } = g.search(t, r);
                        try {
                            const t = await m(o, n);
                            return await k(t)
                        } catch (t) {
                            throw s.logError("Error while searching solutions. " + t), t
                        }
                    },
                    get: async function(t, r) {
                        const {
                            method: o,
                            url: n
                        } = g.get(t, r);
                        try {
                            const t = await m(o, n);
                            return await k(t)
                        } catch (r) {
                            throw s.logError(`Error while fetching solution ${t}. ` + r), r
                        }
                    }
                },
                businessHours: {
                    get: async function() {
                        const {
                            method: t,
                            url: r
                        } = p.get();
                        try {
                            const o = await m(t, r);
                            return await k(o)
                        } catch (t) {
                            throw s.logError("Error while fetching support business hours. " + t), t
                        }
                    }
                },
                freshdeskId: {
                    get: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = f.get(t);
                        try {
                            const t = await m(r, o);
                            return await k(t)
                        } catch (t) {
                            throw s.logWarn("Error while fetching user Freshdesk ID. " + t), t
                        }
                    }
                },
                payment: {
                    refund: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = E.refund();
                        try {
                            const n = await m(r, o, t);
                            return await k(n)
                        } catch (t) {
                            throw s.logWarn("Error while triggering refund " + t), t
                        }
                    }
                }
            }
        }
    }
]);