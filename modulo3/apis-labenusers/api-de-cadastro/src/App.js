import React from "react"
import Cadastro from "./Components/Cadastro/Cadastro"
import ListaDeUsuarios from "./Components/ListaDeUsuarios/ListaDeUsuarios"
import styled from "styled-components"

const MainDiv = styled.div`
display: flex;
width: 100%;
justify-content: center;
padding-top: 10px;
`


class App extends React.Component {
  state = {
    TelaDeListaDeUsuarios: false
  }

  onCliCKMudaDeCadastroParaListaDeUsuarios = ()=>{
    this.setState({TelaDeListaDeUsuarios: !this.state.TelaDeListaDeUsuarios})
  }

  render(){
    return <MainDiv>
      <div>
    {this.state.TelaDeListaDeUsuarios && <ListaDeUsuarios onclick={this.onCliCKMudaDeCadastroParaListaDeUsuarios} />}
    
    {!this.state.TelaDeListaDeUsuarios && <Cadastro onclick={this.onCliCKMudaDeCadastroParaListaDeUsuarios} />}
      </div>
    </MainDiv>
  }
}

export default App
