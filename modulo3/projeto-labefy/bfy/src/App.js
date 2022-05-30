import React from "react"
import Login from "./Components/Login/Login";
import Playlists from "./Components/Playlists/Playlists";
import GlobalStyle from "./theme/GlobalStyle";
import styled from "styled-components"

const H1 = styled.h1`
color: black;
align-self: center;
font-size: 4em;
@media screen and (max-width:750px) {
    font-size: 2.5em;
}
`
const MainDiv = styled.div`
padding-top: 10px;
display: flex;
flex-direction: column;
text-align: center;
`
const Button = styled.button`
align-self: flex-end;
margin-right: 20px;
border-radius: 10px;
padding: 3px 10px;


-webkit-transition: background-color 300ms ease-out;
-ms-transition: background-color 300ms ease-out;
transition: background-color 300ms ease-out;

&:hover{
  color: #fff;
    background-color: black;
    -webkit-transition: background-color 300ms ease-out;
    -ms-transition: background-color 300ms ease-out;
    transition: background-color 300ms ease-out;
}
`

class App extends React.Component{
  state = {
    usuario: {...JSON.parse(localStorage.getItem("usuario"))},
    token: this.getHashParams().access_token
  }

  onClickButtonTestandoLogin = ()=>{
    this.setState({usuario: {}})
}

getHashParams(){
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  e = r.exec(q)
  while (e) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
     e = r.exec(q);
  }
  return hashParams;
} 

  render(){

    return <MainDiv>
    <GlobalStyle />
    
    {/* <a href="http://localhost:8888/">

    <button>logar no spotify</button>
    </a> */}
    {/* {console.log(window.location.href.split("code=").pop())} */}

    {this.state.usuario.nome && this.state.usuario.sobreNome && <Button onClick={this.onClickButtonTestandoLogin}>Trocar Usuario</Button>}
    
    {this.state.usuario.nome && this.state.usuario.sobreNome || <Login/>}

    {this.state.usuario.nome && this.state.usuario.sobreNome && <H1>Olá {this.state.usuario.nome.toUpperCase()} {this.state.usuario.sobreNome.toUpperCase()}</H1>}
    {/* {console.log(this.state.usuario)} */}
    {this.state.usuario.nome && this.state.usuario.sobreNome && <Playlists usuario={this.state.usuario}/>}
    </MainDiv>

  }
}

export default App;
