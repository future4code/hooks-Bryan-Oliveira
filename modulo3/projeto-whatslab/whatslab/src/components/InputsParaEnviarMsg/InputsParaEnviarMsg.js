import React from "react";
import styled from 'styled-components'
import MostraMensagens from "../MostraMensagens/MostraMensagens";

    const InputRemetente = styled.input`
    border: none;
    margin-right: 5px;
    border-radius: 0.5em;
    width: 60px;
    padding: 3px;

    color: #9AAC8C;
    font-size: 0.7em;
    font-weight: 300;
    `  
    const InputMsg = styled.input`
    border-radius: 0.5em;
    border: none;
    margin-right: 5px;
    padding: 3px;
    width: 125px;
    margin-left: 5px;

    color: #9AAC8C;
    font-size: 0.7em;
    font-weight: 300;
    `  
    const Button =  styled.button`
    border: none;
    border-radius: 0.5em;
    margin-left: 5px;

    color: lightgreen;
    font-size: 0.7em;
    font-weight: 600;
    `
    const DivInputs = styled.div`
    display:flex;
    `
    
class InputsParaEnviarMsg extends React.Component{
    
    state={
    }
    
    

    render(){

        return <DivInputs>
        <InputRemetente value={this.props.remetente} placeholder="remetente" onChange={this.props.onchangeInputRemetente}/>
        <InputMsg onKeyDown={this.props.onkeydown} value={this.props.mensagem} placeholder="mensagem" onChange={this.props.onchangeInputMsg}/>
        <Button onClick={this.props.onclick}>Enviar</Button>
        </DivInputs>
        }   

    }

export default InputsParaEnviarMsg
