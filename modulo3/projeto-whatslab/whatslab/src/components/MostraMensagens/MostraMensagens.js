import React from "react";
import styled from 'styled-components'


const DivBalaoMensagens = styled.div`
margin-left:  ${props => {
    if (props.tipo === "eu") {
        return 0
    } else {
        return 0.5
    }
}}em;

`

const BalaoDeMensagem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: start;
position: relative;

background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" // Verde copiado do WhatsApp
        } else {
            return "#ffffff" // Branco
        }
    }};
    align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};
    
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
    word-break: break-word;

    padding: 0.9em 0.8em;
    border-radius: 0.6em;
    font-weight: 500;
    line-height: 1.3;
    box-shadow: 0px 0.4em 3px 0px rgba(0, 0, 0, 0.2);

    &:after {
    
    /* isso cria um triângulo */
    content: '';
    border: 15px solid transparent;
    border-top-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8"
        } else{
            return "#ffffff"
        }
    }}; 
    /* isso posiciona o triângulo */
    position: absolute;
    top: 0px;
    right: ${props => {
        if (props.tipo === "eu") {
            return "-8px";
    }}};
    left: ${props=> {
        if (!(props.tipo === "eu")) {
            return "-8px";
        }
    }}};
    `

 const DivBalaoRemetente = styled.div`
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`
class MostraMensagens extends React.Component{
    
    state={

    }
    
    render() {
        const nome = this.props.remetente.toLowerCase()
        if (nome === "eu") {
            return (
                <BalaoDeMensagem tipo={"eu"}>{this.props.mensagem}</BalaoDeMensagem>
						//Quando o nome do usuário for "eu", o balão 
						//só vai mostrar o conteúdo da mensagem
            )
        } else {
            return (
                <BalaoDeMensagem>
                <DivBalaoRemetente>{this.props.remetente}:</DivBalaoRemetente>
                <div>{this.props.mensagem}</div>
                </BalaoDeMensagem>
						//Quando o nome do usuário for qualquer outra coisa, 
						//o balão vai mostrar o nome do usuário e o conteúdo da mensagem
            )
        }}}
export default MostraMensagens