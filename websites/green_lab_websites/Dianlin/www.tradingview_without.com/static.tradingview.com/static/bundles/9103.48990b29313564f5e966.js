(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [9103], {
        192815: t => {
            t.exports = {
                "common-tooltip": "common-tooltip-C8z_hVli",
                "common-tooltip--hidden": "common-tooltip--hidden-C8z_hVli",
                "common-tooltip--horizontal": "common-tooltip--horizontal-C8z_hVli",
                "common-tooltip--farther": "common-tooltip--farther-C8z_hVli",
                "common-tooltip--vertical": "common-tooltip--vertical-C8z_hVli",
                "common-tooltip-farther": "common-tooltip-farther-C8z_hVli",
                "common-tooltip--direction_normal": "common-tooltip--direction_normal-C8z_hVli",
                "common-tooltip__body": "common-tooltip__body-C8z_hVli",
                "common-tooltip__button-container": "common-tooltip__button-container-C8z_hVli",
                "common-tooltip__body--no-buttons": "common-tooltip__body--no-buttons-C8z_hVli",
                "common-tooltip__button": "common-tooltip__button-C8z_hVli",
                "common-tooltip--direction_reversed": "common-tooltip--direction_reversed-C8z_hVli",
                "common-tooltip__ear-holder": "common-tooltip__ear-holder-C8z_hVli",
                "common-tooltip__ear-holder--below": "common-tooltip__ear-holder--below-C8z_hVli",
                "common-tooltip__ear-holder--above": "common-tooltip__ear-holder--above-C8z_hVli",
                "common-tooltip__ear-holder--before": "common-tooltip__ear-holder--before-C8z_hVli",
                "common-tooltip__ear-holder--after": "common-tooltip__ear-holder--after-C8z_hVli",
                "common-tooltip__body--with-hotkey": "common-tooltip__body--with-hotkey-C8z_hVli",
                "common-tooltip__body--width_wide": "common-tooltip__body--width_wide-C8z_hVli",
                "common-tooltip__body--width_narrow": "common-tooltip__body--width_narrow-C8z_hVli",
                "common-tooltip__body--no-padding": "common-tooltip__body--no-padding-C8z_hVli",
                "common-tooltip__hotkey-block": "common-tooltip__hotkey-block-C8z_hVli",
                "common-tooltip__hotkey-block--divider": "common-tooltip__hotkey-block--divider-C8z_hVli",
                "common-tooltip__hotkey-text": "common-tooltip__hotkey-text-C8z_hVli",
                "common-tooltip__hotkey-button": "common-tooltip__hotkey-button-C8z_hVli",
                "common-tooltip__plus-sign": "common-tooltip__plus-sign-C8z_hVli"
            }
        },
        499994: (t, e, o) => {
            "use strict";
            o.d(e, {
                getTooltipData: () => i,
                setTooltipData: () => r
            });
            const n = new WeakMap;

            function i(t, e) {
                const o = n.get(t);
                return o instanceof Function ? o(e) : o && o[e]
            }

            function r(t, e, o) {
                if (o instanceof Function) return void n.set(t, o);
                const i = n.get(t),
                    r = void 0 === i || i instanceof Function ? {} : i;
                r[e] = o, n.set(t, r)
            }
        },
        604286: (t, e, o) => {
            "use strict";
            o.d(e, {
                hotKeySerialize: () => i,
                hotKeyDeserialize: () => r
            });
            var n = o(694755);

            function i(t) {
                return (0, n.clean)(JSON.stringify(t))
            }

            function r(t) {
                return JSON.parse((0, n.clean)(t, !0))
            }
        },
        309103: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                hide: () => j,
                show: () => I,
                showOnElement: () => $,
                tooltipClickHandler: () => q,
                updateTooltipText: () => U
            });
            var n = o(778785);
            let i = 0,
                r = 0,
                s = 0;

            function l() {
                clearTimeout(i), clearTimeout(r), clearTimeout(s)
            }

            function c(t, e) {
                i = setTimeout(t, e)
            }
            const a = "tooltip-root-element";
            let u;

            function d() {
                const t = document.getElementById(a);
                t ? u = t : (u = document.createElement("div"), u.id = a, document.body.appendChild(u))
            }

            function m() {
                u && (u.innerHTML = "")
            }
            "interactive" === document.readyState ? d() : document.addEventListener("DOMContentLoaded", d);
            var p = o(588537);
            const h = {
                    default: "",
                    white: "theme-white",
                    "round-shadow": "theme-round-shadow"
                },
                f = Object.keys(h);
            var _ = o(499994),
                y = o(604286),
                g = o(698969),
                v = o(143498),
                b = (o(897116), o(860502)),
                w = o(466915),
                L = o(638456),
                E = o(192815);

            function k(t) {
                const e = t.hasAttribute("data-tooltip") ? t.getAttribute("data-tooltip") : t.getAttribute("title");
                return e && ((0, _.setTooltipData)(t, "text", e), t.removeAttribute("title")), (0, _.getTooltipData)(t, "text") || ""
            }

            function C(t) {
                const e = z.cloneNode(!0),
                    o = F(e),
                    {
                        content: n
                    } = t;
                switch (n.type) {
                    case "element":
                        o.innerHTML = "", o.appendChild(n.data);
                        break;
                    case "html":
                        o.innerHTML = n.data;
                        break;
                    case "text":
                        if (t.hotkey) {
                            const t = S.cloneNode(!0);
                            t.innerText = n.data, o.appendChild(t)
                        } else o.innerText = n.data
                }
                if (t.hotkey) {
                    const e = "none" !== n.type,
                        i = N.cloneNode(!0),
                        r = (0, y.hotKeyDeserialize)(t.hotkey),
                        s = r.keys.map((t => `<span class="${E["common-tooltip__hotkey-button"]}">${t}</span>`));
                    i.innerHTML = function(t, e) {
                        const o = /{\d}|{hotkey_\d}/gi;
                        return t.replace(o, (t => {
                            const o = Number(t.match(/\d/));
                            return e[o]
                        }))
                    }(r.text, s).replace(/\s\+\s/g, `<span class="${E["common-tooltip__plus-sign"]}">+</span>`), o.classList.add(E["common-tooltip__body--with-hotkey"]), e && i.classList.add(E["common-tooltip__hotkey-block--divider"]), o.appendChild(i)
                }
                return e.addEventListener("contextmenu", b.preventDefault), e
            }

            function T(t, e) {
                const o = e.rect;
                if (!o) return;
                ! function(t, e) {
                    const o = f.includes(e) ? h[e] : "";
                    t.classList.remove(...f.map((t => h[t])).filter((t => !!t))), o && !t.classList.contains(o) && t.classList.add(o)
                }(t, e.colorTheme || "default"), e.addClass && t.classList.add(e.addClass);
                const n = F(t),
                    i = t.querySelector(`.${E["common-tooltip__button-container"]}`);
                n.classList.toggle(E["common-tooltip__body--width_wide"], Boolean(e.wide)), n.classList.toggle(E["common-tooltip__body--no-padding"], Boolean(e.noPadding)), n.classList.toggle(E["common-tooltip__body--width_narrow"], Boolean(e.narrow)), n.classList.toggle(E["common-tooltip__body--no-buttons"], !0), n.style.left = D(0), n.style.width = D(n.clientWidth + (Boolean(e.noPadding) ? 0 : 2));
                const r = document.body.clientWidth,
                    s = L.CheckMobile.iOS() || (0, L.supportTouch)() && (0, L.isMac)() ? window.innerHeight : document.body.clientHeight,
                    l = e.vertical,
                    c = e.extendMargin || l && o.w < 20 || !l && o.h < 20;
                t.classList.toggle(E["common-tooltip--farther"], c), t.classList.toggle(E["common-tooltip--vertical"], l), t.classList.toggle(E["common-tooltip--horizontal"], !l);
                const a = function(t) {
                        return t.querySelector(`.${E["common-tooltip__ear-holder"]}`)
                    }(t),
                    u = t.offsetHeight;
                if (l) {
                    const l = 10,
                        c = s - 10,
                        d = 12,
                        m = l + d,
                        p = c - d,
                        h = (0, w.clamp)(o.y + o.h / 2, m, p) - u / 2,
                        f = h + u;
                    t.style.left = D(o.x + o.w), t.style.top = D(h), h < l ? n.style.top = i.style.top = D(l - h) : f > c && (n.style.top = i.style.top = D(c - f));
                    const {
                        right: _
                    } = (t.querySelector(":last-child") || n).getBoundingClientRect(), y = _ + 10 > r;
                    t.classList.toggle(E["common-tooltip--direction_reversed"], y), t.classList.toggle(E["common-tooltip--direction_normal"], !y);
                    let g = y ? "after" : "before";
                    (0, v.isRtl)() ? (g = e.otr ? "after" : g, g = e.otl ? "before" : g) : (g = e.otr ? "before" : g, g = e.otl ? "after" : g), a.classList.toggle(E["common-tooltip__ear-holder--before"], "before" === g),
                        a.classList.toggle(E["common-tooltip__ear-holder--after"], "after" === g), "after" === g && (t.style.left = "auto", t.style.right = D(r - o.x))
                } else {
                    const l = o.x - (n.offsetWidth - o.w) / 2,
                        c = r - 10 - t.offsetWidth,
                        d = Math.max(10, Math.min(l, c));
                    t.style.left = D(d);
                    const m = c < l;
                    t.classList.toggle(E["common-tooltip--direction_reversed"], m), t.classList.toggle(E["common-tooltip--direction_normal"], !m);
                    const p = function(t, e, o, n) {
                        if (t.above) return B(e, n) ? "above" : "below";
                        if (t.below) return function(t, e, o) {
                            return o.y + o.h + e + 10 < t
                        }(e, o, n) ? "below" : "above";
                        return B(o, n) ? "above" : "below"
                    }(e, s, u, o);
                    "above" === p ? t.style.bottom = D(s - o.y) : t.style.top = D(o.y + o.h), a.classList.add("above" === p ? E["common-tooltip__ear-holder--above"] : E["common-tooltip__ear-holder--below"]);
                    const {
                        left: h
                    } = n.getBoundingClientRect();
                    let f = Math.trunc(o.x + o.w / 2 - (h + n.clientWidth / 2));
                    t.style.left = D(d + f), t.style.width = D(n.clientWidth + i.clientWidth), f = m ? Math.max(0, f) : Math.min(0, f), i.style.left = D(-f), n.style.left = D(-f)
                }
            }

            function M(t) {
                t.classList.toggle(E["common-tooltip--hidden"], !0)
            }

            function D(t) {
                return `${Math.floor(t)}px`
            }
            const x = `\n\t<div id="common-tooltip-wrapper" class="${E["common-tooltip"]}">\n\t\t<div class="${E["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${E["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${E["common-tooltip__button-container"]}"></div>\n\t</div>\n`,
                V = `\n\t<div class="${E["common-tooltip__hotkey-block"]}"></div>\n`,
                H = `\n\t<div class="${E["common-tooltip__hotkey-text"]}"></div>\n`,
                z = (0, g.parseHtmlElement)(x),
                N = (0, g.parseHtmlElement)(V),
                S = (0, g.parseHtmlElement)(H);

            function F(t) {
                return t.querySelector(`.${E["common-tooltip__body"]}`)
            }

            function B(t, e) {
                return 10 + t < e.y
            }
            var R = o(398835);
            let K = !1,
                A = null,
                W = null;
            n.mobiletouch || document.addEventListener("mouseover", (function(t) {
                var e;
                if (null === (e = t.sourceCapabilities) || void 0 === e ? void 0 : e.firesTouchEvents) return;
                const o = t.target,
                    n = t.currentTarget,
                    i = function(t, e, o) {
                        const n = [];
                        for (; t && t !== e;) t.classList && t.classList.contains(o) && n.push(t), t = t.parentElement || X(t.parentNode);
                        return n
                    }(o, n, "apply-common-tooltip"),
                    r = () => {
                        W && (W.destroy(), W = null)
                    };
                for (const e of i) {
                    if ("buttons" in t) {
                        if (1 & t.buttons) continue
                    } else if (1 === t.which) continue;
                    const o = () => $(e);
                    if (o()) {
                        const t = t => {
                                t.target instanceof Element && t.target.contains(e) && n(null, !0)
                            },
                            n = (i, s = !1) => {
                                e.removeEventListener("common-tooltip-update", o), e.removeEventListener("mouseleave", n), e.removeEventListener("mousedown", n), document.removeEventListener("scroll", t, {
                                    capture: !0
                                }), r(), j(s)
                            };
                        e.addEventListener("common-tooltip-update", o), e.addEventListener("mouseleave", n), e.addEventListener("mousedown", n), document.addEventListener("scroll", t, {
                            capture: !0
                        }), null === W && (W = (0, R.createGroup)({
                            desc: "Tooltip"
                        }), W.add({
                            desc: "Hide",
                            hotkey: 27,
                            handler: n
                        }));
                        break
                    }
                }
            }), !0);
            const O = new MutationObserver((() => {
                    if (A && A.options.target) {
                        let t;
                        t = "isConnected" in A.options.target ? A.options.target.isConnected : document.body.contains(A.options.target), t || j()
                    }
                })),
                $ = (t, e = {}) => {
                    const {
                        content: o,
                        ...n
                    } = Q(e), i = function(t) {
                        const e = k(t),
                            o = t.getBoundingClientRect(),
                            n = {
                                h: o.height,
                                w: o.width,
                                x: o.left,
                                y: o.top
                            },
                            i = t.getAttribute("data-color-theme") || "",
                            r = t.classList.contains("common-tooltip-html"),
                            s = parseInt(t.getAttribute("data-tooltip-delay") || ""),
                            l = parseInt(t.getAttribute("data-tooltip-debounce") || "");
                        let c = {
                            type: "none"
                        };
                        return e && (c = {
                            type: r ? "html" : "text",
                            data: e
                        }), {
                            above: t.classList.contains("common-tooltip-above"),
                            below: t.classList.contains("common-tooltip-below"),
                            otl: t.classList.contains("common-tooltip-otl"),
                            otr: t.classList.contains("common-tooltip-otr"),
                            vertical: t.classList.contains("common-tooltip-vertical"),
                            hotkey: t.getAttribute("data-tooltip-hotkey"),
                            narrow: t.classList.contains("common-tooltip-narrow"),
                            wide: t.classList.contains("common-tooltip-wide"),
                            colorTheme: i,
                            tooltipDelay: s,
                            tooltipDebounce: l,
                            rect: n,
                            content: c,
                            target: t
                        }
                    }(t), r = Object.assign(i, n);
                    return "none" !== o.type && (r.content = o), !("none" === r.content.type && !r.hotkey) && (r.target = t, I(r), !0)
                },
                I = t => {
                    const e = Q(t),
                        o = C(e);
                    var n;
                    if (A = {
                            options: e,
                            element: o
                        }, n = o, m(), u && u.appendChild(n), l(), !K) return M(o), void c((() => J(o)), function(t) {
                        return "number" != typeof t.tooltipDelay || isNaN(t.tooltipDelay) ? 500 : t.tooltipDelay
                    }(e));
                    const {
                        tooltipDebounce: i
                    } = t;
                    "number" != typeof i || isNaN(i) ? J(o) : c((() => J(o)), i)
                },
                U = t => k(t);

            function q(t) {
                n.mobiletouch && ($(t.currentTarget, {
                    tooltipDelay: 0
                }), document.addEventListener("scroll", G), document.addEventListener("touchstart", G))
            }

            function G() {
                document.removeEventListener("scroll", G), document.removeEventListener("touchstart", G), j()
            }

            function P() {
                m(), K = !1, A = null
            }
            const j = t => {
                if (l(), O.disconnect(), !A) return;
                if (!t && !K) return;
                const {
                    element: e,
                    options: o
                } = A, n = () => {
                    e.removeEventListener("mouseleave", n), M(e), t ? P() : s = setTimeout((() => {
                        P()
                    }), 250)
                };
                var i, c;
                o.tooltipHideDelay ? (i = () => {
                    e.querySelector(":hover") ? e.addEventListener("mouseleave", n) : n()
                }, c = o.tooltipHideDelay, r = setTimeout(i, c)) : n()
            };

            function J(t) {
                const {
                    options: e
                } = (0, p.ensureNotNull)(A);
                if (T(t, e), function(t) {
                        t.classList.toggle(E["common-tooltip--hidden"], !1)
                    }(t), O.observe(document, {
                        childList: !0,
                        subtree: !0
                    }), K = !0, e.forceHideOnMove) {
                    const t = () => {
                        document.removeEventListener("mousemove", t), j()
                    };
                    document.addEventListener("mousemove", t)
                }
            }

            function X(t) {
                return t && (t.nodeType === Node.ELEMENT_NODE ? t : null)
            }

            function Q(t) {
                if (function(t) {
                        return "content" in t
                    }(t)) return t;
                const {
                    inner: e,
                    html: o,
                    text: n,
                    ...i
                } = t;
                let r = {
                    type: "none"
                };
                return e && (r = {
                    type: "element",
                    data: e
                }), n && (r = {
                    type: o ? "html" : "text",
                    data: n
                }), {
                    content: r,
                    ...i
                }
            }
        },
        466915: (t, e, o) => {
            "use strict";

            function n(t, e) {
                return t <= e
            }

            function i(t, e) {
                return t >= e
            }

            function r(t, e, o) {
                return Math.min(Math.max(t, e), o)
            }

            function s(t) {
                return t < 0 ? -1 : t > 0 ? 1 : 0
            }

            function l(t) {
                if (t < 0) return !1;
                if (t > 1e18) return !0;
                for (let e = t; e > 1; e /= 10)
                    if (e % 10 != 0) return !1;
                return !0
            }

            function c(t, e, o) {
                return e - t <= o
            }

            function a(t, e, o) {
                return Math.abs(t - e) < o
            }

            function u(t) {
                return t <= 0 ? NaN : Math.log(t) / Math.log(10)
            }

            function d(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }

            function m(t, e = d) {
                if (t.length < 1) throw Error("array is empty");
                let o = t[0];
                for (let n = 0; n < t.length; ++n) e(t[n], o) < 0 && (o = t[n]);
                return o
            }

            function p(t, e = d) {
                if (t.length < 1) throw Error("array is empty");
                let o = t[0];
                for (let n = 0; n < t.length; ++n) e(t[n], o) > 0 && (o = t[n]);
                return o
            }

            function h(t) {
                const e = Math.ceil(t);
                return e % 2 != 0 ? e - 1 : e
            }

            function f(t) {
                return t > 0 ? Math.floor(t) : Math.ceil(t)
            }
            o.r(e), o.d(e, {
                lessThan: () => n,
                greaterThan: () => i,
                clamp: () => r,
                sign: () => s,
                isBaseDecimal: () => l,
                greaterOrEqual: () => c,
                equal: () => a,
                log10: () => u,
                defComparator: () => d,
                min: () => m,
                max: () => p,
                ceiledEven: () => h,
                toInt: () => f
            })
        },
        694755: (t, e, o) => {
            t = o.nmd(t), TradingView.cleanButAmpersand = function(t, e) {
                var o = e ? ["&amp;"] : ["&"];
                return TradingView.clean(t, e, o)
            }, TradingView.strip_tags = function(t) {
                return t && t.replace ? t.replace(/(<([^>]+)>)/gi, "") : t
            }, TradingView.encodeSpread = function(t) {
                return encodeURIComponent(t)
            }, TradingView.clean = function(t, e, o) {
                var n = [
                        ["&", "&amp;"],
                        ["<", "&lt;"],
                        [">", "&gt;"],
                        ['"', "&quot;"],
                        ["'", "&#039;"],
                        ["'", "&#39;"]
                    ],
                    i = t;
                if (!t || !t.replace) return i;
                for (var r = 0; r < n.length; r++) {
                    var s = n[r][0],
                        l = n[r][1];
                    o && o.indexOf && -1 !== o.indexOf(e ? l : s) || (i = e ? i.replace(new RegExp(l, "g"), s) : i.replace(new RegExp(s, "g"), l))
                }
                return i
            }, t && t.exports && (t.exports = {
                clean: TradingView.clean,
                cleanButAmpersand: TradingView.cleanButAmpersand,
                stripTags: TradingView.strip_tags
            })
        },
        143498: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                isRtl: () => i,
                stripLTRMarks: () => l,
                startWithLTR: () => c,
                forceLTRStr: () => a,
                forceLTRStrSsr: () => u,
                forceRTLStr: () => d,
                getLTRScrollLeft: () => m,
                getLTRScrollLeftOffset: () => p,
                detectAutoDirection: () => _
            });
            var n = o(64531);
            const i = () => "rtl" === window.document.dir,
                r = "‬",
                s = new RegExp("‎|‪|‫|‬", "g");

            function l(t) {
                return "" !== t && i() && null != t ? t.replace(s, "") : t
            }

            function c(t) {
                return "" !== t && i() && null != t ? "‎" + t : t
            }

            function a(t) {
                return "" !== t && i() && null != t ? "‪" + t + r : t
            }

            function u(t) {
                return "‪" + t + r
            }

            function d(t) {
                return "" !== t && i() && null != t ? "‫" + t + r : t
            }

            function m(t) {
                return (0, n.getNormalizedScrollLeft)(t, "rtl")
            }

            function p(t, e) {
                const o = (0, n.detectScrollType)();
                if ("indeterminate" === o) return 0;
                switch (o) {
                    case "negative":
                        e = t.clientWidth - t.scrollWidth + e;
                        break;
                    case "reverse":
                        e = t.scrollWidth - t.clientWidth - e
                }
                return e
            }
            const h = /[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/,
                f = /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;

            function _(t) {
                const e = h.exec(t);
                return e ? f.test(e[0]) ? "rtl" : "ltr" : ""
            }
        },
        698969: (t, e, o) => {
            "use strict";
            o.d(e, {
                parseHtml: () => i,
                parseHtmlElement: () => r
            });
            const n = new WeakMap;

            function i(t, e) {
                let o, i;
                return o = null == e ? document.documentElement : 9 === e.nodeType ? e.documentElement : e, n && (i = n.get(o)), i || (i = o.ownerDocument.createRange(), i.selectNodeContents(o), n && n.set(o, i)), i.createContextualFragment(t)
            }

            function r(t, e) {
                const o = i(t, e),
                    n = o.firstElementChild;
                return null !== n && o.removeChild(n), n
            }
        },
        860502: (t, e, o) => {
            "use strict";

            function n(t) {
                t.preventDefault()
            }
            o.d(e, {
                preventDefault: () => n,
                preventDefaultForContextMenu: () => r
            });
            const i = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];

            function r(t) {
                const e = t.target;
                e && !e.closest(i.join(", ")) && t.preventDefault()
            }
        },
        398835: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                Modifiers: () => n.Modifiers,
                createGroup: () => m,
                pressedKeys: () => d,
                registerWindow: () => p,
                unregisterWindow: () => h
            });
            var n = o(470316),
                i = o(515312),
                r = o(262325),
                s = o.n(r);
            class l {
                constructor(t, e) {
                    this._group = t, this.hotkey = e.hotkey, this.handler = e.handler, this.desc = e.desc, this.element = e.element || null, e.isDisabled ? "function" == typeof e.isDisabled ? this.isDisabled = e.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1
                }
                destroy() {
                    this._group && (this._group.remove(this), this._group = null)
                }
            }
            class c {
                constructor(t, e) {
                    this._actions = [], this._manager = t, this.modal = !(!e || !e.modal), e && (this.desc = e.desc), e && e.isDisabled ? "function" == typeof e.isDisabled ? this.isDisabled = e.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1, this._manager.registerGroup(this)
                }
                add(t) {
                    const e = new l(this, t);
                    return this._actions.push(e), e
                }
                remove(t) {
                    for (let e = this._actions.length; e-- > 0;) this._actions[e] === t && this._actions.splice(e, 1)
                }
                handleHotkey(t, e) {
                    for (let o = this._actions.length; o-- > 0;) {
                        const n = this._actions[o];
                        if (n.hotkey === t && ((!n.element || e.target && n.element.contains(e.target)) && !n.isDisabled())) return n.handler(e), e.preventDefault(), this._callMatchedHotkeyHandler(t), !0
                    }
                    return !1
                }
                promote() {
                    this._manager.promoteGroup(this)
                }
                destroy() {
                    this._actions.length = 0, this._manager.unregisterGroup(this)
                }
                static setMatchedHotkeyHandler(t) {
                    c._matchedHotkeyHandler = t
                }
                _callMatchedHotkeyHandler(t) {
                    c._matchedHotkeyHandler && c._matchedHotkeyHandler(t)
                }
            }
            var a = o(345848);
            const u = new class {
                    constructor() {
                        this._groups = [], this._pressedKeys = new(s())(0), this._keyDownListener = t => {
                            if (t.defaultPrevented) return;
                            const e = (0, n.hashFromEvent)(t);
                            if (this._pressedKeys.setValue(e), !(0, i.isNativeUIInteraction)(e, t.target))
                                for (let o = this._groups.length; o-- > 0;) {
                                    const n = this._groups[o];
                                    if (!n.isDisabled()) {
                                        if (n.handleHotkey(e, t)) return;
                                        if (n.modal) return
                                    }
                                }
                        }, this._keyUpListener = t => {
                            const e = (0, n.hashFromEvent)(t);
                            this._pressedKeys.setValue(e)
                        }, this._blurEvent = () => {
                            this._pressedKeys.setValue(0)
                        }, this._mouseEvent = t => {
                            const e = (0, n.modifiersFromEvent)(t),
                                o = 255 & this._pressedKeys.value();
                            this._pressedKeys.setValue(e | o)
                        }
                    }
                    listen(t) {
                        t.addEventListener("keydown", this._keyDownListener), t.addEventListener("keyup", this._keyUpListener), t.addEventListener("blur", this._blurEvent), t.addEventListener("mousemove", this._mouseEvent)
                    }
                    unlisten(t) {
                        t.removeEventListener("keydown", this._keyDownListener), t.removeEventListener("keyup", this._keyUpListener), t.removeEventListener("blur", this._blurEvent), t.removeEventListener("mousemove", this._mouseEvent)
                    }
                    registerGroup(t) {
                        this._groups.push(t)
                    }
                    unregisterGroup(t) {
                        for (let e = this._groups.length; e--;) this._groups[e] === t && this._groups.splice(e, 1)
                    }
                    promoteGroup(t) {
                        let e = this._groups.length - 1;
                        for (let o = this._groups.length; o--;) {
                            if (this._groups[o] === t) return void(o !== e && (this._groups.splice(o, 1), this._groups.splice(e, 0, t)));
                            this._groups[o].modal && (e = o - 1)
                        }
                    }
                    pressedKeys() {
                        return this._pressedKeys
                    }
                },
                d = u.pressedKeys();

            function m(t) {
                return new c(u, t)
            }

            function p(t) {
                u.listen(t)
            }

            function h(t) {
                u.unlisten(t)
            }
            p(window), c.setMatchedHotkeyHandler((t => {
                (0, a.trackEvent)("Keyboard Shortcuts", (0, n.humanReadableHash)(t))
            }))
        },
        470316: (t, e, o) => {
            "use strict";
            o.r(e),
                o.d(e, {
                    isMacKeyboard: () => i,
                    Modifiers: () => r,
                    modifiersFromEvent: () => s,
                    hashFromEvent: () => l,
                    hashShiftPlusEnter: () => c,
                    humanReadableModifiers: () => a,
                    humanReadableHash: () => d
                });
            var n = o(638456);
            const i = (0, n.isMac)() || n.CheckMobile.iOS();
            var r;

            function s(t) {
                let e = 0;
                return t.shiftKey && (e += 1024), t.altKey && (e += 512), t.ctrlKey && (e += 256), t.metaKey && (e += 2048), e
            }

            function l(t) {
                return s(t) | t.keyCode
            }! function(t) {
                t[t.None = 0] = "None", t[t.Alt = 512] = "Alt", t[t.Shift = 1024] = "Shift", t[t.Mod = i ? 2048 : 256] = "Mod", t[t.Control = 256] = "Control", t[t.Meta = 2048] = "Meta"
            }(r || (r = {}));
            const c = 1037;

            function a(t, e = !i) {
                let o = "";
                return 256 & t && (o += i ? "^" : "Ctrl", e && (o += " + ")), 512 & t && (o += i ? "⌥" : "Alt", e && (o += " + ")), 1024 & t && (o += i ? "⇧" : "Shift", e && (o += " + ")), 2048 & t && (o += i ? "⌘" : "Win", e && (o += " + ")), o
            }
            const u = {
                9: "⇥",
                13: "↵",
                27: "Esc",
                8: i ? "⌫" : "Backspace",
                32: "Space",
                35: "End",
                36: "Home",
                37: "←",
                38: "↑",
                39: "→",
                40: "↓",
                45: "Ins",
                46: "Del",
                188: ",",
                191: "/"
            };
            for (let t = 1; t <= 16; t++) u[t + 111] = `F${t}`;

            function d(t) {
                let e = a(t);
                const o = 255 & t;
                return e += o in u ? u[o] : String.fromCharCode(o), e
            }
        },
        515312: (t, e, o) => {
            "use strict";
            o.d(e, {
                isTextEditingField: () => i,
                isNativeUIInteraction: () => r
            });
            var n = o(470316);

            function i(t) {
                if ("INPUT" === t.tagName) {
                    const e = t.type;
                    return "text" === e || "email" === e || "number" === e || "password" === e || "search" === e || "tel" === e || "url" === e
                }
                return "TEXTAREA" === t.tagName || t.isContentEditable
            }

            function r(t, e) {
                if (!e) return !1;
                const o = 255 & t;
                if (27 === o || o >>> 4 == 7) return !1;
                switch (t ^ o) {
                    case n.Modifiers.Alt:
                        return (38 === o || 40 === o) && "SELECT" === e.tagName || i(e);
                    case n.Modifiers.Alt + n.Modifiers.Shift:
                        return i(e);
                    case n.Modifiers.Mod:
                        if (67 === o || !n.isMacKeyboard && 45 === o) {
                            const t = e.ownerDocument && e.ownerDocument.getSelection();
                            if (t && !t.isCollapsed) return !0
                        }
                        return i(e);
                    case n.Modifiers.Mod + n.Modifiers.Shift:
                        return o >= 33 && o <= 40 && i(e);
                    case n.Modifiers.Shift:
                    case 0:
                        return !!(9 !== o || e.ownerDocument && e !== e.ownerDocument.body && e !== e.ownerDocument.documentElement) && ((13 === o || 32 === o || ! function(t) {
                            if ("BUTTON" === t.tagName) return !0;
                            if ("INPUT" === t.tagName) {
                                const e = t.type;
                                if ("submit" === e || "button" === e || "reset" === e || "checkbox" === e || "radio" === e) return !0
                            }
                            return !1
                        }(e)) && ("form" in e || e.isContentEditable))
                }
                return !1
            }
        }
    }
]);