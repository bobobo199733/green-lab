if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("ZenonCallInviteModelTypes", [], function(a, b, c, d, e, f) {
    "use strict";
    a = {
        missed: "missed",
        ringing: "ringing",
        unsupported_browser: "unsupported_browser"
    };
    f.CallInviteModelType = a
}, 66);
__d("IGWebPreCallContext", ["react"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = a(null);
    g["default"] = b
}, 98);
__d("PolarisIGCoreCallFilled24Icon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M4.9 24.002q-.2 0-.4-.008a3.319 3.319 0 0 1-2.161-.92A18.862 18.862 0 0 1 .454 21.02a2.223 2.223 0 0 1 .171-2.893 14.91 14.91 0 0 1 5.829-4.014 2.5 2.5 0 0 1 1.896.186l.96.512a.888.888 0 0 0 .75.044 8.653 8.653 0 0 0 2.872-1.922 8.66 8.66 0 0 0 1.922-2.871.889.889 0 0 0-.044-.75l-.512-.962a2.495 2.495 0 0 1-.186-1.895 14.906 14.906 0 0 1 4.014-5.83 2.22 2.22 0 0 1 2.893-.17 18.89 18.89 0 0 1 2.056 1.884 3.323 3.323 0 0 1 .92 2.16c.206 5.552-3.946 10.564-6.44 13.057-2.432 2.433-7.264 6.446-12.654 6.446Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreXFilledIcon", ["PolarisIGCoreXPanoFilledIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreXPanoFilledIcon"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("DocumentTitle", ["Arbiter"], function(a, b, c, d, e, f, g) {
    var h = 1500,
        i = null,
        j = !1,
        k = 0,
        l = [],
        m = null,
        n = document.title,
        o = 0;

    function p() {
        l.length > 0 ? !j ? (q(l[k].title), k = ++k % l.length) : r() : (clearInterval(i), i = null, r())
    }

    function q(a) {
        document.title = a, j = !0
    }

    function r() {
        s.set(m || n, !0), j = !1
    }
    var s = function() {
        function a(a) {
            this.$1 = a
        }
        a.get = function() {
            return n
        };
        a.set = function(a, b) {
            var d = a.toString();
            document.title = d;
            !b ? (n = d, m = null, c("Arbiter").inform("update_title", a)) : m = d
        };
        a.blink = function(b) {
            b = {
                title: b.toString()
            };
            l.push(b);
            i === null && (i = setInterval(p, h));
            return new a(b)
        };
        var b = a.prototype;
        b.stop = function() {
            var a = l.indexOf(this.$1);
            a >= 0 && (l.splice(a, 1), k > a ? k-- : k == a && k == l.length && (k = 0))
        };
        a.badge = function(b) {
            var d = a.get();
            d = b ? "(" + b + ") " + d : d;
            a.set(d, !0);
            c("Arbiter").inform("update_title_badge", b, "state");
            o = b
        };
        a.preserveBadgeAndSet = function(b) {
            a.set(b, !1), c("Arbiter").inform("update_title", b), a.badge(o)
        };
        return a
    }();
    g["default"] = s
}, 98);
__d("useBlinkDocumentTitle", ["DocumentTitle", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;

    function a(a) {
        h(function() {
            if (a == null) return function() {};
            var b = c("DocumentTitle").blink(a);
            return function() {
                b.stop()
            }
        }, [a])
    }
    g["default"] = a
}, 98);
__d("PolarisIncomingCallBlinkingTitle.react", ["fbt", "PolarisCallGatingHelpers", "react", "useBlinkDocumentTitle"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a = a.callerName;
        return d("PolarisCallGatingHelpers").isWebCallingRingtoneEnabled() && a != null ? i.jsx(j, {
            callerName: a
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function j(a) {
        a = a.callerName;
        c("useBlinkDocumentTitle")(h._("{caller_name} is calling", [h._param("caller_name", a)]));
        return null
    }
    g["default"] = a
}, 98);
__d("PolarisIncomingCall.react", ["cx", "IGCoreModal", "IGWebPreCallContext", "PolarisCallGatingHelpers", "PolarisCallNavigator", "PolarisDirectLogger", "PolarisDirectStrings", "PolarisIGCoreBox", "PolarisIGCoreCallFilled24Icon", "PolarisIGCorePressable", "PolarisIGCoreText", "PolarisIGCoreVideoChatFilled24Icon", "PolarisIGCoreXFilledIcon", "PolarisIncomingCallActions", "PolarisIncomingCallBlinkingTitle.react", "PolarisUserAvatar.react", "ZenonCallInviteModelTypes", "bx", "cr:3473", "react", "react-redux-wwwig", "usePolarisMQTT"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useContext,
        k = e.useEffect;

    function a() {
        var a = function(a) {
                if (a && a.type === d("ZenonCallInviteModelTypes").CallInviteModelType.ringing) {
                    var b;
                    b = (b = a.controllerParams.serverInfoData) != null ? b : "";
                    var c = a.requestingVideo;
                    a = (a = a.controllerParams.appMessages) == null ? void 0 : a.ring_data;
                    var e = "",
                        f = "",
                        g = "",
                        h, i = [],
                        j = [];
                    if (a != null) {
                        a = JSON.parse(a);
                        g = a.display_name;
                        h = a.display_uri;
                        f = a.group_name;
                        e = a.ig_thread_id;
                        i = a.participant_usernames;
                        j.push(h);
                        if (f == null) {
                            try {
                                i = JSON.parse(i)
                            } catch (a) {}
                            f = Array.isArray(i) ? [g].concat(i).join(", ") : g
                        }
                    }
                    return {
                        avatarUris: j,
                        hasVideo: c,
                        igThreadId: e,
                        serverInfoData: b,
                        threadName: f,
                        callerName: g
                    }
                } else return null
            },
            e = b("cr:3473") == null ? void 0 : b("cr:3473").useCallInvite(),
            f = b("cr:3473") == null ? void 0 : b("cr:3473").useAcceptCallCallback(),
            g = d("react-redux-wwwig").useDispatch(),
            h = c("usePolarisMQTT")(),
            l = j(c("IGWebPreCallContext")),
            m = l ? l.callInviteModel : null;
        l = d("react-redux-wwwig").useSelector(function(a) {
            return a.incomingCall
        });
        var n = l.acknowledged,
            o = l.avatarUris,
            p = l.hasVideo,
            q = l.igThreadId,
            r = l.serverInfoData,
            s = l.threadName;
        l = l.callerName;
        a = e ? a(e) : null;
        a != null ? (o = a.avatarUris, p = a.hasVideo, q = a.igThreadId, r = a.serverInfoData, s = a.threadName, l = a.callerName, n = !1) : d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled() && (n = !0);
        e = function() {
            d("PolarisDirectLogger").DirectLogger.logDirectEvent("IncomingCall", "join_button_click", {
                server_info_data: r,
                has_video: p,
                ig_thread_id: q
            }), d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled() && f ? f({
                trigger: "incoming_call_modal"
            }) : (g(d("PolarisIncomingCallActions").ackCall()), d("PolarisCallNavigator").launchCall(q, p, r))
        };
        var t = !n && r != null && q != null && d("PolarisCallGatingHelpers").isWebCallingEnabled();
        k(function() {
            t && d("PolarisDirectLogger").DirectLogger.logDirectEvent("IncomingCall", "incoming_call_impression", {
                ig_thread_id: q,
                server_info_data: r,
                has_video: p
            })
        }, [p, q, t, r]);
        a = function() {
            d("PolarisDirectLogger").DirectLogger.logDirectEvent("IncomingCall", "decline_button_click", {
                server_info_data: r,
                has_video: p,
                ig_thread_id: q
            }), d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled() ? m == null ? void 0 : m.decline() : (g(d("PolarisIncomingCallActions").ackCall()), h == null ? void 0 : h.sendRtcHangupRequest(r))
        };
        return t ? i.jsxs(c("IGCoreModal"), {
            children: [d("PolarisCallGatingHelpers").isWebCallingRingtoneEnabled() && i.jsx("audio", {
                autoPlay: !0,
                loop: !0,
                src: c("bx").getURL(c("bx")("6022")),
                type: "audio/m4a"
            }), i.jsx(c("PolarisIncomingCallBlinkingTitle.react"), {
                callerName: l
            }), i.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "center",
                height: 312,
                padding: 8,
                width: 400,
                children: [i.jsx(c("PolarisUserAvatar.react"), {
                    isLink: !1,
                    profilePictureUrl: o[0],
                    size: 92
                }), i.jsx(c("PolarisIGCoreBox"), {
                    marginBottom: 2,
                    marginTop: 4,
                    maxWidth: 400,
                    paddingX: 8,
                    children: i.jsx(c("PolarisIGCoreText").Headline2, {
                        display: "truncated",
                        textAlign: "center",
                        weight: "semibold",
                        zeroMargin: !0,
                        children: s
                    })
                }), i.jsx(c("PolarisIGCoreBox"), {
                    marginBottom: 8,
                    children: i.jsx(c("PolarisIGCoreText").Body, {
                        color: "ig-secondary-text",
                        zeroMargin: !0,
                        children: "Incoming " + (p ? "video" : "audio") + " call..."
                    })
                }), i.jsxs(c("PolarisIGCoreBox"), {
                    direction: "row",
                    children: [i.jsx(c("PolarisIGCoreBox"), {
                        marginEnd: 6,
                        children: i.jsx(c("PolarisIGCorePressable"), {
                            onPress: a,
                            children: i.jsx("div", {
                                className: "_aacd _aace",
                                children: i.jsx(c("PolarisIGCoreXFilledIcon"), {
                                    alt: d("PolarisDirectStrings").DECLINE_CALL_MODAL_STRING,
                                    color: "web-always-white"
                                })
                            })
                        })
                    }), i.jsx(c("PolarisIGCorePressable"), {
                        onPress: e,
                        children: i.jsx("div", {
                            className: "_aacd _aacf",
                            children: p ? i.jsx(c("PolarisIGCoreVideoChatFilled24Icon"), {
                                alt: d("PolarisDirectStrings").JOIN_CALL_MODAL_STRING,
                                color: "web-always-white"
                            }) : i.jsx(c("PolarisIGCoreCallFilled24Icon"), {
                                alt: d("PolarisDirectStrings").JOIN_CALL_MODAL_STRING,
                                color: "web-always-white"
                            })
                        })
                    })]
                })]
            })]
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);