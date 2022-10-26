/*
 * Braze Web SDK v3.5.1
 * (c) Braze, Inc. 2022 - http://braze.com
 * License available at https://github.com/Appboy/appboy-web-sdk/blob/master/LICENSE
 * Compiled on 2022-03-24
 */
'use strict';
const k = {
    M: function(a) {
        var b = "=".repeat((4 - a.length % 4) % 4);
        a = (a + b).replace(/\-/g, "+").replace(/_/g, "/");
        a = atob(a);
        b = new Uint8Array(a.length);
        for (let d = 0; d < a.length; ++d) b[d] = a.charCodeAt(d);
        return b
    }
};
const l = {
    D: () => {
        const a = b => {
            const d = (Math.random().toString(16) + "000000000").substr(2, 8);
            return b ? "-" + d.substr(0, 4) + "-" + d.substr(4, 4) : d
        };
        return a() + a(!0) + a(!0) + a()
    }
};

function q(a) {
    if ("indexedDB" in a.C) return a.C.indexedDB
}

function r(a) {
    try {
        if (null == q(a)) return !1;
        q(a).open("Braze IndexedDB Support Test");
        if ("undefined" !== typeof window) {
            const b = window.na || window.ma || window.pa;
            if (b && b.L && b.L.id) return a.f.info("Not using IndexedDB for storage because we are running inside an extension"), !1
        }
        return !0
    } catch (b) {
        return a.f.info("Not using IndexedDB for storage due to following error: " + b), !1
    }
}

function t(a, b, d) {
    const f = q(a).open(a.c.g, a.c.VERSION);
    if (null == f) return "function" === typeof d && d(), !1;
    f.onupgradeneeded = e => {
        a.f.info("Upgrading indexedDB " + a.c.g + " to v" + a.c.VERSION + "...");
        e = e.target.result;
        for (const c in a.c.b) a.c.b.hasOwnProperty(c) && !e.objectStoreNames.contains(a.c.b[c]) && e.createObjectStore(a.c.b[c])
    };
    f.onsuccess = e => {
        const c = e.target.result;
        c.onversionchange = () => {
            c.close();
            "function" === typeof d && d();
            a.f.error("Needed to close the database unexpectedly because of an upgrade in another tab")
        };
        b(c)
    };
    f.onerror = e => {
        a.f.info("Could not open indexedDB " + a.c.g + " v" + a.c.VERSION + ": " + e.target.errorCode);
        "function" === typeof d && d();
        return !0
    };
    return !0
}

