0;
!(function (n, l) {
  "object" == typeof exports && "undefined" != typeof module
    ? l(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], l)
    : l((n.preact = n.preact || {}));
})(this, function (n) {
  if (n.render) {
    return;
  }
  var l,
    u,
    i,
    t,
    o,
    f,
    r,
    e = {},
    c = [],
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n, l) {
    for (var u in l) n[u] = l[u];
    return n;
  }
  function v(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }
  function h(n, l, u) {
    var i,
      t,
      o,
      f = arguments,
      r = {};
    for (o in l)
      "key" == o ? (i = l[o]) : "ref" == o ? (t = l[o]) : (r[o] = l[o]);
    if (arguments.length > 3)
      for (u = [u], o = 3; o < arguments.length; o++) u.push(f[o]);
    if (
      (null != u && (r.children = u),
      "function" == typeof n && null != n.defaultProps)
    )
      for (o in n.defaultProps) void 0 === r[o] && (r[o] = n.defaultProps[o]);
    return y(n, r, i, t, null);
  }
  function y(n, u, i, t, o) {
    var f = {
      type: n,
      props: u,
      key: i,
      ref: t,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: o,
    };
    return null == o && (f.__v = f), null != l.vnode && l.vnode(f), f;
  }
  function p(n) {
    return n.children;
  }
  function d(n, l) {
    (this.props = n), (this.context = l);
  }
  function _(n, l) {
    if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
    for (var u; l < n.__k.length; l++)
      if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? _(n) : null;
  }
  function w(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
        if (null != (u = n.__k[l]) && null != u.__e) {
          n.__e = n.__c.base = u.__e;
          break;
        }
      return w(n);
    }
  }
  function k(n) {
    ((!n.__d && (n.__d = !0) && i.push(n) && !m.__r++) ||
      o !== l.debounceRendering) &&
      ((o = l.debounceRendering) || t)(m);
  }
  function m() {
    for (var n; (m.__r = i.length); )
      (n = i.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      })),
        (i = []),
        n.some(function (n) {
          var l, u, i, t, o, f, r;
          n.__d &&
            ((f = (o = (l = n).__v).__e),
            (r = l.__P) &&
              ((u = []),
              ((i = a({}, o)).__v = i),
              (t = z(
                r,
                o,
                i,
                l.__n,
                void 0 !== r.ownerSVGElement,
                null,
                u,
                null == f ? _(o) : f
              )),
              N(u, o),
              t != f && w(o)));
        });
  }
  function g(n, l, u, i, t, o, f, r, s, a) {
    var h,
      d,
      w,
      k,
      m,
      g,
      x,
      A = (i && i.__k) || c,
      P = A.length;
    for (
      s == e && (s = null != f ? f[0] : P ? _(i, 0) : null), u.__k = [], h = 0;
      h < l.length;
      h++
    )
      if (
        null !=
        (k = u.__k[h] =
          null == (k = l[h]) || "boolean" == typeof k
            ? null
            : "string" == typeof k || "number" == typeof k
            ? y(null, k, null, null, k)
            : Array.isArray(k)
            ? y(p, { children: k }, null, null, null)
            : null != k.__e || null != k.__c
            ? y(k.type, k.props, k.key, null, k.__v)
            : k)
      ) {
        if (
          ((k.__ = u),
          (k.__b = u.__b + 1),
          null === (w = A[h]) || (w && k.key == w.key && k.type === w.type))
        )
          A[h] = void 0;
        else
          for (d = 0; d < P; d++) {
            if ((w = A[d]) && k.key == w.key && k.type === w.type) {
              A[d] = void 0;
              break;
            }
            w = null;
          }
        (m = z(n, k, (w = w || e), t, o, f, r, s, a)),
          (d = k.ref) &&
            w.ref != d &&
            (x || (x = []),
            w.ref && x.push(w.ref, null, k),
            x.push(d, k.__c || m, k)),
          null != m
            ? (null == g && (g = m),
              (s = b(n, k, w, A, f, m, s)),
              a || "option" != u.type
                ? "function" == typeof u.type && (u.__d = s)
                : (n.value = ""))
            : s && w.__e == s && s.parentNode != n && (s = _(w));
      }
    if (((u.__e = g), null != f && "function" != typeof u.type))
      for (h = f.length; h--; ) null != f[h] && v(f[h]);
    for (h = P; h--; ) null != A[h] && H(A[h], A[h]);
    if (x) for (h = 0; h < x.length; h++) $(x[h], x[++h], x[++h]);
  }
  function b(n, l, u, i, t, o, f) {
    var r, e, c;
    if (void 0 !== l.__d) (r = l.__d), (l.__d = void 0);
    else if (t == u || o != f || null == o.parentNode)
      n: if (null == f || f.parentNode !== n) n.appendChild(o), (r = null);
      else {
        for (e = f, c = 0; (e = e.nextSibling) && c < i.length; c += 2)
          if (e == o) break n;
        n.insertBefore(o, f), (r = f);
      }
    return void 0 !== r ? r : o.nextSibling;
  }
  function x(n, l, u, i, t) {
    var o;
    for (o in u)
      "children" === o || "key" === o || o in l || P(n, o, null, u[o], i);
    for (o in l)
      (t && "function" != typeof l[o]) ||
        "children" === o ||
        "key" === o ||
        "value" === o ||
        "checked" === o ||
        u[o] === l[o] ||
        P(n, o, l[o], u[o], i);
  }
  function A(n, l, u) {
    "-" === l[0]
      ? n.setProperty(l, u)
      : (n[l] =
          null == u ? "" : "number" != typeof u || s.test(l) ? u : u + "px");
  }
  function P(n, l, u, i, t) {
    var o, f;
    if ((t && "className" == l && (l = "class"), "style" === l))
      if ("string" == typeof u) n.style = u;
      else {
        if (("string" == typeof i && (n.style = i = ""), i))
          for (l in i) (u && l in u) || A(n.style, l, "");
        if (u) for (l in u) (i && u[l] === i[l]) || A(n.style, l, u[l]);
      }
    else
      "o" === l[0] && "n" === l[1]
        ? ((o = l !== (l = l.replace(/Capture$/, ""))),
          (f = l.toLowerCase()) in n && (l = f),
          (l = l.slice(2)),
          n.l || (n.l = {}),
          (n.l[l] = u),
          u ? i || n.addEventListener(l, C, o) : n.removeEventListener(l, C, o))
        : "list" !== l &&
          "tagName" !== l &&
          "form" !== l &&
          "type" !== l &&
          "size" !== l &&
          "download" !== l &&
          "href" !== l &&
          !t &&
          l in n
        ? (n[l] = null == u ? "" : u)
        : "function" != typeof u &&
          "dangerouslySetInnerHTML" !== l &&
          (l !== (l = l.replace(/xlink:?/, ""))
            ? null == u || !1 === u
              ? n.removeAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  l.toLowerCase()
                )
              : n.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  l.toLowerCase(),
                  u
                )
            : null == u || (!1 === u && !/^ar/.test(l))
            ? n.removeAttribute(l)
            : n.setAttribute(l, u));
  }
  function C(n) {
    this.l[n.type](l.event ? l.event(n) : n);
  }
  function j(n, l, u) {
    var i, t;
    for (i = 0; i < n.__k.length; i++)
      (t = n.__k[i]) &&
        ((t.__ = n),
        t.__e &&
          ("function" == typeof t.type && t.__k.length > 1 && j(t, l, u),
          (l = b(u, t, t, n.__k, null, t.__e, l)),
          "function" == typeof n.type && (n.__d = l)));
  }
  function z(n, u, i, t, o, f, r, e, c) {
    var s,
      v,
      h,
      y,
      _,
      w,
      k,
      m,
      b,
      x,
      A,
      P = u.type;
    if (void 0 !== u.constructor) return null;
    (s = l.__b) && s(u);
    try {
      n: if ("function" == typeof P) {
        if (
          ((m = u.props),
          (b = (s = P.contextType) && t[s.__c]),
          (x = s ? (b ? b.props.value : s.__) : t),
          i.__c
            ? (k = (v = u.__c = i.__c).__ = v.__E)
            : ("prototype" in P && P.prototype.render
                ? (u.__c = v = new P(m, x))
                : ((u.__c = v = new d(m, x)),
                  (v.constructor = P),
                  (v.render = I)),
              b && b.sub(v),
              (v.props = m),
              v.state || (v.state = {}),
              (v.context = x),
              (v.__n = t),
              (h = v.__d = !0),
              (v.__h = [])),
          null == v.__s && (v.__s = v.state),
          null != P.getDerivedStateFromProps &&
            (v.__s == v.state && (v.__s = a({}, v.__s)),
            a(v.__s, P.getDerivedStateFromProps(m, v.__s))),
          (y = v.props),
          (_ = v.state),
          h)
        )
          null == P.getDerivedStateFromProps &&
            null != v.componentWillMount &&
            v.componentWillMount(),
            null != v.componentDidMount && v.__h.push(v.componentDidMount);
        else {
          if (
            (null == P.getDerivedStateFromProps &&
              m !== y &&
              null != v.componentWillReceiveProps &&
              v.componentWillReceiveProps(m, x),
            (!v.__e &&
              null != v.shouldComponentUpdate &&
              !1 === v.shouldComponentUpdate(m, v.__s, x)) ||
              u.__v === i.__v)
          ) {
            (v.props = m),
              (v.state = v.__s),
              u.__v !== i.__v && (v.__d = !1),
              (v.__v = u),
              (u.__e = i.__e),
              (u.__k = i.__k),
              v.__h.length && r.push(v),
              j(u, e, n);
            break n;
          }
          null != v.componentWillUpdate && v.componentWillUpdate(m, v.__s, x),
            null != v.componentDidUpdate &&
              v.__h.push(function () {
                v.componentDidUpdate(y, _, w);
              });
        }
        (v.context = x),
          (v.props = m),
          (v.state = v.__s),
          (s = l.__r) && s(u),
          (v.__d = !1),
          (v.__v = u),
          (v.__P = n),
          (s = v.render(v.props, v.state, v.context)),
          (v.state = v.__s),
          null != v.getChildContext && (t = a(a({}, t), v.getChildContext())),
          h ||
            null == v.getSnapshotBeforeUpdate ||
            (w = v.getSnapshotBeforeUpdate(y, _)),
          (A =
            null != s && s.type == p && null == s.key ? s.props.children : s),
          g(n, Array.isArray(A) ? A : [A], u, i, t, o, f, r, e, c),
          (v.base = u.__e),
          v.__h.length && r.push(v),
          k && (v.__E = v.__ = null),
          (v.__e = !1);
      } else null == f && u.__v === i.__v ? ((u.__k = i.__k), (u.__e = i.__e)) : (u.__e = T(i.__e, u, i, t, o, f, r, c));
      (s = l.diffed) && s(u);
    } catch (n) {
      (u.__v = null), l.__e(n, u, i);
    }
    return u.__e;
  }
  function N(n, u) {
    l.__c && l.__c(u, n),
      n.some(function (u) {
        try {
          (n = u.__h),
            (u.__h = []),
            n.some(function (n) {
              n.call(u);
            });
        } catch (n) {
          l.__e(n, u.__v);
        }
      });
  }
  function T(n, l, u, i, t, o, f, r) {
    var s,
      a,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
    if (((t = "svg" === l.type || t), null != o))
      for (s = 0; s < o.length; s++)
        if (
          null != (a = o[s]) &&
          ((null === l.type ? 3 === a.nodeType : a.localName === l.type) ||
            n == a)
        ) {
          (n = a), (o[s] = null);
          break;
        }
    if (null == n) {
      if (null === l.type) return document.createTextNode(d);
      (n = t
        ? document.createElementNS("http://www.w3.org/2000/svg", l.type)
        : document.createElement(l.type, d.is && { is: d.is })),
        (o = null),
        (r = !1);
    }
    if (null === l.type) p !== d && n.data !== d && (n.data = d);
    else {
      if (
        (null != o && (o = c.slice.call(n.childNodes)),
        (v = (p = u.props || e).dangerouslySetInnerHTML),
        (h = d.dangerouslySetInnerHTML),
        !r)
      ) {
        if (null != o)
          for (p = {}, y = 0; y < n.attributes.length; y++)
            p[n.attributes[y].name] = n.attributes[y].value;
        (h || v) &&
          ((h && v && h.__html == v.__html) ||
            (n.innerHTML = (h && h.__html) || ""));
      }
      x(n, d, p, t, r),
        h
          ? (l.__k = [])
          : ((s = l.props.children),
            g(
              n,
              Array.isArray(s) ? s : [s],
              l,
              u,
              i,
              "foreignObject" !== l.type && t,
              o,
              f,
              e,
              r
            )),
        r ||
          ("value" in d &&
            void 0 !== (s = d.value) &&
            s !== n.value &&
            P(n, "value", s, p.value, !1),
          "checked" in d &&
            void 0 !== (s = d.checked) &&
            s !== n.checked &&
            P(n, "checked", s, p.checked, !1));
    }
    return n;
  }
  function $(n, u, i) {
    try {
      "function" == typeof n ? n(u) : (n.current = u);
    } catch (n) {
      l.__e(n, i);
    }
  }
  function H(n, u, i) {
    var t, o, f;
    if (
      (l.unmount && l.unmount(n),
      (t = n.ref) && ((t.current && t.current !== n.__e) || $(t, null, u)),
      i || "function" == typeof n.type || (i = null != (o = n.__e)),
      (n.__e = n.__d = void 0),
      null != (t = n.__c))
    ) {
      if (t.componentWillUnmount)
        try {
          t.componentWillUnmount();
        } catch (n) {
          l.__e(n, u);
        }
      t.base = t.__P = null;
    }
    if ((t = n.__k)) for (f = 0; f < t.length; f++) t[f] && H(t[f], u, i);
    null != o && v(o);
  }
  function I(n, l, u) {
    return this.constructor(n, u);
  }
  function L(n, u, i) {
    var t, o, r;
    l.__ && l.__(n, u),
      (o = (t = i === f) ? null : (i && i.__k) || u.__k),
      (n = h(p, null, [n])),
      (r = []),
      z(
        u,
        ((t ? u : i || u).__k = n),
        o || e,
        e,
        void 0 !== u.ownerSVGElement,
        i && !t
          ? [i]
          : o
          ? null
          : u.childNodes.length
          ? c.slice.call(u.childNodes)
          : null,
        r,
        i || e,
        t
      ),
      N(r, n);
  }
  (l = {
    __e: function (n, l) {
      for (var u, i; (l = l.__); )
        if ((u = l.__c) && !u.__)
          try {
            if (
              (u.constructor &&
                null != u.constructor.getDerivedStateFromError &&
                ((i = !0),
                u.setState(u.constructor.getDerivedStateFromError(n))),
              null != u.componentDidCatch && ((i = !0), u.componentDidCatch(n)),
              i)
            )
              return k((u.__E = u));
          } catch (l) {
            n = l;
          }
      throw n;
    },
  }),
    (u = function (n) {
      return null != n && void 0 === n.constructor;
    }),
    (d.prototype.setState = function (n, l) {
      var u;
      (u =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = a({}, this.state))),
        "function" == typeof n && (n = n(a({}, u), this.props)),
        n && a(u, n),
        null != n && this.__v && (l && this.__h.push(l), k(this));
    }),
    (d.prototype.forceUpdate = function (n) {
      this.__v && ((this.__e = !0), n && this.__h.push(n), k(this));
    }),
    (d.prototype.render = p),
    (i = []),
    (t =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (m.__r = 0),
    (f = e),
    (r = 0),
    (n.render = L),
    (n.hydrate = function (n, l) {
      L(n, l, f);
    }),
    (n.createElement = h),
    (n.h = h),
    (n.Fragment = p),
    (n.createRef = function () {
      return { current: null };
    }),
    (n.isValidElement = u),
    (n.Component = d),
    (n.cloneElement = function (n, l, u) {
      var i,
        t,
        o,
        f = arguments,
        r = a({}, n.props);
      for (o in l)
        "key" == o ? (i = l[o]) : "ref" == o ? (t = l[o]) : (r[o] = l[o]);
      if (arguments.length > 3)
        for (u = [u], o = 3; o < arguments.length; o++) u.push(f[o]);
      return (
        null != u && (r.children = u),
        y(n.type, r, i || n.key, t || n.ref, null)
      );
    }),
    (n.createContext = function (n, l) {
      var u = {
        __c: (l = "__cC" + r++),
        __: n,
        Consumer: function (n, l) {
          return n.children(l);
        },
        Provider: function (n, u, i) {
          return (
            this.getChildContext ||
              ((u = []),
              ((i = {})[l] = this),
              (this.getChildContext = function () {
                return i;
              }),
              (this.shouldComponentUpdate = function (n) {
                this.props.value !== n.value && u.some(k);
              }),
              (this.sub = function (n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function () {
                  u.splice(u.indexOf(n), 1), l && l.call(n);
                };
              })),
            n.children
          );
        },
      };
      return (u.Provider.__ = u.Consumer.contextType = u);
    }),
    (n.toChildArray = function n(l, u) {
      return (
        (u = u || []),
        null == l ||
          "boolean" == typeof l ||
          (Array.isArray(l)
            ? l.some(function (l) {
                n(l, u);
              })
            : u.push(l)),
        u
      );
    }),
    (n.__u = H),
    (n.options = l);
});
//# sourceMappingURL=preact.umd.js.map
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("preact"))
    : "function" == typeof define && define.amd
    ? define(["exports", "preact"], t)
    : t((n.preactHooks = n.preactHooks || {}), n.preact);
})(this, function (n, t) {
  if (n.useState) {
    return;
  }
  var u,
    r,
    o,
    i = 0,
    c = [],
    e = t.options.__r,
    f = t.options.diffed,
    a = t.options.__c,
    v = t.options.unmount;
  function p(n, u) {
    t.options.__h && t.options.__h(r, n, i || u), (i = 0);
    var o = r.__H || (r.__H = { __: [], __h: [] });
    return n >= o.__.length && o.__.push({}), o.__[n];
  }
  function m(n) {
    return (i = 1), y(A, n);
  }
  function y(n, t, o) {
    var i = p(u++, 2);
    return (
      (i.t = n),
      i.__c ||
        ((i.__c = r),
        (i.__ = [
          o ? o(t) : A(void 0, t),
          function (n) {
            var t = i.t(i.__[0], n);
            i.__[0] !== t && ((i.__ = [t, i.__[1]]), i.__c.setState({}));
          },
        ])),
      i.__
    );
  }
  function d(n, o) {
    var i = p(u++, 4);
    !t.options.__s && x(i.__H, o) && ((i.__ = n), (i.__H = o), r.__h.push(i));
  }
  function s(n, t) {
    var r = p(u++, 7);
    return x(r.__H, t) ? ((r.__H = t), (r.__h = n), (r.__ = n())) : r.__;
  }
  function l() {
    c.some(function (n) {
      if (n.__P)
        try {
          n.__H.__h.forEach(_), n.__H.__h.forEach(q), (n.__H.__h = []);
        } catch (u) {
          return (n.__H.__h = []), t.options.__e(u, n.__v), !0;
        }
    }),
      (c = []);
  }
  (t.options.__r = function (n) {
    e && e(n), (u = 0);
    var t = (r = n.__c).__H;
    t && (t.__h.forEach(_), t.__h.forEach(q), (t.__h = []));
  }),
    (t.options.diffed = function (n) {
      f && f(n);
      var u = n.__c;
      u &&
        u.__H &&
        u.__H.__h.length &&
        ((1 !== c.push(u) && o === t.options.requestAnimationFrame) ||
          (
            (o = t.options.requestAnimationFrame) ||
            function (n) {
              var t,
                u = function () {
                  clearTimeout(r), h && cancelAnimationFrame(t), setTimeout(n);
                },
                r = setTimeout(u, 100);
              h && (t = requestAnimationFrame(u));
            }
          )(l));
    }),
    (t.options.__c = function (n, u) {
      u.some(function (n) {
        try {
          n.__h.forEach(_),
            (n.__h = n.__h.filter(function (n) {
              return !n.__ || q(n);
            }));
        } catch (r) {
          u.some(function (n) {
            n.__h && (n.__h = []);
          }),
            (u = []),
            t.options.__e(r, n.__v);
        }
      }),
        a && a(n, u);
    }),
    (t.options.unmount = function (n) {
      v && v(n);
      var u = n.__c;
      if (u && u.__H)
        try {
          u.__H.__.forEach(_);
        } catch (n) {
          t.options.__e(n, u.__v);
        }
    });
  var h = "function" == typeof requestAnimationFrame;
  function _(n) {
    "function" == typeof n.u && n.u();
  }
  function q(n) {
    n.u = n.__();
  }
  function x(n, t) {
    return (
      !n ||
      t.some(function (t, u) {
        return t !== n[u];
      })
    );
  }
  function A(n, t) {
    return "function" == typeof t ? t(n) : t;
  }
  (n.useState = m),
    (n.useReducer = y),
    (n.useEffect = function (n, o) {
      var i = p(u++, 3);
      !t.options.__s &&
        x(i.__H, o) &&
        ((i.__ = n), (i.__H = o), r.__H.__h.push(i));
    }),
    (n.useLayoutEffect = d),
    (n.useRef = function (n) {
      return (
        (i = 5),
        s(function () {
          return { current: n };
        }, [])
      );
    }),
    (n.useImperativeHandle = function (n, t, u) {
      (i = 6),
        d(
          function () {
            "function" == typeof n ? n(t()) : n && (n.current = t());
          },
          null == u ? u : u.concat(n)
        );
    }),
    (n.useMemo = s),
    (n.useCallback = function (n, t) {
      return (
        (i = 8),
        s(function () {
          return n;
        }, t)
      );
    }),
    (n.useContext = function (n) {
      var t = r.context[n.__c],
        o = p(u++, 9);
      return (
        (o.__c = n),
        t ? (null == o.__ && ((o.__ = !0), t.sub(r)), t.props.value) : n.__
      );
    }),
    (n.useDebugValue = function (n, u) {
      t.options.useDebugValue && t.options.useDebugValue(u ? u(n) : n);
    }),
    (n.useErrorBoundary = function (n) {
      var t = p(u++, 10),
        o = m();
      return (
        (t.__ = n),
        r.componentDidCatch ||
          (r.componentDidCatch = function (n) {
            t.__ && t.__(n), o[1](n);
          }),
        [
          o[0],
          function () {
            o[1](void 0);
          },
        ]
      );
    });
});

0;
