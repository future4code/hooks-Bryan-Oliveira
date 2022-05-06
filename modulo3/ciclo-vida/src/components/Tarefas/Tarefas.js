import React from "react";
import styled from "styled-components";

const Div = styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;
margin: 5px 0;
width: 300px;
border: 1px solid black;
padding: 2px;
`


class Tarefas extends React.Component{
    state = {
        tarefaConcluida: false,
        statusTarefa: "pendente"
    }

    onClickTarefaCompleta = ()=>{
        this.setState({tarefaConcluida: !this.state.tarefaConcluida, statusTarefa: this.state.tarefaConcluida ? "concluida" : "pendente"} )
    }
    
    render(){
        // const statusTarefa = 
        const retorno = <Div onClick={this.onClickTarefaCompleta} > <div>{this.props.tarefa}</div>    {this.state.statusTarefa} </Div>
        return <>
        
        { this.props.filtro === "todas" ? retorno : (this.props.filtro === (this.state.statusTarefa + "s")) && retorno}

        </>
    }
}

export default Tarefas