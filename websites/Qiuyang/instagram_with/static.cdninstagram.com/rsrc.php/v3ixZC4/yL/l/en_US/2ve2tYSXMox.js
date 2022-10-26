if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("PolarisPostFastOptionCopyAdId.react", ["fbt", "IGCoreDialog", "PolarisClipboard", "PolarisIGCoreText", "PolarisToastActions", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = h._("Ad id copied.");

    function a(a) {
        a = a.adInfo;
        var b = a.ad_id,
            e = d("react-redux-wwwig").useDispatch();
        a = function() {
            if (b == null) return;
            d("PolarisClipboard").copy(b);
            e(d("PolarisToastActions").showToast({
                text: j
            }))
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: i.jsx(c("PolarisIGCoreText").Body, {
                children: h._("Ad ID: {ad id} (Copy)", [h._param("ad id", b)])
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionCopyAdMediaId.react", ["fbt", "IGCoreDialog", "PolarisClipboard", "PolarisIGCoreText", "PolarisToastActions", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = h._("Media id copied.");

    function a(a) {
        var b = a.post,
            e = d("react-redux-wwwig").useDispatch();
        a = function() {
            d("PolarisClipboard").copy(b.id), e(d("PolarisToastActions").showToast({
                text: j
            }))
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: i.jsx(c("PolarisIGCoreText").Body, {
                children: h._("Media ID: {media id} (Copy)", [h._param("media id", b.id)])
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionCopyAdTrackingToken.react", ["fbt", "IGCoreDialog", "PolarisClipboard", "PolarisIGCoreText", "PolarisToastActions", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = h._("Tracking token copied.");

    function a(a) {
        a = a.adInfo;
        var b = a.tracking_token,
            e = d("react-redux-wwwig").useDispatch();
        a = function() {
            if (b == null) return;
            d("PolarisClipboard").copy(b);
            e(d("PolarisToastActions").showToast({
                text: j
            }))
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: i.jsx(c("PolarisIGCoreText").Body, {
                children: h._("Copy Ad Tracking Token")
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionInjectAd.react", ["fbt", "IGCoreDialog", "PolarisIGCoreText", "PolarisNavigationUtils", "URI", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = "https://www.internalfb.com/intern/instagram/ads/injecttool/";

    function a(a) {
        a = a.adInfo;
        a = a.ad_id;
        if (a == null) return null;
        var b = new(c("URI"))(j).addQueryData({
            custom_ad_ids: a
        }).toString();
        a = function() {
            d("PolarisNavigationUtils").openURLWithFullPageReload(b, {
                openInNewTab: !0
            })
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: i.jsx(c("PolarisIGCoreText").Body, {
                children: h._("Inject Ad")
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionOpenAdIDD.react", ["fbt", "IGCoreDialog", "PolarisIGCoreText", "PolarisNavigationUtils", "URI", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = "https://internalfb.com/intern/ads/idd/",
        k = "ig_web";

    function a(a) {
        a = a.adInfo;
        a = a.ad_id;
        if (a == null) return null;
        var b = new(c("URI"))(j).addQueryData({
            id: a,
            referral: k
        }).toString();
        a = function() {
            d("PolarisNavigationUtils").openURLWithFullPageReload(b, {
                openInNewTab: !0
            })
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: i.jsx(c("PolarisIGCoreText").Body, {
                children: h._("Open Ad in IDD")
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostFastOptionOpenAdInfo.react", ["fbt", "IGCoreDialog", "PolarisIGCoreText", "PolarisNavigationUtils", "URI", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = "https://internalfb.com/intern/ads/ad_info.php/";

    function a(a) {
        a = a.adInfo;
        a = a.ad_id;
        if (a == null) return null;
        var b = new(c("URI"))(j).addQueryData({
            id: a
        }).toString();
        a = function() {
            d("PolarisNavigationUtils").openURLWithFullPageReload(b, {
                openInNewTab: !0
            })
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: i.jsx(c("PolarisIGCoreText").Body, {
                children: h._("Open Ad in Ad Info")
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisAdDebugToolModalContent.react", ["fbt", "IGCoreDialog", "PolarisIGCoreText", "PolarisPostFastOptionCopyAdId.react", "PolarisPostFastOptionCopyAdMediaId.react", "PolarisPostFastOptionCopyAdTrackingToken.react", "PolarisPostFastOptionInjectAd.react", "PolarisPostFastOptionOpenAdIDD.react", "PolarisPostFastOptionOpenAdInfo.react", "PolarisadsSelectors", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.post,
            e = a.forFeed;
        a = a.onClose;
        var f = null,
            g = d("PolarisadsSelectors").useFeedAdInfo(b.id, function(a) {
                return a
            }),
            j = d("PolarisadsSelectors").useStoryAdInfo(b.id, function(a) {
                return a
            });
        e ? f = g : f = j;
        return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
            onModalClose: a,
            children: [i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                children: i.jsx(c("PolarisIGCoreText").Section, {
                    children: h._("[Meta-only] Ad Debug Tool")
                })
            }), i.jsx(c("PolarisPostFastOptionCopyAdMediaId.react"), {
                post: b
            }), f != null && i.jsxs(i.Fragment, {
                children: [i.jsx(c("PolarisPostFastOptionCopyAdId.react"), {
                    adInfo: f
                }), i.jsx(c("PolarisPostFastOptionCopyAdTrackingToken.react"), {
                    adInfo: f
                }), i.jsx(c("PolarisPostFastOptionOpenAdIDD.react"), {
                    adInfo: f
                }), i.jsx(c("PolarisPostFastOptionOpenAdInfo.react"), {
                    adInfo: f
                }), i.jsx(c("PolarisPostFastOptionInjectAd.react"), {
                    adInfo: f
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("InstagramAdHideButtonFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("3448");
    c = b("FalcoLoggerInternal").create("instagram_ad_hide_button", a);
    e.exports = c
}, null);
__d("PolarisHideAdDialogItem.react", ["IGCoreDialog", "InstagramAdHideButtonFalcoEvent", "PolarisContainerModuleUtils", "PolarisGenericStrings", "react", "usePolarisAnalyticsContext", "usePolarisViewer"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.adId,
            e = a.adInsertedPosition,
            f = a.adTrackingToken,
            g = a.mpk,
            i = a.onClick,
            j = a.reelCounter,
            k = a.reelId,
            l = a.traySession,
            m = a.viewerSession,
            n = c("usePolarisViewer")(),
            o = c("usePolarisAnalyticsContext")();
        a = function() {
            c("InstagramAdHideButtonFalcoEvent").log(function() {
                return {
                    ad_id: b,
                    ad_inserted_position: e,
                    m_pk: g,
                    pk: n == null ? void 0 : n.id,
                    reel_id: k,
                    session_reel_counter: j,
                    source_of_action: d("PolarisContainerModuleUtils").getContainerModule(o),
                    tracking_token: f,
                    tray_session_id: l,
                    viewer_session_id: m
                }
            }), i()
        };
        return h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            "data-testid": void 0,
            onClick: a,
            children: d("PolarisGenericStrings").HIDE_AD_TEXT
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("InstagramAdReportButtonFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("3450");
    c = b("FalcoLoggerInternal").create("instagram_ad_report_button", a);
    e.exports = c
}, null);
__d("PolarisReportAdDialogItem.react", ["IGCoreDialog", "InstagramAdReportButtonFalcoEvent", "PolarisContainerModuleUtils", "PolarisGenericStrings", "PolarisInteractionsLogger", "PolarisLinkBuilder", "PolarisMonitorErrors", "PolarisViewpointActionUtils", "PolarisisUserLoggedIn", "PolarisrelationshipSelectors", "browserHistory", "err", "react", "usePolarisAnalyticsContext", "usePolarisViewer"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.adId,
            e = a.adInsertedPosition,
            f = a.adTrackingToken,
            g = a.mpk,
            i = a.onClick,
            j = a.post,
            k = a.reelCounter,
            l = a.reelId,
            m = a.traySession,
            n = a.viewerSession,
            o = c("usePolarisViewer")(),
            p = c("usePolarisAnalyticsContext")(),
            q = d("PolarisInteractionsLogger").getMediaTypeFromPost(j);
        a = j.owner;
        j = d("PolarisrelationshipSelectors").useRelationship((a == null ? void 0 : a.id) || "");
        var r = j != null ? d("PolarisViewpointActionUtils").getFollowStatus(j) : null;
        a = function() {
            if (!d("PolarisisUserLoggedIn").isUserLoggedIn()) d("browserHistory").redirect(d("PolarisLinkBuilder").buildLoginLink(window.location.href, {
                source: "logged_out_post_report_redirect"
            }));
            else if (f != null && r != null && g != null) c("InstagramAdReportButtonFalcoEvent").logImmediately(function() {
                return {
                    ad_id: b,
                    ad_inserted_position: e,
                    follow_status: r,
                    m_pk: g,
                    m_t: q.toString(),
                    pk: o == null ? void 0 : o.id,
                    reel_id: l,
                    session_reel_counter: k,
                    source_of_action: d("PolarisContainerModuleUtils").getContainerModule(p),
                    tracking_token: f,
                    tray_session_id: m,
                    viewer_session_id: n
                }
            });
            else {
                if (r == null) {
                    var a = c("err")("followStatus cannot be null");
                    d("PolarisMonitorErrors").logError(a)
                }
                if (f == null) {
                    a = c("err")("adTrackingToken cannot be null");
                    d("PolarisMonitorErrors").logError(a)
                }
                if (g == null) {
                    a = c("err")("mpk cannot be null");
                    d("PolarisMonitorErrors").logError(a)
                }
            }
            i()
        };
        return h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            onClick: a,
            children: d("PolarisGenericStrings").REPORT_AD_TEXT
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisWAISTDialogItem.react", ["fbt", "IGCoreDialog", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a = a.onClick;
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: h._("Why you're seeing this ad?")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisWAISTModalContent.react", ["fbt", "IGCoreModal", "PolarisIGBloksApp", "PolarisIGCoreBox", "PolarisIGCoreModalHeader", "PolarisIGCoreSVGIconButton", "PolarisIGCoreSpinner", "PolarisIGCoreXPanoOutlineIcon", "PolarisLogger", "PolarisPageIdentifierConstants", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useEffect,
        k = h._("Why you're seeing this ad"),
        l = "com.bloks.www.bloks.ig_waist_landing_page",
        m = h._("Close"),
        n = "108px";

    function a(a) {
        var b = a.onClose;
        a = a.adId;
        j(function() {
            d("PolarisLogger").logPageView(c("PolarisPageIdentifierConstants").adsWAISTModal)
        }, []);
        var e = i.jsxs(i.Fragment, {
            children: [i.jsx(c("PolarisIGCoreModalHeader"), {
                children: k
            }), i.jsx(c("PolarisIGCoreBox"), {
                direction: "row",
                justifyContent: "center",
                margin: 4,
                children: i.jsx(c("PolarisIGCoreSpinner"), {})
            })]
        });
        return i.jsx(c("IGCoreModal"), {
            onClose: b,
            children: i.jsxs(c("PolarisIGCoreBox"), {
                maxHeight: "100%",
                overflow: "auto",
                children: [i.jsx(c("PolarisIGCoreBox"), {
                    justifyContent: "center",
                    minHeight: n,
                    children: i.jsx(c("PolarisIGBloksApp"), {
                        appId: l,
                        fallback: e,
                        params: {
                            ad_id: a
                        }
                    })
                }), i.jsx(c("PolarisIGCoreBox"), {
                    padding: 1,
                    position: "absolute",
                    right: !0,
                    children: i.jsx(c("PolarisIGCoreSVGIconButton"), {
                        onClick: b,
                        children: i.jsx(c("PolarisIGCoreXPanoOutlineIcon"), {
                            alt: m,
                            size: 18
                        })
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisPostShareUtils", ["PolarisLinkBuilder", "PolarisgetPostFromGraphMediaInterface", "nullthrows"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        return (b == null ? void 0 : b.isPrivate) !== !0 && a.viewerCanReshare === !0
    }

    function h(a) {
        var b = c("nullthrows")(a.code);
        if (d("PolarisgetPostFromGraphMediaInterface").isIGTVPost(a)) return d("PolarisLinkBuilder").buildFelixMediaLink(b);
        else if (d("PolarisgetPostFromGraphMediaInterface").isClipsPost(a)) return d("PolarisLinkBuilder").buildClipsMediaLink(b);
        return d("PolarisLinkBuilder").buildMediaLink(b)
    }

    function b(a) {
        var b;
        b = ((b = a.shareIds) == null ? void 0 : b.copy) || "";
        a = window.location.origin + h(a);
        return b.length > 0 ? a + "?utm_source=ig_web_copy_link&igshid=" + b : a + "?utm_source=ig_web_copy_link"
    }
    g.getIsShareable = a;
    g.getShareURL = h;
    g.getCopyUrl = b
}, 98);
__d("PolarisPostTypeUtils", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a.isVideo === !0) return "video";
        return a.sidecarChildren && a.sidecarChildren.length > 0 ? "sidecar" : "photo"
    }
    f.getPostType = a
}, 66);
__d("PolarisPostFastOptionCopyLink.react", ["fbt", "IGCoreDialog", "PolarisClipboard", "PolarisLogger", "PolarisODS", "PolarisPostModalContext.react", "PolarisPostShareUtils", "PolarisPostTypeUtils", "gkx", "react", "usePolarisAnalyticsContext", "usePolarisShowToast"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = h._("Link copied to clipboard."),
        k = h._("Copy link");

    function a(a) {
        var b = a.onClose;
        a = a.post;
        var e = d("PolarisPostModalContext.react").useSetPostModal(),
            f = c("usePolarisShowToast")(),
            g = c("usePolarisAnalyticsContext")(),
            h = d("PolarisPostTypeUtils").getPostType(a),
            l = d("PolarisPostShareUtils").getCopyUrl(a);
        if (a.owner == null) return null;
        a = d("PolarisPostShareUtils").getIsShareable(a, a.owner);
        if (!a) return null;
        a = function() {
            if (!d("PolarisClipboard").canCopy()) {
                e("copy");
                return
            }
            var a = d("PolarisClipboard").copy(l);
            c("gkx")("4909") || d("PolarisLogger").logAction_DEPRECATED("postLinkCopy", {
                source: g,
                type: h
            });
            c("PolarisODS").incr("web.post_options.post_link_copy");
            a ? (f({
                text: j
            }), b()) : e("copy")
        };
        return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a,
            children: k
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.LINK_COPIED_PROMPT = j;
    g.COPY_LINK_TEXT = k;
    g.PostFastOptionCopyLink = a
}, 98);
__d("PolarisOptionsModal.react", ["fbt", "IGCoreDialog", "IGRouter", "PolarisGenericStrings", "PolarisLinkBuilder", "PolarisPostStrings", "PolarisStoriesContext", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useContext;

    function a(a) {
        var b = function() {
                a.history.push(d("PolarisLinkBuilder").buildMediaLink(a.code))
            },
            c = k(d("PolarisStoriesContext").StoriesContext),
            e = c.updateStoriesContext;
        c = j(function() {
            e({
                isLoggedOutStoryShareSheetActive: !0,
                isPaused: !0,
                isModalActive: !1
            })
        }, [e]);
        return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
            onModalClose: a.onClose,
            children: [a.hasGoToOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: b,
                children: h._("Go to post")
            }), a.hasDeleteOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                color: "ig-error-or-destructive",
                onClick: a.onDeleteClick,
                children: h._("Delete")
            }), a.hasEditOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onEditClick,
                children: h._("Edit")
            }), a.hasReportInappropriateOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onReportInappropriateClick,
                children: d("PolarisPostStrings").REPORT_INAPPROPRIATE_TEXT
            }), a.hasAboutThisAccountOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onAboutThisAccountClick,
                children: h._("About this account")
            }), a.hasCopyHighlightLinkAndShareToOptions === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: c,
                children: h._("Share to...")
            }), a.hasEmbedOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onEmbedCodeClick,
                children: h._("Embed")
            }), a.hasPhotosOfYouOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onPhotosOfYouClick,
                children: h._("Post Options")
            }), a.hasShareOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onShareClick,
                children: h._("Share")
            }), a.hasCopyLinkOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onCopyLinkClick,
                children: h._("Copy link")
            }), a.hasCopyHighlightLinkAndShareToOptions === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onCopyHighlightLinkClick,
                children: h._("Copy highlight link")
            }), a.hasRemoveCommentsOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onRemoveCommentsClick,
                children: a.showRemoveCommentIcons !== !0 ? h._("Remove comments") : h._("Finish removing comments")
            }), a.hasUnfollowOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onUnfollowClick,
                children: h._("Unfollow")
            }), a.hasViewInsightsOption === !0 && i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onViewInsightsClick,
                children: h._("View insights")
            }), i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: a.onClose,
                children: d("PolarisGenericStrings").CANCEL_TEXT
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    c = d("IGRouter").withIGRouter(a);
    g["default"] = c
}, 98);