(function (n) {
  function i() {
    var i = document.documentElement,
      r = document.body,
      u = "innerWidth" in window ? window.innerWidth : i.clientWidth,
      f = "innerHeight" in window ? window.innerHeight : i.clientHeight,
      e = window.pageXOffset || i.scrollLeft,
      o = window.pageYOffset || i.scrollTop,
      s = document.visibilityState || "default";
    n.enqueue(t, {
      x: e,
      y: o,
      w: u,
      h: f,
      dw: r.clientWidth,
      dh: r.clientHeight,
      v: s,
    });
  }
  var t = "V";
  n.wireup(t, { load: null, compute: i, unload: null });
})(BM);
