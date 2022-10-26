/*! For license information please see async-sms-feature-f063c0362ac17a5caa52.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [66331], {
        861701: (e, a, r) => {
            r.r(a), r.d(a, {
                reducer: () => n
            });
            var t = r(343599),
                o = r(351843),
                s = r(533346),
                b = r(901172),
                d = r(718725);
            const n = (0, t.ZP)(((e, a) => {
                switch (a.type) {
                    case b.rc:
                        e.postPhoneNumberState = o.ik;
                        break;
                    case b.bJ:
                        e.phoneNumber = a.payload.phoneNumber;
                        break;
                    case b.vs:
                        e.otpLength = a.payload.otpLength, e.smsSent = a.payload.smsSent, e.postPhoneNumberState = o.xQ;
                        break;
                    case b.Rn:
                        e.postPhoneNumberError = a.payload.error, e.postPhoneNumberState = o.Vy;
                        break;
                    case b.PF:
                        e.validateSmsCodeState = o.ik;
                        break;
                    case b.qv:
                        e.validateSmsCodeState = o.xQ;
                        break;
                    case b.st:
                        e.validateSmsCodeError = a.payload.error, e.validateSmsCodeState = o.Vy;
                        break;
                    case b.OX:
                        a.payload.clearPhoneNumber && (e.phoneNumber = ""), e.postPhoneNumberState = o.S0, e.postPhoneNumberError = null;
                        break;
                    case b.P:
                        e.validateSmsCodeState = o.S0, e.validateSmsCodeError = null, e.smsSent = !1;
                        break;
                    case s.Re:
                    case s.XP:
                    case (0, o.dh)(a.type):
                        return d.default
                }
            }), d.default)
        }
    }
]);