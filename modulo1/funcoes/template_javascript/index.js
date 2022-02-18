/*EXEC´RCIOS DE INTERPRETAÇÃO DE CÓDIGO:

1)
A)10, 50
B)NÃO APARECERIA NO CONSOLE.

2)
a)verifica se o texto inserido pelo usuário inclui a palavra "cenoura"
b)true, true, false*/

//EXERCÍCIOS DE CÓDIGO:

//1)
function imprimeSobreMim(){
    console.log("Eu sou Bryan, tenho 22 anos, moro em Natal e sou estudante.")

}

imprimeSobreMim();

//b)
function ObterDados(nome, idade, cidade, profiissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profiissao}.`)
}

ObterDados("bryan", 22,"Natal", "estudante")

//2)

//a)
function somar(num1, num2){
    return num1 + num2
}

console.log(somar(2,2))

//b)
function verificaMaior(num1,num2){
    return num1>=num2
}
console.log(verificaMaior(2,4))

//c)
function verificaPar(num){
    return num % 2 === 0 
}

console.log(verificaPar(6))

//d)
function imprimeTamanho(string){
    console.log(string.length ,string.toUpperCase())
}

imprimeTamanho("teste")

//3)
function operacoesBasicas(){
    let num1 = Number(prompt("insira um número"))
    let num2 = Number(prompt("insira outro número"))

    console.log(`NÚMEROS INSERIDOS: ${num1} e ${num2}`)
    console.log(`SOMA: ${num1 + num2}`)
    console.log(`DIFERENÇA: ${num1 - num2}`)
    console.log(`MULTIPLICAÇÃO: ${num1 * num2}`)
    console.log(`DIVISÃO: ${num1/num2}`)
}
operacoesBasicas()

//DESAFIOS:

//1)

//a)
let arrowFunction = (parametro) => {
console.log(parametro)
}

arrowFunction("teste")

//b)
let arrowfunction2 = (valor1, valor2) => {
    let resultado = valor1 + valor2
}

arrowFunction(arrowfunction2(2,1))

//2)
function calculaTeoremaPitagoras(cateto1, cateto2){
    return Math.sqrt((cateto1*cateto1)+ (cateto2*cateto2))
}

console.log(calculaTeoremaPitagoras(4,3))
