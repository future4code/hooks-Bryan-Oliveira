const restauranteInfos = require("./ex8-restauranteInfos.json")
const {pratos, vendas} = restauranteInfos
const fs = require('fs');
    
const {writeFile} = fs 
//@ts-ignore
const persistData = (file, persistData)=>{  
    //@ts-ignore  
    writeFile(file,persistData,(err) => {
        if (err)
        console.log(err);
    });
}

type Prato = {
    nome: string,
    custo: number,
    valor: number,
    ingredientes: string[]
}
type Venda ={
    nome: string,
    custo: number,
    valor: number,
    ingredientes: string[],
    qtd: number
}

function cadastraProdutos (
    novoPrato: Prato 
): void{
    // faz o cadastro de um prato no ex8-jrestauranteInfos.json caso não seja repetido
    const filtro = pratos.filter((prato: Prato) => prato.nome === novoPrato.nome)
    if(filtro.length) return console.log('esse prato já existe') 
    pratos.push(novoPrato)
    persistData("./ex8-restauranteInfos.json", JSON.stringify(restauranteInfos))
    console.log("prato adicionado com sucesso!")
}

const pratosTeste: Prato[] = [
    {nome: 'batata frita', custo: 2, valor: 4, ingredientes: ['batata', 'sal']},
    {nome: 'x-burguer', custo: 4, valor: 8, ingredientes: ['pao', 'hamburguer', 'alface', 'tomate', 'ovo']},
    {nome: 'cachorro-quente', custo: 3, valor: 6, ingredientes: ['pao', 'salsicha', 'batata palha', 'ketchup', 'maionese']},
]

function retornaValor (nomeIndicado: string): number {
    // retorna valor de um prato específico
    return pratos.filter((prato: Prato) => prato.nome === nomeIndicado)[0].valor
}

function vender(pratoVendido: Prato, qtd: number): void {
    // salva uma venda no ex8-jrestauranteInfos.json passando o produto e a qtd
    const venda: Venda = {...pratoVendido, qtd}
    vendas.push(venda)
    persistData("./ex8-restauranteInfos.json", JSON.stringify(restauranteInfos))
    console.log("venda concluída")
}

function determinaLucro (): number {
    // pega cada venda e verifica o lucro de cada uma e depois soma
    return vendas.map((venda: Venda)=>{ return (venda.valor - venda.custo) * venda.qtd}).reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)
}

// cadastraProdutos(pratosTeste[1])
vender(pratosTeste[0], 2)
console.log(determinaLucro())