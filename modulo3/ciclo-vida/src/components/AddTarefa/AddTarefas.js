import React from "react";
import styled from 'styled-components'
import Tarefas from "../Tarefas/Tarefas";

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Div = styled.div`
display: flex;
flex-direction: column;
width: 300px;
`

class AddTarefas extends React.Component{
    state = {
        tarefas: [],
        tarefa: '',
        value: 'todas'
    }

    mudaTarefa = (event)=>{
        this.setState({tarefa: event.target.value})
    }

    onClickTarefa = ()=>{
        this.setState({tarefas: [...this.state.tarefas, this.state.tarefa], tarefa: ''})
    }

    onChangeSelect = (event) =>{
        this.setState({value: `${event.target.value}`})
        console.log(`${this.state.value}`)
    }

    componentDidUpdate(){
        const tarefasParaLocalStorage = JSON.stringify(this.state.tarefas)
        localStorage.setItem('tarefas', tarefasParaLocalStorage)
    }

    componentDidMount(){
        const tarefasParaState = JSON.parse(localStorage.getItem('tarefas'))
        this.setState({tarefas: [tarefasParaState]})
    }

    render(){

        const tarefasArrayMap = this.state.tarefas.map((tarefa, i)=>{
            return <Tarefas filtro={this.state.value} key={i} tarefa={tarefa}/>
        })

        return <MainDiv>
                <Div>
                    <input value={this.state.tarefa} onChange={this.mudaTarefa}/> 
                    <button onClick={this.onClickTarefa}>add tarefa</button>  
                </Div>
                <Div> 
                    <select onChange={this.onChangeSelect}
                    value={this.state.value}>
                        <option value="todas">Todas</option>
                        <option value="pendentes">Pendentes</option>
                        <option value="concluidas">Concluidas</option>
                    </select>
                </Div>
                {this.state.tarefas && tarefasArrayMap}
            </MainDiv>
    }
}

export default AddTarefas