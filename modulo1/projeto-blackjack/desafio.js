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

function comecaJogo(){
   for (let i=0 ; i<2; i++){

      jogadorUsuario.baralho.push(comprarCarta())
      jogadorMaquina.baralho.push(comprarCarta())

   }
}

function testaCartasIniciais(array){
   let contador = 0
   array.forEach((element)=> {
       if(element.includes("A")){
           contador++
       }
   })
   if(contador === 2){
       return true
   }else{
       return false
   }
}

function retribuirCartas(){
   jogadorUsuario.cartas = [jogadorUsuario.baralho[0].texto , jogadorUsuario.baralho[1].texto]
   jogadorMaquina.cartas = [jogadorMaquina.baralho[0].texto , jogadorMaquina.baralho[1].texto]
}

function verificaCartasIniciais(array, array2){

   
   let teste = testaCartasIniciais(array)
   let teste2 = testaCartasIniciais(array2)
   
   
   while(teste || teste2){
      jogadorUsuario.baralho.splice(0,2)
      jogadorMaquina.baralho.splice(0,2)
   
      comecaJogo()
      retribuirCartas()
      
      teste = testaCartasIniciais(jogadorUsuario.cartas)
      teste2 = testaCartasIniciais(jogadorMaquina.cartas)
}
   
}

function compraCartaESomaPontuacao(contador, jogador){
   let i = contador

   jogador.baralho.push(comprarCarta())
   jogador.cartas.push(jogador.baralho[i].texto)
      
   jogador.pontuacao+= jogador.baralho[i].valor
}

function iniciaRodadaUsuario(){
   let contador = 2

   while(jogadorUsuario.pontuacao <= 21 && confirm(`Suas cartas são "${jogadorUsuario.cartas}". A carta revelada do computador é "${jogadorMaquina.cartas[0]}"`  +
   "\n"+
   "Deseja comprar mais uma carta?")){
      compraCartaESomaPontuacao(contador, jogadorUsuario)
      contador++
   }
}
function iniciaRodadaMaquina(){
   let contador = 2
   if(jogadorUsuario.pontuacao <=21){

      while(jogadorMaquina.pontuacao < 21 && jogadorMaquina.pontuacao < jogadorUsuario.pontuacao){
         compraCartaESomaPontuacao(contador, jogadorMaquina)
         contador++
      }
   }
}

function mostraResultado(){

   const empate = jogadorUsuario.pontuacao === jogadorMaquina.pontuacao
   const perdeu = jogadorUsuario.pontuacao < jogadorMaquina.pontuacao || jogadorUsuario.pontuacao > 21
   const ganhou = jogadorUsuario.pontuacao > jogadorMaquina.pontuacao || jogadorMaquina.pontuacao > 21
   
   
   if(empate){
      alert(`Suas cartas são "${jogadorUsuario.cartas}" . Sua pontuação é "${jogadorUsuario.pontuacao}".\n` +
      `As cartas do computador são "${jogadorMaquina.cartas}" . A pontuação do computador é "${jogadorMaquina.pontuacao}".\n` +
      "Empate!")
      }
   else if(perdeu){
      alert(`Suas cartas são "${jogadorUsuario.cartas}" . Sua pontuação é "${jogadorUsuario.pontuacao}".\n` +
      `As cartas do computador são "${jogadorMaquina.cartas}" . A pontuação do computador é "${jogadorMaquina.pontuacao}".\n` +
      "O computador ganhou!")
      }
   else if(ganhou){
      alert(`Suas cartas são "${jogadorUsuario.cartas}" . Sua pontuação é "${jogadorUsuario.pontuacao}".\n` +
      `As cartas do computador são "${jogadorMaquina.cartas}" . A pontuação do computador é "${jogadorMaquina.pontuacao}".\n` +
      "O usuário ganhou!")
      }
}


const jogadorUsuario = {
      baralho: [],
      pntuacao: null
   }

const jogadorMaquina = {
      baralho: [],
      pontuacao:null
   }
     


alert("Boas vindas ao jogo de blackjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   
   comecaJogo()
   retribuirCartas()
   verificaCartasIniciais(jogadorUsuario.cartas, jogadorMaquina.cartas)
   
   jogadorUsuario.pontuacao = jogadorUsuario.baralho[0].valor + jogadorUsuario.baralho[1].valor
   jogadorMaquina.pontuacao = jogadorMaquina.baralho[0].valor + jogadorMaquina.baralho[1].valor
   
   iniciaRodadaUsuario()
   iniciaRodadaMaquina()
      
   mostraResultado()
   
   }else{
      alert("O jogo acabou!")
   }