var Button;
(function () {
  WireUp.init("button_init", function (n) {
    var t = n.getAttribute("data-appns"),
      i = n.getAttribute("data-k");
    sj_be(n, "click", function () {
      Log.Log(
        "Click",
        "Button",
        "",
        !1,
        "AppNS",
        t,
        "K",
        i,
        "Category",
        "CommonControls"
      );
    });
  });
})(Button || (Button = {}));
