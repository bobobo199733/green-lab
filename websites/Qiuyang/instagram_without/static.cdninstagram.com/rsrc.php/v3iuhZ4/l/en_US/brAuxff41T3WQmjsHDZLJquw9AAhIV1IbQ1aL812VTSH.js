if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("LSVec", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a.slice(0);
        a.tag = "ls-array";
        return a
    }

    function b(a) {
        return a
    }
    c = {
        make: a,
        toArray: b
    };
    f["default"] = c
}, 66);
__d("PolarissourceVideoFactory", [], function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        dataURL: "",
        file: new Blob(),
        height: 0,
        videoDurationMs: 0,
        width: 0
    };

    function a(a) {
        a === void 0 && (a = {});
        return babelHelpers["extends"]({}, g, a)
    }
    f["default"] = a
}, 66);
__d("PolariscreationMediaFactory", ["PolarisCreationConstants", "PolarisCreationV2State", "PolarissourceImageFactory", "PolarissourceVideoFactory"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = {
        adjustmentParams: {
            brightness: 0,
            contrast: 0,
            saturation: 0,
            temperature: 0,
            vignette: 0,
            fade: 0
        },
        altText: "",
        audio: d("PolarisCreationV2State").AUDIO_STATUS.none,
        coverPhoto: null,
        croppedCanvas: null,
        filteredBlob: null,
        filteredMedia: null,
        filteredThumbnails: null,
        filters: {
            filterName: "normal",
            filterStrength: 100
        },
        id: null,
        image: null,
        originalAspectRatio: 1,
        panningOffsetRatioX: 0,
        panningOffsetRatioY: 0,
        scale: 1,
        tags: new Map(),
        trim: null,
        transferProgress: null,
        type: "image",
        uploadId: null,
        video: null
    };
    var h = babelHelpers["extends"]({}, b, {
            image: c("PolarissourceImageFactory")()
        }),
        i = babelHelpers["extends"]({}, b, {
            coverPhoto: {
                placeholders: [],
                selectedCoverPhoto: c("PolarissourceImageFactory")(),
                selectedCoverPhotoTime: d("PolarisCreationConstants").DEFAULT_VIDEO_COVER_TIME
            },
            type: "video",
            video: c("PolarissourceVideoFactory")()
        });

    function a(a, b) {
        return b === "image" ? babelHelpers["extends"]({}, h, a) : babelHelpers["extends"]({}, i, a)
    }
    g["default"] = a
}, 98);
__d("PolariseditPostFactory", ["PolarisCreationV2State", "PolariscreationMediaFactory"], function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        a = a.usertags;
        var b = new Map();
        if (a != null)
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
                var f = {
                    position: [e.x, e.y],
                    userId: e.user.id,
                    username: e.user.username
                };
                b.set(e.user.id, f)
            }
        return b
    }

    function a(a) {
        var b = new Map(),
            e = function(b) {
                var c, d, e = {};
                c = {
                    dataURL: b.src != null ? b.src : "",
                    file: new Blob(),
                    height: ((c = b.dimensions) == null ? void 0 : c.height) != null ? (c = b.dimensions) == null ? void 0 : c.height : 0,
                    width: ((c = b.dimensions) == null ? void 0 : c.width) != null ? (c = b.dimensions) == null ? void 0 : c.width : 0,
                    orientation: 90,
                    location: null
                };
                e.altText = b.accessibilityCaption != null ? b.accessibilityCaption : "";
                e.filteredMedia = c;
                e.video = b.isVideo != null && b.isVideo === !0 ? {
                    dataURL: b.videoUrl != null ? b.videoUrl : "",
                    file: new Blob(),
                    height: ((d = b.dimensions) == null ? void 0 : d.height) != null ? b.dimensions.height : 0,
                    width: ((d = b.dimensions) == null ? void 0 : d.width) != null ? b.dimensions.width : 0,
                    videoDurationMs: 0
                } : null;
                e.uploadId = a.id;
                e.image = b.isVideo != null && b.isVideo === !1 ? c : null;
                b.isVideo != null && b.isVideo === !0 && (e.coverPhoto = {
                    placeholders: [],
                    selectedCoverPhoto: c,
                    selectedCoverPhotoTime: 0
                });
                e.tags = h(b);
                return e
            };
        if (!a.sidecarChildren || a.sidecarChildren.length === 0) b.set(a.id, babelHelpers["extends"]({}, c("PolariscreationMediaFactory")(e(a), a.isVideo === !0 ? "video" : "image")));
        else
            for (var f = a.sidecarChildren, g = Array.isArray(f), i = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var j;
                if (g) {
                    if (i >= f.length) break;
                    j = f[i++]
                } else {
                    i = f.next();
                    if (i.done) break;
                    j = i.value
                }
                j = j;
                b.set(j.id, babelHelpers["extends"]({}, c("PolariscreationMediaFactory")(e(j), j.isVideo === !0 ? "video" : "image")))
            }
        return Object.freeze({
            advancedSettings: {
                hasAdsEnabled: !1,
                hasCommentsDisabled: a.commentsDisabled != null ? a.commentsDisabled : !1,
                hasLikeViewCountsDisabled: a.likeAndViewCountsDisabled != null ? a.likeAndViewCountsDisabled : !1,
                hasVideoSubtitlesEnabled: !1
            },
            caption: a.caption != null ? a.caption : "",
            cropRatio: a.dimensions != null ? ((j = a.dimensions) == null ? void 0 : j.width) / ((i = a.dimensions) == null ? void 0 : i.height) : 1,
            cropType: d("PolarisCreationV2State").CropTypes.ORIGINAL,
            currentMediaId: !a.sidecarChildren || a.sidecarChildren.length === 0 ? a.id : a.sidecarChildren[0].id,
            eligibleUpcomingEvents: [],
            entryPath: "",
            errorPage: null,
            errorMessage: null,
            hasViewedPhotoTooltip: !1,
            hasViewedReorderTooltip: !1,
            isPosted: !0,
            multiPostOrder: !a.sidecarChildren || a.sidecarChildren.length === 0 ? [a.id] : a.sidecarChildren.map(function(a) {
                return a.id
            }),
            nftAssetInfo: a.nftAssetInfo,
            postedMedia: null,
            location: a.location != null ? {
                address: ((g = a.location) == null ? void 0 : g.slug) != null ? a.location.slug : "",
                external_id: ((f = a.location) == null ? void 0 : f.id) != null ? (e = a.location) == null ? void 0 : e.id : "",
                external_id_source: "",
                lat: ((j = a.location) == null ? void 0 : j.lat) != null ? (i = a.location) == null ? void 0 : i.lat : 0,
                lng: ((g = a.location) == null ? void 0 : g.lng) != null ? (f = a.location) == null ? void 0 : f.lng : 0,
                name: ((e = a.location) == null ? void 0 : e.name) != null ? (j = a.location) == null ? void 0 : j.name : ""
            } : null,
            media: b,
            monetizationEligibility: [],
            sessionId: "",
            shortcode: a.code,
            upcomingEvent: a.upcomingEvent
        })
    }
    g["default"] = a
}, 98);
__d("PolarisViewAccountSheet.react", ["fbt", "PolarisIGCoreBox", "PolarisIGCoreConstants", "PolarisIGCoreSheetOrModal", "PolarisIGCoreText", "PolarisUserAvatar.react", "PolarisUserCardSectionWrapper.react", "PolarisuserSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = h._("About This Account"),
        k = h._("Account Information"),
        l = h._("To help keep our community authentic, we're showing information about accounts that reach a lot of people or advertise on Instagram."),
        m = h._("See why this information is important.");

    function a(a) {
        var b = d("react-redux-wwwig").useSelector(function(b) {
            return d("PolarisuserSelectors").getUserById(b, a.userId)
        });

        function e() {
            var a;
            return i.jsx(c("PolarisUserCardSectionWrapper.react"), {
                borderBottom: !0,
                children: i.jsxs(c("PolarisIGCoreBox"), {
                    alignItems: "center",
                    direction: "column",
                    flex: "grow",
                    padding: 4,
                    children: [i.jsx(c("PolarisUserAvatar.react"), {
                        isLink: !1,
                        profilePictureUrl: b.profilePictureUrl,
                        size: c("PolarisIGCoreConstants").AVATAR_SIZES.large,
                        username: b.username
                    }), i.jsx(c("PolarisIGCoreBox"), {
                        marginTop: 2,
                        children: ((a = b.username) == null ? void 0 : a.length) ? i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                            children: b.username
                        }) : null
                    })]
                })
            })
        }
        e.displayName = e.name + " [from " + f.id + "]";

        function g() {
            return i.jsxs(c("PolarisIGCoreBox"), {
                alignContent: "start",
                direction: "column",
                flex: "grow",
                padding: 4,
                children: [i.jsx(c("PolarisIGCoreText"), {
                    display: "inline",
                    weight: "semibold",
                    children: k
                }), i.jsx(c("PolarisIGCoreBox"), {
                    marginTop: 2,
                    children: i.jsxs(c("PolarisIGCoreText").Body, {
                        display: "inline",
                        children: [l, "\xa0", m]
                    })
                })]
            })
        }
        g.displayName = g.name + " [from " + f.id + "]";
        return i.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
            onClose: a.onClose,
            title: j,
            children: i.jsxs(c("PolarisIGCoreBox"), {
                paddingY: 2,
                children: [e(), g()]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastAboutThisAccountModal.react", ["AboutThisAccountRefererTypes", "PolarisAboutThisAccountModal.react", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        if (a.owner) return h.jsx(c("PolarisAboutThisAccountModal.react"), {
            onClose: b,
            referer_type: c("AboutThisAccountRefererTypes").FEED,
            user: a.owner
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastAdDebugToolModal.react", ["PolarisAdDebugToolModalContent.react", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        return h.jsx(c("PolarisAdDebugToolModalContent.react"), {
            forFeed: !0,
            onClose: b,
            post: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastCopyModal.react", ["PolarisCopyLinkModal.react", "PolarisPostShareUtils", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        a = d("PolarisPostShareUtils").getCopyUrl(a);
        return h.jsx(c("PolarisCopyLinkModal.react"), {
            onClose: b,
            postUrl: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastDeleteModal.react", ["fbt", "IGCoreDialog", "PolarisGenericStrings", "PolarisLinkBuilder", "PolarisPostActions", "PolarisRoutes", "PolarisUA", "PolarisuserSelectors", "nullthrows", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = h._("Delete post?");

    function a(a) {
        var b = a.location,
            e = a.onClose,
            f = a.post,
            g = d("react-redux-wwwig").useDispatch(),
            k = d("react-redux-wwwig").useSelector(function(a) {
                return d("PolarisuserSelectors").getViewer(a)
            });
        a = function() {
            var a;
            if (b != null && d("PolarisUA").isDesktop()) {
                var h;
                b.pathname !== d("PolarisRoutes").FEED_PATH && (a = b.pathname);
                ((h = a) == null ? void 0 : h.startsWith("/p/")) && (a = d("PolarisLinkBuilder").buildUserLink(c("nullthrows")(k == null ? void 0 : k.username)))
            }
            g(d("PolarisPostActions").deletePost(f.id, a));
            e()
        };
        return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
            body: h._("Are you sure you want to delete this post?"),
            title: j,
            children: [i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                color: "ig-error-or-destructive",
                onClick: a,
                children: d("PolarisGenericStrings").DELETE_TEXT
            }), i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: e,
                children: d("PolarisGenericStrings").CANCEL_TEXT
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisInstagramAdDirectReshareSendFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("instagram_ad_direct_reshare_send", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisPostFastDirectShareSheet.react", ["PolarisContainerModuleUtils", "PolarisDirectActions", "PolarisDirectLogger", "PolarisDirectSearchUserContainer.react", "PolarisDirectShareSheet.react", "PolarisDirectStrings", "PolarisInstagramAdDirectReshareSendFalcoEvent", "PolarisInteractionsLogger", "PolarisLogger", "PolarisODS", "PolarisPostActions", "PolarisPostTypeUtils", "PolarisViewpointActionUtils", "PolarisadsSelectors", "PolarisrelationshipSelectors", "PostFastDirectShareSheetModal", "gkx", "react", "react-redux-wwwig", "usePolarisAnalyticsContext", "usePolarisMQTT"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useEffect;

    function a(a) {
        var b = a.onClose,
            e = a.post,
            f = d("react-redux-wwwig").useDispatch(),
            g = c("usePolarisMQTT")(),
            j = c("usePolarisAnalyticsContext")(),
            k = d("PolarisPostTypeUtils").getPostType(e),
            l = d("PolarisadsSelectors").useFeedAdInfo(e.id, function(a) {
                return a
            }),
            m = d("PolarisViewpointActionUtils").getMPKForFeedMedia(e) || "",
            n = (a = e.owner) == null ? void 0 : a.id,
            o = d("PolarisInteractionsLogger").getMediaTypeFromPost(e),
            p = d("PolarisrelationshipSelectors").useRelationship(n || "");
        i(function() {
            c("gkx")("4908") || d("PolarisLogger").logAction_DEPRECATED("shareClick", {
                source: j,
                type: k
            }), f(d("PolarisPostActions").loadPostShareIds(e.id, e.code))
        }, [j, f, e.code, e.id, k]);
        var q = function() {
            b()
        };
        a = function(a, b) {
            q();
            var h = j;
            d("PolarisDirectLogger").DirectLogger.logDirectEvent(d("PolarisDirectShareSheet.react").PAGE_ID, "share_sheet_send", {
                referral: h
            });
            b != null && b !== "" ? f(d("PolarisDirectActions").sendPostToUsers(g, String(e.id), a, b)) : f(d("PolarisDirectActions").sendPostToUsers(g, String(e.id), a));
            if (l != null && l.ad_id != null && l.tracking_token != null && p != null) {
                var i = d("PolarisContainerModuleUtils").getContainerModule(j);
                c("PolarisODS").incr("web.ads.feed.share");
                c("PolarisInstagramAdDirectReshareSendFalcoEvent").log(function() {
                    return {
                        a_pk: n,
                        ad_id: l.ad_id,
                        follow_status: d("PolarisViewpointActionUtils").getFollowStatus(p),
                        m_pk: m,
                        m_t: o,
                        pigeon_reserved_keyword_module: i,
                        source_of_action: i,
                        tracking_token: l.tracking_token
                    }
                })
            }
        };
        var r = g != null;
        return r && e.id != null && e.id.length > 0 && h.jsx(c("PostFastDirectShareSheetModal"), {
            "aria-label": d("PolarisDirectStrings").SHARE_TITLE,
            fixedHeight: !1,
            onClose: q,
            size: "large",
            children: h.jsx(c("PolarisDirectSearchUserContainer.react"), {
                backAction: q,
                forwardAction: a,
                forwardText: d("PolarisDirectStrings").SEND_BUTTON_STRING,
                includeGroup: !0,
                isModal: !0,
                isShareSheet: !0,
                pageId: d("PolarisDirectShareSheet.react").PAGE_ID,
                title: d("PolarisDirectStrings").SHARE_TITLE
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastEditModal.react", ["PolarisCreationModal.react", "PolariseditPostFactory", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        a.location;
        var b = a.onClose;
        a = a.post;
        a = c("PolariseditPostFactory")(a);
        a = {
            beginningState: a,
            onClose: b
        };
        return h.jsx(c("PolarisCreationModal.react"), {
            editPostInfo: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastEmbedModal.react", ["PolarisEmbedModal.react", "nullthrows", "react", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b, d = a.onClose;
        a = a.post;
        var e = c("usePolarisAnalyticsContext")(),
            f = a.code || "",
            g = a.productType;
        b = c("nullthrows")((b = a.owner) == null ? void 0 : b.id);
        return h.jsx(c("PolarisEmbedModal.react"), {
            analyticsContext: e,
            code: f,
            id: a.id,
            onClose: d,
            ownerId: b,
            productType: g
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisFRXPostOptionReportAdModalBase.react", ["PolarisFRXReportModal.react", "PolarisPageIdentifierConstants", "PolarisReportConstants", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i(a) {
        switch (a) {
            case "feed":
            case c("PolarisPageIdentifierConstants").feedPage:
            case c("PolarisPageIdentifierConstants").adsSettingsPage:
            case c("PolarisPageIdentifierConstants").adsActivityFeed:
                return d("PolarisReportConstants").FRXLocation.FEED;
            default:
                return d("PolarisReportConstants").FRXLocation.POST
        }
    }

    function a(a) {
        var b = a.adID,
            e = a.analyticsContext,
            f = a.containerModule,
            g = a.frxEntryPoint,
            j = a.frxObjectType,
            k = a.onClose,
            l = a.ownerID,
            m = a.ownerProfilePicURL;
        a = a.ownerUsername;
        e = i(e);
        return h.jsx(c("PolarisFRXReportModal.react"), {
            containerModule: f,
            frxEntryPoint: g,
            frxLocation: e,
            frxObjectType: j,
            onClose: function() {
                return k && k()
            },
            reportedObjectID: b,
            reportedOwner: {
                id: l,
                username: a,
                profilePicURL: m
            },
            useSimpleBlockModalWithoutRefresh: e === d("PolarisReportConstants").FRXLocation.POST
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastHideAdModal.react", ["PolarisFRXPostOptionReportAdModalBase.react", "PolarisReportConstants", "PolarisadsSelectors", "react", "usePolarisAnalyticsContext", "usePolarisPost"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        var e = d("usePolarisPost").usePostAndOwner(a.id, function(a, b) {
                return b.id
            }),
            f = d("usePolarisPost").usePostAndOwner(a.id, function(a, b) {
                return b.username
            }),
            g = d("usePolarisPost").usePostAndOwner(a.id, function(a, b) {
                return b.profilePictureUrl
            }),
            i = c("usePolarisAnalyticsContext")();
        a = d("PolarisadsSelectors").useFeedAdInfo(a.id, function(a) {
            return a == null ? void 0 : a.ad_id
        });
        return a == null ? null : h.jsx(c("PolarisFRXPostOptionReportAdModalBase.react"), {
            adID: a,
            analyticsContext: i,
            frxEntryPoint: d("PolarisReportConstants").FRXEntryPoint.HIDE_AD_BUTTON,
            frxObjectType: d("PolarisReportConstants").FRXObjectType.AD,
            onClose: b,
            ownerID: e,
            ownerProfilePicURL: g,
            ownerUsername: f
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionAboutThisAccount.react", ["fbt", "IGCoreDialog", "PolarisAboutThisAccountUtils", "PolarisPostModalContext.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a.onClose;
        a = a.post;
        a = a.owner;
        a = a != null && d("PolarisAboutThisAccountUtils").getUserIsEligibleToViewAccountTransparency(a);
        var b = d("PolarisPostModalContext.react").useSetPostModal();
        if (!a) return null;
        a = function() {
            b("aboutThisAccount")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: h._("About this account")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionAdsLearnMore.react", ["fbt", "IGCoreDialog", "PolarisExternalLink.react", "PolarisIGCoreText", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = "https://help.instagram.com/478880589321969";

    function a(a) {
        a.onClose;
        a.post;
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            children: i.jsx(c("PolarisExternalLink.react"), {
                href: j,
                children: i.jsx(c("PolarisIGCoreText").Body, {
                    children: h._("About Instagram Ads")
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostOwnerUtils", ["PolarisConfig"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return ((a = a.owner) == null ? void 0 : a.id) === d("PolarisConfig").getViewerId()
    }
    g.getPostOwnedByViewer = a
}, 98);
__d("PolarisPostFastOptionDelete.react", ["fbt", "IGCoreDialog", "PolarisLogger", "PolarisODS", "PolarisPostModalContext.react", "PolarisPostOwnerUtils", "PolarisPostTypeUtils", "PolarisUA", "PolarisgetPostFromGraphMediaInterface", "gkx", "react", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a.onClose;
        a = a.post;
        var b = d("PolarisPostOwnerUtils").getPostOwnedByViewer(a),
            e = d("PolarisPostTypeUtils").getPostType(a),
            f = c("usePolarisAnalyticsContext")();
        a = d("PolarisgetPostFromGraphMediaInterface").isIGTVPost(a);
        var g = d("PolarisPostModalContext.react").useSetPostModal();
        a = d("PolarisUA").isMobile() || a;
        d("PolarisUA").isDesktop() && (a = !0);
        if (!b || !a) return null;
        b = function() {
            c("gkx")("4909") || d("PolarisLogger").logAction_DEPRECATED("delete_post_click", {
                source: f,
                type: e
            }), c("PolarisODS").incr("web.delete_post.click"), g("delete")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            onClick: b,
            children: h._("Delete")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionDemote.react", ["IGCoreDialog", "PolarisPageIdentifierConstants", "PolarisPanavisionQEHelpers", "PolarisPostActions", "react", "react-redux-wwwig", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose,
            e = a.post,
            f = d("react-redux-wwwig").useDispatch();
        a = c("usePolarisAnalyticsContext")();
        var g = e.feedDemotionControl,
            i = e.feedRecsDemotionControl;
        if (g == null && i == null || a !== c("PolarisPageIdentifierConstants").feedPage) return null;
        if (g != null && !d("PolarisPanavisionQEHelpers").hasDemoteControl()) return null;
        if (i != null && !d("PolarisPanavisionQEHelpers").hasDemoteControlUnconnectedFeed()) return null;
        a = function() {
            f(d("PolarisPostActions").hidePost({
                postId: e.id,
                inventorySource: i != null ? "explore_story" : "media_or_ad"
            })), b()
        };
        g = (g = (g = e.feedDemotionControl) == null ? void 0 : g.title) != null ? g : (g = e.feedRecsDemotionControl) == null ? void 0 : g.title;
        return h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: g
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionEdit.react", ["fbt", "IGCoreDialog", "PolarisODS", "PolarisPostModalContext.react", "PolarisPostOwnerUtils", "PolarisQEHelper", "PolarisUA", "PolarisgetPostFromGraphMediaInterface", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a.onClose;
        a = a.post;
        var b = d("PolarisPostOwnerUtils").getPostOwnedByViewer(a);
        a = d("PolarisgetPostFromGraphMediaInterface").isIGTVPost(a);
        var e = d("PolarisPostModalContext.react").useSetPostModal();
        a = !a && d("PolarisUA").isDesktop() && d("PolarisQEHelper").hasFeedCreation();
        if (!b || !a) return null;
        b = function() {
            c("PolarisODS").incr("web.profile.edit_post_click"), e("edit")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: b,
            children: h._("Edit")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionEmbed.react", ["fbt", "IGCoreDialog", "PolarisLogger", "PolarisODS", "PolarisPostModalContext.react", "PolarisPostTypeUtils", "PolarisgetPostFromGraphMediaInterface", "gkx", "react", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a.onClose;
        var b = a.post,
            e = b.owner;
        a = e != null && d("PolarisgetPostFromGraphMediaInterface").getUserIsEmbeddable(e);
        var f = d("PolarisPostModalContext.react").useSetPostModal(),
            g = c("usePolarisAnalyticsContext")(),
            j = d("PolarisPostTypeUtils").getPostType(b);
        if (!a) return null;
        a = function() {
            c("gkx")("5028") || d("PolarisLogger").logAction_DEPRECATED("embedCodeClick", {
                mediaId: b.id,
                ownerId: e == null ? void 0 : e.id,
                source: g,
                type: j
            }), c("PolarisODS").incr("web.embed.code.click"), f("embed")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: h._("Embed")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionFavorite.react", ["IGCoreDialog", "PolarisFavoritesStrings", "PolarisPageIdentifierConstants", "PolarisRelationshipActions", "PolarisrelationshipSelectors", "gkx", "react", "react-redux-wwwig", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        var e = d("react-redux-wwwig").useDispatch(),
            f = a.owner,
            g = c("usePolarisAnalyticsContext")();
        a = d("PolarisrelationshipSelectors").useRelationship(((a = a.owner) == null ? void 0 : a.id) || "");
        var i = a != null && d("PolarisrelationshipSelectors").favoritedByViewer(a);
        a = a != null && d("PolarisrelationshipSelectors").followedByViewer(a);
        var j = function() {
            if (!f) return;
            i ? e(d("PolarisRelationshipActions").unfavoriteUser(f.id, g)) : e(d("PolarisRelationshipActions").favoriteUser(f.id, g));
            b()
        };
        return !a || !(g === c("PolarisPageIdentifierConstants").feedPage || g === c("PolarisPageIdentifierConstants").postPage) || c("gkx")("986") === !0 ? null : h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: j,
            children: i ? d("PolarisFavoritesStrings").UNFAVORITE_MENU_TEXT : d("PolarisFavoritesStrings").FAVORITE_MENU_TEXT
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionGoToPost.react", ["fbt", "IGCoreDialog", "PolarisPageIdentifierConstants", "PolarisPostShareUtils", "PolarisnavigationSelectors", "browserHistory", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b;
        a = a.post;
        var e = d("react-redux-wwwig").useSelector(d("PolarisnavigationSelectors").selectPageIdentifier);
        b = !!((b = a.code) == null ? void 0 : b.length) && e !== c("PolarisPageIdentifierConstants").postPage;
        var f = d("PolarisPostShareUtils").getShareURL(a);
        if (!b) return null;
        e = function() {
            d("browserHistory").browserHistory.push(f)
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            "data-testid": void 0,
            onClick: e,
            children: h._("Go to post")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionHideAd.react", ["PolarisHideAdDialogItem.react", "PolarisODS", "PolarisPageIdentifierConstants", "PolarisPostModalContext.react", "PolarisViewpointActionUtils", "PolarisadsSelectors", "react", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        a.onClose;
        a = a.post;
        var b = d("PolarisPostModalContext.react").useSetPostModal(),
            e = c("usePolarisAnalyticsContext")(),
            f = d("PolarisadsSelectors").useFeedAdInfo(a.id, function(a) {
                return a == null ? void 0 : a.ad_id
            }),
            g = d("PolarisadsSelectors").useFeedAdInfo(a.id, function(a) {
                return a == null ? void 0 : a.tracking_token
            });
        a = d("PolarisViewpointActionUtils").getMPKForFeedMedia(a);
        if (e !== c("PolarisPageIdentifierConstants").feedPage) return null;
        e = function() {
            c("PolarisODS").incr("web.ads.feed.hide_option.click"), b("hideAd")
        };
        return h.jsx(c("PolarisHideAdDialogItem.react"), {
            adId: f,
            adTrackingToken: g,
            mpk: a,
            onClick: e
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionNominate.react", ["fbt", "IGCoreDialog", "PolarisAPI", "PolarisgetPostFromGraphMediaInterface", "gkx", "react", "usePolarisShowToast"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a.onClose;
        var b = a.post,
            e = c("usePolarisShowToast")();
        a = function() {
            d("PolarisAPI").nominateClipsMedia(b.id, b).then(function(a) {
                e({
                    text: "Thank you! We'll consider your nomination."
                })
            }, function(a) {
                e({
                    text: "Request can't be completed. Try again later."
                })
            })
        };
        return c("gkx")("4920") && d("PolarisgetPostFromGraphMediaInterface").isClipsPost(b) ? i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: h._("Nominate")
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionReport.react", ["fbt", "IGCoreDialog", "PolarisLinkBuilder", "PolarisPostModalContext.react", "PolarisPostOwnerUtils", "PolarisgetPostFromGraphMediaInterface", "PolarisisUserLoggedIn", "browserHistory", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = h._("Report");

    function a(a) {
        var b = a.post;
        a = d("PolarisPostOwnerUtils").getPostOwnedByViewer(b);
        var c = d("PolarisPostModalContext.react").useSetPostModal();
        if (a) return null;
        a = function() {
            if (!d("PolarisisUserLoggedIn").isUserLoggedIn()) {
                var a = b.code;
                a = a != null ? d("PolarisgetPostFromGraphMediaInterface").isClipsPost(b) ? d("PolarisLinkBuilder").buildClipsMediaLink(a) : d("PolarisLinkBuilder").buildMediaLink(a) : window.location.href;
                d("browserHistory").redirect(d("PolarisLinkBuilder").buildLoginLink(a, {
                    source: "logged_out_post_report_redirect"
                }))
            } else c("report")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            "data-testid": void 0,
            onClick: a,
            children: j
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionReportAd.react", ["PolarisODS", "PolarisPageIdentifierConstants", "PolarisPostModalContext.react", "PolarisPostOwnerUtils", "PolarisReportAdDialogItem.react", "PolarisViewpointActionUtils", "PolarisadsSelectors", "PolarisisUserLoggedIn", "react", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        a.onClose;
        a = a.post;
        var b = d("PolarisPostOwnerUtils").getPostOwnedByViewer(a),
            e = d("PolarisPostModalContext.react").useSetPostModal(),
            f = c("usePolarisAnalyticsContext")(),
            g = d("PolarisadsSelectors").useFeedAdInfo(a.id, function(a) {
                return a == null ? void 0 : a.ad_id
            }),
            i = d("PolarisadsSelectors").useFeedAdInfo(a.id, function(a) {
                return a == null ? void 0 : a.tracking_token
            }),
            j = d("PolarisViewpointActionUtils").getMPKForFeedMedia(a);
        if (f !== c("PolarisPageIdentifierConstants").feedPage) return null;
        if (b) return null;
        f = function() {
            d("PolarisisUserLoggedIn").isUserLoggedIn() && (c("PolarisODS").incr("web.ads.feed.report_option.click"), e("reportAd"))
        };
        return h.jsx(c("PolarisReportAdDialogItem.react"), {
            adId: g,
            adTrackingToken: i,
            mpk: j,
            onClick: f,
            post: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionShare.react", ["fbt", "IGCoreDialog", "PolarisPostModalContext.react", "PolarisPostShareUtils", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a.onClose;
        a = a.post;
        var b = d("PolarisPostModalContext.react").useSetPostModal();
        if (a.owner == null) return null;
        a = d("PolarisPostShareUtils").getIsShareable(a, a.owner);
        return !a ? null : i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            "data-testid": void 0,
            onClick: function() {
                return b("share")
            },
            children: h._("Share to...")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionToggleCommenting.react", ["fbt", "IGCoreDialog", "PolarisGenericStrings", "PolarisInstapi", "PolarisODS", "PolarisPostActionTypes", "PolarisPostActions", "PolarisPostOwnerUtils", "PolarisQEHelper", "PolarisToastActions", "PolarisUA", "PolarisgetPostFromGraphMediaInterface", "react", "react-redux-wwwig", "regeneratorRuntime"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var e = a.onClose,
            f = a.post;
        a = d("PolarisPostOwnerUtils").getPostOwnedByViewer(f);
        var g = d("PolarisgetPostFromGraphMediaInterface").isIGTVPost(f),
            j = d("PolarisgetPostFromGraphMediaInterface").isPostCommentingOff(f);
        g = !g && d("PolarisUA").isDesktop() && d("PolarisQEHelper").hasFeedCreation();
        var k = d("PolarisgetPostFromGraphMediaInterface").getPostShortCode(f),
            l = d("react-redux-wwwig").useDispatch();
        if (!a || !g) return null;

        function m(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        if (!(a === !0)) {
                            c.next = 5;
                            break
                        }
                        l({
                            type: d("PolarisPostActionTypes").ENABLE_POST_COMMENTS,
                            postId: f.id
                        });
                        c.next = 4;
                        return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiPost("/api/v1/media/{compound_media_id}/enable_comments/", {
                            path: {
                                compound_media_id: f.id
                            }
                        }));
                    case 4:
                        return c.abrupt("return", c.sent);
                    case 5:
                        l({
                            type: d("PolarisPostActionTypes").DISABLE_POST_COMMENTS,
                            postId: f.id
                        });
                        c.next = 8;
                        return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiPost("/api/v1/media/{compound_media_id}/disable_comments/", {
                            path: {
                                compound_media_id: f.id
                            }
                        }));
                    case 8:
                        return c.abrupt("return", c.sent);
                    case 9:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        }
        var n = function(a) {
            c("PolarisODS").incr("web.profile.edit_post_click"), c("PolarisODS").incr("web.edit.toggle_commenting"), a === !0 ? c("PolarisODS").incr("web.edit.toggle_commenting_on") : c("PolarisODS").incr("web.edit.toggle_commenting_off")
        };
        a = function() {
            var a = !1;
            n(j);
            m(j).then(function() {
                a || l(d("PolarisPostActions").loadPost(k != null ? k : "", f.id))
            })["catch"](function() {
                l(d("PolarisToastActions").showToast({
                    text: d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE
                })), l(d("PolarisPostActions").loadPost(k != null ? k : "", f.id))
            });
            e();
            return function() {
                a = !0
            }
        };
        return i.jsxs(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: [j && h._("Turn on commenting"), !j && h._("Turn off commenting")]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionToggleViewLikeCount.react", ["fbt", "IGCoreDialog", "PolarisGenericStrings", "PolarisInstapi", "PolarisODS", "PolarisPostActionTypes", "PolarisPostActions", "PolarisPostOwnerUtils", "PolarisQEHelper", "PolarisToastActions", "PolarisUA", "PolarisgetPostFromGraphMediaInterface", "react", "react-redux-wwwig", "regeneratorRuntime"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var e = a.onClose,
            f = a.post;
        a = d("PolarisPostOwnerUtils").getPostOwnedByViewer(f);
        var g = d("PolarisgetPostFromGraphMediaInterface").isIGTVPost(f),
            j = d("PolarisgetPostFromGraphMediaInterface").isPostLikeViewCountVisible(f);
        g = !g && d("PolarisUA").isDesktop() && d("PolarisQEHelper").hasFeedCreation();
        var k = d("react-redux-wwwig").useDispatch(),
            l = d("PolarisgetPostFromGraphMediaInterface").getPostShortCode(f);
        if (!a || !g) return null;

        function m(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        a === !0 ? k({
                            type: d("PolarisPostActionTypes").HIDE_POST_LIKE_COUNT,
                            postId: f.id
                        }) : k({
                            type: d("PolarisPostActionTypes").UNHIDE_POST_LIKE_COUNT,
                            postId: f.id
                        });
                        c.next = 3;
                        return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiPost("/api/v1/media/update_like_and_view_counts_visibility/", {
                            body: {
                                like_and_view_counts_disabled: j,
                                media_id: f.id
                            }
                        }));
                    case 3:
                        return c.abrupt("return", c.sent);
                    case 4:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        }
        var n = function(a) {
            c("PolarisODS").incr("web.profile.edit_post_click"), c("PolarisODS").incr("web.edit.toggle_like_count_visibility"), a === !0 ? c("PolarisODS").incr("web.edit.toggle_like_count_visibility_hidden") : c("PolarisODS").incr("web.edit.toggle_like_count_visibility_unhidden")
        };
        a = function() {
            var a = !1;
            n(j);
            m(j).then(function() {
                a || k(d("PolarisPostActions").loadPost(l != null ? l : "", f.id))
            })["catch"](function() {
                k(d("PolarisToastActions").showToast({
                    text: d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE
                })), k(d("PolarisPostActions").loadPost(l != null ? l : "", f.id))
            });
            e();
            return function() {
                a = !0
            }
        };
        return i.jsxs(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: [j && h._("Hide like count"), !j && h._("Unhide like count")]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionUnfollow.react", ["fbt", "IGCoreDialog", "PolarisConnectionsLogger", "PolarisGroupProfileUtils", "PolarisPostModalContext.react", "PolarisProfileStrings", "PolarisrelationshipSelectors", "react", "react-redux-wwwig", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = h._("Unfollow");

    function k(a, b) {
        b = b.owner;
        if (!b) return !1;
        a = d("PolarisrelationshipSelectors").getRelationship(a.relationships, b.id);
        return d("PolarisrelationshipSelectors").followedByViewer(a)
    }

    function a(a) {
        var b;
        a.onClose;
        var e = a.post;
        a = d("react-redux-wwwig").useSelector(function(a) {
            return k(a, e)
        });
        var f = d("PolarisPostModalContext.react").useSetPostModal(),
            g = d("PolarisGroupProfileUtils").getIsGroupProfilePostAttributionEnabled() && e.group != null && d("PolarisGroupProfileUtils").getIsUserGroupProfile(e.group),
            h = d("PolarisGroupProfileUtils").getIsGroupProfilePostAttributionEnabled() && ((b = e.group) == null ? void 0 : b.id) != null && g ? (b = e.group) == null ? void 0 : b.id : (b = e.owner) == null ? void 0 : b.id,
            l = c("usePolarisAnalyticsContext")();
        if (!a) return null;
        b = function() {
            d("PolarisConnectionsLogger").logConnectionAction({
                eventName: "unfollow_button_tapped",
                containerModule: l,
                targetId: h
            }), f("unfollow")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            "data-testid": void 0,
            onClick: b,
            children: g ? d("PolarisProfileStrings").LEAVE_GROUP_PROFILE_TEXT : j
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionViewAccount.react", ["fbt", "IGCoreDialog", "PolarisPostModalContext.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a.onClose;
        a.post;
        var b = d("PolarisPostModalContext.react").useSetPostModal();
        a = function() {
            b("viewAccount")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: h._("About this account")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionViewTaggedAccounts.react", ["fbt", "IGCoreDialog", "PolarisPostModalContext.react", "PolarisgetPostFromGraphMediaInterface", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a.onClose;
        a = a.post;
        var b = a.usertags;
        b = b != null && b.length > 0;
        var c = d("PolarisPostModalContext.react").useSetPostModal();
        a = d("PolarisgetPostFromGraphMediaInterface").isIGTVPost(a);
        if (!b || !a) return null;
        b = function() {
            c("tagged")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: b,
            children: h._("Tagged accounts")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionWAIST.react", ["PolarisODS", "PolarisPostModalContext.react", "PolarisWAISTDialogItem.react", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = d("PolarisPostModalContext.react").useSetPostModal();
        a = function() {
            c("PolarisODS").incr("web.ads.feed.waist_option.click"), b("whyAmISeeingThisAd")
        };
        return h.jsx(c("PolarisWAISTDialogItem.react"), {
            onClick: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionsModal.react", ["IGCoreDialog", "PolarisAdsGatingHelpers", "PolarisGenericStrings", "PolarisPanavisionQEHelpers", "PolarisPostFastOptionAboutThisAccount.react", "PolarisPostFastOptionAdsLearnMore.react", "PolarisPostFastOptionCopyLink.react", "PolarisPostFastOptionDelete.react", "PolarisPostFastOptionDemote.react", "PolarisPostFastOptionEdit.react", "PolarisPostFastOptionEmbed.react", "PolarisPostFastOptionFavorite.react", "PolarisPostFastOptionGoToPost.react", "PolarisPostFastOptionHideAd.react", "PolarisPostFastOptionNominate.react", "PolarisPostFastOptionReport.react", "PolarisPostFastOptionReportAd.react", "PolarisPostFastOptionShare.react", "PolarisPostFastOptionToggleCommenting.react", "PolarisPostFastOptionToggleViewLikeCount.react", "PolarisPostFastOptionUnfollow.react", "PolarisPostFastOptionViewAccount.react", "PolarisPostFastOptionViewTaggedAccounts.react", "PolarisPostFastOptionWAIST.react", "PolarisPostModalContext.react", "PolarisQEHelper", "PolarisReportUnderLawDialogItem.react", "cr:1468", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var e = a.onClose;
        a = a.post;
        var f = d("PolarisPostModalContext.react").useSetPostModal();
        return a.isSponsored ? h.jsxs(d("IGCoreDialog").IGCoreDialog, {
            onModalClose: e,
            children: [h.jsx(c("PolarisPostFastOptionHideAd.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionReportAd.react"), {
                onClose: e,
                post: a
            }), d("PolarisAdsGatingHelpers").hasAdWAIST() && h.jsx(c("PolarisPostFastOptionWAIST.react"), {}), d("PolarisAdsGatingHelpers").allowWebAdsPostMVP() && h.jsx(c("PolarisPostFastOptionViewAccount.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionAdsLearnMore.react"), {
                onClose: e,
                post: a
            }), b("cr:1468") != null && h.jsx(b("cr:1468"), {
                onClick: function() {
                    f("viewAdDebugTool")
                }
            }), h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: e,
                children: d("PolarisGenericStrings").CANCEL_TEXT
            })]
        }) : h.jsxs(d("IGCoreDialog").IGCoreDialog, {
            "data-testid": void 0,
            onModalClose: e,
            children: [h.jsx(c("PolarisPostFastOptionDelete.react"), {
                onClose: e,
                post: a
            }), d("PolarisQEHelper").hasFeedCreation() && h.jsx(c("PolarisPostFastOptionEdit.react"), {
                onClose: e,
                post: a
            }), d("PolarisQEHelper").hasFeedCreation() && h.jsx(c("PolarisPostFastOptionToggleViewLikeCount.react"), {
                onClose: e,
                post: a
            }), d("PolarisQEHelper").hasFeedCreation() && h.jsx(c("PolarisPostFastOptionToggleCommenting.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionReport.react"), {
                onClose: e,
                post: a
            }), h.jsx(d("PolarisReportUnderLawDialogItem.react").ReportUnderLawDialogItem, {
                contentId: a.id
            }), h.jsx(c("PolarisPostFastOptionUnfollow.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionFavorite.react"), {
                onClose: e,
                post: a
            }), (d("PolarisPanavisionQEHelpers").hasDemoteControl() || d("PolarisPanavisionQEHelpers").hasDemoteControlUnconnectedFeed()) && h.jsx(c("PolarisPostFastOptionDemote.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionNominate.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionGoToPost.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionViewTaggedAccounts.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionShare.react"), {
                onClose: e,
                post: a
            }), h.jsx(d("PolarisPostFastOptionCopyLink.react").PostFastOptionCopyLink, {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionEmbed.react"), {
                onClose: e,
                post: a
            }), h.jsx(c("PolarisPostFastOptionAboutThisAccount.react"), {
                onClose: e,
                post: a
            }), h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: e,
                children: d("PolarisGenericStrings").CANCEL_TEXT
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastReportAdModal.react", ["PolarisContainerModuleUtils", "PolarisFRXPostOptionReportAdModalBase.react", "PolarisReportConstants", "PolarisadsSelectors", "react", "usePolarisAnalyticsContext", "usePolarisPost"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        var e = d("usePolarisPost").usePostAndOwner(a.id, function(a, b) {
                return b.id
            }),
            f = d("usePolarisPost").usePostAndOwner(a.id, function(a, b) {
                return b.username
            }),
            g = d("usePolarisPost").usePostAndOwner(a.id, function(a, b) {
                return b.profilePictureUrl
            }),
            i = c("usePolarisAnalyticsContext")();
        a = d("PolarisadsSelectors").useFeedAdInfo(a.id, function(a) {
            return a == null ? void 0 : a.ad_id
        });
        return a == null ? null : h.jsx(c("PolarisFRXPostOptionReportAdModalBase.react"), {
            adID: a,
            analyticsContext: i,
            containerModule: d("PolarisContainerModuleUtils").getContainerModule(i),
            frxEntryPoint: d("PolarisReportConstants").FRXEntryPoint.REPORT_AD_BUTTON,
            frxObjectType: d("PolarisReportConstants").FRXObjectType.AD,
            onClose: b,
            ownerID: e,
            ownerProfilePicURL: g,
            ownerUsername: f
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastShareSheet.react", ["PolarisLogger", "PolarisPostActions", "PolarisPostShareUtils", "PolarisPostTypeUtils", "PolarisShareHelpers", "PolarisShareSheet.react", "gkx", "react", "react-redux-wwwig", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useEffect;

    function a(a) {
        var b = a.onClose,
            e = a.post,
            f = d("react-redux-wwwig").useDispatch(),
            g = c("usePolarisAnalyticsContext")(),
            j = d("PolarisPostTypeUtils").getPostType(e);
        a = ((a = e.owner) == null ? void 0 : a.username) || "";
        var k = d("PolarisShareHelpers").getShareDescription(a, j);
        a = e.shareIds;
        var l = d("PolarisPostShareUtils").getShareURL(e);
        i(function() {
            c("gkx")("4908") || d("PolarisLogger").logAction_DEPRECATED("shareClick", {
                source: g,
                type: j
            }), f(d("PolarisPostActions").loadPostShareIds(e.id, e.code))
        }, [g, f, e.code, e.id, j]);
        var m = function() {
                b()
            },
            n = function() {
                c("gkx")("4908") || d("PolarisLogger").logAction_DEPRECATED("nativeShareClick", {
                    source: g,
                    type: j
                }), b(), d("PolarisShareHelpers").shareWithNative(k, l, "ig_web_button_native_share")
            };
        if (e.owner == null) return null;
        var o = d("PolarisPostShareUtils").getIsShareable(e, e.owner);
        return h.jsx(c("PolarisShareSheet.react"), {
            analyticsContext: g,
            description: k,
            entityID: e.id,
            entityType: j,
            onClose: m,
            onNativeShare: n,
            shareEnabled: o,
            shareIds: a,
            url: l,
            utmSource: "ig_web_button_share_sheet"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastTaggedModal.react", ["fbt", "PolarisUserTagSheet.react", "nullthrows", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        var e = c("nullthrows")(a.usertags);
        return i.jsx(d("PolarisUserTagSheet.react").UserTagSheet, {
            mediaId: a.id,
            onClose: b,
            title: h._("Tagged"),
            usertags: e
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastUnfollowModal.react", ["PolarisGroupProfileUtils", "PolarisUnfollowDialog.react", "Polarisunexpected", "react", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b, e = a.onClose;
        a = a.post;
        var f = c("usePolarisAnalyticsContext")();
        a = d("PolarisGroupProfileUtils").getIsGroupProfilePostAttributionEnabled() && ((b = a.group) == null ? void 0 : b.id) != null ? (b = a.group) == null ? void 0 : b.id : (b = a.owner) == null ? void 0 : b.id;
        if (a == null) {
            c("Polarisunexpected")("ownerId should not be null for unfollow modal");
            return null
        }
        return h.jsx(c("PolarisUnfollowDialog.react"), {
            analyticsContext: f,
            analyticsExtra: {},
            onClose: e,
            userId: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastViewAccountModal.react", ["PolarisViewAccountSheet.react", "react", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        a = (a = a.owner) == null ? void 0 : a.id;
        var d = c("usePolarisAnalyticsContext")();
        return a == null ? null : h.jsx(c("PolarisViewAccountSheet.react"), {
            analyticsContext: d,
            onClose: b,
            userId: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastWAISTModal.react", ["PolarisWAISTModalContent.react", "PolarisadsSelectors", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        a = d("PolarisadsSelectors").useFeedAdInfo(a.id, function(a) {
            return a == null ? void 0 : a.ad_id
        });
        return a == null ? null : h.jsx(c("PolarisWAISTModalContent.react"), {
            adId: a,
            onClose: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFavoritesModal.react", ["ix", "IGCoreDialog", "IGCoreImage", "PolarisFavoritesModalContext.react", "PolarisFavoritesStrings", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisPanavisionQEHelpers", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useContext;

    function a(a) {
        var b = a.onClose;
        a = j(c("PolarisFavoritesModalContext.react"));
        var e = a.toggleOpen;
        a = function() {
            b(), e()
        };
        return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
            onModalClose: b,
            children: [i.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "center",
                children: [i.jsx(c("PolarisIGCoreBox"), {
                    marginTop: 6,
                    children: i.jsx(c("IGCoreImage"), {
                        alt: d("PolarisFavoritesStrings").FAVORITES_IMAGE_ALT,
                        src: {
                            light: h("258773"),
                            dark: h("258770")
                        }
                    })
                }), i.jsxs(c("PolarisIGCoreBox"), {
                    margin: 6,
                    children: [i.jsx(c("PolarisIGCoreBox"), {
                        marginBottom: 6,
                        children: i.jsx(c("PolarisIGCoreText").Headline2, {
                            textAlign: "center",
                            weight: "semibold",
                            children: d("PolarisFavoritesStrings").FAVORITES_TEXT
                        })
                    }), i.jsx(c("PolarisIGCoreBox"), {
                        paddingX: 8,
                        children: i.jsx(c("PolarisIGCoreText").Body, {
                            color: "ig-primary-text",
                            textAlign: "center",
                            weight: "light",
                            children: d("PolarisFavoritesStrings").FAVORITES_DESCRIPTION_TEXT
                        })
                    })]
                })]
            }), d("PolarisPanavisionQEHelpers").hasFavoritesManagement() && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                color: "ig-primary-button",
                onClick: a,
                children: d("PolarisFavoritesStrings").MANAGE_FAVORITES_TEXT
            }), i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: b,
                children: d("PolarisGenericStrings").OK_TEXT
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostModalEntrypoint.react", ["IGRouter", "PolarisPostFastAboutThisAccountModal.react", "PolarisPostFastAdDebugToolModal.react", "PolarisPostFastCopyModal.react", "PolarisPostFastDeleteModal.react", "PolarisPostFastDirectShareSheet.react", "PolarisPostFastEditModal.react", "PolarisPostFastEmbedModal.react", "PolarisPostFastHideAdModal.react", "PolarisPostFastOptionsModal.react", "PolarisPostFastReportAdModal.react", "PolarisPostFastReportModal.react", "PolarisPostFastShareSheet.react", "PolarisPostFastTaggedModal.react", "PolarisPostFastUnfollowModal.react", "PolarisPostFastViewAccountModal.react", "PolarisPostFastWAISTModal.react", "PolarisPostFavoritesModal.react", "react", "xigRequireInterop"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            copy: c("xigRequireInterop")(b("PolarisPostFastCopyModal.react"))["default"],
            "delete": c("xigRequireInterop")(b("PolarisPostFastDeleteModal.react"))["default"],
            directShare: c("xigRequireInterop")(b("PolarisPostFastDirectShareSheet.react"))["default"],
            edit: c("xigRequireInterop")(b("PolarisPostFastEditModal.react"))["default"],
            embed: c("xigRequireInterop")(b("PolarisPostFastEmbedModal.react"))["default"],
            favorites: c("xigRequireInterop")(b("PolarisPostFavoritesModal.react"))["default"],
            options: c("xigRequireInterop")(b("PolarisPostFastOptionsModal.react"))["default"],
            report: c("xigRequireInterop")(b("PolarisPostFastReportModal.react"))["default"],
            share: c("xigRequireInterop")(b("PolarisPostFastShareSheet.react"))["default"],
            tagged: c("xigRequireInterop")(b("PolarisPostFastTaggedModal.react"))["default"],
            unfollow: c("xigRequireInterop")(b("PolarisPostFastUnfollowModal.react"))["default"],
            hideAd: c("xigRequireInterop")(b("PolarisPostFastHideAdModal.react"))["default"],
            reportAd: c("xigRequireInterop")(b("PolarisPostFastReportAdModal.react"))["default"],
            viewAccount: c("xigRequireInterop")(b("PolarisPostFastViewAccountModal.react"))["default"],
            viewAdDebugTool: c("xigRequireInterop")(b("PolarisPostFastAdDebugToolModal.react"))["default"],
            whyAmISeeingThisAd: c("xigRequireInterop")(b("PolarisPostFastWAISTModal.react"))["default"],
            aboutThisAccount: c("xigRequireInterop")(b("PolarisPostFastAboutThisAccountModal.react"))["default"]
        };

    function a(a) {
        var b = a.location,
            c = a.onClose,
            d = a.openModal;
        a = a.post;
        d = i[d];
        return h.jsx(d, {
            location: b,
            onClose: c,
            post: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("IGRouter").withIGRouter(a);
    g["default"] = e
}, 98); /*FB_PKG_DELIM*/
__d("PolarisPendingCommentActions", ["fbt", "PolarisAPI", "PolarisAdsEngagementLogger", "PolarisEngagementLogger", "PolarisFunctionalityTracker", "PolarisLogger", "PolarisPendingCommentActionTypes", "PolarisPendingCommentState", "PolarisSentryFeedbackActions", "PolarispostSelectors", "PolarisuserSelectors", "gkx", "nullthrows"], function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a, b, c, e, f) {
        return {
            type: d("PolarisPendingCommentActionTypes").CHANGE_PENDING_COMMENT,
            postId: a,
            text: b,
            repliedToCommentId: c,
            repliedToCommentAuthorId: e,
            repliedToUsername: f
        }
    }

    function b(a) {
        return {
            type: d("PolarisPendingCommentActionTypes").CLEAR_PENDING_COMMENT,
            postId: a
        }
    }

    function i(a, b, e, f) {
        var g = new(d("PolarisFunctionalityTracker").FunctionalityTracker)("comment");
        return function(j, k) {
            g.attempt();
            j({
                type: d("PolarisPendingCommentActionTypes").COMMIT_PENDING_COMMENT_REQUESTED,
                postId: a
            });
            c("gkx")("2641") || d("PolarisLogger").logAction_DEPRECATED("comment", {
                source: e
            });
            var l = k(),
                m = l.pendingComments.get(a, d("PolarisPendingCommentState").EMPTY_PENDING_COMMENT),
                n = m.repliedToCommentAuthorId,
                o = m.repliedToCommentId,
                p = m.text;
            m = l.posts.byId.get(a, {
                hasRankedComments: !1
            });
            var q = m.hasRankedComments,
                r = Boolean((m = d("PolarisuserSelectors").getViewer(l)) == null ? void 0 : m.isVerified);
            g.request();
            return d("PolarisAPI").commentOnPost(a, p, o).then(function(h) {
                g.responseSuccess();
                var i = c("nullthrows")(d("PolarisuserSelectors").getViewer(k())).id;
                h = h.id;
                j({
                    type: d("PolarisPendingCommentActionTypes").COMMIT_PENDING_COMMENT_SUCCEEDED,
                    postId: a,
                    commentText: p,
                    hasRankedComments: q,
                    commentAuthorId: i,
                    commentAuthorIsVerified: r,
                    commentId: h,
                    postedAt: Math.round(Date.now() / 1e3),
                    repliedToCommentId: o
                });
                c("gkx")("2641") || d("PolarisLogger").logAction_DEPRECATED("commentSuccess", {
                    source: e
                });
                i = {
                    commentAuthorId: i,
                    commentId: h,
                    containerModule: e,
                    mediaId: a,
                    mediaAuthorId: b,
                    mediaType: d("PolarispostSelectors").getMediaTypeById(l, a),
                    parentCommentId: o,
                    parentCommentAuthorId: n
                };
                f != null ? d("PolarisAdsEngagementLogger").logAdComment(i, f) : d("PolarisEngagementLogger").logOrganicComment(i);
                g.completeSuccess()
            }, function(f) {
                var k;
                g.responseFailure();
                k = ((k = f.responseObject) == null ? void 0 : k.spam) || !1;
                if (k) {
                    var l, m, n;
                    l = (l = f.responseObject) == null ? void 0 : l.feedback_title;
                    m = (m = f.responseObject) == null ? void 0 : m.feedback_message;
                    n = (n = f.responseObject) == null ? void 0 : n.feedback_url;
                    f = (f = f.responseObject) == null ? void 0 : f.feedback_action;
                    j(d("PolarisSentryFeedbackActions").showSentryFeedback({
                        title: l,
                        message: m,
                        url: n,
                        action: f
                    }))
                }
                j({
                    type: d("PolarisPendingCommentActionTypes").COMMIT_PENDING_COMMENT_FAILED,
                    postId: a,
                    toast: k ? void 0 : {
                        text: h._("Couldn't post comment."),
                        actionText: h._("Retry"),
                        actionHandler: function() {
                            return j(i(a, b, e))
                        }
                    }
                });
                c("gkx")("2641") || d("PolarisLogger").logAction_DEPRECATED("commentFailure", {
                    source: e
                });
                g.completeFailure()
            })
        }
    }
    g.changePendingComment = a;
    g.clearPendingComment = b;
    g.commitPendingComment = i
}, 98);
__d("PolarisCommentOptionsDialog.react", ["fbt", "IGCoreDialog", "PolarisFRXReportModal.react", "PolarisGenericStrings", "PolarisReportConstants", "PolarisReportUnderLawDialogItem.react", "PolarisisUserLoggedIn", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useState;

    function a(a) {
        var b = a.canDeleteComment,
            e = a.canPinComment;
        e = e === void 0 ? !1 : e;
        var f = a.commentId,
            g = a.commentOwnerAvatar,
            k = a.commentOwnerId,
            l = a.commentOwnerUsername,
            m = a.mediaOwnerId,
            n = a.onClose,
            o = a.onDelete;
        a = a.onPin;
        var p = j(!1),
            q = p[0],
            r = p[1];
        p = function() {
            r(!0)
        };
        var s = function() {
            n(), r(!1)
        };
        if (q) return i.jsx(c("PolarisFRXReportModal.react"), {
            frxLocation: d("PolarisReportConstants").FRXLocation.COMMENTS,
            frxObjectType: d("PolarisReportConstants").FRXObjectType.COMMENT,
            onClose: s,
            reportedObjectID: f,
            reportedOwner: {
                id: k,
                username: l,
                profilePicURL: g
            },
            useSimpleBlockModalWithoutRefresh: k === m
        });
        q = d("PolarisisUserLoggedIn").isUserLoggedIn() ? i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            onClick: p,
            children: h._("Report")
        }) : i.jsx(d("PolarisReportUnderLawDialogItem.react").ReportUnderLawDialogItem, {
            contentId: f
        });
        return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
            onModalClose: s,
            children: [q, e && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                color: "ig-secondary-button",
                onClick: a,
                children: h._("Pin comment")
            }), b && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                color: "ig-error-or-destructive",
                onClick: o,
                children: h._("Delete")
            }), i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: s,
                children: d("PolarisGenericStrings").CANCEL_TEXT
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisInstagramWebTypeaheadResultSelectFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("instagram_web_typeahead_result_select", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisInstagramWebTypeaheadSearchAttemptFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("instagram_web_typeahead_search_attempt", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisStoryTypeaheadConstants", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "touch_mention";
    f.TOUCH_MENTION_ID = a
}, 66);
__d("PolarisStoryTypeaheadResultsList.react", ["cx", "fbt", "PolarisDOMListener.react", "PolarisIGCorePressable", "PolarisIGVirtualList.react", "PolarisSearchConstants", "PolarisStoryTypeaheadConstants", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = 100,
        l = 6;

    function m(a) {
        return a.filter(function(a) {
            return a.type === d("PolarisSearchConstants").USER_RESULT
        })
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, e;
            for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++) g[h] = arguments[h];
            return (b = e = a.call.apply(a, [this].concat(g)) || this, e.state = {
                results: []
            }, e.$1 = function(a, b) {
                b.preventDefault();
                b = e.props.pendingQueryStartIndex;
                e.props.onResultSelect(a, b)
            }, e.$2 = function(a) {
                var b = a.index;
                a.isVisible;
                var f = e.state.results[b];
                return j.jsxs(c("PolarisIGCorePressable"), {
                    className: "_acn7",
                    id: d("PolarisStoryTypeaheadConstants").TOUCH_MENTION_ID,
                    onPress: function(a) {
                        return e.$1(f, a)
                    },
                    children: [j.jsx("img", {
                        alt: i._("{username}'s profile picture", [i._param("username", f.username)]),
                        className: "_acn8",
                        id: d("PolarisStoryTypeaheadConstants").TOUCH_MENTION_ID,
                        src: f.profilePictureUrl
                    }), j.jsx("div", {
                        className: "_acn9",
                        children: f.username
                    })]
                })
            }, e.$3 = function(a) {
                a.stopPropagation()
            }, b) || babelHelpers.assertThisInitialized(e)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            this.setState({
                results: m(this.props.results)
            })
        };
        b.getDerivedStateFromProps = function(a, b) {
            return babelHelpers["extends"]({}, b, {
                results: m(a.results)
            })
        };
        e.render = function() {
            return j.jsxs("div", {
                className: "_acna",
                id: d("PolarisStoryTypeaheadConstants").TOUCH_MENTION_ID,
                children: [j.jsx(c("PolarisDOMListener.react"), {
                    event: "touchmove",
                    handler: this.$3,
                    passive: !1,
                    target: document
                }), j.jsx(c("PolarisIGVirtualList.react"), {
                    containerSize: "auto",
                    direction: "horizontal",
                    estimatedItemSize: k,
                    initialRenderCount: l,
                    itemCount: this.state.results.length,
                    overscanCount: l,
                    renderer: this.$2
                })]
            })
        };
        return b
    }(j.Component);
    g["default"] = a
}, 98);
__d("PolarisTypeaheadResultsItem.react", ["cx", "fbt", "PolarisPostsStatistic.react", "PolarisSearchConstants", "PolarisSocialProofStatisticVariant", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = c = a.call.apply(a, [this].concat(f)) || this, c.$2 = function(a) {
                c.props.onClick && c.props.onClick(c.props.result, a)
            }, c.$3 = function() {
                c.props.onMouseEnter && c.props.onMouseEnter(c.props.index, d("PolarisSearchConstants").SEARCH_SELECTED_METHOD.SELECTED_WITH_MOUSE)
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.$1 = function(a) {
            a.preventDefault()
        };
        e.$4 = function(a) {
            switch (a.type) {
                case d("PolarisSearchConstants").USER_RESULT:
                    return j.jsxs("div", {
                        className: "_acmr",
                        children: [j.jsx("img", {
                            alt: i._("{username}'s profile picture", [i._param("username", a.username)]),
                            className: "_acms",
                            src: a.profilePictureUrl
                        }), j.jsxs("div", {
                            className: "_acmt",
                            children: [j.jsxs("div", {
                                className: "_acmu",
                                children: [a.username, a.isVerified ? j.jsx("div", {
                                    className: "_acmv _9ys8"
                                }) : null]
                            }), j.jsx("span", {
                                className: "_acmw",
                                children: a.fullName
                            })]
                        })]
                    });
                case d("PolarisSearchConstants").HASHTAG_RESULT:
                    var b = a.mediaCount;
                    return j.jsxs("div", {
                        className: "_acmt",
                        children: [j.jsx("span", {
                            className: "_acmu",
                            children: "#" + a.name
                        }), b != null && j.jsx("div", {
                            className: "_acmw",
                            children: j.jsx(c("PolarisPostsStatistic.react"), {
                                value: b,
                                variant: d("PolarisSocialProofStatisticVariant").SOCIAL_PROOF_STATS_VARIANTS.unstyled
                            })
                        })]
                    });
                case d("PolarisSearchConstants").LOCATION_RESULT:
                    return j.jsxs("div", {
                        className: "_acmt",
                        children: [j.jsx("span", {
                            className: "_acmu",
                            children: a.name
                        }), j.jsx("span", {
                            className: "_acmw",
                            children: a.address
                        })]
                    });
                default:
                    return null
            }
        };
        e.render = function() {
            var a = this.props,
                b = a.isSelected,
                c = a.result,
                d = a.showLargeAvatars;
            a = a.size;
            a = a === void 0 ? "default" : a;
            c = this.$4(c);
            return c ? j.jsx("button", {
                className: (d ? "" : "_acmx") + (d ? " _acmy" : "") + (a === "extraLarge" ? " _acmz" : "") + (b ? " _acm-" : ""),
                onClick: this.$2,
                onMouseDown: this.$1,
                onMouseEnter: this.$3,
                children: c
            }) : null
        };
        return b
    }(j.Component);
    g["default"] = a
}, 98);
__d("PolarisTypeaheadResultsList.react", ["cx", "PolarisIGCoreSpinner", "PolarisSearchConstants", "PolarisTypeaheadResultsItem.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$3 = function(a, b) {
                b.preventDefault();
                b = c.props.pendingQueryStartIndex;
                c.props.onResultSelect(a, b)
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentDidUpdate = function() {
            var a = this.$1;
            if (a && this.props.selectedIndex != null) {
                var b = a.clientHeight,
                    c = 4;
                a.scrollTop = b * Math.floor(this.props.selectedIndex / c)
            }
        };
        e.$2 = function(a) {
            var b = this.props.searchContext;
            switch (b) {
                case d("PolarisSearchConstants").SEARCH_CONTEXT.USER:
                    return a.filter(function(a) {
                        return a.type === d("PolarisSearchConstants").USER_RESULT
                    });
                case d("PolarisSearchConstants").SEARCH_CONTEXT.HASHTAG:
                    return a.filter(function(a) {
                        return a.type === d("PolarisSearchConstants").HASHTAG_RESULT
                    });
                case d("PolarisSearchConstants").SEARCH_CONTEXT.LOCATION:
                    return a.filter(function(a) {
                        return a.type === d("PolarisSearchConstants").LOCATION_RESULT
                    });
                case d("PolarisSearchConstants").SEARCH_CONTEXT.BLENDED:
                default:
                    return a
            }
        };
        e.$4 = function(a) {
            switch (a.type) {
                case d("PolarisSearchConstants").USER_RESULT:
                    return "user_" + a.username;
                case d("PolarisSearchConstants").HASHTAG_RESULT:
                    return "hashtag_" + a.name;
                case d("PolarisSearchConstants").LOCATION_RESULT:
                    return "location_" + a.external_id;
                default:
                    return null
            }
        };
        e.$5 = function(a, b) {
            return i.jsx(c("PolarisTypeaheadResultsItem.react"), {
                index: b,
                isSelected: b === this.props.selectedIndex,
                onClick: this.$3,
                onMouseEnter: this.props.onResultHighlight,
                result: a,
                showLargeAvatars: this.props.showLargeAvatars,
                size: this.props.size
            }, this.$4(a))
        };
        e.render = function() {
            var a = this,
                b = this.props,
                d = b.loading;
            b = b.showResultsCondensed;
            return i.jsxs("div", {
                className: "_acm_",
                children: [d && i.jsx("div", {
                    className: (b ? "_acn0" : "") + (b ? "" : " _acn1"),
                    children: i.jsx("div", {
                        className: "_acn2" + (b ? "" : " _acn3") + (b ? " _acn4" : ""),
                        children: i.jsx(c("PolarisIGCoreSpinner"), {
                            size: "medium"
                        })
                    })
                }), !d && i.jsx("div", {
                    className: "_acn5" + (b ? " _acn6" : ""),
                    ref: function(b) {
                        return a.$1 = b
                    },
                    children: this.$2(this.props.results).map(this.$5, this)
                })]
            })
        };
        return b
    }(i.Component);
    g["default"] = a
}, 98);
__d("PolarisTypeahead.react", ["PolarisConfig", "PolarisIGUsernameRegex", "PolarisInstagramWebTypeaheadResultSelectFalcoEvent", "PolarisInstagramWebTypeaheadSearchAttemptFalcoEvent", "PolarisLogger", "PolarisODS", "PolarisSearchConstants", "PolarisStoryTypeaheadResultsList.react", "PolarisTypeaheadResultsList.react", "PolarisgetIGHashtagRegex", "gkx", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = 10,
        j = new RegExp(d("PolarisgetIGHashtagRegex").HASH_CHARS),
        k = new RegExp(d("PolarisIGUsernameRegex").MENTIONS_MARKER),
        l = {
            typeaheadAttempt: "typeaheadAttempt",
            typeaheadClickSuccess: "typeaheadClickSuccess"
        };

    function m(a) {
        c("gkx")("4928") || d("PolarisLogger").logAction_DEPRECATED(l.typeaheadClickSuccess, {
            searchContext: a
        }), c("PolarisODS").incr("web.typeahead.typeahead_click_success"), c("PolarisInstagramWebTypeaheadResultSelectFalcoEvent").log(function() {
            return {
                frontend_env: d("PolarisConfig").getFrontendEnv(),
                search_context: a
            }
        })
    }

    function n(a) {
        c("gkx")("4928") || d("PolarisLogger").logAction_DEPRECATED(l.typeaheadAttempt, {
            searchContext: a
        }), c("PolarisODS").incr("web.typeahead.typeahead_attempt"), c("PolarisInstagramWebTypeaheadSearchAttemptFalcoEvent").log(function() {
            return {
                frontend_env: d("PolarisConfig").getFrontendEnv(),
                search_context: a
            }
        })
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var e;
            e = a.call(this, b) || this;
            e.$2 = function(a) {
                var b = e.props,
                    f = b.currentLocation;
                b = b.rankToken;
                var g = e.state.searchContext;
                if (g === d("PolarisSearchConstants").SEARCH_CONTEXT.LOCATION) {
                    g = f == null ? void 0 : f.latitude;
                    f = f == null ? void 0 : f.longitude;
                    c("gkx")("4780") ? e.props.onSearchLocations(a, b) : e.props.onSearchLocations(a, b, g, f)
                } else e.props.onSearch(e.state.searchContext, a, b);
                window.clearTimeout(e.$1)
            };
            e.$6 = function() {
                var a = e.props.useSearchTriggers ? null : 0;
                e.setState({
                    pendingQueryStartIndex: a
                }, function() {
                    e.props.onClearSearch()
                })
            };
            e.$7 = function(a, b) {
                e.$6(), e.props.onResultSelect(a, b), m(e.state.searchContext)
            };
            var f = b.useSearchTriggers ? null : 0;
            e.state = {
                pendingQueryStartIndex: f,
                searchContext: b.initialSearchContext
            };
            return e
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            var a = this;
            if (this.props.searchOnMount) {
                var b = this.props,
                    c = b.cursorIndex,
                    d = b.inputString;
                b = b.useSearchTriggers;
                var e = this.state.pendingQueryStartIndex;
                if (e !== null) {
                    var f = b ? d.slice(e, c) : d;
                    window.clearTimeout(this.$1);
                    this.$1 = window.setTimeout(function() {
                        return a.$2(f)
                    }, i);
                    return
                }
            }
        };
        e.componentWillUnmount = function() {
            this.props.onClearSearch(), window.clearTimeout(this.$1)
        };
        e.$3 = function(a) {
            return j.test(a) || k.test(a)
        };
        e.$4 = function(a) {
            return /\s/.test(a)
        };
        e.$5 = function(a) {
            if (j.test(a)) return d("PolarisSearchConstants").SEARCH_CONTEXT.HASHTAG;
            return k.test(a) ? d("PolarisSearchConstants").SEARCH_CONTEXT.USER : d("PolarisSearchConstants").SEARCH_CONTEXT.BLENDED
        };
        e.componentDidUpdate = function(a) {
            var b = this,
                c = this.props,
                d = c.cursorIndex,
                e = c.inputString;
            c = c.useSearchTriggers;
            var f = this.state.pendingQueryStartIndex;
            if (a.inputString !== e || this.props.searchOnMount && d !== a.cursorIndex) {
                var g = e.slice(d - 1, d);
                if (c && this.$3(g)) {
                    a.onClearSearch();
                    a = this.$5(g);
                    this.setState({
                        pendingQueryStartIndex: d,
                        searchContext: a
                    });
                    n(a);
                    return
                }
                if (f !== null && (!e || c && this.$4(g))) {
                    this.$6();
                    return
                }
                if (f !== null) {
                    var h = c ? e.slice(f, d) : e;
                    window.clearTimeout(this.$1);
                    this.$1 = window.setTimeout(function() {
                        return b.$2(h)
                    }, i);
                    return
                }
            }
        };
        e.render = function() {
            var a = this.props,
                b = a.className,
                d = a.loading,
                e = a.results,
                f = a.showLargeAvatars,
                g = a.showResultsCondensed;
            a = a.size;
            var i = this.state,
                j = i.pendingQueryStartIndex;
            i = i.searchContext;
            return h.jsxs("div", {
                className: b,
                children: [j != null && !this.props.searchOnMount && h.jsx(c("PolarisTypeaheadResultsList.react"), {
                    loading: d,
                    onResultHighlight: this.props.onResultHighlight,
                    onResultSelect: this.$7,
                    pendingQueryStartIndex: j,
                    results: e,
                    searchContext: i,
                    selectedIndex: this.props.selectedIndex,
                    showLargeAvatars: f,
                    showResultsCondensed: g,
                    size: a
                }), j != null && this.props.searchOnMount && h.jsx(c("PolarisStoryTypeaheadResultsList.react"), {
                    onResultHighlight: this.props.onResultHighlight,
                    onResultSelect: this.$7,
                    pendingQueryStartIndex: j,
                    results: e,
                    searchContext: i
                })]
            })
        };
        return b
    }(h.Component);
    a.defaultProps = {
        initialSearchContext: d("PolarisSearchConstants").SEARCH_CONTEXT.BLENDED,
        inputString: "",
        showLargeAvatars: !1,
        showResultsCondensed: !0,
        searchOnMount: !1
    };
    g["default"] = a
}, 98);
__d("PolarisTypeaheadContainer.react", ["PolarisSearchActions", "PolarisTypeahead.react", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");

    function a(a) {
        a = a.search;
        return {
            loading: a.loading,
            rankToken: a.rankToken,
            results: a.results,
            selectedIndex: a.selectedIndex
        }
    }

    function b(a) {
        return {
            onClearSearch: function() {
                a(d("PolarisSearchActions").clearSearch())
            },
            onSearch: function(b, c, e) {
                a(d("PolarisSearchActions").search(b, c, e))
            },
            onSearchLocations: function(b, c, e, f) {
                a(d("PolarisSearchActions").searchLocations(b, c, e, f))
            },
            onResultHighlight: function(b, c) {
                a(d("PolarisSearchActions").selectResult(b, c))
            }
        }
    }
    e = d("react-redux-wwwig").connect(a, b)(c("PolarisTypeahead.react"));
    g["default"] = e
}, 98);
__d("PolarisTypeaheadInput.react", ["cx", "Keys", "PolarisSearchActions", "PolarisSearchConstants", "joinClasses", "react", "react-redux-wwwig", "react-textarea-autosize-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, e;
            for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++) g[h] = arguments[h];
            return (b = e = a.call.apply(a, [this].concat(g)) || this, e.state = {
                hasFocus: !1
            }, e.$3 = function(a) {
                e.props.onBlur && e.props.onBlur(a), e.setState({
                    hasFocus: !1
                })
            }, e.$4 = function(a) {
                e.props.onFocus && e.props.onFocus(a), e.setState({
                    hasFocus: !0
                })
            }, e.$5 = function(a) {
                e.props.onChange(a.target.value, a.target.selectionEnd)
            }, e.$2 = function() {
                var a = e.$1;
                a && (a.focus(), a.setSelectionRange(e.props.cursorIndex, e.props.cursorIndex))
            }, e.$6 = function(a) {
                e.$1 = a, e.props.inputRef && e.props.inputRef(a)
            }, e.$7 = function(a) {
                var b = e.props.search,
                    f = b.loading,
                    g = b.results,
                    h = b.searchedForQuery;
                b = b.selectedIndex;
                !a.altKey && (g.length > 0 || f) && (a.which === c("Keys").DOWN ? (b == null ? e.props.onTypeaheadResultHighlight(0, d("PolarisSearchConstants").SEARCH_SELECTED_METHOD.SELECTED_WITH_KEYBOARD) : b < g.length - 1 && e.props.onTypeaheadResultHighlight(b + 1, d("PolarisSearchConstants").SEARCH_SELECTED_METHOD.SELECTED_WITH_KEYBOARD), a.preventDefault()) : a.which === c("Keys").UP ? (b != null && b > 0 && e.props.onTypeaheadResultHighlight(b - 1, d("PolarisSearchConstants").SEARCH_SELECTED_METHOD.SELECTED_WITH_KEYBOARD), a.preventDefault()) : a.which === c("Keys").RETURN && (g != null && g.length > 0 && (b != null ? e.props.onTypeaheadResultSelect(g[b], e.props.cursorIndex - h.length) : e.props.onTypeaheadResultHighlight(0, d("PolarisSearchConstants").SEARCH_SELECTED_METHOD.SELECTED_WITH_KEYBOARD)), a.preventDefault()))
            }, b) || babelHelpers.assertThisInitialized(e)
        }
        var e = b.prototype;
        e.shouldComponentUpdate = function(a, b) {
            return this.props.value !== a.value || this.props.cursorIndex !== a.cursorIndex || this.props.disabled !== a.disabled || this.state.hasFocus !== b.hasFocus
        };
        e.componentDidUpdate = function(a, b) {
            this.state.hasFocus && this.$1 != null && this.props.cursorIndex !== this.$1.selectionEnd && this.$2()
        };
        e.render = function() {
            var a = this.props,
                b = a.autosize,
                d = a.className;
            a.cursorIndex;
            a.inputRef;
            a.onTypeaheadResultHighlight;
            a.onTypeaheadResultSelect;
            a.search;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["autosize", "className", "cursorIndex", "inputRef", "onTypeaheadResultHighlight", "onTypeaheadResultSelect", "search"]);
            d = {
                className: c("joinClasses")("_ablz", d),
                onChange: this.$5,
                onBlur: this.$3,
                onFocus: this.$4,
                onKeyDown: this.$7,
                autoComplete: "off",
                autoCorrect: "off"
            };
            return b === !0 ? i.jsx(c("react-textarea-autosize-wwwig"), babelHelpers["extends"]({}, a, d, {
                ref: this.$6
            })) : i.jsx("textarea", babelHelpers["extends"]({}, a, d, {
                ref: this.$6
            }))
        };
        return b
    }(i.Component);

    function a(a) {
        return {
            search: a.search
        }
    }

    function b(a) {
        return {
            onTypeaheadResultHighlight: function(b, c) {
                a(d("PolarisSearchActions").selectResult(b, c))
            }
        }
    }
    f = d("react-redux-wwwig").connect(a, b)(e);
    g["default"] = f
}, 98);
__d("PolarisupdateTextOnTypeaheadSelect", ["PolarisSearchConstants"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c, e) {
        var f = "";
        switch (a.type) {
            case d("PolarisSearchConstants").USER_RESULT:
                f = a.username;
                break;
            case d("PolarisSearchConstants").HASHTAG_RESULT:
                f = a.name;
                break;
            default:
                return {
                    updatedText: c,
                    updatedCursorIndex: e
                }
        }
        a = " ";
        b = c.substring(0, b);
        c = c.substring(e);
        e = b + f + a + c;
        c = b.length + f.length + a.length;
        return {
            updatedText: e,
            updatedCursorIndex: c
        }
    }
    g["default"] = a
}, 98);
__d("PolarisPostCommentInput.react", ["cx", "fbt", "FastLink", "PolarisEmojiButton.react", "PolarisIGCoreButton", "PolarisIGCoreConstants", "PolarisIGCoreSpinner", "PolarisIGCoreText", "PolarisInteractionsLogger", "PolarisLinkBuilder", "PolarisLogger", "PolarisODS", "PolarisPendingCommentActions", "PolarisRoutes", "PolarisSearchActions", "PolarisTypeaheadContainer.react", "PolarisTypeaheadInput.react", "PolarisUA", "PolarisUserAvatar.react", "PolarisupdateTextOnTypeaheadSelect", "PolarisuserSelectors", "browserHistory", "gkx", "joinClasses", "nullthrows", "one-trace", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = i._("Add a comment\u2026");

    function l(a) {
        a = j.jsx(c("FastLink"), {
            href: d("PolarisLinkBuilder").buildLoginLink(d("browserHistory").browserHistory.location.pathname, {
                source: "post_comment_input"
            }),
            children: j.jsx(c("PolarisIGCoreText").Body, {
                color: "ig-link",
                zeroMargin: !0,
                children: i._("Log in")
            })
        });
        return j.jsx("span", {
            children: j.jsx(c("PolarisIGCoreText").Body, {
                color: "ig-secondary-text",
                zeroMargin: !0,
                children: i._("{loginLink} to like or comment.", [i._param("loginLink", a)])
            })
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function m(a) {
        return j.jsx("span", {
            children: i._("Follow {username} to like or comment.", [i._param("username", a.username)])
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function n(a) {
        return j.jsxs("div", {
            className: "_aao8",
            children: [j.jsx("span", {
                children: i._("Replying to {username}", [i._param("username", a.username)])
            }), j.jsx(c("PolarisIGCoreButton"), {
                borderless: !0,
                color: "ig-secondary-button",
                onClick: a.onClearReply,
                children: "\u2715"
            })]
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";
    h = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var e;
            e = a.call(this, b) || this;
            e.$3 = null;
            e.focusAndScroll = function() {
                var a = function() {
                    var a = c("nullthrows")(e.$1);
                    a.focus();
                    d("PolarisUA").isMobile() && window.setTimeout(function() {
                        typeof a.scrollIntoView === "function" && (a.scrollIntoView(!0), window.scrollBy(0, -200))
                    }, 10)
                };
                e.setState({
                    hasBeenFocused: !0
                }, function() {
                    window.setTimeout(function() {
                        return a()
                    })
                })
            };
            e.$5 = function(a) {
                var b = e.props,
                    c = b.adInfo,
                    d = b.onCommentChange;
                b = b.onCommentSubmit;
                a.preventDefault();
                if (!e.$4()) {
                    d(e.state.pendingComment);
                    e.setState({
                        needsFlush: !1
                    });
                    a = null;
                    c != null && (c == null ? void 0 : c.tracking_token) != null && (c == null ? void 0 : c.ad_id) != null && (a = {
                        adId: c == null ? void 0 : c.ad_id,
                        adTrackingToken: c == null ? void 0 : c.tracking_token
                    });
                    b(a).then(function() {
                        e.$1 && e.$1.blur()
                    })
                }
            };
            e.$6 = function(a) {
                a.key === "Enter" && !a.shiftKey && e.$5(a)
            };
            e.$7 = function(a) {
                a.stopPropagation()
            };
            e.$8 = function(a, b) {
                e.state.commentAttempt || (c("gkx")("2641") || d("PolarisLogger").logAction_DEPRECATED("commentAttempt", {
                    source: e.props.analyticsContext,
                    type: e.props.isVideo === !0 ? "video" : "photo",
                    isLoggedIn: e.props.isLoggedIn
                })), e.setState({
                    commentAttempt: !0,
                    cursorIndex: b,
                    isEmojiTrayOpen: e.$2 != null,
                    needsFlush: !0,
                    pendingComment: a
                })
            };
            e.$9 = function(a) {
                e.$1 = a, c("gkx")("4923") && (a != null ? e.$3 = c("one-trace").trackTypingPerf(a, "PostCommentInput") : e.$3 != null && (e.$3(), e.$3 = null))
            };
            e.$10 = function(a) {
                e.setState({
                    hasBeenFocused: !0,
                    hasFocus: !0
                })
            };
            e.$11 = function(a) {
                e.setState({
                    hasFocus: !1
                })
            };
            e.$12 = function() {
                var a = e.props,
                    b = a.analyticsContext,
                    c = a.id;
                a = a.ownerId;
                d("PolarisInteractionsLogger").logInteractionAction({
                    containerModule: b,
                    eventName: "instagram_organic_comment_button",
                    mediaId: c,
                    mediaAuthorId: a
                })
            };
            e.$13 = function(a, b) {
                a = c("PolarisupdateTextOnTypeaheadSelect")(a, b, e.state.pendingComment, e.state.cursorIndex);
                b = a.updatedCursorIndex;
                a = a.updatedText;
                e.$8(a, b)
            };
            e.$14 = function(a) {
                var b, c;
                e.$2 = a;
                b = ((b = e.$1) == null ? void 0 : b.selectionStart) || 0;
                c = ((c = e.$1) == null ? void 0 : c.selectionEnd) || 0;
                c = e.state.pendingComment.substring(0, b) + a + e.state.pendingComment.substring(c);
                b = b + a.length;
                e.$8(c, b)
            };
            e.$15 = function(a) {
                a === !0 && (c("gkx")("5014") || d("PolarisLogger").logAction_DEPRECATED("emojiButtonClicked", {
                    source: e.props.analyticsContext,
                    type: e.props.isVideo === !0 ? "video" : "photo",
                    isLoggedIn: e.props.isLoggedIn
                }), c("PolarisODS").incr("web.emoji.button.clicked")), e.setState({
                    isEmojiTrayOpen: a
                })
            };
            e.emojiPickerTray = j.createRef();
            e.state = {
                commentAttempt: !1,
                hasBeenFocused: !1,
                needsFlush: !1,
                pendingComment: b.pendingComment,
                cursorIndex: b.pendingComment.length,
                isEmojiTrayOpen: !1
            };
            return e
        }
        var e = b.prototype;
        e.componentWillUnmount = function() {
            !this.props.commentSaveIsInFlight && this.state.needsFlush && this.state.pendingComment.length > 0 && this.props.onCommentChange(this.state.pendingComment)
        };
        e.componentDidUpdate = function(a, b) {
            var c = this.props,
                d = c.commentSaveIsInFlight;
            c = c.pendingComment;
            this.$1 && !b.hasBeenFocused && this.state.hasBeenFocused && this.$1.focus();
            a.pendingComment !== c && (this.setState({
                pendingComment: c,
                cursorIndex: c.length
            }), this.$1 && this.$1.focus());
            b = b.isEmojiTrayOpen !== this.state.isEmojiTrayOpen;
            (this.$2 != null || b) && (this.$2 = null, this.$1 && (b && this.setState({
                cursorIndex: this.$1.selectionEnd
            }), this.$1.focus()));
            a.commentSaveIsInFlight && !d && c === "" && this.setState({
                pendingComment: "",
                needsFlush: !0
            })
        };
        e.shouldComponentUpdate = function(a, b) {
            return this.props.className !== a.className || this.props.commentSaveIsInFlight !== a.commentSaveIsInFlight || this.props.pendingComment !== a.pendingComment || this.state.pendingComment !== b.pendingComment || this.state.hasBeenFocused !== b.hasBeenFocused || this.state.hasFocus !== b.hasFocus || this.state.isEmojiTrayOpen !== b.isEmojiTrayOpen
        };
        e.$4 = function() {
            return this.state.pendingComment.trim().length === 0 || this.props.commentSaveIsInFlight
        };
        e.displayForm = function() {
            var a = d("browserHistory").browserHistory.location.pathname === d("PolarisRoutes").FEED_PATH;
            a = a && this.props.inModal !== !0 && d("PolarisUA").isDesktop();
            return j.jsxs("form", {
                className: "_aao9",
                "data-testid": void 0,
                method: "POST",
                onSubmit: this.$5,
                children: [this.props.commentSaveIsInFlight && j.jsx(c("PolarisIGCoreSpinner"), {
                    position: "absolute"
                }), d("PolarisUA").isDesktop() && j.jsx("div", {
                    className: (a ? "" : "_aaoa") + (a ? " _aaob" : ""),
                    children: j.jsx(c("PolarisEmojiButton.react"), {
                        isEmojiTrayOpen: this.state.isEmojiTrayOpen,
                        onEmojiClick: this.$14,
                        setEmojiTrayOpen: this.$15
                    })
                }), j.jsx(c("PolarisTypeaheadInput.react"), {
                    "aria-label": k,
                    autosize: this.props.forceTextareaAutosize === !0 || this.state.hasBeenFocused || this.state.pendingComment !== "",
                    className: "_aaoc",
                    cursorIndex: this.state.cursorIndex,
                    "data-testid": void 0,
                    disabled: this.props.commentSaveIsInFlight,
                    inputRef: this.$9,
                    onBlur: this.$11,
                    onChange: this.$8,
                    onFocus: this.$10,
                    onKeyPress: this.$6,
                    onKeyUp: this.$7,
                    onTypeaheadResultSelect: this.$13,
                    placeholder: k,
                    value: this.state.pendingComment
                }), this.props.hasPostButton && j.jsx(c("PolarisIGCoreButton"), {
                    borderless: !0,
                    "data-testid": void 0,
                    disabled: this.$4(),
                    onClick: this.$12,
                    type: "submit",
                    children: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        color: "ig-primary-button",
                        zeroMargin: !0,
                        children: i._("Post")
                    })
                })]
            })
        };
        e.$16 = function() {
            return this.$1 ? this.props.viewportHeight - this.$1.getBoundingClientRect().bottom > 200 : !0
        };
        e.render = function() {
            var a = this.props,
                b = a.canViewerProvideFeedback,
                e = a.className,
                f = a.hasRichCommentInput,
                g = a.isLoggedIn,
                h = a.onClearReply,
                i = a.ownerUsername,
                k = a.repliedToUsername;
            a = a.viewerProfilePicture;
            return j.jsxs("section", {
                className: c("joinClasses")((f === !0 ? "_aaod" : "") + " _aaoe", e),
                children: [j.jsxs("div", {
                    className: "_aaof",
                    children: [f === !0 && a != null && a !== "" && j.jsx(c("PolarisUserAvatar.react"), {
                        className: "_aaog",
                        isLink: !1,
                        profilePictureUrl: a,
                        size: c("PolarisIGCoreConstants").AVATAR_SIZES.small
                    }), !g || !b ? j.jsx("div", {
                        className: "_af6c",
                        children: g ? j.jsx(m, {
                            username: c("nullthrows")(i)
                        }) : j.jsx(l, {})
                    }) : this.displayForm()]
                }), k != null && k !== "" && d("PolarisUA").isMobile() && j.jsx(n, {
                    onClearReply: h,
                    username: k
                }), g && b && this.state.hasFocus === !0 && j.jsx(c("PolarisTypeaheadContainer.react"), {
                    className: (d("PolarisUA").isMobile() ? "_aaoh" : "") + (d("PolarisUA").isMobile() ? "" : " _aaoi") + (!d("PolarisUA").isMobile() && !this.$16() ? " _aaoj" : ""),
                    cursorIndex: this.state.cursorIndex,
                    inputString: this.state.pendingComment,
                    onResultSelect: this.$13,
                    showResultsCondensed: !0,
                    useSearchTriggers: !0
                })]
            })
        };
        return b
    }(j.Component);
    h.defaultProps = {
        forceTextareaAutosize: d("PolarisUA").isMobile(),
        hasRichCommentInput: !1
    };

    function a(a, b) {
        var e = a.pendingComments.get(b.id),
            f = a.navigation.pageIdentifier || "";
        return {
            analyticsContext: f,
            commentSaveIsInFlight: (e == null ? void 0 : e.committing) || !1,
            loading: a.search.loading,
            ownerUsername: c("nullthrows")(d("PolarisuserSelectors").getUserById(a, b.ownerId).username),
            pendingComment: (e == null ? void 0 : e.text) || "",
            repliedToCommentAuthorId: e == null ? void 0 : e.repliedToCommentAuthorId,
            repliedToCommentId: e == null ? void 0 : e.repliedToCommentId,
            repliedToUsername: e == null ? void 0 : e.repliedToUsername,
            results: a.search.results,
            searchedForQuery: a.search.searchedForQuery,
            selectedIndex: a.search.selectedIndex,
            viewportHeight: a.displayProperties.viewportHeight
        }
    }

    function b(a, b) {
        return {
            onCommentChange: function(c, e, f, g) {
                a(d("PolarisPendingCommentActions").changePendingComment(b.id, c, e, f, g))
            },
            onClearReply: function() {
                a(d("PolarisPendingCommentActions").clearPendingComment(b.id))
            },
            onCommentSubmit: function(c) {
                return a(d("PolarisPendingCommentActions").commitPendingComment(b.id, b.ownerId, b.analyticsContext, c))
            },
            onTypeaheadResultHighlight: function(b, c) {
                a(d("PolarisSearchActions").selectResult(b, c))
            }
        }
    }

    function e(a, b, c) {
        return babelHelpers["extends"]({}, a, b, c, {
            onCommentChange: function(c) {
                return b.onCommentChange(c, a.repliedToCommentId, a.repliedToCommentAuthorId, a.repliedToUsername)
            }
        })
    }
    f = d("react-redux-wwwig").connect(a, b, e, {
        forwardRef: !0
    })(h);
    a = f;
    g["default"] = a
}, 98); /*FB_PKG_DELIM*/
__d("PolarisEmojiVariationPicker.react", ["cx", "fbt", "PolarisEmojiConstants", "PolarisIGCoreAnchoredPopover", "PolarisIGCoreAnchoredPopoverContentContainer", "PolarisIGCoreButton", "PolarisPanavisionQEHelpers", "Pressable.react", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useState,
        l = i._("Open skin tone picker"),
        m = 55,
        n = 302;

    function a(a) {
        var b = a.selectEmoji,
            e = a.defaultEmoji;
        a = k(!1);
        var f = a[0],
            g = a[1],
            h = function(a) {
                b(a), g(!1)
            };
        a = d("PolarisEmojiConstants").SKIN_TONE_MODIFIERS.map(function(a) {
            return "" + e + a
        });
        a = [e].concat(a);
        var i = d("PolarisPanavisionQEHelpers").hasSkinToneEmojiPicker(),
            o = function() {
                g(!0)
            };
        return j.jsx("div", {
            children: j.jsx(c("PolarisIGCoreAnchoredPopover"), {
                content: f === !0 && j.jsx(c("PolarisIGCoreAnchoredPopoverContentContainer"), {
                    boldBoxShadow: !0,
                    height: m,
                    isVisible: f,
                    onClose: function() {
                        g(!1)
                    },
                    width: n,
                    children: j.jsx("div", {
                        className: "_adko",
                        children: a.map(function(a) {
                            return j.jsx("div", {
                                className: "_adkp",
                                children: j.jsx(c("PolarisIGCoreButton"), {
                                    borderless: !0,
                                    onClick: function() {
                                        h(a)
                                    },
                                    children: j.jsx("div", {
                                        className: "_adkq",
                                        id: "polaris-emoji-variation-" + a,
                                        children: a
                                    })
                                })
                            }, a)
                        })
                    })
                }),
                offsetRight: 0,
                offsetTop: 0,
                preferredPositionY: "top",
                children: j.jsx(c("Pressable.react"), {
                    accessibilityLabel: l,
                    accessibilityRole: "button",
                    onPress: function(a) {
                        if (i) {
                            o();
                            return
                        }
                        b(e)
                    },
                    children: j.jsx("div", {
                        className: "_adkq",
                        children: e
                    })
                })
            })
        }, e)
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisEmojiTray.react", ["cx", "PolarisEmojiConstants", "PolarisEmojiVariationPicker.react", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreText", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function j(a) {
        a = a.headerText;
        return i.jsx(c("PolarisIGCoreBox"), {
            marginBottom: 2,
            marginEnd: 2,
            marginStart: 2,
            marginTop: 4,
            width: "100%",
            children: i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                color: "ig-secondary-text",
                children: a
            })
        })
    }
    j.displayName = j.name + " [from " + f.id + "]";

    function k(a) {
        var b = a.emoji,
            e = a.onClick;
        return d("PolarisEmojiConstants").SkinToneBaseEmojis.includes(b) ? i.jsx("div", {
            children: i.jsx(c("PolarisEmojiVariationPicker.react"), {
                defaultEmoji: b,
                selectEmoji: function(a) {
                    e(a)
                }
            })
        }, b) : i.jsx("div", {
            children: i.jsx(c("PolarisIGCoreButton"), {
                borderless: !0,
                onClick: function() {
                    return e(b)
                },
                children: i.jsx("div", {
                    className: "_adkq",
                    children: b
                })
            })
        }, b)
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function l(a) {
        var b = a.frequentlyUsedEmoji,
            e = a.onClick;
        return i.jsxs(i.Fragment, {
            children: [i.jsx(c("PolarisIGCoreBox"), {
                margin: 2,
                width: "100%",
                children: i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                    color: "ig-secondary-text",
                    children: d("PolarisEmojiConstants").EMOJI_TRAY_FREQUENTLY_USED
                })
            }), b.map(function(a) {
                return i.jsx(k, {
                    emoji: a,
                    onClick: e
                }, a)
            })]
        })
    }

    function a(a) {
        var b = a.onClick;
        a = d("react-redux-wwwig").useSelector(function(a) {
            return a.direct.emojis.frequentlyUsed
        });
        var e = a.size !== 0;
        return i.jsxs(c("PolarisIGCoreBox"), {
            direction: "row",
            wrap: !0,
            children: [e && i.jsx(l, {
                frequentlyUsedEmoji: a,
                onClick: b
            }), i.jsx(c("PolarisIGCoreBox"), {
                margin: 2,
                marginTop: e ? 4 : 2,
                width: "100%",
                children: i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                    color: "ig-secondary-text",
                    children: d("PolarisEmojiConstants").EMOJI_TRAY_MOST_POPULAR
                })
            }), d("PolarisEmojiConstants").mostPopularEmojis.map(function(a) {
                return i.jsx(k, {
                    emoji: a,
                    onClick: b
                }, a)
            }), Object.keys(d("PolarisEmojiConstants").Emojis).map(function(a) {
                var c = d("PolarisEmojiConstants").Emojis[a],
                    e = c.emojis;
                c = c.label;
                return i.jsxs(i.Fragment, {
                    children: [i.jsx(j, {
                        headerText: c
                    }), e.map(function(a) {
                        return i.jsx(k, {
                            emoji: a,
                            onClick: b
                        }, a)
                    })]
                }, a)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreFace2PanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisEmojiButton.react", ["PolarisDirectStrings", "PolarisEmojiTray.react", "PolarisIGCoreAnchoredPopover", "PolarisIGCoreAnchoredPopoverContentContainer", "PolarisIGCoreBox", "PolarisIGCoreFace2PanoOutlineIcon", "PolarisIGCoreSVGIconButton", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = 309,
        j = 309,
        k = i + 16 + 8,
        l = j + 16,
        m = -14,
        n = -30;

    function o(a) {
        return (a == null ? void 0 : a.target) instanceof HTMLElement && a.target.id.includes("polaris-emoji-variation-")
    }

    function p(a) {
        var b = a.handleEmojiClick,
            d = a.isVisible;
        a = a.onClose;
        return h.jsx(h.Fragment, {
            children: d ? h.jsx(c("PolarisIGCoreAnchoredPopoverContentContainer"), {
                height: l,
                isVisible: d,
                onClose: a,
                width: k,
                children: h.jsx(c("PolarisIGCoreBox"), {
                    height: j,
                    margin: 2,
                    width: i,
                    children: h.jsx(c("PolarisEmojiTray.react"), {
                        onClick: b
                    })
                })
            }) : null
        })
    }

    function a(a) {
        var b = a.isEmojiTrayOpen,
            e = a.onEmojiClick,
            f = a.setEmojiTrayOpen;
        a = a.padding;
        var g = function() {
            f(!b)
        };
        return h.jsx(c("PolarisIGCoreAnchoredPopover"), {
            content: h.jsx(p, {
                handleEmojiClick: e,
                isVisible: b,
                onClose: function(a) {
                    o(a) || f(!1)
                }
            }),
            offsetRight: m,
            offsetTop: n,
            preferredPositionY: "top",
            children: h.jsx(c("PolarisIGCoreSVGIconButton"), {
                onClick: g,
                padding: a === !0 ? 8 : 0,
                children: h.jsx(c("PolarisIGCoreFace2PanoOutlineIcon"), {
                    alt: d("PolarisDirectStrings").EMOJI_BUTTON_ALT_TEXT,
                    color: "ig-primary-text"
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98); /*FB_PKG_DELIM*/
__d("PolarisAccountsRemoveRequestTemporaryRoot.entrypoint", ["JSResourceForInteraction"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {}
            }
        },
        root: c("JSResourceForInteraction")("PolarisAccountsRemoveRequestTemporaryRoot.react").__setRef("PolarisAccountsRemoveRequestTemporaryRoot.entrypoint")
    };
    g["default"] = a
}, 98);
__d("PolarisAccountsRemoveRequestTemporaryRoot.react", ["PolarisDeactivateAccountPageContainer", "PolarisSettingsActions", "react", "react-redux-wwwig", "usePolarisGetQuery", "usePolarisGetQueryResponse"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        a = c("usePolarisGetQuery")("/api/v1/accounts/get_temp_remove_account_web_info/", {});
        a = c("usePolarisGetQueryResponse")(a);
        var b = d("react-redux-wwwig").useDispatch();
        b(d("PolarisSettingsActions").loadDeactivateAccountPage());
        return h.jsx(d("PolarisDeactivateAccountPageContainer").DeactivateAccountPageContainer, {
            isBlocked: a.is_blocked
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisFRXPostOptionReportModalBase.react", ["PolarisFRXReportModal.react", "PolarisPageIdentifierConstants", "PolarisReportConstants", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i(a) {
        switch (a) {
            case "feed":
            case c("PolarisPageIdentifierConstants").feedPage:
                return d("PolarisReportConstants").FRXLocation.FEED;
            default:
                return d("PolarisReportConstants").FRXLocation.POST
        }
    }

    function a(a) {
        var b = a.analyticsContext,
            e = a.postID,
            f = a.ownerID,
            g = a.ownerUsername,
            j = a.ownerProfilePicURL,
            k = a.onClose;
        a = i(b);
        return h.jsx(c("PolarisFRXReportModal.react"), {
            frxLocation: a,
            frxObjectType: d("PolarisReportConstants").FRXObjectType.MEDIA,
            onClose: function() {
                return k && k()
            },
            reportedObjectID: e,
            reportedOwner: {
                id: f,
                username: g,
                profilePicURL: j
            },
            useSimpleBlockModalWithoutRefresh: a === d("PolarisReportConstants").FRXLocation.POST
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastReportModal.react", ["PolarisFRXPostOptionReportModalBase.react", "nullthrows", "react", "usePolarisAnalyticsContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b, d, e, f = a.onClose;
        a = a.post;
        b = c("nullthrows")((b = a.owner) == null ? void 0 : b.id);
        d = (d = a.owner) == null ? void 0 : d.username;
        e = (e = a.owner) == null ? void 0 : e.profilePictureUrl;
        var g = c("usePolarisAnalyticsContext")();
        return h.jsx(c("PolarisFRXPostOptionReportModalBase.react"), {
            analyticsContext: g,
            onClose: f,
            ownerID: b,
            ownerProfilePicURL: e,
            ownerUsername: d,
            postID: a.id
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);