(function (n) {
  function f() {
    u(sj_be, r);
  }
  function r(i) {
    return i && n.enqueue(t, i), !0;
  }
  function e() {
    u(sj_ue, r);
  }
  function u(n, t) {
    for (var u, r = 0; r < i.length; r++)
      (u = i[r]),
        n(
          u === "resize" ? window : document,
          window.navigator.pointerEnabled ? u.replace("mouse", "pointer") : u,
          t,
          !1
        );
  }
  var t = "EVT",
    i = [
      "click",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "mousemove",
      "touchmove",
      "scroll",
      "keydown",
      "resize",
    ];
  n.wireup(t, { load: f, compute: null, unload: e });
})(BM);
