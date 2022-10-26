"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [20651], {
        386021: d => {
            const u = 2147483647,
                f = 36,
                e = /^xn--/,
                c = /[^\0-\x7E]/,
                t = /[\x2E\u3002\uFF0E\uFF61]/g,
                n = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                a = Math.floor,
                r = String.fromCharCode;

            function o(d) {
                throw new RangeError(n[d])
            }

            function b(d, u) {
                const f = d.split("@");
                let e = "";
                f.length > 1 && (e = f[0] + "@", d = f[1]);
                const c = function(d, u) {
                    const f = [];
                    let e = d.length;
                    for (; e--;) f[e] = u(d[e]);
                    return f
                }((d = d.replace(t, ".")).split("."), u).join(".");
                return e + c
            }

            function i(d) {
                const u = [];
                let f = 0;
                const e = d.length;
                for (; f < e;) {
                    const c = d.charCodeAt(f++);
                    if (c >= 55296 && c <= 56319 && f < e) {
                        const e = d.charCodeAt(f++);
                        56320 == (64512 & e) ? u.push(((1023 & c) << 10) + (1023 & e) + 65536) : (u.push(c), f--)
                    } else u.push(c)
                }
                return u
            }
            const s = function(d, u) {
                    return d + 22 + 75 * (d < 26) - ((0 != u) << 5)
                },
                l = function(d, u, e) {
                    let c = 0;
                    for (d = e ? a(d / 700) : d >> 1, d += a(d / u); d > 455; c += f) d = a(d / 35);
                    return a(c + 36 * d / (d + 38))
                },
                p = function(d) {
                    const e = [],
                        c = d.length;
                    let t = 0,
                        n = 128,
                        r = 72,
                        b = d.lastIndexOf("-");
                    b < 0 && (b = 0);
                    for (let u = 0; u < b; ++u) d.charCodeAt(u) >= 128 && o("not-basic"), e.push(d.charCodeAt(u));
                    for (let s = b > 0 ? b + 1 : 0; s < c;) {
                        let b = t;
                        for (let e = 1, n = f;; n += f) {
                            s >= c && o("invalid-input");
                            const b = (i = d.charCodeAt(s++)) - 48 < 10 ? i - 22 : i - 65 < 26 ? i - 65 : i - 97 < 26 ? i - 97 : f;
                            (b >= f || b > a((u - t) / e)) && o("overflow"), t += b * e;
                            const l = n <= r ? 1 : n >= r + 26 ? 26 : n - r;
                            if (b < l) break;
                            const p = f - l;
                            e > a(u / p) && o("overflow"), e *= p
                        }
                        const p = e.length + 1;
                        r = l(t - b, p, 0 == b), a(t / p) > u - n && o("overflow"), n += a(t / p), t %= p, e.splice(t++, 0, n)
                    }
                    var i;
                    return String.fromCodePoint(...e)
                },
                h = function(d) {
                    const e = [];
                    let c = (d = i(d)).length,
                        t = 128,
                        n = 0,
                        b = 72;
                    for (const u of d) u < 128 && e.push(r(u));
                    let p = e.length,
                        h = p;
                    for (p && e.push("-"); h < c;) {
                        let c = u;
                        for (const u of d) u >= t && u < c && (c = u);
                        const i = h + 1;
                        c - t > a((u - n) / i) && o("overflow"), n += (c - t) * i, t = c;
                        for (const c of d)
                            if (c < t && ++n > u && o("overflow"), c == t) {
                                let d = n;
                                for (let u = f;; u += f) {
                                    const c = u <= b ? 1 : u >= b + 26 ? 26 : u - b;
                                    if (d < c) break;
                                    const t = d - c,
                                        n = f - c;
                                    e.push(r(s(c + t % n, 0))), d = a(t / n)
                                }
                                e.push(r(s(d, 0))), b = l(n, i, h == p), n = 0, ++h
                            }++n, ++t
                    }
                    return e.join("")
                },
                g = {
                    version: "2.1.0",
                    ucs2: {
                        decode: i,
                        encode: d => String.fromCodePoint(...d)
                    },
                    decode: p,
                    encode: h,
                    toASCII: function(d) {
                        return b(d, (function(d) {
                            return c.test(d) ? "xn--" + h(d) : d
                        }))
                    },
                    toUnicode: function(d) {
                        return b(d, (function(d) {
                            return e.test(d) ? p(d.slice(4).toLowerCase()) : d
                        }))
                    }
                };
            d.exports = g
        },
        818438: (d, u, f) => {
            f.d(u, {
                default: () => e
            });
            const e = function() {
                var d = {
                        base: "https://twemoji.maxcdn.com/v/13.0.1/",
                        ext: ".png",
                        size: "72x72",
                        className: "emoji",
                        convert: {
                            fromCodePoint: function(d) {
                                var u = "string" == typeof d ? parseInt(d, 16) : d;
                                if (u < 65536) return a(u);
                                return a(55296 + ((u -= 65536) >> 10), 56320 + (1023 & u))
                            },
                            toCodePoint: m
                        },
                        onerror: function() {
                            this.parentNode && this.parentNode.replaceChild(r(this.alt, !1), this)
                        },
                        parse: function(u, f) {
                            f && "function" != typeof f || (f = {
                                callback: f
                            });
                            return ("string" == typeof u ? l : s)(u, {
                                callback: f.callback || o,
                                attributes: "function" == typeof f.attributes ? f.attributes : h,
                                base: "string" == typeof f.base ? f.base : d.base,
                                ext: f.ext || d.ext,
                                size: f.folder || (e = f.size || d.size, "number" == typeof e ? e + "x" + e : e),
                                className: f.className || d.className,
                                onerror: f.onerror || d.onerror
                            });
                            var e
                        },
                        replace: g,
                        test: function(d) {
                            f.lastIndex = 0;
                            var u = f.test(d);
                            return f.lastIndex = 0, u
                        }
                    },
                    u = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    },
                    f = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
                    e = /\uFE0F/g,
                    c = String.fromCharCode(8205),
                    t = /[&<>'"]/g,
                    n = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
                    a = String.fromCharCode;
                return d;

                function r(d, u) {
                    return document.createTextNode(u ? d.replace(e, "") : d)
                }

                function o(d, u) {
                    return "".concat(u.base, u.size, "/", d, u.ext)
                }

                function b(d, u) {
                    for (var f, e, c = d.childNodes, t = c.length; t--;) 3 === (e = (f = c[t]).nodeType) ? u.push(f) : 1 !== e || "ownerSVGElement" in f || n.test(f.nodeName.toLowerCase()) || b(f, u);
                    return u
                }

                function i(d) {
                    return m(d.indexOf(c) < 0 ? d.replace(e, "") : d)
                }

                function s(d, u) {
                    for (var e, c, t, n, a, o, s, l, p, h, g, m, C, x = b(d, []), v = x.length; v--;) {
                        for (t = !1, n = document.createDocumentFragment(), o = (a = x[v]).nodeValue, l = 0; s = f.exec(o);) {
                            if ((p = s.index) !== l && n.appendChild(r(o.slice(l, p), !0)), m = i(g = s[0]), l = p + g.length, C = u.callback(m, u), m && C) {
                                for (c in (h = new Image).onerror = u.onerror, h.setAttribute("draggable", "false"), e = u.attributes(g, m)) e.hasOwnProperty(c) && 0 !== c.indexOf("on") && !h.hasAttribute(c) && h.setAttribute(c, e[c]);
                                h.className = u.className, h.alt = g, h.src = C, t = !0, n.appendChild(h)
                            }
                            h || n.appendChild(r(g, !1)), h = null
                        }
                        t && (l < o.length && n.appendChild(r(o.slice(l), !0)), a.parentNode.replaceChild(n, a))
                    }
                    return d
                }

                function l(d, u) {
                    return g(d, (function(d) {
                        var f, e, c = d,
                            n = i(d),
                            a = u.callback(n, u);
                        if (n && a) {
                            for (e in c = "<img ".concat('class="', u.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', a, '"'), f = u.attributes(d, n)) f.hasOwnProperty(e) && 0 !== e.indexOf("on") && -1 === c.indexOf(" " + e + "=") && (c = c.concat(" ", e, '="', f[e].replace(t, p), '"'));
                            c = c.concat("/>")
                        }
                        return c
                    }))
                }

                function p(d) {
                    return u[d]
                }

                function h() {
                    return null
                }

                function g(d, u) {
                    return String(d).replace(f, u)
                }

                function m(d, u) {
                    for (var f = [], e = 0, c = 0, t = 0; t < d.length;) e = d.charCodeAt(t++), c ? (f.push((65536 + (c - 55296 << 10) + (e - 56320)).toString(16)), c = 0) : 55296 <= e && e <= 56319 ? c = e : f.push(e.toString(16));
                    return f.join(u || "-")
                }
            }()
        }
    }
]);