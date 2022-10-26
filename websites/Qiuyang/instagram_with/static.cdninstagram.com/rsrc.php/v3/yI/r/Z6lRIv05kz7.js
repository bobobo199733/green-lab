if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("PolarisCreateStyleRoot.entrypoint", ["JSResourceForInteraction"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {}
            }
        },
        root: c("JSResourceForInteraction")("PolarisCreateStyleRoot.react").__setRef("PolarisCreateStyleRoot.entrypoint")
    };
    g["default"] = a
}, 98);
__d("PolarisExploreRoot.entrypoint", ["JSResourceForInteraction"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {}
            }
        },
        root: c("JSResourceForInteraction")("PolarisExploreRoot.react").__setRef("PolarisExploreRoot.entrypoint")
    };
    g["default"] = a
}, 98);
__d("PolarisStoryMediaDebugger", ["cx", "PolarisNetworkInfo", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function j(a) {
        var b = a.currentSrc,
            c = a.imageResources;
        a = a.videoResources;
        return i.jsxs(i.Fragment, {
            children: [i.jsx("p", {
                children: "Available Qualities"
            }), i.jsx("ul", {
                className: "_ac4a",
                children: (c = (c = c) != null ? c : a) == null ? void 0 : c.map(function(a) {
                    var c = a.src === b;
                    return i.jsx("li", {
                        className: c ? "_ac4b" : "",
                        children: i.jsxs("p", {
                            children: [a.configWidth, "w x ", a.configHeight, "h"]
                        })
                    })
                })
            })]
        })
    }

    function a(a) {
        var b = a.imageRef;
        b = b === void 0 ? null : b;
        var c = a.post,
            e = a.videoRef;
        e = e === void 0 ? null : e;
        a = a.newVideoPlayer;
        var f = "";
        b != null && (f = b.currentSrc);
        e != null && (f = e.currentSrc);
        var g = b == null ? "Video" : "Image";
        g === "Video" && (a === !0 ? g = "Video (Next gen player)" : g = "Video (Legacy player)");
        return i.jsxs("div", {
            className: "_ac49",
            children: [i.jsxs("p", {
                children: ["Media type: ", g]
            }), i.jsxs("p", {
                children: ["Post ID: ", c.id]
            }), i.jsxs("p", {
                children: ["Has audio: ", c.hasAudio === !0 ? "true" : "false"]
            }), i.jsxs("p", {
                children: ["Browser Bandwidth Estimate: ", (a = d("PolarisNetworkInfo").getNavigatorConnection()) == null ? void 0 : a.downlink, " Mbps"]
            }), b !== null && i.jsxs(i.Fragment, {
                children: [i.jsxs("p", {
                    children: ["Element Size: ", b == null ? void 0 : b.width, "w x ", b == null ? void 0 : b.height, "h"]
                }), i.jsx(j, {
                    currentSrc: f,
                    imageResources: c.displayResources
                })]
            }), e !== null && i.jsxs(i.Fragment, {
                children: [i.jsxs("p", {
                    children: ["Element Size: ", e == null ? void 0 : e.clientWidth, "w x ", e == null ? void 0 : e.clientHeight, "h"]
                }), i.jsx(j, {
                    currentSrc: f,
                    videoResources: c.videoResources
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);