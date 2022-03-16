// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoArray = []
    const tamanhoArray = array.length
    for (let i=0; i<tamanhoArray; i++){
        let ultimoItem = array.pop()
        novoArray.push(ultimoItem)
 }
 return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let novoArray = []
        while(array.length > 1){
            let menorNumero = array[0]
            let index = 0
            for(let i=0; i<array.length;i++){
                if(array[i]< menorNumero){
                    menorNumero = array[i]
                    index = i
                }
            }
            novoArray.push(menorNumero)
            array.splice(index ,1)
    }
    novoArray.push(array[0])
  return novoArray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares= []
  for(item of array){
      if (item % 2 ===0){
          numerosPares.push(item)
      }
  }
  return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.map(item=>{
        return item * item
 }).filter(numero =>{
        return numero %2===0
 })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for(numero of array){
      if(numero>maiorNumero){
          maiorNumero = numero
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = retornaMaiorNumero([num1,num2])
    let menorNumero = num1
      if(num1>num2){
          menorNumero = num2
      }
    return {maiorNumero: maiorNumero,maiorDivisivelPorMenor: maiorNumero % menorNumero===0 , diferenca: maiorNumero -menorNumero}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let nNumerosPares = []
    for(let i=0; i<n; i++){
        nNumerosPares.push(i*2)
   }
   return nNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let trianguloEh = ""
    if(ladoA === ladoB && ladoB === ladoC){
        trianguloEh = "Equilátero"
    }else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        trianguloEh = "Isósceles"
    }else{
        trianguloEh = "Escaleno"
    }
    return trianguloEh
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}