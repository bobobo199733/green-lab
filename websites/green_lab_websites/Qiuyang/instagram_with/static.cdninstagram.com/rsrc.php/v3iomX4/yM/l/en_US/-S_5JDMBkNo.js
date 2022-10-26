if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("usePolarisCreationDispatch", ["nullthrows", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
        i = b.createContext(null);

    function a() {
        return c("nullthrows")(h(i))
    }
    g.CreationDispatchContext = i;
    g.useCreationDispatch = a
}, 98);
__d("usePolarisCreationState", ["nullthrows", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
        i = b.createContext(null);

    function a() {
        return c("nullthrows")(h(i))
    }
    g.CreationStateContext = i;
    g.useCreationState = a
}, 98);
__d("PolarisCreationContextProvider.react", ["react", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children,
            c = a.dispatch;
        a = a.state;
        return h.jsx(d("usePolarisCreationDispatch").CreationDispatchContext.Provider, {
            value: c,
            children: h.jsx(d("usePolarisCreationState").CreationStateContext.Provider, {
                value: a,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationError", ["PolarisMonitorErrors", "PolarisODS", "keyMirror"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("keyMirror")({
        MAX_VIDEO_LENGTH: null,
        MAX_VIDEO_GALLERY_LENGTH: null,
        MAX_MEDIA_ADDED: null,
        MAX_MEDIA_SIZE: null,
        MIN_MEDIA_SIZE: null,
        MIN_VIDEO_LENGTH: null,
        UPLOAD_ERROR: null,
        READ_VIDEO_ERROR: null,
        UNSUPPORTED_FILE_ERROR: null
    });
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            var e;
            e = a.call(this, b) || this;
            e.name = "CreationError";
            e.type = b;
            e.filename = c;
            e.numFilesOverLimit = d;
            return e
        }
        b.maxVideoLength = function(a) {
            c("PolarisODS").incr("web.creation.error.max_video_length");
            return new b(h.MAX_VIDEO_LENGTH, a)
        };
        b.maxVideoLengthGallery = function(a) {
            c("PolarisODS").incr("web.creation.error.max_video_length_gallery");
            return new b(h.MAX_VIDEO_GALLERY_LENGTH, a)
        };
        b.minVideoLength = function(a) {
            c("PolarisODS").incr("web.creation.error.min_video_length");
            return new b(h.MIN_VIDEO_LENGTH, a)
        };
        b.maxMediaAdded = function(a) {
            c("PolarisODS").incr("web.creation.error.max_media_added");
            return new b(h.MAX_MEDIA_ADDED, void 0, a)
        };
        b.maxMediaSize = function(a) {
            c("PolarisODS").incr("web.creation.error.max_media_size");
            return new b(h.MAX_MEDIA_SIZE, a)
        };
        b.minMediaSize = function(a) {
            c("PolarisODS").incr("web.creation.error.min_media_size");
            return new b(h.MIN_MEDIA_SIZE, a)
        };
        b.uploadError = function(a) {
            d("PolarisMonitorErrors").logError(a);
            c("PolarisODS").incr("web.creation.error.upload_error");
            return new b(h.UPLOAD_ERROR)
        };
        b.readVideoError = function(a, e) {
            d("PolarisMonitorErrors").logError(a);
            c("PolarisODS").incr("web.creation.error.read_video_error");
            return new b(h.READ_VIDEO_ERROR, e)
        };
        b.unsupportedFileError = function(a) {
            c("PolarisODS").incr("web.creation.error.unsupported_file");
            return new b(h.UNSUPPORTED_FILE_ERROR, a)
        };
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    g.CreationErrorType = h;
    g.CreationError = a
}, 98);
__d("PolarisCreationErrorHelpers", ["PolarisCreationV2Strings", "PolarisQEHelper", "PolarisUA"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b;
        return i((b = a == null ? void 0 : a.filename) != null ? b : "")[a.type]
    }
    var h = d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? d("PolarisCreationV2Strings").FILE_COULDNT_BE_UPLOADED_TITLE : d("PolarisCreationV2Strings").VIDEO_TOO_LONG_TITLE;

    function i(a) {
        a === void 0 && (a = "");
        var b = d("PolarisQEHelper").hasFeedCreationV2Dogfooding();
        return {
            MAX_VIDEO_LENGTH: {
                header: d("PolarisCreationV2Strings").VIDEO_TOO_LONG_DOVETAIL_HEADER,
                body: d("PolarisCreationV2Strings").videoIsTooLongDovetailBody(a),
                title: h
            },
            MAX_VIDEO_GALLERY_LENGTH: {
                header: b ? d("PolarisCreationV2Strings").VIDEO_TOO_LONG_GALLERY_DOVETAIL_HEADER : d("PolarisCreationV2Strings").VIDEO_TOO_LONG_HEADER,
                body: d("PolarisCreationV2Strings").videoIsTooLongForGalleryBody(a),
                title: b ? d("PolarisCreationV2Strings").VIDEO_COULDNT_BE_UPLOADED_TITLE : d("PolarisCreationV2Strings").VIDEO_TOO_LONG_TITLE
            },
            MIN_VIDEO_LENGTH: {
                header: d("PolarisCreationV2Strings").VIDEO_TOO_SHORT_HEADER,
                body: d("PolarisCreationV2Strings").videoIsTooShortBody(a),
                title: d("PolarisCreationV2Strings").FILE_COULDNT_BE_UPLOADED_TITLE
            },
            MAX_MEDIA_SIZE: {
                header: d("PolarisCreationV2Strings").FILE_TOO_LARGE_HEADER,
                body: d("PolarisCreationV2Strings").fileIsTooLargeBody(a),
                title: b ? d("PolarisCreationV2Strings").FILE_COULDNT_BE_UPLOADED_TITLE : d("PolarisCreationV2Strings").FILE_TOO_LARGE_TITLE
            },
            MIN_MEDIA_SIZE: {
                header: d("PolarisCreationV2Strings").FILE_TOO_SMALL_HEADER,
                body: d("PolarisCreationV2Strings").fileIsTooSmallBody(a),
                title: b ? d("PolarisCreationV2Strings").FILE_COULDNT_BE_UPLOADED_TITLE : d("PolarisCreationV2Strings").FILE_TOO_SMALL_TITLE
            },
            UPLOAD_ERROR: d("PolarisUA").isDesktop() ? {
                header: d("PolarisCreationV2Strings").UPLOAD_FAILED_HEADER,
                title: d("PolarisCreationV2Strings").UPLOAD_FAILED_TITLE,
                primaryActionName: d("PolarisCreationV2Strings").TRY_AGAIN_CTA_TEXT
            } : {
                header: d("PolarisCreationV2Strings").UPLOAD_FAILED_HEADER,
                title: d("PolarisCreationV2Strings").UPLOAD_FAILED_TITLE
            },
            READ_VIDEO_ERROR: {
                header: d("PolarisCreationV2Strings").VIDEO_FILE_READ_FAILED_HEADER,
                body: d("PolarisCreationV2Strings").videoFileReadFailedBody(a),
                title: b ? d("PolarisCreationV2Strings").VIDEO_COULDNT_BE_UPLOADED_TITLE : d("PolarisCreationV2Strings").VIDEO_FILE_READ_FAILED_TITLE
            },
            UNSUPPORTED_FILE_ERROR: {
                header: b ? d("PolarisCreationV2Strings").FILE_NOT_SUPPORTED_HEADER : d("PolarisCreationV2Strings").SINGLE_FILE_UPLOAD_ERROR,
                body: b ? d("PolarisCreationV2Strings").fileCouldntBeUploaded(a) : d("PolarisCreationV2Strings").SUPPORTED_FILES_TEXT,
                title: b ? d("PolarisCreationV2Strings").FILE_COULDNT_BE_UPLOADED_TITLE : d("PolarisCreationV2Strings").UPLOAD_FAILED_TITLE
            }
        }
    }

    function j(a) {
        return {
            MAX_VIDEO_LENGTH: {
                message: d("PolarisCreationV2Strings").VIDEO_TOO_LONG_MESSAGE
            },
            MAX_VIDEO_GALLERY_LENGTH: {
                message: d("PolarisCreationV2Strings").CANNOT_ADD_MEDIA_BECAUSE_VIDEO_TOO_LONG_FOR_GALLERY_MESSAGE
            },
            MIN_VIDEO_LENGTH: {
                message: d("PolarisCreationV2Strings").VIDEO_TOO_SHORT_MESSAGE
            },
            MAX_MEDIA_ADDED: {
                message: a != null ? d("PolarisCreationV2Strings").maxMediaAddedError(a) : d("PolarisCreationV2Strings").MAX_MEDIA_ADDED_ERROR
            },
            MAX_MEDIA_SIZE: {
                message: d("PolarisCreationV2Strings").FILE_TOO_LARGE_MESSAGE
            },
            MIN_MEDIA_SIZE: {
                message: d("PolarisCreationV2Strings").FILE_TOO_SMALL_MESSAGE
            },
            READ_VIDEO_ERROR: {
                message: d("PolarisCreationV2Strings").VIDEO_FILE_READ_FAILED_MESSAGE
            }
        }
    }

    function b(a) {
        return j(a.numFilesOverLimit)[a.type]
    }
    g.getCreationErrorPageForError = a;
    g.getCreationErrorToErrorPageMap = i;
    g.getCreationErrorToastMap = j;
    g.getCreationErrorToastForError = b
}, 98);
__d("PolarisCreationHelpers", ["PolarisCreationTypes", "PolarisRoutes", "Polarisunexpected", "browserHistory"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return d("PolarisCreationTypes").STEP.select
    }

    function h(a) {
        switch (a) {
            case d("PolarisCreationTypes").STEP.select:
                return d("PolarisRoutes").CREATE_SELECT_PATH;
            case d("PolarisCreationTypes").STEP.crop:
            case d("PolarisCreationTypes").STEP.edit:
                return d("PolarisRoutes").CREATE_STYLE_PATH;
            case d("PolarisCreationTypes").STEP.compose:
                return d("PolarisRoutes").CREATE_DETAILS_PATH;
            case d("PolarisCreationTypes").STEP.publish:
            case d("PolarisCreationTypes").STEP.done:
                return d("PolarisRoutes").CREATE_UPLOAD_PATH;
            case d("PolarisCreationTypes").STEP.error:
                return d("PolarisRoutes").CREATE_ERROR_PATH;
            case d("PolarisCreationTypes").STEP.editPostInfo:
                return d("browserHistory").browserHistory.location.pathname;
            case d("PolarisCreationTypes").STEP.preview:
                return d("browserHistory").browserHistory.location.pathname;
            default:
                c("Polarisunexpected")("unexpected creation step");
                return d("PolarisRoutes").CREATE_SELECT_PATH
        }
    }

    function b(a) {
        a = i(a);
        return h(a)
    }

    function e(a) {
        a = j(a);
        return h(a)
    }

    function i(a) {
        switch (a) {
            case d("PolarisCreationTypes").STEP.select:
                return d("PolarisCreationTypes").STEP.crop;
            case d("PolarisCreationTypes").STEP.crop:
                return d("PolarisCreationTypes").STEP.edit;
            case d("PolarisCreationTypes").STEP.edit:
                return d("PolarisCreationTypes").STEP.compose;
            case d("PolarisCreationTypes").STEP.compose:
                return d("PolarisCreationTypes").STEP.publish;
            case d("PolarisCreationTypes").STEP.publish:
                c("Polarisunexpected")("no step after /create/upload/");
                return d("PolarisCreationTypes").STEP.select;
            case d("PolarisCreationTypes").STEP.preview:
                return d("PolarisCreationTypes").STEP.publish;
            case d("PolarisCreationTypes").STEP.editPostInfo:
                c("Polarisunexpected")("no step after editing post info");
                return d("PolarisCreationTypes").STEP.editPostInfo;
            default:
                c("Polarisunexpected")("unexpected creation step");
                return d("PolarisCreationTypes").STEP.select
        }
    }

    function j(a) {
        switch (a) {
            case d("PolarisCreationTypes").STEP.select:
                c("Polarisunexpected")("no step before /create/select/");
                return d("PolarisCreationTypes").STEP.select;
            case d("PolarisCreationTypes").STEP.crop:
                return d("PolarisCreationTypes").STEP.select;
            case d("PolarisCreationTypes").STEP.edit:
                return d("PolarisCreationTypes").STEP.crop;
            case d("PolarisCreationTypes").STEP.compose:
                return d("PolarisCreationTypes").STEP.edit;
            case d("PolarisCreationTypes").STEP.preview:
                return d("PolarisCreationTypes").STEP.compose;
            case d("PolarisCreationTypes").STEP.publish:
                c("Polarisunexpected")("shouldnt return to prev step once publish started");
                return d("PolarisCreationTypes").STEP.select;
            case d("PolarisCreationTypes").STEP.editPostInfo:
                c("Polarisunexpected")("shouldnt have a prev step from editing post");
                return d("PolarisCreationTypes").STEP.editPostInfo;
            default:
                c("Polarisunexpected")("unexpected creation step");
                return d("PolarisCreationTypes").STEP.select
        }
    }
    g.getCreationFirstStep = a;
    g.getCreationPath = h;
    g.getCreationNextPath = b;
    g.getCreationPrevPath = e;
    g.getCreationNextStep = i;
    g.getCreationPrevStep = j
}, 98);
__d("PolarisCreationLoggerHooks", ["PolarisCreationCameraLogger", "react", "usePolarisCreationState", "usePolarisIGCorePreviousValue"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;

    function a(a) {
        return function() {
            var b = d("usePolarisCreationState").useCreationState(),
                e = b.sessionId,
                f = c("usePolarisIGCorePreviousValue")(e);
            h(function() {
                e !== "" && f !== e && a({
                    sessionId: e
                })
            })
        }
    }
    b = a(d("PolarisCreationCameraLogger").logFeedCreationFeedGalleryStartShareSession);
    e = a(d("PolarisCreationCameraLogger").logFeedCreationStartCameraSession);
    f = a(d("PolarisCreationCameraLogger").logFeedCreationCameraStartGallerySession);
    g.useCreationFeedGalleryStartShareSessionLogger = b;
    g.useCreationStartCameraSessionLogger = e;
    g.useCreationStartGallerySessionLogger = f
}, 98);
__d("PolarisCreationCropHelpers", ["PolarisCreationV2State", "PolarisMediaConstants"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c) {
        return i(a, b, c) === a
    }

    function h(a, b, c) {
        if (c < a) return a;
        return c > b ? b : c
    }

    function i(a, b, c) {
        switch (b) {
            case "image":
                return h(d("PolarisMediaConstants").IMAGE_ASPECT_RATIO_MIN, d("PolarisMediaConstants").IMAGE_ASPECT_RATIO_MAX, a);
            case "video":
                return c === 1 ? h(d("PolarisMediaConstants").VIDEO_ASPECT_RATIO_DOVETAIL_MIN, d("PolarisMediaConstants").IMAGE_ASPECT_RATIO_MAX, a) : h(d("PolarisMediaConstants").IMAGE_ASPECT_RATIO_MIN, d("PolarisMediaConstants").IMAGE_ASPECT_RATIO_MAX, a)
        }
        return a
    }

    function b(a, b, c) {
        if (a === d("PolarisCreationV2State").CropTypes.PORTRAIT) return b === 1 && c === "video";
        else if (a === d("PolarisCreationV2State").CropTypes.PORTRAIT_DOVETAIL) return b > 1;
        return !1
    }

    function c(a, b, c) {
        var d = c.panningOffsetRatioX;
        c = c.panningOffsetRatioY;
        d = d * b;
        b = c * a;
        return {
            offsetX: d,
            offsetY: b
        }
    }
    g.isValidAspectRatio = a;
    g.getClosestValidAspectRatio = i;
    g.isInvalidPortraitRatio = b;
    g.getPanningOffsets = c
}, 98);
__d("PolarisCreationMediaButton.react", ["cx", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreText", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.altText,
            d = a.disabled;
        d = d === void 0 ? !1 : d;
        var e = a.endText,
            f = a.icon,
            g = a.onClick,
            h = a.selected;
        a = a.size;
        a = a === void 0 ? "default" : a;
        f = f;
        var j = h ? "ig-primary-text" : "web-always-white";
        return i.jsx("div", {
            className: "_abfz" + (e != null ? " _abf-" : "") + (d ? " _abf_" : "") + (h ? " _abg0" : "") + (a === "default" ? " _abg1" : "") + (a === "small" ? " _abg2" : ""),
            disabled: d,
            role: "button",
            children: i.jsx(c("PolarisIGCoreButton"), {
                borderless: !0,
                onClick: d ? void 0 : g,
                children: i.jsxs(c("PolarisIGCoreBox"), {
                    alignItems: "center",
                    direction: "row",
                    justifyContent: "center",
                    padding: a === "default" ? 2 : 1,
                    children: [i.jsx(f, {
                        alt: b,
                        color: j,
                        size: a === "default" ? 16 : 12
                    }), e != null && i.jsx(c("PolarisIGCoreBox"), {
                        marginStart: 2,
                        children: i.jsx(c("PolarisIGCoreText"), {
                            color: j,
                            weight: "semibold",
                            children: e
                        })
                    })]
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisModalOverlay.react", ["cx", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a = a.onClose;
        return i.jsx("div", {
            className: "_aa73",
            onClick: a,
            role: "none"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationMediaPopover.react", ["cx", "PolarisDOMListener.react", "PolarisModalOverlay.react", "PolarisTransition.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useRef;

    function a(a) {
        var b = a.children,
            e = a.onClose,
            f = a.onMouseDownOutside,
            g = a.visible,
            h = j(null),
            k = function(a, b) {
                f != null && b === d("PolarisTransition.react").TRANSITION_STATUS.ENTERED && a.target instanceof Node && h.current && !h.current.contains(a.target) && f(a)
            };
        return i.jsx(d("PolarisTransition.react").Transition, {
            "in": g,
            timeout: 180,
            children: function(a) {
                return (g || a !== d("PolarisTransition.react").TRANSITION_STATUS.EXITED) && i.jsxs(i.Fragment, {
                    children: [e != null && g && i.jsx(c("PolarisModalOverlay.react"), {
                        onClose: e
                    }), i.jsx("div", {
                        "aria-hidden": !g,
                        className: "_ac36" + (a === d("PolarisTransition.react").TRANSITION_STATUS.EXITING || a === d("PolarisTransition.react").TRANSITION_STATUS.EXITED ? " _ac37" : "") + (a === d("PolarisTransition.react").TRANSITION_STATUS.ENTERING || a === d("PolarisTransition.react").TRANSITION_STATUS.ENTERED ? " _ac38" : ""),
                        ref: h,
                        children: b
                    }), i.jsx(c("PolarisDOMListener.react"), {
                        capture: !0,
                        event: "mousedown",
                        handler: function(b) {
                            return k(b, a)
                        },
                        target: document
                    })]
                })
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationMediaPopoverButton.react", ["PolarisCreationMediaButton.react", "PolarisCreationMediaPopover.react", "PolarisIGCoreBox", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useRef;

    function a(a) {
        var b = a.altText,
            d = a.children,
            e = a.disabled,
            f = a.expanded,
            g = a.icon,
            j = a.togglePopover,
            k = i(null);
        a = function(a) {
            var b;
            a.target instanceof Node && !(k == null ? void 0 : (b = k.current) == null ? void 0 : b.contains(a.target)) && j()
        };
        return h.jsxs(h.Fragment, {
            children: [h.jsx(c("PolarisIGCoreBox"), {
                maxWidth: "100%",
                padding: 2,
                children: h.jsx(c("PolarisCreationMediaPopover.react"), {
                    onMouseDownOutside: a,
                    visible: f,
                    children: d
                })
            }), h.jsx("div", {
                ref: k,
                children: h.jsx(c("PolarisCreationMediaButton.react"), {
                    altText: b,
                    disabled: e,
                    icon: g,
                    onClick: j,
                    selected: f
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationV2ActionTypes", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "CREATION_SET_CAPTION";
    b = "CREATION_SET_CROP_RATIO";
    c = "CREATION_SET_CURRENT_ID";
    d = "CREATION_SET_LOCATION";
    e = "CREATION_SET_IS_POSTED";
    var g = "CREATION_SET_VIEWED_PHOTO_TOOLTIP",
        h = "CREATION_SET_VIEWED_REORDER_TOOLTIP",
        i = "CREATION_SET_COMMENTS_DISABLED",
        j = "CREATION_SET_LIKE_VIEW_COUNTS_DISABLED",
        k = "CREATION_SET_GENERATE_SUBTITLES_ENABLED",
        l = "CREATION_SET_MEDIA",
        m = "CREATION_ADD_MEDIA",
        n = "CREATION_REMOVE_MEDIA",
        o = "CREATION_UPDATE_MEDIA_META",
        p = "CREATION_ADD_USERTAG_TO_MEDIA",
        q = "CREATION_REMOVE_USERTAG_FROM_MEDIA",
        r = "CREATION_UPDATE_MEDIA_COVER_PHOTO",
        s = "CREATION_UPDATE_VIDEO_TRIM",
        t = "CREATION_SET_MULTI_POST_ORDER",
        u = "CREATION_SET_ERROR_MESSAGE",
        v = "CREATION_SET_ERROR_PAGE",
        w = "CREATION_RESET_STATE",
        x = "CREATION_SESSION_STARTED",
        y = "CREATION_SET_ELIGIBLE_UPCOMING_EVENTS",
        z = "CREATION_SET_UPCOMING_EVENT",
        A = "CREATION_SET_MONETIZATION_ELIGIBILITY",
        B = "CREATION_SET_ADS_ENABLED";
    f.CREATION_SET_CAPTION = a;
    f.CREATION_SET_CROP_RATIO = b;
    f.CREATION_SET_CURRENT_ID = c;
    f.CREATION_SET_LOCATION = d;
    f.CREATION_SET_IS_POSTED = e;
    f.CREATION_SET_VIEWED_PHOTO_TOOLTIP = g;
    f.CREATION_SET_VIEWED_REORDER_TOOLTIP = h;
    f.CREATION_SET_COMMENTS_DISABLED = i;
    f.CREATION_SET_LIKE_VIEW_COUNTS_DISABLED = j;
    f.CREATION_SET_GENERATE_SUBTITLES_ENABLED = k;
    f.CREATION_SET_MEDIA = l;
    f.CREATION_ADD_MEDIA = m;
    f.CREATION_REMOVE_MEDIA = n;
    f.CREATION_UPDATE_MEDIA_META = o;
    f.CREATION_ADD_USERTAG_TO_MEDIA = p;
    f.CREATION_REMOVE_USERTAG_FROM_MEDIA = q;
    f.CREATION_UPDATE_MEDIA_COVER_PHOTO = r;
    f.CREATION_UPDATE_VIDEO_TRIM = s;
    f.CREATION_SET_MULTI_POST_ORDER = t;
    f.CREATION_SET_ERROR_MESSAGE = u;
    f.CREATION_SET_ERROR_PAGE = v;
    f.CREATION_RESET_STATE = w;
    f.CREATION_SESSION_STARTED = x;
    f.CREATION_SET_ELIGIBLE_UPCOMING_EVENTS = y;
    f.CREATION_SET_UPCOMING_EVENT = z;
    f.CREATION_SET_MONETIZATION_ELIGIBILITY = A;
    f.CREATION_SET_ADS_ENABLED = B
}, 66);
__d("PolarisIGCoreFitPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M10 20H4v-6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2ZM20.999 2H14a1 1 0 0 0 0 2h5.999v6a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreCropLandscapePanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M19 20H5a4.004 4.004 0 0 1-4-4V8a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v8a4.004 4.004 0 0 1-4 4ZM5 6a2.002 2.002 0 0 0-2 2v8a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreCropPortraitPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M16 23H8a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM8 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreCropSquarePanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M19 23H5a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM5 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("usePolarisCreationMedia", ["invariant", "nullthrows", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";

    function i(a) {
        a = a.filteredMedia;
        if (a == null) return null;
        var b = a.height;
        a = a.width;
        a != null && b != null || h(0, 51614);
        return {
            height: b,
            width: a
        }
    }

    function j(a) {
        var b = a.type,
            d = b === "image" ? c("nullthrows")(a == null ? void 0 : a.image) : c("nullthrows")(a == null ? void 0 : a.video);
        return {
            adjustmentParams: a == null ? void 0 : a.adjustmentParams,
            filterName: a == null ? void 0 : a.filters.filterName,
            filterStrength: a == null ? void 0 : a.filters.filterStrength,
            mediaItemType: b,
            media: a,
            mediaItem: d
        }
    }

    function a(a) {
        var b = d("usePolarisCreationState").useCreationState();
        b = c("nullthrows")(b.media.get(a));
        a = i(b);
        return babelHelpers["extends"]({}, j(b), {
            mediaHeight: a == null ? void 0 : a.height,
            mediaWidth: a == null ? void 0 : a.width
        })
    }
    g.getMediaItemDimensions = i;
    g.getMediaInfo = j;
    g.useCreationMedia = a
}, 98);
__d("usePolarisCreationCurrentMedia", ["usePolarisCreationMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a, b = d("usePolarisCreationState").useCreationState();
        a = (a = b.currentMediaId) != null ? a : b.multiPostOrder[0];
        b = d("usePolarisCreationMedia").useCreationMedia(a);
        var c = b.adjustmentParams,
            e = b.filterName,
            f = b.filterStrength,
            g = b.media,
            h = b.mediaItem;
        b = b.mediaItemType;
        return {
            currentMediaAdjustmentParams: c,
            currentMediaItemType: b,
            currentMediaItem: h,
            currentMedia: g,
            currentMediaFilter: e,
            currentMediaFilterStrength: f,
            currentMediaId: a
        }
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationIsSingleVideoPost", ["usePolarisCreationCurrentMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("usePolarisCreationState").useCreationState(),
            b = c("usePolarisCreationCurrentMedia")();
        b = b.currentMediaItemType;
        return a.media.size === 1 && b === "video"
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationCropSetting", ["PolarisCreationConstants", "PolarisCreationCropHelpers", "PolarisCreationV2ActionTypes", "PolarisCreationV2State", "PolarisCreationV2Strings", "PolarisIGCoreCropLandscapePanoOutlineIcon", "PolarisIGCoreCropPortraitPanoOutlineIcon", "PolarisIGCoreCropSquarePanoOutlineIcon", "PolarisIGCorePhotoPanoOutlineIcon", "PolarisQEHelper", "usePolarisCreationDispatch", "usePolarisCreationIsSingleVideoPost", "usePolarisCreationMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a, b = d("usePolarisCreationDispatch").useCreationDispatch(),
            e = d("usePolarisCreationState").useCreationState(),
            f = c("usePolarisCreationIsSingleVideoPost")(),
            g = e.multiPostOrder.length;
        e = e.multiPostOrder[0];
        e = d("usePolarisCreationMedia").useCreationMedia(e);
        e = e.media;
        var h = d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? d("PolarisCreationCropHelpers").getClosestValidAspectRatio(e.originalAspectRatio, e.type, g) : e.originalAspectRatio,
            i = (a = {}, a[d("PolarisCreationV2State").CropTypes.ORIGINAL] = h, a[d("PolarisCreationV2State").CropTypes.SQUARE] = d("PolarisCreationConstants").SQUARE_CROP_RATIO, a[d("PolarisCreationV2State").CropTypes.PORTRAIT] = d("PolarisCreationConstants").PORTRAIT_CROP_RATIO, a[d("PolarisCreationV2State").CropTypes.PORTRAIT_DOVETAIL] = d("PolarisCreationConstants").PORTRAIT_DOVETAIL_CROP_RATIO, a[d("PolarisCreationV2State").CropTypes.LANDSCAPE] = d("PolarisCreationConstants").LANDSCAPE_CROP_RATIO, a);
        h = [{
            altText: d("PolarisCreationV2Strings").PHOTO_OUTLINE_ALT,
            title: d("PolarisCreationV2Strings").SELECT_CROP_ORIGINAL,
            icon: c("PolarisIGCorePhotoPanoOutlineIcon"),
            type: d("PolarisCreationV2State").CropTypes.ORIGINAL
        }, {
            altText: d("PolarisCreationV2Strings").CROP_SQUARE_ALT,
            title: d("PolarisCreationV2Strings").SELECT_CROP_SQUARE,
            icon: c("PolarisIGCoreCropSquarePanoOutlineIcon"),
            type: d("PolarisCreationV2State").CropTypes.SQUARE
        }, {
            altText: d("PolarisCreationV2Strings").CROP_PORTRAIT_ALT,
            title: f ? d("PolarisCreationV2Strings").SELECT_CROP_PORTRAIT_DOVETAIL : d("PolarisCreationV2Strings").SELECT_CROP_PORTRAIT,
            icon: c("PolarisIGCoreCropPortraitPanoOutlineIcon"),
            type: f ? d("PolarisCreationV2State").CropTypes.PORTRAIT_DOVETAIL : d("PolarisCreationV2State").CropTypes.PORTRAIT
        }, {
            altText: d("PolarisCreationV2Strings").CROP_LANDSCAPE_ALT,
            title: d("PolarisCreationV2Strings").SELECT_CROP_LANDSCAPE,
            icon: c("PolarisIGCoreCropLandscapePanoOutlineIcon"),
            type: d("PolarisCreationV2State").CropTypes.LANDSCAPE
        }];
        a = d("PolarisCreationCropHelpers").isValidAspectRatio(e.originalAspectRatio, e.type, g) ? d("PolarisCreationConstants").DEFAULT_SELECTED_CROP : d("PolarisCreationConstants").SQUARE_SELECTED_CROP;

        function j(a) {
            var c = i[a];
            b({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_CROP_RATIO,
                cropRatio: c,
                cropType: a
            })
        }
        return {
            initialSelectedCrop: d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? d("PolarisCreationConstants").SQUARE_SELECTED_CROP : a,
            setSelectedCropType: j,
            cropTypes: h
        }
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationMediaPopoverContext", ["react"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext;
    c = {
        CROP: "CROP",
        ZOOM: "ZOOM",
        GALLERY: "GALLERY"
    };
    var i = b.createContext({
        openedPopover: null,
        setOpenedPopover: function() {}
    });

    function a() {
        return h(i)
    }
    g.CreationMediaPopoverView = c;
    g.CreationMediaPopoverContext = i;
    g.useCreationMediaPopoverContext = a
}, 98);
__d("PolarisCreationCropMediaButton.react", ["cx", "invariant", "PolarisCreationConstants", "PolarisCreationCropHelpers", "PolarisCreationMediaPopoverButton.react", "PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreDivider", "PolarisIGCoreFitPanoOutlineIcon", "PolarisIGCoreText", "react", "usePolarisCreationCropSetting", "usePolarisCreationDispatch", "usePolarisCreationMedia", "usePolarisCreationMediaPopoverContext", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
        l = b.useState;

    function m(a) {
        var b = a.cropType,
            d = a.onClick;
        a = a.selected;
        a = a ? "web-always-white" : "ig-secondary-text";
        var e = b.altText,
            f = b.icon,
            g = b.title;
        f = f;
        return j.jsx(c("PolarisIGCoreButton"), {
            borderless: !0,
            onClick: function() {
                return d(b.type)
            },
            children: j.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "center",
                direction: "row",
                flex: "grow",
                justifyContent: "start",
                marginStart: 3,
                paddingX: 1,
                children: [j.jsx(c("PolarisIGCoreBox"), {
                    alignItems: "start",
                    flex: "grow",
                    children: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        color: a,
                        children: g
                    })
                }), j.jsx(c("PolarisIGCoreBox"), {
                    padding: 3,
                    children: j.jsx(f, {
                        alt: e,
                        color: a,
                        size: 24
                    })
                })]
            })
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        a = d("usePolarisCreationMediaPopoverContext").useCreationMediaPopoverContext();
        var b = a.openedPopover,
            e = a.setOpenedPopover,
            f = b === d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.CROP,
            g = d("usePolarisCreationDispatch").useCreationDispatch(),
            h = d("usePolarisCreationState").useCreationState();
        a = c("usePolarisCreationCropSetting")();
        var n = a.cropTypes,
            o = a.initialSelectedCrop,
            p = a.setSelectedCropType,
            q = h.multiPostOrder.length;
        a = h.multiPostOrder[0];
        a = d("usePolarisCreationMedia").useCreationMedia(a);
        var r = a.media;
        a = l((a = h.cropType) != null ? a : o);
        var s = a[0],
            t = a[1];
        k(function() {
            h.cropRatio == null || h.cropType == null ? (o === d("PolarisCreationConstants").SQUARE_SELECTED_CROP || i(0, 54678), g({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_CROP_RATIO,
                cropRatio: d("PolarisCreationConstants").SQUARE_CROP_RATIO,
                cropType: s
            }), t(o)) : d("PolarisCreationCropHelpers").isInvalidPortraitRatio(h.cropType, q, r.type) ? (g({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_CROP_RATIO,
                cropRatio: d("PolarisCreationCropHelpers").getClosestValidAspectRatio(r.originalAspectRatio, r.type, q),
                cropType: s
            }), t(o)) : t(h.cropType)
        }, [r.originalAspectRatio, r.type, g, o, q, h.cropRatio, s, h.cropType]);
        a = function() {
            e(f ? null : d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.CROP)
        };
        b = b != null && b !== d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.CROP;
        return j.jsx(c("PolarisIGCoreBox"), {
            alignItems: "start",
            direction: "column",
            children: j.jsx(c("PolarisCreationMediaPopoverButton.react"), {
                altText: d("PolarisCreationV2Strings").SELECT_CROP_ALT_TEXT,
                disabled: b,
                expanded: f,
                icon: c("PolarisIGCoreFitPanoOutlineIcon"),
                togglePopover: a,
                children: n.map(function(a, b) {
                    return j.jsxs(j.Fragment, {
                        children: [j.jsx(m, {
                            cropType: a,
                            onClick: function() {
                                p(a.type)
                            },
                            selected: a.type === s
                        }), b < n.length - 1 && j.jsx(c("PolarisIGCoreDivider"), {
                            dangerouslySetClassName: {
                                __className: "_abfu"
                            }
                        })]
                    }, b)
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationStepProvider.react", ["PolarisCreationHelpers", "PolarisCreationTypes", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    c = d("react");
    e = c.createContext;
    var i = c.useCallback,
        j = c.useContext,
        k = c.useMemo,
        l = c.useState;
    c = {
        handleErrorPage: function() {},
        handleNextStep: function() {},
        handlePreview: function() {},
        handlePrevStep: function() {},
        handlePublishSuccess: function() {},
        handleStartOver: function() {},
        handleTryAgain: function() {},
        step: d("PolarisCreationHelpers").getCreationFirstStep()
    };
    var m = e(c);

    function a(a) {
        var b = a.children;
        a = a.initialStep;
        a = a === void 0 ? d("PolarisCreationHelpers").getCreationFirstStep() : a;
        a = l(a);
        var c = a[0],
            e = a[1],
            f = i(function() {
                e(d("PolarisCreationHelpers").getCreationNextStep(c))
            }, [c]),
            g = i(function() {
                e(d("PolarisCreationTypes").STEP.preview)
            }, []),
            j = i(function() {
                e(d("PolarisCreationHelpers").getCreationPrevStep(c))
            }, [c]),
            n = i(function() {
                e(d("PolarisCreationTypes").STEP.select)
            }, []),
            o = i(function() {
                e(d("PolarisCreationTypes").STEP.done)
            }, []),
            p = i(function() {
                e(d("PolarisCreationTypes").STEP.error)
            }, []),
            q = i(function() {
                e(d("PolarisCreationTypes").STEP.publish)
            }, []);
        a = k(function() {
            return {
                step: c,
                handleErrorPage: p,
                handleNextStep: f,
                handlePreview: g,
                handlePrevStep: j,
                handlePublishSuccess: o,
                handleStartOver: n,
                handleTryAgain: q
            }
        }, [p, f, g, j, o, n, q, c]);
        return h.jsx(m.Provider, {
            value: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a) {
        a === void 0 && d("PolarisCreationHelpers").getCreationFirstStep();
        return j(m)
    }
    g.CreationStepProvider = a;
    g.useCreationStep = b
}, 98);
__d("PolarisCreationMediaHelpers", ["PolarisMediaHelpers", "PolarisUA", "gkx", "nullthrows"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 16777216,
        i = .99,
        j = h * i;

    function k(a) {
        var b = a.croppedHeight,
            c = a.croppedWidth,
            d = a.imageHeight,
            e = a.imageWidth,
            f = a.offsetLeft;
        a = a.offsetTop;
        f = f;
        a = a;
        f < 0 && (f = 0);
        a < 0 && (a = 0);
        a + b > d && (a = d - b);
        f + c > e && (f = e - c);
        return {
            finalSourceX: f,
            finalSourceY: a
        }
    }

    function a(a) {
        var b = a.imageHeight,
            e = a.imageWidth,
            f = a.offsetLeft,
            g = a.offsetTop,
            h = a.scaleFactor;
        a = a.sourceImg;
        var i = e * b;
        d("PolarisUA").isMobileSafari() && i > j && c("gkx")("4778") ? i = Math.min(1, Math.sqrt(j / i)) : i = 1;
        e = l(e, b, h, f, g);
        b = e.sourceHeight;
        h = e.sourceWidth;
        f = e.sourceX;
        g = e.sourceY;
        e = Math.round(h * i);
        i = Math.round(b * i);
        var m = document.createElement("canvas");
        m.width = e;
        m.height = i;
        var n = c("nullthrows")(m.getContext("2d"));
        f = k({
            offsetLeft: f,
            offsetTop: g,
            croppedWidth: h,
            croppedHeight: b,
            imageWidth: a.width,
            imageHeight: a.height
        });
        g = f.finalSourceX;
        f = f.finalSourceY;
        n.drawImage(a, g, f, h, b, 0, 0, e, i);
        return m
    }

    function l(a, b, c, d, e) {
        var f = a / c;
        c = b / c;
        a = (a - f) / 2;
        b = (b - c) / 2;
        a = a + d;
        d = b + e;
        return {
            sourceX: a,
            sourceY: d,
            sourceWidth: f,
            sourceHeight: c
        }
    }

    function m(a, b, c) {
        var d = a / b,
            e = a,
            f = b,
            g = 0,
            h = 0;
        d > c ? (e = b * c, g = Math.abs(a - e) / 2) : d < c && (f = a / c, h = Math.abs(b - f) / 2);
        return {
            croppedWidth: e,
            croppedHeight: f,
            offsetLeft: g,
            offsetTop: h
        }
    }

    function n(a) {
        if (a < 0) return 0;
        a = Math.floor(a);
        return a % 2 === 0 ? a : a - 1
    }

    function b(a) {
        var b = a.cropRatio,
            c = a.mute,
            d = a.panningOffsetRatioX,
            e = a.panningOffsetRatioY,
            f = a.trimEnd,
            g = a.trimStart,
            h = a.videoHeight;
        a = a.videoWidth;
        a = m(a, h, b);
        h = a.croppedHeight;
        b = a.croppedWidth;
        var i = a.offsetLeft;
        a = a.offsetTop;
        d = b * d;
        e = h * e;
        i = i - d;
        d = a - e;
        a = i < 0 ? 0 : Math.floor(i);
        e = d < 0 ? 0 : Math.floor(d);
        return {
            crop_height: n(h),
            crop_width: n(b),
            crop_x1: a,
            crop_y1: e,
            mute: c,
            trim_end: f,
            trim_start: g
        }
    }

    function e(a, b, e, f) {
        if (f == null) return {
            croppedHeightScaled: 0,
            croppedWidthScaled: 0
        };
        a = m(a, b, e);
        b = a.croppedHeight;
        e = a.croppedWidth;
        a = c("nullthrows")(f).getBoundingClientRect();
        f = a.height;
        a = a.width;
        b = d("PolarisMediaHelpers").getDimensionsToStretchFit(b, e, f, a);
        return {
            croppedHeightScaled: b.height,
            croppedWidthScaled: b.width
        }
    }

    function f(a, b, c, d) {
        var e = a,
            f = b;
        a < c && (e = c, f = c / a * b);
        b < d && (f = d, e = d / b * a);
        return {
            height: e,
            width: f
        }
    }

    function o(a, b, c, d) {
        b = 1 / a;
        a = b / 2 * c;
        c = b / 2 * d;
        return {
            transformedOffsetX: a,
            transformedOffsetY: c
        }
    }

    function p(a, b) {
        b === void 0 && (b = "");
        var c = 1024;
        a = atob(a);
        var d = a.length,
            e = Math.ceil(d / c),
            f = new Array(e);
        for (var g = 0; g < e; ++g) {
            var h = g * c,
                i = Math.min(h + c, d),
                j = new Array(i - h);
            for (var h = h, k = 0; h < i; ++k, ++h) j[k] = a[h].charCodeAt(0);
            f[g] = new Uint8Array(j)
        }
        return new Blob(f, {
            type: b
        })
    }
    g.getBoundedSource = k;
    g.renderCroppedImage = a;
    g.getSourceCoordinatesAndDimensions = l;
    g.getCroppedWidthAndHeight = m;
    g.getVideoEditParams = b;
    g.getCroppedHeightAndWidthScaledDimensions = e;
    g.getScaledOriginalMediaDimensions = f;
    g.transformPanningOffsetsForRatios = o;
    g.b64toBlob = p
}, 98);
__d("PolarisIGTVConstants", [], function(a, b, c, d, e, f) {
    "use strict";
    a = {
        LANDSCAPE: "landscape",
        PORTRAIT: "portrait"
    };
    b = 16 / 9;
    c = 1e7;
    d = 10;
    e = 3e4;
    f.ORIENTATIONS = a;
    f.VIDEO_PREVIEW_LANDSCAPE_ASPECT_RATIO = b;
    f.UPLOAD_CHUNK_SIZE = c;
    f.UPLOAD_RETRY_COUNT = d;
    f.UPLOAD_RETRY_TIMEOUT_MS = e
}, 66);
__d("PolarisIGMediaPublishFailureFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_media_publish_failure", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIGMediaPublishReadyFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_media_publish_ready", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIGMediaPublishSuccessFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_media_publish_success", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIGVideoCoverPhotoUploadFailureFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_video_cover_photo_upload_failure", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIGVideoCoverPhotoUploadStartFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_video_cover_photo_upload_start", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIGVideoCoverPhotoUploadSuccessFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_video_cover_photo_upload_success", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIgMediaIngestStartFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_media_ingest_start", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIgMediaPublishInvokeFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_media_publish_invoke", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIgMediaUploadFailureFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_media_upload_failure", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIgMediaUploadStartFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_media_upload_start", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisIgMediaUploadSuccessFalcoEvent", ["PolarisFalcoLogger"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        falco: !0,
        pigeon: !1
    };
    a = function() {
        function a() {}
        a.log = function(a) {
            d("PolarisFalcoLogger").FalcoLogger.log("ig_media_upload_success", a(), {}, h)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisUploadLogger", ["PolarisIGMediaPublishFailureFalcoEvent", "PolarisIGMediaPublishReadyFalcoEvent", "PolarisIGMediaPublishSuccessFalcoEvent", "PolarisIGVideoCoverPhotoUploadFailureFalcoEvent", "PolarisIGVideoCoverPhotoUploadStartFalcoEvent", "PolarisIGVideoCoverPhotoUploadSuccessFalcoEvent", "PolarisIgMediaIngestStartFalcoEvent", "PolarisIgMediaPublishInvokeFalcoEvent", "PolarisIgMediaUploadFailureFalcoEvent", "PolarisIgMediaUploadStartFalcoEvent", "PolarisIgMediaUploadSuccessFalcoEvent", "nullthrows"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            Object.assign(this, a)
        }
        a.fromLoggingData = function(b) {
            return new a(b)
        };
        var b = a.prototype;
        b.toIGMediaUploadEventData = function() {
            return {
                connection: "None",
                duration_ms: this.durationMs,
                ingest_id: c("nullthrows")(this.uploadId),
                ingest_surface: this.ingestSurface,
                media_type: this.mediaType,
                original_file_size_bytes: this.fileSizeBytes,
                original_media_height: this.mediaHeight,
                original_media_width: this.mediaWidth,
                session_id: this.sessionId
            }
        };
        b.toIGMediaUploadErrorEventData = function(a) {
            return {
                connection: "None",
                duration_ms: this.durationMs,
                error_message: a,
                ingest_id: c("nullthrows")(this.uploadId),
                ingest_surface: this.ingestSurface,
                media_type: this.mediaType,
                original_file_size_bytes: this.fileSizeBytes,
                original_media_height: this.mediaHeight,
                original_media_width: this.mediaWidth,
                session_id: this.sessionId
            }
        };
        b.toIGMediaIngestEventData = function() {
            return {
                connection: "None",
                ingest_id: c("nullthrows")(this.uploadId),
                ingest_surface: this.ingestSurface,
                is_carousel_item: this.isCarouselItem,
                media_type: this.mediaType,
                session_id: this.sessionId
            }
        };
        b.toIGMediaPublishEventData = function() {
            return {
                connection: "None",
                duration_ms: this.durationMs,
                file_size_bytes: this.fileSizeBytes,
                ingest_id: c("nullthrows")(this.uploadId),
                ingest_surface: this.ingestSurface,
                is_carousel_item: this.isCarouselItem,
                media_type: this.mediaType,
                session_id: this.sessionId
            }
        };
        b.toIGMediaPublishInvokeEventData = function() {
            return {
                connection: "None",
                ingest_surface: this.ingestSurface,
                is_carousel_item: this.isCarouselItem,
                media_type: this.mediaType,
                publish_id: this.sessionId,
                session_id: this.sessionId,
                target_surface: this.ingestSurface
            }
        };
        b.toIGMediaPublishSuccessEvent = function() {
            return {
                connection: "None",
                ingest_surface: this.ingestSurface,
                is_carousel_item: this.isCarouselItem,
                media_type: this.mediaType,
                publish_id: this.sessionId,
                session_id: this.sessionId,
                target_surface: this.ingestSurface
            }
        };
        b.toIGMediaPublishFailureEvent = function() {
            return {
                connection: "None",
                ingest_surface: this.ingestSurface,
                media_type: this.mediaType,
                session_id: this.sessionId,
                target_surface: this.ingestSurface
            }
        };
        b.toIGMediaCoverPhotoUploadEventData = function() {
            return {
                connection: "None",
                file_size_bytes: this.fileSizeBytes,
                ingest_id: c("nullthrows")(this.uploadId),
                ingest_surface: this.ingestSurface,
                media_height: this.mediaHeight,
                media_type: "video",
                media_width: this.mediaWidth,
                session_id: this.sessionId,
                target_surface: this.ingestSurface
            }
        };
        b.logUploadStart = function() {
            var a = this;
            c("PolarisIgMediaUploadStartFalcoEvent").log(function() {
                return a.toIGMediaUploadEventData()
            });
            c("PolarisIgMediaIngestStartFalcoEvent").log(function() {
                return a.toIGMediaIngestEventData()
            })
        };
        b.logUploadSuccess = function() {
            var a = this;
            c("PolarisIgMediaUploadSuccessFalcoEvent").log(function() {
                return a.toIGMediaUploadEventData()
            });
            this.logPublishReady()
        };
        b.logUploadFailure = function(a) {
            var b = this;
            c("PolarisIgMediaUploadFailureFalcoEvent").log(function() {
                return b.toIGMediaUploadErrorEventData(a)
            })
        };
        b.logPublishInvoke = function() {
            var a = this;
            c("PolarisIgMediaPublishInvokeFalcoEvent").log(function() {
                return a.toIGMediaPublishInvokeEventData()
            })
        };
        b.logPublishReady = function() {
            var a = this;
            c("PolarisIGMediaPublishReadyFalcoEvent").log(function() {
                return a.toIGMediaPublishEventData()
            })
        };
        b.logPublishSuccess = function() {
            var a = this;
            c("PolarisIGMediaPublishSuccessFalcoEvent").log(function() {
                return a.toIGMediaPublishSuccessEvent()
            })
        };
        b.logPublishFailure = function() {
            var a = this;
            c("PolarisIGMediaPublishFailureFalcoEvent").log(function() {
                return a.toIGMediaPublishFailureEvent()
            })
        };
        b.logCoverPhotoUploadStart = function() {
            var a = this;
            c("PolarisIGVideoCoverPhotoUploadStartFalcoEvent").log(function() {
                return a.toIGMediaCoverPhotoUploadEventData()
            })
        };
        b.logCoverPhotoUploadSuccess = function() {
            var a = this;
            c("PolarisIGVideoCoverPhotoUploadSuccessFalcoEvent").log(function() {
                return a.toIGMediaCoverPhotoUploadEventData()
            })
        };
        b.logCoverPhotoUploadFailure = function() {
            var a = this;
            c("PolarisIGVideoCoverPhotoUploadFailureFalcoEvent").log(function() {
                return a.toIGMediaCoverPhotoUploadEventData()
            })
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolariscanvasDrawImage", ["nullthrows"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.element,
            d = a.height;
        a = a.width;
        var e = document.createElement("canvas");
        e.setAttribute("width", a + "px");
        e.setAttribute("height", d + "px");
        var f = c("nullthrows")(e.getContext("2d"));
        f.drawImage(b, 0, 0, a, d);
        return {
            element: e,
            height: d,
            width: a
        }
    }
    g["default"] = a
}, 98);
__d("PolariscreateJpegFileFromCanvas", ["PolarisgetBlobFromCanvas"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        return c("PolarisgetBlobFromCanvas")(a).then(function(a) {
            return new File([a], b, {
                type: "image/jpeg"
            })
        })
    }
    g["default"] = a
}, 98);
__d("PolarisextractVideoFrame", ["PolariscanvasDrawImage"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.videoHeight,
            d = a.videoWidth;
        return c("PolariscanvasDrawImage")({
            element: a,
            height: b,
            width: d
        })
    }
    g["default"] = a
}, 98);
__d("PolarisresolveVideoEvent", ["PolarisUA", "Promise"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "loadeddata";

    function i(a) {
        return a.then(function(a) {
            return new(b("Promise"))(function(b) {
                window.setTimeout(function() {
                    return b(a)
                }, 1e3)
            })
        })
    }

    function a(a, c) {
        var e = new(b("Promise"))(function(b) {
            var d = function d() {
                a.removeEventListener(c, d), b(a)
            };
            a.addEventListener(c, d)
        });
        return c === h && d("PolarisUA").isEdge() ? i(e) : e
    }
    g["default"] = a
}, 98);
__d("PolarissourceImageFactory", [], function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        dataURL: "",
        file: new Blob(),
        height: 0,
        location: null,
        orientation: 0,
        width: 0
    };

    function a(a) {
        a === void 0 && (a = {});
        return babelHelpers["extends"]({}, g, a)
    }
    f["default"] = a
}, 66);
__d("PolariscreateCoverPhoto", ["PolarisCreationConstants", "PolarisUA", "PolariscanvasDrawImage", "PolariscreateJpegFileFromCanvas", "PolarisextractVideoFrame", "PolarisreadImageFile", "PolarisresolveVideoEvent", "PolarissourceImageFactory", "Promise", "regeneratorRuntime"], function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        return Math.round((a + Number.EPSILON) * 100) / 100
    }

    function i(a) {
        return [d("PolarisCreationConstants").DEFAULT_VIDEO_COVER_TIME, h(a * .25), h(a * .5), h(a * .75), h(a - .01)]
    }

    function j(a) {
        return new(b("Promise"))(function(b, c) {
            var e = document.createElement("video");
            e.src = a.src;
            d("PolarisUA").isMobileSafari() && (e.autoplay = !0);
            e.onloadeddata = function() {
                return b(e)
            }
        })
    }

    function k(a, e) {
        var f, g, h, i, k, m, n, o;
        return b("regeneratorRuntime").async(function(p) {
            while (1) switch (p.prev = p.next) {
                case 0:
                    p.next = 2;
                    return b("regeneratorRuntime").awrap(j(a));
                case 2:
                    f = p.sent;
                    p.next = 5;
                    return b("regeneratorRuntime").awrap(l(f, null, e));
                case 5:
                    g = p.sent;
                    p.next = 8;
                    return b("regeneratorRuntime").awrap(d("PolarisreadImageFile").readImageFile(g));
                case 8:
                    h = p.sent;
                    i = h.dataURL;
                    k = h.height;
                    m = h.location;
                    n = h.orientation;
                    o = h.width;
                    return p.abrupt("return", c("PolarissourceImageFactory")({
                        dataURL: i,
                        height: k,
                        location: m,
                        orientation: n,
                        width: o,
                        file: g
                    }));
                case 15:
                case "end":
                    return p.stop()
            }
        }, null, this)
    }

    function a(a) {
        var c, d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    c = i(a.duration);
                    d = c.map(function(c) {
                        return b("regeneratorRuntime").async(function(b) {
                            while (1) switch (b.prev = b.next) {
                                case 0:
                                    return b.abrupt("return", k(a, c));
                                case 1:
                                case "end":
                                    return b.stop()
                            }
                        }, null, this)
                    });
                    return e.abrupt("return", b("Promise").all(d));
                case 3:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function l(a, b, d) {
        d === void 0 && (d = .01);
        var e = c("PolarisresolveVideoEvent")(a, "timeupdate").then(function() {
            var d = babelHelpers["extends"]({}, c("PolarisextractVideoFrame")(a), {
                rotationAngle: 0,
                type: "image/jpeg"
            });
            d = b != null ? b(d) : d;
            var e = d.element;
            e = e instanceof HTMLCanvasElement ? e : c("PolariscanvasDrawImage")(d).element;
            return c("PolariscreateJpegFileFromCanvas")(e, "cover.jpg")
        });
        a.currentTime = d;
        return e
    }
    g.getImageIntervalsForDuration = i;
    g.createCoverPhoto = k;
    g.createCoverPhotoPlaceholdersFromVideo = a;
    g.createCoverPhotoFileFromVideo = l
}, 98);
__d("PolarisresumableVideoUpload", ["PolarisAPI", "Promise", "regeneratorRuntime"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, c, e, f, g) {
        f === void 0 && (f = function(a, b) {
            return !0
        });
        g === void 0 && (g = {
            retries: 10,
            timeBetweenRetries: 3e4
        });
        g = g;
        var h = g.chunkSize,
            i = h === void 0 ? a.file.size : h,
            j = g.retries,
            k = g.timeBetweenRetries,
            l = a.file.size,
            m = 0;

        function n(a) {
            c && c({
                sent: m + a.sent,
                successfullyAcknowledged: m,
                total: l
            })
        }
        return new(b("Promise"))(function(c, g) {
            var h = 0;

            function o() {
                var p, q;
                return b("regeneratorRuntime").async(function(r) {
                    while (1) switch (r.prev = r.next) {
                        case 0:
                            r.prev = 0;
                            r.next = 3;
                            return b("regeneratorRuntime").awrap(d("PolarisAPI").ruploadVideoOffset(a));
                        case 3:
                            m = r.sent;
                            r.next = 6;
                            return b("regeneratorRuntime").awrap(d("PolarisAPI").ruploadVideo(babelHelpers["extends"]({}, a, {
                                fileByteOffset: m,
                                chunkSize: i
                            }), n, e));
                        case 6:
                            p = r.sent;
                            h = 0;
                            r.next = 14;
                            break;
                        case 10:
                            r.prev = 10, r.t0 = r["catch"](0), q = r.t0, h++;
                        case 14:
                            p != null && m + i >= l ? c(p) : q != null && (h >= j || !f(a, q)) ? g(q) : window.setTimeout(function() {
                                return o()
                            }, q == null ? 0 : k);
                        case 15:
                        case "end":
                            return r.stop()
                    }
                }, null, this, [
                    [0, 10]
                ])
            }
            o()
        })
    }
    g["default"] = a
}, 98);
__d("PolarisCreationV2Actions", ["PolarisAPI", "PolarisCreationConstants", "PolarisCreationError", "PolarisCreationMediaHelpers", "PolarisCreationV2ActionTypes", "PolarisCreationV2State", "PolarisIGTVConstants", "PolarisImageFactory", "PolarisODS", "PolarisUploadHelpers", "PolarisUploadLogger", "PolariscreateCoverPhoto", "PolarisreadImageFile", "PolarisreadVideoFile", "PolarisresumableVideoUpload", "Polarisunexpected", "PolariswithExponentialBackoff", "Promise", "nullthrows", "regeneratorRuntime", "uuid"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return {
            type: d("PolarisCreationV2ActionTypes").CREATION_RESET_STATE
        }
    }

    function e() {
        var a = c("uuid")();
        return {
            type: d("PolarisCreationV2ActionTypes").CREATION_SESSION_STARTED,
            sessionId: a
        }
    }

    function h(a) {
        return new Array(a).fill(0).map(function(a, b) {
            return d("PolarisUploadHelpers").createUploadId()
        })
    }

    function i(a, c) {
        var d, e, f, g;
        return b("regeneratorRuntime").async(function(i) {
            while (1) switch (i.prev = i.next) {
                case 0:
                    i.next = 2;
                    return b("regeneratorRuntime").awrap(l(a, c));
                case 2:
                    d = i.sent;
                    e = new Map();
                    f = [];
                    g = h(d.length);
                    d.forEach(function(a, b) {
                        b = g[b];
                        e.set(b, a);
                        f.push(b)
                    });
                    return i.abrupt("return", {
                        mediaMap: e,
                        mediaOrder: f
                    });
                case 8:
                case "end":
                    return i.stop()
            }
        }, null, this)
    }

    function f(a, c) {
        var e, f, g;
        return b("regeneratorRuntime").async(function(h) {
            while (1) switch (h.prev = h.next) {
                case 0:
                    h.next = 2;
                    return b("regeneratorRuntime").awrap(i(a, c));
                case 2:
                    e = h.sent;
                    f = e.mediaMap;
                    g = e.mediaOrder;
                    return h.abrupt("return", {
                        type: d("PolarisCreationV2ActionTypes").CREATION_SET_MEDIA,
                        media: f,
                        multiPostOrder: g
                    });
                case 6:
                case "end":
                    return h.stop()
            }
        }, null, this)
    }

    function j(a, c) {
        var e, f, g;
        return b("regeneratorRuntime").async(function(h) {
            while (1) switch (h.prev = h.next) {
                case 0:
                    h.next = 2;
                    return b("regeneratorRuntime").awrap(i(a, c));
                case 2:
                    e = h.sent;
                    f = e.mediaMap;
                    g = e.mediaOrder;
                    return h.abrupt("return", {
                        type: d("PolarisCreationV2ActionTypes").CREATION_ADD_MEDIA,
                        media: f,
                        multiPostOrder: g
                    });
                case 6:
                case "end":
                    return h.stop()
            }
        }, null, this)
    }

    function k(a) {
        return {
            type: d("PolarisCreationV2ActionTypes").CREATION_REMOVE_MEDIA,
            mediaId: a
        }
    }

    function l(a, e) {
        var f, g;
        return b("regeneratorRuntime").async(function(h) {
            while (1) switch (h.prev = h.next) {
                case 0:
                    f = [];
                    g = a.length;
                    a.forEach(function(a) {
                        var b = a.type,
                            h = d("PolarisreadImageFile").isImage(b),
                            i = h ? e.image : e.video,
                            j = i.maxFileSize;
                        i = i.minFileSize;
                        if (a.size > j) throw d("PolarisCreationError").CreationError.maxMediaSize(a.name);
                        if (a.size < i) throw d("PolarisCreationError").CreationError.minMediaSize(a.name);
                        h ? f.push(m(a)) : d("PolarisreadVideoFile").isVideo(b) ? f.push(o(a, e.video, g)) : c("Polarisunexpected")("Unexpected media type")
                    });
                    h.next = 5;
                    return b("regeneratorRuntime").awrap(b("Promise").all(f));
                case 5:
                    return h.abrupt("return", h.sent);
                case 6:
                case "end":
                    return h.stop()
            }
        }, null, this)
    }

    function m(a) {
        var e, f, g, h;
        return b("regeneratorRuntime").async(function(i) {
            while (1) switch (i.prev = i.next) {
                case 0:
                    if (!d("PolarisreadImageFile").isHeicImage(a.type)) {
                        i.next = 9;
                        break
                    }
                    i.next = 3;
                    return b("regeneratorRuntime").awrap(w({
                        blob: a,
                        id: d("PolarisUploadHelpers").createUploadId(),
                        sessionId: c("uuid")(),
                        transcodeOnly: !0
                    }));
                case 3:
                    f = i.sent;
                    i.next = 6;
                    return b("regeneratorRuntime").awrap(d("PolarisreadImageFile").readImageFile(f.transcodedBlob));
                case 6:
                    e = i.sent;
                    i.next = 12;
                    break;
                case 9:
                    i.next = 11;
                    return b("regeneratorRuntime").awrap(d("PolarisreadImageFile").readImageFile(a));
                case 11:
                    e = i.sent;
                case 12:
                    g = {
                        dataURL: e.dataURL,
                        file: a,
                        height: e.height,
                        location: e.location,
                        orientation: e.orientation,
                        width: e.width
                    };
                    h = e.width / e.height;
                    return i.abrupt("return", {
                        adjustmentParams: {
                            brightness: 0,
                            contrast: 0,
                            saturation: 0,
                            temperature: 0,
                            fade: 0,
                            vignette: 0
                        },
                        altText: null,
                        audio: d("PolarisCreationV2State").AUDIO_STATUS.none,
                        coverPhoto: null,
                        croppedCanvas: null,
                        filteredBlob: null,
                        filteredMedia: null,
                        filteredThumbnails: null,
                        filters: {
                            filterName: d("PolarisCreationConstants").INIT_FILTER_NAME,
                            filterStrength: d("PolarisCreationConstants").INIT_FILTER_STRENGTH
                        },
                        id: null,
                        image: g,
                        originalAspectRatio: h,
                        panningOffsetRatioX: 0,
                        panningOffsetRatioY: 0,
                        scale: 1,
                        tags: new Map(),
                        trim: null,
                        transferProgress: null,
                        type: "image",
                        uploadId: null,
                        video: null
                    });
                case 15:
                case "end":
                    return i.stop()
            }
        }, null, this)
    }

    function n(a) {
        return a.videoHeight === 0 || a.videoWidth === 0
    }

    function o(a, e, f) {
        var g, h, i, j;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    k.next = 2;
                    return b("regeneratorRuntime").awrap(d("PolarisreadVideoFile").readVideoFile(a));
                case 2:
                    g = k.sent;
                    if (!n(g)) {
                        k.next = 8;
                        break
                    }
                    c("PolarisODS").incr("web.creation.video_file_read_failure");
                    throw d("PolarisCreationError").CreationError.readVideoError(new Error("Could not read video file"), a.name);
                case 8:
                    c("PolarisODS").incr("web.creation.error.video_file_read_success");
                case 9:
                    h = {
                        dataURL: g.src,
                        file: a,
                        height: g.videoHeight,
                        width: g.videoWidth,
                        videoDurationMs: g.duration
                    };
                    if (!(g.duration > e.maxDuration)) {
                        k.next = 18;
                        break
                    }
                    if (!(f > 1)) {
                        k.next = 15;
                        break
                    }
                    throw d("PolarisCreationError").CreationError.maxVideoLengthGallery(a.name);
                case 15:
                    throw d("PolarisCreationError").CreationError.maxVideoLength(a.name);
                case 16:
                    k.next = 20;
                    break;
                case 18:
                    if (!(e.minDuration != null && g.duration < e.minDuration)) {
                        k.next = 20;
                        break
                    }
                    throw d("PolarisCreationError").CreationError.minVideoLength(a.name);
                case 20:
                    k.next = 22;
                    return b("regeneratorRuntime").awrap(d("PolariscreateCoverPhoto").createCoverPhotoPlaceholdersFromVideo(g));
                case 22:
                    i = k.sent;
                    j = g.videoWidth / g.videoHeight;
                    return k.abrupt("return", {
                        adjustmentParams: {
                            brightness: 0,
                            contrast: 0,
                            saturation: 0,
                            temperature: 0,
                            fade: 0,
                            vignette: 0
                        },
                        altText: null,
                        audio: d("PolarisCreationV2State").AUDIO_STATUS.on,
                        coverPhoto: {
                            selectedCoverPhoto: i[0],
                            placeholders: i,
                            selectedCoverPhotoTime: d("PolarisCreationConstants").DEFAULT_VIDEO_COVER_TIME
                        },
                        croppedCanvas: null,
                        filteredBlob: null,
                        filteredMedia: null,
                        filteredThumbnails: null,
                        filters: {
                            filterName: d("PolarisCreationConstants").INIT_FILTER_NAME,
                            filterStrength: d("PolarisCreationConstants").INIT_FILTER_STRENGTH
                        },
                        id: null,
                        image: null,
                        originalAspectRatio: j,
                        panningOffsetRatioX: 0,
                        panningOffsetRatioY: 0,
                        scale: 1,
                        tags: new Map(),
                        trim: {
                            end: g.duration,
                            start: 0
                        },
                        transferProgress: null,
                        type: "video",
                        uploadId: null,
                        video: h
                    });
                case 25:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }

    function p(a, e, f, g, h, i) {
        var j;
        return b("regeneratorRuntime").async(function(k) {
            while (1) switch (k.prev = k.next) {
                case 0:
                    j = c("PolarisImageFactory").createImage();
                    return k.abrupt("return", new(b("Promise"))(function(k) {
                        j.onload = function() {
                            var l, m, n, o, p, q, r, s, t, u;
                            return b("regeneratorRuntime").async(function(b) {
                                while (1) switch (b.prev = b.next) {
                                    case 0:
                                        l = c("nullthrows")(e.width), m = c("nullthrows")(e.height), (n = d("PolarisCreationMediaHelpers").getCroppedWidthAndHeight(l, m, f), o = n.croppedHeight, p = n.croppedWidth, q = n.offsetLeft, r = n.offsetTop), s = p * g / i, t = o * h / i, u = d("PolarisCreationMediaHelpers").renderCroppedImage({
                                            sourceImg: j,
                                            offsetLeft: q - s,
                                            offsetTop: r - t,
                                            imageWidth: p,
                                            imageHeight: o,
                                            scaleFactor: i
                                        }), k({
                                            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                                            croppedCanvas: u,
                                            id: a
                                        });
                                    case 7:
                                    case "end":
                                        return b.stop()
                                }
                            }, null, this)
                        }, j.src = c("nullthrows")(e.dataURL)
                    }));
                case 2:
                case "end":
                    return k.stop()
            }
        }, null, this)
    }

    function q(a, c, e) {
        return b("regeneratorRuntime").async(function(c) {
            while (1) switch (c.prev = c.next) {
                case 0:
                    return c.abrupt("return", b("Promise").resolve({
                        type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                        croppedCanvas: document.createElement("canvas"),
                        id: a
                    }));
                case 1:
                case "end":
                    return c.stop()
            }
        }, null, this)
    }

    function r(a, b, c) {
        return {
            id: a,
            start: b,
            end: c,
            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_VIDEO_TRIM
        }
    }

    function s(a, b) {
        return {
            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
            adjustmentParams: b,
            id: a
        }
    }

    function t(a, b, c) {
        return {
            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
            filters: {
                filterName: b,
                filterStrength: c
            },
            id: a
        }
    }

    function u(a, b) {
        return {
            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
            id: a,
            filteredBlob: b
        }
    }

    function v(a, c) {
        var e, f;
        return b("regeneratorRuntime").async(function(g) {
            while (1) switch (g.prev = g.next) {
                case 0:
                    g.prev = 0;
                    g.next = 3;
                    return b("regeneratorRuntime").awrap(d("PolarisreadImageFile").readImageFile(a));
                case 3:
                    e = g.sent;
                    f = {
                        dataURL: e.dataURL,
                        file: a,
                        height: e.height,
                        location: e.location,
                        orientation: e.orientation,
                        width: e.width
                    };
                    return g.abrupt("return", {
                        type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                        id: c,
                        filteredMedia: f
                    });
                case 8:
                    g.prev = 8;
                    g.t0 = g["catch"](0);
                    return g.abrupt("return", b("Promise").reject(g.t0));
                case 11:
                case "end":
                    return g.stop()
            }
        }, null, this, [
            [0, 8]
        ])
    }

    function w(a) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q;
        return b("regeneratorRuntime").async(function(r) {
            while (1) switch (r.prev = r.next) {
                case 0:
                    e = a.blob, f = a.fallbackDimensions, g = a.id, h = a.isOriginalAsset, h === void 0 ? !1 : h, i = a.isSidecar, j = a.reencodedBlob, k = a.sessionId, l = a.transcodeOnly;
                    r.prev = 1;
                    r.next = 4;
                    return b("regeneratorRuntime").awrap(d("PolarisreadImageFile").readImageFile(e));
                case 4:
                    o = r.sent;
                    m = o.height;
                    n = o.width;
                    r.next = 18;
                    break;
                case 9:
                    r.prev = 9;
                    r.t0 = r["catch"](1);
                    if (!(l !== !0)) {
                        r.next = 18;
                        break
                    }
                    if (!f) {
                        r.next = 17;
                        break
                    }
                    m = f.height;
                    n = f.width;
                    r.next = 18;
                    break;
                case 17:
                    throw r.t0;
                case 18:
                    p = d("PolarisUploadHelpers").createUploadId();
                    q = c("PolarisUploadLogger").fromLoggingData({
                        fileSizeBytes: e.size,
                        ingestSurface: "feed",
                        isCarouselItem: i,
                        mediaHeight: m,
                        mediaType: "photo",
                        mediaWidth: n,
                        sessionId: k,
                        uploadId: p
                    });
                    r.prev = 20;
                    q.logUploadStart();
                    r.next = 24;
                    return b("regeneratorRuntime").awrap(d("PolariswithExponentialBackoff").withExponentialBackoff(function() {
                        return d("PolarisAPI").fbUploaderPhoto(e, null, p, l)
                    }).then(function(a) {
                        q.logUploadSuccess();
                        var b = l === !0 && a.encodedFile != null ? d("PolarisCreationMediaHelpers").b64toBlob(a.encodedFile) : void 0;
                        return {
                            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                            uploadId: a.upload_id,
                            transcodedBlob: b,
                            id: g
                        }
                    })["catch"](function(a) {
                        return b("regeneratorRuntime").async(function(c) {
                            while (1) switch (c.prev = c.next) {
                                case 0:
                                    if (!(j != null)) {
                                        c.next = 4;
                                        break
                                    }
                                    c.next = 3;
                                    return b("regeneratorRuntime").awrap(w({
                                        blob: j,
                                        id: g,
                                        isSidecar: i,
                                        sessionId: k,
                                        transcodeOnly: l
                                    }));
                                case 3:
                                    return c.abrupt("return", c.sent);
                                case 4:
                                    throw a;
                                case 5:
                                case "end":
                                    return c.stop()
                            }
                        }, null, this)
                    }));
                case 24:
                    return r.abrupt("return", r.sent);
                case 27:
                    r.prev = 27;
                    r.t1 = r["catch"](20);
                    q.logUploadFailure(r.t1.message);
                    throw d("PolarisCreationError").CreationError.uploadError(r.t1);
                case 31:
                case "end":
                    return r.stop()
            }
        }, null, this, [
            [1, 9],
            [20, 27]
        ])
    }

    function x(a, b) {
        return [(b == null ? void 0 : b.statusCode) === 0, b == null ? void 0 : b.retryable, b == null ? void 0 : (a = b.responseObject) == null ? void 0 : (b = a.debug_info) == null ? void 0 : b.retriable].some(function(a) {
            return a === !0
        })
    }

    function y(a) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
        return b("regeneratorRuntime").async(function(w) {
            while (1) switch (w.prev = w.next) {
                case 0:
                    e = a.id, f = a.isSidecar, g = a.onUploadProgress, h = a.sessionId, i = a.sourceCoverPhotoFile, j = a.sourceVideoFile, k = a.videoEditParams;
                    w.next = 3;
                    return b("regeneratorRuntime").awrap(d("PolarisreadVideoFile").readVideoFile(j));
                case 3:
                    l = w.sent;
                    m = d("PolarisUploadHelpers").createUploadId();
                    n = f !== !0;
                    o = n ? "unified_video" : "feed";
                    w.prev = 7;
                    r = c("PolarisUploadLogger").fromLoggingData({
                        durationMs: Math.floor(l.duration * 1e3),
                        fileSizeBytes: j.size,
                        ingestSurface: o,
                        isCarouselItem: f,
                        mediaHeight: l.videoHeight,
                        mediaType: "video",
                        mediaWidth: l.videoWidth,
                        sessionId: h,
                        uploadId: m
                    });
                    s = {
                        entityName: "fb_uploader_" + m,
                        file: new File([j], "video_" + m),
                        isIgtvVideo: n,
                        isSidecar: f,
                        isUnifiedVideo: n,
                        uploadId: m,
                        uploadMediaDurationMs: Math.floor(l.duration * 1e3),
                        uploadMediaHeight: l.videoHeight,
                        uploadMediaWidth: l.videoWidth
                    };
                    k != null && (s.videoEditParams = k);
                    t = c("PolarisUploadLogger").fromLoggingData({
                        fileSizeBytes: i.size,
                        ingestSurface: o,
                        mediaHeight: (p = k == null ? void 0 : k.crop_height) != null ? p : l.videoHeight,
                        mediaType: "video",
                        mediaWidth: (q = k == null ? void 0 : k.crop_width) != null ? q : l.videoWidth,
                        sessionId: h,
                        uploadId: m
                    });
                    u = {
                        entityName: "fb_uploader_" + m,
                        file: i,
                        uploadId: m,
                        uploadMediaHeight: l.videoHeight,
                        uploadMediaWidth: l.videoWidth
                    };
                    r.logUploadStart();
                    if (!n) {
                        w.next = 28;
                        break
                    }
                    v = function(a) {};
                    w.prev = 16;
                    w.next = 19;
                    return b("regeneratorRuntime").awrap(c("PolarisresumableVideoUpload")(s, g, v, x, {
                        chunkSize: d("PolarisIGTVConstants").UPLOAD_CHUNK_SIZE,
                        retries: d("PolarisIGTVConstants").UPLOAD_RETRY_COUNT,
                        timeBetweenRetries: d("PolarisIGTVConstants").UPLOAD_RETRY_TIMEOUT_MS
                    }));
                case 19:
                    r.logUploadSuccess();
                    w.next = 26;
                    break;
                case 22:
                    w.prev = 22;
                    w.t0 = w["catch"](16);
                    r.logUploadFailure(w.t0.message);
                    throw w.t0;
                case 26:
                    w.next = 30;
                    break;
                case 28:
                    w.next = 30;
                    return b("regeneratorRuntime").awrap(d("PolariswithExponentialBackoff").withExponentialBackoff(function() {
                        return d("PolarisAPI").ruploadVideo(s)
                    }).then(function() {
                        return r.logUploadSuccess()
                    })["catch"](function(a) {
                        r.logUploadFailure(a.message);
                        throw a
                    }));
                case 30:
                    t.logCoverPhotoUploadStart();
                    w.next = 33;
                    return b("regeneratorRuntime").awrap(d("PolariswithExponentialBackoff").withExponentialBackoff(function() {
                        return d("PolarisAPI").ruploadPhoto(u)
                    }).then(function() {
                        return t.logCoverPhotoUploadSuccess()
                    })["catch"](function(a) {
                        t.logCoverPhotoUploadFailure();
                        throw a
                    }));
                case 33:
                    return w.abrupt("return", {
                        type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                        uploadId: m,
                        id: e
                    });
                case 36:
                    w.prev = 36;
                    w.t1 = w["catch"](7);
                    throw d("PolarisCreationError").CreationError.uploadError(w.t1);
                case 39:
                case "end":
                    return w.stop()
            }
        }, null, this, [
            [7, 36],
            [16, 22]
        ])
    }

    function z(a, b) {
        return {
            id: a,
            transferProgress: b,
            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META
        }
    }

    function A(a) {
        return a.mozHasAudio === !0 || a.webkitAudioDecodedByteCount != null && a.webkitAudioDecodedByteCount > 0 || a.audioTracks && a.audioTracks.length > 0
    }

    function B(a, b) {
        a = A(a);
        return !a ? {
            audio: d("PolarisCreationV2State").AUDIO_STATUS.none,
            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
            id: b
        } : null
    }

    function C(a) {
        return {
            type: d("PolarisCreationV2ActionTypes").CREATION_SET_ERROR_MESSAGE,
            errorMessage: a
        }
    }
    g.creationReset = a;
    g.creationSessionStarted = e;
    g.createItemIds = h;
    g.creationSelectMedia = f;
    g.creationAddMedia = j;
    g.creationRemoveMedia = k;
    g.transformSourceMedias = l;
    g.transformImageMedia = m;
    g.transformVideoMedia = o;
    g.createCroppedPhoto = p;
    g.createCroppedVideo = q;
    g.createTrimmedVideo = r;
    g.setAdjustment = s;
    g.setFilter = t;
    g.setFilteredBlob = u;
    g.setFilteredMedia = v;
    g.stagePhoto = w;
    g.stageVideo = y;
    g.uploadProgressed = z;
    g.verifyAudioTracks = B;
    g.creationSetErrorMessage = C
}, 98);
__d("usePolarisCreationSelectMedia", ["PolarisCreationCameraLogger", "PolarisCreationConstants", "PolarisCreationError", "PolarisCreationStepProvider.react", "PolarisCreationTypes", "PolarisCreationV2Actions", "PolarisMediaHelpers", "PolarisQEHelper", "Promise", "regeneratorRuntime", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        if (Object.prototype.hasOwnProperty.call(d("PolarisCreationTypes").CREATION_MIME_TYPES, a == null ? void 0 : a.type)) return !0;
        throw d("PolarisCreationError").CreationError.unsupportedFileError(a.name)
    }

    function i(a) {
        return d("PolarisMediaHelpers").isImageMIMEType(a[0]) ? d("PolarisCreationCameraLogger").InstagramCameraMediaTypes.PHOTO : d("PolarisCreationCameraLogger").InstagramCameraMediaTypes.VIDEO
    }

    function j(a, b) {
        a = a + b.length;
        return {
            image: {
                maxFileSize: d("PolarisCreationConstants").MAX_FILE_SIZE,
                minFileSize: d("PolarisCreationConstants").MIN_FILE_SIZE
            },
            video: {
                maxDuration: a === 1 ? d("PolarisCreationConstants").MAX_VIDEO_LENGTH_DOVETAIL_S : d("PolarisCreationConstants").MAX_VIDEO_LENGTH_S,
                maxFileSize: a === 1 ? d("PolarisCreationConstants").MAX_FILE_SIZE_DOVETAIL : d("PolarisCreationConstants").MAX_FILE_SIZE,
                minDuration: d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? d("PolarisCreationConstants").MIN_VIDEO_LENGTH_S : void 0,
                minFileSize: d("PolarisCreationConstants").MIN_FILE_SIZE
            }
        }
    }

    function a() {
        var a = d("usePolarisCreationState").useCreationState(),
            c = d("usePolarisCreationDispatch").useCreationDispatch(),
            e = function(b) {
                b = Array.from(b).filter(function(a) {
                    return h(a)
                });
                var c = d("PolarisCreationConstants").MAX_NUM_MEDIA - a.multiPostOrder.length;
                return b.slice(0, c)
            },
            f = function(f) {
                var g, h, k;
                return b("regeneratorRuntime").async(function(l) {
                    while (1) switch (l.prev = l.next) {
                        case 0:
                            g = e(f);
                            if (!(g.length > 0)) {
                                l.next = 13;
                                break
                            }
                            h = i(g);
                            d("PolarisCreationCameraLogger").logFeedCreationFeedGallerySelectMedia({
                                mediaType: h,
                                sessionId: a.sessionId
                            });
                            g.length > 1 && d("PolarisCreationCameraLogger").logFeedCreationFeedGallerySelectMultiple({
                                sessionId: a.sessionId
                            });
                            l.next = 7;
                            return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").creationSelectMedia(g, j(a.multiPostOrder.length, g)));
                        case 7:
                            k = l.sent;
                            c(k);
                            if (!(g.length !== f.length)) {
                                l.next = 11;
                                break
                            }
                            throw d("PolarisCreationError").CreationError.maxMediaAdded(f.length - g.length);
                        case 11:
                            l.next = 14;
                            break;
                        case 13:
                            return l.abrupt("return", b("Promise").reject(new Error("no media files to select")));
                        case 14:
                        case "end":
                            return l.stop()
                    }
                }, null, this)
            },
            g = function(f) {
                var g, h, k;
                return b("regeneratorRuntime").async(function(l) {
                    while (1) switch (l.prev = l.next) {
                        case 0:
                            g = e(f);
                            if (!(g.length > 0)) {
                                l.next = 13;
                                break
                            }
                            h = i(g);
                            d("PolarisCreationCameraLogger").logFeedCreationFeedGallerySelectMedia({
                                mediaType: h,
                                sessionId: a.sessionId
                            });
                            a.multiPostOrder.length === 1 && d("PolarisCreationCameraLogger").logFeedCreationFeedGallerySelectMultiple({
                                sessionId: a.sessionId
                            });
                            l.next = 7;
                            return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").creationAddMedia(g, j(a.multiPostOrder.length, g)));
                        case 7:
                            k = l.sent;
                            c(k);
                            if (!(g.length !== f.length)) {
                                l.next = 11;
                                break
                            }
                            throw d("PolarisCreationError").CreationError.maxMediaAdded(f.length - g.length);
                        case 11:
                            l.next = 14;
                            break;
                        case 13:
                            return l.abrupt("return", b("Promise").reject(new Error("no media files to add")));
                        case 14:
                        case "end":
                            return l.stop()
                    }
                }, null, this)
            },
            k = d("PolarisCreationStepProvider.react").useCreationStep(),
            l = k.handleStartOver;
        k = function(b) {
            var e = a.multiPostOrder.indexOf(b);
            if (e !== -1) {
                a.multiPostOrder.length <= 1 && l();
                e = d("PolarisCreationV2Actions").creationRemoveMedia(b);
                return c(e)
            }
        };
        var m = function() {
            var a = d("PolarisCreationV2Actions").creationReset();
            return c(a)
        };
        return {
            selectMediaFiles: f,
            addMediaFiles: g,
            removeMedia: k,
            clearAllMedia: m
        }
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationToast", ["PolarisCreationV2Actions", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("usePolarisCreationDispatch").useCreationDispatch(),
            b = function(b) {
                b = d("PolarisCreationV2Actions").creationSetErrorMessage(b);
                return a(b)
            },
            c = function() {
                var b = d("PolarisCreationV2Actions").creationSetErrorMessage(null);
                return a(b)
            };
        return {
            setErrorMessage: b,
            clearToast: c
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationAddMediaThumbnail.react", ["cx", "fbt", "PolarisCreationCameraLogger", "PolarisCreationConstants", "PolarisCreationError", "PolarisCreationErrorHelpers", "PolarisCreationTypes", "PolarisIGCoreAddOutline24Icon", "PolarisIGCoreBox", "PolarisIGCorePressable", "PolarisImageFileForm.react", "react", "regeneratorRuntime", "usePolarisCreationSelectMedia", "usePolarisCreationState", "usePolarisCreationToast"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useRef;

    function l(a) {
        var b = !1;
        a = a.values();
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
            b = b || f.type === "video" && f.video != null && f.video.videoDurationMs > d("PolarisCreationConstants").MAX_VIDEO_LENGTH_GALLERY_S
        }
        return !b
    }

    function a(a) {
        a = d("usePolarisCreationState").useCreationState();
        a = a.media;
        return l(a) ? j.jsx(m, {}) : j.jsx(n, {})
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m() {
        var a = k(null),
            e = d("usePolarisCreationState").useCreationState(),
            f = e.sessionId;
        e = c("usePolarisCreationToast")();
        var g = e.setErrorMessage;
        e = function() {
            d("PolarisCreationCameraLogger").logFeedCreationCameraStartGallerySession({
                sessionId: f
            });
            var b = a == null ? void 0 : a.current;
            b != null && b.selectFile()
        };
        var h = c("usePolarisCreationSelectMedia")(),
            i = h.addMediaFiles;
        h = function(a) {
            var c;
            return b("regeneratorRuntime").async(function(e) {
                while (1) switch (e.prev = e.next) {
                    case 0:
                        e.prev = 0;
                        e.next = 3;
                        return b("regeneratorRuntime").awrap(i(a));
                    case 3:
                        d("PolarisCreationCameraLogger").logFeedCreationCameraEndGallerySession({
                            sessionId: f
                        });
                        e.next = 14;
                        break;
                    case 6:
                        e.prev = 6;
                        e.t0 = e["catch"](0);
                        if (!(e.t0 instanceof d("PolarisCreationError").CreationError)) {
                            e.next = 13;
                            break
                        }
                        c = d("PolarisCreationErrorHelpers").getCreationErrorToastForError(e.t0);
                        c != null && g(c.message);
                        e.next = 14;
                        break;
                    case 13:
                        throw e.t0;
                    case 14:
                    case "end":
                        return e.stop()
                }
            }, null, this, [
                [0, 6]
            ])
        };
        return j.jsxs(j.Fragment, {
            children: [j.jsx(o, {
                onPress: e
            }), j.jsx(d("PolarisImageFileForm.react").ImageFileForm, {
                acceptMimeTypes: Object.keys(d("PolarisCreationTypes").CREATION_MIME_TYPES),
                capture: !1,
                multiple: !0,
                onFileChange: h,
                ref: a
            })]
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function n() {
        var a = c("usePolarisCreationToast")(),
            b = a.setErrorMessage;
        a = function() {
            var a = d("PolarisCreationErrorHelpers").getCreationErrorToastForError(d("PolarisCreationError").CreationError.maxVideoLengthGallery());
            a != null && b(a.message)
        };
        return j.jsx(o, {
            onPress: a
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function o(a) {
        a = a.onPress;
        return j.jsx(c("PolarisIGCorePressable"), {
            className: "_aaef",
            onPress: a,
            children: j.jsx(c("PolarisIGCoreBox"), {
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
                width: "100%",
                children: j.jsx(c("PolarisIGCoreAddOutline24Icon"), {
                    alt: i._("Plus icon"),
                    color: "ig-secondary-text",
                    size: 22
                })
            })
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";
    g.canAddMoreMedia = l;
    g.CreationAddMediaThumbnail = a
}, 98);
__d("usePolarisObjectState", ["react", "shallowEqual"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useRef,
        i = b.useState;

    function a(a, b) {
        b === void 0 && (b = c("shallowEqual"));
        a = i(a);
        var d = a[0],
            e = a[1],
            f = h(d);
        a = h(function(a) {
            a = typeof a === "function" ? a(f.current) : a;
            b(f.current, a) || (e(a), f.current = a)
        });
        return [d, a.current]
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationMediaPreview", ["PolarisCreationMediaHelpers", "nullthrows", "react", "usePolarisObjectState"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
        i = b.useState;

    function a(a, b) {
        var e = i(null),
            f = e[0];
        e = e[1];
        var g = c("usePolarisObjectState")({
                height: "100%",
                width: "100%"
            }),
            j = g[0],
            k = g[1];
        g = c("nullthrows")(a.type === "image" ? a.image : a.video);
        var l = g.height;
        g = g.width;
        b = d("PolarisCreationMediaHelpers").getCroppedHeightAndWidthScaledDimensions(l, g, b, f);
        var m = b.croppedHeightScaled,
            n = b.croppedWidthScaled;
        b = d("PolarisCreationMediaHelpers").getCroppedHeightAndWidthScaledDimensions(g, l, a.originalAspectRatio, f);
        var o = b.croppedHeightScaled,
            p = b.croppedWidthScaled;
        h(function() {
            var a = d("PolarisCreationMediaHelpers").getScaledOriginalMediaDimensions(o, p, m, n),
                b = a.height;
            a = a.width;
            k({
                height: b + "px",
                width: a + "px"
            })
        }, [o, p, k, m, n]);
        return {
            mediaDimensions: j,
            croppedWidthScaled: n,
            croppedHeightScaled: m,
            setFrameEl: e,
            frameEl: f
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationMediaPreviewThumbnail.react", ["cx", "PolarisCreationMediaHelpers", "PolarisIGCoreBox", "react", "usePolarisCreationMediaPreview"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.aspectRatio,
            e = a.media,
            f = a.showOverlay;
        a.size;
        a = a.src;
        b = d("PolarisCreationMediaHelpers").transformPanningOffsetsForRatios(b, 1, e.panningOffsetRatioX, e.panningOffsetRatioY);
        var g = b.transformedOffsetX;
        b = b.transformedOffsetY;
        var h = c("usePolarisCreationMediaPreview")(e, 1),
            j = h.croppedHeightScaled,
            k = h.croppedWidthScaled,
            l = h.mediaDimensions;
        h = h.setFrameEl;
        g = g * k;
        k = b * j;
        b = f ? .5 : 0;
        j = {
            height: l.height,
            transform: "translateX(" + g + "px) translateY(" + k + "px) scale(" + e.scale,
            transition: "none",
            width: l.width
        };
        return i.jsx(c("PolarisIGCoreBox"), {
            alignItems: "center",
            containerRef: h,
            height: "100%",
            justifyContent: "center",
            overflow: "hidden",
            width: "100%",
            children: i.jsx("div", {
                className: "_abgj",
                style: babelHelpers["extends"]({
                    backgroundImage: "\n            linear-gradient(rgba(0, 0, 0, " + b + "), rgba(0, 0, 0, " + b + ")),\n            url(" + a + ")\n          "
                }, j, l)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreChevronLeftPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("polyline", {
                fill: "none",
                points: "16.502 3 7.498 12 16.502 21",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreChevronRightPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("polyline", {
                fill: "none",
                points: "8 3 17.004 12 8 21",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisCreationMediaPreviewCarouselButtons.react", ["cx", "PolarisCreationMediaButton.react", "PolarisCreationV2ActionTypes", "PolarisGenericStrings", "PolarisIGCoreChevronLeftPanoOutlineIcon", "PolarisIGCoreChevronRightPanoOutlineIcon", "PolarisQEHelper", "PolarisStepIndicator.react", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a() {
        var a = d("usePolarisCreationDispatch").useCreationDispatch(),
            b = c("usePolarisCreationCurrentMedia")();
        b = b.currentMediaId;
        var e = d("usePolarisCreationState").useCreationState(),
            f = e.multiPostOrder;
        if (f.length > 1 && d("PolarisQEHelper").hasFeedCreationV2Dogfooding()) {
            var g = f.indexOf(b);
            e = g > 0;
            b = g < f.length - 1;
            return i.jsxs("span", {
                className: "_abfv",
                children: [e && i.jsx("div", {
                    className: "_abfw",
                    children: i.jsx(c("PolarisCreationMediaButton.react"), {
                        altText: d("PolarisGenericStrings").LEFT_CHEVRON,
                        icon: c("PolarisIGCoreChevronLeftPanoOutlineIcon"),
                        onClick: function() {
                            a({
                                type: d("PolarisCreationV2ActionTypes").CREATION_SET_CURRENT_ID,
                                id: f[g - 1]
                            })
                        },
                        selected: !1
                    })
                }), b && i.jsx("div", {
                    className: "_abfx",
                    children: i.jsx(c("PolarisCreationMediaButton.react"), {
                        altText: d("PolarisGenericStrings").RIGHT_CHEVRON,
                        icon: c("PolarisIGCoreChevronRightPanoOutlineIcon"),
                        onClick: function() {
                            a({
                                type: d("PolarisCreationV2ActionTypes").CREATION_SET_CURRENT_ID,
                                id: f[g + 1]
                            })
                        },
                        selected: !1
                    })
                }), i.jsx("div", {
                    className: "_abfy",
                    children: i.jsx(c("PolarisStepIndicator.react"), {
                        numSteps: f.length,
                        selectedStep: g
                    })
                })]
            })
        }
        return null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisFilteredCanvas.react", ["cx", "PolarisCreationMediaPreviewCarouselButtons.react", "PolarisFilterGLContext", "PolarisMediaHelpers", "PolarisQEHelper", "PolarisResponsiveBlock.react", "PolariswithForwardRef", "nullthrows", "react", "usePolarisObjectState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
        k = b.useRef;

    function a(a) {
        var b = a.adjustmentParams,
            e = a.filter,
            f = a.filterStrength,
            g = a.fixedSquare,
            h = g === void 0 ? !1 : g,
            l = a.forwardedRef,
            m = a.src;
        g = c("usePolarisObjectState")({
            height: 0,
            width: 0
        });
        a = g[0];
        var n = g[1];
        g = c("usePolarisObjectState")({
            height: m.height,
            width: m.width
        });
        var o = g[0],
            p = g[1];
        g = c("usePolarisObjectState")({
            height: 0,
            width: 0
        });
        var q = g[0],
            r = g[1],
            s = k();
        j(function() {
            var a;
            s.current = new(c("PolarisFilterGLContext"))(c("nullthrows")(l.current));
            (a = s.current) == null ? void 0 : a.init();
            return function() {
                var a;
                (a = s.current) == null ? void 0 : a.stopDraw()
            }
        }, [l, s]);
        j(function() {
            var a;
            if (((a = s.current) == null ? void 0 : a.activeFilterName) !== e) {
                (a = s.current) == null ? void 0 : a.setFilter(e)
            }
            Object.keys(b).map(function(a, c) {
                (c = s.current) == null ? void 0 : c.setParam(a, b[a] / 100)
            })
        }, [s, e, b]);
        j(function() {
            var a;
            (a = s.current) == null ? void 0 : a.setParam("filterStrength", f)
        }, [s, f]);
        j(function() {
            var a;
            (a = s.current) == null ? void 0 : a.setImage(m).then(function(a) {
                a[0];
                a = a[1];
                p({
                    height: a.height,
                    width: a.width
                })
            })
        }, [s, p, m]);
        j(function() {
            if (h) n({
                height: "100%",
                width: "100%"
            });
            else {
                var a = d("PolarisMediaHelpers").getDimensionsToStretchFit(o.height, o.width, q.height, q.width);
                n(a)
            }
        }, [o, q, n, h]);
        j(function() {
            var a;
            (a = s.current) == null ? void 0 : a.startDraw()
        }, [s, e, f, b, m]);

        function t(a, b) {
            r({
                height: b,
                width: a
            })
        }
        g = function() {
            return d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? i.jsx(c("PolarisCreationMediaPreviewCarouselButtons.react"), {}) : null
        };
        return i.jsxs(c("PolarisResponsiveBlock.react"), {
            className: "_abm6",
            onResize: t,
            children: [g(), i.jsx("canvas", {
                className: h ? "_abm7" : "",
                height: m.height,
                ref: l,
                style: {
                    width: a.width,
                    height: a.height
                },
                width: m.width
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("PolariswithForwardRef")(a);
    g["default"] = e
}, 98);
__d("PolarisCreationThumbnail.react", ["cx", "PolarisCreationMediaPreviewThumbnail.react", "PolarisCreationStepProvider.react", "PolarisCreationTypes", "PolarisFilteredCanvas.react", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCorePlayPanoFilledIcon", "nullthrows", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useRef;

    function a(a) {
        var b = a.hideDeleteIcon;
        b === void 0 ? !1 : b;
        var e = a.id;
        a.setShowDeleteDialog;
        var f = a.size,
            g = j(null);
        b = d("PolarisCreationStepProvider.react").useCreationStep();
        var h = b.step,
            k = d("usePolarisCreationState").useCreationState();
        a = c("usePolarisCreationCurrentMedia")();
        var l = a.currentMediaId;
        b = d("usePolarisCreationMedia").useCreationMedia(e);
        var m = b.adjustmentParams,
            n = b.filterName,
            o = b.filterStrength,
            p = b.media,
            q = b.mediaItem,
            r = b.mediaItemType;
        if (p == null || q == null) return null;
        a = function(a) {
            if (r === "video") {
                var b;
                return i.jsx(c("PolarisCreationMediaPreviewThumbnail.react"), {
                    aspectRatio: (b = k.cropRatio) != null ? b : 1,
                    media: p,
                    showOverlay: !a,
                    size: f,
                    src: (b = p == null ? void 0 : (b = p.coverPhoto) == null ? void 0 : (b = b.selectedCoverPhoto) == null ? void 0 : b.dataURL) != null ? b : ""
                })
            }
            switch (h) {
                case d("PolarisCreationTypes").STEP.crop:
                    return i.jsx(c("PolarisCreationMediaPreviewThumbnail.react"), {
                        aspectRatio: (b = k.cropRatio) != null ? b : p.originalAspectRatio,
                        media: p,
                        showOverlay: !a,
                        size: f,
                        src: q.dataURL
                    });
                default:
                    return l === e ? i.jsx("div", {
                        className: "_aabg",
                        children: i.jsx(c("PolarisFilteredCanvas.react"), {
                            adjustmentParams: m,
                            filter: n,
                            filterStrength: o / 100,
                            fixedSquare: !0,
                            ref: g,
                            src: c("nullthrows")(p.croppedCanvas)
                        }, c("nullthrows")(q.dataURL))
                    }) : i.jsx(c("PolarisCreationMediaPreviewThumbnail.react"), {
                        aspectRatio: (b = k.cropRatio) != null ? b : p.originalAspectRatio,
                        media: p,
                        showOverlay: !a,
                        size: f,
                        src: q.dataURL
                    })
            }
        };
        return i.jsxs(i.Fragment, {
            children: [a(l === e), r === "video" && l !== e && i.jsx(c("PolarisIGCoreBox"), {
                alignItems: "center",
                height: f,
                justifyContent: "center",
                position: "absolute",
                width: f,
                children: i.jsx(c("PolarisIGCorePlayPanoFilledIcon"), {
                    alt: d("PolarisGenericStrings").PLAY_BUTTON_ALT,
                    color: "ig-separator",
                    shadow: !0,
                    size: 16
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisCreationModalSize", ["usePolarisMediaQuery"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("usePolarisMediaQuery").useMediaQuery("(max-width: var(breakpoint-small-width))"),
            b = d("usePolarisMediaQuery").useMediaQuery("(max-width: var(breakpoint-medium-width))");
        if (a) return "small";
        return b ? "medium" : "large"
    }
    g["default"] = a
}, 98);
__d("usePolarisHDragSort", ["lodash-clamp", "react", "react-spring-wwwig", "react-use-gesture"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
        i = b.useRef;

    function j(a, b, c) {
        a = [].concat(a);
        a.splice(c, 0, a.splice(b, 1)[0]);
        return a
    }
    var k = {
        mass: 1,
        tension: 170,
        friction: 26,
        precision: .01,
        velocity: 0,
        clamp: !0
    };

    function l(a, b, c) {
        return function(d) {
            return {
                x: a.indexOf(d) * b,
                scale: 1,
                zIndex: 0,
                shadow: 0,
                immediate: c,
                config: k
            }
        }
    }

    function m(a, b, c, d, e, f) {
        e === void 0 && (e = 0);
        f === void 0 && (f = 0);
        return function(g) {
            return c === !0 && g === d ? {
                x: e * b + f,
                scale: 1.2,
                zIndex: 1,
                shadow: 20,
                immediate: function(a) {
                    return a === "x" || a === "zIndex"
                },
                config: k
            } : l(a, b, !1)(g)
        }
    }

    function n(a, b) {
        return function(c) {
            return l(a, b, !0)(c)
        }
    }

    function o(a, b, d, e) {
        e = c("lodash-clamp")(Math.round((a * d + e) / d), 0, b.current.length - 1);
        return j(b.current, a, e)
    }

    function a(a, b, c, e, f) {
        var g = i([]),
            j = i([]);
        if (a.length !== g.current.length || a.length !== j.current.length) {
            g.current = a;
            j.current = (a = g.current.map(function(a, b) {
                return b
            })) != null ? a : []
        }
        a = d("react-spring-wwwig").useSprings(g.current.length, n(j.current, b), [j.current]);
        var k = a[0],
            l = a[1];
        a = d("react-use-gesture").useDrag(function(a) {
            var d = a.args;
            d = d[0];
            var h = a.active;
            a = a.movement;
            a = a[0];
            e != null && e();
            var i = j.current.indexOf(d),
                k = o(i, j, b, a);
            l(m(k, b, h, d, i, a));
            if (!h) {
                f != null && f();
                d = j.current.join() === k.join();
                if (d) return;
                j.current = k;
                var n = g.current;
                if (c != null && n != null) {
                    i = j.current.map(function(a) {
                        return n[a]
                    });
                    c(i)
                }
            }
        }, {
            delay: 100
        });
        h(function() {
            l(m(j.current, b))
        }, [b, l]);
        return {
            springs: k,
            itemsRef: g,
            orderRef: j,
            bindDrag: a
        }
    }
    g.moveItem = j;
    g.buildSpringStyles = m;
    g.getNewOrder = o;
    g.useHDragSort = a
}, 98);
__d("PolarisCreationThumbnailBar.react", ["cx", "PolarisCreationAddMediaThumbnail.react", "PolarisCreationConstants", "PolarisCreationMediaButton.react", "PolarisCreationStepProvider.react", "PolarisCreationThumbnail.react", "PolarisCreationTypes", "PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "PolarisDisappearingTooltip.react", "PolarisGenericStrings", "PolarisHSnapScroll.react", "PolarisIGAnimate", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreConstants", "PolarisIGCorePressable", "PolarisIGCoreText", "PolarisIGCoreXPanoOutlineIcon", "gkx", "react", "usePolarisCreationDispatch", "usePolarisCreationModalSize", "usePolarisCreationState", "usePolarisHDragSort"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useState;

    function k() {
        var a = c("usePolarisCreationModalSize")();
        a = a === "small" ? 34 : 44;
        return a
    }
    var l = {
        mass: .5,
        tension: 90,
        friction: 13,
        precision: .01,
        velocity: 0,
        clamp: !0
    };

    function m(a) {
        var b = a.children;
        a = a.id;
        var c = d("usePolarisCreationState").useCreationState();
        c = c.currentMediaId;
        a = d("PolarisIGAnimate").usePanAndZoom({
            scale: c === a ? 1.2 : 1,
            x: 0,
            y: 0
        }, l, !1, [c]);
        c = a.style;
        return i.jsx(d("PolarisIGAnimate").Animated.div, {
            style: c,
            children: b
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    var n = 12,
        o = 500;

    function p(a) {
        var b = a.children;
        a = a.id;
        return c("gkx")("4785") === !0 ? i.jsx(m, {
            id: a,
            children: b
        }) : b
    }
    p.displayName = p.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.setShowDeleteDialog;
        a = a.size;
        var e = a === void 0 ? "default" : a;
        a = j(!1);
        var f = a[0],
            g = a[1],
            h = d("usePolarisCreationState").useCreationState();
        a = d("PolarisCreationStepProvider.react").useCreationStep();
        var l = a.step,
            m = d("usePolarisCreationDispatch").useCreationDispatch();
        a = k();
        var q = e === "default" ? a : 94,
            r = function() {
                g(!1)
            };
        a = function(a) {
            r(), m({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_MULTI_POST_ORDER,
                multiPostOrder: a
            })
        };
        var s = function() {
            f === !1 && g(!0), h.hasViewedReorderTooltip === !1 && m({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_VIEWED_REORDER_TOOLTIP,
                hasViewedReorderTooltip: !0
            })
        };
        a = d("usePolarisHDragSort").useHDragSort(h.multiPostOrder, q + n, a, s, r);
        var t = a.bindDrag,
            u = a.itemsRef;
        s = a.orderRef;
        a = a.springs;
        var v = function() {
                m({
                    type: d("PolarisCreationV2ActionTypes").CREATION_SET_VIEWED_REORDER_TOOLTIP,
                    hasViewedReorderTooltip: !0
                })
            },
            w = a.map(function(a, g) {
                var j = a.scale,
                    k = a.shadow,
                    n = a.x;
                a = a.zIndex;
                var o = h.currentMediaId === u.current[g];
                return i.createElement(d("PolarisIGAnimate").Animated.div, babelHelpers["extends"]({}, l === d("PolarisCreationTypes").STEP.crop && h.multiPostOrder.length > 1 ? t(g) : {}, {
                    key: u.current[g],
                    style: {
                        x: n,
                        zIndex: a,
                        position: "absolute"
                    }
                }), f === !1 && o === !0 && b != null && i.jsx(c("PolarisIGCorePressable"), {
                    className: "_aab1",
                    onPress: function() {
                        return b(!0)
                    },
                    role: "button",
                    children: i.jsx("div", {
                        className: "_aab2",
                        children: i.jsx(c("PolarisCreationMediaButton.react"), {
                            altText: d("PolarisGenericStrings").DELETE_TEXT,
                            icon: c("PolarisIGCoreXPanoOutlineIcon"),
                            onClick: function() {
                                return b(!0)
                            },
                            selected: !1,
                            size: "small"
                        })
                    })
                }), i.jsx(c("PolarisIGCoreButton"), {
                    borderless: !0,
                    onClick: function() {
                        o || m({
                            type: d("PolarisCreationV2ActionTypes").CREATION_SET_CURRENT_ID,
                            id: u.current[g]
                        })
                    },
                    children: i.jsx(p, {
                        id: u.current[g],
                        children: i.jsx(d("PolarisIGAnimate").Animated.div, {
                            className: "_aab3" + (e === "large" ? " _aab4" : ""),
                            style: {
                                boxShadow: k.to(function(a) {
                                    return "rgba(0, 0, 0, " + a + "%) 0px 2px 6px 2px"
                                }),
                                scale: j
                            },
                            children: i.jsx(c("PolarisCreationThumbnail.react"), {
                                hideDeleteIcon: f,
                                id: u.current[g],
                                setShowDeleteDialog: b,
                                size: q
                            })
                        })
                    })
                }, u.current[g]))
            });
        return i.jsxs(c("PolarisIGCoreBox"), {
            direction: "row",
            display: "flex",
            maxWidth: "100%",
            children: [i.jsx(c("PolarisIGCoreBox"), {
                flex: "grow",
                height: q,
                position: "relative",
                width: (q + n) * s.current.length,
                children: i.jsx(c("PolarisHSnapScroll.react"), {
                    animationDuration: o,
                    disableScrollSnap: !0,
                    enableMouseSwipe: !1,
                    itemCount: a.length,
                    itemWidth: q + n,
                    pagerDisabled: {
                        previous: f,
                        next: f
                    },
                    pagerVariant: "creation",
                    children: w
                })
            }), l === d("PolarisCreationTypes").STEP.crop && h.multiPostOrder.length < d("PolarisCreationConstants").MAX_NUM_MEDIA && i.jsx("div", {
                className: "_aab3 _aab7",
                children: i.jsx(d("PolarisCreationAddMediaThumbnail.react").CreationAddMediaThumbnail, {})
            }), l === d("PolarisCreationTypes").STEP.crop && h.multiPostOrder.length > 1 && h.hasViewedReorderTooltip !== !0 && i.jsx("div", {
                className: "_aabe" + (e === "large" ? " _aabf" : ""),
                children: i.jsx(c("PolarisDisappearingTooltip.react"), {
                    arrowPosition: e === "large" ? "bottom" : "top",
                    autoHideAfter: c("PolarisIGCoreConstants").TOOLTIP.AUTO_HIDE_MS,
                    color: "black",
                    disableTooltipHideOnDismount: !0,
                    onTooltipHide: v,
                    children: i.jsx(c("PolarisIGCoreBox"), {
                        alignItems: "center",
                        direction: "row",
                        children: i.jsx(c("PolarisIGCoreBox"), {
                            alignItems: "center",
                            marginStart: 1,
                            children: i.jsx(c("PolarisIGCoreText"), {
                                color: "web-always-white",
                                size: "label",
                                zeroMargin: !0,
                                children: d("PolarisCreationV2Strings").REORDER_TOOLTIP
                            })
                        })
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreCarouselPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z",
                fillRule: "evenodd"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisCreationGalleryMediaButton.react", ["PolarisCreationMediaPopoverButton.react", "PolarisCreationThumbnailBar.react", "PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreCarouselPanoOutlineIcon", "react", "usePolarisCreationMediaPopoverContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = 94,
        j = 12;

    function a(a) {
        a = a.setShowDeleteDialog;
        var b = d("usePolarisCreationMediaPopoverContext").useCreationMediaPopoverContext(),
            e = b.openedPopover,
            f = b.setOpenedPopover,
            g = e === d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.GALLERY;
        b = function() {
            f(g ? null : d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.GALLERY)
        };
        e = e != null && e !== d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.GALLERY;
        return h.jsx(c("PolarisIGCoreBox"), {
            alignItems: "end",
            direction: "column",
            width: "100%",
            children: h.jsx(c("PolarisCreationMediaPopoverButton.react"), {
                altText: d("PolarisCreationV2Strings").GALLERY_ALT_TEXT,
                disabled: e,
                expanded: g,
                icon: c("PolarisIGCoreCarouselPanoOutlineIcon"),
                togglePopover: b,
                children: h.jsx(c("PolarisIGCoreBox"), {
                    alignItems: "start",
                    height: i + 2 * j,
                    justifyContent: "center",
                    padding: 2,
                    children: h.jsx(c("PolarisCreationThumbnailBar.react"), {
                        setShowDeleteDialog: a,
                        size: "large"
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationMediaDiscardDialog.react", ["IGCoreDialog", "PolarisCreationV2Strings", "PolarisGenericStrings", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.mediaType,
            c = a.onModalClose,
            e = a.onRemoveMedia;
        return h.jsxs(d("IGCoreDialog").IGCoreDialog, {
            body: b === "image" ? d("PolarisCreationV2Strings").DISCARD_PHOTO_BODY : d("PolarisCreationV2Strings").DISCARD_VIDEO_BODY,
            onModalClose: c,
            title: b === "image" ? d("PolarisCreationV2Strings").DISCARD_PHOTO_TITLE : d("PolarisCreationV2Strings").DISCARD_VIDEO_TITLE,
            children: [h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                color: "ig-error-or-destructive",
                onClick: function() {
                    e(), c()
                },
                children: d("PolarisCreationV2Strings").DISCARD_CTA_TEXT
            }), h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: c,
                children: d("PolarisGenericStrings").CANCEL_TEXT
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationSlider.react", ["cx", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisUA", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useLayoutEffect,
        k = b.useState;

    function l(a, b, c, d) {
        var e = d ? "rgb(0, 0, 0)" : "rgb(219, 219, 219)";
        d = d ? "rgb(255, 255, 255)" : "rgb(38, 38, 38)";
        if (a) {
            a = c / 2;
            return b < a ? "linear-gradient(\n      to right,\n      " + e + " 0%,\n      " + e + " " + b + "%,\n      " + d + " " + b + "%,\n      " + d + " 50%,\n      " + e + " 50%,\n      " + e + " 100%\n    )" : "linear-gradient(\n      to right,\n      " + e + " 0%,\n      " + e + " 50%,\n      " + d + " 50%,\n      " + d + " " + b + "%,\n      " + e + " " + b + "%,\n      " + e + " 100%\n    )"
        }
        return "linear-gradient(\n    to right,\n    " + d + " 0%,\n    " + d + " " + b + "%,\n    " + e + " " + b + "%,\n    " + e + " 100%\n  )"
    }

    function m(a, b, c, d) {
        d === void 0 && (d = !1);
        var e = (parseInt(c.value, 10) - parseInt(c.min, 10)) / (parseInt(c.max, 10) - parseInt(c.min, 10)) * 100;
        c.style.backgroundImage = l(a, e, b, d)
    }

    function a(a) {
        var b = a.centerBased,
            e = b === void 0 ? !1 : b;
        b = a.color;
        var f = b === void 0 ? "default" : b;
        b = a.disabled;
        b = b === void 0 ? !1 : b;
        var g = a.initialValue,
            h = a.maxValue,
            l = h === void 0 ? 100 : h;
        h = a.minValue;
        h = h === void 0 ? 0 : h;
        var n = a.onChange,
            o = a.onSetValue,
            p = a.showValue;
        a = a.size;
        a = a === void 0 ? "default" : a;
        var q = k(g),
            r = q[0],
            s = q[1];
        q = k(null);
        var t = q[0];
        q = q[1];
        var u = k(!1),
            v = u[0],
            w = u[1];
        j(function() {
            s(g)
        }, [g]);
        j(function() {
            t && m(e, l, t, f === "dark")
        }, [e, f, t, l, r]);
        u = function(a) {
            s(a.target.value), n(Number(a.target.value))
        };
        var x = function(a) {
                s(a.target.value), o && o(Number(a.target.value))
            },
            y = function(a) {
                w(!0)
            },
            z = function(a) {
                w(!1), x(a)
            };
        return i.jsxs(c("PolarisIGCoreBox"), {
            alignItems: "center",
            direction: "row",
            justifyContent: "center",
            width: "100%",
            children: [i.jsx(c("PolarisIGCoreBox"), {
                flex: "grow",
                children: i.jsx("input", {
                    className: "_ac2y" + (a === "default" ? " _ac2z" : "") + (a === "small" ? " _ac2-" : "") + (f === "dark" ? " _ac2_" : "") + (b ? " _ac30" : ""),
                    disabled: b,
                    max: l,
                    min: h,
                    onChange: u,
                    onInput: function(a) {
                        a = a.target;
                        return m(e, l, a)
                    },
                    onMouseDown: y,
                    onMouseUp: z,
                    onTouchEnd: z,
                    onTouchStart: y,
                    readOnly: !d("PolarisUA").isMobileSafari(),
                    ref: q,
                    type: "range",
                    value: r
                })
            }), p && i.jsx(c("PolarisIGCoreBox"), {
                marginStart: 2,
                width: 24,
                children: i.jsx(c("PolarisIGCoreText").Body2, {
                    color: Number(r) !== 0 ? "ig-primary-text" : "ig-secondary-text",
                    textAlign: "right",
                    weight: v ? "semibold" : "normal",
                    children: r
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.updateBackgroundFill = m;
    g.CreationSlider = a
}, 98);
__d("PolarisCreationZoomSlider.react", ["cx", "PolarisCreationSlider.react", "PolarisCreationV2ActionTypes", "react", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = 2;

    function k(a) {
        return (a - 1) / (j - 1) * 100
    }

    function l(a) {
        return 1 + a / 100 * (j - 1)
    }

    function a(a) {
        var b = a.id,
            c = a.onChange;
        a = a.scale;
        var e = d("usePolarisCreationDispatch").useCreationDispatch();
        return i.jsx("div", {
            className: "_abm5",
            children: i.jsx(d("PolarisCreationSlider.react").CreationSlider, {
                color: "dark",
                initialValue: k(a),
                onChange: function(a) {
                    return c(l(a))
                },
                onSetValue: function(a) {
                    e({
                        type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                        id: b,
                        scale: l(a)
                    })
                },
                showValue: !1,
                size: "small"
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.SLIDER_ZOOM_VALUE = j;
    g.scaleToSlider = k;
    g.sliderToScale = l;
    g.CreationZoomSlider = a
}, 98);
__d("PolarisIGCoreZoomPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "m22.707 21.293-4.825-4.825a9.519 9.519 0 1 0-1.414 1.414l4.825 4.825a1 1 0 0 0 1.414-1.414ZM10.5 18.001a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Zm3.5-8.5h-2.5v-2.5a1 1 0 1 0-2 0v2.5H7a1 1 0 1 0 0 2h2.5v2.5a1 1 0 0 0 2 0v-2.5H14a1 1 0 0 0 0-2Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisCreationZoomMediaButton.react", ["PolarisCreationMediaPopoverButton.react", "PolarisCreationV2Strings", "PolarisCreationZoomSlider.react", "PolarisIGCoreBox", "PolarisIGCoreZoomPanoOutlineIcon", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationMediaPopoverContext"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = 32,
        j = 132;

    function a(a) {
        a = a.onZoomChange;
        var b = d("usePolarisCreationMediaPopoverContext").useCreationMediaPopoverContext(),
            e = b.openedPopover,
            f = b.setOpenedPopover,
            g = e === d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.ZOOM;
        b = c("usePolarisCreationCurrentMedia")();
        var k = b.currentMedia;
        b = b.currentMediaId;
        k = k.scale;
        var l = function() {
            f(g ? null : d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.ZOOM)
        };
        e = e != null && e !== d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.ZOOM;
        return h.jsx(c("PolarisIGCoreBox"), {
            alignItems: "start",
            direction: "column",
            children: h.jsx(c("PolarisCreationMediaPopoverButton.react"), {
                altText: d("PolarisCreationV2Strings").ZOOM_ALT_TEXT,
                disabled: e,
                expanded: g,
                icon: c("PolarisIGCoreZoomPanoOutlineIcon"),
                togglePopover: l,
                children: h.jsx(c("PolarisIGCoreBox"), {
                    height: i,
                    justifyContent: "center",
                    width: j,
                    children: h.jsx(d("PolarisCreationZoomSlider.react").CreationZoomSlider, {
                        id: b,
                        onChange: a,
                        scale: k
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreDeletePanoFilledIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M21.253 5.001h-4.255V3.632A2.64 2.64 0 0 0 14.362.996H9.635A2.64 2.64 0 0 0 7 3.632v1.37H2.748a1.5 1.5 0 0 0 0 3h18.505a1.5 1.5 0 0 0 0-3Zm-7.255 0H9.999V3.996h3.999Zm4.965 4H5.037a1 1 0 0 0-.992 1.124l1.327 10.606A2.59 2.59 0 0 0 7.942 23h8.116a2.59 2.59 0 0 0 2.57-2.269l1.327-10.606a1 1 0 0 0-.992-1.124Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisCreationMediaPreviewControlsOverlay.react", ["cx", "PolarisCreationCropMediaButton.react", "PolarisCreationGalleryMediaButton.react", "PolarisCreationMediaDiscardDialog.react", "PolarisCreationMediaPreviewCarouselButtons.react", "PolarisCreationStepProvider.react", "PolarisCreationTypes", "PolarisCreationZoomMediaButton.react", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreDeletePanoFilledIcon", "PolarisIGCoreSVGIconButton", "PolarisQEHelper", "PolarisUA", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationSelectMedia"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useState;

    function k(a) {
        var b = a.onZoomChange;
        a = a.setShowDeleteDialog;
        var e = c("usePolarisCreationCurrentMedia")();
        e = e.currentMediaItemType;
        return d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? i.jsxs(i.Fragment, {
            children: [i.jsx(c("PolarisIGCoreBox"), {
                bottom: !0,
                left: !0,
                margin: 2,
                position: "absolute",
                children: i.jsx(c("PolarisCreationCropMediaButton.react"), {})
            }), e === "image" && b != null && i.jsx(c("PolarisIGCoreBox"), {
                bottom: !0,
                left: !0,
                marginStart: 11,
                padding: 2,
                position: "absolute",
                children: i.jsx(c("PolarisCreationZoomMediaButton.react"), {
                    onZoomChange: b
                })
            }), i.jsx(c("PolarisIGCoreBox"), {
                alignItems: "end",
                bottom: !0,
                padding: 2,
                position: "absolute",
                right: !0,
                width: "100%",
                children: i.jsx(c("PolarisCreationGalleryMediaButton.react"), {
                    setShowDeleteDialog: a
                })
            })]
        }) : null
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.children,
            e = a.croppedHeightScaled,
            f = a.croppedWidthScaled,
            g = a.enableMoreOptions,
            h = a.mediaType;
        a = a.onZoomChange;
        var l = d("PolarisCreationStepProvider.react").useCreationStep();
        l = l.step;
        var m = j(!1),
            n = m[0],
            o = m[1];
        m = c("usePolarisCreationCurrentMedia")();
        var p = m.currentMediaId;
        m = c("usePolarisCreationSelectMedia")();
        var q = m.removeMedia;
        m = j(!1);
        var r = m[0],
            s = m[1];
        m = j(!1);
        var t = m[0],
            u = m[1];
        m = j(!1);
        var v = m[0],
            w = m[1];
        m = g && (r || d("PolarisUA").isTouchDevice()) && !v;
        g = function() {
            return q(p)
        };
        r = l === d("PolarisCreationTypes").STEP.crop;
        v = function() {
            return d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? i.jsx(c("PolarisCreationMediaPreviewCarouselButtons.react"), {}) : null
        };
        return i.jsxs(i.Fragment, {
            children: [r && i.jsx(k, {
                onZoomChange: a,
                setShowDeleteDialog: o
            }), v(), i.jsxs("div", {
                onMouseDown: function() {
                    return u(!0)
                },
                onMouseEnter: function() {
                    return s(!0)
                },
                onMouseLeave: function() {
                    s(!1), w(!1)
                },
                onMouseMove: function() {
                    t && w(!0)
                },
                onMouseUp: function() {
                    u(!1), w(!1)
                },
                role: "presentation",
                children: [b, m && !d("PolarisQEHelper").hasFeedCreationV2Dogfooding() && i.jsx(c("PolarisIGCoreBox"), {
                    alignItems: "end",
                    height: e,
                    justifyContent: "end",
                    position: "absolute",
                    width: f,
                    children: i.jsx("div", {
                        className: "_abgk",
                        children: i.jsx(c("PolarisIGCoreSVGIconButton"), {
                            onClick: function() {
                                o(!0), s(!1), w(!1)
                            },
                            children: i.jsx(c("PolarisIGCoreDeletePanoFilledIcon"), {
                                alt: d("PolarisGenericStrings").DELETE_TEXT,
                                color: "ig-text-on-media",
                                size: 24
                            })
                        })
                    })
                }), n && i.jsx(c("PolarisCreationMediaDiscardDialog.react"), {
                    mediaType: h,
                    onModalClose: function() {
                        return o(!1)
                    },
                    onRemoveMedia: g
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationMediaPreviewCropContainer.react", ["PolarisIGAnimate", "react", "react-spring-wwwig"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children,
            c = a.croppedHeightScaled,
            e = a.croppedWidthScaled;
        a = d("react-spring-wwwig").useSpring(function() {
            return {
                height: c,
                width: e,
                config: {
                    mass: 1,
                    tension: 470,
                    friction: 40
                }
            }
        }, [c, e]);
        a = a[0];
        return h.jsx(d("PolarisIGAnimate").Animated.div, {
            style: babelHelpers["extends"]({}, a, {
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
            }),
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisCreationVideoPlayer", ["react"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
        i = b.createContext({
            video: null,
            setVideo: function() {},
            isPlaying: !1,
            pauseVideo: function() {},
            playVideo: function() {}
        });

    function a() {
        return h(i)
    }
    g.CreationVideoPlayerContext = i;
    g.useCreationVideoPlayerContext = a
}, 98);
__d("PolarisCreationVideoPlayer.react", ["cx", "PolarisCreationConstants", "PolarisIGAnimate", "PolarisVideoPlayButton.react", "react", "usePolarisCreationVideoPlayer"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useEffect;

    function a(a) {
        var b = a.autoPlay,
            e = a.coverPhoto,
            f = a.forwardRef,
            g = a.isAnimated;
        g = g === void 0 ? !1 : g;
        var h = a.loop;
        a.mediaType;
        var l = a.muted,
            m = a.onLoadedData,
            n = a.src,
            o = a.style,
            p = a.trim;
        a = d("usePolarisCreationVideoPlayer").useCreationVideoPlayerContext();
        var q = a.isPlaying,
            r = a.pauseVideo,
            s = a.playVideo,
            t = a.setVideo,
            u = a.video,
            v = j(function() {
                var a;
                if (u == null) return;
                r();
                u.currentTime = (a = p == null ? void 0 : p.start) != null ? a : 0
            }, [r, p, u]);
        a = j(function() {
            var a;
            if (u == null) return;
            u.currentTime = (a = p == null ? void 0 : p.start) != null ? a : 0;
            s()
        }, [s, p, u]);
        var w = function() {
                if (u != null) {
                    var a, b;
                    a = (a = p == null ? void 0 : p.start) != null ? a : 0;
                    b = (b = (b = p == null ? void 0 : p.end) != null ? b : u.duration) != null ? b : 0;
                    (u.currentTime < a || b != null && u.currentTime >= b) && (u.currentTime = a)
                }
            },
            x = function() {
                if (u == null) return;
                q === !0 ? r() : (w(), s())
            };
        k(function() {
            var a = window.requestAnimationFrame(b);

            function b() {
                var c, e, f;
                if (u == null || !q) return;
                c = (c = p == null ? void 0 : p.start) != null ? c : 0;
                e = (e = (e = p == null ? void 0 : p.end) != null ? e : u.duration) != null ? e : 0;
                f = (f = u == null ? void 0 : u.duration) != null ? f : 0;
                e != null && u.currentTime >= e - f * d("PolarisCreationConstants").VIDEO_TRIM_OFFSET && (u.paused || (h === !0 ? u.currentTime = c : v()));
                a = window.requestAnimationFrame(b)
            }
            return function() {
                window.cancelAnimationFrame(a), q === !0 && r()
            }
        }, [a, v, q, h, r, p, u]);

        function y() {
            if (u == null || m == null) return;
            m(u)
        }
        a = b !== !0 && e != null && q !== !0;
        y = i.jsxs(i.Fragment, {
            children: [i.jsx("video", {
                autoPlay: b,
                className: "_abg5",
                controls: !1,
                loop: !1,
                muted: l,
                onEnded: h !== !0 ? v : void 0,
                onLoadedData: y,
                ref: t,
                src: n
            }), a && i.jsx("div", {
                style: {
                    backgroundImage: "url(" + ((l = e) != null ? l : "") + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    position: "absolute",
                    height: "100%",
                    width: "100%"
                }
            })]
        });
        t = i.jsx(d("PolarisIGAnimate").Animated.div, {
            forwardRef: f,
            style: o,
            children: y
        });
        n = i.jsx("div", {
            style: o,
            children: y
        });
        return i.jsxs(i.Fragment, {
            children: [g ? t : n, b !== !0 && i.jsx(c("PolarisVideoPlayButton.react"), {
                onClick: x,
                showPlayButton: !q
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationMediaPreviewMediaContainer.react", ["cx", "PolarisCreationCompositionGrid.react", "PolarisCreationV2Actions", "PolarisCreationV2State", "PolarisCreationVideoPlayer.react", "PolarisCreationZoomSlider.react", "PolarisIGAnimate", "PolarisQEHelper", "PolarisUA", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.bindDragEvents,
            e = a.isPanning,
            f = a.mediaDimensions,
            g = a.mediaType,
            h = a.offsetX,
            j = a.offsetY,
            k = a.onPanAndZoom,
            l = a.onZoomChange,
            m = a.panAndZoomStyles;
        a = a.setMediaEl;
        var n = d("usePolarisCreationDispatch").useCreationDispatch(),
            o = c("usePolarisCreationCurrentMedia")(),
            p = o.currentMedia,
            q = o.currentMediaId;
        o = o.currentMediaItem;
        o = o.dataURL;
        var r = p.audio,
            s = p.scale;
        h = {
            height: f.height,
            transform: "translateX(" + h + "px) translateY(" + j + "px) scale(" + s,
            transition: "none",
            width: f.width
        };
        j = function(a) {
            if (r !== d("PolarisCreationV2State").AUDIO_STATUS.none) {
                a = d("PolarisCreationV2Actions").verifyAudioTracks(a, q);
                a != null && n(a)
            }
        };
        var t = function() {
            if (d("PolarisQEHelper").hasFeedCreationV2Dogfooding()) return null;
            else if (g === "image" && k != null) return i.jsx(d("PolarisCreationZoomSlider.react").CreationZoomSlider, {
                id: q,
                onChange: l,
                scale: s
            });
            return null
        };
        return i.jsxs(i.Fragment, {
            children: [t(), g === "image" && i.jsx(d("PolarisIGAnimate").Animated.div, {
                forwardRef: a,
                style: babelHelpers["extends"]({}, m, {
                    backgroundImage: "url(" + o + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    height: f.height,
                    width: f.width
                })
            }), g === "video" && i.jsx(c("PolarisCreationVideoPlayer.react"), {
                autoPlay: !0,
                coverPhoto: p == null ? void 0 : (t = p.coverPhoto) == null ? void 0 : (t = t.selectedCoverPhoto) == null ? void 0 : t.dataURL,
                forwardRef: a,
                isAnimated: !0,
                loop: !0,
                muted: r !== d("PolarisCreationV2State").AUDIO_STATUS.on || d("PolarisUA").isBrowser("Safari"),
                onLoadedData: j,
                src: o,
                style: babelHelpers["extends"]({}, m, {
                    height: f.height,
                    width: f.width
                })
            }), g === "videoplayer" && i.jsx(c("PolarisCreationVideoPlayer.react"), {
                autoPlay: !1,
                coverPhoto: p == null ? void 0 : (t = p.coverPhoto) == null ? void 0 : (a = t.selectedCoverPhoto) == null ? void 0 : a.dataURL,
                loop: !0,
                mediaType: g,
                muted: r !== d("PolarisCreationV2State").AUDIO_STATUS.on,
                src: o,
                style: h,
                trim: p == null ? void 0 : p.trim
            }), k != null && i.jsx(d("PolarisIGAnimate").Animated.div, babelHelpers["extends"]({
                className: "_aabm"
            }, b(), {
                children: e && i.jsx(c("PolarisCreationCompositionGrid.react"), {})
            }))]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreRemixPanoOutline24Icon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M11.999 6.999a1 1 0 0 0-1 1V11H8a1 1 0 0 0 0 2h2.999v2.998a1 1 0 0 0 2 0V13H16a1 1 0 0 0 0-2h-3.001V7.999a1 1 0 0 0-1-1ZM21.001 11a1 1 0 0 0-1 1v3.104c0 2.355-.552 3.12-1.14 3.732-.637.614-1.404 1.165-3.758 1.165H8.896c-2.352 0-3.12-.552-3.731-1.139a3.729 3.729 0 0 1-.644-.864H7a1 1 0 0 0 0-2H2a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.65a6.257 6.257 0 0 0 .751.928c1.076 1.036 2.362 1.725 5.146 1.725h6.206c2.786 0 4.072-.69 5.171-1.751 1.037-1.073 1.727-2.36 1.727-5.146V12a1 1 0 0 0-1-1ZM22 .999a1 1 0 0 0-1 1v2.653a6.2 6.2 0 0 0-.751-.926c-1.073-1.037-2.36-1.727-5.146-1.727H8.897c-2.788 0-4.074.69-5.17 1.751C2.69 4.82 2 6.104 2 8.896V12a1 1 0 0 0 2 0V8.896c0-2.358.55-3.122 1.14-3.731.635-.614 1.402-1.166 3.757-1.166h6.206c2.355 0 3.12.552 3.733 1.142a3.705 3.705 0 0 1 .638.858H17a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisReelCreationNuxScreenStrings", ["fbt", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    a = h._("Video posts are now shared as reels");
    b = h._("Video posts are now reels");
    c = h._("Your account is public, so anyone can discover your video and use your original audio to create a reel.");
    e = h._("Because your account is private, only your followers will see your reels.");
    f = h._("Anyone can create a remix with your reel and download it as part of their remix. You can turn off remixing from your settings or on each reel in the app.");
    d = h._("Learn more about Reels");
    var i = h._("Learn more");
    h = h._("OK");
    g.REEL_CREATION_NUX_MODAL_TITLE_PUBLIC = a;
    g.REEL_CREATION_NUX_MODAL_TITLE_PRIVATE = b;
    g.REEL_CREATION_NUX_BULLET_1_PUBLIC = c;
    g.REEL_CREATION_NUX_BULLET_1_PRIVATE = e;
    g.REEL_CREATION_NUX_BULLET_2_PUBLIC = f;
    g.REEL_CREATION_NUX_LEARN_MORE_LINK_PUBLIC = d;
    g.REEL_CREATION_NUX_LEARN_MORE_LINK_PRIVATE = i;
    g.REEL_CREATION_NUX_MODAL_PRIMARY_ACTION = h
}, 98);
__d("PolarisReelCreationNuxScreenModal.react", ["cx", "IGCoreDialog", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreDialogCircleMedia", "PolarisIGCoreRemixPanoOutline24Icon", "PolarisIGCoreText", "PolarisIGCoreUserCirclePanoOutlineIcon", "PolarisNavigationUtils", "PolarisReelCreationNuxScreenStrings", "PolarisuserSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = i.jsx("img", {
            alt: "",
            height: "76px",
            src: "/images/instagram/clips/reels_nux_icon.png?__d=www",
            width: "76px"
        }),
        k = "https://help.instagram.com/270447560766967/";

    function l(a) {
        var b = a.icon,
            d = a.text;
        a = a.isLast;
        return i.jsx(c("PolarisIGCoreBox"), {
            direction: "row",
            children: i.jsxs("div", {
                className: (a ? "_ag3_" : "") + (a ? "" : " _ag40"),
                children: [i.jsx("div", {
                    className: "_ag41",
                    children: b
                }), i.jsx("div", {
                    className: "_ag4a",
                    children: i.jsx(c("PolarisIGCoreText").Body, {
                        color: "ig-secondary-text",
                        children: d
                    })
                })]
            })
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function m(a) {
        return i.jsx(d("IGCoreDialog").IGCoreDialog, {
            media: i.jsx(c("PolarisIGCoreDialogCircleMedia"), {
                icon: j
            }),
            size: "default",
            title: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_MODAL_TITLE_PRIVATE,
            children: i.jsxs("div", {
                className: "_ag4b",
                children: [i.jsx("div", {
                    className: "_ag40",
                    children: i.jsx("div", {
                        className: "_ag4a",
                        children: i.jsx(c("PolarisIGCoreText").Body, {
                            color: "ig-secondary-text",
                            textAlign: "center",
                            children: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_BULLET_1_PRIVATE
                        })
                    })
                }), i.jsx("div", {
                    className: "_ag4c",
                    children: i.jsx(c("PolarisIGCoreButton"), {
                        color: "ig-primary-button",
                        fullWidth: !0,
                        large: !0,
                        onClick: a,
                        children: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_MODAL_PRIMARY_ACTION
                    })
                }), i.jsx(c("PolarisIGCoreBox"), {
                    direction: "row",
                    children: i.jsx("div", {
                        className: "_ag4d",
                        children: i.jsx(c("PolarisIGCoreText").Label, {
                            children: i.jsx(c("PolarisIGCoreButton"), {
                                borderless: !0,
                                onClick: function() {
                                    d("PolarisNavigationUtils").openURLWithFullPageReload(k, {
                                        openInNewTab: !0
                                    })
                                },
                                children: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_LEARN_MORE_LINK_PRIVATE
                            })
                        })
                    })
                })]
            })
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function n(a) {
        return i.jsx(d("IGCoreDialog").IGCoreDialog, {
            media: i.jsx(c("PolarisIGCoreDialogCircleMedia"), {
                icon: j
            }),
            size: "default",
            title: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_MODAL_TITLE_PUBLIC,
            children: i.jsxs("div", {
                className: "_ag4b",
                children: [i.jsx(l, {
                    icon: i.jsx(c("PolarisIGCoreUserCirclePanoOutlineIcon"), {
                        alt: ""
                    }),
                    isLast: !1,
                    text: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_BULLET_1_PUBLIC
                }), i.jsx(l, {
                    icon: i.jsx(c("PolarisIGCoreRemixPanoOutline24Icon"), {
                        alt: ""
                    }),
                    isLast: !0,
                    text: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_BULLET_2_PUBLIC
                }), i.jsx(c("PolarisIGCoreBox"), {
                    direction: "row",
                    children: i.jsx("div", {
                        className: "_ag4e",
                        children: i.jsx(c("PolarisIGCoreText").Label, {
                            children: i.jsx(c("PolarisIGCoreButton"), {
                                borderless: !0,
                                onClick: function() {
                                    d("PolarisNavigationUtils").openURLWithFullPageReload(k, {
                                        openInNewTab: !0
                                    })
                                },
                                children: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_LEARN_MORE_LINK_PUBLIC
                            })
                        })
                    })
                }), i.jsx("div", {
                    className: "_ag4f",
                    children: i.jsx(c("PolarisIGCoreButton"), {
                        color: "ig-primary-button",
                        fullWidth: !0,
                        large: !0,
                        onClick: a,
                        children: d("PolarisReelCreationNuxScreenStrings").REEL_CREATION_NUX_MODAL_PRIMARY_ACTION
                    })
                })]
            })
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function a(a) {
        a = a.onAction;
        var b = d("react-redux-wwwig").useSelector(function(a) {
            return (a = d("PolarisuserSelectors").getViewer(a)) == null ? void 0 : a.isPrivate
        });
        if (b === !0) return m(a);
        else return n(a)
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisReelCreationNuxScreen.react", ["PolarisDismissEntry", "PolarisODS", "PolarisReelCreationNuxScreenModal.react", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
        j = b.useState;

    function a(a) {
        a = j(!1);
        var b = a[0],
            e = a[1],
            f = function() {
                d("PolarisDismissEntry").isDismissed(d("PolarisDismissEntry").REELS_CREATION_SESSIONS_TYPE) || e(!0)
            };
        a = function() {
            d("PolarisDismissEntry").setDismissEntry(d("PolarisDismissEntry").REELS_CREATION_SESSIONS_TYPE), e(!1)
        };
        i(function() {
            c("PolarisODS").incr("web.notifications.reels_creation_nux_shown")
        }, [b]);
        i(function() {
            f()
        });
        return b ? h.jsx(c("PolarisReelCreationNuxScreenModal.react"), {
            onAction: a
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisPanDrag", ["react", "react-use-gesture"], function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useEffect,
        i = b.useState;

    function j(a, b, c, d, e, f) {
        var g = a.clientWidth * d;
        a = a.clientHeight * d;
        return {
            left: -((g - f) / 2 + b),
            right: (g - f) / 2 - b,
            top: -((a - e) / 2 + c),
            bottom: (a - e) / 2 - c
        }
    }

    function k(a, b, c, d, e, f, g) {
        h(function() {
            var h = a.right != null && a.right < 0,
                i = a.bottom != null && a.bottom < 0,
                j = a.left != null && a.left > 0,
                k = a.top != null && a.top > 0,
                l = h && j || k && i;
            l = !l && (h || i || j || k);
            if (l && b) {
                l = c;
                var m = d;
                h && a.right != null && (l += a.right / e);
                i && a.bottom != null && (m += a.bottom / f);
                j && a.left != null && (l += Math.abs(a.left) / e);
                k && a.top != null && (m += Math.abs(a.top) / f);
                (l !== c || m !== d) && b(l, m, g)
            }
        }, [f, e, b, a.bottom, a.left, a.right, a.top, c, d, g])
    }

    function a(a, b, c, e, f, g, h, l) {
        var m = i(null),
            n = m[0];
        m = m[1];
        var o = a * h,
            p = b * g,
            q = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
        n != null && n.clientHeight !== 0 && n.clientWidth !== 0 && (q = j(n, o, p, c, g, h));
        n = d("react-use-gesture").useDrag(function(a) {
            var b = a.down;
            a = a.movement;
            var d = a[0];
            a = a[1];
            d = o + d;
            a = p + a;
            e({
                scale: c,
                x: d,
                y: a
            });
            if (f != null && !b) {
                d = d / h;
                a = a / g;
                f(d, a, c)
            }
            l(b)
        }, {
            bounds: q,
            rubberband: !0
        });
        k(q, f, a, b, h, g, c);
        return {
            setMediaEl: m,
            bindDragEvents: n,
            panBounds: q
        }
    }
    g.calculatePanBoundaries = j;
    g.usePanDragBoundaryCorrection = k;
    g.usePanDrag = a
}, 98);
__d("usePolarisCreationPanZoomDrag", ["PolarisCreationConstants", "PolarisCreationCropHelpers", "PolarisIGAnimate", "PolarisQEHelper", "react", "usePolarisPanDrag"], function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useState;

    function a(a, b, c, e, f) {
        var g = c.panningOffsetRatioX,
            i = c.panningOffsetRatioY,
            j = c.scale,
            k = h(j),
            l = k[0],
            m = k[1];
        k = d("PolarisCreationCropHelpers").getPanningOffsets(a, b, c);
        c = k.offsetX;
        k = k.offsetY;
        var n = d("PolarisIGAnimate").usePanAndZoom({
                scale: j,
                x: c,
                y: k
            }, d("PolarisCreationConstants").PAN_AND_ZOOM_ANIMATION_CONFIG, !1, [j, c, k]),
            o = n.set;
        n = n.style;
        g = d("usePolarisPanDrag").usePanDrag(g, i, d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? j : l, o, e, a, b, f);
        i = g.bindDragEvents;
        j = g.setMediaEl;
        l = function(a) {
            o({
                scale: a
            }), m(a)
        };
        return {
            bindDragEvents: i,
            setMediaEl: j,
            offsetX: c,
            offsetY: k,
            onZoomChange: l,
            panAndZoomStyles: n
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationMediaPreviewV2.react", ["cx", "PolarisCreationMediaPreviewControlsOverlay.react", "PolarisCreationMediaPreviewCropContainer.react", "PolarisCreationMediaPreviewMediaContainer.react", "PolarisReelCreationNuxScreen.react", "PolarisvideoMergeUtils", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationMediaPopoverContext", "usePolarisCreationMediaPreview", "usePolarisCreationPanZoomDrag", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useState;

    function a(a) {
        var b = a.onPanAndZoom;
        a = a.previewType;
        var e = d("usePolarisCreationState").useCreationState(),
            f = d("usePolarisCreationMediaPopoverContext").useCreationMediaPopoverContext(),
            g = f.openedPopover,
            h = f.setOpenedPopover;
        f = j(!1);
        var k = f[0],
            l = f[1];
        f = function(a) {
            l(a), a === !0 && g != null && h(null)
        };
        var m = c("usePolarisCreationCurrentMedia")(),
            n = m.currentMedia,
            o = m.currentMediaId;
        m = m.currentMediaItemType;
        a = a != null ? a : m;
        e = c("usePolarisCreationMediaPreview")(n, (m = e.cropRatio) != null ? m : 1);
        m = e.croppedHeightScaled;
        var p = e.croppedWidthScaled,
            q = e.frameEl,
            r = e.mediaDimensions;
        e = e.setFrameEl;
        n = c("usePolarisCreationPanZoomDrag")(m, p, n, b, f);
        f = n.bindDragEvents;
        var s = n.offsetX,
            t = n.offsetY,
            u = n.onZoomChange,
            v = n.panAndZoomStyles;
        n = n.setMediaEl;
        q = q !== null && m !== 0 && p !== 0;
        var w = null;
        a === "video" && d("PolarisvideoMergeUtils").eligibleForVideoMerge() && (w = i.jsx(c("PolarisReelCreationNuxScreen.react"), {}));
        return i.jsxs("div", {
            className: "_abfo",
            ref: e,
            children: [w, i.jsx(c("PolarisCreationMediaPreviewControlsOverlay.react"), {
                croppedHeightScaled: m,
                croppedWidthScaled: p,
                enableMoreOptions: b != null && !k,
                mediaType: a,
                onZoomChange: u,
                children: q && i.jsx(c("PolarisCreationMediaPreviewCropContainer.react"), {
                    croppedHeightScaled: m,
                    croppedWidthScaled: p,
                    children: i.jsx(c("PolarisCreationMediaPreviewMediaContainer.react"), {
                        bindDragEvents: f,
                        isPanning: k,
                        mediaDimensions: r,
                        mediaType: a,
                        offsetX: s,
                        offsetY: t,
                        onPanAndZoom: b,
                        onZoomChange: u,
                        panAndZoomStyles: v,
                        setMediaEl: n
                    })
                }, o)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalBodyMediaV2.react", ["cx", "PolarisCreationMediaPreviewV2.react", "PolarisCreationV2ActionTypes", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a = a.mainContent;
        var b = d("usePolarisCreationDispatch").useCreationDispatch(),
            e = c("usePolarisCreationCurrentMedia")(),
            f = e.currentMediaId;
        e = function(a, c, e) {
            b({
                type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                id: f,
                panningOffsetRatioX: a,
                panningOffsetRatioY: c,
                scale: e
            })
        };
        return i.jsx("div", {
            className: "_abma",
            children: i.jsx("div", {
                className: "_abmb",
                children: a != null ? a : i.jsx(c("PolarisCreationMediaPreviewV2.react"), {
                    onPanAndZoom: e
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationVideoPlayerContextProvider.react", ["react", "usePolarisCreationVideoPlayer"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState;

    function a(a) {
        a = a.children;
        var b = i(null),
            c = b[0];
        b = b[1];
        var e = i(!1),
            f = e[0],
            g = e[1];
        e = function() {
            if (c != null) {
                var a = c.play();
                a !== void 0 && a.then(function(a) {
                    g(!0)
                })["catch"](function(a) {})
            }
        };
        var j = function() {
            c != null && (c.pause(), g(!1))
        };
        return h.jsx(d("usePolarisCreationVideoPlayer").CreationVideoPlayerContext.Provider, {
            value: {
                video: c,
                setVideo: b,
                isPlaying: f,
                playVideo: e,
                pauseVideo: j
            },
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CreationVideoPlayerContextProvider = a
}, 98);
__d("usePolarisCreationModalDimensions", ["PolarisGetCreationModalDimensions"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return c("PolarisGetCreationModalDimensions")()
    }
    g["default"] = a
}, 98);
__d("PolarisCreationModalBodyV2.react", ["cx", "PolarisCreationModalBodyMediaV2.react", "PolarisCreationVideoPlayerContextProvider.react", "PolarisIGAnimate", "PolarisIGCoreBox", "PolarisUA", "react", "usePolarisCreationModalDimensions"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useRef;

    function a(a) {
        var b = a.children,
            e = a.mainContent,
            f = a.settingsColumnContent,
            g = j(null),
            h = j(null),
            k = f != null;
        a = d("PolarisIGAnimate").useFadeTransition({
            show: !0,
            duration: 250
        });
        var l = d("PolarisIGAnimate").useFadeTransition({
                show: k === !0,
                duration: 500
            }),
            m = c("usePolarisCreationModalDimensions")(),
            n = m.modalDimensions;
        m = m.modalDimensionsWithSetting;
        n = {
            width: n.width + "px"
        };
        m = {
            width: m.width + "px"
        };
        return i.jsx(d("PolarisCreationVideoPlayerContextProvider.react").CreationVideoPlayerContextProvider, {
            children: i.jsxs("div", {
                className: "_ac2r" + (k ? " _ac2s" : ""),
                style: k ? m : n,
                children: [a(function(a, f) {
                    return i.jsx(d("PolarisIGAnimate").Animated.div, {
                        className: "_ac2t" + (k ? " _ac2u" : ""),
                        style: a,
                        children: b != null ? b : i.jsx(c("PolarisCreationModalBodyMediaV2.react"), {
                            mainContent: e
                        })
                    })
                }), l(function(a, b) {
                    return i.jsx(d("PolarisIGAnimate").Animated.div, {
                        className: "_ac2v",
                        style: a,
                        children: i.jsx(c("PolarisIGCoreBox"), {
                            containerRef: g,
                            flex: "grow",
                            children: i.jsx("div", {
                                className: "_ac2w" + (d("PolarisUA").isMobileSafari() ? " _ac2x" : ""),
                                ref: h,
                                children: f
                            })
                        })
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationLocationInput.react", ["cx", "PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "PolarisGenericStrings", "PolarisIGCoreAnchoredPopover", "PolarisIGCoreAnchoredPopoverContentContainer", "PolarisIGCoreBox", "PolarisIGCoreLocationPanoOutlineIcon", "PolarisIGCoreSVGIconButton", "PolarisIGCoreTextInput", "PolarisIGCoreXPanoOutlineIcon", "PolarisSearchConstants", "PolarisTypeaheadContainer.react", "react", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useRef,
        k = b.useState,
        l = 211,
        m = 339;

    function a(a) {
        var b, e;
        a = a.width;
        var f = d("usePolarisCreationDispatch").useCreationDispatch(),
            g = d("usePolarisCreationState").useCreationState(),
            h = k(""),
            n = h[0],
            o = h[1];
        h = k(!1);
        var p = h[0],
            q = h[1];
        h = j(null);
        b = h == null ? void 0 : (b = h.current) == null ? void 0 : b.getBoundingClientRect();

        function r(a) {
            a.type === "LOCATION_RESULT" && (f({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_LOCATION,
                location: a
            }), o(a == null ? void 0 : a.name)), q(!1)
        }

        function s() {
            o(""), f({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_LOCATION,
                location: null
            })
        }
        e = n.length > 0 || (g == null ? void 0 : (e = g.location) == null ? void 0 : e.name) != null ? i.jsx("span", {
            className: "_abgg",
            children: i.jsx(c("PolarisIGCoreSVGIconButton"), {
                onClick: s,
                children: i.jsx(c("PolarisIGCoreXPanoOutlineIcon"), {
                    alt: d("PolarisGenericStrings").CLOSE_TEXT,
                    color: "ig-secondary-text",
                    size: 16
                })
            })
        }) : i.jsx(c("PolarisIGCoreBox"), {
            marginStart: 2,
            children: i.jsx(c("PolarisIGCoreLocationPanoOutlineIcon"), {
                alt: d("PolarisCreationV2Strings").LOCATION_SEARCH_PLACEHOLDER,
                color: "ig-secondary-text",
                size: 16
            })
        });
        return i.jsx(c("PolarisIGCoreAnchoredPopover"), {
            content: p && i.jsx(c("PolarisIGCoreAnchoredPopoverContentContainer"), {
                height: l,
                hideArrow: !0,
                isVisible: p && n.length > 0,
                onClose: function() {
                    return q(!1)
                },
                width: (s = a) != null ? s : m,
                children: i.jsx("div", {
                    ref: h,
                    children: i.jsx(c("PolarisTypeaheadContainer.react"), {
                        cursorIndex: n.length,
                        initialSearchContext: d("PolarisSearchConstants").SEARCH_CONTEXT.LOCATION,
                        inputString: n,
                        onResultSelect: r,
                        showResultsCondensed: !1,
                        size: "extraLarge",
                        useSearchTriggers: !1
                    })
                })
            }),
            offsetLeft: ((p = b == null ? void 0 : b.left) != null ? p : 0) + 8,
            offsetTop: b == null ? void 0 : b.top,
            children: i.jsx("div", {
                className: "_abgh",
                children: i.jsx(c("PolarisIGCoreTextInput"), {
                    autoComplete: "off",
                    backgroundColor: "transparent",
                    dangerouslySetClassName: {
                        __className: (g == null ? void 0 : (a = g.location) == null ? void 0 : a.name) != null ? "_abgi" : ""
                    },
                    disabled: g.location != null,
                    endAdornment: e,
                    height: 44,
                    name: "creation-location-input",
                    onBlur: function() {
                        q(!1), o("")
                    },
                    onChange: function(a) {
                        return o(a.target.value)
                    },
                    onFocus: function() {
                        return q(!0)
                    },
                    placeholder: d("PolarisCreationV2Strings").LOCATION_SEARCH_PLACEHOLDER,
                    value: (h = g == null ? void 0 : (s = g.location) == null ? void 0 : s.name) != null ? h : n
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalComposeExpandInput.react", ["cx", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreChevronIcon", "PolarisIGCorePressable", "PolarisIGCoreText", "PolarisQEHelper", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function j(a) {
        var b = a.isExpanded;
        a = a.title;
        return d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? i.jsx(c("PolarisIGCoreText").Label, {
            weight: b ? "semibold" : "normal",
            children: a
        }) : i.jsx(c("PolarisIGCoreText").Section, {
            children: a
        })
    }
    j.displayName = j.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.children,
            e = a.isExpanded,
            f = a.onInputPress;
        a = a.title;
        return i.jsxs("div", {
            className: "_abm8",
            children: [i.jsxs(c("PolarisIGCorePressable"), {
                className: "_abm9",
                onPress: function() {
                    return f(function(a) {
                        return !a
                    })
                },
                children: [i.jsx(j, {
                    isExpanded: e,
                    title: a
                }), i.jsx(c("PolarisIGCoreChevronIcon"), {
                    alt: e ? d("PolarisGenericStrings").UP_CHEVRON_ALT : d("PolarisGenericStrings").DOWN_CHEVRON_ALT,
                    direction: e ? "up" : "down",
                    size: 16
                })]
            }), e && i.jsx(c("PolarisIGCoreBox"), {
                paddingX: 4,
                paddingY: 1,
                children: b
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisCreationAdvancedVideoCaptions", ["PolarisCheckboxToggle.react", "PolarisCreationV2ActionTypes", "PolarisCreationV2State", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisIGTVStrings", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationDispatch", "usePolarisCreationIsSingleVideoPost", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i(a) {
        a = d("usePolarisCreationState").useCreationState();
        var b = a.advancedSettings,
            e = d("usePolarisCreationDispatch").useCreationDispatch();
        a = function() {
            e({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_GENERATE_SUBTITLES_ENABLED,
                hasVideoSubtitlesEnabled: !b.hasVideoSubtitlesEnabled
            })
        };
        return h.jsxs(c("PolarisIGCoreBox"), {
            marginBottom: 3,
            children: [h.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "center",
                direction: "row",
                justifyContent: "between",
                marginBottom: 4,
                width: "100%",
                children: [h.jsx(c("PolarisIGCoreText").Label, {
                    children: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_CAPTIONS_CHECKBOX_LABEL
                }), h.jsx(c("PolarisCheckboxToggle.react"), {
                    checked: b.hasVideoSubtitlesEnabled,
                    onChange: a
                })]
            }), h.jsx(c("PolarisIGCoreText").Body2, {
                color: "ig-secondary-text",
                children: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_CAPTIONS_CHECKBOX_TEXT
            })]
        })
    }
    i.displayName = i.name + " [from " + f.id + "]";

    function a() {
        var a = c("usePolarisCreationIsSingleVideoPost")(),
            b = c("usePolarisCreationCurrentMedia")();
        b = b.currentMedia;
        b = b.audio === d("PolarisCreationV2State").AUDIO_STATUS.on;
        a = a && b;
        return {
            generateVideoCaptionsElement: h.jsx(i, {}),
            generateVideoCaptionsIsVisible: a
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationModalComposeAccessibilitySettings.react", ["PolarisCreationMediaPreviewThumbnail.react", "PolarisCreationModalComposeExpandInput.react", "PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisIGCoreTextInput", "nullthrows", "react", "usePolarisCreationAdvancedVideoCaptions", "usePolarisCreationDispatch", "usePolarisCreationMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = 44;

    function j(a) {
        var b, e = a.id,
            f = a.media;
        a = a.state;
        var g = d("usePolarisCreationDispatch").useCreationDispatch();
        return h.jsxs(h.Fragment, {
            children: [h.jsx(c("PolarisIGCoreBox"), {
                height: i,
                width: i,
                children: h.jsx(c("PolarisCreationMediaPreviewThumbnail.react"), {
                    aspectRatio: (b = a.cropRatio) != null ? b : 1,
                    media: f,
                    showOverlay: !1,
                    size: i,
                    src: f.type === "image" ? c("nullthrows")((b = f.filteredMedia) == null ? void 0 : b.dataURL) : c("nullthrows")(f == null ? void 0 : (b = f.coverPhoto) == null ? void 0 : (f = b.selectedCoverPhoto) == null ? void 0 : f.dataURL)
                })
            }), h.jsx(c("PolarisIGCoreBox"), {
                flex: "grow",
                marginStart: 2,
                children: h.jsx(c("PolarisIGCoreTextInput"), {
                    backgroundColor: "transparent",
                    name: "alt-text-" + e,
                    onChange: function(a) {
                        g({
                            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                            id: e,
                            altText: a.target.value
                        })
                    },
                    placeholder: d("PolarisCreationV2Strings").ALT_TEXT_PLACEHOLDER,
                    value: (f = (b = a.media.get(e)) == null ? void 0 : b.altText) != null ? f : ""
                })
            })]
        })
    }
    j.displayName = j.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.isExpanded;
        a = a.onInputPress;
        var e = d("usePolarisCreationState").useCreationState(),
            f = c("usePolarisCreationAdvancedVideoCaptions")(),
            g = f.generateVideoCaptionsElement;
        f = f.generateVideoCaptionsIsVisible;
        return h.jsx(c("PolarisCreationModalComposeExpandInput.react"), {
            isExpanded: b,
            onInputPress: a,
            title: d("PolarisCreationV2Strings").ALT_TEXT_TITLE,
            children: h.jsxs(h.Fragment, {
                children: [h.jsx(c("PolarisIGCoreText").Body2, {
                    color: "ig-secondary-text",
                    children: d("PolarisCreationV2Strings").ALT_TEXT_SUBTITLE
                }), h.jsxs(c("PolarisIGCoreBox"), {
                    marginBottom: 1,
                    children: [e.multiPostOrder.map(function(a, b) {
                        var f = d("usePolarisCreationMedia").getMediaInfo(c("nullthrows")(e.media.get(a)));
                        f = f.media;
                        return h.jsx(c("PolarisIGCoreBox"), {
                            direction: "row",
                            display: "flex",
                            marginBottom: b === e.multiPostOrder.length - 1 ? 3 : 4,
                            marginTop: b === 0 ? 3 : 0,
                            children: h.jsx(j, {
                                id: a,
                                media: f,
                                state: e
                            })
                        }, a)
                    }), f && g]
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationSettingsToggle.react", ["cx", "PolarisCheckboxToggle.react", "PolarisIGCoreBox", "PolarisIGCoreText", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.checked,
            d = a.labelText,
            e = a.onToggle;
        a = a.subtitleText;
        return i.jsxs(c("PolarisIGCoreBox"), {
            width: "100%",
            children: [i.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "center",
                direction: "row",
                justifyContent: "between",
                children: [i.jsx("div", {
                    className: "_aazo",
                    children: i.jsx(c("PolarisIGCoreText").Label, {
                        children: d
                    })
                }), i.jsx(c("PolarisCheckboxToggle.react"), {
                    checked: b,
                    onChange: function() {
                        return e(!b)
                    }
                })]
            }), i.jsx(c("PolarisIGCoreBox"), {
                paddingY: 3,
                children: i.jsx(c("PolarisIGCoreText").Body2, {
                    color: "ig-secondary-text",
                    children: a
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationAdvancedComments.react", ["PolarisCreationSettingsToggle.react", "PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "react", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = d("usePolarisCreationState").useCreationState(),
            e = d("usePolarisCreationDispatch").useCreationDispatch();
        return h.jsx(c("PolarisCreationSettingsToggle.react"), {
            checked: b.advancedSettings.hasCommentsDisabled,
            labelText: d("PolarisCreationV2Strings").TURN_OFF_COMMENTING,
            onToggle: function() {
                e({
                    type: d("PolarisCreationV2ActionTypes").CREATION_SET_COMMENTS_DISABLED,
                    hasCommentsDisabled: !b.advancedSettings.hasCommentsDisabled
                })
            },
            subtitleText: d("PolarisCreationV2Strings").TURN_OFF_COMMENTING_SUBTITLE
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationSettingHideLikeViewCounts.react", ["PolarisCreationSettingsToggle.react", "PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "PolarisExternalLink.react", "react", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = "https://help.instagram.com/113355287252104";

    function a(a) {
        var b = d("usePolarisCreationState").useCreationState(),
            e = d("usePolarisCreationDispatch").useCreationDispatch();
        return h.jsx(c("PolarisCreationSettingsToggle.react"), {
            checked: b.advancedSettings.hasLikeViewCountsDisabled,
            labelText: d("PolarisCreationV2Strings").HIDE_LIKE_VIEW_COUNTS,
            onToggle: function() {
                e({
                    type: d("PolarisCreationV2ActionTypes").CREATION_SET_LIKE_VIEW_COUNTS_DISABLED,
                    hasLikeViewCountsDisabled: !b.advancedSettings.hasLikeViewCountsDisabled
                })
            },
            subtitleText: h.jsxs(h.Fragment, {
                children: [d("PolarisCreationV2Strings").HIDE_LIKE_VIEW_COUNTS_SUBTITLE, " ", h.jsx(c("PolarisExternalLink.react"), {
                    href: i,
                    children: d("PolarisCreationV2Strings").HIDE_LIKE_VIEW_COUNTS_LEARN_MORE
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalComposeAdvancedSettings.react", ["PolarisCreationAdvancedComments.react", "PolarisCreationModalComposeExpandInput.react", "PolarisCreationSettingHideLikeViewCounts.react", "PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreDivider", "PolarisUA", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.isExpanded;
        a = a.onInputPress;
        var e = d("PolarisUA").isDesktop();
        return h.jsxs(h.Fragment, {
            children: [h.jsx(c("PolarisCreationModalComposeExpandInput.react"), {
                isExpanded: b,
                onInputPress: a,
                title: d("PolarisCreationV2Strings").ADVANCED_SETTINGS,
                children: h.jsxs(c("PolarisIGCoreBox"), {
                    alignItems: "center",
                    direction: "column",
                    marginBottom: 1,
                    children: [e && h.jsx(c("PolarisIGCoreBox"), {
                        marginBottom: 2,
                        children: h.jsx(c("PolarisCreationSettingHideLikeViewCounts.react"), {})
                    }), h.jsx(c("PolarisCreationAdvancedComments.react"), {})]
                })
            }), !b && h.jsx(c("PolarisIGCoreDivider"), {})]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreEmojiTray", ["cx", "PolarisEmojiConstants", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreText", "react"], function(a, b, c, d, e, f, g, h) {
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
            d = a.emojiIconStyles,
            e = a.onClick;
        return i.jsx(c("PolarisIGCoreButton"), {
            borderless: !0,
            onClick: function() {
                return e(b)
            },
            children: i.jsx("div", {
                className: "_a9_d",
                style: babelHelpers["extends"]({}, d),
                children: b
            })
        })
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.emojiIconStyles,
            e = a.onClick;
        a = a.trayRef;
        return i.jsxs(c("PolarisIGCoreBox"), {
            containerRef: a,
            direction: "row",
            wrap: !0,
            children: [i.jsx(c("PolarisIGCoreBox"), {
                margin: 2,
                width: "100%",
                children: i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                    color: "ig-secondary-text",
                    children: d("PolarisEmojiConstants").EMOJI_TRAY_MOST_POPULAR
                })
            }), d("PolarisEmojiConstants").mostPopularEmojis.map(function(a) {
                return i.jsx(k, {
                    emoji: a,
                    emojiIconStyles: b,
                    onClick: e
                }, a)
            }), Object.keys(d("PolarisEmojiConstants").Emojis).map(function(a) {
                var c = d("PolarisEmojiConstants").Emojis[a],
                    f = c.emojis;
                c = c.label;
                return i.jsxs(i.Fragment, {
                    children: [i.jsx(j, {
                        headerText: c
                    }), f.map(function(a) {
                        return i.jsx(k, {
                            emoji: a,
                            emojiIconStyles: b,
                            onClick: e
                        }, a)
                    })]
                }, a)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreEmojiButton", ["cx", "fbt", "PolarisIGCoreBox", "PolarisIGCoreEmojiTray", "PolarisIGCoreFace2PanoOutlineIcon", "PolarisIGCorePopover", "PolarisIGCoreSVGIconButton", "PolariswithForwardRef", "Portal", "react"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = 26,
        l = 309,
        m = 309,
        n = "bottom",
        o = {
            right: "53px",
            bottom: "360px"
        },
        p = {
            fontSize: "32px",
            height: "32px",
            margin: "6px",
            width: "32px"
        },
        q = 24,
        r = i._("Emoji");

    function a(a) {
        var b = a.buttonHover,
            d = a.isEmojiTrayOpen,
            e = a.onEmojiClick,
            f = a.setEmojiTrayOpen,
            g = a.emojiTrayRef,
            h = a.emojiButtonSize;
        h = h === void 0 ? q : h;
        var i = a.emojiColor;
        i = i === void 0 ? "ig-primary-text" : i;
        var s = a.emojiIconStyles;
        s = s === void 0 ? p : s;
        var t = a.emojiArrowLeftOffset;
        t = t === void 0 ? k : t;
        var u = a.emojiTrayHeight;
        u = u === void 0 ? l : u;
        var v = a.emojiTrayCaratPosition;
        v = v === void 0 ? n : v;
        var w = a.emojiTrayWidth;
        w = w === void 0 ? m : w;
        var x = a.emojiTrayPositionStyles;
        x = x === void 0 ? o : x;
        var y = a.forwardedRef,
            z = a.hasPortal;
        z = z === void 0 ? !1 : z;
        a = a.zeroPadding;
        var A = z ? c("Portal") : j.Fragment;
        return j.jsxs(j.Fragment, {
            children: [j.jsx(c("PolarisIGCoreSVGIconButton"), {
                hover: b,
                onClick: function() {
                    return f(!d)
                },
                padding: a === !0 ? 0 : void 0,
                ref: y,
                children: j.jsx(c("PolarisIGCoreFace2PanoOutlineIcon"), {
                    alt: r,
                    color: i,
                    size: h
                })
            }), j.jsx(A, {
                children: j.jsx("div", {
                    className: z ? "_a9_c" : "",
                    style: x,
                    children: j.jsx(c("PolarisIGCorePopover"), {
                        arrowLeftOffset: t,
                        arrowPosition: v,
                        isVisible: d,
                        children: j.jsx(c("PolarisIGCoreBox"), {
                            height: u,
                            margin: 2,
                            width: w,
                            children: j.jsx(c("PolarisIGCoreEmojiTray"), {
                                emojiIconStyles: s,
                                onClick: e,
                                trayRef: g
                            })
                        })
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("PolariswithForwardRef")(a);
    g.DEFAULT_ARROW_LEFT_OFFSET = k;
    g.DEFAULT_EMOJI_TRAY_HEIGHT = l;
    g.DEFAULT_EMOJI_TRAY_WIDTH = m;
    g.DEFAULT_EMOJI_ICON_STYLES = p;
    g.DEFAULT_EMOJI_BUTTON_ALT_TEXT = r;
    g.IGCoreEmojiButton = b
}, 98);
__d("PolarisCreationModalComposeCaptionInput.react", ["cx", "PolarisConsumerBigNumber.react", "PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreEmojiButton", "PolarisIGCorePressable", "PolarisIGCoreText", "PolarisIGCoreTooltip", "PolarisQEHelper", "PolarisTypeaheadContainer.react", "PolarisTypeaheadInput.react", "PolarisgetIGFormattedText", "PolarisupdateTextOnTypeaheadSelect", "react", "usePolarisCreationDispatch", "usePolarisCreationModalSize", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useEffect,
        l = b.useRef,
        m = b.useState,
        n = {
            small: {
                arrowHorizontalOffset: 10,
                trayPosition: {
                    top: "5px",
                    left: "0px"
                }
            },
            medium: {
                arrowHorizontalOffset: 10,
                trayPosition: {
                    top: "5px",
                    left: "0px"
                }
            },
            large: {
                arrowHorizontalOffset: 16,
                trayPosition: {
                    top: "5px",
                    right: "5px"
                }
            }
        },
        o = 20,
        p = 265,
        q = 178,
        r = {
            fontSize: "18px",
            height: "18px",
            margin: "8px",
            width: "25px"
        },
        s = 2200,
        t = 40;

    function a(a) {
        var b, e = d("usePolarisCreationState").useCreationState(),
            f = d("usePolarisCreationDispatch").useCreationDispatch();
        a = c("usePolarisCreationModalSize")();
        var g = m(!1),
            h = g[0],
            u = g[1];
        g = m(!1);
        var v = g[0],
            w = g[1];
        g = m(!1);
        var x = g[0],
            y = g[1],
            z = l(null),
            A = l(null);
        g = l(null);
        var B = l(null),
            C = l(0);
        k(function() {
            var a = z == null ? void 0 : z.current,
                b = C == null ? void 0 : C.current,
                c = A == null ? void 0 : A.current;
            a && b != null && c != null && c !== "" ? (a.focus(), a.setSelectionRange(b + c.length, b + c.length), A.current = null) : a && b != null && v && a.focus()
        });
        var D = j(function(b, a) {
                w(!1);
                y(!1);
                b = b.replace(/  +/g, " ");
                b.length > s && (b = b.slice(0, s));
                f({
                    type: d("PolarisCreationV2ActionTypes").CREATION_SET_CAPTION,
                    caption: b
                });
                C.current = a
            }, [f]),
            E = function() {
                var a;
                w(!1);
                y(!1);
                a = z == null ? void 0 : (a = z.current) == null ? void 0 : a.selectionStart;
                a != null && (C.current = a)
            },
            F = function(a) {
                var b;
                (a.relatedTarget == null || a.relatedTarget instanceof Node && !((b = B.current) == null ? void 0 : b.contains(a.relatedTarget))) && w(!1);
                u(!1);
                y(!1)
            },
            G = function(a) {
                u(!0)
            },
            H = (b = C == null ? void 0 : C.current) != null ? b : e.caption.length;
        b = function(a, b) {
            a = c("PolarisupdateTextOnTypeaheadSelect")(a, b, e.caption, H);
            b = a.updatedCursorIndex;
            a = a.updatedText;
            D(a, b)
        };
        var I = j(function(a) {
            var b = e.caption,
                c = z == null ? void 0 : z.current,
                g = (c == null ? void 0 : c.selectionStart) || 0;
            c = (c == null ? void 0 : c.selectionEnd) || 0;
            A.current = a;
            b = b.substring(0, g) + a + b.substring(c);
            f({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_CAPTION,
                caption: b
            });
            C.current = g + a.length;
            w(!1)
        }, [f, e]);
        return i.jsxs(c("PolarisIGCoreBox"), {
            children: [i.jsx(c("PolarisIGCoreBox"), {
                display: h === !0 || e.caption === "" ? "flex" : "none",
                children: i.jsx(c("PolarisTypeaheadInput.react"), {
                    "aria-label": d("PolarisCreationV2Strings").CAPTION_PLACEHOLDER_TEXT,
                    autosize: !0,
                    className: "_aaeg",
                    cursorIndex: H,
                    inputRef: function(a) {
                        return z.current = a
                    },
                    onBlur: F,
                    onChange: D,
                    onClick: E,
                    onFocus: G,
                    onTypeaheadResultSelect: b,
                    placeholder: d("PolarisCreationV2Strings").CAPTION_PLACEHOLDER_TEXT,
                    value: e.caption
                })
            }), i.jsx(c("PolarisIGCoreBox"), {
                display: h === !0 || e.caption === "" ? "none" : "flex",
                overflow: "auto",
                children: i.jsx("div", {
                    className: "_aafc",
                    onMouseDown: function() {
                        return u(!0)
                    },
                    role: "button",
                    tabIndex: -1,
                    children: i.jsx(c("PolarisIGCoreText").Label, {
                        children: c("PolarisgetIGFormattedText")(e.caption)
                    })
                })
            }), i.jsxs("div", {
                className: "_aag3",
                children: [i.jsx(c("PolarisIGCoreBox"), {
                    alignItems: "start",
                    flex: "grow",
                    paddingX: 2,
                    paddingY: 1,
                    children: i.jsx(d("PolarisIGCoreEmojiButton").IGCoreEmojiButton, {
                        emojiArrowLeftOffset: n[a].arrowHorizontalOffset,
                        emojiButtonSize: o,
                        emojiColor: "ig-secondary-text",
                        emojiIconStyles: r,
                        emojiTrayCaratPosition: "top",
                        emojiTrayHeight: q,
                        emojiTrayPositionStyles: n[a].trayPosition,
                        emojiTrayRef: B,
                        emojiTrayWidth: p,
                        isEmojiTrayOpen: v,
                        onEmojiClick: I,
                        ref: g,
                        setEmojiTrayOpen: function(a) {
                            a && u(!0), w(a)
                        }
                    })
                }), (e.caption.length > 0 || d("PolarisQEHelper").hasFeedCreationV2Dogfooding()) && i.jsxs(c("PolarisIGCoreBox"), {
                    flex: "shrink",
                    justifyContent: "center",
                    children: [i.jsx(c("PolarisIGCorePressable"), {
                        className: "_aahp",
                        onPress: function() {
                            y(function(a) {
                                return !a
                            }), w(!1)
                        },
                        children: i.jsxs(c("PolarisIGCoreText").Body2, {
                            color: x ? "ig-primary-text" : "ig-tertiary-text",
                            children: [i.jsx(c("PolarisConsumerBigNumber.react"), {
                                value: e.caption.length
                            }), "/", i.jsx(c("PolarisConsumerBigNumber.react"), {
                                value: s
                            })]
                        })
                    }), i.jsx("div", {
                        className: "_aajd" + (x ? "" : " _aakm"),
                        children: i.jsx(c("PolarisIGCoreTooltip"), {
                            arrowHorizontalOffset: t,
                            arrowPosition: "top",
                            color: "black",
                            isVisible: x,
                            children: i.jsx(c("PolarisIGCoreText"), {
                                color: "web-always-white",
                                display: "inline",
                                size: "body",
                                textAlign: "center",
                                zeroMargin: !0,
                                children: d("PolarisCreationV2Strings").CAPTION_TRUNCATION_TOOLTIP
                            })
                        })
                    })]
                })]
            }), i.jsx(c("PolarisTypeaheadContainer.react"), {
                className: "_aakn",
                cursorIndex: H,
                inputString: e.caption,
                onResultSelect: b,
                showResultsCondensed: !0,
                useSearchTriggers: !0
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreCalendarPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: [h.jsx("rect", {
                fill: "none",
                height: "18.669",
                rx: "2",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                width: "20",
                x: "2",
                y: "3.331"
            }), h.jsx("line", {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                x1: "2",
                x2: "22",
                y1: "7.778",
                y2: "7.778"
            }), h.jsx("line", {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                x1: "6.666",
                x2: "6.666",
                y1: "2",
                y2: "4.665"
            }), h.jsx("line", {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                x1: "17.555",
                x2: "17.555",
                y1: "2",
                y2: "4.667"
            }), h.jsx("circle", {
                cx: "12",
                cy: "12.666",
                r: "1.001"
            }), h.jsx("circle", {
                cx: "12",
                cy: "17.112",
                r: "1.001"
            }), h.jsx("circle", {
                cx: "17",
                cy: "12.666",
                r: "1.001"
            }), h.jsx("circle", {
                cx: "17",
                cy: "17.112",
                r: "1.001"
            }), h.jsx("circle", {
                cx: "7",
                cy: "12.666",
                r: "1.001"
            }), h.jsx("circle", {
                cx: "7",
                cy: "17.112",
                r: "1.001"
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("usePolarisCreationUpcomingEvents", ["PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "PolarisInstapi", "PolarisUpcomingEventTypes", "react", "regeneratorRuntime", "usePolarisCreationDispatch", "usePolarisCreationState", "usePolarisCreationToast"], function(a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useEffect,
        i = e.useRef,
        j = e.useState;

    function a() {
        var a = i(!1),
            e = j(!1),
            f = e[0],
            g = e[1];
        e = j(!1);
        var k = e[0],
            l = e[1],
            m = d("usePolarisCreationDispatch").useCreationDispatch();
        e = d("usePolarisCreationState").useCreationState();
        var n = c("usePolarisCreationToast")(),
            o = n.setErrorMessage;
        h(function() {
            a.current = !0;
            return function() {
                a.current = !1
            }
        }, []);
        n = function() {
            var c;
            return b("regeneratorRuntime").async(function(e) {
                while (1) switch (e.prev = e.next) {
                    case 0:
                        a.current && (l(!0), g(!0));
                        e.next = 3;
                        return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiGet("/api/v1/upcoming_events/add_event_list/", {
                            query: {}
                        }));
                    case 3:
                        c = e.sent, c.status === "ok" ? m({
                            type: d("PolarisCreationV2ActionTypes").CREATION_SET_ELIGIBLE_UPCOMING_EVENTS,
                            eligibleUpcomingEvents: c.data.upcoming_events.map(function(a) {
                                return d("PolarisUpcomingEventTypes").getUpcomingEventFromUpcomingEventDict(a)
                            })
                        }) : (o(d("PolarisCreationV2Strings").ADD_EVENT_LIST_LOAD_ERROR), a.current && g(!1)), a.current && l(!1);
                    case 6:
                    case "end":
                        return e.stop()
                }
            }, null, this)
        };
        var p = function(a) {
            m({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_UPCOMING_EVENT,
                upcomingEvent: a
            }), g(!1)
        };
        return {
            eligibleUpcomingEvents: e.eligibleUpcomingEvents,
            fetchEligibleUpcomingEvents: n,
            isLoadingEligibleUpcomingEvents: k,
            isShowingUpcomingEventSelectionModal: f,
            setIsShowingUpcomingEventSelectionModal: g,
            setUpcomingEvent: p,
            upcomingEvent: e.upcomingEvent
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationModalComposeUpcomingEvent.react", ["cx", "PolarisCreationV2Strings", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreCalendarPanoOutlineIcon", "PolarisIGCoreListItem", "PolarisIGCorePressable", "PolarisIGCoreSVGIconButton", "PolarisIGCoreSheetOrModal", "PolarisIGCoreSpinner", "PolarisIGCoreText", "PolarisIGCoreXPanoOutlineIcon", "PolarisUpcomingEventUtils", "react", "usePolarisCreationUpcomingEvents"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = 240,
        k = 120;

    function a() {
        var a = c("usePolarisCreationUpcomingEvents")(),
            b = a.eligibleUpcomingEvents,
            e = a.fetchEligibleUpcomingEvents,
            f = a.isLoadingEligibleUpcomingEvents,
            g = a.isShowingUpcomingEventSelectionModal,
            h = a.setIsShowingUpcomingEventSelectionModal,
            l = a.setUpcomingEvent;
        a = a.upcomingEvent;
        return i.jsxs("div", {
            className: "_aaza",
            children: [i.jsxs(c("PolarisIGCorePressable"), {
                className: "_aazb",
                disabled: a != null,
                onPress: e,
                children: [i.jsx(c("PolarisIGCoreText").Section, {
                    children: a ? a.title : d("PolarisCreationV2Strings").ADD_EVENT
                }), a ? i.jsx("span", {
                    className: "_aazc",
                    children: i.jsx(c("PolarisIGCoreSVGIconButton"), {
                        onClick: function() {
                            return l(null)
                        },
                        padding: 0,
                        children: i.jsx(c("PolarisIGCoreXPanoOutlineIcon"), {
                            alt: d("PolarisGenericStrings").CLOSE_TEXT,
                            color: "ig-primary-text",
                            size: 16
                        })
                    })
                }) : i.jsx(c("PolarisIGCoreCalendarPanoOutlineIcon"), {
                    alt: d("PolarisGenericStrings").UPCOMING_EVENT_ICON_ALT,
                    size: 16
                })]
            }), g && i.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
                onClose: function() {
                    return h(!1)
                },
                title: d("PolarisCreationV2Strings").SELECT_EVENT,
                children: f ? i.jsx(c("PolarisIGCoreBox"), {
                    alignItems: "center",
                    height: k,
                    justifyContent: "center",
                    children: i.jsx(c("PolarisIGCoreSpinner"), {})
                }) : i.jsx(c("PolarisIGCoreBox"), {
                    maxHeight: j,
                    overflow: "scrollY",
                    paddingY: 3,
                    children: b.map(function(a) {
                        return i.jsx(c("PolarisIGCoreListItem"), {
                            onBodyClick: function() {
                                return l(a)
                            },
                            subtitle: d("PolarisUpcomingEventUtils").getUpcomingEventDateString(a.startTime),
                            title: a.title
                        }, a.eventId)
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalMonetizationSettings.react", ["cx", "PolarisCheckboxToggle.react", "PolarisCreationV2ActionTypes", "PolarisExternalLink.react", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisIGTVStrings", "react", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a = a.toggleOptions;
        var b = d("usePolarisCreationState").useCreationState(),
            e = d("usePolarisCreationDispatch").useCreationDispatch(),
            f = a.disabled,
            g = a.helpUrl,
            h = a.label;
        a = a.text;
        return i.jsx("div", {
            className: "_aabh",
            children: i.jsxs("div", {
                className: "_aabi",
                children: [i.jsxs(c("PolarisIGCoreBox"), {
                    alignItems: "center",
                    direction: "row",
                    justifyContent: "between",
                    width: "100%",
                    children: [i.jsx(c("PolarisIGCoreText").Label, {
                        children: h
                    }), f === !1 && i.jsx(c("PolarisCheckboxToggle.react"), {
                        checked: b.advancedSettings.hasAdsEnabled,
                        onChange: function() {
                            e({
                                type: d("PolarisCreationV2ActionTypes").CREATION_SET_ADS_ENABLED,
                                hasAdsEnabled: !b.advancedSettings.hasAdsEnabled
                            })
                        }
                    })]
                }), i.jsx(c("PolarisIGCoreBox"), {
                    marginTop: 3,
                    children: i.jsxs(c("PolarisIGCoreText").Body2, {
                        color: "ig-secondary-text",
                        children: [a, g != null && i.jsxs(i.Fragment, {
                            children: [" ", i.jsx(c("PolarisExternalLink.react"), {
                                href: g,
                                children: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_LEARN_MORE_LINK
                            })]
                        })]
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisrevshareEligibilityToggleOptions", ["PolarisIGTVStrings"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
        i = "https://www.facebook.com/help/instagram/793848097773634",
        j = "https://help.instagram.com/2635536099905516";

    function a(a, b) {
        if (a == null) return null;
        a = a.find(function(a) {
            return a.productType === "igtv_revshare"
        });
        if (a == null) return null;
        var c = a.productConfig;
        c = (c == null ? void 0 : c.mesStatusForProduct) != null ? c.mesStatusForProduct : null;
        if (a.hasOnboarded === "has_completed_onboarding" && a.canUseProduct === "can_use_product" && c === "eligible") return b == null || b >= h ? {
            disabled: b == null,
            helpUrl: i,
            label: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_MONETIZATION_CHECKBOX_LABEL,
            text: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_MONETIZATION_CHECKBOX_TEXT
        } : {
            disabled: !0,
            helpUrl: i,
            label: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_MONETIZATION_CHECKBOX_INELIGIBLE_VIDEO,
            text: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_MONETIZATION_CHECKBOX_INELIGIBLE_VIDEO_TEXT
        };
        else if (c === "not_eligible") return {
            disabled: !0,
            helpUrl: j,
            label: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_MONETIZATION_CHECKBOX_INELIGIBLE_ACCOUNT,
            text: d("PolarisIGTVStrings").IGTV_VIDEO_UPLOAD_MONETIZATION_CHECKBOX_INELIGIBLE_ACCOUNT_TEXT
        };
        return null
    }
    g.MINIMUM_VIDEO_DURATION_MS = h;
    g.ABOUT_URL = i;
    g.revshareEligibilityToggleOptions = a
}, 98);
__d("usePolarisCreationMonetizationDecisions", ["usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("usePolarisCreationState").useCreationState();
        return a.monetizationEligibility
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationVideoAdsToggleOptions", ["PolarisrevshareEligibilityToggleOptions", "usePolarisCreationCurrentMedia", "usePolarisCreationIsSingleVideoPost", "usePolarisCreationMonetizationDecisions"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = c("usePolarisCreationIsSingleVideoPost")(),
            b = c("usePolarisCreationMonetizationDecisions")(),
            e = c("usePolarisCreationCurrentMedia")();
        e = e.currentMedia;
        if (!a || b == null) return null;
        a = h(e);
        return a != null ? d("PolarisrevshareEligibilityToggleOptions").revshareEligibilityToggleOptions(b, a) : null
    }

    function h(a) {
        var b = a.trim;
        a = a.video;
        return a == null ? null : b == null ? a.videoDurationMs * 1e3 : (b.end - b.start) * 1e3
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationAdvancedMonetization", ["PolarisCreationModalMonetizationSettings.react", "react", "usePolarisCreationVideoAdsToggleOptions"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a() {
        var a = c("usePolarisCreationVideoAdsToggleOptions")();
        return a != null ? {
            monetizationElement: h.jsx(c("PolarisCreationModalMonetizationSettings.react"), {
                toggleOptions: a
            }),
            monetizationIsVisible: !0
        } : {
            monetizationElement: null,
            monetizationIsVisible: !1
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationModalComposeSettingsContent.react", ["cx", "PolarisCreationLocationInput.react", "PolarisCreationModalComposeAccessibilitySettings.react", "PolarisCreationModalComposeAdvancedSettings.react", "PolarisCreationModalComposeCaptionInput.react", "PolarisCreationModalComposeUpcomingEvent.react", "PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreListItem", "PolarisIGCoreText", "PolarisQEHelper", "PolarisUserAvatar.react", "PolarisuserSelectors", "gkx", "react", "react-redux-wwwig", "usePolarisCreationAdvancedMonetization"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useRef,
        k = b.useState,
        l = 28;

    function a(a) {
        var b, e = a.showAdvancedSettings;
        a = a.showReelsDisclaimer;
        var f = d("react-redux-wwwig").useSelector(d("PolarisuserSelectors").getViewer),
            g = j(null),
            h = k(!1),
            m = h[0];
        h = h[1];
        var n = k(!1),
            o = n[0];
        n = n[1];
        var p = c("usePolarisCreationAdvancedMonetization")(),
            q = p.monetizationElement;
        p = p.monetizationIsVisible;
        var r = d("react-redux-wwwig").useSelector(function(a) {
            return (a = d("PolarisuserSelectors").getViewer(a)) == null ? void 0 : a.isPrivate
        });
        return i.jsxs("div", {
            className: "_ac2p",
            ref: g,
            children: [i.jsx(c("PolarisIGCoreBox"), {
                marginEnd: 4,
                marginStart: 4,
                children: i.jsx("div", {
                    className: "_ac2q",
                    children: i.jsx(c("PolarisIGCoreListItem"), {
                        icon: i.jsx(c("PolarisUserAvatar.react"), {
                            isLink: !1,
                            profilePictureUrl: f == null ? void 0 : f.profilePictureUrl,
                            size: l,
                            username: f == null ? void 0 : f.username
                        }),
                        paddingX: 0,
                        paddingY: 0,
                        title: d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? i.jsx(c("PolarisIGCoreText").LabelEmphasized, {
                            children: (b = f == null ? void 0 : f.username) != null ? b : ""
                        }) : i.jsx(c("PolarisIGCoreText").Title, {
                            children: (b = f == null ? void 0 : f.username) != null ? b : ""
                        })
                    })
                })
            }), i.jsx(c("PolarisCreationModalComposeCaptionInput.react"), {}), i.jsx(c("PolarisCreationLocationInput.react"), {
                width: g == null ? void 0 : (f = g.current) == null ? void 0 : f.offsetWidth
            }), c("gkx")("4782") && i.jsx(c("PolarisCreationModalComposeUpcomingEvent.react"), {}), p && q, i.jsx(c("PolarisCreationModalComposeAccessibilitySettings.react"), {
                isExpanded: m,
                onInputPress: h
            }), e ? i.jsx(c("PolarisCreationModalComposeAdvancedSettings.react"), {
                isExpanded: o,
                onInputPress: n
            }) : null, i.jsx(c("PolarisIGCoreBox"), {
                marginEnd: 4,
                marginStart: 4,
                paddingY: 3,
                children: a ? i.jsx(c("PolarisIGCoreText"), {
                    color: "ig-secondary-text",
                    size: "miniscule",
                    children: r === !0 ? d("PolarisCreationV2Strings").REELS_DISCLAIMER_PRIVATE : d("PolarisCreationV2Strings").REELS_DISCLAIMER_PUBLIC
                }) : null
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationWarningDialog.react", ["IGCoreDialog", "PolarisCreationV2Strings", "PolarisGenericStrings", "browserHistory", "react", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.dialogBody,
            c = a.dialogTitle,
            e = a.discardText,
            f = a.onCancel,
            g = a.onDiscardClick;
        a = d("usePolarisCreationState").useCreationState();
        var i = a.entryPath;
        a = function() {
            d("browserHistory").browserHistory.replace(i, {
                allowStale: !0,
                scrollRestore: !0
            }), g()
        };
        return h.jsxs(d("IGCoreDialog").IGCoreDialog, {
            body: (b = b) != null ? b : d("PolarisCreationV2Strings").DISCARD_POST_BODY,
            onModalClose: f,
            title: (b = c) != null ? b : d("PolarisCreationV2Strings").DISCARD_POST_TITLE,
            children: [h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                color: "ig-error-or-destructive",
                onClick: a,
                children: (c = e) != null ? c : d("PolarisCreationV2Strings").DISCARD_CTA_TEXT
            }), h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: f,
                children: d("PolarisGenericStrings").CANCEL_TEXT
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalHeader.react", ["PolarisCreationCameraLogger", "PolarisCreationConstants", "PolarisCreationStepProvider.react", "PolarisCreationTypes", "PolarisCreationV2Strings", "PolarisCreationWarningDialog.react", "PolarisGenericStrings", "PolarisIGCoreArrowLeftPanoOutlineIcon", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreModalHeader", "PolarisIGCoreSVGIconButton", "PolarisIGCoreText", "PolarisNavigationActions", "Polarisunexpected", "react", "react-redux-wwwig", "usePolarisCreationSelectMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState;

    function j(a, b, e) {
        switch (a) {
            case d("PolarisCreationTypes").STEP.select:
                return b != null ? b : d("PolarisCreationV2Strings").NEW_POST_TEXT;
            case d("PolarisCreationTypes").STEP.crop:
                return d("PolarisCreationV2Strings").CROP_TEXT;
            case d("PolarisCreationTypes").STEP.edit:
                return d("PolarisCreationV2Strings").EDIT_TEXT;
            case d("PolarisCreationTypes").STEP.compose:
                return e === !0 ? d("PolarisCreationV2Strings").COMPOSE_TEXT_REELS : d("PolarisCreationV2Strings").COMPOSE_TEXT;
            case d("PolarisCreationTypes").STEP.publish:
                return d("PolarisCreationV2Strings").UPLOADING_TEXT;
            case d("PolarisCreationTypes").STEP.done:
                return e === !0 ? d("PolarisCreationV2Strings").UPLOAD_REEL_SUCCESS_TEXT : d("PolarisCreationV2Strings").UPLOAD_SUCCESS_TEXT;
            case d("PolarisCreationTypes").STEP.error:
                return (a = b) != null ? a : d("PolarisCreationV2Strings").ERROR_HEADER;
            case d("PolarisCreationTypes").STEP.editPostInfo:
                return d("PolarisCreationV2Strings").EDIT_INFO;
            case d("PolarisCreationTypes").STEP.preview:
                return d("PolarisCreationV2Strings").PREVIEW_POST_TITLE;
            default:
                c("Polarisunexpected")("unexpected creation step");
                return ""
        }
    }

    function k(a) {
        a = a.onBack;
        return h.jsx(c("PolarisIGCoreBox"), {
            marginStart: 2,
            children: h.jsx(c("PolarisIGCoreSVGIconButton"), {
                onClick: a,
                children: h.jsx(c("PolarisIGCoreArrowLeftPanoOutlineIcon"), {
                    alt: d("PolarisGenericStrings").BACK_TEXT,
                    color: "ig-primary-text",
                    size: 24
                })
            })
        })
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function l(a) {
        a = a.onBack;
        var b = i(!1),
            d = b[0],
            e = b[1];
        return h.jsxs(h.Fragment, {
            children: [h.jsx(k, {
                onBack: function() {
                    return e(!0)
                }
            }), d && h.jsx(c("PolarisCreationWarningDialog.react"), {
                onCancel: function() {
                    return e(!1)
                },
                onDiscardClick: a
            })]
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function m(a) {
        var b = a.onCta;
        a = d("PolarisCreationStepProvider.react").useCreationStep();
        a = a.step;
        var e = i(!1),
            f = e[0],
            g = e[1],
            j;
        switch (a) {
            case d("PolarisCreationTypes").STEP.crop:
            case d("PolarisCreationTypes").STEP.edit:
                j = d("PolarisCreationV2Strings").NEXT_TEXT;
                break;
            case d("PolarisCreationTypes").STEP.compose:
            case d("PolarisCreationTypes").STEP.preview:
                j = d("PolarisCreationV2Strings").SHARE_CTA_TEXT;
                break;
            case d("PolarisCreationTypes").STEP.editPostInfo:
                j = d("PolarisCreationV2Strings").DONE_EDIT_CTA_TEXT;
                break;
            default:
                j = null
        }
        return b != null && j != null ? h.jsx(c("PolarisIGCoreBox"), {
            padding: 4,
            children: h.jsx(c("PolarisIGCoreButton"), {
                borderless: !0,
                loading: f,
                onClick: function() {
                    g(!0), b()
                },
                children: j
            })
        }) : null
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.onClose,
            e = a.onCta;
        a = a.showReelCreationHeader;
        var g = d("react-redux-wwwig").useDispatch(),
            n = d("PolarisCreationStepProvider.react").useCreationStep(),
            o = n.handlePrevStep,
            p = n.step,
            q = d("usePolarisCreationState").useCreationState();
        n = c("usePolarisCreationSelectMedia")();
        var r = n.clearAllMedia;
        n = i(!1);
        var s = n[0],
            t = n[1],
            u = function() {
                d("PolarisCreationCameraLogger").logFeedCreationEndCameraSession({
                    sessionId: q.sessionId
                }), b != null ? b() : g(d("PolarisNavigationActions").closeFeedCreationModal())
            },
            v = function() {
                d("PolarisCreationConstants").NON_WARNING_STEPS.has(p) ? u() : t(!0)
            };

        function w() {
            switch (p) {
                case d("PolarisCreationTypes").STEP.select:
                case d("PolarisCreationTypes").STEP.publish:
                case d("PolarisCreationTypes").STEP.error:
                case d("PolarisCreationTypes").STEP.done:
                    return null;
                case d("PolarisCreationTypes").STEP.crop:
                    return h.jsx(l, {
                        onBack: function() {
                            r(), o()
                        }
                    });
                case d("PolarisCreationTypes").STEP.editPostInfo:
                    return h.jsx(c("PolarisIGCoreBox"), {
                        padding: 4,
                        children: h.jsx(c("PolarisIGCoreButton"), {
                            borderless: !0,
                            onClick: v,
                            children: h.jsx(c("PolarisIGCoreText").Body, {
                                children: d("PolarisGenericStrings").CANCEL_TEXT
                            })
                        })
                    });
                case d("PolarisCreationTypes").STEP.edit:
                case d("PolarisCreationTypes").STEP.compose:
                case d("PolarisCreationTypes").STEP.preview:
                default:
                    return h.jsx(k, {
                        onBack: o
                    })
            }
        }
        w.displayName = w.name + " [from " + f.id + "]";
        return h.jsxs(h.Fragment, {
            children: [h.jsx(c("PolarisIGCoreBox"), {
                width: "100%",
                children: h.jsx(c("PolarisIGCoreModalHeader"), {
                    endAdornment: h.jsx(m, {
                        onCta: e
                    }),
                    size: "default",
                    startAdornment: w(),
                    truncateText: !0,
                    children: j(p, (n = q.errorPage) == null ? void 0 : n.title, a === !0)
                })
            }), s && h.jsx(c("PolarisCreationWarningDialog.react"), {
                onCancel: function() {
                    return t(!1)
                },
                onDiscardClick: u
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.getModalTitle = j;
    g.CreationModalHeader = a
}, 98);
__d("PolarisCreationUserSearchTagList.react", ["PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreConstants", "PolarisIGCoreListItem", "PolarisIGCoreSVGIconButton", "PolarisIGCoreText", "PolarisIGCoreVerifiedBadge", "PolarisIGCoreXPanoOutlineIcon", "PolarisQEHelper", "PolarisUserAvatar.react", "PolarisuserSelectors", "react", "react-redux-wwwig", "usePolarisCreationCurrentMedia"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i(a) {
        var b = a.onRemoveUser,
            e = a.userId;
        a = d("react-redux-wwwig").useSelector(function(a) {
            return d("PolarisuserSelectors").getUserById(a, e)
        });

        function f() {
            b && b(e)
        }
        return h.jsx(c("PolarisIGCoreListItem"), {
            action: h.jsx(c("PolarisIGCoreSVGIconButton"), {
                onClick: f,
                children: h.jsx(c("PolarisIGCoreXPanoOutlineIcon"), {
                    alt: d("PolarisCreationV2Strings").REMOVE_TAG_ALT,
                    color: "ig-secondary-text",
                    size: 16
                })
            }),
            icon: h.jsx(c("PolarisUserAvatar.react"), {
                profilePictureUrl: a.profilePictureUrl,
                size: c("PolarisIGCoreConstants").AVATAR_SIZES.medium,
                username: a.username
            }),
            subtitle: a.fullName,
            title: h.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "center",
                direction: "row",
                children: [h.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                    children: a.username
                }), " ", a.isVerified === !0 && h.jsx(c("PolarisIGCoreBox"), {
                    marginStart: 1,
                    children: h.jsx(c("PolarisIGCoreVerifiedBadge"), {
                        size: "small"
                    })
                })]
            })
        })
    }
    i.displayName = i.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.onAddUserClick,
            e = a.onRemoveUser;
        a = c("usePolarisCreationCurrentMedia")();
        a = a.currentMedia;
        a = Array.from(a.tags);
        var f = d("PolarisQEHelper").hasFeedCreationV2Dogfooding();
        return h.jsxs(c("PolarisIGCoreBox"), {
            height: "100%",
            children: [h.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "center",
                direction: "row",
                justifyContent: "between",
                margin: 4,
                children: [f ? h.jsx(c("PolarisIGCoreText").LabelEmphasized, {
                    color: "ig-secondary-text",
                    zeroMargin: !0,
                    children: d("PolarisCreationV2Strings").TAGGED_PEOPLE
                }) : h.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                    color: "ig-secondary-text",
                    zeroMargin: !0,
                    children: d("PolarisCreationV2Strings").TAGGED_PEOPLE
                }), h.jsx(c("PolarisIGCoreButton"), {
                    borderless: !0,
                    onClick: b,
                    children: h.jsx(c("PolarisIGCoreBox"), {
                        marginStart: 4,
                        children: f ? h.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                            color: "ig-primary-button",
                            zeroMargin: !0,
                            children: d("PolarisCreationV2Strings").TAG_ANOTHER_PERSON
                        }) : h.jsx(c("PolarisIGCoreText").Body2Emphasized, {
                            color: "ig-primary-button",
                            zeroMargin: !0,
                            children: d("PolarisCreationV2Strings").TAG_ANOTHER_PERSON
                        })
                    })
                })]
            }), h.jsx(c("PolarisIGCoreBox"), {
                flex: "grow",
                overflow: "scrollY",
                children: a.map(function(a) {
                    return h.jsx(i, {
                        onRemoveUser: e,
                        userId: a[0]
                    }, a[0])
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationUserSearchPopover.react", ["cx", "PolarisCreationStrings", "PolarisCreationUserSearchTagList.react", "PolarisCreationV2ActionTypes", "PolarisIGCoreAnchoredPopover", "PolarisIGCoreAnchoredPopoverContentContainer", "PolarisIGCoreBox", "PolarisIGCoreSearchInput", "PolarisIGCoreText", "PolarisSearchConstants", "PolarisTypeaheadContainer.react", "react", "react-redux-wwwig", "usePolarisCreationCurrentMedia", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useState,
        k = 226,
        l = 338,
        m = {
            positionStyles: {
                top: 0
            },
            x: "right",
            y: "bottom"
        };

    function a(a) {
        var b = a.children,
            e = a.hasTags,
            f = a.id,
            g = a.isVisible,
            h = a.onClose,
            n = a.position;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "hasTags", "id", "isVisible", "onClose", "position"]);
        var o = c("usePolarisCreationCurrentMedia")(),
            p = o.currentMedia;
        o = j("");
        var q = o[0],
            r = o[1];
        o = j(p.type === "video" && p.tags.size > 0);
        var s = o[0],
            t = o[1];
        o = d("react-redux-wwwig").useSelector(function(a) {
            return a.search
        });
        o = o.loading;
        var u = d("usePolarisCreationDispatch").useCreationDispatch();

        function v(a) {
            a.stopPropagation(), r(a.target.value)
        }

        function w(a) {
            a.stopPropagation(), r("")
        }

        function x() {
            h && h(), p.type === "video" && p.tags.size > 0 && t(!0)
        }

        function y(a) {
            p.tags.size <= 1 && (h && h(), t(!1)), u({
                type: d("PolarisCreationV2ActionTypes").CREATION_REMOVE_USERTAG_FROM_MEDIA,
                id: f,
                userId: a
            })
        }

        function z(a, b) {
            if (a.type === d("PolarisSearchConstants").USER_RESULT) {
                b = String(a.pk);
                u({
                    type: d("PolarisCreationV2ActionTypes").CREATION_ADD_USERTAG_TO_MEDIA,
                    id: f,
                    userId: b,
                    tag: {
                        userId: b,
                        username: a.username,
                        position: (b = n) != null ? b : []
                    }
                });
                r("");
                p.type === "video" ? t(!0) : x()
            }
        }
        o = i.jsxs(i.Fragment, {
            children: [i.jsxs("div", {
                className: "_abfp",
                children: [i.jsx(c("PolarisIGCoreBox"), {
                    justifyContent: "start",
                    paddingX: 3,
                    paddingY: 1,
                    children: i.jsx(c("PolarisIGCoreText").Section, {
                        display: "preserve",
                        zeroMargin: !0,
                        children: d("PolarisCreationStrings").TAG_SEARCH_HEADER
                    })
                }), i.jsx("div", {
                    className: "_abfq",
                    children: i.jsx(c("PolarisIGCoreSearchInput"), {
                        focusOnMount: !0,
                        loading: o,
                        noInputStyling: !0,
                        onChange: v,
                        onClear: w,
                        placeholder: d("PolarisCreationStrings").SEARCH_PLACEHOLDER,
                        value: q
                    })
                })]
            }), i.jsx(c("PolarisIGCoreBox"), {
                height: 180,
                overflow: "scrollY",
                children: q.length > 0 && i.jsx(c("PolarisTypeaheadContainer.react"), {
                    cursorIndex: q.length,
                    initialSearchContext: d("PolarisSearchConstants").SEARCH_CONTEXT.USER,
                    inputString: q,
                    onResultSelect: z,
                    showLargeAvatars: !0,
                    showResultsCondensed: !1,
                    useSearchTriggers: !1
                })
            })]
        });
        v = s === !0 ? i.jsx(c("PolarisCreationUserSearchTagList.react"), {
            onAddUserClick: function() {
                return t(!1)
            },
            onRemoveUser: y
        }) : o;
        return i.jsx(c("PolarisIGCoreAnchoredPopover"), babelHelpers["extends"]({}, a, {
            content: g && i.jsx(c("PolarisIGCoreAnchoredPopoverContentContainer"), {
                height: k,
                isVisible: g,
                onClose: x,
                width: l,
                children: i.jsx(c("PolarisIGCoreBox"), {
                    height: k,
                    width: l,
                    children: v
                })
            }, e === !0 ? 0 : 1),
            initialPositionStyles: m,
            positionType: "fixed",
            children: b != null ? b : i.jsx("div", {
                className: "_abfr"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisArrowHorizontalPosition", ["PolarisPhotoWithIndicator.react", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;

    function a(a, b) {
        a = h(d("PolarisPhotoWithIndicator.react").getHorizontalOffset(a, b));
        b = a[0];
        var c = a[1];
        return [b, function(a, b) {
            return c(d("PolarisPhotoWithIndicator.react").getHorizontalOffset(a, b))
        }]
    }
    g["default"] = a
}, 98);
__d("usePolarisArrowPosition", ["react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState,
        i = 42;

    function a(a, b) {
        b = h(b - a < i ? "bottom" : "top");
        a = b[0];
        var c = b[1];
        return [a, function(a, b) {
            return c(b - a < i ? "bottom" : "top")
        }]
    }
    g.TAG_THRESHOLD = i;
    g.useArrowPosition = a
}, 98);
__d("usePolarisUserTagDrag", ["react-use-gesture"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 8,
        i = h + 16;

    function a(a) {
        var b = a.containerRect,
            c = a.offsetX,
            e = a.offsetY,
            f = a.onDrag,
            g = a.onDragEnd,
            j = b.left + c,
            k = b.top + e;
        a = d("react-use-gesture").useDrag(function(a) {
            var c = a.movement,
                d = c[0];
            c = c[1];
            a = a.down;
            d = j + d;
            c = k + c;
            f && f(d - b.left, c - b.top);
            g && !a && g(d - b.left, c - b.top)
        }, {
            bounds: {
                left: -c + i,
                right: b.width - c - i,
                top: -e + h,
                bottom: b.height - e - h
            }
        });
        return {
            bindDragEvents: a
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationUserTagV2.react", ["cx", "PolarisCreationV2ActionTypes", "PolarisIGAnimate", "PolarisIGCoreBox", "PolarisIGCoreSVGIconButton", "PolarisIGCoreText", "PolarisIGCoreTooltip", "PolarisIGCoreXPanoOutlineIcon", "PolarisStoriesStrings", "react", "usePolarisArrowHorizontalPosition", "usePolarisArrowPosition", "usePolarisCreationDispatch", "usePolarisUserTagDrag"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
        k = b.useRef,
        l = 1.08;

    function a(a) {
        var b = a.containerRect,
            e = a.id,
            f = a.isVisible,
            g = a.usertag,
            h = d("usePolarisCreationDispatch").useCreationDispatch(),
            m = k(null);
        a = d("usePolarisArrowPosition").useArrowPosition(g.position[1] * b.height, b.height);
        var n = a[0],
            o = a[1];
        a = c("usePolarisArrowHorizontalPosition")(g.position[0], ((a = (a = m.current) == null ? void 0 : a.offsetWidth) != null ? a : 0) / b.width / 2);
        var p = a[0],
            q = a[1];
        a = d("PolarisIGAnimate").usePanAndZoom({
            scale: 1,
            x: g.position[0] * b.width,
            y: g.position[1] * b.height
        }, {
            mass: 1,
            tension: 470,
            friction: 26
        });
        var r = a.set;
        a = a.style;
        j(function() {
            var a;
            r({
                x: g.position[0] * b.width,
                y: g.position[1] * b.height,
                scale: 1
            });
            q(g.position[0], ((a = (a = m.current) == null ? void 0 : a.offsetWidth) != null ? a : 0) / b.width / 2)
        }, [r, q, m, g.position, b]);

        function s(a, c) {
            r({
                x: a,
                y: c,
                scale: 1
            });
            var f = a / b.width;
            c = c / b.height;
            q(a / ((a = b.width) != null ? a : 1), ((a = (a = m.current) == null ? void 0 : a.offsetWidth) != null ? a : 0) / b.width / 2);
            h({
                type: d("PolarisCreationV2ActionTypes").CREATION_ADD_USERTAG_TO_MEDIA,
                userId: g.userId,
                id: e,
                tag: {
                    userId: g.userId,
                    position: [f, c],
                    username: g.username
                }
            })
        }

        function t(a, c) {
            r({
                x: a,
                y: c,
                scale: l
            });
            o(c, (a = b.height) != null ? a : 0)
        }
        t = c("usePolarisUserTagDrag")({
            offsetX: g.position[0] * b.width,
            offsetY: g.position[1] * b.height,
            onDrag: t,
            onDragEnd: s,
            containerRect: b
        });
        s = t.bindDragEvents;

        function u(a) {
            a.stopPropagation(), h({
                type: d("PolarisCreationV2ActionTypes").CREATION_REMOVE_USERTAG_FROM_MEDIA,
                userId: g.userId,
                id: e
            })
        }
        return i.jsx(d("PolarisIGAnimate").Animated.div, babelHelpers["extends"]({
            style: babelHelpers["extends"]({}, a, {
                position: "absolute",
                zIndex: 2
            })
        }, s(), {
            children: i.jsx("div", {
                className: "_abfs" + (n === "bottom" ? " _abft" : ""),
                style: {
                    left: p + "%"
                },
                children: i.jsxs(c("PolarisIGCoreTooltip"), {
                    arrowHorizontalOffset: -(p + 50),
                    arrowPosition: n,
                    color: "black",
                    isVisible: f,
                    opacity: .95,
                    ref: m,
                    children: [i.jsx(c("PolarisIGCoreBox"), {
                        justifyContent: "center",
                        marginEnd: 1,
                        marginStart: 1,
                        children: i.jsx(c("PolarisIGCoreText"), {
                            color: "web-always-white",
                            size: "body",
                            weight: "semibold",
                            zeroMargin: !0,
                            children: g.username
                        })
                    }), i.jsx(c("PolarisIGCoreSVGIconButton"), {
                        onClick: u,
                        padding: 0,
                        children: i.jsx(c("PolarisIGCoreXPanoOutlineIcon"), {
                            alt: d("PolarisStoriesStrings").ALT_TEXT_CLOSE_ICON,
                            color: "web-always-white",
                            size: 16
                        })
                    })]
                })
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreDeletePanoOutline24Icon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: [h.jsx("line", {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                x1: "2.876",
                x2: "21.124",
                y1: "4.727",
                y2: "4.727"
            }), h.jsx("path", {
                d: "M8.818 4.727v-1.59A1.136 1.136 0 0 1 9.954 2h4.092a1.136 1.136 0 0 1 1.136 1.136v1.591",
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }), h.jsx("path", {
                d: "m4.377 4.727 1.987 15.88A1.59 1.59 0 0 0 7.942 22h8.116a1.59 1.59 0 0 0 1.578-1.393l1.987-15.88",
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisCreationTagImagePreview.react", ["cx", "fbt", "PolarisCreationMediaButton.react", "PolarisCreationMediaPreviewCarouselButtons.react", "PolarisCreationStepProvider.react", "PolarisCreationTypes", "PolarisCreationUserSearchPopover.react", "PolarisCreationUserTagV2.react", "PolarisCreationV2ActionTypes", "PolarisCreationV2Strings", "PolarisCreationWarningDialog.react", "PolarisDisappearingTooltip.react", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreConstants", "PolarisIGCoreDeletePanoOutline24Icon", "PolarisIGCoreText", "PolarisIGCoreUserPanoFilledIcon", "PolarisMediaHelpers", "PolarisQEHelper", "PolarisRect", "PolarisResponsiveBlock.react", "PolarisUserTagIndicator.react", "nullthrows", "react", "usePolarisCreationDispatch", "usePolarisCreationMedia", "usePolarisCreationState", "usePolarisObjectState"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useRef,
        l = b.useState;

    function m(a) {
        a = a.onTooltipHide;
        return j.jsx(c("PolarisDisappearingTooltip.react"), {
            arrowPosition: "bottom",
            autoHideAfter: c("PolarisIGCoreConstants").TOOLTIP.AUTO_HIDE_MS,
            color: "black",
            disableTooltipHideOnDismount: !0,
            onTooltipHide: a,
            children: j.jsx(c("PolarisIGCoreBox"), {
                alignItems: "center",
                direction: "row",
                children: j.jsx(c("PolarisIGCoreBox"), {
                    alignItems: "center",
                    marginStart: 1,
                    children: j.jsx(c("PolarisIGCoreText"), {
                        color: "web-always-white",
                        size: "label",
                        zeroMargin: !0,
                        children: d("PolarisCreationV2Strings").CLICK_PHOTO_TAG
                    })
                })
            })
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function n(a) {
        var b, e = a.containerRect,
            f = a.isVisible;
        a = d("usePolarisCreationState").useCreationState();
        var g = (b = a.currentMediaId) != null ? b : a.multiPostOrder[0];
        b = c("nullthrows")(a.media.get(g));
        return Array.from(b.tags.values()).map(function(a) {
            return j.jsx(c("PolarisCreationUserTagV2.react"), {
                containerRect: e,
                id: g,
                isVisible: f,
                usertag: a
            }, a.userId)
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";
    var o = 25,
        p = 10;

    function a(a) {
        var b = a.id,
            e = a.onDelete;
        a = a.src;
        var f = k(null),
            g = d("usePolarisCreationState").useCreationState(),
            h = d("usePolarisCreationDispatch").useCreationDispatch(),
            q = l(null),
            r = q[0],
            s = q[1];
        q = l(!0);
        var t = q[0],
            u = q[1];
        q = d("usePolarisCreationState").useCreationState();
        var v = q.multiPostOrder;
        q = q.nftAssetInfo;
        var w = l(!1),
            x = w[0],
            y = w[1];
        w = q != null && (q == null ? void 0 : q.asset_id) !== "";
        q = c("usePolarisObjectState")({
            height: 0,
            width: 0
        });
        var z = q[0],
            A = q[1];
        q = c("usePolarisObjectState")(null);
        var B = q[0],
            C = q[1];
        q = c("nullthrows")(g.media.get(b));
        var D = d("usePolarisCreationMedia").useCreationMedia(b),
            E = D.mediaHeight,
            F = D.mediaWidth;
        D = d("PolarisCreationStepProvider.react").useCreationStep();
        D = D.step;
        D = D === d("PolarisCreationTypes").STEP.editPostInfo;
        var G = function() {
            h({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_VIEWED_PHOTO_TOOLTIP,
                hasViewedPhotoTooltip: !0
            })
        };

        function H(a) {
            g.hasViewedPhotoTooltip !== !0 && G();
            t || u(!0);
            if (r != null) {
                s(null);
                return
            }
            if (!B) return;
            var b = a.clientX - B.left;
            a = a.clientY - B.top;
            b = b / B.width;
            a = a / B.height;
            s([b, a])
        }

        function I(a, b) {
            var c;
            c = d("PolarisMediaHelpers").getDimensionsToStretchFit((c = E) != null ? c : 0, (c = F) != null ? c : 0, b, a);
            A(c);
            a = f == null ? void 0 : (b = f.current) == null ? void 0 : b.getBoundingClientRect();
            a != null && C(d("PolarisRect").fromClientRect(a))
        }
        var J, K;
        r != null && (J = "calc(" + r[0] * 100 + "% - " + o + "px)", K = "calc(" + r[1] * 100 + "% + " + p + "px)");
        var L = d("PolarisQEHelper").hasFeedCreationV2Dogfooding();
        v = v.length > 2 && D && d("PolarisQEHelper").hasFeedCreation();
        var M = function() {
            y(!0)
        };
        D = function() {
            e && (e(b), y(!1))
        };
        var N = function() {
            return L ? j.jsx(c("PolarisCreationMediaPreviewCarouselButtons.react"), {}) : null
        };
        return w === !0 ? j.jsx("img", {
            alt: i._("Digital Collectible being edited"),
            className: "_aazh",
            src: a
        }) : j.jsxs(j.Fragment, {
            children: [L && j.jsx("div", {
                className: "_aazi _aazj",
                children: g.hasViewedPhotoTooltip !== !0 && j.jsx(m, {
                    onTooltipHide: G
                })
            }), v && x && j.jsx(c("PolarisCreationWarningDialog.react"), {
                dialogBody: d("PolarisCreationV2Strings").DELETE_PHOTO_BODY,
                dialogTitle: d("PolarisCreationV2Strings").DELETE_PHOTO_TITLE,
                discardText: d("PolarisGenericStrings").DELETE_TEXT,
                onCancel: function() {
                    return y(!1)
                },
                onDiscardClick: D
            }), j.jsxs(c("PolarisResponsiveBlock.react"), {
                className: "_aazk",
                onResize: I,
                children: [N(), j.jsxs("div", {
                    className: "_aazl",
                    style: {
                        width: z.width,
                        height: z.height
                    },
                    children: [!L && j.jsx("div", {
                        className: "_aazi",
                        children: g.hasViewedPhotoTooltip !== !0 && j.jsx(m, {
                            onTooltipHide: G
                        })
                    }), j.jsx("img", {
                        alt: i._("Photo for tag placement"),
                        className: "_aazh",
                        src: a
                    }), j.jsx("div", {
                        className: "_aazm",
                        onClick: H,
                        ref: f,
                        role: "button",
                        tabIndex: 0
                    }), j.jsx("div", {
                        style: {
                            position: "absolute",
                            left: J,
                            top: K
                        },
                        children: j.jsx(c("PolarisCreationUserSearchPopover.react"), {
                            id: b,
                            isVisible: r != null,
                            onClose: function() {
                                return s(null)
                            },
                            position: r
                        })
                    }), B != null && j.jsx(n, {
                        containerRect: B,
                        isVisible: t
                    }), !L && j.jsx(c("PolarisUserTagIndicator.react"), {
                        absolute: !0,
                        onClick: function() {
                            return u(function(a) {
                                return !a
                            })
                        },
                        visible: q.tags.size > 0
                    })]
                }), v && L && j.jsx(c("PolarisIGCoreBox"), {
                    left: !0,
                    padding: 2,
                    position: "absolute",
                    top: !0,
                    children: j.jsx(c("PolarisCreationMediaButton.react"), {
                        altText: d("PolarisGenericStrings").DELETE_TEXT,
                        icon: c("PolarisIGCoreDeletePanoOutline24Icon"),
                        onClick: function() {
                            return M()
                        },
                        selected: !1
                    })
                }), L && q.tags.size > 0 && j.jsx(c("PolarisIGCoreBox"), {
                    bottom: !0,
                    left: !0,
                    padding: 2,
                    position: "absolute",
                    children: j.jsx(c("PolarisCreationMediaButton.react"), {
                        altText: d("PolarisGenericStrings").TAG_TEXT,
                        icon: c("PolarisIGCoreUserPanoFilledIcon"),
                        onClick: function() {
                            return u(function(a) {
                                return !a
                            })
                        },
                        selected: !1
                    })
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisForceUpdate", ["react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;

    function a() {
        var a = h(0);
        a[0];
        var b = a[1];
        return function() {
            return b(function(a) {
                return a + 1
            })
        }
    }
    g.useForceUpdate = a
}, 98);
__d("PolarisCreationTagVideoPreview.react", ["PolarisCreationCropHelpers", "PolarisCreationMediaButton.react", "PolarisCreationMediaPreviewCarouselButtons.react", "PolarisCreationStepProvider.react", "PolarisCreationTypes", "PolarisCreationUserSearchPopover.react", "PolarisCreationV2State", "PolarisCreationV2Strings", "PolarisCreationVideoPlayer.react", "PolarisCreationWarningDialog.react", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreDeletePanoOutline24Icon", "PolarisIGCoreText", "PolarisIGCoreUserPanoFilledIcon", "PolarisQEHelper", "PolarisUserTagIndicator.react", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationMediaPreview", "usePolarisCreationState", "usePolarisForceUpdate"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
        j = b.useState;

    function k() {
        var a = c("usePolarisCreationCurrentMedia")(),
            b = a.currentMedia;
        a = a.currentMediaId;
        b = ((b = b.tags.size) != null ? b : 0) > 0;
        var e = j(!1),
            f = e[0],
            g = e[1];
        return h.jsxs(c("PolarisIGCoreBox"), {
            bottom: !0,
            left: !0,
            position: "absolute",
            children: [h.jsx(c("PolarisCreationUserSearchPopover.react"), {
                hasTags: b,
                id: a,
                isVisible: f,
                onClose: function() {
                    return g(!1)
                },
                position: [],
                preferredPositionY: "top"
            }), d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? h.jsx(c("PolarisIGCoreBox"), {
                padding: 2,
                children: h.jsx(c("PolarisCreationMediaButton.react"), {
                    altText: d("PolarisGenericStrings").TAG_TEXT,
                    endText: d("PolarisCreationV2Strings").TAG_A_PERSON,
                    icon: c("PolarisIGCoreUserPanoFilledIcon"),
                    onClick: function() {
                        return g(!0)
                    },
                    selected: !1
                })
            }) : h.jsx(c("PolarisUserTagIndicator.react"), {
                absolute: !1,
                endAndornment: b ? null : h.jsx(c("PolarisIGCoreBox"), {
                    marginStart: 2,
                    children: h.jsx(c("PolarisIGCoreText"), {
                        color: "web-always-white",
                        weight: "semibold",
                        children: d("PolarisCreationV2Strings").TAG_A_PERSON
                    })
                }),
                onClick: function() {
                    return g(!0)
                },
                visible: !0
            })]
        })
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.onDelete;
        a = d("usePolarisCreationState").useCreationState();
        var e = c("usePolarisCreationCurrentMedia")(),
            f = e.currentMedia,
            g = e.currentMediaId;
        e = e.currentMediaItem;
        var l = d("PolarisQEHelper").hasFeedCreationV2Dogfooding(),
            m = d("usePolarisForceUpdate").useForceUpdate(),
            n = d("usePolarisCreationState").useCreationState();
        n = n.multiPostOrder;
        var o = j(!1),
            p = o[0],
            q = o[1];
        a = c("usePolarisCreationMediaPreview")(f, (o = a.cropRatio) != null ? o : 1);
        var r = a.croppedHeightScaled,
            s = a.croppedWidthScaled;
        o = a.mediaDimensions;
        a = a.setFrameEl;
        var t = d("PolarisCreationStepProvider.react").useCreationStep();
        t = t.step;
        t = t === d("PolarisCreationTypes").STEP.editPostInfo;
        var u = d("PolarisCreationCropHelpers").getPanningOffsets(r, s, f),
            v = u.offsetX;
        u = u.offsetY;
        var w = f.scale,
            x = {
                height: o.height,
                transform: "translateX(" + v + "px) translateY(" + u + "px) scale(" + w,
                transition: "none",
                width: o.width
            };
        v = n.length > 2 && t && d("PolarisQEHelper").hasFeedCreation();
        var y = function() {
            q(!0)
        };
        u = function() {
            b && (b(g), q(!1))
        };
        i(function() {
            parseInt(x.height, 10) !== r && parseInt(x.width, 10) !== s && m()
        });
        return h.jsxs(c("PolarisIGCoreBox"), {
            alignItems: "center",
            containerRef: a,
            height: "100%",
            justifyContent: "center",
            width: "100%",
            children: [l && h.jsx(c("PolarisCreationMediaPreviewCarouselButtons.react"), {}), v && d("PolarisQEHelper").hasFeedCreationV2Dogfooding() && h.jsx(c("PolarisIGCoreBox"), {
                left: !0,
                padding: 2,
                position: "absolute",
                top: !0,
                children: h.jsx(c("PolarisCreationMediaButton.react"), {
                    altText: d("PolarisGenericStrings").DELETE_TEXT,
                    icon: c("PolarisIGCoreDeletePanoOutline24Icon"),
                    onClick: function() {
                        return y()
                    },
                    selected: !1
                })
            }), v && p && h.jsx(c("PolarisCreationWarningDialog.react"), {
                dialogBody: d("PolarisCreationV2Strings").DELETE_VIDEO_BODY,
                dialogTitle: d("PolarisCreationV2Strings").DELETE_VIDEO_TITLE,
                discardText: d("PolarisGenericStrings").DELETE_TEXT,
                onCancel: function() {
                    return q(!1)
                },
                onDiscardClick: u
            }), h.jsxs(c("PolarisIGCoreBox"), {
                alignItems: "center",
                height: r,
                justifyContent: "center",
                overflow: "hidden",
                width: s,
                children: [h.jsx(c("PolarisCreationVideoPlayer.react"), {
                    coverPhoto: f == null ? void 0 : (w = f.coverPhoto) == null ? void 0 : (o = w.selectedCoverPhoto) == null ? void 0 : o.dataURL,
                    muted: f.audio !== d("PolarisCreationV2State").AUDIO_STATUS.on,
                    src: e.dataURL,
                    style: x,
                    trim: f.trim
                }), !l && h.jsx(k, {})]
            }), l && h.jsx(k, {})]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationV2Shell.react", ["PolarisCreationConstants", "PolarisIGCoreBox", "PolarisIGCoreToast", "PolarisToastWrapper.react", "react", "usePolarisCreationState", "usePolarisCreationToast"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        a = a.children;
        var b = c("usePolarisCreationToast")();
        b = b.clearToast;
        var e = d("usePolarisCreationState").useCreationState();
        return h.jsxs(c("PolarisIGCoreBox"), {
            flex: "grow",
            overflow: "hidden",
            children: [a, h.jsx(c("PolarisToastWrapper.react"), {}), e.errorMessage != null && h.jsx(c("PolarisIGCoreToast"), {
                duration: d("PolarisCreationConstants").TOAST_TIMEOUT,
                onClose: b,
                children: e.errorMessage
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalComposePage.react", ["PolarisCreationCameraLogger", "PolarisCreationLoggerHooks", "PolarisCreationModalBodyV2.react", "PolarisCreationModalComposeSettingsContent.react", "PolarisCreationModalHeader.react", "PolarisCreationStepProvider.react", "PolarisCreationTagImagePreview.react", "PolarisCreationTagVideoPreview.react", "PolarisCreationV2Shell.react", "PolarisvideoMergeUtils", "nullthrows", "react", "regeneratorRuntime", "usePolarisCreationCurrentMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var e = d("PolarisCreationStepProvider.react").useCreationStep(),
            f = e.handleNextStep;
        e = d("usePolarisCreationState").useCreationState();
        var g = e.media,
            i = e.multiPostOrder,
            j = e.sessionId,
            k = g.get(i[0]);
        e = c("usePolarisCreationCurrentMedia")();
        g = e.currentMedia;
        i = e.currentMediaId;
        if (g.type === "image") {
            e = c("nullthrows")((e = g.filteredMedia) == null ? void 0 : e.dataURL)
        } else {
            var l;
            e = c("nullthrows")((l = g.video) == null ? void 0 : l.dataURL)
        }

        function a() {
            var a;
            return b("regeneratorRuntime").async(function(b) {
                while (1) switch (b.prev = b.next) {
                    case 0:
                        a = (k == null ? void 0 : k.type) === "image" ? d("PolarisCreationCameraLogger").InstagramCameraMediaTypes.PHOTO : d("PolarisCreationCameraLogger").InstagramCameraMediaTypes.VIDEO, d("PolarisCreationCameraLogger").logFeedCreationShareMedia({
                            mediaType: a,
                            sessionId: j
                        }), f();
                    case 3:
                    case "end":
                        return b.stop()
                }
            }, null, this)
        }
        d("PolarisCreationLoggerHooks").useCreationFeedGalleryStartShareSessionLogger();
        l = d("PolarisvideoMergeUtils").isMediaEligibleForVideoMerge(g) && d("PolarisvideoMergeUtils").eligibleForVideoMerge();
        return h.jsxs(c("PolarisCreationV2Shell.react"), {
            children: [h.jsx(d("PolarisCreationModalHeader.react").CreationModalHeader, {
                onCta: a,
                showReelCreationHeader: l
            }), h.jsx(c("PolarisCreationModalBodyV2.react"), {
                mainContent: g.type === "image" ? h.jsx(c("PolarisCreationTagImagePreview.react"), {
                    id: i,
                    src: e
                }, i) : h.jsx(c("PolarisCreationTagVideoPreview.react"), {}),
                settingsColumnContent: h.jsx(c("PolarisCreationModalComposeSettingsContent.react"), {
                    showAdvancedSettings: !0,
                    showReelsDisclaimer: l
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisGenericDropzone.react", ["react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useEffect;

    function a(a) {
        var b = a.children,
            c = a.onDrag,
            d = a.onFilesSelect,
            e = i(function(a) {
                a.preventDefault(), c != null && c(!0)
            }, [c]),
            f = i(function(a) {
                a.preventDefault(), c != null && c(!1)
            }, [c]);
        j(function() {
            document.addEventListener("dragover", e);
            document.addEventListener("dragleave", f);
            return function() {
                document.removeEventListener("dragover", e), document.addEventListener("dragleave", f)
            }
        }, [f, e]);
        var g = i(function(a) {
            var b;
            b = (b = a.dataTransfer) == null ? void 0 : b.files;
            b != null && d(b);
            a.preventDefault()
        }, [d]);
        j(function() {
            document.addEventListener("drop", g);
            return function() {
                document.removeEventListener("drop", g)
            }
        }, [g]);
        return h.jsx(h.Fragment, {
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisCreationCropAllMedia", ["PolarisCreationV2Actions", "Promise", "nullthrows", "regeneratorRuntime", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("usePolarisCreationState").useCreationState(),
            e = d("usePolarisCreationDispatch").useCreationDispatch();

        function f() {
            var f;
            return b("regeneratorRuntime").async(function(g) {
                while (1) switch (g.prev = g.next) {
                    case 0:
                        f = a.multiPostOrder.map(function(f) {
                            var g;
                            return b("regeneratorRuntime").async(function(h) {
                                while (1) switch (h.prev = h.next) {
                                    case 0:
                                        g = c("nullthrows")(a.media.get(f));
                                        if (!(g.type === "image")) {
                                            h.next = 9;
                                            break
                                        }
                                        h.t0 = e;
                                        h.next = 5;
                                        return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").createCroppedPhoto(f, c("nullthrows")(g.image), c("nullthrows")(a.cropRatio), g.panningOffsetRatioX, g.panningOffsetRatioY, g.scale));
                                    case 5:
                                        h.t1 = h.sent;
                                        h.t0(h.t1);
                                        h.next = 14;
                                        break;
                                    case 9:
                                        h.t2 = e;
                                        h.next = 12;
                                        return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").createCroppedVideo(f, c("nullthrows")(g), c("nullthrows")(a.cropRatio)));
                                    case 12:
                                        h.t3 = h.sent, h.t2(h.t3);
                                    case 14:
                                    case "end":
                                        return h.stop()
                                }
                            }, null, this)
                        });
                        g.next = 3;
                        return b("regeneratorRuntime").awrap(b("Promise").all(f));
                    case 3:
                        return g.abrupt("return", g.sent);
                    case 4:
                    case "end":
                        return g.stop()
                }
            }, null, this)
        }
        return f
    }
    g["default"] = a
}, 98);
__d("PolarisCreationModalCropPage.react", ["PolarisCreationCameraLogger", "PolarisCreationError", "PolarisCreationErrorHelpers", "PolarisCreationModalBodyV2.react", "PolarisCreationModalHeader.react", "PolarisCreationStepProvider.react", "PolarisCreationV2Shell.react", "PolarisCreationV2Strings", "PolarisGenericDropzone.react", "gkx", "react", "regeneratorRuntime", "usePolarisCreationCropAllMedia", "usePolarisCreationMediaPopoverContext", "usePolarisCreationSelectMedia", "usePolarisCreationState", "usePolarisCreationToast"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState;

    function j(a) {
        a.handleNextClick;
        a = d("usePolarisCreationState").useCreationState();
        var e = a.sessionId;
        a = c("usePolarisCreationSelectMedia")();
        var f = a.addMediaFiles;
        a = c("usePolarisCreationToast")();
        var g = a.setErrorMessage;
        a = d("usePolarisCreationMediaPopoverContext").useCreationMediaPopoverContext();
        var i = a.setOpenedPopover;
        a = function(a) {
            var c;
            return b("regeneratorRuntime").async(function(h) {
                while (1) switch (h.prev = h.next) {
                    case 0:
                        h.prev = 0;
                        h.next = 3;
                        return b("regeneratorRuntime").awrap(f(a));
                    case 3:
                        d("PolarisCreationCameraLogger").logFeedCreationCameraEndGallerySession({
                            sessionId: e
                        });
                        i(d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverView.GALLERY);
                        h.next = 15;
                        break;
                    case 7:
                        h.prev = 7;
                        h.t0 = h["catch"](0);
                        if (!(h.t0 instanceof d("PolarisCreationError").CreationError)) {
                            h.next = 14;
                            break
                        }
                        c = d("PolarisCreationErrorHelpers").getCreationErrorToastForError(h.t0);
                        c ? g(c.message) : g(a.length > 1 ? d("PolarisCreationV2Strings").MULTIPLE_FILE_UPLOAD_ERROR : d("PolarisCreationV2Strings").SINGLE_FILE_UPLOAD_ERROR);
                        h.next = 15;
                        break;
                    case 14:
                        throw h.t0;
                    case 15:
                    case "end":
                        return h.stop()
                }
            }, null, this, [
                [0, 7]
            ])
        };
        return c("gkx")("4783") === !0 ? h.jsx(c("PolarisGenericDropzone.react"), {
            onFilesSelect: a,
            children: h.jsx(c("PolarisCreationModalBodyV2.react"), {})
        }) : h.jsx(c("PolarisCreationModalBodyV2.react"), {})
    }
    j.displayName = j.name + " [from " + f.id + "]";

    function a(a) {
        var e = d("usePolarisCreationState").useCreationState(),
            f = d("PolarisCreationStepProvider.react").useCreationStep(),
            g = f.handleNextStep,
            k = c("usePolarisCreationCropAllMedia")();

        function a() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(k());
                    case 2:
                        d("PolarisCreationCameraLogger").logFeedCreationFeedGalleryStartEditSession({
                            sessionId: e.sessionId
                        }), g();
                    case 4:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        }
        f = i(null);
        var l = f[0];
        f = f[1];
        return h.jsxs(c("PolarisCreationV2Shell.react"), {
            children: [h.jsx(d("PolarisCreationModalHeader.react").CreationModalHeader, {
                onCta: a
            }), h.jsx(d("usePolarisCreationMediaPopoverContext").CreationMediaPopoverContext.Provider, {
                value: {
                    openedPopover: l,
                    setOpenedPopover: f
                },
                children: h.jsx(j, {
                    handleNextClick: a
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalEditPageAdjustmentTab.react", ["cx", "PolarisCreationConstants", "PolarisCreationSlider.react", "PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreButton", "PolarisIGCoreText", "PolarisQEHelper", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useState,
        l = 36;

    function m(a) {
        var b = a.currentValue,
            e = a.defaultValue,
            f = a.filterName,
            g = a.onAdjustmentStrengthChange,
            h = a.onAdjustmentStrengthSet;
        a = k(!1);
        var m = a[0],
            n = a[1];
        a = j(function() {
            h(f, e)
        }, [h, f, e]);
        return i.jsx(c("PolarisIGCoreBox"), {
            flex: "none",
            justifyContent: "end",
            paddingX: 4,
            children: i.jsxs("div", {
                onMouseEnter: function() {
                    return n(!0)
                },
                onMouseLeave: function() {
                    return n(!1)
                },
                role: "presentation",
                children: [i.jsxs("div", {
                    className: "_aazd",
                    children: [i.jsx(c("PolarisIGCoreText").Label, {
                        zeroMargin: !0,
                        children: d("PolarisCreationV2Strings").ADJUSTMENT_FILTER_MAPPING[f]
                    }), d("PolarisQEHelper").hasFeedCreationV2Dogfooding() && b !== e && m && i.jsx(c("PolarisIGCoreButton"), {
                        borderless: !0,
                        onClick: a,
                        children: d("PolarisCreationV2Strings").RESET_ADJUSTMENT
                    })]
                }), i.jsx(c("PolarisIGCoreBox"), {
                    height: l,
                    justifyContent: "center",
                    children: i.jsx(d("PolarisCreationSlider.react").CreationSlider, {
                        centerBased: f !== "vignette",
                        initialValue: b,
                        maxValue: 100,
                        minValue: f === "vignette" ? 0 : -100,
                        onChange: function(a) {
                            g(f, a)
                        },
                        onSetValue: function(a) {
                            h(f, a)
                        },
                        showValue: !0
                    })
                })]
            })
        }, f)
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.adjustmentParams,
            e = a.onAdjustmentStrengthChange,
            f = a.onAdjustmentStrengthSet;
        return i.jsx(c("PolarisIGCoreBox"), {
            flex: "grow",
            overflow: "auto",
            children: i.jsx(c("PolarisIGCoreBox"), {
                marginBottom: 4,
                children: Object.keys(b).map(function(a, c) {
                    return i.jsx(m, {
                        currentValue: (c = b[a]) != null ? c : d("PolarisCreationConstants").INIT_ADJUSTMENT_STRENGTH,
                        defaultValue: 0,
                        filterName: a,
                        onAdjustmentStrengthChange: e,
                        onAdjustmentStrengthSet: f
                    }, a)
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationFilterImageThumbnail.react", ["cx", "fbt", "PolarisFilteredCanvas.react", "PolarisIGCoreButton", "PolarisIGCoreText", "PolarisQEHelper", "gkx", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useRef;

    function l(a) {
        a = a.getName();
        return a === "Normal" && d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? i._("Original") : a
    }

    function a(a) {
        var b = a.filter,
            e = a.filterBuilder,
            f = a.isSelected,
            g = a.onClick;
        a = a.src;
        var h = k(null),
            m = d("react-redux-wwwig").useSelector(function(a) {
                return a.displayProperties.pixelRatio
            });
        return j.jsxs(c("PolarisIGCoreButton"), {
            borderless: !0,
            onClick: function() {
                return g(b)
            },
            children: [j.jsx("div", {
                className: "_abg9" + (f ? " _abga" : ""),
                children: c("gkx")("4781") === !0 ? j.jsx(c("PolarisFilteredCanvas.react"), {
                    filter: b,
                    filterStrength: 1,
                    forwardedRef: h,
                    src: a
                }) : j.jsx("img", {
                    alt: i._("Filter: {filter title}", [i._param("filter title", e.getName())]),
                    className: "_abgb" + (d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? " _abgc" : ""),
                    src: e.getThumbnail(m)
                })
            }), j.jsx(c("PolarisIGCoreText").Body2, {
                color: f ? "ig-primary-button" : "ig-secondary-text",
                weight: f ? "semibold" : "normal",
                children: l(e)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalEditPageFilterTab.react", ["cx", "PolarisCreationFilterImageThumbnail.react", "PolarisCreationSlider.react", "PolarisFilters", "PolarisIGCoreBox", "PolarisIGCoreDivider", "PolarisQEHelper", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = 50;

    function a(a) {
        var b = a.filterStrength,
            e = a.onFilterClick,
            f = a.onFilterStrengthChange,
            g = a.onFilterStrengthSet,
            h = a.selectedFilterName,
            k = a.src;

        function l(a) {
            e(a, h)
        }
        return i.jsxs(i.Fragment, {
            children: [i.jsx(c("PolarisIGCoreBox"), {
                flex: "grow",
                overflow: "auto",
                children: i.jsxs("div", {
                    className: "_ac39" + (d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? "" : " _aab0"),
                    children: [d("PolarisFilters").FILTER_NAMES.map(function(a, b) {
                        return i.jsx(c("PolarisIGCoreBox"), {
                            marginTop: 4,
                            width: 1 / 3 * 100 + "%",
                            children: i.jsx(c("PolarisCreationFilterImageThumbnail.react"), {
                                filter: a,
                                filterBuilder: d("PolarisFilters").FILTERS[a],
                                isSelected: h === a,
                                onClick: l,
                                src: k
                            })
                        }, a)
                    }), i.jsx(c("PolarisIGCoreBox"), {
                        height: 16,
                        width: "100%"
                    })]
                })
            }), h !== "normal" && i.jsx(c("PolarisIGCoreDivider"), {}), i.jsx(c("PolarisIGCoreBox"), {
                display: h === "normal" ? "none" : void 0,
                flex: "none",
                justifyContent: "end",
                children: i.jsx(c("PolarisIGCoreBox"), {
                    height: j,
                    justifyContent: "center",
                    paddingX: 4,
                    children: i.jsx(d("PolarisCreationSlider.react").CreationSlider, {
                        initialValue: b,
                        onChange: f,
                        onSetValue: g,
                        showValue: !0
                    }, h)
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationCoverPhotoFileSelector.react", ["PolarisCreationV2Strings", "PolarisIGCoreButton", "PolarisImageFileForm.react", "PolarisQEHelper", "PolarisUA", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useRef,
        j = ["image/jpeg", "image/png"];

    function a(a) {
        a.mediaId;
        a = a.onChange;
        var b = i(null),
            e = function() {
                var a = b == null ? void 0 : b.current;
                a != null && a.selectFile()
            };
        return h.jsxs("div", {
            children: [h.jsx(c("PolarisIGCoreButton"), {
                borderless: !0,
                onClick: e,
                children: d("PolarisUA").isTouchDevice() && d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? d("PolarisCreationV2Strings").SELECT_COVER_PHOTO_FROM_DEVICE_TEXT : d("PolarisCreationV2Strings").SELECT_COVER_PHOTO_TEXT
            }), h.jsx(d("PolarisImageFileForm.react").ImageFileForm, {
                acceptMimeTypes: j,
                capture: !1,
                multiple: !1,
                onFileChange: a,
                ref: b
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationFilmStrip.react", ["cx", "PolarisResponsiveBlock.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.editType,
            d = a.onResize;
        a = a.placeholders;
        return i.jsx(c("PolarisResponsiveBlock.react"), {
            className: (b === "coverPhoto" ? "_aabj" : "") + (b === "trim" ? " _aabk" : ""),
            onResize: d,
            children: a.map(function(a) {
                return i.jsx("div", {
                    className: "_aabl",
                    style: {
                        backgroundImage: "url(" + a.dataURL + ")"
                    }
                }, a.dataURL)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolariscalculateScrubberPosition", ["PolarisCreationConstants", "PolarisDateConsts"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c, d, e) {
        if (c == null) return null;
        b = a / c.clientWidth;
        b = b * 100;
        if (e) {
            e = d * (a / (c.clientWidth - d));
            a = e / c.clientWidth;
            d = Math.round(a * 100);
            return b + d
        }
        return b
    }

    function b(a, b) {
        var c = a / 100;
        b = b * c;
        c = Math.min(Math.max(.01, b), a - d("PolarisCreationConstants").DEFAULT_VIDEO_COVER_TIME);
        return c
    }

    function c(a, b, c, d, e) {
        a = a / b;
        b = a * c;
        if (e) {
            c = d * a;
            return b - c
        }
        return b
    }

    function e(a, b) {
        return d("PolarisCreationConstants").MIN_TRIM_LENGTH / a * b
    }

    function f(a) {
        a = Math.round(a * d("PolarisDateConsts").MS_PER_SEC) / d("PolarisDateConsts").MS_PER_SEC;
        var b = Math.floor(a / d("PolarisDateConsts").SEC_PER_HOUR);
        a = a - b * d("PolarisDateConsts").SEC_PER_HOUR;
        var c = Math.floor(a / d("PolarisDateConsts").SEC_PER_MIN);
        a = Math.floor(a - c * d("PolarisDateConsts").SEC_PER_MIN);
        var e = ("0" + b).slice(-2);
        c = ("0" + c).slice(-2);
        a = ("0" + a).slice(-2);
        var f = "";
        b > 0 && (f += e + ":");
        return f += c + ":" + a
    }
    g.xToSlider = a;
    g.sliderToTime = b;
    g.timeToX = c;
    g.minTrimX = e;
    g.convertTimestampToFormattedString = f
}, 98);
__d("usePolarisVideoScrubber", ["react"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useLayoutEffect,
        j = b.useRef;

    function k(a) {
        return Math.round((a + Number.EPSILON) * 100) / 100
    }

    function a(a, b, c, d) {
        var e = j(a.current),
            f = h(function(c, e) {
                e === void 0 && (e = !0);
                var f = b.current;
                if (f != null) {
                    var g = k(c) !== k(f.currentTime);
                    g && (f.currentTime = c, a.current = c, e && d(f, c))
                }
            }, [a, d, b]),
            g = h(function() {
                var a = b.current;
                a != null && f(e.current)
            }, [f, b]),
            l = h(function(a) {
                var c = b.current;
                c != null && !c.seeking && f(a);
                e.current = a
            }, [f, b]);
        i(function() {
            var a = b.current;
            a != null && c && f(e.current, !1)
        }, [f, b, c]);
        return {
            handleVideoSeeked: g,
            handleScrubberPositionChange: l
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationCoverPhotoPicker.react", ["cx", "PolarisCreationConstants", "PolarisCreationFilmStrip.react", "PolarisIGAnimate", "PolarisIGCoreBox", "PolarisUA", "PolariscalculateScrubberPosition", "react", "react-spring-wwwig", "react-use-gesture", "usePolarisVideoScrubber"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useLayoutEffect,
        l = b.useMemo,
        m = b.useRef,
        n = b.useState;

    function a(a) {
        var b, e = a.duration,
            f = a.initialCurrentTime,
            g = a.mediaId,
            h = a.onChange,
            o = a.placeholders,
            p = a.previewDataUrl,
            q = a.previewVideoRef;
        a = n(null);
        var r = a[0];
        a = a[1];
        var s = m(f);
        f = n(null);
        var t = f[0],
            u = f[1];
        f = d("react-spring-wwwig").useSpring(function() {
            return {}
        });
        var v = f[0],
            w = f[1];
        f = n(!1);
        var x = f[0],
            y = f[1];
        f = j(function() {
            if (r != null && x) {
                var a;
                a = d("PolariscalculateScrubberPosition").timeToX(s.current, e, (a = r == null ? void 0 : r.clientWidth) != null ? a : 0, d("PolarisCreationConstants").PREVIEW_TILE_WIDTH, !0);
                a != null && (w({
                    x: a,
                    immediate: !0
                }), u(a))
            }
        }, [e, r, w, x]);
        k(f, [f]);
        var z = l(function() {
            return h.bind(null, g)
        }, [g, h]);
        z = c("usePolarisVideoScrubber")(s, q, x, z);
        var A = z.handleScrubberPositionChange;
        z = z.handleVideoSeeked;
        b = d("react-use-gesture").useDrag(function(a) {
            var b, c = a.down;
            a = a.movement;
            a = a[0];
            b = ((b = t) != null ? b : 0) + a;
            w({
                x: b,
                config: d("PolarisCreationConstants").SLIDER_ANIMATION_CONFIG
            });
            if (q.current != null) {
                A(d("PolariscalculateScrubberPosition").sliderToTime(e, (a = d("PolariscalculateScrubberPosition").xToSlider(b, e, r, d("PolarisCreationConstants").PREVIEW_TILE_WIDTH, !0)) != null ? a : 0))
            }
            c || u(b)
        }, {
            bounds: {
                left: ((b = t) != null ? b : 0) * -1,
                right: ((b = r == null ? void 0 : r.clientWidth) != null ? b : 0) - ((b = t) != null ? b : 0) - d("PolarisCreationConstants").PREVIEW_TILE_WIDTH,
                top: 0,
                bottom: 0
            },
            filterTaps: !0,
            pointer: {
                touch: !0
            },
            preventDefault: !0
        });
        return i.jsxs(c("PolarisIGCoreBox"), {
            containerRef: a,
            marginBottom: 2,
            marginTop: 2,
            position: "relative",
            children: [i.jsx(c("PolarisCreationFilmStrip.react"), {
                editType: "coverPhoto",
                onResize: f,
                placeholders: o
            }), i.jsx(d("PolarisIGAnimate").Animated.div, babelHelpers["extends"]({
                "aria-valuemax": "100",
                "aria-valuemin": "0",
                "aria-valuenow": (f = d("PolariscalculateScrubberPosition").xToSlider((a = t) != null ? a : 0, e, r, d("PolarisCreationConstants").PREVIEW_TILE_WIDTH, !0)) != null ? f : 0,
                role: "slider"
            }, b(), {
                className: "_abg6",
                style: babelHelpers["extends"]({}, v, {
                    opacity: x ? 1 : 0,
                    height: d("PolarisCreationConstants").PREVIEW_TILE_HEIGHT,
                    width: d("PolarisCreationConstants").PREVIEW_TILE_WIDTH
                }),
                children: i.jsx("video", {
                    autoPlay: d("PolarisUA").isMobileSafari(),
                    className: "_abg7",
                    muted: !0,
                    onLoadedData: function() {
                        return y(!0)
                    },
                    onSeeked: z,
                    ref: q,
                    src: p
                })
            }))]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationMuteToggle.react", ["PolarisCheckboxToggle.react", "PolarisCreationV2ActionTypes", "PolarisCreationV2State", "PolarisCreationV2Strings", "PolarisIGCoreBox", "PolarisIGCoreText", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = (e = {}, e[d("PolarisCreationV2State").AUDIO_STATUS.on] = h.jsx(a, {
            label: d("PolarisCreationV2Strings").SOUND_ON_LABEL
        }), e[d("PolarisCreationV2State").AUDIO_STATUS.off] = h.jsx(a, {
            label: d("PolarisCreationV2Strings").SOUND_ON_LABEL
        }), e[d("PolarisCreationV2State").AUDIO_STATUS.none] = h.jsx(a, {
            label: d("PolarisCreationV2Strings").NO_AUDIO_LABEL
        }), e);

    function a(a) {
        a = a.label;
        return h.jsx(c("PolarisIGCoreBox"), {
            alignItems: "center",
            direction: "row",
            children: h.jsx(c("PolarisIGCoreText").Label, {
                children: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function j(a) {
        a = a.audioStatus;
        return i[a]
    }
    j.displayName = j.name + " [from " + f.id + "]";

    function b(a) {
        a = c("usePolarisCreationCurrentMedia")();
        var b = a.currentMedia,
            e = a.currentMediaId,
            f = d("usePolarisCreationDispatch").useCreationDispatch();
        a = function() {
            f({
                audio: b.audio === d("PolarisCreationV2State").AUDIO_STATUS.on ? d("PolarisCreationV2State").AUDIO_STATUS.off : d("PolarisCreationV2State").AUDIO_STATUS.on,
                type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META,
                id: e
            })
        };
        return h.jsxs(c("PolarisIGCoreBox"), {
            direction: "row",
            justifyContent: "between",
            marginBottom: 8,
            marginTop: 3,
            width: "100%",
            children: [h.jsx(j, {
                audioStatus: b.audio
            }), h.jsx(c("PolarisCheckboxToggle.react"), {
                checked: b.audio === d("PolarisCreationV2State").AUDIO_STATUS.on,
                disabled: b.audio === d("PolarisCreationV2State").AUDIO_STATUS.none,
                onChange: a
            })]
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b
}, 98);
__d("PolarisCreationVideoCurrentTimeBar.react", ["cx", "react", "usePolarisCreationVideoPlayer"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useEffect,
        l = b.useState,
        m;

    function a(a) {
        a = d("usePolarisCreationVideoPlayer").useCreationVideoPlayerContext();
        var b = a.video;
        a = l(0);
        var c = a[0],
            e = a[1];
        a = l(!1);
        var f = a[0],
            g = a[1],
            h = j(function() {
                if (b == null) return;
                var a = b.currentTime,
                    c = b.duration;
                a = a * 100 / c;
                e(a);
                g(!b.paused);
                m = window.requestAnimationFrame(h)
            }, [b]);
        k(function() {
            b !== null && (m = window.requestAnimationFrame(h));
            return function() {
                window.cancelAnimationFrame(m)
            }
        }, [h, b]);
        return i.jsx(i.Fragment, {
            children: f && i.jsx("div", {
                className: "_aazn",
                style: {
                    left: c + "%"
                }
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationVideoTrimScrubber.react", ["cx", "PolarisCreationConstants", "PolarisIGAnimate", "PolariscalculateScrubberPosition", "react", "react-spring-wwwig", "react-use-gesture", "usePolarisCreationVideoPlayer"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useLayoutEffect,
        k = b.useState;

    function l(a, b, c, d, e, f) {
        if (f === "start") {
            return {
                left: ((f = c) != null ? f : 0) * -1,
                right: ((f = e) != null ? f : 0) - ((e = c) != null ? e : 0) - a,
                top: 0,
                bottom: 0
            }
        }
        return {
            left: (((f = b == null ? void 0 : b.clientWidth) != null ? f : 0) + ((e = c) != null ? e : 0) - ((b = d) != null ? b : 0) - a) * -1,
            right: ((f = c) != null ? f : 0) * -1,
            top: 0,
            bottom: 0
        }
    }

    function a(a) {
        var b, c = a.duration,
            e = a.handleDrag,
            f = a.handleTrimChange;
        a.mediaId;
        a.onChange;
        var g = a.previewVideoRef,
            h = a.scrubberType,
            m = a.trimContainerEl,
            n = a.trimEnd;
        a = a.trimStart;
        var o = m == null ? void 0 : m.clientWidth,
            p = d("usePolarisCreationVideoPlayer").useCreationVideoPlayerContext(),
            q = p.video;
        p = k(null);
        var r = p[0],
            s = p[1];
        p = d("react-spring-wwwig").useSpring(function() {
            return {}
        });
        var t = p[0],
            u = p[1];
        p = k(!1);
        var v = p[0],
            w = p[1];
        p = d("PolariscalculateScrubberPosition").minTrimX(c, (p = o) != null ? p : 0);
        var x = d("PolariscalculateScrubberPosition").timeToX(a, c, (b = o) != null ? b : 0, d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH, !1),
            y = d("PolariscalculateScrubberPosition").timeToX(n, c, (b = o) != null ? b : 0, d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH, !1);
        b = d("PolariscalculateScrubberPosition").convertTimestampToFormattedString(h === "start" ? a : n);
        var z = function(a) {
            q != null && (q.currentTime = a)
        };
        j(function() {
            if (m != null) {
                var a;
                a = h === "start" ? x : y - ((a = o) != null ? a : 0);
                a != null && (u({
                    x: a,
                    config: d("PolarisCreationConstants").SLIDER_ANIMATION_CONFIG,
                    immediate: !0
                }), s(a))
            }
        }, [o]);
        a = d("react-use-gesture").useDrag(function(a) {
            var b, e = a.down;
            a = a.movement;
            a = a[0];
            b = ((b = r) != null ? b : 0) + a;
            u({
                x: b,
                config: d("PolarisCreationConstants").SLIDER_ANIMATION_CONFIG
            });
            a = h === "start" ? b : ((a = o) != null ? a : 0) + b;
            a = d("PolariscalculateScrubberPosition").sliderToTime(c, (a = d("PolariscalculateScrubberPosition").xToSlider(a, c, m, d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH, !1)) != null ? a : 0);
            g.current != null && (a -= d("PolarisCreationConstants").DEFAULT_VIDEO_COVER_TIME, f(a, h === "start"));
            e ? (w(!0), z(a)) : (w(!1), s(b))
        }, {
            bounds: l(p, m, r, x, y, h),
            filterTaps: !0
        });
        return i.jsxs(d("PolarisIGAnimate").Animated.div, babelHelpers["extends"]({
            "aria-valuemax": "100",
            "aria-valuemin": "0",
            "aria-valuenow": (p = d("PolariscalculateScrubberPosition").xToSlider((n = r) != null ? n : 0, c, m, d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH, !1)) != null ? p : 0,
            onMouseDown: function() {
                return e(!0)
            },
            onMouseUp: function() {
                return e(!1)
            },
            role: "slider"
        }, a(), {
            className: "_ac31" + (h === "start" ? " _ac32" : "") + (h === "end" ? " _ac33" : ""),
            style: babelHelpers["extends"]({}, t, {
                height: d("PolarisCreationConstants").VIDEO_TRIMMER_HEIGHT,
                width: d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH
            }),
            children: [i.jsx("div", {
                className: "_ac34"
            }), v ? i.jsx("div", {
                className: "_ac35",
                children: b
            }) : null]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.calculateScrubberBoundaries = l;
    g.CreationVideoTrimScrubber = a
}, 98);
__d("PolaristimeRuler", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
        b.push({
            timestamp: 0,
            hasLabel: !0
        });
        for (var c = 0; c < 3; c += 1) b.push({
            hasLabel: !1
        });
        b.push({
            timestamp: Math.round(a / 2),
            hasLabel: !0
        });
        for (var c = 0; c < 3; c += 1) b.push({
            hasLabel: !1
        });
        b.push({
            timestamp: Math.round(a),
            hasLabel: !0
        });
        return b
    }
    f.getTicks = a
}, 66);
__d("PolarisCreationVideoTrimTimeRuler.react", ["cx", "PolarisIGCoreBox", "PolaristimeRuler", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a = a.duration;
        a = d("PolaristimeRuler").getTicks(a);
        return i.jsx(c("PolarisIGCoreBox"), {
            direction: "row",
            justifyContent: "between",
            marginTop: 2,
            children: a.map(function(a, b) {
                return i.jsxs("div", {
                    className: "_aaze",
                    children: [i.jsx("div", {
                        className: "_aazf" + (a.hasLabel ? " _aazg" : "")
                    }), a.hasLabel && i.jsxs("div", {
                        children: [a.timestamp, "s"]
                    })]
                }, b)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationVideoTrimmerTrimmedOutMask.react", ["cx", "PolarisCreationConstants", "PolariscalculateScrubberPosition", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.duration,
            c = a.trimContainerEl,
            e = a.trimEnd;
        a = a.trimStart;
        return i.jsxs("div", {
            className: "_aako",
            children: [i.jsx("div", {
                className: "_aakp _aakq",
                style: {
                    width: d("PolariscalculateScrubberPosition").timeToX(a, b, (a = c == null ? void 0 : c.clientWidth) != null ? a : 0, d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH, !1) - d("PolarisCreationConstants").VIDEO_TRIM_BORDER_ADDITIONAL_PADDING,
                    left: 0
                }
            }), i.jsx("div", {
                className: "_aakp _aakr",
                style: {
                    width: d("PolariscalculateScrubberPosition").timeToX(b - e, b, (a = c == null ? void 0 : c.clientWidth) != null ? a : 0, d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH, !1) - d("PolarisCreationConstants").VIDEO_TRIM_BORDER_ADDITIONAL_PADDING,
                    right: 0
                }
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisCreationTrimmer", ["PolarisCreationV2Actions", "usePolarisCreationCurrentMedia", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("usePolarisCreationDispatch").useCreationDispatch(),
            b = c("usePolarisCreationCurrentMedia")(),
            e = b.currentMediaId;

        function f(b, c) {
            b = d("PolarisCreationV2Actions").createTrimmedVideo(e, b, c);
            a(b)
        }
        return {
            trimVideo: f
        }
    }
    g["default"] = a
}, 98);
__d("PolarisCreationVideoTrimmer.react", ["cx", "PolarisCreationConstants", "PolarisCreationFilmStrip.react", "PolarisCreationVideoCurrentTimeBar.react", "PolarisCreationVideoTrimScrubber.react", "PolarisCreationVideoTrimTimeRuler.react", "PolarisCreationVideoTrimmerTrimmedOutMask.react", "PolarisIGCoreBox", "PolariscalculateScrubberPosition", "react", "usePolarisCreationTrimmer", "usePolarisCreationVideoPlayer"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useState;

    function a(a) {
        var b = a.duration;
        a.initialCurrentTime;
        var e = a.mediaId,
            f = a.onChange,
            g = a.placeholders;
        a.previewDataUrl;
        var h = a.previewVideoRef,
            l = a.trimEndTime;
        a = a.trimStartTime;
        var m = c("usePolarisCreationTrimmer")(),
            n = m.trimVideo;
        m = k(null);
        var o = m[0];
        m = m[1];
        a = k(a);
        var p = a[0],
            q = a[1];
        a = k(l);
        var r = a[0],
            s = a[1];
        l = k(!1);
        var t = l[0],
            u = l[1];
        a = d("usePolarisCreationVideoPlayer").useCreationVideoPlayerContext();
        var v = a.pauseVideo,
            w = a.playVideo,
            x = a.video;
        l = function(a, b) {
            b ? (q(a), n(a, r)) : (s(a), n(p, a)), t && x != null && (x.currentTime = a)
        };
        a = j(function(a) {
            u(a), x != null && (a ? v() : w())
        }, [v, w, x]);
        return i.jsxs("div", {
            children: [i.jsxs(c("PolarisIGCoreBox"), {
                containerRef: m,
                marginBottom: 2,
                marginTop: 2,
                position: "relative",
                children: [i.jsx(c("PolarisCreationFilmStrip.react"), {
                    editType: "trim",
                    onResize: function() {},
                    placeholders: g
                }), i.jsx(c("PolarisCreationVideoTrimmerTrimmedOutMask.react"), {
                    duration: b,
                    trimContainerEl: o,
                    trimEnd: r,
                    trimStart: p
                }), i.jsx("div", {
                    className: "_aabn",
                    style: {
                        width: d("PolariscalculateScrubberPosition").timeToX(r - p, b, (m = o == null ? void 0 : o.clientWidth) != null ? m : 0, d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH, !1) - d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH * 2 + d("PolarisCreationConstants").VIDEO_TRIM_BORDER_ADDITIONAL_PADDING,
                        left: d("PolariscalculateScrubberPosition").timeToX(p, b, (g = o == null ? void 0 : o.clientWidth) != null ? g : 0, d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH, !1) + d("PolarisCreationConstants").VIDEO_TRIMMER_WIDTH
                    }
                }), i.jsx(d("PolarisCreationVideoTrimScrubber.react").CreationVideoTrimScrubber, {
                    duration: b,
                    handleDrag: a,
                    handleTrimChange: l,
                    mediaId: e,
                    onChange: f,
                    previewVideoRef: h,
                    scrubberType: "start",
                    trimContainerEl: o,
                    trimEnd: r,
                    trimStart: p
                }), !t && i.jsx(c("PolarisCreationVideoCurrentTimeBar.react"), {}), i.jsx(d("PolarisCreationVideoTrimScrubber.react").CreationVideoTrimScrubber, {
                    duration: b,
                    handleDrag: a,
                    handleTrimChange: l,
                    mediaId: e,
                    onChange: f,
                    previewVideoRef: h,
                    scrubberType: "end",
                    trimContainerEl: o,
                    trimEnd: r,
                    trimStart: p
                })]
            }), i.jsx(c("PolarisCreationVideoTrimTimeRuler.react"), {
                duration: b
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisCreationUpdateCoverPhoto", ["PolarisCreationV2ActionTypes", "PolariscreateCoverPhoto", "Polarisdebounce", "react", "regeneratorRuntime", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
        i = e.useRef;

    function a() {
        var a = d("usePolarisCreationDispatch").useCreationDispatch(),
            e = i(null);
        return h(c("Polarisdebounce")(function(c, f, g) {
            var h;
            return b("regeneratorRuntime").async(function(i) {
                while (1) switch (i.prev = i.next) {
                    case 0:
                        e.current = g;
                        i.next = 3;
                        return b("regeneratorRuntime").awrap(d("PolariscreateCoverPhoto").createCoverPhoto(f, g));
                    case 3:
                        h = i.sent;
                        if (!(e.current !== g)) {
                            i.next = 6;
                            break
                        }
                        return i.abrupt("return");
                    case 6:
                        a({
                            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_COVER_PHOTO,
                            id: c,
                            selectedCoverPhoto: h,
                            selectedCoverPhotoTime: g
                        });
                    case 7:
                    case "end":
                        return i.stop()
                }
            }, null, this)
        }, 500), [a])
    }
    g["default"] = a
}, 98);
__d("PolariscanvasCenterCropWithAspectRatio", ["nullthrows"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.element,
            d = a.outputAspectRatio,
            e = a.width;
        a = a.height;
        var f = e / a;
        f = d <= f;
        f = f ? {
            outputHeight: a,
            outputWidth: d * a
        } : {
            outputHeight: 1 / d * e,
            outputWidth: e
        };
        d = f.outputHeight;
        f = f.outputWidth;
        var g = document.createElement("canvas");
        g.setAttribute("width", f + "px");
        g.setAttribute("height", d + "px");
        var h = c("nullthrows")(g.getContext("2d"));
        h.translate(f / 2, d / 2);
        h.fillStyle = "red";
        h.fillRect(0, 0, f, d);
        h.drawImage(b, 0, 0, e, a, -e / 2, -a / 2, e, a);
        return {
            element: g,
            height: d,
            width: f
        }
    }
    g["default"] = a
}, 98);
__d("PolariscanvasRotate", ["nullthrows"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.element,
            d = a.rotationAngle,
            e = a.width;
        a = a.height;
        if (d === 0) return {
            element: b,
            rotationAngle: d,
            width: e,
            height: a
        };
        var f = d % 180 === 90;
        f = f ? {
            outputHeight: e,
            outputWidth: a
        } : {
            outputHeight: a,
            outputWidth: e
        };
        var g = f.outputWidth;
        f = f.outputHeight;
        var h = document.createElement("canvas");
        h.width = g;
        h.height = f;
        var i = c("nullthrows")(h.getContext("2d"));
        i.translate(g / 2, f / 2);
        i.rotate(d * Math.PI / 180);
        i.drawImage(b, 0, 0, e, a, -e / 2, -a / 2, e, a);
        return {
            element: h,
            width: g,
            height: f,
            rotationAngle: 0
        }
    }
    g["default"] = a
}, 98);
__d("PolarisigtvTransformCoverImageIfNecessary", ["PolariscanvasCenterCropWithAspectRatio", "PolariscanvasDrawImage", "PolariscanvasRotate", "PolarisgetIgtvUploadRequirements"], function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        return a.rotationAngle === 0 ? a : babelHelpers["extends"]({}, a, c("PolariscanvasRotate")(a))
    }

    function i(a) {
        var b = a.element,
            d = a.height,
            e = a.type,
            f = a.width,
            g = c("PolarisgetIgtvUploadRequirements")();
        g = g.reencodeToJpegMimeTypes;
        return !g.includes(e) ? a : babelHelpers["extends"]({}, a, c("PolariscanvasDrawImage")({
            element: b,
            width: f,
            height: d
        }), {
            type: "image/jpeg"
        })
    }

    function j(a) {
        var b = a.height,
            d = a.width,
            e = c("PolarisgetIgtvUploadRequirements")();
        e = e.coverAspectRatioCrop;
        d = d / b;
        b = e.width / e.height;
        e = d !== b;
        return !e ? a : babelHelpers["extends"]({}, a, c("PolariscanvasCenterCropWithAspectRatio")(babelHelpers["extends"]({}, a, {
            outputAspectRatio: b
        })))
    }

    function a(a) {
        return [h, j, i].reduce(function(a, b) {
            return b(a)
        }, a)
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationUpdateCoverPhotoFileSelection", ["PolarisCreationV2ActionTypes", "PolariscreateJpegFileFromCanvas", "PolarisigtvTransformCoverImageIfNecessary", "PolarisreadImageFile", "react", "regeneratorRuntime", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;

    function i(a) {
        var e, f, g, h, i, j, k, l, m, n;
        return b("regeneratorRuntime").async(function(o) {
            while (1) switch (o.prev = o.next) {
                case 0:
                    o.next = 2;
                    return b("regeneratorRuntime").awrap(d("PolarisreadImageFile").readImageFile(a));
                case 2:
                    e = o.sent;
                    f = e.dataURL, g = e.height, h = e.image, i = e.location, j = e.orientation, k = e.rotationAngle, l = e.width;
                    m = c("PolarisigtvTransformCoverImageIfNecessary")({
                        element: h,
                        rotationAngle: k,
                        height: g,
                        width: l,
                        type: a.type
                    });
                    n = a;
                    if (!(m.element instanceof HTMLCanvasElement)) {
                        o.next = 10;
                        break
                    }
                    o.next = 9;
                    return b("regeneratorRuntime").awrap(c("PolariscreateJpegFileFromCanvas")(m.element, a.name));
                case 9:
                    n = o.sent;
                case 10:
                    return o.abrupt("return", {
                        dataURL: f,
                        file: n,
                        height: g,
                        location: i,
                        orientation: j,
                        width: l
                    });
                case 11:
                case "end":
                    return o.stop()
            }
        }, null, this)
    }

    function a(a) {
        var c = d("usePolarisCreationDispatch").useCreationDispatch();
        return h(function(e) {
            var f, g;
            return b("regeneratorRuntime").async(function(h) {
                while (1) switch (h.prev = h.next) {
                    case 0:
                        f = e[0];
                        if (f) {
                            h.next = 3;
                            break
                        }
                        return h.abrupt("return");
                    case 3:
                        h.next = 5;
                        return b("regeneratorRuntime").awrap(i(f));
                    case 5:
                        g = h.sent, c({
                            type: d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_COVER_PHOTO,
                            id: a,
                            selectedCoverPhoto: g
                        });
                    case 7:
                    case "end":
                        return h.stop()
                }
            }, null, this)
        }, [c, a])
    }
    g["default"] = a
}, 98);
__d("PolarisCreationModalEditPageVideoSettingsTab.react", ["cx", "PolarisConfig", "PolarisCreationCoverPhotoFileSelector.react", "PolarisCreationCoverPhotoPicker.react", "PolarisCreationMuteToggle.react", "PolarisCreationV2Strings", "PolarisCreationVideoTrimmer.react", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisQEHelper", "PolarisUA", "gkx", "nullthrows", "react", "usePolarisCreationCurrentMedia", "usePolarisCreationUpdateCoverPhoto", "usePolarisCreationUpdateCoverPhotoFileSelection"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useRef;

    function a(a) {
        a = c("usePolarisCreationCurrentMedia")();
        var b = a.currentMedia;
        a = a.currentMediaId;
        var e = c("nullthrows")(b.coverPhoto);
        e = e.selectedCoverPhotoTime;
        var f = j(null),
            g = c("nullthrows")(b.video),
            h = c("usePolarisCreationUpdateCoverPhoto")(),
            k = c("usePolarisCreationUpdateCoverPhotoFileSelection")(a),
            l = d("PolarisUA").isMobileSafari() !== !0 && (d("PolarisConfig").isIOS() && d("PolarisUA").isTouchDevice()) !== !0 || c("gkx")("4784") === !0;
        return i.jsxs(c("PolarisIGCoreBox"), {
            paddingX: 4,
            children: [i.jsxs(c("PolarisIGCoreBox"), {
                marginBottom: l ? 3 : 0,
                children: [i.jsx("div", {
                    className: "_abgd",
                    children: i.jsxs(c("PolarisIGCoreBox"), {
                        alignContent: "stretch",
                        alignItems: "center",
                        direction: "row",
                        justifyContent: "between",
                        children: [i.jsx(c("PolarisIGCoreText").LabelEmphasized, {
                            children: d("PolarisCreationV2Strings").COVER_PHOTO_LABEL
                        }), i.jsx(c("PolarisCreationCoverPhotoFileSelector.react"), {
                            mediaId: a,
                            onChange: k
                        })]
                    })
                }), l && i.jsx(c("PolarisCreationCoverPhotoPicker.react"), {
                    duration: c("nullthrows")(b == null ? void 0 : (k = b.video) == null ? void 0 : k.videoDurationMs),
                    initialCurrentTime: e,
                    mediaId: a,
                    onChange: h,
                    placeholders: (k = (l = b.coverPhoto) == null ? void 0 : l.placeholders) != null ? k : [],
                    previewDataUrl: g.dataURL,
                    previewVideoRef: f
                }, a)]
            }), d("PolarisQEHelper").hasVideoTrimming() && i.jsxs(c("PolarisIGCoreBox"), {
                marginBottom: 3,
                children: [i.jsx("div", {
                    className: "_abgd",
                    children: i.jsx(c("PolarisIGCoreText").LabelEmphasized, {
                        children: d("PolarisCreationV2Strings").TRIM_VIDEO_LABEL
                    })
                }), i.jsx(c("PolarisCreationVideoTrimmer.react"), {
                    duration: c("nullthrows")(b == null ? void 0 : (l = b.video) == null ? void 0 : l.videoDurationMs),
                    initialCurrentTime: e,
                    mediaId: a,
                    onChange: h,
                    placeholders: (l = (k = b.coverPhoto) == null ? void 0 : k.placeholders) != null ? l : [],
                    previewDataUrl: g.dataURL,
                    previewVideoRef: f,
                    trimEndTime: (h = b == null ? void 0 : (e = b.trim) == null ? void 0 : e.end) != null ? h : c("nullthrows")(b == null ? void 0 : (k = b.video) == null ? void 0 : k.videoDurationMs),
                    trimStartTime: (g = b == null ? void 0 : (l = b.trim) == null ? void 0 : l.start) != null ? g : 0
                }, a)]
            }), i.jsx(c("PolarisIGCoreBox"), {
                children: i.jsx(c("PolarisCreationMuteToggle.react"), {})
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisCreationFilter", ["PolarisCreationV2Actions", "PolarisgetBlobFromCanvas", "Promise", "ReactDOMComet", "nullthrows", "regeneratorRuntime", "usePolarisCreationCurrentMedia", "usePolarisCreationDispatch", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("usePolarisCreationState").useCreationState(),
            e = d("usePolarisCreationDispatch").useCreationDispatch(),
            f = c("usePolarisCreationCurrentMedia")(),
            g = f.currentMediaId;

        function h(a) {
            a = d("PolarisCreationV2Actions").setAdjustment(g, a);
            e(a)
        }

        function i(a, b) {
            a = d("PolarisCreationV2Actions").setFilter(g, a, b);
            e(a)
        }

        function j(a, f) {
            var g, h;
            return b("regeneratorRuntime").async(function(i) {
                while (1) switch (i.prev = i.next) {
                    case 0:
                        i.next = 2;
                        return b("regeneratorRuntime").awrap(c("PolarisgetBlobFromCanvas")(f));
                    case 2:
                        g = i.sent, h = d("PolarisCreationV2Actions").setFilteredBlob(a, g), d("ReactDOMComet").flushSync(function() {
                            e(h)
                        });
                    case 5:
                    case "end":
                        return i.stop()
                }
            }, null, this)
        }

        function k() {
            var f;
            return b("regeneratorRuntime").async(function(g) {
                while (1) switch (g.prev = g.next) {
                    case 0:
                        f = a.multiPostOrder.map(function(f) {
                            var g, h, i, j;
                            return b("regeneratorRuntime").async(function(k) {
                                while (1) switch (k.prev = k.next) {
                                    case 0:
                                        g = a.media.get(f);
                                        if (!((g == null ? void 0 : g.type) === "image")) {
                                            k.next = 12;
                                            break
                                        }
                                        h = g == null ? void 0 : g.filteredBlob;
                                        if (!(h == null)) {
                                            k.next = 8;
                                            break
                                        }
                                        i = c("nullthrows")(g == null ? void 0 : g.croppedCanvas);
                                        k.next = 7;
                                        return b("regeneratorRuntime").awrap(c("PolarisgetBlobFromCanvas")(i));
                                    case 7:
                                        h = k.sent;
                                    case 8:
                                        k.next = 10;
                                        return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").setFilteredMedia(h, f));
                                    case 10:
                                        j = k.sent;
                                        return k.abrupt("return", d("ReactDOMComet").flushSync(function() {
                                            return e(j)
                                        }));
                                    case 12:
                                        return k.abrupt("return", b("Promise").resolve());
                                    case 13:
                                    case "end":
                                        return k.stop()
                                }
                            }, null, this)
                        });
                        g.next = 3;
                        return b("regeneratorRuntime").awrap(b("Promise").all(f));
                    case 3:
                        return g.abrupt("return", g.sent);
                    case 4:
                    case "end":
                        return g.stop()
                }
            }, null, this)
        }
        return {
            filterAllMedia: k,
            setMediaAdjustment: h,
            setMediaFilter: i,
            saveFilterBlob: j
        }
    }
    g["default"] = a
}, 98);
__d("PolarisnormalizeMonetizationDecisions", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a == null ? [] : a.map(function(a) {
            return {
                canUseProduct: a.can_use_product,
                hasOnboarded: a.has_onboarded,
                productConfig: g(a.product_config),
                productType: a.product_type,
                showInSettings: a.show_in_settings
            }
        })
    }

    function g(a) {
        return (a == null ? void 0 : a.igtv_monetization_account_level_toggle) != null && (a == null ? void 0 : a.mes_status_for_product) ? {
            igtvMonetizationAccountLevelToggle: a.igtv_monetization_account_level_toggle,
            mesStatusForProduct: a.mes_status_for_product
        } : null
    }

    function b(a) {
        return a == null ? null : [{
            canUseProduct: a.can_use_product.value,
            hasOnboarded: a.has_onboarded.value,
            productConfig: h(a.product_config),
            productType: a.product_type.value,
            showInSettings: a.show_in_settings
        }]
    }

    function h(a) {
        return {
            igtvMonetizationAccountLevelToggle: a.igtv_monetization_account_level_toggle,
            mesStatusForProduct: a.mes_status_for_product.value
        }
    }
    f.normalizeMonetizationDecisions = a;
    f.normalizeMonetizationDecisionsFromPageData = b
}, 66);
__d("usePolarisCreationMonetization", ["PolarisInstapi", "PolarisnormalizeMonetizationDecisions", "gkx", "react", "usePolarisCreationDispatch", "usePolarisCreationIsSingleVideoPost", "usePolarisCreationMonetizationDecisions"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
        i = b.useRef,
        j = ["igtv_revshare"];

    function a() {
        var a = d("usePolarisCreationDispatch").useCreationDispatch(),
            b = c("usePolarisCreationIsSingleVideoPost")(),
            e = i(null),
            f = c("usePolarisCreationMonetizationDecisions")();
        h(function() {
            if (!c("gkx")("4777") || !b || e.current != null || f != null) return;
            e.current = d("PolarisInstapi").apiGet("/api/v1/creators/partner_program/get_monetization_products_gating/", {
                query: {
                    product_types: j.join(",")
                }
            }).then(function(b) {
                a({
                    decisions: d("PolarisnormalizeMonetizationDecisions").normalizeMonetizationDecisions(b.data.gating_decisions),
                    type: "CREATION_SET_MONETIZATION_ELIGIBILITY"
                })
            })
        }, [f, a, b])
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationErrorPage", ["PolarisCreationStepProvider.react", "PolarisCreationV2ActionTypes", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = d("usePolarisCreationDispatch").useCreationDispatch(),
            b = d("PolarisCreationStepProvider.react").useCreationStep(),
            c = b.handleErrorPage;
        b = function(b) {
            a({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_ERROR_PAGE,
                errorPage: b
            }), c()
        };
        var e = function(b) {
            a({
                type: d("PolarisCreationV2ActionTypes").CREATION_SET_ERROR_PAGE,
                errorPage: b
            })
        };
        return {
            navigateToErrorPage: b,
            setSelectErrorPage: e
        }
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationUploadAllMedia", ["PolarisCreationConstants", "PolarisCreationError", "PolarisCreationErrorHelpers", "PolarisCreationMediaHelpers", "PolarisCreationV2Actions", "PolarisCreationV2State", "PolarisgetBlobFromCanvas", "Promise", "nullthrows", "regeneratorRuntime", "usePolarisCreationDispatch", "usePolarisCreationErrorPage", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b) {
        return a.cropRatio === b.originalAspectRatio && b.panningOffsetRatioX === 0 && b.panningOffsetRatioY === 0 && b.scale === 1 && ((a = b.filters) == null ? void 0 : a.filterName) === d("PolarisCreationConstants").INIT_FILTER_NAME && ((a = b.filters) == null ? void 0 : a.filterStrength) === d("PolarisCreationConstants").INIT_FILTER_STRENGTH && Object.keys(b.adjustmentParams).every(function(a) {
            return b.adjustmentParams[a] === d("PolarisCreationConstants").INIT_ADJUSTMENT_STRENGTH
        }) && (((a = b.trim) == null ? void 0 : a.start) == null || b.trim.start === 0) && (((a = b.trim) == null ? void 0 : a.end) == null || b.trim.end === ((a = b.video) == null ? void 0 : a.videoDurationMs)) && (b.type === "image" || b.type === "video" && b.audio !== d("PolarisCreationV2State").AUDIO_STATUS.off) && ((a = b.image) == null ? void 0 : (a = a.file) == null ? void 0 : a.type) !== "image/png"
    }

    function a() {
        var a = d("usePolarisCreationState").useCreationState(),
            e = d("usePolarisCreationDispatch").useCreationDispatch(),
            f = c("usePolarisCreationErrorPage")(),
            g = f.setSelectErrorPage;

        function i() {
            var f;
            return b("regeneratorRuntime").async(function(i) {
                while (1) switch (i.prev = i.next) {
                    case 0:
                        f = a.multiPostOrder.map(function(f) {
                            var g, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A;
                            return b("regeneratorRuntime").async(function(B) {
                                while (1) switch (B.prev = B.next) {
                                    case 0:
                                        g = c("nullthrows")(a.media.get(f));
                                        i = g.uploadId != null;
                                        if (!i) {
                                            B.next = 4;
                                            break
                                        }
                                        return B.abrupt("return", b("Promise").resolve());
                                    case 4:
                                        j = null;
                                        k = h(a, g);
                                        k ? (l = g.type === "image" ? g.image : g.video, j = l == null ? void 0 : l.file) : g.type === "image" && (j = g == null ? void 0 : g.filteredBlob);
                                        n = a.multiPostOrder.length > 1;
                                        if (!(g.type === "image")) {
                                            B.next = 19;
                                            break
                                        }
                                        if (!(j == null)) {
                                            B.next = 14;
                                            break
                                        }
                                        o = c("nullthrows")(g == null ? void 0 : g.croppedCanvas);
                                        B.next = 13;
                                        return b("regeneratorRuntime").awrap(c("PolarisgetBlobFromCanvas")(o));
                                    case 13:
                                        j = B.sent;
                                    case 14:
                                        B.next = 16;
                                        return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").stagePhoto({
                                            blob: j,
                                            sessionId: a.sessionId,
                                            id: f,
                                            reencodedBlob: k ? g == null ? void 0 : g.filteredBlob : null,
                                            isSidecar: n,
                                            fallbackDimensions: g.image ? {
                                                height: g.image.height,
                                                width: g.image.width
                                            } : void 0
                                        }));
                                    case 16:
                                        m = B.sent;
                                        B.next = 43;
                                        break;
                                    case 19:
                                        r = c("nullthrows")(g == null ? void 0 : (p = g.coverPhoto) == null ? void 0 : (q = p.selectedCoverPhoto) == null ? void 0 : q.file);
                                        s = function(a) {
                                            e(d("PolarisCreationV2Actions").uploadProgressed(f, a))
                                        };
                                        if (!(j == null)) {
                                            B.next = 34;
                                            break
                                        }
                                        B.next = 24;
                                        return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").createCroppedPhoto(f, c("nullthrows")(g == null ? void 0 : (t = g.coverPhoto) == null ? void 0 : t.selectedCoverPhoto), c("nullthrows")(a.cropRatio), g.panningOffsetRatioX, g.panningOffsetRatioY, g.scale));
                                    case 24:
                                        z = B.sent;
                                        A = z.croppedCanvas;
                                        B.next = 28;
                                        return b("regeneratorRuntime").awrap(c("PolarisgetBlobFromCanvas")(c("nullthrows")(A)));
                                    case 28:
                                        r = B.sent;
                                        B.next = 31;
                                        return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").stageVideo({
                                            isSidecar: n,
                                            sessionId: a.sessionId,
                                            onUploadProgress: s,
                                            sourceVideoFile: c("nullthrows")(g == null ? void 0 : (u = g.video) == null ? void 0 : u.file),
                                            sourceCoverPhotoFile: r,
                                            id: f,
                                            videoEditParams: d("PolarisCreationMediaHelpers").getVideoEditParams({
                                                cropRatio: c("nullthrows")(a.cropRatio),
                                                mute: g.audio === "off",
                                                panningOffsetRatioX: g.panningOffsetRatioX,
                                                panningOffsetRatioY: g.panningOffsetRatioY,
                                                trimEnd: g == null ? void 0 : (v = g.trim) == null ? void 0 : v.end,
                                                trimStart: g == null ? void 0 : (w = g.trim) == null ? void 0 : w.start,
                                                videoHeight: c("nullthrows")(g == null ? void 0 : (x = g.video) == null ? void 0 : x.height),
                                                videoWidth: c("nullthrows")(g == null ? void 0 : (y = g.video) == null ? void 0 : y.width)
                                            })
                                        }));
                                    case 31:
                                        m = B.sent;
                                        B.next = 43;
                                        break;
                                    case 34:
                                        if (!((g == null ? void 0 : g.audio) === d("PolarisCreationV2State").AUDIO_STATUS.off)) {
                                            B.next = 40;
                                            break
                                        }
                                        B.next = 37;
                                        return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").stageVideo({
                                            isSidecar: n,
                                            sessionId: a.sessionId,
                                            onUploadProgress: s,
                                            sourceVideoFile: c("nullthrows")(j),
                                            sourceCoverPhotoFile: r,
                                            id: f,
                                            videoEditParams: {
                                                mute: (g == null ? void 0 : g.audio) === d("PolarisCreationV2State").AUDIO_STATUS.off
                                            }
                                        }));
                                    case 37:
                                        m = B.sent;
                                        B.next = 43;
                                        break;
                                    case 40:
                                        B.next = 42;
                                        return b("regeneratorRuntime").awrap(d("PolarisCreationV2Actions").stageVideo({
                                            isSidecar: n,
                                            sessionId: a.sessionId,
                                            onUploadProgress: s,
                                            sourceVideoFile: c("nullthrows")(j),
                                            sourceCoverPhotoFile: r,
                                            id: f
                                        }));
                                    case 42:
                                        m = B.sent;
                                    case 43:
                                        return B.abrupt("return", e(m));
                                    case 44:
                                    case "end":
                                        return B.stop()
                                }
                            }, null, this)
                        });
                        i.next = 3;
                        return b("regeneratorRuntime").awrap(b("Promise").all(f)["catch"](function(a) {
                            if (a instanceof d("PolarisCreationError").CreationError) {
                                var b = d("PolarisCreationErrorHelpers").getCreationErrorPageForError(a);
                                g(b)
                            } else throw a
                        }));
                    case 3:
                        return i.abrupt("return", i.sent);
                    case 4:
                    case "end":
                        return i.stop()
                }
            }, null, this)
        }
        return i
    }
    g["default"] = a
}, 98);
__d("PolarisCreationModalEditPage.react", ["cx", "PolarisCreationConstants", "PolarisCreationMediaPreviewV2.react", "PolarisCreationModalBodyV2.react", "PolarisCreationModalEditPageAdjustmentTab.react", "PolarisCreationModalEditPageFilterTab.react", "PolarisCreationModalEditPageVideoSettingsTab.react", "PolarisCreationModalHeader.react", "PolarisCreationStepProvider.react", "PolarisCreationV2Shell.react", "PolarisCreationV2Strings", "PolarisFilteredCanvas.react", "PolarisIGCoreBox", "PolarisIGCoreTabs", "nullthrows", "react", "regeneratorRuntime", "usePolarisCreationCurrentMedia", "usePolarisCreationFilter", "usePolarisCreationMonetization", "usePolarisCreationUploadAllMedia", "usePolarisIGCorePreviousValue"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
        k = e.useEffect,
        l = e.useRef,
        m = e.useState;

    function n() {
        return i.jsx(c("PolarisIGCoreBox"), {
            flex: "grow",
            overflow: "auto",
            children: i.jsx(c("PolarisCreationModalEditPageVideoSettingsTab.react"), {})
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function o(a) {
        var b = a.adjustmentParams,
            e = a.filterName,
            f = a.filterStrength,
            g = a.onAdjustmentStrengthChange,
            h = a.onAdjustmentStrengthSet,
            j = a.onFilterClick,
            k = a.onFilterStrengthChange,
            l = a.onFilterStrengthSet,
            m = a.src;
        return i.jsx(c("PolarisIGCoreBox"), {
            flex: "grow",
            children: i.jsxs(d("PolarisIGCoreTabs").IGCoreTabs, {
                selectedIndex: 0,
                children: [i.jsx(d("PolarisIGCoreTabs").IGCoreTab, {
                    render: function() {
                        return i.jsx(c("PolarisCreationModalEditPageFilterTab.react"), {
                            filterStrength: f,
                            onFilterClick: j,
                            onFilterStrengthChange: k,
                            onFilterStrengthSet: l,
                            selectedFilterName: e,
                            src: m
                        })
                    },
                    children: d("PolarisCreationV2Strings").FILTER_TAB
                }), i.jsx(d("PolarisIGCoreTabs").IGCoreTab, {
                    render: function() {
                        return i.jsx(c("PolarisCreationModalEditPageAdjustmentTab.react"), {
                            adjustmentParams: b,
                            onAdjustmentStrengthChange: g,
                            onAdjustmentStrengthSet: h
                        })
                    },
                    children: d("PolarisCreationV2Strings").EDIT_TAB
                })]
            })
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function a(a) {
        var e = l(null),
            f = l(),
            g = d("PolarisCreationStepProvider.react").useCreationStep(),
            h = g.handleNextStep;
        g = c("usePolarisCreationFilter")();
        var p = g.filterAllMedia,
            q = g.saveFilterBlob,
            r = g.setMediaAdjustment,
            s = g.setMediaFilter,
            t = c("usePolarisCreationUploadAllMedia")();
        g = c("usePolarisCreationCurrentMedia")();
        var u = g.currentMedia,
            v = g.currentMediaAdjustmentParams,
            w = g.currentMediaFilter,
            x = g.currentMediaFilterStrength,
            y = g.currentMediaId;
        g = g.currentMediaItem;
        var z = m(!1),
            A = z[0],
            B = z[1];
        z = m(x);
        var C = z[0],
            D = z[1];
        x = m(new Map());
        var E = x[0],
            F = x[1];

        function G(a, b) {
            E.has(y) || F(E.set(y, new Map()));
            var c = E.get(y);
            c == null ? void 0 : c.set(a, b)
        }

        function H(a) {
            var b = E.get(y);
            a = (b = b == null ? void 0 : b.get(a)) != null ? b : d("PolarisCreationConstants").INIT_FILTER_STRENGTH;
            D(a)
        }
        z = j(function(a, b) {
            var c;
            r(babelHelpers["extends"]({}, v, (c = {}, c[a] = b, c)))
        }, [v, r]);

        function a() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        if (!(u.type === "image")) {
                            a.next = 3;
                            break
                        }
                        a.next = 3;
                        return b("regeneratorRuntime").awrap(q(y, c("nullthrows")(e.current)));
                    case 3:
                        a.next = 5;
                        return b("regeneratorRuntime").awrap(p());
                    case 5:
                        h();
                        a.next = 8;
                        return b("regeneratorRuntime").awrap(t());
                    case 8:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        }
        c("usePolarisCreationMonetization")();
        var I = c("usePolarisIGCorePreviousValue")({
            mediaId: y,
            canvas: e.current
        });
        k(function() {
            (function() {
                return b("regeneratorRuntime").async(function(a) {
                    while (1) switch (a.prev = a.next) {
                        case 0:
                            if (!((I == null ? void 0 : I.mediaId) != null && (I == null ? void 0 : I.canvas) != null)) {
                                a.next = 3;
                                break
                            }
                            a.next = 3;
                            return b("regeneratorRuntime").awrap(q(I.mediaId, I.canvas));
                        case 3:
                            H(w);
                        case 4:
                        case "end":
                            return a.stop()
                    }
                }, null, this)
            })()
        }, [y]);

        function J(a, b) {
            if (a === b) return;
            G(b, C);
            H(a);
            s(a, C)
        }
        return u == null || g == null ? null : i.jsxs(c("PolarisCreationV2Shell.react"), {
            children: [i.jsx(d("PolarisCreationModalHeader.react").CreationModalHeader, {
                onCta: a
            }), i.jsx(c("PolarisCreationModalBodyV2.react"), {
                mainContent: u.type === "image" ? i.jsx("div", {
                    className: "_abgf",
                    onMouseDown: function() {
                        return B(!0)
                    },
                    onMouseUp: function() {
                        return B(!1)
                    },
                    children: i.jsx(c("PolarisFilteredCanvas.react"), {
                        adjustmentParams: A ? d("PolarisCreationConstants").INIT_ADJUSTMENT_PARAMS : v,
                        filter: A ? d("PolarisCreationConstants").INIT_FILTER_NAME : w,
                        filterStrength: (A ? d("PolarisCreationConstants").INIT_FILTER_STRENGTH : C) / 100,
                        parentRef: f,
                        ref: e,
                        src: c("nullthrows")(u.croppedCanvas)
                    }, c("nullthrows")(g.dataURL))
                }) : i.jsx(c("PolarisCreationMediaPreviewV2.react"), {
                    previewType: "videoplayer"
                }),
                settingsColumnContent: u.type === "image" ? i.jsx(o, {
                    adjustmentParams: v,
                    filterName: w,
                    filterStrength: C,
                    onAdjustmentStrengthChange: function(a, b) {
                        var c;
                        r(babelHelpers["extends"]({}, v, (c = {}, c[a] = b, c)))
                    },
                    onAdjustmentStrengthSet: z,
                    onFilterClick: J,
                    onFilterStrengthChange: function(a) {
                        D(a)
                    },
                    onFilterStrengthSet: function(a) {
                        G(w, a), s(w, a)
                    },
                    src: c("nullthrows")(u.croppedCanvas)
                }) : i.jsx(n, {})
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalEditPostInfoPage.react", ["PolarisCreationModalBodyV2.react", "PolarisCreationModalComposeSettingsContent.react", "PolarisCreationModalHeader.react", "PolarisCreationTagImagePreview.react", "PolarisCreationTagVideoPreview.react", "PolarisCreationV2Shell.react", "PolarisNavigationActions", "PolarisPostActionTypes", "PolarisPostActions", "Polarisunexpected", "react", "react-redux-wwwig", "usePolarisCreationCurrentMedia", "usePolarisCreationSelectMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState;

    function j(a, b) {
        var c = new Map();
        a.forEach(function(a) {
            var d = b.get(a);
            d = (d = d == null ? void 0 : d.altText) != null ? d : "";
            c.set(a, d)
        });
        return c
    }

    function k(a, b) {
        var c = new Map();
        a.forEach(function(a) {
            var d = b.get(a);
            if (d != null) {
                d = Array.from(d.tags.values());
                c.set(a, d)
            }
        });
        return c
    }

    function a(a) {
        var b, e = a.editPostInfo,
            f = d("usePolarisCreationState").useCreationState();
        a = c("usePolarisCreationCurrentMedia")();
        var g = a.currentMedia,
            l = a.currentMediaId,
            m = g.uploadId;
        a = c("usePolarisCreationSelectMedia")();
        var n = a.removeMedia,
            o = d("react-redux-wwwig").useDispatch();
        a = i([]);
        var p = a[0],
            q = a[1];
        a = function(a) {
            q(p.concat(a)), n(a)
        };
        var r = function() {
            s != null ? s() : o(d("PolarisNavigationActions").closeFeedCreationModal())
        };
        if (e == null) {
            c("Polarisunexpected")("edit post info should be passed to this page");
            return null
        }
        b = ((b = g.filteredMedia) == null ? void 0 : b.dataURL) ? g.filteredMedia.dataURL : "";
        var s = e.onClose,
            t = function() {
                var a = f.multiPostOrder.length > 1,
                    b = j(e.beginningState.multiPostOrder, e.beginningState.media),
                    c = j(f.multiPostOrder, f.media),
                    h = k(e.beginningState.multiPostOrder, e.beginningState.media),
                    i = k(f.multiPostOrder, f.media);
                b = {
                    caption: e.beginningState.caption,
                    altTextMap: b,
                    location: e.beginningState.location,
                    userTags: h
                };
                h = {
                    caption: f.caption,
                    altTextMap: c,
                    location: f.location,
                    userTags: i,
                    childrenMediaIdsToDelete: p
                };
                p.length > 0 && o({
                    type: d("PolarisPostActionTypes").DELETE_FROM_CAROUSEL_POST,
                    carouselChildrenToDelete: p,
                    postId: m
                });
                o(d("PolarisPostActions").editPost(g.uploadId != null ? g.uploadId : "", h, b, l, a));
                r()
            };
        return h.jsxs(c("PolarisCreationV2Shell.react"), {
            children: [h.jsx(d("PolarisCreationModalHeader.react").CreationModalHeader, {
                onClose: s,
                onCta: t
            }), h.jsx(c("PolarisCreationModalBodyV2.react"), {
                mainContent: g.type === "image" ? h.jsx(c("PolarisCreationTagImagePreview.react"), {
                    id: l,
                    onDelete: a,
                    src: b
                }, l) : h.jsx(c("PolarisCreationTagVideoPreview.react"), {
                    onDelete: a
                }),
                settingsColumnContent: h.jsx(c("PolarisCreationModalComposeSettingsContent.react"), {
                    showAdvancedSettings: !1,
                    showReelsDisclaimer: !1
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreErrorOutlineV2Icon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 96 96",
            children: h.jsx("path", {
                d: "M48 0c26.5 0 48 21.5 48 48S74.5 96 48 96 0 74.5 0 48 21.5 0 48 0zm0 2C22.6 2 2 22.6 2 48s20.6 46 46 46 46-20.6 46-46S73.4 2 48 2zm0 57.8c3.4 0 6.1 2.7 6.1 6.1 0 3.4-2.7 6.1-6.1 6.1s-6.1-2.7-6.1-6.1c0-3.3 2.7-6.1 6.1-6.1zm0 2c-2.3 0-4.1 1.8-4.1 4.1S45.7 70 48 70s4.1-1.8 4.1-4.1c0-2.2-1.8-4.1-4.1-4.1zM48 23c3.5 0 6.4 2.8 6.1 6.2l-1.6 22.5c-.2 2.3-2.2 4-4.5 4-2.4 0-4.4-1.7-4.5-4l-1.6-22.5c-.3-3.4 2.6-6.2 6.1-6.2zm0 2c-2.4 0-4.3 1.9-4.1 4l1.6 22.5c.1 1.2 1.2 2.1 2.5 2.1s2.4-.9 2.5-2.1L52.1 29c.2-2.1-1.7-4-4.1-4z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisCreationModalErrorPage.react", ["PolarisCreationModalBodyV2.react", "PolarisCreationModalHeader.react", "PolarisCreationStepProvider.react", "PolarisCreationV2Shell.react", "PolarisCreationV2Strings", "PolarisGenericNullStateView.react", "PolarisGenericStrings", "PolarisIGCoreBox", "PolarisIGCoreErrorOutlineV2Icon", "PolarisODS", "PolarisQEHelper", "PolarisUA", "react", "regeneratorRuntime", "usePolarisCreationState", "usePolarisCreationUploadAllMedia"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i() {
        var a;

        function e() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(g());
                    case 2:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        }
        var f = d("usePolarisCreationState").useCreationState(),
            g = c("usePolarisCreationUploadAllMedia")(),
            i = d("PolarisCreationStepProvider.react").useCreationStep(),
            j = i.handleTryAgain;
        i = function() {
            d("PolarisUA").isDesktop() && (c("PolarisODS").incr("web.creation.try_again.v2"), e(), j(), f.errorPage = null)
        };
        return h.jsx(c("PolarisIGCoreBox"), {
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            width: "100%",
            children: h.jsx(c("PolarisGenericNullStateView.react"), {
                body: (a = f.errorPage) == null ? void 0 : a.body,
                header: (a = (a = f.errorPage) == null ? void 0 : a.header) != null ? a : d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE,
                icon: h.jsx(c("PolarisIGCoreErrorOutlineV2Icon"), {
                    alt: d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE,
                    size: 96
                }),
                primaryAction: ((a = f.errorPage) == null ? void 0 : a.primaryActionName) === d("PolarisCreationV2Strings").TRY_AGAIN_CTA_TEXT ? i : (a = f.errorPage) == null ? void 0 : a.primaryAction,
                primaryActionName: (i = f.errorPage) == null ? void 0 : i.primaryActionName
            })
        })
    }
    i.displayName = i.name + " [from " + f.id + "]";

    function j() {
        return d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? h.jsx(c("PolarisCreationModalBodyV2.react"), {
            children: h.jsx(i, {})
        }) : h.jsx(i, {})
    }
    j.displayName = j.name + " [from " + f.id + "]";

    function a(a) {
        return h.jsxs(c("PolarisCreationV2Shell.react"), {
            children: [h.jsx(d("PolarisCreationModalHeader.react").CreationModalHeader, {}), h.jsx(j, {})]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalPreviewPostComments.react", ["cx", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisTruncatedText.react", "PolarisUserAvatar.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.caption;
        a = a.owner;
        return i.jsx("div", {
            className: "_abg8",
            children: i.jsxs(c("PolarisIGCoreBox"), {
                direction: "row",
                height: 40,
                position: "relative",
                children: [i.jsx(c("PolarisIGCoreBox"), {
                    children: i.jsx(c("PolarisUserAvatar.react"), {
                        isLink: !1,
                        profilePictureUrl: a == null ? void 0 : a.profilePictureUrl,
                        size: 32,
                        username: a == null ? void 0 : a.username
                    })
                }), i.jsx(c("PolarisIGCoreBox"), {
                    justifyContent: "center",
                    margin: 2,
                    marginTop: 1,
                    children: i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        zeroMargin: !1,
                        children: (a = a == null ? void 0 : a.username) != null ? a : ""
                    })
                }), i.jsx(c("PolarisIGCoreBox"), {
                    justifyContent: "center",
                    margin: 2,
                    marginStart: 0,
                    marginTop: 1,
                    children: i.jsx(c("PolarisTruncatedText.react"), {
                        display: "inline",
                        isCaption: !0,
                        value: b
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalPreviewPostControls.react", ["cx", "PolarisCommentButton.react", "PolarisIGCoreDirectPanoOutlineIcon", "PolarisIGCoreSavePanoOutlineIcon", "PolarisLikeButton.react", "PolarisPostStrings", "emptyFunction", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useState;

    function a(a) {
        a = a.commentsDisabled;
        var b = j(!1),
            e = b[0],
            f = b[1];
        b = function() {
            f(!e)
        };
        var g = 24;
        return i.jsxs("div", {
            className: "_ac2e",
            children: [i.jsx(c("PolarisLikeButton.react"), {
                className: "_ac2f",
                isLiked: e,
                onChange: b
            }), !a && i.jsx(c("PolarisCommentButton.react"), {
                className: "_ac2g",
                onClick: c("emptyFunction")
            }), i.jsx("div", {
                className: "_ac2h",
                children: i.jsx(c("PolarisIGCoreDirectPanoOutlineIcon"), {
                    alt: d("PolarisPostStrings").SHARE_TEXT
                })
            }), i.jsx("div", {
                className: "_ac2i",
                children: i.jsx(c("PolarisIGCoreSavePanoOutlineIcon"), {
                    alt: d("PolarisPostStrings").SAVE_TEXT,
                    size: g
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalPreviewPostHeader.react", ["cx", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisLocationLink.react", "PolarisSponsorsUnit.react", "PolarisUserAvatar.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.location,
            d = a.owner,
            e = a.showSponsors;
        a = a.sponsors;
        return i.jsx("div", {
            className: "_aacb",
            children: i.jsxs(c("PolarisIGCoreBox"), {
                direction: "row",
                height: 40,
                position: "relative",
                children: [i.jsx(c("PolarisIGCoreBox"), {
                    children: i.jsx(c("PolarisUserAvatar.react"), {
                        isLink: !1,
                        profilePictureUrl: d == null ? void 0 : d.profilePictureUrl,
                        size: 32,
                        username: d == null ? void 0 : d.username
                    })
                }), i.jsxs(c("PolarisIGCoreBox"), {
                    justifyContent: "center",
                    margin: 2,
                    marginTop: 1,
                    children: [i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                        zeroMargin: !1,
                        children: (d = d == null ? void 0 : d.username) != null ? d : ""
                    }), e && i.jsx(c("PolarisSponsorsUnit.react"), {
                        className: "_aacc",
                        sponsors: a || []
                    }), b != null && i.jsx(c("PolarisIGCoreBox"), {
                        marginTop: 1,
                        children: i.jsx(c("PolarisIGCoreText").Body2, {
                            color: "ig-secondary-text",
                            zeroMargin: !1,
                            children: i.jsx(c("PolarisLocationLink.react"), {
                                location: b
                            })
                        })
                    })]
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalPreviewPostSettingsContent.react", ["cx", "PolarisCreationModalPreviewPostComments.react", "PolarisCreationModalPreviewPostControls.react", "PolarisCreationModalPreviewPostHeader.react", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisPostCommentInput.react", "PolarisTimestamp.react", "PolarisuserSelectors", "react", "react-redux-wwwig"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useRef;

    function a(a) {
        var b = a.caption,
            e = a.commentsDisabled;
        a = a.location;
        var f = d("react-redux-wwwig").useSelector(d("PolarisuserSelectors").getViewer),
            g = j(null);
        return i.jsxs("div", {
            className: "_ac2j",
            ref: g,
            children: [i.jsx("div", {
                className: "_ac2k",
                children: i.jsx(c("PolarisIGCoreBox"), {
                    marginEnd: 4,
                    marginStart: 4,
                    children: i.jsx("div", {
                        className: "_ac2l",
                        children: i.jsx(c("PolarisCreationModalPreviewPostHeader.react"), {
                            location: a != null ? a : void 0,
                            owner: f,
                            showSponsors: !1
                        })
                    })
                })
            }), i.jsx("div", {
                className: "_ac2m",
                children: i.jsx(c("PolarisIGCoreBox"), {
                    marginEnd: 4,
                    marginStart: 4,
                    children: b !== "" && i.jsx(c("PolarisCreationModalPreviewPostComments.react"), {
                        caption: b,
                        owner: f
                    })
                })
            }), i.jsx(c("PolarisIGCoreBox"), {
                marginEnd: 4,
                marginStart: 4,
                children: i.jsx(c("PolarisCreationModalPreviewPostControls.react"), {
                    commentsDisabled: (g = e) != null ? g : !1
                })
            }), i.jsx(c("PolarisIGCoreBox"), {
                marginEnd: 4,
                marginStart: 4,
                marginTop: 2,
                children: i.jsx(c("PolarisIGCoreText"), {
                    color: "ig-secondary-text",
                    size: "footnote",
                    children: i.jsx(c("PolarisTimestamp.react"), {
                        className: "_ac2n",
                        isLong: !0,
                        value: Math.round(Date.now() / 1e3)
                    })
                })
            }), i.jsx("div", {
                className: "_ac2o",
                children: e != null && e !== !0 && i.jsx(c("PolarisIGCoreBox"), {
                    marginBottom: 0,
                    marginEnd: 4,
                    marginStart: 4,
                    marginTop: 6,
                    children: i.jsx(c("PolarisPostCommentInput.react"), {
                        analyticsContext: "",
                        canViewerProvideFeedback: !0,
                        hasPostButton: !1,
                        id: "",
                        isLoggedIn: !0,
                        ownerId: (a = f == null ? void 0 : f.id) != null ? a : ""
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalPreviewPostPage.react", ["PolarisCreationCameraLogger", "PolarisCreationMediaPreviewV2.react", "PolarisCreationModalBodyV2.react", "PolarisCreationModalHeader.react", "PolarisCreationModalPreviewPostSettingsContent.react", "PolarisCreationStepProvider.react", "PolarisCreationV2Shell.react", "react", "regeneratorRuntime", "usePolarisCreationCurrentMedia", "usePolarisCreationState"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var e = d("PolarisCreationStepProvider.react").useCreationStep(),
            f = e.handleNextStep;
        e = d("usePolarisCreationState").useCreationState();
        var g = e.media,
            i = e.multiPostOrder,
            j = e.sessionId,
            k = g.get(i[0]),
            l = d("usePolarisCreationState").useCreationState();
        e = c("usePolarisCreationCurrentMedia")();
        g = e.currentMedia;

        function a() {
            var a;
            return b("regeneratorRuntime").async(function(b) {
                while (1) switch (b.prev = b.next) {
                    case 0:
                        a = (k == null ? void 0 : k.type) === "image" ? d("PolarisCreationCameraLogger").InstagramCameraMediaTypes.PHOTO : d("PolarisCreationCameraLogger").InstagramCameraMediaTypes.VIDEO, d("PolarisCreationCameraLogger").logFeedCreationShareMedia({
                            mediaType: a,
                            sessionId: j
                        }), f();
                    case 3:
                    case "end":
                        return b.stop()
                }
            }, null, this)
        }
        i = function() {
            var a = l.location;
            a != null && (a = {
                id: a.external_id,
                lat: a.lat,
                lng: a.lng,
                name: a.name,
                slug: a.address
            });
            return a
        };
        return h.jsxs(c("PolarisCreationV2Shell.react"), {
            children: [h.jsx(d("PolarisCreationModalHeader.react").CreationModalHeader, {
                onCta: a
            }), h.jsx(c("PolarisCreationModalBodyV2.react"), {
                mainContent: g.type === "image" ? h.jsx(c("PolarisCreationMediaPreviewV2.react"), {
                    previewType: "image"
                }) : h.jsx(c("PolarisCreationMediaPreviewV2.react"), {
                    previewType: "video"
                }),
                settingsColumnContent: h.jsx(c("PolarisCreationModalPreviewPostSettingsContent.react"), {
                    caption: l.caption,
                    commentsDisabled: l.advancedSettings.hasCommentsDisabled,
                    location: i()
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("usePolarisCreationConfigureAllMedia", ["invariant", "PolarisCreationAPI", "PolarisCreationError", "PolarisCreationErrorHelpers", "PolarisCreationV2ActionTypes", "PolarisCreationV2State", "PolarisFunctionalityTracker", "PolarisUploadLogger", "Polarisunexpected", "PolariswithExponentialBackoff", "nullthrows", "regeneratorRuntime", "usePolarisCreationDispatch", "usePolarisCreationErrorPage", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {
        currentRetryInMs: 3e3,
        maxRetryInMs: 64e4,
        onStatusCode: function(a) {
            return a !== 202
        }
    };

    function j(a, b) {
        var c = new Map();
        a.forEach(function(a) {
            a = b.get(a);
            var d = a == null ? void 0 : a.altText;
            a = a == null ? void 0 : a.uploadId;
            a != null && c.set(a, d)
        });
        return c.size > 0 ? c : null
    }

    function k(a) {
        var b, d = new Set([]);
        a.media.forEach(function(a) {
            d.add(a.type)
        });
        d.has("image") && d.has("video") ? b = "mix" : d.has("image") ? b = "photo" : b = "video";
        return c("PolarisUploadLogger").fromLoggingData({
            ingestSurface: b === "video" ? "unified_video" : "feed",
            isCarouselItem: a.multiPostOrder.length > 1,
            sessionId: a.sessionId,
            mediaType: b
        })
    }

    function a() {
        var a = d("usePolarisCreationState").useCreationState(),
            e = d("usePolarisCreationDispatch").useCreationDispatch(),
            f = c("usePolarisCreationErrorPage")(),
            g = f.setSelectErrorPage;

        function l() {
            var b = a.multiPostOrder.some(function(b) {
                b = a.media.get(b);
                return (b == null ? void 0 : b.uploadId) == null
            });
            return b !== !0
        }

        function m() {
            var f, g, m, n, o, p, q, r, s, t, u, v, w;
            return b("regeneratorRuntime").async(function(x) {
                while (1) switch (x.prev = x.next) {
                    case 0:
                        f = new(d("PolarisFunctionalityTracker").FunctionalityTracker)("creation_publish_media");
                        g = l();
                        g || h(0, 51549);
                        m = k(a);
                        m.logPublishInvoke();
                        if (!(a.multiPostOrder.length === 1)) {
                            x.next = 24;
                            break
                        }
                        f.attempt();
                        o = a.multiPostOrder[0];
                        p = c("nullthrows")(a.media.get(o));
                        q = p.trim ? p.trim.end - p.trim.start : (n = p.video) == null ? void 0 : n.videoDurationMs;
                        x.prev = 10;
                        f.request();
                        x.next = 14;
                        return b("regeneratorRuntime").awrap(d("PolariswithExponentialBackoff").withExponentialBackoff(function() {
                            var b;
                            return d("PolarisCreationAPI").configure({
                                caption: a.caption,
                                customAccessibilityCaption: p.altText,
                                disableComments: a.advancedSettings.hasCommentsDisabled,
                                disableLikeViewCounts: a.advancedSettings.hasLikeViewCountsDisabled,
                                enableVideoAds: a.advancedSettings.hasAdsEnabled,
                                geoTag: a.location,
                                type: p.type,
                                upcomingEventId: (b = a.upcomingEvent) == null ? void 0 : b.eventId,
                                uploadId: c("nullthrows")(p == null ? void 0 : p.uploadId),
                                usertags: Array.from(p.tags.values()),
                                videoSubtitlesEnabled: a.advancedSettings.hasVideoSubtitlesEnabled && p.audio === d("PolarisCreationV2State").AUDIO_STATUS.on,
                                trimmedVideoDuration: q
                            })
                        }, i).then(function(a) {
                            f.responseSuccess();
                            m.logPublishSuccess();
                            f.completeSuccess();
                            return a
                        })["catch"](function(a) {
                            f.responseFailure();
                            m.logPublishFailure();
                            f.completeFailure();
                            throw a
                        }));
                    case 14:
                        s = x.sent;
                        e({
                            type: d("PolarisCreationV2ActionTypes").CREATION_SET_IS_POSTED,
                            isPosted: !0,
                            postedMedia: s.media,
                            shortcode: (r = s.media) == null ? void 0 : r.code
                        });
                        x.next = 22;
                        break;
                    case 18:
                        x.prev = 18;
                        x.t0 = x["catch"](10);
                        e({
                            type: d("PolarisCreationV2ActionTypes").CREATION_SET_IS_POSTED,
                            isPosted: !1
                        });
                        throw d("PolarisCreationError").CreationError.uploadError(x.t0);
                    case 22:
                        x.next = 44;
                        break;
                    case 24:
                        if (!(a.multiPostOrder.length > 1)) {
                            x.next = 43;
                            break
                        }
                        f.attempt();
                        t = new Map();
                        a.media.forEach(function(a) {
                            t.set(c("nullthrows")(a.uploadId), Array.from(a.tags.values()))
                        });
                        u = a.multiPostOrder.map(function(b) {
                            return c("nullthrows")((b = a.media.get(b)) == null ? void 0 : b.uploadId)
                        });
                        x.prev = 29;
                        f.request();
                        x.next = 33;
                        return b("regeneratorRuntime").awrap(d("PolariswithExponentialBackoff").withExponentialBackoff(function() {
                            return d("PolarisCreationAPI").configureSidecar({
                                caption: a.caption,
                                customAccessibilityCaptionMap: j(a.multiPostOrder, a.media),
                                disableComments: a.advancedSettings.hasCommentsDisabled,
                                disableLikeViewCounts: a.advancedSettings.hasLikeViewCountsDisabled,
                                geoTag: a.location,
                                uploadIds: u,
                                usertagMap: t
                            })
                        }, i).then(function(a) {
                            f.responseSuccess();
                            m.logPublishSuccess();
                            f.completeSuccess();
                            return a
                        })["catch"](function(a) {
                            f.responseFailure();
                            m.logPublishFailure();
                            f.completeFailure();
                            throw a
                        }));
                    case 33:
                        w = x.sent;
                        e({
                            type: d("PolarisCreationV2ActionTypes").CREATION_SET_IS_POSTED,
                            isPosted: !0,
                            postedMedia: w.media,
                            shortcode: (v = w.media) == null ? void 0 : v.code
                        });
                        x.next = 41;
                        break;
                    case 37:
                        x.prev = 37;
                        x.t1 = x["catch"](29);
                        e({
                            type: d("PolarisCreationV2ActionTypes").CREATION_SET_IS_POSTED,
                            isPosted: !1
                        });
                        throw d("PolarisCreationError").CreationError.uploadError(x.t1);
                    case 41:
                        x.next = 44;
                        break;
                    case 43:
                        c("Polarisunexpected")("No media present in multiPostOrder");
                    case 44:
                    case "end":
                        return x.stop()
                }
            }, null, this, [
                [10, 18],
                [29, 37]
            ])
        }
        return function() {
            return m()["catch"](function(a) {
                if (a instanceof d("PolarisCreationError").CreationError) {
                    var b = d("PolarisCreationErrorHelpers").getCreationErrorPageForError(a);
                    g(b)
                } else throw a
            })
        }
    }
    g.publishLoggerFromState = k;
    g.useCreationConfigureAllMedia = a
}, 98);
__d("PolarisCreationModalPublishPage.react", ["ix", "IGCoreImage", "PolarisCreationModalBodyV2.react", "PolarisCreationModalHeader.react", "PolarisCreationStepProvider.react", "PolarisCreationStrings", "PolarisCreationTypes", "PolarisCreationV2Shell.react", "PolarisCreationV2Strings", "PolarisIGAnimate", "PolarisIGCoreBox", "PolarisIGCoreText", "PolarisQEHelper", "PolarisvideoMergeUtils", "react", "react-spring-wwwig", "usePolarisCreationConfigureAllMedia", "usePolarisCreationCurrentMedia", "usePolarisCreationErrorPage", "usePolarisCreationState"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useEffect;

    function k() {
        return i.jsx(c("PolarisIGCoreBox"), {
            height: 96,
            width: 96,
            children: i.jsx(c("IGCoreImage"), {
                alt: d("PolarisCreationStrings").UPLOAD_SPINNER_ALT,
                objectFit: "cover",
                src: {
                    light: h("212909"),
                    dark: h("222562")
                }
            })
        })
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function l() {
        var a = d("PolarisCreationStepProvider.react").useCreationStep();
        a = a.step;
        a = a === d("PolarisCreationTypes").STEP.done;
        var b = d("react-spring-wwwig").useSpring({
                opacity: a ? 1 : 0
            }),
            e = d("react-spring-wwwig").useSpring({
                marginBottom: a ? 16 : 0
            }),
            f = c("usePolarisCreationCurrentMedia")();
        f = f.currentMedia;
        f = d("PolarisvideoMergeUtils").isMediaEligibleForVideoMerge(f) && d("PolarisvideoMergeUtils").eligibleForVideoMerge();
        return i.jsx(c("PolarisIGCoreBox"), {
            alignItems: "center",
            flex: "grow",
            justifyContent: "center",
            width: "100%",
            children: a ? i.jsxs(i.Fragment, {
                children: [i.jsx(c("PolarisIGCoreBox"), {
                    height: 96,
                    width: 96,
                    children: i.jsx(c("IGCoreImage"), {
                        alt: d("PolarisCreationStrings").UPLOAD_LOADING_ALT,
                        objectFit: "cover",
                        src: {
                            light: h("212908"),
                            dark: h("222561")
                        }
                    })
                }), i.jsx(d("PolarisIGAnimate").Animated.div, {
                    style: babelHelpers["extends"]({}, e, {
                        marginTop: 16
                    }),
                    children: i.jsx(d("PolarisIGAnimate").Animated.div, {
                        style: b,
                        children: i.jsx(c("PolarisIGCoreText").Headline2, {
                            textAlign: "center",
                            children: f ? d("PolarisCreationV2Strings").REEL_UPLOADED_TEXT : d("PolarisCreationV2Strings").POST_UPLOADED_TEXT
                        })
                    })
                })]
            }) : i.jsx(k, {})
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function m() {
        return d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? i.jsx(c("PolarisCreationModalBodyV2.react"), {
            children: i.jsx(l, {})
        }) : i.jsx(l, {})
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        var b = d("usePolarisCreationState").useCreationState();
        a = d("PolarisCreationStepProvider.react").useCreationStep();
        var e = a.handlePublishSuccess,
            f = d("usePolarisCreationConfigureAllMedia").useCreationConfigureAllMedia();
        a = c("usePolarisCreationErrorPage")();
        var g = a.navigateToErrorPage,
            h = b.multiPostOrder.every(function(a) {
                return ((a = b.media.get(a)) == null ? void 0 : a.uploadId) != null
            });
        j(function() {
            b.errorPage != null && g(b.errorPage)
        }, [g, b.errorPage]);
        j(function() {
            h && f()
        }, [h]);
        j(function() {
            b.isPosted && e()
        }, [e, b.isPosted]);
        a = c("usePolarisCreationCurrentMedia")();
        a = a.currentMedia;
        a = d("PolarisvideoMergeUtils").isMediaEligibleForVideoMerge(a) && d("PolarisvideoMergeUtils").eligibleForVideoMerge();
        return i.jsxs(c("PolarisCreationV2Shell.react"), {
            children: [i.jsx(d("PolarisCreationModalHeader.react").CreationModalHeader, {
                showReelCreationHeader: a
            }), i.jsx(m, {})]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationLoadingBar.react", ["cx", "PolarisLoadingBar.react", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        a = a.isLoading;
        return a === !1 ? null : i.jsx(c("PolarisLoadingBar.react"), {
            className: "_abge"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisIGCoreIlloWebUploadIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            aspectRatio: 1.2626131953428201,
            viewBox: "0 0 97.6 77.3",
            children: [h.jsx("path", {
                d: "M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z",
                fill: "currentColor"
            }), h.jsx("path", {
                d: "M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z",
                fill: "currentColor"
            }), h.jsx("path", {
                d: "M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z",
                fill: "currentColor"
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisCreationModalSelectBody.react", ["PolarisCreationCameraLogger", "PolarisCreationError", "PolarisCreationErrorHelpers", "PolarisCreationLoadingBar.react", "PolarisCreationLoggerHooks", "PolarisCreationStepProvider.react", "PolarisCreationTypes", "PolarisCreationV2Strings", "PolarisGenericDropzone.react", "PolarisGenericNullStateView.react", "PolarisIGCoreBox", "PolarisIGCoreErrorOutlineV2Icon", "PolarisIGCoreIlloWebUploadIcon", "PolarisImageFileForm.react", "PolarisQEHelper", "PolarisUA", "nullthrows", "react", "regeneratorRuntime", "usePolarisCreationErrorPage", "usePolarisCreationSelectMedia", "usePolarisCreationState", "usePolarisCreationToast"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useRef,
        j = e.useState;

    function k(a) {
        return d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? a ? d("PolarisCreationV2Strings").SELECT_OTHER_TEXT : d("PolarisUA").isTouchDevice() ? d("PolarisCreationV2Strings").SELECT_FROM_DEVICE_TEXT : d("PolarisCreationV2Strings").SELECT_TEXT : d("PolarisCreationV2Strings").SELECT_TEXT
    }

    function a(a) {
        var e = i(null);
        a = c("usePolarisCreationSelectMedia")();
        var f = a.selectMediaFiles;
        a = d("PolarisCreationStepProvider.react").useCreationStep();
        var g = a.handleNextStep;
        a = c("usePolarisCreationToast")();
        var l = a.setErrorMessage;
        a = d("usePolarisCreationState").useCreationState();
        var m = a.errorPage,
            n = a.sessionId;
        a = c("usePolarisCreationErrorPage")();
        var o = a.setSelectErrorPage;
        a = j(!1);
        var p = a[0],
            q = a[1];
        a = j(!1);
        var r = a[0],
            s = a[1];
        a = m != null;
        d("PolarisCreationLoggerHooks").useCreationStartGallerySessionLogger();
        var t = function() {
                g(), d("PolarisCreationCameraLogger").logFeedCreationCameraEndGallerySession({
                    sessionId: n
                }), o(null)
            },
            u = function(a) {
                var c, e;
                return b("regeneratorRuntime").async(function(g) {
                    while (1) switch (g.prev = g.next) {
                        case 0:
                            q(!0);
                            g.prev = 1;
                            g.next = 4;
                            return b("regeneratorRuntime").awrap(f(a));
                        case 4:
                            t();
                            g.next = 17;
                            break;
                        case 7:
                            g.prev = 7;
                            g.t0 = g["catch"](1);
                            q(!1);
                            if (!(g.t0 instanceof d("PolarisCreationError").CreationError)) {
                                g.next = 16;
                                break
                            }
                            c = d("PolarisCreationErrorHelpers").getCreationErrorPageForError(g.t0);
                            e = d("PolarisCreationErrorHelpers").getCreationErrorToastForError(g.t0);
                            c ? o(c) : e ? (g.t0.type === d("PolarisCreationError").CreationErrorType.MAX_MEDIA_ADDED && t(), l(e.message)) : l(a.length > 1 ? d("PolarisCreationV2Strings").MULTIPLE_FILE_UPLOAD_ERROR : d("PolarisCreationV2Strings").SINGLE_FILE_UPLOAD_ERROR);
                            g.next = 17;
                            break;
                        case 16:
                            throw g.t0;
                        case 17:
                        case "end":
                            return g.stop()
                    }
                }, null, this, [
                    [1, 7]
                ])
            },
            v = function() {
                var a = e == null ? void 0 : e.current;
                a != null && a.selectFile()
            },
            w = d("PolarisUA").isTouchDevice() && d("PolarisQEHelper").hasFeedCreationV2Dogfooding();
        return h.jsxs(c("PolarisGenericDropzone.react"), {
            onDrag: function(a) {
                return s(a)
            },
            onFilesSelect: u,
            children: [h.jsx(c("PolarisCreationLoadingBar.react"), {
                isLoading: p
            }), h.jsx(c("PolarisIGCoreBox"), {
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
                width: "100%",
                children: h.jsx(c("PolarisGenericNullStateView.react"), {
                    backgroundColor: r ? "ig-secondary-background" : void 0,
                    body: a ? m == null ? void 0 : m.body : void 0,
                    header: a ? c("nullthrows")(m == null ? void 0 : m.header) : w ? d("PolarisCreationV2Strings").ADD_MEDIA_TITLE : d("PolarisCreationV2Strings").DRAG_AND_DROP_TITLE,
                    icon: a ? h.jsx(c("PolarisIGCoreErrorOutlineV2Icon"), {
                        alt: d("PolarisCreationV2Strings").MEDIA_OUTLINE_ALT,
                        size: 96
                    }) : h.jsx(c("PolarisIGCoreIlloWebUploadIcon"), {
                        alt: d("PolarisCreationV2Strings").MEDIA_OUTLINE_ALT,
                        color: r ? "ig-primary-button" : "ig-primary-text",
                        size: 96
                    }),
                    primaryAction: v,
                    primaryActionName: k(a),
                    secondaryAction: a ? m == null ? void 0 : m.secondaryAction : void 0,
                    secondaryActionName: a ? m == null ? void 0 : m.secondaryActionName : void 0
                })
            }), h.jsx(d("PolarisImageFileForm.react").ImageFileForm, {
                acceptMimeTypes: Object.keys(d("PolarisCreationTypes").CREATION_MIME_TYPES),
                capture: !1,
                multiple: !0,
                onFileChange: u,
                ref: e
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModalSelectPage.react", ["PolarisCreationLoggerHooks", "PolarisCreationModalBodyV2.react", "PolarisCreationModalHeader.react", "PolarisCreationModalSelectBody.react", "PolarisCreationV2Actions", "PolarisCreationV2Shell.react", "react", "usePolarisCreationDispatch"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useEffect;

    function a(a) {
        var b = d("usePolarisCreationDispatch").useCreationDispatch();
        d("PolarisCreationLoggerHooks").useCreationStartCameraSessionLogger();
        i(function() {
            b(d("PolarisCreationV2Actions").creationSessionStarted())
        }, [b]);
        return h.jsxs(c("PolarisCreationV2Shell.react"), {
            children: [h.jsx(d("PolarisCreationModalHeader.react").CreationModalHeader, {}), h.jsx(c("PolarisCreationModalBodyV2.react"), {
                children: h.jsx(c("PolarisCreationModalSelectBody.react"), {})
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModuleHelpers.react", ["PolarisCreationModalComposePage.react", "PolarisCreationModalCropPage.react", "PolarisCreationModalEditPage.react", "PolarisCreationModalEditPostInfoPage.react", "PolarisCreationModalErrorPage.react", "PolarisCreationModalPreviewPostPage.react", "PolarisCreationModalPublishPage.react", "PolarisCreationModalSelectPage.react", "PolarisCreationTypes", "Polarisunexpected", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        switch (a) {
            case d("PolarisCreationTypes").STEP.select:
                return h.jsx(c("PolarisCreationModalSelectPage.react"), {});
            case d("PolarisCreationTypes").STEP.crop:
                return h.jsx(c("PolarisCreationModalCropPage.react"), {});
            case d("PolarisCreationTypes").STEP.edit:
                return h.jsx(c("PolarisCreationModalEditPage.react"), {});
            case d("PolarisCreationTypes").STEP.compose:
                return h.jsx(c("PolarisCreationModalComposePage.react"), {});
            case d("PolarisCreationTypes").STEP.publish:
                return h.jsx(c("PolarisCreationModalPublishPage.react"), {});
            case d("PolarisCreationTypes").STEP.done:
                return h.jsx(c("PolarisCreationModalPublishPage.react"), {});
            case d("PolarisCreationTypes").STEP.error:
                return h.jsx(c("PolarisCreationModalErrorPage.react"), {});
            case d("PolarisCreationTypes").STEP.preview:
                return h.jsx(c("PolarisCreationModalPreviewPostPage.react"), {});
            case d("PolarisCreationTypes").STEP.editPostInfo:
                return h.jsx(c("PolarisCreationModalEditPostInfoPage.react"), {
                    editPostInfo: b
                });
            default:
                c("Polarisunexpected")("unsupported creation step");
                return h.jsx(c("PolarisCreationModalSelectPage.react"), {})
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.getCreationModule = a
}, 98);
__d("usePolarisCreationModalTimeSpent", ["PolarisPageIdentifierConstants", "PolarisTimeSpentNavigation", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;

    function a() {
        h(function() {
            var a, b = (a = d("PolarisTimeSpentNavigation").getPageInfo()) == null ? void 0 : a.page;
            if (b == null) return function() {};
            d("PolarisTimeSpentNavigation").setPage(c("PolarisPageIdentifierConstants").creationModal);
            return function() {
                d("PolarisTimeSpentNavigation").setPage(b)
            }
        }, [])
    }
    g["default"] = a
}, 98);
__d("PolariscreationStateFactory", [], function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        advancedSettings: {
            hasAdsEnabled: !1,
            hasCommentsDisabled: !1,
            hasLikeViewCountsDisabled: !1,
            hasVideoSubtitlesEnabled: !1
        },
        caption: "",
        cropRatio: null,
        cropType: null,
        currentMediaId: null,
        eligibleUpcomingEvents: [],
        entryPath: "/",
        errorPage: null,
        hasViewedReorderTooltip: !1,
        hasViewedPhotoTooltip: !1,
        isPosted: !1,
        location: null,
        media: new Map(),
        monetizationEligibility: null,
        multiPostOrder: [],
        postedMedia: null,
        sessionId: "",
        upcomingEvent: null
    };

    function a(a) {
        a === void 0 && (a = {});
        return babelHelpers["extends"]({}, g, a)
    }
    f.defaultState = g;
    f.creationStateFactory = a
}, 66);
__d("PolariscreationV2Reducer", ["invariant", "PolarisCreationConstants", "PolarisCreationCropHelpers", "PolarisCreationV2ActionTypes", "PolarisCreationV2State", "PolariscreationStateFactory", "areEqual", "nullthrows"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = new Set(["cropRatio", "panningOffsetRatioX", "panningOffsetRatioY", "scale", "filters", "coverPhoto", "audio", "adjustmentParams"]);

    function j(a, b) {
        var c = a[0];
        c = b.media.get(c);
        return b.cropType === d("PolarisCreationV2State").CropTypes.ORIGINAL && c != null ? d("PolarisCreationCropHelpers").getClosestValidAspectRatio(c.originalAspectRatio, c.type, a.length) : b.cropRatio
    }

    function k(a, b) {
        b.forEach(function(b) {
            var c = a.get(b);
            (c == null ? void 0 : c.uploadId) != null && (c.uploadId = null, a.set(b, c))
        });
        return a
    }

    function a(a, b) {
        switch (b.type) {
            case d("PolarisCreationV2ActionTypes").CREATION_RESET_STATE:
                return d("PolariscreationStateFactory").defaultState;
            case d("PolarisCreationV2ActionTypes").CREATION_SESSION_STARTED:
                return babelHelpers["extends"]({}, a, {
                    sessionId: b.sessionId
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_CAPTION:
                return babelHelpers["extends"]({}, a, {
                    caption: b.caption
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_CROP_RATIO:
                return babelHelpers["extends"]({}, a, {
                    cropRatio: b.cropRatio,
                    cropType: b.cropType
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_CURRENT_ID:
                return babelHelpers["extends"]({}, a, {
                    currentMediaId: b.id
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_LOCATION:
                return babelHelpers["extends"]({}, a, {
                    location: b.location
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_IS_POSTED:
                return babelHelpers["extends"]({}, a, {
                    isPosted: b.isPosted,
                    postedMedia: b.postedMedia,
                    shortcode: b.shortcode
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_COMMENTS_DISABLED:
                return babelHelpers["extends"]({}, a, {
                    advancedSettings: babelHelpers["extends"]({}, a.advancedSettings, {
                        hasCommentsDisabled: b.hasCommentsDisabled
                    })
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_LIKE_VIEW_COUNTS_DISABLED:
                return babelHelpers["extends"]({}, a, {
                    advancedSettings: babelHelpers["extends"]({}, a.advancedSettings, {
                        hasLikeViewCountsDisabled: b.hasLikeViewCountsDisabled
                    })
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_GENERATE_SUBTITLES_ENABLED:
                return babelHelpers["extends"]({}, a, {
                    advancedSettings: babelHelpers["extends"]({}, a.advancedSettings, {
                        hasVideoSubtitlesEnabled: b.hasVideoSubtitlesEnabled
                    })
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_VIEWED_PHOTO_TOOLTIP:
                return babelHelpers["extends"]({}, a, {
                    hasViewedPhotoTooltip: b.hasViewedPhotoTooltip
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_VIEWED_REORDER_TOOLTIP:
                return babelHelpers["extends"]({}, a, {
                    hasViewedReorderTooltip: b.hasViewedReorderTooltip
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_MEDIA:
                var e;
                return babelHelpers["extends"]({}, a, {
                    media: b.media,
                    multiPostOrder: b.multiPostOrder,
                    currentMediaId: (e = a.currentMediaId) != null ? e : b.multiPostOrder[0]
                });
            case d("PolarisCreationV2ActionTypes").CREATION_ADD_MEDIA:
                e = new Map([].concat(Array.from(a.media.entries()), Array.from(b.media.entries())));
                var f = Array.from(new Set([].concat(a.multiPostOrder, b.multiPostOrder)));
                a.multiPostOrder.length === 1 && k(e, a.multiPostOrder);
                return babelHelpers["extends"]({}, a, {
                    media: e,
                    multiPostOrder: f
                });
            case d("PolarisCreationV2ActionTypes").CREATION_REMOVE_MEDIA:
                e = b.mediaId;
                f = new Map(a.media);
                f["delete"](e);
                e = a.multiPostOrder.indexOf(e);
                e !== -1 || h(0, 51150);
                e = e === 0 ? 1 : e - 1;
                e = a.multiPostOrder[e];
                var g = a.multiPostOrder.filter(function(a) {
                    return a !== b.mediaId
                });
                a.multiPostOrder.length === 2 && k(f, a.multiPostOrder);
                return babelHelpers["extends"]({}, a, {
                    media: f,
                    multiPostOrder: g,
                    currentMediaId: e,
                    cropRatio: j(g, a)
                });
            case d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_META:
                f = a.media;
                e = b.id;
                b.type;
                var l = babelHelpers.objectWithoutPropertiesLoose(b, ["id", "type"]),
                    m = c("nullthrows")(f.get(e));
                g = babelHelpers["extends"]({}, m, l);
                if (m.uploadId != null) {
                    var n = Object.keys(l).some(function(a) {
                        return i.has(a) && !c("areEqual")(l[a], m[a])
                    });
                    n && (g.uploadId = null)
                }
                n = f.set(e, g);
                return babelHelpers["extends"]({}, a, {
                    media: n
                });
            case d("PolarisCreationV2ActionTypes").CREATION_UPDATE_MEDIA_COVER_PHOTO:
                var o;
                f = b.id;
                e = b.selectedCoverPhoto;
                g = b.selectedCoverPhotoTime;
                n = a.media;
                var p = c("nullthrows")(n.get(f));
                if (((o = p.coverPhoto) == null ? void 0 : o.selectedCoverPhotoTime) === g) return babelHelpers["extends"]({}, a);
                p = babelHelpers["extends"]({}, p, {
                    coverPhoto: {
                        placeholders: (p = (o = p.coverPhoto) == null ? void 0 : o.placeholders) != null ? p : [],
                        selectedCoverPhoto: e,
                        selectedCoverPhotoTime: (o = g) != null ? o : d("PolarisCreationConstants").DEFAULT_VIDEO_COVER_TIME
                    }
                });
                e = n.set(f, p);
                return babelHelpers["extends"]({}, a, {
                    media: e
                });
            case d("PolarisCreationV2ActionTypes").CREATION_ADD_USERTAG_TO_MEDIA:
                g = a.media;
                o = b.id;
                n = b.tag;
                f = b.userId;
                p = c("nullthrows")(g.get(o));
                e = p.tags.set(f, n);
                f = babelHelpers["extends"]({}, p, {
                    tags: e
                });
                n = g.set(o, f);
                return babelHelpers["extends"]({}, a, {
                    media: n
                });
            case d("PolarisCreationV2ActionTypes").CREATION_REMOVE_USERTAG_FROM_MEDIA:
                p = a.media;
                e = b.id;
                g = b.userId;
                o = c("nullthrows")(p.get(e));
                f = new Map(o.tags);
                f["delete"](g);
                n = babelHelpers["extends"]({}, o, {
                    tags: f
                });
                g = p.set(e, n);
                return babelHelpers["extends"]({}, a, {
                    media: g
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_MULTI_POST_ORDER:
                o = b.multiPostOrder;
                return babelHelpers["extends"]({}, a, {
                    multiPostOrder: o,
                    cropRatio: j(o, a)
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_ERROR_MESSAGE:
                f = b.errorMessage;
                return babelHelpers["extends"]({}, a, {
                    errorMessage: f
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_ERROR_PAGE:
                p = b.errorPage;
                return babelHelpers["extends"]({}, a, {
                    errorPage: p
                });
            case d("PolarisCreationV2ActionTypes").CREATION_UPDATE_VIDEO_TRIM:
                e = b.end;
                n = b.id;
                g = b.start;
                o = a.media;
                f = c("nullthrows")(o.get(n));
                if (((p = f.trim) == null ? void 0 : p.end) === e && ((p = f.trim) == null ? void 0 : p.start) === g) return babelHelpers["extends"]({}, a);
                p = babelHelpers["extends"]({}, f, {
                    trim: {
                        end: e,
                        start: g
                    }
                });
                f = o.set(n, p);
                return babelHelpers["extends"]({}, a, {
                    media: f
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_ELIGIBLE_UPCOMING_EVENTS:
                return babelHelpers["extends"]({}, a, {
                    eligibleUpcomingEvents: b.eligibleUpcomingEvents
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_UPCOMING_EVENT:
                return babelHelpers["extends"]({}, a, {
                    upcomingEvent: b.upcomingEvent
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_MONETIZATION_ELIGIBILITY:
                return babelHelpers["extends"]({}, a, {
                    monetizationEligibility: b.decisions
                });
            case d("PolarisCreationV2ActionTypes").CREATION_SET_ADS_ENABLED:
                return babelHelpers["extends"]({}, a, {
                    advancedSettings: babelHelpers["extends"]({}, a.advancedSettings, {
                        hasAdsEnabled: b.hasAdsEnabled
                    })
                });
            default:
                return a
        }
    }
    g["default"] = a
}, 98);
__d("usePolarisCreationReducer", ["PolariscreationStateFactory", "PolariscreationV2Reducer", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useReducer;

    function a(a) {
        a === void 0 && (a = d("PolariscreationStateFactory").defaultState);
        return h(c("PolariscreationV2Reducer"), a)
    }
    g["default"] = a
}, 98);
__d("PolarisCreationModalError.react", ["IGCoreModal", "PolarisCreationModalBodyV2.react", "PolarisCreationStepProvider.react", "PolarisCreationV2Strings", "PolarisGenericNullStateView.react", "PolarisGenericStrings", "PolarisIGCoreAppInstagramPanoOutlineIcon", "PolarisIGCoreBox", "PolarisIGCoreErrorOutlineV2Icon", "PolarisIGCoreModalHeader", "PolarisNavigationActions", "PolarisODS", "PolarisQEHelper", "PolarisUA", "react", "react-redux-wwwig", "regeneratorRuntime", "usePolarisCreationState", "usePolarisCreationUploadAllMedia"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i(a) {
        a = a.error;
        var e = d("usePolarisCreationState").useCreationState(),
            f = c("usePolarisCreationUploadAllMedia")();
        a = d("PolarisCreationStepProvider.react").useCreationStep();
        var g = a.handleTryAgain;

        function i() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(f());
                    case 2:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        }
        a = function() {
            d("PolarisUA").isDesktop() && (c("PolarisODS").incr("web.creation.try_again.v2"), i(), g(), e.errorPage = null)
        };
        return h.jsx(c("PolarisIGCoreBox"), {
            flex: "grow",
            overflow: "hidden",
            children: h.jsx(c("PolarisIGCoreBox"), {
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
                width: "100%",
                children: h.jsx(c("PolarisGenericNullStateView.react"), {
                    errorMessage: void 0,
                    header: d("PolarisQEHelper").hasFeedCreationV2Dogfooding() ? d("PolarisCreationV2Strings").SOMETHING_WENT_WRONG_HEADER : d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE,
                    icon: h.jsx(c("PolarisIGCoreErrorOutlineV2Icon"), {
                        alt: d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE,
                        size: 96
                    }),
                    primaryAction: a,
                    primaryActionName: d("PolarisUA").isDesktop() ? d("PolarisCreationV2Strings").TRY_AGAIN_CTA_TEXT : void 0
                })
            })
        })
    }
    i.displayName = i.name + " [from " + f.id + "]";

    function a(a) {
        a = a.error;
        var b = d("react-redux-wwwig").useDispatch(),
            e = function() {
                return b(d("PolarisNavigationActions").closeFeedCreationModal())
            },
            f = d("PolarisQEHelper").hasFeedCreationV2Dogfooding(),
            g = f ? d("PolarisCreationV2Strings").SOMETHING_WENT_WRONG_TITLE : d("PolarisCreationV2Strings").ERROR_HEADER;
        return h.jsxs(c("IGCoreModal"), {
            "aria-label": g,
            backdropColor: f ? "dark" : "default",
            disablePopInAnimation: !0,
            fixedWidth: !0,
            size: "creation",
            children: [h.jsx(c("PolarisIGCoreBox"), {
                width: "100%",
                children: h.jsx(c("PolarisIGCoreModalHeader"), {
                    onClose: e,
                    startAdornment: h.jsx(c("PolarisIGCoreAppInstagramPanoOutlineIcon"), {
                        alt: d("PolarisGenericStrings").INSTAGRAM_TEXT,
                        color: "ig-primary-text"
                    }),
                    truncateText: !0,
                    children: g
                })
            }), f ? h.jsx(c("PolarisCreationModalBodyV2.react"), {
                children: h.jsx(i, {
                    error: a
                })
            }) : h.jsx(i, {
                error: a
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisCreationModal.react", ["fbt", "IGCoreModal", "Keys", "PolarisCreationCameraLogger", "PolarisCreationConstants", "PolarisCreationContextProvider.react", "PolarisCreationHelpers", "PolarisCreationModalError.react", "PolarisCreationModalHeader.react", "PolarisCreationModuleHelpers.react", "PolarisCreationStepProvider.react", "PolarisCreationTypes", "PolarisCreationWarningDialog.react", "PolarisDOMListener.react", "PolarisErrorBoundary.react", "PolarisIGAnimate", "PolarisNavigationActions", "PolarisPageTitle", "PolarisPostActions", "PolarisRoutes", "PolarisUA", "PolariscreationStateFactory", "PolarisuserSelectors", "browserHistory", "lodash-cloneDeep", "qex", "react", "react-redux-wwwig", "react-spring-wwwig", "usePolarisCreationModalDimensions", "usePolarisCreationModalTimeSpent", "usePolarisCreationReducer"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
        k = b.useRef,
        l = b.useState,
        m = h._("Create new post");

    function n(a) {
        var b = a.editPostInfo;
        a = d("PolarisCreationStepProvider.react").useCreationStep();
        var e = a.step;
        a = c("usePolarisCreationReducer")(babelHelpers["extends"]({}, d("PolariscreationStateFactory").creationStateFactory(c("lodash-cloneDeep")(b == null ? void 0 : b.beginningState)), {
            entryPath: d("browserHistory").browserHistory.location.pathname
        }));
        var f = a[0];
        a = a[1];
        var g = d("react-redux-wwwig").useSelector(function(a) {
                return d("PolarisuserSelectors").getViewer(a)
            }),
            h = k(!1),
            m = d("react-redux-wwwig").useDispatch(),
            n = l(!1),
            o = n[0],
            p = n[1],
            q = function() {
                var a, b, c = g == null ? void 0 : g.username;
                if (c == null) return;
                a = ((a = location) == null ? void 0 : a.pathname) === d("PolarisRoutes").FEED_PATH;
                b = ((b = location) == null ? void 0 : b.pathname) != null && ((b = location) == null ? void 0 : b.pathname.includes(c + "/"));
                (a || b) && window.scrollTo(0, 0)
            },
            r = function() {
                var a, b = f.postedMedia,
                    c = b == null ? void 0 : b.pk;
                a = b == null ? void 0 : (a = b.user) == null ? void 0 : a.pk;
                if (b == null || c == null || a == null) return;
                m(d("PolarisPostActions").showNewUploadedPost(b, c, a));
                q()
            },
            s = function() {
                e !== d("PolarisCreationTypes").STEP.editPostInfo && d("PolarisCreationCameraLogger").logFeedCreationEndCameraSession({
                    sessionId: f.sessionId
                }), b != null ? b.onClose() : (f.isPosted === !0 && r(), m(d("PolarisNavigationActions").closeFeedCreationModal()))
            },
            t = function() {
                d("PolarisCreationConstants").NON_WARNING_STEPS.has(e) ? s() : (h.current = !0, p(!0))
            };
        n = function() {
            h.current = !1, p(!1)
        };
        var u = function(a) {
                a.which === c("Keys").ESC && t()
            },
            v = c("usePolarisCreationModalDimensions")(),
            w = v.modalDimensions;
        v = v.modalDimensionsWithSetting;
        var x = {
                width: w.width + "px",
                maxWidth: w.maxWidth + "px",
                minWidth: w.minWidth + "px",
                minHeight: w.minHeight + "px",
                maxHeight: w.maxHeight + "px"
            },
            y = {
                width: v.width + "px",
                maxWidth: v.maxWidth + "px",
                minWidth: v.minWidth + "px"
            };
        w = d("react-spring-wwwig").useSpring(function() {
            return x
        });
        v = w[0];
        var z = w[1];
        j(function() {
            switch (e) {
                case d("PolarisCreationTypes").STEP.select:
                case d("PolarisCreationTypes").STEP.crop:
                case d("PolarisCreationTypes").STEP.publish:
                    z(x);
                    break;
                case d("PolarisCreationTypes").STEP.edit:
                case d("PolarisCreationTypes").STEP.compose:
                case d("PolarisCreationTypes").STEP.preview:
                case d("PolarisCreationTypes").STEP.editPostInfo:
                    z(y);
                    break
            }
        }, [x, y, z, e]);
        j(function() {
            var a;
            if (d("PolarisUA").isTouchDevice() === !1 || ((a = document) == null ? void 0 : (a = a.body) == null ? void 0 : a.style) == null) return function() {};
            a = document.body.style;
            var b = a.position,
                c = a.top,
                e = a.width,
                f = window.scrollY;
            document.body.style.top = "-" + window.scrollY + "px";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            return function() {
                var a;
                if (((a = document.body) == null ? void 0 : a.style) != null) {
                    document.body.style.position = (a = b) != null ? a : "";
                    document.body.style.top = (a = c) != null ? a : "";
                    document.body.style.width = (a = e) != null ? a : "";
                    window.scrollTo(0, f)
                }
            }
        }, []);
        return i.jsx(c("PolarisCreationContextProvider.react"), {
            dispatch: a,
            state: f,
            children: i.jsxs(c("IGCoreModal"), {
                "aria-label": d("PolarisCreationModalHeader.react").getModalTitle(e, (w = f.errorPage) == null ? void 0 : w.title),
                backdropColor: "dark",
                closeButtonPosition: "background",
                disablePopInAnimation: c("qex")._("251") === !0,
                fixedWidth: !0,
                isClosingRef: h,
                onClose: t,
                size: "creation",
                children: [i.jsxs(c("PolarisErrorBoundary.react"), {
                    errorRenderer: function(a) {
                        return i.jsx(c("PolarisCreationModalError.react"), {
                            error: a
                        })
                    },
                    children: [i.jsx(d("PolarisIGAnimate").Animated.div, {
                        style: v,
                        children: d("PolarisCreationModuleHelpers.react").getCreationModule(e, b)
                    }), o && i.jsx(c("PolarisCreationWarningDialog.react"), {
                        onCancel: n,
                        onDiscardClick: s
                    })]
                }), i.jsx(c("PolarisDOMListener.react"), {
                    event: "keyup",
                    handler: u,
                    target: window
                })]
            })
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function a(a) {
        a = a.editPostInfo;
        c("usePolarisCreationModalTimeSpent")();
        return i.jsxs(i.Fragment, {
            children: [i.jsx(c("PolarisPageTitle"), {
                title: m
            }), i.jsx(d("PolarisCreationStepProvider.react").CreationStepProvider, {
                initialStep: a != null ? d("PolarisCreationTypes").STEP.editPostInfo : d("PolarisCreationHelpers").getCreationFirstStep(),
                children: i.jsx(n, {
                    editPostInfo: a
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);