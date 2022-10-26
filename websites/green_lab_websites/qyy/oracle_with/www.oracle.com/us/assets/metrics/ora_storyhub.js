/*!
######################################################

# ORA_STORYHUB.JS

# Version: 1.17

# BUILD DATE: Tue Mar 29 2022 16:37:02 GMT-0700 (Pacific Daylight Time)

# COPYRIGHT ORACLE CORP 2022 [UNLESS STATED OTHERWISE]

######################################################
*/
var enable_tracking = !0,
  isTest =
    -1 != location.host.indexOf("-stage") ||
    -1 != location.host.indexOf("dev-") ||
    -1 != location.host.indexOf("-dev") ||
    -1 != location.host.indexOf("webstandards-us") ||
    -1 != location.host.indexOf("localhost");
try {
  oracle.truste.api.getConsentDecision().consentDecision;
  oracle.truste.api.getConsentDecision().source;
} catch (err) {
  var oracle = oracle || {};
  oracle.truste = {};
  oracle.truste.api = {};
  (function () {
    var trusteStorageItemName = "truste.eu.cookie.notice_preferences";
    this.getCookieName = function () {
      return "notice_preferences";
    };
    this.getStorageItemName = function () {
      return trusteStorageItemName;
    };
  }.apply(oracle.truste));
  (function () {
    var trusteCommon = oracle.truste;
    function getCookie(cookieKey) {
      for (
        var name = cookieKey + "=",
          cookieArray = document.cookie.split(";"),
          i = 0;
        i < cookieArray.length;
        i++
      ) {
        for (var c = cookieArray[i]; " " == c.charAt(0); ) c = c.substring(1);
        if (0 == c.indexOf(name)) return c.substring(name.length, c.length);
      }
      return null;
    }
    function getLocalStorageItem(storageKey) {
      return "undefined" != typeof Storage
        ? localStorage.getItem(storageKey)
        : null;
    }
    function getTRUSTeLocalStorageValue(storageKey) {
      var value = getLocalStorageItem(storageKey);
      if (null != value) {
        return JSON.parse(value).value;
      }
      return null;
    }
    this.getConsentCode = function () {
      var value =
        getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName()) ||
        getCookie(trusteCommon.getCookieName());
      return null == value ? -1 : parseInt(value) + 1;
    };
    this.getConsentDecision = function () {
      var value = this.getConsentCode();
      if (-1 == value) {
        var text = '{"consentDecision": 0, "source": "implied"}';
        return JSON.parse(text);
      }
      var text =
        '{"consentDecision": ' + parseInt(value) + ', "source": "asserted"}';
      return JSON.parse(text);
    };
  }.apply(oracle.truste.api));
}
var TRUSTeLevel = s_setConsentLevel(0);
function s_setConsentLevel(cLevel) {
  try {
    cLevel = truste.cma.callApi(
      "getConsentDecision",
      "oracle.com"
    ).consentDecision;
  } catch (err) {
    cLevel = s_getCookieData("notice_preferences").split(":")[0];
    cLevel = "" == cLevel ? 0 : ++cLevel;
  }
  return cLevel;
}
function s_getCookieData(label) {
  for (
    var labelLen = label.length, cLen = document.cookie.length, i = 0, cEnd;
    i < cLen;

  ) {
    var j = i + labelLen;
    if (document.cookie.substring(i, j) == label) {
      cEnd = document.cookie.indexOf(";", j);
      -1 == cEnd && (cEnd = document.cookie.length);
      j++;
      return decodeURIComponent(
        document.cookie.substring(j, cEnd).replace("+", "%20")
      );
    }
    i++;
  }
  return "";
}

/*! Script to check Do Not Track settings in the browser */
var enable_tracking = !0;
-1 == TRUSTeLevel || 0 == TRUSTeLevel
  ? (1 != navigator.doNotTrack &&
      1 != window.doNotTrack &&
      1 != navigator.msDoNotTrack) ||
    (enable_tracking = !1)
  : 1 == TRUSTeLevel && (enable_tracking = !1);

