(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    746: function () {
      var a = new (function () {
        var a = new Object();
        return (
          (this.value_enc = getCookieData("ORA_UCM_INFO")),
          (this.array = this.value_enc.split("~")),
          (a.version = this.array[0]),
          (a.guid = this.array[1]),
          (a.firstname = this.array[2]),
          (a.lastname = this.array[3]),
          (a.username = this.array[4]),
          a
        );
      })();
      window.USER = a;
    },
  },
]);
