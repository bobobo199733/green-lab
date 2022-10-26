/*!
######################################################

# INFINITY_COMMON.JS

# Version: 1.23
# BUILD DATE: Wednesday, December 8th, 2021

# COPYRIGHT ORACLE CORP 2021 [UNLESS STATED OTHERWISE]

######################################################
*/
var OraInfCustPluginGlobals = (function () {
  var publicScope = {};
  publicScope.getUrlQueryParameter = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };
  publicScope.getHostName = function (r) {
    if (r) {
      var e = r.match(/\/\/(www[0-9]?\.)?(.[^/:]+)/i);
      return null != e &&
        e.length > 2 &&
        "string" == typeof e[2] &&
        e[2].length > 0
        ? e[2]
        : null;
    }
  };
  publicScope.getHostObject = function (r) {
    if (r) {
      var e = r.match(
        /^(?:https?:|ftps?:)?(?:\/\/)?([^\/\?]+[.]+[\w]+[:\w]*)/i
      );
      return null != e &&
        e.length > 1 &&
        "string" == typeof e[1] &&
        e[1].length > 0
        ? { origin: e[0], host: e[1] }
        : null;
    }
  };
  publicScope.getMetaTagValue = function (name) {
    var tag,
      value = "";
    tag = document.head.querySelector('meta[name="' + name + '" i]');
    if (tag) {
      value = tag.getAttribute("content");
    }
    return value;
  };
  publicScope.domainSpecificParamsForCampaigns = function () {
    var params = {
      "go.oracle.com": "src1",
      "event.on24.com": "Partnerref",
      "myservices.us.oraclecloud.com": "sourceType",
    };
    return params;
  };
  return publicScope;
})();
/*! Truste Global script - v1.1 */
try {
  oracle.truste.api.getGdprConsentDecision();
} catch (err) {
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
          for (var o = r[n]; " " == o.charAt(0); ) {
            o = o.substring(1);
          }
          if (0 == o.indexOf(t)) {
            return o.substring(t.length, o.length);
          }
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
          if (null == n) {
            return -1;
          }
          var o = new Array();
          o = n.split(",");
          for (a in o) {
            o[a] = parseInt(o[a], 10) + 1;
          }
          return o.toString();
        }),
        (this.getConsentDecision = function () {
          var e = this.getConsentCode();
          if (-1 == e) {
            var t = '{"consentDecision": 0, "source": "implied"}';
            return JSON.parse(t);
          }
          t = '{"consentDecision": ' + parseInt(e) + ', "source": "asserted"}';
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
}
var trusteConsent = [];
function getTrusteConsentLevel() {
  var consentStatus = new Array(-1, "NoTRUSTe");
  try {
    consentStatus[0] =
      oracle.truste.api.getGdprConsentDecision().consentDecision;
    consentStatus[1] = oracle.truste.api.getGdprConsentDecision().source;
  } catch (err) {
    consentStatus[0] = -1;
  }
  if (consentStatus[0] == -1) {
    try {
      consentStatus[0] = truste.cma.callApi(
        "getGDPRConsentDecision",
        "oracle.com"
      ).consentDecision;
      consentStatus[1] = truste.cma.callApi(
        "getGDPRConsentDecision",
        "oracle.com"
      ).source;
    } catch (err) {
      consentStatus[0] = -1;
    }
  }
  return consentStatus;
}
function getUserInfo() {
  var user = {};
  if (ORA.analytics.getCookieRaw("ORA_WWW_MRKT")) {
    var mrktCookie = ORA.analytics.getCookieRaw("ORA_WWW_MRKT");
    user.userType =
      mrktCookie.toLowerCase().indexOf("employee") > 0 ? "O" : "P";
    user.profileGUID = mrktCookie.split("~")[1].slice(2);
    user.cookieName = "www_mrkt";
  } else {
    if (ORA.analytics.getCookieRaw("ORA_UCM_INFO")) {
      var ucmCookie = ORA.analytics.getCookieRaw("ORA_UCM_INFO");
      ucmCookie.split("~")[4] &&
        (user.userType =
          ucmCookie.split("~")[4].toLowerCase().indexOf("@oracle") > 0
            ? "O"
            : "P");
      user.profileGUID = ucmCookie.split("~")[1];
      user.cookieName = "ucm_info";
    } else {
      user.userType = "A";
      user.cookieName = "NoCookie";
      user.profileGUID = "NotSent";
    }
  }
  user.cookieName =
    trusteConsent[0] + "~" + trusteConsent[1] + "~" + user.cookieName;
  if (trusteConsent[0] != -1) {
    user.profileGUID =
      trusteConsent[0].indexOf(0) != -1 || trusteConsent[0].indexOf(3) != -1
        ? user.profileGUID
        : "NotSent";
  }
  return user;
}
trusteConsent = getTrusteConsentLevel();
/*! Truste - v1.1 */
(function () {
  console.log("Infinity:Custom Plugin --->  Truste....");
  var initCallback = function (config, asyncReady) {
    var setUserInfo = function (ping) {
      if (ping.payload["wt.dl"] == "0") {
        var userInfo = getUserInfo();
        ping.payload["wt.gcm_uid"] =
          userInfo.profileGUID != "NotSent"
            ? userInfo.profileGUID.toLowerCase()
            : userInfo.profileGUID;
        ping.payload["wt.p_status"] = userInfo.userType;
        ping.payload["wt.p_cookie_att"] = userInfo.cookieName;
        ping.payload["wt.url_es"] = window.location.href;
        ping.payload["wt.z_prev"] = document.referrer
          ? document.referrer
          : "None";
        var pageSource =
          OraInfCustPluginGlobals.getUrlQueryParameter("source") ||
          OraInfCustPluginGlobals.getUrlQueryParameter("Source");
        var pageSrc1 =
          OraInfCustPluginGlobals.getUrlQueryParameter("src1") ||
          OraInfCustPluginGlobals.getUrlQueryParameter("Src1");
        var pageSrcType =
          OraInfCustPluginGlobals.getUrlQueryParameter("sourceType") ||
          OraInfCustPluginGlobals.getUrlQueryParameter("sourcetype");
        var pcode = OraInfCustPluginGlobals.getUrlQueryParameter("pcode");
        if (pageSource) {
          ping.payload["wt.z_page_source"] = pageSource;
          ping.payload["wt.z_page_source_name"] = "source~" + pageSource;
        } else {
          if (pageSrcType) {
            ping.payload["wt.z_page_source"] = pageSrcType;
            ping.payload["wt.z_page_source_name"] = "sourceType~" + pageSrcType;
          } else {
            if (pageSrc1) {
              ping.payload["wt.z_page_source"] = pageSrc1;
              ping.payload["wt.z_page_source_name"] = "src1~" + pageSrc1;
            }
          }
        }
        if (
          ping.payload["wt.z_page_source"].indexOf("RC_") != -1 ||
          ping.payload["wt.page_source"].indexOf("rc_") != -1
        ) {
          var rcCodeVal = ping.payload["wt.z_page_source"].split(":");
          for (var i = 0; i < rcCodeVal.length; i++) {
            if (
              rcCodeVal[i].indexOf("RC_") != -1 ||
              rcCodeVal[i].indexOf("rc_") != -1
            ) {
              ping.payload["wt.z_rc_code"] = rcCodeVal[i].split("_")[1];
              break;
            }
          }
        }
        if (pcode) {
          ping.payload["wt.z_offer_program_code"] = pcode;
        }
        ORA.analytics.rmMutation("setTrustArcValues");
      }
    };
    ORA.analytics.addMutation("setTrustArcValues", setUserInfo);
    if (asyncReady) {
      asyncReady();
    }
  };
  ORA.regPlugin("InfinityPlugin", initCallback, { blockCollect: true });
})();
if (
  window.location.host == "www.oracle.com" ||
  window.location.host == "www-sites.oracle.com"
) {
  /*! Error Page Tracking v1.1*/
  (function () {
    console.log("Infinity:Custom Plugin --->  Error Page Tracking...");
    if (
      document.location.href.indexOf("404-error-page") != -1 ||
      window.inf_pageType
    ) {
      var setErrorPageValues = function (ping) {
        if (ping.payload["wt.dl"] == "0") {
          ping.payload["wt.z_error_type"] =
            OraInfCustPluginGlobals.getMetaTagValue("Title");
          ping.payload["wt.z_error_decsription"] =
            OraInfCustPluginGlobals.getMetaTagValue("Description");
          var referrer = window.document.referrer;
          var pathname = new URL(referrer).pathname;
          var previousPageRef = parent.document.referrer;
          ping.payload.dcsuri = pathname;
          ping.payload["wt.es"] = "no value";
          ping.payload.dcsref = "no value";
          ping.payload["wt.z_errorplugin"] = 1;
          if (previousPageRef != "") {
            ping.payload["wt.es"] = previousPageRef;
            ping.payload.dcsref = previousPageRef;
          }
          ORA.analytics.rmMutation("errorPageTracking");
        }
      };
      ORA.analytics.addMutation("errorPageTracking", setErrorPageValues);
    }
  })();
  /*! Download Tracking v1.00*/
  (function () {
    console.log("Infinity:Custom Plugin --->  Download Tracking...");
    var fileTypes =
        "avi,bat,bin,brk,cpio,dll,dmg,doc,docx,dot,iso,mdb,mov,mobi,mp3,mp4,mpeg,mpg,mpp,odg,odp,ods,odt,otg,otp,ots,ott,pdf,ppt,pptx,rm,smi,smil,so,swf,txt,vsd,wav,wma,wmv,wrf,xls,xlsx,zdl",
      executableFileExtensions = [
        "rpm",
        "tar",
        "gz",
        "z",
        "zip",
        "rar",
        "7z",
        "bz2",
        "tgz",
        "exe",
        "jar",
        "jnlp",
        "msi",
        "ova",
        "ovf",
        "sh",
        "dmg",
        "deb",
      ],
      linkDownloadFileTypesArr = fileTypes
        .split(",")
        .concat(executableFileExtensions);
    function ocomFileDownloadTracking() {
      if (window.jQuery) {
        jQuery(document).ready(function ($) {
          $(document).on("click contextmenu", "a", function (e) {
            var datapayload = {};
            var trackStatus = downloadTracking($(this), datapayload, e.type);
            if (trackStatus != false) {
              ORA.click({ config: {}, data: datapayload });
            }
          });
        });
      } else {
        console.log("!! jQuery not available !!");
      }
    }
    function downloadTracking(ele, payload, eventType) {
      var fileExt = false;
      if (ele.attr("href") && isDownloadable(ele.attr("href").trim())) {
        var fileFullPath = ele.attr("href").trim(),
          filePath = fileFullPath.split("?")[0],
          fileName;
        btnText = ele.text().replace(/ /g, "-").replace(/-+/g, "-");
        payload["wt.dl"] = eventType == "contextmenu" ? 25 : 20;
        fileExt = isDownloadable(filePath);
        fileName = filePath.split("/").pop();
        if (
          executableFileExtensions.indexOf(fileExt) != -1 &&
          OraInfCustPluginGlobals.getHostName(filePath) ==
            "download.oracle.com" &&
          filePath.indexOf("/ocomdocs/global/") == -1
        ) {
          payload["wt.pn_file_name"] = fileName;
          payload["wt.pn_category"] = getProductCategory();
          payload["wt.pn_detail"] = fileExt;
          payload["wt.z_dlplugin"] = 1;
        } else {
          payload["wt.z_cont_file_name"] = fileName;
          payload["wt.z_cont_category"] = getContentCategory(ele);
          payload["wt.z_cont_topic"] = btnText;
          payload["wt.z_dlplugin"] = 0;
        }
        payload["wt.z_isgated"] = isGatedAsset();
      }
      return fileExt;
    }
    function getContentCategory(linkObj) {
      var category, url, btntext, fileName;
      url = linkObj.attr("href").split("?")[0];
      fileName = url.split("/").pop().toLowerCase();
      btntext = linkObj.text().toLowerCase();
      if (
        fileName.indexOf("-wp.") > -1 ||
        fileName.indexOf("whitepaper") > -1 ||
        fileName.indexOf("white-paper") > -1 ||
        btntext.indexOf("wp:") > -1 ||
        btntext.indexOf("whitepaper:") > -1 ||
        btntext.indexOf("white paper:") > -1
      ) {
        category = "white-paper";
      } else {
        if (
          fileName.indexOf("-ds.") > -1 ||
          fileName.indexOf("datasheet") > -1 ||
          fileName.indexOf("data-sheet") > -1 ||
          btntext.indexOf("ds:") > -1 ||
          btntext.indexOf("datasheet:") > -1 ||
          btntext.indexOf("data sheet:") > -1
        ) {
          category = "data-sheet";
        } else {
          if (
            fileName.indexOf("-infographic.") > -1 ||
            fileName.indexOf("infographic") > -1 ||
            btntext.indexOf("infographic:") > -1 ||
            btntext.indexOf("infographic:") > -1 ||
            btntext.indexOf("data sheet:") > -1
          ) {
            category = "infographic";
          } else {
            category = "other";
          }
        }
      }
      return category;
    }
    function isDownloadable(link) {
      var ext = false;
      if (link) {
        ext = link.split("?")[0].split(".").pop();
        ext = linkDownloadFileTypesArr.indexOf(ext) != -1 ? ext : false;
      }
      return ext;
    }
    function isGatedAsset() {
      var gated = "0";
      if (window.formHtmlName) {
        gated = "1";
      }
      return gated;
    }
    function getProductCategory() {
      var category =
        window.dataLayerObject &&
        window.dataLayerObject.page.pageInfo.breadCrumbs
          ? window.dataLayerObject.page.pageInfo.breadCrumbs.replace(
              /([ ]*\/[ ]*) /,
              "/"
            ) + ($(".u03 .u03w1 h1").text() && "/" + $(".u03 .u03w1 h1").text())
          : location.pathname.substr(-1) == "/"
          ? location.pathname.slice(1).slice(0, -1)
          : location.pathname.slice(1).split("/").slice(0, -1).join("/");
      return category.toLowerCase().replace(/ /g, "-").replace(/-+/g, "-");
    }
    ocomFileDownloadTracking();
  })();
  /*! Campaign Tracking v1.1*/
  /*! Traffic Source Tracking v1.0*/
}
if (window.location.host == "go.oracle.com") {
  (function () {
    console.log("in new file");
    var elqTrack = function (ping) {
      var userInfo = getUserInfo();
      if (ping.payload["wt.dl"] == "0") {
        ping.payload["wt.gcm_uid"] =
          userInfo.profileGUID != "NotSent"
            ? userInfo.profileGUID.toLowerCase()
            : userInfo.profileGUID;
        ping.payload["wt.p_status"] = userInfo.userType;
        ping.payload["wt.p_cookie_att"] = userInfo.cookieName;
        ping.payload["wt.url_es"] = window.location.href;
        ping.payload["wt.z_prev"] = document.referrer
          ? document.referrer
          : "None";
        var stepDetails = getStepData();
        if (stepDetails.ora_stepName) {
          ping.payload["wt.si_n"] = "Eloqua Landing pages";
          ping.payload["wt.si_p"] = stepDetails.ora_stepName;
          ping.payload["wt.si_x"] = stepDetails.ora_stepNumber;
          if (stepDetails.ora_stepNumber == 3) {
            ping.payload["wt.si_cs"] = "1";
            ping.payload["wt.conv"] = "form submission";
            ping.payload["wt.z_form_event"] = 1;
          }
        }
        var urlPath = location.pathname.toLowerCase();
        var trackingParam = getUrlVariables()["src1"];
        if (urlPath.indexOf("lp=") != -1) {
          ping.payload["wt.elq_lpid"] = location.pathname.substring(4);
        } else {
          ping.payload["wt.elq_lpname"] = urlPath;
        }
        if (window.formType != undefined) {
          ping.payload["wt.elq_formtype"] = window.formType;
        }
        if (document.title) {
          ping.payload["wt.elq_title"] = document.title;
        }
        if (getUrlVariables()["elqCampaignId"] != undefined) {
          ping.payload["wt.elq_campaignid"] =
            getUrlVariables()["elqCampaignId"] != undefined
              ? getUrlVariables()["elqCampaignId"]
              : "no_campaignid";
        } else {
          ping.payload["wt.elq_campaignid"] =
            window.elqCampaignId != undefined
              ? window.elqCampaignId
              : "no_campaignid";
        }
        if (window.language_value != undefined) {
          ping.payload["wt.elq_lang"] = window.language_value;
        } else {
          if (s_meta != undefined) {
            ping.payload["wt.elq_lang"] = s_meta.lang;
          }
        }
        if (window.cmid != undefined) {
          ping.payload["wt.elq_cmid"] =
            window.cmid != undefined ? window.cmid : "no_cmid";
        } else {
          ping.payload["wt.elq_cmid"] =
            getUrlVariables()["cmid"] != undefined
              ? getUrlVariables()["cmid"]
              : "no_cmid";
        }
        ping.payload["wt.si_n"] = "Eloqua Landing pages";
        if (trackingParam != undefined) {
          if (trackingParam.indexOf("a_") != -1) {
            var countryValue = trackingParam.split(":");
            for (var i = 0; i < countryValue.length; i++) {
              if (countryValue[i].indexOf("a_") != -1) {
                ping.payload["wt.elq_country"] = countryValue[i].substring(2);
                break;
              }
            }
          } else {
            if (window.countryCode != undefined) {
              ping.payload["wt.elq_country"] = window.countryCode;
            }
          }
        } else {
          if (window.countryCode != undefined) {
            ping.payload["wt.elq_country"] = window.countryCode;
          }
        }
        if (window.formHtmlName) {
          ping.payload["wt.z_isgated"] = 1;
        } else {
          ping.payload["wt.z_isgated"] = 0;
        }
        ORA.analytics.rmMutation("elqTrack");
      }
    };
    ORA.analytics.addMutation("elqTrack", elqTrack);
  })();
  function getStepData() {
    var data = {
        s_pageName: window.s_pageName
          ? window.s_pageName.toLocaleLowerCase()
          : "",
        formHtmlName: window.formHtmlName,
        formURL: window.formURL,
        redirURL: window.redirURL,
        pageURL: window.location.href.split("?")[0].toLocaleLowerCase(),
      },
      stepNumber,
      stepName;
    if (data.s_pageName.indexOf("welcome") != -1) {
      stepNumber = "1";
      stepName = "Welcome";
    } else {
      if (data.s_pageName.indexOf("survey") != -1) {
        stepNumber = "2";
        stepName = "Survey";
      } else {
        if (
          data.s_pageName.indexOf("thanks") != -1 ||
          data.s_pageName.indexOf("thank you") != -1 ||
          data.s_pageName.indexOf("thankyou") != -1
        ) {
          stepNumber = "3";
          stepName = "Thanks";
        } else {
          if (window.WelcomeURL != undefined) {
            if (
              window.WelcomeURL.toLocaleLowerCase().indexOf(data.pageURL) != -1
            ) {
              stepNumber = "1";
              stepName = "Welcome";
            }
          } else {
            if (window.SurveyURL != undefined) {
              if (
                window.SurveyURL.toLocaleLowerCase().indexOf(data.pageURL) != -1
              ) {
                stepNumber = "2";
                stepName = "Survey";
              }
            } else {
              if (window.ThankyouURL != undefined) {
                if (
                  window.ThankyouURL.toLocaleLowerCase().indexOf(
                    data.pageURL
                  ) != -1
                ) {
                  stepNumber = "3";
                  stepName = "Thanks";
                }
              } else {
                if (data.formURL && !data.formHtmlName) {
                  stepNumber = "3";
                  stepName = "Thanks";
                } else {
                  if (data.formHtmlName) {
                    stepNumber = "1";
                    stepName = "Welcome";
                  } else {
                    if (window.ora_stepNumber && window.ora_stepName) {
                      stepNumber = window.ora_stepNumber;
                      stepName = window.ora_stepName;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (stepNumber && stepName) {
      return { ora_stepNumber: stepNumber, ora_stepName: stepName };
    }
  }
  function getUrlVariables() {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      }
    );
    return vars;
  }
}
if (location.hostname.indexOf("custhelp.com") != -1) {
  (function () {
    var countryChanged = false;
    var chat_status = "presented";
    var chat_id;
    var prodInterest;
    var sel_country, country_value;
    var userInfo = getUserInfo();
    var url = window.location.href;
    var reqSrc = url.split("request_source/")[1];
    if (reqSrc != null) {
      reqSrc = reqSrc.split("/")[0];
    }
    var chatType;
    switch (reqSrc) {
      case "8":
        chatType = "Reactive";
        break;
      case "5":
        chatType = "Proactive";
        break;
      default:
        chatType = "static";
    }
    var s_country_location = document
      .getElementsByTagName("html")[0]
      .getAttribute("lang");
    if (s_country_location) {
      s_country_location = s_country_location.split("-");
    } else {
      s_country_location = "en-us";
      s_country_location = s_country_location.split("-");
    }
    function s_getChatURLElement(elt) {
      var eltValue = "";
      var eltArray = new Array();
      if (typeof elt == "undefined" || elt == "") {
        return eltValue;
      }
      eltArray = document.URL.split("$");
      var al = eltArray.length;
      for (i = 0; i < al; i++) {
        if (eltArray[i].indexOf(elt) != -1) {
          eltValue = unescape(eltArray[i].split("/")[1]).replace(/ /gi, "_");
          eltValue = eltValue.split("?")[0];
          i = al + 1;
        }
      }
      return eltValue != "" ? eltValue : "";
    }
    var chatReferrerURL = s_getChatURLElement("sc_web_page_url");
    var refurl2 =
      chatReferrerURL == "" ? "none" : chatReferrerURL.split("?")[0];
    var chat_title = s_getChatURLElement("sc_web_page_title")
      ? s_getChatURLElement("sc_web_page_title")
      : document.title;
    function s_AgentEntersChatEvent() {
      chat_status = "started";
      chat_id =
        window.chat_engagement_id || (window.chatID && window.chatID.value);
      chat_title = "ChatWithAgent";
      try {
        var chatbot_data = {
          "wt.z_chat_invite_type": chatType,
          "wt.z_chat_form_type": "saleschat",
          "wt.z_chat_url": refurl2,
          "wt.z_chat_language": s_country_location[0].toLowerCase(),
          "wt.z_chat_event": chat_status,
          "wt.gcm_uid": userInfo.profileGUID,
          "wt.p_status": userInfo.userType,
          "wt.p_cookie_att": userInfo.cookieName,
          "wt.url_es": window.location.href,
        };
        if (
          document.getElementById(
            "rn_SelectionInput_2_Incident.CustomFields.c.sc_country"
          )
        ) {
          sel_country = document.getElementById(
            "rn_SelectionInput_2_Incident.CustomFields.c.sc_country"
          );
          country_value = sel_country.options[sel_country.selectedIndex].text;
          chatbot_data["wt.z_chat_country"] = country_value;
        } else {
          chatbot_data["wt.z_chat_country"] =
            s_country_location[1].toLowerCase();
        }
        if (chat_title) {
          chatbot_data["wt.z_chat_title"] = "chat:" + chat_title;
        }
        if (prodInterest) {
          chatbot_data["wt.z_chat_poi"] = prodInterest;
        }
        if (chat_id) {
          chatbot_data["wt.z_chat_engmt_id"] = chat_id;
        }
        ORA.view({ config: {}, data: chatbot_data });
      } catch (e) {
        console.log(e);
      }
    }
    function s_AgentUnavailable() {
      chat_status = "refused";
      chat_title = "AgentNotAvailable";
      ORA.analytics.addMutation("salesChatTracking", setChatPageValues);
      ORA.view({ config: {} });
    }
    var engagement_targetNode = document.getElementById(
      "rn_ChatEngagementStatus_5_Status"
    );
    if (engagement_targetNode) {
      chat_status = "initiated";
      chat_title = "SalesChatAgentWindowOpen";
    }
    var engagement_config = { childList: true, subtree: true };
    var engagement_callback = function (mutationsList) {
      mutationsList.forEach(function (mutation) {
        if (mutation.addedNodes.length > 0) {
          if (mutation.addedNodes[0].data == "Connected") {
            try {
              s_AgentEntersChatEvent();
            } catch (e) {}
          } else {
            if (mutation.addedNodes[0].data == "Agent Unavailable") {
              try {
                s_AgentUnavailable();
              } catch (e) {}
            }
          }
        }
      });
    };
    var engagement_observer = new MutationObserver(engagement_callback);
    if (engagement_targetNode) {
      engagement_observer.observe(engagement_targetNode, engagement_config);
    }
    var setChatPageValues = function (ping) {
      prodInterest = document.getElementById(
        "rn_ProductCategoryInput_5_Button_Visible_Text"
      )
        ? document.getElementById(
            "rn_ProductCategoryInput_5_Button_Visible_Text"
          ).innerText
        : "";
      if (ping.payload["wt.dl"] == "0") {
        ping.payload["wt.z_chat_invite_type"] = chatType;
        ping.payload["wt.z_chat_form_type"] = "saleschat";
        ping.payload["wt.z_chat_url"] = refurl2;
        ping.payload["wt.z_chat_language"] =
          s_country_location[0].toLowerCase();
        if (
          document.getElementById(
            "rn_SelectionInput_2_Incident.CustomFields.c.sc_country"
          )
        ) {
          console.log("element");
          sel_country = document.getElementById(
            "rn_SelectionInput_2_Incident.CustomFields.c.sc_country"
          );
          country_value = sel_country.options[sel_country.selectedIndex].text;
          ping.payload["wt.z_chat_country"] = country_value;
        } else {
          console.log("no element");
          ping.payload["wt.z_chat_country"] =
            s_country_location[1].toLowerCase();
        }
        if (chat_title) {
          ping.payload["wt.z_chat_title"] = "chat:" + chat_title;
        }
        if (prodInterest) {
          ping.payload["wt.z_chat_poi"] = prodInterest;
        }
        ping.payload["wt.z_chat_event"] = chat_status;
        ping.payload["wt.gcm_uid"] = userInfo.profileGUID;
        ping.payload["wt.p_status"] = userInfo.userType;
        ping.payload["wt.p_cookie_att"] = userInfo.cookieName;
        ping.payload["wt.url_es"] = window.location.href;
        if (chat_id) {
          ping.payload["wt.z_chat_engmt_id"] = chat_id;
        }
        ORA.analytics.rmMutation("salesChatTracking");
      }
    };
    ORA.analytics.addMutation("salesChatTracking", setChatPageValues);
  })();
  /*! Plugin version */
}
(function () {
  var version = "1.23";
  function versionTracking(ping) {
    if (ping.payload["wt.dl"] == "0") {
      ping.payload["wt.plgcm_tv"] = version;
      ORA.analytics.rmMutation("pluginVersioning");
    }
  }
  ORA.analytics.addMutation("pluginVersioning", versionTracking);
})();
