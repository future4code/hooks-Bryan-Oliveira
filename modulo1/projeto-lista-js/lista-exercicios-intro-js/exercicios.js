// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = parseFloat(prompt("insira a altura do retângulo!"))
  let largura = parseFloat(prompt("insira a largura do retângulo!"))

  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = parseInt(prompt("insira ano atual"))
  let anoNascimento = parseInt(prompt("insira seu ano de nascimento"))

  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

 return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("insira seu nome")
  let idade = prompt("insira sua idade")
  let  email = prompt("insira seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("digite sua cor favorita")
  let cor2 = prompt("digite sua segunda cor favorita")
  let cor3 = prompt("digite sua terceira cor favorita")

  let array =[cor1 , cor2 , cor3]

  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let teste = string1.length == string2.length
  return teste
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let troca = array[0]
  array.splice(0,1 , array[array.length-1])
  array.splice(array.length-1,1, troca)

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let teste = string1.toLowerCase() === string2.toLowerCase()
  return teste

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("insira ano atual"))
  let anoNasc = Number(prompt("ano de nascimento"))
  let anoCarteira = Number(prompt("ano de emissão da carteira"))

  let idade = anoAtual - anoNasc

  if(idade<=20){
    console.log(anoAtual - anoCarteira >= 5)
  }else if(idade >20 && idade <= 50){
    console.log(anoAtual - anoCarteira >= 10)
  }else{
    console.log(anoAtual - anoCarteira >= 15)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  if (ano%400 ===0){
    return true
  }else if((ano%4 ===0) && !(ano%100 ===0 && ano%400 !==0)){
    return true
  }else{
    return false
  }

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
let maiorDeIdade = prompt("voce tem mais de 18 anos?")
let escolaridade = prompt("voce possui ensino médio complet?") 
let disponibilidade = prompt("disponibilidade no horário do curso?")

teste = (maiorDeIdade === "sim" && escolaridade==="sim" && disponibilidade==="sim")

console.log(teste)
}