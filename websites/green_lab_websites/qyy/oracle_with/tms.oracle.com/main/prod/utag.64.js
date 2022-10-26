//tealium universal tag - utag.64 ut4.0.202208260541, Copyright 2022 Tealium.com Inc. All Rights Reserved.
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
    u.map = {};
    u.extend = [];
    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        var c, d, e, f, i;
        u.data = {};
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        (function () {
          function getUrlVars() {
            var a = [],
              b,
              c = window.location.href;
            -1 != c.indexOf("#") && (c = c.split("#")[0]);
            for (
              var d = c.slice(window.location.href.indexOf("?") + 1).split("&"),
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
          function getAllElements(selector) {
            return document.querySelectorAll(selector);
          }
          function getElement(selector) {
            return document.querySelector(selector);
          }
          document
            .querySelectorAll("a[data-cxdtrack],a[data-adbtrack]")
            .forEach(function (ele) {
              var trkurl = "";
              var siteId =
                (getElement("meta[name=siteid]") &&
                  getElement("meta[name=siteid]").getAttribute("content")) ||
                "";
              var trklocale = siteId != "us" ? "_" + siteId : "";
              var trkhref = ele.getAttribute("href");
              var trktype =
                trkhref.indexOf("go.oracle.com") != -1 ? "src1" : "source";
              var trkjoin = trkhref.indexOf("?") != -1 ? "&" : "?";
              if (
                ele.hasAttribute("data-cxdtrack") &&
                trkhref.indexOf(trktype + "=") == -1
              ) {
                trkurl =
                  trktype + "=" + ele.getAttribute("data-cxdtrack") + trklocale;
              }
              if (
                ele.hasAttribute("data-adbtrack") &&
                trkhref.indexOf("intcmp=") == -1
              ) {
                trkurl == ""
                  ? (trkurl =
                      "intcmp=" + ele.getAttribute("data-adbtrack") + trklocale)
                  : (trkurl +=
                      "&intcmp=" +
                      ele.getAttribute("data-adbtrack") +
                      trklocale);
              }
              ele.setAttribute("href", trkhref + trkjoin + trkurl);
            });
          var sourceStrTest = getUrlVars()["source"];
          var sourceStr = "";
          if (sourceStrTest != undefined) {
            sourceStr = sourceStrTest;
          }
          if (sourceStr != "") {
            document.addEventListener("mousedown", function (evt) {
              var target = evt.target;
              if (target.tagName != "A") {
                if (evt.target.parentElement.tagName == "A") {
                  target = evt.target.parentElement;
                } else if (evt.target.closest("a")) {
                  if (evt.target.closest("a").id == "u30btitle") {
                    target = evt.target.closest("a");
                  }
                }
              }
              if (
                target.tagName == "A" &&
                target.matches('a:not([href^="#"]') &&
                target.matches('a:not([href^="javascript"]')
              ) {
                var cLink = target.getAttribute("href");
                var searchSourceStr = sourceStr.split("+")[0];
                if (
                  cLink == undefined ||
                  cLink.indexOf("source=" + searchSourceStr) != -1 ||
                  cLink.indexOf("src1=" + searchSourceStr) != -1 ||
                  cLink.indexOf("sourceType=" + searchSourceStr) != -1 ||
                  cLink.indexOf("elqSignOut") != -1 ||
                  cLink.indexOf("learn.oracle.com") != -1
                ) {
                  return true;
                }
                var vars = {},
                  hash;
                var ua = cLink.split("?");
                var base_url = "";
                var nexturl_found = 0;
                var eloquaform_link = false;
                do {
                  base_url += ua.shift() + "?";
                } while (ua.length > 1);
                var qs = ua.shift();
                var type =
                  cLink.indexOf("go.oracle.com") != -1 ? "src1" : "source";
                type =
                  cLink.indexOf("myservices.us.oraclecloud.com") != -1 ||
                  cLink.indexOf("signup-stage.oraclecloud.com") != -1 ||
                  cLink.indexOf("signup.oraclecloud.com") != -1
                    ? "sourceType"
                    : type;
                qs2 = qs == undefined ? [] : qs.split("&");
                for (var i = 0; i < qs2.length; i++) {
                  hash = qs2[i].split("=");
                  vars[hash[0]] = hash[1];
                }
                vars[type] =
                  vars[type] == undefined
                    ? sourceStr
                    : sourceStr.split("+")[0].split("%2B")[0] +
                      "%2B" +
                      vars[type];
                qsSource = base_url;
                for (var key in vars) {
                  if (vars.hasOwnProperty(key)) {
                    var value = vars[key];
                    if (key != type) {
                      qsSource += key + "=" + value;
                      if (key == "nexturl") {
                        nexturl_found = 1;
                        qsSource += "?" + type + "=" + vars[type];
                      }
                      if (key == "iframe") {
                        eloquaform_link = true;
                      }
                      qsSource += "&";
                    }
                  }
                }
                if (nexturl_found == 0) {
                  qsSource += type + "=" + vars[type] + "&";
                }
                qsSource = qsSource.slice(0, -1);
                if (eloquaform_link) {
                  var url_params = "";
                  getUrlVars().forEach(function (key, value) {
                    if (value != "source") {
                      url_params +=
                        "&" +
                        value +
                        (getUrlVars()[value] ? "=" + getUrlVars()[value] : "");
                    }
                  });
                  qsSource += url_params;
                  eloquaform_link = false;
                }
                target.setAttribute("href", qsSource);
              }
            });
          }
        })();
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("64", "oracle.main");
} catch (error) {
  utag.DB(error);
}
