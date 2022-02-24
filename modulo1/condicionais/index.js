/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1)
a)verifica se o número é par

b)números divisiveis por 2

c)números ímpares

2)
a)pesquisar o preço de uma fruta

b)O preço da Maçã é R$2.25

c)O preço da Pêra é R$5

3)
a)a primeira linha está pedindo um número ao usuário

b)caso o usuário digite 10 aparecerá: "Esse número passou no teste" e depois erro de referência; caso digite -10: dará erro pois a variável "mensagem" não foi definida.

3)ocorrerá um erro pois a variável "mensagem" foi declarada em escopo local e chamada em escopo global  */

//EXERCÍCIOS DE CÓDIGO:

//1)
//a)
let idadeUsuario = prompt("qual a sua idade?")

//b)
let idade = Number(idadeUsuario)

//c)
if(idade >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir.")
}

//2)
let turno = prompt("em qual turno você estuda?M para matutino/ V para vespertino/ N para noturno")

if(turno.toUpperCase() === "M" ){
    console.log("Bom Dia!")
}else if (turno.toUpperCase() === "V" ){
    console.log("Boa Tarde!")
}else if (turno.toUpperCase() === "N" ){
    console.log("Boa Noite!")
}

//3
switch(turno.toUpperCase()){
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("digite a letra correta")
}

let generoFilme = prompt("qual o genero do filme?").toLowerCase()
let precoFilme = Number(prompt("qual o valor do ingresso?"))
let lanchinho = prompt("qual lanchinho comprará?")

if(generoFilme === "fantasia" && precoFilme < 15){
    console.group("Bom filme!")
}else{
    console.log("Escolha outro filme!", "e aproveite seu", lanchinho)
}

//DESAFIOS:

//1)

//2)
const ingresso = {
    nome: prompt("nome do comprador").toUpperCase(),
    tipoDeJogo: prompt("IN (internaciona) ou DO (doméstico)").toUpperCase(),
    etapaDoJogo: prompt("SF(semifinal), DT(terceiro lugar) ou FI(final)").toUpperCase(),
    categoria: Number(prompt("1,2,3 ou 4")),
    quantidadeDeIngressos: Number(prompt("QTD de ingressos"))
}

function imprimeIngresso(objeto, total, valor){
    
    if(objeto.tipoDeJogo === "IN"){
        let valorIngressoIN = valor/4.10
        let totalIngressoIN = total/4.10
        console.log(objeto)
        console.log("---VALORES---")
        console.log(`Valor do ingresso: $${valorIngressoIN}`)
        console.log(`Valor Total: $${totalIngressoIN}`)
    }
    else if(objeto.tipoDeJogo ==="DO"){
        console.log(objeto)
        console.log("---VALORES---")
        console.log(`Valor do ingresso: R$${valor}`)
        console.log(`Valor Total: R$${total}`)
    }
    else{
        console.log("digite um tipo de jogo correto")
    }
}

function calculaEImprimeValorIngresso(objeto){
    let valorDoIngresso; 

    let total; 

    if(objeto.etapaDoJogo === "SF"){
        switch(objeto.categoria){
            case 1:
                valorDoIngresso = 1320
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 2:
                valorDoIngresso = 880
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 3:
                valorDoIngresso = 550
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 4:
                valorDoIngresso = 220
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
        }
    }
    else if(objeto.etapaDoJogo === "DT"){
        switch(objeto.categoria){  
            case 1:
                valorDoIngresso = 660
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 2:
                valorDoIngresso = 440
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 3:
                valorDoIngresso = 330
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 4:
                valorDoIngresso = 170
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
        }
    }
    else if(objeto.etapaDoJogo ==="FI"){
         switch(objeto.categoria){
                case 1:
                valorDoIngresso = 1980
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 2:
                valorDoIngresso = 1320
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 3:
                valorDoIngresso = 880
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
            case 4:
                valorDoIngresso = 330
                total = objeto.quantidadeDeIngressos * valorDoIngresso 
                break
         }
    }
    else {
        console.log("digite uma das categorias e/ou etapa do jogo correta")
        return
    }
    imprimeIngresso(objeto, total, valorDoIngresso)
}
calculaEImprimeValorIngresso(ingresso)