/*! For license information please see lottie.7d914fa3404556039ac3.js.LICENSE.txt */
(self.webpackChunkvk = self.webpackChunkvk || []).push([
  [38288],
  {
    211248: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
      "undefined" != typeof navigator &&
        ((root = window || {}),
        (factory = function (window) {
          "use strict";
          var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            expressionsPlugin,
            isSafari = /^((?!chrome|android).)*safari/i.test(
              navigator.userAgent
            ),
            cachedColors = {},
            bm_rounder = Math.round,
            bm_rnd,
            bm_pow = Math.pow,
            bm_sqrt = Math.sqrt,
            bm_abs = Math.abs,
            bm_floor = Math.floor,
            bm_max = Math.max,
            bm_min = Math.min,
            blitter = 10,
            BMMath = {};
          function ProjectInterface() {
            return {};
          }
          !(function () {
            var t,
              e = [
                "abs",
                "acos",
                "acosh",
                "asin",
                "asinh",
                "atan",
                "atanh",
                "atan2",
                "ceil",
                "cbrt",
                "expm1",
                "clz32",
                "cos",
                "cosh",
                "exp",
                "floor",
                "fround",
                "hypot",
                "imul",
                "log",
                "log1p",
                "log2",
                "log10",
                "max",
                "min",
                "pow",
                "random",
                "round",
                "sign",
                "sin",
                "sinh",
                "sqrt",
                "tan",
                "tanh",
                "trunc",
                "E",
                "LN10",
                "LN2",
                "LOG10E",
                "LOG2E",
                "PI",
                "SQRT1_2",
                "SQRT2",
              ],
              i = e.length;
            for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]];
          })(),
            (BMMath.random = Math.random),
            (BMMath.abs = function (t) {
              if ("object" == typeof t && t.length) {
                var e,
                  i = createSizedArray(t.length),
                  s = t.length;
                for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e]);
                return i;
              }
              return Math.abs(t);
            });
          var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = 0.5519;
          function roundValues(t) {
            bm_rnd = t
              ? Math.round
              : function (t) {
                  return t;
                };
          }
          function styleDiv(t) {
            (t.style.position = "absolute"),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.display = "block"),
              (t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0"),
              (t.style.backfaceVisibility = t.style.webkitBackfaceVisibility =
                "visible"),
              (t.style.transformStyle =
                t.style.webkitTransformStyle =
                t.style.mozTransformStyle =
                  "preserve-3d");
          }
          function BMEnterFrameEvent(t, e, i, s) {
            (this.type = t),
              (this.currentTime = e),
              (this.totalTime = i),
              (this.direction = s < 0 ? -1 : 1);
          }
          function BMCompleteEvent(t, e) {
            (this.type = t), (this.direction = e < 0 ? -1 : 1);
          }
          function BMCompleteLoopEvent(t, e, i, s) {
            (this.type = t),
              (this.currentLoop = i),
              (this.totalLoops = e),
              (this.direction = s < 0 ? -1 : 1);
          }
          function BMSegmentStartEvent(t, e, i) {
            (this.type = t), (this.firstFrame = e), (this.totalFrames = i);
          }
          function BMDestroyEvent(t, e) {
            (this.type = t), (this.target = e);
          }
          function BMRenderFrameErrorEvent(t, e) {
            (this.type = "renderFrameError"),
              (this.nativeError = t),
              (this.currentTime = e);
          }
          function BMConfigErrorEvent(t) {
            (this.type = "configError"), (this.nativeError = t);
          }
          function BMAnimationConfigErrorEvent(t, e) {
            (this.type = t),
              (this.nativeError = e),
              (this.currentTime = currentTime);
          }
          roundValues(!1);
          var createElementID =
              ((_count = 0),
              function () {
                return "__lottie_element_" + ++_count;
              }),
            _count;
          function HSVtoRGB(t, e, i) {
            var s, r, a, n, o, h, l, p;
            switch (
              ((h = i * (1 - e)),
              (l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e)),
              (p = i * (1 - (1 - o) * e)),
              n % 6)
            ) {
              case 0:
                (s = i), (r = p), (a = h);
                break;
              case 1:
                (s = l), (r = i), (a = h);
                break;
              case 2:
                (s = h), (r = i), (a = p);
                break;
              case 3:
                (s = h), (r = l), (a = i);
                break;
              case 4:
                (s = p), (r = h), (a = i);
                break;
              case 5:
                (s = i), (r = h), (a = l);
            }
            return [s, r, a];
          }
          function RGBtoHSV(t, e, i) {
            var s,
              r = Math.max(t, e, i),
              a = Math.min(t, e, i),
              n = r - a,
              o = 0 === r ? 0 : n / r,
              h = r / 255;
            switch (r) {
              case a:
                s = 0;
                break;
              case t:
                (s = e - i + n * (e < i ? 6 : 0)), (s /= 6 * n);
                break;
              case e:
                (s = i - t + 2 * n), (s /= 6 * n);
                break;
              case i:
                (s = t - e + 4 * n), (s /= 6 * n);
            }
            return [s, o, h];
          }
          function addSaturationToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (i[1] += e),
              i[1] > 1 ? (i[1] = 1) : i[1] <= 0 && (i[1] = 0),
              HSVtoRGB(i[0], i[1], i[2])
            );
          }
          function addBrightnessToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (i[2] += e),
              i[2] > 1 ? (i[2] = 1) : i[2] < 0 && (i[2] = 0),
              HSVtoRGB(i[0], i[1], i[2])
            );
          }
          function addHueToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (i[0] += e / 360),
              i[0] > 1 ? (i[0] -= 1) : i[0] < 0 && (i[0] += 1),
              HSVtoRGB(i[0], i[1], i[2])
            );
          }
          var rgbToHex = (function () {
            var t,
              e,
              i = [];
            for (t = 0; t < 256; t += 1)
              (e = t.toString(16)), (i[t] = 1 == e.length ? "0" + e : e);
            return function (t, e, s) {
              return (
                t < 0 && (t = 0),
                e < 0 && (e = 0),
                s < 0 && (s = 0),
                "#" + i[t] + i[e] + i[s]
              );
            };
          })();
          function BaseEvent() {}
          BaseEvent.prototype = {
            triggerEvent: function (t, e) {
              if (this._cbs[t])
                for (var i = this._cbs[t].length, s = 0; s < i; s++)
                  this._cbs[t][s](e);
            },
            addEventListener: function (t, e) {
              return (
                this._cbs[t] || (this._cbs[t] = []),
                this._cbs[t].push(e),
                function () {
                  this.removeEventListener(t, e);
                }.bind(this)
              );
            },
            removeEventListener: function (t, e) {
              if (e) {
                if (this._cbs[t]) {
                  for (var i = 0, s = this._cbs[t].length; i < s; )
                    this._cbs[t][i] === e &&
                      (this._cbs[t].splice(i, 1), (i -= 1), (s -= 1)),
                      (i += 1);
                  this._cbs[t].length || (this._cbs[t] = null);
                }
              } else this._cbs[t] = null;
            },
          };
          var createTypedArray =
            "function" == typeof Uint8ClampedArray &&
            "function" == typeof Float32Array
              ? function (t, e) {
                  return "float32" === t
                    ? new Float32Array(e)
                    : "int16" === t
                    ? new Int16Array(e)
                    : "uint8c" === t
                    ? new Uint8ClampedArray(e)
                    : void 0;
                }
              : function (t, e) {
                  var i,
                    s = 0,
                    r = [];
                  switch (t) {
                    case "int16":
                    case "uint8c":
                      i = 1;
                      break;
                    default:
                      i = 1.1;
                  }
                  for (s = 0; s < e; s += 1) r.push(i);
                  return r;
                };
          function createSizedArray(t) {
            return Array.apply(null, { length: t });
          }
          function createNS(t) {
            return document.createElementNS(svgNS, t);
          }
          function createTag(t) {
            return document.createElement(t);
          }
          function DynamicPropertyContainer() {}
          DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (t) {
              -1 === this.dynamicProperties.indexOf(t) &&
                (this.dynamicProperties.push(t),
                this.container.addDynamicProperty(this),
                (this._isAnimated = !0));
            },
            iterateDynamicProperties: function () {
              this._mdf = !1;
              var t,
                e = this.dynamicProperties.length;
              for (t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue(),
                  this.dynamicProperties[t]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function (t) {
              (this.container = t),
                (this.dynamicProperties = []),
                (this._mdf = !1),
                (this._isAnimated = !1);
            },
          };
          var getBlendMode =
              ((blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity",
              }),
              function (t) {
                return blendModeEnums[t] || "";
              }),
            blendModeEnums,
            Matrix = (function () {
              var t = Math.cos,
                e = Math.sin,
                i = Math.tan,
                s = Math.round;
              function r() {
                return (
                  (this.props[0] = 1),
                  (this.props[1] = 0),
                  (this.props[2] = 0),
                  (this.props[3] = 0),
                  (this.props[4] = 0),
                  (this.props[5] = 1),
                  (this.props[6] = 0),
                  (this.props[7] = 0),
                  (this.props[8] = 0),
                  (this.props[9] = 0),
                  (this.props[10] = 1),
                  (this.props[11] = 0),
                  (this.props[12] = 0),
                  (this.props[13] = 0),
                  (this.props[14] = 0),
                  (this.props[15] = 1),
                  this
                );
              }
              function a(i) {
                if (0 === i) return this;
                var s = t(i),
                  r = e(i);
                return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function n(i) {
                if (0 === i) return this;
                var s = t(i),
                  r = e(i);
                return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1);
              }
              function o(i) {
                if (0 === i) return this;
                var s = t(i),
                  r = e(i);
                return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1);
              }
              function h(i) {
                if (0 === i) return this;
                var s = t(i),
                  r = e(i);
                return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function l(t, e) {
                return this._t(1, e, t, 1, 0, 0);
              }
              function p(t, e) {
                return this.shear(i(t), i(e));
              }
              function f(s, r) {
                var a = t(r),
                  n = e(r);
                return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  ._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  ._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function m(t, e, i) {
                return (
                  i || 0 === i || (i = 1),
                  1 === t && 1 === e && 1 === i
                    ? this
                    : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                );
              }
              function c(t, e, i, s, r, a, n, o, h, l, p, f, m, c, d, u) {
                return (
                  (this.props[0] = t),
                  (this.props[1] = e),
                  (this.props[2] = i),
                  (this.props[3] = s),
                  (this.props[4] = r),
                  (this.props[5] = a),
                  (this.props[6] = n),
                  (this.props[7] = o),
                  (this.props[8] = h),
                  (this.props[9] = l),
                  (this.props[10] = p),
                  (this.props[11] = f),
                  (this.props[12] = m),
                  (this.props[13] = c),
                  (this.props[14] = d),
                  (this.props[15] = u),
                  this
                );
              }
              function d(t, e, i) {
                return (
                  (i = i || 0),
                  0 !== t || 0 !== e || 0 !== i
                    ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1)
                    : this
                );
              }
              function u(t, e, i, s, r, a, n, o, h, l, p, f, m, c, d, u) {
                var g = this.props;
                if (
                  1 === t &&
                  0 === e &&
                  0 === i &&
                  0 === s &&
                  0 === r &&
                  1 === a &&
                  0 === n &&
                  0 === o &&
                  0 === h &&
                  0 === l &&
                  1 === p &&
                  0 === f
                )
                  return (
                    (g[12] = g[12] * t + g[15] * m),
                    (g[13] = g[13] * a + g[15] * c),
                    (g[14] = g[14] * p + g[15] * d),
                    (g[15] = g[15] * u),
                    (this._identityCalculated = !1),
                    this
                  );
                var y = g[0],
                  v = g[1],
                  b = g[2],
                  _ = g[3],
                  x = g[4],
                  E = g[5],
                  P = g[6],
                  S = g[7],
                  A = g[8],
                  k = g[9],
                  C = g[10],
                  M = g[11],
                  T = g[12],
                  D = g[13],
                  w = g[14],
                  F = g[15];
                return (
                  (g[0] = y * t + v * r + b * h + _ * m),
                  (g[1] = y * e + v * a + b * l + _ * c),
                  (g[2] = y * i + v * n + b * p + _ * d),
                  (g[3] = y * s + v * o + b * f + _ * u),
                  (g[4] = x * t + E * r + P * h + S * m),
                  (g[5] = x * e + E * a + P * l + S * c),
                  (g[6] = x * i + E * n + P * p + S * d),
                  (g[7] = x * s + E * o + P * f + S * u),
                  (g[8] = A * t + k * r + C * h + M * m),
                  (g[9] = A * e + k * a + C * l + M * c),
                  (g[10] = A * i + k * n + C * p + M * d),
                  (g[11] = A * s + k * o + C * f + M * u),
                  (g[12] = T * t + D * r + w * h + F * m),
                  (g[13] = T * e + D * a + w * l + F * c),
                  (g[14] = T * i + D * n + w * p + F * d),
                  (g[15] = T * s + D * o + w * f + F * u),
                  (this._identityCalculated = !1),
                  this
                );
              }
              function g() {
                return (
                  this._identityCalculated ||
                    ((this._identity = !(
                      1 !== this.props[0] ||
                      0 !== this.props[1] ||
                      0 !== this.props[2] ||
                      0 !== this.props[3] ||
                      0 !== this.props[4] ||
                      1 !== this.props[5] ||
                      0 !== this.props[6] ||
                      0 !== this.props[7] ||
                      0 !== this.props[8] ||
                      0 !== this.props[9] ||
                      1 !== this.props[10] ||
                      0 !== this.props[11] ||
                      0 !== this.props[12] ||
                      0 !== this.props[13] ||
                      0 !== this.props[14] ||
                      1 !== this.props[15]
                    )),
                    (this._identityCalculated = !0)),
                  this._identity
                );
              }
              function y(t) {
                for (var e = 0; e < 16; ) {
                  if (t.props[e] !== this.props[e]) return !1;
                  e += 1;
                }
                return !0;
              }
              function v(t) {
                var e;
                for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              }
              function b(t) {
                var e;
                for (e = 0; e < 16; e += 1) this.props[e] = t[e];
              }
              function _(t, e, i) {
                return {
                  x:
                    t * this.props[0] +
                    e * this.props[4] +
                    i * this.props[8] +
                    this.props[12],
                  y:
                    t * this.props[1] +
                    e * this.props[5] +
                    i * this.props[9] +
                    this.props[13],
                  z:
                    t * this.props[2] +
                    e * this.props[6] +
                    i * this.props[10] +
                    this.props[14],
                };
              }
              function x(t, e, i) {
                return (
                  t * this.props[0] +
                  e * this.props[4] +
                  i * this.props[8] +
                  this.props[12]
                );
              }
              function E(t, e, i) {
                return (
                  t * this.props[1] +
                  e * this.props[5] +
                  i * this.props[9] +
                  this.props[13]
                );
              }
              function P(t, e, i) {
                return (
                  t * this.props[2] +
                  e * this.props[6] +
                  i * this.props[10] +
                  this.props[14]
                );
              }
              function S() {
                var t =
                    this.props[0] * this.props[5] -
                    this.props[1] * this.props[4],
                  e = this.props[5] / t,
                  i = -this.props[1] / t,
                  s = -this.props[4] / t,
                  r = this.props[0] / t,
                  a =
                    (this.props[4] * this.props[13] -
                      this.props[5] * this.props[12]) /
                    t,
                  n =
                    -(
                      this.props[0] * this.props[13] -
                      this.props[1] * this.props[12]
                    ) / t,
                  o = new Matrix();
                return (
                  (o.props[0] = e),
                  (o.props[1] = i),
                  (o.props[4] = s),
                  (o.props[5] = r),
                  (o.props[12] = a),
                  (o.props[13] = n),
                  o
                );
              }
              function A(t) {
                return this.getInverseMatrix().applyToPointArray(
                  t[0],
                  t[1],
                  t[2] || 0
                );
              }
              function k(t) {
                var e,
                  i = t.length,
                  s = [];
                for (e = 0; e < i; e += 1) s[e] = A(t[e]);
                return s;
              }
              function C(t, e, i) {
                var s = createTypedArray("float32", 6);
                if (this.isIdentity())
                  (s[0] = t[0]),
                    (s[1] = t[1]),
                    (s[2] = e[0]),
                    (s[3] = e[1]),
                    (s[4] = i[0]),
                    (s[5] = i[1]);
                else {
                  var r = this.props[0],
                    a = this.props[1],
                    n = this.props[4],
                    o = this.props[5],
                    h = this.props[12],
                    l = this.props[13];
                  (s[0] = t[0] * r + t[1] * n + h),
                    (s[1] = t[0] * a + t[1] * o + l),
                    (s[2] = e[0] * r + e[1] * n + h),
                    (s[3] = e[0] * a + e[1] * o + l),
                    (s[4] = i[0] * r + i[1] * n + h),
                    (s[5] = i[0] * a + i[1] * o + l);
                }
                return s;
              }
              function M(t, e, i) {
                return this.isIdentity()
                  ? [t, e, i]
                  : [
                      t * this.props[0] +
                        e * this.props[4] +
                        i * this.props[8] +
                        this.props[12],
                      t * this.props[1] +
                        e * this.props[5] +
                        i * this.props[9] +
                        this.props[13],
                      t * this.props[2] +
                        e * this.props[6] +
                        i * this.props[10] +
                        this.props[14],
                    ];
              }
              function T(t, e) {
                if (this.isIdentity()) return t + "," + e;
                var i = this.props;
                return (
                  Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 +
                  "," +
                  Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                );
              }
              function D() {
                for (var t = 0, e = this.props, i = "matrix3d("; t < 16; )
                  (i += s(1e4 * e[t]) / 1e4),
                    (i += 15 === t ? ")" : ","),
                    (t += 1);
                return i;
              }
              function w(t) {
                return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                  ? s(1e4 * t) / 1e4
                  : t;
              }
              function F() {
                var t = this.props;
                return (
                  "matrix(" +
                  w(t[0]) +
                  "," +
                  w(t[1]) +
                  "," +
                  w(t[4]) +
                  "," +
                  w(t[5]) +
                  "," +
                  w(t[12]) +
                  "," +
                  w(t[13]) +
                  ")"
                );
              }
              return function () {
                (this.reset = r),
                  (this.rotate = a),
                  (this.rotateX = n),
                  (this.rotateY = o),
                  (this.rotateZ = h),
                  (this.skew = p),
                  (this.skewFromAxis = f),
                  (this.shear = l),
                  (this.scale = m),
                  (this.setTransform = c),
                  (this.translate = d),
                  (this.transform = u),
                  (this.applyToPoint = _),
                  (this.applyToX = x),
                  (this.applyToY = E),
                  (this.applyToZ = P),
                  (this.applyToPointArray = M),
                  (this.applyToTriplePoints = C),
                  (this.applyToPointStringified = T),
                  (this.toCSS = D),
                  (this.to2dCSS = F),
                  (this.clone = v),
                  (this.cloneFromProps = b),
                  (this.equals = y),
                  (this.inversePoints = k),
                  (this.inversePoint = A),
                  (this.getInverseMatrix = S),
                  (this._t = this.transform),
                  (this.isIdentity = g),
                  (this._identity = !0),
                  (this._identityCalculated = !1),
                  (this.props = createTypedArray("float32", 16)),
                  this.reset();
              };
            })();
          !(function (t, e) {
            var i = this,
              s = 256,
              r = e.pow(s, 6),
              a = e.pow(2, 52),
              n = 2 * a,
              o = 255;
            function h(t) {
              var e,
                i = t.length,
                r = this,
                a = 0,
                n = (r.i = r.j = 0),
                h = (r.S = []);
              for (i || (t = [i++]); a < s; ) h[a] = a++;
              for (a = 0; a < s; a++)
                (h[a] = h[(n = o & (n + t[a % i] + (e = h[a])))]), (h[n] = e);
              r.g = function (t) {
                for (var e, i = 0, a = r.i, n = r.j, h = r.S; t--; )
                  (e = h[(a = o & (a + 1))]),
                    (i =
                      i * s +
                      h[o & ((h[a] = h[(n = o & (n + e))]) + (h[n] = e))]);
                return (r.i = a), (r.j = n), i;
              };
            }
            function l(t, e) {
              return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
            }
            function p(t, e) {
              var i,
                s = [],
                r = typeof t;
              if (e && "object" == r)
                for (i in t)
                  try {
                    s.push(p(t[i], e - 1));
                  } catch (t) {}
              return s.length ? s : "string" == r ? t : t + "\0";
            }
            function f(t, e) {
              for (var i, s = t + "", r = 0; r < s.length; )
                e[o & r] = o & ((i ^= 19 * e[o & r]) + s.charCodeAt(r++));
              return m(e);
            }
            function m(t) {
              return String.fromCharCode.apply(0, t);
            }
            (e.seedrandom = function (o, c, d) {
              var u = [],
                g = f(
                  p(
                    (c = !0 === c ? { entropy: !0 } : c || {}).entropy
                      ? [o, m(t)]
                      : null === o
                      ? (function () {
                          try {
                            var e = new Uint8Array(s);
                            return (
                              (i.crypto || i.msCrypto).getRandomValues(e), m(e)
                            );
                          } catch (e) {
                            var r = i.navigator,
                              a = r && r.plugins;
                            return [+new Date(), i, a, i.screen, m(t)];
                          }
                        })()
                      : o,
                    3
                  ),
                  u
                ),
                y = new h(u),
                v = function () {
                  for (var t = y.g(6), e = r, i = 0; t < a; )
                    (t = (t + i) * s), (e *= s), (i = y.g(1));
                  for (; t >= n; ) (t /= 2), (e /= 2), (i >>>= 1);
                  return (t + i) / e;
                };
              return (
                (v.int32 = function () {
                  return 0 | y.g(4);
                }),
                (v.quick = function () {
                  return y.g(4) / 4294967296;
                }),
                (v.double = v),
                f(m(y.S), t),
                (
                  c.pass ||
                  d ||
                  function (t, i, s, r) {
                    return (
                      r &&
                        (r.S && l(r, y),
                        (t.state = function () {
                          return l(y, {});
                        })),
                      s ? ((e.random = t), i) : t
                    );
                  }
                )(v, g, "global" in c ? c.global : this == e, c.state)
              );
            }),
              f(e.random(), t);
          })([], BMMath);
          var BezierFactory = (function () {
            var t = {
                getBezierEasing: function (t, i, s, r, a) {
                  var n =
                    a ||
                    ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(
                      /\./g,
                      "p"
                    );
                  if (e[n]) return e[n];
                  var o = new l([t, i, s, r]);
                  return (e[n] = o), o;
                },
              },
              e = {},
              i = 0.1,
              s = "function" == typeof Float32Array;
            function r(t, e) {
              return 1 - 3 * e + 3 * t;
            }
            function a(t, e) {
              return 3 * e - 6 * t;
            }
            function n(t) {
              return 3 * t;
            }
            function o(t, e, i) {
              return ((r(e, i) * t + a(e, i)) * t + n(e)) * t;
            }
            function h(t, e, i) {
              return 3 * r(e, i) * t * t + 2 * a(e, i) * t + n(e);
            }
            function l(t) {
              (this._p = t),
                (this._mSampleValues = s
                  ? new Float32Array(11)
                  : new Array(11)),
                (this._precomputed = !1),
                (this.get = this.get.bind(this));
            }
            return (
              (l.prototype = {
                get: function (t) {
                  var e = this._p[0],
                    i = this._p[1],
                    s = this._p[2],
                    r = this._p[3];
                  return (
                    this._precomputed || this._precompute(),
                    e === i && s === r
                      ? t
                      : 0 === t
                      ? 0
                      : 1 === t
                      ? 1
                      : o(this._getTForX(t), i, r)
                  );
                },
                _precompute: function () {
                  var t = this._p[0],
                    e = this._p[1],
                    i = this._p[2],
                    s = this._p[3];
                  (this._precomputed = !0),
                    (t === e && i === s) || this._calcSampleValues();
                },
                _calcSampleValues: function () {
                  for (var t = this._p[0], e = this._p[2], s = 0; s < 11; ++s)
                    this._mSampleValues[s] = o(s * i, t, e);
                },
                _getTForX: function (t) {
                  for (
                    var e = this._p[0],
                      s = this._p[2],
                      r = this._mSampleValues,
                      a = 0,
                      n = 1;
                    10 !== n && r[n] <= t;
                    ++n
                  )
                    a += i;
                  var l = a + ((t - r[--n]) / (r[n + 1] - r[n])) * i,
                    p = h(l, e, s);
                  return p >= 0.001
                    ? (function (t, e, i, s) {
                        for (var r = 0; r < 4; ++r) {
                          var a = h(e, i, s);
                          if (0 === a) return e;
                          e -= (o(e, i, s) - t) / a;
                        }
                        return e;
                      })(t, l, e, s)
                    : 0 === p
                    ? l
                    : (function (t, e, i, s, r) {
                        var a,
                          n,
                          h = 0;
                        do {
                          (a = o((n = e + (i - e) / 2), s, r) - t) > 0
                            ? (i = n)
                            : (e = n);
                        } while (Math.abs(a) > 1e-7 && ++h < 10);
                        return n;
                      })(t, a, a + i, e, s);
                },
              }),
              t
            );
          })();
          function extendPrototype(t, e) {
            var i,
              s,
              r = t.length;
            for (i = 0; i < r; i += 1)
              for (var a in (s = t[i].prototype))
                s.hasOwnProperty(a) && (e.prototype[a] = s[a]);
          }
          function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e);
          }
          function createProxyFunction(t) {
            function e() {}
            return (e.prototype = t), e;
          }
          function bezFunction() {
            function t(t, e, i, s, r, a) {
              var n = t * s + e * r + i * a - r * s - a * t - i * e;
              return n > -0.001 && n < 0.001;
            }
            Math;
            var e = function (t, e, i, s) {
              var r,
                a,
                n,
                o,
                h,
                l,
                p = defaultCurveSegments,
                f = 0,
                m = [],
                c = [],
                d = bezier_length_pool.newElement();
              for (n = i.length, r = 0; r < p; r += 1) {
                for (h = r / (p - 1), l = 0, a = 0; a < n; a += 1)
                  (o =
                    bm_pow(1 - h, 3) * t[a] +
                    3 * bm_pow(1 - h, 2) * h * i[a] +
                    3 * (1 - h) * bm_pow(h, 2) * s[a] +
                    bm_pow(h, 3) * e[a]),
                    (m[a] = o),
                    null !== c[a] && (l += bm_pow(m[a] - c[a], 2)),
                    (c[a] = m[a]);
                l && (f += l = bm_sqrt(l)),
                  (d.percents[r] = h),
                  (d.lengths[r] = f);
              }
              return (d.addedLength = f), d;
            };
            function i(t) {
              (this.segmentLength = 0), (this.points = new Array(t));
            }
            function s(t, e) {
              (this.partialLength = t), (this.point = e);
            }
            var r,
              a =
                ((r = {}),
                function (e, a, n, o) {
                  var h = (
                    e[0] +
                    "_" +
                    e[1] +
                    "_" +
                    a[0] +
                    "_" +
                    a[1] +
                    "_" +
                    n[0] +
                    "_" +
                    n[1] +
                    "_" +
                    o[0] +
                    "_" +
                    o[1]
                  ).replace(/\./g, "p");
                  if (!r[h]) {
                    var l,
                      p,
                      f,
                      m,
                      c,
                      d,
                      u,
                      g = defaultCurveSegments,
                      y = 0,
                      v = null;
                    2 === e.length &&
                      (e[0] != a[0] || e[1] != a[1]) &&
                      t(e[0], e[1], a[0], a[1], e[0] + n[0], e[1] + n[1]) &&
                      t(e[0], e[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) &&
                      (g = 2);
                    var b = new i(g);
                    for (f = n.length, l = 0; l < g; l += 1) {
                      for (
                        u = createSizedArray(f), c = l / (g - 1), d = 0, p = 0;
                        p < f;
                        p += 1
                      )
                        (m =
                          bm_pow(1 - c, 3) * e[p] +
                          3 * bm_pow(1 - c, 2) * c * (e[p] + n[p]) +
                          3 * (1 - c) * bm_pow(c, 2) * (a[p] + o[p]) +
                          bm_pow(c, 3) * a[p]),
                          (u[p] = m),
                          null !== v && (d += bm_pow(u[p] - v[p], 2));
                      (y += d = bm_sqrt(d)),
                        (b.points[l] = new s(d, u)),
                        (v = u);
                    }
                    (b.segmentLength = y), (r[h] = b);
                  }
                  return r[h];
                });
            function n(t, e) {
              var i = e.percents,
                s = e.lengths,
                r = i.length,
                a = bm_floor((r - 1) * t),
                n = t * e.addedLength,
                o = 0;
              if (a === r - 1 || 0 === a || n === s[a]) return i[a];
              for (var h = s[a] > n ? -1 : 1, l = !0; l; )
                if (
                  (s[a] <= n && s[a + 1] > n
                    ? ((o = (n - s[a]) / (s[a + 1] - s[a])), (l = !1))
                    : (a += h),
                  a < 0 || a >= r - 1)
                ) {
                  if (a === r - 1) return i[a];
                  l = !1;
                }
              return i[a] + (i[a + 1] - i[a]) * o;
            }
            var o = createTypedArray("float32", 8);
            return {
              getSegmentsLength: function (t) {
                var i,
                  s = segments_length_pool.newElement(),
                  r = t.c,
                  a = t.v,
                  n = t.o,
                  o = t.i,
                  h = t._length,
                  l = s.lengths,
                  p = 0;
                for (i = 0; i < h - 1; i += 1)
                  (l[i] = e(a[i], a[i + 1], n[i], o[i + 1])),
                    (p += l[i].addedLength);
                return (
                  r &&
                    h &&
                    ((l[i] = e(a[i], a[0], n[i], o[0])),
                    (p += l[i].addedLength)),
                  (s.totalLength = p),
                  s
                );
              },
              getNewSegment: function (t, e, i, s, r, a, h) {
                var l,
                  p = n((r = r < 0 ? 0 : r > 1 ? 1 : r), h),
                  f = n((a = a > 1 ? 1 : a), h),
                  m = t.length,
                  c = 1 - p,
                  d = 1 - f,
                  u = c * c * c,
                  g = p * c * c * 3,
                  y = p * p * c * 3,
                  v = p * p * p,
                  b = c * c * d,
                  _ = p * c * d + c * p * d + c * c * f,
                  x = p * p * d + c * p * f + p * c * f,
                  E = p * p * f,
                  P = c * d * d,
                  S = p * d * d + c * f * d + c * d * f,
                  A = p * f * d + c * f * f + p * d * f,
                  k = p * f * f,
                  C = d * d * d,
                  M = f * d * d + d * f * d + d * d * f,
                  T = f * f * d + d * f * f + f * d * f,
                  D = f * f * f;
                for (l = 0; l < m; l += 1)
                  (o[4 * l] =
                    Math.round(
                      1e3 * (u * t[l] + g * i[l] + y * s[l] + v * e[l])
                    ) / 1e3),
                    (o[4 * l + 1] =
                      Math.round(
                        1e3 * (b * t[l] + _ * i[l] + x * s[l] + E * e[l])
                      ) / 1e3),
                    (o[4 * l + 2] =
                      Math.round(
                        1e3 * (P * t[l] + S * i[l] + A * s[l] + k * e[l])
                      ) / 1e3),
                    (o[4 * l + 3] =
                      Math.round(
                        1e3 * (C * t[l] + M * i[l] + T * s[l] + D * e[l])
                      ) / 1e3);
                return o;
              },
              getPointInSegment: function (t, e, i, s, r, a) {
                var o = n(r, a),
                  h = 1 - o;
                return [
                  Math.round(
                    1e3 *
                      (h * h * h * t[0] +
                        (o * h * h + h * o * h + h * h * o) * i[0] +
                        (o * o * h + h * o * o + o * h * o) * s[0] +
                        o * o * o * e[0])
                  ) / 1e3,
                  Math.round(
                    1e3 *
                      (h * h * h * t[1] +
                        (o * h * h + h * o * h + h * h * o) * i[1] +
                        (o * o * h + h * o * o + o * h * o) * s[1] +
                        o * o * o * e[1])
                  ) / 1e3,
                ];
              },
              buildBezierData: a,
              pointOnLine2D: t,
              pointOnLine3D: function (e, i, s, r, a, n, o, h, l) {
                if (0 === s && 0 === n && 0 === l) return t(e, i, r, a, o, h);
                var p,
                  f = Math.sqrt(
                    Math.pow(r - e, 2) + Math.pow(a - i, 2) + Math.pow(n - s, 2)
                  ),
                  m = Math.sqrt(
                    Math.pow(o - e, 2) + Math.pow(h - i, 2) + Math.pow(l - s, 2)
                  ),
                  c = Math.sqrt(
                    Math.pow(o - r, 2) + Math.pow(h - a, 2) + Math.pow(l - n, 2)
                  );
                return (
                  (p =
                    f > m
                      ? f > c
                        ? f - m - c
                        : c - m - f
                      : c > m
                      ? c - m - f
                      : m - f - c) > -1e-4 && p < 1e-4
                );
              },
            };
          }
          !(function () {
            for (
              var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0;
              i < e.length && !window.requestAnimationFrame;
              ++i
            )
              (window.requestAnimationFrame =
                window[e[i] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[e[i] + "CancelAnimationFrame"] ||
                  window[e[i] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (e, i) {
                var s = new Date().getTime(),
                  r = Math.max(0, 16 - (s - t)),
                  a = setTimeout(function () {
                    e(s + r);
                  }, r);
                return (t = s + r), a;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (t) {
                  clearTimeout(t);
                });
          })();
          var bez = bezFunction();
          function dataFunctionManager() {
            function t(r, a, n) {
              var o,
                h,
                l,
                p,
                f,
                m,
                c,
                d = r.length;
              for (h = 0; h < d; h += 1)
                if ("ks" in (o = r[h]) && !o.completed) {
                  if (
                    ((o.completed = !0),
                    o.tt && (r[h - 1].td = o.tt),
                    o.hasMask)
                  ) {
                    var u = o.masksProperties;
                    for (p = u.length, l = 0; l < p; l += 1)
                      if (u[l].pt.k.i) s(u[l].pt.k);
                      else
                        for (m = u[l].pt.k.length, f = 0; f < m; f += 1)
                          u[l].pt.k[f].s && s(u[l].pt.k[f].s[0]),
                            u[l].pt.k[f].e && s(u[l].pt.k[f].e[0]);
                  }
                  0 === o.ty
                    ? ((o.layers = e(o.refId, a)), t(o.layers, a, n))
                    : 4 === o.ty
                    ? i(o.shapes)
                    : 5 == o.ty &&
                      (0 !== (c = o).t.a.length ||
                        "m" in c.t.p ||
                        (c.singleShape = !0));
                }
            }
            function e(t, e) {
              for (var i = 0, s = e.length; i < s; ) {
                if (e[i].id === t)
                  return e[i].layers.__used
                    ? JSON.parse(JSON.stringify(e[i].layers))
                    : ((e[i].layers.__used = !0), e[i].layers);
                i += 1;
              }
            }
            function i(t) {
              var e, r, a;
              for (e = t.length - 1; e >= 0; e -= 1)
                if ("sh" == t[e].ty)
                  if (t[e].ks.k.i) s(t[e].ks.k);
                  else
                    for (a = t[e].ks.k.length, r = 0; r < a; r += 1)
                      t[e].ks.k[r].s && s(t[e].ks.k[r].s[0]),
                        t[e].ks.k[r].e && s(t[e].ks.k[r].e[0]);
                else "gr" == t[e].ty && i(t[e].it);
            }
            function s(t) {
              var e,
                i = t.i.length;
              for (e = 0; e < i; e += 1)
                (t.i[e][0] += t.v[e][0]),
                  (t.i[e][1] += t.v[e][1]),
                  (t.o[e][0] += t.v[e][0]),
                  (t.o[e][1] += t.v[e][1]);
            }
            function r(t, e) {
              var i = e ? e.split(".") : [100, 100, 100];
              return (
                t[0] > i[0] ||
                (!(i[0] > t[0]) &&
                  (t[1] > i[1] ||
                    (!(i[1] > t[1]) &&
                      (t[2] > i[2] || (!(i[2] > t[2]) && void 0)))))
              );
            }
            var a,
              n = (function () {
                var t = [4, 4, 14];
                function e(t) {
                  var e,
                    i,
                    s,
                    r = t.length;
                  for (e = 0; e < r; e += 1)
                    5 === t[e].ty &&
                      ((i = t[e]),
                      (s = void 0),
                      (s = i.t.d),
                      (i.t.d = { k: [{ s, t: 0 }] }));
                }
                return function (i) {
                  if (r(t, i.v) && (e(i.layers), i.assets)) {
                    var s,
                      a = i.assets.length;
                    for (s = 0; s < a; s += 1)
                      i.assets[s].layers && e(i.assets[s].layers);
                  }
                };
              })(),
              o =
                ((a = [4, 7, 99]),
                function (t) {
                  if (t.chars && !r(a, t.v)) {
                    var e,
                      i,
                      n,
                      o,
                      h,
                      l = t.chars.length;
                    for (e = 0; e < l; e += 1)
                      if (t.chars[e].data && t.chars[e].data.shapes)
                        for (
                          n = (h = t.chars[e].data.shapes[0].it).length, i = 0;
                          i < n;
                          i += 1
                        )
                          (o = h[i].ks.k).__converted ||
                            (s(h[i].ks.k), (o.__converted = !0));
                  }
                }),
              h = (function () {
                var t = [4, 1, 9];
                function e(t) {
                  var i,
                    s,
                    r,
                    a = t.length;
                  for (i = 0; i < a; i += 1)
                    if ("gr" === t[i].ty) e(t[i].it);
                    else if ("fl" === t[i].ty || "st" === t[i].ty)
                      if (t[i].c.k && t[i].c.k[0].i)
                        for (r = t[i].c.k.length, s = 0; s < r; s += 1)
                          t[i].c.k[s].s &&
                            ((t[i].c.k[s].s[0] /= 255),
                            (t[i].c.k[s].s[1] /= 255),
                            (t[i].c.k[s].s[2] /= 255),
                            (t[i].c.k[s].s[3] /= 255)),
                            t[i].c.k[s].e &&
                              ((t[i].c.k[s].e[0] /= 255),
                              (t[i].c.k[s].e[1] /= 255),
                              (t[i].c.k[s].e[2] /= 255),
                              (t[i].c.k[s].e[3] /= 255));
                      else
                        (t[i].c.k[0] /= 255),
                          (t[i].c.k[1] /= 255),
                          (t[i].c.k[2] /= 255),
                          (t[i].c.k[3] /= 255);
                }
                function i(t) {
                  var i,
                    s = t.length;
                  for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes);
                }
                return function (e) {
                  if (r(t, e.v) && (i(e.layers), e.assets)) {
                    var s,
                      a = e.assets.length;
                    for (s = 0; s < a; s += 1)
                      e.assets[s].layers && i(e.assets[s].layers);
                  }
                };
              })(),
              l = (function () {
                var t = [4, 4, 18];
                function e(t) {
                  var i, s, r;
                  for (i = t.length - 1; i >= 0; i -= 1)
                    if ("sh" == t[i].ty)
                      if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                      else
                        for (r = t[i].ks.k.length, s = 0; s < r; s += 1)
                          t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed),
                            t[i].ks.k[s].e &&
                              (t[i].ks.k[s].e[0].c = t[i].closed);
                    else "gr" == t[i].ty && e(t[i].it);
                }
                function i(t) {
                  var i,
                    s,
                    r,
                    a,
                    n,
                    o,
                    h = t.length;
                  for (s = 0; s < h; s += 1) {
                    if ((i = t[s]).hasMask) {
                      var l = i.masksProperties;
                      for (a = l.length, r = 0; r < a; r += 1)
                        if (l[r].pt.k.i) l[r].pt.k.c = l[r].cl;
                        else
                          for (o = l[r].pt.k.length, n = 0; n < o; n += 1)
                            l[r].pt.k[n].s && (l[r].pt.k[n].s[0].c = l[r].cl),
                              l[r].pt.k[n].e && (l[r].pt.k[n].e[0].c = l[r].cl);
                    }
                    4 === i.ty && e(i.shapes);
                  }
                }
                return function (e) {
                  if (r(t, e.v) && (i(e.layers), e.assets)) {
                    var s,
                      a = e.assets.length;
                    for (s = 0; s < a; s += 1)
                      e.assets[s].layers && i(e.assets[s].layers);
                  }
                };
              })();
            var p = {
              completeData: function (e, i) {
                e.__complete ||
                  (h(e),
                  n(e),
                  o(e),
                  l(e),
                  t(e.layers, e.assets, i),
                  (e.__complete = !0));
              },
            };
            return (
              (p.checkColors = h),
              (p.checkChars = o),
              (p.checkShapes = l),
              (p.completeLayers = t),
              p
            );
          }
          var dataManager = dataFunctionManager(),
            FontManager = (function () {
              var t = { w: 0, size: 0, shapes: [] },
                e = [];
              function i(t, e) {
                var i = createTag("span");
                i.style.fontFamily = e;
                var s = createTag("span");
                (s.innerHTML = "giItT1WQy@!-/#"),
                  (i.style.position = "absolute"),
                  (i.style.left = "-10000px"),
                  (i.style.top = "-10000px"),
                  (i.style.fontSize = "300px"),
                  (i.style.fontVariant = "normal"),
                  (i.style.fontStyle = "normal"),
                  (i.style.fontWeight = "normal"),
                  (i.style.letterSpacing = "0"),
                  i.appendChild(s),
                  document.body.appendChild(i);
                var r = s.offsetWidth;
                return (
                  (s.style.fontFamily =
                    (function (t) {
                      var e,
                        i = t.split(","),
                        s = i.length,
                        r = [];
                      for (e = 0; e < s; e += 1)
                        "sans-serif" !== i[e] &&
                          "monospace" !== i[e] &&
                          r.push(i[e]);
                      return r.join(",");
                    })(t) +
                    ", " +
                    e),
                  { node: s, w: r, parent: i }
                );
              }
              function s(t, e) {
                var i = createNS("text");
                return (
                  (i.style.fontSize = "100px"),
                  i.setAttribute("font-family", e.fFamily),
                  i.setAttribute("font-style", e.fStyle),
                  i.setAttribute("font-weight", e.fWeight),
                  (i.textContent = "1"),
                  e.fClass
                    ? ((i.style.fontFamily = "inherit"),
                      i.setAttribute("class", e.fClass))
                    : (i.style.fontFamily = e.fFamily),
                  t.appendChild(i),
                  (createTag("canvas").getContext("2d").font =
                    e.fWeight + " " + e.fStyle + " 100px " + e.fFamily),
                  i
                );
              }
              e = e.concat([
                2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367,
                2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377,
                2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390,
                2391, 2402, 2403,
              ]);
              var r = function () {
                (this.fonts = []),
                  (this.chars = null),
                  (this.typekitLoaded = 0),
                  (this.isLoaded = !1),
                  (this.initTime = Date.now()),
                  (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
                  (this.checkLoadedFontsBinded =
                    this.checkLoadedFonts.bind(this));
              };
              r.getCombinedCharacterCodes = function () {
                return e;
              };
              var a = {
                addChars: function (t) {
                  if (t) {
                    this.chars || (this.chars = []);
                    var e,
                      i,
                      s,
                      r = t.length,
                      a = this.chars.length;
                    for (e = 0; e < r; e += 1) {
                      for (i = 0, s = !1; i < a; )
                        this.chars[i].style === t[e].style &&
                          this.chars[i].fFamily === t[e].fFamily &&
                          this.chars[i].ch === t[e].ch &&
                          (s = !0),
                          (i += 1);
                      s || (this.chars.push(t[e]), (a += 1));
                    }
                  }
                },
                addFonts: function (t, e) {
                  if (t) {
                    if (this.chars)
                      return (this.isLoaded = !0), void (this.fonts = t.list);
                    var r,
                      a = t.list,
                      n = a.length,
                      o = n;
                    for (r = 0; r < n; r += 1) {
                      var h,
                        l,
                        p = !0;
                      if (
                        ((a[r].loaded = !1),
                        (a[r].monoCase = i(a[r].fFamily, "monospace")),
                        (a[r].sansCase = i(a[r].fFamily, "sans-serif")),
                        a[r].fPath)
                      ) {
                        if ("p" === a[r].fOrigin || 3 === a[r].origin) {
                          if (
                            ((h = document.querySelectorAll(
                              'style[f-forigin="p"][f-family="' +
                                a[r].fFamily +
                                '"], style[f-origin="3"][f-family="' +
                                a[r].fFamily +
                                '"]'
                            )).length > 0 && (p = !1),
                            p)
                          ) {
                            var f = createTag("style");
                            f.setAttribute("f-forigin", a[r].fOrigin),
                              f.setAttribute("f-origin", a[r].origin),
                              f.setAttribute("f-family", a[r].fFamily),
                              (f.type = "text/css"),
                              (f.innerHTML =
                                "@font-face {font-family: " +
                                a[r].fFamily +
                                "; font-style: normal; src: url('" +
                                a[r].fPath +
                                "');}"),
                              e.appendChild(f);
                          }
                        } else if ("g" === a[r].fOrigin || 1 === a[r].origin) {
                          for (
                            h = document.querySelectorAll(
                              'link[f-forigin="g"], link[f-origin="1"]'
                            ),
                              l = 0;
                            l < h.length;
                            l++
                          )
                            -1 !== h[l].href.indexOf(a[r].fPath) && (p = !1);
                          if (p) {
                            var m = createTag("link");
                            m.setAttribute("f-forigin", a[r].fOrigin),
                              m.setAttribute("f-origin", a[r].origin),
                              (m.type = "text/css"),
                              (m.rel = "stylesheet"),
                              (m.href = a[r].fPath),
                              document.body.appendChild(m);
                          }
                        } else if ("t" === a[r].fOrigin || 2 === a[r].origin) {
                          for (
                            h = document.querySelectorAll(
                              'script[f-forigin="t"], script[f-origin="2"]'
                            ),
                              l = 0;
                            l < h.length;
                            l++
                          )
                            a[r].fPath === h[l].src && (p = !1);
                          if (p) {
                            var c = createTag("link");
                            c.setAttribute("f-forigin", a[r].fOrigin),
                              c.setAttribute("f-origin", a[r].origin),
                              c.setAttribute("rel", "stylesheet"),
                              c.setAttribute("href", a[r].fPath),
                              e.appendChild(c);
                          }
                        }
                      } else (a[r].loaded = !0), (o -= 1);
                      (a[r].helper = s(e, a[r])),
                        (a[r].cache = {}),
                        this.fonts.push(a[r]);
                    }
                    0 === o
                      ? (this.isLoaded = !0)
                      : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else this.isLoaded = !0;
                },
                getCharData: function (e, i, s) {
                  for (var r = 0, a = this.chars.length; r < a; ) {
                    if (
                      this.chars[r].ch === e &&
                      this.chars[r].style === i &&
                      this.chars[r].fFamily === s
                    )
                      return this.chars[r];
                    r += 1;
                  }
                  return (
                    (("string" == typeof e && 13 !== e.charCodeAt(0)) || !e) &&
                      console &&
                      console.warn &&
                      console.warn(
                        "Missing character from exported characters list: ",
                        e,
                        i,
                        s
                      ),
                    t
                  );
                },
                getFontByName: function (t) {
                  for (var e = 0, i = this.fonts.length; e < i; ) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1;
                  }
                  return this.fonts[0];
                },
                measureText: function (t, e, i) {
                  var s = this.getFontByName(e),
                    r = t.charCodeAt(0);
                  if (!s.cache[r + 1]) {
                    var a = s.helper;
                    if (" " === t) {
                      a.textContent = "|" + t + "|";
                      var n = a.getComputedTextLength();
                      a.textContent = "||";
                      var o = a.getComputedTextLength();
                      s.cache[r + 1] = (n - o) / 100;
                    } else
                      (a.textContent = t),
                        (s.cache[r + 1] = a.getComputedTextLength() / 100);
                  }
                  return s.cache[r + 1] * i;
                },
                checkLoadedFonts: function () {
                  var t,
                    e,
                    i,
                    s = this.fonts.length,
                    r = s;
                  for (t = 0; t < s; t += 1)
                    this.fonts[t].loaded
                      ? (r -= 1)
                      : "n" === this.fonts[t].fOrigin ||
                        0 === this.fonts[t].origin
                      ? (this.fonts[t].loaded = !0)
                      : ((e = this.fonts[t].monoCase.node),
                        (i = this.fonts[t].monoCase.w),
                        e.offsetWidth !== i
                          ? ((r -= 1), (this.fonts[t].loaded = !0))
                          : ((e = this.fonts[t].sansCase.node),
                            (i = this.fonts[t].sansCase.w),
                            e.offsetWidth !== i &&
                              ((r -= 1), (this.fonts[t].loaded = !0))),
                        this.fonts[t].loaded &&
                          (this.fonts[t].sansCase.parent.parentNode.removeChild(
                            this.fonts[t].sansCase.parent
                          ),
                          this.fonts[t].monoCase.parent.parentNode.removeChild(
                            this.fonts[t].monoCase.parent
                          )));
                  0 !== r && Date.now() - this.initTime < 5e3
                    ? setTimeout(this.checkLoadedFontsBinded, 20)
                    : setTimeout(this.setIsLoadedBinded, 10);
                },
                setIsLoaded: function () {
                  this.isLoaded = !0;
                },
              };
              return (r.prototype = a), r;
            })(),
            PropertyFactory = (function () {
              var t = initialDefaultFrame,
                e = Math.abs;
              function i(t, e) {
                var i,
                  r = this.offsetTime;
                "multidimensional" === this.propType &&
                  (i = createTypedArray("float32", this.pv.length));
                for (
                  var a,
                    n,
                    o,
                    h,
                    l,
                    p,
                    f,
                    m,
                    c = e.lastIndex,
                    d = c,
                    u = this.keyframes.length - 1,
                    g = !0;
                  g;

                ) {
                  if (
                    ((a = this.keyframes[d]),
                    (n = this.keyframes[d + 1]),
                    d === u - 1 && t >= n.t - r)
                  ) {
                    a.h && (a = n), (c = 0);
                    break;
                  }
                  if (n.t - r > t) {
                    c = d;
                    break;
                  }
                  d < u - 1 ? (d += 1) : ((c = 0), (g = !1));
                }
                var y,
                  v,
                  b,
                  _,
                  x,
                  E,
                  P,
                  S,
                  A,
                  k,
                  C = n.t - r,
                  M = a.t - r;
                if (a.to) {
                  a.bezierData ||
                    (a.bezierData = bez.buildBezierData(
                      a.s,
                      n.s || a.e,
                      a.to,
                      a.ti
                    ));
                  var T = a.bezierData;
                  if (t >= C || t < M) {
                    var D = t >= C ? T.points.length - 1 : 0;
                    for (h = T.points[D].point.length, o = 0; o < h; o += 1)
                      i[o] = T.points[D].point[o];
                  } else {
                    a.__fnct
                      ? (m = a.__fnct)
                      : ((m = BezierFactory.getBezierEasing(
                          a.o.x,
                          a.o.y,
                          a.i.x,
                          a.i.y,
                          a.n
                        ).get),
                        (a.__fnct = m)),
                      (l = m((t - M) / (C - M)));
                    var w,
                      F = T.segmentLength * l,
                      I =
                        e.lastFrame < t && e._lastKeyframeIndex === d
                          ? e._lastAddedLength
                          : 0;
                    for (
                      f =
                        e.lastFrame < t && e._lastKeyframeIndex === d
                          ? e._lastPoint
                          : 0,
                        g = !0,
                        p = T.points.length;
                      g;

                    ) {
                      if (
                        ((I += T.points[f].partialLength),
                        0 === F || 0 === l || f === T.points.length - 1)
                      ) {
                        for (h = T.points[f].point.length, o = 0; o < h; o += 1)
                          i[o] = T.points[f].point[o];
                        break;
                      }
                      if (F >= I && F < I + T.points[f + 1].partialLength) {
                        for (
                          w = (F - I) / T.points[f + 1].partialLength,
                            h = T.points[f].point.length,
                            o = 0;
                          o < h;
                          o += 1
                        )
                          i[o] =
                            T.points[f].point[o] +
                            (T.points[f + 1].point[o] - T.points[f].point[o]) *
                              w;
                        break;
                      }
                      f < p - 1 ? (f += 1) : (g = !1);
                    }
                    (e._lastPoint = f),
                      (e._lastAddedLength = I - T.points[f].partialLength),
                      (e._lastKeyframeIndex = d);
                  }
                } else {
                  var L, V, R, B, z;
                  if (
                    ((u = a.s.length), (y = n.s || a.e), this.sh && 1 !== a.h)
                  )
                    if (t >= C) (i[0] = y[0]), (i[1] = y[1]), (i[2] = y[2]);
                    else if (t <= M)
                      (i[0] = a.s[0]), (i[1] = a.s[1]), (i[2] = a.s[2]);
                    else {
                      var N = s(a.s),
                        G = s(y);
                      (v = i),
                        (b = (function (t, e, i) {
                          var s,
                            r,
                            a,
                            n,
                            o,
                            h = [],
                            l = t[0],
                            p = t[1],
                            f = t[2],
                            m = t[3],
                            c = e[0],
                            d = e[1],
                            u = e[2],
                            g = e[3];
                          return (
                            (r = l * c + p * d + f * u + m * g) < 0 &&
                              ((r = -r),
                              (c = -c),
                              (d = -d),
                              (u = -u),
                              (g = -g)),
                            1 - r > 1e-6
                              ? ((s = Math.acos(r)),
                                (a = Math.sin(s)),
                                (n = Math.sin((1 - i) * s) / a),
                                (o = Math.sin(i * s) / a))
                              : ((n = 1 - i), (o = i)),
                            (h[0] = n * l + o * c),
                            (h[1] = n * p + o * d),
                            (h[2] = n * f + o * u),
                            (h[3] = n * m + o * g),
                            h
                          );
                        })(N, G, (t - M) / (C - M))),
                        (_ = b[0]),
                        (x = b[1]),
                        (E = b[2]),
                        (P = b[3]),
                        (S = Math.atan2(
                          2 * x * P - 2 * _ * E,
                          1 - 2 * x * x - 2 * E * E
                        )),
                        (A = Math.asin(2 * _ * x + 2 * E * P)),
                        (k = Math.atan2(
                          2 * _ * P - 2 * x * E,
                          1 - 2 * _ * _ - 2 * E * E
                        )),
                        (v[0] = S / degToRads),
                        (v[1] = A / degToRads),
                        (v[2] = k / degToRads);
                    }
                  else
                    for (d = 0; d < u; d += 1)
                      1 !== a.h &&
                        (t >= C
                          ? (l = 1)
                          : t < M
                          ? (l = 0)
                          : (a.o.x.constructor === Array
                              ? (a.__fnct || (a.__fnct = []),
                                a.__fnct[d]
                                  ? (m = a.__fnct[d])
                                  : ((L =
                                      void 0 === a.o.x[d]
                                        ? a.o.x[0]
                                        : a.o.x[d]),
                                    (V =
                                      void 0 === a.o.y[d]
                                        ? a.o.y[0]
                                        : a.o.y[d]),
                                    (R =
                                      void 0 === a.i.x[d]
                                        ? a.i.x[0]
                                        : a.i.x[d]),
                                    (B =
                                      void 0 === a.i.y[d]
                                        ? a.i.y[0]
                                        : a.i.y[d]),
                                    (m = BezierFactory.getBezierEasing(
                                      L,
                                      V,
                                      R,
                                      B
                                    ).get),
                                    (a.__fnct[d] = m)))
                              : a.__fnct
                              ? (m = a.__fnct)
                              : ((L = a.o.x),
                                (V = a.o.y),
                                (R = a.i.x),
                                (B = a.i.y),
                                (m = BezierFactory.getBezierEasing(
                                  L,
                                  V,
                                  R,
                                  B
                                ).get),
                                (a.__fnct = m)),
                            (l = m((t - M) / (C - M))))),
                        (y = n.s || a.e),
                        (z = 1 === a.h ? a.s[d] : a.s[d] + (y[d] - a.s[d]) * l),
                        "multidimensional" === this.propType
                          ? (i[d] = z)
                          : (i = z);
                }
                return (e.lastIndex = c), i;
              }
              function s(t) {
                var e = t[0] * degToRads,
                  i = t[1] * degToRads,
                  s = t[2] * degToRads,
                  r = Math.cos(e / 2),
                  a = Math.cos(i / 2),
                  n = Math.cos(s / 2),
                  o = Math.sin(e / 2),
                  h = Math.sin(i / 2),
                  l = Math.sin(s / 2);
                return [
                  o * h * n + r * a * l,
                  o * a * n + r * h * l,
                  r * h * n - o * a * l,
                  r * a * n - o * h * l,
                ];
              }
              function r() {
                var e = this.comp.renderedFrame - this.offsetTime,
                  i = this.keyframes[0].t - this.offsetTime,
                  s =
                    this.keyframes[this.keyframes.length - 1].t -
                    this.offsetTime;
                if (
                  !(
                    e === this._caching.lastFrame ||
                    (this._caching.lastFrame !== t &&
                      ((this._caching.lastFrame >= s && e >= s) ||
                        (this._caching.lastFrame < i && e < i)))
                  )
                ) {
                  this._caching.lastFrame >= e &&
                    ((this._caching._lastKeyframeIndex = -1),
                    (this._caching.lastIndex = 0));
                  var r = this.interpolateValue(e, this._caching);
                  this.pv = r;
                }
                return (this._caching.lastFrame = e), this.pv;
              }
              function a(t) {
                var i;
                if ("unidimensional" === this.propType)
                  (i = t * this.mult),
                    e(this.v - i) > 1e-5 && ((this.v = i), (this._mdf = !0));
                else
                  for (var s = 0, r = this.v.length; s < r; )
                    (i = t[s] * this.mult),
                      e(this.v[s] - i) > 1e-5 &&
                        ((this.v[s] = i), (this._mdf = !0)),
                      (s += 1);
              }
              function n() {
                if (
                  this.elem.globalData.frameId !== this.frameId &&
                  this.effectsSequence.length
                )
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    (this.lock = !0), (this._mdf = this._isFirstFrame);
                    var t,
                      e = this.effectsSequence.length,
                      i = this.kf ? this.pv : this.data.k;
                    for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                    this.setVValue(i),
                      (this._isFirstFrame = !1),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
              }
              function o(t) {
                this.effectsSequence.push(t),
                  this.container.addDynamicProperty(this);
              }
              function h(t, e, i, s) {
                (this.propType = "unidimensional"),
                  (this.mult = i || 1),
                  (this.data = e),
                  (this.v = i ? e.k * i : e.k),
                  (this.pv = e.k),
                  (this._mdf = !1),
                  (this.elem = t),
                  (this.container = s),
                  (this.comp = t.comp),
                  (this.k = !1),
                  (this.kf = !1),
                  (this.vel = 0),
                  (this.effectsSequence = []),
                  (this._isFirstFrame = !0),
                  (this.getValue = n),
                  (this.setVValue = a),
                  (this.addEffect = o);
              }
              function l(t, e, i, s) {
                (this.propType = "multidimensional"),
                  (this.mult = i || 1),
                  (this.data = e),
                  (this._mdf = !1),
                  (this.elem = t),
                  (this.container = s),
                  (this.comp = t.comp),
                  (this.k = !1),
                  (this.kf = !1),
                  (this.frameId = -1);
                var r,
                  h = e.k.length;
                for (
                  this.v = createTypedArray("float32", h),
                    this.pv = createTypedArray("float32", h),
                    createTypedArray("float32", h),
                    this.vel = createTypedArray("float32", h),
                    r = 0;
                  r < h;
                  r += 1
                )
                  (this.v[r] = e.k[r] * this.mult), (this.pv[r] = e.k[r]);
                (this._isFirstFrame = !0),
                  (this.effectsSequence = []),
                  (this.getValue = n),
                  (this.setVValue = a),
                  (this.addEffect = o);
              }
              function p(e, s, h, l) {
                (this.propType = "unidimensional"),
                  (this.keyframes = s.k),
                  (this.offsetTime = e.data.st),
                  (this.frameId = -1),
                  (this._caching = {
                    lastFrame: t,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1,
                  }),
                  (this.k = !0),
                  (this.kf = !0),
                  (this.data = s),
                  (this.mult = h || 1),
                  (this.elem = e),
                  (this.container = l),
                  (this.comp = e.comp),
                  (this.v = t),
                  (this.pv = t),
                  (this._isFirstFrame = !0),
                  (this.getValue = n),
                  (this.setVValue = a),
                  (this.interpolateValue = i),
                  (this.effectsSequence = [r.bind(this)]),
                  (this.addEffect = o);
              }
              function f(e, s, h, l) {
                this.propType = "multidimensional";
                var p,
                  f,
                  m,
                  c,
                  d,
                  u = s.k.length;
                for (p = 0; p < u - 1; p += 1)
                  s.k[p].to &&
                    s.k[p].s &&
                    s.k[p + 1] &&
                    s.k[p + 1].s &&
                    ((f = s.k[p].s),
                    (m = s.k[p + 1].s),
                    (c = s.k[p].to),
                    (d = s.k[p].ti),
                    ((2 === f.length &&
                      (f[0] !== m[0] || f[1] !== m[1]) &&
                      bez.pointOnLine2D(
                        f[0],
                        f[1],
                        m[0],
                        m[1],
                        f[0] + c[0],
                        f[1] + c[1]
                      ) &&
                      bez.pointOnLine2D(
                        f[0],
                        f[1],
                        m[0],
                        m[1],
                        m[0] + d[0],
                        m[1] + d[1]
                      )) ||
                      (3 === f.length &&
                        (f[0] !== m[0] || f[1] !== m[1] || f[2] !== m[2]) &&
                        bez.pointOnLine3D(
                          f[0],
                          f[1],
                          f[2],
                          m[0],
                          m[1],
                          m[2],
                          f[0] + c[0],
                          f[1] + c[1],
                          f[2] + c[2]
                        ) &&
                        bez.pointOnLine3D(
                          f[0],
                          f[1],
                          f[2],
                          m[0],
                          m[1],
                          m[2],
                          m[0] + d[0],
                          m[1] + d[1],
                          m[2] + d[2]
                        ))) &&
                      ((s.k[p].to = null), (s.k[p].ti = null)),
                    f[0] === m[0] &&
                      f[1] === m[1] &&
                      0 === c[0] &&
                      0 === c[1] &&
                      0 === d[0] &&
                      0 === d[1] &&
                      (2 === f.length ||
                        (f[2] === m[2] && 0 === c[2] && 0 === d[2])) &&
                      ((s.k[p].to = null), (s.k[p].ti = null)));
                (this.effectsSequence = [r.bind(this)]),
                  (this.keyframes = s.k),
                  (this.offsetTime = e.data.st),
                  (this.k = !0),
                  (this.kf = !0),
                  (this._isFirstFrame = !0),
                  (this.mult = h || 1),
                  (this.elem = e),
                  (this.container = l),
                  (this.comp = e.comp),
                  (this.getValue = n),
                  (this.setVValue = a),
                  (this.interpolateValue = i),
                  (this.frameId = -1);
                var g = s.k[0].s.length;
                for (
                  this.v = createTypedArray("float32", g),
                    this.pv = createTypedArray("float32", g),
                    p = 0;
                  p < g;
                  p += 1
                )
                  (this.v[p] = t), (this.pv[p] = t);
                (this._caching = {
                  lastFrame: t,
                  lastIndex: 0,
                  value: createTypedArray("float32", g),
                }),
                  (this.addEffect = o);
              }
              return {
                getProp: function (t, e, i, s, r) {
                  var a;
                  if (e.k.length)
                    if ("number" == typeof e.k[0]) a = new l(t, e, s, r);
                    else
                      switch (i) {
                        case 0:
                          a = new p(t, e, s, r);
                          break;
                        case 1:
                          a = new f(t, e, s, r);
                      }
                  else a = new h(t, e, s, r);
                  return a.effectsSequence.length && r.addDynamicProperty(a), a;
                },
              };
            })(),
            TransformPropertyFactory = (function () {
              var t = [0, 0];
              function e(t, e, i) {
                if (
                  ((this.elem = t),
                  (this.frameId = -1),
                  (this.propType = "transform"),
                  (this.data = e),
                  (this.v = new Matrix()),
                  (this.pre = new Matrix()),
                  (this.appliedTransformations = 0),
                  this.initDynamicPropertyContainer(i || t),
                  e.p && e.p.s
                    ? ((this.px = PropertyFactory.getProp(
                        t,
                        e.p.x,
                        0,
                        0,
                        this
                      )),
                      (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                      e.p.z &&
                        (this.pz = PropertyFactory.getProp(
                          t,
                          e.p.z,
                          0,
                          0,
                          this
                        )))
                    : (this.p = PropertyFactory.getProp(
                        t,
                        e.p || { k: [0, 0, 0] },
                        1,
                        0,
                        this
                      )),
                  e.rx)
                ) {
                  if (
                    ((this.rx = PropertyFactory.getProp(
                      t,
                      e.rx,
                      0,
                      degToRads,
                      this
                    )),
                    (this.ry = PropertyFactory.getProp(
                      t,
                      e.ry,
                      0,
                      degToRads,
                      this
                    )),
                    (this.rz = PropertyFactory.getProp(
                      t,
                      e.rz,
                      0,
                      degToRads,
                      this
                    )),
                    e.or.k[0].ti)
                  ) {
                    var s,
                      r = e.or.k.length;
                    for (s = 0; s < r; s += 1)
                      e.or.k[s].to = e.or.k[s].ti = null;
                  }
                  (this.or = PropertyFactory.getProp(
                    t,
                    e.or,
                    1,
                    degToRads,
                    this
                  )),
                    (this.or.sh = !0);
                } else
                  this.r = PropertyFactory.getProp(
                    t,
                    e.r || { k: 0 },
                    0,
                    degToRads,
                    this
                  );
                e.sk &&
                  ((this.sk = PropertyFactory.getProp(
                    t,
                    e.sk,
                    0,
                    degToRads,
                    this
                  )),
                  (this.sa = PropertyFactory.getProp(
                    t,
                    e.sa,
                    0,
                    degToRads,
                    this
                  ))),
                  (this.a = PropertyFactory.getProp(
                    t,
                    e.a || { k: [0, 0, 0] },
                    1,
                    0,
                    this
                  )),
                  (this.s = PropertyFactory.getProp(
                    t,
                    e.s || { k: [100, 100, 100] },
                    1,
                    0.01,
                    this
                  )),
                  e.o
                    ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                    : (this.o = { _mdf: !1, v: 1 }),
                  (this._isDirty = !0),
                  this.dynamicProperties.length || this.getValue(!0);
              }
              return (
                (e.prototype = {
                  applyToMatrix: function (t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(),
                      (this._mdf = this._mdf || e),
                      this.a &&
                        t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                      this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r
                        ? t.rotate(-this.r.v)
                        : t
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                      this.data.p.s
                        ? this.data.p.z
                          ? t.translate(this.px.v, this.py.v, -this.pz.v)
                          : t.translate(this.px.v, this.py.v, 0)
                        : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                  },
                  getValue: function (e) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                      if (
                        (this._isDirty &&
                          (this.precalculateMatrix(), (this._isDirty = !1)),
                        this.iterateDynamicProperties(),
                        this._mdf || e)
                      ) {
                        if (
                          (this.v.cloneFromProps(this.pre.props),
                          this.appliedTransformations < 1 &&
                            this.v.translate(
                              -this.a.v[0],
                              -this.a.v[1],
                              this.a.v[2]
                            ),
                          this.appliedTransformations < 2 &&
                            this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                          this.sk &&
                            this.appliedTransformations < 3 &&
                            this.v.skewFromAxis(-this.sk.v, this.sa.v),
                          this.r && this.appliedTransformations < 4
                            ? this.v.rotate(-this.r.v)
                            : !this.r &&
                              this.appliedTransformations < 4 &&
                              this.v
                                .rotateZ(-this.rz.v)
                                .rotateY(this.ry.v)
                                .rotateX(this.rx.v)
                                .rotateZ(-this.or.v[2])
                                .rotateY(this.or.v[1])
                                .rotateX(this.or.v[0]),
                          this.autoOriented)
                        ) {
                          var i,
                            s,
                            r = this.elem.globalData.frameRate;
                          if (
                            this.p &&
                            this.p.keyframes &&
                            this.p.getValueAtTime
                          )
                            this.p._caching.lastFrame + this.p.offsetTime <=
                            this.p.keyframes[0].t
                              ? ((i = this.p.getValueAtTime(
                                  (this.p.keyframes[0].t + 0.01) / r,
                                  0
                                )),
                                (s = this.p.getValueAtTime(
                                  this.p.keyframes[0].t / r,
                                  0
                                )))
                              : this.p._caching.lastFrame + this.p.offsetTime >=
                                this.p.keyframes[this.p.keyframes.length - 1].t
                              ? ((i = this.p.getValueAtTime(
                                  this.p.keyframes[this.p.keyframes.length - 1]
                                    .t / r,
                                  0
                                )),
                                (s = this.p.getValueAtTime(
                                  (this.p.keyframes[this.p.keyframes.length - 1]
                                    .t -
                                    0.05) /
                                    r,
                                  0
                                )))
                              : ((i = this.p.pv),
                                (s = this.p.getValueAtTime(
                                  (this.p._caching.lastFrame +
                                    this.p.offsetTime -
                                    0.01) /
                                    r,
                                  this.p.offsetTime
                                )));
                          else if (
                            this.px &&
                            this.px.keyframes &&
                            this.py.keyframes &&
                            this.px.getValueAtTime &&
                            this.py.getValueAtTime
                          ) {
                            (i = []), (s = []);
                            var a = this.px,
                              n = this.py;
                            a._caching.lastFrame + a.offsetTime <=
                            a.keyframes[0].t
                              ? ((i[0] = a.getValueAtTime(
                                  (a.keyframes[0].t + 0.01) / r,
                                  0
                                )),
                                (i[1] = n.getValueAtTime(
                                  (n.keyframes[0].t + 0.01) / r,
                                  0
                                )),
                                (s[0] = a.getValueAtTime(
                                  a.keyframes[0].t / r,
                                  0
                                )),
                                (s[1] = n.getValueAtTime(
                                  n.keyframes[0].t / r,
                                  0
                                )))
                              : a._caching.lastFrame + a.offsetTime >=
                                a.keyframes[a.keyframes.length - 1].t
                              ? ((i[0] = a.getValueAtTime(
                                  a.keyframes[a.keyframes.length - 1].t / r,
                                  0
                                )),
                                (i[1] = n.getValueAtTime(
                                  n.keyframes[n.keyframes.length - 1].t / r,
                                  0
                                )),
                                (s[0] = a.getValueAtTime(
                                  (a.keyframes[a.keyframes.length - 1].t -
                                    0.01) /
                                    r,
                                  0
                                )),
                                (s[1] = n.getValueAtTime(
                                  (n.keyframes[n.keyframes.length - 1].t -
                                    0.01) /
                                    r,
                                  0
                                )))
                              : ((i = [a.pv, n.pv]),
                                (s[0] = a.getValueAtTime(
                                  (a._caching.lastFrame + a.offsetTime - 0.01) /
                                    r,
                                  a.offsetTime
                                )),
                                (s[1] = n.getValueAtTime(
                                  (n._caching.lastFrame + n.offsetTime - 0.01) /
                                    r,
                                  n.offsetTime
                                )));
                          } else i = s = t;
                          this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]));
                        }
                        this.data.p && this.data.p.s
                          ? this.data.p.z
                            ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                            : this.v.translate(this.px.v, this.py.v, 0)
                          : this.v.translate(
                              this.p.v[0],
                              this.p.v[1],
                              -this.p.v[2]
                            );
                      }
                      this.frameId = this.elem.globalData.frameId;
                    }
                  },
                  precalculateMatrix: function () {
                    if (
                      !this.a.k &&
                      (this.pre.translate(
                        -this.a.v[0],
                        -this.a.v[1],
                        this.a.v[2]
                      ),
                      (this.appliedTransformations = 1),
                      !this.s.effectsSequence.length)
                    ) {
                      if (
                        (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        (this.appliedTransformations = 2),
                        this.sk)
                      ) {
                        if (
                          this.sk.effectsSequence.length ||
                          this.sa.effectsSequence.length
                        )
                          return;
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                          (this.appliedTransformations = 3);
                      }
                      if (this.r) {
                        if (this.r.effectsSequence.length) return;
                        this.pre.rotate(-this.r.v),
                          (this.appliedTransformations = 4);
                      } else
                        this.rz.effectsSequence.length ||
                          this.ry.effectsSequence.length ||
                          this.rx.effectsSequence.length ||
                          this.or.effectsSequence.length ||
                          (this.pre
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                          (this.appliedTransformations = 4));
                    }
                  },
                  autoOrient: function () {},
                }),
                extendPrototype([DynamicPropertyContainer], e),
                (e.prototype.addDynamicProperty = function (t) {
                  this._addDynamicProperty(t),
                    this.elem.addDynamicProperty(t),
                    (this._isDirty = !0);
                }),
                (e.prototype._addDynamicProperty =
                  DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                  getTransformProperty: function (t, i, s) {
                    return new e(t, i, s);
                  },
                }
              );
            })();
          function ShapePath() {
            (this.c = !1),
              (this._length = 0),
              (this._maxLength = 8),
              (this.v = createSizedArray(this._maxLength)),
              (this.o = createSizedArray(this._maxLength)),
              (this.i = createSizedArray(this._maxLength));
          }
          (ShapePath.prototype.setPathData = function (t, e) {
            (this.c = t), this.setLength(e);
            for (var i = 0; i < e; )
              (this.v[i] = point_pool.newElement()),
                (this.o[i] = point_pool.newElement()),
                (this.i[i] = point_pool.newElement()),
                (i += 1);
          }),
            (ShapePath.prototype.setLength = function (t) {
              for (; this._maxLength < t; ) this.doubleArrayLength();
              this._length = t;
            }),
            (ShapePath.prototype.doubleArrayLength = function () {
              (this.v = this.v.concat(createSizedArray(this._maxLength))),
                (this.i = this.i.concat(createSizedArray(this._maxLength))),
                (this.o = this.o.concat(createSizedArray(this._maxLength))),
                (this._maxLength *= 2);
            }),
            (ShapePath.prototype.setXYAt = function (t, e, i, s, r) {
              var a;
              switch (
                ((this._length = Math.max(this._length, s + 1)),
                this._length >= this._maxLength && this.doubleArrayLength(),
                i)
              ) {
                case "v":
                  a = this.v;
                  break;
                case "i":
                  a = this.i;
                  break;
                case "o":
                  a = this.o;
              }
              (!a[s] || (a[s] && !r)) && (a[s] = point_pool.newElement()),
                (a[s][0] = t),
                (a[s][1] = e);
            }),
            (ShapePath.prototype.setTripleAt = function (
              t,
              e,
              i,
              s,
              r,
              a,
              n,
              o
            ) {
              this.setXYAt(t, e, "v", n, o),
                this.setXYAt(i, s, "o", n, o),
                this.setXYAt(r, a, "i", n, o);
            }),
            (ShapePath.prototype.reverse = function () {
              var t = new ShapePath();
              t.setPathData(this.c, this._length);
              var e = this.v,
                i = this.o,
                s = this.i,
                r = 0;
              this.c &&
                (t.setTripleAt(
                  e[0][0],
                  e[0][1],
                  s[0][0],
                  s[0][1],
                  i[0][0],
                  i[0][1],
                  0,
                  !1
                ),
                (r = 1));
              var a,
                n = this._length - 1,
                o = this._length;
              for (a = r; a < o; a += 1)
                t.setTripleAt(
                  e[n][0],
                  e[n][1],
                  s[n][0],
                  s[n][1],
                  i[n][0],
                  i[n][1],
                  a,
                  !1
                ),
                  (n -= 1);
              return t;
            });
          var ShapePropertyFactory = (function () {
              var t = -999999;
              function e(t, e, i) {
                var s,
                  r,
                  a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f,
                  m = i.lastIndex,
                  c = this.keyframes;
                if (t < c[0].t - this.offsetTime)
                  (s = c[0].s[0]), (a = !0), (m = 0);
                else if (t >= c[c.length - 1].t - this.offsetTime)
                  (s = c[c.length - 1].s
                    ? c[c.length - 1].s[0]
                    : c[c.length - 2].e[0]),
                    (a = !0);
                else {
                  for (
                    var d, u, g = m, y = c.length - 1, v = !0;
                    v &&
                    ((d = c[g]), !((u = c[g + 1]).t - this.offsetTime > t));

                  )
                    g < y - 1 ? (g += 1) : (v = !1);
                  if (((m = g), !(a = 1 === d.h))) {
                    if (t >= u.t - this.offsetTime) p = 1;
                    else if (t < d.t - this.offsetTime) p = 0;
                    else {
                      var b;
                      d.__fnct
                        ? (b = d.__fnct)
                        : ((b = BezierFactory.getBezierEasing(
                            d.o.x,
                            d.o.y,
                            d.i.x,
                            d.i.y
                          ).get),
                          (d.__fnct = b)),
                        (p = b(
                          (t - (d.t - this.offsetTime)) /
                            (u.t - this.offsetTime - (d.t - this.offsetTime))
                        ));
                    }
                    r = u.s ? u.s[0] : d.e[0];
                  }
                  s = d.s[0];
                }
                for (
                  h = e._length, l = s.i[0].length, i.lastIndex = m, n = 0;
                  n < h;
                  n += 1
                )
                  for (o = 0; o < l; o += 1)
                    (f = a
                      ? s.i[n][o]
                      : s.i[n][o] + (r.i[n][o] - s.i[n][o]) * p),
                      (e.i[n][o] = f),
                      (f = a
                        ? s.o[n][o]
                        : s.o[n][o] + (r.o[n][o] - s.o[n][o]) * p),
                      (e.o[n][o] = f),
                      (f = a
                        ? s.v[n][o]
                        : s.v[n][o] + (r.v[n][o] - s.v[n][o]) * p),
                      (e.v[n][o] = f);
              }
              function i() {
                var e = this.comp.renderedFrame - this.offsetTime,
                  i = this.keyframes[0].t - this.offsetTime,
                  s =
                    this.keyframes[this.keyframes.length - 1].t -
                    this.offsetTime,
                  r = this._caching.lastFrame;
                return (
                  (r !== t && ((r < i && e < i) || (r > s && e > s))) ||
                    ((this._caching.lastIndex =
                      r < e ? this._caching.lastIndex : 0),
                    this.interpolateShape(e, this.pv, this._caching)),
                  (this._caching.lastFrame = e),
                  this.pv
                );
              }
              function s() {
                this.paths = this.localShapeCollection;
              }
              function r(t) {
                (function (t, e) {
                  if (t._length !== e._length || t.c !== e.c) return !1;
                  var i,
                    s = t._length;
                  for (i = 0; i < s; i += 1)
                    if (
                      t.v[i][0] !== e.v[i][0] ||
                      t.v[i][1] !== e.v[i][1] ||
                      t.o[i][0] !== e.o[i][0] ||
                      t.o[i][1] !== e.o[i][1] ||
                      t.i[i][0] !== e.i[i][0] ||
                      t.i[i][1] !== e.i[i][1]
                    )
                      return !1;
                  return !0;
                })(this.v, t) ||
                  ((this.v = shape_pool.clone(t)),
                  this.localShapeCollection.releaseShapes(),
                  this.localShapeCollection.addShape(this.v),
                  (this._mdf = !0),
                  (this.paths = this.localShapeCollection));
              }
              function a() {
                if (this.elem.globalData.frameId !== this.frameId)
                  if (this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                      (this.lock = !0), (this._mdf = !1);
                      var t,
                        e = this.kf
                          ? this.pv
                          : this.data.ks
                          ? this.data.ks.k
                          : this.data.pt.k,
                        i = this.effectsSequence.length;
                      for (t = 0; t < i; t += 1) e = this.effectsSequence[t](e);
                      this.setVValue(e),
                        (this.lock = !1),
                        (this.frameId = this.elem.globalData.frameId);
                    }
                  else this._mdf = !1;
              }
              function n(t, e, i) {
                (this.propType = "shape"),
                  (this.comp = t.comp),
                  (this.container = t),
                  (this.elem = t),
                  (this.data = e),
                  (this.k = !1),
                  (this.kf = !1),
                  (this._mdf = !1);
                var r = 3 === i ? e.pt.k : e.ks.k;
                (this.v = shape_pool.clone(r)),
                  (this.pv = shape_pool.clone(this.v)),
                  (this.localShapeCollection =
                    shapeCollection_pool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.paths.addShape(this.v),
                  (this.reset = s),
                  (this.effectsSequence = []);
              }
              function o(t) {
                this.effectsSequence.push(t),
                  this.container.addDynamicProperty(this);
              }
              function h(e, r, a) {
                (this.propType = "shape"),
                  (this.comp = e.comp),
                  (this.elem = e),
                  (this.container = e),
                  (this.offsetTime = e.data.st),
                  (this.keyframes = 3 === a ? r.pt.k : r.ks.k),
                  (this.k = !0),
                  (this.kf = !0);
                var n = this.keyframes[0].s[0].i.length;
                this.keyframes[0].s[0].i[0].length,
                  (this.v = shape_pool.newElement()),
                  this.v.setPathData(this.keyframes[0].s[0].c, n),
                  (this.pv = shape_pool.clone(this.v)),
                  (this.localShapeCollection =
                    shapeCollection_pool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.paths.addShape(this.v),
                  (this.lastFrame = t),
                  (this.reset = s),
                  (this._caching = { lastFrame: t, lastIndex: 0 }),
                  (this.effectsSequence = [i.bind(this)]);
              }
              (n.prototype.interpolateShape = e),
                (n.prototype.getValue = a),
                (n.prototype.setVValue = r),
                (n.prototype.addEffect = o),
                (h.prototype.getValue = a),
                (h.prototype.interpolateShape = e),
                (h.prototype.setVValue = r),
                (h.prototype.addEffect = o);
              var l = (function () {
                  var t = roundCorner;
                  function e(t, e) {
                    (this.v = shape_pool.newElement()),
                      this.v.setPathData(!0, 4),
                      (this.localShapeCollection =
                        shapeCollection_pool.newShapeCollection()),
                      (this.paths = this.localShapeCollection),
                      this.localShapeCollection.addShape(this.v),
                      (this.d = e.d),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.frameId = -1),
                      this.initDynamicPropertyContainer(t),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                      this.dynamicProperties.length
                        ? (this.k = !0)
                        : ((this.k = !1), this.convertEllToPath());
                  }
                  return (
                    (e.prototype = {
                      reset: s,
                      getValue: function () {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertEllToPath());
                      },
                      convertEllToPath: function () {
                        var e = this.p.v[0],
                          i = this.p.v[1],
                          s = this.s.v[0] / 2,
                          r = this.s.v[1] / 2,
                          a = 3 !== this.d,
                          n = this.v;
                        (n.v[0][0] = e),
                          (n.v[0][1] = i - r),
                          (n.v[1][0] = a ? e + s : e - s),
                          (n.v[1][1] = i),
                          (n.v[2][0] = e),
                          (n.v[2][1] = i + r),
                          (n.v[3][0] = a ? e - s : e + s),
                          (n.v[3][1] = i),
                          (n.i[0][0] = a ? e - s * t : e + s * t),
                          (n.i[0][1] = i - r),
                          (n.i[1][0] = a ? e + s : e - s),
                          (n.i[1][1] = i - r * t),
                          (n.i[2][0] = a ? e + s * t : e - s * t),
                          (n.i[2][1] = i + r),
                          (n.i[3][0] = a ? e - s : e + s),
                          (n.i[3][1] = i + r * t),
                          (n.o[0][0] = a ? e + s * t : e - s * t),
                          (n.o[0][1] = i - r),
                          (n.o[1][0] = a ? e + s : e - s),
                          (n.o[1][1] = i + r * t),
                          (n.o[2][0] = a ? e - s * t : e + s * t),
                          (n.o[2][1] = i + r),
                          (n.o[3][0] = a ? e - s : e + s),
                          (n.o[3][1] = i - r * t);
                      },
                    }),
                    extendPrototype([DynamicPropertyContainer], e),
                    e
                  );
                })(),
                p = (function () {
                  function t(t, e) {
                    (this.v = shape_pool.newElement()),
                      this.v.setPathData(!0, 0),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.data = e),
                      (this.frameId = -1),
                      (this.d = e.d),
                      this.initDynamicPropertyContainer(t),
                      1 === e.sy
                        ? ((this.ir = PropertyFactory.getProp(
                            t,
                            e.ir,
                            0,
                            0,
                            this
                          )),
                          (this.is = PropertyFactory.getProp(
                            t,
                            e.is,
                            0,
                            0.01,
                            this
                          )),
                          (this.convertToPath = this.convertStarToPath))
                        : (this.convertToPath = this.convertPolygonToPath),
                      (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.r = PropertyFactory.getProp(
                        t,
                        e.r,
                        0,
                        degToRads,
                        this
                      )),
                      (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                      (this.os = PropertyFactory.getProp(
                        t,
                        e.os,
                        0,
                        0.01,
                        this
                      )),
                      (this.localShapeCollection =
                        shapeCollection_pool.newShapeCollection()),
                      this.localShapeCollection.addShape(this.v),
                      (this.paths = this.localShapeCollection),
                      this.dynamicProperties.length
                        ? (this.k = !0)
                        : ((this.k = !1), this.convertToPath());
                  }
                  return (
                    (t.prototype = {
                      reset: s,
                      getValue: function () {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertToPath());
                      },
                      convertStarToPath: function () {
                        var t,
                          e,
                          i,
                          s,
                          r = 2 * Math.floor(this.pt.v),
                          a = (2 * Math.PI) / r,
                          n = !0,
                          o = this.or.v,
                          h = this.ir.v,
                          l = this.os.v,
                          p = this.is.v,
                          f = (2 * Math.PI * o) / (2 * r),
                          m = (2 * Math.PI * h) / (2 * r),
                          c = -Math.PI / 2;
                        c += this.r.v;
                        var d = 3 === this.data.d ? -1 : 1;
                        for (this.v._length = 0, t = 0; t < r; t += 1) {
                          (i = n ? l : p), (s = n ? f : m);
                          var u = (e = n ? o : h) * Math.cos(c),
                            g = e * Math.sin(c),
                            y =
                              0 === u && 0 === g
                                ? 0
                                : g / Math.sqrt(u * u + g * g),
                            v =
                              0 === u && 0 === g
                                ? 0
                                : -u / Math.sqrt(u * u + g * g);
                          (u += +this.p.v[0]),
                            (g += +this.p.v[1]),
                            this.v.setTripleAt(
                              u,
                              g,
                              u - y * s * i * d,
                              g - v * s * i * d,
                              u + y * s * i * d,
                              g + v * s * i * d,
                              t,
                              !0
                            ),
                            (n = !n),
                            (c += a * d);
                        }
                      },
                      convertPolygonToPath: function () {
                        var t,
                          e = Math.floor(this.pt.v),
                          i = (2 * Math.PI) / e,
                          s = this.or.v,
                          r = this.os.v,
                          a = (2 * Math.PI * s) / (4 * e),
                          n = -Math.PI / 2,
                          o = 3 === this.data.d ? -1 : 1;
                        for (
                          n += this.r.v, this.v._length = 0, t = 0;
                          t < e;
                          t += 1
                        ) {
                          var h = s * Math.cos(n),
                            l = s * Math.sin(n),
                            p =
                              0 === h && 0 === l
                                ? 0
                                : l / Math.sqrt(h * h + l * l),
                            f =
                              0 === h && 0 === l
                                ? 0
                                : -h / Math.sqrt(h * h + l * l);
                          (h += +this.p.v[0]),
                            (l += +this.p.v[1]),
                            this.v.setTripleAt(
                              h,
                              l,
                              h - p * a * r * o,
                              l - f * a * r * o,
                              h + p * a * r * o,
                              l + f * a * r * o,
                              t,
                              !0
                            ),
                            (n += i * o);
                        }
                        (this.paths.length = 0), (this.paths[0] = this.v);
                      },
                    }),
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                  );
                })(),
                f = (function () {
                  function t(t, e) {
                    (this.v = shape_pool.newElement()),
                      (this.v.c = !0),
                      (this.localShapeCollection =
                        shapeCollection_pool.newShapeCollection()),
                      this.localShapeCollection.addShape(this.v),
                      (this.paths = this.localShapeCollection),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.frameId = -1),
                      (this.d = e.d),
                      this.initDynamicPropertyContainer(t),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                      (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                      this.dynamicProperties.length
                        ? (this.k = !0)
                        : ((this.k = !1), this.convertRectToPath());
                  }
                  return (
                    (t.prototype = {
                      convertRectToPath: function () {
                        var t = this.p.v[0],
                          e = this.p.v[1],
                          i = this.s.v[0] / 2,
                          s = this.s.v[1] / 2,
                          r = bm_min(i, s, this.r.v),
                          a = r * (1 - roundCorner);
                        (this.v._length = 0),
                          2 === this.d || 1 === this.d
                            ? (this.v.setTripleAt(
                                t + i,
                                e - s + r,
                                t + i,
                                e - s + r,
                                t + i,
                                e - s + a,
                                0,
                                !0
                              ),
                              this.v.setTripleAt(
                                t + i,
                                e + s - r,
                                t + i,
                                e + s - a,
                                t + i,
                                e + s - r,
                                1,
                                !0
                              ),
                              0 !== r
                                ? (this.v.setTripleAt(
                                    t + i - r,
                                    e + s,
                                    t + i - r,
                                    e + s,
                                    t + i - a,
                                    e + s,
                                    2,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i + r,
                                    e + s,
                                    t - i + a,
                                    e + s,
                                    t - i + r,
                                    e + s,
                                    3,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e + s - r,
                                    t - i,
                                    e + s - r,
                                    t - i,
                                    e + s - a,
                                    4,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e - s + r,
                                    t - i,
                                    e - s + a,
                                    t - i,
                                    e - s + r,
                                    5,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i + r,
                                    e - s,
                                    t - i + r,
                                    e - s,
                                    t - i + a,
                                    e - s,
                                    6,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + i - r,
                                    e - s,
                                    t + i - a,
                                    e - s,
                                    t + i - r,
                                    e - s,
                                    7,
                                    !0
                                  ))
                                : (this.v.setTripleAt(
                                    t - i,
                                    e + s,
                                    t - i + a,
                                    e + s,
                                    t - i,
                                    e + s,
                                    2
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e - s,
                                    t - i,
                                    e - s + a,
                                    t - i,
                                    e - s,
                                    3
                                  )))
                            : (this.v.setTripleAt(
                                t + i,
                                e - s + r,
                                t + i,
                                e - s + a,
                                t + i,
                                e - s + r,
                                0,
                                !0
                              ),
                              0 !== r
                                ? (this.v.setTripleAt(
                                    t + i - r,
                                    e - s,
                                    t + i - r,
                                    e - s,
                                    t + i - a,
                                    e - s,
                                    1,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i + r,
                                    e - s,
                                    t - i + a,
                                    e - s,
                                    t - i + r,
                                    e - s,
                                    2,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e - s + r,
                                    t - i,
                                    e - s + r,
                                    t - i,
                                    e - s + a,
                                    3,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e + s - r,
                                    t - i,
                                    e + s - a,
                                    t - i,
                                    e + s - r,
                                    4,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i + r,
                                    e + s,
                                    t - i + r,
                                    e + s,
                                    t - i + a,
                                    e + s,
                                    5,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + i - r,
                                    e + s,
                                    t + i - a,
                                    e + s,
                                    t + i - r,
                                    e + s,
                                    6,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + i,
                                    e + s - r,
                                    t + i,
                                    e + s - r,
                                    t + i,
                                    e + s - a,
                                    7,
                                    !0
                                  ))
                                : (this.v.setTripleAt(
                                    t - i,
                                    e - s,
                                    t - i + a,
                                    e - s,
                                    t - i,
                                    e - s,
                                    1,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e + s,
                                    t - i,
                                    e + s - a,
                                    t - i,
                                    e + s,
                                    2,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + i,
                                    e + s,
                                    t + i - a,
                                    e + s,
                                    t + i,
                                    e + s,
                                    3,
                                    !0
                                  )));
                      },
                      getValue: function (t) {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertRectToPath());
                      },
                      reset: s,
                    }),
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                  );
                })(),
                m = {
                  getShapeProp: function (t, e, i) {
                    var s;
                    return (
                      3 === i || 4 === i
                        ? (s = (3 === i ? e.pt : e.ks).k.length
                            ? new h(t, e, i)
                            : new n(t, e, i))
                        : 5 === i
                        ? (s = new f(t, e))
                        : 6 === i
                        ? (s = new l(t, e))
                        : 7 === i && (s = new p(t, e)),
                      s.k && t.addDynamicProperty(s),
                      s
                    );
                  },
                  getConstructorFunction: function () {
                    return n;
                  },
                  getKeyframedConstructorFunction: function () {
                    return h;
                  },
                };
              return m;
            })(),
            ShapeModifiers = (function () {
              var t = {},
                e = {};
              return (
                (t.registerModifier = function (t, i) {
                  e[t] || (e[t] = i);
                }),
                (t.getModifier = function (t, i, s) {
                  return new e[t](i, s);
                }),
                t
              );
            })();
          function ShapeModifier() {}
          function TrimModifier() {}
          function RoundCornersModifier() {}
          function RepeaterModifier() {}
          function ShapeCollection() {
            (this._length = 0),
              (this._maxLength = 4),
              (this.shapes = createSizedArray(this._maxLength));
          }
          function DashProperty(t, e, i, s) {
            (this.elem = t),
              (this.frameId = -1),
              (this.dataProps = createSizedArray(e.length)),
              (this.renderer = i),
              (this.k = !1),
              (this.dashStr = ""),
              (this.dashArray = createTypedArray(
                "float32",
                e.length ? e.length - 1 : 0
              )),
              (this.dashoffset = createTypedArray("float32", 1)),
              this.initDynamicPropertyContainer(s);
            var r,
              a,
              n = e.length || 0;
            for (r = 0; r < n; r += 1)
              (a = PropertyFactory.getProp(t, e[r].v, 0, 0, this)),
                (this.k = a.k || this.k),
                (this.dataProps[r] = { n: e[r].n, p: a });
            this.k || this.getValue(!0), (this._isAnimated = this.k);
          }
          function GradientProperty(t, e, i) {
            (this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p));
            var s = e.k.k[0].s
              ? e.k.k[0].s.length - 4 * e.p
              : e.k.k.length - 4 * e.p;
            (this.o = createTypedArray("float32", s)),
              (this._cmdf = !1),
              (this._omdf = !1),
              (this._collapsable = this.checkCollapsable()),
              (this._hasOpacity = s),
              this.initDynamicPropertyContainer(i),
              (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
              (this.k = this.prop.k),
              this.getValue(!0);
          }
          (ShapeModifier.prototype.initModifierProperties = function () {}),
            (ShapeModifier.prototype.addShapeToModifier = function () {}),
            (ShapeModifier.prototype.addShape = function (t) {
              if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                  shape: t.sh,
                  data: t,
                  localShapeCollection:
                    shapeCollection_pool.newShapeCollection(),
                };
                this.shapes.push(e),
                  this.addShapeToModifier(e),
                  this._isAnimated && t.setAsAnimated();
              }
            }),
            (ShapeModifier.prototype.init = function (t, e) {
              (this.shapes = []),
                (this.elem = t),
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                (this.frameId = initialDefaultFrame),
                (this.closed = !1),
                (this.k = !1),
                this.dynamicProperties.length
                  ? (this.k = !0)
                  : this.getValue(!0);
            }),
            (ShapeModifier.prototype.processKeys = function () {
              this.elem.globalData.frameId !== this.frameId &&
                ((this.frameId = this.elem.globalData.frameId),
                this.iterateDynamicProperties());
            }),
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            (TrimModifier.prototype.initModifierProperties = function (t, e) {
              (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
                (this.sValue = 0),
                (this.eValue = 0),
                (this.getValue = this.processKeys),
                (this.m = e.m),
                (this._isAnimated =
                  !!this.s.effectsSequence.length ||
                  !!this.e.effectsSequence.length ||
                  !!this.o.effectsSequence.length);
            }),
            (TrimModifier.prototype.addShapeToModifier = function (t) {
              t.pathsData = [];
            }),
            (TrimModifier.prototype.calculateShapeEdges = function (
              t,
              e,
              i,
              s,
              r
            ) {
              var a = [];
              e <= 1
                ? a.push({ s: t, e })
                : t >= 1
                ? a.push({ s: t - 1, e: e - 1 })
                : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
              var n,
                o,
                h = [],
                l = a.length;
              for (n = 0; n < l; n += 1) {
                var p, f;
                (o = a[n]).e * r < s ||
                  o.s * r > s + i ||
                  ((p = o.s * r <= s ? 0 : (o.s * r - s) / i),
                  (f = o.e * r >= s + i ? 1 : (o.e * r - s) / i),
                  h.push([p, f]));
              }
              return h.length || h.push([0, 0]), h;
            }),
            (TrimModifier.prototype.releasePathsData = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1) segments_length_pool.release(t[e]);
              return (t.length = 0), t;
            }),
            (TrimModifier.prototype.processShapes = function (t) {
              var e, i, s;
              if (this._mdf || t) {
                var r = (this.o.v % 360) / 360;
                if (
                  (r < 0 && (r += 1),
                  (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + r) >
                    (i = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + r))
                ) {
                  var a = e;
                  (e = i), (i = a);
                }
                (e = 1e-4 * Math.round(1e4 * e)),
                  (i = 1e-4 * Math.round(1e4 * i)),
                  (this.sValue = e),
                  (this.eValue = i);
              } else (e = this.sValue), (i = this.eValue);
              var n,
                o,
                h,
                l,
                p,
                f,
                m = this.shapes.length,
                c = 0;
              if (i === e)
                for (n = 0; n < m; n += 1)
                  this.shapes[n].localShapeCollection.releaseShapes(),
                    (this.shapes[n].shape._mdf = !0),
                    (this.shapes[n].shape.paths =
                      this.shapes[n].localShapeCollection);
              else if ((1 === i && 0 === e) || (0 === i && 1 === e)) {
                if (this._mdf)
                  for (n = 0; n < m; n += 1)
                    (this.shapes[n].pathsData.length = 0),
                      (this.shapes[n].shape._mdf = !0);
              } else {
                var d,
                  u,
                  g = [];
                for (n = 0; n < m; n += 1)
                  if (
                    (d = this.shapes[n]).shape._mdf ||
                    this._mdf ||
                    t ||
                    2 === this.m
                  ) {
                    if (
                      ((h = (s = d.shape.paths)._length),
                      (f = 0),
                      !d.shape._mdf && d.pathsData.length)
                    )
                      f = d.totalShapeLength;
                    else {
                      for (
                        l = this.releasePathsData(d.pathsData), o = 0;
                        o < h;
                        o += 1
                      )
                        (p = bez.getSegmentsLength(s.shapes[o])),
                          l.push(p),
                          (f += p.totalLength);
                      (d.totalShapeLength = f), (d.pathsData = l);
                    }
                    (c += f), (d.shape._mdf = !0);
                  } else d.shape.paths = d.localShapeCollection;
                var y,
                  v = e,
                  b = i,
                  _ = 0;
                for (n = m - 1; n >= 0; n -= 1)
                  if ((d = this.shapes[n]).shape._mdf) {
                    for (
                      (u = d.localShapeCollection).releaseShapes(),
                        2 === this.m && m > 1
                          ? ((y = this.calculateShapeEdges(
                              e,
                              i,
                              d.totalShapeLength,
                              _,
                              c
                            )),
                            (_ += d.totalShapeLength))
                          : (y = [[v, b]]),
                        h = y.length,
                        o = 0;
                      o < h;
                      o += 1
                    ) {
                      (v = y[o][0]),
                        (b = y[o][1]),
                        (g.length = 0),
                        b <= 1
                          ? g.push({
                              s: d.totalShapeLength * v,
                              e: d.totalShapeLength * b,
                            })
                          : v >= 1
                          ? g.push({
                              s: d.totalShapeLength * (v - 1),
                              e: d.totalShapeLength * (b - 1),
                            })
                          : (g.push({
                              s: d.totalShapeLength * v,
                              e: d.totalShapeLength,
                            }),
                            g.push({ s: 0, e: d.totalShapeLength * (b - 1) }));
                      var x = this.addShapes(d, g[0]);
                      if (g[0].s !== g[0].e) {
                        if (g.length > 1)
                          if (
                            d.shape.paths.shapes[d.shape.paths._length - 1].c
                          ) {
                            var E = x.pop();
                            this.addPaths(x, u),
                              (x = this.addShapes(d, g[1], E));
                          } else
                            this.addPaths(x, u), (x = this.addShapes(d, g[1]));
                        this.addPaths(x, u);
                      }
                    }
                    d.shape.paths = u;
                  }
              }
            }),
            (TrimModifier.prototype.addPaths = function (t, e) {
              var i,
                s = t.length;
              for (i = 0; i < s; i += 1) e.addShape(t[i]);
            }),
            (TrimModifier.prototype.addSegment = function (
              t,
              e,
              i,
              s,
              r,
              a,
              n
            ) {
              r.setXYAt(e[0], e[1], "o", a),
                r.setXYAt(i[0], i[1], "i", a + 1),
                n && r.setXYAt(t[0], t[1], "v", a),
                r.setXYAt(s[0], s[1], "v", a + 1);
            }),
            (TrimModifier.prototype.addSegmentFromArray = function (
              t,
              e,
              i,
              s
            ) {
              e.setXYAt(t[1], t[5], "o", i),
                e.setXYAt(t[2], t[6], "i", i + 1),
                s && e.setXYAt(t[0], t[4], "v", i),
                e.setXYAt(t[3], t[7], "v", i + 1);
            }),
            (TrimModifier.prototype.addShapes = function (t, e, i) {
              var s,
                r,
                a,
                n,
                o,
                h,
                l,
                p,
                f = t.pathsData,
                m = t.shape.paths.shapes,
                c = t.shape.paths._length,
                d = 0,
                u = [],
                g = !0;
              for (
                i
                  ? ((o = i._length), (p = i._length))
                  : ((i = shape_pool.newElement()), (o = 0), (p = 0)),
                  u.push(i),
                  s = 0;
                s < c;
                s += 1
              ) {
                for (
                  h = f[s].lengths,
                    i.c = m[s].c,
                    a = m[s].c ? h.length : h.length + 1,
                    r = 1;
                  r < a;
                  r += 1
                )
                  if (d + (n = h[r - 1]).addedLength < e.s)
                    (d += n.addedLength), (i.c = !1);
                  else {
                    if (d > e.e) {
                      i.c = !1;
                      break;
                    }
                    e.s <= d && e.e >= d + n.addedLength
                      ? (this.addSegment(
                          m[s].v[r - 1],
                          m[s].o[r - 1],
                          m[s].i[r],
                          m[s].v[r],
                          i,
                          o,
                          g
                        ),
                        (g = !1))
                      : ((l = bez.getNewSegment(
                          m[s].v[r - 1],
                          m[s].v[r],
                          m[s].o[r - 1],
                          m[s].i[r],
                          (e.s - d) / n.addedLength,
                          (e.e - d) / n.addedLength,
                          h[r - 1]
                        )),
                        this.addSegmentFromArray(l, i, o, g),
                        (g = !1),
                        (i.c = !1)),
                      (d += n.addedLength),
                      (o += 1);
                  }
                if (m[s].c && h.length) {
                  if (((n = h[r - 1]), d <= e.e)) {
                    var y = h[r - 1].addedLength;
                    e.s <= d && e.e >= d + y
                      ? (this.addSegment(
                          m[s].v[r - 1],
                          m[s].o[r - 1],
                          m[s].i[0],
                          m[s].v[0],
                          i,
                          o,
                          g
                        ),
                        (g = !1))
                      : ((l = bez.getNewSegment(
                          m[s].v[r - 1],
                          m[s].v[0],
                          m[s].o[r - 1],
                          m[s].i[0],
                          (e.s - d) / y,
                          (e.e - d) / y,
                          h[r - 1]
                        )),
                        this.addSegmentFromArray(l, i, o, g),
                        (g = !1),
                        (i.c = !1));
                  } else i.c = !1;
                  (d += n.addedLength), (o += 1);
                }
                if (
                  (i._length &&
                    (i.setXYAt(i.v[p][0], i.v[p][1], "i", p),
                    i.setXYAt(
                      i.v[i._length - 1][0],
                      i.v[i._length - 1][1],
                      "o",
                      i._length - 1
                    )),
                  d > e.e)
                )
                  break;
                s < c - 1 &&
                  ((i = shape_pool.newElement()), (g = !0), u.push(i), (o = 0));
              }
              return u;
            }),
            ShapeModifiers.registerModifier("tm", TrimModifier),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            (RoundCornersModifier.prototype.initModifierProperties = function (
              t,
              e
            ) {
              (this.getValue = this.processKeys),
                (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
                (this._isAnimated = !!this.rd.effectsSequence.length);
            }),
            (RoundCornersModifier.prototype.processPath = function (t, e) {
              var i = shape_pool.newElement();
              i.c = t.c;
              var s,
                r,
                a,
                n,
                o,
                h,
                l,
                p,
                f,
                m,
                c,
                d,
                u,
                g = t._length,
                y = 0;
              for (s = 0; s < g; s += 1)
                (r = t.v[s]),
                  (n = t.o[s]),
                  (a = t.i[s]),
                  r[0] === n[0] &&
                  r[1] === n[1] &&
                  r[0] === a[0] &&
                  r[1] === a[1]
                    ? (0 !== s && s !== g - 1) || t.c
                      ? ((o = 0 === s ? t.v[g - 1] : t.v[s - 1]),
                        (l = (h = Math.sqrt(
                          Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)
                        ))
                          ? Math.min(h / 2, e) / h
                          : 0),
                        (p = d = r[0] + (o[0] - r[0]) * l),
                        (f = u = r[1] - (r[1] - o[1]) * l),
                        (m = p - (p - r[0]) * roundCorner),
                        (c = f - (f - r[1]) * roundCorner),
                        i.setTripleAt(p, f, m, c, d, u, y),
                        (y += 1),
                        (o = s === g - 1 ? t.v[0] : t.v[s + 1]),
                        (l = (h = Math.sqrt(
                          Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)
                        ))
                          ? Math.min(h / 2, e) / h
                          : 0),
                        (p = m = r[0] + (o[0] - r[0]) * l),
                        (f = c = r[1] + (o[1] - r[1]) * l),
                        (d = p - (p - r[0]) * roundCorner),
                        (u = f - (f - r[1]) * roundCorner),
                        i.setTripleAt(p, f, m, c, d, u, y),
                        (y += 1))
                      : (i.setTripleAt(r[0], r[1], n[0], n[1], a[0], a[1], y),
                        (y += 1))
                    : (i.setTripleAt(
                        t.v[s][0],
                        t.v[s][1],
                        t.o[s][0],
                        t.o[s][1],
                        t.i[s][0],
                        t.i[s][1],
                        y
                      ),
                      (y += 1));
              return i;
            }),
            (RoundCornersModifier.prototype.processShapes = function (t) {
              var e,
                i,
                s,
                r,
                a,
                n,
                o = this.shapes.length,
                h = this.rd.v;
              if (0 !== h)
                for (i = 0; i < o; i += 1) {
                  if (
                    ((a = this.shapes[i]).shape.paths,
                    (n = a.localShapeCollection),
                    a.shape._mdf || this._mdf || t)
                  )
                    for (
                      n.releaseShapes(),
                        a.shape._mdf = !0,
                        e = a.shape.paths.shapes,
                        r = a.shape.paths._length,
                        s = 0;
                      s < r;
                      s += 1
                    )
                      n.addShape(this.processPath(e[s], h));
                  a.shape.paths = a.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = !1);
            }),
            ShapeModifiers.registerModifier("rd", RoundCornersModifier),
            extendPrototype([ShapeModifier], RepeaterModifier),
            (RepeaterModifier.prototype.initModifierProperties = function (
              t,
              e
            ) {
              (this.getValue = this.processKeys),
                (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
                (this.tr = TransformPropertyFactory.getTransformProperty(
                  t,
                  e.tr,
                  this
                )),
                (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
                (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
                (this.data = e),
                this.dynamicProperties.length || this.getValue(!0),
                (this._isAnimated = !!this.dynamicProperties.length),
                (this.pMatrix = new Matrix()),
                (this.rMatrix = new Matrix()),
                (this.sMatrix = new Matrix()),
                (this.tMatrix = new Matrix()),
                (this.matrix = new Matrix());
            }),
            (RepeaterModifier.prototype.applyTransforms = function (
              t,
              e,
              i,
              s,
              r,
              a
            ) {
              var n = a ? -1 : 1,
                o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r),
                h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
              t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]),
                e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
                e.rotate(-s.r.v * n * r),
                e.translate(s.a.v[0], s.a.v[1], s.a.v[2]),
                i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
                i.scale(a ? 1 / o : o, a ? 1 / h : h),
                i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
            }),
            (RepeaterModifier.prototype.init = function (t, e, i, s) {
              for (
                this.elem = t,
                  this.arr = e,
                  this.pos = i,
                  this.elemsData = s,
                  this._currentCopies = 0,
                  this._elements = [],
                  this._groups = [],
                  this.frameId = -1,
                  this.initDynamicPropertyContainer(t),
                  this.initModifierProperties(t, e[i]);
                i > 0;

              )
                (i -= 1), this._elements.unshift(e[i]);
              this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (RepeaterModifier.prototype.resetElements = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1)
                (t[e]._processed = !1),
                  "gr" === t[e].ty && this.resetElements(t[e].it);
            }),
            (RepeaterModifier.prototype.cloneElements = function (t) {
              t.length;
              var e = JSON.parse(JSON.stringify(t));
              return this.resetElements(e), e;
            }),
            (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
              var i,
                s = t.length;
              for (i = 0; i < s; i += 1)
                (t[i]._render = e),
                  "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
            }),
            (RepeaterModifier.prototype.processShapes = function (t) {
              var e, i, s, r, a;
              if (this._mdf || t) {
                var n,
                  o = Math.ceil(this.c.v);
                if (this._groups.length < o) {
                  for (; this._groups.length < o; ) {
                    var h = {
                      it: this.cloneElements(this._elements),
                      ty: "gr",
                    };
                    h.it.push({
                      a: { a: 0, ix: 1, k: [0, 0] },
                      nm: "Transform",
                      o: { a: 0, ix: 7, k: 100 },
                      p: { a: 0, ix: 2, k: [0, 0] },
                      r: {
                        a: 1,
                        ix: 6,
                        k: [
                          { s: 0, e: 0, t: 0 },
                          { s: 0, e: 0, t: 1 },
                        ],
                      },
                      s: { a: 0, ix: 3, k: [100, 100] },
                      sa: { a: 0, ix: 5, k: 0 },
                      sk: { a: 0, ix: 4, k: 0 },
                      ty: "tr",
                    }),
                      this.arr.splice(0, 0, h),
                      this._groups.splice(0, 0, h),
                      (this._currentCopies += 1);
                  }
                  this.elem.reloadShapes();
                }
                for (a = 0, s = 0; s <= this._groups.length - 1; s += 1)
                  (n = a < o),
                    (this._groups[s]._render = n),
                    this.changeGroupRender(this._groups[s].it, n),
                    (a += 1);
                this._currentCopies = o;
                var l = this.o.v,
                  p = l % 1,
                  f = l > 0 ? Math.floor(l) : Math.ceil(l),
                  m = (this.tr.v.props, this.pMatrix.props),
                  c = this.rMatrix.props,
                  d = this.sMatrix.props;
                this.pMatrix.reset(),
                  this.rMatrix.reset(),
                  this.sMatrix.reset(),
                  this.tMatrix.reset(),
                  this.matrix.reset();
                var u,
                  g,
                  y = 0;
                if (l > 0) {
                  for (; y < f; )
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                      (y += 1);
                  p &&
                    (this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      p,
                      !1
                    ),
                    (y += p));
                } else if (l < 0) {
                  for (; y > f; )
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !0
                    ),
                      (y -= 1);
                  p &&
                    (this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      -p,
                      !0
                    ),
                    (y -= p));
                }
                for (
                  s = 1 === this.data.m ? 0 : this._currentCopies - 1,
                    r = 1 === this.data.m ? 1 : -1,
                    a = this._currentCopies;
                  a;

                ) {
                  if (
                    ((g = (i = (e = this.elemsData[s].it)[e.length - 1]
                      .transform.mProps.v.props).length),
                    (e[e.length - 1].transform.mProps._mdf = !0),
                    (e[e.length - 1].transform.op._mdf = !0),
                    (e[e.length - 1].transform.op.v =
                      this.so.v +
                      (this.eo.v - this.so.v) *
                        (s / (this._currentCopies - 1))),
                    0 !== y)
                  ) {
                    for (
                      ((0 !== s && 1 === r) ||
                        (s !== this._currentCopies - 1 && -1 === r)) &&
                        this.applyTransforms(
                          this.pMatrix,
                          this.rMatrix,
                          this.sMatrix,
                          this.tr,
                          1,
                          !1
                        ),
                        this.matrix.transform(
                          c[0],
                          c[1],
                          c[2],
                          c[3],
                          c[4],
                          c[5],
                          c[6],
                          c[7],
                          c[8],
                          c[9],
                          c[10],
                          c[11],
                          c[12],
                          c[13],
                          c[14],
                          c[15]
                        ),
                        this.matrix.transform(
                          d[0],
                          d[1],
                          d[2],
                          d[3],
                          d[4],
                          d[5],
                          d[6],
                          d[7],
                          d[8],
                          d[9],
                          d[10],
                          d[11],
                          d[12],
                          d[13],
                          d[14],
                          d[15]
                        ),
                        this.matrix.transform(
                          m[0],
                          m[1],
                          m[2],
                          m[3],
                          m[4],
                          m[5],
                          m[6],
                          m[7],
                          m[8],
                          m[9],
                          m[10],
                          m[11],
                          m[12],
                          m[13],
                          m[14],
                          m[15]
                        ),
                        u = 0;
                      u < g;
                      u += 1
                    )
                      i[u] = this.matrix.props[u];
                    this.matrix.reset();
                  } else
                    for (this.matrix.reset(), u = 0; u < g; u += 1)
                      i[u] = this.matrix.props[u];
                  (y += 1), (a -= 1), (s += r);
                }
              } else
                for (a = this._currentCopies, s = 0, r = 1; a; )
                  (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps
                    .v.props),
                    (e[e.length - 1].transform.mProps._mdf = !1),
                    (e[e.length - 1].transform.op._mdf = !1),
                    (a -= 1),
                    (s += r);
            }),
            (RepeaterModifier.prototype.addShape = function () {}),
            ShapeModifiers.registerModifier("rp", RepeaterModifier),
            (ShapeCollection.prototype.addShape = function (t) {
              this._length === this._maxLength &&
                ((this.shapes = this.shapes.concat(
                  createSizedArray(this._maxLength)
                )),
                (this._maxLength *= 2)),
                (this.shapes[this._length] = t),
                (this._length += 1);
            }),
            (ShapeCollection.prototype.releaseShapes = function () {
              var t;
              for (t = 0; t < this._length; t += 1)
                shape_pool.release(this.shapes[t]);
              this._length = 0;
            }),
            (DashProperty.prototype.getValue = function (t) {
              if (
                (this.elem.globalData.frameId !== this.frameId || t) &&
                ((this.frameId = this.elem.globalData.frameId),
                this.iterateDynamicProperties(),
                (this._mdf = this._mdf || t),
                this._mdf)
              ) {
                var e = 0,
                  i = this.dataProps.length;
                for (
                  "svg" === this.renderer && (this.dashStr = ""), e = 0;
                  e < i;
                  e += 1
                )
                  "o" != this.dataProps[e].n
                    ? "svg" === this.renderer
                      ? (this.dashStr += " " + this.dataProps[e].p.v)
                      : (this.dashArray[e] = this.dataProps[e].p.v)
                    : (this.dashoffset[0] = this.dataProps[e].p.v);
              }
            }),
            extendPrototype([DynamicPropertyContainer], DashProperty),
            (GradientProperty.prototype.comparePoints = function (t, e) {
              for (var i = 0, s = this.o.length / 2; i < s; ) {
                if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01) return !1;
                i += 1;
              }
              return !0;
            }),
            (GradientProperty.prototype.checkCollapsable = function () {
              if (this.o.length / 2 != this.c.length / 4) return !1;
              if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e; ) {
                  if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                    return !1;
                  t += 1;
                }
              else if (!this.comparePoints(this.data.k.k, this.data.p))
                return !1;
              return !0;
            }),
            (GradientProperty.prototype.getValue = function (t) {
              if (
                (this.prop.getValue(),
                (this._mdf = !1),
                (this._cmdf = !1),
                (this._omdf = !1),
                this.prop._mdf || t)
              ) {
                var e,
                  i,
                  s,
                  r = 4 * this.data.p;
                for (e = 0; e < r; e += 1)
                  (i = e % 4 == 0 ? 100 : 255),
                    (s = Math.round(this.prop.v[e] * i)),
                    this.c[e] !== s && ((this.c[e] = s), (this._cmdf = !t));
                if (this.o.length)
                  for (
                    r = this.prop.v.length, e = 4 * this.data.p;
                    e < r;
                    e += 1
                  )
                    (i = e % 2 == 0 ? 100 : 1),
                      (s =
                        e % 2 == 0
                          ? Math.round(100 * this.prop.v[e])
                          : this.prop.v[e]),
                      this.o[e - 4 * this.data.p] !== s &&
                        ((this.o[e - 4 * this.data.p] = s), (this._omdf = !t));
                this._mdf = !t;
              }
            }),
            extendPrototype([DynamicPropertyContainer], GradientProperty);
          var buildShapeString = function (t, e, i, s) {
              if (0 === e) return "";
              var r,
                a = t.o,
                n = t.i,
                o = t.v,
                h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
              for (r = 1; r < e; r += 1)
                h +=
                  " C" +
                  s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) +
                  " " +
                  s.applyToPointStringified(n[r][0], n[r][1]) +
                  " " +
                  s.applyToPointStringified(o[r][0], o[r][1]);
              return (
                i &&
                  e &&
                  ((h +=
                    " C" +
                    s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) +
                    " " +
                    s.applyToPointStringified(n[0][0], n[0][1]) +
                    " " +
                    s.applyToPointStringified(o[0][0], o[0][1])),
                  (h += "z")),
                h
              );
            },
            ImagePreloader = (function () {
              var t = (function () {
                var t = createTag("canvas");
                (t.width = 1), (t.height = 1);
                var e = t.getContext("2d");
                return (
                  (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t
                );
              })();
              function e() {
                (this.loadedAssets += 1),
                  this.loadedAssets === this.totalImages &&
                    this.imagesLoadedCb &&
                    this.imagesLoadedCb(null);
              }
              function i(t, e, i) {
                var s = "";
                if (t.e) s = t.p;
                else if (e) {
                  var r = t.p;
                  -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                    (s = e + r);
                } else (s = i), (s += t.u ? t.u : ""), (s += t.p);
                return s;
              }
              function s(t) {
                (this._imageLoaded = e.bind(this)),
                  (this.assetsPath = ""),
                  (this.path = ""),
                  (this.totalImages = 0),
                  (this.loadedAssets = 0),
                  (this.imagesLoadedCb = null),
                  (this.images = []);
              }
              return (
                (s.prototype = {
                  loadAssets: function (t, e) {
                    this.imagesLoadedCb = e;
                    var i,
                      s = t.length;
                    for (i = 0; i < s; i += 1)
                      t[i].layers ||
                        ((this.totalImages += 1),
                        this.images.push(this._createImageData(t[i])));
                  },
                  setAssetsPath: function (t) {
                    this.assetsPath = t || "";
                  },
                  setPath: function (t) {
                    this.path = t || "";
                  },
                  loaded: function () {
                    return this.totalImages === this.loadedAssets;
                  },
                  destroy: function () {
                    (this.imagesLoadedCb = null), (this.images.length = 0);
                  },
                  getImage: function (t) {
                    for (var e = 0, i = this.images.length; e < i; ) {
                      if (this.images[e].assetData === t)
                        return this.images[e].img;
                      e += 1;
                    }
                  },
                  createImgData: function (e) {
                    var s = i(e, this.assetsPath, this.path),
                      r = createTag("img");
                    (r.crossOrigin = "anonymous"),
                      r.addEventListener("load", this._imageLoaded, !1),
                      r.addEventListener(
                        "error",
                        function () {
                          (a.img = t), this._imageLoaded();
                        }.bind(this),
                        !1
                      ),
                      (r.src = s);
                    var a = { img: r, assetData: e };
                    return a;
                  },
                  createImageData: function (e) {
                    var s = i(e, this.assetsPath, this.path),
                      r = createNS("image");
                    r.addEventListener("load", this._imageLoaded, !1),
                      r.addEventListener(
                        "error",
                        function () {
                          (a.img = t), this._imageLoaded();
                        }.bind(this),
                        !1
                      ),
                      r.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "href",
                        s
                      );
                    var a = { img: r, assetData: e };
                    return a;
                  },
                  imageLoaded: e,
                  setCacheType: function (t) {
                    this._createImageData =
                      "svg" === t
                        ? this.createImageData.bind(this)
                        : this.createImgData.bind(this);
                  },
                }),
                s
              );
            })(),
            featureSupport = (function () {
              var t = { maskType: !0 };
              return (
                (/MSIE 10/i.test(navigator.userAgent) ||
                  /MSIE 9/i.test(navigator.userAgent) ||
                  /rv:11.0/i.test(navigator.userAgent) ||
                  /Edge\/\d./i.test(navigator.userAgent)) &&
                  (t.maskType = !1),
                t
              );
            })(),
            filtersFactory = (function () {
              var t = {
                createFilter: function (t) {
                  var e = createNS("filter");
                  return (
                    e.setAttribute("id", t),
                    e.setAttribute("filterUnits", "objectBoundingBox"),
                    e.setAttribute("x", "0%"),
                    e.setAttribute("y", "0%"),
                    e.setAttribute("width", "100%"),
                    e.setAttribute("height", "100%"),
                    e
                  );
                },
                createAlphaToLuminanceFilter: function () {
                  var t = createNS("feColorMatrix");
                  return (
                    t.setAttribute("type", "matrix"),
                    t.setAttribute("color-interpolation-filters", "sRGB"),
                    t.setAttribute(
                      "values",
                      "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                    ),
                    t
                  );
                },
              };
              return t;
            })(),
            assetLoader = (function () {
              function t(t) {
                return t.response && "object" == typeof t.response
                  ? t.response
                  : t.response && "string" == typeof t.response
                  ? JSON.parse(t.response)
                  : t.responseText
                  ? JSON.parse(t.responseText)
                  : void 0;
              }
              return {
                load: function (e, i, s) {
                  var r,
                    a = new XMLHttpRequest();
                  a.open("GET", e, !0);
                  try {
                    a.responseType = "json";
                  } catch (t) {}
                  a.send(),
                    (a.onreadystatechange = function () {
                      if (4 == a.readyState)
                        if (200 == a.status) (r = t(a)), i(r);
                        else
                          try {
                            (r = t(a)), i(r);
                          } catch (t) {
                            s && s(t);
                          }
                    });
                },
              };
            })();
          function TextAnimatorProperty(t, e, i) {
            (this._isFirstFrame = !0),
              (this._hasMaskedPath = !1),
              (this._frameId = -1),
              (this._textData = t),
              (this._renderType = e),
              (this._elem = i),
              (this._animatorsData = createSizedArray(this._textData.a.length)),
              (this._pathData = {}),
              (this._moreOptions = { alignment: {} }),
              (this.renderedLetters = []),
              (this.lettersChangedFlag = !1),
              this.initDynamicPropertyContainer(i);
          }
          function TextAnimatorDataProperty(t, e, i) {
            var s = { propType: !1 },
              r = PropertyFactory.getProp,
              a = e.a;
            (this.a = {
              r: a.r ? r(t, a.r, 0, degToRads, i) : s,
              rx: a.rx ? r(t, a.rx, 0, degToRads, i) : s,
              ry: a.ry ? r(t, a.ry, 0, degToRads, i) : s,
              sk: a.sk ? r(t, a.sk, 0, degToRads, i) : s,
              sa: a.sa ? r(t, a.sa, 0, degToRads, i) : s,
              s: a.s ? r(t, a.s, 1, 0.01, i) : s,
              a: a.a ? r(t, a.a, 1, 0, i) : s,
              o: a.o ? r(t, a.o, 0, 0.01, i) : s,
              p: a.p ? r(t, a.p, 1, 0, i) : s,
              sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
              sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
              fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
              fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
              fs: a.fs ? r(t, a.fs, 0, 0.01, i) : s,
              fb: a.fb ? r(t, a.fb, 0, 0.01, i) : s,
              t: a.t ? r(t, a.t, 0, 0, i) : s,
            }),
              (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i)),
              (this.s.t = e.s.t);
          }
          function LetterProps(t, e, i, s, r, a) {
            (this.o = t),
              (this.sw = e),
              (this.sc = i),
              (this.fc = s),
              (this.m = r),
              (this.p = a),
              (this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!s, m: !0, p: !0 });
          }
          function TextProperty(t, e) {
            (this._frameId = initialDefaultFrame),
              (this.pv = ""),
              (this.v = ""),
              (this.kf = !1),
              (this._isFirstFrame = !0),
              (this._mdf = !1),
              (this.data = e),
              (this.elem = t),
              (this.comp = this.elem.comp),
              (this.keysIndex = 0),
              (this.canResize = !1),
              (this.minimumFontSize = 1),
              (this.effectsSequence = []),
              (this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1,
              }),
              this.copyData(this.currentData, this.data.d.k[0].s),
              this.searchProperty() || this.completeTextData(this.currentData);
          }
          (TextAnimatorProperty.prototype.searchProperties = function () {
            var t,
              e,
              i = this._textData.a.length,
              s = PropertyFactory.getProp;
            for (t = 0; t < i; t += 1)
              (e = this._textData.a[t]),
                (this._animatorsData[t] = new TextAnimatorDataProperty(
                  this._elem,
                  e,
                  this
                ));
            this._textData.p && "m" in this._textData.p
              ? ((this._pathData = {
                  f: s(this._elem, this._textData.p.f, 0, 0, this),
                  l: s(this._elem, this._textData.p.l, 0, 0, this),
                  r: this._textData.p.r,
                  m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
                }),
                (this._hasMaskedPath = !0))
              : (this._hasMaskedPath = !1),
              (this._moreOptions.alignment = s(
                this._elem,
                this._textData.m.a,
                1,
                0,
                this
              ));
          }),
            (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
              if (
                ((this.lettersChangedFlag = e),
                this._mdf ||
                  this._isFirstFrame ||
                  e ||
                  (this._hasMaskedPath && this._pathData.m._mdf))
              ) {
                this._isFirstFrame = !1;
                var i,
                  s,
                  r,
                  a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f,
                  m,
                  c,
                  d,
                  u,
                  g,
                  y,
                  v,
                  b,
                  _,
                  x = this._moreOptions.alignment.v,
                  E = this._animatorsData,
                  P = this._textData,
                  S = this.mHelper,
                  A = this._renderType,
                  k = this.renderedLetters.length,
                  C = (this.data, t.l);
                if (this._hasMaskedPath) {
                  if (
                    ((_ = this._pathData.m),
                    !this._pathData.n || this._pathData._mdf)
                  ) {
                    var M,
                      T = _.v;
                    for (
                      this._pathData.r && (T = T.reverse()),
                        n = { tLength: 0, segments: [] },
                        a = T._length - 1,
                        y = 0,
                        r = 0;
                      r < a;
                      r += 1
                    )
                      (M = bez.buildBezierData(
                        T.v[r],
                        T.v[r + 1],
                        [T.o[r][0] - T.v[r][0], T.o[r][1] - T.v[r][1]],
                        [
                          T.i[r + 1][0] - T.v[r + 1][0],
                          T.i[r + 1][1] - T.v[r + 1][1],
                        ]
                      )),
                        (n.tLength += M.segmentLength),
                        n.segments.push(M),
                        (y += M.segmentLength);
                    (r = a),
                      _.v.c &&
                        ((M = bez.buildBezierData(
                          T.v[r],
                          T.v[0],
                          [T.o[r][0] - T.v[r][0], T.o[r][1] - T.v[r][1]],
                          [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]
                        )),
                        (n.tLength += M.segmentLength),
                        n.segments.push(M),
                        (y += M.segmentLength)),
                      (this._pathData.pi = n);
                  }
                  if (
                    ((n = this._pathData.pi),
                    (o = this._pathData.f.v),
                    (m = 0),
                    (f = 1),
                    (l = 0),
                    (p = !0),
                    (u = n.segments),
                    o < 0 && _.v.c)
                  )
                    for (
                      n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                        f = (d = u[(m = u.length - 1)].points).length - 1;
                      o < 0;

                    )
                      (o += d[f].partialLength),
                        (f -= 1) < 0 &&
                          (f = (d = u[(m -= 1)].points).length - 1);
                  (c = (d = u[m].points)[f - 1]),
                    (g = (h = d[f]).partialLength);
                }
                (a = C.length), (i = 0), (s = 0);
                var D,
                  w,
                  F,
                  I,
                  L = 1.2 * t.finalSize * 0.714,
                  V = !0;
                F = E.length;
                var R,
                  B,
                  z,
                  N,
                  G,
                  O,
                  H,
                  q,
                  j,
                  W,
                  Y,
                  X,
                  K,
                  U = -1,
                  J = o,
                  Z = m,
                  $ = f,
                  Q = -1,
                  tt = "",
                  et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                  var it = 0,
                    st = 0,
                    rt = 2 === t.j ? -0.5 : -1,
                    at = 0,
                    nt = !0;
                  for (r = 0; r < a; r += 1)
                    if (C[r].n) {
                      for (it && (it += st); at < r; )
                        (C[at].animatorJustifyOffset = it), (at += 1);
                      (it = 0), (nt = !0);
                    } else {
                      for (w = 0; w < F; w += 1)
                        (D = E[w].a).t.propType &&
                          (nt && 2 === t.j && (st += D.t.v * rt),
                          (R = E[w].s.getMult(
                            C[r].anIndexes[w],
                            P.a[w].s.totalChars
                          )).length
                            ? (it += D.t.v * R[0] * rt)
                            : (it += D.t.v * R * rt));
                      nt = !1;
                    }
                  for (it && (it += st); at < r; )
                    (C[at].animatorJustifyOffset = it), (at += 1);
                }
                for (r = 0; r < a; r += 1) {
                  if ((S.reset(), (G = 1), C[r].n))
                    (i = 0),
                      (s += t.yOffset),
                      (s += V ? 1 : 0),
                      (o = J),
                      (V = !1),
                      this._hasMaskedPath &&
                        ((f = $),
                        (c = (d = u[(m = Z)].points)[f - 1]),
                        (g = (h = d[f]).partialLength),
                        (l = 0)),
                      (K = W = X = tt = ""),
                      (et = this.defaultPropsArray);
                  else {
                    if (this._hasMaskedPath) {
                      if (Q !== C[r].line) {
                        switch (t.j) {
                          case 1:
                            o += y - t.lineWidths[C[r].line];
                            break;
                          case 2:
                            o += (y - t.lineWidths[C[r].line]) / 2;
                        }
                        Q = C[r].line;
                      }
                      U !== C[r].ind &&
                        (C[U] && (o += C[U].extra),
                        (o += C[r].an / 2),
                        (U = C[r].ind)),
                        (o += (x[0] * C[r].an) / 200);
                      var ot = 0;
                      for (w = 0; w < F; w += 1)
                        (D = E[w].a).p.propType &&
                          ((R = E[w].s.getMult(
                            C[r].anIndexes[w],
                            P.a[w].s.totalChars
                          )).length
                            ? (ot += D.p.v[0] * R[0])
                            : (ot += D.p.v[0] * R)),
                          D.a.propType &&
                            ((R = E[w].s.getMult(
                              C[r].anIndexes[w],
                              P.a[w].s.totalChars
                            )).length
                              ? (ot += D.a.v[0] * R[0])
                              : (ot += D.a.v[0] * R));
                      for (p = !0; p; )
                        l + g >= o + ot || !d
                          ? ((v = (o + ot - l) / h.partialLength),
                            (z = c.point[0] + (h.point[0] - c.point[0]) * v),
                            (N = c.point[1] + (h.point[1] - c.point[1]) * v),
                            S.translate(
                              (-x[0] * C[r].an) / 200,
                              (-x[1] * L) / 100
                            ),
                            (p = !1))
                          : d &&
                            ((l += h.partialLength),
                            (f += 1) >= d.length &&
                              ((f = 0),
                              u[(m += 1)]
                                ? (d = u[m].points)
                                : _.v.c
                                ? ((f = 0), (d = u[(m = 0)].points))
                                : ((l -= h.partialLength), (d = null))),
                            d && ((c = h), (g = (h = d[f]).partialLength)));
                      (B = C[r].an / 2 - C[r].add), S.translate(-B, 0, 0);
                    } else
                      (B = C[r].an / 2 - C[r].add),
                        S.translate(-B, 0, 0),
                        S.translate(
                          (-x[0] * C[r].an) / 200,
                          (-x[1] * L) / 100,
                          0
                        );
                    for (C[r].l, w = 0; w < F; w += 1)
                      (D = E[w].a).t.propType &&
                        ((R = E[w].s.getMult(
                          C[r].anIndexes[w],
                          P.a[w].s.totalChars
                        )),
                        (0 === i && 0 === t.j) ||
                          (this._hasMaskedPath
                            ? R.length
                              ? (o += D.t.v * R[0])
                              : (o += D.t.v * R)
                            : R.length
                            ? (i += D.t.v * R[0])
                            : (i += D.t.v * R)));
                    for (
                      C[r].l,
                        t.strokeWidthAnim && (H = t.sw || 0),
                        t.strokeColorAnim &&
                          (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                        t.fillColorAnim &&
                          t.fc &&
                          (q = [t.fc[0], t.fc[1], t.fc[2]]),
                        w = 0;
                      w < F;
                      w += 1
                    )
                      (D = E[w].a).a.propType &&
                        ((R = E[w].s.getMult(
                          C[r].anIndexes[w],
                          P.a[w].s.totalChars
                        )).length
                          ? S.translate(
                              -D.a.v[0] * R[0],
                              -D.a.v[1] * R[1],
                              D.a.v[2] * R[2]
                            )
                          : S.translate(
                              -D.a.v[0] * R,
                              -D.a.v[1] * R,
                              D.a.v[2] * R
                            ));
                    for (w = 0; w < F; w += 1)
                      (D = E[w].a).s.propType &&
                        ((R = E[w].s.getMult(
                          C[r].anIndexes[w],
                          P.a[w].s.totalChars
                        )).length
                          ? S.scale(
                              1 + (D.s.v[0] - 1) * R[0],
                              1 + (D.s.v[1] - 1) * R[1],
                              1
                            )
                          : S.scale(
                              1 + (D.s.v[0] - 1) * R,
                              1 + (D.s.v[1] - 1) * R,
                              1
                            ));
                    for (w = 0; w < F; w += 1) {
                      if (
                        ((D = E[w].a),
                        (R = E[w].s.getMult(
                          C[r].anIndexes[w],
                          P.a[w].s.totalChars
                        )),
                        D.sk.propType &&
                          (R.length
                            ? S.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1])
                            : S.skewFromAxis(-D.sk.v * R, D.sa.v * R)),
                        D.r.propType &&
                          (R.length
                            ? S.rotateZ(-D.r.v * R[2])
                            : S.rotateZ(-D.r.v * R)),
                        D.ry.propType &&
                          (R.length
                            ? S.rotateY(D.ry.v * R[1])
                            : S.rotateY(D.ry.v * R)),
                        D.rx.propType &&
                          (R.length
                            ? S.rotateX(D.rx.v * R[0])
                            : S.rotateX(D.rx.v * R)),
                        D.o.propType &&
                          (R.length
                            ? (G += (D.o.v * R[0] - G) * R[0])
                            : (G += (D.o.v * R - G) * R)),
                        t.strokeWidthAnim &&
                          D.sw.propType &&
                          (R.length ? (H += D.sw.v * R[0]) : (H += D.sw.v * R)),
                        t.strokeColorAnim && D.sc.propType)
                      )
                        for (j = 0; j < 3; j += 1)
                          R.length
                            ? (O[j] = O[j] + (D.sc.v[j] - O[j]) * R[0])
                            : (O[j] = O[j] + (D.sc.v[j] - O[j]) * R);
                      if (t.fillColorAnim && t.fc) {
                        if (D.fc.propType)
                          for (j = 0; j < 3; j += 1)
                            R.length
                              ? (q[j] = q[j] + (D.fc.v[j] - q[j]) * R[0])
                              : (q[j] = q[j] + (D.fc.v[j] - q[j]) * R);
                        D.fh.propType &&
                          (q = R.length
                            ? addHueToRGB(q, D.fh.v * R[0])
                            : addHueToRGB(q, D.fh.v * R)),
                          D.fs.propType &&
                            (q = R.length
                              ? addSaturationToRGB(q, D.fs.v * R[0])
                              : addSaturationToRGB(q, D.fs.v * R)),
                          D.fb.propType &&
                            (q = R.length
                              ? addBrightnessToRGB(q, D.fb.v * R[0])
                              : addBrightnessToRGB(q, D.fb.v * R));
                      }
                    }
                    for (w = 0; w < F; w += 1)
                      (D = E[w].a).p.propType &&
                        ((R = E[w].s.getMult(
                          C[r].anIndexes[w],
                          P.a[w].s.totalChars
                        )),
                        this._hasMaskedPath
                          ? R.length
                            ? S.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1])
                            : S.translate(0, D.p.v[1] * R, -D.p.v[2] * R)
                          : R.length
                          ? S.translate(
                              D.p.v[0] * R[0],
                              D.p.v[1] * R[1],
                              -D.p.v[2] * R[2]
                            )
                          : S.translate(
                              D.p.v[0] * R,
                              D.p.v[1] * R,
                              -D.p.v[2] * R
                            ));
                    if (
                      (t.strokeWidthAnim && (W = H < 0 ? 0 : H),
                      t.strokeColorAnim &&
                        (Y =
                          "rgb(" +
                          Math.round(255 * O[0]) +
                          "," +
                          Math.round(255 * O[1]) +
                          "," +
                          Math.round(255 * O[2]) +
                          ")"),
                      t.fillColorAnim &&
                        t.fc &&
                        (X =
                          "rgb(" +
                          Math.round(255 * q[0]) +
                          "," +
                          Math.round(255 * q[1]) +
                          "," +
                          Math.round(255 * q[2]) +
                          ")"),
                      this._hasMaskedPath)
                    ) {
                      if (
                        (S.translate(0, -t.ls),
                        S.translate(0, (x[1] * L) / 100 + s, 0),
                        P.p.p)
                      ) {
                        b =
                          (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                        var ht = (180 * Math.atan(b)) / Math.PI;
                        h.point[0] < c.point[0] && (ht += 180),
                          S.rotate((-ht * Math.PI) / 180);
                      }
                      S.translate(z, N, 0),
                        (o -= (x[0] * C[r].an) / 200),
                        C[r + 1] &&
                          U !== C[r + 1].ind &&
                          ((o += C[r].an / 2),
                          (o += (t.tr / 1e3) * t.finalSize));
                    } else {
                      switch (
                        (S.translate(i, s, 0),
                        t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                        t.j)
                      ) {
                        case 1:
                          S.translate(
                            C[r].animatorJustifyOffset +
                              t.justifyOffset +
                              (t.boxWidth - t.lineWidths[C[r].line]),
                            0,
                            0
                          );
                          break;
                        case 2:
                          S.translate(
                            C[r].animatorJustifyOffset +
                              t.justifyOffset +
                              (t.boxWidth - t.lineWidths[C[r].line]) / 2,
                            0,
                            0
                          );
                      }
                      S.translate(0, -t.ls),
                        S.translate(B, 0, 0),
                        S.translate(
                          (x[0] * C[r].an) / 200,
                          (x[1] * L) / 100,
                          0
                        ),
                        (i += C[r].l + (t.tr / 1e3) * t.finalSize);
                    }
                    "html" === A
                      ? (tt = S.toCSS())
                      : "svg" === A
                      ? (tt = S.to2dCSS())
                      : (et = [
                          S.props[0],
                          S.props[1],
                          S.props[2],
                          S.props[3],
                          S.props[4],
                          S.props[5],
                          S.props[6],
                          S.props[7],
                          S.props[8],
                          S.props[9],
                          S.props[10],
                          S.props[11],
                          S.props[12],
                          S.props[13],
                          S.props[14],
                          S.props[15],
                        ]),
                      (K = G);
                  }
                  k <= r
                    ? ((I = new LetterProps(K, W, Y, X, tt, et)),
                      this.renderedLetters.push(I),
                      (k += 1),
                      (this.lettersChangedFlag = !0))
                    : ((I = this.renderedLetters[r]),
                      (this.lettersChangedFlag =
                        I.update(K, W, Y, X, tt, et) ||
                        this.lettersChangedFlag));
                }
              }
            }),
            (TextAnimatorProperty.prototype.getValue = function () {
              this._elem.globalData.frameId !== this._frameId &&
                ((this._frameId = this._elem.globalData.frameId),
                this.iterateDynamicProperties());
            }),
            (TextAnimatorProperty.prototype.mHelper = new Matrix()),
            (TextAnimatorProperty.prototype.defaultPropsArray = []),
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            (LetterProps.prototype.update = function (t, e, i, s, r, a) {
              (this._mdf.o = !1),
                (this._mdf.sw = !1),
                (this._mdf.sc = !1),
                (this._mdf.fc = !1),
                (this._mdf.m = !1),
                (this._mdf.p = !1);
              var n = !1;
              return (
                this.o !== t && ((this.o = t), (this._mdf.o = !0), (n = !0)),
                this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (n = !0)),
                this.sc !== i && ((this.sc = i), (this._mdf.sc = !0), (n = !0)),
                this.fc !== s && ((this.fc = s), (this._mdf.fc = !0), (n = !0)),
                this.m !== r && ((this.m = r), (this._mdf.m = !0), (n = !0)),
                !a.length ||
                  (this.p[0] === a[0] &&
                    this.p[1] === a[1] &&
                    this.p[4] === a[4] &&
                    this.p[5] === a[5] &&
                    this.p[12] === a[12] &&
                    this.p[13] === a[13]) ||
                  ((this.p = a), (this._mdf.p = !0), (n = !0)),
                n
              );
            }),
            (TextProperty.prototype.defaultBoxWidth = [0, 0]),
            (TextProperty.prototype.copyData = function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              return t;
            }),
            (TextProperty.prototype.setCurrentData = function (t) {
              t.__complete || this.completeTextData(t),
                (this.currentData = t),
                (this.currentData.boxWidth =
                  this.currentData.boxWidth || this.defaultBoxWidth),
                (this._mdf = !0);
            }),
            (TextProperty.prototype.searchProperty = function () {
              return this.searchKeyframes();
            }),
            (TextProperty.prototype.searchKeyframes = function () {
              return (
                (this.kf = this.data.d.k.length > 1),
                this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                this.kf
              );
            }),
            (TextProperty.prototype.addEffect = function (t) {
              this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.getValue = function (t) {
              if (
                (this.elem.globalData.frameId !== this.frameId &&
                  this.effectsSequence.length) ||
                t
              ) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                  i = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                  (this.lock = !0), (this._mdf = !1);
                  var s,
                    r = this.effectsSequence.length,
                    a = t || this.data.d.k[this.keysIndex].s;
                  for (s = 0; s < r; s += 1)
                    a =
                      i !== this.keysIndex
                        ? this.effectsSequence[s](a, a.t)
                        : this.effectsSequence[s](this.currentData, a.t);
                  e !== a && this.setCurrentData(a),
                    (this.pv = this.v = this.currentData),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
              }
            }),
            (TextProperty.prototype.getKeyframeValue = function () {
              for (
                var t = this.data.d.k,
                  e = this.elem.comp.renderedFrame,
                  i = 0,
                  s = t.length;
                i <= s - 1 && (t[i].s, !(i === s - 1 || t[i + 1].t > e));

              )
                i += 1;
              return (
                this.keysIndex !== i && (this.keysIndex = i),
                this.data.d.k[this.keysIndex].s
              );
            }),
            (TextProperty.prototype.buildFinalText = function (t) {
              for (
                var e,
                  i = FontManager.getCombinedCharacterCodes(),
                  s = [],
                  r = 0,
                  a = t.length;
                r < a;

              )
                (e = t.charCodeAt(r)),
                  -1 !== i.indexOf(e)
                    ? (s[s.length - 1] += t.charAt(r))
                    : e >= 55296 &&
                      e <= 56319 &&
                      (e = t.charCodeAt(r + 1)) >= 56320 &&
                      e <= 57343
                    ? (s.push(t.substr(r, 2)), ++r)
                    : s.push(t.charAt(r)),
                  (r += 1);
              return s;
            }),
            (TextProperty.prototype.completeTextData = function (t) {
              t.__complete = !0;
              var e,
                i,
                s,
                r,
                a,
                n,
                o,
                h = this.elem.globalData.fontManager,
                l = this.data,
                p = [],
                f = 0,
                m = l.m.g,
                c = 0,
                d = 0,
                u = 0,
                g = [],
                y = 0,
                v = 0,
                b = h.getFontByName(t.f),
                _ = 0,
                x = b.fStyle ? b.fStyle.split(" ") : [],
                E = "normal",
                P = "normal";
              for (i = x.length, e = 0; e < i; e += 1)
                switch (x[e].toLowerCase()) {
                  case "italic":
                    P = "italic";
                    break;
                  case "bold":
                    E = "700";
                    break;
                  case "black":
                    E = "900";
                    break;
                  case "medium":
                    E = "500";
                    break;
                  case "regular":
                  case "normal":
                    E = "400";
                    break;
                  case "light":
                  case "thin":
                    E = "200";
                }
              (t.fWeight = b.fWeight || E),
                (t.fStyle = P),
                (t.finalSize = t.s),
                (t.finalText = this.buildFinalText(t.t)),
                (i = t.finalText.length),
                (t.finalLineHeight = t.lh);
              var S,
                A = (t.tr / 1e3) * t.finalSize;
              if (t.sz)
                for (var k, C, M = !0, T = t.sz[0], D = t.sz[1]; M; ) {
                  (k = 0),
                    (y = 0),
                    (i = (C = this.buildFinalText(t.t)).length),
                    (A = (t.tr / 1e3) * t.finalSize);
                  var w = -1;
                  for (e = 0; e < i; e += 1)
                    (S = C[e].charCodeAt(0)),
                      (s = !1),
                      " " === C[e]
                        ? (w = e)
                        : (13 !== S && 3 !== S) ||
                          ((y = 0),
                          (s = !0),
                          (k += t.finalLineHeight || 1.2 * t.finalSize)),
                      h.chars
                        ? ((o = h.getCharData(C[e], b.fStyle, b.fFamily)),
                          (_ = s ? 0 : (o.w * t.finalSize) / 100))
                        : (_ = h.measureText(C[e], t.f, t.finalSize)),
                      y + _ > T && " " !== C[e]
                        ? (-1 === w ? (i += 1) : (e = w),
                          (k += t.finalLineHeight || 1.2 * t.finalSize),
                          C.splice(e, w === e ? 1 : 0, "\r"),
                          (w = -1),
                          (y = 0))
                        : ((y += _), (y += A));
                  (k += (b.ascent * t.finalSize) / 100),
                    this.canResize &&
                    t.finalSize > this.minimumFontSize &&
                    D < k
                      ? ((t.finalSize -= 1),
                        (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                      : ((t.finalText = C), (i = t.finalText.length), (M = !1));
                }
              (y = -A), (_ = 0);
              var F,
                I = 0;
              for (e = 0; e < i; e += 1)
                if (
                  ((s = !1),
                  13 === (S = (F = t.finalText[e]).charCodeAt(0)) || 3 === S
                    ? ((I = 0),
                      g.push(y),
                      (v = y > v ? y : v),
                      (y = -2 * A),
                      (r = ""),
                      (s = !0),
                      (u += 1))
                    : (r = F),
                  h.chars
                    ? ((o = h.getCharData(
                        F,
                        b.fStyle,
                        h.getFontByName(t.f).fFamily
                      )),
                      (_ = s ? 0 : (o.w * t.finalSize) / 100))
                    : (_ = h.measureText(r, t.f, t.finalSize)),
                  " " === F ? (I += _ + A) : ((y += _ + A + I), (I = 0)),
                  p.push({
                    l: _,
                    an: _,
                    add: c,
                    n: s,
                    anIndexes: [],
                    val: r,
                    line: u,
                    animatorJustifyOffset: 0,
                  }),
                  2 == m)
                ) {
                  if (((c += _), "" === r || " " === r || e === i - 1)) {
                    for (("" !== r && " " !== r) || (c -= _); d <= e; )
                      (p[d].an = c), (p[d].ind = f), (p[d].extra = _), (d += 1);
                    (f += 1), (c = 0);
                  }
                } else if (3 == m) {
                  if (((c += _), "" === r || e === i - 1)) {
                    for ("" === r && (c -= _); d <= e; )
                      (p[d].an = c), (p[d].ind = f), (p[d].extra = _), (d += 1);
                    (c = 0), (f += 1);
                  }
                } else (p[f].ind = f), (p[f].extra = 0), (f += 1);
              if (((t.l = p), (v = y > v ? y : v), g.push(y), t.sz))
                (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
              else
                switch (((t.boxWidth = v), t.j)) {
                  case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                  case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                  default:
                    t.justifyOffset = 0;
                }
              t.lineWidths = g;
              var L,
                V,
                R = l.a;
              n = R.length;
              var B,
                z,
                N = [];
              for (a = 0; a < n; a += 1) {
                for (
                  (L = R[a]).a.sc && (t.strokeColorAnim = !0),
                    L.a.sw && (t.strokeWidthAnim = !0),
                    (L.a.fc || L.a.fh || L.a.fs || L.a.fb) &&
                      (t.fillColorAnim = !0),
                    z = 0,
                    B = L.s.b,
                    e = 0;
                  e < i;
                  e += 1
                )
                  ((V = p[e]).anIndexes[a] = z),
                    ((1 == B && "" !== V.val) ||
                      (2 == B && "" !== V.val && " " !== V.val) ||
                      (3 == B && (V.n || " " == V.val || e == i - 1)) ||
                      (4 == B && (V.n || e == i - 1))) &&
                      (1 === L.s.rn && N.push(z), (z += 1));
                l.a[a].s.totalChars = z;
                var G,
                  O = -1;
                if (1 === L.s.rn)
                  for (e = 0; e < i; e += 1)
                    O != (V = p[e]).anIndexes[a] &&
                      ((O = V.anIndexes[a]),
                      (G = N.splice(
                        Math.floor(Math.random() * N.length),
                        1
                      )[0])),
                      (V.anIndexes[a] = G);
              }
              (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
                (t.ls = t.ls || 0),
                (t.ascent = (b.ascent * t.finalSize) / 100);
            }),
            (TextProperty.prototype.updateDocumentData = function (t, e) {
              e = void 0 === e ? this.keysIndex : e;
              var i = this.copyData({}, this.data.d.k[e].s);
              (i = this.copyData(i, t)),
                (this.data.d.k[e].s = i),
                this.recalculate(e),
                this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.recalculate = function (t) {
              var e = this.data.d.k[t].s;
              (e.__complete = !1),
                (this.keysIndex = 0),
                (this._isFirstFrame = !0),
                this.getValue(e);
            }),
            (TextProperty.prototype.canResizeFont = function (t) {
              (this.canResize = t),
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.setMinimumFontSize = function (t) {
              (this.minimumFontSize = Math.floor(t) || 1),
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this);
            });
          var TextSelectorProp = (function () {
              var t = Math.max,
                e = Math.min,
                i = Math.floor;
              function s(t, e) {
                (this._currentTextLength = -1),
                  (this.k = !1),
                  (this.data = e),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.finalS = 0),
                  (this.finalE = 0),
                  this.initDynamicPropertyContainer(t),
                  (this.s = PropertyFactory.getProp(
                    t,
                    e.s || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.e =
                    "e" in e
                      ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                      : { v: 100 }),
                  (this.o = PropertyFactory.getProp(
                    t,
                    e.o || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.xe = PropertyFactory.getProp(
                    t,
                    e.xe || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.ne = PropertyFactory.getProp(
                    t,
                    e.ne || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
                  this.dynamicProperties.length || this.getValue();
              }
              return (
                (s.prototype = {
                  getMult: function (s) {
                    this._currentTextLength !==
                      this.elem.textProperty.currentData.l.length &&
                      this.getValue();
                    var r = 0,
                      a = 0,
                      n = 1,
                      o = 1;
                    this.ne.v > 0
                      ? (r = this.ne.v / 100)
                      : (a = -this.ne.v / 100),
                      this.xe.v > 0
                        ? (n = 1 - this.xe.v / 100)
                        : (o = 1 + this.xe.v / 100);
                    var h = BezierFactory.getBezierEasing(r, a, n, o).get,
                      l = 0,
                      p = this.finalS,
                      f = this.finalE,
                      m = this.data.sh;
                    if (2 === m)
                      l = h(
                        (l =
                          f === p
                            ? s >= f
                              ? 1
                              : 0
                            : t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1)))
                      );
                    else if (3 === m)
                      l = h(
                        (l =
                          f === p
                            ? s >= f
                              ? 0
                              : 1
                            : 1 - t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1)))
                      );
                    else if (4 === m)
                      f === p
                        ? (l = 0)
                        : (l = t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1))) <
                          0.5
                        ? (l *= 2)
                        : (l = 1 - 2 * (l - 0.5)),
                        (l = h(l));
                    else if (5 === m) {
                      if (f === p) l = 0;
                      else {
                        var c = f - p,
                          d = -c / 2 + (s = e(t(0, s + 0.5 - p), f - p)),
                          u = c / 2;
                        l = Math.sqrt(1 - (d * d) / (u * u));
                      }
                      l = h(l);
                    } else
                      6 === m
                        ? (f === p
                            ? (l = 0)
                            : ((s = e(t(0, s + 0.5 - p), f - p)),
                              (l =
                                (1 +
                                  Math.cos(
                                    Math.PI + (2 * Math.PI * s) / (f - p)
                                  )) /
                                2)),
                          (l = h(l)))
                        : (s >= i(p) &&
                            (l = t(
                              0,
                              e(s - p < 0 ? e(f, 1) - (p - s) : f - s, 1)
                            )),
                          (l = h(l)));
                    return l * this.a.v;
                  },
                  getValue: function (t) {
                    this.iterateDynamicProperties(),
                      (this._mdf = t || this._mdf),
                      (this._currentTextLength =
                        this.elem.textProperty.currentData.l.length || 0),
                      t &&
                        2 === this.data.r &&
                        (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                      i = this.o.v / e,
                      s = this.s.v / e + i,
                      r = this.e.v / e + i;
                    if (s > r) {
                      var a = s;
                      (s = r), (r = a);
                    }
                    (this.finalS = s), (this.finalE = r);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], s),
                {
                  getTextSelectorProp: function (t, e, i) {
                    return new s(t, e, i);
                  },
                }
              );
            })(),
            pool_factory = function (t, e, i, s) {
              var r = 0,
                a = t,
                n = createSizedArray(a);
              function o() {
                return r ? n[(r -= 1)] : e();
              }
              return {
                newElement: o,
                release: function (t) {
                  r === a && ((n = pooling.double(n)), (a *= 2)),
                    i && i(t),
                    (n[r] = t),
                    (r += 1);
                },
              };
            },
            pooling = {
              double: function (t) {
                return t.concat(createSizedArray(t.length));
              },
            },
            point_pool = pool_factory(8, function () {
              return createTypedArray("float32", 2);
            }),
            shape_pool =
              ((factory = pool_factory(
                4,
                function () {
                  return new ShapePath();
                },
                function (t) {
                  var e,
                    i = t._length;
                  for (e = 0; e < i; e += 1)
                    point_pool.release(t.v[e]),
                      point_pool.release(t.i[e]),
                      point_pool.release(t.o[e]),
                      (t.v[e] = null),
                      (t.i[e] = null),
                      (t.o[e] = null);
                  (t._length = 0), (t.c = !1);
                }
              )),
              (factory.clone = function (t) {
                var e,
                  i = factory.newElement(),
                  s = void 0 === t._length ? t.v.length : t._length;
                for (i.setLength(s), i.c = t.c, e = 0; e < s; e += 1)
                  i.setTripleAt(
                    t.v[e][0],
                    t.v[e][1],
                    t.o[e][0],
                    t.o[e][1],
                    t.i[e][0],
                    t.i[e][1],
                    e
                  );
                return i;
              }),
              factory),
            factory,
            shapeCollection_pool = (function () {
              var t = {
                  newShapeCollection: function () {
                    return e ? s[(e -= 1)] : new ShapeCollection();
                  },
                  release: function (t) {
                    var r,
                      a = t._length;
                    for (r = 0; r < a; r += 1) shape_pool.release(t.shapes[r]);
                    (t._length = 0),
                      e === i && ((s = pooling.double(s)), (i *= 2)),
                      (s[e] = t),
                      (e += 1);
                  },
                },
                e = 0,
                i = 4,
                s = createSizedArray(i);
              return t;
            })(),
            segments_length_pool = pool_factory(
              8,
              function () {
                return { lengths: [], totalLength: 0 };
              },
              function (t) {
                var e,
                  i = t.lengths.length;
                for (e = 0; e < i; e += 1)
                  bezier_length_pool.release(t.lengths[e]);
                t.lengths.length = 0;
              }
            ),
            bezier_length_pool = pool_factory(8, function () {
              return {
                addedLength: 0,
                percents: createTypedArray("float32", defaultCurveSegments),
                lengths: createTypedArray("float32", defaultCurveSegments),
              };
            });
          function BaseRenderer() {}
          function SVGRenderer(t, e) {
            (this.animationItem = t),
              (this.layers = null),
              (this.renderedFrame = -1),
              (this.svgElement = createNS("svg"));
            var i = "";
            if (e && e.title) {
              var s = createNS("title"),
                r = createElementID();
              s.setAttribute("id", r),
                (s.textContent = e.title),
                this.svgElement.appendChild(s),
                (i += r);
            }
            if (e && e.description) {
              var a = createNS("desc"),
                n = createElementID();
              a.setAttribute("id", n),
                (a.textContent = e.description),
                this.svgElement.appendChild(a),
                (i += " " + n);
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var h = createNS("g");
            this.svgElement.appendChild(h),
              (this.layerElement = h),
              (this.renderConfig = {
                preserveAspectRatio:
                  (e && e.preserveAspectRatio) || "xMidYMid meet",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                progressiveLoad: (e && e.progressiveLoad) || !1,
                hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                viewBoxOnly: (e && e.viewBoxOnly) || !1,
                viewBoxSize: (e && e.viewBoxSize) || !1,
                className: (e && e.className) || "",
                id: (e && e.id) || "",
                focusable: e && e.focusable,
                filterSize: {
                  width: (e && e.filterSize && e.filterSize.width) || "100%",
                  height: (e && e.filterSize && e.filterSize.height) || "100%",
                  x: (e && e.filterSize && e.filterSize.x) || "0%",
                  y: (e && e.filterSize && e.filterSize.y) || "0%",
                },
              }),
              (this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: o,
                renderConfig: this.renderConfig,
              }),
              (this.elements = []),
              (this.pendingElements = []),
              (this.destroyed = !1),
              (this.rendererType = "svg");
          }
          function CanvasRenderer(t, e) {
            (this.animationItem = t),
              (this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: (e && e.context) || null,
                progressiveLoad: (e && e.progressiveLoad) || !1,
                preserveAspectRatio:
                  (e && e.preserveAspectRatio) || "xMidYMid meet",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                className: (e && e.className) || "",
                id: (e && e.id) || "",
              }),
              (this.renderConfig.dpr = (e && e.dpr) || 1),
              this.animationItem.wrapper &&
                (this.renderConfig.dpr =
                  (e && e.dpr) || window.devicePixelRatio || 1),
              (this.renderedFrame = -1),
              (this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1,
              }),
              (this.contextData = new CVContextData()),
              (this.elements = []),
              (this.pendingElements = []),
              (this.transformMat = new Matrix()),
              (this.completeLayers = !1),
              (this.rendererType = "canvas");
          }
          function HybridRenderer(t, e) {
            (this.animationItem = t),
              (this.layers = null),
              (this.renderedFrame = -1),
              (this.renderConfig = {
                className: (e && e.className) || "",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                filterSize: {
                  width: (e && e.filterSize && e.filterSize.width) || "400%",
                  height: (e && e.filterSize && e.filterSize.height) || "400%",
                  x: (e && e.filterSize && e.filterSize.x) || "-100%",
                  y: (e && e.filterSize && e.filterSize.y) || "-100%",
                },
              }),
              (this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig,
              }),
              (this.pendingElements = []),
              (this.elements = []),
              (this.threeDElements = []),
              (this.destroyed = !1),
              (this.camera = null),
              (this.supports3d = !0),
              (this.rendererType = "html");
          }
          function MaskElement(t, e, i) {
            (this.data = t),
              (this.element = e),
              (this.globalData = i),
              (this.storedData = []),
              (this.masksProperties = this.data.masksProperties || []),
              (this.maskElement = null);
            var s,
              r = this.globalData.defs,
              a = this.masksProperties ? this.masksProperties.length : 0;
            (this.viewData = createSizedArray(a)), (this.solidPath = "");
            var n,
              o,
              h,
              l,
              p,
              f,
              m,
              c = this.masksProperties,
              d = 0,
              u = [],
              g = createElementID(),
              y = "clipPath",
              v = "clip-path";
            for (s = 0; s < a; s++)
              if (
                ((("a" !== c[s].mode && "n" !== c[s].mode) ||
                  c[s].inv ||
                  100 !== c[s].o.k ||
                  c[s].o.x) &&
                  ((y = "mask"), (v = "mask")),
                ("s" != c[s].mode && "i" != c[s].mode) || 0 !== d
                  ? (l = null)
                  : ((l = createNS("rect")).setAttribute("fill", "#ffffff"),
                    l.setAttribute("width", this.element.comp.data.w || 0),
                    l.setAttribute("height", this.element.comp.data.h || 0),
                    u.push(l)),
                (n = createNS("path")),
                "n" != c[s].mode)
              ) {
                var b;
                if (
                  ((d += 1),
                  n.setAttribute(
                    "fill",
                    "s" === c[s].mode ? "#000000" : "#ffffff"
                  ),
                  n.setAttribute("clip-rule", "nonzero"),
                  0 !== c[s].x.k
                    ? ((y = "mask"),
                      (v = "mask"),
                      (m = PropertyFactory.getProp(
                        this.element,
                        c[s].x,
                        0,
                        null,
                        this.element
                      )),
                      (b = createElementID()),
                      (p = createNS("filter")).setAttribute("id", b),
                      (f = createNS("feMorphology")).setAttribute(
                        "operator",
                        "erode"
                      ),
                      f.setAttribute("in", "SourceGraphic"),
                      f.setAttribute("radius", "0"),
                      p.appendChild(f),
                      r.appendChild(p),
                      n.setAttribute(
                        "stroke",
                        "s" === c[s].mode ? "#000000" : "#ffffff"
                      ))
                    : ((f = null), (m = null)),
                  (this.storedData[s] = {
                    elem: n,
                    x: m,
                    expan: f,
                    lastPath: "",
                    lastOperator: "",
                    filterId: b,
                    lastRadius: 0,
                  }),
                  "i" == c[s].mode)
                ) {
                  h = u.length;
                  var _ = createNS("g");
                  for (o = 0; o < h; o += 1) _.appendChild(u[o]);
                  var x = createNS("mask");
                  x.setAttribute("mask-type", "alpha"),
                    x.setAttribute("id", g + "_" + d),
                    x.appendChild(n),
                    r.appendChild(x),
                    _.setAttribute(
                      "mask",
                      "url(" + locationHref + "#" + g + "_" + d + ")"
                    ),
                    (u.length = 0),
                    u.push(_);
                } else u.push(n);
                c[s].inv &&
                  !this.solidPath &&
                  (this.solidPath = this.createLayerSolidPath()),
                  (this.viewData[s] = {
                    elem: n,
                    lastPath: "",
                    op: PropertyFactory.getProp(
                      this.element,
                      c[s].o,
                      0,
                      0.01,
                      this.element
                    ),
                    prop: ShapePropertyFactory.getShapeProp(
                      this.element,
                      c[s],
                      3
                    ),
                    invRect: l,
                  }),
                  this.viewData[s].prop.k ||
                    this.drawPath(
                      c[s],
                      this.viewData[s].prop.v,
                      this.viewData[s]
                    );
              } else
                (this.viewData[s] = {
                  op: PropertyFactory.getProp(
                    this.element,
                    c[s].o,
                    0,
                    0.01,
                    this.element
                  ),
                  prop: ShapePropertyFactory.getShapeProp(
                    this.element,
                    c[s],
                    3
                  ),
                  elem: n,
                  lastPath: "",
                }),
                  r.appendChild(n);
            for (
              this.maskElement = createNS(y), a = u.length, s = 0;
              s < a;
              s += 1
            )
              this.maskElement.appendChild(u[s]);
            d > 0 &&
              (this.maskElement.setAttribute("id", g),
              this.element.maskedElement.setAttribute(
                v,
                "url(" + locationHref + "#" + g + ")"
              ),
              r.appendChild(this.maskElement)),
              this.viewData.length && this.element.addRenderableComponent(this);
          }
          function HierarchyElement() {}
          function FrameElement() {}
          function TransformElement() {}
          function RenderableElement() {}
          function RenderableDOMElement() {}
          function ProcessedElement(t, e) {
            (this.elem = t), (this.pos = e);
          }
          function SVGStyleData(t, e) {
            (this.data = t),
              (this.type = t.ty),
              (this.d = ""),
              (this.lvl = e),
              (this._mdf = !1),
              (this.closed = !0 === t.hd),
              (this.pElem = createNS("path")),
              (this.msElem = null);
          }
          function SVGShapeData(t, e, i) {
            (this.caches = []),
              (this.styles = []),
              (this.transformers = t),
              (this.lStr = ""),
              (this.sh = i),
              (this.lvl = e),
              (this._isAnimated = !!i.k);
            for (var s = 0, r = t.length; s < r; ) {
              if (t[s].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break;
              }
              s += 1;
            }
          }
          function SVGTransformData(t, e, i) {
            (this.transform = { mProps: t, op: e, container: i }),
              (this.elements = []),
              (this._isAnimated =
                this.transform.mProps.dynamicProperties.length ||
                this.transform.op.effectsSequence.length);
          }
          function SVGStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
              (this.d = new DashProperty(t, e.d || {}, "svg", this)),
              (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
              (this.style = i),
              (this._isAnimated = !!this._isAnimated);
          }
          function SVGFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
              (this.style = i);
          }
          function SVGGradientFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              this.initGradientData(t, e, i);
          }
          function SVGGradientStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
              (this.d = new DashProperty(t, e.d || {}, "svg", this)),
              this.initGradientData(t, e, i),
              (this._isAnimated = !!this._isAnimated);
          }
          function ShapeGroupData() {
            (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
          }
          (BaseRenderer.prototype.checkLayers = function (t) {
            var e,
              i,
              s = this.layers.length;
            for (this.completeLayers = !0, e = s - 1; e >= 0; e--)
              this.elements[e] ||
                ((i = this.layers[e]).ip - i.st <= t - this.layers[e].st &&
                  i.op - i.st > t - this.layers[e].st &&
                  this.buildItem(e)),
                (this.completeLayers =
                  !!this.elements[e] && this.completeLayers);
            this.checkPendingElements();
          }),
            (BaseRenderer.prototype.createItem = function (t) {
              switch (t.ty) {
                case 2:
                  return this.createImage(t);
                case 0:
                  return this.createComp(t);
                case 1:
                  return this.createSolid(t);
                case 3:
                  return this.createNull(t);
                case 4:
                  return this.createShape(t);
                case 5:
                  return this.createText(t);
                case 13:
                  return this.createCamera(t);
              }
              return this.createNull(t);
            }),
            (BaseRenderer.prototype.createCamera = function () {
              throw new Error(
                "You're using a 3d camera. Try the html renderer."
              );
            }),
            (BaseRenderer.prototype.buildAllItems = function () {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1) this.buildItem(t);
              this.checkPendingElements();
            }),
            (BaseRenderer.prototype.includeLayers = function (t) {
              this.completeLayers = !1;
              var e,
                i,
                s = t.length,
                r = this.layers.length;
              for (e = 0; e < s; e += 1)
                for (i = 0; i < r; ) {
                  if (this.layers[i].id == t[e].id) {
                    this.layers[i] = t[e];
                    break;
                  }
                  i += 1;
                }
            }),
            (BaseRenderer.prototype.setProjectInterface = function (t) {
              this.globalData.projectInterface = t;
            }),
            (BaseRenderer.prototype.initItems = function () {
              this.globalData.progressiveLoad || this.buildAllItems();
            }),
            (BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
              for (
                var s = this.elements, r = this.layers, a = 0, n = r.length;
                a < n;

              )
                r[a].ind == e &&
                  (s[a] && !0 !== s[a]
                    ? (i.push(s[a]),
                      s[a].setAsParent(),
                      void 0 !== r[a].parent
                        ? this.buildElementParenting(t, r[a].parent, i)
                        : t.setHierarchy(i))
                    : (this.buildItem(a), this.addPendingElement(t))),
                  (a += 1);
            }),
            (BaseRenderer.prototype.addPendingElement = function (t) {
              this.pendingElements.push(t);
            }),
            (BaseRenderer.prototype.searchExtraCompositions = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                  var s = this.createComp(t[e]);
                  s.initExpressions(),
                    this.globalData.projectInterface.registerComposition(s);
                }
            }),
            (BaseRenderer.prototype.setupGlobalData = function (t, e) {
              (this.globalData.fontManager = new FontManager()),
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                (this.globalData.getAssetData =
                  this.animationItem.getAssetData.bind(this.animationItem)),
                (this.globalData.getAssetsPath =
                  this.animationItem.getAssetsPath.bind(this.animationItem)),
                (this.globalData.imageLoader =
                  this.animationItem.imagePreloader),
                (this.globalData.frameId = 0),
                (this.globalData.frameRate = t.fr),
                (this.globalData.nm = t.nm),
                (this.globalData.compSize = { w: t.w, h: t.h });
            }),
            extendPrototype([BaseRenderer], SVGRenderer),
            (SVGRenderer.prototype.createNull = function (t) {
              return new NullElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createShape = function (t) {
              return new SVGShapeElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createText = function (t) {
              return new SVGTextElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createImage = function (t) {
              return new IImageElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createComp = function (t) {
              return new SVGCompElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createSolid = function (t) {
              return new ISolidElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.configAnimation = function (t) {
              this.svgElement.setAttribute(
                "xmlns",
                "http://www.w3.org/2000/svg"
              ),
                this.renderConfig.viewBoxSize
                  ? this.svgElement.setAttribute(
                      "viewBox",
                      this.renderConfig.viewBoxSize
                    )
                  : this.svgElement.setAttribute(
                      "viewBox",
                      "0 0 " + t.w + " " + t.h
                    ),
                this.renderConfig.viewBoxOnly ||
                  (this.svgElement.setAttribute("width", t.w),
                  this.svgElement.setAttribute("height", t.h),
                  (this.svgElement.style.width = "100%"),
                  (this.svgElement.style.height = "100%"),
                  (this.svgElement.style.transform = "translate3d(0,0,0)")),
                this.renderConfig.className &&
                  this.svgElement.setAttribute(
                    "class",
                    this.renderConfig.className
                  ),
                this.renderConfig.id &&
                  this.svgElement.setAttribute("id", this.renderConfig.id),
                void 0 !== this.renderConfig.focusable &&
                  this.svgElement.setAttribute(
                    "focusable",
                    this.renderConfig.focusable
                  ),
                this.svgElement.setAttribute(
                  "preserveAspectRatio",
                  this.renderConfig.preserveAspectRatio
                ),
                this.animationItem.wrapper.appendChild(this.svgElement);
              var e = this.globalData.defs;
              this.setupGlobalData(t, e),
                (this.globalData.progressiveLoad =
                  this.renderConfig.progressiveLoad),
                (this.data = t);
              var i = createNS("clipPath"),
                s = createNS("rect");
              s.setAttribute("width", t.w),
                s.setAttribute("height", t.h),
                s.setAttribute("x", 0),
                s.setAttribute("y", 0);
              var r = createElementID();
              i.setAttribute("id", r),
                i.appendChild(s),
                this.layerElement.setAttribute(
                  "clip-path",
                  "url(" + locationHref + "#" + r + ")"
                ),
                e.appendChild(i),
                (this.layers = t.layers),
                (this.elements = createSizedArray(t.layers.length));
            }),
            (SVGRenderer.prototype.destroy = function () {
              (this.animationItem.wrapper.innerHTML = ""),
                (this.layerElement = null),
                (this.globalData.defs = null);
              var t,
                e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t++)
                this.elements[t] && this.elements[t].destroy();
              (this.elements.length = 0),
                (this.destroyed = !0),
                (this.animationItem = null);
            }),
            (SVGRenderer.prototype.updateContainerSize = function () {}),
            (SVGRenderer.prototype.buildItem = function (t) {
              var e = this.elements;
              if (!e[t] && 99 != this.layers[t].ty) {
                e[t] = !0;
                var i = this.createItem(this.layers[t]);
                (e[t] = i),
                  expressionsPlugin &&
                    (0 === this.layers[t].ty &&
                      this.globalData.projectInterface.registerComposition(i),
                    i.initExpressions()),
                  this.appendElementInPos(i, t),
                  this.layers[t].tt &&
                    (this.elements[t - 1] && !0 !== this.elements[t - 1]
                      ? i.setMatte(e[t - 1].layerId)
                      : (this.buildItem(t - 1), this.addPendingElement(i)));
              }
            }),
            (SVGRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                if ((t.checkParenting(), t.data.tt))
                  for (var e = 0, i = this.elements.length; e < i; ) {
                    if (this.elements[e] === t) {
                      t.setMatte(this.elements[e - 1].layerId);
                      break;
                    }
                    e += 1;
                  }
              }
            }),
            (SVGRenderer.prototype.renderFrame = function (t) {
              if (this.renderedFrame !== t && !this.destroyed) {
                null === t
                  ? (t = this.renderedFrame)
                  : (this.renderedFrame = t),
                  (this.globalData.frameNum = t),
                  (this.globalData.frameId += 1),
                  (this.globalData.projectInterface.currentFrame = t),
                  (this.globalData._mdf = !1);
                var e,
                  i = this.layers.length;
                for (
                  this.completeLayers || this.checkLayers(t), e = i - 1;
                  e >= 0;
                  e--
                )
                  (this.completeLayers || this.elements[e]) &&
                    this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                  for (e = 0; e < i; e += 1)
                    (this.completeLayers || this.elements[e]) &&
                      this.elements[e].renderFrame();
              }
            }),
            (SVGRenderer.prototype.appendElementInPos = function (t, e) {
              var i = t.getBaseElement();
              if (i) {
                for (var s, r = 0; r < e; )
                  this.elements[r] &&
                    !0 !== this.elements[r] &&
                    this.elements[r].getBaseElement() &&
                    (s = this.elements[r].getBaseElement()),
                    (r += 1);
                s
                  ? this.layerElement.insertBefore(i, s)
                  : this.layerElement.appendChild(i);
              }
            }),
            (SVGRenderer.prototype.hide = function () {
              this.layerElement.style.display = "none";
            }),
            (SVGRenderer.prototype.show = function () {
              this.layerElement.style.display = "block";
            }),
            extendPrototype([BaseRenderer], CanvasRenderer),
            (CanvasRenderer.prototype.createShape = function (t) {
              return new CVShapeElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createText = function (t) {
              return new CVTextElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createImage = function (t) {
              return new CVImageElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createComp = function (t) {
              return new CVCompElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createSolid = function (t) {
              return new CVSolidElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createNull =
              SVGRenderer.prototype.createNull),
            (CanvasRenderer.prototype.ctxTransform = function (t) {
              if (
                1 !== t[0] ||
                0 !== t[1] ||
                0 !== t[4] ||
                1 !== t[5] ||
                0 !== t[12] ||
                0 !== t[13]
              )
                if (this.renderConfig.clearCanvas) {
                  this.transformMat.cloneFromProps(t);
                  var e = this.contextData.cTr.props;
                  this.transformMat.transform(
                    e[0],
                    e[1],
                    e[2],
                    e[3],
                    e[4],
                    e[5],
                    e[6],
                    e[7],
                    e[8],
                    e[9],
                    e[10],
                    e[11],
                    e[12],
                    e[13],
                    e[14],
                    e[15]
                  ),
                    this.contextData.cTr.cloneFromProps(
                      this.transformMat.props
                    );
                  var i = this.contextData.cTr.props;
                  this.canvasContext.setTransform(
                    i[0],
                    i[1],
                    i[4],
                    i[5],
                    i[12],
                    i[13]
                  );
                } else
                  this.canvasContext.transform(
                    t[0],
                    t[1],
                    t[4],
                    t[5],
                    t[12],
                    t[13]
                  );
            }),
            (CanvasRenderer.prototype.ctxOpacity = function (t) {
              if (!this.renderConfig.clearCanvas)
                return (
                  (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                  void (this.globalData.currentGlobalAlpha =
                    this.contextData.cO)
                );
              (this.contextData.cO *= t < 0 ? 0 : t),
                this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                  ((this.canvasContext.globalAlpha = this.contextData.cO),
                  (this.globalData.currentGlobalAlpha = this.contextData.cO));
            }),
            (CanvasRenderer.prototype.reset = function () {
              this.renderConfig.clearCanvas
                ? this.contextData.reset()
                : this.canvasContext.restore();
            }),
            (CanvasRenderer.prototype.save = function (t) {
              if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos &&
                  this.contextData.duplicate();
                var i,
                  s = this.contextData.saved[this.contextData.cArrPos];
                for (i = 0; i < 16; i += 1) s[i] = e[i];
                (this.contextData.savedOp[this.contextData.cArrPos] =
                  this.contextData.cO),
                  (this.contextData.cArrPos += 1);
              } else this.canvasContext.save();
            }),
            (CanvasRenderer.prototype.restore = function (t) {
              if (this.renderConfig.clearCanvas) {
                t &&
                  (this.canvasContext.restore(),
                  (this.globalData.blendMode = "source-over")),
                  (this.contextData.cArrPos -= 1);
                var e,
                  i = this.contextData.saved[this.contextData.cArrPos],
                  s = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1) s[e] = i[e];
                this.canvasContext.setTransform(
                  i[0],
                  i[1],
                  i[4],
                  i[5],
                  i[12],
                  i[13]
                ),
                  (i = this.contextData.savedOp[this.contextData.cArrPos]),
                  (this.contextData.cO = i),
                  this.globalData.currentGlobalAlpha !== i &&
                    ((this.canvasContext.globalAlpha = i),
                    (this.globalData.currentGlobalAlpha = i));
              } else this.canvasContext.restore();
            }),
            (CanvasRenderer.prototype.configAnimation = function (t) {
              this.animationItem.wrapper
                ? ((this.animationItem.container = createTag("canvas")),
                  (this.animationItem.container.style.width = "100%"),
                  (this.animationItem.container.style.height = "100%"),
                  (this.animationItem.container.style.transformOrigin =
                    this.animationItem.container.style.mozTransformOrigin =
                    this.animationItem.container.style.webkitTransformOrigin =
                    this.animationItem.container.style["-webkit-transform"] =
                      "0px 0px 0px"),
                  this.animationItem.wrapper.appendChild(
                    this.animationItem.container
                  ),
                  (this.canvasContext =
                    this.animationItem.container.getContext("2d")),
                  this.renderConfig.className &&
                    this.animationItem.container.setAttribute(
                      "class",
                      this.renderConfig.className
                    ),
                  this.renderConfig.id &&
                    this.animationItem.container.setAttribute(
                      "id",
                      this.renderConfig.id
                    ))
                : (this.canvasContext = this.renderConfig.context),
                (this.data = t),
                (this.layers = t.layers),
                (this.transformCanvas = {
                  w: t.w,
                  h: t.h,
                  sx: 0,
                  sy: 0,
                  tx: 0,
                  ty: 0,
                }),
                this.setupGlobalData(t, document.body),
                (this.globalData.canvasContext = this.canvasContext),
                (this.globalData.renderer = this),
                (this.globalData.isDashed = !1),
                (this.globalData.progressiveLoad =
                  this.renderConfig.progressiveLoad),
                (this.globalData.transformCanvas = this.transformCanvas),
                (this.elements = createSizedArray(t.layers.length)),
                this.updateContainerSize();
            }),
            (CanvasRenderer.prototype.updateContainerSize = function () {
              var t, e, i, s;
              if (
                (this.reset(),
                this.animationItem.wrapper && this.animationItem.container
                  ? ((t = this.animationItem.wrapper.offsetWidth),
                    (e = this.animationItem.wrapper.offsetHeight),
                    this.animationItem.container.setAttribute(
                      "width",
                      t * this.renderConfig.dpr
                    ),
                    this.animationItem.container.setAttribute(
                      "height",
                      e * this.renderConfig.dpr
                    ))
                  : ((t =
                      this.canvasContext.canvas.width * this.renderConfig.dpr),
                    (e =
                      this.canvasContext.canvas.height *
                      this.renderConfig.dpr)),
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") ||
                  -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice"))
              ) {
                var r = this.renderConfig.preserveAspectRatio.split(" "),
                  a = r[1] || "meet",
                  n = r[0] || "xMidYMid",
                  o = n.substr(0, 4),
                  h = n.substr(4);
                (i = t / e),
                  ((s = this.transformCanvas.w / this.transformCanvas.h) > i &&
                    "meet" === a) ||
                  (s < i && "slice" === a)
                    ? ((this.transformCanvas.sx =
                        t / (this.transformCanvas.w / this.renderConfig.dpr)),
                      (this.transformCanvas.sy =
                        t / (this.transformCanvas.w / this.renderConfig.dpr)))
                    : ((this.transformCanvas.sx =
                        e / (this.transformCanvas.h / this.renderConfig.dpr)),
                      (this.transformCanvas.sy =
                        e / (this.transformCanvas.h / this.renderConfig.dpr))),
                  (this.transformCanvas.tx =
                    "xMid" === o &&
                    ((s < i && "meet" === a) || (s > i && "slice" === a))
                      ? ((t -
                          this.transformCanvas.w *
                            (e / this.transformCanvas.h)) /
                          2) *
                        this.renderConfig.dpr
                      : "xMax" === o &&
                        ((s < i && "meet" === a) || (s > i && "slice" === a))
                      ? (t -
                          this.transformCanvas.w *
                            (e / this.transformCanvas.h)) *
                        this.renderConfig.dpr
                      : 0),
                  (this.transformCanvas.ty =
                    "YMid" === h &&
                    ((s > i && "meet" === a) || (s < i && "slice" === a))
                      ? ((e -
                          this.transformCanvas.h *
                            (t / this.transformCanvas.w)) /
                          2) *
                        this.renderConfig.dpr
                      : "YMax" === h &&
                        ((s > i && "meet" === a) || (s < i && "slice" === a))
                      ? (e -
                          this.transformCanvas.h *
                            (t / this.transformCanvas.w)) *
                        this.renderConfig.dpr
                      : 0);
              } else
                "none" == this.renderConfig.preserveAspectRatio
                  ? ((this.transformCanvas.sx =
                      t / (this.transformCanvas.w / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      e / (this.transformCanvas.h / this.renderConfig.dpr)),
                    (this.transformCanvas.tx = 0),
                    (this.transformCanvas.ty = 0))
                  : ((this.transformCanvas.sx = this.renderConfig.dpr),
                    (this.transformCanvas.sy = this.renderConfig.dpr),
                    (this.transformCanvas.tx = 0),
                    (this.transformCanvas.ty = 0));
              (this.transformCanvas.props = [
                this.transformCanvas.sx,
                0,
                0,
                0,
                0,
                this.transformCanvas.sy,
                0,
                0,
                0,
                0,
                1,
                0,
                this.transformCanvas.tx,
                this.transformCanvas.ty,
                0,
                1,
              ]),
                this.ctxTransform(this.transformCanvas.props),
                this.canvasContext.beginPath(),
                this.canvasContext.rect(
                  0,
                  0,
                  this.transformCanvas.w,
                  this.transformCanvas.h
                ),
                this.canvasContext.closePath(),
                this.canvasContext.clip(),
                this.renderFrame(this.renderedFrame, !0);
            }),
            (CanvasRenderer.prototype.destroy = function () {
              var t;
              for (
                this.renderConfig.clearCanvas &&
                  (this.animationItem.wrapper.innerHTML = ""),
                  t = (this.layers ? this.layers.length : 0) - 1;
                t >= 0;
                t -= 1
              )
                this.elements[t] && this.elements[t].destroy();
              (this.elements.length = 0),
                (this.globalData.canvasContext = null),
                (this.animationItem.container = null),
                (this.destroyed = !0);
            }),
            (CanvasRenderer.prototype.renderFrame = function (t, e) {
              if (
                (this.renderedFrame !== t ||
                  !0 !== this.renderConfig.clearCanvas ||
                  e) &&
                !this.destroyed &&
                -1 !== t
              ) {
                (this.renderedFrame = t),
                  (this.globalData.frameNum =
                    t - this.animationItem._isFirstFrame),
                  (this.globalData.frameId += 1),
                  (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                  (this.globalData.projectInterface.currentFrame = t);
                var i,
                  s = this.layers.length;
                for (
                  this.completeLayers || this.checkLayers(t), i = 0;
                  i < s;
                  i++
                )
                  (this.completeLayers || this.elements[i]) &&
                    this.elements[i].prepareFrame(t - this.layers[i].st);
                if (this.globalData._mdf) {
                  for (
                    !0 === this.renderConfig.clearCanvas
                      ? this.canvasContext.clearRect(
                          0,
                          0,
                          this.transformCanvas.w,
                          this.transformCanvas.h
                        )
                      : this.save(),
                      i = s - 1;
                    i >= 0;
                    i -= 1
                  )
                    (this.completeLayers || this.elements[i]) &&
                      this.elements[i].renderFrame();
                  !0 !== this.renderConfig.clearCanvas && this.restore();
                }
              }
            }),
            (CanvasRenderer.prototype.buildItem = function (t) {
              var e = this.elements;
              if (!e[t] && 99 != this.layers[t].ty) {
                var i = this.createItem(this.layers[t], this, this.globalData);
                (e[t] = i), i.initExpressions();
              }
            }),
            (CanvasRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; )
                this.pendingElements.pop().checkParenting();
            }),
            (CanvasRenderer.prototype.hide = function () {
              this.animationItem.container.style.display = "none";
            }),
            (CanvasRenderer.prototype.show = function () {
              this.animationItem.container.style.display = "block";
            }),
            extendPrototype([BaseRenderer], HybridRenderer),
            (HybridRenderer.prototype.buildItem =
              SVGRenderer.prototype.buildItem),
            (HybridRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; )
                this.pendingElements.pop().checkParenting();
            }),
            (HybridRenderer.prototype.appendElementInPos = function (t, e) {
              var i = t.getBaseElement();
              if (i) {
                var s = this.layers[e];
                if (s.ddd && this.supports3d) this.addTo3dContainer(i, e);
                else if (this.threeDElements) this.addTo3dContainer(i, e);
                else {
                  for (var r, a, n = 0; n < e; )
                    this.elements[n] &&
                      !0 !== this.elements[n] &&
                      this.elements[n].getBaseElement &&
                      ((a = this.elements[n]),
                      (r =
                        (this.layers[n].ddd
                          ? this.getThreeDContainerByPos(n)
                          : a.getBaseElement()) || r)),
                      (n += 1);
                  r
                    ? (s.ddd && this.supports3d) ||
                      this.layerElement.insertBefore(i, r)
                    : (s.ddd && this.supports3d) ||
                      this.layerElement.appendChild(i);
                }
              }
            }),
            (HybridRenderer.prototype.createShape = function (t) {
              return this.supports3d
                ? new HShapeElement(t, this.globalData, this)
                : new SVGShapeElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createText = function (t) {
              return this.supports3d
                ? new HTextElement(t, this.globalData, this)
                : new SVGTextElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createCamera = function (t) {
              return (
                (this.camera = new HCameraElement(t, this.globalData, this)),
                this.camera
              );
            }),
            (HybridRenderer.prototype.createImage = function (t) {
              return this.supports3d
                ? new HImageElement(t, this.globalData, this)
                : new IImageElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createComp = function (t) {
              return this.supports3d
                ? new HCompElement(t, this.globalData, this)
                : new SVGCompElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createSolid = function (t) {
              return this.supports3d
                ? new HSolidElement(t, this.globalData, this)
                : new ISolidElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createNull =
              SVGRenderer.prototype.createNull),
            (HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
              for (var e = 0, i = this.threeDElements.length; e < i; ) {
                if (
                  this.threeDElements[e].startPos <= t &&
                  this.threeDElements[e].endPos >= t
                )
                  return this.threeDElements[e].perspectiveElem;
                e += 1;
              }
            }),
            (HybridRenderer.prototype.createThreeDContainer = function (t, e) {
              var i = createTag("div");
              styleDiv(i);
              var s = createTag("div");
              styleDiv(s),
                "3d" === e &&
                  ((i.style.width = this.globalData.compSize.w + "px"),
                  (i.style.height = this.globalData.compSize.h + "px"),
                  (i.style.transformOrigin =
                    i.style.mozTransformOrigin =
                    i.style.webkitTransformOrigin =
                      "50% 50%"),
                  (s.style.transform = s.style.webkitTransform =
                    "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")),
                i.appendChild(s);
              var r = {
                container: s,
                perspectiveElem: i,
                startPos: t,
                endPos: t,
                type: e,
              };
              return this.threeDElements.push(r), r;
            }),
            (HybridRenderer.prototype.build3dContainers = function () {
              var t,
                e,
                i = this.layers.length,
                s = "";
              for (t = 0; t < i; t += 1)
                this.layers[t].ddd && 3 !== this.layers[t].ty
                  ? ("3d" !== s &&
                      ((s = "3d"), (e = this.createThreeDContainer(t, "3d"))),
                    (e.endPos = Math.max(e.endPos, t)))
                  : ("2d" !== s &&
                      ((s = "2d"), (e = this.createThreeDContainer(t, "2d"))),
                    (e.endPos = Math.max(e.endPos, t)));
              for (t = (i = this.threeDElements.length) - 1; t >= 0; t--)
                this.resizerElem.appendChild(
                  this.threeDElements[t].perspectiveElem
                );
            }),
            (HybridRenderer.prototype.addTo3dContainer = function (t, e) {
              for (var i = 0, s = this.threeDElements.length; i < s; ) {
                if (e <= this.threeDElements[i].endPos) {
                  for (var r, a = this.threeDElements[i].startPos; a < e; )
                    this.elements[a] &&
                      this.elements[a].getBaseElement &&
                      (r = this.elements[a].getBaseElement()),
                      (a += 1);
                  r
                    ? this.threeDElements[i].container.insertBefore(t, r)
                    : this.threeDElements[i].container.appendChild(t);
                  break;
                }
                i += 1;
              }
            }),
            (HybridRenderer.prototype.configAnimation = function (t) {
              var e = createTag("div"),
                i = this.animationItem.wrapper;
              (e.style.width = t.w + "px"),
                (e.style.height = t.h + "px"),
                (this.resizerElem = e),
                styleDiv(e),
                (e.style.transformStyle =
                  e.style.webkitTransformStyle =
                  e.style.mozTransformStyle =
                    "flat"),
                this.renderConfig.className &&
                  e.setAttribute("class", this.renderConfig.className),
                i.appendChild(e),
                (e.style.overflow = "hidden");
              var s = createNS("svg");
              s.setAttribute("width", "1"),
                s.setAttribute("height", "1"),
                styleDiv(s),
                this.resizerElem.appendChild(s);
              var r = createNS("defs");
              s.appendChild(r),
                (this.data = t),
                this.setupGlobalData(t, s),
                (this.globalData.defs = r),
                (this.layers = t.layers),
                (this.layerElement = this.resizerElem),
                this.build3dContainers(),
                this.updateContainerSize();
            }),
            (HybridRenderer.prototype.destroy = function () {
              (this.animationItem.wrapper.innerHTML = ""),
                (this.animationItem.container = null),
                (this.globalData.defs = null);
              var t,
                e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t++) this.elements[t].destroy();
              (this.elements.length = 0),
                (this.destroyed = !0),
                (this.animationItem = null);
            }),
            (HybridRenderer.prototype.updateContainerSize = function () {
              var t,
                e,
                i,
                s,
                r = this.animationItem.wrapper.offsetWidth,
                a = this.animationItem.wrapper.offsetHeight,
                n = r / a;
              this.globalData.compSize.w / this.globalData.compSize.h > n
                ? ((t = r / this.globalData.compSize.w),
                  (e = r / this.globalData.compSize.w),
                  (i = 0),
                  (s =
                    (a -
                      this.globalData.compSize.h *
                        (r / this.globalData.compSize.w)) /
                    2))
                : ((t = a / this.globalData.compSize.h),
                  (e = a / this.globalData.compSize.h),
                  (i =
                    (r -
                      this.globalData.compSize.w *
                        (a / this.globalData.compSize.h)) /
                    2),
                  (s = 0)),
                (this.resizerElem.style.transform =
                  this.resizerElem.style.webkitTransform =
                    "matrix3d(" +
                    t +
                    ",0,0,0,0," +
                    e +
                    ",0,0,0,0,1,0," +
                    i +
                    "," +
                    s +
                    ",0,1)");
            }),
            (HybridRenderer.prototype.renderFrame =
              SVGRenderer.prototype.renderFrame),
            (HybridRenderer.prototype.hide = function () {
              this.resizerElem.style.display = "none";
            }),
            (HybridRenderer.prototype.show = function () {
              this.resizerElem.style.display = "block";
            }),
            (HybridRenderer.prototype.initItems = function () {
              if ((this.buildAllItems(), this.camera)) this.camera.setup();
              else {
                var t,
                  e = this.globalData.compSize.w,
                  i = this.globalData.compSize.h,
                  s = this.threeDElements.length;
                for (t = 0; t < s; t += 1)
                  this.threeDElements[t].perspectiveElem.style.perspective =
                    this.threeDElements[
                      t
                    ].perspectiveElem.style.webkitPerspective =
                      Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px";
              }
            }),
            (HybridRenderer.prototype.searchExtraCompositions = function (t) {
              var e,
                i = t.length,
                s = createTag("div");
              for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                  var r = this.createComp(t[e], s, this.globalData.comp, null);
                  r.initExpressions(),
                    this.globalData.projectInterface.registerComposition(r);
                }
            }),
            (MaskElement.prototype.getMaskProperty = function (t) {
              return this.viewData[t].prop;
            }),
            (MaskElement.prototype.renderFrame = function (t) {
              var e,
                i = this.element.finalTransform.mat,
                s = this.masksProperties.length;
              for (e = 0; e < s; e++)
                if (
                  ((this.viewData[e].prop._mdf || t) &&
                    this.drawPath(
                      this.masksProperties[e],
                      this.viewData[e].prop.v,
                      this.viewData[e]
                    ),
                  (this.viewData[e].op._mdf || t) &&
                    this.viewData[e].elem.setAttribute(
                      "fill-opacity",
                      this.viewData[e].op.v
                    ),
                  "n" !== this.masksProperties[e].mode &&
                    (this.viewData[e].invRect &&
                      (this.element.finalTransform.mProp._mdf || t) &&
                      this.viewData[e].invRect.setAttribute(
                        "transform",
                        i.getInverseMatrix().to2dCSS()
                      ),
                    this.storedData[e].x && (this.storedData[e].x._mdf || t)))
                ) {
                  var r = this.storedData[e].expan;
                  this.storedData[e].x.v < 0
                    ? ("erode" !== this.storedData[e].lastOperator &&
                        ((this.storedData[e].lastOperator = "erode"),
                        this.storedData[e].elem.setAttribute(
                          "filter",
                          "url(" +
                            locationHref +
                            "#" +
                            this.storedData[e].filterId +
                            ")"
                        )),
                      r.setAttribute("radius", -this.storedData[e].x.v))
                    : ("dilate" !== this.storedData[e].lastOperator &&
                        ((this.storedData[e].lastOperator = "dilate"),
                        this.storedData[e].elem.setAttribute("filter", null)),
                      this.storedData[e].elem.setAttribute(
                        "stroke-width",
                        2 * this.storedData[e].x.v
                      ));
                }
            }),
            (MaskElement.prototype.getMaskelement = function () {
              return this.maskElement;
            }),
            (MaskElement.prototype.createLayerSolidPath = function () {
              var t = "M0,0 ";
              return (
                (t += " h" + this.globalData.compSize.w),
                (t += " v" + this.globalData.compSize.h),
                (t += " h-" + this.globalData.compSize.w),
                (t += " v-" + this.globalData.compSize.h + " ")
              );
            }),
            (MaskElement.prototype.drawPath = function (t, e, i) {
              var s,
                r,
                a = " M" + e.v[0][0] + "," + e.v[0][1];
              for (r = e._length, s = 1; s < r; s += 1)
                a +=
                  " C" +
                  e.o[s - 1][0] +
                  "," +
                  e.o[s - 1][1] +
                  " " +
                  e.i[s][0] +
                  "," +
                  e.i[s][1] +
                  " " +
                  e.v[s][0] +
                  "," +
                  e.v[s][1];
              if (
                (e.c &&
                  r > 1 &&
                  (a +=
                    " C" +
                    e.o[s - 1][0] +
                    "," +
                    e.o[s - 1][1] +
                    " " +
                    e.i[0][0] +
                    "," +
                    e.i[0][1] +
                    " " +
                    e.v[0][0] +
                    "," +
                    e.v[0][1]),
                i.lastPath !== a)
              ) {
                var n = "";
                i.elem &&
                  (e.c && (n = t.inv ? this.solidPath + a : a),
                  i.elem.setAttribute("d", n)),
                  (i.lastPath = a);
              }
            }),
            (MaskElement.prototype.destroy = function () {
              (this.element = null),
                (this.globalData = null),
                (this.maskElement = null),
                (this.data = null),
                (this.masksProperties = null);
            }),
            (HierarchyElement.prototype = {
              initHierarchy: function () {
                (this.hierarchy = []),
                  (this._isParent = !1),
                  this.checkParenting();
              },
              setHierarchy: function (t) {
                this.hierarchy = t;
              },
              setAsParent: function () {
                this._isParent = !0;
              },
              checkParenting: function () {
                void 0 !== this.data.parent &&
                  this.comp.buildElementParenting(this, this.data.parent, []);
              },
            }),
            (FrameElement.prototype = {
              initFrame: function () {
                (this._isFirstFrame = !1),
                  (this.dynamicProperties = []),
                  (this._mdf = !1);
              },
              prepareProperties: function (t, e) {
                var i,
                  s = this.dynamicProperties.length;
                for (i = 0; i < s; i += 1)
                  (e ||
                    (this._isParent &&
                      "transform" === this.dynamicProperties[i].propType)) &&
                    (this.dynamicProperties[i].getValue(),
                    this.dynamicProperties[i]._mdf &&
                      ((this.globalData._mdf = !0), (this._mdf = !0)));
              },
              addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) &&
                  this.dynamicProperties.push(t);
              },
            }),
            (TransformElement.prototype = {
              initTransform: function () {
                (this.finalTransform = {
                  mProp: this.data.ks
                    ? TransformPropertyFactory.getTransformProperty(
                        this,
                        this.data.ks,
                        this
                      )
                    : { o: 0 },
                  _matMdf: !1,
                  _opMdf: !1,
                  mat: new Matrix(),
                }),
                  this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                  this.data.ty;
              },
              renderTransform: function () {
                if (
                  ((this.finalTransform._opMdf =
                    this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                  (this.finalTransform._matMdf =
                    this.finalTransform.mProp._mdf || this._isFirstFrame),
                  this.hierarchy)
                ) {
                  var t,
                    e = this.finalTransform.mat,
                    i = 0,
                    s = this.hierarchy.length;
                  if (!this.finalTransform._matMdf)
                    for (; i < s; ) {
                      if (this.hierarchy[i].finalTransform.mProp._mdf) {
                        this.finalTransform._matMdf = !0;
                        break;
                      }
                      i += 1;
                    }
                  if (this.finalTransform._matMdf)
                    for (
                      t = this.finalTransform.mProp.v.props,
                        e.cloneFromProps(t),
                        i = 0;
                      i < s;
                      i += 1
                    )
                      (t = this.hierarchy[i].finalTransform.mProp.v.props),
                        e.transform(
                          t[0],
                          t[1],
                          t[2],
                          t[3],
                          t[4],
                          t[5],
                          t[6],
                          t[7],
                          t[8],
                          t[9],
                          t[10],
                          t[11],
                          t[12],
                          t[13],
                          t[14],
                          t[15]
                        );
                }
              },
              globalToLocal: function (t) {
                var e = [];
                e.push(this.finalTransform);
                for (var i = !0, s = this.comp; i; )
                  s.finalTransform
                    ? (s.data.hasMask && e.splice(0, 0, s.finalTransform),
                      (s = s.comp))
                    : (i = !1);
                var r,
                  a,
                  n = e.length;
                for (r = 0; r < n; r += 1)
                  (a = e[r].mat.applyToPointArray(0, 0, 0)),
                    (t = [t[0] - a[0], t[1] - a[1], 0]);
                return t;
              },
              mHelper: new Matrix(),
            }),
            (RenderableElement.prototype = {
              initRenderable: function () {
                (this.isInRange = !1),
                  (this.hidden = !1),
                  (this.isTransparent = !1),
                  (this.renderableComponents = []);
              },
              addRenderableComponent: function (t) {
                -1 === this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.push(t);
              },
              removeRenderableComponent: function (t) {
                -1 !== this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.splice(
                    this.renderableComponents.indexOf(t),
                    1
                  );
              },
              prepareRenderableFrame: function (t) {
                this.checkLayerLimits(t);
              },
              checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0
                  ? !this.isTransparent &&
                    this.globalData.renderConfig.hideOnTransparent &&
                    ((this.isTransparent = !0), this.hide())
                  : this.isTransparent &&
                    ((this.isTransparent = !1), this.show());
              },
              checkLayerLimits: function (t) {
                this.data.ip - this.data.st <= t &&
                this.data.op - this.data.st > t
                  ? !0 !== this.isInRange &&
                    ((this.globalData._mdf = !0),
                    (this._mdf = !0),
                    (this.isInRange = !0),
                    this.show())
                  : !1 !== this.isInRange &&
                    ((this.globalData._mdf = !0),
                    (this.isInRange = !1),
                    this.hide());
              },
              renderRenderable: function () {
                var t,
                  e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1)
                  this.renderableComponents[t].renderFrame(this._isFirstFrame);
              },
              sourceRectAtTime: function () {
                return { top: 0, left: 0, width: 100, height: 100 };
              },
              getLayerSize: function () {
                return 5 === this.data.ty
                  ? {
                      w: this.data.textData.width,
                      h: this.data.textData.height,
                    }
                  : { w: this.data.width, h: this.data.height };
              },
            }),
            extendPrototype(
              [
                RenderableElement,
                createProxyFunction({
                  initElement: function (t, e, i) {
                    this.initFrame(),
                      this.initBaseData(t, e, i),
                      this.initTransform(t, e, i),
                      this.initHierarchy(),
                      this.initRenderable(),
                      this.initRendererElement(),
                      this.createContainerElements(),
                      this.createRenderableComponents(),
                      this.createContent(),
                      this.hide();
                  },
                  hide: function () {
                    this.hidden ||
                      (this.isInRange && !this.isTransparent) ||
                      (((this.baseElement || this.layerElement).style.display =
                        "none"),
                      (this.hidden = !0));
                  },
                  show: function () {
                    this.isInRange &&
                      !this.isTransparent &&
                      (this.data.hd ||
                        ((this.baseElement || this.layerElement).style.display =
                          "block"),
                      (this.hidden = !1),
                      (this._isFirstFrame = !0));
                  },
                  renderFrame: function () {
                    this.data.hd ||
                      this.hidden ||
                      (this.renderTransform(),
                      this.renderRenderable(),
                      this.renderElement(),
                      this.renderInnerContent(),
                      this._isFirstFrame && (this._isFirstFrame = !1));
                  },
                  renderInnerContent: function () {},
                  prepareFrame: function (t) {
                    (this._mdf = !1),
                      this.prepareRenderableFrame(t),
                      this.prepareProperties(t, this.isInRange),
                      this.checkTransparency();
                  },
                  destroy: function () {
                    (this.innerElem = null), this.destroyBaseElement();
                  },
                }),
              ],
              RenderableDOMElement
            ),
            (SVGStyleData.prototype.reset = function () {
              (this.d = ""), (this._mdf = !1);
            }),
            (SVGShapeData.prototype.setAsAnimated = function () {
              this._isAnimated = !0;
            }),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            (SVGGradientFillStyleData.prototype.initGradientData = function (
              t,
              e,
              i
            ) {
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
                (this.h = PropertyFactory.getProp(
                  t,
                  e.h || { k: 0 },
                  0,
                  0.01,
                  this
                )),
                (this.a = PropertyFactory.getProp(
                  t,
                  e.a || { k: 0 },
                  0,
                  degToRads,
                  this
                )),
                (this.g = new GradientProperty(t, e.g, this)),
                (this.style = i),
                (this.stops = []),
                this.setGradientData(i.pElem, e),
                this.setGradientOpacity(e, i),
                (this._isAnimated = !!this._isAnimated);
            }),
            (SVGGradientFillStyleData.prototype.setGradientData = function (
              t,
              e
            ) {
              var i = createElementID(),
                s = createNS(1 === e.t ? "linearGradient" : "radialGradient");
              s.setAttribute("id", i),
                s.setAttribute("spreadMethod", "pad"),
                s.setAttribute("gradientUnits", "userSpaceOnUse");
              var r,
                a,
                n,
                o = [];
              for (n = 4 * e.g.p, a = 0; a < n; a += 4)
                (r = createNS("stop")), s.appendChild(r), o.push(r);
              t.setAttribute(
                "gf" === e.ty ? "fill" : "stroke",
                "url(" + locationHref + "#" + i + ")"
              ),
                (this.gf = s),
                (this.cst = o);
            }),
            (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
              t,
              e
            ) {
              if (this.g._hasOpacity && !this.g._collapsable) {
                var i,
                  s,
                  r,
                  a = createNS("mask"),
                  n = createNS("path");
                a.appendChild(n);
                var o = createElementID(),
                  h = createElementID();
                a.setAttribute("id", h);
                var l = createNS(
                  1 === t.t ? "linearGradient" : "radialGradient"
                );
                l.setAttribute("id", o),
                  l.setAttribute("spreadMethod", "pad"),
                  l.setAttribute("gradientUnits", "userSpaceOnUse"),
                  (r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
                var p = this.stops;
                for (s = 4 * t.g.p; s < r; s += 2)
                  (i = createNS("stop")).setAttribute(
                    "stop-color",
                    "rgb(255,255,255)"
                  ),
                    l.appendChild(i),
                    p.push(i);
                n.setAttribute(
                  "gf" === t.ty ? "fill" : "stroke",
                  "url(" + locationHref + "#" + o + ")"
                ),
                  (this.of = l),
                  (this.ms = a),
                  (this.ost = p),
                  (this.maskId = h),
                  (e.msElem = n);
              }
            }),
            extendPrototype(
              [DynamicPropertyContainer],
              SVGGradientFillStyleData
            ),
            extendPrototype(
              [SVGGradientFillStyleData, DynamicPropertyContainer],
              SVGGradientStrokeStyleData
            );
          var SVGElementsRenderer = (function () {
            var t = new Matrix(),
              e = new Matrix();
            function i(t, e, i) {
              (i || e.transform.op._mdf) &&
                e.transform.container.setAttribute("opacity", e.transform.op.v),
                (i || e.transform.mProps._mdf) &&
                  e.transform.container.setAttribute(
                    "transform",
                    e.transform.mProps.v.to2dCSS()
                  );
            }
            function s(i, s, r) {
              var a,
                n,
                o,
                h,
                l,
                p,
                f,
                m,
                c,
                d,
                u,
                g = s.styles.length,
                y = s.lvl;
              for (p = 0; p < g; p += 1) {
                if (((h = s.sh._mdf || r), s.styles[p].lvl < y)) {
                  for (
                    m = e.reset(),
                      d = y - s.styles[p].lvl,
                      u = s.transformers.length - 1;
                    !h && d > 0;

                  )
                    (h = s.transformers[u].mProps._mdf || h), d--, u--;
                  if (h)
                    for (
                      d = y - s.styles[p].lvl, u = s.transformers.length - 1;
                      d > 0;

                    )
                      (c = s.transformers[u].mProps.v.props),
                        m.transform(
                          c[0],
                          c[1],
                          c[2],
                          c[3],
                          c[4],
                          c[5],
                          c[6],
                          c[7],
                          c[8],
                          c[9],
                          c[10],
                          c[11],
                          c[12],
                          c[13],
                          c[14],
                          c[15]
                        ),
                        d--,
                        u--;
                } else m = t;
                if (((n = (f = s.sh.paths)._length), h)) {
                  for (o = "", a = 0; a < n; a += 1)
                    (l = f.shapes[a]) &&
                      l._length &&
                      (o += buildShapeString(l, l._length, l.c, m));
                  s.caches[p] = o;
                } else o = s.caches[p];
                (s.styles[p].d += !0 === i.hd ? "" : o),
                  (s.styles[p]._mdf = h || s.styles[p]._mdf);
              }
            }
            function r(t, e, i) {
              var s = e.style;
              (e.c._mdf || i) &&
                s.pElem.setAttribute(
                  "fill",
                  "rgb(" +
                    bm_floor(e.c.v[0]) +
                    "," +
                    bm_floor(e.c.v[1]) +
                    "," +
                    bm_floor(e.c.v[2]) +
                    ")"
                ),
                (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v);
            }
            function a(t, e, i) {
              n(t, e, i), o(0, e, i);
            }
            function n(t, e, i) {
              var s,
                r,
                a,
                n,
                o,
                h = e.gf,
                l = e.g._hasOpacity,
                p = e.s.v,
                f = e.e.v;
              if (e.o._mdf || i) {
                var m = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(m, e.o.v);
              }
              if (e.s._mdf || i) {
                var c = 1 === t.t ? "x1" : "cx",
                  d = "x1" === c ? "y1" : "cy";
                h.setAttribute(c, p[0]),
                  h.setAttribute(d, p[1]),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute(c, p[0]), e.of.setAttribute(d, p[1]));
              }
              if (e.g._cmdf || i) {
                s = e.cst;
                var u = e.g.c;
                for (a = s.length, r = 0; r < a; r += 1)
                  (n = s[r]).setAttribute("offset", u[4 * r] + "%"),
                    n.setAttribute(
                      "stop-color",
                      "rgb(" +
                        u[4 * r + 1] +
                        "," +
                        u[4 * r + 2] +
                        "," +
                        u[4 * r + 3] +
                        ")"
                    );
              }
              if (l && (e.g._omdf || i)) {
                var g = e.g.o;
                for (
                  a = (s = e.g._collapsable ? e.cst : e.ost).length, r = 0;
                  r < a;
                  r += 1
                )
                  (n = s[r]),
                    e.g._collapsable ||
                      n.setAttribute("offset", g[2 * r] + "%"),
                    n.setAttribute("stop-opacity", g[2 * r + 1]);
              }
              if (1 === t.t)
                (e.e._mdf || i) &&
                  (h.setAttribute("x2", f[0]),
                  h.setAttribute("y2", f[1]),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("x2", f[0]),
                    e.of.setAttribute("y2", f[1])));
              else if (
                ((e.s._mdf || e.e._mdf || i) &&
                  ((o = Math.sqrt(
                    Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)
                  )),
                  h.setAttribute("r", o),
                  l && !e.g._collapsable && e.of.setAttribute("r", o)),
                e.e._mdf || e.h._mdf || e.a._mdf || i)
              ) {
                o ||
                  (o = Math.sqrt(
                    Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)
                  ));
                var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                  v = o * (e.h.v >= 1 ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v),
                  b = Math.cos(y + e.a.v) * v + p[0],
                  _ = Math.sin(y + e.a.v) * v + p[1];
                h.setAttribute("fx", b),
                  h.setAttribute("fy", _),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("fx", b), e.of.setAttribute("fy", _));
              }
            }
            function o(t, e, i) {
              var s = e.style,
                r = e.d;
              r &&
                (r._mdf || i) &&
                r.dashStr &&
                (s.pElem.setAttribute("stroke-dasharray", r.dashStr),
                s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])),
                e.c &&
                  (e.c._mdf || i) &&
                  s.pElem.setAttribute(
                    "stroke",
                    "rgb(" +
                      bm_floor(e.c.v[0]) +
                      "," +
                      bm_floor(e.c.v[1]) +
                      "," +
                      bm_floor(e.c.v[2]) +
                      ")"
                  ),
                (e.o._mdf || i) &&
                  s.pElem.setAttribute("stroke-opacity", e.o.v),
                (e.w._mdf || i) &&
                  (s.pElem.setAttribute("stroke-width", e.w.v),
                  s.msElem && s.msElem.setAttribute("stroke-width", e.w.v));
            }
            return {
              createRenderFunction: function (t) {
                switch ((t.ty, t.ty)) {
                  case "fl":
                    return r;
                  case "gf":
                    return n;
                  case "gs":
                    return a;
                  case "st":
                    return o;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return s;
                  case "tr":
                    return i;
                }
              },
            };
          })();
          function ShapeTransformManager() {
            (this.sequences = {}),
              (this.sequenceList = []),
              (this.transform_key_count = 0);
          }
          function CVShapeData(t, e, i, s) {
            (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
            var r = 4;
            "rc" == e.ty
              ? (r = 5)
              : "el" == e.ty
              ? (r = 6)
              : "sr" == e.ty && (r = 7),
              (this.sh = ShapePropertyFactory.getShapeProp(t, e, r, t));
            var a,
              n,
              o = i.length;
            for (a = 0; a < o; a += 1)
              i[a].closed ||
                ((n = {
                  transforms: s.addTransformSequence(i[a].transforms),
                  trNodes: [],
                }),
                this.styledShapes.push(n),
                i[a].elements.push(n));
          }
          function BaseElement() {}
          function NullElement(t, e, i) {
            this.initFrame(),
              this.initBaseData(t, e, i),
              this.initFrame(),
              this.initTransform(t, e, i),
              this.initHierarchy();
          }
          function SVGBaseElement() {}
          function IShapeElement() {}
          function ITextElement() {}
          function ICompElement() {}
          function IImageElement(t, e, i) {
            (this.assetData = e.getAssetData(t.refId)),
              this.initElement(t, e, i),
              (this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h,
              });
          }
          function ISolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          function SVGCompElement(t, e, i) {
            (this.layers = t.layers),
              (this.supports3d = !0),
              (this.completeLayers = !1),
              (this.pendingElements = []),
              (this.elements = this.layers
                ? createSizedArray(this.layers.length)
                : []),
              this.initElement(t, e, i),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function SVGTextElement(t, e, i) {
            (this.textSpans = []),
              (this.renderType = "svg"),
              this.initElement(t, e, i);
          }
          function SVGShapeElement(t, e, i) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.shapeModifiers = []),
              (this.itemsData = []),
              (this.processedElements = []),
              (this.animatedContents = []),
              this.initElement(t, e, i),
              (this.prevViewData = []);
          }
          function SVGTintFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            if (
              (i.setAttribute("type", "matrix"),
              i.setAttribute("color-interpolation-filters", "linearRGB"),
              i.setAttribute(
                "values",
                "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
              ),
              i.setAttribute("result", "f1"),
              t.appendChild(i),
              (i = createNS("feColorMatrix")).setAttribute("type", "matrix"),
              i.setAttribute("color-interpolation-filters", "sRGB"),
              i.setAttribute(
                "values",
                "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
              ),
              i.setAttribute("result", "f2"),
              t.appendChild(i),
              (this.matrixFilter = i),
              100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)
            ) {
              var s,
                r = createNS("feMerge");
              t.appendChild(r),
                (s = createNS("feMergeNode")).setAttribute(
                  "in",
                  "SourceGraphic"
                ),
                r.appendChild(s),
                (s = createNS("feMergeNode")).setAttribute("in", "f2"),
                r.appendChild(s);
            }
          }
          function SVGFillFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"),
              i.setAttribute("color-interpolation-filters", "sRGB"),
              i.setAttribute(
                "values",
                "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
              ),
              t.appendChild(i),
              (this.matrixFilter = i);
          }
          function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"),
              t.setAttribute("y", "-100%"),
              t.setAttribute("width", "300%"),
              t.setAttribute("height", "300%"),
              (this.filterManager = e);
            var i = createNS("feGaussianBlur");
            t.appendChild(i), (this.feGaussianBlur = i);
          }
          function SVGStrokeEffect(t, e) {
            (this.initialized = !1),
              (this.filterManager = e),
              (this.elem = t),
              (this.paths = []);
          }
          function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"),
              i.setAttribute("color-interpolation-filters", "linearRGB"),
              i.setAttribute(
                "values",
                "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
              ),
              i.setAttribute("result", "f1"),
              t.appendChild(i);
            var s = createNS("feComponentTransfer");
            s.setAttribute("color-interpolation-filters", "sRGB"),
              t.appendChild(s),
              (this.matrixFilter = s);
            var r = createNS("feFuncR");
            r.setAttribute("type", "table"),
              s.appendChild(r),
              (this.feFuncR = r);
            var a = createNS("feFuncG");
            a.setAttribute("type", "table"),
              s.appendChild(a),
              (this.feFuncG = a);
            var n = createNS("feFuncB");
            n.setAttribute("type", "table"),
              s.appendChild(n),
              (this.feFuncB = n);
          }
          function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var i = this.filterManager.effectElements,
              s = createNS("feComponentTransfer");
            (i[10].p.k ||
              0 !== i[10].p.v ||
              i[11].p.k ||
              1 !== i[11].p.v ||
              i[12].p.k ||
              1 !== i[12].p.v ||
              i[13].p.k ||
              0 !== i[13].p.v ||
              i[14].p.k ||
              1 !== i[14].p.v) &&
              (this.feFuncR = this.createFeFunc("feFuncR", s)),
              (i[17].p.k ||
                0 !== i[17].p.v ||
                i[18].p.k ||
                1 !== i[18].p.v ||
                i[19].p.k ||
                1 !== i[19].p.v ||
                i[20].p.k ||
                0 !== i[20].p.v ||
                i[21].p.k ||
                1 !== i[21].p.v) &&
                (this.feFuncG = this.createFeFunc("feFuncG", s)),
              (i[24].p.k ||
                0 !== i[24].p.v ||
                i[25].p.k ||
                1 !== i[25].p.v ||
                i[26].p.k ||
                1 !== i[26].p.v ||
                i[27].p.k ||
                0 !== i[27].p.v ||
                i[28].p.k ||
                1 !== i[28].p.v) &&
                (this.feFuncB = this.createFeFunc("feFuncB", s)),
              (i[31].p.k ||
                0 !== i[31].p.v ||
                i[32].p.k ||
                1 !== i[32].p.v ||
                i[33].p.k ||
                1 !== i[33].p.v ||
                i[34].p.k ||
                0 !== i[34].p.v ||
                i[35].p.k ||
                1 !== i[35].p.v) &&
                (this.feFuncA = this.createFeFunc("feFuncA", s)),
              (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
                (s.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(s),
                (s = createNS("feComponentTransfer"))),
              (i[3].p.k ||
                0 !== i[3].p.v ||
                i[4].p.k ||
                1 !== i[4].p.v ||
                i[5].p.k ||
                1 !== i[5].p.v ||
                i[6].p.k ||
                0 !== i[6].p.v ||
                i[7].p.k ||
                1 !== i[7].p.v) &&
                (s.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(s),
                (this.feFuncRComposed = this.createFeFunc("feFuncR", s)),
                (this.feFuncGComposed = this.createFeFunc("feFuncG", s)),
                (this.feFuncBComposed = this.createFeFunc("feFuncB", s)));
          }
          function SVGDropShadowEffect(t, e) {
            var i = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", i.x),
              t.setAttribute("y", i.y),
              t.setAttribute("width", i.width),
              t.setAttribute("height", i.height),
              (this.filterManager = e);
            var s = createNS("feGaussianBlur");
            s.setAttribute("in", "SourceAlpha"),
              s.setAttribute("result", "drop_shadow_1"),
              s.setAttribute("stdDeviation", "0"),
              (this.feGaussianBlur = s),
              t.appendChild(s);
            var r = createNS("feOffset");
            r.setAttribute("dx", "25"),
              r.setAttribute("dy", "0"),
              r.setAttribute("in", "drop_shadow_1"),
              r.setAttribute("result", "drop_shadow_2"),
              (this.feOffset = r),
              t.appendChild(r);
            var a = createNS("feFlood");
            a.setAttribute("flood-color", "#00ff00"),
              a.setAttribute("flood-opacity", "1"),
              a.setAttribute("result", "drop_shadow_3"),
              (this.feFlood = a),
              t.appendChild(a);
            var n = createNS("feComposite");
            n.setAttribute("in", "drop_shadow_3"),
              n.setAttribute("in2", "drop_shadow_2"),
              n.setAttribute("operator", "in"),
              n.setAttribute("result", "drop_shadow_4"),
              t.appendChild(n);
            var o,
              h = createNS("feMerge");
            t.appendChild(h),
              (o = createNS("feMergeNode")),
              h.appendChild(o),
              (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
              (this.feMergeNode = o),
              (this.feMerge = h),
              (this.originalNodeAdded = !1),
              h.appendChild(o);
          }
          (ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
              var e,
                i = t.length,
                s = "_";
              for (e = 0; e < i; e += 1) s += t[e].transform.key + "_";
              var r = this.sequences[s];
              return (
                r ||
                  ((r = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix(),
                    _mdf: !1,
                  }),
                  (this.sequences[s] = r),
                  this.sequenceList.push(r)),
                r
              );
            },
            processSequence: function (t, e) {
              for (
                var i, s = 0, r = t.transforms.length, a = e;
                s < r && !e;

              ) {
                if (t.transforms[s].transform.mProps._mdf) {
                  a = !0;
                  break;
                }
                s += 1;
              }
              if (a)
                for (t.finalTransform.reset(), s = r - 1; s >= 0; s -= 1)
                  (i = t.transforms[s].transform.mProps.v.props),
                    t.finalTransform.transform(
                      i[0],
                      i[1],
                      i[2],
                      i[3],
                      i[4],
                      i[5],
                      i[6],
                      i[7],
                      i[8],
                      i[9],
                      i[10],
                      i[11],
                      i[12],
                      i[13],
                      i[14],
                      i[15]
                    );
              t._mdf = a;
            },
            processSequences: function (t) {
              var e,
                i = this.sequenceList.length;
              for (e = 0; e < i; e += 1)
                this.processSequence(this.sequenceList[e], t);
            },
            getNewKey: function () {
              return "_" + this.transform_key_count++;
            },
          }),
            (CVShapeData.prototype.setAsAnimated =
              SVGShapeData.prototype.setAsAnimated),
            (BaseElement.prototype = {
              checkMasks: function () {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                  if (
                    "n" !== this.data.masksProperties[t].mode &&
                    !1 !== this.data.masksProperties[t].cl
                  )
                    return !0;
                  t += 1;
                }
                return !1;
              },
              initExpressions: function () {
                (this.layerInterface = LayerExpressionInterface(this)),
                  this.data.hasMask &&
                    this.maskManager &&
                    this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(
                  this,
                  this.layerInterface
                );
                this.layerInterface.registerEffectsInterface(t),
                  0 === this.data.ty || this.data.xt
                    ? (this.compInterface = CompExpressionInterface(this))
                    : 4 === this.data.ty
                    ? ((this.layerInterface.shapeInterface =
                        ShapeExpressionInterface(
                          this.shapesData,
                          this.itemsData,
                          this.layerInterface
                        )),
                      (this.layerInterface.content =
                        this.layerInterface.shapeInterface))
                    : 5 === this.data.ty &&
                      ((this.layerInterface.textInterface =
                        TextExpressionInterface(this)),
                      (this.layerInterface.text =
                        this.layerInterface.textInterface));
              },
              setBlendMode: function () {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style[
                  "mix-blend-mode"
                ] = t;
              },
              initBaseData: function (t, e, i) {
                (this.globalData = e),
                  (this.comp = i),
                  (this.data = t),
                  (this.layerId = createElementID()),
                  this.data.sr || (this.data.sr = 1),
                  (this.effectsManager = new EffectsManager(
                    this.data,
                    this,
                    this.dynamicProperties
                  ));
              },
              getType: function () {
                return this.type;
              },
              sourceRectAtTime: function () {},
            }),
            (NullElement.prototype.prepareFrame = function (t) {
              this.prepareProperties(t, !0);
            }),
            (NullElement.prototype.renderFrame = function () {}),
            (NullElement.prototype.getBaseElement = function () {
              return null;
            }),
            (NullElement.prototype.destroy = function () {}),
            (NullElement.prototype.sourceRectAtTime = function () {}),
            (NullElement.prototype.hide = function () {}),
            extendPrototype(
              [BaseElement, TransformElement, HierarchyElement, FrameElement],
              NullElement
            ),
            (SVGBaseElement.prototype = {
              initRendererElement: function () {
                this.layerElement = createNS("g");
              },
              createContainerElements: function () {
                (this.matteElement = createNS("g")),
                  (this.transformedElement = this.layerElement),
                  (this.maskedElement = this.layerElement),
                  (this._sizeChanged = !1);
                var t,
                  e,
                  i,
                  s = null;
                if (this.data.td) {
                  if (3 == this.data.td || 1 == this.data.td) {
                    var r = createNS("mask");
                    r.setAttribute("id", this.layerId),
                      r.setAttribute(
                        "mask-type",
                        3 == this.data.td ? "luminance" : "alpha"
                      ),
                      r.appendChild(this.layerElement),
                      (s = r),
                      this.globalData.defs.appendChild(r),
                      featureSupport.maskType ||
                        1 != this.data.td ||
                        (r.setAttribute("mask-type", "luminance"),
                        (t = createElementID()),
                        (e = filtersFactory.createFilter(t)),
                        this.globalData.defs.appendChild(e),
                        e.appendChild(
                          filtersFactory.createAlphaToLuminanceFilter()
                        ),
                        (i = createNS("g")).appendChild(this.layerElement),
                        (s = i),
                        r.appendChild(i),
                        i.setAttribute(
                          "filter",
                          "url(" + locationHref + "#" + t + ")"
                        ));
                  } else if (2 == this.data.td) {
                    var a = createNS("mask");
                    a.setAttribute("id", this.layerId),
                      a.setAttribute("mask-type", "alpha");
                    var n = createNS("g");
                    a.appendChild(n),
                      (t = createElementID()),
                      (e = filtersFactory.createFilter(t));
                    var o = createNS("feComponentTransfer");
                    o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                    var h = createNS("feFuncA");
                    h.setAttribute("type", "table"),
                      h.setAttribute("tableValues", "1.0 0.0"),
                      o.appendChild(h),
                      this.globalData.defs.appendChild(e);
                    var l = createNS("rect");
                    l.setAttribute("width", this.comp.data.w),
                      l.setAttribute("height", this.comp.data.h),
                      l.setAttribute("x", "0"),
                      l.setAttribute("y", "0"),
                      l.setAttribute("fill", "#ffffff"),
                      l.setAttribute("opacity", "0"),
                      n.setAttribute(
                        "filter",
                        "url(" + locationHref + "#" + t + ")"
                      ),
                      n.appendChild(l),
                      n.appendChild(this.layerElement),
                      (s = n),
                      featureSupport.maskType ||
                        (a.setAttribute("mask-type", "luminance"),
                        e.appendChild(
                          filtersFactory.createAlphaToLuminanceFilter()
                        ),
                        (i = createNS("g")),
                        n.appendChild(l),
                        i.appendChild(this.layerElement),
                        (s = i),
                        n.appendChild(i)),
                      this.globalData.defs.appendChild(a);
                  }
                } else
                  this.data.tt
                    ? (this.matteElement.appendChild(this.layerElement),
                      (s = this.matteElement),
                      (this.baseElement = this.matteElement))
                    : (this.baseElement = this.layerElement);
                if (
                  (this.data.ln &&
                    this.layerElement.setAttribute("id", this.data.ln),
                  this.data.cl &&
                    this.layerElement.setAttribute("class", this.data.cl),
                  0 === this.data.ty && !this.data.hd)
                ) {
                  var p = createNS("clipPath"),
                    f = createNS("path");
                  f.setAttribute(
                    "d",
                    "M0,0 L" +
                      this.data.w +
                      ",0 L" +
                      this.data.w +
                      "," +
                      this.data.h +
                      " L0," +
                      this.data.h +
                      "z"
                  );
                  var m = createElementID();
                  if (
                    (p.setAttribute("id", m),
                    p.appendChild(f),
                    this.globalData.defs.appendChild(p),
                    this.checkMasks())
                  ) {
                    var c = createNS("g");
                    c.setAttribute(
                      "clip-path",
                      "url(" + locationHref + "#" + m + ")"
                    ),
                      c.appendChild(this.layerElement),
                      (this.transformedElement = c),
                      s
                        ? s.appendChild(this.transformedElement)
                        : (this.baseElement = this.transformedElement);
                  } else
                    this.layerElement.setAttribute(
                      "clip-path",
                      "url(" + locationHref + "#" + m + ")"
                    );
                }
                0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function () {
                this.finalTransform._matMdf &&
                  this.transformedElement.setAttribute(
                    "transform",
                    this.finalTransform.mat.to2dCSS()
                  ),
                  this.finalTransform._opMdf &&
                    this.transformedElement.setAttribute(
                      "opacity",
                      this.finalTransform.mProp.o.v
                    );
              },
              destroyBaseElement: function () {
                (this.layerElement = null),
                  (this.matteElement = null),
                  this.maskManager.destroy();
              },
              getBaseElement: function () {
                return this.data.hd ? null : this.baseElement;
              },
              createRenderableComponents: function () {
                (this.maskManager = new MaskElement(
                  this.data,
                  this,
                  this.globalData
                )),
                  (this.renderableEffectsManager = new SVGEffects(this));
              },
              setMatte: function (t) {
                this.matteElement &&
                  this.matteElement.setAttribute(
                    "mask",
                    "url(" + locationHref + "#" + t + ")"
                  );
              },
            }),
            (IShapeElement.prototype = {
              addShapeToModifiers: function (t) {
                var e,
                  i = this.shapeModifiers.length;
                for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t);
              },
              isShapeInAnimatedModifiers: function (t) {
                for (var e = this.shapeModifiers.length; 0 < e; )
                  if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1;
              },
              renderModifiers: function () {
                if (this.shapeModifiers.length) {
                  var t,
                    e = this.shapes.length;
                  for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                  for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1)
                    this.shapeModifiers[t].processShapes(this._isFirstFrame);
                }
              },
              lcEnum: { 1: "butt", 2: "round", 3: "square" },
              ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
              searchProcessedElement: function (t) {
                for (
                  var e = this.processedElements, i = 0, s = e.length;
                  i < s;

                ) {
                  if (e[i].elem === t) return e[i].pos;
                  i += 1;
                }
                return 0;
              },
              addProcessedElement: function (t, e) {
                for (var i = this.processedElements, s = i.length; s; )
                  if (i[(s -= 1)].elem === t) return void (i[s].pos = e);
                i.push(new ProcessedElement(t, e));
              },
              prepareFrame: function (t) {
                this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange);
              },
            }),
            (ITextElement.prototype.initElement = function (t, e, i) {
              (this.lettersChangedFlag = !0),
                this.initFrame(),
                this.initBaseData(t, e, i),
                (this.textProperty = new TextProperty(
                  this,
                  t.t,
                  this.dynamicProperties
                )),
                (this.textAnimator = new TextAnimatorProperty(
                  t.t,
                  this.renderType,
                  this
                )),
                this.initTransform(t, e, i),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties);
            }),
            (ITextElement.prototype.prepareFrame = function (t) {
              (this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                  (this.buildNewText(),
                  (this.textProperty._isFirstFrame = !1),
                  (this.textProperty._mdf = !1));
            }),
            (ITextElement.prototype.createPathShape = function (t, e) {
              var i,
                s,
                r = e.length,
                a = "";
              for (i = 0; i < r; i += 1)
                (s = e[i].ks.k), (a += buildShapeString(s, s.i.length, !0, t));
              return a;
            }),
            (ITextElement.prototype.updateDocumentData = function (t, e) {
              this.textProperty.updateDocumentData(t, e);
            }),
            (ITextElement.prototype.canResizeFont = function (t) {
              this.textProperty.canResizeFont(t);
            }),
            (ITextElement.prototype.setMinimumFontSize = function (t) {
              this.textProperty.setMinimumFontSize(t);
            }),
            (ITextElement.prototype.applyTextPropertiesToMatrix = function (
              t,
              e,
              i,
              s,
              r
            ) {
              switch (
                (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                e.translate(0, -t.ls, 0),
                t.j)
              ) {
                case 1:
                  e.translate(
                    t.justifyOffset + (t.boxWidth - t.lineWidths[i]),
                    0,
                    0
                  );
                  break;
                case 2:
                  e.translate(
                    t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2,
                    0,
                    0
                  );
              }
              e.translate(s, r, 0);
            }),
            (ITextElement.prototype.buildColor = function (t) {
              return (
                "rgb(" +
                Math.round(255 * t[0]) +
                "," +
                Math.round(255 * t[1]) +
                "," +
                Math.round(255 * t[2]) +
                ")"
              );
            }),
            (ITextElement.prototype.emptyProp = new LetterProps()),
            (ITextElement.prototype.destroy = function () {}),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              ICompElement
            ),
            (ICompElement.prototype.initElement = function (t, e, i) {
              this.initFrame(),
                this.initBaseData(t, e, i),
                this.initTransform(t, e, i),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
                this.hide();
            }),
            (ICompElement.prototype.prepareFrame = function (t) {
              if (
                ((this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.isInRange || this.data.xt)
              ) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                  var e = this.tm.v;
                  e === this.data.op && (e = this.data.op - 1),
                    (this.renderedFrame = e);
                }
                var i,
                  s = this.elements.length;
                for (
                  this.completeLayers || this.checkLayers(this.renderedFrame),
                    i = s - 1;
                  i >= 0;
                  i -= 1
                )
                  (this.completeLayers || this.elements[i]) &&
                    (this.elements[i].prepareFrame(
                      this.renderedFrame - this.layers[i].st
                    ),
                    this.elements[i]._mdf && (this._mdf = !0));
              }
            }),
            (ICompElement.prototype.renderInnerContent = function () {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1)
                (this.completeLayers || this.elements[t]) &&
                  this.elements[t].renderFrame();
            }),
            (ICompElement.prototype.setElements = function (t) {
              this.elements = t;
            }),
            (ICompElement.prototype.getElements = function () {
              return this.elements;
            }),
            (ICompElement.prototype.destroyElements = function () {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy();
            }),
            (ICompElement.prototype.destroy = function () {
              this.destroyElements(), this.destroyBaseElement();
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              IImageElement
            ),
            (IImageElement.prototype.createContent = function () {
              var t = this.globalData.getAssetsPath(this.assetData);
              (this.innerElem = createNS("image")),
                this.innerElem.setAttribute("width", this.assetData.w + "px"),
                this.innerElem.setAttribute("height", this.assetData.h + "px"),
                this.innerElem.setAttribute(
                  "preserveAspectRatio",
                  this.assetData.pr ||
                    this.globalData.renderConfig.imagePreserveAspectRatio
                ),
                this.innerElem.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  t
                ),
                this.layerElement.appendChild(this.innerElem);
            }),
            (IImageElement.prototype.sourceRectAtTime = function () {
              return this.sourceRect;
            }),
            extendPrototype([IImageElement], ISolidElement),
            (ISolidElement.prototype.createContent = function () {
              var t = createNS("rect");
              t.setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [SVGRenderer, ICompElement, SVGBaseElement],
              SVGCompElement
            ),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement,
              ],
              SVGTextElement
            ),
            (SVGTextElement.prototype.createContent = function () {
              this.data.singleShape &&
                !this.globalData.fontManager.chars &&
                (this.textContainer = createNS("text"));
            }),
            (SVGTextElement.prototype.buildTextContents = function (t) {
              for (var e = 0, i = t.length, s = [], r = ""; e < i; )
                t[e] === String.fromCharCode(13) ||
                t[e] === String.fromCharCode(3)
                  ? (s.push(r), (r = ""))
                  : (r += t[e]),
                  (e += 1);
              return s.push(r), s;
            }),
            (SVGTextElement.prototype.buildNewText = function () {
              var t,
                e,
                i = this.textProperty.currentData;
              (this.renderedLetters = createSizedArray(i ? i.l.length : 0)),
                i.fc
                  ? this.layerElement.setAttribute(
                      "fill",
                      this.buildColor(i.fc)
                    )
                  : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                i.sc &&
                  (this.layerElement.setAttribute(
                    "stroke",
                    this.buildColor(i.sc)
                  ),
                  this.layerElement.setAttribute("stroke-width", i.sw)),
                this.layerElement.setAttribute("font-size", i.finalSize);
              var s = this.globalData.fontManager.getFontByName(i.f);
              if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
              else {
                this.layerElement.setAttribute("font-family", s.fFamily);
                var r = i.fWeight,
                  a = i.fStyle;
                this.layerElement.setAttribute("font-style", a),
                  this.layerElement.setAttribute("font-weight", r);
              }
              this.layerElement.setAttribute("aria-label", i.t);
              var n,
                o = i.l || [],
                h = !!this.globalData.fontManager.chars;
              e = o.length;
              var l,
                p = this.mHelper,
                f = "",
                m = this.data.singleShape,
                c = 0,
                d = 0,
                u = !0,
                g = (i.tr / 1e3) * i.finalSize;
              if (!m || h || i.sz) {
                var y,
                  v,
                  b = this.textSpans.length;
                for (t = 0; t < e; t += 1)
                  (h && m && 0 !== t) ||
                    ((n =
                      b > t
                        ? this.textSpans[t]
                        : createNS(h ? "path" : "text")),
                    b <= t &&
                      (n.setAttribute("stroke-linecap", "butt"),
                      n.setAttribute("stroke-linejoin", "round"),
                      n.setAttribute("stroke-miterlimit", "4"),
                      (this.textSpans[t] = n),
                      this.layerElement.appendChild(n)),
                    (n.style.display = "inherit")),
                    p.reset(),
                    p.scale(i.finalSize / 100, i.finalSize / 100),
                    m &&
                      (o[t].n &&
                        ((c = -g),
                        (d += i.yOffset),
                        (d += u ? 1 : 0),
                        (u = !1)),
                      this.applyTextPropertiesToMatrix(i, p, o[t].line, c, d),
                      (c += o[t].l || 0),
                      (c += g)),
                    h
                      ? ((l = (y =
                          ((v = this.globalData.fontManager.getCharData(
                            i.finalText[t],
                            s.fStyle,
                            this.globalData.fontManager.getFontByName(i.f)
                              .fFamily
                          )) &&
                            v.data) ||
                          {}).shapes
                          ? y.shapes[0].it
                          : []),
                        m
                          ? (f += this.createPathShape(p, l))
                          : n.setAttribute("d", this.createPathShape(p, l)))
                      : (m &&
                          n.setAttribute(
                            "transform",
                            "translate(" + p.props[12] + "," + p.props[13] + ")"
                          ),
                        (n.textContent = o[t].val),
                        n.setAttributeNS(
                          "http://www.w3.org/XML/1998/namespace",
                          "xml:space",
                          "preserve"
                        ));
                m && n && n.setAttribute("d", f);
              } else {
                var _ = this.textContainer,
                  x = "start";
                switch (i.j) {
                  case 1:
                    x = "end";
                    break;
                  case 2:
                    x = "middle";
                }
                _.setAttribute("text-anchor", x),
                  _.setAttribute("letter-spacing", g);
                var E = this.buildTextContents(i.finalText);
                for (
                  e = E.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0;
                  t < e;
                  t += 1
                )
                  ((n = this.textSpans[t] || createNS("tspan")).textContent =
                    E[t]),
                    n.setAttribute("x", 0),
                    n.setAttribute("y", d),
                    (n.style.display = "inherit"),
                    _.appendChild(n),
                    (this.textSpans[t] = n),
                    (d += i.finalLineHeight);
                this.layerElement.appendChild(_);
              }
              for (; t < this.textSpans.length; )
                (this.textSpans[t].style.display = "none"), (t += 1);
              this._sizeChanged = !0;
            }),
            (SVGTextElement.prototype.sourceRectAtTime = function (t) {
              if (
                (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                this.renderInnerContent(),
                this._sizeChanged)
              ) {
                this._sizeChanged = !1;
                var e = this.layerElement.getBBox();
                this.bbox = {
                  top: e.y,
                  left: e.x,
                  width: e.width,
                  height: e.height,
                };
              }
              return this.bbox;
            }),
            (SVGTextElement.prototype.renderInnerContent = function () {
              if (
                !this.data.singleShape &&
                (this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag
                ),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
              ) {
                var t, e;
                this._sizeChanged = !0;
                var i,
                  s,
                  r = this.textAnimator.renderedLetters,
                  a = this.textProperty.currentData.l;
                for (e = a.length, t = 0; t < e; t += 1)
                  a[t].n ||
                    ((i = r[t]),
                    (s = this.textSpans[t]),
                    i._mdf.m && s.setAttribute("transform", i.m),
                    i._mdf.o && s.setAttribute("opacity", i.o),
                    i._mdf.sw && s.setAttribute("stroke-width", i.sw),
                    i._mdf.sc && s.setAttribute("stroke", i.sc),
                    i._mdf.fc && s.setAttribute("fill", i.fc));
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              SVGShapeElement
            ),
            (SVGShapeElement.prototype.initSecondaryElement = function () {}),
            (SVGShapeElement.prototype.identityMatrix = new Matrix()),
            (SVGShapeElement.prototype.buildExpressionInterface =
              function () {}),
            (SVGShapeElement.prototype.createContent = function () {
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                !0
              ),
                this.filterUniqueShapes();
            }),
            (SVGShapeElement.prototype.filterUniqueShapes = function () {
              var t,
                e,
                i,
                s,
                r = this.shapes.length,
                a = this.stylesList.length,
                n = [],
                o = !1;
              for (i = 0; i < a; i += 1) {
                for (
                  s = this.stylesList[i], o = !1, n.length = 0, t = 0;
                  t < r;
                  t += 1
                )
                  -1 !== (e = this.shapes[t]).styles.indexOf(s) &&
                    (n.push(e), (o = e._isAnimated || o));
                n.length > 1 && o && this.setShapesAsAnimated(n);
              }
            }),
            (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1) t[e].setAsAnimated();
            }),
            (SVGShapeElement.prototype.createStyleElement = function (t, e) {
              var i,
                s = new SVGStyleData(t, e),
                r = s.pElem;
              return (
                "st" === t.ty
                  ? (i = new SVGStrokeStyleData(this, t, s))
                  : "fl" === t.ty
                  ? (i = new SVGFillStyleData(this, t, s))
                  : ("gf" !== t.ty && "gs" !== t.ty) ||
                    ((i = new (
                      "gf" === t.ty
                        ? SVGGradientFillStyleData
                        : SVGGradientStrokeStyleData
                    )(this, t, s)),
                    this.globalData.defs.appendChild(i.gf),
                    i.maskId &&
                      (this.globalData.defs.appendChild(i.ms),
                      this.globalData.defs.appendChild(i.of),
                      r.setAttribute(
                        "mask",
                        "url(" + locationHref + "#" + i.maskId + ")"
                      ))),
                ("st" !== t.ty && "gs" !== t.ty) ||
                  (r.setAttribute(
                    "stroke-linecap",
                    this.lcEnum[t.lc] || "round"
                  ),
                  r.setAttribute(
                    "stroke-linejoin",
                    this.ljEnum[t.lj] || "round"
                  ),
                  r.setAttribute("fill-opacity", "0"),
                  1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)),
                2 === t.r && r.setAttribute("fill-rule", "evenodd"),
                t.ln && r.setAttribute("id", t.ln),
                t.cl && r.setAttribute("class", t.cl),
                t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)),
                this.stylesList.push(s),
                this.addToAnimatedContents(t, i),
                i
              );
            }),
            (SVGShapeElement.prototype.createGroupElement = function (t) {
              var e = new ShapeGroupData();
              return (
                t.ln && e.gr.setAttribute("id", t.ln),
                t.cl && e.gr.setAttribute("class", t.cl),
                t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
                e
              );
            }),
            (SVGShapeElement.prototype.createTransformElement = function (
              t,
              e
            ) {
              var i = TransformPropertyFactory.getTransformProperty(
                  this,
                  t,
                  this
                ),
                s = new SVGTransformData(i, i.o, e);
              return this.addToAnimatedContents(t, s), s;
            }),
            (SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
              var s = 4;
              "rc" === t.ty
                ? (s = 5)
                : "el" === t.ty
                ? (s = 6)
                : "sr" === t.ty && (s = 7);
              var r = new SVGShapeData(
                e,
                i,
                ShapePropertyFactory.getShapeProp(this, t, s, this)
              );
              return (
                this.shapes.push(r),
                this.addShapeToModifiers(r),
                this.addToAnimatedContents(t, r),
                r
              );
            }),
            (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
              for (var i = 0, s = this.animatedContents.length; i < s; ) {
                if (this.animatedContents[i].element === e) return;
                i += 1;
              }
              this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t,
              });
            }),
            (SVGShapeElement.prototype.setElementStyles = function (t) {
              var e,
                i = t.styles,
                s = this.stylesList.length;
              for (e = 0; e < s; e += 1)
                this.stylesList[e].closed || i.push(this.stylesList[e]);
            }),
            (SVGShapeElement.prototype.reloadShapes = function () {
              this._isFirstFrame = !0;
              var t,
                e = this.itemsData.length;
              for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
              for (
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  this.layerElement,
                  0,
                  [],
                  !0
                ),
                  this.filterUniqueShapes(),
                  e = this.dynamicProperties.length,
                  t = 0;
                t < e;
                t += 1
              )
                this.dynamicProperties[t].getValue();
              this.renderModifiers();
            }),
            (SVGShapeElement.prototype.searchShapes = function (
              t,
              e,
              i,
              s,
              r,
              a,
              n
            ) {
              var o,
                h,
                l,
                p,
                f,
                m,
                c = [].concat(a),
                d = t.length - 1,
                u = [],
                g = [];
              for (o = d; o >= 0; o -= 1) {
                if (
                  ((m = this.searchProcessedElement(t[o]))
                    ? (e[o] = i[m - 1])
                    : (t[o]._render = n),
                  "fl" == t[o].ty ||
                    "st" == t[o].ty ||
                    "gf" == t[o].ty ||
                    "gs" == t[o].ty)
                )
                  m
                    ? (e[o].style.closed = !1)
                    : (e[o] = this.createStyleElement(t[o], r)),
                    t[o]._render && s.appendChild(e[o].style.pElem),
                    u.push(e[o].style);
                else if ("gr" == t[o].ty) {
                  if (m)
                    for (l = e[o].it.length, h = 0; h < l; h += 1)
                      e[o].prevViewData[h] = e[o].it[h];
                  else e[o] = this.createGroupElement(t[o]);
                  this.searchShapes(
                    t[o].it,
                    e[o].it,
                    e[o].prevViewData,
                    e[o].gr,
                    r + 1,
                    c,
                    n
                  ),
                    t[o]._render && s.appendChild(e[o].gr);
                } else
                  "tr" == t[o].ty
                    ? (m || (e[o] = this.createTransformElement(t[o], s)),
                      (p = e[o].transform),
                      c.push(p))
                    : "sh" == t[o].ty ||
                      "rc" == t[o].ty ||
                      "el" == t[o].ty ||
                      "sr" == t[o].ty
                    ? (m || (e[o] = this.createShapeElement(t[o], c, r)),
                      this.setElementStyles(e[o]))
                    : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty
                    ? (m
                        ? ((f = e[o]).closed = !1)
                        : ((f = ShapeModifiers.getModifier(t[o].ty)).init(
                            this,
                            t[o]
                          ),
                          (e[o] = f),
                          this.shapeModifiers.push(f)),
                      g.push(f))
                    : "rp" == t[o].ty &&
                      (m
                        ? ((f = e[o]).closed = !0)
                        : ((f = ShapeModifiers.getModifier(t[o].ty)),
                          (e[o] = f),
                          f.init(this, t, o, e),
                          this.shapeModifiers.push(f),
                          (n = !1)),
                      g.push(f));
                this.addProcessedElement(t[o], o + 1);
              }
              for (d = u.length, o = 0; o < d; o += 1) u[o].closed = !0;
              for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0;
            }),
            (SVGShapeElement.prototype.renderInnerContent = function () {
              this.renderModifiers();
              var t,
                e = this.stylesList.length;
              for (t = 0; t < e; t += 1) this.stylesList[t].reset();
              for (this.renderShape(), t = 0; t < e; t += 1)
                (this.stylesList[t]._mdf || this._isFirstFrame) &&
                  (this.stylesList[t].msElem &&
                    (this.stylesList[t].msElem.setAttribute(
                      "d",
                      this.stylesList[t].d
                    ),
                    (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
                  this.stylesList[t].pElem.setAttribute(
                    "d",
                    this.stylesList[t].d || "M0 0"
                  ));
            }),
            (SVGShapeElement.prototype.renderShape = function () {
              var t,
                e,
                i = this.animatedContents.length;
              for (t = 0; t < i; t += 1)
                (e = this.animatedContents[t]),
                  (this._isFirstFrame || e.element._isAnimated) &&
                    !0 !== e.data &&
                    e.fn(e.data, e.element, this._isFirstFrame);
            }),
            (SVGShapeElement.prototype.destroy = function () {
              this.destroyBaseElement(),
                (this.shapesData = null),
                (this.itemsData = null);
            }),
            (SVGTintFilter.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                  i = this.filterManager.effectElements[1].p.v,
                  s = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute(
                  "values",
                  i[0] -
                    e[0] +
                    " 0 0 0 " +
                    e[0] +
                    " " +
                    (i[1] - e[1]) +
                    " 0 0 0 " +
                    e[1] +
                    " " +
                    (i[2] - e[2]) +
                    " 0 0 0 " +
                    e[2] +
                    " 0 0 0 " +
                    s +
                    " 0"
                );
              }
            }),
            (SVGFillFilter.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                  i = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute(
                  "values",
                  "0 0 0 0 " +
                    e[0] +
                    " 0 0 0 0 " +
                    e[1] +
                    " 0 0 0 0 " +
                    e[2] +
                    " 0 0 0 " +
                    i +
                    " 0"
                );
              }
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e = 0.3 * this.filterManager.effectElements[0].p.v,
                  i = this.filterManager.effectElements[1].p.v,
                  s = 3 == i ? 0 : e,
                  r = 2 == i ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", s + " " + r);
                var a =
                  1 == this.filterManager.effectElements[2].p.v
                    ? "wrap"
                    : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", a);
              }
            }),
            (SVGStrokeEffect.prototype.initialize = function () {
              var t,
                e,
                i,
                s,
                r =
                  this.elem.layerElement.children ||
                  this.elem.layerElement.childNodes;
              for (
                1 === this.filterManager.effectElements[1].p.v
                  ? ((s = this.elem.maskManager.masksProperties.length),
                    (i = 0))
                  : (s =
                      1 + (i = this.filterManager.effectElements[0].p.v - 1)),
                  (e = createNS("g")).setAttribute("fill", "none"),
                  e.setAttribute("stroke-linecap", "round"),
                  e.setAttribute("stroke-dashoffset", 1);
                i < s;
                i += 1
              )
                (t = createNS("path")),
                  e.appendChild(t),
                  this.paths.push({ p: t, m: i });
              if (3 === this.filterManager.effectElements[10].p.v) {
                var a = createNS("mask"),
                  n = createElementID();
                a.setAttribute("id", n),
                  a.setAttribute("mask-type", "alpha"),
                  a.appendChild(e),
                  this.elem.globalData.defs.appendChild(a);
                var o = createNS("g");
                for (
                  o.setAttribute("mask", "url(" + locationHref + "#" + n + ")");
                  r[0];

                )
                  o.appendChild(r[0]);
                this.elem.layerElement.appendChild(o),
                  (this.masker = a),
                  e.setAttribute("stroke", "#fff");
              } else if (
                1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v
              ) {
                if (2 === this.filterManager.effectElements[10].p.v)
                  for (
                    r =
                      this.elem.layerElement.children ||
                      this.elem.layerElement.childNodes;
                    r.length;

                  )
                    this.elem.layerElement.removeChild(r[0]);
                this.elem.layerElement.appendChild(e),
                  this.elem.layerElement.removeAttribute("mask"),
                  e.setAttribute("stroke", "#fff");
              }
              (this.initialized = !0), (this.pathMasker = e);
            }),
            (SVGStrokeEffect.prototype.renderFrame = function (t) {
              this.initialized || this.initialize();
              var e,
                i,
                s,
                r = this.paths.length;
              for (e = 0; e < r; e += 1)
                if (
                  -1 !== this.paths[e].m &&
                  ((i = this.elem.maskManager.viewData[this.paths[e].m]),
                  (s = this.paths[e].p),
                  (t || this.filterManager._mdf || i.prop._mdf) &&
                    s.setAttribute("d", i.lastPath),
                  t ||
                    this.filterManager.effectElements[9].p._mdf ||
                    this.filterManager.effectElements[4].p._mdf ||
                    this.filterManager.effectElements[7].p._mdf ||
                    this.filterManager.effectElements[8].p._mdf ||
                    i.prop._mdf)
                ) {
                  var a;
                  if (
                    0 !== this.filterManager.effectElements[7].p.v ||
                    100 !== this.filterManager.effectElements[8].p.v
                  ) {
                    var n =
                        Math.min(
                          this.filterManager.effectElements[7].p.v,
                          this.filterManager.effectElements[8].p.v
                        ) / 100,
                      o =
                        Math.max(
                          this.filterManager.effectElements[7].p.v,
                          this.filterManager.effectElements[8].p.v
                        ) / 100,
                      h = s.getTotalLength();
                    a = "0 0 0 " + h * n + " ";
                    var l,
                      p = h * (o - n),
                      f =
                        1 +
                        (2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v) /
                          100,
                      m = Math.floor(p / f);
                    for (l = 0; l < m; l += 1)
                      a +=
                        "1 " +
                        (2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v) /
                          100 +
                        " ";
                    a += "0 " + 10 * h + " 0 0";
                  } else
                    a =
                      "1 " +
                      (2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v) /
                        100;
                  s.setAttribute("stroke-dasharray", a);
                }
              if (
                ((t || this.filterManager.effectElements[4].p._mdf) &&
                  this.pathMasker.setAttribute(
                    "stroke-width",
                    2 * this.filterManager.effectElements[4].p.v
                  ),
                (t || this.filterManager.effectElements[6].p._mdf) &&
                  this.pathMasker.setAttribute(
                    "opacity",
                    this.filterManager.effectElements[6].p.v
                  ),
                (1 === this.filterManager.effectElements[10].p.v ||
                  2 === this.filterManager.effectElements[10].p.v) &&
                  (t || this.filterManager.effectElements[3].p._mdf))
              ) {
                var c = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute(
                  "stroke",
                  "rgb(" +
                    bm_floor(255 * c[0]) +
                    "," +
                    bm_floor(255 * c[1]) +
                    "," +
                    bm_floor(255 * c[2]) +
                    ")"
                );
              }
            }),
            (SVGTritoneFilter.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                  i = this.filterManager.effectElements[1].p.v,
                  s = this.filterManager.effectElements[2].p.v,
                  r = s[0] + " " + i[0] + " " + e[0],
                  a = s[1] + " " + i[1] + " " + e[1],
                  n = s[2] + " " + i[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", r),
                  this.feFuncG.setAttribute("tableValues", a),
                  this.feFuncB.setAttribute("tableValues", n);
              }
            }),
            (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
              var i = createNS(t);
              return i.setAttribute("type", "table"), e.appendChild(i), i;
            }),
            (SVGProLevelsFilter.prototype.getTableValue = function (
              t,
              e,
              i,
              s,
              r
            ) {
              for (
                var a,
                  n,
                  o = 0,
                  h = Math.min(t, e),
                  l = Math.max(t, e),
                  p = Array.call(null, { length: 256 }),
                  f = 0,
                  m = r - s,
                  c = e - t;
                o <= 256;

              )
                (n =
                  (a = o / 256) <= h
                    ? c < 0
                      ? r
                      : s
                    : a >= l
                    ? c < 0
                      ? s
                      : r
                    : s + m * Math.pow((a - t) / c, 1 / i)),
                  (p[f++] = n),
                  (o += 256 / 255);
              return p.join(" ");
            }),
            (SVGProLevelsFilter.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e,
                  i = this.filterManager.effectElements;
                this.feFuncRComposed &&
                  (t ||
                    i[3].p._mdf ||
                    i[4].p._mdf ||
                    i[5].p._mdf ||
                    i[6].p._mdf ||
                    i[7].p._mdf) &&
                  ((e = this.getTableValue(
                    i[3].p.v,
                    i[4].p.v,
                    i[5].p.v,
                    i[6].p.v,
                    i[7].p.v
                  )),
                  this.feFuncRComposed.setAttribute("tableValues", e),
                  this.feFuncGComposed.setAttribute("tableValues", e),
                  this.feFuncBComposed.setAttribute("tableValues", e)),
                  this.feFuncR &&
                    (t ||
                      i[10].p._mdf ||
                      i[11].p._mdf ||
                      i[12].p._mdf ||
                      i[13].p._mdf ||
                      i[14].p._mdf) &&
                    ((e = this.getTableValue(
                      i[10].p.v,
                      i[11].p.v,
                      i[12].p.v,
                      i[13].p.v,
                      i[14].p.v
                    )),
                    this.feFuncR.setAttribute("tableValues", e)),
                  this.feFuncG &&
                    (t ||
                      i[17].p._mdf ||
                      i[18].p._mdf ||
                      i[19].p._mdf ||
                      i[20].p._mdf ||
                      i[21].p._mdf) &&
                    ((e = this.getTableValue(
                      i[17].p.v,
                      i[18].p.v,
                      i[19].p.v,
                      i[20].p.v,
                      i[21].p.v
                    )),
                    this.feFuncG.setAttribute("tableValues", e)),
                  this.feFuncB &&
                    (t ||
                      i[24].p._mdf ||
                      i[25].p._mdf ||
                      i[26].p._mdf ||
                      i[27].p._mdf ||
                      i[28].p._mdf) &&
                    ((e = this.getTableValue(
                      i[24].p.v,
                      i[25].p.v,
                      i[26].p.v,
                      i[27].p.v,
                      i[28].p.v
                    )),
                    this.feFuncB.setAttribute("tableValues", e)),
                  this.feFuncA &&
                    (t ||
                      i[31].p._mdf ||
                      i[32].p._mdf ||
                      i[33].p._mdf ||
                      i[34].p._mdf ||
                      i[35].p._mdf) &&
                    ((e = this.getTableValue(
                      i[31].p.v,
                      i[32].p.v,
                      i[33].p.v,
                      i[34].p.v,
                      i[35].p.v
                    )),
                    this.feFuncA.setAttribute("tableValues", e));
              }
            }),
            (SVGDropShadowEffect.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                if (
                  ((t || this.filterManager.effectElements[4].p._mdf) &&
                    this.feGaussianBlur.setAttribute(
                      "stdDeviation",
                      this.filterManager.effectElements[4].p.v / 4
                    ),
                  t || this.filterManager.effectElements[0].p._mdf)
                ) {
                  var e = this.filterManager.effectElements[0].p.v;
                  this.feFlood.setAttribute(
                    "flood-color",
                    rgbToHex(
                      Math.round(255 * e[0]),
                      Math.round(255 * e[1]),
                      Math.round(255 * e[2])
                    )
                  );
                }
                if (
                  ((t || this.filterManager.effectElements[1].p._mdf) &&
                    this.feFlood.setAttribute(
                      "flood-opacity",
                      this.filterManager.effectElements[1].p.v / 255
                    ),
                  t ||
                    this.filterManager.effectElements[2].p._mdf ||
                    this.filterManager.effectElements[3].p._mdf)
                ) {
                  var i = this.filterManager.effectElements[3].p.v,
                    s =
                      (this.filterManager.effectElements[2].p.v - 90) *
                      degToRads,
                    r = i * Math.cos(s),
                    a = i * Math.sin(s);
                  this.feOffset.setAttribute("dx", r),
                    this.feOffset.setAttribute("dy", a);
                }
              }
            });
          var _svgMatteSymbols = [];
          function SVGMatte3Effect(t, e, i) {
            (this.initialized = !1),
              (this.filterManager = e),
              (this.filterElem = t),
              (this.elem = i),
              (i.matteElement = createNS("g")),
              i.matteElement.appendChild(i.layerElement),
              i.matteElement.appendChild(i.transformedElement),
              (i.baseElement = i.matteElement);
          }
          function SVGEffects(t) {
            var e,
              i,
              s = t.data.ef ? t.data.ef.length : 0,
              r = createElementID(),
              a = filtersFactory.createFilter(r),
              n = 0;
            for (this.filters = [], e = 0; e < s; e += 1)
              (i = null),
                20 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGTintFilter(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 21 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGFillFilter(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 22 === t.data.ef[e].ty
                  ? (i = new SVGStrokeEffect(
                      t,
                      t.effectsManager.effectElements[e]
                    ))
                  : 23 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGTritoneFilter(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 24 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGProLevelsFilter(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 25 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGDropShadowEffect(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 28 === t.data.ef[e].ty
                  ? (i = new SVGMatte3Effect(
                      a,
                      t.effectsManager.effectElements[e],
                      t
                    ))
                  : 29 === t.data.ef[e].ty &&
                    ((n += 1),
                    (i = new SVGGaussianBlurEffect(
                      a,
                      t.effectsManager.effectElements[e]
                    ))),
                i && this.filters.push(i);
            n &&
              (t.globalData.defs.appendChild(a),
              t.layerElement.setAttribute(
                "filter",
                "url(" + locationHref + "#" + r + ")"
              )),
              this.filters.length && t.addRenderableComponent(this);
          }
          function CVContextData() {
            var t;
            for (
              this.saved = [],
                this.cArrPos = 0,
                this.cTr = new Matrix(),
                this.cO = 1,
                this.savedOp = createTypedArray("float32", 15),
                t = 0;
              t < 15;
              t += 1
            )
              this.saved[t] = createTypedArray("float32", 16);
            this._length = 15;
          }
          function CVBaseElement() {}
          function CVImageElement(t, e, i) {
            (this.assetData = e.getAssetData(t.refId)),
              (this.img = e.imageLoader.getImage(this.assetData)),
              this.initElement(t, e, i);
          }
          function CVCompElement(t, e, i) {
            (this.completeLayers = !1),
              (this.layers = t.layers),
              (this.pendingElements = []),
              (this.elements = createSizedArray(this.layers.length)),
              this.initElement(t, e, i),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function CVMaskElement(t, e) {
            (this.data = t),
              (this.element = e),
              (this.masksProperties = this.data.masksProperties || []),
              (this.viewData = createSizedArray(this.masksProperties.length));
            var i,
              s = this.masksProperties.length,
              r = !1;
            for (i = 0; i < s; i++)
              "n" !== this.masksProperties[i].mode && (r = !0),
                (this.viewData[i] = ShapePropertyFactory.getShapeProp(
                  this.element,
                  this.masksProperties[i],
                  3
                ));
            (this.hasMasks = r), r && this.element.addRenderableComponent(this);
          }
          function CVShapeElement(t, e, i) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.itemsData = []),
              (this.prevViewData = []),
              (this.shapeModifiers = []),
              (this.processedElements = []),
              (this.transformsManager = new ShapeTransformManager()),
              this.initElement(t, e, i);
          }
          function CVSolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          function CVTextElement(t, e, i) {
            (this.textSpans = []),
              (this.yOffset = 0),
              (this.fillColorAnim = !1),
              (this.strokeColorAnim = !1),
              (this.strokeWidthAnim = !1),
              (this.stroke = !1),
              (this.fill = !1),
              (this.justifyOffset = 0),
              (this.currentRender = null),
              (this.renderType = "canvas"),
              (this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: "",
              }),
              this.initElement(t, e, i);
          }
          function CVEffects() {}
          function HBaseElement(t, e, i) {}
          function HSolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          function HCompElement(t, e, i) {
            (this.layers = t.layers),
              (this.supports3d = !t.hasMask),
              (this.completeLayers = !1),
              (this.pendingElements = []),
              (this.elements = this.layers
                ? createSizedArray(this.layers.length)
                : []),
              this.initElement(t, e, i),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function HShapeElement(t, e, i) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.shapeModifiers = []),
              (this.itemsData = []),
              (this.processedElements = []),
              (this.animatedContents = []),
              (this.shapesContainer = createNS("g")),
              this.initElement(t, e, i),
              (this.prevViewData = []),
              (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
          }
          function HTextElement(t, e, i) {
            (this.textSpans = []),
              (this.textPaths = []),
              (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
              (this.renderType = "svg"),
              (this.isMasked = !1),
              this.initElement(t, e, i);
          }
          function HImageElement(t, e, i) {
            (this.assetData = e.getAssetData(t.refId)),
              this.initElement(t, e, i);
          }
          function HCameraElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
            var s = PropertyFactory.getProp;
            if (
              ((this.pe = s(this, t.pe, 0, 0, this)),
              t.ks.p.s
                ? ((this.px = s(this, t.ks.p.x, 1, 0, this)),
                  (this.py = s(this, t.ks.p.y, 1, 0, this)),
                  (this.pz = s(this, t.ks.p.z, 1, 0, this)))
                : (this.p = s(this, t.ks.p, 1, 0, this)),
              t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this)),
              t.ks.or.k.length && t.ks.or.k[0].to)
            ) {
              var r,
                a = t.ks.or.k.length;
              for (r = 0; r < a; r += 1)
                (t.ks.or.k[r].to = null), (t.ks.or.k[r].ti = null);
            }
            (this.or = s(this, t.ks.or, 1, degToRads, this)),
              (this.or.sh = !0),
              (this.rx = s(this, t.ks.rx, 0, degToRads, this)),
              (this.ry = s(this, t.ks.ry, 0, degToRads, this)),
              (this.rz = s(this, t.ks.rz, 0, degToRads, this)),
              (this.mat = new Matrix()),
              (this._prevMat = new Matrix()),
              (this._isFirstFrame = !0),
              (this.finalTransform = { mProp: this });
          }
          function HEffects() {}
          (SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
              if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
              e += 1;
            }
            return null;
          }),
            (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
              var i = t.layerElement.parentNode;
              if (i) {
                for (
                  var s, r = i.children, a = 0, n = r.length;
                  a < n && r[a] !== t.layerElement;

                )
                  a += 1;
                a <= n - 2 && (s = r[a + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e),
                  s ? i.insertBefore(o, s) : i.appendChild(o);
              }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
              if (!this.findSymbol(e)) {
                var i = createElementID(),
                  s = createNS("mask");
                s.setAttribute("id", e.layerId),
                  s.setAttribute("mask-type", "alpha"),
                  _svgMatteSymbols.push(e);
                var r = t.globalData.defs;
                r.appendChild(s);
                var a = createNS("symbol");
                a.setAttribute("id", i),
                  this.replaceInParent(e, i),
                  a.appendChild(e.layerElement),
                  r.appendChild(a);
                var n = createNS("use");
                n.setAttribute("href", "#" + i),
                  s.appendChild(n),
                  (e.data.hd = !1),
                  e.show();
              }
              t.setMatte(e.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function () {
              for (
                var t = this.filterManager.effectElements[0].p.v,
                  e = this.elem.comp.elements,
                  i = 0,
                  s = e.length;
                i < s;

              )
                e[i] &&
                  e[i].data.ind === t &&
                  this.setElementAsMask(this.elem, e[i]),
                  (i += 1);
              this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function () {
              this.initialized || this.initialize();
            }),
            (SVGEffects.prototype.renderFrame = function (t) {
              var e,
                i = this.filters.length;
              for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
            }),
            (CVContextData.prototype.duplicate = function () {
              var t = 2 * this._length,
                e = this.savedOp;
              (this.savedOp = createTypedArray("float32", t)),
                this.savedOp.set(e);
              var i = 0;
              for (i = this._length; i < t; i += 1)
                this.saved[i] = createTypedArray("float32", 16);
              this._length = t;
            }),
            (CVContextData.prototype.reset = function () {
              (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
            }),
            (CVBaseElement.prototype = {
              createElements: function () {},
              initRendererElement: function () {},
              createContainerElements: function () {
                (this.canvasContext = this.globalData.canvasContext),
                  (this.renderableEffectsManager = new CVEffects(this));
              },
              createContent: function () {},
              setBlendMode: function () {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                  t.blendMode = this.data.bm;
                  var e = getBlendMode(this.data.bm);
                  t.canvasContext.globalCompositeOperation = e;
                }
              },
              createRenderableComponents: function () {
                this.maskManager = new CVMaskElement(this.data, this);
              },
              hideElement: function () {
                this.hidden ||
                  (this.isInRange && !this.isTransparent) ||
                  (this.hidden = !0);
              },
              showElement: function () {
                this.isInRange &&
                  !this.isTransparent &&
                  ((this.hidden = !1),
                  (this._isFirstFrame = !0),
                  (this.maskManager._isFirstFrame = !0));
              },
              renderFrame: function () {
                if (!this.hidden && !this.data.hd) {
                  this.renderTransform(),
                    this.renderRenderable(),
                    this.setBlendMode();
                  var t = 0 === this.data.ty;
                  this.globalData.renderer.save(t),
                    this.globalData.renderer.ctxTransform(
                      this.finalTransform.mat.props
                    ),
                    this.globalData.renderer.ctxOpacity(
                      this.finalTransform.mProp.o.v
                    ),
                    this.renderInnerContent(),
                    this.globalData.renderer.restore(t),
                    this.maskManager.hasMasks &&
                      this.globalData.renderer.restore(!0),
                    this._isFirstFrame && (this._isFirstFrame = !1);
                }
              },
              destroy: function () {
                (this.canvasContext = null),
                  (this.data = null),
                  (this.globalData = null),
                  this.maskManager.destroy();
              },
              mHelper: new Matrix(),
            }),
            (CVBaseElement.prototype.hide =
              CVBaseElement.prototype.hideElement),
            (CVBaseElement.prototype.show =
              CVBaseElement.prototype.showElement),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVImageElement
            ),
            (CVImageElement.prototype.initElement =
              SVGShapeElement.prototype.initElement),
            (CVImageElement.prototype.prepareFrame =
              IImageElement.prototype.prepareFrame),
            (CVImageElement.prototype.createContent = function () {
              if (
                this.img.width &&
                (this.assetData.w !== this.img.width ||
                  this.assetData.h !== this.img.height)
              ) {
                var t = createTag("canvas");
                (t.width = this.assetData.w), (t.height = this.assetData.h);
                var e,
                  i,
                  s = t.getContext("2d"),
                  r = this.img.width,
                  a = this.img.height,
                  n = r / a,
                  o = this.assetData.w / this.assetData.h,
                  h =
                    this.assetData.pr ||
                    this.globalData.renderConfig.imagePreserveAspectRatio;
                (n > o && "xMidYMid slice" === h) ||
                (n < o && "xMidYMid slice" !== h)
                  ? (e = (i = a) * o)
                  : (i = (e = r) / o),
                  s.drawImage(
                    this.img,
                    (r - e) / 2,
                    (a - i) / 2,
                    e,
                    i,
                    0,
                    0,
                    this.assetData.w,
                    this.assetData.h
                  ),
                  (this.img = t);
              }
            }),
            (CVImageElement.prototype.renderInnerContent = function (t) {
              this.canvasContext.drawImage(this.img, 0, 0);
            }),
            (CVImageElement.prototype.destroy = function () {
              this.img = null;
            }),
            extendPrototype(
              [CanvasRenderer, ICompElement, CVBaseElement],
              CVCompElement
            ),
            (CVCompElement.prototype.renderInnerContent = function () {
              var t,
                e = this.canvasContext;
              for (
                e.beginPath(),
                  e.moveTo(0, 0),
                  e.lineTo(this.data.w, 0),
                  e.lineTo(this.data.w, this.data.h),
                  e.lineTo(0, this.data.h),
                  e.lineTo(0, 0),
                  e.clip(),
                  t = this.layers.length - 1;
                t >= 0;
                t -= 1
              )
                (this.completeLayers || this.elements[t]) &&
                  this.elements[t].renderFrame();
            }),
            (CVCompElement.prototype.destroy = function () {
              var t;
              for (t = this.layers.length - 1; t >= 0; t -= 1)
                this.elements[t] && this.elements[t].destroy();
              (this.layers = null), (this.elements = null);
            }),
            (CVMaskElement.prototype.renderFrame = function () {
              if (this.hasMasks) {
                var t,
                  e,
                  i,
                  s,
                  r = this.element.finalTransform.mat,
                  a = this.element.canvasContext,
                  n = this.masksProperties.length;
                for (a.beginPath(), t = 0; t < n; t++)
                  if ("n" !== this.masksProperties[t].mode) {
                    this.masksProperties[t].inv &&
                      (a.moveTo(0, 0),
                      a.lineTo(this.element.globalData.compSize.w, 0),
                      a.lineTo(
                        this.element.globalData.compSize.w,
                        this.element.globalData.compSize.h
                      ),
                      a.lineTo(0, this.element.globalData.compSize.h),
                      a.lineTo(0, 0)),
                      (s = this.viewData[t].v),
                      (e = r.applyToPointArray(s.v[0][0], s.v[0][1], 0)),
                      a.moveTo(e[0], e[1]);
                    var o,
                      h = s._length;
                    for (o = 1; o < h; o++)
                      (i = r.applyToTriplePoints(s.o[o - 1], s.i[o], s.v[o])),
                        a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                    (i = r.applyToTriplePoints(s.o[o - 1], s.i[0], s.v[0])),
                      a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                  }
                this.element.globalData.renderer.save(!0), a.clip();
              }
            }),
            (CVMaskElement.prototype.getMaskProperty =
              MaskElement.prototype.getMaskProperty),
            (CVMaskElement.prototype.destroy = function () {
              this.element = null;
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVShapeElement
            ),
            (CVShapeElement.prototype.initElement =
              RenderableDOMElement.prototype.initElement),
            (CVShapeElement.prototype.transformHelper = {
              opacity: 1,
              _opMdf: !1,
            }),
            (CVShapeElement.prototype.dashResetter = []),
            (CVShapeElement.prototype.createContent = function () {
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                !0,
                []
              );
            }),
            (CVShapeElement.prototype.createStyleElement = function (t, e) {
              var i = {
                  data: t,
                  type: t.ty,
                  preTransforms: this.transformsManager.addTransformSequence(e),
                  transforms: [],
                  elements: [],
                  closed: !0 === t.hd,
                },
                s = {};
              if (
                ("fl" == t.ty || "st" == t.ty
                  ? ((s.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                    s.c.k ||
                      (i.co =
                        "rgb(" +
                        bm_floor(s.c.v[0]) +
                        "," +
                        bm_floor(s.c.v[1]) +
                        "," +
                        bm_floor(s.c.v[2]) +
                        ")"))
                  : ("gf" !== t.ty && "gs" !== t.ty) ||
                    ((s.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                    (s.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                    (s.h = PropertyFactory.getProp(
                      this,
                      t.h || { k: 0 },
                      0,
                      0.01,
                      this
                    )),
                    (s.a = PropertyFactory.getProp(
                      this,
                      t.a || { k: 0 },
                      0,
                      degToRads,
                      this
                    )),
                    (s.g = new GradientProperty(this, t.g, this))),
                (s.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
                "st" == t.ty || "gs" == t.ty)
              ) {
                if (
                  ((i.lc = this.lcEnum[t.lc] || "round"),
                  (i.lj = this.ljEnum[t.lj] || "round"),
                  1 == t.lj && (i.ml = t.ml),
                  (s.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                  s.w.k || (i.wi = s.w.v),
                  t.d)
                ) {
                  var r = new DashProperty(this, t.d, "canvas", this);
                  (s.d = r),
                    s.d.k ||
                      ((i.da = s.d.dashArray), (i.do = s.d.dashoffset[0]));
                }
              } else i.r = 2 === t.r ? "evenodd" : "nonzero";
              return this.stylesList.push(i), (s.style = i), s;
            }),
            (CVShapeElement.prototype.createGroupElement = function (t) {
              return { it: [], prevViewData: [] };
            }),
            (CVShapeElement.prototype.createTransformElement = function (t) {
              return {
                transform: {
                  opacity: 1,
                  _opMdf: !1,
                  key: this.transformsManager.getNewKey(),
                  op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                  mProps: TransformPropertyFactory.getTransformProperty(
                    this,
                    t,
                    this
                  ),
                },
              };
            }),
            (CVShapeElement.prototype.createShapeElement = function (t) {
              var e = new CVShapeData(
                this,
                t,
                this.stylesList,
                this.transformsManager
              );
              return this.shapes.push(e), this.addShapeToModifiers(e), e;
            }),
            (CVShapeElement.prototype.reloadShapes = function () {
              this._isFirstFrame = !0;
              var t,
                e = this.itemsData.length;
              for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
              for (
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  !0,
                  []
                ),
                  e = this.dynamicProperties.length,
                  t = 0;
                t < e;
                t += 1
              )
                this.dynamicProperties[t].getValue();
              this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame);
            }),
            (CVShapeElement.prototype.addTransformToStyleList = function (t) {
              var e,
                i = this.stylesList.length;
              for (e = 0; e < i; e += 1)
                this.stylesList[e].closed ||
                  this.stylesList[e].transforms.push(t);
            }),
            (CVShapeElement.prototype.removeTransformFromStyleList =
              function () {
                var t,
                  e = this.stylesList.length;
                for (t = 0; t < e; t += 1)
                  this.stylesList[t].closed ||
                    this.stylesList[t].transforms.pop();
              }),
            (CVShapeElement.prototype.closeStyles = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1) t[e].closed = !0;
            }),
            (CVShapeElement.prototype.searchShapes = function (t, e, i, s, r) {
              var a,
                n,
                o,
                h,
                l,
                p,
                f = t.length - 1,
                m = [],
                c = [],
                d = [].concat(r);
              for (a = f; a >= 0; a -= 1) {
                if (
                  ((h = this.searchProcessedElement(t[a]))
                    ? (e[a] = i[h - 1])
                    : (t[a]._shouldRender = s),
                  "fl" == t[a].ty ||
                    "st" == t[a].ty ||
                    "gf" == t[a].ty ||
                    "gs" == t[a].ty)
                )
                  h
                    ? (e[a].style.closed = !1)
                    : (e[a] = this.createStyleElement(t[a], d)),
                    m.push(e[a].style);
                else if ("gr" == t[a].ty) {
                  if (h)
                    for (o = e[a].it.length, n = 0; n < o; n += 1)
                      e[a].prevViewData[n] = e[a].it[n];
                  else e[a] = this.createGroupElement(t[a]);
                  this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, s, d);
                } else
                  "tr" == t[a].ty
                    ? (h ||
                        ((p = this.createTransformElement(t[a])), (e[a] = p)),
                      d.push(e[a]),
                      this.addTransformToStyleList(e[a]))
                    : "sh" == t[a].ty ||
                      "rc" == t[a].ty ||
                      "el" == t[a].ty ||
                      "sr" == t[a].ty
                    ? h || (e[a] = this.createShapeElement(t[a]))
                    : "tm" == t[a].ty || "rd" == t[a].ty
                    ? (h
                        ? ((l = e[a]).closed = !1)
                        : ((l = ShapeModifiers.getModifier(t[a].ty)).init(
                            this,
                            t[a]
                          ),
                          (e[a] = l),
                          this.shapeModifiers.push(l)),
                      c.push(l))
                    : "rp" == t[a].ty &&
                      (h
                        ? ((l = e[a]).closed = !0)
                        : ((l = ShapeModifiers.getModifier(t[a].ty)),
                          (e[a] = l),
                          l.init(this, t, a, e),
                          this.shapeModifiers.push(l),
                          (s = !1)),
                      c.push(l));
                this.addProcessedElement(t[a], a + 1);
              }
              for (
                this.removeTransformFromStyleList(),
                  this.closeStyles(m),
                  f = c.length,
                  a = 0;
                a < f;
                a += 1
              )
                c[a].closed = !0;
            }),
            (CVShapeElement.prototype.renderInnerContent = function () {
              (this.transformHelper.opacity = 1),
                (this.transformHelper._opMdf = !1),
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame),
                this.renderShape(
                  this.transformHelper,
                  this.shapesData,
                  this.itemsData,
                  !0
                );
            }),
            (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
              (t._opMdf || e.op._mdf || this._isFirstFrame) &&
                ((e.opacity = t.opacity),
                (e.opacity *= e.op.v),
                (e._opMdf = !0));
            }),
            (CVShapeElement.prototype.drawLayer = function () {
              var t,
                e,
                i,
                s,
                r,
                a,
                n,
                o,
                h,
                l = this.stylesList.length,
                p = this.globalData.renderer,
                f = this.globalData.canvasContext;
              for (t = 0; t < l; t += 1)
                if (
                  (("st" !== (o = (h = this.stylesList[t]).type) &&
                    "gs" !== o) ||
                    0 !== h.wi) &&
                  h.data._shouldRender &&
                  0 !== h.coOp &&
                  0 !== this.globalData.currentGlobalAlpha
                ) {
                  for (
                    p.save(),
                      a = h.elements,
                      "st" === o || "gs" === o
                        ? ((f.strokeStyle = "st" === o ? h.co : h.grd),
                          (f.lineWidth = h.wi),
                          (f.lineCap = h.lc),
                          (f.lineJoin = h.lj),
                          (f.miterLimit = h.ml || 0))
                        : (f.fillStyle = "fl" === o ? h.co : h.grd),
                      p.ctxOpacity(h.coOp),
                      "st" !== o && "gs" !== o && f.beginPath(),
                      p.ctxTransform(h.preTransforms.finalTransform.props),
                      i = a.length,
                      e = 0;
                    e < i;
                    e += 1
                  ) {
                    for (
                      ("st" !== o && "gs" !== o) ||
                        (f.beginPath(),
                        h.da &&
                          (f.setLineDash(h.da), (f.lineDashOffset = h.do))),
                        r = (n = a[e].trNodes).length,
                        s = 0;
                      s < r;
                      s += 1
                    )
                      "m" == n[s].t
                        ? f.moveTo(n[s].p[0], n[s].p[1])
                        : "c" == n[s].t
                        ? f.bezierCurveTo(
                            n[s].pts[0],
                            n[s].pts[1],
                            n[s].pts[2],
                            n[s].pts[3],
                            n[s].pts[4],
                            n[s].pts[5]
                          )
                        : f.closePath();
                    ("st" !== o && "gs" !== o) ||
                      (f.stroke(), h.da && f.setLineDash(this.dashResetter));
                  }
                  "st" !== o && "gs" !== o && f.fill(h.r), p.restore();
                }
            }),
            (CVShapeElement.prototype.renderShape = function (t, e, i, s) {
              var r, a;
              for (a = t, r = e.length - 1; r >= 0; r -= 1)
                "tr" == e[r].ty
                  ? ((a = i[r].transform), this.renderShapeTransform(t, a))
                  : "sh" == e[r].ty ||
                    "el" == e[r].ty ||
                    "rc" == e[r].ty ||
                    "sr" == e[r].ty
                  ? this.renderPath(e[r], i[r])
                  : "fl" == e[r].ty
                  ? this.renderFill(e[r], i[r], a)
                  : "st" == e[r].ty
                  ? this.renderStroke(e[r], i[r], a)
                  : "gf" == e[r].ty || "gs" == e[r].ty
                  ? this.renderGradientFill(e[r], i[r], a)
                  : "gr" == e[r].ty
                  ? this.renderShape(a, e[r].it, i[r].it)
                  : e[r].ty;
              s && this.drawLayer();
            }),
            (CVShapeElement.prototype.renderStyledShape = function (t, e) {
              if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i,
                  s,
                  r,
                  a = t.trNodes,
                  n = e.paths,
                  o = n._length;
                a.length = 0;
                var h = t.transforms.finalTransform;
                for (r = 0; r < o; r += 1) {
                  var l = n.shapes[r];
                  if (l && l.v) {
                    for (s = l._length, i = 1; i < s; i += 1)
                      1 === i &&
                        a.push({
                          t: "m",
                          p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                        }),
                        a.push({
                          t: "c",
                          pts: h.applyToTriplePoints(
                            l.o[i - 1],
                            l.i[i],
                            l.v[i]
                          ),
                        });
                    1 === s &&
                      a.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                      }),
                      l.c &&
                        s &&
                        (a.push({
                          t: "c",
                          pts: h.applyToTriplePoints(
                            l.o[i - 1],
                            l.i[0],
                            l.v[0]
                          ),
                        }),
                        a.push({ t: "z" }));
                  }
                }
                t.trNodes = a;
              }
            }),
            (CVShapeElement.prototype.renderPath = function (t, e) {
              if (!0 !== t.hd && t._shouldRender) {
                var i,
                  s = e.styledShapes.length;
                for (i = 0; i < s; i += 1)
                  this.renderStyledShape(e.styledShapes[i], e.sh);
              }
            }),
            (CVShapeElement.prototype.renderFill = function (t, e, i) {
              var s = e.style;
              (e.c._mdf || this._isFirstFrame) &&
                (s.co =
                  "rgb(" +
                  bm_floor(e.c.v[0]) +
                  "," +
                  bm_floor(e.c.v[1]) +
                  "," +
                  bm_floor(e.c.v[2]) +
                  ")"),
                (e.o._mdf || i._opMdf || this._isFirstFrame) &&
                  (s.coOp = e.o.v * i.opacity);
            }),
            (CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
              var s = e.style;
              if (
                !s.grd ||
                e.g._mdf ||
                e.s._mdf ||
                e.e._mdf ||
                (1 !== t.t && (e.h._mdf || e.a._mdf))
              ) {
                var r = this.globalData.canvasContext,
                  a = e.s.v,
                  n = e.e.v;
                if (1 === t.t)
                  m = r.createLinearGradient(a[0], a[1], n[0], n[1]);
                else
                  var o = Math.sqrt(
                      Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2)
                    ),
                    h = Math.atan2(n[1] - a[1], n[0] - a[0]),
                    l = o * (e.h.v >= 1 ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v),
                    p = Math.cos(h + e.a.v) * l + a[0],
                    f = Math.sin(h + e.a.v) * l + a[1],
                    m = r.createRadialGradient(p, f, 0, a[0], a[1], o);
                var c,
                  d = t.g.p,
                  u = e.g.c,
                  g = 1;
                for (c = 0; c < d; c += 1)
                  e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * c + 1]),
                    m.addColorStop(
                      u[4 * c] / 100,
                      "rgba(" +
                        u[4 * c + 1] +
                        "," +
                        u[4 * c + 2] +
                        "," +
                        u[4 * c + 3] +
                        "," +
                        g +
                        ")"
                    );
                s.grd = m;
              }
              s.coOp = e.o.v * i.opacity;
            }),
            (CVShapeElement.prototype.renderStroke = function (t, e, i) {
              var s = e.style,
                r = e.d;
              r &&
                (r._mdf || this._isFirstFrame) &&
                ((s.da = r.dashArray), (s.do = r.dashoffset[0])),
                (e.c._mdf || this._isFirstFrame) &&
                  (s.co =
                    "rgb(" +
                    bm_floor(e.c.v[0]) +
                    "," +
                    bm_floor(e.c.v[1]) +
                    "," +
                    bm_floor(e.c.v[2]) +
                    ")"),
                (e.o._mdf || i._opMdf || this._isFirstFrame) &&
                  (s.coOp = e.o.v * i.opacity),
                (e.w._mdf || this._isFirstFrame) && (s.wi = e.w.v);
            }),
            (CVShapeElement.prototype.destroy = function () {
              (this.shapesData = null),
                (this.globalData = null),
                (this.canvasContext = null),
                (this.stylesList.length = 0),
                (this.itemsData.length = 0);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVSolidElement
            ),
            (CVSolidElement.prototype.initElement =
              SVGShapeElement.prototype.initElement),
            (CVSolidElement.prototype.prepareFrame =
              IImageElement.prototype.prepareFrame),
            (CVSolidElement.prototype.renderInnerContent = function () {
              var t = this.canvasContext;
              (t.fillStyle = this.data.sc),
                t.fillRect(0, 0, this.data.sw, this.data.sh);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
                ITextElement,
              ],
              CVTextElement
            ),
            (CVTextElement.prototype.tHelper =
              createTag("canvas").getContext("2d")),
            (CVTextElement.prototype.buildNewText = function () {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = !1;
              t.fc
                ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
                : (this.values.fill = "rgba(0,0,0,0)"),
                (this.fill = e);
              var i = !1;
              t.sc &&
                ((i = !0),
                (this.values.stroke = this.buildColor(t.sc)),
                (this.values.sWidth = t.sw));
              var s,
                r,
                a = this.globalData.fontManager.getFontByName(t.f),
                n = t.l,
                o = this.mHelper;
              (this.stroke = i),
                (this.values.fValue =
                  t.finalSize +
                  "px " +
                  this.globalData.fontManager.getFontByName(t.f).fFamily),
                (r = t.finalText.length);
              var h,
                l,
                p,
                f,
                m,
                c,
                d,
                u,
                g,
                y,
                v = this.data.singleShape,
                b = (t.tr / 1e3) * t.finalSize,
                _ = 0,
                x = 0,
                E = !0,
                P = 0;
              for (s = 0; s < r; s += 1) {
                for (
                  l =
                    ((h = this.globalData.fontManager.getCharData(
                      t.finalText[s],
                      a.fStyle,
                      this.globalData.fontManager.getFontByName(t.f).fFamily
                    )) &&
                      h.data) ||
                    {},
                    o.reset(),
                    v &&
                      n[s].n &&
                      ((_ = -b), (x += t.yOffset), (x += E ? 1 : 0), (E = !1)),
                    d = (m = l.shapes ? l.shapes[0].it : []).length,
                    o.scale(t.finalSize / 100, t.finalSize / 100),
                    v &&
                      this.applyTextPropertiesToMatrix(t, o, n[s].line, _, x),
                    g = createSizedArray(d),
                    c = 0;
                  c < d;
                  c += 1
                ) {
                  for (
                    f = m[c].ks.k.i.length, u = m[c].ks.k, y = [], p = 1;
                    p < f;
                    p += 1
                  )
                    1 == p &&
                      y.push(
                        o.applyToX(u.v[0][0], u.v[0][1], 0),
                        o.applyToY(u.v[0][0], u.v[0][1], 0)
                      ),
                      y.push(
                        o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0),
                        o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0),
                        o.applyToX(u.i[p][0], u.i[p][1], 0),
                        o.applyToY(u.i[p][0], u.i[p][1], 0),
                        o.applyToX(u.v[p][0], u.v[p][1], 0),
                        o.applyToY(u.v[p][0], u.v[p][1], 0)
                      );
                  y.push(
                    o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0),
                    o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0),
                    o.applyToX(u.i[0][0], u.i[0][1], 0),
                    o.applyToY(u.i[0][0], u.i[0][1], 0),
                    o.applyToX(u.v[0][0], u.v[0][1], 0),
                    o.applyToY(u.v[0][0], u.v[0][1], 0)
                  ),
                    (g[c] = y);
                }
                v && ((_ += n[s].l), (_ += b)),
                  this.textSpans[P]
                    ? (this.textSpans[P].elem = g)
                    : (this.textSpans[P] = { elem: g }),
                  (P += 1);
              }
            }),
            (CVTextElement.prototype.renderInnerContent = function () {
              var t,
                e,
                i,
                s,
                r,
                a,
                n = this.canvasContext;
              this.finalTransform.mat.props,
                (n.font = this.values.fValue),
                (n.lineCap = "butt"),
                (n.lineJoin = "miter"),
                (n.miterLimit = 4),
                this.data.singleShape ||
                  this.textAnimator.getMeasures(
                    this.textProperty.currentData,
                    this.lettersChangedFlag
                  );
              var o,
                h = this.textAnimator.renderedLetters,
                l = this.textProperty.currentData.l;
              e = l.length;
              var p,
                f,
                m = null,
                c = null,
                d = null;
              for (t = 0; t < e; t += 1)
                if (!l[t].n) {
                  if (
                    ((o = h[t]) &&
                      (this.globalData.renderer.save(),
                      this.globalData.renderer.ctxTransform(o.p),
                      this.globalData.renderer.ctxOpacity(o.o)),
                    this.fill)
                  ) {
                    for (
                      o && o.fc
                        ? m !== o.fc && ((m = o.fc), (n.fillStyle = o.fc))
                        : m !== this.values.fill &&
                          ((m = this.values.fill),
                          (n.fillStyle = this.values.fill)),
                        s = (p = this.textSpans[t].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        i = 0;
                      i < s;
                      i += 1
                    )
                      for (
                        a = (f = p[i]).length,
                          this.globalData.canvasContext.moveTo(f[0], f[1]),
                          r = 2;
                        r < a;
                        r += 6
                      )
                        this.globalData.canvasContext.bezierCurveTo(
                          f[r],
                          f[r + 1],
                          f[r + 2],
                          f[r + 3],
                          f[r + 4],
                          f[r + 5]
                        );
                    this.globalData.canvasContext.closePath(),
                      this.globalData.canvasContext.fill();
                  }
                  if (this.stroke) {
                    for (
                      o && o.sw
                        ? d !== o.sw && ((d = o.sw), (n.lineWidth = o.sw))
                        : d !== this.values.sWidth &&
                          ((d = this.values.sWidth),
                          (n.lineWidth = this.values.sWidth)),
                        o && o.sc
                          ? c !== o.sc && ((c = o.sc), (n.strokeStyle = o.sc))
                          : c !== this.values.stroke &&
                            ((c = this.values.stroke),
                            (n.strokeStyle = this.values.stroke)),
                        s = (p = this.textSpans[t].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        i = 0;
                      i < s;
                      i += 1
                    )
                      for (
                        a = (f = p[i]).length,
                          this.globalData.canvasContext.moveTo(f[0], f[1]),
                          r = 2;
                        r < a;
                        r += 6
                      )
                        this.globalData.canvasContext.bezierCurveTo(
                          f[r],
                          f[r + 1],
                          f[r + 2],
                          f[r + 3],
                          f[r + 4],
                          f[r + 5]
                        );
                    this.globalData.canvasContext.closePath(),
                      this.globalData.canvasContext.stroke();
                  }
                  o && this.globalData.renderer.restore();
                }
            }),
            (CVEffects.prototype.renderFrame = function () {}),
            (HBaseElement.prototype = {
              checkBlendMode: function () {},
              initRendererElement: function () {
                (this.baseElement = createTag(this.data.tg || "div")),
                  this.data.hasMask
                    ? ((this.svgElement = createNS("svg")),
                      (this.layerElement = createNS("g")),
                      (this.maskedElement = this.layerElement),
                      this.svgElement.appendChild(this.layerElement),
                      this.baseElement.appendChild(this.svgElement))
                    : (this.layerElement = this.baseElement),
                  styleDiv(this.baseElement);
              },
              createContainerElements: function () {
                (this.renderableEffectsManager = new CVEffects(this)),
                  (this.transformedElement = this.baseElement),
                  (this.maskedElement = this.layerElement),
                  this.data.ln &&
                    this.layerElement.setAttribute("id", this.data.ln),
                  this.data.cl &&
                    this.layerElement.setAttribute("class", this.data.cl),
                  0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function () {
                this.finalTransform._matMdf &&
                  (this.transformedElement.style.transform =
                    this.transformedElement.style.webkitTransform =
                      this.finalTransform.mat.toCSS()),
                  this.finalTransform._opMdf &&
                    (this.transformedElement.style.opacity =
                      this.finalTransform.mProp.o.v);
              },
              renderFrame: function () {
                this.data.hd ||
                  this.hidden ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              destroy: function () {
                (this.layerElement = null),
                  (this.transformedElement = null),
                  this.matteElement && (this.matteElement = null),
                  this.maskManager &&
                    (this.maskManager.destroy(), (this.maskManager = null));
              },
              createRenderableComponents: function () {
                this.maskManager = new MaskElement(
                  this.data,
                  this,
                  this.globalData
                );
              },
              addEffects: function () {},
              setMatte: function () {},
            }),
            (HBaseElement.prototype.getBaseElement =
              SVGBaseElement.prototype.getBaseElement),
            (HBaseElement.prototype.destroyBaseElement =
              HBaseElement.prototype.destroy),
            (HBaseElement.prototype.buildElementParenting =
              HybridRenderer.prototype.buildElementParenting),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              HSolidElement
            ),
            (HSolidElement.prototype.createContent = function () {
              var t;
              this.data.hasMask
                ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
                  t.setAttribute("height", this.data.sh),
                  t.setAttribute("fill", this.data.sc),
                  this.svgElement.setAttribute("width", this.data.sw),
                  this.svgElement.setAttribute("height", this.data.sh))
                : (((t = createTag("div")).style.width = this.data.sw + "px"),
                  (t.style.height = this.data.sh + "px"),
                  (t.style.backgroundColor = this.data.sc)),
                this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [HybridRenderer, ICompElement, HBaseElement],
              HCompElement
            ),
            (HCompElement.prototype._createBaseContainerElements =
              HCompElement.prototype.createContainerElements),
            (HCompElement.prototype.createContainerElements = function () {
              this._createBaseContainerElements(),
                this.data.hasMask
                  ? (this.svgElement.setAttribute("width", this.data.w),
                    this.svgElement.setAttribute("height", this.data.h),
                    (this.transformedElement = this.baseElement))
                  : (this.transformedElement = this.layerElement);
            }),
            (HCompElement.prototype.addTo3dContainer = function (t, e) {
              for (var i, s = 0; s < e; )
                this.elements[s] &&
                  this.elements[s].getBaseElement &&
                  (i = this.elements[s].getBaseElement()),
                  (s += 1);
              i
                ? this.layerElement.insertBefore(t, i)
                : this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HSolidElement,
                SVGShapeElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              HShapeElement
            ),
            (HShapeElement.prototype._renderShapeFrame =
              HShapeElement.prototype.renderInnerContent),
            (HShapeElement.prototype.createContent = function () {
              var t;
              if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
                this.layerElement.appendChild(this.shapesContainer),
                  (t = this.svgElement);
              else {
                t = createNS("svg");
                var e = this.comp.data
                  ? this.comp.data
                  : this.globalData.compSize;
                t.setAttribute("width", e.w),
                  t.setAttribute("height", e.h),
                  t.appendChild(this.shapesContainer),
                  this.layerElement.appendChild(t);
              }
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.shapesContainer,
                0,
                [],
                !0
              ),
                this.filterUniqueShapes(),
                (this.shapeCont = t);
            }),
            (HShapeElement.prototype.getTransformedPoint = function (t, e) {
              var i,
                s = t.length;
              for (i = 0; i < s; i += 1)
                e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
              return e;
            }),
            (HShapeElement.prototype.calculateShapeBoundingBox = function (
              t,
              e
            ) {
              var i,
                s,
                r,
                a,
                n,
                o = t.sh.v,
                h = t.transformers,
                l = o._length;
              if (!(l <= 1)) {
                for (i = 0; i < l - 1; i += 1)
                  (s = this.getTransformedPoint(h, o.v[i])),
                    (r = this.getTransformedPoint(h, o.o[i])),
                    (a = this.getTransformedPoint(h, o.i[i + 1])),
                    (n = this.getTransformedPoint(h, o.v[i + 1])),
                    this.checkBounds(s, r, a, n, e);
                o.c &&
                  ((s = this.getTransformedPoint(h, o.v[i])),
                  (r = this.getTransformedPoint(h, o.o[i])),
                  (a = this.getTransformedPoint(h, o.i[0])),
                  (n = this.getTransformedPoint(h, o.v[0])),
                  this.checkBounds(s, r, a, n, e));
              }
            }),
            (HShapeElement.prototype.checkBounds = function (t, e, i, s, r) {
              this.getBoundsOfCurve(t, e, i, s);
              var a = this.shapeBoundingBox;
              (r.x = bm_min(a.left, r.x)),
                (r.xMax = bm_max(a.right, r.xMax)),
                (r.y = bm_min(a.top, r.y)),
                (r.yMax = bm_max(a.bottom, r.yMax));
            }),
            (HShapeElement.prototype.shapeBoundingBox = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }),
            (HShapeElement.prototype.tempBoundingBox = {
              x: 0,
              xMax: 0,
              y: 0,
              yMax: 0,
              width: 0,
              height: 0,
            }),
            (HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, s) {
              for (
                var r,
                  a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f = [
                    [t[0], s[0]],
                    [t[1], s[1]],
                  ],
                  m = 0;
                m < 2;
                ++m
              )
                if (
                  ((a = 6 * t[m] - 12 * e[m] + 6 * i[m]),
                  (r = -3 * t[m] + 9 * e[m] - 9 * i[m] + 3 * s[m]),
                  (n = 3 * e[m] - 3 * t[m]),
                  (a |= 0),
                  (n |= 0),
                  0 != (r |= 0))
                )
                  (h = a * a - 4 * n * r) < 0 ||
                    (0 < (l = (-a + bm_sqrt(h)) / (2 * r)) &&
                      l < 1 &&
                      f[m].push(this.calculateF(l, t, e, i, s, m)),
                    0 < (p = (-a - bm_sqrt(h)) / (2 * r)) &&
                      p < 1 &&
                      f[m].push(this.calculateF(p, t, e, i, s, m)));
                else {
                  if (0 === a) continue;
                  0 < (o = -n / a) &&
                    o < 1 &&
                    f[m].push(this.calculateF(o, t, e, i, s, m));
                }
              (this.shapeBoundingBox.left = bm_min.apply(null, f[0])),
                (this.shapeBoundingBox.top = bm_min.apply(null, f[1])),
                (this.shapeBoundingBox.right = bm_max.apply(null, f[0])),
                (this.shapeBoundingBox.bottom = bm_max.apply(null, f[1]));
            }),
            (HShapeElement.prototype.calculateF = function (t, e, i, s, r, a) {
              return (
                bm_pow(1 - t, 3) * e[a] +
                3 * bm_pow(1 - t, 2) * t * i[a] +
                3 * (1 - t) * bm_pow(t, 2) * s[a] +
                bm_pow(t, 3) * r[a]
              );
            }),
            (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
              var i,
                s = t.length;
              for (i = 0; i < s; i += 1)
                t[i] && t[i].sh
                  ? this.calculateShapeBoundingBox(t[i], e)
                  : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e);
            }),
            (HShapeElement.prototype.currentBoxContains = function (t) {
              return (
                this.currentBBox.x <= t.x &&
                this.currentBBox.y <= t.y &&
                this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
                this.currentBBox.height + this.currentBBox.y >= t.y + t.height
              );
            }),
            (HShapeElement.prototype.renderInnerContent = function () {
              if (
                (this._renderShapeFrame(),
                !this.hidden && (this._isFirstFrame || this._mdf))
              ) {
                var t = this.tempBoundingBox,
                  e = 999999;
                if (
                  ((t.x = e),
                  (t.xMax = -e),
                  (t.y = e),
                  (t.yMax = -e),
                  this.calculateBoundingBox(this.itemsData, t),
                  (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
                  (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
                  this.currentBoxContains(t))
                )
                  return;
                var i = !1;
                this.currentBBox.w !== t.width &&
                  ((this.currentBBox.w = t.width),
                  this.shapeCont.setAttribute("width", t.width),
                  (i = !0)),
                  this.currentBBox.h !== t.height &&
                    ((this.currentBBox.h = t.height),
                    this.shapeCont.setAttribute("height", t.height),
                    (i = !0)),
                  (i ||
                    this.currentBBox.x !== t.x ||
                    this.currentBBox.y !== t.y) &&
                    ((this.currentBBox.w = t.width),
                    (this.currentBBox.h = t.height),
                    (this.currentBBox.x = t.x),
                    (this.currentBBox.y = t.y),
                    this.shapeCont.setAttribute(
                      "viewBox",
                      this.currentBBox.x +
                        " " +
                        this.currentBBox.y +
                        " " +
                        this.currentBBox.w +
                        " " +
                        this.currentBBox.h
                    ),
                    (this.shapeCont.style.transform =
                      this.shapeCont.style.webkitTransform =
                        "translate(" +
                        this.currentBBox.x +
                        "px," +
                        this.currentBBox.y +
                        "px)"));
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement,
              ],
              HTextElement
            ),
            (HTextElement.prototype.createContent = function () {
              if (((this.isMasked = this.checkMasks()), this.isMasked)) {
                (this.renderType = "svg"),
                  (this.compW = this.comp.data.w),
                  (this.compH = this.comp.data.h),
                  this.svgElement.setAttribute("width", this.compW),
                  this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), (this.innerElem = t);
              } else
                (this.renderType = "html"),
                  (this.innerElem = this.layerElement);
              this.checkParenting();
            }),
            (HTextElement.prototype.buildNewText = function () {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = this.innerElem.style;
              (e.color = e.fill =
                t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)"),
                t.sc &&
                  ((e.stroke = this.buildColor(t.sc)),
                  (e.strokeWidth = t.sw + "px"));
              var i,
                s,
                r = this.globalData.fontManager.getFontByName(t.f);
              if (!this.globalData.fontManager.chars)
                if (
                  ((e.fontSize = t.finalSize + "px"),
                  (e.lineHeight = t.finalSize + "px"),
                  r.fClass)
                )
                  this.innerElem.className = r.fClass;
                else {
                  e.fontFamily = r.fFamily;
                  var a = t.fWeight,
                    n = t.fStyle;
                  (e.fontStyle = n), (e.fontWeight = a);
                }
              var o,
                h,
                l,
                p = t.l;
              s = p.length;
              var f,
                m = this.mHelper,
                c = "",
                d = 0;
              for (i = 0; i < s; i += 1) {
                if (
                  (this.globalData.fontManager.chars
                    ? (this.textPaths[d]
                        ? (o = this.textPaths[d])
                        : ((o = createNS("path")).setAttribute(
                            "stroke-linecap",
                            "butt"
                          ),
                          o.setAttribute("stroke-linejoin", "round"),
                          o.setAttribute("stroke-miterlimit", "4")),
                      this.isMasked ||
                        (this.textSpans[d]
                          ? (l = (h = this.textSpans[d]).children[0])
                          : (((h = createTag("div")).style.lineHeight = 0),
                            (l = createNS("svg")).appendChild(o),
                            styleDiv(h))))
                    : this.isMasked
                    ? (o = this.textPaths[d]
                        ? this.textPaths[d]
                        : createNS("text"))
                    : this.textSpans[d]
                    ? ((h = this.textSpans[d]), (o = this.textPaths[d]))
                    : (styleDiv((h = createTag("span"))),
                      styleDiv((o = createTag("span"))),
                      h.appendChild(o)),
                  this.globalData.fontManager.chars)
                ) {
                  var u,
                    g = this.globalData.fontManager.getCharData(
                      t.finalText[i],
                      r.fStyle,
                      this.globalData.fontManager.getFontByName(t.f).fFamily
                    );
                  if (
                    ((u = g ? g.data : null),
                    m.reset(),
                    u &&
                      u.shapes &&
                      ((f = u.shapes[0].it),
                      m.scale(t.finalSize / 100, t.finalSize / 100),
                      (c = this.createPathShape(m, f)),
                      o.setAttribute("d", c)),
                    this.isMasked)
                  )
                    this.innerElem.appendChild(o);
                  else {
                    if ((this.innerElem.appendChild(h), u && u.shapes)) {
                      document.body.appendChild(l);
                      var y = l.getBBox();
                      l.setAttribute("width", y.width + 2),
                        l.setAttribute("height", y.height + 2),
                        l.setAttribute(
                          "viewBox",
                          y.x -
                            1 +
                            " " +
                            (y.y - 1) +
                            " " +
                            (y.width + 2) +
                            " " +
                            (y.height + 2)
                        ),
                        (l.style.transform = l.style.webkitTransform =
                          "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)"),
                        (p[i].yOffset = y.y - 1);
                    } else
                      l.setAttribute("width", 1), l.setAttribute("height", 1);
                    h.appendChild(l);
                  }
                } else
                  (o.textContent = p[i].val),
                    o.setAttributeNS(
                      "http://www.w3.org/XML/1998/namespace",
                      "xml:space",
                      "preserve"
                    ),
                    this.isMasked
                      ? this.innerElem.appendChild(o)
                      : (this.innerElem.appendChild(h),
                        (o.style.transform = o.style.webkitTransform =
                          "translate3d(0," + -t.finalSize / 1.2 + "px,0)"));
                this.isMasked
                  ? (this.textSpans[d] = o)
                  : (this.textSpans[d] = h),
                  (this.textSpans[d].style.display = "block"),
                  (this.textPaths[d] = o),
                  (d += 1);
              }
              for (; d < this.textSpans.length; )
                (this.textSpans[d].style.display = "none"), (d += 1);
            }),
            (HTextElement.prototype.renderInnerContent = function () {
              if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                this.isMasked &&
                  this.finalTransform._matMdf &&
                  (this.svgElement.setAttribute(
                    "viewBox",
                    -this.finalTransform.mProp.p.v[0] +
                      " " +
                      -this.finalTransform.mProp.p.v[1] +
                      " " +
                      this.compW +
                      " " +
                      this.compH
                  ),
                  (this.svgElement.style.transform =
                    this.svgElement.style.webkitTransform =
                      "translate(" +
                      -this.finalTransform.mProp.p.v[0] +
                      "px," +
                      -this.finalTransform.mProp.p.v[1] +
                      "px)"));
              }
              if (
                (this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag
                ),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
              ) {
                var t,
                  e,
                  i,
                  s,
                  r,
                  a = 0,
                  n = this.textAnimator.renderedLetters,
                  o = this.textProperty.currentData.l;
                for (e = o.length, t = 0; t < e; t += 1)
                  o[t].n
                    ? (a += 1)
                    : ((s = this.textSpans[t]),
                      (r = this.textPaths[t]),
                      (i = n[a]),
                      (a += 1),
                      i._mdf.m &&
                        (this.isMasked
                          ? s.setAttribute("transform", i.m)
                          : (s.style.transform = s.style.webkitTransform =
                              i.m)),
                      (s.style.opacity = i.o),
                      i.sw && i._mdf.sw && r.setAttribute("stroke-width", i.sw),
                      i.sc && i._mdf.sc && r.setAttribute("stroke", i.sc),
                      i.fc &&
                        i._mdf.fc &&
                        (r.setAttribute("fill", i.fc), (r.style.color = i.fc)));
                if (
                  this.innerElem.getBBox &&
                  !this.hidden &&
                  (this._isFirstFrame || this._mdf)
                ) {
                  var h = this.innerElem.getBBox();
                  this.currentBBox.w !== h.width &&
                    ((this.currentBBox.w = h.width),
                    this.svgElement.setAttribute("width", h.width)),
                    this.currentBBox.h !== h.height &&
                      ((this.currentBBox.h = h.height),
                      this.svgElement.setAttribute("height", h.height)),
                    (this.currentBBox.w === h.width + 2 &&
                      this.currentBBox.h === h.height + 2 &&
                      this.currentBBox.x === h.x - 1 &&
                      this.currentBBox.y === h.y - 1) ||
                      ((this.currentBBox.w = h.width + 2),
                      (this.currentBBox.h = h.height + 2),
                      (this.currentBBox.x = h.x - 1),
                      (this.currentBBox.y = h.y - 1),
                      this.svgElement.setAttribute(
                        "viewBox",
                        this.currentBBox.x +
                          " " +
                          this.currentBBox.y +
                          " " +
                          this.currentBBox.w +
                          " " +
                          this.currentBBox.h
                      ),
                      (this.svgElement.style.transform =
                        this.svgElement.style.webkitTransform =
                          "translate(" +
                          this.currentBBox.x +
                          "px," +
                          this.currentBBox.y +
                          "px)"));
                }
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HSolidElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              HImageElement
            ),
            (HImageElement.prototype.createContent = function () {
              var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image();
              this.data.hasMask
                ? ((this.imageElem = createNS("image")),
                  this.imageElem.setAttribute("width", this.assetData.w + "px"),
                  this.imageElem.setAttribute(
                    "height",
                    this.assetData.h + "px"
                  ),
                  this.imageElem.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    t
                  ),
                  this.layerElement.appendChild(this.imageElem),
                  this.baseElement.setAttribute("width", this.assetData.w),
                  this.baseElement.setAttribute("height", this.assetData.h))
                : this.layerElement.appendChild(e),
                (e.src = t),
                this.data.ln &&
                  this.baseElement.setAttribute("id", this.data.ln);
            }),
            extendPrototype(
              [BaseElement, FrameElement, HierarchyElement],
              HCameraElement
            ),
            (HCameraElement.prototype.setup = function () {
              var t,
                e,
                i = this.comp.threeDElements.length;
              for (t = 0; t < i; t += 1)
                "3d" === (e = this.comp.threeDElements[t]).type &&
                  ((e.perspectiveElem.style.perspective =
                    e.perspectiveElem.style.webkitPerspective =
                      this.pe.v + "px"),
                  (e.container.style.transformOrigin =
                    e.container.style.mozTransformOrigin =
                    e.container.style.webkitTransformOrigin =
                      "0px 0px 0px"),
                  (e.perspectiveElem.style.transform =
                    e.perspectiveElem.style.webkitTransform =
                      "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"));
            }),
            (HCameraElement.prototype.createElements = function () {}),
            (HCameraElement.prototype.hide = function () {}),
            (HCameraElement.prototype.renderFrame = function () {
              var t,
                e,
                i = this._isFirstFrame;
              if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                  i = this.hierarchy[t].finalTransform.mProp._mdf || i;
              if (
                i ||
                this.pe._mdf ||
                (this.p && this.p._mdf) ||
                (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
                this.rx._mdf ||
                this.ry._mdf ||
                this.rz._mdf ||
                this.or._mdf ||
                (this.a && this.a._mdf)
              ) {
                if ((this.mat.reset(), this.hierarchy))
                  for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                    var s = this.hierarchy[t].finalTransform.mProp;
                    this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]),
                      this.mat
                        .rotateX(-s.or.v[0])
                        .rotateY(-s.or.v[1])
                        .rotateZ(s.or.v[2]),
                      this.mat
                        .rotateX(-s.rx.v)
                        .rotateY(-s.ry.v)
                        .rotateZ(s.rz.v),
                      this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]),
                      this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
                  }
                if (
                  (this.p
                    ? this.mat.translate(
                        -this.p.v[0],
                        -this.p.v[1],
                        this.p.v[2]
                      )
                    : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                  this.a)
                ) {
                  var r;
                  r = this.p
                    ? [
                        this.p.v[0] - this.a.v[0],
                        this.p.v[1] - this.a.v[1],
                        this.p.v[2] - this.a.v[2],
                      ]
                    : [
                        this.px.v - this.a.v[0],
                        this.py.v - this.a.v[1],
                        this.pz.v - this.a.v[2],
                      ];
                  var a = Math.sqrt(
                      Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)
                    ),
                    n = [r[0] / a, r[1] / a, r[2] / a],
                    o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                    h = Math.atan2(n[1], o),
                    l = Math.atan2(n[0], -n[2]);
                  this.mat.rotateY(l).rotateX(-h);
                }
                this.mat
                  .rotateX(-this.rx.v)
                  .rotateY(-this.ry.v)
                  .rotateZ(this.rz.v),
                  this.mat
                    .rotateX(-this.or.v[0])
                    .rotateY(-this.or.v[1])
                    .rotateZ(this.or.v[2]),
                  this.mat.translate(
                    this.globalData.compSize.w / 2,
                    this.globalData.compSize.h / 2,
                    0
                  ),
                  this.mat.translate(0, 0, this.pe.v);
                var p = !this._prevMat.equals(this.mat);
                if ((p || this.pe._mdf) && this.comp.threeDElements) {
                  var f;
                  for (
                    e = this.comp.threeDElements.length, t = 0;
                    t < e;
                    t += 1
                  )
                    "3d" === (f = this.comp.threeDElements[t]).type &&
                      (p &&
                        (f.container.style.transform =
                          f.container.style.webkitTransform =
                            this.mat.toCSS()),
                      this.pe._mdf &&
                        (f.perspectiveElem.style.perspective =
                          f.perspectiveElem.style.webkitPerspective =
                            this.pe.v + "px"));
                  this.mat.clone(this._prevMat);
                }
              }
              this._isFirstFrame = !1;
            }),
            (HCameraElement.prototype.prepareFrame = function (t) {
              this.prepareProperties(t, !0);
            }),
            (HCameraElement.prototype.destroy = function () {}),
            (HCameraElement.prototype.getBaseElement = function () {
              return null;
            }),
            (HEffects.prototype.renderFrame = function () {});
          var animationManager = (function () {
              var t = {},
                e = [],
                i = 0,
                s = 0,
                r = 0,
                a = !0,
                n = !1;
              function o(t) {
                for (var i = 0, r = t.target; i < s; )
                  e[i].animation === r &&
                    (e.splice(i, 1), (i -= 1), (s -= 1), r.isPaused || p()),
                    (i += 1);
              }
              function h(t, i) {
                if (!t) return null;
                for (var r = 0; r < s; ) {
                  if (e[r].elem == t && null !== e[r].elem)
                    return e[r].animation;
                  r += 1;
                }
                var a = new AnimationItem();
                return f(a, t), a.setData(t, i), a;
              }
              function l() {
                (r += 1), d();
              }
              function p() {
                r -= 1;
              }
              function f(t, i) {
                t.addEventListener("destroy", o),
                  t.addEventListener("_active", l),
                  t.addEventListener("_idle", p),
                  e.push({ elem: i, animation: t }),
                  (s += 1);
              }
              function m(t) {
                var o,
                  h = t - i;
                for (o = 0; o < s; o += 1) e[o].animation.advanceTime(h);
                (i = t), r && !n ? window.requestAnimationFrame(m) : (a = !0);
              }
              function c(t) {
                (i = t), window.requestAnimationFrame(m);
              }
              function d() {
                !n && r && a && (window.requestAnimationFrame(c), (a = !1));
              }
              return (
                (t.registerAnimation = h),
                (t.loadAnimation = function (t) {
                  var e = new AnimationItem();
                  return f(e, null), e.setParams(t), e;
                }),
                (t.setSpeed = function (t, i) {
                  var r;
                  for (r = 0; r < s; r += 1) e[r].animation.setSpeed(t, i);
                }),
                (t.setDirection = function (t, i) {
                  var r;
                  for (r = 0; r < s; r += 1) e[r].animation.setDirection(t, i);
                }),
                (t.play = function (t) {
                  var i;
                  for (i = 0; i < s; i += 1) e[i].animation.play(t);
                }),
                (t.pause = function (t) {
                  var i;
                  for (i = 0; i < s; i += 1) e[i].animation.pause(t);
                }),
                (t.stop = function (t) {
                  var i;
                  for (i = 0; i < s; i += 1) e[i].animation.stop(t);
                }),
                (t.togglePause = function (t) {
                  var i;
                  for (i = 0; i < s; i += 1) e[i].animation.togglePause(t);
                }),
                (t.searchAnimations = function (t, e, i) {
                  var s,
                    r = [].concat(
                      [].slice.call(document.getElementsByClassName("lottie")),
                      [].slice.call(
                        document.getElementsByClassName("bodymovin")
                      )
                    ),
                    a = r.length;
                  for (s = 0; s < a; s += 1)
                    i && r[s].setAttribute("data-bm-type", i), h(r[s], t);
                  if (e && 0 === a) {
                    i || (i = "svg");
                    var n = document.getElementsByTagName("body")[0];
                    n.innerHTML = "";
                    var o = createTag("div");
                    (o.style.width = "100%"),
                      (o.style.height = "100%"),
                      o.setAttribute("data-bm-type", i),
                      n.appendChild(o),
                      h(o, t);
                  }
                }),
                (t.resize = function () {
                  var t;
                  for (t = 0; t < s; t += 1) e[t].animation.resize();
                }),
                (t.goToAndStop = function (t, i, r) {
                  var a;
                  for (a = 0; a < s; a += 1)
                    e[a].animation.goToAndStop(t, i, r);
                }),
                (t.destroy = function (t) {
                  var i;
                  for (i = s - 1; i >= 0; i -= 1) e[i].animation.destroy(t);
                }),
                (t.freeze = function () {
                  n = !0;
                }),
                (t.unfreeze = function () {
                  (n = !1), d();
                }),
                (t.getRegisteredAnimations = function () {
                  var t,
                    i = e.length,
                    s = [];
                  for (t = 0; t < i; t += 1) s.push(e[t].animation);
                  return s;
                }),
                t
              );
            })(),
            AnimationItem = function () {
              (this._cbs = []),
                (this.name = ""),
                (this.path = ""),
                (this.isLoaded = !1),
                (this.currentFrame = 0),
                (this.currentRawFrame = 0),
                (this.firstFrame = 0),
                (this.totalFrames = 0),
                (this.frameRate = 0),
                (this.frameMult = 0),
                (this.playSpeed = 1),
                (this.playDirection = 1),
                (this.playCount = 0),
                (this.animationData = {}),
                (this.assets = []),
                (this.isPaused = !0),
                (this.autoplay = !1),
                (this.loop = !0),
                (this.renderer = null),
                (this.animationID = createElementID()),
                (this.assetsPath = ""),
                (this.timeCompleted = 0),
                (this.segmentPos = 0),
                (this.isSubframeEnabled = subframeEnabled),
                (this.segments = []),
                (this._idle = !0),
                (this._completedLoop = !1),
                (this.projectInterface = ProjectInterface()),
                (this.imagePreloader = new ImagePreloader());
            };
          extendPrototype([BaseEvent], AnimationItem),
            (AnimationItem.prototype.setParams = function (t) {
              t.context && (this.context = t.context),
                (t.wrapper || t.container) &&
                  (this.wrapper = t.wrapper || t.container);
              var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
              switch (e) {
                case "canvas":
                  this.renderer = new CanvasRenderer(this, t.rendererSettings);
                  break;
                case "svg":
                  this.renderer = new SVGRenderer(this, t.rendererSettings);
                  break;
                default:
                  this.renderer = new HybridRenderer(this, t.rendererSettings);
              }
              this.imagePreloader.setCacheType(e),
                this.renderer.setProjectInterface(this.projectInterface),
                (this.animType = e),
                "" === t.loop ||
                null === t.loop ||
                void 0 === t.loop ||
                !0 === t.loop
                  ? (this.loop = !0)
                  : !1 === t.loop
                  ? (this.loop = !1)
                  : (this.loop = parseInt(t.loop)),
                (this.autoplay = !("autoplay" in t) || t.autoplay),
                (this.name = t.name ? t.name : ""),
                (this.autoloadSegments =
                  !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments),
                (this.assetsPath = t.assetsPath),
                (this.initialSegment = t.initialSegment),
                t.animationData
                  ? this.configAnimation(t.animationData)
                  : t.path &&
                    (-1 !== t.path.lastIndexOf("\\")
                      ? (this.path = t.path.substr(
                          0,
                          t.path.lastIndexOf("\\") + 1
                        ))
                      : (this.path = t.path.substr(
                          0,
                          t.path.lastIndexOf("/") + 1
                        )),
                    (this.fileName = t.path.substr(
                      t.path.lastIndexOf("/") + 1
                    )),
                    (this.fileName = this.fileName.substr(
                      0,
                      this.fileName.lastIndexOf(".json")
                    )),
                    assetLoader.load(
                      t.path,
                      this.configAnimation.bind(this),
                      function () {
                        this.trigger("data_failed");
                      }.bind(this)
                    ));
            }),
            (AnimationItem.prototype.setData = function (t, e) {
              var i = {
                  wrapper: t,
                  animationData: e
                    ? "object" == typeof e
                      ? e
                      : JSON.parse(e)
                    : null,
                },
                s = t.attributes;
              (i.path = s.getNamedItem("data-animation-path")
                ? s.getNamedItem("data-animation-path").value
                : s.getNamedItem("data-bm-path")
                ? s.getNamedItem("data-bm-path").value
                : s.getNamedItem("bm-path")
                ? s.getNamedItem("bm-path").value
                : ""),
                (i.animType = s.getNamedItem("data-anim-type")
                  ? s.getNamedItem("data-anim-type").value
                  : s.getNamedItem("data-bm-type")
                  ? s.getNamedItem("data-bm-type").value
                  : s.getNamedItem("bm-type")
                  ? s.getNamedItem("bm-type").value
                  : s.getNamedItem("data-bm-renderer")
                  ? s.getNamedItem("data-bm-renderer").value
                  : s.getNamedItem("bm-renderer")
                  ? s.getNamedItem("bm-renderer").value
                  : "canvas");
              var r = s.getNamedItem("data-anim-loop")
                ? s.getNamedItem("data-anim-loop").value
                : s.getNamedItem("data-bm-loop")
                ? s.getNamedItem("data-bm-loop").value
                : s.getNamedItem("bm-loop")
                ? s.getNamedItem("bm-loop").value
                : "";
              "" === r ||
                (i.loop = "false" !== r && ("true" === r || parseInt(r)));
              var a = s.getNamedItem("data-anim-autoplay")
                ? s.getNamedItem("data-anim-autoplay").value
                : s.getNamedItem("data-bm-autoplay")
                ? s.getNamedItem("data-bm-autoplay").value
                : !s.getNamedItem("bm-autoplay") ||
                  s.getNamedItem("bm-autoplay").value;
              (i.autoplay = "false" !== a),
                (i.name = s.getNamedItem("data-name")
                  ? s.getNamedItem("data-name").value
                  : s.getNamedItem("data-bm-name")
                  ? s.getNamedItem("data-bm-name").value
                  : s.getNamedItem("bm-name")
                  ? s.getNamedItem("bm-name").value
                  : ""),
                "false" ===
                  (s.getNamedItem("data-anim-prerender")
                    ? s.getNamedItem("data-anim-prerender").value
                    : s.getNamedItem("data-bm-prerender")
                    ? s.getNamedItem("data-bm-prerender").value
                    : s.getNamedItem("bm-prerender")
                    ? s.getNamedItem("bm-prerender").value
                    : "") && (i.prerender = !1),
                this.setParams(i);
            }),
            (AnimationItem.prototype.includeLayers = function (t) {
              t.op > this.animationData.op &&
                ((this.animationData.op = t.op),
                (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
              var e,
                i,
                s = this.animationData.layers,
                r = s.length,
                a = t.layers,
                n = a.length;
              for (i = 0; i < n; i += 1)
                for (e = 0; e < r; ) {
                  if (s[e].id == a[i].id) {
                    s[e] = a[i];
                    break;
                  }
                  e += 1;
                }
              if (
                ((t.chars || t.fonts) &&
                  (this.renderer.globalData.fontManager.addChars(t.chars),
                  this.renderer.globalData.fontManager.addFonts(
                    t.fonts,
                    this.renderer.globalData.defs
                  )),
                t.assets)
              )
                for (r = t.assets.length, e = 0; e < r; e += 1)
                  this.animationData.assets.push(t.assets[e]);
              (this.animationData.__complete = !1),
                dataManager.completeData(
                  this.animationData,
                  this.renderer.globalData.fontManager
                ),
                this.renderer.includeLayers(t.layers),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.loadNextSegment();
            }),
            (AnimationItem.prototype.loadNextSegment = function () {
              var t = this.animationData.segments;
              if (!t || 0 === t.length || !this.autoloadSegments)
                return (
                  this.trigger("data_ready"),
                  void (this.timeCompleted = this.totalFrames)
                );
              var e = t.shift();
              this.timeCompleted = e.time * this.frameRate;
              var i =
                this.path + this.fileName + "_" + this.segmentPos + ".json";
              (this.segmentPos += 1),
                assetLoader.load(
                  i,
                  this.includeLayers.bind(this),
                  function () {
                    this.trigger("data_failed");
                  }.bind(this)
                );
            }),
            (AnimationItem.prototype.loadSegments = function () {
              this.animationData.segments ||
                (this.timeCompleted = this.totalFrames),
                this.loadNextSegment();
            }),
            (AnimationItem.prototype.imagesLoaded = function () {
              this.trigger("loaded_images"), this.checkLoaded();
            }),
            (AnimationItem.prototype.preloadImages = function () {
              this.imagePreloader.setAssetsPath(this.assetsPath),
                this.imagePreloader.setPath(this.path),
                this.imagePreloader.loadAssets(
                  this.animationData.assets,
                  this.imagesLoaded.bind(this)
                );
            }),
            (AnimationItem.prototype.configAnimation = function (t) {
              if (this.renderer)
                try {
                  (this.animationData = t),
                    this.initialSegment
                      ? ((this.totalFrames = Math.floor(
                          this.initialSegment[1] - this.initialSegment[0]
                        )),
                        (this.firstFrame = Math.round(this.initialSegment[0])))
                      : ((this.totalFrames = Math.floor(
                          this.animationData.op - this.animationData.ip
                        )),
                        (this.firstFrame = Math.round(this.animationData.ip))),
                    this.renderer.configAnimation(t),
                    t.assets || (t.assets = []),
                    (this.assets = this.animationData.assets),
                    (this.frameRate = this.animationData.fr),
                    (this.frameMult = this.animationData.fr / 1e3),
                    this.renderer.searchExtraCompositions(t.assets),
                    this.trigger("config_ready"),
                    this.preloadImages(),
                    this.loadSegments(),
                    this.updaFrameModifier(),
                    this.waitForFontsLoaded();
                } catch (t) {
                  this.triggerConfigError(t);
                }
            }),
            (AnimationItem.prototype.waitForFontsLoaded = function () {
              this.renderer &&
                (this.renderer.globalData.fontManager.isLoaded
                  ? this.checkLoaded()
                  : setTimeout(this.waitForFontsLoaded.bind(this), 20));
            }),
            (AnimationItem.prototype.checkLoaded = function () {
              this.isLoaded ||
                !this.renderer.globalData.fontManager.isLoaded ||
                (!this.imagePreloader.loaded() &&
                  "canvas" === this.renderer.rendererType) ||
                ((this.isLoaded = !0),
                dataManager.completeData(
                  this.animationData,
                  this.renderer.globalData.fontManager
                ),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(
                  function () {
                    this.trigger("DOMLoaded");
                  }.bind(this),
                  0
                ),
                this.gotoFrame(),
                this.autoplay && this.play());
            }),
            (AnimationItem.prototype.resize = function () {
              this.renderer.updateContainerSize();
            }),
            (AnimationItem.prototype.setSubframe = function (t) {
              this.isSubframeEnabled = !!t;
            }),
            (AnimationItem.prototype.gotoFrame = function () {
              (this.currentFrame = this.isSubframeEnabled
                ? this.currentRawFrame
                : ~~this.currentRawFrame),
                this.timeCompleted !== this.totalFrames &&
                  this.currentFrame > this.timeCompleted &&
                  (this.currentFrame = this.timeCompleted),
                this.trigger("enterFrame"),
                this.renderFrame();
            }),
            (AnimationItem.prototype.renderFrame = function () {
              if (!1 !== this.isLoaded)
                try {
                  this.renderer.renderFrame(
                    this.currentFrame + this.firstFrame
                  );
                } catch (t) {
                  this.triggerRenderFrameError(t);
                }
            }),
            (AnimationItem.prototype.play = function (t) {
              (t && this.name != t) ||
                (!0 === this.isPaused &&
                  ((this.isPaused = !1),
                  this._idle && ((this._idle = !1), this.trigger("_active"))));
            }),
            (AnimationItem.prototype.pause = function (t) {
              (t && this.name != t) ||
                (!1 === this.isPaused &&
                  ((this.isPaused = !0),
                  (this._idle = !0),
                  this.trigger("_idle")));
            }),
            (AnimationItem.prototype.togglePause = function (t) {
              (t && this.name != t) ||
                (!0 === this.isPaused ? this.play() : this.pause());
            }),
            (AnimationItem.prototype.stop = function (t) {
              (t && this.name != t) ||
                (this.pause(),
                (this.playCount = 0),
                (this._completedLoop = !1),
                this.setCurrentRawFrameValue(0));
            }),
            (AnimationItem.prototype.goToAndStop = function (t, e, i) {
              (i && this.name != i) ||
                (e
                  ? this.setCurrentRawFrameValue(t)
                  : this.setCurrentRawFrameValue(t * this.frameModifier),
                this.pause());
            }),
            (AnimationItem.prototype.goToAndPlay = function (t, e, i) {
              this.goToAndStop(t, e, i), this.play();
            }),
            (AnimationItem.prototype.advanceTime = function (t) {
              if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier,
                  i = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0
                  ? this.loop && this.playCount !== this.loop
                    ? e >= this.totalFrames
                      ? ((this.playCount += 1),
                        this.checkSegments(e % this.totalFrames) ||
                          (this.setCurrentRawFrameValue(e % this.totalFrames),
                          (this._completedLoop = !0),
                          this.trigger("loopComplete")))
                      : this.setCurrentRawFrameValue(e)
                    : this.checkSegments(
                        e > this.totalFrames ? e % this.totalFrames : 0
                      ) || ((i = !0), (e = this.totalFrames - 1))
                  : e < 0
                  ? this.checkSegments(e % this.totalFrames) ||
                    (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                      ? ((i = !0), (e = 0))
                      : (this.setCurrentRawFrameValue(
                          this.totalFrames + (e % this.totalFrames)
                        ),
                        this._completedLoop
                          ? this.trigger("loopComplete")
                          : (this._completedLoop = !0)))
                  : this.setCurrentRawFrameValue(e),
                  i &&
                    (this.setCurrentRawFrameValue(e),
                    this.pause(),
                    this.trigger("complete"));
              }
            }),
            (AnimationItem.prototype.adjustSegment = function (t, e) {
              (this.playCount = 0),
                t[1] < t[0]
                  ? (this.frameModifier > 0 &&
                      (this.playSpeed < 0
                        ? this.setSpeed(-this.playSpeed)
                        : this.setDirection(-1)),
                    (this.timeCompleted = this.totalFrames = t[0] - t[1]),
                    (this.firstFrame = t[1]),
                    this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                  : t[1] > t[0] &&
                    (this.frameModifier < 0 &&
                      (this.playSpeed < 0
                        ? this.setSpeed(-this.playSpeed)
                        : this.setDirection(1)),
                    (this.timeCompleted = this.totalFrames = t[1] - t[0]),
                    (this.firstFrame = t[0]),
                    this.setCurrentRawFrameValue(0.001 + e)),
                this.trigger("segmentStart");
            }),
            (AnimationItem.prototype.setSegment = function (t, e) {
              var i = -1;
              this.isPaused &&
                (this.currentRawFrame + this.firstFrame < t
                  ? (i = t)
                  : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
                (this.firstFrame = t),
                (this.timeCompleted = this.totalFrames = e - t),
                -1 !== i && this.goToAndStop(i, !0);
            }),
            (AnimationItem.prototype.playSegments = function (t, e) {
              if ((e && (this.segments.length = 0), "object" == typeof t[0])) {
                var i,
                  s = t.length;
                for (i = 0; i < s; i += 1) this.segments.push(t[i]);
              } else this.segments.push(t);
              this.segments.length &&
                e &&
                this.adjustSegment(this.segments.shift(), 0),
                this.isPaused && this.play();
            }),
            (AnimationItem.prototype.resetSegments = function (t) {
              (this.segments.length = 0),
                this.segments.push([
                  this.animationData.ip,
                  this.animationData.op,
                ]),
                t && this.checkSegments(0);
            }),
            (AnimationItem.prototype.checkSegments = function (t) {
              return (
                !!this.segments.length &&
                (this.adjustSegment(this.segments.shift(), t), !0)
              );
            }),
            (AnimationItem.prototype.destroy = function (t) {
              (t && this.name != t) ||
                !this.renderer ||
                (this.renderer.destroy(),
                this.imagePreloader.destroy(),
                this.trigger("destroy"),
                (this._cbs = null),
                (this.onEnterFrame =
                  this.onLoopComplete =
                  this.onComplete =
                  this.onSegmentStart =
                  this.onDestroy =
                    null),
                (this.renderer = null));
            }),
            (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
              (this.currentRawFrame = t), this.gotoFrame();
            }),
            (AnimationItem.prototype.setSpeed = function (t) {
              (this.playSpeed = t), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setDirection = function (t) {
              (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.updaFrameModifier = function () {
              this.frameModifier =
                this.frameMult * this.playSpeed * this.playDirection;
            }),
            (AnimationItem.prototype.getPath = function () {
              return this.path;
            }),
            (AnimationItem.prototype.getAssetsPath = function (t) {
              var e = "";
              if (t.e) e = t.p;
              else if (this.assetsPath) {
                var i = t.p;
                -1 !== i.indexOf("images/") && (i = i.split("/")[1]),
                  (e = this.assetsPath + i);
              } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
              return e;
            }),
            (AnimationItem.prototype.getAssetData = function (t) {
              for (var e = 0, i = this.assets.length; e < i; ) {
                if (t == this.assets[e].id) return this.assets[e];
                e += 1;
              }
            }),
            (AnimationItem.prototype.hide = function () {
              this.renderer.hide();
            }),
            (AnimationItem.prototype.show = function () {
              this.renderer.show();
            }),
            (AnimationItem.prototype.getDuration = function (t) {
              return t ? this.totalFrames : this.totalFrames / this.frameRate;
            }),
            (AnimationItem.prototype.trigger = function (t) {
              if (this._cbs && this._cbs[t])
                switch (t) {
                  case "enterFrame":
                    this.triggerEvent(
                      t,
                      new BMEnterFrameEvent(
                        t,
                        this.currentFrame,
                        this.totalFrames,
                        this.frameModifier
                      )
                    );
                    break;
                  case "loopComplete":
                    this.triggerEvent(
                      t,
                      new BMCompleteLoopEvent(
                        t,
                        this.loop,
                        this.playCount,
                        this.frameMult
                      )
                    );
                    break;
                  case "complete":
                    this.triggerEvent(
                      t,
                      new BMCompleteEvent(t, this.frameMult)
                    );
                    break;
                  case "segmentStart":
                    this.triggerEvent(
                      t,
                      new BMSegmentStartEvent(
                        t,
                        this.firstFrame,
                        this.totalFrames
                      )
                    );
                    break;
                  case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                  default:
                    this.triggerEvent(t);
                }
              "enterFrame" === t &&
                this.onEnterFrame &&
                this.onEnterFrame.call(
                  this,
                  new BMEnterFrameEvent(
                    t,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameMult
                  )
                ),
                "loopComplete" === t &&
                  this.onLoopComplete &&
                  this.onLoopComplete.call(
                    this,
                    new BMCompleteLoopEvent(
                      t,
                      this.loop,
                      this.playCount,
                      this.frameMult
                    )
                  ),
                "complete" === t &&
                  this.onComplete &&
                  this.onComplete.call(
                    this,
                    new BMCompleteEvent(t, this.frameMult)
                  ),
                "segmentStart" === t &&
                  this.onSegmentStart &&
                  this.onSegmentStart.call(
                    this,
                    new BMSegmentStartEvent(
                      t,
                      this.firstFrame,
                      this.totalFrames
                    )
                  ),
                "destroy" === t &&
                  this.onDestroy &&
                  this.onDestroy.call(this, new BMDestroyEvent(t, this));
            }),
            (AnimationItem.prototype.triggerRenderFrameError = function (t) {
              var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
              this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e);
            }),
            (AnimationItem.prototype.triggerConfigError = function (t) {
              var e = new BMConfigErrorEvent(t, this.currentFrame);
              this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e);
            });
          var Expressions = (function () {
            var t = {
              initExpressions: function (t) {
                var e = 0,
                  i = [];
                (t.renderer.compInterface = CompExpressionInterface(
                  t.renderer
                )),
                  t.renderer.globalData.projectInterface.registerComposition(
                    t.renderer
                  ),
                  (t.renderer.globalData.pushExpression = function () {
                    e += 1;
                  }),
                  (t.renderer.globalData.popExpression = function () {
                    0 == (e -= 1) &&
                      (function () {
                        var t,
                          e = i.length;
                        for (t = 0; t < e; t += 1) i[t].release();
                        i.length = 0;
                      })();
                  }),
                  (t.renderer.globalData.registerExpressionProperty = function (
                    t
                  ) {
                    -1 === i.indexOf(t) && i.push(t);
                  });
              },
            };
            return t;
          })();
          expressionsPlugin = Expressions;
          var ExpressionManager = (function () {
              var ob = {},
                Math = BMMath,
                window = null,
                document = null;
              function $bm_isInstanceOfArray(t) {
                return (
                  t.constructor === Array || t.constructor === Float32Array
                );
              }
              function isNumerable(t, e) {
                return (
                  "number" === t ||
                  "boolean" === t ||
                  "string" === t ||
                  e instanceof Number
                );
              }
              function $bm_neg(t) {
                var e = typeof t;
                if ("number" === e || "boolean" === e || t instanceof Number)
                  return -t;
                if ($bm_isInstanceOfArray(t)) {
                  var i,
                    s = t.length,
                    r = [];
                  for (i = 0; i < s; i += 1) r[i] = -t[i];
                  return r;
                }
                return t.propType ? t.v : void 0;
              }
              var easeInBez = BezierFactory.getBezierEasing(
                  0.333,
                  0,
                  0.833,
                  0.833,
                  "easeIn"
                ).get,
                easeOutBez = BezierFactory.getBezierEasing(
                  0.167,
                  0.167,
                  0.667,
                  1,
                  "easeOut"
                ).get,
                easeInOutBez = BezierFactory.getBezierEasing(
                  0.33,
                  0,
                  0.667,
                  1,
                  "easeInOut"
                ).get;
              function sum(t, e) {
                var i = typeof t,
                  s = typeof e;
                if ("string" === i || "string" === s) return t + e;
                if (isNumerable(i, t) && isNumerable(s, e)) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
                  return ((t = t.slice(0))[0] = t[0] + e), t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                  return ((e = e.slice(0))[0] = t + e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (
                    var r = 0, a = t.length, n = e.length, o = [];
                    r < a || r < n;

                  )
                    ("number" == typeof t[r] || t[r] instanceof Number) &&
                    ("number" == typeof e[r] || e[r] instanceof Number)
                      ? (o[r] = t[r] + e[r])
                      : (o[r] = void 0 === e[r] ? t[r] : t[r] || e[r]),
                      (r += 1);
                  return o;
                }
                return 0;
              }
              var add = sum;
              function sub(t, e) {
                var i = typeof t,
                  s = typeof e;
                if (isNumerable(i, t) && isNumerable(s, e))
                  return (
                    "string" === i && (t = parseInt(t)),
                    "string" === s && (e = parseInt(e)),
                    t - e
                  );
                if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
                  return ((t = t.slice(0))[0] = t[0] - e), t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                  return ((e = e.slice(0))[0] = t - e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (
                    var r = 0, a = t.length, n = e.length, o = [];
                    r < a || r < n;

                  )
                    ("number" == typeof t[r] || t[r] instanceof Number) &&
                    ("number" == typeof e[r] || e[r] instanceof Number)
                      ? (o[r] = t[r] - e[r])
                      : (o[r] = void 0 === e[r] ? t[r] : t[r] || e[r]),
                      (r += 1);
                  return o;
                }
                return 0;
              }
              function mul(t, e) {
                var i,
                  s,
                  r,
                  a = typeof t,
                  n = typeof e;
                if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  for (
                    r = t.length, i = createTypedArray("float32", r), s = 0;
                    s < r;
                    s += 1
                  )
                    i[s] = t[s] * e;
                  return i;
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                  for (
                    r = e.length, i = createTypedArray("float32", r), s = 0;
                    s < r;
                    s += 1
                  )
                    i[s] = t * e[s];
                  return i;
                }
                return 0;
              }
              function div(t, e) {
                var i,
                  s,
                  r,
                  a = typeof t,
                  n = typeof e;
                if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  for (
                    r = t.length, i = createTypedArray("float32", r), s = 0;
                    s < r;
                    s += 1
                  )
                    i[s] = t[s] / e;
                  return i;
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                  for (
                    r = e.length, i = createTypedArray("float32", r), s = 0;
                    s < r;
                    s += 1
                  )
                    i[s] = t / e[s];
                  return i;
                }
                return 0;
              }
              function mod(t, e) {
                return (
                  "string" == typeof t && (t = parseInt(t)),
                  "string" == typeof e && (e = parseInt(e)),
                  t % e
                );
              }
              var $bm_sum = sum,
                $bm_sub = sub,
                $bm_mul = mul,
                $bm_div = div,
                $bm_mod = mod;
              function clamp(t, e, i) {
                if (e > i) {
                  var s = i;
                  (i = e), (e = s);
                }
                return Math.min(Math.max(t, e), i);
              }
              function radiansToDegrees(t) {
                return t / degToRads;
              }
              var radians_to_degrees = radiansToDegrees;
              function degreesToRadians(t) {
                return t * degToRads;
              }
              var degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];
              function length(t, e) {
                if ("number" == typeof t || t instanceof Number)
                  return (e = e || 0), Math.abs(t - e);
                e || (e = helperLengthArray);
                var i,
                  s = Math.min(t.length, e.length),
                  r = 0;
                for (i = 0; i < s; i += 1) r += Math.pow(e[i] - t[i], 2);
                return Math.sqrt(r);
              }
              function normalize(t) {
                return div(t, length(t));
              }
              function rgbToHsl(t) {
                var e,
                  i,
                  s = t[0],
                  r = t[1],
                  a = t[2],
                  n = Math.max(s, r, a),
                  o = Math.min(s, r, a),
                  h = (n + o) / 2;
                if (n == o) e = i = 0;
                else {
                  var l = n - o;
                  switch (((i = h > 0.5 ? l / (2 - n - o) : l / (n + o)), n)) {
                    case s:
                      e = (r - a) / l + (r < a ? 6 : 0);
                      break;
                    case r:
                      e = (a - s) / l + 2;
                      break;
                    case a:
                      e = (s - r) / l + 4;
                  }
                  e /= 6;
                }
                return [e, i, h, t[3]];
              }
              function hue2rgb(t, e, i) {
                return (
                  i < 0 && (i += 1),
                  i > 1 && (i -= 1),
                  i < 1 / 6
                    ? t + 6 * (e - t) * i
                    : i < 0.5
                    ? e
                    : i < 2 / 3
                    ? t + (e - t) * (2 / 3 - i) * 6
                    : t
                );
              }
              function hslToRgb(t) {
                var e,
                  i,
                  s,
                  r = t[0],
                  a = t[1],
                  n = t[2];
                if (0 === a) e = i = s = n;
                else {
                  var o = n < 0.5 ? n * (1 + a) : n + a - n * a,
                    h = 2 * n - o;
                  (e = hue2rgb(h, o, r + 1 / 3)),
                    (i = hue2rgb(h, o, r)),
                    (s = hue2rgb(h, o, r - 1 / 3));
                }
                return [e, i, s, t[3]];
              }
              function linear(t, e, i, s, r) {
                if (
                  ((void 0 !== s && void 0 !== r) ||
                    ((s = e), (r = i), (e = 0), (i = 1)),
                  i < e)
                ) {
                  var a = i;
                  (i = e), (e = a);
                }
                if (t <= e) return s;
                if (t >= i) return r;
                var n = i === e ? 0 : (t - e) / (i - e);
                if (!s.length) return s + (r - s) * n;
                var o,
                  h = s.length,
                  l = createTypedArray("float32", h);
                for (o = 0; o < h; o += 1) l[o] = s[o] + (r[o] - s[o]) * n;
                return l;
              }
              function random(t, e) {
                if (
                  (void 0 === e &&
                    (void 0 === t
                      ? ((t = 0), (e = 1))
                      : ((e = t), (t = void 0))),
                  e.length)
                ) {
                  var i,
                    s = e.length;
                  t || (t = createTypedArray("float32", s));
                  var r = createTypedArray("float32", s),
                    a = BMMath.random();
                  for (i = 0; i < s; i += 1) r[i] = t[i] + a * (e[i] - t[i]);
                  return r;
                }
                return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
              }
              function createPath(t, e, i, s) {
                var r,
                  a = t.length,
                  n = shape_pool.newElement();
                n.setPathData(!!s, a);
                var o,
                  h,
                  l = [0, 0];
                for (r = 0; r < a; r += 1)
                  (o = e && e[r] ? e[r] : l),
                    (h = i && i[r] ? i[r] : l),
                    n.setTripleAt(
                      t[r][0],
                      t[r][1],
                      h[0] + t[r][0],
                      h[1] + t[r][1],
                      o[0] + t[r][0],
                      o[1] + t[r][1],
                      r,
                      !0
                    );
                return n;
              }
              function initiateExpression(elem, data, property) {
                var val = data.x,
                  needsVelocity = /velocity(?![\w\d])/.test(val),
                  _needsRandom = -1 !== val.indexOf("random"),
                  elemType = elem.data.ty,
                  transform,
                  $bm_transform,
                  content,
                  effect,
                  thisProperty = property;
                (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                  Object.defineProperty(thisProperty, "value", {
                    get: function () {
                      return thisProperty.v;
                    },
                  }),
                  (elem.comp.frameDuration =
                    1 / elem.comp.globalData.frameRate),
                  (elem.comp.displayStartTime = 0);
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                  outPoint = elem.data.op / elem.comp.globalData.frameRate,
                  width = elem.data.sw ? elem.data.sw : 0,
                  height = elem.data.sh ? elem.data.sh : 0,
                  name = elem.data.nm,
                  loopIn,
                  loop_in,
                  loopOut,
                  loop_out,
                  smooth,
                  toWorld,
                  fromWorld,
                  fromComp,
                  toComp,
                  fromCompToSurface,
                  position,
                  rotation,
                  anchorPoint,
                  scale,
                  thisLayer,
                  thisComp,
                  mask,
                  valueAtTime,
                  velocityAtTime,
                  __expression_functions = [],
                  scoped_bm_rt;
                if (data.xf) {
                  var i,
                    len = data.xf.length;
                  for (i = 0; i < len; i += 1)
                    __expression_functions[i] = eval(
                      "(function(){ return " + data.xf[i] + "}())"
                    );
                }
                var expression_function = eval(
                    "[function _expression_function(){" +
                      val +
                      ";scoped_bm_rt=$bm_rt}]"
                  )[0],
                  numKeys = property.kf ? data.k.length : 0,
                  active = !this.data || !0 !== this.data.hd,
                  wiggle = function (t, e) {
                    var i,
                      s,
                      r = this.pv.length ? this.pv.length : 1,
                      a = createTypedArray("float32", r),
                      n = Math.floor(5 * time);
                    for (i = 0, s = 0; i < n; ) {
                      for (s = 0; s < r; s += 1)
                        a[s] += -e + 2 * e * BMMath.random();
                      i += 1;
                    }
                    var o = 5 * time,
                      h = o - Math.floor(o),
                      l = createTypedArray("float32", r);
                    if (r > 1) {
                      for (s = 0; s < r; s += 1)
                        l[s] =
                          this.pv[s] +
                          a[s] +
                          (-e + 2 * e * BMMath.random()) * h;
                      return l;
                    }
                    return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
                  }.bind(this);
                function loopInDuration(t, e) {
                  return loopIn(t, e, !0);
                }
                function loopOutDuration(t, e) {
                  return loopOut(t, e, !0);
                }
                thisProperty.loopIn &&
                  ((loopIn = thisProperty.loopIn.bind(thisProperty)),
                  (loop_in = loopIn)),
                  thisProperty.loopOut &&
                    ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                    (loop_out = loopOut)),
                  thisProperty.smooth &&
                    (smooth = thisProperty.smooth.bind(thisProperty)),
                  this.getValueAtTime &&
                    (valueAtTime = this.getValueAtTime.bind(this)),
                  this.getVelocityAtTime &&
                    (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(
                    elem.comp.globalData.projectInterface
                  ),
                  time,
                  velocity,
                  value,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue;
                function lookAt(t, e) {
                  var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                    s =
                      Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) /
                      degToRads;
                  return [-Math.atan2(i[1], i[2]) / degToRads, s, 0];
                }
                function easeOut(t, e, i, s, r) {
                  return applyEase(easeOutBez, t, e, i, s, r);
                }
                function easeIn(t, e, i, s, r) {
                  return applyEase(easeInBez, t, e, i, s, r);
                }
                function ease(t, e, i, s, r) {
                  return applyEase(easeInOutBez, t, e, i, s, r);
                }
                function applyEase(t, e, i, s, r, a) {
                  void 0 === r ? ((r = i), (a = s)) : (e = (e - i) / (s - i));
                  var n = t((e = e > 1 ? 1 : e < 0 ? 0 : e));
                  if ($bm_isInstanceOfArray(r)) {
                    var o,
                      h = r.length,
                      l = createTypedArray("float32", h);
                    for (o = 0; o < h; o += 1) l[o] = (a[o] - r[o]) * n + r[o];
                    return l;
                  }
                  return (a - r) * n + r;
                }
                function nearestKey(t) {
                  var e,
                    i,
                    s,
                    r = data.k.length;
                  if (data.k.length && "number" != typeof data.k[0])
                    if (
                      ((i = -1),
                      (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                    )
                      (i = 1), (s = data.k[0].t);
                    else {
                      for (e = 0; e < r - 1; e += 1) {
                        if (t === data.k[e].t) {
                          (i = e + 1), (s = data.k[e].t);
                          break;
                        }
                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                          t - data.k[e].t > data.k[e + 1].t - t
                            ? ((i = e + 2), (s = data.k[e + 1].t))
                            : ((i = e + 1), (s = data.k[e].t));
                          break;
                        }
                      }
                      -1 === i && ((i = e + 1), (s = data.k[e].t));
                    }
                  else (i = 0), (s = 0);
                  var a = {};
                  return (
                    (a.index = i),
                    (a.time = s / elem.comp.globalData.frameRate),
                    a
                  );
                }
                function key(t) {
                  var e, i, s;
                  if (!data.k.length || "number" == typeof data.k[0])
                    throw new Error(
                      "The property has no keyframe at index " + t
                    );
                  (t -= 1),
                    (e = {
                      time: data.k[t].t / elem.comp.globalData.frameRate,
                      value: [],
                    });
                  var r = data.k[t].hasOwnProperty("s")
                    ? data.k[t].s
                    : data.k[t - 1].e;
                  for (s = r.length, i = 0; i < s; i += 1)
                    (e[i] = r[i]), (e.value[i] = r[i]);
                  return e;
                }
                function framesToTime(t, e) {
                  return e || (e = elem.comp.globalData.frameRate), t / e;
                }
                function timeToFrames(t, e) {
                  return (
                    t || 0 === t || (t = time),
                    e || (e = elem.comp.globalData.frameRate),
                    t * e
                  );
                }
                function seedRandom(t) {
                  BMMath.seedrandom(randSeed + t);
                }
                function sourceRectAtTime() {
                  return elem.sourceRectAtTime();
                }
                function substring(t, e) {
                  return "string" == typeof value
                    ? void 0 === e
                      ? value.substring(t)
                      : value.substring(t, e)
                    : "";
                }
                function substr(t, e) {
                  return "string" == typeof value
                    ? void 0 === e
                      ? value.substr(t)
                      : value.substr(t, e)
                    : "";
                }
                function posterizeTime(t) {
                  (time = 0 === t ? 0 : Math.floor(time * t) / t),
                    (value = valueAtTime(time));
                }
                var index = elem.data.ind,
                  hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                  parent,
                  randSeed = Math.floor(1e6 * Math.random()),
                  globalData = elem.globalData;
                function executeExpression(t) {
                  return (
                    (value = t),
                    _needsRandom && seedRandom(randSeed),
                    this.frameExpressionId === elem.globalData.frameId &&
                    "textSelector" !== this.propType
                      ? value
                      : ("textSelector" === this.propType &&
                          ((textIndex = this.textIndex),
                          (textTotal = this.textTotal),
                          (selectorValue = this.selectorValue)),
                        thisLayer ||
                          ((text = elem.layerInterface.text),
                          (thisLayer = elem.layerInterface),
                          (thisComp = elem.comp.compInterface),
                          (toWorld = thisLayer.toWorld.bind(thisLayer)),
                          (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                          (fromComp = thisLayer.fromComp.bind(thisLayer)),
                          (toComp = thisLayer.toComp.bind(thisLayer)),
                          (mask = thisLayer.mask
                            ? thisLayer.mask.bind(thisLayer)
                            : null),
                          (fromCompToSurface = fromComp)),
                        transform ||
                          ((transform = elem.layerInterface(
                            "ADBE Transform Group"
                          )),
                          ($bm_transform = transform),
                          transform && (anchorPoint = transform.anchorPoint)),
                        4 !== elemType ||
                          content ||
                          (content = thisLayer("ADBE Root Vectors Group")),
                        effect || (effect = thisLayer(4)),
                        (hasParent = !(
                          !elem.hierarchy || !elem.hierarchy.length
                        )) &&
                          !parent &&
                          (parent = elem.hierarchy[0].layerInterface),
                        (time =
                          this.comp.renderedFrame /
                          this.comp.globalData.frameRate),
                        needsVelocity && (velocity = velocityAtTime(time)),
                        expression_function(),
                        (this.frameExpressionId = elem.globalData.frameId),
                        "shape" === scoped_bm_rt.propType &&
                          (scoped_bm_rt = scoped_bm_rt.v),
                        scoped_bm_rt)
                  );
                }
                return executeExpression;
              }
              return (ob.initiateExpression = initiateExpression), ob;
            })(),
            expressionHelpers = {
              searchExpressions: function (t, e, i) {
                e.x &&
                  ((i.k = !0),
                  (i.x = !0),
                  (i.initiateExpression = ExpressionManager.initiateExpression),
                  i.effectsSequence.push(
                    i.initiateExpression(t, e, i).bind(i)
                  ));
              },
              getSpeedAtTime: function (t) {
                var e = this.getValueAtTime(t),
                  i = this.getValueAtTime(t + -0.01),
                  s = 0;
                if (e.length) {
                  var r;
                  for (r = 0; r < e.length; r += 1)
                    s += Math.pow(i[r] - e[r], 2);
                  s = 100 * Math.sqrt(s);
                } else s = 0;
                return s;
              },
              getVelocityAtTime: function (t) {
                if (void 0 !== this.vel) return this.vel;
                var e,
                  i,
                  s = -0.001,
                  r = this.getValueAtTime(t),
                  a = this.getValueAtTime(t + s);
                if (r.length)
                  for (
                    e = createTypedArray("float32", r.length), i = 0;
                    i < r.length;
                    i += 1
                  )
                    e[i] = (a[i] - r[i]) / s;
                else e = (a - r) / s;
                return e;
              },
              getValueAtTime: function (t) {
                return (
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastFrame < t
                        ? this._cachingAtTime.lastIndex
                        : 0),
                    (this._cachingAtTime.value = this.interpolateValue(
                      t,
                      this._cachingAtTime
                    )),
                    (this._cachingAtTime.lastFrame = t)),
                  this._cachingAtTime.value
                );
              },
              getStaticValueAtTime: function () {
                return this.pv;
              },
              setGroupProperty: function (t) {
                this.propertyGroup = t;
              },
            };
          !(function () {
            function t(t, e, i) {
              if (!this.k || !this.keyframes) return this.pv;
              t = t ? t.toLowerCase() : "";
              var s,
                r,
                a,
                n,
                o,
                h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[l.length - 1].t;
              if (h <= p) return this.pv;
              if (
                (i
                  ? (r =
                      p -
                      (s = e
                        ? Math.abs(p - elem.comp.globalData.frameRate * e)
                        : Math.max(0, p - this.elem.data.ip)))
                  : ((!e || e > l.length - 1) && (e = l.length - 1),
                    (s = p - (r = l[l.length - 1 - e].t))),
                "pingpong" === t)
              ) {
                if (Math.floor((h - r) / s) % 2 != 0)
                  return this.getValueAtTime(
                    (s - ((h - r) % s) + r) / this.comp.globalData.frameRate,
                    0
                  );
              } else {
                if ("offset" === t) {
                  var f = this.getValueAtTime(
                      r / this.comp.globalData.frameRate,
                      0
                    ),
                    m = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    c = this.getValueAtTime(
                      (((h - r) % s) + r) / this.comp.globalData.frameRate,
                      0
                    ),
                    d = Math.floor((h - r) / s);
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(f.length)).length, a = 0;
                      a < n;
                      a += 1
                    )
                      o[a] = (m[a] - f[a]) * d + c[a];
                    return o;
                  }
                  return (m - f) * d + c;
                }
                if ("continue" === t) {
                  var u = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    g = this.getValueAtTime(
                      (p - 0.001) / this.comp.globalData.frameRate,
                      0
                    );
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(u.length)).length, a = 0;
                      a < n;
                      a += 1
                    )
                      o[a] =
                        u[a] +
                        ((u[a] - g[a]) *
                          ((h - p) / this.comp.globalData.frameRate)) /
                          5e-4;
                    return o;
                  }
                  return u + ((h - p) / 0.001) * (u - g);
                }
              }
              return this.getValueAtTime(
                (((h - r) % s) + r) / this.comp.globalData.frameRate,
                0
              );
            }
            function e(t, e, i) {
              if (!this.k) return this.pv;
              t = t ? t.toLowerCase() : "";
              var s,
                r,
                a,
                n,
                o,
                h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[0].t;
              if (h >= p) return this.pv;
              if (
                (i
                  ? (r =
                      p +
                      (s = e
                        ? Math.abs(elem.comp.globalData.frameRate * e)
                        : Math.max(0, this.elem.data.op - p)))
                  : ((!e || e > l.length - 1) && (e = l.length - 1),
                    (s = (r = l[e].t) - p)),
                "pingpong" === t)
              ) {
                if (Math.floor((p - h) / s) % 2 == 0)
                  return this.getValueAtTime(
                    (((p - h) % s) + p) / this.comp.globalData.frameRate,
                    0
                  );
              } else {
                if ("offset" === t) {
                  var f = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    m = this.getValueAtTime(
                      r / this.comp.globalData.frameRate,
                      0
                    ),
                    c = this.getValueAtTime(
                      (s - ((p - h) % s) + p) / this.comp.globalData.frameRate,
                      0
                    ),
                    d = Math.floor((p - h) / s) + 1;
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(f.length)).length, a = 0;
                      a < n;
                      a += 1
                    )
                      o[a] = c[a] - (m[a] - f[a]) * d;
                    return o;
                  }
                  return c - (m - f) * d;
                }
                if ("continue" === t) {
                  var u = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    g = this.getValueAtTime(
                      (p + 0.001) / this.comp.globalData.frameRate,
                      0
                    );
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(u.length)).length, a = 0;
                      a < n;
                      a += 1
                    )
                      o[a] = u[a] + ((u[a] - g[a]) * (p - h)) / 0.001;
                    return o;
                  }
                  return u + ((u - g) * (p - h)) / 0.001;
                }
              }
              return this.getValueAtTime(
                (s - ((p - h) % s) + p) / this.comp.globalData.frameRate,
                0
              );
            }
            function i(t, e) {
              if (!this.k) return this.pv;
              if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
                return this.pv;
              var i,
                s,
                r = this.comp.renderedFrame / this.comp.globalData.frameRate,
                a = r - t,
                n = e > 1 ? (r + t - a) / (e - 1) : 1,
                o = 0,
                h = 0;
              for (
                i = this.pv.length
                  ? createTypedArray("float32", this.pv.length)
                  : 0;
                o < e;

              ) {
                if (((s = this.getValueAtTime(a + o * n)), this.pv.length))
                  for (h = 0; h < this.pv.length; h += 1) i[h] += s[h];
                else i += s;
                o += 1;
              }
              if (this.pv.length)
                for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
              else i /= e;
              return i;
            }
            function s(t) {
              console.warn("Transform at time not supported");
            }
            function r(t) {}
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (t, e, i) {
              var n = a(t, e, i);
              return (
                n.dynamicProperties.length
                  ? (n.getValueAtTime = s.bind(n))
                  : (n.getValueAtTime = r.bind(n)),
                (n.setGroupProperty = expressionHelpers.setGroupProperty),
                n
              );
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function (s, r, a, o, h) {
              var l = n(s, r, a, o, h);
              l.kf
                ? (l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l))
                : (l.getValueAtTime =
                    expressionHelpers.getStaticValueAtTime.bind(l)),
                (l.setGroupProperty = expressionHelpers.setGroupProperty),
                (l.loopOut = t),
                (l.loopIn = e),
                (l.smooth = i),
                (l.getVelocityAtTime =
                  expressionHelpers.getVelocityAtTime.bind(l)),
                (l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l)),
                (l.numKeys = 1 === r.a ? r.k.length : 0),
                (l.propertyIndex = r.ix);
              var p = 0;
              return (
                0 !== a &&
                  (p = createTypedArray(
                    "float32",
                    1 === r.a ? r.k[0].s.length : r.k.length
                  )),
                (l._cachingAtTime = {
                  lastFrame: initialDefaultFrame,
                  lastIndex: 0,
                  value: p,
                }),
                expressionHelpers.searchExpressions(s, r, l),
                l.k && h.addDynamicProperty(l),
                l
              );
            };
            var o = ShapePropertyFactory.getConstructorFunction(),
              h = ShapePropertyFactory.getKeyframedConstructorFunction();
            function l() {}
            (l.prototype = {
              vertices: function (t, e) {
                this.k && this.getValue();
                var i = this.v;
                void 0 !== e && (i = this.getValueAtTime(e, 0));
                var s,
                  r = i._length,
                  a = i[t],
                  n = i.v,
                  o = createSizedArray(r);
                for (s = 0; s < r; s += 1)
                  o[s] =
                    "i" === t || "o" === t
                      ? [a[s][0] - n[s][0], a[s][1] - n[s][1]]
                      : [a[s][0], a[s][1]];
                return o;
              },
              points: function (t) {
                return this.vertices("v", t);
              },
              inTangents: function (t) {
                return this.vertices("i", t);
              },
              outTangents: function (t) {
                return this.vertices("o", t);
              },
              isClosed: function () {
                return this.v.c;
              },
              pointOnPath: function (t, e) {
                var i = this.v;
                void 0 !== e && (i = this.getValueAtTime(e, 0)),
                  this._segmentsLength ||
                    (this._segmentsLength = bez.getSegmentsLength(i));
                for (
                  var s,
                    r = this._segmentsLength,
                    a = r.lengths,
                    n = r.totalLength * t,
                    o = 0,
                    h = a.length,
                    l = 0;
                  o < h;

                ) {
                  if (l + a[o].addedLength > n) {
                    var p = o,
                      f = i.c && o === h - 1 ? 0 : o + 1,
                      m = (n - l) / a[o].addedLength;
                    s = bez.getPointInSegment(
                      i.v[p],
                      i.v[f],
                      i.o[p],
                      i.i[f],
                      m,
                      a[o]
                    );
                    break;
                  }
                  (l += a[o].addedLength), (o += 1);
                }
                return (
                  s ||
                    (s = i.c
                      ? [i.v[0][0], i.v[0][1]]
                      : [i.v[i._length - 1][0], i.v[i._length - 1][1]]),
                  s
                );
              },
              vectorOnPath: function (t, e, i) {
                t = 1 == t ? (this.v.c ? 0 : 0.999) : t;
                var s = this.pointOnPath(t, e),
                  r = this.pointOnPath(t + 0.001, e),
                  a = r[0] - s[0],
                  n = r[1] - s[1],
                  o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                return 0 === o
                  ? [0, 0]
                  : "tangent" === i
                  ? [a / o, n / o]
                  : [-n / o, a / o];
              },
              tangentOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "tangent");
              },
              normalOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "normal");
              },
              setGroupProperty: expressionHelpers.setGroupProperty,
              getValueAtTime: expressionHelpers.getStaticValueAtTime,
            }),
              extendPrototype([l], o),
              extendPrototype([l], h),
              (h.prototype.getValueAtTime = function (t) {
                return (
                  this._cachingAtTime ||
                    (this._cachingAtTime = {
                      shapeValue: shape_pool.clone(this.pv),
                      lastIndex: 0,
                      lastTime: initialDefaultFrame,
                    }),
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastTime < t
                        ? this._caching.lastIndex
                        : 0),
                    (this._cachingAtTime.lastTime = t),
                    this.interpolateShape(
                      t,
                      this._cachingAtTime.shapeValue,
                      this._cachingAtTime
                    )),
                  this._cachingAtTime.shapeValue
                );
              }),
              (h.prototype.initiateExpression =
                ExpressionManager.initiateExpression);
            var p = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (t, e, i, s, r) {
              var a = p(t, e, i, s, r);
              return (
                (a.propertyIndex = e.ix),
                (a.lock = !1),
                3 === i
                  ? expressionHelpers.searchExpressions(t, e.pt, a)
                  : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a),
                a.k && t.addDynamicProperty(a),
                a
              );
            };
          })(),
            (TextProperty.prototype.getExpressionValue = function (t, e) {
              var i = this.calculateExpression(e);
              if (t.t !== i) {
                var s = {};
                return (
                  this.copyData(s, t),
                  (s.t = i.toString()),
                  (s.__complete = !1),
                  s
                );
              }
              return t;
            }),
            (TextProperty.prototype.searchProperty = function () {
              var t = this.searchKeyframes(),
                e = this.searchExpressions();
              return (this.kf = t || e), this.kf;
            }),
            (TextProperty.prototype.searchExpressions = function () {
              if (this.data.d.x)
                return (
                  (this.calculateExpression =
                    ExpressionManager.initiateExpression.bind(this)(
                      this.elem,
                      this.data.d,
                      this
                    )),
                  this.addEffect(this.getExpressionValue.bind(this)),
                  !0
                );
            });
          var ShapeExpressionInterface = (function () {
              function t(t, f, m) {
                var c,
                  d = [],
                  u = t ? t.length : 0;
                for (c = 0; c < u; c += 1)
                  "gr" == t[c].ty
                    ? d.push(e(t[c], f[c], m))
                    : "fl" == t[c].ty
                    ? d.push(i(t[c], f[c], m))
                    : "st" == t[c].ty
                    ? d.push(s(t[c], f[c], m))
                    : "tm" == t[c].ty
                    ? d.push(r(t[c], f[c], m))
                    : "tr" == t[c].ty ||
                      ("el" == t[c].ty
                        ? d.push(a(t[c], f[c], m))
                        : "sr" == t[c].ty
                        ? d.push(n(t[c], f[c], m))
                        : "sh" == t[c].ty
                        ? d.push(p(t[c], f[c], m))
                        : "rc" == t[c].ty
                        ? d.push(o(t[c], f[c], m))
                        : "rd" == t[c].ty
                        ? d.push(h(t[c], f[c], m))
                        : "rp" == t[c].ty && d.push(l(t[c], f[c], m)));
                return d;
              }
              function e(e, i, s) {
                var r = function (t) {
                  switch (t) {
                    case "ADBE Vectors Group":
                    case "Contents":
                    case 2:
                      return r.content;
                    default:
                      return r.transform;
                  }
                };
                r.propertyGroup = function (t) {
                  return 1 === t ? r : s(t - 1);
                };
                var a = (function (e, i, s) {
                    var r,
                      a = function (t) {
                        for (var e = 0, i = r.length; e < i; ) {
                          if (
                            r[e]._name === t ||
                            r[e].mn === t ||
                            r[e].propertyIndex === t ||
                            r[e].ix === t ||
                            r[e].ind === t
                          )
                            return r[e];
                          e += 1;
                        }
                        if ("number" == typeof t) return r[t - 1];
                      };
                    return (
                      (a.propertyGroup = function (t) {
                        return 1 === t ? a : s(t - 1);
                      }),
                      (r = t(e.it, i.it, a.propertyGroup)),
                      (a.numProperties = r.length),
                      (a.propertyIndex = e.cix),
                      (a._name = e.nm),
                      a
                    );
                  })(e, i, r.propertyGroup),
                  n = (function (t, e, i) {
                    function s(t) {
                      return 1 == t ? r : i(--t);
                    }
                    function r(e) {
                      return t.a.ix === e || "Anchor Point" === e
                        ? r.anchorPoint
                        : t.o.ix === e || "Opacity" === e
                        ? r.opacity
                        : t.p.ix === e || "Position" === e
                        ? r.position
                        : t.r.ix === e ||
                          "Rotation" === e ||
                          "ADBE Vector Rotation" === e
                        ? r.rotation
                        : t.s.ix === e || "Scale" === e
                        ? r.scale
                        : (t.sk && t.sk.ix === e) || "Skew" === e
                        ? r.skew
                        : (t.sa && t.sa.ix === e) || "Skew Axis" === e
                        ? r.skewAxis
                        : void 0;
                    }
                    return (
                      e.transform.mProps.o.setGroupProperty(s),
                      e.transform.mProps.p.setGroupProperty(s),
                      e.transform.mProps.a.setGroupProperty(s),
                      e.transform.mProps.s.setGroupProperty(s),
                      e.transform.mProps.r.setGroupProperty(s),
                      e.transform.mProps.sk &&
                        (e.transform.mProps.sk.setGroupProperty(s),
                        e.transform.mProps.sa.setGroupProperty(s)),
                      e.transform.op.setGroupProperty(s),
                      Object.defineProperties(r, {
                        opacity: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.o
                          ),
                        },
                        position: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.p
                          ),
                        },
                        anchorPoint: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.a
                          ),
                        },
                        scale: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.s
                          ),
                        },
                        rotation: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.r
                          ),
                        },
                        skew: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.sk
                          ),
                        },
                        skewAxis: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.sa
                          ),
                        },
                        _name: { value: t.nm },
                      }),
                      (r.ty = "tr"),
                      (r.mn = t.mn),
                      (r.propertyGroup = i),
                      r
                    );
                  })(
                    e.it[e.it.length - 1],
                    i.it[i.it.length - 1],
                    r.propertyGroup
                  );
                return (
                  (r.content = a),
                  (r.transform = n),
                  Object.defineProperty(r, "_name", {
                    get: function () {
                      return e.nm;
                    },
                  }),
                  (r.numProperties = e.np),
                  (r.propertyIndex = e.ix),
                  (r.nm = e.nm),
                  (r.mn = e.mn),
                  r
                );
              }
              function i(t, e, i) {
                function s(t) {
                  return "Color" === t || "color" === t
                    ? s.color
                    : "Opacity" === t || "opacity" === t
                    ? s.opacity
                    : void 0;
                }
                return (
                  Object.defineProperties(s, {
                    color: { get: ExpressionPropertyInterface(e.c) },
                    opacity: { get: ExpressionPropertyInterface(e.o) },
                    _name: { value: t.nm },
                    mn: { value: t.mn },
                  }),
                  e.c.setGroupProperty(i),
                  e.o.setGroupProperty(i),
                  s
                );
              }
              function s(t, e, i) {
                function s(t) {
                  return 1 === t ? ob : i(t - 1);
                }
                function r(t) {
                  return 1 === t ? h : s(t - 1);
                }
                function a(i) {
                  Object.defineProperty(h, t.d[i].nm, {
                    get: ExpressionPropertyInterface(e.d.dataProps[i].p),
                  });
                }
                var n,
                  o = t.d ? t.d.length : 0,
                  h = {};
                for (n = 0; n < o; n += 1)
                  a(n), e.d.dataProps[n].p.setGroupProperty(r);
                function l(t) {
                  return "Color" === t || "color" === t
                    ? l.color
                    : "Opacity" === t || "opacity" === t
                    ? l.opacity
                    : "Stroke Width" === t || "stroke width" === t
                    ? l.strokeWidth
                    : void 0;
                }
                return (
                  Object.defineProperties(l, {
                    color: { get: ExpressionPropertyInterface(e.c) },
                    opacity: { get: ExpressionPropertyInterface(e.o) },
                    strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                    dash: {
                      get: function () {
                        return h;
                      },
                    },
                    _name: { value: t.nm },
                    mn: { value: t.mn },
                  }),
                  e.c.setGroupProperty(s),
                  e.o.setGroupProperty(s),
                  e.w.setGroupProperty(s),
                  l
                );
              }
              function r(t, e, i) {
                function s(t) {
                  return 1 == t ? r : i(--t);
                }
                function r(e) {
                  return e === t.e.ix || "End" === e || "end" === e
                    ? r.end
                    : e === t.s.ix
                    ? r.start
                    : e === t.o.ix
                    ? r.offset
                    : void 0;
                }
                return (
                  (r.propertyIndex = t.ix),
                  e.s.setGroupProperty(s),
                  e.e.setGroupProperty(s),
                  e.o.setGroupProperty(s),
                  (r.propertyIndex = t.ix),
                  (r.propertyGroup = i),
                  Object.defineProperties(r, {
                    start: { get: ExpressionPropertyInterface(e.s) },
                    end: { get: ExpressionPropertyInterface(e.e) },
                    offset: { get: ExpressionPropertyInterface(e.o) },
                    _name: { value: t.nm },
                  }),
                  (r.mn = t.mn),
                  r
                );
              }
              function a(t, e, i) {
                function s(t) {
                  return 1 == t ? a : i(--t);
                }
                a.propertyIndex = t.ix;
                var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                function a(e) {
                  return t.p.ix === e
                    ? a.position
                    : t.s.ix === e
                    ? a.size
                    : void 0;
                }
                return (
                  r.s.setGroupProperty(s),
                  r.p.setGroupProperty(s),
                  Object.defineProperties(a, {
                    size: { get: ExpressionPropertyInterface(r.s) },
                    position: { get: ExpressionPropertyInterface(r.p) },
                    _name: { value: t.nm },
                  }),
                  (a.mn = t.mn),
                  a
                );
              }
              function n(t, e, i) {
                function s(t) {
                  return 1 == t ? a : i(--t);
                }
                var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                function a(e) {
                  return t.p.ix === e
                    ? a.position
                    : t.r.ix === e
                    ? a.rotation
                    : t.pt.ix === e
                    ? a.points
                    : t.or.ix === e || "ADBE Vector Star Outer Radius" === e
                    ? a.outerRadius
                    : t.os.ix === e
                    ? a.outerRoundness
                    : !t.ir ||
                      (t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e)
                    ? t.is && t.is.ix === e
                      ? a.innerRoundness
                      : void 0
                    : a.innerRadius;
                }
                return (
                  (a.propertyIndex = t.ix),
                  r.or.setGroupProperty(s),
                  r.os.setGroupProperty(s),
                  r.pt.setGroupProperty(s),
                  r.p.setGroupProperty(s),
                  r.r.setGroupProperty(s),
                  t.ir && (r.ir.setGroupProperty(s), r.is.setGroupProperty(s)),
                  Object.defineProperties(a, {
                    position: { get: ExpressionPropertyInterface(r.p) },
                    rotation: { get: ExpressionPropertyInterface(r.r) },
                    points: { get: ExpressionPropertyInterface(r.pt) },
                    outerRadius: { get: ExpressionPropertyInterface(r.or) },
                    outerRoundness: { get: ExpressionPropertyInterface(r.os) },
                    innerRadius: { get: ExpressionPropertyInterface(r.ir) },
                    innerRoundness: { get: ExpressionPropertyInterface(r.is) },
                    _name: { value: t.nm },
                  }),
                  (a.mn = t.mn),
                  a
                );
              }
              function o(t, e, i) {
                function s(t) {
                  return 1 == t ? a : i(--t);
                }
                var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                function a(e) {
                  return t.p.ix === e
                    ? a.position
                    : t.r.ix === e
                    ? a.roundness
                    : t.s.ix === e ||
                      "Size" === e ||
                      "ADBE Vector Rect Size" === e
                    ? a.size
                    : void 0;
                }
                return (
                  (a.propertyIndex = t.ix),
                  r.p.setGroupProperty(s),
                  r.s.setGroupProperty(s),
                  r.r.setGroupProperty(s),
                  Object.defineProperties(a, {
                    position: { get: ExpressionPropertyInterface(r.p) },
                    roundness: { get: ExpressionPropertyInterface(r.r) },
                    size: { get: ExpressionPropertyInterface(r.s) },
                    _name: { value: t.nm },
                  }),
                  (a.mn = t.mn),
                  a
                );
              }
              function h(t, e, i) {
                var s = e;
                function r(e) {
                  if (t.r.ix === e || "Round Corners 1" === e) return r.radius;
                }
                return (
                  (r.propertyIndex = t.ix),
                  s.rd.setGroupProperty(function (t) {
                    return 1 == t ? r : i(--t);
                  }),
                  Object.defineProperties(r, {
                    radius: { get: ExpressionPropertyInterface(s.rd) },
                    _name: { value: t.nm },
                  }),
                  (r.mn = t.mn),
                  r
                );
              }
              function l(t, e, i) {
                function s(t) {
                  return 1 == t ? a : i(--t);
                }
                var r = e;
                function a(e) {
                  return t.c.ix === e || "Copies" === e
                    ? a.copies
                    : t.o.ix === e || "Offset" === e
                    ? a.offset
                    : void 0;
                }
                return (
                  (a.propertyIndex = t.ix),
                  r.c.setGroupProperty(s),
                  r.o.setGroupProperty(s),
                  Object.defineProperties(a, {
                    copies: { get: ExpressionPropertyInterface(r.c) },
                    offset: { get: ExpressionPropertyInterface(r.o) },
                    _name: { value: t.nm },
                  }),
                  (a.mn = t.mn),
                  a
                );
              }
              function p(t, e, i) {
                var s = e.sh;
                function r(t) {
                  if (
                    "Shape" === t ||
                    "shape" === t ||
                    "Path" === t ||
                    "path" === t ||
                    "ADBE Vector Shape" === t ||
                    2 === t
                  )
                    return r.path;
                }
                return (
                  s.setGroupProperty(function (t) {
                    return 1 == t ? r : i(--t);
                  }),
                  Object.defineProperties(r, {
                    path: {
                      get: function () {
                        return s.k && s.getValue(), s;
                      },
                    },
                    shape: {
                      get: function () {
                        return s.k && s.getValue(), s;
                      },
                    },
                    _name: { value: t.nm },
                    ix: { value: t.ix },
                    propertyIndex: { value: t.ix },
                    mn: { value: t.mn },
                  }),
                  r
                );
              }
              return function (e, i, s) {
                var r;
                function a(t) {
                  if ("number" == typeof t) return r[t - 1];
                  for (var e = 0, i = r.length; e < i; ) {
                    if (r[e]._name === t) return r[e];
                    e += 1;
                  }
                }
                return (
                  (a.propertyGroup = s),
                  (r = t(e, i, a)),
                  (a.numProperties = r.length),
                  a
                );
              };
            })(),
            TextExpressionInterface = function (t) {
              var e, i;
              function s() {}
              return (
                Object.defineProperty(s, "sourceText", {
                  get: function () {
                    t.textProperty.getValue();
                    var s = t.textProperty.currentData.t;
                    return (
                      s !== e &&
                        ((t.textProperty.currentData.t = e),
                        ((i = new String(s)).value = s || new String(s))),
                      i
                    );
                  },
                }),
                s
              );
            },
            LayerExpressionInterface = (function () {
              function t(t, e) {
                var i = new Matrix();
                if (
                  (i.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(i),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var s,
                    r = this._elem.hierarchy.length;
                  for (s = 0; s < r; s += 1)
                    this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(
                      i
                    );
                  return i.applyToPointArray(t[0], t[1], t[2] || 0);
                }
                return i.applyToPointArray(t[0], t[1], t[2] || 0);
              }
              function e(t, e) {
                var i = new Matrix();
                if (
                  (i.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(i),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var s,
                    r = this._elem.hierarchy.length;
                  for (s = 0; s < r; s += 1)
                    this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(
                      i
                    );
                  return i.inversePoint(t);
                }
                return i.inversePoint(t);
              }
              function i(t) {
                var e = new Matrix();
                if (
                  (e.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(e),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var i,
                    s = this._elem.hierarchy.length;
                  for (i = 0; i < s; i += 1)
                    this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(
                      e
                    );
                  return e.inversePoint(t);
                }
                return e.inversePoint(t);
              }
              function s() {
                return [1, 1, 1, 1];
              }
              return function (r) {
                var a;
                function n(t) {
                  switch (t) {
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                      return n.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                      return a;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                      return n.effect;
                  }
                }
                (n.toWorld = t),
                  (n.fromWorld = e),
                  (n.toComp = t),
                  (n.fromComp = i),
                  (n.sampleImage = s),
                  (n.sourceRectAtTime = r.sourceRectAtTime.bind(r)),
                  (n._elem = r);
                var o = getDescriptor(
                  (a = TransformExpressionInterface(r.finalTransform.mProp)),
                  "anchorPoint"
                );
                return (
                  Object.defineProperties(n, {
                    hasParent: {
                      get: function () {
                        return r.hierarchy.length;
                      },
                    },
                    parent: {
                      get: function () {
                        return r.hierarchy[0].layerInterface;
                      },
                    },
                    rotation: getDescriptor(a, "rotation"),
                    scale: getDescriptor(a, "scale"),
                    position: getDescriptor(a, "position"),
                    opacity: getDescriptor(a, "opacity"),
                    anchorPoint: o,
                    anchor_point: o,
                    transform: {
                      get: function () {
                        return a;
                      },
                    },
                    active: {
                      get: function () {
                        return r.isInRange;
                      },
                    },
                  }),
                  (n.startTime = r.data.st),
                  (n.index = r.data.ind),
                  (n.source = r.data.refId),
                  (n.height = 0 === r.data.ty ? r.data.h : 100),
                  (n.width = 0 === r.data.ty ? r.data.w : 100),
                  (n.inPoint = r.data.ip / r.comp.globalData.frameRate),
                  (n.outPoint = r.data.op / r.comp.globalData.frameRate),
                  (n._name = r.data.nm),
                  (n.registerMaskInterface = function (t) {
                    n.mask = new MaskManagerInterface(t, r);
                  }),
                  (n.registerEffectsInterface = function (t) {
                    n.effect = t;
                  }),
                  n
                );
              };
            })(),
            CompExpressionInterface = function (t) {
              function e(e) {
                for (var i = 0, s = t.layers.length; i < s; ) {
                  if (t.layers[i].nm === e || t.layers[i].ind === e)
                    return t.elements[i].layerInterface;
                  i += 1;
                }
                return null;
              }
              return (
                Object.defineProperty(e, "_name", { value: t.data.nm }),
                (e.layer = e),
                (e.pixelAspect = 1),
                (e.height = t.data.h || t.globalData.compSize.h),
                (e.width = t.data.w || t.globalData.compSize.w),
                (e.pixelAspect = 1),
                (e.frameDuration = 1 / t.globalData.frameRate),
                (e.displayStartTime = 0),
                (e.numLayers = t.layers.length),
                e
              );
            },
            TransformExpressionInterface = function (t) {
              function e(t) {
                switch (t) {
                  case "scale":
                  case "Scale":
                  case "ADBE Scale":
                  case 6:
                    return e.scale;
                  case "rotation":
                  case "Rotation":
                  case "ADBE Rotation":
                  case "ADBE Rotate Z":
                  case 10:
                    return e.rotation;
                  case "ADBE Rotate X":
                    return e.xRotation;
                  case "ADBE Rotate Y":
                    return e.yRotation;
                  case "position":
                  case "Position":
                  case "ADBE Position":
                  case 2:
                    return e.position;
                  case "ADBE Position_0":
                    return e.xPosition;
                  case "ADBE Position_1":
                    return e.yPosition;
                  case "ADBE Position_2":
                    return e.zPosition;
                  case "anchorPoint":
                  case "AnchorPoint":
                  case "Anchor Point":
                  case "ADBE AnchorPoint":
                  case 1:
                    return e.anchorPoint;
                  case "opacity":
                  case "Opacity":
                  case 11:
                    return e.opacity;
                }
              }
              if (
                (Object.defineProperty(e, "rotation", {
                  get: ExpressionPropertyInterface(t.r || t.rz),
                }),
                Object.defineProperty(e, "zRotation", {
                  get: ExpressionPropertyInterface(t.rz || t.r),
                }),
                Object.defineProperty(e, "xRotation", {
                  get: ExpressionPropertyInterface(t.rx),
                }),
                Object.defineProperty(e, "yRotation", {
                  get: ExpressionPropertyInterface(t.ry),
                }),
                Object.defineProperty(e, "scale", {
                  get: ExpressionPropertyInterface(t.s),
                }),
                t.p)
              )
                var i = ExpressionPropertyInterface(t.p);
              return (
                Object.defineProperty(e, "position", {
                  get: function () {
                    return t.p ? i() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0];
                  },
                }),
                Object.defineProperty(e, "xPosition", {
                  get: ExpressionPropertyInterface(t.px),
                }),
                Object.defineProperty(e, "yPosition", {
                  get: ExpressionPropertyInterface(t.py),
                }),
                Object.defineProperty(e, "zPosition", {
                  get: ExpressionPropertyInterface(t.pz),
                }),
                Object.defineProperty(e, "anchorPoint", {
                  get: ExpressionPropertyInterface(t.a),
                }),
                Object.defineProperty(e, "opacity", {
                  get: ExpressionPropertyInterface(t.o),
                }),
                Object.defineProperty(e, "skew", {
                  get: ExpressionPropertyInterface(t.sk),
                }),
                Object.defineProperty(e, "skewAxis", {
                  get: ExpressionPropertyInterface(t.sa),
                }),
                Object.defineProperty(e, "orientation", {
                  get: ExpressionPropertyInterface(t.or),
                }),
                e
              );
            },
            ProjectInterface = (function () {
              function t(t) {
                this.compositions.push(t);
              }
              return function () {
                function e(t) {
                  for (var e = 0, i = this.compositions.length; e < i; ) {
                    if (
                      this.compositions[e].data &&
                      this.compositions[e].data.nm === t
                    )
                      return (
                        this.compositions[e].prepareFrame &&
                          this.compositions[e].data.xt &&
                          this.compositions[e].prepareFrame(this.currentFrame),
                        this.compositions[e].compInterface
                      );
                    e += 1;
                  }
                }
                return (
                  (e.compositions = []),
                  (e.currentFrame = 0),
                  (e.registerComposition = t),
                  e
                );
              };
            })(),
            EffectsExpressionInterface = (function () {
              function t(i, s, r, a) {
                var n,
                  o = [],
                  h = i.ef.length;
                for (n = 0; n < h; n += 1)
                  5 === i.ef[n].ty
                    ? o.push(
                        t(
                          i.ef[n],
                          s.effectElements[n],
                          s.effectElements[n].propertyGroup,
                          a
                        )
                      )
                    : o.push(e(s.effectElements[n], i.ef[n].ty, a, l));
                function l(t) {
                  return 1 === t ? p : r(t - 1);
                }
                var p = function (t) {
                  for (var e = i.ef, s = 0, r = e.length; s < r; ) {
                    if (t === e[s].nm || t === e[s].mn || t === e[s].ix)
                      return 5 === e[s].ty ? o[s] : o[s]();
                    s += 1;
                  }
                  return o[0]();
                };
                return (
                  (p.propertyGroup = l),
                  "ADBE Color Control" === i.mn &&
                    Object.defineProperty(p, "color", {
                      get: function () {
                        return o[0]();
                      },
                    }),
                  Object.defineProperty(p, "numProperties", {
                    get: function () {
                      return i.np;
                    },
                  }),
                  (p.active = p.enabled = 0 !== i.en),
                  p
                );
              }
              function e(t, e, i, s) {
                var r = ExpressionPropertyInterface(t.p);
                return (
                  t.p.setGroupProperty && t.p.setGroupProperty(s),
                  function () {
                    return 10 === e ? i.comp.compInterface(t.p.v) : r();
                  }
                );
              }
              return {
                createEffectsInterface: function (e, i) {
                  if (e.effectsManager) {
                    var s,
                      r = [],
                      a = e.data.ef,
                      n = e.effectsManager.effectElements.length;
                    for (s = 0; s < n; s += 1)
                      r.push(t(a[s], e.effectsManager.effectElements[s], i, e));
                    return function (t) {
                      for (
                        var i = e.data.ef || [], s = 0, a = i.length;
                        s < a;

                      ) {
                        if (t === i[s].nm || t === i[s].mn || t === i[s].ix)
                          return r[s];
                        s += 1;
                      }
                    };
                  }
                },
              };
            })(),
            MaskManagerInterface = (function () {
              function t(t, e) {
                (this._mask = t), (this._data = e);
              }
              return (
                Object.defineProperty(t.prototype, "maskPath", {
                  get: function () {
                    return (
                      this._mask.prop.k && this._mask.prop.getValue(),
                      this._mask.prop
                    );
                  },
                }),
                Object.defineProperty(t.prototype, "maskOpacity", {
                  get: function () {
                    return (
                      this._mask.op.k && this._mask.op.getValue(),
                      100 * this._mask.op.v
                    );
                  },
                }),
                function (e, i) {
                  var s,
                    r = createSizedArray(e.viewData.length),
                    a = e.viewData.length;
                  for (s = 0; s < a; s += 1)
                    r[s] = new t(e.viewData[s], e.masksProperties[s]);
                  return function (t) {
                    for (s = 0; s < a; ) {
                      if (e.masksProperties[s].nm === t) return r[s];
                      s += 1;
                    }
                  };
                }
              );
            })(),
            ExpressionPropertyInterface = (function () {
              var t = { pv: 0, v: 0, mult: 1 },
                e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
              function i(t, e, i) {
                Object.defineProperty(t, "velocity", {
                  get: function () {
                    return e.getVelocityAtTime(e.comp.currentFrame);
                  },
                }),
                  (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                  (t.key = function (s) {
                    if (t.numKeys) {
                      var r = "";
                      r =
                        "s" in e.keyframes[s - 1]
                          ? e.keyframes[s - 1].s
                          : "e" in e.keyframes[s - 2]
                          ? e.keyframes[s - 2].e
                          : e.keyframes[s - 2].s;
                      var a =
                        "unidimensional" === i
                          ? new Number(r)
                          : Object.assign({}, r);
                      return (
                        (a.time =
                          e.keyframes[s - 1].t /
                          e.elem.comp.globalData.frameRate),
                        a
                      );
                    }
                    return 0;
                  }),
                  (t.valueAtTime = e.getValueAtTime),
                  (t.speedAtTime = e.getSpeedAtTime),
                  (t.velocityAtTime = e.getVelocityAtTime),
                  (t.propertyGroup = e.propertyGroup);
              }
              function s() {
                return t;
              }
              return function (r) {
                return r
                  ? "unidimensional" === r.propType
                    ? (function (e) {
                        (e && "pv" in e) || (e = t);
                        var s = 1 / e.mult,
                          r = e.pv * s,
                          a = new Number(r);
                        return (
                          (a.value = r),
                          i(a, e, "unidimensional"),
                          function () {
                            return (
                              e.k && e.getValue(),
                              (r = e.v * s),
                              a.value !== r &&
                                (((a = new Number(r)).value = r),
                                i(a, e, "unidimensional")),
                              a
                            );
                          }
                        );
                      })(r)
                    : (function (t) {
                        (t && "pv" in t) || (t = e);
                        var s = 1 / t.mult,
                          r = t.pv.length,
                          a = createTypedArray("float32", r),
                          n = createTypedArray("float32", r);
                        return (
                          (a.value = n),
                          i(a, t, "multidimensional"),
                          function () {
                            t.k && t.getValue();
                            for (var e = 0; e < r; e += 1)
                              a[e] = n[e] = t.v[e] * s;
                            return a;
                          }
                        );
                      })(r)
                  : s;
              };
            })(),
            TextExpressionSelectorProp,
            propertyGetTextProp;
          function SliderEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function AngleEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function ColorEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
          }
          function PointEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
          }
          function LayerIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function MaskIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function CheckboxEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function NoValueEffect() {
            this.p = {};
          }
          function EffectsManager() {}
          function EffectsManager(t, e) {
            var i = t.ef || [];
            this.effectElements = [];
            var s,
              r,
              a = i.length;
            for (s = 0; s < a; s++)
              (r = new GroupEffect(i[s], e)), this.effectElements.push(r);
          }
          function GroupEffect(t, e) {
            this.init(t, e);
          }
          (TextExpressionSelectorProp = (function () {
            function t(t, e) {
              return (
                (this.textIndex = t + 1),
                (this.textTotal = e),
                (this.v = this.getValue() * this.mult),
                this.v
              );
            }
            return function (e, i) {
              (this.pv = 1),
                (this.comp = e.comp),
                (this.elem = e),
                (this.mult = 0.01),
                (this.propType = "textSelector"),
                (this.textTotal = i.totalChars),
                (this.selectorValue = 100),
                (this.lastValue = [1, 1, 1]),
                (this.k = !0),
                (this.x = !0),
                (this.getValue = ExpressionManager.initiateExpression.bind(
                  this
                )(e, i, this)),
                (this.getMult = t),
                (this.getVelocityAtTime = expressionHelpers.getVelocityAtTime),
                this.kf
                  ? (this.getValueAtTime =
                      expressionHelpers.getValueAtTime.bind(this))
                  : (this.getValueAtTime =
                      expressionHelpers.getStaticValueAtTime.bind(this)),
                (this.setGroupProperty = expressionHelpers.setGroupProperty);
            };
          })()),
            (propertyGetTextProp = TextSelectorProp.getTextSelectorProp),
            (TextSelectorProp.getTextSelectorProp = function (t, e, i) {
              return 1 === e.t
                ? new TextExpressionSelectorProp(t, e, i)
                : propertyGetTextProp(t, e, i);
            }),
            extendPrototype([DynamicPropertyContainer], GroupEffect),
            (GroupEffect.prototype.getValue =
              GroupEffect.prototype.iterateDynamicProperties),
            (GroupEffect.prototype.init = function (t, e) {
              (this.data = t),
                (this.effectElements = []),
                this.initDynamicPropertyContainer(e);
              var i,
                s,
                r = this.data.ef.length,
                a = this.data.ef;
              for (i = 0; i < r; i += 1) {
                switch (((s = null), a[i].ty)) {
                  case 0:
                    s = new SliderEffect(a[i], e, this);
                    break;
                  case 1:
                    s = new AngleEffect(a[i], e, this);
                    break;
                  case 2:
                    s = new ColorEffect(a[i], e, this);
                    break;
                  case 3:
                    s = new PointEffect(a[i], e, this);
                    break;
                  case 4:
                  case 7:
                    s = new CheckboxEffect(a[i], e, this);
                    break;
                  case 10:
                    s = new LayerIndexEffect(a[i], e, this);
                    break;
                  case 11:
                    s = new MaskIndexEffect(a[i], e, this);
                    break;
                  case 5:
                    s = new EffectsManager(a[i], e, this);
                    break;
                  default:
                    s = new NoValueEffect(a[i], e, this);
                }
                s && this.effectElements.push(s);
              }
            });
          var lottie = {},
            _isFrozen = !1;
          function setLocationHref(t) {
            locationHref = t;
          }
          function searchAnimations() {
            !0 === standalone
              ? animationManager.searchAnimations(
                  animationData,
                  standalone,
                  renderer
                )
              : animationManager.searchAnimations();
          }
          function setSubframeRendering(t) {
            subframeEnabled = t;
          }
          function loadAnimation(t) {
            return (
              !0 === standalone &&
                (t.animationData = JSON.parse(animationData)),
              animationManager.loadAnimation(t)
            );
          }
          function setQuality(t) {
            if ("string" == typeof t)
              switch (t) {
                case "high":
                  defaultCurveSegments = 200;
                  break;
                case "medium":
                  defaultCurveSegments = 50;
                  break;
                case "low":
                  defaultCurveSegments = 10;
              }
            else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
            roundValues(!(defaultCurveSegments >= 50));
          }
          function inBrowser() {
            return "undefined" != typeof navigator;
          }
          function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e);
          }
          function getFactory(t) {
            switch (t) {
              case "propertyFactory":
                return PropertyFactory;
              case "shapePropertyFactory":
                return ShapePropertyFactory;
              case "matrix":
                return Matrix;
            }
          }
          function checkReady() {
            "complete" === document.readyState &&
              (clearInterval(readyStateCheckInterval), searchAnimations());
          }
          function getQueryVariable(t) {
            for (var e = queryString.split("&"), i = 0; i < e.length; i++) {
              var s = e[i].split("=");
              if (decodeURIComponent(s[0]) == t)
                return decodeURIComponent(s[1]);
            }
          }
          (lottie.play = animationManager.play),
            (lottie.pause = animationManager.pause),
            (lottie.setLocationHref = setLocationHref),
            (lottie.togglePause = animationManager.togglePause),
            (lottie.setSpeed = animationManager.setSpeed),
            (lottie.setDirection = animationManager.setDirection),
            (lottie.stop = animationManager.stop),
            (lottie.searchAnimations = searchAnimations),
            (lottie.registerAnimation = animationManager.registerAnimation),
            (lottie.loadAnimation = loadAnimation),
            (lottie.setSubframeRendering = setSubframeRendering),
            (lottie.resize = animationManager.resize),
            (lottie.goToAndStop = animationManager.goToAndStop),
            (lottie.destroy = animationManager.destroy),
            (lottie.setQuality = setQuality),
            (lottie.inBrowser = inBrowser),
            (lottie.installPlugin = installPlugin),
            (lottie.freeze = animationManager.freeze),
            (lottie.unfreeze = animationManager.unfreeze),
            (lottie.getRegisteredAnimations =
              animationManager.getRegisteredAnimations),
            (lottie.__getFactory = getFactory),
            (lottie.version = "5.6.10");
          var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "";
          if (standalone) {
            var scripts = document.getElementsByTagName("script"),
              index = scripts.length - 1,
              myScript = scripts[index] || { src: "" },
              queryString = myScript.src.replace(/^[^\?]+\??/, "");
            renderer = getQueryVariable("renderer");
          }
          var readyStateCheckInterval = setInterval(checkReady, 100);
          return lottie;
        }),
        void 0 ===
          (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return factory(root);
          }.call(exports, __webpack_require__, exports, module)) ||
          (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    98234: (t, e, i) => {
      var s, r;
      "undefined" != typeof navigator &&
        ((r = window || {}),
        (s = function () {
          return (function (t) {
            "use strict";
            var e,
              i = "http://www.w3.org/2000/svg",
              s = "",
              r = -999999,
              a = !0,
              n =
                (/^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                Math.round,
                Math.pow),
              o = Math.sqrt,
              h = (Math.abs, Math.floor),
              l = (Math.max, Math.min),
              p = {};
            function f() {
              return {};
            }
            (function () {
              var t,
                e = [
                  "abs",
                  "acos",
                  "acosh",
                  "asin",
                  "asinh",
                  "atan",
                  "atanh",
                  "atan2",
                  "ceil",
                  "cbrt",
                  "expm1",
                  "clz32",
                  "cos",
                  "cosh",
                  "exp",
                  "floor",
                  "fround",
                  "hypot",
                  "imul",
                  "log",
                  "log1p",
                  "log2",
                  "log10",
                  "max",
                  "min",
                  "pow",
                  "random",
                  "round",
                  "sign",
                  "sin",
                  "sinh",
                  "sqrt",
                  "tan",
                  "tanh",
                  "trunc",
                  "E",
                  "LN10",
                  "LN2",
                  "LOG10E",
                  "LOG2E",
                  "PI",
                  "SQRT1_2",
                  "SQRT2",
                ],
                i = e.length;
              for (t = 0; t < i; t += 1) p[e[t]] = Math[e[t]];
            })(),
              (p.random = Math.random),
              (p.abs = function (t) {
                if ("object" == typeof t && t.length) {
                  var e,
                    i = I(t.length),
                    s = t.length;
                  for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e]);
                  return i;
                }
                return Math.abs(t);
              });
            var m = 150,
              c = Math.PI / 180,
              d = 0.5519;
            function u(t) {
              t && Math.round;
            }
            function g(t, e, i, s) {
              (this.type = t),
                (this.currentTime = e),
                (this.totalTime = i),
                (this.direction = s < 0 ? -1 : 1);
            }
            function y(t, e) {
              (this.type = t), (this.direction = e < 0 ? -1 : 1);
            }
            function v(t, e, i, s) {
              (this.type = t),
                (this.currentLoop = i),
                (this.totalLoops = e),
                (this.direction = s < 0 ? -1 : 1);
            }
            function b(t, e, i) {
              (this.type = t), (this.firstFrame = e), (this.totalFrames = i);
            }
            function _(t, e) {
              (this.type = t), (this.target = e);
            }
            function x(t, e) {
              (this.type = "renderFrameError"),
                (this.nativeError = t),
                (this.currentTime = e);
            }
            function E(t) {
              (this.type = "configError"), (this.nativeError = t);
            }
            u(!1);
            var P,
              S =
                ((P = 0),
                function () {
                  return "__lottie_element_" + ++P;
                });
            function A(t, e, i) {
              var s, r, a, n, o, h, l, p;
              switch (
                ((h = i * (1 - e)),
                (l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e)),
                (p = i * (1 - (1 - o) * e)),
                n % 6)
              ) {
                case 0:
                  (s = i), (r = p), (a = h);
                  break;
                case 1:
                  (s = l), (r = i), (a = h);
                  break;
                case 2:
                  (s = h), (r = i), (a = p);
                  break;
                case 3:
                  (s = h), (r = l), (a = i);
                  break;
                case 4:
                  (s = p), (r = h), (a = i);
                  break;
                case 5:
                  (s = i), (r = h), (a = l);
              }
              return [s, r, a];
            }
            function k(t, e, i) {
              var s,
                r = Math.max(t, e, i),
                a = Math.min(t, e, i),
                n = r - a,
                o = 0 === r ? 0 : n / r,
                h = r / 255;
              switch (r) {
                case a:
                  s = 0;
                  break;
                case t:
                  (s = e - i + n * (e < i ? 6 : 0)), (s /= 6 * n);
                  break;
                case e:
                  (s = i - t + 2 * n), (s /= 6 * n);
                  break;
                case i:
                  (s = t - e + 4 * n), (s /= 6 * n);
              }
              return [s, o, h];
            }
            function C(t, e) {
              var i = k(255 * t[0], 255 * t[1], 255 * t[2]);
              return (
                (i[1] += e),
                i[1] > 1 ? (i[1] = 1) : i[1] <= 0 && (i[1] = 0),
                A(i[0], i[1], i[2])
              );
            }
            function M(t, e) {
              var i = k(255 * t[0], 255 * t[1], 255 * t[2]);
              return (
                (i[2] += e),
                i[2] > 1 ? (i[2] = 1) : i[2] < 0 && (i[2] = 0),
                A(i[0], i[1], i[2])
              );
            }
            function T(t, e) {
              var i = k(255 * t[0], 255 * t[1], 255 * t[2]);
              return (
                (i[0] += e / 360),
                i[0] > 1 ? (i[0] -= 1) : i[0] < 0 && (i[0] += 1),
                A(i[0], i[1], i[2])
              );
            }
            var D = (function () {
              var t,
                e,
                i = [];
              for (t = 0; t < 256; t += 1)
                (e = t.toString(16)), (i[t] = 1 == e.length ? "0" + e : e);
              return function (t, e, s) {
                return (
                  t < 0 && (t = 0),
                  e < 0 && (e = 0),
                  s < 0 && (s = 0),
                  "#" + i[t] + i[e] + i[s]
                );
              };
            })();
            function w() {}
            w.prototype = {
              triggerEvent: function (t, e) {
                if (this._cbs[t])
                  for (var i = this._cbs[t].length, s = 0; s < i; s++)
                    this._cbs[t][s](e);
              },
              addEventListener: function (t, e) {
                return (
                  this._cbs[t] || (this._cbs[t] = []),
                  this._cbs[t].push(e),
                  function () {
                    this.removeEventListener(t, e);
                  }.bind(this)
                );
              },
              removeEventListener: function (t, e) {
                if (e) {
                  if (this._cbs[t]) {
                    for (var i = 0, s = this._cbs[t].length; i < s; )
                      this._cbs[t][i] === e &&
                        (this._cbs[t].splice(i, 1), (i -= 1), (s -= 1)),
                        (i += 1);
                    this._cbs[t].length || (this._cbs[t] = null);
                  }
                } else this._cbs[t] = null;
              },
            };
            var F = (function () {
              function t(t, e) {
                var i,
                  s = 0,
                  r = [];
                switch (t) {
                  case "int16":
                  case "uint8c":
                    i = 1;
                    break;
                  default:
                    i = 1.1;
                }
                for (s = 0; s < e; s += 1) r.push(i);
                return r;
              }
              function e(t, e) {
                return "float32" === t
                  ? new Float32Array(e)
                  : "int16" === t
                  ? new Int16Array(e)
                  : "uint8c" === t
                  ? new Uint8ClampedArray(e)
                  : void 0;
              }
              return "function" == typeof Uint8ClampedArray &&
                "function" == typeof Float32Array
                ? e
                : t;
            })();
            function I(t) {
              return Array.apply(null, { length: t });
            }
            function L(t) {
              return document.createElementNS(i, t);
            }
            function V(t) {
              return document.createElement(t);
            }
            function R() {}
            R.prototype = {
              addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) &&
                  (this.dynamicProperties.push(t),
                  this.container.addDynamicProperty(this),
                  (this._isAnimated = !0));
              },
              iterateDynamicProperties: function () {
                this._mdf = !1;
                var t,
                  e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1)
                  this.dynamicProperties[t].getValue(),
                    this.dynamicProperties[t]._mdf && (this._mdf = !0);
              },
              initDynamicPropertyContainer: function (t) {
                (this.container = t),
                  (this.dynamicProperties = []),
                  (this._mdf = !1),
                  (this._isAnimated = !1);
              },
            };
            var B,
              z =
                ((B = {
                  0: "source-over",
                  1: "multiply",
                  2: "screen",
                  3: "overlay",
                  4: "darken",
                  5: "lighten",
                  6: "color-dodge",
                  7: "color-burn",
                  8: "hard-light",
                  9: "soft-light",
                  10: "difference",
                  11: "exclusion",
                  12: "hue",
                  13: "saturation",
                  14: "color",
                  15: "luminosity",
                }),
                function (t) {
                  return B[t] || "";
                }),
              N = (function () {
                var t = Math.cos,
                  e = Math.sin,
                  i = Math.tan,
                  s = Math.round;
                function r() {
                  return (
                    (this.props[0] = 1),
                    (this.props[1] = 0),
                    (this.props[2] = 0),
                    (this.props[3] = 0),
                    (this.props[4] = 0),
                    (this.props[5] = 1),
                    (this.props[6] = 0),
                    (this.props[7] = 0),
                    (this.props[8] = 0),
                    (this.props[9] = 0),
                    (this.props[10] = 1),
                    (this.props[11] = 0),
                    (this.props[12] = 0),
                    (this.props[13] = 0),
                    (this.props[14] = 0),
                    (this.props[15] = 1),
                    this
                  );
                }
                function a(i) {
                  if (0 === i) return this;
                  var s = t(i),
                    r = e(i);
                  return this._t(
                    s,
                    -r,
                    0,
                    0,
                    r,
                    s,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
                }
                function n(i) {
                  if (0 === i) return this;
                  var s = t(i),
                    r = e(i);
                  return this._t(
                    1,
                    0,
                    0,
                    0,
                    0,
                    s,
                    -r,
                    0,
                    0,
                    r,
                    s,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
                }
                function o(i) {
                  if (0 === i) return this;
                  var s = t(i),
                    r = e(i);
                  return this._t(
                    s,
                    0,
                    r,
                    0,
                    0,
                    1,
                    0,
                    0,
                    -r,
                    0,
                    s,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
                }
                function h(i) {
                  if (0 === i) return this;
                  var s = t(i),
                    r = e(i);
                  return this._t(
                    s,
                    -r,
                    0,
                    0,
                    r,
                    s,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  );
                }
                function l(t, e) {
                  return this._t(1, e, t, 1, 0, 0);
                }
                function p(t, e) {
                  return this.shear(i(t), i(e));
                }
                function f(s, r) {
                  var a = t(r),
                    n = e(r);
                  return this._t(
                    a,
                    n,
                    0,
                    0,
                    -n,
                    a,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  )
                    ._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    ._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function m(t, e, i) {
                  return (
                    i || 0 === i || (i = 1),
                    1 === t && 1 === e && 1 === i
                      ? this
                      : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                  );
                }
                function c(t, e, i, s, r, a, n, o, h, l, p, f, m, c, d, u) {
                  return (
                    (this.props[0] = t),
                    (this.props[1] = e),
                    (this.props[2] = i),
                    (this.props[3] = s),
                    (this.props[4] = r),
                    (this.props[5] = a),
                    (this.props[6] = n),
                    (this.props[7] = o),
                    (this.props[8] = h),
                    (this.props[9] = l),
                    (this.props[10] = p),
                    (this.props[11] = f),
                    (this.props[12] = m),
                    (this.props[13] = c),
                    (this.props[14] = d),
                    (this.props[15] = u),
                    this
                  );
                }
                function d(t, e, i) {
                  return (
                    (i = i || 0),
                    0 !== t || 0 !== e || 0 !== i
                      ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1)
                      : this
                  );
                }
                function u(t, e, i, s, r, a, n, o, h, l, p, f, m, c, d, u) {
                  var g = this.props;
                  if (
                    1 === t &&
                    0 === e &&
                    0 === i &&
                    0 === s &&
                    0 === r &&
                    1 === a &&
                    0 === n &&
                    0 === o &&
                    0 === h &&
                    0 === l &&
                    1 === p &&
                    0 === f
                  )
                    return (
                      (g[12] = g[12] * t + g[15] * m),
                      (g[13] = g[13] * a + g[15] * c),
                      (g[14] = g[14] * p + g[15] * d),
                      (g[15] = g[15] * u),
                      (this._identityCalculated = !1),
                      this
                    );
                  var y = g[0],
                    v = g[1],
                    b = g[2],
                    _ = g[3],
                    x = g[4],
                    E = g[5],
                    P = g[6],
                    S = g[7],
                    A = g[8],
                    k = g[9],
                    C = g[10],
                    M = g[11],
                    T = g[12],
                    D = g[13],
                    w = g[14],
                    F = g[15];
                  return (
                    (g[0] = y * t + v * r + b * h + _ * m),
                    (g[1] = y * e + v * a + b * l + _ * c),
                    (g[2] = y * i + v * n + b * p + _ * d),
                    (g[3] = y * s + v * o + b * f + _ * u),
                    (g[4] = x * t + E * r + P * h + S * m),
                    (g[5] = x * e + E * a + P * l + S * c),
                    (g[6] = x * i + E * n + P * p + S * d),
                    (g[7] = x * s + E * o + P * f + S * u),
                    (g[8] = A * t + k * r + C * h + M * m),
                    (g[9] = A * e + k * a + C * l + M * c),
                    (g[10] = A * i + k * n + C * p + M * d),
                    (g[11] = A * s + k * o + C * f + M * u),
                    (g[12] = T * t + D * r + w * h + F * m),
                    (g[13] = T * e + D * a + w * l + F * c),
                    (g[14] = T * i + D * n + w * p + F * d),
                    (g[15] = T * s + D * o + w * f + F * u),
                    (this._identityCalculated = !1),
                    this
                  );
                }
                function g() {
                  return (
                    this._identityCalculated ||
                      ((this._identity = !(
                        1 !== this.props[0] ||
                        0 !== this.props[1] ||
                        0 !== this.props[2] ||
                        0 !== this.props[3] ||
                        0 !== this.props[4] ||
                        1 !== this.props[5] ||
                        0 !== this.props[6] ||
                        0 !== this.props[7] ||
                        0 !== this.props[8] ||
                        0 !== this.props[9] ||
                        1 !== this.props[10] ||
                        0 !== this.props[11] ||
                        0 !== this.props[12] ||
                        0 !== this.props[13] ||
                        0 !== this.props[14] ||
                        1 !== this.props[15]
                      )),
                      (this._identityCalculated = !0)),
                    this._identity
                  );
                }
                function y(t) {
                  for (var e = 0; e < 16; ) {
                    if (t.props[e] !== this.props[e]) return !1;
                    e += 1;
                  }
                  return !0;
                }
                function v(t) {
                  var e;
                  for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                }
                function b(t) {
                  var e;
                  for (e = 0; e < 16; e += 1) this.props[e] = t[e];
                }
                function _(t, e, i) {
                  return {
                    x:
                      t * this.props[0] +
                      e * this.props[4] +
                      i * this.props[8] +
                      this.props[12],
                    y:
                      t * this.props[1] +
                      e * this.props[5] +
                      i * this.props[9] +
                      this.props[13],
                    z:
                      t * this.props[2] +
                      e * this.props[6] +
                      i * this.props[10] +
                      this.props[14],
                  };
                }
                function x(t, e, i) {
                  return (
                    t * this.props[0] +
                    e * this.props[4] +
                    i * this.props[8] +
                    this.props[12]
                  );
                }
                function E(t, e, i) {
                  return (
                    t * this.props[1] +
                    e * this.props[5] +
                    i * this.props[9] +
                    this.props[13]
                  );
                }
                function P(t, e, i) {
                  return (
                    t * this.props[2] +
                    e * this.props[6] +
                    i * this.props[10] +
                    this.props[14]
                  );
                }
                function S() {
                  var t =
                      this.props[0] * this.props[5] -
                      this.props[1] * this.props[4],
                    e = this.props[5] / t,
                    i = -this.props[1] / t,
                    s = -this.props[4] / t,
                    r = this.props[0] / t,
                    a =
                      (this.props[4] * this.props[13] -
                        this.props[5] * this.props[12]) /
                      t,
                    n =
                      -(
                        this.props[0] * this.props[13] -
                        this.props[1] * this.props[12]
                      ) / t,
                    o = new N();
                  return (
                    (o.props[0] = e),
                    (o.props[1] = i),
                    (o.props[4] = s),
                    (o.props[5] = r),
                    (o.props[12] = a),
                    (o.props[13] = n),
                    o
                  );
                }
                function A(t) {
                  return this.getInverseMatrix().applyToPointArray(
                    t[0],
                    t[1],
                    t[2] || 0
                  );
                }
                function k(t) {
                  var e,
                    i = t.length,
                    s = [];
                  for (e = 0; e < i; e += 1) s[e] = A(t[e]);
                  return s;
                }
                function C(t, e, i) {
                  var s = F("float32", 6);
                  if (this.isIdentity())
                    (s[0] = t[0]),
                      (s[1] = t[1]),
                      (s[2] = e[0]),
                      (s[3] = e[1]),
                      (s[4] = i[0]),
                      (s[5] = i[1]);
                  else {
                    var r = this.props[0],
                      a = this.props[1],
                      n = this.props[4],
                      o = this.props[5],
                      h = this.props[12],
                      l = this.props[13];
                    (s[0] = t[0] * r + t[1] * n + h),
                      (s[1] = t[0] * a + t[1] * o + l),
                      (s[2] = e[0] * r + e[1] * n + h),
                      (s[3] = e[0] * a + e[1] * o + l),
                      (s[4] = i[0] * r + i[1] * n + h),
                      (s[5] = i[0] * a + i[1] * o + l);
                  }
                  return s;
                }
                function M(t, e, i) {
                  return this.isIdentity()
                    ? [t, e, i]
                    : [
                        t * this.props[0] +
                          e * this.props[4] +
                          i * this.props[8] +
                          this.props[12],
                        t * this.props[1] +
                          e * this.props[5] +
                          i * this.props[9] +
                          this.props[13],
                        t * this.props[2] +
                          e * this.props[6] +
                          i * this.props[10] +
                          this.props[14],
                      ];
                }
                function T(t, e) {
                  if (this.isIdentity()) return t + "," + e;
                  var i = this.props;
                  return (
                    Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 +
                    "," +
                    Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                  );
                }
                function D() {
                  for (
                    var t = 0, e = this.props, i = "matrix3d(", r = 1e4;
                    t < 16;

                  )
                    (i += s(e[t] * r) / r),
                      (i += 15 === t ? ")" : ","),
                      (t += 1);
                  return i;
                }
                function w(t) {
                  var e = 1e4;
                  return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                    ? s(t * e) / e
                    : t;
                }
                function I() {
                  var t = this.props;
                  return (
                    "matrix(" +
                    w(t[0]) +
                    "," +
                    w(t[1]) +
                    "," +
                    w(t[4]) +
                    "," +
                    w(t[5]) +
                    "," +
                    w(t[12]) +
                    "," +
                    w(t[13]) +
                    ")"
                  );
                }
                return function () {
                  (this.reset = r),
                    (this.rotate = a),
                    (this.rotateX = n),
                    (this.rotateY = o),
                    (this.rotateZ = h),
                    (this.skew = p),
                    (this.skewFromAxis = f),
                    (this.shear = l),
                    (this.scale = m),
                    (this.setTransform = c),
                    (this.translate = d),
                    (this.transform = u),
                    (this.applyToPoint = _),
                    (this.applyToX = x),
                    (this.applyToY = E),
                    (this.applyToZ = P),
                    (this.applyToPointArray = M),
                    (this.applyToTriplePoints = C),
                    (this.applyToPointStringified = T),
                    (this.toCSS = D),
                    (this.to2dCSS = I),
                    (this.clone = v),
                    (this.cloneFromProps = b),
                    (this.equals = y),
                    (this.inversePoints = k),
                    (this.inversePoint = A),
                    (this.getInverseMatrix = S),
                    (this._t = this.transform),
                    (this.isIdentity = g),
                    (this._identity = !0),
                    (this._identityCalculated = !1),
                    (this.props = F("float32", 16)),
                    this.reset();
                };
              })();
            !(function (t, e) {
              var i,
                s = this,
                r = 256,
                a = 6,
                n = 52,
                o = "random",
                h = e.pow(r, a),
                l = e.pow(2, n),
                p = 2 * l,
                f = r - 1;
              function m(i, s, n) {
                var f = [],
                  m = g(
                    u(
                      (s = !0 === s ? { entropy: !0 } : s || {}).entropy
                        ? [i, v(t)]
                        : null === i
                        ? y()
                        : i,
                      3
                    ),
                    f
                  ),
                  b = new c(f),
                  _ = function () {
                    for (var t = b.g(a), e = h, i = 0; t < l; )
                      (t = (t + i) * r), (e *= r), (i = b.g(1));
                    for (; t >= p; ) (t /= 2), (e /= 2), (i >>>= 1);
                    return (t + i) / e;
                  };
                return (
                  (_.int32 = function () {
                    return 0 | b.g(4);
                  }),
                  (_.quick = function () {
                    return b.g(4) / 4294967296;
                  }),
                  (_.double = _),
                  g(v(b.S), t),
                  (
                    s.pass ||
                    n ||
                    function (t, i, s, r) {
                      return (
                        r &&
                          (r.S && d(r, b),
                          (t.state = function () {
                            return d(b, {});
                          })),
                        s ? ((e[o] = t), i) : t
                      );
                    }
                  )(_, m, "global" in s ? s.global : this == e, s.state)
                );
              }
              function c(t) {
                var e,
                  i = t.length,
                  s = this,
                  a = 0,
                  n = (s.i = s.j = 0),
                  o = (s.S = []);
                for (i || (t = [i++]); a < r; ) o[a] = a++;
                for (a = 0; a < r; a++)
                  (o[a] = o[(n = f & (n + t[a % i] + (e = o[a])))]), (o[n] = e);
                s.g = function (t) {
                  for (var e, i = 0, a = s.i, n = s.j, o = s.S; t--; )
                    (e = o[(a = f & (a + 1))]),
                      (i =
                        i * r +
                        o[f & ((o[a] = o[(n = f & (n + e))]) + (o[n] = e))]);
                  return (s.i = a), (s.j = n), i;
                };
              }
              function d(t, e) {
                return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
              }
              function u(t, e) {
                var i,
                  s = [],
                  r = typeof t;
                if (e && "object" == r)
                  for (i in t)
                    try {
                      s.push(u(t[i], e - 1));
                    } catch (t) {}
                return s.length ? s : "string" == r ? t : t + "\0";
              }
              function g(t, e) {
                for (var i, s = t + "", r = 0; r < s.length; )
                  e[f & r] = f & ((i ^= 19 * e[f & r]) + s.charCodeAt(r++));
                return v(e);
              }
              function y() {
                try {
                  if (i) return v(i.randomBytes(r));
                  var e = new Uint8Array(r);
                  return (s.crypto || s.msCrypto).getRandomValues(e), v(e);
                } catch (e) {
                  var a = s.navigator,
                    n = a && a.plugins;
                  return [+new Date(), s, n, s.screen, v(t)];
                }
              }
              function v(t) {
                return String.fromCharCode.apply(0, t);
              }
              (e["seed" + o] = m), g(e.random(), t);
            })([], p);
            var G = (function () {
              var t = {};
              t.getBezierEasing = i;
              var e = {};
              function i(t, i, s, r, a) {
                var n =
                  a ||
                  ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(
                    /\./g,
                    "p"
                  );
                if (e[n]) return e[n];
                var o = new y([t, i, s, r]);
                return (e[n] = o), o;
              }
              var s = 4,
                r = 0.001,
                a = 1e-7,
                n = 10,
                o = 11,
                h = 1 / (o - 1),
                l = "function" == typeof Float32Array;
              function p(t, e) {
                return 1 - 3 * e + 3 * t;
              }
              function f(t, e) {
                return 3 * e - 6 * t;
              }
              function m(t) {
                return 3 * t;
              }
              function c(t, e, i) {
                return ((p(e, i) * t + f(e, i)) * t + m(e)) * t;
              }
              function d(t, e, i) {
                return 3 * p(e, i) * t * t + 2 * f(e, i) * t + m(e);
              }
              function u(t, e, i, s, r) {
                var o,
                  h,
                  l = 0;
                do {
                  (o = c((h = e + (i - e) / 2), s, r) - t) > 0
                    ? (i = h)
                    : (e = h);
                } while (Math.abs(o) > a && ++l < n);
                return h;
              }
              function g(t, e, i, r) {
                for (var a = 0; a < s; ++a) {
                  var n = d(e, i, r);
                  if (0 === n) return e;
                  e -= (c(e, i, r) - t) / n;
                }
                return e;
              }
              function y(t) {
                (this._p = t),
                  (this._mSampleValues = l
                    ? new Float32Array(o)
                    : new Array(o)),
                  (this._precomputed = !1),
                  (this.get = this.get.bind(this));
              }
              return (
                (y.prototype = {
                  get: function (t) {
                    var e = this._p[0],
                      i = this._p[1],
                      s = this._p[2],
                      r = this._p[3];
                    return (
                      this._precomputed || this._precompute(),
                      e === i && s === r
                        ? t
                        : 0 === t
                        ? 0
                        : 1 === t
                        ? 1
                        : c(this._getTForX(t), i, r)
                    );
                  },
                  _precompute: function () {
                    var t = this._p[0],
                      e = this._p[1],
                      i = this._p[2],
                      s = this._p[3];
                    (this._precomputed = !0),
                      (t === e && i === s) || this._calcSampleValues();
                  },
                  _calcSampleValues: function () {
                    for (var t = this._p[0], e = this._p[2], i = 0; i < o; ++i)
                      this._mSampleValues[i] = c(i * h, t, e);
                  },
                  _getTForX: function (t) {
                    for (
                      var e = this._p[0],
                        i = this._p[2],
                        s = this._mSampleValues,
                        a = 0,
                        n = 1,
                        l = o - 1;
                      n !== l && s[n] <= t;
                      ++n
                    )
                      a += h;
                    var p = a + ((t - s[--n]) / (s[n + 1] - s[n])) * h,
                      f = d(p, e, i);
                    return f >= r
                      ? g(t, p, e, i)
                      : 0 === f
                      ? p
                      : u(t, a, a + h, e, i);
                  },
                }),
                t
              );
            })();
            function O(t, e) {
              var i,
                s,
                r = t.length;
              for (i = 0; i < r; i += 1)
                for (var a in (s = t[i].prototype))
                  s.hasOwnProperty(a) && (e.prototype[a] = s[a]);
            }
            function H(t) {
              function e() {}
              return (e.prototype = t), e;
            }
            function q() {
              function t(t, e, i, s, r, a) {
                var n = t * s + e * r + i * a - r * s - a * t - i * e;
                return n > -0.001 && n < 0.001;
              }
              function e(e, i, s, r, a, n, o, h, l) {
                if (0 === s && 0 === n && 0 === l) return t(e, i, r, a, o, h);
                var p,
                  f = Math.sqrt(
                    Math.pow(r - e, 2) + Math.pow(a - i, 2) + Math.pow(n - s, 2)
                  ),
                  m = Math.sqrt(
                    Math.pow(o - e, 2) + Math.pow(h - i, 2) + Math.pow(l - s, 2)
                  ),
                  c = Math.sqrt(
                    Math.pow(o - r, 2) + Math.pow(h - a, 2) + Math.pow(l - n, 2)
                  );
                return (
                  (p =
                    f > m
                      ? f > c
                        ? f - m - c
                        : c - m - f
                      : c > m
                      ? c - m - f
                      : m - f - c) > -1e-4 && p < 1e-4
                );
              }
              Math;
              var i = function (t, e, i, s) {
                var r,
                  a,
                  h,
                  l,
                  p,
                  f,
                  c = m,
                  d = 0,
                  u = [],
                  g = [],
                  y = Et.newElement();
                for (h = i.length, r = 0; r < c; r += 1) {
                  for (p = r / (c - 1), f = 0, a = 0; a < h; a += 1)
                    (l =
                      n(1 - p, 3) * t[a] +
                      3 * n(1 - p, 2) * p * i[a] +
                      3 * (1 - p) * n(p, 2) * s[a] +
                      n(p, 3) * e[a]),
                      (u[a] = l),
                      null !== g[a] && (f += n(u[a] - g[a], 2)),
                      (g[a] = u[a]);
                  f && (d += f = o(f)), (y.percents[r] = p), (y.lengths[r] = d);
                }
                return (y.addedLength = d), y;
              };
              function s(t) {
                var e,
                  s = xt.newElement(),
                  r = t.c,
                  a = t.v,
                  n = t.o,
                  o = t.i,
                  h = t._length,
                  l = s.lengths,
                  p = 0;
                for (e = 0; e < h - 1; e += 1)
                  (l[e] = i(a[e], a[e + 1], n[e], o[e + 1])),
                    (p += l[e].addedLength);
                return (
                  r &&
                    h &&
                    ((l[e] = i(a[e], a[0], n[e], o[0])),
                    (p += l[e].addedLength)),
                  (s.totalLength = p),
                  s
                );
              }
              function r(t) {
                (this.segmentLength = 0), (this.points = new Array(t));
              }
              function a(t, e) {
                (this.partialLength = t), (this.point = e);
              }
              var l,
                p =
                  ((l = {}),
                  function (e, i, s, h) {
                    var p = (
                      e[0] +
                      "_" +
                      e[1] +
                      "_" +
                      i[0] +
                      "_" +
                      i[1] +
                      "_" +
                      s[0] +
                      "_" +
                      s[1] +
                      "_" +
                      h[0] +
                      "_" +
                      h[1]
                    ).replace(/\./g, "p");
                    if (!l[p]) {
                      var f,
                        c,
                        d,
                        u,
                        g,
                        y,
                        v,
                        b = m,
                        _ = 0,
                        x = null;
                      2 === e.length &&
                        (e[0] != i[0] || e[1] != i[1]) &&
                        t(e[0], e[1], i[0], i[1], e[0] + s[0], e[1] + s[1]) &&
                        t(e[0], e[1], i[0], i[1], i[0] + h[0], i[1] + h[1]) &&
                        (b = 2);
                      var E = new r(b);
                      for (d = s.length, f = 0; f < b; f += 1) {
                        for (
                          v = I(d), g = f / (b - 1), y = 0, c = 0;
                          c < d;
                          c += 1
                        )
                          (u =
                            n(1 - g, 3) * e[c] +
                            3 * n(1 - g, 2) * g * (e[c] + s[c]) +
                            3 * (1 - g) * n(g, 2) * (i[c] + h[c]) +
                            n(g, 3) * i[c]),
                            (v[c] = u),
                            null !== x && (y += n(v[c] - x[c], 2));
                        (_ += y = o(y)), (E.points[f] = new a(y, v)), (x = v);
                      }
                      (E.segmentLength = _), (l[p] = E);
                    }
                    return l[p];
                  });
              function f(t, e) {
                var i = e.percents,
                  s = e.lengths,
                  r = i.length,
                  a = h((r - 1) * t),
                  n = t * e.addedLength,
                  o = 0;
                if (a === r - 1 || 0 === a || n === s[a]) return i[a];
                for (var l = s[a] > n ? -1 : 1, p = !0; p; )
                  if (
                    (s[a] <= n && s[a + 1] > n
                      ? ((o = (n - s[a]) / (s[a + 1] - s[a])), (p = !1))
                      : (a += l),
                    a < 0 || a >= r - 1)
                  ) {
                    if (a === r - 1) return i[a];
                    p = !1;
                  }
                return i[a] + (i[a + 1] - i[a]) * o;
              }
              function c(t, e, i, s, r, a) {
                var n = f(r, a),
                  o = 1 - n;
                return [
                  Math.round(
                    1e3 *
                      (o * o * o * t[0] +
                        (n * o * o + o * n * o + o * o * n) * i[0] +
                        (n * n * o + o * n * n + n * o * n) * s[0] +
                        n * n * n * e[0])
                  ) / 1e3,
                  Math.round(
                    1e3 *
                      (o * o * o * t[1] +
                        (n * o * o + o * n * o + o * o * n) * i[1] +
                        (n * n * o + o * n * n + n * o * n) * s[1] +
                        n * n * n * e[1])
                  ) / 1e3,
                ];
              }
              var d = F("float32", 8);
              function u(t, e, i, s, r, a, n) {
                var o,
                  h = f((r = r < 0 ? 0 : r > 1 ? 1 : r), n),
                  l = f((a = a > 1 ? 1 : a), n),
                  p = t.length,
                  m = 1 - h,
                  c = 1 - l,
                  u = m * m * m,
                  g = h * m * m * 3,
                  y = h * h * m * 3,
                  v = h * h * h,
                  b = m * m * c,
                  _ = h * m * c + m * h * c + m * m * l,
                  x = h * h * c + m * h * l + h * m * l,
                  E = h * h * l,
                  P = m * c * c,
                  S = h * c * c + m * l * c + m * c * l,
                  A = h * l * c + m * l * l + h * c * l,
                  k = h * l * l,
                  C = c * c * c,
                  M = l * c * c + c * l * c + c * c * l,
                  T = l * l * c + c * l * l + l * c * l,
                  D = l * l * l;
                for (o = 0; o < p; o += 1)
                  (d[4 * o] =
                    Math.round(
                      1e3 * (u * t[o] + g * i[o] + y * s[o] + v * e[o])
                    ) / 1e3),
                    (d[4 * o + 1] =
                      Math.round(
                        1e3 * (b * t[o] + _ * i[o] + x * s[o] + E * e[o])
                      ) / 1e3),
                    (d[4 * o + 2] =
                      Math.round(
                        1e3 * (P * t[o] + S * i[o] + A * s[o] + k * e[o])
                      ) / 1e3),
                    (d[4 * o + 3] =
                      Math.round(
                        1e3 * (C * t[o] + M * i[o] + T * s[o] + D * e[o])
                      ) / 1e3);
                return d;
              }
              return {
                getSegmentsLength: s,
                getNewSegment: u,
                getPointInSegment: c,
                buildBezierData: p,
                pointOnLine2D: t,
                pointOnLine3D: e,
              };
            }
            !(function () {
              for (
                var e = 0, i = ["ms", "moz", "webkit", "o"], s = 0;
                s < i.length && !t.requestAnimationFrame;
                ++s
              )
                (t.requestAnimationFrame = t[i[s] + "RequestAnimationFrame"]),
                  (t.cancelAnimationFrame =
                    t[i[s] + "CancelAnimationFrame"] ||
                    t[i[s] + "CancelRequestAnimationFrame"]);
              t.requestAnimationFrame ||
                (t.requestAnimationFrame = function (t, i) {
                  var s = new Date().getTime(),
                    r = Math.max(0, 16 - (s - e)),
                    a = setTimeout(function () {
                      t(s + r);
                    }, r);
                  return (e = s + r), a;
                }),
                t.cancelAnimationFrame ||
                  (t.cancelAnimationFrame = function (t) {
                    clearTimeout(t);
                  });
            })();
            var j = q();
            function W() {
              function t(r, a, n) {
                var o,
                  h,
                  l,
                  p,
                  m,
                  c,
                  d = r.length;
                for (h = 0; h < d; h += 1)
                  if ("ks" in (o = r[h]) && !o.completed) {
                    if (
                      ((o.completed = !0),
                      o.tt && (r[h - 1].td = o.tt),
                      o.hasMask)
                    ) {
                      var u = o.masksProperties;
                      for (p = u.length, l = 0; l < p; l += 1)
                        if (u[l].pt.k.i) s(u[l].pt.k);
                        else
                          for (c = u[l].pt.k.length, m = 0; m < c; m += 1)
                            u[l].pt.k[m].s && s(u[l].pt.k[m].s[0]),
                              u[l].pt.k[m].e && s(u[l].pt.k[m].e[0]);
                    }
                    0 === o.ty
                      ? ((o.layers = e(o.refId, a)), t(o.layers, a, n))
                      : 4 === o.ty
                      ? i(o.shapes)
                      : 5 == o.ty && f(o, n);
                  }
              }
              function e(t, e) {
                for (var i = 0, s = e.length; i < s; ) {
                  if (e[i].id === t)
                    return e[i].layers.__used
                      ? JSON.parse(JSON.stringify(e[i].layers))
                      : ((e[i].layers.__used = !0), e[i].layers);
                  i += 1;
                }
              }
              function i(t) {
                var e, r, a;
                for (e = t.length - 1; e >= 0; e -= 1)
                  if ("sh" == t[e].ty)
                    if (t[e].ks.k.i) s(t[e].ks.k);
                    else
                      for (a = t[e].ks.k.length, r = 0; r < a; r += 1)
                        t[e].ks.k[r].s && s(t[e].ks.k[r].s[0]),
                          t[e].ks.k[r].e && s(t[e].ks.k[r].e[0]);
                  else "gr" == t[e].ty && i(t[e].it);
              }
              function s(t) {
                var e,
                  i = t.i.length;
                for (e = 0; e < i; e += 1)
                  (t.i[e][0] += t.v[e][0]),
                    (t.i[e][1] += t.v[e][1]),
                    (t.o[e][0] += t.v[e][0]),
                    (t.o[e][1] += t.v[e][1]);
              }
              function r(t, e) {
                var i = e ? e.split(".") : [100, 100, 100];
                return (
                  t[0] > i[0] ||
                  (!(i[0] > t[0]) &&
                    (t[1] > i[1] ||
                      (!(i[1] > t[1]) &&
                        (t[2] > i[2] || (!(i[2] > t[2]) && void 0)))))
                );
              }
              var a,
                n = (function () {
                  var t = [4, 4, 14];
                  function e(t) {
                    var e = t.t.d;
                    t.t.d = { k: [{ s: e, t: 0 }] };
                  }
                  function i(t) {
                    var i,
                      s = t.length;
                    for (i = 0; i < s; i += 1) 5 === t[i].ty && e(t[i]);
                  }
                  return function (e) {
                    if (r(t, e.v) && (i(e.layers), e.assets)) {
                      var s,
                        a = e.assets.length;
                      for (s = 0; s < a; s += 1)
                        e.assets[s].layers && i(e.assets[s].layers);
                    }
                  };
                })(),
                o =
                  ((a = [4, 7, 99]),
                  function (t) {
                    if (t.chars && !r(a, t.v)) {
                      var e,
                        i,
                        n,
                        o,
                        h,
                        l = t.chars.length;
                      for (e = 0; e < l; e += 1)
                        if (t.chars[e].data && t.chars[e].data.shapes)
                          for (
                            n = (h = t.chars[e].data.shapes[0].it).length,
                              i = 0;
                            i < n;
                            i += 1
                          )
                            (o = h[i].ks.k).__converted ||
                              (s(h[i].ks.k), (o.__converted = !0));
                    }
                  }),
                h = (function () {
                  var t = [4, 1, 9];
                  function e(t) {
                    var i,
                      s,
                      r,
                      a = t.length;
                    for (i = 0; i < a; i += 1)
                      if ("gr" === t[i].ty) e(t[i].it);
                      else if ("fl" === t[i].ty || "st" === t[i].ty)
                        if (t[i].c.k && t[i].c.k[0].i)
                          for (r = t[i].c.k.length, s = 0; s < r; s += 1)
                            t[i].c.k[s].s &&
                              ((t[i].c.k[s].s[0] /= 255),
                              (t[i].c.k[s].s[1] /= 255),
                              (t[i].c.k[s].s[2] /= 255),
                              (t[i].c.k[s].s[3] /= 255)),
                              t[i].c.k[s].e &&
                                ((t[i].c.k[s].e[0] /= 255),
                                (t[i].c.k[s].e[1] /= 255),
                                (t[i].c.k[s].e[2] /= 255),
                                (t[i].c.k[s].e[3] /= 255));
                        else
                          (t[i].c.k[0] /= 255),
                            (t[i].c.k[1] /= 255),
                            (t[i].c.k[2] /= 255),
                            (t[i].c.k[3] /= 255);
                  }
                  function i(t) {
                    var i,
                      s = t.length;
                    for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes);
                  }
                  return function (e) {
                    if (r(t, e.v) && (i(e.layers), e.assets)) {
                      var s,
                        a = e.assets.length;
                      for (s = 0; s < a; s += 1)
                        e.assets[s].layers && i(e.assets[s].layers);
                    }
                  };
                })(),
                l = (function () {
                  var t = [4, 4, 18];
                  function e(t) {
                    var i, s, r;
                    for (i = t.length - 1; i >= 0; i -= 1)
                      if ("sh" == t[i].ty)
                        if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                        else
                          for (r = t[i].ks.k.length, s = 0; s < r; s += 1)
                            t[i].ks.k[s].s &&
                              (t[i].ks.k[s].s[0].c = t[i].closed),
                              t[i].ks.k[s].e &&
                                (t[i].ks.k[s].e[0].c = t[i].closed);
                      else "gr" == t[i].ty && e(t[i].it);
                  }
                  function i(t) {
                    var i,
                      s,
                      r,
                      a,
                      n,
                      o,
                      h = t.length;
                    for (s = 0; s < h; s += 1) {
                      if ((i = t[s]).hasMask) {
                        var l = i.masksProperties;
                        for (a = l.length, r = 0; r < a; r += 1)
                          if (l[r].pt.k.i) l[r].pt.k.c = l[r].cl;
                          else
                            for (o = l[r].pt.k.length, n = 0; n < o; n += 1)
                              l[r].pt.k[n].s && (l[r].pt.k[n].s[0].c = l[r].cl),
                                l[r].pt.k[n].e &&
                                  (l[r].pt.k[n].e[0].c = l[r].cl);
                      }
                      4 === i.ty && e(i.shapes);
                    }
                  }
                  return function (e) {
                    if (r(t, e.v) && (i(e.layers), e.assets)) {
                      var s,
                        a = e.assets.length;
                      for (s = 0; s < a; s += 1)
                        e.assets[s].layers && i(e.assets[s].layers);
                    }
                  };
                })();
              function p(e, i) {
                e.__complete ||
                  (h(e),
                  n(e),
                  o(e),
                  l(e),
                  t(e.layers, e.assets, i),
                  (e.__complete = !0));
              }
              function f(t, e) {
                0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0);
              }
              var m = {};
              return (
                (m.completeData = p),
                (m.checkColors = h),
                (m.checkChars = o),
                (m.checkShapes = l),
                (m.completeLayers = t),
                m
              );
            }
            var Y = W(),
              X = (function () {
                var t = 5e3,
                  e = { w: 0, size: 0, shapes: [] },
                  i = [];
                function s(t) {
                  var e,
                    i = t.split(","),
                    s = i.length,
                    r = [];
                  for (e = 0; e < s; e += 1)
                    "sans-serif" !== i[e] &&
                      "monospace" !== i[e] &&
                      r.push(i[e]);
                  return r.join(",");
                }
                function r(t, e) {
                  var i = V("span");
                  i.style.fontFamily = e;
                  var r = V("span");
                  (r.innerHTML = "giItT1WQy@!-/#"),
                    (i.style.position = "absolute"),
                    (i.style.left = "-10000px"),
                    (i.style.top = "-10000px"),
                    (i.style.fontSize = "300px"),
                    (i.style.fontVariant = "normal"),
                    (i.style.fontStyle = "normal"),
                    (i.style.fontWeight = "normal"),
                    (i.style.letterSpacing = "0"),
                    i.appendChild(r),
                    document.body.appendChild(i);
                  var a = r.offsetWidth;
                  return (
                    (r.style.fontFamily = s(t) + ", " + e),
                    { node: r, w: a, parent: i }
                  );
                }
                function a() {
                  var e,
                    i,
                    s,
                    r = this.fonts.length,
                    a = r;
                  for (e = 0; e < r; e += 1)
                    this.fonts[e].loaded
                      ? (a -= 1)
                      : "n" === this.fonts[e].fOrigin ||
                        0 === this.fonts[e].origin
                      ? (this.fonts[e].loaded = !0)
                      : ((i = this.fonts[e].monoCase.node),
                        (s = this.fonts[e].monoCase.w),
                        i.offsetWidth !== s
                          ? ((a -= 1), (this.fonts[e].loaded = !0))
                          : ((i = this.fonts[e].sansCase.node),
                            (s = this.fonts[e].sansCase.w),
                            i.offsetWidth !== s &&
                              ((a -= 1), (this.fonts[e].loaded = !0))),
                        this.fonts[e].loaded &&
                          (this.fonts[e].sansCase.parent.parentNode.removeChild(
                            this.fonts[e].sansCase.parent
                          ),
                          this.fonts[e].monoCase.parent.parentNode.removeChild(
                            this.fonts[e].monoCase.parent
                          )));
                  0 !== a && Date.now() - this.initTime < t
                    ? setTimeout(this.checkLoadedFontsBinded, 20)
                    : setTimeout(this.setIsLoadedBinded, 10);
                }
                function n(t, e) {
                  var i = L("text");
                  return (
                    (i.style.fontSize = "100px"),
                    i.setAttribute("font-family", e.fFamily),
                    i.setAttribute("font-style", e.fStyle),
                    i.setAttribute("font-weight", e.fWeight),
                    (i.textContent = "1"),
                    e.fClass
                      ? ((i.style.fontFamily = "inherit"),
                        i.setAttribute("class", e.fClass))
                      : (i.style.fontFamily = e.fFamily),
                    t.appendChild(i),
                    (V("canvas").getContext("2d").font =
                      e.fWeight + " " + e.fStyle + " 100px " + e.fFamily),
                    i
                  );
                }
                function o(t, e) {
                  if (t) {
                    if (this.chars)
                      return (this.isLoaded = !0), void (this.fonts = t.list);
                    var i,
                      s = t.list,
                      a = s.length,
                      o = a;
                    for (i = 0; i < a; i += 1) {
                      var h,
                        l,
                        p = !0;
                      if (
                        ((s[i].loaded = !1),
                        (s[i].monoCase = r(s[i].fFamily, "monospace")),
                        (s[i].sansCase = r(s[i].fFamily, "sans-serif")),
                        s[i].fPath)
                      ) {
                        if ("p" === s[i].fOrigin || 3 === s[i].origin) {
                          if (
                            ((h = document.querySelectorAll(
                              'style[f-forigin="p"][f-family="' +
                                s[i].fFamily +
                                '"], style[f-origin="3"][f-family="' +
                                s[i].fFamily +
                                '"]'
                            )).length > 0 && (p = !1),
                            p)
                          ) {
                            var f = V("style");
                            f.setAttribute("f-forigin", s[i].fOrigin),
                              f.setAttribute("f-origin", s[i].origin),
                              f.setAttribute("f-family", s[i].fFamily),
                              (f.type = "text/css"),
                              (f.innerHTML =
                                "@font-face {font-family: " +
                                s[i].fFamily +
                                "; font-style: normal; src: url('" +
                                s[i].fPath +
                                "');}"),
                              e.appendChild(f);
                          }
                        } else if ("g" === s[i].fOrigin || 1 === s[i].origin) {
                          for (
                            h = document.querySelectorAll(
                              'link[f-forigin="g"], link[f-origin="1"]'
                            ),
                              l = 0;
                            l < h.length;
                            l++
                          )
                            -1 !== h[l].href.indexOf(s[i].fPath) && (p = !1);
                          if (p) {
                            var m = V("link");
                            m.setAttribute("f-forigin", s[i].fOrigin),
                              m.setAttribute("f-origin", s[i].origin),
                              (m.type = "text/css"),
                              (m.rel = "stylesheet"),
                              (m.href = s[i].fPath),
                              document.body.appendChild(m);
                          }
                        } else if ("t" === s[i].fOrigin || 2 === s[i].origin) {
                          for (
                            h = document.querySelectorAll(
                              'script[f-forigin="t"], script[f-origin="2"]'
                            ),
                              l = 0;
                            l < h.length;
                            l++
                          )
                            s[i].fPath === h[l].src && (p = !1);
                          if (p) {
                            var c = V("link");
                            c.setAttribute("f-forigin", s[i].fOrigin),
                              c.setAttribute("f-origin", s[i].origin),
                              c.setAttribute("rel", "stylesheet"),
                              c.setAttribute("href", s[i].fPath),
                              e.appendChild(c);
                          }
                        }
                      } else (s[i].loaded = !0), (o -= 1);
                      (s[i].helper = n(e, s[i])),
                        (s[i].cache = {}),
                        this.fonts.push(s[i]);
                    }
                    0 === o
                      ? (this.isLoaded = !0)
                      : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else this.isLoaded = !0;
                }
                function h(t) {
                  if (t) {
                    this.chars || (this.chars = []);
                    var e,
                      i,
                      s,
                      r = t.length,
                      a = this.chars.length;
                    for (e = 0; e < r; e += 1) {
                      for (i = 0, s = !1; i < a; )
                        this.chars[i].style === t[e].style &&
                          this.chars[i].fFamily === t[e].fFamily &&
                          this.chars[i].ch === t[e].ch &&
                          (s = !0),
                          (i += 1);
                      s || (this.chars.push(t[e]), (a += 1));
                    }
                  }
                }
                function l(t, i, s) {
                  for (var r = 0, a = this.chars.length; r < a; ) {
                    if (
                      this.chars[r].ch === t &&
                      this.chars[r].style === i &&
                      this.chars[r].fFamily === s
                    )
                      return this.chars[r];
                    r += 1;
                  }
                  return (
                    (("string" == typeof t && 13 !== t.charCodeAt(0)) || !t) &&
                      console &&
                      console.warn &&
                      console.warn(
                        "Missing character from exported characters list: ",
                        t,
                        i,
                        s
                      ),
                    e
                  );
                }
                function p(t, e, i) {
                  var s = this.getFontByName(e),
                    r = t.charCodeAt(0);
                  if (!s.cache[r + 1]) {
                    var a = s.helper;
                    if (" " === t) {
                      a.textContent = "|" + t + "|";
                      var n = a.getComputedTextLength();
                      a.textContent = "||";
                      var o = a.getComputedTextLength();
                      s.cache[r + 1] = (n - o) / 100;
                    } else
                      (a.textContent = t),
                        (s.cache[r + 1] = a.getComputedTextLength() / 100);
                  }
                  return s.cache[r + 1] * i;
                }
                function f(t) {
                  for (var e = 0, i = this.fonts.length; e < i; ) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1;
                  }
                  return this.fonts[0];
                }
                function m() {
                  return i;
                }
                function c() {
                  this.isLoaded = !0;
                }
                i = i.concat([
                  2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367,
                  2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377,
                  2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390,
                  2391, 2402, 2403,
                ]);
                var d = function () {
                  (this.fonts = []),
                    (this.chars = null),
                    (this.typekitLoaded = 0),
                    (this.isLoaded = !1),
                    (this.initTime = Date.now()),
                    (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
                    (this.checkLoadedFontsBinded =
                      this.checkLoadedFonts.bind(this));
                };
                d.getCombinedCharacterCodes = m;
                var u = {
                  addChars: h,
                  addFonts: o,
                  getCharData: l,
                  getFontByName: f,
                  measureText: p,
                  checkLoadedFonts: a,
                  setIsLoaded: c,
                };
                return (d.prototype = u), d;
              })(),
              K = (function () {
                var t = r,
                  e = Math.abs;
                function i(t, e) {
                  var i,
                    r = this.offsetTime;
                  "multidimensional" === this.propType &&
                    (i = F("float32", this.pv.length));
                  for (
                    var o,
                      h,
                      l,
                      p,
                      f,
                      m,
                      c,
                      d,
                      u = e.lastIndex,
                      g = u,
                      y = this.keyframes.length - 1,
                      v = !0;
                    v;

                  ) {
                    if (
                      ((o = this.keyframes[g]),
                      (h = this.keyframes[g + 1]),
                      g === y - 1 && t >= h.t - r)
                    ) {
                      o.h && (o = h), (u = 0);
                      break;
                    }
                    if (h.t - r > t) {
                      u = g;
                      break;
                    }
                    g < y - 1 ? (g += 1) : ((u = 0), (v = !1));
                  }
                  var b,
                    _ = h.t - r,
                    x = o.t - r;
                  if (o.to) {
                    o.bezierData ||
                      (o.bezierData = j.buildBezierData(
                        o.s,
                        h.s || o.e,
                        o.to,
                        o.ti
                      ));
                    var E = o.bezierData;
                    if (t >= _ || t < x) {
                      var P = t >= _ ? E.points.length - 1 : 0;
                      for (p = E.points[P].point.length, l = 0; l < p; l += 1)
                        i[l] = E.points[P].point[l];
                    } else {
                      o.__fnct
                        ? (d = o.__fnct)
                        : ((d = G.getBezierEasing(
                            o.o.x,
                            o.o.y,
                            o.i.x,
                            o.i.y,
                            o.n
                          ).get),
                          (o.__fnct = d)),
                        (f = d((t - x) / (_ - x)));
                      var S,
                        A = E.segmentLength * f,
                        k =
                          e.lastFrame < t && e._lastKeyframeIndex === g
                            ? e._lastAddedLength
                            : 0;
                      for (
                        c =
                          e.lastFrame < t && e._lastKeyframeIndex === g
                            ? e._lastPoint
                            : 0,
                          v = !0,
                          m = E.points.length;
                        v;

                      ) {
                        if (
                          ((k += E.points[c].partialLength),
                          0 === A || 0 === f || c === E.points.length - 1)
                        ) {
                          for (
                            p = E.points[c].point.length, l = 0;
                            l < p;
                            l += 1
                          )
                            i[l] = E.points[c].point[l];
                          break;
                        }
                        if (A >= k && A < k + E.points[c + 1].partialLength) {
                          for (
                            S = (A - k) / E.points[c + 1].partialLength,
                              p = E.points[c].point.length,
                              l = 0;
                            l < p;
                            l += 1
                          )
                            i[l] =
                              E.points[c].point[l] +
                              (E.points[c + 1].point[l] -
                                E.points[c].point[l]) *
                                S;
                          break;
                        }
                        c < m - 1 ? (c += 1) : (v = !1);
                      }
                      (e._lastPoint = c),
                        (e._lastAddedLength = k - E.points[c].partialLength),
                        (e._lastKeyframeIndex = g);
                    }
                  } else {
                    var C, M, T, D, w;
                    if (
                      ((y = o.s.length), (b = h.s || o.e), this.sh && 1 !== o.h)
                    )
                      t >= _
                        ? ((i[0] = b[0]), (i[1] = b[1]), (i[2] = b[2]))
                        : t <= x
                        ? ((i[0] = o.s[0]), (i[1] = o.s[1]), (i[2] = o.s[2]))
                        : a(i, s(n(o.s), n(b), (t - x) / (_ - x)));
                    else
                      for (g = 0; g < y; g += 1)
                        1 !== o.h &&
                          (t >= _
                            ? (f = 1)
                            : t < x
                            ? (f = 0)
                            : (o.o.x.constructor === Array
                                ? (o.__fnct || (o.__fnct = []),
                                  o.__fnct[g]
                                    ? (d = o.__fnct[g])
                                    : ((C =
                                        void 0 === o.o.x[g]
                                          ? o.o.x[0]
                                          : o.o.x[g]),
                                      (M =
                                        void 0 === o.o.y[g]
                                          ? o.o.y[0]
                                          : o.o.y[g]),
                                      (T =
                                        void 0 === o.i.x[g]
                                          ? o.i.x[0]
                                          : o.i.x[g]),
                                      (D =
                                        void 0 === o.i.y[g]
                                          ? o.i.y[0]
                                          : o.i.y[g]),
                                      (d = G.getBezierEasing(C, M, T, D).get),
                                      (o.__fnct[g] = d)))
                                : o.__fnct
                                ? (d = o.__fnct)
                                : ((C = o.o.x),
                                  (M = o.o.y),
                                  (T = o.i.x),
                                  (D = o.i.y),
                                  (d = G.getBezierEasing(C, M, T, D).get),
                                  (o.__fnct = d)),
                              (f = d((t - x) / (_ - x))))),
                          (b = h.s || o.e),
                          (w =
                            1 === o.h ? o.s[g] : o.s[g] + (b[g] - o.s[g]) * f),
                          "multidimensional" === this.propType
                            ? (i[g] = w)
                            : (i = w);
                  }
                  return (e.lastIndex = u), i;
                }
                function s(t, e, i) {
                  var s,
                    r,
                    a,
                    n,
                    o,
                    h = [],
                    l = t[0],
                    p = t[1],
                    f = t[2],
                    m = t[3],
                    c = e[0],
                    d = e[1],
                    u = e[2],
                    g = e[3];
                  return (
                    (r = l * c + p * d + f * u + m * g) < 0 &&
                      ((r = -r), (c = -c), (d = -d), (u = -u), (g = -g)),
                    1 - r > 1e-6
                      ? ((s = Math.acos(r)),
                        (a = Math.sin(s)),
                        (n = Math.sin((1 - i) * s) / a),
                        (o = Math.sin(i * s) / a))
                      : ((n = 1 - i), (o = i)),
                    (h[0] = n * l + o * c),
                    (h[1] = n * p + o * d),
                    (h[2] = n * f + o * u),
                    (h[3] = n * m + o * g),
                    h
                  );
                }
                function a(t, e) {
                  var i = e[0],
                    s = e[1],
                    r = e[2],
                    a = e[3],
                    n = Math.atan2(
                      2 * s * a - 2 * i * r,
                      1 - 2 * s * s - 2 * r * r
                    ),
                    o = Math.asin(2 * i * s + 2 * r * a),
                    h = Math.atan2(
                      2 * i * a - 2 * s * r,
                      1 - 2 * i * i - 2 * r * r
                    );
                  (t[0] = n / c), (t[1] = o / c), (t[2] = h / c);
                }
                function n(t) {
                  var e = t[0] * c,
                    i = t[1] * c,
                    s = t[2] * c,
                    r = Math.cos(e / 2),
                    a = Math.cos(i / 2),
                    n = Math.cos(s / 2),
                    o = Math.sin(e / 2),
                    h = Math.sin(i / 2),
                    l = Math.sin(s / 2);
                  return [
                    o * h * n + r * a * l,
                    o * a * n + r * h * l,
                    r * h * n - o * a * l,
                    r * a * n - o * h * l,
                  ];
                }
                function o() {
                  var e = this.comp.renderedFrame - this.offsetTime,
                    i = this.keyframes[0].t - this.offsetTime,
                    s =
                      this.keyframes[this.keyframes.length - 1].t -
                      this.offsetTime;
                  if (
                    !(
                      e === this._caching.lastFrame ||
                      (this._caching.lastFrame !== t &&
                        ((this._caching.lastFrame >= s && e >= s) ||
                          (this._caching.lastFrame < i && e < i)))
                    )
                  ) {
                    this._caching.lastFrame >= e &&
                      ((this._caching._lastKeyframeIndex = -1),
                      (this._caching.lastIndex = 0));
                    var r = this.interpolateValue(e, this._caching);
                    this.pv = r;
                  }
                  return (this._caching.lastFrame = e), this.pv;
                }
                function h(t) {
                  var i;
                  if ("unidimensional" === this.propType)
                    (i = t * this.mult),
                      e(this.v - i) > 1e-5 && ((this.v = i), (this._mdf = !0));
                  else
                    for (var s = 0, r = this.v.length; s < r; )
                      (i = t[s] * this.mult),
                        e(this.v[s] - i) > 1e-5 &&
                          ((this.v[s] = i), (this._mdf = !0)),
                        (s += 1);
                }
                function l() {
                  if (
                    this.elem.globalData.frameId !== this.frameId &&
                    this.effectsSequence.length
                  )
                    if (this.lock) this.setVValue(this.pv);
                    else {
                      (this.lock = !0), (this._mdf = this._isFirstFrame);
                      var t,
                        e = this.effectsSequence.length,
                        i = this.kf ? this.pv : this.data.k;
                      for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                      this.setVValue(i),
                        (this._isFirstFrame = !1),
                        (this.lock = !1),
                        (this.frameId = this.elem.globalData.frameId);
                    }
                }
                function p(t) {
                  this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this);
                }
                function f(t, e, i, s) {
                  (this.propType = "unidimensional"),
                    (this.mult = i || 1),
                    (this.data = e),
                    (this.v = i ? e.k * i : e.k),
                    (this.pv = e.k),
                    (this._mdf = !1),
                    (this.elem = t),
                    (this.container = s),
                    (this.comp = t.comp),
                    (this.k = !1),
                    (this.kf = !1),
                    (this.vel = 0),
                    (this.effectsSequence = []),
                    (this._isFirstFrame = !0),
                    (this.getValue = l),
                    (this.setVValue = h),
                    (this.addEffect = p);
                }
                function m(t, e, i, s) {
                  (this.propType = "multidimensional"),
                    (this.mult = i || 1),
                    (this.data = e),
                    (this._mdf = !1),
                    (this.elem = t),
                    (this.container = s),
                    (this.comp = t.comp),
                    (this.k = !1),
                    (this.kf = !1),
                    (this.frameId = -1);
                  var r,
                    a = e.k.length;
                  for (
                    this.v = F("float32", a),
                      this.pv = F("float32", a),
                      F("float32", a),
                      this.vel = F("float32", a),
                      r = 0;
                    r < a;
                    r += 1
                  )
                    (this.v[r] = e.k[r] * this.mult), (this.pv[r] = e.k[r]);
                  (this._isFirstFrame = !0),
                    (this.effectsSequence = []),
                    (this.getValue = l),
                    (this.setVValue = h),
                    (this.addEffect = p);
                }
                function d(e, s, r, a) {
                  (this.propType = "unidimensional"),
                    (this.keyframes = s.k),
                    (this.offsetTime = e.data.st),
                    (this.frameId = -1),
                    (this._caching = {
                      lastFrame: t,
                      lastIndex: 0,
                      value: 0,
                      _lastKeyframeIndex: -1,
                    }),
                    (this.k = !0),
                    (this.kf = !0),
                    (this.data = s),
                    (this.mult = r || 1),
                    (this.elem = e),
                    (this.container = a),
                    (this.comp = e.comp),
                    (this.v = t),
                    (this.pv = t),
                    (this._isFirstFrame = !0),
                    (this.getValue = l),
                    (this.setVValue = h),
                    (this.interpolateValue = i),
                    (this.effectsSequence = [o.bind(this)]),
                    (this.addEffect = p);
                }
                function u(e, s, r, a) {
                  this.propType = "multidimensional";
                  var n,
                    f,
                    m,
                    c,
                    d,
                    u = s.k.length;
                  for (n = 0; n < u - 1; n += 1)
                    s.k[n].to &&
                      s.k[n].s &&
                      s.k[n + 1] &&
                      s.k[n + 1].s &&
                      ((f = s.k[n].s),
                      (m = s.k[n + 1].s),
                      (c = s.k[n].to),
                      (d = s.k[n].ti),
                      ((2 === f.length &&
                        (f[0] !== m[0] || f[1] !== m[1]) &&
                        j.pointOnLine2D(
                          f[0],
                          f[1],
                          m[0],
                          m[1],
                          f[0] + c[0],
                          f[1] + c[1]
                        ) &&
                        j.pointOnLine2D(
                          f[0],
                          f[1],
                          m[0],
                          m[1],
                          m[0] + d[0],
                          m[1] + d[1]
                        )) ||
                        (3 === f.length &&
                          (f[0] !== m[0] || f[1] !== m[1] || f[2] !== m[2]) &&
                          j.pointOnLine3D(
                            f[0],
                            f[1],
                            f[2],
                            m[0],
                            m[1],
                            m[2],
                            f[0] + c[0],
                            f[1] + c[1],
                            f[2] + c[2]
                          ) &&
                          j.pointOnLine3D(
                            f[0],
                            f[1],
                            f[2],
                            m[0],
                            m[1],
                            m[2],
                            m[0] + d[0],
                            m[1] + d[1],
                            m[2] + d[2]
                          ))) &&
                        ((s.k[n].to = null), (s.k[n].ti = null)),
                      f[0] === m[0] &&
                        f[1] === m[1] &&
                        0 === c[0] &&
                        0 === c[1] &&
                        0 === d[0] &&
                        0 === d[1] &&
                        (2 === f.length ||
                          (f[2] === m[2] && 0 === c[2] && 0 === d[2])) &&
                        ((s.k[n].to = null), (s.k[n].ti = null)));
                  (this.effectsSequence = [o.bind(this)]),
                    (this.keyframes = s.k),
                    (this.offsetTime = e.data.st),
                    (this.k = !0),
                    (this.kf = !0),
                    (this._isFirstFrame = !0),
                    (this.mult = r || 1),
                    (this.elem = e),
                    (this.container = a),
                    (this.comp = e.comp),
                    (this.getValue = l),
                    (this.setVValue = h),
                    (this.interpolateValue = i),
                    (this.frameId = -1);
                  var g = s.k[0].s.length;
                  for (
                    this.v = F("float32", g), this.pv = F("float32", g), n = 0;
                    n < g;
                    n += 1
                  )
                    (this.v[n] = t), (this.pv[n] = t);
                  (this._caching = {
                    lastFrame: t,
                    lastIndex: 0,
                    value: F("float32", g),
                  }),
                    (this.addEffect = p);
                }
                function g(t, e, i, s, r) {
                  var a;
                  if (e.k.length)
                    if ("number" == typeof e.k[0]) a = new m(t, e, s, r);
                    else
                      switch (i) {
                        case 0:
                          a = new d(t, e, s, r);
                          break;
                        case 1:
                          a = new u(t, e, s, r);
                      }
                  else a = new f(t, e, s, r);
                  return a.effectsSequence.length && r.addDynamicProperty(a), a;
                }
                return { getProp: g };
              })(),
              U = (function () {
                var t = [0, 0];
                function e(t) {
                  var e = this._mdf;
                  this.iterateDynamicProperties(),
                    (this._mdf = this._mdf || e),
                    this.a &&
                      t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                    this.r
                      ? t.rotate(-this.r.v)
                      : t
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                    this.data.p.s
                      ? this.data.p.z
                        ? t.translate(this.px.v, this.py.v, -this.pz.v)
                        : t.translate(this.px.v, this.py.v, 0)
                      : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                }
                function i(e) {
                  if (this.elem.globalData.frameId !== this.frameId) {
                    if (
                      (this._isDirty &&
                        (this.precalculateMatrix(), (this._isDirty = !1)),
                      this.iterateDynamicProperties(),
                      this._mdf || e)
                    ) {
                      if (
                        (this.v.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1 &&
                          this.v.translate(
                            -this.a.v[0],
                            -this.a.v[1],
                            this.a.v[2]
                          ),
                        this.appliedTransformations < 2 &&
                          this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk &&
                          this.appliedTransformations < 3 &&
                          this.v.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r && this.appliedTransformations < 4
                          ? this.v.rotate(-this.r.v)
                          : !this.r &&
                            this.appliedTransformations < 4 &&
                            this.v
                              .rotateZ(-this.rz.v)
                              .rotateY(this.ry.v)
                              .rotateX(this.rx.v)
                              .rotateZ(-this.or.v[2])
                              .rotateY(this.or.v[1])
                              .rotateX(this.or.v[0]),
                        this.autoOriented)
                      ) {
                        var i,
                          s,
                          r = this.elem.globalData.frameRate;
                        if (this.p && this.p.keyframes && this.p.getValueAtTime)
                          this.p._caching.lastFrame + this.p.offsetTime <=
                          this.p.keyframes[0].t
                            ? ((i = this.p.getValueAtTime(
                                (this.p.keyframes[0].t + 0.01) / r,
                                0
                              )),
                              (s = this.p.getValueAtTime(
                                this.p.keyframes[0].t / r,
                                0
                              )))
                            : this.p._caching.lastFrame + this.p.offsetTime >=
                              this.p.keyframes[this.p.keyframes.length - 1].t
                            ? ((i = this.p.getValueAtTime(
                                this.p.keyframes[this.p.keyframes.length - 1]
                                  .t / r,
                                0
                              )),
                              (s = this.p.getValueAtTime(
                                (this.p.keyframes[this.p.keyframes.length - 1]
                                  .t -
                                  0.05) /
                                  r,
                                0
                              )))
                            : ((i = this.p.pv),
                              (s = this.p.getValueAtTime(
                                (this.p._caching.lastFrame +
                                  this.p.offsetTime -
                                  0.01) /
                                  r,
                                this.p.offsetTime
                              )));
                        else if (
                          this.px &&
                          this.px.keyframes &&
                          this.py.keyframes &&
                          this.px.getValueAtTime &&
                          this.py.getValueAtTime
                        ) {
                          (i = []), (s = []);
                          var a = this.px,
                            n = this.py;
                          a._caching.lastFrame + a.offsetTime <=
                          a.keyframes[0].t
                            ? ((i[0] = a.getValueAtTime(
                                (a.keyframes[0].t + 0.01) / r,
                                0
                              )),
                              (i[1] = n.getValueAtTime(
                                (n.keyframes[0].t + 0.01) / r,
                                0
                              )),
                              (s[0] = a.getValueAtTime(
                                a.keyframes[0].t / r,
                                0
                              )),
                              (s[1] = n.getValueAtTime(
                                n.keyframes[0].t / r,
                                0
                              )))
                            : a._caching.lastFrame + a.offsetTime >=
                              a.keyframes[a.keyframes.length - 1].t
                            ? ((i[0] = a.getValueAtTime(
                                a.keyframes[a.keyframes.length - 1].t / r,
                                0
                              )),
                              (i[1] = n.getValueAtTime(
                                n.keyframes[n.keyframes.length - 1].t / r,
                                0
                              )),
                              (s[0] = a.getValueAtTime(
                                (a.keyframes[a.keyframes.length - 1].t - 0.01) /
                                  r,
                                0
                              )),
                              (s[1] = n.getValueAtTime(
                                (n.keyframes[n.keyframes.length - 1].t - 0.01) /
                                  r,
                                0
                              )))
                            : ((i = [a.pv, n.pv]),
                              (s[0] = a.getValueAtTime(
                                (a._caching.lastFrame + a.offsetTime - 0.01) /
                                  r,
                                a.offsetTime
                              )),
                              (s[1] = n.getValueAtTime(
                                (n._caching.lastFrame + n.offsetTime - 0.01) /
                                  r,
                                n.offsetTime
                              )));
                        } else i = s = t;
                        this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]));
                      }
                      this.data.p && this.data.p.s
                        ? this.data.p.z
                          ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                          : this.v.translate(this.px.v, this.py.v, 0)
                        : this.v.translate(
                            this.p.v[0],
                            this.p.v[1],
                            -this.p.v[2]
                          );
                    }
                    this.frameId = this.elem.globalData.frameId;
                  }
                }
                function s() {
                  if (
                    !this.a.k &&
                    (this.pre.translate(
                      -this.a.v[0],
                      -this.a.v[1],
                      this.a.v[2]
                    ),
                    (this.appliedTransformations = 1),
                    !this.s.effectsSequence.length)
                  ) {
                    if (
                      (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      (this.appliedTransformations = 2),
                      this.sk)
                    ) {
                      if (
                        this.sk.effectsSequence.length ||
                        this.sa.effectsSequence.length
                      )
                        return;
                      this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                        (this.appliedTransformations = 3);
                    }
                    if (this.r) {
                      if (this.r.effectsSequence.length) return;
                      this.pre.rotate(-this.r.v),
                        (this.appliedTransformations = 4);
                    } else
                      this.rz.effectsSequence.length ||
                        this.ry.effectsSequence.length ||
                        this.rx.effectsSequence.length ||
                        this.or.effectsSequence.length ||
                        (this.pre
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                        (this.appliedTransformations = 4));
                  }
                }
                function r() {}
                function a(t) {
                  this._addDynamicProperty(t),
                    this.elem.addDynamicProperty(t),
                    (this._isDirty = !0);
                }
                function n(t, e, i) {
                  if (
                    ((this.elem = t),
                    (this.frameId = -1),
                    (this.propType = "transform"),
                    (this.data = e),
                    (this.v = new N()),
                    (this.pre = new N()),
                    (this.appliedTransformations = 0),
                    this.initDynamicPropertyContainer(i || t),
                    e.p && e.p.s
                      ? ((this.px = K.getProp(t, e.p.x, 0, 0, this)),
                        (this.py = K.getProp(t, e.p.y, 0, 0, this)),
                        e.p.z && (this.pz = K.getProp(t, e.p.z, 0, 0, this)))
                      : (this.p = K.getProp(
                          t,
                          e.p || { k: [0, 0, 0] },
                          1,
                          0,
                          this
                        )),
                    e.rx)
                  ) {
                    if (
                      ((this.rx = K.getProp(t, e.rx, 0, c, this)),
                      (this.ry = K.getProp(t, e.ry, 0, c, this)),
                      (this.rz = K.getProp(t, e.rz, 0, c, this)),
                      e.or.k[0].ti)
                    ) {
                      var s,
                        r = e.or.k.length;
                      for (s = 0; s < r; s += 1)
                        e.or.k[s].to = e.or.k[s].ti = null;
                    }
                    (this.or = K.getProp(t, e.or, 1, c, this)),
                      (this.or.sh = !0);
                  } else this.r = K.getProp(t, e.r || { k: 0 }, 0, c, this);
                  e.sk &&
                    ((this.sk = K.getProp(t, e.sk, 0, c, this)),
                    (this.sa = K.getProp(t, e.sa, 0, c, this))),
                    (this.a = K.getProp(
                      t,
                      e.a || { k: [0, 0, 0] },
                      1,
                      0,
                      this
                    )),
                    (this.s = K.getProp(
                      t,
                      e.s || { k: [100, 100, 100] },
                      1,
                      0.01,
                      this
                    )),
                    e.o
                      ? (this.o = K.getProp(t, e.o, 0, 0.01, t))
                      : (this.o = { _mdf: !1, v: 1 }),
                    (this._isDirty = !0),
                    this.dynamicProperties.length || this.getValue(!0);
                }
                function o(t, e, i) {
                  return new n(t, e, i);
                }
                return (
                  (n.prototype = {
                    applyToMatrix: e,
                    getValue: i,
                    precalculateMatrix: s,
                    autoOrient: r,
                  }),
                  O([R], n),
                  (n.prototype.addDynamicProperty = a),
                  (n.prototype._addDynamicProperty =
                    R.prototype.addDynamicProperty),
                  { getTransformProperty: o }
                );
              })();
            function J() {
              (this.c = !1),
                (this._length = 0),
                (this._maxLength = 8),
                (this.v = I(this._maxLength)),
                (this.o = I(this._maxLength)),
                (this.i = I(this._maxLength));
            }
            (J.prototype.setPathData = function (t, e) {
              (this.c = t), this.setLength(e);
              for (var i = 0; i < e; )
                (this.v[i] = vt.newElement()),
                  (this.o[i] = vt.newElement()),
                  (this.i[i] = vt.newElement()),
                  (i += 1);
            }),
              (J.prototype.setLength = function (t) {
                for (; this._maxLength < t; ) this.doubleArrayLength();
                this._length = t;
              }),
              (J.prototype.doubleArrayLength = function () {
                (this.v = this.v.concat(I(this._maxLength))),
                  (this.i = this.i.concat(I(this._maxLength))),
                  (this.o = this.o.concat(I(this._maxLength))),
                  (this._maxLength *= 2);
              }),
              (J.prototype.setXYAt = function (t, e, i, s, r) {
                var a;
                switch (
                  ((this._length = Math.max(this._length, s + 1)),
                  this._length >= this._maxLength && this.doubleArrayLength(),
                  i)
                ) {
                  case "v":
                    a = this.v;
                    break;
                  case "i":
                    a = this.i;
                    break;
                  case "o":
                    a = this.o;
                }
                (!a[s] || (a[s] && !r)) && (a[s] = vt.newElement()),
                  (a[s][0] = t),
                  (a[s][1] = e);
              }),
              (J.prototype.setTripleAt = function (t, e, i, s, r, a, n, o) {
                this.setXYAt(t, e, "v", n, o),
                  this.setXYAt(i, s, "o", n, o),
                  this.setXYAt(r, a, "i", n, o);
              }),
              (J.prototype.reverse = function () {
                var t = new J();
                t.setPathData(this.c, this._length);
                var e = this.v,
                  i = this.o,
                  s = this.i,
                  r = 0;
                this.c &&
                  (t.setTripleAt(
                    e[0][0],
                    e[0][1],
                    s[0][0],
                    s[0][1],
                    i[0][0],
                    i[0][1],
                    0,
                    !1
                  ),
                  (r = 1));
                var a,
                  n = this._length - 1,
                  o = this._length;
                for (a = r; a < o; a += 1)
                  t.setTripleAt(
                    e[n][0],
                    e[n][1],
                    s[n][0],
                    s[n][1],
                    i[n][0],
                    i[n][1],
                    a,
                    !1
                  ),
                    (n -= 1);
                return t;
              });
            var Z = (function () {
                var t = -999999;
                function e(t, e, i) {
                  var s,
                    r,
                    a,
                    n,
                    o,
                    h,
                    l,
                    p,
                    f,
                    m = i.lastIndex,
                    c = this.keyframes;
                  if (t < c[0].t - this.offsetTime)
                    (s = c[0].s[0]), (a = !0), (m = 0);
                  else if (t >= c[c.length - 1].t - this.offsetTime)
                    (s = c[c.length - 1].s
                      ? c[c.length - 1].s[0]
                      : c[c.length - 2].e[0]),
                      (a = !0);
                  else {
                    for (
                      var d, u, g = m, y = c.length - 1, v = !0;
                      v &&
                      ((d = c[g]), !((u = c[g + 1]).t - this.offsetTime > t));

                    )
                      g < y - 1 ? (g += 1) : (v = !1);
                    if (((m = g), !(a = 1 === d.h))) {
                      if (t >= u.t - this.offsetTime) p = 1;
                      else if (t < d.t - this.offsetTime) p = 0;
                      else {
                        var b;
                        d.__fnct
                          ? (b = d.__fnct)
                          : ((b = G.getBezierEasing(
                              d.o.x,
                              d.o.y,
                              d.i.x,
                              d.i.y
                            ).get),
                            (d.__fnct = b)),
                          (p = b(
                            (t - (d.t - this.offsetTime)) /
                              (u.t - this.offsetTime - (d.t - this.offsetTime))
                          ));
                      }
                      r = u.s ? u.s[0] : d.e[0];
                    }
                    s = d.s[0];
                  }
                  for (
                    h = e._length, l = s.i[0].length, i.lastIndex = m, n = 0;
                    n < h;
                    n += 1
                  )
                    for (o = 0; o < l; o += 1)
                      (f = a
                        ? s.i[n][o]
                        : s.i[n][o] + (r.i[n][o] - s.i[n][o]) * p),
                        (e.i[n][o] = f),
                        (f = a
                          ? s.o[n][o]
                          : s.o[n][o] + (r.o[n][o] - s.o[n][o]) * p),
                        (e.o[n][o] = f),
                        (f = a
                          ? s.v[n][o]
                          : s.v[n][o] + (r.v[n][o] - s.v[n][o]) * p),
                        (e.v[n][o] = f);
                }
                function i() {
                  var e = this.comp.renderedFrame - this.offsetTime,
                    i = this.keyframes[0].t - this.offsetTime,
                    s =
                      this.keyframes[this.keyframes.length - 1].t -
                      this.offsetTime,
                    r = this._caching.lastFrame;
                  return (
                    (r !== t && ((r < i && e < i) || (r > s && e > s))) ||
                      ((this._caching.lastIndex =
                        r < e ? this._caching.lastIndex : 0),
                      this.interpolateShape(e, this.pv, this._caching)),
                    (this._caching.lastFrame = e),
                    this.pv
                  );
                }
                function s() {
                  this.paths = this.localShapeCollection;
                }
                function r(t, e) {
                  if (t._length !== e._length || t.c !== e.c) return !1;
                  var i,
                    s = t._length;
                  for (i = 0; i < s; i += 1)
                    if (
                      t.v[i][0] !== e.v[i][0] ||
                      t.v[i][1] !== e.v[i][1] ||
                      t.o[i][0] !== e.o[i][0] ||
                      t.o[i][1] !== e.o[i][1] ||
                      t.i[i][0] !== e.i[i][0] ||
                      t.i[i][1] !== e.i[i][1]
                    )
                      return !1;
                  return !0;
                }
                function a(t) {
                  r(this.v, t) ||
                    ((this.v = bt.clone(t)),
                    this.localShapeCollection.releaseShapes(),
                    this.localShapeCollection.addShape(this.v),
                    (this._mdf = !0),
                    (this.paths = this.localShapeCollection));
                }
                function n() {
                  if (this.elem.globalData.frameId !== this.frameId)
                    if (this.effectsSequence.length)
                      if (this.lock) this.setVValue(this.pv);
                      else {
                        (this.lock = !0), (this._mdf = !1);
                        var t,
                          e = this.kf
                            ? this.pv
                            : this.data.ks
                            ? this.data.ks.k
                            : this.data.pt.k,
                          i = this.effectsSequence.length;
                        for (t = 0; t < i; t += 1)
                          e = this.effectsSequence[t](e);
                        this.setVValue(e),
                          (this.lock = !1),
                          (this.frameId = this.elem.globalData.frameId);
                      }
                    else this._mdf = !1;
                }
                function o(t, e, i) {
                  (this.propType = "shape"),
                    (this.comp = t.comp),
                    (this.container = t),
                    (this.elem = t),
                    (this.data = e),
                    (this.k = !1),
                    (this.kf = !1),
                    (this._mdf = !1);
                  var r = 3 === i ? e.pt.k : e.ks.k;
                  (this.v = bt.clone(r)),
                    (this.pv = bt.clone(this.v)),
                    (this.localShapeCollection = _t.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.paths.addShape(this.v),
                    (this.reset = s),
                    (this.effectsSequence = []);
                }
                function h(t) {
                  this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this);
                }
                function p(e, r, a) {
                  (this.propType = "shape"),
                    (this.comp = e.comp),
                    (this.elem = e),
                    (this.container = e),
                    (this.offsetTime = e.data.st),
                    (this.keyframes = 3 === a ? r.pt.k : r.ks.k),
                    (this.k = !0),
                    (this.kf = !0);
                  var n = this.keyframes[0].s[0].i.length;
                  this.keyframes[0].s[0].i[0].length,
                    (this.v = bt.newElement()),
                    this.v.setPathData(this.keyframes[0].s[0].c, n),
                    (this.pv = bt.clone(this.v)),
                    (this.localShapeCollection = _t.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.paths.addShape(this.v),
                    (this.lastFrame = t),
                    (this.reset = s),
                    (this._caching = { lastFrame: t, lastIndex: 0 }),
                    (this.effectsSequence = [i.bind(this)]);
                }
                (o.prototype.interpolateShape = e),
                  (o.prototype.getValue = n),
                  (o.prototype.setVValue = a),
                  (o.prototype.addEffect = h),
                  (p.prototype.getValue = n),
                  (p.prototype.interpolateShape = e),
                  (p.prototype.setVValue = a),
                  (p.prototype.addEffect = h);
                var f = (function () {
                    var t = d;
                    function e(t, e) {
                      (this.v = bt.newElement()),
                        this.v.setPathData(!0, 4),
                        (this.localShapeCollection = _t.newShapeCollection()),
                        (this.paths = this.localShapeCollection),
                        this.localShapeCollection.addShape(this.v),
                        (this.d = e.d),
                        (this.elem = t),
                        (this.comp = t.comp),
                        (this.frameId = -1),
                        this.initDynamicPropertyContainer(t),
                        (this.p = K.getProp(t, e.p, 1, 0, this)),
                        (this.s = K.getProp(t, e.s, 1, 0, this)),
                        this.dynamicProperties.length
                          ? (this.k = !0)
                          : ((this.k = !1), this.convertEllToPath());
                    }
                    return (
                      (e.prototype = {
                        reset: s,
                        getValue: function () {
                          this.elem.globalData.frameId !== this.frameId &&
                            ((this.frameId = this.elem.globalData.frameId),
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertEllToPath());
                        },
                        convertEllToPath: function () {
                          var e = this.p.v[0],
                            i = this.p.v[1],
                            s = this.s.v[0] / 2,
                            r = this.s.v[1] / 2,
                            a = 3 !== this.d,
                            n = this.v;
                          (n.v[0][0] = e),
                            (n.v[0][1] = i - r),
                            (n.v[1][0] = a ? e + s : e - s),
                            (n.v[1][1] = i),
                            (n.v[2][0] = e),
                            (n.v[2][1] = i + r),
                            (n.v[3][0] = a ? e - s : e + s),
                            (n.v[3][1] = i),
                            (n.i[0][0] = a ? e - s * t : e + s * t),
                            (n.i[0][1] = i - r),
                            (n.i[1][0] = a ? e + s : e - s),
                            (n.i[1][1] = i - r * t),
                            (n.i[2][0] = a ? e + s * t : e - s * t),
                            (n.i[2][1] = i + r),
                            (n.i[3][0] = a ? e - s : e + s),
                            (n.i[3][1] = i + r * t),
                            (n.o[0][0] = a ? e + s * t : e - s * t),
                            (n.o[0][1] = i - r),
                            (n.o[1][0] = a ? e + s : e - s),
                            (n.o[1][1] = i + r * t),
                            (n.o[2][0] = a ? e - s * t : e + s * t),
                            (n.o[2][1] = i + r),
                            (n.o[3][0] = a ? e - s : e + s),
                            (n.o[3][1] = i - r * t);
                        },
                      }),
                      O([R], e),
                      e
                    );
                  })(),
                  m = (function () {
                    function t(t, e) {
                      (this.v = bt.newElement()),
                        this.v.setPathData(!0, 0),
                        (this.elem = t),
                        (this.comp = t.comp),
                        (this.data = e),
                        (this.frameId = -1),
                        (this.d = e.d),
                        this.initDynamicPropertyContainer(t),
                        1 === e.sy
                          ? ((this.ir = K.getProp(t, e.ir, 0, 0, this)),
                            (this.is = K.getProp(t, e.is, 0, 0.01, this)),
                            (this.convertToPath = this.convertStarToPath))
                          : (this.convertToPath = this.convertPolygonToPath),
                        (this.pt = K.getProp(t, e.pt, 0, 0, this)),
                        (this.p = K.getProp(t, e.p, 1, 0, this)),
                        (this.r = K.getProp(t, e.r, 0, c, this)),
                        (this.or = K.getProp(t, e.or, 0, 0, this)),
                        (this.os = K.getProp(t, e.os, 0, 0.01, this)),
                        (this.localShapeCollection = _t.newShapeCollection()),
                        this.localShapeCollection.addShape(this.v),
                        (this.paths = this.localShapeCollection),
                        this.dynamicProperties.length
                          ? (this.k = !0)
                          : ((this.k = !1), this.convertToPath());
                    }
                    return (
                      (t.prototype = {
                        reset: s,
                        getValue: function () {
                          this.elem.globalData.frameId !== this.frameId &&
                            ((this.frameId = this.elem.globalData.frameId),
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertToPath());
                        },
                        convertStarToPath: function () {
                          var t,
                            e,
                            i,
                            s,
                            r = 2 * Math.floor(this.pt.v),
                            a = (2 * Math.PI) / r,
                            n = !0,
                            o = this.or.v,
                            h = this.ir.v,
                            l = this.os.v,
                            p = this.is.v,
                            f = (2 * Math.PI * o) / (2 * r),
                            m = (2 * Math.PI * h) / (2 * r),
                            c = -Math.PI / 2;
                          c += this.r.v;
                          var d = 3 === this.data.d ? -1 : 1;
                          for (this.v._length = 0, t = 0; t < r; t += 1) {
                            (i = n ? l : p), (s = n ? f : m);
                            var u = (e = n ? o : h) * Math.cos(c),
                              g = e * Math.sin(c),
                              y =
                                0 === u && 0 === g
                                  ? 0
                                  : g / Math.sqrt(u * u + g * g),
                              v =
                                0 === u && 0 === g
                                  ? 0
                                  : -u / Math.sqrt(u * u + g * g);
                            (u += +this.p.v[0]),
                              (g += +this.p.v[1]),
                              this.v.setTripleAt(
                                u,
                                g,
                                u - y * s * i * d,
                                g - v * s * i * d,
                                u + y * s * i * d,
                                g + v * s * i * d,
                                t,
                                !0
                              ),
                              (n = !n),
                              (c += a * d);
                          }
                        },
                        convertPolygonToPath: function () {
                          var t,
                            e = Math.floor(this.pt.v),
                            i = (2 * Math.PI) / e,
                            s = this.or.v,
                            r = this.os.v,
                            a = (2 * Math.PI * s) / (4 * e),
                            n = -Math.PI / 2,
                            o = 3 === this.data.d ? -1 : 1;
                          for (
                            n += this.r.v, this.v._length = 0, t = 0;
                            t < e;
                            t += 1
                          ) {
                            var h = s * Math.cos(n),
                              l = s * Math.sin(n),
                              p =
                                0 === h && 0 === l
                                  ? 0
                                  : l / Math.sqrt(h * h + l * l),
                              f =
                                0 === h && 0 === l
                                  ? 0
                                  : -h / Math.sqrt(h * h + l * l);
                            (h += +this.p.v[0]),
                              (l += +this.p.v[1]),
                              this.v.setTripleAt(
                                h,
                                l,
                                h - p * a * r * o,
                                l - f * a * r * o,
                                h + p * a * r * o,
                                l + f * a * r * o,
                                t,
                                !0
                              ),
                              (n += i * o);
                          }
                          (this.paths.length = 0), (this.paths[0] = this.v);
                        },
                      }),
                      O([R], t),
                      t
                    );
                  })(),
                  u = (function () {
                    function t(t, e) {
                      (this.v = bt.newElement()),
                        (this.v.c = !0),
                        (this.localShapeCollection = _t.newShapeCollection()),
                        this.localShapeCollection.addShape(this.v),
                        (this.paths = this.localShapeCollection),
                        (this.elem = t),
                        (this.comp = t.comp),
                        (this.frameId = -1),
                        (this.d = e.d),
                        this.initDynamicPropertyContainer(t),
                        (this.p = K.getProp(t, e.p, 1, 0, this)),
                        (this.s = K.getProp(t, e.s, 1, 0, this)),
                        (this.r = K.getProp(t, e.r, 0, 0, this)),
                        this.dynamicProperties.length
                          ? (this.k = !0)
                          : ((this.k = !1), this.convertRectToPath());
                    }
                    return (
                      (t.prototype = {
                        convertRectToPath: function () {
                          var t = this.p.v[0],
                            e = this.p.v[1],
                            i = this.s.v[0] / 2,
                            s = this.s.v[1] / 2,
                            r = l(i, s, this.r.v),
                            a = r * (1 - d);
                          (this.v._length = 0),
                            2 === this.d || 1 === this.d
                              ? (this.v.setTripleAt(
                                  t + i,
                                  e - s + r,
                                  t + i,
                                  e - s + r,
                                  t + i,
                                  e - s + a,
                                  0,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + i,
                                  e + s - r,
                                  t + i,
                                  e + s - a,
                                  t + i,
                                  e + s - r,
                                  1,
                                  !0
                                ),
                                0 !== r
                                  ? (this.v.setTripleAt(
                                      t + i - r,
                                      e + s,
                                      t + i - r,
                                      e + s,
                                      t + i - a,
                                      e + s,
                                      2,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i + r,
                                      e + s,
                                      t - i + a,
                                      e + s,
                                      t - i + r,
                                      e + s,
                                      3,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e + s - r,
                                      t - i,
                                      e + s - r,
                                      t - i,
                                      e + s - a,
                                      4,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e - s + r,
                                      t - i,
                                      e - s + a,
                                      t - i,
                                      e - s + r,
                                      5,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i + r,
                                      e - s,
                                      t - i + r,
                                      e - s,
                                      t - i + a,
                                      e - s,
                                      6,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + i - r,
                                      e - s,
                                      t + i - a,
                                      e - s,
                                      t + i - r,
                                      e - s,
                                      7,
                                      !0
                                    ))
                                  : (this.v.setTripleAt(
                                      t - i,
                                      e + s,
                                      t - i + a,
                                      e + s,
                                      t - i,
                                      e + s,
                                      2
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e - s,
                                      t - i,
                                      e - s + a,
                                      t - i,
                                      e - s,
                                      3
                                    )))
                              : (this.v.setTripleAt(
                                  t + i,
                                  e - s + r,
                                  t + i,
                                  e - s + a,
                                  t + i,
                                  e - s + r,
                                  0,
                                  !0
                                ),
                                0 !== r
                                  ? (this.v.setTripleAt(
                                      t + i - r,
                                      e - s,
                                      t + i - r,
                                      e - s,
                                      t + i - a,
                                      e - s,
                                      1,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i + r,
                                      e - s,
                                      t - i + a,
                                      e - s,
                                      t - i + r,
                                      e - s,
                                      2,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e - s + r,
                                      t - i,
                                      e - s + r,
                                      t - i,
                                      e - s + a,
                                      3,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e + s - r,
                                      t - i,
                                      e + s - a,
                                      t - i,
                                      e + s - r,
                                      4,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i + r,
                                      e + s,
                                      t - i + r,
                                      e + s,
                                      t - i + a,
                                      e + s,
                                      5,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + i - r,
                                      e + s,
                                      t + i - a,
                                      e + s,
                                      t + i - r,
                                      e + s,
                                      6,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + i,
                                      e + s - r,
                                      t + i,
                                      e + s - r,
                                      t + i,
                                      e + s - a,
                                      7,
                                      !0
                                    ))
                                  : (this.v.setTripleAt(
                                      t - i,
                                      e - s,
                                      t - i + a,
                                      e - s,
                                      t - i,
                                      e - s,
                                      1,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t - i,
                                      e + s,
                                      t - i,
                                      e + s - a,
                                      t - i,
                                      e + s,
                                      2,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + i,
                                      e + s,
                                      t + i - a,
                                      e + s,
                                      t + i,
                                      e + s,
                                      3,
                                      !0
                                    )));
                        },
                        getValue: function (t) {
                          this.elem.globalData.frameId !== this.frameId &&
                            ((this.frameId = this.elem.globalData.frameId),
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertRectToPath());
                        },
                        reset: s,
                      }),
                      O([R], t),
                      t
                    );
                  })();
                function g(t, e, i) {
                  var s;
                  return (
                    3 === i || 4 === i
                      ? (s = (3 === i ? e.pt : e.ks).k.length
                          ? new p(t, e, i)
                          : new o(t, e, i))
                      : 5 === i
                      ? (s = new u(t, e))
                      : 6 === i
                      ? (s = new f(t, e))
                      : 7 === i && (s = new m(t, e)),
                    s.k && t.addDynamicProperty(s),
                    s
                  );
                }
                function y() {
                  return o;
                }
                function v() {
                  return p;
                }
                var b = {};
                return (
                  (b.getShapeProp = g),
                  (b.getConstructorFunction = y),
                  (b.getKeyframedConstructorFunction = v),
                  b
                );
              })(),
              $ = (function () {
                var t = {},
                  e = {};
                function i(t, i) {
                  e[t] || (e[t] = i);
                }
                function s(t, i, s) {
                  return new e[t](i, s);
                }
                return (t.registerModifier = i), (t.getModifier = s), t;
              })();
            function Q() {}
            function tt() {}
            function et() {}
            function it() {}
            function st() {
              (this._length = 0),
                (this._maxLength = 4),
                (this.shapes = I(this._maxLength));
            }
            function rt(t, e, i, s) {
              (this.elem = t),
                (this.frameId = -1),
                (this.dataProps = I(e.length)),
                (this.renderer = i),
                (this.k = !1),
                (this.dashStr = ""),
                (this.dashArray = F("float32", e.length ? e.length - 1 : 0)),
                (this.dashoffset = F("float32", 1)),
                this.initDynamicPropertyContainer(s);
              var r,
                a,
                n = e.length || 0;
              for (r = 0; r < n; r += 1)
                (a = K.getProp(t, e[r].v, 0, 0, this)),
                  (this.k = a.k || this.k),
                  (this.dataProps[r] = { n: e[r].n, p: a });
              this.k || this.getValue(!0), (this._isAnimated = this.k);
            }
            function at(t, e, i) {
              (this.data = e), (this.c = F("uint8c", 4 * e.p));
              var s = e.k.k[0].s
                ? e.k.k[0].s.length - 4 * e.p
                : e.k.k.length - 4 * e.p;
              (this.o = F("float32", s)),
                (this._cmdf = !1),
                (this._omdf = !1),
                (this._collapsable = this.checkCollapsable()),
                (this._hasOpacity = s),
                this.initDynamicPropertyContainer(i),
                (this.prop = K.getProp(t, e.k, 1, null, this)),
                (this.k = this.prop.k),
                this.getValue(!0);
            }
            (Q.prototype.initModifierProperties = function () {}),
              (Q.prototype.addShapeToModifier = function () {}),
              (Q.prototype.addShape = function (t) {
                if (!this.closed) {
                  t.sh.container.addDynamicProperty(t.sh);
                  var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: _t.newShapeCollection(),
                  };
                  this.shapes.push(e),
                    this.addShapeToModifier(e),
                    this._isAnimated && t.setAsAnimated();
                }
              }),
              (Q.prototype.init = function (t, e) {
                (this.shapes = []),
                  (this.elem = t),
                  this.initDynamicPropertyContainer(t),
                  this.initModifierProperties(t, e),
                  (this.frameId = r),
                  (this.closed = !1),
                  (this.k = !1),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : this.getValue(!0);
              }),
              (Q.prototype.processKeys = function () {
                this.elem.globalData.frameId !== this.frameId &&
                  ((this.frameId = this.elem.globalData.frameId),
                  this.iterateDynamicProperties());
              }),
              O([R], Q),
              O([Q], tt),
              (tt.prototype.initModifierProperties = function (t, e) {
                (this.s = K.getProp(t, e.s, 0, 0.01, this)),
                  (this.e = K.getProp(t, e.e, 0, 0.01, this)),
                  (this.o = K.getProp(t, e.o, 0, 0, this)),
                  (this.sValue = 0),
                  (this.eValue = 0),
                  (this.getValue = this.processKeys),
                  (this.m = e.m),
                  (this._isAnimated =
                    !!this.s.effectsSequence.length ||
                    !!this.e.effectsSequence.length ||
                    !!this.o.effectsSequence.length);
              }),
              (tt.prototype.addShapeToModifier = function (t) {
                t.pathsData = [];
              }),
              (tt.prototype.calculateShapeEdges = function (t, e, i, s, r) {
                var a = [];
                e <= 1
                  ? a.push({ s: t, e })
                  : t >= 1
                  ? a.push({ s: t - 1, e: e - 1 })
                  : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
                var n,
                  o,
                  h = [],
                  l = a.length;
                for (n = 0; n < l; n += 1) {
                  var p, f;
                  (o = a[n]).e * r < s ||
                    o.s * r > s + i ||
                    ((p = o.s * r <= s ? 0 : (o.s * r - s) / i),
                    (f = o.e * r >= s + i ? 1 : (o.e * r - s) / i),
                    h.push([p, f]));
                }
                return h.length || h.push([0, 0]), h;
              }),
              (tt.prototype.releasePathsData = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1) xt.release(t[e]);
                return (t.length = 0), t;
              }),
              (tt.prototype.processShapes = function (t) {
                var e, i, s;
                if (this._mdf || t) {
                  var r = (this.o.v % 360) / 360;
                  if (
                    (r < 0 && (r += 1),
                    (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + r) >
                      (i =
                        (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + r))
                  ) {
                    var a = e;
                    (e = i), (i = a);
                  }
                  (e = 1e-4 * Math.round(1e4 * e)),
                    (i = 1e-4 * Math.round(1e4 * i)),
                    (this.sValue = e),
                    (this.eValue = i);
                } else (e = this.sValue), (i = this.eValue);
                var n,
                  o,
                  h,
                  l,
                  p,
                  f,
                  m = this.shapes.length,
                  c = 0;
                if (i === e)
                  for (n = 0; n < m; n += 1)
                    this.shapes[n].localShapeCollection.releaseShapes(),
                      (this.shapes[n].shape._mdf = !0),
                      (this.shapes[n].shape.paths =
                        this.shapes[n].localShapeCollection);
                else if ((1 === i && 0 === e) || (0 === i && 1 === e)) {
                  if (this._mdf)
                    for (n = 0; n < m; n += 1)
                      (this.shapes[n].pathsData.length = 0),
                        (this.shapes[n].shape._mdf = !0);
                } else {
                  var d,
                    u,
                    g = [];
                  for (n = 0; n < m; n += 1)
                    if (
                      (d = this.shapes[n]).shape._mdf ||
                      this._mdf ||
                      t ||
                      2 === this.m
                    ) {
                      if (
                        ((h = (s = d.shape.paths)._length),
                        (f = 0),
                        !d.shape._mdf && d.pathsData.length)
                      )
                        f = d.totalShapeLength;
                      else {
                        for (
                          l = this.releasePathsData(d.pathsData), o = 0;
                          o < h;
                          o += 1
                        )
                          (p = j.getSegmentsLength(s.shapes[o])),
                            l.push(p),
                            (f += p.totalLength);
                        (d.totalShapeLength = f), (d.pathsData = l);
                      }
                      (c += f), (d.shape._mdf = !0);
                    } else d.shape.paths = d.localShapeCollection;
                  var y,
                    v = e,
                    b = i,
                    _ = 0;
                  for (n = m - 1; n >= 0; n -= 1)
                    if ((d = this.shapes[n]).shape._mdf) {
                      for (
                        (u = d.localShapeCollection).releaseShapes(),
                          2 === this.m && m > 1
                            ? ((y = this.calculateShapeEdges(
                                e,
                                i,
                                d.totalShapeLength,
                                _,
                                c
                              )),
                              (_ += d.totalShapeLength))
                            : (y = [[v, b]]),
                          h = y.length,
                          o = 0;
                        o < h;
                        o += 1
                      ) {
                        (v = y[o][0]),
                          (b = y[o][1]),
                          (g.length = 0),
                          b <= 1
                            ? g.push({
                                s: d.totalShapeLength * v,
                                e: d.totalShapeLength * b,
                              })
                            : v >= 1
                            ? g.push({
                                s: d.totalShapeLength * (v - 1),
                                e: d.totalShapeLength * (b - 1),
                              })
                            : (g.push({
                                s: d.totalShapeLength * v,
                                e: d.totalShapeLength,
                              }),
                              g.push({
                                s: 0,
                                e: d.totalShapeLength * (b - 1),
                              }));
                        var x = this.addShapes(d, g[0]);
                        if (g[0].s !== g[0].e) {
                          if (g.length > 1)
                            if (
                              d.shape.paths.shapes[d.shape.paths._length - 1].c
                            ) {
                              var E = x.pop();
                              this.addPaths(x, u),
                                (x = this.addShapes(d, g[1], E));
                            } else
                              this.addPaths(x, u),
                                (x = this.addShapes(d, g[1]));
                          this.addPaths(x, u);
                        }
                      }
                      d.shape.paths = u;
                    }
                }
              }),
              (tt.prototype.addPaths = function (t, e) {
                var i,
                  s = t.length;
                for (i = 0; i < s; i += 1) e.addShape(t[i]);
              }),
              (tt.prototype.addSegment = function (t, e, i, s, r, a, n) {
                r.setXYAt(e[0], e[1], "o", a),
                  r.setXYAt(i[0], i[1], "i", a + 1),
                  n && r.setXYAt(t[0], t[1], "v", a),
                  r.setXYAt(s[0], s[1], "v", a + 1);
              }),
              (tt.prototype.addSegmentFromArray = function (t, e, i, s) {
                e.setXYAt(t[1], t[5], "o", i),
                  e.setXYAt(t[2], t[6], "i", i + 1),
                  s && e.setXYAt(t[0], t[4], "v", i),
                  e.setXYAt(t[3], t[7], "v", i + 1);
              }),
              (tt.prototype.addShapes = function (t, e, i) {
                var s,
                  r,
                  a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f = t.pathsData,
                  m = t.shape.paths.shapes,
                  c = t.shape.paths._length,
                  d = 0,
                  u = [],
                  g = !0;
                for (
                  i
                    ? ((o = i._length), (p = i._length))
                    : ((i = bt.newElement()), (o = 0), (p = 0)),
                    u.push(i),
                    s = 0;
                  s < c;
                  s += 1
                ) {
                  for (
                    h = f[s].lengths,
                      i.c = m[s].c,
                      a = m[s].c ? h.length : h.length + 1,
                      r = 1;
                    r < a;
                    r += 1
                  )
                    if (d + (n = h[r - 1]).addedLength < e.s)
                      (d += n.addedLength), (i.c = !1);
                    else {
                      if (d > e.e) {
                        i.c = !1;
                        break;
                      }
                      e.s <= d && e.e >= d + n.addedLength
                        ? (this.addSegment(
                            m[s].v[r - 1],
                            m[s].o[r - 1],
                            m[s].i[r],
                            m[s].v[r],
                            i,
                            o,
                            g
                          ),
                          (g = !1))
                        : ((l = j.getNewSegment(
                            m[s].v[r - 1],
                            m[s].v[r],
                            m[s].o[r - 1],
                            m[s].i[r],
                            (e.s - d) / n.addedLength,
                            (e.e - d) / n.addedLength,
                            h[r - 1]
                          )),
                          this.addSegmentFromArray(l, i, o, g),
                          (g = !1),
                          (i.c = !1)),
                        (d += n.addedLength),
                        (o += 1);
                    }
                  if (m[s].c && h.length) {
                    if (((n = h[r - 1]), d <= e.e)) {
                      var y = h[r - 1].addedLength;
                      e.s <= d && e.e >= d + y
                        ? (this.addSegment(
                            m[s].v[r - 1],
                            m[s].o[r - 1],
                            m[s].i[0],
                            m[s].v[0],
                            i,
                            o,
                            g
                          ),
                          (g = !1))
                        : ((l = j.getNewSegment(
                            m[s].v[r - 1],
                            m[s].v[0],
                            m[s].o[r - 1],
                            m[s].i[0],
                            (e.s - d) / y,
                            (e.e - d) / y,
                            h[r - 1]
                          )),
                          this.addSegmentFromArray(l, i, o, g),
                          (g = !1),
                          (i.c = !1));
                    } else i.c = !1;
                    (d += n.addedLength), (o += 1);
                  }
                  if (
                    (i._length &&
                      (i.setXYAt(i.v[p][0], i.v[p][1], "i", p),
                      i.setXYAt(
                        i.v[i._length - 1][0],
                        i.v[i._length - 1][1],
                        "o",
                        i._length - 1
                      )),
                    d > e.e)
                  )
                    break;
                  s < c - 1 &&
                    ((i = bt.newElement()), (g = !0), u.push(i), (o = 0));
                }
                return u;
              }),
              $.registerModifier("tm", tt),
              O([Q], et),
              (et.prototype.initModifierProperties = function (t, e) {
                (this.getValue = this.processKeys),
                  (this.rd = K.getProp(t, e.r, 0, null, this)),
                  (this._isAnimated = !!this.rd.effectsSequence.length);
              }),
              (et.prototype.processPath = function (t, e) {
                var i = bt.newElement();
                i.c = t.c;
                var s,
                  r,
                  a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f,
                  m,
                  c,
                  u,
                  g,
                  y = t._length,
                  v = 0;
                for (s = 0; s < y; s += 1)
                  (r = t.v[s]),
                    (n = t.o[s]),
                    (a = t.i[s]),
                    r[0] === n[0] &&
                    r[1] === n[1] &&
                    r[0] === a[0] &&
                    r[1] === a[1]
                      ? (0 !== s && s !== y - 1) || t.c
                        ? ((o = 0 === s ? t.v[y - 1] : t.v[s - 1]),
                          (l = (h = Math.sqrt(
                            Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)
                          ))
                            ? Math.min(h / 2, e) / h
                            : 0),
                          (p = u = r[0] + (o[0] - r[0]) * l),
                          (f = g = r[1] - (r[1] - o[1]) * l),
                          (m = p - (p - r[0]) * d),
                          (c = f - (f - r[1]) * d),
                          i.setTripleAt(p, f, m, c, u, g, v),
                          (v += 1),
                          (o = s === y - 1 ? t.v[0] : t.v[s + 1]),
                          (l = (h = Math.sqrt(
                            Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)
                          ))
                            ? Math.min(h / 2, e) / h
                            : 0),
                          (p = m = r[0] + (o[0] - r[0]) * l),
                          (f = c = r[1] + (o[1] - r[1]) * l),
                          (u = p - (p - r[0]) * d),
                          (g = f - (f - r[1]) * d),
                          i.setTripleAt(p, f, m, c, u, g, v),
                          (v += 1))
                        : (i.setTripleAt(r[0], r[1], n[0], n[1], a[0], a[1], v),
                          (v += 1))
                      : (i.setTripleAt(
                          t.v[s][0],
                          t.v[s][1],
                          t.o[s][0],
                          t.o[s][1],
                          t.i[s][0],
                          t.i[s][1],
                          v
                        ),
                        (v += 1));
                return i;
              }),
              (et.prototype.processShapes = function (t) {
                var e,
                  i,
                  s,
                  r,
                  a,
                  n,
                  o = this.shapes.length,
                  h = this.rd.v;
                if (0 !== h)
                  for (i = 0; i < o; i += 1) {
                    if (
                      ((a = this.shapes[i]).shape.paths,
                      (n = a.localShapeCollection),
                      a.shape._mdf || this._mdf || t)
                    )
                      for (
                        n.releaseShapes(),
                          a.shape._mdf = !0,
                          e = a.shape.paths.shapes,
                          r = a.shape.paths._length,
                          s = 0;
                        s < r;
                        s += 1
                      )
                        n.addShape(this.processPath(e[s], h));
                    a.shape.paths = a.localShapeCollection;
                  }
                this.dynamicProperties.length || (this._mdf = !1);
              }),
              $.registerModifier("rd", et),
              O([Q], it),
              (it.prototype.initModifierProperties = function (t, e) {
                (this.getValue = this.processKeys),
                  (this.c = K.getProp(t, e.c, 0, null, this)),
                  (this.o = K.getProp(t, e.o, 0, null, this)),
                  (this.tr = U.getTransformProperty(t, e.tr, this)),
                  (this.so = K.getProp(t, e.tr.so, 0, 0.01, this)),
                  (this.eo = K.getProp(t, e.tr.eo, 0, 0.01, this)),
                  (this.data = e),
                  this.dynamicProperties.length || this.getValue(!0),
                  (this._isAnimated = !!this.dynamicProperties.length),
                  (this.pMatrix = new N()),
                  (this.rMatrix = new N()),
                  (this.sMatrix = new N()),
                  (this.tMatrix = new N()),
                  (this.matrix = new N());
              }),
              (it.prototype.applyTransforms = function (t, e, i, s, r, a) {
                var n = a ? -1 : 1,
                  o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r),
                  h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
                t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]),
                  e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
                  e.rotate(-s.r.v * n * r),
                  e.translate(s.a.v[0], s.a.v[1], s.a.v[2]),
                  i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
                  i.scale(a ? 1 / o : o, a ? 1 / h : h),
                  i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
              }),
              (it.prototype.init = function (t, e, i, s) {
                for (
                  this.elem = t,
                    this.arr = e,
                    this.pos = i,
                    this.elemsData = s,
                    this._currentCopies = 0,
                    this._elements = [],
                    this._groups = [],
                    this.frameId = -1,
                    this.initDynamicPropertyContainer(t),
                    this.initModifierProperties(t, e[i]);
                  i > 0;

                )
                  (i -= 1), this._elements.unshift(e[i]);
                this.dynamicProperties.length
                  ? (this.k = !0)
                  : this.getValue(!0);
              }),
              (it.prototype.resetElements = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1)
                  (t[e]._processed = !1),
                    "gr" === t[e].ty && this.resetElements(t[e].it);
              }),
              (it.prototype.cloneElements = function (t) {
                t.length;
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e), e;
              }),
              (it.prototype.changeGroupRender = function (t, e) {
                var i,
                  s = t.length;
                for (i = 0; i < s; i += 1)
                  (t[i]._render = e),
                    "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
              }),
              (it.prototype.processShapes = function (t) {
                var e, i, s, r, a;
                if (this._mdf || t) {
                  var n,
                    o = Math.ceil(this.c.v);
                  if (this._groups.length < o) {
                    for (; this._groups.length < o; ) {
                      var h = {
                        it: this.cloneElements(this._elements),
                        ty: "gr",
                      };
                      h.it.push({
                        a: { a: 0, ix: 1, k: [0, 0] },
                        nm: "Transform",
                        o: { a: 0, ix: 7, k: 100 },
                        p: { a: 0, ix: 2, k: [0, 0] },
                        r: {
                          a: 1,
                          ix: 6,
                          k: [
                            { s: 0, e: 0, t: 0 },
                            { s: 0, e: 0, t: 1 },
                          ],
                        },
                        s: { a: 0, ix: 3, k: [100, 100] },
                        sa: { a: 0, ix: 5, k: 0 },
                        sk: { a: 0, ix: 4, k: 0 },
                        ty: "tr",
                      }),
                        this.arr.splice(0, 0, h),
                        this._groups.splice(0, 0, h),
                        (this._currentCopies += 1);
                    }
                    this.elem.reloadShapes();
                  }
                  for (a = 0, s = 0; s <= this._groups.length - 1; s += 1)
                    (n = a < o),
                      (this._groups[s]._render = n),
                      this.changeGroupRender(this._groups[s].it, n),
                      (a += 1);
                  this._currentCopies = o;
                  var l = this.o.v,
                    p = l % 1,
                    f = l > 0 ? Math.floor(l) : Math.ceil(l),
                    m = (this.tr.v.props, this.pMatrix.props),
                    c = this.rMatrix.props,
                    d = this.sMatrix.props;
                  this.pMatrix.reset(),
                    this.rMatrix.reset(),
                    this.sMatrix.reset(),
                    this.tMatrix.reset(),
                    this.matrix.reset();
                  var u,
                    g,
                    y = 0;
                  if (l > 0) {
                    for (; y < f; )
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !1
                      ),
                        (y += 1);
                    p &&
                      (this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        p,
                        !1
                      ),
                      (y += p));
                  } else if (l < 0) {
                    for (; y > f; )
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !0
                      ),
                        (y -= 1);
                    p &&
                      (this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        -p,
                        !0
                      ),
                      (y -= p));
                  }
                  for (
                    s = 1 === this.data.m ? 0 : this._currentCopies - 1,
                      r = 1 === this.data.m ? 1 : -1,
                      a = this._currentCopies;
                    a;

                  ) {
                    if (
                      ((g = (i = (e = this.elemsData[s].it)[e.length - 1]
                        .transform.mProps.v.props).length),
                      (e[e.length - 1].transform.mProps._mdf = !0),
                      (e[e.length - 1].transform.op._mdf = !0),
                      (e[e.length - 1].transform.op.v =
                        this.so.v +
                        (this.eo.v - this.so.v) *
                          (s / (this._currentCopies - 1))),
                      0 !== y)
                    ) {
                      for (
                        ((0 !== s && 1 === r) ||
                          (s !== this._currentCopies - 1 && -1 === r)) &&
                          this.applyTransforms(
                            this.pMatrix,
                            this.rMatrix,
                            this.sMatrix,
                            this.tr,
                            1,
                            !1
                          ),
                          this.matrix.transform(
                            c[0],
                            c[1],
                            c[2],
                            c[3],
                            c[4],
                            c[5],
                            c[6],
                            c[7],
                            c[8],
                            c[9],
                            c[10],
                            c[11],
                            c[12],
                            c[13],
                            c[14],
                            c[15]
                          ),
                          this.matrix.transform(
                            d[0],
                            d[1],
                            d[2],
                            d[3],
                            d[4],
                            d[5],
                            d[6],
                            d[7],
                            d[8],
                            d[9],
                            d[10],
                            d[11],
                            d[12],
                            d[13],
                            d[14],
                            d[15]
                          ),
                          this.matrix.transform(
                            m[0],
                            m[1],
                            m[2],
                            m[3],
                            m[4],
                            m[5],
                            m[6],
                            m[7],
                            m[8],
                            m[9],
                            m[10],
                            m[11],
                            m[12],
                            m[13],
                            m[14],
                            m[15]
                          ),
                          u = 0;
                        u < g;
                        u += 1
                      )
                        i[u] = this.matrix.props[u];
                      this.matrix.reset();
                    } else
                      for (this.matrix.reset(), u = 0; u < g; u += 1)
                        i[u] = this.matrix.props[u];
                    (y += 1), (a -= 1), (s += r);
                  }
                } else
                  for (a = this._currentCopies, s = 0, r = 1; a; )
                    (i = (e = this.elemsData[s].it)[e.length - 1].transform
                      .mProps.v.props),
                      (e[e.length - 1].transform.mProps._mdf = !1),
                      (e[e.length - 1].transform.op._mdf = !1),
                      (a -= 1),
                      (s += r);
              }),
              (it.prototype.addShape = function () {}),
              $.registerModifier("rp", it),
              (st.prototype.addShape = function (t) {
                this._length === this._maxLength &&
                  ((this.shapes = this.shapes.concat(I(this._maxLength))),
                  (this._maxLength *= 2)),
                  (this.shapes[this._length] = t),
                  (this._length += 1);
              }),
              (st.prototype.releaseShapes = function () {
                var t;
                for (t = 0; t < this._length; t += 1)
                  bt.release(this.shapes[t]);
                this._length = 0;
              }),
              (rt.prototype.getValue = function (t) {
                if (
                  (this.elem.globalData.frameId !== this.frameId || t) &&
                  ((this.frameId = this.elem.globalData.frameId),
                  this.iterateDynamicProperties(),
                  (this._mdf = this._mdf || t),
                  this._mdf)
                ) {
                  var e = 0,
                    i = this.dataProps.length;
                  for (
                    "svg" === this.renderer && (this.dashStr = ""), e = 0;
                    e < i;
                    e += 1
                  )
                    "o" != this.dataProps[e].n
                      ? "svg" === this.renderer
                        ? (this.dashStr += " " + this.dataProps[e].p.v)
                        : (this.dashArray[e] = this.dataProps[e].p.v)
                      : (this.dashoffset[0] = this.dataProps[e].p.v);
                }
              }),
              O([R], rt),
              (at.prototype.comparePoints = function (t, e) {
                for (var i = 0, s = this.o.length / 2; i < s; ) {
                  if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01) return !1;
                  i += 1;
                }
                return !0;
              }),
              (at.prototype.checkCollapsable = function () {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                  for (var t = 0, e = this.data.k.k.length; t < e; ) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                      return !1;
                    t += 1;
                  }
                else if (!this.comparePoints(this.data.k.k, this.data.p))
                  return !1;
                return !0;
              }),
              (at.prototype.getValue = function (t) {
                if (
                  (this.prop.getValue(),
                  (this._mdf = !1),
                  (this._cmdf = !1),
                  (this._omdf = !1),
                  this.prop._mdf || t)
                ) {
                  var e,
                    i,
                    s,
                    r = 4 * this.data.p;
                  for (e = 0; e < r; e += 1)
                    (i = e % 4 == 0 ? 100 : 255),
                      (s = Math.round(this.prop.v[e] * i)),
                      this.c[e] !== s && ((this.c[e] = s), (this._cmdf = !t));
                  if (this.o.length)
                    for (
                      r = this.prop.v.length, e = 4 * this.data.p;
                      e < r;
                      e += 1
                    )
                      (i = e % 2 == 0 ? 100 : 1),
                        (s =
                          e % 2 == 0
                            ? Math.round(100 * this.prop.v[e])
                            : this.prop.v[e]),
                        this.o[e - 4 * this.data.p] !== s &&
                          ((this.o[e - 4 * this.data.p] = s),
                          (this._omdf = !t));
                  this._mdf = !t;
                }
              }),
              O([R], at);
            var nt = function (t, e, i, s) {
                if (0 === e) return "";
                var r,
                  a = t.o,
                  n = t.i,
                  o = t.v,
                  h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
                for (r = 1; r < e; r += 1)
                  h +=
                    " C" +
                    s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) +
                    " " +
                    s.applyToPointStringified(n[r][0], n[r][1]) +
                    " " +
                    s.applyToPointStringified(o[r][0], o[r][1]);
                return (
                  i &&
                    e &&
                    ((h +=
                      " C" +
                      s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) +
                      " " +
                      s.applyToPointStringified(n[0][0], n[0][1]) +
                      " " +
                      s.applyToPointStringified(o[0][0], o[0][1])),
                    (h += "z")),
                  h
                );
              },
              ot = (function () {
                var t = (function () {
                  var t = V("canvas");
                  (t.width = 1), (t.height = 1);
                  var e = t.getContext("2d");
                  return (
                    (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t
                  );
                })();
                function e() {
                  (this.loadedAssets += 1),
                    this.loadedAssets === this.totalImages &&
                      this.imagesLoadedCb &&
                      this.imagesLoadedCb(null);
                }
                function i(t, e, i) {
                  var s = "";
                  if (t.e) s = t.p;
                  else if (e) {
                    var r = t.p;
                    -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                      (s = e + r);
                  } else (s = i), (s += t.u ? t.u : ""), (s += t.p);
                  return s;
                }
                function s(e) {
                  var s = i(e, this.assetsPath, this.path),
                    r = L("image");
                  r.addEventListener("load", this._imageLoaded, !1),
                    r.addEventListener(
                      "error",
                      function () {
                        (a.img = t), this._imageLoaded();
                      }.bind(this),
                      !1
                    ),
                    r.setAttributeNS("http://www.w3.org/1999/xlink", "href", s);
                  var a = { img: r, assetData: e };
                  return a;
                }
                function r(e) {
                  var s = i(e, this.assetsPath, this.path),
                    r = V("img");
                  (r.crossOrigin = "anonymous"),
                    r.addEventListener("load", this._imageLoaded, !1),
                    r.addEventListener(
                      "error",
                      function () {
                        (a.img = t), this._imageLoaded();
                      }.bind(this),
                      !1
                    ),
                    (r.src = s);
                  var a = { img: r, assetData: e };
                  return a;
                }
                function a(t, e) {
                  this.imagesLoadedCb = e;
                  var i,
                    s = t.length;
                  for (i = 0; i < s; i += 1)
                    t[i].layers ||
                      ((this.totalImages += 1),
                      this.images.push(this._createImageData(t[i])));
                }
                function n(t) {
                  this.path = t || "";
                }
                function o(t) {
                  this.assetsPath = t || "";
                }
                function h(t) {
                  for (var e = 0, i = this.images.length; e < i; ) {
                    if (this.images[e].assetData === t)
                      return this.images[e].img;
                    e += 1;
                  }
                }
                function l() {
                  (this.imagesLoadedCb = null), (this.images.length = 0);
                }
                function p() {
                  return this.totalImages === this.loadedAssets;
                }
                function f(t) {
                  this._createImageData =
                    "svg" === t
                      ? this.createImageData.bind(this)
                      : this.createImgData.bind(this);
                }
                function m(t) {
                  (this._imageLoaded = e.bind(this)),
                    (this.assetsPath = ""),
                    (this.path = ""),
                    (this.totalImages = 0),
                    (this.loadedAssets = 0),
                    (this.imagesLoadedCb = null),
                    (this.images = []);
                }
                return (
                  (m.prototype = {
                    loadAssets: a,
                    setAssetsPath: o,
                    setPath: n,
                    loaded: p,
                    destroy: l,
                    getImage: h,
                    createImgData: r,
                    createImageData: s,
                    imageLoaded: e,
                    setCacheType: f,
                  }),
                  m
                );
              })(),
              ht = (function () {
                var t = { maskType: !0 };
                return (
                  (/MSIE 10/i.test(navigator.userAgent) ||
                    /MSIE 9/i.test(navigator.userAgent) ||
                    /rv:11.0/i.test(navigator.userAgent) ||
                    /Edge\/\d./i.test(navigator.userAgent)) &&
                    (t.maskType = !1),
                  t
                );
              })(),
              lt = (function () {
                var t = {};
                function e(t) {
                  var e = L("filter");
                  return (
                    e.setAttribute("id", t),
                    e.setAttribute("filterUnits", "objectBoundingBox"),
                    e.setAttribute("x", "0%"),
                    e.setAttribute("y", "0%"),
                    e.setAttribute("width", "100%"),
                    e.setAttribute("height", "100%"),
                    e
                  );
                }
                function i() {
                  var t = L("feColorMatrix");
                  return (
                    t.setAttribute("type", "matrix"),
                    t.setAttribute("color-interpolation-filters", "sRGB"),
                    t.setAttribute(
                      "values",
                      "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                    ),
                    t
                  );
                }
                return (
                  (t.createFilter = e), (t.createAlphaToLuminanceFilter = i), t
                );
              })(),
              pt = (function () {
                function t(t) {
                  return t.response && "object" == typeof t.response
                    ? t.response
                    : t.response && "string" == typeof t.response
                    ? JSON.parse(t.response)
                    : t.responseText
                    ? JSON.parse(t.responseText)
                    : void 0;
                }
                function e(e, i, s) {
                  var r,
                    a = new XMLHttpRequest();
                  a.open("GET", e, !0);
                  try {
                    a.responseType = "json";
                  } catch (t) {}
                  a.send(),
                    (a.onreadystatechange = function () {
                      if (4 == a.readyState)
                        if (200 == a.status) (r = t(a)), i(r);
                        else
                          try {
                            (r = t(a)), i(r);
                          } catch (t) {
                            s && s(t);
                          }
                    });
                }
                return { load: e };
              })();
            function ft(t, e, i) {
              (this._isFirstFrame = !0),
                (this._hasMaskedPath = !1),
                (this._frameId = -1),
                (this._textData = t),
                (this._renderType = e),
                (this._elem = i),
                (this._animatorsData = I(this._textData.a.length)),
                (this._pathData = {}),
                (this._moreOptions = { alignment: {} }),
                (this.renderedLetters = []),
                (this.lettersChangedFlag = !1),
                this.initDynamicPropertyContainer(i);
            }
            function mt(t, e, i) {
              var s = { propType: !1 },
                r = K.getProp,
                a = e.a;
              (this.a = {
                r: a.r ? r(t, a.r, 0, c, i) : s,
                rx: a.rx ? r(t, a.rx, 0, c, i) : s,
                ry: a.ry ? r(t, a.ry, 0, c, i) : s,
                sk: a.sk ? r(t, a.sk, 0, c, i) : s,
                sa: a.sa ? r(t, a.sa, 0, c, i) : s,
                s: a.s ? r(t, a.s, 1, 0.01, i) : s,
                a: a.a ? r(t, a.a, 1, 0, i) : s,
                o: a.o ? r(t, a.o, 0, 0.01, i) : s,
                p: a.p ? r(t, a.p, 1, 0, i) : s,
                sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
                sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
                fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
                fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
                fs: a.fs ? r(t, a.fs, 0, 0.01, i) : s,
                fb: a.fb ? r(t, a.fb, 0, 0.01, i) : s,
                t: a.t ? r(t, a.t, 0, 0, i) : s,
              }),
                (this.s = ut.getTextSelectorProp(t, e.s, i)),
                (this.s.t = e.s.t);
            }
            function ct(t, e, i, s, r, a) {
              (this.o = t),
                (this.sw = e),
                (this.sc = i),
                (this.fc = s),
                (this.m = r),
                (this.p = a),
                (this._mdf = {
                  o: !0,
                  sw: !!e,
                  sc: !!i,
                  fc: !!s,
                  m: !0,
                  p: !0,
                });
            }
            function dt(t, e) {
              (this._frameId = r),
                (this.pv = ""),
                (this.v = ""),
                (this.kf = !1),
                (this._isFirstFrame = !0),
                (this._mdf = !1),
                (this.data = e),
                (this.elem = t),
                (this.comp = this.elem.comp),
                (this.keysIndex = 0),
                (this.canResize = !1),
                (this.minimumFontSize = 1),
                (this.effectsSequence = []),
                (this.currentData = {
                  ascent: 0,
                  boxWidth: this.defaultBoxWidth,
                  f: "",
                  fStyle: "",
                  fWeight: "",
                  fc: "",
                  j: "",
                  justifyOffset: "",
                  l: [],
                  lh: 0,
                  lineWidths: [],
                  ls: "",
                  of: "",
                  s: "",
                  sc: "",
                  sw: 0,
                  t: 0,
                  tr: 0,
                  sz: 0,
                  ps: null,
                  fillColorAnim: !1,
                  strokeColorAnim: !1,
                  strokeWidthAnim: !1,
                  yOffset: 0,
                  finalSize: 0,
                  finalText: [],
                  finalLineHeight: 0,
                  __complete: !1,
                }),
                this.copyData(this.currentData, this.data.d.k[0].s),
                this.searchProperty() ||
                  this.completeTextData(this.currentData);
            }
            (ft.prototype.searchProperties = function () {
              var t,
                e,
                i = this._textData.a.length,
                s = K.getProp;
              for (t = 0; t < i; t += 1)
                (e = this._textData.a[t]),
                  (this._animatorsData[t] = new mt(this._elem, e, this));
              this._textData.p && "m" in this._textData.p
                ? ((this._pathData = {
                    f: s(this._elem, this._textData.p.f, 0, 0, this),
                    l: s(this._elem, this._textData.p.l, 0, 0, this),
                    r: this._textData.p.r,
                    m: this._elem.maskManager.getMaskProperty(
                      this._textData.p.m
                    ),
                  }),
                  (this._hasMaskedPath = !0))
                : (this._hasMaskedPath = !1),
                (this._moreOptions.alignment = s(
                  this._elem,
                  this._textData.m.a,
                  1,
                  0,
                  this
                ));
            }),
              (ft.prototype.getMeasures = function (t, e) {
                if (
                  ((this.lettersChangedFlag = e),
                  this._mdf ||
                    this._isFirstFrame ||
                    e ||
                    (this._hasMaskedPath && this._pathData.m._mdf))
                ) {
                  this._isFirstFrame = !1;
                  var i,
                    s,
                    r,
                    a,
                    n,
                    o,
                    h,
                    l,
                    p,
                    f,
                    m,
                    c,
                    d,
                    u,
                    g,
                    y,
                    v,
                    b,
                    _,
                    x = this._moreOptions.alignment.v,
                    E = this._animatorsData,
                    P = this._textData,
                    S = this.mHelper,
                    A = this._renderType,
                    k = this.renderedLetters.length,
                    D = (this.data, t.l);
                  if (this._hasMaskedPath) {
                    if (
                      ((_ = this._pathData.m),
                      !this._pathData.n || this._pathData._mdf)
                    ) {
                      var w,
                        F = _.v;
                      for (
                        this._pathData.r && (F = F.reverse()),
                          n = { tLength: 0, segments: [] },
                          a = F._length - 1,
                          y = 0,
                          r = 0;
                        r < a;
                        r += 1
                      )
                        (w = j.buildBezierData(
                          F.v[r],
                          F.v[r + 1],
                          [F.o[r][0] - F.v[r][0], F.o[r][1] - F.v[r][1]],
                          [
                            F.i[r + 1][0] - F.v[r + 1][0],
                            F.i[r + 1][1] - F.v[r + 1][1],
                          ]
                        )),
                          (n.tLength += w.segmentLength),
                          n.segments.push(w),
                          (y += w.segmentLength);
                      (r = a),
                        _.v.c &&
                          ((w = j.buildBezierData(
                            F.v[r],
                            F.v[0],
                            [F.o[r][0] - F.v[r][0], F.o[r][1] - F.v[r][1]],
                            [F.i[0][0] - F.v[0][0], F.i[0][1] - F.v[0][1]]
                          )),
                          (n.tLength += w.segmentLength),
                          n.segments.push(w),
                          (y += w.segmentLength)),
                        (this._pathData.pi = n);
                    }
                    if (
                      ((n = this._pathData.pi),
                      (o = this._pathData.f.v),
                      (m = 0),
                      (f = 1),
                      (l = 0),
                      (p = !0),
                      (u = n.segments),
                      o < 0 && _.v.c)
                    )
                      for (
                        n.tLength < Math.abs(o) &&
                          (o = -Math.abs(o) % n.tLength),
                          f = (d = u[(m = u.length - 1)].points).length - 1;
                        o < 0;

                      )
                        (o += d[f].partialLength),
                          (f -= 1) < 0 &&
                            (f = (d = u[(m -= 1)].points).length - 1);
                    (c = (d = u[m].points)[f - 1]),
                      (g = (h = d[f]).partialLength);
                  }
                  (a = D.length), (i = 0), (s = 0);
                  var I,
                    L,
                    V,
                    R,
                    B = 1.2 * t.finalSize * 0.714,
                    z = !0;
                  V = E.length;
                  var N,
                    G,
                    O,
                    H,
                    q,
                    W,
                    Y,
                    X,
                    K,
                    U,
                    J,
                    Z,
                    $,
                    Q = -1,
                    tt = o,
                    et = m,
                    it = f,
                    st = -1,
                    rt = "",
                    at = this.defaultPropsArray;
                  if (2 === t.j || 1 === t.j) {
                    var nt = 0,
                      ot = 0,
                      ht = 2 === t.j ? -0.5 : -1,
                      lt = 0,
                      pt = !0;
                    for (r = 0; r < a; r += 1)
                      if (D[r].n) {
                        for (nt && (nt += ot); lt < r; )
                          (D[lt].animatorJustifyOffset = nt), (lt += 1);
                        (nt = 0), (pt = !0);
                      } else {
                        for (L = 0; L < V; L += 1)
                          (I = E[L].a).t.propType &&
                            (pt && 2 === t.j && (ot += I.t.v * ht),
                            (N = E[L].s.getMult(
                              D[r].anIndexes[L],
                              P.a[L].s.totalChars
                            )).length
                              ? (nt += I.t.v * N[0] * ht)
                              : (nt += I.t.v * N * ht));
                        pt = !1;
                      }
                    for (nt && (nt += ot); lt < r; )
                      (D[lt].animatorJustifyOffset = nt), (lt += 1);
                  }
                  for (r = 0; r < a; r += 1) {
                    if ((S.reset(), (q = 1), D[r].n))
                      (i = 0),
                        (s += t.yOffset),
                        (s += z ? 1 : 0),
                        (o = tt),
                        (z = !1),
                        this._hasMaskedPath &&
                          ((f = it),
                          (c = (d = u[(m = et)].points)[f - 1]),
                          (g = (h = d[f]).partialLength),
                          (l = 0)),
                        ($ = U = Z = rt = ""),
                        (at = this.defaultPropsArray);
                    else {
                      if (this._hasMaskedPath) {
                        if (st !== D[r].line) {
                          switch (t.j) {
                            case 1:
                              o += y - t.lineWidths[D[r].line];
                              break;
                            case 2:
                              o += (y - t.lineWidths[D[r].line]) / 2;
                          }
                          st = D[r].line;
                        }
                        Q !== D[r].ind &&
                          (D[Q] && (o += D[Q].extra),
                          (o += D[r].an / 2),
                          (Q = D[r].ind)),
                          (o += (x[0] * D[r].an) / 200);
                        var ft = 0;
                        for (L = 0; L < V; L += 1)
                          (I = E[L].a).p.propType &&
                            ((N = E[L].s.getMult(
                              D[r].anIndexes[L],
                              P.a[L].s.totalChars
                            )).length
                              ? (ft += I.p.v[0] * N[0])
                              : (ft += I.p.v[0] * N)),
                            I.a.propType &&
                              ((N = E[L].s.getMult(
                                D[r].anIndexes[L],
                                P.a[L].s.totalChars
                              )).length
                                ? (ft += I.a.v[0] * N[0])
                                : (ft += I.a.v[0] * N));
                        for (p = !0; p; )
                          l + g >= o + ft || !d
                            ? ((v = (o + ft - l) / h.partialLength),
                              (O = c.point[0] + (h.point[0] - c.point[0]) * v),
                              (H = c.point[1] + (h.point[1] - c.point[1]) * v),
                              S.translate(
                                (-x[0] * D[r].an) / 200,
                                (-x[1] * B) / 100
                              ),
                              (p = !1))
                            : d &&
                              ((l += h.partialLength),
                              (f += 1) >= d.length &&
                                ((f = 0),
                                u[(m += 1)]
                                  ? (d = u[m].points)
                                  : _.v.c
                                  ? ((f = 0), (d = u[(m = 0)].points))
                                  : ((l -= h.partialLength), (d = null))),
                              d && ((c = h), (g = (h = d[f]).partialLength)));
                        (G = D[r].an / 2 - D[r].add), S.translate(-G, 0, 0);
                      } else
                        (G = D[r].an / 2 - D[r].add),
                          S.translate(-G, 0, 0),
                          S.translate(
                            (-x[0] * D[r].an) / 200,
                            (-x[1] * B) / 100,
                            0
                          );
                      for (D[r].l, L = 0; L < V; L += 1)
                        (I = E[L].a).t.propType &&
                          ((N = E[L].s.getMult(
                            D[r].anIndexes[L],
                            P.a[L].s.totalChars
                          )),
                          (0 === i && 0 === t.j) ||
                            (this._hasMaskedPath
                              ? N.length
                                ? (o += I.t.v * N[0])
                                : (o += I.t.v * N)
                              : N.length
                              ? (i += I.t.v * N[0])
                              : (i += I.t.v * N)));
                      for (
                        D[r].l,
                          t.strokeWidthAnim && (Y = t.sw || 0),
                          t.strokeColorAnim &&
                            (W = t.sc
                              ? [t.sc[0], t.sc[1], t.sc[2]]
                              : [0, 0, 0]),
                          t.fillColorAnim &&
                            t.fc &&
                            (X = [t.fc[0], t.fc[1], t.fc[2]]),
                          L = 0;
                        L < V;
                        L += 1
                      )
                        (I = E[L].a).a.propType &&
                          ((N = E[L].s.getMult(
                            D[r].anIndexes[L],
                            P.a[L].s.totalChars
                          )).length
                            ? S.translate(
                                -I.a.v[0] * N[0],
                                -I.a.v[1] * N[1],
                                I.a.v[2] * N[2]
                              )
                            : S.translate(
                                -I.a.v[0] * N,
                                -I.a.v[1] * N,
                                I.a.v[2] * N
                              ));
                      for (L = 0; L < V; L += 1)
                        (I = E[L].a).s.propType &&
                          ((N = E[L].s.getMult(
                            D[r].anIndexes[L],
                            P.a[L].s.totalChars
                          )).length
                            ? S.scale(
                                1 + (I.s.v[0] - 1) * N[0],
                                1 + (I.s.v[1] - 1) * N[1],
                                1
                              )
                            : S.scale(
                                1 + (I.s.v[0] - 1) * N,
                                1 + (I.s.v[1] - 1) * N,
                                1
                              ));
                      for (L = 0; L < V; L += 1) {
                        if (
                          ((I = E[L].a),
                          (N = E[L].s.getMult(
                            D[r].anIndexes[L],
                            P.a[L].s.totalChars
                          )),
                          I.sk.propType &&
                            (N.length
                              ? S.skewFromAxis(-I.sk.v * N[0], I.sa.v * N[1])
                              : S.skewFromAxis(-I.sk.v * N, I.sa.v * N)),
                          I.r.propType &&
                            (N.length
                              ? S.rotateZ(-I.r.v * N[2])
                              : S.rotateZ(-I.r.v * N)),
                          I.ry.propType &&
                            (N.length
                              ? S.rotateY(I.ry.v * N[1])
                              : S.rotateY(I.ry.v * N)),
                          I.rx.propType &&
                            (N.length
                              ? S.rotateX(I.rx.v * N[0])
                              : S.rotateX(I.rx.v * N)),
                          I.o.propType &&
                            (N.length
                              ? (q += (I.o.v * N[0] - q) * N[0])
                              : (q += (I.o.v * N - q) * N)),
                          t.strokeWidthAnim &&
                            I.sw.propType &&
                            (N.length
                              ? (Y += I.sw.v * N[0])
                              : (Y += I.sw.v * N)),
                          t.strokeColorAnim && I.sc.propType)
                        )
                          for (K = 0; K < 3; K += 1)
                            N.length
                              ? (W[K] = W[K] + (I.sc.v[K] - W[K]) * N[0])
                              : (W[K] = W[K] + (I.sc.v[K] - W[K]) * N);
                        if (t.fillColorAnim && t.fc) {
                          if (I.fc.propType)
                            for (K = 0; K < 3; K += 1)
                              N.length
                                ? (X[K] = X[K] + (I.fc.v[K] - X[K]) * N[0])
                                : (X[K] = X[K] + (I.fc.v[K] - X[K]) * N);
                          I.fh.propType &&
                            (X = N.length
                              ? T(X, I.fh.v * N[0])
                              : T(X, I.fh.v * N)),
                            I.fs.propType &&
                              (X = N.length
                                ? C(X, I.fs.v * N[0])
                                : C(X, I.fs.v * N)),
                            I.fb.propType &&
                              (X = N.length
                                ? M(X, I.fb.v * N[0])
                                : M(X, I.fb.v * N));
                        }
                      }
                      for (L = 0; L < V; L += 1)
                        (I = E[L].a).p.propType &&
                          ((N = E[L].s.getMult(
                            D[r].anIndexes[L],
                            P.a[L].s.totalChars
                          )),
                          this._hasMaskedPath
                            ? N.length
                              ? S.translate(
                                  0,
                                  I.p.v[1] * N[0],
                                  -I.p.v[2] * N[1]
                                )
                              : S.translate(0, I.p.v[1] * N, -I.p.v[2] * N)
                            : N.length
                            ? S.translate(
                                I.p.v[0] * N[0],
                                I.p.v[1] * N[1],
                                -I.p.v[2] * N[2]
                              )
                            : S.translate(
                                I.p.v[0] * N,
                                I.p.v[1] * N,
                                -I.p.v[2] * N
                              ));
                      if (
                        (t.strokeWidthAnim && (U = Y < 0 ? 0 : Y),
                        t.strokeColorAnim &&
                          (J =
                            "rgb(" +
                            Math.round(255 * W[0]) +
                            "," +
                            Math.round(255 * W[1]) +
                            "," +
                            Math.round(255 * W[2]) +
                            ")"),
                        t.fillColorAnim &&
                          t.fc &&
                          (Z =
                            "rgb(" +
                            Math.round(255 * X[0]) +
                            "," +
                            Math.round(255 * X[1]) +
                            "," +
                            Math.round(255 * X[2]) +
                            ")"),
                        this._hasMaskedPath)
                      ) {
                        if (
                          (S.translate(0, -t.ls),
                          S.translate(0, (x[1] * B) / 100 + s, 0),
                          P.p.p)
                        ) {
                          b =
                            (h.point[1] - c.point[1]) /
                            (h.point[0] - c.point[0]);
                          var mt = (180 * Math.atan(b)) / Math.PI;
                          h.point[0] < c.point[0] && (mt += 180),
                            S.rotate((-mt * Math.PI) / 180);
                        }
                        S.translate(O, H, 0),
                          (o -= (x[0] * D[r].an) / 200),
                          D[r + 1] &&
                            Q !== D[r + 1].ind &&
                            ((o += D[r].an / 2),
                            (o += (t.tr / 1e3) * t.finalSize));
                      } else {
                        switch (
                          (S.translate(i, s, 0),
                          t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                          t.j)
                        ) {
                          case 1:
                            S.translate(
                              D[r].animatorJustifyOffset +
                                t.justifyOffset +
                                (t.boxWidth - t.lineWidths[D[r].line]),
                              0,
                              0
                            );
                            break;
                          case 2:
                            S.translate(
                              D[r].animatorJustifyOffset +
                                t.justifyOffset +
                                (t.boxWidth - t.lineWidths[D[r].line]) / 2,
                              0,
                              0
                            );
                        }
                        S.translate(0, -t.ls),
                          S.translate(G, 0, 0),
                          S.translate(
                            (x[0] * D[r].an) / 200,
                            (x[1] * B) / 100,
                            0
                          ),
                          (i += D[r].l + (t.tr / 1e3) * t.finalSize);
                      }
                      "html" === A
                        ? (rt = S.toCSS())
                        : "svg" === A
                        ? (rt = S.to2dCSS())
                        : (at = [
                            S.props[0],
                            S.props[1],
                            S.props[2],
                            S.props[3],
                            S.props[4],
                            S.props[5],
                            S.props[6],
                            S.props[7],
                            S.props[8],
                            S.props[9],
                            S.props[10],
                            S.props[11],
                            S.props[12],
                            S.props[13],
                            S.props[14],
                            S.props[15],
                          ]),
                        ($ = q);
                    }
                    k <= r
                      ? ((R = new ct($, U, J, Z, rt, at)),
                        this.renderedLetters.push(R),
                        (k += 1),
                        (this.lettersChangedFlag = !0))
                      : ((R = this.renderedLetters[r]),
                        (this.lettersChangedFlag =
                          R.update($, U, J, Z, rt, at) ||
                          this.lettersChangedFlag));
                  }
                }
              }),
              (ft.prototype.getValue = function () {
                this._elem.globalData.frameId !== this._frameId &&
                  ((this._frameId = this._elem.globalData.frameId),
                  this.iterateDynamicProperties());
              }),
              (ft.prototype.mHelper = new N()),
              (ft.prototype.defaultPropsArray = []),
              O([R], ft),
              (ct.prototype.update = function (t, e, i, s, r, a) {
                (this._mdf.o = !1),
                  (this._mdf.sw = !1),
                  (this._mdf.sc = !1),
                  (this._mdf.fc = !1),
                  (this._mdf.m = !1),
                  (this._mdf.p = !1);
                var n = !1;
                return (
                  this.o !== t && ((this.o = t), (this._mdf.o = !0), (n = !0)),
                  this.sw !== e &&
                    ((this.sw = e), (this._mdf.sw = !0), (n = !0)),
                  this.sc !== i &&
                    ((this.sc = i), (this._mdf.sc = !0), (n = !0)),
                  this.fc !== s &&
                    ((this.fc = s), (this._mdf.fc = !0), (n = !0)),
                  this.m !== r && ((this.m = r), (this._mdf.m = !0), (n = !0)),
                  !a.length ||
                    (this.p[0] === a[0] &&
                      this.p[1] === a[1] &&
                      this.p[4] === a[4] &&
                      this.p[5] === a[5] &&
                      this.p[12] === a[12] &&
                      this.p[13] === a[13]) ||
                    ((this.p = a), (this._mdf.p = !0), (n = !0)),
                  n
                );
              }),
              (dt.prototype.defaultBoxWidth = [0, 0]),
              (dt.prototype.copyData = function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t;
              }),
              (dt.prototype.setCurrentData = function (t) {
                t.__complete || this.completeTextData(t),
                  (this.currentData = t),
                  (this.currentData.boxWidth =
                    this.currentData.boxWidth || this.defaultBoxWidth),
                  (this._mdf = !0);
              }),
              (dt.prototype.searchProperty = function () {
                return this.searchKeyframes();
              }),
              (dt.prototype.searchKeyframes = function () {
                return (
                  (this.kf = this.data.d.k.length > 1),
                  this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                  this.kf
                );
              }),
              (dt.prototype.addEffect = function (t) {
                this.effectsSequence.push(t),
                  this.elem.addDynamicProperty(this);
              }),
              (dt.prototype.getValue = function (t) {
                if (
                  (this.elem.globalData.frameId !== this.frameId &&
                    this.effectsSequence.length) ||
                  t
                ) {
                  this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                  var e = this.currentData,
                    i = this.keysIndex;
                  if (this.lock) this.setCurrentData(this.currentData);
                  else {
                    (this.lock = !0), (this._mdf = !1);
                    var s,
                      r = this.effectsSequence.length,
                      a = t || this.data.d.k[this.keysIndex].s;
                    for (s = 0; s < r; s += 1)
                      a =
                        i !== this.keysIndex
                          ? this.effectsSequence[s](a, a.t)
                          : this.effectsSequence[s](this.currentData, a.t);
                    e !== a && this.setCurrentData(a),
                      (this.pv = this.v = this.currentData),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
                }
              }),
              (dt.prototype.getKeyframeValue = function () {
                for (
                  var t = this.data.d.k,
                    e = this.elem.comp.renderedFrame,
                    i = 0,
                    s = t.length;
                  i <= s - 1 && (t[i].s, !(i === s - 1 || t[i + 1].t > e));

                )
                  i += 1;
                return (
                  this.keysIndex !== i && (this.keysIndex = i),
                  this.data.d.k[this.keysIndex].s
                );
              }),
              (dt.prototype.buildFinalText = function (t) {
                for (
                  var e,
                    i = X.getCombinedCharacterCodes(),
                    s = [],
                    r = 0,
                    a = t.length;
                  r < a;

                )
                  (e = t.charCodeAt(r)),
                    -1 !== i.indexOf(e)
                      ? (s[s.length - 1] += t.charAt(r))
                      : e >= 55296 &&
                        e <= 56319 &&
                        (e = t.charCodeAt(r + 1)) >= 56320 &&
                        e <= 57343
                      ? (s.push(t.substr(r, 2)), ++r)
                      : s.push(t.charAt(r)),
                    (r += 1);
                return s;
              }),
              (dt.prototype.completeTextData = function (t) {
                t.__complete = !0;
                var e,
                  i,
                  s,
                  r,
                  a,
                  n,
                  o,
                  h = this.elem.globalData.fontManager,
                  l = this.data,
                  p = [],
                  f = 0,
                  m = l.m.g,
                  c = 0,
                  d = 0,
                  u = 0,
                  g = [],
                  y = 0,
                  v = 0,
                  b = h.getFontByName(t.f),
                  _ = 0,
                  x = b.fStyle ? b.fStyle.split(" ") : [],
                  E = "normal",
                  P = "normal";
                for (i = x.length, e = 0; e < i; e += 1)
                  switch (x[e].toLowerCase()) {
                    case "italic":
                      P = "italic";
                      break;
                    case "bold":
                      E = "700";
                      break;
                    case "black":
                      E = "900";
                      break;
                    case "medium":
                      E = "500";
                      break;
                    case "regular":
                    case "normal":
                      E = "400";
                      break;
                    case "light":
                    case "thin":
                      E = "200";
                  }
                (t.fWeight = b.fWeight || E),
                  (t.fStyle = P),
                  (t.finalSize = t.s),
                  (t.finalText = this.buildFinalText(t.t)),
                  (i = t.finalText.length),
                  (t.finalLineHeight = t.lh);
                var S,
                  A = (t.tr / 1e3) * t.finalSize;
                if (t.sz)
                  for (var k, C, M = !0, T = t.sz[0], D = t.sz[1]; M; ) {
                    (k = 0),
                      (y = 0),
                      (i = (C = this.buildFinalText(t.t)).length),
                      (A = (t.tr / 1e3) * t.finalSize);
                    var w = -1;
                    for (e = 0; e < i; e += 1)
                      (S = C[e].charCodeAt(0)),
                        (s = !1),
                        " " === C[e]
                          ? (w = e)
                          : (13 !== S && 3 !== S) ||
                            ((y = 0),
                            (s = !0),
                            (k += t.finalLineHeight || 1.2 * t.finalSize)),
                        h.chars
                          ? ((o = h.getCharData(C[e], b.fStyle, b.fFamily)),
                            (_ = s ? 0 : (o.w * t.finalSize) / 100))
                          : (_ = h.measureText(C[e], t.f, t.finalSize)),
                        y + _ > T && " " !== C[e]
                          ? (-1 === w ? (i += 1) : (e = w),
                            (k += t.finalLineHeight || 1.2 * t.finalSize),
                            C.splice(e, w === e ? 1 : 0, "\r"),
                            (w = -1),
                            (y = 0))
                          : ((y += _), (y += A));
                    (k += (b.ascent * t.finalSize) / 100),
                      this.canResize &&
                      t.finalSize > this.minimumFontSize &&
                      D < k
                        ? ((t.finalSize -= 1),
                          (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                        : ((t.finalText = C),
                          (i = t.finalText.length),
                          (M = !1));
                  }
                (y = -A), (_ = 0);
                var F,
                  I = 0;
                for (e = 0; e < i; e += 1)
                  if (
                    ((s = !1),
                    13 === (S = (F = t.finalText[e]).charCodeAt(0)) || 3 === S
                      ? ((I = 0),
                        g.push(y),
                        (v = y > v ? y : v),
                        (y = -2 * A),
                        (r = ""),
                        (s = !0),
                        (u += 1))
                      : (r = F),
                    h.chars
                      ? ((o = h.getCharData(
                          F,
                          b.fStyle,
                          h.getFontByName(t.f).fFamily
                        )),
                        (_ = s ? 0 : (o.w * t.finalSize) / 100))
                      : (_ = h.measureText(r, t.f, t.finalSize)),
                    " " === F ? (I += _ + A) : ((y += _ + A + I), (I = 0)),
                    p.push({
                      l: _,
                      an: _,
                      add: c,
                      n: s,
                      anIndexes: [],
                      val: r,
                      line: u,
                      animatorJustifyOffset: 0,
                    }),
                    2 == m)
                  ) {
                    if (((c += _), "" === r || " " === r || e === i - 1)) {
                      for (("" !== r && " " !== r) || (c -= _); d <= e; )
                        (p[d].an = c),
                          (p[d].ind = f),
                          (p[d].extra = _),
                          (d += 1);
                      (f += 1), (c = 0);
                    }
                  } else if (3 == m) {
                    if (((c += _), "" === r || e === i - 1)) {
                      for ("" === r && (c -= _); d <= e; )
                        (p[d].an = c),
                          (p[d].ind = f),
                          (p[d].extra = _),
                          (d += 1);
                      (c = 0), (f += 1);
                    }
                  } else (p[f].ind = f), (p[f].extra = 0), (f += 1);
                if (((t.l = p), (v = y > v ? y : v), g.push(y), t.sz))
                  (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
                else
                  switch (((t.boxWidth = v), t.j)) {
                    case 1:
                      t.justifyOffset = -t.boxWidth;
                      break;
                    case 2:
                      t.justifyOffset = -t.boxWidth / 2;
                      break;
                    default:
                      t.justifyOffset = 0;
                  }
                t.lineWidths = g;
                var L,
                  V,
                  R = l.a;
                n = R.length;
                var B,
                  z,
                  N = [];
                for (a = 0; a < n; a += 1) {
                  for (
                    (L = R[a]).a.sc && (t.strokeColorAnim = !0),
                      L.a.sw && (t.strokeWidthAnim = !0),
                      (L.a.fc || L.a.fh || L.a.fs || L.a.fb) &&
                        (t.fillColorAnim = !0),
                      z = 0,
                      B = L.s.b,
                      e = 0;
                    e < i;
                    e += 1
                  )
                    ((V = p[e]).anIndexes[a] = z),
                      ((1 == B && "" !== V.val) ||
                        (2 == B && "" !== V.val && " " !== V.val) ||
                        (3 == B && (V.n || " " == V.val || e == i - 1)) ||
                        (4 == B && (V.n || e == i - 1))) &&
                        (1 === L.s.rn && N.push(z), (z += 1));
                  l.a[a].s.totalChars = z;
                  var G,
                    O = -1;
                  if (1 === L.s.rn)
                    for (e = 0; e < i; e += 1)
                      O != (V = p[e]).anIndexes[a] &&
                        ((O = V.anIndexes[a]),
                        (G = N.splice(
                          Math.floor(Math.random() * N.length),
                          1
                        )[0])),
                        (V.anIndexes[a] = G);
                }
                (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
                  (t.ls = t.ls || 0),
                  (t.ascent = (b.ascent * t.finalSize) / 100);
              }),
              (dt.prototype.updateDocumentData = function (t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s);
                (i = this.copyData(i, t)),
                  (this.data.d.k[e].s = i),
                  this.recalculate(e),
                  this.elem.addDynamicProperty(this);
              }),
              (dt.prototype.recalculate = function (t) {
                var e = this.data.d.k[t].s;
                (e.__complete = !1),
                  (this.keysIndex = 0),
                  (this._isFirstFrame = !0),
                  this.getValue(e);
              }),
              (dt.prototype.canResizeFont = function (t) {
                (this.canResize = t),
                  this.recalculate(this.keysIndex),
                  this.elem.addDynamicProperty(this);
              }),
              (dt.prototype.setMinimumFontSize = function (t) {
                (this.minimumFontSize = Math.floor(t) || 1),
                  this.recalculate(this.keysIndex),
                  this.elem.addDynamicProperty(this);
              });
            var ut = (function () {
                var t = Math.max,
                  e = Math.min,
                  i = Math.floor;
                function s(t, e) {
                  (this._currentTextLength = -1),
                    (this.k = !1),
                    (this.data = e),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.finalS = 0),
                    (this.finalE = 0),
                    this.initDynamicPropertyContainer(t),
                    (this.s = K.getProp(t, e.s || { k: 0 }, 0, 0, this)),
                    (this.e =
                      "e" in e ? K.getProp(t, e.e, 0, 0, this) : { v: 100 }),
                    (this.o = K.getProp(t, e.o || { k: 0 }, 0, 0, this)),
                    (this.xe = K.getProp(t, e.xe || { k: 0 }, 0, 0, this)),
                    (this.ne = K.getProp(t, e.ne || { k: 0 }, 0, 0, this)),
                    (this.a = K.getProp(t, e.a, 0, 0.01, this)),
                    this.dynamicProperties.length || this.getValue();
                }
                function r(t, e, i) {
                  return new s(t, e, i);
                }
                return (
                  (s.prototype = {
                    getMult: function (s) {
                      this._currentTextLength !==
                        this.elem.textProperty.currentData.l.length &&
                        this.getValue();
                      var r = 0,
                        a = 0,
                        n = 1,
                        o = 1;
                      this.ne.v > 0
                        ? (r = this.ne.v / 100)
                        : (a = -this.ne.v / 100),
                        this.xe.v > 0
                          ? (n = 1 - this.xe.v / 100)
                          : (o = 1 + this.xe.v / 100);
                      var h = G.getBezierEasing(r, a, n, o).get,
                        l = 0,
                        p = this.finalS,
                        f = this.finalE,
                        m = this.data.sh;
                      if (2 === m)
                        l = h(
                          (l =
                            f === p
                              ? s >= f
                                ? 1
                                : 0
                              : t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1)))
                        );
                      else if (3 === m)
                        l = h(
                          (l =
                            f === p
                              ? s >= f
                                ? 0
                                : 1
                              : 1 -
                                t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1)))
                        );
                      else if (4 === m)
                        f === p
                          ? (l = 0)
                          : (l = t(
                              0,
                              e(0.5 / (f - p) + (s - p) / (f - p), 1)
                            )) < 0.5
                          ? (l *= 2)
                          : (l = 1 - 2 * (l - 0.5)),
                          (l = h(l));
                      else if (5 === m) {
                        if (f === p) l = 0;
                        else {
                          var c = f - p,
                            d = -c / 2 + (s = e(t(0, s + 0.5 - p), f - p)),
                            u = c / 2;
                          l = Math.sqrt(1 - (d * d) / (u * u));
                        }
                        l = h(l);
                      } else
                        6 === m
                          ? (f === p
                              ? (l = 0)
                              : ((s = e(t(0, s + 0.5 - p), f - p)),
                                (l =
                                  (1 +
                                    Math.cos(
                                      Math.PI + (2 * Math.PI * s) / (f - p)
                                    )) /
                                  2)),
                            (l = h(l)))
                          : (s >= i(p) &&
                              (l = t(
                                0,
                                e(s - p < 0 ? e(f, 1) - (p - s) : f - s, 1)
                              )),
                            (l = h(l)));
                      return l * this.a.v;
                    },
                    getValue: function (t) {
                      this.iterateDynamicProperties(),
                        (this._mdf = t || this._mdf),
                        (this._currentTextLength =
                          this.elem.textProperty.currentData.l.length || 0),
                        t &&
                          2 === this.data.r &&
                          (this.e.v = this._currentTextLength);
                      var e =
                          2 === this.data.r ? 1 : 100 / this.data.totalChars,
                        i = this.o.v / e,
                        s = this.s.v / e + i,
                        r = this.e.v / e + i;
                      if (s > r) {
                        var a = s;
                        (s = r), (r = a);
                      }
                      (this.finalS = s), (this.finalE = r);
                    },
                  }),
                  O([R], s),
                  { getTextSelectorProp: r }
                );
              })(),
              gt = function (t, e, i, s) {
                var r = 0,
                  a = t,
                  n = I(a);
                function o() {
                  return r ? n[(r -= 1)] : e();
                }
                function h(t) {
                  r === a && ((n = yt.double(n)), (a *= 2)),
                    i && i(t),
                    (n[r] = t),
                    (r += 1);
                }
                return { newElement: o, release: h };
              },
              yt = (function () {
                function t(t) {
                  return t.concat(I(t.length));
                }
                return { double: t };
              })(),
              vt = (function () {
                function t() {
                  return F("float32", 2);
                }
                return gt(8, t);
              })(),
              bt = (function () {
                function t() {
                  return new J();
                }
                function e(t) {
                  var e,
                    i = t._length;
                  for (e = 0; e < i; e += 1)
                    vt.release(t.v[e]),
                      vt.release(t.i[e]),
                      vt.release(t.o[e]),
                      (t.v[e] = null),
                      (t.i[e] = null),
                      (t.o[e] = null);
                  (t._length = 0), (t.c = !1);
                }
                function i(t) {
                  var e,
                    i = s.newElement(),
                    r = void 0 === t._length ? t.v.length : t._length;
                  for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1)
                    i.setTripleAt(
                      t.v[e][0],
                      t.v[e][1],
                      t.o[e][0],
                      t.o[e][1],
                      t.i[e][0],
                      t.i[e][1],
                      e
                    );
                  return i;
                }
                var s = gt(4, t, e);
                return (s.clone = i), s;
              })(),
              _t = (function () {
                var t = { newShapeCollection: r, release: a },
                  e = 0,
                  i = 4,
                  s = I(i);
                function r() {
                  return e ? s[(e -= 1)] : new st();
                }
                function a(t) {
                  var r,
                    a = t._length;
                  for (r = 0; r < a; r += 1) bt.release(t.shapes[r]);
                  (t._length = 0),
                    e === i && ((s = yt.double(s)), (i *= 2)),
                    (s[e] = t),
                    (e += 1);
                }
                return t;
              })(),
              xt = (function () {
                function t() {
                  return { lengths: [], totalLength: 0 };
                }
                function e(t) {
                  var e,
                    i = t.lengths.length;
                  for (e = 0; e < i; e += 1) Et.release(t.lengths[e]);
                  t.lengths.length = 0;
                }
                return gt(8, t, e);
              })(),
              Et = (function () {
                function t() {
                  return {
                    addedLength: 0,
                    percents: F("float32", m),
                    lengths: F("float32", m),
                  };
                }
                return gt(8, t);
              })();
            function Pt() {}
            function St(t, e) {
              (this.animationItem = t),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.svgElement = L("svg"));
              var i = "";
              if (e && e.title) {
                var s = L("title"),
                  r = S();
                s.setAttribute("id", r),
                  (s.textContent = e.title),
                  this.svgElement.appendChild(s),
                  (i += r);
              }
              if (e && e.description) {
                var a = L("desc"),
                  n = S();
                a.setAttribute("id", n),
                  (a.textContent = e.description),
                  this.svgElement.appendChild(a),
                  (i += " " + n);
              }
              i && this.svgElement.setAttribute("aria-labelledby", i);
              var o = L("defs");
              this.svgElement.appendChild(o);
              var h = L("g");
              this.svgElement.appendChild(h),
                (this.layerElement = h),
                (this.renderConfig = {
                  preserveAspectRatio:
                    (e && e.preserveAspectRatio) || "xMidYMid meet",
                  imagePreserveAspectRatio:
                    (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                  progressiveLoad: (e && e.progressiveLoad) || !1,
                  hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                  viewBoxOnly: (e && e.viewBoxOnly) || !1,
                  viewBoxSize: (e && e.viewBoxSize) || !1,
                  className: (e && e.className) || "",
                  id: (e && e.id) || "",
                  focusable: e && e.focusable,
                  filterSize: {
                    width: (e && e.filterSize && e.filterSize.width) || "100%",
                    height:
                      (e && e.filterSize && e.filterSize.height) || "100%",
                    x: (e && e.filterSize && e.filterSize.x) || "0%",
                    y: (e && e.filterSize && e.filterSize.y) || "0%",
                  },
                }),
                (this.globalData = {
                  _mdf: !1,
                  frameNum: -1,
                  defs: o,
                  renderConfig: this.renderConfig,
                }),
                (this.elements = []),
                (this.pendingElements = []),
                (this.destroyed = !1),
                (this.rendererType = "svg");
            }
            function At(t, e, i) {
              (this.data = t),
                (this.element = e),
                (this.globalData = i),
                (this.storedData = []),
                (this.masksProperties = this.data.masksProperties || []),
                (this.maskElement = null);
              var r,
                a = this.globalData.defs,
                n = this.masksProperties ? this.masksProperties.length : 0;
              (this.viewData = I(n)), (this.solidPath = "");
              var o,
                h,
                l,
                p,
                f,
                m,
                c,
                d = this.masksProperties,
                u = 0,
                g = [],
                y = S(),
                v = "clipPath",
                b = "clip-path";
              for (r = 0; r < n; r++)
                if (
                  ((("a" !== d[r].mode && "n" !== d[r].mode) ||
                    d[r].inv ||
                    100 !== d[r].o.k ||
                    d[r].o.x) &&
                    ((v = "mask"), (b = "mask")),
                  ("s" != d[r].mode && "i" != d[r].mode) || 0 !== u
                    ? (p = null)
                    : ((p = L("rect")).setAttribute("fill", "#ffffff"),
                      p.setAttribute("width", this.element.comp.data.w || 0),
                      p.setAttribute("height", this.element.comp.data.h || 0),
                      g.push(p)),
                  (o = L("path")),
                  "n" != d[r].mode)
                ) {
                  var _;
                  if (
                    ((u += 1),
                    o.setAttribute(
                      "fill",
                      "s" === d[r].mode ? "#000000" : "#ffffff"
                    ),
                    o.setAttribute("clip-rule", "nonzero"),
                    0 !== d[r].x.k
                      ? ((v = "mask"),
                        (b = "mask"),
                        (c = K.getProp(
                          this.element,
                          d[r].x,
                          0,
                          null,
                          this.element
                        )),
                        (_ = S()),
                        (f = L("filter")).setAttribute("id", _),
                        (m = L("feMorphology")).setAttribute(
                          "operator",
                          "erode"
                        ),
                        m.setAttribute("in", "SourceGraphic"),
                        m.setAttribute("radius", "0"),
                        f.appendChild(m),
                        a.appendChild(f),
                        o.setAttribute(
                          "stroke",
                          "s" === d[r].mode ? "#000000" : "#ffffff"
                        ))
                      : ((m = null), (c = null)),
                    (this.storedData[r] = {
                      elem: o,
                      x: c,
                      expan: m,
                      lastPath: "",
                      lastOperator: "",
                      filterId: _,
                      lastRadius: 0,
                    }),
                    "i" == d[r].mode)
                  ) {
                    l = g.length;
                    var x = L("g");
                    for (h = 0; h < l; h += 1) x.appendChild(g[h]);
                    var E = L("mask");
                    E.setAttribute("mask-type", "alpha"),
                      E.setAttribute("id", y + "_" + u),
                      E.appendChild(o),
                      a.appendChild(E),
                      x.setAttribute(
                        "mask",
                        "url(" + s + "#" + y + "_" + u + ")"
                      ),
                      (g.length = 0),
                      g.push(x);
                  } else g.push(o);
                  d[r].inv &&
                    !this.solidPath &&
                    (this.solidPath = this.createLayerSolidPath()),
                    (this.viewData[r] = {
                      elem: o,
                      lastPath: "",
                      op: K.getProp(
                        this.element,
                        d[r].o,
                        0,
                        0.01,
                        this.element
                      ),
                      prop: Z.getShapeProp(this.element, d[r], 3),
                      invRect: p,
                    }),
                    this.viewData[r].prop.k ||
                      this.drawPath(
                        d[r],
                        this.viewData[r].prop.v,
                        this.viewData[r]
                      );
                } else
                  (this.viewData[r] = {
                    op: K.getProp(this.element, d[r].o, 0, 0.01, this.element),
                    prop: Z.getShapeProp(this.element, d[r], 3),
                    elem: o,
                    lastPath: "",
                  }),
                    a.appendChild(o);
              for (this.maskElement = L(v), n = g.length, r = 0; r < n; r += 1)
                this.maskElement.appendChild(g[r]);
              u > 0 &&
                (this.maskElement.setAttribute("id", y),
                this.element.maskedElement.setAttribute(
                  b,
                  "url(" + s + "#" + y + ")"
                ),
                a.appendChild(this.maskElement)),
                this.viewData.length &&
                  this.element.addRenderableComponent(this);
            }
            function kt() {}
            function Ct() {}
            function Mt() {}
            function Tt() {}
            function Dt() {}
            function wt(t, e) {
              (this.elem = t), (this.pos = e);
            }
            function Ft(t, e) {
              (this.data = t),
                (this.type = t.ty),
                (this.d = ""),
                (this.lvl = e),
                (this._mdf = !1),
                (this.closed = !0 === t.hd),
                (this.pElem = L("path")),
                (this.msElem = null);
            }
            function It(t, e, i) {
              (this.caches = []),
                (this.styles = []),
                (this.transformers = t),
                (this.lStr = ""),
                (this.sh = i),
                (this.lvl = e),
                (this._isAnimated = !!i.k);
              for (var s = 0, r = t.length; s < r; ) {
                if (t[s].mProps.dynamicProperties.length) {
                  this._isAnimated = !0;
                  break;
                }
                s += 1;
              }
            }
            function Lt(t, e, i) {
              (this.transform = { mProps: t, op: e, container: i }),
                (this.elements = []),
                (this._isAnimated =
                  this.transform.mProps.dynamicProperties.length ||
                  this.transform.op.effectsSequence.length);
            }
            function Vt(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                (this.o = K.getProp(t, e.o, 0, 0.01, this)),
                (this.w = K.getProp(t, e.w, 0, null, this)),
                (this.d = new rt(t, e.d || {}, "svg", this)),
                (this.c = K.getProp(t, e.c, 1, 255, this)),
                (this.style = i),
                (this._isAnimated = !!this._isAnimated);
            }
            function Rt(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                (this.o = K.getProp(t, e.o, 0, 0.01, this)),
                (this.c = K.getProp(t, e.c, 1, 255, this)),
                (this.style = i);
            }
            function Bt(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                this.initGradientData(t, e, i);
            }
            function zt(t, e, i) {
              this.initDynamicPropertyContainer(t),
                (this.getValue = this.iterateDynamicProperties),
                (this.w = K.getProp(t, e.w, 0, null, this)),
                (this.d = new rt(t, e.d || {}, "svg", this)),
                this.initGradientData(t, e, i),
                (this._isAnimated = !!this._isAnimated);
            }
            function Nt() {
              (this.it = []), (this.prevViewData = []), (this.gr = L("g"));
            }
            (Pt.prototype.checkLayers = function (t) {
              var e,
                i,
                s = this.layers.length;
              for (this.completeLayers = !0, e = s - 1; e >= 0; e--)
                this.elements[e] ||
                  ((i = this.layers[e]).ip - i.st <= t - this.layers[e].st &&
                    i.op - i.st > t - this.layers[e].st &&
                    this.buildItem(e)),
                  (this.completeLayers =
                    !!this.elements[e] && this.completeLayers);
              this.checkPendingElements();
            }),
              (Pt.prototype.createItem = function (t) {
                switch (t.ty) {
                  case 2:
                    return this.createImage(t);
                  case 0:
                    return this.createComp(t);
                  case 1:
                    return this.createSolid(t);
                  case 3:
                    return this.createNull(t);
                  case 4:
                    return this.createShape(t);
                  case 5:
                    return this.createText(t);
                  case 13:
                    return this.createCamera(t);
                }
                return this.createNull(t);
              }),
              (Pt.prototype.createCamera = function () {
                throw new Error(
                  "You're using a 3d camera. Try the html renderer."
                );
              }),
              (Pt.prototype.buildAllItems = function () {
                var t,
                  e = this.layers.length;
                for (t = 0; t < e; t += 1) this.buildItem(t);
                this.checkPendingElements();
              }),
              (Pt.prototype.includeLayers = function (t) {
                this.completeLayers = !1;
                var e,
                  i,
                  s = t.length,
                  r = this.layers.length;
                for (e = 0; e < s; e += 1)
                  for (i = 0; i < r; ) {
                    if (this.layers[i].id == t[e].id) {
                      this.layers[i] = t[e];
                      break;
                    }
                    i += 1;
                  }
              }),
              (Pt.prototype.setProjectInterface = function (t) {
                this.globalData.projectInterface = t;
              }),
              (Pt.prototype.initItems = function () {
                this.globalData.progressiveLoad || this.buildAllItems();
              }),
              (Pt.prototype.buildElementParenting = function (t, e, i) {
                for (
                  var s = this.elements, r = this.layers, a = 0, n = r.length;
                  a < n;

                )
                  r[a].ind == e &&
                    (s[a] && !0 !== s[a]
                      ? (i.push(s[a]),
                        s[a].setAsParent(),
                        void 0 !== r[a].parent
                          ? this.buildElementParenting(t, r[a].parent, i)
                          : t.setHierarchy(i))
                      : (this.buildItem(a), this.addPendingElement(t))),
                    (a += 1);
              }),
              (Pt.prototype.addPendingElement = function (t) {
                this.pendingElements.push(t);
              }),
              (Pt.prototype.searchExtraCompositions = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1)
                  if (t[e].xt) {
                    var s = this.createComp(t[e]);
                    s.initExpressions(),
                      this.globalData.projectInterface.registerComposition(s);
                  }
              }),
              (Pt.prototype.setupGlobalData = function (t, e) {
                (this.globalData.fontManager = new X()),
                  this.globalData.fontManager.addChars(t.chars),
                  this.globalData.fontManager.addFonts(t.fonts, e),
                  (this.globalData.getAssetData =
                    this.animationItem.getAssetData.bind(this.animationItem)),
                  (this.globalData.getAssetsPath =
                    this.animationItem.getAssetsPath.bind(this.animationItem)),
                  (this.globalData.imageLoader =
                    this.animationItem.imagePreloader),
                  (this.globalData.frameId = 0),
                  (this.globalData.frameRate = t.fr),
                  (this.globalData.nm = t.nm),
                  (this.globalData.compSize = { w: t.w, h: t.h });
              }),
              O([Pt], St),
              (St.prototype.createNull = function (t) {
                return new qt(t, this.globalData, this);
              }),
              (St.prototype.createShape = function (t) {
                return new $t(t, this.globalData, this);
              }),
              (St.prototype.createText = function (t) {
                return new Zt(t, this.globalData, this);
              }),
              (St.prototype.createImage = function (t) {
                return new Kt(t, this.globalData, this);
              }),
              (St.prototype.createComp = function (t) {
                return new Jt(t, this.globalData, this);
              }),
              (St.prototype.createSolid = function (t) {
                return new Ut(t, this.globalData, this);
              }),
              (St.prototype.configAnimation = function (t) {
                this.svgElement.setAttribute(
                  "xmlns",
                  "http://www.w3.org/2000/svg"
                ),
                  this.renderConfig.viewBoxSize
                    ? this.svgElement.setAttribute(
                        "viewBox",
                        this.renderConfig.viewBoxSize
                      )
                    : this.svgElement.setAttribute(
                        "viewBox",
                        "0 0 " + t.w + " " + t.h
                      ),
                  this.renderConfig.viewBoxOnly ||
                    (this.svgElement.setAttribute("width", t.w),
                    this.svgElement.setAttribute("height", t.h),
                    (this.svgElement.style.width = "100%"),
                    (this.svgElement.style.height = "100%"),
                    (this.svgElement.style.transform = "translate3d(0,0,0)")),
                  this.renderConfig.className &&
                    this.svgElement.setAttribute(
                      "class",
                      this.renderConfig.className
                    ),
                  this.renderConfig.id &&
                    this.svgElement.setAttribute("id", this.renderConfig.id),
                  void 0 !== this.renderConfig.focusable &&
                    this.svgElement.setAttribute(
                      "focusable",
                      this.renderConfig.focusable
                    ),
                  this.svgElement.setAttribute(
                    "preserveAspectRatio",
                    this.renderConfig.preserveAspectRatio
                  ),
                  this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e),
                  (this.globalData.progressiveLoad =
                    this.renderConfig.progressiveLoad),
                  (this.data = t);
                var i = L("clipPath"),
                  r = L("rect");
                r.setAttribute("width", t.w),
                  r.setAttribute("height", t.h),
                  r.setAttribute("x", 0),
                  r.setAttribute("y", 0);
                var a = S();
                i.setAttribute("id", a),
                  i.appendChild(r),
                  this.layerElement.setAttribute(
                    "clip-path",
                    "url(" + s + "#" + a + ")"
                  ),
                  e.appendChild(i),
                  (this.layers = t.layers),
                  (this.elements = I(t.layers.length));
              }),
              (St.prototype.destroy = function () {
                (this.animationItem.wrapper.innerHTML = ""),
                  (this.layerElement = null),
                  (this.globalData.defs = null);
                var t,
                  e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t++)
                  this.elements[t] && this.elements[t].destroy();
                (this.elements.length = 0),
                  (this.destroyed = !0),
                  (this.animationItem = null);
              }),
              (St.prototype.updateContainerSize = function () {}),
              (St.prototype.buildItem = function (t) {
                var i = this.elements;
                if (!i[t] && 99 != this.layers[t].ty) {
                  i[t] = !0;
                  var s = this.createItem(this.layers[t]);
                  (i[t] = s),
                    e &&
                      (0 === this.layers[t].ty &&
                        this.globalData.projectInterface.registerComposition(s),
                      s.initExpressions()),
                    this.appendElementInPos(s, t),
                    this.layers[t].tt &&
                      (this.elements[t - 1] && !0 !== this.elements[t - 1]
                        ? s.setMatte(i[t - 1].layerId)
                        : (this.buildItem(t - 1), this.addPendingElement(s)));
                }
              }),
              (St.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) {
                  var t = this.pendingElements.pop();
                  if ((t.checkParenting(), t.data.tt))
                    for (var e = 0, i = this.elements.length; e < i; ) {
                      if (this.elements[e] === t) {
                        t.setMatte(this.elements[e - 1].layerId);
                        break;
                      }
                      e += 1;
                    }
                }
              }),
              (St.prototype.renderFrame = function (t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                  null === t
                    ? (t = this.renderedFrame)
                    : (this.renderedFrame = t),
                    (this.globalData.frameNum = t),
                    (this.globalData.frameId += 1),
                    (this.globalData.projectInterface.currentFrame = t),
                    (this.globalData._mdf = !1);
                  var e,
                    i = this.layers.length;
                  for (
                    this.completeLayers || this.checkLayers(t), e = i - 1;
                    e >= 0;
                    e--
                  )
                    (this.completeLayers || this.elements[e]) &&
                      this.elements[e].prepareFrame(t - this.layers[e].st);
                  if (this.globalData._mdf)
                    for (e = 0; e < i; e += 1)
                      (this.completeLayers || this.elements[e]) &&
                        this.elements[e].renderFrame();
                }
              }),
              (St.prototype.appendElementInPos = function (t, e) {
                var i = t.getBaseElement();
                if (i) {
                  for (var s, r = 0; r < e; )
                    this.elements[r] &&
                      !0 !== this.elements[r] &&
                      this.elements[r].getBaseElement() &&
                      (s = this.elements[r].getBaseElement()),
                      (r += 1);
                  s
                    ? this.layerElement.insertBefore(i, s)
                    : this.layerElement.appendChild(i);
                }
              }),
              (St.prototype.hide = function () {
                this.layerElement.style.display = "none";
              }),
              (St.prototype.show = function () {
                this.layerElement.style.display = "block";
              }),
              (At.prototype.getMaskProperty = function (t) {
                return this.viewData[t].prop;
              }),
              (At.prototype.renderFrame = function (t) {
                var e,
                  i = this.element.finalTransform.mat,
                  r = this.masksProperties.length;
                for (e = 0; e < r; e++)
                  if (
                    ((this.viewData[e].prop._mdf || t) &&
                      this.drawPath(
                        this.masksProperties[e],
                        this.viewData[e].prop.v,
                        this.viewData[e]
                      ),
                    (this.viewData[e].op._mdf || t) &&
                      this.viewData[e].elem.setAttribute(
                        "fill-opacity",
                        this.viewData[e].op.v
                      ),
                    "n" !== this.masksProperties[e].mode &&
                      (this.viewData[e].invRect &&
                        (this.element.finalTransform.mProp._mdf || t) &&
                        this.viewData[e].invRect.setAttribute(
                          "transform",
                          i.getInverseMatrix().to2dCSS()
                        ),
                      this.storedData[e].x && (this.storedData[e].x._mdf || t)))
                  ) {
                    var a = this.storedData[e].expan;
                    this.storedData[e].x.v < 0
                      ? ("erode" !== this.storedData[e].lastOperator &&
                          ((this.storedData[e].lastOperator = "erode"),
                          this.storedData[e].elem.setAttribute(
                            "filter",
                            "url(" + s + "#" + this.storedData[e].filterId + ")"
                          )),
                        a.setAttribute("radius", -this.storedData[e].x.v))
                      : ("dilate" !== this.storedData[e].lastOperator &&
                          ((this.storedData[e].lastOperator = "dilate"),
                          this.storedData[e].elem.setAttribute("filter", null)),
                        this.storedData[e].elem.setAttribute(
                          "stroke-width",
                          2 * this.storedData[e].x.v
                        ));
                  }
              }),
              (At.prototype.getMaskelement = function () {
                return this.maskElement;
              }),
              (At.prototype.createLayerSolidPath = function () {
                var t = "M0,0 ";
                return (
                  (t += " h" + this.globalData.compSize.w),
                  (t += " v" + this.globalData.compSize.h),
                  (t += " h-" + this.globalData.compSize.w),
                  (t += " v-" + this.globalData.compSize.h + " ")
                );
              }),
              (At.prototype.drawPath = function (t, e, i) {
                var s,
                  r,
                  a = " M" + e.v[0][0] + "," + e.v[0][1];
                for (r = e._length, s = 1; s < r; s += 1)
                  a +=
                    " C" +
                    e.o[s - 1][0] +
                    "," +
                    e.o[s - 1][1] +
                    " " +
                    e.i[s][0] +
                    "," +
                    e.i[s][1] +
                    " " +
                    e.v[s][0] +
                    "," +
                    e.v[s][1];
                if (
                  (e.c &&
                    r > 1 &&
                    (a +=
                      " C" +
                      e.o[s - 1][0] +
                      "," +
                      e.o[s - 1][1] +
                      " " +
                      e.i[0][0] +
                      "," +
                      e.i[0][1] +
                      " " +
                      e.v[0][0] +
                      "," +
                      e.v[0][1]),
                  i.lastPath !== a)
                ) {
                  var n = "";
                  i.elem &&
                    (e.c && (n = t.inv ? this.solidPath + a : a),
                    i.elem.setAttribute("d", n)),
                    (i.lastPath = a);
                }
              }),
              (At.prototype.destroy = function () {
                (this.element = null),
                  (this.globalData = null),
                  (this.maskElement = null),
                  (this.data = null),
                  (this.masksProperties = null);
              }),
              (kt.prototype = {
                initHierarchy: function () {
                  (this.hierarchy = []),
                    (this._isParent = !1),
                    this.checkParenting();
                },
                setHierarchy: function (t) {
                  this.hierarchy = t;
                },
                setAsParent: function () {
                  this._isParent = !0;
                },
                checkParenting: function () {
                  void 0 !== this.data.parent &&
                    this.comp.buildElementParenting(this, this.data.parent, []);
                },
              }),
              (Ct.prototype = {
                initFrame: function () {
                  (this._isFirstFrame = !1),
                    (this.dynamicProperties = []),
                    (this._mdf = !1);
                },
                prepareProperties: function (t, e) {
                  var i,
                    s = this.dynamicProperties.length;
                  for (i = 0; i < s; i += 1)
                    (e ||
                      (this._isParent &&
                        "transform" === this.dynamicProperties[i].propType)) &&
                      (this.dynamicProperties[i].getValue(),
                      this.dynamicProperties[i]._mdf &&
                        ((this.globalData._mdf = !0), (this._mdf = !0)));
                },
                addDynamicProperty: function (t) {
                  -1 === this.dynamicProperties.indexOf(t) &&
                    this.dynamicProperties.push(t);
                },
              }),
              (Mt.prototype = {
                initTransform: function () {
                  (this.finalTransform = {
                    mProp: this.data.ks
                      ? U.getTransformProperty(this, this.data.ks, this)
                      : { o: 0 },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new N(),
                  }),
                    this.data.ao &&
                      (this.finalTransform.mProp.autoOriented = !0),
                    this.data.ty;
                },
                renderTransform: function () {
                  if (
                    ((this.finalTransform._opMdf =
                      this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                    (this.finalTransform._matMdf =
                      this.finalTransform.mProp._mdf || this._isFirstFrame),
                    this.hierarchy)
                  ) {
                    var t,
                      e = this.finalTransform.mat,
                      i = 0,
                      s = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                      for (; i < s; ) {
                        if (this.hierarchy[i].finalTransform.mProp._mdf) {
                          this.finalTransform._matMdf = !0;
                          break;
                        }
                        i += 1;
                      }
                    if (this.finalTransform._matMdf)
                      for (
                        t = this.finalTransform.mProp.v.props,
                          e.cloneFromProps(t),
                          i = 0;
                        i < s;
                        i += 1
                      )
                        (t = this.hierarchy[i].finalTransform.mProp.v.props),
                          e.transform(
                            t[0],
                            t[1],
                            t[2],
                            t[3],
                            t[4],
                            t[5],
                            t[6],
                            t[7],
                            t[8],
                            t[9],
                            t[10],
                            t[11],
                            t[12],
                            t[13],
                            t[14],
                            t[15]
                          );
                  }
                },
                globalToLocal: function (t) {
                  var e = [];
                  e.push(this.finalTransform);
                  for (var i = !0, s = this.comp; i; )
                    s.finalTransform
                      ? (s.data.hasMask && e.splice(0, 0, s.finalTransform),
                        (s = s.comp))
                      : (i = !1);
                  var r,
                    a,
                    n = e.length;
                  for (r = 0; r < n; r += 1)
                    (a = e[r].mat.applyToPointArray(0, 0, 0)),
                      (t = [t[0] - a[0], t[1] - a[1], 0]);
                  return t;
                },
                mHelper: new N(),
              }),
              (Tt.prototype = {
                initRenderable: function () {
                  (this.isInRange = !1),
                    (this.hidden = !1),
                    (this.isTransparent = !1),
                    (this.renderableComponents = []);
                },
                addRenderableComponent: function (t) {
                  -1 === this.renderableComponents.indexOf(t) &&
                    this.renderableComponents.push(t);
                },
                removeRenderableComponent: function (t) {
                  -1 !== this.renderableComponents.indexOf(t) &&
                    this.renderableComponents.splice(
                      this.renderableComponents.indexOf(t),
                      1
                    );
                },
                prepareRenderableFrame: function (t) {
                  this.checkLayerLimits(t);
                },
                checkTransparency: function () {
                  this.finalTransform.mProp.o.v <= 0
                    ? !this.isTransparent &&
                      this.globalData.renderConfig.hideOnTransparent &&
                      ((this.isTransparent = !0), this.hide())
                    : this.isTransparent &&
                      ((this.isTransparent = !1), this.show());
                },
                checkLayerLimits: function (t) {
                  this.data.ip - this.data.st <= t &&
                  this.data.op - this.data.st > t
                    ? !0 !== this.isInRange &&
                      ((this.globalData._mdf = !0),
                      (this._mdf = !0),
                      (this.isInRange = !0),
                      this.show())
                    : !1 !== this.isInRange &&
                      ((this.globalData._mdf = !0),
                      (this.isInRange = !1),
                      this.hide());
                },
                renderRenderable: function () {
                  var t,
                    e = this.renderableComponents.length;
                  for (t = 0; t < e; t += 1)
                    this.renderableComponents[t].renderFrame(
                      this._isFirstFrame
                    );
                },
                sourceRectAtTime: function () {
                  return { top: 0, left: 0, width: 100, height: 100 };
                },
                getLayerSize: function () {
                  return 5 === this.data.ty
                    ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height,
                      }
                    : { w: this.data.width, h: this.data.height };
                },
              }),
              O(
                [
                  Tt,
                  H({
                    initElement: function (t, e, i) {
                      this.initFrame(),
                        this.initBaseData(t, e, i),
                        this.initTransform(t, e, i),
                        this.initHierarchy(),
                        this.initRenderable(),
                        this.initRendererElement(),
                        this.createContainerElements(),
                        this.createRenderableComponents(),
                        this.createContent(),
                        this.hide();
                    },
                    hide: function () {
                      this.hidden ||
                        (this.isInRange && !this.isTransparent) ||
                        (((
                          this.baseElement || this.layerElement
                        ).style.display = "none"),
                        (this.hidden = !0));
                    },
                    show: function () {
                      this.isInRange &&
                        !this.isTransparent &&
                        (this.data.hd ||
                          ((
                            this.baseElement || this.layerElement
                          ).style.display = "block"),
                        (this.hidden = !1),
                        (this._isFirstFrame = !0));
                    },
                    renderFrame: function () {
                      this.data.hd ||
                        this.hidden ||
                        (this.renderTransform(),
                        this.renderRenderable(),
                        this.renderElement(),
                        this.renderInnerContent(),
                        this._isFirstFrame && (this._isFirstFrame = !1));
                    },
                    renderInnerContent: function () {},
                    prepareFrame: function (t) {
                      (this._mdf = !1),
                        this.prepareRenderableFrame(t),
                        this.prepareProperties(t, this.isInRange),
                        this.checkTransparency();
                    },
                    destroy: function () {
                      (this.innerElem = null), this.destroyBaseElement();
                    },
                  }),
                ],
                Dt
              ),
              (Ft.prototype.reset = function () {
                (this.d = ""), (this._mdf = !1);
              }),
              (It.prototype.setAsAnimated = function () {
                this._isAnimated = !0;
              }),
              O([R], Vt),
              O([R], Rt),
              (Bt.prototype.initGradientData = function (t, e, i) {
                (this.o = K.getProp(t, e.o, 0, 0.01, this)),
                  (this.s = K.getProp(t, e.s, 1, null, this)),
                  (this.e = K.getProp(t, e.e, 1, null, this)),
                  (this.h = K.getProp(t, e.h || { k: 0 }, 0, 0.01, this)),
                  (this.a = K.getProp(t, e.a || { k: 0 }, 0, c, this)),
                  (this.g = new at(t, e.g, this)),
                  (this.style = i),
                  (this.stops = []),
                  this.setGradientData(i.pElem, e),
                  this.setGradientOpacity(e, i),
                  (this._isAnimated = !!this._isAnimated);
              }),
              (Bt.prototype.setGradientData = function (t, e) {
                var i = S(),
                  r = L(1 === e.t ? "linearGradient" : "radialGradient");
                r.setAttribute("id", i),
                  r.setAttribute("spreadMethod", "pad"),
                  r.setAttribute("gradientUnits", "userSpaceOnUse");
                var a,
                  n,
                  o,
                  h = [];
                for (o = 4 * e.g.p, n = 0; n < o; n += 4)
                  (a = L("stop")), r.appendChild(a), h.push(a);
                t.setAttribute(
                  "gf" === e.ty ? "fill" : "stroke",
                  "url(" + s + "#" + i + ")"
                ),
                  (this.gf = r),
                  (this.cst = h);
              }),
              (Bt.prototype.setGradientOpacity = function (t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                  var i,
                    r,
                    a,
                    n = L("mask"),
                    o = L("path");
                  n.appendChild(o);
                  var h = S(),
                    l = S();
                  n.setAttribute("id", l);
                  var p = L(1 === t.t ? "linearGradient" : "radialGradient");
                  p.setAttribute("id", h),
                    p.setAttribute("spreadMethod", "pad"),
                    p.setAttribute("gradientUnits", "userSpaceOnUse"),
                    (a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
                  var f = this.stops;
                  for (r = 4 * t.g.p; r < a; r += 2)
                    (i = L("stop")).setAttribute(
                      "stop-color",
                      "rgb(255,255,255)"
                    ),
                      p.appendChild(i),
                      f.push(i);
                  o.setAttribute(
                    "gf" === t.ty ? "fill" : "stroke",
                    "url(" + s + "#" + h + ")"
                  ),
                    (this.of = p),
                    (this.ms = n),
                    (this.ost = f),
                    (this.maskId = l),
                    (e.msElem = o);
                }
              }),
              O([R], Bt),
              O([Bt, R], zt);
            var Gt = (function () {
              var t = new N(),
                e = new N();
              function i(t) {
                switch ((t.ty, t.ty)) {
                  case "fl":
                    return a;
                  case "gf":
                    return o;
                  case "gs":
                    return n;
                  case "st":
                    return l;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return r;
                  case "tr":
                    return s;
                }
              }
              function s(t, e, i) {
                (i || e.transform.op._mdf) &&
                  e.transform.container.setAttribute(
                    "opacity",
                    e.transform.op.v
                  ),
                  (i || e.transform.mProps._mdf) &&
                    e.transform.container.setAttribute(
                      "transform",
                      e.transform.mProps.v.to2dCSS()
                    );
              }
              function r(i, s, r) {
                var a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f,
                  m,
                  c,
                  d,
                  u,
                  g = s.styles.length,
                  y = s.lvl;
                for (p = 0; p < g; p += 1) {
                  if (((h = s.sh._mdf || r), s.styles[p].lvl < y)) {
                    for (
                      m = e.reset(),
                        d = y - s.styles[p].lvl,
                        u = s.transformers.length - 1;
                      !h && d > 0;

                    )
                      (h = s.transformers[u].mProps._mdf || h), d--, u--;
                    if (h)
                      for (
                        d = y - s.styles[p].lvl, u = s.transformers.length - 1;
                        d > 0;

                      )
                        (c = s.transformers[u].mProps.v.props),
                          m.transform(
                            c[0],
                            c[1],
                            c[2],
                            c[3],
                            c[4],
                            c[5],
                            c[6],
                            c[7],
                            c[8],
                            c[9],
                            c[10],
                            c[11],
                            c[12],
                            c[13],
                            c[14],
                            c[15]
                          ),
                          d--,
                          u--;
                  } else m = t;
                  if (((n = (f = s.sh.paths)._length), h)) {
                    for (o = "", a = 0; a < n; a += 1)
                      (l = f.shapes[a]) &&
                        l._length &&
                        (o += nt(l, l._length, l.c, m));
                    s.caches[p] = o;
                  } else o = s.caches[p];
                  (s.styles[p].d += !0 === i.hd ? "" : o),
                    (s.styles[p]._mdf = h || s.styles[p]._mdf);
                }
              }
              function a(t, e, i) {
                var s = e.style;
                (e.c._mdf || i) &&
                  s.pElem.setAttribute(
                    "fill",
                    "rgb(" +
                      h(e.c.v[0]) +
                      "," +
                      h(e.c.v[1]) +
                      "," +
                      h(e.c.v[2]) +
                      ")"
                  ),
                  (e.o._mdf || i) &&
                    s.pElem.setAttribute("fill-opacity", e.o.v);
              }
              function n(t, e, i) {
                o(t, e, i), l(t, e, i);
              }
              function o(t, e, i) {
                var s,
                  r,
                  a,
                  n,
                  o,
                  h = e.gf,
                  l = e.g._hasOpacity,
                  p = e.s.v,
                  f = e.e.v;
                if (e.o._mdf || i) {
                  var m = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                  e.style.pElem.setAttribute(m, e.o.v);
                }
                if (e.s._mdf || i) {
                  var c = 1 === t.t ? "x1" : "cx",
                    d = "x1" === c ? "y1" : "cy";
                  h.setAttribute(c, p[0]),
                    h.setAttribute(d, p[1]),
                    l &&
                      !e.g._collapsable &&
                      (e.of.setAttribute(c, p[0]), e.of.setAttribute(d, p[1]));
                }
                if (e.g._cmdf || i) {
                  s = e.cst;
                  var u = e.g.c;
                  for (a = s.length, r = 0; r < a; r += 1)
                    (n = s[r]).setAttribute("offset", u[4 * r] + "%"),
                      n.setAttribute(
                        "stop-color",
                        "rgb(" +
                          u[4 * r + 1] +
                          "," +
                          u[4 * r + 2] +
                          "," +
                          u[4 * r + 3] +
                          ")"
                      );
                }
                if (l && (e.g._omdf || i)) {
                  var g = e.g.o;
                  for (
                    a = (s = e.g._collapsable ? e.cst : e.ost).length, r = 0;
                    r < a;
                    r += 1
                  )
                    (n = s[r]),
                      e.g._collapsable ||
                        n.setAttribute("offset", g[2 * r] + "%"),
                      n.setAttribute("stop-opacity", g[2 * r + 1]);
                }
                if (1 === t.t)
                  (e.e._mdf || i) &&
                    (h.setAttribute("x2", f[0]),
                    h.setAttribute("y2", f[1]),
                    l &&
                      !e.g._collapsable &&
                      (e.of.setAttribute("x2", f[0]),
                      e.of.setAttribute("y2", f[1])));
                else if (
                  ((e.s._mdf || e.e._mdf || i) &&
                    ((o = Math.sqrt(
                      Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)
                    )),
                    h.setAttribute("r", o),
                    l && !e.g._collapsable && e.of.setAttribute("r", o)),
                  e.e._mdf || e.h._mdf || e.a._mdf || i)
                ) {
                  o ||
                    (o = Math.sqrt(
                      Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)
                    ));
                  var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                    v = o * (e.h.v >= 1 ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v),
                    b = Math.cos(y + e.a.v) * v + p[0],
                    _ = Math.sin(y + e.a.v) * v + p[1];
                  h.setAttribute("fx", b),
                    h.setAttribute("fy", _),
                    l &&
                      !e.g._collapsable &&
                      (e.of.setAttribute("fx", b), e.of.setAttribute("fy", _));
                }
              }
              function l(t, e, i) {
                var s = e.style,
                  r = e.d;
                r &&
                  (r._mdf || i) &&
                  r.dashStr &&
                  (s.pElem.setAttribute("stroke-dasharray", r.dashStr),
                  s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])),
                  e.c &&
                    (e.c._mdf || i) &&
                    s.pElem.setAttribute(
                      "stroke",
                      "rgb(" +
                        h(e.c.v[0]) +
                        "," +
                        h(e.c.v[1]) +
                        "," +
                        h(e.c.v[2]) +
                        ")"
                    ),
                  (e.o._mdf || i) &&
                    s.pElem.setAttribute("stroke-opacity", e.o.v),
                  (e.w._mdf || i) &&
                    (s.pElem.setAttribute("stroke-width", e.w.v),
                    s.msElem && s.msElem.setAttribute("stroke-width", e.w.v));
              }
              return { createRenderFunction: i };
            })();
            function Ot() {
              (this.sequences = {}),
                (this.sequenceList = []),
                (this.transform_key_count = 0);
            }
            function Ht() {}
            function qt(t, e, i) {
              this.initFrame(),
                this.initBaseData(t, e, i),
                this.initFrame(),
                this.initTransform(t, e, i),
                this.initHierarchy();
            }
            function jt() {}
            function Wt() {}
            function Yt() {}
            function Xt() {}
            function Kt(t, e, i) {
              (this.assetData = e.getAssetData(t.refId)),
                this.initElement(t, e, i),
                (this.sourceRect = {
                  top: 0,
                  left: 0,
                  width: this.assetData.w,
                  height: this.assetData.h,
                });
            }
            function Ut(t, e, i) {
              this.initElement(t, e, i);
            }
            function Jt(t, e, i) {
              (this.layers = t.layers),
                (this.supports3d = !0),
                (this.completeLayers = !1),
                (this.pendingElements = []),
                (this.elements = this.layers ? I(this.layers.length) : []),
                this.initElement(t, e, i),
                (this.tm = t.tm
                  ? K.getProp(this, t.tm, 0, e.frameRate, this)
                  : { _placeholder: !0 });
            }
            function Zt(t, e, i) {
              (this.textSpans = []),
                (this.renderType = "svg"),
                this.initElement(t, e, i);
            }
            function $t(t, e, i) {
              (this.shapes = []),
                (this.shapesData = t.shapes),
                (this.stylesList = []),
                (this.shapeModifiers = []),
                (this.itemsData = []),
                (this.processedElements = []),
                (this.animatedContents = []),
                this.initElement(t, e, i),
                (this.prevViewData = []);
            }
            function Qt(t, e) {
              this.filterManager = e;
              var i = L("feColorMatrix");
              if (
                (i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "linearRGB"),
                i.setAttribute(
                  "values",
                  "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
                ),
                i.setAttribute("result", "f1"),
                t.appendChild(i),
                (i = L("feColorMatrix")).setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "sRGB"),
                i.setAttribute(
                  "values",
                  "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
                ),
                i.setAttribute("result", "f2"),
                t.appendChild(i),
                (this.matrixFilter = i),
                100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)
              ) {
                var s,
                  r = L("feMerge");
                t.appendChild(r),
                  (s = L("feMergeNode")).setAttribute("in", "SourceGraphic"),
                  r.appendChild(s),
                  (s = L("feMergeNode")).setAttribute("in", "f2"),
                  r.appendChild(s);
              }
            }
            function te(t, e) {
              this.filterManager = e;
              var i = L("feColorMatrix");
              i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "sRGB"),
                i.setAttribute(
                  "values",
                  "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
                ),
                t.appendChild(i),
                (this.matrixFilter = i);
            }
            function ee(t, e) {
              t.setAttribute("x", "-100%"),
                t.setAttribute("y", "-100%"),
                t.setAttribute("width", "300%"),
                t.setAttribute("height", "300%"),
                (this.filterManager = e);
              var i = L("feGaussianBlur");
              t.appendChild(i), (this.feGaussianBlur = i);
            }
            function ie(t, e) {
              (this.initialized = !1),
                (this.filterManager = e),
                (this.elem = t),
                (this.paths = []);
            }
            function se(t, e) {
              this.filterManager = e;
              var i = L("feColorMatrix");
              i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "linearRGB"),
                i.setAttribute(
                  "values",
                  "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
                ),
                i.setAttribute("result", "f1"),
                t.appendChild(i);
              var s = L("feComponentTransfer");
              s.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(s),
                (this.matrixFilter = s);
              var r = L("feFuncR");
              r.setAttribute("type", "table"),
                s.appendChild(r),
                (this.feFuncR = r);
              var a = L("feFuncG");
              a.setAttribute("type", "table"),
                s.appendChild(a),
                (this.feFuncG = a);
              var n = L("feFuncB");
              n.setAttribute("type", "table"),
                s.appendChild(n),
                (this.feFuncB = n);
            }
            function re(t, e) {
              this.filterManager = e;
              var i = this.filterManager.effectElements,
                s = L("feComponentTransfer");
              (i[10].p.k ||
                0 !== i[10].p.v ||
                i[11].p.k ||
                1 !== i[11].p.v ||
                i[12].p.k ||
                1 !== i[12].p.v ||
                i[13].p.k ||
                0 !== i[13].p.v ||
                i[14].p.k ||
                1 !== i[14].p.v) &&
                (this.feFuncR = this.createFeFunc("feFuncR", s)),
                (i[17].p.k ||
                  0 !== i[17].p.v ||
                  i[18].p.k ||
                  1 !== i[18].p.v ||
                  i[19].p.k ||
                  1 !== i[19].p.v ||
                  i[20].p.k ||
                  0 !== i[20].p.v ||
                  i[21].p.k ||
                  1 !== i[21].p.v) &&
                  (this.feFuncG = this.createFeFunc("feFuncG", s)),
                (i[24].p.k ||
                  0 !== i[24].p.v ||
                  i[25].p.k ||
                  1 !== i[25].p.v ||
                  i[26].p.k ||
                  1 !== i[26].p.v ||
                  i[27].p.k ||
                  0 !== i[27].p.v ||
                  i[28].p.k ||
                  1 !== i[28].p.v) &&
                  (this.feFuncB = this.createFeFunc("feFuncB", s)),
                (i[31].p.k ||
                  0 !== i[31].p.v ||
                  i[32].p.k ||
                  1 !== i[32].p.v ||
                  i[33].p.k ||
                  1 !== i[33].p.v ||
                  i[34].p.k ||
                  0 !== i[34].p.v ||
                  i[35].p.k ||
                  1 !== i[35].p.v) &&
                  (this.feFuncA = this.createFeFunc("feFuncA", s)),
                (this.feFuncR ||
                  this.feFuncG ||
                  this.feFuncB ||
                  this.feFuncA) &&
                  (s.setAttribute("color-interpolation-filters", "sRGB"),
                  t.appendChild(s),
                  (s = L("feComponentTransfer"))),
                (i[3].p.k ||
                  0 !== i[3].p.v ||
                  i[4].p.k ||
                  1 !== i[4].p.v ||
                  i[5].p.k ||
                  1 !== i[5].p.v ||
                  i[6].p.k ||
                  0 !== i[6].p.v ||
                  i[7].p.k ||
                  1 !== i[7].p.v) &&
                  (s.setAttribute("color-interpolation-filters", "sRGB"),
                  t.appendChild(s),
                  (this.feFuncRComposed = this.createFeFunc("feFuncR", s)),
                  (this.feFuncGComposed = this.createFeFunc("feFuncG", s)),
                  (this.feFuncBComposed = this.createFeFunc("feFuncB", s)));
            }
            function ae(t, e) {
              var i = e.container.globalData.renderConfig.filterSize;
              t.setAttribute("x", i.x),
                t.setAttribute("y", i.y),
                t.setAttribute("width", i.width),
                t.setAttribute("height", i.height),
                (this.filterManager = e);
              var s = L("feGaussianBlur");
              s.setAttribute("in", "SourceAlpha"),
                s.setAttribute("result", "drop_shadow_1"),
                s.setAttribute("stdDeviation", "0"),
                (this.feGaussianBlur = s),
                t.appendChild(s);
              var r = L("feOffset");
              r.setAttribute("dx", "25"),
                r.setAttribute("dy", "0"),
                r.setAttribute("in", "drop_shadow_1"),
                r.setAttribute("result", "drop_shadow_2"),
                (this.feOffset = r),
                t.appendChild(r);
              var a = L("feFlood");
              a.setAttribute("flood-color", "#00ff00"),
                a.setAttribute("flood-opacity", "1"),
                a.setAttribute("result", "drop_shadow_3"),
                (this.feFlood = a),
                t.appendChild(a);
              var n = L("feComposite");
              n.setAttribute("in", "drop_shadow_3"),
                n.setAttribute("in2", "drop_shadow_2"),
                n.setAttribute("operator", "in"),
                n.setAttribute("result", "drop_shadow_4"),
                t.appendChild(n);
              var o,
                h = L("feMerge");
              t.appendChild(h),
                (o = L("feMergeNode")),
                h.appendChild(o),
                (o = L("feMergeNode")).setAttribute("in", "SourceGraphic"),
                (this.feMergeNode = o),
                (this.feMerge = h),
                (this.originalNodeAdded = !1),
                h.appendChild(o);
            }
            (Ot.prototype = {
              addTransformSequence: function (t) {
                var e,
                  i = t.length,
                  s = "_";
                for (e = 0; e < i; e += 1) s += t[e].transform.key + "_";
                var r = this.sequences[s];
                return (
                  r ||
                    ((r = {
                      transforms: [].concat(t),
                      finalTransform: new N(),
                      _mdf: !1,
                    }),
                    (this.sequences[s] = r),
                    this.sequenceList.push(r)),
                  r
                );
              },
              processSequence: function (t, e) {
                for (
                  var i, s = 0, r = t.transforms.length, a = e;
                  s < r && !e;

                ) {
                  if (t.transforms[s].transform.mProps._mdf) {
                    a = !0;
                    break;
                  }
                  s += 1;
                }
                if (a)
                  for (t.finalTransform.reset(), s = r - 1; s >= 0; s -= 1)
                    (i = t.transforms[s].transform.mProps.v.props),
                      t.finalTransform.transform(
                        i[0],
                        i[1],
                        i[2],
                        i[3],
                        i[4],
                        i[5],
                        i[6],
                        i[7],
                        i[8],
                        i[9],
                        i[10],
                        i[11],
                        i[12],
                        i[13],
                        i[14],
                        i[15]
                      );
                t._mdf = a;
              },
              processSequences: function (t) {
                var e,
                  i = this.sequenceList.length;
                for (e = 0; e < i; e += 1)
                  this.processSequence(this.sequenceList[e], t);
              },
              getNewKey: function () {
                return "_" + this.transform_key_count++;
              },
            }),
              (Ht.prototype = {
                checkMasks: function () {
                  if (!this.data.hasMask) return !1;
                  for (
                    var t = 0, e = this.data.masksProperties.length;
                    t < e;

                  ) {
                    if (
                      "n" !== this.data.masksProperties[t].mode &&
                      !1 !== this.data.masksProperties[t].cl
                    )
                      return !0;
                    t += 1;
                  }
                  return !1;
                },
                initExpressions: function () {
                  (this.layerInterface = LayerExpressionInterface(this)),
                    this.data.hasMask &&
                      this.maskManager &&
                      this.layerInterface.registerMaskInterface(
                        this.maskManager
                      );
                  var t = EffectsExpressionInterface.createEffectsInterface(
                    this,
                    this.layerInterface
                  );
                  this.layerInterface.registerEffectsInterface(t),
                    0 === this.data.ty || this.data.xt
                      ? (this.compInterface = CompExpressionInterface(this))
                      : 4 === this.data.ty
                      ? ((this.layerInterface.shapeInterface =
                          ShapeExpressionInterface(
                            this.shapesData,
                            this.itemsData,
                            this.layerInterface
                          )),
                        (this.layerInterface.content =
                          this.layerInterface.shapeInterface))
                      : 5 === this.data.ty &&
                        ((this.layerInterface.textInterface =
                          TextExpressionInterface(this)),
                        (this.layerInterface.text =
                          this.layerInterface.textInterface));
                },
                setBlendMode: function () {
                  var t = z(this.data.bm);
                  (this.baseElement || this.layerElement).style[
                    "mix-blend-mode"
                  ] = t;
                },
                initBaseData: function (t, e, i) {
                  (this.globalData = e),
                    (this.comp = i),
                    (this.data = t),
                    (this.layerId = S()),
                    this.data.sr || (this.data.sr = 1),
                    (this.effectsManager = new fe(
                      this.data,
                      this,
                      this.dynamicProperties
                    ));
                },
                getType: function () {
                  return this.type;
                },
                sourceRectAtTime: function () {},
              }),
              (qt.prototype.prepareFrame = function (t) {
                this.prepareProperties(t, !0);
              }),
              (qt.prototype.renderFrame = function () {}),
              (qt.prototype.getBaseElement = function () {
                return null;
              }),
              (qt.prototype.destroy = function () {}),
              (qt.prototype.sourceRectAtTime = function () {}),
              (qt.prototype.hide = function () {}),
              O([Ht, Mt, kt, Ct], qt),
              (jt.prototype = {
                initRendererElement: function () {
                  this.layerElement = L("g");
                },
                createContainerElements: function () {
                  (this.matteElement = L("g")),
                    (this.transformedElement = this.layerElement),
                    (this.maskedElement = this.layerElement),
                    (this._sizeChanged = !1);
                  var t,
                    e,
                    i,
                    r = null;
                  if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                      var a = L("mask");
                      a.setAttribute("id", this.layerId),
                        a.setAttribute(
                          "mask-type",
                          3 == this.data.td ? "luminance" : "alpha"
                        ),
                        a.appendChild(this.layerElement),
                        (r = a),
                        this.globalData.defs.appendChild(a),
                        ht.maskType ||
                          1 != this.data.td ||
                          (a.setAttribute("mask-type", "luminance"),
                          (t = S()),
                          (e = lt.createFilter(t)),
                          this.globalData.defs.appendChild(e),
                          e.appendChild(lt.createAlphaToLuminanceFilter()),
                          (i = L("g")).appendChild(this.layerElement),
                          (r = i),
                          a.appendChild(i),
                          i.setAttribute("filter", "url(" + s + "#" + t + ")"));
                    } else if (2 == this.data.td) {
                      var n = L("mask");
                      n.setAttribute("id", this.layerId),
                        n.setAttribute("mask-type", "alpha");
                      var o = L("g");
                      n.appendChild(o), (t = S()), (e = lt.createFilter(t));
                      var h = L("feComponentTransfer");
                      h.setAttribute("in", "SourceGraphic"), e.appendChild(h);
                      var l = L("feFuncA");
                      l.setAttribute("type", "table"),
                        l.setAttribute("tableValues", "1.0 0.0"),
                        h.appendChild(l),
                        this.globalData.defs.appendChild(e);
                      var p = L("rect");
                      p.setAttribute("width", this.comp.data.w),
                        p.setAttribute("height", this.comp.data.h),
                        p.setAttribute("x", "0"),
                        p.setAttribute("y", "0"),
                        p.setAttribute("fill", "#ffffff"),
                        p.setAttribute("opacity", "0"),
                        o.setAttribute("filter", "url(" + s + "#" + t + ")"),
                        o.appendChild(p),
                        o.appendChild(this.layerElement),
                        (r = o),
                        ht.maskType ||
                          (n.setAttribute("mask-type", "luminance"),
                          e.appendChild(lt.createAlphaToLuminanceFilter()),
                          (i = L("g")),
                          o.appendChild(p),
                          i.appendChild(this.layerElement),
                          (r = i),
                          o.appendChild(i)),
                        this.globalData.defs.appendChild(n);
                    }
                  } else
                    this.data.tt
                      ? (this.matteElement.appendChild(this.layerElement),
                        (r = this.matteElement),
                        (this.baseElement = this.matteElement))
                      : (this.baseElement = this.layerElement);
                  if (
                    (this.data.ln &&
                      this.layerElement.setAttribute("id", this.data.ln),
                    this.data.cl &&
                      this.layerElement.setAttribute("class", this.data.cl),
                    0 === this.data.ty && !this.data.hd)
                  ) {
                    var f = L("clipPath"),
                      m = L("path");
                    m.setAttribute(
                      "d",
                      "M0,0 L" +
                        this.data.w +
                        ",0 L" +
                        this.data.w +
                        "," +
                        this.data.h +
                        " L0," +
                        this.data.h +
                        "z"
                    );
                    var c = S();
                    if (
                      (f.setAttribute("id", c),
                      f.appendChild(m),
                      this.globalData.defs.appendChild(f),
                      this.checkMasks())
                    ) {
                      var d = L("g");
                      d.setAttribute("clip-path", "url(" + s + "#" + c + ")"),
                        d.appendChild(this.layerElement),
                        (this.transformedElement = d),
                        r
                          ? r.appendChild(this.transformedElement)
                          : (this.baseElement = this.transformedElement);
                    } else
                      this.layerElement.setAttribute(
                        "clip-path",
                        "url(" + s + "#" + c + ")"
                      );
                  }
                  0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function () {
                  this.finalTransform._matMdf &&
                    this.transformedElement.setAttribute(
                      "transform",
                      this.finalTransform.mat.to2dCSS()
                    ),
                    this.finalTransform._opMdf &&
                      this.transformedElement.setAttribute(
                        "opacity",
                        this.finalTransform.mProp.o.v
                      );
                },
                destroyBaseElement: function () {
                  (this.layerElement = null),
                    (this.matteElement = null),
                    this.maskManager.destroy();
                },
                getBaseElement: function () {
                  return this.data.hd ? null : this.baseElement;
                },
                createRenderableComponents: function () {
                  (this.maskManager = new At(this.data, this, this.globalData)),
                    (this.renderableEffectsManager = new he(this));
                },
                setMatte: function (t) {
                  this.matteElement &&
                    this.matteElement.setAttribute(
                      "mask",
                      "url(" + s + "#" + t + ")"
                    );
                },
              }),
              (Wt.prototype = {
                addShapeToModifiers: function (t) {
                  var e,
                    i = this.shapeModifiers.length;
                  for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t);
                },
                isShapeInAnimatedModifiers: function (t) {
                  for (var e = 0, i = this.shapeModifiers.length; e < i; )
                    if (this.shapeModifiers[e].isAnimatedWithShape(t))
                      return !0;
                  return !1;
                },
                renderModifiers: function () {
                  if (this.shapeModifiers.length) {
                    var t,
                      e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    for (
                      t = (e = this.shapeModifiers.length) - 1;
                      t >= 0;
                      t -= 1
                    )
                      this.shapeModifiers[t].processShapes(this._isFirstFrame);
                  }
                },
                lcEnum: { 1: "butt", 2: "round", 3: "square" },
                ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
                searchProcessedElement: function (t) {
                  for (
                    var e = this.processedElements, i = 0, s = e.length;
                    i < s;

                  ) {
                    if (e[i].elem === t) return e[i].pos;
                    i += 1;
                  }
                  return 0;
                },
                addProcessedElement: function (t, e) {
                  for (var i = this.processedElements, s = i.length; s; )
                    if (i[(s -= 1)].elem === t) return void (i[s].pos = e);
                  i.push(new wt(t, e));
                },
                prepareFrame: function (t) {
                  this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange);
                },
              }),
              (Yt.prototype.initElement = function (t, e, i) {
                (this.lettersChangedFlag = !0),
                  this.initFrame(),
                  this.initBaseData(t, e, i),
                  (this.textProperty = new dt(
                    this,
                    t.t,
                    this.dynamicProperties
                  )),
                  (this.textAnimator = new ft(t.t, this.renderType, this)),
                  this.initTransform(t, e, i),
                  this.initHierarchy(),
                  this.initRenderable(),
                  this.initRendererElement(),
                  this.createContainerElements(),
                  this.createRenderableComponents(),
                  this.createContent(),
                  this.hide(),
                  this.textAnimator.searchProperties(this.dynamicProperties);
              }),
              (Yt.prototype.prepareFrame = function (t) {
                (this._mdf = !1),
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange),
                  (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                    (this.buildNewText(),
                    (this.textProperty._isFirstFrame = !1),
                    (this.textProperty._mdf = !1));
              }),
              (Yt.prototype.createPathShape = function (t, e) {
                var i,
                  s,
                  r = e.length,
                  a = "";
                for (i = 0; i < r; i += 1)
                  (s = e[i].ks.k), (a += nt(s, s.i.length, !0, t));
                return a;
              }),
              (Yt.prototype.updateDocumentData = function (t, e) {
                this.textProperty.updateDocumentData(t, e);
              }),
              (Yt.prototype.canResizeFont = function (t) {
                this.textProperty.canResizeFont(t);
              }),
              (Yt.prototype.setMinimumFontSize = function (t) {
                this.textProperty.setMinimumFontSize(t);
              }),
              (Yt.prototype.applyTextPropertiesToMatrix = function (
                t,
                e,
                i,
                s,
                r
              ) {
                switch (
                  (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                  e.translate(0, -t.ls, 0),
                  t.j)
                ) {
                  case 1:
                    e.translate(
                      t.justifyOffset + (t.boxWidth - t.lineWidths[i]),
                      0,
                      0
                    );
                    break;
                  case 2:
                    e.translate(
                      t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2,
                      0,
                      0
                    );
                }
                e.translate(s, r, 0);
              }),
              (Yt.prototype.buildColor = function (t) {
                return (
                  "rgb(" +
                  Math.round(255 * t[0]) +
                  "," +
                  Math.round(255 * t[1]) +
                  "," +
                  Math.round(255 * t[2]) +
                  ")"
                );
              }),
              (Yt.prototype.emptyProp = new ct()),
              (Yt.prototype.destroy = function () {}),
              O([Ht, Mt, kt, Ct, Dt], Xt),
              (Xt.prototype.initElement = function (t, e, i) {
                this.initFrame(),
                  this.initBaseData(t, e, i),
                  this.initTransform(t, e, i),
                  this.initRenderable(),
                  this.initHierarchy(),
                  this.initRendererElement(),
                  this.createContainerElements(),
                  this.createRenderableComponents(),
                  (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
                  this.hide();
              }),
              (Xt.prototype.prepareFrame = function (t) {
                if (
                  ((this._mdf = !1),
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange),
                  this.isInRange || this.data.xt)
                ) {
                  if (this.tm._placeholder)
                    this.renderedFrame = t / this.data.sr;
                  else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1),
                      (this.renderedFrame = e);
                  }
                  var i,
                    s = this.elements.length;
                  for (
                    this.completeLayers || this.checkLayers(this.renderedFrame),
                      i = s - 1;
                    i >= 0;
                    i -= 1
                  )
                    (this.completeLayers || this.elements[i]) &&
                      (this.elements[i].prepareFrame(
                        this.renderedFrame - this.layers[i].st
                      ),
                      this.elements[i]._mdf && (this._mdf = !0));
                }
              }),
              (Xt.prototype.renderInnerContent = function () {
                var t,
                  e = this.layers.length;
                for (t = 0; t < e; t += 1)
                  (this.completeLayers || this.elements[t]) &&
                    this.elements[t].renderFrame();
              }),
              (Xt.prototype.setElements = function (t) {
                this.elements = t;
              }),
              (Xt.prototype.getElements = function () {
                return this.elements;
              }),
              (Xt.prototype.destroyElements = function () {
                var t,
                  e = this.layers.length;
                for (t = 0; t < e; t += 1)
                  this.elements[t] && this.elements[t].destroy();
              }),
              (Xt.prototype.destroy = function () {
                this.destroyElements(), this.destroyBaseElement();
              }),
              O([Ht, Mt, jt, kt, Ct, Dt], Kt),
              (Kt.prototype.createContent = function () {
                var t = this.globalData.getAssetsPath(this.assetData);
                (this.innerElem = L("image")),
                  this.innerElem.setAttribute("width", this.assetData.w + "px"),
                  this.innerElem.setAttribute(
                    "height",
                    this.assetData.h + "px"
                  ),
                  this.innerElem.setAttribute(
                    "preserveAspectRatio",
                    this.assetData.pr ||
                      this.globalData.renderConfig.imagePreserveAspectRatio
                  ),
                  this.innerElem.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    t
                  ),
                  this.layerElement.appendChild(this.innerElem);
              }),
              (Kt.prototype.sourceRectAtTime = function () {
                return this.sourceRect;
              }),
              O([Kt], Ut),
              (Ut.prototype.createContent = function () {
                var t = L("rect");
                t.setAttribute("width", this.data.sw),
                  t.setAttribute("height", this.data.sh),
                  t.setAttribute("fill", this.data.sc),
                  this.layerElement.appendChild(t);
              }),
              O([St, Xt, jt], Jt),
              O([Ht, Mt, jt, kt, Ct, Dt, Yt], Zt),
              (Zt.prototype.createContent = function () {
                this.data.singleShape &&
                  !this.globalData.fontManager.chars &&
                  (this.textContainer = L("text"));
              }),
              (Zt.prototype.buildTextContents = function (t) {
                for (var e = 0, i = t.length, s = [], r = ""; e < i; )
                  t[e] === String.fromCharCode(13) ||
                  t[e] === String.fromCharCode(3)
                    ? (s.push(r), (r = ""))
                    : (r += t[e]),
                    (e += 1);
                return s.push(r), s;
              }),
              (Zt.prototype.buildNewText = function () {
                var t,
                  e,
                  i = this.textProperty.currentData;
                (this.renderedLetters = I(i ? i.l.length : 0)),
                  i.fc
                    ? this.layerElement.setAttribute(
                        "fill",
                        this.buildColor(i.fc)
                      )
                    : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                  i.sc &&
                    (this.layerElement.setAttribute(
                      "stroke",
                      this.buildColor(i.sc)
                    ),
                    this.layerElement.setAttribute("stroke-width", i.sw)),
                  this.layerElement.setAttribute("font-size", i.finalSize);
                var s = this.globalData.fontManager.getFontByName(i.f);
                if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
                else {
                  this.layerElement.setAttribute("font-family", s.fFamily);
                  var r = i.fWeight,
                    a = i.fStyle;
                  this.layerElement.setAttribute("font-style", a),
                    this.layerElement.setAttribute("font-weight", r);
                }
                this.layerElement.setAttribute("aria-label", i.t);
                var n,
                  o = i.l || [],
                  h = !!this.globalData.fontManager.chars;
                e = o.length;
                var l,
                  p = this.mHelper,
                  f = "",
                  m = this.data.singleShape,
                  c = 0,
                  d = 0,
                  u = !0,
                  g = (i.tr / 1e3) * i.finalSize;
                if (!m || h || i.sz) {
                  var y,
                    v,
                    b = this.textSpans.length;
                  for (t = 0; t < e; t += 1)
                    (h && m && 0 !== t) ||
                      ((n = b > t ? this.textSpans[t] : L(h ? "path" : "text")),
                      b <= t &&
                        (n.setAttribute("stroke-linecap", "butt"),
                        n.setAttribute("stroke-linejoin", "round"),
                        n.setAttribute("stroke-miterlimit", "4"),
                        (this.textSpans[t] = n),
                        this.layerElement.appendChild(n)),
                      (n.style.display = "inherit")),
                      p.reset(),
                      p.scale(i.finalSize / 100, i.finalSize / 100),
                      m &&
                        (o[t].n &&
                          ((c = -g),
                          (d += i.yOffset),
                          (d += u ? 1 : 0),
                          (u = !1)),
                        this.applyTextPropertiesToMatrix(i, p, o[t].line, c, d),
                        (c += o[t].l || 0),
                        (c += g)),
                      h
                        ? ((l = (y =
                            ((v = this.globalData.fontManager.getCharData(
                              i.finalText[t],
                              s.fStyle,
                              this.globalData.fontManager.getFontByName(i.f)
                                .fFamily
                            )) &&
                              v.data) ||
                            {}).shapes
                            ? y.shapes[0].it
                            : []),
                          m
                            ? (f += this.createPathShape(p, l))
                            : n.setAttribute("d", this.createPathShape(p, l)))
                        : (m &&
                            n.setAttribute(
                              "transform",
                              "translate(" +
                                p.props[12] +
                                "," +
                                p.props[13] +
                                ")"
                            ),
                          (n.textContent = o[t].val),
                          n.setAttributeNS(
                            "http://www.w3.org/XML/1998/namespace",
                            "xml:space",
                            "preserve"
                          ));
                  m && n && n.setAttribute("d", f);
                } else {
                  var _ = this.textContainer,
                    x = "start";
                  switch (i.j) {
                    case 1:
                      x = "end";
                      break;
                    case 2:
                      x = "middle";
                  }
                  _.setAttribute("text-anchor", x),
                    _.setAttribute("letter-spacing", g);
                  var E = this.buildTextContents(i.finalText);
                  for (
                    e = E.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0;
                    t < e;
                    t += 1
                  )
                    ((n = this.textSpans[t] || L("tspan")).textContent = E[t]),
                      n.setAttribute("x", 0),
                      n.setAttribute("y", d),
                      (n.style.display = "inherit"),
                      _.appendChild(n),
                      (this.textSpans[t] = n),
                      (d += i.finalLineHeight);
                  this.layerElement.appendChild(_);
                }
                for (; t < this.textSpans.length; )
                  (this.textSpans[t].style.display = "none"), (t += 1);
                this._sizeChanged = !0;
              }),
              (Zt.prototype.sourceRectAtTime = function (t) {
                if (
                  (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                  this.renderInnerContent(),
                  this._sizeChanged)
                ) {
                  this._sizeChanged = !1;
                  var e = this.layerElement.getBBox();
                  this.bbox = {
                    top: e.y,
                    left: e.x,
                    width: e.width,
                    height: e.height,
                  };
                }
                return this.bbox;
              }),
              (Zt.prototype.renderInnerContent = function () {
                if (
                  !this.data.singleShape &&
                  (this.textAnimator.getMeasures(
                    this.textProperty.currentData,
                    this.lettersChangedFlag
                  ),
                  this.lettersChangedFlag ||
                    this.textAnimator.lettersChangedFlag)
                ) {
                  var t, e;
                  this._sizeChanged = !0;
                  var i,
                    s,
                    r = this.textAnimator.renderedLetters,
                    a = this.textProperty.currentData.l;
                  for (e = a.length, t = 0; t < e; t += 1)
                    a[t].n ||
                      ((i = r[t]),
                      (s = this.textSpans[t]),
                      i._mdf.m && s.setAttribute("transform", i.m),
                      i._mdf.o && s.setAttribute("opacity", i.o),
                      i._mdf.sw && s.setAttribute("stroke-width", i.sw),
                      i._mdf.sc && s.setAttribute("stroke", i.sc),
                      i._mdf.fc && s.setAttribute("fill", i.fc));
                }
              }),
              O([Ht, Mt, jt, Wt, kt, Ct, Dt], $t),
              ($t.prototype.initSecondaryElement = function () {}),
              ($t.prototype.identityMatrix = new N()),
              ($t.prototype.buildExpressionInterface = function () {}),
              ($t.prototype.createContent = function () {
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  this.layerElement,
                  0,
                  [],
                  !0
                ),
                  this.filterUniqueShapes();
              }),
              ($t.prototype.filterUniqueShapes = function () {
                var t,
                  e,
                  i,
                  s,
                  r = this.shapes.length,
                  a = this.stylesList.length,
                  n = [],
                  o = !1;
                for (i = 0; i < a; i += 1) {
                  for (
                    s = this.stylesList[i], o = !1, n.length = 0, t = 0;
                    t < r;
                    t += 1
                  )
                    -1 !== (e = this.shapes[t]).styles.indexOf(s) &&
                      (n.push(e), (o = e._isAnimated || o));
                  n.length > 1 && o && this.setShapesAsAnimated(n);
                }
              }),
              ($t.prototype.setShapesAsAnimated = function (t) {
                var e,
                  i = t.length;
                for (e = 0; e < i; e += 1) t[e].setAsAnimated();
              }),
              ($t.prototype.createStyleElement = function (t, e) {
                var i,
                  r = new Ft(t, e),
                  a = r.pElem;
                return (
                  "st" === t.ty
                    ? (i = new Vt(this, t, r))
                    : "fl" === t.ty
                    ? (i = new Rt(this, t, r))
                    : ("gf" !== t.ty && "gs" !== t.ty) ||
                      ((i = new ("gf" === t.ty ? Bt : zt)(this, t, r)),
                      this.globalData.defs.appendChild(i.gf),
                      i.maskId &&
                        (this.globalData.defs.appendChild(i.ms),
                        this.globalData.defs.appendChild(i.of),
                        a.setAttribute(
                          "mask",
                          "url(" + s + "#" + i.maskId + ")"
                        ))),
                  ("st" !== t.ty && "gs" !== t.ty) ||
                    (a.setAttribute(
                      "stroke-linecap",
                      this.lcEnum[t.lc] || "round"
                    ),
                    a.setAttribute(
                      "stroke-linejoin",
                      this.ljEnum[t.lj] || "round"
                    ),
                    a.setAttribute("fill-opacity", "0"),
                    1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)),
                  2 === t.r && a.setAttribute("fill-rule", "evenodd"),
                  t.ln && a.setAttribute("id", t.ln),
                  t.cl && a.setAttribute("class", t.cl),
                  t.bm && (a.style["mix-blend-mode"] = z(t.bm)),
                  this.stylesList.push(r),
                  this.addToAnimatedContents(t, i),
                  i
                );
              }),
              ($t.prototype.createGroupElement = function (t) {
                var e = new Nt();
                return (
                  t.ln && e.gr.setAttribute("id", t.ln),
                  t.cl && e.gr.setAttribute("class", t.cl),
                  t.bm && (e.gr.style["mix-blend-mode"] = z(t.bm)),
                  e
                );
              }),
              ($t.prototype.createTransformElement = function (t, e) {
                var i = U.getTransformProperty(this, t, this),
                  s = new Lt(i, i.o, e);
                return this.addToAnimatedContents(t, s), s;
              }),
              ($t.prototype.createShapeElement = function (t, e, i) {
                var s = 4;
                "rc" === t.ty
                  ? (s = 5)
                  : "el" === t.ty
                  ? (s = 6)
                  : "sr" === t.ty && (s = 7);
                var r = new It(e, i, Z.getShapeProp(this, t, s, this));
                return (
                  this.shapes.push(r),
                  this.addShapeToModifiers(r),
                  this.addToAnimatedContents(t, r),
                  r
                );
              }),
              ($t.prototype.addToAnimatedContents = function (t, e) {
                for (var i = 0, s = this.animatedContents.length; i < s; ) {
                  if (this.animatedContents[i].element === e) return;
                  i += 1;
                }
                this.animatedContents.push({
                  fn: Gt.createRenderFunction(t),
                  element: e,
                  data: t,
                });
              }),
              ($t.prototype.setElementStyles = function (t) {
                var e,
                  i = t.styles,
                  s = this.stylesList.length;
                for (e = 0; e < s; e += 1)
                  this.stylesList[e].closed || i.push(this.stylesList[e]);
              }),
              ($t.prototype.reloadShapes = function () {
                this._isFirstFrame = !0;
                var t,
                  e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                  this.prevViewData[t] = this.itemsData[t];
                for (
                  this.searchShapes(
                    this.shapesData,
                    this.itemsData,
                    this.prevViewData,
                    this.layerElement,
                    0,
                    [],
                    !0
                  ),
                    this.filterUniqueShapes(),
                    e = this.dynamicProperties.length,
                    t = 0;
                  t < e;
                  t += 1
                )
                  this.dynamicProperties[t].getValue();
                this.renderModifiers();
              }),
              ($t.prototype.searchShapes = function (t, e, i, s, r, a, n) {
                var o,
                  h,
                  l,
                  p,
                  f,
                  m,
                  c = [].concat(a),
                  d = t.length - 1,
                  u = [],
                  g = [];
                for (o = d; o >= 0; o -= 1) {
                  if (
                    ((m = this.searchProcessedElement(t[o]))
                      ? (e[o] = i[m - 1])
                      : (t[o]._render = n),
                    "fl" == t[o].ty ||
                      "st" == t[o].ty ||
                      "gf" == t[o].ty ||
                      "gs" == t[o].ty)
                  )
                    m
                      ? (e[o].style.closed = !1)
                      : (e[o] = this.createStyleElement(t[o], r)),
                      t[o]._render && s.appendChild(e[o].style.pElem),
                      u.push(e[o].style);
                  else if ("gr" == t[o].ty) {
                    if (m)
                      for (l = e[o].it.length, h = 0; h < l; h += 1)
                        e[o].prevViewData[h] = e[o].it[h];
                    else e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(
                      t[o].it,
                      e[o].it,
                      e[o].prevViewData,
                      e[o].gr,
                      r + 1,
                      c,
                      n
                    ),
                      t[o]._render && s.appendChild(e[o].gr);
                  } else
                    "tr" == t[o].ty
                      ? (m || (e[o] = this.createTransformElement(t[o], s)),
                        (p = e[o].transform),
                        c.push(p))
                      : "sh" == t[o].ty ||
                        "rc" == t[o].ty ||
                        "el" == t[o].ty ||
                        "sr" == t[o].ty
                      ? (m || (e[o] = this.createShapeElement(t[o], c, r)),
                        this.setElementStyles(e[o]))
                      : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty
                      ? (m
                          ? ((f = e[o]).closed = !1)
                          : ((f = $.getModifier(t[o].ty)).init(this, t[o]),
                            (e[o] = f),
                            this.shapeModifiers.push(f)),
                        g.push(f))
                      : "rp" == t[o].ty &&
                        (m
                          ? ((f = e[o]).closed = !0)
                          : ((f = $.getModifier(t[o].ty)),
                            (e[o] = f),
                            f.init(this, t, o, e),
                            this.shapeModifiers.push(f),
                            (n = !1)),
                        g.push(f));
                  this.addProcessedElement(t[o], o + 1);
                }
                for (d = u.length, o = 0; o < d; o += 1) u[o].closed = !0;
                for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0;
              }),
              ($t.prototype.renderInnerContent = function () {
                this.renderModifiers();
                var t,
                  e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                for (this.renderShape(), t = 0; t < e; t += 1)
                  (this.stylesList[t]._mdf || this._isFirstFrame) &&
                    (this.stylesList[t].msElem &&
                      (this.stylesList[t].msElem.setAttribute(
                        "d",
                        this.stylesList[t].d
                      ),
                      (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
                    this.stylesList[t].pElem.setAttribute(
                      "d",
                      this.stylesList[t].d || "M0 0"
                    ));
              }),
              ($t.prototype.renderShape = function () {
                var t,
                  e,
                  i = this.animatedContents.length;
                for (t = 0; t < i; t += 1)
                  (e = this.animatedContents[t]),
                    (this._isFirstFrame || e.element._isAnimated) &&
                      !0 !== e.data &&
                      e.fn(e.data, e.element, this._isFirstFrame);
              }),
              ($t.prototype.destroy = function () {
                this.destroyBaseElement(),
                  (this.shapesData = null),
                  (this.itemsData = null);
              }),
              (Qt.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    s = this.filterManager.effectElements[2].p.v / 100;
                  this.matrixFilter.setAttribute(
                    "values",
                    i[0] -
                      e[0] +
                      " 0 0 0 " +
                      e[0] +
                      " " +
                      (i[1] - e[1]) +
                      " 0 0 0 " +
                      e[1] +
                      " " +
                      (i[2] - e[2]) +
                      " 0 0 0 " +
                      e[2] +
                      " 0 0 0 " +
                      s +
                      " 0"
                  );
                }
              }),
              (te.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[2].p.v,
                    i = this.filterManager.effectElements[6].p.v;
                  this.matrixFilter.setAttribute(
                    "values",
                    "0 0 0 0 " +
                      e[0] +
                      " 0 0 0 0 " +
                      e[1] +
                      " 0 0 0 0 " +
                      e[2] +
                      " 0 0 0 " +
                      i +
                      " 0"
                  );
                }
              }),
              (ee.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e = 0.3,
                    i = this.filterManager.effectElements[0].p.v * e,
                    s = this.filterManager.effectElements[1].p.v,
                    r = 3 == s ? 0 : i,
                    a = 2 == s ? 0 : i;
                  this.feGaussianBlur.setAttribute("stdDeviation", r + " " + a);
                  var n =
                    1 == this.filterManager.effectElements[2].p.v
                      ? "wrap"
                      : "duplicate";
                  this.feGaussianBlur.setAttribute("edgeMode", n);
                }
              }),
              (ie.prototype.initialize = function () {
                var t,
                  e,
                  i,
                  r,
                  a =
                    this.elem.layerElement.children ||
                    this.elem.layerElement.childNodes;
                for (
                  1 === this.filterManager.effectElements[1].p.v
                    ? ((r = this.elem.maskManager.masksProperties.length),
                      (i = 0))
                    : (r =
                        1 + (i = this.filterManager.effectElements[0].p.v - 1)),
                    (e = L("g")).setAttribute("fill", "none"),
                    e.setAttribute("stroke-linecap", "round"),
                    e.setAttribute("stroke-dashoffset", 1);
                  i < r;
                  i += 1
                )
                  (t = L("path")),
                    e.appendChild(t),
                    this.paths.push({ p: t, m: i });
                if (3 === this.filterManager.effectElements[10].p.v) {
                  var n = L("mask"),
                    o = S();
                  n.setAttribute("id", o),
                    n.setAttribute("mask-type", "alpha"),
                    n.appendChild(e),
                    this.elem.globalData.defs.appendChild(n);
                  var h = L("g");
                  for (
                    h.setAttribute("mask", "url(" + s + "#" + o + ")");
                    a[0];

                  )
                    h.appendChild(a[0]);
                  this.elem.layerElement.appendChild(h),
                    (this.masker = n),
                    e.setAttribute("stroke", "#fff");
                } else if (
                  1 === this.filterManager.effectElements[10].p.v ||
                  2 === this.filterManager.effectElements[10].p.v
                ) {
                  if (2 === this.filterManager.effectElements[10].p.v)
                    for (
                      a =
                        this.elem.layerElement.children ||
                        this.elem.layerElement.childNodes;
                      a.length;

                    )
                      this.elem.layerElement.removeChild(a[0]);
                  this.elem.layerElement.appendChild(e),
                    this.elem.layerElement.removeAttribute("mask"),
                    e.setAttribute("stroke", "#fff");
                }
                (this.initialized = !0), (this.pathMasker = e);
              }),
              (ie.prototype.renderFrame = function (t) {
                this.initialized || this.initialize();
                var e,
                  i,
                  s,
                  r = this.paths.length;
                for (e = 0; e < r; e += 1)
                  if (
                    -1 !== this.paths[e].m &&
                    ((i = this.elem.maskManager.viewData[this.paths[e].m]),
                    (s = this.paths[e].p),
                    (t || this.filterManager._mdf || i.prop._mdf) &&
                      s.setAttribute("d", i.lastPath),
                    t ||
                      this.filterManager.effectElements[9].p._mdf ||
                      this.filterManager.effectElements[4].p._mdf ||
                      this.filterManager.effectElements[7].p._mdf ||
                      this.filterManager.effectElements[8].p._mdf ||
                      i.prop._mdf)
                  ) {
                    var a;
                    if (
                      0 !== this.filterManager.effectElements[7].p.v ||
                      100 !== this.filterManager.effectElements[8].p.v
                    ) {
                      var n =
                          Math.min(
                            this.filterManager.effectElements[7].p.v,
                            this.filterManager.effectElements[8].p.v
                          ) / 100,
                        o =
                          Math.max(
                            this.filterManager.effectElements[7].p.v,
                            this.filterManager.effectElements[8].p.v
                          ) / 100,
                        l = s.getTotalLength();
                      a = "0 0 0 " + l * n + " ";
                      var p,
                        f = l * (o - n),
                        m =
                          1 +
                          (2 *
                            this.filterManager.effectElements[4].p.v *
                            this.filterManager.effectElements[9].p.v) /
                            100,
                        c = Math.floor(f / m);
                      for (p = 0; p < c; p += 1)
                        a +=
                          "1 " +
                          (2 *
                            this.filterManager.effectElements[4].p.v *
                            this.filterManager.effectElements[9].p.v) /
                            100 +
                          " ";
                      a += "0 " + 10 * l + " 0 0";
                    } else
                      a =
                        "1 " +
                        (2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v) /
                          100;
                    s.setAttribute("stroke-dasharray", a);
                  }
                if (
                  ((t || this.filterManager.effectElements[4].p._mdf) &&
                    this.pathMasker.setAttribute(
                      "stroke-width",
                      2 * this.filterManager.effectElements[4].p.v
                    ),
                  (t || this.filterManager.effectElements[6].p._mdf) &&
                    this.pathMasker.setAttribute(
                      "opacity",
                      this.filterManager.effectElements[6].p.v
                    ),
                  (1 === this.filterManager.effectElements[10].p.v ||
                    2 === this.filterManager.effectElements[10].p.v) &&
                    (t || this.filterManager.effectElements[3].p._mdf))
                ) {
                  var d = this.filterManager.effectElements[3].p.v;
                  this.pathMasker.setAttribute(
                    "stroke",
                    "rgb(" +
                      h(255 * d[0]) +
                      "," +
                      h(255 * d[1]) +
                      "," +
                      h(255 * d[2]) +
                      ")"
                  );
                }
              }),
              (se.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    s = this.filterManager.effectElements[2].p.v,
                    r = s[0] + " " + i[0] + " " + e[0],
                    a = s[1] + " " + i[1] + " " + e[1],
                    n = s[2] + " " + i[2] + " " + e[2];
                  this.feFuncR.setAttribute("tableValues", r),
                    this.feFuncG.setAttribute("tableValues", a),
                    this.feFuncB.setAttribute("tableValues", n);
                }
              }),
              (re.prototype.createFeFunc = function (t, e) {
                var i = L(t);
                return i.setAttribute("type", "table"), e.appendChild(i), i;
              }),
              (re.prototype.getTableValue = function (t, e, i, s, r) {
                for (
                  var a,
                    n,
                    o = 0,
                    h = 256,
                    l = Math.min(t, e),
                    p = Math.max(t, e),
                    f = Array.call(null, { length: h }),
                    m = 0,
                    c = r - s,
                    d = e - t;
                  o <= 256;

                )
                  (n =
                    (a = o / 256) <= l
                      ? d < 0
                        ? r
                        : s
                      : a >= p
                      ? d < 0
                        ? s
                        : r
                      : s + c * Math.pow((a - t) / d, 1 / i)),
                    (f[m++] = n),
                    (o += 256 / (h - 1));
                return f.join(" ");
              }),
              (re.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  var e,
                    i = this.filterManager.effectElements;
                  this.feFuncRComposed &&
                    (t ||
                      i[3].p._mdf ||
                      i[4].p._mdf ||
                      i[5].p._mdf ||
                      i[6].p._mdf ||
                      i[7].p._mdf) &&
                    ((e = this.getTableValue(
                      i[3].p.v,
                      i[4].p.v,
                      i[5].p.v,
                      i[6].p.v,
                      i[7].p.v
                    )),
                    this.feFuncRComposed.setAttribute("tableValues", e),
                    this.feFuncGComposed.setAttribute("tableValues", e),
                    this.feFuncBComposed.setAttribute("tableValues", e)),
                    this.feFuncR &&
                      (t ||
                        i[10].p._mdf ||
                        i[11].p._mdf ||
                        i[12].p._mdf ||
                        i[13].p._mdf ||
                        i[14].p._mdf) &&
                      ((e = this.getTableValue(
                        i[10].p.v,
                        i[11].p.v,
                        i[12].p.v,
                        i[13].p.v,
                        i[14].p.v
                      )),
                      this.feFuncR.setAttribute("tableValues", e)),
                    this.feFuncG &&
                      (t ||
                        i[17].p._mdf ||
                        i[18].p._mdf ||
                        i[19].p._mdf ||
                        i[20].p._mdf ||
                        i[21].p._mdf) &&
                      ((e = this.getTableValue(
                        i[17].p.v,
                        i[18].p.v,
                        i[19].p.v,
                        i[20].p.v,
                        i[21].p.v
                      )),
                      this.feFuncG.setAttribute("tableValues", e)),
                    this.feFuncB &&
                      (t ||
                        i[24].p._mdf ||
                        i[25].p._mdf ||
                        i[26].p._mdf ||
                        i[27].p._mdf ||
                        i[28].p._mdf) &&
                      ((e = this.getTableValue(
                        i[24].p.v,
                        i[25].p.v,
                        i[26].p.v,
                        i[27].p.v,
                        i[28].p.v
                      )),
                      this.feFuncB.setAttribute("tableValues", e)),
                    this.feFuncA &&
                      (t ||
                        i[31].p._mdf ||
                        i[32].p._mdf ||
                        i[33].p._mdf ||
                        i[34].p._mdf ||
                        i[35].p._mdf) &&
                      ((e = this.getTableValue(
                        i[31].p.v,
                        i[32].p.v,
                        i[33].p.v,
                        i[34].p.v,
                        i[35].p.v
                      )),
                      this.feFuncA.setAttribute("tableValues", e));
                }
              }),
              (ae.prototype.renderFrame = function (t) {
                if (t || this.filterManager._mdf) {
                  if (
                    ((t || this.filterManager.effectElements[4].p._mdf) &&
                      this.feGaussianBlur.setAttribute(
                        "stdDeviation",
                        this.filterManager.effectElements[4].p.v / 4
                      ),
                    t || this.filterManager.effectElements[0].p._mdf)
                  ) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute(
                      "flood-color",
                      D(
                        Math.round(255 * e[0]),
                        Math.round(255 * e[1]),
                        Math.round(255 * e[2])
                      )
                    );
                  }
                  if (
                    ((t || this.filterManager.effectElements[1].p._mdf) &&
                      this.feFlood.setAttribute(
                        "flood-opacity",
                        this.filterManager.effectElements[1].p.v / 255
                      ),
                    t ||
                      this.filterManager.effectElements[2].p._mdf ||
                      this.filterManager.effectElements[3].p._mdf)
                  ) {
                    var i = this.filterManager.effectElements[3].p.v,
                      s = (this.filterManager.effectElements[2].p.v - 90) * c,
                      r = i * Math.cos(s),
                      a = i * Math.sin(s);
                    this.feOffset.setAttribute("dx", r),
                      this.feOffset.setAttribute("dy", a);
                  }
                }
              });
            var ne = [];
            function oe(t, e, i) {
              (this.initialized = !1),
                (this.filterManager = e),
                (this.filterElem = t),
                (this.elem = i),
                (i.matteElement = L("g")),
                i.matteElement.appendChild(i.layerElement),
                i.matteElement.appendChild(i.transformedElement),
                (i.baseElement = i.matteElement);
            }
            function he(t) {
              var e,
                i,
                r = t.data.ef ? t.data.ef.length : 0,
                a = S(),
                n = lt.createFilter(a),
                o = 0;
              for (this.filters = [], e = 0; e < r; e += 1)
                (i = null),
                  20 === t.data.ef[e].ty
                    ? ((o += 1),
                      (i = new Qt(n, t.effectsManager.effectElements[e])))
                    : 21 === t.data.ef[e].ty
                    ? ((o += 1),
                      (i = new te(n, t.effectsManager.effectElements[e])))
                    : 22 === t.data.ef[e].ty
                    ? (i = new ie(t, t.effectsManager.effectElements[e]))
                    : 23 === t.data.ef[e].ty
                    ? ((o += 1),
                      (i = new se(n, t.effectsManager.effectElements[e])))
                    : 24 === t.data.ef[e].ty
                    ? ((o += 1),
                      (i = new re(n, t.effectsManager.effectElements[e])))
                    : 25 === t.data.ef[e].ty
                    ? ((o += 1),
                      (i = new ae(n, t.effectsManager.effectElements[e])))
                    : 28 === t.data.ef[e].ty
                    ? (i = new oe(n, t.effectsManager.effectElements[e], t))
                    : 29 === t.data.ef[e].ty &&
                      ((o += 1),
                      (i = new ee(n, t.effectsManager.effectElements[e]))),
                  i && this.filters.push(i);
              o &&
                (t.globalData.defs.appendChild(n),
                t.layerElement.setAttribute(
                  "filter",
                  "url(" + s + "#" + a + ")"
                )),
                this.filters.length && t.addRenderableComponent(this);
            }
            (oe.prototype.findSymbol = function (t) {
              for (var e = 0, i = ne.length; e < i; ) {
                if (ne[e] === t) return ne[e];
                e += 1;
              }
              return null;
            }),
              (oe.prototype.replaceInParent = function (t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                  for (
                    var s, r = i.children, a = 0, n = r.length;
                    a < n && r[a] !== t.layerElement;

                  )
                    a += 1;
                  a <= n - 2 && (s = r[a + 1]);
                  var o = L("use");
                  o.setAttribute("href", "#" + e),
                    s ? i.insertBefore(o, s) : i.appendChild(o);
                }
              }),
              (oe.prototype.setElementAsMask = function (t, e) {
                if (!this.findSymbol(e)) {
                  var i = S(),
                    s = L("mask");
                  s.setAttribute("id", e.layerId),
                    s.setAttribute("mask-type", "alpha"),
                    ne.push(e);
                  var r = t.globalData.defs;
                  r.appendChild(s);
                  var a = L("symbol");
                  a.setAttribute("id", i),
                    this.replaceInParent(e, i),
                    a.appendChild(e.layerElement),
                    r.appendChild(a);
                  var n = L("use");
                  n.setAttribute("href", "#" + i),
                    s.appendChild(n),
                    (e.data.hd = !1),
                    e.show();
                }
                t.setMatte(e.layerId);
              }),
              (oe.prototype.initialize = function () {
                for (
                  var t = this.filterManager.effectElements[0].p.v,
                    e = this.elem.comp.elements,
                    i = 0,
                    s = e.length;
                  i < s;

                )
                  e[i] &&
                    e[i].data.ind === t &&
                    this.setElementAsMask(this.elem, e[i]),
                    (i += 1);
                this.initialized = !0;
              }),
              (oe.prototype.renderFrame = function () {
                this.initialized || this.initialize();
              }),
              (he.prototype.renderFrame = function (t) {
                var e,
                  i = this.filters.length;
                for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
              });
            var le = (function () {
                var e = {},
                  i = [],
                  s = 0,
                  r = 0,
                  a = 0,
                  n = !0,
                  o = !1;
                function h(t) {
                  for (var e = 0, s = t.target; e < r; )
                    i[e].animation === s &&
                      (i.splice(e, 1), (e -= 1), (r -= 1), s.isPaused || m()),
                      (e += 1);
                }
                function l(t, e) {
                  if (!t) return null;
                  for (var s = 0; s < r; ) {
                    if (i[s].elem == t && null !== i[s].elem)
                      return i[s].animation;
                    s += 1;
                  }
                  var a = new pe();
                  return c(a, t), a.setData(t, e), a;
                }
                function p() {
                  var t,
                    e = i.length,
                    s = [];
                  for (t = 0; t < e; t += 1) s.push(i[t].animation);
                  return s;
                }
                function f() {
                  (a += 1), C();
                }
                function m() {
                  a -= 1;
                }
                function c(t, e) {
                  t.addEventListener("destroy", h),
                    t.addEventListener("_active", f),
                    t.addEventListener("_idle", m),
                    i.push({ elem: e, animation: t }),
                    (r += 1);
                }
                function d(t) {
                  var e = new pe();
                  return c(e, null), e.setParams(t), e;
                }
                function u(t, e) {
                  var s;
                  for (s = 0; s < r; s += 1) i[s].animation.setSpeed(t, e);
                }
                function g(t, e) {
                  var s;
                  for (s = 0; s < r; s += 1) i[s].animation.setDirection(t, e);
                }
                function y(t) {
                  var e;
                  for (e = 0; e < r; e += 1) i[e].animation.play(t);
                }
                function v(e) {
                  var h,
                    l = e - s;
                  for (h = 0; h < r; h += 1) i[h].animation.advanceTime(l);
                  (s = e), a && !o ? t.requestAnimationFrame(v) : (n = !0);
                }
                function b(e) {
                  (s = e), t.requestAnimationFrame(v);
                }
                function _(t) {
                  var e;
                  for (e = 0; e < r; e += 1) i[e].animation.pause(t);
                }
                function x(t, e, s) {
                  var a;
                  for (a = 0; a < r; a += 1)
                    i[a].animation.goToAndStop(t, e, s);
                }
                function E(t) {
                  var e;
                  for (e = 0; e < r; e += 1) i[e].animation.stop(t);
                }
                function P(t) {
                  var e;
                  for (e = 0; e < r; e += 1) i[e].animation.togglePause(t);
                }
                function S(t) {
                  var e;
                  for (e = r - 1; e >= 0; e -= 1) i[e].animation.destroy(t);
                }
                function A(t, e, i) {
                  var s,
                    r = [].concat(
                      [].slice.call(document.getElementsByClassName("lottie")),
                      [].slice.call(
                        document.getElementsByClassName("bodymovin")
                      )
                    ),
                    a = r.length;
                  for (s = 0; s < a; s += 1)
                    i && r[s].setAttribute("data-bm-type", i), l(r[s], t);
                  if (e && 0 === a) {
                    i || (i = "svg");
                    var n = document.getElementsByTagName("body")[0];
                    n.innerHTML = "";
                    var o = V("div");
                    (o.style.width = "100%"),
                      (o.style.height = "100%"),
                      o.setAttribute("data-bm-type", i),
                      n.appendChild(o),
                      l(o, t);
                  }
                }
                function k() {
                  var t;
                  for (t = 0; t < r; t += 1) i[t].animation.resize();
                }
                function C() {
                  !o && a && n && (t.requestAnimationFrame(b), (n = !1));
                }
                function M() {
                  o = !0;
                }
                function T() {
                  (o = !1), C();
                }
                return (
                  (e.registerAnimation = l),
                  (e.loadAnimation = d),
                  (e.setSpeed = u),
                  (e.setDirection = g),
                  (e.play = y),
                  (e.pause = _),
                  (e.stop = E),
                  (e.togglePause = P),
                  (e.searchAnimations = A),
                  (e.resize = k),
                  (e.goToAndStop = x),
                  (e.destroy = S),
                  (e.freeze = M),
                  (e.unfreeze = T),
                  (e.getRegisteredAnimations = p),
                  e
                );
              })(),
              pe = function () {
                (this._cbs = []),
                  (this.name = ""),
                  (this.path = ""),
                  (this.isLoaded = !1),
                  (this.currentFrame = 0),
                  (this.currentRawFrame = 0),
                  (this.firstFrame = 0),
                  (this.totalFrames = 0),
                  (this.frameRate = 0),
                  (this.frameMult = 0),
                  (this.playSpeed = 1),
                  (this.playDirection = 1),
                  (this.playCount = 0),
                  (this.animationData = {}),
                  (this.assets = []),
                  (this.isPaused = !0),
                  (this.autoplay = !1),
                  (this.loop = !0),
                  (this.renderer = null),
                  (this.animationID = S()),
                  (this.assetsPath = ""),
                  (this.timeCompleted = 0),
                  (this.segmentPos = 0),
                  (this.isSubframeEnabled = a),
                  (this.segments = []),
                  (this._idle = !0),
                  (this._completedLoop = !1),
                  (this.projectInterface = f()),
                  (this.imagePreloader = new ot());
              };
            function fe() {}
            O([w], pe),
              (pe.prototype.setParams = function (t) {
                t.context && (this.context = t.context),
                  (t.wrapper || t.container) &&
                    (this.wrapper = t.wrapper || t.container);
                var e = t.animType
                  ? t.animType
                  : t.renderer
                  ? t.renderer
                  : "svg";
                switch (e) {
                  case "canvas":
                    this.renderer = new CanvasRenderer(
                      this,
                      t.rendererSettings
                    );
                    break;
                  case "svg":
                    this.renderer = new St(this, t.rendererSettings);
                    break;
                  default:
                    this.renderer = new HybridRenderer(
                      this,
                      t.rendererSettings
                    );
                }
                this.imagePreloader.setCacheType(e),
                  this.renderer.setProjectInterface(this.projectInterface),
                  (this.animType = e),
                  "" === t.loop ||
                  null === t.loop ||
                  void 0 === t.loop ||
                  !0 === t.loop
                    ? (this.loop = !0)
                    : !1 === t.loop
                    ? (this.loop = !1)
                    : (this.loop = parseInt(t.loop)),
                  (this.autoplay = !("autoplay" in t) || t.autoplay),
                  (this.name = t.name ? t.name : ""),
                  (this.autoloadSegments =
                    !t.hasOwnProperty("autoloadSegments") ||
                    t.autoloadSegments),
                  (this.assetsPath = t.assetsPath),
                  (this.initialSegment = t.initialSegment),
                  t.animationData
                    ? this.configAnimation(t.animationData)
                    : t.path &&
                      (-1 !== t.path.lastIndexOf("\\")
                        ? (this.path = t.path.substr(
                            0,
                            t.path.lastIndexOf("\\") + 1
                          ))
                        : (this.path = t.path.substr(
                            0,
                            t.path.lastIndexOf("/") + 1
                          )),
                      (this.fileName = t.path.substr(
                        t.path.lastIndexOf("/") + 1
                      )),
                      (this.fileName = this.fileName.substr(
                        0,
                        this.fileName.lastIndexOf(".json")
                      )),
                      pt.load(
                        t.path,
                        this.configAnimation.bind(this),
                        function () {
                          this.trigger("data_failed");
                        }.bind(this)
                      ));
              }),
              (pe.prototype.setData = function (t, e) {
                var i = {
                    wrapper: t,
                    animationData: e
                      ? "object" == typeof e
                        ? e
                        : JSON.parse(e)
                      : null,
                  },
                  s = t.attributes;
                (i.path = s.getNamedItem("data-animation-path")
                  ? s.getNamedItem("data-animation-path").value
                  : s.getNamedItem("data-bm-path")
                  ? s.getNamedItem("data-bm-path").value
                  : s.getNamedItem("bm-path")
                  ? s.getNamedItem("bm-path").value
                  : ""),
                  (i.animType = s.getNamedItem("data-anim-type")
                    ? s.getNamedItem("data-anim-type").value
                    : s.getNamedItem("data-bm-type")
                    ? s.getNamedItem("data-bm-type").value
                    : s.getNamedItem("bm-type")
                    ? s.getNamedItem("bm-type").value
                    : s.getNamedItem("data-bm-renderer")
                    ? s.getNamedItem("data-bm-renderer").value
                    : s.getNamedItem("bm-renderer")
                    ? s.getNamedItem("bm-renderer").value
                    : "canvas");
                var r = s.getNamedItem("data-anim-loop")
                  ? s.getNamedItem("data-anim-loop").value
                  : s.getNamedItem("data-bm-loop")
                  ? s.getNamedItem("data-bm-loop").value
                  : s.getNamedItem("bm-loop")
                  ? s.getNamedItem("bm-loop").value
                  : "";
                "" === r ||
                  (i.loop = "false" !== r && ("true" === r || parseInt(r)));
                var a = s.getNamedItem("data-anim-autoplay")
                  ? s.getNamedItem("data-anim-autoplay").value
                  : s.getNamedItem("data-bm-autoplay")
                  ? s.getNamedItem("data-bm-autoplay").value
                  : !s.getNamedItem("bm-autoplay") ||
                    s.getNamedItem("bm-autoplay").value;
                (i.autoplay = "false" !== a),
                  (i.name = s.getNamedItem("data-name")
                    ? s.getNamedItem("data-name").value
                    : s.getNamedItem("data-bm-name")
                    ? s.getNamedItem("data-bm-name").value
                    : s.getNamedItem("bm-name")
                    ? s.getNamedItem("bm-name").value
                    : ""),
                  "false" ===
                    (s.getNamedItem("data-anim-prerender")
                      ? s.getNamedItem("data-anim-prerender").value
                      : s.getNamedItem("data-bm-prerender")
                      ? s.getNamedItem("data-bm-prerender").value
                      : s.getNamedItem("bm-prerender")
                      ? s.getNamedItem("bm-prerender").value
                      : "") && (i.prerender = !1),
                  this.setParams(i);
              }),
              (pe.prototype.includeLayers = function (t) {
                t.op > this.animationData.op &&
                  ((this.animationData.op = t.op),
                  (this.totalFrames = Math.floor(
                    t.op - this.animationData.ip
                  )));
                var i,
                  s,
                  r = this.animationData.layers,
                  a = r.length,
                  n = t.layers,
                  o = n.length;
                for (s = 0; s < o; s += 1)
                  for (i = 0; i < a; ) {
                    if (r[i].id == n[s].id) {
                      r[i] = n[s];
                      break;
                    }
                    i += 1;
                  }
                if (
                  ((t.chars || t.fonts) &&
                    (this.renderer.globalData.fontManager.addChars(t.chars),
                    this.renderer.globalData.fontManager.addFonts(
                      t.fonts,
                      this.renderer.globalData.defs
                    )),
                  t.assets)
                )
                  for (a = t.assets.length, i = 0; i < a; i += 1)
                    this.animationData.assets.push(t.assets[i]);
                (this.animationData.__complete = !1),
                  Y.completeData(
                    this.animationData,
                    this.renderer.globalData.fontManager
                  ),
                  this.renderer.includeLayers(t.layers),
                  e && e.initExpressions(this),
                  this.loadNextSegment();
              }),
              (pe.prototype.loadNextSegment = function () {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments)
                  return (
                    this.trigger("data_ready"),
                    void (this.timeCompleted = this.totalFrames)
                  );
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var i =
                  this.path + this.fileName + "_" + this.segmentPos + ".json";
                (this.segmentPos += 1),
                  pt.load(
                    i,
                    this.includeLayers.bind(this),
                    function () {
                      this.trigger("data_failed");
                    }.bind(this)
                  );
              }),
              (pe.prototype.loadSegments = function () {
                this.animationData.segments ||
                  (this.timeCompleted = this.totalFrames),
                  this.loadNextSegment();
              }),
              (pe.prototype.imagesLoaded = function () {
                this.trigger("loaded_images"), this.checkLoaded();
              }),
              (pe.prototype.preloadImages = function () {
                this.imagePreloader.setAssetsPath(this.assetsPath),
                  this.imagePreloader.setPath(this.path),
                  this.imagePreloader.loadAssets(
                    this.animationData.assets,
                    this.imagesLoaded.bind(this)
                  );
              }),
              (pe.prototype.configAnimation = function (t) {
                if (this.renderer)
                  try {
                    (this.animationData = t),
                      this.initialSegment
                        ? ((this.totalFrames = Math.floor(
                            this.initialSegment[1] - this.initialSegment[0]
                          )),
                          (this.firstFrame = Math.round(
                            this.initialSegment[0]
                          )))
                        : ((this.totalFrames = Math.floor(
                            this.animationData.op - this.animationData.ip
                          )),
                          (this.firstFrame = Math.round(
                            this.animationData.ip
                          ))),
                      this.renderer.configAnimation(t),
                      t.assets || (t.assets = []),
                      (this.assets = this.animationData.assets),
                      (this.frameRate = this.animationData.fr),
                      (this.frameMult = this.animationData.fr / 1e3),
                      this.renderer.searchExtraCompositions(t.assets),
                      this.trigger("config_ready"),
                      this.preloadImages(),
                      this.loadSegments(),
                      this.updaFrameModifier(),
                      this.waitForFontsLoaded();
                  } catch (t) {
                    this.triggerConfigError(t);
                  }
              }),
              (pe.prototype.waitForFontsLoaded = function () {
                this.renderer &&
                  (this.renderer.globalData.fontManager.isLoaded
                    ? this.checkLoaded()
                    : setTimeout(this.waitForFontsLoaded.bind(this), 20));
              }),
              (pe.prototype.checkLoaded = function () {
                this.isLoaded ||
                  !this.renderer.globalData.fontManager.isLoaded ||
                  (!this.imagePreloader.loaded() &&
                    "canvas" === this.renderer.rendererType) ||
                  ((this.isLoaded = !0),
                  Y.completeData(
                    this.animationData,
                    this.renderer.globalData.fontManager
                  ),
                  e && e.initExpressions(this),
                  this.renderer.initItems(),
                  setTimeout(
                    function () {
                      this.trigger("DOMLoaded");
                    }.bind(this),
                    0
                  ),
                  this.gotoFrame(),
                  this.autoplay && this.play());
              }),
              (pe.prototype.resize = function () {
                this.renderer.updateContainerSize();
              }),
              (pe.prototype.setSubframe = function (t) {
                this.isSubframeEnabled = !!t;
              }),
              (pe.prototype.gotoFrame = function () {
                (this.currentFrame = this.isSubframeEnabled
                  ? this.currentRawFrame
                  : ~~this.currentRawFrame),
                  this.timeCompleted !== this.totalFrames &&
                    this.currentFrame > this.timeCompleted &&
                    (this.currentFrame = this.timeCompleted),
                  this.trigger("enterFrame"),
                  this.renderFrame();
              }),
              (pe.prototype.renderFrame = function () {
                if (!1 !== this.isLoaded)
                  try {
                    this.renderer.renderFrame(
                      this.currentFrame + this.firstFrame
                    );
                  } catch (t) {
                    this.triggerRenderFrameError(t);
                  }
              }),
              (pe.prototype.play = function (t) {
                (t && this.name != t) ||
                  (!0 === this.isPaused &&
                    ((this.isPaused = !1),
                    this._idle &&
                      ((this._idle = !1), this.trigger("_active"))));
              }),
              (pe.prototype.pause = function (t) {
                (t && this.name != t) ||
                  (!1 === this.isPaused &&
                    ((this.isPaused = !0),
                    (this._idle = !0),
                    this.trigger("_idle")));
              }),
              (pe.prototype.togglePause = function (t) {
                (t && this.name != t) ||
                  (!0 === this.isPaused ? this.play() : this.pause());
              }),
              (pe.prototype.stop = function (t) {
                (t && this.name != t) ||
                  (this.pause(),
                  (this.playCount = 0),
                  (this._completedLoop = !1),
                  this.setCurrentRawFrameValue(0));
              }),
              (pe.prototype.goToAndStop = function (t, e, i) {
                (i && this.name != i) ||
                  (e
                    ? this.setCurrentRawFrameValue(t)
                    : this.setCurrentRawFrameValue(t * this.frameModifier),
                  this.pause());
              }),
              (pe.prototype.goToAndPlay = function (t, e, i) {
                this.goToAndStop(t, e, i), this.play();
              }),
              (pe.prototype.advanceTime = function (t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                  var e = this.currentRawFrame + t * this.frameModifier,
                    i = !1;
                  e >= this.totalFrames - 1 && this.frameModifier > 0
                    ? this.loop && this.playCount !== this.loop
                      ? e >= this.totalFrames
                        ? ((this.playCount += 1),
                          this.checkSegments(e % this.totalFrames) ||
                            (this.setCurrentRawFrameValue(e % this.totalFrames),
                            (this._completedLoop = !0),
                            this.trigger("loopComplete")))
                        : this.setCurrentRawFrameValue(e)
                      : this.checkSegments(
                          e > this.totalFrames ? e % this.totalFrames : 0
                        ) || ((i = !0), (e = this.totalFrames - 1))
                    : e < 0
                    ? this.checkSegments(e % this.totalFrames) ||
                      (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                        ? ((i = !0), (e = 0))
                        : (this.setCurrentRawFrameValue(
                            this.totalFrames + (e % this.totalFrames)
                          ),
                          this._completedLoop
                            ? this.trigger("loopComplete")
                            : (this._completedLoop = !0)))
                    : this.setCurrentRawFrameValue(e),
                    i &&
                      (this.setCurrentRawFrameValue(e),
                      this.pause(),
                      this.trigger("complete"));
                }
              }),
              (pe.prototype.adjustSegment = function (t, e) {
                (this.playCount = 0),
                  t[1] < t[0]
                    ? (this.frameModifier > 0 &&
                        (this.playSpeed < 0
                          ? this.setSpeed(-this.playSpeed)
                          : this.setDirection(-1)),
                      (this.timeCompleted = this.totalFrames = t[0] - t[1]),
                      (this.firstFrame = t[1]),
                      this.setCurrentRawFrameValue(
                        this.totalFrames - 0.001 - e
                      ))
                    : t[1] > t[0] &&
                      (this.frameModifier < 0 &&
                        (this.playSpeed < 0
                          ? this.setSpeed(-this.playSpeed)
                          : this.setDirection(1)),
                      (this.timeCompleted = this.totalFrames = t[1] - t[0]),
                      (this.firstFrame = t[0]),
                      this.setCurrentRawFrameValue(0.001 + e)),
                  this.trigger("segmentStart");
              }),
              (pe.prototype.setSegment = function (t, e) {
                var i = -1;
                this.isPaused &&
                  (this.currentRawFrame + this.firstFrame < t
                    ? (i = t)
                    : this.currentRawFrame + this.firstFrame > e &&
                      (i = e - t)),
                  (this.firstFrame = t),
                  (this.timeCompleted = this.totalFrames = e - t),
                  -1 !== i && this.goToAndStop(i, !0);
              }),
              (pe.prototype.playSegments = function (t, e) {
                if (
                  (e && (this.segments.length = 0), "object" == typeof t[0])
                ) {
                  var i,
                    s = t.length;
                  for (i = 0; i < s; i += 1) this.segments.push(t[i]);
                } else this.segments.push(t);
                this.segments.length &&
                  e &&
                  this.adjustSegment(this.segments.shift(), 0),
                  this.isPaused && this.play();
              }),
              (pe.prototype.resetSegments = function (t) {
                (this.segments.length = 0),
                  this.segments.push([
                    this.animationData.ip,
                    this.animationData.op,
                  ]),
                  t && this.checkSegments(0);
              }),
              (pe.prototype.checkSegments = function (t) {
                return (
                  !!this.segments.length &&
                  (this.adjustSegment(this.segments.shift(), t), !0)
                );
              }),
              (pe.prototype.destroy = function (t) {
                (t && this.name != t) ||
                  !this.renderer ||
                  (this.renderer.destroy(),
                  this.imagePreloader.destroy(),
                  this.trigger("destroy"),
                  (this._cbs = null),
                  (this.onEnterFrame =
                    this.onLoopComplete =
                    this.onComplete =
                    this.onSegmentStart =
                    this.onDestroy =
                      null),
                  (this.renderer = null));
              }),
              (pe.prototype.setCurrentRawFrameValue = function (t) {
                (this.currentRawFrame = t), this.gotoFrame();
              }),
              (pe.prototype.setSpeed = function (t) {
                (this.playSpeed = t), this.updaFrameModifier();
              }),
              (pe.prototype.setDirection = function (t) {
                (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
              }),
              (pe.prototype.updaFrameModifier = function () {
                this.frameModifier =
                  this.frameMult * this.playSpeed * this.playDirection;
              }),
              (pe.prototype.getPath = function () {
                return this.path;
              }),
              (pe.prototype.getAssetsPath = function (t) {
                var e = "";
                if (t.e) e = t.p;
                else if (this.assetsPath) {
                  var i = t.p;
                  -1 !== i.indexOf("images/") && (i = i.split("/")[1]),
                    (e = this.assetsPath + i);
                } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
                return e;
              }),
              (pe.prototype.getAssetData = function (t) {
                for (var e = 0, i = this.assets.length; e < i; ) {
                  if (t == this.assets[e].id) return this.assets[e];
                  e += 1;
                }
              }),
              (pe.prototype.hide = function () {
                this.renderer.hide();
              }),
              (pe.prototype.show = function () {
                this.renderer.show();
              }),
              (pe.prototype.getDuration = function (t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate;
              }),
              (pe.prototype.trigger = function (t) {
                if (this._cbs && this._cbs[t])
                  switch (t) {
                    case "enterFrame":
                      this.triggerEvent(
                        t,
                        new g(
                          t,
                          this.currentFrame,
                          this.totalFrames,
                          this.frameModifier
                        )
                      );
                      break;
                    case "loopComplete":
                      this.triggerEvent(
                        t,
                        new v(t, this.loop, this.playCount, this.frameMult)
                      );
                      break;
                    case "complete":
                      this.triggerEvent(t, new y(t, this.frameMult));
                      break;
                    case "segmentStart":
                      this.triggerEvent(
                        t,
                        new b(t, this.firstFrame, this.totalFrames)
                      );
                      break;
                    case "destroy":
                      this.triggerEvent(t, new _(t, this));
                      break;
                    default:
                      this.triggerEvent(t);
                  }
                "enterFrame" === t &&
                  this.onEnterFrame &&
                  this.onEnterFrame.call(
                    this,
                    new g(
                      t,
                      this.currentFrame,
                      this.totalFrames,
                      this.frameMult
                    )
                  ),
                  "loopComplete" === t &&
                    this.onLoopComplete &&
                    this.onLoopComplete.call(
                      this,
                      new v(t, this.loop, this.playCount, this.frameMult)
                    ),
                  "complete" === t &&
                    this.onComplete &&
                    this.onComplete.call(this, new y(t, this.frameMult)),
                  "segmentStart" === t &&
                    this.onSegmentStart &&
                    this.onSegmentStart.call(
                      this,
                      new b(t, this.firstFrame, this.totalFrames)
                    ),
                  "destroy" === t &&
                    this.onDestroy &&
                    this.onDestroy.call(this, new _(t, this));
              }),
              (pe.prototype.triggerRenderFrameError = function (t) {
                var e = new x(t, this.currentFrame);
                this.triggerEvent("error", e),
                  this.onError && this.onError.call(this, e);
              }),
              (pe.prototype.triggerConfigError = function (t) {
                var e = new E(t, this.currentFrame);
                this.triggerEvent("error", e),
                  this.onError && this.onError.call(this, e);
              });
            var me = {};
            function ce(t) {
              s = t;
            }
            function de() {
              !0 === Pe
                ? le.searchAnimations(Se, Pe, Ae)
                : le.searchAnimations();
            }
            function ue(t) {
              a = t;
            }
            function ge(t) {
              return (
                !0 === Pe && (t.animationData = JSON.parse(Se)),
                le.loadAnimation(t)
              );
            }
            function ye(t) {
              if ("string" == typeof t)
                switch (t) {
                  case "high":
                    m = 200;
                    break;
                  case "medium":
                    m = 50;
                    break;
                  case "low":
                    m = 10;
                }
              else !isNaN(t) && t > 1 && (m = t);
              u(!(m >= 50));
            }
            function ve() {
              return "undefined" != typeof navigator;
            }
            function be(t, i) {
              "expressions" === t && (e = i);
            }
            function _e(t) {
              switch (t) {
                case "propertyFactory":
                  return K;
                case "shapePropertyFactory":
                  return Z;
                case "matrix":
                  return N;
              }
            }
            function xe() {
              "complete" === document.readyState && (clearInterval(Me), de());
            }
            function Ee(t) {
              for (var e = Ce.split("&"), i = 0; i < e.length; i++) {
                var s = e[i].split("=");
                if (decodeURIComponent(s[0]) == t)
                  return decodeURIComponent(s[1]);
              }
            }
            (me.play = le.play),
              (me.pause = le.pause),
              (me.setLocationHref = ce),
              (me.togglePause = le.togglePause),
              (me.setSpeed = le.setSpeed),
              (me.setDirection = le.setDirection),
              (me.stop = le.stop),
              (me.searchAnimations = de),
              (me.registerAnimation = le.registerAnimation),
              (me.loadAnimation = ge),
              (me.setSubframeRendering = ue),
              (me.resize = le.resize),
              (me.goToAndStop = le.goToAndStop),
              (me.destroy = le.destroy),
              (me.setQuality = ye),
              (me.inBrowser = ve),
              (me.installPlugin = be),
              (me.freeze = le.freeze),
              (me.unfreeze = le.unfreeze),
              (me.getRegisteredAnimations = le.getRegisteredAnimations),
              (me.__getFactory = _e),
              (me.version = "5.6.10");
            var Pe = "__[STANDALONE]__",
              Se = "__[ANIMATIONDATA]__",
              Ae = "";
            if (Pe) {
              var ke = document.getElementsByTagName("script"),
                Ce = (ke[ke.length - 1] || { src: "" }).src.replace(
                  /^[^\?]+\??/,
                  ""
                );
              Ae = Ee("renderer");
            }
            var Me = setInterval(xe, 100);
            return me;
          })(r);
        }.call(e, i, e, t)),
        void 0 === s || (t.exports = s));
    },
  },
]);
try {
  stManager.done("dist/lottie.7d914fa3404556039ac3.js");
} catch (t) {}
