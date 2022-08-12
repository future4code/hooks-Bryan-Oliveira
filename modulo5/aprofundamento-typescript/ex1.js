"use strict";
// a)
const minhaString = 'string';
// b)
const meuNumero = 5;
// c)
var coresArcoIris;
(function (coresArcoIris) {
    coresArcoIris["AZUL"] = "azul";
    coresArcoIris["VERMELHO"] = "vermelho";
    coresArcoIris["VERDE"] = "verde";
    coresArcoIris["AMARELO"] = "amarelo";
    coresArcoIris["LARANJA"] = "laranja";
    coresArcoIris["AZUL_ESCURO"] = "azul-escuro";
    coresArcoIris["VIOLETA"] = "violeta";
})(coresArcoIris || (coresArcoIris = {}));
const pessoa1 = {
    nome: "joáo",
    idade: 21,
    corFav: coresArcoIris.AZUL
};
const pessoa2 = {
    nome: "bryan",
    idade: 22,
    corFav: coresArcoIris.VERMELHO
};
const pessoa3 = {
    nome: "luciano",
    idade: 20,
    corFav: coresArcoIris.AZUL_ESCURO
};
