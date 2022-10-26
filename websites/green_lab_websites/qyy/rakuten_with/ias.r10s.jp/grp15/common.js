function grp15ULD(e) {
    for (var a = "", c = "00", g = "000", b = 0; b < e.length; b++)
        if ("9999999" == e[b]) {
            a = e[b];
            break
        } else switch (e[b].charAt(0)) {
            case "f":
                var d = "" + e[b].substr(1, 2);
                10 >= parseInt(d) && (parseInt(c) < parseInt(d) || "99" == c || "88" == c) ? c = d : "99" != d || "00" != c && "88" != c ? "88" == d && "00" == c && (c = d) : c = d;
                break;
            case "p":
                d = "" + e[b].substr(1, 3), parseInt(g) < parseInt(d) && (g = d)
        }
    "" == a && ("00" == c && (g = "000"), a = "" + c + g);
    return a
}

function grp15NULD(e) {
    for (var a = "", c = "00", g = "000", b = 0; b < e.length; b++)
        if ("9999999" == e[b]) {
            a = e[b];
            break
        } else switch (e[b].charAt(0)) {
            case "f":
                var d = ("0" + (parseInt(e[b].substr(1, 2)) + 1)).substr(-2);
                11 >= parseInt(d) && (parseInt(c) < parseInt(d) || "99" == c || "88" == c) ? c = d : "99" != d || "00" != c && "88" != c ? "88" == d && "00" == c && (c = d) : c = d;
                break;
            case "p":
                d = "" + e[b].substr(1, 3), parseInt(g) < parseInt(d) && (g = d)
        }
    "" == a && ("00" == c ? c = "01" : "11" == c && (c = "10"), a = "" + c + g);
    return a
}

function grp15LURD(e) {
    var a = 1;
    switch (grp15ULD(e)) {
        case "01000":
            a = .78;
            break;
        case "01001":
            a = .71;
            break;
        case "01300":
            a = .24;
            break;
        case "01500":
            a = .24;
            break;
        case "02000":
            a = .78;
            break;
        case "02001":
            a = .71;
            break;
        case "02300":
            a = .24;
            break;
        case "02500":
            a = .24;
            break;
        case "03000":
            a = .26;
            break;
        case "03001":
            a = 1.26;
            break;
        case "03300":
            a = .24;
            break;
        case "03500":
            a = .24;
            break;
        case "04000":
            a = .26;
            break;
        case "04001":
            a = 1.26;
            break;
        case "04300":
            a = .24;
            break;
        case "04500":
            a = .24;
            break;
        case "05000":
            a = .26;
            break;
        case "05001":
            a = 1.26;
            break;
        case "05300":
            a = .24;
            break;
        case "05500":
            a = .24;
            break;
        case "06000":
            a = .1;
            break;
        case "06001":
            a = .3;
            break;
        case "06300":
            a = .24;
            break;
        case "06500":
            a = .24;
            break;
        case "07000":
            a = .1;
            break;
        case "07001":
            a = .3;
            break;
        case "07300":
            a = .24;
            break;
        case "07500":
            a = .24;
            break;
        case "08000":
            a = .1;
            break;
        case "08001":
            a = .3;
            break;
        case "08300":
            a = .24;
            break;
        case "08500":
            a = .24;
            break;
        case "09000":
            a = .1;
            break;
        case "09001":
            a = .3;
            break;
        case "09300":
            a = .24;
            break;
        case "09500":
            a = .24;
            break;
        case "10000":
            a = .2;
            break;
        case "10001":
            a = .25;
            break;
        case "10300":
            a =
                .24;
            break;
        case "10500":
            a = .24;
            break;
        case "99000":
            a = 1.31;
            break;
        case "99001":
            a = .91;
            break;
        case "99300":
            a = .24;
            break;
        case "99500":
            a = .24;
            break;
        case "00000":
            a = 1.31;
            break;
        case "88000":
            a = 1.31;
            break;
        case "88001":
            a = .91;
            break;
        case "88300":
            a = .24;
            break;
        case "88500":
            a = .24
    }
    return a
}

function grp15LURL(e) {
    return .526
}

