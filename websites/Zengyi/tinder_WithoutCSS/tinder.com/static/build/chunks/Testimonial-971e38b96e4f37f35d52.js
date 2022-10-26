/*! For license information please see Testimonial-971e38b96e4f37f35d52.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [76082], {
        296935: (e, s, a) => {
            a.r(s), a.d(s, {
                default: () => p
            });
            var r, n = a(590132),
                i = a(585152),
                l = a(346922),
                t = a(190011),
                d = a(482730),
                o = a(495356),
                c = a(750544),
                u = a(981403);
            const m = ({
                    autoplay: e = !0,
                    className: s,
                    slidesPerView: a = 1
                }) => {
                    const {
                        formatMessage: m
                    } = (0, l.Z)(), [p, b] = (0, i.useState)(!1), x = (0, i.useRef)(), v = (0, i.useCallback)((() => b(!1)), []), f = (0, i.useCallback)((() => b(!0)), []), g = (0, i.useRef)({
                        dragEnd: v,
                        dragStart: f,
                        loop: !0,
                        rubberband: !1,
                        slidesPerView: a
                    }), [h, M] = (0, d.useKeenSlider)(g.current), {
                        inViewport: N
                    } = (0, t.NM)(h, {}, {}, {});
                    (0, i.useEffect)((() => (!p && e && N && (x.current = setInterval((() => {
                        M.next()
                    }), 5e3)), () => {
                        x.current && (clearInterval(x.current), x.current = void 0)
                    })), [p, M, e, N]);
                    const Z = (0, i.useMemo)((() => Array(13).fill(null).map(((e, s) => {
                        const a = m({
                                id: `LoginPage.Testimony${s+1}`
                            }),
                            i = m({
                                id: `LoginPage.TestimonyName${s+1}`
                            });
                        return (0, n.Z)("li", {
                            className: "keen-slider__slide Px(8px) Py(8px) Fxg(1)"
                        }, s, (0, n.Z)("figure", {
                            className: "M(0) P(24px) Bdrs(8px) Bdc($c-ds-divider-primary) Bd H(100%) Bxsh($bxsh-btn) Pos(r)"
                        }, void 0, (0, n.Z)("span", {
                            className: "C($c-ds-divider-primary) Op(.8) Lh(1) Fl(end) Pos(a) End(0) T(0) Mend(8px) Z(-1)",
                            style: {
                                fontSize: "16rem"
                            },
                            "aria-hidden": "true"
                        }, void 0, "“"), (0, n.Z)("figcaption", {
                            className: "Fw($bold) Fz($ms) Mb(8px) W(80%)"
                        }, void 0, i), r || (r = (0, n.Z)(c.Z, {
                            className: "W(80%)"
                        })), (0, n.Z)("blockquote", {
                            className: "My(12px) Mx(0) Fz($s) C($c-ds-text-secondary)"
                        }, void 0, (0, n.Z)("p", {
                            className: "M(0) Whs(pw)"
                        }, void 0, a))))
                    }))), [m]);
                    return (0, u.jsx)("ul", {
                        className: (0, o.Z)("keen-slider List(n) D(f) Ov(h) Mx(a) P(0) Cntv(a)", s),
                        ref: h,
                        onMouseOver: f,
                        onMouseOut: v,
                        onFocus: f,
                        onBlur: v,
                        children: Z
                    })
                },
                p = (0, i.memo)(m)
        }
    }
]);