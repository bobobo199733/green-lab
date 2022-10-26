"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14309], {
        249310: (e, n, i) => {
            i.r(n), i.d(n, {
                openPaymentOrderDialogOnLoad: () => g
            });
            var r = i(338733),
                a = i(912436),
                l = i(514998),
                t = i(888035),
                o = i(706162);
            const c = [t.BillingCycle.OneYear, t.BillingCycle.Monthly, t.BillingCycle.ThreeMonths];

            function g() {
                var e;
                const n = window.pro;
                if (void 0 === n) return;
                const i = (0, l.getUrlParams)();
                if (!("order_pro_plan_id" in i) && "order_exchanges" in i && "exchange-agreement" in i) return;
                const t = i.order_pro_plan_id,
                    g = (null !== (e = i.order_exchanges) && void 0 !== e ? e : "").split(",").map((e => `exchange-${e}`)),
                    d = "exchange-agreement" in i;
                let s;
                "order_billing_cycle" in i && c.includes(i.order_billing_cycle) && (s = i.order_billing_cycle), n.runOrUpdate((() => {
                    let e;
                    t && n.isPlan(n.getProduct(t)) && (e = t);
                    const i = g.filter((e => n.isExchange(n.getProduct(e))));
                    (void 0 !== e || 0 !== i.length || d) && (d ? (0, a.showExchangeAgreementDialog)({}) : (0, r.showPaymentOrderDialog)({
                        productId: e,
                        exchanges: i,
                        statusExtraData: i.length > 0 ? o.StatusExtraData.Opened : void 0,
                        billingCycle: s,
                        fixedCycle: void 0 !== s
                    }))
                }))
            }
        },
        912436: (e, n, i) => {
            async function r(e) {
                (await Promise.all([i.e(90519), i.e(10146), i.e(8348), i.e(90926), i.e(37135), i.e(48181), i.e(8834), i.e(35354), i.e(30063), i.e(78941), i.e(99740), i.e(91670), i.e(53221), i.e(63280), i.e(77301), i.e(67161), i.e(34640), i.e(36603), i.e(44119), i.e(29499), i.e(57561), i.e(73116), i.e(84458), i.e(91124), i.e(73477), i.e(75514), i.e(5043), i.e(9541), i.e(92697), i.e(86328), i.e(41748), i.e(20444), i.e(48323), i.e(61932)]).then(i.bind(i, 205355))).openExchangeAgreementDialog(e)
            }
            i.d(n, {
                showExchangeAgreementDialog: () => r
            })
        }
    }
]);