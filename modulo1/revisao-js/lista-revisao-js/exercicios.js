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
    for(let item of array){
        let menorNumero = null
        for(let number of array){
            if(menorNumero === null){
                menorNumero = item
            }

            if(menorNumero > number){
                let contador = 0
                for(let i=0; i<novoArray.length+1; i++){
                    if(number === novoArray[i]){
                        contador++
                    }
                if(contador === 0){
                    menorNumero = number
                }
                }
            }
    }
    novoArray.push(menorNumero)
  }
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
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

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