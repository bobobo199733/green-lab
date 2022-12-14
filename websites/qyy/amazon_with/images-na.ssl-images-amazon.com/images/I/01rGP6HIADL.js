(function(e) {
    var d = window.AmazonUIPageJS || window.P,
        f = d._namespace || d.attributeErrors,
        a = f ? f("GenericObservableJS", "") : d;
    a.guardFatal ? a.guardFatal(e)(a, window) : a.execute(function() {
        e(a, window)
    })
})(function(e, d, f) {
    e.register("generic-observable", function() {
        return function() {
            var a = this,
                g = {};
            a.addObserver = function(b, a) {
                g[b] = g[b] || [];
                g[b].push(a)
            };
            a.removeObserver = function(b, a) {
                b = g[b] || [];
                for (var c = 0; c < b.length;) b[c] === a ? b.splice(c, 1) : c++
            };
            a.notifyObservers = function() {
                for (var b = arguments[0], d = [], c = 0; c <
                    arguments.length; c++) d.push(arguments[c]);
                b = (g[b] || []).slice(0);
                for (c = 0; c < b.length; c++) {
                    var f = b[c];
                    try {
                        f.apply(a, d)
                    } catch (h) {
                        e.execute(function() {
                            throw h;
                        })
                    }
                }
            };
            return a
        }
    })
});