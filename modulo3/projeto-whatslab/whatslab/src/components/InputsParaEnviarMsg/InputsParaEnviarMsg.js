import React from "react";
import styled from 'styled-components'
import MostraMensagens from "../MostraMensagens/MostraMensagens";
import enviar from '../../img/send.svg'

    const InputRemetente = styled.input`
    border: none;
    margin-right: 5px;
    border-radius: 1em;
    width: 6em;
    padding: 5px;

    color: #676767;
    font-size: 0.7em;
    `  
    const InputMsg = styled.input`
    border-radius: 1em;
    border: none;
    margin-right: 5px;
    padding: 5px;
    width: 15em;
    margin-left: 5px;

    color: #676767;
    font-size: 0.7em;
    `  
    const Button =  styled.button`
    border: none;
    border-radius: 0.5em;
    margin-left: 5px;
    background: transparent;
    cursor: pointer;

    color: lightgreen;
    font-size: 0.7em;
    font-weight: 600;
    `
    const DivInputs = styled.div`
    display:flex;
    margin-bottom: 0.5em;
    `

    const Img = styled.img`
    max-height: 2em;
    `
    
class InputsParaEnviarMsg extends React.Component{
    
    state={
    }
    
    

    render(){

        return <DivInputs>
        <InputRemetente value={this.props.remetente} placeholder="nome" onChange={this.props.onchangeInputRemetente} autoFocus/>
        <InputMsg onKeyDown={this.props.onkeydown} value={this.props.mensagem} placeholder="mensagem" onChange={this.props.onchangeInputMsg}/>
        <Button onClick={this.props.onclick}><Img src={enviar} alt="enviar"/></Button>
        </DivInputs>
        }   

    }

export default InputsParaEnviarMsg
