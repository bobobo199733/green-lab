function _typeof(a) {
  "@babel/helpers - typeof";
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (a) {
          return typeof a;
        }
      : function (a) {
          return a &&
            "function" == typeof Symbol &&
            a.constructor === Symbol &&
            a !== Symbol.prototype
            ? "symbol"
            : typeof a;
        })(a);
}
function _createForOfIteratorHelper(a, b) {
  var c =
    ("undefined" != typeof Symbol && a[Symbol.iterator]) || a["@@iterator"];
  if (!c) {
    if (
      Array.isArray(a) ||
      (c = _unsupportedIterableToArray(a)) ||
      (b && a && "number" == typeof a.length)
    ) {
      c && (a = c);
      var d = 0,
        e = function F() {};
      return {
        s: e,
        n: function n() {
          return d >= a.length ? { done: !0 } : { done: !1, value: a[d++] };
        },
        e: function e(a) {
          throw a;
        },
        f: e,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var f = !0,
    g = !1,
    h;
  return {
    s: function s() {
      c = c.call(a);
    },
    n: function n() {
      var a = c.next();
      f = a.done;
      return a;
    },
    e: function e(a) {
      g = !0;
      h = a;
    },
    f: function f() {
      try {
        f || null == c.return || c.return();
      } finally {
        if (g) throw h;
      }
    },
  };
}
function _unsupportedIterableToArray(a, b) {
  if (a) {
    if ("string" == typeof a) return _arrayLikeToArray(a, b);
    var c = Object.prototype.toString.call(a).slice(8, -1);
    "Object" === c && a.constructor && (c = a.constructor.name);
    return "Map" === c || "Set" === c
      ? Array.from(a)
      : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
      ? _arrayLikeToArray(a, b)
      : void 0;
  }
}
function _arrayLikeToArray(a, b) {
  (null == b || b > a.length) && (b = a.length);
  for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
  return d;
}
/*!
######################################################

# REDWOOD-REACT.JS

# OCOM GLOBAL ASSET RELEASE: 25.8.0

# BUILD DATE: Fri Sep 16 2022 17:59:57 GMT-0600 (Mountain Daylight Time)

# COPYRIGHT ORACLE CORP 2022 [UNLESS STATED OTHERWISE]

######################################################
*/

/*! U30 */
var u30 = document.getElementById("u30"),
  u30v4 = document.getElementsByClassName("u30v4").length > 0;
if (u30v4) {
  var u30skip2 = document.getElementById("u30skip2");
  if (u30skip2) {
    u30skip2.removeAttribute("tabindex");
    u30skip2.removeAttribute("aria-expanded");
    var u30skipLi = doc.getElementById("u30skip2c").parentElement,
      u30skipLiHtml = u30skipLi.outerHTML;
    u30skipLiParent = u30skipLi.parentElement;
    u30skipLi.remove();
    u30skipLiParent.insertAdjacentHTML("afterbegin", u30skipLiHtml);
    var u30skip2copy = u30skip2.cloneNode(!0);
    u30skip2copy.id += "content";
    document.body.insertBefore(u30skip2copy, document.body.firstElementChild);
    u30skip2.remove();
    var u30skip2c = document.getElementById("u30skip2c"),
      u30skip2cHref = u30skip2c.getAttribute("href").replace("#", ""),
      u30currentTarget = document.getElementById(u30skip2cHref);
    u30currentTarget ||
      u30.insertAdjacentHTML(
        "afterend",
        '<div id="' + u30skip2cHref + '" class="sr-only"></div>'
      );
  }
}
!(function () {
  if (u30 && !u30v4) {
    var a = function u30closeAccount() {
        I.setAttribute("aria-expanded", "false");
        I.classList.remove("active");
        J.classList.remove("active");
        K.setAttribute("aria-hidden", "true");
      },
      b = function getMegaMenuData(a) {
        qa(a).then(function (a) {
          a && c(a);
        });
      },
      c = function buildMegaMenu(b) {
        var c = r.createElement("div");
        c.id = "u30navBg";
        var d = r.createElement("div");
        d.id = "u30navBgscroll";
        var g = r.createElement("span");
        g.id = "u30pgOverlay";
        d.classList.add("cwidth");
        u30.appendChild(c);
        c.appendChild(d);
        u30.appendChild(g);
        var k = r.createElement("div");
        d.appendChild(k);
        var l = r.createElement("div");
        l.innerHTML = b;
        var m = l.querySelectorAll("[data-navcontent]"),
          o = t.getAttribute("data-closetxt");
        x.removeAttribute("aria-haspopup");
        if (!o) var o = "close";
        if (r.getElementById("u30").classList.contains("u30v0")) {
          var q = r.createElement("div");
          q.id = "u30toolsMobile";
          t.prepend(q);
          for (
            var s = r.getElementById("u30tools"), v = 0;
            v < s.children.length;
            v++
          )
            if (!["u30ham", "u30search"].includes(s.children[v].id)) {
              var y = s.children[v].cloneNode(!0);
              r.getElementById("u30toolsMobile").append(y);
            }
        }
        if (!ea) {
          u30navw1_html = u.innerHTML;
          u30navw1_new_html = '<ul class="u30navul">' + u30navw1_html + "</ul>";
          u.innerHTML = u30navw1_new_html;
        }
        m.forEach(function (a, b) {
          var c = a.dataset.navcontent,
            d = a.dataset.navtype,
            e = r.querySelector("[data-navtarget=" + c + "]");
          if (!ea && e) {
            var f = document.createElement("li");
            e.parentNode.insertBefore(f, e);
            f.appendChild(e);
          }
          var g = r.createElement("div");
          g.setAttribute("data-dropdown", c);
          g.setAttribute("class", "u30navw2");
          g.setAttribute("id", c);
          g.setAttribute("role", "region");
          e && e.after(g);
          if (d.includes("two-column-scroll") && e) {
            e.classList.add("scroll");
            g.classList.add("vert-scroll");
          }
          var h = '\n\t\t\t\t\t<button class="closenav" aria-label="'.concat(
            o,
            '">\n\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n\t\t\t\t\t\t\t<path d="M7,7 L17,17"></path>\n\t\t\t\t\t\t\t<path d="M17,7 L7,17"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</button>\n\t\t\t\t'
          );
          g.innerHTML =
            '<div class="u30navw3 ' +
            d +
            '">' +
            a.outerHTML +
            " " +
            h +
            "</div>";
        });
        setTimeout(function () {
          var b = new ResizeObserver(function (a) {
            e();
            f();
            var b = window
                .getComputedStyle(u30w1, null)
                .getPropertyValue("padding-left"),
              c = parseInt(b, 10);
          });
          fa ? b.observe(document.body) : b.observe(r.getElementById("u30"));
          r.querySelectorAll(".u30navitem").forEach(function (b) {
            b.addEventListener("click", function (b) {
              var c = b.target,
                d = c.dataset.navtarget,
                e = r.querySelector("[data-dropdown='" + d + "']"),
                f = r.getElementsByClassName("u30navw2");
              if (
                c.classList.contains("active") ||
                u30.classList.contains("navexpand")
              )
                if (
                  !c.classList.contains("active") &&
                  u30.classList.contains("navexpand")
                ) {
                  r.getElementById("u30navBg").classList.remove("scroll");
                  var g = _createForOfIteratorHelper(z),
                    h;
                  try {
                    for (g.s(); !(h = g.n()).done; ) {
                      var i = h.value;
                      i.classList.remove("active");
                      i.setAttribute("aria-expanded", "false");
                    }
                  } catch (a) {
                    g.e(a);
                  } finally {
                    g.f();
                  }
                  var k = _createForOfIteratorHelper(f),
                    l;
                  try {
                    for (k.s(); !(l = k.n()).done; ) {
                      var m = l.value;
                      m.classList.remove("active");
                    }
                  } catch (a) {
                    k.e(a);
                  } finally {
                    k.f();
                  }
                  c.classList.add("active");
                  c.setAttribute("aria-expanded", "true");
                  e && e.classList.add("active");
                  c.classList.contains("scroll")
                    ? r.getElementById("u30navBg").classList.add("scroll")
                    : r.getElementById("u30navBg").classList.remove("scroll");
                } else {
                  c.classList.remove("active");
                  c.setAttribute("aria-expanded", "false");
                  e.classList.remove("active");
                  r.getElementById("u30navBg").classList.remove("scroll");
                  if (!u30.classList.contains("u30mobile")) {
                    x.setAttribute("aria-expanded", "false");
                    t.classList.remove("active");
                    u30.classList.remove("navexpand");
                    t.classList.remove("navactive");
                    setTimeout(function () {
                      u30.classList.remove("navshow");
                    }, 200);
                  }
                }
              else {
                u30.classList.add("navshow");
                setTimeout(function () {
                  r.getElementById("u30navBg").classList.remove("scroll");
                  c.classList.add("active");
                  c.setAttribute("aria-expanded", "true");
                  e && e.classList.add("active");
                  u30.classList.add("navexpand");
                  t.classList.add("navactive");
                  t.classList.add("active");
                  x.setAttribute("aria-expanded", "true");
                  u30.classList.contains("u30mobile") || p();
                  c.classList.contains("scroll")
                    ? r.getElementById("u30navBg").classList.add("scroll")
                    : r.getElementById("u30navBg").classList.remove("scroll");
                }, 1);
              }
              j();
              N && a();
            });
          });
          r.querySelectorAll("[data-navcontent]>ul>li>button").forEach(
            function (a) {
              a.addEventListener("click", function (a) {
                var b = a.target,
                  c = a.target.nextElementSibling,
                  d = r.querySelectorAll(
                    "[data-dropdown].active [data-navcontent]>ul>li>button.active"
                  ),
                  e = r.querySelectorAll(
                    "[data-dropdown].active [data-navcontent]>ul>li :not(button).active"
                  );
                if (b && c) {
                  if (b.classList.contains("active")) {
                    if (!b.classList.contains("active")) return;
                    if (u30.classList.contains("u30mobile")) {
                      b.classList.remove("active");
                      c.classList.remove("active");
                      b.setAttribute("aria-expanded", "false");
                    }
                  } else {
                    [].forEach.call(d, function (a) {
                      a.setAttribute("aria-expanded", "false");
                      a.setAttribute("aria-selected", "false");
                      a.classList.remove("active");
                    });
                    [].forEach.call(e, function (a) {
                      a.classList.remove("active");
                    });
                    b.classList.add("active");
                    b.setAttribute("aria-expanded", "true");
                    b.setAttribute("aria-selected", "true");
                    c.classList.add("active");
                  }
                  a.preventDefault();
                }
              });
            }
          );
          r.querySelectorAll(
            "[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button"
          ).forEach(function (a) {
            a.addEventListener("click", function (a) {
              var b = a.target,
                c = a.target.nextElementSibling;
              if (b && c) {
                if (b.classList.contains("active")) {
                  if (!b.classList.contains("active")) return;
                  if (u30.classList.contains("u30mobile")) {
                    b.classList.remove("active");
                    c.classList.remove("active");
                    b.setAttribute("aria-expanded", "false");
                  }
                } else {
                  b.classList.add("active");
                  c.classList.add("active");
                  b.setAttribute("aria-expanded", "true");
                }
                a.preventDefault();
              }
            });
          });
          var c = document.querySelectorAll(
            ".vert-scroll [data-navcontent]>ul"
          );
          if (c) {
            var d = _createForOfIteratorHelper(c),
              g;
            try {
              for (d.s(); !(g = d.n()).done; ) {
                g.value.addEventListener("keydown", function (a) {
                  var b = a.key;
                  if ("ArrowDown" === b) {
                    var c = a.target.parentNode.nextElementSibling;
                    if (c) var d = c.getElementsByTagName("button")[0];
                    d && d.focus();
                  }
                  if ("ArrowUp" === b) {
                    var e = a.target.parentNode.previousElementSibling;
                    if (e) var f = e.getElementsByTagName("button")[0];
                    f && f.focus();
                  }
                });
              }
            } catch (a) {
              d.e(a);
            } finally {
              d.f();
            }
          }
          var k;
          window.addEventListener("resize", function () {
            u30.classList.add("pause");
            clearTimeout(k);
            k = setTimeout(function () {
              u30.classList.remove("pause");
            }, 400);
            h();
            u30.classList.contains("u30mobile") &&
              x.getAttribute("aria-expanded");
          });
          r.querySelectorAll(".closenav").forEach(function (a) {
            a.addEventListener("click", function (a) {
              i();
              a.preventDefault();
            });
          });
          r.querySelectorAll("#u30pgOverlay").forEach(function (a) {
            a.addEventListener("click", function (a) {
              i();
            });
          });
          n();
          r.querySelectorAll("[data-u30bgsrc]").forEach(function (a) {
            var b = a.dataset.u30bgsrc;
            a.style.backgroundImage = "url('" + b + "')";
          });
          r.querySelectorAll("[data-u30imgsrc]").forEach(function (a) {
            var b = a.dataset.u30imgsrc;
            a.src = b;
          });
          u30.classList.add("contentloaded");
          u30.classList.remove("pause");
          h();
          w.addEventListener("keyup", function (a) {
            var b = a.key;
            X = b;
            "ArrowDown" !== b && "ArrowUp" !== b && "Enter" !== b && ta();
          });
        }, 300);
      },
      d = function u30videocheck() {
        r.querySelectorAll("#u30results .bcembed").forEach(function (a) {
          window.__React__Header ? bc_loadplayer(a) : bc_loadplayer($(a));
        });
        r.querySelectorAll("#u30results .ytembed").forEach(function (a) {
          VD03.initialize();
        });
      },
      e = function u30position() {
        var a = window.innerWidth,
          b = a - r.documentElement.clientWidth,
          c = r.getElementById("u30w1"),
          d = c.getBoundingClientRect().left,
          e = c.offsetLeft,
          f = window.getComputedStyle(c, null).getPropertyValue("padding-left"),
          h = parseInt(f, 10),
          i = r.getElementById("u30logo").getBoundingClientRect().width,
          j = r.getElementById("u30").getBoundingClientRect().width;
        if (I) var k = I.getBoundingClientRect().width;
        var l = S
            ? a - v.offsetLeft - v.offsetWidth - d - d - b + 1
            : v.offsetLeft - v.scrollLeft + v.clientLeft,
          m = D.getBoundingClientRect().width,
          n = l + m - h - i - 28;
        if (N) {
          var o = O.getBoundingClientRect().width;
          if (a <= 600) {
            u30.classList.add("fullsearch");
            var n = j - o - k - 2 * h;
            S
              ? (E.style.left = -(o + k) + "px")
              : (E.style.right = -(o + k) + "px");
          } else {
            u30.classList.remove("fullsearch");
            S ? (E.style.left = "0px") : (E.style.right = "0px");
          }
          if (u30.matches(".fullsearch.searchexpand")) {
            I.tabIndex = -1;
            O.tabIndex = -1;
          } else {
            I.tabIndex = 0;
            O.tabIndex = 0;
          }
        }
        var p = E.getBoundingClientRect(),
          q = window.scrollX || r.documentElement.scrollLeft,
          s = i + 29 + h + d;
        if (fa) var s = i + 28 + h + e;
        if (S) {
          E.style.width = n + "px";
          F.style.marginRight = fa
            ? "-" + (s - 1) + "px"
            : "-" + (s - 3) + "px";
        } else {
          E.style.width = n + "px";
          F.style.marginLeft = "-" + s + "px";
        }
        F.style.width = "calc(100vw - " + b + "px)";
        F.style.maxWidth = j + "px";
        if (h > 0) {
          G.style.paddingLeft = h + "px";
          G.style.paddingRight = h + "px";
          Y.style.left = h + "px";
          Y.style.right = h + "px";
          A.style.paddingLeft = h + "px";
          A.style.paddingRight = h + "px";
        } else {
          G.style.paddingLeft = "0px";
          G.style.paddingRight = "0px";
          Y.style.left = "0px";
          Y.style.right = "0px";
          if (S) {
            A.style.paddingLeft = "0px";
            A.style.paddingRight = fa
              ? e + i + q + 28 + "px"
              : i + 26 + h + q + d + "px";
          } else {
            A.style.paddingLeft = fa
              ? e + i + q + 28 + "px"
              : p.left + q + "px";
            A.style.paddingRight = "0px";
          }
        }
        N && g();
      },
      f = function u30checkSubs() {
        if (
          u30.classList.contains("u30mobile") &&
          !t.classList.contains("defaultclosed")
        ) {
          t.classList.add("defaultclosed");
          o();
        }
        if (
          !u30.classList.contains("u30mobile") &&
          t.classList.contains("defaultclosed")
        ) {
          t.classList.remove("defaultclosed");
          p();
        }
      },
      g = function u30checkShortProf() {
        J.style.display = "block";
        var a = J.clientHeight;
        J.style.display = "";
        a + r.querySelector(".u30").offsetHeight > window.innerHeight
          ? J.classList.add("shortprof")
          : J.classList.remove("shortprof");
      },
      h = function u30checkShortNav() {
        window.innerHeight < 500
          ? u30.classList.contains("shortnav") || u30.classList.add("shortnav")
          : u30.classList.remove("shortnav");
      },
      i = function u30CloseNav(a) {
        var b = r.querySelectorAll(".u30navw2.active");
        [].forEach.call(b, function (a) {
          a.classList.remove("active");
        });
        var c = r.querySelectorAll(".u30navitem.active");
        [].forEach.call(c, function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-expanded", "false");
          void 0 === a && b.focus();
        });
        u30.classList.remove("navexpand");
        t.classList.remove("navactive");
        x.setAttribute("aria-expanded", "false");
        t.classList.remove("active");
        setTimeout(function () {
          u30.classList.remove("navshow");
        }, 200);
      },
      j = function u30CloseSearch() {
        u30.classList.remove(
          "searchexpand",
          "searchsuggest",
          "searchresults",
          "skel"
        );
        w.setAttribute("aria-activedescendant", "");
        w.setAttribute("aria-expanded", "false");
        D.setAttribute("aria-expanded", "false");
        H.innerHTML = "";
        A.innerHTML = "";
        w.value = "";
        y.classList.remove("active");
        if (u30.classList.contains("fullsearch")) {
          I.tabIndex = 0;
          N && (O.tabIndex = 0);
        }
      },
      k = function infinitySearchTracking(a, b) {
        var c = a ? a.value : "",
          d,
          e = a.closest("[data-trackas]").getAttribute("data-trackas"),
          f = a.closest("form"),
          g = {
            "wt.z_osplugin": "1",
            "wt.oss": c,
            "wt.oss_r": b,
            "wt.oss_sbl": e,
          };
        1 == window.infinityIsAutocomplete && (g["wt.oss_ac"] = 1);
        if (f) {
          var d = f.getAttribute("name")
            ? f.getAttribute("name")
            : f.getAttribute("id")
            ? f.getAttribute("id")
            : null;
          d && (g["wt.oss_sbt"] = d);
        }
        window.ORA && ORA.click({ config: {}, data: g });
      },
      l = function u30debounce(a) {
        var b = this,
          c =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 600,
          d;
        return function () {
          for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
            f[g] = arguments[g];
          clearTimeout(d);
          d = setTimeout(function () {
            a.apply(b, f);
          }, c);
        };
      },
      m = function u30autoComplete() {
        var a = w.value.length,
          b = w.value.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
          c = encodeURIComponent(w.value);
        if (ba || ca)
          if (ca)
            var d =
                "https://www.oracle.com/search/askoraclesuggest/json?Ntx=all&Ntt=" +
                c,
              f =
                "https://www.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=" +
                c +
                "*";
          else
            var d =
                "https://www-stage.oracle.com/search/askoraclesuggest/json?Ntt=" +
                c,
              f =
                "https://www-stage.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=" +
                c +
                "*";
        else
          var d = "/search/askoraclesuggest/json?Ntx=all&Ntt=" + c,
            f =
              "https://www.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=" +
              c +
              "*";
        if (a >= 1) {
          var g = !1,
            h = !1;
          Promise.all([qa(d), qa(f)])
            .then(function (c) {
              var d = [],
                e = [],
                f = "false";
              if (c[0]) {
                d[0] = JSON.parse(c[0]);
                if (c[1]) {
                  e[0] = JSON.parse(c[1]);
                  A.innerHTML = "";
                  if (d[0].contents[0].numResults > 0 && !da) {
                    d[0].contents[0].records.forEach(function (a, c) {
                      if (c <= 2) {
                        var d = a.attributes.Title,
                          e = a.attributes.aoDestinationURL,
                          f = a.attributes.aoDestinationType,
                          g = "u30-globe",
                          h = d.toString(),
                          i = h.replace(new RegExp(b, "gi"), function (a) {
                            return "<b>".concat(a, "</b>");
                          });
                        A.insertAdjacentHTML(
                          "beforeend",
                          '<li aria-selected="false" role="option" tabindex="-1"><a tabindex="-1" class="u30-globe u30suggestlnk" href="' +
                            e +
                            '" data-trackas="header:search:suggestlnk" data-lbl="keyword:' +
                            b +
                            ":suggest:" +
                            d +
                            '">' +
                            i +
                            "<cite>" +
                            e +
                            "</cite></a></li>"
                        );
                      }
                    });
                    var g = !0;
                  }
                  if (e[0].contents[0].autoSuggest[0].totalNumResults > 0) {
                    e[0].contents[0].autoSuggest[0].dimensionSearchGroups[0].dimensionSearchValues.forEach(
                      function (a, c) {
                        var d = new RegExp(b, "gi"),
                          e = a.label.replace(d, "<b>" + b + "</b>");
                        if (b != a.label) {
                          if (!V) {
                            V = a.label;
                            var f = "true";
                          }
                          A.insertAdjacentHTML(
                            "beforeend",
                            '<li aria-selected="' +
                              f +
                              '" role="option" tabindex="-1"><a tabindex="-1" class="u30complete" href="#" data-trackas="header:search" data-lbl="keyword:' +
                              b +
                              ":suggest:" +
                              a.label +
                              '">' +
                              e +
                              "</a></li>"
                          );
                        } else {
                          if (!V) {
                            V = a.label;
                            var f = "true";
                          }
                          A.insertAdjacentHTML(
                            "afterbegin",
                            '<li aria-selected="' +
                              f +
                              '" role="option" tabindex="-1"><a tabindex="-1" class="u30complete" href="#" data-trackas="header:search" data-lbl="keyword:' +
                              b +
                              ":suggest:" +
                              a.label +
                              '">' +
                              e +
                              "</a></li>"
                          );
                        }
                      }
                    );
                    var h = !0;
                  }
                  if (!W)
                    if (g || h) {
                      u30.classList.remove("searchresults");
                      u30.classList.add("searchsuggest");
                      w.setAttribute("aria-expanded", "true");
                      if (V) {
                        var i = V.toLowerCase(),
                          j = b.toLowerCase();
                        if (0 === i.indexOf(j) && "Backspace" != X) {
                          var k = V.substr(0, a),
                            l = V.substr(a),
                            m = a + l.length;
                          w.value = k + l;
                          w.focus();
                          w.setSelectionRange(a, m);
                        }
                      }
                      V = "";
                    } else
                      A.insertAdjacentHTML(
                        "beforeend",
                        '<li aria-selected="true" role="option" tabindex="-1"><a tabindex="-1" class="u30complete" href="#">' +
                          b +
                          "</a></li>"
                      );
                  var n = r.querySelectorAll("#u30autosuggest li");
                  n.forEach(function (a, b) {
                    a.setAttribute("id", "suggest-" + parseInt(b + 1));
                    a.setAttribute("aria-posinset", parseInt(b + 1));
                    U = b;
                  });
                  n.forEach(function (a, b) {
                    a.setAttribute("aria-setsize", U + 1);
                    if ("true" === a.getAttribute("aria-selected")) {
                      var c = a.getAttribute("id");
                      w.setAttribute("aria-activedescendant", c);
                    }
                  });
                }
              }
            })
            .then(function (a) {
              var b = r.getElementById("u30announce");
              if (b && U && u30.classList.contains("searchexpand")) {
                b.innerText = "";
                var c = b.getAttribute("data-alerttxt");
                alertNode = r.createTextNode(U + 1 + " " + c);
                b.appendChild(alertNode);
                b.style.visibility = "hidden";
                b.style.visibility = "visible";
              }
              r.querySelectorAll("a.u30complete").forEach(function (a) {
                a.addEventListener("click", function (b) {
                  w.value = a.innerText;
                  B.dispatchEvent(new Event("submit", { cancelable: !0 }));
                  b.preventDefault();
                  b.stopImmediatePropagation();
                });
              });
              e();
            });
        }
      },
      n = function u30setDefaults() {
        for (
          var a = r.querySelectorAll(
              "[data-dropdown] [data-navcontent]>ul>li>button"
            ),
            b = r.querySelectorAll(
              "[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button"
            ),
            c = 0;
          c < a.length;
          c++
        )
          a[c].classList.contains("active") &&
            a[c].setAttribute("data-default", "");
        for (var c = 0; c < b.length; c++)
          b[c].classList.contains("active") &&
            b[c].setAttribute("data-default", "");
      },
      o = function u30clsMobileSubnavs() {
        for (
          var a = r.querySelectorAll(
              "[data-dropdown] [data-navcontent]>ul>li>button"
            ),
            b = r.querySelectorAll(
              "[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button"
            ),
            c = 0;
          c < a.length;
          c++
        )
          if (a[c].classList.contains("active")) {
            a[c].setAttribute("aria-expanded", "false");
            a[c].setAttribute("aria-selected", "false");
            a[c].classList.remove("active");
            var d = a[c].nextElementSibling;
            d && d.classList.remove("active");
          }
        for (var c = 0; c < b.length; c++)
          if (b[c].classList.contains("active")) {
            b[c].classList.remove("active");
            b[c].setAttribute("aria-expanded", "false");
            var e = b[c].nextElementSibling;
            e && e.classList.remove("active");
          }
      },
      p = function u30openMobileSubnavs() {
        var a = r.querySelectorAll(
            "[data-dropdown] [data-navcontent]>ul>li>button.active"
          ),
          b = r.querySelectorAll(
            "[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button.active"
          );
        if (!a.length)
          for (
            var c = r.querySelectorAll(
                "[data-dropdown] [data-navcontent]>ul>li>button[data-default]"
              ),
              d = 0;
            d < c.length;
            d++
          ) {
            c[d].classList.add("active");
            c[d].setAttribute("aria-expanded", "true");
            c[d].setAttribute("aria-selected", "true");
            var e = c[d].nextElementSibling;
            e && e.classList.add("active");
          }
        if (!b.length)
          for (
            var f = r.querySelectorAll(
                "[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button[data-default]"
              ),
              d = 0;
            d < f.length;
            d++
          ) {
            f[d].classList.add("active");
            f[d].setAttribute("aria-expanded", "true");
            var g = f[d].nextElementSibling;
            g && g.classList.add("active");
          }
      },
      q = function u30buildResults(a) {
        if (!a) var a = 0;
        var b = 0,
          c = r.getElementsByName("Ntt")[0].value,
          c = encodeURIComponent(c),
          e = r.getElementsByName("Nty")[0].value,
          f = r.getElementsByName("Ntk")[0].value,
          g = r.getElementsByName("Dy")[0].value,
          h = r.getElementsByName("cty")[0].value,
          i = r.getElementsByName("lang")[0].value,
          j = r.getElementsByName("NoBstNoRec").length
            ? r.getElementsByName("NoBstNoRec")[0].value
            : "no";
        nodim = "yes" === j ? "results-intnodim" : "results-nodim";
        if (ba || ca || da)
          if (da)
            var l =
              "https://docs.oracle.com/apps/ohcsearchclient/api/v1/search/pages/?q=" +
              c +
              "&pg=" +
              a +
              "&size=10&showfirstpage=true&lang=" +
              i;
          else if (ca)
            if (h && i)
              if ("us" === h && "en" === i)
                var l =
                  "https://www.oracle.com/search/" +
                  nodim +
                  "?No=" +
                  a +
                  "&Ntt=" +
                  c +
                  "&Dy=" +
                  g +
                  "&Nty=" +
                  e +
                  "&Ntk=" +
                  f +
                  "&NoBstNoRec=" +
                  j +
                  "&format=json";
              else
                var l =
                  "https://www.oracle.com/search/" +
                  nodim +
                  "?No=" +
                  a +
                  "&Ntt=" +
                  c +
                  "&Dy=" +
                  g +
                  "&Nty=" +
                  e +
                  "&Ntk=" +
                  f +
                  "&NoBstNoRec=" +
                  j +
                  "&cty=" +
                  h +
                  "&lang=" +
                  i +
                  "&format=json";
            else
              var l =
                "https://www.oracle.com/search/" +
                nodim +
                "?No=" +
                a +
                "&Ntt=" +
                c +
                "&Dy=" +
                g +
                "&Nty=" +
                e +
                "&Ntk=" +
                f +
                "&NoBstNoRec=" +
                j +
                "&format=json";
          else if (h && i)
            if ("us" === h && "en" === i)
              var l =
                "https://www-stage.oracle.com/search/" +
                nodim +
                "?No=" +
                a +
                "&Ntt=" +
                c +
                "&Dy=" +
                g +
                "&Nty=" +
                e +
                "&Ntk=" +
                f +
                "&NoBstNoRec=" +
                j +
                "&format=json";
            else
              var l =
                "https://www-stage.oracle.com/search/" +
                nodim +
                "?No=" +
                a +
                "&Ntt=" +
                c +
                "&Dy=" +
                g +
                "&Nty=" +
                e +
                "&Ntk=" +
                f +
                "&NoBstNoRec=" +
                j +
                "&cty=" +
                h +
                "&lang=" +
                i +
                "&format=json";
          else
            var l =
              "https://www-stage.oracle.com/search/" +
              nodim +
              "?No=" +
              a +
              "&Ntt=" +
              c +
              "&Dy=" +
              g +
              "&Nty=" +
              e +
              "&Ntk=" +
              f +
              "&NoBstNoRec=" +
              j +
              "&format=json";
        else if (h && i)
          if ("us" === h && "en" === i)
            var l =
              "/search/" +
              nodim +
              "?No=" +
              a +
              "&Ntt=" +
              c +
              "&Dy=" +
              g +
              "&Nty=" +
              e +
              "&Ntk=" +
              f +
              "&NoBstNoRec=" +
              j +
              "&format=json";
          else
            var l =
              "/search/" +
              nodim +
              "?No=" +
              a +
              "&Ntt=" +
              c +
              "&Dy=" +
              g +
              "&Nty=" +
              e +
              "&Ntk=" +
              f +
              "&NoBstNoRec=" +
              j +
              "&cty=" +
              h +
              "&lang=" +
              i +
              "&format=json";
        else
          var l =
            "/search/" +
            nodim +
            "?No=" +
            a +
            "&Ntt=" +
            c +
            "&Dy=" +
            g +
            "&Nty=" +
            e +
            "&Ntk=" +
            f +
            "&NoBstNoRec=" +
            j +
            "&format=json";
        var m = 0,
          n = "",
          o = !1,
          p = !1,
          q = !1;
        qa(l)
          .then(function (c) {
            if (c) {
              c = JSON.parse(c);
              return new Promise(function (e, f) {
                if (da) for (var g = 0; g < c.hits.length; g++) var h = c.hits;
                else
                  for (var g = 0; g < c.contents.length; g++) {
                    if ("ResultsList" === c.contents[g]["@type"] && !o) {
                      o = !0;
                      var h = c.contents[g].records;
                    }
                    if ("TopHeaderContent" === c.contents[g]["@type"] && !p) {
                      p = !0;
                      var i = c.contents[g].url;
                    }
                    if (!o && !p) {
                      if (
                        "ResultsList" ===
                          c.contents[0].mainContent[0].contents[0]["@type"] &&
                        !o
                      ) {
                        o = !0;
                        var h =
                          c.contents[0].mainContent[0].contents[0].records;
                      }
                      if (
                        c.contents[0].mainContentTop[1].contents.length > 0 &&
                        "TopHeaderContent" ===
                          c.contents[0].mainContentTop[1].contents[0][
                            "@type"
                          ] &&
                        !p
                      ) {
                        p = !0;
                        var i = c.contents[0].mainContentTop[1].contents[0].url;
                      }
                    }
                  }
                var j = "",
                  m = "",
                  n = "",
                  t = !1,
                  u = !1;
                window.ORA &&
                  a < 1 &&
                  void 0 !== _typeof(k) &&
                  k(r.getElementById("u30input"), h.length);
                if (h.length > 0) {
                  for (var v = 0; v < h.length; v++) {
                    if (da) {
                      var x = !1,
                        y = a + v,
                        z = h[v]._source.asset_title,
                        A = h[v]._source.basepath,
                        B = !1,
                        C = {};
                      C.attributes = {};
                      C.attributes.Title = h[v]._source.title;
                      h[v].highlight.description &&
                      h[v].highlight.description.length > 0
                        ? (C.attributes.Description =
                            h[v].highlight.description.trim())
                        : (C.attributes.Description =
                            h[v].highlight.body.trim());
                      var D = C.attributes.Description;
                      C.attributes.DisplayURL = h[v]._source.url;
                      C.attributes.SiteLink = [];
                      C.attributes.SiteLink[0] = "";
                      var E = !1,
                        G =
                          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                        I = A[0].match(G);
                      if (I && 11 == I[7].length) {
                        var J = I[7];
                        E = !0;
                      }
                      if (
                        h[v].inner_hits &&
                        h[v].inner_hits.same_basepath_hits &&
                        h[v].inner_hits.same_basepath_hits.hits.length > 0
                      ) {
                        if (h[v]._source.url != h[v]._source.basepath) {
                          var K = 2;
                          C.attributes.SiteLink[0] +=
                            "siteLinkTitles1=" +
                            C.attributes.Title.replace("~", "&#126;") +
                            "~siteLinkDescriptions1=" +
                            C.attributes.Description.replace("~", "&#126;") +
                            "~siteLinkUrls1=" +
                            h[v]._source.url.replace("~", "&#126;");
                          C.attributes.Description = "";
                          C.attributes.DisplayURL = h[v]._source.basepath;
                        } else var K = 1;
                        C.attributes.Title = h[v]._source.asset_title;
                        for (
                          var L = 0;
                          L < h[v].inner_hits.same_basepath_hits.hits.length &&
                          L < 3;
                          L++
                        ) {
                          var M = h[v].inner_hits.same_basepath_hits.hits[L],
                            N =
                              "siteLinkTitles" +
                              (L + K) +
                              "=" +
                              M._source.title,
                            O = "siteLinkDescriptions" + (L + K) + "=";
                          M.highlight.description &&
                          M.highlight.description.length > 0
                            ? (O += M.highlight.description.trim())
                            : (O += M.highlight.body.trim());
                          var P =
                            "siteLinkUrls" + (L + K) + "=" + M._source.url;
                          C.attributes.SiteLink[0].length > 0 &&
                            (C.attributes.SiteLink[0] += "~");
                          C.attributes.SiteLink[0] +=
                            N.replace("~", "&#126;") +
                            "~" +
                            O.replace("~", "&#126;") +
                            "~" +
                            P.replace("~", "&#126;");
                          var Q = C.attributes.SiteLink,
                            B = !0;
                        }
                      }
                    } else {
                      var x = !1,
                        y = a + v,
                        z = h[v].attributes.Title,
                        D = h[v].attributes.Description,
                        A = h[v].attributes.DisplayURL,
                        Q = h[v].attributes.SiteLink,
                        E = !1,
                        G =
                          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                        I = A[0].match(G);
                      if (I && 11 == I[7].length) {
                        var J = I[7];
                        E = !0;
                      }
                    }
                    if ((void 0 !== Q && !t && a <= 0 && 0 == v) || B) {
                      var t = !0,
                        x = !0;
                      if (!B) var z = h[v].attributes.Title;
                      B = !1;
                      n +=
                        '<div class="u30sitelinkw1" data-lbl="sitelinks-' +
                        z +
                        '">';
                      n += '<div class="u30sitelinks u30result u30sitelinksp">';
                      n += '<a class="u30head" href="' + A + '">' + z + "</a>";
                      n +=
                        '<cite><a tabindex="-1" href="' +
                        A +
                        '">' +
                        A +
                        "</a></cite>";
                      void 0 !== D &&
                        (n +=
                          '<p data-lbl="sitelinks:' + z + '">' + D + "</p>");
                      n += "</div>";
                      for (var R = 0; R < Q.length; R++) {
                        for (
                          var S = Q[R].split("~"),
                            U = [0],
                            V = [0],
                            W = [0],
                            X = 0;
                          X < S.length;
                          X++
                        )
                          for (
                            var Y = parseInt(S.length / 3),
                              Z = S[X].split("=")[0],
                              _ = S[X].substring(S[X].indexOf("=") + 1),
                              aa = 0;
                            aa <= Y;

                          ) {
                            var ba = "siteLinkTitles" + aa,
                              ca = "siteLinkDescriptions" + aa,
                              ea = "siteLinkUrls" + aa;
                            Z === ba && (U[aa - 1] = _);
                            Z === ca && (V[aa - 1] = _);
                            Z === ea && (W[aa - 1] = _);
                            aa++;
                          }
                        if (U.length === Y && V.length === Y && W.length === Y)
                          for (var fa = 0; fa < Y + 1; ) {
                            if (V[fa] && U[fa] && W[fa]) {
                              var ga = W[fa],
                                ha = V[fa],
                                ia = U[fa];
                              if (ga && ha && ia) {
                                n +=
                                  '<div class="u30sitelinks u30result u30sitelinksc">';
                                n += '<div class="u30rw1">';
                                n += '<div class="u30rw2">';
                                n +=
                                  '<a class="u30head" href="' +
                                  ga +
                                  '" data-lbl="sitelinks:' +
                                  ia +
                                  '">' +
                                  ia +
                                  "</a>";
                                n +=
                                  '<p data-lbl="sitelinks:' +
                                  ia +
                                  '">' +
                                  ha +
                                  "</p>";
                                n += "</div>";
                                n += "</div>";
                                n += "</div>";
                              }
                            }
                            fa++;
                          }
                        R++;
                      }
                      n += "</div>";
                      if (!da) var j = n;
                    }
                    if (void 0 !== i && a <= 0 && !q) {
                      q = !0;
                      var ja = i.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
                      m += ja;
                    }
                    if (void 0 != z && void 0 != A && !x) {
                      if (!da)
                        if (null == h[v].attributes.SourceTag) var ka = !1;
                        else {
                          var ka = !0,
                            la =
                              h[
                                v
                              ].attributes.SourceTag.toString().toLowerCase();
                          if ("video" === la) {
                            u = !0;
                            var ma = h[v].attributes.Id[0];
                          } else u = !1;
                        }
                      if (E) {
                        var ma = J;
                        ma && (u = !0);
                      }
                      n += u
                        ? '<div class="u30result u30video" data-lbl="search-row:' +
                          y +
                          '">'
                        : '<div class="u30result" data-lbl="search-row:' +
                          y +
                          '">';
                      n += '<div class="u30rw1">';
                      n += '<div class="u30rw2">';
                      n += '<div class="u30rw3">';
                      n += u
                        ? E
                          ? '<a class="u30head" rel="vbox" role="button" href="?ytid=' +
                            ma +
                            '">' +
                            z +
                            "</a>"
                          : '<a class="u30head" rel="vbox" role="button" href="?bcid=' +
                            ma +
                            '">' +
                            z +
                            "</a>"
                        : '<a class="u30head" href="' + A + '">' + z + "</a>";
                      ka
                        ? u ||
                          (n +=
                            '<cite><div class="u30type"><span>' +
                            h[v].attributes.SourceTag +
                            '</span><a tabindex="-1" href="' +
                            A +
                            '">' +
                            A +
                            "</a></div></cite>")
                        : u ||
                          (n +=
                            '<cite><a tabindex="-1" href="' +
                            A +
                            '">' +
                            A +
                            "</a></cite>");
                      void 0 !== D && (n += "<p>" + D + "</p>");
                      n += "</div>";
                      u &&
                        !E &&
                        (n +=
                          '<div class="bcembed bcthumbnail clickvideo" data-bcid="' +
                          ma +
                          '"></div>');
                      u &&
                        E &&
                        (n +=
                          '<div class="u30ytembed"><div class="ytembed ytvideo ytthumbnail" data-ytid="' +
                          ma +
                          '"></div></div>');
                      n += "</div>";
                      n += "</div>";
                      n += "</div>";
                      var u = !1,
                        ka = !1,
                        ma = "";
                      b++;
                    }
                  }
                  setTimeout(function () {
                    0 === T && (H.innerHTML = "");
                    F.classList.remove("loading");
                    H.insertAdjacentHTML("beforeend", j + m + n);
                    d();
                    if (a <= 0)
                      try {
                        s.prop3 = s.pageName + ":Search>" + w.value;
                        s.prop4 = "Search>" + w.value;
                        s.prop6 = "0";
                        s.prop8 = s.pageName;
                        s.eVar26 = "search:askoracle";
                        s.prop26 = s.eVar26;
                        s.channel = "askoraclesearch";
                        s.eVar52 = l;
                        s.pageName =
                          s_account[1] +
                          ":" +
                          s_account[2] +
                          ":askoraclesearch";
                        s_Ping(!0);
                        s.pageName = s.prop8;
                      } catch (a) {}
                    w.selectionEnd = w.selectionStart;
                    w.blur();
                  }, 50);
                  e(c);
                } else if (a <= 0) {
                  H.innerHTML = "";
                  F.classList.remove("loading");
                  var na = !0;
                  u30.classList.remove("skel");
                  u30.classList.remove("searchsuggest");
                  w.setAttribute("aria-expanded", "false");
                  u30.classList.add("searchresults");
                  var oa = r.getElementById("u30noresults"),
                    pa = oa.innerHTML;
                  H.insertAdjacentHTML("beforeend", pa);
                } else {
                  u30.classList.remove("skel");
                  F.classList.remove("loading");
                }
              });
            }
          })
          .then(function (a) {
            if (a) {
              var b = !0;
              u30.classList.remove("skel");
              u30.classList.remove("searchsuggest");
              w.setAttribute("aria-expanded", "false");
              u30.classList.add("searchresults");
              setTimeout(function () {
                var a = r.querySelectorAll("#u30resultsw1 .u30result"),
                  c = a[a.length - 1],
                  d = c.querySelectorAll("a"),
                  e = d[0];
                function _handler(a) {
                  ("Shift" === a.key && "Tab" === a.key) ||
                    ("Tab" === a.key &&
                      F.classList.contains("loading") &&
                      a.preventDefault());
                }
                e && e.addEventListener("keydown", _handler);
                0 === T && r.getElementById("u30closeresults").focus();
                G.addEventListener(
                  "scroll",
                  function () {
                    var a = G.pageYOffset || G.scrollTop;
                    if (G.scrollHeight - G.offsetHeight - 100 <= a && b) {
                      T >= 0 && (T += 10);
                      F.classList.add("loading");
                      u30buildResults(T);
                      b = !1;
                    }
                  },
                  !1
                );
              }, 200);
            }
          });
      };
    !(function () {
      window.onpageshow = function (a) {
        if (a.persisted) {
          j();
          i();
        }
      };
    })();
    u30.classList.add("ws-sticky");
    var r = document,
      t = r.getElementById("u30nav"),
      u = r.getElementById("u30navw1"),
      v = r.getElementById("u30search"),
      w = r.getElementById("u30input"),
      x = r.getElementById("u30ham"),
      y = r.getElementById("u30clear"),
      z = r.getElementsByClassName("u30navitem"),
      A = r.getElementById("u30autosuggest"),
      B = r.getElementById("u30searchForm"),
      C = r.getElementById("u30closesearch"),
      D = r.getElementById("u30searchBtn"),
      E = r.getElementById("u30searchw1"),
      F = r.getElementById("u30searchw3"),
      G = r.getElementById("u30results"),
      H = r.getElementById("u30resultsw1"),
      I = r.getElementById("u30-flyout"),
      J = r.getElementById("u30-profilew1"),
      K = r.getElementById("u30actbck"),
      L = r.getElementById("u30btitle"),
      M = r.getElementById("w10"),
      N = r.getElementsByClassName("u30v3").length > 0;
    if (N) var O = r.querySelector(".u30-contact a");
    var P = !!x.href && x.href,
      Q = window.location.href,
      R = encodeURIComponent(
        window.location.href.replace(/</, "&lt;").replace(/>/, "&gt;")
      ),
      S = !!u30.closest(".rtl"),
      T = 0,
      U = "",
      V,
      W = !1,
      X;
    u30.setAttribute("role", "banner");
    G.insertAdjacentHTML(
      "beforeend",
      '<ul id="u30skel"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>'
    );
    var Y = r.getElementById("u30skel");
    if (USER.guid && r.getElementsByClassName("u30l-in").length > 0) {
      var Z = r.getElementsByClassName("u30l-in")[0];
      USER.firstname &&
      "NOT_FOUND" != USER.firstname &&
      USER.lastname &&
      "NOT_FOUND" != USER.lastname
        ? Z.insertAdjacentHTML(
            "afterbegin",
            '<li><a href="https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl=' +
              R +
              '" data-lbl="profile:user-account">' +
              USER.firstname +
              " " +
              USER.lastname +
              "</a></li>"
          )
        : USER.firstname &&
          "NOT_FOUND" != USER.firstname &&
          Z.insertAdjacentHTML(
            "afterbegin",
            '<li><a href="https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl=' +
              R +
              '" data-lbl="profile:user-account">' +
              USER.firstname +
              "</a></li>"
          );
      J.classList.add("loggedin");
    }
    if (J && J.querySelectorAll('a[href$="signon?nexturl="]')[0]) {
      var _ = J.querySelectorAll('a[href$="signon?nexturl="]')[0];
      _.href = _.href + R;
    }
    L &&
      "home" === L.getAttribute("aria-label").toLowerCase() &&
      L.setAttribute("aria-label", "Oracle Home");
    var aa = "",
      ba =
        Q.indexOf("www-stage") > -1 ||
        Q.indexOf("www-portal-stage") > -1 ||
        Q.indexOf("www.stage") > -1 ||
        Q.indexOf("www-sites") > -1,
      ca = Q.indexOf("developer.oracle") > -1,
      da = r.getElementsByClassName("u30dev").length > 0,
      ea = r.getElementsByClassName("u30navul").length > 0,
      fa = r.getElementsByClassName("f11v6").length > 0,
      ga = r.getElementById("u30skip2");
    if (ga) {
      ga.removeAttribute("tabindex");
      ga.removeAttribute("aria-expanded");
      var ha = r.getElementById("u30skip2c").parentElement,
        ia = ha.outerHTML;
      u30skipLiParent = ha.parentElement;
      ha.remove();
      u30skipLiParent.insertAdjacentHTML("afterbegin", ia);
      var ja = ga.cloneNode(!0);
      ja.id += "content";
      document.body.insertBefore(ja, document.body.firstElementChild);
      ga.remove();
      var ka = document.getElementById("u30skip2c"),
        la = ka.getAttribute("href").replace("#", ""),
        ma = document.getElementById(la),
        na = document.querySelectorAll(".ct12")[0],
        oa = document.querySelectorAll(".u03")[0],
        pa = '<div id="' + la + '" class="sr-only"></div>';
      ma ||
        (na && !oa
          ? na.insertAdjacentHTML("afterend", pa)
          : !na && oa
          ? oa.insertAdjacentHTML("afterend", pa)
          : u30.insertAdjacentHTML("afterend", pa));
    }
    void 0 !== r.getElementsByClassName("ct12")[0] &&
      u30.classList.add("u30nonstick");
    u30.classList.add("rw-sticky");
    u30.addEventListener("focusout", function (a) {
      !u30.contains(a.relatedTarget) &&
        u30.classList.contains("navexpand") &&
        null !== a.relatedTarget &&
        i(!1);
      u30.contains(a.relatedTarget) ||
        !u30.classList.contains("searchexpand") ||
        null === a.relatedTarget ||
        M.contains(a.relatedTarget) ||
        j();
    });
    t.addEventListener("focusout", function (a) {
      !t.contains(a.relatedTarget) &&
        u30.classList.contains("u30mobile") &&
        x.focus();
    });
    var qa = function u30fetchData(a) {
      window.__React__Header && (a = window.reactHeaderHandler(a));
      return new Promise(function (b, c) {
        var d = new XMLHttpRequest();
        d.onload = function () {
          d.status >= 200 && d.status < 300
            ? b(d.response)
            : c("something went wrong");
        };
        d.open("GET", a);
        d.send();
      });
    };
    P.indexOf("-new") > -1 && (P = P.replace("-new", "-v2"));
    P && b(P);
    !(function () {
      function clicked(b) {
        j();
        N && a();
        if (u30.classList.contains("navexpand")) {
          u30.classList.remove("navexpand");
          t.classList.remove("active");
          x.setAttribute("aria-expanded", "false");
          setTimeout(function () {
            u30.classList.remove("navshow");
            t.classList.remove("navactive");
            r.querySelectorAll(".u30navitem").forEach(function (a) {
              var b = _createForOfIteratorHelper(z),
                c;
              try {
                for (b.s(); !(c = b.n()).done; ) {
                  var d = c.value;
                  d.classList.remove("active");
                  d.setAttribute("aria-expanded", "false");
                }
              } catch (a) {
                b.e(a);
              } finally {
                b.f();
              }
              var e = r.querySelectorAll(".u30navw2.active"),
                f = _createForOfIteratorHelper(e),
                g;
              try {
                for (f.s(); !(g = f.n()).done; ) {
                  g.value.classList.remove("active");
                }
              } catch (a) {
                f.e(a);
              } finally {
                f.f();
              }
            });
            o();
          }, 201);
        } else {
          u30.classList.add("navshow", "navexpand");
          t.classList.add("navactive");
          x.setAttribute("aria-expanded", "true");
          setTimeout(function () {
            t.classList.add("active");
          }, 201);
          setTimeout(function () {
            r.querySelectorAll(".u30navitem")[0].focus();
          }, 401);
        }
        b.preventDefault();
        b.stopPropagation();
      }
      x && x.addEventListener("click", clicked, !1);
    })();
    !(function () {
      function clicked(b) {
        var c = this;
        c.setAttribute(
          "aria-expanded",
          "false" === c.getAttribute("aria-expanded")
        );
        if ("false" === c.getAttribute("aria-expanded")) {
          u30.classList.remove("searchexpand");
          e();
        } else {
          i();
          N && a();
          u30.classList.add("searchexpand");
          e();
          setTimeout(function () {
            w.focus();
          }, 1e3);
        }
        b.preventDefault();
      }
      D && D.addEventListener("click", clicked, !1);
    })();
    C.addEventListener(
      "click",
      function (a) {
        D.setAttribute(
          "aria-expanded",
          "false" === D.getAttribute("aria-expanded")
        );
        "false" === D.getAttribute("aria-expanded")
          ? j()
          : u30.classList.add("searchexpand");
        setTimeout(function () {
          D.focus();
        }, 100);
        a.preventDefault();
        a.stopPropagation();
      },
      !1
    );
    if (N) {
      var ra = "acctBtnLabel",
        sa = document.getElementsByClassName("acttxt")[0];
      I.setAttribute("aria-labelledby", ra);
      sa.id = ra;
      I.addEventListener(
        "click",
        function (b) {
          if ("false" === I.getAttribute("aria-expanded")) {
            j();
            i();
            I.setAttribute("aria-expanded", "true");
            I.classList.add("active");
            J.classList.add("active");
            K.setAttribute("aria-hidden", "false");
            g();
          } else a();
        },
        !1
      );
      K.addEventListener(
        "click",
        function (b) {
          a();
          I.focus();
        },
        !1
      );
    }
    r.getElementById("u30closeresults").addEventListener(
      "click",
      function (a) {
        j();
        D.setAttribute("aria-expanded", "false");
        a.preventDefault();
        a.stopPropagation();
        setTimeout(function () {
          D.focus();
        }, 100);
      },
      !1
    );
    B.addEventListener(
      "submit",
      function (a) {
        T = 0;
        u30.classList.remove("searchsuggest");
        u30.classList.add("skel");
        w.setAttribute("aria-expanded", "false");
        !a.originalEvent ||
        $("#u30autosuggest li[aria-selected='true']").index() > 0
          ? (window.infinityIsAutocomplete = !0)
          : (window.infinityIsAutocomplete = !1);
        H.innerHTML = "";
        W = !0;
        setTimeout(function () {
          W = !1;
        }, 2e3);
        q(0);
        a.preventDefault();
      },
      !1
    );
    y.addEventListener(
      "click",
      function (a) {
        w.value = "";
        w.focus();
        w.setAttribute("placeholder", "");
        y.classList.remove("active");
        u30.classList.remove("searchsuggest", "searchresults");
        w.setAttribute("aria-expanded", "false");
        H.innerHTML = "";
        a.preventDefault();
      },
      !1
    );
    var ta = l(function () {
      return m();
    });
    w.addEventListener("input", function (a) {
      this.value.length > 0
        ? y.classList.add("active")
        : y.classList.remove("active");
    });
    w.addEventListener("keydown", function (a) {
      var b = a.key,
        c = r.querySelector("#u30autosuggest [aria-selected=true]");
      if ("Enter" === b && c) {
        H.innerHTML = "";
        u30suggestLink = c.querySelectorAll(".u30suggestlnk");
        if (u30suggestLink.length > 0 && u30suggestLink[0].href.length > 0) {
          a.preventDefault();
          window.location = u30suggestLink[0].href;
        }
      }
      if ("ArrowDown" === b || "ArrowUp" === b) {
        a.preventDefault();
        var d;
        if (c) {
          "ArrowDown" === b && (d = c.nextElementSibling);
          "ArrowUp" === b && (d = c.previousElementSibling);
          if (d) {
            c.setAttribute("aria-selected", "false");
            d.setAttribute("aria-selected", "true");
            w.setAttribute("aria-activedescendant", d.id);
            var e = d.querySelectorAll(".u30complete");
            e.length > 0 &&
              e[0].innerText.length > 0 &&
              (w.value = e[0].innerText);
          } else {
            c.setAttribute("aria-selected", "false");
            var c = A.firstChild.setAttribute("aria-selected", "true");
          }
        } else var c = A.firstChild.setAttribute("aria-selected", "true");
      }
    });
    window.addEventListener("keydown", function (b) {
      b = b || window.event;
      if ("Escape" === b.key) {
        u30.classList.contains("searchexpand") &&
          setTimeout(function () {
            u30searchBtn.focus();
          }, 200);
        j();
        i();
        if (N && I.classList.contains("active")) {
          I.focus();
          a();
        }
      }
    });
  }
})();
/*! ORACLE - PROFILE V2 */
var USER = new getUserInfo();
function existsUCMCookie(a) {
  return (
    "ORA_UCM_INFO" == a &&
    null != ORA_UCM_INFO.version &&
    null != ORA_UCM_INFO.guid &&
    null != ORA_UCM_INFO.username
  );
}
function isUCMRegistered() {
  if (1 == existsUCMCookie("ORA_UCM_INFO")) {
    orainfo_exists = !0;
    otnnm_exists = !0;
    return !0;
  }
  return !1;
}
function isUCMAnonymous() {
  return (
    null != ORA_UCM_INFO.version &&
    null != ORA_UCM_INFO.guid &&
    0 == isUCMRegistered()
  );
}
function getUCMCookies() {
  ORA_UCM_INFO = new private_ORA_UCM_INFO();
}
function getUserInfo() {
  var a = new Object();
  this.value_enc = getCookieData("ORA_UCM_INFO");
  this.array = this.value_enc.split("~");
  a.version = this.array[0];
  a.guid = this.array[1];
  a.firstname = this.array[2];
  a.lastname = this.array[3];
  a.username = this.array[4];
  return a;
}
function invalidateAuthCookie() {
  null != getCookieData("ORASSO_AUTH_HINT") &&
    (document.cookie =
      "ORASSO_AUTH_HINT=INVALID; Max-Age=0; domain=.oracle.com; path=/;");
}
function sso_sign_out() {
  var a = escape(window.location.href.replace(/^http:/gi, "https:"));
  -1 != a.indexOf("/secure") &&
    (a =
      window.location.href.indexOf("/opn/") > -1
        ? "https://www.oracle.com/opn/"
        : "https://www.oracle.com/partners/");
  invalidateAuthCookie();
  window.location.host.indexOf("-stage") > -1
    ? (window.location =
        "https://login-stage.oracle.com/sso/logout?p_done_url=" + a)
    : (window.location = "https://login.oracle.com/sso/logout?p_done_url=" + a);
}
function private_UCMCookieDecode(a) {
  var b =
      " !\"#$&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~.",
    c = unescape(a),
    d = "",
    e = "";
  for (i = 0; i < c.length; i++) {
    e = c.charAt(i);
    j = b.indexOf(e);
    if (-1 != j) {
      j += 2;
      j > b.length - 1 && (j -= b.length);
      d += b.charAt(j);
    } else d += e;
  }
  return d;
}
function private_ORA_UCM_INFO() {
  this.value_enc = getCookieData("ORA_UCM_INFO");
  this.array = this.value_enc.split("~");
  this.version = this.array[0];
  this.guid = this.array[1];
  this.firstname = this.array[2];
  this.lastname = this.array[3];
  this.username = this.array[4];
  var a = ["3", this.guid, this.firstname, this.lastname, this.username],
    b = a.join("~");
}
/*! INFO */ window["redwood-react"] = "25.8.0";
