/* EXERCÍCIOS DE INTERPRETAÇÃO:

1)vai somar mais um na variável valor até chegar a 4

2)
a)19, 21, 23, 25, 27, 30

b)teria que criar uma variável armazenando o valor do índice e incrementando

3)***
*/

//RXERCÍCIOS DE CÓDIGO:

//1)

//a)

let qtdBichinhos = Number(prompt("quantos pets você tem?"))
let nomePets = ["não tem pets"]

if(qtdBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet")
}

//b)

if(qtdBichinhos > 0){
    nomePets = []
    for(let i = 0; i < qtdBichinhos; i++){
        nomePets.push(prompt("digites o nome do pet"))
    }
}

//c)

console.log(nomePets)

//2)
let arrayOriginal = [5, 10, 200, 1000]
let arrayOriginalSoPares = []
let arrayOriginalComString = []

//a)

for(let iten of arrayOriginal){
    console.log(iten)
}

//b)
for(let iten of arrayOriginal){
    console.log(iten/10)
}

//c)
for(let iten of arrayOriginal){
    if(iten % 2 === 0){
        arrayOriginalSoPares.push(iten)
    }
}
console.log(arrayOriginalSoPares)

//d)
for(let i =0; i<arrayOriginal.length; i++ ){
    arrayOriginalComString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}
console.log(arrayOriginalComString)

//e)
let numMaior = 0
let numMenor = arrayOriginal[0]

for(let iten of arrayOriginal){
    if(iten > numMaior){
        numMaior = iten
    }else if(iten < numMenor){
        numMenor = iten
    }
}
console.log(`o maior número do array é ${numMaior} e o menor é ${numMenor}`)

// //DESAFIOS:

// //1)
// //a)

// let numero = Number(prompt("digite um número para ser advinhado"))

// console.log("Vamos jogar!")

// //b)
// let numeroChutado = 0
// const mensagem = "o número chutado foi: "
// const errou = "Errrrrrrrou, "
// let naoAdvinhou = true
// let tentativas = 0

// while(naoAdvinhou){
//     numeroChutado = Number(prompt("chute um número!"))
//     tentativas++
//     console.log(`o número chtado foi: ${numeroChutado}`)
//     if(numeroChutado < numero){
//         console.log(errou + "é maior")
//     }else if(numeroChutado >  numero){
//         console.log(errou + "é menor")
//     }else {
//         console.log("acertou!")
//         naoAdvinhou = false
//     }
// }
// console.log(`O número de tentativas foi: ${tentativas}`)

//2)


let numero = Math.floor((Math.random() * 100) + 1)

console.log("Vamos jogar!")

let numeroChutado = 0
const mensagem = "o número chutado foi: "
const errou = "Errrrrrrrou, "
let naoAdvinhou = true
let tentativas = 0

while(naoAdvinhou){
    numeroChutado = Number(prompt("chute um número!"))
    tentativas++
    console.log(`o número chtado foi: ${numeroChutado}`)
    if(numeroChutado < numero){
        console.log(errou + "é maior")
    }else if(numeroChutado >  numero){
        console.log(errou + "é menor")
    }else {
        console.log("acertou!")
        naoAdvinhou = false
    }
}
console.log(`O número de tentativas foi: ${tentativas}`)

//Relexão: tive que fazer somente uma alteração que foi na variavel que guardava o número a ser advinhado.