/*! ORA_CODE_STORYHUB.JS - v1.18 */
if (enable_tracking) {
  var siteID = "",
    language = "",
    ora_pageReferrer = "",
    ora_product = "";

  /*! Report suite set up */
  function s_setAccount() {
    var sa = ["oracledevall", "ocom", s_setOraLangCountryGLOBAL("oracle.com")];
    if (-1 != location.href.indexOf("www.oracle.com/mn/")) {
      sa[1] = "global";
      sa[2] = "en-mn";
    }
    if (-1 != location.href.indexOf("www.oracle.com/lv/")) {
      sa[1] = "global";
      sa[2] = "en-lv";
    }
    if (-1 != location.href.indexOf("www.oracle.com/lt/")) {
      sa[1] = "global";
      sa[2] = "en-lt";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ua/")) {
      sa[1] = "global";
      sa[2] = "en-ua";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ng/")) {
      sa[1] = "global";
      sa[2] = "en-ng";
    }
    if (-1 != location.href.indexOf("www.oracle.com/dz/")) {
      sa[1] = "global";
      sa[2] = "en-dz";
    }
    if (-1 != location.href.indexOf("www.oracle.com/gh/")) {
      sa[1] = "global";
      sa[2] = "en-gh";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ke/")) {
      sa[1] = "global";
      sa[2] = "en-ke";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ma/")) {
      sa[1] = "global";
      sa[2] = "en-ma";
    }
    if (-1 != location.href.indexOf("www.oracle.com/sn/")) {
      sa[1] = "global";
      sa[2] = "en-sn";
    }
    if (-1 != location.href.indexOf("www.oracle.com/bh/")) {
      sa[1] = "global";
      sa[2] = "en-bh";
    }
    if (-1 != location.href.indexOf("www.oracle.com/eg/")) {
      sa[1] = "global";
      sa[2] = "en-eg";
    }
    if (-1 != location.href.indexOf("www.oracle.com/iq/")) {
      sa[1] = "global";
      sa[2] = "en-iq";
    }
    if (-1 != location.href.indexOf("www.oracle.com/jo/")) {
      sa[1] = "global";
      sa[2] = "en-jo";
    }
    if (-1 != location.href.indexOf("www.oracle.com/kw/")) {
      sa[1] = "global";
      sa[2] = "en-kw";
    }
    if (-1 != location.href.indexOf("www.oracle.com/lb/")) {
      sa[1] = "global";
      sa[2] = "en-lb";
    }
    if (-1 != location.href.indexOf("www.oracle.com/om/")) {
      sa[1] = "global";
      sa[2] = "en-om";
    }
    if (-1 != location.href.indexOf("www.oracle.com/qa/")) {
      sa[1] = "global";
      sa[2] = "en-qa";
    }
    if (-1 != location.href.indexOf("www.oracle.com/sa/")) {
      sa[1] = "global";
      sa[2] = "en-sa";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ye/")) {
      sa[1] = "global";
      sa[2] = "en-ye";
    }
    if (-1 != location.href.indexOf("www.oracle.com/bt/")) {
      sa[1] = "global";
      sa[2] = "en-bt";
    }
    if (-1 != location.href.indexOf("www.oracle.com/bn/")) {
      sa[1] = "global";
      sa[2] = "en-bn";
    }
    if (-1 != location.href.indexOf("www.oracle.com/la/")) {
      sa[1] = "global";
      sa[2] = "en-la";
    }
    if (-1 != location.href.indexOf("www.oracle.com/mv/")) {
      sa[1] = "global";
      sa[2] = "en-mv";
    }
    if (-1 != location.href.indexOf("www.oracle.com/np/")) {
      sa[1] = "global";
      sa[2] = "en-np";
    }
    if (-1 != location.href.indexOf("www.oracle.com/rs/")) {
      sa[1] = "global";
      sa[2] = "en-rs";
    }
    if (-1 != location.href.indexOf("www.oracle.com/lu/")) {
      sa[1] = "global";
      sa[2] = "en-lu";
    }
    if (-1 != location.href.indexOf("/cis/")) {
      sa[1] = "global";
      void 0 != document.getElementsByName("Language")[0] &&
        (sa[2] =
          document.getElementsByName("Language")[0].getAttribute("content") +
          "-cis");
      void 0 != document.getElementsByName("language")[0] &&
        (sa[2] =
          document.getElementsByName("language")[0].getAttribute("content") +
          "-cis");
    }
    if (-1 != location.href.indexOf("www.oracle.com/ae/")) {
      sa[1] = "global";
      sa[2] = "en-ae";
    }
    if (-1 != location.href.indexOf("www.oracle.com/africa/")) {
      sa[1] = "global";
      sa[2] = "en-africa";
    }
    if (-1 != location.href.indexOf("www.oracle.com/apac/")) {
      sa[1] = "global";
      sa[2] = "en-apac";
    }
    if (-1 != location.href.indexOf("www.oracle.com/asiasouth/")) {
      sa[1] = "global";
      sa[2] = "en-asiasouth";
    }
    if (-1 != location.href.indexOf("www.oracle.com/bd/")) {
      sa[1] = "global";
      sa[2] = "en-bd";
    }
    if (-1 != location.href.indexOf("www.oracle.com/be-fr/")) {
      sa[1] = "global";
      sa[2] = "fr-be";
    }
    if (-1 != location.href.indexOf("www.oracle.com/be-nl/")) {
      sa[1] = "global";
      sa[2] = "nl-be";
    }
    if (-1 != location.href.indexOf("www.oracle.com/emea/")) {
      sa[1] = "global";
      sa[2] = "en-emea";
    }
    if (-1 != location.href.indexOf("www.oracle.com/id/")) {
      sa[1] = "global";
      sa[2] = "en-id";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ke/")) {
      sa[1] = "global";
      sa[2] = "en-ke";
    }
    if (-1 != location.href.indexOf("www.oracle.com/kh/")) {
      sa[1] = "global";
      sa[2] = "en-kh";
    }
    if (-1 != location.href.indexOf("www.oracle.com/lk/")) {
      sa[1] = "global";
      sa[2] = "en-lk";
    }
    if (-1 != location.href.indexOf("www.oracle.com/my/")) {
      sa[1] = "global";
      sa[2] = "en-my";
    }
    if (-1 != location.href.indexOf("www.oracle.com/middleeast-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-middleeast";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ph/")) {
      sa[1] = "global";
      sa[2] = "en-ph";
    }
    if (-1 != location.href.indexOf("www.oracle.com/pk/")) {
      sa[1] = "global";
      sa[2] = "en-pk";
    }
    if (-1 != location.href.indexOf("www.oracle.com/sg/")) {
      sa[1] = "global";
      sa[2] = "en-sg";
    }
    if (-1 != location.href.indexOf("www.oracle.com/th/")) {
      sa[1] = "global";
      sa[2] = "en-th";
    }
    if (-1 != location.href.indexOf("www.oracle.com/vn/")) {
      sa[1] = "global";
      sa[2] = "en-vn";
    }
    if (-1 != location.href.indexOf("www.oracle.com/il-en/")) {
      sa[1] = "global";
      sa[2] = "en-li";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ar/")) {
      sa[1] = "global";
      sa[2] = "esa-ar";
    }
    if (-1 != location.href.indexOf("www.oracle.com/bz/")) {
      sa[1] = "global";
      sa[2] = "esa-bz";
    }
    if (-1 != location.href.indexOf("www.oracle.com/bo/")) {
      sa[1] = "global";
      sa[2] = "esa-bo";
    }
    if (-1 != location.href.indexOf("www.oracle.com/cl/")) {
      sa[1] = "global";
      sa[2] = "esa-cl";
    }
    if (-1 != location.href.indexOf("www.oracle.com/co/")) {
      sa[1] = "global";
      sa[2] = "esa-co";
    }
    if (-1 != location.href.indexOf("www.oracle.com/cr/")) {
      sa[1] = "global";
      sa[2] = "esa-cr";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ec/")) {
      sa[1] = "global";
      sa[2] = "esa-ec";
    }
    if (-1 != location.href.indexOf("www.oracle.com/gt/")) {
      sa[1] = "global";
      sa[2] = "esa-gt";
    }
    if (-1 != location.href.indexOf("www.oracle.com/hn/")) {
      sa[1] = "global";
      sa[2] = "esa-hn";
    }
    if (-1 != location.href.indexOf("www.oracle.com/mx/")) {
      sa[1] = "global";
      sa[2] = "esa-mx";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ni/")) {
      sa[1] = "global";
      sa[2] = "esa-ni";
    }
    if (-1 != location.href.indexOf("www.oracle.com/pa/")) {
      sa[1] = "global";
      sa[2] = "esa-pa";
    }
    if (-1 != location.href.indexOf("www.oracle.com/py/")) {
      sa[1] = "global";
      sa[2] = "esa-py";
    }
    if (-1 != location.href.indexOf("www.oracle.com/pe/")) {
      sa[1] = "global";
      sa[2] = "esa-pe";
    }
    if (-1 != location.href.indexOf("www.oracle.com/pr/")) {
      sa[1] = "global";
      sa[2] = "esa-pr";
    }
    if (-1 != location.href.indexOf("www.oracle.com/uy/")) {
      sa[1] = "global";
      sa[2] = "esa-uy";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ve/")) {
      sa[1] = "global";
      sa[2] = "esa-ve";
    }
    if (-1 != location.href.indexOf("www.oracle.com/bh-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-bh";
    }
    if (-1 != location.href.indexOf("www.oracle.com/eg-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-eg";
    }
    if (-1 != location.href.indexOf("www.oracle.com/iq-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-iq";
    }
    if (-1 != location.href.indexOf("www.oracle.com/jo-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-jo";
    }
    if (-1 != location.href.indexOf("www.oracle.com/kw-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-kw";
    }
    if (-1 != location.href.indexOf("www.oracle.com/lb-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-lb";
    }
    if (-1 != location.href.indexOf("www.oracle.com/om-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-om";
    }
    if (-1 != location.href.indexOf("www.oracle.com/qa-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-qa";
    }
    if (-1 != location.href.indexOf("www.oracle.com/sa-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-sa";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ye-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-ye";
    }
    if (-1 != location.href.indexOf("www.oracle.com/ae-ar/")) {
      sa[1] = "global";
      sa[2] = "ar-ae";
    }
    if (-1 != location.href.indexOf("www.oracle.com/africa-fr/")) {
      sa[1] = "global";
      sa[2] = "fr-africa";
    }
    if (-1 != location.href.indexOf("www.oracle.com/middleeast/")) {
      sa[1] = "global";
      sa[2] = "en-middleeast";
    }
    if (-1 != location.href.indexOf("www.oracle.com/md/")) {
      sa[1] = "global";
      sa[2] = "en-md";
    }
    "en-us" != sa[2] && (sa[1] = "global");
    s_checkdev() ? (sa[0] = "oracledevall") : (sa[0] = "oracleglobal");
    if (isInternalStoryhub()) {
      sa[1] = "storyhub:internal";
      sa[2] = "en-us";
      s_checkdev()
        ? (sa[0] = "oracleinternalmysitesdev")
        : (sa[0] = "oracleinternalmysites");
    }
    siteID = sa[1];
    language = sa[2];
    ora_product = getUrlVars().product;
    return sa;
  }
  function isInternalStoryhub() {
    var isDev = !1,
      domains = [
        "storyhub-cecdevaccount.cec.ocp.oc-test.com",
        "myapps.oracle.com",
        "myapps-stage.oracle.com",
      ],
      al = domains.length;
    for (i = 0; i < al; i++)
      if (-1 != location.host.indexOf(domains[i])) {
        isDev = !0;
        i = al + 1;
      }
    return isDev;
  }
  function s_checkdev() {
    var isDev = !1,
      devSites = [
        "-stage",
        "-dev",
        "dev-",
        "localhost",
        "127.0.0.1",
        "-sites",
        "storyhub-cecdevaccount",
        "adc2171266.us.oracle.com",
        "webstandards-us",
      ],
      al = devSites.length;
    for (i = 0; i < al; i++)
      if (-1 != location.host.indexOf(devSites[i])) {
        isDev = !0;
        i = al + 1;
      }
    return isDev;
  }
  window.addEventListener("oraAnalyticsUrlChange", function () {
    ora_product = getUrlVars().product;
    if (window.s && window.s_Ping) {
      s.linkObject = 0;
      setTimeout(function () {
        s_Ping(!0);
      }, 500);
    }
  });
  var pushState = history.pushState;
  history.pushState = function () {
    window.s && (s.eVar24 = location.href);
    ora_pageReferrer = location.href;
    pushState.apply(history, arguments);
    window.dispatchEvent(new Event("oraAnalyticsUrlChange"));
  };
  window.onpopstate = function () {
    if (window.s) {
      s.eVar24 = location.href;
      ora_pageReferrer = location.href;
      window.dispatchEvent(new Event("oraAnalyticsUrlChange"));
    }
  };

  /*! PrePlugins */
  function s_prePlugins(s) {
    s_oraVer(":storyhub", ":1.18");
    (s.pageName &&
      (s.pageName.indexOf(":askoraclesearch") > -1 ||
        s.pageName.indexOf(":Search") > -1 ||
        s.pageName.indexOf("osaleschatbot") > -1)) ||
      setPageName(s);
    s.pageName.indexOf(":Search") > -1
      ? (s.eVar26 = siteID + ":search")
      : (s.eVar26 = siteID);
    oraSetInternalFilters();
    var url = s.linkObject;
    if (isInternalStoryhub())
      if (
        !url ||
        url.closest("[data-trackas]") ||
        !url.href ||
        (-1 == url.href.indexOf("http") && -1 == url.href.indexOf("https"))
      ) {
        s.prop8 = "";
        s.eVar53 = "";
        s.prop22 = "";
      } else {
        if (-1 != url.href.indexOf(location.hostname)) {
          var linkText = url.innerText.toString();
          linkText = linkText
            ? linkText.toLowerCase().replace(/[*,\r\n\t ]+/gi, "-")
            : linkText;
          s.linkType = "o";
          s.prop8 = s.pageName;
          s.prop22 = siteID + ":" + linkText;
          s.eVar53 = "[" + s.prop8 + "]" + s.prop22;
          s_ping = !0;
        } else {
          s.linkType = "e";
          s_ping = !1;
        }
        s.linkTrackVars = "prop8,prop22,eVar53";
      }
    s.prop22 && -1 != s.prop22.indexOf("rc86:share") && (s.linkType = "e");
  }
  function setPageName(s) {
    var path = window.location.pathname;
    void 0 != ora_product
      ? (s.pageName =
          siteID +
          ":" +
          language +
          ":" +
          path.toLowerCase().replace(/ /g, "-").replace(/-+/g, "-") +
          ora_product)
      : "/index.html" == window.location.pathname
      ? (s.pageName = siteID + ":" + language + ":/")
      : (s.pageName =
          siteID +
          ":" +
          language +
          ":" +
          path.toLowerCase().replace(/ /g, "-").replace(/-+/g, "-"));
    s.eVar26 = siteID;
  }

  /*! postPlugins plus site functions */
  function s_postPlugins(s) {
    s.eVar24 = "" != ora_pageReferrer ? ora_pageReferrer : s.eVar24;
    isInternalStoryhub() || (s.eVar26 = siteID + ":" + language.split("-")[0]);
    -1 == s.linkDownloadFileTypes.indexOf("deb") &&
      (s.linkDownloadFileTypes += ",deb");
    window.dataLayerObject &&
      window.dataLayerObject.page &&
      (s.eVar92 = window.dataLayerObject.page.variation);
  }
  function getUrlVars() {
    var vars = {},
      parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
          vars[key] = value;
        }
      );
    return vars;
  }

  /*! Set the code version, oraVersion comes from ora_code.js */
  function s_oraVer(_s, _v) {
    _v = _s + _v;
    oraVersion =
      -1 == oraVersion.indexOf(_s)
        ? oraVersion + _v
        : oraVersion.substr(0, oraVersion.indexOf(_s)) + _v;
  }
  function oraSetInternalFilters() {
    s.linkInternalFilters = "javascript:,.oracle.,.cec.ocp.oc-test.";
    (location.href.indexOf(":8888") ||
      location.href.indexOf("webstandards-us") ||
      location.href.indexOf("localhost")) &&
      (s.linkInternalFilters =
        "javascript:,localhost,webstandards-us.oracle.com,.oracle.,.cec.ocp.oc-test.");
  }
}
document.addEventListener("click", function (event) {
  var srcEle = event.target || event.srcElement,
    lbl = "",
    targetEle =
      findParentByTagName(srcEle, "A") || findParentByTagName(srcEle, "BUTTON"),
    o = targetEle,
    sidebar;
  if (srcEle && srcEle.className) {
    if (
      "string" == typeof srcEle.className &&
      -1 != srcEle.className.indexOf("pf-guide")
    ) {
      if (void 0 != srcEle.parentElement.href) {
        var custName = srcEle.parentElement.href;
        const params = new URL(custName).searchParams;
        var recommendation = params.get("pf_recommendation");
        custName = custName.split("?")[0].split("/")[4];
        lbl =
          recommendation +
          ":" +
          custName +
          ":" +
          srcEle.innerText.replace(/[*,\r\n\t ]+/gi, "-");
      } else lbl = srcEle.innerText.replace(/[*,\r\n\t ]+/gi, "-");
      navTrack(siteID, language, "rec-widget", lbl);
    }
    if (
      event.target.innerText &&
      -1 != event.target.innerText.toLowerCase().indexOf("recommended")
    ) {
      sidebar = event.target
        .closest("button#qa-guide-sidebar")
        .getAttribute("aria-expanded");
      lbl = "true" == sidebar ? "close" : "expand";
      navTrack(siteID, language, "rec-widget", lbl);
    }
  }
  if (
    targetEle &&
    targetEle.closest("*[data-trackas]") &&
    "notrack" != getAttribute(o, "data-lbl")
  ) {
    if (o.hasAttribute("data-lbl")) lbl = o.getAttribute("data-lbl");
    else if (o.hasAttribute("name")) lbl = o.getAttribute("name");
    else if (o.hasAttribute("title")) lbl = o.getAttribute("title");
    else if (o.querySelector("img")) {
      var img = o.querySelector("img");
      if (img.hasAttribute("title")) lbl = img.getAttribute("title");
      else if (img.hasAttribute("alt")) lbl = img.getAttribute("alt");
      else if (img.hasAttribute("src")) {
        lbl = img.getAttribute("src");
        lbl = lbl.split("/")[lbl.split("/").length - 1];
      } else lbl = o.textContent;
    } else lbl = o.textContent;
    var d = o.closest("[data-trackas]").getAttribute("data-trackas");
    d =
      "hnav" == d ||
      "header" == d ||
      "hp07" == d ||
      "hp08" == d ||
      "hp09" == d ||
      "menu" == d ||
      "hp10" == d ||
      "cn24" == d ||
      "hp11" == d ||
      "cb50" == d ||
      "cn27" == d ||
      "cb25" == d ||
      "ch05" == d ||
      "cw58" == d ||
      "cw59" == d ||
      "cb65" == d ||
      "cb66" == d ||
      "cb67" == d
        ? ":"
        : "-";
    if (!o.hasAttribute("data-trackas"))
      for (; o.parentNode; ) {
        o = o.parentNode;
        o.hasAttribute("data-lbl") &&
          (lbl = o.getAttribute("data-lbl") + d + lbl);
        if (o.hasAttribute("data-trackas")) break;
      }
    lbl = lbl.toLowerCase().replace(/ /g, "-").replace(/-+/g, "-");
    -1 != lbl.indexOf("mpd-") && (lbl = lbl.replace(/mpd-/g, ""));
    var sec = o.hasAttribute("data-trackas")
      ? o.getAttribute("data-trackas")
      : o.closest("*[data-trackas]").getAttribute("data-trackas");
    -1 != sec.indexOf("mpd-") && (sec = sec.replace(/mpd-/g, ""));
    "cw22-carouseltop" != sec &&
      window.navTrack &&
      navTrack(siteID, language, sec, lbl);
    if ("true" == getAttribute(o, "data-pgreset")) {
      s.clearVars();
      if (0 == getAttribute(o, "href").indexOf("#") && s.pageName) {
        if (document.body.hasAttribute("data-pgname"))
          var pn = getAttribute(o, "data-pgname");
        else {
          document.body.setAttribute("data-pgname", s.pageName);
          var pn = s.pageName;
        }
        s.pageName = pn + "/" + getAttribute(o, "href").split("#")[1];
      } else s_orapageName(getAttribute(o, "href"));
      oraSetInternalFilters();
      s.linkInternalFilters =
        s.linkInternalFilters + "," + getAttribute(o, "href");
      var s_code = s.t();
      s_code && document.write(s_code);
      oraSetInternalFilters();
    }
  }
});
function getAttribute(ele, attr) {
  var data;
  ele.hasAttribute(attr) && (data = ele.getAttribute(attr));
  return data;
}
function findParentByTagName(element, tagName) {
  for (
    var parent = element;
    null !== parent && parent.tagName !== tagName.toUpperCase();

  )
    parent = parent.parentNode;
  return parent;
}
var ora_root = isTest ? "://www-stage.oracle.com" : "://www.oracle.com",
  host_type =
    -1 != window.location.protocol.toLowerCase().indexOf("https")
      ? "https"
      : "http";
if (enable_tracking) {
  var sc_script = document.createElement("script");
  sc_script.type = "text/javascript";
  sc_script.onload = function () {
    window.sn = s_setAccount()[1];
    window.ln = s_setAccount()[2];
  };
  sc_script.src = host_type + ora_root + "/us/assets/metrics/ora_code.js";
  document.body
    ? document.body.appendChild(sc_script)
    : document.head.appendChild(sc_script);
}
