import React from "react";
import styled from 'styled-components'

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Div = styled.div`
display: flex;
flex-direction: column;
`

class AddTarefas extends React.Component{
    state = {
        tarefas: [],
        tarefa: ''
    }

    mudaTarefa = (event)=>{
        this.setState({tarefa: event.target.value})
    }

    onClickTarefa = ()=>{
        this.setState({tarefas: [...this.state.tarefas, this.state.tarefa], tarefa: ''})
    }

    render(){

        const tarefasArrayMap = this.state.tarefas.map((tarefa, i)=>{
            return <Div key={i}>{tarefa}</Div>
        })

        return <MainDiv>
                <Div>
                    <input value={this.state.tarefa} onChange={this.mudaTarefa}/> 
                    <button onClick={this.onClickTarefa}>add tarefa</button>  
                </Div>
                {this.state.tarefas && tarefasArrayMap}
            </MainDiv>
    }
}

export default AddTarefas