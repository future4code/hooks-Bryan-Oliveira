/*EXERCÍCIOS DE INTERPRETAÇÃO:

1)
a. undefined
b. null
c. 11
d. 3
e. [3,19,5,6,7,8,9,10,11,12,13]
f. 9

2)
SUBI NUM ONIBUS EM MIRROCOS, 27
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO:

//1)

let usuario = prompt("digite seu nome")
let email = prompt("digite seu email")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${usuario}!`)

//2)

let arrayComidas = ["strogonoff", "banana", "sorvete", "panetone", "uva"]

//a)
console.log(arrayComidas)

//b)
console.log(arrayComidas[0])
console.log(arrayComidas[1])
console.log(arrayComidas[2])
console.log(arrayComidas[3])
console.log(arrayComidas[4])

//c)
let comidaFavUsuario = prompt("me diga sua comida favorita")

arrayComidas.splice(1,1, comidaFavUsuario)
console.log(arrayComidas)

//3)

//a)
let listaDeTarefas = []

//b)
let tarefa1 = prompt("digite uma tarefa")
let tarefa2 = prompt("digite uma tarefa")
let tarefa3 = prompt("digite uma tarefa")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//c)
console.log(listaDeTarefas)

//d)
let tarefaRealizada = prompt("digite o índice da tarefa realizada")

//e)
listaDeTarefas.splice(tarefaRealizada, 1)

//f)
console.log(listaDeTarefas)

//DESAFIOS:

//1)
let fraseParaSeparar = prompt("digite uma frase")
let fraseSeparada = fraseParaSeparar.split(" ")
console.log(`a frase é: '${fraseParaSeparar}', e a frase separada é: '${fraseSeparada}'`)

//2)
let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`o índice do Abacaxi é:`,arrayFrutas.indexOf("Abacaxi"), `o tamanho do array é: ${arrayFrutas.length}`)