function w(a, b, d, f) {
    r(a) ? t(a, e => {
            e.objectStoreNames.contains(b) ? (e = e.transaction([b], "readonly").objectStore(b).openCursor(null, "prev"), e.onerror = () => {
                a.f.error("Could not open cursor for " + b + " on indexedDB " + a.c.g);
                "function" === typeof f && f()
            }, e.onsuccess = c => {
                c = c.target.result;
                null != c && null != c.value && null != c.key ? d(c.key, c.value) : "function" === typeof f && f()
            }) : (a.f.error("Could not retrieve last record from " + b + " on indexedDB " + a.c.g + " - " + b + " is not a valid objectStore"), "function" === typeof f && f())
        },
        f) : "function" === typeof f && f()
}
class x {
    constructor(a, b) {
        this.C = "undefined" === typeof window ? self : window;
        this.c = a;
        this.f = b
    }
    setItem(a, b, d, f, e) {
        if (!r(this)) return "function" === typeof e && e(), !1;
        const c = this;
        return t(this, g => {
            g.objectStoreNames.contains(a) ? (g = g.transaction([a], "readwrite").objectStore(a).put(d, b), g.onerror = () => {
                c.f.error("Could not store object " + b + " in " + a + " on indexedDB " + c.c.g);
                "function" === typeof e && e()
            }, g.onsuccess = () => {
                "function" === typeof f && f()
            }) : (c.f.error("Could not store object " + b + " in " + a + " on indexedDB " +
                c.c.g + " - " + a + " is not a valid objectStore"), "function" === typeof e && e())
        }, e)
    }
    getItem(a, b, d) {
        if (!r(this)) return !1;
        const f = this;
        return t(this, e => {
            e.objectStoreNames.contains(a) ? (e = e.transaction([a], "readonly").objectStore(a).get(b), e.onerror = () => {
                f.f.error("Could not retrieve object " + b + " in " + a + " on indexedDB " + f.c.g)
            }, e.onsuccess = c => {
                c = c.target.result;
                null != c && d(c)
            }) : f.f.error("Could not retrieve object " + b + " in " + a + " on indexedDB " + f.c.g + " - " + a + " is not a valid objectStore")
        })
    }
    clearData() {
        if (!r(this)) return !1;
        const a = [];
        for (const d in this.c.b) this.c.b.hasOwnProperty(d) && this.c.b[d] !== this.c.b.v && a.push(this.c.b[d]);
        const b = this;
        return t(this, function(d) {
            d = d.transaction(a, "readwrite");
            for (let f = 0; f < a.length; f++) d.objectStore(a[f]).clear().onerror = function() {
                b.f.error("Could not clear " + this.source.name + " on indexedDB " + b.c.g)
            };
            d.onerror = function() {
                b.f.error("Could not clear object stores on indexedDB " + b.c.g)
            }
        })
    }
};
const y = {
    s: function(a) {
        if (void 0 !== a || void 0 === y.j) y.j = !!a;
        y.B || (y.B = !0)
    },
    oa: function() {
        y.B = !1;
        y.j = void 0;
        y.f = void 0
    },
    qa: function(a) {
        "function" !== typeof a ? y.info("Ignoring setLogger call since logger is not a function") : (y.s(), y.f = a)
    },
    ra: function() {
        y.s();
        y.j ? (console.log("Disabling Appboy logging"), y.j = !1) : (console.log("Enabled Appboy logging"), y.j = !0)
    },
    info: function(a) {
        y.j && (a = "Appboy: " + a, null != y.f ? y.f(a) : console.log(a))
    },
    warn: function(a) {
        y.j && (a = "Appboy SDK Warning: " + a + " (v3.5.1)", null !=
            y.f ? y.f(a) : console.warn(a))
    },
    error: function(a) {
        y.j && (a = "Appboy SDK Error: " + a + " (v3.5.1)", null != y.f ? y.f(a) : console.error(a))
    }
};
var z = {
        CustomEvent: "ce",
        da: "p",
        J: "pc",
        I: "ca",
        fa: "i",
        ea: "ie",
        T: "cci",
        U: "ccic",
        R: "ccc",
        S: "ccd",
        ka: "ss",
        ja: "se",
        ca: "si",
        aa: "sc",
        $: "sbc",
        ba: "sfe",
        V: "iec",
        ia: "lr",
        N: "uae",
        P: "ci",
        O: "cc",
        ga: "lcaa",
        ha: "lcar",
        X: "inc",
        W: "add",
        Y: "rem",
        Z: "set",
        la: "sgu"
    },
    A = x,
    B = {
        h: {
            g: "AppboyServiceWorkerAsyncStorage",
            VERSION: 6,
            b: {
                l: "data",
                H: "pushClicks",
                A: "pushSubscribed",
                o: "fallbackDevice",
                F: "cardUpdates",
                v: "optOut",
                G: "pendingData",
                K: "sdkAuthenticationSignature"
            },
            m: 1
        }
    },
    E = y;

function F() {
    return new Promise(function(a, b) {
        const d = B.h;
        w(new A(d, E), d.b.v, b, a)
    })
};

function G() {
    return new Promise(a => {
        const b = B.h;
        w(new A(b, E), b.b.K, (d, f) => {
            a(f)
        }, () => {
            a(null)
        })
    })
}

function H(a, b, d) {
    E.info(`${b} due to SDK Authentication failure with error code ${d.error_code}. The data will be logged on the user's next session start.`);
    b = B.h;
    (new A(b, E)).setItem(b.b.G, l.D(), a)
};

