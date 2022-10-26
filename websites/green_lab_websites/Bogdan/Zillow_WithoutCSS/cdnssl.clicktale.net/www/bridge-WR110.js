(function() {
    var t, v, a, z;

    function q() {
        a = false;
        z = ClickTaleGlobal.api || {};
        t = A("ClickTaleSettings.Integration.ProjectType", 0);
        v = {
            clicktaleOnly: 0,
            m1: 1,
            m2: 2,
            m2Prime: 3
        };
        n();
        h();
        w();
        l();
        d()
    }

    function d() {
        if (!z.ClickTaleOnReadyInvoked) {
            z.ClickTaleOnReadyInvoked = true;
            var E, C = ClickTaleGlobal.scripts,
                D = function() {
                    if (typeof ClickTaleOnReady == "function") {
                        ClickTaleOnReady()
                    }
                    p(window.ClickTaleOnReadyList)
                };
            if (C) {
                E = C.dependencies;
                E && E.onDependencyResolved(D);
                E.notifyScriptLoaded("wr")
            } else {
                D()
            }
        }
    }

    function B() {
        window._uxa && _uxa.push(["afterPageView", function() {
            if (_uxa.push(["isRecording"])) {
                (typeof ClickTaleOnRecording == "function") && ClickTaleOnRecording();
                WRPubSub.publish("recording")
            }
        }])
    }

    function A(F, C) {
        var E = F.split(".");
        var G = window;
        for (var D = 0; D < E.length && G;) {
            G = G[E[D++]]
        }
        return G === undefined ? C : G
    }

    function n() {
        var C = e();
        if (window.ClickTaleSettings && ClickTaleSettings.CheckAgentSupport) {
            ClickTaleSettings.CheckAgentSupport(function(D) {
                return D
            }, C)
        }
    }

    function p(J) {
        if (typeof J === "object" && "length" in J) {
            var I = J.length;
            for (var E = 0; E < I; E++) {
                var G = J[E],
                    D = {},
                    H, F, C;
                if (typeof G === "string") {
                    H = window[G];
                    if (!H) {
                        continue
                    }
                    D.func = H;
                    D.scope = window;
                    D.args = []
                } else {
                    if (typeof G === "function") {
                        D.func = G;
                        D.scope = window;
                        D.args = []
                    } else {
                        if (typeof G === "object") {
                            H = G.fn;
                            if (typeof H !== "function") {
                                continue
                            }
                            D.func = H;
                            D.scope = G.scope || window;
                            D.args = G.args || []
                        }
                    }
                }
                D.func.apply(D.scope, D.args)
            }
        }
    }
    WRPubSub = (function() {
        var D = {};
        var C = D.hasOwnProperty;
        return {
            subscribe: function(E, F) {
                if (!C.call(D, E)) {
                    D[E] = []
                }
                D[E].push(F)
            },
            publish: function(E, F) {
                if (!C.call(D, E)) {
                    return
                }
                D[E].forEach(function(G) {
                    G.apply(this, F)
                })
            },
            remove: function(F, G) {
                var E = D[F].indexOf(G);
                if (E > -1) {
                    D[F].splice(E, 1)
                }
            }
        }
    })();
    WRCommands = (function() {
        window._ct_commands = window._ct_commands || [];
        var C = [];

        function D(J, I) {
            if (C[J]) {
                return C[J].apply(null, I)
            }
        }

        function E() {
            window._ct_commands.forEach(function(I) {
                var K = I[0];
                var J = I.slice(1);
                D(K, J)
            })
        }

        function H() {
            window._ct_commands = {
                push: function(I) {
                    var K = I[0];
                    var J = I.slice(1);
                    D(K, J)
                }
            }
        }

        function G() {
            E();
            H()
        }

        function F(I, J) {
            C[I] = J
        }
        return {
            register: F,
            start: G
        }
    })();

    function h() {
        WRCommands.register("isRecording", function(C) {
            if (c()) {
                C()
            }
        })
    }

    function o(C) {
        var D = C.match(/\?__[^\?]+/);
        return D ? D[0] : ""
    }

    function j(C) {
        var D = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/gi.exec(C);
        return {
            pathname: (D[5] || ""),
            search: (D[6] || ""),
            hash: (D[8] || "")
        }
    }

    function w() {
        if (window.ClickTaleGlobal) {
            ClickTaleGlobal.symbols = ClickTaleGlobal.symbols || {};
            ClickTaleGlobal.symbols.projectTypes = v;
            ClickTaleGlobal.symbols.projectType = t
        }
    }

    function x(G) {
        try {
            var C = typeof URL === "function" ? new URL(G) : j(G);
            var D = C.pathname;
            var H = C.hash ? C.hash.replace("#", "?__") : "";
            var F = C.search ? o(C.search) : "";
            return D + H + F
        } catch (E) {
            return ""
        }
    }

    function l() {
        var E = function() {};
        z.WRIsSavedCookie = window.ClickTaleIsSavedCookieName || "_CT_RS_";
        var C = {
            ClickTaleUIDCookieName: "",
            ClickTaleCookieExpiryDays: 365,
            ClickTaleOnReadyInvoked: false,
            ClickTaleExec: E,
            ClickTaleField: E,
            ClickTaleNote: E,
            ClickTaleLog: E,
            ClickTaleIgnore: E,
            ClickTaleSetUID: E,
            ClickTaleTerm: E,
            ClickTaleUploadPage: E,
            ClickTaleSetAllSensitive: E,
            ClickTaleResetAllSensitive: E,
            ClickTaleSetSomeSensitive: E,
            ClickTaleRebindEvents: E,
            ClickTaleResetSomeSensitive: E,
            ClickTaleDelayUploadPage: E,
            ClickTaleSetCustomElementID: E,
            ClickTaleChangeMonitorExec: E,
            ClickTaleSendJsonMessage: E,
            ClickTaleUploadPageNow: E,
            ClickTaleFormDisable: E,
            ClickTaleFormDisableAll: E,
            ClickTaleRegisterFormSubmit: E,
            ClickTaleRegisterScroll: E,
            ClickTaleSendImmediate: E,
            ClickTaleRegisterManualEvent: E,
            ClickTaleRegisterFormSubmitSent: E,
            ClickTaleRegisterTouchAction: E,
            ClickTaleSendThresholdExceededEvent: E,
            ClickTaleRegisterFormSubmitNotSent: E,
            ClickTaleRegisterFormSubmitSuccess: E,
            ClickTaleRegisterFormSubmitFailure: E,
            ClickTaleDispatchPersistedMessages: E,
            ClickTaleAddAugmentElementPathHandler: E,
            ClickTaleCookieDomain: function() {
                return void 0
            },
            ClickTaleIsUploadPage: function() {
                return true
            },
            ClickTaleGetVersion: function() {
                return [0, 0, 0]
            },
            ClickTaleGetPID: function() {
                return 1
            },
            ClickTaleGetUID: function() {
                return "1"
            },
            ClickTaleGetSID: function() {
                return "1"
            },
            ClickTaleGetSubscriberId: function() {
                return 1
            },
            ClickTaleGetPartition: function() {
                return "www"
            },
            ClickTaleGetClientIp: function() {
                return ""
            },
            ClickTaleIsPlayback: function() {
                return false
            },
            ClickTaleGetWRIgnoreExpiry: function() {
                return ""
            },
            ClickTaleLogicalForm: function() {
                return 0
            },
            ClickTaleRegisterElementAction: function() {
                return 0
            },
            ClickTaleFormGetInputs: function() {
                return [0]
            },
            ClickTaleIsSavedRecording: f,
            ClickTaleUnsubscribe: m,
            ClickTaleSubscribe: r,
            ClickTaleLogical: b,
            ClickTaleLogicalWithUploadPage: b,
            ClickTaleDetectAgent: e,
            ClickTaleTag: k,
            ClickTaleEvent: k,
            ClickTaleEventTrigger: i,
            ClickTaleIsRecording: c,
            ClickTaleGetAuthResponse: u,
            ClickTale: g,
            ClickTaleStop: s
        };
        for (var D in C) {
            window[D] = z[D] = C[D]
        }
    }

    function g() {
        if (!a) {
            y()
        }
        window._uxa = window._uxa || [];
        window._uxa.push(["startDataCollection"]);
        !a && B();
        a = true
    }

    function y() {
        window.ClickTaleSettings = window.ClickTaleSettings || {};
        window.ClickTaleSettings.DOM = window.ClickTaleSettings.DOM || {};
        window.ClickTaleSettings.DOM.PII = window.ClickTaleSettings.DOM.PII || {};
        window.ClickTaleSettings.DOM.PII.Text = window.ClickTaleSettings.DOM.PII.Text || [];
        window.ClickTaleSettings.DOM.PII.Text.push("[data-cs-mask]")
    }

    function f() {
        if ((t !== v.clicktaleOnly) && (window._uxa && window._uxa.push(["isRecording"]) === true)) {
            return true
        }
        return false
    }

    function e() {
        return {
            IE: 0,
            FF: 1,
            Ch: 2,
            Sa: 3,
            Op: 4,
            WK: 5,
            ED: 6,
            m: navigator.maxTouchPoints > 0,
            XHRBin: true,
            t: 2,
            v: 90,
            a: "Ch90",
            XDR: true
        }
    }

    function c() {
        return a
    }

    function u() {
        var C = {
            ip: "0.0.0.0",
            userTrackingState: "",
            rejectReason: "",
            authorized: true,
            ratio: 1,
            uid: "1",
            skipRecording: false,
            expirationMins: 0,
            sid: "1"
        };
        return a ? C : ""
    }

    function i(C) {
        if ((t === v.m2Prime) && window._uxa) {
            window._uxa.push(["trackEventTriggerRecording", C])
        }
        ClickTaleEvent(C);
        WRPubSub.publish("eventTriggered", [C])
    }

    function s() {
        if (c()) {
            p(window.ClickTaleOnStop);
            WRPubSub.publish("stop")
        }
    }

    function k(C) {
        if ((t === v.m2Prime) && window._uxa) {
            window._uxa.push(["trackPageEvent", C])
        }
    }

    function r(C, D) {
        WRPubSub.subscribe(C, D)
    }

    function m(C, D) {
        WRPubSub.remove(C, D)
    }

    function b(D) {
        var C = C || window.ClickTaleStop;
        if (c() && C) {
            C()
        }
        if ((t === v.m2Prime || t === v.m1) && window._uxa) {
            _uxa.push(["trackPageview", x(D)])
        }
        WRPubSub.publish("logical")
    }
    q()
})();