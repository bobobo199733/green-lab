(function (n) {
  function i() {
    var e, o, u, s, f, r;
    if (document.querySelector && document.querySelectorAll) {
      e = [];
      o = n.rules;
      for (u in o)
        for (
          s = o[u],
            u += !s[2] ? "" : " >*",
            f = document.querySelectorAll(u),
            r = 0;
          r < f.length;
          r++
        ) {
          var i = f[r],
            h = 0,
            c = 0,
            l = i.offsetWidth,
            a = i.offsetHeight;
          do (h += i.offsetLeft), (c += i.offsetTop);
          while ((i = i.offsetParent));
          e.push({ _e: f[r], x: h, y: c, w: l, h: a });
        }
      n.enqueue(t, e);
    }
  }
  var t = "L";
  n.wireup(t, { load: null, compute: i, unload: null });
})(BM);
