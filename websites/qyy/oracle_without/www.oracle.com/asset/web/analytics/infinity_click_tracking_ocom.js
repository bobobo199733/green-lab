/*!
######################################################

# INFINITY_CLICK_TRACKING_OCOM.JS

# Version: 1.03

# BUILD DATE: Tue Mar 31 2020 19:26:11 GMT+0530 (India Standard Time)

# COPYRIGHT ORACLE CORP 2020 [UNLESS STATED OTHERWISE]

######################################################
*/
!(function () {
  if (-1 == window.location.href.indexOf("customClickTracking=false")) {
    var version = "1.03";
    function gotjQ() {
      try {
        var jq = !!jQuery;
      } catch (err) {
        var jq = !1;
      }
      return jq;
    }
    window.infinityVars = {};
    var trackas = [];
    function getHostName(r) {
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
    }
    window.jQuery &&
      jQuery(document).ready(function ($) {
        $('a[rel*="lightbox"],a[rel*="opop"]').each(function () {
          var type = "opop" == $(this).attr("rel") ? "popup" : "lightbox";
          !$(this).attr("data-lbl") && $(this).attr("title")
            ? $(this).attr(
                "data-lbl",
                type +
                  "-open-" +
                  $(this).attr("title").toLowerCase().replace(/ /g, "-")
              )
            : !$(this).attr("data-lbl") && $(this).text()
            ? $(this).attr(
                "data-lbl",
                type +
                  "-open-" +
                  $(this).text().toLowerCase().replace(/ /g, "-")
              )
            : $(this).attr("data-lbl")
            ? $(this).attr(
                "data-lbl",
                $(this).attr("data-lbl") + "-" + type + "-open"
              )
            : $(this).attr("data-lbl", type + "-open");
          $(this).attr("data-trackas") || $(this).attr("data-trackas", type);
        });
        for (var i = 0; i < trackas.length; i++) {
          !$(trackas[i][0]).attr("data-trackas") &&
            trackas[i][1] &&
            $(trackas[i][0]).attr("data-trackas", trackas[i][1]);
          trackas[i][2] && "resetpage" == trackas[i][2]
            ? $(trackas[i][0]).attr("data-pgreset", "true")
            : trackas[i][2] &&
              !$(trackas[i][0]).attr("data-lbl") &&
              $(trackas[i][0]).attr("data-lbl", trackas[i][2]);
        }
        $(document).on(
          "click",
          "*[data-trackas] a,a[data-trackas]",
          function (e) {
            var lbl = "",
              o = $(this);
            if ("notrack" != o.attr("data-lbl")) {
              if (o.attr("data-lbl")) lbl = o.attr("data-lbl");
              else if (o.attr("name")) lbl = o.attr("name");
              else if (o.attr("title")) lbl = o.attr("title");
              else if (o.find("img") && o.find("img").first().attr("title"))
                lbl = o.find("img").first().attr("title");
              else if (o.find("img") && o.find("img").first().attr("alt"))
                lbl = o.find("img").first().attr("alt");
              else if (o.find("img").first().attr("src")) {
                lbl = o.find("img").first().attr("src");
                lbl = lbl.split("/")[lbl.split("/").length - 1];
              } else lbl = o.text();
              var d = o.closest("[data-trackas]").attr("data-trackas");
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
              if (!o.attr("data-trackas"))
                for (; o.parent(); ) {
                  o = o.parent();
                  o.attr("data-lbl") && (lbl = o.attr("data-lbl") + d + lbl);
                  if (o.attr("data-trackas")) break;
                }
              lbl = lbl.toLowerCase().replace(/ /g, "-").replace(/-+/g, "-");
              var sec = o.attr("data-trackas")
                ? o.attr("data-trackas")
                : o.closest("*[data-trackas]").attr("data-trackas");
              if (
                "menu" ===
                  $(this).closest("[data-trackas]").attr("data-trackas") &&
                "header" ===
                  $(this)
                    .closest("[data-trackas]")
                    .parents("[data-trackas]")
                    .attr("data-trackas")
              ) {
                var submenu = "",
                  linkText = $(this).text()
                    ? $(this)
                        .text()
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/-+/g, "-")
                    : lbl;
                if ($(this).parents("ul").parent("li").children("h3")) {
                  submenu = $(this)
                    .parents("ul")
                    .parent("li")
                    .children("h3")
                    .text()
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/-+/g, "-");
                  submenu = submenu ? submenu + " > " : "";
                }
                lbl = "menu: " + submenu + linkText;
              }
              "cw22-carouseltop" != sec && infClickTrack($(this), sec, lbl);
            }
          }
        );
      });
    function infClickTrack(ele, sec, lbl) {
      var datapayload = {
          "wt.plgck_tv": version,
          "wt.z_cplugin": 1,
          "wt.plgck_ti": lbl.replace(/\s/g, ""),
          "wt.nv": sec.trim(),
        },
        destLocation,
        hostObj,
        path;
      if (ele.attr("href") && 0 !== ele.attr("href").indexOf("#")) {
        destLocation = ele.attr("href");
        if (getHostName(destLocation)) {
          hostObj = getHostName(destLocation);
          datapayload.dcssip = hostObj.host;
        }
        if (-1 == destLocation.indexOf("javascript:")) {
          var pathArr = destLocation.split("?");
          hostObj && (pathArr[0] = pathArr[0].replace(hostObj.origin, ""));
          path = pathArr.join("?");
          datapayload.dcsuri = path;
        }
        ("footer" != sec && "ffooter" != sec) ||
          -1 == lbl.indexOf("country-") ||
          (datapayload["wt.z_ctry_change"] = lbl);
      }
      if ("header" == sec) {
        var linkLbl = $(ele).closest("[data-lbl]").attr("data-lbl");
        if (linkLbl) {
          var matchArr = linkLbl.match(/^(search-row:(\d+))$/i),
            linkRowNo = matchArr && matchArr[2] ? matchArr[2] : null;
          linkRowNo && (datapayload["wt.oss_pc"] = linkRowNo);
        }
        $(ele).closest(".cb19v2").hasClass("u28proimg") &&
          (datapayload["wt.oss_plc"] = lbl.replace(/\s/g, ""));
        if ($(ele).closest(".u28result")) {
          var contentType =
            $(ele).closest(".u28result").find(".u28type > span").length > 0
              ? $(ele).closest(".u28result").find(".u28type > span").text()
              : $(ele).closest(".u28result").hasClass("u28video")
              ? "video"
              : null;
          contentType &&
            (datapayload["wt.z_content_type"] = contentType.toLowerCase());
        }
      }
      ORA.click({ config: {}, data: datapayload });
    }
    var initCallback = function (config, asyncReady) {
      asyncReady && asyncReady();
    };
    ORA.regPlugin("infinity_click_tracking_ocom", initCallback, {
      blockCollect: !1,
    });

    /*! Click Tracking V1.00 */
    var trackas = [
      ["div.c01w4", "c01"],
      ["div.c04", "c04"],
      ["div.c19w1", "social"],
      ["div.c22", "c22"],
      ["div.c25w1", "c25w1"],
      ["div.c25w2", "c25w2"],
      ["div.c26w5", "c26w5"],
      ["div.c31", "c31"],
      ["div.c37", "c37"],
      ["div.c37w2", "BillBoard-CTA"],
      ["div.c37w3", "c37w3"],
      ["div.c38", "c38"],
      ["div.c40", "c40"],
      ["div.c48", "c48"],
      ["div.c49", "c49"],
      [".c51v0", "assets"],
      [".c51v1", "rhs-assets"],
      [".c51v2", "full-width-carousel"],
      [".c51v3", "dual-carousel"],
      ["div.c52w1", "c52w1"],
      ["div.c52w2", "subfeature"],
      [".c52v0", "subfeature"],
      ["div.c54v1", "c54v1"],
      ["div.c54w1", "c54w1"],
      ["div.c54w4", "c54w4"],
      [".c54plan", "c54plan"],
      [".c54support", "c54support"],
      [".c54people", "c54people"],
      [".c54sales", "c54sales"],
      [".c54social", "c54social"],
      [".c54apps", "c54apps"],
      [".c54gears", "c54gears"],
      ["a.c26link", !1, "notrack"],
      ["li.cn02menu", "cn02menu"],
      ["li.cn02more", "cn02moremenu"],
      ["div.ct02", "ct02"],
      ["div.ct05c1", "ct05tab"],
      ["div.ct05w2", "ct05asset"],
      ["div.ct05c1", "ct05c1"],
      ["div.cw01", "cw01"],
      ["div.cw01 a.cw01steplink", "cw01", "resetpage"],
      ["div.cw02", "cw02"],
      ["div.cw03", "cw03"],
      ["a.cw19prev", "cw19prev"],
      ["a.cw19next", "cw19next"],
      ["li.cw19thumb", "cw19thumb"],
      ["div.w06", "w06"],
      [".s09", "live-chat"],
      [".s11", "rhs-assets"],
      ["#atgchat-body", "atg-chat"],
      [".fblike", "facebooklike"],
      [".fbicon", "facebook"],
      [".inicon", "linkin"],
      [".twicon", "twitter"],
      [".yticon", "youtube"],
      [".blicon", "oracle-blogs"],
      ["div.f02w2", "f02w2"],
      ["div.f02w3", "f02w3"],
      ["div.cb21", "cb21", "expand"],
      ["div.cb21w1", "cb21w1", "expand-link"],
      ["div.cb13", "cb13", "herop"],
      ["div.c87", "c87"],
      ["div.cb27", "cb27"],
      ["div.cw40", "cw40"],
      ["div.cw55slide div", "cw55slide"],
      ["div.cw56", "cw56"],
    ];
    trackas.push(
      ["div.cw22cta", "herocw22cta"],
      ["div.cw22w3", "herocw22w3-button"],
      ["div.cw24w2", "cw24w2"],
      ["div.cw24img", "cw24img-withpopups"],
      ["div.c74w3", "c74w3-selectYourRole"],
      ["div.ct06", "ct06-carouselMenu"],
      ["div#cw25shuffle", "cw25shuffle"],
      ["div.cn11", "cn11-getStarted"],
      ["a.cw23facebook", "cw23", "facebook"],
      ["a.cw23twitter", "cw23", "twitter"],
      ["a.cw23youtube", "cw23", "youtube"],
      ["a.cw23linkedin", "cw23", "linkedin"],
      ["a.cw23blog", "cw23", "blog"],
      ["a.cw23newsletter", "cw23", "newsletter"],
      ["ul.cw21navigation", "cw21navigation"],
      ["div.ct06w3", "ct06-carouselSubMenu"],
      ["div.cn10", "cn10"],
      ["div.u01mmenu", "header", "menu"],
      ["div.u01mlogo", "header", "logo"],
      ["div.u01msearch", "header", "search"],
      ["div.ct07w3", "ct07w3"],
      ["div.cn07", "cn07anchor"],
      ["div.cn12", "cn12-anchor-list"],
      ["ul.cw29items", "cw29items"],
      ["li.cw30-face", "cw30-face"],
      ["a.cw30open", "cw30open", "+"],
      ["img.cw30-close", "cw30-close", "x"],
      ["a.cw27close", "cw27close", "x"],
      ["a.cw27-scroll-up", "cw27-scroll", "up"],
      ["a.cw27-scroll-down", "cw27-scroll", "down"],
      ["div.cw27w3", "cw27w3"],
      ["div.c75w1", "c75w1"],
      ["div.c75w2", "c75w2"],
      ["div.cw29", "cw29"],
      ["div.cw31w1", "cw31w1"],
      ["div.cw31w4", "cw31w4"],
      ["div.cw32viewport", "cw32viewport"],
      ["div.cw32seeall", "cw32seeall"],
      ["div#cw21-socialtab", "cw21-socialtab"],
      ["div#cw21-trytab", "cw21-trytab"],
      ["div#cw21-demotab", "cw21-demotab"],
      ["div.cw20w3", "cw20w3", "imagethumbs"],
      ["div.cw33w3", "cw33w3"],
      ["div.cw36", "cw36-panel"],
      ["div.cn14", "cn14"],
      ["div.c83", "c83"],
      ["div.c84", "c84"],
      ["div.c85", "c85"],
      ["div.c90", "c90"]
    );
    trackas.push(
      ["div.c92", "c92-topiclinks"],
      ["div.c91w2", "c91w2-social"],
      ["div.c93", "c93-pressreleases"],
      ["div.cw05", "cw05"],
      ["div.cw26w4", "cw26w4"],
      ["div.cw34w4", "cw34w4"]
    );
    trackas.push(
      ["div.cw37w2", "cw37w2"],
      ["div.cw38w1", "cw38w1"],
      ["ul.cw38icons", "cw38icons"],
      ["div.cw38slides", "cw38slides"],
      ["div.cw39w1", "cw39w1"],
      ["div.c86w1", "c86w1"],
      ["div.c75v2hr", "c75v2hr"],
      ["div.c78w1", "c78w1-carrousel"],
      ["div.c98w1", "c98w1"],
      ["div.c81", "c81"]
    );
    trackas.push(
      ["div.cw52", "cw52"],
      ["div.cb09", "cb09"],
      ["div.cn20", "cn20"],
      ["div.cb10", "cb10"]
    );
    trackas.push(["div.cb15", "cb15"], ["div.cw54w3", "cw54w3"]);
    trackas.push(
      ["div.cw53", "cw53"],
      ["div.cb28w1", "cb28w1"],
      ["a.cw33open", "cw33open"],
      ["a.cw33close", "cw33close"],
      ["div.cb42", "cb42"]
    );
    trackas.push(["div.cb25", "cb25"]);
    trackas.push(
      ["div.hp10", "hp10"],
      ["div.cn24", "cn24"],
      ["div.hp11", "hp11"],
      ["div.cb50", "cb50"],
      ["div.cn27", "cn27"],
      ["div.cb25", "cb25"]
    );
    trackas.push(
      ["div.cw58", "cw58"],
      ["section.cw58", "cw58"],
      ["section.cw59", "cw59"],
      ["section.cb65", "cb65"],
      ["div.cb66", "cb66"],
      ["div.cb67", "cb67"],
      ["section.ch05", "ch05"],
      ["section.ch08", "ch08"],
      ["div.u03v4", "u03v4"],
      ["div.c80", "c80"]
    );
    trackas.push(
      ["div.c79", "c79"],
      ["div.cb33", "cb33"],
      ["nav.ct12", "ct12"],
      ["section.cb83", "cb83"],
      ["section.cw67", "cw67"],
      ["section.cb71", "cb71"],
      ["section.cb78", "cb78"],
      ["section.cb50", "cb50"],
      ["section.cb76", "cb76"],
      ["section.cb79", "cb79"]
    );
    trackas.push(["section.ct13", "ct13"], ["section.cb82", "cb82"]);
    window.jQuery &&
      jQuery(document).ready(function ($) {
        $("form.u01searchform").bind("submit", function (e) {
          infClickTrack($(this), "header", "search");
        });
        $("form.u02searchform").bind("submit", function (e) {
          var searchVal = $(this).find("#txtSearch").val();
          infClickTrack($(this), "header", "search:" + searchVal);
        });
        $("form.cb149searchform").bind("submit", function (e) {
          var searchVal = $(this).find("#cb149txtSearch").val();
          infClickTrack($(this), "cb149:search-center", "search:" + searchVal);
        });
        $("div.cb17 form[name=searchForm]").bind("submit", function (e) {
          var searchText = $("div.cb17 form[name=searchForm]")
            .find('input[type="text"]')
            .val();
          infClickTrack($(this), "search", searchText);
        });
        $(document).on(
          "click",
          "div.cw22snav a,div.cw22bnav a, div.cw22nnav a",
          function (e) {
            var btxt = $(this)
                .text()
                .replace(/[*,\r\n\t ]+/gi, ""),
              topORmid = $(this).closest("div.cw22v0").attr("data-trackas");
            topORmid = void 0 === topORmid ? "cw22-carousel" : topORmid;
            infClickTrack($(this), topORmid, btxt);
          }
        );
        $("li.cw30-face img.cw30-background,li.cw30-face div.cw30-text").bind(
          "click",
          function (e) {
            var btxt = $(this).closest("li").find("div.cw30-text h3").text();
            btxt = btxt.replace(/[*,\r\n\t ]+/gi, "");
            infClickTrack($(this), "cw30-face", btxt);
          }
        );
        $("div.cw29w2 a").bind("click", function (e) {
          var btxt = $(this).closest("a").find("h3.cw29title").text();
          btxt = btxt.replace(/[*,\r\n\t ]+/gi, "");
          infClickTrack($(this), "cw29w2-panel", btxt);
        });
        $("ul.cw27topiclist li").bind("click", function (e) {
          var btxt = $(this).text();
          btxt = btxt.replace(/[*,\r\n\t ]+/gi, "");
          infClickTrack($(this), "cw27topiclist", btxt);
        });
        $("div.cw21w3 a").bind("click", function (e) {
          infClickTrack($(this), "cw21w3-scrollto", "top");
        });
        $("div.cw55slide a.icn-cv-down").bind("click", function (e) {
          infClickTrack($(this), "cw55slide", "down-arrow");
        });
        $("div.cw55w3 ul li").bind("click", function (e) {
          var btxt = $(this).closest("li").find("a").text();
          infClickTrack($(this), "cw55w3", btxt);
        });
        $(document).on("click", "div.cb82w1", function (e) {
          if ($(this).attr("data-lbl")) var btxt = $(this).attr("data-lbl");
          else {
            var btxt = $(this).closest("div").find("div.slick-current")[0]
              ? $(this)
                  .closest("div")
                  .find("div.slick-current")[0]
                  .innerText.trim()
              : "";
            btxt = btxt ? btxt.replace(/[*,\r\n\t ]+/gi, "-") : btxt;
          }
          infClickTrack($(this), "cb82", btxt);
        });
        $(document).on(
          "click",
          "a.cw32next, a.cw32prev, div.cw32w2 div.cmps-bttns a",
          function (e) {
            if ($(this).attr("data-lbl")) var btxt = $(this).attr("data-lbl");
            else
              var btxt = $(this)
                .text()
                .trim()
                .replace(/[*,\r\n\t ]+/gi, "-");
            infClickTrack($(this), "cw32", btxt);
          }
        );
        $(document).on("click", "ul.cw32nav li a", function (e) {
          if ($(this).attr("data-lbl")) var btxt = $(this).attr("data-lbl");
          else
            var btxt = $(this)
              .text()
              .trim()
              .replace(/[*,\r\n\t ]+/gi, "-");
          infClickTrack($(this), "cw32nav", btxt);
        });
        $(document).on(
          "click",
          "a.cw26open, a.cw26close, div.cw26w4 a",
          function (e) {
            var btxt = $(this)
              .text()
              .replace(/[*,\r\n\t ]+/gi, "-");
            "" == btxt &&
              $(this).attr("title") &&
              (btxt = $(this)
                .attr("title")
                .replace(/[*,\r\n\t ]+/gi, ""));
            infClickTrack($(this), "cw26-spotlight", btxt);
          }
        );
        $("div.cw28w1").bind("click", function (e) {
          var btxt = $(this).parent().find("img.cw28-background").attr("alt");
          infClickTrack($(this), "cw28w1-expand", btxt);
        });
        $("div.cw28-detail").bind("click", function (e) {
          if (-1 != e.target.className.indexOf("cw28-close")) {
            var btxt = $(this).parent().find("img.cw28-background").attr("alt");
            infClickTrack($(this), "cw28w1-close", btxt);
          }
        });
        $("div.cw28-capabilities").bind("click", function (e) {
          var btxt = $(this)
            .find("a")
            .text()
            .replace(/[*,\r\n\t]+/gi, "")
            .trim();
          btxt = btxt.replace(/[" "]/g, "-");
          var title = $(this).parent().find("img.cw28-background").attr("alt");
          title = "undefined" != title || "" != title ? title + ":" : "";
          infClickTrack($(this), "cw28-capabilities", title + btxt);
        });
        $(document).on("click", "div.u02modw1 a", function (e) {
          var btxt = $(this).attr("data-lbl");
          infClickTrack($(this), "header:call:popup", btxt);
        });
        $(document).on("click", "li.u02menu-hasm a", function (e) {
          if (!$(this).attr("data-lbl")) {
            var btxt = $(this).siblings(".u02menu-l2").attr("data-lbl"),
              btxt1 = $(this).siblings(".u02menu-l3").attr("data-lbl");
            btxt = "undefined" != btxt || "" != btxt ? btxt : "";
            btxt1 = "undefined" != btxt1 || "" != btxt1 ? btxt1 : "";
            $(this).attr("data-lbl", btxt || btxt1);
          }
        });
        $(document).on("click", "a.u02clink", function (e) {
          if (!$(this).attr("data-lbl")) {
            var btxt = $(this).siblings(".u02cmenu-l2").attr("data-lbl");
            btxt = "undefined" != btxt || "" != btxt ? btxt : "";
            $(this).attr("data-lbl", btxt);
          }
        });
        $(document).on("click", "a.u02blink", function (e) {
          $(this).attr("data-lbl") || $(this).attr("data-lbl", "back");
        });
        $("div.hp10arrows button").bind("click", function (e) {
          if (-1 != $(this).attr("class").indexOf("prev"))
            var arrowTxt = "prev";
          else var arrowTxt = "next";
          var slideNo = $("div.hp10w2.slick-slide.slick-current.slick-active")
              .attr("data-lbl")
              .split(":")[1],
            btxt = $("div.hp10w2.slick-slide.slick-current.slick-active")
              .find("div.hp10w4")
              .attr("data-lbl");
          infClickTrack(
            $(this),
            "hp10",
            "hp:" + arrowTxt + ":show-" + slideNo + ":" + btxt
          );
        });
        $("div.hp10 ul.slick-dots li").bind("click", function (e) {
          var slideNo = $(this).text(),
            btxt = $("div.hp10w2.slick-slide.slick-current.slick-active")
              .find("div.hp10w4")
              .attr("data-lbl");
          infClickTrack(
            $(this),
            "hp10",
            "hp:radionav:show-hero" + slideNo + ":" + btxt
          );
        });
        $("div#hp11filters ul li a").bind("click", function (e) {
          var btxt = $("div.hp11w2.hp11BasePanel.currentpanel")
            .attr("data-lbl")
            .replace(/[*,\r\n\t ]+/gi, "-");
          infClickTrack($(this), "hp11", btxt);
        });
        $("div.cw58nav ul.slick-dots li").bind("click", function (e) {
          var slideNo = $(this).text(),
            btxt = $("div.cw58").attr("data-lbl")
              ? $("div.cw58").attr("data-lbl") + ":"
              : "";
          infClickTrack($(this), "cw58", "radionav" + slideNo + btxt);
        });
        $("div.cw58nav button").bind("click", function (e) {
          if (-1 != $(this).attr("class").indexOf("prev"))
            var arrowTxt = "previous";
          else var arrowTxt = "next";
          var btxt = $("div.cw58").attr("data-lbl")
            ? $("div.cw58").attr("data-lbl") + ":"
            : "";
          infClickTrack($(this), "cw58", btxt + arrowTxt);
        });
        $("ul.ct11tabs li").bind("click", function (e) {
          var btxt = $(this).attr("data-tab") ? $(this).attr("data-tab") : "";
          infClickTrack($(this), "ct11tabs", btxt);
        });
        $("div.cw60 a").bind("click", function (e) {
          var btxt = $(this)
              .text()
              .trim()
              .replace(/[*,\r\n\t ]+/gi, "-"),
            btxt1 = $(this).attr("data-lbl") ? $(this).attr("data-lbl") : btxt;
          infClickTrack($(this), "cw60", btxt1);
        });
        $("section.cw64 li").bind("click", function (e) {
          var btxt = $(this)
            .text()
            .trim()
            .replace(/[*,\r\n\t ]+/gi, "-");
          btxt = btxt ? btxt.split("-")[0] : "";
          infClickTrack($(this), "cw64", btxt);
        });
        $(document).on("click", "section.cw65 ul.slick-dots li", function (e) {
          var slideNo = $(this).text();
          infClickTrack($(this), "cw65", "slick-dots:" + slideNo);
        });
        $(document).on("click", "section.cw67 div.expando-btn", function (e) {
          -1 != $(this).attr("class").indexOf("expanded")
            ? infClickTrack($(this), "expando-btn", "close")
            : infClickTrack($(this), "expando-btn", "expand");
        });
        $("div.expando-btn").bind("click", function (e) {
          -1 != $(this).attr("class").indexOf("expanded")
            ? infClickTrack($(this), "expando-btn", "close")
            : infClickTrack($(this), "expando-btn", "expand");
        });
        $(document).on("click", "section.cw66 div.cw66w5", function (e) {
          var btxt =
            $(this).attr("data-lbl") ||
            $(this)
              .children()
              .closest("h4")[0]
              .innerText.replace(/[*,\r\n\t ]+/gi, "-");
          infClickTrack($(this), "cw66tile", btxt);
        });
        $("div.fp-controlArrow").bind("click", function (e) {
          if (-1 != $(this).attr("class").indexOf("prev"))
            var arrowTxt = "previous";
          else var arrowTxt = "next";
          infClickTrack($(this), "slidearrow-autodb", arrowTxt);
        });
        $(document).on("click", "div.tr-reviews-viewport a", function (e) {
          if (!$(this).attr("data-lbl")) {
            var ele = $(this),
              btxt = $(ele)
                .closest(".tr-card")[0]
                .querySelector(".tr-review-title a").innerText;
            btxt = btxt.replace(/[*,\r\n\t ]+/gi, "-");
            $(this).attr("data-lbl", btxt);
          }
        });
      });
  }
})();
