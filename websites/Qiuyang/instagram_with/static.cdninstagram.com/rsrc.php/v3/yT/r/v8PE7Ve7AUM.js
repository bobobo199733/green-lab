if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("bs_caml", [], function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a < b) return -1;
        else if (a === b) return 0;
        else return 1
    }

    function b(a, b) {
        if (a)
            if (b) return 0;
            else return 1;
        else if (b) return -1;
        else return 0
    }

    function c(a, b) {
        if (a === b) return 0;
        else if (a < b) return -1;
        else if (a > b || a === a) return 1;
        else if (b === b) return -1;
        else return 0
    }

    function d(a, b) {
        if (a === b) return 0;
        else if (a < b) return -1;
        else return 1
    }

    function e(a, b) {
        if (a) return b;
        else return a
    }

    function g(a, b) {
        if (a < b) return a;
        else return b
    }

    function h(a, b) {
        if (a < b) return a;
        else return b
    }

    function i(a, b) {
        if (a < b) return a;
        else return b
    }

    function j(a, b) {
        if (a < b) return a;
        else return b
    }

    function k(a, b) {
        if (a) return a;
        else return b
    }

    function l(a, b) {
        if (a > b) return a;
        else return b
    }

    function m(a, b) {
        if (a > b) return a;
        else return b
    }

    function n(a, b) {
        if (a > b) return a;
        else return b
    }

    function o(a, b) {
        if (a > b) return a;
        else return b
    }

    function p(a, b) {
        if (a[1] === b[1]) return a[0] === b[0];
        else return !1
    }

    function q(a, b) {
        var c = b[0],
            d = a[0];
        if (d > c) return !0;
        else if (d < c) return !1;
        else return a[1] >= b[1]
    }

    function r(a, b) {
        return !p(a, b)
    }

    function s(a, b) {
        return !q(a, b)
    }

    function t(a, b) {
        if (a[0] > b[0]) return !0;
        else if (a[0] < b[0]) return !1;
        else return a[1] > b[1]
    }

    function u(a, b) {
        return !t(a, b)
    }

    function v(a, b) {
        if (q(a, b)) return b;
        else return a
    }

    function w(a, b) {
        if (t(a, b)) return a;
        else return b
    }
    f.caml_int_compare = a;
    f.caml_bool_compare = b;
    f.caml_float_compare = c;
    f.caml_string_compare = d;
    f.caml_bool_min = e;
    f.caml_int_min = g;
    f.caml_float_min = h;
    f.caml_string_min = i;
    f.caml_int32_min = j;
    f.caml_bool_max = k;
    f.caml_int_max = l;
    f.caml_float_max = m;
    f.caml_string_max = n;
    f.caml_int32_max = o;
    f.i64_eq = p;
    f.i64_neq = r;
    f.i64_lt = s;
    f.i64_gt = t;
    f.i64_le = u;
    f.i64_ge = q;
    f.i64_min = v;
    f.i64_max = w
}, null);
__d("bs_caml_obj", ["bs_caml"], function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a, b) {
            for (var a in a) b(a)
        },
        h = function(a) {
            if (Array.isArray(a)) {
                var b = a.length,
                    c = new Array(b);
                for (var d = 0; d < b; ++d) c[d] = a[d];
                a.TAG !== void 0 && (c.TAG = a.TAG);
                return c
            }
            return Object.assign({}, a)
        },
        i = function(a, b) {
            var c;
            if (Array.isArray(b)) {
                for (c = 0; c < b.length; ++c) a[c] = b[c];
                b.TAG !== void 0 && (a.TAG = b.TAG)
            } else
                for (var c in b) a[c] = b[c]
        };

    function j(a, c) {
        if (a === c) return 0;
        var d = typeof a,
            e = typeof c;
        switch (d) {
            case "boolean":
                if (e === "boolean") return b("bs_caml").caml_bool_compare(a, c);
                break;
            case "function":
                if (e === "function") throw {
                    RE_EXN_ID: "Invalid_argument",
                    _1: "compare: functional value",
                    Error: new Error()
                };
                break;
            case "number":
                if (e === "number") return b("bs_caml").caml_int_compare(a, c);
                break;
            case "string":
                if (e === "string") return b("bs_caml").caml_string_compare(a, c);
                else return 1;
            case "undefined":
                return -1;
            default:
        }
        switch (e) {
            case "string":
                return -1;
            case "undefined":
                return 1;
            default:
                if (d === "boolean") return 1;
                if (e === "boolean") return -1;
                if (d === "function") return 1;
                if (e === "function") return -1;
                if (d === "number")
                    if (c === null || c.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return 1;
                    else return -1;
                if (e === "number")
                    if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return -1;
                    else return 1;
                if (a === null)
                    if (c.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return 1;
                    else return -1;
                if (c === null)
                    if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return -1;
                    else return 1;
                if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0)
                    if (c.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return k(a, c);
                    else return -1;
                d = a.TAG | 0;
                e = c.TAG | 0;
                if (d === 248) return b("bs_caml").caml_int_compare(a[1], c[1]);
                if (d === 251) throw {
                    RE_EXN_ID: "Invalid_argument",
                    _1: "equal: abstract value",
                    Error: new Error()
                };
                if (d !== e)
                    if (d < e) return -1;
                    else return 1;
                d = a.length | 0;
                e = c.length | 0;
                if (d === e)
                    if (Array.isArray(a)) {
                        var f = 0;
                        while (!0) {
                            var g = f;
                            if (g === d) return 0;
                            var h = j(a[g], c[g]);
                            if (h !== 0) return h;
                            f = g + 1 | 0;
                            continue
                        }
                    } else if (a instanceof Date && c instanceof Date) return a - c;
                else return k(a, c);
                else if (d < e) {
                    h = 0;
                    while (!0) {
                        g = h;
                        if (g === d) return -1;
                        f = j(a[g], c[g]);
                        if (f !== 0) return f;
                        h = g + 1 | 0;
                        continue
                    }
                } else {
                    f = 0;
                    while (!0) {
                        g = f;
                        if (g === e) return 1;
                        h = j(a[g], c[g]);
                        if (h !== 0) return h;
                        f = g + 1 | 0;
                        continue
                    }
                }
        }
    }

    function k(a, c) {
        var d = {
                contents: void 0
            },
            e = {
                contents: void 0
            },
            f = function(b, c) {
                var d = b[2],
                    a = b[1];
                if (!(!Object.prototype.hasOwnProperty.call(a, c) || j(b[0][c], a[c]) > 0)) return;
                b = d.contents;
                if (b !== void 0 && c >= b) return;
                else {
                    d.contents = c;
                    return
                }
            },
            h = [a, c, e],
            i = function(a) {
                return f(h, a)
            },
            k = [c, a, d],
            l = function(a) {
                return f(k, a)
            };
        g(a, i);
        g(c, l);
        a = d.contents;
        i = e.contents;
        if (a !== void 0)
            if (i !== void 0) return b("bs_caml").caml_string_compare(a, i);
            else return -1;
        else if (i !== void 0) return 1;
        else return 0
    }

    function l(a, b) {
        if (a === b) return !0;
        var c = typeof a;
        if (c === "string" || c === "number" || c === "boolean" || c === "undefined" || a === null) return !1;
        var d = typeof b;
        if (c === "function" || d === "function") throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "equal: functional value",
            Error: new Error()
        };
        if (d === "number" || d === "undefined" || b === null) return !1;
        c = a.TAG | 0;
        d = b.TAG | 0;
        if (c === 248) return a[1] === b[1];
        if (c === 251) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "equal: abstract value",
            Error: new Error()
        };
        if (c !== d) return !1;
        c = a.length | 0;
        d = b.length | 0;
        if (c === d)
            if (Array.isArray(a)) {
                d = 0;
                while (!0) {
                    var e = d;
                    if (e === c) return !0;
                    if (!l(a[e], b[e])) return !1;
                    d = e + 1 | 0;
                    continue
                }
            } else if (a instanceof Date && b instanceof Date) return !(a > b || a < b);
        else {
            var f = {
                contents: !0
            };
            e = function(a) {
                if (!Object.prototype.hasOwnProperty.call(b, a)) {
                    f.contents = !1;
                    return
                }
            };
            d = function(c) {
                if (!Object.prototype.hasOwnProperty.call(a, c) || !l(b[c], a[c])) {
                    f.contents = !1;
                    return
                }
            };
            g(a, e);
            f.contents && g(b, d);
            return f.contents
        } else return !1
    }

    function a(a, b) {
        if (b !== null) return l(a, b);
        else return a === b
    }

    function c(a, b) {
        if (b !== void 0) return l(a, b);
        else return a === b
    }

    function d(a, b) {
        if (b == null) return a === b;
        else return l(a, b)
    }

    function e(a, b) {
        return !l(a, b)
    }

    function m(a, b) {
        return j(a, b) >= 0
    }

    function n(a, b) {
        return j(a, b) > 0
    }

    function o(a, b) {
        return j(a, b) <= 0
    }

    function p(a, b) {
        return j(a, b) < 0
    }

    function q(a, b) {
        if (j(a, b) <= 0) return a;
        else return b
    }

    function r(a, b) {
        if (j(a, b) >= 0) return a;
        else return b
    }
    f.caml_obj_dup = h;
    f.update_dummy = i;
    f.caml_compare = j;
    f.caml_equal = l;
    f.caml_equal_null = a;
    f.caml_equal_undefined = c;
    f.caml_equal_nullable = d;
    f.caml_notequal = e;
    f.caml_greaterequal = m;
    f.caml_greaterthan = n;
    f.caml_lessthan = p;
    f.caml_lessequal = o;
    f.caml_min = q;
    f.caml_max = r
}, null);
__d("MAWGating.bs", ["bs_caml_obj", "gkx", "qex"], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (b("gkx")("1224637") !== !0)
            if (b("qex")._("1506") === !0) return !0;
            else return b("qex")._("155") === !0;
        else return !1
    }

    function c(a) {
        return b("qex")._("272") === !0
    }

    function d(a) {
        return b("qex")._("715") === !0
    }

    function e(a) {
        if (b("qex")._("1513") === !0) return !0;
        else return b("qex")._("155") === !0
    }

    function g(a) {
        return b("gkx")("7045")
    }

    function h(a) {
        return b("bs_caml_obj").caml_equal(b("qex")._("1313"), !0)
    }

    function i(a) {
        return b("gkx")("690")
    }

    function j(a) {
        return b("gkx")("5611")
    }

    function k(a) {
        return b("gkx")("7578")
    }

    function l(a) {
        if (b("qex")._("1514") === !0) return !0;
        else return b("qex")._("155") === !0
    }

    function m(a) {
        return b("qex")._("354")
    }

    function n(a) {
        if (b("qex")._("1515") === !0) return !0;
        else return b("qex")._("408") === !0
    }

    function o(a) {
        return b("qex")._("1516") === !0
    }

    function p(a) {
        return b("gkx")("956")
    }

    function q(a) {
        return b("gkx")("6172")
    }

    function r(a) {
        return b("gkx")("6187")
    }

    function s(a) {
        if (b("gkx")("6172")) return b("qex")._("699") === !0;
        else return !1
    }

    function t(a) {
        if (b("gkx")("6172")) return b("gkx")("956");
        else return !1
    }

    function u(a) {
        if (b("gkx")("6187")) return b("qex")._("700") === !0;
        else return !1
    }

    function v(a) {
        if (b("gkx")("6187")) return b("gkx")("956");
        else return !1
    }

    function w(a) {
        if (b("qex")._("1520") === !0) return !0;
        else return b("qex")._("155") === !0
    }

    function x(a) {
        return b("qex")._("205") === !0
    }

    function y(a) {
        return b("qex")._("1521") === !0
    }

    function z(a) {
        return b("qex")._("1523") === !0
    }

    function A(a) {
        return b("qex")._("751") === !0
    }

    function B(a) {
        return b("qex")._("899") === !0
    }

    function C(a) {
        return b("qex")._("54") === !0
    }

    function D(a) {
        return b("qex")._("1525") === !0
    }

    function E(a) {
        return b("qex")._("50") === !0
    }

    function F(a) {
        return b("gkx")("8220")
    }

    function G(a) {
        return b("qex")._("1672") === !0
    }

    function H(a) {
        return b("qex")._("1526") === !0
    }

    function I(a) {
        return b("qex")._("386") === !0
    }

    function J(a) {
        return b("qex")._("1527") === !0
    }
    var K = b("gkx")("4725");

    function L(a) {
        return b("qex")._("1528") === !0
    }

    function M(a) {
        return b("qex")._("1529") === !0
    }

    function N(a) {
        return b("gkx")("3890")
    }

    function O(a) {
        if (b("qex")._("1530") === !0) return !0;
        else return b("qex")._("155") === !0
    }

    function P(a) {
        return b("qex")._("260") === !0
    }

    function Q(a) {
        return b("qex")._("1532") === !0
    }

    function R(a) {
        return b("qex")._("1533") === !0
    }

    function S(a) {
        return b("qex")._("1534") === !0
    }

    function T(a) {
        if (b("qex")._("189") === !0) return !0;
        else return b("qex")._("155") === !0
    }

    function U(a) {
        if (b("qex")._("2163") === !0) return !0;
        else return b("qex")._("198") === !0
    }

    function V(a) {
        if (b("qex")._("13") === !0) return !0;
        else return b("qex")._("199") === !0
    }

    function W(a) {
        return b("qex")._("1536") === !0
    }

    function X(a) {
        return b("qex")._("41") === !0
    }

    function Y(a) {
        if (b("qex")._("68") === !0) return !0;
        else return b("qex")._("310") === !0
    }

    function Z(a) {
        if (b("qex")._("77") === !0 || b("qex")._("68") === !0) return !0;
        else return b("qex")._("1264") === !0
    }

    function $(a) {
        if (b("qex")._("112") === !0) return !0;
        else return b("qex")._("336") === !0
    }

    function aa(a) {
        if (b("qex")._("1238") === !0) return !0;
        else return b("qex")._("336") === !0
    }

    function ba(a) {
        if (b("qex")._("1746") === !0 && b("qex")._("160") === !0) return !0;
        else return b("qex")._("336") === !0
    }

    function ca(a) {
        if (b("qex")._("160") === !0) return !0;
        else return b("qex")._("336") === !0
    }

    function da(a) {
        if (b("qex")._("308") === !0) return !0;
        else return b("qex")._("391") === !0
    }
    var ea = b("gkx")("5834");

    function fa(a) {
        return b("qex")._("351") === !0
    }

    function ga(a) {
        return b("qex")._("114") === !0
    }

    function ha(a) {
        if (b("qex")._("158") === !0) return !0;
        else return b("qex")._("336") === !0
    }

    function ia(a) {
        return b("qex")._("323") === !0
    }

    function ja(a) {
        return b("gkx")("3106")
    }

    function ka(a) {
        return b("qex")._("542") === !0
    }

    function la(a) {
        return b("qex")._("571") === !0
    }

    function ma(a) {
        return b("gkx")("346")
    }

    function na(a) {
        return b("gkx")("8355")
    }

    function oa(a) {
        return b("qex")._("585") === !0
    }
    var pa = b("gkx")("1115");

    function qa(a) {
        return b("gkx")("964")
    }

    function ra(a) {
        return b("gkx")("4169")
    }

    function sa(a) {
        return b("gkx")("4662")
    }

    function ta(a) {
        if (b("qex")._("1239") === !0) return !0;
        else return b("qex")._("1677") === !0
    }

    function ua(a) {
        return b("qex")._("419") === !0
    }

    function va(a) {
        return b("qex")._("1000") === !0
    }

    function wa(a) {
        return b("gkx")("6464")
    }

    function xa(a) {
        return b("qex")._("133") === !0
    }

    function ya(a) {
        return b("qex")._("1306") === !0
    }

    function za(a) {
        return b("qex")._("174") === !0
    }

    function Aa(a) {
        return b("qex")._("342") === !0
    }

    function Ba(a) {
        return b("gkx")("6940")
    }

    function Ca(a) {
        return b("qex")._("411") === !0
    }

    function Da(a) {
        return b("qex")._("1232") === !0
    }

    function Ea(a) {
        return b("qex")._("598") === !0
    }

    function Fa(a) {
        return b("gkx")("4483")
    }

    function Ga(a) {
        return b("gkx")("7252")
    }

    function Ha(a) {
        return b("gkx")("7285")
    }

    function Ia(a) {
        return b("qex")._("1268") === !0
    }

    function Ja(a) {
        return b("qex")._("155") === !0
    }

    function Ka(a) {
        return b("qex")._("1766") === !0
    }

    function La(a) {
        return b("qex")._("1766") === !0
    }

    function Ma(a) {
        return b("gkx")("3383")
    }

    function Na(a) {
        if (b("qex")._("1233") === !0) return !0;
        else return b("qex")._("754") === !0
    }

    function Oa(a) {
        if (b("qex")._("1222") === !0) return !0;
        else return b("qex")._("96") === !0
    }

    function Pa(a) {
        return b("qex")._("548") === !0
    }

    function Qa(a) {
        return b("qex")._("681")
    }

    function Ra(a) {
        return b("qex")._("1686") === !0
    }

    function Sa(a) {
        return b("gkx")("8239")
    }

    function Ta(a) {
        return b("qex")._("1790") === !0
    }

    function Ua(a) {
        return b("gkx")("8350")
    }

    function Va(a) {
        return b("qex")._("302") === !0
    }

    function Wa(a) {
        return b("qex")._("1833") === !0
    }

    function Xa(a) {
        return b("gkx")("4214")
    }

    function Ya(a) {
        return b("gkx")("8457")
    }
    f.isArmadillo = a;
    f.isTlcSearchEnabled = c;
    f.isEyebrowTextEnabled = d;
    f.isGifEnabled = e;
    f.isGifSearchEnabled = g;
    f.isMobileTLCOverride = h;
    f.isDebugUIEnabled = i;
    f.isDevDebugEnabled = j;
    f.enableProcessPersistFollowUpBatching = k;
    f.isStickerEnabled = l;
    f.getArmadilloDbVersion = m;
    f.wellBeingFeaturesEnabled = n;
    f.isEphemeralMessagesEnabled = o;
    f.isDualSendWebOrCrossApp = p;
    f.oneToOneDualSendKillswitch = q;
    f.groupDualSendKillswitch = r;
    f.isOneToOneDualSendTextEnabled = s;
    f.isOneToOneDualSendMediaEnabled = t;
    f.isGroupDualSendTextEnabled = u;
    f.isGroupDualSendMediaEnabled = v;
    f.isForwardEnabled = w;
    f.isCrossForwardEnabled = x;
    f.isVaultingEnabled = y;
    f.isReportingEnabled = z;
    f.isPullModeEnabled = A;
    f.isBulkGroupEncEnabled = B;
    f.isFeatureLimitEnabled = C;
    f.isReactionsEnabled = D;
    f.isCustomReactionsEnabled = E;
    f.isDbCleanupEnabled = F;
    f.isICDCHTTPRegEnabled = G;
    f.isICDCEnabled = H;
    f.isICDCErrorEnabled = I;
    f.isClientTimeoutsEnabled = J;
    f.isOptedOutOfTimeouts = K;
    f.isUnsendGlobalEnabled = L;
    f.isUnsendLocallyEnabled = M;
    f.isOccamadillo = N;
    f.isEncryptionAtRestEnabled = O;
    f.isDevserverDeviceEnabled = P;
    f.isBlockEnabled = Q;
    f.isRestrictEnabled = R;
    f.isReactionsCleanerEnabled = S;
    f.isRepliesEnabled = T;
    f.isSearchEnabled = U;
    f.isContentSearchEnabled = V;
    f.isAppSyncDeleteThreadEnabled = W;
    f.isSecurityAlertEnabled = X;
    f.isThreadLevelCutoverEnabled = Y;
    f.isXMAFeedPostShareEnabled = Z;
    f.isLabyrinthOnWebEnabled = $;
    f.isUploadFlowEnabled = aa;
    f.isXMABackupEnabled = ba;
    f.isAttachmentBackupEnabled = ca;
    f.isGroupInvitesEnabled = da;
    f.isArmadilloMessageSortedOrderChanged = ea;
    f.isHotLikeEnabled = fa;
    f.isPushNotificationEnabled = ga;
    f.isPinCodeEnabled = ha;
    f.isPinCodeAccessibleInputEnabled = ia;
    f.isE2EEAttributionAndPresenceEnabled = ja;
    f.isMobileExternalIdFormatEnabled = ka;
    f.isAdminMsgOptEnabled = la;
    f.isWebErrorStateM1Enabled = ma;
    f.isBulkifyHIMEnabled = na;
    f.isWebLoadStateEnabled = oa;
    f.isInitSyncApiImprovementsEnabled = pa;
    f.isSenderKeyPredistributionEnabled = qa;
    f.isPreEstablishSessionEnabled = ra;
    f.isSmartSenderKeyRotationEnabled = sa;
    f.isLegacyThreadUploadEnabled = ta;
    f.isTlcRestoreFlowEnabled = ua;
    f.isDyiEnabled = va;
    f.isArmadilloTotalMessageCollectionEnabled = wa;
    f.shouldDisplayWeakPinPromptForEBSetup = xa;
    f.isVirtualDeviceRevocationFlowEnabled = ya;
    f.isSortOrderPaginationEnabled = za;
    f.isDeviceAdminMessagesSnippetDisabled = Aa;
    f.isBulkContactUpdateEnabled = Ba;
    f.isQrCodeEnabled = Ca;
    f.isRetroactiveBackupsEnabled = Da;
    f.isRetroactiveBackupsAttachmentsEnabled = Ea;
    f.isDetailedHandleIncomingMsgQPLEnabled = Fa;
    f.isBatchLoadParticipantsEnabled = Ga;
    f.isPersistedDbDeriskEnabled = Ha;
    f.isFrankingEnabled = Ia;
    f.isEbEnabledOnIg = Ja;
    f.isCodeOnlyInitEnabled = Ka;
    f.isCodeOnlyWorkerEnabled = La;
    f.isSecurityToggleForDFEnabled = Ma;
    f.isOnboardingFlowEnabled = Na;
    f.isRestoreFlowEnabled = Oa;
    f.isRestoreFlowHandlingExistingAdminMsgsEnabled = Pa;
    f.getOrchestratorVersion = Qa;
    f.isUserPartOfEncryptedBackupDebugging = Ra;
    f.isTlcPublicUser = Sa;
    f.shouldUseCoalescedSchemas = Ta;
    f.isDownloadablePreviewsEnabled = Ua;
    f.isVoiceClipEnabled = Va;
    f.shouldUseCondensedSchemas = Wa;
    f.isJpegThumbnailOverChatdDisabled = Xa;
    f.isForceNonPersistedJobsEnable = Ya
}, null);
__d("MAWGating.re", ["MAWGating.bs"], function(a, b, c, d, e, f) {
    c = (a = b("MAWGating.bs")).isArmadillo;
    f.isArmadillo = c;
    d = a.isTlcSearchEnabled;
    f.isTlcSearchEnabled = d;
    e = a.isEyebrowTextEnabled;
    f.isEyebrowTextEnabled = e;
    b = a.isGifEnabled;
    f.isGifEnabled = b;
    c = a.isGifSearchEnabled;
    f.isGifSearchEnabled = c;
    d = a.isMobileTLCOverride;
    f.isMobileTLCOverride = d;
    e = a.isDebugUIEnabled;
    f.isDebugUIEnabled = e;
    b = a.isDevDebugEnabled;
    f.isDevDebugEnabled = b;
    c = a.enableProcessPersistFollowUpBatching;
    f.enableProcessPersistFollowUpBatching = c;
    d = a.isStickerEnabled;
    f.isStickerEnabled = d;
    e = a.getArmadilloDbVersion;
    f.getArmadilloDbVersion = e;
    b = a.wellBeingFeaturesEnabled;
    f.wellBeingFeaturesEnabled = b;
    c = a.isEphemeralMessagesEnabled;
    f.isEphemeralMessagesEnabled = c;
    d = a.isDualSendWebOrCrossApp;
    f.isDualSendWebOrCrossApp = d;
    e = a.oneToOneDualSendKillswitch;
    f.oneToOneDualSendKillswitch = e;
    b = a.groupDualSendKillswitch;
    f.groupDualSendKillswitch = b;
    c = a.isOneToOneDualSendTextEnabled;
    f.isOneToOneDualSendTextEnabled = c;
    d = a.isOneToOneDualSendMediaEnabled;
    f.isOneToOneDualSendMediaEnabled = d;
    e = a.isGroupDualSendTextEnabled;
    f.isGroupDualSendTextEnabled = e;
    b = a.isForwardEnabled;
    f.isForwardEnabled = b;
    c = a.isCrossForwardEnabled;
    f.isCrossForwardEnabled = c;
    d = a.isVaultingEnabled;
    f.isVaultingEnabled = d;
    e = a.isReportingEnabled;
    f.isReportingEnabled = e;
    b = a.isPullModeEnabled;
    f.isPullModeEnabled = b;
    c = a.isBulkGroupEncEnabled;
    f.isBulkGroupEncEnabled = c;
    d = a.isFeatureLimitEnabled;
    f.isFeatureLimitEnabled = d;
    e = a.isReactionsEnabled;
    f.isReactionsEnabled = e;
    b = a.isCustomReactionsEnabled;
    f.isCustomReactionsEnabled = b;
    c = a.isDbCleanupEnabled;
    f.isDbCleanupEnabled = c;
    d = a.isICDCHTTPRegEnabled;
    f.isICDCHTTPRegEnabled = d;
    e = a.isICDCEnabled;
    f.isICDCEnabled = e;
    b = a.isICDCErrorEnabled;
    f.isICDCErrorEnabled = b;
    c = a.isClientTimeoutsEnabled;
    f.isClientTimeoutsEnabled = c;
    d = a.isOptedOutOfTimeouts;
    f.isOptedOutOfTimeouts = d;
    e = a.isUnsendGlobalEnabled;
    f.isUnsendGlobalEnabled = e;
    b = a.isUnsendLocallyEnabled;
    f.isUnsendLocallyEnabled = b;
    c = a.isOccamadillo;
    f.isOccamadillo = c;
    d = a.isEncryptionAtRestEnabled;
    f.isEncryptionAtRestEnabled = d;
    e = a.isDevserverDeviceEnabled;
    f.isDevserverDeviceEnabled = e;
    b = a.isBlockEnabled;
    f.isBlockEnabled = b;
    c = a.isRestrictEnabled;
    f.isRestrictEnabled = c;
    d = a.isReactionsCleanerEnabled;
    f.isReactionsCleanerEnabled = d;
    e = a.isRepliesEnabled;
    f.isRepliesEnabled = e;
    b = a.isSearchEnabled;
    f.isSearchEnabled = b;
    c = a.isContentSearchEnabled;
    f.isContentSearchEnabled = c;
    d = a.isSecurityAlertEnabled;
    f.isSecurityAlertEnabled = d;
    e = a.isThreadLevelCutoverEnabled;
    f.isThreadLevelCutoverEnabled = e;
    b = a.isXMAFeedPostShareEnabled;
    f.isXMAFeedPostShareEnabled = b;
    c = a.isLabyrinthOnWebEnabled;
    f.isLabyrinthOnWebEnabled = c;
    d = a.isUploadFlowEnabled;
    f.isUploadFlowEnabled = d;
    e = a.isXMABackupEnabled;
    f.isXMABackupEnabled = e;
    b = a.isAttachmentBackupEnabled;
    f.isAttachmentBackupEnabled = b;
    c = a.isGroupInvitesEnabled;
    f.isGroupInvitesEnabled = c;
    d = a.isArmadilloMessageSortedOrderChanged;
    f.isArmadilloMessageSortedOrderChanged = d;
    e = a.isHotLikeEnabled;
    f.isHotLikeEnabled = e;
    b = a.isPushNotificationEnabled;
    f.isPushNotificationEnabled = b;
    c = a.isPinCodeEnabled;
    f.isPinCodeEnabled = c;
    d = a.isPinCodeAccessibleInputEnabled;
    f.isPinCodeAccessibleInputEnabled = d;
    e = a.isE2EEAttributionAndPresenceEnabled;
    f.isE2EEAttributionAndPresenceEnabled = e;
    b = a.isMobileExternalIdFormatEnabled;
    f.isMobileExternalIdFormatEnabled = b;
    c = a.isAdminMsgOptEnabled;
    f.isAdminMsgOptEnabled = c;
    d = a.isWebErrorStateM1Enabled;
    f.isWebErrorStateM1Enabled = d;
    e = a.isBulkifyHIMEnabled;
    f.isBulkifyHIMEnabled = e;
    b = a.isWebLoadStateEnabled;
    f.isWebLoadStateEnabled = b;
    c = a.isInitSyncApiImprovementsEnabled;
    f.isInitSyncApiImprovementsEnabled = c;
    d = a.isSenderKeyPredistributionEnabled;
    f.isSenderKeyPredistributionEnabled = d;
    e = a.isPreEstablishSessionEnabled;
    f.isPreEstablishSessionEnabled = e;
    b = a.isSmartSenderKeyRotationEnabled;
    f.isSmartSenderKeyRotationEnabled = b;
    c = a.isLegacyThreadUploadEnabled;
    f.isLegacyThreadUploadEnabled = c;
    d = a.isTlcRestoreFlowEnabled;
    f.isTlcRestoreFlowEnabled = d;
    e = a.isDyiEnabled;
    f.isDyiEnabled = e;
    b = a.isArmadilloTotalMessageCollectionEnabled;
    f.isArmadilloTotalMessageCollectionEnabled = b;
    c = a.shouldDisplayWeakPinPromptForEBSetup;
    f.shouldDisplayWeakPinPromptForEBSetup = c;
    d = a.isVirtualDeviceRevocationFlowEnabled;
    f.isVirtualDeviceRevocationFlowEnabled = d;
    e = a.isSortOrderPaginationEnabled;
    f.isSortOrderPaginationEnabled = e;
    b = a.isDeviceAdminMessagesSnippetDisabled;
    f.isDeviceAdminMessagesSnippetDisabled = b;
    c = a.isBulkContactUpdateEnabled;
    f.isBulkContactUpdateEnabled = c;
    d = a.isQrCodeEnabled;
    f.isQrCodeEnabled = d;
    e = a.isRetroactiveBackupsEnabled;
    f.isRetroactiveBackupsEnabled = e;
    b = a.isRetroactiveBackupsAttachmentsEnabled;
    f.isRetroactiveBackupsAttachmentsEnabled = b;
    c = a.isDetailedHandleIncomingMsgQPLEnabled;
    f.isDetailedHandleIncomingMsgQPLEnabled = c;
    d = a.isBatchLoadParticipantsEnabled;
    f.isBatchLoadParticipantsEnabled = d;
    e = a.isPersistedDbDeriskEnabled;
    f.isPersistedDbDeriskEnabled = e;
    b = a.isFrankingEnabled;
    f.isFrankingEnabled = b;
    c = a.isEbEnabledOnIg;
    f.isEbEnabledOnIg = c;
    d = a.isCodeOnlyInitEnabled;
    f.isCodeOnlyInitEnabled = d;
    e = a.isCodeOnlyWorkerEnabled;
    f.isCodeOnlyWorkerEnabled = e;
    b = a.isSecurityToggleForDFEnabled;
    f.isSecurityToggleForDFEnabled = b;
    c = a.isOnboardingFlowEnabled;
    f.isOnboardingFlowEnabled = c;
    d = a.isRestoreFlowEnabled;
    f.isRestoreFlowEnabled = d;
    e = a.isRestoreFlowHandlingExistingAdminMsgsEnabled;
    f.isRestoreFlowHandlingExistingAdminMsgsEnabled = e;
    b = a.getOrchestratorVersion;
    f.getOrchestratorVersion = b;
    c = a.isUserPartOfEncryptedBackupDebugging;
    f.isUserPartOfEncryptedBackupDebugging = c;
    d = a.isTlcPublicUser;
    f.isTlcPublicUser = d;
    e = a.shouldUseCoalescedSchemas;
    f.shouldUseCoalescedSchemas = e;
    b = a.isDownloadablePreviewsEnabled;
    f.isDownloadablePreviewsEnabled = b;
    c = a.shouldUseCondensedSchemas;
    f.shouldUseCondensedSchemas = c;
    d = a.isJpegThumbnailOverChatdDisabled;
    f.isJpegThumbnailOverChatdDisabled = d;
    e = a.isForceNonPersistedJobsEnable;
    f.isForceNonPersistedJobsEnable = e
}, null);
__d("LSLogHistory", ["performance"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [];

    function a() {
        return h
    }

    function b() {
        h = []
    }

    function d(a, b) {
        var d;
        c("performance").timing != null ? d = Math.round(c("performance").timing.navigationStart + c("performance").now()) : d = Date.now();
        h.push([d.toString(), b, "lightspeed_log", "lightspeed_log_event", a].join(" | "))
    }
    g.getEntries = a;
    g.clearEntries = b;
    g.log = d
}, 98);
__d("LogWebMemoryUsageFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1765264");
    c = b("FalcoLoggerInternal").create("log_web_memory_usage", a);
    e.exports = c
}, null);