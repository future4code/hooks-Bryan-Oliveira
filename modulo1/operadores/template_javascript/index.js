//exercicios de interpretação:

/* 1) a false , b false , c true , d bool
2) retornará o número da variavel "primeiroNumero" concatenado com a variável "segundoNumero"
3) o prompt retorna uma string, será necessário converter o valor em number*/

//exercícios de código:

//1)

let idade = parseInt(prompt("digite sua idade"))
let idadeMelhorAmigo = parseInt(prompt("digite a idade do seu melhor amigo(a)"))
let diferencaIdades = idade - idadeMelhorAmigo

console.log("sua idade é maior que a do seu amigo", idade>idadeMelhorAmigo)
console.log("a diferença de idades é", diferencaIdades)

//2)

let numeroPar = parseInt(prompt("digite um número par"))

console.log("resto da divisão por 2 é", numeroPar % 2 )
//todo número par dividido por 2 da resto 0
//se o usuário inserir um número ímpar dará resto 1

//3)

let idadeEmAnos = parseInt(prompt("digite sua idade"))
let idadeEmMeses = idadeEmAnos*12
let idadeEmDias = idadeEmAnos*365
let idadeEmHoras = idadeEmDias*24

console.log("sua idade em meses é", idadeEmMeses)
console.log("sua idade em dias é", idadeEmDias)
console.log("sua idade em horas é", idadeEmHoras)

//4)

let primeiroNumero = parseInt(prompt("digite um número"))
let segundoNumero =  parseInt(prompt("digite outro número"))
let primeiroNumeroEDivisivel = (primeiroNumero % segundoNumero) === 0
let segundoNumeroEDivisivel = (segundoNumero % primeiroNumero) === 0

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo? ", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumeroEDivisivel)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumeroEDivisivel)

//DESAFIO:
//1)
 
let celsiusUsuario = parseInt(prompt("digite a temperatura em C"))
let formulaFarenheit = celsiusUsuario*(9/5) + 32
let formulaKelvin = (formulaFarenheit - 32)*(5/9) + 273.15

console.log("77F em k = ",(77- 32)*(5/9) + 273.15 +"k")
console.log("80C em F = ", 80*(9/5) + 32 +"F")
console.log("30C em k = ", 30*(9/5) + 32 +"F", "em F =", ((30*(9/5) + 32)- 32)*(5/9) + 273.15 +"k")
console.log(`a conversão de ${celsiusUsuario}C é ${formulaFarenheit}F e ${formulaKelvin}K`)

//2)

let consumoEmKilowatt = 280
const custoKilowatt = 0.05
let porcentagemDeDesconto = 15/100
let valorAPagar = (consumoEmKilowatt * custoKilowatt) * (1 - porcentagemDeDesconto)

console.log("valor a pagar por 280 kilowatt-hora = R$" + 280*custoKilowatt)
console.log("valor a ser pago com desconto é R$" + valorAPagar)

//3)
let lb = parseFloat(prompt("insira a massa em lb"))

let lbParaKg = lb/2.205
let ozParaKg = 10.05/35.274
let miParaM = 100 * 1609
let ftParaM = 50/3.281
let galParaL = 103.56 * 4.546
let xicParaL = 450*(1/6)

//a)
console.log("20lb para kg =", 20/2.205 , "kg")
//b)
console.log("10.05oz para kg =", ozParaKg , "oz")
//c)
console.log("100mi para m =", miParaM , "m")
//d)
console.log("50ft para m =", ftParaM , "m")
//e)
console.log("gal para l =", galParaL , "l")
//f)
console.log("450xic para l =", xicParaL , "l")
//g)
console.log( `${lb}lb para kg =`, lbParaKg , "kg")
