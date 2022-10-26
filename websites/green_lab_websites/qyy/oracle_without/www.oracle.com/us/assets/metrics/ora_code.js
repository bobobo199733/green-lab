/*!
######################################################
# ORA_CODE.JS - v1.93
# BUILD DATE: 11th September 2022
# COPYRIGHT ORACLE CORP 2022 [UNLESS STATED OTHERWISE]
######################################################
*/
var oraVersion = "ora_code:1.93:JS 2.6.0";
var s_account = ["oracledevall", "ocom", "en-us"];
if (window.s_setAccount) {
  s_account = s_setAccount();
}
var s_reportSuites = s_account[0].split(",");
if (s_reportSuites.includes("oracleglobal")) {
  s_account[0] = "oracleglobal";
} else {
  if (s_reportSuites.includes("oracledevall")) {
    s_account[0] = "oracledevall";
  } else {
    s_account[0] = s_reportSuites[0];
  }
}
if (location.hostname == "blogs.oracle.com") {
  s_account[0] = "oracleblogs,oracleglobal";
}
var s = s_gi(s_account[0]);
s_SetOraConfig();
s_setAdobePlugins();
s.doPlugins = s_doPlugins;
try {
  oracle.truste.api.getConsentDecision().consentDecision;
  oracle.truste.api.getConsentDecision().source;
} catch (err) {
  var oracle = oracle || {};
  oracle.truste = {};
  oracle.truste.api = {};
  (function () {
    var trusteCookieName = "notice_preferences";
    var trusteStorageItemName = "truste.eu.cookie.notice_preferences";
    this.getCookieName = function () {
      return trusteCookieName;
    };
    this.getStorageItemName = function () {
      return trusteStorageItemName;
    };
  }.apply(oracle.truste));
  (function () {
    var trusteCommon = oracle.truste;
    function getCookie(cookieKey) {
      var name = cookieKey + "=";
      var cookieArray = document.cookie.split(";");
      for (var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return null;
    }
    function getLocalStorageItem(storageKey) {
      if (typeof Storage !== "undefined") {
        return localStorage.getItem(storageKey);
      }
      return null;
    }
    function getTRUSTeLocalStorageValue(storageKey) {
      var value = getLocalStorageItem(storageKey);
      if (value != null) {
        var obj = JSON.parse(value);
        return obj.value;
      }
      return null;
    }
    this.getConsentCode = function () {
      var value =
        getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName()) ||
        getCookie(trusteCommon.getCookieName());
      if (value == null) {
        return -1;
      } else {
        return parseInt(value) + 1;
      }
    };
    this.getConsentDecision = function () {
      var value = this.getConsentCode();
      if (value == -1) {
        var text = '{"consentDecision": 0, "source": "implied"}';
        return JSON.parse(text);
      } else {
        var text =
          '{"consentDecision": ' + parseInt(value) + ', "source": "asserted"}';
        return JSON.parse(text);
      }
    };
  }.apply(oracle.truste.api));
}
s_PingOK = typeof s_PingOK != "undefined" ? s_PingOK : true;
s_Ping(s_PingOK);
function s_Ping(s_PingOK) {
  var c = navigator.userAgent.toLowerCase();
  var b_state = true;
  var s_block = [
    "file://",
    ".openoffice.",
    "americanarabchamberlasvegas.com",
    "eurodoctor.org",
    "beacoa.com",
    "aokai.net",
    "ceme.gsras.ru",
    "4tg.pl",
    "oraclepizzaparty",
    "s-event.cn",
    "igeninfo.com",
    "4tg.pl",
    "eurodoctor.co",
    "mynsd.info",
    "igeninfo.com",
    "mynsd.info",
    ".bluekai.com",
    "yundba.com",
    "thousandeyes.com",
    "zenlayer.com",
    "clara.ne.jp",
    "hostdime.com",
    "webazilla.com",
  ];
  s_PingOK =
    typeof s_PingOK == "undefined" || toString(s_PingOK) == ""
      ? b_state
      : s_PingOK;
  s_PingOK = s_consentStatus()[0] == 1 ? false : s_PingOK;
  for (var a = 0; a < s_block.length; a++) {
    if (location.href.indexOf(s_block[a]) > -1) {
      s_PingOK = false;
    }
  }
  s_PingOK = c.indexOf("google web preview") != -1 ? false : s_PingOK;
  if (s_PingOK) {
    s_code = s.t();
    if (s_code) {
      document.write(s_code);
    }
  }
}
function s_beacon() {
  var s_block = ["file://", ".openoffice."];
  var b_state = true;
  for (var a = 0; a < s_block.length; a++) {
    if (location.href.indexOf(s_block[a]) > -1) {
      b_state = false;
    }
  }
  return b_state;
}
function s_SetOraConfig() {
  s.currencyCode = "USD";
  s.charSet = "UTF-8";
  s.trackDownloadLinks = true;
  s.trackExternalLinks = true;
  s.trackInlineStats = true;
  s.linkDownloadFileTypes =
    "7z,avi,bat,bin,brk,bz2,cpio,dll,dmg,doc,docx,dot,exe,gz,iso,jar,jnlp,mdb,mov,mobi,mp3,mp4,mpeg,mpg,mpp,msi,odg,odp,ods,odt,otg,otp,ots,ott,ova,ovf,pdf,ppt,pptx,rm,rpm,sh,smi,smil,so,swf,tar,tgz,txt,vsd,wav,wma,wmv,wrf,xls,xlsx,z,zdl,zip";
  s.linkInternalFilters =
    "javascript:,.oracle.,sellingpoint,.oraclecloud.,custhelp.com,java.com,taleo.net,eloqua.com,rainfocus.com,go.java,mysql.com,on24.com,bluekai.com";
  s.linkLeaveQueryString = false;
  s.linkTrackVars = "None";
  s.linkTrackEvents = "None";
  s.visitorNamespace = "oracle";
  s.trackingServer = "oracle.112.2o7.net";
  s.trackingServerSecure = "oracle.112.2o7.net";
  s.usePlugins = true;
}
function s_doPlugins() {
  if (typeof s != "object") {
    console.log("debug: Site Catalyst s.OBJECT not found - reloading...");
    s = s_gi(s_account[0]);
  }
  if (typeof s_pageName != "undefined") {
    s.pageName = s_pageName;
  }
  if (typeof s_prop12 != "undefined") {
    s.prop12 = s_prop12;
  }
  if (typeof s_channel != "undefined") {
    s.channel = s_channel;
  }
  if (window.s_prePlugins) {
    s_prePlugins(s);
  }
  s.hier1 = decodeURI(location.href.toLowerCase());
  if (typeof s.pageName == "undefined" || s.pageName == "") {
    s_orapageName(location.pathname.toLowerCase());
  }
  if (s.pageName.indexOf("Error 404") != -1) {
    s.pageName = "Error 404:" + document.location.href.toLowerCase();
    s.pageType = "errorPage";
  }
  if (typeof s.channel == "undefined" || s.channel == "") {
    s_oraChannel(s.pageName);
  }
  s_oraRSS();
  s_oraMsgid();
  s_oraPaidSearch();
  if (s.getQueryParam("evite")) {
    s.eVar8 = s.getQueryParam("evite");
  }
  if (s.getQueryParam("lid")) {
    s.eVar11 = s.getQueryParam("lid");
  }
  if (s.getQueryParam("eid")) {
    s.eVar12 = s.getQueryParam("eid");
  }
  if (typeof s.linkType !== "undefined" && s.linkType === "d") {
    s_oraEnhancedDownloadTracking();
  }
  s_oraSubRSS();
  s.eVar20 = s.getNewRepeat();
  s.prop20 = "D=v20";
  s.prop38 = "D=pageName";
  s_sourceCampaign();
  s_oraIntCampaign();
  s.eVar24 = s.getPreviousValue(s.pageURL, "gpw_e24", "");
  s.eVar24 = s.eVar24 == "" ? "no value" : s.eVar24;
  s.prop24 = "D=v24";
  s_oraSetsiteID();
  s_oraCampaign();
  s.prop50 = s.eVar50 = "D=s_vi";
  s.eVar111 = s.fid;
  s.eVar118 = navigator.language;
  s.prop51 = oraVersion;
  if (s.getQueryParam("refid")) {
    s.prop31 = s.getQueryParam("refid");
  }
  if (s.getQueryParam("origref")) {
    s.referrer = location.href.split("origref=")[1];
  }
  s_oraLinkHandling();
  s.hier3 = "D=pageName";
  s.eVar51 = "D=pageName";
  s.eVar52 = decodeURI(location.href.toLowerCase());
  if (s.getQueryParam("source") || s.getQueryParam("Source")) {
    s.eVar106 = s.getQueryParam("source");
    s.eVar107 = "source~" + s.getQueryParam("source");
  } else {
    if (s.getQueryParam("sourceType") || s.getQueryParam("sourcetype")) {
      s.eVar106 = s.getQueryParam("sourceType");
      s.eVar107 = "sourceType~" + s.getQueryParam("sourceType");
    } else {
      if (s.getQueryParam("src1") || s.getQueryParam("Src1")) {
        s.eVar106 = s.getQueryParam("src1");
        s.eVar107 = "src1~" + s.getQueryParam("src1");
      }
    }
  }
  if (window.s_setGUID) {
    s_setGUID();
  }
  s_setEloquaCookieInfo();
  s.ActivityMap.regionIDAttribute = "data-trackas";
  s.eVar91 = s_getCookieData("ORA_FPC").replace("id=", "");
  if (window.s_postPlugins) {
    s_postPlugins(s);
  }
  if (typeof s.hier1 != "undefined" || s.hier1 != "") {
    s.hier1 = "";
  }
}
function navTrack(sitename, language, pagearea, linklabel) {
  var ltxt;
  try {
    if (linklabel.attr("href")) {
      if (linklabel.attr("name")) {
        ltxt = linklabel.attr("name");
      } else {
        if (linklabel.attr("title")) {
          ltxt = linklabel.attr("title");
        } else {
          if (
            linklabel.find("img") &&
            linklabel.find("img").first().attr("title")
          ) {
            ltxt = linklabel.find("img").first().attr("title");
          } else {
            if (
              linklabel.find("img") &&
              linklabel.find("img").first().attr("alt")
            ) {
              ltxt = linklabel.find("img").first().attr("alt");
            } else {
              if (linklabel.find("img").first().attr("src")) {
                ltxt = linklabel.find("img").first().attr("src");
                ltxt = ltxt.split("/")[ltxt.split("/").length - 1];
              } else {
                ltxt = linklabel.text();
              }
            }
          }
        }
      }
    } else {
      ltxt = linklabel.text();
    }
  } catch (err) {
    if (typeof linklabel == "string") {
      ltxt = linklabel;
    } else {
      if (typeof linklabel == "object") {
        if (linklabel.href) {
          if (linklabel.name) {
            ltxt = linklabel.name;
          } else {
            if (linklabel.title) {
              ltxt = linklabel.title;
            } else {
              if (
                linklabel.getElementsByTagName("img")[0] &&
                linklabel.getElementsByTagName("img")[0].alt
              ) {
                ltxt = linklabel.getElementsByTagName("img")[0].alt;
              } else {
                if (
                  linklabel.getElementsByTagName("img")[0] &&
                  linklabel.getElementsByTagName("img")[0].title
                ) {
                  ltxt = linklabel.getElementsByTagName("img")[0].title;
                } else {
                  if (linklabel.getElementsByTagName("img")[0].src) {
                    ltxt = linklabel.getElementsByTagName("img")[0].src;
                    ltxt = ltxt.split("/")[ltxt.split("/").length - 1];
                  } else {
                    ltxt = linklabel.innerHTML.replace(/\<[^>]+\>/gi, "");
                  }
                }
              }
            }
          }
        } else {
          ltxt = linklabel.innerHTML.replace(/\<[^>]+\>/gi, "");
        }
      }
    }
  }
  var linkvalue = "";
  var s_account = ["oracledevall", "ocom", "en-us"];
  if (window.s_setAccount) {
    s_account = s_setAccount();
  }
  if (s_reportSuites.includes("oracleglobal")) {
    s_account[0] = "oracleglobal";
  } else {
    if (s_reportSuites.includes("oracledevall")) {
      s_account[0] = "oracledevall";
    } else {
      s_account[0] = s_reportSuites[0];
    }
  }
  if (location.hostname == "blogs.oracle.com") {
    s_account[0] = "oracleblogs,oracleglobal";
  }
  linkvalue = typeof sitename != "undefined" || sitename != "" ? sitename : "";
  linkvalue =
    typeof language != "undefined" || language != ""
      ? linkvalue + ":" + language
      : linkvalue;
  linkvalue =
    typeof pagearea != "undefined" || pagearea != ""
      ? linkvalue + ":" + pagearea
      : linkvalue;
  linkvalue =
    typeof ltxt != "undefined" || ltxt != ""
      ? linkvalue + ":" + ltxt
      : linkvalue;
  linkvalue = linkvalue.toLowerCase();
  linkvalue = sitename == "" && language == "" ? "" : linkvalue;
  if (linkvalue != "") {
    var s = s_gi(s_account[0]);
    s.linkTrackEvents = "";
    s.linkTrackVars = "";
    s.prop22 = linkvalue.replace(/\s/g, "");
    s.prop8 = s.pageName;
    s.eVar53 = ("[" + s.pageName + "]" + linkvalue).replace(/\s/g, "");
    if (window.OraclePerformance) {
      var pageLoadTimings = OraclePerformance.setAnalytics();
      if (pageLoadTimings !== false) {
        s.prop44 = pageLoadTimings.prop44 ? pageLoadTimings.prop44 : "NotSet";
        s.prop46 = pageLoadTimings.prop46 ? pageLoadTimings.prop46 : "NotSet";
      } else {
        s.prop44 = s.prop46 = "";
      }
    } else {
      s.prop44 = s.prop46 = "";
    }
    s.linkTrackVars = "prop8,prop22,prop44,prop46,eVar53";
    s_objectID = linkvalue;
    s.tl(true, "o", linkvalue);
    s.prop8 = s.prop22 = s.eVar53 = "";
    s.linkTrackVars = "";
  }
}
function s_setOraLangCountry() {
  var pageCountry = "xx";
  var pageLang = "xx";
  if (typeof ssUrlPrefix == "undefined" || ssUrlPrefix == "") {
    pageCountry = "xx";
  } else {
    pageCountry = ssUrlPrefix.replace(/[/]/gi, "");
  }
  if (typeof g_strLanguageId == "undefined" || g_strLanguageId == "") {
    pageLang = "xx";
  } else {
    pageLang = g_strLanguageId;
  }
  return pageCountry + "-" + pageLang;
}
function s_setOraLangCountryGLOBAL(sitePreFix) {
  var mlms = "en-us";
  var locURL = document.location.href.toLowerCase();
  sitePreFix =
    sitePreFix == "" || typeof sitePreFix == "undefined"
      ? "oracle.com"
      : sitePreFix;
  var lcpair = new Array();
  lcpair = [
    ["/ao/", "en-ao"],
    ["/au/", "en-au"],
    ["/at/", "de-at"],
    ["/apac-en/", "apac-en"],
    ["/as/", "en-as"],
    ["/be/", "en-be-lu"],
    ["/ba/", "en-ba"],
    ["/br/", "ptb-br"],
    ["/bg/", "bg-bg"],
    ["/ca-en/", "en-ca"],
    ["/ca-fr/", "fr-ca"],
    ["/cn/", "zhs-cn"],
    ["/cy/", "en-cy"],
    ["/cz/", "cs-cz"],
    ["/cs/", "cs-cz"],
    ["/ch-fr/", "fr-ch"],
    ["/ch-de/", "de-ch"],
    ["/de/", "de-de"],
    ["/dk/", "da-dk"],
    ["/ee/", "est-ee"],
    ["/es/", "es-es"],
    ["/emea-en/", "emea-en"],
    ["/esa/", "es-es"],
    ["/fi/", "fi-fi"],
    ["/fr/", "fr-fr"],
    ["/gr/", "el-gr"],
    ["/hr/", "hr-hr"],
    ["/hk/", "en-hk"],
    ["/hu/", "hu-hu"],
    ["/in/", "en-in"],
    ["/ie/", "en-ie"],
    ["/il/", "heb-il"],
    ["/it/", "it-it"],
    ["/ita/", "it-it"],
    ["/jp/", "ja-jp"],
    ["/ja/", "ja-jp"],
    ["/kr/", "ko-kr"],
    ["/ko/", "ko-kr"],
    ["/lv/", "lav-lv"],
    ["/lad/", "esa-lad"],
    ["/lt/", "lt-lt"],
    ["/me/", "en-ae"],
    ["/mt/", "en-mt"],
    ["/nl/", "nl-nl"],
    ["/nz/", "en-nz"],
    ["/no/", "nox-no"],
    ["/pl/", "pl-pl"],
    ["/pt/", "pt-pt"],
    ["/ptb/", "ptb-br"],
    ["/ro/", "ro-ro"],
    ["/ru/", "ru-ru"],
    ["/sk/", "sk-sk"],
    ["/si/", "sl-si"],
    ["/se/", "sv-se"],
    ["/tw/", "zht-tw"],
    ["/tr/", "tr-tr"],
    ["/uk/", "en-uk"],
    ["/us/", "en-us"],
    ["/yu/", "yu-yu"],
    ["/za/", "en-za"],
    ["/zhs/", "zhs-cn"],
    ["/zht/", "zht-cn"],
  ];
  var al = lcpair.length;
  for (i = 0; i < al; i++) {
    if (locURL.indexOf(sitePreFix + lcpair[i][0]) != -1) {
      mlms = lcpair[i][1];
      i = al + 1;
    }
  }
  return mlms;
}
function s_orapageName(s_pageName) {
  if (s_account[2] == "") {
    s_account[2] = s_setOraLangCountry();
  }
  s_pageName =
    typeof s_pageName == "undefined" || s_pageName == ""
      ? location.pathname.toLowerCase()
      : s_pageName;
  var s_iNames = [
    "index.html",
    "index.jsp",
    "index.htm",
    "index.shtml",
    "index.xml",
    "index.jhtml",
    "index.jshtml",
    "index.jspa",
    "index.php",
    "index.asp",
  ];
  for (var a = 0; a < s_iNames.length; a++) {
    var s_iName = "/" + s_iNames[a];
    if (
      s_pageName.indexOf(s_iName) > -1 &&
      s_pageName.indexOf(s_iName) == s_pageName.length - s_iName.length
    ) {
      s_pageName = s_pageName.substring(
        0,
        s_pageName.length - s_iNames[a].length
      );
    }
  }
  if (s_pageName.indexOf("/us/") == 0) {
    s_pageName = s_pageName.substr(3, s_pageName.length - 3);
  }
  if (s_pageName.indexOf("/technetwork/") == 0) {
    s_pageName = s_pageName.substr(12, s_pageName.length - 12);
  }
  if (s_pageName.indexOf("/partners/") == 0) {
    s_pageName = s_pageName.substr(9, s_pageName.length - 9);
  }
  if (
    s_pageName.indexOf("/openworld/") == 0 &&
    s_account[1].indexOf("oow") != -1
  ) {
    s_pageName = s_pageName.substr(10, s_pageName.length - 10);
  }
  if (
    s_pageName.indexOf("/javaone/") == 0 &&
    s_account[1].indexOf("javaone") != -1
  ) {
    s_pageName = s_pageName.substr(8, s_pageName.length - 8);
  }
  if (document.title.indexOf("404") != -1) {
    s_pageName = "Error 404";
  }
  s.pageName = s_account[1] + ":" + s_account[2] + ":" + s_pageName;
}
function s_oraChannel(s_ch) {
  var ch = new Array();
  s_ch =
    typeof s_ch == "undefined" || s_ch == ""
      ? location.pathname.toLowerCase()
      : s_ch;
  ch = s_ch.split("/");
  ch.pop();
  s_ch = ch.toString().replace(/,/g, "/") + "/";
  s.channel = s_ch.length > 0 ? s_ch : "No Channel";
}
function s_oraSetsiteID() {
  var s_siteID = "none:xx";
  if (s_account[2].search("-") > 0) {
    s_siteID =
      s_account[1] + ":" + s_account[2].slice(0, s_account[2].search("-"));
  }
  if (typeof s.prop26 != "undefined") {
    s_siteID = s.prop26;
  }
  if (typeof s.eVar26 != "undefined") {
    s_siteID = s.eVar26;
  }
  s.eVar26 = s_siteID;
  s.prop26 = "D=v26";
}
function s_oraRSS() {
  if (s.getQueryParam("rssid")) {
    s.eVar2 = s.getQueryParam("rssid");
    s.eVar3 =
      s.getQueryParam("rssid") +
      ": " +
      (s.pageName && s.pageName != "undefined" ? s.pageName : s.baseURL);
    s.events = s.apl(s.events, "event4", ",", 1);
  }
}
function s_oraMsgid() {
  if (s.getQueryParam("msgid")) {
    s.eVar4 = s.getQueryParam("msgid");
    s.eVar5 =
      s.getQueryParam("msgid") +
      ": " +
      (s.pageName && s.pageName != "undefined" ? s.pageName : s.baseURL);
    s.events = s.apl(s.events, "event5", ",", 1);
  }
}
function s_oraPaidSearch() {
  if (s.getQueryParam("sckw")) {
    s.eVar6 = s.getQueryParam("sckw");
    s.eVar7 =
      s.getQueryParam("sckw") +
      ": " +
      (s.pageName && s.pageName != "undefined" ? s.pageName : s.baseURL);
    s.events = s.apl(s.events, "event6", ",", 1);
  }
}
function s_oraEnhancedDownloadTracking() {
  if (!s.EDTOverride) {
    var dlinkObject = s.linkObject;
    if (dlinkObject) {
      s.prop8 = "D=pageName";
      var downloadText = dlinkObject.innerHTML.toString();
      downloadText = downloadText.replace(/&amp;/g, "&");
      if (dlinkObject.name !== "") {
        downloadText = dlinkObject.name;
      }
      if (downloadText.indexOf("img") > -1) {
        if (downloadText.indexOf("name") > -1) {
          downloadText = downloadText.substring(
            downloadText.indexOf('name="') + 6,
            downloadText.length
          );
          downloadText = downloadText.substring(0, downloadText.indexOf('"'));
        } else {
          if (downloadText.indexOf("alt") > -1) {
            downloadText = downloadText.substring(
              downloadText.indexOf('alt="') + 5,
              downloadText.length
            );
            downloadText = downloadText.substring(0, downloadText.indexOf('"'));
          } else {
            downloadText = dlinkObject.href;
          }
        }
      } else {
        downloadText = downloadText.replace(/<\/?[^>]+(>|$)/g, "");
      }
      s.eVar29 = s.prop23 = downloadText;
      s.eVar15 = dlinkObject.href.substring(
        dlinkObject.href.lastIndexOf("/") + 1,
        dlinkObject.href.length
      );
      s.eVar16 = dlinkObject.href;
      s.events = s.apl(s.events, "event15", ",", 1);
      s.linkTrackVars = "prop8,prop23,eVar29,eVar15,eVar16,events";
      s.linkTrackEvents = "event15";
    }
  }
}
function s_oraSubRSS() {
  if (s.linkHandler(".xml|http://events.oracle.com/rss.jsp", "o")) {
    s.linkLeaveQueryString = true;
    s.url = s.linkHandler(".xml|http://events.oracle.com/rss.jsp", "o");
    s.eVar16 = s.url;
    s.eVar17 = s.url.substring(s.url.lastIndexOf("/") + 1, s.url.length);
    s.events = s.apl(s.events, "event16", ",", 1);
    s.linkTrackVars = "eVar16,eVar17,events";
    s.linkTrackEvents = "event16";
    s.linkLeaveQueryString = false;
  }
}
function s_sourceCampaign() {
  try {
    var isSessionSet = s_getCookieData("ora_session");
    if (!isSessionSet) {
      document.cookie = "ora_session=set; path=/; domain=.oracle.com";
      var sourceVal = s.getQueryParam("source");
      if (location.hostname === "go.oracle.com" && s.getQueryParam("src1")) {
        sourceVal = s.getQueryParam("src1");
      }
      if (sourceVal) {
        s.campaign = sourceVal;
        s.prop38 = 'D=v0+"-"+pageName';
      }
    }
    if (s.getQueryParam("SC")) {
      if (s.prop38.indexOf("D=v0") == -1) {
        s.campaign = s.getQueryParam("SC");
        s.prop38 = 'D=v0+"-"+pageName';
      }
    }
  } catch (e) {
    console.log(e);
  }
}
function s_oraCampaign() {
  if (
    s.getQueryParam("pcode") ||
    s.getQueryParam("src") ||
    s.getQueryParam("act")
  ) {
    s.eVar46 = s.getQueryParam("pcode") ? s.getQueryParam("pcode") : "";
    s.eVar46 = s.getQueryParam("Src")
      ? s.eVar46 + ":" + s.getQueryParam("Src")
      : s.eVar46;
    if (!s.getQueryParam("Src")) {
      s.eVar46 = s.getQueryParam("src")
        ? s.eVar46 + ":" + s.getQueryParam("src")
        : s.eVar46;
    }
    s.eVar46 = s.getQueryParam("Act")
      ? s.eVar46 + ":" + s.getQueryParam("Act")
      : s.eVar46;
    s.eVar46 = s.eVar46.replace(/^:/gi, "").replace(/::+/gi, ":");
  }
}
function s_oraIntCampaign() {
  s.prop39 = "D=pageName";
  if (s.getQueryParam("intcmp")) {
    s.eVar21 = s.getQueryParam("intcmp");
    s.eVar21 = s.getValOnce(s.eVar21, "s_eVar21", 0);
  }
  if (s.eVar21) {
    s.events = s.apl(s.events, "event14", ",", 2);
    s.prop39 = 'D=v21+"-"+pageName';
  }
}
function getMetaContents(mn) {
  var returnValue = "";
  var m = document.getElementsByTagName("meta");
  for (var i = 0; i < m.length; i++) {
    if (m[i].name.toLowerCase() == mn) {
      returnValue = m[i].content;
      i = m.length + 1;
    }
  }
  return returnValue;
}
function s_oraLinkHandling() {
  var dLink = s.linkHandler("download.oracle.com", "e");
  if (dLink) {
    s.linkTrackVars = "prop8";
    s.prop8 = "D=pageName";
  }
  var eLink = s.exitLinkHandler("", "true");
  if (typeof s.linkType !== "undefined" && s.linkType === "e") {
    var eLink = s.linkObject;
  }
  if (eLink) {
    if (s.pageName.indexOf("Dialogue Thanks Page") > -1) {
      s.manageVars(
        "clearVars",
        "pageName,prop8,eVar1,eVar30,eVar31,eVar40,eVar41,eVar42",
        2
      );
      s.linkTrackVars =
        "pageName,prop8,eVar1,eVar30,eVar31,eVar40,eVar41,eVar42,events";
      var eventsValue = "event34";
      var linkTrackCookie = s.c_r("ORA_EMKT_LPCLKTRK");
      var setE33 =
        linkTrackCookie == "" || s.eVar1 == "" || typeof s.eVar1 == "undefined"
          ? -1
          : true;
      if (setE33 && linkTrackCookie.indexOf(s.eVar1) == -1) {
        eventsValue += ",event33";
        s.c_w("ORA_EMKT_LPCLKTRK", linkTrackCookie + "," + s.eVar1);
      }
      s.linkTrackEvents = eventsValue;
      s.events = eventsValue;
      s.prop8 = s.pageName;
      var eLinkText = eLink.innerHTML.toString();
      eLinkText = eLinkText.replace(/&amp;/g, "&");
      if (eLinkText.indexOf("img") > -1) {
        if (eLinkText.indexOf("name") > -1) {
          eLinkText = eLinkText.substring(
            eLinkText.indexOf('name="') + 6,
            eLinkText.length
          );
          eLinkText = eLinkText.substring(0, eLinkText.indexOf('"'));
        } else {
          if (eLinkText.indexOf("alt") > -1) {
            eLinkText = eLinkText.substring(
              eLinkText.indexOf('alt="') + 5,
              eLinkText.length
            );
            eLinkText = eLinkText.substring(0, eLinkText.indexOf('"'));
          } else {
            eLinkText = eLink.href;
          }
        }
      } else {
        eLinkText = eLinkText.replace(/<\/?[^>]+(>|$)/g, "");
      }
      s.eVar30 = eLinkText;
      s.eVar31 = eLink.href;
    } else {
      s.manageVars("clearVars", "pageName,prop8", 2);
      s.linkTrackVars = "pageName,prop8";
      s.prop8 = s.pageName;
    }
  }
}
function s_setGUID() {
  if (window.aConsent) {
    return;
  }
  window.aConsent = new Array();
  window.aConsent = s_consentStatus();
  s.eVar54 = "not logged in";
  s.prop55 = "A";
  s.prop67 = window.aConsent[0] + "~" + window.aConsent[1] + "~NoCookie";
  if (window.aConsent[0] != 1) {
    var s_www_mrkt = s_getMktUserInfo();
    if (s_www_mrkt.version != -1) {
      s.prop67 = s.prop67.replace("NoCookie", "www_mrkt");
      s.prop55 = s_www_mrkt.type.toLowerCase() == "employee" ? "O" : "P";
      s.eVar54 =
        window.aConsent[0] == 3 || window.aConsent[0] == 0
          ? s_www_mrkt.guid
          : "NotSent";
    } else {
      var s_user_info = s_getUserInfo();
      if (s_user_info.version != -1) {
        s.prop67 = s.prop67.replace("NoCookie", "ucm_info");
        s.prop55 =
          s_user_info.username.toLowerCase().indexOf("@oracle") > 0 ? "O" : "P";
        s.eVar54 =
          window.aConsent[0] == 3 || window.aConsent[0] == 0
            ? s_user_info.guid
            : "NotSent";
      }
    }
  }
  s.prop54 = "D=v54";
  if (s.getQueryParam("s_debug")) {
    console.log(
      "debug:TRUSTe consent level=" +
        window.aConsent[0] +
        " :Source=" +
        window.aConsent[1]
    );
    console.log(
      "debug:s.prop54 = " +
        s.eVar54 +
        " :s.prop55 = " +
        s.prop55 +
        " :s.prop67 = " +
        s.prop67
    );
  }
}
function s_consentStatus() {
  var cStatus = new Array(-1, "NoTRUSTe");
  try {
    cStatus[0] = oracle.truste.api.getConsentDecision().consentDecision;
    cStatus[1] = oracle.truste.api.getConsentDecision().source;
  } catch (err) {
    cStatus[0] = -1;
  }
  if (cStatus[0] == -1) {
    try {
      cStatus[0] =
        truste.cma.callApi(
          "getConsent",
          "oracle.com",
          null,
          null,
          "advertising"
        ).consent == "approved"
          ? 3
          : -1;
      cStatus[1] = truste.cma.callApi(
        "getConsentDecision",
        "oracle.com"
      ).source;
      if (cStatus[0] == -1) {
        cStatus[0] =
          truste.cma.callApi(
            "getConsent",
            "oracle.com",
            null,
            null,
            "functional"
          ).consent == "approved"
            ? 2
            : -1;
        cStatus[1] = truste.cma.callApi(
          "getConsentDecision",
          "oracle.com"
        ).source;
      }
      if (cStatus[0] == -1) {
        cStatus[0] = 1;
      }
      if (cStatus[1] == "implied") {
        cStatus[0] = 0;
      }
    } catch (err) {
      cStatus[0] = -1;
    }
  }
  if (cStatus[0] == -1) {
    try {
      cStatus[0] = truste.cma.callApi(
        "getConsentDecision",
        "oracle.com"
      ).consentDecision;
      cStatus[1] = truste.cma.callApi(
        "getConsentDecision",
        "oracle.com"
      ).source;
    } catch (err) {
      cStatus[0] = -1;
    }
  }
  return cStatus;
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
function s_getCookieData(label) {
  try {
    var name = label + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return decodeURIComponent(c.substring(name.length, c.length));
      }
    }
    return "";
  } catch (e) {
    console.log(e);
    return "";
  }
}
function s_getMktUserInfo() {
  var mktUSER = new Array();
  var mkt = s_getCookieData("ORA_WWW_MRKT");
  if (mkt != "") {
    mktUSER = mkt.split("~");
    mktUSER.version = sani(mktUSER[0].substr(2, mktUSER[0].length));
    mktUSER.guid = sani(mktUSER[1].substr(2, mktUSER[1].length));
    mktUSER.type = sani(mktUSER[2].substr(2, mktUSER[2].length));
    mktUSER.cookieclass = sani(mktUSER[3].substr(2, mktUSER[3].length));
  } else {
    mktUSER.version = -1;
  }
  return mktUSER;
}
function s_getUserInfo() {
  var infoUSER = new Array();
  var infoU = s_getCookieData("ORA_UCM_INFO");
  if (infoU != "") {
    infoUSER = infoU.split("~");
    infoUSER.version = sani(infoUSER[0]);
    infoUSER.guid = sani(infoUSER[1]);
    infoUSER.username = sani(infoUSER[4]);
  } else {
    infoUSER.version = -1;
  }
  return infoUSER;
}
function s_setEloquaCookieInfo() {
  var eloquaCookie = s_getCookieData("ELOQUA");
  if (eloquaCookie != "") {
    eloquaCookie = eloquaCookie.split("&");
    s.eVar64 = sani(eloquaCookie[0].split("=")[1]);
    s.prop64 = "D=v64";
  }
}
function s_setAdobePlugins() {
  s.getQueryParam = new Function(
    "p",
    "d",
    "u",
    "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v"
  );
  s.p_gpv = new Function(
    "k",
    "u",
    "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v"
  );
  s.p_gvf = new Function(
    "t",
    "k",
    "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''"
  );
  s.getValOnce = new Function(
    "v",
    "c",
    "e",
    "t",
    "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"
  );
  s.getNewRepeat = new Function(
    "d",
    "cn",
    "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"
  );
  s.getPreviousValue = new Function(
    "v",
    "c",
    "el",
    "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
  );
  s.apl = new Function(
    "L",
    "v",
    "d",
    "u",
    "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"
  );
  s.downloadLinkHandler = new Function(
    "p",
    "e",
    "var s=this,o=s.p_gh(),h=o.href,n='linkDownloadFileTypes',i,t;if(!h||(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n]=p?p:t;if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return e?o:h;"
  );
  s.exitLinkHandler = new Function(
    "p",
    "e",
    "var s=this,o=s.p_gh(),h=o.href,n='linkInternalFilters',i,t;if(!h||(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.linkType='e';else h='';s[n]=t;return e?o:h;"
  );
  s.linkHandler = new Function(
    "p",
    "t",
    "e",
    "var s=this,o=s.p_gh(),h=o.href,i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkName=l=='[['?'':l;s.linkType=t;return e?o:h;}return'';"
  );
  s.p_gh = new Function(
    "",
    "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';"
  );
  s.p_gn = new Function(
    "t",
    "h",
    "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}return 0;"
  );
  s.split = new Function(
    "l",
    "d",
    "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"
  );
  s.getAndPersistValue = new Function(
    "v",
    "c",
    "e",
    "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);"
  );
  s.manageVars = function (c, l, f) {
    var s = this,
      vl,
      la,
      vla;
    l = l ? l : "";
    f = f ? f : 1;
    if (!s[c]) {
      return false;
    }
    vl =
      "pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID";
    for (var n = 1; n < 76; n++) {
      vl += ",prop" + n;
    }
    for (var n = 1; n < 251; n++) {
      vl += ",eVar" + n;
    }
    for (n = 1; n < 6; n++) {
      vl += ",hier" + n;
    }
    for (n = 1; n < 4; n++) {
      vl += ",list" + n;
    }
    for (n in s.contextData) {
      vl += ",contextData." + n;
    }
    if (l && (f == 1 || f == 2)) {
      if (f == 1) {
        vl = l.replace("['", ".").replace("']", "");
      }
      if (f == 2) {
        la = l.split(",");
        vla = vl.split(",");
        vl = "";
        for (x in la) {
          if (la[x].indexOf("contextData") > -1) {
            lax = la[x].split("'");
            la[x] = "contextData." + lax[1];
          }
          for (y in vla) {
            if (la[x] == vla[y]) {
              vla[y] = "";
            }
          }
        }
        for (y in vla) {
          vl += vla[y] ? "," + vla[y] : "";
        }
      }
      s.pt(vl, ",", c, 0);
      return true;
    } else {
      if (l == "" && f == 1) {
        s.pt(vl, ",", c, 0);
        return true;
      } else {
        return false;
      }
    }
  };
  s.clearVars = function (t) {
    var s = this;
    if (t.indexOf("contextData") == -1) {
      s[t] = "";
    } else {
      if (t.indexOf("contextData") > -1) {
        var c = t.substring(t.indexOf(".") + 1);
        s.contextData[c] = "";
      }
    }
  };
  s.lowercaseVars = function (t) {
    var s = this;
    if (t != "events" && t.indexOf("contextData") == -1 && s[t]) {
      s[t] = s[t].toString();
      if (s[t].indexOf("D=") != 0) {
        s[t] = s[t].toLowerCase();
      }
    } else {
      if (t.indexOf("contextData") > -1) {
        var c = t.substring(t.indexOf(".") + 1);
        if (s.contextData[c]) {
          s.contextData[c] = s.contextData[c].toString();
          s.contextData[c] = s.contextData[c].toLowerCase();
        }
      }
    }
  };
  s.wd = window;
  s.fl = new Function("x", "l", "return x?(''+x).substring(0,l):x");
  s.pt = new Function(
    "x",
    "d",
    "f",
    "a",
    "var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.substring(z,x[l]);t=z<x[l]?t:''}return''"
  );
  s.rep = new Function(
    "x",
    "o",
    "n",
    "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x"
  );
  s.ape = new Function(
    "x",
    "var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x"
  );
  s.epa = new Function(
    "x",
    "var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y"
  );
  s.parseUri = new Function(
    "u",
    "if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.createElement('a'),l=['href','protocol','host','hostname','port','pathname','search','hash'],p,r={href:u,toString:function(){return this.href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathname='/'+p;return r"
  );
  s.gtfs = new Function(
    "var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.protocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?d.referrer:d.location;return{location:s.parseUri(u)}"
  );
}
function AppMeasurement_Module_ActivityMap(f) {
  function g(a, d) {
    var b, c, n;
    if (a && d && (b = e.c[d] || (e.c[d] = d.split(",")))) {
      for (n = 0; n < b.length && (c = b[n++]); ) {
        if (-1 < a.indexOf(c)) {
          return null;
        }
      }
    }
    p = 1;
    return a;
  }
  function q(a, d, b, c, e) {
    var g, h;
    if (a.dataset && (h = a.dataset[d])) {
      g = h;
    } else {
      if (a.getAttribute) {
        if ((h = a.getAttribute("data-" + b))) {
          g = h;
        } else {
          if ((h = a.getAttribute(b))) {
            g = h;
          }
        }
      }
    }
    if (
      !g &&
      f.useForcedLinkTracking &&
      e &&
      ((g = ""), (d = a.onclick ? "" + a.onclick : ""))
    ) {
      b = d.indexOf(c);
      var l, k;
      if (0 <= b) {
        for (b += 10; b < d.length && 0 <= "= \t\r\n".indexOf(d.charAt(b)); ) {
          b++;
        }
        if (b < d.length) {
          h = b;
          for (l = k = 0; h < d.length && (";" != d.charAt(h) || l); ) {
            l
              ? d.charAt(h) != l || k
                ? (k = "\\" == d.charAt(h) ? !k : 0)
                : (l = 0)
              : ((l = d.charAt(h)), '"' != l && "'" != l && (l = 0)),
              h++;
          }
          if ((d = d.substring(b, h))) {
            (a.e = new Function(
              "s",
              "var e;try{s.w." + c + "=" + d + "}catch(e){}"
            )),
              a.e(f);
          }
        }
      }
    }
    return g || (e && f.w[c]);
  }
  function r(a, d, b) {
    var c;
    return (
      (c = e[d](a, b)) && (p ? ((p = 0), c) : g(k(c), e[d + "Exclusions"]))
    );
  }
  function s(a, d, b) {
    var c;
    if (
      a &&
      !(
        1 === (c = a.nodeType) &&
        (c = a.nodeName) &&
        (c = c.toUpperCase()) &&
        t[c]
      ) &&
      (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c),
      b.a ||
        b.t ||
        b.s ||
        !a.getAttribute ||
        ((c = a.getAttribute("alt"))
          ? (b.a = c)
          : (c = a.getAttribute("title"))
          ? (b.t = c)
          : "IMG" == ("" + a.nodeName).toUpperCase() &&
            (c = a.getAttribute("src") || a.src) &&
            (b.s = c)),
      (c = a.childNodes) && c.length)
    ) {
      for (a = 0; a < c.length; a++) {
        s(c[a], d, b);
      }
    }
  }
  function k(a) {
    if (null == a || void 0 == a) {
      return a;
    }
    try {
      return a
        .replace(
          RegExp(
            "^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+",
            "mg"
          ),
          ""
        )
        .replace(
          RegExp(
            "[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
            "mg"
          ),
          ""
        )
        .replace(
          RegExp(
            "[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}",
            "mg"
          ),
          " "
        )
        .substring(0, 254);
    } catch (d) {}
  }
  var e = this;
  e.s = f;
  var m = window;
  m.s_c_in || ((m.s_c_il = []), (m.s_c_in = 0));
  e._il = m.s_c_il;
  e._in = m.s_c_in;
  e._il[e._in] = e;
  m.s_c_in++;
  e._c = "s_m";
  e.c = {};
  var p = 0,
    t = { SCRIPT: 1, STYLE: 1, LINK: 1, CANVAS: 1 };
  e._g = function () {
    var a,
      d,
      b,
      c = f.contextData,
      e = f.linkObject;
    (a = f.pageName || f.pageURL) &&
      (d = r(e, "link", f.linkName)) &&
      (b = r(e, "region")) &&
      ((c["a.activitymap.page"] = a.substring(0, 255)),
      (c["a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d),
      (c["a.activitymap.region"] = 127 < b.length ? b.substring(0, 127) : b),
      (c["a.activitymap.pageIDType"] = f.pageName ? 1 : 0));
  };
  e.link = function (a, d) {
    var b;
    if (d) {
      b = g(k(d), e.linkExclusions);
    } else {
      if ((b = a) && !(b = q(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
        var c, f;
        (f = g(k(a.innerText || a.textContent), e.linkExclusions)) ||
          (s(a, (c = []), (b = { a: void 0, t: void 0, s: void 0 })),
          (f = g(k(c.join("")))) ||
            (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) ||
            !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : "") ||
            ("INPUT" == c || ("SUBMIT" == c && a.value)
              ? (f = g(k(a.value)))
              : "IMAGE" == c && a.src && (f = g(k(a.src)))));
        b = f;
      }
    }
    return b;
  };
  e.region = function (a) {
    var nodeClass = a.className;
    for (var d, b = e.regionIDAttribute || "id"; a && (a = a.parentNode); ) {
      if (nodeClass == "") {
        nodeClass = a.className;
      }
      if ((d = q(a, b, b, b))) {
        return d;
      }
      if ("BODY" == a.nodeName) {
        return nodeClass;
      }
    }
  };
}
function AppMeasurement(r) {
  var a = this;
  a.version = "2.6.0";
  var k = window;
  k.s_c_in || ((k.s_c_il = []), (k.s_c_in = 0));
  a._il = k.s_c_il;
  a._in = k.s_c_in;
  a._il[a._in] = a;
  k.s_c_in++;
  a._c = "s_c";
  var p = k.AppMeasurement.Pb;
  p || (p = null);
  var n = k,
    m,
    s;
  try {
    for (
      m = n.parent, s = n.location;
      m &&
      m.location &&
      s &&
      "" + m.location != "" + s &&
      n.location &&
      "" + m.location != "" + n.location &&
      m.location.host == s.host;

    ) {
      (n = m), (m = n.parent);
    }
  } catch (u) {}
  a.F = function (a) {
    try {
      console.log(a);
    } catch (b) {}
  };
  a.Ma = function (a) {
    return "" + parseInt(a) == "" + a;
  };
  a.replace = function (a, b, d) {
    return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d);
  };
  a.escape = function (c) {
    var b, d;
    if (!c) {
      return c;
    }
    c = encodeURIComponent(c);
    for (b = 0; 7 > b; b++) {
      (d = "+~!*()'".substring(b, b + 1)),
        0 <= c.indexOf(d) &&
          (c = a.replace(
            c,
            d,
            "%" + d.charCodeAt(0).toString(16).toUpperCase()
          ));
    }
    return c;
  };
  a.unescape = function (c) {
    if (!c) {
      return c;
    }
    c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
    try {
      return decodeURIComponent(c);
    } catch (b) {}
    return unescape(c);
  };
  a.wb = function () {
    var c = k.location.hostname,
      b = a.fpCookieDomainPeriods,
      d;
    b || (b = a.cookieDomainPeriods);
    if (
      c &&
      !a.Ea &&
      !/^[0-9.]+$/.test(c) &&
      ((b = b ? parseInt(b) : 2),
      (b = 2 < b ? b : 2),
      (d = c.lastIndexOf(".")),
      0 <= d)
    ) {
      for (; 0 <= d && 1 < b; ) {
        (d = c.lastIndexOf(".", d - 1)), b--;
      }
      a.Ea = 0 < d ? c.substring(d) : c;
    }
    return a.Ea;
  };
  a.c_r = a.cookieRead = function (c) {
    c = a.escape(c);
    var b = " " + a.d.cookie,
      d = b.indexOf(" " + c + "="),
      f = 0 > d ? d : b.indexOf(";", d);
    c =
      0 > d
        ? ""
        : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
    return "[[B]]" != c ? c : "";
  };
  a.c_w = a.cookieWrite = function (c, b, d) {
    var f = a.wb(),
      e = a.cookieLifetime,
      g;
    b = "" + b;
    e = e ? ("" + e).toUpperCase() : "";
    d &&
      "SESSION" != e &&
      "NONE" != e &&
      ((g = "" != b ? parseInt(e ? e : 0) : -60)
        ? ((d = new Date()), d.setTime(d.getTime() + 1000 * g))
        : 1 == d &&
          ((d = new Date()),
          (g = d.getYear()),
          d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
    return c && "NONE" != e
      ? ((a.d.cookie =
          a.escape(c) +
          "=" +
          a.escape("" != b ? b : "[[B]]") +
          "; path=/;" +
          (d && "SESSION" != e ? " expires=" + d.toUTCString() + ";" : "") +
          (f ? " domain=" + f + ";" : "")),
        a.cookieRead(c) == b)
      : 0;
  };
  a.L = [];
  a.ia = function (c, b, d) {
    if (a.Fa) {
      return 0;
    }
    a.maxDelay || (a.maxDelay = 250);
    var f = 0,
      e = new Date().getTime() + a.maxDelay,
      g = a.d.visibilityState,
      h = ["webkitvisibilitychange", "visibilitychange"];
    g || (g = a.d.webkitVisibilityState);
    if (g && "prerender" == g) {
      if (!a.ja) {
        for (a.ja = 1, d = 0; d < h.length; d++) {
          a.d.addEventListener(h[d], function () {
            var c = a.d.visibilityState;
            c || (c = a.d.webkitVisibilityState);
            "visible" == c && ((a.ja = 0), a.delayReady());
          });
        }
      }
      f = 1;
      e = 0;
    } else {
      d || (a.p("_d") && (f = 1));
    }
    f &&
      (a.L.push({ m: c, a: b, t: e }),
      a.ja || setTimeout(a.delayReady, a.maxDelay));
    return f;
  };
  a.delayReady = function () {
    var c = new Date().getTime(),
      b = 0,
      d;
    for (a.p("_d") ? (b = 1) : a.xa(); 0 < a.L.length; ) {
      d = a.L.shift();
      if (b && !d.t && d.t > c) {
        a.L.unshift(d);
        setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
        break;
      }
      a.Fa = 1;
      a[d.m].apply(a, d.a);
      a.Fa = 0;
    }
  };
  a.setAccount = a.sa = function (c) {
    var b, d;
    if (!a.ia("setAccount", arguments)) {
      if (((a.account = c), a.allAccounts)) {
        for (
          b = a.allAccounts.concat(c.split(",")),
            a.allAccounts = [],
            b.sort(),
            d = 0;
          d < b.length;
          d++
        ) {
          (0 != d && b[d - 1] == b[d]) || a.allAccounts.push(b[d]);
        }
      } else {
        a.allAccounts = c.split(",");
      }
    }
  };
  a.foreachVar = function (c, b) {
    var d,
      f,
      e,
      g,
      h = "";
    e = f = "";
    if (a.lightProfileID) {
      (d = a.P),
        (h = a.lightTrackVars) && (h = "," + h + "," + a.na.join(",") + ",");
    } else {
      d = a.g;
      if (a.pe || a.linkType) {
        (h = a.linkTrackVars),
          (f = a.linkTrackEvents),
          a.pe &&
            ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
            a[e] && ((h = a[e].Nb), (f = a[e].Mb)));
      }
      h && (h = "," + h + "," + a.H.join(",") + ",");
      f && h && (h += ",events,");
    }
    b && (b = "," + b + ",");
    for (f = 0; f < d.length; f++) {
      (e = d[f]),
        (g = a[e]) &&
          (!h || 0 <= h.indexOf("," + e + ",")) &&
          (!b || 0 <= b.indexOf("," + e + ",")) &&
          c(e, g);
    }
  };
  a.r = function (c, b, d, f, e) {
    var g = "",
      h,
      l,
      k,
      q,
      m = 0;
    "contextData" == c && (c = "c");
    if (b) {
      for (h in b) {
        if (
          !(Object.prototype[h] || (e && h.substring(0, e.length) != e)) &&
          b[h] &&
          (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + h + ","))
        ) {
          k = !1;
          if (m) {
            for (l = 0; l < m.length; l++) {
              h.substring(0, m[l].length) == m[l] && (k = !0);
            }
          }
          if (
            !k &&
            ("" == g && (g += "&" + c + "."),
            (l = b[h]),
            e && (h = h.substring(e.length)),
            0 < h.length)
          ) {
            if (((k = h.indexOf(".")), 0 < k)) {
              (l = h.substring(0, k)),
                (k = (e ? e : "") + l + "."),
                m || (m = []),
                m.push(k),
                (g += a.r(l, b, d, f, k));
            } else {
              if (("boolean" == typeof l && (l = l ? "true" : "false"), l)) {
                if (
                  "retrieveLightData" == f &&
                  0 > e.indexOf(".contextData.")
                ) {
                  switch (((k = h.substring(0, 4)), (q = h.substring(4)), h)) {
                    case "transactionID":
                      h = "xact";
                      break;
                    case "channel":
                      h = "ch";
                      break;
                    case "campaign":
                      h = "v0";
                      break;
                    default:
                      a.Ma(q) &&
                        ("prop" == k
                          ? (h = "c" + q)
                          : "eVar" == k
                          ? (h = "v" + q)
                          : "list" == k
                          ? (h = "l" + q)
                          : "hier" == k &&
                            ((h = "h" + q), (l = l.substring(0, 255))));
                  }
                }
                g += "&" + a.escape(h) + "=" + a.escape(l);
              }
            }
          }
        }
      }
      "" != g && (g += "&." + c);
    }
    return g;
  };
  a.usePostbacks = 0;
  a.zb = function () {
    var c = "",
      b,
      d,
      f,
      e,
      g,
      h,
      l,
      k,
      q = "",
      m = "",
      n = (e = "");
    if (a.lightProfileID) {
      (b = a.P),
        (q = a.lightTrackVars) && (q = "," + q + "," + a.na.join(",") + ",");
    } else {
      b = a.g;
      if (a.pe || a.linkType) {
        (q = a.linkTrackVars),
          (m = a.linkTrackEvents),
          a.pe &&
            ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
            a[e] && ((q = a[e].Nb), (m = a[e].Mb)));
      }
      q && (q = "," + q + "," + a.H.join(",") + ",");
      m && ((m = "," + m + ","), q && (q += ",events,"));
      a.events2 && (n += ("" != n ? "," : "") + a.events2);
    }
    if (a.visitor && a.visitor.getCustomerIDs) {
      e = p;
      if ((g = a.visitor.getCustomerIDs())) {
        for (d in g) {
          Object.prototype[d] ||
            ((f = g[d]),
            "object" == typeof f &&
              (e || (e = {}),
              f.id && (e[d + ".id"] = f.id),
              f.authState && (e[d + ".as"] = f.authState)));
        }
      }
      e && (c += a.r("cid", e));
    }
    a.AudienceManagement &&
      a.AudienceManagement.isReady() &&
      (c += a.r("d", a.AudienceManagement.getEventCallConfigParams()));
    for (d = 0; d < b.length; d++) {
      e = b[d];
      g = a[e];
      f = e.substring(0, 4);
      h = e.substring(4);
      g ||
        ("events" == e && n
          ? ((g = n), (n = ""))
          : "marketingCloudOrgID" == e &&
            a.visitor &&
            (g = a.visitor.marketingCloudOrgID));
      if (g && (!q || 0 <= q.indexOf("," + e + ","))) {
        switch (e) {
          case "customerPerspective":
            e = "cp";
            break;
          case "marketingCloudOrgID":
            e = "mcorgid";
            break;
          case "supplementalDataID":
            e = "sdid";
            break;
          case "timestamp":
            e = "ts";
            break;
          case "dynamicVariablePrefix":
            e = "D";
            break;
          case "visitorID":
            e = "vid";
            break;
          case "marketingCloudVisitorID":
            e = "mid";
            break;
          case "analyticsVisitorID":
            e = "aid";
            break;
          case "audienceManagerLocationHint":
            e = "aamlh";
            break;
          case "audienceManagerBlob":
            e = "aamb";
            break;
          case "authState":
            e = "as";
            break;
          case "pageURL":
            e = "g";
            255 < g.length &&
              ((a.pageURLRest = g.substring(255)), (g = g.substring(0, 255)));
            break;
          case "pageURLRest":
            e = "-g";
            break;
          case "referrer":
            e = "r";
            break;
          case "vmk":
          case "visitorMigrationKey":
            e = "vmt";
            break;
          case "visitorMigrationServer":
            e = "vmf";
            a.ssl && a.visitorMigrationServerSecure && (g = "");
            break;
          case "visitorMigrationServerSecure":
            e = "vmf";
            !a.ssl && a.visitorMigrationServer && (g = "");
            break;
          case "charSet":
            e = "ce";
            break;
          case "visitorNamespace":
            e = "ns";
            break;
          case "cookieDomainPeriods":
            e = "cdp";
            break;
          case "cookieLifetime":
            e = "cl";
            break;
          case "variableProvider":
            e = "vvp";
            break;
          case "currencyCode":
            e = "cc";
            break;
          case "channel":
            e = "ch";
            break;
          case "transactionID":
            e = "xact";
            break;
          case "campaign":
            e = "v0";
            break;
          case "latitude":
            e = "lat";
            break;
          case "longitude":
            e = "lon";
            break;
          case "resolution":
            e = "s";
            break;
          case "colorDepth":
            e = "c";
            break;
          case "javascriptVersion":
            e = "j";
            break;
          case "javaEnabled":
            e = "v";
            break;
          case "cookiesEnabled":
            e = "k";
            break;
          case "browserWidth":
            e = "bw";
            break;
          case "browserHeight":
            e = "bh";
            break;
          case "connectionType":
            e = "ct";
            break;
          case "homepage":
            e = "hp";
            break;
          case "events":
            n && (g += ("" != g ? "," : "") + n);
            if (m) {
              for (h = g.split(","), g = "", f = 0; f < h.length; f++) {
                (l = h[f]),
                  (k = l.indexOf("=")),
                  0 <= k && (l = l.substring(0, k)),
                  (k = l.indexOf(":")),
                  0 <= k && (l = l.substring(0, k)),
                  0 <= m.indexOf("," + l + ",") && (g += (g ? "," : "") + h[f]);
              }
            }
            break;
          case "events2":
            g = "";
            break;
          case "contextData":
            c += a.r("c", a[e], q, e);
            g = "";
            break;
          case "lightProfileID":
            e = "mtp";
            break;
          case "lightStoreForSeconds":
            e = "mtss";
            a.lightProfileID || (g = "");
            break;
          case "lightIncrementBy":
            e = "mti";
            a.lightProfileID || (g = "");
            break;
          case "retrieveLightProfiles":
            e = "mtsr";
            break;
          case "deleteLightProfiles":
            e = "mtsd";
            break;
          case "retrieveLightData":
            a.retrieveLightProfiles && (c += a.r("mts", a[e], q, e));
            g = "";
            break;
          default:
            a.Ma(h) &&
              ("prop" == f
                ? (e = "c" + h)
                : "eVar" == f
                ? (e = "v" + h)
                : "list" == f
                ? (e = "l" + h)
                : "hier" == f && ((e = "h" + h), (g = g.substring(0, 255))));
        }
        g &&
          (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g));
      }
      "pev3" == e && a.e && (c += a.e);
    }
    return c;
  };
  a.D = function (a) {
    var b = a.tagName;
    if (
      "undefined" != "" + a.Sb ||
      ("undefined" != "" + a.Ib && "HTML" != ("" + a.Ib).toUpperCase())
    ) {
      return "";
    }
    b = b && b.toUpperCase ? b.toUpperCase() : "";
    "SHAPE" == b && (b = "");
    b &&
      (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase
        ? (b = a.type.toUpperCase())
        : !b && a.href && (b = "A"));
    return b;
  };
  a.Ia = function (a) {
    var b = k.location,
      d = a.href ? a.href : "",
      f,
      e,
      g;
    f = d.indexOf(":");
    e = d.indexOf("?");
    g = d.indexOf("/");
    d &&
      (0 > f || (0 <= e && f > e) || (0 <= g && f > g)) &&
      ((e =
        a.protocol && 1 < a.protocol.length
          ? a.protocol
          : b.protocol
          ? b.protocol
          : ""),
      (f = b.pathname.lastIndexOf("/")),
      (d =
        (e ? e + "//" : "") +
        (a.host ? a.host : b.host ? b.host : "") +
        ("/" != d.substring(0, 1)
          ? b.pathname.substring(0, 0 > f ? 0 : f) + "/"
          : "") +
        d));
    return d;
  };
  a.M = function (c) {
    var b = a.D(c),
      d,
      f,
      e = "",
      g = 0;
    return b &&
      ((d = c.protocol),
      (f = c.onclick),
      !c.href ||
      ("A" != b && "AREA" != b) ||
      (f && d && !(0 > d.toLowerCase().indexOf("javascript")))
        ? f
          ? ((e = a.replace(
              a.replace(
                a.replace(a.replace("" + f, "\r", ""), "\n", ""),
                "\t",
                ""
              ),
              " ",
              ""
            )),
            (g = 2))
          : "INPUT" == b || "SUBMIT" == b
          ? (c.value
              ? (e = c.value)
              : c.innerText
              ? (e = c.innerText)
              : c.textContent && (e = c.textContent),
            (g = 3))
          : "IMAGE" == b && c.src && (e = c.src)
        : (e = a.Ia(c)),
      e)
      ? { id: e.substring(0, 100), type: g }
      : 0;
  };
  a.Qb = function (c) {
    for (var b = a.D(c), d = a.M(c); c && !d && "BODY" != b; ) {
      if ((c = c.parentElement ? c.parentElement : c.parentNode)) {
        (b = a.D(c)), (d = a.M(c));
      }
    }
    (d && "BODY" != b) || (c = 0);
    c &&
      ((b = c.onclick ? "" + c.onclick : ""),
      0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) &&
      (c = 0);
    return c;
  };
  a.Hb = function () {
    var c,
      b,
      d = a.linkObject,
      f = a.linkType,
      e = a.linkURL,
      g,
      h;
    a.oa = 1;
    d || ((a.oa = 0), (d = a.clickObject));
    if (d) {
      c = a.D(d);
      for (b = a.M(d); d && !b && "BODY" != c; ) {
        if ((d = d.parentElement ? d.parentElement : d.parentNode)) {
          (c = a.D(d)), (b = a.M(d));
        }
      }
      (b && "BODY" != c) || (d = 0);
      if (d && !a.linkObject) {
        var l = d.onclick ? "" + d.onclick : "";
        if (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) {
          d = 0;
        }
      }
    } else {
      a.oa = 1;
    }
    !e && d && (e = a.Ia(d));
    e &&
      !a.linkLeaveQueryString &&
      ((g = e.indexOf("?")), 0 <= g && (e = e.substring(0, g)));
    if (!f && e) {
      var m = 0,
        q = 0,
        n;
      if (a.trackDownloadLinks && a.linkDownloadFileTypes) {
        for (
          l = e.toLowerCase(),
            g = l.indexOf("?"),
            h = l.indexOf("#"),
            0 <= g ? 0 <= h && h < g && (g = h) : (g = h),
            0 <= g && (l = l.substring(0, g)),
            g = a.linkDownloadFileTypes.toLowerCase().split(","),
            h = 0;
          h < g.length;
          h++
        ) {
          (n = g[h]) &&
            l.substring(l.length - (n.length + 1)) == "." + n &&
            (f = "d");
        }
      }
      if (
        a.trackExternalLinks &&
        !f &&
        ((l = e.toLowerCase()),
        a.La(l) &&
          (a.linkInternalFilters ||
            (a.linkInternalFilters = k.location.hostname),
          (g = 0),
          a.linkExternalFilters
            ? ((g = a.linkExternalFilters.toLowerCase().split(",")), (m = 1))
            : a.linkInternalFilters &&
              (g = a.linkInternalFilters.toLowerCase().split(",")),
          g))
      ) {
        for (h = 0; h < g.length; h++) {
          (n = g[h]), 0 <= l.indexOf(n) && (q = 1);
        }
        q ? m && (f = "e") : m || (f = "e");
      }
    }
    a.linkObject = d;
    a.linkURL = e;
    a.linkType = f;
    if (a.trackClickMap || a.trackInlineStats) {
      (a.e = ""),
        d &&
          ((f = a.pageName),
          (e = 1),
          (d = d.sourceIndex),
          f || ((f = a.pageURL), (e = 0)),
          k.s_objectID && ((b.id = k.s_objectID), (d = b.type = 1)),
          f &&
            b &&
            b.id &&
            c &&
            (a.e =
              "&pid=" +
              a.escape(f.substring(0, 255)) +
              (e ? "&pidt=" + e : "") +
              "&oid=" +
              a.escape(b.id.substring(0, 100)) +
              (b.type ? "&oidt=" + b.type : "") +
              "&ot=" +
              c +
              (d ? "&oi=" + d : "")));
    }
  };
  a.Ab = function () {
    var c = a.oa,
      b = a.linkType,
      d = a.linkURL,
      f = a.linkName;
    b &&
      (d || f) &&
      ((b = b.toLowerCase()),
      "d" != b && "e" != b && (b = "o"),
      (a.pe = "lnk_" + b),
      (a.pev1 = d ? a.escape(d) : ""),
      (a.pev2 = f ? a.escape(f) : ""),
      (c = 1));
    a.abort && (c = 0);
    if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
      var b = {},
        d = 0,
        e = a.cookieRead("s_sq"),
        g = e ? e.split("&") : 0,
        h,
        l,
        k,
        e = 0;
      if (g) {
        for (h = 0; h < g.length; h++) {
          (l = g[h].split("=")),
            (f = a.unescape(l[0]).split(",")),
            (l = a.unescape(l[1])),
            (b[l] = f);
        }
      }
      f = a.account.split(",");
      h = {};
      for (k in a.contextData) {
        k &&
          !Object.prototype[k] &&
          "a.activitymap." == k.substring(0, 14) &&
          ((h[k] = a.contextData[k]), (a.contextData[k] = ""));
      }
      a.e = a.r("c", h) + (a.e ? a.e : "");
      if (c || a.e) {
        c && !a.e && (e = 1);
        for (l in b) {
          if (!Object.prototype[l]) {
            for (k = 0; k < f.length; k++) {
              for (
                e &&
                  ((g = b[l].join(",")),
                  g == a.account &&
                    ((a.e += ("&" != l.charAt(0) ? "&" : "") + l),
                    (b[l] = []),
                    (d = 1))),
                  h = 0;
                h < b[l].length;
                h++
              ) {
                (g = b[l][h]),
                  g == f[k] &&
                    (e &&
                      (a.e +=
                        "&u=" +
                        a.escape(g) +
                        ("&" != l.charAt(0) ? "&" : "") +
                        l +
                        "&u=0"),
                    b[l].splice(h, 1),
                    (d = 1));
              }
            }
          }
        }
        c || (d = 1);
        if (d) {
          e = "";
          h = 2;
          !c &&
            a.e &&
            ((e = a.escape(f.join(",")) + "=" + a.escape(a.e)), (h = 1));
          for (l in b) {
            !Object.prototype[l] &&
              0 < h &&
              0 < b[l].length &&
              ((e +=
                (e ? "&" : "") + a.escape(b[l].join(",")) + "=" + a.escape(l)),
              h--);
          }
          a.cookieWrite("s_sq", e);
        }
      }
    }
    return c;
  };
  a.Bb = function () {
    if (!a.Lb) {
      var c = new Date(),
        b = n.location,
        d,
        f,
        e = (f = d = ""),
        g = "",
        h = "",
        l = "1.2",
        k = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
        m = "",
        p = "";
      if (
        c.setUTCDate &&
        ((l = "1.3"), (0).toPrecision && ((l = "1.5"), (c = []), c.forEach))
      ) {
        l = "1.6";
        f = 0;
        d = {};
        try {
          (f = new Iterator(d)),
            f.next &&
              ((l = "1.7"),
              c.reduce &&
                ((l = "1.8"),
                l.trim &&
                  ((l = "1.8.1"),
                  Date.parse &&
                    ((l = "1.8.2"), Object.create && (l = "1.8.5")))));
        } catch (r) {}
      }
      d = screen.width + "x" + screen.height;
      e = navigator.javaEnabled() ? "Y" : "N";
      f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
      g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
      h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
      try {
        a.b.addBehavior("#default#homePage"), (m = a.b.Rb(b) ? "Y" : "N");
      } catch (s) {}
      try {
        a.b.addBehavior("#default#clientCaps"), (p = a.b.connectionType);
      } catch (t) {}
      a.resolution = d;
      a.colorDepth = f;
      a.javascriptVersion = l;
      a.javaEnabled = e;
      a.cookiesEnabled = k;
      a.browserWidth = g;
      a.browserHeight = h;
      a.connectionType = p;
      a.homepage = m;
      a.Lb = 1;
    }
  };
  a.Q = {};
  a.loadModule = function (c, b) {
    var d = a.Q[c];
    if (!d) {
      d = k["AppMeasurement_Module_" + c]
        ? new k["AppMeasurement_Module_" + c](a)
        : {};
      a.Q[c] = a[c] = d;
      d.eb = function () {
        return d.ib;
      };
      d.jb = function (b) {
        if ((d.ib = b)) {
          (a[c + "_onLoad"] = b), a.ia(c + "_onLoad", [a, d], 1) || b(a, d);
        }
      };
      try {
        Object.defineProperty
          ? Object.defineProperty(d, "onLoad", { get: d.eb, set: d.jb })
          : (d._olc = 1);
      } catch (f) {
        d._olc = 1;
      }
    }
    b && ((a[c + "_onLoad"] = b), a.ia(c + "_onLoad", [a, d], 1) || b(a, d));
  };
  a.p = function (c) {
    var b, d;
    for (b in a.Q) {
      if (
        !Object.prototype[b] &&
        (d = a.Q[b]) &&
        (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(a, d)), d[c] && d[c]())
      ) {
        return 1;
      }
    }
    return 0;
  };
  a.Db = function () {
    var c = Math.floor(10000000000000 * Math.random()),
      b = a.visitorSampling,
      d = a.visitorSamplingGroup,
      d =
        "s_vsn_" +
        (a.visitorNamespace ? a.visitorNamespace : a.account) +
        (d ? "_" + d : ""),
      f = a.cookieRead(d);
    if (b) {
      b *= 100;
      f && (f = parseInt(f));
      if (!f) {
        if (!a.cookieWrite(d, c)) {
          return 0;
        }
        f = c;
      }
      if (f % 10000 > b) {
        return 0;
      }
    }
    return 1;
  };
  a.R = function (c, b) {
    var d, f, e, g, h, l;
    for (d = 0; 2 > d; d++) {
      for (f = 0 < d ? a.Aa : a.g, e = 0; e < f.length; e++) {
        if (((g = f[e]), (h = c[g]) || c["!" + g])) {
          if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g]) {
            for (l in a[g]) {
              h[l] || (h[l] = a[g][l]);
            }
          }
          a[g] = h;
        }
      }
    }
  };
  a.Va = function (c, b) {
    var d, f, e, g;
    for (d = 0; 2 > d; d++) {
      for (f = 0 < d ? a.Aa : a.g, e = 0; e < f.length; e++) {
        (g = f[e]), (c[g] = a[g]), b || c[g] || (c["!" + g] = 1);
      }
    }
  };
  a.vb = function (a) {
    var b,
      d,
      f,
      e,
      g,
      h = 0,
      l,
      k = "",
      m = "";
    if (
      a &&
      255 < a.length &&
      ((b = "" + a),
      (d = b.indexOf("?")),
      0 < d &&
        ((l = b.substring(d + 1)),
        (b = b.substring(0, d)),
        (e = b.toLowerCase()),
        (f = 0),
        "http://" == e.substring(0, 7)
          ? (f += 7)
          : "https://" == e.substring(0, 8) && (f += 8),
        (d = e.indexOf("/", f)),
        0 < d &&
          ((e = e.substring(f, d)),
          (g = b.substring(d)),
          (b = b.substring(0, d)),
          0 <= e.indexOf("google")
            ? (h = ",q,ie,start,search_key,word,kw,cd,")
            : 0 <= e.indexOf("yahoo.co") && (h = ",p,ei,"),
          h && l)))
    ) {
      if ((a = l.split("&")) && 1 < a.length) {
        for (f = 0; f < a.length; f++) {
          (e = a[f]),
            (d = e.indexOf("=")),
            0 < d && 0 <= h.indexOf("," + e.substring(0, d) + ",")
              ? (k += (k ? "&" : "") + e)
              : (m += (m ? "&" : "") + e);
        }
        k && m ? (l = k + "&" + m) : (m = "");
      }
      d = 253 - (l.length - m.length) - b.length;
      a = b + (0 < d ? g.substring(0, d) : "") + "?" + l;
    }
    return a;
  };
  a.ab = function (c) {
    var b = a.d.visibilityState,
      d = ["webkitvisibilitychange", "visibilitychange"];
    b || (b = a.d.webkitVisibilityState);
    if (b && "prerender" == b) {
      if (c) {
        for (b = 0; b < d.length; b++) {
          a.d.addEventListener(d[b], function () {
            var b = a.d.visibilityState;
            b || (b = a.d.webkitVisibilityState);
            "visible" == b && c();
          });
        }
      }
      return !1;
    }
    return !0;
  };
  a.ea = !1;
  a.J = !1;
  a.lb = function () {
    a.J = !0;
    a.j();
  };
  a.ca = !1;
  a.V = !1;
  a.hb = function (c) {
    a.marketingCloudVisitorID = c;
    a.V = !0;
    a.j();
  };
  a.fa = !1;
  a.W = !1;
  a.mb = function (c) {
    a.visitorOptedOut = c;
    a.W = !0;
    a.j();
  };
  a.Z = !1;
  a.S = !1;
  a.Xa = function (c) {
    a.analyticsVisitorID = c;
    a.S = !0;
    a.j();
  };
  a.ba = !1;
  a.U = !1;
  a.Za = function (c) {
    a.audienceManagerLocationHint = c;
    a.U = !0;
    a.j();
  };
  a.aa = !1;
  a.T = !1;
  a.Ya = function (c) {
    a.audienceManagerBlob = c;
    a.T = !0;
    a.j();
  };
  a.$a = function (c) {
    a.maxDelay || (a.maxDelay = 250);
    return a.p("_d")
      ? (c &&
          setTimeout(function () {
            c();
          }, a.maxDelay),
        !1)
      : !0;
  };
  a.da = !1;
  a.I = !1;
  a.xa = function () {
    a.I = !0;
    a.j();
  };
  a.isReadyToTrack = function () {
    var c = !0,
      b = a.visitor,
      d,
      f,
      e;
    a.ea || a.J || (a.ab(a.lb) ? (a.J = !0) : (a.ea = !0));
    if (a.ea && !a.J) {
      return !1;
    }
    b &&
      b.isAllowed() &&
      (a.ca ||
        a.marketingCloudVisitorID ||
        !b.getMarketingCloudVisitorID ||
        ((a.ca = !0),
        (a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.hb])),
        a.marketingCloudVisitorID && (a.V = !0)),
      a.fa ||
        a.visitorOptedOut ||
        !b.isOptedOut ||
        ((a.fa = !0),
        (a.visitorOptedOut = b.isOptedOut([a, a.mb])),
        a.visitorOptedOut != p && (a.W = !0)),
      a.Z ||
        a.analyticsVisitorID ||
        !b.getAnalyticsVisitorID ||
        ((a.Z = !0),
        (a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Xa])),
        a.analyticsVisitorID && (a.S = !0)),
      a.ba ||
        a.audienceManagerLocationHint ||
        !b.getAudienceManagerLocationHint ||
        ((a.ba = !0),
        (a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([
          a,
          a.Za,
        ])),
        a.audienceManagerLocationHint && (a.U = !0)),
      a.aa ||
        a.audienceManagerBlob ||
        !b.getAudienceManagerBlob ||
        ((a.aa = !0),
        (a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ya])),
        a.audienceManagerBlob && (a.T = !0)),
      (c = a.ca && !a.V && !a.marketingCloudVisitorID),
      (b = a.Z && !a.S && !a.analyticsVisitorID),
      (d = a.ba && !a.U && !a.audienceManagerLocationHint),
      (f = a.aa && !a.T && !a.audienceManagerBlob),
      (e = a.fa && !a.W),
      (c = c || b || d || f || e ? !1 : !0));
    a.da || a.I || (a.$a(a.xa) ? (a.I = !0) : (a.da = !0));
    a.da && !a.I && (c = !1);
    return c;
  };
  a.o = p;
  a.u = 0;
  a.callbackWhenReadyToTrack = function (c, b, d) {
    var f;
    f = {};
    f.qb = c;
    f.pb = b;
    f.nb = d;
    a.o == p && (a.o = []);
    a.o.push(f);
    0 == a.u && (a.u = setInterval(a.j, 100));
  };
  a.j = function () {
    var c;
    if (a.isReadyToTrack() && (a.kb(), a.o != p)) {
      for (; 0 < a.o.length; ) {
        (c = a.o.shift()), c.pb.apply(c.qb, c.nb);
      }
    }
  };
  a.kb = function () {
    a.u && (clearInterval(a.u), (a.u = 0));
  };
  a.fb = function (c) {
    var b,
      d,
      f = p,
      e = p;
    if (!a.isReadyToTrack()) {
      b = [];
      if (c != p) {
        for (d in ((f = {}), c)) {
          f[d] = c[d];
        }
      }
      e = {};
      a.Va(e, !0);
      b.push(f);
      b.push(e);
      a.callbackWhenReadyToTrack(a, a.track, b);
      return !0;
    }
    return !1;
  };
  a.xb = function () {
    var c = a.cookieRead("s_fid"),
      b = "",
      d = "",
      f;
    f = 8;
    var e = 4;
    if (!c || 0 > c.indexOf("-")) {
      for (c = 0; 16 > c; c++) {
        (f = Math.floor(Math.random() * f)),
          (b += "0123456789ABCDEF".substring(f, f + 1)),
          (f = Math.floor(Math.random() * e)),
          (d += "0123456789ABCDEF".substring(f, f + 1)),
          (f = e = 16);
      }
      c = b + "-" + d;
    }
    a.cookieWrite("s_fid", c, 1) || (c = 0);
    return c;
  };
  a.t = a.track = function (c, b) {
    var d,
      f = new Date(),
      e =
        "s" +
        (Math.floor(f.getTime() / 10800000) % 10) +
        Math.floor(10000000000000 * Math.random()),
      g = f.getYear(),
      g =
        "t=" +
        a.escape(
          f.getDate() +
            "/" +
            f.getMonth() +
            "/" +
            (1900 > g ? g + 1900 : g) +
            " " +
            f.getHours() +
            ":" +
            f.getMinutes() +
            ":" +
            f.getSeconds() +
            " " +
            f.getDay() +
            " " +
            f.getTimezoneOffset()
        );
    a.visitor &&
      a.visitor.getAuthState &&
      (a.authState = a.visitor.getAuthState());
    a.p("_s");
    a.fb(c) ||
      (b && a.R(b),
      c && ((d = {}), a.Va(d, 0), a.R(c)),
      a.Db() &&
        !a.visitorOptedOut &&
        (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.xb()),
        a.Hb(),
        a.usePlugins && a.doPlugins && a.doPlugins(a),
        a.account &&
          (a.abort ||
            (a.trackOffline &&
              !a.timestamp &&
              (a.timestamp = Math.floor(f.getTime() / 1000)),
            (f = k.location),
            a.pageURL || (a.pageURL = f.href ? f.href : f),
            a.referrer ||
              a.Wa ||
              ((f = a.Util.getQueryParam("adobe_mc_ref", null, null, !0)),
              (a.referrer =
                f || void 0 === f
                  ? void 0 === f
                    ? ""
                    : f
                  : n.document.referrer)),
            (a.Wa = 1),
            (a.referrer = a.vb(a.referrer)),
            a.p("_g")),
          a.Ab() &&
            !a.abort &&
            (a.visitor &&
              !a.supplementalDataID &&
              a.visitor.getSupplementalDataID &&
              (a.supplementalDataID = a.visitor.getSupplementalDataID(
                "AppMeasurement:" + a._in,
                a.expectSupplementalData ? !1 : !0
              )),
            a.Bb(),
            (g += a.zb()),
            a.Gb(e, g),
            a.p("_t"),
            (a.referrer = "")))),
      c && a.R(d, 1));
    a.abort =
      a.supplementalDataID =
      a.timestamp =
      a.pageURLRest =
      a.linkObject =
      a.clickObject =
      a.linkURL =
      a.linkName =
      a.linkType =
      k.s_objectID =
      a.pe =
      a.pev1 =
      a.pev2 =
      a.pev3 =
      a.e =
      a.lightProfileID =
        0;
  };
  a.za = [];
  a.registerPreTrackCallback = function (c) {
    for (var b = [], d = 1; d < arguments.length; d++) {
      b.push(arguments[d]);
    }
    "function" == typeof c
      ? a.za.push([c, b])
      : a.debugTracking &&
        a.F("DEBUG: Non function type passed to registerPreTrackCallback");
  };
  a.cb = function (c) {
    a.wa(a.za, c);
  };
  a.ya = [];
  a.registerPostTrackCallback = function (c) {
    for (var b = [], d = 1; d < arguments.length; d++) {
      b.push(arguments[d]);
    }
    "function" == typeof c
      ? a.ya.push([c, b])
      : a.debugTracking &&
        a.F("DEBUG: Non function type passed to registerPostTrackCallback");
  };
  a.bb = function (c) {
    a.wa(a.ya, c);
  };
  a.wa = function (c, b) {
    if ("object" == typeof c) {
      for (var d = 0; d < c.length; d++) {
        var f = c[d][0],
          e = c[d][1];
        e.unshift(b);
        if ("function" == typeof f) {
          try {
            f.apply(null, e);
          } catch (g) {
            a.debugTracking && a.F(g.message);
          }
        }
      }
    }
  };
  a.tl = a.trackLink = function (c, b, d, f, e) {
    a.linkObject = c;
    a.linkType = b;
    a.linkName = d;
    e && ((a.l = c), (a.A = e));
    return a.track(f);
  };
  a.trackLight = function (c, b, d, f) {
    a.lightProfileID = c;
    a.lightStoreForSeconds = b;
    a.lightIncrementBy = d;
    return a.track(f);
  };
  a.clearVars = function () {
    var c, b;
    for (c = 0; c < a.g.length; c++) {
      if (
        ((b = a.g[c]),
        "prop" == b.substring(0, 4) ||
          "eVar" == b.substring(0, 4) ||
          "hier" == b.substring(0, 4) ||
          "list" == b.substring(0, 4) ||
          "channel" == b ||
          "events" == b ||
          "eventList" == b ||
          "products" == b ||
          "productList" == b ||
          "purchaseID" == b ||
          "transactionID" == b ||
          "state" == b ||
          "zip" == b ||
          "campaign" == b)
      ) {
        a[b] = void 0;
      }
    }
  };
  a.tagContainerMarker = "";
  a.Gb = function (c, b) {
    var d,
      f = a.trackingServer;
    d = "";
    var e = a.dc,
      g = "sc.",
      h = a.visitorNamespace;
    f
      ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure)
      : (h ||
          ((h = a.account),
          (f = h.indexOf(",")),
          0 <= f && (h = h.substring(0, f)),
          (h = h.replace(/[^A-Za-z0-9]/g, ""))),
        d || (d = "2o7.net"),
        (e = e ? ("" + e).toLowerCase() : "d1"),
        "2o7.net" == d &&
          ("d1" == e ? (e = "112") : "d2" == e && (e = "122"), (g = "")),
        (f = h + "." + e + "." + g + d));
    d = a.ssl ? "https://" : "http://";
    e =
      (a.AudienceManagement && a.AudienceManagement.isReady()) ||
      0 != a.usePostbacks;
    d +=
      f +
      "/b/ss/" +
      a.account +
      "/" +
      (a.mobile ? "5." : "") +
      (e ? "10" : "1") +
      "/JS-" +
      a.version +
      (a.Kb ? "T" : "") +
      (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") +
      "/" +
      c +
      "?AQB=1&ndh=1&pf=1&" +
      (e ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") +
      b +
      "&AQE=1";
    a.cb(d);
    a.tb(d);
    a.ka();
  };
  a.Ua = /{(%?)(.*?)(%?)}/;
  a.Ob = RegExp(a.Ua.source, "g");
  a.ub = function (c) {
    if ("object" == typeof c.dests) {
      for (var b = 0; b < c.dests.length; ++b) {
        var d = c.dests[b];
        if ("string" == typeof d.c && "aa." == d.id.substr(0, 3)) {
          for (var f = d.c.match(a.Ob), e = 0; e < f.length; ++e) {
            var g = f[e],
              h = g.match(a.Ua),
              k = "";
            "%" == h[1] && "timezone_offset" == h[2]
              ? (k = new Date().getTimezoneOffset())
              : "%" == h[1] && "timestampz" == h[2] && (k = a.yb());
            d.c = d.c.replace(g, a.escape(k));
          }
        }
      }
    }
  };
  a.yb = function () {
    var c = new Date(),
      b = new Date(60000 * Math.abs(c.getTimezoneOffset()));
    return (
      a.k(4, c.getFullYear()) +
      "-" +
      a.k(2, c.getMonth() + 1) +
      "-" +
      a.k(2, c.getDate()) +
      "T" +
      a.k(2, c.getHours()) +
      ":" +
      a.k(2, c.getMinutes()) +
      ":" +
      a.k(2, c.getSeconds()) +
      (0 < c.getTimezoneOffset() ? "-" : "+") +
      a.k(2, b.getUTCHours()) +
      ":" +
      a.k(2, b.getUTCMinutes())
    );
  };
  a.k = function (a, b) {
    return (Array(a + 1).join(0) + b).slice(-a);
  };
  a.ta = {};
  a.doPostbacks = function (c) {
    if ("object" == typeof c) {
      if (
        (a.ub(c),
        "object" == typeof a.AudienceManagement &&
          "function" == typeof a.AudienceManagement.isReady &&
          a.AudienceManagement.isReady() &&
          "function" == typeof a.AudienceManagement.passData)
      ) {
        a.AudienceManagement.passData(c);
      } else {
        if ("object" == typeof c && "object" == typeof c.dests) {
          for (var b = 0; b < c.dests.length; ++b) {
            var d = c.dests[b];
            "object" == typeof d &&
              "string" == typeof d.c &&
              "string" == typeof d.id &&
              "aa." == d.id.substr(0, 3) &&
              ((a.ta[d.id] = new Image()),
              (a.ta[d.id].alt = ""),
              (a.ta[d.id].src = d.c));
          }
        }
      }
    }
  };
  a.tb = function (c) {
    a.i || a.Cb();
    a.i.push(c);
    a.ma = a.C();
    a.Sa();
  };
  a.Cb = function () {
    a.i = a.Eb();
    a.i || (a.i = []);
  };
  a.Eb = function () {
    var c, b;
    if (a.ra()) {
      try {
        (b = k.localStorage.getItem(a.pa())) && (c = k.JSON.parse(b));
      } catch (d) {}
      return c;
    }
  };
  a.ra = function () {
    var c = !0;
    (a.trackOffline && a.offlineFilename && k.localStorage && k.JSON) ||
      (c = !1);
    return c;
  };
  a.Ja = function () {
    var c = 0;
    a.i && (c = a.i.length);
    a.q && c++;
    return c;
  };
  a.ka = function () {
    if (a.q && (a.B && a.B.complete && a.B.G && a.B.va(), a.q)) {
      return;
    }
    a.Ka = p;
    if (a.qa) {
      a.ma > a.O && a.Qa(a.i), a.ua(500);
    } else {
      var c = a.ob();
      if (0 < c) {
        a.ua(c);
      } else {
        if ((c = a.Ga())) {
          (a.q = 1), a.Fb(c), a.Jb(c);
        }
      }
    }
  };
  a.ua = function (c) {
    a.Ka || (c || (c = 0), (a.Ka = setTimeout(a.ka, c)));
  };
  a.ob = function () {
    var c;
    if (!a.trackOffline || 0 >= a.offlineThrottleDelay) {
      return 0;
    }
    c = a.C() - a.Pa;
    return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
  };
  a.Ga = function () {
    if (0 < a.i.length) {
      return a.i.shift();
    }
  };
  a.Fb = function (c) {
    if (a.debugTracking) {
      var b = "AppMeasurement Debug: " + c;
      c = c.split("&");
      var d;
      for (d = 0; d < c.length; d++) {
        b += "\n\t" + a.unescape(c[d]);
      }
      a.F(b);
    }
  };
  a.gb = function () {
    return a.marketingCloudVisitorID || a.analyticsVisitorID;
  };
  a.Y = !1;
  var t;
  try {
    t = JSON.parse('{"x":"y"}');
  } catch (w) {
    t = null;
  }
  t && "y" == t.x
    ? ((a.Y = !0),
      (a.X = function (a) {
        return JSON.parse(a);
      }))
    : k.$ && k.$.parseJSON
    ? ((a.X = function (a) {
        return k.$.parseJSON(a);
      }),
      (a.Y = !0))
    : (a.X = function () {
        return null;
      });
  a.Jb = function (c) {
    var b, d, f;
    a.gb() &&
      2047 < c.length &&
      ("undefined" != typeof XMLHttpRequest &&
        ((b = new XMLHttpRequest()),
        "withCredentials" in b ? (d = 1) : (b = 0)),
      b ||
        "undefined" == typeof XDomainRequest ||
        ((b = new XDomainRequest()), (d = 2)),
      b &&
        ((a.AudienceManagement && a.AudienceManagement.isReady()) ||
          0 != a.usePostbacks) &&
        (a.Y ? (b.Ba = !0) : (b = 0)));
    !b && a.Ta && (c = c.substring(0, 2047));
    !b &&
      a.d.createElement &&
      (0 != a.usePostbacks ||
        (a.AudienceManagement && a.AudienceManagement.isReady())) &&
      (b = a.d.createElement("SCRIPT")) &&
      "async" in b &&
      ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body)
        ? ((b.type = "text/javascript"),
          b.setAttribute("async", "async"),
          (d = 3))
        : (b = 0));
    b ||
      ((b = new Image()),
      (b.alt = ""),
      b.abort ||
        "undefined" === typeof k.InstallTrigger ||
        (b.abort = function () {
          b.src = p;
        }));
    b.Da = function () {
      try {
        b.G && (clearTimeout(b.G), (b.G = 0));
      } catch (a) {}
    };
    b.onload = b.va = function () {
      a.bb(c);
      b.Da();
      a.sb();
      a.ga();
      a.q = 0;
      a.ka();
      if (b.Ba) {
        b.Ba = !1;
        try {
          a.doPostbacks(a.X(b.responseText));
        } catch (d) {}
      }
    };
    b.onabort =
      b.onerror =
      b.Ha =
        function () {
          b.Da();
          (a.trackOffline || a.qa) && a.q && a.i.unshift(a.rb);
          a.q = 0;
          a.ma > a.O && a.Qa(a.i);
          a.ga();
          a.ua(500);
        };
    b.onreadystatechange = function () {
      4 == b.readyState && (200 == b.status ? b.va() : b.Ha());
    };
    a.Pa = a.C();
    if (1 == d || 2 == d) {
      var e = c.indexOf("?");
      f = c.substring(0, e);
      e = c.substring(e + 1);
      e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
      1 == d
        ? (b.open("POST", f, !0), b.send(e))
        : 2 == d && (b.open("POST", f), b.send(e));
    } else {
      if (((b.src = c), 3 == d)) {
        if (a.Na) {
          try {
            f.removeChild(a.Na);
          } catch (g) {}
        }
        f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
        a.Na = a.B;
      }
    }
    b.G = setTimeout(function () {
      b.G &&
        (b.complete
          ? b.va()
          : (a.trackOffline && b.abort && b.abort(), b.Ha()));
    }, 5000);
    a.rb = c;
    a.B = k["s_i_" + a.replace(a.account, ",", "_")] = b;
    if ((a.useForcedLinkTracking && a.K) || a.A) {
      a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
        (a.ha = setTimeout(a.ga, a.forcedLinkTrackingTimeout));
    }
  };
  a.sb = function () {
    if (a.ra() && !(a.Oa > a.O)) {
      try {
        k.localStorage.removeItem(a.pa()), (a.Oa = a.C());
      } catch (c) {}
    }
  };
  a.Qa = function (c) {
    if (a.ra()) {
      a.Sa();
      try {
        k.localStorage.setItem(a.pa(), k.JSON.stringify(c)), (a.O = a.C());
      } catch (b) {}
    }
  };
  a.Sa = function () {
    if (a.trackOffline) {
      if (!a.offlineLimit || 0 >= a.offlineLimit) {
        a.offlineLimit = 10;
      }
      for (; a.i.length > a.offlineLimit; ) {
        a.Ga();
      }
    }
  };
  a.forceOffline = function () {
    a.qa = !0;
  };
  a.forceOnline = function () {
    a.qa = !1;
  };
  a.pa = function () {
    return a.offlineFilename + "-" + a.visitorNamespace + a.account;
  };
  a.C = function () {
    return new Date().getTime();
  };
  a.La = function (a) {
    a = a.toLowerCase();
    return 0 != a.indexOf("#") &&
      0 != a.indexOf("about:") &&
      0 != a.indexOf("opera:") &&
      0 != a.indexOf("javascript:")
      ? !0
      : !1;
  };
  a.setTagContainer = function (c) {
    var b, d, f;
    a.Kb = c;
    for (b = 0; b < a._il.length; b++) {
      if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
        a.R(d);
        if (d.lmq) {
          for (b = 0; b < d.lmq.length; b++) {
            (f = d.lmq[b]), a.loadModule(f.n);
          }
        }
        if (d.ml) {
          for (f in d.ml) {
            if (a[f]) {
              for (b in ((c = a[f]), (f = d.ml[f]), f)) {
                !Object.prototype[b] &&
                  ("function" != typeof f[b] ||
                    0 > ("" + f[b]).indexOf("s_c_il")) &&
                  (c[b] = f[b]);
              }
            }
          }
        }
        if (d.mmq) {
          for (b = 0; b < d.mmq.length; b++) {
            (f = d.mmq[b]),
              a[f.m] &&
                ((c = a[f.m]),
                c[f.f] &&
                  "function" == typeof c[f.f] &&
                  (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
          }
        }
        if (d.tq) {
          for (b = 0; b < d.tq.length; b++) {
            a.track(d.tq[b]);
          }
        }
        d.s = a;
        break;
      }
    }
  };
  a.Util = {
    urlEncode: a.escape,
    urlDecode: a.unescape,
    cookieRead: a.cookieRead,
    cookieWrite: a.cookieWrite,
    getQueryParam: function (c, b, d, f) {
      var e,
        g = "";
      b || (b = a.pageURL ? a.pageURL : k.location);
      d = d ? d : "&";
      if (!c || !b) {
        return g;
      }
      b = "" + b;
      e = b.indexOf("?");
      if (0 > e) {
        return g;
      }
      b = d + b.substring(e + 1) + d;
      if (
        !f ||
        !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + "=" + d))
      ) {
        e = b.indexOf("#");
        0 <= e && (b = b.substr(0, e) + d);
        e = b.indexOf(d + c + "=");
        if (0 > e) {
          return g;
        }
        b = b.substring(e + d.length + c.length + 1);
        e = b.indexOf(d);
        0 <= e && (b = b.substring(0, e));
        0 < b.length && (g = a.unescape(b));
        return g;
      }
    },
  };
  a.H =
    "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(
      " "
    );
  a.g = a.H.concat(
    "purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(
      " "
    )
  );
  a.na =
    "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(
      " "
    );
  a.P = a.na.slice(0);
  a.Aa =
    "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(
      " "
    );
  for (m = 0; 250 >= m; m++) {
    76 > m && (a.g.push("prop" + m), a.P.push("prop" + m)),
      a.g.push("eVar" + m),
      a.P.push("eVar" + m),
      6 > m && a.g.push("hier" + m),
      4 > m && a.g.push("list" + m);
  }
  m =
    "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(
      " "
    );
  a.g = a.g.concat(m);
  a.H = a.H.concat(m);
  a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
  a.charSet = "UTF-8";
  a.contextData = {};
  a.offlineThrottleDelay = 0;
  a.offlineFilename = "AppMeasurement.offline";
  a.Pa = 0;
  a.ma = 0;
  a.O = 0;
  a.Oa = 0;
  a.linkDownloadFileTypes =
    "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
  a.w = k;
  a.d = k.document;
  try {
    if (((a.Ta = !1), navigator)) {
      var v = navigator.userAgent;
      if (
        "Microsoft Internet Explorer" == navigator.appName ||
        0 <= v.indexOf("MSIE ") ||
        (0 <= v.indexOf("Trident/") && 0 <= v.indexOf("Windows NT 6"))
      ) {
        a.Ta = !0;
      }
    }
  } catch (x) {}
  a.ga = function () {
    a.ha && (k.clearTimeout(a.ha), (a.ha = p));
    a.l && a.K && a.l.dispatchEvent(a.K);
    a.A &&
      ("function" == typeof a.A
        ? a.A()
        : a.l && a.l.href && (a.d.location = a.l.href));
    a.l = a.K = a.A = 0;
  };
  a.Ra = function () {
    a.b = a.d.body;
    a.b
      ? ((a.v = function (c) {
          var b, d, f, e, g;
          if (
            !(
              (a.d && a.d.getElementById("cppXYctnr")) ||
              (c && c["s_fe_" + a._in])
            )
          ) {
            if (a.Ca) {
              if (a.useForcedLinkTracking) {
                a.b.removeEventListener("click", a.v, !1);
              } else {
                a.b.removeEventListener("click", a.v, !0);
                a.Ca = a.useForcedLinkTracking = 0;
                return;
              }
            } else {
              a.useForcedLinkTracking = 0;
            }
            a.clickObject = c.srcElement ? c.srcElement : c.target;
            try {
              if (
                !a.clickObject ||
                (a.N && a.N == a.clickObject) ||
                !(
                  a.clickObject.tagName ||
                  a.clickObject.parentElement ||
                  a.clickObject.parentNode
                )
              ) {
                a.clickObject = 0;
              } else {
                var h = (a.N = a.clickObject);
                a.la && (clearTimeout(a.la), (a.la = 0));
                a.la = setTimeout(function () {
                  a.N == h && (a.N = 0);
                }, 10000);
                f = a.Ja();
                a.track();
                if (f < a.Ja() && a.useForcedLinkTracking && c.target) {
                  for (
                    e = c.target;
                    e &&
                    e != a.b &&
                    "A" != e.tagName.toUpperCase() &&
                    "AREA" != e.tagName.toUpperCase();

                  ) {
                    e = e.parentNode;
                  }
                  if (
                    e &&
                    ((g = e.href),
                    a.La(g) || (g = 0),
                    (d = e.target),
                    c.target.dispatchEvent &&
                      g &&
                      (!d ||
                        "_self" == d ||
                        "_top" == d ||
                        "_parent" == d ||
                        (k.name && d == k.name)))
                  ) {
                    try {
                      b = a.d.createEvent("MouseEvents");
                    } catch (l) {
                      b = new k.MouseEvent();
                    }
                    if (b) {
                      try {
                        b.initMouseEvent(
                          "click",
                          c.bubbles,
                          c.cancelable,
                          c.view,
                          c.detail,
                          c.screenX,
                          c.screenY,
                          c.clientX,
                          c.clientY,
                          c.ctrlKey,
                          c.altKey,
                          c.shiftKey,
                          c.metaKey,
                          c.button,
                          c.relatedTarget
                        );
                      } catch (m) {
                        b = 0;
                      }
                      b &&
                        ((b["s_fe_" + a._in] = b.s_fe = 1),
                        c.stopPropagation(),
                        c.stopImmediatePropagation &&
                          c.stopImmediatePropagation(),
                        c.preventDefault(),
                        (a.l = c.target),
                        (a.K = b));
                    }
                  }
                }
              }
            } catch (n) {
              a.clickObject = 0;
            }
          }
        }),
        a.b && a.b.attachEvent
          ? a.b.attachEvent("onclick", a.v)
          : a.b &&
            a.b.addEventListener &&
            (navigator &&
              ((0 <= navigator.userAgent.indexOf("WebKit") &&
                a.d.createEvent) ||
                (0 <= navigator.userAgent.indexOf("Firefox/2") &&
                  k.MouseEvent)) &&
              ((a.Ca = 1),
              (a.useForcedLinkTracking = 1),
              a.b.addEventListener("click", a.v, !0)),
            a.b.addEventListener("click", a.v, !1)))
      : setTimeout(a.Ra, 30);
  };
  a.Ra();
  r
    ? a.setAccount(r)
    : a.F("Error, missing Report Suite ID in AppMeasurement initialization");
  a.loadModule("ActivityMap");
}
function s_gi(r) {
  var a,
    k = window.s_c_il,
    p,
    n,
    m = r.split(","),
    s,
    u,
    t = 0;
  if (k) {
    for (p = 0; !t && p < k.length; ) {
      a = k[p];
      if ("s_c" == a._c && (a.account || a.oun)) {
        if (a.account && a.account == r) {
          t = 1;
        } else {
          for (
            n = a.account ? a.account : a.oun,
              n = a.allAccounts ? a.allAccounts : n.split(","),
              s = 0;
            s < m.length;
            s++
          ) {
            for (u = 0; u < n.length; u++) {
              m[s] == n[u] && (t = 1);
            }
          }
        }
      }
      p++;
    }
  }
  t ? a.setAccount && a.setAccount(r) : (a = new AppMeasurement(r));
  return a;
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);
function s_pgicq() {
  var r = window,
    a = r.s_giq,
    k,
    p,
    n;
  if (a) {
    for (k = 0; k < a.length; k++) {
      (p = a[k]),
        (n = s_gi(p.oun)),
        n.setAccount(p.un),
        n.setTagContainer(p.tagContainerName);
    }
  }
  r.s_giq = 0;
}
s_pgicq();
