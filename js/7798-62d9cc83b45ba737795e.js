(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7798],
  {
    7993: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return d;
        },
      });
      var t = a(2809),
        n = a(6627),
        r = a.n(n),
        i = a(7294),
        o = a(5893);
      function l(e, s) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function c(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? l(Object(a), !0).forEach(function (s) {
                (0, t.Z)(e, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return e;
      }
      function d(e) {
        var s = (0, i.useState)(!1),
          a = s[0],
          t = s[1];
        return (
          (0, i.useEffect)(function () {
            t(!0);
          }, []),
          a
            ? (0, o.jsx)(o.Fragment, {
                children: (0, o.jsx)(r(), c({ mask: "99999-999" }, e)),
              })
            : null
        );
      }
    },
    9127: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return i;
        },
      });
      var t = a(5675),
        n = a(1664),
        r = a(5893);
      function i(e) {
        var s = e.compra;
        s.numeros.filter(function (e) {
          return e.ganhou;
        }).length;
        return (0, r.jsx)(n.default, {
          href: "/compra/".concat(s.token),
          children: (0, r.jsx)("div", {
            className: [
              "card app-card mb-2 pointer",
              "border-bottom border-2 border-" + s.status.class,
            ].join(" "),
            children: (0, r.jsx)("div", {
              className: "card-body",
              children: (0, r.jsxs)("div", {
                className: "row align-items-center row-gutter-sm",
                children: [
                  (0, r.jsx)("div", {
                    className: "col-auto",
                    children: (0, r.jsx)("div", {
                      className:
                        "position-relative rounded-pill overflow-hidden box-shadow-08",
                      style: { width: 56, height: 56 },
                      children: (0, r.jsx)(t.default, {
                        unoptimized: !0,
                        src: s.rifa.img,
                        layout: "fill",
                        alt: s.rifa.title,
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "col ps-2",
                    children: [
                      (0, r.jsx)("small", {
                        className: "compra-data font-xss opacity-50",
                        children: s.data,
                      }),
                      (0, r.jsx)("div", {
                        className: "compra-title font-weight-500",
                        children: s.rifa.title,
                      }),
                      (0, r.jsx)("small", {
                        className: ["font-xss opacity-75 text-uppercase"],
                        children: s.status.title,
                      }),
                      (0, r.jsx)("div", {
                        className: "compra-cotas font-xs",
                        children: s.numeros.map(function (e) {
                          return (0,
                          r.jsx)("span", { className: "badge bg-".concat(s.status.class, " me-1"), children: e.cota }, e.cota);
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "col-auto",
                    children: (0, r.jsx)("i", {
                      className: "bi bi-chevron-right opacity-50",
                    }),
                  }),
                  s.status.podePagar &&
                    (0, r.jsx)("div", {
                      className: "col-12 pt-2",
                      children: (0, r.jsxs)("span", {
                        className:
                          "btn btn-warning btn-sm p-1 px-2 w-100 font-xss",
                        children: [
                          "Efetuar pagamento ",
                          (0, r.jsx)("i", { className: "bi bi-chevron-right" }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      }
    },
    3794: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return d;
        },
      });
      var t = a(2809),
        n = a(6627),
        r = a.n(n),
        i = a(7294),
        o = a(5893);
      function l(e, s) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function c(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? l(Object(a), !0).forEach(function (s) {
                (0, t.Z)(e, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return e;
      }
      function d(e) {
        var s = (0, i.useState)(!1),
          a = s[0],
          t = s[1];
        return (
          (0, i.useEffect)(function () {
            t(!0);
          }, []),
          a
            ? (0, o.jsx)(o.Fragment, {
                children: (0, o.jsx)(r(), c({ mask: "999.999.999-99" }, e)),
              })
            : null
        );
      }
    },
    5853: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return d;
        },
      });
      var t = a(2809),
        n = a(6627),
        r = a.n(n),
        i = a(7294),
        o = a(5893);
      function l(e, s) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function c(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? l(Object(a), !0).forEach(function (s) {
                (0, t.Z)(e, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return e;
      }
      function d(e) {
        var s = (0, i.useState)(!1),
          a = s[0],
          t = s[1];
        return (
          (0, i.useEffect)(function () {
            t(!0);
          }, []),
          a
            ? (0, o.jsx)(o.Fragment, {
                children: (0, o.jsx)(
                  r(),
                  c(
                    { mask: "99/99/9999", pattern: "\\d{1,2}/\\d{1,2}/\\d{4}" },
                    e
                  )
                ),
              })
            : null
        );
      }
    },
    8476: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return m;
        },
      });
      var t = a(4313),
        n = a.n(t),
        r = a(5675),
        i = a(1163),
        o = a(1664),
        l = a(7294),
        c = a(8054),
        d = a(5893);
      function m(e) {
        var s = e.sorteio,
          a = e.destaque,
          t = e.click,
          m = e.versao,
          u = (0, l.useState)(!0),
          p = u[0],
          h = u[1];
        (0, l.useEffect)(function () {
          setTimeout(function () {
            return h(!1);
          }, 1e3);
        }, []);
        var x = (0, i.useRouter)(),
          f = s.status.acabou ? "bg-dark" : "bg-success blink bg-opacity-75",
          b = (0, c.p6)(s.dts, "dd/mm");
        function v() {
          var e = document.getElementById("carouselSorteio" + s.token);
          if (e) return bootstrap.Carousel.getOrCreateInstance(e);
        }
        return (0, d.jsxs)("div", {
          className: [
            n().sorteioTpl,
            a ? n().destaque : null,
            p ? "app-shimmer" : null,
            "pointer",
            n()[m || "v1"],
          ].join(" "),
          onClick: function () {
            !1 !== t && x.push(s.urlApp, void 0, { shallow: !0 });
          },
          children: [
            s.status.concluido &&
              b &&
              (0, d.jsxs)("div", {
                className: n().dtSorteio,
                children: [
                  (0, d.jsx)("i", { className: "bi bi-calendar2-check" }),
                  " ",
                  b,
                ],
              }),
            (0, d.jsxs)("div", {
              className: [
                n().imagemContainer,
                "col-auto",
                p ? "shimmer-img" : null,
              ].join(" "),
              children: [
                a &&
                  (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsxs)("div", {
                      id: "carouselSorteio" + s.token,
                      className: "carousel slide carousel-dark carousel-fade",
                      "data-bs-ride": "carousel",
                      children: [
                        (0, d.jsxs)("div", {
                          className: "carousel-inner",
                          children: [
                            !m &&
                              (0, d.jsxs)("div", {
                                className: [
                                  n().avisos,
                                  n().infosFlutuante,
                                ].join(" "),
                                children: [
                                  (0, d.jsx)("div", {
                                    className: "d-inline badge ".concat(
                                      f,
                                      " font-xsss me-2"
                                    ),
                                    children: s.status.mensagem,
                                  }),
                                  s.codigo_operacao &&
                                    (0, d.jsxs)("div", {
                                      className: "badge bg-dark bg-opacity-50",
                                      children: [
                                        "Sorteio ",
                                        (0, d.jsx)("b", {
                                          children: s.codigo_operacao,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            s.galeria
                              ? s.galeria.map(function (e, a) {
                                  return (0,
                                  d.jsx)("div", { className: ["carousel-item", a ? null : "active"].join(" "), style: { width: "100%", height: m ? "310px" : "290px" }, children: (0, d.jsx)(r.default, { unoptimized: !0, src: e, alt: s.title, layout: "fill", className: [n().imagem] }) }, "galeria-".concat(a));
                                })
                              : (0, d.jsx)("div", {
                                  className: "carousel-item active",
                                  style: { width: "100%", height: 290 },
                                  children: (0, d.jsx)(r.default, {
                                    unoptimized: !0,
                                    src: s.img,
                                    alt: s.title,
                                    layout: "fill",
                                    className: [n().imagem],
                                  }),
                                }),
                          ],
                        }),
                        s.galeria &&
                          s.galeria.length > 1 &&
                          (0, d.jsxs)(d.Fragment, {
                            children: [
                              (0, d.jsxs)("button", {
                                className: "carousel-control-prev",
                                type: "button",
                                "data-bs-target": "carouselSorteio" + s.token,
                                "data-bs-slide": "prev",
                                onClick: function () {
                                  var e;
                                  return null === (e = v()) || void 0 === e
                                    ? void 0
                                    : e.prev();
                                },
                                children: [
                                  (0, d.jsx)("span", {
                                    className: "carousel-control-prev-icon",
                                    "aria-hidden": "true",
                                  }),
                                  (0, d.jsx)("span", {
                                    className: "visually-hidden",
                                    children: "Previous",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("button", {
                                className: "carousel-control-next",
                                type: "button",
                                "data-bs-target": "carouselSorteio" + s.token,
                                "data-bs-slide": "next",
                                onClick: function () {
                                  var e;
                                  return null === (e = v()) || void 0 === e
                                    ? void 0
                                    : e.next();
                                },
                                children: [
                                  (0, d.jsx)("span", {
                                    className: "carousel-control-next-icon",
                                    "aria-hidden": "true",
                                  }),
                                  (0, d.jsx)("span", {
                                    className: "visually-hidden",
                                    children: "Next",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                !a &&
                  (0, d.jsx)(r.default, {
                    unoptimized: !0,
                    src: s.img,
                    alt: s.title,
                    layout: "fill",
                    className: n().imagem,
                  }),
              ],
            }),
            (0, d.jsx)("div", {
              className: n().info,
              children: (0, d.jsxs)("div", {
                className: m ? "container" : "v1",
                children: [
                  "v2" == m &&
                    a &&
                    (0, d.jsxs)("div", {
                      className: [n().avisos].join(" "),
                      children: [
                        (0, d.jsx)("div", {
                          className: "d-inline badge ".concat(
                            f,
                            " font-xsss me-2"
                          ),
                          children: s.status.mensagem,
                        }),
                        s.codigo_operacao &&
                          (0, d.jsxs)("div", {
                            className: "badge bg-dark",
                            children: [
                              "Sorteio ",
                              (0, d.jsx)("b", { children: s.codigo_operacao }),
                            ],
                          }),
                      ],
                    }),
                  (0, d.jsx)("h1", {
                    className: [n().title],
                    children: (0, d.jsx)(o.default, {
                      href: s.urlApp,
                      children: (0, d.jsx)("a", { children: s.title }),
                    }),
                  }),
                  (0, d.jsx)("div", {
                    className: "mb-1",
                    children: (0, d.jsx)("p", {
                      className: n().descricao,
                      style: { marginBottom: "1px" },
                      children: s.descricao,
                    }),
                  }),
                  "v2" != m &&
                    !a &&
                    (0, d.jsxs)("div", {
                      className: n().avisos,
                      children: [
                        (0, d.jsx)("div", {
                          className: "d-inline badge ".concat(
                            f,
                            " font-xsss me-2"
                          ),
                          children: s.status.mensagem,
                        }),
                        s.codigo_operacao &&
                          (0, d.jsxs)("div", {
                            className: "font-xsss mt-2",
                            children: [
                              "Sorteio ",
                              (0, d.jsx)("b", { children: s.codigo_operacao }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
            }),
          ],
        });
      }
    },
    7798: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          __N_SSG: function () {
            return le;
          },
          default: function () {
            return ce;
          },
        });
      var t = a(2809),
        n = a(3789),
        r = a(266),
        i = a(809),
        o = a.n(i),
        l = a(7294),
        c = a(6372),
        d = a(6715),
        m = a(8438),
        u = a(8054),
        p = a(7109),
        h = a(9091),
        x = a.n(h),
        f = a(7561),
        b = a.n(f),
        v = a(5893);
      function j(e) {
        var s = e.numero,
          a = e.disabled,
          t = e.digitos,
          n = (0, c.v9)(function (e) {
            return e.carrinho;
          }),
          r = (0, c.I0)();
        return (0, v.jsx)("div", {
          "data-nome": s.nome,
          className: [
            b().NumeroTpl,
            {
              3:
                -1 !==
                n.numeros.findIndex(function (e) {
                  return e.numero === s.numero;
                })
                  ? b().NumeroTplSelected
                  : "bg-cota",
              0: "bg-info",
              1: "bg-success",
            }[s.status],
          ].join(" "),
          onClick: function () {
            if (!a)
              try {
                (0, u.Ko)("AddToCart"), r((0, m.yF)(s));
              } catch (e) {
                alert(e.message);
              }
          },
          children: (0, p.mO)(s.numero, t || 4),
        });
      }
      var g = a(4116),
        N = a(1163),
        w = a(7897),
        y = a(5675);
      function k(e) {
        var s = e.user;
        return (0, v.jsx)("div", {
          className: "card app-card",
          children: (0, v.jsx)("div", {
            className: "card-body",
            children: (0, v.jsxs)("div", {
              className: "row align-items-center",
              children: [
                (0, v.jsx)("div", {
                  className: "col-auto",
                  children: (0, v.jsx)("div", {
                    className: "rounded-pill p-1 bg-white box-shadow-08",
                    style: {
                      width: 56,
                      height: 56,
                      position: "relative",
                      overflow: "hidden",
                    },
                    children: (0, v.jsx)(y.default, {
                      unoptimized: !0,
                      src: s.foto,
                      layout: "fill",
                    }),
                  }),
                }),
                (0, v.jsxs)("div", {
                  className: "col",
                  children: [
                    (0, v.jsx)("h5", {
                      className: "mb-1",
                      children: s.nomeSocial || s.nome,
                    }),
                    (0, v.jsx)("div", {
                      className: "text-muted",
                      children: (0, v.jsx)("small", { children: s.telefone }),
                    }),
                  ],
                }),
                (0, v.jsx)("div", {
                  className: "col-auto",
                  children: (0, v.jsx)("i", {
                    className: "bi bi-chevron-compact-right",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var _ = a(5467),
        C = a(1664),
        S = a(3794),
        F = a(4865),
        A = a.n(F),
        O = a(7993),
        E = a(4699),
        T = a(5853),
        D = a(8517),
        P = a.n(D);
      function q(e) {
        var s = e.isSelected,
          a = e.grupo,
          t = e.addClass,
          n = e.disableNome;
        return (0, v.jsxs)("div", {
          className: "sorteio-grupo--item "
            .concat(t || "", " status-")
            .concat(a.status, " pointer selected-")
            .concat(s ? "true" : "false"),
          "data-bs-toggle": "tooltip",
          title: a.cliente,
          children: [
            (0, v.jsxs)("div", {
              className: "p-2",
              children: [
                (0, v.jsx)("img", {
                  src: "https://"
                    .concat(P().APP_DOMAIN, "/animais/")
                    .concat(a.ref, ".webp"),
                  className: "img-fluid mb-2",
                }),
                (0, v.jsx)("div", {
                  style: { fontSize: 11 },
                  className: "text-center font-weight-500 text-nowrap",
                  children: a.numeros
                    .map(function (e) {
                      return (0, p.mO)(e, 2);
                    })
                    .join(" "),
                }),
              ],
            }),
            !n &&
              (0, v.jsx)("div", {
                className:
                  "text-center font-xss py-1 --nome-grupo bg-cor-primaria text-cor-primaria-color",
                children: a.nome,
              }),
          ],
        });
      }
      function I(e) {
        var s = e.setUpSell,
          a = e.checkedUpSell,
          t = e.quantidade,
          n = e.sorteio,
          r = (0, u.Uu)(t, n);
        return r
          ? (0, v.jsxs)("div", {
              className:
                "has-upsell d-flex flex-column text-center bg-gradient-green2 mb-2 rounded-2 ",
              children: [
                (0, v.jsx)("h4", {
                  className: "has-upsell--titulo",
                  children: "Aumente suas chances \ud83d\ude80",
                }),
                (0, v.jsx)("div", {
                  className:
                    "has-upsell--select bg-light bg-opacity-10 animate-pulseShadow",
                  children: (0, v.jsxs)("div", {
                    className: "form-check form-switch switchUpSell",
                    onClick: function () {
                      return s(a ? 0 : r.qtde);
                    },
                    children: [
                      (0, v.jsx)("input", {
                        className: "form-check-input",
                        type: "checkbox",
                        role: "switch",
                        id: "switchUpSell",
                        checked: a > 0,
                        readOnly: !0,
                      }),
                      (0, v.jsxs)("label", {
                        className: "form-check-label",
                        htmlFor: "switchUpSell",
                        children: [
                          "Compre +",
                          r.qtde,
                          " t\xedtulos por apenas R$ ",
                          (0, p.bC)(r.valor),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
      function Z(e) {
        var s = e.app,
          a = e.sorteioToken,
          t = e.sorteio,
          i = e.grupos,
          p = e.quantidade,
          h = e.linkAfiliado,
          x = (0, N.useRouter)(),
          f = "promocoes" === s.tipo_site,
          b = s.semSenha,
          y = (0, u.B6)(t).digitos,
          F = (0, l.useState)(null),
          D = F[0],
          P = F[1],
          Z = (0, c.v9)(function (e) {
            return e.user;
          }),
          L = t.cpf_habilitado || s.cpf_habilitado,
          R = t.vex,
          B = (0, l.useState)([{ id: "", title: "Selecione o estado" }]),
          M = B[0],
          U = B[1],
          z = (0, l.useState)([]),
          W = z[0],
          K = z[1],
          V = (0, l.useState)(null),
          H = V[0],
          $ = V[1],
          G = (0, l.useState)(!1),
          Q = G[0],
          J = G[1],
          Y = (0, l.useState)({ interval: 0, msg: null }),
          X = Y[0],
          ee = Y[1],
          se = (0, l.useState)(0),
          ae = se[0],
          te = se[1];
        function ne() {
          $(null), ve((0, _.av)(null)), w.Z.cleanUsers();
        }
        function re() {
          return ie.apply(this, arguments);
        }
        function ie() {
          return (ie = (0, r.Z)(
            o().mark(function e() {
              var s;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          K([{ id: "", title: "Carregando estados..." }]),
                          (e.next = 4),
                          (0, d.Z)()
                            .get("/geo/estados")
                            .then(function (e) {
                              return e.data.estados;
                            })
                            .catch(function (e) {
                              throw new Error(
                                "N\xe3o foi poss\xedvel listar os estados"
                              );
                            })
                        );
                      case 4:
                        (s = e.sent),
                          K(
                            [{ id: "", title: "-- UF --" }].concat((0, n.Z)(s))
                          ),
                          (e.next = 10);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(0));
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          )).apply(this, arguments);
        }
        function oe(e) {
          return le.apply(this, arguments);
        }
        function le() {
          return (le = (0, r.Z)(
            o().mark(function e(s) {
              var a;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          A().start(),
                          U([{ id: "", title: "Carregando cidades..." }]),
                          (e.next = 5),
                          (0, d.Z)()
                            .get("/geo/cidades/" + s)
                            .then(function (e) {
                              var s = e.data;
                              if (1 !== s.result) throw new Error(s.message);
                              return s.cidades;
                            })
                            .catch(function (e) {
                              throw new Error(
                                "N\xe3o foi poss\xedvel listar as cidades"
                              );
                            })
                        );
                      case 5:
                        (a = e.sent),
                          U(
                            [{ id: "", title: "Selecione a cidade" }].concat(
                              (0, n.Z)(a)
                            )
                          ),
                          (e.next = 11);
                        break;
                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(0));
                      case 11:
                        return (e.prev = 11), A().done(), e.finish(11);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9, 11, 14]]
              );
            })
          )).apply(this, arguments);
        }
        (0, l.useEffect)(function () {
          function e() {
            return (e = (0, r.Z)(
              o().mark(function e() {
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), re();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          !(function () {
            e.apply(this, arguments);
          })();
        }, []);
        var ce =
            H &&
            (0, v.jsxs)("form", {
              onSubmit: function (e) {
                return fe.apply(this, arguments);
              },
              className: "app-form app-form-login",
              method: "post",
              children: [
                (0, v.jsx)("input", {
                  type: "hidden",
                  name: "userToken",
                  value: H.token,
                }),
                (0, v.jsx)("div", {
                  className: "mb-3",
                  children: (0, v.jsx)(k, { user: H }),
                }),
                !H.cpf &&
                  (0, v.jsxs)("div", {
                    className: "form-group mb-2",
                    children: [
                      (0, v.jsx)("label", {
                        htmlFor: "cpf",
                        className: "form-label",
                        children: "CPF",
                      }),
                      (0, v.jsx)(S.Z, {
                        type: "text",
                        name: "cpf",
                        className: "form-control",
                        required: L,
                      }),
                    ],
                  }),
                !H.dataNascimento &&
                  (0, v.jsxs)("div", {
                    className: "form-group mb-2",
                    children: [
                      (0, v.jsx)("label", {
                        htmlFor: "dataNascimento",
                        className: "form-label",
                        children: "Data de nascimento",
                      }),
                      (0, v.jsx)(T.Z, {
                        name: "dataNascimento",
                        className: "form-control",
                        required: !0,
                      }),
                    ],
                  }),
                !H.email &&
                  (0, v.jsxs)("div", {
                    className: "form-group mb-2 form-email-campo",
                    children: [
                      (0, v.jsx)("label", {
                        htmlFor: "email",
                        className: "form-label",
                        children: "E-mail",
                      }),
                      (0, v.jsx)("input", {
                        type: "email",
                        name: "email",
                        className: "form-control",
                      }),
                    ],
                  }),
                !b &&
                  (0, v.jsxs)("div", {
                    className: "form-group mb-2",
                    children: [
                      (0, v.jsx)("label", {
                        htmlFor: "password",
                        className: "form-label",
                        children: "Senha",
                      }),
                      (0, v.jsx)("input", {
                        type: "password",
                        name: "password",
                        className: "form-control",
                        required: !0,
                        placeholder: "informe sua senha de acesso",
                      }),
                    ],
                  }),
                (0, v.jsxs)("div", {
                  className: "footer",
                  children: [
                    (0, v.jsx)("p", {
                      className: "app-termos-text text-muted font-xsss mb-2",
                      children: f
                        ? (0, v.jsxs)(v.Fragment, {
                            children: [
                              "Ao realizar este pagamento e confirmar minha compra desse t\xedtulo de capitaliza\xe7\xe3o, declaro ter lido e concordado com os ",
                              (0, v.jsx)(C.default, {
                                href: "/termos-de-uso",
                                children: (0, v.jsx)("a", {
                                  className: "font-weight-500",
                                  target: "_blank",
                                  children: "termos",
                                }),
                              }),
                              " desta anexados na p\xe1gina do sorteio.",
                            ],
                          })
                        : (0, v.jsxs)(v.Fragment, {
                            children: [
                              "Ao realizar este pagamento e confirmar minha participa\xe7\xe3o nesta a\xe7\xe3o entre amigos, declaro ter lido e concordado com os ",
                              (0, v.jsx)(C.default, {
                                href: "/termos-de-uso",
                                children: (0, v.jsx)("a", {
                                  className: "font-weight-500",
                                  target: "_blank",
                                  children: "termos de uso",
                                }),
                              }),
                              " desta plataforma.",
                            ],
                          }),
                    }),
                    (0, v.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, v.jsx)("div", {
                          className: "mt-2",
                          children: (0, v.jsx)("button", {
                            type: "submit",
                            className: "btn btn-primary btn-wide",
                            children: Q
                              ? (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    "Acessando\xa0",
                                    (0, v.jsx)("span", {
                                      className:
                                        "d-inline-block spin-animation",
                                      children: (0, v.jsx)("i", {
                                        className: "bi bi-arrow-repeat",
                                      }),
                                    }),
                                  ],
                                })
                              : (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    "Acessar conta ",
                                    (0, v.jsx)("i", {
                                      className: "bi bi-arrow-right-circle",
                                    }),
                                  ],
                                }),
                          }),
                        }),
                        (0, v.jsxs)("div", {
                          children: [
                            (0, v.jsx)(C.default, {
                              href: "/recuperar-senha",
                              children: (0, v.jsx)("a", {
                                className:
                                  "btn btn-sm btn-link text-decoration-none mt-3",
                                children: "Esqueceu a senha?",
                              }),
                            }),
                            (0, v.jsx)("button", {
                              type: "button",
                              className:
                                "btn btn-link btn-sm text-secondary text-decoration-none w-100 mt-1",
                              onClick: ne,
                              children: "Utilizar outra conta",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          de = (0, v.jsx)("form", {
            onSubmit: function (e) {
              return xe.apply(this, arguments);
            },
            className: "app-form app-form-cadastro",
            id: "form-checkout",
            children: (0, v.jsxs)("div", {
              className: "row mb-2 appForm",
              children: [
                (0, v.jsxs)("div", {
                  className: "col-12 mb-2",
                  children: [
                    (0, v.jsxs)("label", {
                      htmlFor: "nome",
                      className:
                        "form-label d-flex justify-content-between align-items-center",
                      children: [
                        "Nome completo",
                        f &&
                          (0, v.jsxs)("span", {
                            className:
                              "font-xss font-weight-200 text-muted pt-1",
                            "data-bs-toggle": "collapse",
                            href: "#collapseNSocial",
                            role: "label",
                            "aria-expanded": "false",
                            "aria-controls": "collapseNSocial",
                            children: [
                              "Informar o nome social ",
                              (0, v.jsx)("i", {
                                className: "bi bi-person-fill-down",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, v.jsx)("input", {
                      type: "text",
                      className: "form-control",
                      id: "nome",
                      name: "nome",
                      required: !0,
                      placeholder: "Informe seu nome e sobrenome",
                      disabled: Q,
                    }),
                  ],
                }),
                f &&
                  (0, v.jsxs)("div", {
                    className: "col-12 mb-2 collapse",
                    id: "collapseNSocial",
                    children: [
                      (0, v.jsxs)("label", {
                        htmlFor: "nome",
                        className: "form-label",
                        children: [
                          "Nome social ",
                          (0, v.jsx)("span", {
                            className: "font-xs text-muted",
                            children: "opcional",
                          }),
                        ],
                      }),
                      (0, v.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        id: "nomeSocial",
                        name: "nomeSocial",
                        disabled: Q,
                      }),
                    ],
                  }),
                (0, v.jsxs)("div", {
                  className: "col-12 mb-2 form-email-campo-cadastro",
                  children: [
                    (0, v.jsx)("label", {
                      htmlFor: "email",
                      className: "form-label",
                      children: "E-mail",
                    }),
                    (0, v.jsx)("input", {
                      type: "email",
                      className: "form-control",
                      id: "email",
                      name: "email",
                      required: !0,
                      readOnly: !(null === D || void 0 === D || !D.email),
                      defaultValue:
                        null === D || void 0 === D ? void 0 : D.email,
                      disabled: Q,
                    }),
                  ],
                }),
                (0, v.jsxs)("div", {
                  className: "col-6 mb-2",
                  children: [
                    (0, v.jsx)("label", {
                      htmlFor: "telefoneCadastro",
                      className: "form-label",
                      children: "Celular",
                    }),
                    (0, v.jsx)(g.Z, {
                      className: "form-control",
                      name: "telefone",
                      id: "telefoneCadastro",
                      required: !0,
                      disabled: !!(
                        Q ||
                        (null !== D && void 0 !== D && D.telefone)
                      ),
                      defaultValue:
                        null === D || void 0 === D ? void 0 : D.telefone,
                    }),
                  ],
                }),
                (null === D || void 0 === D ? void 0 : D.telefone) &&
                  (0, v.jsxs)("div", {
                    className: "col-6 mb-2",
                    children: [
                      (0, v.jsx)("label", {
                        htmlFor: "rtelefone",
                        className: "form-label",
                        children: "Confirme o celular",
                      }),
                      (0, v.jsx)(g.Z, {
                        className: "form-control",
                        name: "rtelefone",
                        id: "rtelefone",
                        required: !0,
                        disabled: Q,
                      }),
                    ],
                  }),
                L &&
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsxs)("div", {
                        className: "col-12 mb-2",
                        children: [
                          (0, v.jsx)("label", {
                            htmlFor: "dataNascimento",
                            className: "form-label",
                            children: "Data de Nascimento",
                          }),
                          (0, v.jsx)(T.Z, {
                            className: "form-control",
                            id: "dataNascimento",
                            required: !0,
                            name: "dataNascimento",
                            placeholder: "Informe sua data de nascimento",
                            disabled: Q,
                          }),
                        ],
                      }),
                      (0, v.jsxs)("div", {
                        className: "col-12 mb-2",
                        children: [
                          (0, v.jsx)("label", {
                            htmlFor: "cpf",
                            className: "form-label",
                            children: "CPF",
                          }),
                          (0, v.jsx)(S.Z, {
                            className: "form-control",
                            name: "cpf",
                            placeholder: "Informe seu CPF",
                            disabled: Q,
                            required: L,
                          }),
                        ],
                      }),
                      (0, v.jsxs)("div", {
                        className: "col-12 endereco-form",
                        children: [
                          (0, v.jsx)("div", {
                            className: "row",
                            children: (0, v.jsx)("div", {
                              className: "col-12",
                              children: (0, v.jsxs)("div", {
                                className: "form-check",
                                children: [
                                  (0, v.jsx)("input", {
                                    className: "form-check-input",
                                    type: "checkbox",
                                    value: "",
                                    id: "flexCheckDefault",
                                  }),
                                  (0, v.jsx)("label", {
                                    className: "form-check-label",
                                    htmlFor: "flexCheckDefault",
                                    "data-bs-toggle": "collapse",
                                    href: "#collapseEndereco",
                                    role: "label",
                                    "aria-expanded": "false",
                                    "aria-controls": "collapseEndereco",
                                    children:
                                      "Desejo informar o meu endere\xe7o",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, v.jsxs)("div", {
                            className: "row collapse",
                            id: "collapseEndereco",
                            children: [
                              (0, v.jsxs)("div", {
                                className: "col-12 mb-2",
                                children: [
                                  (0, v.jsx)("label", {
                                    htmlFor: "cep",
                                    className: "form-label",
                                    children: "CEP",
                                  }),
                                  (0, v.jsx)(O.Z, {
                                    name: "cep",
                                    className: "form-control",
                                    id: "cep",
                                    onChange: function (e) {
                                      var s =
                                          document.getElementById(
                                            "form-checkout"
                                          ),
                                        a = e.target.value;
                                      /^[0-9]{5}\-[0-9]{3}$/.test(a) &&
                                        (0, d.Z)()
                                          .get("/geo/cep/" + a)
                                          .then(
                                            (function () {
                                              var e = (0, r.Z)(
                                                o().mark(function e(a) {
                                                  var t, n, r;
                                                  return o().wrap(function (e) {
                                                    for (;;)
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          if (
                                                            1 !==
                                                            (t = a.data).result
                                                          ) {
                                                            e.next = 7;
                                                            break;
                                                          }
                                                          if (
                                                            !(r = {
                                                              cep: t.cep,
                                                              uf: t.estado.uf,
                                                              logradouro:
                                                                t.logradouro,
                                                              numero: "",
                                                              bairro: t.bairro,
                                                              cidade:
                                                                null ===
                                                                  (n =
                                                                    t.cidade) ||
                                                                void 0 === n
                                                                  ? void 0
                                                                  : n.id,
                                                              complemento: "",
                                                              pontoreferencia:
                                                                "",
                                                            }).uf
                                                          ) {
                                                            e.next = 6;
                                                            break;
                                                          }
                                                          return (
                                                            (e.next = 6),
                                                            oe(r.uf)
                                                          );
                                                        case 6:
                                                          [
                                                            "uf",
                                                            "cep",
                                                            "logradouro",
                                                            "numero",
                                                            "bairro",
                                                            "complemento",
                                                            "cidade",
                                                            "pontoreferencia",
                                                          ].forEach(function (
                                                            e
                                                          ) {
                                                            var a = r[e];
                                                            "undefined" !==
                                                              typeof s[e] &&
                                                              a &&
                                                              (s[e].value = a);
                                                          });
                                                        case 7:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  }, e);
                                                })
                                              );
                                              return function (s) {
                                                return e.apply(this, arguments);
                                              };
                                            })()
                                          )
                                          .catch(function (e) {
                                            console.log(e);
                                          });
                                    },
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                className: "col-8 mb-2",
                                children: [
                                  (0, v.jsx)("label", {
                                    htmlFor: "logradouro",
                                    className: "form-label",
                                    children: "Logradouro",
                                  }),
                                  (0, v.jsx)("input", {
                                    type: "text",
                                    name: "logradouro",
                                    className: "form-control",
                                    id: "logradouro",
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                className: "col-4 mb-2",
                                children: [
                                  (0, v.jsx)("label", {
                                    htmlFor: "numero",
                                    className: "form-label",
                                    children: "N\xfamero",
                                  }),
                                  (0, v.jsx)("input", {
                                    type: "text",
                                    name: "numero",
                                    className: "form-control",
                                    id: "numero",
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                className: "col-6 mb-2",
                                children: [
                                  (0, v.jsx)("label", {
                                    htmlFor: "bairro",
                                    className: "form-label",
                                    children: "Bairro",
                                  }),
                                  (0, v.jsx)("input", {
                                    type: "text",
                                    name: "bairro",
                                    className: "form-control",
                                    id: "bairro",
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                className: "col-6 mb-2",
                                children: [
                                  (0, v.jsx)("label", {
                                    htmlFor: "complemento",
                                    className: "form-label",
                                    children: "Complemento",
                                  }),
                                  (0, v.jsx)("input", {
                                    type: "text",
                                    name: "complemento",
                                    className: "form-control",
                                    id: "complemento",
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                className: "col-6 mb-2",
                                children: [
                                  (0, v.jsx)("label", {
                                    htmlFor: "uf",
                                    className: "form-label",
                                    children: "UF",
                                  }),
                                  (0, v.jsx)("select", {
                                    className: "form-select",
                                    name: "uf",
                                    id: "uf",
                                    onChange: function (e) {
                                      return oe(e.target.value);
                                    },
                                    children: W.map(function (e) {
                                      return (0,
                                      v.jsx)("option", { value: e.id, children: e.title }, "estado-".concat(e.id));
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                className: "col-6 mb-2",
                                children: [
                                  (0, v.jsx)("label", {
                                    htmlFor: "cidade",
                                    className: "form-label",
                                    children: "Cidade",
                                  }),
                                  (0, v.jsx)("select", {
                                    name: "cidade",
                                    className: "form-select",
                                    id: "cidade",
                                    children: M.map(function (e) {
                                      return (0,
                                      v.jsx)("option", { value: e.id, children: e.title }, "cidade-".concat(e.id));
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                className: "col-12 mb-2",
                                children: [
                                  (0, v.jsx)("label", {
                                    htmlFor: "pontoreferencia",
                                    className: "form-label",
                                    children: "Ponto de refer\xeancia",
                                  }),
                                  (0, v.jsx)("input", {
                                    type: "text",
                                    name: "pontoreferencia",
                                    className: "form-control",
                                    id: "pontoreferencia",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                !b &&
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsxs)("div", {
                        className: "col-12 mb-2",
                        children: [
                          (0, v.jsx)("label", {
                            htmlFor: "senha",
                            className: "form-label",
                            children: "Senha",
                          }),
                          (0, v.jsx)("input", {
                            type: "password",
                            className: "form-control",
                            id: "senha",
                            name: "senha",
                            required: !0,
                            placeholder: "Senha",
                            disabled: Q,
                          }),
                        ],
                      }),
                      (0, v.jsxs)("div", {
                        className: "col-12 mb-2",
                        children: [
                          (0, v.jsx)("label", {
                            htmlFor: "rsenha",
                            className: "form-label",
                            children: "Repita a senha",
                          }),
                          (0, v.jsx)("input", {
                            type: "password",
                            className: "form-control",
                            id: "rsenha",
                            name: "rsenha",
                            required: !0,
                            placeholder: "Repeti\xe7\xe3o de senha",
                            disabled: Q,
                          }),
                        ],
                      }),
                    ],
                  }),
                !b &&
                  (0, v.jsxs)("div", {
                    className: "col-12 mb-2",
                    children: [
                      (0, v.jsxs)("label", {
                        htmlFor: "cep",
                        className: "form-label",
                        children: [
                          "CEP",
                          (0, v.jsx)("small", {
                            className: "text-muted",
                            children: " (opcional)",
                          }),
                        ],
                      }),
                      (0, v.jsx)(O.Z, {
                        type: "text",
                        className: "form-control",
                        id: "cep",
                        name: "cep",
                        placeholder: "Digite o seu CEP",
                        disabled: Q,
                      }),
                    ],
                  }),
                (0, v.jsx)("div", {
                  className: "col-12 mb-2",
                  children: (0, v.jsx)("p", {
                    className: "app-termos-text text-muted font-xss mb-0",
                    children: f
                      ? (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Ao realizar este pagamento e confirmar minha compra desse t\xedtulo de capitaliza\xe7\xe3o, declaro ter lido e concordado com os ",
                            (0, v.jsx)(C.default, {
                              href: "/termos-de-uso",
                              children: (0, v.jsx)("a", {
                                className: "font-weight-500",
                                target: "_blank",
                                children: "termos",
                              }),
                            }),
                            " desta anexados na p\xe1gina do sorteio.",
                          ],
                        })
                      : (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Ao realizar este pagamento e confirmar minha participa\xe7\xe3o nesta a\xe7\xe3o entre amigos, declaro ter lido e concordado com os ",
                            (0, v.jsx)(C.default, {
                              href: "/termos-de-uso",
                              children: (0, v.jsx)("a", {
                                className: "font-weight-500",
                                target: "_blank",
                                children: "termos de uso",
                              }),
                            }),
                            " desta plataforma.",
                          ],
                        }),
                  }),
                }),
                (0, v.jsxs)("div", {
                  className: "col-12",
                  children: [
                    (0, v.jsx)("button", {
                      type: "submit",
                      className: "btn-concluir-cadastro btn btn-".concat(
                        Q ? "warning" : "success",
                        " w-100"
                      ),
                      children: Q
                        ? (0, v.jsxs)(v.Fragment, {
                            children: [
                              "Concluindo cadastro \xa0",
                              (0, v.jsx)("span", {
                                className: "d-inline-block spin-animation",
                                children: (0, v.jsx)("i", {
                                  className: "bi bi-arrow-repeat",
                                }),
                              }),
                            ],
                          })
                        : (0, v.jsxs)(v.Fragment, {
                            children: [
                              "Concluir cadastro e pagar \xa0",
                              (0, v.jsx)("i", {
                                className: "bi bi-arrow-right-circle",
                              }),
                            ],
                          }),
                    }),
                    (0, v.jsx)("button", {
                      type: "button",
                      className:
                        "btn btn-ja-possuo-conta btn-link w-100 btn-sm text-decoration-none mt-3",
                      onClick: function () {
                        return P(null);
                      },
                      children: "J\xe1 possuo uma conta",
                    }),
                  ],
                }),
              ],
            }),
          }),
          me =
            H &&
            (0, v.jsxs)("form", {
              onSubmit: function (e) {
                return ge.apply(this, arguments);
              },
              className: "app-form app-form-logado",
              id: "form-checkout",
              children: [
                (0, v.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    (0, v.jsx)("input", {
                      type: "hidden",
                      name: "userToken",
                      value: H.token,
                    }),
                    (0, v.jsx)(k, { user: H }),
                  ],
                }),
                L &&
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      !H.cpf &&
                        (0, v.jsxs)("div", {
                          className: "form-group mb-2",
                          children: [
                            (0, v.jsx)("label", {
                              htmlFor: "cpf",
                              className: "form-label",
                              children: "CPF",
                            }),
                            (0, v.jsx)(S.Z, {
                              type: "text",
                              name: "cpf",
                              className: "form-control",
                              required: L,
                            }),
                          ],
                        }),
                      !H.dataNascimento &&
                        (0, v.jsxs)("div", {
                          className: "form-group mb-2",
                          children: [
                            (0, v.jsx)("label", {
                              htmlFor: "dataNascimento",
                              className: "form-label",
                              children: "Data de nascimento",
                            }),
                            (0, v.jsx)(T.Z, {
                              name: "dataNascimento",
                              className: "form-control",
                              required: !0,
                            }),
                          ],
                        }),
                    ],
                  }),
                !H.email &&
                  (0, v.jsxs)("div", {
                    className: "form-group mb-2 form-email-campo",
                    children: [
                      (0, v.jsx)("label", {
                        htmlFor: "email",
                        className: "form-label",
                        children: "E-mail",
                      }),
                      (0, v.jsx)("input", {
                        type: "email",
                        name: "email",
                        className: "form-control",
                      }),
                    ],
                  }),
                (0, v.jsx)("p", {
                  className: "app-termos-text text-muted font-xss",
                  children: f
                    ? (0, v.jsxs)(v.Fragment, {
                        children: [
                          "Ao realizar este pagamento e confirmar minha compra desse t\xedtulo de capitaliza\xe7\xe3o, declaro ter lido e concordado com os ",
                          (0, v.jsx)(C.default, {
                            href: "/termos-de-uso",
                            children: (0, v.jsx)("a", {
                              className: "font-weight-500",
                              target: "_blank",
                              children: "termos",
                            }),
                          }),
                          " desta anexados na p\xe1gina do sorteio.",
                        ],
                      })
                    : (0, v.jsxs)(v.Fragment, {
                        children: [
                          "Ao realizar este pagamento e confirmar minha participa\xe7\xe3o nesta a\xe7\xe3o entre amigos, declaro ter lido e concordado com os ",
                          (0, v.jsx)(C.default, {
                            href: "/termos-de-uso",
                            children: (0, v.jsx)("a", {
                              className: "font-weight-500",
                              target: "_blank",
                              children: "termos de uso",
                            }),
                          }),
                          " desta plataforma.",
                        ],
                      }),
                }),
                Q
                  ? X.msg ||
                    (0, v.jsxs)("button", {
                      type: "submit",
                      className: "btn btn-".concat(
                        Q ? "warning" : "success",
                        " w-100"
                      ),
                      children: [
                        "Reservando t\xedtulos\xa0",
                        (0, v.jsx)("span", {
                          className: "d-inline-block spin-animation",
                          children: (0, v.jsx)("i", {
                            className: "bi bi-arrow-repeat",
                          }),
                        }),
                      ],
                    })
                  : (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsxs)("button", {
                          type: "submit",
                          className: "btn btn-concluir-reserva btn-".concat(
                            Q ? "warning" : "success",
                            " w-100 mb-2"
                          ),
                          children: [
                            "Concluir reserva ",
                            (0, v.jsx)("i", {
                              className: "bi bi-arrow-right-circle",
                            }),
                          ],
                        }),
                        (0, v.jsx)("button", {
                          type: "button",
                          className:
                            "btn btn-troca-de-conta btn-link btn-sm text-secondary text-decoration-none w-100 my-2",
                          onClick: ne,
                          children: "Utilizar outra conta",
                        }),
                      ],
                    }),
              ],
            }),
          ue = (0, v.jsxs)("form", {
            onSubmit: function (e) {
              return je.apply(this, arguments);
            },
            className: "app-form app-form-consulta-nome",
            children: [
              (0, v.jsxs)("div", {
                className: "mb-2",
                children: [
                  (0, v.jsx)("label", {
                    htmlFor: "telefone",
                    className: "form-label",
                    children: "Informe seu telefone",
                  }),
                  (0, v.jsx)(g.Z, {
                    type: "text",
                    className: "form-control",
                    id: "telefone",
                    name: "username",
                    required: !0,
                  }),
                ],
              }),
              (0, v.jsxs)("div", {
                className: "alert alert-warning p-2 font-xss mb-2",
                children: [
                  (0, v.jsx)("i", { className: "bi bi-exclamation-circle" }),
                  " Informe seu telefone para continuar.",
                ],
              }),
              (0, v.jsx)("button", {
                type: "submit",
                className: "btn btn-primary btn-wide",
                children: Q
                  ? (0, v.jsxs)(v.Fragment, {
                      children: [
                        "Consultando cadastro\xa0",
                        (0, v.jsx)("span", {
                          className: "d-inline-block spin-animation",
                          children: (0, v.jsx)("i", {
                            className: "bi bi-arrow-repeat",
                          }),
                        }),
                      ],
                    })
                  : (0, v.jsxs)(v.Fragment, {
                      children: [
                        "Continuar ",
                        (0, v.jsx)("i", { className: "bi bi-arrow-right" }),
                      ],
                    }),
              }),
            ],
          });
        function pe() {
          var e = Z.user;
          return (
            e &&
              e.token !== (null === H || void 0 === H ? void 0 : H.token) &&
              $(e),
            e
          );
        }
        function he() {
          var e = [
              (0, v.jsx)(v.Fragment, {
                children: (0, v.jsxs)("button", {
                  type: "submit",
                  className: "btn btn-primary w-100",
                  children: [
                    "Conectando com o servidor... \xa0",
                    (0, v.jsx)("span", {
                      className: "d-inline-block spin-animation",
                      children: (0, v.jsx)("i", {
                        className: "bi bi-arrow-repeat",
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(v.Fragment, {
                children: (0, v.jsxs)("button", {
                  type: "submit",
                  className: "btn btn-warning w-100",
                  children: [
                    "Verificando seus dados...\xa0",
                    (0, v.jsx)("span", {
                      className: "d-inline-block spin-animation",
                      children: (0, v.jsx)("i", {
                        className: "bi bi-arrow-repeat",
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(v.Fragment, {
                children: (0, v.jsxs)("button", {
                  type: "submit",
                  className: "btn btn-info w-100",
                  children: [
                    "Separando n\xfameros para reserva...\xa0",
                    (0, v.jsx)("span", {
                      className: "d-inline-block spin-animation",
                      children: (0, v.jsx)("i", {
                        className: "bi bi-arrow-repeat",
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(v.Fragment, {
                children: (0, v.jsxs)("button", {
                  type: "submit",
                  className: "btn btn-secondary w-100",
                  children: [
                    "Reservando t\xedtulos...\xa0",
                    (0, v.jsx)("span", {
                      className: "d-inline-block spin-animation",
                      children: (0, v.jsx)("i", {
                        className: "bi bi-arrow-repeat",
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(v.Fragment, {
                children: (0, v.jsxs)("button", {
                  type: "submit",
                  className: "btn btn-info w-100",
                  children: [
                    "Quase l\xe1! aguarde...\xa0",
                    (0, v.jsx)("span", {
                      className: "d-inline-block spin-animation",
                      children: (0, v.jsx)("i", {
                        className: "bi bi-arrow-repeat",
                      }),
                    }),
                  ],
                }),
              }),
              (0, v.jsx)(v.Fragment, {
                children: (0, v.jsxs)("button", {
                  type: "submit",
                  className: "btn btn-success w-100",
                  children: [
                    "Concluindo reserva...\xa0",
                    (0, v.jsx)("span", {
                      className: "d-inline-block spin-animation",
                      children: (0, v.jsx)("i", {
                        className: "bi bi-arrow-repeat",
                      }),
                    }),
                  ],
                }),
              }),
            ],
            s = 0;
          X.interval > 0 && clearInterval(X.interval);
          var a = setInterval(function () {
            s++,
              e.length > s ? ee({ interval: a, msg: e[s] }) : clearInterval(a);
          }, 5e3);
          ee({ interval: a, msg: e[0] });
        }
        function xe() {
          return (xe = (0, r.Z)(
            o().mark(function e(s) {
              var a, t, n, r, i, l, c, m, p, h, x, f, b, v, j, g, N, w, y;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((s.preventDefault(), Q)) {
                          e.next = 26;
                          break;
                        }
                        if (
                          ((e.prev = 2),
                          A().start(),
                          J(!0),
                          null === (N = s.target) ||
                            void 0 === N ||
                            null === (a = N.rtelefone) ||
                            void 0 === a ||
                            !a.value)
                        ) {
                          e.next = 9;
                          break;
                        }
                        if (
                          N.telefone.value.replace(/[^0-9]/g, "") ===
                          N.rtelefone.value.replace(/[^0-9]/g, "")
                        ) {
                          e.next = 9;
                          break;
                        }
                        throw new Error(
                          "N\xfamero de telefone inv\xe1lido, verifique se informou o telefone correto"
                        );
                      case 9:
                        return (
                          (w = {
                            nome:
                              null === (t = N.nome) || void 0 === t
                                ? void 0
                                : t.value,
                            nomeSocial:
                              null === (n = N.nomeSocial) || void 0 === n
                                ? void 0
                                : n.value,
                            telefone:
                              null === (r = N.telefone) || void 0 === r
                                ? void 0
                                : r.value,
                            email:
                              null === (i = N.email) || void 0 === i
                                ? void 0
                                : i.value,
                            dataNascimento:
                              null === (l = N.dataNascimento) || void 0 === l
                                ? void 0
                                : l.value,
                            cpf:
                              null === (c = N.cpf) || void 0 === c
                                ? void 0
                                : c.value,
                            senha:
                              null === (m = N.senha) || void 0 === m
                                ? void 0
                                : m.value,
                            rsenha:
                              null === (p = N.rsenha) || void 0 === p
                                ? void 0
                                : p.value,
                            cep:
                              null === (h = N.cep) || void 0 === h
                                ? void 0
                                : h.value,
                            logradouro:
                              null === (x = N.logradouro) || void 0 === x
                                ? void 0
                                : x.value,
                            numero:
                              null === (f = N.numero) || void 0 === f
                                ? void 0
                                : f.value,
                            bairro:
                              null === (b = N.bairro) || void 0 === b
                                ? void 0
                                : b.value,
                            complemento:
                              null === (v = N.complemento) || void 0 === v
                                ? void 0
                                : v.value,
                            cidade:
                              null === (j = N.cidade) || void 0 === j
                                ? void 0
                                : j.value,
                            pontoreferencia:
                              null === (g = N.pontoreferencia) || void 0 === g
                                ? void 0
                                : g.value,
                          }),
                          (e.next = 12),
                          (0, d.Z)()
                            .post("/cadastrar", w)
                            .then(function (e) {
                              var s = e.data;
                              return (0, u.Ko)("CompleteRegistration"), s;
                            })
                            .catch(function (e) {
                              var s = e.response;
                              throw new Error(
                                (null === s || void 0 === s
                                  ? void 0
                                  : s.data.message) ||
                                  "N\xe3o foi poss\xedvel concluir o cadastro, tente novamente mais tarde"
                              );
                            })
                        );
                      case 12:
                        if (1 === (y = e.sent).result) {
                          e.next = 15;
                          break;
                        }
                        throw new Error(y.message);
                      case 15:
                        return (
                          $(y.user),
                          (e.next = 18),
                          we({ userToken: y.user.token })
                        );
                      case 18:
                        return e.abrupt("return", e.sent);
                      case 21:
                        (e.prev = 21),
                          (e.t0 = e.catch(2)),
                          alert(e.t0.message),
                          A().done(),
                          J(!1);
                      case 26:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 21]]
              );
            })
          )).apply(this, arguments);
        }
        function fe() {
          return (fe = (0, r.Z)(
            o().mark(function e(s) {
              var a, t, n, r, i, l, c, d, m, u;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((s.preventDefault(), Q)) {
                          e.next = 25;
                          break;
                        }
                        return (
                          (e.prev = 2),
                          J(!0),
                          A().start(),
                          (c = s.target),
                          (d = {
                            userToken:
                              null === (a = c.userToken) || void 0 === a
                                ? void 0
                                : a.value,
                            password:
                              null === (t = c.password) || void 0 === t
                                ? void 0
                                : t.value,
                          }),
                          (m = {
                            dataNascimento:
                              null === (n = c.dataNascimento) || void 0 === n
                                ? void 0
                                : n.value,
                            email:
                              null === (r = c.email) || void 0 === r
                                ? void 0
                                : r.value,
                            cpf:
                              null === (i = c.cpf) || void 0 === i
                                ? void 0
                                : i.value,
                            telefone:
                              null === (l = c.telefone) || void 0 === l
                                ? void 0
                                : l.value,
                          }),
                          (e.next = 10),
                          E.Z.auth(d.userToken, d.password, m)
                        );
                      case 10:
                        return (
                          (u = e.sent),
                          ve((0, _.av)(u)),
                          $(null === u || void 0 === u ? void 0 : u.user),
                          (e.next = 15),
                          we({ userToken: u.user.token })
                        );
                      case 15:
                        return e.abrupt("return", e.sent);
                      case 18:
                        (e.prev = 18), (e.t0 = e.catch(2)), alert(e.t0.message);
                      case 21:
                        return (e.prev = 21), J(!1), A().done(), e.finish(21);
                      case 25:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 18, 21, 25]]
              );
            })
          )).apply(this, arguments);
        }
        (0, l.useEffect)(function () {
          w.Z.getUsers()
            .slice(0, 1)
            .forEach(function (e) {
              $(e);
            });
        }, []);
        var be = (0, c.v9)(function (e) {
            return e.carrinho.numeros;
          }),
          ve = (0, c.I0)();
        function je() {
          return (je = (0, r.Z)(
            o().mark(function e(s) {
              var a;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((s.preventDefault(), Q)) {
                          e.next = 20;
                          break;
                        }
                        return (
                          (e.prev = 2),
                          J(!0),
                          A().start(),
                          (e.next = 7),
                          (0, d.Z)()
                            .post("/cadastrar/consulta", {
                              username: s.target.username.value,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              var s,
                                a = e.response;
                              throw new Error(
                                (null === a ||
                                void 0 === a ||
                                null === (s = a.data) ||
                                void 0 === s
                                  ? void 0
                                  : s.message) ||
                                  "N\xe3o foi poss\xedvel se comunicar com o servidor, tente novamente mais tarde"
                              );
                            })
                        );
                      case 7:
                        if (1 === (a = e.sent).result) {
                          e.next = 10;
                          break;
                        }
                        throw new Error(a.message);
                      case 10:
                        a.user
                          ? (w.Z.setUser(a.user), $(a.user), P(null))
                          : P(a),
                          (e.next = 16);
                        break;
                      case 13:
                        (e.prev = 13), (e.t0 = e.catch(2)), alert(e.t0.message);
                      case 16:
                        return (e.prev = 16), J(!1), A().done(), e.finish(16);
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 13, 16, 20]]
              );
            })
          )).apply(this, arguments);
        }
        function ge() {
          return (ge = (0, r.Z)(
            o().mark(function e(s) {
              var a, t, n, r, i, l;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((s.preventDefault(), Q)) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (e.prev = 2),
                          J(!0),
                          A().start(),
                          (l = s.target),
                          (e.next = 8),
                          we({
                            userToken:
                              null === (a = l.userToken) || void 0 === a
                                ? void 0
                                : a.value,
                            telefone:
                              null === (t = l.telefone) || void 0 === t
                                ? void 0
                                : t.value,
                            email:
                              null === (n = l.email) || void 0 === n
                                ? void 0
                                : n.value,
                            cpf:
                              null === (r = l.cpf) || void 0 === r
                                ? void 0
                                : r.value,
                            dataNascimento:
                              null === (i = l.dataNascimento) || void 0 === i
                                ? void 0
                                : i.value,
                          })
                        );
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(2)), alert(e.t0.message);
                      case 13:
                        return (e.prev = 13), J(!1), A().done(), e.finish(13);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 10, 13, 17]]
              );
            })
          )).apply(this, arguments);
        }
        function Ne() {
          return R ? p : be.length || p;
        }
        function we(e) {
          return ye.apply(this, arguments);
        }
        function ye() {
          return (ye = (0, r.Z)(
            o().mark(function e(s) {
              var r, l, c, p, f, b, v, j, g, N, y, k;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = s.userToken),
                        (l = s.nome),
                        (c = s.cpf),
                        (p = s.telefone),
                        (f = s.email),
                        (b = s.dataNascimento),
                        (v = []),
                        i.length
                          ? i.forEach(function (e) {
                              return (v = [].concat(
                                (0, n.Z)(v),
                                (0, n.Z)(e.numeros)
                              ));
                            })
                          : (v = be.map(function (e) {
                              return e.numero;
                            })),
                        (j = (0, u.$1)()),
                        (g = {
                          tokenSorteio: t.token,
                          numeros: v,
                          linkAfiliado: h,
                          grupos: i,
                          linkPromocional:
                            localStorage.getItem("link-promocional"),
                          quantidade: Ne(),
                          upsell: ae,
                          userToken: r,
                          nome: l,
                          telefone: p,
                          cpf: c,
                          email: f,
                          dataNascimento: b,
                          url_params: (0, u.DP)(),
                          fbc: j._fbc,
                          fbp: j._fbp,
                          afiliado:
                            window.localStorage.getItem("afiliadoToken"),
                        }),
                        he(),
                        r)
                      ) {
                        e.next = 14;
                        break;
                      }
                      if (l.trim() && !(l.trim().split(" ").length < 2)) {
                        e.next = 9;
                        break;
                      }
                      throw new Error("Informe seu nome completo");
                    case 9:
                      if (
                        ((N = p.replace(/[^0-9]/g, "").length),
                        !(!p.trim() || N < 10 || N > 11))
                      ) {
                        e.next = 12;
                        break;
                      }
                      throw new Error(
                        "Informe um telefone v\xe1lido, ex: (11) 9999-8888"
                      );
                    case 12:
                      if (Ne()) {
                        e.next = 14;
                        break;
                      }
                      throw new Error("Selecione no m\xednimo 1 n\xfamero");
                    case 14:
                      return (
                        (e.next = 16),
                        (0, d.Z)()
                          .post("/sorteios/comprar/".concat(a), g)
                          .then(function (e) {
                            return e.data;
                          })
                          .catch(function (e) {
                            var s = e.response;
                            throw 400 ===
                              (null === s || void 0 === s ? void 0 : s.status)
                              ? (Array.isArray(s.data.cotas_duplicadas) &&
                                  ve((0, m.O7)(s.data.cotas_duplicadas)),
                                new Error(s.data.message))
                              : new Error(
                                  "N\xe3o foi poss\xedvel concluir a compra"
                                );
                          })
                      );
                    case 16:
                      if (1 === (y = e.sent).result) {
                        e.next = 19;
                        break;
                      }
                      throw new Error(y.message);
                    case 19:
                      return (
                        (k = y.compra).user &&
                          w.Z.setUser(
                            null === k || void 0 === k ? void 0 : k.user
                          ),
                        ve((0, _.wU)(null)),
                        ke(k),
                        (e.next = 25),
                        x.push("/compra/" + y.compra.token).then(function () {
                          ve((0, m.Vt)());
                        })
                      );
                    case 25:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function ke(e) {
          "function" === typeof window.gtag &&
            window.gtag("event", "begin_checkout", {
              affiliation: s.title,
              currency: "BRL",
              items: [
                {
                  item_id: "SORTEIO".concat(t.id),
                  item_name: "T\xedtulo",
                  coupon: null,
                  discount: 0,
                  price: e.valor,
                  currency: "BRL",
                  quantity: e.quantidade,
                },
              ],
              transaction_id: e.token,
              shipping: 0,
              value: e.total,
              tax: 0,
            }),
            (0, u.Ko)("InitiateCheckout", {
              content_ids: [t.id],
              num_items: e.quantidade,
              currency: "BRL",
              value: e.valor,
            });
        }
        return (0, v.jsx)("div", {
          className: "modal fade no-close",
          "data-bs-backdrop": "static",
          id: "modal-checkout",
          children: (0, v.jsx)("div", {
            className:
              "modal-dialog modal-fullscreen-sm-down modal-dialog-centered",
            children: (0, v.jsxs)("div", {
              className: "modal-content rounded-0",
              children: [
                (0, v.jsx)("span", {
                  className: "d-none",
                  children: pe()
                    ? "Usu\xe1rio autenticado"
                    : "Usu\xe1rio n\xe3o autenticado",
                }),
                (0, v.jsxs)("div", {
                  className: "modal-header py-2",
                  children: [
                    (0, v.jsx)("h5", {
                      className: "modal-title",
                      children: "Checkout",
                    }),
                    (0, v.jsx)("button", {
                      type: "button",
                      className: "btn-close",
                      "data-bs-dismiss": "modal",
                      disabled: Q,
                      "aria-label": "Close",
                    }),
                  ],
                }),
                (0, v.jsxs)("div", {
                  className: "modal-body py-2 checkout",
                  children: [
                    i.length
                      ? (0, v.jsxs)(v.Fragment, {
                          children: [
                            (0, v.jsxs)("div", {
                              className: "alert alert-info p-2 font-xs",
                              children: [
                                (0, v.jsx)("i", {
                                  className: "bi bi-check-circle",
                                }),
                                " Grupos selecionados ",
                                i.map(function (e, s) {
                                  return (0,
                                  v.jsxs)("b", { children: [s ? ", " : "", e.nome] }, "grupo-nome-".concat(s));
                                }),
                              ],
                            }),
                            (0, v.jsx)("div", {
                              className: "row row-cols-4 sorteio-grupos",
                              children: i.map(function (e, s) {
                                return (0,
                                v.jsx)("div", { className: "col mb-3", children: (0, v.jsx)(q, { disableNome: !0, grupo: e, addClass: "bg-success text-white shadow" }) }, "compra-grupo-item-".concat(s));
                              }),
                            }),
                          ],
                        })
                      : (0, v.jsxs)(v.Fragment, {
                          children: [
                            R || !be.length
                              ? (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, u.mH)(t) &&
                                      (0, v.jsxs)("div", {
                                        className:
                                          "chanceDobro p-2 bg-gradient-pink text-center font-xss rounded-2 mb-2 text-white",
                                        children: [
                                          "Ganhando ",
                                          (0, v.jsxs)("b", {
                                            children: [
                                              "+",
                                              Ne(),
                                              " unidade(s)",
                                            ],
                                          }),
                                          " da ",
                                          (0, v.jsx)("b", {
                                            children: "Chance em dobro",
                                          }),
                                          "! \ud83d\udd25",
                                        ],
                                      }),
                                    (0, v.jsx)(I, {
                                      setUpSell: te,
                                      checkedUpSell: ae,
                                      quantidade: Ne(),
                                      sorteio: t,
                                    }),
                                    (0, v.jsx)("div", {
                                      className:
                                        "alert alert-light p-2 mb-1 font-xsss",
                                      children: f
                                        ? (0, v.jsxs)(v.Fragment, {
                                            children: [
                                              (0, v.jsx)("b", {
                                                children: Ne() + ae,
                                              }),
                                              " unidade(s) do produto ",
                                              (0, v.jsx)("b", {
                                                children: t.title,
                                              }),
                                            ],
                                          })
                                        : (0, v.jsxs)(v.Fragment, {
                                            children: [
                                              (0, v.jsx)("i", {
                                                className: "bi bi-check-circle",
                                              }),
                                              " Voc\xea est\xe1 adquirindo",
                                              (0, v.jsxs)("span", {
                                                className: "font-weight-500",
                                                children: [
                                                  "\xa0",
                                                  Ne() + ae,
                                                  " t\xedtulo",
                                                  Ne() > 1 ? "s" : "",
                                                ],
                                              }),
                                              (0, v.jsx)("span", {
                                                children:
                                                  "\xa0da a\xe7\xe3o entre amigos",
                                              }),
                                              (0, v.jsxs)("span", {
                                                className: "font-weight-500",
                                                children: ["\xa0", t.title],
                                              }),
                                              ",",
                                              (0, v.jsxs)("span", {
                                                children: [
                                                  "\xa0",
                                                  Ne() > 1
                                                    ? "seus n\xfameros ser\xe3o gerados"
                                                    : "seu n\xfamero ser\xe1 gerado",
                                                ],
                                              }),
                                              (0, v.jsx)("span", {
                                                children:
                                                  "\xa0assim que concluir a compra.",
                                              }),
                                            ],
                                          }),
                                    }),
                                  ],
                                })
                              : (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, v.jsxs)("div", {
                                      className:
                                        "alert alert-info p-2 mb-2 font-xs",
                                      children: [
                                        "Voc\xea est\xe1 adquirindo ",
                                        Ne(),
                                        " t\xedtulo(s) da a\xe7\xe3o entre amigos ",
                                        (0, v.jsx)("span", {
                                          className: "font-weight-500",
                                          children:
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.title,
                                        }),
                                        ", confira seus t\xedtulos e preencha seus dados.",
                                      ],
                                    }),
                                    (0, v.jsx)("div", {
                                      className:
                                        "row row-cols-4 row-gutter-sm p-2 pb-1 bg-dark bg-opacity-10 rounded-10 mb-2",
                                      children: be.map(function (e) {
                                        return (0,
                                        v.jsx)("div", { className: "col", children: (0, v.jsx)(j, { disabled: !0, numero: e, digitos: y }) }, "compra-item-".concat(e.numero));
                                      }),
                                    }),
                                  ],
                                }),
                            " ",
                          ],
                        }),
                    b
                      ? H || pe()
                        ? me
                        : D
                        ? de
                        : ue
                      : pe()
                      ? me
                      : H
                      ? ce
                      : D
                      ? de
                      : ue,
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function L(e) {
        var s = e.sorteio;
        return (0, v.jsx)("div", {
          className: "modal fade",
          id: "modal-premios",
          children: (0, v.jsx)("div", {
            className: "modal-dialog modal-dialog-centered modal-md",
            children: (0, v.jsxs)("div", {
              className: "modal-content",
              children: [
                (0, v.jsxs)("div", {
                  className: "modal-header",
                  children: [
                    (0, v.jsx)("h5", {
                      className: "modal-title",
                      children: "Lista de Pr\xeamios",
                    }),
                    (0, v.jsx)("button", {
                      type: "button",
                      className: "btn-close",
                      "data-bs-dismiss": "modal",
                      "aria-label": "Close",
                    }),
                  ],
                }),
                (0, v.jsxs)("div", {
                  className: "modal-body",
                  children: [
                    (0, v.jsxs)("p", {
                      children: [
                        "Estes s\xe3o os pr\xeamios dispon\xedveis no sorteio ",
                        (0, v.jsx)("span", {
                          className: "font-weight-600",
                          children: s.title,
                        }),
                        ".",
                      ],
                    }),
                    s.premios.map(function (e, s) {
                      return (0,
                      v.jsxs)("div", { children: [s > 0 && (0, v.jsx)(v.Fragment, { children: (0, v.jsx)("div", { style: { borderTop: "dashed 1px rgba(0,0,0,.05)", margin: "10px auto" } }) }), (0, v.jsxs)("div", { className: "row align-items-center", children: [(0, v.jsx)("div", { className: "col-auto", children: (0, v.jsxs)("div", { className: "d-inline-block position-relative text-center py-1", style: { width: 50 }, children: [(0, v.jsx)("span", { style: { top: 8, right: -3, fontSize: s ? 11 : 12, color: "rgba(0,0,0,.6)" }, className: "d-block position-absolute", children: s + 1 }), (0, v.jsx)("i", { className: "bi bi-trophy ".concat(s ? "text-success" : "text-warning"), style: { fontSize: [30,
                                              25, 20, 15][s] || 15 } })] }) }), (0, v.jsx)("div", { className: "col font-weight-600", children: (0, v.jsx)("span", { style: { fontSize: s ? 14 : 20 }, children: e.premio }) })] })] }, "premio-".concat(s));
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var R = a(6858),
        B = a(8476);
      function M(e) {
        var s = e.ganhador;
        return (0, v.jsx)("div", {
          className: "app-card card bg-success text-white mb-2 pointer",
          children: (0, v.jsx)("div", {
            className: "card-body p-2",
            children: (0, v.jsxs)("div", {
              className: "row align-items-center",
              children: [
                (0, v.jsx)("div", {
                  className: "col-auto pe-0",
                  children: (0, v.jsx)("div", {
                    className: "rounded",
                    style: {
                      width: 70,
                      height: 70,
                      position: "relative",
                      overflow: "hidden",
                    },
                    children: (0, v.jsx)(y.default, {
                      unoptimized: !0,
                      src: s.foto,
                      alt: s.nome,
                      layout: "fill",
                    }),
                  }),
                }),
                (0, v.jsxs)("div", {
                  className: "col",
                  children: [
                    (0, v.jsxs)("h5", {
                      className: "mb-0",
                      children: [
                        s.nome.split(" ").slice(0, 2).join(" "),
                        "\xa0",
                        (0, v.jsx)("i", {
                          className: "bi bi-check-circle text-white-50",
                        }),
                      ],
                    }),
                    (0, v.jsx)("div", {
                      className: "text-white opacity-75",
                      children: (0, v.jsxs)("small", {
                        children: [
                          "Ganhador(a) com o n\xfamero da sorte ",
                          (0, v.jsx)("b", { children: s.cota }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function U(e) {
        var s = e.sorteio;
        return (0, v.jsx)("div", {
          id: "modal-ganhadores-sorteio",
          className: "modal fade",
          children: (0, v.jsx)("div", {
            className: "modal-dialog modal-dialog-centered",
            children: (0, v.jsxs)("div", {
              className: "modal-content",
              children: [
                (0, v.jsxs)("div", {
                  className: "modal-header",
                  children: [
                    (0, v.jsx)("h3", {
                      className: "modal-title",
                      children: "Ganhadores",
                    }),
                    (0, v.jsx)("button", {
                      type: "button",
                      className: "btn-close",
                      "data-bs-dismiss": "modal",
                      "aria-label": "Close",
                    }),
                  ],
                }),
                (0, v.jsx)("div", {
                  className: "modal-body",
                  children: s.ganhadores.map(function (e, s) {
                    return (0,
                    v.jsx)("div", { className: "shadow-sm mb-2 rounded p-2", children: (0, v.jsxs)("div", { className: "row align-items-center", children: [(0, v.jsx)("div", { className: "col-auto text-center pe-0", style: { fontSize: 55 }, children: (0, v.jsx)("div", { className: "font-weight-600", style: { width: 50 }, children: e.nivel }) }), (0, v.jsxs)("div", { className: "col", children: [(0, v.jsx)("div", { className: "font-weight-600 mb-1", children: e.nome.split(" ").slice(0, 2).join(" ") }), (0, v.jsxs)("div", { children: [(0, v.jsx)("b", { children: "Pr\xeamio: " }), " ", e.premio] }), (0, v.jsxs)("div", { children: [(0, v.jsx)("b", { children: "T\xedtulo:" }), " ", e.cota] })] })] }) }, "ganhador-".concat(s));
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function z(e) {
        var s = e.sorteio;
        function a(e) {
          window.open(e, "_blank");
        }
        return (0, v.jsxs)("div", {
          className: "item d-flex align-items-center box-share-sorteio",
          children: [
            (0, v.jsx)("div", {
              alt: "Compartilhe no Facebook",
              onClick: function () {
                (0, u.Ko)("BtnFacebook", { contents_id: s.id }),
                  a("https://www.facebook.com/sharer/sharer.php?u=" + s.url);
              },
              className: x().sorteioShareLinkFacebook,
              children: (0, v.jsx)("i", { className: "bi bi-facebook" }),
            }),
            (0, v.jsx)("div", {
              alt: "Compartilhe no Telegram",
              onClick: function () {
                (0, u.Ko)("BtnTelegram", { contents_id: s.id }),
                  a("https://t.me/share/url?url=" + s.url + "&text=" + s.title);
              },
              className: x().sorteioShareLinkTelegram,
              children: (0, v.jsx)("i", { className: "bi bi-telegram" }),
            }),
            (0, v.jsx)("div", {
              alt: "Compartilhe no Twitter",
              onClick: function () {
                (0, u.Ko)("BtnTwitter", { contents_id: s.id }),
                  a("https://www.twitter.com/share?url=" + s.url);
              },
              className: x().sorteioShareLinkTwitter,
              children: (0, v.jsx)("i", { className: "bi bi-twitter" }),
            }),
            (0, v.jsx)("div", {
              alt: "Compartilhe no WhatsApp",
              onClick: function () {
                (0, u.Ko)("BtnWhatsApp", { contents_id: s.id }),
                  a(
                    "https://wa.me/?text=" +
                      (null === s || void 0 === s ? void 0 : s.title) +
                      ": " +
                      s.url
                  );
              },
              className: x().sorteioShareLinkWhatsApp,
              children: (0, v.jsx)("i", { className: "bi bi-whatsapp" }),
            }),
          ],
        });
      }
      function W(e) {
        return K.apply(this, arguments);
      }
      function K() {
        return (K = (0, r.Z)(
          o().mark(function e(s) {
            var a;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      !(a = document.getElementById(s)) ||
                      "object" !== typeof window.bootstrap
                    ) {
                      e.next = 5;
                      break;
                    }
                    return (
                      bootstrap.Modal.getOrCreateInstance(a).show(),
                      e.abrupt("return", !0)
                    );
                  case 5:
                    return e.abrupt("return", !1);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var V = a(1655),
        H = a(9127);
      function $(e) {
        var s = e.sorteio,
          a = e.app,
          t = (0, l.useState)([]),
          n = t[0],
          i = t[1],
          c = (0, l.useState)(!1),
          m = c[0],
          u = c[1];
        function p(e) {
          var s = [];
          return (
            Object.keys(e).forEach(function (a) {
              return s.push("".concat(a, "=").concat(e[a]));
            }),
            s.join("&")
          );
        }
        function h() {
          return (h = (0, r.Z)(
            o().mark(function e(a) {
              var t, n;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      a.preventDefault(),
                        x({
                          telefone:
                            (null === (t = a.target.telefone) || void 0 === t
                              ? void 0
                              : t.value) || null,
                          cpf:
                            (null === (n = a.target.cpf) || void 0 === n
                              ? void 0
                              : n.value) || null,
                          sorteio: s.token,
                        });
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function x(e) {
          return f.apply(this, arguments);
        }
        function f() {
          return (f = (0, r.Z)(
            o().mark(function e(s) {
              var a;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (m) {
                          e.next = 20;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          i([]),
                          u(!0),
                          (e.next = 6),
                          (0, d.Z)()
                            .get("/ver-numeros?" + p(s))
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              var s,
                                a = e.response;
                              throw new Error(
                                (null === a ||
                                void 0 === a ||
                                null === (s = a.data) ||
                                void 0 === s
                                  ? void 0
                                  : s.message) ||
                                  "N\xe3o foi poss\xedvel consultar as compras"
                              );
                            })
                        );
                      case 6:
                        if (1 === (a = e.sent).result) {
                          e.next = 9;
                          break;
                        }
                        throw new Error(a.message);
                      case 9:
                        i(a.compras), A().start(), (e.next = 16);
                        break;
                      case 13:
                        (e.prev = 13), (e.t0 = e.catch(1)), alert(e.t0.message);
                      case 16:
                        return (e.prev = 16), A().done(), u(!1), e.finish(16);
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 13, 16, 20]]
              );
            })
          )).apply(this, arguments);
        }
        return (
          (0, l.useEffect)(function () {
            document
              .getElementById("modal-consultaCompras")
              .addEventListener("show.bs.modal", function () {
                var e = w.Z.getUsers();
                e.length && x({ userToken: e[0].token, sorteio: s.token });
              });
          }, []),
          (0, v.jsx)("div", {
            className: "modal fade",
            id: "modal-consultaCompras",
            children: (0, v.jsx)("div", {
              className: "modal-dialog modal-md",
              children: (0, v.jsxs)("div", {
                className: "modal-content",
                children: [
                  (0, v.jsxs)("form", {
                    onSubmit: function (e) {
                      return h.apply(this, arguments);
                    },
                    children: [
                      (0, v.jsxs)("div", {
                        className: "modal-header",
                        children: [
                          (0, v.jsx)("h6", {
                            className: "modal-title",
                            children: "Consulta de compras",
                          }),
                          (0, v.jsx)("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close",
                          }),
                        ],
                      }),
                      (0, v.jsxs)("div", {
                        className: "modal-body",
                        children: [
                          -1 !== a.campo_consulta.indexOf("telefone") &&
                            (0, v.jsxs)("div", {
                              className: "form-group",
                              children: [
                                (0, v.jsx)("label", {
                                  className: "form-label",
                                  children: "Informe seu telefone",
                                }),
                                (0, v.jsxs)("div", {
                                  className: "input-group mb-2",
                                  children: [
                                    (0, v.jsx)(g.Z, {
                                      className: "form-control",
                                      "aria-label": "N\xfamero de telefone",
                                      id: "tel",
                                      name: "telefone",
                                      disabled: m,
                                      required: !0,
                                    }),
                                    "telefone" == a.campo_consulta &&
                                      (0, v.jsx)("button", {
                                        className: "btn btn-secondary",
                                        type: "submit",
                                        id: "button-addon2",
                                        children: (0, v.jsx)("div", {
                                          className: m ? "spin-animation" : "",
                                          children: m
                                            ? (0, v.jsx)("i", {
                                                className: "bi bi-arrow-repeat",
                                              })
                                            : (0, v.jsx)("i", {
                                                className: "bi bi-check-circle",
                                              }),
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          -1 !== a.campo_consulta.indexOf("cpf") &&
                            (0, v.jsxs)("div", {
                              className: "form-group",
                              children: [
                                (0, v.jsx)("label", {
                                  className: "form-label",
                                  children: "Informe seu cpf",
                                }),
                                (0, v.jsxs)("div", {
                                  className: "input-group mb-2",
                                  children: [
                                    (0, v.jsx)(S.Z, {
                                      className: "form-control",
                                      "aria-label": "N\xfamero do CPF",
                                      id: "cpf",
                                      name: "cpf",
                                      disabled: m,
                                      required: !0,
                                    }),
                                    (0, v.jsx)("button", {
                                      className: "btn btn-secondary",
                                      type: "submit",
                                      id: "button-addon2",
                                      children: (0, v.jsx)("div", {
                                        className: m ? "spin-animation" : "",
                                        children: m
                                          ? (0, v.jsx)("i", {
                                              className: "bi bi-arrow-repeat",
                                            })
                                          : (0, v.jsx)("i", {
                                              className: "bi bi-check-circle",
                                            }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  n.length && !m
                    ? (0, v.jsx)("div", {
                        children: (0, v.jsx)("div", {
                          className: "modal-body border-top compras-resultado",
                          children: n.map(function (e) {
                            return (0,
                            v.jsx)("div", { children: (0, v.jsx)(H.Z, { compra: e }) }, "compra-item-".concat(e.token));
                          }),
                        }),
                      })
                    : m &&
                      (0, v.jsxs)("div", {
                        className: "modal-body pt-0 compras-resultado",
                        children: [
                          (0, v.jsx)("hr", { className: "mt-0" }),
                          (0, v.jsxs)("div", {
                            className: "compraInfo",
                            children: [
                              (0, v.jsxs)("div", {
                                className: "compraHeader mb-2",
                                children: [
                                  (0, v.jsx)("h3", {
                                    className: "compraId mb-0",
                                    children: (0, v.jsx)(V.ZP, {}),
                                  }),
                                  (0, v.jsx)("small", {
                                    children: (0, v.jsx)(V.ZP, {}),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)("div", {
                                className: "compraContent font-xs",
                                children: [
                                  (0, v.jsx)("div", {
                                    className: "nome",
                                    children: (0, v.jsx)("span", {
                                      className: "me-1 font-weight-600",
                                      children: (0, v.jsx)(V.ZP, {}),
                                    }),
                                  }),
                                  (0, v.jsx)("div", {
                                    className: "telefone",
                                    children: (0, v.jsx)("span", {
                                      className: "me-1 font-weight-600",
                                      children: (0, v.jsx)(V.ZP, {}),
                                    }),
                                  }),
                                  (0, v.jsx)("div", {
                                    className: "email",
                                    children: (0, v.jsx)("span", {
                                      className: "me-1 font-weight-600",
                                      children: (0, v.jsx)(V.ZP, {}),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
            }),
          })
        );
      }
      function G(e) {
        var s = e.porcentagem,
          a = (0, c.v9)(function (e) {
            return e.user;
          }),
          t = (0, l.useState)(null),
          n = t[0],
          r = t[1];
        function i() {
          return a.user;
        }
        return (
          (0, l.useEffect)(function () {
            var e = setInterval(function () {
              i()
                ? r(
                    (function () {
                      var e;
                      return i()
                        ? "https://" +
                            window.location.host +
                            "/afiliado/indicacao#" +
                            (null === (e = i()) || void 0 === e
                              ? void 0
                              : e.token)
                        : null;
                    })()
                  )
                : r(null);
            }, 500);
            return function () {
              clearInterval(e);
            };
          }, []),
          (0, v.jsx)("div", {
            className: "modal fade",
            id: "modal-indique",
            children: (0, v.jsx)("div", {
              className: "modal-dialog modal-dialog-centered modal-lg",
              children: (0, v.jsxs)("div", {
                className: "modal-content",
                children: [
                  (0, v.jsxs)("div", {
                    className: "modal-header",
                    children: [
                      (0, v.jsx)("h5", {
                        className: "modal-title",
                        children: "Indique e ganhe!",
                      }),
                      (0, v.jsx)("button", {
                        type: "button",
                        className: "btn-close",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                      }),
                    ],
                  }),
                  (0, v.jsxs)("div", {
                    className: "modal-body text-center",
                    children: [
                      n &&
                        (0, v.jsxs)(v.Fragment, {
                          children: [
                            (0, v.jsx)("div", {
                              className: "mb-2",
                              children: (0, v.jsx)("i", {
                                className:
                                  "bi bi-currency-dollar font-lgg text-success",
                              }),
                            }),
                            (0, v.jsxs)("p", {
                              children: [
                                (0, v.jsx)("span", {
                                  children:
                                    "Indique um amigo com o seu link de compartilhamento e ganhe at\xe9 ",
                                }),
                                (0, v.jsxs)("span", {
                                  children: [
                                    (0, p.bC)(s),
                                    "% de volta em cr\xe9ditos.",
                                  ],
                                }),
                              ],
                            }),
                            (0, v.jsxs)("div", {
                              className: "input-group mb-3",
                              children: [
                                (0, v.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  defaultValue: n,
                                  "aria-label": "Link de compartilhamento",
                                  "aria-describedby": "button-addon2",
                                }),
                                (0, v.jsx)("button", {
                                  className: "btn btn-outline-secondary",
                                  type: "button",
                                  id: "button-addon2",
                                  onClick: function () {
                                    n &&
                                      ((0, p.vQ)(n),
                                      alert(
                                        "URL copiada com sucesso, agora \xe9 s\xf3 compartilhar com seu amigos"
                                      ));
                                  },
                                  children: (0, v.jsx)("i", {
                                    className: "bi bi-clipboard",
                                  }),
                                }),
                              ],
                            }),
                            (0, v.jsx)("p", {
                              children:
                                "Ap\xf3s o seu amigo efetuar a compra e ela for confirmada, voc\xea ganha os cr\xe9ditos de volta na mesma hora.",
                            }),
                          ],
                        }),
                      !n &&
                        (0, v.jsxs)(v.Fragment, {
                          children: [
                            "Fa\xe7a login para ter seu link de indica\xe7\xe3o, e ganhe at\xe9 ",
                            (0, p.bC)(s),
                            "% de cr\xe9ditos nas compras aprovadas!",
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function Q(e) {
        var s = e.sorteio,
          a = s.tt,
          t = s.titulos_premiados,
          n = s.titulos_premiados_mostrar,
          r = t.filter(function (e) {
            return !e.ganhador;
          }),
          i = t.filter(function (e) {
            return e.ganhador;
          }),
          o = (0, l.useState)(!0),
          c = o[0],
          d = o[1],
          m = (0, l.useState)(t),
          u = m[0],
          p = m[1];
        function h(e) {
          var s = e.v,
            a = !!s.ganhador || "";
          return (0, v.jsxs)("div", {
            className:
              "app-titulos-premiados--item " +
              (a && "app-titulos-premiados--selected"),
            children: [
              s.numero &&
                (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsxs)("div", {
                    className:
                      "app-titulos-premiados--titulo badge text-bg-secondary " +
                      (a && "text-bg-light"),
                    children: [
                      (0, v.jsx)("i", {
                        className: "bi bi-ticket".concat(a && "-fill"),
                      }),
                      " ",
                      s.numero,
                    ],
                  }),
                }),
              (0, v.jsx)("div", {
                className: "app-titulos-premiados--premiacao",
                children: s.premio,
              }),
              n &&
                (0, v.jsxs)("div", {
                  className: "app-titulos-premiados--ganhador",
                  children: [
                    s.ganhador &&
                      (0, v.jsxs)("span", {
                        children: [
                          s.ganhador.nome,
                          " ",
                          (0, v.jsx)("i", {
                            className: "bi bi-trophy-fill text-warning",
                          }),
                        ],
                      }),
                    !s.ganhador &&
                      (0, v.jsx)("span", { children: "Dispon\xedvel" }),
                  ],
                }),
            ],
          });
        }
        return t.length
          ? (0, v.jsxs)("div", {
              id: "titulos-premiados",
              className: "app-titulos-premiados",
              children: [
                (0, v.jsxs)("div", {
                  className: "row mb-2 align-items-center",
                  children: [
                    (0, v.jsx)("div", {
                      className: "col",
                      children: (0, v.jsx)("div", {
                        className: "app-title m-0 d-block",
                        children: (0, v.jsxs)("div", {
                          className: "row align-items-center",
                          children: [
                            (0, v.jsx)("div", {
                              className: "col-auto pe-0",
                              children: (0, v.jsxs)("h1", {
                                className: "m-0",
                                style: { fontSize: 30 },
                                children: [
                                  "caixa" == a && "\ud83c\udf81",
                                  "roleta" == a && "\ud83c\udfaf",
                                  "titulos" == a && "\ud83c\udfc6",
                                ],
                              }),
                            }),
                            (0, v.jsxs)("div", {
                              className: "col ps-0",
                              children: [
                                (0, v.jsxs)("h1", {
                                  className: "m-0",
                                  children: [
                                    "caixa" == a && "Caixas",
                                    "roleta" == a && "Roletas",
                                    "titulos" == a && "T\xedtulos",
                                  ],
                                }),
                                (0, v.jsx)("div", {
                                  className: "app-title-desc pt-0",
                                  children: "pr\xeamios instant\xe2neos",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: "col-auto",
                      children: (0, v.jsxs)("div", {
                        className: "btn bg-gradient-blue text-white rounded",
                        style: { border: "none", outline: "none" },
                        onClick: function () {
                          return [p(t), d(!0)];
                        },
                        children: [
                          (0, v.jsx)("small", {
                            className: "opacity-75",
                            children: "Total ",
                          }),
                          (0, v.jsx)("span", {
                            className: "font-weight-600",
                            children: t.length,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, v.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, v.jsx)("div", {
                      className: "col-6",
                      children: (0, v.jsxs)("div", {
                        className:
                          "btn btn-sm bg-gradient-green2 text-white mb-2 w-100",
                        style: { border: "none", outline: "none" },
                        onClick: function () {
                          return r.length && [p(r), d(!0)];
                        },
                        children: [
                          "Dispon\xedveis ",
                          (0, v.jsx)("span", { children: r.length }),
                        ],
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: "col-6",
                      children: (0, v.jsxs)("div", {
                        className:
                          "btn btn-sm bg-gradient-pink text-white mb-2 w-100",
                        style: { border: "none", outline: "none" },
                        onClick: function () {
                          return i.length && [p(i), d(!0)];
                        },
                        children: [
                          "Sorteados ",
                          (0, v.jsx)("span", {
                            className: "fw-bold",
                            children: i.length,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, v.jsx)("div", {
                  className:
                    "app-titulos-premiados--lista d-flex flex-column mb-2 font-xs",
                  children: u.slice(0, c ? 10 : u.length).map(function (e, s) {
                    return (0, v.jsx)(h, { v: e }, "titulo-".concat(s));
                  }),
                }),
                u.length > 10 &&
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      c &&
                        (0, v.jsxs)("button", {
                          className: "btn btn-sm btn-primary w-100 mb-2",
                          onClick: function () {
                            return d(!1);
                          },
                          children: [
                            (0, v.jsx)("i", {
                              className: "bi bi-arrow-down-circle",
                            }),
                            " Ver mais",
                          ],
                        }),
                      !c &&
                        (0, v.jsxs)("button", {
                          className: "btn btn-sm btn-primary w-100 mb-2",
                          onClick: function () {
                            return d(!0);
                          },
                          children: [
                            (0, v.jsx)("i", {
                              className: "bi bi-arrow-up-circle",
                            }),
                            " Ver menos",
                          ],
                        }),
                    ],
                  }),
              ],
            })
          : null;
      }
      function J(e) {
        var s = e.sorteio,
          a = s.tt,
          t = s.titulos_premiados,
          n = s.titulos_premiados_mostrar;
        return t.length
          ? t.length >= 50
            ? (0, v.jsx)(Q, { sorteio: s })
            : (0, v.jsxs)("div", {
                id: "titulos-premiados",
                className: "app-titulos-premiados",
                children: [
                  (0, v.jsxs)("div", {
                    className: "app-title mb-2",
                    children: [
                      (0, v.jsxs)("h1", {
                        children: [
                          "caixa" == a && "\ud83c\udf81 Caixas",
                          "roleta" == a && "\ud83c\udfaf Roletas",
                          "titulos" == a && "\ud83c\udfc6 T\xedtulos",
                        ],
                      }),
                      (0, v.jsx)("div", {
                        className: "app-title-desc",
                        children: "pr\xeamios instant\xe2neos",
                      }),
                    ],
                  }),
                  (0, v.jsx)("div", {
                    className:
                      "app-titulos-premiados--lista d-flex flex-column mb-2 font-xs",
                    children: t.map(function (e, s) {
                      return (0,
                      v.jsxs)("div", { className: "app-titulos-premiados--item " + (e.ganhador ? "app-titulos-premiados--selected" : ""), children: [e.numero && (0, v.jsx)(v.Fragment, { children: (0, v.jsx)("div", { className: "app-titulos-premiados--titulo badge " + (e.ganhador ? "text-bg-light" : "text-bg-secondary"), children: e.numero }) }), (0, v.jsx)("div", { className: "app-titulos-premiados--premiacao", children: e.premio }), n && (0, v.jsxs)("div", { className: "app-titulos-premiados--ganhador", children: [e.ganhador && (0, v.jsxs)("span", { children: [e.ganhador.nome, " ", (0, v.jsx)("i", { className: "bi bi-trophy-fill text-warning" })] }), !e.ganhador && (0, v.jsx)("span", { children: "Dispon\xedvel" })] })] }, "titulo-premiado-" + s);
                    }),
                  }),
                ],
              })
          : null;
      }
      function Y(e) {
        var s = e.topCompradores;
        if (!s) return null;
        return (0, v.jsxs)("div", {
          id: "top-compradores",
          children: [
            (0, v.jsxs)("div", {
              className: "app-title",
              children: [
                (0, v.jsxs)("h1", { children: ["\ud83d\udd1d ", s.title] }),
                s.datahora &&
                  (0, v.jsx)("div", {
                    className: "app-title-desc",
                    children: s.datahora,
                  }),
              ],
            }),
            (0, v.jsx)("div", {
              className: "topCompradores",
              children: s.compradores.map(function (e) {
                return (0,
                v.jsx)("div", { className: "--item mb-2", children: (0, v.jsxs)("div", { className: "row align-items-center", children: [(0, v.jsx)("div", { className: "col-auto pr-0", children: (0, v.jsx)("div", { className: "--item-colocacao", children: e.ordem }) }), (0, v.jsx)("div", { className: "col p-0", children: (0, v.jsxs)("div", { className: "--item-user", children: [(0, v.jsx)("div", { className: "--item-nome", children: e.user.nome }), (0, v.jsx)("small", { className: "--item-telefone", children: e.user.telefone })] }) }), (0, v.jsx)("div", { className: "col-auto", children: (0, v.jsxs)("div", { className: "--item-quantidade", children: [(0, v.jsx)("small", { className: "font-xss", children: "t\xedtulos" }), (0, v.jsx)("span", { children: ((s = e.quantidade), (0, p.AZ)(s, 0, "", ".")) })] }) })] }) }, "topComprador:".concat(e.ordem));
                var s;
              }),
            }),
          ],
        });
      }
      function X(e) {
        var s = e.sorteio,
          a = e.openCheckout,
          t = e.getTotal,
          n = e.setQuantidade,
          r = (0, u.eJ)(s.btc, ["quantidade", "caixas", "principal"]);
        return !r || s.status.acabou
          ? null
          : (0, v.jsx)("div", {
              className: "mb-1",
              children: r.map(function (e) {
                return (0, v.jsx)(
                  "div",
                  {
                    className: "mb-1",
                    onClick: function () {
                      return [n(e.quantidade), a()];
                    },
                    children: (0, v.jsxs)("div", {
                      className: "btn w-100 text-center lh-1 ".concat(
                        e.principal
                          ? "bg-gradient-pink text-white"
                          : "bg-gradient-blue text-white"
                      ),
                      children: [
                        (0, v.jsxs)("div", {
                          className: "row mb-1 font-xs",
                          children: [
                            (0, v.jsxs)("div", {
                              className: "col pe-0 ps-0",
                              children: [
                                (0, v.jsxs)("div", {
                                  children: [e.quantidade, " T\xedtulos"],
                                }),
                                (0, v.jsxs)("div", {
                                  className: "opacity-75 font-xs",
                                  children: [
                                    (0, v.jsx)("small", {
                                      children: "por R$ ",
                                    }),
                                    (0, p.bC)(t(e.quantidade)),
                                  ],
                                }),
                              ],
                            }),
                            (0, v.jsxs)("div", {
                              className: "col-auto",
                              children: [
                                (0, v.jsxs)("div", {
                                  children: ["Recebe ", e.caixas],
                                }),
                                (0, v.jsxs)("div", {
                                  className: "font-xs",
                                  children: [
                                    "caixa" == s.tt ? "Caixas" : "Roletas",
                                    " Instant\xe2neas",
                                  ],
                                }),
                              ],
                            }),
                            (0, v.jsx)("div", {
                              className: "col-auto",
                              style: { fontSize: 30 },
                              children:
                                "caixa" == s.tt
                                  ? "\ud83c\udf81"
                                  : "\ud83c\udfaf",
                            }),
                          ],
                        }),
                        (0, v.jsx)("div", {
                          className: "row font-xss opacity-75",
                          children: (0, v.jsxs)("div", {
                            className: "col-12 font-xss",
                            children: [
                              e.quantidade,
                              " chance(s) de contempla\xe7\xe3o nas ",
                              "caixa" == s.tt ? "Caixas" : "Roletas",
                              " Instant\xe2neas.",
                            ],
                          }),
                        }),
                      ],
                    }),
                  },
                  "btc-".concat(e.quantidade)
                );
              }),
            });
      }
      function ee(e) {
        var s = e.sorteio,
          a = (0, l.useState)((0, u.Z5)(s)),
          t = a[0],
          n = a[1];
        return (
          (0, l.useEffect)(function () {
            setInterval(function () {
              n((0, u.Z5)(s));
            }, 1e3);
          }, []),
          t && s.promoDobro
            ? (0, v.jsx)("div", {
                className: "app-card card mb-2 bg-gradient-pink",
                children: (0, v.jsxs)("div", {
                  className: "card-body text-center",
                  children: [
                    (0, v.jsx)("p", {
                      className: "text-white mb-1",
                      children: (0, v.jsx)("b", {
                        children: "\ud83d\udd25 Chance em dobro! \ud83d\udd25",
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: "progress bg-dark bg-opacity-25",
                      role: "progressbar",
                      "aria-label": "Dobro de t\xedtulos",
                      "aria-valuenow": "10",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                      style: { height: "2rem" },
                      children: (0, v.jsx)("div", {
                        className:
                          "progress-bar text-uppercase overflow-visible bg-danger text-white font-weight-600 progress-bar-striped progress-bar-animated p-2",
                        style: { width: t.porcentagem + "%" },
                        children: (0, v.jsx)("span", {
                          className: "blink",
                          children: t.mensagem,
                        }),
                      }),
                    }),
                    (0, v.jsx)("p", {
                      className:
                        "mt-1 mb-0 font-xss text-white opacity-75 font-weight-500",
                      children: "Compre agora e ganhe o dobro!",
                    }),
                    (0, v.jsxs)("p", {
                      className:
                        "mt-1 mb-0 font-xsss text-white opacity-75 font-weight-500",
                      children: [
                        "V\xe1lido de ",
                        (0, u.p6)(s.promoDobro.inicio),
                        " a ",
                        (0, u.p6)(s.promoDobro.fim),
                      ],
                    }),
                  ],
                }),
              })
            : null
        );
      }
      function se(e) {
        var s = e.livres,
          a = e.reservados,
          t = e.pagos,
          n = e.setStatus;
        return (0, v.jsx)("div", {
          className: "sorteio-seletor mb-2 overflowh",
          children: (0, v.jsxs)("div", {
            className: "d-flex justify-content-between font-weight-600",
            children: [
              (0, v.jsxs)("div", {
                className:
                  "seletor-item rounded d-flex justify-content-between box-shadow-08 font-xs",
                onClick: function () {
                  return n(3);
                },
                children: [
                  (0, v.jsx)("div", {
                    className: "nome bg-white rounded-start text-dark p-2",
                    children: "Livres",
                  }),
                  (0, v.jsx)("div", {
                    className: "num bg-cota text-white p-2 rounded-end",
                    children: s,
                  }),
                ],
              }),
              (0, v.jsxs)("div", {
                className:
                  "seletor-item rounded d-flex justify-content-between box-shadow-08 font-xs",
                onClick: function () {
                  return n(0);
                },
                children: [
                  (0, v.jsx)("div", {
                    className: "nome bg-white rounded-start text-dark p-2",
                    children: "Reservas",
                  }),
                  (0, v.jsx)("div", {
                    className: "num bg-info text-white p-2 rounded-end",
                    children: a,
                  }),
                ],
              }),
              (0, v.jsxs)("div", {
                className:
                  "seletor-item rounded d-flex justify-content-between box-shadow-08 font-xs",
                onClick: function () {
                  return n(1);
                },
                children: [
                  (0, v.jsx)("div", {
                    className: "nome bg-white rounded-start text-dark p-2",
                    children: "Pagos",
                  }),
                  (0, v.jsx)("div", {
                    className: "num bg-success text-white p-2 rounded-end",
                    children: t,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function ae(e) {
        var s,
          a = e.sorteio,
          t = e.app,
          i = e.lojista,
          h = e.linkAfiliado,
          f = a.isPromocoes,
          b = (0, l.useState)(null),
          g = b[0],
          N = b[1],
          w = f ? "chances" : "cotas",
          y = (0, u.B6)(a),
          k = (0, l.useState)(y.minimoCotas || 1),
          _ = k[0],
          C = k[1],
          S = (0, c.v9)(function (e) {
            return e.carrinho;
          }),
          F = (0, c.I0)(),
          A = !(null === a || void 0 === a || !a.progressbar),
          O = (0, l.useState)(null),
          E = O[0],
          T = O[1],
          D = (0, l.useState)([]),
          I = D[0],
          K = D[1],
          V = null === a || void 0 === a ? void 0 : a.vex,
          H = !(null !== a && void 0 !== a && a.valor),
          Q = (0, u.eJ)(a.vls, ["qtde", "valor"]) || [],
          ae = (0, u.eJ)(a.btq, ["quantidade", "principal"]) || [],
          te = (0, l.useState)(y.apenas_disponiveis ? 3 : null),
          ne = te[0],
          re = te[1],
          ie = (0, l.useState)(""),
          oe = ie[0],
          le = ie[1];
        function ce() {
          return Q.filter(function (e) {
            var s = e.qtde;
            return !y.limiteCotas || y.limiteCotas >= s;
          });
        }
        function de(e) {
          return me.apply(this, arguments);
        }
        function me() {
          return (me = (0, r.Z)(
            o().mark(function e(s) {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (0, d.Z)()
                          .get(
                            s.urlNumeros.replace(
                              "/lista-numeros.php",
                              "/n.php"
                            ) + new Date().getTime()
                          )
                          .then(function (e) {
                            var s = e.data;
                            if ("object" === typeof s) {
                              var a = (0, u.SJ)(s.n),
                                t = y.pagos;
                              return {
                                pagos: t,
                                reservados: y.total_numeros - a - t,
                                livres: a,
                              };
                            }
                            return (
                              ("string" === typeof s &&
                                "" !== s &&
                                s.split("\n").map(function (e) {
                                  var s = e.split(";");
                                  return {
                                    nome: s[0],
                                    numeros: s[1].split(",").map(function (e) {
                                      return parseInt(e);
                                    }),
                                    status: parseInt(s[2]),
                                  };
                                })) ||
                              []
                            );
                          })
                          .then(function (e) {
                            var s = {};
                            return Array.isArray(e)
                              ? (e.forEach(function (e) {
                                  e.numeros.forEach(function (a) {
                                    s[a] = {
                                      numero: a,
                                      nome: e.nome,
                                      status: e.status,
                                    };
                                  });
                                }),
                                s)
                              : e;
                          })
                          .then(function (e) {
                            if (V) return e;
                            for (var s = [], a = y.inicial; a <= y.final; a++)
                              s.push(
                                e[a.toString()] || {
                                  numero: a,
                                  nome: null,
                                  status: 3,
                                }
                              );
                            return s;
                          })
                          .catch(function (e) {
                            var s, a;
                            throw (
                              (console.log(e),
                              new Error(
                                (null === (s = e.response) ||
                                void 0 === s ||
                                null === (a = s.data) ||
                                void 0 === a
                                  ? void 0
                                  : a.message) ||
                                  "N\xe3o foi poss\xedvel recuperar a lista de n\xfameros do sorteio"
                              ))
                            );
                          })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function ue() {
          return g
            ? Array.isArray(g)
              ? g.filter(function (e) {
                  return 0 == e.status;
                }).length
              : g.reservados
            : 0;
        }
        function pe() {
          return g
            ? Array.isArray(g)
              ? g.filter(function (e) {
                  return 3 == e.status;
                }).length
              : g.livres
            : 0;
        }
        function he() {
          return g
            ? Array.isArray(g)
              ? g.filter(function (e) {
                  return 1 == e.status;
                }).length
              : g.pagos
            : 0;
        }
        function xe(e, s) {
          s && (0, u.Ko)(s), window.open(e, "_blank");
        }
        function fe(e) {
          le("");
          var s = document.getElementById("input-filtro");
          s && (s.value = ""), re(e === ne ? null : e);
        }
        function be() {
          return S.numeros;
        }
        function ve() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          try {
            if ((e || (e = _), y.limiteCotas > 0 && e > y.limiteCotas))
              throw new Error(
                "Sorteio permite apenas a compra de "
                  .concat(y.limiteCotas, " ")
                  .concat(w)
              );
            V || F((0, m.Vt)()), C(e), ge();
          } catch (s) {
            alert(s.message);
          }
        }
        function je() {
          var e = "Participar do sorteio";
          if (
            ((H || f) && (e = "Quero participar"),
            null !== a && void 0 !== a && a.isActive)
          )
            return (0, v.jsx)("button", {
              className: "btn btn-success w-100 py-2 ".concat(
                H ? "btn-lg" : ""
              ),
              onClick: ge,
              children: (0, v.jsxs)("div", {
                className: "row align-items-center",
                style: { lineHeight: "85%" },
                children: [
                  (0, v.jsxs)("div", {
                    className: "col pe-0 text-nowrap",
                    children: [
                      (0, v.jsx)("i", {
                        className: "bi bi-check2-circle me-1",
                      }),
                      (0, v.jsx)("span", { children: e }),
                    ],
                  }),
                  !H &&
                    (0, v.jsx)("div", {
                      className: "col-auto ps-0",
                      children: (0, v.jsxs)("div", {
                        className: "pe-3",
                        children: [
                          (0, v.jsxs)("div", {
                            children: [
                              (0, v.jsx)("small", { children: "R$" }),
                              " ",
                              (0, p.bC)(_e()),
                            ],
                          }),
                          a.calc_tarifa &&
                            (0, v.jsxs)("small", {
                              style: { fontSize: 10 },
                              children: ["por t\xedtulo R$ ", (0, p.bC)(Ne())],
                            }),
                        ],
                      }),
                    }),
                ],
              }),
            });
        }
        function ge() {
          V
            ? (0, u.Ko)("AddToCart", {
                content_ids: [a.id],
                num_items: ke(),
                currency: "BRL",
                value: _e(),
              })
            : (0, u.Ko)("BtnParticipar", {
                content_ids: [a.id],
                num_items: ke(),
                currency: "BRL",
                value: _e(),
              });
          var e = document.getElementById("modal-checkout");
          if (e) {
            var s = bootstrap.Modal.getOrCreateInstance(e);
            s && s.show();
          }
        }
        function Ne(e) {
          return void 0 == e && (e = ke() || y.minimoCotas), we(e) / e;
        }
        function we(e) {
          void 0 === e && (e = "grupo" == a.tiposorteio ? 4 : 1);
          var s =
            (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                s = a.valor;
              return (
                Q.forEach(function (a) {
                  var t = a.qtde,
                    n = a.valor;
                  (e || ke()) >= t && (s = n);
                }),
                s
              );
            })(e) * e;
          if (
            a.calc_tarifa &&
            (a.tarifa_real > 0 && (s += a.tarifa_real), a.tarifa > 0)
          ) {
            var t = 100 - a.tarifa;
            s += Math.ceil((s / t) * 1e4) / 100 - s;
          }
          return s;
        }
        function ye(e) {
          var s = Math.min(_ + e, y.limiteCotas, pe()),
            a = Math.min(y.minimoCotas || 1, pe() || 1);
          C(Math.max(a, s));
        }
        function ke() {
          return "grupo" == a.tiposorteio ? 4 * I.length : V ? _ : be().length;
        }
        function _e() {
          return we(ke());
        }
        function Ce(e) {
          if (a.isActive && "livre" === e.status) {
            var s = I.find(function (s) {
              return s.ref == e.ref;
            });
            K(
              s
                ? I.filter(function (s) {
                    return s.ref !== e.ref;
                  })
                : [].concat((0, n.Z)(I), [e])
            );
          }
        }
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (a)
                return (
                  y.minimoCotas != _ && C(y.minimoCotas),
                  (0, u.Ko)("ViewContent", {
                    currency: "BRL",
                    content_ids: a.id,
                    content_name: a.title,
                    content_type: "product",
                    value: a.valor,
                  }),
                  a.exibirCotas &&
                    (0, r.Z)(
                      o().mark(function e() {
                        var s, t;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.prev = 0), (e.next = 3), de(a);
                                case 3:
                                  if (
                                    ((s = e.sent),
                                    N(s),
                                    "grupo" !== a.tiposorteio)
                                  ) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (
                                    (e.next = 8),
                                    (0, d.Z)()
                                      .get("/sorteios/load/grupos")
                                      .then(function (e) {
                                        return e.data;
                                      })
                                      .catch(function (e) {
                                        return [];
                                      })
                                  );
                                case 8:
                                  (t = (t = e.sent).map(function (e) {
                                    var a = e.numeros,
                                      t = s.find(function (e) {
                                        return a.find(function (s) {
                                          return (
                                            e.numero === s && 3 !== e.status
                                          );
                                        });
                                      });
                                    return (
                                      t
                                        ? ((e.status =
                                            1 == t.status
                                              ? "pago"
                                              : "reservado"),
                                          (e.cliente = t.nome))
                                        : ((e.status = "livre"),
                                          (e.cliente = null)),
                                      e
                                    );
                                  })),
                                    T(t);
                                case 11:
                                  e.next = 16;
                                  break;
                                case 13:
                                  (e.prev = 13),
                                    (e.t0 = e.catch(0)),
                                    console.log("ErrorCotas", e.t0);
                                case 16:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 13]]
                        );
                      })
                    )(),
                  F((0, m.NB)(a)),
                  function () {
                    e;
                  }
                );
            },
            [a]
          ),
          (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(
                Z,
                {
                  grupos: I,
                  app: t,
                  quantidade: _,
                  sorteioToken: a.token,
                  sorteio: a,
                  linkAfiliado: h,
                },
                "modal-checkout"
              ),
              (0, v.jsx)(L, { sorteio: a }),
              (0, v.jsx)(R.Z, {
                app: t,
                lojista: i,
                versao: t.versao_site ? t.versao_site : "v1",
                children: (0, v.jsxs)("div", {
                  className: "container app-main",
                  children: [
                    (0, v.jsx)("div", {
                      className: "sorteio-header mb-2",
                      onClick: function (e) {
                        e.preventDefault();
                        var s = document.getElementById("area-compra");
                        s &&
                          window.scrollTo({
                            top: -75 + s.offsetTop,
                            behavior: "smooth",
                          });
                      },
                      children: (0, v.jsx)(B.Z, {
                        app: t,
                        sorteio: a,
                        destaque: !0,
                        click: !1,
                        isGratuito: H,
                      }),
                    }),
                    !H &&
                      (0, v.jsx)("div", {
                        className:
                          "sorteio-preco porApenas font-xs d-flex align-items-center justify-content-center mb-2",
                        children: (0, v.jsxs)("div", {
                          className: "item d-flex align-items-center",
                          children: [
                            (0, v.jsx)("div", {
                              className: "me-1 text-uppercase",
                              children: "Por apenas",
                            }),
                            (0, v.jsxs)("div", {
                              className:
                                "tag btn btn-sm bg-cor-primaria text-cor-primaria-link box-shadow-08",
                              children: ["R$ ", (0, p.bC)(we())],
                            }),
                          ],
                        }),
                      }),
                    (null === (s = a.ganhadores) || void 0 === s
                      ? void 0
                      : s.length) > 0 &&
                      (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)(M, { ganhador: a.ganhadores[0] }),
                          a.ganhadores.length > 1 &&
                            (0, v.jsxs)(v.Fragment, {
                              children: [
                                (0, v.jsxs)("button", {
                                  "data-bs-toggle": "modal",
                                  "data-bs-target": "#modal-ganhadores-sorteio",
                                  className:
                                    "btn btn-sm w-100 btn-light btn-block mb-2",
                                  children: [
                                    (0, v.jsx)("i", {
                                      className: "bi bi-trophy",
                                    }),
                                    " Ver ganhadores",
                                  ],
                                }),
                                (0, v.jsx)(U, { sorteio: a }),
                              ],
                            }),
                        ],
                      }),
                    (0, v.jsxs)("div", {
                      className:
                        "sorteio-share d-flex mb-2 justify-content-between align-items-center",
                      children: [
                        (0, v.jsx)("div", {
                          className: "item d-flex align-items-center font-xs",
                          children:
                            a.dts &&
                            (0, v.jsxs)("div", {
                              children: [
                                (0, v.jsx)("span", {
                                  className: "ms-2 me-1",
                                  children: "Sorteio",
                                }),
                                (0, v.jsx)("div", {
                                  className:
                                    "tag btn btn-sm bg-white bg-opacity-50 font-xss box-shadow-08",
                                  children: (0, u.p6)(a.dts, "dd/mm/yyyy"),
                                }),
                              ],
                            }),
                        }),
                        (0, v.jsx)(z, { sorteio: a }),
                      ],
                    }),
                    (0, v.jsxs)("div", {
                      id: "area-compra",
                      children: [
                        ("sorteio" === a.tiposorteio ||
                          "giro" == a.tiposorteio) &&
                          (0, v.jsxs)(v.Fragment, {
                            children: [
                              a.isActive &&
                                ce().length > 0 &&
                                (0, v.jsxs)("div", {
                                  className: "app-promocao-numeros mb-2",
                                  children: [
                                    (0, v.jsxs)("div", {
                                      className: "app-title mb-2",
                                      children: [
                                        (0, v.jsx)("h1", {
                                          children:
                                            "\ud83d\udce3 Promo\xe7\xe3o",
                                        }),
                                        (0, v.jsx)("div", {
                                          className: "app-title-desc",
                                          children: "Compre mais barato!",
                                        }),
                                      ],
                                    }),
                                    (0, v.jsx)("div", {
                                      className: "app-card card",
                                      children: (0, v.jsx)("div", {
                                        className: "card-body pb-1",
                                        children: (0, v.jsx)("div", {
                                          className: "row px-2",
                                          children: ce().map(function (e, s) {
                                            return (0, v.jsx)(
                                              "div",
                                              {
                                                className: "col-auto px-1 mb-2",
                                                children: (0, v.jsx)("button", {
                                                  className:
                                                    "btn btn-success w-100 btn-sm py-0 px-2 text-nowrap font-xss",
                                                  onClick: function () {
                                                    return ve(e.qtde);
                                                  },
                                                  children: (0, v.jsxs)(
                                                    "span",
                                                    {
                                                      className:
                                                        "font-weight-500",
                                                      children: [
                                                        (0, v.jsx)("b", {
                                                          className:
                                                            "font-weight-600",
                                                          children: e.qtde,
                                                        }),
                                                        " ",
                                                        (0, v.jsx)("small", {
                                                          children: "por R$",
                                                        }),
                                                        " ",
                                                        (0, v.jsx)("span", {
                                                          className:
                                                            "font-weight-600",
                                                          children: (0, p.bC)(
                                                            we(e.qtde)
                                                          ),
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              },
                                              "valores-".concat(s)
                                            );
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              a.exibirCotas &&
                                (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    !f &&
                                      (0, v.jsx)(v.Fragment, {
                                        children: (0, v.jsxs)("div", {
                                          className: "app-title mb-2",
                                          children: [
                                            (0, v.jsxs)("h1", {
                                              style: {
                                                textTransform: "capitalize",
                                              },
                                              children: ["\u26a1 ", w],
                                            }),
                                            (0, v.jsx)("div", {
                                              className: "app-title-desc",
                                              children: "Escolha sua sorte",
                                            }),
                                          ],
                                        }),
                                      }),
                                    g &&
                                      (0, v.jsxs)(v.Fragment, {
                                        children: [
                                          !V &&
                                            (0, v.jsx)(v.Fragment, {
                                              children: (0, v.jsx)(se, {
                                                livres: pe(),
                                                reservados: ue(),
                                                pagos: he(),
                                                setStatus: fe,
                                              }),
                                            }),
                                          (0, v.jsx)("div", {
                                            className: "sorteio-buscas",
                                            children: (0, v.jsxs)("div", {
                                              className: "row row-gutter-sm",
                                              children: [
                                                (0, v.jsx)("div", {
                                                  className: "col",
                                                  children: (0, v.jsxs)("div", {
                                                    className:
                                                      "btn btn-sm btn-secondary box-shadow-08 w-100 mb-2",
                                                    "data-bs-toggle": "modal",
                                                    "data-bs-target":
                                                      "#modal-consultaCompras",
                                                    children: [
                                                      (0, v.jsx)("i", {
                                                        className: "bi bi-cart",
                                                      }),
                                                      " Ver meus ",
                                                      f
                                                        ? "t\xedtulos"
                                                        : "n\xfameros",
                                                    ],
                                                  }),
                                                }),
                                                !a.ganhadores.length &&
                                                  a.premios.length > 1 &&
                                                  (0, v.jsx)("div", {
                                                    className: "col-6",
                                                    children: (0, v.jsxs)(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        onClick: function () {
                                                          return W(
                                                            "modal-premios"
                                                          );
                                                        },
                                                        className:
                                                          "btn btn-sm btn-secondary box-shadow-08 w-100 mb-2",
                                                        children: [
                                                          (0, v.jsx)("i", {
                                                            className:
                                                              "bi bi-trophy",
                                                          }),
                                                          " Pr\xeamios",
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                !V &&
                                                  (0, v.jsx)("div", {
                                                    className:
                                                      "col-12 app-form mb-2",
                                                    children: (0, v.jsx)(
                                                      "input",
                                                      {
                                                        id: "input-filtro",
                                                        className:
                                                          "form-control form-control-sm box-shadow-08",
                                                        type: "text",
                                                        placeholder:
                                                          "Digite um ou mais t\xedtulos",
                                                        onKeyUp: function (e) {
                                                          le(e.target.value),
                                                            null !== ne &&
                                                              fe(null);
                                                        },
                                                        "aria-label":
                                                          "Digite um ou mais t\xedtulos",
                                                      }
                                                    ),
                                                  }),
                                                (0, v.jsx)("div", {
                                                  className: "col-12",
                                                  children: (function () {
                                                    if (!A) return null;
                                                    var e = y.total_numeros,
                                                      s = he(),
                                                      a = ue(),
                                                      t = 0,
                                                      n = 0;
                                                    return (
                                                      s > 0 &&
                                                        (t = Math.floor(
                                                          (100 * s) / e
                                                        )),
                                                      a > 0 &&
                                                        (n = Math.ceil(
                                                          (100 * a) / e
                                                        )),
                                                      (0, v.jsx)("div", {
                                                        className: "mb-2 w-100",
                                                        children: (0, v.jsxs)(
                                                          "div",
                                                          {
                                                            className:
                                                              "progress",
                                                            children: [
                                                              (0, v.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "progress-bar bg-info progress-bar-striped fw-bold progress-bar-animated",
                                                                  role: "progressbar",
                                                                  style: {
                                                                    width:
                                                                      n + "%",
                                                                  },
                                                                  "aria-valuenow":
                                                                    n,
                                                                  "aria-valuemin":
                                                                    "0",
                                                                  "aria-valuemax":
                                                                    "100",
                                                                  children:
                                                                    n > 10 &&
                                                                    (0, v.jsxs)(
                                                                      v.Fragment,
                                                                      {
                                                                        children:
                                                                          [
                                                                            n,
                                                                            "%",
                                                                          ],
                                                                      }
                                                                    ),
                                                                }
                                                              ),
                                                              (0, v.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "progress-bar bg-success progress-bar-striped fw-bold progress-bar-animated",
                                                                  role: "progressbar",
                                                                  style: {
                                                                    width:
                                                                      t + "%",
                                                                  },
                                                                  "aria-valuenow":
                                                                    t,
                                                                  "aria-valuemin":
                                                                    "0",
                                                                  "aria-valuemax":
                                                                    "100",
                                                                  children:
                                                                    t >= 10 &&
                                                                    (0, v.jsxs)(
                                                                      v.Fragment,
                                                                      {
                                                                        children:
                                                                          [
                                                                            t,
                                                                            "%",
                                                                          ],
                                                                      }
                                                                    ),
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      })
                                                    );
                                                  })(),
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, u.mH)(a) &&
                                            (0, v.jsx)(ee, { sorteio: a }),
                                        ],
                                      }),
                                    V &&
                                      (null === a || void 0 === a
                                        ? void 0
                                        : a.isActive) &&
                                      (pe() > 0
                                        ? (0, v.jsxs)("div", {
                                            className:
                                              "app-vendas-express mb-2",
                                            children: [
                                              !H &&
                                                (0, v.jsx)("div", {
                                                  className:
                                                    "app-card card mb-2",
                                                  children: (0, v.jsxs)("div", {
                                                    className:
                                                      "card-body text-center",
                                                    children: [
                                                      (0, v.jsx)("p", {
                                                        className:
                                                          "text-muted font-xs mb-3 pt-2",
                                                        children: f
                                                          ? "Quanto mais produtos comprar, maiores s\xe3o as suas chances de ganhar!"
                                                          : "Selecione a quantidade de n\xfameros",
                                                      }),
                                                      (0, v.jsxs)("div", {
                                                        className:
                                                          "numeros-select d-flex align-items-center justify-content-center flex-column",
                                                        children: [
                                                          (0, v.jsx)("div", {
                                                            className:
                                                              "vendasExpressNumsSelect",
                                                            children: ae
                                                              .filter(function (
                                                                e
                                                              ) {
                                                                return (
                                                                  e.quantidade <=
                                                                  y.limiteCotas
                                                                );
                                                              })
                                                              .map(function (
                                                                e
                                                              ) {
                                                                return (0,
                                                                v.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "item p-2 me-2 mb-2  flex-column ".concat(
                                                                        e.principal
                                                                          ? "mais-popular"
                                                                          : ""
                                                                      ),
                                                                    onClick:
                                                                      function () {
                                                                        return ye(
                                                                          e.quantidade
                                                                        );
                                                                      },
                                                                    children: [
                                                                      (0,
                                                                      v.jsxs)(
                                                                        "h3",
                                                                        {
                                                                          className:
                                                                            "mb-1",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              v.jsx)(
                                                                                "small",
                                                                                {
                                                                                  className:
                                                                                    "text-dark font-xsss",
                                                                                  children:
                                                                                    "+",
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              p.mO)(
                                                                                e.quantidade,
                                                                                2
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      v.jsx)(
                                                                        "p",
                                                                        {
                                                                          className:
                                                                            "text-muted font-xss text-uppercase",
                                                                          children:
                                                                            "Selecionar",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  "quantidade-".concat(
                                                                    e.quantidade
                                                                  )
                                                                );
                                                              }),
                                                          }),
                                                          (0, v.jsxs)("div", {
                                                            className:
                                                              "vendasExpressNums d-flex align-items-center",
                                                            children: [
                                                              (0, v.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "left pointer",
                                                                  onClick:
                                                                    function () {
                                                                      return ye(
                                                                        -1
                                                                      );
                                                                    },
                                                                  children: (0,
                                                                  v.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "addNumero numeroChange text-muted",
                                                                      children:
                                                                        (0,
                                                                        v.jsx)(
                                                                          "i",
                                                                          {
                                                                            className:
                                                                              "bi bi-dash-circle",
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, v.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "center",
                                                                  children: (0,
                                                                  v.jsx)(
                                                                    "input",
                                                                    {
                                                                      className:
                                                                        "form-control text-center",
                                                                      "aria-label":
                                                                        "Quantidade de n\xfameros",
                                                                      readOnly:
                                                                        !0,
                                                                      placeholder:
                                                                        _,
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, v.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "right pointer",
                                                                  onClick:
                                                                    function () {
                                                                      return ye(
                                                                        1
                                                                      );
                                                                    },
                                                                  children: (0,
                                                                  v.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "removeNumero numeroChange text-muted",
                                                                      children:
                                                                        (0,
                                                                        v.jsx)(
                                                                          "i",
                                                                          {
                                                                            className:
                                                                              "bi bi-plus-circle",
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              (0, v.jsx)("div", {
                                                className: "mb-2",
                                                children: je(),
                                              }),
                                              (0, v.jsx)(X, {
                                                sorteio: a,
                                                openCheckout: ge,
                                                getTotal: we,
                                                setQuantidade: C,
                                              }),
                                            ],
                                          })
                                        : (0, v.jsx)(v.Fragment, {
                                            children: g
                                              ? (0, v.jsx)("div", {
                                                  className:
                                                    "alert alert-warning font-xss mb-2",
                                                  children:
                                                    "Todos os t\xedtulos j\xe1 foram reservados ou pagos",
                                                })
                                              : (0, v.jsxs)("div", {
                                                  className:
                                                    "alert alert-info d-flex align-items-center",
                                                  children: [
                                                    (0, v.jsx)("span", {
                                                      className:
                                                        "d-inline-block spin-animation me-2",
                                                      children: (0, v.jsx)(
                                                        "i",
                                                        {
                                                          className:
                                                            "bi bi-arrow-repeat",
                                                        }
                                                      ),
                                                    }),
                                                    "Carregando lista de n\xfameros...",
                                                  ],
                                                }),
                                          })),
                                    !V &&
                                      a.exibirCotas &&
                                      (0, v.jsxs)(v.Fragment, {
                                        children: [
                                          !g &&
                                            (0, v.jsx)(v.Fragment, {
                                              children: (0, v.jsxs)("div", {
                                                className:
                                                  "alert alert-info d-flex align-items-center",
                                                children: [
                                                  (0, v.jsx)("span", {
                                                    className:
                                                      "d-inline-block spin-animation me-2",
                                                    children: (0, v.jsx)("i", {
                                                      className:
                                                        "bi bi-arrow-repeat",
                                                    }),
                                                  }),
                                                  "Carregando lista de n\xfameros...",
                                                ],
                                              }),
                                            }),
                                          (0, v.jsx)("div", {
                                            className:
                                              "numeros-list row row-cols-6 row-gutter-sm",
                                            children: (function () {
                                              if (Array.isArray(g)) {
                                                var e = oe
                                                  ? oe
                                                      .replace(/ +/g, ",")
                                                      .split(",")
                                                      .map(function (e) {
                                                        return Number.parseInt(
                                                          e
                                                        );
                                                      })
                                                      .filter(function (e) {
                                                        return e >= 0;
                                                      })
                                                  : [];
                                                return g.filter(function (s) {
                                                  if (e.length) {
                                                    if (
                                                      void 0 ===
                                                      e.find(function (e) {
                                                        return e === s.numero;
                                                      })
                                                    )
                                                      return !1;
                                                  } else if (null !== ne)
                                                    return s.status === ne;
                                                  return !0;
                                                });
                                              }
                                              return [];
                                            })().map(function (e) {
                                              return (0,
                                              v.jsx)("div", { className: "col", children: (0, v.jsx)(j, { disabled: !a.isActive, numero: e, digitos: y.digitos }) }, "numero-".concat(e.numero));
                                            }),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              (0, v.jsx)(Y, {
                                topCompradores: a.topCompradores,
                              }),
                              (0, v.jsx)(J, { sorteio: a }),
                            ],
                          }),
                        "grupo" === a.tiposorteio &&
                          a.exibirCotas &&
                          (0, v.jsx)(v.Fragment, {
                            children: (0, v.jsxs)("div", {
                              children: [
                                (0, v.jsxs)("div", {
                                  className: "app-title mb-2",
                                  children: [
                                    (0, v.jsx)("h1", {
                                      children: "\u26a1 Grupos",
                                    }),
                                    (0, v.jsx)("div", {
                                      className: "app-title-desc",
                                      children: "Escolha sua sorte",
                                    }),
                                  ],
                                }),
                                (0, v.jsx)("div", {
                                  className:
                                    "row row-cols-4 sorteio-grupos mt-3",
                                  children: E
                                    ? E.map(function (e) {
                                        return (0, v.jsx)(
                                          "div",
                                          {
                                            className: "col mb-3",
                                            children: (0, v.jsx)("div", {
                                              onClick: function () {
                                                return Ce(e);
                                              },
                                              children: (0, v.jsx)(q, {
                                                isSelected:
                                                  ((s = e),
                                                  !!I.find(function (e) {
                                                    return e.ref === s.ref;
                                                  })),
                                                grupo: e,
                                              }),
                                            }),
                                          },
                                          "animal-".concat(e.ref)
                                        );
                                        var s;
                                      })
                                    : (0, v.jsx)(v.Fragment, {
                                        children:
                                          "Carregando lista de grupos...",
                                      }),
                                }),
                              ],
                            }),
                          }),
                        (function (e) {
                          if (e)
                            return (0, v.jsx)("div", {
                              className: [
                                "app-card card font-xs mb-2",
                                x().sorteioDesc,
                              ].join(" "),
                              children: (0, v.jsx)("div", {
                                className: [
                                  "card-body",
                                  x().sorteioDescBody,
                                ].join(" "),
                                dangerouslySetInnerHTML: { __html: a.texto },
                              }),
                            });
                        })(!0),
                      ],
                    }),
                  ],
                }),
              }),
              (0, v.jsx)($, { sorteio: a, app: t }),
              (0, v.jsx)(G, { porcentagem: t.comissaoAfiliado }),
              a.isActive &&
                a.numeros_aleatorios &&
                !V &&
                (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)("div", {
                    className: ""
                      .concat(x().numerosAleatorios, " py-2 ")
                      .concat(be().length ? x().divHide : null),
                    children: (0, v.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, v.jsx)("h4", {
                          className: "--title text-success font-md mb-0",
                          children: "Compra autom\xe1tica",
                        }),
                        (0, v.jsx)("small", {
                          className: "mb-2 d-block opacity-50",
                          children:
                            "O site escolhe n\xfameros aleat\xf3rios para voc\xea.",
                        }),
                        (0, v.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, v.jsx)("div", {
                              className: "col",
                              children: (0, v.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  (0, v.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: (0, v.jsx)("button", {
                                      type: "button",
                                      className:
                                        "btn btn-secondary br-t-r-0 br-b-r-0",
                                      onClick: function () {
                                        return ye(-1);
                                      },
                                      children: (0, v.jsx)("i", {
                                        className: "bi bi-dash-circle",
                                      }),
                                    }),
                                  }),
                                  (0, v.jsx)("input", {
                                    type: "number",
                                    readOnly: !0,
                                    className: "form-control text-center",
                                    placeholder: _,
                                  }),
                                  (0, v.jsx)("div", {
                                    className: "input-group-append",
                                    children: (0, v.jsx)("button", {
                                      type: "button",
                                      className:
                                        "btn btn-secondary br-t-l-0 br-b-l-0",
                                      onClick: function () {
                                        return ye(1);
                                      },
                                      children: (0, v.jsx)("i", {
                                        className: "bi bi-plus-circle",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, v.jsx)("div", {
                              className: "col-auto",
                              children: (0, v.jsxs)("button", {
                                type: "button",
                                className:
                                  "btn btn-wide btn-success d-flex align-items-center",
                                onClick: function () {
                                  return ve();
                                },
                                children: [
                                  "Comprar\xa0",
                                  !H &&
                                    (0, v.jsxs)("span", {
                                      className: "badge bg-success bg-gradient",
                                      style: { fontSize: "11px" },
                                      children: ["R$ ", (0, p.bC)(we(_))],
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              !V &&
                a.exibirCotas &&
                (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)("div", {
                    className: ""
                      .concat(x().numerosSelecionados, " ")
                      .concat(be().length && x().numerosSelecionadosOpen),
                    children: (0, v.jsxs)("div", {
                      className: [
                        "row row-gutter-sm align-items-center",
                        x().sorteioCheckoutInfo,
                      ].join(" "),
                      children: [
                        (0, v.jsx)("div", {
                          className: "col-12",
                          children: (0, v.jsx)("div", {
                            className: "row row-gutter-sm row-cols-4",
                            style: { minHeight: "40px" },
                            children: be().map(function (e) {
                              return (0,
                              v.jsx)("div", { className: "col", children: (0, v.jsx)(j, { numero: e, digitos: y.digitos }) }, "numero-selecionado-".concat(e.numero));
                            }),
                          }),
                        }),
                        (0, v.jsx)("div", {
                          className: "col-12",
                          children: je(),
                        }),
                      ],
                    }),
                  }),
                }),
              a.isActive &&
                "grupo" == a.tiposorteio &&
                (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)("div", {
                    className: ""
                      .concat(x().numerosSelecionados, " ")
                      .concat(I.length ? x().numerosSelecionadosOpen : ""),
                    children: (0, v.jsxs)("div", {
                      className: [
                        "row row-gutter-sm align-items-center",
                        x().sorteioCheckoutInfo,
                      ].join(" "),
                      children: [
                        (0, v.jsx)("div", {
                          className: "col-12",
                          children: (0, v.jsx)("div", {
                            className: "row row-gutter-sm row-cols-6",
                            style: { minHeight: "40px" },
                            children: I.map(function (e) {
                              return (0, v.jsx)(
                                "div",
                                {
                                  className: "col mb-2",
                                  children: (0, v.jsx)("div", {
                                    className: "p-1",
                                    onClick: function () {
                                      return Ce(e);
                                    },
                                    children: (0, v.jsx)("img", {
                                      src: "https://"
                                        .concat(P().APP_DOMAIN, "/animais/")
                                        .concat(e.ref, ".webp"),
                                      alt: e.nome,
                                      className: "img-fluid",
                                    }),
                                  }),
                                },
                                "numero-selecionado-".concat(e.ref)
                              );
                            }),
                          }),
                        }),
                        (0, v.jsx)("div", {
                          className: "col-12",
                          children: je(),
                        }),
                      ],
                    }),
                  }),
                }),
              (0, v.jsxs)("div", {
                className: x().sorteioShare,
                children: [
                  a.grupoWhatsapp
                    ? (0, v.jsx)("div", {
                        onClick: function () {
                          return xe(a.grupoWhatsapp, "BtnGrupoWhatsApp");
                        },
                        className: "whatsapp-grupo",
                        children: (0, v.jsxs)("div", {
                          className: "btn btn-sm btn-success mb-1 w-100",
                          children: [
                            (0, v.jsx)("i", { className: "bi bi-whatsapp" }),
                            " Grupo",
                          ],
                        }),
                      })
                    : a.whatsappLink
                    ? (0, v.jsx)("div", {
                        onClick: function () {
                          return xe(a.whatsappLink, "BtnWhatsApp");
                        },
                        className: "whatsapp-grupo",
                        children: (0, v.jsxs)("div", {
                          className: "btn btn-sm btn-success mb-1 w-100",
                          children: [
                            (0, v.jsx)("i", { className: "bi bi-whatsapp" }),
                            " Whatsapp",
                          ],
                        }),
                      })
                    : t.telefones.whatsapp_link
                    ? (0, v.jsx)("div", {
                        onClick: function () {
                          return xe(t.telefones.whatsapp_link, "BtnWhatsApp");
                        },
                        className: "whatsapp-grupo",
                        children: (0, v.jsxs)("div", {
                          className: "btn btn-sm btn-success mb-1 w-100",
                          children: [
                            (0, v.jsx)("i", { className: "bi bi-whatsapp" }),
                            " Whatsapp",
                          ],
                        }),
                      })
                    : void 0,
                  t.linkSuporte &&
                    (0, v.jsx)("div", {
                      onClick: function () {
                        return xe(t.linkSuporte);
                      },
                      className: "telegram-grupo",
                      children: (0, v.jsxs)("div", {
                        className:
                          "btn btn-sm btn-success btn-block text-white mb-1 w-100",
                        children: [
                          (0, v.jsx)("i", { className: "bi bi-whatsapp" }),
                          " Suporte",
                        ],
                      }),
                    }),
                  a.telegramLink &&
                    (0, v.jsx)("div", {
                      onClick: function () {
                        return xe(a.telegramLink);
                      },
                      className: "telegram-grupo",
                      children: (0, v.jsxs)("div", {
                        className:
                          "btn btn-sm btn-info btn-block text-white mb-1 w-100",
                        children: [
                          (0, v.jsx)("i", { className: "bi bi-telegram" }),
                          " Telegram",
                        ],
                      }),
                    }),
                  t.comissaoAfiliado > 0 &&
                    (0, v.jsxs)("button", {
                      className: "btn btn-sm btn-light",
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#modal-indique",
                      children: [
                        (0, v.jsx)("i", { className: "bi bi-asterisk" }),
                        " GANHE ",
                        t.comissaoAfiliado,
                        "%",
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      }
      function te(e) {
        e.sorteio;
        return (0, v.jsx)("div", {
          className: "modal fade",
          id: "modal-premiacoesinstantaneas",
          children: (0, v.jsx)("div", {
            className: "modal-dialog modal-md",
            children: (0, v.jsxs)("div", {
              className: "modal-content",
              children: [
                (0, v.jsxs)("div", {
                  className: "modal-header",
                  children: [
                    (0, v.jsx)("h5", {
                      className: "modal-title",
                      children: "Premia\xe7\xf5es Instant\xe2neas",
                    }),
                    (0, v.jsx)("button", {
                      type: "button",
                      className: "btn-close",
                      "data-bs-dismiss": "modal",
                      "aria-label": "Close",
                    }),
                  ],
                }),
                (0, v.jsxs)("div", {
                  className: "modal-body",
                  children: [
                    (0, v.jsxs)("div", {
                      className:
                        "texto-explicativo font-xs text-justify opacity-75",
                      children: [
                        (0, v.jsxs)("p", {
                          children: [
                            (0, v.jsx)("i", { className: "bi bi-info-circle" }),
                            " As premia\xe7\xf5es instant\xe2neas s\xe3o pr\xeamios que podem ser ganhos imediatamente, sem necessidade de sorteio ou qualquer outro processo.",
                          ],
                        }),
                        (0, v.jsx)("p", {
                          children:
                            "Eles s\xe3o muitas vezes ganhos no ato da compra. Os pr\xeamios instant\xe2neos podem incluir dinheiro, produtos, servi\xe7os ou outros bens. Como o pr\xeamio instant\xe2neo \xe9 oferecido quando o participante faz uma compra e encontra um t\xedtulo premiado, n\xe3o h\xe1 necessidade de esperar pelos sorteios.",
                        }),
                      ],
                    }),
                    (0, v.jsxs)("ol", {
                      className: "list-group",
                      children: [
                        (0, v.jsxs)("li", {
                          className:
                            "list-group-item d-flex justify-content-between align-items-center",
                          children: [
                            (0, v.jsxs)("div", {
                              className: "ms-2 me-auto",
                              children: [
                                (0, v.jsxs)("div", {
                                  className: "fw-bold",
                                  children: [
                                    (0, v.jsx)("i", {
                                      className:
                                        "bi bi-trophy-fill text-warning",
                                    }),
                                    " Jos\xe9 da Silva",
                                  ],
                                }),
                                (0, v.jsx)("div", {
                                  className: "opacity-75 font-xs",
                                  children: "R$ 2.000,00",
                                }),
                              ],
                            }),
                            (0, v.jsx)("span", {
                              className: "badge bg-gradient-blue rounded-pill",
                              children: "14.203",
                            }),
                          ],
                        }),
                        (0, v.jsxs)("li", {
                          className:
                            "list-group-item d-flex justify-content-between align-items-center",
                          children: [
                            (0, v.jsxs)("div", {
                              className: "ms-2 me-auto",
                              children: [
                                (0, v.jsx)("div", {
                                  className: "opacity-75",
                                  children: "Ainda n\xe3o contemplado",
                                }),
                                (0, v.jsx)("div", {
                                  className: "opacity-75 font-xs",
                                  children: "R$ 2.000,00",
                                }),
                              ],
                            }),
                            (0, v.jsx)("span", {
                              className: "badge bg-gradient-dark rounded-pill ",
                              children: "11.203",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function ne(e) {
        var s = e.sorteio,
          a = e.totalPagos,
          t = e.reservados,
          n = !(null === s || void 0 === s || !s.progressbar),
          r = (0, u.B6)(s).total_numeros,
          i = t,
          o = 0,
          l = 0;
        return (
          a > 0 && (o = Math.floor((100 * a) / r)),
          i > 0 && (l = Math.ceil((100 * i) / r)),
          s.status.acabou
            ? null
            : n
            ? (0, v.jsx)("div", {
                className: "mt-2 mb-2 w-100",
                children: (0, v.jsxs)("div", {
                  className: "progress",
                  children: [
                    (0, v.jsx)("div", {
                      className:
                        "progress-bar bg-info progress-bar-striped fw-bold progress-bar-animated",
                      role: "progressbar",
                      style: { width: l + "%" },
                      "aria-valuenow": l,
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                      children:
                        l > 10 &&
                        (0, v.jsxs)(v.Fragment, { children: [l, "%"] }),
                    }),
                    (0, v.jsx)("div", {
                      className:
                        "progress-bar bg-success progress-bar-striped fw-bold progress-bar-animated",
                      role: "progressbar",
                      style: { width: o + "%" },
                      "aria-valuenow": o,
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                      children:
                        o >= 10 &&
                        (0, v.jsxs)(v.Fragment, { children: [o, "%"] }),
                    }),
                  ],
                }),
              })
            : null
        );
      }
      function re(e) {
        var s,
          a,
          t = e.sorteio,
          i = e.app,
          h = e.lojista,
          f = e.linkAfiliado,
          b = t.isPromocoes,
          g = (0, u.B6)(t),
          N = (0, l.useState)(
            t.vex
              ? {
                  pagos: g.pagos,
                  reservados: 0,
                  livres: g.total_numeros - g.pagos,
                }
              : null
          ),
          w = N[0],
          y = N[1],
          k = b ? "chances" : "t\xedtulos",
          _ = (0, l.useState)(g.minimoCotas || 1),
          C = _[0],
          S = _[1],
          F = (0, c.v9)(function (e) {
            return e.carrinho;
          }),
          A = (0, c.I0)(),
          O = (0, l.useState)(null),
          E = O[0],
          T = O[1],
          D = (0, l.useState)([]),
          I = D[0],
          K = D[1],
          V = null === t || void 0 === t ? void 0 : t.vex,
          H = !(null !== t && void 0 !== t && t.valor),
          Q = (0, u.eJ)(t.vls, ["qtde", "valor"]) || [],
          ae = (0, u.eJ)(t.btq, ["quantidade", "principal"]) || [],
          re = (0, l.useState)(g.apenas_disponiveis ? 3 : null),
          ie = re[0],
          oe = re[1],
          le = (0, l.useState)(""),
          ce = le[0],
          de = le[1];
        function me() {
          return (
            (null === Q || void 0 === Q
              ? void 0
              : Q.filter(function (e) {
                  var s = e.qtde;
                  return !g.limiteCotas || g.limiteCotas >= s;
                })) || []
          );
        }
        function ue(e) {
          return pe.apply(this, arguments);
        }
        function pe() {
          return (pe = (0, r.Z)(
            o().mark(function e(s) {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (0, d.Z)()
                          .get(
                            s.urlNumeros.replace(
                              "/lista-numeros.php",
                              "/n.php"
                            ) + new Date().getTime()
                          )
                          .then(function (e) {
                            var s = e.data;
                            if ("object" === typeof s) {
                              var a = (0, u.SJ)(s.n),
                                t = g.pagos;
                              return {
                                pagos: t,
                                reservados: g.total_numeros - a - t,
                                livres: a,
                              };
                            }
                            return (
                              ("string" === typeof s &&
                                "" !== s &&
                                s.split("\n").map(function (e) {
                                  var s = e.split(";");
                                  return {
                                    nome: s[0],
                                    numeros: s[1].split(",").map(function (e) {
                                      return parseInt(e);
                                    }),
                                    status: parseInt(s[2]),
                                  };
                                })) ||
                              []
                            );
                          })
                          .then(function (e) {
                            var s = {};
                            return Array.isArray(e)
                              ? (e.forEach(function (e) {
                                  e.numeros.forEach(function (a) {
                                    s[a] = {
                                      numero: a,
                                      nome: e.nome,
                                      status: e.status,
                                    };
                                  });
                                }),
                                s)
                              : e;
                          })
                          .then(function (e) {
                            if (V) return e;
                            for (var s = [], a = g.inicial; a <= g.final; a++)
                              s.push(
                                e[a.toString()] || {
                                  numero: a,
                                  nome: null,
                                  status: 3,
                                }
                              );
                            return s;
                          })
                          .catch(function (e) {
                            var s, a;
                            throw (
                              (console.log(e),
                              new Error(
                                (null === (s = e.response) ||
                                void 0 === s ||
                                null === (a = s.data) ||
                                void 0 === a
                                  ? void 0
                                  : a.message) ||
                                  "N\xe3o foi poss\xedvel recuperar a lista de n\xfameros do sorteio"
                              ))
                            );
                          })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function he() {
          return w
            ? Array.isArray(w)
              ? w.filter(function (e) {
                  return 0 == e.status;
                }).length
              : w.reservados
            : 0;
        }
        function xe() {
          return w
            ? Array.isArray(w)
              ? w.filter(function (e) {
                  return 3 == e.status;
                }).length
              : w.livres
            : 0;
        }
        function fe() {
          return w
            ? Array.isArray(w)
              ? w.filter(function (e) {
                  return 1 == e.status;
                }).length
              : w.pagos
            : 0;
        }
        function be(e, s) {
          s && (0, u.Ko)(s), window.open(e, "_blank");
        }
        function ve(e) {
          de("");
          var s = document.getElementById("input-filtro");
          s && (s.value = ""), oe(e === ie ? null : e);
        }
        function je() {
          return F.numeros;
        }
        function ge() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          try {
            if ((e || (e = C), g.limiteCotas > 0 && e > g.limiteCotas))
              throw new Error(
                "Sorteio permite apenas a compra de "
                  .concat(g.limiteCotas, " ")
                  .concat(k)
              );
            V || A((0, m.Vt)()), S(e), we();
          } catch (s) {
            alert(s.message);
          }
        }
        function Ne() {
          var e = "Participar do sorteio";
          if (
            (H && (e = "Quero participar"),
            b && (e = "Participar"),
            null !== t && void 0 !== t && t.isActive)
          )
            return (0, v.jsx)("button", {
              className:
                "btn-participar-sorteio btn btn-success w-100 py-2 ".concat(
                  H ? "btn-lg" : ""
                ),
              onClick: we,
              children: (0, v.jsxs)("div", {
                className: "row align-items-center",
                style: { lineHeight: "100%" },
                children: [
                  (0, v.jsx)("div", {
                    className: "col-md-2 col-3 p-0 m-0 ",
                    children: (0, v.jsx)("i", {
                      className: "bi bi-arrow-right-square-fill font-lgg",
                    }),
                  }),
                  (0, v.jsxs)("div", {
                    className: "col-md-10 col-9 p-0 m-0 text-start",
                    children: [
                      (0, v.jsx)("div", {
                        className: "quero-participar font-md",
                        children: (0, v.jsx)("span", { children: e }),
                      }),
                      !H &&
                        (0, v.jsxs)("div", {
                          className: "demais-infos opacity-75",
                          children: [
                            (0, v.jsxs)("div", {
                              children: [
                                (0, v.jsx)("small", { children: "R$" }),
                                " ",
                                (0, p.bC)(Se()),
                              ],
                            }),
                            t.calc_tarifa &&
                              (0, v.jsxs)("small", {
                                style: { fontSize: 10 },
                                children: [
                                  "por t\xedtulo R$ ",
                                  (0, p.bC)(ye()),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            });
        }
        function we() {
          V
            ? (0, u.Ko)("AddToCart", {
                content_ids: [t.id],
                num_items: Ce(),
                currency: "BRL",
                value: Se(),
                content_id: [t.id],
                quantity: Ce(),
              })
            : (0, u.Ko)("BtnParticipar", {
                content_ids: [t.id],
                num_items: Ce(),
                currency: "BRL",
                value: Se(),
                content_id: [t.id],
                quantity: Ce(),
              });
          var e = document.getElementById("modal-checkout");
          if (e) {
            var s = bootstrap.Modal.getOrCreateInstance(e);
            s && s.show();
          }
        }
        function ye(e) {
          return void 0 == e && (e = Ce() || g.minimoCotas), ke(e) / e;
        }
        function ke(e) {
          void 0 === e && (e = "grupo" == t.tiposorteio ? 4 : 1);
          var s =
            (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                s = t.valor;
              return (
                t.valores.forEach(function (a) {
                  var t = a.qtde,
                    n = a.valor;
                  (e || Ce()) >= t && (s = n);
                }),
                s
              );
            })(e) * e;
          if (
            t.calc_tarifa &&
            (t.tarifa_real > 0 && (s += t.tarifa_real), t.tarifa > 0)
          ) {
            var a = 100 - t.tarifa;
            s += Math.ceil((s / a) * 1e4) / 100 - s;
          }
          return s;
        }
        function _e(e) {
          var s = Math.min(C + e, g.limiteCotas, xe()),
            a = Math.min(g.minimoCotas || 1, xe() || 1);
          S(Math.max(a, s));
        }
        function Ce() {
          return "grupo" == t.tiposorteio ? 4 * I.length : V ? C : je().length;
        }
        function Se() {
          return ke(Ce());
        }
        function Fe(e) {
          if (t.isActive && "livre" === e.status) {
            var s = I.find(function (s) {
              return s.ref == e.ref;
            });
            K(
              s
                ? I.filter(function (s) {
                    return s.ref !== e.ref;
                  })
                : [].concat((0, n.Z)(I), [e])
            );
          }
        }
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (t)
                return (
                  g.minimoCotas != C && S(g.minimoCotas),
                  (0, u.Ko)("ViewContent", {
                    currency: "BRL",
                    content_ids: t.id,
                    content_name: t.title,
                    content_type: "product",
                    value: t.valor,
                  }),
                  t.exibirCotas &&
                    (0, r.Z)(
                      o().mark(function e() {
                        var s, a;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.prev = 0), (e.next = 3), ue(t);
                                case 3:
                                  if (
                                    ((s = e.sent),
                                    y(s),
                                    "grupo" !== t.tiposorteio)
                                  ) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (
                                    (e.next = 8),
                                    (0, d.Z)()
                                      .get("/sorteios/load/grupos")
                                      .then(function (e) {
                                        return e.data;
                                      })
                                      .catch(function (e) {
                                        return [];
                                      })
                                  );
                                case 8:
                                  (a = (a = e.sent).map(function (e) {
                                    var a = e.numeros,
                                      t = s.find(function (e) {
                                        return a.find(function (s) {
                                          return (
                                            e.numero === s && 3 !== e.status
                                          );
                                        });
                                      });
                                    return (
                                      t
                                        ? ((e.status =
                                            1 == t.status
                                              ? "pago"
                                              : "reservado"),
                                          (e.cliente = t.nome))
                                        : ((e.status = "livre"),
                                          (e.cliente = null)),
                                      e
                                    );
                                  })),
                                    T(a);
                                case 11:
                                  e.next = 16;
                                  break;
                                case 13:
                                  (e.prev = 13),
                                    (e.t0 = e.catch(0)),
                                    console.log("ErrorCotas", e.t0);
                                case 16:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 13]]
                        );
                      })
                    )(),
                  A((0, m.NB)(t)),
                  function () {
                    e;
                  }
                );
            },
            [t]
          ),
          (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(
                Z,
                {
                  grupos: I,
                  app: i,
                  quantidade: C,
                  linkAfiliado: f,
                  sorteioToken: t.token,
                  sorteio: t,
                },
                "modal-checkout"
              ),
              (0, v.jsx)(L, { sorteio: t }),
              (0, v.jsxs)(R.Z, {
                app: i,
                lojista: h,
                versao: i.versao_site ? i.versao_site : "v1",
                children: [
                  (0, v.jsxs)("div", {
                    className: "app-main-off",
                    children: [
                      (0, v.jsx)("div", {
                        className: "sorteio-header",
                        onClick: function (e) {
                          e.preventDefault();
                          var s = document.getElementById("area-compra");
                          s &&
                            window.scrollTo({
                              top: -75 + s.offsetTop,
                              behavior: "smooth",
                            });
                        },
                        children: (0, v.jsx)(B.Z, {
                          app: i,
                          sorteio: t,
                          destaque: !0,
                          click: !1,
                          versao: "v2",
                          isGratuito: H,
                        }),
                      }),
                      (0, v.jsx)("div", {
                        className: "sorteio-buscas overflowh",
                        children: (0, v.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, v.jsx)("div", {
                              className: "col p-0",
                              children: (0, v.jsxs)("div", {
                                className:
                                  "btn btn-sm bg-gradient-dark text-white border-0 font-xs py-1 box-shadow-08 w-100 rounded-0",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#modal-consultaCompras",
                                children: [
                                  (0, v.jsx)("i", { className: "bi bi-cart" }),
                                  " Meus ",
                                  b ? "t\xedtulos" : "n\xfameros",
                                ],
                              }),
                            }),
                            !t.ganhadores.length &&
                              t.premios.length > 1 &&
                              (0, v.jsx)("div", {
                                className: "col-6 p-0",
                                children: (0, v.jsxs)("button", {
                                  type: "button",
                                  onClick: function () {
                                    return W("modal-premios");
                                  },
                                  className:
                                    "btn btn-sm btn-secondary box-shadow-08 w-100 rounded-0 border-0 py-1 font-xs",
                                  children: [
                                    (0, v.jsx)("i", {
                                      className: "bi bi-trophy",
                                    }),
                                    " Pr\xeamios",
                                  ],
                                }),
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, v.jsxs)("div", {
                    className: "app-main container",
                    children: [
                      !H &&
                        (0, v.jsxs)("div", {
                          className:
                            "sorteio-preco porApenas font-xs d-flex align-items-center justify-content-center mt-2 mb-2 font-weight-500",
                          children: [
                            (0, v.jsx)("div", {
                              className:
                                "item d-flex align-items-center font-xs me-2",
                              children:
                                t.dts &&
                                (0, v.jsxs)("div", {
                                  children: [
                                    (0, v.jsx)("span", {
                                      className: "ms-2 me-1",
                                      children: "Sorteio",
                                    }),
                                    (0, v.jsx)("div", {
                                      className:
                                        "tag btn btn-sm bg-white bg-opacity-50 font-xss box-shadow-08",
                                      children: (0, u.p6)(t.dts, "dd/mm/yyyy"),
                                    }),
                                  ],
                                }),
                            }),
                            (0, v.jsxs)("div", {
                              className:
                                "item d-flex align-items-center font-xs",
                              children: [
                                (0, v.jsx)("div", {
                                  className: "me-1",
                                  children: "Por apenas",
                                }),
                                (0, v.jsxs)("div", {
                                  className:
                                    "tag btn btn-sm bg-cor-primaria text-cor-primaria-link box-shadow-08",
                                  children: ["R$ ", (0, p.bC)(ke())],
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, v.jsx)(ne, {
                        sorteio: t,
                        totalPagos: fe(),
                        reservados: he(),
                      }),
                      w &&
                        !V &&
                        (0, v.jsx)(v.Fragment, {
                          children: (0, v.jsx)(se, {
                            livres: xe(),
                            reservados: he(),
                            pagos: fe(),
                            setStatus: ve,
                          }),
                        }),
                      (null === (s = t.ganhadores) || void 0 === s
                        ? void 0
                        : s.length) > 0 &&
                        (0, v.jsxs)(v.Fragment, {
                          children: [
                            (0, v.jsx)(M, { ganhador: t.ganhadores[0] }),
                            t.ganhadores.length > 1 &&
                              (0, v.jsxs)(v.Fragment, {
                                children: [
                                  (0, v.jsxs)("button", {
                                    "data-bs-toggle": "modal",
                                    "data-bs-target":
                                      "#modal-ganhadores-sorteio",
                                    className:
                                      "btn btn-sm w-100 btn-light btn-block mb-2",
                                    children: [
                                      (0, v.jsx)("i", {
                                        className: "bi bi-trophy",
                                      }),
                                      " Ver ganhadores",
                                    ],
                                  }),
                                  (0, v.jsx)(U, { sorteio: t }),
                                ],
                              }),
                          ],
                        }),
                      (0, v.jsxs)("div", {
                        id: "area-compra",
                        children: [
                          ("sorteio" === t.tiposorteio ||
                            "giro" == t.tiposorteio) &&
                            (0, v.jsxs)(v.Fragment, {
                              children: [
                                (0, u.mH)(t) && (0, v.jsx)(ee, { sorteio: t }),
                                t.isActive &&
                                  me().length > 0 &&
                                  (0, v.jsxs)("div", {
                                    className: "app-promocao-numeros mb-2",
                                    children: [
                                      (0, v.jsxs)("div", {
                                        className: "app-title mb-2",
                                        children: [
                                          (0, v.jsx)("h1", {
                                            children:
                                              "\ud83d\udce3 Promo\xe7\xe3o",
                                          }),
                                          (0, v.jsx)("div", {
                                            className: "app-title-desc",
                                            children: "Compre mais barato!",
                                          }),
                                        ],
                                      }),
                                      (0, v.jsx)("div", {
                                        className: "app-card card",
                                        children: (0, v.jsx)("div", {
                                          className: "card-body pb-1",
                                          children: (0, v.jsx)("div", {
                                            className: "row px-2",
                                            children: me().map(function (e, s) {
                                              return (0, v.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    "col-auto px-1 mb-2",
                                                  children: (0, v.jsx)(
                                                    "button",
                                                    {
                                                      className:
                                                        "btn btn-success w-100 btn-sm py-0 px-2 text-nowrap font-xss",
                                                      onClick: function () {
                                                        return ge(e.qtde);
                                                      },
                                                      children: (0, v.jsxs)(
                                                        "span",
                                                        {
                                                          className:
                                                            "font-weight-500",
                                                          children: [
                                                            (0, v.jsx)("b", {
                                                              className:
                                                                "font-weight-600",
                                                              children: e.qtde,
                                                            }),
                                                            " ",
                                                            (0, v.jsx)(
                                                              "small",
                                                              {
                                                                children:
                                                                  "por R$",
                                                              }
                                                            ),
                                                            " ",
                                                            (0, v.jsx)("span", {
                                                              className:
                                                                "font-weight-600",
                                                              children: (0,
                                                              p.bC)(ke(e.qtde)),
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                },
                                                "valores-".concat(s)
                                              );
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                t.exibirCotas &&
                                  (0, v.jsxs)(v.Fragment, {
                                    children: [
                                      !b &&
                                        (0, v.jsx)(v.Fragment, {
                                          children: (0, v.jsxs)("div", {
                                            className: "app-title mb-2",
                                            children: [
                                              (0, v.jsxs)("h1", {
                                                style: {
                                                  textTransform: "capitalize",
                                                },
                                                children: ["\u26a1 ", k],
                                              }),
                                              (0, v.jsx)("div", {
                                                className: "app-title-desc",
                                                children: "Escolha sua sorte",
                                              }),
                                            ],
                                          }),
                                        }),
                                      null === w &&
                                        (0, v.jsxs)("div", {
                                          className:
                                            "alert alert-info d-flex align-items-center",
                                          children: [
                                            (0, v.jsx)("span", {
                                              className:
                                                "d-inline-block spin-animation me-2",
                                              children: (0, v.jsx)("i", {
                                                className: "bi bi-arrow-repeat",
                                              }),
                                            }),
                                            "Carregando lista de n\xfameros...",
                                          ],
                                        }),
                                      null !== w &&
                                        (0, v.jsxs)(v.Fragment, {
                                          children: [
                                            V &&
                                              (null === t || void 0 === t
                                                ? void 0
                                                : t.isActive) &&
                                              (xe() > 0
                                                ? (0, v.jsxs)("div", {
                                                    className:
                                                      "app-vendas-express mb-2",
                                                    children: [
                                                      !H &&
                                                        (0, v.jsxs)("div", {
                                                          children: [
                                                            (0, v.jsx)("div", {
                                                              className:
                                                                "app-card card mb-2",
                                                              children: (0,
                                                              v.jsx)("div", {
                                                                className:
                                                                  "card-body text-center p-1",
                                                                children: (0,
                                                                v.jsx)("p", {
                                                                  className:
                                                                    "text-muted font-xss",
                                                                  children: b
                                                                    ? "Quanto mais t\xedtulos, mais chances de ganhar!"
                                                                    : "Selecione a quantidade de n\xfameros",
                                                                }),
                                                              }),
                                                            }),
                                                            (0, v.jsxs)("div", {
                                                              className:
                                                                "numeros-select d-flex align-items-center justify-content-center flex-column",
                                                              children: [
                                                                (0, v.jsx)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "vendasExpressNumsSelect v2",
                                                                    children: ae
                                                                      .filter(
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return (
                                                                            e.quantidade <=
                                                                            g.limiteCotas
                                                                          );
                                                                        }
                                                                      )
                                                                      .map(
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return (0,
                                                                          v.jsx)(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "item mb-1 mt-0 ".concat(
                                                                                  e.principal
                                                                                    ? "mais-popular"
                                                                                    : ""
                                                                                ),
                                                                              onClick:
                                                                                function () {
                                                                                  return _e(
                                                                                    e.quantidade
                                                                                  );
                                                                                },
                                                                              children:
                                                                                (0,
                                                                                v.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                    className:
                                                                                      "item-content flex-column p-2",
                                                                                    children:
                                                                                      [
                                                                                        (0,
                                                                                        v.jsxs)(
                                                                                          "h3",
                                                                                          {
                                                                                            className:
                                                                                              "mb-0",
                                                                                            children:
                                                                                              [
                                                                                                (0,
                                                                                                v.jsx)(
                                                                                                  "small",
                                                                                                  {
                                                                                                    className:
                                                                                                      "item-content-plus font-xsss",
                                                                                                    children:
                                                                                                      "+",
                                                                                                  }
                                                                                                ),
                                                                                                (0,
                                                                                                p.mO)(
                                                                                                  e.quantidade,
                                                                                                  2
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                        (0,
                                                                                        v.jsx)(
                                                                                          "p",
                                                                                          {
                                                                                            className:
                                                                                              "item-content-txt font-xss text-uppercase mb-0",
                                                                                            children:
                                                                                              "Selecionar",
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                            },
                                                                            "quantidade-".concat(
                                                                              e.quantidade
                                                                            )
                                                                          );
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, v.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "row align-items-center w-100 mb-2",
                                                                    children: [
                                                                      (0,
                                                                      v.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "col ps-0 pe-0",
                                                                          children:
                                                                            (0,
                                                                            v.jsx)(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "vendasExpressNums app-card card w-100 font-xs",
                                                                                children:
                                                                                  (0,
                                                                                  v.jsxs)(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "card-body d-flex align-items-center justify-content-center font-xss p-0 py-1",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          v.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                "left pointer font-xs",
                                                                                              onClick:
                                                                                                function () {
                                                                                                  return S(
                                                                                                    g.minimoCotas
                                                                                                  );
                                                                                                },
                                                                                              children:
                                                                                                (0,
                                                                                                v.jsx)(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "addNumero numeroChange text-muted pe-1",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      v.jsx)(
                                                                                                        "i",
                                                                                                        {
                                                                                                          className:
                                                                                                            "bi bi-x-circle",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          v.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                "left pointer font-xs",
                                                                                              onClick:
                                                                                                function () {
                                                                                                  return _e(
                                                                                                    -1
                                                                                                  );
                                                                                                },
                                                                                              children:
                                                                                                (0,
                                                                                                v.jsx)(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "addNumero numeroChange text-dark ps-0",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      v.jsx)(
                                                                                                        "i",
                                                                                                        {
                                                                                                          className:
                                                                                                            "bi bi-dash-circle",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          v.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                "center",
                                                                                              children:
                                                                                                (0,
                                                                                                v.jsx)(
                                                                                                  "input",
                                                                                                  {
                                                                                                    className:
                                                                                                      "form-control text-center",
                                                                                                    "aria-label":
                                                                                                      "Quantidade de n\xfameros",
                                                                                                    readOnly:
                                                                                                      !0,
                                                                                                    placeholder:
                                                                                                      C,
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          v.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                "right pointer",
                                                                                              onClick:
                                                                                                function () {
                                                                                                  return _e(
                                                                                                    1
                                                                                                  );
                                                                                                },
                                                                                              children:
                                                                                                (0,
                                                                                                v.jsx)(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "removeNumero numeroChange text-cor-primaria text-plus-title",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      v.jsx)(
                                                                                                        "i",
                                                                                                        {
                                                                                                          className:
                                                                                                            "bi bi-plus-circle-fill",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      v.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "col-md-6 col-6 pe-0",
                                                                          children:
                                                                            Ne(),
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      (0, v.jsx)(X, {
                                                        sorteio: t,
                                                        openCheckout: we,
                                                        getTotal: ke,
                                                        setQuantidade: S,
                                                      }),
                                                      H &&
                                                        (0, v.jsx)("div", {
                                                          className: "mt-2",
                                                          children: Ne(),
                                                        }),
                                                    ],
                                                  })
                                                : (0, v.jsx)(v.Fragment, {
                                                    children: (0, v.jsx)(
                                                      "div",
                                                      {
                                                        className:
                                                          "alert alert-warning font-xss mb-2",
                                                        children:
                                                          "Todos os t\xedtulos j\xe1 foram reservados ou pagos",
                                                      }
                                                    ),
                                                  })),
                                            !V &&
                                              t.exibirCotas &&
                                              (0, v.jsx)(v.Fragment, {
                                                children: (0, v.jsx)("div", {
                                                  className:
                                                    "numeros-list row row-cols-6 row-gutter-sm",
                                                  children: (function () {
                                                    if (Array.isArray(w)) {
                                                      var e = ce
                                                        ? ce
                                                            .replace(/ +/g, ",")
                                                            .split(",")
                                                            .map(function (e) {
                                                              return Number.parseInt(
                                                                e
                                                              );
                                                            })
                                                            .filter(function (
                                                              e
                                                            ) {
                                                              return e >= 0;
                                                            })
                                                        : [];
                                                      return w.filter(function (
                                                        s
                                                      ) {
                                                        if (e.length) {
                                                          if (
                                                            void 0 ===
                                                            e.find(function (
                                                              e
                                                            ) {
                                                              return (
                                                                e === s.numero
                                                              );
                                                            })
                                                          )
                                                            return !1;
                                                        } else if (null !== ie)
                                                          return (
                                                            s.status === ie
                                                          );
                                                        return !0;
                                                      });
                                                    }
                                                    return [];
                                                  })().map(function (e) {
                                                    return (0,
                                                    v.jsx)("div", { className: "col", children: (0, v.jsx)(j, { disabled: !t.isActive, numero: e, digitos: g.digitos }) }, "numero-".concat(e.numero));
                                                  }),
                                                }),
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                          "grupo" === t.tiposorteio &&
                            t.exibirCotas &&
                            (0, v.jsx)(v.Fragment, {
                              children: (0, v.jsxs)("div", {
                                children: [
                                  (0, v.jsxs)("div", {
                                    className: "app-title mb-2",
                                    children: [
                                      (0, v.jsx)("h1", {
                                        children: "\u26a1 Grupos",
                                      }),
                                      (0, v.jsx)("div", {
                                        className: "app-title-desc",
                                        children: "Escolha sua sorte",
                                      }),
                                    ],
                                  }),
                                  (0, v.jsx)("div", {
                                    className:
                                      "row row-cols-4 sorteio-grupos mt-3",
                                    children: E
                                      ? E.map(function (e) {
                                          return (0, v.jsx)(
                                            "div",
                                            {
                                              className: "col mb-3",
                                              children: (0, v.jsx)("div", {
                                                onClick: function () {
                                                  return Fe(e);
                                                },
                                                children: (0, v.jsx)(q, {
                                                  isSelected:
                                                    ((s = e),
                                                    !!I.find(function (e) {
                                                      return e.ref === s.ref;
                                                    })),
                                                  grupo: e,
                                                }),
                                              }),
                                            },
                                            "animal-".concat(e.ref)
                                          );
                                          var s;
                                        })
                                      : (0, v.jsx)(v.Fragment, {
                                          children:
                                            "Carregando lista de grupos...",
                                        }),
                                  }),
                                ],
                              }),
                            }),
                          ((a = !0),
                          t.texto && a
                            ? (0, v.jsx)("div", {
                                className: "app-descricao-completa",
                                children: (0, v.jsxs)("div", {
                                  className: [
                                    "app-card card font-xs mb-2",
                                    x().sorteioDesc,
                                  ].join(" "),
                                  children: [
                                    (0, v.jsxs)("button", {
                                      className:
                                        "app-descricao-completa--titulo font-xs collapseIcon btn btn-link text-decoration-none ps-0 text-cor-card-link collapsed",
                                      "data-bs-toggle": "collapse",
                                      "data-bs-target": "#collapseDescricao",
                                      role: "button",
                                      "aria-expanded": "false",
                                      "aria-controls": "collapseDescricao",
                                      children: [
                                        (0, v.jsx)("i", {
                                          className:
                                            "bi bi-arrow-up-square-fill forCollapse me-2",
                                        }),
                                        "Descri\xe7\xe3o/Regulamento",
                                      ],
                                    }),
                                    (0, v.jsx)("div", {
                                      id: "collapseDescricao",
                                      className: [
                                        "collapse card-body",
                                        x().sorteioDescBody,
                                      ].join(" "),
                                      dangerouslySetInnerHTML: {
                                        __html: t.texto,
                                      },
                                    }),
                                  ],
                                }),
                              })
                            : null),
                          (0, v.jsx)(Y, { topCompradores: t.topCompradores }),
                          (0, v.jsx)(J, { sorteio: t }),
                        ],
                      }),
                      (0, v.jsx)("div", {
                        className:
                          "sorteio-share d-flex mb-2 justify-content-between align-items-center",
                        children: (0, v.jsx)(z, { sorteio: t }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsx)($, { sorteio: t, app: i }),
              (0, v.jsx)(te, { sorteio: t }),
              (0, v.jsx)(G, { porcentagem: i.comissaoAfiliado }),
              t.isActive &&
                t.numeros_aleatorios &&
                !V &&
                (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)("div", {
                    className: ""
                      .concat(x().numerosAleatorios, " py-2 ")
                      .concat(je().length ? x().divHide : null),
                    children: (0, v.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, v.jsx)("h4", {
                          className: "--title text-success font-md mb-0",
                          children: "Compra autom\xe1tica",
                        }),
                        (0, v.jsx)("small", {
                          className: "mb-2 d-block opacity-50",
                          children:
                            "O site escolhe n\xfameros aleat\xf3rios para voc\xea.",
                        }),
                        (0, v.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, v.jsx)("div", {
                              className: "col",
                              children: (0, v.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  (0, v.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: (0, v.jsx)("button", {
                                      type: "button",
                                      className:
                                        "btn btn-secondary br-t-r-0 br-b-r-0",
                                      onClick: function () {
                                        return _e(-1);
                                      },
                                      children: (0, v.jsx)("i", {
                                        className: "bi bi-dash-circle",
                                      }),
                                    }),
                                  }),
                                  (0, v.jsx)("input", {
                                    type: "number",
                                    readOnly: !0,
                                    className: "form-control text-center",
                                    placeholder: C,
                                  }),
                                  (0, v.jsx)("div", {
                                    className: "input-group-append",
                                    children: (0, v.jsx)("button", {
                                      type: "button",
                                      className:
                                        "btn btn-secondary br-t-l-0 br-b-l-0",
                                      onClick: function () {
                                        return _e(1);
                                      },
                                      children: (0, v.jsx)("i", {
                                        className: "bi bi-plus-circle",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, v.jsx)("div", {
                              className: "col-auto",
                              children: (0, v.jsxs)("button", {
                                type: "button",
                                className:
                                  "btn btn-wide btn-success d-flex align-items-center",
                                onClick: function () {
                                  return ge();
                                },
                                children: [
                                  "Comprar\xa0",
                                  !H &&
                                    (0, v.jsxs)("span", {
                                      className: "badge bg-success bg-gradient",
                                      style: { fontSize: "11px" },
                                      children: ["R$ ", (0, p.bC)(ke(C))],
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              !V &&
                t.exibirCotas &&
                (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)("div", {
                    className: ""
                      .concat(x().numerosSelecionados, " ")
                      .concat(je().length && x().numerosSelecionadosOpen),
                    children: (0, v.jsxs)("div", {
                      className: [
                        "row row-gutter-sm align-items-center",
                        x().sorteioCheckoutInfo,
                      ].join(" "),
                      children: [
                        (0, v.jsx)("div", {
                          className: "col-12",
                          children: (0, v.jsx)("div", {
                            className: "row row-gutter-sm row-cols-4",
                            style: { minHeight: "40px" },
                            children: je().map(function (e) {
                              return (0,
                              v.jsx)("div", { className: "col", children: (0, v.jsx)(j, { numero: e, digitos: g.digitos }) }, "numero-selecionado-".concat(e.numero));
                            }),
                          }),
                        }),
                        (0, v.jsx)("div", {
                          className: "col-12",
                          children: Ne(),
                        }),
                      ],
                    }),
                  }),
                }),
              t.isActive &&
                "grupo" == t.tiposorteio &&
                (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)("div", {
                    className: ""
                      .concat(x().numerosSelecionados, " ")
                      .concat(I.length ? x().numerosSelecionadosOpen : ""),
                    children: (0, v.jsxs)("div", {
                      className: [
                        "row row-gutter-sm align-items-center",
                        x().sorteioCheckoutInfo,
                      ].join(" "),
                      children: [
                        (0, v.jsx)("div", {
                          className: "col-12",
                          children: (0, v.jsx)("div", {
                            className: "row row-gutter-sm row-cols-6",
                            style: { minHeight: "40px" },
                            children: I.map(function (e) {
                              return (0, v.jsx)(
                                "div",
                                {
                                  className: "col mb-2",
                                  children: (0, v.jsx)("div", {
                                    className: "p-1",
                                    onClick: function () {
                                      return Fe(e);
                                    },
                                    children: (0, v.jsx)("img", {
                                      src: "https://"
                                        .concat(P().APP_DOMAIN, "/animais/")
                                        .concat(e.ref, ".webp"),
                                      alt: e.nome,
                                      className: "img-fluid",
                                    }),
                                  }),
                                },
                                "numero-selecionado-".concat(e.ref)
                              );
                            }),
                          }),
                        }),
                        (0, v.jsx)("div", {
                          className: "col-12",
                          children: Ne(),
                        }),
                      ],
                    }),
                  }),
                }),
              (0, v.jsxs)("div", {
                className: x().sorteioShare,
                children: [
                  t.grupoWhatsapp
                    ? (0, v.jsx)("div", {
                        onClick: function () {
                          return be(t.grupoWhatsapp, "BtnGrupoWhatsApp");
                        },
                        className: "whatsapp-grupo",
                        children: (0, v.jsxs)("div", {
                          className:
                            "btn btn-sm btn-success mb-1 w-100 box-shadow-08",
                          children: [
                            (0, v.jsx)("i", { className: "bi bi-whatsapp" }),
                            " Grupo",
                          ],
                        }),
                      })
                    : t.whatsappLink
                    ? (0, v.jsx)("div", {
                        onClick: function () {
                          return be(t.whatsappLink, "BtnWhatsApp");
                        },
                        className: "whatsapp-grupo",
                        children: (0, v.jsxs)("div", {
                          className:
                            "btn btn-sm btn-success mb-1 w-100 box-shadow-08",
                          children: [
                            (0, v.jsx)("i", { className: "bi bi-whatsapp" }),
                            " Whatsapp",
                          ],
                        }),
                      })
                    : i.telefones.whatsapp_link
                    ? (0, v.jsx)("div", {
                        onClick: function () {
                          return be(i.telefones.whatsapp_link, "BtnWhatsApp");
                        },
                        className: "whatsapp-grupo",
                        children: (0, v.jsxs)("div", {
                          className:
                            "btn btn-sm btn-success mb-1 w-100 box-shadow-08",
                          children: [
                            (0, v.jsx)("i", { className: "bi bi-whatsapp" }),
                            " Whatsapp",
                          ],
                        }),
                      })
                    : void 0,
                  t.telegramLink &&
                    (0, v.jsx)("div", {
                      onClick: function () {
                        return be(t.telegramLink);
                      },
                      className: "telegram-grupo",
                      children: (0, v.jsxs)("div", {
                        className:
                          "btn btn-sm btn-info btn-block text-white mb-1 w-100 box-shadow-08",
                        children: [
                          (0, v.jsx)("i", { className: "bi bi-telegram" }),
                          " Telegram",
                        ],
                      }),
                    }),
                  i.comissaoAfiliado > 0 &&
                    (0, v.jsxs)("button", {
                      className: "btn btn-sm btn-light",
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#modal-indique",
                      children: [
                        (0, v.jsx)("i", { className: "bi bi-asterisk" }),
                        " GANHE ",
                        i.comissaoAfiliado,
                        "%",
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      }
      function ie(e, s) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function oe(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? ie(Object(a), !0).forEach(function (s) {
                (0, t.Z)(e, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ie(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return e;
      }
      var le = !0;
      function ce(e) {
        return "v1" == e.app.versao_site
          ? (0, v.jsx)(ae, oe({}, e))
          : (0, v.jsx)(re, oe({}, e));
      }
    },
    7109: function (e, s, a) {
      "use strict";
      function t(e) {
        var s =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        return e.toString().padStart(s, "0");
      }
      function n(e) {
        var s = document.createElement("textarea");
        (s.innerText = e),
          document.body.appendChild(s),
          s.select(),
          document.execCommand("copy"),
          s.remove();
      }
      function r(e, s, a, t) {
        var n = parseFloat(e),
          r = s;
        n = isFinite(+n) ? +n : 0;
        var i,
          o,
          l = "undefined" == typeof t ? "." : t,
          c = "undefined" == typeof a ? "," : a,
          d =
            (r = isFinite(+r) ? Math.abs(r) : 0) > 0
              ? n.toFixed(r)
              : Math.round(n).toFixed(r),
          m = Math.abs(n).toFixed(r);
        return (
          m >= 1e3
            ? ((o = (i = m.split(/\D/))[0].length % 3 || 3),
              (i[0] =
                d.slice(0, o + (n < 0)) +
                i[0].slice(o).replace(/(\d{3})/g, l + "$1")),
              (d = i.join(c)))
            : (d = d.replace(".", c)),
          d
        );
      }
      function i(e) {
        return r(e, 2, ",", ".");
      }
      a.d(s, {
        mO: function () {
          return t;
        },
        vQ: function () {
          return n;
        },
        AZ: function () {
          return r;
        },
        bC: function () {
          return i;
        },
      });
    },
    8054: function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        SJ: function () {
          return decodeTotalLivres;
        },
        B6: function () {
          return decodeSorteioNumeros;
        },
        $1: function () {
          return getCookies;
        },
        DP: function () {
          return getUrlParams;
        },
        Ko: function () {
          return sendFbq;
        },
        Z5: function () {
          return progressPromoDobro;
        },
        mr: function () {
          return formatTime;
        },
        mH: function () {
          return checkPromoDobro;
        },
        p6: function () {
          return formatDate;
        },
        eJ: function () {
          return decodeApiValues;
        },
        Uu: function () {
          return getUpSell;
        },
      });
      var _vercel_path0_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(318),
        nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2286),
        nookies__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          nookies__WEBPACK_IMPORTED_MODULE_0__
        );
      function _createForOfIteratorHelper(e, s) {
        var a =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!a) {
          if (
            Array.isArray(e) ||
            (a = _unsupportedIterableToArray(e)) ||
            (s && e && "number" === typeof e.length)
          ) {
            a && (e = a);
            var t = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          i = !0,
          o = !1;
        return {
          s: function () {
            a = a.call(e);
          },
          n: function () {
            var e = a.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (o = !0), (r = e);
          },
          f: function () {
            try {
              i || null == a.return || a.return();
            } finally {
              if (o) throw r;
            }
          },
        };
      }
      function _unsupportedIterableToArray(e, s) {
        if (e) {
          if ("string" === typeof e) return _arrayLikeToArray(e, s);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === a && e.constructor && (a = e.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? _arrayLikeToArray(e, s)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(e, s) {
        (null == s || s > e.length) && (s = e.length);
        for (var a = 0, t = new Array(s); a < s; a++) t[a] = e[a];
        return t;
      }
      function base64decode(e) {
        return decodeURIComponent(escape(window.atob(e)));
      }
      function decodeTotalLivres(e) {
        return getInfoDecode(2, strtr(e, "POIUYTREWQ", "0123456789"));
      }
      function getInfoDecode(e, s) {
        var a = 10 * e - 10,
          t = 10 * e;
        return parseInt(s.toString().slice(a, t)) || 0;
      }
      function decodeSorteioNumeros(e) {
        var s = strtr(e._, "POIUYTREWQ", "0123456789");
        return {
          minimoCotas: getInfoDecode(1, s),
          limiteCotas: getInfoDecode(2, s),
          digitos: getInfoDecode(3, s),
          inicial: getInfoDecode(4, s),
          final: getInfoDecode(5, s),
          total_numeros: getInfoDecode(6, s),
          pagos: getInfoDecode(7, s),
          apenas_disponiveis: getInfoDecode(8, s),
          porcentagem_livres: getInfoDecode(9, s) / 100,
        };
      }
      function strtr(e, s, a) {
        s.length;
        return (
          (s = (s + "").split("")),
          (a = (a + "").split("")),
          s.forEach(function (s, t) {
            return (e = e.replaceAll(s, a[t] || ""));
          }),
          e
        );
      }
      function getCookies() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return nookies__WEBPACK_IMPORTED_MODULE_0___default().get(e, {
          path: "/",
        });
      }
      function getUrlParams() {
        var e,
          s = window.location.search,
          a = {},
          t = _createForOfIteratorHelper(new URLSearchParams(s).entries());
        try {
          for (t.s(); !(e = t.n()).done; ) {
            var n = (0,
              _vercel_path0_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.Z)(
                e.value,
                2
              ),
              r = n[0],
              i = n[1];
            a[r] = i;
          }
        } catch (o) {
          t.e(o);
        } finally {
          t.f();
        }
        return a;
      }
      function sendFbq(eventName, data) {
        var cookies = getCookies(),
          config = window.pixel_config,
          track = "track",
          eventos = [
            "AddPaymentInfo",
            "AddToCart",
            "AddToWishlist",
            "CompleteRegistration",
            "Contact",
            "CustomizeProduct",
            "Donate",
            "FindLocation",
            "InitiateCheckout",
            "Lead",
            "PurchaseFront",
            "Schedule",
            "Search",
            "StartTrial",
            "SubmitApplication",
            "Subscribe",
            "ViewContent",
          ];
        console.log(eventName),
          eventos.find(function (e) {
            return e === eventName;
          }) || (track = "trackCustom"),
          "function" === typeof window.fbq &&
            eval(
              base64decode(
                "d2luZG93WydmYnEnXSh0cmFjaywgZXZlbnROYW1lLCBkYXRhKTs="
              )
            ),
          ("object" !== typeof window.kwaiq &&
            "string" !== typeof window.kwaiPixelID) ||
            kwaiq.instance(window.kwaiPixelID).track(eventName, data),
          "function" === typeof window.gtag &&
            window.gtag("event", eventName, data);
      }
      function progressPromoDobro(e) {
        if (null == e.promoDobro)
          return { mensagem: "Promo\xe7\xe3o encerrada", porcentagem: 100 };
        var s = new Date(e.promoDobro.inicio).getTime(),
          a = new Date(e.promoDobro.fim).getTime(),
          t = new Date().getTime();
        if (s > t)
          return {
            mensagem: "Aguarde a promo\xe7\xe3o iniciar",
            porcentagem: 0,
          };
        if (a < t)
          return { mensagem: "Promo\xe7\xe3o encerrada", porcentagem: 100 };
        var n = a - s,
          r = t - s;
        return {
          mensagem: "Encerra em " + formatTime((n - r) / 1e3),
          porcentagem: (100 * r) / n,
        };
      }
      function formatTime(e) {
        var s = Math.floor(e / 3600),
          a = Math.floor((e % 3600) / 60),
          t = parseInt(e % 60);
        return [
          s.toString().padStart(2, "0"),
          a.toString().padStart(2, "0"),
          t.toString().padStart(2, "0"),
        ].join(":");
      }
      function checkPromoDobro(e) {
        if (null == e.promoDobro) return !1;
        var s = new Date(e.promoDobro.inicio).getTime(),
          a = new Date(e.promoDobro.fim).getTime(),
          t = new Date().getTime();
        return t > s && t < a;
      }
      function formatDate(e) {
        var s =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "dd/mm/yyyy \xe0s hh:ii";
        if (!e) return null;
        var a = new Date(e),
          t = a.getDate().toString().padStart(2, "0"),
          n = (a.getMonth() + 1).toString().padStart(2, "0"),
          r = a.getFullYear(),
          i = a.getHours().toString().padStart(2, "0"),
          o = a.getMinutes().toString().padStart(2, "0"),
          l = a.getSeconds().toString().padStart(2, "0"),
          c = { dd: t, mm: n, yyyy: r, hh: i, ii: o, ss: l };
        return (
          Object.keys(c).forEach(function (e) {
            return (s = s.replaceAll(e, c[e]));
          }),
          s
        );
      }
      function decodeApiValues(e, s) {
        return e && "" != e && "string" == typeof e && s && Array.isArray(s)
          ? e.split("|").map(function (e) {
              var a = e.split(":"),
                t = {};
              return (
                s.forEach(function (e, s) {
                  var n = a[s];
                  (n = -1 !== n.indexOf(".") ? parseFloat(n) : parseInt(n)),
                    (t[e] = n);
                }),
                t
              );
            })
          : null;
      }
      function getUpSell(e, s) {
        return s.ups
          ? decodeApiValues(s.ups, ["min", "qtde", "valor"]).find(function (s) {
              return s.min <= e;
            })
          : null;
      }
    },
    9091: function (e) {
      e.exports = {
        sorteioShare: "sorteio_sorteioShare__247_t",
        numerosAleatorios: "sorteio_numerosAleatorios__2FuRF",
        divHide: "sorteio_divHide__3ys5j",
        sorteioShareLink: "sorteio_sorteioShareLink__33yrm",
        sorteioShareLinkWhatsApp: "sorteio_sorteioShareLinkWhatsApp__2Vqhy",
        sorteioShareLinkTwitter: "sorteio_sorteioShareLinkTwitter__1E4XC",
        sorteioShareLinkTelegram: "sorteio_sorteioShareLinkTelegram__3a2_s",
        sorteioShareLinkFacebook: "sorteio_sorteioShareLinkFacebook__2McKU",
        numerosSelecionados: "sorteio_numerosSelecionados__38Cka",
        sorteioCheckoutInfo: "sorteio_sorteioCheckoutInfo__3sxdl",
        numerosSelecionadosOpen: "sorteio_numerosSelecionadosOpen__2Lb7Y",
        sorteioDesc: "sorteio_sorteioDesc__TBYaL",
        sorteioDescBody: "sorteio_sorteioDescBody__3n4ko",
      };
    },
    7561: function (e) {
      e.exports = {
        NumeroTpl: "NumeroTpl_NumeroTpl__3eSjV",
        NumeroTplSelected: "NumeroTpl_NumeroTplSelected__1pFkM",
      };
    },
    4313: function (e) {
      e.exports = {
        sorteioTpl: "SorteioTpl_sorteioTpl__2s2Wu",
        dtSorteio: "SorteioTpl_dtSorteio__2mfSc",
        imagemContainer: "SorteioTpl_imagemContainer__2-pl4",
        v2: "SorteioTpl_v2__1UXsE",
        imagem: "SorteioTpl_imagem__2GXxI",
        info: "SorteioTpl_info__t1BZr",
        descricao: "SorteioTpl_descricao__1b7iL",
        avisos: "SorteioTpl_avisos__1RrEk",
        destaque: "SorteioTpl_destaque__3vnWR",
        title: "SorteioTpl_title__3RLtu",
        infosFlutuante: "SorteioTpl_infosFlutuante__3FmhL",
      };
    },
  },
]);
