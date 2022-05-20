import React from "react"
import Cadastro from "./Components/Cadastro/Cadastro"
import ListaDeUsuarios from "./Components/ListaDeUsuarios/ListaDeUsuarios"


class App extends React.Component {

  render(){
    return <>
    <Cadastro/>
    <ListaDeUsuarios/>
    </>
  }
}

export default App