function I(a, b, d) {
    return new Promise(function(f, e) {
        const c = {};
        c.time = Math.floor((new Date).valueOf() / 1E3);
        c.device_id = d;
        c.api_key = a;
        c.sdk_version = "3.5.1";
        c.sdk_flavor = "amp";
        c.respond_with = {
            config: {
                config_time: 0
            }
        };
        fetch(b + "/data/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "X-Braze-Api-Key": a
            },
            body: JSON.stringify(c)
        }).then(function(g) {
            g.ok || E.error("Unable to get config: " + g.status);
            return g.json()
        }).then(function(g) {
            g.error && (E.error("Unable to get config: " + g.error), e());
            g.auth_error && (E.error("Unable to get config due to authentication error. SDK Authentication does not support AMP pages."), e());
            g.error || g.auth_error || (g = {
                userVisibleOnly: !0,
                applicationServerKey: k.M(g.config.vapid_public_key)
            }, f(g))
        }).catch(function(g) {
            E.error("Unable to get config: " + g);
            e()
        })
    })
}

function J(a, b, d, f, e, c, g, h, m) {
    return G().then(n => new Promise(function(C, D) {
        const u = {};
        u.device_id = d;
        u.api_key = a;
        u.sdk_version = "3.5.1";
        null != c && (u.sdk_flavor = c);
        var v = null;
        let K = null,
            L = null;
        e && (L = e.endpoint, e.getKey && (v = btoa(String.fromCharCode.apply(null, new Uint8Array(e.getKey("p256dh")))), K = btoa(String.fromCharCode.apply(null, new Uint8Array(e.getKey("auth"))))));
        u.time = Math.floor((new Date).valueOf() / 1E3);
        u.attributes = [{
            user_id: f,
            push_token: L,
            custom_push_public_key: v,
            custom_push_user_auth: K
        }];
        v = {
            "Content-type": "application/json",
            "X-Braze-Api-Key": u.api_key
        };
        n && m && (v["X-Braze-Auth-Signature"] = n);
        fetch(b + "/data/", {
            method: "POST",
            headers: v,
            body: JSON.stringify(u)
        }).then(function(p) {
            p.ok || E.error(h + " " + p.status);
            return p.json()
        }).then(function(p) {
            p.error && (E.error(h + " " + p.error), D());
            p.auth_error && (H(u, h, p.auth_error), D());
            p.error || p.auth_error || (E.info(g), C())
        }).catch(function(p) {
            E.error(h + " " + p);
            D()
        })
    }))
}

function M(a, b) {
    return F().then(function() {
        return G()
    }).then(function(d) {
        const f = B.h;
        w(new A(f, E), f.b.l, function(e, c) {
            e = Math.floor((new Date).valueOf() / 1E3);
            const g = c.data;
            g.time = e;
            a.time = e;
            a.user_id = c.userId;
            g.events = [a];
            g.sdk_version = "3.5.1";
            e = {
                "Content-Type": "application/json",
                "X-Braze-Api-Key": g.api_key
            };
            d && c.sdkAuthEnabled && (e["X-Braze-Auth-Signature"] = d);
            fetch(c.baseUrl + "/data/", {
                method: "POST",
                headers: e,
                body: JSON.stringify(g)
            }).then(function(h) {
                h.ok || E.error("Unable to log " + b + ": " +
                    h.status);
                return h.json()
            }).then(function(h) {
                h.error && E.error("Unable to log " + b + ":", h.error);
                h.auth_error && H(g, "Unable to log " + b, h.auth_error);
                h.error || h.auth_error || E.info("Successfully logged " + b);
                return Promise.resolve()
            }).catch(function(h) {
                E.error("Unable to log " + b + ":", h);
                return Promise.resolve()
            })
        })
    }).catch(function() {
        return Promise.reject("Not sending data to Braze backend due to opt-out.")
    })
};

function N() {
    const a = self.location.search.match(/apiKey=([^&]+)/i);
    if (a) return a[1];
    E.error("Missing API key in query params.");
    return null
}

function O() {
    const a = self.location.search.match(/baseUrl=([^&]+)/i);
    if (a) return a[1];
    E.error("Missing base URL in query params.");
    return null
};

function P(a, b) {
    self.clients.matchAll().then(function(d) {
        for (let f = 0; f < d.length; f++) d[f].postMessage({
            command: a,
            payload: b
        })
    })
}

