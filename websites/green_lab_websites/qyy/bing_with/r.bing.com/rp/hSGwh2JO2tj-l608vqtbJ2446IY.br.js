var Bnp = Bnp || {};
Bnp.Global = Bnp.Global || {};
Bnp.Version = "1";
(Bnp.Partner =
  Bnp.Partner ||
  (function () {
    function i() {
      return typeof DefaultTrustedTypesPolicy != "undefined";
    }
    function s(n) {
      return i() && DefaultTrustedTypesPolicy.getOpaqueHTML
        ? DefaultTrustedTypesPolicy.getOpaqueHTML(n)
        : n;
    }
    function h(n) {
      return i() && DefaultTrustedTypesPolicy.getOpaqueScript
        ? DefaultTrustedTypesPolicy.getOpaqueScript(n)
        : n;
    }
    function c(n) {
      return i() && DefaultTrustedTypesPolicy.getOpaqueScriptURL
        ? DefaultTrustedTypesPolicy.getOpaqueScriptURL(n)
        : n;
    }
    function f(n) {
      sj_evt.fire("onBnpRender", n);
    }
    function r(n) {
      var i = i || {};
      if (typeof i.stringify == "function") return i.stringify(n);
      var o = typeof n,
        u = n && n.constructor == Array,
        f = [],
        e,
        t;
      if (o != "object" || n == null)
        return o == "string" ? '"' + n + '"' : String(n);
      for (e in n)
        (t = n[e]),
          t &&
            t.constructor != Function &&
            (u ? f.push(r(t)) : f.push('"' + e + '":' + r(t)));
      return (u ? "[" : "{") + String(f) + (u ? "]" : "}");
    }
    function l(n) {
      for (var r = [], u = n.getElementsByTagName("script"), t, i; u.length; )
        (t = u[0]),
          (i = sj_ce("script")),
          t.src ? (i.src = c(t.src)) : t.text && (i.text = h(t.text)),
          (i.type = t.type),
          t.parentNode.removeChild(t),
          r.push(i);
      return r;
    }
    function a(n) {
      for (var t = 0; t < n.length; t++) e(n[t]);
    }
    function e(n) {
      t = t || _d.getElementsByTagName("head")[0];
      t.appendChild(n);
    }
    function v(n) {
      for (var t, i = 0; i < n.length; i++)
        (t = sj_ce("style")),
          (t.type = "text/css"),
          t.textContent !== undefined
            ? (t.textContent = n[i])
            : (t.styleSheet.cssText = n[i]),
          e(t);
    }
    function y() {
      sj_evt.fire("onPopTR");
    }
    var n = "dhplink",
      t,
      o = 2500,
      u = function (n, t, i) {
        this.PartnerId = n;
        this.IID = t || "";
        this.Attributes = i || {};
      };
    return (
      (u.prototype.Submit = function () {
        function b() {
          t.abort();
          f("Timeout");
          sj_evt && sj_evt.fire(n);
        }
        var i = this.Attributes;
        this.Attributes.RawRequestURL =
          i.RawRequestURL || Bnp.Global.RawRequestURL;
        this.Attributes.Referer = i.Referer || Bnp.Global.Referer;
        this.Attributes.RawQuery = i.RawQuery || Bnp.Global.RawQuery;
        var t = sj_gx(),
          u = _w.location.search.substr(1),
          c = /(^|&)(bnp)?testhooks=~?1(&|$)/i.exec(u),
          e = u.match(/[?&]*ptn=([^&#]+)/i),
          h = e && e.length == 2 ? e[1] : null,
          p =
            "/notifications/render?bnptrigger=" +
            encodeURIComponent(r(this)) +
            (_G ? "&IG=" + _G.IG : "") +
            (this.IID ? "&IID=" + this.IID : "") +
            (h ? "&ptn=" + h : "") +
            (this.Debug ? "&" + this.Debug.join("&") : c ? "&" + u : ""),
          w = sb_st(b, o);
        t.open("GET", p, !0);
        t.onreadystatechange = function () {
          var r, o;
          if (t.readyState == 4 && t.status == 200) {
            if ((sb_ct(w), (r = t.responseText), r.length == 0)) {
              f("None");
              sj_evt && sj_evt.fire(n);
              return;
            }
            r.indexOf("cmd:setdefaulthomepage") == -1 &&
              sj_evt &&
              sj_evt.fire(n);
            y();
            var i = sj_ce("div"),
              u = [],
              e = [],
              h = typeof BnpPartnerTrustedTypesPolicy != "undefined";
            if (h) {
              const n = BnpPartnerTrustedTypesPolicy;
              n.setTrustedHtml(t, i);
              u = n.getExtractedCss();
              e = n.getExtractedJs();
            } else
              (o = r.replace(
                /<style\s+[^>]+>([^<]*)<\/style>/g,
                function (n, t) {
                  return u.push(t), "";
                }
              )),
                (i.innerHTML = s("<div>dummy</div>" + o)),
                i.removeChild(i.firstChild),
                (e = l(i));
            sj_b.appendChild(i);
            const c = _d.createEvent("CustomEvent");
            c.initCustomEvent("OnBnpAppend", !0, !0, null);
            dispatchEvent(c);
            v(u);
            a(e);
          }
        };
        t.send();
      }),
      { Request: u }
    );
  })()),
  (function () {
    Bnp.PartnerLoaded || (sj_evt.fire("OnBnpLoaded"), (Bnp.PartnerLoaded = !0));
  })();
