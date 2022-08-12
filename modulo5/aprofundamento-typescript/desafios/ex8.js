"use strict";
const restauranteInfos = require("./ex8-restauranteInfos.json");
const { pratos, vendas } = restauranteInfos;
const fs = require('fs');
const { writeFile } = fs;
//@ts-ignore
const persistData = (file, persistData) => {
    //@ts-ignore  
    writeFile(file, persistData, (err) => {
        if (err)
            console.log(err);
    });
};
function cadastraProdutos(novoPrato) {
    // faz o cadastro de um prato no ex8-jrestauranteInfos.json caso não seja repetido
    const filtro = pratos.filter((prato) => prato.nome === novoPrato.nome);
    if (filtro.length)
        return console.log('esse prato já existe');
    pratos.push(novoPrato);
    persistData("./ex8-restauranteInfos.json", JSON.stringify(restauranteInfos));
    console.log("prato adicionado com sucesso!");
}
const pratosTeste = [
    { nome: 'batata frita', custo: 2, valor: 4, ingredientes: ['batata', 'sal'] },
    { nome: 'x-burguer', custo: 4, valor: 8, ingredientes: ['pao', 'hamburguer', 'alface', 'tomate', 'ovo'] },
    { nome: 'cachorro-quente', custo: 3, valor: 6, ingredientes: ['pao', 'salsicha', 'batata palha', 'ketchup', 'maionese'] },
];
function retornaValor(nomeIndicado) {
    // retorna valor de um prato específico
    return pratos.filter((prato) => prato.nome === nomeIndicado)[0].valor;
}
function vender(pratoVendido, qtd) {
    // salva uma venda no ex8-jrestauranteInfos.json passando o produto e a qtd
    const venda = Object.assign(Object.assign({}, pratoVendido), { qtd });
    vendas.push(venda);
    persistData("./ex8-restauranteInfos.json", JSON.stringify(restauranteInfos));
    console.log("venda concluída");
}
function determinaLucro() {
    // pega cada venda e verifica o lucro de cada uma e depois soma
    return vendas.map((venda) => { return (venda.valor - venda.custo) * venda.qtd; }).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
// cadastraProdutos(pratosTeste[1])
vender(pratosTeste[0], 2);
// setTimeout(()=>{
// }, 1000) 
console.log(determinaLucro());
