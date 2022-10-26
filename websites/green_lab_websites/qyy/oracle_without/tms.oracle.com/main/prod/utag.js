//tealium universal tag - utag.loader ut4.0.202210061841, Copyright 2022 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
window.__tealium_twc_switch = false;
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id: "oracle.main",
    o: {},
    sender: {},
    send: {},
    rpt: { ts: { a: new Date() } },
    dbi: [],
    db_log: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q: [],
      sendq: { pending: 0 },
      run_ready_q: function () {
        for (var i = 0; i < utag.loader.ready_q.length; i++) {
          utag.DB("READY_Q:" + i);
          try {
            utag.loader.ready_q[i]();
          } catch (e) {
            utag.DB(e);
          }
        }
      },
      lh: function (a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = /\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)
          ? 3
          : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function (a, b, c, d, g) {
        utag.DB("WQ:" + utag.loader.wq.length);
        try {
          if (utag.udoname && utag.udoname.indexOf(".") < 0) {
            utag.ut.merge(utag.data, window[utag.udoname], 0);
          }
          if (utag.cfg.load_rules_at_wait) {
            utag.handler.LR(utag.data);
          }
        } catch (e) {
          utag.DB(e);
        }
        d = 0;
        g = [];
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
          b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4) {
            this.f[b.id] = 0;
            utag.loader.LOAD(b.id);
          } else if (b.load > 0) {
            g.push(b);
            d++;
          } else {
            this.f[b.id] = 1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }
        if (d == 0) {
          utag.loader.END();
        }
      },
      AS: function (a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == "undefined" || !utag.ut.hasOwn(a, "src")) {
          a.src =
            utag.cfg.path +
            (typeof a.name != "undefined"
              ? a.name
              : "ut" + "ag." + a.id + ".js");
        }
        a.src +=
          (a.src.indexOf("?") > 0 ? "&" : "?") +
          "utv=" +
          (a.v ? utag.cfg.template + a.v : utag.cfg.v);
        utag.rpt["l_" + a.id] = a.src;
        b = document;
        this.f[a.id] = 0;
        if (a.load == 2) {
          utag.DB("Attach sync: " + a.src);
          a.uid = a.id;
          b.write(
            '<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + "ipt>"
          );
          if (typeof a.cb != "undefined") a.cb();
        } else if (a.load == 1 || a.load == 3) {
          if (b.createElement) {
            c = "utag_oracle.main_" + a.id;
            if (!b.getElementById(c)) {
              d = { src: a.src, id: c, uid: a.id, loc: a.loc };
              if (a.load == 3) {
                d.type = "iframe";
              }
              if (typeof a.cb != "undefined") d.cb = a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function (a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b;
      },
      OU: function (tid, tcat, a, b, c, d, f, g) {
        g = {};
        utag.loader.RDcp(g);
        try {
          if (typeof g["cp.OPTOUTMULTI"] != "undefined") {
            c = utag.loader.cfg;
            a = utag.ut.decode(g["cp.OPTOUTMULTI"]).split("|");
            for (d = 0; d < a.length; d++) {
              b = a[d].split(":");
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf("c") == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                    if (c[f].tid == tid && c[f].tcat == b[0].substring(1))
                      return true;
                  }
                  if (tcat == b[0].substring(1)) return true;
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true;
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0;
                  }
                  if (tid == b[0]) return true;
                }
              }
            }
          }
        } catch (e) {
          utag.DB(e);
        }
        return false;
      },
      RDdom: function (o) {
        var d = document || {},
          l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] =
          window.innerHeight ||
          (d.documentElement ? d.documentElement.clientHeight : 960);
        o["dom.viewport_width"] =
          window.innerWidth ||
          (d.documentElement ? d.documentElement.clientWidth : 960);
      },
      RDcp: function (o, b, c, d) {
        b = utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV(utag.cl && !utag.cl["_all_"] ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined")
            o["cp." + c] = b[c];
        }
      },
      RDqp: function (o, a, b, c) {
        a = location.search + (location.hash + "").replace("#", "&");
        if (utag.cfg.lowerqp) {
          a = a.toLowerCase();
        }
        if (a.length > 1) {
          b = a.substring(1).split("&");
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if (c.length > 1) {
              o["qp." + c[0]] = utag.ut.decode(c[1]);
            }
          }
        }
      },
      RDmeta: function (o, a, b, h) {
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try {
            h = a[b].name || a[b].getAttribute("property") || "";
          } catch (e) {
            h = "";
            utag.DB(e);
          }
          if (utag.cfg.lowermeta) {
            h = h.toLowerCase();
          }
          if (h != "") {
            o["meta." + h] = a[b].content;
          }
        }
      },
      RDva: function (o) {
        var readAttr = function (o, l) {
          var a = "",
            b;
          a = localStorage.getItem(l);
          if (!a || a == "{}") return;
          b = utag.ut.flatten({ va: JSON.parse(a) });
          utag.ut.merge(o, b, 1);
        };
        try {
          readAttr(o, "tealium_va");
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
        } catch (e) {
          utag.DB(e);
        }
      },
      RDut: function (o, a) {
        var t = {};
        var d = new Date();
        var m = utag.ut.typeOf(d.toISOString) == "function";
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        t["tealium_event"] = o["ut.event"] = a || "view";
        t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
        t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
        t["tealium_session_number"] = o["cp.utag_main__sn"];
        t["tealium_session_event_number"] = o["cp.utag_main__se"];
        try {
          t["tealium_datasource"] = utag.cfg.datasource;
          t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
          t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
          t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
        } catch (e) {
          utag.DB(e);
        }
        t["tealium_random"] = Math.random().toFixed(16).substring(2);
        t["tealium_library_name"] = "ut" + "ag.js";
        t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
        t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
        t["tealium_timestamp_utc"] = m ? d.toISOString() : "";
        d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
        t["tealium_timestamp_local"] = m
          ? d.toISOString().replace("Z", "")
          : "";
        utag.ut.merge(o, t, 0);
      },
      RDses: function (o, a, c) {
        a = new Date().getTime();
        c = a + parseInt(utag.cfg.session_timeout) + "";
        if (!o["cp.utag_main_ses_id"]) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__se"] = "1";
          o["cp.utag_main__sn"] = 1 + parseInt(o["cp.utag_main__sn"] || 0) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
          o["cp.utag_main__se"] = 1 + parseInt(o["cp.utag_main__se"] || 0) + "";
        }
        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;
        utag.loader.SC("utag_main", {
          _sn: o["cp.utag_main__sn"] || 1,
          _se: o["cp.utag_main__se"],
          _ss: o["cp.utag_main__ss"],
          _st: c,
          ses_id: (o["cp.utag_main_ses_id"] || a) + ";exp-session",
          _pn: o["cp.utag_main__pn"] + ";exp-session",
        });
      },
      RDpv: function (o) {
        if (typeof utag.pagevars == "function") {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RD: function (o, a) {
        utag.DB("utag.loader.RD");
        utag.DB(o);
        utag.loader.RDcp(o);
        if (!utag.loader.rd_flag) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main_v_id"] =
            o["cp.utag_main_v_id"] || utag.ut.vi(new Date().getTime());
          o["cp.utag_main__pn"] = 1 + parseInt(o["cp.utag_main__pn"] || 0) + "";
          utag.loader.SC("utag_main", { v_id: o["cp.utag_main_v_id"] });
          utag.loader.RDses(o);
        }
        if (a && !utag.cfg.noview) utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
      },
      RC: function (
        a,
        x,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        v,
        ck,
        cv,
        r,
        s,
        t
      ) {
        o = {};
        b = "" + document.cookie != "" ? document.cookie.split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = new Date().getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck != "undefined") {
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try {
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h;
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                } catch (er) {
                  utag.DB(er);
                }
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (utag.ut.typeOf(j[f]) == "array") {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)) {
                      k =
                        RegExp.$2 == "session"
                          ? typeof j._st != "undefined"
                            ? j._st
                            : t - 1
                          : parseInt(RegExp.$2);
                      if (k > t) n[m] = x == 0 ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k =
                      RegExp.$2 == "session"
                        ? typeof j._st != "undefined"
                          ? j._st
                          : t - 1
                        : parseInt(RegExp.$2);
                    j[f] = k < t ? null : x == 0 ? j[f] : RegExp.$1;
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl["_all_"]) {
              o[ck] = e;
            }
          }
        }
        return a ? (o[a] ? o[a] : {}) : o;
      },
      SC: function (a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a == "utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b;
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g =
                date.getTime() +
                parseInt(RegExp.$2) * (RegExp.$3 == "h" ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = d[e] != null ? f - 0 + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|");
                }
                g = utag.ut.typeOf(d[e]) == "array" ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g;
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (utag.ut.typeOf(d[g]) == "array") {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c]);
              }
              h.push(g + ":~" + d[g].join("|"));
            } else
              h.push(
                (g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g])
              );
          }
          if (h.length == 0) {
            h.push("");
            x = "";
          }
          v = h.join("$");
        }
        document.cookie =
          a +
          "=" +
          v +
          ";path=/;domain=" +
          utag.cfg.domain +
          ";expires=" +
          x +
          (utag.cfg.secure_cookie ? ";secure" : "");
        return 1;
      },
      LOAD: function (a, b, c, d) {
        if (!utag.loader.cfg) {
          return;
        }
        if (this.ol == 0) {
          if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
            this.f[a] = 1;
            delete utag.loader.bq[a];
          }
          for (b in utag.loader.GV(utag.loader.bq)) {
            if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
              utag.loader.bk[a] = 1;
              utag.DB("blocked: " + a);
            }
            utag.DB("blocking: " + b);
            return;
          }
          utag.loader.INIT();
          return;
        }
        utag.DB("utag.loader.LOAD:" + a);
        if (this.f[a] == 0) {
          this.f[a] = 1;
          if (utag.cfg.noview != true) {
            if (utag.loader.cfg[a].send) {
              utag.DB("SENDING: " + a);
              try {
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: " + a);
                  while ((d = utag.loader.sendq[a].shift())) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send("view", utag.handler.C(utag.data));
                }
                utag.rpt["s_" + a] = 0;
              } catch (e) {
                utag.DB(e);
                utag.rpt["s_" + a] = 1;
              }
            }
          }
          if (utag.loader.rf == 0) return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return;
          }
          utag.loader.END();
        }
      },
      EV: function (a, b, c, d) {
        if (b == "ready") {
          if (!utag.data) {
            try {
              utag.cl = { _all_: 1 };
              utag.loader.initdata();
              utag.loader.RD(utag.data);
            } catch (e) {
              utag.DB(e);
            }
          }
          if (
            document.attachEvent || utag.cfg.dom_complete
              ? document.readyState === "complete"
              : document.readyState !== "loading"
          )
            setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;
            if (utag.loader.ready_q.length <= 1) {
              if (document.addEventListener) {
                RH = function () {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q();
                };
                if (!utag.cfg.dom_complete)
                  document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function () {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q();
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false);
          } else if (a.attachEvent) {
            a.attachEvent((d == 1 ? "" : "on") + b, c);
          }
        }
      },
      END: function (b, c, d, e, v, w) {
        if (this.ended) {
          return;
        }
        this.ended = 1;
        utag.DB("loader.END");
        b = utag.data;
        if (utag.handler.base && utag.handler.base != "*") {
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]];
          }
        } else if (utag.handler.base == "*") {
          utag.ut.merge(utag.handler.df, b, 1);
        }
        utag.rpt["r_0"] = "t";
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt["r_" + r] = utag.cond[r] ? "t" : "f";
        }
        utag.rpt.ts["s"] = new Date();
        v = utag.cfg.path;
        w = v.indexOf(".tiqcdn.");
        if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count)
          utag.ut.loader({
            src:
              "https://tms.oracle.com/utag/tiqapp/utag.v.js?a=" +
              utag.cfg.utid +
              "&cb=" +
              new Date().getTime(),
            id: "tiqapp",
          });
        if (utag.cfg.noview != true) utag.handler.RE("view", b, "end");
        utag.handler.INIT();
      },
    },
    DB: function (a, b) {
      if (utag.cfg.utagdb === false) {
        return;
      } else if (typeof utag.cfg.utagdb == "undefined") {
        b = document.cookie + "";
        utag.cfg.utagdb = b.indexOf("utagdb=true") >= 0 ? true : false;
      }
      if (utag.cfg.utagdb === true) {
        var t;
        if (utag.ut.typeOf(a) == "object") {
          t = utag.handler.C(a);
        } else {
          t = a;
        }
        utag.db_log.push(t);
        try {
          if (!utag.cfg.noconsole) console.log(t);
        } catch (e) {}
      }
    },
    RP: function (a, b, c) {
      if (
        typeof a != "undefined" &&
        typeof a.src != "undefined" &&
        a.src != ""
      ) {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != "src") b.push(c + "=" + escape(a[c]));
        }
        this.dbi.push(
          (new Image().src =
            a.src +
            "?utv=" +
            utag.cfg.v +
            "&utid=" +
            utag.cfg.utid +
            "&" +
            b.join("&"))
        );
      }
    },
    view: function (a, c, d) {
      return this.track({
        event: "view",
        data: a || {},
        cfg: { cb: c, uids: d },
      });
    },
    link: function (a, c, d) {
      return this.track({
        event: "link",
        data: a || {},
        cfg: { cb: c, uids: d },
      });
    },
    track: function (a, b, c, d, e) {
      a = a || {};
      if (typeof a == "string") {
        a = { event: a, data: b || {}, cfg: { cb: c, uids: d } };
      }
      for (e in utag.loader.GV(utag.o)) {
        utag.o[e].handler.trigger(
          a.event || "view",
          a.data || a,
          a.cfg || { cb: b, uids: c }
        );
      }
      a.cfg = a.cfg || { cb: b };
      if (typeof a.cfg.cb == "function") a.cfg.cb();
      return true;
    },
    handler: {
      base: "consent_do_not_track,consent_decision,consent_source,consent_advertising,consent_functional,consent_implied,country_exclusion,consent_code_has_run",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function (a, b, c) {
        utag.DB("utag.handler.INIT");
        if (utag.initcatch) {
          utag.initcatch = 0;
          return;
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c);
          }
        }
      },
      test: function () {
        return 1;
      },
      LR: function (b) {
        utag.DB("Load Rules");
        for (var d in utag.loader.GV(utag.cond)) {
          utag.cond[d] = false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        utag.loader.OU();
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt["r_" + r] = utag.cond[r] ? "t" : "f";
        }
      },
      RE: function (a, b, c, d, e, f, g) {
        if (c != "alr" && !this.cfg_extend) {
          return 0;
        }
        utag.DB("RE: " + c);
        if (c == "alr") utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if (typeof this.extend != "undefined") {
          g = 0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              e = 0;
              if (typeof this.cfg_extend != "undefined") {
                f = this.cfg_extend[d];
                if (typeof f.count == "undefined") f.count = 0;
                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                  e = 1;
                } else {
                  if (f[c] == 1) {
                    g = 1;
                  }
                  f.count++;
                }
              }
              if (e != 1) {
                this.extend[d](a, b);
                utag.rpt["ex_" + d] = 0;
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt["ex_" + d] = 1;
              utag.ut.error({
                e: er.message,
                s: utag.cfg.path + "utag.js",
                l: d,
                t: "ge",
              });
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function (a, b, c, d, e, f) {
        utag.DB("trigger:" + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
        b = b || {};
        utag.DB(b);
        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1))
              utag.DB("Tag " + d + " did not LOAD");
          }
          utag.loader.q.push({ a: a, b: utag.handler.C(b), c: c });
          return;
        }
        utag.ut.merge(b, this.df, 0);
        utag.loader.RD(b, a);
        utag.cfg.noview = false;
        function sendTag(a, b, d) {
          try {
            if (typeof utag.sender[d] != "undefined") {
              utag.DB("SENDING: " + d);
              utag.sender[d].send(a, utag.handler.C(b));
              utag.rpt["s_" + d] = 0;
            } else if (utag.loader.cfg[d].load != 2) {
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({ event: a, data: utag.handler.C(b) });
              utag.loader.sendq.pending++;
              utag.loader.AS({ id: d, load: 1 });
            }
          } catch (e) {
            utag.DB(e);
          }
        }
        if (c && c.uids) {
          this.RE(a, b, "alr");
          for (f = 0; f < c.uids.length; f++) {
            d = c.uids[f];
            if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
              sendTag(a, b, d);
            }
          }
        } else if (utag.cfg.load_rules_ajax) {
          this.RE(a, b, "blr");
          this.LR(b);
          this.RE(a, b, "alr");
          for (f = 0; f < utag.loader.cfgsort.length; f++) {
            d = utag.loader.cfgsort[f];
            if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
              sendTag(a, b, d);
            }
          }
        } else {
          this.RE(a, b, "alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a, b, "end");
      },
      C: function (a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if (utag.ut.typeOf(a[c]) == "array") {
            b[c] = a[c].slice(0);
          } else {
            b[c] = a[c];
          }
        }
        return b;
      },
    },
    ut: {
      pad: function (a, b, c, d) {
        a = "" + (a - 0).toString(16);
        d = "";
        if (b > a.length) {
          for (c = 0; c < b - a.length; c++) {
            d += "0";
          }
        }
        return "" + d + a;
      },
      vi: function (t, a, b) {
        if (!utag.v_id) {
          a = this.pad(t, 12);
          b = "" + Math.random();
          a += this.pad(b.substring(2, b.length), 16);
          try {
            a += this.pad(
              navigator.plugins.length ? navigator.plugins.length : 0,
              2
            );
            a += this.pad(navigator.userAgent.length, 3);
            a += this.pad(document.URL.length, 4);
            a += this.pad(navigator.appVersion.length, 3);
            a += this.pad(
              screen.width +
                screen.height +
                parseInt(
                  screen.colorDepth ? screen.colorDepth : screen.pixelDepth
                ),
              5
            );
          } catch (e) {
            utag.DB(e);
            a += "12345";
          }
          utag.v_id = a;
        }
        return utag.v_id;
      },
      hasOwn: function (o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a);
      },
      isEmptyObject: function (o, a) {
        for (a in o) {
          if (utag.ut.hasOwn(o, a)) return false;
        }
        return true;
      },
      isEmpty: function (o) {
        var t = utag.ut.typeOf(o);
        if (t == "number") {
          return isNaN(o);
        } else if (t == "boolean") {
          return false;
        } else if (t == "string") {
          return o.length === 0;
        } else return utag.ut.isEmptyObject(o);
      },
      typeOf: function (e) {
        return {}.toString
          .call(e)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase();
      },
      flatten: function (o) {
        var a = {};
        function r(c, p) {
          if (Object(c) !== c || utag.ut.typeOf(c) == "array") {
            a[p] = c;
          } else {
            if (utag.ut.isEmptyObject(c)) {
            } else {
              for (var d in c) {
                r(c[d], p ? p + "." + d : d);
              }
            }
          }
        }
        r(o, "");
        return a;
      },
      merge: function (a, b, c, d) {
        if (c) {
          for (d in utag.loader.GV(b)) {
            a[d] = b[d];
          }
        } else {
          for (d in utag.loader.GV(b)) {
            if (typeof a[d] == "undefined") a[d] = b[d];
          }
        }
      },
      decode: function (a, b) {
        b = "";
        try {
          b = decodeURIComponent(a);
        } catch (e) {
          utag.DB(e);
        }
        if (b == "") {
          b = unescape(a);
        }
        return b;
      },
      encode: function (a, b) {
        b = "";
        try {
          b = encodeURIComponent(a);
        } catch (e) {
          utag.DB(e);
        }
        if (b == "") {
          b = escape(a);
        }
        return b;
      },
      error: function (a, b, c) {
        if (typeof utag_err != "undefined") {
          utag_err.push(a);
        }
      },
      loader: function (o, a, b, c, l, m) {
        utag.DB(o);
        a = document;
        if (o.type == "iframe") {
          m = a.getElementById(o.id);
          if (m && m.tagName == "IFRAME") {
            m.parentNode.removeChild(m);
          }
          b = a.createElement("iframe");
          o.attrs = o.attrs || {};
          utag.ut.merge(
            o.attrs,
            { height: "1", width: "1", style: "display:none" },
            0
          );
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
        }
        if (o.id) {
          b.id = o.id;
        }
        for (l in utag.loader.GV(o.attrs)) {
          b.setAttribute(l, o.attrs[l]);
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener(
              "load",
              function () {
                o.cb();
              },
              false
            );
          } else {
            b.onreadystatechange = function () {
              if (
                this.readyState == "complete" ||
                this.readyState == "loaded"
              ) {
                this.onreadystatechange = null;
                o.cb();
              }
            };
          }
        }
        if (typeof o.error == "function") {
          utag.loader.EV(b, "error", o.error);
        }
        if (o.type != "img") {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to " + l + ": " + o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b);
            }
          }
        }
      },
    },
  };
  utag.o["oracle.main"] = utag;
  utag.cfg = {
    template: "ut4.48.",
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
    secure_cookie:
      "##UTSECURECOOKIE##".replace("##" + "UTSECURECOOKIE##", "") === "true"
        ? true
        : false,
    path: "//tms.oracle.com/main/prod/",
    utid: "oracle/main/202210061841",
  };
  utag.cfg.v = utag.cfg.template + "202210061841";
  utag.cond = {
    110: 0,
    111: 0,
    112: 0,
    114: 0,
    115: 0,
    116: 0,
    117: 0,
    118: 0,
    11: 0,
    120: 0,
    121: 0,
    123: 0,
    124: 0,
    126: 0,
    128: 0,
    129: 0,
    12: 0,
    131: 0,
    132: 0,
    133: 0,
    134: 0,
    135: 0,
    136: 0,
    137: 0,
    138: 0,
    139: 0,
    13: 0,
    141: 0,
    142: 0,
    143: 0,
    145: 0,
    146: 0,
    14: 0,
    15: 0,
    18: 0,
    19: 0,
    20: 0,
    26: 0,
    27: 0,
    28: 0,
    2: 0,
    30: 0,
    31: 0,
    32: 0,
    5: 0,
    6: 0,
    88: 0,
  };
  utag.pagevars = function (ud) {
    ud = ud || utag.data;
    try {
      ud["js_page.window.chat_sidewall"] = window.chat_sidewall;
    } catch (e) {
      utag.DB(e);
    }
    try {
      ud["js_page.ytembed_exists"] = ytembed_exists;
    } catch (e) {
      utag.DB(e);
    }
  };
  utag.loader.initdata = function () {
    try {
      utag.data = typeof utag_data != "undefined" ? utag_data : {};
      utag.udoname = "utag_data";
    } catch (e) {
      utag.data = {};
      utag.DB("idf:" + e);
    }
  };
  utag.loader.loadrules = function (_pd, _pc) {
    var d = _pd || utag.data;
    var c = _pc || utag.cond;
    for (var l in utag.loader.GV(c)) {
      switch (l) {
        case "11":
          try {
            c[11] |=
              typeof d["eloqua_should_run"] != "undefined" &&
              d["eloqua_should_run"]
                .toString()
                .toLowerCase()
                .indexOf("true".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "110":
          try {
            c[110] |=
              typeof d["otn_software_download_should_run"] != "undefined" &&
              d["otn_software_download_should_run"]
                .toString()
                .toLowerCase()
                .indexOf("true".toLowerCase()) > -1 &&
              typeof d["dom.pathname"] != "undefined" &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("technologies".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "111":
          try {
            c[111] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www.oracle.com".toLowerCase());
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "112":
          try {
            c[112] |=
              typeof d["dom.pathname"] != "undefined" &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("/corporate/".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "114":
          try {
            c[114] |=
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                    "/corporate/careers/diversity-inclusion/".toLowerCase()
                  ) > -1) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                    "/corporate/careers/diversity-inclusion/black-leaders/".toLowerCase()
                  ) > -1) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                    "/corporate/careers/diversity-inclusion/veterans/".toLowerCase()
                  ) > -1) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                    "/corporate/careers/diversity-inclusion/disability-inclusion/".toLowerCase()
                  ) > -1) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                    "/corporate/careers/diversity-inclusion/latino-leaders/".toLowerCase()
                  ) > -1) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                    "/corporate/careers/diversity-inclusion/lgbtq/".toLowerCase()
                  ) > -1) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                    "/corporate/careers/diversity-inclusion/asian-leaders/".toLowerCase()
                  ) > -1) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf(
                    "/corporate/careers/diversity-inclusion/women/".toLowerCase()
                  ) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "115":
          try {
            c[115] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-dev1.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa-dev.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .indexOf("www-stage.oracle.com") > -1) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa-stage.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa-dr.appoci.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.appoci.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-uat.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "sites.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa-dr.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa.appoci.oracle.com".toLowerCase());
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "116":
          try {
            c[116] |=
              typeof d["is_jquery_available"] != "undefined" &&
              d["is_jquery_available"].toString().toLowerCase() ==
                "false".toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "117":
          try {
            c[117] |=
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/products/sd-wan-aware.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/products/sd-wan-edge.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/products/talari-platforms.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/solutions/sd-wan.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/solutions/sd-wan-financial-services.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/solutions/sd-wan-manufacturing.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/solutions/sd-wan-professional-services.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/solutions/sd-wan-emergency-services.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/sd-wan-management.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/sd-wan-mpls-and-hybrid-wan.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/failsafe-sd-wan.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/wan-optimization.html".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/industries/communications/enterprise-communications/sd-wan-security.html".toLowerCase());
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "118":
          try {
            c[118] |=
              typeof d["dom.pathname"] != "undefined" &&
              d["dom.pathname"].toString().toLowerCase() ==
                "/jp/corporate/contact/".toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "12":
          try {
            c[12] |=
              typeof d["bluekai_should_run"] != "undefined" &&
              d["bluekai_should_run"]
                .toString()
                .toLowerCase()
                .indexOf("true".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "120":
          try {
            c[120] |=
              typeof d["is_react_page"] != "undefined" &&
              d["is_react_page"].toString().indexOf("true") > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "121":
          try {
            c[121] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www.oracle.com".toLowerCase() &&
                d["meta.countryid"].toString().toLowerCase() ==
                  "us".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.oracle.com".toLowerCase() &&
                d["meta.countryid"].toString().toLowerCase() ==
                  "us".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-sites.oracle.com".toLowerCase() &&
                d["meta.countryid"].toString().toLowerCase() ==
                  "us".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www.oracle.com".toLowerCase() &&
                /^\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\//.test(
                  d["dom.pathname"]
                )) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.oracle.com".toLowerCase() &&
                /^\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\//.test(
                  d["dom.pathname"]
                )) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-sites.oracle.com".toLowerCase() &&
                /^\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\//.test(
                  d["dom.pathname"]
                ));
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "123":
          try {
            c[123] |=
              typeof d["dom.url"] != "undefined" &&
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("combined-tag=true".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "124":
          try {
            c[124] |=
              typeof d["dom.url"] != "undefined" &&
              d["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("combined-tag=true".toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "126":
          try {
            c[126] |=
              typeof d["is_react_page"] != "undefined" &&
              d["is_react_page"].toString().toLowerCase() ==
                "false".toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "128":
          try {
            c[128] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .toLowerCase()
                  .indexOf("www.oracle.com".toLowerCase()) > -1) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .toLowerCase()
                  .indexOf("www-sites.oracle.com".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "129":
          try {
            c[129] |=
              d["dom.pathname"].toString().toLowerCase() ==
              "/corporate/careers/diversity-inclusion/".toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "13":
          try {
            c[13] |=
              typeof d["trustarc_should_run"] != "undefined" &&
              d["trustarc_should_run"]
                .toString()
                .toLowerCase()
                .indexOf("true".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "131":
          try {
            c[131] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().indexOf("www.oracle.com") >
                  -1 &&
                typeof d["meta.countryid"] != "undefined" &&
                d["meta.countryid"]
                  .toString()
                  .toLowerCase()
                  .indexOf("us".toLowerCase()) < 0 &&
                typeof d["dom.pathname"] != "undefined" &&
                /^(?!\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\/).*$/.test(
                  d["dom.pathname"]
                )) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .indexOf("www-stage.oracle.com") > -1 &&
                typeof d["meta.countryid"] != "undefined" &&
                d["meta.countryid"]
                  .toString()
                  .toLowerCase()
                  .indexOf("us".toLowerCase()) < 0 &&
                typeof d["dom.pathname"] != "undefined" &&
                /^(?!\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\/).*$/.test(
                  d["dom.pathname"]
                )) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .toLowerCase()
                  .indexOf("www-sites.oracle.com".toLowerCase()) > -1 &&
                typeof d["meta.countryid"] != "undefined" &&
                d["meta.countryid"]
                  .toString()
                  .toLowerCase()
                  .indexOf("us".toLowerCase()) < 0 &&
                typeof d["dom.pathname"] != "undefined" &&
                /^(?!\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye|mx|br)\/).*$/.test(
                  d["dom.pathname"]
                ));
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "132":
          try {
            c[132] |=
              typeof d["medimath_pixel_id"] != "undefined" &&
              d["medimath_pixel_id"]
                .toString()
                .toLowerCase()
                .indexOf("false".toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "133":
          try {
            c[133] |=
              (typeof d["page_href"] != "undefined" &&
                d["page_href"]
                  .toString()
                  .toLowerCase()
                  .indexOf("gclid".toLowerCase()) > -1) ||
              (typeof d["page_href"] != "undefined" &&
                d["page_href"]
                  .toString()
                  .toLowerCase()
                  .indexOf("gclsrc".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "134":
          try {
            c[134] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-sites.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "blogs.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-uat.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa-dr.appoci.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa.appoci.oracle.com".toLowerCase());
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "135":
          try {
            c[135] |=
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"]
                  .toString()
                  .toLowerCase()
                  .indexOf("/cloud/costestimator.html".toLowerCase()) < 0) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www.oracle.com".toLowerCase() &&
                typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.oracle.com".toLowerCase() &&
                typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/".toLowerCase());
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "136":
          try {
            c[136] |=
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/lad/corporate/careers/opportunities/software-engineers-developers/".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/ph/corporate/careers/opportunities/software-engineers-developers/".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/in/corporate/careers/opportunities/software-engineers-developers/".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/emea/corporate/careers/opportunities/software-engineers-developers/".toLowerCase());
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "137":
          try {
            c[137] |=
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/uk/database/data-management/".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/fr/database/data-management/".toLowerCase()) ||
              (typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/de/database/data-management/".toLowerCase());
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "138":
          try {
            c[138] |=
              typeof d["dom.pathname"] != "undefined" &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("/cn/".toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "139":
          try {
            c[139] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .toLowerCase()
                  .indexOf("www-sites.oracle.com".toLowerCase()) > -1 &&
                typeof d["ytembed_exists"] != "undefined" &&
                d["ytembed_exists"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .toLowerCase()
                  .indexOf("www.oracle.com".toLowerCase()) > -1 &&
                typeof d["ytembed_exists"] != "undefined" &&
                d["ytembed_exists"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "14":
          try {
            c[14] |=
              typeof d["location_hostname"] != "undefined" &&
              d["location_hostname"].toString().toLowerCase() ==
                "www.oracle.com".toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "141":
          try {
            c[141] |=
              (typeof d["consent_functional"] != "undefined" &&
                d["consent_functional"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1) ||
              (typeof d["consent_implied"] != "undefined" &&
                d["consent_implied"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1 &&
                typeof d["explicit_country"] != "undefined" &&
                d["explicit_country"]
                  .toString()
                  .toLowerCase()
                  .indexOf("false".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "142":
          try {
            c[142] |=
              (typeof d["consent_advertising"] != "undefined" &&
                d["consent_advertising"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1) ||
              (typeof d["consent_implied"] != "undefined" &&
                d["consent_implied"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1 &&
                typeof d["explicit_country"] != "undefined" &&
                d["explicit_country"]
                  .toString()
                  .toLowerCase()
                  .indexOf("false".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "143":
          try {
            c[143] |=
              (typeof d["consent_functional"] != "undefined" &&
                d["consent_functional"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1) ||
              (typeof d["consent_implied"] != "undefined" &&
                d["consent_implied"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1 &&
                typeof d["explicit_country"] != "undefined" &&
                d["explicit_country"]
                  .toString()
                  .toLowerCase()
                  .indexOf("false".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "145":
          try {
            c[145] |=
              (typeof d["consent_advertising"] != "undefined" &&
                d["consent_advertising"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1) ||
              (typeof d["consent_implied"] != "undefined" &&
                d["consent_implied"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1 &&
                typeof d["explicit_country"] != "undefined" &&
                d["explicit_country"]
                  .toString()
                  .toLowerCase()
                  .indexOf("false".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "146":
          try {
            c[146] |=
              typeof d["dom.pathname"] != "undefined" &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("/customers/".toLowerCase()) < 0 &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("/news/".toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "15":
          try {
            c[15] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www.oracle.com".toLowerCase() &&
                d["dom.url"]
                  .toString()
                  .toLowerCase()
                  .indexOf("chat=window-loaded".toLowerCase()) < 0) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-sites.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.appoci.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-qa-dr.appoci.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-stage.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-uat.oracle.com".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-dev1.oracle.com".toLowerCase());
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "18":
          try {
            c[18] |=
              typeof d["country_exclusion"] != "undefined" &&
              d["country_exclusion"]
                .toString()
                .toLowerCase()
                .indexOf("false".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "19":
          try {
            c[19] |=
              typeof d["uber_should_run"] != "undefined" &&
              d["uber_should_run"]
                .toString()
                .toLowerCase()
                .indexOf("true".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "2":
          try {
            c[2] |=
              typeof d["dom.pathname"] != "undefined" &&
              d["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("rimini-street".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "20":
          try {
            c[20] |=
              typeof d["sales_chat_should_run"] != "undefined" &&
              d["sales_chat_should_run"]
                .toString()
                .toLowerCase()
                .indexOf("true".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "26":
          try {
            c[26] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .toLowerCase()
                  .indexOf("www.oracle.com".toLowerCase()) > -1 &&
                typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() !=
                  "/index.html".toLowerCase() &&
                d["dom.pathname"].toString().toLowerCase() !=
                  "/corporate/accessibility/".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .toLowerCase()
                  .indexOf("www.oracle.com".toLowerCase()) < 0) ||
              typeof d["location_hostname"] == "undefined";
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "27":
          try {
            c[27] |=
              typeof d["country_exclusion"] != "undefined" &&
              d["country_exclusion"]
                .toString()
                .toLowerCase()
                .indexOf("false".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "28":
          try {
            c[28] |=
              typeof d["dom.pathname"] != "undefined" &&
              /^\/ru\//i.test(d["dom.pathname"]);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "30":
          try {
            c[30] |=
              (typeof d["consent_advertising"] != "undefined" &&
                d["consent_advertising"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1) ||
              (typeof d["consent_implied"] != "undefined" &&
                d["consent_implied"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "31":
          try {
            c[31] |=
              (typeof d["consent_functional"] != "undefined" &&
                d["consent_functional"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1) ||
              (typeof d["consent_implied"] != "undefined" &&
                d["consent_implied"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "32":
          try {
            c[32] |=
              (typeof d["consent_functional"] != "undefined" &&
                d["consent_functional"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1) ||
              (typeof d["consent_implied"] != "undefined" &&
                d["consent_implied"]
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1);
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "5":
          try {
            c[5] |=
              typeof d["trustarc_loaded"] != "undefined" &&
              d["trustarc_loaded"]
                .toString()
                .toLowerCase()
                .indexOf("false".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "6":
          try {
            c[6] |=
              typeof d["oracle_infinity_should_run"] != "undefined" &&
              d["oracle_infinity_should_run"]
                .toString()
                .toLowerCase()
                .indexOf("true".toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          break;
        case "88":
          try {
            c[88] |=
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().indexOf("www.oracle.com") >
                  -1 &&
                typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/corporate/contact/".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .indexOf("www-sites.oracle.com") > -1 &&
                typeof d["dom.pathname"] != "undefined" &&
                d["dom.pathname"].toString().toLowerCase() ==
                  "/corporate/contact/".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().indexOf("www.oracle.com") >
                  -1 &&
                typeof d["dom.pathname"] != "undefined" &&
                /\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\/corporate\/contact\//.test(
                  d["dom.pathname"]
                )) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().indexOf("www.oracle.com") >
                  -1 &&
                typeof d["dom.pathname"] != "undefined" &&
                /^\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\//.test(
                  d["dom.pathname"]
                )) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .indexOf("www-sites.oracle.com") > -1 &&
                typeof d["dom.pathname"] != "undefined" &&
                /\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\//.test(
                  d["dom.pathname"]
                )) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .indexOf("www-sites.oracle.com") > -1 &&
                typeof d["meta.countryid"] != "undefined" &&
                d["meta.countryid"].toString().toLowerCase() ==
                  "us".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().indexOf("www.oracle.com") >
                  -1 &&
                typeof d["meta.countryid"] != "undefined" &&
                d["meta.countryid"].toString().toLowerCase() ==
                  "us".toLowerCase() &&
                typeof d["sales_chat_should_run"] != "undefined" &&
                d["sales_chat_should_run"].toString().toLowerCase() ==
                  "true".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .indexOf("www-stage.oracle.com") > -1 &&
                typeof d["meta.countryid"] != "undefined" &&
                d["meta.countryid"].toString().toLowerCase() ==
                  "us".toLowerCase() &&
                typeof d["sales_chat_should_run"] != "undefined" &&
                d["sales_chat_should_run"].toString().toLowerCase() ==
                  "true".toLowerCase()) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"]
                  .toString()
                  .indexOf("www-stage.oracle.com") > -1 &&
                typeof d["dom.pathname"] != "undefined" &&
                /\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\//.test(
                  d["dom.pathname"]
                )) ||
              (typeof d["location_hostname"] != "undefined" &&
                d["location_hostname"].toString().toLowerCase() ==
                  "www-sites.oracle.com".toLowerCase() &&
                typeof d["dom.pathname"] != "undefined" &&
                /^\/(uk|za|au|in|ca-en|ae|africa|asiasouth|ba|bd|bg|bh|bn|bt|cy|cz|dk|dz|ee|eg|fi|gh|gr|hk|hr|hu|id|ie|iq|il-en|jo|ke|kh|kw|la|lb|lk|lt|lv|ma|middleeast|mn|mt|my|ng|no|nz|om|ph|pk|qa|ro|rs|sa|se|sg|si|sk|th|ua|vn|ye)\//.test(
                  d["dom.pathname"]
                ));
          } catch (e) {
            utag.DB(e);
          }
          break;
      }
    }
  };
  utag.pre = function () {
    utag.loader.initdata();
    utag.pagevars();
    try {
      utag.loader.RD(utag.data);
    } catch (e) {
      utag.DB(e);
    }
    utag.loader.loadrules();
  };
  utag.loader.GET = function () {
    utag.cl = { _all_: 1 };
    utag.pre();
    utag.handler.extend = [
      function (a, b) {
        try {
          if (1) {
            try {
              utag_cfg_ovrd = window.utag_cfg_ovrd || {};
              utag_cfg_ovrd.isabot = false;
              window.is_bot = false;
              window.is_google_bot = false;
              window.is_other_bot = false;
              utag_cfg_ovrd.botList =
                "bot|google|aolbuild|baidu|bing|msn|duckduckgo|teoma|slurp|yandex|ktxn|360Spider|404checker|404enemy|80legs|Abonti|Aboundex|Acunetix|ADmantX|AfD-Verbotsverfahren|AhrefsBot|AIBOT|AiHitBot|Aipbot|Alexibot|Alligator|AllSubmitter|AlphaBot|Anarchie|Apexoo|archive.org_bot|ASPSeek|Asterias|Attach|autoemailspider|BackDoorBot|Backlink-Ceck|backlink-check|BacklinkCrawler|BackStreet|BackWeb|Badass|Bandit|Barkrowler|BatchFTP|Battleztar Bazinga|BBBike|BDCbot|BDFetch|BetaBot|Bigfoot|Bitacle|Blackboard|Black Hole|BlackWidow|BLEXBot|Blow|BlowFish|Boardreader|Bolt|BotALot|Brandprotect|Brandwatch|Bubing|Buddy|BuiltBotTough|BuiltWith|Bullseye|BunnySlippers|BuzzSumo|Calculon|CATExplorador|CazoodleBot|CCBot|Cegbfeieh|CheeseBot|CherryPicker|CheTeam|ChinaClaw|Chlooe|Claritybot|Cliqzbot|Cloud mapping|coccocbot-web|Cogentbot|cognitiveseo|Collector|com.plumanalytics|Copier|CopyRightCheck|Copyscape|Cosmos|Craftbot|crawler4j|crawler.feedback|crawl.sogou.com|CrazyWebCrawler|Crescent|CSHttp|Curious|Custo|DatabaseDriverMysqli|DataCha0s|DBLBot|demandbase-bot|Demon|Deusu|Devil|Digincore|DigitalPebble|DIIbot|Dirbuster|Disco|Discobot|Discoverybot|DittoSpyder|DnyzBot|DomainAppender|DomainCrawler|DomainSigmaCrawler|DomainStatsBot|Dotbot|Download Wonder|Dragonfly|Drip|DTS Agent|EasyDL|Ebingbong|eCatch|ECCP/1.0|Ecxi|EirGrabber|EMail Siphon|EMail Wolf|EroCrawler|evc-batch|Evil|Exabot|Express WebPictures|ExtLinksBot|Extractor|ExtractorPro|Extreme Picture Finder|EyeNetIE|Ezooms|FDM|FemtosearchBot|FHscan|Fimap|Firefox/7.0|FlashGet|Flunky|Foobot|Freeuploader|FrontPage|FyberSpider|Fyrebot|GalaxyBot|Genieo|GermCrawler|Getintent|GetRight|GetWeb|Gigablast|Gigabot|G-i-g-a-b-o-t|Go-Ahead-Got-It|Gotit|GoZilla|Go!Zilla|Grabber|GrabNet|Grafula|GrapeFX|GrapeshotCrawler|GridBot|GT::WWW|Haansoft|HaosouSpider|Harvest|Havij|HEADMasterSEO|Heritrix|Hloader|HMView|HTMLparser|HTTP::Lite|HTTrack|Humanlinks|HybridBot|Iblog|IDBot|Id-search|IlseBot|Image Fetch|Image Sucker|IndeedBot|Indy Library|InfoNaviRobot|InfoTekies|instabid|Intelliseek|InterGET|Internet Ninja|InternetSeer|internetVista monitor|ips-agent|Iria|IRLbot|Iskanie|IstellaBot|JamesBOT|Jbrofuzz|JennyBot|JetCar|JikeSpider|JOC Web Spider|Joomla|Jorgee|JustView|Jyxobot|Kenjin Spider|Keyword Density|Kozmosbot|Lanshanbot|Larbin|LeechFTP|LeechGet|LexiBot|Lftp|LibWeb|Libwhisker|Lightspeedsystems|Likse|Linguee|Linkdexbot|LinkextractorPro|LinkpadBot|LinkScan|LinksManager|LinkWalker|LinqiaMetadataDownloaderBot|LinqiaRSSBot|LinqiaScrapeBot|Lipperhey|Litemage_walker|Lmspider|LNSpiderguy|Ltx71|lwp-request|LWP::Simple|lwp-trivial|Magnet|Mag-Net|magpie-crawler|Mail.RU_Bot|Majestic12|MarkMonitor|MarkWatch|Masscan|Mass Downloader|Mata Hari|MauiBot|Meanpathbot|Mediatoolkitbot|mediawords|MegaIndex.ru|Metauri|MFC_Tear_Sample|Microsoft Data Access|Microsoft URL Control|MIDown tool|MIIxpc|Mister PiX|MJ12bot|Mojeek|Morfeus Fucking Scanner|Mr.4x3|MSFrontPage|MSIECrawler|Msrabot|MS Web Services Client Protocol|muhstik-scan|Musobot|Name Intelligence|Nameprotect|Navroad|NearSite|Needle|Nessus|NetAnts|Netcraft|netEstate NE Crawler|NetLyzer|NetMechanic|NetSpider|Nettrack|Net Vampire|Netvibes|NetZIP|NextGenSearchBot|Nibbler|NICErsPRO|Niki-bot|Nikto|NimbleCrawler|Ninja|Nmap|NPbot|Nutch|oBot|Octopus|Offline Explorer|Offline Navigator|Openfind|OpenLinkProfiler|Openvas|OpenVAS|OrangeBot|OrangeSpider|OutclicksBot|OutfoxBot|PageAnalyzer|Page Analyzer|PageGrabber|page scorer|PageScorer|Panscient|Papa Foto|Pavuk|pcBrowser|PECL::HTTP|PeoplePal|PHPCrawl|Picscout|Picsearch|PictureFinder|Pimonster|Pi-Monster|Pixray|PleaseCrawl|plumanalytics|Pockey|POE-Component-Client-HTTP|Probethenet|ProPowerBot|ProWebWalker|Psbot|Pump|PxBroker|PyCurl|QueryN Metasearch|Quick-Crawler|RankActive|RankActiveLinkBot|RankFlex|RankingBot|RankingBot2|Rankivabot|RankurBot|RealDownload|Reaper|RebelMouse|Recorder|RedesScrapy|ReGet|RepoMonkey|Ripper|RocketCrawler|Rogerbot|s1z.ru|SalesIntelligent|SBIder|ScanAlert|Scanbot|scan.lol|Scrapy|Screaming|ScreenerBot|Searchestate|SearchmetricsBot|Semrush|SemrushBot|SEOkicks|SEOlyticsCrawler|Seomoz|SEOprofiler|seoscanners|SeoSiteCheckup|SEOstats|sexsearcher|Shodan|Siphon|SISTRIX|Sitebeam|SiteExplorer|Siteimprove|SiteLockSpider|SiteSnagger|SiteSucker|Site Sucker|Sitevigil|Slackbot-LinkExpanding|SlySearch|SmartDownload|SMTBot|Snake|Snapbot|Snoopy|SocialRankIOBot|sogouspider|Sogou web spider|Sosospider|Sottopop|SpaceBison|Spammen|SpankBot|Spanner|Spbot|Spinn3r|SputnikBot|Sqlmap|Sqlworm|Sqworm|Steeler|Stripper|Sucker|Sucuri|SuperBot|SuperHTTP|Surfbot|SurveyBot|Suzuran|Swiftbot|sysscan|Szukacz|T0PHackTeam|T8Abot|tAkeOut|Teleport|TeleportPro|Telesoft|Telesphoreo|Telesphorep|The Intraformant|TheNomad|TightTwatBot|Titan|Toata|Toweyabot|Tracemyfile|Trendiction|Trendictionbot|trendiction.com|trendiction.de|True_Robot|Turingos|Turnitin|TurnitinBot|TwengaBot|Twice|Typhoeus|UnisterBot|URLy.Warning|URLy Warning|Vacuum|Vagabondo|VB Project|VCI|VeriCiteCrawler|VidibleScraper|Virusdie|VoidEYE|Voil|Voltron|Wallpapers/3.0|WallpapersHD|WASALive-Bot|WBSearchBot|Webalta|WebAuto|Web Auto|WebBandit|WebCollage|Web Collage|WebCopier|WEBDAV|WebEnhancer|Web Enhancer|WebFetch|Web Fetch|WebFuck|Web Fuck|WebGo IS|WebImageCollector|WebLeacher|WebmasterWorldForumBot|webmeup-crawler|WebPix|Web Pix|WebReaper|WebSauger|Web Sauger|Webshag|WebsiteExtractor|WebsiteQuester|Website Quester|Webster|WebStripper|WebSucker|Web Sucker|WebWhacker|WebZIP|WeSEE|Whack|Whacker|Whatweb|Who.is Bot|Widow|WinHTTrack|WiseGuys Robot|WISENutbot|Wonderbot|Woobot|Wotbox|Wprecon|WPScan|WWW-Collector-E|WWW-Mechanize|WWW::Mechanize|WWWOFFLE|x09Mozilla|x22Mozilla|Xaldon_WebSpider|Xaldon WebSpider|Xenu|xpymep1.exe|YandexBot|YoudaoBot|Zade|Zauba|zauba.io|Zermelo|Zeus|zgrab|Zitebot|ZmEu|ZoominfoBot|ZumBot|ZyBorg|Phantom".toLowerCase();
              utag_cfg_ovrd.user_agent_regex = new RegExp(
                utag_cfg_ovrd.botList,
                "i"
              );
              utag_cfg_ovrd.google_user_agent_regex = new RegExp("google", "i");
              if (
                utag_cfg_ovrd.google_user_agent_regex.test(navigator.userAgent)
              ) {
                utag_cfg_ovrd.isabot = true;
                window.is_bot = true;
                window.is_google_bot = true;
              } else if (
                utag_cfg_ovrd.user_agent_regex.test(navigator.userAgent)
              ) {
                utag_cfg_ovrd.isabot = true;
                window.is_bot = true;
                window.is_other_bot = true;
              }
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              b["location_hostname"] = location.host;
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b, c, d, e, f, g) {
        if (1) {
          d = b["location_hostname"];
          if (typeof d == "undefined") return;
          c = [
            { "-stage": "true" },
            { "-content": "true" },
            { localhost: "true" },
            { ".us.oracle.com": "true" },
            { "127.0.0.1": "true" },
            { "-dev": "true" },
            { "www-sites": "true" },
            { "-uat": "true" },
            { "qa-dr": "true" },
            { "qa-dev": "true" },
            { orasitesdev: "true" },
            { orasitestest: "true" },
            { "orasites-prodapp": "true" },
            { "-proxy": "true" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              if (d.toString().indexOf(f) > -1) {
                b["is_stage"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
          if (!m) b["is_stage"] = "false";
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              if (b["cp.utag_main__ss"] == 1)
                utag.ut.loader({
                  src:
                    "https://tags.tiqcdn.com/utag/" +
                    "tiqapp/ut" +
                    "ag.v.js?a=" +
                    utag.cfg.utid +
                    (utag.cfg.nocookie
                      ? "&nocookie=1"
                      : "&cb=" + new Date().getTime()),
                  id: "tiqapp",
                });
            } catch (e) {
              utag.DB("TealiumCnaming: SessionCount" + e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            typeof b["consent_code_has_run"] == "undefined" ||
            (typeof b["consent_code_has_run"] != "undefined" &&
              b["consent_code_has_run"] == "") ||
            (typeof b["consent_code_has_run"] != "undefined" &&
              b["consent_code_has_run"]
                .toString()
                .toLowerCase()
                .indexOf("true".toLowerCase()) < 0)
          ) {
            if (
              navigator.doNotTrack == 1 ||
              window.doNotTrack == 1 ||
              navigator.msDoNotTrack == 1
            ) {
              b.consent_do_not_track = true;
            } else {
              b.consent_do_not_track = false;
            }
            if (
              typeof oracle !== "undefined" &&
              typeof oracle.truste !== "undefined" &&
              oracle.truste.api !== "undefined" &&
              typeof oracle.truste.api.getGdprConsentDecision() !== "undefined"
            ) {
              b.consent_decision =
                oracle.truste.api.getGdprConsentDecision().consentDecision;
              b.consent_source =
                oracle.truste.api.getGdprConsentDecision().source;
            } else {
              var oracle = oracle || {};
              (oracle.truste = {}),
                (oracle.truste.api = {}),
                function () {
                  (this.getCookieName = function () {
                    return "notice_preferences";
                  }),
                    (this.getStorageItemName = function () {
                      return "truste.eu.cookie.notice_preferences";
                    }),
                    (this.getGdprCookieName = function () {
                      return "notice_gdpr_prefs";
                    }),
                    (this.getGdprStorageItemName = function () {
                      return "truste.eu.cookie.notice_gdpr_prefs";
                    });
                }.apply(oracle.truste),
                function () {
                  var e = oracle.truste;
                  function t(e) {
                    for (
                      var t = e + "=", r = document.cookie.split(";"), n = 0;
                      n < r.length;
                      n++
                    ) {
                      for (var o = r[n]; " " == o.charAt(0); )
                        o = o.substring(1);
                      if (0 == o.indexOf(t))
                        return o.substring(t.length, o.length);
                    }
                    return null;
                  }
                  function r(e) {
                    var t,
                      r =
                        ((t = e),
                        "undefined" != typeof Storage
                          ? localStorage.getItem(t)
                          : null);
                    return null != r ? JSON.parse(r).value : null;
                  }
                  (this.getConsentCode = function () {
                    var n = r(e.getStorageItemName()) || t(e.getCookieName());
                    return null == n ? -1 : parseInt(n) + 1;
                  }),
                    (this.getGdprConsentCode = function () {
                      var n =
                        r(e.getGdprStorageItemName()) ||
                        t(e.getGdprCookieName());
                      if (null == n) return -1;
                      var o = new Array();
                      o = n.split(",");
                      for (a in o) o[a] = parseInt(o[a], 10) + 1;
                      return o.toString();
                    }),
                    (this.getConsentDecision = function () {
                      var e = this.getConsentCode();
                      if (-1 == e) {
                        var t = '{"consentDecision": 0, "source": "implied"}';
                        return JSON.parse(t);
                      }
                      t =
                        '{"consentDecision": ' +
                        parseInt(e) +
                        ', "source": "asserted"}';
                      return JSON.parse(t);
                    }),
                    (this.getGdprConsentDecision = function () {
                      var e = this.getGdprConsentCode();
                      if (-1 == e) {
                        var t = '{"consentDecision": [0], "source": "implied"}';
                        return JSON.parse(t);
                      }
                      t =
                        '{"consentDecision": [' +
                        e +
                        '], "source": "asserted"}';
                      return JSON.parse(t);
                    });
                }.apply(oracle.truste.api);
              if (
                typeof oracle !== "undefined" &&
                typeof oracle.truste !== "undefined" &&
                oracle.truste.api !== "undefined" &&
                typeof oracle.truste.api.getGdprConsentDecision() !==
                  "undefined"
              ) {
                b.consent_decision =
                  oracle.truste.api.getGdprConsentDecision().consentDecision;
                b.consent_source =
                  oracle.truste.api.getGdprConsentDecision().source;
              } else if (
                typeof truste !== "undefined" &&
                typeof truste.cma !== "undefined" &&
                typeof truste.cma.callApi() !== "undefined"
              ) {
                b.consent_decision = truste.cma.callApi(
                  "getGDPRConsentDecision",
                  "oracle.com"
                ).consentDecision;
                b.consent_source = truste.cma.callApi(
                  "getGDPRConsentDecision",
                  "oracle.com"
                ).source;
              } else {
                b.consent_decision = "-1";
                b.consent_source = "NoTRUSTe";
              }
            }
            if (
              typeof b["consent_decision"] != "undefined" &&
              b["consent_decision"]
                .toString()
                .toLowerCase()
                .indexOf("3".toLowerCase()) > -1
            ) {
              b["consent_advertising"] = true;
            } else {
              b["consent_advertising"] = false;
            }
            if (
              typeof b["consent_decision"] != "undefined" &&
              b["consent_decision"]
                .toString()
                .toLowerCase()
                .indexOf("2".toLowerCase()) > -1
            ) {
              b["consent_functional"] = true;
            } else {
              b["consent_functional"] = false;
            }
            if (
              typeof b["consent_decision"] != "undefined" &&
              b["consent_decision"]
                .toString()
                .toLowerCase()
                .indexOf("0".toLowerCase()) > -1
            ) {
              if (
                typeof b["consent_do_not_track"] != "undefined" &&
                b["consent_do_not_track"]
                  .toString()
                  .toLowerCase()
                  .indexOf("false".toLowerCase()) > -1
              ) {
                b["consent_implied"] = true;
              } else {
                b["consent_implied"] = false;
              }
            } else {
              b["consent_implied"] = false;
            }
            (function setCountryExclusion() {
              function launchGetUrlVars() {
                var a = [],
                  b,
                  c = window.location.href;
                -1 != c.indexOf("#") && (c = c.split("#")[0]);
                for (
                  var d = c
                      .slice(window.location.href.indexOf("?") + 1)
                      .split("&"),
                    e = 0;
                  e < d.length;
                  e++
                ) {
                  b = d[e].split("=");
                  a.push(b[0]);
                  a[b[0]] = b[1];
                }
                return a;
              }
              var countryFound = false;
              var countryList = ["/ru/", "/cn/"];
              var arrLen = countryList.length;
              for (var i = 0; i < arrLen; i++) {
                if (location.href.indexOf(countryList[i]) != -1) {
                  countryFound = true;
                  break;
                }
              }
              if (location.hostname === "go.oracle.com") {
                var langCode = window.languageCode ? window.languageCode : "en";
                var countryId = window.countryCode ? window.countryCode : "us";
                var srcParam = launchGetUrlVars()["src1"];
                if (srcParam != undefined) {
                  if (srcParam.indexOf("a_") != -1) {
                    console.log("in if lop");
                    var countryValue = srcParam.split(":");
                    for (var i = 0; i < countryValue.length; i++) {
                      if (countryValue[i].indexOf("a_") != -1) {
                        console.log("in countryid");
                        countryId = countryValue[i].substring(2);
                        console.log(countryId);
                        break;
                      }
                    }
                  }
                }
                if (
                  langCode == "ru-ru" ||
                  countryId == "ru" ||
                  langCode == "zh-cn" ||
                  countryId == "cn"
                ) {
                  countryFound = true;
                }
              }
              if (window.truste) {
                if (
                  window.truste.eu &&
                  truste.eu.bindMap &&
                  truste.eu.bindMap.country
                ) {
                  if (window.truste.eu.bindMap.country == "ru") {
                    countryFound = true;
                  }
                }
              }
              b.country_exclusion = countryFound;
            })();
            b.consent_code_has_run = true;
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (typeof b["ut.env"] == "undefined") {
            try {
              b["ut.env"] = utag.cfg.path.split("/")[4] || "";
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              for (var key in b) {
                if (b.hasOwnProperty(key)) {
                  if (
                    /^meta/i.test(key) ||
                    /^cp/i.test(key) ||
                    /^qp/i.test(key)
                  ) {
                    var lower_cased_key = key.replace(/\s/g, "").toLowerCase();
                    b[lower_cased_key] = b[key];
                  }
                }
              }
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            typeof b["user_action"] == "undefined" ||
            (typeof b["user_action"] != "undefined" && b["user_action"] == "")
          ) {
            try {
              b["user_action"] = b["dom.referrer"]
                ? b["dom.referrer"]
                : "on load";
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (typeof b["dom.pathname"] != "undefined") {
            try {
              b["channel"] =
                b["dom.pathname"].indexOf("technetwork") != -1
                  ? "SC OTN"
                  : "SC Ocom";
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              if (
                typeof b["meta.language"] != "undefined" &&
                b["meta.language"] != ""
              ) {
                if (
                  b["meta.language"]
                    .toString()
                    .toLowerCase()
                    .indexOf("en".toLowerCase()) > -1
                ) {
                  b.site_id = "ocom:" + b["meta.language"];
                } else {
                  b.site_id = "global:" + b["meta.language"];
                }
              } else {
                console.log("in else");
                console.log(window.s_pageName);
                setTimeout(function () {
                  if (typeof window.s_pageName != "undefined") {
                    console.log("new in if utag data");
                    b.page_name = window.s_pageName;
                  }
                }, 1000);
              }
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              if (
                b["cp.utag_main__sn"] < 2 ||
                typeof b["cp.utag_main__sn"] === "undefined" ||
                typeof b["cp.utag_main__sn"] === "null"
              ) {
                b.user_type = "New";
              } else if (b["cp.utag_main__sn"] > 1) {
                b.user_type = "Repeat";
              }
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              var regions = [
                {
                  region: "lad",
                  countries: [
                    "ar",
                    "br",
                    "cl",
                    "co",
                    "cr",
                    "lad",
                    "mx",
                    "pe",
                    "pr",
                    "ve",
                    "ec",
                    "la",
                    "esa",
                  ],
                },
                { region: "nas", countries: ["ca-en", "ca-fr", "as", "us"] },
                {
                  region: "apac",
                  countries: [
                    "asiasouth",
                    "au",
                    "cn",
                    "hk",
                    "in",
                    "id",
                    "jp",
                    "kr",
                    "my",
                    "mn",
                    "nz",
                    "pk",
                    "ph",
                    "sg",
                    "lk",
                    "tw",
                    "th",
                    "vn",
                    "ja",
                    "ko",
                    "zhs",
                    "zht",
                    "ptb",
                  ],
                },
                {
                  region: "emea",
                  countries: [
                    "at",
                    "be",
                    "ba",
                    "bg",
                    "hr",
                    "cy",
                    "cz",
                    "dk",
                    "ee",
                    "fi",
                    "fr",
                    "de",
                    "gr",
                    "hu",
                    "ie",
                    "it",
                    "ru",
                    "lv",
                    "lt",
                    "lu",
                    "mt",
                    "nl",
                    "no",
                    "pl",
                    "pt",
                    "ro",
                    "rs",
                    "sk",
                    "si",
                    "es",
                    "se",
                    "ch-fr",
                    "ch-de",
                    "tr",
                    "ua",
                    "uk",
                    "africa",
                    "africa-fr",
                    "dz",
                    "bh",
                    "eg",
                    "gh",
                    "il",
                    "jo",
                    "ke",
                    "kw",
                    "lb",
                    "middleeast-ar",
                    "middleeast",
                    "ma",
                    "ng",
                    "om",
                    "qa",
                    "sa",
                    "sa-ar",
                    "sn",
                    "za",
                    "ae",
                    "ae-ar",
                    "gb",
                    "preu",
                    "prme",
                    "al",
                    "ao",
                    "de",
                    "dk",
                    "me",
                    "mk",
                    "yu",
                    "emea-en",
                    "ita",
                  ],
                },
              ];
              var pageURL = b["dom.pathname"]
                ? b["dom.pathname"]
                : window.location.pathname;
              var pageRegion = "nas",
                countryCode;
              if (
                pageURL.indexOf("/opn/") === 0 ||
                pageURL.indexOf("/partners/") === 0
              ) {
                countryCode = pageURL.split("/").slice(1)[1];
              } else if (
                location.hostname === "community.oracle.com" &&
                pageURL.indexOf("/other-languages/") != -1
              ) {
                var langCode = pageURL
                  .split("/other-languages/")[1]
                  .split("/")[0];
                if (langCode == "chinese") {
                  countryCode = "cn";
                }
                if (langCode == "japanese") {
                  countryCode = "jp";
                }
                if (langCode == "portuguese") {
                  countryCode = "pt";
                }
                if (langCode == "espanol") {
                  countryCode = "es";
                }
                if (langCode == "german") {
                  countryCode = "de";
                }
              } else if (location.hostname === "go.oracle.com") {
                countryCode = window.countryCode ? window.countryCode : "";
              } else {
                countryCode = location.pathname.split("/").slice(1)[0];
              }
              if (countryCode != undefined) {
                pageRegion = findRegion(countryCode);
              }
              var sourceParam = launchGetUrlVars()["source"];
              var srcParam = launchGetUrlVars()["src1"];
              var sourceTypeParam = launchGetUrlVars()["sourceType"];
              var regionFound = false;
              if (sourceParam != undefined && regionFound == false) {
                pageRegion = readTrackingPageRegion(sourceParam);
              }
              if (srcParam != undefined && regionFound == false) {
                pageRegion = readTrackingPageRegion(srcParam);
              }
              if (sourceTypeParam != undefined && regionFound == false) {
                pageRegion = readTrackingPageRegion(sourceTypeParam);
              }
              function readTrackingPageRegion(trackingParam) {
                if (trackingParam.indexOf("emea") != -1) {
                  pageRegion = "emea";
                  regionFound = true;
                } else if (trackingParam.indexOf("lad") != -1) {
                  pageRegion = "lad";
                  regionFound = true;
                } else if (trackingParam.indexOf("apac") != -1) {
                  pageRegion = "apac";
                  regionFound = true;
                } else if (trackingParam.indexOf("nas") != -1) {
                  pageRegion = "nas";
                  regionFound = true;
                } else if (trackingParam.indexOf("a_") != -1) {
                  var countryValue = trackingParam.split(":");
                  for (var i = 0; i < countryValue.length; i++) {
                    if (countryValue[i].indexOf("a_") != -1) {
                      countryCode = countryValue[i].substring(2);
                      pageRegion = findRegion(countryCode);
                      regionFound = true;
                      break;
                    }
                  }
                }
                return pageRegion;
              }
              function findRegion(countryCode) {
                if (countryCode) {
                  for (var i = 0; i < regions.length; i++) {
                    var regionObj = regions[i];
                    if (regionObj.countries.indexOf(countryCode) != -1) {
                      pageRegion = regionObj.region;
                      break;
                    }
                  }
                }
                return pageRegion;
              }
              function launchGetUrlVars() {
                var a = [],
                  b,
                  c = window.location.href;
                -1 != c.indexOf("#") && (c = c.split("#")[0]);
                for (
                  var d = c
                      .slice(window.location.href.indexOf("?") + 1)
                      .split("&"),
                    e = 0;
                  e < d.length;
                  e++
                ) {
                  b = d[e].split("=");
                  a.push(b[0]);
                  a[b[0]] = b[1];
                }
                return a;
              }
              b.page_region = pageRegion;
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              var www_mrkt = getMktUserInfo();
              if (
                typeof www_mrkt.version != "undefined" &&
                www_mrkt.version != -1
              ) {
                b.login_status =
                  ((typeof b.consent_advertising !== "undefined" &&
                    b.consent_advertising) ||
                    (typeof b.consent_implied !== "undefined" &&
                      b.consent_implied)) &&
                  www_mrkt.guid
                    ? www_mrkt.guid
                    : "NotSent";
              } else {
                var user_info = getUserInfo();
                if (
                  typeof user_info.version != "undefined" &&
                  user_info.version != -1
                ) {
                  b.login_status =
                    ((typeof b.consent_advertising !== "undefined" &&
                      b.consent_advertising) ||
                      (typeof b.consent_implied !== "undefined" &&
                        b.consent_implied)) &&
                    user_info.guid
                      ? user_info.guid
                      : "NotSent";
                }
              }
              if (typeof b.login_status == "undefined") {
                b.login_status = "not logged in";
              }
              function getMktUserInfo() {
                var mktUSER = new Array();
                if (
                  typeof b["cp.ora_www_mrkt"] != "undefined" &&
                  b["cp.ora_www_mrkt"] != ""
                ) {
                  mktUSER = b["cp.ora_www_mrkt"].split("~");
                  mktUSER.version = sani(
                    mktUSER[0].substr(2, mktUSER[0].length)
                  );
                  mktUSER.guid = sani(mktUSER[1].substr(2, mktUSER[1].length));
                  mktUSER.type = sani(mktUSER[2].substr(2, mktUSER[2].length));
                  mktUSER.cookieclass = sani(
                    mktUSER[3].substr(2, mktUSER[3].length)
                  );
                } else {
                  mktUSER.version = -1;
                }
                return mktUSER;
              }
              function getUserInfo() {
                var infoUSER = new Array();
                if (
                  typeof b["cp.ora_ucm_info"] != "undefined" &&
                  b["cp.ora_ucm_info"] != ""
                ) {
                  infoUSER = b["cp.ora_ucm_info"].split("~");
                  infoUSER.version = sani(infoUSER[0]);
                  infoUSER.guid = sani(infoUSER[1]);
                  infoUSER.username = sani(infoUSER[4]);
                } else {
                  infoUSER.version = -1;
                }
                return infoUSER;
              }
              function sani(saniMe) {
                var sMe = typeof saniMe == "undefined" ? "NoData" : saniMe;
                var goodChar =
                  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ @";
                if (sMe != "NoData") {
                  var al = sMe.length;
                  for (i = 0; i < al; i++) {
                    if (goodChar.search(sMe.substr(i, 1)) == -1) {
                      sMe = "Invalid";
                      i = al + 1;
                    }
                  }
                }
                return sMe;
              }
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            typeof b["site_id"] != "undefined" &&
            b["site_id"] != "" &&
            typeof b["meta.siteid"] != "undefined" &&
            b["meta.siteid"] != "" &&
            typeof b["dom.pathname"] != "undefined" &&
            b["dom.pathname"] != ""
          ) {
            try {
              b["page_name"] =
                b.site_id + "-" + b["meta.siteid"] + ":" + b["dom.pathname"];
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b, c, d, e, f, g) {
        if (typeof b["location_hostname"] != "undefined") {
          d = b["location_hostname"];
          if (typeof d == "undefined") return;
          c = [
            { "www-sites.oracle.com": "true" },
            { "www-content-stage.oracle.com'": "true" },
            { "www-portal-stage.oracle.com": "true" },
            { "www-stage.oracle.com": "true" },
            { "www-qa-stage.oracle.com": "true" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              if (d.toString().indexOf(f) > -1) {
                b["sales_chat_stage"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
          if (!m) b["sales_chat_stage"] = "false";
        }
      },
      function (a, b, c, d, e, f, g) {
        if (typeof b["dom.pathname"] != "undefined") {
          d = b["dom.pathname"];
          if (typeof d == "undefined") return;
          c = [
            { "/database/data-warehouse.html": "Autonomous Database" },
            {
              "/database/autonomous-transaction-processing.html":
                "Autonomous Database",
            },
            {
              "/database/what-is-autonomous-database.html":
                "Autonomous Database",
            },
            {
              "/database/autonomous-database/think-autonomous.html":
                "Autonomous Database",
            },
            {
              "/database/autonomous-database/guaranteed.html":
                "Autonomous Database",
            },
            { "/database/technologies/mysql.html": "MySQL" },
            { "/database/autonomous-database.html": "Autonomous Database" },
            { "/autonomous-database/": "Autonomous Database" },
            {
              "/autonomous-database-on-exadata-cloud-at-customer/":
                "Autonomous Database",
            },
            { "/database/adw-cloud.html": "Autonomous Database" },
            { "/database/adw-cloud-pricing.html": "Autonomous Database" },
            { "/database/atp-cloud.html": "Autonomous Database" },
            { "/database/atp-cloud-pricing.html": "Autonomous Database" },
            {
              "/applications/agile-product-lifecycle-management/":
                "Product Lifecycle Management",
            },
            {
              "/applications/customer-experience/":
                "Customer Experience Sales & Marketing",
            },
            {
              "/applications/enterprise-resource-planning/":
                "Enterprise Resource Planning",
            },
            { "/applications/erp/": "Enterprise Resource Planning" },
            {
              "/applications/human-capital-management/":
                "Human Capital Management",
            },
            {
              "/applications/jd-edwards-enterpriseone/":
                "Enterprise Resource Planning",
            },
            {
              "/applications/performance-management/":
                "Enterprise Performance Management",
            },
            { "/performance-management/": "Enterprise Performance Management" },
            { "/applications/primavera/": "Project Portfolio Management" },
            { "/applications/rightnow/": "Customer Experience Service" },
            {
              "/applications/supply-chain-management/":
                "Supply Chain Management",
            },
            { "/applications/taleo.html": "Human Capital Management" },
            { "/autonomouscloud/": "Cloud Technologies" },
            { "/big-data/": "Big Data" },
            { "/cloud/blockchain/": "Application Development" },
            { "/cloud/": "Cloud Technologies" },
            {
              "/cx/industry/digital-experience/":
                "Communications Network & SD-WAN",
            },
            { "/cx/service/": "Customer Experience Service" },
            { "/cx/": "Customer Experience Sales & Marketing" },
            { "/database/": "Database" },
            { "/engineered-systems/": "Engineered Systems" },
            { "/enterprise-manager/": "Cloud Technologies" },
            { "/erp/": "Enterprise Resource Planning" },
            { "/human-capital-management/": "Human Capital Management" },
            {
              "/industries/communications/":
                "Enterprise Communications Solutions",
            },
            {
              "/industries/construction-engineering/":
                "Project Portfolio Management",
            },
            { "/java/": "Application Development" },
            { "/linux/": "Operating Systems and Virtualization" },
            { "/marketingcloud/": "Customer Experience Sales & Marketing" },
            {
              "/middleware/technologies/crystalball.html":
                "Construction Project Management",
            },
            { "/middleware/": "Middleware" },
            { "/servers/": "Server & Storage Systems" },
            { "/solaris/": "Operating Systems and Virtualization" },
            { "/solutions/business-analytics/": "Business Analytics" },
            { "/storage/": "Server & Storage Systems" },
            {
              "/us/products/applications/siebel/":
                "Customer Experience Sales & Marketing",
            },
            { "/virtualization/": "Operating Systems and Virtualization" },
            {
              "/applications/siebel/": "Customer Experience Sales & Marketing",
            },
            {
              "/industries/food-beverage/":
                "Hotel Restaurant and Casino Solutions",
            },
            {
              "/industries/hospitality/":
                "Hotel Restaurant and Casino Solutions",
            },
            { "/consulting/": "Accelerate On Prem to Cloud" },
            { "/application-development/": "Application Development" },
            { "/solutions/chatbots/": "Cloud Technologies" },
            { "/business-analytics/": "Business Analytics" },
            {
              "/corporate/events/live/new-autonomous-services/":
                "Cloud Technologies",
            },
            { "/asiasouth/cloudday/": "Cloud Technologies" },
            { "/integration/": "Middleware" },
            { "/scm/": "Supply Chain Management" },
            {
              "/events/virtual-summits/cloud-cx/":
                "Customer Experience Sales & Marketing",
            },
            {
              "/asiasouth/events/virtual-summits/cloud-platform/":
                "Cloud Technologies",
            },
            { "/applications/crystalball/": "Construction Project Management" },
            {
              "/industries/construction-engineering-rw/":
                "Construction Project Management",
            },
            {
              "/events/live/new-autonomous-data-warehouse-innnovations/":
                "Autonomous Database",
            },
            { "/events/live/applications/mar-2021/": "Cloud Applications" },
            { "/industries/micros/": "Hotel Restaurant and Casino Solutions" },
            {
              "/events/virtual-summits/cloud-hcm/work-made-human/":
                "Human Capital Management",
            },
            {
              "/events/virtual-summits/cloud-erp/scm-perfect-delivery/":
                "Supply Chain Management",
            },
            {
              "/events/virtual-summits/cloud-erp/epm/":
                "Enterprise Performance Management",
            },
            {
              "/events/virtual-summits/cloud-erp/":
                "Enterprise Resource Planning",
            },
            {
              "/events/virtual-summits/cloud-erp/big-moves/":
                "Enterprise Resource Planning",
            },
            { "/events/live/accelerate-cloud-strategy/": "Cloud Technologies" },
            { "/mysql/heatwave/": "Cloud Technologies" },
            { "/mysql/": "MySQL" },
            {
              "/life-sciences/":
                "Clinical Research and Pharmacovigilance Solutions",
            },
            {
              "/industries/utilities/erp/agile/":
                "Enterprise Resource Planning",
            },
            {
              "/industries/financial-services/banking/modernization/":
                "Enterprise Resource Planning",
            },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              if (d.toString().indexOf(f) > -1) {
                b["sales_chat_product_name"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
        }
      },
      function (a, b, c, d, e, f, g) {
        if (
          (typeof b["dom.pathname"] != "undefined" &&
            b["dom.pathname"].toString().toLowerCase() ==
              "/corporate/careers/application-sales/".toLowerCase()) ||
          (typeof b["dom.pathname"] != "undefined" &&
            b["dom.pathname"].toString().toLowerCase() ==
              "/corporate/careers/opportunities/software-engineers-developers/".toLowerCase()) ||
          (typeof b["dom.pathname"] != "undefined" &&
            b["dom.pathname"].toString().toLowerCase() ==
              "/lad/corporate/careers/opportunities/software-engineers-developers/".toLowerCase()) ||
          (typeof b["dom.pathname"] != "undefined" &&
            b["dom.pathname"].toString().toLowerCase() ==
              "/in/corporate/careers/diversity-inclusion/women/".toLowerCase())
        ) {
          d = b["dom.pathname"];
          if (typeof d == "undefined") return;
          c = [
            { "/corporate/careers/application-sales/": "1578048" },
            {
              "/corporate/careers/opportunities/software-engineers-developers/":
                "1578047",
            },
            {
              "/lad/corporate/careers/opportunities/software-engineers-developers/":
                "1578047",
            },
            { "/in/corporate/careers/diversity-inclusion/women/": "1578049" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              if (d == f) {
                b["medimath_pixel_id"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
          if (!m) b["medimath_pixel_id"] = "false";
        }
      },
      function (a, b, c, d, e, f, g) {
        if (
          typeof b["sales_chat_stage"] != "undefined" &&
          b["sales_chat_stage"] == "true"
        ) {
          d = b["sales_chat_product_name"];
          if (typeof d == "undefined") return;
          c = [
            { "Big Data": "18" },
            { "Business Analytics": "19" },
            { "Cloud Applications": "20" },
            { "Cloud Technologies": "21" },
            { "Customer Experience Sales & Marketing": "22" },
            { "Customer Experience Service": "23" },
            { Database: "24" },
            { "Engineered Systems": "25" },
            { "Enterprise Communications Solutions": "170" },
            { "Enterprise Performance Management": "26" },
            { "Enterprise Resource Planning": "27" },
            { "Human Capital Management": "29" },
            { Middleware: "30" },
            { "Operating Systems and Virtualization": "31" },
            { Procurement: "32" },
            { "Product Lifecycle Management": "33" },
            { "Project Portfolio Management": "36" },
            { "Server & Storage Systems": "35" },
            { "Supply Chain Management": "36" },
            { "Application Development": "143" },
            { MySQL: "224" },
            { "Autonomous Database": "225" },
            { "Financial Management": "28" },
            { "Hotel Restaurant and Casino Solutions": "256" },
            { "Accelerate On Prem to Cloud": "257" },
            { "Communications Network & SD-WAN": "170" },
            { "Construction Project Management": "34" },
            { "Clinical Research and Pharmacovigilance Solutions": "520" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              if (d == f) {
                b["sales_chat_product_id"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
          if (!m) b["sales_chat_product_id"] = "0";
        }
      },
      function (a, b, c, d, e, f, g) {
        if (
          typeof b["sales_chat_stage"] != "undefined" &&
          b["sales_chat_stage"] == "false"
        ) {
          d = b["sales_chat_product_name"];
          if (typeof d == "undefined") return;
          c = [
            { "Big Data": "18" },
            { "Business Analytics": "19" },
            { "Cloud Applications": "20" },
            { "Cloud Technologies": "21" },
            { "Customer Experience Sales & Marketing": "22" },
            { "Customer Experience Service": "23" },
            { Database: "24" },
            { "Engineered Systems": "25" },
            { "Enterprise Communications Solutions": "170" },
            { "Enterprise Performance Management": "26" },
            { "Enterprise Resource Planning": "27" },
            { "Human Capital Management": "29" },
            { Middleware: "30" },
            { "Operating Systems and Virtualization": "31" },
            { Procurement: "32" },
            { "Product Lifecycle Management": "33" },
            { "Project Portfolio Management": "34" },
            { "Server & Storage Systems": "35" },
            { "Supply Chain Management": "36" },
            { "Application Development": "143" },
            { MySQL: "224" },
            { "Autonomous Database": "225" },
            { "Financial Management": "28" },
            { "Hotel Restaurant and Casino Solutions": "256" },
            { "Accelerate On Prem to Cloud": "257" },
            { "Communications Network & SD-WAN": "170" },
            { "Construction Project Management": "34" },
            { "Clinical Research and Pharmacovigilance Solutions": "520" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              if (d == f) {
                b["sales_chat_product_id"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
          if (!m) b["sales_chat_product_id"] = "0";
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              function get_browser() {
                var ua = navigator.userAgent,
                  tem,
                  M =
                    ua.match(
                      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                    ) || [];
                if (/trident/i.test(M[1])) {
                  tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                  return { name: "IE", version: tem[1] || "" };
                }
                if (M[1] === "Chrome") {
                  tem = ua.match(/\bOPR|Edge\/(\d+)/);
                  if (tem != null) {
                    return { name: "Opera", version: tem[1] };
                  }
                }
                M = M[2]
                  ? [M[1], M[2]]
                  : [navigator.appName, navigator.appVersion, "-?"];
                if ((tem = ua.match(/version\/(\d+)/i)) != null) {
                  M.splice(1, 1, tem[1]);
                }
                return { name: M[0], version: M[1] };
              }
              var browser = get_browser();
              b.browser_name = browser.name;
              b.browser_version = browser.version;
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (typeof b["cp.eloqua"] != "undefined" && b["cp.eloqua"] != "") {
            var eloquaCookie = b["cp.eloqua"];
            eloquaCookie = eloquaCookie.split("&");
            b.global_id = eloquaCookie[0].split("=")[1];
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            if (
              window.formHtmlName ||
              document.querySelectorAll(
                "script[src*='consent.truste.com/notice']"
              ).length > 0 ||
              document.querySelectorAll(
                "script[src*='consent.trustarc.com/notice']"
              ).length > 0
            ) {
              b.trustarc_loaded = true;
            } else {
              b.trustarc_loaded = false;
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              b["is_jquery_available"] = window.jQuery ? "true" : "false";
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www.oracle.com".toLowerCase() &&
              typeof b["dom.url"] != "undefined" &&
              b["dom.url"]
                .toString()
                .toLowerCase()
                .indexOf("infinity=false".toLowerCase()) < 0) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-sites.oracle.com".toLowerCase() &&
              typeof b["dom.pathname"] != "undefined" &&
              b["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("oraclefoundation.org".toLowerCase()) < 0) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-content.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-stage.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "community.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "blogs.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "blogs-stage.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "community-stage.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www.ateam-oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "developer.oracle.com".toLowerCase()) ||
            (typeof b["dom.pathname"] != "undefined" &&
              b["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("/devo/".toLowerCase()) > -1) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "developer-stage.oracle.com".toLowerCase())
          ) {
            b["oracle_infinity_should_run"] = "true";
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "community.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "blogs.oracle.com".toLowerCase())
          ) {
            b["eloqua_should_run"] = "true";
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-stage.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-sites.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "community.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "blogs.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "community-stage.oracle.com".toLowerCase())
          ) {
            b["bluekai_should_run"] = "true";
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-sites.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-stage.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-dev1.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-qa.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-qa-stage.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-qa-dev.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-uat.oracle.com".toLowerCase()) ||
            (typeof b["dom.pathname"] != "undefined" &&
              b["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("/devo/".toLowerCase()) > -1) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"]
                .toString()
                .toLowerCase()
                .indexOf("developer-stage.oracle.com".toLowerCase()) > -1) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"]
                .toString()
                .toLowerCase()
                .indexOf("developer.oracle.com".toLowerCase()) > -1) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"]
                .toString()
                .toLowerCase()
                .indexOf("search-stage.oracle.com".toLowerCase()) > -1) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"]
                .toString()
                .toLowerCase()
                .indexOf("search.oracle.com".toLowerCase()) > -1) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"]
                .toString()
                .toLowerCase()
                .indexOf("search-dr.appoci.oracle.com".toLowerCase()) > -1)
          ) {
            b["trustarc_should_run"] = "true";
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-sites.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-sites-stage.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-stage.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-dev1.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "community.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "blogs.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "developer.oracle.com".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "developer-stage.oracle.com".toLowerCase())
          ) {
            b["uber_should_run"] = "true";
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www.oracle.com".toLowerCase() &&
              typeof b["dom.pathname"] != "undefined" &&
              b["dom.pathname"].toString().toLowerCase() ==
                "/".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www.oracle.com".toLowerCase() &&
              typeof b["dom.pathname"] != "undefined" &&
              b["dom.pathname"].toString().toLowerCase() ==
                "/corporate/accessibility/".toLowerCase()) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-sites.oracle.com".toLowerCase() &&
              typeof b["dom.pathname"] != "undefined" &&
              b["dom.pathname"]
                .toString()
                .toLowerCase()
                .indexOf("oraclefoundation.org".toLowerCase()) > -1) ||
            (typeof b["dom.url"] != "undefined" &&
              b["dom.url"].toString().indexOf("ubertag=false") > -1) ||
            (typeof b["location_hostname"] != "undefined" &&
              b["location_hostname"].toString().toLowerCase() ==
                "www-stage.oracle.com".toLowerCase() &&
              typeof b["dom.pathname"] != "undefined" &&
              b["dom.pathname"].toString().toLowerCase() == "/".toLowerCase())
          ) {
            b["uber_should_run"] = "false";
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b, c, d, e, f, g) {
        if (1) {
          d = b["dom.pathname"];
          if (typeof d == "undefined") return;
          c = [
            {
              "^/(([A-Za-z]{2})|([A-Za-z]{2}-[A-Za-z]{2}))/index.html": "TRUE",
            },
            { "^/lad/index.html": "TRUE" },
            { "^/asiasouth/index.html": "TRUE" },
            { "^/africa-fr/index.html": "TRUE" },
            { "^/africa/index.html": "TRUE" },
            { "^/middleeast/index.html": "TRUE" },
            { "corporate/contact": "TRUE" },
            { "consulting/soar.html": "TRUE" },
            { "^/us/corporate/events/soar/index.html": "TRUE" },
            { "/applications/": "TRUE" },
            { "/artificial-intelligence/": "TRUE" },
            { "/autonomouscloud/": "TRUE" },
            { "/big-data/": "TRUE" },
            { "/cloud/": "TRUE" },
            { "/content-storage-management/": "TRUE" },
            { "/corporate/pricing/": "TRUE" },
            { "/database/": "TRUE" },
            { "/engineered-systems/": "TRUE" },
            { "/enterprise-manager/": "TRUE" },
            { "/erp/": "TRUE" },
            { "/industries/communications/": "TRUE" },
            { "/industries/construction-engineering/": "TRUE" },
            { "/linux/": "TRUE" },
            { "/marketingcloud/": "TRUE" },
            { "/middleware/": "TRUE" },
            { "/midmarket/": "TRUE" },
            { "/midsize/": "TRUE" },
            { "/networking/": "TRUE" },
            { "^(/?[a-zA-Z0-9_-]*)/products/": "TRUE" },
            { "/security/": "TRUE" },
            { "/servers/": "TRUE" },
            { "/smb/": "TRUE" },
            { "/solutions/": "TRUE" },
            { "/storage/": "TRUE" },
            { "/systems/": "TRUE" },
            { "/tools/": "TRUE" },
            { "^/us/products/applications/ebusiness/": "TRUE" },
            { "^/us/products/applications/master-data-management/": "TRUE" },
            { "^/us/products/applications/siebel/": "TRUE" },
            { "/virtualization/": "TRUE" },
            { "^/(de|es|fr|it|nl|se|uk)/corporate/features/power/": "TRUE" },
            { "/it-infrastructure/": "TRUE" },
            { "^/jp/corporate/pricing.html": "TRUE" },
            { "/technetwork/": "TRUE" },
            { "^/tryit.html": "TRUE" },
            { "/area-of-interest/": "TRUE" },
            { "^/cn/videocenter/": "TRUE" },
            { "^(/?[a-zA-Z0-9_-]*)/mysql/": "TRUE" },
            { "/industries/food-beverage/": "TRUE" },
            { "/industries/hospitality/": "TRUE" },
            { "^/jp/contact-us/": "TRUE" },
            { "^/technical-resources/": "TRUE" },
            { "/internet-of-things/": "TRUE" },
            { "^/cn/netsuite/": "TRUE" },
            { "^/(middleeast-ar|sa-ar|ae-ar)/*": "TRUE" },
            { "^/cn/sun/": "TRUE" },
            { "^/sun/": "TRUE" },
            { "/application-development/": "TRUE" },
            { "/business-analytics/": "TRUE" },
            { "/corporate/events/live/new-autonomous-services/": "TRUE" },
            { "/asiasouth/cloudday/": "TRUE" },
            { "/autonomous-database/": "TRUE" },
            { "/scm/": "TRUE" },
            { "/human-capital-management/": "TRUE" },
            { "/integration/": "TRUE" },
            { "/chatbots/": "TRUE" },
            { "^/events/customer-spotlight/": "TRUE" },
            { "^/events/virtual-summits/cloud-cx/": "TRUE" },
            { "/cx/": "TRUE" },
            { "/asiasouth/events/virtual-summits/cloud-platform/": "TRUE" },
            { "/support/support-options.html": "TRUE" },
            { "/asiasouth/industries/public-sector/smart-cities/": "TRUE" },
            { "/performance-management/": "TRUE" },
            { "/industries/construction-engineering-rw/": "TRUE" },
            {
              "^/events/live/new-autonomous-data-warehouse-innnovations/":
                "TRUE",
            },
            { "/industries/micros/": "TRUE" },
            { "/events/virtual-summits/cloud-hcm/work-made-human/": "TRUE" },
            {
              "^/(asiasouth|apac|au|cn|hk|id|in|jp|kr|lk|mn|my|nz|ph|pk|sg|th|tw|vn)/events/virtual-summits/":
                "TRUE",
            },
            { "/br/events/oracle-fest/": "TRUE" },
            { "/lad/events/oracle-fest/": "TRUE" },
            { "/events/live/accelerate-cloud-strategy/": "TRUE" },
            { "/br/think-oracle/": "TRUE" },
            { "/br/product-tours/": "TRUE" },
            { "/industries/life-sciences/clinical-research/": "TRUE" },
            { "/industries/life-sciences/pharmacovigilance/": "TRUE" },
            { "^/industries/life-sciences/": "TRUE" },
            { "/product-navigator/": "TRUE" },
            { "/industries/utilities/erp/agile/": "TRUE" },
            { "/corporate/contact/help.html": "TRUE" },
            { "/customers/": "TRUE" },
            { "/br/our-customers/": "TRUE" },
            {
              "^/industries/financial-services/banking/modernization/": "TRUE",
            },
            { "^/(([A-Za-z]{2})|([A-Za-z]{2}-[A-Za-z]{2}))/$": "TRUE" },
            { "^/lad/$": "TRUE" },
            { "^/asiasouth/$": "TRUE" },
            { "^/africa-fr/$": "TRUE" },
            { "^/africa/$": "TRUE" },
            { "^/middleeast/$": "TRUE" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              g = new RegExp(f, "i");
              if (g.test(d)) {
                b["sales_chat_should_run"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
          if (!m) b["sales_chat_should_run"] = "false";
        }
      },
      function (a, b, c, d, e, f, g) {
        if (1) {
          d = b["dom.pathname"];
          if (typeof d == "undefined") return;
          c = [
            { "^/index.html": "FALSE" },
            { "^/ca-fr/index.html": "FALSE" },
            { "^/il/index.html": "FALSE" },
            { "^/sa-ar/index.html": "FALSE" },
            { "^/ae-ar/index.html": "FALSE" },
            { "^/ca-fr/": "FALSE" },
            { "^/il/": "FALSE" },
            { "^/partners/": "FALSE" },
            { "/industries/retail/": "FALSE" },
            { "^/emea/": "FALSE" },
            { "/java/": "FALSE" },
            { "/technetwork/java/": "FALSE" },
            {
              "^/industries/construction-engineering/future-of-projects/":
                "FALSE",
            },
            { "/products/financing/": "FALSE" },
            { "/applications/erp/future-ready-upgrade/": "FALSE" },
            { "^/cloud/solution-hubs/$": "FALSE" },
            { "/cloud/solution-hubs/about.html": "FALSE" },
            { "/cloud/solution-hubs/demos.html": "FALSE" },
            { "/cloud/sign-in.html": "FALSE" },
            { "/applications/customer-experience/data-cloud/": "FALSE" },
            { "/technetwork/security-advisory/": "FALSE" },
            { "/industries/hospitality/hospitality-connect/": "FALSE" },
            { "^/industries/food-beverage/food-beverage-connect/": "FALSE" },
            { "^/jp/industries/": "FALSE" },
            {
              "/applications/human-capital-management/chat-test-wo.html":
                "FALSE",
            },
            { "/data-cloud/": "FALSE" },
            {
              "/opn/secure/get-enabled/partnercasts/product-channel/applications/index.html":
                "FALSE",
            },
            { "/partnernetwork/expertise/sell/erp/": "FALSE" },
            { "/developer-live/database/": "FALSE" },
            { "/search/": "FALSE" },
            { "^/cx/advertising/": "FALSE" },
            { "^/partnernetwork/": "FALSE" },
            { "/tools/downloads/": "FALSE" },
            { "^/industries/life-sciences/customer-experience/": "FALSE" },
            { "^/industries/life-sciences/erp-scm/": "FALSE" },
            { "^/industries/life-sciences/hcm/": "FALSE" },
            { "^/industries/life-sciences/cloud/": "FALSE" },
            { "^/product-navigator/": "FALSE" },
            { "/industries/utilities/erp/$": "FALSE" },
            { "/ru/": "FALSE" },
            { "^/ca-fr/$": "FALSE" },
            { "^/il/$": "FALSE" },
            { "^/sa-ar/$": "FALSE" },
            { "^/ae-ar/$": "FALSE" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              g = new RegExp(f, "i");
              if (g.test(d)) {
                b["sales_chat_should_run"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
        }
      },
      function (a, b) {
        try {
          if (1) {
            if (typeof window.s_pageName != "undefined") {
              b.site_id = "EloquaLandingPage";
              if (typeof window.LPid != "undefined") {
                b.page_name = window.s_pageName + ":/" + window.LPid + "/";
              }
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              b["otn_software_download_should_run"] =
                document &&
                document.getElementsByClassName("otn-software").length > 0
                  ? "true"
                  : "false";
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          utag.runonce = utag.runonce || {};
          utag.runonce.ext = utag.runonce.ext || {};
          if (typeof utag.runonce.ext[322] == "undefined") {
            utag.runonce.ext[322] = 1;
            if (1) {
              try {
                if (
                  typeof b != "undefined" &&
                  typeof b["location_hostname"] != "undefined" &&
                  b["location_hostname"] == "www.oracle.com" &&
                  /\/search\//.test(utag.data["dom.pathname"])
                ) {
                  var styles =
                    ".cb19w2 cite > a[href*='video.oracle'], .cb19w2 cite>a[href*='?bcid']{display:inline-block;color:transparent;font-size:0}.cb19w2 cite a[href*='video.oracle']:before, .cb19w2 cite a[href*='?bcid']:before{content:'Play video';color:#00688C;font-size:16px}.cb19w2 cite:hover a[href*='video.oracle']:hover:before, .cb19w2 cite:hover a[href*='?bcid']:hover:before{text-decoration:underline !important}";
                  var styleSheet = document.createElement("style");
                  styleSheet.type = "text/css";
                  styleSheet.innerText = styles;
                  document.head.appendChild(styleSheet);
                  document.addEventListener(
                    "mouseover",
                    function (event) {
                      var targetElement = event.target;
                      const regex = new RegExp("videos?.oracle.com");
                      if (
                        targetElement.tagName === "A" &&
                        targetElement.hasAttribute("href") &&
                        regex.test(targetElement.getAttribute("href"))
                      ) {
                        targetElement.setAttribute(
                          "href",
                          targetElement
                            .getAttribute("href")
                            .replace(/.*\/video\/(\d+)/, "?bcid=$1")
                        );
                        targetElement.classList.add("bclink");
                      }
                    },
                    false
                  );
                  document.addEventListener(
                    "click",
                    function (event) {
                      var targetElement = event.target;
                      const regex = new RegExp("videos?.oracle.com");
                      if (
                        targetElement.tagName === "A" &&
                        targetElement.hasAttribute("href") &&
                        regex.test(targetElement.getAttribute("href"))
                      ) {
                        e.preventDefault();
                        targetElement.setAttribute(
                          "href",
                          targetElement
                            .getAttribute("href")
                            .replace(/.*\/video\/(\d+)/, "?bcid=$1")
                        );
                        targetElement.classList.add("bclink");
                        targetElement.click();
                      }
                    },
                    false
                  );
                }
              } catch (e) {
                utag.DB("Redirect video.oracle domain" + e);
              }
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              b["is_react_page"] = b["meta.release_version"] ? "true" : "false";
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              if (location.href) {
                if (
                  location.href.toLowerCase().indexOf("referreremail") != -1 ||
                  location.href.toLowerCase().indexOf("email") != -1
                ) {
                  b.page_href = removeParameter(
                    decodeURI(location.href.toLowerCase()),
                    "email"
                  );
                } else {
                  b.page_href = encodeURIComponent(location.href);
                }
              }
              function removeParameter(sURL, sPar) {
                if (typeof sPar == "undefined" || toString(sPar) == "") {
                  return sURL;
                }
                var temp = new Array();
                temp = sURL.split("&");
                var al = temp.length;
                for (i = 0; i < al; i++) {
                  if (i == 0 && temp[i].indexOf(sPar) != -1) {
                    temp[i] = sURL ? sURL.split("?")[0] : "";
                  } else {
                    if (temp[i].indexOf(sPar) != -1) {
                      temp[i] = "";
                    }
                  }
                }
                return temp.join("&").replace(/&&/gi, "&");
              }
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              var isMobile = {
                Android: function () {
                  return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function () {
                  return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function () {
                  return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function () {
                  return navigator.userAgent.match(/IEMobile/i);
                },
                any: function () {
                  return (
                    isMobile.Android() ||
                    isMobile.BlackBerry() ||
                    isMobile.iOS() ||
                    isMobile.Opera() ||
                    isMobile.Windows()
                  );
                },
              };
              if (isMobile.any()) {
                b["is_mobile"] = true;
              } else {
                b["is_mobile"] = false;
              }
            } catch (e) {
              console.log(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              var element = document.getElementsByClassName("ytembed");
              if (typeof element != "undefined" && element.length > 0) {
                b["ytembed_exists"] = true;
              } else {
                b["ytembed_exists"] = false;
              }
            } catch (e) {
              utag.DB(e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            try {
              b["chat_script_loaded"] = document.querySelector(
                'script[src*="oracle-chat.js"]'
              )
                ? true
                : false;
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
    ];
    utag.handler.cfg_extend = [
      { alr: 0, end: 0, bwq: 0, id: "340", blr: 1 },
      { alr: 0, bwq: 0, end: 0, blr: 1, id: "2" },
      { id: "4", blr: 1, alr: 0, end: 0, bwq: 0 },
      { bwq: 0, end: 0, alr: 0, blr: 1, id: "319" },
      { alr: 0, end: 0, bwq: 0, id: "101", blr: 1 },
      { alr: 0, bwq: 0, end: 0, blr: 1, id: "159" },
      { id: "6", blr: 1, alr: 0, end: 0, bwq: 0 },
      { id: "3", blr: 1, alr: 0, end: 0, bwq: 0 },
      { id: "13", blr: 1, alr: 0, end: 0, bwq: 0 },
      { alr: 0, bwq: 0, end: 0, blr: 1, id: "5" },
      { bwq: 0, end: 0, alr: 0, blr: 1, id: "20" },
      { end: 0, bwq: 0, alr: 0, id: "21", blr: 1 },
      { blr: 1, id: "23", alr: 0, bwq: 0, end: 0 },
      { alr: 0, bwq: 0, end: 0, blr: 1, id: "24" },
      { id: "29", blr: 1, alr: 0, end: 0, bwq: 0 },
      { id: "30", blr: 1, alr: 0, end: 0, bwq: 0 },
      { id: "341", blr: 1, end: 0, bwq: 0, alr: 0 },
      { end: 0, bwq: 0, alr: 0, id: "31", blr: 1 },
      { blr: 1, id: "32", bwq: 0, end: 0, alr: 0 },
      { blr: 1, id: "65", alr: 0, bwq: 0, end: 0 },
      { id: "100", blr: 1, end: 0, bwq: 0, alr: 0 },
      { alr: 0, end: 0, bwq: 0, id: "68", blr: 1 },
      { bwq: 0, end: 0, alr: 0, blr: 1, id: "321" },
      { blr: 1, id: "72", alr: 0, bwq: 0, end: 0 },
      { bwq: 0, end: 0, alr: 0, blr: 1, id: "76" },
      { blr: 1, id: "77", alr: 0, bwq: 0, end: 0 },
      { alr: 0, bwq: 0, end: 0, blr: 1, id: "78" },
      { id: "80", blr: 1, alr: 0, end: 0, bwq: 0 },
      { id: "81", blr: 1, alr: 0, end: 0, bwq: 0 },
      { alr: 0, bwq: 0, end: 0, blr: 1, id: "83" },
      { id: "84", blr: 1, end: 0, bwq: 0, alr: 0 },
      { blr: 1, id: "102", alr: 0, bwq: 0, end: 0 },
      { alr: 0, bwq: 0, end: 0, blr: 1, id: "315" },
      { id: "322", blr: 1, end: 0, bwq: 0, alr: 0 },
      { blr: 1, id: "327", bwq: 0, end: 0, alr: 0 },
      { blr: 1, id: "333", alr: 0, bwq: 0, end: 0 },
      { alr: 0, bwq: 0, end: 0, blr: 1, id: "342" },
      { id: "346", blr: 1, end: 0, bwq: 0, alr: 0 },
      { blr: 0, id: "332", bwq: 0, end: 1, alr: 0 },
    ];
    utag.loader.initcfg = function () {
      utag.loader.cfg = {
        10: {
          load: 4,
          send: utag.cond[5] && utag.cond[13],
          v: 202206022127,
          wait: 1,
          tid: 20054,
        },
        69: {
          load: utag.cond[123] && utag.cond[31] && utag.cond[14],
          send: 1,
          v: 202112201510,
          wait: 1,
          tid: 20067,
        },
        19: {
          load: utag.cond[28] && utag.cond[5] && utag.cond[13],
          send: 1,
          v: 202109301206,
          wait: 1,
          tid: 20054,
        },
        55: {
          load: utag.cond[116] && utag.cond[120] && utag.cond[115],
          send: 1,
          v: 202110121239,
          wait: 1,
          tid: 20067,
        },
        5: {
          load: utag.cond[124] && utag.cond[143] && utag.cond[6],
          send: 1,
          v: 202208262248,
          wait: 1,
          tid: 15035,
        },
        51: {
          load: utag.cond[128] && utag.cond[110],
          send: 1,
          v: 202112152122,
          wait: 1,
          tid: 20067,
        },
        4: {
          load: 4,
          send: utag.cond[11] && utag.cond[141],
          v: 202208260316,
          wait: 1,
          tid: 5001,
        },
        14: {
          load:
            utag.cond[145] && utag.cond[18] && utag.cond[26] && utag.cond[19],
          send: 1,
          v: 202209012258,
          wait: 1,
          tid: 4049,
        },
        12: {
          load: 4,
          send: utag.cond[12] && utag.cond[27] && utag.cond[142],
          v: 202208260316,
          wait: 1,
          tid: 20010,
        },
        6: {
          load: utag.cond[14] && utag.cond[2],
          send: 1,
          v: 202109090159,
          wait: 1,
          tid: 20095,
        },
        42: {
          load: utag.cond[88] && utag.cond[135],
          send: 1,
          v: 202205312201,
          wait: 1,
          tid: 20010,
        },
        8: {
          load:
            utag.cond[126] && utag.cond[15] && utag.cond[20] && utag.cond[131],
          send: 1,
          v: 202209081713,
          wait: 1,
          tid: 20067,
        },
        50: {
          load:
            utag.cond[120] && utag.cond[15] && utag.cond[20] && utag.cond[131],
          send: 1,
          v: 202209081713,
          wait: 1,
          tid: 20010,
        },
        52: {
          load: utag.cond[111] && utag.cond[137],
          send: 1,
          v: 202203292330,
          wait: 1,
          tid: 20010,
        },
        53: {
          load:
            utag.cond[30] && utag.cond[18] && utag.cond[14] && utag.cond[112],
          send: 1,
          v: 202109271948,
          wait: 1,
          tid: 13074,
        },
        54: {
          load:
            utag.cond[30] && utag.cond[18] && utag.cond[14] && utag.cond[114],
          send: 1,
          v: 202109271948,
          wait: 1,
          tid: 13051,
        },
        56: {
          load:
            utag.cond[30] && utag.cond[18] && utag.cond[14] && utag.cond[117],
          send: 1,
          v: 202109281933,
          wait: 1,
          tid: 20010,
        },
        63: {
          load:
            utag.cond[30] && utag.cond[18] && utag.cond[14] && utag.cond[118],
          send: 1,
          v: 202109281933,
          wait: 1,
          tid: 20010,
        },
        64: {
          load: utag.cond[146] && utag.cond[120],
          send: 1,
          v: 202209080621,
          wait: 1,
          tid: 20010,
        },
        65: {
          load: utag.cond[121] && utag.cond[20] && utag.cond[135],
          send: 1,
          v: 202209081713,
          wait: 1,
          tid: 20010,
        },
        72: {
          load:
            utag.cond[30] && utag.cond[18] && utag.cond[14] && utag.cond[129],
          send: 1,
          v: 202202021323,
          wait: 1,
          tid: 13051,
        },
        75: {
          load:
            utag.cond[30] && utag.cond[18] && utag.cond[14] && utag.cond[132],
          send: 1,
          v: 202202140622,
          wait: 1,
          tid: 13051,
        },
        76: {
          load: utag.cond[146] && utag.cond[133] && utag.cond[134],
          send: 1,
          v: 202209080621,
          wait: 1,
          tid: 20010,
        },
        77: {
          load:
            utag.cond[30] && utag.cond[18] && utag.cond[14] && utag.cond[136],
          send: 1,
          v: 202203210900,
          wait: 1,
          tid: 13051,
        },
        79: {
          load: utag.cond[138] && utag.cond[32] && utag.cond[139],
          send: 1,
          v: 202206171929,
          wait: 1,
          tid: 20067,
        },
        80: {
          load: utag.cond[138] && utag.cond[32] && utag.cond[139],
          send: 1,
          v: 202206171929,
          wait: 1,
          tid: 20067,
        },
      };
      utag.loader.cfgsort = [
        "10",
        "69",
        "19",
        "55",
        "5",
        "51",
        "4",
        "14",
        "12",
        "6",
        "42",
        "8",
        "50",
        "52",
        "53",
        "54",
        "56",
        "63",
        "64",
        "65",
        "72",
        "75",
        "76",
        "77",
        "79",
        "80",
      ];
    };
    utag.loader.initcfg();
  };
  if (typeof utag_cfg_ovrd != "undefined") {
    for (utag._i in utag.loader.GV(utag_cfg_ovrd))
      utag.cfg[utag._i] = utag_cfg_ovrd[utag._i];
  }
  utag.loader.PINIT = function (a, b, c) {
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }
    try {
      this.GET();
      if (utag.handler.RE("view", utag.data, "blr")) {
        utag.handler.LR(utag.data);
      }
    } catch (e) {
      utag.DB(e);
    }
    a = this.cfg;
    c = 0;
    for (b in this.GV(a)) {
      if (
        a[b].block == 1 ||
        (a[b].load > 0 && typeof a[b].src != "undefined" && a[b].src != "")
      ) {
        a[b].block = 1;
        c = 1;
        this.bq[b] = 1;
      }
    }
    if (c == 1) {
      for (b in this.GV(a)) {
        if (a[b].block) {
          a[b].id = b;
          if (a[b].load == 4) a[b].load = 1;
          a[b].cb = function () {
            var d = this.uid;
            utag.loader.cfg[d].cbf = 1;
            utag.loader.LOAD(d);
          };
          this.AS(a[b]);
        }
      }
    }
    if (c == 0) this.INIT();
  };
  utag.loader.INIT = function (a, b, c, d, e) {
    utag.DB("utag.loader.INIT");
    if (this.ol == 1) return -1;
    else this.ol = 1;
    if (utag.cfg.noview != true) utag.handler.RE("view", utag.data, "alr");
    utag.rpt.ts["i"] = new Date();
    d = this.cfgsort;
    for (a = 0; a < d.length; a++) {
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      if (b.block != 1) {
        if (
          utag.loader.bk[b.id] ||
          ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)
        ) {
          this.f[b.id] = 0;
          utag.loader.LOAD(b.id);
        } else if (b.wait == 1 && utag.loader.rf == 0) {
          utag.DB("utag.loader.INIT: waiting " + b.id);
          this.wq.push(b);
          this.f[b.id] = 2;
        } else if (b.load > 0) {
          utag.DB("utag.loader.INIT: loading " + b.id);
          this.lq.push(b);
          this.AS(b);
        }
      }
    }
    if (this.wq.length > 0)
      utag.loader.EV("", "ready", function (a) {
        if (utag.loader.rf == 0) {
          utag.DB("READY:utag.loader.wq");
          utag.loader.rf = 1;
          utag.loader.WQ();
        }
      });
    else if (this.lq.length > 0) utag.loader.rf = 1;
    else if (this.lq.length == 0) utag.loader.END();
    return 1;
  };
  utag.loader.EV("", "ready", function (a) {
    if (utag.loader.efr != 1) {
      utag.loader.efr = 1;
      try {
        try {
          if (1) {
            try {
              document.addEventListener(
                "click",
                function (event) {
                  var targetElement = event.target;
                  if (
                    (targetElement.tagName === "A" &&
                      targetElement.hasAttribute("rel") &&
                      targetElement.getAttribute("rel").indexOf("vbox") ===
                        0) ||
                    (targetElement.hasAttribute("href") &&
                      targetElement.getAttribute("href").indexOf("bcid=") !==
                        -1) ||
                    (targetElement.tagName === "BUTTON" &&
                      targetElement.classList.contains(
                        "vjs-big-play-button"
                      ) === true &&
                      targetElement.hasAttribute("type") &&
                      targetElement.getAttribute("type").indexOf("button") !==
                        -1)
                  ) {
                    setTimeout(function () {
                      var video_title = this.name;
                      if (video_title) {
                        window.utag.data["cp.utag_main_vid_title"] =
                          video_title;
                        utag.loader.SC("utag_main", {
                          vid_title: video_title + ";exp-session",
                        });
                      }
                      var user_action = utag.data["dom.url"]
                        ? utag.data["dom.url"].split("?")[0] +
                          ":event11-Video Starts"
                        : "on load:event11-Video Starts";
                      utag.link({
                        tealium_event: "video_view",
                        video_title: video_title,
                        user_action: user_action,
                      });
                    }, 2000);
                  }
                },
                false
              );
            } catch (e) {
              utag.DB(
                "Trigger video_view event - Embedded and Lightbox New" + e
              );
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
      try {
        try {
          if (1) {
            if (document) {
              var divId = "cchat-cbtn";
              document.addEventListener(
                "click",
                function (event) {
                  var targetElement = event.target;
                  if (
                    targetElement.hasAttribute("id") &&
                    targetElement.getAttribute("id") === divId
                  ) {
                    if (window.Bots && window.Bots.openChat) {
                      Bots.closeChat();
                    }
                  }
                },
                false
              );
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
      try {
        if (typeof utag.linkHandler == "undefined") {
          utag.linkHandler = function (a, b, c, d, e) {
            if (!a) a = window.event;
            if (a.target) b = a.target;
            else if (a.srcElement) b = a.srcElement;
            if (b.nodeType == 3) b = b.parentNode;
            if (typeof b == "undefined" || typeof b.tagName == "undefined")
              return;
            c = b.tagName.toLowerCase();
            if (c == "body") return;
            if (c != "a") {
              for (d = 0; d < 5; d++) {
                if (typeof b != "undefined" && b.parentNode) b = b.parentNode;
                c = b != null && b.tagName ? b.tagName.toLowerCase() : "";
                if (c == "a") break;
                else if (c == "body") return;
              }
            }
            if (c != "a") return;
            var lt = b.text ? b.text : b.innerText ? b.innerText : "";
            if (
              (lt == "" || /^\s+$/.test(lt)) &&
              typeof b.innerHTML != "undefined"
            ) {
              lt = b.innerHTML.toLowerCase();
              if (lt.indexOf("<img ") > -1) {
                d = lt.indexOf('alt="');
                if (d > -1) {
                  e = lt.indexOf('"', d + 5);
                  lt = lt.substring(d + 5, e);
                } else {
                  d = lt.indexOf('src="');
                  if (d > -1) {
                    e = lt.indexOf('"', d + 5);
                    lt = lt.substring(d + 5, e);
                  }
                }
              }
            }
            var hr = b.href,
              hrnq = b.href.split("?")[0];
            var obj = {
              link_obj: b,
              link_text: lt,
              link_url: hrnq,
              link_type: "exit link",
              event_name: "file_download",
            };
            c = [location.hostname].concat(
              "javascript:,yourwebsite.com,localhost".split(",")
            );
            for (d = 0; d < c.length; d++) {
              if (hrnq.indexOf(c[d]) > -1) {
                obj.link_type = "link";
                break;
              }
            }
            c =
              "doc,docx,eps,xls,ppt,pptx,pdf,xlsx,tab,csv,zip,txt,vsd,vxd,xml,js,css,rar,exe,wma,mov,avi,wmv,mp3,wav,m4v".split(
                ","
              );
            for (d = 0; d < c.length; d++) {
              e = new RegExp(c[d] + "$");
              if (e.test(hrnq)) {
                obj.link_type = "download link";
                break;
              }
            }
            try {
              var link = b;
              var download_array = obj.link_url.split("/");
              obj.file_download = download_array[download_array.length - 1];
              obj.tealium_event = "file_download";
              obj.user_action = utag.data["dom.url"]
                ? utag.data["dom.url"].split("?")[0] + ":event15-File Downloads"
                : "on load:event15-File Downloads";
            } catch (e) {}
            if (
              /\.(?:doc|docx|eps|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)/.test(
                obj["link_url"]
              )
            )
              utag.link(obj);
          };
          utag.loader.EV(document, "mousedown", utag.linkHandler);
        }
      } catch (e) {
        utag.DB(e);
      }
      try {
        try {
          if (1) {
            try {
              document.addEventListener(
                "click",
                function (event) {
                  var targetElement = event.target;
                  if (
                    targetElement.tagName === "A" &&
                    targetElement.parentElement &&
                    targetElement.parentElement.classList.contains("bcc_cta")
                  ) {
                    var video_name = utag.data["cp.utag_main_vid_title"];
                    var video_cta_text = targetElement.innerText;
                    var video_title;
                    if (
                      typeof video_name != "undefined" &&
                      video_name != "" &&
                      typeof video_cta_text != "undefined" &&
                      video_cta_text != ""
                    ) {
                      video_title = video_name + ":" + video_cta_text;
                    } else if (
                      typeof video_name != "undefined" &&
                      video_name != ""
                    ) {
                      video_title = video_name;
                    } else if (
                      typeof video_cta_text != "undefined" &&
                      video_cta_text != ""
                    ) {
                      video_title = video_cta_text;
                    }
                    var user_action = utag.data["dom.url"]
                      ? utag.data["dom.url"].split("?")[0] +
                        ":event18-Video: Call to Action Clicks"
                      : "on load:event18-Video: Call to Action Clicks";
                    utag.link({
                      tealium_event: "video_cta",
                      video_title: video_name,
                      video_cta_text: video_cta_text,
                      link_name: video_title,
                      user_action: user_action,
                    });
                  }
                },
                false
              );
            } catch (e) {
              utag.DB("Trigger video_cta event New" + e);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
    }
  });
  if (utag.cfg.readywait || utag.cfg.waittimer) {
    utag.loader.EV("", "ready", function (a) {
      if (utag.loader.rf == 0) {
        utag.loader.rf = 1;
        utag.cfg.readywait = 1;
        utag.DB("READY:utag.cfg.readywait");
        setTimeout(function () {
          utag.loader.PINIT();
        }, utag.cfg.waittimer || 1);
      }
    });
  } else {
    utag.loader.PINIT();
  }
}
//tealium universal tag - utag.10 ut4.0.202210061841, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;
    if (utag.ut === undefined) {
      utag.ut = {};
    }
    if (utag.ut.loader === undefined) {
      u.loader = function (o) {
        var b,
          c,
          l,
          a = document;
        if (o.type === "iframe") {
          b = a.createElement("iframe");
          o.attrs = o.attrs || {
            height: "1",
            width: "1",
            style: "display:none",
          };
          for (l in utag.loader.GV(o.attrs)) {
            b.setAttribute(l, o.attrs[l]);
          }
          b.setAttribute("src", o.src);
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
          b.src = o.src;
          return;
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
          for (l in utag.loader.GV(o.attrs)) {
            b[l] = o.attrs[l];
          }
          b.src = o.src;
        }
        if (o.id) {
          b.id = o.id;
        }
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener(
              "load",
              function () {
                o.cb();
              },
              false
            );
          } else {
            b.onreadystatechange = function () {
              if (
                this.readyState == "complete" ||
                this.readyState == "loaded"
              ) {
                this.onreadystatechange = null;
                o.cb();
              }
            };
          }
        }
        l = o.loc || "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
          utag.DB("Attach to " + l + ": " + o.src);
          if (l == "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b);
          }
        }
      };
    } else {
      u.loader = utag.ut.loader;
    }
    if (utag.ut.typeOf === undefined) {
      u.typeOf = function (e) {
        return {}.toString
          .call(e)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase();
      };
    } else {
      u.typeOf = utag.ut.typeOf;
    }
    u.ev = { view: 1 };
    u.map = {};
    u.extend = [];
    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        var c, d, e, f;
        u.data = {
          qsp_delim: "&",
          kvp_delim: "=",
          domain: "oracle.com",
          divid: "teconsent",
          behavior: "auto",
          language: "auto",
          country: "auto",
          js: "",
          notice_type: "",
          text: "true",
          gtm: "enabled",
          cdn: "enabled",
          base_url: "//consent.trustarc.com/notice?",
        };
        c = [];
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              c.push(e[f] + u.data.kvp_delim + encodeURIComponent(b[d]));
            }
          }
        }
        c.push("domain" + u.data.kvp_delim + u.data.domain);
        if (!document.getElementById(u.data.divid)) {
          utag.DB(
            u.id + ": teconsent div not available so TrustArc not deployed."
          );
        }
        c.push("c" + u.data.kvp_delim + u.data.divid);
        if (u.data.behavior !== "auto") {
          c.push("behavior" + u.data.kvp_delim + u.data.behavior);
        }
        if (u.data.language !== "auto") {
          c.push("language" + u.data.kvp_delim + u.data.language);
        }
        if (u.data.country !== "auto") {
          c.push("country" + u.data.kvp_delim + u.data.country);
        }
        if (u.data.js) {
          c.push("js" + u.data.kvp_delim + u.data.js);
        }
        if (u.data.notice_type) {
          c.push("noticeType" + u.data.kvp_delim + u.data.notice_type);
        }
        if (u.data.text === "true") {
          c.push("text" + u.data.kvp_delim + u.data.text);
        }
        if (u.data.gtm === "enabled") {
          c.push("gtm" + u.data.kvp_delim + 1);
        }
        if (u.data.cdn === "enabled") {
          c.push("cdn" + u.data.kvp_delim + 1);
        }
        u.s = document.body;
        u.scr = document.createElement("script");
        u.scr.type = "text/javascript";
        u.scr.src = u.data.base_url + c.join(u.data.qsp_delim) + "&pcookie";
        u.s.appendChild(u.scr);
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("10", "oracle.main");
} catch (error) {
  utag.DB(error);
}

//tealium universal tag - utag.4 ut4.0.202210061841, Copyright 2022 Tealium.com Inc. All Rights Reserved.
window._elqQ = window._elqQ || [];
try {
  (function (id, loader) {
    var u = { id: id };
    utag.o[loader].sender[id] = u;
    if (utag.ut === undefined) {
      utag.ut = {};
    }
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
      u.loader = function (o, a, b, c, l, m) {
        utag.DB(o);
        a = document;
        if (o.type == "iframe") {
          m = a.getElementById(o.id);
          if (m && m.tagName == "IFRAME") {
            b = m;
          } else {
            b = a.createElement("iframe");
          }
          o.attrs = o.attrs || {};
          utag.ut.merge(
            o.attrs,
            { height: "1", width: "1", style: "display:none" },
            0
          );
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
        }
        if (o.id) {
          b.id = o.id;
        }
        for (l in utag.loader.GV(o.attrs)) {
          b.setAttribute(l, o.attrs[l]);
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener(
              "load",
              function () {
                o.cb();
              },
              false
            );
          } else {
            b.onreadystatechange = function () {
              if (
                this.readyState == "complete" ||
                this.readyState == "loaded"
              ) {
                this.onreadystatechange = null;
                o.cb();
              }
            };
          }
        }
        if (o.type != "img" && !m) {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to " + l + ": " + o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b);
            }
          }
        }
      };
    } else {
      u.loader = utag.ut.loader;
    }
    if (utag.ut.typeOf === undefined) {
      u.typeOf = function (e) {
        return {}.toString
          .call(e)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase();
      };
    } else {
      u.typeOf = utag.ut.typeOf;
    }
    u.ev = { view: 1 };
    u.scriptrequested = false;
    u.map = {
      _sm_4_1: "base_url",
      eloqua_site_id: "elqSetSiteId",
      _sm_4_3: "elqDomainName",
    };
    u.extend = [
      function (a, b) {
        try {
          b["_sm_4_1"] = "//img03.en25.com/i/elqCfg.min.js";
        } catch (e) {
          utag.DB(e);
        }
        try {
          b["_sm_4_3"] = "go.oracle.com";
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b, c, d, e, f, g) {
        if (1) {
          d = b["location_hostname"];
          if (typeof d == "undefined") return;
          c = [
            { "www.oracle.com": "1973398186" },
            { "blogs.oracle.com": "1973398186" },
            { "community.oracle.com": "1973398186" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              if (d == f) {
                b["eloqua_site_id"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
        }
      },
      function (a, b) {
        try {
          if (1) {
            function addLoadEvent(func) {
              if (window.addEventListener) {
                window.addEventListener("load", func);
              } else {
                window.attachEvent("onload", func);
              }
            }
            utag.onload_flag = utag.onload_flag || {};
            if (!utag.onload_flag[id]) {
              if (document.readyState != "complete") {
                addLoadEvent(function () {
                  if (utag_data["consent_implied"]) {
                    var explicit_countries = [
                      "AT",
                      "BE",
                      "BG",
                      "HR",
                      "CY",
                      "CZ",
                      "DK",
                      "EE",
                      "FI",
                      "FR",
                      "DE",
                      "GR",
                      "HU",
                      "IE",
                      "IT",
                      "KR",
                      "LV",
                      "LT",
                      "LU",
                      "MT",
                      "NL",
                      "NO",
                      "PL",
                      "PT",
                      "RO",
                      "SK",
                      "SI",
                      "ES",
                      "SE",
                      "CH",
                      "GB",
                      "SG",
                      "BA",
                      "GI",
                      "ME",
                      "RS",
                      "CA",
                      "CO",
                    ];
                    if (
                      utag_data["visitor_geo"] &&
                      utag_data["visitor_geo"].country_code
                    ) {
                      if (
                        !explicit_countries.includes(
                          utag_data["visitor_geo"].country_code
                        )
                      ) {
                        utag.view(window.utag.data, null, [id]);
                      }
                    } else {
                      setTimeout(function () {
                        if (
                          utag_data["visitor_geo"] &&
                          utag_data["visitor_geo"].country_code
                        ) {
                          if (
                            !explicit_countries.includes(
                              utag_data["visitor_geo"].country_code
                            )
                          ) {
                            utag.view(_data, null, [_id]);
                          }
                        }
                      }, 1000);
                    }
                  } else {
                    utag.view(window.utag.data, null, [id]);
                  }
                });
                return false;
              }
              utag.onload_flag[id] = 1;
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
    ];
    u.WaitUntilCustomerGUIDIsRetrieved = function () {
      if (!!u.timerId) {
        if (u.timeout == 0) {
          return;
        }
        if (typeof this.GetElqCustomerGUID === "function") {
          document.forms[u.data.elqFormName].elements[
            u.data.elqFormGUIDElement
          ].value = GetElqCustomerGUID();
          return;
        }
        u.timeout -= 1;
      }
      u.timerId = setTimeout(u.WaitUntilCustomerGUIDIsRetrieved, 500);
      return;
    };
    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:4");
        utag.DB(b);
        var c,
          d,
          e,
          f,
          key,
          form_match = /true|on|yes/;
        u.data = {
          base_url: "//img.en25.com/i/elqCfg.min.js",
          elqSetSiteId: "",
          form_tracking: "",
          elqFormName: "",
          elqFormGUIDElement: "",
          elqDomainName: "",
          custom: {},
        };
        for (c = 0; c < u.extend.length; c++) {
          try {
            d = u.extend[c](a, b);
            if (d == false) return;
          } catch (e) {}
        }
        utag.DB("send:4:EXTENSIONS");
        utag.DB(b);
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (u.data.hasOwnProperty(e[f])) {
                u.data[e[f]] = b[d];
              } else {
                u.data.custom[e[f]] = b[d];
              }
            }
          }
        }
        utag.DB("send:4:MAPPINGS");
        utag.DB(u.data);
        if (!u.data.elqSetSiteId) {
          utag.DB(
            u.id +
              ": Tag not fired: Required attribute elqSetSiteId not populated"
          );
          return;
        }
        _elqQ.push(["elqSetSiteId", u.data.elqSetSiteId]);
        if (u.data.elqDomainName !== "") {
          _elqQ.push(["elqUseFirstPartyCookie", u.data.elqDomainName]);
        }
        _elqQ.push(["elqTrackPageView"]);
        for (key in u.data.custom) {
          if (u.data.custom.hasOwnProperty(key)) {
            _elqQ.push(key, u.data.custom[key]);
          }
        }
        if (
          u.data.form_tracking === true ||
          form_match.test(u.data.form_tracking.toLowerCase())
        ) {
          u.timeout = 5;
          u.timerId = null;
          u.WaitUntilCustomerGUIDIsRetrieved();
          _elqQ.push(["elqGetCustomerGUID"]);
        }
        if (!u.scriptrequested) {
          u.scriptrequested = true;
          u.loader({
            type: "script",
            src: u.data.base_url,
            cb: null,
            loc: "script",
            id: "utag_4",
            attrs: {},
          });
        }
        utag.DB("send:4:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("4", "oracle.main");
} catch (error) {
  utag.DB(error);
}

//tealium universal tag - utag.12 ut4.0.202210061841, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;
    if (utag === undefined) {
      utag = {};
    }
    if (utag.ut === undefined) {
      utag.ut = {};
    }
    if (utag.ut.loader === undefined) {
      u.loader = function (o) {
        var a, b, c, l;
        a = document;
        if (o.type === "iframe") {
          b = a.createElement("iframe");
          b.setAttribute("height", "1");
          b.setAttribute("width", "1");
          b.setAttribute("style", "display:none");
          b.setAttribute("src", o.src);
        } else if (o.type === "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
          b.src = o.src;
          return;
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
          b.src = o.src;
        }
        if (o.id) {
          b.id = o.id;
        }
        if (typeof o.cb === "function") {
          if (b.addEventListener) {
            b.addEventListener(
              "load",
              function () {
                o.cb();
              },
              false
            );
          } else {
            b.onreadystatechange = function () {
              if (
                this.readyState === "complete" ||
                this.readyState === "loaded"
              ) {
                this.onreadystatechange = null;
                o.cb();
              }
            };
          }
        }
        l = o.loc || "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
          utag.DB("Attach to " + l + ": " + o.src);
          if (l === "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b);
          }
        }
      };
    } else {
      u.loader = utag.ut.loader;
    }
    u.ev = { view: 1 };
    u.initialized = false;
    u.map = { bluekai_tag_id: "tag_id", maxymiser_loaded: "maxymiser_loaded" };
    u.extend = [
      function (a, b) {
        try {
          if (typeof b["is_stage"] != "undefined") {
            try {
              b["bluekai_tag_id"] = b.is_stage == "true" ? "26595" : "25867";
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            function addLoadEvent(func) {
              if (window.addEventListener) {
                window.addEventListener("load", func);
              } else {
                window.attachEvent("onload", func);
              }
            }
            utag.onload_flag = utag.onload_flag || {};
            if (!utag.onload_flag[id]) {
              if (document.readyState != "complete") {
                addLoadEvent(function () {
                  if (utag_data["consent_implied"]) {
                    var explicit_countries = [
                      "AT",
                      "BE",
                      "BG",
                      "HR",
                      "CY",
                      "CZ",
                      "DK",
                      "EE",
                      "FI",
                      "FR",
                      "DE",
                      "GR",
                      "HU",
                      "IE",
                      "IT",
                      "KR",
                      "LV",
                      "LT",
                      "LU",
                      "MT",
                      "NL",
                      "NO",
                      "PL",
                      "PT",
                      "RO",
                      "SK",
                      "SI",
                      "ES",
                      "SE",
                      "CH",
                      "GB",
                      "SG",
                      "BA",
                      "GI",
                      "ME",
                      "RS",
                      "CA",
                      "CO",
                    ];
                    if (
                      utag_data["visitor_geo"] &&
                      utag_data["visitor_geo"].country_code
                    ) {
                      if (
                        !explicit_countries.includes(
                          utag_data["visitor_geo"].country_code
                        )
                      ) {
                        utag.view(window.utag.data, null, [id]);
                      }
                    } else {
                      setTimeout(function () {
                        if (
                          utag_data["visitor_geo"] &&
                          utag_data["visitor_geo"].country_code
                        ) {
                          if (
                            !explicit_countries.includes(
                              utag_data["visitor_geo"].country_code
                            )
                          ) {
                            utag.view(_data, null, [_id]);
                          }
                        }
                      }, 1000);
                    }
                  } else {
                    utag.view(window.utag.data, null, [id]);
                  }
                });
                return false;
              }
              utag.onload_flag[id] = 1;
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
    ];
    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        var c, d, e, f, i;
        u.data = {
          tag_id: "",
          base_url: "//tags.bkrtx.com/js/bk-coretag.js",
          maxymiser_loaded: "",
        };
        for (c = 0; c < u.extend.length; c++) {
          try {
            d = u.extend[c](a, b);
            if (d == false) return;
          } catch (e) {}
        }
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        window.bluekai = {};
        window.bluekai.loaded = "NotSet";
        if (!window.dataLayerObject) {
          window.dataLayerObject = {};
        }
        window.dataLayerObject.user = { campaigns: { status: "NotSet" } };
        window.bk_async = function () {
          bkTagID = u.data.tag_id ? u.data.tag_id : "25867";
          bk_addPageCtx(
            "contTop",
            typeof contTop !== "undefined" ? contTop : ""
          );
          bk_addPageCtx(
            "contLang",
            typeof language_value !== "undefined" ? language_value : ""
          );
          bk_addPageCtx(
            "prodInt",
            typeof prodInt !== "undefined" ? prodInt : ""
          );
          bk_addPageCtx(
            "pgname",
            typeof bk_pgname !== "undefined" ? bk_pgname : ""
          );
          bk_allow_multiple_calls = true;
          BKTAG.doTag(bkTagID, 1);
          setTimeout(function () {
            (function () {
              if (
                typeof u.data.maxymiser_loaded != "undefined" &&
                u.data.maxymiser_loaded
                  .toString()
                  .toLowerCase()
                  .indexOf("true".toLowerCase()) > -1
              ) {
                callBluekaiScript();
              }
            })();
          }, 1000);
        };
        function callBluekaiScript() {
          if (window.jQuery) {
            var xhr;
            if (xhr && xhr.readyState != 4 && xhr.readyState != 0) {
              xhr.abort();
            }
            xhr = jQuery.ajax({
              url: "//tags.bluekai.com/site/46606?ret=js",
              type: "GET",
              dataType: "script",
              cache: true,
              crossDomain: true,
              timeout: 4000,
              success: function (a) {
                if (window.bk_results) {
                  window.dataLayerObject.user.campaigns.status = "loaded";
                  bkCampaigns();
                  document.cookie =
                    "ORA_WWW_ABMDATA=" +
                    JSON.stringify(window.bluekai) +
                    "; path=/";
                  maptoDataLayer();
                }
              },
              error: function (e) {
                window.bluekai.loaded = "NoResponse";
                window.dataLayerObject.user.campaigns.status = "NoResponse";
              },
            });
          } else {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "//tags.bluekai.com/site/46606?ret=js";
            s.onload = function () {
              if (window.bk_results) {
                window.dataLayerObject.user.campaigns.status = "loaded";
                bkCampaigns();
                document.cookie =
                  "ORA_WWW_ABMDATA=" +
                  JSON.stringify(window.bluekai) +
                  "; path=/";
                maptoDataLayer();
              } else {
                window.bluekai.loaded = "NoResponse";
                window.dataLayerObject.user.campaigns.status = "NoResponse";
              }
            };
            document.getElementsByTagName("script")[0].appendChild(s);
          }
        }
        function bkCampaigns() {
          window.bluekai.loaded =
            window.bk_results.campaigns.length > 0
              ? "loaded"
              : window.bluekai.loaded;
          window.bluekai.data = [];
          window.bluekai.bkId = "NoValue";
          for (var x in window.bk_results.campaigns) {
            var campaignId = window.bk_results.campaigns[x].campaign;
            if (
              campaignId == "280343" ||
              campaignId == "280341" ||
              campaignId == "280349" ||
              campaignId == "280348"
            ) {
              var data_obj = {};
              data_obj["campaignId"] = campaignId;
              data_obj["categories"] = mapCategories(
                window.bk_results.campaigns[x]
              );
              window.bluekai.data.push(data_obj);
            }
            if (
              window.bluekai.bkId == "NoValue" &&
              window.bk_results.campaigns[x].bk
            ) {
              window.bluekai.bkId = window.bk_results.campaigns[x].bk;
            }
          }
        }
        function maptoDataLayer() {
          if (
            window.bk_results &&
            window.dataLayerObject &&
            window.dataLayerObject.user.campaigns.status == "loaded"
          ) {
            if (window.bk_results.campaigns.length > 0) {
              window.dataLayerObject.user.campaigns.data =
                window.bk_results.campaigns;
            } else {
              window.dataLayerObject.user.campaigns.data = [];
            }
          }
        }
        function mapCategories(campaign) {
          var campaignSet = [];
          if (campaign.categories != null) {
            for (var j = campaign.categories.length; j--; ) {
              campaignSet.push(campaign.categories[j].categoryID);
            }
          } else {
            campaignSet = ["NoValue"];
          }
          return campaignSet;
        }
        u.loader_cb = function () {
          u.initialized = true;
        };
        if (!u.initialized) {
          u.loader({
            type: "script",
            src: u.data.base_url,
            async: "true",
            cb: u.loader_cb,
            loc: "script",
            id: "utag_12",
          });
        } else {
          u.loader_cb();
        }
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("12", "oracle.main");
} catch (error) {
  utag.DB(error);
}
(function () {
  if (typeof utag != "undefined" && !utag_condload) {
    utag.initcatch = true;
    for (var i in utag.loader.GV(utag.loader.cfg)) {
      var b = utag.loader.cfg[i];
      if (b.load != 4) {
        utag.initcatch = false;
        break;
      }
      if (b.wait == 1) {
        utag.initcatch = false;
        break;
      }
    }
    if (utag.initcatch) utag.handler.INIT();
  }
})();
