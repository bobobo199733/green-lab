(function (n, t, i) {
  if (t) {
    var r = !1,
      f = function () {
        r ||
          ((r = !0),
          typeof wlc != "undefined" && wlc(sj_evt, sj_cook.set, wlc_t));
      },
      u = function () {
        setTimeout(f, t);
      };
    n.bind(
      "onP1",
      function () {
        i ? n.bind("aad:signedout", u) : u();
      },
      1
    );
  }
})(sj_evt, wlc_d, wlc_wfa);
