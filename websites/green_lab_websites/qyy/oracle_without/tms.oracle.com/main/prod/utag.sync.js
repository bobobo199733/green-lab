//tealium universal tag - utag.sync ut4.0.202210061841, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try {
  try {
    if (typeof utag_data == "undefined") {
      var utag_data = {};
    }
    if (
      navigator.doNotTrack == 1 ||
      window.doNotTrack == 1 ||
      navigator.msDoNotTrack == 1
    ) {
      utag_data.consent_do_not_track = true;
    } else {
      utag_data.consent_do_not_track = false;
    }
    if (
      typeof oracle !== "undefined" &&
      typeof oracle.truste !== "undefined" &&
      oracle.truste.api !== "undefined" &&
      typeof oracle.truste.api.getGdprConsentDecision() !== "undefined"
    ) {
      utag_data.consent_decision =
        oracle.truste.api.getGdprConsentDecision().consentDecision;
      utag_data.consent_source =
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
              for (var o = r[n]; " " == o.charAt(0); ) o = o.substring(1);
              if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
            }
            return null;
          }
          function r(e) {
            var t,
              r =
                ((t = e),
                "undefined" != typeof Storage ? localStorage.getItem(t) : null);
            return null != r ? JSON.parse(r).value : null;
          }
          (this.getConsentCode = function () {
            var n = r(e.getStorageItemName()) || t(e.getCookieName());
            return null == n ? -1 : parseInt(n) + 1;
          }),
            (this.getGdprConsentCode = function () {
              var n = r(e.getGdprStorageItemName()) || t(e.getGdprCookieName());
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
              t = '{"consentDecision": [' + e + '], "source": "asserted"}';
              return JSON.parse(t);
            });
        }.apply(oracle.truste.api);
      if (
        typeof oracle !== "undefined" &&
        typeof oracle.truste !== "undefined" &&
        oracle.truste.api !== "undefined" &&
        typeof oracle.truste.api.getGdprConsentDecision() !== "undefined"
      ) {
        utag_data.consent_decision =
          oracle.truste.api.getGdprConsentDecision().consentDecision;
        utag_data.consent_source =
          oracle.truste.api.getGdprConsentDecision().source;
      } else if (
        typeof truste !== "undefined" &&
        typeof truste.cma !== "undefined" &&
        typeof truste.cma.callApi() !== "undefined"
      ) {
        utag_data.consent_decision = truste.cma.callApi(
          "getGDPRConsentDecision",
          "oracle.com"
        ).consentDecision;
        utag_data.consent_source = truste.cma.callApi(
          "getGDPRConsentDecision",
          "oracle.com"
        ).source;
      } else {
        utag_data.consent_decision = "-1";
        utag_data.consent_source = "NoTRUSTe";
      }
    }
    if (
      typeof utag_data["consent_decision"] != "undefined" &&
      utag_data["consent_decision"]
        .toString()
        .toLowerCase()
        .indexOf("3".toLowerCase()) > -1
    ) {
      utag_data["consent_advertising"] = true;
    } else {
      utag_data["consent_advertising"] = false;
    }
    if (
      typeof utag_data["consent_decision"] != "undefined" &&
      utag_data["consent_decision"]
        .toString()
        .toLowerCase()
        .indexOf("2".toLowerCase()) > -1
    ) {
      utag_data["consent_functional"] = true;
    } else {
      utag_data["consent_functional"] = false;
    }
    if (
      typeof utag_data["consent_decision"] != "undefined" &&
      utag_data["consent_decision"]
        .toString()
        .toLowerCase()
        .indexOf("0".toLowerCase()) > -1
    ) {
      if (
        typeof utag_data["consent_do_not_track"] != "undefined" &&
        utag_data["consent_do_not_track"]
          .toString()
          .toLowerCase()
          .indexOf("false".toLowerCase()) > -1
      ) {
        utag_data["consent_implied"] = true;
      } else {
        utag_data["consent_implied"] = false;
      }
    } else {
      utag_data["consent_implied"] = false;
    }
    (function setCountryExclusion() {
      function launchGetUrlVars() {
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
      window.utag_data.country_exclusion = countryFound;
    })();
    window.utag_data.consent_code_has_run = true;
  } catch (e) {
    console.log(e);
  }
} catch (e) {
  console.log(e);
}
try {
  try {
    function getVisitorInfo() {
      try {
        var visitorAPI = "https://www.oracle.com/visitorinfo/";
        var request = new XMLHttpRequest();
        request.open("GET", visitorAPI, false);
        request.send(null);
        if (typeof window.utag_data == "undefined") {
          window.utag_data = {};
        }
        if (request.status === 200) {
          var resp = JSON.parse(request.responseText);
          utag_data["visitor_geo"] = resp;
        } else {
          utag_data["visitor_geo"] = false;
        }
      } catch (e) {
        console.log(e);
      }
    }
    function load_maxymizer() {
      document.write(
        '<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></scr' +
          "ipt>"
      );
      utag_data["maxymiser_loaded"] = true;
    }
    if (
      (typeof utag_data["consent_functional"] != "undefined" &&
        utag_data["consent_functional"]
          .toString()
          .toLowerCase()
          .indexOf("true".toLowerCase()) > -1) ||
      (typeof utag_data["consent_implied"] != "undefined" &&
        utag_data["consent_implied"]
          .toString()
          .toLowerCase()
          .indexOf("true".toLowerCase()) > -1)
    ) {
      if (
        (typeof location.host != "undefined" &&
          location.host.toString().toLowerCase() ==
            "www.oracle.com".toLowerCase()) ||
        (typeof location.host != "undefined" &&
          location.host.toString().toLowerCase() ==
            "www-sites.oracle.com".toLowerCase()) ||
        (typeof location.host != "undefined" &&
          location.host.toString().toLowerCase() ==
            "www-qa-dr.appoci.oracle.com".toLowerCase()) ||
        (typeof location.host != "undefined" &&
          location.host.toString().toLowerCase() ==
            "www-stage.appoci.oracle.com".toLowerCase())
      ) {
        if (
          ((typeof location.pathname != "undefined" &&
            /\/life-sciences\//.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/hospitality\//.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/retail\//.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/br\/industries\/retail\//.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/mx\/industries\/retail\//.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /\/uk\/erp\/financials-cloud\/finance-strategy\//.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/construction-engineering\/aconex-project-controls\/((\?|#).*)*$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/cx\/what-is-cx\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/cx\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/cx\/product-tours\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/database\/database-world\/((\?|#).*)*$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/database\/database-world\/event\/((\?|#).*)*$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/database\/database-world\/on-demand\/((\?|#).*)*$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/construction-engineering\/textura-construction-payment-management\/((\?|#).*)*$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/elq-demo-form.html/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/cloud\/cost-estimator.html/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/cloud\/costestimator.html/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/br\/think-oracle\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/erp\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|au)\/human-capital-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/cx\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/database\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/industries\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/servers\/eol.html$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/erp\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/human-capital-management\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/cx\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/database\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/industries\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/servers\/eol.html$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/corporate\/contact\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/corporate\/contact\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/erp\/financials-cloud\/finance-strategy\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/fr\/erp\/financials-cloud\/finance-strategy\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/partnernetwork\/isv/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/partnernetwork\/isv-test/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/br\/think-oracle/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/fr\/database\/freedom-from\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/database\/freedom-from\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/database\/freedom-from\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/cloud\/free\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/applications\/trusted-by\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/erp\/financials-cloud\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/construction-engineering\/primavera-cloud-project-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/construction-engineering\/unifier-asset-lifecycle-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/construction-engineering\/primavera-p6\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/construction-engineering\/construction-intelligence-cloud\/datasheet\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/construction-engineering\/preconstruction\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/construction-engineering\/portfolio-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/uk\/database\/data-management\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|au)\/index.html$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/de\/database\/data-management\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/fr\/database\/data-management\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/erp\/financials-cloud\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/erp\/procurement-cloud\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/erp\/project-portfolio-management-cloud\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/erp\/risk-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/supply-chain-planning\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/inventory-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/manufacturing\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/maintenance\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/order-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/logistics\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/product-lifecycle-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/track-and-trace\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/scm\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie|il-en|middleeast|fi|no|de|at|ch-de|fr|ch-fr|ae-ar|sa-ar|middleeast-ar|it|es|nl|se)\/applications\/what-is-saas\/best-saas\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie|il-en|middleeast|fi|no|de|at|ch-de|fr|ch-fr|ae-ar|sa-ar|middleeast-ar|it|es|nl|se)\/applications\/what-is-saas\/best-saas\/operations\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/performance-management\/tax-reporting\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/performance-management\/account-reconciliation\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/performance-management\/financial-consolidation-close\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie)\/performance-management\/planning\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(uk|za|sa|ae|ie|au|in|jp)\/performance-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/events\/customer-spotlight\/oracle-red-bull-racing\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/human-capital-management\/employee-experience\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/cloud\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/erp\/what-is-erp\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/applications\/what-is-saas\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/internet-of-things\/what-is-iot\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/big-data\/what-is-big-data\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/applications\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/au\/cx\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/cloud\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(au|jp|in)\/erp\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(au|jp|in)\/erp\/financials\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(au|jp|in)\/erp\/procurement\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(au|jp|in)\/scm\/$/.test(location.pathname)) ||
            (typeof location.pathname != "undefined" &&
              /^\/(au|jp|in)\/scm\/supply-chain-planning\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(id)\/big-data\/what-is-big-data\/the-top-use-cases-for-big-data-analytics\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(in)\/business-analytics\/what-is-analytics\/oracle-analytics-for-dummies\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(in)\/cloud\/what-is-iaas\/iaas-for-dummies-oracle-cloud-infrastructure\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(in)\/cloud\/solutions\/cloud-security-for-dummies\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(in)\/cloud\/oracle-451-research-advisory-blog\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(jp)\/cloud\/solutions\/uc-catalog-for-oracle-cloud-infrastructure\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/(au|jp|in)\/scm\/inventory-management\/$/.test(
                location.pathname
              )) ||
            (typeof location.pathname != "undefined" &&
              /^\/industries\/travel-transportation\/$/.test(
                location.pathname
              ))) &&
          window.location.search.toLowerCase().indexOf("combined-tag=true") ===
            -1 &&
          window.location.search
            .toLowerCase()
            .indexOf("combined-sync-tag=true") === -1 &&
          window.location.search
            .toLowerCase()
            .indexOf("combined-async-tag=true") === -1 &&
          window.location.pathname.indexOf(
            "retail/solutions-demo-form.html"
          ) === -1 &&
          window.location.search.toLowerCase().indexOf("maxymiser=no") === -1
        ) {
          load_maxymizer();
        }
      }
      if (
        typeof location.host != "undefined" &&
        location.host.toString().toLowerCase() == "www.oracle.com" &&
        ((typeof location.pathname != "undefined" &&
          /^\/industries\/travel-transportation-3\/$/.test(
            location.pathname
          )) ||
          window.location.search
            .toLowerCase()
            .indexOf("combined-sync-tag=true") !== -1)
      ) {
        document.write(
          '<script type="text/javascript" src="//d.oracleinfinity.io/infy/acs/account/wh3g12c3gg/js/oracle_maxymiser_cdn/odc.js"></script>'
        );
      }
      if (
        typeof location.host != "undefined" &&
        location.host.toString().toLowerCase() == "www.oracle.com" &&
        ((typeof location.pathname != "undefined" &&
          /^\/industries\/travel-transportation-2\/$/.test(
            location.pathname
          )) ||
          window.location.search
            .toLowerCase()
            .indexOf("combined-async-tag=true") !== -1)
      ) {
        (function () {
          var scriptEle = document.createElement("script");
          scriptEle.type = "text/javascript";
          scriptEle.src =
            "//d.oracleinfinity.io/infy/acs/account/wh3g12c3gg/js/oracle_maxymiser_cdn/odc.js";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(scriptEle, s);
        })();
      }
      if (
        (typeof location.host != "undefined" &&
          location.host.toString().toLowerCase() ==
            "developer.oracle.com".toLowerCase()) ||
        (typeof location.pathname != "undefined" &&
          location.pathname.toString().toLowerCase().indexOf("/devo/") != -1) ||
        (typeof location.host != "undefined" &&
          location.host.toString().toLowerCase() ==
            "developer-stage.oracle.com".toLowerCase())
      ) {
        if (
          (typeof location.pathname != "undefined" &&
            location.pathname.toString().toLowerCase() == "/") ||
          (typeof location.pathname != "undefined" &&
            location.pathname.toString().toLowerCase().indexOf("/python/") !=
              -1) ||
          (typeof location.pathname != "undefined" &&
            location.pathname.toString().toLowerCase().indexOf("/java/") !=
              -1) ||
          (typeof location.pathname != "undefined" &&
            location.pathname
              .toString()
              .toLowerCase()
              .indexOf("/infrastructure-as-code/") != -1) ||
          (typeof location.pathname != "undefined" &&
            location.pathname.toString().toLowerCase().indexOf("/ai-ml/") !=
              -1) ||
          (typeof location.pathname != "undefined" &&
            location.pathname.toString().toLowerCase().indexOf("/databases/") !=
              -1) ||
          (typeof location.pathname != "undefined" &&
            location.pathname.toString().toLowerCase().indexOf("/events/") !=
              -1) ||
          (typeof location.pathname != "undefined" &&
            location.pathname.toString().toLowerCase() ==
              "/site/devo/kalebs-analytics-test.html")
        ) {
          load_maxymizer();
        }
      }
      if (
        typeof location.host != "undefined" &&
        location.host.toString().toLowerCase() ==
          "blogs.oracle.com".toLowerCase()
      ) {
        if (
          typeof location.pathname != "undefined" &&
          location.pathname.toString().toLowerCase() ==
            "/sustainability/post/startups-step-up-with-free-resources-and-virtual-technology"
        ) {
          load_maxymizer();
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
} catch (e) {
  console.log(e);
}
try {
  try {
    try {
      if (!window.dataLayerObject) {
        window.dataLayerObject = {};
      }
      var _variation = false;
      window.dataLayerObject.page = { variation: "default" };
      var keywords =
        (document.getElementsByName("keywords") &&
          document.getElementsByName("keywords")[0] &&
          document.getElementsByName("keywords")[0].getAttribute("content")) ||
        "";
      if (keywords === "") {
        keywords =
          (document.getElementsByName("Keywords") &&
            document.getElementsByName("Keywords")[0] &&
            document
              .getElementsByName("Keywords")[0]
              .getAttribute("content")) ||
          "";
      }
      if (keywords != "") {
        var keywordsArr = keywords.split(",");
        keywordsArr.forEach(function (ele) {
          if (ele.trim().indexOf("AA") != -1) {
            window.dataLayerObject.page.variation = ele.trim();
          }
        });
      }
    } catch (e) {
      console.error(
        "Tealium: utag.sync - Set Page Variation to DataLayer Object",
        e
      );
    }
  } catch (e) {
    console.log(e);
  }
} catch (e) {
  console.log(e);
}
try {
  try {
    try {
      if (typeof window.utag_data == "undefined") {
        window.utag_data = {};
      }
      var visitorAPI = "https://www.oracle.com/visitorinfo/";
      utag_data["explicit_country"] = false;
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
      var request = new XMLHttpRequest();
      request.open("GET", visitorAPI, true);
      request.onload = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            var resp = JSON.parse(request.responseText);
            utag_data["visitor_geo"] = resp;
            if (
              explicit_countries.includes(utag_data["visitor_geo"].country_code)
            ) {
              utag_data["explicit_country"] = true;
            } else {
              utag_data["explicit_country"] = false;
            }
          } else {
            utag_data["visitor_geo"] = false;
            utag_data["explicit_country"] = false;
          }
        }
      };
      request.onerror = (e) => {
        console.error(request.statusText);
        utag_data["visitor_geo"] = false;
        utag_data["explicit_country"] = false;
      };
      request.send(null);
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
} catch (e) {
  console.log(e);
}
