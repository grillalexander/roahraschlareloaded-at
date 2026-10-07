"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [108],
  {
    1169: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Users", [
        [
          "path",
          { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
        ],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
      ]);
    },
    1725: (e, t, n) => {
      n.d(t, {
        bm: () => td,
        UC: () => tl,
        VY: () => ts,
        hJ: () => tu,
        ZL: () => ti,
        bL: () => to,
        hE: () => tc,
        l9: () => ta,
      });
      var r,
        o,
        a,
        i = n(2115),
        u = n.t(i, 2);
      function l(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function c(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function s(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = c(e, t);
              return (n || "function" != typeof r || (n = !0), r);
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : c(e[t], null);
              }
            };
        };
      }
      function d(...e) {
        return i.useCallback(s(...e), e);
      }
      var f = n(5155),
        p = globalThis?.document ? i.useLayoutEffect : () => {},
        v = u["useId".toString()] || (() => void 0),
        m = 0;
      function h(e) {
        let [t, n] = i.useState(v());
        return (
          p(() => {
            e || n((e) => e ?? String(m++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      function y(e) {
        let t = i.useRef(e);
        return (
          i.useEffect(() => {
            t.current = e;
          }),
          i.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
      var g = n(7650),
        E = i.forwardRef((e, t) => {
          let { children: n, ...r } = e,
            o = i.Children.toArray(n),
            a = o.find(k);
          if (a) {
            let e = a.props.children,
              n = o.map((t) =>
                t !== a
                  ? t
                  : i.Children.count(e) > 1
                    ? i.Children.only(null)
                    : i.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, f.jsx)(b, {
              ...r,
              ref: t,
              children: i.isValidElement(e)
                ? i.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, f.jsx)(b, { ...r, ref: t, children: n });
        });
      E.displayName = "Slot";
      var b = i.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (i.isValidElement(n)) {
          let e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n
              ? e.ref
              : (n =
                    (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                    "isReactWarning" in t &&
                    t.isReactWarning)
                ? e.props.ref
                : e.props.ref || e.ref;
          })(n);
          return i.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  a = t[r];
                /^on[A-Z]/.test(r)
                  ? o && a
                    ? (n[r] = (...e) => {
                        (a(...e), o(...e));
                      })
                    : o && (n[r] = o)
                  : "style" === r
                    ? (n[r] = { ...o, ...a })
                    : "className" === r &&
                      (n[r] = [o, a].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t ? s(t, e) : e,
          });
        }
        return i.Children.count(n) > 1 ? i.Children.only(null) : null;
      });
      b.displayName = "SlotClone";
      var w = ({ children: e }) => (0, f.jsx)(f.Fragment, { children: e });
      function k(e) {
        return i.isValidElement(e) && e.type === w;
      }
      var x = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = i.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? E : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, f.jsx)(a, { ...o, ref: n })
            );
          });
          return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n });
        }, {}),
        A = "dismissableLayer.update",
        C = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        N = i.forwardRef((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              onFocusOutside: c,
              onInteractOutside: s,
              onDismiss: p,
              ...v
            } = e,
            m = i.useContext(C),
            [h, g] = i.useState(null),
            E =
              (null == h ? void 0 : h.ownerDocument) ??
              (null == (n = globalThis) ? void 0 : n.document),
            [, b] = i.useState({}),
            w = d(t, (e) => g(e)),
            k = Array.from(m.layers),
            [N] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = k.indexOf(N),
            S = h ? k.indexOf(h) : -1,
            D = m.layersWithOutsidePointerEventsDisabled.size > 0,
            L = S >= O,
            P = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                      ? void 0
                      : t.document,
                r = y(e),
                o = i.useRef(!1),
                a = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            R("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", a.current),
                            (a.current = t),
                            n.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", a.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    (window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", a.current));
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...m.branches].some((e) => e.contains(t));
              L &&
                !n &&
                (null == u || u(e),
                null == s || s(e),
                e.defaultPrevented || null == p || p());
            }, E),
            j = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                      ? void 0
                      : t.document,
                r = y(e),
                o = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      R(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 },
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...m.branches].some((e) => e.contains(t)) &&
                (null == c || c(e),
                null == s || s(e),
                e.defaultPrevented || null == p || p());
            }, E);
          return (
            !(function (e, t = globalThis?.document) {
              let n = y(e);
              i.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              S === m.layers.size - 1 &&
                (null == a || a(e),
                !e.defaultPrevented && p && (e.preventDefault(), p()));
            }, E),
            i.useEffect(() => {
              if (h)
                return (
                  r &&
                    (0 === m.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = E.body.style.pointerEvents),
                      (E.body.style.pointerEvents = "none")),
                    m.layersWithOutsidePointerEventsDisabled.add(h)),
                  m.layers.add(h),
                  M(),
                  () => {
                    r &&
                      1 === m.layersWithOutsidePointerEventsDisabled.size &&
                      (E.body.style.pointerEvents = o);
                  }
                );
            }, [h, E, r, m]),
            i.useEffect(
              () => () => {
                h &&
                  (m.layers.delete(h),
                  m.layersWithOutsidePointerEventsDisabled.delete(h),
                  M());
              },
              [h, m],
            ),
            i.useEffect(() => {
              let e = () => b({});
              return (
                document.addEventListener(A, e),
                () => document.removeEventListener(A, e)
              );
            }, []),
            (0, f.jsx)(x.div, {
              ...v,
              ref: w,
              style: {
                pointerEvents: D ? (L ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: l(e.onFocusCapture, j.onFocusCapture),
              onBlurCapture: l(e.onBlurCapture, j.onBlurCapture),
              onPointerDownCapture: l(
                e.onPointerDownCapture,
                P.onPointerDownCapture,
              ),
            })
          );
        });
      function M() {
        let e = new CustomEvent(A);
        document.dispatchEvent(e);
      }
      function R(e, t, n, r) {
        let { discrete: o } = r,
          a = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        if ((t && a.addEventListener(e, t, { once: !0 }), o))
          a && g.flushSync(() => a.dispatchEvent(i));
        else a.dispatchEvent(i);
      }
      ((N.displayName = "DismissableLayer"),
        (i.forwardRef((e, t) => {
          let n = i.useContext(C),
            r = i.useRef(null),
            o = d(t, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, f.jsx)(x.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch"));
      var O = "focusScope.autoFocusOnMount",
        S = "focusScope.autoFocusOnUnmount",
        D = { bubbles: !1, cancelable: !0 },
        L = i.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...u
            } = e,
            [l, c] = i.useState(null),
            s = y(o),
            p = y(a),
            v = i.useRef(null),
            m = d(t, (e) => c(e)),
            h = i.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (i.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (h.paused || !l) return;
                  let t = e.target;
                  l.contains(t)
                    ? (v.current = t)
                    : T(v.current, { select: !0 });
                },
                t = function (e) {
                  if (h.paused || !l) return;
                  let t = e.relatedTarget;
                  null !== t && (l.contains(t) || T(v.current, { select: !0 }));
                };
              (document.addEventListener("focusin", e),
                document.addEventListener("focusout", t));
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && T(l);
              });
              return (
                l && n.observe(l, { childList: !0, subtree: !0 }),
                () => {
                  (document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect());
                }
              );
            }
          }, [r, l, h.paused]),
            i.useEffect(() => {
              if (l) {
                I.add(h);
                let e = document.activeElement;
                if (!l.contains(e)) {
                  let t = new CustomEvent(O, D);
                  (l.addEventListener(O, s),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (T(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        P(l).filter((e) => "A" !== e.tagName),
                        { select: !0 },
                      ),
                      document.activeElement === e && T(l)));
                }
                return () => {
                  (l.removeEventListener(O, s),
                    setTimeout(() => {
                      let t = new CustomEvent(S, D);
                      (l.addEventListener(S, p),
                        l.dispatchEvent(t),
                        t.defaultPrevented ||
                          T(e ?? document.body, { select: !0 }),
                        l.removeEventListener(S, p),
                        I.remove(h));
                    }, 0));
                };
              }
            }, [l, s, p, h]));
          let g = i.useCallback(
            (e) => {
              if ((!n && !r) || h.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, a] = (function (e) {
                    let t = P(e);
                    return [j(t, e), j(t.reverse(), e)];
                  })(t);
                r && a
                  ? e.shiftKey || o !== a
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && T(a, { select: !0 }))
                    : (e.preventDefault(), n && T(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, h.paused],
          );
          return (0, f.jsx)(x.div, {
            tabIndex: -1,
            ...u,
            ref: m,
            onKeyDown: g,
          });
        });
      function P(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function j(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function T(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          (e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select());
        }
      }
      L.displayName = "FocusScope";
      var I = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            (t !== n && (null == n || n.pause()), (e = F(e, t)).unshift(t));
          },
          remove(t) {
            var n;
            null == (n = (e = F(e, t))[0]) || n.resume();
          },
        };
      })();
      function F(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return (-1 !== r && n.splice(r, 1), n);
      }
      var W = i.forwardRef((e, t) => {
        var n, r;
        let { container: o, ...a } = e,
          [u, l] = i.useState(!1);
        p(() => l(!0), []);
        let c =
          o ||
          (u &&
            (null == (r = globalThis) || null == (n = r.document)
              ? void 0
              : n.body));
        return c
          ? g.createPortal((0, f.jsx)(x.div, { ...a, ref: t }), c)
          : null;
      });
      W.displayName = "Portal";
      var _ = (e) => {
        let { present: t, children: n } = e,
          r = (function (e) {
            var t, n;
            let [r, o] = i.useState(),
              a = i.useRef({}),
              u = i.useRef(e),
              l = i.useRef("none"),
              [c, s] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                i.useReducer((e, t) => n[e][t] ?? e, t));
            return (
              i.useEffect(() => {
                let e = B(a.current);
                l.current = "mounted" === c ? e : "none";
              }, [c]),
              p(() => {
                let t = a.current,
                  n = u.current;
                if (n !== e) {
                  let r = l.current,
                    o = B(t);
                  (e
                    ? s("MOUNT")
                    : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? s("UNMOUNT")
                      : n && r !== o
                        ? s("ANIMATION_OUT")
                        : s("UNMOUNT"),
                    (u.current = e));
                }
              }, [e, s]),
              p(() => {
                if (r) {
                  let e,
                    t = r.ownerDocument.defaultView ?? window,
                    n = (n) => {
                      let o = B(a.current).includes(n.animationName);
                      if (
                        n.target === r &&
                        o &&
                        (s("ANIMATION_END"), !u.current)
                      ) {
                        let n = r.style.animationFillMode;
                        ((r.style.animationFillMode = "forwards"),
                          (e = t.setTimeout(() => {
                            "forwards" === r.style.animationFillMode &&
                              (r.style.animationFillMode = n);
                          })));
                      }
                    },
                    o = (e) => {
                      e.target === r && (l.current = B(a.current));
                    };
                  return (
                    r.addEventListener("animationstart", o),
                    r.addEventListener("animationcancel", n),
                    r.addEventListener("animationend", n),
                    () => {
                      (t.clearTimeout(e),
                        r.removeEventListener("animationstart", o),
                        r.removeEventListener("animationcancel", n),
                        r.removeEventListener("animationend", n));
                    }
                  );
                }
                s("ANIMATION_END");
              }, [r, s]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(c),
                ref: i.useCallback((e) => {
                  (e && (a.current = getComputedStyle(e)), o(e));
                }, []),
              }
            );
          })(t),
          o =
            "function" == typeof n
              ? n({ present: r.isPresent })
              : i.Children.only(n),
          a = d(
            r.ref,
            (function (e) {
              var t, n;
              let r =
                  null == (t = Object.getOwnPropertyDescriptor(e.props, "ref"))
                    ? void 0
                    : t.get,
                o = r && "isReactWarning" in r && r.isReactWarning;
              return o
                ? e.ref
                : (o =
                      (r =
                        null == (n = Object.getOwnPropertyDescriptor(e, "ref"))
                          ? void 0
                          : n.get) &&
                      "isReactWarning" in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
            })(o),
          );
        return "function" == typeof n || r.isPresent
          ? i.cloneElement(o, { ref: a })
          : null;
      };
      function B(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      _.displayName = "Presence";
      var U = 0;
      function $() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var z = function () {
        return (z =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function q(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create;
      Object.create;
      var K =
          ("function" == typeof SuppressedError && SuppressedError,
          "right-scroll-bar-position"),
        V = "width-before-scroll-bar";
      function Z(e, t) {
        return ("function" == typeof e ? e(t) : e && (e.current = t), e);
      }
      var H = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        X = new WeakMap();
      function Y(e) {
        return e;
      }
      var G = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o =
              (void 0 === t && (t = Y),
              (n = []),
              (r = !1),
              {
                read: function () {
                  if (r)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var o = t(e, r);
                  return (
                    n.push(o),
                    function () {
                      n = n.filter(function (e) {
                        return e !== o;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    ((n = []), t.forEach(e));
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    ((n = []), o.forEach(e), (t = n));
                  }
                  var a = function () {
                      var n = t;
                      ((t = []), n.forEach(e));
                    },
                    i = function () {
                      return Promise.resolve().then(a);
                    };
                  (i(),
                    (n = {
                      push: function (e) {
                        (t.push(e), i());
                      },
                      filter: function (e) {
                        return ((t = t.filter(e)), n);
                      },
                    }));
                },
              });
          return ((o.options = z({ async: !0, ssr: !1 }, e)), o);
        })(),
        J = function () {},
        Q = i.forwardRef(function (e, t) {
          var n,
            r,
            o,
            a,
            u = i.useRef(null),
            l = i.useState({
              onScrollCapture: J,
              onWheelCapture: J,
              onTouchMoveCapture: J,
            }),
            c = l[0],
            s = l[1],
            d = e.forwardProps,
            f = e.children,
            p = e.className,
            v = e.removeScrollBar,
            m = e.enabled,
            h = e.shards,
            y = e.sideCar,
            g = e.noRelative,
            E = e.noIsolation,
            b = e.inert,
            w = e.allowPinchZoom,
            k = e.as,
            x = e.gapMode,
            A = q(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            C =
              ((n = [u, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return Z(t, e);
                });
              }),
              ((o = (0, i.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (a = o.facade),
              H(
                function () {
                  var e = X.get(a);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = a.current;
                    (t.forEach(function (e) {
                      r.has(e) || Z(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || Z(e, o);
                      }));
                  }
                  X.set(a, n);
                },
                [n],
              ),
              a),
            N = z(z({}, A), c);
          return i.createElement(
            i.Fragment,
            null,
            m &&
              i.createElement(y, {
                sideCar: G,
                removeScrollBar: v,
                shards: h,
                noRelative: g,
                noIsolation: E,
                inert: b,
                setCallbacks: s,
                allowPinchZoom: !!w,
                lockRef: u,
                gapMode: x,
              }),
            d
              ? i.cloneElement(i.Children.only(f), z(z({}, N), { ref: C }))
              : i.createElement(
                  void 0 === k ? "div" : k,
                  z({}, N, { className: p, ref: C }),
                  f,
                ),
          );
        });
      ((Q.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (Q.classNames = { fullWidth: V, zeroRight: K }));
      var ee = function (e) {
        var t = e.sideCar,
          n = q(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car",
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return i.createElement(r, z({}, n));
      };
      ee.isSideCarExport = !0;
      var et = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = a || n.nc;
                  return (t && e.setAttribute("nonce", t), e);
                })())
              ) {
                var o, i;
                ((o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i));
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        en = function () {
          var e = et();
          return function (t, n) {
            i.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n],
            );
          };
        },
        er = function () {
          var e = en();
          return function (t) {
            return (e(t.styles, t.dynamic), null);
          };
        },
        eo = { left: 0, top: 0, right: 0, gap: 0 },
        ea = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        ei = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [ea(n), ea(r), ea(o)];
        },
        eu = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return eo;
          var t = ei(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        el = er(),
        ec = "data-scroll-locked",
        es = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(ec, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  .",
              )
              .concat(K, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(V, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(K, " .")
              .concat(K, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(V, " .")
              .concat(V, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(ec, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        ed = function () {
          var e = parseInt(document.body.getAttribute(ec) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        ef = function () {
          i.useEffect(function () {
            return (
              document.body.setAttribute(ec, (ed() + 1).toString()),
              function () {
                var e = ed() - 1;
                e <= 0
                  ? document.body.removeAttribute(ec)
                  : document.body.setAttribute(ec, e.toString());
              }
            );
          }, []);
        },
        ep = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          ef();
          var a = i.useMemo(
            function () {
              return eu(o);
            },
            [o],
          );
          return i.createElement(el, {
            styles: es(a, !t, o, n ? "" : "!important"),
          });
        },
        ev = !1;
      if ("undefined" != typeof window)
        try {
          var em = Object.defineProperty({}, "passive", {
            get: function () {
              return ((ev = !0), !0);
            },
          });
          (window.addEventListener("test", em, em),
            window.removeEventListener("test", em, em));
        } catch (e) {
          ev = !1;
        }
      var eh = !!ev && { passive: !1 },
        ey = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        eg = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              eE(e, r))
            ) {
              var o = eb(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        eE = function (e, t) {
          return "v" === e ? ey(t, "overflowY") : ey(t, "overflowX");
        },
        eb = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ew = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            l = n.target,
            c = t.contains(l),
            s = !1,
            d = u > 0,
            f = 0,
            p = 0;
          do {
            if (!l) break;
            var v = eb(e, l),
              m = v[0],
              h = v[1] - v[2] - i * m;
            (m || h) && eE(e, l) && ((f += h), (p += m));
            var y = l.parentNode;
            l = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
          } while (
            (!c && l !== document.body) ||
            (c && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -u > p)) && (s = !0),
            s
          );
        },
        ek = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        ex = function (e) {
          return [e.deltaX, e.deltaY];
        },
        eA = function (e) {
          return e && "current" in e ? e.current : e;
        },
        eC = 0,
        eN = [];
      let eM =
        ((r = function (e) {
          var t = i.useRef([]),
            n = i.useRef([0, 0]),
            r = i.useRef(),
            o = i.useState(eC++)[0],
            a = i.useState(er)[0],
            u = i.useRef(e);
          (i.useEffect(
            function () {
              u.current = e;
            },
            [e],
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, a = t.length; o < a; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(eA), !0).filter(
                    Boolean,
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      (document.body.classList.remove(
                        "block-interactivity-".concat(o),
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o),
                          );
                        }));
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards],
            ));
          var l = i.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !u.current.allowPinchZoom;
              var o,
                a = ek(e),
                i = n.current,
                l = "deltaX" in e ? e.deltaX : i[0] - a[0],
                c = "deltaY" in e ? e.deltaY : i[1] - a[1],
                s = e.target,
                d = Math.abs(l) > Math.abs(c) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = window.getSelection(),
                p = f && f.anchorNode;
              if (p && (p === s || p.contains(s))) return !1;
              var v = eg(d, s);
              if (!v) return !0;
              if (
                (v ? (o = d) : ((o = "v" === d ? "h" : "v"), (v = eg(d, s))),
                !v)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (l || c) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var m = r.current || o;
              return ew(m, t, e, "h" === m ? l : c, !0);
            }, []),
            c = i.useCallback(function (e) {
              if (eN.length && eN[eN.length - 1] === a) {
                var n = "deltaY" in e ? ex(e) : ek(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (u.current.shards || [])
                    .map(eA)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !u.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = i.useCallback(function (e, n, r, o) {
              var a = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode));
                  return t;
                })(r),
              };
              (t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1));
            }, []),
            d = i.useCallback(function (e) {
              ((n.current = ek(e)), (r.current = void 0));
            }, []),
            f = i.useCallback(function (t) {
              s(t.type, ex(t), t.target, l(t, e.lockRef.current));
            }, []),
            p = i.useCallback(function (t) {
              s(t.type, ek(t), t.target, l(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              eN.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", c, eh),
              document.addEventListener("touchmove", c, eh),
              document.addEventListener("touchstart", d, eh),
              function () {
                ((eN = eN.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", c, eh),
                  document.removeEventListener("touchmove", c, eh),
                  document.removeEventListener("touchstart", d, eh));
              }
            );
          }, []);
          var v = e.removeScrollBar,
            m = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            m
              ? i.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-",
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            v
              ? i.createElement(ep, {
                  noRelative: e.noRelative,
                  gapMode: e.gapMode,
                })
              : null,
          );
        }),
        G.useMedium(r),
        ee);
      var eR = i.forwardRef(function (e, t) {
        return i.createElement(Q, z({}, e, { ref: t, sideCar: eM }));
      });
      eR.classNames = Q.classNames;
      var eO = new WeakMap(),
        eS = new WeakMap(),
        eD = {},
        eL = 0,
        eP = function (e) {
          return e && (e.host || eP(e.parentNode));
        },
        ej = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = eP(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing",
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          eD[n] || (eD[n] = new WeakMap());
          var a = eD[n],
            i = [],
            u = new Set(),
            l = new Set(o),
            c = function (e) {
              !e || u.has(e) || (u.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !e ||
              l.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (u.has(e)) s(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      l = (eO.get(e) || 0) + 1,
                      c = (a.get(e) || 0) + 1;
                    (eO.set(e, l),
                      a.set(e, c),
                      i.push(e),
                      1 === l && o && eS.set(e, !0),
                      1 === c && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true"));
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            s(t),
            u.clear(),
            eL++,
            function () {
              (i.forEach(function (e) {
                var t = eO.get(e) - 1,
                  o = a.get(e) - 1;
                (eO.set(e, t),
                  a.set(e, o),
                  t || (eS.has(e) || e.removeAttribute(r), eS.delete(e)),
                  o || e.removeAttribute(n));
              }),
                --eL ||
                  ((eO = new WeakMap()),
                  (eO = new WeakMap()),
                  (eS = new WeakMap()),
                  (eD = {})));
            }
          );
        },
        eT = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(
                r,
                Array.from(o.querySelectorAll("[aria-live], script")),
              ),
              ej(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        eI = "Dialog",
        [eF, eW] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => i.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return i.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r],
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = i.createContext(r),
                  a = n.length;
                n = [...n, r];
                let u = (t) => {
                  let { scope: n, children: r, ...u } = t,
                    l = n?.[e]?.[a] || o,
                    c = i.useMemo(() => u, Object.values(u));
                  return (0, f.jsx)(l.Provider, { value: c, children: r });
                };
                return (
                  (u.displayName = t + "Provider"),
                  [
                    u,
                    function (n, u) {
                      let l = u?.[e]?.[a] || o,
                        c = i.useContext(l);
                      if (c) return c;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return i.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r],
                    );
                  };
                };
                return ((n.scopeName = t.scopeName), n);
              })(r, ...t),
            ]
          );
        })(eI),
        [e_, eB] = eF(eI),
        eU = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: a,
              modal: u = !0,
            } = e,
            l = i.useRef(null),
            c = i.useRef(null),
            [s = !1, d] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              let [r, o] = (function ({ defaultProp: e, onChange: t }) {
                  let n = i.useState(e),
                    [r] = n,
                    o = i.useRef(r),
                    a = y(t);
                  return (
                    i.useEffect(() => {
                      o.current !== r && (a(r), (o.current = r));
                    }, [r, o, a]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                a = void 0 !== e,
                u = a ? e : r,
                l = y(n);
              return [
                u,
                i.useCallback(
                  (t) => {
                    if (a) {
                      let n = "function" == typeof t ? t(e) : t;
                      n !== e && l(n);
                    } else o(t);
                  },
                  [a, e, o, l],
                ),
              ];
            })({ prop: r, defaultProp: o, onChange: a });
          return (0, f.jsx)(e_, {
            scope: t,
            triggerRef: l,
            contentRef: c,
            contentId: h(),
            titleId: h(),
            descriptionId: h(),
            open: s,
            onOpenChange: d,
            onOpenToggle: i.useCallback(() => d((e) => !e), [d]),
            modal: u,
            children: n,
          });
        };
      eU.displayName = eI;
      var e$ = "DialogTrigger",
        ez = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eB(e$, n),
            a = d(t, o.triggerRef);
          return (0, f.jsx)(x.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": e9(o.open),
            ...r,
            ref: a,
            onClick: l(e.onClick, o.onOpenToggle),
          });
        });
      ez.displayName = e$;
      var eq = "DialogPortal",
        [eK, eV] = eF(eq, { forceMount: void 0 }),
        eZ = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            a = eB(eq, t);
          return (0, f.jsx)(eK, {
            scope: t,
            forceMount: n,
            children: i.Children.map(r, (e) =>
              (0, f.jsx)(_, {
                present: n || a.open,
                children: (0, f.jsx)(W, {
                  asChild: !0,
                  container: o,
                  children: e,
                }),
              }),
            ),
          });
        };
      eZ.displayName = eq;
      var eH = "DialogOverlay",
        eX = i.forwardRef((e, t) => {
          let n = eV(eH, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = eB(eH, e.__scopeDialog);
          return a.modal
            ? (0, f.jsx)(_, {
                present: r || a.open,
                children: (0, f.jsx)(eY, { ...o, ref: t }),
              })
            : null;
        });
      eX.displayName = eH;
      var eY = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eB(eH, n);
          return (0, f.jsx)(eR, {
            as: E,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, f.jsx)(x.div, {
              "data-state": e9(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        eG = "DialogContent",
        eJ = i.forwardRef((e, t) => {
          let n = eV(eG, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = eB(eG, e.__scopeDialog);
          return (0, f.jsx)(_, {
            present: r || a.open,
            children: a.modal
              ? (0, f.jsx)(eQ, { ...o, ref: t })
              : (0, f.jsx)(e1, { ...o, ref: t }),
          });
        });
      eJ.displayName = eG;
      var eQ = i.forwardRef((e, t) => {
          let n = eB(eG, e.__scopeDialog),
            r = i.useRef(null),
            o = d(t, n.contentRef, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e) return eT(e);
            }, []),
            (0, f.jsx)(e0, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: l(e.onCloseAutoFocus, (e) => {
                var t;
                (e.preventDefault(),
                  null == (t = n.triggerRef.current) || t.focus());
              }),
              onPointerDownOutside: l(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: l(e.onFocusOutside, (e) => e.preventDefault()),
            })
          );
        }),
        e1 = i.forwardRef((e, t) => {
          let n = eB(eG, e.__scopeDialog),
            r = i.useRef(!1),
            o = i.useRef(!1);
          return (0, f.jsx)(e0, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var a, i;
              (null == (a = e.onCloseAutoFocus) || a.call(e, t),
                t.defaultPrevented ||
                  (r.current || null == (i = n.triggerRef.current) || i.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1));
            },
            onInteractOutside: (t) => {
              var a, i;
              (null == (a = e.onInteractOutside) || a.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (o.current = !0)));
              let u = t.target;
              ((null == (i = n.triggerRef.current) ? void 0 : i.contains(u)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault());
            },
          });
        }),
        e0 = i.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: a,
              ...u
            } = e,
            l = eB(eG, n),
            c = i.useRef(null),
            s = d(t, c);
          return (
            i.useEffect(() => {
              let e = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement("afterbegin", e[0] ?? $()),
                document.body.insertAdjacentElement("beforeend", e[1] ?? $()),
                U++,
                () => {
                  (1 === U &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    U--);
                }
              );
            }, []),
            (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(L, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: a,
                  children: (0, f.jsx)(N, {
                    role: "dialog",
                    id: l.contentId,
                    "aria-describedby": l.descriptionId,
                    "aria-labelledby": l.titleId,
                    "data-state": e9(l.open),
                    ...u,
                    ref: s,
                    onDismiss: () => l.onOpenChange(!1),
                  }),
                }),
                (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)(tn, { titleId: l.titleId }),
                    (0, f.jsx)(tr, {
                      contentRef: c,
                      descriptionId: l.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        e2 = "DialogTitle",
        e4 = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eB(e2, n);
          return (0, f.jsx)(x.h2, { id: o.titleId, ...r, ref: t });
        });
      e4.displayName = e2;
      var e7 = "DialogDescription",
        e8 = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eB(e7, n);
          return (0, f.jsx)(x.p, { id: o.descriptionId, ...r, ref: t });
        });
      e8.displayName = e7;
      var e5 = "DialogClose",
        e3 = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eB(e5, n);
          return (0, f.jsx)(x.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: l(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function e9(e) {
        return e ? "open" : "closed";
      }
      e3.displayName = e5;
      var e6 = "DialogTitleWarning",
        [te, tt] = (function (e, t) {
          let n = i.createContext(t),
            r = (e) => {
              let { children: t, ...r } = e,
                o = i.useMemo(() => r, Object.values(r));
              return (0, f.jsx)(n.Provider, { value: o, children: t });
            };
          return (
            (r.displayName = e + "Provider"),
            [
              r,
              function (r) {
                let o = i.useContext(n);
                if (o) return o;
                if (void 0 !== t) return t;
                throw Error(`\`${r}\` must be used within \`${e}\``);
              },
            ]
          );
        })(e6, { contentName: eG, titleName: e2, docsSlug: "dialog" }),
        tn = (e) => {
          let { titleId: t } = e,
            n = tt(e6),
            r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
          return (
            i.useEffect(() => {
              t && (document.getElementById(t) || console.error(r));
            }, [r, t]),
            null
          );
        },
        tr = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = tt("DialogDescriptionWarning"),
            o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;
          return (
            i.useEffect(() => {
              var e;
              let r =
                null == (e = t.current)
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && (document.getElementById(n) || console.warn(o));
            }, [o, t, n]),
            null
          );
        },
        to = eU,
        ta = ez,
        ti = eZ,
        tu = eX,
        tl = eJ,
        tc = e4,
        ts = e8,
        td = e3;
    },
    1847: (e, t, n) => {
      n.d(t, { A: () => u });
      var r = n(2115);
      let o = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
          .join(" ")
          .trim();
      };
      var a = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let i = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: i = 24,
            strokeWidth: u = 2,
            absoluteStrokeWidth: l,
            className: c = "",
            children: s,
            iconNode: d,
            ...f
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...a,
              width: i,
              height: i,
              stroke: n,
              strokeWidth: l ? (24 * Number(u)) / Number(i) : u,
              className: o("lucide", c),
              ...f,
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(s) ? s : [s]),
            ],
          );
        }),
        u = (e, t) => {
          let n = (0, r.forwardRef)((n, a) => {
            let { className: u, ...l } = n;
            return (0, r.createElement)(i, {
              ref: a,
              iconNode: t,
              className: o(
                `lucide-${e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`,
                u,
              ),
              ...l,
            });
          });
          return ((n.displayName = `${e}`), n);
        };
    },
    1873: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("MapPin", [
        [
          "path",
          {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
          },
        ],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ]);
    },
    2987: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    3155: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Facebook", [
        [
          "path",
          {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            key: "1jg4f8",
          },
        ],
      ]);
    },
    3457: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Heart", [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky",
          },
        ],
      ]);
    },
    3586: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Music", [
        ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
      ]);
    },
    3664: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Mail", [
        [
          "rect",
          { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
        ],
        [
          "path",
          { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
        ],
      ]);
    },
    5229: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    5880: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("ExternalLink", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
    6485: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Calendar", [
        ["path", { d: "M8 2v4", key: "1cmpym" }],
        ["path", { d: "M16 2v4", key: "4m81vk" }],
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
        ],
        ["path", { d: "M3 10h18", key: "8toen8" }],
      ]);
    },
    7161: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Instagram", [
        [
          "rect",
          {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw",
          },
        ],
        [
          "path",
          {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1",
          },
        ],
        [
          "line",
          { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" },
        ],
      ]);
    },
    7174: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Disc3", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
        ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
        ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }],
      ]);
    },
    7494: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    9141: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Phone", [
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
          },
        ],
      ]);
    },
    9427: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    },
    9540: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(1847).A)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
  },
]);
