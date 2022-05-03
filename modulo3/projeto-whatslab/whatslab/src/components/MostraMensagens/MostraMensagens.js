import React from "react";
import styled from 'styled-components'
import doubleCheck from '../../img/double-check.svg'

// const DivBalaoMensagens = styled.div`
// margin-left:  ${props => {
//     if (props.tipo === "eu") {
//         return 0
//     } else {
//         return 0.5
//     }
// }}em;

// `

const BalaoDeMensagem = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: start;
position: relative;
color: #676767;

background-color: ${props => {
        if (props.tipo === "eu") {
            return "#86ED93" // Verde escuro
        } else {
            return "#CBF7D0" // verde claro
        }
    }};
    margin-right: ${props => {
        if (props.tipo === "eu") {
            return 1 // margem
        } else {
            return 0 // sem margem
        }
    }}em; 
    
    margin-left: ${props => {
        if (props.tipo === "eu") {
            return 0 // margem
        } else {
            return 1 // sem margem
        }
    }}em; 
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
    border-radius: 1em;
    font-weight: 500;
    line-height: 1.3;
    box-shadow: 0px 0.4em 3px 0px rgba(0, 0, 0, 0.2);

    /* &:after { */
    
    /* isso cria um triângulo */
    /* content: '';
    border: 15px solid transparent;
    border-top-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8"
        } else{
            return "#ffffff"
        }
    }};  */

    /* isso posiciona o triângulo */
    /* position: absolute;
    top: 0px;
    right: ${props => {
        if (props.tipo === "eu") {
            return "-8px";
    }}};
    left: ${props=> {
        if (!(props.tipo === "eu")) {
            return "-8px";
        }
    }}}; */
    `

 const DivBalaoRemetente = styled.div`
    color: #2D3F65;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`

const InfosBalaoMensagem =styled.div`
    width: 100%;
    color: blue;
    margin-top: 0.2em;
    display: flex;
    justify-content: space-between;


`
class MostraMensagens extends React.Component{
    
    state={

    }

    
    
    render() {
        const nome = this.props.remetente.toLowerCase()
        if (nome === "eu") {
            return (
                <BalaoDeMensagem tipo={"eu"}>{this.props.mensagem}
                <InfosBalaoMensagem>
                <div>{this.props.hora}</div>
                <img src={doubleCheck} alt='double-check'/>
                </InfosBalaoMensagem>
                </BalaoDeMensagem>
						//Quando o nome do usuário for "eu", o balão 
						//só vai mostrar o conteúdo da mensagem
            )
        } else {
            return (
                <BalaoDeMensagem>
                <DivBalaoRemetente>{this.props.remetente}:</DivBalaoRemetente>
                <div>{this.props.mensagem}</div>
                <InfosBalaoMensagem>
                <div>{this.props.hora}</div>
                <img src={doubleCheck} alt='double-check'/>
                </InfosBalaoMensagem>
                </BalaoDeMensagem>
						//Quando o nome do usuário for qualquer outra coisa, 
						//o balão vai mostrar o nome do usuário e o conteúdo da mensagem
            )
        }}}
export default MostraMensagens