function Q(a, b, d, f, e) {
    return I(a, b, d).then(function(c) {
        return self.registration.pushManager.subscribe(c)
    }).then(function(c) {
        P("amp-web-push-subscribe", null);
        return J(a, b, d, f, c, "amp", "Successfully sent AMP push subscription to Braze backend.", "Unable to send AMP push subscription to Braze backend.", e)
    }).catch(function() {
        E.error("Failed to subscribe for AMP push.");
        return Promise.reject()
    })
}

function R() {
    self.registration.pushManager.getSubscription().then(function(a) {
        return a ? self.registration.pushManager.permissionState(a.options) : null
    }).then(function(a) {
        P("amp-web-push-subscription-state", "granted" === a)
    })
}

function S() {
    const a = B.h,
        b = new A(a, E);
    return (new Promise(function(d, f) {
        w(b, a.b.l, function(e, c) {
            Q(c.data.api_key, c.baseUrl, c.data.device_id, c.userId, c.sdkAuthEnabled).then(function() {
                d()
            }).catch(function() {
                f()
            })
        }, function() {
            const e = N(),
                c = O();
            w(b, a.b.o, function(g, h) {
                Q(e, c, h, null).then(function() {
                    d()
                }).catch(function() {
                    f()
                })
            }, function() {
                const g = l.D();
                (new Promise(function(h, m) {
                    b.setItem(a.b.o, a.m, g, h, m)
                })).then(function() {
                    return Q(e, c, g, null)
                }).then(function() {
                    d()
                }).catch(function() {
                    f()
                })
            })
        })
    })).then(function() {
        return new Promise(function(d,
            f) {
            b.setItem(a.b.A, a.m, !0, d, f)
        })
    })
}

function T() {
    return self.registration.pushManager.getSubscription().then(function(a) {
        return a.unsubscribe()
    }).then(function() {
        P("amp-web-push-unsubscribe", null);
        const a = B.h,
            b = new A(a, E);
        return (new Promise(function(d, f) {
            w(b, a.b.l, function(e, c) {
                J(c.data.api_key, c.baseUrl, c.data.device_id, c.userId, null, "amp", "Successfully sent AMP push unsubscription to Braze backend.", "Unable to send AMP push unsubscription to Braze backend.", c.sdkAuthEnabled).then(function() {
                    d()
                }).catch(function() {
                    f()
                })
            }, function() {
                w(b,
                    a.b.o,
                    function(e, c) {
                        e = N();
                        const g = O();
                        J(e, g, c, null, null, "amp", "Successfully sent AMP push unsubscription to Braze backend.", "Unable to send AMP push unsubscription to Braze backend.", null).then(function() {
                            d()
                        }).catch(function() {
                            f()
                        })
                    },
                    function() {
                        E.error("No device found during unsubscription.");
                        f()
                    })
            })
        })).then(function() {
            return new Promise(function(d, f) {
                b.setItem(a.b.A, a.m, !1, d, f)
            })
        })
    }).catch(function() {
        E.error("Failed to unsubscribe for AMP push.");
        return Promise.reject()
    })
};

function U(a, b) {
    a.waitUntil(b.catch(function(d) {
        d && E.info(d)
    }))
};
E.s(!0);

