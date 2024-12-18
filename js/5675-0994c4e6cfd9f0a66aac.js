(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5675],
  {
    9917: function (e, t, i) {
      "use strict";
      var n = i(3848),
        o = i(3115);
      t.default = function (e) {
        var t = e.src,
          i = e.sizes,
          o = e.unoptimized,
          s = void 0 !== o && o,
          d = e.priority,
          u = void 0 !== d && d,
          g = e.loading,
          p = e.lazyBoundary,
          b = void 0 === p ? "200px" : p,
          y = e.className,
          v = e.quality,
          w = e.width,
          x = e.height,
          k = e.objectFit,
          j = e.objectPosition,
          O = e.onLoadingComplete,
          E = e.loader,
          _ = void 0 === E ? S : E,
          I = e.placeholder,
          P = void 0 === I ? "empty" : I,
          D = e.blurDataURL,
          L = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              o = (function (e, t) {
                if (null == e) return {};
                var i,
                  n,
                  o = {},
                  r = Object.keys(e);
                for (n = 0; n < r.length; n++)
                  (i = r[n]), t.indexOf(i) >= 0 || (o[i] = e[i]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              for (n = 0; n < r.length; n++)
                (i = r[n]),
                  t.indexOf(i) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, i) &&
                      (o[i] = e[i]));
            }
            return o;
          })(e, [
            "src",
            "sizes",
            "unoptimized",
            "priority",
            "loading",
            "lazyBoundary",
            "className",
            "quality",
            "width",
            "height",
            "objectFit",
            "objectPosition",
            "onLoadingComplete",
            "loader",
            "placeholder",
            "blurDataURL",
          ]),
          R = i ? "responsive" : "intrinsic";
        "layout" in L && (L.layout && (R = L.layout), delete L.layout);
        var q = "";
        if (
          (function (e) {
            return (
              "object" === typeof e &&
              (h(e) ||
                (function (e) {
                  return void 0 !== e.src;
                })(e))
            );
          })(t)
        ) {
          var N = h(t) ? t.default : t;
          if (!N.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                JSON.stringify(N)
              )
            );
          if (
            ((D = D || N.blurDataURL),
            (q = N.src),
            (!R || "fill" !== R) &&
              ((x = x || N.height), (w = w || N.width), !N.height || !N.width))
          )
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                JSON.stringify(N)
              )
            );
        }
        t = "string" === typeof t ? t : q;
        var W = z(w),
          C = z(x),
          B = z(v),
          M = !u && ("lazy" === g || "undefined" === typeof g);
        (t.startsWith("data:") || t.startsWith("blob:")) &&
          ((s = !0), (M = !1));
        m.has(t) && (M = !1);
        0;
        var U,
          H,
          F,
          T = l.useIntersection({ rootMargin: b, disabled: !M }),
          V = n(T, 2),
          J = V[0],
          G = V[1],
          Q = !M || G,
          K = {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: k,
            objectPosition: j,
          },
          X =
            "blur" === P
              ? {
                  filter: "blur(20px)",
                  backgroundSize: k || "cover",
                  backgroundImage: 'url("'.concat(D, '")'),
                  backgroundPosition: j || "0% 0%",
                }
              : {};
        if ("fill" === R)
          U = {
            display: "block",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            margin: 0,
          };
        else if ("undefined" !== typeof W && "undefined" !== typeof C) {
          var Y = C / W,
            Z = isNaN(Y) ? "100%" : "".concat(100 * Y, "%");
          "responsive" === R
            ? ((U = {
                display: "block",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: 0,
              }),
              (H = {
                display: "block",
                boxSizing: "border-box",
                paddingTop: Z,
              }))
            : "intrinsic" === R
            ? ((U = {
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: 0,
              }),
              (H = {
                boxSizing: "border-box",
                display: "block",
                maxWidth: "100%",
              }),
              (F = '<svg width="'
                .concat(W, '" height="')
                .concat(
                  C,
                  '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                )))
            : "fixed" === R &&
              (U = {
                overflow: "hidden",
                boxSizing: "border-box",
                display: "inline-block",
                position: "relative",
                width: W,
                height: C,
              });
        } else 0;
        var $ = {
          src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          srcSet: void 0,
          sizes: void 0,
        };
        Q &&
          ($ = A({
            src: t,
            unoptimized: s,
            layout: R,
            width: W,
            quality: B,
            sizes: i,
            loader: _,
          }));
        var ee = t;
        return r.default.createElement(
          "div",
          { style: U },
          H
            ? r.default.createElement(
                "div",
                { style: H },
                F
                  ? r.default.createElement("img", {
                      style: {
                        maxWidth: "100%",
                        display: "block",
                        margin: 0,
                        border: "none",
                        padding: 0,
                      },
                      alt: "",
                      "aria-hidden": !0,
                      src: "data:image/svg+xml;base64,".concat(c.toBase64(F)),
                    })
                  : null
              )
            : null,
          r.default.createElement(
            "img",
            Object.assign({}, L, $, {
              decoding: "async",
              "data-nimg": R,
              className: y,
              ref: function (e) {
                J(e),
                  (function (e, t, i, n, o) {
                    if (!e) return;
                    var r = function () {
                      e.src.startsWith("data:") ||
                        ("decode" in e ? e.decode() : Promise.resolve())
                          .catch(function () {})
                          .then(function () {
                            if (
                              ("blur" === n &&
                                ((e.style.filter = "none"),
                                (e.style.backgroundSize = "none"),
                                (e.style.backgroundImage = "none")),
                              m.add(t),
                              o)
                            ) {
                              var i = e.naturalWidth,
                                r = e.naturalHeight;
                              o({ naturalWidth: i, naturalHeight: r });
                            }
                          });
                    };
                    e.complete ? r() : (e.onload = r);
                  })(e, ee, 0, P, O);
              },
              style: f({}, K, X),
            })
          ),
          r.default.createElement(
            "noscript",
            null,
            r.default.createElement(
              "img",
              Object.assign(
                {},
                L,
                A({
                  src: t,
                  unoptimized: s,
                  layout: R,
                  width: W,
                  quality: B,
                  sizes: i,
                  loader: _,
                }),
                {
                  decoding: "async",
                  "data-nimg": R,
                  style: K,
                  className: y,
                  loading: g || "lazy",
                }
              )
            )
          ),
          u
            ? r.default.createElement(
                a.default,
                null,
                r.default.createElement("link", {
                  key: "__nimg-" + $.src + $.srcSet + $.sizes,
                  rel: "preload",
                  as: "image",
                  href: $.srcSet ? void 0 : $.src,
                  imagesrcset: $.srcSet,
                  imagesizes: $.sizes,
                })
              )
            : null
        );
      };
      var r = u(i(7294)),
        a = u(i(639)),
        c = i(8997),
        s = i(5809),
        l = i(7426);
      function d(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(i).filter(function (e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              d(e, t, i[t]);
            });
        }
        return e;
      }
      var m = new Set();
      var g = new Map([
        [
          "default",
          function (e) {
            var t = e.root,
              i = e.src,
              n = e.width,
              o = e.quality;
            0;
            return ""
              .concat(t, "?url=")
              .concat(encodeURIComponent(i), "&w=")
              .concat(n, "&q=")
              .concat(o || 75);
          },
        ],
        [
          "imgix",
          function (e) {
            var t = e.root,
              i = e.src,
              n = e.width,
              o = e.quality,
              r = new URL("".concat(t).concat(k(i))),
              a = r.searchParams;
            a.set("auto", a.get("auto") || "format"),
              a.set("fit", a.get("fit") || "max"),
              a.set("w", a.get("w") || n.toString()),
              o && a.set("q", o.toString());
            return r.href;
          },
        ],
        [
          "cloudinary",
          function (e) {
            var t = e.root,
              i = e.src,
              n = e.width,
              o = e.quality,
              r =
                ["f_auto", "c_limit", "w_" + n, "q_" + (o || "auto")].join(
                  ","
                ) + "/";
            return "".concat(t).concat(r).concat(k(i));
          },
        ],
        [
          "akamai",
          function (e) {
            var t = e.root,
              i = e.src,
              n = e.width;
            return "".concat(t).concat(k(i), "?imwidth=").concat(n);
          },
        ],
        [
          "custom",
          function (e) {
            var t = e.src;
            throw new Error(
              'Image with src "'.concat(t, '" is missing "loader" prop.') +
                "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
            );
          },
        ],
      ]);
      function h(e) {
        return void 0 !== e.default;
      }
      var p =
          {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
          } || s.imageConfigDefault,
        b = p.deviceSizes,
        y = p.imageSizes,
        v = p.loader,
        w = p.path,
        x = (p.domains, [].concat(o(b), o(y)));
      function A(e) {
        var t = e.src,
          i = e.unoptimized,
          n = e.layout,
          r = e.width,
          a = e.quality,
          c = e.sizes,
          s = e.loader;
        if (i) return { src: t, srcSet: void 0, sizes: void 0 };
        var l = (function (e, t, i) {
            if (i && ("fill" === t || "responsive" === t)) {
              for (var n, r = /(^|\s)(1?\d?\d)vw/g, a = []; (n = r.exec(i)); n)
                a.push(parseInt(n[2]));
              if (a.length) {
                var c = 0.01 * Math.min.apply(Math, a);
                return {
                  widths: x.filter(function (e) {
                    return e >= b[0] * c;
                  }),
                  kind: "w",
                };
              }
              return { widths: x, kind: "w" };
            }
            return "number" !== typeof e || "fill" === t || "responsive" === t
              ? { widths: b, kind: "w" }
              : {
                  widths: o(
                    new Set(
                      [e, 2 * e].map(function (e) {
                        return (
                          x.find(function (t) {
                            return t >= e;
                          }) || x[x.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(r, n, c),
          d = l.widths,
          u = l.kind,
          f = d.length - 1;
        return {
          sizes: c || "w" !== u ? c : "100vw",
          srcSet: d
            .map(function (e, i) {
              return ""
                .concat(s({ src: t, quality: a, width: e }), " ")
                .concat("w" === u ? e : i + 1)
                .concat(u);
            })
            .join(", "),
          src: s({ src: t, quality: a, width: d[f] }),
        };
      }
      function z(e) {
        return "number" === typeof e
          ? e
          : "string" === typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function S(e) {
        var t = g.get(v);
        if (t) return t(f({ root: w }, e));
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(s.VALID_LOADERS.join(", "), ". Received: ")
            .concat(v)
        );
      }
      function k(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
      b.sort(function (e, t) {
        return e - t;
      }),
        x.sort(function (e, t) {
          return e - t;
        });
    },
    8997: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toBase64 = function (e) {
          return window.btoa(e);
        });
    },
    5809: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.imageConfigDefault = t.VALID_LOADERS = void 0);
      t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
      t.imageConfigDefault = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 60,
      };
    },
    5675: function (e, t, i) {
      e.exports = i(9917);
    },
  },
]);
