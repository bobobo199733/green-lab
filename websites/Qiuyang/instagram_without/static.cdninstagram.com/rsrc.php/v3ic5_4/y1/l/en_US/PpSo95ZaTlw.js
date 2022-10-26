if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("PolarisCreationV2Strings", ["fbt", "PolarisIGCoreText", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    d = h._("Now you can create and share posts directly from your computer.");
    var j = h._("Next"),
        k = h._("Create new post"),
        l = h._("Crop"),
        m = h._("Edit"),
        n = h._("Create new post"),
        o = h._("New reel"),
        p = h._("Sharing"),
        q = h._("Post shared"),
        r = h._("Reel shared"),
        s = h._("Drag photos and videos here"),
        t = h._("Add photos and videos to create a new post."),
        u = h._("Icon to represent media such as images or videos"),
        v = h._("You can choose more than one at a time."),
        w = h._("Supported file types: image\/jpeg, image\/png, video\/mp4 and video\/quicktime."),
        x = h._("Select from computer"),
        y = h._("Select from device"),
        z = h._("Select other files"),
        A = h._("Share"),
        B = h._("Write a caption..."),
        C = h._("Filters"),
        D = h._("Adjustments"),
        E = h._("Video settings"),
        F = h._("Cover photo"),
        G = h._("Select from computer"),
        H = h._("Select from device"),
        I = h._("Trim"),
        J = h._("Sound on"),
        K = h._("Video has no audio"),
        L = h._("Your reel will be shared with your followers in their feeds and can be seen on your profile. It may also appear in places like Reels, where anyone can see it."),
        M = h._("Your followers can see your reel in their feeds and on your profile."),
        N = h._("Select crop"),
        O = h._("Select zoom"),
        P = h._("Open media gallery"),
        Q = h._("Choose size"),
        R = h._("Original"),
        S = h._("Original (unsupported size)"),
        T = h._("1:1"),
        aa = h._("4:5"),
        ba = h._("9:16"),
        ca = h._("16:9"),
        da = h._("Click and drag to reorder"),
        ea = h._("Captions longer than 125 characters appear truncated in feed."),
        fa = h._("Add location"),
        ga = h._("Accessibility"),
        ha = h._("Alt text describes your photos for people with visual impairments. Alt text will be automatically created for your photos or you can choose to write your own."),
        ia = h._("Write alt text..."),
        ja = h._("Expand to add alt text"),
        ka = h._("Auto-generated captions"),
        la = h._("Auto-generated captions added to your video help people with hearing impairments. They are only displayed on the iOS and Android apps and may take a few minutes to appear."),
        ma = h._("Photo outline icon"),
        na = h._("Crop square icon"),
        oa = h._("Crop portrait icon"),
        pa = h._("Crop landscape icon"),
        qa = h._("Discard"),
        ra = h._("Cancel"),
        sa = h._("Discard photo?"),
        ta = h._("This will remove the photo from your post."),
        ua = h._("Discard video?"),
        va = h._("This will remove the video from your post."),
        wa = h._("Discard post?"),
        xa = h._("If you leave, your edits won't be saved."),
        ya = h._("Delete photo?"),
        za = h._("If you delete this photo, you can restore it within 30 days by going to the menu in your profile > Your activity > Recently deleted in the Instagram app. After 30 days, it will be permanently deleted."),
        Aa = h._("Delete video?"),
        Ba = h._("If you delete this video, you can restore it within 30 days by going to the menu in your profile > Your activity > Recently deleted in the Instagram app. After 30 days, it will be permanently deleted."),
        Ca = h._("Tag people"),
        Da = h._("Add tag"),
        Ea = h._("Tagged people"),
        Fa = h._("Remove tag"),
        Ga = h._("Click photo to tag people"),
        Ha = h._("Your post has been shared."),
        Ia = h._("Your reel has been shared."),
        Ja = h._("Unable to upload. This file type is not supported."),
        Ka = h._("Unable to upload. One or more file types you selected are not supported."),
        La = h._("Unable to upload. Videos longer than 60 seconds are not supported."),
        Ma = h._("You cannot upload more than 10 files. Delete one or more files to upload another one.");

    function a(a) {
        return a === 1 ? h._("The last file was not uploaded. You can only choose 10 or fewer files.") : h._("{number of files} files were not uploaded. You can only choose 10 or fewer files.", [h._param("number of files", a)])
    }
    var Na = h._("Unable to load upcoming events."),
        Oa = h._("Advanced settings"),
        Pa = h._("Turn off commenting"),
        Qa = h._("You can change this later by going to the \u00b7\u00b7\u00b7 menu at the top of your post."),
        Ra = h._("Hide like and view counts on this post"),
        Sa = h._("Only you will see the total number of likes and views on this post. You can change this later by going to the \u00b7\u00b7\u00b7 menu at the top of the post. To hide like counts on other people's posts, go to your account settings."),
        Ta = h._("Learn more"),
        Ua = h._("Comments"),
        Va = h._("Preview post"),
        Wa = h._("Post Preview"),
        Xa = h._("Add event"),
        Ya = h._("Select event"),
        Za = h._("Something went wrong"),
        $a = h._("Sorry, something went wrong. Please try again."),
        ab = h._("Videos must be 3 seconds or more"),
        bb = h._("Videos must be one minute or less"),
        cb = h._("Videos must be one hour or less"),
        db = h._("One or more videos were too long to be uploaded."),
        eb = h._("File must be 1GB or less"),
        fb = h._("Files must be 1KB or more"),
        gb = h._("This file is not supported"),
        hb = h._("These files are not supported"),
        ib = h._("This video file could not be read by your browser"),
        jb = h._("Video is too long"),
        kb = h._("File is too large"),
        lb = h._("File too small"),
        mb = h._("Video file unreadable"),
        nb = h._("File couldn't be uploaded"),
        ob = h._("Files couldn't be uploaded"),
        pb = h._("Video couldn't be uploaded");

    function b(a) {
        return h._("{filename} could not be uploaded.", [h._param("filename", i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
            color: "ig-secondary-text",
            children: a
        }))])
    }

    function e(a) {
        return h._("+{number of files} others", [h._param("number of files", a)])
    }

    function f(a) {
        return h._("{filename} is too short. To continue, choose a longer video.", [h._param("filename", i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
            color: "ig-secondary-text",
            children: a
        }))])
    }

    function U(a) {
        return h._("{filename} is too long. To continue, choose a shorter video.", [h._param("filename", i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
            color: "ig-secondary-text",
            children: a
        }))])
    }

    function qb(a) {
        return U(a)
    }

    function rb(a) {
        return U(a)
    }

    function sb(a) {
        return h._("If any videos are longer than one minute, you can only post one video at a time.")
    }

    function tb(a) {
        return h._("{filename} is too large. To continue, choose a file that's 1GB or less.", [h._param("filename", i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
            color: "ig-secondary-text",
            children: a
        }))])
    }

    function ub(a) {
        return h._("{filename} is too small. To continue, choose a file that's 1KB or more", [h._param("filename", i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
            color: "ig-secondary-text",
            children: a
        }))])
    }

    function vb(a) {
        return h._("{filename} could not be uploaded. To continue, choose another file.", [h._param("filename", i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
            color: "ig-secondary-text",
            children: a
        }))])
    }
    var wb = h._("Post couldn't be shared"),
        xb = h._("Your post could not be shared. Please try again."),
        yb = h._("Something went wrong"),
        zb = h._("Something went wrong. Please try again."),
        Ab = h._("Try again"),
        Bb = h._("This video is too long. To continue, choose a video that is one minute or less."),
        Cb = h._("This video is too short. To continue, choose a video that is 3 seconds or more."),
        Db = h._("You cannot add photos or videos because this video is longer than one minute."),
        Eb = h._("This file is too large. To continue, choose a file that is 100MB or less."),
        Fb = h._("This file is too small. To continue, choose a file that is 1KB or more."),
        Gb = h._("The video file you selected could not be uploaded."),
        Hb = h._("Post to IGTV"),
        V = h._("Brightness"),
        W = h._("Contrast"),
        X = h._("Fade"),
        Y = h._("Saturation"),
        Z = h._("Temperature"),
        $ = h._("Vignette"),
        Ib = {
            brightness: V,
            contrast: W,
            fade: X,
            saturation: Y,
            temperature: Z,
            vignette: $
        },
        Jb = h._("Reset"),
        Kb = h._("Edit info"),
        Lb = h._("Done");
    g.NAV_ICON_DISCOVERY_TOOLTIP_TEXT = d;
    g.NEXT_TEXT = j;
    g.NEW_POST_TEXT = k;
    g.CROP_TEXT = l;
    g.EDIT_TEXT = m;
    g.COMPOSE_TEXT = n;
    g.COMPOSE_TEXT_REELS = o;
    g.UPLOADING_TEXT = p;
    g.UPLOAD_SUCCESS_TEXT = q;
    g.UPLOAD_REEL_SUCCESS_TEXT = r;
    g.DRAG_AND_DROP_TITLE = s;
    g.ADD_MEDIA_TITLE = t;
    g.MEDIA_OUTLINE_ALT = u;
    g.DRAG_AND_DROP_BODY = v;
    g.SUPPORTED_FILES_TEXT = w;
    g.SELECT_TEXT = x;
    g.SELECT_FROM_DEVICE_TEXT = y;
    g.SELECT_OTHER_TEXT = z;
    g.SHARE_CTA_TEXT = A;
    g.CAPTION_PLACEHOLDER_TEXT = B;
    g.FILTER_TAB = C;
    g.EDIT_TAB = D;
    g.VIDEO_SETTINGS_TAB = E;
    g.COVER_PHOTO_LABEL = F;
    g.SELECT_COVER_PHOTO_TEXT = G;
    g.SELECT_COVER_PHOTO_FROM_DEVICE_TEXT = H;
    g.TRIM_VIDEO_LABEL = I;
    g.SOUND_ON_LABEL = J;
    g.NO_AUDIO_LABEL = K;
    g.REELS_DISCLAIMER_PUBLIC = L;
    g.REELS_DISCLAIMER_PRIVATE = M;
    g.SELECT_CROP_ALT_TEXT = N;
    g.ZOOM_ALT_TEXT = O;
    g.GALLERY_ALT_TEXT = P;
    g.SELECT_CROP_HEADER_TEXT = Q;
    g.SELECT_CROP_ORIGINAL = R;
    g.SELECT_CROP_ORIGINAL_UNSUPPORTED = S;
    g.SELECT_CROP_SQUARE = T;
    g.SELECT_CROP_PORTRAIT = aa;
    g.SELECT_CROP_PORTRAIT_DOVETAIL = ba;
    g.SELECT_CROP_LANDSCAPE = ca;
    g.REORDER_TOOLTIP = da;
    g.CAPTION_TRUNCATION_TOOLTIP = ea;
    g.LOCATION_SEARCH_PLACEHOLDER = fa;
    g.ALT_TEXT_TITLE = ga;
    g.ALT_TEXT_SUBTITLE = ha;
    g.ALT_TEXT_PLACEHOLDER = ia;
    g.ALT_TEXT_DROPDOWN_ICON_ALT_TEXT = ja;
    g.AUTO_GENERATED_CAPTIONS_TITLE = ka;
    g.AUTO_GENERATED_CAPTIONS_BODY = la;
    g.PHOTO_OUTLINE_ALT = ma;
    g.CROP_SQUARE_ALT = na;
    g.CROP_PORTRAIT_ALT = oa;
    g.CROP_LANDSCAPE_ALT = pa;
    g.DISCARD_CTA_TEXT = qa;
    g.CANCEL_DISCARD_CTA_TEXT = ra;
    g.DISCARD_PHOTO_TITLE = sa;
    g.DISCARD_PHOTO_BODY = ta;
    g.DISCARD_VIDEO_TITLE = ua;
    g.DISCARD_VIDEO_BODY = va;
    g.DISCARD_POST_TITLE = wa;
    g.DISCARD_POST_BODY = xa;
    g.DELETE_PHOTO_TITLE = ya;
    g.DELETE_PHOTO_BODY = za;
    g.DELETE_VIDEO_TITLE = Aa;
    g.DELETE_VIDEO_BODY = Ba;
    g.TAG_A_PERSON = Ca;
    g.TAG_ANOTHER_PERSON = Da;
    g.TAGGED_PEOPLE = Ea;
    g.REMOVE_TAG_ALT = Fa;
    g.CLICK_PHOTO_TAG = Ga;
    g.POST_UPLOADED_TEXT = Ha;
    g.REEL_UPLOADED_TEXT = Ia;
    g.SINGLE_FILE_UPLOAD_ERROR = Ja;
    g.MULTIPLE_FILE_UPLOAD_ERROR = Ka;
    g.VIDEO_TOO_LONG_UPLOAD_ERROR = La;
    g.MAX_MEDIA_ADDED_ERROR = Ma;
    g.maxMediaAddedError = a;
    g.ADD_EVENT_LIST_LOAD_ERROR = Na;
    g.ADVANCED_SETTINGS = Oa;
    g.TURN_OFF_COMMENTING = Pa;
    g.TURN_OFF_COMMENTING_SUBTITLE = Qa;
    g.HIDE_LIKE_VIEW_COUNTS = Ra;
    g.HIDE_LIKE_VIEW_COUNTS_SUBTITLE = Sa;
    g.HIDE_LIKE_VIEW_COUNTS_LEARN_MORE = Ta;
    g.COMMENTS_SUBHEADER = Ua;
    g.PREVIEW_POST = Va;
    g.PREVIEW_POST_TITLE = Wa;
    g.ADD_EVENT = Xa;
    g.SELECT_EVENT = Ya;
    g.ERROR_HEADER = Za;
    g.ERROR_BODY = $a;
    g.VIDEO_TOO_SHORT_HEADER = ab;
    g.VIDEO_TOO_LONG_HEADER = bb;
    g.VIDEO_TOO_LONG_DOVETAIL_HEADER = cb;
    g.VIDEO_TOO_LONG_GALLERY_DOVETAIL_HEADER = db;
    g.FILE_TOO_LARGE_HEADER = eb;
    g.FILE_TOO_SMALL_HEADER = fb;
    g.FILE_NOT_SUPPORTED_HEADER = gb;
    g.FILES_NOT_SUPPORTED_HEADER = hb;
    g.VIDEO_FILE_READ_FAILED_HEADER = ib;
    g.VIDEO_TOO_LONG_TITLE = jb;
    g.FILE_TOO_LARGE_TITLE = kb;
    g.FILE_TOO_SMALL_TITLE = lb;
    g.VIDEO_FILE_READ_FAILED_TITLE = mb;
    g.FILE_COULDNT_BE_UPLOADED_TITLE = nb;
    g.FILES_COULDNT_BE_UPLOADED_TITLE = ob;
    g.VIDEO_COULDNT_BE_UPLOADED_TITLE = pb;
    g.fileCouldntBeUploaded = b;
    g.numfilesCouldntBeUploaded = e;
    g.videoIsTooShortBody = f;
    g.videoIsTooLongBodyV2 = U;
    g.videoIsTooLongBody = qb;
    g.videoIsTooLongDovetailBody = rb;
    g.videoIsTooLongForGalleryBody = sb;
    g.fileIsTooLargeBody = tb;
    g.fileIsTooSmallBody = ub;
    g.videoFileReadFailedBody = vb;
    g.UPLOAD_FAILED_TITLE = wb;
    g.UPLOAD_FAILED_HEADER = xb;
    g.SOMETHING_WENT_WRONG_TITLE = yb;
    g.SOMETHING_WENT_WRONG_HEADER = zb;
    g.TRY_AGAIN_CTA_TEXT = Ab;
    g.VIDEO_TOO_LONG_MESSAGE = Bb;
    g.VIDEO_TOO_SHORT_MESSAGE = Cb;
    g.CANNOT_ADD_MEDIA_BECAUSE_VIDEO_TOO_LONG_FOR_GALLERY_MESSAGE = Db;
    g.FILE_TOO_LARGE_MESSAGE = Eb;
    g.FILE_TOO_SMALL_MESSAGE = Fb;
    g.VIDEO_FILE_READ_FAILED_MESSAGE = Gb;
    g.POST_TO_IGTV = Hb;
    g.ADJUSTMENT_FILTER_NAME_BRIGHTNESS = V;
    g.ADJUSTMENT_FILTER_NAME_CONTRAST = W;
    g.ADJUSTMENT_FILTER_NAME_FADE = X;
    g.ADJUSTMENT_FILTER_NAME_SATURATION = Y;
    g.ADJUSTMENT_FILTER_NAME_TEMPERATURE = Z;
    g.ADJUSTMENT_FILTER_NAME_VIGNETTE = $;
    g.ADJUSTMENT_FILTER_MAPPING = Ib;
    g.RESET_ADJUSTMENT = Jb;
    g.EDIT_INFO = Kb;
    g.DONE_EDIT_CTA_TEXT = Lb
}, 98);
__d("PolarisCreationCompositionGrid.react", ["cx", "react"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = [{
            left: "33%",
            top: "0%",
            width: 1,
            height: "100%"
        }, {
            right: "33%",
            top: "0%",
            width: 1,
            height: "100%"
        }, {
            top: "33%",
            left: "0%",
            height: 1,
            width: "100%"
        }, {
            bottom: "33%",
            left: "0%",
            height: 1,
            width: "100%"
        }];

    function a(a) {
        return i.jsx("div", {
            className: "_aa67",
            children: j.map(function(a, b) {
                return i.jsx("div", {
                    className: "_aa68",
                    style: a
                }, b)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisBasicAdjust", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\nuniform float brightness;\nuniform float contrast;\nuniform float saturation;\nuniform float temperature;\nuniform float vignette;\nuniform float fade;\nuniform float TOOL_ON_EPSILON;\nuniform float tintShadowsIntensity;\nuniform float tintHighlightsIntensity;\nuniform vec3 tintShadowsColor;\nuniform vec3 tintHighlightsColor;\n\nvec3 rgb_to_hsv(vec3 c) {\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n    vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\nvec3 hsv_to_rgb(vec3 c) {\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvec3 bowRgbChannels(vec3 inVal, float mag) {\n    vec3 outVal;\n    float power = 1.0 + abs(mag);\n\n    if (mag < 0.0) {\n        power = 1.0 / power;\n    }\n\n    outVal.r = 1.0 - pow((1.0 - inVal.r), power);\n    outVal.g = 1.0 - pow((1.0 - inVal.g), power);\n    outVal.b = 1.0 - pow((1.0 - inVal.b), power);\n\n    return outVal;\n\n}\n\nfloat getLuma(vec3 rgbP) {\n    return  (0.299 * rgbP.r) +\n    (0.587 * rgbP.g) +\n    (0.114 * rgbP.b);\n}\n\nvec3 rgbToYuv(vec3 inP) {\n    vec3 outP;\n    outP.r = getLuma(inP);\n    outP.g = (1.0/1.772)*(inP.b - outP.r);\n    outP.b = (1.0/1.402)*(inP.r - outP.r);\n    return outP;\n}\n\nvec3 yuvToRgb(vec3 inP) {\n    float y = inP.r;\n    float u = inP.g;\n    float v = inP.b;\n    vec3 outP;\n    outP.r = 1.402 * v + y;\n    outP.g = (y - (0.299 * 1.402 / 0.587) * v -\n             (0.114 * 1.772 / 0.587) * u);\n    outP.b = 1.772 * u + y;\n    return outP;\n}\n\nvec3 adjustTemperature(float tempDelta, vec3 inRgb) {\n    vec3 yuvVec;\n\n    if (tempDelta > 0.0 ) {\n        yuvVec =  vec3(0.1765, -0.1255, 0.0902);\n    } else {\n        yuvVec = -vec3(0.0588,  0.1569, -0.1255);\n    }\n    vec3 yuvColor = rgbToYuv(inRgb);\n\n    float luma = yuvColor.r;\n\n    float curveScale = sin(luma * 3.14159);\n\n    yuvColor += 0.375 * tempDelta * curveScale * yuvVec;\n    inRgb = yuvToRgb(yuvColor);\n    return inRgb;\n}\n\nfloat linearRamp(float minVal, float maxVal, float value) {\n    return clamp((value - minVal)/(maxVal - minVal), 0.0, 1.0);\n}\n\nfloat easeInOutSigmoid(float value, float strength) {\n    float t = 1.0 / (1.0 - strength);\n    if (value > 0.5) {\n        return 1.0 - pow(2.0 - 2.0 * value, t) * 0.5;\n    } else {\n        return pow(2.0 * value, t) * 0.5;\n    }\n}\n\nvec3 softOverlayBlend(vec3 a, float mag) {\n    return pow(a, vec3(1.0 / (1.0 - mag)));\n}\n\nvec3 fadeRaisedSFunction(vec3 color) {\n  vec3 co1 = vec3(-0.9772);\n  vec3 co2 = vec3(1.708);\n  vec3 co3 = vec3(-0.1603);\n  vec3 co4 = vec3(0.2878);\n\n  vec3 comp1 = co1 * pow(color, vec3(3.0));\n  vec3 comp2 = co2 * pow(color, vec3(2.0));\n  vec3 comp3 = co3 * color;\n  vec3 comp4 = co4;\n\n  return comp1 + comp2 + comp3 + comp4;\n}\n\nvec3 tintRaiseShadowsCurve(vec3 color) {\n  vec3 co1 = vec3(-0.003671);\n  vec3 co2 = vec3(0.3842);\n  vec3 co3 = vec3(0.3764);\n  vec3 co4 = vec3(0.2515);\n\n  vec3 comp1 = co1 * pow(color, vec3(3.0));\n  vec3 comp2 = co2 * pow(color, vec3(2.0));\n  vec3 comp3 = co3 * color;\n  vec3 comp4 = co4;\n\n  return comp1 + comp2 + comp3 + comp4;\n}\n\nvec3 fadeAdjust(vec3 texel, float fade) {\n  vec3 faded = fadeRaisedSFunction(texel);\n  return (texel * (1.0 - fade)) + (faded * fade);\n}\n\nvec3 tintShadows(vec3 texel, vec3 tintColor, float tintAmount) {\n  vec3 raisedShadows = tintRaiseShadowsCurve(texel);\n\n  vec3 tintedShadows = mix(texel, raisedShadows, tintColor);\n  vec3 tintedShadowsWithAmount = mix(texel, tintedShadows, tintAmount);\n\n  return clamp(tintedShadowsWithAmount, 0.0, 1.0);\n}\n\nvec3 tintHighlights(vec3 texel, vec3 tintColor, float tintAmount) {\n  vec3 loweredHighlights = vec3(1.0) - tintRaiseShadowsCurve(vec3(1.0) - texel);\n\n  vec3 tintedHighlights = mix(texel, loweredHighlights, (vec3(1.0) - tintColor));\n  vec3 tintedHighlightsWithAmount = mix(texel, tintedHighlights, tintAmount);\n\n  return clamp(tintedHighlightsWithAmount, 0.0, 1.0);\n}\n\nvec3 basicAdjust(vec3 texel)\n{\n    if (abs(fade) > TOOL_ON_EPSILON) {\n       texel = fadeAdjust(texel, (fade * 0.9));\n    }\n\n    if (abs(tintShadowsIntensity) > TOOL_ON_EPSILON) {\n       texel = tintShadows(texel, tintShadowsColor, (tintShadowsIntensity * 2.0));\n    }\n\n    if (abs(tintHighlightsIntensity) > TOOL_ON_EPSILON) {\n       texel = tintHighlights(texel, tintHighlightsColor, (tintHighlightsIntensity * 2.0));\n    }\n\n    vec3 hsv = rgb_to_hsv(texel.rgb);\n\n    if (abs(saturation) > TOOL_ON_EPSILON) {\n       float saturationFactor = 1.0 + saturation;\n       hsv.y = hsv.y * saturationFactor;\n       hsv.y = clamp(hsv.y, 0.0, 1.0);\n    }\n\n    texel.rgb = hsv_to_rgb(hsv);\n\n    if (abs(contrast) > TOOL_ON_EPSILON) {\n       float strength = contrast * 0.5;\n\n       vec3 yuv = rgbToYuv(texel.rgb);\n       yuv.x = easeInOutSigmoid(yuv.x, strength);\n       yuv.y = easeInOutSigmoid(yuv.y + 0.5, strength * 0.65) - 0.5;\n       yuv.z = easeInOutSigmoid(yuv.z + 0.5, strength * 0.65) - 0.5;\n       texel.rgb = yuvToRgb(yuv);\n    }\n\n    if (abs(brightness) > TOOL_ON_EPSILON) {\n       texel.rgb = clamp(texel.rgb, 0.0, 1.0);\n       texel.rgb = bowRgbChannels(texel.rgb, brightness * 1.1);\n    }\n\n    if (abs(temperature) > TOOL_ON_EPSILON) {\n       texel.rgb = adjustTemperature(temperature, texel.rgb);\n    }\n\n    if (abs(vignette) > TOOL_ON_EPSILON ) {\n        const float midpoint = 0.7;\n        const float fuzziness = 0.62;\n        float radDist = length(transformedTexCoord - 0.5) / sqrt(0.5);\n        float mag = easeInOutSigmoid(radDist * midpoint, fuzziness) * vignette * 0.645;\n        texel.rgb = mix(softOverlayBlend(texel.rgb, mag), vec3(0.0), mag * mag);\n    }\n\n    return texel;\n}\n";
    f.BasicAdjust = a
}, 66);
__d("PolarisSharedFilterBody", ["PolarisBasicAdjust"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = "\n" + d("PolarisBasicAdjust").BasicAdjust + "\nvoid main() {\n  vec4 color = texture2D(image, transformedTexCoord);\n  color.rgb = basicAdjust(color.rgb);\n  gl_FragColor = color * (1.0 - filterStrength) + filter(color) * filterStrength;\n}\n";
    g.SharedFilterBody = a
}, 98);
__d("PolarisSharedFilterHeader", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\n#define VIDEO_MODE false\n#define DEFAULT_UPLOAD_SIZE 640.0\n\nprecision highp float;\nprecision highp int;\n\nvarying vec2 transformedTexCoord;\nuniform float filterStrength;\nuniform sampler2D image;\n";
    f.SharedFilterHeader = a
}, 66);
__d("PolarisVertex", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\nattribute vec3 position;\nvarying vec2 transformedTexCoord;\n\nvoid main(void) {\n  mat4 posToTextureCoordMatrix = mat4(\n     0.5,  0.0,  0.0,  0.0,\n     0.0, -0.5,  0.0,  0.0,\n     0.0,  0.0,  1.0,  0.0,\n     0.5,  0.5,  0.5,  1.0\n  );\n  vec4 res = posToTextureCoordMatrix * vec4(position, 1.0);\n  transformedTexCoord = res.xy;\n  gl_Position = vec4(position, 1);\n}\n";
    f.Vertex = a
}, 66);
__d("PolarisFilterProgram", ["PolarisCreationConstants", "PolarisSharedFilterBody", "PolarisSharedFilterHeader", "PolarisVertex", "Polarisunexpected", "Promise"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
        i = new Map(),
        j, k, l = [1, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, -1, 1, 0];

    function m(a) {
        a !== h && (h = a, i = new Map(), j = null, k = null)
    }

    function n(a) {
        m(a);
        if (j === null) {
            var b = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, b);
            a.bufferData(a.ARRAY_BUFFER, new Float32Array(l), a.STATIC_DRAW);
            j = b
        }
        return j
    }

    function o(a, b, d) {
        a.shaderSource(b, d);
        a.compileShader(b);
        d = a.getShaderParameter(b, a.COMPILE_STATUS);
        if (!d) {
            d = a.getShaderInfoLog(b) || "no logs";
            c("Polarisunexpected")("[filters] Could not compile shader: " + d)
        }
    }

    function p(a) {
        m(a);
        k === null && (k = a.createShader(a.VERTEX_SHADER), o(a, k, d("PolarisVertex").Vertex));
        return k
    }

    function q(a, b, c) {
        var d = a.createTexture();
        a.activeTexture(a.TEXTURE0 + c);
        a.bindTexture(a.TEXTURE_2D, d);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
        return d
    }

    function r(a, c, d) {
        m(a);
        return new(b("Promise"))(function(b, e) {
            var f = i.get(c);
            if (f != null) {
                var g = f[0];
                f[1];
                a.activeTexture(a.TEXTURE0 + d);
                a.bindTexture(a.TEXTURE_2D, g);
                b(f)
            } else if (typeof c === "string") {
                var h = c.slice(0, 50),
                    j = new Image();
                j.onload = function() {
                    var e = q(a, j, d);
                    e = [e, j];
                    i.set(c, e);
                    b(e)
                };
                j.onerror = function(a) {
                    e(new Error("Cannot load texture " + h))
                };
                j.src = c
            } else {
                g = q(a, c, d);
                f = [g, c];
                i.set(c, f);
                b(f)
            }
        })
    }

    function s(a) {
        return d("PolarisSharedFilterHeader").SharedFilterHeader + a + d("PolarisSharedFilterBody").SharedFilterBody
    }
    a = function() {
        function a(a, b, c, d) {
            this.$1 = !1, this.$8 = [], this.$9 = !1, this.$3 = a, this.$6 = b, this.$2 = c, this.$8 = d
        }
        var e = a.prototype;
        e.getFragmentSource = function() {
            return this.$2
        };
        e.getTextures = function() {
            return this.$8
        };
        e.getName = function() {
            return this.$6
        };
        e.init = function() {
            if (this.$1) return;
            this.$1 = !0;
            var a = this.$3;
            this.$7 = a.createProgram();
            var b = p(a);
            a.attachShader(this.$7, b);
            b = a.createShader(a.FRAGMENT_SHADER);
            o(a, b, s(this.getFragmentSource()));
            a.attachShader(this.$7, b);
            a.linkProgram(this.$7);
            b = a.getProgramParameter(this.$7, a.LINK_STATUS);
            if (!b) {
                b = a.getProgramInfoLog(this.$7) || "no logs";
                c("Polarisunexpected")("[filters] program failed to link: " + b)
            }
            n(a);
            b = a.getAttribLocation(this.$7, "position");
            a.vertexAttribPointer(b, 3, a.FLOAT, !1, 0, 0);
            a.enableVertexAttribArray(b);
            this.loadAssets()
        };
        e.loadAssets = function() {
            var a = this,
                c = this.$3,
                d = this.getTextures().map(function(b, d) {
                    var e = b[0];
                    b = b[1];
                    var f = d + 1;
                    return r(c, b, f).then(function() {
                        if (a.$9) {
                            var b = c.getUniformLocation(a.$7, e);
                            c.uniform1i(b, f)
                        }
                    })
                });
            this.$5 = b("Promise").all(d);
            return this.$5
        };
        e.setImage = function(a) {
            var b = this,
                c = this.$3;
            this.$4 = r(c, a, 0).then(function(a) {
                if (b.$9) {
                    var c = b.$3.getUniformLocation(b.$7, "image");
                    b.$3.uniform1i(c, 0)
                }
                return a
            });
            return this.$4
        };
        e.setParam = function(a, b) {
            var d = this.$3.getUniformLocation(this.$7, a);
            d || c("Polarisunexpected")("unknown uniform " + a);
            this.$3.uniform1f(d, b)
        };
        e.waitForAssetLoad = function() {
            return b("Promise").all([this.$4, this.$5])
        };
        e.use = function() {
            this.init(), this.$3.useProgram(this.$7), this.setParam("filterStrength", 1), this.setParam("TOOL_ON_EPSILON", d("PolarisCreationConstants").TOOL_ON_EPSILON_VALUE), this.$9 = !0
        };
        e.unuse = function() {
            this.$9 = !1
        };
        return a
    }();
    g.invalidateCacheIfNeeded = m;
    g.FilterProgram = a
}, 98);
__d("PolarisFilterBuilder", ["PolarisFilterProgram"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.setName = function(a) {
            this.$3 = a;
            return this
        };
        b.setShader = function(a) {
            this.$2 = a;
            return this
        };
        b.setThumbnail = function(a, b) {
            this.$4 = a;
            this.$5 = b;
            return this
        };
        b.addTexture = function(a, b) {
            this.$1.push([a, b]);
            return this
        };
        b.getName = function() {
            return this.$3
        };
        b.getThumbnail = function(a) {
            return a > 1.5 ? this.$5 : this.$4
        };
        b.createFilter = function(a) {
            return new(d("PolarisFilterProgram").FilterProgram)(a, this.$3, this.$2, this.$1)
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("PolarisClarendon", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\nuniform sampler2D map;\nuniform sampler2D map2;\n\nvec4 filter(vec4 color) {\n  vec3 texel = color.rgb;\n  texel.r = texture2D(map, vec2(texel.r, 0.5)).r;\n  texel.g = texture2D(map, vec2(texel.g, 0.5)).g;\n  texel.b = texture2D(map, vec2(texel.b, 0.5)).b;\n  float luma = dot(vec3(0.2126, 0.7152, 0.0722), texel);\n  float shadowCoeff = 0.35 * max(0.0, 1.0 - luma);\n  texel = mix(texel, max(vec3(0.0), 2.0 * texel - 1.0), shadowCoeff);\n  texel = mix(texel, vec3(luma), -0.3);\n  texel.r = texture2D(map2, vec2(texel.r, 0.5)).r;\n  texel.g = texture2D(map2, vec2(texel.g, 0.5)).g;\n  texel.b = texture2D(map2, vec2(texel.b, 0.5)).b;\n  return vec4(texel, 1.0);\n}";
    f.Clarendon = a
}, 66);
__d("PolarisGingham", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\nuniform sampler2D map;\nuniform sampler2D mapLgg;\n\nvec4 filter(vec4 color) {\n  vec3 texel = color.rgb;\n  texel = min(texel * 1.1343, vec3(1.0));\n  texel.r = texture2D(map, vec2(texel.r, 0.5)).r;\n  texel.g = texture2D(map, vec2(texel.g, 0.5)).g;\n  texel.b = texture2D(map, vec2(texel.b, 0.5)).b;\n  vec3 shadowColor = vec3(0.956862, 0.0, 0.83529);\n  float luma = dot(vec3(0.309, 0.609, 0.082), texel);\n  vec3 shadowBlend = 2.0 * shadowColor * texel;\n  float shadowAmount = 0.6 * max(0.0, (1.0 - 4.0 * luma));\n  texel = mix(texel, shadowBlend, shadowAmount);\n  vec3 lgg;\n  lgg.r = texture2D(mapLgg, vec2(texel.r, 0.5)).r;\n  lgg.g = texture2D(mapLgg, vec2(texel.g, 0.5)).g;\n  lgg.b = texture2D(mapLgg, vec2(texel.b, 0.5)).b;\n  texel = mix(texel, lgg, min(1.0, 0.8 + luma));\n  return vec4(texel, 1.0);\n}";
    f.Gingham = a
}, 66);
__d("PolarisColorMapShared", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\nvec3 ig_texture3D(vec3 texel) {\n  float size = 33.0;\n  float sliceSize = 1.0 / size;\n  float slicePixelSize = sliceSize / size;\n  float sliceInnerSize = slicePixelSize * (size - 1.0);\n  float xOffset = 0.5 * sliceSize + texel.x * (1.0 - sliceSize);\n  float yOffset = 0.5 * slicePixelSize + texel.y * sliceInnerSize;\n  float zOffset = texel.z * (size - 1.0);\n  float zSlice0 = floor(zOffset);\n  float zSlice1 = zSlice0 + 1.0;\n  float s0 = yOffset + (zSlice0 * sliceSize);\n  float s1 = yOffset + (zSlice1 * sliceSize);\n  vec4 slice0Color = texture2D(map, vec2(xOffset, s0));\n  vec4 slice1Color = texture2D(map, vec2(xOffset, s1));\n  return mix(slice0Color, slice1Color, zOffset - zSlice0).rgb;\n}\n";
    f.ColorMapShared = a
}, 66);
__d("PolarisLark", ["PolarisColorMapShared"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = "\nuniform sampler2D map;\n" + d("PolarisColorMapShared").ColorMapShared + "\nvec4 filter(vec4 color) {\n  vec3 texel = color.rgb;\n  texel = ig_texture3D(texel);\n  return vec4(texel, 1.0);\n}\n";
    g.Lark = a
}, 98);
__d("PolarisBlendOverlayShared", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\nfloat blendOverlay(float base, float blend) {\n  return (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)));\n}\n\nvec3 blend(vec3 base, vec3 blend) {\n  return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));\n}\n";
    f.BlendOverlayShared = a
}, 66);
__d("PolarisLudwig", ["PolarisBlendOverlayShared", "PolarisColorMapShared"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = "\nuniform sampler2D map;\n" + d("PolarisColorMapShared").ColorMapShared + "\n" + d("PolarisBlendOverlayShared").BlendOverlayShared + "\nvec4 filter(vec4 color) {\n  vec3 texel = color.rgb;\n  texel = ig_texture3D(texel);\n  {\n    vec4 gradStart = vec4(vec3(0.125), 1.0);\n    vec4 gradEnd  = vec4(vec3(0.258), 0.0);\n    vec4 gradColor = mix(gradStart, gradEnd, transformedTexCoord.y);\n    vec3 gradBlend = blend(texel, gradColor.rgb);\n    float gradOpac = 0.20 * gradColor.a;\n    texel.rgb = gradOpac * gradBlend + (1.0 - gradOpac) * texel.rgb;\n  }\n  return vec4(texel, 1.0);\n}\n";
    g.Ludwig = a
}, 98);
__d("PolarisMoon", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\nuniform sampler2D map1;\nuniform sampler2D map2;\n\nvec4 filter(vec4 color) {\n  vec3 texel = color.rgb;\n  texel.r = texture2D(map1, vec2(texel.r, 0.5)).r;\n  texel.g = texture2D(map1, vec2(texel.g, 0.5)).g;\n  texel.b = texture2D(map1, vec2(texel.b, 0.5)).b;\n  vec3 desat = vec3(dot(vec3(0.7, 0.2, 0.1), texel));\n  texel = mix(texel, desat, 0.79);\n  texel = vec3(min(1.0, 1.2 * dot(vec3(0.2, 0.7, 0.1), texel)));\n  texel.r = texture2D(map2, vec2(texel.r, 0.5)).r;\n  texel.g = texture2D(map2, vec2(texel.g, 0.5)).g;\n  texel.b = texture2D(map2, vec2(texel.b, 0.5)).b;\n  return vec4(texel, 1.0);\n}";
    f.Moon = a
}, 66);
__d("PolarisNormal", [], function(a, b, c, d, e, f) {
    "use strict";
    a = "\nvec4 filter(vec4 color) {\n  return color;\n}\n";
    f.Normal = a
}, 66);
__d("PolarisPerpetua", ["PolarisBlendOverlayShared", "PolarisColorMapShared"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = "\nuniform sampler2D map;\nuniform sampler2D overlay_map;\n" + d("PolarisColorMapShared").ColorMapShared + "\n" + d("PolarisBlendOverlayShared").BlendOverlayShared + "\nvec4 filter(vec4 color) {\n  vec3 texel = color.rgb;\n  texel = ig_texture3D(texel);\n  {\n    vec3 grain = texture2D(overlay_map, vec2(transformedTexCoord.x, 1.0 - transformedTexCoord.y)).rgb;\n    vec3 grained = blend(texel, grain);\n    texel.rgb = mix(texel.rgb, grained, 0.35);\n  }\n  return vec4(texel, 1.0);\n}\n";
    g.Perpetua = a
}, 98);
__d("PolarisSlumber", ["PolarisBlendOverlayShared", "PolarisColorMapShared"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = "\nuniform sampler2D map;\nuniform sampler2D overlay_map;\n" + d("PolarisColorMapShared").ColorMapShared + "\n" + d("PolarisBlendOverlayShared").BlendOverlayShared + "\nvec4 filter(vec4 color) {\n  vec3 texel = color.rgb;\n  texel = ig_texture3D(texel);\n  {\n    vec4 gradStart = vec4(vec3(0.125), 1.0);\n    vec4 gradEnd  = vec4(vec3(0.258), 0.0);\n    float gradCoord = transformedTexCoord.y;\n    gradCoord = clamp(gradCoord, 0.0, 1.0);\n    vec4 gradColor = mix(gradStart, gradEnd, gradCoord);\n    vec3 gradBlend = blend(texel, gradColor.rgb);\n    float gradOpac = 0.3 * gradColor.a;\n    texel.rgb = gradOpac * gradBlend + (1.0 - gradOpac) * texel.rgb;\n  }\n  return vec4(texel, 1.0);\n}\n";
    g.Slumber = a
}, 98);
__d("PolarisStandardColorMap", ["PolarisColorMapShared"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = "\nuniform sampler2D map;\n" + d("PolarisColorMapShared").ColorMapShared + "\nvec4 filter(vec4 color) {\n  vec3 texel = color.rgb;\n  texel = ig_texture3D(texel);\n  return vec4(texel, 1.0);\n}\n";
    g.StandardColorMap = a
}, 98);
__d("PolarisFilters", ["PolarisClarendon", "PolarisFilterBuilder", "PolarisGingham", "PolarisLark", "PolarisLudwig", "PolarisMoon", "PolarisNormal", "PolarisPerpetua", "PolarisSlumber", "PolarisStandardColorMap"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        normal: new(c("PolarisFilterBuilder"))().setName("Normal").setShader(d("PolarisNormal").Normal).setThumbnail("/images/instagram/xig/filters/Normal.jpg?__d=www", "/images/instagram/xig/filters/Normal-2x.jpg?__d=www"),
        clarendon: new(c("PolarisFilterBuilder"))().setName("Clarendon").setShader(d("PolarisClarendon").Clarendon).setThumbnail("/images/instagram/xig/filters/Clarendon.jpg?__d=www", "/images/instagram/xig/filters/Clarendon-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/video/clarendon/Glacial1.png?__d=www").addTexture("map2", "/images/instagram/xig/filters/assets/video/clarendon/Glacial2.png?__d=www"),
        gingham: new(c("PolarisFilterBuilder"))().setName("Gingham").setShader(d("PolarisGingham").Gingham).setThumbnail("/images/instagram/xig/filters/Gingham.jpg?__d=www", "/images/instagram/xig/filters/Gingham-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/video/gingham/curves1.png?__d=www").addTexture("mapLgg", "/images/instagram/xig/filters/assets/video/gingham/curves_lgg.png?__d=www"),
        moon: new(c("PolarisFilterBuilder"))().setName("Moon").setShader(d("PolarisMoon").Moon).setThumbnail("/images/instagram/xig/filters/Moon.jpg?__d=www", "/images/instagram/xig/filters/Moon-2x.jpg?__d=www").addTexture("map1", "/images/instagram/xig/filters/assets/video/moon/curves1.png?__d=www").addTexture("map2", "/images/instagram/xig/filters/assets/video/moon/curves2.png?__d=www"),
        lark: new(c("PolarisFilterBuilder"))().setName("Lark").setShader(d("PolarisLark").Lark).setThumbnail("/images/instagram/xig/filters/Lark.jpg?__d=www", "/images/instagram/xig/filters/Lark-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/lark/map.png?__d=www"),
        reyes: new(c("PolarisFilterBuilder"))().setName("Reyes").setShader(d("PolarisStandardColorMap").StandardColorMap).setThumbnail("/images/instagram/xig/filters/Reyes.jpg?__d=www", "/images/instagram/xig/filters/Reyes-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/reyes/map.png?__d=www"),
        juno: new(c("PolarisFilterBuilder"))().setName("Juno").setShader(d("PolarisStandardColorMap").StandardColorMap).setThumbnail("/images/instagram/xig/filters/Juno.jpg?__d=www", "/images/instagram/xig/filters/Juno-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/juno/map.png?__d=www"),
        slumber: new(c("PolarisFilterBuilder"))().setName("Slumber").setShader(d("PolarisSlumber").Slumber).setThumbnail("/images/instagram/xig/filters/Slumber.jpg?__d=www", "/images/instagram/xig/filters/Slumber-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/slumber/map.png?__d=www"),
        crema: new(c("PolarisFilterBuilder"))().setName("Crema").setShader(d("PolarisStandardColorMap").StandardColorMap).setThumbnail("/images/instagram/xig/filters/Crema.jpg?__d=www", "/images/instagram/xig/filters/Crema-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/crema/map.png?__d=www"),
        ludwig: new(c("PolarisFilterBuilder"))().setName("Ludwig").setShader(d("PolarisLudwig").Ludwig).setThumbnail("/images/instagram/xig/filters/Ludwig.jpg?__d=www", "/images/instagram/xig/filters/Ludwig-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/ludwig/map.png?__d=www"),
        aden: new(c("PolarisFilterBuilder"))().setName("Aden").setShader(d("PolarisStandardColorMap").StandardColorMap).setThumbnail("/images/instagram/xig/filters/Aden.jpg?__d=www", "/images/instagram/xig/filters/Aden-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/aden/map.png?__d=www"),
        perpetua: new(c("PolarisFilterBuilder"))().setName("Perpetua").setShader(d("PolarisPerpetua").Perpetua).setThumbnail("/images/instagram/xig/filters/Perpetua.jpg?__d=www", "/images/instagram/xig/filters/Perpetua-2x.jpg?__d=www").addTexture("map", "/images/instagram/xig/filters/assets/perpetua/map.png?__d=www").addTexture("overlay_map", "/images/instagram/xig/filters/assets/perpetua/overlay_map.png?__d=www")
    };
    a = Object.keys(h);
    b = function() {
        function a(a) {
            this.$1 = !1, this.$2 = {}, this.$3 = a
        }
        var b = a.prototype;
        b.initializeFilter = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) || (this.$2[a] = h[a].createFilter(this.$3))
        };
        b.getFilterProgram = function(a) {
            if (!Object.prototype.hasOwnProperty.call(h, a)) throw new Error("Filter " + a + " not found");
            this.initializeFilter(a);
            return this.$2[a]
        };
        return a
    }();
    g.FILTERS = h;
    g.FILTER_NAMES = a;
    g.Filters = b
}, 98);
__d("PolarisFilterGLContext", ["PolarisFilterProgram", "PolarisFilters", "Polarisunexpected", "Promise"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
        babelHelpers.inheritsLoose(a, b);

        function a() {
            var a;
            a = b.call(this, "GL context could not be created") || this;
            a.type = "gl_unsupported_error";
            return a
        }
        return a
    }(babelHelpers.wrapNativeSuper(Error));
    a = function() {
        function a(a) {
            this.$1 = 0;
            this.$4 = !1;
            this.$6 = !1;
            var b = {
                preserveDrawingBuffer: !0,
                antialias: !1
            };
            a = a.getContext("webgl", b) || a.getContext("experimental-webgl", b);
            if (!a) throw new h();
            this.$3 = a;
            this.$2 = new(d("PolarisFilters").Filters)(this.$3)
        }
        var e = a.prototype;
        e.init = function() {
            var a = this.$3;
            a.clearColor(1, 1, 1, 0);
            a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
        };
        e.destroy = function() {
            d("PolarisFilterProgram").invalidateCacheIfNeeded(null), this.stopDraw()
        };
        e.setFilter = function(a) {
            this.activeFilterName && this.$7().unuse();
            this.activeFilterName = a;
            a = this.$7();
            a.use();
            a = a.loadAssets();
            this.$8();
            return a
        };
        e.setImage = function(a) {
            a = this.$7().setImage(a);
            this.$8();
            return a
        };
        e.setParam = function(a, b) {
            this.$7().setParam(a, b), this.$8()
        };
        e.setOnDraw = function(a) {
            this.$5 = a
        };
        e.draw = function() {
            var a = this,
                b = ++this.$1,
                d = this.$3,
                e = this.$7();
            return e.waitForAssetLoad().then(function() {
                if (b !== a.$1) return;
                d.viewport(0, 0, d.drawingBufferWidth, d.drawingBufferHeight);
                d.clear(d.COLOR_BUFFER_BIT | d.DEPTH_BUFFER_BIT);
                d.drawArrays(d.TRIANGLES, 0, 6);
                a.$9();
                a.$5 && a.$5()
            })["catch"](function(b) {
                a.$6 || (c("Polarisunexpected")("[filters] Could not draw: " + (b && b.message)), a.$6 = !0)
            })
        };
        e.startDraw = function() {
            this.$4 = !0;
            this.$6 = !1;
            return this.$8()
        };
        e.stopDraw = function() {
            this.$4 = !1
        };
        e.$7 = function() {
            return this.$2.getFilterProgram(this.activeFilterName)
        };
        e.$9 = function() {
            var a, b = this.$3,
                d = b.getError();
            if (d === b.NO_ERROR) return;
            b = (a = {}, a[b.INVALID_ENUM] = "INVALID_ENUM", a[b.INVALID_VALUE] = "INVALID_VALUE", a[b.INVALID_OPERATION] = "INVALID_OPERATION", a[b.INVALID_FRAMEBUFFER_OPERATION] = "INVALID_FRAMEBUFFER_OPERATION", a[b.OUT_OF_MEMORY] = "OUT_OF_MEMORY", a[b.CONTEXT_LOST_WEBGL] = "CONTEXT_LOST_WEBGL", a);
            a = this.activeFilterName || "none";
            c("Polarisunexpected")("[filters] " + b[d] + " error in GL draw: " + a)
        };
        e.$8 = function() {
            return !this.$4 ? b("Promise").resolve() : this.draw()
        };
        return a
    }();
    g["default"] = a
}, 98);
__d("usePolarisMediaQuery", ["PolarisStyleConstants", "Polarisunexpected", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
        i = b.useState,
        j = /var\((.*\b)\)/;

    function k(a) {
        var b = a.match(j);
        if (b == null) return a;
        var d = c("PolarisStyleConstants")[b[1]];
        if (d == null) {
            c("Polarisunexpected")(b[1] + " not found in StyleConstants");
            return a
        }
        b = "" + d.value + d.units;
        return a.replace(j, b)
    }

    function a(a) {
        var b = k(a);
        a = i((a = window.matchMedia(b).matches) != null ? a : !1);
        var c = a[0],
            d = a[1];
        h(function() {
            var a = window.matchMedia(b),
                c = function() {
                    return d(!!a.matches)
                };
            a.addListener(c);
            c();
            return function() {
                a.removeListener(c)
            }
        }, [b]);
        return c
    }
    g.replaceVar = k;
    g.useMediaQuery = a
}, 98);
__d("PolarisIGCoreAppInstagramPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
                d: "M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisIGCoreArrowLeftPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
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
                x1: "2.909",
                x2: "22.001",
                y1: "12.004",
                y2: "12.004"
            }), h.jsx("polyline", {
                fill: "none",
                points: "9.276 4.726 2.001 12.004 9.276 19.274",
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
__d("PolarisIGCorePhotoPanoOutlineIcon", ["PolarisIGCoreSVGIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsxs(c("PolarisIGCoreSVGIcon"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 24 24",
            children: [h.jsx("path", {
                d: "M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z",
                fillRule: "evenodd"
            }), h.jsx("path", {
                d: "m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905",
                fill: "none",
                stroke: "currentColor",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }), h.jsx("path", {
                d: "M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z",
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
__d("PolarisSavedCollectionsRoot.entrypoint", ["JSResourceForInteraction"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {}
            }
        },
        root: c("JSResourceForInteraction")("PolarisSavedCollectionsRoot.react").__setRef("PolarisSavedCollectionsRoot.entrypoint")
    };
    g["default"] = a
}, 98);
__d("PolarisPushPreferencesRoot.entrypoint", ["JSResourceForInteraction"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {}
            }
        },
        root: c("JSResourceForInteraction")("PolarisPushPreferencesRoot.react").__setRef("PolarisPushPreferencesRoot.entrypoint")
    };
    g["default"] = a
}, 98);
__d("PolarisPushPreferencesRoot.react", ["PolarisSettingsActions", "PolarisSettingsModules", "react", "usePolarisGetQuery", "usePolarisGetQuerySetup"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = function(a) {
            return function(b) {
                b(d("PolarisSettingsActions").loadPushPreferencesPage({
                    push_prefs: a.notification_settings
                }))
            }
        };

    function a(a) {
        a = c("usePolarisGetQuery")("/api/v1/notifications/settings/", {
            query: {
                channels: "push"
            }
        });
        c("usePolarisGetQuerySetup")(a, i);
        return h.jsx(d("PolarisSettingsModules").PushPreferencesPage, {})
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}, 98);
__d("PolarisQRRoot.entrypoint", ["JSResourceForInteraction"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {}
            }
        },
        root: c("JSResourceForInteraction")("PolarisQRRoot.react").__setRef("PolarisQRRoot.entrypoint")
    };
    g["default"] = a
}, 98);