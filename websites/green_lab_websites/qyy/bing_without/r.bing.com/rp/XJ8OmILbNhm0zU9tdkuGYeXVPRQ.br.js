(function () {
  function n() {
    var n = _ge("id_p"),
      t,
      i;
    n &&
      ((t = ""),
      (i = ""),
      n.dataset
        ? ((t = n.dataset.src), (i = n.dataset.alt))
        : ((t = n.getAttribute("data-src")), (i = n.getAttribute("data-alt"))),
      t &&
        t != "" &&
        ((n.onerror = function () {
          n.onerror = null;
          n.src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";
          n.alt = "";
        }),
        (n.onload = function () {
          n.alt = i;
        }),
        (n.src = t)));
  }
  n();
})();
