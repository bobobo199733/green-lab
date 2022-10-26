//tealium universal tag - utag.5 ut4.0.202208262248, Copyright 2022 Tealium.com Inc. All Rights Reserved.
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
    u.ev = { view: 1, link: 1 };
    u.initialized = false;
    u.scriptrequested = false;
    u.queue = [];
    u.clearEmptyKeys = function (object) {
      for (var key in object) {
        if (object[key] === "" || object[key] === undefined) {
          delete object[key];
        }
      }
      return object;
    };
    u.map = {
      infinity_account: "account_guid",
      infinity_tag_id: "tag_id",
      infinity_context: "context",
    };
    u.extend = [
      function (a, b, c, d, e, f, g) {
        if (1) {
          d = b["location_hostname"];
          if (typeof d == "undefined") return;
          c = [
            { "community.oracle.com": "oraclecommunity" },
            { "blogs.oracle.com": "oracleblogs" },
            { "www.ateam-oracle.com": "oracleblogs" },
            { "developer.oracle.com": "oracle" },
            { "go.java": "gojava" },
            { "oraclefoundation.org": "oracle" },
            { "www.oracle.com": "oracle" },
            { "alpha.oraclefoundation.org": "oracle" },
            { "reg.rf.oracle.com": "oracle" },
            { "reg.rainfocus.com": "oracle" },
            { "developer-stage.oracle.com": "oracle" },
          ];
          var m = false;
          for (e = 0; e < c.length; e++) {
            for (f in utag.loader.GV(c[e])) {
              if (d == f) {
                b["infinity_tag_id"] = c[e][f];
                m = true;
              }
            }
            if (m) break;
          }
        }
      },
      function (a, b) {
        try {
          if (typeof b["is_stage"] != "undefined") {
            try {
              b["infinity_context"] =
                b.is_stage == "true" ? "analytics:development" : "";
            } catch (e) {}
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            b["infinity_account"] = "wh3g12c3gg";
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            typeof b["location_hostname"] != "undefined" &&
            typeof b["dom.pathname"] != "undefined" &&
            b["location_hostname"].toString().toLowerCase() ==
              "www.oracle.com".toLowerCase() &&
            b["dom.pathname"]
              .toString()
              .toLowerCase()
              .indexOf("/partners".toLowerCase()) > -1
          ) {
            b["infinity_tag_id"] = "partners";
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (
            typeof b["location_hostname"] != "undefined" &&
            typeof b["dom.pathname"] != "undefined"
          ) {
            if (
              (b.location_hostname == "www-sites.oracle.com" ||
                b.location_hostname == "www-content.oracle.com") &&
              b["dom.pathname"] !== "/go.java"
            ) {
              if (b["dom.pathname"].indexOf("/oraclefoundation.org/") === -1) {
                b.infinity_tag_id = "oracle";
              }
            } else if (b.location_hostname == "community-stage.oracle.com") {
              b.infinity_tag_id = "oraclecommunity";
            } else if (b.location_hostname == "blogs-stage.oracle.com") {
              b.infinity_tag_id = "oracleblogs";
            } else if (
              (b.location_hostname == "www-stage.oracle.com" &&
                b["dom.pathname"] == "/developer.oracle.com") ||
              ((b.location_hostname ==
                "orasitesdev-prodapp.cec.ocp.oraclecloud.com" ||
                b.location_hostname ==
                  "orasitestest-prodapp.ocecdn.oraclecloud.com" ||
                b.location_hostname ==
                  "orasites-prodapp.ocecdn.oraclecloud.com") &&
                b["dom.pathname"].indexOf("/devo/") != -1)
            ) {
              b.infinity_tag_id = "oracle";
            } else if (
              b.location_hostname == "www-stage.oracle.com" &&
              b["dom.pathname"].indexOf("/search") != -1
            ) {
              b.infinity_tag_id = "oracle";
            } else if (
              b.location_hostname == "www-sites.oracle.com" &&
              b["dom.pathname"] == "/go.java"
            ) {
              b.infinity_tag_id = "gojava";
            } else if (
              b.location_hostname == "www-stage.oracle.com" &&
              b["dom.pathname"].indexOf("/partners") != -1
            ) {
              b.infinity_tag_id = "partners";
            } else if (
              b.location_hostname == "www-stage.oracle.com" ||
              b.location_hostname == "www-qa.oracle.com" ||
              b.location_hostname == "www-dev1.oracle.com" ||
              b.location_hostname ==
                "orasitesdev-prodapp.ocecdn.oraclecloud.com"
            ) {
              b.infinity_tag_id = "oracle";
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
      function (a, b) {
        try {
          if (1) {
            if (
              a == "view" &&
              typeof b.fire_tags == "undefined" &&
              !utag.onload_flag[id]
            ) {
              (function (_data, _id) {
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
                      utag.view(_data, null, [_id]);
                    }
                  } else if (utag_data["cp.notice_behavior"]) {
                    if (
                      utag_data["cp.notice_behavior"].indexOf("implied") != -1
                    ) {
                      utag.view(_data, null, [_id]);
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
                  utag.view(_data, null, [_id]);
                }
              })(utag.handler.C(b), id);
              utag.onload_flag[id] = 1;
              return false;
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      },
    ];
    u.loader_cb = function (a, b, c) {
      utag.DB("send:5:CALLBACK");
      u.initialized = true;
      var key,
        params = {
          config: {
            callbacks: {
              success: u.data.successCallback,
              fail: u.data.failCallback,
            },
            mutation: u.data.mutation,
          },
        };
      if (u.data.oi_data["wt.tx_cartid"] && !u.data.transaction_event_type) {
        u.data.oi_data["wt.tx_e"] = "p";
      } else if (u.data.transaction_event_type) {
        u.data.oi_data["wt.tx_e"] = u.data.transaction_event_type;
      }
      params["data"] = u.data.oi_data;
      for (key in params.data) {
        if (
          params.data.hasOwnProperty(key) &&
          utag.ut.typeOf(params.data[key]) === "array"
        ) {
          params.data[key] = params.data[key].join(u.data.delimiter);
        }
      }
      params.data = u.clearEmptyKeys(params.data);
      if (!window.ORA) {
        window.ORA = { productReady: [] };
      }
      utag.DB("send:5:CALLBACK:COMPLETE");
    };
    u.callBack = function () {
      var data = {};
      while ((data = u.queue.shift())) {
        u.data = data.data;
        u.loader_cb(data.a, data.b, data.c);
      }
    };
    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:5");
        utag.DB(b);
        var c, d, e, f, h;
        u.data = {
          delimiter: ";",
          base_url:
            "//d.oracleinfinity.io/infy/acs/account/##utagreplace_account_guid##/js/##utagreplace_tag_id##/odc.js",
          account_guid: "",
          tag_id: "",
          context: "",
          successCallback: null,
          failCallback: null,
          mutation: null,
          oi_data: {
            "wt.pn_id": [],
            "wt.pn_sku": [],
            "wt.tx_u": [],
            "wt.product_name": [],
            "wt.pn_ma": [],
            "wt.pn_gr": [],
            "wt.pn_sc": [],
            "wt.product_price": [],
            "wt.product_discount": [],
            "wt.tx_s": [],
            "wt.product_discount_line_item": [],
          },
          transaction_event_type: "",
        };
        for (c = 0; c < u.extend.length; c++) {
          try {
            d = u.extend[c](a, b);
            if (d == false) return;
          } catch (e) {}
        }
        utag.DB("send:5:EXTENSIONS");
        utag.DB(b);
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (u.data.hasOwnProperty(e[f])) {
                u.data[e[f]] = b[d];
              } else {
                u.data.oi_data[e[f]] = b[d];
              }
            }
          } else {
            h = d.split(":");
            if (h.length === 3 && b[h[0]] === h[1]) {
              if (u.map[d]) {
                u.data.transaction_event_type = u.map[d];
              }
            }
          }
        }
        utag.DB("send:5:MAPPINGS");
        utag.DB(u.data);
        var eCommerceMapping = {
          _corder: { name: "wt.tx_cartid", array_support: false },
          _ctotal: { name: "wt.cart_total", array_support: false },
          _csubtotal: { name: "wt.cart_subtotal", array_support: false },
          _cship: { name: "wt.cart_shipping", array_support: false },
          _ctax: { name: "wt.cart_tax", array_support: false },
          _ccurrency: { name: "wt.currency", array_support: false },
          _cpromo: { name: "wt.product_coupon", array_support: false },
          _cprod: { name: "wt.pn_id", array_support: true },
          _csku: { name: "wt.pn_sku", array_support: true },
          _cquan: { name: "wt.tx_u", array_support: true },
          _cprodname: { name: "wt.product_name", array_support: true },
          _cbrand: { name: "wt.pn_ma", array_support: true },
          _ccat: { name: "wt.pn_gr", array_support: true },
          _ccat2: { name: "wt.pn_sc", array_support: true },
          _cprice: { name: "wt.product_price", array_support: true },
          _cpdisc: { name: "wt.product_discount", array_support: true },
        };
        Object.keys(eCommerceMapping).forEach(function (key) {
          var mappingName = eCommerceMapping[key].name;
          var eCommerceKeyValue = b[key];
          if (
            eCommerceMapping[key].array_support &&
            u.data.oi_data[mappingName].length === 0 &&
            eCommerceKeyValue !== undefined
          ) {
            u.data.oi_data[mappingName] = eCommerceKeyValue.slice(0);
          } else if (!eCommerceMapping[key].array_support) {
            u.data.oi_data[mappingName] =
              u.data.oi_data[mappingName] || eCommerceKeyValue || "";
          }
        });
        if (b._corder) {
          u.data.oi_data["wt.tx_i"] =
            u.data.oi_data["wt.tx_i"] || b._corder || "";
        }
        (b._cprice || []).forEach(function (item, index) {
          u.data.oi_data["wt.tx_s"][index] =
            (Number(b._cprice[index]) - Number(b._cpdisc[index])) *
            Number(b._cquan[index]);
        });
        (b._cprice || []).forEach(function (item, index) {
          u.data.oi_data["wt.product_discount_line_item"][index] =
            Number(b._cpdisc[index]) * Number(b._cquan[index]);
        });
        if (!u.data.account_guid) {
          utag.DB(
            u.id +
              ": Tag not fired: Required attribute account_guid not populated"
          );
          return;
        }
        if (!u.data.tag_id) {
          utag.DB(
            u.id + ": Tag not fired: Required attribute tag_id not populated"
          );
          return;
        }
        u.data.base_url = u.data.base_url.replace(
          "##utagreplace_account_guid##",
          u.data.account_guid
        );
        u.data.base_url = u.data.base_url.replace(
          "##utagreplace_tag_id##",
          u.data.tag_id
        );
        if (u.data.context) {
          u.data.base_url += u.data.context.match("^analytics:")
            ? "?_ora.context=" + u.data.context
            : "?_ora.context=analytics:" + u.data.context;
        }
        if (u.initialized) {
          u.loader_cb(a, b, c);
        } else {
          u.queue.push({ data: u.data, a: a, b: b, c: c });
          var scripts = document.getElementsByTagName("SCRIPT");
          for (var s = 0; s < scripts.length; s++) {
            if (
              scripts[s].src &&
              /oracleinfinity.*odc\.\js/.test(scripts[s].src)
            ) {
              u.scriptrequested = true;
            }
          }
          if (u.scriptrequested) {
            u.callBack();
          } else {
            u.scriptrequested = true;
            u.loader({
              type: "script",
              src: u.data.base_url,
              cb: u.callBack,
              loc: "script",
              id: "utag_5",
              attrs: {},
            });
          }
        }
        utag.DB("send:5:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("5", "oracle.main");
} catch (error) {
  utag.DB(error);
}
