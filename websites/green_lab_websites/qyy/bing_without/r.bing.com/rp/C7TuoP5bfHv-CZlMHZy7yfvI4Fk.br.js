var BingAtWork;
(function (n) {
  var t;
  (function (n) {
    function t(t) {
      t.isAuthenticated && n.raiseAuthEventAndLog(t);
    }
    function i(n) {
      n && n.length == 2 && t(n[1]);
    }
    n.bindToConditionalSignIn = function () {
      sj_evt.bind(
        "ssofirstquery",
        function (n) {
          return i(n);
        },
        !0,
        null,
        !1
      );
    };
  })((t = n.ConditionalSignIn || (n.ConditionalSignIn = {})));
})(BingAtWork || (BingAtWork = {}));
