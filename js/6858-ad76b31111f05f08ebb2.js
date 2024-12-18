(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6858],
  {
    6858: function (e, a, s) {
      "use strict";
      s.d(a, {
        Z: function () {
          return w;
        },
      });
      var i = s(266),
        l = s(809),
        n = s.n(l),
        c = s(9598),
        r = s.n(c),
        t = s(1664),
        o = s(5893);
      function d(e) {
        var a = e.app,
          s = e.float,
          i = e.lojista,
          l =
            null !== i && void 0 !== i && i.urlamigavel
              ? "/af/" + i.urlamigavel + "/"
              : "/",
          n =
            (null === i || void 0 === i ? void 0 : i.logo) ||
            (null === a || void 0 === a ? void 0 : a.logo_white);
        return (0, o.jsx)("header", {
          className: r().appHeader,
          "data-fixed": s,
          children: (0, o.jsx)("div", {
            className: r().appHeaderContainer,
            children: (0, o.jsx)("div", {
              className: "container container-600 font-mdd",
              children: (0, o.jsxs)("div", {
                className: r().appHeaderWrap,
                children: [
                  (0, o.jsx)(t.default, {
                    href: l,
                    children: (0, o.jsx)("a", {
                      className: "flex-grow-1",
                      children: (0, o.jsx)("img", {
                        src: n,
                        className: r().appHeaderBrand,
                      }),
                    }),
                  }),
                  (0, o.jsx)(t.default, {
                    href: "".concat(l, "meus-numeros"),
                    children: (0, o.jsx)("a", {
                      className:
                        "btn btn-link text-white font-lg opacity-50 pe-0",
                      children: (0, o.jsx)("i", {
                        className: "bi bi-cart-check",
                      }),
                    }),
                  }),
                  (0, o.jsx)("button", {
                    type: "button",
                    "aria-label": "Menu",
                    className: "btn btn-link text-white font-lgg pe-0",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#mobileMenu",
                    children: (0, o.jsx)("i", {
                      className: "bi bi-filter-right",
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function h(e) {
        var a = e.app,
          s = e.lojista,
          i =
            (new Date().getFullYear(),
            (null === a || void 0 === a ? void 0 : a.etapas_compra) || []),
          l = {
            facebook: {},
            twitter: {},
            linkedin: {},
            instagram: { backgroundColor: "#E15426", color: "white" },
            youtube: {},
            vimeo: {},
            googleplus: {},
            skype: {},
          },
          n =
            (null === s || void 0 === s ? void 0 : s.rodape) ||
            a.direitos_autorais_txt,
          c = Object.keys(l)
            .map(function (e) {
              var s = l[e],
                i = a.redes[e];
              if (i)
                return (0, o.jsx)(
                  "div",
                  {
                    className: "btn",
                    style: s,
                    onClick: function () {
                      return (function (e) {
                        return window.open(e, "_blank");
                      })(i);
                    },
                    children: (0, o.jsx)("i", { className: "bi bi-" + e }),
                  },
                  "rede-".concat(e)
                );
            })
            .filter(function (e) {
              return e;
            });
        return i.length || c.length || n
          ? (0, o.jsxs)("footer", {
              className: "app-footer pb-3",
              style: { lineHeight: "170%" },
              children: [
                i.length > 0 &&
                  (0, o.jsx)("div", {
                    className: "container-fluid pt-4 etapas-compra",
                    children: (0, o.jsx)("div", {
                      className: "row row-cols-md-".concat(
                        Math.min(4, i.length),
                        " row-cols-1"
                      ),
                      children: (a.etapas_compra || []).map(function (e, a) {
                        return (0,
                        o.jsx)("div", { className: "col", children: (0, o.jsxs)("div", { className: "pt-0 pb-3 pb-md-0 etapas-compra-item", children: [(0, o.jsx)("div", { className: "etapas-compra--numero", children: a + 1 }), (0, o.jsxs)("div", { className: "etapas-compra--content", children: [(0, o.jsx)("h5", { children: e.title }), (0, o.jsx)("div", { dangerouslySetInnerHTML: { __html: e.txt.replace("\n", "<br />") } })] })] }) }, "etapa-compra-" + a);
                      }),
                    }),
                  }),
                c.length > 0 &&
                  (0, o.jsx)("div", {
                    className: "btn-group ".concat(
                      i.length > 0 ? "pt-md-4 pt-0" : ""
                    ),
                    children: c,
                  }),
                n &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (c.length > 0 || i.length > 0) && (0, o.jsx)("hr", {}),
                      (0, o.jsx)("div", {
                        className: "container",
                        children: (0, o.jsx)("div", {
                          dangerouslySetInnerHTML: { __html: n },
                        }),
                      }),
                    ],
                  }),
              ],
            })
          : null;
      }
      var x = s(6372),
        m = s(7294),
        j = s(5467),
        u = s(8517),
        p = s.n(u);
      function b(e) {
        var a = e.app,
          s = e.lojista,
          i = "promocoes" == a.tipo_site,
          l = (0, x.v9)(function (e) {
            return e.user;
          }),
          n = (0, x.I0)(),
          c =
            null !== s && void 0 !== s && s.urlamigavel
              ? "/af/".concat(s.urlamigavel, "/")
              : "/";
        function r() {
          confirm("Deseja sair da sua conta?") && n((0, j.av)(null));
        }
        function d() {
          return l.user;
        }
        return (0, o.jsx)("menu", {
          id: "mobileMenu",
          className: "modal fade modal-fluid",
          tabIndex: "-1",
          "aria-labelledby": "mobileMenuLabel",
          "aria-hidden": "true",
          children: (0, o.jsx)("div", {
            className: "modal-dialog modal-fullscreen",
            children: (0, o.jsxs)("div", {
              className: "modal-content bg-cor-primaria",
              children: [
                (0, o.jsx)("header", {
                  className: "app-header app-header-mobile--show",
                  children: (0, o.jsxs)("div", {
                    className:
                      "container container-600 h-100 d-flex align-items-center justify-content-between",
                    children: [
                      (0, o.jsx)(t.default, {
                        href: c,
                        children: (0, o.jsx)("a", {
                          children: (0, o.jsx)("img", {
                            src:
                              null === a || void 0 === a
                                ? void 0
                                : a.logo_white,
                            className: "app-brand img-fluid",
                          }),
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "app-header-mobile",
                        children: (0, o.jsx)("button", {
                          type: "button",
                          className:
                            "btn btn-link text-white menu-mobile--button pe-0 font-lgg",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Fechar",
                          children: (0, o.jsx)("i", {
                            className: "bi bi-x-circle",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "modal-body",
                  children: (0, o.jsxs)("div", {
                    className: "container container-600",
                    children: [
                      d() &&
                        (0, o.jsxs)("div", {
                          className: "card-usuario mb-2",
                          children: [
                            (0, o.jsx)("picture", {
                              children: (0, o.jsx)("img", {
                                src: d().foto,
                                className: "img-fluid img-perfil",
                              }),
                            }),
                            (0, o.jsxs)("div", {
                              className: "card-usuario--informacoes",
                              children: [
                                (0, o.jsxs)("h3", {
                                  children: ["Ol\xe1, ", d().nome],
                                }),
                                (0, o.jsx)("div", {
                                  className: "email font-xss saldo-value",
                                  children: d().email,
                                }),
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: "card-usuario--sair",
                              children: (0, o.jsx)("button", {
                                type: "button",
                                onClick: r,
                                className:
                                  "btn btn-link text-center text-white-50 ps-1 pe-0 pt-0 pb-0 font-lg",
                                children: (0, o.jsx)("i", {
                                  className: "bi bi-box-arrow-left",
                                }),
                              }),
                            }),
                          ],
                        }),
                      (0, o.jsx)("nav", {
                        className: "nav-vertical nav-submenu font-xs mb-2",
                        children: (0, o.jsxs)("ul", {
                          children: [
                            (0, o.jsx)("li", {
                              children: (0, o.jsx)(t.default, {
                                href: c,
                                children: (0, o.jsxs)("a", {
                                  className: "text-white",
                                  alt: "P\xe1gina Principal",
                                  children: [
                                    (0, o.jsx)("i", {
                                      className: "icone bi bi-house",
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "In\xedcio",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            i
                              ? (0, o.jsx)("li", {
                                  children: (0, o.jsx)(t.default, {
                                    href: "".concat(c, "campanhas"),
                                    children: (0, o.jsxs)("a", {
                                      className: "text-white",
                                      alt: "Campanhas",
                                      children: [
                                        (0, o.jsx)("i", {
                                          className: "icone bi bi-card-list",
                                        }),
                                        (0, o.jsx)("span", {
                                          children: "Campanhas",
                                        }),
                                      ],
                                    }),
                                  }),
                                })
                              : (0, o.jsx)("li", {
                                  children: (0, o.jsx)(t.default, {
                                    href: "".concat(c, "sorteios"),
                                    children: (0, o.jsxs)("a", {
                                      className: "text-white",
                                      alt: "Sorteios",
                                      children: [
                                        (0, o.jsx)("i", {
                                          className: "icone bi bi-card-list",
                                        }),
                                        (0, o.jsx)("span", {
                                          children: "Sorteios",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            i &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "".concat(c, "comunicados"),
                                  children: (0, o.jsxs)("a", {
                                    className: "text-white",
                                    alt: "Comunicados",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-newspaper",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Comunicados",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            "disable" !== a.campo_consulta &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "".concat(c, "meus-numeros"),
                                  children: (0, o.jsxs)("a", {
                                    className: "text-white",
                                    alt: "{!isPromocoes ? 'Meus n\xfameros' : 'Meus t\xedtulos'}",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-card-list",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: i
                                          ? "Meus t\xedtulos"
                                          : "Meus n\xfameros",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            a.creditos_habilitado &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "/creditos",
                                  children: (0, o.jsxs)("a", {
                                    alt: "Cr\xe9ditos",
                                    className: "text-white",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className:
                                          "icone bi bi-lightning-charge",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Adicionar cr\xe9ditos",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            a.sorteioCaixas &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "".concat(c, "minhas-caixas"),
                                  children: (0, o.jsxs)("a", {
                                    className: "text-white",
                                    alt: "Minhas caixas",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-gift-fill",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Minhas caixas",
                                      }),
                                      (0, o.jsx)("span", {
                                        className: "badge bg-success ms-1",
                                        children: "Novo",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            d() &&
                              (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)("li", {
                                    children: (0, o.jsx)(t.default, {
                                      href: "/user/atualizar-cadastro",
                                      children: (0, o.jsxs)("a", {
                                        alt: "Atualizar cadastro",
                                        className: "text-white",
                                        children: [
                                          (0, o.jsx)("i", {
                                            className:
                                              "icone bi bi-person-circle",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Atualizar cadastro",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, o.jsx)("li", {
                                    children: (0, o.jsx)(t.default, {
                                      href: "/user/compras",
                                      children: (0, o.jsxs)("a", {
                                        alt: "Minhas compras",
                                        className: "text-white",
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "icone bi bi-cart-check",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Minhas compras",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  a.saque_habilitado &&
                                    (0, o.jsx)("li", {
                                      children: (0, o.jsx)(t.default, {
                                        href: "/user/saque",
                                        children: (0, o.jsxs)("a", {
                                          className: "text-white",
                                          alt: "Saque de cr\xe9ditos",
                                          children: [
                                            (0, o.jsx)("i", {
                                              className:
                                                "icone bi bi-cash-coin",
                                            }),
                                            (0, o.jsxs)("span", {
                                              children: [
                                                "Saque ",
                                                (0, o.jsx)("span", {
                                                  className:
                                                    "badge bg-success ms-1",
                                                  children: "Novo",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  (0, o.jsx)("li", {
                                    children: (0, o.jsx)(t.default, {
                                      href: "/user/alterar-senha",
                                      children: (0, o.jsxs)("a", {
                                        alt: "Alterar senha",
                                        className: "text-white",
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "icone bi bi-key-fill",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Alterar senha",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            !d() &&
                              !s &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "/cadastrar",
                                  children: (0, o.jsxs)("a", {
                                    alt: "Cadastre-se",
                                    className: "text-white",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className:
                                          "icone bi bi-box-arrow-in-right",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Cadastro",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            (0, o.jsx)("li", {
                              children: (0, o.jsx)(t.default, {
                                href: "".concat(c, "ganhadores"),
                                children: (0, o.jsxs)("a", {
                                  alt: "Ganhadores",
                                  className: "text-white",
                                  children: [
                                    (0, o.jsx)("i", {
                                      className: "icone bi bi-trophy",
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "Ganhadores",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            a.comissaoAfiliado > 0 &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "/afiliado",
                                  children: (0, o.jsxs)("a", {
                                    alt: "Afilie-se",
                                    className: "text-white",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-cash-coin",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Seja um afiliado",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            (0, o.jsx)("li", {
                              children: (0, o.jsx)(t.default, {
                                href: "".concat(c, "termos-de-uso"),
                                children: (0, o.jsxs)("a", {
                                  alt: "Termos de uso",
                                  className: "text-white",
                                  children: [
                                    (0, o.jsx)("i", {
                                      className: "icone bi bi-blockquote-right",
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "Termos de uso",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, o.jsx)("li", {
                              className: "col-contato-display",
                              children: (0, o.jsx)(t.default, {
                                href: "".concat(c, "contato"),
                                children: (0, o.jsxs)("a", {
                                  alt: "Entre em contato conosco",
                                  className: "text-white",
                                  children: [
                                    (0, o.jsx)("i", {
                                      className: "icone bi bi-envelope",
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "Entrar em contato",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "text-center",
                        children: d()
                          ? (0, o.jsxs)("button", {
                              type: "button",
                              className: "btn btn-primary w-100 rounded-pill",
                              onClick: r,
                              children: [
                                (0, o.jsx)("i", {
                                  className: "icone bi bi-box-arrow-in-right",
                                }),
                                " Sair",
                              ],
                            })
                          : (0, o.jsxs)("button", {
                              type: "button",
                              className: "btn btn-primary w-100 rounded-pill",
                              onClick: function () {
                                var e = document.getElementById("mobileMenu");
                                if (e) {
                                  var a =
                                    bootstrap.Modal.getOrCreateInstance(e);
                                  a && a.hide();
                                }
                                var s = document.getElementById("loginModal");
                                if (s) {
                                  var i =
                                    bootstrap.Modal.getOrCreateInstance(s);
                                  i && i.show();
                                }
                              },
                              children: [
                                (0, o.jsx)("i", {
                                  className: "icone bi bi-box-arrow-in-right",
                                }),
                                " Entrar",
                              ],
                            }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: "modal-footer text-white",
                  children: [
                    (0, o.jsx)("small", {
                      className: "text-uppercase",
                      children: "Compartilhe",
                    }),
                    (0, o.jsxs)("ul", {
                      className: "lista-horizontal",
                      children: [
                        (0, o.jsx)("li", {
                          children: (0, o.jsx)("a", {
                            href: "",
                            alt: "Acompanhe nosso Facebook",
                            className: "rede-social-item",
                            children: (0, o.jsx)("i", {
                              className: "bi bi-facebook",
                            }),
                          }),
                        }),
                        (0, o.jsx)("li", {
                          children: (0, o.jsx)("a", {
                            href: "",
                            alt: "Acompanhe nosso Instagram",
                            className: "rede-social-item",
                            children: (0, o.jsx)("i", {
                              className: "bi bi-instagram",
                            }),
                          }),
                        }),
                        (0, o.jsx)("li", {
                          children: (0, o.jsx)("a", {
                            href: "",
                            alt: "Fale conosco no whatsapp",
                            className: "rede-social-item",
                            children: (0, o.jsx)("i", {
                              className: "bi bi-whatsapp",
                            }),
                          }),
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
      var f = s(4699);
      function N(e) {
        var a = e.app,
          s = e.float,
          i = e.lojista,
          l = e.bgHeader,
          n = void 0 !== l && l,
          c = e.scrollNav,
          d = void 0 !== c && c,
          h =
            null !== i && void 0 !== i && i.urlamigavel
              ? "/af/" + i.urlamigavel + "/"
              : "/",
          j = (0, x.v9)(function (e) {
            return e.user;
          }),
          u =
            (null === i || void 0 === i ? void 0 : i.logo) ||
            (null === a || void 0 === a ? void 0 : a.logo_white),
          p = null === a || void 0 === a ? void 0 : a.link_afiliado,
          b = (0, m.useState)(!1),
          f = b[0],
          N = b[1];
        return (
          (0, m.useEffect)(function () {
            window.addEventListener("scroll", function () {
              N(window.scrollY > 170);
            });
          }, []),
          (0, o.jsx)("header", {
            className: [
              r().appHeader,
              r().appHeaderV2,
              f || n ? "menu-opened" : "before-scrolling",
              d ? f || "scroll-nav" : "",
            ].join(" "),
            "data-fixed": s,
            children: (0, o.jsxs)("div", {
              className: [
                r().appHeaderContainer,
                f || n ? "menu-opened" : "before-scrolling",
              ].join(" "),
              children: [
                (0, o.jsx)("div", {
                  className: "container container-600 font-mdd",
                  children: (0, o.jsxs)("div", {
                    className: r().appHeaderWrap,
                    children: [
                      (0, o.jsx)("button", {
                        type: "button",
                        "aria-label": "Menu",
                        className: "btn btn-link text-white font-lgg ps-0",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#mobileMenu",
                        style: { marginTop: 5 },
                        children: (0, o.jsx)("i", {
                          className: "bi bi-filter-left",
                        }),
                      }),
                      (0, o.jsx)(t.default, {
                        href: h,
                        children: (0, o.jsx)("a", {
                          className: "flex-grow-1 text-center",
                          children: (0, o.jsx)("img", {
                            src: u,
                            className: r().appHeaderBrand,
                          }),
                        }),
                      }),
                      (0, o.jsx)(t.default, {
                        href: "".concat(h, "contato"),
                        children: (0, o.jsxs)("a", {
                          className:
                            "btn btn-link text-white pe-0 text-right text-decoration-none",
                          children: [
                            (0, o.jsx)("div", {
                              className:
                                "suporte d-flex justify-content-end opacity-50",
                              children: (0, o.jsx)("i", {
                                className: "bi bi-chat-right-dots-fill",
                              }),
                            }),
                            (0, o.jsx)("div", {
                              className: "suporte text-yellow font-xss",
                              children: "Suporte",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: "nav-principal-horizontal",
                  children: [
                    (0, o.jsx)("hr", { className: r().hrOpacity + " my-1" }),
                    (0, o.jsx)("div", {
                      className: "container container-600 font-md",
                      children: (0, o.jsx)("div", {
                        className: "row",
                        children: (0, o.jsx)("div", {
                          className: "col-12",
                          children: (0, o.jsxs)("ul", {
                            className:
                              r().navHorizontalHeader +
                              " lista-horizontal px-0 py-3 font-xs",
                            children: [
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "".concat(h, "campanhas"),
                                  children: (0, o.jsxs)("a", {
                                    className: r().active,
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: r().icone + " bi bi-stars",
                                      }),
                                      " Campanhas",
                                    ],
                                  }),
                                }),
                              }),
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "".concat(h, "meus-numeros"),
                                  children: (0, o.jsx)("a", {
                                    className: "text-open",
                                    children: "Meus t\xedtulos",
                                  }),
                                }),
                              }),
                              p &&
                                j.user &&
                                (0, o.jsx)("li", {
                                  className: "position-relative",
                                  children: (0, o.jsx)(t.default, {
                                    href: "".concat(
                                      h,
                                      "user/afiliado/meus-links"
                                    ),
                                    children: (0, o.jsxs)("a", {
                                      className: "text-open",
                                      children: [
                                        "Afiliados",
                                        (0, o.jsxs)("span", {
                                          className:
                                            "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success bg-opacity-25",
                                          children: [
                                            "Novo",
                                            (0, o.jsx)("span", {
                                              className: "visually-hidden",
                                              children: "novidade afiliados",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function v(e) {
        var a = e.app,
          s = e.lojista,
          i = "promocoes" == a.tipo_site,
          l = (0, x.v9)(function (e) {
            return e.user;
          }),
          n = (0, x.I0)(),
          c =
            null !== s && void 0 !== s && s.urlamigavel
              ? "/af/".concat(s.urlamigavel, "/")
              : "/";
        function r() {
          confirm("Deseja sair da sua conta?") && n((0, j.av)(null));
        }
        function d() {
          return l.user;
        }
        return (0, o.jsx)("menu", {
          id: "mobileMenu",
          className: "modal fade modal-fluid",
          tabIndex: "-1",
          "aria-labelledby": "mobileMenuLabel",
          "aria-hidden": "true",
          children: (0, o.jsx)("div", {
            className: "modal-dialog modal-fullscreen",
            children: (0, o.jsxs)("div", {
              className: "modal-content bg-cor-primaria",
              children: [
                (0, o.jsx)("header", {
                  className: "app-header app-header-mobile--show",
                  children: (0, o.jsxs)("div", {
                    className:
                      "container container-600 h-100 d-flex align-items-center justify-content-between",
                    children: [
                      (0, o.jsx)(t.default, {
                        href: c,
                        children: (0, o.jsx)("a", {
                          children: (0, o.jsx)("img", {
                            src:
                              null === a || void 0 === a
                                ? void 0
                                : a.logo_white,
                            className: "app-brand img-fluid",
                          }),
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "app-header-mobile",
                        children: (0, o.jsx)("button", {
                          type: "button",
                          className:
                            "btn btn-link text-white menu-mobile--button pe-0 font-lgg",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Fechar",
                          children: (0, o.jsx)("i", {
                            className: "bi bi-x-circle",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "modal-body",
                  children: (0, o.jsxs)("div", {
                    className: "container container-600",
                    children: [
                      d() &&
                        (0, o.jsxs)("div", {
                          className: "card-usuario mb-2",
                          children: [
                            (0, o.jsx)("picture", {
                              children: (0, o.jsx)("img", {
                                src: d().foto,
                                className: "img-fluid img-perfil",
                              }),
                            }),
                            (0, o.jsxs)("div", {
                              className: "card-usuario--informacoes",
                              children: [
                                (0, o.jsxs)("h3", {
                                  children: [
                                    "Ol\xe1, ",
                                    d().nomeSocial || d().nome,
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className: "email font-xss saldo-value",
                                  children: d().email,
                                }),
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: "card-usuario--sair",
                              children: (0, o.jsx)("button", {
                                type: "button",
                                onClick: r,
                                className:
                                  "btn btn-link text-center text-white-50 ps-1 pe-0 pt-0 pb-0 font-lg",
                                children: (0, o.jsx)("i", {
                                  className: "bi bi-box-arrow-left",
                                }),
                              }),
                            }),
                          ],
                        }),
                      (0, o.jsx)("nav", {
                        className: "nav-vertical nav-submenu font-xs mb-2",
                        children: (0, o.jsxs)("ul", {
                          children: [
                            (0, o.jsx)("li", {
                              children: (0, o.jsx)(t.default, {
                                href: c,
                                children: (0, o.jsxs)("a", {
                                  className: "text-white",
                                  alt: "P\xe1gina Principal",
                                  children: [
                                    (0, o.jsx)("i", {
                                      className: "icone bi bi-house",
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "In\xedcio",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            i
                              ? (0, o.jsx)("li", {
                                  children: (0, o.jsx)(t.default, {
                                    href: "".concat(c, "campanhas"),
                                    children: (0, o.jsxs)("a", {
                                      className: "text-white",
                                      alt: "Campanhas",
                                      children: [
                                        (0, o.jsx)("i", {
                                          className: "icone bi bi-card-list",
                                        }),
                                        (0, o.jsx)("span", {
                                          children: "Campanhas",
                                        }),
                                      ],
                                    }),
                                  }),
                                })
                              : (0, o.jsx)("li", {
                                  children: (0, o.jsx)(t.default, {
                                    href: "".concat(c, "sorteios"),
                                    children: (0, o.jsxs)("a", {
                                      className: "text-white",
                                      alt: "Sorteios",
                                      children: [
                                        (0, o.jsx)("i", {
                                          className: "icone bi bi-card-list",
                                        }),
                                        (0, o.jsx)("span", {
                                          children: "Sorteios",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            i &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "".concat(c, "comunicados"),
                                  children: (0, o.jsxs)("a", {
                                    className: "text-white",
                                    alt: "Comunicados",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-newspaper",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Comunicados",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            "disable" !== a.campo_consulta &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "".concat(c, "meus-numeros"),
                                  children: (0, o.jsxs)("a", {
                                    className: "text-white",
                                    alt: "{!isPromocoes ? 'Meus n\xfameros' : 'Meus t\xedtulos'}",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-ui-checks",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: i
                                          ? "Meus t\xedtulos"
                                          : "Meus n\xfameros",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            a.sorteioCaixas &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "".concat(c, "minhas-caixas"),
                                  children: (0, o.jsxs)("a", {
                                    className: "text-white",
                                    alt: "Minhas caixas",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-gift-fill",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Minhas caixas",
                                      }),
                                      (0, o.jsx)("span", {
                                        className: "badge bg-success ms-1",
                                        children: "Novo",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            a.creditos_habilitado &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "/creditos",
                                  children: (0, o.jsxs)("a", {
                                    alt: "Cr\xe9ditos",
                                    className: "text-white",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className:
                                          "icone bi bi-lightning-charge",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Adicionar cr\xe9ditos",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            (function () {
                              var e,
                                a =
                                  null === (e = d()) || void 0 === e
                                    ? void 0
                                    : e.type;
                              return "adm" == a || "dev" == a || "admin" == a;
                            })() &&
                              (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)("li", {
                                  children: (0, o.jsxs)("a", {
                                    onClick: function () {
                                      window.open(
                                        ""
                                          .concat(p().API_PROTOCOLO, "://")
                                          .concat(p().APP_DOMAIN, "/admin"),
                                        "_blank"
                                      );
                                    },
                                    alt: "Acessar o administrador",
                                    className: "text-white",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-key-fill",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Acessar o administrador",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            d() &&
                              (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)("li", {
                                    children: (0, o.jsx)(t.default, {
                                      href: "/user/atualizar-cadastro",
                                      children: (0, o.jsxs)("a", {
                                        alt: "Atualizar cadastro",
                                        className: "text-white",
                                        children: [
                                          (0, o.jsx)("i", {
                                            className:
                                              "icone bi bi-person-circle",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Atualizar cadastro",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, o.jsx)("li", {
                                    children: (0, o.jsx)(t.default, {
                                      href: "/user/compras",
                                      children: (0, o.jsxs)("a", {
                                        alt: "Minhas compras",
                                        className: "text-white",
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "icone bi bi-cart-check",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Minhas compras",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  a.saque_habilitado &&
                                    (0, o.jsx)("li", {
                                      children: (0, o.jsx)(t.default, {
                                        href: "/user/saque",
                                        children: (0, o.jsxs)("a", {
                                          className: "text-white",
                                          alt: "Saque de cr\xe9ditos",
                                          children: [
                                            (0, o.jsx)("i", {
                                              className:
                                                "icone bi bi-cash-coin",
                                            }),
                                            (0, o.jsx)("span", {
                                              children: "Saque",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  (0, o.jsx)("li", {
                                    children: (0, o.jsx)(t.default, {
                                      href: "/user/alterar-senha",
                                      children: (0, o.jsxs)("a", {
                                        alt: "Alterar senha",
                                        className: "text-white",
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "icone bi bi-key-fill",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Alterar senha",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            !d() &&
                              !s &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "/cadastrar",
                                  children: (0, o.jsxs)("a", {
                                    alt: "Cadastre-se",
                                    className: "text-white",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className:
                                          "icone bi bi-box-arrow-in-right",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Cadastro",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            (0, o.jsx)("li", {
                              children: (0, o.jsx)(t.default, {
                                href: "".concat(c, "ganhadores"),
                                children: (0, o.jsxs)("a", {
                                  alt: "Ganhadores",
                                  className: "text-white",
                                  children: [
                                    (0, o.jsx)("i", {
                                      className: "icone bi bi-trophy",
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "Ganhadores",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            a.comissaoAfiliado > 0 &&
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)(t.default, {
                                  href: "/afiliado",
                                  children: (0, o.jsxs)("a", {
                                    alt: "Afilie-se",
                                    className: "text-white",
                                    children: [
                                      (0, o.jsx)("i", {
                                        className: "icone bi bi-cash-coin",
                                      }),
                                      (0, o.jsx)("span", {
                                        children: "Seja um afiliado",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            (0, o.jsx)("li", {
                              children: (0, o.jsx)(t.default, {
                                href: "".concat(c, "termos-de-uso"),
                                children: (0, o.jsxs)("a", {
                                  alt: "Termos de uso",
                                  className: "text-white",
                                  children: [
                                    (0, o.jsx)("i", {
                                      className: "icone bi bi-blockquote-right",
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "Termos de uso",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, o.jsx)("li", {
                              className: "col-contato-display",
                              children: (0, o.jsx)(t.default, {
                                href: "".concat(c, "contato"),
                                children: (0, o.jsxs)("a", {
                                  alt: "Entre em contato conosco",
                                  className: "text-white",
                                  children: [
                                    (0, o.jsx)("i", {
                                      className: "icone bi bi-envelope",
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "Entrar em contato",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "text-center",
                        children: d()
                          ? (0, o.jsxs)("button", {
                              type: "button",
                              className: "btn btn-primary w-100 rounded-pill",
                              onClick: r,
                              children: [
                                (0, o.jsx)("i", {
                                  className: "icone bi bi-box-arrow-in-right",
                                }),
                                " Sair",
                              ],
                            })
                          : (0, o.jsxs)("button", {
                              type: "button",
                              className: "btn btn-primary w-100 rounded-pill",
                              onClick: function () {
                                var e = document.getElementById("mobileMenu");
                                if (e) {
                                  var a =
                                    bootstrap.Modal.getOrCreateInstance(e);
                                  a && a.hide();
                                }
                                var s = document.getElementById("loginModal");
                                if (s) {
                                  var i =
                                    bootstrap.Modal.getOrCreateInstance(s);
                                  i && i.show();
                                }
                              },
                              children: [
                                (0, o.jsx)("i", {
                                  className: "icone bi bi-box-arrow-in-right",
                                }),
                                " Entrar",
                              ],
                            }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: "modal-footer text-white",
                  children: [
                    (0, o.jsx)("small", {
                      className: "text-uppercase",
                      children: "Compartilhe",
                    }),
                    (0, o.jsxs)("ul", {
                      className: "lista-horizontal",
                      children: [
                        (0, o.jsx)("li", {
                          children: (0, o.jsx)("a", {
                            href: "",
                            alt: "Acompanhe nosso Facebook",
                            className: "rede-social-item",
                            children: (0, o.jsx)("i", {
                              className: "bi bi-facebook",
                            }),
                          }),
                        }),
                        (0, o.jsx)("li", {
                          children: (0, o.jsx)("a", {
                            href: "",
                            alt: "Acompanhe nosso Instagram",
                            className: "rede-social-item",
                            children: (0, o.jsx)("i", {
                              className: "bi bi-instagram",
                            }),
                          }),
                        }),
                        (0, o.jsx)("li", {
                          children: (0, o.jsx)("a", {
                            href: "",
                            alt: "Fale conosco no whatsapp",
                            className: "rede-social-item",
                            children: (0, o.jsx)("i", {
                              className: "bi bi-whatsapp",
                            }),
                          }),
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
      function g(e) {
        var a = e.app,
          s = e.lojista,
          i =
            (new Date().getFullYear(),
            (null === a || void 0 === a ? void 0 : a.etapas_compra) || []),
          l = {
            facebook: {},
            twitter: {},
            linkedin: {},
            instagram: { backgroundColor: "#E15426", color: "white" },
            youtube: {},
            vimeo: {},
            googleplus: {},
            skype: {},
          },
          n =
            (null === s || void 0 === s ? void 0 : s.rodape) ||
            a.direitos_autorais_txt,
          c = Object.keys(l)
            .map(function (e) {
              var s = l[e],
                i = a.redes[e];
              if (i)
                return (0, o.jsx)(
                  "div",
                  {
                    className: "btn",
                    style: s,
                    onClick: function () {
                      return (function (e) {
                        return window.open(e, "_blank");
                      })(i);
                    },
                    children: (0, o.jsx)("i", { className: "bi bi-" + e }),
                  },
                  "rede-".concat(e)
                );
            })
            .filter(function (e) {
              return e;
            });
        return i.length || c.length || n
          ? (0, o.jsxs)("footer", {
              className: "app-footer pb-3",
              style: { lineHeight: "170%" },
              children: [
                i.length > 0 &&
                  (0, o.jsx)("div", {
                    className: "container-fluid pt-4 etapas-compra",
                    children: (0, o.jsx)("div", {
                      className: "row row-cols-md-".concat(
                        Math.min(4, i.length),
                        " row-cols-1"
                      ),
                      children: (a.etapas_compra || []).map(function (e, a) {
                        return (0,
                        o.jsx)("div", { className: "col", children: (0, o.jsxs)("div", { className: "pt-0 pb-3 pb-md-0 etapas-compra-item", children: [(0, o.jsx)("div", { className: "etapas-compra--numero", children: a + 1 }), (0, o.jsxs)("div", { className: "etapas-compra--content", children: [(0, o.jsx)("h5", { children: e.title }), (0, o.jsx)("div", { dangerouslySetInnerHTML: { __html: e.txt.replace("\n", "<br />") } })] })] }) }, "etapa-compra-" + a);
                      }),
                    }),
                  }),
                c.length > 0 &&
                  (0, o.jsx)("div", {
                    className: "btn-group ".concat(
                      i.length > 0 ? "pt-md-4 pt-0" : ""
                    ),
                    children: c,
                  }),
                n &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (c.length > 0 || i.length > 0) && (0, o.jsx)("hr", {}),
                      (0, o.jsx)("div", {
                        className: "container",
                        children: (0, o.jsx)("div", {
                          dangerouslySetInnerHTML: { __html: n },
                        }),
                      }),
                    ],
                  }),
                (0, o.jsx)("div", {
                  className: "container dev-rodape--container",
                  children: (0, o.jsx)("div", {
                    className: "row",
                    children: (0, o.jsxs)("div", {
                      className: "col-12 font-xss dev-rodape--txt",
                      children: [
                        "Desenvolvido por ",
                        (0, o.jsx)("a", {
                          href: "https://incrivel.tech/",
                          target: "_blank",
                          className:
                            "font-weight-600 font-xs badge bg-primary dev-rodape--link",
                          rel: "noreferrer",
                          children: "Incr\xedvel.Tech",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : null;
      }
      function w(e) {
        var a = e.children,
          s = e.app,
          l = e.lojista,
          c = e.versao,
          r = void 0 === c ? "v1" : c,
          t = e.bgHeader,
          u = void 0 !== t && t,
          p = e.scrollNav,
          w = void 0 !== p && p,
          _ = (0, x.I0)(),
          y = (0, x.v9)(function (e) {
            return e.user;
          });
        return (
          (0, m.useEffect)(function () {
            ((window.pixel_config = s.pixel || {
              ids: [],
              apenas_anuncios: !1,
            }),
            localStorage.getItem("access-token"))
              ? y.user ||
                (function () {
                  var e = (0, i.Z)(
                    n().mark(function e() {
                      var a;
                      return n().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), f.Z.check();
                              case 3:
                                (a = e.sent),
                                  _((0, j.av)({ user: a })),
                                  document.dispatchEvent(
                                    new Event("userLogged")
                                  ),
                                  (e.next = 12);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(0)),
                                  _((0, j.av)(null)),
                                  document.dispatchEvent(
                                    new Event("userUnLogged")
                                  );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()()
              : _((0, j.av)(null));
          }, []),
          (0, o.jsxs)(o.Fragment, {
            children: [
              "v1" == r
                ? (0, o.jsx)(d, { app: s, lojista: l })
                : (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(N, {
                      app: s,
                      lojista: l,
                      bgHeader: u,
                      scrollNav: w,
                    }),
                  }),
              1 == u ? (0, o.jsx)("div", { className: "black-bar fuse" }) : "",
              "v1" == r
                ? (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsx)("div", { className: "black-bar fuse" }),
                      " ",
                      (0, o.jsx)(b, { app: s, lojista: l }),
                    ],
                  })
                : (0, o.jsx)(v, { app: s, lojista: l }),
              s.em_manutencao
                ? (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("div", {
                      className: "app-main container",
                      children: (0, o.jsx)("div", {
                        className: "app-card card",
                        children: (0, o.jsx)("div", {
                          className: "card-body",
                          children: (0, o.jsxs)("div", {
                            className: "alert alert-warning",
                            children: [
                              (0, o.jsx)("i", {
                                className: "bi bi-exclamation-circle",
                              }),
                              "Sistema em manuten\xe7\xe3o :(, aguarde alguns instantes",
                            ],
                          }),
                        }),
                      }),
                    }),
                  })
                : a,
              "v1" == r
                ? (0, o.jsx)(h, { app: s, lojista: l })
                : (0, o.jsx)(g, { app: s, lojista: l }),
            ],
          })
        );
      }
    },
    9598: function (e) {
      e.exports = {
        appHeaderV2: "Header_appHeaderV2__2dsgb",
        appHeaderContainer: "Header_appHeaderContainer__MSPJv",
        appHeader: "Header_appHeader__3lDdI",
        appHeaderWrap: "Header_appHeaderWrap__2rUwY",
        "btn-link": "Header_btn-link__1ambC",
        "btn-notificacoes": "Header_btn-notificacoes__3EZ5R",
        appHeaderBrand: "Header_appHeaderBrand__3GlmQ",
        hrOpacity: "Header_hrOpacity__NZnfr",
        navHorizontalHeader: "Header_navHorizontalHeader__2O8dU",
        active: "Header_active__2hctP",
        icone: "Header_icone__1gXit",
      };
    },
  },
]);
