(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [599],
  {
    9599: function (e, t, i) {
      var o = i(7980);
      new (function (e, t) {
        function i(e, t, i, o) {
          t.addEventListener
            ? t.addEventListener(e, i, o)
            : t.attachEvent && t.attachEvent(e, i, o);
        }
        function o(e, t, i, o) {
          t.removeEventListener
            ? t.removeEventListener(e, i, o)
            : el.removeEvent && el.removeEvent(e, i, o);
        }
        function a(t) {
          return (
            t &&
            "object" == typeof t &&
            "number" == typeof t.length &&
            !t.nodeName &&
            t != e
          );
        }
        function n(e, i) {
          var o = t.createEvent("HTMLEvents");
          return (o.data = i), o.initEvent(e, !0, !0), !t.dispatchEvent(o);
        }
        function r(e, t) {
          t =
            "string" == typeof t
              ? (function (e) {
                  var t =
                      /^(\s*\[\s*(\!?)\s*([a-zA-Z0-9\.\-_]*)\s*\:?\s*([a-zA-Z]*)\s*\])?\s*([^\s]+)\s*$/g.exec(
                        e
                      ),
                    i = /^[^#?]+\.([a-zA-Z0-9]+)([?#].*)?$/g.exec(e);
                  return t
                    ? {
                        reload: !!t[2],
                        name: t[3] ? [t[3]] : [],
                        type: t[4] || i ? (t[4] || i[1]).toLowerCase() : null,
                        url: t[5],
                      }
                    : null;
                })(t)
              : t;
          if (t) {
            for (var i, o = 0; o < e.length; o++)
              if (e[o].url == t.url) {
                if (
                  (t.reload && (e[o].reload = !0),
                  t.type && !e[o].type && (e[o].type = t.type),
                  t.name.length)
                )
                  for (var a = 0; a < t.name.length; a++)
                    e[o].name.indexOf(t.name[a]) < 0 &&
                      e[o].name.push(t.name[a]);
                i = !0;
                break;
              }
            i || e.push(t);
          }
        }
        function l(e) {
          var t,
            i = [],
            o = [];
          if ("function" == typeof e) i.push(e);
          else if ("string" == typeof e) {
            t = e.split(",");
            for (var n = 0; n < t.length; n++) r(o, t[n]);
          } else if (e && "object" == typeof e) {
            var d = a(e);
            for (var n in e) {
              t = l(e[n]);
              for (var c = 0; c < t.src.length; c++)
                d || t.src[c].name.push(n), r(o, t.src[c]);
              for (var s = 0; s < t.callback.length; s++) i.push(t.callback[s]);
            }
          }
          return { src: o, callback: i };
        }
        function d(e) {
          return !e || "js" == e;
        }
        function c(e) {
          return d(e) ? "script" : "link";
        }
        function s(e) {
          return d(e) ? "src" : "href";
        }
        function u(e, n) {
          var r = t.createElement("img"),
            l = "load",
            u = "error",
            v = d(e.type),
            p = t.createElement(c(e.type));
          (p.queue = [n]),
            (p[s(e.type)] = e.url),
            (p[v ? "type" : "rel"] = v
              ? "text/javascript"
              : "less" == e.type
              ? "stylesheet/less"
              : "stylesheet");
          var b = function t(i) {
            if ((o(l, p, t), o(u, p, t), a(p.queue) && p.queue.length))
              for (; p.queue.length > 0; ) {
                var n = p.queue.shift();
                "function" == typeof n && n(p, e, i);
              }
          };
          return (
            i(l, v ? p : r, b),
            i(u, v ? p : r, b),
            y.push(p),
            f.appendChild(p),
            v || (r.src = e.url),
            p
          );
        }
        function v(e, i) {
          for (
            var o = s(e), a = t.getElementsByTagName(c(e)), n = 0;
            n < a.length;
            n++
          )
            if (a[n][o] == i) return a[n];
        }
        function p(e, t) {
          var i = v(e, t);
          if (i) return a(i.queue) || ((i.queue = []), y.push(i)), i;
          for (var o = s(e), n = 0; n < y.length; n++)
            if (y[n][o] == t) return y[n];
        }
        var y = [],
          f = t.getElementsByTagName("head")[0];
        e.$import = function (e, t) {
          var i = l([].slice.call(arguments)),
            o = ((e = i.src), (t = i.callback), 0),
            a = function (e) {
              return e.parentNode || f.appendChild(e), e;
            },
            r = function () {
              for (var i = 0; i < t.length; i++) t[i](e);
              for (i = 0; i < e.length; i++) {
                n("@import", e[i]);
                for (var o = 0; o < e[i].name.length; o++)
                  n("@import:" + e[i].name[o], e[i]);
              }
            };
          if (!e.length) return r();
          for (
            var d = function () {
                ++o == e.length && r();
              },
              c = 0;
            c < e.length;
            c++
          ) {
            var s = e[c].type,
              v = e[c].url,
              y = p(s, v);
            y
              ? ((e[c].node = a(y)), y.queue.length ? y.queue.push(d) : d())
              : (e[c].node = u(e[c], d));
          }
        };
      })(window, document),
        window.Element &&
          !Element.prototype.closest &&
          (Element.prototype.closest = function (e) {
            var t,
              i = (this.document || this.ownerDocument).querySelectorAll(e),
              o = this;
            do {
              for (t = i.length; --t >= 0 && i.item(t) !== o; );
            } while (t < 0 && (o = o.parentElement));
            return o;
          }),
        "function" != typeof Array.prototype.forEach &&
          (Array.prototype.forEach = function (e) {
            for (var t = 0; t < this.length; t++)
              e.apply(this, [this[t], t, this]);
          }),
        window.NodeList &&
          !NodeList.prototype.forEach &&
          (NodeList.prototype.forEach = Array.prototype.forEach);
      var a = "VkKNQZg6x",
        n = "B1nEzzGqe",
        r = document.location.href,
        l =
          "BCpkADawqM1pW2-ioZdHgeOcY68cw0JSS05kIrwkV2y41a0Far9G-VzxhorxiMYmQNJqbjdZTfJNO8DfjreigQD2g0ikp_jGrofJCVAUNFU1xgsl6dBYsY6L_yI",
        d = !1,
        c = !1,
        s = document.querySelector('meta[name="Language"]')
          ? document
              .querySelector('meta[name="Language"]')
              .getAttribute("content")
          : "en",
        u = [
          "autoplay",
          "cc_lang_pref",
          "cc_load_policy",
          "color",
          "controls",
          "disablekb",
          "enablejsapi",
          "end",
          "fs",
          "hl",
          "iv_load_policy",
          "list",
          "listType",
          "loop",
          "modestbranding",
          "origin",
          "playlist",
          "playsinline",
          "rel",
          "start",
          "widget_referrer",
        ];
      if (
        (r.indexOf("videoinfo=true") > -1 && (c = []),
        r.indexOf("betavideo=") > -1)
      ) {
        var v = r.split("betavideo=")[1].split("&")[0];
        d =
          "BC VIDEO: loading single/playlist beta player -> " +
          (a = "true" == v ? "Bk2kPOcu" : v);
      }
      if (r.indexOf("betavideolive=") > -1) {
        var p =
          "BC VIDEO: loading live beta player -> " +
          (n =
            "true" != (v = r.split("betavideolive=")[1].split("&")[0]) ? v : n);
        d = d ? d + "\n" + p : p;
      }
      if (r.indexOf("betavideopkey=") > -1) {
        p =
          "BC VIDEO: loading beta policy key ->" +
          (l = r.split("betavideopkey=")[1].split("&")[0]);
        d = d ? d + "\n" + p : p;
      }
      var y = {
          1: {
            headline: { en: "The video download was cancelled." },
            description: { en: "You aborted the media playback" },
          },
          2: {
            headline: {
              en: "The video connection was lost, please confirm you're connected to the internet",
            },
            description: {
              en: "A network error caused the media download to fail part-way.",
            },
          },
          3: {
            headline: {
              en: "The video is bad or in a format that can't be played on your browser",
            },
            description: {
              en: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
            },
          },
          4: {
            headline: {
              en: "This video is either unavailable or not supported in this browser",
            },
            description: {
              en: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
            },
          },
          5: {
            headline: {
              en: "The video you're trying to watch is encrypted and we don't know how to decrypt it",
            },
            description: {
              en: "The media is encrypted and we do not have the keys to decrypt it.",
            },
          },
          unknown: {
            headline: { en: "There was an error" },
            description: {
              en: "An unanticipated problem was encountered. Check back soon and try again.",
            },
          },
          VIDEO_CLOUD_ERR_NOT_PLAYABLE: {
            headline: { en: "There was an error" },
            description: { en: "The video is not available." },
          },
        },
        f = {
          account: "1460825906",
          pk: l,
          bckey: "AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wagZQIWBO967-6Frb9WeJM",
          playlist: {
            playerid: a,
            bcidtype: "data-playlist-id",
            video:
              '<video data-embed="default" class="video-js" controls playsinline></video>',
            appendHTML:
              '<div class="playlist-wrapper"><ol class="vjs-playlist vjs-csspointerevents vjs-mouse"></ol></div>',
          },
          single: {
            playerid: a,
            bcidtype: "data-video-id",
            video:
              '<video data-embed="default" class="video-js" controls playsinline></video>',
          },
          background: {
            playerid: "K5HHwnATM",
            bcidtype: "data-video-id",
            video:
              '<video data-embed="default" class="video-js" playsinline></video>',
          },
          live: {
            playerid: n,
            bcidtype: "data-video-id",
            video:
              '<video data-embed="default" class="video-js" controls playsinline></video>',
          },
          mini: {
            playerid: "9jYHuR8jl",
            bcidtype: "data-video-id",
            video:
              '<video data-embed="default" class="video-js" controls playsinline></video>',
          },
        };
      function b(e) {
        "loading" != document.readyState
          ? e()
          : document.addEventListener("DOMContentLoaded", e);
      }
      function m(e) {
        if (e) {
          var t,
            i = "";
          if (
            (d && console.log(d),
            "undefined" !== typeof e.getAttribute("data-bcid"))
          )
            e.setAttribute(
              "data-bcid",
              null === (t = e.getAttribute("data-bcid")) || void 0 === t
                ? void 0
                : t.replace(/ /g, "")
            );
          e.classList.remove("bcembed"),
            (e.ptype = e.hasAttribute("data-type")
              ? e.getAttribute("data-type")
              : "single");
          var o = !("background" != e.ptype || !e.closest(".cw55")),
            a = !!e.classList.contains("bcthumbnail"),
            n = !!e.classList.contains("bcgallery"),
            r =
              "undefined" !== typeof e.getAttribute("data-playlistid") &&
              null !== e.getAttribute("data-playlistid"),
            l = "true" == e.getAttribute("data-videotimes"),
            u = e.ptype.indexOf("playlist") > -1;
          "undefined" == typeof e.getAttribute("data-options") ||
            e.getAttribute("data-options");
          if ("live-iframe" == e.ptype || o || a || n || r)
            if (o);
            else if (r);
            else if (a) {
              if (
                !(function (e, t) {
                  return (
                    e.matches ||
                    e.matchesSelector ||
                    e.msMatchesSelector ||
                    e.mozMatchesSelector ||
                    e.webkitMatchesSelector ||
                    e.oMatchesSelector
                  ).call(e, t);
                })(e, ".bcimgadded")
              ) {
                e.classList.add("bcimgadded");
                var v = e.getAttribute("data-bcid"),
                  p = e.getAttribute("data-shareonly")
                    ? "&shareonly=" + e.attr("data-shareonly")
                    : "",
                  b = e.offsetWidth,
                  m = e.closest(".clickvideo-overlay")
                    ? "&w10overlay=true"
                    : "",
                  A = new XMLHttpRequest();
                (A.onreadystatechange = function () {
                  if (A.readyState == XMLHttpRequest.DONE)
                    if (200 == A.status) {
                      var t = JSON.parse(A.responseText),
                        i = t.thumbnail & (b < 300) ? t.thumbnail : t.poster;
                      g(
                        e,
                        '<a href="?bcid=' +
                          v +
                          p +
                          m +
                          '" class="bclink" aria-label="' +
                          t.name +
                          '" title="' +
                          t.name +
                          '"><button tabIndex="-1" class="vjs-big-play-button"></button></a>'
                      ),
                        "" == m &&
                          g(e, '<img class="bcimg" src="' + i + '" />');
                    } else
                      400 == A.status
                        ? console.log("There was an error 400")
                        : console.log(
                            "something else other than 200 was returned"
                          );
                }),
                  A.open(
                    "GET",
                    "https://edge.api.brightcove.com/playback/v1/accounts/" +
                      f.account +
                      "/videos/" +
                      e.getAttribute("data-bcid"),
                    !0
                  ),
                  A.setRequestHeader("Accept", "application/json;pk=" + f.pk),
                  A.send(),
                  (i = e.innerHTML),
                  (e.innerHTML = i.replace(/&nbsp;/g, ""));
              }
            } else
              n
                ? e.html(
                    '<div data-experience="' +
                      e.attr("data-bcid") +
                      '"></div><script src="https://players.brightcove.net/' +
                      f.account +
                      "/experience_" +
                      e.attr("data-bcid") +
                      '/live.js"></script>'
                  )
                : (e.attr("class", ""),
                  e.html(
                    '<iframe class="bciframe" id="bcIframe" src="https://link.brightcove.com/services/player/bcpid993701296001?bckey=' +
                      f.bckey +
                      "&bctid=" +
                      e.attr("data-bcid") +
                      '&width=100%25&height=100%25&includeAPI=true&templateLoadHandler=onTemplateLoaded&templateReadyHandler=onTemplateReady&secureConnections=true&secureHTMLConnections=true&wmode=transparent"></iframe>'
                  ));
          else {
            (e.jspath =
              "//players.brightcove.net/" +
              f.account +
              "/" +
              f[e.ptype].playerid +
              "_default/index.min.js?s"),
              (e.vid =
                "bcvid-" +
                e.getAttribute("data-bcid").replace(/,/g, "-") +
                "-" +
                Math.floor(999999 * Math.random() + 2)),
              e.setAttribute("data-bcobjid", e.vid);
            var S = w(f[e.ptype].video);
            S.setAttribute("data-player", f[e.ptype].playerid),
              S.setAttribute("data-account", f.account),
              S.setAttribute("id", e.vid),
              S.setAttribute("data-unique-id", "video-player-id"),
              e.hasAttribute("data-poster") &&
                S.setAttribute("poster", e.getAttribute("data-poster")),
              e.getAttribute("data-bcid").indexOf(",") < 0 &&
                S.setAttribute(
                  f[e.ptype].bcidtype,
                  e.getAttribute("data-bcid")
                ),
              u &&
                (document
                  .querySelector("ol.vjs-playlist")
                  .classList.add("vjs-playlist-tmp"),
                document
                  .querySelector("ol.vjs-playlist")
                  .classList.remove("vjs-playlist")),
              e.appendChild(S),
              f[e.ptype].prependHTML && e.append(f[e.ptype].prependHTML),
              f[e.ptype].appendHTML && e.append(f[e.ptype].appendHTML),
              $import(e.jspath, function () {
                e.classList.add("showembed");
                var t,
                  i,
                  o = videojs(null === e || void 0 === e ? void 0 : e.vid);
                if (
                  (null === o || void 0 === o || o.preload(!0),
                  "background" ==
                    (null === e || void 0 === e ? void 0 : e.ptype))
                ) {
                  var a;
                  o.volume(0),
                    null === e ||
                      void 0 === e ||
                      null === (a = e.querySelector("video")) ||
                      void 0 === a ||
                      a.setAttribute("muted", !0);
                  var n,
                    r = null === e || void 0 === e ? void 0 : e.parentElement,
                    d =
                      (null === e || void 0 === e
                        ? void 0
                        : e.getAttribute("data-pausetxt")) || "Pause video",
                    v =
                      (null === e || void 0 === e
                        ? void 0
                        : e.getAttribute("data-playtxt")) || "Play video";
                  null !== e &&
                    void 0 !== e &&
                    e.querySelector("div.sr-only") &&
                    ((e.querySelector("div.sr-only").id =
                      "desc-" + e.getAttribute("data-bcid")),
                    (n =
                      'aria-describedby="desc-' +
                      e.getAttribute("data-bcid") +
                      '"'));
                  var p =
                    !1 !==
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                      ? " bgplayvid"
                      : "";
                  null === r ||
                    void 0 === r ||
                    r.insertAdjacentHTML(
                      "beforeend",
                      '<div class="bgvidpause"><div class="cwidth' +
                        p +
                        '">                <button class="bgvidpausebttn" ' +
                        n +
                        " onclick=\"videojs('" +
                        e.vid +
                        "').pause();this.parentElement.classList.add('bgplayvid');this.parentElement.children[1].focus()\"><span>" +
                        d +
                        '</span></button>                <button class="bgvidplaybttn" ' +
                        n +
                        " onclick=\"videojs('" +
                        e.vid +
                        "').play();this.parentElement.classList.remove('bgplayvid');this.parentElement.children[0].focus()\"><span>" +
                        v +
                        "</span></button>                </div></div>"
                    );
                }
                ("single" != (null === e || void 0 === e ? void 0 : e.ptype) &&
                  "live" != (null === e || void 0 === e ? void 0 : e.ptype)) ||
                  (("true" !==
                    (null === e || void 0 === e
                      ? void 0
                      : e.getAttribute("data-autoplay")) ||
                    (null !== e && void 0 !== e && e.closest(".w10")) ||
                    (null !== e && void 0 !== e && e.matches(".bcslipload"))) &&
                    (null === e || void 0 === e || !e.closest(".w10onload"))) ||
                  (o.volume(0),
                  null === e ||
                    void 0 === e ||
                    null === (t = e.querySelector("video")) ||
                    void 0 === t ||
                    t.setAttribute("muted", !0),
                  null === e ||
                    void 0 === e ||
                    e.insertAdjacentHTML(
                      "beforeend",
                      '<div class="video-unmute"></div>'
                    ),
                  null === e ||
                    void 0 === e ||
                    null === (i = e.querySelector(".video-unmute")) ||
                    void 0 === i ||
                    i.addEventListener("click", function (t) {
                      var i;
                      null === e ||
                        void 0 === e ||
                        e.querySelector("video").setAttribute("muted", !1),
                        o.volume(0.7),
                        null === t ||
                          void 0 === t ||
                          null === (i = t.currentTarget) ||
                          void 0 === i ||
                          i.remove();
                    }),
                  o.one("play", function (t) {
                    o.one("volumechange", function (t) {
                      var i;
                      null !== e &&
                        void 0 !== e &&
                        e.querySelector(".video-unmute") &&
                        (null === e ||
                          void 0 === e ||
                          null === (i = e.querySelector(".video-unmute")) ||
                          void 0 === i ||
                          i.remove());
                    });
                  }));
                if ((c && c.push(o), u)) {
                  var f =
                    document.getElementsByClassName("ol.vjs-playlist-tmp") ||
                    [];
                  Array.prototype.forEach.call(f, function (e, t) {
                    null === e ||
                      void 0 === e ||
                      e.classList.add("vjs-playlist"),
                      null === e ||
                        void 0 === e ||
                        e.classList.remove("vjs-playlist-tmp");
                  }),
                    Array.prototype.forEach.call(
                      document.querySelectorAll("ol.vjs-playlist"),
                      function (e, t) {
                        var i = [];
                        l &&
                          (i[t] = window.setInterval(function () {
                            if (
                              null !== e &&
                              void 0 !== e &&
                              e.querySelector(".vjs-selected cite")
                            ) {
                              if (l) {
                                var o = document.createElement("div");
                                o.setAttribute("class", "bctimew1"),
                                  (function (e, t) {
                                    e.parentNode.insertBefore(t, e),
                                      t.appendChild(e);
                                  })(
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.querySelector(
                                          ".vjs-playlist-item time"
                                        ),
                                    o
                                  );
                              }
                              clearInterval(i[t]);
                            }
                          }, 50));
                      }
                    );
                }
                if (
                  (!1 ===
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches || e.closest(".w10")
                    ? "true" == e.getAttribute("data-autoplay") &&
                      ("background" ==
                      (null === e || void 0 === e ? void 0 : e.ptype)
                        ? o.play()
                        : o.autoplay(!0))
                    : o.autoplay(!1),
                  "true" == e.getAttribute("data-loopvideo") && o.loop(!0),
                  "none" == e.getAttribute("data-share") &&
                    e.classList.add("bcnosocial"),
                  e.hasAttribute("data-autocaption"))
                ) {
                  var b = e.getAttribute("data-autocaption"),
                    m = o.textTracks();
                  o.on("play", function (e) {
                    for (var t = 0; t < m.length; t++) {
                      var i = m[t];
                      "captions" === i.kind &&
                        i.language === b &&
                        (i.mode = "showing");
                    }
                  });
                }
                if (
                  "function" == typeof o.social &&
                  "none" != e.dataset.share
                ) {
                  var g = document.location.href
                    .replace(/[\?\&]bcid=[\d]+/gi, "")
                    .replace(/[\?\&]playerType=[^\&\#]+/gi, "")
                    .replace(/\#.*/gi, "")
                    .replace(/[\?\&]shareURL=[^\&\#]+/gi, "")
                    .replace(/\#.*/gi, "");
                  e.dataset.share &&
                  "none" != e.dataset.share &&
                  e.dataset.share.indexOf("playvid") < 0
                    ? (g = e.dataset.share)
                    : u ||
                      ((g =
                        g.indexOf("?") > -1
                          ? g + "&bcid=" + e.dataset.bcid
                          : g + "?bcid=" + e.dataset.bcid),
                      (g =
                        "single" != e.ptype
                          ? g + "&playerType=" + e.ptype
                          : g));
                  var w = { url: g };
                  "true" != e.dataset.autoshare ||
                    u ||
                    (w.displayAfterVideo = !0),
                    o.social(w);
                }
                if (
                  (o.ready(function () {
                    var t = document.createElement("div");
                    (t.className = "vjs-error-w1"),
                      (t.innerHTML =
                        '<div class="vjs-error-w2"><h1></h1><p></p></div><div class="vjs-error-logo"></div>');
                    var i = {};
                    i.content = t;
                    var a = new (videojs.getComponent("ModalDialog"))(o, i);
                    o.addChild(a);
                    a.descEl_.id;
                    e.closest(".w10") && h(e.closest(".w10")),
                      o.on("error", function (t) {
                        var i,
                          a,
                          n = o.error().code,
                          r = o.duration(),
                          l =
                            "function" ==
                            typeof (null === o ||
                            void 0 === o ||
                            null === (i = o.errors) ||
                            void 0 === i
                              ? void 0
                              : i.getAll)
                              ? null === o ||
                                void 0 === o ||
                                null === (a = o.errors) ||
                                void 0 === a
                                ? void 0
                                : a.getAll()
                              : function () {},
                          d = "";
                        if (isNaN(r)) {
                          var c;
                          o.errorDisplay.hide();
                          for (
                            var u = document.querySelector(
                              "button.vjs-close-button"
                            ).nextElementSibling;
                            u;

                          )
                            (u.style.display = "none"),
                              (u = u.nextElementSibling);
                          if (
                            (y[n] ? y[n].headline[s] : y.unknown.headline[s],
                            o.error().message)
                          )
                            d = o.error().message;
                          else if (n)
                            if ("VIDEO_CLOUD_ERR_NOT_PLAYABLE" == n)
                              d = y[n].description[s];
                            else {
                              for (var v in l)
                                if (n == l[v].type) {
                                  d = l[v].headline;
                                  break;
                                }
                              d || (d = y.unknown.description[s]);
                            }
                          else d = y.unknown.description[s];
                          if (
                            (null ===
                              (c = document.querySelector(".bgvidpause")) ||
                              void 0 === c ||
                              c.remove(),
                            e.hasAttribute("data-poster"))
                          ) {
                            var p;
                            null ===
                              (p = e.querySelector(
                                "div[data-unique-id='video-player-id']"
                              )) ||
                              void 0 === p ||
                              p.remove();
                            var f = e.getAttribute("data-poster");
                            e.style.backgroundImage = "url(".concat(f, ")");
                          }
                        }
                      });
                  }),
                  u && e.attr("data-bcid").indexOf(",") > -1)
                ) {
                  var A = e.attr("data-bcid").split(","),
                    S = videojs(e.find("video")[0].id);
                  !(function (e, t, i) {
                    var o = 0,
                      a = t.length,
                      n = [];
                    function r(e) {
                      o < a ? e.catalog.getVideo(t[o], l) : i(n);
                    }
                    function l(t, i) {
                      n.push(i), o++, r(e);
                    }
                    r(e);
                  })(S, A, function (e) {
                    S.playlist(e);
                  });
                }
              });
          }
          e.addEventListener(
            "focus",
            function (t) {
              function i() {
                "webkit-tablet" ==
                  (function (e) {
                    var t =
                      1 == e
                        ? ".bcvideo[data-bcid]"
                        : ".bcgallery[data-playlistID]";
                    return window
                      .getComputedStyle(document.querySelector(t), ":before")
                      .getPropertyValue("content")
                      .replace(/\"/g, "");
                  })(!0) &&
                  ($(t.currentTarget).blur(),
                  e.off("focus", ".vjs-play-control"));
              }
              for (var o = t.target; o && o != this; o = o.parentNode)
                if (o.matches(".vjs-play-control")) {
                  i.call(o, t);
                  break;
                }
            },
            !1
          );
        }
      }
      function h(e, t) {
        var i = e.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]),iframe'
        );
        t
          ? "IFRAME" === i[i.length - 1].tagName
            ? i[i.length - 1].contentWindow.focus()
            : i[i.length - 1].focus()
          : "IFRAME" === i[0].tagName
          ? e.querySelector(".ytvideo")
            ? (e.setAttribute("tabindex", "-1"), e.focus())
            : i[0].contentWindow.focus()
          : i[0].focus();
      }
      function g(e, t) {
        var i = document.createElement("div");
        for (i.innerHTML = t; i.children.length > 0; )
          e.appendChild(i.children[0]);
      }
      function w(e) {
        var t = document.createElement("div");
        return (t.innerHTML = e.trim()), t.firstChild;
      }
      function A(e, t, i, o, a, n, r, l) {
        var d,
          c,
          s = "",
          u = "";
        e &&
          (e.closest(".bcvideo")
            ? (e.closest(".bcvideo").querySelector(".w10meta-title") &&
                (d = e
                  .closest(".bcvideo")
                  .querySelector(".w10meta-title").innerHTML),
              e.closest(".bcvideo").querySelector(".w10meta-desc") &&
                (c = e
                  .closest(".bcvideo")
                  .querySelector(".w10meta-desc").innerHTML))
            : "A" === e.tagName &&
              (e.title && (d = e.title),
              e.dataset.description && (c = e.dataset.description)),
          d && (u = '<div class="modal-info" id="w10title">' + d + "</div>"),
          c && (s = '<div class="modal-info" id="w10desc">' + c + "</div>"));
        var v = e ? "" : " w10onload";
        j(),
          t &&
            ((i = t.split("bcid=")[1].split("&")[0]),
            (o =
              t.indexOf("playerType=") > -1
                ? t.split("playerType=")[1].split("&")[0]
                : "single"),
            (a =
              t.indexOf("shareURL=") > -1 &&
              t.split("shareURL=")[1].split("&")[0]),
            (aCapt =
              t.indexOf("autoCaption=") > -1 &&
              t.split("autoCaption=")[1].split("&")[0]),
            (l =
              "object" == typeof e && e.closest(".clickvideo-overlay")
                ? " w10overlay"
                : ""),
            (n = n || t.indexOf("bigscreen=true") > -1 ? " w10big" : ""),
            (r =
              t.indexOf("shareonly=") > -1
                ? "data-shareonly=" + t.split("shareonly=")[1].split("&")[0]
                : "")),
          (o = o.indexOf("live-") > -1 ? "live" : o),
          (o = f[o] ? o : "single"),
          (a = a ? "data-share=" + a : ""),
          (aCapt = aCapt ? "data-autocaption=" + aCapt : ""),
          (injectionContent =
            '<div class="w10 w10fadein' +
            n +
            l +
            v +
            '" id="w10"><div class="w10w1"><div class="w10w2 w10initfocus" tabindex="0" role="dialog" aria-labelledby="w10title" aria-describedby="w10desc">' +
            u +
            s +
            '<div class="bcembed bcvideo bc' +
            o +
            '" data-bcid="' +
            i +
            '" data-type="' +
            o +
            '" ' +
            a +
            " " +
            aCapt +
            ' data-autoplay="true" ' +
            r +
            '></div><a id="w10close" href="#close" data-trackas="lightbox" data-lbl="lightbox-close" aria-label="Close video" role="button"><em>Close</em></a></div><div class="w10w3"></div></div></div>'),
          l
            ? document
                .querySelectorAll(e.closest(".clickvideo-overlay"))
                .appendChild(injectionContent)
            : g(document.body, injectionContent),
          document.querySelector("#w10").classList.add("w10" + o),
          setTimeout(function () {
            document.querySelector("#w10").classList.remove("w10fadein"),
              document.querySelector("#w10close").classList.remove("hidden"),
              l ||
                document
                  .querySelector("body")
                  .classList.add("lightbox-noscroll");
          }, 10),
          m(document.querySelector("#w10").querySelectorAll("div.bcembed")[0]);
      }
      function S(e, t, i, o, a, n, r, l, d, c, s, u, v) {
        var p,
          y,
          f = "",
          b = "",
          m = "",
          w = "",
          A = "",
          S = "";
        if (
          (e.closest(".ytvideo")
            ? (e.closest(".ytvideo").querySelector(".w10meta-title") &&
                (S = e
                  .closest(".ytvideo")
                  .querySelector(".w10meta-title").innerHTML),
              e.closest(".ytvideo").querySelector(".w10meta-desc") &&
                (A = e
                  .closest(".ytvideo")
                  .querySelector(".w10meta-desc").innerHTML))
            : "A" === e.tagName &&
              (e.title && (S = e.title),
              e.dataset.description && (A = e.dataset.description)),
          S &&
            ((b = '<div class="modal-info" id="w10title">' + S + "</div>"),
            (m = ' aria-labelledby="w10title"')),
          A &&
            ((f = '<div class="modal-info" id="w10desc">' + A + "</div>"),
            (w = ' aria-describedby="w10desc"')),
          t)
        )
          for (var q in (p = {
            bigs: o || t.indexOf("bigscreen=true") > -1 ? " w10big" : "",
            end: t.indexOf("end=") > -1 ? t.split("end=")[1].split("&")[0] : "",
            feature:
              t.indexOf("feature=") > -1
                ? t.split("feature=")[1].split("&")[0]
                : "",
            loop:
              t.indexOf("loop=") > -1 ? t.split("loop=")[1].split("&")[0] : 0,
            modestbranding:
              t.indexOf("modestbranding=") > -1
                ? t.split("modestbranding=")[1].split("&")[0]
                : 1,
            playlist:
              t.indexOf("playlist=") > -1
                ? t.split("playlist=")[1].split("&")[0]
                : "",
            rel: t.indexOf("rel=") > -1 ? t.split("rel=")[1].split("&")[0] : 0,
            showinfo:
              t.indexOf("showinfo=") > -1
                ? t.split("showinfo=")[1].split("&")[0]
                : "",
            start:
              t.indexOf("start=") > -1
                ? t.split("start=")[1].split("&")[0]
                : "",
            ytid: t.split("ytid=")[1].split("&")[0],
          }))
            if ("" != p[q]) {
              if ("bigs" == q) continue;
              y += " data-" + q + '="' + p[q] + '"';
            }
        g(
          document.querySelector("body"),
          '<div class="w10 w10fadein w10yt' +
            p.bigs +
            '" id="w10" aria-hidden="false"><div class="w10w1"><div class="w10w2 w10initfocus" role="dialog"' +
            m +
            w +
            ">" +
            b +
            f +
            '<div class="ytembed ytvideo" data-autoplay="true"' +
            y +
            '></div><a role="button" id="w10close" aria-label="Close" href="#close" data-trackas="lightbox" data-lbl="lightbox-close"><em>Close</em></a></div><div class="w10w3"></div></div></div>'
        ),
          setTimeout(function () {
            document.querySelector("#w10").classList.remove("w10fadein"),
              document.querySelector("#w10close").classList.remove("hidden"),
              document.querySelector("body").classList.add("lightbox-noscroll");
          }, 10),
          e.classList.add("w10active"),
          window.VD03.execute(
            document.querySelector("#w10").querySelectorAll("div.ytembed")[0]
          ),
          (window.w10ytInterval = window.setInterval(function () {
            document.querySelector("#w10 iframe") &&
              (clearInterval(window.w10ytInterval),
              h(document.querySelector("#w10 .w10w2")));
          }, 100));
      }
      function q() {
        document.querySelector("#w10").classList.add("w10fadeout");
        var e = document
          .querySelector("#w10")
          .querySelectorAll("[data-bcobjid]");
        if ("undefined" == typeof videojs)
          return (
            document
              .querySelector("#w10")
              .parentNode.removeChild(document.querySelector("#w10")),
            document
              .querySelector("body")
              .classList.remove("lightbox-noscroll"),
            !1
          );
        var t = videojs(e[0].getAttribute("data-bcobjid"));
        !(function e() {
          try {
            var i = t.volume() - 0.08;
            i > 0 ? (t.volume(i), setTimeout(e, 50)) : t.volume(0);
          } catch (o) {}
        })(t.volume()),
          setTimeout(function () {
            try {
              t.stop(),
                t.dispose(),
                document
                  .querySelector("#w10")
                  .parentNode.removeChild(document.querySelector("#w10")),
                document
                  .querySelector("body")
                  .classList.remove("lightbox-noscroll");
            } catch (e) {
              document
                .querySelector("#w10")
                .parentNode.removeChild(document.querySelector("#w10")),
                document
                  .querySelector("body")
                  .classList.remove("lightbox-noscroll");
            }
          }, 1300);
      }
      function L() {
        document.querySelector("#w10").classList.add("w10fadeout"),
          setTimeout(function () {
            var e, t;
            document.querySelector("#w10") &&
              (null === (e = document.querySelector("#w10")) ||
                void 0 === e ||
                null === (t = e.parentNode) ||
                void 0 === t ||
                t.removeChild(document.querySelector("#w10")));
            document
              .querySelector("body")
              .classList.remove("lightbox-noscroll");
          }, 500);
      }
      function k(e, t) {
        e.preventDefault(), e.stopPropagation(), j();
        var i = this.getAttribute("href");
        this.parentNode;
        i && (bcid = i.split("bcid=")[1].split("&")[0]);
        var o =
            '<div class="bcembed bcvideo bcslipload" data-bcid="' +
            bcid +
            '" data-autoplay="true"></div>',
          a =
            this.closest(".col-item-w1") &&
            this.closest("div.bcgallery[data-playlistid]")
              ? this.closest(".col-item-w1")
              : (function (e, t) {
                  for (
                    ;
                    (e = e.parentElement) &&
                    !(e.matches || e.matchesSelector).call(e, t);

                  );
                  return e;
                })(this, "[data-bcid='" + bcid + "']"),
          n = window.innerWidth > 1600 ? 1600 : window.innerWidth;
        !(this.offsetWidth >= 600 || this.offsetWidth > 0.7 * n) ||
        this.closest(".lightboxonly") ||
        this.closest(".clickvideo")
          ? A(t, this.href)
          : a.classList.contains("sliploaded") ||
            (a.classList.add("sliploaded"),
            g(a, o),
            m(a.querySelectorAll("div.bcembed")[0]));
      }
      function j(e, t) {
        if ((t || (t = document), "function" == typeof videojs)) {
          var i = document.querySelectorAll("div.vjs-playing");
          Array.prototype.forEach.call(i, function (t, i) {
            if (!t.closest('[data-loopvideo="true"]')) {
              var o = t.getAttribute("id"),
                a = videojs(o);
              if ((e && e != o) || !e)
                try {
                  a.pause();
                } catch (n) {}
            }
          });
        }
      }
      (window.VD03 = (function (e) {
        var t,
          i = {},
          o = "https://www.youtube.com/embed/",
          a = "https://i.ytimg.com/vi/[YTID]/",
          n = {},
          r = {
            autoplay: 0,
            end: "",
            feature: "",
            loop: 0,
            modestbranding: 1,
            playlist: "",
            rel: 0,
            showinfo: "",
            start: "",
            ytid: "",
            thumbq: "",
          };
        return (
          (_getAriaLabel = function (t) {
            var i = t.getAttribute("aria-label");
            if (i)
              return (
                e(t).removeAttribute("aria-label"), ' aria-label="' + i + '"'
              );
          }),
          (_addThumbButton = function (e) {
            e.insertBefore(
              w(
                '<button class="vjs-big-play-button"data-lbl="' +
                  (function (e) {
                    var t = e.getAttribute("data-lbl"),
                      i = e.getAttribute("data-ytid");
                    return t || "yt-play-" + i;
                  })(e) +
                  '"' +
                  _getAriaLabel(e) +
                  "></button>"
              ),
              e.firstChild
            ),
              e.removeAttribute("data-lbl");
          }),
          (_buildHref = function (e, t) {
            var i;
            if (
              ((i =
                "lightbox" == e
                  ? void 0 !== t
                    ? "?ytid=" + t.getAttribute("data-ytid") + "&"
                    : "?ytid=" + n.ytid + "&"
                  : void 0 !== t
                  ? o + t.getAttribute("data-ytid") + "?"
                  : o + n.ytid + "?"),
              void 0 !== t)
            )
              for (var a in r) {
                var l = t.getAttribute("data-" + a),
                  d = r[a];
                if ("ytid" != a)
                  if ("" === l || null == l) {
                    if ("" === d) continue;
                    i += a + "=" + d + "&";
                  } else i += a + "=" + l + "&";
              }
            else
              for (var a in n)
                "ytid" != a && "" !== n[a] && (i += a + "=" + n[a] + "&");
            return i.replace(/&$/, "");
          }),
          (_createFrame = function (e, t, i) {
            var o = w(
                '<iframe frameborder="0" allow="autoplay; fullscreen" width="' +
                  e +
                  '" height="' +
                  t +
                  '" allowfullscreen></iframe>'
              ),
              a = _buildHref("", i);
            return o.classList.add("ytembed"), o.setAttribute("src", a), o;
          }),
          (_loadConfigs = function (e) {
            for (var t in r)
              n[t] = e.getAttribute("data-" + t)
                ? e.getAttribute("data-" + t)
                : r[t];
          }),
          (_injectThumbnail = function (e) {
            var t,
              i = w("<img></img>");
            (t =
              "max" == e.dataset.thumbq
                ? a + "maxresdefault.jpg"
                : a + "hqdefault.jpg"),
              i.setAttribute("src", t.replace("[YTID]", n.ytid)),
              e.insertBefore(i, e.firstChild);
          }),
          (_injectVideo = function (t) {
            var i,
              o,
              a = {},
              r = w(
                '<div class="ytvideo ytshowembed"><div><div class="ytwrap"></div></div></div>'
              );
            t.insertAdjacentElement("afterend", r),
              t && t.parentNode && t.parentNode.removeChild(t),
              (o = r.querySelectorAll("div.ytwrap")[0]),
              Object.keys(n).forEach(function (i) {
                "autocaption" == i
                  ? e(t).data("autocaption") &&
                    ((a.cc_lang_pref = t.dataset.autocaption),
                    (a.cc_load_policy = 1))
                  : u.indexOf(i) >= 0 && n[i] && (a[i] = n[i]);
              }),
              (a.enablejsapi = !0),
              (a.ytid = t.dataset.ytid),
              !1 === window.location.href.includes("/cn/")
                ? _initYoutubeTracking(o, a)
                : ((i = _createFrame("100%", "100%", t)),
                  o.parentNode.appendChild(i));
          }),
          (_initYoutubeTracking = function (e, t) {
            var i = t.ytid;
            function o() {
              var o = new YT.Player(e, {
                height: "100%",
                width: "100%",
                videoId: i,
                playerVars: t,
                events: {
                  onReady: function (e) {
                    var t,
                      i =
                        null === e ||
                        void 0 === e ||
                        null === (t = e.target) ||
                        void 0 === t
                          ? void 0
                          : t.getVideoData();
                    i && i.title && e.target.i && (e.target.i.title = i.title),
                      window.ORA &&
                        window.ORA.analytics &&
                        window.ORA.analytics.plugins &&
                        window.ORA.analytics.plugins.yt &&
                        window.ORA.analytics.plugins.yt.addPlayer &&
                        window.ORA.analytics.plugins.yt.addPlayer(e.target),
                      window.onYTPlayerReady && window.onYTPlayerReady(e, o);
                  },
                  onStateChange: function (e) {
                    window.onYTPlayerStateChange &&
                      window.onYTPlayerStateChange(e, o);
                  },
                },
              });
            }
            delete t.ytid,
              window.YT
                ? o()
                : _loadIframeApiScript(function () {
                    YT.loaded
                      ? o()
                      : YT.ready(function () {
                          o();
                        });
                  });
          }),
          (_loadIframeApiScript = function (e) {
            if (
              document.querySelector(
                "script[src*='//www.youtube.com/iframe_api']"
              ) ||
              window.YT
            )
              e();
            else {
              var t = document.createElement("script");
              (t.src = "//www.youtube.com/iframe_api"), (t.onload = e);
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(t, i);
            }
          }),
          (_replaceEl = function (e) {
            if ("IntersectionObserver" in window) {
              var t = new IntersectionObserver(
                function (i) {
                  i.forEach(function (i) {
                    i.intersectionRatio > 0
                      ? (_injectVideo(e), t.unobserve(e))
                      : console.log("video out of view");
                  });
                },
                { root: null, threshold: 0 }
              );
              t.observe(e);
            } else _injectVideo(e);
          }),
          (_replaceThumbEvent = function (e) {
            e.addEventListener("click", function (t) {
              var i = window.screen.width > 1600 ? 1600 : window.screen.width;
              if (
                "function" == typeof navTrack &&
                "function" == typeof s_setAccount
              ) {
                var o = e.closest("[data-trackas]")[0]
                  ? e.closest("[data-trackas]").getAttribute("data-trackas")
                  : "yt-video";
                navTrack(
                  s_setAccount()[1],
                  s_setAccount()[2],
                  o,
                  e.getAttribute("data-lbl") ||
                    "yt-play-" + e.getAttribute("data-ytid")
                );
              }
              !(e.offsetWidth >= 600 || e.offsetWidth > 0.7 * i) ||
              (this.closest(".lightboxonly") &&
                this.closest(".lightboxonly")[0]) ||
              (this.closest(".clickvideo") && this.closest(".clickvideo")[0])
                ? (S(e, _buildHref("lightbox", e)),
                  t.stopPropagation(),
                  t.preventDefault())
                : _injectVideo(e);
            });
          }),
          (i.defaults = function () {
            return r;
          }),
          (i.initialize = function () {
            "IntersectionObserver" in window
              ? (t ||
                  (t = new IntersectionObserver(function (e, i) {
                    e.forEach(function (e) {
                      e.isIntersecting &&
                        (_loadConfigs(e.target),
                        _injectVideo(e.target),
                        t.unobserve(e.target));
                    });
                  })),
                Array.prototype.forEach.call(
                  document.querySelectorAll(
                    "[data-ytid]:not(.ytthumbnail):not(.vd03init)"
                  ),
                  function (e, i) {
                    _loadConfigs(e), t.observe(e), e.classList.add("vd03init");
                  }
                ))
              : Array.prototype.forEach.call(
                  document.querySelectorAll(
                    "[data-ytid]:not(.ytthumbnail):not(.vd03init)"
                  ),
                  function (e, t) {
                    _loadConfigs(e), _replaceEl(e), e.classList.add("vd03init");
                  }
                ),
              Array.prototype.forEach.call(
                document.querySelectorAll(
                  ".ytthumbnail[data-ytid]:not(.vd03init)"
                ),
                function (e, t) {
                  _loadConfigs(e),
                    e.querySelectorAll("img")[0] || _injectThumbnail(e),
                    _addThumbButton(e),
                    _replaceThumbEvent(e),
                    e.classList.add("vd03init");
                }
              );
          }),
          (i.execute = function (e) {
            e.dataset.ytid && (_loadConfigs(e), _replaceEl(e));
          }),
          i
        );
      })(document)),
        b(function () {
          !(function (e) {
            Array.prototype.forEach.call(
              e.querySelectorAll(
                'a[rel^="brightcoveLightBox"]:not([href*="ytid="]),a[rel^="vbox"]:not([href*="ytid="])'
              ),
              function (e, t) {
                var i = e;
                i.setAttribute("rel", "vbox"),
                  i.setAttribute(
                    "href",
                    i
                      .getAttribute("href")
                      .replace(/.*videoplayer-ocom.html/g, "")
                      .replace(/bctid/g, "bcid")
                      .replace(/ /g, "")
                  ),
                  !i.dataset.lbl && i.getAttribute("title")
                    ? i.setAttribute(
                        "data-lbl",
                        "lighbox-open-" +
                          i
                            .getAttribute("title")
                            .toLowerCase()
                            .replace(/ /g, "-")
                      )
                    : !i.dataset.lbl && i.innerText
                    ? i.setAttribute(
                        "data-lbl",
                        "lighbox-open-" +
                          i.innerText.toLowerCase().replace(/ /g, "-")
                      )
                    : i.dataset.lbl
                    ? i.setAttribute("data-lbl", i.getAttribute("data-lbl"))
                    : i.setAttribute("data-lbl", "lighbox-open"),
                  i.dataset.trackas ||
                    i.setAttribute("data-trackas", "lightbox");
              }
            ),
              Array.prototype.forEach.call(
                e.querySelectorAll(".bcembed.bcload"),
                function (e, t) {
                  m(jQuery(this));
                }
              );
            var t = document.querySelectorAll("div.bcembed");
            if ("IntersectionObserver" in window) {
              var i = new IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    e.intersectionRatio > 0 &&
                      (m(e.target), i.unobserve(e.target));
                  });
                },
                { root: null, threshold: 0 }
              );
              t.forEach(function (e) {
                e.classList.contains("bcobserved") ||
                  (i.observe(e), e.classList.add("bcobserved"));
              });
            } else
              Array.prototype.forEach.call(t, function (e) {
                e.classList.contains("bcobserved") ||
                  (m(e), e.classList.add("bcobserved"));
              });
          })(document),
            g(
              document.querySelector("body"),
              '<div class="bcvideo vidcsstest" style="width:0 !important"></div>'
            ),
            ("rgba(0, 0, 0, 0)" !=
              getComputedStyle(
                document.querySelector("div.bcvideo.vidcsstest")
              )["background-color"] &&
              "transparent" !=
                getComputedStyle(
                  document.querySelector("div.bcvideo.vidcsstest")
                )["background-color"]) ||
              "undefined" === typeof cssfilepath ||
              $import(cssfilepath + "oracle-video.css"),
            document
              .querySelector("div.bcvideo.vidcsstest")
              .parentNode.removeChild(
                document.querySelector("div.bcvideo.vidcsstest")
              );
        }),
        (window.bc_loadplayer = m),
        document.addEventListener(
          "keydown",
          function (e) {
            32 == e.which
              ? "w10close" === document.activeElement.id &&
                document.activeElement.click()
              : 27 == e.which
              ? document.querySelectorAll(".w10.w10yt")[0]
                ? L()
                : document.querySelectorAll("#w10")[0] && q()
              : document.querySelector(".w10") &&
                (function (e, t) {
                  var i, a, n, r;
                  i = e.querySelector("iframe")
                    ? e.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), iframe'
                      )
                    : e.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                      );
                  (i = o(i).filter(function (e) {
                    var t,
                      i = e.offsetWidth,
                      o = e.offsetHeight;
                    return (
                      (0 !== i || 0 !== o) &&
                      "none" !==
                        (null === e ||
                        void 0 === e ||
                        null === (t = e.style) ||
                        void 0 === t
                          ? void 0
                          : t.display)
                    );
                  })),
                    (a = document.activeElement),
                    (n = i[0]),
                    (r = i[i.length - 1]),
                    ("Tab" != t.key && 9 != t.keyCode) ||
                      (!e.querySelector("video") && !e.closest(".w10yt")) ||
                      (t.shiftKey
                        ? (a !== n &&
                            a !==
                              document.querySelector("#w10 .w10initfocus")) ||
                          (t.preventDefault(),
                          "IFRAME" === r.tagName
                            ? r.contentWindow.focus()
                            : r.focus())
                        : a === r &&
                          (t.preventDefault(),
                          "IFRAME" === n.tagName
                            ? n.contentWindow.focus()
                            : n.focus()));
                })(document.querySelector(".w10"), e);
          },
          !1
        ),
        document.addEventListener(
          "click",
          function (e) {
            for (var t = e.target; t && t != this; t = t.parentNode)
              if (t.matches('.bclink[href*="bcid="]')) {
                k.call(t, e, t);
                break;
              }
          },
          !1
        ),
        document.addEventListener(
          "click",
          function (e) {
            function t(e, t) {
              A(t, this.href), e.preventDefault();
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches('a[rel^="vbox"][href*="bcid="]')) {
                t.call(i, e, i);
                break;
              }
          },
          !1
        ),
        document.addEventListener(
          "click",
          function (e) {
            function t(e, t) {
              S(t, this.href), e.preventDefault();
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches('a[rel^="vbox"][href*="ytid="]')) {
                t.call(i, e, i);
                break;
              }
          },
          !1
        ),
        document.addEventListener(
          "click",
          function (e) {
            function t(e, t) {
              t.closest(".w10").querySelectorAll(".ytshowembed")[0] ? L() : q(),
                e.preventDefault();
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches("#w10close, .w10w3")) {
                t.call(i, e, i);
                break;
              }
          },
          !1
        ),
        document.addEventListener(
          "touchstart",
          function (e) {
            function t(e, t) {
              document.querySelector("#w10close") &&
                document.querySelector("#w10close").classList.remove("hidden");
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches(".vjs-close-button")) {
                t.call(i, e, i);
                break;
              }
          },
          { capture: !1, passive: !0 }
        ),
        document.addEventListener(
          "click",
          function (e) {
            function t(e, t) {
              document.querySelector("#w10close") &&
                document.querySelector("#w10close").classList.add("hidden");
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches("button.vjs-share-control")) {
                t.call(i, e, i);
                break;
              }
          },
          !1
        ),
        document.addEventListener(
          "touchstart",
          function (e) {
            function t(e, t) {
              document.querySelector("#w10close") &&
                document.querySelector("#w10close").classList.add("hidden");
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches("button.vjs-share-control")) {
                t.call(i, e, i);
                break;
              }
          },
          { capture: !1, passive: !0 }
        ),
        b(function () {
          var e = document.location.href;
          (e.indexOf("bcid=") > -1 || e.indexOf("playvid=") > -1) &&
            A(!1, e.replace(/['"<>]/gi, "").replace(/playvid/gi, "bcid"));
        }),
        document.addEventListener(
          "click",
          function (e) {
            function t(e, t) {
              if (
                (t
                  .closest(".bcplaylist")
                  .querySelectorAll("div.vjs-social-overlay")[0] &&
                  !t
                    .closest(".bcplaylist")
                    .querySelectorAll("div.vjs-social-overlay")[0]
                    .classList.contains("vjs-hidden") &&
                  (t
                    .closest(".bcplaylist")
                    .querySelectorAll("div.vjs-social-overlay")[0]
                    .classList.add("vjs-hidden"),
                  t
                    .closest(".bcplaylist")
                    .querySelectorAll("div.vjs-dock-text,div.vjs-dock-shelf")[0]
                    .classList.remove("vjs-hidden"),
                  t
                    .closest(".bcplaylist")
                    .querySelectorAll("div.vjs-controls-disabled")
                    .classList.remove("vjs-controls-disabled")
                    .addClass("vjs-controls-enabled")),
                t.closest("[data-bcobjid]")[0] &&
                  !t.closest("[data-autoplay]")[0])
              ) {
                var i = t.closest("[data-bcobjid]");
                i.setAttribute("data-autoplay", "true"),
                  videojs(i.getAttribute("data-bcobjid")).autoplay(!0);
              }
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches(".vjs-playlist-item")) {
                t.call(i, e, i);
                break;
              }
          },
          !1
        ),
        document.addEventListener(
          "click",
          function (e) {
            function t(e, t) {
              var i = t.closest("div.bcplaylist"),
                o = videojs(i.data("bcobjid")),
                a = document.location.href
                  .replace(/[\?\&]bcid=[\d]+/gi, "")
                  .replace(/[\?\&]playerType=[^\&\#]+/gi, "")
                  .replace(/\#.*/gi, "")
                  .replace(/[\?\&]shareURL=[^\&\#]+/gi, "")
                  .replace(/\#.*/gi, ""),
                n = {
                  url: (a =
                    a.indexOf("?") > -1
                      ? a +
                        "&bcid=" +
                        o.catalog.data.videos[o.playlist.currentItem()].id
                      : a +
                        "?bcid=" +
                        o.playlistMenu.items[o.playlist.currentItem()].item.id),
                  services: setSocialLinks.call(i),
                };
              o.social(n);
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches(".bcplaylist button.vjs-share-control")) {
                t.call(i, e, i);
                break;
              }
          },
          !1
        ),
        document.addEventListener(
          "touchstart click",
          function (e) {
            function t(e, t) {
              if ((e.preventDefault(), "touchstart" == e.type)) {
                var i = t.closest("div.bcvideo"),
                  o = videojs(i.dataset.bcobjid),
                  a = { services: setSocialLinks.call(i) };
                o.social(a),
                  document
                    .querySelector("#w10close")
                    .classList.remove("hidden");
              } else if ("click" == e.type) {
                (i = t.closest("div.bcvideo")),
                  (o = videojs(i.dataset.bcobjid)),
                  (a = { services: setSocialLinks.call(i) });
                o.social(a),
                  document
                    .querySelector("#w10close")
                    .classList.remove("hidden");
              }
            }
            for (var i = e.target; i && i != this; i = i.parentNode)
              if (i.matches("button.vjs-share-control")) {
                t.call(i, e, i);
                break;
              }
          },
          !1
        );
    },
  },
]);
