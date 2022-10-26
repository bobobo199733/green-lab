(self.webpackChunkvk = self.webpackChunkvk || []).push([
  [24509],
  {
    25432: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class o extends n.Component {
        constructor(e) {
          super(e),
            (this.onError = () => {
              this.setState({ errored: !0 });
            }),
            (this.state = {});
        }
        render() {
          var e = this.props,
            t = e.photo,
            s = e.title,
            o = e.isOnline,
            l = e.isMobile,
            c = e.onlineSize,
            d = e.element,
            u = e.className,
            h = i(e, [
              "photo",
              "title",
              "isOnline",
              "isMobile",
              "onlineSize",
              "element",
              "className",
            ]),
            p = d || "div",
            m = `Avatar--badge-${c}`,
            v = (0, r.classNames)("Avatar", m, u, {
              "Avatar--online": o,
              "Avatar--mobile": l,
            });
          return n.createElement(
            p,
            a({ className: v }, h),
            n.createElement(
              "div",
              { className: "Avatar__wrapper" },
              n.createElement("img", {
                onError: this.onError,
                className: "Avatar__img",
                src: this.state.errored ? "/images/camera_c.gif" : t,
                alt: s,
              })
            )
          );
        }
      }
      o.defaultProps = { isOnline: !1, isMobile: !1, onlineSize: "m" };
    },
    730365: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(667294),
        r = s(973935),
        a = (s(45697), s(659397));
      class i extends n.Component {
        constructor() {
          super(...arguments),
            (this.getScrollbarWidth = () => {
              var e = document.createElement("div");
              e.classList.add(this._scrollbarMeasureClass),
                document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            }),
            (this.hideScrollBar = () => {
              var e = document.body.getBoundingClientRect(),
                t = e.left + e.right < window.innerWidth,
                s = this.getScrollbarWidth();
              (this.calculatedPadding = window.getComputedStyle(document.body)[
                "padding-right"
              ]),
                t &&
                  (document.body.style.paddingRight = `${
                    parseFloat(this.calculatedPadding) + s
                  }px`),
                document.body.classList.add(this._bodyHiddenOverflowClass);
            }),
            (this.showScrollBar = () => {
              (document.body.style.paddingRight = this.calculatedPadding),
                document.body.classList.remove(this._bodyHiddenOverflowClass);
            }),
            (this.onDocumentKeyDown = (e) => {
              var t = this.props.onClose;
              "Escape" === e.key && t();
            }),
            (this.onBackdropClick = () => {
              var e = this.props,
                t = e.onClose,
                s = e.onBackdropClick;
              e.disableBackdropClick || (s ? s() : t());
            });
        }
        componentDidMount() {
          var e = this.props,
            t = e.disableEscapeClose,
            s = e.disableBodyScroll;
          t ||
            document.body.addEventListener("keydown", this.onDocumentKeyDown),
            s &&
              ((this._scrollbarMeasureClass = n.createElement("div", {
                className: "BaseModal__scrollbarMeasure",
              }).props.className),
              (this._bodyHiddenOverflowClass = n.createElement("div", {
                className: "BaseModal__bodyHiddenOverflow",
              }).props.className),
              this.hideScrollBar());
        }
        componentWillUnmount() {
          var e = this.props,
            t = e.disableEscapeClose,
            s = e.disableBodyScroll;
          t ||
            document.body.removeEventListener(
              "keydown",
              this.onDocumentKeyDown
            ),
            s && this.showScrollBar();
        }
        renderModal() {
          var e = this.props.className,
            t = (0, a.classNames)("BaseModal", e);
          return n.createElement(
            "div",
            { className: t, "aria-modal": "true" },
            n.createElement("div", {
              className: "BaseModal__backdrop",
              onClick: this.onBackdropClick,
            }),
            n.createElement(
              "div",
              { className: "BaseModal__content" },
              this.props.children
            )
          );
        }
        render() {
          return r.createPortal(this.renderModal(), document.body);
        }
      }
      i.defaultProps = {
        className: "",
        children: null,
        disableBackdropClick: !1,
        disableEscapeClose: !1,
        disableBodyScroll: !1,
      };
      const o = i;
    },
    869666: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class o extends n.Component {
        constructor(e) {
          super(e),
            (this.onTransitionEnd = (e) => {
              this.state.shown &&
                "opacity" === e.propertyName &&
                (this.timeout = setTimeout(() => {
                  this.setState({ shown: !1 }), this.props.callback();
                }, this.props.duration));
            }),
            (this.state = { shown: e.shown });
        }
        UNSAFE_componentWillReceiveProps(e) {
          !this.props.shown && e.shown && this.setState({ shown: !0 });
        }
        componentWillUnmount() {
          this.timeout && clearTimeout(this.timeout);
        }
        render() {
          var e = this.props,
            t = (e.shown, e.callback, e.duration, e.className),
            s = e.children,
            o = i(e, [
              "shown",
              "callback",
              "duration",
              "className",
              "children",
            ]),
            l = (0, r.classNames)(
              "BlinkText",
              { "BlinkText--shown": this.state.shown },
              t
            );
          return n.createElement(
            "span",
            a({}, o, {
              className: l,
              onTransitionEnd: this.onTransitionEnd,
              "aria-hidden": !0,
            }),
            s
          );
        }
      }
      o.defaultProps = { duration: 2e3 };
    },
    674041: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class o extends n.Component {
        constructor() {
          super(...arguments),
            (this.onChange = (e) => {
              this.props.onChange &&
                this.props.onChange(this.props.name, e.target.checked, e);
            });
        }
        render() {
          var e = this.props,
            t = e.children,
            s = e.checked,
            o = e.disabled,
            l = e.indeterminate,
            c = e.name,
            d = e.id,
            u = i(e, [
              "children",
              "checked",
              "disabled",
              "indeterminate",
              "name",
              "id",
            ]),
            h = (0, r.classNames)("CheckBox", u.className, {
              "CheckBox--disabled": o,
              "CheckBox--indeterminate": l,
            });
          return n.createElement(
            "label",
            { className: h },
            n.createElement(
              "input",
              a({}, u, {
                className: "CheckBox__input",
                id: d,
                type: "checkbox",
                checked: s,
                name: c,
                disabled: o,
                onChange: this.onChange,
              })
            ),
            n.createElement("span", {
              className: "CheckBox__indicator",
              "aria-hidden": !0,
            }),
            t
          );
        }
      }
    },
    739519: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      var o = (e) => {
        var t = e.children,
          s = e.isMuted,
          o = e.className,
          l = i(e, ["children", "isMuted", "className"]),
          c = (0, r.classNames)("Counter", o, { "Counter--muted": s });
        return n.createElement("div", a({}, l, { className: c }), t);
      };
      o.defaultProps = { isMuted: !1 };
      const l = o;
    },
    753449: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => i });
      s(319371), s(175115), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = s(973935),
        a = (s(45697), s(659397));
      class i extends n.Component {
        constructor(e) {
          super(e),
            (this.onClick = () => {
              if (!this.state.dropdown || this.state.dropdown.removed) {
                var e = this.props,
                  t = e.text,
                  s = e.position,
                  n = e.align,
                  r = e.marginTop,
                  i = e.marginLeft,
                  o = e.horizontalPosition,
                  l = (0, a.getOffsetRect)(this.el);
                this.update({
                  text: t,
                  position: s,
                  horizontalPosition: o,
                  align: n,
                  rect: l,
                  marginTop: r,
                  marginLeft: i,
                });
              } else this.update();
            }),
            (this.onMouseEnter = () => {
              (this.callerHovered = !0),
                (this.timeouts.appear = setTimeout(() => {
                  if (this.el && this.callerHovered) {
                    var e = this.props,
                      t = e.position,
                      s = e.align,
                      n = e.marginTop,
                      r = e.marginLeft,
                      i = e.horizontalPosition,
                      o = (0, a.getOffsetRect)(this.el);
                    this.update({
                      position: t,
                      align: s,
                      horizontalPosition: i,
                      rect: o,
                      marginTop: n,
                      marginLeft: r,
                    });
                  }
                }, 80));
            }),
            (this.onMouseLeave = () => {
              (this.callerHovered = !1),
                (this.timeouts.callerDisappear = setTimeout(() => {
                  this.callerHovered || this.hovered || this.update();
                }, 250));
            }),
            (this.onDropdownMouseEnter = () => {
              "hover" === this.props.trigger && (this.hovered = !0);
            }),
            (this.onDropdownMouseLeave = () => {
              "hover" === this.props.trigger &&
                ((this.hovered = !1),
                (this.timeouts.disappear = setTimeout(() => {
                  this.callerHovered || this.hovered || this.update();
                }, 250)));
            }),
            (this.onDocumentClick = (e) => {
              !this.state.dropdown ||
                this.state.dropdown.removed ||
                this.el.contains(e.target) ||
                this.update();
            }),
            (this.onResize = () => {
              if (this.state.dropdown && !this.state.dropdown.removed) {
                var e = this.props,
                  t = e.text,
                  s = e.position,
                  n = e.align,
                  r = e.marginTop,
                  i = e.marginLeft,
                  o = e.horizontalPosition,
                  l = (0, a.getOffsetRect)(this.el);
                this.update({
                  text: t,
                  position: s,
                  align: n,
                  horizontalPosition: o,
                  rect: l,
                  marginTop: r,
                  marginLeft: i,
                });
              }
            }),
            (this.onTransitionEnd = (e) => {
              "visibility" === e.propertyName &&
                this.state.dropdown &&
                this.state.dropdown.removed &&
                this.setState({ dropdown: void 0 });
            }),
            (this.onItemClick = (e, t) => {
              t.separator || (this.update(), t.onClick && t.onClick(e));
            }),
            (this.state = {}),
            (this.timeouts = {});
        }
        componentDidMount() {
          (this.el = r.findDOMNode(this)),
            "click" === this.props.trigger
              ? (this.el.addEventListener("click", this.onClick),
                document.addEventListener("mousedown", this.onDocumentClick),
                window.addEventListener("resize", this.onResize))
              : (this.el.addEventListener("mouseenter", this.onMouseEnter),
                this.el.addEventListener("mouseleave", this.onMouseLeave));
        }
        componentWillUnmount() {
          Object.keys(this.timeouts).forEach((e) => {
            clearTimeout(this.timeouts[e]);
          }),
            "click" === this.props.trigger
              ? (this.el.removeEventListener("click", this.onClick),
                document.removeEventListener("mousedown", this.onDocumentClick),
                window.removeEventListener("resize", this.onResize))
              : (this.el.removeEventListener("mouseenter", this.onMouseEnter),
                this.el.removeEventListener("mouseleave", this.onMouseLeave)),
            this.defaultNode &&
              (this.defaultNode.parentNode.removeChild(this.defaultNode),
              delete this.defaultNode);
        }
        update(e) {
          if (!e)
            return this.setState({
              dropdown: Object.assign({}, this.state.dropdown, { removed: !0 }),
            });
          var t = e.position,
            s = e.align,
            n = e.horizontalPosition,
            r = e.rect,
            a = e.marginTop,
            i = e.marginLeft,
            o = r.left,
            l = r.top;
          switch (t) {
            case "t":
              "center" === n
                ? (o += 0.5 * r.width)
                : "right" === n && (o += r.width);
              break;
            case "r":
              (o += r.width), (l += 0.5 * r.height);
              break;
            case "b":
              (l += r.height),
                "center" === n
                  ? (o += 0.5 * r.width)
                  : "right" === n && (o += r.width);
              break;
            case "l":
              l += 0.5 * r.height;
          }
          (o = Math.round(o + i)),
            (l = Math.round(l + a)),
            this.setState({ dropdown: { position: t, align: s, x: o, y: l } });
        }
        renderDropdown() {
          if (!this.state.dropdown) return null;
          var e = this.state.dropdown,
            t = e.x,
            s = e.y,
            r = e.position,
            i = e.align,
            o = e.removed,
            l = (0, a.classNames)(
              "Dropdown",
              `Dropdown--${r}`,
              {
                "Dropdown--removed": !!o,
                [`Dropdown--align-${i}`]: "t" === r || "b" === r,
              },
              `Dropdown--${this.props.appearance}`,
              this.props.className
            );
          return n.createElement(
            "div",
            {
              className: l,
              style: { top: s, left: t },
              onTransitionEnd: (e) => this.onTransitionEnd(e),
              onMouseEnter: this.onDropdownMouseEnter,
              onMouseLeave: this.onDropdownMouseLeave,
            },
            n.createElement(
              "ul",
              { className: "Dropdown__in" },
              this.props.data.map((e, t) =>
                n.createElement(
                  "li",
                  {
                    className: (0, a.classNames)(
                      "Dropdown__item",
                      { Dropdown__itemSeparator: e.separator },
                      { Dropdown__itemNegative: e.negative },
                      { Dropdown__itemNoHover: e.noHover }
                    ),
                    onClick: (t) => this.onItemClick(t, e),
                    key: void 0 !== e.id ? e.id : t,
                  },
                  e.text
                )
              )
            )
          );
        }
        render() {
          var e = this.renderDropdown();
          return e
            ? (this.defaultNode ||
                "undefined" == typeof window ||
                ((this.defaultNode = document.createElement("div")),
                document.body.appendChild(this.defaultNode)),
              n.createElement(
                n.Fragment,
                null,
                this.props.children,
                r.createPortal(e, this.defaultNode)
              ))
            : this.props.children;
        }
      }
      i.defaultProps = {
        position: "b",
        horizontalPosition: "center",
        align: "center",
        marginTop: 0,
        marginLeft: 0,
        trigger: "click",
        className: "",
        appearance: "primary",
      };
    },
    888282: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l });
      s(175115);
      var n = s(667294),
        r = s(973935),
        a = (s(45697), s(659397)),
        i = s(273947),
        o = { height: "auto" };
      class l extends n.Component {
        constructor(e) {
          super(e),
            (this.onChange = (e) => {
              this.props.onChange
                ? this.props.onChange(e)
                : this.setState({
                    value: e.target.value,
                    changed: this.props.value !== this.state.value,
                  });
            }),
            (this.onClick = () => {
              this.setState({ editing: !0 }, () => {
                this.textarea &&
                  this.textarea.focus &&
                  (this.textarea.focus(), this.textarea.select()),
                  this.props.onStartEdit && this.props.onStartEdit();
              });
            }),
            (this.onBlur = () => {
              this.state.changed || this.setState({ editing: !1 });
            }),
            (this.onSave = () => {
              (this.props.validate && !this.props.validate(this.state.value)) ||
                (this.setState({ editing: !1, changed: !1 }),
                this.props.onSave &&
                  this.props.onSave({ value: this.state.value }));
            }),
            (this.onKeydown = (e) => {
              this.state.editing &&
                (27 === e.keyCode &&
                  (this.props.onCancel && this.props.onCancel(),
                  this.setState({
                    editing: !1,
                    changed: !1,
                    value: this.props.value,
                  }),
                  e.preventDefault(),
                  e.stopPropagation()),
                this.props.useEnter &&
                  13 === e.keyCode &&
                  (this.onSave(), e.preventDefault(), e.stopPropagation()));
            }),
            (this.getRef = (e) => {
              e && e.element && (this.textarea = e.element);
            }),
            (this.state = {
              value: e.value,
              editing: !1,
              changed: !!e.onChange && e.changed,
            });
        }
        UNSAFE_componentWillReceiveProps(e) {
          this.setState({
            value: e.value,
            changed: e.onChange ? e.changed : e.value === this.state.value,
          });
        }
        componentDidMount() {
          (this.el = r.findDOMNode(this)),
            this.el.addEventListener("keydown", this.onKeydown);
        }
        componentWillUnmount() {
          this.el.removeEventListener("keydown", this.onKeydown);
        }
        render() {
          var e = this.props,
            t = e.className,
            s = e.validate,
            r = e.placeholder,
            l = this.state,
            c = l.editing,
            d = l.changed,
            u = l.value,
            h = (0, a.classNames)(
              "EditableLabel",
              {
                "EditableLabel--editing": c,
                "EditableLabel--changed": d,
                "EditableLabel--invalid": s && !s(u),
                "EditableLabel--placeholder": !u.trim() && r,
              },
              t
            );
          return n.createElement(
            "div",
            { className: h },
            c
              ? n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(i.default, {
                    className: "EditableLabel__textarea",
                    onChange: this.onChange,
                    onInput: this.onChange,
                    onPaste: this.onChange,
                    value: u,
                    onBlur: this.onBlur,
                    style: Object.assign({}, o, this.props.textareaStyles),
                    rows: "1",
                    ref: this.getRef,
                    placeholder: r,
                  }),
                  d &&
                    n.createElement("button", {
                      className: "EditableLabel__save",
                      onClick: this.onSave,
                    })
                )
              : n.createElement(
                  "div",
                  { className: "EditableLabel__text", onClick: this.onClick },
                  u.trim() ? u : r
                )
          );
        }
      }
      l.defaultProps = {
        value: "",
        changed: !1,
        useEnter: !1,
        textareaStyles: {},
        placeholder: "",
      };
    },
    919316: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(667294),
        r = (s(45697), s(659397)),
        a = s(664891),
        i = s(713696);
      class o extends n.PureComponent {
        constructor(e) {
          super(e),
            (this.onError = () => {
              this.setState({ errored: !0 });
            }),
            (this.state = { errored: !1 });
        }
        getPhotoImage() {
          var e = this.props,
            t = e.photo,
            s = e.title;
          return n.createElement("img", {
            src: this.state.errored ? "/images/camera_c.gif" : t,
            alt: s,
            onError: this.onError,
            className: "Entity__photo",
          });
        }
        render() {
          var e = this.props,
            t = e.onLinkClick,
            s = e.className,
            o = e.style,
            l = e.size,
            c = e.photo,
            d = e.href,
            u = e.title,
            h = e.description,
            p = e.target,
            m = e.linkClassName,
            v = { [`Entity--size${l}`]: !!l },
            f = e.ignoreDecodeHTML ? u : (0, i.decodeHTMLEntities)(u);
          return n.createElement(
            "div",
            {
              className: (0, r.classNames)("Entity", s, v),
              style: o,
              onClick: this.props.onClick,
            },
            n.createElement(
              "div",
              { className: "Entity__aside" },
              "string" == typeof c
                ? d
                  ? n.createElement(
                      "a",
                      { href: d, target: p },
                      this.getPhotoImage()
                    )
                  : this.getPhotoImage()
                : c
            ),
            n.createElement(
              "div",
              { className: "Entity__main" },
              u && d
                ? n.createElement(
                    "div",
                    { className: "Entity__title" },
                    n.createElement(
                      a.default,
                      { onClick: t, className: m, href: d, target: p },
                      f
                    )
                  )
                : n.createElement("div", { className: "Entity__title" }, f),
              "string" != typeof h
                ? n.createElement(
                    "div",
                    { className: "Entity__description" },
                    h
                  )
                : n.createElement(
                    "div",
                    { className: "Entity__description" },
                    (0, i.decodeHTMLEntities)(h)
                  )
            )
          );
        }
      }
      o.defaultProps = {
        size: null,
        photo: "",
        title: "",
        description: "",
        href: "",
        target: null,
        ignoreDecodeHTML: !1,
        onLinkClick: () => {},
      };
    },
    928385: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(664891)),
        a = s(659397);
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      function o(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class l extends n.Component {
        constructor(e) {
          super(e),
            (this.changeHandler = (e) => {
              this.setState({ value: e.target.value }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.onMouseEnter = () => this.setState({ hovered: !0 })),
            (this.onMouseLeave = () => this.setState({ hovered: !1 })),
            (this.state = { value: null, hovered: !1 }),
            (this.inputRef = n.createRef());
        }
        render() {
          var e = this.props,
            t = e.style,
            s = (e.label, e.children, e.className),
            l = o(e, ["style", "label", "children", "className"]);
          return n.createElement(
            "span",
            { className: (0, a.classNames)("File", s), style: t },
            n.createElement(
              "label",
              {
                className: "File__in",
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              },
              n.createElement(
                "input",
                i({}, l, {
                  ref: this.inputRef,
                  className: "File__self",
                  type: "file",
                  onChange: this.changeHandler,
                })
              )
            ),
            n.createElement(
              r.default,
              { hovered: this.state.hovered },
              this.props.children
            )
          );
        }
      }
      l.defaultProps = { style: {}, onChange: () => {} };
    },
    479806: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      const o = (e) => {
        var t = e.className,
          s = i(e, ["className"]);
        return n.createElement(
          "div",
          a({ className: (0, r.classNames)("HintIcon", t) }, s)
        );
      };
    },
    423985: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l });
      s(530522), s(66108), s(296253), s(579665), s(95767), s(850110);
      var n = s(667294),
        r = (s(45697), s(439664)),
        a = s(659397);
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var s =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == s) return;
            var n,
              r,
              a = [],
              i = !0,
              o = !1;
            try {
              for (
                s = s.call(e);
                !(i = (n = s.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                i = !0
              );
            } catch (e) {
              (o = !0), (r = e);
            } finally {
              try {
                i || null == s.return || s.return();
              } finally {
                if (o) throw r;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return o(e, t);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === s && e.constructor && (s = e.constructor.name);
            if ("Map" === s || "Set" === s) return Array.from(e);
            if (
              "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            )
              return o(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
        return n;
      }
      class l extends n.Component {
        constructor(e) {
          super(e),
            (this.checkLoad = (0, a.throttle)((e) => {
              var t = i(e, 3),
                s = t[0],
                n = t[1],
                r = t[2];
              if (!this.loading) {
                if (!this.props.virtualized && !this.props.hasMore) {
                  if (this.props.onScroll) return;
                  return this.detachListeners();
                }
                n - s - r <= this.props.threshold &&
                  ((this.loading = !0),
                  this.props.loadMore().then(() => {
                    this.loading = !1;
                  }));
              }
            }, 34)),
            (this.onScroll = (e) => {
              var t = this.getScrollData();
              this.props.onScroll && this.props.onScroll(e),
                this.props.virtualized &&
                  this.processChildren(this.props.children, t),
                this.props.hasMore && this.checkLoad(t);
            }),
            (this.getRef = (e) => {
              (this.container = e),
                this.props.virtualized &&
                  this.setState(
                    this.getChildrenData(
                      this.props.children,
                      this.getScrollData()
                    )
                  );
            }),
            (this.useWindowScroll = e.useWindowScroll),
            e.virtualized &&
              (this.state = {
                before: 0,
                after: e.children.length,
                start: 0,
                end: 0,
              });
        }
        getScrollData() {
          var e = this.useWindowScroll
            ? document.documentElement
            : this.container;
          return [
            this.getScrollTop(),
            e ? e.scrollHeight : 0,
            e ? e.clientHeight : 0,
          ];
        }
        getScrollTop() {
          var e =
            document.documentElement ||
            document.body.parentNode ||
            document.body;
          return this.useWindowScroll
            ? void 0 !== window.pageYOffset
              ? window.pageYOffset
              : e.scrollTop
            : this.container
            ? this.container.scrollTop
            : 0;
        }
        attachListeners() {
          var e = this.useWindowScroll ? window : this.container;
          this.container &&
            (e.addEventListener("scroll", this.onScroll, this.props.useCapture),
            e.addEventListener("resize", this.onScroll, this.props.useCapture));
        }
        detachListeners() {
          var e = this.useWindowScroll ? window : this.container;
          this.container &&
            (e.removeEventListener(
              "scroll",
              this.onScroll,
              this.props.useCapture
            ),
            e.removeEventListener(
              "resize",
              this.onScroll,
              this.props.useCapture
            ));
        }
        processChildren(e, t) {
          var s = this.state,
            n = this.getChildrenData(e, t || this.getScrollData()),
            r = n.start,
            a = n.end,
            i = n.before,
            o = n.after;
          (r === s.start && a === s.end && i === s.before && o === s.after) ||
            this.setState(n);
        }
        getChildrenData(e, t) {
          var s = i(t, 3),
            n = s[0],
            r = s[1],
            a = s[2],
            o = this.useWindowScroll ? window : this.container,
            l = o && o.offsetHeight;
          if (!o || 0 === r || 0 === a)
            return { start: 0, end: 0, before: 0, after: e.length };
          a = Math.max(a, l);
          var c = e.length,
            d = Math.max(Math.floor(n / this.props.itemHeight) - 1, 0),
            u = Math.min(
              Math.floor((n + 2 * a) / this.props.itemHeight + 1),
              c
            );
          return { start: d, end: u, before: d, after: c - u };
        }
        UNSAFE_componentWillReceiveProps(e) {
          this.props.virtualized && this.processChildren(e.children);
        }
        componentDidMount() {
          this.attachListeners();
        }
        componentWillUnmount() {
          this.detachListeners();
        }
        render() {
          return n.createElement(
            "div",
            {
              className: (0, a.classNames)(
                "InfiniteScroll",
                this.props.className
              ),
              ref: this.getRef,
              style: this.props.style,
            },
            this.props.virtualized &&
              this.state.before > 0 &&
              n.createElement("div", {
                style: { height: this.state.before * this.props.itemHeight },
                key: "before",
              }),
            this.props.virtualized
              ? []
                  .concat(this.props.children)
                  .slice(this.state.start, this.state.end)
              : this.props.children,
            this.props.virtualized &&
              this.state.after > 0 &&
              n.createElement("div", {
                style: { height: this.state.after * this.props.itemHeight },
                key: "after",
              }),
            this.props.hasMore &&
              (this.props.loader ||
                n.createElement(
                  "div",
                  { className: "InfiniteScroll__loader", key: "loader" },
                  n.createElement(r.default, { color: this.props.spinnerColor })
                ))
          );
        }
      }
      l.defaultProps = {
        useWindowScroll: !1,
        virtualized: !1,
        hasMore: !0,
        useCapture: !1,
        threshold: 100,
        itemHeight: 55,
      };
    },
    889366: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class o extends n.Component {
        constructor(e) {
          super(e),
            (this.onChange = (e) => {
              this.isControlledOutside ||
                this.setState({ value: e.target.value }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.getRef = (e) => {
              this.element = e;
            }),
            (this.onFocus = (e) => {
              this.props.onFocus && this.props.onFocus(e);
            }),
            void 0 !== e.value || e.isControlledOutside
              ? (this.isControlledOutside = !0)
              : (this.state = { value: e.initialValue || "" });
        }
        render() {
          var e = this.props,
            t = e.alignment,
            s = e.value,
            o = (e.onChange, e.initialValue, e.className),
            l = (e.isControlledOutside, e.isError),
            c = i(e, [
              "alignment",
              "value",
              "onChange",
              "initialValue",
              "className",
              "isControlledOutside",
              "isError",
            ]),
            d = {
              "Input--left": "left" === t,
              "Input--center": "center" === t,
              "Input--right": "right" === t,
              "Input--error": !!l,
            };
          return n.createElement(
            "input",
            a({}, c, {
              className: (0, r.classNames)("Input", d, o),
              ref: this.getRef,
              value: this.isControlledOutside ? s : this.state.value,
              onChange: this.onChange,
              onFocus: this.onFocus,
            })
          );
        }
      }
      o.defaultProps = { type: "text", initialValue: "", alignment: "left" };
    },
    842025: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => c });
      s(175115),
        s(530522),
        s(850110),
        s(579665),
        s(95767),
        s(991181),
        s(856997),
        s(66108),
        s(296253),
        s(21466);
      var n = s(667294),
        r = (s(45697), s(889366));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var s =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == s) return;
            var n,
              r,
              a = [],
              i = !0,
              o = !1;
            try {
              for (
                s = s.call(e);
                !(i = (n = s.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                i = !0
              );
            } catch (e) {
              (o = !0), (r = e);
            } finally {
              try {
                i || null == s.return || s.return();
              } finally {
                if (o) throw r;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return o(e, t);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === s && e.constructor && (s = e.constructor.name);
            if ("Map" === s || "Set" === s) return Array.from(e);
            if (
              "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            )
              return o(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
        return n;
      }
      function l(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      function c(e) {
        var t = e.onCommit,
          s = e.value,
          o = e.postText,
          c = void 0 === o ? "" : o,
          d = e.minValue,
          u = e.maxValue,
          h = e.allowEmpty,
          p = e.pattern,
          m = void 0 === p ? null : p,
          v = e.isControlledOutside,
          f = l(e, [
            "onCommit",
            "value",
            "postText",
            "minValue",
            "maxValue",
            "allowEmpty",
            "pattern",
            "isControlledOutside",
          ]),
          g = n.useRef(),
          _ = i(n.useState(void 0 === s ? "" : s), 2),
          y = _[0],
          N = _[1],
          b = i(n.useState(!1), 2),
          w = b[0],
          x = b[1];
        return (
          (0, n.useEffect)(() => {
            v && N(s);
          }, [s]),
          n.createElement(
            r.default,
            a({}, f, {
              ref: g,
              value: w || "" === y ? y : "function" == typeof c ? c(y) : y + c,
              isControlledOutside: !0,
              onFocus: () => {
                if ((x(!0), g.current)) {
                  var e = g.current.element;
                  (e.value = y), e.select();
                }
              },
              onChange: function (e) {
                var t = e.target.value;
                (m && !t.match(m)) || N(t);
              },
              onBlur: function () {
                if ((x(!1), h && "" === y)) return t("");
                if ((y && y.toString().trim()) !== (s && s.toString().trim())) {
                  var e = Math.min(u, Math.max(d, parseFloat(y) || 0));
                  N(e), t(e);
                }
              },
              onKeyDown: (e) => {
                "Enter" === e.key && g.current.element.blur();
              },
            })
          )
        );
      }
      c.defaultProps = {
        minValue: -1 / 0,
        maxValue: 1 / 0,
        onCommit: () => {},
        pattern: null,
      };
    },
    235445: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => i });
      s(319371);
      var n = s(667294),
        r = (s(45697), s(973935)),
        a = s(659397);
      class i extends n.Component {
        constructor(e) {
          super(e),
            (this.handleMouseDown = (e) => {
              this.props.onFocus &&
                "function" == typeof this.props.onFocus &&
                this.props.onFocus(this.state.isOpen),
                ("mousedown" === e.type && 0 !== e.button) ||
                  (e.stopPropagation(),
                  e.preventDefault(),
                  this.props.disabled ||
                    this.setState({ isOpen: !this.state.isOpen }));
            }),
            (this.setValue = (e, t) => {
              var s = { selected: { value: e, label: t }, isOpen: !1 };
              this.fireChangeEvent(s), this.setState(s);
            }),
            (this.fireChangeEvent = (e) => {
              e.selected !== this.state.selected &&
                this.props.onChange &&
                this.props.onChange({
                  name: this.props.name,
                  selected: e.selected,
                });
            }),
            (this.handleDocumentClick = (e) => {
              this.mounted &&
                this.state.isOpen &&
                !this.el.contains(e.target) &&
                this.setState({ isOpen: !1 });
            }),
            (this.state = { selected: i.getSelected(e), isOpen: !1 }),
            (this.mounted = !0);
        }
        UNSAFE_componentWillReceiveProps(e) {
          var t = i.getSelected(e);
          t !== this.state.selected && this.setState({ selected: t });
        }
        componentDidMount() {
          (this.el = r.findDOMNode(this)),
            document.addEventListener("click", this.handleDocumentClick, !1),
            document.addEventListener("touchend", this.handleDocumentClick, !1);
        }
        componentWillUnmount() {
          (this.mounted = !1),
            document.removeEventListener("click", this.handleDocumentClick, !1),
            document.removeEventListener(
              "touchend",
              this.handleDocumentClick,
              !1
            );
        }
        static getSelected(e) {
          var t = e.value;
          return void 0 !== t
            ? e.options.find((e) =>
                "object" != typeof e ? e === t : e.value === t
              )
            : { label: e.placeholder || "", value: "" };
        }
        renderOption(e) {
          var t = (0, a.classNames)("LegacySelect__option", {
              "LegacySelect__option--selected": e === this.state.selected,
            }),
            s = void 0 !== e.value ? e.value : e.label || e,
            r = void 0 !== e.label ? e.label : e;
          return n.createElement(
            "div",
            {
              key: s,
              className: t,
              onMouseDown: () => this.setValue(s, r),
              onClick: () => this.setValue(s, r),
            },
            r
          );
        }
        buildMenu() {
          var e = this.props.options.map((e) =>
            "group" === e.type
              ? n.createElement(
                  "div",
                  { className: "LegacySelect__group", key: e.name },
                  e.name &&
                    n.createElement(
                      "div",
                      { className: "LegacySelect__title" },
                      e.name
                    ),
                  e.items.map((e) => this.renderOption(e))
                )
              : this.renderOption(e)
          );
          return e.length
            ? e
            : n.createElement(
                "div",
                { className: "LegacySelect__noresults" },
                "No options found"
              );
        }
        render() {
          var e = this.props,
            t = e.className,
            s = e.style,
            r = (0, a.classNames)("LegacySelect", t, {
              "LegacySelect--opened": this.state.isOpen,
              "LegacySelect--disabled": this.props.disabled,
            });
          return n.createElement(
            "div",
            { className: r, style: s },
            n.createElement(
              "div",
              {
                className: "LegacySelect__control",
                onClick: this.handleMouseDown,
              },
              n.createElement(
                "div",
                { className: "LegacySelect__placeholder" },
                "string" == typeof this.state.selected
                  ? this.state.selected
                  : this.state.selected.label
              ),
              n.createElement("div", { className: "LegacySelect__arrow" })
            ),
            this.state.isOpen &&
              n.createElement(
                "div",
                { className: "LegacySelect__menu" },
                this.buildMenu()
              )
          );
        }
      }
    },
    777527: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      s(175115);
      var n = s(667294);
      s(45697);
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      class a extends n.Component {
        constructor(e) {
          if (
            (super(e),
            this.props.defaultValue < 0 || this.props.defaultValue > 1)
          )
            throw new Error("Bad defaultValue specified to Slider");
          this.containerRef = n.createRef();
        }
        componentDidUpdate(e) {
          this.props.value !== e.value &&
            this.sliderElement.setValue(this.props.value, !0);
        }
        componentDidMount() {
          this.sliderElement = new window.Slider(
            this.containerRef.current,
            r(
              {
                size: 1,
                value: this.props.defaultValue,
                formatHint: this.props.formatHint,
                onChange: this.props.onChange,
              },
              this.props
            )
          );
        }
        render() {
          return n.createElement("div", {
            className: `SliderLegacy SliderLegacy--${this.props.color} ${this.props.className}`,
            ref: this.containerRef,
          });
        }
      }
      a.defaultProps = {
        color: "blue",
        defaultValue: 0.5,
        formatHint: (e) => Math.round(100 * e),
      };
    },
    664891: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class o extends n.Component {
        render() {
          var e = this.props,
            t = e.onClick,
            s = e.hovered,
            o = e.className,
            l = e.children,
            c = i(e, ["onClick", "hovered", "className", "children"]),
            d = (0, r.classNames)("Link", { "Link--hovered": !!s }, o);
          return this.props.href
            ? n.createElement("a", a({ onClick: t }, c, { className: d }), l)
            : n.createElement(
                "span",
                a({ onClick: t }, c, { className: d }),
                l
              );
        }
      }
      o.defaultProps = { href: void 0, hovered: !1, onClick: () => {} };
    },
    2291: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      var n = s(667294),
        r = (s(45697), s(659397));
      function a(e) {
        var t = { "List--border": !!e.border };
        return n.createElement(
          "ul",
          {
            className: (0, r.classNames)("List", t, e.className),
            style: e.style,
          },
          e.children
        );
      }
      a.defaultProps = { border: !0 };
    },
    654857: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      s(319371);
      var n = s(667294),
        r = (s(45697), s(659397));
      class a extends n.Component {
        render() {
          var e = this.props,
            t = e.photos,
            s = e.links,
            a = e.linkTarget,
            i = e.onLinkClick,
            o = e.className,
            l = (0, r.classNames)(
              "MembersGrid",
              `MembersGrid--${Math.min(t.length, 4)}`,
              o
            );
          return n.createElement(
            "div",
            { className: l },
            t.map((e, t) => {
              var r = s && s[t] ? s[t] : void 0,
                o = r ? "a" : "span";
              return n.createElement(o, {
                key: t,
                href: r,
                target: a,
                onClick: (e) => i(e),
                className: "MembersGrid__i",
                style: { backgroundImage: `url(${e})` },
              });
            })
          );
        }
      }
      a.defaultProps = { links: [], className: "" };
    },
    161650: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => u });
      s(175115);
      var n = s(667294),
        r = (s(45697), s(730365)),
        a = s(743927),
        i = s(476288),
        o = s(150382),
        l = s(659397);
      function c() {
        return (
          (c =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          c.apply(this, arguments)
        );
      }
      var d = (e) => {
        var t = e.className,
          s = e.appearance,
          d = void 0 === s ? "white" : s,
          u = e.title,
          h = e.actionButtons,
          p = e.onClose,
          m = e.children,
          v = e.footerHint,
          f = e.hasScroll,
          g = e.backText,
          _ = e.onBack,
          y = (0, l.classNames)("Modal", `Modal--${d}`, t);
        return n.createElement(
          r.default,
          c({}, e, { className: y }),
          n.createElement(a.ModalHeader, {
            title: u,
            onClose: p,
            backText: g,
            onBack: _,
          }),
          Boolean(m) && n.createElement(i.ModalBody, { hasScroll: f }, m),
          n.createElement(o.ModalFooter, { actionButtons: h, hint: v })
        );
      };
      (d.Header = a.ModalHeader),
        (d.Body = i.ModalBody),
        (d.Footer = o.ModalFooter);
      const u = d;
    },
    102690: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      s(319371), s(991181), s(856997), s(296253), s(850110);
      var n = s(667294),
        r = (s(45697), s(659397));
      class a extends n.PureComponent {
        constructor(e) {
          super(e),
            (this.onPageLinkClick = (e) => {
              e.preventDefault();
              var t = this.props.onSelect;
              t && t(Number(e.target.dataset.index));
            }),
            (this.linkGetter = this.props.linkGetter || (() => {}));
        }
        renderPageLink(e, t) {
          var s = this.linkGetter(e);
          return n.createElement(
            "a",
            {
              key: e,
              href: s,
              "data-index": e,
              className: (0, r.classNames)("Pagination__link", {
                "Pagination__link--selected": e === this.props.current,
              }),
              onClick: this.onPageLinkClick,
            },
            t || e + 1
          );
        }
        render() {
          var e = this.props,
            t = e.count,
            s = e.current,
            r = [...Array(t).keys()].slice(
              Math.max(s - this.props.range, 0),
              s + this.props.range + 1
            ),
            a = r[0] > 0,
            i = r[r.length - 1] < t - 1;
          return n.createElement("div", { className: "Pagination" }, [
            a && this.renderPageLink(0, this.props.prevLabel),
            r.map((e) => this.renderPageLink(e)),
            i && this.renderPageLink(t - 1, this.props.nextLabel),
          ]);
        }
      }
      a.defaultProps = { range: 2, prevLabel: "«", nextLabel: "»" };
    },
    268959: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(667294),
        r = (s(45697), s(659397)),
        a = s(188889),
        i = s(733024);
      function o(e) {
        return n.createElement(
          "header",
          {
            className: (0, r.classNames)("PopupHeader", e.className),
            style: e.style,
          },
          e.back &&
            n.createElement(
              "div",
              { className: "PopupHeader__back", onClick: e.onBackClick },
              n.createElement(
                "button",
                { className: "PopupHeader__backBtn", onClick: e.onBackClick },
                n.createElement(
                  "span",
                  { className: "PopupHeader__backIcon" },
                  n.createElement(a.default, null)
                ),
                e.back
              )
            ),
          n.createElement("h2", { className: "PopupHeader__title" }, e.title),
          n.createElement(
            "div",
            { className: "PopupHeader__close" },
            n.createElement(
              "button",
              { className: "PopupHeader__closeBtn", onClick: e.onCloseClick },
              n.createElement(i.default, null)
            )
          )
        );
      }
      o.defaultProps = { back: null, title: "", onCloseClick: () => {} };
    },
    863729: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l, connect: () => c });
      s(175115);
      var n = s(667294);
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      var a = n.createContext(),
        i = a.Provider,
        o = a.Consumer;
      const l = i;
      function c(e) {
        var t;
        return (
          (t = class extends n.Component {
            constructor() {
              super(...arguments),
                (this.onUpdate = () => {
                  this.setState({});
                });
            }
            componentDidMount() {
              this.store.subscribe(this.onUpdate);
            }
            componentWillUnmount() {
              this.store.unsubscribe(this.onUpdate);
            }
            render() {
              return n.createElement(
                o,
                null,
                (t) => (
                  this.store || (this.store = t),
                  n.createElement(e, r({}, this.props, { store: t }))
                )
              );
            }
          }),
          t
        );
      }
    },
    470720: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => d });
      s(175115), s(95767), s(991181), s(856997), s(319371), s(66108), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397)),
        a = s(423985),
        i = s(787255),
        o = s(362913);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function c(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class d extends n.PureComponent {
        constructor(e) {
          super(e),
            (this.onRemoveToken = (e) => {
              var t = this.searchContainer && this.searchContainer.offsetHeight;
              this.props
                .onRemoveToken(e.target.getAttribute("data-id"))
                .then(() => {
                  (t || 0 === t) && this.updateScroll(t);
                });
            }),
            (this.onChange = (e) => {
              var t = e.target.value;
              t !== this.value &&
                ((this.value = t),
                this.props.onChange(e),
                (this.scrollContainer.scrollTop = 0));
            }),
            (this.onSelect = (e) => {
              var t = this.searchContainer && this.searchContainer.offsetHeight;
              this.props
                .onSelect(e.currentTarget.getAttribute("data-id"))
                .then(() => {
                  (t || 0 === t) && this.updateScroll(t);
                });
            }),
            (this.updateScroll = (e) => {
              var t = this.searchContainer.offsetHeight;
              this.searchContainer.querySelector("#" + this.inputId).focus(),
                (this.searchContainer.scrollTop =
                  this.searchContainer.scrollHeight),
                e !== t &&
                  (this.scrollContainer.scrollTop =
                    this.scrollContainer.scrollTop + t - e);
            }),
            (this.searchContainerRef = (e) => {
              this.searchContainer = e;
            }),
            (this.scrollContainerRef = (e) => {
              var t = e;
              if (e && e.container) for (t = e; t.container; ) t = t.container;
              this.scrollContainer = t;
            }),
            (this.value = e.value),
            (this.inputId =
              "token-input-" + Math.floor(1e6 * Math.random()).toString(16));
        }
        render() {
          var e = this.props,
            t = e.className,
            s = e.tokens,
            d = (e.onSelect, e.renderToken),
            u = e.onRemoveToken,
            h = e.removeTokenPlaceholder,
            p = e.value,
            m = e.placeholder,
            v = e.useInfiniteScroll,
            f = e.loadMore,
            g = e.hasMore,
            _ = e.virtualized,
            y = e.notFoundText,
            N = e.children,
            b = e.emptyText,
            w = e.isSearching,
            x = e.renderSuggest,
            S = e.useSuggestsWrapper,
            E = e.data,
            C = e.renderInput,
            k = e.opened,
            O = e.badge,
            j = e.disableEmptyList,
            M = c(e, [
              "className",
              "tokens",
              "onSelect",
              "renderToken",
              "onRemoveToken",
              "removeTokenPlaceholder",
              "value",
              "placeholder",
              "useInfiniteScroll",
              "loadMore",
              "hasMore",
              "virtualized",
              "notFoundText",
              "children",
              "emptyText",
              "isSearching",
              "renderSuggest",
              "useSuggestsWrapper",
              "data",
              "renderInput",
              "opened",
              "badge",
              "disableEmptyList",
            ]),
            P = v ? a.default : "div",
            T = v
              ? { loadMore: f, hasMore: g, virtualized: _, useCapture: !1 }
              : {},
            L = N ? [].concat(N) : [],
            D =
              (!E && 0 === L.length) ||
              (!!E && 0 === E.length && (p || b) && !w),
            R = n.createElement(
              n.Fragment,
              null,
              D &&
                !j &&
                n.createElement(
                  "div",
                  { className: "MultiSelect__empty" },
                  n.createElement(
                    "div",
                    { className: "MultiSelect__emptyIn" },
                    p ? y : b
                  )
                ),
              n.createElement(
                P,
                l(
                  {
                    className: "MultiSelect__scroll",
                    ref: this.scrollContainerRef,
                  },
                  T
                ),
                E
                  ? E.map((e) => x(e, this.onSelect))
                  : L.map((e) =>
                      x
                        ? x(e, this.onSelect)
                        : n.createElement(
                            i.default,
                            {
                              className: "MultiSelect__suggestsItem",
                              "data-id": e.props["data-id"],
                              onClick: this.onSelect,
                              key: e.key,
                            },
                            e
                          )
                    )
              )
            ),
            I = C
              ? C()
              : n.createElement(
                  "div",
                  {
                    className: "MultiSelect__search",
                    ref: this.searchContainerRef,
                  },
                  n.createElement(
                    o.default,
                    l(
                      {
                        id: this.inputId,
                        tokens: s,
                        onRemoveToken: u,
                        removeTokenTooltip: h,
                        removeTokenAriaLabel: h,
                        placeholder: m,
                        onChange: this.onChange,
                        onSubmit: () => {},
                        renderToken: d,
                        value: p,
                      },
                      M,
                      { className: "MultiSelect__searchInput" }
                    )
                  )
                );
          return n.createElement(
            "div",
            { className: (0, r.classNames)("MultiSelect", t) },
            I,
            O,
            (void 0 === k || !0 === k) &&
              (S
                ? n.createElement(
                    "div",
                    { className: "MultiSelect__suggestsWrapper" },
                    R
                  )
                : R)
          );
        }
      }
      d.defaultProps = {
        removeTokenPlaceholder: "",
        placeholder: "",
        value: "",
        useInfiniteScroll: !1,
        notFoundText: "Not found",
        useSuggestsWrapper: !1,
      };
    },
    771982: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      var o = (e) => {
        var t = e.className,
          s = e.children,
          o = i(e, ["className", "children"]),
          l = (0, r.classNames)("Radio", t, { "Radio--disabled": e.disabled });
        return n.createElement(
          "label",
          { className: l },
          n.createElement(
            "input",
            a(
              {
                className: "Radio__input Radio__visuallyHidden",
                type: "radio",
              },
              o
            )
          ),
          n.createElement("span", { className: "Radio__control" }),
          Boolean(s) && n.createElement("span", { className: "Radio__text" }, s)
        );
      };
      o.defaultProps = {
        className: "",
        name: void 0,
        onChange: void 0,
        checked: void 0,
        defaultChecked: void 0,
        autoFocus: !1,
        disabled: !1,
        children: null,
      };
      const l = o;
    },
    32821: (e, t, s) => {
      "use strict";
      s.d(t, { ScrollContext: () => o, Scroll: () => l });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      var o = n.createContext({});
      class l extends n.Component {
        constructor() {
          super(...arguments),
            (this.getWrapperRef = (e) => {
              this.wrapper = e;
            });
        }
        componentDidMount() {
          var e = this.props,
            t = e.isNative,
            s = e.isShadows,
            n = e.neverHide,
            r = e.onScroll;
          !this.scroller &&
            this.context &&
            this.context.createScroll &&
            (this.scroller = this.context.createScroll(this.wrapper, {
              shadows: s,
              nativeScroll: t,
              hidden: !n,
              onScroll: r,
            }));
        }
        componentDidUpdate() {
          this.scroller && this.scroller.update();
        }
        componentWillUnmount() {
          this.scroller && (this.scroller.destroy(), (this.scroller = null));
        }
        render() {
          var e = this.props,
            t = e.children,
            s = (e.isNative, e.isShadows, e.neverHide, e.className),
            o = void 0 === s ? "" : s,
            l = i(e, [
              "children",
              "isNative",
              "isShadows",
              "neverHide",
              "className",
            ]);
          return n.createElement(
            "div",
            a({}, l, {
              className: (0, r.classNames)("Scroll", o),
              ref: this.getWrapperRef,
            }),
            t
          );
        }
      }
      (l.defaultProps = {
        isNative: !1,
        isShadows: !1,
        neverHide: !1,
        onScroll: null,
      }),
        (l.contextType = o);
    },
    439664: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      s(991181), s(856997), s(319371), s(66108), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      class a extends n.Component {
        constructor(e) {
          super(e),
            (this.id = Math.round(1e6 * Math.random()).toString(16)),
            this.setSpinnerParams(e);
        }
        UNSAFE_componentWillReceiveProps(e) {
          this.setSpinnerParams(e);
        }
        setSpinnerParams(e) {
          (this.offset = Math.round(Math.PI * e.size)),
            (this.c = 0.5 * e.size),
            (this.animation = (function (e, t) {
              if (!e || !t) return "";
              var s = Object.keys(t)
                .map(
                  (e) =>
                    e +
                    " {" +
                    Object.keys(t[e])
                      .map((s) => s + ":" + t[e][s])
                      .join(";") +
                    "}"
                )
                .join("");
              return `@-webkit-keyframes ${e} {${s}} @keyframes ${e} {${s}}`;
            })("dash" + this.id, {
              "0%": { "stroke-dashoffset": this.offset },
              "50%": {
                "stroke-dashoffset": Math.round(0.25 * this.offset),
                transform: "rotate(135deg)",
              },
              "100%": {
                "stroke-dashoffset": this.offset,
                transform: "rotate(360deg)",
              },
            }));
        }
        render() {
          var e = this.props,
            t = e.style,
            s = e.color,
            a = void 0 === s ? "var(--icon_secondary)" : s,
            i = e.size,
            o = e.duration,
            l = e.strokeWidth,
            c = e.className,
            d = this.id,
            u = this.offset,
            h = this.animation,
            p = (0, r.classNames)("Spinner", c);
          return n.createElement(
            "div",
            { className: p, style: t },
            n.createElement(
              "svg",
              {
                className: "Spinner__svg",
                width: i,
                height: i,
                viewBox: `0 0 ${i} ${i}`,
                xmlns: "http://www.w3.org/2000/svg",
              },
              n.createElement(
                "g",
                {
                  style: {
                    width: i,
                    height: i,
                    transformOrigin: 0.5 * i + "px " + 0.5 * i + "px",
                  },
                },
                n.createElement("style", {
                  dangerouslySetInnerHTML: { __html: h },
                }),
                n.createElement("circle", {
                  className: "Spinner__path",
                  fill: "none",
                  stroke: a,
                  strokeDasharray: u,
                  strokeDashoffset: u,
                  strokeWidth: l,
                  style: {
                    animationName: "dash" + d,
                    animationTimingFunction: "ease-in-out",
                    animationDuration: o + "s",
                    animationIterationCount: "infinite",
                  },
                  cx: 0.5 * i,
                  cy: 0.5 * i,
                  r: 0.5 * i - 0.5 * l,
                })
              )
            )
          );
        }
      }
      a.defaultProps = {
        color: "#5181b8",
        size: 19,
        strokeWidth: 2,
        duration: 1.4,
        className: "",
      };
    },
    755348: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      var n = s(667294),
        r = s(659397);
      function a(e) {
        var t = {
          "SubmitArea--left": !e.alignment || "left" === e.alignment,
          "SubmitArea--center": "center" === e.alignment,
          "SubmitArea--right": "right" === e.alignment,
        };
        return n.createElement(
          "div",
          {
            className: (0, r.classNames)("SubmitArea", t, e.className),
            style: e.style,
          },
          e.children
        );
      }
    },
    570226: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class o extends n.Component {
        constructor() {
          super(...arguments),
            (this.onChange = (e) => {
              var t = this.props.onChange;
              t &&
                (this.props.native
                  ? t(e)
                  : t(this.props.name, e.target.checked));
            });
        }
        render() {
          var e = this.props,
            t = e.children,
            s = e.checked,
            o = e.disabled,
            l = e.name,
            c = e.type,
            d = void 0 === c ? "checkbox" : c,
            u = e.id,
            h = i(e, ["children", "checked", "disabled", "name", "type", "id"]),
            p = (0, r.classNames)("Switch", h.className, {
              "Switch--disabled": o,
              "Switch--last": !t,
            });
          return n.createElement(
            "label",
            {
              className: p,
              htmlFor: u,
              tabIndex: "-1",
              "aria-checked": !!s,
              role: "checkbox",
            },
            n.createElement(
              "input",
              a({}, h, {
                className: "Switch__input",
                id: u,
                type: d,
                checked: s,
                name: l,
                disabled: o,
                onChange: this.onChange,
              })
            ),
            n.createElement("span", {
              className: "Switch__indicator",
              "aria-hidden": !0,
            }),
            t
          );
        }
      }
    },
    881850: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      var n = s(667294),
        r = (s(45697), s(659397));
      const a = (e) => {
        var t = e.children,
          s = e.className;
        return n.createElement(
          "span",
          { className: (0, r.classNames)("TextTruncate", s) },
          t
        );
      };
    },
    273947: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      s(175115), s(95767), s(991181), s(856997), s(296253);
      var n = s(667294),
        r = (s(45697), s(659397));
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      class o extends n.Component {
        constructor(e) {
          super(e),
            (this.getRef = (e) => {
              this.element = e;
            }),
            (this.resize = () => {
              var e = this.element;
              if (e) {
                var t = e.offsetHeight,
                  s = e.scrollHeight,
                  n = 0;
                s + n <= t && (n = 0),
                  e.value && this.setState({ height: s - n }),
                  this.setState({ height: 0 }, () => {
                    var t = e.scrollHeight - n;
                    this.setState({ height: t }), this.props.onResize(e);
                  });
              }
            }),
            (this.onChange = (e) => {
              this.props.grow && this.resize(),
                this.isControlledOutside ||
                  this.setState({ value: e.target.value }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.state = {
              value: void 0 === e.value ? e.initialValue || "" : void 0,
            }),
            void 0 !== e.value && (this.isControlledOutside = !0);
        }
        componentDidMount() {
          this.props.grow && this.resize();
        }
        render() {
          var e = this.props,
            t = e.className,
            s = (e.initialValue, e.grow, e.style),
            o = (e.onResize, e.value),
            l = i(e, [
              "className",
              "initialValue",
              "grow",
              "style",
              "onResize",
              "value",
            ]),
            c = this.isControlledOutside ? o : this.state.value,
            d = this.state.height || s.height || 66;
          return n.createElement(
            "textarea",
            a({}, l, {
              value: c,
              onChange: this.onChange,
              onInput: this.onChange,
              onPaste: this.onChange,
              ref: this.getRef,
              style: a({}, s, { height: d }),
              className: (0, r.classNames)("Textarea", t),
            })
          );
        }
      }
      o.defaultProps = {
        initialValue: "",
        grow: !0,
        onResize: () => {},
        style: {},
      };
    },
    362913: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => c });
      s(175115), s(95767), s(991181), s(856997), s(296253), s(319371);
      var n = s(667294),
        r = (s(45697), s(659397)),
        a = s(897404),
        i = s(394478);
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      function l(e, t) {
        if (null == e) return {};
        var s,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (s = a[n]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (r[s] = e[s]));
        }
        return r;
      }
      function c(e) {
        var t = e.id,
          s = e.name,
          c = e.tokens,
          d = e.onRemoveToken,
          u = e.removeTokenTooltip,
          h = e.removeTokenAriaLabel,
          p = e.renderToken,
          m = e.onChange,
          v = e.value,
          f = e.placeholder,
          g = e.onSubmit,
          _ = e.className,
          y = e.hideInputWithName,
          N = l(e, [
            "id",
            "name",
            "tokens",
            "onRemoveToken",
            "removeTokenTooltip",
            "removeTokenAriaLabel",
            "renderToken",
            "onChange",
            "value",
            "placeholder",
            "onSubmit",
            "className",
            "hideInputWithName",
          ]),
          b = n.useRef(),
          w = n.useCallback((e) => m(e), [m]),
          x = n.useCallback(
            (e) => {
              "Esc" === e.key &&
                b.current &&
                ((b.current.value = ""),
                b.current.blur(),
                m(e),
                e.stopPropagation()),
                "Enter" === e.key && g();
            },
            [g]
          ),
          S = n.useCallback(
            (e) => {
              var t,
                s,
                n =
                  null === (t = (s = e.target).closest) || void 0 === t
                    ? void 0
                    : t.call(s, "[data-id]").dataset.id;
              n && (d(n), b.current && b.current.focus());
            },
            [d]
          );
        return n.createElement(
          "div",
          { className: (0, r.classNames)("TokenInput", _) },
          n.createElement("label", {
            htmlFor: t,
            className: "TokenInput__back",
          }),
          c.map((e) =>
            n.createElement(
              "span",
              { key: e.id, className: "TokenInput__token" },
              !y &&
                n.createElement("input", {
                  type: "hidden",
                  name: s + "[]",
                  value: e.value || e.id,
                }),
              n.createElement(
                "span",
                { className: "TokenInput__label" },
                p ? p(e) : e.text
              ),
              !e.locked &&
                u &&
                n.createElement(
                  a.default,
                  { text: u },
                  n.createElement(
                    "button",
                    {
                      "data-id": e.id,
                      className: "TokenInput__remove",
                      onClick: S,
                      "aria-label": h,
                    },
                    n.createElement(i.default, null)
                  )
                ),
              !e.locked &&
                !u &&
                n.createElement(
                  "button",
                  {
                    "data-id": e.id,
                    className: "TokenInput__remove",
                    onClick: S,
                    "aria-label": h,
                  },
                  n.createElement(i.default, null)
                )
            )
          ),
          n.createElement(
            "div",
            { className: "TokenInput__caret" },
            n.createElement(
              "div",
              { className: "TokenInput__caretIn" },
              n.createElement(
                "input",
                o({}, N, {
                  id: t,
                  type: "text",
                  value: v,
                  onChange: w,
                  onPaste: w,
                  placeholder: 0 === c.length ? f : "",
                  onKeyDown: x,
                  className: "TokenInput__input",
                  ref: b,
                })
              )
            )
          )
        );
      }
      c.defaultProps = {
        id: "token-input",
        name: "tokens",
        removeTokenTooltip: "",
        removeTokenAriaLabel: "Remove item",
        placeholder: "",
        className: "",
      };
    },
    190355: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => c });
      var n = s(570655),
        r = s(785893),
        a = s(45697),
        i = s.n(a),
        o = s(659397),
        l = function (e) {
          var t = e.children,
            s = e.className,
            a = (0, n.__rest)(e, ["children", "className"]),
            i = (0, o.classNames)("ActivityIndicator", s);
          return (0, r.jsx)(
            "span",
            (0, n.__assign)({}, a, { className: i }, { children: t }),
            void 0
          );
        };
      l.propTypes = { className: i().string, children: i().node };
      const c = l;
    },
    113142: (e, t, s) => {
      "use strict";
      s.d(t, { AlertType: () => n, Alert: () => d });
      var n,
        r = s(570655),
        a = s(785893),
        i = s(659397),
        o = s(21414),
        l = s(662986),
        c = s(608810);
      !(function (e) {
        (e.Done = "done"),
          (e.Wrong = "wrong"),
          (e.Warning = "warning"),
          (e.Info = "info");
      })(n || (n = {}));
      var d = function (e) {
        var t = e.type,
          s = void 0 === t ? n.Info : t,
          d = e.children,
          u = e.icon,
          h = void 0 === u ? null : u,
          p = e.className;
        if (!h)
          switch (s) {
            case n.Done:
              h = (0, a.jsx)(o.default, { className: "Alert__icon" }, void 0);
              break;
            case n.Wrong:
              h = (0, a.jsx)(l.default, { className: "Alert__icon" }, void 0);
              break;
            case n.Warning:
              h = (0, a.jsx)(c.default, { className: "Alert__icon" }, void 0);
          }
        var m,
          v = null;
        switch (s) {
          case n.Done:
          case n.Info:
            (v = "status"), (m = "polite");
            break;
          case n.Wrong:
          case n.Warning:
            (v = "alert"), (m = "assertive");
        }
        return (0, a.jsxs)(
          "div",
          (0, r.__assign)(
            {
              className: (0, i.classNames)("Alert", "Alert--" + s, p),
              role: v,
              "aria-live": m,
            },
            {
              children: [
                h,
                (0, a.jsx)(
                  "div",
                  (0, r.__assign)(
                    { className: "Alert__content" },
                    { children: d }
                  ),
                  void 0
                ),
              ],
            }
          ),
          void 0
        );
      };
    },
    650008: (e, t, s) => {
      "use strict";
      s.d(t, { AvatarsStack: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(6969),
        i = s(406042),
        o = function (e) {
          var t = e.items;
          return (0, r.jsxs)(
            "figure",
            (0, n.__assign)(
              { className: "AvatarsStack" },
              {
                children: [
                  (0, r.jsx)(
                    a.default,
                    {
                      children: (0, r.jsx)(
                        "svg",
                        (0, n.__assign)(
                          { xmlns: "http://www.w3.org/2000/svg" },
                          {
                            children: (0, r.jsx)(
                              "defs",
                              {
                                children: (0, r.jsx)(
                                  "clipPath",
                                  (0, n.__assign)(
                                    { id: "users-mask" },
                                    {
                                      children: (0, r.jsx)(
                                        "path",
                                        {
                                          d: "M43.56 8.25a25 25 0 100 33.5A27.88 27.88 0 0138 25c0-6.28 2.07-12.08 5.56-16.75z",
                                        },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              },
                              void 0
                            ),
                          }
                        ),
                        void 0
                      ),
                    },
                    void 0
                  ),
                  t.map(function (e, t) {
                    return "src" in e
                      ? (0, r.jsx)(
                          "img",
                          {
                            src: e.src,
                            className: "AvatarsStack__item",
                            alt: e.alt,
                          },
                          e.key || t
                        )
                      : (0, r.jsx)(
                          i.ConversationNoPhoto,
                          {
                            text: e.text,
                            id: e.id,
                            size: "50",
                            className: "AvatarsStack__item",
                          },
                          e.key || t
                        );
                  }),
                ],
              }
            ),
            void 0
          );
        };
    },
    980170: (e, t, s) => {
      "use strict";
      s.d(t, { AvatarsStackNoSvgSizes: () => n, AvatarsStackNoSvg: () => l });
      var n,
        r = s(570655),
        a = s(785893),
        i = s(406042),
        o = s(659397);
      !(function (e) {
        (e.SIZE_50 = "50"), (e.SIZE_34 = "34"), (e.SIZE_24 = "24");
      })(n || (n = {}));
      var l = function (e) {
        var t = e.items,
          s = e.size,
          l = void 0 === s ? n.SIZE_50 : s;
        return (0, a.jsx)(
          "div",
          (0, r.__assign)(
            { className: "AvatarsStackNoSvg" },
            {
              children: t.map(function (e, t) {
                var s = (0, o.classNames)(
                  "AvatarsStackNoSvg__item",
                  "AvatarsStackNoSvg__item--" + l
                );
                return "src" in e
                  ? (0, a.jsx)(
                      "img",
                      { src: e.src, className: s, alt: e.alt },
                      e.key || t
                    )
                  : (0, a.jsx)(
                      i.ConversationNoPhoto,
                      { text: e.text, id: e.id, size: l, className: s },
                      e.key || t
                    );
              }),
            }
          ),
          void 0
        );
      };
    },
    195200: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(973935),
        o = s(659397);
      const l = function (e) {
        var t,
          s = e.x,
          l = e.y,
          c = e.text,
          d = e.position,
          u = void 0 === d ? "b" : d,
          h = e.align,
          p = void 0 === h ? "center" : h,
          m = e.removed,
          v = e.maxWidth,
          f = e.appearance,
          g = void 0 === f ? "dark" : f,
          _ = e.className,
          y = e.tooltipRef,
          N = e.tooltipInRef,
          b = e.arrow,
          w = (0, n.__rest)(e, [
            "x",
            "y",
            "text",
            "position",
            "align",
            "removed",
            "maxWidth",
            "appearance",
            "className",
            "tooltipRef",
            "tooltipInRef",
            "arrow",
          ]),
          x = (0, a.useRef)(null);
        w.static ||
          x.current ||
          ((x.current = document.createElement("div")),
          document.body.appendChild(x.current));
        var S = (0, o.classNames)(
            "Tooltip",
            "Tooltip--" + u,
            "Tooltip--" + g,
            (((t = { "Tooltip--static": w.static, "Tooltip--removed": !!m })[
              "Tooltip--align-" + p
            ] = "t" === u || "b" === u),
            (t["Tooltip--arrow-" + b] = "r" === u || "l" === u || "hide" === b),
            t),
            _
          ),
          E = (0, r.jsxs)(
            "div",
            (0, n.__assign)(
              {},
              w,
              {
                className: S,
                ref: y,
                style: w.static ? {} : { top: l, left: s },
              },
              {
                children: [
                  "string" == typeof c &&
                    (0, r.jsx)(
                      "div",
                      {
                        className: "Tooltip__in",
                        ref: N,
                        style: { maxWidth: v },
                        dangerouslySetInnerHTML: { __html: c },
                      },
                      void 0
                    ),
                  "string" != typeof c &&
                    (0, r.jsx)(
                      "div",
                      (0, n.__assign)(
                        {
                          className: "Tooltip__in",
                          ref: N,
                          style: { maxWidth: v },
                        },
                        { children: c }
                      ),
                      void 0
                    ),
                ],
              }
            ),
            void 0
          );
        return w.static ? E : x.current ? (0, i.createPortal)(E, x.current) : E;
      };
    },
    878517: (e, t, s) => {
      "use strict";
      s.d(t, { BlockSearchInput: () => l });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397),
        o = s(889366),
        l = (0, a.forwardRef)(function (e, t) {
          var s = e.className,
            a = (0, n.__rest)(e, ["className"]);
          return (0,
          r.jsx)(o.default, (0, n.__assign)({}, a, { className: (0, i.classNames)(s, "BlockSearchInput"), ref: t }), void 0);
        });
    },
    288420: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397);
      const o = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, n.__extends)(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.className,
              s = e.appearance,
              a = e.wide,
              o = e.overflow,
              l = e.size,
              c = (0, n.__rest)(e, [
                "className",
                "appearance",
                "wide",
                "overflow",
                "size",
              ]),
              d = e.disabled,
              u = i.classNames.apply(
                void 0,
                (0, n.__spreadArray)(
                  (0, n.__spreadArray)(
                    ["Button"],
                    (0, n.__read)(
                      (function (e) {
                        return Array.isArray(e)
                          ? e.map(function (e) {
                              return "Button--" + e;
                            })
                          : ["Button--" + e];
                      })(s)
                    ),
                    !1
                  ),
                  [
                    "Button--size-" + l,
                    {
                      "Button--wide": a,
                      "Button--overflow": !!o,
                      "Button--disabled": d,
                    },
                    t,
                  ],
                  !1
                )
              );
            return (0, r.jsx)(
              "button",
              (0, n.__assign)(
                {},
                c,
                { className: u },
                { children: e.children }
              ),
              void 0
            );
          }),
          (t.defaultProps = {
            appearance: "primary",
            size: "m",
            wide: !1,
            disabled: !1,
          }),
          t
        );
      })(a.Component);
    },
    118690: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => c });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397),
        o = s(647560),
        l = s(288420);
      const c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, n.__extends)(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.className,
              s = e.loading,
              a = e.children,
              c = (0, n.__rest)(e, ["className", "loading", "children"]),
              d = ["primary", "positive"].some(function (e) {
                return e === c.appearance;
              });
            return (0, r.jsxs)(
              l.default,
              (0, n.__assign)(
                {},
                c,
                {
                  className: (0, i.classNames)(
                    "ButtonWithProgress",
                    { "ButtonWithProgress--loading": s },
                    t
                  ),
                },
                {
                  children: [
                    (0, r.jsx)(
                      "span",
                      (0, n.__assign)(
                        { className: "ButtonWithProgress__content" },
                        { children: a }
                      ),
                      void 0
                    ),
                    s &&
                      (0, r.jsx)(
                        o.default,
                        {
                          inverted: d,
                          className: "ButtonWithProgress__progress",
                        },
                        void 0
                      ),
                  ],
                }
              ),
              void 0
            );
          }),
          (t.defaultProps = {
            appearance: "primary",
            size: "m",
            wide: !1,
            disabled: !1,
            loading: !1,
          }),
          t
        );
      })(a.Component);
    },
    721022: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397);
      const o = (function (e) {
        function t(t) {
          var s = e.call(this, t) || this;
          return (
            (s.headerClick = function () {
              s.toggle(!s.state.opened);
            }),
            (s.setChildrenRef = function (e) {
              (s.childrenRef = e), s.state.opened && s.updateHeight();
            }),
            (s.state = { opened: t.opened, childrenHeight: 0 }),
            s
          );
        }
        return (
          (0, n.__extends)(t, e),
          (t.prototype.UNSAFE_componentWillReceiveProps = function (e) {
            var t = this;
            this.setState({ opened: e.opened }, function () {
              t.updateHeight();
            });
          }),
          (t.prototype.updateHeight = function () {
            if (
              this.state.opened &&
              !this.props.autoHeight &&
              this.childrenRef
            ) {
              var e = Number(
                (this.childrenRef.children[0].clientHeight + 5).toString()
              );
              this.state.childrenHeight !== e &&
                this.setState({ childrenHeight: e });
            }
          }),
          (t.prototype.toggle = function (e) {
            var t = this;
            this.setState({ opened: e }, function () {
              t.props.toggleCallback && t.props.toggleCallback(e),
                t.updateHeight();
            });
          }),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.header,
              s = e.children,
              a = e.autoHeight,
              o = this.state,
              l = o.opened,
              c = o.childrenHeight,
              d = (0, i.classNames)("Collapse", this.props.className, {
                "Collapse--opened": l,
              }),
              u = (0, i.classNames)("Collapse__header", {
                Collapse__stringHeader: "string" == typeof t,
              }),
              h = "0";
            return (
              l && (h = a ? "none" : c + "px"),
              (0, r.jsxs)(
                "div",
                (0, n.__assign)(
                  { className: d },
                  {
                    children: [
                      t &&
                        (0, r.jsx)(
                          "div",
                          (0, n.__assign)(
                            { onClick: this.headerClick, className: u },
                            { children: t }
                          ),
                          void 0
                        ),
                      (0, r.jsx)(
                        "div",
                        (0, n.__assign)(
                          {
                            ref: this.setChildrenRef,
                            className: "Collapse__content",
                            style: { maxHeight: h },
                          },
                          {
                            children: (0, r.jsx)(
                              "div",
                              { children: s },
                              void 0
                            ),
                          }
                        ),
                        void 0
                      ),
                    ],
                  }
                ),
                void 0
              )
            );
          }),
          (t.defaultProps = { header: "", opened: !1 }),
          t
        );
      })(a.Component);
    },
    406042: (e, t, s) => {
      "use strict";
      s.d(t, { ConversationNoPhoto: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = function (e) {
          var t = e.id,
            s = e.size,
            i = void 0 === s ? "m" : s,
            o = e.text,
            l = e.specificType,
            c = e.className,
            d = (0, n.__rest)(e, [
              "id",
              "size",
              "text",
              "specificType",
              "className",
            ]),
            u = l || Math.abs(t % 6) + 1,
            h = (0, a.classNames)(
              "ConversationNoPhoto",
              "ConversationNoPhoto--" + u,
              "ConversationNoPhoto--" + i,
              c
            );
          return (0, r.jsx)(
            "figure",
            (0, n.__assign)({}, d, {
              className: h,
              dangerouslySetInnerHTML: { __html: o },
            }),
            void 0
          );
        };
    },
    809670: (e, t, s) => {
      "use strict";
      s.d(t, { CopyText: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = function (e) {
          var t = e.text,
            s = e.onCopyDone,
            i = e.children,
            o = (0, a.useRef)(null),
            l = (0, a.useCallback)(
              function (e) {
                o.current &&
                  (o.current.focus(),
                  o.current.select(),
                  document.execCommand("copy"),
                  e.preventDefault(),
                  e.stopPropagation(),
                  s && s());
              },
              [s]
            );
          return (0, r.jsxs)(
            "div",
            (0, n.__assign)(
              { className: "CopyText", onClick: l },
              {
                children: [
                  (0, r.jsx)(
                    "input",
                    {
                      type: "text",
                      readOnly: !0,
                      value: t || "",
                      ref: o,
                      className: "CopyText__input",
                    },
                    void 0
                  ),
                  i,
                ],
              }
            ),
            void 0
          );
        };
    },
    554190: (e, t, s) => {
      "use strict";
      s.d(t, { DivBlockSkeleton: () => i });
      var n = s(785893),
        r = s(667294),
        a = s(911099),
        i = function (e) {
          var t = e.height,
            s = e.classNames,
            i = void 0 === s ? "" : s,
            o = (0, r.useMemo)(
              function () {
                return { height: t };
              },
              [t]
            );
          return (0, n.jsx)(
            "div",
            { className: (0, a.classNames)("DivBlockSkeleton", i), style: o },
            void 0
          );
        };
    },
    986306: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397);
      function i(e) {
        var t = e.text,
          s = e.searchText,
          i = e.className,
          o = (0, n.__rest)(e, ["text", "searchText", "className"]),
          l = (0, a.classNames)("HighlightSearchText", i),
          c = (0, r.jsx)(
            "span",
            (0, n.__assign)({ className: l }, o, { children: t }),
            void 0
          );
        if (s && t) {
          var d = t.toLowerCase().indexOf(s.toLowerCase());
          if (d < 0) return c;
          var u = t.substring(0, d),
            h = t.substring(d, d + s.length),
            p = t.substring(d + s.length, t.length);
          c = (0, r.jsxs)(
            "span",
            (0, n.__assign)({ className: l }, o, {
              children: [
                u,
                (0, r.jsx)(
                  "span",
                  (0, n.__assign)(
                    { className: "HighlightSearchText__highlighted" },
                    { children: h }
                  ),
                  void 0
                ),
                p,
              ],
            }),
            void 0
          );
        }
        return c;
      }
    },
    599940: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => d });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(973935),
        o = s(659397),
        l = s(195200),
        c = function (e) {
          var t = e.position,
            s = e.align,
            n = e.text,
            r = e.rect,
            a = e.marginTop,
            i = e.marginLeft,
            o = e.maxWidth,
            l = e.appearance,
            c = e.className,
            d = r.left,
            u = r.top;
          switch (t) {
            case "t":
              d += 0.5 * r.width;
              break;
            case "r":
              (d += r.width), (u += 0.5 * r.height);
              break;
            case "b":
              (d += 0.5 * r.width), (u += r.height);
              break;
            case "l":
              u += 0.5 * r.height;
          }
          return {
            tooltip: {
              position: t,
              align: s,
              text: n,
              x: (d = Math.round(d + (i || 0))),
              y: (u = Math.round(u + (a || 0))),
              maxWidth: o,
              appearance: l,
              className: c,
            },
          };
        };
      const d = (function (e) {
        function t(t) {
          var s = e.call(this, t) || this;
          return (
            (s.tooltipRef = (0, a.createRef)()),
            (s.onMouseEnter = function () {
              if (s.state.el) {
                var e = s.props,
                  t = e.text,
                  n = e.position,
                  r = e.align,
                  a = e.marginTop,
                  i = e.marginLeft,
                  l = e.maxWidth,
                  c = e.appearance,
                  d = e.className,
                  u = (0, o.getOffsetRect)(
                    s.state.el instanceof HTMLElement ? s.state.el : null
                  );
                s.update({
                  text: t,
                  position: n,
                  align: r,
                  rect: u,
                  marginTop: a,
                  marginLeft: i,
                  maxWidth: l,
                  appearance: c,
                  className: d,
                });
              }
            }),
            (s.onMouseLeave = function (e) {
              var t = e.relatedTarget,
                n = s.tooltipRef.current;
              !(
                Boolean(t) &&
                Boolean(n) &&
                (n === t || (null == n ? void 0 : n.contains(t)))
              ) && s.update();
            }),
            (s.onTransitionEnd = function (e) {
              "visibility" === e.propertyName &&
                s.state.tooltip &&
                s.setState({ tooltip: void 0 });
            }),
            (s.onTooltipMouseEnter = function () {
              return s.onMouseEnter();
            }),
            (s.onTooltipMouseLeave = function () {
              return s.update();
            }),
            (s.state = { el: null }),
            s
          );
        }
        return (
          (0, n.__extends)(t, e),
          (t.prototype.componentDidMount = function () {
            var e = i.findDOMNode(this);
            this.setState({ el: e }),
              null == e || e.addEventListener("mouseenter", this.onMouseEnter),
              null == e || e.addEventListener("mouseleave", this.onMouseLeave);
          }),
          (t.prototype.componentWillUnmount = function () {
            var e, t;
            null === (e = this.state.el) ||
              void 0 === e ||
              e.removeEventListener("mouseenter", this.onMouseEnter),
              null === (t = this.state.el) ||
                void 0 === t ||
                t.removeEventListener("mouseleave", this.onMouseLeave);
          }),
          (t.getDerivedStateFromProps = function (e, t) {
            return t.tooltip &&
              (e.text !== t.tooltip.text ||
                e.position !== t.tooltip.position ||
                e.align !== t.tooltip.align ||
                e.maxWidth !== t.tooltip.maxWidth ||
                e.appearance !== t.tooltip.appearance)
              ? c(
                  (0, n.__assign)((0, n.__assign)({}, e), {
                    rect: (0, o.getOffsetRect)(
                      t.el instanceof HTMLElement ? t.el : null
                    ),
                  })
                )
              : null;
          }),
          (t.prototype.update = function (e) {
            if (!e)
              return this.setState({
                tooltip: Object.assign({}, this.state.tooltip, { removed: !0 }),
              });
            this.setState(c(e));
          }),
          (t.prototype.render = function () {
            var e = this.state.tooltip;
            return e && "undefined" != typeof window
              ? (0, r.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      this.props.children,
                      (0, r.jsx)(
                        l.default,
                        (0, n.__assign)({}, e, {
                          tooltipRef: this.tooltipRef,
                          onMouseEnter: this.onTooltipMouseEnter,
                          onMouseLeave: this.onTooltipMouseLeave,
                          onTransitionEnd: this.onTransitionEnd,
                        }),
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              : this.props.children;
          }),
          (t.defaultProps = {
            position: "b",
            align: "center",
            marginTop: 0,
            marginLeft: 0,
            appearance: "dark",
          }),
          t
        );
      })(a.Component);
    },
    213984: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      var n = s(570655),
        r = s(785893);
      const a = function (e) {
        var t = e.children,
          s = e.element,
          a = void 0 === s ? "span" : s,
          i = e.className,
          o = (0, n.__rest)(e, ["children", "element", "className"]),
          l = t ? String(t) : "",
          c = a;
        return (0, r.jsx)(
          c,
          (0, n.__assign)({}, o, {
            dangerouslySetInnerHTML: { __html: l },
            className: i || "",
          }),
          void 0
        );
      };
    },
    625633: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397);
      const i = function (e) {
        var t = e.isSingleLine,
          s = e.className,
          i = e.children,
          o = (0, n.__rest)(e, ["isSingleLine", "className", "children"]),
          l = (0, a.classNames)("InputStub", s, { "InputStub--singleLine": t });
        return (0, r.jsx)(
          "div",
          (0, n.__assign)({ className: l }, o, { children: i }),
          void 0
        );
      };
    },
    931897: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397);
      const i = function (e) {
        var t = e.children,
          s = e.className,
          i = (0, n.__rest)(e, ["children", "className"]),
          o = (0, a.classNames)("LinkButton", s),
          l = (0, n.__assign)((0, n.__assign)({}, i), {
            onMouseDown: function (e) {
              e.preventDefault(), i.onMouseDown && i.onMouseDown(e);
            },
          });
        return (0, r.jsx)(
          "button",
          (0, n.__assign)({}, l, { className: o }, { children: t }),
          void 0
        );
      };
    },
    467406: (e, t, s) => {
      "use strict";
      s.d(t, { ListActionsControl: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = function (e) {
          var t = e.element,
            s = void 0 === t ? "span" : t,
            i = e.alt,
            o = e.className,
            l = (0, n.__rest)(e, ["element", "alt", "className"]),
            c = s,
            d = (0, a.classNames)("ListActionsControl", o);
          return (0, r.jsx)(
            c,
            (0, n.__assign)({ "aria-label": i, className: d }, l, {
              children: (0, r.jsx)(
                "svg",
                (0, n.__assign)(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "10",
                    height: "5",
                    viewBox: "0 0 10 5",
                    fill: "currentColor",
                    "aria-hidden": "true",
                  },
                  {
                    children: (0, r.jsx)(
                      "path",
                      {
                        d: "M5 4.8c-.2 0-.3 0-.4-.1l-4.3-3.2c-.3-.3-.4-.8-.2-1.1.2-.3.7-.4 1-.2l3.9 2.9 3.8-2.9c.3-.3.8-.2 1 .1.3.3.2.8-.1 1.1l-4.2 3.2c-.2.1-.3.2-.5.2z",
                      },
                      void 0
                    ),
                  }
                ),
                void 0
              ),
            }),
            void 0
          );
        };
    },
    239132: (e, t, s) => {
      "use strict";
      s.d(t, { ListAddControl: () => l });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = s(947934),
        o = s(545898),
        l = function (e) {
          var t = e.className,
            s = e.children,
            l = e.size,
            c = void 0 === l ? 38 : l,
            d = (0, n.__rest)(e, ["className", "children", "size"]),
            u = (0, a.classNames)("ListAddControl", t),
            h = c <= 34 ? i.default : o.default;
          return (0, r.jsxs)(
            "button",
            (0, n.__assign)({ className: u }, d, {
              children: [
                (0, r.jsx)(
                  "span",
                  (0, n.__assign)(
                    {
                      className: "ListAddControl__icon",
                      style: { width: c, height: c },
                    },
                    { children: (0, r.jsx)(h, {}, void 0) }
                  ),
                  void 0
                ),
                s,
              ],
            }),
            void 0
          );
        };
    },
    878981: (e, t, s) => {
      "use strict";
      s.d(t, { ListCopyControl: () => d });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(809670),
        o = s(931897),
        l = s(869666),
        c = s(659397),
        d = function (e) {
          var t = e.value,
            s = e.copyText,
            d = e.doneText,
            u = e.className,
            h = (0, n.__read)((0, a.useState)(!1), 2),
            p = h[0],
            m = h[1],
            v = (0, a.useCallback)(function () {
              m(!0);
            }, []),
            f = (0, a.useCallback)(function () {
              m(!1);
            }, []),
            g = (0, c.classNames)("ListCopyControl", u, {
              "ListCopyControl--copied": p,
            });
          return (0, r.jsxs)(
            "div",
            (0, n.__assign)(
              { className: g },
              {
                children: [
                  (0, r.jsx)(
                    i.CopyText,
                    (0, n.__assign)(
                      { text: t, onCopyDone: v },
                      {
                        children: (0, r.jsx)(
                          o.default,
                          (0, n.__assign)(
                            { className: "ListCopyControl__copyButton" },
                            { children: s }
                          ),
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, r.jsx)(
                    l.default,
                    (0, n.__assign)(
                      {
                        shown: p,
                        callback: f,
                        className: "ListCopyControl__copyDone",
                      },
                      { children: d }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            void 0
          );
        };
    },
    363205: (e, t, s) => {
      "use strict";
      s.d(t, { ListHeader: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = function (e) {
          var t = e.headingElement,
            s = void 0 === t ? "h3" : t,
            i = e.extra,
            o = e.right,
            l = e.className,
            c = e.children,
            d = s;
          return (0, r.jsxs)(
            "header",
            (0, n.__assign)(
              { className: (0, a.classNames)("ListHeader", l) },
              {
                children: [
                  (0, r.jsx)(
                    d,
                    (0, n.__assign)(
                      { className: "ListHeader__text" },
                      { children: c }
                    ),
                    void 0
                  ),
                  (0, r.jsx)(
                    "span",
                    (0, n.__assign)(
                      { className: "ListHeader__extra" },
                      { children: i }
                    ),
                    void 0
                  ),
                  o &&
                    (0, r.jsx)(
                      "span",
                      (0, n.__assign)(
                        { className: "ListHeader__right" },
                        { children: o }
                      ),
                      void 0
                    ),
                ],
              }
            ),
            void 0
          );
        };
    },
    580044: (e, t, s) => {
      "use strict";
      s.d(t, { ListIconColors: () => n, ListIcon: () => o });
      var n,
        r = s(570655),
        a = s(785893),
        i = s(659397);
      !(function (e) {
        (e.BLUE = "blue"),
          (e.GREEN = "green"),
          (e.GRAY = "gray"),
          (e.RED = "red");
      })(n || (n = {}));
      var o = function (e) {
        var t = e.icon,
          s = e.color;
        return (0, a.jsx)(
          "div",
          (0, r.__assign)(
            { className: (0, i.classNames)("ListIcon", "ListIcon--" + s) },
            { children: t }
          ),
          void 0
        );
      };
    },
    748206: (e, t, s) => {
      "use strict";
      s.d(t, { LinkIcon: () => a });
      var n = s(570655),
        r = s(785893),
        a = function (e) {
          var t = (0, n.__rest)(e, []);
          return (0, r.jsx)(
            "svg",
            (0, n.__assign)(
              {
                width: "14",
                height: "14",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
              },
              t,
              { "aria-hidden": "true" },
              {
                children: (0, r.jsx)(
                  "path",
                  {
                    d: "M6.022 9.184a.837.837 0 01-1.187-.001 3.861 3.861 0 010-5.419l2.618-2.643a3.772 3.772 0 015.366 0c1.261 1.274 1.557 3.033.67 4.508-.296.49-.947.47-1.325.09-.275-.276-.254-.707-.077-1.019.465-.817.24-1.683-.456-2.379a2.094 2.094 0 00-2.997 0L6.023 4.956a2.143 2.143 0 00-.001 3.025.83.83 0 010 1.202zm1.95-3.166c.833.835.832 2.19-.001 3.025L5.36 11.68a2.094 2.094 0 01-2.998 0c-.695-.696-.91-1.555-.446-2.371.178-.313.199-.744-.076-1.019-.379-.38-1.03-.4-1.325.09-.888 1.474-.602 3.226.659 4.5a3.772 3.772 0 005.367 0l2.617-2.643a3.861 3.861 0 000-5.419.837.837 0 00-1.187 0 .83.83 0 000 1.2z",
                  },
                  void 0
                ),
              }
            ),
            void 0
          );
        };
    },
    228581: (e, t, s) => {
      "use strict";
      s.d(t, { PrivacyIcon: () => a });
      var n = s(570655),
        r = s(785893),
        a = function (e) {
          var t = (0, n.__rest)(e, []);
          return (0, r.jsxs)(
            "svg",
            (0, n.__assign)(
              {
                width: "20",
                height: "20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t,
              {
                children: [
                  (0, r.jsx)(
                    "path",
                    {
                      d: "M4 9.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C4.76 8 5.04 8 5.6 8h8.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C16 8.76 16 9.04 16 9.6v4.8c0 .56 0 .84-.109 1.054a1 1 0 01-.437.437C15.24 16 14.96 16 14.4 16H5.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C4 15.24 4 14.96 4 14.4V9.6z",
                      fill: "#fff",
                    },
                    void 0
                  ),
                  (0, r.jsx)(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M12.2 6a2.2 2.2 0 00-4.4 0v4a2.2 2.2 0 104.4-.001V6zM10 2a4 4 0 00-4 4v4a4 4 0 108-.001V6A4 4 0 0010 2z",
                      fill: "#fff",
                    },
                    void 0
                  ),
                ],
              }
            ),
            void 0
          );
        };
    },
    121086: (e, t, s) => {
      "use strict";
      s.d(t, { TimeIcon: () => a });
      var n = s(570655),
        r = s(785893),
        a = function (e) {
          var t = (0, n.__rest)(e, []);
          return (0, r.jsx)(
            "svg",
            (0, n.__assign)(
              {
                width: "16",
                height: "16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t,
              {
                children: (0, r.jsx)(
                  "path",
                  {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.8 8a6.2 6.2 0 1112.4 0A6.2 6.2 0 011.8 8zM0 8a8 8 0 1116 0A8 8 0 010 8zm8.9-3a.9.9 0 00-1.8 0v4a.9.9 0 00.498.805l2 1a.9.9 0 10.804-1.61L8.9 8.444V5z",
                    fill: "#fff",
                  },
                  void 0
                ),
              }
            ),
            void 0
          );
        };
    },
    787255: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = s(383925);
      const o = function (e) {
        var t = e.icon,
          s = void 0 === t ? null : t,
          o = e.aside,
          l = void 0 === o ? null : o,
          c = e.chevron,
          d = void 0 !== c && c,
          u = e.selectable,
          h = void 0 === u || u,
          p = e.border,
          m = void 0 === p || p,
          v = e.className,
          f = e.children,
          g = e.active,
          _ = e.canBeHovered,
          y = void 0 === _ || _,
          N = (0, n.__rest)(e, [
            "icon",
            "aside",
            "chevron",
            "selectable",
            "border",
            "className",
            "children",
            "active",
            "canBeHovered",
          ]),
          b = {
            "ListItem--chevron": d,
            "ListItem--selectable": h,
            "ListItem--border": m,
            "ListItem--active": g,
            "ListItem--can-be-hovered": y,
          };
        return (0, r.jsxs)(
          "li",
          (0, n.__assign)(
            {},
            N,
            { className: (0, a.classNames)("ListItem", b, v) },
            {
              children: [
                s &&
                  (0, r.jsx)(
                    "div",
                    (0, n.__assign)(
                      { className: "ListItem__icon" },
                      { children: s }
                    ),
                    void 0
                  ),
                (0, r.jsx)(
                  "div",
                  (0, n.__assign)(
                    { className: "ListItem__main" },
                    { children: f }
                  ),
                  void 0
                ),
                (0, r.jsx)(
                  "div",
                  (0, n.__assign)(
                    { className: "ListItem__aside" },
                    { children: l }
                  ),
                  void 0
                ),
                d &&
                  (0, r.jsx)(
                    i.default,
                    {
                      width: 26,
                      height: 26,
                      style: { color: "var(--icon_tertiary)" },
                    },
                    void 0
                  ),
              ],
            }
          ),
          void 0
        );
      };
    },
    842194: (e, t, s) => {
      "use strict";
      s.d(t, { ListMore: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = function (e) {
          var t = e.children,
            s = e.className,
            i = (0, n.__rest)(e, ["children", "className"]);
          return (0, r.jsx)(
            "button",
            (0, n.__assign)(
              { className: (0, a.classNames)("ListMore", s) },
              i,
              { children: t }
            ),
            void 0
          );
        };
    },
    814210: (e, t, s) => {
      "use strict";
      s.d(t, { ListMultiSelectControl: () => l });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = s(482792),
        o = s(237432),
        l = function (e) {
          var t,
            s = e.isSelected,
            l = (0, a.classNames)("ListMultiSelectControl", {
              "ListMultiSelectControl--checked": s,
            });
          return (
            (t = s
              ? (0, r.jsx)(i.default, {}, void 0)
              : (0, r.jsx)(o.default, {}, void 0)),
            (0, r.jsx)(
              "div",
              (0, n.__assign)(
                { role: "switch", "aria-checked": s, className: l },
                { children: t }
              ),
              void 0
            )
          );
        };
    },
    476288: (e, t, s) => {
      "use strict";
      s.d(t, { ModalBody: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(418793),
        i = s(659397),
        o = function (e) {
          var t = e.children,
            s = e.hasScroll,
            o = void 0 === s || s,
            l = e.className;
          return o
            ? (0, r.jsx)(
                a.Scroll,
                (0, n.__assign)(
                  { className: (0, i.classNames)("ModalBody", l) },
                  { children: t }
                ),
                void 0
              )
            : (0, r.jsx)(
                "div",
                (0, n.__assign)(
                  { className: (0, i.classNames)("ModalBody", l) },
                  { children: t }
                ),
                void 0
              );
        };
    },
    750901: (e, t, s) => {
      "use strict";
      s.d(t, { ModalClose: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = function (e) {
          var t = e.className,
            s = e.onClose,
            i = (0, a.classNames)("ModalClose", t);
          return (0, r.jsx)(
            "button",
            (0, n.__assign)(
              {
                className: i,
                type: "button",
                onClick: s,
                "aria-label": "Закрыть",
              },
              {
                children: (0, r.jsx)(
                  "div",
                  (0, n.__assign)(
                    { className: "ModalClose__wrap" },
                    {
                      children: (0, r.jsx)(
                        "div",
                        { className: "ModalClose__icon" },
                        void 0
                      ),
                    }
                  ),
                  void 0
                ),
              }
            ),
            void 0
          );
        };
    },
    150382: (e, t, s) => {
      "use strict";
      s.d(t, { ModalFooter: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = function (e) {
          var t = e.className,
            s = e.actionButtons,
            i = e.hint,
            o = e.children;
          return (0, r.jsx)(
            "div",
            (0, n.__assign)(
              { className: (0, a.classNames)("ModalFooter", t) },
              {
                children: (0, r.jsxs)(
                  "div",
                  (0, n.__assign)(
                    { className: "ModalFooter__inner" },
                    {
                      children: [
                        i &&
                          (0, r.jsx)(
                            "div",
                            (0, n.__assign)(
                              {
                                className: "ModalFooter__hint",
                                role: "presentation",
                              },
                              { children: i }
                            ),
                            void 0
                          ),
                        o &&
                          (0, r.jsx)(
                            "div",
                            (0, n.__assign)(
                              { className: "ModalFooter__content" },
                              { children: o }
                            ),
                            void 0
                          ),
                        s,
                      ],
                    }
                  ),
                  void 0
                ),
              }
            ),
            void 0
          );
        };
    },
    743927: (e, t, s) => {
      "use strict";
      s.d(t, { ModalHeader: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = s(733024),
        o = function (e) {
          var t = e.className,
            s = e.title,
            o = e.onClose,
            l = e.backText,
            c = e.onBack,
            d = (0, a.classNames)("ModalHeader", t);
          return (0, r.jsxs)(
            "div",
            (0, n.__assign)(
              { className: d },
              {
                children: [
                  l &&
                    (0, r.jsx)(
                      "button",
                      (0, n.__assign)(
                        { className: "ModalHeader__back", onClick: c },
                        { children: l }
                      ),
                      void 0
                    ),
                  (0, r.jsx)(
                    "h1",
                    (0, n.__assign)(
                      { className: "ModalHeader__title" },
                      { children: s }
                    ),
                    void 0
                  ),
                  (0, r.jsxs)(
                    "button",
                    (0, n.__assign)(
                      {
                        className: "ModalHeader__cross",
                        type: "button",
                        onClick: o,
                      },
                      {
                        children: [
                          (0, r.jsx)(
                            i.default,
                            { width: 22, height: 22 },
                            void 0
                          ),
                          "Закрыть",
                        ],
                      }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            void 0
          );
        };
    },
    792110: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397);
      const o = function (e) {
        var t = e.className,
          s = (0, n.__read)((0, a.useState)(!1), 2),
          o = s[0],
          l = s[1];
        return (
          (0, a.useEffect)(function () {
            var e = setTimeout(function () {
              l(!0);
            }, 140);
            return function () {
              return clearTimeout(e);
            };
          }, []),
          o
            ? (0, r.jsxs)(
                "div",
                (0, n.__assign)(
                  { className: (0, i.classNames)("ModalPreloader", t) },
                  {
                    children: [
                      (0, r.jsxs)(
                        "div",
                        (0, n.__assign)(
                          { className: "ModalPreloader__animation" },
                          {
                            children: [
                              (0, r.jsx)(
                                "div",
                                { className: "ModalPreloader__dot" },
                                void 0
                              ),
                              (0, r.jsx)(
                                "div",
                                { className: "ModalPreloader__dot" },
                                void 0
                              ),
                              (0, r.jsx)(
                                "div",
                                { className: "ModalPreloader__dot" },
                                void 0
                              ),
                            ],
                          }
                        ),
                        void 0
                      ),
                      (0, r.jsx)(
                        "div",
                        { className: "ModalPreloader__background" },
                        void 0
                      ),
                    ],
                  }
                ),
                void 0
              )
            : null
        );
      };
    },
    203244: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397);
      const o = function (e) {
        var t = e.className,
          s = void 0 === t ? "" : t,
          o = e.title,
          l = void 0 === o ? "" : o,
          c = e.isSaved,
          d = void 0 !== c && c,
          u = e.savedTitle,
          h = void 0 === u ? "" : u,
          p = e.children,
          m = (0, n.__rest)(e, [
            "className",
            "title",
            "isSaved",
            "savedTitle",
            "children",
          ]),
          v = (0, n.__read)((0, a.useState)(!1), 2),
          f = v[0],
          g = v[1];
        (0, a.useEffect)(
          function () {
            h && g(d);
          },
          [d]
        );
        var _ = null;
        if (l) {
          var y = null;
          h &&
            (y = (0, r.jsx)(
              "div",
              (0, n.__assign)(
                {
                  className: (0, i.classNames)("PageBlock__savedTitle", {
                    "PageBlock__savedTitle--shown": f,
                  }),
                },
                { children: h }
              ),
              void 0
            )),
            (_ = (0, r.jsxs)(
              "h2",
              (0, n.__assign)(
                { className: "PageBlock__header" },
                {
                  children: [
                    (0, r.jsx)(
                      "div",
                      (0, n.__assign)(
                        { className: "PageBlock__headerTitle" },
                        { children: l }
                      ),
                      void 0
                    ),
                    y,
                  ],
                }
              ),
              void 0
            ));
        }
        return (0, r.jsxs)(
          "div",
          (0, n.__assign)({ className: (0, i.classNames)("PageBlock", s) }, m, {
            children: [_, p],
          }),
          void 0
        );
      };
    },
    169050: (e, t, s) => {
      "use strict";
      s.d(t, { PageColumns: () => a });
      var n = s(570655),
        r = s(785893),
        a = function (e) {
          var t = e.narrow,
            s = e.children;
          return (0, r.jsxs)(
            "div",
            (0, n.__assign)(
              { className: "wide_column_left" },
              {
                children: [
                  (0, r.jsx)(
                    "div",
                    (0, n.__assign)(
                      { className: "narrow_column_wrap" },
                      {
                        children: (0, r.jsx)(
                          "div",
                          (0, n.__assign)(
                            { className: "narrow_column", id: "narrow_column" },
                            { children: t }
                          ),
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, r.jsx)(
                    "div",
                    (0, n.__assign)(
                      { className: "wide_column_wrap" },
                      {
                        children: (0, r.jsx)(
                          "div",
                          (0, n.__assign)(
                            { className: "wide_column", id: "wide_column" },
                            { children: s }
                          ),
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            void 0
          );
        };
    },
    343390: (e, t, s) => {
      "use strict";
      s.d(t, { Targets: () => n, PhotoAreaSelector: () => p });
      var n,
        r = s(570655),
        a = s(785893),
        i = s(667294),
        o = s(659397),
        l = s(120217);
      !(function (e) {
        (e.NONE = "none"),
          (e.MAIN = "main"),
          (e.PREVIEW_50 = "50"),
          (e.PREVIEW_100 = "100"),
          (e.NW = "nw"),
          (e.NE = "ne"),
          (e.N = "n"),
          (e.SW = "sw"),
          (e.SE = "se"),
          (e.S = "s"),
          (e.W = "w"),
          (e.E = "e");
      })(n || (n = {}));
      var c = [n.NW, n.NE, n.N, n.SW, n.SE, n.S, n.W, n.E],
        d = [n.NW, n.NE, n.SW, n.SE],
        u = [n.MAIN, n.PREVIEW_50, n.PREVIEW_100],
        h = (0, r.__spreadArray)(
          (0, r.__spreadArray)([], (0, r.__read)(c), !1),
          (0, r.__read)(u),
          !1
        ),
        p = function (e) {
          var t = e.className,
            s = e.minWidth,
            p = e.minHeight,
            v = e.rect,
            f = e.rotate,
            g = void 0 === f ? 0 : f,
            _ = e.onCropUpdated,
            y = e.preview50,
            N = void 0 !== y && y,
            b = e.preview100,
            w = void 0 !== b && b,
            x = e.isSquare,
            S = void 0 !== x && x,
            E = (0, i.useRef)(null),
            C = S ? 1 : e.minAspectRatio || 1,
            k = S ? 1 : e.maxAspectRatio || 1,
            O = S ? d : c,
            j = v || (0, l.getInitRect)(e),
            M = (0, r.__read)((0, l.getThumbSize)(e, j), 7),
            P = M[0],
            T = M[1],
            L = M[2],
            D = M[3],
            R = M[4],
            I = M[5],
            A = M[6];
          function H(e) {
            return e * A;
          }
          function W(e) {
            return e / A;
          }
          var B = (0, l.getInitCrop)(e, j, C, k, W),
            z = (0, r.__read)((0, i.useState)(n.NONE), 2),
            F = z[0],
            V = z[1],
            U = (0, r.__read)((0, i.useState)(B), 2),
            $ = U[0],
            G = U[1],
            K = (0, r.__read)((0, i.useState)(B), 2),
            Z = K[0],
            X = K[1],
            Y = (0, r.__read)((0, i.useState)({ x: 0, y: 0 }), 2),
            q = Y[0],
            J = Y[1],
            Q = (0, r.__read)((0, i.useState)({ x: 0, y: 0 }), 2),
            ee = Q[0],
            te = Q[1],
            se = (0, r.__read)((0, i.useState)({ x: 0, y: 0 }), 2),
            ne = se[0],
            re = se[1],
            ae = (0, r.__read)((0, i.useState)(!1), 2),
            ie = ae[0],
            oe = ae[1],
            le = (0, r.__read)((0, i.useState)(!1), 2),
            ce = le[0],
            de = le[1];
          (0, i.useEffect)(
            function () {
              var t = (0, l.getInitCrop)(e, j, C, k, W);
              (t.left === $.left &&
                t.top === $.top &&
                t.width === $.width &&
                t.height === $.height) ||
                (G(t), X(t)),
                _({
                  left: Math.floor(t.left),
                  top: Math.floor(t.top),
                  width: Math.floor(t.width),
                  height: Math.floor(t.height),
                });
            },
            [g]
          );
          var ue = h.reduce(function (e, t) {
              var s;
              return (
                (e[t] =
                  ((s = t),
                  function (e) {
                    var t = e.pageX,
                      r = e.pageY,
                      a = (0, l.getXY)(E.current),
                      i = { x: $.left, y: $.top };
                    if (c.includes(s)) {
                      var o = [
                        s.charAt(0),
                        s.length > 1 ? s.charAt(1) : s.charAt(0),
                      ];
                      i = {
                        x: i.x + (o[1] == n.W ? 0 : $.width),
                        y: i.y + (o[0] == n.N ? 0 : $.height),
                      };
                    }
                    V(s),
                      J(a),
                      X($),
                      te({ x: t, y: r }),
                      re(i),
                      oe(!0),
                      e.stopPropagation(),
                      e.preventDefault();
                  })),
                e
              );
            }, {}),
            he = function (e) {
              var t = { x: e.pageX, y: e.pageY };
              u.includes(F)
                ? ((0, l.move)(j, $, Z, ee, t, G, W),
                  (document.body.style.cursor = "move"))
                : c.includes(F) &&
                  ((0, l.resize)(j, t, ne, $, F, q, s, p, C, k, W, re, V, G),
                  (document.body.style.cursor = F + "-resize")),
                e.stopPropagation(),
                e.preventDefault();
            },
            pe = function (e) {
              V(n.NONE),
                oe(!1),
                _($),
                (document.body.style.cursor = ""),
                e.stopPropagation(),
                e.preventDefault();
            };
          (0, i.useEffect)(
            function () {
              return (
                ie
                  ? (window.addEventListener("mousemove", he),
                    window.addEventListener("mouseup", pe))
                  : (window.removeEventListener("mousemove", he),
                    window.removeEventListener("mouseup", pe)),
                function () {
                  window.removeEventListener("mousemove", he),
                    window.removeEventListener("mouseup", pe);
                }
              );
            },
            [ie, he, pe]
          );
          var me = (0, o.classNames)(
              "PhotoAreaSelector",
              ie ? "PhotoAreaSelector--drag-yes" : "PhotoAreaSelector--drag-no",
              t
            ),
            ve = (0, r.__read)((0, l.rectToThumbSize)($, j, H), 6),
            fe = ve[0],
            ge = ve[1],
            _e = ve[2],
            ye = ve[3],
            Ne = ve[4],
            be = ve[5],
            we = (g % 4) * 90,
            xe = "center";
          return (
            1 === g
              ? (xe = D / 2 + "px " + D / 2 + "px")
              : 3 === g && (xe = L / 2 + "px " + L / 2 + "px"),
            (0, a.jsxs)(
              "div",
              (0, r.__assign)(
                { className: me },
                {
                  children: [
                    (0, a.jsxs)(
                      "div",
                      (0, r.__assign)(
                        {
                          className: "PhotoAreaSelector__mainWrapper",
                          style: { width: P, height: T },
                        },
                        {
                          children: [
                            (0, a.jsx)(
                              "div",
                              (0, r.__assign)(
                                {
                                  className: "PhotoAreaSelector__frameWrapper",
                                  style: { width: P, height: T },
                                },
                                {
                                  children: (0, a.jsx)(
                                    "img",
                                    {
                                      src: e.imgSrc,
                                      style: {
                                        transformOrigin: xe,
                                        width: L,
                                        height: D,
                                        willChange: "transform",
                                        transform:
                                          "translate(" +
                                          R +
                                          "px, " +
                                          I +
                                          "px) rotate(" +
                                          we +
                                          "deg)",
                                      },
                                      ref: E,
                                    },
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, a.jsx)(
                              "div",
                              { className: "PhotoAreaSelector__faded" },
                              void 0
                            ),
                            (0, a.jsx)(
                              "div",
                              (0, r.__assign)(
                                {
                                  className: "PhotoAreaSelector__linza",
                                  style: { width: fe, height: ge },
                                },
                                {
                                  children: (0, a.jsx)(
                                    "div",
                                    (0, r.__assign)(
                                      {
                                        className:
                                          "PhotoAreaSelector__linzaFrame",
                                        style: {
                                          transform:
                                            "translate(" +
                                            _e +
                                            "px, " +
                                            ye +
                                            "px)",
                                        },
                                        onMouseDown: ue[n.MAIN],
                                      },
                                      {
                                        children: (0, a.jsx)(
                                          "div",
                                          (0, r.__assign)(
                                            {
                                              className:
                                                "PhotoAreaSelector__linzaBorder",
                                            },
                                            {
                                              children: (0, a.jsx)(
                                                "img",
                                                {
                                                  className: (0, o.classNames)(
                                                    "PhotoAreaSelector__linzaImage",
                                                    {
                                                      "PhotoAreaSelector__linzaImage--loaded":
                                                        ce,
                                                    }
                                                  ),
                                                  onLoad: function () {
                                                    return de(!0);
                                                  },
                                                  src: e.imgSrc,
                                                  style: {
                                                    transformOrigin: xe,
                                                    width: L,
                                                    height: D,
                                                    transform:
                                                      "translate(" +
                                                      -Ne +
                                                      "px, " +
                                                      -be +
                                                      "px) rotate(" +
                                                      we +
                                                      "deg)",
                                                  },
                                                },
                                                void 0
                                              ),
                                            }
                                          ),
                                          void 0
                                        ),
                                      }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, a.jsx)(
                              a.Fragment,
                              {
                                children: O.map(function (e) {
                                  var t = 0,
                                    s = 0;
                                  if (1 === e.length)
                                    e === n.N || e === n.S
                                      ? ((t = H($.left + $.width / 2) - 5),
                                        (s =
                                          H(
                                            $.top + (e === n.N ? 0 : $.height)
                                          ) - 5))
                                      : ((t =
                                          H(
                                            $.left + (e === n.W ? 0 : $.width)
                                          ) - 5),
                                        (s = H($.top + $.height / 2) - 5));
                                  else {
                                    var r = e.charAt(0),
                                      i = e.charAt(1);
                                    (t =
                                      H($.left + (i === n.W ? 0 : $.width)) -
                                      5),
                                      (s =
                                        H($.top + (r === n.N ? 0 : $.height)) -
                                        5);
                                  }
                                  var l = (0, o.classNames)(
                                    "PhotoAreaSelector__handler",
                                    "PhotoAreaSelector__handler--type-" + e,
                                    ie
                                      ? "PhotoAreaSelector__handler--dragged-yes"
                                      : "PhotoAreaSelector__handler--dragged-no"
                                  );
                                  return (0,
                                  a.jsx)("div", { className: l, style: { transform: "translate(" + t + "px, " + s + "px)" }, onMouseDown: ue[e] }, e);
                                }),
                              },
                              void 0
                            ),
                          ],
                        }
                      ),
                      void 0
                    ),
                    S && (N || w)
                      ? (0, a.jsxs)(
                          "div",
                          (0, r.__assign)(
                            { className: "PhotoAreaSelector__previewsWrapper" },
                            {
                              children: [
                                w && m(100, $, j, e, ue[n.PREVIEW_50]),
                                N && m(50, $, j, e, ue[n.PREVIEW_100]),
                              ],
                            }
                          ),
                          void 0
                        )
                      : null,
                  ],
                }
              ),
              void 0
            )
          );
        };
      function m(e, t, s, n, i) {
        var l = n.imgWidth,
          c = n.imgHeight,
          d = n.rotate,
          u = void 0 === d ? 0 : d,
          h = (0, o.classNames)(
            "PhotoAreaSelector__preview",
            "PhotoAreaSelector__preview--" + e
          ),
          p = (0, o.classNames)(
            "PhotoAreaSelector__previewWrapper",
            "PhotoAreaSelector__previewWrapper--" + e
          ),
          m = -Math.floor(((s.left + t.left) * e) / t.width),
          v = -Math.floor(((s.top + t.top) * e) / t.width),
          f = Math.ceil((l * e) / t.width),
          g = Math.ceil((c * e) / t.height),
          _ = (u % 4) * 90,
          y = "center";
        return (
          1 === u
            ? (y = g / 2 + "px " + g / 2 + "px")
            : 3 === u && (y = f / 2 + "px " + f / 2 + "px"),
          (0, a.jsx)(
            "div",
            (0, r.__assign)(
              { className: h },
              {
                children: (0, a.jsx)(
                  "div",
                  (0, r.__assign)(
                    { onMouseDown: i, className: p },
                    {
                      children: (0, a.jsx)(
                        "img",
                        {
                          src: n.imgSrc,
                          style: {
                            width: f,
                            height: g,
                            transformOrigin: y,
                            willChange: "transform",
                            transform:
                              "translate(" +
                              m +
                              "px, " +
                              v +
                              "px) rotate(" +
                              _ +
                              "deg)",
                          },
                        },
                        void 0
                      ),
                    }
                  ),
                  void 0
                ),
              }
            ),
            void 0
          )
        );
      }
    },
    120217: (e, t, s) => {
      "use strict";
      s.d(t, {
        resize: () => a,
        move: () => i,
        getInitRect: () => o,
        getThumbSize: () => l,
        getInitCrop: () => c,
        rectToThumbSize: () => d,
        getXY: () => h,
      });
      var n = s(570655),
        r = s(343390);
      function a(e, t, s, n, a, i, o, l, c, d, h, m, v, f) {
        var g = (function (e, t, s, n) {
            return {
              x: p(Math.max(0, n(e.x - t.x) - s.left)),
              y: p(Math.max(0, n(e.y - t.y) - s.top)),
            };
          })(t, i, e, h),
          _ = g.x - s.x,
          y = g.y - s.y;
        if (((o = h(o)), (l = h(l)), _ || y)) {
          var N = e.width,
            b = e.height,
            w = n.left,
            x = n.top,
            S = n.width,
            E = n.height,
            C = 0,
            k = 0;
          2 === a.length
            ? ((C = a.startsWith(r.Targets.N) ? -1 : 1),
              (k = a.charAt(1) === r.Targets.W ? -1 : 1))
            : ((C = a === r.Targets.N ? -1 : a === r.Targets.S ? 1 : 0),
              (k = a === r.Targets.W ? -1 : a === r.Targets.E ? 1 : 0)),
            C &&
              E + u(C) * y < l / 2 &&
              ((C = -C), (y = g.y - (n.top + (C > 0 ? n.height : 0)))),
            k &&
              S + u(k) * _ < o / 2 &&
              ((k = -k), (_ = g.x - (n.left + (k > 0 ? n.width : 0))));
          var O = C ? u(C) : 0,
            j = k ? u(k) : 0;
          c > 0 &&
            S + j * _ < (E + O * y) * c &&
            (k
              ? (_ = j * Math.ceil((E + O * y) * c - S))
              : (y = O * Math.floor(S / c - E))),
            d > 0 &&
              S + j * _ > (E + O * y) * d &&
              (C
                ? (y = O * Math.ceil((S + j * _) / d - E))
                : (_ = j * Math.floor(E * d - S))),
            C &&
              ((E += u(C) * y) < l
                ? ((x -= C > 0 ? 0 : l - E - y), (E = l))
                : (x += C > 0 ? 0 : y)),
            k &&
              ((S += u(k) * _) < o
                ? ((w -= k > 0 ? 0 : o - S - _), (S = o))
                : (w += k > 0 ? 0 : _));
          var M = 0,
            P = 0,
            T = 0,
            L = 0;
          w < 0 ? ((M = w), (w = 0)) : S > N - w && (M = N - w - S),
            M &&
              ((S += M),
              c > 0 &&
                S < c * E &&
                ((E += L = Math.floor(S / c) - E), (x -= C > 0 ? 0 : L))),
            x < 0 ? ((P = x), (x = 0)) : E > b - x && (P = b - x - E),
            P &&
              ((E += P),
              d > 0 &&
                S > d * E &&
                ((S += T = Math.floor(E * d) - S), (w -= k > 0 ? 0 : T)));
          var D = C > 0 ? r.Targets.S : C < 0 ? r.Targets.N : "",
            R = k > 0 ? r.Targets.E : k < 0 ? r.Targets.W : "",
            I = { left: p(w), top: p(x), width: p(S), height: p(E) };
          if (
            n.top !== I.top ||
            n.left !== I.left ||
            n.width !== I.width ||
            n.height !== I.height
          ) {
            f(I),
              m({
                x: I.left + (k > 0 ? I.width : 0),
                y: I.top + (C > 0 ? I.height : 0),
              });
            var A = D + R;
            A !== a && v(A);
          }
        }
      }
      function i(e, t, s, r, a, i, o) {
        var l = Math.round(s.left + o(a.x - r.x)),
          c = Math.round(s.top + o(a.y - r.y)),
          d = p(Math.min(Math.floor(e.width - t.width), Math.max(0, l))),
          u = p(Math.min(Math.floor(e.height - t.height), Math.max(0, c)));
        (t.left === d && t.top === u) ||
          i((0, n.__assign)((0, n.__assign)({}, t), { left: d, top: u }));
      }
      function o(e) {
        var t = e.rotate,
          s = void 0 === t ? 0 : t;
        return {
          left: 0,
          top: 0,
          width: s % 2 ? e.imgHeight : e.imgWidth,
          height: s % 2 ? e.imgWidth : e.imgHeight,
        };
      }
      function l(e, t) {
        var s = e.previewWidth,
          n = e.previewHeight,
          r = e.imgWidth,
          a = e.imgHeight,
          i = t.left,
          o = t.top,
          l = t.width,
          c = t.height,
          d = l - i,
          u = c - o;
        if (s) {
          var h = s,
            p = h / l,
            m = Math.floor(c * p);
          return (
            n && d < u && ((p = (m = n) / c), (h = Math.floor(l * p))),
            [h, m, h * (r / l), m * (a / c), -1 * i * p, -1 * o * p, p]
          );
        }
        return [d, u, r, a, -i, -o, 1];
      }
      function c(e, t, s, n, r) {
        if (e.cropRect) return e.cropRect;
        var a = t.width,
          i = t.height,
          o = e.minWidth,
          l = e.minHeight;
        (o = r(o)), (l = r(l));
        var c = {
          left: Math.floor(0.1 * a),
          top: Math.floor(0.1 * i),
          width: Math.floor(0.8 * a),
          height: Math.floor(0.8 * i),
        };
        if (c.width < o) {
          var d = o > a ? a : o;
          (c.left = Math.max(0, c.left - Math.floor((d - c.width) / 2))),
            (c.width = d);
        }
        if (c.height < l) {
          var u = l > i ? i : l;
          (c.left = Math.max(0, c.top - Math.floor((u - c.height) / 2))),
            (c.height = u);
        }
        return (
          c.width < c.height * s &&
            ((c.top = Math.max(
              0,
              c.top - Math.floor((c.width / s - c.height) / 4)
            )),
            (c.height = Math.floor(c.width / s))),
          c.width > c.height * n &&
            ((c.left = Math.max(
              0,
              c.left - Math.floor((c.height * n - c.width) / 2)
            )),
            (c.width = Math.floor(c.height * n))),
          (a < c.left + c.width || i < c.top + c.height) &&
            (a < i
              ? ((c.left = 0),
                (c.top = Math.max(0, Math.floor((i - a) / 2))),
                (c.width = a),
                (c.height = a))
              : ((c.left = Math.max(0, Math.floor((a - i) / 2))),
                (c.top = 0),
                (c.width = i),
                (c.height = i))),
          c
        );
      }
      function d(e, t, s) {
        return [
          p(s(e.width)),
          p(s(e.height)),
          p(s(e.left)),
          p(s(e.top)),
          p(s(e.left + t.left)),
          p(s(e.top + t.top)),
        ];
      }
      function u(e) {
        return e < 0 ? -1 : 1;
      }
      function h(e) {
        var t = e.ownerDocument,
          s = e.getBoundingClientRect();
        if (!t) return { x: 0, y: 0 };
        var n = t.documentElement;
        return {
          x: s.left + n.scrollLeft - (n.clientLeft || 0),
          y: s.top + n.scrollTop - (n.clientTop || 0),
        };
      }
      function p(e) {
        return Number(e.toFixed(2));
      }
    },
    814217: (e, t, s) => {
      "use strict";
      s.d(t, { Popper: () => c });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(394021),
        o = s(630810),
        l = s(659397),
        c = (0, a.forwardRef)(function (e, t) {
          var s = e.open,
            c = void 0 === s || s,
            d = e.position,
            u = void 0 === d ? "auto" : d,
            h = e.mode,
            p = void 0 === h ? "side" : h,
            m = e.align,
            v = void 0 === m ? "auto" : m,
            f = e.attachTarget,
            g = void 0 === f ? document.body : f,
            _ = e.content,
            y = e.children,
            N = (0, n.__rest)(e, [
              "open",
              "position",
              "mode",
              "align",
              "attachTarget",
              "content",
              "children",
            ]),
            b = (0, a.useRef)(null),
            w = (0, o.useCombinedRefs)(t, b),
            x = (0, n.__read)((0, a.useState)(null), 2),
            S = x[0],
            E = x[1],
            C = (0, n.__read)((0, a.useState)(null), 2),
            k = C[0],
            O = C[1],
            j = (0, n.__read)((0, a.useState)(null), 2),
            M = j[0],
            P = j[1],
            T = (0, n.__assign)((0, n.__assign)({}, y.props), { ref: w });
          return (
            (0, a.useEffect)(
              function () {
                if (w && w.current) {
                  var e = (0, n.__read)(
                      (function (e, t, s, n, r, a) {
                        if (!a) return [null, null, null];
                        var i = "auto";
                        if (!e)
                          return [
                            { top: 0, left: 0, width: 0, height: 0 },
                            r === i ? "left" : r,
                            n === i ? "b" : n,
                          ];
                        var o = (0, l.getOffsetRect)(e),
                          c = (0, l.getOffsetRect)(t),
                          d = n === i || r === i,
                          u = d ? window.innerWidth : 0,
                          h = d ? window.innerHeight : 0,
                          p = d
                            ? window.pageYOffset ||
                              document.documentElement.scrollTop
                            : 0,
                          m = d
                            ? window.pageXOffset ||
                              document.documentElement.scrollLeft
                            : 0;
                        if (n === i) {
                          var v = o.top - p;
                          n = p + h - o.top - o.height > v ? "b" : "t";
                        }
                        if (r === i) {
                          var f = o.left + 0.5 * o.width,
                            g = m + (2 * u) / 3;
                          r =
                            f >= m + u / 3 && f <= g
                              ? "center"
                              : f > g
                              ? "right"
                              : "left";
                        }
                        var _ = o.left,
                          y = o.top;
                        if ("side" === s)
                          return [
                            {
                              top: ("b" === n ? y + o.height : y) - c.top,
                              left: ("r" === n ? _ + o.width : _) - c.left,
                              width: "t" === n || "b" === n ? o.width : 0,
                              height: "l" === n || "r" === n ? o.height : 0,
                            },
                            r,
                            n,
                          ];
                        switch (n) {
                          case "t":
                            _ += 0.5 * o.width;
                            break;
                          case "r":
                            (_ += o.width), (y += 0.5 * o.height);
                            break;
                          case "b":
                            (_ += 0.5 * o.width), (y += o.height);
                            break;
                          case "l":
                            y += 0.5 * o.height;
                        }
                        return [
                          {
                            top: y - c.top,
                            left: _ - c.left,
                            width: 0,
                            height: 0,
                          },
                          r,
                          n,
                        ];
                      })(w.current, g, p, u, v, c),
                      3
                    ),
                    t = e[0],
                    s = e[1],
                    r = e[2];
                  E(t), O(s), P(r);
                }
              },
              [p, u, v, w.current, c, g]
            ),
            (0, r.jsxs)(
              r.Fragment,
              {
                children: [
                  (0, a.cloneElement)(y, T),
                  c &&
                    (0, r.jsx)(
                      i.WithPortal,
                      (0, n.__assign)(
                        {},
                        N,
                        {
                          className: (0, l.classNames)(
                            "Popper",
                            k && "Popper--" + k,
                            M && "Popper--" + M,
                            N.className
                          ),
                          "data-align": k,
                          "data-position": M,
                          portalContainerParent: g,
                          style: S || void 0,
                        },
                        { children: _ }
                      ),
                      void 0
                    ),
                ],
              },
              void 0
            )
          );
        });
    },
    647560: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(659397),
        i = function (e) {
          var t = e.inverted,
            s = e.size,
            i = e.className,
            o = (0, n.__rest)(e, ["inverted", "size", "className"]),
            l = (0, a.classNames)(
              "Progress",
              { "Progress--inverted": !!t },
              "Progress--size-" + s,
              i
            );
          return (0, r.jsxs)(
            "div",
            (0, n.__assign)({ className: l }, o, {
              children: [
                (0, r.jsx)("div", { className: "Progress__item" }, void 0),
                (0, r.jsx)("div", { className: "Progress__item" }, void 0),
                (0, r.jsx)("div", { className: "Progress__item" }, void 0),
              ],
            }),
            void 0
          );
        };
      i.defaultProps = { inverted: !1, size: "s" };
      const o = i;
    },
    484330: (e, t, s) => {
      "use strict";
      s.d(t, { RightMenu: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397),
        o = function (e) {
          var t = e.tabs,
            s = e.activeTab,
            o = e.onTabClick,
            l = e.loading,
            c = void 0 !== l && l,
            d = window.uiRightMenu,
            u = (0, a.useCallback)(
              function (e, n) {
                e.preventDefault();
                var r = t.find(function (e) {
                  return e.id === n;
                });
                if (r && r.id !== s && !("separator" in r)) {
                  var a = r.ref.current;
                  d.switchMenu(a), o(n, r.href);
                }
              },
              [s]
            );
          return (
            (0, a.useEffect)(
              function () {
                var e = t.find(function (e) {
                  return e.id === s;
                });
                if (e) {
                  var n = e.ref.current;
                  d.switchMenu(n);
                }
              },
              [s]
            ),
            (0, a.useEffect)(
              function () {
                var e = t.find(function (e) {
                  return e.id === s;
                });
                if (e) {
                  var n = e.ref.current;
                  c ? d.showProgress(n) : d.hideProgress(n);
                }
              },
              [c, s]
            ),
            (0, r.jsxs)(
              "div",
              (0, n.__assign)(
                { className: "page_block ui_rmenu ui_rmenu_pr", role: "list" },
                {
                  children: [
                    t.map(function (e) {
                      if (e.separator)
                        return (0, r.jsx)(
                          "div",
                          { className: "ui_rmenu_sep" },
                          e.id
                        );
                      var t = e,
                        s = t.id,
                        a = t.ref,
                        o = t.href,
                        l = t.label,
                        c = t.parentTab;
                      return (0, r.jsx)(
                        "a",
                        (0, n.__assign)(
                          {
                            className: (0, i.classNames)("ui_rmenu_item", {
                              ui_rmenu_subitem: !!c,
                            }),
                            ref: a,
                            href: o,
                            onClick: function (e) {
                              return u(e, s);
                            },
                          },
                          {
                            children: (0, r.jsx)(
                              "span",
                              { children: l },
                              void 0
                            ),
                          }
                        ),
                        s
                      );
                    }),
                    (0, r.jsx)(
                      "div",
                      { className: "ui_rmenu_slider _ui_rmenu_slider" },
                      void 0
                    ),
                  ],
                }
              ),
              void 0
            )
          );
        };
    },
    156589: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => c });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(973935),
        o = s(659397),
        l = s(889366).default;
      const c = (function (e) {
        function t(t) {
          var s,
            a = e.call(this, t) || this;
          return (
            (a.handleMouseDown = function (e) {
              a.props.onFocus &&
                "function" == typeof a.props.onFocus &&
                a.props.onFocus(a.state.opened),
                ("mousedown" === e.type && 0 !== e.button) ||
                  (e.stopPropagation(),
                  e.preventDefault(),
                  a.props.disabled ||
                    a.props.alwaysOpened ||
                    a.toggle(!a.state.opened));
            }),
            (a.getOptionByValue = function (e, t) {
              for (var s = 0; s < e.length; s++)
                if (e.hasOwnProperty(s)) {
                  var n = e[s];
                  if ("object" == typeof n) {
                    if ("group" === n.type && void 0 !== n.items) {
                      var r = a.getOptionByValue(n.items || [], t);
                      if (r) return r;
                    }
                    if (n.value === t) return n;
                  } else if (n === t) return n;
                }
            }),
            (a.setValue = function (e, t, s) {
              s && s.stopPropagation(),
                "object" == typeof t &&
                  a.props.searchable &&
                  (t = t.props.title);
              var n = {
                  value: e,
                  label: "object" == typeof t ? t : t.toString(),
                },
                r = { selected: n };
              a.fireChangeEvent(n),
                a.setState(r),
                a.props.alwaysOpened || a.toggle(!1);
            }),
            (a.fireChangeEvent = function (e) {
              e !== a.state.selected &&
                a.props.onChange &&
                a.props.onChange({ name: a.props.name, selected: e });
            }),
            (a.renderOption = function (e) {
              var t = (0, o.classNames)("Select__option", {
                  "Select__option--selected": e === a.state.selected,
                }),
                s = void 0 !== e.value ? e.value : e.label || e,
                i = void 0 !== e.label ? e.label : e;
              return (0, r.jsx)(
                "div",
                (0, n.__assign)(
                  {
                    className: t,
                    onMouseDown: function (e) {
                      return a.setValue(s, i, e);
                    },
                    onClick: function (e) {
                      return a.setValue(s, i, e);
                    },
                    title: e.title,
                  },
                  { children: i }
                ),
                s
              );
            }),
            (a.buildMenu = function () {
              var e = a.state.filteredOptions.map(function (e) {
                return "string" != typeof e && "group" === e.type
                  ? (0, r.jsxs)(
                      "div",
                      (0, n.__assign)(
                        { className: "Select__group" },
                        {
                          children: [
                            e.name &&
                              (0, r.jsx)(
                                "div",
                                (0, n.__assign)(
                                  { className: "Select__title" },
                                  { children: e.name }
                                ),
                                void 0
                              ),
                            e.items &&
                              e.items.map(function (e) {
                                return a.renderOption(e);
                              }),
                          ],
                        }
                      ),
                      e.name
                    )
                  : a.renderOption(e);
              });
              return e.length
                ? e
                : (0, r.jsx)(
                    "div",
                    (0, n.__assign)(
                      { className: "Select__noresults" },
                      { children: a.props.searchPlaceholder }
                    ),
                    void 0
                  );
            }),
            (a.renderMenu = function () {
              return a.props.customMenu
                ? a.props.customMenu(
                    a.state.filteredOptions,
                    a.setValue,
                    a.state.selected
                  )
                : (0, r.jsx)(
                    "div",
                    (0, n.__assign)(
                      { className: "Select__menu" },
                      { children: a.buildMenu() }
                    ),
                    void 0
                  );
            }),
            (a.filterOptions = function (e, t) {
              var s = e.toLowerCase();
              return t.filter(function (e) {
                return "string" == typeof e
                  ? e.toLowerCase().includes(s)
                  : "string" == typeof e.label
                  ? e.label.toLowerCase().includes(s)
                  : "object" == typeof e.label &&
                    e.label.props.title.toLowerCase().indexOf(s) >= 0;
              });
            }),
            (a.handleSearchType = function (e) {
              var t = a.filterOptions(e.target.value, a.state.allOptions);
              a.setState({
                selected: { value: e.target.value, label: e.target.value },
                filteredOptions: t,
              }),
                a.toggle(!0),
                a.props.onType && a.props.onType(e.target.value);
            }),
            (a.handleSearchFocus = function (e) {
              a.props.enableSearchSelectOnFocus && e.target.select(),
                a.props.onInputFocus && a.props.onInputFocus(e);
            }),
            (a.handleEditableType = function (e) {
              a.setState({ opened: !0 }),
                a.props.onEdit && a.props.onEdit(e.target.value);
            }),
            (a.buildControl = function (e) {
              var t,
                s,
                i = "",
                c = a.props,
                d = c.searchable,
                u = c.editable,
                h = c.inputOtherProps,
                p = (0, o.classNames)("Select__input", h && h.className);
              return (
                e && "string" == typeof e && (i = e),
                e &&
                  "object" == typeof e &&
                  (e && "string" == typeof e.label && (i = e.label),
                  e &&
                    "object" == typeof e.label &&
                    d &&
                    (i = e.label.props.title || ""),
                  e &&
                    "object" == typeof e.label &&
                    !d &&
                    (s = e.placeholder || e.label)),
                (t = d
                  ? (0, r.jsxs)(
                      "div",
                      (0, n.__assign)(
                        {
                          className: "Select__control",
                          onClick: a.handleMouseDown,
                        },
                        {
                          children: [
                            (0, r.jsx)(
                              l,
                              (0, n.__assign)(
                                {
                                  placeholder: a.props.placeholder,
                                  value: i || "",
                                  onChange: a.handleSearchType.bind(a),
                                  onFocus: a.handleSearchFocus.bind(a),
                                  onBlur: function (e) {
                                    var t, s;
                                    return null ===
                                      (s = (t = a.props).onInputBlur) ||
                                      void 0 === s
                                      ? void 0
                                      : s.call(t, e, a.state.filteredOptions);
                                  },
                                  disabled: a.props.disabled,
                                  isControlledOutside: !0,
                                },
                                h,
                                { className: p }
                              ),
                              void 0
                            ),
                            (0, r.jsx)(
                              "span",
                              { className: "Select__arrow" },
                              void 0
                            ),
                          ],
                        }
                      ),
                      void 0
                    )
                  : u
                  ? (0, r.jsxs)(
                      "div",
                      (0, n.__assign)(
                        {
                          className: "Select__control",
                          onClick: a.handleMouseDown,
                        },
                        {
                          children: [
                            (0, r.jsx)(
                              l,
                              (0, n.__assign)(
                                {
                                  placeholder: a.props.placeholder,
                                  id: a.props.id,
                                  value: i || "",
                                  onChange: a.handleEditableType,
                                  onFocus: a.props.onInputFocus,
                                  onBlur: a.props.onInputBlur,
                                  disabled: a.props.disabled,
                                  isControlledOutside: !0,
                                  autoComplete: "off",
                                },
                                h,
                                { className: p }
                              ),
                              void 0
                            ),
                            (0, r.jsx)(
                              "span",
                              { className: "Select__arrow" },
                              void 0
                            ),
                          ],
                        }
                      ),
                      void 0
                    )
                  : (0, r.jsxs)(
                      "div",
                      (0, n.__assign)(
                        {
                          className: "Select__control",
                          onClick: a.handleMouseDown,
                        },
                        {
                          children: [
                            (0, r.jsx)(
                              "div",
                              (0, n.__assign)(
                                { className: "Select__placeholder" },
                                { children: i || s }
                              ),
                              void 0
                            ),
                            (0, r.jsx)(
                              "span",
                              { className: "Select__arrow" },
                              void 0
                            ),
                          ],
                        }
                      ),
                      void 0
                    )),
                t
              );
            }),
            (a.handleDocumentClick = function (e) {
              a.mounted &&
                a.state.opened &&
                !a.props.alwaysOpened &&
                a.el &&
                !a.el.contains(e.target) &&
                a.toggle(!1);
            }),
            (s =
              void 0 !== t.value
                ? t.editable && void 0 !== t.customValue
                  ? { label: t.customValue, value: t.customValue }
                  : a.getOptionByValue(t.options, t.value)
                : { label: a.getLabel(t), value: "" }),
            (a.state = {
              filteredOptions: t.options,
              allOptions: t.options,
              selected: s,
              opened: !!t.alwaysOpened,
            }),
            (a.mounted = !0),
            a
          );
        }
        return (
          (0, n.__extends)(t, e),
          (t.prototype.getLabel = function (e) {
            return this.props.searchable
              ? this.props.value || ""
              : e.placeholder || "Select...";
          }),
          (t.prototype.UNSAFE_componentWillReceiveProps = function (e) {
            this.setState({
              filteredOptions: e.options,
              allOptions: e.options,
            }),
              this.props.editable && void 0 !== e.customValue
                ? this.setState({
                    selected: { label: e.customValue, value: e.customValue },
                  })
                : void 0 !== e.value && e.value !== this.state.selected
                ? this.setState({
                    selected: this.getOptionByValue(e.options, e.value),
                  })
                : void 0 === e.value &&
                  this.setState({
                    selected: { label: this.getLabel(e), value: "" },
                  });
          }),
          (t.prototype.componentDidMount = function () {
            (this.el = i.findDOMNode(this)),
              document.addEventListener(
                "mousedown",
                this.handleDocumentClick,
                !1
              ),
              document.addEventListener(
                "touchend",
                this.handleDocumentClick,
                !1
              );
          }),
          (t.prototype.componentWillUnmount = function () {
            (this.mounted = !1),
              document.removeEventListener(
                "mousedown",
                this.handleDocumentClick,
                !1
              ),
              document.removeEventListener(
                "touchend",
                this.handleDocumentClick,
                !1
              );
          }),
          (t.prototype.toggle = function (e) {
            var t = this;
            this.setState({ opened: e }, function () {
              var e, s, n, r;
              t.state.opened
                ? null === (s = (e = t.props).onShow) ||
                  void 0 === s ||
                  s.call(e)
                : null === (r = (n = t.props).onHide) ||
                  void 0 === r ||
                  r.call(n);
            });
          }),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.className,
              s = e.appearance,
              a = e.style,
              i = e.searchable,
              l = e.editable,
              c = e.disabled,
              d = e.position,
              u = e.isFluid,
              h = e.alwaysNotEmpty,
              p = this.state,
              m = p.selected,
              v = p.opened,
              f = (!h && m && "object" == typeof m && !m.value) || !1,
              g = i || l ? "secondary" : s,
              _ = (0, o.classNames)(
                "Select",
                "Select--" + g,
                "Select--" + d,
                {
                  "Select--opened": !!v,
                  "Select--disabled": !!c,
                  "Select--empty": f,
                  "Select--isFluid": u,
                },
                t
              ),
              y = this.buildControl(m);
            return (0, r.jsxs)(
              "div",
              (0, n.__assign)(
                { className: _, style: a },
                { children: [y, this.state.opened && this.renderMenu()] }
              ),
              void 0
            );
          }),
          (t.defaultProps = {
            appearance: "primary",
            searchPlaceholder: "No options found",
            searchable: !1,
            editable: !1,
            inputOtherProps: {},
            onShow: function () {},
            onHide: function () {},
            position: "b",
          }),
          t
        );
      })(a.Component);
    },
    284454: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397);
      const o = (function (e) {
        function t(s) {
          var n,
            r = e.call(this, s) || this;
          return (
            (r.onMouseDown = function (e) {
              0 === e.button &&
                (r.update(e),
                r.setState({ isActive: !0 }),
                window.addEventListener("mouseup", r.onMouseUp),
                window.addEventListener("mousemove", r.onMouseMove));
            }),
            (r.onMouseMove = function (e) {
              requestAnimationFrame(function () {
                return r.update(e);
              });
            }),
            (r.onMouseUp = function () {
              r.setState({ isActive: !1 }),
                window.removeEventListener("mousemove", r.onMouseMove),
                window.removeEventListener("mouseup", r.onMouseUp);
            }),
            (r.onMouseEnter = function () {
              window.addEventListener("mousemove", r.updateHint);
            }),
            (r.onMouseLeave = function () {
              window.removeEventListener("mousemove", r.updateHint);
            }),
            (r.update = function (e) {
              var s = r.props,
                n = s.min,
                a = s.max,
                i = s.gravity,
                o = r.getOffset(e),
                l = o.offset,
                c = o.width,
                d = r.getZeroPosition(),
                u = t.valueToPercent(l, 0, c);
              i && i > 0 && u >= d - i && u <= d + i && (u = d),
                r.state.percentValue !== u &&
                  (r.setState({ hintPosition: u }),
                  r.props.onChange(t.percentToValue(u, n, a)),
                  r.isControlledOutside || r.setState({ percentValue: u }));
            }),
            (r.updateHint = function (e) {
              var s = r.getOffset(e),
                n = s.offset,
                a = s.width;
              r.setState({ hintPosition: t.valueToPercent(n, 0, a) });
            }),
            (n = s.value
              ? t.valueToPercent(s.value, s.min, s.max)
              : s.defaultValue
              ? t.valueToPercent(s.defaultValue, s.min, s.max)
              : r.getZeroPosition()),
            (r.state = { percentValue: n, hintPosition: 0, isActive: !1 }),
            (r.isControlledOutside = r.props.hasOwnProperty("value")),
            (r.slider = (0, a.createRef)()),
            r
          );
        }
        return (
          (0, n.__extends)(t, e),
          (t.prototype.componentDidMount = function () {
            this.slider.current &&
              this.slider.current.addEventListener(
                "mousedown",
                this.onMouseDown
              ),
              this.slider.current &&
                this.slider.current.addEventListener(
                  "mouseenter",
                  this.onMouseEnter
                ),
              this.slider.current &&
                this.slider.current.addEventListener(
                  "mouseleave",
                  this.onMouseLeave
                );
          }),
          (t.prototype.componentWillUnmount = function () {
            this.slider.current &&
              this.slider.current.removeEventListener(
                "mousedown",
                this.onMouseDown
              ),
              this.slider.current &&
                this.slider.current.removeEventListener(
                  "mouseenter",
                  this.onMouseEnter
                ),
              this.slider.current &&
                this.slider.current.removeEventListener(
                  "mouseleave",
                  this.onMouseLeave
                );
          }),
          (t.prototype.componentDidUpdate = function (e) {
            var s = this.props.value;
            if (this.isControlledOutside && void 0 !== s && s !== e.value) {
              var n = this.props,
                r = n.min,
                a = n.max;
              this.setState({ percentValue: t.valueToPercent(s, r, a) });
            }
          }),
          (t.valueToPercent = function (e, t, s) {
            return (
              e < t && (e = t), e > s && (e = s), (100 * (e - t)) / (s - t)
            );
          }),
          (t.percentToValue = function (e, t, s) {
            return Math.round(100 * ((e * (s - t)) / 100 + t)) / 100;
          }),
          (t.getFillPosition = function (e, t) {
            var s, n;
            return (
              e < t ? ((s = e), (n = t - e)) : ((s = t), (n = e - t)),
              { left: s, width: n }
            );
          }),
          (t.prototype.getZeroPosition = function () {
            var e = this.props,
              s = e.min,
              n = e.max;
            return t.valueToPercent(0, s, n);
          }),
          (t.prototype.getOffset = function (e) {
            var t = this.props,
              s = t.min,
              n = t.max,
              r = t.step,
              a = (0, i.getOffsetRect)(this.slider.current),
              o = a.left,
              l = a.width,
              c = e.clientX - o;
            if (r > 0) {
              var d = l / ((n - s) / r);
              c = Math.round(c / d) * d;
            }
            return { offset: c, left: o, width: l };
          }),
          (t.prototype.render = function () {
            var e = this.props,
              s = e.min,
              a = e.max,
              o = e.isShowZero,
              l = e.isShowHandle,
              c = e.appearance,
              d = this.state,
              u = d.percentValue,
              h = d.hintPosition,
              p = d.isActive,
              m = this.getZeroPosition(),
              v = t.getFillPosition(u, m),
              f = v.left,
              g = v.width,
              _ = u !== m,
              y = this.props.formatHint(t.percentToValue(h, s, a)),
              N = (0, i.classNames)("Slider", "Slider--" + c, {
                Slider__active: p,
              }),
              b = (0, i.classNames)("Slider__handle", {
                "Slider__handle--active": _,
                "Slider__handle--show": l,
              });
            return (0, r.jsxs)(
              "div",
              (0, n.__assign)(
                { className: N, ref: this.slider },
                {
                  children: [
                    (0, r.jsx)(
                      "input",
                      { type: "hidden", name, value: u },
                      void 0
                    ),
                    o &&
                      _ &&
                      (0, r.jsx)(
                        "div",
                        {
                          className: "Slider__middletick",
                          style: { left: m + "%" },
                        },
                        void 0
                      ),
                    (0, r.jsx)(
                      "span",
                      (0, n.__assign)(
                        { className: "Slider__hint", style: { left: h + "%" } },
                        { children: y }
                      ),
                      void 0
                    ),
                    (0, r.jsx)(
                      "div",
                      {
                        className: "Slider__fill",
                        style: { left: f + "%", width: g + "%" },
                      },
                      void 0
                    ),
                    (0, r.jsx)(
                      "div",
                      { className: b, style: { left: u + "%" } },
                      void 0
                    ),
                  ],
                }
              ),
              void 0
            );
          }),
          (t.defaultProps = {
            min: 0,
            max: 100,
            step: 0,
            gravity: 0,
            isShowZero: !1,
            isShowHandle: !1,
            defaultValue: 0,
            appearance: "blue",
            name: "value",
            onChange: function () {},
            formatHint: function (e) {
              return e;
            },
          }),
          t
        );
      })(a.Component);
    },
    841118: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => i });
      var n = s(570655),
        r = s(785893),
        a = s(659397);
      const i = function (e) {
        var t = e.children,
          s = e.className,
          i = (0, n.__rest)(e, ["children", "className"]);
        return (0, r.jsx)(
          "div",
          (0, n.__assign)(
            {},
            i,
            { className: (0, a.classNames)("Stub", s) },
            { children: t || "No results." }
          ),
          void 0
        );
      };
    },
    641388: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => o });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(659397);
      const o = (function (e) {
        function t(t) {
          var s = e.call(this, t) || this;
          return (
            (s.getActiveTabKey = function () {
              var e = s.props,
                t = e.active,
                n = e.activeRequired,
                r = [],
                i = null;
              return (
                a.Children.forEach(s.props.children, function (e) {
                  (0, a.isValidElement)(e) &&
                    (e.key === t ? (i = e.key) : r.push(e));
                }),
                i ||
                  ("number" == typeof t && r.length > t
                    ? r[t].key || t
                    : n && r.length
                    ? r[0].key || 0
                    : null)
              );
            }),
            (s.onClick = function (e, t) {
              if (t !== s.state.active) {
                var n = s.refsStore[t],
                  r = s.getTransform(n);
                s.setState({ active: t, isAnimating: !0, transform: r }),
                  s.props.onTabClick && s.props.onTabClick(e, t);
              }
            }),
            (s.onTransitionEnd = function (e) {
              "transform" === e.propertyName && s.setState({ isAnimating: !1 });
            }),
            (s.storeRef = function (e, t) {
              t && (s.refsStore[e] = t);
            }),
            (s.refsStore = {}),
            (s.state = { isAnimating: !1, active: s.getActiveTabKey() }),
            s
          );
        }
        return (
          (0, n.__extends)(t, e),
          (t.reactifyTabs = function (e) {
            return (Array.isArray(e) ? e : Object.values(e)).map(function (e) {
              return (0,
              r.jsx)("a", (0, n.__assign)({ href: e[2], onClick: function () {} }, { children: e[1] ? e[1] : "" }), e[0]);
            });
          }),
          (t.prototype.componentDidUpdate = function (e) {
            void 0 !== this.props.active &&
              this.props.active !== e.active &&
              this.setState({ active: this.props.active });
          }),
          (t.prototype.getTransform = function (e) {
            var t = e.offsetWidth;
            return (
              "translateX(" +
              (e.offsetLeft - 50 + 0.5 * t) +
              "px) scaleX(" +
              t / 100 +
              ")"
            );
          }),
          (t.prototype.componentDidMount = function () {
            if (this.state.active) {
              var e = this.refsStore[this.state.active];
              this.setState({ transform: this.getTransform(e) });
            }
          }),
          (t.prototype.render = function () {
            var e = this,
              t = { "Tabs--animating": this.state.isAnimating };
            return (0, r.jsxs)(
              "nav",
              (0, n.__assign)(
                {
                  className: (0, i.classNames)("Tabs", this.props.className, t),
                  style: this.props.style,
                },
                {
                  children: [
                    (0, r.jsx)(
                      "ul",
                      (0, n.__assign)(
                        { className: "Tabs__list" },
                        {
                          children: a.Children.map(
                            this.props.children,
                            function (t, s) {
                              var o;
                              if (!(0, a.isValidElement)(t)) return null;
                              var l = t.key || s;
                              return (0, r.jsx)(
                                "li",
                                (0, n.__assign)(
                                  {
                                    className: (0, i.classNames)("Tabs__item", {
                                      "Tabs__item--active":
                                        e.state.active === l,
                                      "Tabs__item--disabled":
                                        null === (o = e.props.disabledTabMap) ||
                                        void 0 === o
                                          ? void 0
                                          : o[l],
                                    }),
                                    onClick: function (t) {
                                      return e.onClick(t, l);
                                    },
                                    ref: function (t) {
                                      return e.storeRef(l, t);
                                    },
                                  },
                                  { children: t }
                                ),
                                l
                              );
                            }
                          ),
                        }
                      ),
                      void 0
                    ),
                    this.props.aside &&
                      (0, r.jsx)(
                        "div",
                        (0, n.__assign)(
                          { className: "Tabs__aside" },
                          { children: this.props.aside }
                        ),
                        void 0
                      ),
                    (0, r.jsx)(
                      "div",
                      {
                        style: { transform: this.state.transform },
                        className: "Tabs__divider",
                        onTransitionEnd: this.onTransitionEnd,
                      },
                      void 0
                    ),
                  ],
                }
              ),
              void 0
            );
          }),
          (t.defaultProps = {
            active: 0,
            activeRequired: !0,
            aside: null,
            style: {},
            className: "",
          }),
          t
        );
      })(a.Component);
    },
    897404: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => d });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(973935),
        o = s(659397),
        l = s(195200),
        c = function (e) {
          var t = e.position,
            s = e.align,
            n = e.text,
            r = e.rect,
            a = e.marginTop,
            i = e.marginLeft,
            o = e.maxWidth,
            l = e.appearance,
            c = r.left,
            d = r.top;
          switch (t) {
            case "t":
              c += 0.5 * r.width;
              break;
            case "r":
              (c += r.width), (d += 0.5 * r.height);
              break;
            case "b":
              (c += 0.5 * r.width), (d += r.height);
              break;
            case "l":
              d += 0.5 * r.height;
          }
          return {
            tooltip: {
              position: t,
              align: s,
              text: n,
              x: (c = Math.round(c + (i || 0))),
              y: (d = Math.round(d + (a || 0))),
              maxWidth: o,
              appearance: l,
            },
          };
        };
      const d = (function (e) {
        function t(t) {
          var s = e.call(this, t) || this;
          return (
            (s.tooltipRef = (0, a.createRef)()),
            (s.onMouseEnter = function () {
              s.state.tooltip
                ? (clearTimeout(s.closeDelayTimeout),
                  s.state.tooltip.removed &&
                    s.setState(
                      (0, n.__assign)((0, n.__assign)({}, s.state), {
                        tooltip: (0, n.__assign)(
                          (0, n.__assign)({}, s.state.tooltip),
                          { removed: !1 }
                        ),
                      })
                    ))
                : s.props.delay
                ? (s.openDelayTimeout = window.setTimeout(function () {
                    (s.openDelayTimeout = 0), s.drawTooltip();
                  }, s.props.delay))
                : s.drawTooltip();
            }),
            (s.onMouseLeave = function () {
              if (s.state.tooltip)
                s.props.delayHide
                  ? (s.closeDelayTimeout = window.setTimeout(function () {
                      s.update();
                    }, s.props.delayHide))
                  : s.update();
              else if (s.openDelayTimeout)
                return (
                  clearTimeout(s.openDelayTimeout),
                  void (s.openDelayTimeout = 0)
                );
            }),
            (s.onTransitionEnd = function (e) {
              "visibility" === e.propertyName &&
                s.state.tooltip &&
                s.setState({ tooltip: void 0 });
            }),
            (s.state = { el: null }),
            s
          );
        }
        return (
          (0, n.__extends)(t, e),
          (t.prototype.componentDidMount = function () {
            var e = i.findDOMNode(this);
            this.setState({ el: e }),
              null == e || e.addEventListener("mouseenter", this.onMouseEnter),
              null == e || e.addEventListener("mouseleave", this.onMouseLeave);
          }),
          (t.prototype.componentDidUpdate = function (e, t) {
            var s, n;
            !t.tooltip &&
              this.state.tooltip &&
              this.props.allowMouseOverTooltipContent &&
              (null === (s = this.tooltipRef.current) ||
                void 0 === s ||
                s.addEventListener("mouseenter", this.onMouseEnter),
              null === (n = this.tooltipRef.current) ||
                void 0 === n ||
                n.addEventListener("mouseleave", this.onMouseLeave));
          }),
          (t.prototype.componentWillUnmount = function () {
            var e, t, s, n;
            null === (e = this.state.el) ||
              void 0 === e ||
              e.removeEventListener("mouseenter", this.onMouseEnter),
              null === (t = this.state.el) ||
                void 0 === t ||
                t.removeEventListener("mouseleave", this.onMouseLeave),
              null === (s = this.tooltipRef.current) ||
                void 0 === s ||
                s.removeEventListener("mouseenter", this.onMouseEnter),
              null === (n = this.tooltipRef.current) ||
                void 0 === n ||
                n.removeEventListener("mouseleave", this.onMouseLeave),
              clearTimeout(this.closeDelayTimeout),
              clearTimeout(this.openDelayTimeout);
          }),
          (t.getDerivedStateFromProps = function (e, t) {
            return t.tooltip &&
              (e.text !== t.tooltip.text ||
                e.position !== t.tooltip.position ||
                e.align !== t.tooltip.align ||
                e.maxWidth !== t.tooltip.maxWidth ||
                e.appearance !== t.tooltip.appearance)
              ? c(
                  (0, n.__assign)((0, n.__assign)({}, e), {
                    rect: (0, o.getOffsetRect)(
                      t.el instanceof HTMLElement ? t.el : null
                    ),
                  })
                )
              : null;
          }),
          (t.prototype.drawTooltip = function () {
            if (this.state.el && !this.state.tooltip) {
              var e = this.props,
                t = e.text,
                s = e.position,
                n = e.align,
                r = e.marginTop,
                a = e.marginLeft,
                i = e.maxWidth,
                l = e.appearance,
                c = (0, o.getOffsetRect)(
                  this.state.el instanceof HTMLElement ? this.state.el : null
                );
              this.update({
                text: t,
                position: s,
                align: n,
                rect: c,
                marginTop: r,
                marginLeft: a,
                maxWidth: i,
                appearance: l,
              });
            }
          }),
          (t.prototype.update = function (e) {
            e
              ? this.setState(c(e))
              : this.setState({
                  tooltip: Object.assign({}, this.state.tooltip, {
                    removed: !0,
                  }),
                });
          }),
          (t.prototype.render = function () {
            var e = this.state.tooltip
              ? (0, n.__assign)((0, n.__assign)({}, this.state.tooltip), {
                  className: (0, o.classNames)(this.props.className, {
                    "Tooltip--noPointerEvents":
                      !this.props.allowMouseOverTooltipContent,
                  }),
                })
              : null;
            return e && "undefined" != typeof window
              ? (0, r.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      this.props.children,
                      (0, r.jsx)(
                        l.default,
                        (0, n.__assign)({ tooltipInRef: this.tooltipRef }, e, {
                          onTransitionEnd: this.onTransitionEnd,
                        }),
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              : this.props.children;
          }),
          (t.defaultProps = {
            position: "b",
            align: "center",
            marginTop: 0,
            marginLeft: 0,
            appearance: "dark",
            delay: 0,
            delayHide: 0,
            allowMouseOverTooltipContent: !1,
          }),
          t
        );
      })(a.Component);
    },
    351013: (e, t, s) => {
      "use strict";
      s.d(t, { TooltipNew: () => c });
      var n,
        r = s(570655),
        a = s(785893),
        i = s(667294),
        o = s(814217),
        l = s(659397);
      function c(e) {
        var t = e.children,
          s = e.content,
          c = e.position,
          u = void 0 === c ? "auto" : c,
          h = e.align,
          p = void 0 === h ? "auto" : h,
          m = e.appearance,
          v = void 0 === m ? "dark" : m,
          f = e.open,
          g = void 0 !== f && f,
          _ = e.onOpen,
          y = e.onClose,
          N = e.delay,
          b = void 0 === N ? 50 : N,
          w = e.tooltipClassName,
          x = e.forceClose,
          S = (0, r.__rest)(e, [
            "children",
            "content",
            "position",
            "align",
            "appearance",
            "open",
            "onOpen",
            "onClose",
            "delay",
            "tooltipClassName",
            "forceClose",
          ]),
          E = (0, r.__read)((0, i.useState)(g ? n.OPENED : n.CLOSED), 2),
          C = E[0],
          k = E[1],
          O = (0, i.useRef)(null);
        (0, i.useEffect)(
          function () {
            var e = null,
              t = null,
              s = function () {
                d(e),
                  (e = window.setTimeout(function () {
                    k(n.OPENED), _ && _();
                  }, b));
              },
              r = function () {
                d(e),
                  (t = window.setTimeout(function () {
                    C === n.OPENED ? k(n.IS_CLOSING) : (k(n.CLOSED), y && y());
                  }, 0));
              };
            if (!x)
              return (
                O.current &&
                  (O.current.addEventListener("mouseenter", s),
                  O.current.addEventListener("mouseleave", r)),
                function () {
                  O.current &&
                    (O.current.removeEventListener("mouseenter", s),
                    O.current.removeEventListener("mouseleave", r)),
                    d(e),
                    d(t);
                }
              );
            r();
          },
          [O, C, x]
        ),
          (0, i.useEffect)(
            function () {
              var e = g ? n.OPENED : n.CLOSED;
              C !== e && k(e);
            },
            [g]
          );
        var j = (0, i.useCallback)(
            function () {
              C === n.IS_CLOSING && (k(n.CLOSED), y && y());
            },
            [C]
          ),
          M = (0, l.classNames)("TooltipNew", w, {
            "TooltipNew--removed": "isClosing" === C,
            "TooltipNew--dark": "dark" === v,
            "TooltipNew--light": "light" === v,
          }),
          P = (0, a.jsx)(
            "div",
            (0, r.__assign)(
              { className: M, onTransitionEnd: j },
              { children: s }
            ),
            void 0
          );
        return (0, a.jsx)(
          o.Popper,
          (0, r.__assign)(
            { open: C !== n.CLOSED, position: u, align: p, content: P, ref: O },
            S,
            { children: t }
          ),
          void 0
        );
      }
      function d(e) {
        e && clearTimeout(e);
      }
      !(function (e) {
        (e.OPENED = "opened"),
          (e.IS_CLOSING = "isClosing"),
          (e.CLOSED = "closed");
      })(n || (n = {}));
    },
    6969: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      var n = s(570655),
        r = s(785893);
      const a = function (e) {
        var t = e.children;
        return (0, r.jsx)(
          "div",
          (0, n.__assign)({ className: "VisuallyHidden" }, { children: t }),
          void 0
        );
      };
    },
    394021: (e, t, s) => {
      "use strict";
      s.d(t, { WithPortal: () => l });
      var n = s(570655),
        r = s(785893),
        a = s(667294),
        i = s(973935),
        o = function () {
          return document.createElement("div");
        },
        l = (0, a.forwardRef)(function (e, t) {
          var s = e.children,
            l = e.portalContainerParent,
            c = void 0 === l ? document.body : l,
            d = e.renderNodeFactory,
            u = void 0 === d ? o : d,
            h = (0, n.__rest)(e, [
              "children",
              "portalContainerParent",
              "renderNodeFactory",
            ]),
            p = (0, a.useRef)(null);
          return (
            p.current || ((p.current = u()), c.appendChild(p.current)),
            (0, a.useEffect)(function () {
              return function () {
                p.current && p.current.remove();
              };
            }, []),
            i.createPortal(
              (0, r.jsx)(
                "div",
                (0, n.__assign)({}, h, { ref: t }, { children: s }),
                void 0
              ),
              p.current
            )
          );
        });
    },
    713696: (e, t, s) => {
      "use strict";
      s.d(t, { decodeHTMLEntities: () => a });
      var n = s(570655),
        r = [
          ["&amp;", "&"],
          ["&lt;", "<"],
          ["&gt;", ">"],
          ["&quot;", '"'],
          ["&#33;", "!"],
        ];
      function a(e) {
        return r
          .reduce(function (e, t) {
            var s = (0, n.__read)(t, 2),
              r = s[0],
              a = s[1];
            return e.replace(new RegExp(r, "ig"), a);
          }, e)
          .replace(/&#(\d+);/g, function (e, t) {
            return String.fromCodePoint(t);
          });
      }
    },
    630810: (e, t, s) => {
      "use strict";
      s.d(t, { useCombinedRefs: () => r });
      var n = s(667294);
      function r() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var s = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(
            function () {
              e.forEach(function (e) {
                null !== e && null !== s && (e.current = s.current);
              });
            },
            [e]
          ),
          s
        );
      }
    },
  },
]);
try {
  stManager.done("dist/palette.df671b66cb90891478f3.js");
} catch (e) {}
