(() => {
  "use strict";
  var __webpack_modules__ = {
      796908: (e, _, t) => {
        t.d(_, { default: () => c });
        var i = t(695724),
          o = t(49535),
          s = t(726271),
          l = t(315544),
          r = t(635676);
        function n(e) {
          if (!this.inited) return !1;
          if ((e || (e = window.event), this.isHorizontal)) {
            var _ = Math.floor(
              (this.contWidth() - this.scrollWidth) *
                Math.min(
                  1,
                  (e.screenX - this.moveX) /
                    (this.scrollbarSize - this.innerWidth - 6)
                )
            );
            (0, i.isFunction)(this.options.onScroll) &&
              this.options.onScroll(this.obj.scrollLeft - _, this),
              (this.obj.scrollLeft = _);
          } else {
            var t = Math.floor(
              (this.contHeight() - this.scrollHeight) *
                Math.min(
                  1,
                  (e.screenY - this.moveY) /
                    (this.scrollbarSize - this.innerHeight - 6)
                )
            );
            (0, i.isFunction)(this.options.onScroll) &&
              this.options.onScroll(this.obj.scrollTop - t, this),
              (this.obj.scrollTop = t);
          }
          return this.update(!0), !1;
        }
        function a() {
          return (
            !!this.inited &&
            ((this.moveY = this.moveX = this.isDown = !1),
            this.isOut && this.contOut(),
            (0, o.removeEvent)(document, "mousemove", this.mouseMove),
            (0, o.removeEvent)(document, "mouseup", this.mouseUp),
            (0, l.setStyle)(document.body, "cursor", "default"),
            (0, l.setStyle)(this.obj, { pointerEvents: "" }),
            (0, l.removeClass)(this.inner, "scrollbar_hovered"),
            (0, i.isFunction)(this.options.stopDrag) && this.options.stopDrag(),
            (0, i.isFunction)(this.options.onHold) && this.options.onHold(!1),
            !1)
          );
        }
        function h(e) {
          return (
            !!this.inited &&
            (this.moveY || (0, o.checkEvent)(e)
              ? void 0
              : (e || (e = window.event),
                (0, o.addEvent)(document, "mousemove", this.mouseMove),
                (0, o.addEvent)(document, "mouseup", this.mouseUp),
                (0, l.setStyle)(document.body, "cursor", "pointer"),
                (0, l.setStyle)(this.obj, { pointerEvents: "none" }),
                this.isHorizontal
                  ? (this.moveX = e.screenX - (this.inner.offsetLeft || 0))
                  : (this.moveY = e.screenY - (this.inner.offsetTop || 0)),
                (0, l.addClass)(this.inner, "scrollbar_hovered"),
                (0, i.isFunction)(this.options.startDrag) &&
                  this.options.startDrag(),
                (0, i.isFunction)(this.options.onHold) &&
                  this.options.onHold(!0),
                (this.isDown = !0),
                (0, o.cancelEvent)(e)))
          );
        }
        function d(e) {
          switch ((e || (e = window.event), e.keyCode)) {
            case 40:
              this.obj[this.scrollProp] += 40;
              break;
            case 38:
              this.obj[this.scrollProp] -= 40;
              break;
            case 34:
              this.obj[this.scrollProp] += this[this.scrollDimensionProp];
              break;
            case 33:
              this.obj[this.scrollProp] -= this[this.scrollDimensionProp];
              break;
            default:
              return !0;
          }
          return this.update(!0), (0, o.cancelEvent)(e);
        }
        function u(e, _) {
          var t = this.wheel.bind(this);
          (this.obj = e = (0, l.ge)(e)),
            (this.options = (0, i.extend)(
              {
                nomargin: !1,
                horizontal: !1,
                top: 0,
                bottom: 0,
                padding: 3,
                prefix: "",
                hidden: 0,
              },
              _ || {}
            )),
            (this.isHorizontal = this.options.horizontal),
            (this.scrollProp = this.isHorizontal ? "scrollLeft" : "scrollTop"),
            (this.scrollDimensionProp = this.isHorizontal
              ? "scrollWidth"
              : "scrollHeight"),
            (this.topShadow = !1),
            (this.bottomShadow = !1),
            (this[this.scrollProp + "Last"] = this.obj[this.scrollProp]),
            (this.destroyList = []),
            (this.mouseDown = h.bind(this)),
            (this.mouseMove = n.bind(this)),
            (this.mouseUp = a.bind(this)),
            (this.initObjMouseWheel = function () {
              (0, o.addEvent)(e, s.browserFeatures.wheelEvent, t);
            }),
            (this.destroyObjMouseWheel = function () {
              (0, o.removeEvent)(e, s.browserFeatures.wheelEvent, t);
            }),
            (this.initScrollBarMouseWheel = function () {
              (0, o.addEvent)(this.scrollbar, s.browserFeatures.wheelEvent, t);
            }.bind(this)),
            (this.destroyScrollBarMouseWheel = function () {
              (0, o.removeEvent)(
                this.scrollbar,
                s.browserFeatures.wheelEvent,
                t
              );
            }.bind(this)),
            setTimeout(
              function () {
                (0, l.setStyle)(e, { overflow: "hidden" }),
                  (this.scrollbar = (0, l.ce)("div", {
                    className:
                      (this.options.prefix
                        ? this.options.prefix + "scrollbar_cont "
                        : "") +
                      "scrollbar_cont" +
                      (this.isHorizontal ? " scrollbar_cont_horiz" : "") +
                      (this.options.hidden ? " scrollbar_hidden" : ""),
                  })),
                  (this.inner = (0, l.ce)("div", {
                    className:
                      (this.options.prefix
                        ? this.options.prefix + "scrollbar_inner "
                        : "") + "scrollbar_inner",
                  })),
                  this.scrollbar.appendChild(this.inner);
                var _ = this.widthUpdated();
                this.options.shadows &&
                  (e.parentNode.insertBefore(
                    (this.topShadowDiv = (0, l.ce)(
                      "div",
                      {
                        className:
                          (this.options.prefix
                            ? this.options.prefix + "scrollbar_top "
                            : "") + "scrollbar_top",
                      },
                      { width: _[0] }
                    )),
                    e
                  ),
                  e.parentNode.insertBefore(
                    (this.bottomShadowDiv = (0, l.ce)(
                      "div",
                      {
                        className:
                          (this.options.prefix
                            ? this.options.prefix + "scrollbar_bottom "
                            : "") + "scrollbar_bottom",
                      },
                      { width: _[0] }
                    )),
                    e.nextSibling
                  )),
                  e.parentNode.insertBefore(this.scrollbar, e);
                var r = d.bind(this),
                  n = function () {
                    this.initObjMouseWheel(),
                      (0, o.removeEvent)(e, "mousemove", n);
                  }.bind(this);
                if (
                  ((0, o.addEvent)(e, "mouseleave", this.destroyObjMouseWheel),
                  (0, o.addEvent)(e, "mouseenter", this.initObjMouseWheel),
                  (0, o.addEvent)(e, "mousemove", n),
                  (0, o.addEvent)(
                    this.scrollbar,
                    "mouseenter",
                    this.initScrollBarMouseWheel
                  ),
                  (0, o.addEvent)(
                    this.scrollbar,
                    "mouseleave",
                    this.destroyScrollBarMouseWheel
                  ),
                  this.options.scrollElements &&
                    (0, i.each)(this.options.scrollElements, function (e, _) {
                      (0, o.addEvent)(_, s.browserFeatures.wheelEvent, t);
                    }),
                  (0, o.addEvent)(
                    this.scrollbar,
                    "mouseover",
                    this.contOver.bind(this)
                  ),
                  (0, o.addEvent)(
                    this.scrollbar,
                    "mouseout",
                    this.contOut.bind(this)
                  ),
                  (0, o.addEvent)(
                    this.scrollbar,
                    "mousedown",
                    this.contDown.bind(this)
                  ),
                  s.browser.safari_mobile)
                ) {
                  var a = function (e) {
                      this.isHorizontal
                        ? (cur.touchX = e.touches[0].pageX)
                        : (cur.touchY = e.touches[0].pageY);
                    }.bind(this),
                    h = function (_) {
                      return (
                        this.isHorizontal
                          ? ((cur.touchDiff =
                              cur.touchX - (cur.touchX = _.touches[0].pageX)),
                            (e.scrollLeft += cur.touchDiff),
                            e.scrollLeft > 0 &&
                              !1 !== this.shown &&
                              this.update(!0))
                          : ((cur.touchDiff =
                              cur.touchY - (cur.touchY = _.touches[0].pageY)),
                            (e.scrollTop += cur.touchDiff),
                            e.scrollTop > 0 &&
                              !1 !== this.shown &&
                              this.update(!0)),
                        (0, o.cancelEvent)(_)
                      );
                    }.bind(this),
                    u = function () {
                      cur.animateInt = setInterval(
                        function () {
                          (cur.touchDiff = 0.9 * cur.touchDiff),
                            cur.touchDiff < 1 && cur.touchDiff > -1
                              ? clearInterval(cur.animateInt)
                              : ((e[self.scrollProp] += cur.touchDiff),
                                this.update(!0));
                        }.bind(this),
                        0
                      );
                    }.bind(this);
                  (0, o.addEvent)(e, "touchstart", a),
                    (0, o.addEvent)(e, "touchmove", h),
                    (0, o.addEvent)(e, "touchend", u),
                    this.destroyList.push(function () {
                      (0, o.removeEvent)(e, "touchstart", a),
                        (0, o.removeEvent)(e, "touchmove", h),
                        (0, o.removeEvent)(e, "touchend", u);
                    });
                }
                (0, o.addEvent)(this.inner, "mousedown", this.mouseDown),
                  this.options.nokeys
                    ? (this.onkeydown = r)
                    : (0, o.addEvent)(window, "keydown", r),
                  this.destroyList.push(
                    function () {
                      (0, o.removeEvent)(e, s.browserFeatures.wheelEvent, t),
                        this.options.scrollElements &&
                          (0, i.each)(
                            this.options.scrollElements,
                            function (e, _) {
                              (0, o.removeEvent)(
                                _,
                                s.browserFeatures.wheelEvent,
                                t
                              );
                            }
                          ),
                        (0, o.removeEvent)(
                          this.inner,
                          "mousedown",
                          this.mouseDown
                        ),
                        (0, o.removeEvent)(window, "keydown", r),
                        (0, o.removeEvent)(e, "mousemove", n),
                        (0, l.re)(this.scrollbar);
                    }.bind(this)
                  ),
                  this.isHorizontal ||
                    (this.contHeight() <= this.scrollHeight
                      ? (0, l.hide)(this.bottomShadowDiv)
                      : (this.bottomShadow = !0)),
                  this.options.onInit && this.options.onInit(),
                  (this.inited = !0),
                  this.update(!0),
                  this.options.global ||
                    cur.destroy.push(this.destroy.bind(this));
              }.bind(this),
              0
            );
        }
        u.prototype = {
          wheel: function (e) {
            if (!this.disabled) {
              e || (e = window.event);
              var _ = 0,
                t = this.obj[this.scrollProp],
                o =
                  void 0 !== e.deltaMode
                    ? e.deltaMode
                    : "MozMousePixelScroll" == e.type
                    ? 0
                    : 1;
              if (
                ("wheel" == e.type
                  ? (_ = -(this.isHorizontal ? e.deltaX : e.deltaY))
                  : void 0 !== e.wheelDeltaX && void 0 !== e.wheelDeltaY
                  ? ((_ =
                      (1 / 40) *
                      (this.isHorizontal ? e.wheelDeltaX : e.wheelDeltaY)),
                    s.browser.mac && s.browser.opera && (_ *= 0.1))
                  : void 0 !== e.wheelDelta
                  ? (_ = (1 / 40) * e.wheelDelta)
                  : e.detail &&
                    e.axis === (this.isHorizontal ? 1 : 2) &&
                    (_ = -e.detail),
                (_ = 1 * _ * (1 == o ? 15 : 2 == o ? 450 : 1)))
              )
                return (
                  (this.obj[this.scrollProp] -= _),
                  (0, i.isFunction)(this.options.onScroll) &&
                    this.options.onScroll(_, this),
                  t != this.obj[this.scrollProp] &&
                    !1 !== this.shown &&
                    (this.update(!0),
                    (0, l.addClass)(this.inner, "scrollbar_hovered"),
                    clearTimeout(this.moveTimeout),
                    (this.moveTimeout = setTimeout(
                      function () {
                        (0, l.removeClass)(this.inner, "scrollbar_hovered");
                      }.bind(this),
                      300
                    ))),
                  !!(
                    (!this.shown && !this.options.forceCancelEvent) ||
                    (this.isHorizontal && t == this.obj[this.scrollProp])
                  ) && void 0
                );
            }
          },
          setOptions: function (e) {
            (0, i.extend)(this.options, e);
          },
          widthUpdated: function () {
            var e,
              _ = (0, l.getSize)(this.obj);
            return (
              (e = this.isHorizontal
                ? {
                    marginLeft: this.options.top + "px",
                    marginTop: _[1] + 3 + "px",
                    width: _[0] - this.options.top - this.options.bottom + "px",
                  }
                : {
                    marginTop: this.options.top + "px",
                    marginLeft: this.options.nomargin
                      ? 0
                      : _[0] - (this.options.mlDiff || 7) + "px",
                    height:
                      _[1] - this.options.top - this.options.bottom + "px",
                  }),
              this.options.nomargin &&
                (void 0 !== this.options.right && "auto" !== this.options.right
                  ? ((e.right = this.options.right), (e.left = "auto"))
                  : void 0 !== this.options.left &&
                    ((e.right = "auto"), (e.left = this.options.left))),
              (this.scrollWidth = _[0]),
              (this.scrollHeight = _[1]),
              (this.scrollbarSize =
                _[this.isHorizontal ? 0 : 1] -
                this.options.top -
                this.options.bottom),
              (0, l.setStyle)(this.scrollbar, e),
              setTimeout(
                function () {
                  (0, l.removeClass)(this.scrollbar, "no_transition");
                }.bind(this)
              ),
              _
            );
          },
          contOver: function () {
            (this.isOut = !1),
              this.shown &&
                (0, l.addClass)(this.scrollbar, "scrollbar_c_overed");
          },
          contOut: function () {
            (this.isOut = !0),
              this.isDown ||
                (0, l.removeClass)(this.scrollbar, "scrollbar_c_overed");
          },
          contDown: function (e) {
            if ((e || (e = window.event), this.isHorizontal)) {
              var _ = e.offsetX - this.innerWidth / 2 + 5,
                t = this.scrollbarSize - this.innerWidth;
              this.obj.scrollLeft = Math.floor(
                (this.contWidth() - this.scrollWidth) * Math.min(1, _ / t)
              );
            } else {
              var i = e.offsetY - this.innerHeight / 2 + 5,
                o = this.scrollbarSize - this.innerHeight;
              this.obj.scrollTop = Math.floor(
                (this.contHeight() - this.scrollHeight) * Math.min(1, i / o)
              );
            }
            this.update(!0), this.mouseDown(e);
          },
          hide: function () {
            (0, l.hide)(
              this.topShadowDiv,
              this.bottomShadowDiv,
              this.scrollbar
            ),
              (this.hidden = !0);
          },
          show: function () {
            (0, l.show)(
              this.topShadowDiv,
              this.bottomShadowDiv,
              this.scrollbar
            ),
              (this.hidden = !1);
          },
          disable: function () {
            this.hide(), this[this.scrollProp](0), (this.disabled = !0);
          },
          enable: function () {
            this.show(), this.update(), (this.disabled = !1);
          },
          getScrollHeight: function () {
            return this.scrollHeight;
          },
          scrollTop: function (e) {
            if (void 0 === e) return this.obj.scrollTop;
            (this.obj.scrollTop = parseInt(e)), this.update(!1, !0);
          },
          scrollBottom: function (e) {
            if (void 0 === e)
              return this.contHeight() - this.scrollHeight - this.obj.scrollTop;
            (this.obj.scrollTop = this.contHeight(!0) - this.scrollHeight - e),
              this.update(!0, !0);
          },
          smoothScroll: function (e, _, t) {
            var i = this.obj.scrollTop + e;
            void 0 === t && (t = 300);
            var o = this;
            new r.Fx.Base(
              { scrollTop: this.obj.scrollTop },
              {
                transition: r.Fx.Transitions.easeOutCubic,
                onStep: function (e) {
                  (o.obj.scrollTop = e.scrollTop), o.update(!0);
                },
                duration: t,
                onComplete: function () {
                  _ && _(scroll);
                },
              }
            ).start({ scrollTop: this.obj.scrollTop }, { scrollTop: i });
          },
          scrollLeft: function (e) {
            (this.obj.scrollLeft = parseInt(e)), this.update(!1, !0);
          },
          destroy: function () {
            (0, i.each)(this.destroyList || [], function (e, _) {
              _();
            });
          },
          contHeight: function () {
            return Math.round(this.options.contHeight || this.obj.scrollHeight);
          },
          contWidth: function () {
            return Math.round(this.options.contWidth || this.obj.scrollWidth);
          },
          val: function (e) {
            return (
              e && ((this.obj[this.scrollProp] = e), this.update(!0, !0)),
              this.obj[this.scrollProp]
            );
          },
          update: function (e, _) {
            if (this.inited && !this.hidden) {
              if (!e && (this.isHorizontal ? this.moveX : this.moveY))
                return !0;
              var t, o;
              if (
                (_ &&
                  ((t = (0, l.getSize)(this.obj)),
                  this.isHorizontal
                    ? ((this.scrollWidth = t[0]),
                      (t = Math.round(
                        this.scrollWidth -
                          this.options.top -
                          this.options.bottom
                      )),
                      this.scrollbarSize !== t &&
                        (this.scrollbar.style.width = t + "px"))
                    : ((this.scrollHeight = t[1]),
                      (t = Math.round(
                        this.scrollHeight -
                          this.options.top -
                          this.options.bottom
                      )),
                      this.scrollbarSize !== t &&
                        (this.scrollbar.style.height = t + "px")),
                  (this.scrollbarSize = t)),
                this.isHorizontal
                  ? (t = this.contWidth()) <= Math.round(this.scrollWidth)
                  : (t = this.contHeight()) <= Math.round(this.scrollHeight))
              )
                return (
                  (0, l.hide)(
                    this.inner,
                    this.bottomShadowDiv,
                    this.topShadowDiv
                  ),
                  (this.scrollbar.style.pointerEvents = "none"),
                  (this.topShadow = this.bottomShadow = this.shown = !1),
                  (0, i.isFunction)(this.options.more) &&
                    t - this.obj[this.scrollProp] <
                      2 * this[this.scrollDimensionProp] &&
                    this.options.more(this),
                  void (this[this.scrollProp + "Last"] =
                    this.obj[this.scrollProp])
                );
              this.shown ||
                ((0, l.show)(this.inner),
                (this.scrollbar.style.pointerEvents = ""),
                (this.shown = !0));
              var s = this.val();
              (0, i.isFunction)(this.options.scrollChange) &&
                this.options.scrollChange(s),
                (this.lastProgress = Math.min(
                  1,
                  s /
                    (t -
                      (this.isHorizontal
                        ? this.scrollWidth
                        : this.scrollHeight))
                )),
                this.lastProgress > 0 != this.topShadow &&
                  ((this.topShadow = !this.topShadow) ? l.show : l.hide)(
                    this.topShadowDiv
                  ),
                this.lastProgress < 1 != this.bottomShadow &&
                  ((this.bottomShadow = !this.bottomShadow) ? l.show : l.hide)(
                    this.bottomShadowDiv
                  ),
                this.isHorizontal
                  ? ((o = Math.max(
                      40,
                      Math.floor((this.scrollbarSize * this.scrollWidth) / t)
                    )) !== this.innerWidth &&
                      (this.inner.style.width = (this.innerWidth = o) + "px"),
                    (this.inner.style.marginLeft =
                      (this.scrollbarSize - o - 2 * this.options.padding) *
                        this.lastProgress +
                      this.options.padding +
                      "px"))
                  : ((o = Math.max(
                      40,
                      Math.floor((this.scrollbarSize * this.scrollHeight) / t)
                    )) !== this.innerHeight &&
                      (this.inner.style.height = (this.innerHeight = o) + "px"),
                    (this.inner.style.marginTop =
                      (this.scrollbarSize - o - 2 * this.options.padding) *
                        this.lastProgress +
                      this.options.padding +
                      "px")),
                (0, i.isFunction)(this.options.more) &&
                  t - this.obj[this.scrollProp] <
                    2 * this[this.scrollDimensionProp] &&
                  this.options.more(this),
                (this[this.scrollProp + "Last"] = this.obj[this.scrollProp]);
            }
          },
          restore: function () {
            this.obj[this.scrollProp] = this[this.scrollProp + "Last"];
          },
        };
        const c = u;
      },
      217700: (e, _, t) => {
        t.d(_, { default: () => a });
        var i = t(315544),
          o = t(786067),
          s = t(695724),
          l = t(49535),
          r = t(609720);
        function n(e, _) {
          if (this.constructor != n)
            throw new Error("Slider was called without 'new' operator");
          if (!e) throw new Error("No element was provided for Slider");
          (e = (0, i.ge)(e)),
            (this.options = _ || { size: 1 }),
            (this.options.backValue = this.options.backValue || 0);
          var t = 100 * this.options.backValue,
            o = `<div class="slider_slide"><div class="slider_loading_bar" style="opacity: 0; display: none;"></div> ${
              this.options.withBackLine
                ? '<div class="slider_back" style="width:' + t + '%"></div>'
                : ""
            } <div class="slider_amount"></div> <div class="slider_handler"></div> </div>`;
          this._el = (0, i.ce)("div", {
            innerHTML: o,
            className: "slider",
            id: e.getAttribute("id") || "",
          });
          for (
            var a = e.classList || [], h = this, d = 0, u = a.length;
            d < u;
            d++
          )
            (0, i.addClass)(this._el, a[d]);
          (0, s.each)(this._el.attributes, function (e, _) {
            ("id" == _.name && "class" == _.name) ||
              h._el.setAttribute(_.name, _.value);
          }),
            e.parentNode.replaceChild(this._el, e),
            (0, i.data)(this._el, "slider", this),
            (this._amountEl = (0, i.geByClass1)("slider_amount", this._el)),
            (this._handlerEl = (0, i.geByClass1)("slider_handler", this._el)),
            (this._slideEl = (0, i.geByClass1)("slider_slide", this._el)),
            (this._backEl = (0, i.geByClass1)("slider_back", this._el)),
            (this._progressEl = (0, i.geByClass1)(
              "slider_loading_bar",
              this._el
            )),
            this.options.color &&
              ((0, i.setStyle)(this._amountEl, {
                backgroundColor: this.options.color,
              }),
              (0, i.setStyle)(this._handlerEl, {
                backgroundColor: this.options.color,
              })),
            this.options.handlerColor &&
              (0, i.setStyle)(this._handlerEl, {
                backgroundColor: this.options.handlerColor,
              }),
            this.options.backColor &&
              (0, i.setStyle)(this._slideEl, {
                backgroundColor: this.options.backColor,
              }),
            (0, i.addClass)(this._el, "slider_size_" + this.options.size),
            this.options.debounce &&
              (this._onValueChangeDebounced = (0, r.debounce)(
                this._onValueChange,
                this.options.debounce
              )),
            _.formatHint &&
              ((0, l.addEvent)(
                this._el,
                "mousemove",
                (this._ev_onMouseOver = this._onMouseOver.bind(this))
              ),
              (0, l.addEvent)(
                this._el,
                "mouseleave",
                (this._ev_onMouseLeave = this._onMouseLeave.bind(this))
              )),
            (0, l.addEvent)(
              this._el,
              "mousedown",
              (this._ev_onMouseDown = this._onMouseDown.bind(this))
            ),
            this.setValue(
              this.options.value || 0,
              !this.options.fireChangeEventOnInit,
              !1
            ),
            this.setBackValue(this.options.backValue);
        }
        (n.prototype.toggleAdState = function (e) {
          (this._adState = !!e),
            (0, i.toggleClass)(this._el, "slider_ad_mode", !!e);
        }),
          (n.prototype.toggleAdMarker = function (e) {
            e = !!e;
            var _ = (0, i.geByClass1)("slider_ad_marker", this._el);
            if (e) {
              if (!_) {
                var t =
                  "onmouseover=\"showTooltip(this, {text: '" +
                  (0, o.getLang)("global_audio_ad") +
                  "', black: 1, shift: [16, 9, 10]})\"";
                (_ = (0, i.se)(
                  '<div class="slider_ad_marker_wrap" ' +
                    t +
                    '><div class="slider_ad_marker"></div></div>'
                )),
                  (0, i.domPN)(this._slideEl).insertBefore(_, this._slideEl),
                  delete this._width,
                  (0, i.addClass)(this._el, "slider_ad_marker_shown");
              }
            } else
              (0, i.re)(_),
                delete this._width,
                (0, i.removeClass)(this._el, "slider_ad_marker_shown");
          }),
          (n.prototype.showAdMarker = function (e) {
            var _ = (0, i.se)('<div class="slider_ad_marker"></div>');
            (0, i.domPN)(this._slideEl).insertBefore(_, this._slideEl),
              delete this._width,
              (0, i.addClass)(this._el, "slider_ad_marker_shown");
          }),
          (n.prototype.isAdMode = function () {
            return (0, i.hasClass)(this._el, "slider_ad_mode");
          }),
          (n.prototype.setBlocked = function (e) {
            (this.blocked = e), (0, i.addClass)(this._el, "slider_blocked");
          }),
          (n.prototype.getBlocked = function () {
            return this.blocked;
          }),
          (n.prototype.isBlocked = function () {
            return this.isAdMode() || this.getBlocked();
          }),
          (n.prototype.toggleLoading = function (e) {
            (e = !!e),
              (0, i.toggle)(this._progressEl, e),
              (0, i.setStyle)(this._progressEl, "opacity", e ? 1 : 0);
          }),
          (n.prototype.destroy = function (e) {
            this.options.formatHint &&
              ((0, l.removeEvent)(this._el, "mousemove", this._ev_onMouseOver),
              (0, l.removeEvent)(this._el, "mouseleave", this._ev_onMouseLeave),
              (0, l.removeEvent)(this._el, "mousedown", this._ev_onMouseDown)),
              (0, i.re)(this._el),
              (0, i.re)(this._currHintEl);
          }),
          (n.prototype._updateHint = function (e, _) {
            this._currHintEl ||
              ((this._currHintEl = (0, i.se)(
                '<div class="slider_hint" id="slider_hint"></div>'
              )),
              this.options.hintClass &&
                (0, i.addClass)(this._currHintEl, this.options.hintClass),
              this._el.appendChild(this._currHintEl)),
              (this._width = this._width || (0, i.getSize)(this._slideEl)[0]);
            var t = this._getPos(),
              o = Math.round(e.pageX - t[0]),
              s = this._width;
            if ((o = _ ? Math.min(Math.max(0, o), s) : o) >= 0 && o <= s) {
              var l = o / s;
              this._currHintEl.innerHTML = this.options.formatHint
                ? this.options.formatHint.call(this, l)
                : l;
              var r = (0, i.getSize)(this._currHintEl);
              (0, i.setStyle)(this._currHintEl, {
                left: this._slideEl.offsetLeft + o - r[0] / 2,
                top: this._slideEl.offsetTop - r[1] - 10,
              }),
                !_ && this._toggleHint(!0);
            } else !_ && this._toggleHint(!1);
            this.options.formatHint || this._toggleHint(!1);
          }),
          (n.prototype._toggleHint = function (e) {
            this.isAdMode() && (e = !1),
              (0, i.toggleClass)(this._currHintEl, "visible", e);
          }),
          (n.prototype._onMouseOver = function (e) {
            n._currenSliderDrag ||
              (0, i.hasClass)(this._el, "active") ||
              this._updateHint(e);
          }),
          (n.prototype._onMouseLeave = function (e) {
            (0, i.hasClass)(this._el, "active") || this._toggleHint(!1);
          }),
          (n.prototype._onMouseDown = function (e) {
            0 == e.button &&
              (delete cur._sliderMouseUpNowEl,
              this._adState ||
                this.getBlocked() ||
                ((0, l.addEvent)(
                  window,
                  "mousemove",
                  (this._ev_onMouseMove = this._onMouseMove.bind(this))
                ),
                (0, l.addEvent)(
                  window,
                  "mouseup",
                  (this._ev_onMouseUp = this._onMouseUp.bind(this))
                ),
                (this._width = (0, i.getSize)(this._slideEl)[0]),
                this._onMouseMove(e),
                (n._currenSliderDrag = this),
                (0, i.addClass)(this._el, "active"),
                (0, l.cancelEvent)(e)));
          }),
          (n.prototype._onMouseUp = function (e) {
            (cur._sliderMouseUpNowEl = this._el),
              (0, l.removeEvent)(window, "mousemove", this._ev_onMouseMove),
              (0, l.removeEvent)(window, "mouseup", this._ev_onMouseUp),
              clearTimeout(this._debounceto),
              this._onValueChange(),
              (0, i.removeClass)(this._el, "active"),
              (n._currenSliderDrag = !1),
              this._toggleHint(!1),
              this.options.onEndDragging &&
                this.options.onEndDragging(this._currValue);
          }),
          (n.prototype._onMouseMove = function (e) {
            var _ = this._getPos(),
              t = Math.max(e.pageX, _[0]);
            (t = Math.min(t, _[0] + this._width)),
              (t -= _[0]),
              this.setValue(t / this._width, !0, !0),
              this._onValueChangeDebounced
                ? this._onValueChangeDebounced()
                : this._onValueChange(),
              this._toggleHint(!0),
              this._updateHint(e, !0),
              (0, l.cancelEvent)(e);
          }),
          (n.prototype._getPos = function () {
            return (this._slidePos = (0, i.getXY)(this._slideEl));
          }),
          (n.LOGFBASE = 35),
          (n.prototype._logf = function (e) {
            if (!this.options.log) return e;
            var _ = n.LOGFBASE;
            return (Math.pow(_, e) - 1) / (_ - 1);
          }),
          (n.prototype._unlogf = function (e) {
            if (!this.options.log) return e;
            var _,
              t,
              i = n.LOGFBASE;
            return (_ = i), (t = 1 + e * (i - 1)), Math.log(t) / Math.log(_);
          }),
          (n.prototype.setValue = function (e, _, t) {
            if (!(0, i.hasClass)(this._el, "active") || t) {
              var o = t ? this._logf(e) : e;
              if (this._currValue != o) {
                this._currValue = o;
                var s = t ? e : this._unlogf(e);
                (s = 100 * s + "%"),
                  (0, i.setStyle)(this._amountEl, { width: s }),
                  (0, i.setStyle)(this._handlerEl, { left: s }),
                  !_ && this._onValueChange();
              }
            }
          }),
          (n.prototype.setBackValue = function (e) {
            (0, i.toggleClass)(
              this._backEl,
              "slider_back_transition",
              e > this._backValue
            ),
              (this._backValue = e);
            var _ = 100 * e + "%";
            (0, i.setStyle)(this._backEl, { width: _ });
          }),
          (n.prototype._onValueChange = function () {
            (this._lastValue = this._lastValue || 0),
              this._lastValue != this._currValue &&
                ((this._lastValue = this._currValue),
                this.options.onChange &&
                  this.options.onChange(this._currValue));
          });
        const a = n;
      },
      149685: (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(530522),
          core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(66108),
          core_js_modules_es6_array_slice__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(850110),
          core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(579665),
          core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(95767),
          core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(991181),
          core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(856997),
          core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(296253),
          core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(83276),
          core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(59357),
          _web_legacy_ui_ui_actions_menu_utils__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(891260),
          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(49535),
          _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(315544),
          _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(695724),
          _web_lib_scroll__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(803834),
          _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(787481),
          _web_legacy_ui_ui_scroll__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(832230);
        function _slicedToArray(e, _) {
          return (
            _arrayWithHoles(e) ||
            _iterableToArrayLimit(e, _) ||
            _unsupportedIterableToArray(e, _) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _unsupportedIterableToArray(e, _) {
          if (e) {
            if ("string" == typeof e) return _arrayLikeToArray(e, _);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? _arrayLikeToArray(e, _)
                : void 0
            );
          }
        }
        function _arrayLikeToArray(e, _) {
          (null == _ || _ > e.length) && (_ = e.length);
          for (var t = 0, i = new Array(_); t < _; t++) i[t] = e[t];
          return i;
        }
        function _iterableToArrayLimit(e, _) {
          var t =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != t) {
            var i,
              o,
              s = [],
              l = !0,
              r = !1;
            try {
              for (
                t = t.call(e);
                !(l = (i = t.next()).done) &&
                (s.push(i.value), !_ || s.length !== _);
                l = !0
              );
            } catch (e) {
              (r = !0), (o = e);
            } finally {
              try {
                l || null == t.return || t.return();
              } finally {
                if (r) throw o;
              }
            }
            return s;
          }
        }
        function _arrayWithHoles(e) {
          if (Array.isArray(e)) return e;
        }
        var uiActionsMenu = {
          keyToggle: function (e, _) {
            if (
              !(0,
              _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__.checkKeyboardEvent)(
                _
              )
            )
              return !1;
            var t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.domClosest)(
              "_ui_menu_wrap",
              e
            );
            t &&
              uiActionsMenu.toggle(
                t,
                !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.hasClass)(
                  t,
                  "shown"
                )
              );
          },
          keyboardToggle: function (e, _, t) {
            if (
              !(0,
              _web_legacy_ui_ui_actions_menu_utils__WEBPACK_IMPORTED_MODULE_10__.isKeyboardActivationEvent)(
                _
              )
            )
              return !1;
            var i,
              o = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.domClosest)(
                "_ui_menu_wrap",
                e
              );
            (o &&
              uiActionsMenu.toggle(
                o,
                !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.hasClass)(
                  o,
                  "shown"
                )
              ),
            null == t ? void 0 : t.preventKeyboardClickEvent) &&
              (null == _ ||
                null === (i = _.preventDefault) ||
                void 0 === i ||
                i.call(_));
          },
          toggle: function toggle(el, s, options) {
            var dummyMenu = (0,
            _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(el, "dummyMenu");
            dummyMenu && (el = dummyMenu),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.toggleClass)(
                el,
                "shown",
                s
              );
            var onhide = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.attr)(
              el,
              "onHide"
            );
            if (
              onhide &&
              !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.hasClass)(
                el,
                "shown"
              )
            )
              try {
                eval(onhide);
              } catch (e) {
                (0,
                _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_15__.logEvalError)(
                  e,
                  onhide
                );
              }
            if (options && options.onToggle) {
              var script = options.onToggle.replace("{isShow}", "" + s);
              try {
                eval(script);
              } catch (e) {
                (0,
                _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_15__.logEvalError)(
                  e,
                  script
                );
              }
            }
          },
          show: function (e, _, t) {
            var i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
              e,
              "hidetimer"
            );
            i &&
              (clearTimeout(i),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                e,
                "hidetimer",
                0
              ));
            var o = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
              e,
              "origMenu"
            );
            if (
              (o &&
                (i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                  o,
                  "hidetimer"
                )) &&
                (clearTimeout(i),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                  e,
                  "hidetimer",
                  0
                )),
              t && t.delay)
            ) {
              cur.uiActionsMenuShowTimeout &&
                clearTimeout(cur.uiActionsMenuShowTimeout);
              var s = t.delay;
              return (
                delete t.delay,
                void (cur.uiActionsMenuShowTimeout = setTimeout(
                  uiActionsMenu.show.pbind(e, _, t),
                  s
                ))
              );
            }
            if (
              (cur.uiActionsMenuShowTimeout &&
                (clearTimeout(cur.uiActionsMenuShowTimeout),
                delete cur.uiActionsMenuShowTimeout),
              t && t.appendParentCls)
            ) {
              var l,
                r,
                n = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.geByClass1)(
                  "_ui_menu",
                  e
                );
              if (n) {
                (r = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.domClosest)(
                  t.appendParentCls,
                  n
                )),
                  (l = (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.domClosest)(
                    "_ui_menu_wrap",
                    e
                  ));
                var a = Object.entries(t.wrapAttrs || {})
                    .reduce((e, _) => {
                      var t = _slicedToArray(_, 2),
                        i = t[0],
                        o = t[1];
                      return e.push(`${i}="${o}"`), e;
                    }, [])
                    .join(" "),
                  h = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.se)(
                    `<div class="${l.className} ui_actions_menu_dummy_wrap" onmouseover="uiActionsMenu.show(this);" onmouseout="uiActionsMenu.hide(this);" ${a}></div>`
                  );
                if (
                  (h.appendChild(n),
                  r.appendChild(h),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                    e,
                    "dummyMenu",
                    h
                  ),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                    h,
                    "origMenu",
                    e
                  ),
                  (e = h),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                    n,
                    "top",
                    (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_13__.intval)(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getStyle)(
                        n,
                        "top"
                      )
                    )
                  ),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                    n,
                    "left",
                    (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_13__.intval)(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getStyle)(
                        n,
                        "left"
                      )
                    )
                  ),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                    n,
                    "right",
                    (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_13__.intval)(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getStyle)(
                        n,
                        "right"
                      )
                    )
                  ),
                  t.processHoverCls)
                ) {
                  var d = (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.domClosest)(
                    t.processHoverCls,
                    l
                  );
                  (0,
                  _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__.addEvent)(
                    e,
                    "mouseover",
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.addClass.pbind(
                      d,
                      "hover"
                    )
                  ),
                    (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_11__.addEvent)(
                      e,
                      "mouseout",
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.removeClass.pbind(
                        d,
                        "hover"
                      )
                    );
                }
              } else
                e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                  e,
                  "dummyMenu"
                );
              var u = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                e,
                "origMenu"
              );
              (n = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.geByClass1)(
                "_ui_menu",
                e
              )),
                (l = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.domClosest)(
                  "_ui_menu_wrap",
                  u
                )),
                (r = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.domClosest)(
                  t.appendParentCls,
                  n
                )),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.setStyle)(n, {
                  display: "block",
                });
              var c = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getXY)(r),
                E = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getXY)(l),
                b = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                  n,
                  "top"
                ),
                p = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                  n,
                  "left"
                ),
                m = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                  n,
                  "right"
                ),
                g = { top: E[1] - c[1] + b };
              m
                ? (g.right =
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getSize)(
                      r
                    )[0] +
                    c[0] -
                    E[0] -
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getSize)(
                      l
                    )[0] +
                    m)
                : (g.left = E[0] - c[0] + p),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.setStyle)(n, g);
            }
            var v = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.geByClass1)(
              "_ui_menu",
              e
            );
            if (
              t &&
              t.autopos &&
              v &&
              !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.hasClass)(
                e,
                "shown"
              )
            ) {
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.removeClass)(
                e,
                "ui_actions_menu_left"
              );
              var w = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getXY)(
                  e
                )[1],
                M = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getSize)(
                  e
                )[1],
                P = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getSize)(
                  v
                )[1],
                O = t.dy || 10,
                D = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getXY)(v)[0];
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.removeClass)(
                e,
                "ui_actions_menu_top"
              ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.addClass)(
                  e,
                  "no_transition"
                ),
                w + M + O + P >
                  (0,
                  _web_lib_scroll__WEBPACK_IMPORTED_MODULE_14__.scrollGetY)() +
                    (window.lastWindowHeight || 0) &&
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.addClass)(
                    e,
                    "ui_actions_menu_top"
                  ),
                w - O - P <
                  (0,
                  _web_lib_scroll__WEBPACK_IMPORTED_MODULE_14__.scrollGetY)() +
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.getSize)(
                      "page_header_wrap"
                    )[1] &&
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.removeClass)(
                    e,
                    "ui_actions_menu_top"
                  ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.toggleClass)(
                  e,
                  "ui_actions_menu_left",
                  D < 0
                ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.removeClass)(
                  e,
                  "no_transition"
                );
            }
            t &&
              t.hasOwnProperty("alwaysTop") &&
              v &&
              !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.hasClass)(
                e,
                "shown"
              ) &&
              ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.removeClass)(
                e,
                "ui_actions_menu_top"
              ),
              t.alwaysTop &&
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.addClass)(
                  e,
                  "ui_actions_menu_top"
                )),
              t &&
                t.scroll &&
                t.maxHeight &&
                ((v.style.maxHeight =
                  ((0,
                  _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_13__.intval)(
                    t.maxHeight
                  ) || 200) + "px"),
                v.__uiScroll__ ||
                  new _web_legacy_ui_ui_scroll__WEBPACK_IMPORTED_MODULE_16__.default(
                    v
                  )),
              uiActionsMenu.toggle(e, !0, t);
          },
          hide: function (e, _, t) {
            cur.uiActionsMenuShowTimeout &&
              (clearTimeout(cur.uiActionsMenuShowTimeout),
              delete cur.uiActionsMenuShowTimeout);
            var i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
              e,
              "hidedelay"
            );
            i
              ? (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                  e,
                  "hidedelay",
                  !1
                )
              : (i = 200),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                e,
                "hidetimer"
              ) ||
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                  e,
                  "hidetimer",
                  setTimeout(function () {
                    uiActionsMenu.toggle(e, !1, t),
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
                        e,
                        "hidetimer",
                        0
                      );
                  }, i)
                );
          },
          hideDelay: function (e, _) {
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_12__.data)(
              e,
              "hidedelay",
              _
            );
          },
        };
        const __WEBPACK_DEFAULT_EXPORT__ = uiActionsMenu;
      },
      938141: (e, _, t) => {
        t.d(_, { default: () => a });
        t(751876),
          t(283946),
          t(850110),
          t(976142),
          t(59357),
          t(21466),
          t(898837);
        var i = t(315544),
          o = t(695724),
          s = t(49535),
          l = t(27171),
          r = t(149685),
          n = t(786067);
        const a = class {
          constructor(e, _, t, r) {
            0 === t.length && (t = {}),
              (r = r || {}),
              (this.indexer = new vkIndexer(
                _,
                r.getName
                  ? r.getName
                  : function (e) {
                      var _ = e[1];
                      if (r.nameClass) {
                        var t = (0, i.se)(_);
                        t &&
                          (_ =
                            (0, i.val)((0, i.geByClass1)(r.nameClass, t)) || _);
                      }
                      return _;
                    }
              )),
              (this.owners = _),
              (this.tpl = r.tpl),
              (this.rsTpl = r.rsTpl),
              (this.idIndex = r.idIndex || 0),
              (this.selected = t),
              (this.getUnsorted = r.getUnsorted),
              (this.unsortedIndex = r.unsortedIndex || 0),
              (this.box = e),
              (this.filter = r.filter),
              r.onTabUpdate && (this.onTabUpdate = r.onTabUpdate),
              r.onListClick && (this.onListClick = r.onListClick);
            var a = this;
            e.setButtons(
              (0, n.getLang)("global_save"),
              function (t) {
                var i = {},
                  s = [],
                  l = [];
                (0, o.each)(_, function () {
                  (!a.invertedSelection && a.selected[this[a.idIndex]]) ||
                  (a.invertedSelection && !a.selected[this[a.idIndex]])
                    ? ((i[this[a.idIndex]] = this), s.push(this[a.idIndex]))
                    : l.push(this[a.idIndex]);
                }),
                  !1 !== cur.onOListSave(s, l, i, r.ret || {}, t) &&
                    e.hide(200);
              },
              (0, n.getLang)("global_cancel")
            ),
              r.box_options && e.setOptions(r.box_options),
              (this.scrollNode = (0, i.geByClass1)(
                "privacy_olist",
                e.bodyNode
              )),
              (this.moreEl = (0, i.geByClass1)("olist_more", e.bodyNode, "a")),
              (this.olistEl = (0, i.geByClass1)("olist", e.bodyNode, "div")),
              (this.olistFilter = (0, i.ge)("olist_filter_actions")),
              (this.sel = r.sel || 0),
              (this.tabs = (0, i.geByClass1)("ui_tabs", e.bodyNode)),
              (this.noSelMsg =
                r.noSelMsg || (0, n.getLang)("friends_no_user_selected")),
              (this.invertedSelection = !1);
            var h = (0, i.geByClass1)("olist_tab_sel", this.tabs);
            this.selCnt = (0, o.intval)(
              (0, i.val)((0, i.geByClass1)("ui_tab_count", h))
            );
            var d = this.filter
              ? this.filter
              : (this.filter = (0, i.ge)("olist_filter"));
            setTimeout(() => (0, i.elfocus)(d), 100),
              this.moreEl &&
                ((0, i.isVisible)(this.moreEl)
                  ? (this.moreEl.onclick = function (e) {
                      return a.renderList("", 60), (0, s.cancelEvent)(e);
                    })
                  : ((0, i.re)(this.moreEl), (0, i.show)(this.moreEl))),
              (0, s.addEvent)(
                this.olistEl,
                "click",
                this.onMouseEvent.bind(this)
              ),
              (0, s.addEvent)(
                this.scrollNode,
                "scroll",
                this.onScroll.bind(this)
              );
            var u = a.sel ? (a.sel > 0 ? "sel" : "unsel") : "all",
              c = (0, i.geByClass1)("olist_tab_" + u, a.tabs);
            (c = c && (0, i.geByClass1)("ui_tab", c)),
              (cur.onOListTabChange = function (e, _) {
                e && l.default.switchTab(e),
                  void 0 === _ && (_ = void 0 === a.selPrev ? 0 : a.selPrev),
                  (a.selPrev = a.sel),
                  (a.sel = _),
                  a.renderList((0, i.val)(d), 0, _),
                  setTimeout(() => (0, i.elfocus)(d), 100);
              })(c, a.sel),
              (cur.onOlistChange = a.renderList.bind(this)),
              (cur.onOlistSelect = a.onOlistSelect.bind(this)),
              (cur.onOlistFilters = a.onOlistFilters.bind(this));
          }
          onScroll() {
            var e = (0, i.domPN)(this.box.bodyNode),
              _ = this.moreEl,
              t = this.scrollNode,
              o = t.scrollHeight,
              s = t.scrollTop,
              l = t.offsetHeight || t.clientHeight;
            (0, i.toggleClass)(e, "olist_topsh", s > 0),
              (0, i.toggleClass)(e, "olist_botsh", s + l < o),
              _ && _.offsetTop && _.onclick && s + l + 200 >= o && _.onclick();
          }
          onMouseEvent(e) {
            var _ = e.originalTarget || e.target;
            if (
              ((0, i.hasClass)(_, "olist_item_wrap") ||
                (_ = (0, i.gpeByClass)("olist_item_wrap", _)),
              _ && _ != bodyNode)
            ) {
              if ((0, i.hasClass)(_, "olist_item_loading"))
                return (0, s.cancelEvent)(e);
              if ((0, s.checkEvent)(e)) return !0;
              this.box.changed = !0;
              var t = _.id.match(/-?\d+/)[0],
                o =
                  (!this.invertedSelection && this.selected[t]) ||
                  (this.invertedSelection && !this.selected[t]);
              if (
                ((0, i.toggleClass)(_, "olist_item_wrap_on", !o),
                (this.selected[t] = !o || this.invertedSelection),
                (this.selCnt += !o || this.invertedSelection ? 1 : -1),
                this.selTabUpdate(),
                this.onListClick && this.onListClick(_, o),
                this.scrollNode.scrollTop < 50)
              ) {
                var l = this.filter;
                setTimeout(() => (0, i.elfocus)(l), 100);
              }
              return (0, s.cancelEvent)(e);
            }
          }
          onOlistSelect(e, _) {
            r.default.toggle(this.olistFilter, !1);
            var t = this.selCnt,
              i = this.selected;
            switch (
              (_.ctrlKey || _.metaKey || _.shiftKey || ((i = {}), (t = 0)), e)
            ) {
              case "all":
                (i = {}),
                  (t = 0),
                  (0, o.each)(this.owners, function () {
                    (i[this[0]] = 1), t++;
                  });
                break;
              case "none":
                (i = {}), (t = 0);
                break;
              case "people":
                (0, o.each)(this.owners, function () {
                  this[0] > 0 && !i[this[0]] && ((i[this[0]] = 1), t++);
                });
                break;
              case "groups":
                (0, o.each)(this.owners, function () {
                  this[0] < 0 && !i[this[0]] && ((i[this[0]] = 1), t++);
                });
                break;
              default:
                var s = 1 << (0, o.intval)(e.replace("list", ""));
                (0, o.each)(this.owners, function () {
                  this[4] & s && !i[this[0]] && ((i[this[0]] = 1), t++);
                });
            }
            return (
              (this.selCnt = t),
              (this.selected = i),
              this.selTabUpdate(),
              this.renderList(),
              !1
            );
          }
          onOlistFilters(e, _) {
            r.default.show(e, _);
            var t = (_) => {
              r.default.toggle(e, !1),
                (0, s.removeEvent)(document, "mousedown", t);
            };
            return (
              (0, s.addEvent)(document, "mousedown", t),
              _ && (0, s.cancelEvent)(_)
            );
          }
          selTabUpdate() {
            if (this.isAlbumEdit) this.onTabUpdate && this.onTabUpdate();
            else if (this.tabs) {
              var e = this.selCnt,
                _ = this.owners.length - e,
                t = (0, i.geByClass1)("olist_tab_sel", this.tabs),
                o = (0, i.geByClass1)("olist_tab_unsel", this.tabs);
              (0, i.val)((0, i.geByClass1)("ui_tab_count", t), e || ""),
                (0, i.val)((0, i.geByClass1)("ui_tab_count", o), _ || ""),
                this.onTabUpdate && this.onTabUpdate();
            }
          }
          renderList(e, _, t) {
            (_ = _ || 0), (t = t || this.sel);
            var l = _ ? 60 : 120,
              r = this;
            e && (e = e.replace(/\u2013|\u2014/g, "-"));
            var a = e ? this.indexer.search(e) : this.owners;
            r.unsortedIndex == t && r.getUnsorted && (a = r.getUnsorted(a));
            var h = this.selected,
              d = r.invertedSelection ? !(this.sel < 0) : this.sel < 0,
              u = r.tpl;
            if (t && r.unsortedIndex != t) {
              var c = [];
              (0, o.each)(a, function () {
                var e = this[r.idIndex];
                if (
                  ((!d && h[e]) || (d && !h[e])) &&
                  (c.push(this), c.length > _ + l)
                )
                  return !1;
              }),
                (a = c);
            }
            var E = a.length;
            a = a.slice(_, _ + l);
            var b,
              p = [];
            if (e) {
              e = (0, o.clean)(e);
              var m = (0, o.escapeRE)(e),
                g = (0, n.parseLatin)(e);
              null != g && (m = m + "|" + (0, o.escapeRE)(g)),
                (b = new RegExp(
                  "(?![^&;]+;)(?!<[^<>]*)((\\(*)(" +
                    m +
                    "))(?![^<>]*>)(?![^&;]+;)",
                  "gi"
                ));
            }
            var v = r.rsTpl
              ? r.rsTpl
              : function (e, _, t, i, o) {
                  var s = (!t && i[e[0]]) || (t && !i[e[0]]),
                    l = e[1];
                  if (_) {
                    l = -1 == _.indexOf(" ") ? l.split(" ") : [l];
                    var r = "";
                    for (var n in l)
                      l.hasOwnProperty(n) &&
                        (r +=
                          (n > 0 ? " " : "") +
                          l[n].replace(o, "$2<em>$3</em>"));
                    l = r;
                  }
                  return {
                    id: e[0],
                    name: l,
                    photo: e[2],
                    classname: s ? " olist_item_wrap_on" : "",
                    link: e[3] || (e[0] > 0 ? "id" + e[0] : "club" + -e[0]),
                  };
                };
            (0, o.each)(a, function () {
              p.push((0, i.rs)(u, v(this, e, r.invertedSelection, h, b)));
            }),
              _ ||
                p.length ||
                p.push(
                  '<div class="no_rows">' +
                    (e
                      ? (0, n.getLang)("global_search_not_found").replace(
                          "{search}",
                          e
                        )
                      : r.noSelMsg) +
                    "</div>"
                ),
              (0, i.re)(this.moreEl),
              (p = p.join(" ")),
              _
                ? this.olistEl.appendChild((0, i.cf)(p))
                : (0, i.val)(this.olistEl, p),
              E > _ + l &&
                (this.olistEl.appendChild(this.moreEl),
                (this.moreEl.onclick = function (t) {
                  return r.renderList(e, _ + l), (0, s.cancelEvent)(t);
                })),
              r.box && r.box.scroll && r.box.scroll.update(!1, !0),
              r.onScroll();
          }
        };
      },
      364122: (e, _, t) => {
        t.d(_, { default: () => r });
        var i = t(315544),
          o = t(803834),
          s = t(635676),
          l = {
            showSaved: function (e) {
              var _ = (0, i.ge)(e),
                t = _ && (0, i.gpeByClass)("page_block", _),
                o = t && (0, i.geByClass1)("page_block_saved", t);
              if (_ && t && o) {
                var r = s.animate.pbind(
                  o,
                  { opacity: 1 },
                  200,
                  s.animate.pbind(o, { opacity: 0 }, 2e3)
                );
                l.scrollToStart(t, r);
              }
            },
            scrollToStart: function (e, _) {
              var t = (0, i.getXY)(e)[1];
              (0, o.scrollGetY)() > t - 60
                ? ((0, o.scrollToY)(t - 60, 200), _ && setTimeout(_, 200))
                : _ && _();
            },
          };
        const r = l;
      },
      791713: (e, _, t) => {
        t.d(_, { default: () => h });
        var i = t(726271),
          o = t(786067),
          s = t(850167),
          l = t(315544),
          r = t(695724),
          n = t(49535),
          a = {
            over: function (e, _, t) {
              if (!i.browser.mobile && !vk.widget) {
                (0, l.hasClass)(e, "ui_zoom_wrap") ||
                  (0, l.addClass)(e, "ui_zoom_wrap"),
                  (cur.bigphCache = cur.bigphCache || {}),
                  (t = t || {});
                var s = (0, l.domFC)(e),
                  n = cur.bigphCache[_];
                if ("A" != s.tagName || !(0, l.hasClass)(s, "ui_zoom_outer")) {
                  var h =
                    n && n._id ? "/photo" + n._id + "?all=1" : "/albums" + _;
                  ((s = e.insertBefore(
                    (0, l.se)(
                      `<a class="ui_zoom_outer" href="${h}" aria-label="${(0,
                      r.clean)(
                        (0, o.getLang)("global_photo_full_size")
                      )}"><div class="ui_zoom_inner"><div class="ui_zoom"><div class="ui_zoom_icon"></div></div></div></a>`
                    ),
                    (0, l.domFC)(e)
                  ))._uid = _),
                    s.offsetHeight,
                    (0, l.addClass)(s, "ui_zoom_added");
                }
                (s.onclick = a.click.pbind(e, _, t)),
                  t.fastLoad && a.load(e, _, t);
              }
            },
            click: function (e, _, t, i) {
              if (!i || !1 === (0, n.checkEvent)(i)) {
                t.fastLoad || a.load(e, _, t);
                var o = cur.bigphCache[_];
                if (o)
                  return "load" == o || "show" == o
                    ? ((cur.bigphCache[_] = "show"), (0, n.cancelEvent)(i))
                    : (t.onBeforeShow && t.onBeforeShow(),
                      (0, r.extend)(
                        o,
                        (0, r.extend)(
                          { jumpTo: { z: "albums" + _ } },
                          t.showOpts || {}
                        )
                      ),
                      (0, s.showPhoto)(o._id, "album" + _ + "_0/rev", o, i));
              }
            },
            load: function (e, _, t) {
              var i = (0, l.domFC)(e);
              void 0 === cur.bigphCache[_] &&
                ((cur.bigphCache[_] = "load"),
                ajax.post(
                  "al_photos.php",
                  { act: "fast_get_photo", oid: _ },
                  {
                    onDone: function (o) {
                      if (!o)
                        return (
                          (e.onmouseover = function () {}), void (0, l.re)(i)
                        );
                      var s = "show" == cur.bigphCache[_];
                      (cur.bigphCache[_] = o),
                        (i.href = "/photo" + o._id + "?all=1"),
                        s && a.click(e, _, t);
                    },
                    onFail: function () {
                      return (
                        (e.onmouseover = function () {}),
                        (0, l.re)((0, l.domFC)(e)),
                        !0
                      );
                    },
                  }
                ));
            },
          };
        const h = a;
      },
      293498: (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(175115),
          _shared_lib_browser__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(726271),
          _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(695724),
          _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(315544),
          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(49535),
          _web_lib_ui__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(386409),
          _web_lib_fx__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(635676),
          _web_lib_layout_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(635429),
          _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(787481);
        function _extends() {
          return (
            (_extends =
              Object.assign ||
              function (e) {
                for (var _ = 1; _ < arguments.length; _++) {
                  var t = arguments[_];
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
              }),
            _extends.apply(this, arguments)
          );
        }
        var DATA_ATTR_SUBMENU_NAVIGABLE = "data-uirmenu-submenu-navigable",
          uiRightMenu = {
            initMenu: function (e, _) {
              if (
                !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                  e,
                  "ui_rmenu_sliding"
                )
              ) {
                var t = (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                    "ui_rmenu_item",
                    e
                  ),
                  i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                    "ui_rmenu_item_sel",
                    e
                  ),
                  o = i || t,
                  s = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getSize)(
                    o
                  )[1],
                  l =
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getXY)(o)[1] -
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getXY)(e)[1],
                  r = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                    "_ui_rmenu_slider",
                    e
                  );
                if (!_) {
                  var n = { height: s, top: i ? l : 0 };
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.setStyle)(r, n),
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.addClass)(
                      e,
                      "ui_rmenu_sliding"
                    );
                }
              }
            },
            go: function (e, _, t) {
              var i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
              if (
                (0,
                _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.checkEvent)(_)
              )
                return !0;
              var o = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.gpeByClass)(
                  "ui_rmenu",
                  e
                ),
                s = i.navOptions,
                l = i.ignoreSelected,
                r = void 0 !== l && l,
                n = i.switchMenuOptions;
              if (
                !r &&
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                  "ui_rmenu_item_sel",
                  o
                ) == e
              )
                return !1;
              if (
                (uiRightMenu.switchMenu(e, void 0, n),
                uiRightMenu.showProgress(e),
                !1 === t)
              )
                return !1;
              var a = {
                  onDone: function () {
                    for (
                      var _, t = arguments.length, i = new Array(t), o = 0;
                      o < t;
                      o++
                    )
                      i[o] = arguments[o];
                    null == s ||
                      null === (_ = s.onDone) ||
                      void 0 === _ ||
                      _.call(s, ...i),
                      uiRightMenu.hideProgress(e);
                  },
                },
                h = _extends({}, s || void 0, {}, a);
              return nav.go(t || e, _, h);
            },
            switchMenu: function (e, _) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.gpeByClass)(
                  "ui_rmenu",
                  e
                ),
                o = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                  "ui_rmenu_item_sel",
                  i
                ),
                s = t.preventSubmenuExpand,
                l = void 0 !== s && s;
              if (e == o && !_) return !1;
              uiRightMenu.initMenu(i);
              var r = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getSize)(
                  e
                )[1],
                n =
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getXY)(e)[1] -
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getXY)(i)[1],
                a = [],
                h = [];
              if (
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                  i,
                  "_ui_rmenu_auto_expand"
                )
              ) {
                var d = (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass)(
                    "_ui_rmenu_sublist",
                    i
                  ),
                  u = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                    e,
                    "_ui_rmenu_subitem"
                  )
                    ? (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.gpeByClass)(
                        "_ui_rmenu_sublist",
                        e
                      )
                    : !!(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domNS)(e),
                        "_ui_rmenu_sublist"
                      ) &&
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domNS)(e);
                (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.each)(
                  d,
                  function () {
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)(
                      this
                    ) &&
                      this !== u &&
                      (a.push(this),
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hide)(
                        this
                      ));
                  }
                ),
                  l ||
                    !u ||
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)(
                      u
                    ) ||
                    (h.push(u),
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.show)(u)),
                  (n = e.offsetTop),
                  (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.each)(
                    a,
                    function () {
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.show)(this);
                    }
                  ),
                  (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.each)(
                    h,
                    function () {
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hide)(this);
                    }
                  );
              }
              var c = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                  "_ui_rmenu_slider",
                  i
                ),
                E = (0,
                _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.intval)(
                  c.style.top
                ),
                b = { height: r };
              return (
                _shared_lib_browser__WEBPACK_IMPORTED_MODULE_1__.browser
                  .msie_edge
                  ? (b.marginTop = n - E + "px")
                  : (b[cssTransformProp] = "translateY(" + (n - E) + "px)"),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.setStyle)(c, b),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass)(
                  o,
                  "ui_rmenu_item_sel"
                ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.addClass)(
                  e,
                  "ui_rmenu_item_sel"
                ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                  i,
                  "_ui_rmenu_auto_expand"
                )
                  ? (0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.each)(
                      a.concat(h),
                      function () {
                        uiRightMenu.toggleSubmenu(this);
                      }
                    )
                  : (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                      e,
                      "_ui_rmenu_subitem"
                    ) &&
                    !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domPN)(e)
                    ) &&
                    uiRightMenu.toggleSubmenu(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domPN)(e)
                    ),
                !1
              );
            },
            fixScroller: function (e) {
              var _ = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.gpeByClass)(
                "ui_rmenu",
                e
              );
              if (
                _ &&
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)(e)
              ) {
                var t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                    _,
                    "ui_rmenu_sliding"
                  ),
                  i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getSize)(
                    e
                  )[1];
                t && uiRightMenu.hideSliding(_);
                var o = e.offsetTop,
                  s = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                    "_ui_rmenu_slider",
                    _
                  ),
                  l = (0,
                  _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_2__.intval)(
                    s.style.top
                  ),
                  r = { height: i };
                _shared_lib_browser__WEBPACK_IMPORTED_MODULE_1__.browser
                  .msie_edge
                  ? (r.marginTop = o - l + "px")
                  : (r[cssTransformProp] = "translateY(" + (o - l) + "px)"),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.setStyle)(s, r),
                  e.offsetLeft,
                  t && uiRightMenu.showSliding(_);
              }
            },
            unselectAll: function (e) {
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass)(
                e,
                "ui_rmenu_sliding"
              ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass)(
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                    "ui_rmenu_item_sel",
                    e
                  ),
                  "ui_rmenu_item_sel"
                );
            },
            hideSliding: function (e) {
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass)(
                e,
                "ui_rmenu_sliding"
              );
            },
            showSliding: function (e) {
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.addClass)(
                e,
                "ui_rmenu_sliding"
              );
            },
            showProgress: function (e) {
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                e,
                "ui_rmenu"
              ) ||
                (e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.gpeByClass)(
                  "ui_rmenu",
                  e
                ));
              var _ = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                "ui_rmenu_loading_item",
                e
              );
              _ &&
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass)(
                  _,
                  "ui_rmenu_loading_item"
                );
              var t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                "ui_rmenu_item_sel",
                e
              );
              (0, _web_lib_ui__WEBPACK_IMPORTED_MODULE_5__.hideProgress)(e),
                (0, _web_lib_ui__WEBPACK_IMPORTED_MODULE_5__.showProgress)(
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domFC)(t)
                    .parentNode,
                  "",
                  "",
                  !1
                ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.addClass)(
                  e,
                  "ui_rmenu_loading"
                ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.addClass)(
                  t,
                  "ui_rmenu_loading_item"
                );
            },
            hideProgress: function (e) {
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass)(
                e,
                "ui_rmenu"
              ) ||
                (e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.gpeByClass)(
                  "ui_rmenu",
                  e
                )),
                (0, _web_lib_ui__WEBPACK_IMPORTED_MODULE_5__.hideProgress)(e);
              var _ = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.gpeByClass)(
                "ui_rmenu",
                e
              );
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass)(
                e,
                "ui_rmenu_loading"
              ),
                uiRightMenu.hideSliding(_);
              var t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                "ui_rmenu_loading_item",
                _
              );
              t &&
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass)(
                  t,
                  "ui_rmenu_loading_item"
                );
            },
            toggleSubmenu: function toggleSubmenu(name, ref, event) {
              if (
                !event ||
                !(0,
                _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.checkEvent)(
                  event
                )
              ) {
                var isSubmenuNavigatedResult = toggleSubmenuNavigable(ref);
                if (isSubmenuNavigatedResult.navigated)
                  return isSubmenuNavigatedResult.navGoResult;
                var menu = (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.gpeByClass)(
                    "ui_rmenu",
                    ref
                  ),
                  el,
                  submenu;
                if (
                  ("string" == typeof name
                    ? (submenu = (0,
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                        "_ui_rmenu_" + name + "_list",
                        menu
                      ))
                    : ((submenu = name),
                      (name = submenu.getAttribute("data-sublist-id"))),
                  (el = (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1)(
                    "_ui_rmenu_" + name + "_toggle",
                    menu
                  )),
                  !submenu)
                )
                  return !1;
                void 0 !== ref && uiRightMenu.hideSliding(menu),
                  el &&
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
                      el,
                      "ui_rmenu_item_expanded",
                      !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)(
                        submenu
                      )
                    ),
                  (0, _web_lib_fx__WEBPACK_IMPORTED_MODULE_6__.slideToggle)(
                    submenu,
                    submenu &&
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getSize)(
                        submenu
                      )[1]
                      ? 100
                      : 0
                  ),
                  setTimeout(
                    _web_lib_layout_utils__WEBPACK_IMPORTED_MODULE_7__.updateNarrow,
                    100
                  );
                var onToggle = (0,
                _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domData)(
                  el,
                  "on-toggle"
                );
                return (
                  onToggle &&
                    setTimeout(function () {
                      try {
                        eval(onToggle);
                      } catch (e) {
                        (0,
                        _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_8__.logEvalError)(e, onToggle);
                      }
                    }, 150),
                  !1
                );
              }
            },
          };
        function isItemSubmenuNavigable(e) {
          var _;
          return null == e || null === (_ = e.hasAttribute) || void 0 === _
            ? void 0
            : _.call(e, DATA_ATTR_SUBMENU_NAVIGABLE);
        }
        function toggleSubmenuNavigable(e) {
          if (
            isItemSubmenuNavigable(e) &&
            !e.classList.contains("ui_rmenu_item_sel")
          )
            return {
              navigated: !0,
              navGoResult: uiRightMenu.go(e, void 0, void 0, {
                switchMenuOptions: { preventSubmenuExpand: !0 },
              }),
            };
          return { navigated: !1 };
        }
        const __WEBPACK_DEFAULT_EXPORT__ = uiRightMenu;
      },
      832230: (e, _, t) => {
        t.r(_), t.d(_, { default: () => d });
        t(59357), t(751876);
        var i = t(726271),
          o = t(40906),
          s = t(695724),
          l = t(315544),
          r = t(49535),
          n = t(635676),
          a = t(679787);
        class h {
          constructor(e, _) {
            if (!(e = (0, a.getScrollElement)(e)))
              throw new Error("uiScroll container is undefined");
            e.__uiScroll__ && e.__uiScroll__.destroy(),
              (this.options = (0, s.extend)(
                {
                  global: !1,
                  native: !1,
                  theme: "default",
                  reversed: !1,
                  autoresize: !0,
                  preserveEdgeBelow: !1,
                  barMinHeight: 30,
                  preserveEdgeBelowThreshold: 20,
                  stopScrollPropagation: !0,
                  stopScrollPropagationAlways: !1,
                  minContentHeight: 0,
                  onmoreThreshold: null,
                  hidden: !1,
                  shadows: !1,
                  scrollElements: [],
                  onresize: null,
                  onscroll: null,
                  onscrollstart: null,
                  onscrollstop: null,
                  ondrag: null,
                  ondragstart: null,
                  ondragstop: null,
                  onupdate: null,
                  onmore: null,
                  noForceReFlow: !1,
                },
                _
              )),
              this.options.native && (this.options.shadows = !1),
              i.browser.mobile && (this.options.stopScrollPropagation = !1),
              (0, o.isArray)(this.options.scrollElements) ||
                (this.options.scrollElements = []),
              (this.removeEvents = []),
              (this.removeElements = []),
              (this.dragging = !1),
              (this.dragged = !1),
              (this.released = !0),
              (this.noMore = !1),
              (this.dragY = null),
              (this.dragScroll = null),
              (this.shadowTop = !1),
              (this.shadowBottom = !1),
              (this.unnecessary = !1),
              (this.disabled = !1),
              (this.stopped = !0),
              (this.stoppedTimeout = null),
              (this.fixSizeDefault = null),
              (this.animation = null),
              (this.barOuterHeight = null),
              (this.barInnerHeight = null),
              (this.currentFrame = null),
              (this.blockerScrollTop = 500),
              (this.emitter = new EventEmitter()),
              (0, s.isFunction)(this.options.onresize) &&
                this.emitter.addListener("resize", this.options.onresize),
              (0, s.isFunction)(this.options.onscroll) &&
                this.emitter.addListener("scroll", this.options.onscroll),
              (0, s.isFunction)(this.options.onscrollstart) &&
                this.emitter.addListener(
                  "scrollstart",
                  this.options.onscrollstart
                ),
              (0, s.isFunction)(this.options.onscrollstop) &&
                this.emitter.addListener(
                  "scrollstop",
                  this.options.onscrollstop
                ),
              (0, s.isFunction)(this.options.ondrag) &&
                this.emitter.addListener("drag", this.options.ondrag),
              (0, s.isFunction)(this.options.ondragstart) &&
                this.emitter.addListener("dragstart", this.options.ondragstart),
              (0, s.isFunction)(this.options.ondragstop) &&
                this.emitter.addListener("dragstop", this.options.ondragstop),
              (0, s.isFunction)(this.options.onupdate) &&
                this.emitter.addListener("update", this.options.onupdate),
              (0, s.isFunction)(this.options.onmore) &&
                this.emitter.addListener("more", this.options.onmore),
              (this.el = {
                container: e,
                overflow: (0, l.ce)("div", { className: "ui_scroll_overflow" }),
                outer: (0, l.ce)(
                  "div",
                  { className: "ui_scroll_outer" },
                  {
                    margin: this.options.stopScrollPropagation
                      ? this.blockerScrollTop + "px 0"
                      : void 0,
                  }
                ),
                inner: (0, l.ce)("div", {
                  className: "ui_scroll_inner tt_noappend",
                }),
                shadowTop: (0, l.ce)("div", {
                  className: "ui_scroll_shadow_top",
                }),
                shadowBottom: (0, l.ce)("div", {
                  className: "ui_scroll_shadow_bottom",
                }),
                content: (0, l.ce)("div", {
                  className: "ui_scroll_content clear_fix",
                }),
                barContainer: (0, l.ce)("div", {
                  className: "ui_scroll_bar_container",
                }),
                barOuter: (0, l.ce)("div", {
                  className: "ui_scroll_bar_outer",
                }),
                barInner: (0, l.ce)("div", {
                  className: "ui_scroll_bar_inner",
                }),
              }),
              (0, l.data)(this.el.container, "ui-scroll", this);
            var t = (0, l.cf)(),
              n = ["ui_scroll_container"];
            for (
              (0, s.each)(
                (0, o.isArray)(this.options.theme)
                  ? this.options.theme
                  : (0, s.trim)(this.options.theme + "").split(/\s+/),
                function (e, _) {
                  _ && n.push("ui_scroll_" + _ + "_theme");
                }
              ),
                (0, l.addClass)(this.el.container, n.join(" ")),
                this.options.hidden &&
                  (0, l.addClass)(this.el.container, "ui_scroll_hidden");
              this.el.container.firstChild;

            )
              this.el.content.appendChild(this.el.container.firstChild);
            if (
              (this.el.outer.appendChild(this.el.inner),
              this.el.inner.appendChild(this.el.content),
              this.options.stopScrollPropagation
                ? ((this.el.blocker = (0, l.ce)("div", {
                    className: "ui_scroll_blocker",
                  })),
                  this.addEvent(
                    this.el.blocker,
                    "scroll",
                    this.fixBlocker.bind(this),
                    !0
                  ),
                  this.el.blocker.appendChild(this.el.outer),
                  this.el.overflow.appendChild(this.el.blocker))
                : this.el.overflow.appendChild(this.el.outer),
              t.appendChild(this.el.overflow),
              this.options.native
                ? (0, l.addClass)(this.el.container, "ui_scroll_native")
                : (this.el.barOuter.appendChild(this.el.barInner),
                  this.el.barContainer.appendChild(this.el.barOuter),
                  t.appendChild(this.el.barContainer),
                  this.options.shadows &&
                    (this.el.overflow.appendChild(this.el.shadowTop),
                    this.el.overflow.appendChild(this.el.shadowBottom)),
                  i.browser.mobile ||
                    this.options.scrollElements.push(this.el.barContainer)),
              this.options.autoresize)
            ) {
              var d = (0, a.addResizeSensor)(
                  this.el.inner,
                  this.resize.bind(this, !0)
                ),
                u = (0, a.addResizeSensor)(
                  this.el.overflow,
                  this.resize.bind(this, !1)
                );
              this.removeElements.push(d[0]),
                this.removeElements.push(u[0]),
                (this.startResizeListening = function () {
                  d[1](), u[1]();
                });
            }
            this.removeElements.push(this.el.overflow, this.el.barContainer),
              this.el.container.appendChild(t),
              this.options.reversed &&
                (this.el.outer.scrollTop = this.el.outer.scrollHeight),
              (this.el.container.__uiScroll__ = this.api =
                {
                  container: this.el.container,
                  scroller: this.el.outer,
                  content: this.el.content,
                  emitter: this.emitter,
                  ondragstart: this.dragstart.bind(this),
                  ondragstop: this.dragstop.bind(this),
                  ondrag: this.drag.bind(this),
                  destroy: this.destroy.bind(this),
                  disable: this.disable.bind(this, !0),
                  enable: this.disable.bind(this, !1),
                  scrollTop: this.scrollTop.bind(this, !0),
                  scrollBottom: this.scrollBottom.bind(this, !0),
                  scrollBy: this.scrollBy.bind(this),
                  scrollIntoView: this.scrollIntoView.bind(this, !0),
                  update: this.init.bind(this),
                  updateAbove: this.updateAbove.bind(this),
                  updateBelow: this.updateBelow.bind(this),
                  data: {
                    scrollTop: null,
                    scrollBottom: null,
                    scrollHeight: null,
                    viewportHeight: null,
                  },
                }),
              this.init();
            var c =
              "onwheel" in this.el.outer
                ? "wheel"
                : void 0 !== document.onmousewheel
                ? "mousewheel"
                : i.browser.mozilla
                ? "MozMousePixelScroll"
                : "DOMMouseScroll";
            return (
              this.addEvent(
                this.el.container,
                c,
                function (e) {
                  this.animation && this.animation.stop(),
                    !this.disabled &&
                      this.options.stopScrollPropagation &&
                      (this.unnecessary
                        ? this.options.stopScrollPropagationAlways &&
                          (0, r.cancelEvent)(e)
                        : this.isScrollEventUnused(e)
                        ? (0, r.cancelEvent)(e)
                        : (0, r.stopEvent)(e));
                }.bind(this),
                !this.options.stopScrollPropagation
              ),
              this.options.native ||
                this.addEvent(
                  this.el.barContainer,
                  "mousedown",
                  this.dragstart.bind(this)
                ),
              (0, s.each)(
                this.options.scrollElements,
                function (e, _) {
                  this.addEvent(
                    _,
                    c,
                    function (e) {
                      this.disabled ||
                        this.unnecessary ||
                        (this.scrollBy(h.scrollEventDelta(e)),
                        (!this.options.stopScrollPropagation &&
                          this.isScrollEventUnused(e)) ||
                          (0, r.cancelEvent)(e));
                    }.bind(this)
                  );
                }.bind(this)
              ),
              this.options.reversed &&
                this.addEvent(
                  this.el.container,
                  "mousedown touchstart pointerdown",
                  function (e) {
                    (this.released = !1), (this.noMore = !0);
                    var _ = this.addEvent(
                      document,
                      "mouseup contextmenu touchend pointerup",
                      function (e) {
                        (0, r.removeEvent)(
                          document,
                          "mouseup contextmenu touchend pointerup",
                          _
                        ),
                          (this.released = !0),
                          this.noMore &&
                            this.stopped &&
                            !this.dragging &&
                            ((this.noMore = !1), this.more());
                      }.bind(this)
                    );
                  }.bind(this)
                ),
              this.addEvent(
                this.el.outer,
                "scroll",
                function () {
                  this.update() &&
                    (this.stopped
                      ? ((this.stopped = !1), this.emitEvent("scrollstart"))
                      : this.options.native ||
                        !1 !== this.stopped ||
                        ((this.stopped = 0),
                        (0, l.addClass)(
                          this.el.container,
                          "ui_scroll_scrolled"
                        )),
                    this.emitEvent("scroll"),
                    this.stoppedTimeout && clearTimeout(this.stoppedTimeout),
                    (this.stoppedTimeout = setTimeout(
                      function () {
                        this.stopped ||
                          ((this.stopped = !0),
                          this.options.native ||
                            (0, l.removeClass)(
                              this.el.container,
                              "ui_scroll_scrolled"
                            ),
                          this.emitEvent("scrollstop"),
                          this.noMore &&
                            this.released &&
                            !this.dragging &&
                            ((this.noMore = !1), this.more()));
                      }.bind(this),
                      200
                    )));
                }.bind(this)
              ),
              this.api
            );
          }
          init() {
            if (
              (this.options.stopScrollPropagation && this.fixBlocker(),
              !this.inited)
            ) {
              if (!this.el.container.scrollWidth || this.disabled) return;
              this.fixSize(!0),
                this.options.autoresize && this.startResizeListening(),
                this.options.global ||
                  cur.destroy.push(this.destroy.bind(this)),
                (this.inited = !0);
            }
            return this.update(!0), this.api;
          }
          addEvent(e, _, t, i) {
            return (
              this.removeEvents.push([e, _, t]),
              (0, r.addEvent)(
                e,
                _,
                t,
                void 0,
                void 0,
                i ? { passive: !0 } : void 0
              ),
              t
            );
          }
          destroy() {
            if (
              ((this.disabled = !0),
              this.fixSize(),
              this.animation && this.animation.stop(),
              this.moreTimeout && clearTimeout(this.moreTimeout),
              this.dragstopHandler &&
                (0, r.removeEvent)(
                  document,
                  "mouseup contextmenu",
                  this.dragstopHandler
                ),
              this.dragHandler &&
                (0, r.removeEvent)(document, "mousemove", this.dragHandler),
              (0, s.each)(this.removeEvents, function (e, _) {
                r.removeEvent.apply(null, _);
              }),
              this.el.overflow.parentNode == this.el.container)
            ) {
              for (var e = (0, l.cf)(); this.el.content.firstChild; )
                e.appendChild(this.el.content.firstChild);
              this.el.container.appendChild(e);
            }
            return (
              (0, l.removeData)(this.el.container, "ui-scroll"),
              (this.el.container.className =
                this.el.container.className.replace(/\bui_scroll_.+?\b/g, " ")),
              (0, s.each)(this.removeElements, function (e, _) {
                (0, l.re)(_);
              }),
              (this.el.container.scrollTop = this.api.data.scrollTop),
              delete this.el.container.__uiScroll__,
              this.api
            );
          }
          updateAbove(e) {
            if ((0, s.isFunction)(e)) {
              this.animation && this.animation.stop();
              var _ =
                this.el.outer.scrollHeight -
                this.el.outer.scrollTop -
                this.el.overflow.offsetHeight;
              e(),
                (this.el.outer.scrollTop =
                  this.el.outer.scrollHeight -
                  this.el.overflow.offsetHeight -
                  _);
            }
            return this.api;
          }
          updateBelow(e) {
            if ((0, s.isFunction)(e)) {
              this.animation && this.animation.stop();
              var _ =
                this.options.preserveEdgeBelow &&
                this.api.data.scrollBottom <=
                  this.options.preserveEdgeBelowThreshold;
              e(), _ && this.scrollBottom(!1);
            }
            return this.api;
          }
          fixBlocker() {
            i.browser.chrome &&
              !this.options.noForceReFlow &&
              this.forceReFlow(),
              (this.el.blocker.scrollTop = this.blockerScrollTop);
          }
          forceReFlow() {
            (this.el.blocker.style.display = "inline-block"),
              this.el.blocker.offsetHeight,
              (this.el.blocker.style.display = "");
          }
          fixSize(e) {
            this.options.native ||
              (e &&
                null == this.fixSizeDefault &&
                (this.fixSizeDefault = this.el.container.style.width),
              (0, l.setStyle)(
                this.el.container,
                "width",
                e
                  ? (0, l.getSize)(this.el.container, !0)[0] ||
                      this.fixSizeDefault ||
                      ""
                  : this.fixSizeDefault || ""
              ));
          }
          emitEvent(e) {
            this.disabled ||
              (this.inited && this.emitter.emitEvent(e, [this.api]));
          }
          static scrollEventDelta(e) {
            var _ = 0,
              t =
                void 0 !== e.deltaMode
                  ? e.deltaMode
                  : "MozMousePixelScroll" == e.type
                  ? 0
                  : 1;
            return (
              "wheel" == e.type
                ? (_ = e.deltaY)
                : void 0 !== e.wheelDeltaX && void 0 !== e.wheelDeltaY
                ? ((_ = (1 / 40) * -e.wheelDeltaY),
                  i.browser.mac && i.browser.opera && (_ *= 0.1))
                : void 0 !== e.wheelDelta
                ? (_ = (1 / 40) * -e.wheelDelta)
                : e.detail && 2 === e.axis && (_ = e.detail),
              _ * (1 == t ? 15 : 2 == t ? 450 : 1)
            );
          }
          isScrollEventUnused(e) {
            return h.scrollEventDelta(e) > 0
              ? !this.api.data.scrollBottom
              : !this.api.data.scrollTop;
          }
          resize(e) {
            if (!e && this.options.preserveEdgeBelow) {
              var _ =
                this.options.preserveEdgeBelow &&
                this.api.data.scrollBottom <=
                  this.options.preserveEdgeBelowThreshold;
              this.update(!0) &&
                (this.emitEvent("resize"),
                _ && this.scrollBottom(),
                this.options.stopScrollPropagation && !e && this.fixBlocker());
            } else
              this.update(!0) &&
                (this.options.stopScrollPropagation && !e && this.fixBlocker(),
                this.emitEvent("resize"));
          }
          disable(e) {
            return (
              (this.disabled = !!e),
              e
                ? (this.animation && this.animation.stop(), this.fixSize())
                : (this.fixSize(!0),
                  this.options.stopScrollPropagation && this.fixBlocker(),
                  this.update(!0)),
              (0, l.toggleClass)(
                this.el.container,
                "ui_scroll_disabled",
                this.disabled
              ),
              this.api
            );
          }
          dragstart(e) {
            if (!(this.disabled || this.dragging || this.options.native))
              return (
                e || (e = window.event),
                (this.dragging = !0),
                this.animation && this.animation.stop(),
                this.options.reversed && (this.noMore = !0),
                (0, r.addEvent)(
                  document,
                  "mouseup contextmenu",
                  (this.dragstartHandler = this.dragstop.bind(this))
                ),
                (0, r.addEvent)(
                  document,
                  "mousemove",
                  (this.dragHandler = this.drag.bind(this))
                ),
                (this.dragScroll = this.options.reversed
                  ? this.api.data.scrollBottom
                  : this.api.data.scrollTop),
                (this.dragY = e.screenY),
                (0, r.cancelEvent)(e),
                this.emitEvent("dragstart"),
                this.api
              );
          }
          dragstop(e) {
            if (!this.disabled && this.dragging && !this.options.native) {
              if (
                (e || (e = window.event),
                (this.dragging = !1),
                this.dragstopHandler &&
                  (0, r.removeEvent)(
                    document,
                    "mouseup contextmenu",
                    this.dragstopHandler
                  ),
                this.dragHandler &&
                  (0, r.removeEvent)(document, "mousemove", this.dragHandler),
                (0, l.setStyle)(bodyNode, "cursor", ""),
                (0, l.removeClass)(this.el.container, "ui_scroll_dragging"),
                this.dragged)
              )
                this.noMore && ((this.noMore = !1), this.more());
              else {
                this.options.reversed && (this.noMore = !0);
                var _ =
                  ((e.pageY -
                    (0, l.getXY)(this.el.barOuter)[1] -
                    this.barInnerHeight / 2) *
                    (Math.max(
                      this.options.minContentHeight,
                      this.api.data.scrollHeight
                    ) -
                      this.api.data.viewportHeight)) /
                  (this.barOuterHeight - this.barInnerHeight);
                this.scrollTop(
                  !1,
                  _,
                  0,
                  function () {
                    this.noMore && ((this.noMore = !1), this.more());
                  }.bind(this)
                );
              }
              return (
                (this.dragged = !1),
                e && "contextmenu" !== e.type && (0, r.cancelEvent)(e),
                this.emitEvent("dragstop"),
                this.api
              );
            }
          }
          drag(e) {
            if (!this.disabled && this.dragging && !this.options.native) {
              e || (e = window.event);
              var _ =
                (e.screenY - this.dragY) *
                (this.api.data.scrollHeight / this.el.barOuter.scrollHeight);
              return (
                (this.el.outer.scrollTop = this.options.reversed
                  ? this.el.outer.scrollHeight -
                    this.el.overflow.offsetHeight -
                    this.dragScroll +
                    _
                  : this.dragScroll + _),
                this.dragged ||
                  ((this.dragged = !0),
                  (0, l.setStyle)(bodyNode, "cursor", "pointer"),
                  (0, l.addClass)(this.el.container, "ui_scroll_dragging")),
                (0, r.cancelEvent)(e),
                this.emitEvent("drag"),
                this.api
              );
            }
          }
          scroll(e, _, t) {
            return (
              this.animation && this.animation.stop(),
              this.el.outer.scrollTop == e && this.update(!0),
              _
                ? ((_ =
                    "number" != typeof _ || !isFinite(_) || _ % 1
                      ? 300
                      : Math.abs(_)),
                  (this.animation = new n.Fx.Base(
                    { scrollTop: this.el.outer.scrollTop },
                    {
                      transition: n.Fx.Transitions.easeOutCubic,
                      onStep: function (e) {
                        this.el.outer.scrollTop = e.scrollTop;
                      }.bind(this),
                      duration: _,
                      onComplete: (0, s.isFunction)(t)
                        ? t.pbind(this.api)
                        : void 0,
                    }
                  ).start(
                    { scrollTop: this.el.outer.scrollTop },
                    { scrollTop: e }
                  )))
                : ((this.el.outer.scrollTop = e),
                  (0, s.isFunction)(t) && t(this.api)),
              this.api
            );
          }
          scrollTop(e, _, t, i) {
            if (
              (e && this.options.stopScrollPropagation && this.fixBlocker(),
              !this.disabled && !this.dragging)
            )
              return this.scroll((0, s.intval)(_), t, i);
          }
          scrollBottom(e, _, t, i) {
            if (
              (e && this.options.stopScrollPropagation && this.fixBlocker(),
              !this.disabled && !this.dragging)
            )
              return this.scroll(
                this.el.outer.scrollHeight -
                  this.el.overflow.offsetHeight -
                  (0, s.intval)(_),
                t,
                i
              );
          }
          scrollBy(e, _, t) {
            if (!this.disabled && !this.dragging)
              return this.scroll(
                this.el.outer.scrollTop + (0, s.intval)(e),
                _,
                t
              );
          }
          scrollIntoView(e, _, t, i) {
            if (
              (e && this.options.stopScrollPropagation && this.fixBlocker(),
              (_ = (0, a.getScrollElement)(_)) &&
                _.compareDocumentPosition &&
                _.compareDocumentPosition(this.el.content) &
                  Node.DOCUMENT_POSITION_CONTAINS)
            ) {
              var o = (0, l.getXY)(_)[1],
                r = (0, l.getXY)(this.el.overflow)[1],
                n = (0, l.getSize)(_)[1];
              if (
                (o <= r && o + n >= r + this.api.data.viewportHeight) ||
                (o >= r && o + n <= r + this.api.data.viewportHeight)
              )
                (0, s.isFunction)(i) &&
                  (t ? setTimeout(i.bind(this.api), 0) : i(this.api));
              else if (n > this.api.data.viewportHeight || o < r)
                this.scrollTop(
                  !1,
                  o -
                    r +
                    this.api.data.scrollTop -
                    (this.options.shadows
                      ? (0, l.getSize)(this.el.shadowTop)[1]
                      : 0),
                  t,
                  i
                );
              else {
                var h = this.options.shadows
                  ? (0, l.getSize)(this.el.shadowBottom)[1]
                  : 0;
                this.scrollTop(
                  !1,
                  o -
                    r +
                    this.api.data.scrollTop +
                    n -
                    this.api.data.viewportHeight +
                    h,
                  t,
                  i
                );
              }
            }
            return this.api;
          }
          update(e) {
            var _, t;
            this.el.container &&
              !this.el.container.updateScroll &&
              (this.el.container.updateScroll = this.update.bind(this, !1));
            var i = this.el.outer.scrollTop;
            if (
              this.inited &&
              !this.disabled &&
              ((e &&
                ((_ = this.el.inner.offsetHeight),
                this.api.data.viewportHeight !==
                  (this.api.data.viewportHeight =
                    this.el.overflow.offsetHeight) ||
                  this.api.data.scrollHeight !== _)) ||
                this.api.data.scrollTop !== i)
            ) {
              if (
                (e && (this.api.data.scrollHeight = _),
                (this.api.data.scrollTop = Math.max(
                  0,
                  Math.min(
                    this.api.data.scrollHeight - this.api.data.viewportHeight,
                    Math.max(0, i)
                  )
                )),
                (this.api.data.scrollBottom = Math.max(
                  0,
                  this.api.data.scrollHeight -
                    this.api.data.scrollTop -
                    this.api.data.viewportHeight
                )),
                !this.options.native)
              ) {
                if (
                  !(t =
                    (_ = Math.max(
                      this.options.minContentHeight,
                      this.api.data.scrollHeight
                    )) <= this.api.data.viewportHeight)
                ) {
                  var o = this.el.barOuter.offsetHeight;
                  (e || this.barOuterHeight !== o) &&
                    ((this.barOuterHeight = o),
                    (this.barInnerHeight = Math.max(
                      this.options.barMinHeight,
                      (this.barOuterHeight * this.api.data.viewportHeight) / _
                    )),
                    (this.el.barInner.style.height =
                      this.barInnerHeight + "px")),
                    (0, a.nextFrame)(() => {
                      var e =
                        ((this.barOuterHeight - this.barInnerHeight) *
                          this.api.data.scrollTop) /
                        (_ - this.api.data.viewportHeight);
                      this.el.barInner.style.transform = `translateY(${e}px)`;
                    });
                }
                this.options.shadows &&
                  (this.shadowTop != (this.api.data.scrollTop && !t) &&
                    (0, l.toggleClass)(
                      this.el.container,
                      "ui_scroll_shadow_top_visible",
                      (this.shadowTop = this.api.data.scrollTop && !t)
                    ),
                  this.shadowBottom != (this.api.data.scrollBottom && !t) &&
                    (0, l.toggleClass)(
                      this.el.container,
                      "ui_scroll_shadow_bottom_visible",
                      (this.shadowBottom = this.api.data.scrollBottom && !t)
                    )),
                  this.unnecessary !== t &&
                    ((0, l.toggleClass)(
                      this.el.container,
                      "ui_scroll_unnecessary",
                      t
                    ),
                    (this.unnecessary = t),
                    this.options.stopScrollPropagation && this.fixBlocker(),
                    t &&
                      this.barInnerHeight &&
                      this.barOuterHeight &&
                      (0, a.nextFrame)(
                        function (e) {
                          this.el.barInner.style.height =
                            (100 * this.barInnerHeight) / this.barOuterHeight +
                            "%";
                          var t =
                            ((((this.barOuterHeight - this.barInnerHeight) *
                              this.api.data.scrollTop) /
                              (_ - this.api.data.viewportHeight)) *
                              100) /
                            this.barInnerHeight;
                          this.el.barInner.style.transform = `translateY(${t}%)`;
                        }.bind(this)
                      ));
              }
              return (
                this.emitEvent("update"),
                (!this.options.reversed || i >= 0) && this.more(),
                !0
              );
            }
            return !1;
          }
          more() {
            var e = this.options.reversed
                ? this.api.data.scrollTop
                : this.api.data.scrollBottom,
              _ =
                null !== this.options.onmoreThreshold
                  ? this.options.onmoreThreshold
                  : 2 * this.api.data.viewportHeight;
            !this.noMore && e <= _ && this.emitEvent("more");
          }
        }
        h.addResizeSensor = a.addResizeSensor;
        const d = h;
      },
      428208: (e, _, t) => {
        t.d(_, { default: () => a });
        var i = t(315544),
          o = t(786067),
          s = t(695724),
          l = t(49535),
          r = t(803834),
          n = {
            init: function (e, _) {
              cur.lSTL && (0, i.re)(cur.lSTL);
              var t = ((_ = _ || {}).parent = _.parent || boxLayerWrap);
              (0, s.extend)(cur, {
                lSTLWrap: t,
                lSTL: t.appendChild(
                  (0, i.ce)("div", {
                    id: "layer_stl",
                    innerHTML: `<div id="layer_stl_bg" class="fixed"></div><div id="layer_stl_cl"></div><nobr id="layer_stl_text" class="fixed">${(0,
                    o.getLang)("global_to_top")}</nobr>`,
                    el: e.bodyNode,
                    onclick: l.cancelEvent,
                    onmousedown: n.lSTLDown,
                    sc: n.onScroll,
                  })
                ),
                lSTLText: (0, i.ge)("layer_stl_text", t),
                lSTLShown: 0,
                lSTLWas: 0,
                lSTLWasSet: 0,
                lSTLOpts: _,
              }),
                e && e.setOptions({ onShow: n.show, onHide: n.hide }),
                (e && e.scrollInited) ||
                  ((0, l.addEvent)(t, "scroll", n.onScroll),
                  e && (e.scrollInited = !0)),
                onBodyResize(),
                n.onScroll();
            },
            hide: function () {
              var e = cur.lSTLOpts;
              e &&
                e.parent &&
                ((0, l.removeEvent)(e.parent, "scroll", n.onScroll),
                (0, i.hide)(cur.lSTL),
                (cur.lSTLShown = 0),
                e.onHide && e.onHide());
            },
            show: function () {
              var e = cur.lSTLOpts;
              e &&
                e.parent &&
                ((0, l.addEvent)(e.parent, "scroll", n.onScroll),
                setTimeout(n.onScroll, 0),
                e.onShow && e.onShow());
            },
            lSTLDown: function (e) {
              if (((e = e || window.event), !(0, l.checkEvent)(e))) {
                var _ = cur.lSTLWrap;
                if (!__afterFocus) {
                  var t = 0,
                    i = _.scrollTop;
                  cur.lSTLWasSet && cur.lSTLWas
                    ? ((t = cur.lSTLWas), (cur.lSTLWas = 0))
                    : (cur.lSTLWas = i),
                    (_.scrollTop = t);
                }
                return (0, l.cancelEvent)(e);
              }
            },
            onScroll: function () {
              if (cur.lSTL) {
                var e = cur.lSTLWrap.scrollTop,
                  _ = 200,
                  t = cur.lSTLWas || e > _,
                  s = 0;
                if (
                  ((cur.lSTL.style.marginTop =
                    Math.min(
                      e,
                      boxLayer.scrollHeight - cur.lSTL.scrollHeight - 1
                    ) + "px"),
                  vk.staticheader)
                ) {
                  var l = (0, i.getSize)("page_header_wrap")[1];
                  cur.lSTLText.style.marginTop =
                    Math.max(
                      -Math.min(
                        (0, r.scrollGetY)(),
                        bodyNode.clientHeight - (window.lastWindowHeight || 0)
                      ),
                      -l
                    ) + "px";
                }
                t
                  ? (1 !== cur.lSTLShown &&
                      ((0, i.show)(cur.lSTL), (cur.lSTLShown = 1)),
                    cur.lSTLWas && e > 500 && (cur.lSTLWas = 0),
                    e > _
                      ? ((s = (e - _) / _),
                        cur.lSTLWasSet &&
                          ((cur.lSTLWasSet = 0),
                          (0, i.val)(
                            (0, i.domLC)(cur.lSTL),
                            (0, o.getLang)("global_to_top")
                          ),
                          (0, i.removeClass)((0, i.domLC)(cur.lSTL), "down")))
                      : ((s = (_ - e) / _),
                        cur.lSTLWas &&
                          (cur.lSTLWasSet ||
                            ((cur.lSTLWasSet = 1),
                            (0, i.val)((0, i.domLC)(cur.lSTL), ""),
                            (0, i.addClass)((0, i.domLC)(cur.lSTL), "down")))))
                  : 0 !== cur.lSTLShown &&
                    ((0, i.hide)(cur.lSTL), (cur.lSTLShown = 0)),
                  (0, i.setStyle)(cur.lSTL, {
                    opacity: Math.min(Math.max(s, 0), 1),
                  });
              }
            },
          };
        const a = n;
      },
      679787: (e, _, t) => {
        t.d(_, {
          nextFrame: () => a,
          getScrollElement: () => h,
          addResizeSensor: () => d,
        });
        var i,
          o = t(695724),
          s = t(315544),
          l = t(726271),
          r =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            ((e) => setTimeout(e, 1)),
          n =
            window.cancelAnimationFrame ||
            window.cancelRequestAnimationFrame ||
            window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame ||
            window.oCancelRequestAnimationFrame ||
            window.msCancelRequestAnimationFrame ||
            clearTimeout;
        function a(e) {
          i && n(i), (i = r(e));
        }
        function h(e) {
          return (0, o.isString)(e) && "_" === e[0]
            ? (0, s.geByClass1)(e)
            : (0, s.ge)(e);
        }
        function d(e, _) {
          if ((e = h(e)) && (0, o.isFunction)(_)) {
            if (
              l.browser.msie9 ||
              (l.browser.opera && l.browser.version < 13)
            ) {
              var t = !1,
                i = !1,
                r = (0, s.ce)("object", {
                  type: "text/html",
                  className: "ui_scroll_resize_object",
                  data: "about:blank",
                  onload: function () {
                    (i = !0), t && o();
                  },
                });
              function o() {
                if (!r.contentDocument) return setTimeout(o, 100);
                r.contentDocument.defaultView.removeEventListener("resize", _),
                  r.contentDocument.defaultView.addEventListener("resize", _),
                  _();
              }
              return (
                e.appendChild(r),
                (e.__resizeSensor__ = [
                  r,
                  function () {
                    (t = !0), i && o();
                  },
                ])
              );
            }
            var n = (0, s.ce)("div", { className: "ui_scroll_resize_sensor" }),
              a = (0, s.ce)("div", {
                className: "ui_scroll_resize_sensor ui_scroll_resize_expand",
              }),
              d = (0, s.ce)("div", {
                className: "ui_scroll_resize_sensor ui_scroll_resize_shrink",
              }),
              u = (0, s.ce)("div"),
              c = (0, s.ce)("div"),
              E = null;
            return (
              a.appendChild(u),
              d.appendChild(c),
              n.appendChild(a),
              n.appendChild(d),
              e.appendChild(n),
              (e.__resizeSensor__ = [
                n,
                (a.onscroll = d.onscroll =
                  function () {
                    var t = (e.offsetWidth || 1e4) + 10,
                      i = (e.offsetHeight || 1e4) + 10;
                    (u.style.width = t + "px"),
                      (u.style.height = i + "px"),
                      (a.scrollLeft = t),
                      (a.scrollTop = i),
                      (d.scrollLeft = t),
                      (d.scrollTop = i),
                      E !== (E = t + " " + i) && _();
                  }),
              ])
            );
          }
        }
      },
      664054: (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(175115),
          core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(21466),
          _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(315544),
          _web_lib_input_utils__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(100416),
          _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(695724),
          _web_lib_element_tooltip__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(99392),
          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(49535),
          _web_legacy_ui_ui_tabs__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(27171),
          _shared_lib_browser__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(726271),
          _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(787481),
          _web_lib_scroll__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(803834);
        function _extends() {
          return (
            (_extends =
              Object.assign ||
              function (e) {
                for (var _ = 1; _ < arguments.length; _++) {
                  var t = arguments[_];
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
              }),
            _extends.apply(this, arguments)
          );
        }
        var uiSearch = {
          destroy: function (e) {
            var _ = uiSearch.getFieldEl(e);
            uiSearch.stopEvents(_),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeData)(_);
          },
          getWrapEl: function (e) {
            return (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domClosest)(
              "_wrap",
              e
            );
          },
          getFieldEl: function (e) {
            return (
              (e = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)(e)),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(
                "_field",
                e
              )
                ? e
                : (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domByClass)(
                    uiSearch.getWrapEl(e),
                    "_field"
                  )
            );
          },
          stopEvents: function (e) {
            var _ =
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                e,
                "eventHandlers"
              ) || [];
            (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.each)(
              _,
              function (e, _) {
                _.stop();
              }
            );
          },
          startEvents: function (e) {
            var _ =
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                e,
                "eventHandlers"
              ) || [];
            (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.each)(
              _,
              function (e, _) {
                _.stop(), _.start();
              }
            );
          },
          init: function init(el, options) {
            if (el && ((el = uiSearch.getFieldEl(el)), el)) {
              var wrapEl = uiSearch.getWrapEl(el),
                delayedInitOptions =
                  !options &&
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domData)(
                    wrapEl,
                    "init-options"
                  );
              if (delayedInitOptions) {
                var evalScript =
                  "(function() { return " + delayedInitOptions + " })()";
                try {
                  var _initOptions$suggeste,
                    initOptions = eval(evalScript);
                  (
                    null == initOptions ||
                    null === (_initOptions$suggeste = initOptions.suggester) ||
                    void 0 === _initOptions$suggeste
                      ? void 0
                      : _initOptions$suggeste.useCatalogSuggest
                  )
                    ? setTimeout(
                        () =>
                          (0,
                          _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domData)(
                            wrapEl,
                            "init-options",
                            null
                          ),
                        0
                      )
                    : (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domData)(
                        wrapEl,
                        "init-options",
                        null
                      ),
                    uiSearch.init(el, initOptions);
                } catch (e) {
                  (0,
                  _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_9__.logEvalError)(
                    e,
                    evalScript
                  );
                }
              } else if (
                !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                  el,
                  "inited"
                )
              ) {
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                  el,
                  "inited",
                  1
                );
                var onKeyDown = uiSearch.onKeyDown.pbind(el),
                  onBuffer = function (e) {
                    if (
                      "input" === e.type &&
                      _shared_lib_browser__WEBPACK_IMPORTED_MODULE_8__.browser
                        .msie
                    ) {
                      var _ = (0,
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.val)(el);
                      if (
                        _ ===
                        ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domData)(
                          el,
                          "prev-value"
                        ) || "")
                      )
                        return;
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domData)(
                        el,
                        "prev-value",
                        _
                      );
                    }
                    setTimeout(uiSearch.onChanged.pbind(el, !1, e), 0);
                  },
                  onBlur = uiSearch.onBlurred.pbind(el),
                  mainHandler;
                if (
                  ((0,
                  _web_lib_input_utils__WEBPACK_IMPORTED_MODULE_3__.placeholderInit)(
                    el
                  ),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                    el,
                    "opts",
                    options
                  ),
                  options.suggester)
                ) {
                  var _options$suggester;
                  (options.suggester.useCatalogSuggest = !!(null == options ||
                  null === (_options$suggester = options.suggester) ||
                  void 0 === _options$suggester
                    ? void 0
                    : _options$suggester.useCatalogSuggest)),
                    options.suggester.useCatalogSuggest ||
                      (options.suggester.instance = new Suggester(
                        el,
                        (0,
                        _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend)(
                          options.suggester,
                          {
                            type: options.suggester.type,
                            historyItems:
                              !!options.suggester.history &&
                              options.suggester.historyItems,
                            onSearch: function (e, _, t, i, o) {
                              e ||
                                (options.allowFiltersForEmpty ||
                                  uiSearch.removeAllFilters(el),
                                uiSearch.hideProgress(el)),
                                (0,
                                _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(
                                  wrapEl,
                                  "ui_search_field_empty",
                                  !e
                                ),
                                options.onChange &&
                                  options.onChange.call(el, e, _, t, i, o);
                            },
                          }
                        )
                      )),
                    (mainHandler = {
                      start: function () {
                        (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                          el,
                          "blur",
                          onBlur
                        ),
                          options.onBlur &&
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                              el,
                              "blur",
                              options.onBlur
                            ),
                          options.onFocus &&
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                              el,
                              "focus",
                              options.onFocus
                            );
                      },
                      stop: function () {
                        (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                          el,
                          "blur",
                          onBlur
                        ),
                          options.onBlur &&
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                              el,
                              "blur",
                              options.onBlur
                            ),
                          options.onFocus &&
                            (0,
                            _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                              el,
                              "focus",
                              options.onFocus
                            );
                      },
                    });
                } else {
                  var searchBtn = (0,
                    _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
                      "_ui_search_button_search",
                      wrapEl
                    ),
                    onBtnClick = function (e) {
                      uiSearch.onEnter(el, e),
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.elfocus)(
                          el
                        );
                    };
                  mainHandler = {
                    start: function () {
                      (0,
                      _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                        el,
                        "keydown",
                        onKeyDown
                      ),
                        (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                          el,
                          "paste cut input",
                          onBuffer
                        ),
                        (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                          el,
                          "blur",
                          onBlur
                        ),
                        options.onBlur &&
                          (0,
                          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                            el,
                            "blur",
                            options.onBlur
                          ),
                        options.onFocus &&
                          (0,
                          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                            el,
                            "focus",
                            options.onFocus
                          ),
                        searchBtn &&
                          (0,
                          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                            searchBtn,
                            "click",
                            onBtnClick
                          );
                    },
                    stop: function () {
                      (0,
                      _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                        el,
                        "keydown",
                        onKeyDown
                      ),
                        (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                          el,
                          "paste cut input",
                          onBuffer
                        ),
                        (0,
                        _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                          el,
                          "blur",
                          onBlur
                        ),
                        options.onBlur &&
                          (0,
                          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                            el,
                            "blur",
                            options.onBlur
                          ),
                        options.onFocus &&
                          (0,
                          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                            el,
                            "focus",
                            options.onFocus
                          ),
                        searchBtn &&
                          (0,
                          _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent)(
                            searchBtn,
                            "click",
                            onBtnClick
                          );
                    },
                  };
                }
                if (
                  (mainHandler.start(),
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                    el,
                    "eventHandlers",
                    [mainHandler]
                  ),
                  options.params)
                ) {
                  var _options$suggester2,
                    _options$suggester3,
                    content = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.se)(
                      (0,
                      _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.trim)(
                        options.params.html
                      )
                    ),
                    newOptions = (
                      null == options ||
                      null === (_options$suggester2 = options.suggester) ||
                      void 0 === _options$suggester2
                        ? void 0
                        : _options$suggester2.useCatalogSuggest
                    )
                      ? {
                          forceSide: "bottom",
                          setPos: () => ({ left: "auto", top: "52px" }),
                        }
                      : {};
                  (options.paramsTooltip =
                    new _web_lib_element_tooltip__WEBPACK_IMPORTED_MODULE_5__.ElementTooltip(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
                        "_ui_search_params_button",
                        wrapEl
                      ),
                      _extends(
                        {
                          appendTo: wrapEl,
                          content,
                          autoShow: !1,
                          customShow: !0,
                          shift: options.params.shift
                            ? options.params.shift
                            : 0,
                          offset: [0, -2],
                        },
                        newOptions
                      )
                    )),
                    options.paramsTooltip.build(),
                    (null == options ||
                    null === (_options$suggester3 = options.suggester) ||
                    void 0 === _options$suggester3
                      ? void 0
                      : _options$suggester3.useCatalogSuggest) &&
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(
                        options.paramsTooltip._ttel,
                        { right: 0 }
                      ),
                    setTimeout(function () {
                      (function initScript() {
                        try {
                          eval(options.params.script);
                        } catch (e) {
                          (0,
                          _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_9__.logEvalError)(
                            e,
                            options.params.script
                          );
                        }
                      }.call(el));
                    });
                }
                options.fixed && uiSearch.setFixed(el),
                  options.noAutoDestroy ||
                    cur.destroy.push(uiSearch.stopEvents.pbind(el)),
                  uiSearch.initFilters(el, options),
                  (0,
                  _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.isFunction)(
                    options.onInit
                  ) && options.onInit(el, options);
              }
            }
          },
          getOptions: function (e) {
            var _;
            if (
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(
                e,
                "_field"
              )
            )
              _ = e;
            else {
              var t = uiSearch.getWrapEl(e);
              _ = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
                "_field",
                t
              );
            }
            return (
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(_, "opts") ||
              {}
            );
          },
          toggleParameters: function (e) {
            var _ = uiSearch.getOptions(e);
            _.paramsTooltip && _.paramsTooltip.toggle();
          },
          hideParameters: function (e) {
            var _ = uiSearch.getOptions(e);
            _ && _.paramsTooltip && _.paramsTooltip.hide();
          },
          saveHistorySearch: function (e, _, t, i, o, s) {
            _ || (_ = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.val)(e));
            var l = uiSearch.getOptions(e);
            l.suggester &&
              l.suggester.instance &&
              l.suggester.instance.saveHistoryItem(_, t, i, o, s);
          },
          onEnter: function (e, _) {
            e = uiSearch.getFieldEl(e);
            var t = uiSearch.getOptions(e),
              i = e.getValue ? e.getValue() : e.value;
            return (
              t.onEnter && t.onEnter(e, i, _),
              (0, _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.cancelEvent)(
                _
              )
            );
          },
          onKeyDown: function (e, _) {
            if (
              cur.preventInputActions &&
              -1 !=
                [
                  _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.KEY.RETURN,
                  _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.KEY.ESC,
                  _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.KEY.DOWN,
                  _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.KEY.UP,
                ].indexOf(_.keyCode)
            )
              return (0,
              _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.cancelEvent)(_);
            if (
              _.keyCode ==
              _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.KEY.RETURN
            )
              return uiSearch.onEnter(e, _);
            if (
              _.keyCode ==
              _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.KEY.ESC
            ) {
              var t = !!(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.val)(e);
              return (
                uiSearch.reset(e, !1, _),
                !t ||
                  (0,
                  _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.cancelEvent)(
                    _
                  )
              );
            }
            setTimeout.pbind(uiSearch.onChanged.pbind(e, !1, _), 0);
          },
          onBlurred: function (e, _) {
            var t = uiSearch.getOptions(e);
            t.onBlur && t.onBlur.call(e, _);
          },
          onChanged: function (e, _, t) {
            e = uiSearch.getFieldEl(e);
            var i = uiSearch.getOptions(e),
              o = uiSearch.getWrapEl(e),
              s = e.getValue ? e.getValue() : e.value;
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(
              o,
              "ui_search_field_empty",
              !(0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.trim)(s)
            ),
              s || i.allowFiltersForEmpty || uiSearch.removeAllFilters(e),
              _ || (i.onChange && i.onChange.call(e, s, t));
          },
          focus: function (e) {
            (e = uiSearch.getFieldEl(e)),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.elfocus)(e);
          },
          reset: function (e, _, t) {
            e = uiSearch.getFieldEl(e);
            var i = uiSearch.getOptions(e),
              o = uiSearch.getWrapEl(e);
            (e.getValue ? e.getValue() : e.value)
              ? ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.val)(e, ""),
                uiSearch.onChanged(e, _, t),
                _ || (i.onEnter && i.onEnter(e, "")),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.elfocus)(e))
              : i.in_tabs &&
                _web_legacy_ui_ui_tabs__WEBPACK_IMPORTED_MODULE_7__.default.hideSearch(
                  o
                ),
              window.tooltips && tooltips.destroyAll();
          },
          showProgress: function (e) {
            e = uiSearch.getFieldEl(e);
            var _ = uiSearch.getWrapEl(e);
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(
              _,
              "ui_search_loading"
            );
            var t = e.getValue
              ? (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.trim)(
                  e.getValue()
                )
              : e.value;
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(
              _,
              "ui_search_field_empty",
              !t
            );
          },
          hideProgress: function (e) {
            e = uiSearch.getFieldEl(e);
            var _ = uiSearch.getWrapEl(e);
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(
              _,
              "ui_search_loading"
            );
            var t = e.getValue
              ? (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.trim)(
                  e.getValue()
                )
              : e.value;
            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(
              _,
              "ui_search_field_empty",
              !t
            );
          },
          scrollResize: function (e) {
            if (
              !_shared_lib_browser__WEBPACK_IMPORTED_MODULE_8__.browser.mobile
            ) {
              e = uiSearch.getFieldEl(e);
              var _,
                t = uiSearch.getWrapEl(e),
                i =
                  t && (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domPN)(t),
                o = t && t.classList.contains("ui_search_fixed"),
                s =
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)(
                    cur.uiSearchPageBlock
                  ) ||
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.gpeByClass)(
                    "page_block",
                    e
                  ),
                l = vk.staticheader
                  ? Math.max(
                      0,
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)(
                          "page_header"
                        )
                      )[1] - scrollNode.scrollTop
                    )
                  : (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)(
                        "page_header"
                      )
                    )[1],
                r =
                  t &&
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.isAncestor)(
                    t,
                    boxLayerWrap
                  );
              if (
                t &&
                i &&
                (r ||
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.gpeByClass)(
                    "scroll_fix",
                    t
                  )) &&
                (!e.ignoreFixed || o) &&
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.isVisible)(i)
              )
                if (
                  r
                    ? (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(
                        i,
                        !0
                      )[1] < 0
                    : (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(
                        i,
                        !0
                      )[1] < l
                ) {
                  var n = (0,
                  _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.intval)(
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(
                      t.classList.contains("ui_search_new") ? t : e,
                      "width"
                    )
                  );
                  !o &&
                    n &&
                    ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(
                      i,
                      "height",
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(
                        t
                      )[1]
                    ),
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(
                      t,
                      "width",
                      n
                    ),
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(
                      t,
                      "ui_search_fixed"
                    ));
                  var a = Math.min(
                    0,
                    Math.max(
                      -bodyNode.scrollLeft,
                      bodyNode.clientWidth -
                        (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(
                          (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.ge)(
                            "page_layout"
                          )
                        )[0]
                    )
                  );
                  if (
                    ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(
                      t,
                      { marginLeft: a }
                    ),
                    s)
                  ) {
                    var h =
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getXY)(
                        s
                      )[1] +
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.getSize)(
                        s
                      )[1] -
                      (0,
                      _web_lib_scroll__WEBPACK_IMPORTED_MODULE_10__.scrollGetY)() -
                      e.offsetHeight;
                    (_ = Math.min(l, Math.max(-e.offsetHeight, h))) !==
                      cur.lastUISearchPos &&
                      ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(
                        t,
                        "top",
                        _
                      ),
                      (cur.lastUISearchPos = _));
                  }
                } else
                  o &&
                    ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(
                      i,
                      "height",
                      ""
                    ),
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(t, {
                      top: "",
                      marginLeft: "",
                    }),
                    (cur.lastUISearchPos = !1),
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(
                      t,
                      "ui_search_fixed"
                    ));
            }
          },
          setStatic: function (e) {
            e.ignoreFixed = !0;
            var _ = uiSearch.getWrapEl(e),
              t = _ && (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domPN)(_);
            _ &&
              t &&
              ((0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(
                t,
                "height",
                ""
              ),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(_, {
                top: "",
                marginLeft: "",
              }),
              (cur.lastUISearchPos = !1),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(
                _,
                "ui_search_fixed"
              ));
          },
          setFixed: function (e) {
            if (
              ((e.ignoreFixed = !1),
              !(0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                e,
                "resizeEventHandler"
              ))
            ) {
              var _ = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.isAncestor)(
                  e,
                  boxLayerWrap
                )
                  ? boxLayerWrap
                  : window,
                t = uiSearch.scrollResize.pbind(e),
                i = {
                  stop: _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent.pbind(
                    _,
                    "scroll",
                    t
                  ),
                  start:
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent.pbind(
                      _,
                      "scroll",
                      t
                    ),
                };
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                e,
                "eventHandlers",
                (
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                    e,
                    "eventHandlers"
                  ) || []
                ).concat([i])
              ),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                  e,
                  "resizeEventHandler",
                  !0
                ),
                i.start();
            }
            uiSearch.scrollResize(e);
          },
          initFilters: function (e, _) {
            if (e) {
              var t = uiSearch.getWrapEl(e),
                i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
                  "ui_search_fltr_control",
                  t
                ),
                o = {
                  start: function () {
                    (0,
                    _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                      i,
                      "click",
                      function (e) {
                        ((0,
                        _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(
                          i,
                          "shown"
                        ) &&
                          !(0,
                          _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(
                            e.target,
                            "ui_search_fltr_control"
                          )) ||
                          l(i);
                      }
                    ),
                      (0,
                      _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                        i,
                        "mouseover",
                        function () {
                          if (
                            (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(
                              i,
                              "shown"
                            )
                          ) {
                            var e = (0,
                            _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                              i,
                              "hidetimer"
                            );
                            e &&
                              (clearTimeout(e),
                              (0,
                              _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                                i,
                                "hidetimer",
                                0
                              )),
                              l(i, !0);
                          }
                        }
                      ),
                      (0,
                      _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                        i,
                        "mouseout",
                        function () {
                          (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                            i,
                            "hidetimer"
                          ) ||
                            (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                              i,
                              "hidetimer",
                              setTimeout(function () {
                                l(i, !1),
                                  (0,
                                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                                    i,
                                    "hidetimer",
                                    0
                                  );
                              }, 200)
                            );
                        }
                      );
                  },
                  stop: _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.removeEvent.pbind(
                    i,
                    "click mouseover mouseout"
                  ),
                };
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                e,
                "eventHandlers",
                (
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                    e,
                    "eventHandlers"
                  ) || []
                ).concat([o])
              ),
                o.start();
              var s = uiSearch._getFiltersPane(e);
              (0, _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_6__.addEvent)(
                s,
                "click",
                function (_) {
                  if (
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(
                      _.target,
                      "token_title"
                    ) ||
                    (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hasClass)(
                      _.target,
                      "token_del"
                    )
                  ) {
                    var t = (0,
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.gpeByClass)(
                        "token",
                        _.target
                      ),
                      i = (0,
                      _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.domData)(
                        t,
                        "id"
                      );
                    uiSearch.removeFilter(e, i);
                  }
                }
              );
            }
            function l(e, _) {
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.toggleClass)(
                e,
                "shown",
                _
              );
            }
          },
          removeAllFilters: function (e) {
            var _ = uiSearch._getFiltersPane(e),
              t = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                _,
                "cur_filters"
              );
            (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.each)(
              (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend)(
                {},
                t
              ),
              function (_) {
                uiSearch.removeFilter(e, _, !0);
              }
            );
          },
          toggleFilter: function (e, _, t, i) {
            i ? uiSearch.addFilter(e, _, t) : uiSearch.removeFilter(e, _);
          },
          addFilter: function (e, _, t) {
            if (_ && t) {
              var i = uiSearch._getFiltersPane(e),
                o =
                  (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                    i,
                    "cur_filters"
                  ) || {};
              (o[_] = t),
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                  i,
                  "cur_filters",
                  o
                );
              var s = uiSearch.getOptions(e);
              s.onFiltersChanged && s.onFiltersChanged(o),
                uiSearch._renderFilters(e);
            }
          },
          removeFilter: function (e, _, t) {
            var i = uiSearch._getFiltersPane(e),
              o =
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                  i,
                  "cur_filters"
                ) || {};
            if (o[_]) {
              delete o[_],
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                  i,
                  "cur_filters",
                  o
                );
              var s = uiSearch.getOptions(e);
              s.onFilterRemoved && s.onFilterRemoved(_, e, t),
                s.onFiltersChanged && s.onFiltersChanged(o),
                uiSearch._renderFilters(e);
            }
          },
          _getFiltersPane: function (e) {
            var _ = uiSearch.getWrapEl(e) || e;
            return (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
              "ui_search_filters_pane",
              _
            );
          },
          _renderFilters: function (e) {
            clearTimeout(
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                e,
                "renderFiltersTO"
              )
            ),
              (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                e,
                "renderFiltersTO",
                setTimeout(uiSearch._doRenderFilters.pbind(e))
              );
          },
          _doRenderFilters: function (e) {
            var _ = uiSearch._getFiltersPane(e),
              t =
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.data)(
                  _,
                  "cur_filters"
                ) || {},
              i = (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.geByClass1)(
                "ui_search_filters",
                _
              );
            if (i)
              if (
                (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(
                  t
                )
              )
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(
                  _,
                  "expanded"
                ),
                  setTimeout(function () {
                    (i.innerHTML = ""),
                      (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.hide)(_);
                  }, 200);
              else {
                (0, _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.show)(_),
                  (0,
                  _web_lib_dom__WEBPACK_IMPORTED_MODULE_2__.addClassDelayed)(
                    _,
                    "expanded"
                  );
                var o = [],
                  s = {},
                  l = 0;
                (0, _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.each)(
                  t,
                  function (e, _) {
                    var t = !1,
                      i = !1,
                      r = e.match(/(.*?)_([^_]+)$/),
                      n = (r && r[2]) || !1;
                    (r = (r && r[1]) || !1) &&
                      (void 0 !== s[r] && "from" === n
                        ? (i = s[r])
                        : void 0 !== s[r] && (t = s[r] + 1),
                      (s[r] = l));
                    var a = `<div class="token" id="token${e}" data-id="${e}">\n                         <div class="token_title">${(0,
                    _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.replaceEntities)(
                      (0,
                      _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_4__.clean)(
                        _
                      )
                    )}</div>\n                         <div class="token_del"></div>\n                       </div>`;
                    !1 !== i
                      ? o.splice(i, 0, a)
                      : !1 !== t
                      ? o.splice(t, 0, a)
                      : o.push(a),
                      l++;
                  }
                ),
                  (i.innerHTML = o.join(""));
              }
          },
        };
        const __WEBPACK_DEFAULT_EXPORT__ = uiSearch;
      },
      27171: (e, _, t) => {
        t.r(_), t.d(_, { default: () => n });
        var i = t(315544),
          o = t(695724),
          s = t(726271),
          l = t(49535),
          r = {
            initTabs: function (e, _) {
              if (
                !(
                  (s.browser.msie && (0, o.intval)(s.browser.version) < 10) ||
                  (s.browser.opera && (0, o.intval)(s.browser.version) < 15) ||
                  (0, i.hasClass)(e, "ui_tabs_sliding")
                )
              ) {
                var t = (0, i.getSize)(_)[0],
                  l = _.offsetLeft,
                  r = (0, i.geByClass1)("_ui_tabs_slider", e);
                if (!(0, i.domData)(e, "inited")) {
                  var n = { width: t + "px", marginLeft: l };
                  (0, i.setStyle)(r, n);
                }
              }
            },
            tryInit: function (e) {
              if (!(0, i.domData)(e, "inited")) {
                var _ =
                  (0, i.geByClass1)("ui_tab_group_sel", e) ||
                  (0, i.geByClass1)("ui_tab_sel", e);
                _ && r.initTabs(e, _), (0, i.domData)(e, "inited", 1);
              }
            },
            goTab: function (e, _, t) {
              if ((0, l.checkEvent)(_)) return !0;
              var o = (0, i.gpeByClass)("ui_tabs", e);
              return (
                !(!t && (0, i.geByClass1)("ui_tab_sel", o) == e) &&
                (r.switchTab(e), r.showProgress(o), nav.go(e, _, { tab: e }))
              );
            },
            switchTab: function (e, _) {
              var t = (0, i.gpeByClass)("ui_tabs", e),
                s = (0, i.geByClass1)("ui_tab_sel", t),
                l = null,
                n = null,
                a = (0, i.hasClass)(s, "ui_tab_group_item")
                  ? (n = (0, i.gpeByClass)("ui_tab_group", s))
                  : s,
                h = (0, i.hasClass)(e, "ui_tab_group_item")
                  ? (l = (0, i.gpeByClass)("ui_tab_group", e))
                  : e;
              if (e != s) {
                if ((e != h && (r.toggleGroup(h, !1), r.resetLabel(h, e)), a)) {
                  r.initTabs(t, a),
                    (_ = _ || {}).noAnim ||
                      h === a ||
                      ((0, i.addClass)(t, "ui_tabs_sliding"),
                      clearTimeout(cur.tabSlidingTO),
                      (cur.tabSlidingTO = setTimeout(
                        i.removeClass.pbind(t, "ui_tabs_sliding"),
                        300
                      )));
                  var d = (0, i.geByClass1)("_ui_tabs_slider", t),
                    u = (0, o.intval)(d.style.marginLeft),
                    c = { width: (0, i.getSize)(h)[0] + "px" };
                  (c[cssTransformProp] =
                    "translateX(" + (h.offsetLeft - u) + "px)"),
                    (0, i.setStyle)(d, c),
                    s != a && h != a && r.resetLabel(a),
                    a != s && (0, i.removeClass)(a, "ui_tab_group_sel"),
                    (0, i.removeClass)(s, "ui_tab_sel");
                }
                if (
                  (h != e && (0, i.addClass)(h, "ui_tab_group_sel"),
                  (0, i.addClass)(e, "ui_tab_sel"),
                  n && (0, i.removeClass)(n, "ui_tab_hide_separator"),
                  l)
                ) {
                  t = (0, i.geByClass1)(
                    "ui_tab_group_items",
                    l,
                    "div"
                  ).children;
                  var E = null;
                  (0, o.each)(t, function (e, _) {
                    "SPAN" === _.tagName
                      ? (E = _)
                      : (0, i.hasClass)((0, i.domFC)(_), "ui_tab_sel") ||
                        (0, i.hasClass)(_, "unshown") ||
                        (E = null);
                  }),
                    E && (0, i.addClass)(l, "ui_tab_hide_separator");
                }
              }
              return !1;
            },
            resetLabel: function (e, _) {
              var t = (0, i.geByClass1)("ui_tab_group_label", e, "span");
              t && (t.innerHTML = (_ || t).getAttribute("data-default-label"));
            },
            toggleGroup: function (e, _) {
              var t = (0, i.data)(e, "visibletimer");
              t && clearTimeout(t),
                (0, i.data)(
                  e,
                  "visibletimer",
                  setTimeout(i.toggleClass.pbind(e, "visible", _), _ ? 0 : 100)
                ),
                (0, i.toggleClass)(e, "shown", _);
            },
            showGroup: function (e) {
              var _ = (0, i.data)(e, "hidetimer");
              _ && (clearTimeout(_), (0, i.data)(e, "hidetimer", 0)),
                r.toggleGroup(e, !0);
            },
            hideGroup: function (e) {
              (0, i.data)(e, "hidetimer") ||
                (0, i.data)(
                  e,
                  "hidetimer",
                  setTimeout(function () {
                    r.toggleGroup(e, !1), (0, i.data)(e, "hidetimer", 0);
                  }, 200)
                );
            },
            showProgress: function (e) {
              (0, i.hasClass)(e, "ui_tabs") ||
                (e = (0, i.gpeByClass)("ui_tabs", e)),
                (0, i.addClass)(e, "ui_tabs_loading");
            },
            hideProgress: function (e) {
              (0, i.hasClass)(e, "ui_tabs") ||
                (e = (0, i.gpeByClass)("ui_tabs", e)),
                (0, i.removeClass)(e, "ui_tabs_loading");
            },
            showSearch: function (e, _) {
              if (cur.viewAsBox) return cur.viewAsBox();
              if ((0, l.checkEvent)(_)) return !0;
              var t = (0, i.gpeByClass)("ui_tabs", e),
                o = (0, i.domByClass)(t, "_field");
              return (
                (0, i.addClass)(t, "ui_tabs_search_opened"),
                uiSearch.focus(o),
                !1
              );
            },
            hideSearch: function (e, _) {
              if ((0, l.checkEvent)(_)) return !0;
              var t = (0, i.gpeByClass)("ui_tabs", e);
              return (0, i.removeClass)(t, "ui_tabs_search_opened"), !1;
            },
          };
        const n = r;
      },
      290984: (e, _, t) => {
        var i = t(27171),
          o = t(149685),
          s = t(832230),
          l = t(293498),
          r = t(364122),
          n = t(664054),
          a = t(428208),
          h = t(791713),
          d = t(796908),
          u = t(938141),
          c = t(217700);
        (window.uiTabs = i.default),
          (window.uiActionsMenu = o.default),
          (window.uiRightMenu = l.default),
          (window.uiPageBlock = r.default),
          (window.uiSearch = n.default),
          (window.uiScrollBox = a.default),
          (window.uiPhotoZoom = h.default),
          (window.Scrollbar = window.Scrollbar || d.default),
          (window.OList = u.default),
          (window.UiScroll = s.default),
          (window.uiScroll = s.default),
          (window.Slider = c.default);
        try {
          window.stManager.done("ui_common.js");
        } catch (e) {}
      },
      891260: (e, _, t) => {
        t.d(_, { isKeyboardActivationEvent: () => o });
        var i = t(49535),
          o = function (e) {
            return (
              !!(window.KeyboardEvent && e instanceof window.KeyboardEvent) &&
              !(e.ctrlKey || e.altKey || e.metaKey) &&
              !![i.KEY.ENTER, i.KEY.SPACE].includes(e.keyCode)
            );
          };
      },
    },
    __webpack_module_cache__ = {},
    deferred,
    leafPrototypes,
    getProto;
  function __webpack_require__(e) {
    var _ = __webpack_module_cache__[e];
    if (void 0 !== _) return _.exports;
    var t = (__webpack_module_cache__[e] = { id: e, loaded: !1, exports: {} });
    return (
      __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__),
      (t.loaded = !0),
      t.exports
    );
  }
  (__webpack_require__.m = __webpack_modules__),
    (deferred = []),
    (__webpack_require__.O = (e, _, t, i) => {
      if (!_) {
        var o = 1 / 0;
        for (n = 0; n < deferred.length; n++) {
          for (var [_, t, i] = deferred[n], s = !0, l = 0; l < _.length; l++)
            (!1 & i || o >= i) &&
            Object.keys(__webpack_require__.O).every((e) =>
              __webpack_require__.O[e](_[l])
            )
              ? _.splice(l--, 1)
              : ((s = !1), i < o && (o = i));
          if (s) {
            deferred.splice(n--, 1);
            var r = t();
            void 0 !== r && (e = r);
          }
        }
        return e;
      }
      i = i || 0;
      for (var n = deferred.length; n > 0 && deferred[n - 1][2] > i; n--)
        deferred[n] = deferred[n - 1];
      deferred[n] = [_, t, i];
    }),
    (__webpack_require__.n = (e) => {
      var _ = e && e.__esModule ? () => e.default : () => e;
      return __webpack_require__.d(_, { a: _ }), _;
    }),
    (getProto = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (__webpack_require__.t = function (e, _) {
      if ((1 & _ && (e = this(e)), 8 & _)) return e;
      if ("object" == typeof e && e) {
        if (4 & _ && e.__esModule) return e;
        if (16 & _ && "function" == typeof e.then) return e;
      }
      var t = Object.create(null);
      __webpack_require__.r(t);
      var i = {};
      leafPrototypes = leafPrototypes || [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto),
      ];
      for (
        var o = 2 & _ && e;
        "object" == typeof o && !~leafPrototypes.indexOf(o);
        o = getProto(o)
      )
        Object.getOwnPropertyNames(o).forEach((_) => (i[_] = () => e[_]));
      return (i.default = () => e), __webpack_require__.d(t, i), t;
    }),
    (__webpack_require__.d = (e, _) => {
      for (var t in _)
        __webpack_require__.o(_, t) &&
          !__webpack_require__.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: _[t] });
    }),
    (__webpack_require__.e = () => Promise.resolve()),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (__webpack_require__.o = (e, _) =>
      Object.prototype.hasOwnProperty.call(e, _)),
    (__webpack_require__.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 68435: 0 };
      __webpack_require__.O.j = (_) => 0 === e[_];
      var _ = (_, t) => {
          var i,
            o,
            [s, l, r] = t,
            n = 0;
          for (i in l)
            __webpack_require__.o(l, i) && (__webpack_require__.m[i] = l[i]);
          if (r) var a = r(__webpack_require__);
          for (_ && _(t); n < s.length; n++)
            (o = s[n]),
              __webpack_require__.o(e, o) && e[o] && e[o][0](),
              (e[s[n]] = 0);
          return __webpack_require__.O(a);
        },
        t = (self.webpackChunkvk = self.webpackChunkvk || []);
      t.forEach(_.bind(null, 0)), (t.push = _.bind(null, t.push.bind(t)));
    })();
  var __webpack_exports__ = __webpack_require__.O(
    void 0,
    [11216, 24509, 40885, 68592],
    () => __webpack_require__(290984)
  );
  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
