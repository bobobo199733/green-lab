/*! For license information please see async-scroll-feature-68101a08502bcc0bc5fe.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [84142], {
        227178: (e, a, s) => {
            s.d(a, {
                EF: () => d,
                Uf: () => l,
                sG: () => t,
                v4: () => c
            });
            var o = s(351843);
            const c = "SET_SCROLL_POSITION",
                l = "SET_END_REACHED",
                t = "SET_LOAD_MORE_STATE",
                d = {
                    IDLE: o.S0,
                    LOADING: o.ik,
                    LOADED: o.xQ,
                    FAILED: o.Vy
                }
        },
        403635: (e, a, s) => {
            s.r(a), s.d(a, {
                reducer: () => d
            });
            var o = s(343599),
                c = s(351843),
                l = s(227178),
                t = s(349503);
            const d = (0, o.ZP)(((e, a) => {
                switch (a.type) {
                    case l.v4:
                        {
                            const {
                                id: s,
                                scrollTop: o,
                                scrollLeft: c
                            } = a.payload;e.scrollPosition[s] = {
                                scrollTop: o,
                                scrollLeft: c
                            };
                            break
                        }
                    case l.Uf:
                        {
                            const {
                                id: s,
                                isEndReached: o
                            } = a.payload;e.isEndReached[s] = o;
                            break
                        }
                    case l.sG:
                        {
                            const {
                                listId: s,
                                loadMoreState: o
                            } = a.payload;e.loadMore[s] = o;
                            break
                        }
                    case c.Xi:
                    case (0, c.dh)(a.type):
                        return t.default
                }
            }), t.default)
        }
    }
]);