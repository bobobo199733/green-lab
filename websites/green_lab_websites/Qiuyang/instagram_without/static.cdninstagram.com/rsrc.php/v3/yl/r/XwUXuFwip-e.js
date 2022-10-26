if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("PolarisActivityFeedGlimmersLoadingState.react", ["IGDSGlimmer.react", "qex", "range", "react", "stylex"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            firstSectionLabelGlimmer: {
                borderTopStartRadius: "x1lcm9me",
                borderTopEndRadius: "x1yr5g0i",
                borderBottomEndRadius: "xrt01vj",
                borderBottomStartRadius: "x10y3i5r",
                height: "xlup9mm",
                marginBottom: "x1yztbdb",
                marginStart: "xmupa6y",
                width: "x1exxlbk"
            },
            row: {
                alignItems: "x6s0dn4",
                display: "x78zum5",
                paddingTop: "x1y1aw1k",
                paddingEnd: "xxbr6pl",
                paddingBottom: "xwib8y2",
                paddingStart: "xbbxn1n"
            },
            actorGlimmer: {
                borderTopStartRadius: "x1ke7ulo",
                borderTopEndRadius: "x3jqge",
                borderBottomEndRadius: "x1i7howy",
                borderBottomStartRadius: "x4y8mfe",
                flexShrink: "x2lah0s",
                height: "xn3w4p2",
                width: "x187nhsf"
            },
            textGlimmer: {
                borderTopStartRadius: "x1lcm9me",
                borderTopEndRadius: "x1yr5g0i",
                borderBottomEndRadius: "xrt01vj",
                borderBottomStartRadius: "x10y3i5r",
                flexGrow: "x1iyjqo2",
                height: "x1v9usgg",
                marginStart: "x16n37ib",
                width: "xh8yej3"
            },
            mediaGlimmer: {
                borderTopStartRadius: "x1lcm9me",
                borderTopEndRadius: "x1yr5g0i",
                borderBottomEndRadius: "xrt01vj",
                borderBottomStartRadius: "x10y3i5r",
                flexShrink: "x2lah0s",
                height: "xn3w4p2",
                marginStart: "x1tv9t25",
                width: "x187nhsf"
            }
        };

    function a() {
        var a;
        a = (a = c("qex")._("1815")) != null ? a : !1;
        return h.jsxs("div", {
            children: [a && h.jsx(c("IGDSGlimmer.react"), {
                index: 0,
                xstyle: i.firstSectionLabelGlimmer
            }), c("range")(1, 25).map(function(a) {
                return h.jsxs("div", {
                    className: c("stylex")(i.row),
                    children: [h.jsx(c("IGDSGlimmer.react"), {
                        index: a,
                        xstyle: i.actorGlimmer
                    }), h.jsx(c("IGDSGlimmer.react"), {
                        index: a + 1,
                        xstyle: i.textGlimmer
                    }), h.jsx(c("IGDSGlimmer.react"), {
                        index: a + 2,
                        xstyle: i.mediaGlimmer
                    })]
                }, a)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisActivityFeedContext.react", ["$InternalEnum", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useMemo;
    c = b("$InternalEnum").Mirrored(["ActivityFeedBox", "ActivityFeedPage", "SidebarNotificationsPanel"]);
    var j = h.createContext(null);

    function a(a) {
        var b = a.children,
            c = a.placement;
        a = i(function() {
            return {
                placement: c
            }
        }, [c]);
        return h.jsx(j.Provider, {
            value: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ActivityFeedPlacement = c;
    g.PolarisActivityFeedContext = j;
    g.PolarisActivityFeedContextProvider = a
}, 98);