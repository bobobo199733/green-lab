/* ES Module Shims 0.4.5 */
!(function () {
  "use strict";
  const A = Promise.resolve();
  let Q;
  function B(A) {
    return URL.createObjectURL(
      new Blob([A], { type: "application/javascript" })
    );
  }
  const C = "undefined" != typeof document;
  let g, E;
  try {
    g = (0, eval)("u=>import(u)");
  } catch (A) {
    C &&
      (self.addEventListener("error", (A) => (importShim.e = A.error)),
      (g = (A) => {
        const C = B(
            `import*as m from'${A}';self.importShim.l=m;self.importShim.e=null`
          ),
          g = document.createElement("script");
        return (
          (g.type = "module"),
          (g.src = C),
          document.head.appendChild(g),
          new Promise((A, B) => {
            g.addEventListener("load", () => {
              document.head.removeChild(g),
                importShim.e ? B(importShim.e) : A(importShim.l, Q);
            });
          })
        );
      }));
  }
  if (C) {
    const A = document.querySelector("base[href]");
    A && (Q = A.href);
  }
  if (!Q && "undefined" != typeof location) {
    Q = location.href.split("#")[0].split("?")[0];
    const A = Q.lastIndexOf("/");
    -1 !== A && (Q = Q.slice(0, A + 1));
  }
  C && (E = document.currentScript && document.currentScript.src);
  const e = /\\/g;
  function I(A, Q) {
    if (
      ((Q = Q && Q.split("#")[0].split("?")[0]),
      -1 !== A.indexOf("\\") && (A = A.replace(e, "/")),
      "/" === A[0] && "/" === A[1])
    )
      return Q.slice(0, Q.indexOf(":") + 1) + A;
    if (
      ("." === A[0] &&
        ("/" === A[1] ||
          ("." === A[1] && ("/" === A[2] || (2 === A.length && (A += "/")))) ||
          (1 === A.length && (A += "/")))) ||
      "/" === A[0]
    ) {
      const B = Q.slice(0, Q.indexOf(":") + 1);
      let C;
      if (
        ("/" === Q[B.length + 1]
          ? "file:" !== B
            ? ((C = Q.slice(B.length + 2)), (C = C.slice(C.indexOf("/") + 1)))
            : (C = Q.slice(8))
          : (C = Q.slice(B.length + ("/" === Q[B.length]))),
        "/" === A[0])
      )
        return Q.slice(0, Q.length - C.length - 1) + A;
      const g = C.slice(0, C.lastIndexOf("/") + 1) + A,
        E = [];
      let e = -1;
      for (let A = 0; A < g.length; A++)
        -1 !== e
          ? "/" === g[A] && (E.push(g.slice(e, A + 1)), (e = -1))
          : "." === g[A]
          ? "." !== g[A + 1] || ("/" !== g[A + 2] && A + 2 !== g.length)
            ? "/" === g[A + 1] || A + 1 === g.length
              ? (A += 1)
              : (e = A)
            : (E.pop(), (A += 2))
          : (e = A);
      return (
        -1 !== e && E.push(g.slice(e)),
        Q.slice(0, Q.length - C.length) + E.join("")
      );
    }
  }
  const t = { imports: {}, scopes: {} };
  function i(A, Q) {
    return I(A, Q) || (-1 !== A.indexOf(":") ? A : I("./" + A, Q));
  }
  async function s(A) {
    try {
      return await g(A), !0;
    } catch (A) {
      return !1;
    }
  }
  async function o(A, Q, B, C, g) {
    A: for (let E in A) {
      const e = I(E, B) || E;
      let t = A[E];
      if ("string" == typeof t) t = [t];
      else if (!Array.isArray(t)) continue;
      for (const A of t) {
        if ("string" != typeof A) continue;
        const E = w(C, I(A, B) || A, g);
        if (E && (!E.startsWith("std:") || (await s(E)))) {
          Q[e] = E;
          continue A;
        }
      }
      c(E, A[E], "bare specifier did not resolve");
    }
  }
  async function a(A, Q, B) {
    const C = {
      imports: Object.assign({}, B.imports),
      scopes: Object.assign({}, B.scopes),
    };
    if ((A.imports && (await o(A.imports, C.imports, Q, B, null)), A.scopes))
      for (let g in A.scopes) {
        const E = i(g, Q);
        await o(A.scopes[g], C.scopes[E] || (C.scopes[E] = {}), Q, B, E);
      }
    return C;
  }
  function n(A, Q) {
    if (Q[A]) return A;
    let B = A.length;
    do {
      const C = A.slice(0, B + 1);
      if (C in Q) return C;
    } while (-1 !== (B = A.lastIndexOf("/", B - 1)));
  }
  function r(A, Q) {
    const B = n(A, Q);
    if (B) {
      const C = Q[B];
      if (null === C) return;
      if (!(A.length > B.length && "/" !== C[C.length - 1]))
        return C + A.slice(B.length);
      c(B, C, "should have a trailing '/'");
    }
  }
  function c(A, Q, B) {
    console.warn(
      "Package target " + B + ", resolving target '" + Q + "' for " + A
    );
  }
  function w(A, Q, B) {
    let C = B && n(B, A.scopes);
    for (; C; ) {
      const B = r(Q, A.scopes[C]);
      if (B) return B;
      C = n(C.slice(0, C.lastIndexOf("/")), A.scopes);
    }
    return r(Q, A.imports) || (-1 !== Q.indexOf(":") && Q);
  }
  let f;
  const l = WebAssembly.compile(
    ((D =
      "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"),
    "function" == typeof atob
      ? Uint8Array.from(atob(D), (A) => A.charCodeAt(0))
      : Buffer.from(D, "base64"))
  )
    .then(WebAssembly.instantiate)
    .then(({ exports: A }) => {
      f = A;
    });
  var D;
  let H = 0;
  const p = {};
  async function h(Q, C) {
    await l;
    const E = (function Q(B, C) {
        let g = p[B];
        return (
          g ||
          ((g = p[B] =
            {
              u: B,
              r: void 0,
              f: void 0,
              S: void 0,
              L: void 0,
              a: void 0,
              d: void 0,
              b: void 0,
              s: void 0,
            }),
          B.startsWith("std:")
            ? Object.assign(g, { r: B, f: A, L: A, b: B })
            : ((g.f = (async () => {
                if (!C) {
                  const A = await m.fetch(B);
                  if (!A.ok)
                    throw new Error(`${A.status} ${A.statusText} ${A.url}`);
                  g.r = A.url;
                  const Q = A.headers.get("content-type");
                  if (Q.match(/^(text|application)\/(x-)?javascript(;|$)/))
                    C = await A.text();
                  else if (Q.match(/^application\/json(;|$)/))
                    C = `export default JSON.parse(${JSON.stringify(
                      await A.text()
                    )})`;
                  else {
                    if (!Q.match(/^text\/css(;|$)/)) {
                      if (Q.match(/^application\/wasm(;|$)/)) {
                        const Q = (u[B] = await WebAssembly.compile(
                          await A.arrayBuffer()
                        ));
                        let C = WebAssembly.Module.imports
                          ? WebAssembly.Module.imports(Q).map((A) => A.module)
                          : [];
                        const E = [];
                        g.a = [
                          E,
                          WebAssembly.Module.exports(Q).map((A) => A.name),
                        ];
                        const e = C.map((A) => JSON.stringify(A));
                        let I = 0;
                        return (
                          (g.S =
                            e
                              .map((A, Q) => {
                                const B = Q.toString(),
                                  C = I + 17 + B.length,
                                  g = C + A.length - 2;
                                return (
                                  E.push({ s: C, e: g, d: -1 }),
                                  (I += g + 3),
                                  `import*as m${B} from${A};`
                                );
                              })
                              .join("") +
                            `const module=importShim.w[${JSON.stringify(
                              B
                            )}],exports=new WebAssembly.Instance(module,{` +
                            e.map((A, Q) => `${A}:m${Q},`).join("") +
                            "}).exports;" +
                            g.a[1]
                              .map((A) =>
                                "default" === A
                                  ? "export default exports." + A
                                  : `export const ${A}=exports.${A}`
                              )
                              .join(";")),
                          C
                        );
                      }
                      throw new Error(`Unknown Content-Type "${Q}"`);
                    }
                    C = `const s=new CSSStyleSheet();s.replaceSync(${JSON.stringify(
                      await A.text()
                    )});export default s`;
                  }
                }
                try {
                  g.a = (function A(Q, B = "@") {
                    if (!f) return l.then(() => A(Q));
                    const C =
                      (f.__heap_base.value || f.__heap_base) +
                      4 * Q.length -
                      f.memory.buffer.byteLength;
                    if (
                      (C > 0 && f.memory.grow(Math.ceil(C / 65536)),
                      (function (A, Q) {
                        const B = A.length;
                        let C = 0;
                        for (; C < B; ) Q[C] = A.charCodeAt(C++);
                      })(
                        Q,
                        new Uint16Array(
                          f.memory.buffer,
                          f.sa(Q.length),
                          Q.length + 1
                        )
                      ),
                      !f.parse())
                    )
                      throw Object.assign(
                        new Error(
                          `Parse error ${B}:${
                            Q.slice(0, f.e()).split("\n").length
                          }:${f.e() - Q.lastIndexOf("\n", f.e() - 1)}`
                        ),
                        { idx: f.e() }
                      );
                    const g = [],
                      E = [];
                    for (; f.ri(); )
                      g.push({
                        s: f.is(),
                        e: f.ie(),
                        ss: f.ss(),
                        se: f.se(),
                        d: f.id(),
                      });
                    for (; f.re(); ) E.push(Q.slice(f.es(), f.ee()));
                    return [g, E, !!f.f()];
                  })(C, g.u);
                } catch (A) {
                  console.warn(A), (g.a = [[], []]);
                }
                return (
                  (g.S = C),
                  g.a[0].filter((A) => -1 === A.d).map((A) => C.slice(A.s, A.e))
                );
              })()),
              (g.L = g.f.then(async (A) => {
                g.d = await Promise.all(
                  A.map(async (A) => {
                    const B = await d(A, g.r || g.u);
                    if (m.skip.test(B)) return { b: B };
                    const C = Q(B);
                    return await C.f, C;
                  })
                );
              })),
              g))
        );
      })(Q, C),
      e = {};
    await (async function A(Q, B) {
      if (!Q.b && !B[Q.u])
        return (B[Q.u] = 1), await Q.L, Promise.all(Q.d.map((Q) => A(Q, B)));
    })(E, e),
      (L = void 0),
      (function A(Q, C) {
        if (Q.b || !C[Q.u]) return;
        C[Q.u] = 0;
        for (const B of Q.d) A(B, C);
        const g = Q.S;
        let E = R && L ? `import '${L}';` : "";
        const [e] = Q.a;
        if (e.length) {
          let A = 0,
            C = 0;
          for (const { s: I, e: t, d: i } of e)
            if (-1 === i) {
              const e = Q.d[C++];
              let i = e.b;
              if (i) {
                if (e.s) {
                  (E +=
                    g.slice(A, I - 1) +
                    "/*" +
                    g.slice(I - 1, t + 1) +
                    "*/" +
                    g.slice(I - 1, I) +
                    i +
                    g[t] +
                    `;import*as m$_${C} from'${e.b}';import{u$_ as u$_${C}}from'${e.s}';u$_${C}(m$_${C})`),
                    (A = t + 1),
                    (e.s = void 0);
                  continue;
                }
              } else
                (i = e.s) ||
                  (i = e.s =
                    B(
                      `export function u$_(m){${e.a[1]
                        .map((A) =>
                          "default" === A
                            ? "$_default=m.default"
                            : `${A}=m.${A}`
                        )
                        .join(",")}}${e.a[1]
                        .map((A) =>
                          "default" === A
                            ? "let $_default;export{$_default as default}"
                            : "export let " + A
                        )
                        .join(";")}\n//# sourceURL=${e.r}?cycle`
                    ));
              (E +=
                g.slice(A, I - 1) +
                "/*" +
                g.slice(I - 1, t + 1) +
                "*/" +
                g.slice(I - 1, I) +
                i),
                (A = t);
            } else
              -2 === i
                ? ((k[Q.r] = { url: Q.r }),
                  (E +=
                    g.slice(A, I) +
                    "importShim.m[" +
                    JSON.stringify(Q.r) +
                    "]"),
                  (A = t))
                : ((E +=
                    g.slice(A, i + 6) +
                    "Shim(" +
                    g.slice(I, t) +
                    ", " +
                    JSON.stringify(Q.r)),
                  (A = t));
          E += g.slice(A);
        } else E += g;
        let I = "";
        const t = E.lastIndexOf("//# sourceMappingURL=");
        if (t > -1) {
          const A = E.indexOf("\n", t);
          I =
            "\n//# sourceMappingURL=" +
            i(E.slice(t, A > -1 ? A : void 0).slice(21), Q.r);
        }
        (Q.b = L = B(E + I + "\n//# sourceURL=" + Q.r)), (Q.S = void 0);
      })(E, e);
    const I = await g(E.b);
    return E.s && (await g(E.s)).u$_(I), I;
  }
  async function m(A, B) {
    return h(await d(A, B || Q));
  }
  self.importShim = m;
  const k = {},
    u = {},
    R = navigator.userAgent.match(/Edge\/\d\d\.\d+$/);
  let L, F;
  if (
    (Object.defineProperties(m, {
      map: { value: t, writable: !0 },
      m: { value: k },
      w: { value: u },
      l: { value: void 0, writable: !0 },
      e: { value: void 0, writable: !0 },
    }),
    (m.fetch = (A) => fetch(A)),
    (m.skip = /^https?:\/\/(cdn\.pika\.dev|dev\.jspm\.io|jspm\.dev)\//),
    C)
  ) {
    for (const A of document.querySelectorAll(
      'script[type="importmap-shim"][src]'
    ))
      A._f = fetch(A.src);
    for (const A of document.querySelectorAll('script[type="module-shim"]'))
      h(A.src || `${Q}?${H++}`, A.src ? null : A.innerHTML);
  }
  async function d(B, g) {
    if (!F && ((F = A), C))
      for (const A of document.querySelectorAll(
        'script[type="importmap-shim"]'
      ))
        F = F.then(async () => {
          m.map = await a(
            A.src
              ? await (await (A._f || fetch(A.src))).json()
              : JSON.parse(A.innerHTML),
            A.src || Q,
            m.map
          );
        });
    return (
      await F,
      w(m.map, I(B, g) || B, g) ||
        (function (A, Q) {
          throw Error(
            "Unable to resolve specifier '" + A + (Q ? "' from " + Q : "'")
          );
        })(B, g)
    );
  }
  self.WorkerShim = class {
    constructor(A, C = {}) {
      if ("module" !== C.type) return new Worker(A, C);
      if (!E)
        throw new Error(
          "es-module-shims.js must be loaded with a script tag for WorkerShim support."
        );
      C.importMap = C.importMap || t;
      const g = B(
        `importScripts('${E}');importShim.map=${JSON.stringify(
          C.importMap
        )};importShim('${
          new URL(A, Q).href
        }').catch(e=>setTimeout(()=>{throw e}))`
      );
      return new Worker(g, Object.assign({}, C, { type: void 0 }));
    }
  };
})();
