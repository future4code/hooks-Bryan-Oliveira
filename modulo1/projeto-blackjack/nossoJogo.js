/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const jogadorUsuario = {
   baralho: [],
   pntuacao: null
}
const jogadorMaquina = {
   baralho: [],
   pontuacao:null
}


 console.log("Boas vindas ao jogo de blackjack!")

 if(confirm("Quer iniciar uma nova rodada?")){
    for (let i=0 ; i<2; i++){
       jogadorUsuario.baralho.push(comprarCarta())
       jogadorMaquina.baralho.push(comprarCarta())
   }
   
jogadorUsuario.cartas = [jogadorUsuario.baralho[0].texto , jogadorUsuario.baralho[1].texto]
jogadorMaquina.cartas = [jogadorMaquina.baralho[0].texto , jogadorMaquina.baralho[1].texto]

jogadorUsuario.pontuacao = jogadorUsuario.baralho[0].valor + jogadorUsuario.baralho[1].valor
jogadorMaquina.pontuacao = jogadorMaquina.baralho[0].valor + jogadorMaquina.baralho[1].valor
   
   console.log(`Usuário - cartas: ${jogadorUsuario.cartas} pontuaçao: ${jogadorUsuario.pontuacao}`)
   console.log(`Máquina - cartas: ${jogadorMaquina.cartas} pontuaçao: ${jogadorMaquina.pontuacao}`)
   
   const empate = jogadorUsuario.pontuacao === jogadorMaquina.pontuacao
   const perdeu = jogadorUsuario.pontuacao < jogadorMaquina.pontuacao
   const ganhou = jogadorUsuario.pontuacao > jogadorMaquina.pontuacao


   if(empate){
      console.log("Empate!")
   }
   else if(perdeu){
      console.log("O computador ganhou!")
   }
   else if(ganhou){
      console.log("O usuário ganhou!")
   }

 }else{
    console.log("O jogo acabou!")
 }