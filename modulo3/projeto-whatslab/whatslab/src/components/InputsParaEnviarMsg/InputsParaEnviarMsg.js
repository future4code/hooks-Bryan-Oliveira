import React from "react";
import styled from 'styled-components'
    
const Maindiv = styled.div`
    display: flex;
    width: 300px;
    padding-left: 5px;
    `
    const InputRemetente = styled.input`
    border: 1px solid black;
    margin-right: 5px;
    width: 60px;
    padding: 3px;
    `  
    const InputMsg = styled.input`
    border: 1px solid black;
    margin-right: 5px;
    padding: 3px;
    width: 125px;
    `  
    const Button =  styled.button`
    border: 1px solid black;
    `
    
class InputsParaEnviarMsg extends React.Component{
    
    state={
        remetente:'',
        mensagem:'',
        mensagens: []
    }
    
    onChangeInputRemetente = (event) => {
        this.setState({remetente: event.target.value})
    }

    onChangeInputMsg = (event) => {
        this.setState({mensagem: event.target.value})
    }

    onClickButton = () => {
        this.setState({mensagens: [...this.state.mensagens, {remetente:this.state.remetente, mensagem: this.state.mensagem}]} )
    }

    render(){

        const mensagens = this.state.mensagens.map((mensagem) => {
            return <div>
                <div>{mensagem.remetente}:</div>
                <div>{mensagem.mensagem}</div>
            </div>
        }) 

        return <Maindiv>
        <div>{mensagens}</div>
        <InputRemetente value={this.state.remetente} placeholder="remetente" onChange={this.onChangeInputRemetente}/>
        <InputMsg value={this.state.mensagem} placeholder="mensagem" onChange={this.onChangeInputMsg}/>
        <Button onClick={this.onClickButton}>Enviar</Button>
        </Maindiv>
        }   

    }

export default InputsParaEnviarMsg