function V(a) {
    if (null == a || 0 === Object.keys(a).length) return Promise.reject("Server has no pending push message for this registration. Ignoring push event.");
    const b = a.t,
        d = a.a,
        f = a.i,
        e = a.img,
        c = {
            url: a.u,
            ab_ids: {
                cid: a.cid
            },
            extra: a.e
        },
        g = a.ri;
    a.ab_push_fetch_test_triggers_key && (E.info("Service worker 3.5.1 found trigger fetch key in push payload."), c.fetchTriggers = !0);
    var h = a.ab_cd;
    if (null != h) {
        var m = B.h;
        (new A(m, E)).setItem(m.b.F, (new Date).valueOf(), {
            userId: a.ab_cd_uid,
            card: h
        })
    }
    a = a.pab || [];
    h = {};
    for (m = 0; m < a.length; m++)
        if (null != a[m] && null != a[m].action) {
            let n;
            switch (a[m].a) {
                case "ab_none":
                    n = null;
                    break;
                case "ab_uri":
                    if (n = a[m].u, null == n || "" === n) n = "/"
            }
            h[a[m].action] = n
        }
    c.actionTargets = h;
    E.info("Displaying push notification!");
    return self.registration.showNotification(b, {
        body: d,
        icon: f,
        image: e,
        data: c,
        actions: a,
        requireInteraction: g
    }).catch(function(n) {
        E.info(n)
    })
}
self.addEventListener("install", function(a) {
    a.waitUntil(self.skipWaiting())
});
self.addEventListener("activate", function() {
    return self.clients.claim()
});
self.addEventListener("push", function(a) {
    E.info("Service worker 3.5.1 received push");
    null != a.data && null != a.data.json ? U(a, V(a.data.json())) : U(a, new Promise(function(b, d) {
        const f = B.h;
        w(new A(f, E), f.b.l, function(e, c) {
            const g = c.data;
            F().then(function() {
                return fetch(c.baseUrl + "/web_push/", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "X-Braze-Api-Key": g.api_key
                    },
                    body: JSON.stringify(g)
                })
            }).then(function(h) {
                return h.ok ? h.json() : (E.error("Unable to retrieve push payload from server: " +
                    h.status), Promise.reject())
            }).then(function(h) {
                E.info("Retrieved push payload from server");
                b(V(h))
            }).catch(function(h) {
                d("Unable to retrieve push payload from server or user has opt-out: " + h)
            })
        })
    }))
});
self.addEventListener("notificationclick", function(a) {
    if (a && a.notification && (a.notification.close(), null != Notification && Notification.prototype.hasOwnProperty("data") && a.notification.data && a.notification.data.ab_ids)) {
        var b = null != a.action && "" !== a.action;
        var d = b ? M({
            name: z.I,
            data: {
                cid: a.notification.data.ab_ids.cid,
                a: a.action
            }
        }, "push button click") : M({
            name: z.J,
            data: {
                cid: a.notification.data.ab_ids.cid
            }
        }, "push click");
        if (!b) {
            const g = {
                lastClick: (new Date).valueOf(),
                trackingString: a.notification.data.ab_ids.cid
            };
            a.notification.data.fetchTriggers && (g.fetchTriggers = !0);
            const h = B.h,
                m = new A(h, E);
            var f = d.then(function() {
                return new Promise(function(n, C) {
                    m.setItem(h.b.H, h.m, g, n, C)
                })
            }).catch(function() {
                E.info("Not storing push click due to no click event being created.");
                return Promise.resolve()
            })
        }
        if (b) var e = a.notification.data.actionTargets[a.action];
        else if (e = a.notification.data.url, null == e || "" === e) e = "/";
        var c;
        null != e && "" !== e && (c = clients.matchAll({
            type: "window"
        }).then(function() {
            if (clients.openWindow) return clients.openWindow(e)
        }));
        U(a, Promise.all([c, f]))
    }
});
self.addEventListener("pushsubscriptionchange", function(a) {
    U(a, F().then(function() {
        let b = {
            userVisibleOnly: !0
        };
        null != a.oldSubscription && (b = a.oldSubscription.options);
        return self.registration.pushManager.subscribe(b)
    }).then(function(b) {
        const d = B.h;
        return new Promise(function(f, e) {
            w(new A(d, E), d.b.l, function(c, g) {
                J(g.data.api_key, g.baseUrl, g.data.device_id, g.userId, b, null, "Successfully resubscribed user after expiration", "Unable to resubscribe user", g.sdkAuthEnabled).then(function() {
                    f()
                }).catch(function() {
                    e()
                })
            })
        })
    }).catch(function() {
        return Promise.reject("Not resubscribing user for push due to opt-out.")
    }))
});
self.addEventListener("message", function(a) {
    a.waitUntil && a.data.command && a.waitUntil(F().then(function() {
        switch (a.data.command) {
            case "amp-web-push-subscription-state":
                return R(), Promise.resolve();
            case "amp-web-push-subscribe":
                return S();
            case "amp-web-push-unsubscribe":
                return T();
            default:
                return Promise.resolve()
        }
    }).catch(function() {
        E.info("Ignoring message from amp-web-push due to opt-out.");
        return Promise.resolve()
    }))
});