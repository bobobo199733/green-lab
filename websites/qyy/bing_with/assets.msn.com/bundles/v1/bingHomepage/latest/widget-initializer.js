var e,
  t = {
    d: (e, n) => {
      for (var i in n)
        t.o(n, i) &&
          !t.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: n[i] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  },
  n = {};
function i(e, t, n, i) {
  return new (n || (n = Promise))(function (r, o) {
    function s(e) {
      try {
        c(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function a(e) {
      try {
        c(i.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function c(e) {
      var t;
      e.done
        ? r(e.value)
        : ((t = e.value),
          t instanceof n
            ? t
            : new n(function (e) {
                e(t);
              })).then(s, a);
    }
    c((i = i.apply(e, t || [])).next());
  });
}
function r(e, t) {
  window.dispatchEvent(
    new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: { type: "AppError", payload: t },
    })
  );
}
function o() {
  return !(
    "undefined" == typeof window ||
    !window.document ||
    !window.document.createElement
  );
}
function s(e, t = null, n = null) {
  return t && t.length > 0
    ? t
    : "windowsNewsPlus" === e || "winWidgets" === e
    ? n && n.includes("query=enterprise")
      ? "entwindowsdash"
      : "windowsdash"
    : e;
}
let a, c, d;
function l(e, t) {
  e && (c = e), t && (d = t);
}
function p(e, t, n) {
  try {
    const i = (function (e) {
      if (e) {
        const { pcsInfo: t, pageGenTime: n } = e,
          i = new Date(n).getTime(),
          r = !t || "prod" === t.env;
        return (
          (a = r
            ? "browser.events.data.msn." + (c.useCnDomain ? "cn" : "com")
            : "events-sandbox.data.msn." + (c.useCnDomain ? "cn" : "com")),
          {
            cors: "true",
            "content-type": "application/x-json-stream",
            "client-id": "NO_AUTH",
            "client-version": "1DS-Web-JS-2.2.2",
            apikey: r
              ? "0ded60c75e44443aa3484c42c1c43fe8-9fc57d3f-fdac-4bcf-b927-75eafe60192e-7279"
              : "f8857dedc6f54ca8962cfb713e01e7d7-e9250191-fe0b-446f-95ae-07516262f98c-7028",
            "upload-time": i,
            w: "0",
            anoncknm: "app_anon",
          }
        );
      }
      return null;
    })({});
    let r = "";
    i &&
      i.apikey &&
      (r = (function (e) {
        if (e) {
          const t = e.indexOf("-");
          if (t > 0) return e.substring(0, t);
        }
        return "";
      })(i.apikey));
    const o = (function (e, t, n, i) {
      if (!c) return;
      const {
          appType: r,
          pageType: o,
          cm: a,
          telemetry: l = {},
          pcsAdditionalQsp: p = "",
        } = c,
        { pageProduct: u } = l;
      if ((((i = i || {}).dataWidgetAttributes = c), d)) {
        const { bundleInfo: e, pcsInfo: t } = d;
        t && ((i.pcsVersion = t.v), (i.pcsEnv = t.env));
        const { alias: n, v: r } = e || {};
        (i.build = r), (i.buildAlias = n);
      }
      const g = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            const t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        ),
        m = {
          name: "MS.News.Web.AppError",
          time: new Date().toISOString(),
          ver: "4.0",
          iKey: `o:${n}`,
          data: {
            baseData: {},
            baseType: "MS.News.Web.Base",
            page: {
              name: "default",
              product: s(r, u, p),
              type: f(r) ? "dhp" : o,
              content: { category: "standaloneError" },
            },
            browser: { clientId: "" },
            flight: { id: "" },
            request: { activityId: g, requestId: g },
            locale: { mkt: a },
            extSchema: { id: e, severity: 0, pb: i, message: t },
          },
        };
      return m ? JSON.stringify(m) : null;
    })(t, e, r, n);
    u(e, i, o),
      i && o
        ? (console.error(o),
          navigator.sendBeacon(
            "https://" +
              a +
              "/OneCollector/1.0" +
              (function (e) {
                return (
                  "?" +
                  Object.keys(e)
                    .map(function (t) {
                      return t + "=" + encodeURIComponent(e[t]);
                    })
                    .join("&")
                );
              })(i),
            o
          ))
        : console.log("missing required params. " + e);
  } catch (t) {
    console.log(`Error ${t} logging the app error. ${e}`), u(e, {}, "");
  }
}
function u(t, n, i) {
  r("CustomWidgetErrorEvent", {
    stage: e.ALL,
    message: t,
    extra: { payload: i, params: n },
  });
}
function f(e) {
  return "windowsNewsPlus" === e || "winWidgets" === e;
}
t.d(n, { O: () => k }),
  Object.create,
  Object.create,
  (function (e) {
    (e.INITIALIZE = "initialize"), (e.CHANGE = "change"), (e.ALL = "all");
  })(e || (e = {}));
let g,
  m,
  w = !1;
function y() {
  if (w) return;
  const e = h();
  if (!e) return;
  const t = e.getElementsByClassName("peregrine-widget-load-icon")[0];
  t && (e.removeChild(t), (w = !0));
}
function h() {
  return document.body.getElementsByClassName("peregrine-widgetgroup")[0];
}
function b(e, t, n = !0, i = "anonymous", r) {
  if (!o())
    throw new Error(
      "createScriptTag is unsupported server side. This call should be wrapped in canUseDOM()."
    );
  const s = document.createElement("script");
  return (
    t && (s.id = t),
    r && s.setAttribute("class", r),
    (s.type = "text/javascript"),
    e && ((s.src = e), (s.async = n), (s.crossOrigin = i)),
    window && window.NONCE_ID && (s.nonce = window.NONCE_ID),
    s
  );
}
function v(e = "", t = "") {
  var n;
  const i =
    null === (n = location.search) || void 0 === n
      ? void 0
      : n.replace("?", "").split("&");
  if (i) {
    if (i.indexOf("item=pcsenv:int1") > -1) return "int1";
    if (
      i.indexOf("item=pcsenv:int") > -1 ||
      i.indexOf("item=pcsenv:intpr") > -1 ||
      i.indexOf("item=pcsenv:intperf") > -1
    )
      return "int";
    if ("distribution" === e || i.indexOf("item=pcsenv:microsoftstart") > -1)
      return "microsoftstart";
  }
  const r = t && t.replace("?", "").split("&");
  return r && r.indexOf("item=pcsenv:microsoftstart") > -1
    ? "microsoftstart"
    : "www";
}
function x(e) {
  performance &&
    performance.now &&
    ((window._pageTimings || (window._pageTimings = {}))[e] = Math.round(
      performance.now()
    ));
}
function C(e) {
  performance &&
    performance.now &&
    ((window._appTimings || (window._appTimings = {}))[e] = performance.now());
}
function T(e, t) {
  if (e instanceof Error) {
    const n = e.toString();
    return t && e.stack ? `${n}, Stack: ${e.stack}` : n;
  }
  return "string" == typeof e
    ? e
    : (function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "";
        }
      })(e);
}
let O = (function (e) {
  let t,
    n = !1;
  const r = function () {
    return (
      n ||
        ((n = !0),
        (t = i(void 0, void 0, void 0, function* () {
          if (!g)
            return (
              p(
                "dataWidgetAttributes is null in getPcsResponseFromNetwork",
                43715,
                {}
              ),
              null
            );
          const e = I();
          try {
            let t, n;
            const r = new Promise((r) => {
                t = setTimeout(
                  () =>
                    i(void 0, void 0, void 0, function* () {
                      p(
                        "PCS Widgets API call timed out. Trying to get response from statics",
                        43713,
                        { url: e }
                      );
                      try {
                        n = yield E(e);
                      } catch (t) {
                        p(
                          "Exception while loading static page from widget",
                          52005,
                          { originalUrl: e, error: T(t, !0) }
                        ),
                          r(null);
                      }
                      S(n, g.useCnDomain)
                        ? (x("WidgetsStaticFallbackCallEnd"), r(n))
                        : (p(
                            "Verify Static response for pcsData and bundleData for request url",
                            43716,
                            e
                          ),
                          r(null));
                    }),
                  15e3
                );
              }),
              o = fetch(e, { credentials: "include" }).then((r) =>
                i(void 0, void 0, void 0, function* () {
                  if ((t && clearTimeout(t), r.ok)) n = yield r.json();
                  else {
                    const t = D(r);
                    p(
                      `Response not-ok from PCS. Status code: ${r.status}`,
                      43714,
                      { afdAId: t }
                    );
                    try {
                      n = yield E(e);
                    } catch (n) {
                      return (
                        p(
                          "Exception while loading static page from widget",
                          52005,
                          { originalUrl: e, error: T(n, !0), afdAId: t }
                        ),
                        null
                      );
                    }
                  }
                  if (S(n, g.useCnDomain)) return n;
                  {
                    const t = D(r);
                    return (
                      p(
                        "Verify PCS response for pcsData and bundleData for request url",
                        43716,
                        { fetchUrl: e, afdAId: t }
                      ),
                      null
                    );
                  }
                })
              );
            return yield Promise.race([o, r]);
          } catch (t) {
            const { appType: n, isCallFromWidgetsChanged: i } = g || {};
            return (
              (f(n) && i) ||
                p("Fetch failed for PCS url", 43715, {
                  originalUrl: e,
                  error: T(t, !0),
                }),
              null
            );
          }
        }))),
      t
    );
  };
  return (
    (r.cache = {
      clear: () => {
        (n = !1), (t = void 0);
      },
    }),
    r
  );
})();
function E(e) {
  return i(this, void 0, void 0, function* () {
    const t = new URL(e);
    let n = e.replace(t.hostname, "staticview.msn.com");
    t.hostname.includes(".cn") &&
      (n = e.replace(t.hostname, "staticview.msn.cn"));
    try {
      let t;
      const r = new Promise(() => {
          t = setTimeout(
            () => (
              p("Static Response for Widgets timed out", 52006, {
                originalUrl: e,
              }),
              null
            ),
            15e3
          );
        }),
        o = fetch(n, { credentials: "include" }).then((r) =>
          i(this, void 0, void 0, function* () {
            t && clearTimeout(t);
            const i = D(r);
            return r.ok
              ? (p("Rendered static page from widget", 52003, {
                  originalUrl: e,
                  staticUrl: n,
                  afdAId: i,
                }),
                yield r.json())
              : (p("Response not-ok from static page", 52004, {
                  originalUrl: e,
                  staticUrl: n,
                  afdAId: i,
                }),
                null);
          })
        );
      return yield Promise.race([o, r]);
    } catch (t) {
      return (
        p("Exception while loading static page from widget", 52005, {
          originalUrl: e,
          staticUrl: n,
          error: T(t, !0),
        }),
        null
      );
    }
  });
}
function P(e) {
  return (
    e &&
    e.pcsData &&
    e.pcsData.info &&
    e.pcsData.clientSettings &&
    e.bundleData &&
    e.bundleData.bootstrappingRefs
  );
}
function S(e, t) {
  return P(e)
    ? ((e.pcsData.clientSettings.useCnDomain = t),
      (e.pcsData.clientSettings.widgetAttributes = g),
      e)
    : null;
}
function A() {
  if (!g) return "";
  const { appType: e, cm: t, pageType: n } = g;
  return `pw-pcsresponse_${e}_${n}_${t}`;
}
function I() {
  if (!g) return "";
  const {
    appType: e,
    useCnDomain: t,
    pageType: n,
    pcsEnvironment: i = "www",
    pcsAdditionalQsp: r,
  } = g;
  return `https://${i}.msn.${t ? "cn" : "com"}/pcs/api/widget/${e}/${n || ""}${
    r ? `?${r}` : ""
  }`;
}
function D(e) {
  return (e && e.headers && e.headers.get("x-msedge-ref")) || "";
}
function k(t) {
  return i(this, void 0, void 0, function* () {
    if (
      !(o() && "undefined" != typeof location && "undefined" != typeof fetch
        ? ("undefined" != typeof customElements &&
            "undefined" != typeof ShadowRoot &&
            "undefined" != typeof HTMLTemplateElement) ||
          (console.error(
            "Not sure if this is modern browser to render widgets!"
          ),
          0)
        : (console.error("Missing required global features."), 0))
    )
      return;
    if (navigator && !1 === navigator.onLine) {
      const e = new Promise((e) => {
        window.addEventListener("online", () => e());
      });
      yield e;
    }
    const n = document.body.getElementsByClassName("peregrine-widgetgroup")[0],
      s = document.body.getElementsByClassName("peregrine-core-bundle");
    if (n && 0 == s.length) {
      const o = (function () {
        var e;
        const t = document.body.getElementsByClassName("peregrine-widgetgroup"),
          n =
            t &&
            (null === (e = t[0]) || void 0 === e
              ? void 0
              : e.getAttribute("data-widget"));
        if (!n)
          return void console.error(
            "Missing getElementsByClassName, peregrine-widgetgroup or data-widget"
          );
        let i = {};
        try {
          i = JSON.parse(n);
        } catch (e) {
          return void console.error("dataWidget to parse is not valid JSON");
        }
        const r = (function () {
            const e =
                location.search && location.search.replace("?", "").split("&"),
              t = {};
            if (!e) return t;
            for (let n = 0; n < e.length; n++) {
              const i = e[n],
                r = i.split("=");
              if (
                2 === r.length &&
                "item" === decodeURIComponent(r[0]) &&
                decodeURIComponent(r[1])
              ) {
                const e = decodeURIComponent(r[1]).split(":");
                if (e && 2 === e.length && e[0] && e[1]) {
                  const n = e[1],
                    r =
                      "pcsenv" === e[0] &&
                      ("intpr" === n || "intperf" === n) &&
                      `instance=${n}`;
                  switch (
                    ((t.pcsAdditionalQsp = `${
                      t.pcsAdditionalQsp ? `${t.pcsAdditionalQsp}&` : ""
                    }${r || i}`),
                    e[0])
                  ) {
                    case "appType":
                      t.appType = n;
                      break;
                    case "pageType":
                      t.pageType = n;
                      break;
                    case "cm":
                      t.cm = n;
                      break;
                    case "dl":
                      t.dl = n;
                      break;
                    case "useCnDomain":
                      t.useCnDomain = "true" === n;
                      break;
                    case "reportingOcid":
                      t.telemetry = Object.assign(
                        Object.assign({}, t.telemetry),
                        { ocid: n }
                      );
                      break;
                    case "tmpl":
                      t.telemetry = Object.assign(
                        Object.assign({}, t.telemetry),
                        { tmpl: n }
                      );
                      break;
                    case "feedOcid":
                      t.feed = Object.assign(Object.assign({}, t.feed), {
                        ocid: n,
                      });
                      break;
                    case "feedApiKey":
                      t.feed = Object.assign(Object.assign({}, t.feed), {
                        apiKey: n,
                      });
                      break;
                    case "shouldPreFetchPcsResponse":
                      t.clientPerf = Object.assign(
                        Object.assign({}, t.clientPerf),
                        { shouldPreFetchPcsResponse: "true" === n }
                      );
                      break;
                    case "shouldUsePWOnlyFlights":
                      t.clientPerf = Object.assign(
                        Object.assign({}, t.clientPerf),
                        { shouldUsePWOnlyFlights: "true" === n }
                      );
                      break;
                    case "shouldShowLoadingIcon":
                      t.clientPerf = Object.assign(
                        Object.assign({}, t.clientPerf),
                        { shouldShowLoadingIcon: "true" === n }
                      );
                  }
                }
              }
            }
            return t;
          })(),
          o = r.appType || i.appType,
          s = {
            appType: o,
            cm: r.cm || i.cm,
            dl: r.dl || i.dl,
            clientPerf: r.clientPerf || i.clientPerf,
            feed: r.feed || i.feed,
            pageType: r.pageType || i.pageType,
            pcsEnvironment: v(o, i.pcsAdditionalQsp),
            telemetry: r.telemetry || i.telemetry,
            useCnDomain: r.useCnDomain || i.useCnDomain || !1,
            propertyBag: i.propertyBag,
          };
        if ((l(s), !s.appType || !s.pageType || !s.pcsEnvironment)) {
          let e = "Missing required params in data-widget";
          return (
            (e +=
              "\n\tappType: " +
              s.appType +
              "\n\tpageType: " +
              s.pageType +
              "\n\tpcsEnvironment: " +
              s.pcsEnvironment),
            void p(e, 43711, {})
          );
        }
        const a = [];
        return (
          r.pcsAdditionalQsp && a.push(r.pcsAdditionalQsp),
          i.pcsAdditionalQsp && a.push(i.pcsAdditionalQsp),
          s.cm && a.push(`cm=${s.cm}`),
          s.dl && a.push(`dl=${s.dl}`),
          a && a.length > 0 && (s.pcsAdditionalQsp = a.join("&")),
          s
        );
      })();
      (function (e) {
        return i(this, void 0, void 0, function* () {
          if (!e) return null;
          x("WidgetsPcsCallStart"), C("WidgetsPcsCall-start"), (g = e);
          let t = null;
          const { appType: n, clientPerf: r } = g;
          return (
            ((r && r.shouldPreFetchPcsResponse) ||
              (n && "distribution" === n)) &&
              ((function () {
                window._pw_cachePcsResponse = () =>
                  i(this, void 0, void 0, function* () {
                    try {
                      const e = yield O();
                      e
                        ? ((e.storageTimestamp = new Date().getTime()),
                          (e.pcsUrl = I()),
                          localStorage.setItem(A(), JSON.stringify(e)))
                        : p("PCS response was null", 52008, {});
                    } catch (e) {
                      p("Error writing PCS response to local storage", 52008, {
                        error: T(e, !0),
                      });
                    }
                  });
              })(),
              (t = (function () {
                try {
                  const e = JSON.parse(localStorage.getItem(A())),
                    t = e && e.storageTimestamp,
                    n = e && e.pcsUrl;
                  if (
                    t &&
                    new Date().getTime() - t < 1728e5 &&
                    n === I() &&
                    P(e)
                  )
                    return e;
                } catch (e) {
                  p("Error reading PCS response from local storage", 52007, {
                    error: T(e, !0),
                  });
                }
                return null;
              })())),
            t || (m = yield O()),
            x("WidgetsPcsCallEnd"),
            C("WidgetsPcsCall-end"),
            m || t
          );
        });
      })(o).then((i) => {
        if (i && i.bundleData) {
          !(function (e) {
            if (!e || !e.clientPerf || !e.clientPerf.shouldShowLoadingIcon)
              return;
            const t = h();
            if (!t) return;
            const n = document.createElement("img");
            n.setAttribute("class", "peregrine-widget-load-icon"),
              n.setAttribute(
                "src",
                `https://assets.msn.${
                  e.useCnDomain ? "cn" : "com"
                }/staticsb/statics/latest/widget/LoadingImg.gif`
              ),
              n.setAttribute("alt", "Loading"),
              n.setAttribute("style", "display:block;margin:auto;"),
              t.appendChild(n),
              (window._pw_removeLoadingIcon = y),
              setTimeout(y, 5e3);
          })(o);
          const e = i.pcsData.clientSettings;
          l(void 0, e);
          const r = (function (e) {
            const t = e.getElementsByClassName("peregrine-widget-settings")[0];
            if (t) return t;
            const n = document.createElement("div");
            return (
              n.setAttribute("class", "peregrine-widget-settings"),
              e.appendChild(n),
              n
            );
          })(n);
          r.setAttribute("data-info", i.pcsData.info),
            r.setAttribute("data-client-settings", JSON.stringify(e));
          for (const e in i.bundleData.bootstrappingRefs) {
            const t = e && i.bundleData.bootstrappingRefs[e];
            if (t) {
              const e = b(t, null, !0, "anonymous", "peregrine-core-bundle");
              n.appendChild(e);
            }
          }
          "string" == typeof t
            ? (window.__widgetTrackingJoinId = t)
            : "object" == typeof t && (window.__pw_options = t),
            (function (
              e = ["vendors", "common", "microsoft"],
              t = "Error when loading bundle(s): ",
              n = 15e3,
              i
            ) {
              setTimeout(() => {
                const n = window.webpackJsonp;
                if (n) {
                  const r = n.length,
                    o = e.length + 1;
                  if (r < o) {
                    r === o - 1
                      ? (e = ["experience"])
                      : n.slice(0, o).forEach((t) => {
                          t.length &&
                            t[0][0] &&
                            (e = e.splice(e.indexOf(t[0][0]), 1));
                        });
                    try {
                      p(t + e.toString(), 20202, {});
                    } finally {
                      i && i();
                    }
                  }
                }
              }, n);
            })(
              ["vendors", "common", "microsoft"],
              "WidgetInitializer - Error loading bundle(s): ",
              15e3
            );
        } else
          r("CustomWidgetErrorEvent", {
            stage: e.INITIALIZE,
            message:
              "Call to PCS API did not return data when widget initialized!",
            extra: { attributes: o, response: i },
          });
      });
    }
  });
}
var N = n.O;
export { N as startWidgetInitializer };
//# sourceMappingURL=widget-initializer.js.map
//# sourceMappingURL=https://assets.msn.com/bundles/v1/bingHomepage/latest/widget-initializer.js.map
//# sourceURL=https://assets.msn.com/bundles/v1/bingHomepage/latest/widget-initializer.js
