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
    border: 1px solid green;

    //comprimentos
    width: 350px;
    max-width: 350px;
    min-height: 80vh;
    max-height: 80vh;
    background-color: lightgray;
    overflow-y: auto;
    `
    const DivMensagens = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    flex-grow: 1;
    margin-bottom: 0.5em;
    padding-top: 1.2em;
    `
    const DiaDaMSg = styled.div`
    color: gray;
    font-family: monospace;
    margin-bottom: 1.5em;
    `
    
class TelaDeMensagens extends React.Component{
    
    state={
        //input remetente value
        remetente:'',
        //input msg value
        mensagem:'',

        //lista de mensagens
        mensagens: [{remetente: 'eu', mensagem: 'teste', hora: '00:00'},{remetente: 'teste', mensagem: 'teste', hora: '00:00'}, 
        {remetente: 'teste', mensagem: 'testando mensagem grande testando mensagem grande testando mensagem grande testando mensagem grande',
        hora: '00:00'}],

        //pega o dia atual
        dia: new Date(),
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
        this.setState({mensagens: [...this.state.mensagens, {remetente:this.state.remetente, mensagem: this.state.mensagem, hora: this.obterHorario()}], mensagem: '', remetente: '', })
    }

    onClickButtonEnter = (event) =>{
        //envia msg pressionando enter
        if (event.keyCode === 13) {
            this.onClickButton()
        }}

    //função que obtem hora e minuto
    obterHorario = ()=>{
        //paga dados do horario atual
        const data = new Date()
        //pega hora
        let hora = data.getHours()
        //pega minutos
        let minutos = data.getMinutes()

        //foramatção de hora e minutos
        if(hora<10){
            hora= '0'+ hora
        }
        if(minutos<10){
            minutos= '0'+ minutos
        }

        hora.toLocaleString()
        minutos.toLocaleString()

        //rtorna hora de envio da mensagem
        return hora + ':' + minutos
    }

    obtemDia = ()=>{
        const dias = new Array(
            'domingo','seg','ter','qua','qui','sex','sáb'
           );

        const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',  'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

            const ano = this.state.dia.getFullYear()
            const dia_sem = dias[this.state.dia.getDay()]
            const dia = this.state.dia.getDate()
            const mes = meses[this.state.dia.getMonth()]

            return   dia + ' de ' + mes + ' de ' + ano + ` (${dia_sem})`
    }
    
    render(){

        //mapeia lista de mensagens
        const mensagens = this.state.mensagens.map((mensagem, i) => {
            return <MostraMensagens key={i} remetente={mensagem.remetente} mensagem={mensagem.mensagem}
            hora={mensagem.hora}
            ></MostraMensagens>
        }) 

        return <Maindiv>
       

       {/* printa mensagens na tela */}
        <DivMensagens>
        <DiaDaMSg>{this.obtemDia()}</DiaDaMSg>
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