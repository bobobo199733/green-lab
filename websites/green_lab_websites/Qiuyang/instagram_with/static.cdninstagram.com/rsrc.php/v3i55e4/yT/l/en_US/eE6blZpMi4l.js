if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("PostFastDirectShareSheetModal", ["IGCoreModal", "PolarisUA", "react", "usePolarisViewport"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = c("usePolarisViewport")(),
            e = b.width;
        b = a.size;

        function f() {
            return d("PolarisUA").isMobile() ? {
                height: "100%"
            } : e <= 736 ? {
                height: "100vh"
            } : {
                maxHeight: "65vh"
            }
        }
        return h.jsx(c("IGCoreModal"), babelHelpers["extends"]({}, a, {
            size: d("PolarisUA").isMobile() ? "fullscreen" : b,
            style: f()
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDirectGreenDot.react", ["cx", "invariant", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");

    function a(a) {
        var b = a.isGroup;
        a = a.size;
        !b || a !== "tiny" && a !== "atomic" && a !== "superatomic" || i(0, 51392);
        b = a;
        a === "superatomic" && (b = "atomic");
        return j.jsx("div", {
            className: "_aah4" + (b === "default" ? " _aah5" : "") + (b === "medium" ? " _aah6" : "") + (b === "small" ? " _aah7" : "") + (b === "tiny" ? " _aah8" : "") + (b === "atomic" ? " _aah9" : "")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDirectAvatar.react", ["cx", "invariant", "PolarisDirectGreenDot.react", "PolarisIGCoreBox", "PolarisUserAvatar.react", "PolarisdirectSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = {
            "default": 56,
            medium: 40,
            small: 32,
            tiny: 24,
            atomic: 16,
            superatomic: 14
        },
        l = {
            "default": 40,
            medium: 32,
            small: 20
        };

    function a(a) {
        var b = a.avatarUsersUnfiltered,
            d = a.isActive,
            e = a.isGroup,
            f = a.isLink,
            g = a.size;
        a = a.viewer;
        var h = k[g];
        d = !!d;
        e = e === !0 && b.length === 1 ? [].concat(b, [a]) : b;
        if (e.length === 0) return j.jsxs(c("PolarisIGCoreBox"), {
            alignItems: "end",
            direction: "row",
            justifyContent: "end",
            children: [j.jsx(c("PolarisUserAvatar.react"), {
                isLink: !!f,
                profilePictureUrl: a == null ? void 0 : a.profile_pic_url,
                size: h,
                username: a == null ? void 0 : a.username
            }), d && j.jsx(c("PolarisDirectGreenDot.react"), {
                isGroup: !1,
                size: g
            })]
        });
        else if (e.length === 1) {
            return j.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "end",
                direction: "row",
                justifyContent: "end",
                children: [j.jsx(c("PolarisUserAvatar.react"), {
                    isLink: !!f,
                    profilePictureUrl: (b = e[0]) == null ? void 0 : b.profile_pic_url,
                    size: h,
                    username: (a = e[0]) == null ? void 0 : a.username
                }), d && j.jsx(c("PolarisDirectGreenDot.react"), {
                    isGroup: !1,
                    size: g
                })]
            })
        }
        g !== "tiny" && g !== "atomic" && g !== "superatomic" || i(0, 51463);
        f = l[g];
        return j.jsxs(c("PolarisIGCoreBox"), {
            height: h,
            position: "relative",
            width: h,
            children: [j.jsx(c("PolarisUserAvatar.react"), {
                isLink: !1,
                profilePictureUrl: (b = e[1]) == null ? void 0 : b.profile_pic_url,
                size: f,
                username: (a = e[1]) == null ? void 0 : a.username
            }), j.jsx("div", {
                className: "_aa2p" + (g === "default" ? " _aa2q" : "") + (g === "small" || g === "medium" ? " _aa2r" : ""),
                children: j.jsxs(c("PolarisIGCoreBox"), {
                    alignItems: "end",
                    direction: "row",
                    justifyContent: "end",
                    children: [j.jsx(c("PolarisUserAvatar.react"), {
                        isLink: !1,
                        profilePictureUrl: (h = e[0]) == null ? void 0 : h.profile_pic_url,
                        size: f,
                        username: (b = e[0]) == null ? void 0 : b.username
                    }), d && j.jsx(c("PolarisDirectGreenDot.react"), {
                        isGroup: !0,
                        size: g
                    })]
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = function() {
        var a = d("PolarisdirectSelectors").makeGetDirectUsersByIds();
        return function(b, c) {
            return {
                avatarUsersUnfiltered: a(b, c)
            }
        }
    };
    e = d("react-redux-wwwig").connect(b)(a);
    g["default"] = e
}, 98);
__d("PolarisDirectPageMetadata.react", ["PolarisPageMetadata.react", "react", "usePolarisDirectFeatures"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.id;
        a = a.title;
        var d = c("usePolarisDirectFeatures")();
        d = d.directTitle;
        return h.jsx(c("PolarisPageMetadata.react"), {
            base: d,
            id: b,
            title: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreCircleOutline24Icon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("circle", {
                cx: "12.008",
                cy: "12",
                fill: "none",
                r: "11.25",
                stroke: "currentColor",
                strokeLinejoin: "round",
                strokeWidth: "1.5"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisDirectSearchUserContainerCandidate.react", ["PolarisDirectStrings", "PolarisIGCoreCircleCheckPanoFilledIcon", "PolarisIGCoreCircleOutline24Icon", "PolarisIGCoreListItem", "PolarisIGCoreSVGIconButton", "PolarisIGCoreText", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.candidateId,
            e = a.icon,
            f = a.isSelected,
            g = a.onToggleCandidate,
            i = a.subtitle;
        a = a.title;
        return h.jsx(c("PolarisIGCoreListItem"), {
            action: h.jsx(c("PolarisIGCoreSVGIconButton"), {
                onClick: function() {
                    g(b)
                },
                children: f ? h.jsx(c("PolarisIGCoreCircleCheckPanoFilledIcon"), {
                    alt: d("PolarisDirectStrings").TOGGLE_SELECTION,
                    color: "ig-primary-button",
                    size: 24
                }) : h.jsx(c("PolarisIGCoreCircleOutline24Icon"), {
                    alt: d("PolarisDirectStrings").TOGGLE_SELECTION,
                    color: "ig-secondary-button"
                })
            }),
            icon: e,
            onBodyClick: function() {
                g(b)
            },
            subtitle: i,
            title: h.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                children: a
            })
        }, a)
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDirectSearchUserContainerGroupCandidate.react", ["PolarisDirectAvatar.react", "PolarisDirectSearchUserContainerCandidate.react", "PolarisDirectStringHelpers", "PolarisdirectSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.candidateId,
            e = a.isSelected,
            f = a.onToggleCandidate,
            g = a.thread;
        a = a.usernames;
        var i = g.thread_title;
        g = g.users;
        if (g.length === 0) return null;
        g = h.jsx(c("PolarisDirectAvatar.react"), {
            isLink: !0,
            size: "medium",
            users: g
        });
        return h.jsx(c("PolarisDirectSearchUserContainerCandidate.react"), {
            candidateId: b,
            icon: g,
            isSelected: e,
            onToggleCandidate: f,
            subtitle: d("PolarisDirectStringHelpers").getGroupSubtitle(a),
            title: i
        }, b)
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a, b) {
        b = b.thread.users;
        return {
            usernames: d("PolarisdirectSelectors").getDirectUsernameById(a, b)
        }
    }
    e = d("react-redux-wwwig").connect(b)(a);
    g["default"] = e
}, 98);
__d("PolarisDirectSearchUserContainerToken.react", ["PolarisDirectStrings", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreSVGIconButton", "PolarisIGCoreText", "PolarisIGCoreXPanoFilledIcon", "PolarisUA", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClick,
            e = a.onRemoveClick,
            f = a.selectedToken,
            g = a.userId;
        a = a.username;
        f = f === g;
        var i = f ? "ig-primary-button" : "web-secondary-action",
            j = f ? "web-always-white" : "ig-primary-button";
        return h.jsxs(c("PolarisIGCoreBox"), {
            color: i,
            direction: "row",
            height: 35,
            justifyContent: "center",
            margin: 1,
            paddingX: 3,
            shape: "rounded",
            children: [h.jsx(c("PolarisIGCoreButton"), {
                borderless: !0,
                onClick: b,
                children: h.jsx(c("PolarisIGCoreText"), {
                    color: j,
                    children: a
                })
            }), (f || d("PolarisUA").isDesktop()) && h.jsx(c("PolarisIGCoreBox"), {
                justifyContent: "center",
                marginStart: 2,
                children: h.jsx(c("PolarisIGCoreSVGIconButton"), {
                    onClick: function() {
                        return e(g)
                    },
                    padding: 0,
                    children: h.jsx(c("PolarisIGCoreXPanoFilledIcon"), {
                        alt: d("PolarisDirectStrings").DELETE_ITEM_TEXT,
                        color: j,
                        size: 12
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDirectSearchUserContainerTokenField.react", ["cx", "Keys", "PolarisDOMListener.react", "PolarisDirectSearchUserContainerToken.react", "PolarisDirectStrings", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisIGCoreTextInput", "PolarisUA", "Polarisunexpected", "nullthrows", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
        k = b.useRef,
        l = b.useState;

    function m(a) {
        switch (a.type) {
            case "thread":
                return a.candidate.thread_title;
            case "user":
                return a.candidate.username;
            default:
                c("Polarisunexpected")("Expected candidate of type thread or user");
                return ""
        }
    }

    function a(a) {
        var b = a.onRemoveRecipient,
            e = a.onTextInputChange,
            f = a.query,
            g = a.recipients;
        a = l(!0);
        var h = a[0],
            n = a[1];
        a = l(null);
        var o = a[0],
            p = a[1],
            q = k(null),
            r = k(null);
        j(function() {
            r.current && r.current.focus(), h && (q.current != null && q.current.scrollIntoView()), n(!0)
        }, [g, h]);
        var s = function(a) {
                p(null), n(!1), b(a)
            },
            t = Array.from(g.keys());
        return i.jsxs("div", {
            className: "_aa2s",
            children: [i.jsx(c("PolarisIGCoreBox"), {
                justifyContent: "start",
                paddingX: 3,
                paddingY: 1,
                children: i.jsx(c("PolarisIGCoreText").Section, {
                    display: "preserve",
                    zeroMargin: !0,
                    children: d("PolarisDirectStrings").TO_LABEL_STRING
                })
            }), i.jsxs("div", {
                className: (d("PolarisUA").isDesktop() ? "" : "_aa2t") + (d("PolarisUA").isDesktop() ? " _aa2u" : ""),
                children: [i.jsx(c("PolarisDOMListener.react"), {
                    event: "keydown",
                    handler: function() {
                        o != null && s(o)
                    },
                    target: document.body
                }), t.map(function(a) {
                    return i.jsx(c("PolarisDirectSearchUserContainerToken.react"), {
                        onClick: function() {
                            o === a ? s(a) : p(a)
                        },
                        onRemoveClick: s,
                        selectedToken: o,
                        userId: a,
                        username: m(c("nullthrows")(g.get(a)))
                    }, a)
                }), i.jsx(c("PolarisIGCoreTextInput"), {
                    autoComplete: "off",
                    backgroundColor: "transparent",
                    name: "queryBox",
                    onChange: e,
                    onFocus: function() {
                        return p(null)
                    },
                    onKeyDown: function(a) {
                        a.keyCode === c("Keys").BACKSPACE && f.length === 0 && (p(t[t.length - 1]), r.current && r.current.blur())
                    },
                    placeholder: d("PolarisDirectStrings").SEARCH_USER_BOX_PLACEHOLDER,
                    ref: r,
                    spellCheck: !1,
                    value: f
                }), i.jsx("div", {
                    ref: q
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisTargetedPortal.react", ["immutable-4.0.0-rc.9", "react", "react-dom"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = new(d("immutable-4.0.0-rc.9").Map)();
    c = {
        map: i,
        addRef: function() {},
        removeRef: function() {}
    };
    e = h.createContext(c);
    var j = e.Provider,
        k = e.Consumer;
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = c = a.call.apply(a, [this].concat(f)) || this, c.state = {
                map: i
            }, c.$1 = function(a, b) {
                c.setState(function(c) {
                    return {
                        map: c.map.update(a, new(d("immutable-4.0.0-rc.9").Set)(), function(a) {
                            return a.add(b)
                        })
                    }
                })
            }, c.$2 = function(a, b) {
                c.setState(function(c) {
                    return {
                        map: c.map.update(a, new(d("immutable-4.0.0-rc.9").Set)(), function(a) {
                            return a.remove(b)
                        })
                    }
                })
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.render = function() {
            var a = {
                map: this.state.map,
                addRef: this.$1,
                removeRef: this.$2
            };
            return h.jsx(j, {
                value: a,
                children: this.props.children
            })
        };
        return b
    }(h.Component);
    var l = function(b) {
        babelHelpers.inheritsLoose(a, b);

        function a() {
            var a, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (a = c = b.call.apply(b, [this].concat(e)) || this, c.$1 = h.createRef(), a) || babelHelpers.assertThisInitialized(c)
        }
        var c = a.prototype;
        c.componentDidMount = function() {
            this.props.__addRef(this.props.targetId, this.$1)
        };
        c.componentWillUnmount = function() {
            this.props.__removeRef(this.props.targetId, this.$1)
        };
        c.render = function() {
            var a = this.props;
            a.__addRef;
            a.__removeRef;
            var b = a.element;
            a.targetId;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["__addRef", "__removeRef", "element", "targetId"]);
            return h.jsx(b, babelHelpers["extends"]({
                ref: this.$1
            }, a))
        };
        return a
    }(h.Component);

    function a(a) {
        return h.jsx(k, {
            children: function(b) {
                return h.createElement(l, babelHelpers["extends"]({}, a, {
                    __addRef: b.addRef,
                    __removeRef: b.removeRef,
                    key: a.targetId
                }))
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.defaultProps = {
        element: "div"
    };

    function b(a) {
        var b = a.targetId,
            c = a.children;
        return h.jsx(k, {
            children: function(a) {
                a = a.map.get(b);
                return a ? a.map(function(a) {
                    return a.current && c !== void 0 ? d("react-dom").createPortal(c, a.current) : null
                }).toArray() : null
            }
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.TargetedPortalProvider = c;
    g.PortalTarget = a;
    g.PortalTo = b
}, 98);
__d("PolarisDirectSearchUserContainer.react", ["cx", "fbt", "PolarisDirectAPI", "PolarisDirectActions", "PolarisDirectConstants", "PolarisDirectLogger", "PolarisDirectPageMetadata.react", "PolarisDirectSearchUserContainerCandidate.react", "PolarisDirectSearchUserContainerGroupCandidate.react", "PolarisDirectSearchUserContainerTokenField.react", "PolarisDirectStrings", "PolarisGenericDesktopHeader.react", "PolarisGenericMobileHeader.react", "PolarisGenericNavBackButton.react", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreDivider", "PolarisIGCoreListItemPlaceholder", "PolarisIGCoreModalHeader", "PolarisIGCoreSVGIconButton", "PolarisIGCoreText", "PolarisIGCoreTextInput", "PolarisIGCoreXPanoFilledIcon", "PolarisIGCoreXPanoOutlineIcon", "PolarisRoutes", "PolarisTargetedPortal.react", "PolarisUA", "PolarisUserAvatar.react", "PolarisdirectSelectors", "PolarisnormalizeDirectThreads", "PolarisnormalizeDirectUsers", "Polarisunexpected", "Promise", "emptyFunction", "lodash-debounce", "nullthrows", "range", "react", "react-redux-wwwig", "usePolarisSelector", "usePrevious"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    e = d("react");
    var k = e.useCallback,
        l = e.useEffect,
        m = e.useState,
        n = 7;

    function a(a) {
        var e = a.backAction,
            f = e === void 0 ? c("emptyFunction") : e,
            g = a.filteredCandidates,
            h = a.forwardAction,
            o = a.forwardText;
        e = a.hideFallbackSuggestions;
        var p = a.includeGroup,
            q = a.isModal,
            r = a.isShareSheet,
            s = a.maxRecipients,
            t = s === void 0 ? d("PolarisDirectConstants").MAX_DIRECT_THREAD_RECIPIENTS : s;
        s = a.pageId;
        var u = a.title,
            v = a.tooltip,
            w = a.sponsoredStoryOwner;
        a = m(new Map());
        var x = a[0],
            y = a[1];
        a = m("");
        var z = a[0],
            A = a[1];
        a = m(!1);
        var B = a[0],
            C = a[1];
        a = m(!1);
        var D = a[0],
            E = a[1];
        a = m("");
        var F = a[0],
            G = a[1];
        a = m(new Map());
        var H = a[0],
            I = a[1],
            J = d("react-redux-wwwig").useSelector(function(a) {
                return d("PolarisdirectSelectors").getFallbackCandidates(a, {
                    filteredCandidates: g,
                    includeGroup: p
                })
            }),
            K = c("usePolarisSelector")(function(a) {
                return a.direct.inboxLoaded
            }),
            L = d("react-redux-wwwig").useDispatch();
        l(function() {
            K || (E(!0), L(d("PolarisDirectActions").initInbox()))
        }, [L, K]);
        var M = c("usePrevious")(K);
        l(function() {
            K === !0 && M === !1 && E(!1)
        }, [K, M]);
        var N = function(a, b) {
                (g == null || !g.includes(a.id)) && b.set(a.id, {
                    type: "user",
                    candidate: a
                })
            },
            O = function(a, b, c) {
                L(d("PolarisDirectActions").addUsers(b)), (g == null || !g.includes(a.id)) && c.set(a.id, {
                    type: "thread",
                    candidate: a
                })
            };
        a = function(a) {
            var b = a.length > 0;
            b && y(new Map());
            d("PolarisDirectLogger").DirectLogger.logDirectClientEvent("direct_compose_search", d("PolarisDirectLogger").DIRECT_CONTAINER_MODULES.direct_recipient_list, {
                search_string: a
            });
            var e = p === !0 ? d("PolarisDirectAPI").getRankedRecipientsWithGroups : d("PolarisDirectAPI").getRankedRecipients;
            b && e(a).then(function(a) {
                var b = new Map();
                a.ranked_recipients.forEach(function(a) {
                    if (a.user) {
                        var e = a.user,
                            f = d("PolarisnormalizeDirectUsers").normalizeDirectUsers([e]);
                        f = f.entities;
                        f = f.users[e.pk];
                        N(f, b)
                    } else if (a.thread) {
                        e = a.thread;
                        f = e.thread_id;
                        a = c("PolarisnormalizeDirectThreads")([e]);
                        e = a.entities;
                        a = e.threads;
                        e = e.users;
                        a = a[f];
                        O(a, e, b)
                    } else c("Polarisunexpected")("Expected recipient of type user or thread")
                });
                E(!1);
                y(b)
            }, function(a) {
                E(!1)
            })
        };
        var P = k(c("lodash-debounce")(a, 250), []),
            Q = function() {
                if (F.trim() !== "") return x;
                if (w != null && J.has(w == null ? void 0 : w.id)) {
                    var a = new Map(J);
                    a["delete"](w == null ? void 0 : w.id);
                    return a
                }
                return J
            },
            R = function(a) {
                if (H.size >= t) return;
                var b = Q();
                b = b.get(a);
                a === (w == null ? void 0 : w.id) && w != null && (b = {
                    candidate: w,
                    type: "user"
                });
                if (!b) return;
                var c = new Map(H);
                c.set(a, b);
                I(c)
            },
            S = function(a) {
                var b = new Map(H);
                b["delete"](a);
                I(b)
            },
            T = function() {
                C(!0), b("Promise").resolve(h(H, z)).then(function() {
                    return C(!1)
                })["catch"](function() {
                    return C(!1)
                })
            };
        a = function(a) {
            a = a.target.value;
            G(a);
            E(a.length > 0);
            P(a)
        };
        var U = function(a) {
                H.has(a) ? S(a) : (R(a), G(""))
            },
            V = function() {
                if (w == null || F.trim() !== "") return null;
                var a = w.id,
                    b = w.profile_pic_url,
                    d = w.username,
                    e = w.full_name;
                b = j.jsx(c("PolarisUserAvatar.react"), {
                    isLink: !1,
                    profilePictureUrl: b,
                    size: 44,
                    username: d
                }, a);
                return j.jsx(c("PolarisDirectSearchUserContainerCandidate.react"), {
                    candidateId: a,
                    icon: b,
                    isSelected: H.has(a),
                    onToggleCandidate: U,
                    subtitle: e,
                    title: d
                }, a)
            },
            W = function() {
                if (D) return c("range")(0, n).map(function(a) {
                    return j.jsx(c("PolarisIGCoreListItemPlaceholder"), {
                        size: "large"
                    }, a)
                });
                var a = Q();
                if (a.size === 0 && w == null) return j.jsx(c("PolarisIGCoreBox"), {
                    margin: 4,
                    children: j.jsx(c("PolarisIGCoreText").Body, {
                        color: "ig-secondary-text",
                        children: i._("No account found.")
                    })
                });
                var b = V(),
                    d = Array.from(a.keys()).map(function(b) {
                        var d = H.has(b),
                            e = c("nullthrows")(a.get(b));
                        switch (e.type) {
                            case "thread":
                                var f = e.candidate;
                                return j.jsx(c("PolarisDirectSearchUserContainerGroupCandidate.react"), {
                                    candidateId: b,
                                    isSelected: d,
                                    onToggleCandidate: U,
                                    thread: f
                                }, b);
                            case "user":
                                f = e.candidate;
                                e = f.full_name;
                                var g = f.profile_pic_url;
                                f = f.username;
                                g = j.jsx(c("PolarisUserAvatar.react"), {
                                    isLink: !1,
                                    profilePictureUrl: g,
                                    size: 44,
                                    username: f
                                });
                                return j.jsx(c("PolarisDirectSearchUserContainerCandidate.react"), {
                                    candidateId: b,
                                    icon: g,
                                    isSelected: d,
                                    onToggleCandidate: U,
                                    subtitle: e,
                                    title: f
                                }, b);
                            default:
                                c("Polarisunexpected")("Expected candidate of type thread or user");
                                return null
                        }
                    });
                if (b == null) return d;
                else {
                    d.unshift(b);
                    return d
                }
            },
            X = function(a) {
                if (r === !0) {
                    var b = q === !0 ? j.jsx(c("PolarisIGCoreSVGIconButton"), {
                            onClick: f,
                            padding: 0,
                            children: j.jsx(c("PolarisIGCoreXPanoOutlineIcon"), {
                                alt: d("PolarisGenericStrings").CLOSE_TEXT
                            })
                        }) : j.jsx(c("PolarisGenericNavBackButton.react"), {
                            href: d("PolarisRoutes").DIRECT_INBOX,
                            onClick: f
                        }),
                        e = {
                            rightActions: b,
                            title: a
                        },
                        g = j.jsx(c("PolarisGenericMobileHeader.react"), babelHelpers["extends"]({
                            className: q === !0 ? "_aagy" : ""
                        }, e));
                    return d("PolarisUA").isDesktop() ? q === !0 ? j.jsx(c("PolarisIGCoreModalHeader"), {
                        endAdornment: j.jsx(c("PolarisIGCoreBox"), {
                            paddingX: 4,
                            children: b
                        }),
                        children: a
                    }) : j.jsx(c("PolarisGenericDesktopHeader.react"), babelHelpers["extends"]({}, e)) : q !== !0 ? j.jsx(d("PolarisTargetedPortal.react").PortalTo, {
                        targetId: "direct-mobile-header",
                        children: g
                    }) : g
                }
                b = q === !0 ? j.jsx(c("PolarisIGCoreSVGIconButton"), {
                    onClick: f,
                    padding: 0,
                    children: j.jsx(c("PolarisIGCoreXPanoFilledIcon"), {
                        alt: d("PolarisGenericStrings").CLOSE_TEXT,
                        color: "ig-primary-text",
                        size: 18
                    })
                }) : j.jsx(c("PolarisGenericNavBackButton.react"), {
                    href: d("PolarisRoutes").DIRECT_INBOX,
                    onClick: f
                });
                e = j.jsx(c("PolarisIGCoreButton"), {
                    borderless: !0,
                    disabled: H.size === 0,
                    large: !0,
                    loading: B,
                    onClick: T,
                    children: j.jsx("div", {
                        className: "_aagz",
                        children: o != null ? o : d("PolarisDirectStrings").NEXT_STRING
                    })
                });
                g = {
                    leftActions: b,
                    rightActions: e,
                    title: a
                };
                var h = j.jsx(c("PolarisGenericMobileHeader.react"), babelHelpers["extends"]({
                    className: q === !0 ? "_aagy" : ""
                }, g));
                return d("PolarisUA").isDesktop() ? q === !0 ? j.jsx(c("PolarisIGCoreModalHeader"), {
                    endAdornment: j.jsx(c("PolarisIGCoreBox"), {
                        paddingX: 4,
                        children: e
                    }),
                    startAdornment: j.jsx(c("PolarisIGCoreBox"), {
                        paddingX: 4,
                        children: b
                    }),
                    truncateText: !0,
                    children: a
                }) : j.jsx(c("PolarisGenericDesktopHeader.react"), babelHelpers["extends"]({}, g)) : j.jsx(j.Fragment, {
                    children: q !== !0 ? j.jsx(d("PolarisTargetedPortal.react").PortalTo, {
                        targetId: "direct-mobile-header",
                        children: h
                    }) : h
                })
            };
        u = u != null ? u : d("PolarisDirectStrings").NEW_MESSAGE_STRING;
        var Y = H.size !== 0;
        return j.jsxs(j.Fragment, {
            children: [j.jsx(c("PolarisDirectPageMetadata.react"), {
                id: s,
                title: u
            }), X(u), v, j.jsxs(c("PolarisIGCoreBox"), {
                flex: "grow",
                overflow: "hidden",
                children: [j.jsx("div", {
                    className: "_aag-",
                    children: j.jsx(c("PolarisDirectSearchUserContainerTokenField.react"), {
                        onRemoveRecipient: S,
                        onTextInputChange: a,
                        query: F,
                        recipients: H
                    })
                }), j.jsxs(c("PolarisIGCoreBox"), {
                    flex: "grow",
                    overflow: "scrollY",
                    children: [F === "" && e !== !0 && j.jsx(c("PolarisIGCoreBox"), {
                        margin: 4,
                        children: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                            zeroMargin: !0,
                            children: d("PolarisDirectStrings").SUGGESTED_HEADER
                        })
                    }), (F !== "" || e !== !0) && W()]
                }), r === !0 && j.jsxs(j.Fragment, {
                    children: [j.jsx(c("PolarisIGCoreDivider"), {}), j.jsx("div", {
                        className: "_aag_" + (Y ? " _aah0" : "") + (Y ? "" : " _aah1"),
                        children: j.jsx(c("PolarisIGCoreTextInput"), {
                            backgroundColor: "transparent",
                            height: 42,
                            name: "shareCommentText",
                            onChange: function(a) {
                                A(a.target.value)
                            },
                            placeholder: d("PolarisDirectStrings").COMMENT_INPUT_PLACEHOLDER,
                            style: "borderless",
                            value: z
                        })
                    }), j.jsx("div", {
                        className: "_aah2" + (Y ? "" : " _aah3"),
                        children: j.jsx(c("PolarisIGCoreButton"), {
                            disabled: !Y,
                            fullWidth: !0,
                            loading: B,
                            onClick: T,
                            children: j.jsx("div", {
                                className: "_aagz",
                                children: H.size < 2 ? d("PolarisDirectStrings").SEND_BUTTON_STRING : d("PolarisDirectStrings").SEND_SEPARATELY_BUTTON_STRING
                            })
                        })
                    })]
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDirectShareSheet.react", ["PolarisDirectLogger", "PolarisDirectSearchUserContainer.react", "PolarisDirectStrings", "PolarisIGCorePressable", "PostFastDirectShareSheetModal", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState,
        j = "DirectShareSheet";

    function a(a) {
        var b = a.children,
            e = a.onClose,
            f = a.onDone,
            g = a.onOpen,
            k = a.referrer,
            l = a.shouldShow,
            m = a.sponsoredStoryOwner;
        a = a.tooltip;
        var n = i(!1),
            o = n[0],
            p = n[1],
            q = function() {
                e && e(), p(!1)
            };
        return h.jsxs(h.Fragment, {
            children: [h.jsx(c("PolarisIGCorePressable"), {
                onPress: function() {
                    p(!0), g && g()
                },
                children: b
            }), (o && l == null || l === !0) && h.jsx(c("PostFastDirectShareSheetModal"), {
                "aria-label": d("PolarisDirectStrings").SHARE_TITLE,
                fixedHeight: !1,
                onClose: q,
                size: "large",
                children: h.jsx(c("PolarisDirectSearchUserContainer.react"), {
                    backAction: q,
                    forwardAction: function(a, b) {
                        q();
                        d("PolarisDirectLogger").DirectLogger.logDirectEvent("DirectShareSheet", "share_sheet_send", {
                            referrer: k
                        });
                        return b != null && b !== "" ? f(a, b) : f(a)
                    },
                    forwardText: d("PolarisDirectStrings").SEND_BUTTON_STRING,
                    includeGroup: !0,
                    isModal: !0,
                    isShareSheet: !0,
                    pageId: j,
                    sponsoredStoryOwner: m,
                    title: d("PolarisDirectStrings").SHARE_TITLE,
                    tooltip: a
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PAGE_ID = j;
    g.DirectShareSheet = a
}, 98);
__d("PolarisDirectShareSheetTooltip.react", ["PolarisIGCoreBox", "PolarisIGCoreDivider", "PolarisIGCoreText", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.description,
            d = a.header;
        a = a.icon;
        return h.jsxs(h.Fragment, {
            children: [h.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "start",
                direction: "row",
                justifyContent: "center",
                paddingX: 3,
                paddingY: 4,
                children: [h.jsx(c("PolarisIGCoreBox"), {
                    alignItems: "center",
                    alignSelf: "stretch",
                    direction: "column",
                    justifyContent: "center",
                    marginEnd: 1,
                    paddingX: 3,
                    children: a
                }), h.jsxs(c("PolarisIGCoreBox"), {
                    direction: "column",
                    flex: "grow",
                    children: [h.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        children: d
                    }), h.jsx(c("PolarisIGCoreBox"), {
                        paddingY: 1
                    }), h.jsx(c("PolarisIGCoreText").Body2, {
                        display: "inline",
                        children: b
                    })]
                })]
            }), h.jsx(c("PolarisIGCoreBox"), {
                minHeight: "1px",
                children: h.jsx(c("PolarisIGCoreDivider"), {})
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDirectShareSheetMisinformationTooltip.react", ["PolarisAssetManagerGlyphMapping", "PolarisDirectShareSheetTooltip.react", "PolarisIGCoreIcon", "PolarisMisinformationConstants", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.description;
        a = a.header;
        return b != null && a != null ? h.jsx(c("PolarisDirectShareSheetTooltip.react"), {
            description: b,
            header: a,
            icon: h.jsx(c("PolarisIGCoreIcon"), {
                alt: d("PolarisMisinformationConstants").FALSE_NEWS_ICON,
                icon: d("PolarisAssetManagerGlyphMapping").ICONS.NEWS_OFF_OUTLINE_RED
            })
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisshareFrictionUtils", ["fbt", "PolarisgetPostFromGraphMediaInterface", "PolarismediaOverlayInfoUtils"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {
        MISINFO_FRICTION: "misinfo_friction",
        SENSITIVE_FRICTION: "sensitive_friction",
        NEWSWORTHY_FRICTION: "newsworthy_friction"
    };
    c = h._("warning icon");

    function j(a) {
        return a.isSidecar != null && a.isSidecar === !0
    }

    function k(a, b) {
        var c = a.mediaOverlayInfo,
            e = a.sensitivityFrictionInfo,
            f = a.sidecarChildren;
        f = f === void 0 ? void 0 : f;
        var g = d("PolarismediaOverlayInfoUtils").getMediaOverlayLayout(c);
        c = d("PolarismediaOverlayInfoUtils").getMediaOverlayType(c);
        if (d("PolarismediaOverlayInfoUtils").isMediaOverlayLayoutSupported(g))
            if (d("PolarismediaOverlayInfoUtils").isMediaOverlayTypeSensitiveContent(c) && e != null) return i.SENSITIVE_FRICTION;
            else if (d("PolarismediaOverlayInfoUtils").isMediaOverlayTypeNewsworthyContent(c)) return i.NEWSWORTHY_FRICTION;
        if (j(a) && !b && f != null)
            for (var g = 0; g < f.length; g++) {
                e = f[g];
                if (m(e) === i.MISINFO_FRICTION) return i.MISINFO_FRICTION
            }
        return null
    }

    function l(a) {
        return k(a, !1)
    }

    function m(a) {
        return k(a, !0)
    }

    function a(a, b) {
        if (b != null) {
            b = m(b);
            if (b != null) return b
        }
        return l(a)
    }

    function n(a) {
        return d("PolarisgetPostFromGraphMediaInterface").getMediaOverlayMediaCoverInfoFromSidecarChild(a) != null
    }

    function b(a, b) {
        if (b === i.MISINFO_FRICTION) return !n(a) || !d("PolarisgetPostFromGraphMediaInterface").isSidecarItemMediaOverlayTypeMisinfo(a);
        else if (b === i.SENSITIVE_FRICTION) return !n(a) || !d("PolarisgetPostFromGraphMediaInterface").isSidecarItemMediaOverlayTypeSensitiveContent(a);
        else if (b === i.NEWSWORTHY_FRICTION) return !0;
        return !1
    }
    g.SHARE_FRICTION_TYPES = i;
    g.SENSITIVITY_ICON_ALT_TEXT = c;
    g.getSharingFrictionTypeFromRootPostAndMaybeSidecarChild = a;
    g.shouldDirectShareSheetTooltipForCurrSidecarChildBeDisabled = b
}, 98);
__d("PolarisDirectShareSheetSensitivityTooltip.react", ["PolarisAssetManagerGlyphMapping", "PolarisDirectShareSheetTooltip.react", "PolarisIGCoreIcon", "PolarisshareFrictionUtils", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.desc;
        a = a.header;
        return h.jsx(c("PolarisDirectShareSheetTooltip.react"), {
            description: b,
            header: a,
            icon: h.jsx(c("PolarisIGCoreIcon"), {
                alt: d("PolarisshareFrictionUtils").SENSITIVITY_ICON_ALT_TEXT,
                icon: d("PolarisAssetManagerGlyphMapping").ICONS.GLYPH_EYE_OFF
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDirectShareSheetBaseFrictionTooltip.react", ["PolarisDirectShareSheetMisinformationTooltip.react", "PolarisDirectShareSheetSensitivityTooltip.react", "PolarisshareFrictionUtils", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i(a) {
        var b = a.currSidecarChildItem;
        a = a.post;
        var c = a.isSidecar,
            d = null,
            e = null;
        if (c === !0 && b != null) {
            d = (c = b.mediaOverlayInfo) == null ? void 0 : c.description;
            e = (c = b.mediaOverlayInfo) == null ? void 0 : c.title
        }
        d = d != null ? d : (b = a.mediaOverlayInfo) == null ? void 0 : b.description;
        e = e != null ? e : (c = a.mediaOverlayInfo) == null ? void 0 : c.title;
        return {
            desc: d,
            header: e
        }
    }

    function j(a) {
        var b = a.currSidecarChildItem;
        a = a.post;
        var c = a.isSidecar,
            d = null,
            e = null;
        c === !0 ? c = b != null ? b.mediaOverlayInfo : null : c = a != null ? a.mediaOverlayInfo : null;
        c != null && (d = c.description, e = c.title);
        return {
            description: d,
            header: e
        }
    }

    function a(a) {
        var b = a.currSidecarChildItem,
            e = a.shareFrictionType;
        if (b != null && d("PolarisshareFrictionUtils").shouldDirectShareSheetTooltipForCurrSidecarChildBeDisabled(b, e)) return null;
        switch (e) {
            case d("PolarisshareFrictionUtils").SHARE_FRICTION_TYPES.MISINFO_FRICTION:
                b = j(a);
                return h.jsx(c("PolarisDirectShareSheetMisinformationTooltip.react"), {
                    description: b.description,
                    header: b.header
                });
            case d("PolarisshareFrictionUtils").SHARE_FRICTION_TYPES.SENSITIVE_FRICTION:
                e = i(a);
                b = e.desc;
                a = e.header;
                return b == null || a == null ? null : h.jsx(c("PolarisDirectShareSheetSensitivityTooltip.react"), {
                    desc: b,
                    header: a
                });
            default:
                return null
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCopyLinkModal.react", ["cx", "fbt", "invariant", "IGCoreModal", "PolarisIGCoreBox", "PolarisIGCoreButton", "react"], function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react"),
        l = d("react").useRef,
        m = i._("Select Post Link");

    function a(a) {
        var b = a.onClose;
        a = a.postUrl;
        var d = l(null),
            e = function() {
                var a = d.current;
                a || j(0, 51626);
                (a.selectionStart !== 0 || a.selectionEnd < a.value.length) && a.setSelectionRange(0, a.value.length, "forward");
                document.activeElement !== a && a.focus()
            },
            f = function() {
                e()
            },
            g = function() {
                e()
            };
        return k.jsx(c("IGCoreModal"), {
            onClose: b,
            children: k.jsxs(c("PolarisIGCoreBox"), {
                padding: 4,
                children: [k.jsx("textarea", {
                    className: "_aalc",
                    onFocus: g,
                    readOnly: !0,
                    ref: d,
                    value: a
                }), k.jsx(c("PolarisIGCoreButton"), {
                    onClick: f,
                    children: m
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreAppMessengerOutlineIcon", ["PolarisIGCoreAppMessengerPanoOutlineIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreAppMessengerPanoOutlineIcon"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreAppTwitterOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M16.04 3.5a4.304 4.304 0 0 1 3.145 1.362 8.645 8.645 0 0 0 2.736-1.046 4.324 4.324 0 0 1-1.895 2.383 8.618 8.618 0 0 0 2.475-.678 8.766 8.766 0 0 1-2.15 2.23c.01.185.013.37.013.557A12.175 12.175 0 0 1 8.105 20.567a12.2 12.2 0 0 1-6.604-1.935 8.792 8.792 0 0 0 1.027.06 8.647 8.647 0 0 0 5.351-1.845 4.314 4.314 0 0 1-4.024-2.992 4.313 4.313 0 0 0 1.945-.074 4.31 4.31 0 0 1-3.457-4.224c0-.02 0-.038.002-.055a4.267 4.267 0 0 0 1.951.538 4.312 4.312 0 0 1-1.334-5.75 12.233 12.233 0 0 0 8.881 4.502A4.315 4.315 0 0 1 16.04 3.5m6.46 2.02h.006M16.04 2a5.817 5.817 0 0 0-5.763 5.08 10.783 10.783 0 0 1-6.152-3.74 1.5 1.5 0 0 0-1.163-.552c-.039 0-.078.001-.117.004a1.5 1.5 0 0 0-1.18.742 5.821 5.821 0 0 0-.422 4.949 1.5 1.5 0 0 0-.394.904 2.26 2.26 0 0 0-.006.169 5.81 5.81 0 0 0 1.553 3.948 1.5 1.5 0 0 0 .03.808 5.796 5.796 0 0 0 1.801 2.679 7.233 7.233 0 0 1-1.699.2 7.338 7.338 0 0 1-.852-.05 1.5 1.5 0 0 0-.984 2.753 13.718 13.718 0 0 0 7.413 2.172 13.405 13.405 0 0 0 10.226-4.503 14.213 14.213 0 0 0 3.532-9.093 10.204 10.204 0 0 0 1.846-2.06 1.5 1.5 0 0 0-.362-2.132l.002-.006a1.5 1.5 0 0 0-2.193-1.748 7.15 7.15 0 0 1-1.56.69A5.838 5.838 0 0 0 16.04 2Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreDirectOutlineIcon", ["PolarisIGCoreDirectPanoOutlineIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreDirectPanoOutlineIcon"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreFacebookCircleOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: [h.jsx("circle", {
                cx: "12",
                cy: "12",
                fill: "none",
                r: "11.25",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5"
            }), h.jsx("path", {
                d: "M16.671 15.469 17.203 12h-3.328V9.749a1.734 1.734 0 0 1 1.956-1.874h1.513V4.922a18.452 18.452 0 0 0-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v7.885a12.125 12.125 0 0 0 3.75 0V15.47Z",
                fillRule: "evenodd"
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreForwardOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: [h.jsx("path", {
                d: "M23.247 10.465H9.185a8.438 8.438 0 0 0-8.438 8.438v2.819",
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5"
            }), h.jsx("polyline", {
                fill: "none",
                points: "15.06 2.278 23.247 10.465 15.06 18.653",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5"
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreLinkOutlineIcon", ["PolarisIGCoreLinkPanoOutlineIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreLinkPanoOutlineIcon"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreMailOutlineIcon", ["PolarisIGCoreMailPanoOutlineIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreMailPanoOutlineIcon"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreScanQrOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: [h.jsx("path", {
                d: "M.75 16.097v3.568a3.585 3.585 0 0 0 3.585 3.585h3.568m0-22.5H4.335A3.585 3.585 0 0 0 .75 4.335v3.568m22.5 0V4.335A3.585 3.585 0 0 0 19.665.75h-3.568m0 22.5h3.568a3.585 3.585 0 0 0 3.585-3.585v-3.568",
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5"
            }), h.jsx("path", {
                d: "M19 17.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM17.5 16a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5Zm1.5-2.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm-4 4h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm-1-2h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5ZM18 4h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm.5 5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5ZM9 4H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm.5 5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5ZM8 6.5H7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5Zm0 9H7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm9-9h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5ZM9 13H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Zm.5 5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisShareSheetItem.react", ["cx", "invariant", "PolarisIGCoreListItem", "PolarisIGCoreText", "emptyFunction", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");

    function a(a) {
        var b = a.color;
        b = b === void 0 ? "primary" : b;
        var d = a.hrefTarget;
        d = d === void 0 ? "_blank" : d;
        var e = a.icon,
            f = a.label,
            g = a.onClick,
            h = g === void 0 ? c("emptyFunction") : g;
        g = a.url;
        g === void 0 || h === c("emptyFunction") || i(0, 51420);
        return j.jsx(c("PolarisIGCoreListItem"), {
            bodyHref: g,
            bodyHrefTarget: d,
            icon: j.jsx("div", {
                className: "_abdy",
                children: e != null ? j.jsx(e, {
                    alt: f,
                    size: 24
                }) : null
            }),
            onBodyClick: function() {
                h()
            },
            title: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                color: b,
                children: f
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisShareSheet.react", ["fbt", "PolarisAsyncEntityQRModal", "PolarisClipboard", "PolarisCopyLinkModal.react", "PolarisDirectActions", "PolarisDirectShareSheet.react", "PolarisDirectShareSheetBaseFrictionTooltip.react", "PolarisGenericStrings", "PolarisIGCoreAppMessengerOutlineIcon", "PolarisIGCoreAppTwitterOutlineIcon", "PolarisIGCoreBox", "PolarisIGCoreDirectOutlineIcon", "PolarisIGCoreFacebookCircleOutlineIcon", "PolarisIGCoreForwardOutlineIcon", "PolarisIGCoreLinkOutlineIcon", "PolarisIGCoreMailOutlineIcon", "PolarisIGCoreScanQrOutlineIcon", "PolarisIGCoreSheetOrModal", "PolarisIGCoreWhatsappLogoOutlineIcon", "PolarisLogger", "PolarisODS", "PolarisShareHelpers", "PolarisShareSheetContext", "PolarisShareSheetItem.react", "PolarisToastActions", "PolarisUA", "PolarispostSelectors", "PolarisshareFrictionUtils", "URI", "gkx", "react", "react-redux-wwwig", "usePolarisMQTT"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
        k = b.useState,
        l = h._("Link copied to clipboard."),
        m = h._("Share to...");

    function a(a) {
        var b = a.analyticsContext,
            e = a.description,
            g = a.entityID,
            n = a.entityType,
            o = a.onClose,
            p = a.onNativeShare,
            q = a.shareEnabled,
            r = a.shareIds,
            s = a.url,
            t = a.utmSource;
        a = j(c("PolarisShareSheetContext"));
        var u = a.currPostSidecarChildItem;
        a = k(!1);
        var v = a[0],
            w = a[1];
        a = k(!1);
        var x = a[0],
            y = a[1];
        a = k(!0);
        var z = a[0],
            A = a[1],
            B = d("react-redux-wwwig").useDispatch(),
            C = c("usePolarisMQTT")(),
            D = d("react-redux-wwwig").useSelector(function(a) {
                return d("PolarispostSelectors").getPostOrNullById(a, g)
            });

        function E() {
            return B(d("PolarisToastActions").showToast({
                text: l
            }))
        }

        function F(a) {
            var b = new(c("URI"))("https://www.instagram.com" + s).addQueryData("utm_source", t);
            return a == null ? b.toString() : b.addQueryData("igshid", a || "").toString()
        }

        function G() {
            if (D == null) return null;
            var a = d("PolarisshareFrictionUtils").getSharingFrictionTypeFromRootPostAndMaybeSidecarChild(D, u);
            if (a == null) return null;
            return u != null && d("PolarisshareFrictionUtils").shouldDirectShareSheetTooltipForCurrSidecarChildBeDisabled(u, a) ? null : i.jsx(c("PolarisDirectShareSheetBaseFrictionTooltip.react"), {
                currSidecarChildItem: u,
                post: D,
                shareFrictionType: a
            })
        }
        G.displayName = G.name + " [from " + f.id + "]";

        function H() {
            return i.jsx(d("PolarisDirectShareSheet.react").DirectShareSheet, {
                onDone: function(a, b) {
                    d("PolarisUA").isMobile() && A(!0), o(), B(d("PolarisDirectActions").sendPostToUsers(C, g, a, b))
                },
                onOpen: function() {
                    d("PolarisUA").isMobile() && A(!1)
                },
                referrer: b,
                tooltip: G(),
                children: i.jsx(c("PolarisShareSheetItem.react"), {
                    icon: c("PolarisIGCoreDirectOutlineIcon"),
                    label: h._("Share to Direct")
                }, "direct")
            })
        }
        H.displayName = H.name + " [from " + f.id + "]";

        function I() {
            return i.jsx(c("PolarisShareSheetItem.react"), {
                icon: c("PolarisIGCoreFacebookCircleOutlineIcon"),
                label: h._("Share to Facebook"),
                url: d("PolarisShareHelpers").getShareToFBURL(F(r == null ? void 0 : r.facebook))
            }, "fb")
        }
        I.displayName = I.name + " [from " + f.id + "]";

        function J() {
            return i.jsx(c("PolarisShareSheetItem.react"), {
                icon: c("PolarisIGCoreAppMessengerOutlineIcon"),
                label: h._("Share to Messenger"),
                url: d("PolarisShareHelpers").getShareToMessengerURL(F(r == null ? void 0 : r.messenger))
            }, "messenger")
        }
        J.displayName = J.name + " [from " + f.id + "]";

        function K() {
            var a = F(r == null ? void 0 : r.whatsapp),
                b = h._("Share to WhatsApp");
            return i.jsx(c("PolarisShareSheetItem.react"), {
                icon: c("PolarisIGCoreWhatsappLogoOutlineIcon"),
                label: b,
                url: d("PolarisShareHelpers").getShareToWhatsAppURL(a, e)
            }, "whatsapp")
        }
        K.displayName = K.name + " [from " + f.id + "]";

        function L() {
            return i.jsx(c("PolarisShareSheetItem.react"), {
                icon: c("PolarisIGCoreAppTwitterOutlineIcon"),
                label: h._("Share to Twitter"),
                url: d("PolarisShareHelpers").getShareToTwitterURL(F(r == null ? void 0 : r.twitter), e)
            }, "twitter")
        }
        L.displayName = L.name + " [from " + f.id + "]";

        function M() {
            c("gkx")("4909") || d("PolarisLogger").logAction_DEPRECATED("postLinkCopy", {
                source: b,
                type: n
            }), c("PolarisODS").incr("web.post_options.post_link_copy"), !d("PolarisClipboard").canCopy() || !d("PolarisClipboard").copy(F(r == null ? void 0 : r.copy)) ? w(!0) : (E(), o())
        }

        function N() {
            w(!1), o()
        }

        function O() {
            return i.jsx(c("PolarisShareSheetItem.react"), {
                icon: c("PolarisIGCoreLinkOutlineIcon"),
                label: h._("Copy link"),
                onClick: M
            }, "copy")
        }
        O.displayName = O.name + " [from " + f.id + "]";

        function P() {
            return v && i.jsx(c("PolarisCopyLinkModal.react"), {
                onClose: N,
                postUrl: F(r == null ? void 0 : r.copy)
            }, "copymodal")
        }

        function Q() {
            return i.jsx(c("PolarisShareSheetItem.react"), {
                hrefTarget: "_top",
                icon: c("PolarisIGCoreMailOutlineIcon"),
                label: h._("Share via Email"),
                url: d("PolarisShareHelpers").getShareToEmailURL(F(r == null ? void 0 : r.email), e)
            }, "email")
        }
        Q.displayName = Q.name + " [from " + f.id + "]";

        function R() {
            return i.jsx(c("PolarisShareSheetItem.react"), {
                hrefTarget: "_top",
                icon: c("PolarisIGCoreScanQrOutlineIcon"),
                label: h._("QR Code"),
                onClick: function() {
                    return y(!0)
                }
            }, "qr")
        }
        R.displayName = R.name + " [from " + f.id + "]";

        function S() {
            return i.jsx(c("PolarisShareSheetItem.react"), {
                icon: c("PolarisIGCoreForwardOutlineIcon"),
                label: h._("See All"),
                onClick: p
            }, "see_all")
        }
        S.displayName = S.name + " [from " + f.id + "]";

        function T() {
            return i.jsx(c("PolarisShareSheetItem.react"), {
                color: "blue",
                label: d("PolarisGenericStrings").CANCEL_TEXT,
                onClick: o
            })
        }
        T.displayName = T.name + " [from " + f.id + "]";
        a = C != null && c("gkx")("4910");
        return i.jsxs(i.Fragment, {
            children: [i.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
                isVisible: z,
                onClose: o,
                title: m,
                children: i.jsxs(c("PolarisIGCoreBox"), {
                    paddingY: 2,
                    children: [a && H(), q && i.jsxs(i.Fragment, {
                        children: [I(), J(), d("PolarisUA").isMobile() && K(), L(), Q(), R(), O(), a && d("PolarisShareHelpers").hasNativeShare() && S()]
                    }), T()]
                })
            }), P(), x && i.jsx(c("PolarisAsyncEntityQRModal"), {
                entityID: g,
                onClose: function() {
                    y(!1), o()
                },
                source: "SHARE_SHEET"
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);