(() => {
  "use strict";
  var e,
    t,
    n,
    o = {
      279366: (e, t, n) => {
        n.d(t, { join: () => w });
        n(579665),
          n(95767),
          n(530522),
          n(175115),
          n(319371),
          n(66108),
          n(296253),
          n(850110),
          n(283946),
          n(21466),
          n(59357);
        var o = n(726271),
          i = n(787481),
          r = n(159121),
          a = n(376567),
          s = n(635676),
          c = n(803834),
          l = n(315544),
          u = n(386409),
          d = n(695724),
          _ = n(49535),
          g = n(654612),
          h = n(486125),
          m = n(786067),
          S = n(376852),
          v = n(70488),
          E = n(267394),
          p = n(559367),
          I = n(47647),
          R = n(517957),
          y = n(474123),
          T = n(659397);
        function j(e, t) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return f(e, t);
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var o = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return o >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[o++] };
                },
                e: function (e) {
                  throw e;
                },
                f: i,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var r,
            a = !0,
            s = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (a = e.done), e;
            },
            e: function (e) {
              (s = !0), (r = e);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw r;
              }
            },
          };
        }
        function f(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
          return o;
        }
        function C() {
          return (
            (C =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
            C.apply(this, arguments)
          );
        }
        function O(e, t) {
          cur[`${e}IsDirty`] || ((cur[`${e}IsDirty`] = !0), t());
        }
        function N() {
          var e;
          (null === (e = cur) || void 0 === e ? void 0 : e.fbSign) &&
            v.registrationItemStat.logFieldInteraction(
              v.RegistrationFieldItemNames.FACEBOOK_REGISTRATION,
              v.EventFieldValues.REGISTERED_VIA_FB
            );
        }
        function P() {
          var e,
            t = (0, l.ge)("join_phone");
          t &&
            v.registrationItemStat.logFieldInteraction(
              v.RegistrationFieldItemNames.PHONE_NUMBER,
              t.value,
              !0
            ),
            (null === (e = cur) || void 0 === e ? void 0 : e.uiPhoneCountry) &&
              v.registrationItemStat.logFieldInteraction(
                v.RegistrationFieldItemNames.PHONE_COUNTRY,
                cur.uiPhoneCountry.val(),
                !0
              );
        }
        var w = {
          show(e) {
            (0, l.isVisible)(e) || (0, s.slideDown)(e, 150);
          },
          hide(e) {
            (0, l.isVisible)(e) && (0, s.slideUp)(e, 150);
          },
          scrollnode: () => (o.browser.msie6 ? pageNode : window),
          scrollResize(e, t) {
            if (!o.browser.mobile || o.browser.safari_mobile) {
              var n = (0, c.scrollGetY)();
              !0 === t &&
                ((cur.nextButtonTop = (0, l.getXY)(cur.nextButtonWrap)[1]),
                o.browser.msie6 && (cur.nextButtonTop += n));
              var i =
                cur.resultShown &&
                n + lastWindowHeight <
                  cur.nextButtonTop +
                    cur.nextButtonHeight +
                    (0, d.intval)((0, l.getStyle)("content", "marginTop")) +
                    (0, l.ge)("page_header_cont").offsetHeight -
                    8;
              i && !cur.docked
                ? ((0, l.addClass)(cur.nextButton, "fixed"),
                  o.browser.msie6 &&
                    (bodyNode.appendChild(cur.nextButton),
                    (e = { type: "resize" })),
                  (cur.docked = !0))
                : !i &&
                  cur.docked &&
                  ((0, l.removeClass)(cur.nextButton, "fixed"),
                  o.browser.msie6 &&
                    cur.nextButtonWrap.appendChild(cur.nextButton),
                  (cur.docked = !1)),
                cur.docked &&
                  e &&
                  "resize" === e.type &&
                  (o.browser.msie6
                    ? (cur.nextButton.style.left =
                        (0, l.getXY)((0, l.ge)("content"))[0] + "px")
                    : ((cur.nextButton.style.left =
                        (0, l.ge)("page_layout").offsetLeft +
                        (0, l.ge)("content").offsetLeft +
                        "px"),
                      setTimeout(w.nextResetStyle, 0)));
            }
          },
          nextResetStyle() {
            cur.nextButton.style.left = "";
          },
          initScroll() {
            (0, d.extend)(cur, {
              nextButton: (0, l.ge)("join_" + cur.section + "_next"),
              nextButtonWrap: (0, l.ge)("join_" + cur.section + "_next_wrap"),
              resultEl: (0, l.ge)("join_" + cur.section + "_result"),
            }),
              (cur.nextButtonHeight = (0, l.getSize)(cur.nextButton)[1]),
              (cur.nextButtonWrap.style.height = cur.nextButtonHeight + "px"),
              (cur.resultShown = (0, l.isVisible)(cur.resultEl)),
              w.scrollResize(!1, !0),
              (0, _.addEvent)(w.scrollnode(), "scroll", w.scrollResize),
              (0, _.addEvent)(window, "resize", w.scrollResize),
              cur.destroy.push((e) => {
                (0, _.removeEvent)(w.scrollnode(), "scroll", w.scrollResize),
                  (0, _.removeEvent)(window, "resize", w.scrollResize),
                  o.browser.msie6 && e.nextButtonWrap.appendChild(e.nextButton);
              });
          },
          initStatsPhoneVerify() {
            var e = (0, l.ge)("join_called_phone"),
              t = (0, l.ge)("join_called_code"),
              n = (0, l.ge)("join_code"),
              o = () => {
                cur.isCalledPhoneElDirty ||
                  (v.registrationItemStat.logEvent(
                    v.RegistrationItemEventTypes.INPUT_CODE_INTERACTION,
                    cur.eventScreen
                  ),
                  (cur.isCalledPhoneElDirty = !0));
              };
            P(),
              v.registrationItemStat.logFieldInteraction(
                v.RegistrationFieldItemNames.SMS_CODE,
                n.value,
                !0
              ),
              cur.statsPhoneVerifyInited ||
                (e.addEventListener("keyup", () => {
                  v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.SMS_CODE,
                    e.value
                  ),
                    o();
                }),
                t.addEventListener("keyup", () => {
                  v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.SMS_CODE,
                    t.value
                  ),
                    o();
                }),
                n.addEventListener("keyup", () => {
                  v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.SMS_CODE,
                    n.value
                  ),
                    o();
                }),
                (cur.statsPhoneVerifyInited = !0));
          },
          initStatsPhone() {
            var e = (0, l.ge)("join_phone");
            v.registrationItemStat.logFieldInteraction(
              v.RegistrationFieldItemNames.PHONE_NUMBER,
              e.value,
              !0
            ),
              cur.statsPhoneInited ||
                (e.addEventListener("keyup", () => {
                  v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.PHONE_NUMBER,
                    e.value
                  ),
                    cur.isPhoneElDirty ||
                      (v.registrationItemStat.logEvent(
                        v.RegistrationItemEventTypes.INPUT_NUMBER_INTERACTION,
                        cur.eventScreen
                      ),
                      (cur.isPhoneElDirty = !0));
                }),
                (cur.statsPhoneInited = !0));
          },
          initStatsPassword() {
            var e = (0, l.ge)("join_pass");
            v.registrationItemStat.logFieldInteraction(
              v.RegistrationFieldItemNames.PASSWORD,
              e.value,
              !0
            ),
              cur.statsPasswordInited ||
                (e.addEventListener("keyup", () => {
                  v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.PASSWORD,
                    e.value
                  );
                }),
                (cur.statsPasswordInited = !0));
          },
          initStatsRules() {
            var e = (0, l.ge)("join_accept_terms_checkbox");
            v.registrationItemStat.logFieldInteraction(
              v.RegistrationFieldItemNames.RULES_ACCEPT,
              w.policyChecked() + "",
              !0
            ),
              cur.statsRulesInited ||
                (e.addEventListener("click", () => {
                  v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.RULES_ACCEPT,
                    w.policyChecked() + ""
                  );
                }),
                (cur.statsRulesInited = !0));
          },
          initStats() {
            (cur.eventScreen = v.EventScreens.REGISTRATION_PHONE),
              ((0, l.isVisible)("join_code_row") ||
                (0, l.isVisible)("join_called_phone_row") ||
                (0, l.isVisible)("join_called_code_row")) &&
                (cur.eventScreen = v.EventScreens.REGISTRATION_PHONE_VERIFY),
              (0, l.isVisible)("join_pass_row") &&
                (cur.eventScreen = v.EventScreens.REGISTRATION_PASSWORD),
              "done" === nav.objLoc.act &&
                (cur.eventScreen = v.EventScreens.REGISTRATION_COMPLETE),
              "contacts" === nav.objLoc.act &&
                (cur.eventScreen = v.EventScreens.REGISTRATION_COUNTRY),
              "education" === nav.objLoc.act &&
                (cur.eventScreen = v.EventScreens.REGISTRATION_EDUCATION),
              "email" === nav.objLoc.act &&
                (cur.eventScreen = v.EventScreens.REGISTRATION_EMAIL),
              cur.eventScreen === v.EventScreens.REGISTRATION_PHONE &&
                (w.initStatsPhone(), w.initStatsRules()),
              cur.eventScreen === v.EventScreens.REGISTRATION_PHONE_VERIFY &&
                (w.initStatsPhoneVerify(), w.initStatsRules()),
              cur.eventScreen === v.EventScreens.REGISTRATION_PASSWORD &&
                (w.initStatsPassword(), w.initStatsRules()),
              cur.eventScreen === v.EventScreens.REGISTRATION_COUNTRY &&
                (v.registrationItemStat.logFieldInteraction(
                  v.RegistrationFieldItemNames.COUNTRY,
                  `${cur.uiCountry.val()}`,
                  !0
                ),
                v.registrationItemStat.logFieldInteraction(
                  v.RegistrationFieldItemNames.CITY,
                  `${cur.uiCity.val()}`,
                  !0
                )),
              cur.eventScreen === v.EventScreens.REGISTRATION_EDUCATION &&
                (v.registrationItemStat.logFieldInteraction(
                  v.RegistrationFieldItemNames.COUNTRY,
                  `${cur.selData.country_val[0]}`,
                  !0
                ),
                v.registrationItemStat.logFieldInteraction(
                  v.RegistrationFieldItemNames.CITY,
                  `${cur.selData.city_val[0]}`,
                  !0
                ),
                v.registrationItemStat.logFieldInteraction(
                  v.RegistrationFieldItemNames.GRADUATION,
                  "",
                  !0
                ),
                cur.isSchool
                  ? (v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.SCHOOL,
                      "",
                      !0
                    ),
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.YEAR_FROM,
                      "",
                      !0
                    ),
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.YEAR_TO,
                      "",
                      !0
                    ),
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.CLASS,
                      "",
                      !0
                    ),
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.SPECIALIZATION,
                      "",
                      !0
                    ))
                  : (v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.UNIVERSITY,
                      "",
                      !0
                    ),
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.FACULTY,
                      "",
                      !0
                    ),
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.CHAIR,
                      "",
                      !0
                    ),
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.EDU_FORM,
                      "",
                      !0
                    ),
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.EDU_STATUS,
                      "",
                      !0
                    ))),
              cur.eventScreen === v.EventScreens.REGISTRATION_EMAIL &&
                v.registrationItemStat.logFieldInteraction(
                  v.RegistrationFieldItemNames.EMAIL,
                  "",
                  !0
                );
          },
          showProgress() {
            if ((0, l.isVisible)(cur.resultEl)) {
              var e = (0, l.ge)("join_" + cur.section + "_summary");
              (e.lastChild &&
                (0, l.hasClass)(e.lastChild, "progress_inline")) ||
                e.appendChild(
                  (0, l.ce)("span", {
                    className: "progress_inline join_summary_prg",
                  })
                );
            } else
              (0, l.show)("join_" + cur.section + "_none_prg"),
                (cur.noneEl.style.visibility = "hidden");
          },
          hideProgress() {
            if ((0, l.isVisible)(cur.resultEl)) {
              var e = (0, l.ge)("join_" + cur.section + "_summary");
              e.lastChild &&
                (0, l.hasClass)(e.lastChild, "progress_inline") &&
                (0, l.re)(e.lastChild);
            } else
              (cur.noneEl.style.visibility = ""),
                (0, l.hide)("join_" + cur.section + "_none_prg");
          },
          addFriendLogged: function (e, t, n) {
            O(v.RegistrationFieldItemNames.FRIEND_ASK, function () {
              v.registrationItemStat.logFieldInteraction(
                v.RegistrationFieldItemNames.FRIEND_ASK,
                "1"
              ),
                v.registrationItemStat.logEvent(
                  v.RegistrationItemEventTypes.FIRST_FRIEND_ASK,
                  v.EventScreens.REGISTRATION_LIST_FRIENDS_FACEBOOK,
                  void 0,
                  { force: !0 }
                );
            }),
              ajax.post(
                "al_friends.php",
                { act: "add", mid: t, hash: n, from: "fb_sign" },
                {
                  onDone: () => {
                    (0, l.hide)("join_add" + t),
                      (0, l.show)("join_request" + t);
                  },
                  showProgress: () => (0, u.lockButton)(e),
                  hideProgress: () => (0, u.unlockButton)(e),
                }
              );
          },
          removeFriendLogged: function (e, t, n) {
            ajax.post(
              "al_friends.php",
              { act: "remove", mid: t, hash: n, from: "fb_sign" },
              {
                onDone: () => {
                  (0, l.show)("join_add" + t), (0, l.hide)("join_request" + t);
                },
                showProgress: () => (0, u.lockButton)(e),
                hideProgress: () => (0, u.unlockButton)(e),
              }
            );
          },
          isPhoneCall() {
            var e = parseInt(cur.validationType, 10);
            return 3 === e || 4 === e;
          },
          isPhoneCallStrict: () => 3 === parseInt(cur.validationType, 10),
          phoneDone: function (e, t) {
            if (e) {
              var n = (0, l.ge)("join_phone");
              cur.uiPhoneCountry && cur.uiPhoneCountry.val(t, !0),
                (0, l.val)(n, e),
                (n.readOnly = !0),
                cur.uiPhoneCountry &&
                  (cur.uiPhoneCountry.disable(!0),
                  (0, l.addClass)("join_phone_prefixed", "join_readonly_wrap")),
                (0, l.addClass)(n, "join_readonly");
            }
            cur.resendInt && clearInterval(cur.resendInt),
              (cur.resendInt = setInterval(w.resendUpdate, 1e3)),
              (0, l.show)(
                "join_code_submit",
                "join_other_phone",
                "join_resend"
              ),
              (0, l.hide)("join_phone_submit"),
              w.isPhoneCall()
                ? ((0, l.val)(
                    (0, l.ge)("join_called_phone_prefix").firstChild,
                    ""
                  ),
                  (0, l.val)("join_called_phone", ""),
                  (0, l.hide)("join_code_row"),
                  (0, l.hide)("join_called_code_row"),
                  (0, s.slideDown)(
                    "join_called_phone_row",
                    150,
                    l.elfocus.pbind("join_called_phone")
                  ))
                : (0, l.isVisible)("join_called_phone_row") ||
                  (0, l.isVisible)("join_called_code_row")
                ? ((0, l.hide)("join_called_phone_row"),
                  (0, l.show)("join_code_row"),
                  setTimeout(l.elfocus.pbind("join_code"), 100))
                : (0, s.slideDown)(
                    "join_code_row",
                    150,
                    l.elfocus.pbind("join_code")
                  ),
              (0, l.val)("join_submit_result", ""),
              (0, l.val)("join_code", ""),
              w.initPhoneCode();
          },
          checkStatus: function (e, t) {
            var n = (0, h.curBox)(),
              o = n ? n.showProgress : u.lockButton.pbind("join_send_phone"),
              i = n ? n.hideProgress : u.unlockButton.pbind("join_send_phone");
            if (cur.checkingStatus) {
              if (cur.checkingStatus < 0) o(), (cur.checkingStatus = 1);
              else if ((++cur.checkingStatus, cur.checkingStatus > 4))
                return (cur.checkingStatus = -1), i(), w.phoneDone(e, t);
            } else
              o(),
                (cur.checkingStatus = 1),
                cur.destroy.push(function () {
                  clearTimeout(cur.checkingTimer), i();
                });
            cur.checkingTimer = setTimeout(
              ajax.post(
                "join.php",
                { act: "phone_check" },
                {
                  onDone: (n) => {
                    if (n || cur.checkingStatus > 3)
                      return (cur.checkingStatus = -1), i(), w.phoneDone(e, t);
                    cur.checkingTimer = setTimeout(
                      w.checkStatus.pbind(e, t),
                      2e3
                    );
                  },
                  onFail: (n) => (
                    (cur.checkingStatus = -1),
                    i(),
                    n
                      ? (w.showMsg(
                          "join_submit_result",
                          n,
                          l.elfocus.pbind("join_phone")
                        ),
                        !0)
                      : w.phoneDone(e, t)
                  ),
                }
              ),
              1e3
            );
          },
          submitPhone: (e) => {
            if (e || !(0, u.isButtonLocked)("join_send_phone"))
              if (w.policyChecked()) {
                var t = (0, l.ge)("join_phone"),
                  n = w.getPhone(),
                  o = (0, l.val)("join_phone"),
                  i = !!cur.uiPhoneCountry && cur.uiPhoneCountry.val_full();
                if (t.disabled) return (0, l.elfocus)("join_code");
                ajax.post(
                  "join.php",
                  { act: "phone", phone: n, hash: cur.hash },
                  {
                    showProgress: u.lockButton.pbind("join_send_phone"),
                    hideProgress: u.unlockButton.pbind("join_send_phone"),
                    onDone: (e, t, n, r, a) => {
                      if (e)
                        return (
                          (0, u.lockButton)("join_send_phone"),
                          void setTimeout(w.submitPhone.pbind(!0), 1e3)
                        );
                      if (cur.strongCode !== n) {
                        var s = (0, l.ge)("join_code").tt;
                        s && s.destroy(), (cur.strongCode = n);
                      }
                      (cur.validationType = a),
                        (cur.resendDelay = r),
                        w.phoneDone(o, i),
                        w.resendUpdate();
                      var c = (0, l.isVisible)("join_code_submit")
                        ? v.EventScreens.REGISTRATION_PHONE
                        : cur.eventScreen;
                      N(),
                        v.registrationItemStat.logEvent(
                          v.RegistrationItemEventTypes.SCREEN_PROCEED,
                          null != c ? c : v.EventScreens.REGISTRATION_PHONE,
                          v.EventScreens.REGISTRATION_PHONE_VERIFY
                        );
                      var d = cur.uiPhoneCountry.val();
                      String(cur.defCountry) !== String(d) &&
                        (v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.SELECT_COUNTRY_NAME,
                          d
                        ),
                        v.registrationItemStat.logEvent(
                          v.RegistrationItemEventTypes
                            .PROCEED_OTHER_COUNTRY_CODE,
                          cur.eventScreen
                        )),
                        w.initStats();
                    },
                    onFail: (e) => {
                      if (e) {
                        var t = (0, l.ge)("join_phone");
                        return (
                          t && t.tt && t.tt.hide && t.tt.hide({ fasthide: !0 }),
                          w.showMsg(
                            "join_submit_result",
                            e,
                            l.elfocus.pbind("join_phone")
                          ),
                          !0
                        );
                      }
                    },
                  }
                );
              } else (0, u.notaBene)("join_accept_terms_checkbox");
          },
          getStrength(e) {
            var t = -1,
              n = [
                "qwerty",
                "йцукен",
                "gfhjkm",
                "пароль",
                "password",
                "abc123",
                "fuckyou",
                "123abc",
                "baseball",
                "football",
                "soccer",
                "monkey",
                "liverpool",
                "princess",
                "jordan",
                "slipknot",
                "superman",
                "iloveyou",
              ];
            if (
              (e !== e.replace(/\s/g, "") &&
                ((0, l.val)("join_pass", (e = e.replace(/\s/g, ""))),
                (0, l.elfocus)("join_pass")),
              e.length < 6)
            )
              t = 0;
            else if (
              e.match(/^\d+$/) ||
              (0, d.indexOf)(n, e) >= 0 ||
              (e.substr(-1).match(/\d/) &&
                n.indexOf(e.substr(0, e.length - 1)) >= 0)
            )
              t = 1;
            else {
              for (
                var o = [
                    /[^a-z]/g,
                    /[^A-Z]/g,
                    /[^а-яё]/g,
                    new RegExp("[^А-ЯЁ]", "g"),
                    /[^0-9]/g,
                    new RegExp("[a-zA-Zа-яА-ЯёЁ0-9]", "g"),
                  ],
                  i = [],
                  r = 0,
                  a = 0,
                  s = o.length;
                a < s;
                ++a
              ) {
                var c = e.replace(o[a], "").length;
                c && (c > 1 && ++r, i.push({ group: a, cnt: c }));
              }
              if (
                (i.length < 3 &&
                  parseInt(i[i.length - 1].group, 10) !== o.length - 1 &&
                  r < 2 &&
                  (t = 2),
                (r > 2 ||
                  (i.length > 2 &&
                    parseInt(i[i.length - 1].group, 10) === o.length - 1)) &&
                  (t = 4),
                t < 0 && r > 1)
              ) {
                var u = e.replace(o[o.length - 1], "");
                u.length > 1 &&
                  u.replace(new RegExp((0, d.escapeRE)(u.charAt(0)), "g"), "")
                    .length &&
                  (t = 4);
              }
              t < 0 && (t = 3), t && t < 3 && e.length > 13 && ++t;
            }
            return t;
          },
          updateStrength() {
            var e = (0, l.val)("join_pass"),
              t = w.getStrength(e);
            ((0, l.ge)("join_about_pass").className = "join_pwd_level" + t),
              ((0, l.ge)("join_pass_strength").innerHTML = e
                ? (0, m.getLang)("join_pwd_level" + t)
                : (0, m.getLang)("join_pwd_min_length")),
              setQuickLoginData(
                cur.fbSign && cur.fbValid ? cur.fbEmail : w.getPhone(),
                e,
                { params: cur.joinParams }
              );
          },
          initPhoneCode() {
            cur.codeForm ||
              (setQuickLoginData(w.getPhone(), "", { params: cur.joinParams }),
              utilsNode.appendChild(
                (0, l.ce)("div", {
                  innerHTML: `\n<form method="POST" action="${vk.loginscheme}://${cur.loginHost}/?act=check_code&_origin=${locProtocol}//${locHost}" id="join_code_form" name="join_code_form" target="join_code_frame">\n  <input type="hidden" name="email" id="join_code_phone" />\n  <input type="hidden" name="code" id="join_code_code" />\n  <input type="hidden" name="call" id="join_code_call" />\n  <input type="hidden" name="recaptcha" id="join_code_recaptcha" />\n  <input type="hidden" name="captcha_sid" id="join_code_sid" />\n  <input type="hidden" name="captcha_key" id="join_code_key" />\n</form>\n<iframe id="join_code_frame" name="join_code_frame"></iframe>\n`,
                })
              ),
              (cur.codeForm = (0, l.ge)("join_code_form")),
              (cur.codeFrame = (0, l.ge)("join_code_frame")));
          },
          validatePaste: (e) => {
            var t = (e || window).clipboardData
                .getData("Text")
                .replace(/[^0-9]/g, ""),
              n = (0, l.ge)("join_phone"),
              o = (0, l.ge)("join_phone_prefix").firstChild;
            if (!(t.length < 11)) {
              var i = t.slice(0, 2);
              (89 != i && 87 != i) || (t = "7" + t.slice(1));
              var r,
                a = j(cur.countries);
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var s = r.value,
                    c = s[3].slice(1),
                    u = c.length;
                  if (t.slice(0, u) === c)
                    return (
                      cur.uiPhoneCountry.val(s[0]),
                      (0, l.val)(o, s[3].toString()),
                      (0, l.val)(n, t.slice(u)),
                      (0, _.cancelEvent)(e)
                    );
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            }
          },
          initPhoneCountry: function (e, t) {
            (cur.countries = e), (cur.defCountry = t);
            var n = (0, l.ge)("join_phone_country"),
              o = !!+n.dataset.vkConnectIntegration;
            (cur.uiPhoneCountry = new Dropdown(n, cur.countries, {
              selectedItems: t,
              big_text: !0,
              disablePlaceholder: !0,
              liteEventsBind: !0,
              autocomplete: !0,
              multiselect: !1,
              onShow: function () {
                v.registrationItemStat.logEvent(
                  v.RegistrationItemEventTypes.SELECT_COUNTRY,
                  cur.eventScreen
                );
              },
              onChange: function (e) {
                var t = (0, l.ge)("join_phone"),
                  n = (0, l.ge)("join_phone_prefix").firstChild,
                  i = cur.uiPhoneCountry.val_full()[3];
                if (
                  t.readOnly ||
                  0 === e ||
                  "0" === e ||
                  "" === e ||
                  !1 === e ||
                  void 0 === e
                ) {
                  var r = (0, l.val)(n);
                  if (i == r) return;
                  for (var a = 0, s = cur.countries.length; a < s; ++a)
                    if (cur.countries[a][3] == r)
                      return cur.uiPhoneCountry.val(cur.countries[a]);
                  return cur.uiPhoneCountry.val(cur.defCountry, !0);
                }
                (0, l.val)(n, i),
                  o || w.updatePolicyLink(cur.uiPhoneCountry.val()),
                  v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.SELECT_COUNTRY_NAME,
                    cur.uiPhoneCountry.val()
                  ),
                  v.registrationItemStat.logEvent(
                    v.RegistrationItemEventTypes.SELECT_COUNTRY_DONE,
                    cur.eventScreen
                  ),
                  v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.PHONE_COUNTRY,
                    cur.uiPhoneCountry.val()
                  );
              },
            })),
              (0, l.ge)("join_phone").readOnly
                ? cur.uiPhoneCountry.disable(!0)
                : v.registrationItemStat.logFieldInteraction(
                    v.RegistrationFieldItemNames.PHONE_COUNTRY,
                    cur.uiPhoneCountry.val(),
                    !0
                  ),
              cur.destroy.push(
                cur.uiPhoneCountry.destroy.bind(cur.uiPhoneCountry)
              );
          },
          getPhone() {
            var e = (0, d.trim)((0, l.val)("join_phone"));
            return (
              (0, d.trim)(
                (0, l.val)(((0, l.ge)("join_phone_prefix") || {}).firstChild) ||
                  ""
              ) + e
            );
          },
          submitPhoneCode() {
            if (cur.codeForm && !(0, u.isButtonLocked)("join_send_code"))
              if (w.policyChecked()) {
                var e, t, n;
                w.isPhoneCall()
                  ? ((e = "join_called_phone"),
                    (t = "join_called_phone_prefixed"),
                    (n = cur.calledPhoneLen))
                  : ((t = e = "join_code"), (n = 5));
                var o = (0, d.trim)((0, l.val)(e)).replace(/[^a-z0-9]/g, "");
                if (o.length < n) return (0, u.notaBene)(t);
                if ("05937" === o)
                  return w.showMsg(
                    "join_submit_result",
                    (0, m.getLang)("join_sorry_code"),
                    l.elfocus.pbind("join_code", !1, !1)
                  );
                (0, l.val)("join_code_phone", w.getPhone()),
                  (0, l.val)("join_code_code", o),
                  w.isPhoneCall() &&
                    (0, l.val)(
                      "join_code_call",
                      vk.id ? -vk.id : (0, a.getCookie)("remixnreg_sid")
                    ),
                  (0, u.lockButton)("join_send_code"),
                  cur.codeForm.submit();
              } else (0, u.notaBene)("join_accept_terms_checkbox");
          },
          policyChecked() {
            var e = (0, l.geByClass1)("checkbox", "join_accept_terms_checkbox");
            return (0, u.isChecked)(e);
          },
          togglePhoneSubmit() {
            var e = w.policyChecked();
            (0, u.disableButton)((0, l.ge)("join_send_phone"), !e),
              (0, u.disableButton)((0, l.ge)("join_send_code"), !e),
              (0, u.disableButton)((0, l.ge)("join_send_pass"), !e);
          },
          askPassword(e, t) {
            (0, h.curBox)() && (0, h.curBox)().hide(),
              (cur.sureBoxText = t),
              (0, u.unlockButton)("join_send_code"),
              (0, l.val)("join_code", (0, l.val)("join_code_code"));
            var n = cur.joinParams && cur.joinParams.facebook;
            (cur.joinParams = {
              join_code: (0, l.val)("join_code"),
              join_hash: e,
            }),
              n && (cur.joinParams.facebook = 1),
              w.isPhoneCall()
                ? (((0, l.ge)("join_called_phone").readOnly = !0),
                  (0, l.addClass)(
                    (0, l.ge)("join_called_phone"),
                    "join_readonly"
                  ),
                  (0, l.addClass)(
                    (0, l.ge)("join_called_phone_prefixed"),
                    "join_readonly_wrap"
                  ))
                : (((0, l.ge)("join_code").readOnly = !0),
                  (0, l.addClass)((0, l.ge)("join_code"), "join_readonly")),
              (0, l.show)("join_pass_submit"),
              (0, l.hide)(
                "join_other_phone",
                "join_code_submit",
                "join_resend",
                "join_country_row"
              ),
              (0, s.slideDown)(
                "join_pass_row",
                150,
                l.elfocus.pbind("join_pass")
              ),
              (0, l.val)("join_submit_result", ""),
              N(),
              P(),
              v.registrationItemStat.logEvent(
                v.RegistrationItemEventTypes.SCREEN_PROCEED,
                cur.eventScreen,
                v.EventScreens.REGISTRATION_PASSWORD
              ),
              w.initStats();
          },
          askCaptcha(e, t, n) {
            cur.codeForm &&
              ((0, u.unlockButton)("join_send_code"),
              2 === parseInt(t, 10)
                ? (window.badCodeBox = (0, g.showReCaptchaBox)(
                    e,
                    n,
                    window.badCodeBox,
                    {
                      onSubmit: (e, t) => {
                        (0, l.val)("join_code_recaptcha", e),
                          cur.codeForm.submit();
                      },
                      onHide: () => {
                        window.badCodeBox = !1;
                      },
                    }
                  ))
                : (window.badCodeBox = (0, g.showCaptchaBox)(
                    e,
                    n,
                    window.badCodeBox,
                    {
                      onSubmit: (e, t) => {
                        (0, l.val)("join_code_sid", e),
                          (0, l.val)("join_code_key", t),
                          cur.codeForm.submit();
                      },
                      onHide: () => {
                        window.badCodeBox = !1;
                      },
                    }
                  )));
          },
          submitPasswordSure() {
            (0, g.showFastBox)(
              (0, m.getLang)("join_new_page_sure_title"),
              (0, m.getLang)("join_new_page_sure"),
              (0, m.getLang)("join_new_page_sure_submit"),
              w.submitPassword.pbind(-1),
              (0, m.getLang)("global_cancel")
            );
          },
          submitPassword(e, t) {
            if (!(0, u.isButtonLocked)("join_send_pass") || cur.submitOnSign)
              if (w.policyChecked()) {
                var n;
                if (!0 === t) n = "000000";
                else if (
                  (n = (0, l.val)("join_pass")).length < 6 ||
                  w.getStrength(n) < 3
                )
                  return (0, u.notaBene)("join_pass");
                if (cur.sureBoxText && 1 !== e && -1 !== e)
                  (0, g.showFastBox)(
                    {
                      title: (0, m.getLang)("join_sure_detach"),
                      hideButtons: !0,
                      width: 560,
                      noCloseButton: !0,
                    },
                    cur.sureBoxText
                  ).changed = !0;
                else {
                  if (
                    ((cur.joinParams.join_to_already = (0, d.intval)(e)),
                    cur.fbSign && !cur.fbSigned)
                  )
                    return (
                      (cur.submitOnSign = 1),
                      (0, u.lockButton)("join_send_pass")
                    );
                  var o;
                  window._oldOnLoginFailed ||
                    ((window._oldOnLoginFailed = window.onLoginFailed),
                    (window._oldOnLoginDone = window.onLoginDone),
                    cur.destroy.push(() => {
                      (window.onLoginFailed = window._oldOnLoginFailed),
                        (window.onLoginDone = window._oldOnLoginDone),
                        (window._oldOnLoginFailed = !1),
                        (window._oldOnLoginDone = !1);
                    })),
                    (window.onLoginFailed = (e, t) => {
                      (0, R.joinLogProgress)(
                        I.JoinProgressLog.SCREEN_FINISH,
                        I.JoinProgressLog.STATUS_ERROR,
                        I.JoinProgressLog.ERROR_PASSWORD
                      ),
                        v.registrationItemStat.logEvent(
                          v.RegistrationItemEventTypes.INCORRECT_PASSWORD,
                          cur.eventScreen
                        ),
                        -1 === e
                          ? (location.href = location.href.replace(
                              /^http:/,
                              "https:"
                            ))
                          : 4 === e
                          ? (location.href = "/login?m=1&email=" + t.email)
                          : 7 === e
                          ? (location.href = "/join?act=finish&m=1")
                          : 10 === e
                          ? ((0, u.lockButton)("join_send_pass"),
                            setTimeout(
                              submitQuickLoginForm.pbind(o, n, {
                                prg: "join_send_pass",
                                params: cur.joinParams,
                              }),
                              1e3
                            ))
                          : nav.reload();
                    }),
                    (window.onLoginDone = nav.go.pbind("join?act=done")),
                    cur.fbSign && (cur.fbValid || !0 === t)
                      ? ((o = cur.fbEmail), (cur.joinParams.fb_id = cur.fbId))
                      : ((o = w.getPhone()),
                        N(),
                        v.registrationItemStat.logEvent(
                          v.RegistrationItemEventTypes.SCREEN_PROCEED,
                          cur.eventScreen,
                          v.EventScreens.REGISTRATION_COMPLETE
                        )),
                    submitQuickLoginForm(o, n, {
                      prg: "join_send_pass",
                      params: cur.joinParams,
                    });
                }
              } else (0, u.notaBene)("join_accept_terms_checkbox");
          },
          showMsg(e, t, n, o) {
            var i = (0, l.ge)(e);
            (0, r.showMsg)(i, t, o || "error", !0), (0, d.isFunction)(n) && n();
          },
          codeFailed(e, t) {
            (0, h.curBox)() && (0, h.curBox)().hide(),
              (0, u.unlockButton)("join_send_code");
            var n,
              o = (0, m.getLang)("join_wrong_code");
            (e = (0, d.intval)(e)) < 0
              ? ((o = (0, m.getLang)("join_code_failed")), w.changePhone())
              : e &&
                e < 6 &&
                (o +=
                  "<br>" +
                  (0, m.getLang)("join_tries_left").replace(
                    "{count}",
                    "<b>" + e + "</b>"
                  )),
              w.isPhoneCall() && (0, l.isVisible)("join_called_phone_prefix")
                ? ((n = "join_called_phone"),
                  (0, l.val)(
                    (0, l.ge)("join_called_phone_prefix").firstChild,
                    t
                  ))
                : (n = "join_code"),
              w.showMsg("join_submit_result", o, l.elfocus.pbind(n)),
              v.registrationItemStat.logEvent(
                v.RegistrationItemEventTypes.INCORRECT_SMS_CODE,
                cur.eventScreen
              ),
              window._oldOnLoginFailed &&
                (window.onLoginFailed = window._oldOnLoginFailed);
          },
          resendUpdate() {
            var e, t;
            w.isPhoneCallStrict()
              ? ((e = "join_send_code_sms_time"), (t = "join_send_code_sms"))
              : ((e = "join_resend_sms_time"), (t = "join_no_sms")),
              cur.resendDelay > 0
                ? ((0, l.val)(
                    "join_resend",
                    (0, m.getLang)(e).replace(
                      "%s",
                      Math.floor(cur.resendDelay / 60) +
                        ":" +
                        (cur.resendDelay % 60 < 10 ? "0" : "") +
                        (cur.resendDelay % 60)
                    )
                  ),
                  cur.resendDelay--)
                : -1 === parseInt(cur.resendDelay, 10)
                ? ((0, l.val)("join_resend", ""), clearInterval(cur.resendInt))
                : ((0, l.val)(
                    "join_resend",
                    '<a id="join_resend_lnk" onclick="return Join.noCode()">' +
                      (0, m.getLang)(t) +
                      "</a>"
                  ),
                  clearInterval(cur.resendInt));
          },
          noCode() {
            var e = (0, l.ce)("span", { className: "progress_inline" }),
              t = (0, l.ge)("join_resend_lnk"),
              n = t.parentNode;
            return (
              ajax.post(
                "join.php",
                { act: "resend", hash: cur.hash },
                {
                  showProgress: () => {
                    t.parentNode === n && n.replaceChild(e, t);
                  },
                  hideProgress: () => {
                    e.parentNode === n && n.replaceChild(t, e);
                  },
                  onDone: function (e, t, n, o) {
                    1 === parseInt(e, 10)
                      ? ((cur.validationType = e),
                        (cur.resendDelay = t),
                        w.phoneDone(),
                        v.registrationItemStat.logEvent(
                          v.RegistrationItemEventTypes.RESEND_SMS_CODE,
                          cur.eventScreen
                        ))
                      : t && n
                      ? ((0, l.val)("join_submit_result", ""),
                        ((0, g.showFastBox)(
                          { title: e, width: 450, noCloseButton: !0 },
                          t,
                          n,
                          w.call,
                          o
                        ).changed = !0),
                        v.registrationItemStat.logEvent(
                          v.RegistrationItemEventTypes.RESEND_SMS_CODE,
                          cur.eventScreen
                        ))
                      : t
                      ? ((0, l.val)("join_submit_result", ""),
                        (0, g.showFastBox)({ title: e, width: 450 }, t),
                        v.registrationItemStat.logEvent(
                          v.RegistrationItemEventTypes.RESEND_SMS_CODE,
                          cur.eventScreen
                        ))
                      : (w.showMsg("join_submit_result", e),
                        v.registrationItemStat.logEvent(
                          v.RegistrationItemEventTypes.RESEND_SMS_CODE_FAILED,
                          cur.eventScreen
                        ));
                  },
                }
              ),
              !1
            );
          },
          changePhone() {
            var e = (0, l.ge)("join_phone");
            (e.readOnly = !1),
              (0, l.removeClass)(e, "join_readonly"),
              cur.uiPhoneCountry &&
                (cur.uiPhoneCountry.disable(!1),
                cur.uiPhoneCountry.val(cur.uiPhoneCountry.val(), !0),
                (0, l.removeClass)(
                  "join_phone_prefixed",
                  "join_readonly_wrap"
                )),
              (0, l.show)("join_phone_submit", "join_country_row"),
              (0, l.hide)(
                "join_code_submit",
                "join_other_phone",
                "join_resend"
              ),
              (0, s.slideUp)(
                w.isPhoneCall() ? "join_called_phone_row" : "join_code_row",
                150
              ),
              (0, l.val)("join_phone", ""),
              (0, l.elfocus)("join_phone"),
              v.registrationItemStat.logEvent(
                v.RegistrationItemEventTypes.SCREEN_RETURN,
                cur.eventScreen,
                v.EventScreens.REGISTRATION_PHONE
              ),
              w.initStats();
          },
          call() {
            ajax.post(
              "join.php",
              { act: "call", hash: cur.hash },
              {
                progress: (0, h.curBox)().progress,
                onDone: (e, t) => {
                  (0, h.curBox)().hide(),
                    (cur.validationType = t),
                    v.registrationItemStat.logEvent(
                      v.RegistrationItemEventTypes.RESEND_SMS_CODE,
                      cur.eventScreen
                    ),
                    w.isPhoneCall()
                      ? w.phoneDone()
                      : (0, l.elfocus)("join_code"),
                    w.showMsg("join_submit_result", e);
                },
              }
            );
          },
          tipShow(e, t, n, o) {
            var i = (0, l.ge)(e),
              r = () => {
                (0, S.showTooltip)(i, {
                  text: t,
                  dir: "left",
                  slideX: 15,
                  className: "join_finish_tt" + (o ? " " + o : ""),
                  shift: n,
                  onCreate: _.removeEvent.pbind(e, "mouseout"),
                });
              };
            vk.loaded ? setTimeout(r, 0) : (0, _.addEvent)(window, "load", r);
          },
          tipHide() {
            var e = [
              "join_phone",
              "join_code",
              "join_pass",
              "join_called_phone",
            ];
            e.map((t) => {
              var n = (0, l.ge)(e[t]);
              n && n.tt && n.tt.hide && n.tt.hide();
            });
          },
          phoneTip(e) {
            var t = (0, l.ge)("join_phone"),
              n = (0, l.getSize)(t);
            t.readOnly ||
              w.tipShow(
                t,
                e,
                [-(n[0] + 10), -Math.floor(n[1] / 2)],
                "join_phone_tt"
              );
          },
          passTip() {
            var e = (0, l.ge)("join_pass"),
              t = (0, l.getSize)(e);
            return w.tipShow(e, (0, m.getLang)("join_pass_tip"), [
              -(t[0] + 10),
              -Math.floor(t[1] / 2),
            ]);
          },
          switchToDefSign(e, t) {
            ajax.post(
              "join.php",
              { act: "logout", hash: e, noredir: 1 },
              {
                onDone: () => {
                  (0, g.showBox)("join.php", {
                    act: "box",
                    from: nav.strLoc,
                    nofb: 1,
                  });
                },
                showProgress: u.lockButton.pbind(t),
                hideProgress: u.unlockButton.pbind(t),
              }
            );
          },
          initContacts() {
            var e;
            selectsData.setCountries(cur.selData.countries),
              selectsData.setCities(cur.selData.country, cur.selData.cities),
              (cur.selData.city_val = cur.selData.city_val || ["", ""]),
              (cur.selData.country_val = cur.selData.country_val || ["", ""]),
              (cur.uiCity = new CitySelect(
                (0, l.ge)("pedit_city"),
                (0, l.ge)("pedit_city_row"),
                {
                  progressBar: (0, l.ge)("pedit_progress"),
                  city: cur.selData.city_val,
                  country: cur.selData.country,
                  maxItemsShown: (e) => (e > 6 ? 500 : 350),
                  onChange: (t) => {
                    t !== e &&
                      ((e = t),
                      v.registrationItemStat.logFieldInteraction(
                        v.RegistrationFieldItemNames.CITY,
                        `${t}`
                      ));
                  },
                  dark: 1,
                  width: 280,
                }
              )),
              (e = (0, d.intval)(cur.uiCity.val())),
              (cur.uiCountry = new CountrySelect(
                (0, l.ge)("pedit_country"),
                (0, l.ge)("pedit_country_row"),
                {
                  progressBar: (0, l.ge)("pedit_progress"),
                  country: cur.selData.country_val,
                  citySelect: cur.uiCity,
                  onChange: (e) => {
                    v.registrationItemStat.logFieldInteraction(
                      v.RegistrationFieldItemNames.COUNTRY,
                      `${e}`
                    ),
                      O(
                        v.RegistrationFieldItemNames.PHONE_COUNTRY,
                        function () {
                          v.registrationItemStat.logEvent(
                            v.RegistrationItemEventTypes.FIRST_COUNTRY,
                            cur.eventScreen
                          );
                        }
                      ),
                      w.checkSave(e);
                  },
                  dark: 1,
                  width: 280,
                }
              )),
              w.checkSave((0, l.ge)("pedit_country").value),
              w.initStats();
          },
          submitContacts() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : y.JoinScreenFlow.DEFAULT_FLOW,
              t = {
                act: "check_contacts",
                hash: cur.saveHash,
                country: (0, l.ge)("pedit_country").value,
                city: (0, l.ge)("pedit_city").value,
              };
            if (!t.country)
              return (
                (0, R.joinLogProgress)(
                  I.JoinProgressLog.SCREEN_CONTACTS,
                  I.JoinProgressLog.STATUS_ERROR,
                  I.JoinProgressLog.ERROR_EMPTY_CONTACTS
                ),
                w.showMsg(
                  "join_submit_result",
                  (0, m.getLang)("join_need_contacts")
                ),
                !0
              );
            var n = new y.JoinScreenFlow(cur.eventScreen, e).nextScreen(),
              o = (0, l.ge)("join_save");
            ajax.post("join.php", t, {
              onDone: () => {
                N(),
                  v.registrationItemStat.logEvent(
                    v.RegistrationItemEventTypes.SCREEN_PROCEED,
                    cur.eventScreen,
                    n.screen_to
                  ),
                  nav.go(n.url_to);
              },
              onFail: (e) => (w.showMsg("join_submit_result", e), !0),
              showProgress: () => (0, u.lockButton)(o),
              hideProgress: () => (0, u.unlockButton)(o),
            });
          },
          initEducation() {
            selectsData.setCountries(cur.selData.countries),
              selectsData.setCities(cur.selData.country, cur.selData.cities),
              (cur.selData.city_val = cur.selData.city_val || ["", ""]),
              (cur.selData.country_val = cur.selData.country_val || ["", ""]);
            var e = (0, l.ge)("edu"),
              t = {
                id: 0,
                width: 280,
                city: cur.selData.city,
                city_val: cur.selData.city_val,
                country: cur.selData.country,
                country_val: cur.selData.country_val,
              };
            if (cur.isSchool) {
              var n = {
                school0country: cur.selData.country_val[0],
                school0city: cur.selData.city_val[0],
              };
              e.appendChild(ProfileEditorEdu.genSchoolRow(0)),
                ProfileEditorEdu.initSchoolRow(
                  t,
                  null,
                  (e) => {
                    O(v.RegistrationFieldItemNames.CLASS, function () {
                      v.registrationItemStat.logEvent(
                        v.RegistrationItemEventTypes.FIRST_EDUCATION,
                        cur.eventScreen
                      );
                    }),
                      w.checkSave(e);
                  },
                  () => {
                    var e = ProfileEditorEdu.addSchoolParams(
                      {},
                      { id: 0 },
                      "school0"
                    );
                    n.school0country != e.school0country &&
                      v.registrationItemStat.logFieldInteraction(
                        v.RegistrationFieldItemNames.COUNTRY,
                        `${e.school0country}` || ""
                      ),
                      n.school0city != e.school0city &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.CITY,
                          e.school0city || ""
                        ),
                      n.school0graduation != e.school0graduation &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.GRADUATION,
                          e.school0graduation || ""
                        ),
                      n.school0school != e.school0school &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.SCHOOL,
                          e.school0school || ""
                        ),
                      n.school0start != e.school0start &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.YEAR_FROM,
                          e.school0start || ""
                        ),
                      n.school0finish != e.school0finish &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.YEAR_TO,
                          e.school0finish || ""
                        ),
                      n.school0class != e.school0class &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.CLASS,
                          e.school0class || ""
                        ),
                      n.school0custom_spec != e.school0custom_spec &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.SPECIALIZATION,
                          e.school0custom_spec || ""
                        ),
                      (n = e);
                  }
                ),
                w.checkSave((0, l.ge)("s_school0").value),
                (0, _.addEvent)(
                  (0, l.ge)("s_spec0_custom"),
                  "keydown",
                  function (e) {
                    (10 != e.keyCode && 13 != e.keyCode) || w.submitEducation();
                  }
                );
            } else {
              var o = {
                primary_unicountry: cur.selData.country_val[0],
                primary_unicity: cur.selData.city_val[0],
              };
              e.appendChild(ProfileEditorEdu.genUniRow(0)),
                ProfileEditorEdu.initUniRow(
                  t,
                  null,
                  (e) => {
                    O(v.RegistrationFieldItemNames.EDU_FORM, function () {
                      v.registrationItemStat.logEvent(
                        v.RegistrationItemEventTypes.FIRST_EDUCATION,
                        cur.eventScreen
                      );
                    }),
                      w.checkSave(e);
                  },
                  () => {
                    var e = ProfileEditorEdu.addUniParams(
                      {},
                      { id: 0 },
                      "primary_uni"
                    );
                    o.primary_unicountry != e.primary_unicountry &&
                      v.registrationItemStat.logFieldInteraction(
                        v.RegistrationFieldItemNames.COUNTRY,
                        e.primary_unicountry || ""
                      ),
                      o.primary_unicity != e.primary_unicity &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.CITY,
                          e.primary_unicity || ""
                        ),
                      o.primary_unigraduation != e.primary_unigraduation &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.GRADUATION,
                          e.primary_unigraduation || ""
                        ),
                      o.primary_uniuniversity != e.primary_uniuniversity &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.UNIVERSITY,
                          e.primary_uniuniversity || ""
                        ),
                      o.primary_unifaculty != e.primary_unifaculty &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.FACULTY,
                          e.primary_unifaculty || ""
                        ),
                      o.primary_unichair != e.primary_unichair &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.CHAIR,
                          e.primary_unichair || ""
                        ),
                      o.primary_uniedu_form != e.primary_uniedu_form &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.EDU_FORM,
                          e.primary_uniedu_form || ""
                        ),
                      o.primary_uniedu_status != e.primary_uniedu_status &&
                        v.registrationItemStat.logFieldInteraction(
                          v.RegistrationFieldItemNames.EDU_STATUS,
                          e.primary_uniedu_status || ""
                        ),
                      (o = e);
                  }
                ),
                w.checkSave((0, l.ge)("u_university0").value);
            }
            w.initStats();
          },
          submitEducation() {
            var e,
              t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : y.JoinScreenFlow.DEFAULT_FLOW;
            if (
              (cur.isSchool
                ? ((t = { act: "a_save_education_school" }),
                  (t = ProfileEditorEdu.addSchoolParams(
                    t,
                    { id: 0 },
                    "school0"
                  )).school0school || (e = (0, m.getLang)("join_need_school")),
                  (t.school0id = -1))
                : ((t = { act: "a_save_education_uni" }),
                  (t = ProfileEditorEdu.addUniParams(
                    t,
                    { id: 0 },
                    "primary_uni"
                  )).primary_uniuniversity ||
                    (e = (0, m.getLang)("join_need_uni")),
                  (t.primary_uniid = cur.uniId || -1)),
              e)
            )
              return (
                v.registrationItemStat.logEvent(
                  v.RegistrationItemEventTypes.INCORRECT_EDUCATION,
                  cur.eventScreen
                ),
                (0, R.joinLogProgress)(
                  I.JoinProgressLog.SCREEN_EDUCATION,
                  I.JoinProgressLog.STATUS_ERROR,
                  cur.isSchool
                    ? I.JoinProgressLog.ERROR_EMPTY_SCHOOL
                    : I.JoinProgressLog.ERROR_EMPTY_UNIVERSITY
                ),
                w.showMsg("join_submit_result", e),
                !0
              );
            var o = (0, l.ge)("join_save");
            t.hash = cur.saveHash;
            var i = new y.JoinScreenFlow(cur.eventScreen, n).nextScreen();
            ajax.post("al_profileEdit.php", t, {
              onDone: () => {
                N(),
                  v.registrationItemStat.logEvent(
                    v.RegistrationItemEventTypes.SCREEN_PROCEED,
                    cur.eventScreen,
                    i.screen_to
                  ),
                  (0, R.joinLogProgress)(
                    I.JoinProgressLog.SCREEN_EDUCATION,
                    I.JoinProgressLog.STATUS_SUCCESS
                  ),
                  nav.go(i.url_to);
              },
              showProgress: () => (0, u.lockButton)(o),
              hideProgress: () => (0, u.unlockButton)(o),
            });
          },
          initEmail() {
            var e = (0, l.ge)("pedit_email");
            (0, _.addEvent)(e, "keydown change", function (t) {
              O(v.RegistrationFieldItemNames.EMAIL, function () {
                v.registrationItemStat.logEvent(
                  v.RegistrationItemEventTypes.FIRST_EMAIL,
                  cur.eventScreen
                );
              }),
                10 === t.keyCode || 13 === t.keyCode
                  ? w.submitEmail()
                  : w.checkSave(e.value),
                v.registrationItemStat.logFieldInteraction(
                  v.RegistrationFieldItemNames.EMAIL,
                  e.value
                );
            });
            var t = document.getElementById("emailExplanationModalTrigger");
            cur.email_expl_box_html &&
              t &&
              (t.onclick = function () {
                var e = new g.MessageBox({
                  title: "",
                  width: 450,
                  hideButtons: !0,
                  containerClass: (0, T.classNames)(
                    "EmailExplanationBoxContainer"
                  ),
                  onHide: () => {
                    v.registrationItemStat.logEvent(
                      v.RegistrationItemEventTypes.SCREEN_RETURN,
                      v.EventScreens.REGISTRATION_EMAIL_EXPLANATION,
                      v.EventScreens.REGISTRATION_EMAIL
                    );
                  },
                });
                e.content(cur.email_expl_box_html);
                var t = e.bodyNode.querySelector(".EmailExplanationBox__close");
                return (
                  null == t ||
                    t.addEventListener("click", () => {
                      e.hide();
                    }),
                  v.registrationItemStat.logEvent(
                    v.RegistrationItemEventTypes.SCREEN_PROCEED,
                    v.EventScreens.REGISTRATION_EMAIL,
                    v.EventScreens.REGISTRATION_EMAIL_EXPLANATION
                  ),
                  e.show(),
                  !1
                );
              }),
              w.checkSave(),
              w.initStats();
          },
          submitEmail() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : y.JoinScreenFlow.DEFAULT_FLOW,
              t = {
                email: document.querySelector("#pedit_email").value.trim(),
                is_new: 1,
                hash: cur.saveHash,
              };
            if (!t.email)
              return (
                v.registrationItemStat.logEvent(
                  v.RegistrationItemEventTypes.ERROR_EMPTY_EMAIL,
                  cur.eventScreen
                ),
                (0, R.joinLogProgress)(
                  I.JoinProgressLog.SCREEN_EMAIL,
                  I.JoinProgressLog.STATUS_ERROR,
                  I.JoinProgressLog.ERROR_EMPTY_EMAIL
                ),
                w.showMsg(
                  "join_submit_result",
                  (0, m.getLang)("join_need_email")
                ),
                !0
              );
            var n = (0, l.ge)("join_save");
            t.hash = cur.saveHash;
            var o = new y.JoinScreenFlow(cur.eventScreen, e).nextScreen();
            ajax.post("al_settings.php?act=a_bind_mail", t, {
              onDone: () => {
                N(),
                  v.registrationItemStat.logEvent(
                    v.RegistrationItemEventTypes.SCREEN_PROCEED,
                    cur.eventScreen,
                    o.screen_to
                  ),
                  (0, R.joinLogProgress)(
                    I.JoinProgressLog.SCREEN_EMAIL,
                    I.JoinProgressLog.STATUS_SUCCESS
                  ),
                  (location.href = o.url_to);
              },
              onFail: (e) => {
                if (void 0 !== e) {
                  var t = void 0 !== e.message ? e.message : e;
                  w.showMsg("join_submit_result", t),
                    "ALREADY_USED" === e.code
                      ? (0, R.joinLogProgress)(
                          I.JoinProgressLog.SCREEN_EMAIL,
                          I.JoinProgressLog.STATUS_ERROR,
                          I.JoinProgressLog.ERROR_EMAIL_ALREADY_USED
                        )
                      : (0, R.joinLogProgress)(
                          I.JoinProgressLog.SCREEN_EMAIL,
                          I.JoinProgressLog.STATUS_ERROR,
                          I.JoinProgressLog.ERROR_INCORRECT_EMAIL
                        );
                }
                return !0;
              },
              showProgress: () => (0, u.lockButton)(n),
              hideProgress: () => (0, u.unlockButton)(n),
            });
          },
          checkSave(e) {
            (0, u.disableButton)((0, l.ge)("join_save"), !e);
          },
          showPolicy(e) {
            (0, g.showBox)("al_help.php", {
              act: e,
              cc_id: cur.uiPhoneCountry.val() || 0,
              box: 1,
            });
          },
          updatePolicyLink(e) {
            var t = (0, l.geByClass1)("checkbox", "join_accept_terms_checkbox");
            (0, u.checkbox)(t, 0);
            ajax.post(
              "join.php",
              { act: "update_policy", cc_id: e || 0 },
              {
                onDone: (e) => {
                  if (e) {
                    var t = (0, l.ge)("join_accept_terms_checkbox");
                    if (t) {
                      var n = (0, l.geByClass1)("join_accept_terms_text", t);
                      n && (n.innerHTML = e);
                    }
                  }
                },
              }
            );
          },
          phoneOnKeyUp() {
            clearTimeout(w.checkPhoneTimeout);
            var e = w.getPhone();
            e &&
              e !== w.prevPhone &&
              (e.length > 4
                ? (w.checkPhoneTimeout = setTimeout(function () {
                    ajax.post(
                      "activation.php",
                      {
                        act: "mrg_check_phone",
                        phone: e,
                        rnd: w.phoneMrgInstanceId,
                      },
                      {
                        onDone: (t) => {
                          (w.prevPhone = e),
                            (!t && w.defaultPhoneTip) ||
                              (w.destroyPhoneTip(),
                              t &&
                                ((0, l.ge)("join_phone_prefixed")
                                  ? (0, u.notaBene)("join_phone_prefixed")
                                  : (0, u.notaBene)("join_phone"),
                                (w.defaultPhoneTip = !1)));
                        },
                      }
                    );
                  }, 500))
                : ((w.prevPhone = e),
                  w.defaultPhoneTip || w.destroyPhoneTip()));
          },
          destroyPhoneTip() {
            var e = (0, l.ge)("join_phone");
            e && e.tt && e.tt.destroy();
          },
          silentAuth() {},
          completeProceed() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : y.JoinScreenFlow.DEFAULT_FLOW;
            N();
            var t = new y.JoinScreenFlow(cur.eventScreen, e).nextScreen();
            v.registrationItemStat.logEvent(
              v.RegistrationItemEventTypes.SCREEN_PROCEED,
              cur.eventScreen,
              t.screen_to
            );
          },
          completeSkip() {
            N(),
              v.registrationItemStat.logEvent(
                v.RegistrationItemEventTypes.SCREEN_SKIP,
                cur.eventScreen
              ),
              (0, R.joinLogProgress)(
                I.JoinProgressLog.SCREEN_DONE,
                I.JoinProgressLog.STATUS_SKIP
              );
          },
          educationSkip() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : y.JoinScreenFlow.DEFAULT_FLOW;
            N();
            var t = new y.JoinScreenFlow(cur.eventScreen, e).nextScreen();
            v.registrationItemStat.logEvent(
              v.RegistrationItemEventTypes.SCREEN_SKIP,
              cur.eventScreen,
              t.screen_to
            ),
              (0, R.joinLogProgress)(
                I.JoinProgressLog.SCREEN_EDUCATION,
                I.JoinProgressLog.STATUS_SKIP
              );
          },
          contactsSkip() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : y.JoinScreenFlow.DEFAULT_FLOW;
            N();
            var t = new y.JoinScreenFlow(cur.eventScreen, e).nextScreen();
            v.registrationItemStat.logEvent(
              v.RegistrationItemEventTypes.SCREEN_SKIP,
              cur.eventScreen,
              t.screen_to
            ),
              (0, R.joinLogProgress)(
                I.JoinProgressLog.SCREEN_CONTACTS,
                I.JoinProgressLog.STATUS_SKIP
              );
          },
          emailSkip() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : y.JoinScreenFlow.DEFAULT_FLOW;
            N();
            var t = new y.JoinScreenFlow(cur.eventScreen, e).nextScreen();
            v.registrationItemStat.logEvent(
              v.RegistrationItemEventTypes.SCREEN_SKIP,
              cur.eventScreen,
              t.screen_to
            ),
              (0, R.joinLogProgress)(
                I.JoinProgressLog.SCREEN_EMAIL,
                I.JoinProgressLog.STATUS_SKIP
              );
          },
          initDone() {
            N(), w.initStats();
          },
          initFbDone() {},
          initFbStats() {
            cur.eventNextScreen
              ? (cur.eventCurrentScreen = cur.eventNextScreen)
              : (cur.eventCurrentScreen = v.EventScreens.OAUTH_FB),
              (cur.eventNextScreen = void 0);
            var e = (0, l.isVisible)("join_phone_row"),
              t = (0, l.isVisible)("join_code_row"),
              n = (0, l.isVisible)("join_pass_row");
            e &&
              !t &&
              (cur.eventNextScreen = v.EventScreens.REGISTRATION_PHONE),
              n && (cur.eventNextScreen = v.EventScreens.REGISTRATION_PASSWORD),
              e ||
                t ||
                n ||
                (cur.eventNextScreen = v.EventScreens.REGISTRATION_COMPLETE),
              cur.eventNextScreen &&
                cur.eventCurrentScreen !== cur.eventNextScreen &&
                (v.registrationItemStat.logFieldInteraction(
                  v.RegistrationFieldItemNames.FACEBOOK_REGISTRATION,
                  v.EventFieldValues.REGISTERED_VIA_FB
                ),
                v.registrationItemStat.logEvent(
                  v.RegistrationItemEventTypes.SCREEN_PROCEED,
                  cur.eventCurrentScreen,
                  cur.eventNextScreen
                ));
          },
          validated(e, t) {
            (cur.fbSigned = !0),
              (cur.fbValid = e),
              clearInterval(cur.checkInterval),
              e ||
                (t ||
                  ((0, l.show)("join_fb_mobile"),
                  cur.mobileValidated || (0, l.hide)("join_pass_row")),
                cur.mobileValidated
                  ? (0, l.show)("join_pass_submit")
                  : ((0, l.hide)("join_pass_submit"),
                    cur.mobileSelected || (0, l.show)("join_phone_submit")),
                (0, l.hide)("join_email_row")),
              w.initFbStats();
          },
          uploadPhoto(e) {
            if (!e.pic_url) return !1;
            utilsNode.appendChild((0, l.ce)("iframe", { src: e.pic_url })),
              (window.onUploadDone = function (e, t, n) {
                (0, i.debugLog)(arguments);
              }),
              (window.onUploadFail = function () {
                (0, i.debugLog)(arguments);
              });
          },
          checkUser() {
            if (cur.requestChecking) return !1;
            (cur.requestChecking = !0),
              ajax.post(
                "/join",
                { act: "fb_check", validating: cur.validating ? "1" : "" },
                {
                  onDone: function (e, t) {
                    if (((cur.requestChecking = !1), (0, i.debugLog)(e, t), e))
                      if (t.failed)
                        v.registrationItemStat &&
                          (v.registrationItemStat.logFieldInteraction(
                            v.RegistrationFieldItemNames.FACEBOOK_REGISTRATION,
                            v.EventFieldValues.REGISTERED_VIA_FB
                          ),
                          v.registrationItemStat.logEvent(
                            v.RegistrationItemEventTypes.SCREEN_PROCEED,
                            v.EventScreens.OAUTH_FB,
                            v.EventScreens.FACEBOOK_REGISTRATION_FAILED,
                            { force: !0 }
                          )),
                          ((0, l.ge)("join_fb_finish").innerHTML = t.html),
                          clearInterval(cur.checkInterval);
                      else if (cur.validating)
                        void 0 !== t.validated && w.validated(t.validated);
                      else {
                        (0, l.val)((0, l.ge)("quick_email"), t.email),
                          (cur.fbEmail = t.email),
                          (cur.joinParams.join_code = t.join_code),
                          (cur.joinParams.join_hash = t.join_hash),
                          t.fb_id && (cur.fbId = t.fb_id);
                        var n = (0, l.ge)("join_fb_import_info");
                        if (
                          (((0, l.ge)("join_fb_info").innerHTML = t.html),
                          void 0 !== t.validated || t.login_to
                            ? w.validated(t.validated, t.login_to)
                            : (cur.validating = !0),
                          t.login_to)
                        )
                          return (
                            (0, l.hide)("join_pass_row"),
                            w.initFbStats(),
                            w.submitPassword(!1, !0),
                            nav.go("/login?email=" + t.email + "&m=5"),
                            !1
                          );
                        (0, l.setStyle)(n, { overflow: "hidden" }),
                          (0, s.animate)(
                            n,
                            { height: 0, opacity: 0, marginTop: -10 },
                            { duration: 200 }
                          ),
                          (0, s.animate)(
                            (0, l.ge)("join_show_result_wrap"),
                            { opacity: 1 },
                            { duration: 200 }
                          ),
                          (0, s.slideDown)((0, l.ge)("join_show_result"), 200),
                          w.uploadPhoto(t),
                          w.initFbStats();
                      }
                  },
                }
              );
          },
          initIndexJoinForm: function (e) {
            var t = document.querySelector(".JoinForm");
            (0, E.initJoinForm)(t, C({}, e, { ref: "index" }));
          },
          initInviteJoinForm: function (e) {
            var t = document.querySelector(".JoinForm");
            (0, E.initJoinForm)(t, C({}, e, { ref: "invite" }));
          },
          initJoinBox: function (e) {
            var t = (0, h.curBox)();
            (t.changed = !0),
              t.setOptions({
                width: 560,
                hideButtons: !0,
                bodyStyle: "padding: 0",
              });
            var n = t.bodyNode.querySelector(".JoinForm");
            (0, E.initJoinForm)(n, C({}, e, { ref: "box" }));
          },
          initIndexJoinVKConnectButton: function (e, t) {
            var n = document.querySelector(".JoinForm");
            (0, p.initJoinVKConnectButton)(n, C({}, e, { unauthId: t }));
          },
          initIndexJoinVKConnectForm: function (e, t, n, o) {
            var i = document.querySelector(".JoinForm");
            (0, p.initJoinVKConnectForm)(
              i,
              C({}, e, { unauthId: t, phonePrefix: n, hash: o })
            );
          },
          initCommon: function (e) {
            var t = e.logoutLabel,
              n = e.logoutHash,
              o = document.querySelector("#top_reg_link");
            o &&
              (clearTimeout(window.__joinTopTO),
              setTimeout(() => {
                (o.old = o.innerHTML),
                  (o.was = (0, l.isVisible)(o)),
                  (o.innerHTML = t),
                  (o.onclick = (e) => {
                    if (
                      (cur.checkInterval && clearInterval(cur.checkInterval),
                      !1 === (0, _.checkEvent)(e))
                    )
                      return (
                        window.ajax.post("join.php", {
                          act: "logout",
                          hash: n,
                        }),
                        (0, _.cancelEvent)(e)
                      );
                  }),
                  (0, l.show)(o),
                  cur.destroy.push(() => {
                    window.__joinTopTO = setTimeout(() => {
                      (0, l.val)(o, o.old),
                        (o.onclick = () => {}),
                        o.was || (0, l.hide)(o);
                    }, 500);
                  });
              }, 0)),
              (0, l.hide)("top_switch_lang", "ts_wrap");
          },
        };
      },
      61945: (e, t, n) => {
        var o = n(279366);
        window.Join = o.join;
        try {
          window.stManager.done(window.jsc("web/join.js"));
        } catch (e) {}
      },
      47647: (e, t, n) => {
        n.d(t, { JoinProgressLog: () => o });
        var o = {
          SCREEN_CONTACTS: "contacts",
          SCREEN_FINISH: "finish",
          SCREEN_DONE: "done",
          SCREEN_EDUCATION: "education",
          SCREEN_EMAIL: "email",
          STATUS_ERROR: "error",
          STATUS_SUCCESS: "success",
          STATUS_SKIP: "skip",
          ERROR_PASSWORD: "password error",
          ERROR_EMPTY_CONTACTS: "empty contacts",
          ERROR_EMPTY_SCHOOL: "empty school",
          ERROR_EMPTY_UNIVERSITY: "empty university",
          ERROR_EMPTY_EMAIL: "empty email",
          ERROR_INCORRECT_EMAIL: "incorrect email",
          ERROR_EMAIL_ALREADY_USED: "phone already used",
        };
      },
      474123: (e, t, n) => {
        n.d(t, { JoinScreenFlow: () => _ });
        var o,
          i,
          r,
          a,
          s = n(214547);
        !(function (e) {
          (e.USUAL_SCREEN_FLOW = "usual"), (e.EMAIL_FIRST_TEST = "email_test");
        })(a || (a = {}));
        var c = { url_to: "/feed" },
          l =
            (((o = {})[s.EventScreens.REGISTRATION_COMPLETE] = {
              screen_to: s.EventScreens.REGISTRATION_COUNTRY,
              url_to: "/join?act=contacts",
            }),
            (o[s.EventScreens.REGISTRATION_COUNTRY] = {
              screen_to: s.EventScreens.REGISTRATION_EDUCATION,
              url_to: "/join?act=education",
            }),
            (o[s.EventScreens.REGISTRATION_EDUCATION] = {
              screen_to: s.EventScreens.REGISTRATION_EMAIL,
              url_to: "/join?act=email",
            }),
            (o[s.EventScreens.REGISTRATION_EMAIL] = { url_to: "/feed" }),
            o),
          u =
            (((i = {})[s.EventScreens.REGISTRATION_COMPLETE] = {
              screen_to: s.EventScreens.REGISTRATION_EMAIL,
              url_to: "/join?act=email",
            }),
            (i[s.EventScreens.REGISTRATION_EMAIL] = {
              screen_to: s.EventScreens.REGISTRATION_COUNTRY,
              url_to: "/join?act=contacts",
            }),
            (i[s.EventScreens.REGISTRATION_COUNTRY] = {
              screen_to: s.EventScreens.REGISTRATION_EDUCATION,
              url_to: "/join?act=education",
            }),
            (i[s.EventScreens.REGISTRATION_EDUCATION] = { url_to: "/feed" }),
            i),
          d =
            (((r = {})[a.USUAL_SCREEN_FLOW] = l),
            (r[a.EMAIL_FIRST_TEST] = u),
            r),
          _ = (function () {
            function e(t, n) {
              void 0 === n && (n = e.DEFAULT_FLOW),
                (this.current_screen = t),
                (this.screen_flow_variant = n),
                (this.screen_flow = d[this.screen_flow_variant]);
            }
            return (
              (e.prototype.nextScreen = function () {
                var e;
                return null !== (e = this.screen_flow[this.current_screen]) &&
                  void 0 !== e
                  ? e
                  : c;
              }),
              (e.DEFAULT_FLOW = a.USUAL_SCREEN_FLOW),
              e
            );
          })();
      },
      517957: (e, t, n) => {
        n.d(t, { joinLogProgress: () => i });
        var o = n(479957);
        function i(e, t, n) {
          (0, o.statlogsValueEvent)("join_progress", e, t, n);
        }
      },
    },
    i = {};
  function r(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return o[e].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
  }
  (r.m = o),
    (e = []),
    (r.O = (t, n, o, i) => {
      if (!n) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, o, i] = e[u], s = !0, c = 0; c < n.length; c++)
            (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((s = !1), i < a && (a = i));
          if (s) {
            e.splice(u--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [n, o, i];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (r.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      r.r(i);
      var a = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && e; "object" == typeof s && !~t.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((t) => (a[t] = () => e[t]));
      return (a.default = () => e), r.d(i, a), i;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.e = () => Promise.resolve()),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 1092: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            i,
            [a, s, c] = n,
            l = 0;
          for (o in s) r.o(s, o) && (r.m[o] = s[o]);
          if (c) var u = c(r);
          for (t && t(n); l < a.length; l++)
            (i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[a[l]] = 0);
          return r.O(u);
        },
        n = (self.webpackChunkvk = self.webpackChunkvk || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var a = r.O(void 0, [11216, 68592], () => r(61945));
  a = r.O(a);
})();
