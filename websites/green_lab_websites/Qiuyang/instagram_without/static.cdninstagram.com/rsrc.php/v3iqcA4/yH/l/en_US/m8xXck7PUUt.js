if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("DetectBrokenProxyCache", ["AsyncSignal", "Cookie", "URI"], function(a, b, c, d, e, f) {
    var g;

    function a(a, c) {
        var d = b("Cookie").get(c);
        if (d != a && d != null && a != "0") {
            c = {
                c: "si_detect_broken_proxy_cache",
                m: c + " " + a + " " + d
            };
            a = new(g || (g = b("URI")))("/platform/scribe_endpoint.php").getQualifiedURI().toString();
            new(b("AsyncSignal"))(a, c).send()
        }
    }
    e.exports = {
        run: a
    }
}, null);
__d("MWChatMarkAllAsSeenMutation_facebookRelayOperation", [], function(a, b, c, d, e, f) {
    e.exports = "5451025724930811"
}, null);
__d("MWChatMarkAllAsSeenMutation.graphql", ["MWChatMarkAllAsSeenMutation_facebookRelayOperation"], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            c = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "ViewerMessagesMarkAllSeenResponsePayload",
                kind: "LinkedField",
                name: "viewer_messages_mark_all_seen",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "client_mutation_id",
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "MWChatMarkAllAsSeenMutation",
                selections: c,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "MWChatMarkAllAsSeenMutation",
                selections: c
            },
            params: {
                id: b("MWChatMarkAllAsSeenMutation_facebookRelayOperation"),
                metadata: {},
                name: "MWChatMarkAllAsSeenMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}, null);
__d("FleetBeaconSubscriptionNetwork_LogMutation_facebookRelayOperation", [], function(a, b, c, d, e, f) {
    e.exports = "5522532457760182"
}, null);
__d("FleetBeaconSubscriptionNetwork_LogMutation.graphql", ["FleetBeaconSubscriptionNetwork_LogMutation_facebookRelayOperation"], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            c = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "FleetBeaconLogResponsePayload",
                kind: "LinkedField",
                name: "fleet_beacon_log",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "success",
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                selections: c,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                selections: c
            },
            params: {
                id: b("FleetBeaconSubscriptionNetwork_LogMutation_facebookRelayOperation"),
                metadata: {},
                name: "FleetBeaconSubscriptionNetwork_LogMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}, null);
__d("FleetBeaconSubscriptionNetwork_PublishMutation_facebookRelayOperation", [], function(a, b, c, d, e, f) {
    e.exports = "4993530164018171"
}, null);
__d("FleetBeaconSubscriptionNetwork_PublishMutation.graphql", ["FleetBeaconSubscriptionNetwork_PublishMutation_facebookRelayOperation"], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            c = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "FleetBeaconPublishResponsePayload",
                kind: "LinkedField",
                name: "fleet_beacon_publish",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "success",
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                selections: c,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                selections: c
            },
            params: {
                id: b("FleetBeaconSubscriptionNetwork_PublishMutation_facebookRelayOperation"),
                metadata: {},
                name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}, null);
__d("FleetBeaconSubscriptionNetwork_Subscription_facebookRelayOperation", [], function(a, b, c, d, e, f) {
    e.exports = "8189523354422598"
}, null);
__d("FleetBeaconSubscriptionNetwork_Subscription.graphql", ["FleetBeaconSubscriptionNetwork_Subscription_facebookRelayOperation"], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            c = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "TestFleetBeaconSubscribeResponsePayload",
                kind: "LinkedField",
                name: "test_fleet_beacon_subscribe",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "client_subscription_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "test_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "message",
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                selections: c,
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                selections: c
            },
            params: {
                id: b("FleetBeaconSubscriptionNetwork_Subscription_facebookRelayOperation"),
                metadata: {
                    subscriptionName: "test_fleet_beacon_subscribe"
                },
                name: "FleetBeaconSubscriptionNetwork_Subscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}, null);
__d("CometRouteActorToasterQuery_facebookRelayOperation", [], function(a, b, c, d, e, f) {
    e.exports = "4961682900536225"
}, null);
__d("CometRouteActorToasterQuery.graphql", ["CometRouteActorToasterQuery_facebookRelayOperation"], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "scale"
            }],
            c = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            },
            d = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            },
            e = {
                alias: "toast_icon",
                args: [{
                    kind: "Literal",
                    name: "height",
                    value: 32
                }, {
                    kind: "Variable",
                    name: "scale",
                    variableName: "scale"
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 32
                }],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null
                }],
                storageKey: null
            };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometRouteActorToasterQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actor",
                        plural: !1,
                        selections: [c, d, e],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometRouteActorToasterQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actor",
                        plural: !1,
                        selections: [c, d, e, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: b("CometRouteActorToasterQuery_facebookRelayOperation"),
                metadata: {},
                name: "CometRouteActorToasterQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}, null);
__d("CometVirtualCursorStatus", ["UserAgent", "cr:1345969", "setTimeout"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
        i = null;

    function j() {
        i || (i = window.addEventListener("blur", function() {
            h = null, k()
        }))
    }

    function k() {
        i && (i.remove(), i = null)
    }

    function a(a) {
        h = a.keyCode, j()
    }

    function d(a) {
        h = null, k()
    }
    if (typeof window !== "undefined" && window.document && window.document.createElement) {
        f = document.documentElement;
        if (f)
            if (f.addEventListener) f.addEventListener("keydown", a, !0), f.addEventListener("keyup", d, !0);
            else if (f.attachEvent) {
            f = f.attachEvent;
            f("onkeydown", a);
            f("onkeyup", d)
        }
    }
    var l = {
            getKeyDownCode: function() {
                return h
            },
            isKeyDown: function() {
                return !!h
            }
        },
        m = !1,
        n = !1,
        o = null,
        p = !1;

    function q(a) {
        var b = new Set(),
            d = l.isKeyDown(),
            e = a.WEBKIT_FORCE_AT_MOUSE_DOWN,
            f = a.clientX,
            g = a.clientY,
            h = a.isTrusted,
            i = a.mozInputSource,
            j = a.offsetX,
            k = a.offsetY,
            o = a.webkitForce;
        f === 0 && g === 0 && j >= 0 && k >= 0 && n && h && i == null && b.add("Chrome");
        m && n && !d && o != null && o < e && j === 0 && k === 0 && i == null && b.add("Safari-edge");
        f === 0 && g === 0 && j < 0 && k < 0 && n && i == null && b.add("Safari-old");
        if (!m && !n && !d && h && c("UserAgent").isBrowser("IE >= 10") && i == null) {
            o = a.target;
            e = o.clientHeight;
            d = o.clientWidth;
            f < 0 && g < 0 ? b.add("IE") : (j < 0 || j > d) && (k < 0 || k > e) && b.add("MSIE")
        }
        i === 0 && h && b.add("Firefox");
        return b
    }

    function r() {
        m = !0, c("setTimeout")(function() {
            m = !1
        }, 0)
    }

    function s() {
        n = !0, c("setTimeout")(function() {
            n = !1
        }, 0)
    }

    function t(a) {
        p && b("cr:1345969").log({
            extra_data: {
                source_app: "comet"
            },
            indicated_browsers: o,
            is_virtual_cursor_action: a
        })
    }

    function u(a) {
        o === null && (o = Array.from(q(a)));
        p = o != null && o.length > 0;
        a = a.target != null && a.target.getAttribute != null && a.target.getAttribute("data-accessibilityid") === "virtual_cursor_trigger";
        t(a);
        c("setTimeout")(function() {
            p = !1, o = null
        }, 0)
    }

    function e() {
        document.addEventListener("click", u, !0), document.addEventListener("mousedown", r, !0), document.addEventListener("mouseup", s, !0)
    }
    g.initLogging = e
}, 98);
__d("MWChatMarkAllAsSeenMutation", ["CometRelay", "MWChatMarkAllAsSeenMutation.graphql", "relay-runtime"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h !== void 0 ? h : h = b("MWChatMarkAllAsSeenMutation.graphql");

    function j(a) {
        a = a.get(d("relay-runtime").VIEWER_ID);
        if (a == null) return;
        a = a.getLinkedRecord("message_threads");
        if (a == null) return;
        var b = a.getValue("unseen_count");
        if (typeof b !== "number") return;
        a.setValue(0, "unseen_count")
    }

    function a(a, b, c, e) {
        return d("CometRelay").commitMutation(a, {
            mutation: i,
            onCompleted: c,
            onError: e,
            optimisticUpdater: function(a) {
                j(a)
            },
            updater: function(a) {
                j(a)
            },
            variables: b
        })
    }
    g["default"] = a
}, 98);
__d("CometFullPageCompatRoot.react", ["BaseViewportMarginsContext", "CometBlueBridgeContext", "CometCompatBroker", "CometDOMOnlyBoundary.react", "CometHeroHoldTrigger.react", "CometOnRefresh.react", "CometRelay", "CometRouteRenderType", "CometRouteURL", "CurrentUser", "FBLogger", "InteractionTracing", "MWChatMarkAllAsSeenMutation", "clearTimeout", "cometUniqueID", "cr:683059", "getCompatIframeSource", "react", "setTimeout", "useCompatCanvasAppListener", "useCompatChatTabListener", "useCompatClickEventDispatcher", "useCompatDarkModeListener", "useCompatDocumentFocusChange", "useCompatReloadListener", "useCompatRouteListener", "useCompatTimeSpentBitArrayListener", "useCurrentDisplayMode", "useCurrentRoute", "useLayoutEffect_SAFE_FOR_SSR", "usePrevious"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
        j = e.useContext,
        k = e.useEffect,
        l = e.useRef,
        m = e.useState;

    function a(a) {
        var e = a.routeProps.maintainKey,
            f = c("useCurrentDisplayMode")();
        f = f === "dark";
        var g = j(c("CometBlueBridgeContext")),
            n = c("usePrevious")(e),
            o = c("useCurrentRoute")(),
            p = d("CometRouteURL").useRouteURL(),
            q = (o = o == null ? void 0 : o.routePath) != null ? o : p;
        g && c("FBLogger")("BlueOnComet").mustfix("Blue on Comet is not allowed in Comet on Blue, was trying to load " + q);
        o = m(c("cometUniqueID")());
        var r = o[0],
            s = o[1],
            t = c("getCompatIframeSource")(p, r, g),
            u = l(null);
        o = m(t);
        g = o[0];
        var v = o[1],
            w = l(null),
            x = l(null);
        o = m(!0);
        var y = o[0],
            z = o[1];
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            b("cr:683059") && (b("cr:683059").addMarkerPoint("BoC_start"), w.current = b("cr:683059").holdTrigger(r), x.current = c("setTimeout")(function() {
                w.current && w.current(), w.current = null
            }, 6e4), b("cr:683059").addAnnotation("routePath", q));
            z(!1);
            return function() {
                w.current && w.current()
            }
        }, [r, g, q]);
        o = m(new(c("CometCompatBroker"))());
        var A = o[0],
            B = d("CometRelay").useRelayEnvironment(),
            C = l(null);
        o = j(c("BaseViewportMarginsContext"));
        var D = i(function() {
            s(c("cometUniqueID")())
        }, [s]);
        d("CometOnRefresh.react").useOnRefresh(D);
        D = i(function() {
            b("cr:683059") && (b("cr:683059").addVisualElement(C.current, "BoCIframe"), b("cr:683059").addMarkerPoint("BoC_end"), c("clearTimeout")(x.current), w.current && w.current(), w.current = null), z(!1)
        }, [C, w]);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            A.init(function() {}, r);
            return A.cleanup
        }, [A, r, g]);
        c("useCompatRouteListener")(A, {
            forceSelf: !1,
            noMaintain: !1
        });
        c("useCompatReloadListener")(A, {
            forceSelf: !0
        });
        c("useCompatCanvasAppListener")(A, {
            priority: c("CurrentUser").isLoggedIn() ? "HIGH" : "LOW"
        });
        c("useCompatDocumentFocusChange")(A);
        c("useCompatTimeSpentBitArrayListener")(A);
        c("useCompatChatTabListener")(A);
        c("useCompatDarkModeListener")(A);
        var E = a.customCompatEventHandler;
        k(function() {
            if (E) return E(A)
        }, [A, E]);
        k(function() {
            if (p.startsWith("/messages")) {
                c("InteractionTracing").getPendingInteractions().forEach(function(a) {
                    a.addGlobalMetadata("afterMessengerLoaded", 1)
                });
                if (!t.includes("/t/") && u.current != null && u.current.includes("/t/")) return
            }
            t !== u.current && (Boolean(e) && e === n ? A.sendChildFrameParams({
                compatAction: "transitionpage",
                rel: "",
                uri: t
            }) : v(t));
            u.current = t
        }, [A, t, e, n, p]);
        k(function() {
            if (p.startsWith("/messages")) {
                var a = String(Date.now());
                c("MWChatMarkAllAsSeenMutation")(B, {
                    input: {
                        actor_id: c("CurrentUser").getID(),
                        precise_timestamp: a
                    }
                })
            }
        }, [B, p]);
        c("useCompatClickEventDispatcher")(C);
        a = p.includes("/groups/") && p.includes("/chats/");
        a = p.startsWith("/messages") || a;
        return h.jsx("div", {
            className: "xn9wirt x193iq5w x5yr21d",
            children: h.jsxs(c("CometDOMOnlyBoundary.react"), {
                children: [h.jsx(c("CometHeroHoldTrigger.react"), {
                    description: "BoC iframe",
                    hold: y
                }), h.jsx("iframe", {
                    className: "xh8yej3 xat3117 x1lliihq xxxdfa6 x112ta8 xwmqs3e x76ihet" + (f && !a ? " x1leefcp" : "") + (d("CometRouteRenderType").useIsPushView() && o.top === 0 ? " x1dr59a3" : ""),
                    onError: D,
                    onLoad: D,
                    ref: C,
                    src: g
                }, g)]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("CometIconWirelessSlashFilled.react", ["CometSVGIcon.react", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("CometSVGIcon.react"), babelHelpers["extends"]({
            viewBox: "0 0 24 24"
        }, a, {
            children: h.jsx("path", {
                d: "M23.7805.2195c.2925.293.2925.768 0 1.061l-22.5 22.5C1.134 23.927.942 24 .75 24c-.192 0-.384-.073-.5305-.2195-.2925-.293-.2925-.768 0-1.061l12.1967947-12.1971509c-2.3773758-.1150468-4.79162015.7286756-6.6038447 2.5401009-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.024 0-1.414 2.65728981-2.65728981 6.3696459-3.62280965 9.8005664-2.90852144l2.430738-2.43186193C11.7816792 4.58111626 6.15198938 5.65271062 2.27735 9.52735c-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.0235 0-1.414 4.6714534-4.67191574 11.571522-5.78608437 17.3096457-3.34843552L22.7195.2195c.293-.2925.768-.2925 1.061 0zM12 18.5c.6905 0 1.25.5595 1.25 1.25S12.6905 21 12 21s-1.25-.5595-1.25-1.25.5595-1.25 1.25-1.25zm1.4175-4.81495c.9705.2455 1.8905.741 2.6485 1.499.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.512-.0975-.707-.293-.7835333-.7835333-1.8301422-1.1445778-2.8581093-1.0880116L11.574 15.52855l1.8435-1.8435zm3.8154-3.8154c.848.4725 1.649 1.059 2.3685 1.779.391.39.391 1.023 0 1.414-.195.195-.451.293-.707.293-.2555 0-.5115-.098-.707-.293-.7285-.728-1.5575-1.291-2.439-1.7085zm2.1908-2.1908l1.4425-1.4425c.8.545 1.5615 1.168 2.2705 1.877.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.5115-.0975-.707-.293-.5933333-.59333333-1.2283333-1.11861111-1.895162-1.57959491L19.4237 7.67885l1.4425-1.4425z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("CometUncaughtError.react", ["fbt", "CometContentArea.react", "NullStateGeneral", "TetraNullState.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a() {
        return i.jsx("div", {
            className: "xh8yej3 xixxii4 xl56j7k x1dr59a3 x78zum5 x6s0dn4",
            children: i.jsx(c("CometContentArea.react"), {
                verticalAlign: "middle",
                children: i.jsx(c("TetraNullState.react"), {
                    headline: h._("Sorry! Something went wrong :("),
                    icon: c("NullStateGeneral")
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("CometTheme.react", ["BaseTheme.react", "CometStyleXSheet", "react", "useCurrentDisplayMode"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useMemo,
        j = {
            root: {
                boxSizing: "x1afcbsf",
                position: "x1uhb9sk",
                zIndex: "x1swf91x"
            }
        },
        k = {
            dark: d("CometStyleXSheet").DARK_MODE_CLASS_NAME,
            light: d("CometStyleXSheet").LIGHT_MODE_CLASS_NAME,
            type: "CLASSNAMES"
        };

    function a(a) {
        var b = a.theme,
            d = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["theme", "xstyle"]);
        var e = c("useCurrentDisplayMode")(),
            f = i(function() {
                return b === "invert" ? e === "dark" ? "light" : "dark" : b
            }, [e, b]);
        return h.jsx(c("BaseTheme.react"), babelHelpers["extends"]({
            config: k,
            displayMode: f,
            xstyle: [j.root, d]
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("CometToasterView_DO_NOT_USE.react", ["BaseContextualLayerAnchorRoot.react", "BasePortal.react", "BaseToastAnimationInternal.react", "CometGlobalPanelGating", "XPlatReactToasterView.react", "gkx", "react", "stylex", "useCometRouterState", "useToasterStateManager"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
        j = b.useState,
        k = {
            list: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                listStyle: "xe8uvvx",
                maxWidth: "x193iq5w"
            },
            root: {
                bottom: "x1ey2m1c",
                display: "x78zum5",
                end: "xds687c",
                pointerEvents: "x47corl",
                position: "xixxii4",
                start: "x1uvyrtv",
                zIndex: "xoegz02"
            },
            rootBlue: {
                zIndex: "x1jvg36b"
            },
            rootWithGlobalPanelHome: {
                start: "x17qophe",
                "@media (max-width: 1159px)": {
                    start: "xv0u79y"
                }
            },
            rootWorkplaceLegacy: {
                zIndex: "xdwmgzo"
            },
            toast: {
                paddingTop: "xyamay9",
                paddingEnd: "x1pi30zi",
                paddingBottom: "x1l90r2v",
                paddingStart: "x1swvt13",
                pointerEvents: "x71s49j",
                "@media (max-width: 899px)": {
                    maxWidth: "xx1nl2z"
                }
            }
        },
        l = {
            center: {
                justifyContent: "xl56j7k"
            },
            end: {
                justifyContent: "x13a6bvl"
            },
            start: {
                justifyContent: "x1nhvcw1"
            }
        },
        m = {
            full: {
                maxWidth: "x193iq5w"
            },
            regular: {
                maxWidth: "xpqan2r"
            }
        };

    function a(a) {
        var b = a.align;
        b = b === void 0 ? "start" : b;
        var e = a.filterToasts,
            f = a.maxVisible;
        f = f === void 0 ? 1 : f;
        a = a.maxWidth;
        var g = a === void 0 ? "full" : a,
            n = c("useToasterStateManager")();
        a = j(function() {
            return n.getEmptyState()
        });
        var o = a[0],
            p = a[1];
        i(function() {
            var a = n.registerView(p, 0);
            return a.remove
        }, [n]);
        a = ((a = c("useCometRouterState")()) == null ? void 0 : a.main.route.tabKey) === "home";
        return h.jsx(c("BasePortal.react"), {
            target: document.body,
            xstyle: [k.root, c("gkx")("708253") ? d("CometGlobalPanelGating").isGlobalPanelEnabled() && a ? k.rootWithGlobalPanelHome : null : c("gkx")("1341692") ? k.rootWorkplaceLegacy : k.rootBlue, l[b]],
            children: h.jsx("ul", {
                className: c("stylex")(k.list),
                children: h.jsx(c("XPlatReactToasterView.react"), {
                    filterToasts: e,
                    maxVisible: f,
                    onExpireToast: function(a) {
                        n.expire(a)
                    },
                    toasterState: o,
                    children: function(a, b, d, e) {
                        return h.jsx(c("BaseToastAnimationInternal.react"), {
                            expired: d,
                            id: b,
                            position: e,
                            xstyle: [k.toast, m[c("gkx")("1196") ? "regular" : g]],
                            children: h.jsx(c("BaseContextualLayerAnchorRoot.react"), {
                                children: a
                            })
                        }, e)
                    }
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("CometErrorLogging", ["ClientConsistency", "Env", "ErrorGuard", "ErrorSetup", "ErrorTransport", "JSErrorLoggingConfig", "SiteData", "WebSession"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        c("ErrorGuard").skipGuardGlobal(c("Env").nocatch);
        b = a;
        if (c("JSErrorLoggingConfig").sampleWeight != null) {
            c("ErrorSetup").setup({
                additional_client_revisions: c("ClientConsistency").getAdditionalRevisions(),
                appId: c("JSErrorLoggingConfig").appId,
                cavalry_lid: b,
                client_revision: c("SiteData").client_revision,
                extra: c("JSErrorLoggingConfig").extra,
                loggingFramework: "comet",
                projectBlocklist: c("JSErrorLoggingConfig").projectBlocklist,
                push_phase: c("SiteData").push_phase,
                report_source: c("JSErrorLoggingConfig").report_source,
                report_source_ref: c("JSErrorLoggingConfig").report_source_ref,
                sample_weight: (a = c("JSErrorLoggingConfig").sampleWeight) != null ? a : 0,
                script_path: "/comet",
                server_revision: c("SiteData").server_revision,
                spin: c("SiteData").spin,
                web_session_id: d("WebSession").getId()
            }, d("ErrorTransport").log)
        }
    }
    c("ErrorSetup").preSetup();
    g.init = a
}, 98);
__d("CometBootloaderEventsTypedLoggerLite", ["generateLiteTypedLogger"], function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:CometBootloaderEventsLoggerConfig")
}, null);
__d("HasteResponseFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1823926");
    c = b("FalcoLoggerInternal").create("haste_response", a);
    e.exports = c
}, null);
__d("CometBootloaderLoggerUtil", ["BootloaderEvents", "BootloaderEventsPerf", "CometBootloaderEventsTypedLoggerLite", "CometTimeSpentNavigation", "HasteResponseFalcoEvent", "ResourceTimingStore", "SiteData", "performanceNavigationStart"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = !1;

    function a(a) {
        var b = a.bl_sample_rate,
            e = a.hr_sample_rate,
            f = a.parent_lid;
        if (h || !(b || e)) return;
        h = !0;
        d("ResourceTimingStore").init();
        var g = function(a) {
            return {
                ms_since_navstart: Math.round(a - c("performanceNavigationStart")()),
                parent_lid: f,
                pkg_cohort: c("SiteData").pkg_cohort,
                request_path: (a = c("CometTimeSpentNavigation").getPathInfo()) == null ? void 0 : a.name,
                svn_rev: c("SiteData").client_revision
            }
        };
        e && d("BootloaderEvents").onHasteResponse(function(a) {
            return c("HasteResponseFalcoEvent").log(function() {
                var b = d("BootloaderEventsPerf").computeHRData(a),
                    c = d("BootloaderEventsPerf").flattenData(b);
                return babelHelpers["extends"]({}, c, g(b.start_time))
            })
        });
        b && d("BootloaderEvents").onBootload(function(a) {
            a = d("BootloaderEventsPerf").computeBLData(a);
            var e = d("BootloaderEventsPerf").flattenData(a);
            c("CometBootloaderEventsTypedLoggerLite").log(babelHelpers["extends"]({}, e, g(a.start_time)), {
                weight: b
            })
        })
    }
    g.initLogging = a
}, 98);
__d("CometPixelRatioUpdater", ["Cookie", "Run", "WebPixelRatio"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "dpr";

    function i(a) {
        c("Cookie").set(h, String(a))
    }

    function j() {
        window.devicePixelRatio !== d("WebPixelRatio").get() && i(window.devicePixelRatio)
    }

    function a() {
        j(), d("Run").onBeforeUnload(j, !1), "onpagehide" in window && window.addEventListener("pageHide", j)
    }
    g.startDetecting = a
}, 98);
__d("CometNetworkStatusToast", ["fbt", "ix", "BaseToasterStateManager", "CometIconWirelessSlashFilled.react", "CometRelayEnvironmentFactory", "NetworkStatus", "SVGIcon", "TetraIcon.react", "cometPushToast", "fbicon", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = null;

    function l(a) {
        a = a.online;
        var b = c("BaseToasterStateManager").getInstance();
        k != null && (b.expire(k), k = null);
        k = a ? d("cometPushToast").cometPushToast({
            icon: j.jsx(c("TetraIcon.react"), {
                color: "positive",
                icon: d("fbicon")._(i("485124"), 24)
            }),
            message: h._("Your internet connection was restored.")
        }, 4e3, b) : d("cometPushToast").cometPushToast({
            action: {
                label: h._("Refresh"),
                onPress: function() {
                    d("CometRelayEnvironmentFactory").commitLocalUpdateForEachEnvironment(function(a, b, c) {
                        c.invalidateStore()
                    })
                }
            },
            icon: j.jsx(c("TetraIcon.react"), {
                color: "disabled",
                icon: d("SVGIcon").legacySVGIcon(c("CometIconWirelessSlashFilled.react")),
                size: 24
            }),
            message: h._("You are currently offline.")
        }, Infinity, b)
    }

    function a() {
        c("NetworkStatus").onChange(l)
    }
    g.subscribe = a
}, 98);
__d("SimplePageLoadLogger", ["ODS", "performance"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        d("ODS").bumpEntityKey(1678, "www_client_navigations", h())
    }

    function h() {
        if (c("performance").navigation == null || c("performance").navigation.type == null) return "UNSUPPORTED";
        switch (c("performance").navigation.type) {
            case c("performance").navigation.TYPE_NAVIGATE:
                return "NAVIGATE";
            case c("performance").navigation.TYPE_RELOAD:
                return "RELOAD";
            case c("performance").navigation.TYPE_BACK_FORWARD:
                return "BACK_FORWARD";
            case c("performance").navigation.TYPE_RESERVED:
                return "RESERVED";
            default:
                return "UNKNOWN"
        }
    }
    g.logPageNavigationType = a
}, 98);
__d("CometRootDeferredShared", ["CometBootloaderLoggerUtil", "CometErrorRoot.react", "CometFullPageCompatRoot.react", "CometNetworkStatusToast", "CometVCTracker", "CometVirtualCursorStatus", "DeferredCookie", "DetectBrokenProxyCache", "ErrorGuard", "JSScheduler", "SimplePageLoadLogger", "WebStorageMonster", "cr:10026", "cr:1201738", "cr:1332233", "cr:1516609", "cr:1813330", "cr:2718", "cr:653", "currentCometRouterInstance"], function(a, b, c, d, e, f, g) {
    "use strict";
    b("CometErrorRoot.react");
    b("CometFullPageCompatRoot.react");

    function a(a) {
        var e = a.blLoggingCavalryFields,
            f = a.deferredCookies,
            g = a.userID;
        c("ErrorGuard").applyWithGuard(function() {
            return d("CometBootloaderLoggerUtil").initLogging(e)
        }, null, []);
        c("ErrorGuard").applyWithGuard(function() {
            return d("CometVirtualCursorStatus").initLogging()
        }, null, []);
        c("ErrorGuard").applyWithGuard(function() {
            return d("CometNetworkStatusToast").subscribe()
        }, null, []);
        b("cr:10026") != null && c("ErrorGuard").applyWithGuard(function() {
            return b("cr:10026")(function() {
                var a;
                return (a = d("currentCometRouterInstance").get()) == null ? void 0 : (a = a.getCurrentRouterState()) == null ? void 0 : (a = a.main) == null ? void 0 : a.route
            })
        }, null, []);
        c("ErrorGuard").applyWithGuard(function() {
            return d("SimplePageLoadLogger").logPageNavigationType()
        }, null, []);
        d("JSScheduler").scheduleSpeculativeCallback(function() {
            c("WebStorageMonster").schedule()
        });
        d("JSScheduler").scheduleSpeculativeCallback(function() {
            d("DetectBrokenProxyCache").run(g, "c_user")
        });
        b("cr:1201738") && c("CometVCTracker").VisualCompletionTraceObserver.subscribe(function(a) {
            a.interactionType === "INITIAL_LOAD" && b("cr:1201738").init("comet.idle")
        });
        b("cr:653") && c("CometVCTracker").VisualCompletionTraceObserver.subscribe(function(a) {
            a.interactionType === "INITIAL_LOAD" && b("cr:653").init()
        });
        Object.keys(f).forEach(function(a) {
            var b = f[a],
                d = b.expiration_for_js,
                e = b.first_party_only,
                g = b.path,
                h = b.secure;
            b = b.value;
            c("DeferredCookie").addToQueue(a, b, d, g, e, !1, h)
        });
        b("cr:1332233") && c("ErrorGuard").applyWithGuard(function() {
            return b("cr:1332233")()
        }, null, []);
        b("cr:1516609") != null && c("ErrorGuard").applyWithGuard(function() {
            return b("cr:1516609").initSignalCollection()
        }, null, []);
        b("cr:1813330") && c("ErrorGuard").applyWithGuard(function() {
            return b("cr:1813330").init()
        }, null, []);
        b("cr:2718") && c("ErrorGuard").applyWithGuard(function() {
            return b("cr:2718").init()
        }, null, [])
    }
    g.initDeferred = a
}, 98);
__d("WebBrowserDimensionsTypedLoggerLite", ["generateLiteTypedLogger"], function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:WebBrowserDimensionsLoggerConfig")
}, null);
__d("CometBrowserDimensionsLogger", ["CometDebounce", "Cookie", "ExecutionEnvironment", "SiteData", "WebBrowserDimensionsTypedLoggerLite", "getViewportDimensions", "isInIframe"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
        i = !1,
        j = {
            height: 0,
            width: 0
        };

    function k() {
        h === null && (h = c("getViewportDimensions")());
        return h
    }

    function l() {
        var a = c("getViewportDimensions")(),
            b = a.height;
        a = a.width;
        (j.width !== a || j.height !== b) && (j = {
            height: b,
            width: a
        }, c("Cookie").set("wd", a + "x" + b))
    }

    function m() {
        if (!c("ExecutionEnvironment").canUseDOM || c("isInIframe")() || i) return;
        i = !0;
        l();
        window.addEventListener("resize", c("CometDebounce")(l, {
            wait: 250
        }), {
            passive: !0
        });
        window.addEventListener("focus", l, {
            passive: !0
        })
    }

    function a(a) {
        var b, d = k();
        m();
        b = {
            client_hint_width: a == null ? void 0 : a.clientHintWidth,
            pixel_ratio: (b = window.devicePixelRatio) != null ? b : 1,
            screen_x: window.screen.width,
            screen_y: window.screen.height,
            server_pixel_ratio: c("SiteData").pr,
            server_viewport_x: a == null ? void 0 : a.viewportWidth,
            server_viewport_y: a == null ? void 0 : a.viewportHeight,
            viewport_x: d.width,
            viewport_y: d.height
        };
        window.navigator && window.navigator.hardwareConcurrency && (b.cpu_cores_count = window.navigator.hardwareConcurrency);
        if (window.innerWidth > 0 && window.outerWidth > 0) {
            a = Math.round(window.outerWidth / window.innerWidth * 100) / 100;
            b.zoom_ratio = a
        }
        if (window.getComputedStyle && document.documentElement != null) {
            d = window.getComputedStyle(document.documentElement);
            d != null && (b.document_font_size = d.fontSize)
        }
        c("WebBrowserDimensionsTypedLoggerLite").log(b)
    }
    g.init = a
}, 98);
__d("MWChatTabEntryPoints.bs", [], function(a, b, c, d, e, f) {
    "use strict";
    a = {};
    f.tabEntryPoints = a
}, null);
__d("MessengerWebEntryPointsUtil.bs", ["MessengerWebEntryPoint"], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a === "pagesLikeInviteThem") return b("MessengerWebEntryPoint").PAGES_LIKE_INVITE_ITEM;
        else if (a === "pagesPrivateReply") return b("MessengerWebEntryPoint").PAGES_PRIVATE_REPLY;
        else if (a === "inboxActiveContacts" || a === "inboxArchived" || a === "inboxSpam" || a === "inboxFolder" || a === "inboxThreadList" || a === "inboxRecentThreads" || a === "inboxRemainingThreads" || a === "pendingRequests" || a === "inboxRestricted" || a === "archieve" || a === "inboxInThread" || a === "inboxPendingRequests") return b("MessengerWebEntryPoint").INBOX;
        else if (a === "jobs") return b("MessengerWebEntryPoint").jobs;
        else if (a === "storySeenByList" || a === "friendsTab") return b("MessengerWebEntryPoint").STORY_SEEN_BY_LIST;
        else if (a === "chatParticipants") return b("MessengerWebEntryPoint").ADD_PARTICIPANTS;
        else if (a === "compat") return b("MessengerWebEntryPoint").COMPAT;
        else if (a === "cookie") return b("MessengerWebEntryPoint").COOKIE;
        else if (a === "pagesAdminInviteItem") return b("MessengerWebEntryPoint").PAGES_ADMIN_INVITE_ITEM;
        else if (a === "groupWelcomePost") return b("MessengerWebEntryPoint").GROUP_WELCOME_POST;
        else if (a === "sidebarContactsList" || a === "sidebarGroupsList") return b("MessengerWebEntryPoint").SIDEBAR;
        else if (a === "jewelNestedFolder" || a === "jewel") return b("MessengerWebEntryPoint").JEWEL;
        else if (a === "shop") return b("MessengerWebEntryPoint").SHOP;
        else if (a === "pageLikeChaining") return b("MessengerWebEntryPoint").PAGE_LIKE_CHAINING;
        else if (a === "chatheadsOverflow") return b("MessengerWebEntryPoint").CHAT_HEADS_OVERFLOW;
        else if (a === "feedDynamicHoverCard") return b("MessengerWebEntryPoint").PAGES_HOVERCARD;
        else if (a === "messengerUniversalSearch") return b("MessengerWebEntryPoint").SEARCH_RESULT_PAGE;
        else if (a === "mentorship") return b("MessengerWebEntryPoint").MENTORSHIP;
        else if (a === "reactorList") return b("MessengerWebEntryPoint").REACTOR_LIST;
        else if (a === "feedPoll") return b("MessengerWebEntryPoint").FEED_POLL;
        else if (a === "timeline" || a === "feedOrganicPost") return b("MessengerWebEntryPoint").TIMELINE;
        else if (a === "pageResponsivenessCard" || a === "pageAboutCard") return b("MessengerWebEntryPoint").PAGES_ABOUT;
        else if (a === "inboxSearch" || a === "sidebarSearch" || a === "search") return b("MessengerWebEntryPoint").SEARCH;
        else if (a === "storyAggregatedUsers") return b("MessengerWebEntryPoint").STORY_AGGREGATED_USERS;
        else if (a === "fundraiserMoreMenu") return b("MessengerWebEntryPoint").FUNDRAISER_SUPPORT_REACTIVE_MORE_MENU;
        else if (a === "fundraiserFaq") return b("MessengerWebEntryPoint").FUNDRAISER_SUPPORT_REACTIVE_FAQ;
        else if (a === "notificationInThreadReply") return b("MessengerWebEntryPoint").MESSAGE_RECEIVED;
        else if (a === "roomsNullState") return b("MessengerWebEntryPoint").ROOMS_NULL_STATE;
        else if (a === "storyViewerSheetRow") return b("MessengerWebEntryPoint").STORIES_VIEWED_BY_LIST;
        else if (a === "feedOrganicPostNewsfeedPagePostCta") return b("MessengerWebEntryPoint").PAGES_CTA;
        else if (a === "chatheadsNewMessage") return b("MessengerWebEntryPoint").NEW_MESSAGE_BUTTON;
        else if (a === "groupExperts" || a === "groupCommunityFriendsDialog") return b("MessengerWebEntryPoint").GROUP_EXPERTS_DISCOVERY_INVITE;
        else if (a === "hovercard") return b("MessengerWebEntryPoint").HOVERCARD;
        else if (a === "crisisListingAttachment") return b("MessengerWebEntryPoint").CRISIS_LISTING_ATTACHMENT;
        else if (a === "mentalHealth") return b("MessengerWebEntryPoint").MENTAL_HEALTH;
        else if (a === "event") return b("MessengerWebEntryPoint").EVENTS_PERMALINK;
        else if (a === "jewelSearch") return b("MessengerWebEntryPoint").JEWEL_SEARCH;
        else if (a === "pagePopupChat") return b("MessengerWebEntryPoint").PAGES_POPUP_CHAT;
        else if (a === "communityHelp") return b("MessengerWebEntryPoint").COMMUNITY_HELP;
        else if (a === "jewelNewMessage") return b("MessengerWebEntryPoint").JEWEL_NEW_MESSAGE;
        else if (a === "fundraiser") return b("MessengerWebEntryPoint").FUNDRAISER;
        else if (a === "memories") return b("MessengerWebEntryPoint").MEMORIES_HOME;
        else if (a === "fundraiserSupportersList") return b("MessengerWebEntryPoint").FUNDRAISER_SUPPORTERS_LIST;
        else if (a === "groupRemovePost") return b("MessengerWebEntryPoint").GROUP_REMOVE_POST_TOMBSTONE;
        else if (a === "pagesHeader") return b("MessengerWebEntryPoint").PAGES_HEADER;
        else if (a === "groupMembers") return b("MessengerWebEntryPoint").GROUP_MEMBERS_TAB;
        else if (a === "chatheads") return b("MessengerWebEntryPoint").CHAT_HEADS;
        else if (a === "birthday") return b("MessengerWebEntryPoint").BIRTHDAYS;
        else if (a === "localBusinessesNearby") return b("MessengerWebEntryPoint").LOCAL_BUSINESSES_NEARBY;
        else if (a === "marketplace") return b("MessengerWebEntryPoint").MARKETPLACE;
        else if (a === "mutualFriendsDialog") return b("MessengerWebEntryPoint").MUTUAL_FRIENDS_DIALOG;
        else if (a === "feedOrganicPostViewAndMessage") return b("MessengerWebEntryPoint").FEED_STORY_CTA;
        else if (a === "profileServicesMenu") return b("MessengerWebEntryPoint").PROFILE_SERVICES_MENU;
        else if (a === "adsCta") return b("MessengerWebEntryPoint").RESHARES_DIALOG;
        else if (a === "offer") return b("MessengerWebEntryPoint").OFFER;
        else if (a === "payments") return b("MessengerWebEntryPoint").P2P_PAYMENTS;
        else if (a === "groupQuality") return b("MessengerWebEntryPoint").GROUP_QUALITY;
        else if (a === "pagesHomeFriendsDialog") return b("MessengerWebEntryPoint").PAGES_HOME_FRIENDS_DIALOG;
        else if (a === "communityFriendsDialog") return b("MessengerWebEntryPoint").PAGES_COMMUNITY_FRIENDS_DIALOG;
        else if (a === "groupChats") return b("MessengerWebEntryPoint").GROUP_CHATS;
        else if (a === "gratitude") return b("MessengerWebEntryPoint").GRATITUDE;
        else return b("MessengerWebEntryPoint").UNKNOWN
    }

    function c(a) {
        if (a === "inboxThreadList") return !0;
        else return a === "jewel"
    }
    f.cast = a;
    f.getEntryPointHasGroupNameAsThreadSnippet = c
}, null);
__d("MWChatLogOpenChatTab.bs", ["MWChatTabEntryPoints.bs", "MessengerWebEntryPointsUtil.bs", "MessengerWebEvent", "MessengerWebEventsFalcoEvent.bs", "ODS"], function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c, d, e) {
        var f = a !== void 0 ? a : !1;
        b("ODS").bumpEntityKey(3185, "mwchat_tab", "open_user");
        var g = b("MessengerWebEntryPointsUtil.bs").cast(d);
        b("MWChatTabEntryPoints.bs").tabEntryPoints[c] = g;
        return b("MessengerWebEventsFalcoEvent.bs").log(function() {
            return {
                entry_point: g,
                event_name: b("MessengerWebEvent").OPEN_CHAT_TAB,
                other_user_fbid: f ? null : c,
                is_secured: f
            }
        })
    }

    function c(a, c, d) {
        var e = a !== void 0 ? a : !1;
        b("ODS").bumpEntityKey(3185, "mwchat_tab", "open_group");
        var f = b("MessengerWebEntryPointsUtil.bs").cast(d);
        b("MWChatTabEntryPoints.bs").tabEntryPoints[c] = f;
        return b("MessengerWebEventsFalcoEvent.bs").log(function() {
            return {
                entry_point: f,
                event_name: b("MessengerWebEvent").OPEN_CHAT_TAB,
                thread_fbid: e ? null : c,
                is_secured: e
            }
        })
    }

    function d(a, c, d, e) {
        var f = a !== void 0 ? a : !1;
        b("ODS").bumpEntityKey(3185, "mwchat_tab", "open_page");
        var g = b("MessengerWebEntryPointsUtil.bs").cast(d);
        b("MWChatTabEntryPoints.bs").tabEntryPoints[c] = g;
        return b("MessengerWebEventsFalcoEvent.bs").log(function() {
            return {
                entry_point: g,
                event_name: b("MessengerWebEvent").OPEN_CHAT_TAB,
                other_user_fbid: f ? null : c,
                is_secured: f
            }
        })
    }
    f.logOpenUserTab = a;
    f.logOpenGroupTab = c;
    f.logOpenPageTab = d
}, null);
__d("MWChatOpenSecureTabForUserCallback.bs", ["bs_curry", "cr:614"], function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c, d) {
        if (!(b("cr:614") == null)) return b("bs_curry")._3(b("cr:614").openChatTab, a, c, d)
    }
    f.$MAWChatOpenTabForUser$requireCond = b("cr:614");
    f.openChatTab = a
}, null);
__d("MWLSPreloadThreadForContact.bs", ["LS.bs", "LSDatabaseDeferred.bs", "LSDatabaseType.bs", "LSIssueMessagesRangeQuery", "LSMailboxMessagesRangeQueryDirection.bs", "LSTransaction.bs", "LSVerifyThreadRowExists", "MAWVerifyThreadCutover.bs", "ReQL.bs", "bs_caml_format", "promiseDone"], function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        var c = b("LSDatabaseDeferred.bs").db.then(function(c) {
            return b("LSTransaction.bs").run(c, function(c) {
                var d = b("bs_caml_format").caml_int64_of_string(a);
                return b("MAWVerifyThreadCutover.bs").verifyThreadCutover(d).then(function(a) {
                    if (a) return;
                    else return b("ReQL.bs").first(b("ReQL.bs").getKeyRange(b("ReQL.bs").fromTableAscending(c.table("messages_ranges_v2__generated")), {
                        hd: d,
                        tl: 0
                    })).then(function(a) {
                        if (a !== void 0)
                            if (a.minMessageId === a.maxMessageId && a.minMessageId !== "") return b("LSIssueMessagesRangeQuery")(d, a.minTimestampMs, b("LSMailboxMessagesRangeQueryDirection.bs").before, b("LS.bs").make(c));
                            else return;
                        else return b("LSVerifyThreadRowExists")(d, void 0, b("LSDatabaseType.bs").mailbox, b("LS.bs").make(c))
                    })
                })
            }, "readWrite")
        });
        b("promiseDone")(c, void 0, void 0)
    }

    function a() {
        return g
    }
    f.verifyThreadExists = g;
    f.usePreloaderForUser = a
}, null);
__d("WebPerfDeviceInfoLogFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1871697");
    c = b("FalcoLoggerInternal").create("web_perf_device_info_log", a);
    e.exports = c
}, null);
__d("XDeviceClassRealtimeController", ["XController"], function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/web_perf/get_perf_level/", {})
}, null);
__d("WebDevicePerfInfoLogging", ["AsyncTypedRequest", "JSScheduler", "Promise", "WebDevicePerfInfoData", "WebPerfDeviceInfoLogFalcoEvent", "XDeviceClassRealtimeController", "regeneratorRuntime"], function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        var b = document.createElement("canvas");
        b = b.getContext("webgl") || b.getContext("experimental-webgl");
        if (!b) return;
        var c = b.getExtension("WEBGL_debug_renderer_info");
        if (!c) return;
        var d = b.getParameter(c.UNMASKED_RENDERER_WEBGL);
        b = b.getParameter(c.UNMASKED_VENDOR_WEBGL);
        a.gpu_vendor = b;
        a.gpu_renderer = d
    }

    function i() {
        var a = window.navigator,
            b = {};
        a && a.hardwareConcurrency !== void 0 && (b.cpu_cores = a.hardwareConcurrency);
        a && a.deviceMemory !== void 0 && (b.ram = a.deviceMemory);
        c("WebDevicePerfInfoData").needsFullUpdate && h(b);
        return b
    }

    function j() {
        var a = i();
        c("WebPerfDeviceInfoLogFalcoEvent").log(function() {
            var b;
            return {
                cpu_cores: (b = a.cpu_cores) != null ? b : null,
                ram: (b = a.ram) != null ? b : null,
                gpu_renderer: (b = a.gpu_renderer) != null ? b : null,
                gpu_vendor: (b = a.gpu_vendor) != null ? b : null
            }
        })
    }

    function k() {
        var a, d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    a = i();
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(new(c("AsyncTypedRequest"))(c("XDeviceClassRealtimeController").getURIBuilder().getURI()).setData(a).promisePayload());
                case 3:
                    d = e.sent;
                    return e.abrupt("return", d.devicePerfClassLevel);
                case 5:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function a() {
        (c("WebDevicePerfInfoData").needsFullUpdate || c("WebDevicePerfInfoData").needsPartialUpdate) && d("JSScheduler").scheduleSpeculativeCallback(j)
    }

    function e() {
        return new(b("Promise"))(function(a, b) {
            c("WebDevicePerfInfoData").needsFullUpdate || c("WebDevicePerfInfoData").needsPartialUpdate ? d("JSScheduler").scheduleSpeculativeCallback(function() {
                k().then(a)["catch"](b)
            }) : a()
        })
    }
    g.doLog = a;
    g.doLogPromise = e
}, 98);
__d("Base64", [], function(a, b, c, d, e, f) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function h(a) {
        a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
        return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63))
    }
    var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

    function j(a) {
        a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
        return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255)
    }
    var k = {
        encode: function(a) {
            a = unescape(encodeURI(a));
            var b = (a.length + 2) % 3;
            a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
            return a.slice(0, a.length + b - 2) + "==".slice(b)
        },
        decode: function(a) {
            a = a.replace(/[^A-Za-z0-9+\/]/g, "");
            var b = a.length + 3 & 3;
            a = (a + "AAA".slice(b)).replace(/..../g, j);
            a = a.slice(0, a.length + b - 3);
            try {
                return decodeURIComponent(escape(a))
            } catch (a) {
                throw new Error("Not valid UTF-8")
            }
        },
        encodeObject: function(a) {
            return k.encode(JSON.stringify(a))
        },
        decodeObject: function(a) {
            return JSON.parse(k.decode(a))
        },
        encodeNums: function(a) {
            return String.fromCharCode.apply(String, a.map(function(a) {
                return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63)
            }))
        }
    };
    a = k;
    f["default"] = a
}, 66);
__d("BladeRunnerConfig", ["RTISubscriptionManagerConfig", "WebDriverConfig", "cr:3024", "gkx", "isEmpty"], function(a, b, c, d, e, f, g) {
    var h = "javascript-sandbox",
        i = "OverrideServer",
        j = "www_sandbox";
    a = function() {
        function a() {}
        var d = a.prototype;
        d.patchRequestHeaders = function(a) {
            var d = {},
                e = c("RTISubscriptionManagerConfig").bladerunner_www_sandbox;
            if (!c("isEmpty")(c("WebDriverConfig").auxiliaryServiceInfo)) {
                var f;
                f = (f = c("WebDriverConfig").auxiliaryServiceInfo.BladeRunner) != null ? f : c("WebDriverConfig").auxiliaryServiceInfo["BladeRunner-sandcastle"];
                f != null && (typeof f.ip_address === "string" ? d[i] = f.ip_address + ":18295" : typeof f.hostname === "string" && (d[i] = f.hostname + ":18295"), typeof c("WebDriverConfig").originHost === "string" && (d[j] = "www." + c("WebDriverConfig").originHost))
            } else e != null && (d[h] = e);
            if (c("WebDriverConfig").isTestRunning && c("gkx")("5639")) {
                f = b("cr:3024") == null ? void 0 : b("cr:3024").get();
                f != null && (d.is_test = "1", d.original_request_id = f)
            }
            c("gkx")("307") && (d["Accept-Ack"] = "RSAck");
            for (var e in a) d[e] = a[e];
            d.http_referer = window.location.href;
            return d
        };
        return a
    }();
    d = new a();
    e = d;
    g["default"] = e
}, 98);
__d("BladeRunnerLogger", ["FBLogger", "ODS"], function(a, b, c, d, e, f, g) {
    var h = "bladerunner_js_client",
        i = {
            info: "info",
            warning: "warning",
            exception: "exception"
        };
    a = function() {
        function a() {
            this.setFBLoggerLevel(1)
        }
        var b = a.prototype;
        b.info = function(a) {
            this.$2 >= 2 && c("FBLogger")(h).info("BladeRunner info: %s", a), this.$3(i.info, a)
        };
        b.warn = function(a) {
            this.$2 >= 1 && c("FBLogger")(h).warn("BladeRunner warn: %s", a), this.$3(i.warning, a)
        };
        b.exception = function(a, b) {
            b === void 0 && (b = "");
            var d = b + " " + a.toString();
            this.$2 >= 0 && c("FBLogger")(h).warn("BladeRunner exception: %s, %s", b, a.toString());
            this.$3(i.exception, d)
        };
        b.trimForLogging = function(a) {
            var b = 1024;
            return typeof a === "string" && a.length > b ? "[trimmed]:" + a.substring(0, b) + "..." : a
        };
        b.bumpCounter = function(a, b) {
            b === void 0 && (b = 1), d("ODS").bumpEntityKey(2966, "BladeRunnerClient", a, b)
        };
        b.setClientSessionId = function(a) {
            this.$1 = a
        };
        b.setFBLoggerLevel = function(a) {
            this.$2 = a
        };
        b.$3 = function(a, b) {};
        return a
    }();
    b = new a();
    e = b;
    g["default"] = e
}, 98);
__d("BladeRunnerTypes", [], function(a, b, c, d, e, f, g) {
    a = {
        REQUEST: 1,
        DATA: 2,
        DATA_ACK: 3,
        STATUS_UPDATE: 4,
        REWRITE_REQUEST: 5,
        LOG: 6
    };
    b = {
        BLADE_RUNNER: 1,
        GATEWAY: 2
    };
    g.StreamFrameType = a;
    g.StreamRequestType = b
}, 98);
__d("BladeRunnerTypesInternal", ["Base64", "BladeRunnerLogger", "BladeRunnerTypes"], function(a, b, c, d, e, f, g) {
    var h = function() {
            function a() {}
            var b = a.prototype;
            b.getHeaders = function() {
                if (this.headers != null) return this.headers;
                throw new Error("Expected headers")
            };
            b.getInstrumentationData = function() {
                if (this.instrumentationData != null && this.instrumentationData.length > 0) try {
                    return JSON.parse(this.instrumentationData)
                } catch (a) {
                    return null
                } else return null
            };
            b.updateRetryRequestPayload = function(a) {
                a != null ? this.payload = c("Base64").encode(a) : this.payload = null
            };
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.requestType = o(b.requestType);
                c.payload = r(b.payload);
                c.headers = u(b.headers);
                c.extraHeader = r(b.extraHeader);
                c.requestTarget = r(b.requestTarget);
                c.instrumentationData = r(b.instrumentationData);
                return c
            };
            return a
        }(),
        i = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.dataId = p(b.dataId);
                c.data = r(b.data);
                c.shouldAck = w(b.shouldAck);
                return c
            };
            var b = a.prototype;
            b.rawData = function() {
                if (this.data == null) throw new Error("Expected data");
                return this.data
            };
            b.rawDataSize = function() {
                return this.data == null ? 0 : this.data.length
            };
            b.decodeData = function() {
                if (this.data == null) throw new Error("Expected data");
                return c("Base64").decode(this.data)
            };
            b.setData = function(a) {
                this.data = c("Base64").encode(a)
            };
            b.getInstrumentationData = function() {
                if (this.instrumentationData != null) return JSON.parse(this.instrumentationData);
                else return null
            };
            return a
        }(),
        j = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.dataId = o(b.dataId);
                c.success = v(b.success);
                c.message = r(b.message);
                c.code = p(b.code);
                return c
            };
            return a
        }();
    j.ACK_CODE_LANDED_AND_ACCEPTED = 20;
    j.ACK_CODE_LANDED_BUT_NOT_ACCEPTED = 21;
    j.ACK_CODE_FAILED_TO_LAND = 50;
    var k = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = p(b.streamId);
                c.message = r(b.message);
                return c
            };
            return a
        }(),
        l = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.status = o(b.status);
                c.message = r(b.message);
                c.code = p(b.code);
                c.shouldRetry = w(b.shouldRetry);
                c.retryDelayMs = p(b.retryDelayMs);
                return c
            };
            return a
        }(),
        m = function() {
            function a() {}
            a.readObject = function(b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.newBody = r(b.newBody);
                c.newExtraHeader = r(b.newExtraHeader);
                c.patchExtraHeader = r(b.patchExtraHeader);
                c.killBody = w(b.killBody);
                c.temporary = w(b.temporary);
                return c
            };
            return a
        }(),
        n = function() {
            function a() {}
            var b = a.prototype;
            b.getRequest = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.REQUEST && this.request != null) return this.request;
                throw new Error("Expected request")
            };
            b.getData = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.DATA && this.data != null) return this.data;
                throw new Error("Expected data")
            };
            b.getDataAck = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.dataAck != null) return this.dataAck;
                throw new Error("Expected dataAck")
            };
            b.getStatusUpdate = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE && this.statusUpdate != null) return this.statusUpdate;
                throw new Error("Expected status update")
            };
            b.getLog = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.LOG && this.log != null) return this.log;
                throw new Error("Expected log")
            };
            b.getRewriteRequest = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST && this.rewriteRequest != null) return this.rewriteRequest;
                throw new Error("Expected rewrite request")
            };
            b.getStreamId = function() {
                if (this.type == d("BladeRunnerTypes").StreamFrameType.REQUEST && this.request != null) return this.request.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.DATA && this.data != null) return this.data.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE && this.statusUpdate != null) return this.statusUpdate.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.LOG && this.log != null) return this.log.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST && this.rewriteRequest != null) return this.rewriteRequest.streamId;
                if (this.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.dataAck != null) return this.dataAck.streamId;
                throw new Error("Frame with unexpected type")
            };
            b.isInstrumented = function() {
                if (this.type === d("BladeRunnerTypes").StreamFrameType.REQUEST) return this.getRequest().instrumentationData != null;
                else if (this.type === d("BladeRunnerTypes").StreamFrameType.DATA) return this.getData().instrumentationData != null;
                else return !1
            };
            a.readObject = function(b) {
                var e = new a();
                e.type = o(b.type);
                switch (e.type) {
                    case d("BladeRunnerTypes").StreamFrameType.REQUEST:
                        e.request = h.readObject(s(b.request));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.DATA:
                        e.data = i.readObject(s(b.data));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                        e.dataAck = j.readObject(s(b.dataAck));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                        e.statusUpdate = l.readObject(s(b.statusUpdate));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.LOG:
                        e.log = k.readObject(s(b.log));
                        break;
                    case d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
                        e.rewriteRequest = m.readObject(s(b.rewriteRequest));
                        break;
                    default:
                        c("BladeRunnerLogger").warn("Frame with unexpected type: " + e.type);
                        return null
                }
                return e
            };
            a.newRequestFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.REQUEST;
                c.request = b;
                return c
            };
            a.newDataFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.DATA;
                c.data = b;
                return c
            };
            a.newDataAckFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.DATA_ACK;
                c.dataAck = b;
                return c
            };
            a.newStatusUpdateFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;
                c.statusUpdate = b;
                return c
            };
            a.newLogFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.LOG;
                c.log = b;
                return c
            };
            a.newRewriteRequestFrame = function(b) {
                var c = new a();
                c.type = d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST;
                c.rewriteRequest = b;
                return c
            };
            return a
        }();
    a = function() {
        function a(a, b, c) {
            this.batchId = a, this.frames = b, this.instrumentationData = c
        }
        var b = a.prototype;
        b.getFrames = function() {
            if (this.frames != null) return this.frames;
            throw new Error("Expected frames")
        };
        b.getInstrumentationData = function() {
            if (this.instrumentationData != null) try {
                return JSON.parse(this.instrumentationData)
            } catch (a) {
                return null
            } else return null
        };
        b.getInstrumentationDataDfTraceId = function() {
            if (this.instrumentationData != null) try {
                var a = JSON.parse(this.instrumentationData);
                return (a = a.dataFlowTracingData) == null ? void 0 : a.traceId
            } catch (a) {
                return null
            } else return null
        };
        b.write = function() {
            return JSON.stringify(this)
        };
        b.isInstrumented = function() {
            return this.getFrames().some(function(a) {
                return a.isInstrumented()
            })
        };
        a.read = function(b) {
            b = JSON.parse(b);
            var c = b.batchId || 0,
                d = [];
            for (var e = b.frames, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                h = n.readObject(h);
                h != null && d.push(h)
            }
            h = b.instrumentationData || null;
            return new a(c, d, h)
        };
        return a
    }();

    function o(a) {
        if (typeof a === "number") return a;
        throw new Error("Expected number")
    }

    function p(a) {
        return a == null ? null : o(a)
    }

    function q(a) {
        if (typeof a === "string") return a;
        throw new Error("Expected string")
    }

    function r(a) {
        return a == null ? null : q(a)
    }

    function s(a) {
        if (typeof a === "object" && a != null) return a;
        throw new Error("Expected object")
    }

    function t(a) {
        if (typeof a === "object" && a != null) {
            var b = a,
                c = {};
            Object.keys(b).forEach(function(a) {
                var d = b[a];
                typeof d === "string" && d != null && (c[a] = d)
            });
            return c
        }
        throw new Error("Expected string map")
    }

    function u(a) {
        return a == null ? null : t(a)
    }

    function v(a) {
        if (typeof a === "boolean" && a != null) return a;
        throw new Error("Expected boolean")
    }

    function w(a) {
        return a == null ? null : v(a)
    }
    g.GatewayStreamRequest = h;
    g.GatewayStreamData = i;
    g.GatewayStreamDataAck = j;
    g.GatewayStreamLog = k;
    g.GatewayStreamStatusUpdate = l;
    g.GatewayStreamRewriteRequest = m;
    g.GatewayStreamFrame = n;
    g.GatewayStreamBatch = a
}, 98);
__d("RequestStreamE2EClientLoggerEvent", [], function(a, b, c, d, e, f) {
    a = Object.freeze({
        RECEIVED: "received",
        SENT: "sent",
        FAILURE: "failure",
        PUBACK: "puback"
    });
    f["default"] = a
}, 66);
__d("RequestStreamE2EClientLoggerMessageType", [], function(a, b, c, d, e, f) {
    a = Object.freeze({
        REQUEST_STREAM: "request_stream",
        AMENDMENT: "amendment",
        AMENDMENT_ACK: "amendment_ack",
        CANCEL: "cancel",
        RESPONSE: "response",
        RESPONSE_ACK: "response_ack",
        TIMED_REQUEST: "timed_request",
        INTERRUPT: "interrupt"
    });
    f["default"] = a
}, 66);
__d("BladeRunnerEventHandler", ["BladeRunnerLogger", "BladeRunnerStreamStatus", "BladeRunnerTypes", "BladeRunnerTypesInternal", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g) {
    var h = 1e3;
    a = function() {
        function a(a, b, c) {
            this.$2 = a, this.$1 = b, this.$3 = c
        }
        var b = a.prototype;
        b.onProxyResponse = function(a) {
            this.$4(a);
            var b = [];
            for (var e = a.getFrames(), f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                this.$2.witnessFrame(h) && b.push(h)
            }
            h = this.$2.getRequest();
            (g = h.e2eLogger) == null ? void 0 : g.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").SENT, {}, (f = a.getInstrumentationData()) == null ? void 0 : f.auxId, null, a.getInstrumentationDataDfTraceId());
            b.length > 0 && this.$5(new(d("BladeRunnerTypesInternal").GatewayStreamBatch)(a.batchId, b, a.instrumentationData))
        };
        b.onDisconnect = function() {
            this.$2.resetErrors();
            var a = new(d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
            a.streamId = this.$2.getRequest().streamId;
            a.status = d("BladeRunnerStreamStatus").StreamStatus.CLOSED;
            a.shouldRetry = !0;
            a.retryDelayMs = 0;
            a = new(d("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)]);
            this.onProxyResponse(a)
        };
        b.$4 = function(a) {
            var b = this;
            a = a.getFrames().filter(function(a) {
                return a.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE
            });
            for (var a = a, e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= a.length) break;
                    g = a[f++]
                } else {
                    f = a.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                g = g.getStatusUpdate();
                if (g.status == d("BladeRunnerStreamStatus").StreamStatus.CLOSED || g.status == d("BladeRunnerStreamStatus").StreamStatus.REJECTED) {
                    this.$2.onError();
                    var i = g.shouldRetry != null && g.shouldRetry,
                        j = g.message != null ? g.message : "null";
                    if (i && this.$2.getErrorCount() <= this.$2.getRetriesAllowed()) {
                        g.status = d("BladeRunnerStreamStatus").StreamStatus.STOPPED;
                        var k = h;
                        g.retryDelayMs != null && (k = g.retryDelayMs);
                        c("BladeRunnerLogger").info("Can retry: stream " + g.streamId + " closed with status " + g.status + ", message " + j + ". Error count: " + this.$2.getErrorCount() + ", retryDelay " + k + "ms. Already retrying: " + this.$2.getRetryRequestScheduled().toString());
                        this.$2.getRetryRequestScheduled() ? c("BladeRunnerLogger").bumpCounter("stream_closed_already_retrying") : (c("BladeRunnerLogger").bumpCounter("stream_closed_will_retry"), this.$2.setRetryRequestScheduled(!0), k > 0 ? c("setTimeoutAcrossTransitions")(function() {
                            return b.$6()
                        }, k) : this.$6())
                    } else c("BladeRunnerLogger").info("Will not retry: stream " + g.streamId + " closed with status " + g.status + ", message " + j + ". Error count: " + this.$2.getErrorCount() + ", shouldRetry " + i.toString() + ". Already retrying: " + this.$2.getRetryRequestScheduled().toString()), i ? c("BladeRunnerLogger").bumpCounter("stream_closed_retry_exceeded") : c("BladeRunnerLogger").bumpCounter("stream_closed_no_retry"), this.$3.removeStream(g.streamId)
                }
            }
        };
        b.$6 = function() {
            this.$2.setRetryRequestScheduled(!1);
            if (this.$2.isAlive()) {
                var a = this.$1.getUpdatedRequestBody();
                a != null && this.$2.updateRetryRequestPayload(a);
                this.$3.sendRetryStreamRequest(this.$2)
            }
        };
        b.$5 = function(a) {
            c("BladeRunnerLogger").bumpCounter("send_to_handler");
            var b = [];
            this.$1.onBatch(a);
            for (var a = a.getFrames(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= a.length) break;
                    g = a[f++]
                } else {
                    f = a.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                try {
                    switch (g.type) {
                        case d("BladeRunnerTypes").StreamFrameType.DATA:
                            this.$1.onData(g.getData());
                            b.push(g.getData());
                            break;
                        case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                            this.$1.onStatusUpdate(g.getStatusUpdate().status);
                            break;
                        case d("BladeRunnerTypes").StreamFrameType.LOG:
                            g = g.getLog().message;
                            g != null && this.$1.onLog(g);
                            break;
                        case d("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                            break;
                        default:
                            throw new Error("Frame with unexpected type")
                    }
                } catch (a) {
                    c("BladeRunnerLogger").bumpCounter("send_to_handler_error"), c("BladeRunnerLogger").exception(a, "Failed sending frame to stream handler")
                }
            }
            this.$7(b)
        };
        b.$7 = function(a) {
            var b = [];
            for (var c = 0; c < a.length; c++) {
                var e = a[c];
                if (e.shouldAck === !0 && e.dataId != null) {
                    var f = new(d("BladeRunnerTypesInternal").GatewayStreamDataAck)();
                    f.streamId = e.streamId;
                    f.dataId = e.dataId;
                    f.success = !0;
                    b.push(f)
                }
            }
            this.$3.sendDataAcks(b)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("RtiRequestStreamE2eClientBatchFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("819");
    c = b("FalcoLoggerInternal").create("rti_request_stream_e2e_client_batch", a);
    e.exports = c
}, null);
__d("RtiRequestStreamE2eClientFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1857112");
    c = b("FalcoLoggerInternal").create("rti_request_stream_e2e_client", a);
    e.exports = c
}, null);
__d("RequestStreamE2ELogger", ["ConstUriUtils", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "RtiRequestStreamE2eClientBatchFalcoEvent", "RtiRequestStreamE2eClientFalcoEvent", "gkx"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = ["FBGQLS:COMMENT_CREATE_SUBSCRIBE", "FBGQLS:COMMENT_LIKE_SUBSCRIBE", "FBGQLS:FEEDBACK_COMMENT_PERMISSION_TOGGLE_SUBSCRIBE", "FBGQLS:FEEDBACK_TYPING_SUBSCRIBE"],
        i = 0;

    function j() {
        var a = Date.now();
        i >= a ? i += 1 : i = a;
        return i.toString()
    }
    var k = function() {
        function a(a, b, c, e, f, g, h, i, j, k) {
            this.$10 = [];
            this.$11 = !1;
            this.$1 = a;
            this.$2 = b;
            this.$3 = c;
            this.$4 = e;
            this.$5 = f;
            this.$6 = g;
            this.$7 = h;
            this.$8 = i;
            this.$9 = j;
            this.$12 = (a = k) != null ? a : !1;
            b = d("ConstUriUtils").getUri(window.location.href);
            b && (this.$13 = b.getDomain())
        }
        var b = a.prototype;
        b.logE2EEvent = function(a, b, c, d, e, f) {
            c === void 0 && (c = null);
            d === void 0 && (d = null);
            e === void 0 && (e = null);
            f === void 0 && (f = null);
            if (this.$3 === "Falco") return;
            e = {
                request_id: this.$1,
                resume_id: "0",
                retry_id: e,
                transport: this.$2,
                method: this.$3,
                use_case: this.$4,
                request_log_context: this.$5,
                force_log_context: this.$6,
                e2e_sample_rate: this.$7,
                message_type: a,
                event: b,
                timestamp_ms: j(),
                aux_id: d,
                additional_data: c,
                dgw_stream_group_logging_id: this.$8,
                dgw_count_prior_streams_in_group: this.$9,
                domain: this.$13,
                df_trace_id: f
            };
            this.$14(e)
        };
        b.$14 = function(a) {
            if (!this.$12) {
                c("RtiRequestStreamE2eClientFalcoEvent").log(function() {
                    return a
                });
                return
            }
            this.$10.push(a);
            if (this.$11 || a.event == c("RequestStreamE2EClientLoggerEvent").FAILURE || a.message_type == c("RequestStreamE2EClientLoggerMessageType").RESPONSE) {
                var b = {
                    events: this.$10
                };
                c("RtiRequestStreamE2eClientBatchFalcoEvent").log(function() {
                    return b
                });
                this.$10 = [];
                this.$11 = !0
            }
        };
        b.getRequestId = function() {
            return this.$1
        };
        return a
    }();

    function a(a, b, d) {
        if (a == null || a.method == null) return null;
        var e = !1;
        h.includes(a.method) && !c("gkx")("2810") && (e = !0);
        if (b == null || b.length == 0) return null;
        b = JSON.parse(b);
        return b.requestId == null ? null : new k(b.requestId, d, a.method, l(a.method, a), b.requestLogContext, b.forceLogContext, b.sampleRate, b.dgwStreamGroupLoggingId, b.dgwCountPriorStreamsInGroup, e)
    }

    function l(a, b) {
        if (a === "FBLQ" && b.config_id) return b.config_id;
        if (a === "SKY") {
            if (b.topic) {
                var c = b.topic.lastIndexOf("/");
                return c > 0 ? b.topic.substr(0, c) : b.topic
            }
            return
        }
        return a
    }

    function b(a, b, d, e, f, g) {
        f === void 0 && (f = null);
        g === void 0 && (g = null);
        if (a == null || a.requestId == null || a.clientLoggingDisabled != null) return;
        var h = {
            request_id: a.requestId,
            resume_id: "0",
            transport: b,
            e2e_sample_rate: a.sampleRate,
            message_type: d,
            event: e,
            timestamp_ms: j(),
            aux_id: a.auxId,
            additional_data: f,
            df_trace_id: g
        };
        c("RtiRequestStreamE2eClientFalcoEvent").log(function() {
            return h
        })
    }
    g.RequestStreamE2ELogger = k;
    g.createStreamLogger = a;
    g.logRequestStreamE2EEventStatic = b
}, 98);
__d("RequestStreamTransport", ["$InternalEnum"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored(["WEB_BR_MQTT", "WEB_RS_MQTT", "WEB_RS_STARGATE"]);
    f.RequestStreamTransport = a
}, 66);
__d("BladeRunnerSocket", ["BladeRunnerEventHandler", "BladeRunnerLogger", "BladeRunnerStreamStatus", "BladeRunnerTypes", "BladeRunnerTypesInternal", "CurrentUser", "FBMqttChannel", "MqttPublishListener", "Promise", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "RequestStreamE2ELogger", "RequestStreamTransport", "justknobx", "uuid"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "Connected",
        i = "Disconnected",
        j = "/br_sr",
        k = "/sr_res",
        l = null;

    function m(a) {
        var b;
        switch (a.type) {
            case d("BladeRunnerTypes").StreamFrameType.REQUEST:
                return (b = a.request) == null ? void 0 : b.getInstrumentationData();
            case d("BladeRunnerTypes").StreamFrameType.DATA:
                return (b = a.data) == null ? void 0 : b.getInstrumentationData()
        }
        return null
    }

    function n(a) {
        switch (a.type) {
            case d("BladeRunnerTypes").StreamFrameType.REQUEST:
                return c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM;
            case d("BladeRunnerTypes").StreamFrameType.DATA:
                return c("RequestStreamE2EClientLoggerMessageType").AMENDMENT
        }
        return null
    }

    function o(a) {
        if (a === null) return null;
        switch (a) {
            case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                return "Accepted";
            case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
                return "Rejected";
            case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
                return "Started";
            case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                return "Stopped";
            case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
                return "Closed"
        }
        return null
    }

    function p(a) {
        var b = {};
        a == null ? void 0 : (a = a.frames) == null ? void 0 : a.forEach(function(a) {
            if (a.type === d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE) {
                a = (a = a.statusUpdate) == null ? void 0 : a.status;
                a = o(a);
                a !== null && (b.flow_status = a)
            }
        });
        return b
    }

    function q(a, b) {
        var c;
        switch (a.type) {
            case d("BladeRunnerTypes").StreamFrameType.REQUEST:
                b.data_base64_size = (c = a.request) == null ? void 0 : (c = c.payload) == null ? void 0 : (c = c.length) == null ? void 0 : c.toString();
                break;
            case d("BladeRunnerTypes").StreamFrameType.DATA:
                b.data_base64_size = (c = a.data) == null ? void 0 : (b = c.rawDataSize()) == null ? void 0 : b.toString();
                break
        }
        return null
    }

    function r(a, b, e) {
        var f = m(a);
        if (f == null) return;
        var g = n(a);
        if (g == null) return;
        var h = null;
        switch (b) {
            case d("MqttPublishListener").MqttPublishEvent.SENT:
                h = c("RequestStreamE2EClientLoggerEvent").SENT;
                break;
            case d("MqttPublishListener").MqttPublishEvent.ACKED:
                h = c("RequestStreamE2EClientLoggerEvent").PUBACK;
                break;
            case d("MqttPublishListener").MqttPublishEvent.NOT_ACKED:
            case d("MqttPublishListener").MqttPublishEvent.NOT_CONNECTED:
            case d("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR:
                h = c("RequestStreamE2EClientLoggerEvent").FAILURE;
                e.reason == null && (e.reason = b);
                break
        }
        if (h == null) return;
        q(a, e);
        if (((b = a.request) == null ? void 0 : b.e2eLogger) != null && f.clientLoggingDisabled == null) {
            (b = a.request) == null ? void 0 : b.e2eLogger.logE2EEvent(g, h, e, f.auxId)
        } else d("RequestStreamE2ELogger").logRequestStreamE2EEventStatic(f, d("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT, g, h, e)
    }
    a = function() {
        function a(a) {
            this.$1 = [], this.$2 = 0, this.$3 = 0, this.$4 = null, this.$5 = 0, this.$6 = new Map(), this.$7 = a != null ? a : c("FBMqttChannel"), this.$8 = new Map(), c("BladeRunnerLogger").setClientSessionId(c("uuid")()), this.$9()
        }
        a.get = function() {
            l == null && (l = new a(c("FBMqttChannel")));
            return l
        };
        var e = a.prototype;
        e.sendNewStreamRequest = function(b, d) {
            d = new(c("BladeRunnerEventHandler"))(b, d, this);
            var e = b.getRequest();
            this.$6.set(e.streamId, d);
            if (!this.$10()) {
                this.$11(d, e.streamId);
                return
            }
            this.getStreamCount() <= a.maxStreamCount ? this.$12(e) : (c("BladeRunnerLogger").bumpCounter("socket_request_throttled_max_streams"), c("BladeRunnerLogger").warn("Maximum stream count reached, will not send request: " + JSON.stringify(b.getRequest().getHeaders())), this.$11(d, e.streamId))
        };
        e.sendRetryStreamRequest = function(a) {
            this.$12(a.getRequest())
        };
        e.sendCancel = function(a) {
            c("BladeRunnerLogger").bumpCounter("socket_send_cancel");
            var b = new(d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
            b.streamId = a.streamId;
            b.status = d("BladeRunnerStreamStatus").StreamStatus.CLOSED;
            this.$13(b, a);
            this.removeStream(a.streamId)
        };
        e.sendAmendment = function(a, b, e) {
            c("BladeRunnerLogger").bumpCounter("socket_send_amendment");
            var f = new(d("BladeRunnerTypesInternal").GatewayStreamData)();
            f.streamId = a;
            f.setData(b);
            e != null && (f.instrumentationData = e);
            this.$14(f)
        };
        e.sendAmendmentWithAck = function(a, e, f) {
            var g = this;
            c("BladeRunnerLogger").bumpCounter("socket_send_amendment");
            var h = this.$15(),
                i = new(d("BladeRunnerTypesInternal").GatewayStreamData)();
            i.streamId = a;
            i.setData(e);
            i.shouldAck = !0;
            i.dataId = h;
            f != null && (i.instrumentationData = f);
            a = new(b("Promise"))(function(a, b) {
                g.$8.set(h, {
                    resolve: a,
                    reject: b
                })
            });
            this.$14(i);
            return a
        };
        e.$14 = function(a) {
            this.$1.push(d("BladeRunnerTypesInternal").GatewayStreamFrame.newDataFrame(a)), this.$16()
        };
        e.sendDataAcks = function(a) {
            c("BladeRunnerLogger").bumpCounter("socket_send_data_ack", a.length), this.$17(a)
        };
        e.removeStream = function(a) {
            this.$6["delete"](a)
        };
        e.getStreamCount = function() {
            return this.$6.size
        };
        e.getNextStreamId = function() {
            this.$5++;
            return this.$5
        };
        e.onMQTTStateChanged = function(a) {
            this.$16();
            if (a != i && a != h || this.$4 == a) return;
            this.$4 = a;
            c("BladeRunnerLogger").info("MQTTStateChanged: " + a);
            a == i ? (c("BladeRunnerLogger").bumpCounter("mqtt_state_disconnected"), this.$18()) : a == h && c("BladeRunnerLogger").bumpCounter("mqtt_state_connected")
        };
        e.$12 = function(a) {
            c("BladeRunnerLogger").bumpCounter("socket_send_request");
            this.$1.push(d("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(a));
            if (!this.$16()) {
                (a = a.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").FAILURE, {
                    reason: "MQTT Not Connected"
                })
            }
        };
        e.$13 = function(a, b) {
            this.$1.push(d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a));
            if (this.$16()) {
                (a = b.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").CANCEL, c("RequestStreamE2EClientLoggerEvent").SENT)
            }
        };
        e.$17 = function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.$1.push(d("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(c))
            }
            this.$16()
        };
        e.$19 = function() {
            this.$2++;
            return this.$2
        };
        e.$15 = function() {
            this.$3++;
            return this.$3
        };
        e.$16 = function() {
            var a = !1;
            if (this.$7.getConnectionState() === h && this.$1.length > 0) try {
                this.$20(this.$1), a = !0
            } catch (a) {} finally {
                this.$1 = []
            }
            return a
        };
        e.$20 = function(a) {
            var b = this,
                e = new(d("BladeRunnerTypesInternal").GatewayStreamBatch)(this.$19(), a),
                f = e.write();
            if (f.length > this.$21()) {
                var g = Math.floor(a.length / 2);
                if (g === 0) {
                    a.forEach(function(a) {
                        return r(a, d("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR, {
                            reason: "too long"
                        })
                    });
                    var h = new Error("Publish is too long: " + f.length);
                    h.stack;
                    this.$22(e, h, "Publish is too long");
                    throw h
                }
                this.$20(a.slice(0, g));
                this.$20(a.slice(g, a.length))
            } else try {
                c("BladeRunnerLogger").info("send message to " + j + " (" + f.length + " bytes)");
                h = {
                    qos: 1,
                    skipBuffer: !1
                };
                if (e.isInstrumented()) {
                    var i = Date.now();
                    h.listener = {
                        onEvent: function(b) {
                            var c = (Date.now() - i).toString();
                            a.forEach(function(a) {
                                r(a, b, {
                                    latency: c
                                })
                            })
                        }
                    }
                }
                this.$7.publish(j, f, h)["catch"](function(a) {
                    b.$22(e, a, "Failed publishing to MQTT")
                });
                c("BladeRunnerLogger").bumpCounter("mqtt_publish_success")
            } catch (a) {
                this.$22(e, a, "Failed publishing to MQTT");
                throw a
            }
        };
        e.$9 = function() {
            var a = this;
            c("BladeRunnerLogger").info("Starting socket with endpoint " + this.$7.getEndpoint() + " useragent " + navigator.userAgent);
            this.onMQTTStateChanged(this.$7.getConnectionState());
            this.$7.subscribeChannelEvents({
                onMQTTStateChanged: function(b) {
                    a.onMQTTStateChanged(b)
                },
                onJSError: function(a) {
                    var b = a != null && typeof a.isRecoverable === "boolean" ? a.isRecoverable : !1;
                    b ? c("BladeRunnerLogger").bumpCounter("mqtt_channel_recoverable_error") : (c("BladeRunnerLogger").warn("JS error in MQTTChannel: " + (typeof a == "object" && a != null ? a.toString() : "unknown error") + ", " + JSON.stringify(a)), c("BladeRunnerLogger").bumpCounter("mqtt_channel_error"))
                }
            });
            this.$7.subscribe(j, function(a) {
                throw new Error("Unexpected response: " + j + " " + a.toString())
            });
            this.$7.subscribe(k, function(b) {
                a.$23(b)
            })
        };
        e.$23 = function(a) {
            a = d("BladeRunnerTypesInternal").GatewayStreamBatch.read(a);
            this.processBatch(a)
        };
        e.$22 = function(a, b, e) {
            for (var a = a.getFrames(), f = Array.isArray(a), g = 0, a = f ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= a.length) break;
                    h = a[g++]
                } else {
                    g = a.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                if (h.type === d("BladeRunnerTypes").StreamFrameType.REQUEST) {
                    var i = h.getRequest(),
                        j = this.$6.get(i.streamId);
                    j != null && this.$24(j, i.streamId, d("BladeRunnerStreamStatus").StreamStatus.CLOSED, !0, null)
                } else if (h.type === d("BladeRunnerTypes").StreamFrameType.DATA) {
                    j = h.getData();
                    i = j.dataId;
                    if (j.shouldAck != null && j.shouldAck && i != null) {
                        h = new(d("BladeRunnerTypesInternal").GatewayStreamDataAck)();
                        h.streamId = j.streamId;
                        h.dataId = i;
                        h.success = !1;
                        h.code = d("BladeRunnerTypesInternal").GatewayStreamDataAck.ACK_CODE_FAILED_TO_LAND;
                        h.message = e;
                        this.$25(h)
                    }
                }
            }
            c("BladeRunnerLogger").info("Failed publishing to MQTT: " + b.message);
            c("BladeRunnerLogger").bumpCounter("mqtt_publish_error")
        };
        e.$25 = function(a) {
            var b = this.$8.get(a.dataId);
            b != null && (this.$8["delete"](a.dataId), a.success ? b.resolve(!0) : a.code === d("BladeRunnerTypesInternal").GatewayStreamDataAck.ACK_CODE_LANDED_BUT_NOT_ACCEPTED ? b.resolve(!1) : b.reject(a.message))
        };
        e.processBatch = function(a) {
            try {
                d("RequestStreamE2ELogger").logRequestStreamE2EEventStatic(a.getInstrumentationData(), d("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT, c("RequestStreamE2EClientLoggerMessageType").RESPONSE, c("RequestStreamE2EClientLoggerEvent").RECEIVED, p(a), a.getInstrumentationDataDfTraceId());
                c("BladeRunnerLogger").bumpCounter("socket_process_batch");
                var b = JSON.stringify(a);
                c("BladeRunnerLogger").info("Received batch (" + b.length + " bytes)");
                b = null;
                for (var e = a.getFrames(), f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= e.length) break;
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    var i = h.getStreamId();
                    b == null && (b = i);
                    if (i != null && b != i) throw new Error("Received batch with frames for multiple streams");
                    h.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.$25(h.getDataAck())
                }
                if (b != null) {
                    i = this.$6.get(b);
                    i != null ? i.onProxyResponse(a) : c("BladeRunnerLogger").info("Received batch with frames for unknown stream id: " + b)
                } else c("BladeRunnerLogger").info("Received batch with no frames")
            } catch (a) {
                c("BladeRunnerLogger").exception(a, "Failed processing batch from MQTT");
                c("BladeRunnerLogger").bumpCounter("socket_process_batch_error");
                throw a
            }
        };
        e.$18 = function() {
            this.$6.forEach(function(a, b, c) {
                a.onDisconnect()
            })
        };
        e.$11 = function(a, b) {
            this.$24(a, b, d("BladeRunnerStreamStatus").StreamStatus.REJECTED, !1, 0)
        };
        e.$24 = function(a, b, c, e, f) {
            var g = new(d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
            g.streamId = b;
            g.status = c;
            g.shouldRetry = e;
            g.retryDelayMs = f;
            b = new(d("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(g)]);
            a.onProxyResponse(b)
        };
        e.$10 = function() {
            if (!c("CurrentUser").isLoggedIn()) {
                c("BladeRunnerLogger").bumpCounter("request_stream_user_logged_out");
                return !1
            }
            return !0
        };
        e.$21 = function() {
            var a = 1024 * 1024,
                b = 512 * 1024;
            try {
                var d = c("justknobx")._("317");
                b = d * a
            } catch (a) {}
            return Math.max(b - 1024, 0)
        };
        return a
    }();
    a.maxStreamCount = 2e3;
    g["default"] = a
}, 98);
__d("BladeRunnerStream", ["Promise", "regeneratorRuntime"], function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getStreamHandler = function() {
            return this.$1
        };
        c.cancel = function() {};
        c.amendWithAck = function(a) {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", !1);
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        c.amendFireAndForget = function(a) {};
        c.amendWithoutAck = function(a) {};
        c.start = function() {
            return b("Promise").resolve()
        };
        c.isAlive = function() {
            return !1
        };
        c.canAmend = function() {
            return !1
        };
        c.getStatus = function() {
            return null
        };
        c.getStreamId = function() {
            return 0
        };
        return a
    }();
    f["default"] = a
}, 66);
__d("BladeRunnerStreamState", ["BladeRunnerLogger", "BladeRunnerStreamStatus", "BladeRunnerTypes"], function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = a, this.$2 = null, this.$3 = 0, this.$4 = !1, this.$5 = 0, this.$6 = !1
        }
        var b = a.prototype;
        b.getRequest = function() {
            return this.$1
        };
        b.updateRetryRequestPayload = function(a) {
            this.$1.updateRetryRequestPayload(a)
        };
        b.isAlive = function() {
            return !(this.$2 == d("BladeRunnerStreamStatus").StreamStatus.CLOSED || this.$2 == d("BladeRunnerStreamStatus").StreamStatus.REJECTED)
        };
        b.canAmend = function() {
            return this.$2 == d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED || this.$2 == d("BladeRunnerStreamStatus").StreamStatus.STARTED || this.$2 == d("BladeRunnerStreamStatus").StreamStatus.STOPPED
        };
        b.getLastStatus = function() {
            return this.$2
        };
        b.setLastStatus = function(a) {
            this.$2 = a
        };
        b.onError = function() {
            this.$3 += 1
        };
        b.getErrorCount = function() {
            return this.$3
        };
        b.resetErrors = function() {
            this.$3 = 0
        };
        b.getRetryRequestScheduled = function() {
            return this.$6
        };
        b.setRetryRequestScheduled = function(a) {
            this.$6 = a
        };
        b.witnessFrame = function(a) {
            switch (a.type) {
                case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                    var b = a.getStatusUpdate(),
                        c = !0;
                    switch (b.status) {
                        case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                            c = !this.$4;
                            this.$4 || (this.$4 = !0);
                            break;
                        case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
                            c = this.getLastStatus() != d("BladeRunnerStreamStatus").StreamStatus.STARTED;
                            break;
                        case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                            c = this.getLastStatus() == d("BladeRunnerStreamStatus").StreamStatus.STARTED;
                            break;
                        case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
                        case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
                        default:
                            c = !0
                    }
                    this.setLastStatus(b.status);
                    return c;
                case d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
                    this.$7(a.getRewriteRequest());
                    return !1;
                default:
                    return !0
            }
        };
        b.setRetriesAllowed = function(a) {
            this.$5 = a
        };
        b.getRetriesAllowed = function() {
            return this.$5
        };
        b.$7 = function(a) {
            if (!(a.temporary != null || a.temporary == !0)) {
                a.newBody != null && (this.$1.payload = a.newBody);
                a.newExtraHeader != null && (this.$1.extraHeader = a.newExtraHeader, this.$1.headers = JSON.parse(a.newExtraHeader));
                if (a.patchExtraHeader != null) try {
                    var b = JSON.parse(a.patchExtraHeader),
                        d = this.$1.extraHeader != null ? JSON.parse(this.$1.extraHeader) : {};
                    this.$1.headers == null && (this.$1.headers = {});
                    var e = Object.keys(b);
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        this.$1.headers[g] = b[g];
                        d[g] = b[g]
                    }
                    this.$1.extraHeader = JSON.stringify(d)
                } catch (b) {
                    c("BladeRunnerLogger").warn("Failed to patch header: " + a.patchExtraHeader)
                }
                a.killBody != null && a.killBody == !0 && (this.$1.payload = null)
            }
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("BladeRunnerSocketStream", ["BladeRunnerStream", "BladeRunnerStreamState", "BladeRunnerStreamStatus", "Promise", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "regeneratorRuntime", "uuid"], function(a, b, c, d, e, f, g) {
    var h = 4,
        i = {
            reason: "stream_dead"
        };
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);

        function e(b, d, e) {
            b = a.call(this, b) || this;
            b.$BladeRunnerSocketStream1 = e;
            b.$BladeRunnerSocketStream2 = new(c("BladeRunnerStreamState"))(d);
            b.$BladeRunnerSocketStream2.setRetriesAllowed(h);
            return b
        }
        var f = e.prototype;
        f.start = function() {
            var a = this;
            return new(b("Promise"))(function(b) {
                a.send(), b()
            })
        };
        f.send = function() {
            var a, b = this.$BladeRunnerSocketStream2.getRequest();
            (a = b.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                data_base64_size: (a = b.payload) == null ? void 0 : (b = a.length) == null ? void 0 : b.toString()
            });
            this.$BladeRunnerSocketStream1.sendNewStreamRequest(this.$BladeRunnerSocketStream2, this.getStreamHandler())
        };
        f.amendWithAck = function(a) {
            var d, e, f, g, h, j, k;
            return b("regeneratorRuntime").async(function(l) {
                while (1) switch (l.prev = l.next) {
                    case 0:
                        e = this.$BladeRunnerSocketStream2.getRequest();
                        f = e.getInstrumentationData();
                        f && (f.auxId = c("uuid")(), (g = e.e2eLogger) == null ? void 0 : g.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                            data_size: a == null ? void 0 : (h = a.length) == null ? void 0 : h.toString()
                        }, f.auxId));
                        if (!this.canAmend()) {
                            l.next = 6;
                            break
                        }
                        f && ((j = e.e2eLogger) == null ? void 0 : j.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").SENT, {
                            data_size: a == null ? void 0 : (k = a.length) == null ? void 0 : k.toString()
                        }, f.auxId));
                        return l.abrupt("return", this.$BladeRunnerSocketStream1.sendAmendmentWithAck(e.streamId, this.$BladeRunnerSocketStream3(a), f == null ? null : JSON.stringify(f)));
                    case 6:
                        (d = e.e2eLogger) == null ? void 0 : d.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").FAILURE, i, f == null ? void 0 : f.auxId);
                        return l.abrupt("return", b("Promise").reject("Stream is closed or not accepted"));
                    case 8:
                    case "end":
                        return l.stop()
                }
            }, null, this)
        };
        f.amendFireAndForget = function(a) {
            var b = this.$BladeRunnerSocketStream2.getRequest(),
                d = b.getInstrumentationData();
            if (d) {
                var e;
                d.auxId = c("uuid")();
                (e = b.e2eLogger) == null ? void 0 : e.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").RECEIVED, {
                    data_size: a == null ? void 0 : (e = a.length) == null ? void 0 : e.toString()
                }, d.auxId)
            }
            if (this.canAmend()) {
                this.$BladeRunnerSocketStream1.sendAmendment(this.$BladeRunnerSocketStream2.getRequest().streamId, this.$BladeRunnerSocketStream3(a), d == null ? null : JSON.stringify(d));
                if (d) {
                    (e = b.e2eLogger) == null ? void 0 : e.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").SENT, {
                        data_size: a == null ? void 0 : (e = a.length) == null ? void 0 : e.toString()
                    }, d.auxId)
                }
            } else {
                (a = b.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").AMENDMENT, c("RequestStreamE2EClientLoggerEvent").FAILURE, i, d == null ? void 0 : d.auxId);
                throw new Error("Stream is closed or not accepted")
            }
        };
        f.amendWithoutAck = function(a) {
            this.amendFireAndForget(a)
        };
        f.$BladeRunnerSocketStream3 = function(a) {
            return typeof a == "object" ? btoa(new TextDecoder("utf8").decode(a)) : a
        };
        f.cancel = function() {
            var a = this.$BladeRunnerSocketStream2.getRequest();
            (a = a.e2eLogger) == null ? void 0 : a.logE2EEvent(c("RequestStreamE2EClientLoggerMessageType").CANCEL, c("RequestStreamE2EClientLoggerEvent").RECEIVED);
            this.isAlive() && (this.$BladeRunnerSocketStream1.sendCancel(this.$BladeRunnerSocketStream2.getRequest()), this.$BladeRunnerSocketStream2.setLastStatus(d("BladeRunnerStreamStatus").StreamStatus.CLOSED), this.getStreamHandler().onClientCancel())
        };
        f.isAlive = function() {
            return this.$BladeRunnerSocketStream2.isAlive()
        };
        f.canAmend = function() {
            return this.$BladeRunnerSocketStream2.canAmend()
        };
        f.getStatus = function() {
            return this.$BladeRunnerSocketStream2.getLastStatus()
        };
        f.getStreamId = function() {
            return this.$BladeRunnerSocketStream2.getRequest().streamId
        };
        return e
    }(c("BladeRunnerStream"));
    g["default"] = a
}, 98);
__d("RequestStreamE2ESampling", ["invariant", "Random", "RequestStreamE2EClientSamplingConfig", "uuid"], function(a, b, c, d, e, f, g, h) {
    "use strict";

    function i(a) {
        return a == null ? !1 : a.requestId != null && typeof a.requestId == "string" && a.forceLogContext != null && typeof a.forceLogContext == "string"
    }

    function j(a, b) {
        var d = c("RequestStreamE2EClientSamplingConfig").sampleRate;
        if (d > 1 && a != null) {
            a = c("RequestStreamE2EClientSamplingConfig").methodToSamplingMultiplier[a];
            a == 0 ? d = 0 : a != null && (d /= a)
        }
        return d == 1 ? 1 : d / b
    }

    function k(a, b, d, e) {
        var f = c("uuid")();
        (b.requestId == null || b.requestId === "" || typeof b.requestId != "string") && (a.requestId != null && typeof a.requestId == "string" ? b.requestId = a.requestId : b.requestId = f);
        b.requestId += "/_" + f.substring(0, 4);
        b.resumeId = "0";
        d != null ? b.sampleRate = d : b.sampleRate = void 0;
        f = "";
        e != null && e.length > 0 && (f = e);
        f.length > 0 && (b.requestLogContext != null && b.requestLogContext.length > 0 ? b.requestLogContext += ":" : b.requestLogContext = "", b.requestLogContext += f);
        (a == null ? void 0 : a.method) === "Falco" && (b.clientLoggingDisabled = "Falco");
        d = {};
        for (var e = Object.keys(b).sort(), f = Array.isArray(e), a = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g;
            if (f) {
                if (a >= e.length) break;
                g = e[a++]
            } else {
                a = e.next();
                if (a.done) break;
                g = a.value
            }
            g = g;
            d[g] = b[g]
        }
        return JSON.stringify(d)
    }

    function a(a, b, d, e) {
        b && (!b.requestId.includes("/") && !b.requestId.includes("#") || h(0, 41721));
        e = j(a.method, (e = e) != null ? e : 1);
        if (c("Random").coinflip(e)) return k(a, b || {
            requestId: ""
        }, e, d);
        return i(b) ? k(a, b || {
            requestId: ""
        }, null, d) : ""
    }
    g.isForceLogged = i;
    g.getSampleRateForLogging = j;
    g.normalizeInstrumentationData = k;
    g.validateInstrumentationData = a
}, 98);
__d("BladeRunnerClient", ["Base64", "BladeRunnerConfig", "BladeRunnerLogger", "BladeRunnerSocket", "BladeRunnerSocketStream", "BladeRunnerTypes", "BladeRunnerTypesInternal", "RequestStreamE2ELogger", "RequestStreamE2ESampling", "RequestStreamTransport", "cr:2046346"], function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b) {
            this.$2 = d("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT, this.$1 = a != null ? a : c("BladeRunnerSocket").get(), b && (this.$2 = b)
        }
        var e = a.prototype;
        e.createStream = function(a, b, c, d) {
            return this.$3(a, b, c, d)
        };
        e.requestStream = function(a, c, d, e) {
            a = this.$3(a, c, d, e);
            a.send();
            b("cr:2046346") != null && b("cr:2046346").startPulsarTest();
            return a
        };
        e.logInfo = function(a) {
            c("BladeRunnerLogger").info(a)
        };
        e.bumpCounter = function(a) {
            c("BladeRunnerLogger").bumpCounter(a)
        };
        e.$3 = function(a, b, e, f) {
            var g = new(d("BladeRunnerTypesInternal").GatewayStreamRequest)();
            g.streamId = this.$1.getNextStreamId();
            g.requestType = d("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER;
            g.headers = c("BladeRunnerConfig").patchRequestHeaders(a);
            g.extraHeader = JSON.stringify(g.headers);
            g.payload = b != null ? c("Base64").encode(b) : null;
            g.instrumentationData = d("RequestStreamE2ESampling").validateInstrumentationData(g.headers || {}, f);
            g.e2eLogger = d("RequestStreamE2ELogger").createStreamLogger(g.headers, g.instrumentationData, this.$2);
            return new(c("BladeRunnerSocketStream"))(e, g, this.$1)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("ContextualConfigResolvedContextsUtils", [], function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        var b = [];
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            e = e.bucketIndex;
            if (e == void 0) break;
            b.push(e)
        }
        return b
    };
    b = function(a) {
        var b = [];
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            e = e.bucketName;
            if (e === void 0) break;
            b.push(e)
        }
        return b
    };
    var g = function(a) {
        return a.name
    };
    c = function(a) {
        return a.map(g)
    };
    d = function(a) {
        var b = [];
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            e = e.value;
            if (e === void 0) break;
            b.push(e)
        }
        return b
    };
    f.getBucketIndices = a;
    f.getBucketNames = b;
    f.getContextNames = c;
    f.getContextValues = d
}, 66);
__d("ContextualConfigCollateExposureData", ["ContextualConfigConstants", "ContextualConfigResolvedContextsUtils"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = ["cfg_ver_timestamp", "policy_id", "version", "sample_rate"],
        i = function(a) {
            return a.join(d("ContextualConfigConstants").LIST_DELIMITER)
        },
        j = function(a, b) {
            for (var c = 0; c < h.length; c++) {
                var d = h[c];
                b[d] != null && (a[d] = b[d])
            }
            b.name && (a.config_name = b.name)
        },
        k = function(a, b) {
            var c = b[0],
                e = b[1],
                f = b[2];
            b = b[3];
            c != null && (a.exception = c.message);
            a.result = i(e.map(function(a) {
                return a.value
            })) || "INVALID";
            a.context = i(d("ContextualConfigResolvedContextsUtils").getContextNames(f));
            a.context_value = i(d("ContextualConfigResolvedContextsUtils").getContextValues(f));
            a.bucket_name = i(d("ContextualConfigResolvedContextsUtils").getBucketNames(f));
            a.monitor = i(d("ContextualConfigResolvedContextsUtils").getContextNames(b));
            a.monitor_value = i(d("ContextualConfigResolvedContextsUtils").getContextValues(b))
        };

    function a(a, b, c) {
        var e = {
            sample_rate: d("ContextualConfigConstants").ANALYTICS_SAMPLE_RATE
        };
        j(e, a);
        k(e, b);
        c && (e.config_contents = JSON.stringify(a));
        return e
    }
    g["default"] = a
}, 98);
__d("ContextualConfigExposureEvent", ["Random"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c) {
            this.$2 = a, this.$4 = d("Random").random() < 1 / a.sample_rate, this.$3 = b, this.$1 = c
        }
        var b = a.prototype;
        b.getData = function() {
            return this.$2
        };
        b.log = function(a) {
            var b = this.$2,
                c = this.$3,
                d = this.$4;
            a && c(b);
            d && this.$1(b);
            return this
        };
        b.isSampled = function() {
            return this.$4
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("ContextualConfigExposureLoggerFactory", ["ContextualConfigExposureEvent"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        function a(a, b) {
            this.$2 = a, this.$1 = b
        }
        var b = a.prototype;
        b.createEvent = function(a) {
            var b = this.$1,
                d = this.$2;
            a = new(c("ContextualConfigExposureEvent"))(a, d, b);
            return a
        };
        return a
    }();

    function a(a, b) {
        return new h(a, b)
    }
    g["default"] = a
}, 98);
__d("ContextualConfigExposureLogger", ["ContextualConfigExposureLoggerFactory", "MarauderLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {};
    b = function(a) {
        d("MarauderLogger").log("contextual_config_exposure", "", a)
    };
    e = c("ContextualConfigExposureLoggerFactory")(a, b);
    g["default"] = e
}, 98);
__d("ContextualConfigAssert", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a === !1) throw new Error(b)
    }
    f["default"] = a
}, 66);
__d("ContextualConfigParseBoolean", ["ContextualConfigConstants"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        switch (a.toUpperCase()) {
            case "TRUE":
                return !0;
            case "FALSE":
                return !1;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.BAD_BOOLEAN_FORMAT)
        }
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParsePredBoolean", ["ContextualConfigConstants", "ContextualConfigParseBoolean"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var e;
        switch (b) {
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
                var f = c("ContextualConfigParseBoolean")(a);
                e = function(a) {
                    return a === f
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
                e = function(a) {
                    return a == null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
                e = function(a) {
                    return a != null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
                e = function(a) {
                    return !0
                };
                break;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.ILLEGAL_BOOLEAN_STRATEGY)
        }
        return function(a) {
            return e(a)
        }
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseFloat", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = /^[-\+]?([1-9]\d*|0)(\.\d+)?$/,
        i = function(a) {
            return h.test(a)
        };

    function a(a) {
        c("ContextualConfigAssert")(i(a), d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT);
        a = parseFloat(a);
        c("ContextualConfigAssert")(d("ContextualConfigValidators").isNumber(a), d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT);
        return a
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseInteger", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = /^[-\+]?([1-9]\d*|0)$/,
        i = function(a) {
            return h.test(a)
        };

    function a(a) {
        c("ContextualConfigAssert")(i(a), d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT);
        a = parseInt(a, 10);
        c("ContextualConfigAssert")(d("ContextualConfigValidators").isNumber(a), d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT);
        return a
    }
    g["default"] = a
}, 98);
__d("ContextualConfigPredAssertions", ["ContextualConfigAssert", "ContextualConfigConstants"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        return c("ContextualConfigAssert")(a > 0, d("ContextualConfigConstants").ERROR.MISMATCH_NUMBER_OF_VALUES)
    };
    b = function(a, b) {
        return c("ContextualConfigAssert")(a === b, d("ContextualConfigConstants").ERROR.MISMATCH_NUMBER_OF_VALUES)
    };
    e = function(a, b) {
        return c("ContextualConfigAssert")(a < b, d("ContextualConfigConstants").ERROR.BAD_VALUE_ORDER)
    };
    g.assertHasValues = a;
    g.assertNumberOfValues = b;
    g.assertValueOrder = e
}, 98);
__d("ContextualConfigParsePredNumeric", ["ContextualConfigConstants", "ContextualConfigParseFloat", "ContextualConfigParseInteger", "ContextualConfigPredAssertions", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, e, f) {
        var g = e.map(f ? c("ContextualConfigParseInteger") : c("ContextualConfigParseFloat")),
            h;
        switch (b) {
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
                var i = f ? c("ContextualConfigParseInteger")(a) : c("ContextualConfigParseFloat")(a);
                h = function(a) {
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a === i
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
                h = function(a) {
                    return a == null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
                h = function(a) {
                    return a != null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
                h = function(a) {
                    return !0
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.COR:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 2);
                d("ContextualConfigPredAssertions").assertValueOrder(g[0], g[1]);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a >= g[0] && a < g[1]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.LT:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a < g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.LTE:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a <= g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.EQ:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a === g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NEQ:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a !== g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.GT:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a > g[0]
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.GTE:
                d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
                h = function(a) {
                    if (typeof a !== "number") return !1;
                    return f && !d("ContextualConfigValidators").isInteger(a) ? !1 : a >= g[0]
                };
                break;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.ILLEGAL_NUMERIC_STRATEGY)
        }
        return function(a) {
            return h(a)
        }
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseRegExp", ["ContextualConfigConstants"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = /^\/(.+)\/(.*)$/;

    function a(a) {
        try {
            var b = a.match(h);
            if (b != null) return new RegExp(b[1], b[2]);
            else return new RegExp(a)
        } catch (a) {
            throw new Error(d("ContextualConfigConstants").ERROR.REGEX_SYNTAX_ERROR)
        }
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParsePredString", ["ContextualConfigConstants", "ContextualConfigParseRegExp", "ContextualConfigPredAssertions"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            if (typeof a !== "string") throw new Error(d("ContextualConfigConstants").ERROR.INVALID_VALUE_TYPE);
            return a
        },
        i = function(a) {
            var b = [];
            for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                b.push(h(e))
            }
            return b
        };

    function a(a, b, e) {
        var f = i(e),
            g;
        switch (b) {
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
                g = function(b) {
                    return typeof b !== "string" ? !1 : b === a
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
                g = function(a) {
                    return a == null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
                g = function(a) {
                    return a != null
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
                g = function(a) {
                    return !0
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.IN:
                d("ContextualConfigPredAssertions").assertHasValues(f.length);
                g = function(a) {
                    return typeof a !== "string" ? !1 : f.indexOf(a) !== -1
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NIN:
                d("ContextualConfigPredAssertions").assertHasValues(f.length);
                g = function(a) {
                    return typeof a !== "string" ? !1 : f.indexOf(a) === -1
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CONTAINS:
                d("ContextualConfigPredAssertions").assertNumberOfValues(f.length, 1);
                g = function(a) {
                    return typeof a !== "string" ? !1 : a.indexOf(f[0]) !== -1
                };
                break;
            case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.REGEX:
                d("ContextualConfigPredAssertions").assertNumberOfValues(f.length, 1);
                var h = c("ContextualConfigParseRegExp")(f[0]);
                g = function(a) {
                    return typeof a !== "string" ? !1 : h.test(a)
                };
                break;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.ILLEGAL_STRING_STRATEGY)
        }
        return function(a) {
            return g(a)
        }
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseContextBuckets", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParsePredBoolean", "ContextualConfigParsePredNumeric", "ContextualConfigParsePredString", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.MISSING_BUCKETS)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_BUCKETS)
        },
        j = d("ContextualConfigValidators").isKey(d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY),
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isString(a) && j(a.toUpperCase()), d("ContextualConfigConstants").ERROR.MISSING_BUCKET_STRATEGY)
        },
        l = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.ILLEGAL_BUCKET_VALUES)
        },
        m = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.MISSING_BUCKET_NAME)
        },
        n = function(a, b) {
            var e = b.name;
            m(e);
            var f = b.strategy;
            k(f);
            b = b.values || [];
            l(b);
            switch (a) {
                case d("ContextualConfigConstants").TYPE.BOOL:
                    return c("ContextualConfigParsePredBoolean")(e, f);
                case d("ContextualConfigConstants").TYPE.FLOAT:
                    return c("ContextualConfigParsePredNumeric")(e, f, b, !1);
                case d("ContextualConfigConstants").TYPE.INT:
                    return c("ContextualConfigParsePredNumeric")(e, f, b, !0);
                case d("ContextualConfigConstants").TYPE.STRING:
                    return c("ContextualConfigParsePredString")(e, f, b);
                default:
                    throw new Error(d("ContextualConfigConstants").ERROR.UNKNOWN_BUCKET_DEFINITION)
            }
        },
        o = function(a, b) {
            h(b);
            var c = b.name;
            m(c);
            return {
                name: c,
                pred: n(a, b)
            }
        };

    function a(a, b) {
        i(b);
        return b.map(function(b) {
            return o(a, b)
        })
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseContexts", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseContextBuckets", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a) && a.length > 0, d("ContextualConfigConstants").ERROR.MISSING_CONTEXT_IN_CONFIG)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isType(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        l = function(a) {
            h(a);
            var b = a.name,
                d = a.type;
            a = a.buckets;
            j(b);
            k(d);
            return {
                name: b,
                type: d,
                buckets: c("ContextualConfigParseContextBuckets")(d, a)
            }
        };

    function a(a) {
        i(a);
        return a.map(l)
    }
    g["default"] = a
}, 98);
__d("ContextualConfigIsEqualParams", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a.length != b.length) return !1;
        for (var c = 0; c < a.length; c += 1) {
            var d = a[c],
                e = b[c];
            if (d.name !== e.name || d.type !== e.type) return !1
        }
        return !0
    }
    f["default"] = a
}, 66);
__d("ContextualConfigParseResultParamValue", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseBoolean", "ContextualConfigParseFloat", "ContextualConfigParseInteger", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
        return c("ContextualConfigAssert")(d("ContextualConfigValidators").isString(a), d("ContextualConfigConstants").ERROR.INVALID_STRING)
    };

    function a(a, b) {
        h(b);
        switch (a) {
            case d("ContextualConfigConstants").TYPE.BOOL:
                return c("ContextualConfigParseBoolean")(b);
            case d("ContextualConfigConstants").TYPE.FLOAT:
                return c("ContextualConfigParseFloat")(b);
            case d("ContextualConfigConstants").TYPE.INT:
                return c("ContextualConfigParseInteger")(b);
            case d("ContextualConfigConstants").TYPE.STRING:
                return b;
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.INVALID_VALUE_TYPE)
        }
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseResultParams", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseResultParamValue", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_RESULTS)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isType(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE)
        },
        l = function(a, b) {
            for (var a = a, c = Array.isArray(a), e = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (c) {
                    if (e >= a.length) break;
                    f = a[e++]
                } else {
                    e = a.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                if (f.name === b) return f.type
            }
            throw new Error(d("ContextualConfigConstants").ERROR.UNDECLARED_OUTPUT_PARAM)
        },
        m = function(a) {
            return function(b) {
                i(b);
                var d = b.name;
                j(d);
                var e = l(a, d);
                k(e);
                b = c("ContextualConfigParseResultParamValue")(e, b.value);
                return {
                    name: d,
                    type: e,
                    value: b
                }
            }
        };

    function a(a, b) {
        h(b);
        return b.map(m(a))
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseDenseResultParams", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigIsEqualParams", "ContextualConfigParseResultParams"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        return c("ContextualConfigAssert")(c("ContextualConfigIsEqualParams")(a, b), d("ContextualConfigConstants").ERROR.RESULTS_VECTOR_SIZE_MISMATCH)
    };

    function a(a, b) {
        b = c("ContextualConfigParseResultParams")(a, b.map(function(b, c) {
            return {
                name: a[c].name,
                value: b
            }
        }));
        h(a, b);
        return b
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseDenseDefaults", ["ContextualConfigConstants", "ContextualConfigParseDenseResultParams"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        try {
            return c("ContextualConfigParseDenseResultParams")(a, b)
        } catch (a) {
            throw new Error(d("ContextualConfigConstants").ERROR.MISSING_DEFAULT_VALUE)
        }
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseMonitors", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.BAD_MONITORED_CONTEXTS)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isType(a), d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER)
        },
        l = function(a) {
            h(a);
            var b = a.name;
            a = a.type;
            j(b);
            k(a);
            return {
                name: b,
                type: a
            }
        };

    function a(a) {
        i(a);
        return a.map(l)
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseOutputParams", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_OUTPUTS_DEFINITION)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isType(a), d("ContextualConfigConstants").ERROR.BAD_OUTPUT_TYPE)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.BAD_OUTPUT_NAME)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(l(a), d("ContextualConfigConstants").ERROR.DUPLICATE_OUTPUT_NAME)
        },
        l = function(a) {
            var b = {};
            for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                if (b[e.name]) return !1;
                b[e.name] = !0
            }
            return !0
        },
        m = function(a) {
            j(a.name);
            i(a.type);
            return a
        };

    function a(a) {
        h(a);
        a = a.map(m);
        k(a);
        return a
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseVector", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseResultParamValue", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_VECTOR)
        },
        i = function(a, b) {
            return c("ContextualConfigAssert")(a === b, d("ContextualConfigConstants").ERROR.RESULTS_VECTOR_SIZE_MISMATCH)
        },
        j = function(a, b) {
            i(a.length, b.length);
            for (var d = 0; d < a.length; d += 1) {
                var e = a[d].type,
                    f = b[d];
                c("ContextualConfigParseResultParamValue")(e, f)
            }
        },
        k = function(a) {
            return a.reduce(function(a, b) {
                b = b.buckets;
                return a * b.length
            }, 1)
        };

    function a(a, b, c) {
        h(c);
        b = k(b);
        var d = a.length;
        i(b * d, c.length);
        for (var e = 0; e < b; e += 1) {
            var f = e * d;
            j(a, c.slice(f, f + d))
        }
        return c
    }
    g["default"] = a
}, 98);
__d("ContextualConfigResolveContexts", ["ContextualConfigConstants"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        for (var c = 0; c < a.length; c += 1) {
            var d = a[c];
            try {
                if (d.pred(b)) return [d.name, c]
            } catch (a) {
                return null
            }
        }
        return null
    };

    function a(a, b, c) {
        var e = null;
        a = a.map(function(a) {
            var f = a.name,
                g = {
                    name: f
                };
            if (e != null) return g;
            var i;
            c[f] != null ? i = c[f] : b[f] != null ? i = b[f]() : i = null;
            g.value = i;
            if (a.buckets != null) {
                f = h(a.buckets, i);
                if (f == null) {
                    e = new Error(d("ContextualConfigConstants").ERROR.MISSING_BUCKET_MATCH);
                    return g
                }
                a = f[0];
                i = f[1];
                g.bucketName = a;
                g.bucketIndex = i
            }
            return g
        });
        return [e, a]
    }
    g["default"] = a
}, 98);
__d("DenseContextualConfig", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseContexts", "ContextualConfigParseDenseDefaults", "ContextualConfigParseDenseResultParams", "ContextualConfigParseMonitors", "ContextualConfigParseOutputParams", "ContextualConfigParseVector", "ContextualConfigResolveContexts", "ContextualConfigResolvedContextsUtils", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONFIG)
        },
        i = function(a) {
            var b = [],
                c = 1;
            for (var d = a.length - 1; d >= 0; d -= 1) b.push(c), c *= a[d].buckets.length;
            return b.reverse()
        },
        j = function(a, b, d, e) {
            try {
                b = b.slice(d, d + a.length);
                return [null, c("ContextualConfigParseDenseResultParams")(a, b)]
            } catch (a) {
                return [a, e]
            }
        },
        k = function(a, b, d) {
            try {
                d = d.reduce(function(b, d, e) {
                    c("ContextualConfigAssert")(e < a.length, "Auxillery index out of range.");
                    return b + a[e] * d
                }, 0);
                return [null, d * b]
            } catch (a) {
                return [a, -1]
            }
        };
    a = function() {
        function a(a, b) {
            h(a);
            this.globalContextProviders = babelHelpers["extends"]({}, b);
            b = c("ContextualConfigParseOutputParams")(a.outputs);
            var d = c("ContextualConfigParseContexts")(a.contexts);
            this.aux = i(d);
            this.contexts = d;
            this.defaults = c("ContextualConfigParseDenseDefaults")(b, a.vectorDefaults);
            this.monitors = a.monitors != null ? c("ContextualConfigParseMonitors")(a.monitors) : [];
            this.outputs = b;
            this.vector = c("ContextualConfigParseVector")(b, d, a.vector)
        }
        var b = a.prototype;
        b.resolve = function(a) {
            try {
                return this.unsafeResolve(a)
            } catch (a) {
                return [a, this.defaults, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
            }
        };
        b.unsafeResolve = function(a) {
            var b = this.aux,
                e = this.globalContextProviders,
                f = this.contexts,
                g = this.defaults,
                h = this.monitors,
                i = this.outputs,
                l = this.vector;
            f = c("ContextualConfigResolveContexts")(f, e, a);
            var m = f[0];
            f = f[1];
            if (m != null) return [m, g, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS];
            m = k(b, i.length, d("ContextualConfigResolvedContextsUtils").getBucketIndices(f));
            b = m[0];
            m = m[1];
            if (b != null) return [b, g, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS];
            b = j(i, l, m, g);
            i = b[0];
            l = b[1];
            if (i != null) return [i, l, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS];
            m = c("ContextualConfigResolveContexts")(h, e, a);
            g = m[0];
            b = m[1];
            return g != null ? [g, l, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS] : [null, l, f, b]
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("MultiOutputResolvedContextualConfig", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseMonitors", "ContextualConfigParseOutputParams", "ContextualConfigParseResultParams", "ContextualConfigResolveContexts", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
        return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONFIG)
    };
    a = function() {
        function a(a, b) {
            h(a);
            this.globalContextProviders = babelHelpers["extends"]({}, b);
            b = c("ContextualConfigParseOutputParams")(a.outputs);
            this.monitors = a.monitors != null ? c("ContextualConfigParseMonitors")(a.monitors) : [];
            this.values = c("ContextualConfigParseResultParams")(b, a.values)
        }
        var b = a.prototype;
        b.resolve = function(a) {
            try {
                return this.unsafeResolve(a)
            } catch (a) {
                return [a, this.values, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
            }
        };
        b.unsafeResolve = function(a) {
            var b = this.globalContextProviders,
                e = this.monitors,
                f = this.values;
            e = c("ContextualConfigResolveContexts")(e, b, a);
            b = e[0];
            a = e[1];
            return b != null ? [b, f, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS] : [null, f, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, a]
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("ContextualConfigMergePartialResultParams", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        var c = {};
        for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= b.length) break;
                f = b[e++]
            } else {
                e = b.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            c[f.name] = f
        }
        f = [];
        for (var e = a, d = Array.isArray(e), b = 0, e = d ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (d) {
                if (b >= e.length) break;
                a = e[b++]
            } else {
                b = e.next();
                if (b.done) break;
                a = b.value
            }
            a = a;
            var g = c[a.name];
            f.push(g != null && g.name === a.name && g.type === a.type ? g : a)
        }
        return f
    }
    f["default"] = a
}, 66);
__d("ContextualConfigParseDefaults", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigIsEqualParams", "ContextualConfigParseResultParams"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        return c("ContextualConfigAssert")(c("ContextualConfigIsEqualParams")(a, b), d("ContextualConfigConstants").ERROR.MISSING_DEFAULT_VALUE)
    };

    function a(a, b) {
        b = c("ContextualConfigParseResultParams")(a, b);
        h(a, b);
        return b
    }
    g["default"] = a
}, 98);
__d("ContextualConfigParseTable", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigParseResultParams", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_TABLE)
        },
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.MISSING_TABLE)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isNonEmptyString(a), d("ContextualConfigConstants").ERROR.MISSING_TABLE_ITEM_BUCKET)
        },
        k = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isArray(a), d("ContextualConfigConstants").ERROR.MISSING_TABLE_ITEM_VALUES)
        },
        l = function(a, b) {
            i(b);
            var d = b.bucket;
            b = b.values;
            j(d);
            k(b);
            return {
                bucket: d,
                values: c("ContextualConfigParseResultParams")(a, b)
            }
        };

    function a(a, b) {
        h(b);
        return b.reduce(function(b, c) {
            c = l(a, c);
            b[c.bucket] = c.values;
            return b
        }, {})
    }
    g["default"] = a
}, 98);
__d("TableContextualConfig", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigMergePartialResultParams", "ContextualConfigParseContexts", "ContextualConfigParseDefaults", "ContextualConfigParseMonitors", "ContextualConfigParseOutputParams", "ContextualConfigParseTable", "ContextualConfigResolveContexts", "ContextualConfigResolvedContextsUtils", "ContextualConfigValidators"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a), d("ContextualConfigConstants").ERROR.BAD_CONFIG)
        };
    a = function() {
        function a(a, b) {
            i(a);
            this.globalContextProviders = babelHelpers["extends"]({}, b);
            b = c("ContextualConfigParseOutputParams")(a.outputs);
            this.contexts = c("ContextualConfigParseContexts")(a.contexts);
            this.defaults = c("ContextualConfigParseDefaults")(b, a.defaults);
            this.monitors = a.monitors != null ? c("ContextualConfigParseMonitors")(a.monitors) : [];
            this.table = c("ContextualConfigParseTable")(b, a.table)
        }
        var b = a.prototype;
        b.resolve = function(a) {
            try {
                return this.unsafeResolve(a)
            } catch (a) {
                return [a, this.defaults, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
            }
        };
        b.unsafeResolve = function(a) {
            var b = this.globalContextProviders,
                e = this.contexts,
                f = this.defaults,
                g = this.monitors,
                i = this.table;
            e = c("ContextualConfigResolveContexts")(e, b, a);
            var j = e[0];
            e = e[1];
            if (j != null) return [j, f, e, []];
            j = d("ContextualConfigResolvedContextsUtils").getBucketNames(e).join(d("ContextualConfigConstants").BUCKET_DELIMITER);
            i = i[j] || h;
            j = c("ContextualConfigMergePartialResultParams")(f, i);
            f = c("ContextualConfigResolveContexts")(g, b, a);
            i = f[0];
            g = f[1];
            return i != null ? [i, j, e, []] : [null, j, e, g]
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("ContextualConfigParseConfig", ["ContextualConfigAssert", "ContextualConfigConstants", "ContextualConfigValidators", "DenseContextualConfig", "MultiOutputResolvedContextualConfig", "TableContextualConfig"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [1],
        i = function(a) {
            return c("ContextualConfigAssert")(d("ContextualConfigValidators").isDefined(a) && d("ContextualConfigValidators").isDefined(a.version), d("ContextualConfigConstants").ERROR.BAD_CONFIG)
        },
        j = function(a) {
            return c("ContextualConfigAssert")(h.indexOf(a) !== -1, d("ContextualConfigConstants").ERROR.UNSUPPORTED_CONFIG_VERSION)
        };

    function a(a, b) {
        i(a);
        j(a.version);
        switch (a.cctype) {
            case d("ContextualConfigConstants").CONFIG_TYPE.DENSE:
                return new(c("DenseContextualConfig"))(a, b);
            case d("ContextualConfigConstants").CONFIG_TYPE.MULTI_OUTPUT_RESOLVED:
                return new(c("MultiOutputResolvedContextualConfig"))(a, b);
            case d("ContextualConfigConstants").CONFIG_TYPE.TABLE:
                return new(c("TableContextualConfig"))(a, b);
            default:
                throw new Error(d("ContextualConfigConstants").ERROR.UNKNOWN_CONFIG_TYPE)
        }
    }
    g["default"] = a
}, 98);
__d("ContextualConfigWarn", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {}
    f["default"] = a
}, 66);
__d("ContextualConfigResult", ["ContextualConfigConstants", "ContextualConfigWarn"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a.reduce(function(a, b) {
                var c = b.name;
                b = b.value;
                a[c] = b;
                return a
            }, {}), this.$2 = a
        }
        var b = a.prototype;
        b.get = function(a, b) {
            try {
                a = this.$1[a];
                if (typeof a !== typeof b) {
                    c("ContextualConfigWarn")(d("ContextualConfigConstants").ERROR.REQUESTED_PARAM_NOT_FOUND);
                    return b
                }
                return a
            } catch (a) {
                c("ContextualConfigWarn")(a.message);
                return b
            }
        };
        b.getParams = function() {
            return this.$2
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("ErrorContextualConfig", ["ContextualConfigConstants"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.error = a
        }
        var b = a.prototype;
        b.resolve = function(a) {
            return [this.error, d("ContextualConfigConstants").EMPTY_RESULT_PARAMS, d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("ContextualConfig", ["ContextualConfigCollateExposureData", "ContextualConfigConstants", "ContextualConfigExposureLogger", "ContextualConfigParseConfig", "ContextualConfigResult", "ErrorContextualConfig", "Random"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1 / d("ContextualConfigConstants").JSON_SUB_SAMPLE_RATE,
        i = 1;
    a = function() {
        function a(a, b) {
            b === void 0 && (b = {}), this.isDebugLoggingEnabled = !1, this.$3 = !1, this.$4 = a, this.$2 = b
        }
        var b = a.prototype;
        b.$5 = function() {
            if (this.$1) return this.$1;
            var a = this.$2,
                b = this.$4;
            try {
                b = c("ContextualConfigParseConfig")(b, a)
            } catch (a) {
                b = new(c("ErrorContextualConfig"))(a)
            }
            this.$1 = b;
            return b
        };
        b.$6 = function(a) {
            var b = this.isDebugLoggingEnabled,
                e = this.$4,
                f = this.$3;
            f = !f && d("Random").random() < h;
            f && (this.$3 = !0);
            e = c("ContextualConfigCollateExposureData")(e, a, f);
            a = c("ContextualConfigExposureLogger").createEvent(e);
            a.log(b)
        };
        b.resolve = function(a) {
            a === void 0 && (a = {});
            var b = this.$1 || this.$5();
            b = b.resolve(a);
            this.$6(b);
            return new(c("ContextualConfigResult"))(b[i])
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("FbtLogging", ["cr:1094907"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("cr:1094907") == null ? void 0 : b("cr:1094907").logImpression;
    g.logImpression = a
}, 98);
__d("AcfToastImpressionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1873550");
    c = b("FalcoLoggerInternal").create("acf_toast_impression", a);
    e.exports = c
}, null);
__d("ClientConsistencyFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1764786");
    c = b("FalcoLoggerInternal").create("client_consistency", a);
    e.exports = c
}, null);
__d("CometSuspenseFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1828945");
    c = b("FalcoLoggerInternal").create("comet_suspense", a);
    e.exports = c
}, null);
__d("IntlQtEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1848815");
    c = b("FalcoLoggerInternal").create("intl_qt_event", a);
    e.exports = c
}, null);
__d("LynxAsyncCallbackFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743887");
    c = b("FalcoLoggerInternal").create("lynx_async_callback", a);
    e.exports = c
}, null);
__d("FalcoLoggerTransports", ["AnalyticsCoreData", "Banzai", "JSResource", "ODS", "PersistedQueue", "Queue", "WebSession", "performanceAbsoluteNow", "promiseDone", "uuid"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 5 * 1024,
        i = (b = c("AnalyticsCoreData").max_delay_br_queue) != null ? b : 60 * 1e3,
        j = (e = c("AnalyticsCoreData").max_delay_br_queue_immediate) != null ? e : 1e3,
        k = "falco:",
        l = new(c("Queue"))(),
        m = 5e3,
        n = 6e4,
        o = c("uuid")(),
        p = "ods_web_batch",
        q = new Map(),
        r = new Set(),
        s = [],
        t = 0,
        u, v = !1,
        w = !1,
        x = !1,
        y = !0,
        z = !1,
        A = Date.now() - n,
        B = 1;
    ((f = c("AnalyticsCoreData").fix_br_init_rc) != null ? f : !1) && R();
    for (var e = (b = c("AnalyticsCoreData").stateful_events_list_for_br) != null ? b : [], f = Array.isArray(e), b = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var C;
        if (f) {
            if (b >= e.length) break;
            C = e[b++]
        } else {
            b = e.next();
            if (b.done) break;
            C = b.value
        }
        C = C;
        r.add(C)
    }

    function D(a, b) {
        K(b.item.name, "js.br.add_to_batch", 1, !0);
        var c = b.item.extra.length;
        t + c > h && (clearTimeout(u), E());
        s.push([a, b]);
        t += c
    }

    function E() {
        u = null;
        v = !1;
        var a = s;
        I("js.br.send_batch", a.map(function(a) {
            return a[1].item
        }));
        if (!z) {
            J("js.br.init_not_complete.log", a.length);
            var b = function() {
                var b = a[c],
                    d = b[0],
                    e = b[1];
                ((b = e.item.logImmediate) != null ? b : !1) ? L.logCritical([e.item], function(a) {
                    return d.markItem(e, a)
                }): L.log([e.item], function(a) {
                    return d.markItem(e, a)
                })
            };
            for (var c = 0; c < a.length; c++) b()
        } else l.enqueue(function(b) {
            return b.log(a.map(function(a) {
                return a[1].item
            }), function(b) {
                if (!b) {
                    J("js.br.banzai_fallback", a.length);
                    var c = function() {
                        var c = a[d],
                            b = c[0],
                            e = c[1];
                        ((c = e.item.logImmediate) != null ? c : !1) ? L.logCritical([e.item], function(a) {
                            return b.markItem(e, a)
                        }): L.log([e.item], function(a) {
                            return b.markItem(e, a)
                        })
                    };
                    for (var d = 0; d < a.length; d++) c();
                    return
                }
                for (var c = 0; c < a.length; c++) {
                    var e = a[c],
                        f = e[0];
                    e = e[1];
                    K(e.item.name, "js.br.success_callback.batch.send_batch", 1, !0);
                    f.markItem(e, b)
                }
            })
        });
        s = [];
        t = 0
    }

    function F(a) {
        return {
            events: a.map(function(a) {
                return {
                    name: a.name,
                    extra: a.extra,
                    rate: a.policy.r,
                    time: a.time / 1e3,
                    shouldAddState: a.shouldAddState
                }
            })
        }
    }

    function G(a) {
        var b;
        a = {
            deviceId: c("AnalyticsCoreData").device_id,
            sessionId: a,
            appId: c("AnalyticsCoreData").app_id,
            pushPhase: c("AnalyticsCoreData").push_phase
        };
        ((b = (b = c("AnalyticsCoreData").stateful_events_list_for_br) == null ? void 0 : b.length) != null ? b : 0) > 0 && (a.ambientState = c("AnalyticsCoreData").state_for_br);
        return Object.freeze(a)
    }

    function H(a, b) {
        for (var e = 0; e < a.length; e++) {
            var f, g = a[e];
            K(g.name, "js.banzai.posting_event", 1, !1);
            f = (f = {}, f.e = g.extra, f.r = g.policy.r, f.d = c("AnalyticsCoreData").device_id, f.s = d("WebSession").getId(), f.t = g.time, f);
            g.privacyContext && (f.p = g.privacyContext);
            var h = g.identity;
            h && (f.id = h);
            c("Banzai").post(k + g.name, f, b)
        }
        I("planes.banzai.write_to_transport", a)
    }

    function I(a, b) {
        var c = 0;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            e.name !== p && (c += 1)
        }
        c > 0 && J(a, c)
    }

    function J(a, b) {
        var e, f = "falco.fabric.www." + c("AnalyticsCoreData").push_phase;
        ((e = c("AnalyticsCoreData").queue_activation_experiment) != null ? e : !1) && (f += ".queue_activation_experiment");
        d("ODS").bumpEntityKey(1344, f, a, b)
    }

    function K(a, b, c, e) {
        if (a === p) return !1;
        d("ODS").bumpEntityKey(1344, "falco.event." + a, b, c);
        e && J(b, c);
        return !0
    }
    var L = {
        log: function(a, b) {
            I("js.banzai.post.log", a), H(a, c("Banzai").BASIC), b(!0)
        },
        logImmediately: function(a, b) {
            I("js.banzai.post.log_immediately", a), H(a, c("Banzai").VITAL), b(!0)
        },
        logCritical: function(a, b) {
            I("js.banzai.post.log_critical", a), H(a, {
                signal: !0,
                retry: !0
            }), b(!0)
        }
    };

    function M(a) {
        R();
        var b = N(a, "banzai_data_loss", "log"),
            d = N(a, "banzai_data_loss", "logImmediately"),
            e = N(a, "banzai_data_loss", "logCritical"),
            f = N(a, "bladerunner_data_loss", "");
        J("js.br_data_loss.posted." + a, 1);
        if (z && y) try {
            l.enqueue(function(b) {
                return b.log([f], function(b) {
                    if (!b) {
                        J("js.br.transport_failure." + a, 1);
                        L.logCritical([f], function(b) {
                            J("js.br.failure_fallback_success_callback." + a, 1)
                        });
                        return
                    }
                    J("js.br.success_callback." + a, 1)
                })
            })
        } catch (b) {
            J("js.br.error_enqueueing." + a, 1), L.logCritical([f], function(b) {
                J("js.br.enqueuing_fallback_success_callback." + a, 1)
            })
        } else y || J("js.br.failed." + a, 1), z || J("js.br.init_not_complete." + a, 1), L.logCritical([f], function(b) {
            J("js.br.init_fallback_success_callback." + a, 1)
        });
        H([b], c("Banzai").BASIC);
        H([d], c("Banzai").VITAL);
        H([e], {
            signal: !0,
            retry: !0
        })
    }

    function N(a, b, d) {
        return {
            name: b,
            time: c("performanceAbsoluteNow")(),
            policy: {
                r: 1
            },
            extra: JSON.stringify({
                event_index: a,
                falco_js_connection_id: o,
                logging_mode: d,
                logging_flow_flag: ((b = c("AnalyticsCoreData").fix_br_init_rc) != null ? b : !1) ? "race_condition_fixed" : "original_flow"
            })
        }
    }

    function O() {
        A + m < Date.now() && (M(B), A = Date.now(), B++)
    }

    function P() {
        window.setTimeout(function() {
            O(), B <= 40 && P()
        }, n)
    }

    function Q(a) {
        l.start(function(b) {
            return b({
                log: function(d, b) {
                    I("planes.bladerunner.write_to_transport", d);
                    var e = JSON.stringify(F(d));
                    a ? c("AnalyticsCoreData").enable_ack ? c("promiseDone")(a.amendWithAck(e), function(a) {
                        I("planes.bladerunner.ack_received" + a.toString(), d), b(a)
                    }, function() {
                        I("planes.bladerunner.ack_failure", d), b(!1)
                    }) : (a.amendWithoutAck(e), I("planes.bladerunner.write_without_ack", d)) : (I("planes.bladerunner.request_stream_null", d), b(!1))
                },
                logImmediately: function(b, a) {
                    this.log(b, a)
                },
                logCritical: function(b, a) {
                    this.log(b, a)
                }
            })
        })
    }

    function R() {
        var a;
        if (w) return;
        z = !1;
        if (!c("AnalyticsCoreData").enable_bladerunner && ((a = c("AnalyticsCoreData").fix_br_init_rc) != null ? a : !1)) return;
        c("JSResource").loadAll([c("JSResource")("TransportSelectingClientSingleton").__setRef("FalcoLoggerTransports"), c("JSResource")("RequestStreamCommonRequestStreamCommonTypes").__setRef("FalcoLoggerTransports")], function(a, b) {
            var e = b.FlowStatus,
                f;
            b = {
                onTermination: function(a) {
                    a.message === "Stream closed" ? (l.stop(!0), w = !1) : (y = !1, l.start(function(a) {
                        return a(L)
                    }))
                },
                onFlowStatus: function(a) {
                    a === e.Started && !((a = c("AnalyticsCoreData").fix_br_init_rc) != null ? a : !1) && Q(f)
                }
            };
            c("promiseDone")(a.requestStream({
                method: "Falco"
            }, JSON.stringify(G(d("WebSession").getId())), b, {
                requestId: ""
            }).then(function(a) {
                f = a;
                ((a = c("AnalyticsCoreData").fix_br_init_rc) != null ? a : !1) && Q(f);
                z = !0
            })["catch"](function(a) {
                l.stop(!0), w = !1
            }))
        });
        w = !0
    }

    function S(a) {
        var b = a.policy,
            d = a.name;
        r.has(d) && (a.shouldAddState = !0);
        return c("AnalyticsCoreData").enable_bladerunner && y && (b.s === 1 || r.has(d))
    }

    function T(a) {
        if (a === "") return null;
        if (q.has(a)) return q.get(a);
        else {
            var b = {
                    claim: ""
                },
                c = a.split("^#");
            if (c.length >= 4) {
                var d = c[0],
                    e = c[1],
                    f = c[2];
                c = c[3];
                f !== "" ? b = {
                    appScopedIdentity: f,
                    claim: c
                } : d !== "" && (b = {
                    fbIdentity: {
                        accountId: d,
                        actorId: e
                    },
                    claim: c
                });
                q.set(a, b)
            }
            return b
        }
    }

    function a() {
        var a;
        if (x) return;
        x = !0;
        c("PersistedQueue").setHandler("falco_queue_log", function(a) {
            var b, c = T(a.getQueueNameSuffix());
            while (b = a.dequeueItem())(function(b) {
                S(b.item) ? (K(b.item.name, "js.use_bladerunner.log", 1, !0), R(), u == null && (u = setTimeout(E, i)), D(a, b)) : (K(b.item.name, "js.use_banzai.log", 1, !0), c && (b.item.identity = c), L.log([b.item], function(c) {
                    return a.markItem(b, c)
                }))
            })(b)
        });
        c("PersistedQueue").setHandler("falco_queue_immediately", function(a) {
            var b, d = T(a.getQueueNameSuffix());
            while (b = a.dequeueItem())(function(b) {
                S(b.item) ? (K(b.item.name, "js.use_bladerunner.log_immediately", 1, !0), R(), (u == null || !v) && (clearTimeout(u), u = setTimeout(E, j), v = !0), b.item.logImmediate = !0, D(a, b), c("PersistedQueue").isPersistenceAllowed() || (K(b.item.name, "js.br.send_immediately_no_persistence", 1, !0), E())) : (K(b.item.name, "js.use_banzai.log_immediately", 1, !0), d && (b.item.identity = d), L.logImmediately([b.item], function(c) {
                    return a.markItem(b, c)
                }))
            })(b)
        });
        c("PersistedQueue").setHandler("falco_queue_critical", function(a) {
            var b, c = T(a.getQueueNameSuffix());
            while (b = a.dequeueItem())(function(b) {
                var d = b.item;
                S(d) ? (K(d.name, "js.use_bladerunner.log_critical", 1, !0), R(), !z ? (K(d.name, "js.br.init_not_complete.logCritical", 1, !0), c && (d.identity = c), L.logCritical([d], function(c) {
                    return a.markItem(b, c)
                })) : l.enqueue(function(e) {
                    return e.logCritical([d], function(e) {
                        if (!e) {
                            J("js.br.banzai_fallback.critical", 1);
                            c && (d.identity = c);
                            L.logCritical([d], function(c) {
                                return a.markItem(b, c)
                            });
                            return
                        }
                        K(b.item.name, "js.br.success_callback.batch.critical", 1, !0);
                        a.markItem(b, e)
                    })
                })) : (c && (d.identity = c), K(d.name, "js.use_banzai.log_critical", 1, !0), L.logCritical([d], function(c) {
                    return a.markItem(b, c)
                }))
            })(b)
        });
        ((a = c("AnalyticsCoreData").queue_activation_experiment) != null ? a : !1) && (c("PersistedQueue").setOnQueueActivateExperiment(), c("PersistedQueue").eventEmitter.emit("active", null));
        c("AnalyticsCoreData").enable_dataloss_timer && (R(), O(), P())
    }
    g.attach = a
}, 98);
__d("FleetBeaconStates", [], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.getName = function() {
            return "initial"
        };
        b.getFleetBeaconRunner = function() {
            return this.$1
        };
        b.prepareFleetBeaconSucceed = function() {
            throw new Error("Invalid transition")
        };
        b.prepareFleetBeaconFailed = function() {
            throw new Error("Invalid transition")
        };
        b.subscribeIssued = function() {
            throw new Error("Invalid transition")
        };
        b.subscribeSuccessSignalReceived = function() {
            throw new Error("Invalid transition")
        };
        b.publishIssued = function() {
            throw new Error("Invalid transition")
        };
        b.publishFailed = function() {
            throw new Error("Invalid transition")
        };
        b.payloadReceived = function() {
            throw new Error("Invalid transition")
        };
        b.waitForPublishTimeout = function() {
            throw new Error("Invalid transition")
        };
        b.subscribeTimeout = function() {
            throw new Error("Invalid transition")
        };
        b.payloadTimeout = function() {
            throw new Error("Invalid transition")
        };
        b.cleanUpFinish = function() {
            throw new Error("Invalid transition")
        };
        return a
    }();
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getName = function() {
            return "preparing"
        };
        c.prepareFleetBeaconSucceed = function() {
            var b = this;
            return {
                newState: new g(a.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    a.prototype.getFleetBeaconRunner.call(b).runFleetBeaconTest()
                }
            }
        };
        c.prepareFleetBeaconFailed = function() {
            var b = this;
            return {
                newState: new m(a.prototype.getFleetBeaconRunner.call(this)),
                action: function() {
                    b.getFleetBeaconRunner().cleanUpFleetBeacon()
                }
            }
        };
        return b
    }(a);
    var g = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "before_subscribe"
            };
            c.subscribeIssued = function() {
                var a = this;
                return {
                    newState: new h(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        b.prototype.getFleetBeaconRunner.call(a).startSubscribeTimer()
                    }
                }
            };
            return a
        }(a),
        h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "subscribe_issued"
            };
            c.subscribeSuccessSignalReceived = function() {
                var a = this;
                return {
                    newState: new i(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish()
                    }
                }
            };
            c.subscribeTimeout = function() {
                var a = this;
                return {
                    newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            };
            return a
        }(a),
        i = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "waiting_to_publish"
            };
            c.waitForPublishTimeout = function() {
                var a = this;
                return {
                    newState: new j(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        b.prototype.getFleetBeaconRunner.call(a).publish(), b.prototype.getFleetBeaconRunner.call(a).startPayloadTimer()
                    }
                }
            };
            return a
        }(a),
        j = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "publish_issued"
            };
            c.publishFailed = function() {
                var a = this;
                return {
                    newState: new m(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            };
            c.payloadReceived = function() {
                var a = this,
                    c, d;
                (function() {});
                b.prototype.getFleetBeaconRunner.call(this).isLastPayload() ? (c = new l(b.prototype.getFleetBeaconRunner.call(this)), d = function() {
                    a.getFleetBeaconRunner().cleanUpFleetBeacon()
                }) : (c = new i(b.prototype.getFleetBeaconRunner.call(this)), d = function() {
                    b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish()
                });
                return {
                    newState: c,
                    action: d
                }
            };
            c.payloadTimeout = function() {
                var a = this;
                return {
                    newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            };
            return a
        }(a),
        k = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "failed"
            };
            c.cleanUpFinish = function() {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {}
                }
            };
            return a
        }(a),
        l = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "succeed"
            };
            c.cleanUpFinish = function() {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {}
                }
            };
            return a
        }(a),
        m = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "aborted"
            };
            c.cleanUpFinish = function() {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function() {}
                }
            };
            return a
        }(a),
        n = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }
            var c = a.prototype;
            c.getName = function() {
                return "finish"
            };
            return a
        }(a);
    f.FleetBeaconState = a;
    f.FleetBeaconPreparingState = b;
    f.FleetBeaconBeforeSubscribeState = g;
    f.FleetBeaconSubscribedIssuedState = h;
    f.FleetBeaconWaitingToPublishState = i;
    f.FleetBeaconPublishIssuedState = j;
    f.FleetBeaconFailedState = k;
    f.FleetBeaconSucceedState = l;
    f.FleetBeaconAbortedState = m;
    f.FleetBeaconFinishState = n
}, 66);
__d("FleetBeaconRunner", ["FleetBeaconStates", "clearTimeout", "setTimeout"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a;
            this.$2 = new(d("FleetBeaconStates").FleetBeaconState)(this);
            var b = new(d("FleetBeaconStates").FleetBeaconPreparingState)(this);
            this.$1.cleanPreviousFleetBeaconResult();
            this.$6(function() {
                return {
                    newState: b,
                    action: function() {}
                }
            });
            this.$3 = 0;
            this.$1.setFleetBeaconRunner(this)
        }
        var b = a.prototype;
        b.getPublishTimes = function() {
            return this.$3
        };
        b.prepareFleetBeaconTest = function() {
            this.$1.prepareFleetBeaconTest()
        };
        b.runFleetBeaconTest = function() {
            var a = this;
            this.$6(function() {
                return a.$2.subscribeIssued()
            });
            this.$7()
        };
        b.$7 = function() {
            this.$1.subscribe()
        };
        b.publish = function() {
            this.$1.publish()
        };
        b.isLastPayload = function() {
            return this.$3 >= this.$1.publishWaitIntervalsMS().length
        };
        b.waitForNextPublish = function() {
            var a = this,
                b = this.$1.publishWaitIntervalsMS()[this.$3];
            this.$3 += 1;
            b === 0 ? this.$8() : c("setTimeout")(function() {
                a.$8()
            }, b)
        };
        b.startSubscribeTimer = function() {
            var a = this,
                b = this.$1.subscribeTimeoutIntervalMS();
            this.$4 = c("setTimeout")(function() {
                a.$9()
            }, b)
        };
        b.startPayloadTimer = function() {
            var a = this,
                b = this.$1.payloadTimeoutIntervalMS();
            this.$5 = c("setTimeout")(function() {
                a.$10()
            }, b)
        };
        b.cleanUpFleetBeacon = function() {
            this.$1.cleanUpFleetBeacon()
        };
        b.onCleanUpFinish = function() {
            var a = this;
            this.$6(function() {
                return a.$2.cleanUpFinish()
            })
        };
        b.$8 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.waitForPublishTimeout()
            })
        };
        b.$9 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.subscribeTimeout()
            })
        };
        b.$10 = function() {
            var a = this;
            this.$6(function() {
                return a.$2.payloadTimeout()
            })
        };
        b.onPrepareFleetBeaconSuccess = function() {
            var a = this;
            this.$6(function() {
                return a.$2.prepareFleetBeaconSucceed()
            })
        };
        b.onPrepareFleetBeaconFailed = function() {
            var a = this;
            this.$6(function() {
                return a.$2.prepareFleetBeaconFailed()
            })
        };
        b.onSubscribe = function() {
            var a = this;
            c("clearTimeout")(this.$4);
            this.$6(function() {
                return a.$2.subscribeSuccessSignalReceived()
            })
        };
        b.onPayloadReceived = function() {
            var a = this;
            c("clearTimeout")(this.$5);
            this.$6(function() {
                return a.$2.payloadReceived()
            })
        };
        b.onPublishFailed = function() {
            var a = this;
            c("clearTimeout")(this.$5);
            this.$6(function() {
                return a.$2.publishFailed()
            })
        };
        b.$6 = function(a) {
            a = a();
            var b = this.$2;
            this.$2 = a.newState;
            var c = this.$2;
            this.$11(b, c);
            a.action()
        };
        b.$11 = function(a, b) {
            this.$1.onFleetBeaconStateTransition(a, b)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("FleetBeaconStateTransitionListener", [], function(a, b, c, d, e, f) {
    a = function() {
        function a() {}
        var b = a.prototype;
        b.onFleetBeaconStateTransition = function(a, b, c, d) {
            throw new Error("Require implementation")
        };
        b.cleanState = function() {
            throw new Error("Require implementation")
        };
        return a
    }();
    f["default"] = a
}, 66);
__d("FleetBeaconTestBase", [], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = null, this.$2 = []
        }
        var b = a.prototype;
        b.addStateTransitionListener = function(a) {
            this.$2.push(a)
        };
        b.cleanPreviousFleetBeaconResult = function() {
            this.$2.forEach(function(a) {
                a.cleanState()
            })
        };
        b.getNumberOfPublishers = function() {
            var a;
            return (a = (a = this.$1) == null ? void 0 : a.getPublishTimes()) != null ? a : -1
        };
        b.getTestID = function() {
            throw new Error("Require implementation")
        };
        b.setFleetBeaconRunner = function(a) {
            this.$1 = a
        };
        b.prepareFleetBeaconTest = function() {
            throw new Error("Require implementation")
        };
        b.onPrepareFleetBeaconSuccess = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconSuccess()
        };
        b.onPrepareFleetBeaconFailed = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconFailed()
        };
        b.subscribe = function() {
            throw new Error("Require implementation")
        };
        b.onSubscribe = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onSubscribe()
        };
        b.publish = function() {
            throw new Error("Require implementation")
        };
        b.cleanUpFleetBeacon = function() {
            throw new Error("Require implementation")
        };
        b.onCleanUpFinish = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onCleanUpFinish()
        };
        b.onPublishFailed = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPublishFailed()
        };
        b.onPayloadReceived = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.onPayloadReceived()
        };
        b.subscribeTimeoutIntervalMS = function() {
            return 1e4
        };
        b.payloadTimeoutIntervalMS = function() {
            return 2e4
        };
        b.publishWaitIntervalsMS = function() {
            return [1e4, 5e3]
        };
        b.shouldStartTime = function() {
            return !0
        };
        b.onFleetBeaconStateTransition = function(a, b) {
            var c = this,
                d = Date.now();
            this.$2.forEach(function(e) {
                e.onFleetBeaconStateTransition(a, b, d, c)
            })
        };
        return a
    }();
    f["default"] = a
}, 66);
__d("FleetBeaconTestUIAnnouncer", ["FleetBeaconStateTransitionListener"], function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b;
            b = a.call(this) || this;
            b.$FleetBeaconTestUIAnnouncer1 = [];
            b.$FleetBeaconTestUIAnnouncer3 = !1;
            b.$FleetBeaconTestUIAnnouncer4 = !1;
            b.$FleetBeaconTestUIAnnouncer5 = !1;
            b.$FleetBeaconTestUIAnnouncer6 = !1;
            b.$FleetBeaconTestUIAnnouncer7 = -1;
            b.$FleetBeaconTestUIAnnouncer8 = -1;
            b.$FleetBeaconTestUIAnnouncer9 = 0;
            b.$FleetBeaconTestUIAnnouncer10 = 0;
            b.$FleetBeaconTestUIAnnouncer11 = [];
            b.$FleetBeaconTestUIAnnouncer12 = -1;
            b.$FleetBeaconTestUIAnnouncer13 = -1;
            b.$FleetBeaconTestUIAnnouncer14 = -1;
            return b
        }
        var c = b.prototype;
        c.cleanState = function() {
            this.$FleetBeaconTestUIAnnouncer3 = !1, this.$FleetBeaconTestUIAnnouncer4 = !1, this.$FleetBeaconTestUIAnnouncer5 = !1, this.$FleetBeaconTestUIAnnouncer6 = !1, this.$FleetBeaconTestUIAnnouncer7 = -1, this.$FleetBeaconTestUIAnnouncer8 = -1, this.$FleetBeaconTestUIAnnouncer9 = 0, this.$FleetBeaconTestUIAnnouncer10 = 0, this.$FleetBeaconTestUIAnnouncer11 = [], this.$FleetBeaconTestUIAnnouncer12 = -1, this.$FleetBeaconTestUIAnnouncer13 = -1, this.$FleetBeaconTestUIAnnouncer14 = -1
        };
        c.addSubscriber = function(a) {
            this.$FleetBeaconTestUIAnnouncer1.push(a)
        };
        c.onFleetBeaconStateTransition = function(a, b, c, d) {
            var e = d.getTestID(),
                f = {
                    oldState: a,
                    newState: b,
                    testID: e,
                    timestamp: c,
                    extra: {}
                };
            this.$FleetBeaconTestUIAnnouncer2 == null && (this.$FleetBeaconTestUIAnnouncer2 = d);
            e = "NONE";
            switch (b.getName()) {
                case "initial":
                    break;
                case "preparing":
                    this.$FleetBeaconTestUIAnnouncer12 = Date.now();
                    this.$FleetBeaconTestUIAnnouncer3 = !0;
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        createIssued: !0
                    });
                    break;
                case "before_subscribe":
                    this.$FleetBeaconTestUIAnnouncer13 = Date.now();
                    this.$FleetBeaconTestUIAnnouncer4 = !0;
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        createSuccess: !0
                    });
                    break;
                case "subscribe_issued":
                    this.$FleetBeaconTestUIAnnouncer5 = !0;
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        subscribeIssued: !0,
                        subscribeTimestamp: this.$FleetBeaconTestUIAnnouncer13,
                        subscribeTimeoutIntervalMS: (d = (c = this.$FleetBeaconTestUIAnnouncer2) == null ? void 0 : c.subscribeTimeoutIntervalMS()) != null ? d : -1
                    });
                    break;
                case "waiting_to_publish":
                    a.getName() === "subscribe_issued" && (this.$FleetBeaconTestUIAnnouncer6 = !0, this.$FleetBeaconTestUIAnnouncer7 = Date.now() - this.$FleetBeaconTestUIAnnouncer13, f.extra = babelHelpers["extends"]({}, f.extra, {
                        subscribeSuccess: !0,
                        subscribeLatencyMS: this.$FleetBeaconTestUIAnnouncer7
                    }));
                    a.getName() === "publish_issued" && this.$FleetBeaconTestUIAnnouncer15(f);
                    break;
                case "publish_issued":
                    this.$FleetBeaconTestUIAnnouncer9 += 1;
                    this.$FleetBeaconTestUIAnnouncer14 = Date.now();
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        publishIssued: !0,
                        payloadTimeoutInterval: (c = (b = this.$FleetBeaconTestUIAnnouncer2) == null ? void 0 : b.payloadTimeoutIntervalMS()) != null ? c : -1
                    });
                    break;
                case "failed":
                    a.getName() === "subscribe_issued" && (e = "SUBSCRIBE_FAILED");
                    a.getName() === "publish_issued" && (e = "RECEIVE_PUBLISH_FAILED");
                    this.$FleetBeaconTestUIAnnouncer16(f, "FAILURE", e);
                    break;
                case "succeed":
                    a.getName() === "publish_issued" && this.$FleetBeaconTestUIAnnouncer15(f);
                    this.$FleetBeaconTestUIAnnouncer16(f, "SUCCESS", "NONE");
                    break;
                case "aborted":
                    a.getName() === "preparing" && (e = "CREATE_TEST_FAILED");
                    a.getName() === "publish_issued" && (e = "MUTATE_FIELD_FAILED");
                    this.$FleetBeaconTestUIAnnouncer16(f, "ABORT", e);
                    break;
                case "finish":
                    f.extra = babelHelpers["extends"]({}, f.extra, {
                        cleanUpFinish: !0
                    });
                    break;
                default:
            }
            this.$FleetBeaconTestUIAnnouncer1.forEach(function(a) {
                a(f)
            })
        };
        c.$FleetBeaconTestUIAnnouncer15 = function(a) {
            this.$FleetBeaconTestUIAnnouncer10 += 1;
            var b = Date.now() - this.$FleetBeaconTestUIAnnouncer14;
            this.$FleetBeaconTestUIAnnouncer11.push(b);
            a.extra = babelHelpers["extends"]({}, a.extra, {
                payloadSuccess: !0,
                payloadSuccessCnt: this.$FleetBeaconTestUIAnnouncer10,
                payloadLatency: b
            })
        };
        c.$FleetBeaconTestUIAnnouncer16 = function(a, b, c) {
            a.extra = babelHelpers["extends"]({}, a.extra, {
                testResult: b,
                failureReason: c
            })
        };
        return b
    }(c("FleetBeaconStateTransitionListener"));
    g["default"] = a
}, 98);
__d("FleetBeaconSubscriptionNetwork", ["CurrentUser", "FleetBeaconSubscriptionNetwork_LogMutation.graphql", "FleetBeaconSubscriptionNetwork_PublishMutation.graphql", "FleetBeaconSubscriptionNetwork_Subscription.graphql", "Promise", "RelayFBSubscription", "cr:1053", "regeneratorRuntime", "relay-runtime", "uuid"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = b("cr:1053").addFBisms(d("relay-runtime").commitMutation),
        l = c("RelayFBSubscription").addFBisms(d("relay-runtime").requestSubscription);
    a = function() {
        function a(a) {
            this.environment = a
        }
        var d = a.prototype;
        d.subscribe = function(a, c) {
            return l(this.environment, {
                subscription: h !== void 0 ? h : h = b("FleetBeaconSubscriptionNetwork_Subscription.graphql"),
                variables: {
                    input: {
                        test_id: a
                    }
                },
                onError: c.onError,
                onNext: c.onNext
            })
        };
        d.publish = function(a) {
            var d = this;
            return b("regeneratorRuntime").async(function(e) {
                while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new(b("Promise"))(function(e, f) {
                            k(d.environment, {
                                mutation: i !== void 0 ? i : i = b("FleetBeaconSubscriptionNetwork_PublishMutation.graphql"),
                                variables: {
                                    input: {
                                        client_mutation_id: c("uuid")(),
                                        actor_id: c("CurrentUser").getAccountID(),
                                        test_id: a
                                    }
                                },
                                onCompleted: function(a) {
                                    return e()
                                },
                                onError: f
                            })
                        }));
                    case 1:
                    case "end":
                        return e.stop()
                }
            }, null, this)
        };
        d.log = function(a) {
            var c = this;
            return b("regeneratorRuntime").async(function(d) {
                while (1) switch (d.prev = d.next) {
                    case 0:
                        return d.abrupt("return", new(b("Promise"))(function(d, e) {
                            k(c.environment, {
                                mutation: j !== void 0 ? j : j = b("FleetBeaconSubscriptionNetwork_LogMutation.graphql"),
                                variables: {
                                    input: a
                                },
                                onCompleted: function(a) {
                                    return d()
                                },
                                onError: e
                            })
                        }));
                    case 1:
                    case "end":
                        return d.stop()
                }
            }, null, this)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("FleetBeaconTestSubscriptionLogger", ["CurrentUser", "FleetBeaconStateTransitionListener", "RelayRTIUtils", "uuid"], function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            var e;
            e = a.call(this) || this;
            e.$FleetBeaconTestSubscriptionLogger1 = null;
            e.$FleetBeaconTestSubscriptionLogger2 = b;
            e.$FleetBeaconTestSubscriptionLogger3 = !1;
            e.$FleetBeaconTestSubscriptionLogger4 = !1;
            e.$FleetBeaconTestSubscriptionLogger5 = !1;
            e.$FleetBeaconTestSubscriptionLogger6 = !1;
            e.$FleetBeaconTestSubscriptionLogger7 = -1;
            e.$FleetBeaconTestSubscriptionLogger8 = -1;
            e.$FleetBeaconTestSubscriptionLogger9 = 0;
            e.$FleetBeaconTestSubscriptionLogger10 = 0;
            e.$FleetBeaconTestSubscriptionLogger11 = [];
            e.$FleetBeaconTestSubscriptionLogger12 = -1;
            e.$FleetBeaconTestSubscriptionLogger13 = -1;
            e.$FleetBeaconTestSubscriptionLogger14 = -1;
            e.$FleetBeaconTestSubscriptionLogger15 = c;
            e.$FleetBeaconTestSubscriptionLogger16 = d;
            return e
        }
        var e = b.prototype;
        e.cleanState = function() {
            this.$FleetBeaconTestSubscriptionLogger3 = !1, this.$FleetBeaconTestSubscriptionLogger4 = !1, this.$FleetBeaconTestSubscriptionLogger5 = !1, this.$FleetBeaconTestSubscriptionLogger6 = !1, this.$FleetBeaconTestSubscriptionLogger7 = -1, this.$FleetBeaconTestSubscriptionLogger8 = -1, this.$FleetBeaconTestSubscriptionLogger9 = 0, this.$FleetBeaconTestSubscriptionLogger10 = 0, this.$FleetBeaconTestSubscriptionLogger11 = [], this.$FleetBeaconTestSubscriptionLogger12 = -1, this.$FleetBeaconTestSubscriptionLogger13 = -1, this.$FleetBeaconTestSubscriptionLogger14 = -1
        };
        e.onFleetBeaconStateTransition = function(a, b, c, d) {
            this.$FleetBeaconTestSubscriptionLogger1 == null && (this.$FleetBeaconTestSubscriptionLogger1 = d);
            c = "NONE";
            switch (b.getName()) {
                case "initial":
                    break;
                case "preparing":
                    this.$FleetBeaconTestSubscriptionLogger12 = Date.now();
                    this.$FleetBeaconTestSubscriptionLogger3 = !0;
                    break;
                case "before_subscribe":
                    this.$FleetBeaconTestSubscriptionLogger13 = Date.now();
                    this.$FleetBeaconTestSubscriptionLogger4 = !0;
                    break;
                case "subscribe_issued":
                    this.$FleetBeaconTestSubscriptionLogger5 = !0;
                    break;
                case "waiting_to_publish":
                    a.getName() === "subscribe_issued" && (this.$FleetBeaconTestSubscriptionLogger6 = !0, this.$FleetBeaconTestSubscriptionLogger7 = Date.now() - this.$FleetBeaconTestSubscriptionLogger13);
                    a.getName() === "publish_issued" && this.$FleetBeaconTestSubscriptionLogger17();
                    break;
                case "publish_issued":
                    this.$FleetBeaconTestSubscriptionLogger9 += 1;
                    this.$FleetBeaconTestSubscriptionLogger14 = Date.now();
                    break;
                case "failed":
                    a.getName() === "subscribe_issued" && (c = "SUBSCRIBE_FAILED");
                    a.getName() === "publish_issued" && (c = "RECEIVE_PUBLISH_FAILED");
                    this.$FleetBeaconTestSubscriptionLogger18("FAILURE", c);
                    break;
                case "succeed":
                    a.getName() === "publish_issued" && this.$FleetBeaconTestSubscriptionLogger17();
                    this.$FleetBeaconTestSubscriptionLogger18("SUCCESS", "NONE");
                    break;
                case "aborted":
                    a.getName() === "preparing" && (c = "CREATE_TEST_FAILED");
                    a.getName() === "publish_issued" && (c = "MUTATE_FIELD_FAILED");
                    this.$FleetBeaconTestSubscriptionLogger18("ABORT", c);
                    break;
                default:
            }
        };
        e.$FleetBeaconTestSubscriptionLogger17 = function() {
            this.$FleetBeaconTestSubscriptionLogger10 += 1;
            var a = Date.now() - this.$FleetBeaconTestSubscriptionLogger14;
            this.$FleetBeaconTestSubscriptionLogger11.push(a)
        };
        e.$FleetBeaconTestSubscriptionLogger18 = function(a, b) {
            var e, f = this,
                g = this.$FleetBeaconTestSubscriptionLogger12 = Date.now() - this.$FleetBeaconTestSubscriptionLogger12,
                h = parseInt(this.$FleetBeaconTestSubscriptionLogger11.reduce(function(a, b) {
                    return a + b
                }, 0) / this.$FleetBeaconTestSubscriptionLogger10, 10);
            e = (e = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : e.getTestID();
            if (e == null) return;
            this.$FleetBeaconTestSubscriptionLogger2.log({
                client_mutation_id: c("uuid")(),
                actor_id: c("CurrentUser").getAccountID(),
                test_id: e,
                test_name: "Web_Manual",
                test_result: a,
                failure_reason: b,
                subscribe_issued: this.$FleetBeaconTestSubscriptionLogger5,
                subscribe_success: this.$FleetBeaconTestSubscriptionLogger6,
                subscribe_latency_ms: this.$FleetBeaconTestSubscriptionLogger7,
                subscribe_timeout_interval_ms: (e = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : e.subscribeTimeoutIntervalMS(),
                publish_success: this.$FleetBeaconTestSubscriptionLogger10 > 0,
                publish_latency_ms: h,
                publish_timeout_interval_ms: (a = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : a.payloadTimeoutIntervalMS(),
                test_duration_ms: g,
                triggering_subscription: (b = this.$FleetBeaconTestSubscriptionLogger15) != null ? b : "manual",
                app_id: d("RelayRTIUtils").GRAPH_SERVICES_SDK_APP_ID
            }).then(function(a) {
                f.$FleetBeaconTestSubscriptionLogger16(!0)
            })["catch"](function(a) {
                f.$FleetBeaconTestSubscriptionLogger16(!1)
            })
        };
        return b
    }(c("FleetBeaconStateTransitionListener"));
    g["default"] = a
}, 98);
__d("FleetBeaconTestSubscription", ["FleetBeaconTestBase", "FleetBeaconTestSubscriptionLogger", "FleetBeaconTestUIAnnouncer", "uuid"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d, e) {
            var f;
            f = a.call(this) || this;
            f.onCleanUpFleetBeaconFinish = function(a) {
                f.onCleanUpFinish()
            };
            f.$FleetBeaconTestSubscription1 = b;
            f.$FleetBeaconTestSubscription3 = null;
            f.$FleetBeaconTestSubscription4 = e;
            f.$FleetBeaconTestSubscription6 = new(c("FleetBeaconTestSubscriptionLogger"))(b, d, f.onCleanUpFleetBeaconFinish);
            f.$FleetBeaconTestSubscription5 = new(c("FleetBeaconTestUIAnnouncer"))();
            a.prototype.addStateTransitionListener.call(babelHelpers.assertThisInitialized(f), f.$FleetBeaconTestSubscription6);
            a.prototype.addStateTransitionListener.call(babelHelpers.assertThisInitialized(f), f.$FleetBeaconTestSubscription5);
            f.cleanPreviousFleetBeaconResult();
            return f
        }
        var d = b.prototype;
        d.cleanPreviousFleetBeaconResult = function() {
            a.prototype.cleanPreviousFleetBeaconResult.call(this), this.$FleetBeaconTestSubscription2 = c("uuid")()
        };
        d.getTestID = function() {
            return this.$FleetBeaconTestSubscription2
        };
        d.getFleetBeaconUIAnnouncer = function() {
            return this.$FleetBeaconTestSubscription5
        };
        d.prepareFleetBeaconTest = function() {
            this.onPrepareFleetBeaconSuccess()
        };
        d.subscribe = function() {
            var a = this,
                b = this.$FleetBeaconTestSubscription2;
            if (b == null) return;
            this.$FleetBeaconTestSubscription3 = this.$FleetBeaconTestSubscription1.subscribe(b, {
                onNext: function() {
                    a.onPayloadReceived()
                },
                onError: function() {}
            });
            this.onSubscribe()
        };
        d.publish = function() {
            var b = this,
                c = this.$FleetBeaconTestSubscription2;
            if (c == null) return;
            this.$FleetBeaconTestSubscription1.publish(c)["catch"](function(c) {
                a.prototype.onPublishFailed.call(b)
            })
        };
        d.cleanUpFleetBeacon = function() {};
        d.$FleetBeaconTestSubscription7 = function() {
            var a;
            (a = this.$FleetBeaconTestSubscription3) == null ? void 0 : a.dispose()
        };
        d.onFleetBeaconStateTransition = function(b, c) {
            a.prototype.onFleetBeaconStateTransition.call(this, b, c);
            b = c.getName();
            b === "finish" && (this.$FleetBeaconTestSubscription4(), this.$FleetBeaconTestSubscription7())
        };
        return b
    }(c("FleetBeaconTestBase"));
    g["default"] = a
}, 98);
__d("FleetBeaconSubscriptionLauncher", ["FleetBeaconRunner", "FleetBeaconSubscriptionNetwork", "FleetBeaconTestSubscription"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d) {
        a = new(c("FleetBeaconTestSubscription"))(new(c("FleetBeaconSubscriptionNetwork"))(a), b, d);
        return a
    }

    function b(a) {
        var b = new(c("FleetBeaconRunner"))(a);
        a.setFleetBeaconRunner(b);
        b.prepareFleetBeaconTest()
    }
    g.CreateFleetBeaconTestSubscription = a;
    g.LaunchFleetBeaconTestSubscription = b
}, 98);
__d("MqttLongPollingHookCollection", [], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Set()
        }
        var b = a.prototype;
        b.addHook = function(a) {
            this.$1.add(a)
        };
        b.removeHook = function(a) {
            this.$1["delete"](a)
        };
        b.onPollRequestSent = function() {
            this.$1.forEach(function(a) {
                a.onPollRequestSent()
            })
        };
        b.onPollRequestSuccess = function() {
            this.$1.forEach(function(a) {
                a.onPollRequestSuccess()
            })
        };
        b.onPollResponse = function(a) {
            this.$1.forEach(function(b) {
                b.onPollResponse(a)
            })
        };
        b.onPollFinish = function() {
            this.$1.forEach(function(a) {
                a.onPollFinish()
            })
        };
        b.onPollRequestFailed = function(a) {
            this.$1.forEach(function(b) {
                b.onPollRequestFailed(a)
            })
        };
        b.onPollShutdownAbort = function() {
            this.$1.forEach(function(a) {
                a.onPollShutdownAbort()
            })
        };
        return a
    }();
    f["default"] = a
}, 66);
__d("PromiseResult", ["Promise"], function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            var a = this;
            this.promise = new(b("Promise"))(function(b, c) {
                a.$1 = b, a.$2 = c
            })
        }
        var c = a.prototype;
        c.resolve = function(a) {
            this.$1(a)
        };
        c.reject = function(a) {
            this.$2(a)
        };
        return a
    }();
    f["default"] = a
}, 66);
__d("MqttFetchClient", ["MqttEnv", "MqttProtocolCodec", "MqttUserName", "MqttUtils", "Promise", "PromiseResult"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "fetch_pull",
        i = "fetch_pull_finish",
        j = "fetch_",
        k = 6e4,
        l = "action",
        m = "chunked",
        n = "send",
        o = "true",
        p = 5,
        q = 20,
        r = 10,
        s = 5e3;
    a = function() {
        function a() {
            this.$1 = "", this.$2 = d("MqttEnv").Env.getLoggerInstance(), this.$3 = 0, this.$4 = "", this.$5 = new(c("MqttUserName"))("", 0, 1, "", 0, !0), this.$6 = function() {}, this.$7 = function(a) {}, this.$8 = function() {}, this.$9 = function(a) {}, this.$10 = 0, this.$11 = 0, this.$12 = 0, this.$13 = 0, this.$14 = "Ready", this.$15 = [], this.$16 = [], this.$17 = null, this.$18 = !1, this.$19 = 0
        }
        a.isSupported = function() {
            return typeof window.fetch === "function"
        };
        var e = a.prototype;
        e.run = function(a, b, d, e, f, g, h, i) {
            this.$1 = c("MqttUtils").endpointWithSessionId(a, b), this.$3 = b, this.$4 = d, this.$5 = e, this.$6 = f, this.$7 = g, this.$8 = h, this.$9 = i, this.$20()
        };
        e.isTopicSupported = function(a) {
            return !0
        };
        e.publish = function(a, d) {
            if (this.$14 !== "ReceivingData") {
                this.$2.bumpCounter(j + "publish." + a + ".invalidstate");
                return b("Promise").reject("not connected")
            } else {
                this.$2.bumpCounter(j + "publish." + a + ".publish");
                var e = new(c("PromiseResult"))();
                a = {
                    topic: a,
                    payload: d,
                    promiseResult: e
                };
                this.$15.push(a);
                this.$21();
                return e.promise
            }
        };
        e.abort = function() {
            this.$6 = function() {}, this.$7 = function(a) {}, this.$8 = function() {}, this.$9 = function(a) {}
        };
        e.$22 = function(a) {
            var b = this;
            a.forEach(function(a) {
                b.$2.bumpCounter(j + "publish." + a.topic + ".resolved"), a.promiseResult.resolve()
            });
            this.$12 += a.length
        };
        e.$23 = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.$2.bumpCounter(j + "publish." + a.topic + ".rejected"), a.promiseResult.reject(b)
            })
        };
        e.$24 = function(a, b, c, d) {
            var e = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request failed. Publishes:" + e + ", retry:" + c);
            this.$2.bumpCounter(j + "publish_request_failed");
            this.$14 !== "ReceivingData" || c === p ? (this.$23(a, d), this.$18 = !1, this.$2.bumpCounter(j + "publish_request_failed_final"), this.$21()) : this.$25(a, b, c + 1)
        };
        e.$26 = function(a, b, c, d) {
            if (!d.ok) {
                this.$2.bumpCounter(j + "publish_request_failed.http." + d.status);
                if (d.status === 409) {
                    this.$19++;
                    if (this.$19 >= r) {
                        this.$2.bumpCounter(j + "409_reset");
                        this.$27(new Error("Too many 409 errors"));
                        return
                    }
                }
                this.$24(a, b, c, this.$28(d));
                return
            }
            this.$2.bumpCounter(j + "publish_request_success");
            b = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request success. Publishes:" + b + ", retry:" + c);
            this.$22(a);
            this.$18 = !1;
            this.$21()
        };
        e.$21 = function() {
            if (this.$14 !== "ReceivingData") return;
            if (this.$18) return;
            if (this.$15.length === 0 && this.$16.length === 0) return;
            this.$18 = !0;
            var a = this.$15.slice(0, q);
            this.$15 = this.$15.slice(q, this.$15.length);
            this.$17 != null && d("MqttEnv").Env.clearTimeout(this.$17);
            this.$17 = null;
            var b = this.$16.slice(0, q);
            this.$16 = this.$16.slice(q, this.$16.length);
            this.$25(a, b, 0)
        };
        e.$25 = function(a, b, e) {
            var f = this,
                g = a.map(function(a) {
                    return a.topic
                }).join(",");
            this.$2.debugTrace("FetchClient", "Fetch publish request sent. Publishes:" + g + ", retry:" + e);
            g = c("MqttUtils").endpointWithExtraParameter(this.$1, l, n);
            var h = a.map(function(a) {
                return {
                    topic: a.topic,
                    payload: a.payload,
                    qos: 0,
                    messageId: d("MqttEnv").Env.random()
                }
            });
            h = this.$5.gen(this.$3, [], h, b);
            this.$2.bumpCounter(j + "publish_request");
            c("MqttUtils").promiseDoneWithTimeout(window.fetch(g, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "include",
                referrer: "no-referrer",
                body: h,
                keepalive: !1
            }), function(c) {
                return f.$26(a, b, e, c)
            }, function(c) {
                return f.$24(a, b, e, c)
            }, k)
        };
        e.$29 = function(a) {
            a = a.message;
            this.$2.debugTrace("FetchClient", "Fetch request failed with error:" + a);
            this.$9(a);
            this.$30(!1, a);
            this.$2.bumpCounter(j + "error");
            this.$14 = "Error"
        };
        e.$31 = function(a) {
            var b = this;
            this.$2.debugTrace("FetchClient", "Fetch response data received");
            a = d("MqttProtocolCodec").decodeByteMessages(new Uint8Array(a));
            a = a.messages;
            var c = a.filter(function(a) {
                return a.messageType === d("MqttProtocolCodec").MESSAGE_TYPE.PINGREQ
            });
            a = a.filter(function(a) {
                return a.messageType === d("MqttProtocolCodec").MESSAGE_TYPE.PUBLISH
            }).map(function(a) {
                if (!(a instanceof d("MqttProtocolCodec").WireMessage.Publish)) return {};
                a = a;
                a.qos === 1 && a.messageIdentifier != null && (b.$16.push(a.messageIdentifier), b.$17 == null && (b.$17 = d("MqttEnv").Env.setTimeout(function() {
                    b.$21()
                }, s)));
                return {
                    topic: a.topic,
                    payload: a.payloadMessage,
                    qos: a.qos
                }
            });
            for (var e = a, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                this.$2.bumpCounter(j + "response_" + ((h = h.topic) != null ? h : "void"))
            }
            a && a.length > 0 && (this.$13 += a.length, this.$7(a));
            c && c.length > 0 && this.$32()
        };
        e.$32 = function() {
            this.$2.debugTrace("FetchClient", "Got server ping request"), this.$2.bumpCounter(j + "ping")
        };
        e.$27 = function(a) {
            this.$2.debugTrace("FetchClient", "Fetch request ended: " + a.toString()), this.$2.bumpCounter(j + "done"), this.$33(a.message), this.$8(), this.$14 = "Done"
        };
        e.$34 = function(a, b, d) {
            var e = this;
            if (d != null) try {
                this.$31(d)
            } catch (a) {
                this.$27(a);
                this.$2.bumpCounter(j + "dataDecodeException");
                return
            }
            if (b) {
                this.$27(new Error("EOF"));
                return
            }
            c("MqttUtils").promiseDone(a.read(), function(c) {
                var b = c.done;
                c = c.value;
                return e.$34(a, b, c)
            }, function(a) {
                return e.$27(a)
            })
        };
        e.$35 = function(a) {
            if (!a.ok) {
                this.$2.bumpCounter(j + "error.http." + a.status);
                this.$29(this.$28(a));
                return
            }
            a = a.body;
            if (!a) {
                this.$29(new Error("Empty body"));
                return
            }
            a = a.getReader();
            this.$6();
            this.$2.bumpCounter(j + "success");
            this.$30(!0, null);
            this.$11 = Date.now();
            this.$14 = "ReceivingData";
            this.$2.debugTrace("FetchClient", "Fetch request success");
            this.$34(a, !1, null)
        };
        e.$33 = function(a) {
            this.$2.eventLogPullFinish({
                pullEventName: i,
                sessionID: this.$3,
                duration: Date.now() - this.$11,
                errorMessage: a,
                publishReceived: this.$13,
                publishSent: this.$12
            })
        };
        e.$30 = function(a, b) {
            this.$2.eventLogPull({
                pullEventName: h,
                sessionID: this.$3,
                status: a,
                duration: Date.now() - this.$10,
                hostname: this.$1,
                errorMessage: b
            })
        };
        e.$20 = function() {
            var a = this;
            if (this.$14 !== "Ready") return;
            this.$2.debugTrace("FetchClient", "Sending fetch request");
            this.$2.bumpCounter(j + "request");
            this.$10 = Date.now();
            var b = c("MqttUtils").endpointWithExtraParameter(this.$1, m, o);
            c("MqttUtils").promiseDoneWithTimeout(window.fetch(b, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "include",
                referrer: "no-referrer",
                body: this.$4,
                keepalive: !1
            }), function(b) {
                return a.$35(b)
            }, function(b) {
                return a.$29(b)
            }, k)
        };
        e.$28 = function(a) {
            return new Error("Http error, status=" + a.status)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("MqttLongPollingClient", ["MqttEnv", "MqttProtocolCodec", "MqttUserName", "Promise", "XHRRequest", "getCrossOriginTransport"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 120 * 1e3,
        i = "simple_pull",
        j = "longpolling_";
    a = function() {
        function a() {
            this.$3 = "", this.$4 = 0, this.$2 = d("MqttEnv").Env.getLoggerInstance(), this.$1 = "Ready", this.$5 = "", this.$6 = new(c("MqttUserName"))("", 0, 1, "", 0, !0), this.$7 = function() {}, this.$8 = function(a) {}, this.$9 = function() {}, this.$10 = function(a) {}, this.$11 = 0, this.$12 = null, this.$13 = new Set(["/t_ms", "/messenger_sync_get_diffs", "/messenger_sync_create_queue", "/webrtc", "/rtc_multi"])
        }
        var e = a.prototype;
        e.run = function(a, b, c, d, e, f, g, h) {
            this.$3 = a, this.$4 = b, this.$5 = c, this.$6 = d, this.$7 = e, this.$8 = f, this.$9 = g, this.$10 = h, this.$14(this.$5)
        };
        e.isTopicSupported = function(a) {
            return this.$13.has(a)
        };
        e.publish = function(a, c) {
            return b("Promise").reject("not supported")
        };
        e.abort = function() {
            this.$12 != null && this.$12.abort("Disconnected")
        };
        e.$15 = function(a, b) {
            if (this.$1 === a) return;
            this.$1 = a;
            a === "Error" && b != null && this.$10(b);
            this.$2.debugTrace("LongPollingClient", "_changeStatus : " + a)
        };
        e.$16 = function(a) {
            if (this.$1 !== "RequestSend") return;
            if (!a) {
                this.$17("EmptyResponse", null);
                return
            }
            this.$7();
            this.$2.bumpCounter(j + "success");
            this.$18(!0, null);
            this.$15("ResponseReceived");
            a = d("MqttProtocolCodec").decodeByteMessages(new Uint8Array(a));
            a = a.messages.filter(function(a) {
                return a instanceof d("MqttProtocolCodec").WireMessage.Publish
            }).map(function(a) {
                if (a instanceof d("MqttProtocolCodec").WireMessage.Publish) {
                    a = a;
                    return {
                        topic: a.topic,
                        payload: a.payloadMessage,
                        qos: a.qos
                    }
                } else return {}
            });
            this.$8(a);
            this.$9()
        };
        e.$17 = function(a, b) {
            b = b != null ? b.message : "null";
            this.$2.debugTrace("LongPollingClient Error", "Poll failed with error:" + a + ", errorMsg:" + b);
            this.$18(!1, a + ":" + b);
            this.$2.bumpCounter(j + "error." + a);
            this.$15("Error", a)
        };
        e.$18 = function(a, b) {
            this.$2.eventLogPull({
                pullEventName: i,
                sessionID: this.$4,
                status: a,
                duration: Date.now() - this.$11,
                hostname: this.$3,
                errorMessage: b
            })
        };
        e.$14 = function(a) {
            var b = this;
            if (this.$1 !== "Ready" || this.$12) return;
            this.$2.bumpCounter(j + "request");
            try {
                this.$11 = Date.now(), this.$12 = new(c("XHRRequest"))(this.$3).setResponseType("arraybuffer").setRawData(a).setTransportBuilder(c("getCrossOriginTransport").withCredentials).setResponseHandler(function(a) {
                    return b.$16(a)
                }).setNetworkFailureHandler(function(a) {
                    b.$17("Network", a)
                }).setErrorHandler(function(a) {
                    b.$17("Error", a)
                }).setAbortHandler(function(a) {
                    b.$17("Abort", null)
                }).setTimeoutHandler(function() {
                    b.$17("Timeout", null)
                }).setTimeout(h).send(), this.$15("RequestSend")
            } catch (a) {
                this.$17("Error", a)
            }
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("MqttLongPollingRunner", ["MqttEnv", "MqttFetchClient", "MqttLongPollingClient", "MqttLongPollingHookCollection", "MqttTypes", "MqttUtils", "Promise", "exponentialBackoff"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 4,
        i = 1e3,
        j = 3e3,
        k = "mqtt_should_longpoll",
        l = "last_lp",
        m = "yes",
        n = "no";
    a = function() {
        function a(a, b, e, f, g, h, i, j, k) {
            var l = this;
            this.$23 = function() {
                try {
                    if (!l.$29()) return;
                    l.$5.debugTrace("LongPollingRunner", "_startPollingIfNecessary called");
                    var a = l.$30();
                    l.$14 = a;
                    var b = l.$9(),
                        e = l.$10();
                    b = b.filter(function(b) {
                        return a.isTopicSupported(b)
                    });
                    e = e.filter(function(b) {
                        return a.isTopicSupported(b.topic)
                    });
                    if (b.length === 0 && e.length === 0) {
                        l.$5.debugTrace("LongPollingRunner", "Poll skipped, nothing to do");
                        l.$14 = null;
                        d("MqttEnv").Env.setTimeout(function() {
                            l.$23()
                        }, 1e3);
                        return
                    }
                    var f = c("MqttUtils").generateSessionId();
                    a.run(l.$6, f, l.$7.gen(f, b, e), l.$7, function() {
                        return l.$31()
                    }, function(a) {
                        return l.$32(a)
                    }, function() {
                        return l.$33()
                    }, function(a) {
                        return l.$34(a)
                    });
                    l.$19.onPollRequestSent();
                    f = b.join(",");
                    b = e.map(function(a) {
                        return a.topic
                    }).join(",");
                    l.$5.debugTrace("LongPollingRunner", "Making a poll request to " + l.$6 + ". SubscribedTopics:" + f + ". Publishes:" + b)
                } catch (a) {
                    a && l.$5.logErrorWarn(a, "lp_js_error"), l.$11(new(d("MqttTypes").MqttChannelError)(!1, "js error lp", a)), l.$34("lp_js_error")
                }
            };
            this.$6 = a;
            this.$7 = b;
            this.$1 = f;
            this.$2 = 0;
            this.$3 = e;
            this.$4 = c("MqttUtils").hasWSSupport();
            this.$5 = d("MqttEnv").Env.getLoggerInstance();
            this.$8 = g;
            this.$9 = h;
            this.$10 = i;
            this.$11 = j;
            this.$12 = k;
            this.$13 = !1;
            this.$14 = null;
            this.$15 = "LPInactive";
            this.$16 = "NotSent";
            this.$17 = 0;
            this.$19 = new(c("MqttLongPollingHookCollection"))();
            this.$18 = c("exponentialBackoff")(this.$23, this);
            this.$20 = 0;
            this.$21 = n;
            a = d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_lp_use_fetch);
            b = c("MqttFetchClient").isSupported();
            a ? this.$5.bumpCounter("fetch_gk_pass") : this.$5.bumpCounter("fetch_gk_fail");
            b ? this.$5.bumpCounter("fetch_api_supported") : this.$5.bumpCounter("fetch_api_not_supported");
            this.$22 = a && b
        }
        var e = a.prototype;
        e.addHook = function(a) {
            this.$19.addHook(a)
        };
        e.start = function() {
            var a = this;
            this.$21 = d("MqttEnv").Env.configRead(l, n);
            this.$5.debugTrace("LongPollingRunner", "Runner loaded, last status " + this.$21);
            this.$20 = Date.now();
            this.$23();
            d("MqttEnv").Env.setTimeout(function() {
                a.$23()
            }, i + 100);
            d("MqttEnv").Env.setTimeout(function() {
                a.$23()
            }, j + 100)
        };
        e.shutdown = function() {
            this.$5.debugTrace("LongPollingRunner", "Shutdown called"), this.$14 && this.$14.abort(), this.$19.onPollShutdownAbort(), this.$14 = null
        };
        e.canPublish = function() {
            return this.$15 === "LPActive" && this.$16 === "ReceivingData"
        };
        e.publish = function(a, c, e) {
            return d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_enable_publish_over_polling) && (this.$14 && this.$14.isTopicSupported(a)) ? this.$14.publish(a, c) : b("Promise").reject()
        };
        e.onConnectAttempt = function() {};
        e.onConnectFailure = function() {
            this.$2++, this.$23()
        };
        e.onConnected = function() {};
        e.onConnectSuccess = function() {
            this.$1 = !0, d("MqttEnv").Env.configWrite(l, null)
        };
        e.onConnectionLost = function() {};
        e.onConnectionDisconnect = function() {};
        e.onSubscribe = function(a) {};
        e.onUnsubscribe = function(a) {};
        e.onPublish = function(a) {};
        e.onMessage = function(a) {};
        e.onWSFatal = function() {
            this.$3 = !0, this.$23()
        };
        e.getStatus = function() {
            return this.$15
        };
        e.getRequestStatus = function() {
            return this.$16
        };
        e.$24 = function(a) {
            a !== this.$15 && (this.$5.debugTrace("LongPollingRunner", "status changed to " + a + " from " + this.$15), this.$15 = a, this.$12(this.$15, this.$16))
        };
        e.$25 = function(a) {
            if (!this.$22) return;
            a !== this.$16 && (this.$5.debugTrace("LongPollingRunner", "request status changed to " + a + " from " + this.$16), this.$16 = a, this.$12(this.$15, this.$16))
        };
        e.$26 = function() {
            this.$17 = 0
        };
        e.$27 = function() {
            this.$17++, this.$17 >= h && this.$24("LPError")
        };
        e.$28 = function() {
            var a = d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_lp_no_delay),
                b = d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled),
                c = d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_fast_lp);
            this.$5.debugTrace("LongPollingRunner", "_shouldPoll? pollNow:" + String(a) + " enabled:" + String(b) + " fastPoll:" + String(c) + " hasWSSupport:" + String(this.$4) + " hasWsSuccessBefore:" + String(this.$1) + " failureCount:" + this.$2 + " wsFatal:" + String(this.$3));
            if (!b) return !1;
            if (a) {
                this.$5.bumpCounter(k + ".nd");
                return !0
            }
            if (!this.$4) {
                this.$5.bumpCounter(k + ".na");
                return !0
            }
            if (this.$3) {
                this.$5.bumpCounter(k + ".fatal");
                return !0
            }
            if (this.$1) return !1;
            if (c) {
                b = Date.now() - this.$20;
                if (this.$21 === m) {
                    if (this.$2 >= 1) return !0;
                    if (b > i) {
                        this.$5.bumpCounter(k + ".fastdelay");
                        return !0
                    }
                } else if (b > j) {
                    this.$5.bumpCounter(k + ".regulardelay");
                    return !0
                }
            }
            if (this.$2 >= 3) {
                this.$5.bumpCounter(k + ".failure");
                return !0
            }
            return !1
        };
        e.$29 = function() {
            if (this.$14 != null) return !1;
            var a = this.$28();
            !this.$13 && a && (this.$5.bumpCounter("polling_kickin"), this.$13 = !0, this.$24("LPActive"), this.$26());
            this.$13 && !a && (this.$5.bumpCounter("polling_stopped"), this.$13 = !1, this.$24("LPInactive"), this.$26());
            return a
        };
        e.$30 = function() {
            if (this.$22) {
                this.$5.debugTrace("LongPollingRunner", "Creating polling client using Fetch API");
                return new(c("MqttFetchClient"))()
            } else {
                this.$5.debugTrace("LongPollingRunner", "Creating regular Polling client");
                return new(c("MqttLongPollingClient"))()
            }
        };
        e.$31 = function() {
            this.$5.debugTrace("LongPollingRunner", "Poll success"), this.$19.onPollRequestSuccess(), this.$18.reset(), this.$24("LPActive"), this.$26(), d("MqttEnv").Env.configWrite(l, m), this.$25("ReceivingData")
        };
        e.$32 = function(a) {
            var b = a.map(function(a) {
                return a.topic
            }).join(",");
            this.$5.debugTrace("LongPollingRunner", "Poll response received, message received:" + b);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.$19.onPollResponse(c.topic);
                this.$8(c.topic, c.payload, c.qos)
            }
        };
        e.$33 = function() {
            this.$5.debugTrace("LongPollingRunner", "Poll finish"), this.$19.onPollFinish(), this.$14 && this.$14.abort(), this.$14 = null, this.$23(), this.$25("NotSent")
        };
        e.$34 = function(a) {
            this.$19.onPollRequestFailed(a), this.$14 && this.$14.abort(), this.$14 = null, this.$18(), this.$27(), this.$25("NotSent")
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("CometRelayEF", ["Bootloader", "BootloaderEvents", "ClientConsistencyEventEmitter", "CometSSREntrypoint", "cometAsyncFetch", "gkx", "performanceAbsoluteNow", "promiseDone"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();

    function i(a, b) {
        if (!c("gkx")("1334580")) return;
        a = d("CometSSREntrypoint").processRootEntryPoint(a, b);
        var e = [];
        a.forEach(function(a) {
            a = a.name;
            h.has(a) || (e.push(a), d("BootloaderEvents").notifyHasteResponseEFStart("relay_3d", a))
        });
        if (e.length === 0) return;
        var f = c("performanceAbsoluteNow")(),
            g = c("cometAsyncFetch")("/ajax/relay-ef/", {
                data: {
                    queries: e
                },
                method: "POST"
            }).then(function(a) {
                return {
                    fetchPredictionsEnd: c("performanceAbsoluteNow")(),
                    fetchPredictionsStart: f,
                    payload: a
                }
            });
        e.forEach(function(a) {
            return h.set(a, g)
        })
    }

    function a(a, b) {
        if (!c("gkx")("1334580")) return;
        var e = c("performanceAbsoluteNow")();
        i(a, b);
        a = d("CometSSREntrypoint").processRootEntryPoint(a, b);
        a.forEach(function(a) {
            var b = a.name,
                f = h.get(b);
            f && f !== !0 && c("promiseDone")(f, function(a) {
                var f = a.fetchPredictionsEnd,
                    g = a.fetchPredictionsStart;
                a = a.payload;
                a != null && typeof a === "object" && (c("Bootloader").loadPredictedResourceMap(a.predictions[b], {
                    onLog: function(a) {
                        return d("BootloaderEvents").notifyHasteResponseEF("relay_3d", b, {
                            fetchPredictionsEnd: f,
                            fetchPredictionsStart: g,
                            fetchRsrcsStart: e,
                            tierOne: a
                        })
                    }
                }, a.consistency.rev), c("ClientConsistencyEventEmitter").emit("newEntry", a.consistency))
            });
            h.set(a.name, !0)
        })
    }
    g.fetchPredictions = i;
    g.fetchPredictedResources = a
}, 98);
__d("CometOnBeforeUnloadDialog.react", ["fbt", "CometCardedDialogLegacy.react", "CometTrackingNodeProvider.react", "TetraButtonGroup.react", "TetraText.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.body,
            d = a.cancel,
            e = a.confirm,
            f = a.disabled;
        f = f === void 0 ? !1 : f;
        var g = a.onClose,
            j = a.onCloseButtonPress,
            k = a.primaryAction,
            l = a.secondaryAction;
        a = a.title;
        var m = function() {
                k(), g()
            },
            n = function() {
                l(), g()
            };
        return i.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 163,
            children: i.jsxs(c("CometCardedDialogLegacy.react"), {
                onClose: function() {
                    j(), g()
                },
                testid: void 0,
                title: a,
                titleHorizontalAlignment: "start",
                withCloseButton: !0,
                children: [i.jsx("div", {
                    className: "x1n2onr6 x1swvt13 xsag5q8 x1pi30zi xz9dl7a",
                    children: i.jsx(c("TetraText.react"), {
                        type: "body3",
                        children: b
                    })
                }), i.jsx("div", {
                    className: "xkhd6sd x1l90r2v x4uap5 xexx8yu x13a6bvl x1q0g3np x78zum5",
                    children: i.jsx(c("TetraButtonGroup.react"), {
                        direction: "backward",
                        paddingHorizontal: 16,
                        primary: {
                            disabled: f,
                            label: (a = e) != null ? a : h._("Confirm"),
                            onPress: m,
                            testid: "CometOnBeforeUnloadDialogConfirmButton"
                        },
                        secondary: {
                            disabled: f,
                            label: (b = d) != null ? b : h._("Cancel"),
                            onPress: n,
                            reduceEmphasis: !0,
                            testid: "CometOnBeforeUnloadDialogCancelButton"
                        }
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("CometRouteActorToaster.react", ["fbt", "Actor", "CometRelay", "CometRouteActorToasterBlocklist", "CometRouteActorToasterQuery.graphql", "TetraProfilePhoto.react", "TetraText.react", "WebPixelRatio", "cometPushToast", "getTopMostRoute", "promiseDone", "react", "requireDeferred", "useCometRouterState", "useCurrentRoute", "useProfileCometIsViewAs", "useRouteReferrer"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = d("react");
    e = d("react");
    var k = e.useEffect,
        l = e.useRef,
        m = c("requireDeferred")("AcfToastImpressionFalcoEvent").__setRef("CometRouteActorToaster.react");

    function n(a, b) {
        if (b) return j.jsx(c("TetraText.react"), {
            color: "primary",
            type: "body3",
            children: h._("You're now interacting as {=m2}", [h._implicitParam("=m2", j.jsx(c("TetraText.react"), {
                type: "bodyLink3",
                children: h._("your profile")
            }))])
        });
        else return j.jsx(c("TetraText.react"), {
            color: "primary",
            type: "body3",
            children: h._("You're now interacting as {actor}", [h._param("actor", j.jsx(c("TetraText.react"), {
                type: "bodyLink3",
                children: a
            }))])
        })
    }
    var o = i !== void 0 ? i : i = b("CometRouteActorToasterQuery.graphql");

    function a() {
        var a = d("CometRelay").useRelayEnvironment(),
            b = d("Actor").useActor(),
            e = b[0];
        b = c("useCometRouterState")();
        var f = c("useCurrentRoute")(),
            g = c("useRouteReferrer")(),
            h = c("useProfileCometIsViewAs")(),
            i = l({
                actorID: g == null ? void 0 : g.actorID,
                tracePolicy: g == null ? void 0 : g.tracePolicy
            });
        g = c("CometRouteActorToasterBlocklist").route_trace_policies;
        var p = f == null ? void 0 : f.tracePolicy;
        g = g.includes(p);
        b = b != null ? c("getTopMostRoute")(b) : null;
        f = f === b;
        var q = f && !g && !h;
        k(function() {
            var b, f = (b = i.current) == null ? void 0 : b.actorID,
                g = (b = i.current) == null ? void 0 : b.tracePolicy;
            if (f != null && f !== e && q) {
                b = function(a) {
                    var b;
                    b = a == null ? void 0 : (b = a.viewer) == null ? void 0 : (b = b.actor) == null ? void 0 : b.name;
                    if (b != null) {
                        var e;
                        e = (a == null ? void 0 : (e = a.viewer) == null ? void 0 : (e = e.actor) == null ? void 0 : e.__typename) === "User";
                        a = a == null ? void 0 : (a = a.viewer) == null ? void 0 : (a = a.actor) == null ? void 0 : (a = a.toast_icon) == null ? void 0 : a.uri;
                        a = a != null ? j.jsx(c("TetraProfilePhoto.react"), {
                            shape: "circle",
                            size: 32,
                            source: {
                                uri: a
                            }
                        }) : null;
                        b = n(b, e);
                        d("cometPushToast").cometPushToast({
                            icon: a,
                            message: b
                        });
                        m.onReady(function(a) {
                            a = a.log;
                            a(function() {
                                var a;
                                return {
                                    destination: (a = p) != null ? a : "comet.app",
                                    destination_type: "comet_route",
                                    source: g,
                                    source_type: "comet_route",
                                    source_userid: f
                                }
                            })
                        })
                    }
                };
                var h = {
                    scale: d("WebPixelRatio").get()
                };
                c("promiseDone")(d("CometRelay").fetchQuery(a, o, h).toPromise(), b)
            }
            i.current = {
                actorID: e,
                tracePolicy: p
            }
        }, [e, p, a, q]);
        return null
    }
    g["default"] = a
}, 98);