import React from "react";
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const H1 = styled.h1`
font-size: 25px;
`

const Label = styled.label`
margin: 10px 0;
font-weight: 600;
font-size: 20px;
`

const Input = styled.input`
width: 250px;
`
class Etapa2 extends React.Component{
    state ={}

    render(){
        const etapa2CursoSuperior = <Div>
        <H1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</H1>

        <Div>
            <Label>5.Qual curso?</Label>
            <Input type="text"></Input>
        </Div>
        <Div>
            <Label>6.Qual unidade de ensino?</Label>
            <Input type="text"></Input>
        </Div>
    </Div>

    const etapa2SemCursoSuperior = <Div>
    <H1>ETAPA 2 - INFORMAÇÕES GERAIS DE ENSINO</H1>
    <Div>
        <Label>5.Por que você não terminou um curso de graduação?</Label>
        <Input></Input>
    </Div>
    <Div>
        <Label>6.Você fez algum curso complementar?</Label>
        <select>
            <option>nenhum</option>
            <option>curso técnico</option>
            <option>inglês</option>
        </select>
    </Div>
</Div>

        return <>
        {/* recebe por props o valor da tag select do componente formulario com o nome de 'formacao' 
        e de acordo com esse valor exibe a as opções de ensino superior ou de ensino geral*/}
        {this.props.formacao.toLowerCase().includes("medio") && etapa2SemCursoSuperior}
        {this.props.formacao.toLowerCase().includes("superior") && etapa2CursoSuperior}
        </>
    }
}

export default Etapa2