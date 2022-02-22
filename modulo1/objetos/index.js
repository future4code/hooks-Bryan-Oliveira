/* EXERCÍCIOS DE INTERPRETAÇÃO:

1)
a) "Matheus Nachtergaele" , "Virginia Cavendish", canal: "Globo", horario: "14h"

2)
a)cachorro
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"

gato
    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

tartaruga
    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

b) é o spread, faz uma cópia do objeto indicado.

3)
a)erro de sintaxe

b)aconteceu pois não foi criado nenhum objeto para colocar as propiedades */

//EXERCÍCIOS DE CÓDIGO:

//1)
//a)
const objeto = {
    nome: "Bryan",
    apelidos: ["b", "banmido", "brayan"],

}

function funcaoObjeto(objeto){
console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

}

funcaoObjeto(objeto);

//b)

const novoObjeto = {
    ...objeto,
    apelidos: ["banana", "bananinha", "seilá"]
}
funcaoObjeto(novoObjeto)

//2)
//a)
const pessoa = {
    nome:"Bryan",
    idade:"22",
    profissao:"estudante"
}

const pessoa2 = {
    ...pessoa,
    nome:"Miguel"
}

//b)
function funcaoPessoa(objeto){
    const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    console.log(array) 
}

funcaoPessoa(pessoa)
funcaoPessoa(pessoa2)

//3)
//a)
const carrinho = []

//b)
const fruta = {
    nome:"uva",
    disponibilidade: true
}

const fruta2 = {
    ...fruta,
    nome:"banana"
}


const fruta3 = {
    ...fruta,
    nome:"pera"
}

//c)
function funcaoFruta(objeto){
    carrinho.push(objeto)
}

funcaoFruta(fruta)
funcaoFruta(fruta2)
funcaoFruta(fruta3)

//d)
console.log(carrinho)

//DESAFIOS:
//1)
function perguntarQUemeh(){
    const pessoa = {
        nome: prompt("insira seu nome"),
        idade: Number(prompt("sua idade por favor")),
        profissao: prompt("sua profissão")
    }

    console.log(pessoa, typeof(pessoa))
}

perguntarQUemeh()

//2)
const filme = {
    nome:"vingadores",
    lancamento: 2012
}

const filme2 = {
    ...filme,
    nome:"os infratores"
}

function funcaoFilmes(objeto, objeto2){
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme.lancamento < filme2.lancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme.lancamento == filme2.lancamento}`)
}

funcaoFilmes(filme, filme2)

//3)
function funcaoFruta2(objeto){
    objeto.disponibilidade = !objeto.disponibilidade
    return objeto
}

console.log(funcaoFruta2(fruta))