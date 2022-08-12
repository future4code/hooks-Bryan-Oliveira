"use strict";
var classificacao;
(function (classificacao) {
    classificacao["VERAO"] = "verao";
    classificacao["INVERNO"] = "inverno";
    classificacao["BANHO"] = "banho";
    classificacao["INTIMA"] = "intima";
})(classificacao || (classificacao = {}));
const desconto = {
    verao: 0.05,
    inverno: 0.1,
    banho: 0.04,
    intima: 0.07, //7%
};
function aplicaDesconto(produto) {
    const produtoAux = Object.assign(Object.assign({}, produto), { preco: produto.preco - (produto.preco * desconto[produto.classificacao]) });
    return produtoAux;
}
function informaPrecoFinal(produtos) {
    return produtos.map(aplicaDesconto);
}
const produtos = [
    { nome: 'casaco', preco: 10, classificacao: classificacao.INVERNO },
    { nome: 'sunga', preco: 10, classificacao: classificacao.BANHO },
    { nome: 'camisa regata', preco: 10, classificacao: classificacao.VERAO },
    { nome: 'sutiã', preco: 10, classificacao: classificacao.INTIMA },
];
console.log(informaPrecoFinal(produtos));
