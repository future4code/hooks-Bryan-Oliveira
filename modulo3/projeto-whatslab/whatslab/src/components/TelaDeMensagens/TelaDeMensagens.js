import React from "react";
import styled from 'styled-components'
import MostraMensagens from "../MostraMensagens/MostraMensagens";
import InputsParaEnviarMsg from "../InputsParaEnviarMsg/InputsParaEnviarMsg";
    

let auxiliar= ''

const Maindiv = styled.div`

    //centralização
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.2em;

    //comprimentos
    width: 300px;
    max-width: 300px;
    min-height: 100vh;
    max-height: 100vh;
    background-color: lightgray;
    overflow-y: auto;
    `
    const DivMensagens = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    `
    
    
class TelaDeMensagens extends React.Component{
    
    state={
        //input remetente value
        remetente:'',
        //input msg value
        mensagem:'',

        //lista de mensagens
        mensagens: [{remetente: 'eu', mensagem: 'teste'},{remetente: 'teste', mensagem: 'teste'}]
    }

    onChangeInputRemetente = (event) => {
        //muda input remetente qnd o usuário digita algo
        this.setState({remetente: event.target.value})
    }

    onChangeInputMsg = (event) => {
        //muda input mensagem qnd o usuário digita algo
        this.setState({mensagem: event.target.value})
    }

    onClickButton = () => {
        //envia a mensagem
        auxiliar = this.remetente
        console.log(auxiliar)
        this.setState({mensagens: [...this.state.mensagens, {remetente:this.state.remetente, mensagem: this.state.mensagem}], mensagem: '', remetente: ''})
    }

    onClickButtonEnter = (event) =>{
        //envia msg pressionando enter
        if (event.keyCode === 13) {
            this.onClickButton()
        }}
    
    render(){

        //mapeia lista de mensagens
        const mensagens = this.state.mensagens.map((mensagem, i) => {
            return <MostraMensagens key={i} remetente={mensagem.remetente} mensagem={mensagem.mensagem}></MostraMensagens>
        }) 

        return <Maindiv>
       
       {/* printa mensagens na tela */}
        <DivMensagens>
            {mensagens}
        </DivMensagens>
        
        <InputsParaEnviarMsg onchangeInputMsg={this.onChangeInputMsg} 
        onchangeInputRemetente={this.onChangeInputRemetente} 
        onclick={this.onClickButton} 
        remetente={this.state.remetente} mensagem={this.state.mensagem}

        onkeydown={this.onClickButtonEnter}
        />
        </Maindiv>
        }   

    }

export default TelaDeMensagens