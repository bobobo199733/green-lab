if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("PolarisNetEgoLogger", ["PolarisConfig", "PolarisDeviceOrMachineId", "PolarisLogger", "PolarisPigeonLogger", "PolarisUA", "keyMirror"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = c("keyMirror")({
        feed: null
    });

    function a(a) {
        var b = a.containerModule,
            c = a.eventName,
            e = a.isFromNeedyUser,
            f = a.position,
            g = a.trackingToken;
        a = a.type;
        e = {
            is_from_needy_user: Boolean(e),
            position: f,
            device_model: d("PolarisUA").getBrowserString(),
            device_os: "Web",
            gap_to_last_netego: -1,
            primary_locale: d("PolarisConfig").getLocale(),
            deviceid: d("PolarisDeviceOrMachineId").getDeviceOrMachineId(),
            tracking_token: g,
            type: a
        };
        d("PolarisLogger").logPigeonEvent(d("PolarisPigeonLogger").createEvent(c, d("PolarisLogger").getExtra(e), {
            module: b
        }))
    }
    g.NETEGO_CONTAINER_MODULES = b;
    g.logNetEgoEvent = a
}, 98);
__d("PolarisSuggestedUserFeedUnit.react", ["cx", "fbt", "PolarisConnectionsLogger", "PolarisFeedActions", "PolarisFollowChainingList.react", "PolarisNetEgoLogger", "PolarisPostVariants", "PolarisRoutes", "PolarisUA", "PolarissuggestedUserSelectors", "joinClasses", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useEffect,
        l = i._("Suggestions for you");

    function a(a) {
        var b = a.aysfUserIds,
            e = a.className,
            f = a.impressionModule;
        f = f === void 0 ? d("PolarisConnectionsLogger").VIEW_MODULES.hscroll_feed : f;
        var g = a.position,
            h = a.trackingToken,
            i = a.type,
            m = a.users;
        a = a.variant;
        var n = d("react-redux-wwwig").useDispatch(),
            o = function(a) {
                n(d("PolarisFeedActions").dismissFeedAysfSuggestion(a))
            },
            p = d("react-redux-wwwig").useSelector(function(a) {
                return d("PolarissuggestedUserSelectors").getFeedAysfUsers(a, {
                    userIds: (a = b) != null ? a : []
                })
            });
        m = m != null ? m : p;
        k(function() {
            g != null && d("PolarisNetEgoLogger").logNetEgoEvent({
                containerModule: d("PolarisNetEgoLogger").NETEGO_CONTAINER_MODULES.feed,
                eventName: "instagram_netego_impression",
                isFromNeedyUser: !0,
                position: g,
                trackingToken: h,
                type: i
            })
        }, [g, h, i]);
        return j.jsx(c("PolarisFollowChainingList.react"), {
            analyticsContext: d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.feed_timeline,
            chainingSuggestions: m == null ? void 0 : m.map(function(a) {
                return {
                    fullName: a.fullName,
                    id: a.id,
                    isVerified: a.isVerified,
                    profilePictureUrl: a.profilePictureUrl,
                    suggestionDescription: a.suggestionDescription,
                    username: a.username
                }
            }),
            className: c("joinClasses")(e, (a === d("PolarisPostVariants").VARIANTS.narrow && d("PolarisUA").isMobile() ? "_aa1t" : "") + (a === d("PolarisPostVariants").VARIANTS.wide && d("PolarisUA").isMobile() ? " _aa1u" : "") + (d("PolarisUA").isMobile() ? " _aa1w" : "") + (d("PolarisUA").isMobile() ? "" : " _aa1x")),
            clickPoint: "feed_h_scroll_suggested_user_list",
            impressionModule: f,
            isSmallScreen: a === d("PolarisPostVariants").VARIANTS.narrow,
            onSuggestionDismissed: o,
            seeAllHref: d("PolarisRoutes").DISCOVER_PEOPLE_PATH,
            showDescription: !0,
            title: l
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisFeedEndSuggestedUserUnit.react", ["cx", "PolarisConnectionsLogger", "PolarisSuggestedUserFeedUnit.react", "PolarisUserActions", "PolarissuggestedUserSelectors", "PolarisuserSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            this.props.users.length || this.props.onLoadSuggestions()
        };
        e.render = function() {
            return this.props.users.length === 0 ? null : i.jsx(c("PolarisSuggestedUserFeedUnit.react"), {
                className: "_abra",
                impressionModule: d("PolarisConnectionsLogger").VIEW_MODULES.end_of_feed,
                users: this.props.users,
                variant: this.props.variant
            })
        };
        return b
    }(i.Component);

    function a(a) {
        var b = d("PolarissuggestedUserSelectors").getSuggestions(a);
        a = d("PolarisuserSelectors").getUsersByIds(a, b) || [];
        return {
            users: a
        }
    }

    function b(a) {
        return {
            onLoadSuggestions: function() {
                a(d("PolarisUserActions").loadSULV2())
            }
        }
    }
    f = d("react-redux-wwwig").connect(a, b)(e);
    g["default"] = f
}, 98);