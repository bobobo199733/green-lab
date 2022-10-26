"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [808], {
        94808: function(a, b, c) {
            c.r(b);
            var d = c(85893);
            c(67294), b.default = function(a) {
                var b = a.experiment,
                    c = a.variation;
                return b && c ? (0, d.jsx)("input", {
                    type: "hidden",
                    name: "ab_".concat(b),
                    id: "ab_id_".concat(b),
                    value: "",
                    "data-optimizely": "".concat(b, ":").concat(c),
                    "data-optimizely-evar": "",
                    "data-testid": "ab-tracking"
                }) : null
            }
        }
    }
])