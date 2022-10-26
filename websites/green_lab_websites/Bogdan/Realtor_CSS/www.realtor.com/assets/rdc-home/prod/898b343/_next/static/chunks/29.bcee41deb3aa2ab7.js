"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [29], {
        14029: function(a, b, c) {
            c.r(b), c.d(b, {
                SessionRecording: function() {
                    return K
                }
            });
            var d, e = c(87462),
                f = c(67294),
                g = c(45697),
                h = c.n(g),
                i = c(41451),
                j = c(86854),
                k = c(15671),
                l = c(43144),
                m = c(71002),
                n = c(50209),
                o = c.n(n),
                p = function() {
                    if (!d) try {
                        window.localStorage.setItem("test", ""), window.localStorage.removeItem("test"), d = window.localStorage
                    } catch (a) {
                        d = new(o())("rdc-storage")
                    }
                    return d
                },
                q = {
                    getItem: function(a) {
                        try {
                            var b = p().getItem(a);
                            return null === b ? b : JSON.parse(b)
                        } catch (c) {
                            return console.error("failed to get with key: " + a + " from localstorage"), null
                        }
                    },
                    setItem: function(a, b) {
                        try {
                            p().setItem(a, JSON.stringify(void 0 === b ? "" : b))
                        } catch (c) {
                            console.error("failed to set value: " + b + " with key: " + a + " in localstorage")
                        }
                    },
                    removeItem: function(a) {
                        p().removeItem(a)
                    }
                },
                r = q.getItem,
                s = q.setItem,
                t = "rdc:recording-session",
                u = new Date().getTime() + 18e5,
                v = function(a) {
                    var b = {};
                    return w(a, b), b
                },
                w = function a(b, c) {
                    return Object.keys(b).forEach(function(d) {
                        if (b[d]) {
                            var e = "".concat(d).concat(x(b[d]));
                            c[e] = b[d], "object" === (0, m.Z)(b[d]) ? c[e] = a(b[d], {}) : c[e] = b[d]
                        }
                    }), c
                },
                x = function(a) {
                    var b = {
                        string: "_str",
                        boolean: "_bool",
                        object: "_obj"
                    };
                    return b[(0, m.Z)(a)] ? b[(0, m.Z)(a)] : ""
                },
                y = function() {
                    s(t, u)
                },
                z = function() {
                    var a = r(t);
                    return !!(a && parseInt(a) > new Date().getTime())
                },
                A = function() {
                    return !!window.analytics && !!window.analytics.initialized
                },
                B = function(a, b, c) {
                    return function(d) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        (c || "debug" === r("rdc.recording.log")) && console.log("%c[".concat(a, "]:"), "color: ".concat(b), d, e)
                    }
                },
                C = {
                    experiment: "feature-variable"
                },
                D = function() {
                    function a(b) {
                        var c = this,
                            d = b.eventData,
                            e = b.triggers,
                            f = b.startRecording,
                            g = b.deferRecording,
                            h = b.trackEvent;
                        (0, k.Z)(this, a), this._trackDecision = function() {
                            c.trackEvent("optimizelyDecision", c.eventData)
                        }, this.eventData = d, this.triggers = e, this.startRecording = f, this.deferRecording = g, this.trackEvent = h, this.log = B("RecordingDecision", "#06C6F1")
                    }
                    return (0, l.Z)(a, [{
                        key: "getIdentifier",
                        value: function() {
                            var a = this.eventData,
                                b = a.type,
                                c = a.decisionInfo;
                            return "".concat(b, ":").concat(c.featureKey || c.experimentKey)
                        }
                    }, {
                        key: "evaluate",
                        value: function() {
                            var a = this.eventData,
                                b = a.decisionInfo,
                                c = a.type;
                            c === C.experiment && this._testExperiment(b)
                        }
                    }, {
                        key: "_testExperiment",
                        value: function(a) {
                            var b = a.sourceInfo || a,
                                c = b.experimentKey,
                                d = b.variationKey;
                            if (this.triggers[c]) {
                                this.log("experiment \"".concat(c, "\" is considered for recording"));
                                var e = this.triggers[c];
                                if (e.variations && !e.variations.includes(d)) {
                                    this.log("served variation \"".concat(d, "\" is not a listed recording candidate"), {
                                        variations: e.variations
                                    });
                                    return
                                }
                                if (e.deferred || (this.log("experiment qualifies session for immediate recording"), this.startRecording(this._trackDecision)), e.deferred) {
                                    if (!e.trigger) {
                                        this.log("attempted to defer recording but no trigger was specified");
                                        return
                                    }
                                    this.log("experiment qualifies session for deferred recording", {
                                        trigger: e.trigger
                                    }), this.deferRecording(e.trigger, this._trackDecision)
                                }
                            }
                        }
                    }]), a
                }(),
                E = c(12406),
                F = q.getItem,
                G = {
                    DELAY: 1e3,
                    MAX_RETRIES: 10
                },
                H = function() {
                    function a(b) {
                        var c = this,
                            d = b.config,
                            e = b.userId,
                            f = b.userData;
                        (0, k.Z)(this, a), this._pollForAnalyticsOnWindow = function(a, b) {
                            if ("undefined" != typeof window) {
                                if (b <= 0) {
                                    c.log("window.analytics availablity timeout");
                                    return
                                }
                                setTimeout(function() {
                                    A() ? (c.log("window.analytics is available"), c._registerAnalyticTriggers(c.triggers.analytics), Object.keys(c.deferredRecordingQueue).length && (c.log("registering ".concat(Object.keys(c.deferredRecordingQueue).length, " queued handlers")), Object.entries(c.deferredRecordingQueue).forEach(function(a) {
                                        var b = (0, j.Z)(a, 2),
                                            d = b[0],
                                            e = b[1];
                                        c._addAnalyticsTrackEventhandler(e)
                                    }))) : (c.log("window.analytics is undefined. Checking in ".concat(a, "ms. ").concat(b, " more attempts")), c._pollForAnalyticsOnWindow(a, b - 1))
                                }, a)
                            }
                        }, this._registerAnalyticTriggers = function(a) {
                            for (var b = 0; b < a.length; b++) {
                                var d = a[b];
                                c.deferRecording(a[b], c.trackEvent, ["click", {
                                    name: d
                                }])
                            }
                        }, this._featureDecisionHandler = function(a) {
                            var b = new D({
                                eventData: a,
                                triggers: c.triggers.experiments,
                                startRecording: c.startRecording,
                                deferRecording: c.deferRecording,
                                trackEvent: c.trackEvent
                            });
                            c._isCachedDecision(b) || (c.decisionCache[b.getIdentifier()] = b.eventData, b.evaluate())
                        }, this._registerDeferedRecording = function(a) {
                            A() ? c._addAnalyticsTrackEventhandler(a) : (c.log("window.analytics not in ready state"), c.deferredRecordingQueue[a.event] || (c.log("adding handler to deferred queue"), c.deferredRecordingQueue[a.event] = a))
                        }, this.trackEvent = function(a) {
                            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            a && Object.keys(b).length && (c.log("track custom event", {
                                event: a,
                                data: v(b)
                            }), E.B(a, v(b)))
                        }, this.deferRecording = function(a, b, d) {
                            c.log("defer recording");
                            var e = function(e, f, g) {
                                "click" === e && f.label === a && (c.log("deferred trigger fired", a), c.startRecording(), b.apply(void 0, (0, i.Z)(d)))
                            };
                            e.event = a, c._registerDeferedRecording(e)
                        }, this.deferredRecordingQueue = {}, this.decisionCache = {}, this.triggers = (void 0 === d ? {} : d).triggers || {}, this.userId = e, this.log = B("RecordingManager", "#bada55"), this.userData = f
                    }
                    return (0, l.Z)(a, [{
                        key: "_isCachedDecision",
                        value: function(a) {
                            return Object.keys(this.decisionCache).includes(a.getIdentifier())
                        }
                    }, {
                        key: "_addAnalyticsTrackEventhandler",
                        value: function(a) {
                            var b, c;
                            if (b = "track", c = a.event, window.analytics.listeners(b).some(function(a) {
                                    return a.trigger === c
                                })) {
                                this.log("trigger event already exists on TRACK event");
                                return
                            }
                            this.log("adding handler to analytics TRACK event"), window.analytics.on("track", a)
                        }
                    }, {
                        key: "_identifyUser",
                        value: function() {
                            var a = {
                                displayName: this.userId
                            };
                            this.log("identify user", {
                                id: this.userId,
                                userVars: a
                            }), E.yV(this.userId, a)
                        }
                    }, {
                        key: "_addUserData",
                        value: function() {
                            this.userData && E.y_(this.userData)
                        }
                    }, {
                        key: "stopRecording",
                        value: function() {
                            E.IG(), this.log("recording session stopped")
                        }
                    }, {
                        key: "startRecording",
                        value: function(a) {
                            this.log("start recording"), this._identifyUser(), this._addUserData(), E.ur(), y(), "function" == typeof a && (this.log("invoking startRecording callback"), a())
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this._pollForAnalyticsOnWindow(G.DELAY, G.MAX_RETRIES), E.S1({
                                debug: F("fs.debug") || !1,
                                orgId: "ZPS06"
                            })
                        }
                    }, {
                        key: "addDecisionListener",
                        value: function(a) {
                            a(this._featureDecisionHandler)
                        }
                    }]), a
                }(),
                I = c(18584),
                J = function(a, b) {
                    var c = a.instance.getOptimizelyConfig();
                    return Object.keys(c.featuresMap).map(function(d) {
                        if (c.featuresMap[d] && c.featuresMap[d].experimentRules && c.featuresMap[d].experimentRules.length > 0) {
                            var e = a.instance.getVariation(c.featuresMap[d].experimentRules[0].key, b);
                            if (e) return "".concat(c.featuresMap[d].experimentRules[0].key, ":").concat(e)
                        }
                    }).filter(function(a) {
                        return !!a
                    })
                },
                K = (0, f.memo)(function(a) {
                    var b = a.config,
                        c = a.userId,
                        d = a.recordOnInit,
                        g = a.experimentHandler,
                        h = a.customizedUserData,
                        i = B("SessionRecording", "#D20E91"),
                        j = (0, I.y)().optimizely;
                    return (0, f.useEffect)(function() {
                        if (!window._fs_initialized) {
                            var a = {
                                    abTestId: J(j, function(a, b) {
                                        if (a && a.indexOf && a.substring && b && b.length) {
                                            var c = a.substring(0, b.length) === b && "=" === a[b.length] ? 0 : a.indexOf("; " + b + "=");
                                            if (!(c < 0)) {
                                                c = a.indexOf("=", c + 1);
                                                var d = a.indexOf(";", c + 1);
                                                return d < 0 && (d = a.length), a.substring(c + 1, d)
                                            }
                                        }
                                    }("undefined" != typeof document ? document.cookie : "", "__vst") || "").toString()
                                },
                                f = (0, e.Z)({}, h, {}, a),
                                k = new H({
                                    config: b,
                                    userId: c,
                                    experimentHandler: g,
                                    userData: f
                                });
                            i("Initialize"), k.init(), k.stopRecording(), (d || z()) && k.startRecording(), g && k.addDecisionListener(g)
                        }
                    }, []), f.createElement(f.Fragment, null)
                });
            K.propTypes = {
                config: h().shape({
                    triggers: h().shape({
                        experiments: h().object,
                        analytics: h().arrayOf(h().string)
                    })
                }),
                userId: h().string,
                recordOnInit: h().bool,
                experimentHandler: h().func,
                customizedUserData: h().object
            }, K.defaultProps = {
                config: {
                    triggers: {
                        experiments: {},
                        analytics: []
                    }
                },
                recordOnInit: !1,
                customizedUserData: void 0
            }
        }
    }
])