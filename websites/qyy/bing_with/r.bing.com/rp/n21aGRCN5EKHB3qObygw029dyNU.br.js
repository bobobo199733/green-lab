var wln = wln || "",
  Identity;
(function (n) {
  function i(n) {
    n.style.display = "none";
    n.setAttribute("aria-hidden", "true");
  }
  function r(n) {
    n.style.display = "inline-block";
    n.setAttribute("aria-hidden", "false");
  }
  var u, t;
  n &&
    n.sglid &&
    n.setLoginPreference &&
    sj_be &&
    sj_cook &&
    sj_evt &&
    _d &&
    typeof _d.querySelectorAll != "undefined" &&
    ((u = function (n) {
      var i = n.getAttribute("data-a"),
        t = n.getAttribute("data-p");
      i === "false" &&
        t != null &&
        sj_be(n, "click", function () {
          sj_cook.set("SRCHUSR", "POEX", t, !0, "/");
        });
    }),
    sj_evt.bind(
      "identityHeaderShown",
      function () {
        var n = !1;
        sj_be(_ge("id_l"), "click", function () {
          var i, t;
          if (!n) {
            for (i = _d.querySelectorAll(".b_imi"), t = 0; t < i.length; t++)
              u(i[t]);
            n = !0;
          }
        });
      },
      !0
    ));
  sj_evt &&
    n &&
    ((t = function (t) {
      var h;
      if (
        t == null ||
        t.idp !== "orgid" ||
        ((h = n.wlProfile()), h == null || h.name == null || t.name != null)
      ) {
        var e = _ge("id_n"),
          u = _ge("id_p"),
          o = _ge("id_s"),
          s = _ge("id_a"),
          f = t ? t.displayName : wln,
          c = t ? t.img : null,
          l = t ? t.idp : null,
          a = t ? t.cid : null;
        e && s && (a || f)
          ? (u && c && ((u.title = f), (u.src = c), r(u)),
            f.length > 10 && (f = f.substring(0, 10).replace(/\s+$/, "") + "…"),
            (e.textContent = f),
            (e.innerText = f),
            r(e),
            o && i(o),
            i(s),
            l === "WL" && u && (u.style.className += " sw_spd"))
          : e && s && (i(e), u && i(u), o && r(o), r(s));
      }
    }),
    sj_evt.bind(
      "wl:auth",
      function () {
        t(n.wlProfile());
      },
      1
    ),
    sj_evt.bind(
      "aad:signedout",
      function () {
        t({ displayName: null, img: null, idp: "orgid" });
      },
      1
    ),
    sj_evt.bind(
      "aad:signedin",
      function (i) {
        var r, u, f, e;
        i &&
          i.length >= 2 &&
          ((r = i[1]),
          r &&
            r.displayName &&
            r.uniqueName &&
            ((u = "/orgid/thumbnailPhoto?user={0}"),
            n.orgIdPhotoUrl && (u = n.orgIdPhotoUrl),
            (f = u.replace("{0}", encodeURIComponent(r.userObjectId))),
            (e = { displayName: r.uniqueName, img: f, idp: "orgid" }),
            t(e)));
      },
      1
    ));
})(Identity || (Identity = {}));
