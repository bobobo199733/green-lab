if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("PolarisDesktopStoryTrayItemBase.react", ["cx", "PolarisLiveBadge.react", "PolarisTimestamp.react", "PolarisUserAvatarWithStories.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.avatarSize,
            e = a.clickTargetElementId,
            f = a.condensed,
            g = a.isLive,
            h = a.isMuted,
            j = a.label,
            k = a.lastUpdated,
            l = a.onClick,
            m = a.profilePictureUrl;
        a = a.username;
        return i.jsxs("button", {
            className: "_aae4" + (h === !0 ? " _aae5" : "") + (f === !0 ? " _aae6" : ""),
            onClick: l,
            children: [i.jsx(c("PolarisUserAvatarWithStories.react"), {
                clickTargetElementId: e,
                isClickable: !1,
                isLink: !1,
                profilePictureUrl: m,
                showLivePulse: g,
                showLiveRing: g,
                size: b,
                storyEntrypoint: "reel_feed_timeline",
                username: a
            }), i.jsxs("div", {
                className: "_aae7",
                children: [i.jsx("div", {
                    className: "_aae8",
                    children: i.jsx("span", {
                        className: "_aae9",
                        children: j
                    })
                }), i.jsx("div", {
                    className: "_aaea",
                    children: k != null && i.jsx(c("PolarisTimestamp.react"), {
                        className: "_aaeb",
                        isLong: !0,
                        value: k
                    })
                })]
            }), g === !0 && i.jsx(d("PolarisLiveBadge.react").LiveBadge, {
                fontSize: 12,
                paddingX: 3,
                paddingY: 4
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDesktopLiveStoryTrayItem.react", ["PolarisDesktopStoryTrayItemBase.react", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisLiveActions", "PolarisLiveStrings", "PolarisliveSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useEffect;

    function a(a) {
        var b = a.avatarSize,
            e = a.broadcast,
            f = a.condensed,
            g = a.isVisible,
            k = a.onScrollEnter,
            l = a.trayPosition;
        a = e.cobroadcasters;
        var m = e.muted,
            n = e.published_time,
            o = d("react-redux-wwwig").useDispatch(),
            p = i(function() {
                o(d("PolarisLiveActions").openLivePlayerFromStoryTray(e, "live_feed_timeline", l))
            }, [e, o, l]),
            q = d("react-redux-wwwig").useSelector(function(a) {
                return d("PolarisliveSelectors").getDisplayedBroadcasters(a, e.id)
            });
        q = q.primary;
        j(function() {
            g && k(e, l)
        }, [e, g, k, l]);
        a = a.length > 0 ? h.jsxs(c("PolarisIGCoreBox"), {
            direction: "row",
            children: [h.jsx(c("PolarisIGCoreBox"), {
                marginEnd: 1,
                maxWidth: 132,
                children: h.jsx(c("PolarisIGCoreText"), {
                    display: "truncated",
                    size: "body",
                    weight: "semibold",
                    zeroMargin: !0,
                    children: q.username
                })
            }), h.jsx(c("PolarisIGCoreText"), {
                size: "body",
                weight: "semibold",
                zeroMargin: !0,
                children: d("PolarisLiveStrings").liveBroadcasters(a.length)
            })]
        }) : q.username;
        return h.jsx(c("PolarisDesktopStoryTrayItemBase.react"), {
            avatarSize: b,
            condensed: f,
            isLive: !0,
            isMuted: m,
            label: a,
            lastUpdated: n,
            onClick: p,
            profilePictureUrl: q.profile_pic_url,
            username: q.username
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDesktopStoryTrayItem.react", ["PolarisDesktopStoryTrayItemBase.react", "PolarisStoriesStrings", "PolarismemoizeLast", "PolarisstorySelectors", "PolarisuserSelectors", "nullthrows", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = 0;
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = c("PolarismemoizeLast")(function(a) {
                return "DesktopStoryTrayItem_" + i++
            }), d.$3 = function(a) {
                a.preventDefault(), d.props.onClick(d.props.reel.id, d.$1(d.props.reel.id))
            }, d.$2 = function() {
                d.props.onScrollEnter(c("nullthrows")(d.props.reel.userId), d.props.trayPosition)
            }, b) || babelHelpers.assertThisInitialized(d)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            this.props.isVisible && this.$2()
        };
        e.componentDidUpdate = function(a) {
            !a.isVisible && this.props.isVisible && this.$2()
        };
        e.render = function() {
            var a = this.props,
                b = a.avatarSize,
                e = a.condensed,
                f = a.isMuted,
                g = a.isViewer,
                i = a.lastUpdated,
                j = a.profilePictureUrl;
            a = a.username;
            g = g ? d("PolarisStoriesStrings").YOUR_STORY_TEXT : a;
            return h.jsx(c("PolarisDesktopStoryTrayItemBase.react"), {
                avatarSize: b,
                clickTargetElementId: this.$1(this.props.reel.id),
                condensed: e,
                isMuted: f,
                label: g,
                lastUpdated: i,
                onClick: this.$3,
                profilePictureUrl: j,
                username: a
            })
        };
        return b
    }(h.PureComponent);
    b.defaultProps = {
        avatarSize: 50,
        condensed: !1
    };

    function a(a, b) {
        var e = d("PolarisuserSelectors").getUserById(a, c("nullthrows")(b.reel.userId));
        return {
            isMuted: Boolean(b.reel.muted),
            isSeen: d("PolarisstorySelectors").isReelSeen(b.reel),
            isViewer: a.users.viewerId === b.reel.id,
            profilePictureUrl: c("nullthrows")(e.profilePictureUrl),
            username: c("nullthrows")(e.username)
        }
    }
    e = d("react-redux-wwwig").connect(a)(b);
    g["default"] = e
}, 98);
__d("PolarisDesktopStoryTrayItemPlaceholder.react", ["cx", "PolarisUserAvatarWithStoriesPlaceholder.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.avatarSize,
            d = a.hideAvatarBorder;
        a = a.rounded;
        return i.jsxs("div", {
            className: "_aad-",
            children: [i.jsx(c("PolarisUserAvatarWithStoriesPlaceholder.react"), {
                className: "_aad_",
                hideAvatarBorder: d,
                size: b
            }), i.jsxs("div", {
                className: "_aae0",
                children: [i.jsx("div", {
                    className: "_aae1" + (a ? " _aae2" : "")
                }), i.jsx("div", {
                    className: "_aae3" + (a ? " _aae2" : "")
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisDesktopStoryTray.react", ["cx", "fbt", "PolarisDesktopLiveStoryTrayItem.react", "PolarisDesktopStoryTrayItem.react", "PolarisDesktopStoryTrayItemPlaceholder.react", "PolarisIGCoreBox", "PolarisIGCoreConstants", "PolarisIGCoreText", "PolarisIGVirtualList.react", "PolarisInstagramReelTrayImpressionFalcoEvent", "PolarisLiveGating", "PolarisLiveLogger", "PolarisStoriesLoggingUtils", "PolarisdisplayDoneBlocking", "hero-tracing-placeholder", "nullthrows", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = i._("Stories from people you follow will show up here.");
    a = 8;
    var l = 60 + a,
        m = 44 + a,
        n = 50,
        o = 4,
        p = 10;
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, e;
            for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++) g[h] = arguments[h];
            return (b = e = a.call.apply(a, [this].concat(g)) || this, e.$3 = function() {
                var a = e.props.broadcasts.size;
                return a === 0 || !d("PolarisLiveGating").hasLiveInStories() ? 0 : a
            }, e.$4 = function() {
                var a = e.props.broadcasts.size;
                return a === 0 || !d("PolarisLiveGating").hasLiveInStories() ? null : e.props.broadcasts.sort(function(a, b) {
                    return ((a == null ? void 0 : a.ranked_position) || 0) - ((b == null ? void 0 : b.ranked_position) || 0)
                }).toList()
            }, e.$5 = function(a, b) {
                e.props.onLoadReel(c("nullthrows")(e.props.reels), a, b)
            }, e.$6 = function(a, b) {
                var f = e.props.reels ? e.props.reels.get(b - 1) : null;
                c("PolarisInstagramReelTrayImpressionFalcoEvent").log(function() {
                    return {
                        a_pk: Number(a),
                        has_my_reel: c("nullthrows")(e.props.hasOwnReel) ? 1 : 0,
                        is_new_reel: e.props.isFullySeen(f == null ? void 0 : f.id) ? 0 : 1,
                        new_reel_count: c("nullthrows")(e.props.newReelCount),
                        pigeon_reserved_keyword_module: "reel_feed_timeline",
                        reel_type: d("PolarisStoriesLoggingUtils").getTypeForLogging(f == null ? void 0 : f.type),
                        tray_position: b,
                        tray_session_id: e.props.traySession,
                        viewed_reel_count: c("nullthrows")(e.props.seenReelCount)
                    }
                })
            }, e.$7 = function(a, b) {
                c("PolarisInstagramReelTrayImpressionFalcoEvent").log(function() {
                    return {
                        a_pk: Number(a.broadcast_owner),
                        has_my_reel: c("nullthrows")(e.props.hasOwnReel) ? 1 : 0,
                        is_new_reel: 0,
                        live_reel_count: e.$3(),
                        new_reel_count: c("nullthrows")(e.props.newReelCount),
                        pigeon_reserved_keyword_module: "reel_feed_timeline",
                        reel_type: d("PolarisLiveLogger").getReelTypeForLogging(a),
                        tray_position: b,
                        tray_session_id: e.props.traySession,
                        viewed_reel_count: c("nullthrows")(e.props.seenReelCount)
                    }
                })
            }, e.$8 = function(a) {
                var b = a.index;
                a = a.isVisible;
                var d = e.$4(),
                    f = e.$3(),
                    g = b < f;
                if (g && d != null) {
                    g = d.get(b);
                    return g != null && j.jsx("div", {
                        style: {
                            height: e.$2()
                        },
                        children: j.jsx(c("PolarisDesktopLiveStoryTrayItem.react"), {
                            avatarSize: e.$1(),
                            broadcast: g,
                            condensed: e.props.useContainer,
                            isVisible: a,
                            onScrollEnter: e.$7,
                            trayPosition: b
                        })
                    }, b)
                }
                d = b - f;
                g = c("nullthrows")(e.props.reels).get(d);
                f = g == null ? void 0 : g.latestReelMedia;
                return g != null && j.jsx("div", {
                    style: {
                        height: e.$2()
                    },
                    children: j.jsx(c("PolarisDesktopStoryTrayItem.react"), {
                        avatarSize: e.$1(),
                        condensed: e.props.useContainer,
                        isVisible: a,
                        lastUpdated: c("nullthrows")(f),
                        onClick: e.$5,
                        onScrollEnter: e.$6,
                        reel: g,
                        trayPosition: d
                    })
                }, b)
            }, e.$9 = function(a) {
                var b = a.index;
                a.isVisible;
                return j.jsx("div", {
                    style: {
                        height: e.$2()
                    },
                    children: j.jsx(c("PolarisDesktopStoryTrayItemPlaceholder.react"), {
                        avatarSize: e.$1(),
                        hideAvatarBorder: e.props.useContainer,
                        rounded: e.props.useContainer
                    })
                }, b)
            }, b) || babelHelpers.assertThisInitialized(e)
        }
        var e = b.prototype;
        e.$1 = function() {
            return this.props.useContainer ? c("PolarisIGCoreConstants").AVATAR_SIZES.medium - p : n
        };
        e.$2 = function() {
            return this.props.useContainer ? m : l
        };
        e.$10 = function() {
            this.props.reels != null && this.props.onDisplayDone()
        };
        e.componentDidMount = function() {
            this.$10()
        };
        e.componentDidUpdate = function() {
            this.$10()
        };
        e.render = function() {
            var a = this.props,
                b = a.reels,
                e = a.useContainer;
            a = a.visibleCount;
            if (b != null && b.isEmpty()) return j.jsx(c("PolarisIGCoreBox"), {
                marginBottom: 4,
                paddingX: e ? 4 : 0,
                paddingY: 2,
                children: j.jsx(c("PolarisIGCoreText").Body, {
                    color: "ig-secondary-text",
                    children: k
                })
            });
            var f = this.$2();
            a = f * a;
            var g = Math.ceil(a / f);
            return j.jsxs(c("PolarisIGCoreBox"), {
                dangerouslySetClassName: {
                    __className: e ? "" : "_aadz"
                },
                marginStart: e ? 4 : 0,
                children: [b == null ? j.jsx(c("PolarisIGVirtualList.react"), {
                    containerSize: a,
                    estimatedItemSize: f,
                    initialRenderCount: g,
                    itemCount: g,
                    overscanCount: 0,
                    renderer: this.$9
                }) : j.jsx(c("PolarisIGVirtualList.react"), {
                    containerSize: a,
                    estimatedItemSize: f,
                    initialRenderCount: g,
                    itemCount: b.count() + this.$3(),
                    overscanCount: o,
                    renderer: this.$8
                }), j.jsx(d("hero-tracing-placeholder").HeroHoldTrigger, {
                    description: "DesktopStoryTray",
                    hold: b == null
                })]
            })
        };
        return b
    }(j.PureComponent);
    b.defaultProps = {
        visibleCount: 4.5,
        useContainer: !1
    };
    e = d("PolarisdisplayDoneBlocking").displayDoneBlocking("DesktopStoryTray", b);
    g["default"] = e
}, 98);
__d("PolarisDesktopStoryTrayContainer.react", ["PolarisDesktopStoryTray.react", "PolarisStoryActions", "PolarisliveSelectors", "PolarisstorySelectors", "nullthrows", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");

    function a(a) {
        var b = d("PolarisstorySelectors").getSeenCountInStoryTray(a);
        return {
            broadcasts: d("PolarisliveSelectors").getBroadcastStoryTrayItems(a),
            hasOwnReel: d("PolarisstorySelectors").userHasReel(a, c("nullthrows")(a.users.viewerId)),
            isFullySeen: function(b) {
                if (b != null) {
                    b = d("PolarisstorySelectors").getFirstUnseenReelItemIndex(a, b);
                    return b != null && b < 0
                }
                return !1
            },
            loadingId: a.stories.trayLoadingId,
            newReelCount: a.stories.feedTray && a.stories.feedTray.count() - c("nullthrows")(b),
            reels: d("PolarisstorySelectors").getFeedStoryTrayWithoutOwn(a),
            seenReelCount: b,
            traySession: a.stories.traySession,
            viewerId: a.users.viewerId
        }
    }

    function b(a) {
        return {
            onLoadReel: function(b, c, e) {
                a(d("PolarisStoryActions").openReelsMedia(b, "reel_feed_timeline", c, e))
            }
        }
    }
    e = d("react-redux-wwwig").connect(a, b)(c("PolarisDesktopStoryTray.react"));
    g["default"] = e
}, 98);
__d("PolarisProOnboardingStrings", ["fbt"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Set your profile up for success");
    b = h._("Completing your profile helps people discover and learn about your business.");
    c = h._("Profile information");
    d = h._("Business name (optional)");
    e = h._("Website (optional)");
    f = h._("Bio (optional)");
    var i = h._("Next"),
        j = h._("Set your profile up for success"),
        k = h._("You can choose to display or hide your contact info in your profile settings anytime. Contact buttons are only visible on your profile in the Instagram mobile app."),
        l = h._("Contact information"),
        m = h._("Display on profile"),
        n = h._("Phone number (optional)"),
        o = h._("Address (optional)"),
        p = h._("City\/town (optional)"),
        q = h._("Zip code (optional)"),
        r = h._("Email (optional)"),
        s = h._("Previous"),
        t = h._("Save"),
        u = h._("You've successfully updated your profile!"),
        v = h._("Now you can reach people by posting directly from the Instagram website.");
    h = h._("Create a post");
    g.PRO_ONBOARDING_PROFILE_INFO_HEADER = a;
    g.PRO_ONBOARDING_PROFILE_INFO_BODY = b;
    g.PRO_ONBOARDING_PROFILE_INFO_SECONDARY_HEADER = c;
    g.PRO_ONBOARDING_PROFILE_INFO_NAME = d;
    g.PRO_ONBOARDING_PROFILE_INFO_WEBSITE = e;
    g.PRO_ONBOARDING_PROFILE_INFO_BIO = f;
    g.PRO_ONBOARDING_PROFILE_INFO_NEXT = i;
    g.PRO_ONBOARDING_CONTACT_HEADER = j;
    g.PRO_ONBOARDING_CONTACT_BODY = k;
    g.PRO_ONBOARDING_CONTACT_SECONDARY_HEADER = l;
    g.PRO_ONBOARDING_CONTACT_DISPLAY_TOGGLE = m;
    g.PRO_ONBOARDING_CONTACT_PHONE_NUMBER = n;
    g.PRO_ONBOARDING_CONTACT_ADDRESS = o;
    g.PRO_ONBOARDING_CONTACT_CITY = p;
    g.PRO_ONBOARDING_CONTACT_ZIPCODE = q;
    g.PRO_ONBOARDING_CONTACT_EMAIL = r;
    g.PRO_ONBOARDING_CONTACT_PREVIOUS = s;
    g.PRO_ONBOARDING_CONTACT_SAVE = t;
    g.PRO_ONBOARDING_COMPLETION_HEADER = u;
    g.PRO_ONBOARDING_COMPLETION_BODY = v;
    g.PRO_ONBOARDING_COMPLETION_CREATE_POST = h
}, 98);
__d("PolarisProOnboardingCompletion.react", ["fbt", "ix", "IGCoreImage", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreText", "PolarisNavigationActions", "PolarisProOnboardingStrings", "PolarisProfessionalAccountLoggerUtils", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
        l = b.useState;

    function a(a) {
        var b = a.onExit;
        a = a.shouldDisplayIcon;
        var e = d("react-redux-wwwig").useSelector(function(a) {
                return a.professionalAccountSettings
            }),
            f = e.onboardingLogger;
        e = l(!1);
        var g = e[0],
            m = e[1],
            n = d("react-redux-wwwig").useDispatch();
        k(function() {
            f && !g && (f.logStartStep(d("PolarisProfessionalAccountLoggerUtils").Step.confirmation), m(!0))
        }, [f, g]);
        return j.jsxs("div", {
            children: [j.jsx(c("PolarisIGCoreBox"), {
                alignItems: "center",
                children: a && j.jsx(c("IGCoreImage"), {
                    alt: h._("Checkmark icon"),
                    src: {
                        light: i("162687")
                    }
                })
            }), j.jsxs(c("PolarisIGCoreBox"), {
                direction: "column",
                flex: "grow",
                children: [j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: 4,
                    children: j.jsx(c("PolarisIGCoreText").Title, {
                        textAlign: "center",
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_COMPLETION_HEADER
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: 6,
                    children: j.jsx(c("PolarisIGCoreText").Body, {
                        color: "ig-secondary-text",
                        textAlign: "center",
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_COMPLETION_BODY
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    alignItems: "center",
                    marginBottom: 7,
                    marginTop: 7,
                    children: j.jsx(c("PolarisIGCoreButton"), {
                        color: "ig-secondary-button",
                        onClick: function() {
                            b(), n(d("PolarisNavigationActions").openFeedCreationModal()), f && (f.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.confirmation, d("PolarisProfessionalAccountLoggerUtils").Component.create_post), m(!0))
                        },
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_COMPLETION_CREATE_POST
                    })
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ProOnboardingCompletion = a
}, 98);
__d("PolarisCitySearchDropdownComponent.react", ["cx", "fbt", "PolarisAPI", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreChevronIcon", "PolarisIGCoreListItem", "PolarisIGCorePopover", "PolarisIGCorePressable", "PolarisIGCoreText", "PolarisIGCoreTextInput", "PolarisProfessionalAccountLoggerUtils", "PolarisProfessionalAccountSettingsPageStrings", "Polarisdebounce", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
        l = b.useState,
        m = 200,
        n = i._("Dropdown"),
        o = 12,
        p = 25.5,
        q = 250,
        r = 8,
        s = 350;

    function a(a) {
        var b = a.onChange,
            e = a.logger,
            f = a.onboardingLogger,
            g = a.placeholder,
            h = g === void 0 ? d("PolarisProfessionalAccountSettingsPageStrings").BUSINESS_ADDRESS_CITY_FIELD : g,
            i = a.cityName,
            t = a.setCityId,
            u = a.setCityName;
        g = l("");
        var v = g[0],
            w = g[1];
        a = l(!1);
        g = a[0];
        var x = a[1];
        a = l({});
        var y = a[1];
        a = l([]);
        var z = a[0],
            A = a[1];
        k(function() {
            A([]);
            if (v) {
                var a = c("Polarisdebounce")(function() {
                    d("PolarisAPI").searchCity(v).then(function(a) {
                        A(a.cities), f && f.logFetchData(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.searched_city, {
                            data_count: String(a.cities.length)
                        }, {
                            city_search_keyword: v
                        }), e && e.logFetchData(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.page_import_info_city_town, d("PolarisProfessionalAccountLoggerUtils").Component.city, {
                            query_string: v
                        })
                    }, function(a) {
                        var b;
                        b = (b = a.responseObject) == null ? void 0 : b.message;
                        if (f) {
                            var c;
                            f.logFetchDataError(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.searched_city, (c = a.responseObject) == null ? void 0 : c.error_identifier, b, {
                                city_search_keyword: v
                            })
                        }
                        if (e) {
                            e.logFetchDataError(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.page_import_info_city_town, d("PolarisProfessionalAccountLoggerUtils").Component.searched_city, (c = a.responseObject) == null ? void 0 : c.error_identifier, b, {
                                city_search_keyword: v
                            })
                        }
                    })
                }, q);
                y(function(b) {
                    b.reset && b.reset();
                    return a
                });
                a()
            }
        }, [v, e, f]);

        function B(a) {
            w(a), a !== i && x(!0)
        }

        function C() {
            return i != null && i !== ""
        }

        function D() {
            return C() ? j.jsx(c("PolarisIGCoreText").Body, {
                children: i
            }) : j.jsx(c("PolarisIGCoreText").Body, {
                color: "ig-tertiary-text",
                children: h
            })
        }
        return j.jsxs(c("PolarisIGCoreBox"), {
            flex: "grow",
            children: [j.jsx(c("PolarisIGCoreBox"), {
                color: "ig-secondary-background",
                children: j.jsx(c("PolarisIGCoreButton"), {
                    color: "ig-secondary-button",
                    fullWidth: !0,
                    onClick: function() {
                        x(!0)
                    },
                    children: j.jsxs(c("PolarisIGCoreBox"), {
                        alignItems: "center",
                        direction: "row",
                        height: p,
                        children: [D(), j.jsx(c("PolarisIGCoreBox"), {
                            marginStart: "auto",
                            children: C() ? j.jsx(c("PolarisIGCorePressable"), {
                                "aria-label": d("PolarisProfessionalAccountSettingsPageStrings").BUSINESS_ADDRESS_CITY_CLEAR_BUTTON_ARIA_LABEL,
                                className: "_9-lv",
                                onPress: function(a) {
                                    t("0"), u(""), b(), a.stopPropagation()
                                }
                            }) : j.jsx(c("PolarisIGCoreChevronIcon"), {
                                alt: n,
                                color: "ig-tertiary-text",
                                direction: "down",
                                size: o
                            })
                        })]
                    })
                })
            }), j.jsx(c("PolarisIGCoreBox"), {
                children: j.jsx(c("PolarisIGCorePopover"), {
                    arrowLeftOffset: r,
                    arrowPosition: "top",
                    isVisible: g,
                    onClose: function() {
                        x(!1)
                    },
                    children: j.jsxs(c("PolarisIGCoreBox"), {
                        maxHeight: m,
                        width: s,
                        children: [j.jsx(c("PolarisIGCoreBox"), {
                            padding: 2,
                            children: j.jsx(c("PolarisIGCoreTextInput"), {
                                name: "city_search_field",
                                onChange: function(a) {
                                    b(), B(a.target.value)
                                },
                                onFocus: function(a) {
                                    f && f.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.city_search_box)
                                },
                                type: "text",
                                value: v
                            })
                        }), z.map(function(a, b) {
                            var e = a.city_id,
                                g = a.city_name;
                            return j.jsx(c("PolarisIGCoreListItem"), {
                                onBodyClick: function() {
                                    t(e), u(g), w(""), A([]), x(!1), f && f.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.searched_city, {
                                        city_id: g
                                    })
                                },
                                title: g
                            }, b)
                        })]
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisProfessionalAccountSettingsUtils", [], function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        add_whatsapp: "add_whatsapp",
        link_completion: "link_completion"
    });
    b = Object.freeze({
        ig_account_type_check_failure: "IG_ACCOUNT_TYPE_CHECK_FAILURE",
        verified: "VERIFIED"
    });
    f.AccountSettingsScreen = a;
    f.WhatsAppNumberVerificationResult = b
}, 66);
__d("PolarisProfessionalOnboardingCancelFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("professional_onboarding_cancel", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisProfessionalOnboardingFetchDataErrorFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("professional_onboarding_fetch_data_error", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisProfessionalOnboardingFetchDataFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("professional_onboarding_fetch_data", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisProfessionalOnboardingFinishStepFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("professional_onboarding_finish_step", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisProfessionalOnboardingStartStepFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("professional_onboarding_start_step", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisProfessionalOnboardingSubmitErrorFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("professional_onboarding_submit_error", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisProfessionalOnboardingSubmitFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("professional_onboarding_submit", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisProfessionalOnboardingTapComponentFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("professional_onboarding_tap_component", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisProfessionalOnboardingLogger", ["PolarisProfessionalAccountLoggerUtils", "PolarisProfessionalOnboardingCancelFalcoEvent", "PolarisProfessionalOnboardingFetchDataErrorFalcoEvent", "PolarisProfessionalOnboardingFetchDataFalcoEvent", "PolarisProfessionalOnboardingFinishStepFalcoEvent", "PolarisProfessionalOnboardingStartStepFalcoEvent", "PolarisProfessionalOnboardingSubmitErrorFalcoEvent", "PolarisProfessionalOnboardingSubmitFalcoEvent", "PolarisProfessionalOnboardingTapComponentFalcoEvent"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = {
                entry_point: d("PolarisProfessionalAccountLoggerUtils").EntryPoint.feed_sidebar,
                flow: d("PolarisProfessionalAccountLoggerUtils").Flow.pro_onboarding,
                pk: a,
                waterfall_id: b
            }
        }
        var b = a.prototype;
        b.logCancel = function(a) {
            var b = {
                entry_point: this.$1.entry_point,
                fb_page_id: this.$1.fb_page_id,
                fb_user_id: this.$1.fb_user_id,
                step: a,
                waterfall_id: this.$1.waterfall_id
            };
            c("PolarisProfessionalOnboardingCancelFalcoEvent").log(function() {
                return b
            })
        };
        b.logFetchDataError = function(a, b, d, e, f, g) {
            var h = {
                component: b,
                entry_point: this.$1.entry_point,
                error_identifier: d,
                error_message: e,
                fb_page_id: this.$1.fb_page_id,
                fb_user_id: this.$1.fb_user_id,
                flow: this.$1.flow,
                selected_values: g,
                step: a,
                waterfall_id: this.$1.waterfall_id
            };
            c("PolarisProfessionalOnboardingFetchDataErrorFalcoEvent").log(function() {
                return h
            })
        };
        b.logFetchData = function(a, b, d, e) {
            var f = {
                available_options: d,
                component: b,
                entry_point: this.$1.entry_point,
                fb_page_id: this.$1.fb_page_id,
                fb_user_id: this.$1.fb_user_id,
                flow: this.$1.flow,
                selected_values: e,
                step: a,
                waterfall_id: this.$1.waterfall_id
            };
            c("PolarisProfessionalOnboardingFetchDataFalcoEvent").log(function() {
                return f
            })
        };
        b.logFinishStep = function(a, b, d) {
            var e = {
                default_values: b,
                entry_point: this.$1.entry_point,
                fb_page_id: this.$1.fb_page_id,
                fb_user_id: this.$1.fb_user_id,
                flow: this.$1.flow,
                selected_values: d,
                step: a,
                waterfall_id: this.$1.waterfall_id
            };
            c("PolarisProfessionalOnboardingFinishStepFalcoEvent").log(function() {
                return e
            })
        };
        b.logStartStep = function(a, b) {
            var d = {
                default_values: b,
                entry_point: this.$1.entry_point,
                fb_page_id: this.$1.fb_page_id,
                fb_user_id: this.$1.fb_user_id,
                flow: this.$1.flow,
                step: a,
                waterfall_id: this.$1.waterfall_id
            };
            c("PolarisProfessionalOnboardingStartStepFalcoEvent").log(function() {
                return d
            })
        };
        b.logSubmitError = function(a, b, d, e, f) {
            var g = {
                component: b,
                entry_point: this.$1.entry_point,
                error_identifier: d,
                error_message: e,
                fb_page_id: this.$1.fb_page_id,
                fb_user_id: this.$1.fb_user_id,
                flow: this.$1.flow,
                selected_values: f,
                step: a,
                waterfall_id: this.$1.waterfall_id
            };
            c("PolarisProfessionalOnboardingSubmitErrorFalcoEvent").log(function() {
                return g
            })
        };
        b.logSubmit = function(a, b, d) {
            var e = {
                component: b,
                entry_point: this.$1.entry_point,
                fb_page_id: this.$1.fb_page_id,
                fb_user_id: this.$1.fb_user_id,
                flow: this.$1.flow,
                selected_values: d,
                step: a,
                waterfall_id: this.$1.waterfall_id
            };
            c("PolarisProfessionalOnboardingSubmitFalcoEvent").log(function() {
                return e
            })
        };
        b.logTapComponent = function(a, b, d) {
            var e = {
                component: b,
                entry_point: this.$1.entry_point,
                fb_page_id: this.$1.fb_page_id,
                fb_user_id: this.$1.fb_user_id,
                flow: this.$1.flow,
                selected_values: d,
                step: a,
                waterfall_id: this.$1.waterfall_id
            };
            c("PolarisProfessionalOnboardingTapComponentFalcoEvent").log(function() {
                return e
            })
        };
        return a
    }();
    g.ProfessionalOnboardingLogger = a
}, 98);
__d("PolarisProfessionalAccountSettingsActions", ["PolarisConfig", "PolarisConsumerDataCache", "PolarisInstapi", "PolarisLinkBuilder", "PolarisProfessionalAccountLogger", "PolarisProfessionalAccountLoggerUtils", "PolarisProfessionalAccountSettingsActionTypes", "PolarisProfessionalAccountSettingsPageStrings", "PolarisProfessionalAccountSettingsUtils", "PolarisProfessionalOnboardingLogger", "PolarisToastActions", "PolarisuserSelectors", "uuid"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return d("PolarisInstapi").apiGet("/api/v1/business/account/get_public_business_contact_info/", {
            query: {
                ig_professional_account_id: (a = a) != null ? a : ""
            }
        }).then(function(a) {
            return a.data
        })
    }

    function b(a) {
        a = new(d("PolarisProfessionalAccountLogger").ProfessionalAccountLogger)(d("PolarisConfig").getViewerId(), c("uuid")(), a);
        return {
            logger: a,
            type: d("PolarisProfessionalAccountSettingsActionTypes").INIT_PROFESSIONAL_ACCOUNT_LOGGER
        }
    }

    function e(a) {
        a === void 0 && (a = !0);
        a = a ? new(d("PolarisProfessionalOnboardingLogger").ProfessionalOnboardingLogger)(d("PolarisConfig").getViewerId(), c("uuid")()) : null;
        return {
            onboardingLogger: a,
            type: d("PolarisProfessionalAccountSettingsActionTypes").SET_PROFESSIONAL_ONBOARDING_LOGGER
        }
    }

    function h(a) {
        return {
            isEdited: a,
            type: d("PolarisProfessionalAccountSettingsActionTypes").SET_IS_EDITED
        }
    }

    function f(a) {
        return {
            categoryName: a,
            type: d("PolarisProfessionalAccountSettingsActionTypes").SET_CATEGORY_NAME
        }
    }

    function i(a) {
        return {
            categoryId: a,
            type: d("PolarisProfessionalAccountSettingsActionTypes").SET_CATEGORY_ID
        }
    }

    function j(a) {
        return {
            requestInFlight: a,
            type: d("PolarisProfessionalAccountSettingsActionTypes").SET_PRO_ACCOUNT_SETTINGS_PAGE_REQUEST_IN_FLIGHT
        }
    }

    function k(a, b, c, e, f, g, h, i, j) {
        c = {
            should_show_category: c === !0 ? 1 : 0,
            category_id: b
        };
        j != null && (c.should_show_public_contacts = j === !0 ? 1 : 0);
        e != null && (c.public_email = e);
        if (i != null) {
            b = JSON.stringify({
                public_phone_number: i,
                business_contact_method: a
            });
            c.public_phone_contact = b
        }
        if (g != null && g !== "") {
            j = f != null ? f : "";
            e = h != null ? h : "";
            c.business_address = JSON.stringify({
                address_street: j,
                city_id: g,
                zip: e
            })
        }
        i = c;
        return d("PolarisInstapi").apiPost("/api/v1/accounts/update_business_info/", {
            body: i
        }).then(function(a) {
            return a.data
        })
    }

    function l(a, b, c, e, f, g, i, l, m) {
        var n;
        c === void 0 ? n = "" : n = c;
        return function(o, p) {
            p = p();
            var q = p.professionalAccountSettings;
            p = d("PolarisuserSelectors").getViewer(p);
            var r = (p == null ? void 0 : p.username) || !1,
                s = q.logger,
                t = q.onboardingLogger;
            k(a, b, c, e, f, g, i, l, m).then(function(a) {
                s && (s.logSubmit(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.professional_account_settings, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, {
                    address: f,
                    email: e,
                    category_id: b,
                    should_show_category: n ? "true" : "false"
                }), s.logFinishStep(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.professional_account_settings)), t && (t.logSubmit(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, {
                    address: f,
                    email: e,
                    phone: l,
                    should_show_public_contacts: n ? "true" : "false"
                }), t.logFinishStep(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info)), r && d("PolarisConsumerDataCache").invalidatePath(d("PolarisLinkBuilder").buildUserLink(r)), o(h(!1)), o(j(!1)), o(d("PolarisToastActions").showToast({
                    text: d("PolarisProfessionalAccountSettingsPageStrings").PROFILE_SAVED_TOAST_MESSAGE
                })), o({
                    proOnboardingContactOptionsSaved: !0,
                    type: d("PolarisProfessionalAccountSettingsActionTypes").PRO_ONBOARDING_CONTACT_OPTIONS_SAVED
                })
            }, function(a) {
                if (s) {
                    var c;
                    s.logSubmitError(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.professional_account_settings, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, (c = a.responseObject) == null ? void 0 : c.error_identifier, (c = a.responseObject) == null ? void 0 : c.message, {
                        address: f,
                        email: e,
                        category_id: b,
                        should_show_category: n ? "true" : "false"
                    })
                }
                if (t) {
                    t.logSubmitError(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, (c = a.responseObject) == null ? void 0 : c.error_identifier, a.responseText, {
                        address: f,
                        email: e,
                        phone: l,
                        should_show_public_contacts: n ? "true" : "false"
                    })
                }
                o(j(!1));
                a = ((c = a.responseObject) == null ? void 0 : c.message) || d("PolarisProfessionalAccountSettingsPageStrings").PROFILE_SAVED_ERROR_MESSAGE;
                o(d("PolarisToastActions").showToast({
                    text: a
                }))
            })["catch"](function(a) {
                if (s) {
                    var c;
                    s.logSubmitError(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.professional_account_settings, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, (c = a.responseObject) == null ? void 0 : c.error_identifier, (c = a.responseObject) == null ? void 0 : c.message, {
                        address: f,
                        email: e,
                        category_id: b,
                        should_show_category: n ? "true" : "false"
                    })
                }
                if (t) {
                    t.logSubmitError(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, (c = a.responseObject) == null ? void 0 : c.error_identifier, a.responseText, {
                        address: f,
                        email: e,
                        phone: l,
                        should_show_public_contacts: n ? "true" : "false"
                    })
                }
                o(j(!1));
                a = ((c = a.responseObject) == null ? void 0 : c.message) || d("PolarisProfessionalAccountSettingsPageStrings").PROFILE_SAVED_ERROR_MESSAGE;
                o(d("PolarisToastActions").showToast({
                    text: a
                }))
            })
        }
    }

    function m(a, b) {
        a = {
            whatsapp_nonce: a,
            whatsapp_phone_number: b
        };
        return d("PolarisInstapi").apiPost("/api/v1/business/account/create_whatsapp_link/", {
            body: a
        }).then(function(a) {
            return a.data
        })
    }

    function n(a, b, c, e) {
        return function(f, g) {
            g = g();
            g = g.professionalAccountSettings;
            var h = g.logger;
            m(c, e).then(function(c) {
                c.result === d("PolarisProfessionalAccountSettingsUtils").WhatsAppNumberVerificationResult.verified ? (h && (h.logSubmit(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.add_whatsapp_link, d("PolarisProfessionalAccountLoggerUtils").Component.save_info), h.logFinishStep(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.add_whatsapp_link)), a(d("PolarisProfessionalAccountLoggerUtils").Step.whatsapp_link_confirmation)) : c.result === d("PolarisProfessionalAccountSettingsUtils").WhatsAppNumberVerificationResult.ig_account_type_check_failure ? (h && h.logSubmitError(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.add_whatsapp_link, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, "DISALLOWED_IG_ACCOUNT_TYPE"), b(!0)) : (h && h.logSubmitError(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.add_whatsapp_link, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, "GENERIC_WHATSAPP_LINKING_ERROR"), f(d("PolarisToastActions").showToast({
                    text: d("PolarisProfessionalAccountSettingsPageStrings").WHATSAPP_LINKING_ERROR
                }))), f(j(!1))
            }, function(a) {
                if (h) {
                    var b;
                    h.logSubmitError(d("PolarisProfessionalAccountLoggerUtils").Flow.edit_profile, d("PolarisProfessionalAccountLoggerUtils").Step.add_whatsapp_link, d("PolarisProfessionalAccountLoggerUtils").Component.save_info, (b = a.responseObject) == null ? void 0 : b.error_identifier, (b = a.responseObject) == null ? void 0 : b.message)
                }
                f(j(!1));
                f(d("PolarisToastActions").showToast({
                    text: d("PolarisProfessionalAccountSettingsPageStrings").WHATSAPP_LINKING_ERROR
                }))
            })
        }
    }
    g.getBusinessPublicContactInfo = a;
    g.initProfessionalAccountLogger = b;
    g.setProfessionalOnboardingLogger = e;
    g.setIsEdited = h;
    g.setCategoryName = f;
    g.setCategoryId = i;
    g.setRequestInFlight = j;
    g.updateProfessionalAccountInfo = k;
    g.updateProfessionalSettingsInfo = l;
    g.createWhatsAppLinkAjaxRequest = m;
    g.createWhatsAppLink = n
}, 98);
__d("PolarisprofessionalAccountSettingsSelectors", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.professionalAccountSettings.proOnboardingContactOptionsSaved
    }
    f.getProOnboardingContactOptionsSaved = a
}, 66);
__d("PolarisProOnboardingContactOptions.react", ["fbt", "ix", "IGCoreImage", "PolarisCitySearchDropdownComponent.react", "PolarisConsentStrings.react", "PolarisCountryCallingCodes", "PolarisCountryCodeUtils", "PolarisCountryNames", "PolarisEmailValidator", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreCheckbox", "PolarisIGCorePhoneNumberInput", "PolarisIGCoreText", "PolarisIGCoreTextInput", "PolarisProOnboardingStrings", "PolarisProfessionalAccountLoggerUtils", "PolarisProfessionalAccountSettingsActionTypes", "PolarisProfessionalAccountSettingsActions", "PolarisProfessionalConversionCardTypeConfigs.react", "PolarisStepIndicator.react", "PolarisToastActions", "PolarisprofessionalAccountSettingsSelectors", "PolarisuserSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
        l = b.useState,
        m = 4,
        n = 5,
        o = 4,
        p = 4,
        q = 3,
        r = 4;

    function a(a) {
        var b, e = a.onNext,
            f = a.professionalContactInformation;
        a = a.shouldDisplayIcon;
        var g = d("react-redux-wwwig").useSelector(function(a) {
                return a.professionalAccountSettings
            }),
            s = g.onboardingLogger;
        g = d("react-redux-wwwig").useSelector(function(a) {
            return a.professionalAccountSettings
        });
        g = g.requestInFlight;
        var t = l(!1),
            u = t[0],
            v = t[1];
        t = d("react-redux-wwwig").useSelector(d("PolarisuserSelectors").getViewer);
        var w = d("react-redux-wwwig").useDispatch(),
            x = l(f.addressStreet),
            y = x[0],
            z = x[1];
        x = l(f.phoneContactMethod);
        var A = x[0];
        x = l(f.email);
        var B = x[0],
            C = x[1];
        x = l(f.phoneNumber);
        var D = x[0],
            E = x[1];
        x = l(f.cityId);
        var F = x[0];
        x = x[1];
        var G = l(f.cityName),
            H = G[0];
        G = G[1];
        var I = f.phoneCountryCode;
        b = l(I === "" ? (b = d("PolarisCountryCodeUtils").getInitialCountryCode()) != null ? b : {
            code: "",
            phoneCode: ""
        } : {
            code: "",
            phoneCode: I
        });
        var J = b[0],
            K = b[1];
        I = l(f.shouldShowPublicContacts);
        var L = I[0],
            M = I[1];
        b = l(f.zipCode);
        var N = b[0],
            O = b[1];
        f = (I = t == null ? void 0 : t.isBusinessAccount) != null ? I : !1;
        b = l(!1);
        var P = b[0],
            Q = b[1],
            R = d("react-redux-wwwig").useSelector(d("PolarisprofessionalAccountSettingsSelectors").getProOnboardingContactOptionsSaved);
        k(function() {
            R && e()
        }, [R, e]);
        t = function() {
            s && s.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.address);
            if (P)
                if (B !== "" && !c("PolarisEmailValidator")(B)) w(d("PolarisToastActions").showToast({
                    text: d("PolarisConsentStrings.react").PLEASE_ENTER_VALID_EMAIL_TEXT
                }));
                else if (L === !0 && !B && !D && !F) {
                var a = d("PolarisProfessionalConversionCardTypeConfigs.react").CONVERSION_NO_CONTACT_INFO_ERROR;
                w(d("PolarisToastActions").showToast({
                    text: a
                }));
                M(!1)
            } else {
                a = D !== "" ? J.phoneCode + D : D;
                w(d("PolarisProfessionalAccountSettingsActions").setRequestInFlight(!0));
                w(d("PolarisProfessionalAccountSettingsActions").updateProfessionalSettingsInfo(A, void 0, void 0, B, y, F, N, a, L))
            } else e(), w({
                proOnboardingContactOptionsSaved: !0,
                type: d("PolarisProfessionalAccountSettingsActionTypes").PRO_ONBOARDING_CONTACT_OPTIONS_SAVED
            })
        };
        k(function() {
            if (s && !u) {
                var a = {
                    businessAddress: y,
                    businessEmail: B,
                    businessPhoneNumber: D,
                    cityId: F,
                    phoneNumber: D,
                    showOnProfile: L,
                    zipCode: N
                };
                s.logStartStep(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, a);
                v(!0)
            }
        }, [s, u, y, B, D, F, L, N]);
        return j.jsxs(c("PolarisIGCoreBox"), {
            children: [j.jsx(c("PolarisIGCoreBox"), {
                alignItems: "center",
                children: a && j.jsx(c("IGCoreImage"), {
                    alt: h._("IG profile sign icon"),
                    src: {
                        light: i("170649"),
                        dark: i("170650")
                    }
                })
            }), j.jsxs(c("PolarisIGCoreBox"), {
                direction: "column",
                flex: "grow",
                children: [j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: m,
                    children: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        textAlign: "center",
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_HEADER
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: n,
                    children: j.jsx(c("PolarisIGCoreText").Body, {
                        color: "ig-secondary-text",
                        textAlign: "left",
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_BODY
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: o,
                    children: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        textAlign: "left",
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_SECONDARY_HEADER
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    display: "inlineBlock",
                    marginTop: p,
                    children: j.jsx(c("PolarisIGCoreCheckbox"), {
                        checked: L,
                        onChange: function(a) {
                            M(a), Q(!0), s && s.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.contact_options_profile_display_toggle, {
                                should_show_public_contacts: a ? "true" : "false"
                            })
                        },
                        children: j.jsx(c("PolarisIGCoreText").Body, {
                            children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_DISPLAY_TOGGLE
                        })
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: q,
                    children: j.jsx(c("PolarisIGCoreBox"), {
                        display: "flex",
                        flex: "grow",
                        children: j.jsx(c("PolarisIGCorePhoneNumberInput"), {
                            countryCode: J,
                            countryCodesMap: c("PolarisCountryCallingCodes"),
                            countryNamesMap: c("PolarisCountryNames"),
                            onChange: function(a) {
                                E(a.target.value), Q(!0)
                            },
                            onChangeCountryCode: function(a) {
                                K({
                                    code: a.code,
                                    phoneCode: a.phoneCode
                                }), Q(!0), s && s.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.area_code_option, {
                                    area_code: a.phoneCode
                                })
                            },
                            onFocus: function() {
                                s && s.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.phone)
                            },
                            onFocusCountryCode: function() {
                                s && s.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.area_code)
                            },
                            placeholder: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_PHONE_NUMBER,
                            value: D
                        })
                    })
                }), f && j.jsxs(c("PolarisIGCoreBox"), {
                    children: [j.jsx(c("PolarisIGCoreBox"), {
                        marginTop: q,
                        children: j.jsx(c("PolarisIGCoreTextInput"), {
                            name: "businessAddress",
                            onChange: function(a) {
                                z(a.target.value), Q(!0)
                            },
                            onFocus: function() {
                                s && s.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.address)
                            },
                            placeholder: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_ADDRESS,
                            value: y
                        })
                    }), j.jsx(c("PolarisIGCoreBox"), {
                        marginTop: q,
                        children: j.jsx(c("PolarisCitySearchDropdownComponent.react"), {
                            cityName: H,
                            onChange: function() {
                                Q(!0)
                            },
                            onboardingLogger: s,
                            setCityId: x,
                            setCityName: G
                        })
                    }), j.jsx(c("PolarisIGCoreBox"), {
                        marginTop: q,
                        children: j.jsx(c("PolarisIGCoreTextInput"), {
                            name: "zipCode",
                            onChange: function(a) {
                                O(a.target.value), Q(!0)
                            },
                            onFocus: function() {
                                s && s.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.zip)
                            },
                            placeholder: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_ZIPCODE,
                            value: N
                        })
                    })]
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: q,
                    children: j.jsx(c("PolarisIGCoreTextInput"), {
                        name: "businessEmail",
                        onChange: function(a) {
                            C(a.target.value), Q(!0)
                        },
                        onFocus: function() {
                            s && s.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.edit_contact_info, d("PolarisProfessionalAccountLoggerUtils").Component.email)
                        },
                        placeholder: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_EMAIL,
                        value: B
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginBottom: 2,
                    marginTop: 2,
                    children: j.jsxs(c("PolarisIGCoreBox"), {
                        direction: "row",
                        marginTop: r,
                        children: [j.jsx(c("PolarisIGCoreBox"), {
                            margin: "auto",
                            children: j.jsx(c("PolarisStepIndicator.react"), {
                                numSteps: 2,
                                selectedStep: 1
                            })
                        }), j.jsx(c("PolarisIGCoreBox"), {
                            marginBottom: 8,
                            children: j.jsx(c("PolarisIGCoreBox"), {
                                position: "absolute",
                                right: !0,
                                children: j.jsx(c("PolarisIGCoreButton"), {
                                    loading: g,
                                    onClick: t,
                                    children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_CONTACT_SAVE
                                })
                            })
                        })]
                    })
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ProOnboardingContactOptions = a
}, 98);
__d("PolarissettingsSelectors", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.settings.proOnboardingProfileInfoSaved
    }
    f.getProOnboardingProfileInfoSaved = a
}, 66);
__d("PolarisProOnboardingProfileInformation.react", ["fbt", "ix", "IGCoreImage", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreText", "PolarisIGCoreTextInput", "PolarisProOnboardingStrings", "PolarisProfessionalAccountLoggerUtils", "PolarisSettingsActionTypes", "PolarisSettingsActions", "PolarisStepIndicator.react", "PolarissettingsSelectors", "PolarisuserSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
        l = b.useState,
        m = 4,
        n = 5,
        o = 4,
        p = 4,
        q = 3,
        r = 4;

    function a(a) {
        var b = a.onNext,
            e = a.onSubmit,
            f = a.personalProfileInformation;
        a = a.shouldDisplayIcon;
        var g = d("react-redux-wwwig").useDispatch(),
            s = d("react-redux-wwwig").useSelector(function(a) {
                return a.professionalAccountSettings
            }),
            t = s.onboardingLogger;
        s = d("react-redux-wwwig").useSelector(function(a) {
            return a.settings
        });
        s = s.requestInFlight;
        var u = l(!1),
            v = u[0],
            w = u[1];
        u = l(f.bio);
        var x = u[0],
            y = u[1];
        u = l(f.businessName);
        var z = u[0],
            A = u[1];
        u = l(f.website);
        var B = u[0],
            C = u[1];
        u = l(!1);
        var D = u[0],
            E = u[1];
        u = l(d("react-redux-wwwig").useSelector(function(a) {
            return (a = d("PolarisuserSelectors").getViewer(a)) == null ? void 0 : a.username
        }));
        var F = u[0],
            G = d("react-redux-wwwig").useSelector(d("PolarissettingsSelectors").getProOnboardingProfileInfoSaved);
        k(function() {
            G && b()
        }, [G, b]);
        u = function() {
            t && t.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.personal_profile_info, d("PolarisProfessionalAccountLoggerUtils").Component["continue"]);
            if (D) {
                g(d("PolarisSettingsActions").setRequestInFlight(!0));
                var a = {
                    fullName: z,
                    website: B,
                    bio: x,
                    email: f.personalEmail,
                    phoneNumber: f.personalPhoneNumber,
                    username: F
                };
                e(a)
            } else b(), g({
                proOnboardingProfileInfoSaved: !0,
                type: d("PolarisSettingsActionTypes").PRO_ONBOARDING_PROFILE_INFO_SAVED
            })
        };
        k(function() {
            if (t && !v) {
                var a = {
                    fullName: z,
                    website: B,
                    bio: x,
                    email: f.personalEmail,
                    phoneNumber: f.personalPhoneNumber,
                    username: F
                };
                t.logStartStep(d("PolarisProfessionalAccountLoggerUtils").Step.personal_profile_info, a);
                w(!0)
            }
        }, [t, v, z, B, x, f.personalEmail, f.personalPhoneNumber, F]);
        return j.jsxs(c("PolarisIGCoreBox"), {
            children: [j.jsx(c("PolarisIGCoreBox"), {
                alignItems: "center",
                children: a && j.jsx(c("IGCoreImage"), {
                    alt: h._("IG profile sign icon"),
                    src: {
                        light: i("170649"),
                        dark: i("170650")
                    }
                })
            }), j.jsxs(c("PolarisIGCoreBox"), {
                direction: "column",
                flex: "grow",
                children: [j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: m,
                    children: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        textAlign: "center",
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_PROFILE_INFO_HEADER
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: n,
                    children: j.jsx(c("PolarisIGCoreText").Body, {
                        color: "ig-secondary-text",
                        textAlign: "left",
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_PROFILE_INFO_BODY
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: o,
                    children: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        textAlign: "left",
                        children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_PROFILE_INFO_SECONDARY_HEADER
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: p,
                    children: j.jsx(c("PolarisIGCoreTextInput"), {
                        name: "businessName",
                        onChange: function(a) {
                            A(a.target.value), E(!0)
                        },
                        onFocus: function() {
                            t && t.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.personal_profile_info, d("PolarisProfessionalAccountLoggerUtils").Component.name)
                        },
                        placeholder: d("PolarisProOnboardingStrings").PRO_ONBOARDING_PROFILE_INFO_NAME,
                        value: z
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: q,
                    children: j.jsx(c("PolarisIGCoreTextInput"), {
                        name: "website",
                        onChange: function(a) {
                            C(a.target.value), E(!0)
                        },
                        onFocus: function() {
                            t && t.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.personal_profile_info, d("PolarisProfessionalAccountLoggerUtils").Component.website)
                        },
                        placeholder: d("PolarisProOnboardingStrings").PRO_ONBOARDING_PROFILE_INFO_WEBSITE,
                        value: B
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginTop: q,
                    children: j.jsx(c("PolarisIGCoreTextInput"), {
                        name: "bio",
                        onChange: function(a) {
                            y(a.target.value), E(!0)
                        },
                        onFocus: function() {
                            t && t.logTapComponent(d("PolarisProfessionalAccountLoggerUtils").Step.personal_profile_info, d("PolarisProfessionalAccountLoggerUtils").Component.bio)
                        },
                        placeholder: d("PolarisProOnboardingStrings").PRO_ONBOARDING_PROFILE_INFO_BIO,
                        value: x
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    marginBottom: 4,
                    marginTop: 2,
                    children: j.jsxs(c("PolarisIGCoreBox"), {
                        direction: "row",
                        marginTop: r,
                        children: [j.jsx(c("PolarisIGCoreBox"), {
                            margin: "auto",
                            children: j.jsx(c("PolarisStepIndicator.react"), {
                                numSteps: 2,
                                selectedStep: 0
                            })
                        }), j.jsx(c("PolarisIGCoreBox"), {
                            marginBottom: 5,
                            marginEnd: 2,
                            children: j.jsx(c("PolarisIGCoreBox"), {
                                position: "absolute",
                                right: !0,
                                children: j.jsx(c("PolarisIGCoreButton"), {
                                    borderless: !0,
                                    loading: s,
                                    onClick: u,
                                    children: d("PolarisProOnboardingStrings").PRO_ONBOARDING_PROFILE_INFO_NEXT
                                })
                            })
                        })]
                    })
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ProOnboardingProfileInformation = a
}, 98);
__d("PolarisProfessionalAPI", ["PolarisInstapi", "regeneratorRuntime"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return b("regeneratorRuntime").async(function(a) {
            while (1) switch (a.prev = a.next) {
                case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiGet("/api/v1/business/account/get_web_pro_onboarding_eligibility/").then(function(a) {
                        return a.data
                    }));
                case 2:
                    return a.abrupt("return", a.sent);
                case 3:
                case "end":
                    return a.stop()
            }
        }, null, this)
    }

    function c(a) {
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiPost("/api/v1/business/account/set_web_pro_onboarding_status/", {
                        body: {
                            is_module_dismissed: a
                        }
                    }));
                case 2:
                    return c.abrupt("return", c.sent);
                case 3:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }
    g.getWebProOnboardingEligibility = a;
    g.setWebProOnboardingModuleDismissed = c
}, 98);
__d("PolarisProOnboardingContainer.react", ["PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreSVGIconButton", "PolarisIGCoreXPanoFilledIcon", "PolarisProOnboardingCompletion.react", "PolarisProOnboardingContactOptions.react", "PolarisProOnboardingProfileInformation.react", "PolarisProfessionalAPI", "qex", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState,
        j = Object.freeze({
            personal_profile_info: 0,
            edit_contact_info: 1,
            confirmation: 2
        });

    function k(a, b, e, f, g, i) {
        var j = c("qex")._("178") === "eligible_with_icon";
        switch (a) {
            case 0:
                return h.jsx(d("PolarisProOnboardingProfileInformation.react").ProOnboardingProfileInformation, {
                    onNext: b,
                    onSubmit: e,
                    personalProfileInformation: g,
                    shouldDisplayIcon: j
                });
            case 1:
                return h.jsx(d("PolarisProOnboardingContactOptions.react").ProOnboardingContactOptions, {
                    onNext: b,
                    professionalContactInformation: i,
                    shouldDisplayIcon: j
                });
            case 2:
                return h.jsx(d("PolarisProOnboardingCompletion.react").ProOnboardingCompletion, {
                    onExit: f,
                    shouldDisplayIcon: j
                });
            default:
                break
        }
        return h.jsx("div", {})
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.onExitCallback,
            e = a.onSubmitProfileInfo,
            f = a.personalProfileInformation;
        a = a.professionalContactInformation;
        var g = d("react-redux-wwwig").useSelector(function(a) {
                return a.professionalAccountSettings
            }),
            l = g.onboardingLogger;
        g = i(j.personal_profile_info);
        var m = g[0],
            n = g[1];
        g = function() {
            n(m + 1)
        };
        var o = function() {
            d("PolarisProfessionalAPI").setWebProOnboardingModuleDismissed(!0);
            if (l) {
                var a = Object.keys(j).find(function(a) {
                    return j[a] === m
                });
                m === j.confirmation ? l.logFinishStep(a) : l.logCancel(a)
            }
            b()
        };
        return h.jsxs(c("PolarisIGCoreBox"), {
            border: !0,
            color: "ig-primary-background",
            flex: "shrink",
            marginBottom: 4,
            children: [h.jsx(c("PolarisIGCoreBox"), {
                alignItems: "end",
                marginEnd: 1,
                marginTop: 1,
                children: h.jsx(c("PolarisIGCoreSVGIconButton"), {
                    onClick: o,
                    children: h.jsx(c("PolarisIGCoreXPanoFilledIcon"), {
                        alt: d("PolarisGenericStrings").CLOSE_TEXT,
                        size: 11
                    })
                })
            }), h.jsx(c("PolarisIGCoreBox"), {
                marginBottom: 3,
                paddingX: 3,
                children: k(m, g, e, o, f, a)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.OnboardingStep = j;
    g.renderScreen = k;
    g.ProOnboardingContainer = a
}, 98);
__d("PolarisSidebarSectionHeader.react", ["PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreText", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("PolarisIGCoreBox"), {
            alignItems: "center",
            direction: "row",
            paddingX: 4,
            paddingY: 1,
            children: [h.jsx(c("PolarisIGCoreBox"), {
                flex: "grow",
                children: h.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                    color: "ig-secondary-text",
                    children: a.headerText
                })
            }), a.linkTo && Boolean(a.secondaryText) && a.placeholder === !0 && h.jsx(c("PolarisIGCoreText").Body2, {
                color: "ig-secondary-text",
                children: a.secondaryText
            }), a.linkTo && Boolean(a.secondaryText) && a.placeholder !== !0 && h.jsx(c("PolarisIGCoreButton"), {
                borderless: !0,
                color: "ig-secondary-button",
                disabled: !!a.placeholder,
                href: a.linkTo,
                onClick: a.onClick,
                children: h.jsx(c("PolarisIGCoreText").Body2Emphasized, {
                    children: a.secondaryText
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisSidebarUserSummary.react", ["cx", "FastLink", "PolarisAuthStrings", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreListItem", "PolarisIGCoreText", "PolarisIGCoreVerifiedBadge", "PolarisLinkBuilder", "PolarisNavigationActions", "PolarisQEHelper", "PolarisRoutes", "PolarisUA", "PolarisUserAvatarWithStories.react", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("PolarisUA").isDesktop() ? 56 : 50;

    function a(a) {
        var b = a.isVerified,
            e = a.name,
            f = a.profilePictureUrl;
        a = a.username;
        var g = d("react-redux-wwwig").useDispatch(),
            h = function() {
                if (d("PolarisQEHelper").hasAccountSwitching()) {
                    var a = function() {
                        return g(d("PolarisNavigationActions").openAccountSwitcher({
                            next: d("PolarisRoutes").FEED_PATH,
                            source: "feed_sidebar"
                        }))
                    };
                    return i.jsx(c("PolarisIGCoreButton"), {
                        borderless: !0,
                        onClick: a,
                        children: i.jsx(c("PolarisIGCoreText").Body2, {
                            color: "ig-primary-action",
                            weight: "semibold",
                            children: d("PolarisAuthStrings").SWITCH_CTA_TEXT
                        })
                    })
                }
                return null
            };
        return i.jsx(c("PolarisIGCoreBox"), {
            "data-testid": void 0,
            marginEnd: 1,
            width: "100%",
            children: i.jsx(c("PolarisIGCoreListItem"), {
                action: h(),
                icon: i.jsx(c("PolarisUserAvatarWithStories.react"), {
                    className: "_aak0",
                    isLink: !0,
                    profilePictureUrl: f,
                    size: j,
                    storyEntrypoint: "reel_feed_timeline",
                    username: a
                }),
                paddingX: 0,
                paddingY: 0,
                subtitle: e !== "" ? i.jsx(c("PolarisIGCoreBox"), {
                    flex: "grow",
                    marginStart: d("PolarisUA").isDesktop() ? 3 : 1,
                    children: i.jsx(c("PolarisIGCoreText").Body, {
                        color: "ig-secondary-text",
                        display: "truncated",
                        children: e
                    })
                }) : null,
                title: i.jsxs(c("PolarisIGCoreBox"), {
                    direction: "row",
                    flex: "grow",
                    marginStart: d("PolarisUA").isDesktop() ? 3 : 1,
                    children: [i.jsx(c("FastLink"), {
                        className: "_aak1",
                        href: d("PolarisLinkBuilder").buildUserLink(a),
                        children: a
                    }), b && i.jsx(c("PolarisIGCoreBox"), {
                        display: "inlineBlock",
                        marginStart: 1,
                        children: i.jsx(c("PolarisIGCoreVerifiedBadge"), {})
                    })]
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisFeedSidebar.react", ["cx", "fbt", "PolarisBatchDOM", "PolarisConnectionsLogger", "PolarisDOMListener.react", "PolarisDesktopStoryTrayContainer.react", "PolarisErrorBoundaryWithHoldout.react", "PolarisFetchingSuggestedUserList.react", "PolarisFooter.react", "PolarisIGCoreBox", "PolarisProOnboardingContainer.react", "PolarisRoutes", "PolarisSidebarSectionHeader.react", "PolarisSidebarUserSummary.react", "PolarisStoriesStrings", "PolarisSuggestedUserList.react", "PolarisUA", "nullthrows", "qex", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
        l = b.useEffect,
        m = b.useRef,
        n = b.useState,
        o = d("PolarisUA").isDesktop() ? 5 : 3;

    function p(a) {
        var b = a.children,
            d = a.marginBottom;
        a = a.marginTop;
        return j.jsx(c("PolarisIGCoreBox"), {
            color: "ig-primary-background",
            dangerouslySetClassName: {
                __className: "_aak2"
            },
            marginBottom: d,
            marginTop: a,
            shape: "rounded",
            children: b
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";

    function q(a) {
        a = a.children;
        return j.jsx("div", {
            className: "_aak3",
            children: a
        })
    }
    q.displayName = q.name + " [from " + f.id + "]";

    function r(a) {
        var b = a.feedStoryTray;
        a = a.onWatchAllClick;
        return j.jsxs(j.Fragment, {
            children: [j.jsx(c("PolarisSidebarSectionHeader.react"), {
                headerText: d("PolarisStoriesStrings").STORIES_TEXT,
                linkTo: "#",
                onClick: a,
                placeholder: b == null,
                secondaryText: b == null || !b.isEmpty() ? d("PolarisStoriesStrings").WATCH_ALL_TEXT : null
            }), j.jsx(c("PolarisIGCoreBox"), {
                marginTop: 2,
                children: j.jsx(c("PolarisDesktopStoryTrayContainer.react"), {
                    useContainer: !0,
                    visibleCount: 3.5
                })
            })]
        })
    }
    r.displayName = r.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.currentUser,
            e = a.feedStoryTray,
            f = a.isProOnboardingEligible,
            g = a.onDisplayDone,
            h = a.onSaveProfile,
            s = a.onWatchAllStories,
            t = a.personalProfileInformation;
        a = a.professionalContactInformation;
        var u = n(null),
            v = u[0],
            w = u[1];
        u = n(null);
        var x = u[0],
            y = u[1],
            z = m(null),
            A = k(function() {
                d("PolarisBatchDOM").measure(function() {
                    if (z.current == null) return;
                    var a = z.current.getBoundingClientRect().left;
                    d("PolarisBatchDOM").mutate(function() {
                        if (z.current == null) return;
                        w(a)
                    })
                })
            }, [z]);
        l(function() {
            A(), g != null && g()
        }, [g, A]);
        l(function() {
            if (f && x === null) {
                var a = c("qex")._("178");
                a = a === "eligible_with_icon" || a === "eligible_without_icon";
                y(f && a)
            }
        }, [f, x]);
        u = function(a) {
            a.preventDefault();
            a = c("nullthrows")(e);
            if (a.isEmpty()) return;
            s(a)
        };
        var B = function(a) {
                h(a)
            },
            C = d("PolarisUA").isDesktop() ? q : p;
        return j.jsxs(j.Fragment, {
            children: [j.jsx(c("PolarisDOMListener.react"), {
                event: "scroll",
                handler: A,
                passive: !0,
                target: window
            }), j.jsx(c("PolarisDOMListener.react"), {
                event: "resize",
                handler: A,
                passive: !0,
                target: window
            }), j.jsx("div", {
                className: "_aak4",
                ref: z
            }), j.jsxs("div", {
                className: "_aak6" + (v != null ? " _aak9" : ""),
                style: {
                    left: v
                },
                children: [j.jsx("div", {
                    className: "_aakb" + (d("PolarisUA").isDesktop() ? " _aakc" : ""),
                    children: j.jsx(c("PolarisSidebarUserSummary.react"), {
                        isVerified: !1,
                        name: c("nullthrows")(b.fullName),
                        profilePictureUrl: c("nullthrows")(b.profilePictureUrl),
                        username: c("nullthrows")(b.username)
                    })
                }), !d("PolarisUA").isDesktop() && j.jsx(p, {
                    marginTop: 1,
                    children: j.jsx(r, {
                        feedStoryTray: e,
                        onWatchAllClick: u
                    })
                }), x === !0 && j.jsx(d("PolarisProOnboardingContainer.react").ProOnboardingContainer, {
                    onExitCallback: function() {
                        y(!1)
                    },
                    onSubmitProfileInfo: B,
                    personalProfileInformation: t,
                    professionalContactInformation: a
                }), x !== !0 && j.jsx(c("PolarisErrorBoundaryWithHoldout.react"), {
                    children: j.jsxs(C, {
                        marginBottom: 3,
                        marginTop: 3,
                        children: [j.jsx(c("PolarisSidebarSectionHeader.react"), {
                            headerText: d("PolarisSuggestedUserList.react").HEADER_TEXT,
                            linkTo: d("PolarisRoutes").DISCOVER_PEOPLE_PATH,
                            placeholder: e == null,
                            secondaryText: i._("See All")
                        }), j.jsx(c("PolarisIGCoreBox"), {
                            marginBottom: 1,
                            marginStart: 1,
                            children: j.jsx(c("PolarisFetchingSuggestedUserList.react"), {
                                analyticsContext: "desktop",
                                avatarSize: "small",
                                backgroundColor: d("PolarisUA").isDesktop() ? "ig-secondary-background" : void 0,
                                borderlessFollowButton: !0,
                                count: o,
                                footer: null,
                                header: null,
                                hideName: !0,
                                hideUpsells: !0,
                                initialRenderCount: o,
                                viewModule: d("PolarisConnectionsLogger").VIEW_MODULES.desktop_feed
                            })
                        })]
                    })
                }), j.jsx(c("PolarisFooter.react"), {
                    variant: c("PolarisFooter.react").VARIANTS.sidebar
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisFeedSidebarContainer.react", ["PolarisFeedSidebar.react", "PolarisSettingsActions", "PolarisStoryActions", "PolarisstorySelectors", "PolarisuserSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");

    function a(a) {
        var b = d("PolarisuserSelectors").getViewer(a);
        return {
            currentUser: b,
            feedStoryTray: d("PolarisstorySelectors").getFeedStoryTrayWithoutOwn(a)
        }
    }

    function b(a) {
        return {
            onSaveProfile: function(b) {
                a(d("PolarisSettingsActions").saveProfile(b))
            },
            onWatchAllStories: function(b) {
                a(d("PolarisStoryActions").openReelsMedia(b, "reel_feed_timeline"))
            }
        }
    }
    e = d("react-redux-wwwig").connect(a, b)(c("PolarisFeedSidebar.react"));
    g["default"] = e
}, 98);