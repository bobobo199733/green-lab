if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("leven-2.1.0", [], function(a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = {
        exports: b
    };

    function h() {
        var a = [],
            b = [];
        g.exports = function(c, d) {
            if (c === d) return 0;
            var e = c;
            c.length > d.length && (c = d, d = e);
            e = c.length;
            var f = d.length;
            if (e === 0) return f;
            if (f === 0) return e;
            while (e > 0 && c.charCodeAt(~-e) === d.charCodeAt(~-f)) e--, f--;
            if (e === 0) return f;
            var g = 0;
            while (g < e && c.charCodeAt(g) === d.charCodeAt(g)) g++;
            e -= g;
            f -= g;
            if (e === 0) return f;
            var h, i, j, k = 0,
                l = 0;
            while (k < e) b[g + k] = c.charCodeAt(g + k), a[k] = ++k;
            while (l < f) {
                c = d.charCodeAt(g + l);
                i = l++;
                h = l;
                for (k = 0; k < e; k++) j = c === b[g + k] ? i : i + 1, i = a[k], h = a[k] = i > h ? j > h ? h + 1 : j : j > i ? i + 1 : j
            }
            return h
        }
    }
    var i = !1;

    function j() {
        i || (i = !0, h());
        return g.exports
    }

    function a(a) {
        switch (a) {
            case void 0:
                return j()
        }
    }
    e.exports = a
}, null);
__d("leven", ["leven-2.1.0"], function(a, b, c, d, e, f) {
    e.exports = b("leven-2.1.0")()
}, null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("react-use-gesture-9.1.3", ["react-0.0.0"], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a && typeof a === "object" && "default" in a ? a["default"] : a
    }
    var g = a(b("react-0.0.0")),
        h = {},
        i = {
            exports: h
        };

    function j() {
        Object.defineProperty(h, "__esModule", {
            value: !0
        });
        var a, b = g(),
            c = (a = b) && "object" == typeof a && "default" in a ? a["default"] : a;

        function d(a, b) {
            return a.map(function(a, c) {
                return a + b[c]
            })
        }

        function e(a, b) {
            return a.map(function(a, c) {
                return a - b[c]
            })
        }

        function f(a) {
            return Math.hypot.apply(Math, a)
        }

        function i(a, b) {
            void 0 === b && (b = a);
            var c = f(b),
                d = 0 === c ? 0 : 1 / c;
            c = b.map(function(a) {
                return d * a
            });
            return {
                distance: f(a),
                direction: c
            }
        }

        function j(a, b, c) {
            var d = f(b),
                e = 0 === d ? 0 : 1 / d,
                g = 0 === c ? 0 : 1 / c;
            c = g * d;
            d = b.map(function(a) {
                return g * a
            });
            b = b.map(function(a) {
                return e * a
            });
            return {
                velocities: d,
                velocity: c,
                distance: f(a),
                direction: b
            }
        }

        function k(a) {
            return Math.sign ? Math.sign(a) : Number(a > 0) - Number(a < 0) || +a
        }

        function l(a, b, c) {
            return 0 === b || Infinity === Math.abs(b) ? function(a, b) {
                return Math.pow(a, 5 * b)
            }(a, c) : a * b * c / (b + c * a)
        }

        function m(a, b, c, d) {
            return void 0 === d && (d = .15), 0 === d ? function(a, b, c) {
                return Math.max(b, Math.min(a, c))
            }(a, b, c) : a < b ? -l(b - a, c - b, d) + b : a > c ? +l(a - c, c - b, d) + c : a
        }

        function n() {
            return (n = Object.assign || function(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b];
                    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                }
                return a
            }).apply(this, arguments)
        }

        function o(a, b) {
            a.prototype = Object.create(b.prototype), a.prototype.constructor = a, a.__proto__ = b
        }

        function p(a, b) {
            if (null == a) return {};
            var c, d, e = {},
                f = Object.keys(a);
            for (d = 0; d < f.length; d++) b.indexOf(c = f[d]) >= 0 || (e[c] = a[c]);
            return e
        }

        function q(a) {
            if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a
        }

        function r(a, b) {
            (null == b || b > a.length) && (b = a.length);
            for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
            return d
        }

        function s(a, b) {
            var c;
            if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) {
                if (Array.isArray(a) || (c = function(a, b) {
                        if (a) {
                            if ("string" == typeof a) return r(a, void 0);
                            b = Object.prototype.toString.call(a).slice(8, -1);
                            return "Object" === b && a.constructor && (b = a.constructor.name), "Map" === b || "Set" === b ? Array.from(a) : "Arguments" === b || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? r(a, void 0) : void 0
                        }
                    }(a)) || b && a && "number" == typeof a.length) {
                    c && (a = c);
                    var d = 0;
                    return function() {
                        return d >= a.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: a[d++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (c = a[Symbol.iterator]()).next.bind(c)
        }

        function t() {}

        function u() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            return 0 === b.length ? t : 1 === b.length ? b[0] : function() {
                for (var a, c, d = s(b); !(c = d()).done;) {
                    var e = c.value;
                    a = e.apply(this, arguments) || a
                }
                return a
            }
        }

        function v(a, b) {
            if (void 0 === a) {
                if (void 0 === b) throw new Error("Must define fallback value if undefined is expected");
                a = b
            }
            return Array.isArray(a) ? a : [a, a]
        }

        function w(a, b) {
            return Object.assign({}, b, a || {})
        }

        function x(a) {
            if ("function" == typeof a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return a.apply(void 0, c)
            }
            return a
        }

        function y(a, b) {
            void 0 === a && (a = {});
            for (var c = {}, d = 0, b = Object.entries(b); d < b.length; d++) {
                var e = b[d],
                    f = e[0];
                e = e[1];
                switch (typeof e) {
                    case "function":
                        c[f] = e.call(c, a[f], f, a);
                        break;
                    case "object":
                        c[f] = y(a[f], e);
                        break;
                    case "boolean":
                        e && (c[f] = a[f])
                }
            }
            return c
        }

        function z() {
            return "undefined" != typeof window && "ontouchstart" in window
        }

        function A(a) {
            return "pointerId" in a ? null : "touchend" === a.type ? a.changedTouches : a.targetTouches
        }

        function B(a) {
            return Array.from(A(a)).map(function(a) {
                return a.identifier
            })
        }

        function C(a) {
            return {
                buttons: "buttons" in a ? a.buttons : 0,
                shiftKey: a.shiftKey,
                altKey: a.altKey,
                metaKey: a.metaKey,
                ctrlKey: a.ctrlKey
            }
        }
        var D = function(a) {
            return a
        };

        function E(a, b) {
            void 0 === b && (b = D);
            var c = A(a);
            c = c ? c[0] : a;
            return b([c.clientX, c.clientY])
        }

        function F(a, b, c) {
            void 0 === c && (c = D);
            a = Array.from(a.touches).filter(function(a) {
                return b.includes(a.identifier)
            });
            var d = a[0];
            a = a[1];
            if (!d || !a) throw Error("The event doesn't have two pointers matching the pointerIds");
            var e = a.clientX - d.clientX,
                f = a.clientY - d.clientY,
                g = (a.clientX + d.clientX) / 2;
            a = (a.clientY + d.clientY) / 2;
            return {
                values: c([Math.hypot(e, f), -180 * Math.atan2(e, f) / Math.PI]),
                origin: c([g, a])
            }
        }

        function aa(a, b) {
            void 0 === b && (b = D);
            a = a.currentTarget;
            return b([a.scrollX || a.scrollLeft || 0, a.scrollY || a.scrollTop || 0])
        }

        function G(a, b) {
            void 0 === b && (b = D);
            var c = a.deltaX,
                d = a.deltaY;
            a = a.deltaMode;
            return 1 === a ? (c *= 40, d *= 40) : 2 === a && (c *= 800, d *= 800), b([c, d])
        }

        function H(a, b) {
            return void 0 === b && (b = D), b([a.scale, a.rotation])
        }
        a = {
            threshold: function(a) {
                return void 0 === a && (a = 0), v(a)
            },
            rubberband: function(a) {
                switch (void 0 === a && (a = 0), a) {
                    case !0:
                        return v(.15);
                    case !1:
                        return v(0);
                    default:
                        return v(a)
                }
            },
            enabled: function(a) {
                return void 0 === a && (a = !0), a
            },
            triggerAllEvents: function(a) {
                return void 0 === a && (a = !1), a
            },
            initial: function(a) {
                return void 0 === a && (a = 0), "function" == typeof a ? a : v(a)
            },
            transform: !0
        };
        var I = n({}, a, {
                axis: !0,
                lockDirection: function(a) {
                    return void 0 === a && (a = !1), a
                },
                bounds: function(a) {
                    if (void 0 === a && (a = {}), "function" == typeof a) return function(b) {
                        return I.bounds(a(b))
                    };
                    var b = a.left,
                        c = a.right,
                        d = a.top,
                        e = a.bottom;
                    return [
                        [void 0 === b ? -Infinity : b, void 0 === c ? Infinity : c],
                        [void 0 === d ? -Infinity : d, void 0 === e ? Infinity : e]
                    ]
                }
            }),
            ba = "undefined" != typeof window && window.document && window.document.createElement,
            ca = {
                enabled: function(a) {
                    return void 0 === a && (a = !0), a
                },
                domTarget: !0,
                window: function(a) {
                    function b(b) {
                        return a.apply(this, arguments)
                    }
                    return b.toString = function() {
                        return a.toString()
                    }, b
                }(function(a) {
                    return void 0 === a && (a = ba ? window : void 0), a
                }),
                eventOptions: function(a) {
                    a = void 0 === a ? {} : a;
                    var b = a.passive;
                    a = a.capture;
                    return {
                        passive: void 0 === b || b,
                        capture: void 0 !== a && a
                    }
                },
                transform: !0
            },
            da = n({}, a, {
                bounds: function(a, b, c) {
                    a = c.distanceBounds;
                    var d = void 0 === a ? {} : a;
                    b = c.angleBounds;
                    var e = void 0 === b ? {} : b,
                        f = function(a) {
                            a = w(x(d, a), {
                                min: -Infinity,
                                max: Infinity
                            });
                            return [a.min, a.max]
                        },
                        g = function(a) {
                            a = w(x(e, a), {
                                min: -Infinity,
                                max: Infinity
                            });
                            return [a.min, a.max]
                        };
                    return "function" != typeof d && "function" != typeof e ? [f(), g()] : function(a) {
                        return [f(a), g(a)]
                    }
                }
            }),
            ea = n({}, I, {
                useTouch: function(a) {
                    void 0 === a && (a = !1);
                    var b = z(),
                        c = "undefined" != typeof window && "onpointerdown" in window;
                    return !(!a || !b) || !(!b || c)
                },
                experimental_preventWindowScrollY: function(a) {
                    return void 0 === a && (a = !1), a
                },
                threshold: function(a, b, c) {
                    b = c.filterTaps;
                    b = void 0 !== b && b;
                    var d = c.lockDirection;
                    c = c.axis;
                    a = v(a, b ? 3 : void 0 !== d && d || (void 0 === c ? void 0 : c) ? 1 : 0);
                    return this.filterTaps = b, a
                },
                swipeVelocity: function(a) {
                    return void 0 === a && (a = .5), v(a)
                },
                swipeDistance: function(a) {
                    return void 0 === a && (a = 50), v(a)
                },
                swipeDuration: function(a) {
                    return void 0 === a && (a = 250), a
                },
                delay: function(a) {
                    switch (void 0 === a && (a = 0), a) {
                        case !0:
                            return 180;
                        case !1:
                            return 0;
                        default:
                            return a
                    }
                }
            });

        function J(a) {
            return void 0 === a && (a = {}), y(a, ca)
        }

        function K(a) {
            return void 0 === a && (a = {}), y(a, I)
        }

        function L(a) {
            return void 0 === a && (a = {}), y(a, da)
        }

        function M(a) {
            return void 0 === a && (a = {}), y(a, ea)
        }

        function fa(a) {
            var b = a.domTarget,
                c = a.eventOptions,
                d = a.window,
                e = a.enabled;
            a = p(a, ["domTarget", "eventOptions", "window", "enabled"]);
            b = J({
                domTarget: b,
                eventOptions: c,
                window: d,
                enabled: e
            });
            return b.move = K(a), b
        }

        function ga(a) {
            var b = a.domTarget,
                c = a.eventOptions,
                d = a.window,
                e = a.enabled;
            a = p(a, ["domTarget", "eventOptions", "window", "enabled"]);
            b = J({
                domTarget: b,
                eventOptions: c,
                window: d,
                enabled: e
            });
            return b.hover = n({
                enabled: !0
            }, a), b
        }

        function ha(a) {
            var b = a.domTarget,
                c = a.eventOptions,
                d = a.window,
                e = a.enabled;
            a = p(a, ["domTarget", "eventOptions", "window", "enabled"]);
            b = J({
                domTarget: b,
                eventOptions: c,
                window: d,
                enabled: e
            });
            return b.drag = M(a), b
        }

        function ia(a) {
            var b = a.domTarget,
                c = a.eventOptions,
                d = a.window,
                e = a.enabled;
            a = p(a, ["domTarget", "eventOptions", "window", "enabled"]);
            b = J({
                domTarget: b,
                eventOptions: c,
                window: d,
                enabled: e
            });
            return b.pinch = L(a), b
        }

        function ja(a) {
            var b = a.domTarget,
                c = a.eventOptions,
                d = a.window,
                e = a.enabled;
            a = p(a, ["domTarget", "eventOptions", "window", "enabled"]);
            b = J({
                domTarget: b,
                eventOptions: c,
                window: d,
                enabled: e
            });
            return b.scroll = K(a), b
        }

        function ka(a) {
            var b = a.domTarget,
                c = a.eventOptions,
                d = a.window,
                e = a.enabled;
            a = p(a, ["domTarget", "eventOptions", "window", "enabled"]);
            b = J({
                domTarget: b,
                eventOptions: c,
                window: d,
                enabled: e
            });
            return b.wheel = K(a), b
        }

        function N(a) {
            return n({
                _active: !1,
                _blocked: !1,
                _intentional: [!1, !1],
                _movement: [0, 0],
                _initial: [0, 0],
                _bounds: [
                    [-Infinity, Infinity],
                    [-Infinity, Infinity]
                ],
                _threshold: [0, 0],
                _lastEventType: void 0,
                _dragStarted: !1,
                _dragPreventScroll: !1,
                _dragIsTap: !0,
                _dragDelayed: !1,
                event: void 0,
                intentional: !1,
                values: [0, 0],
                velocities: [0, 0],
                delta: [0, 0],
                movement: [0, 0],
                offset: [0, 0],
                lastOffset: [0, 0],
                direction: [0, 0],
                initial: [0, 0],
                previous: [0, 0],
                first: !1,
                last: !1,
                active: !1,
                timeStamp: 0,
                startTime: 0,
                elapsedTime: 0,
                cancel: t,
                canceled: !1,
                memo: void 0,
                args: void 0
            }, a)
        }

        function O() {
            return {
                shared: {
                    hovering: !1,
                    scrolling: !1,
                    wheeling: !1,
                    dragging: !1,
                    moving: !1,
                    pinching: !1,
                    touches: 0,
                    buttons: 0,
                    down: !1,
                    shiftKey: !1,
                    altKey: !1,
                    metaKey: !1,
                    ctrlKey: !1,
                    locked: !1
                },
                drag: N({
                    _pointerId: void 0,
                    axis: void 0,
                    xy: [0, 0],
                    vxvy: [0, 0],
                    velocity: 0,
                    distance: 0,
                    tap: !1,
                    swipe: [0, 0]
                }),
                pinch: N({
                    _pointerIds: [],
                    da: [0, 0],
                    vdva: [0, 0],
                    origin: void 0,
                    turns: 0
                }),
                wheel: N({
                    axis: void 0,
                    xy: [0, 0],
                    vxvy: [0, 0],
                    velocity: 0,
                    distance: 0
                }),
                move: N({
                    axis: void 0,
                    xy: [0, 0],
                    vxvy: [0, 0],
                    velocity: 0,
                    distance: 0
                }),
                scroll: N({
                    axis: void 0,
                    xy: [0, 0],
                    vxvy: [0, 0],
                    velocity: 0,
                    distance: 0
                })
            }
        }
        var P = new Map,
            la = function(a) {
                return a
            };
        a = function() {
            function a(a, b) {
                var c = this;
                void 0 === b && (b = []), this.controller = a, this.args = b, this.debounced = !0, this.setTimeout = function(a, b) {
                    var d;
                    void 0 === b && (b = 140), clearTimeout(c.controller.timeouts[c.stateKey]);
                    for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
                    c.controller.timeouts[c.stateKey] = (d = window).setTimeout.apply(d, [a, b].concat(f))
                }, this.clearTimeout = function() {
                    clearTimeout(c.controller.timeouts[c.stateKey])
                }, this.fireGestureHandler = function(a) {
                    if (void 0 === a && (a = !1), c.state._blocked) return c.debounced || (c.state._active = !1, c.clean()), null;
                    if (!a && !c.state.intentional && !c.config.triggerAllEvents) return null;
                    if (c.state.intentional) {
                        a = c.state.active;
                        var b = c.state._active;
                        c.state.active = b, c.state.first = b && !a, c.state.last = a && !b, c.controller.state.shared[c.ingKey] = b
                    }
                    a = c.controller.pointerIds.size || c.controller.touchIds.size;
                    b = c.controller.state.shared.buttons > 0 || a > 0;
                    a = n({}, c.controller.state.shared, c.state, c.mapStateValues(c.state), {
                        locked: !!document.pointerLockElement,
                        touches: a,
                        down: b
                    });
                    b = c.handler(a);
                    return c.state.memo = void 0 !== b ? b : c.state.memo, a
                }, this.controller = a, this.args = b
            }
            var b = a.prototype;
            return b.updateSharedState = function(a) {
                Object.assign(this.controller.state.shared, a)
            }, b.updateGestureState = function(a) {
                Object.assign(this.state, a)
            }, b.checkIntentionality = function(a, b) {
                return {
                    _intentional: a,
                    _blocked: !1
                }
            }, b.getMovement = function(a) {
                var b = this.config.rubberband,
                    c = this.state,
                    f = c._bounds,
                    g = c._initial,
                    h = c._active,
                    i = c._intentional,
                    j = c.lastOffset,
                    k = c.movement;
                c = c._threshold;
                var l = this.getInternalMovement(a, this.state),
                    m = !1 === i[0] ? Q(l[0], c[0]) : i[0];
                c = !1 === i[1] ? Q(l[1], c[1]) : i[1];
                i = this.checkIntentionality([m, c], l);
                if (i._blocked) return n({}, i, {
                    _movement: l,
                    delta: [0, 0]
                });
                m = i._intentional;
                c = l;
                l = [!1 !== m[0] ? l[0] - m[0] : 0, !1 !== m[1] ? l[1] - m[1] : 0];
                j = d(l, j);
                h = h ? b : [0, 0];
                return l = ma(f, d(l, g), h), n({}, i, {
                    intentional: !1 !== m[0] || !1 !== m[1],
                    _initial: g,
                    _movement: c,
                    movement: l,
                    values: a,
                    offset: ma(f, j, h),
                    delta: e(l, k)
                })
            }, b.clean = function() {
                this.clearTimeout()
            }, (b = [{
                key: "config",
                get: function() {
                    return this.controller.config[this.stateKey]
                }
            }, {
                key: "enabled",
                get: function() {
                    return this.controller.config.enabled && this.config.enabled
                }
            }, {
                key: "state",
                get: function() {
                    return this.controller.state[this.stateKey]
                }
            }, {
                key: "handler",
                get: function() {
                    return this.controller.handlers[this.stateKey]
                }
            }, {
                key: "transform",
                get: function() {
                    return this.config.transform || this.controller.config.transform || la
                }
            }]) && function(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }(a.prototype, b), a
        }();

        function Q(a, b) {
            return Math.abs(a) >= b && k(a) * b
        }

        function ma(a, b, c) {
            var d = b[1],
                e = c[1],
                f = a[0];
            a = a[1];
            var g = a[0];
            a = a[1];
            return [m(b[0], f[0], f[1], c[0]), m(d, g, a, e)]
        }

        function R(a, b, c) {
            a = a.state;
            var d = b.timeStamp;
            return {
                _lastEventType: b.type,
                event: b,
                timeStamp: d,
                elapsedTime: c ? 0 : d - a.startTime,
                previous: a.values
            }
        }

        function S(a, b, c, d) {
            var f = a.config,
                g = a.stateKey,
                h = a.args,
                i = a.transform;
            a = a.state.offset;
            c = c.timeStamp;
            var j = f.initial,
                k = f.bounds;
            f = e(i(f.threshold), i([0, 0])).map(Math.abs);
            i = n({}, O()[g], {
                _active: !0,
                args: h,
                values: b,
                initial: null != d ? d : b,
                _threshold: f,
                offset: a,
                lastOffset: a,
                startTime: c
            });
            return n({}, i, {
                _initial: x(j, i),
                _bounds: x(k, i)
            })
        }
        var na = function(a) {
            var b = this;
            this.classes = a, this.pointerIds = new Set, this.touchIds = new Set, this.supportsTouchEvents = z(), this.supportsGestureEvents = function() {
                try {
                    return "constructor" in GestureEvent
                } catch (a) {
                    return !1
                }
            }(), this.bind = function() {
                for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                for (var e, f = {}, g = s(b.classes); !(e = g()).done;) {
                    var h = e.value;
                    new h(b, c).addBindings(f)
                }
                var i = function(a) {
                    T(f, a, function(d) {
                        return b.nativeRefs[a](n({}, b.state.shared, {
                            event: d,
                            args: c
                        }))
                    })
                };
                for (var j in b.nativeRefs) i(j);
                return b.config.domTarget ? sa(b, f) : ta(b, f)
            }, this.effect = function() {
                return b.config.domTarget && b.bind(), b.clean
            }, this.clean = function() {
                var a = va(b.config),
                    c = b.config.eventOptions;
                a && U(a, ua(b.domListeners), c), Object.values(b.timeouts).forEach(clearTimeout), (function(a) {
                    var b = a.config,
                        c = b.window;
                    b = b.eventOptions;
                    var d = a.windowListeners;
                    if (c) {
                        for (var e in d) U(c, d[e], b);
                        a.windowListeners = {}
                    }
                })(b)
            }, this.classes = a, this.state = O(), this.timeouts = {}, this.domListeners = [], this.windowListeners = {}
        };

        function oa(a, b) {
            "pointerId" in b ? a.pointerIds.add(b.pointerId) : a.touchIds = new Set(B(b))
        }

        function pa(a, b) {
            "pointerId" in b ? a.pointerIds["delete"](b.pointerId) : B(b).forEach(function(b) {
                return a.touchIds["delete"](b)
            })
        }

        function qa(a, b, c) {
            var d = a.config;
            a = a.windowListeners;
            void 0 === c && (c = d.eventOptions), d.window && (U(d.window, a[b], c), delete a[b])
        }

        function ra(a, b, c, d) {
            var e = a.config;
            a = a.windowListeners;
            void 0 === c && (c = []), void 0 === d && (d = e.eventOptions), e.window && (U(e.window, a[b], d), wa(e.window, a[b] = c, d))
        }

        function sa(a, b) {
            var c = a.config;
            a = a.domListeners;
            var d = va(c);
            if (!d) throw new Error("domTarget must be defined");
            c = c.eventOptions;
            U(d, ua(a), c);
            for (var e = 0, b = Object.entries(b); e < b.length; e++) {
                var f = b[e],
                    g = f[1];
                f = f[0].slice(2).toLowerCase();
                a.push([f, u.apply(void 0, g)])
            }
            wa(d, a, c)
        }

        function ta(a, b) {
            for (var c = {}, a = a.config.eventOptions.capture ? "Capture" : "", d = 0, b = Object.entries(b); d < b.length; d++) {
                var e = b[d],
                    f = e[0];
                e = e[1];
                e = Array.isArray(e) ? e : [e];
                c[f + a] = u.apply(void 0, e)
            }
            return c
        }

        function ua(a) {
            return void 0 === a && (a = []), a.splice(0, a.length)
        }

        function va(a) {
            a = a.domTarget;
            return a && "current" in a ? a.current : a
        }

        function T(a, b, c) {
            a[b] || (a[b] = []), a[b].push(c)
        }

        function wa(a, b, c) {
            void 0 === b && (b = []), void 0 === c && (c = {});
            for (var d, b = s(b); !(d = b()).done;) {
                d = d.value;
                a.addEventListener(d[0], d[1], c)
            }
        }

        function U(a, b, c) {
            void 0 === b && (b = []), void 0 === c && (c = {});
            for (var d, b = s(b); !(d = b()).done;) {
                d = d.value;
                a.removeEventListener(d[0], d[1], c)
            }
        }

        function V(a, b, d) {
            void 0 === d && (d = {});
            var e = function(a) {
                    var b = new Set;
                    return a.drag && b.add(P.get("drag")), a.wheel && b.add(P.get("wheel")), a.scroll && b.add(P.get("scroll")), a.move && b.add(P.get("move")), a.pinch && b.add(P.get("pinch")), a.hover && b.add(P.get("hover")), b
                }(a),
                f = c.useMemo(function() {
                    return new na(e)
                }, []);
            return f.config = b, f.handlers = a, f.nativeRefs = d, c.useEffect(f.effect, []), f.config.domTarget ? xa : f.bind
        }

        function xa() {}
        var W = function(a) {
            function b() {
                return a.apply(this, arguments) || this
            }
            o(b, a);
            var c = b.prototype;
            return c.getInternalMovement = function(a, b) {
                return e(a, b.initial)
            }, c.checkIntentionality = function(a, b) {
                if (!1 === a[0] && !1 === a[1]) return {
                    _intentional: a,
                    axis: this.state.axis
                };
                b = b.map(Math.abs);
                var c = b[0];
                b = b[1];
                c = this.state.axis || (c > b ? "x" : c < b ? "y" : void 0);
                return this.config.axis || this.config.lockDirection ? c ? this.config.axis && c !== this.config.axis ? {
                    _intentional: a,
                    _blocked: !0,
                    axis: c
                } : (a["x" === c ? 1 : 0] = !1, {
                    _intentional: a,
                    _blocked: !1,
                    axis: c
                }) : {
                    _intentional: [!1, !1],
                    _blocked: !1,
                    axis: c
                } : {
                    _intentional: a,
                    _blocked: !1,
                    axis: c
                }
            }, c.getKinematics = function(a, b) {
                a = this.getMovement(a);
                return a._blocked || Object.assign(a, j(a.movement, a.delta, b.timeStamp - this.state.timeStamp)), a
            }, c.mapStateValues = function(a) {
                return {
                    xy: a.values,
                    vxvy: a.velocities
                }
            }, b
        }(a);

        function ya(a) {
            "persist" in a && "function" == typeof a.persist && a.persist()
        }
        var za = function(a) {
            function b() {
                var b;
                return (b = a.apply(this, arguments) || this).ingKey = "dragging", b.stateKey = "drag", b.setPointerCapture = function(a) {
                    if (!b.config.useTouch && !document.pointerLockElement) {
                        var c = a.target;
                        a = a.pointerId;
                        c && "setPointerCapture" in c && c.setPointerCapture(a), b.updateGestureState({
                            _dragTarget: c,
                            _dragPointerId: a
                        })
                    }
                }, b.releasePointerCapture = function() {
                    if (!b.config.useTouch && !document.pointerLockElement) {
                        var a = b.state,
                            c = a._dragTarget;
                        a = a._dragPointerId;
                        if (a && c && "releasePointerCapture" in c && (!("hasPointerCapture" in c) || c.hasPointerCapture(a))) try {
                            c.releasePointerCapture(a)
                        } catch (a) {}
                    }
                }, b.preventScroll = function(a) {
                    b.state._dragPreventScroll && a.cancelable && a.preventDefault()
                }, b.getEventId = function(a) {
                    return b.config.useTouch ? a.changedTouches[0].identifier : a.pointerId
                }, b.isValidEvent = function(a) {
                    return b.state._pointerId === b.getEventId(a)
                }, b.shouldPreventWindowScrollY = b.config.experimental_preventWindowScrollY && b.controller.supportsTouchEvents, b.setUpWindowScrollDetection = function(a) {
                    ya(a), ra(b.controller, b.stateKey, [
                        ["touchmove", b.preventScroll],
                        ["touchend", b.clean.bind(q(b))],
                        ["touchcancel", b.clean.bind(q(b))]
                    ], {
                        passive: !1
                    }), b.setTimeout(b.startDrag.bind(q(b)), 250, a)
                }, b.setUpDelayedDragTrigger = function(a) {
                    b.state._dragDelayed = !0, ya(a), b.setTimeout(b.startDrag.bind(q(b)), b.config.delay, a)
                }, b.setStartState = function(a) {
                    var c = E(a, b.transform);
                    b.updateSharedState(C(a)), b.updateGestureState(n({}, S(q(b), c, a), R(q(b), a, !0), {
                        _pointerId: b.getEventId(a)
                    })), b.updateGestureState(b.getMovement(c))
                }, b.onDragStart = function(a) {
                    oa(b.controller, a), b.enabled && !b.state._active && (b.setStartState(a), b.setPointerCapture(a), b.shouldPreventWindowScrollY ? b.setUpWindowScrollDetection(a) : b.config.delay > 0 ? b.setUpDelayedDragTrigger(a) : b.startDrag(a, !0))
                }, b.onDragChange = function(a) {
                    if (!b.state.canceled && b.state._active && b.isValidEvent(a) && (b.state._lastEventType !== a.type || a.timeStamp !== b.state.timeStamp)) {
                        var c;
                        c = document.pointerLockElement ? d(b.transform([a.movementX, a.movementY]), b.state.values) : E(a, b.transform);
                        c = b.getKinematics(c, a);
                        if (!b.state._dragStarted) {
                            if (b.state._dragDelayed) return void b.startDrag(a);
                            if (!b.shouldPreventWindowScrollY) return;
                            if (b.state._dragPreventScroll || !c.axis) return;
                            if ("x" !== c.axis) return void(b.state._active = !1);
                            b.startDrag(a)
                        }
                        var e = C(a);
                        b.updateSharedState(e);
                        e = R(q(b), a);
                        a = f(c._movement);
                        var g = b.state._dragIsTap;
                        g && a >= 3 && (g = !1), b.updateGestureState(n({}, e, c, {
                            _dragIsTap: g
                        })), b.fireGestureHandler()
                    }
                }, b.onDragEnd = function(a) {
                    if (pa(b.controller, a), b.isValidEvent(a) && (b.clean(), b.state._active)) {
                        b.state._active = !1;
                        var c = b.state._dragIsTap,
                            d = b.state.velocities,
                            e = d[0];
                        d = d[1];
                        var f = b.state.movement,
                            g = f[0];
                        f = f[1];
                        var h = b.state._intentional,
                            i = h[0];
                        h = h[1];
                        var j = b.config.swipeVelocity,
                            l = j[0];
                        j = j[1];
                        var m = b.config.swipeDistance,
                            o = m[0];
                        m = m[1];
                        var p = b.config.swipeDuration;
                        a = n({}, R(q(b), a), b.getMovement(b.state.values));
                        var t = [0, 0];
                        a.elapsedTime < p && (!1 !== i && Math.abs(e) > l && Math.abs(g) > o && (t[0] = k(e)), !1 !== h && Math.abs(d) > j && Math.abs(f) > m && (t[1] = k(d))), b.updateSharedState({
                            buttons: 0
                        }), b.updateGestureState(n({}, a, {
                            tap: c,
                            swipe: t
                        })), b.fireGestureHandler(b.config.filterTaps && !0 === c)
                    }
                }, b.clean = function() {
                    a.prototype.clean.call(q(b)), b.state._dragStarted = !1, b.releasePointerCapture(), qa(b.controller, b.stateKey)
                }, b.onCancel = function() {
                    b.state.canceled || (b.updateGestureState({
                        canceled: !0,
                        _active: !1
                    }), b.updateSharedState({
                        buttons: 0
                    }), setTimeout(function() {
                        return b.fireGestureHandler()
                    }, 0))
                }, b.onClick = function(a) {
                    b.state._dragIsTap || a.stopPropagation()
                }, b
            }
            o(b, a);
            var c = b.prototype;
            return c.startDrag = function(a, b) {
                void 0 === b && (b = !1), this.state._active && !this.state._dragStarted && (b || this.setStartState(a), this.updateGestureState({
                    _dragStarted: !0,
                    _dragPreventScroll: !0,
                    cancel: this.onCancel
                }), this.clearTimeout(), this.fireGestureHandler())
            }, c.addBindings = function(a) {
                this.config.useTouch ? (T(a, "onTouchStart", this.onDragStart), T(a, "onTouchMove", this.onDragChange), T(a, "onTouchEnd", this.onDragEnd), T(a, "onTouchCancel", this.onDragEnd)) : (T(a, "onPointerDown", this.onDragStart), T(a, "onPointerMove", this.onDragChange), T(a, "onPointerUp", this.onDragEnd), T(a, "onPointerCancel", this.onDragEnd)), this.config.filterTaps && T(a, this.controller.config.eventOptions.capture ? "onClick" : "onClickCapture", this.onClick)
            }, b
        }(W);

        function X(a, b) {
            var c, d, e = [],
                f = !1;
            return function() {
                for (var g = arguments.length, h = new Array(g), i = 0; i < g; i++) h[i] = arguments[i];
                return f && c === this && b(h, e) || (d = a.apply(this, h), f = !0, c = this, e = h), d
            }
        }

        function Y(a, b) {
            try {
                return function a(b, c) {
                    if (b === c) return !0;
                    if (b && c && "object" == typeof b && "object" == typeof c) {
                        if (b.constructor !== c.constructor) return !1;
                        var d, e, f;
                        if (Array.isArray(b)) {
                            if ((d = b.length) !== c.length) return !1;
                            for (e = d; 0 != e--;)
                                if (!a(b[e], c[e])) return !1;
                            return !0
                        }
                        if ("function" == typeof Map && b instanceof Map && c instanceof Map) {
                            if (b.size !== c.size) return !1;
                            for (f = b.entries(); !(e = f.next()).done;)
                                if (!c.has(e.value[0])) return !1;
                            for (f = b.entries(); !(e = f.next()).done;)
                                if (!a(e.value[1], c.get(e.value[0]))) return !1;
                            return !0
                        }
                        if ("function" == typeof Set && b instanceof Set && c instanceof Set) {
                            if (b.size !== c.size) return !1;
                            for (f = b.entries(); !(e = f.next()).done;)
                                if (!c.has(e.value[0])) return !1;
                            return !0
                        }
                        if (b.constructor === RegExp) return b.source === c.source && b.flags === c.flags;
                        if (b.valueOf !== Object.prototype.valueOf) return b.valueOf() === c.valueOf();
                        if (b.toString !== Object.prototype.toString) return b.toString() === c.toString();
                        if ((d = (f = Object.keys(b)).length) !== Object.keys(c).length) return !1;
                        for (e = d; 0 != e--;)
                            if (!Object.prototype.hasOwnProperty.call(c, f[e])) return !1;
                        if ("undefined" != typeof Element && b instanceof Element) return !1;
                        for (e = d; 0 != e--;)
                            if (!("_owner" === f[e] && b.$$typeof || a(b[f[e]], c[f[e]]))) return !1;
                        return !0
                    }
                    return b != b && c != c
                }(a, b)
            } catch (a) {
                if ((a.message || "").match(/stack|recursion/i)) return !1, !1;
                throw a
            }
        }
        var Aa = function(a) {
                function b() {
                    var b;
                    return (b = a.apply(this, arguments) || this).ingKey = "pinching", b.stateKey = "pinch", b.onPinchStart = function(a) {
                        oa(b.controller, a);
                        var c = b.controller.touchIds;
                        if (b.enabled && !(b.state._active && b.state._pointerIds.every(function(a) {
                                return c.has(a)
                            }) || c.size < 2)) {
                            var d = Array.from(c).slice(0, 2),
                                e = F(a, d, b.transform),
                                f = e.values;
                            e = e.origin;
                            b.updateSharedState(C(a)), b.updateGestureState(n({}, S(q(b), f, a), R(q(b), a, !0), {
                                _pointerIds: d,
                                cancel: b.onCancel,
                                origin: e
                            })), b.updateGestureState(b.getMovement(f)), b.fireGestureHandler()
                        }
                    }, b.onPinchChange = function(a) {
                        var c = b.state;
                        if (!c.canceled && c._active && a.timeStamp !== b.state.timeStamp) {
                            c = C(a);
                            b.updateSharedState(c);
                            try {
                                c = F(a, b.state._pointerIds, b.transform);
                                var d = c.origin;
                                c = b.getKinematics(c.values, a);
                                b.updateGestureState(n({}, R(q(b), a), c, {
                                    origin: d
                                })), b.fireGestureHandler()
                            } catch (c) {
                                b.onPinchEnd(a)
                            }
                        }
                    }, b.onPinchEnd = function(a) {
                        pa(b.controller, a);
                        var c = B(a);
                        b.state._pointerIds.every(function(a) {
                            return !c.includes(a)
                        }) || (b.clean(), b.state._active && (b.updateGestureState(n({}, R(q(b), a), b.getMovement(b.state.values), {
                            _active: !1
                        })), b.fireGestureHandler()))
                    }, b.onCancel = function() {
                        b.state.canceled || (b.updateGestureState({
                            _active: !1,
                            canceled: !0
                        }), setTimeout(function() {
                            return b.fireGestureHandler()
                        }, 0))
                    }, b.onGestureStart = function(a) {
                        if (b.enabled) {
                            a.preventDefault();
                            var c = H(a, b.transform);
                            b.updateSharedState(C(a)), b.updateGestureState(n({}, S(q(b), c, a), R(q(b), a, !0), {
                                origin: [a.clientX, a.clientY],
                                cancel: b.onCancel
                            })), b.updateGestureState(b.getMovement(c)), b.fireGestureHandler()
                        }
                    }, b.onGestureChange = function(a) {
                        var c = b.state;
                        if (!c.canceled && c._active) {
                            a.preventDefault();
                            c = C(a);
                            b.updateSharedState(c);
                            c = H(a, b.transform);
                            c[0] = 260 * (c[0] - b.state.event.scale) + b.state.values[0];
                            c = b.getKinematics(c, a);
                            b.updateGestureState(n({}, R(q(b), a), c, {
                                origin: [a.clientX, a.clientY]
                            })), b.fireGestureHandler()
                        }
                    }, b.onGestureEnd = function(a) {
                        b.clean(), b.state._active && (b.updateGestureState(n({}, R(q(b), a), b.getMovement(b.state.values), {
                            _active: !1,
                            origin: [a.clientX, a.clientY]
                        })), b.fireGestureHandler())
                    }, b.wheelShouldRun = function(a) {
                        return b.enabled && a.ctrlKey
                    }, b.getWheelValuesFromEvent = function(a) {
                        var c = G(a, b.transform),
                            d = b.state.values,
                            e = d[1];
                        c = 7 * -c[1];
                        e = void 0 !== e ? e : 0;
                        return {
                            values: [d[0] + c, e],
                            origin: [a.clientX, a.clientY],
                            delta: [c, e]
                        }
                    }, b.onWheel = function(a) {
                        b.wheelShouldRun(a) && (b.setTimeout(b.onWheelEnd), b.state._active ? b.onWheelChange(a) : b.onWheelStart(a))
                    }, b.onWheelStart = function(a) {
                        var c = b.getWheelValuesFromEvent(a),
                            d = c.values,
                            e = c.delta;
                        c = c.origin;
                        a.cancelable && a.preventDefault(), b.updateSharedState(C(a)), b.updateGestureState(n({}, S(q(b), d, a, b.state.values), R(q(b), a, !0), {
                            offset: d,
                            delta: e,
                            origin: c
                        })), b.updateGestureState(b.getMovement(d)), b.fireGestureHandler()
                    }, b.onWheelChange = function(a) {
                        a.cancelable && a.preventDefault(), b.updateSharedState(C(a));
                        var c = b.getWheelValuesFromEvent(a),
                            d = c.values,
                            e = c.origin;
                        c = c.delta;
                        b.updateGestureState(n({}, R(q(b), a), b.getKinematics(d, a), {
                            origin: e,
                            delta: c
                        })), b.fireGestureHandler()
                    }, b.onWheelEnd = function() {
                        b.clean(), b.state._active && (b.state._active = !1, b.updateGestureState(b.getMovement(b.state.values)), b.fireGestureHandler())
                    }, b
                }
                return o(b, a), b.prototype.addBindings = function(a) {
                    this.controller.config.domTarget && !this.controller.supportsTouchEvents && this.controller.supportsGestureEvents ? (T(a, "onGestureStart", this.onGestureStart), T(a, "onGestureChange", this.onGestureChange), T(a, "onGestureEnd", this.onGestureEnd)) : (T(a, "onTouchStart", this.onPinchStart), T(a, "onTouchMove", this.onPinchChange), T(a, "onTouchEnd", this.onPinchEnd), T(a, "onTouchCancel", this.onPinchEnd), T(a, "onWheel", this.onWheel))
                }, b
            }(function(a) {
                function b() {
                    return a.apply(this, arguments) || this
                }
                o(b, a);
                var c = b.prototype;
                return c.getInternalMovement = function(a, b) {
                    var c = b.values[1],
                        d = a[0];
                    a = a[1];
                    a = void 0 === a ? c : a;
                    c = a - c;
                    var f = b.turns;
                    return Math.abs(c) > 270 && (f += k(c)), e([d, a - 360 * f], b.initial)
                }, c.getKinematics = function(a, b) {
                    var c = this.getMovement(a);
                    return n({
                        turns: (a[1] - c._movement[1] - this.state.initial[1]) / 360
                    }, c, p(j(c.movement, c.delta, b.timeStamp - this.state.timeStamp), ["distance", "velocity"]))
                }, c.mapStateValues = function(a) {
                    return {
                        da: a.values,
                        vdva: a.velocities
                    }
                }, b
            }(a)),
            Ba = function(a) {
                function b() {
                    var b;
                    return (b = a.apply(this, arguments) || this).ingKey = "wheeling", b.stateKey = "wheel", b.debounced = !0, b.handleEvent = function(a) {
                        if ((!a.ctrlKey || !("pinch" in b.controller.handlers)) && b.enabled) {
                            b.setTimeout(b.onEnd), b.updateSharedState(C(a));
                            var c = d(G(a, b.transform), b.state.values);
                            if (b.state._active) b.updateGestureState(n({}, R(q(b), a), b.getKinematics(c, a)));
                            else {
                                b.updateGestureState(n({}, S(q(b), c, a, b.state.values), R(q(b), a, !0)));
                                a = b.getMovement(c);
                                c = i(a.delta);
                                b.updateGestureState(a), b.updateGestureState(c)
                            }
                            b.fireGestureHandler()
                        }
                    }, b.onEnd = function() {
                        if (b.clean(), b.state._active) {
                            var a = b.getMovement(b.state.values);
                            b.updateGestureState(a), b.updateGestureState({
                                _active: !1,
                                velocities: [0, 0],
                                velocity: 0
                            }), b.fireGestureHandler()
                        }
                    }, b
                }
                return o(b, a), b.prototype.addBindings = function(a) {
                    T(a, "onWheel", this.handleEvent)
                }, b
            }(W),
            Z = function(a) {
                function b() {
                    var b;
                    return (b = a.apply(this, arguments) || this).ingKey = "moving", b.stateKey = "move", b.debounced = !0, b.onMove = function(a) {
                        b.enabled && (b.setTimeout(b.onMoveEnd), b.state._active ? b.onMoveChange(a) : b.onMoveStart(a))
                    }, b.onMoveStart = function(a) {
                        b.updateSharedState(C(a));
                        var c = E(a, b.transform);
                        b.updateGestureState(n({}, S(q(b), c, a), R(q(b), a, !0))), b.updateGestureState(b.getMovement(c)), b.fireGestureHandler()
                    }, b.onMoveChange = function(a) {
                        b.updateSharedState(C(a));
                        var c = E(a, b.transform);
                        b.updateGestureState(n({}, R(q(b), a), b.getKinematics(c, a))), b.fireGestureHandler()
                    }, b.onMoveEnd = function() {
                        b.clean(), b.state._active && (b.updateGestureState(b.getMovement(b.state.values)), b.updateGestureState({
                            velocities: [0, 0],
                            velocity: 0,
                            _active: !1
                        }), b.fireGestureHandler())
                    }, b.hoverTransform = function() {
                        return b.controller.config.hover.transform || b.controller.config.transform
                    }, b.onPointerEnter = function(a) {
                        if (b.controller.state.shared.hovering = !0, b.controller.config.enabled) {
                            if (b.controller.config.hover.enabled) {
                                var c = E(a, b.hoverTransform());
                                c = n({}, b.controller.state.shared, b.state, R(q(b), a, !0), {
                                    args: b.args,
                                    values: c,
                                    active: !0,
                                    hovering: !0
                                });
                                b.controller.handlers.hover(n({}, c, b.mapStateValues(c)))
                            }
                            "move" in b.controller.handlers && b.onMoveStart(a)
                        }
                    }, b.onPointerLeave = function(a) {
                        if (b.controller.state.shared.hovering = !1, "move" in b.controller.handlers && b.onMoveEnd(), b.controller.config.hover.enabled) {
                            var c = E(a, b.hoverTransform());
                            a = n({}, b.controller.state.shared, b.state, R(q(b), a), {
                                args: b.args,
                                values: c,
                                active: !1
                            });
                            b.controller.handlers.hover(n({}, a, b.mapStateValues(a)))
                        }
                    }, b
                }
                return o(b, a), b.prototype.addBindings = function(a) {
                    "move" in this.controller.handlers && T(a, "onPointerMove", this.onMove), "hover" in this.controller.handlers && (T(a, "onPointerEnter", this.onPointerEnter), T(a, "onPointerLeave", this.onPointerLeave))
                }, b
            }(W),
            Ca = function(a) {
                function b() {
                    var b;
                    return (b = a.apply(this, arguments) || this).ingKey = "scrolling", b.stateKey = "scroll", b.debounced = !0, b.handleEvent = function(a) {
                        if (b.enabled) {
                            b.clearTimeout(), b.setTimeout(b.onEnd);
                            var c = aa(a, b.transform);
                            if (b.updateSharedState(C(a)), b.state._active) b.updateGestureState(n({}, R(q(b), a), b.getKinematics(c, a)));
                            else {
                                b.updateGestureState(n({}, S(q(b), c, a, b.state.values), R(q(b), a, !0)));
                                a = b.getMovement(c);
                                c = i(a.delta);
                                b.updateGestureState(a), b.updateGestureState(c)
                            }
                            b.fireGestureHandler()
                        }
                    }, b.onEnd = function() {
                        b.clean(), b.state._active && (b.updateGestureState(n({}, b.getMovement(b.state.values), {
                            _active: !1,
                            velocities: [0, 0],
                            velocity: 0
                        })), b.fireGestureHandler())
                    }, b
                }
                return o(b, a), b.prototype.addBindings = function(a) {
                    T(a, "onScroll", this.handleEvent)
                }, b
            }(W),
            Da = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

        function $(a, b) {
            var c = b + "Start",
                d = b + "End";
            return function(e) {
                var f = void 0;
                return e.first && c in a && a[c](e), b in a && (f = a[b](e)), e.last && d in a && a[d](e), f
            }
        }
        h.addV = d, h.rubberbandIfOutOfBounds = m, h.subV = e, h.useDrag = function(a, c) {
            void 0 === c && (c = {}), P.set("drag", za);
            var d = b.useRef();
            return d.current || (d.current = X(ha, Y)), V({
                drag: a
            }, d.current(c))
        }, h.useGesture = function(a, b) {
            void 0 === b && (b = {});
            a = function(a) {
                var b = {},
                    c = {},
                    d = new Set;
                for (var e in a) Da.test(e) ? (d.add(RegExp.lastMatch), c[e] = a[e]) : b[e] = a[e];
                return [c, b, d]
            }(a);
            var c = a[0],
                d = a[1];
            a = a[2];
            P.set("drag", za), P.set("hover", Z), P.set("move", Z), P.set("pinch", Aa), P.set("scroll", Ca), P.set("wheel", Ba);
            b = function(a, b) {
                void 0 === a && (a = {}), void 0 === b && (b = new Set);
                var c = a.drag,
                    d = a.wheel,
                    e = a.move,
                    f = a.scroll,
                    g = a.pinch,
                    h = a.hover;
                a = J({
                    domTarget: a.domTarget,
                    eventOptions: a.eventOptions,
                    transform: a.transform,
                    window: a.window,
                    enabled: a.enabled
                });
                return b.has("onDrag") && (a.drag = M(c)), b.has("onWheel") && (a.wheel = K(d)), b.has("onScroll") && (a.scroll = K(f)), b.has("onMove") && (a.move = K(e)), b.has("onPinch") && (a.pinch = L(g)), b.has("onHover") && (a.hover = n({
                    enabled: !0
                }, h)), a
            }(b, a);
            var e = {};
            return a.has("onDrag") && (e.drag = $(c, "onDrag")), a.has("onWheel") && (e.wheel = $(c, "onWheel")), a.has("onScroll") && (e.scroll = $(c, "onScroll")), a.has("onMove") && (e.move = $(c, "onMove")), a.has("onPinch") && (e.pinch = $(c, "onPinch")), a.has("onHover") && (e.hover = c.onHover), V(e, b, d)
        }, h.useHover = function(a, c) {
            void 0 === c && (c = {}), P.set("hover", Z);
            var d = b.useRef();
            return d.current || (d.current = X(ga, Y)), V({
                hover: a
            }, d.current(c))
        }, h.useMove = function(a, c) {
            void 0 === c && (c = {}), P.set("move", Z);
            var d = b.useRef();
            return d.current || (d.current = X(fa, Y)), V({
                move: a
            }, d.current(c))
        }, h.usePinch = function(a, c) {
            void 0 === c && (c = {}), P.set("pinch", Aa);
            var d = b.useRef();
            return d.current || (d.current = X(ia, Y)), V({
                pinch: a
            }, d.current(c))
        }, h.useScroll = function(a, c) {
            void 0 === c && (c = {}), P.set("scroll", Ca);
            var d = b.useRef();
            return d.current || (d.current = X(ja, Y)), V({
                scroll: a
            }, d.current(c))
        }, h.useWheel = function(a, c) {
            void 0 === c && (c = {}), P.set("wheel", Ba);
            var d = b.useRef();
            return d.current || (d.current = X(ka, Y)), V({
                wheel: a
            }, d.current(c))
        }
    }
    var k = !1;

    function l() {
        k || (k = !0, j());
        return i.exports
    }
    d = {};
    var m = {
        exports: d
    };

    function n() {
        m.exports = l()
    }
    var o = !1;

    function p() {
        o || (o = !0, n());
        return m.exports
    }

    function c(a) {
        switch (a) {
            case void 0:
                return p()
        }
    }
    e.exports = c
}, null);
__d("react-use-gesture", ["react-use-gesture-9.1.3"], function(a, b, c, d, e, f) {
    e.exports = b("react-use-gesture-9.1.3")()
}, null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("react-virtual-2.10.4", ["react-0.0.0"], function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a && typeof a === "object" && "default" in a ? a["default"] : a
    }
    var g = a(b("react-0.0.0")),
        h = {},
        i = {
            exports: h
        },
        j;

    function k() {
        ! function(a, b) {
            "object" == typeof h && "undefined" != typeof i ? b(h, g()) : "function" == typeof j && j.amd ? j(["exports", "react"], b) : b((a = a || self).ReactVirtual = {}, a.React)
        }(this, function(a, b) {
            function c() {
                return (c = Object.assign || function(a) {
                    for (var b = 1; b < arguments.length; b++) {
                        var c = arguments[b];
                        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                    }
                    return a
                }).apply(this, arguments)
            }
            b = b && Object.prototype.hasOwnProperty.call(b, "default") ? b["default"] : b;
            var d, e = ["bottom", "height", "left", "right", "top", "width"],
                f = new Map,
                g = function a() {
                    var b = [];
                    f.forEach(function(a, c) {
                        var d, f;
                        c = c.getBoundingClientRect();
                        d = c, f = a.rect, void 0 === d && (d = {}), void 0 === f && (f = {}), e.some(function(a) {
                            return d[a] !== f[a]
                        }) && (a.rect = c, b.push(a))
                    }), b.forEach(function(a) {
                        a.callbacks.forEach(function(b) {
                            return b(a.rect)
                        })
                    }), d = window.requestAnimationFrame(a)
                },
                h = "undefined" != typeof window ? b.useLayoutEffect : b.useEffect;

            function i(a, c) {
                void 0 === c && (c = {
                    width: 0,
                    height: 0
                });
                var e = b.useState(a.current),
                    i = e[0],
                    k = e[1];
                e = b.useReducer(j, c);
                c = e[0];
                var l = e[1],
                    m = b.useRef(!1);
                return h(function() {
                    a.current !== i && k(a.current)
                }), h(function() {
                    if (i && !m.current) {
                        m.current = !0;
                        var a = i.getBoundingClientRect();
                        l({
                            rect: a
                        })
                    }
                }, [i]), b.useEffect(function() {
                    if (i) {
                        var a, b, c = (a = i, b = function(a) {
                            l({
                                rect: a
                            })
                        }, {
                            observe: function() {
                                var c = 0 === f.size;
                                f.has(a) ? f.get(a).callbacks.push(b) : f.set(a, {
                                    rect: void 0,
                                    hasRectChanged: !1,
                                    callbacks: [b]
                                }), c && g()
                            },
                            unobserve: function() {
                                var c = f.get(a);
                                if (c) {
                                    var e = c.callbacks.indexOf(b);
                                    e >= 0 && c.callbacks.splice(e, 1), c.callbacks.length || f["delete"](a), f.size || cancelAnimationFrame(d)
                                }
                            }
                        });
                        return c.observe(),
                            function() {
                                c.unobserve()
                            }
                    }
                }, [i]), c
            }

            function j(a, b) {
                b = b.rect;
                return a.height !== b.height || a.width !== b.width ? b : a
            }
            var k = function() {
                    return 50
                },
                l = function(a) {
                    return a
                },
                m = function(a, b) {
                    return a[b ? "offsetWidth" : "offsetHeight"]
                },
                n = function(a) {
                    for (var b = Math.max(a.start - a.overscan, 0), a = Math.min(a.end + a.overscan, a.size - 1), c = [], b = b; b <= a; b++) c.push(b);
                    return c
                };
            a.defaultRangeExtractor = n, a.useVirtual = function(a) {
                var d = a.size,
                    e = void 0 === d ? 0 : d;
                d = a.estimateSize;
                var f = void 0 === d ? k : d;
                d = a.overscan;
                var g = void 0 === d ? 1 : d;
                d = a.paddingStart;
                var j = void 0 === d ? 0 : d;
                d = a.paddingEnd;
                d = void 0 === d ? 0 : d;
                var o = a.parentRef,
                    p = a.horizontal,
                    q = a.scrollToFn,
                    r = a.useObserver,
                    s = a.initialRect,
                    t = a.onScrollElement,
                    u = a.scrollOffsetFn,
                    v = a.keyExtractor,
                    w = void 0 === v ? l : v;
                v = a.measureSize;
                v = void 0 === v ? m : v;
                a = a.rangeExtractor;
                var x = void 0 === a ? n : a;
                a = p ? "width" : "height";
                var y = p ? "scrollLeft" : "scrollTop",
                    z = b.useRef({
                        scrollOffset: 0,
                        measurements: []
                    }),
                    A = b.useState(0),
                    B = A[0],
                    C = A[1];
                z.current.scrollOffset = B;
                A = (r || i)(o, s)[a];
                z.current.outerSize = A;
                var D = b.useCallback(function(a) {
                        o.current && (o.current[y] = a)
                    }, [o, y]),
                    E = q || D;
                q = b.useCallback(function(a) {
                    E(a, D)
                }, [D, E]);
                B = b.useState({});
                var F = B[0],
                    G = B[1];
                r = b.useCallback(function() {
                    return G({})
                }, []);
                var H = b.useRef([]),
                    I = b.useMemo(function() {
                        var a = H.current.length > 0 ? Math.min.apply(Math, H.current) : 0;
                        H.current = [];
                        for (var b = z.current.measurements.slice(0, a), a = a; a < e; a++) {
                            var c = w(a),
                                d = F[c],
                                g = b[a - 1] ? b[a - 1].end : j;
                            d = "number" == typeof d ? d : f(a);
                            var h = g + d;
                            b[a] = {
                                index: a,
                                start: g,
                                size: d,
                                end: h,
                                key: c
                            }
                        }
                        return b
                    }, [f, F, j, e, w]);
                a = ((null == (s = I[e - 1]) ? void 0 : s.end) || j) + d;
                z.current.measurements = I, z.current.totalSize = a;
                var J = t ? t.current : o.current,
                    K = b.useRef(u);
                K.current = u, h(function() {
                    if (J) {
                        var a = function(a) {
                            a = K.current ? K.current(a) : J[y];
                            C(a)
                        };
                        return a(), J.addEventListener("scroll", a, {
                                capture: !1,
                                passive: !0
                            }),
                            function() {
                                J.removeEventListener("scroll", a)
                            }
                    }
                    C(0)
                }, [J, y]);
                A = function(a) {
                    var b = a.measurements,
                        c = a.outerSize;
                    a = a.scrollOffset;
                    var d = b.length - 1,
                        e = function(a, b, c, d) {
                            for (; a <= b;) {
                                var e = (a + b) / 2 | 0,
                                    f = c(e);
                                if (f < d) a = e + 1;
                                else {
                                    if (!(f > d)) return e;
                                    b = e - 1
                                }
                            }
                            return a > 0 ? a - 1 : 0
                        }(0, d, function(a) {
                            return b[a].start
                        }, a),
                        f = e;
                    for (; f < d && b[f].end < a + c;) f++;
                    return {
                        start: e,
                        end: f
                    }
                }(z.current);
                var L = A.start,
                    M = A.end,
                    N = b.useMemo(function() {
                        return x({
                            start: L,
                            end: M,
                            overscan: g,
                            size: I.length
                        })
                    }, [L, M, g, I.length, x]),
                    O = b.useRef(v);
                O.current = v;
                B = b.useMemo(function() {
                    for (var a = [], b = function(b, d) {
                            var e = N[b],
                                f = c(c({}, I[e]), {}, {
                                    measureRef: function(a) {
                                        if (a) {
                                            var b = O.current(a, p);
                                            if (b !== f.size) {
                                                a = z.current.scrollOffset;
                                                f.start < a && D(a + (b - f.size)), H.current.push(e), G(function(a) {
                                                    return c(c({}, a), {}, ((a = {})[f.key] = b, a))
                                                })
                                            }
                                        }
                                    }
                                });
                            a.push(f)
                        }, d = 0, e = N.length; d < e; d++) b(d);
                    return a
                }, [N, D, p, I]);
                var P = b.useRef(!1);
                h(function() {
                    P.current && G({}), P.current = !0
                }, [f]);
                var Q = b.useCallback(function(a, b) {
                        b = (void 0 === b ? {} : b).align;
                        b = void 0 === b ? "start" : b;
                        var c = z.current,
                            d = c.scrollOffset;
                        c = c.outerSize;
                        "auto" === b && (b = a <= d ? "start" : a >= d + c ? "end" : "start"), "start" === b ? q(a) : "end" === b ? q(a - c) : "center" === b && q(a - c / 2)
                    }, [q]),
                    R = b.useCallback(function(a, b) {
                        b = void 0 === b ? {} : b;
                        var d = b.align;
                        d = void 0 === d ? "auto" : d;
                        b = function(a, b) {
                            if (null == a) return {};
                            var c, d, e = {},
                                f = Object.keys(a);
                            for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
                            return e
                        }(b, ["align"]);
                        var f = z.current,
                            g = f.measurements,
                            h = f.scrollOffset;
                        f = f.outerSize;
                        g = g[Math.max(0, Math.min(a, e - 1))];
                        if (g) {
                            if ("auto" === d)
                                if (g.end >= h + f) d = "end";
                                else {
                                    if (!(g.start <= h)) return;
                                    d = "start"
                                }
                            a = "center" === d ? g.start + g.size / 2 : "end" === d ? g.end : g.start;
                            Q(a, c({
                                align: d
                            }, b))
                        }
                    }, [Q, e]);
                s = b.useCallback(function() {
                    for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    R.apply(void 0, b), requestAnimationFrame(function() {
                        R.apply(void 0, b)
                    })
                }, [R]);
                return {
                    virtualItems: B,
                    totalSize: a,
                    scrollToOffset: Q,
                    scrollToIndex: s,
                    measure: r
                }
            }, Object.defineProperty(a, "__esModule", {
                value: !0
            })
        })
    }
    var l = !1;

    function m() {
        l || (l = !0, k());
        return i.exports
    }
    d = {};
    var n = {
        exports: d
    };

    function o() {
        n.exports = m()
    }
    var p = !1;

    function q() {
        p || (p = !0, o());
        return n.exports
    }

    function c(a) {
        switch (a) {
            case void 0:
                return q()
        }
    }
    e.exports = c
}, null);
__d("react-virtual", ["react-virtual-2.10.4"], function(a, b, c, d, e, f) {
    e.exports = b("react-virtual-2.10.4")()
}, null);