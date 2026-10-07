(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    1290: () => {},
    1901: (e, t, n) => {
      "use strict";
      n.d(t, { ThemeProvider: () => a });
      var i = n(5155);
      n(2115);
      var r = n(5379);
      function a(e) {
        let { children: t, ...n } = e;
        return (0, i.jsx)(r.N, { ...n, children: t });
      }
    },
    3920: (e, t, n) => {
      (Promise.resolve().then(n.t.bind(n, 1290, 23)),
        Promise.resolve().then(n.bind(n, 5271)),
        Promise.resolve().then(n.bind(n, 1901)));
    },
    4083: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var i = n(5155),
        r = n(5016);
      let a = { nav: 48, footer: 64, loader: 128 },
        o =
          "pointer-events-none absolute inset-0 m-0 h-full w-full max-h-none max-w-none object-contain transition-opacity duration-150";
      function s(e) {
        let {
            alt: t = "RoahRaschlaReloaded",
            className: n,
            size: s,
            loading: c = "lazy",
            fetchPriority: l,
            align: d = "left",
          } = e,
          u = "number" == typeof s ? s : a[s],
          h = "center" === d;
        return (0, i.jsxs)("span", {
          className: (0, r.cn)("relative inline-block shrink-0", n),
          style: { width: u, height: u },
          "aria-hidden": "" === t,
          children: [
            (0, i.jsx)("img", {
              src: "/logo-full.webp",
              alt: t,
              className: (0, r.cn)(
                o,
                h ? "object-center" : "object-left",
                "opacity-100 dark:opacity-0",
              ),
              width: u,
              height: u,
              loading: c,
              fetchPriority: l,
              decoding: "async",
            }),
            (0, i.jsx)("img", {
              src: "/logo_darkmode.webp",
              alt: t,
              className: (0, r.cn)(
                o,
                h ? "object-center" : "object-left",
                "opacity-0 dark:opacity-100",
              ),
              width: u,
              height: u,
              loading: c,
              fetchPriority: l,
              decoding: "async",
            }),
          ],
        });
      }
    },
    5016: (e, t, n) => {
      "use strict";
      n.d(t, { cn: () => a });
      var i = n(2821),
        r = n(5889);
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.QP)((0, i.$)(t));
      }
    },
    5271: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => o });
      var i = n(5155),
        r = n(2115),
        a = n(4083);
      function o() {
        let [e, t] = (0, r.useState)(!0),
          [n, o] = (0, r.useState)(!1),
          [s, c] = (0, r.useState)(!1),
          [l, d] = (0, r.useState)(!1),
          u = (0, r.useRef)(null);
        return ((0, r.useEffect)(() => {
          let e = !1,
            t = Date.now(),
            n = () => {
              e ||
                ((e = !0),
                d(!0),
                setTimeout(() => c(!0), 50),
                setTimeout(() => o(!0), 300));
            },
            i = () => {
              let e = 1300 - (Date.now() - t);
              e > 0 ? setTimeout(n, e) : n();
            };
          "loading" !== document.readyState
            ? i()
            : document.addEventListener("DOMContentLoaded", i, { once: !0 });
          let r = setTimeout(i, 2400);
          return () => {
            (clearTimeout(r),
              document.removeEventListener("DOMContentLoaded", i));
          };
        }, []),
        (0, r.useEffect)(() => {
          if (!n || !u.current) return;
          let e = u.current,
            i = () => t(!1);
          return (
            e.addEventListener("animationend", i, { once: !0 }),
            () => e.removeEventListener("animationend", i)
          );
        }, [n]),
        e)
          ? (0, i.jsx)("div", {
              ref: u,
              className: `fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden transition-opacity duration-300 ${n ? "animate-slide-out-right" : ""}`,
              "aria-hidden": "true",
              children: (0, i.jsx)("div", {
                className: `flex items-center justify-center transition-opacity ${s ? "opacity-0" : "opacity-100"} ${!l ? "animate-gentle-breathe" : ""}`,
                style: {
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                },
                children: (0, i.jsx)(a.A, {
                  alt: "",
                  align: "center",
                  size: "loader",
                  loading: "eager",
                  fetchPriority: "low",
                }),
              }),
            })
          : null;
      }
    },
  },
  (e) => {
    (e.O(0, [741, 347, 441, 255, 358], () => e((e.s = 3920))), (_N_E = e.O()));
  },
]);