function grp15BD(e) {
    var a = "00",
        c = "00",
        g = 0,
        b = 0;
    b = function(a) {
        var c = "",
            b = escape(a);
        for (a = 0; a < b.length; a++) c += String.fromCharCode(b.charCodeAt(a) + 1);
        return c
    };
    for (var d = function(a, c) {
            var b = a.toString().split("."),
                d = c.toString().split(".");
            b = 2 === b.length ? b[1].length : 0;
            d = 2 === d.length ? d[1].length : 0;
            return a * Math.pow(10, b) * c * Math.pow(10, d) / Math.pow(10, b + d)
        }, h = 0; h < e.length; h++)
        if ("f" == e[h].charAt(0)) {
            var f = "" + e[h].substr(1, 2);
            10 >= parseInt(f) && (parseInt(a) < parseInt(f) || "99" == a || "88" == a) ? a = f : "99" != f || "00" !=
                a && "88" != a ? "88" == f && "00" == a && (a = f) : a = f
        } else "sp" == e[h].substr(0, 2) && (f = "" + e[h].substr(2, 2), "01" == f && "00" == c ? c = f : "02" != f || "00" != c && "01" != c ? "03" == f && (c = f) : c = f);
    if ("01" <= a && "10" >= a && "01" == c) b = b("03///"), g = d(.327, b);
    else if ("99" == a && "01" == c) b = b("03///"), g = d(.327, b);
    else if ("99" == a || ("00" == a || "88" == a) && "02" == c) g = 0;
    else if ("88" == a && ("00" == c || "01" == c) || "00" == a && "01" == c || "00" == a && "00" == c) b = b("50773"), g = d(.327, b);
    return g
}

function grp15BL(e) {
    var a = "00",
        c = "00",
        g = 0,
        b = 0,
        d = function(a) {
            var c = "",
                b = escape(a);
            for (a = 0; a < b.length; a++) c += String.fromCharCode(b.charCodeAt(a) + 1);
            return c
        },
        h = function(a, c) {
            var b = a.toString().split("."),
                d = c.toString().split(".");
            b = 2 === b.length ? b[1].length : 0;
            d = 2 === d.length ? d[1].length : 0;
            return a * Math.pow(10, b) * c * Math.pow(10, d) / Math.pow(10, b + d)
        };
    for (b = 0; b < e.length; b++)
        if ("f" == e[b].charAt(0)) {
            var f = "" + e[b].substr(1, 2);
            10 >= parseInt(f) && (parseInt(a) < parseInt(f) || "99" == a || "88" == a) ? a = f : "99" != f || "00" != a &&
                "88" != a ? "88" == f && "00" == a && (a = f) : a = f
        } else "sp" == e[b].substr(0, 2) && (f = "" + e[b].substr(2, 2), "01" == f && "00" == c ? c = f : "02" != f || "00" != c && "01" != c ? "03" == f && (c = f) : c = f);
    if ("01" <= a && "10" >= a && "01" == c) b = d("03///"), g = h(.399, b);
    else if ("99" == a && "01" == c) b = d("03///"), g = h(.399, b), b = d("18166"), g += h(.399, b);
    else if ("99" == a || ("00" == a || "88" == a) && "02" == c) b = d("18166"), g = h(.399, b);
    else if (("88" == a || "00" == a) && "01" == c) b = d("47/41"), g = h(.711, b);
    else if ("88" == a && "00" == c || "00" == a && "00" == c) b = d("55330"), g = h(.711, b);
    return g
}

function grp15TDL(e) {
    if (!e) return 0;
    var a = {
            "01": "12/51",
            "02": "13218",
            "03": "13504",
            "04": "14216",
            "05": "140/6",
            "06": "14362",
            "07": "1506/",
            "08": "1506/",
            "09": "1506/",
            10: "23218",
            30: "47747",
            100: "83014"
        },
        c = Object.keys(a),
        g = 0,
        b = "",
        d;
    for (d in e)
        if (0 == e[d].indexOf("3d")) {
            var h = e[d].replace(/^3d/g, "");
            if (-1 != c.indexOf(h)) {
                var f = parseInt(h, 10);
                g < f && (g = f, b = h)
            }
        }
    if (a[b]) {
        e = parseInt;
        c = "";
        b = escape(a[b]);
        for (a = 0; a < b.length; a++) c += String.fromCharCode(b.charCodeAt(a) + 1);
        a = e(c)
    } else a = 0;
    return a
};