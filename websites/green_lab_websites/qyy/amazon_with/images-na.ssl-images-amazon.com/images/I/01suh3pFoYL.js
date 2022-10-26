'use strict';
mix_d("AmazonHomepageSolitaireCards__sign-in-v2:sign-in-v2__48ylHKlY", "exports tslib @c/aui-feature-detect @c/logger @c/navigation @c/scoped-dom @m/mash @c/metrics".split(" "), function(g, h, p, q, r, t, k, l) {
    function c(a) {
        return a && "object" === typeof a && "default" in a ? a : {
            "default": a
        }
    }
    var u = c(p),
        d = c(q),
        m = c(r),
        n = c(t),
        e = function(a, b) {
            void 0 === b && (b = 1);
            l.count(a, +(l.count(a) || 0) + b)
        },
        x = function(a) {
            n["default"].cardRoot.querySelector("#gw-sign-in-button").addEventListener("click", function() {
                v(a)
            }, !1);
            n["default"].cardRoot.querySelector("#gw-sign-up-button").addEventListener("click", function() {
                w(a)
            }, !1)
        },
        v = function(a) {
            e(a + "SignInClick");
            k.showLoginDialog({
                successCallback: function() {
                    m["default"].setLocation("/");
                    e(a + "SignInSuccess")
                },
                failCallback: function(b) {
                    "CANCELED" === b ? d["default"].log("The user has cancelled sign in process") : d["default"].log(a + "sign in failed with error:" + b, "WARN")
                }
            })
        },
        w = function(a) {
            e(a + "CreateAccountClick");
            k.showLoginDialog({
                successCallback: function() {
                    m["default"].setLocation("/");
                    e(a + "CreateAccountSuccess")
                },
                failCallback: function(b) {
                    "CANCELED" === b ? d["default"].log("The user has cancelled create account process") : d["default"].log(a + "sign up failed with error:" + b, "WARN")
                }
            })
        },
        f;
    (function(a) {
        a.signInTile = "signInTile";
        a.signInV2 = "signInV2"
    })(f || (f = {}));
    g._operationNames = [];
    g.card = function() {
        return h.__awaiter(void 0, void 0, void 0, function() {
            return h.__generator(this, function(a) {
                u["default"].isSupported("isAmazonApp") && x(f.signInV2);
                return [2]
            })
        })
    }
});