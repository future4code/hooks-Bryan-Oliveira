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

    let jogadorUsuario = []
    let jogadorComputador = []
    
    //Jogo rodando
    alert("Boas vindas ao jogo de Blackjack")
    if(confirm("deseja iniciar uma nova rodada ?")){
    iniciarJogo()
    IniciarRodada()
    mostraResultado()
    }else{
       alert("O jogo acabou!")
    }
    
    //Inicia o jogo e verifica cartas iniciais
    function iniciarJogo(){
        
        let teste = true
        
        while(teste){
            for(let i=0; i<2 ; i++){
            jogadorUsuario.push(comprarCarta())
            jogadorComputador.push(comprarCarta())
            }
            
            teste =  ((jogadorComputador[0].texto.includes("A") && jogadorComputador[1].texto.includes("A")) || (jogadorUsuario[0].texto.includes("A") && jogadorUsuario[1].texto.includes("A")))
             if(teste){
                 jogadorUsuario = []
                 jogadorComputador = []
             }
        }
    }
    
    //Inicia a rodada do usuário
    function mostrarCartas(jogador){
        const cartas = []
        for(let i =0; i < jogador.length; i++){
            cartas.push(`${jogador[i].texto} `)
        }
        return cartas
    }
    function contaPontuacao(jogador){
        let pontuacao = 0;
        for(let i =0; i < jogador.length; i++){
           pontuacao += jogador[i].valor 
        }
        return pontuacao
    }
    
    function IniciarRodada(){
        
        while( contaPontuacao(jogadorUsuario) <= 21 && confirm(`Suas cartas são ${mostrarCartas(jogadorUsuario)}. A cartas revelada do computador é ${jogadorComputador[0].texto} \n deseja comprar mais uma carta ?`) ){
            jogadorUsuario.push(comprarCarta()) 
        } 
    
    //Inicia a rodada do computador
        if(contaPontuacao(jogadorUsuario) <= 21){
    
            while(contaPontuacao(jogadorComputador) < contaPontuacao(jogadorUsuario) && contaPontuacao(jogadorComputador) < 21){
                jogadorComputador.push(comprarCarta())
            }
        }
    }
    
    //mostra o resultado
    function mostraResultado(){
        const ganhou = (contaPontuacao(jogadorComputador) < contaPontuacao(jogadorUsuario) || contaPontuacao(jogadorComputador) > 21) && contaPontuacao(jogadorUsuario) <= 21
        const perdeu = (contaPontuacao(jogadorComputador) > contaPontuacao(jogadorUsuario) || contaPontuacao(jogadorUsuario) > 21) && contaPontuacao(jogadorComputador) <= 21
        const empate = contaPontuacao(jogadorComputador) === contaPontuacao(jogadorUsuario)
    
        if(empate){
            alert(`Suas cartas são "${mostrarCartas(jogadorUsuario)}" . Sua pontuação é "${contaPontuacao(jogadorUsuario)}".\n` +
            `As cartas do computador são "${mostrarCartas(jogadorComputador)}" . A pontuação do computador é "${contaPontuacao(jogadorComputador)}".\n` +
            "Empate!")
            }
         else if(perdeu){
            alert(`Suas cartas são "${mostrarCartas(jogadorUsuario)}" . Sua pontuação é "${contaPontuacao(jogadorUsuario)}".\n` +
            `As cartas do computador são "${mostrarCartas(jogadorComputador)}" . A pontuação do computador é "${contaPontuacao(jogadorComputador)}".\n` +
            "O computador ganhou!")
            }
         else if(ganhou){
            alert(`Suas cartas são "${mostrarCartas(jogadorUsuario)}" . Sua pontuação é "${contaPontuacao(jogadorUsuario)}".\n` +
            `As cartas do computador são "${mostrarCartas(jogadorComputador)}" . A pontuação do computador é "${contaPontuacao(jogadorComputador)}".\n` +
            "O usuário ganhou!")
            }
    }