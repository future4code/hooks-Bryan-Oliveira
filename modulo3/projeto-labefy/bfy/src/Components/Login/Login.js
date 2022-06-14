import React from "react"
import styled from "styled-components"

const MainDiv = styled.div`
display: flex;
justify-content: center;
width: 100%;
min-height: 100vh;
background-color: #EFF4F7;
color: #073944;
padding-top: 15px;
`

const LoginDiv = styled.div`
display: flex;
flex-direction:column;
margin-bottom: 15px;
justify-content: center;
align-items: center;
background-color: #0564c8;
text-align: center;

width: 360px;
height: 80vh;

@media screen and (max-width:750px) {
    
}
`

const Div = styled.div`
display: flex;
justify-content: space-between;
margin-top: 40px;
margin-bottom: 15px;
`

const LoginInput = styled.input`
border-radius: 10px;
padding: 3px 10px;
margin-bottom: 15px;
`

const Button = styled.button`
border-radius: 10px;
padding: 3px 10px;
color: #073944;
cursor: pointer;
background-color: #EFF4F7;


-webkit-transition: background-color 500ms ease-out;
-ms-transition: background-color 500ms ease-out;
transition: background-color 500ms ease-out;

&:hover{
  background-color: transparent;
    -webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
    transition: background-color 500ms ease-out;
}
`
const H1 = styled.h1`
color: #fff;
`
const H2 = styled.h2`
color: #fff;
`

class Login extends React.Component{
  state = {
    loginInputNome:'',
    loginInputSobrenome: '',
  }

  onChangeInputNome = (event)=>{
    
    this.setState({loginInputNome: event.target.value.toLowerCase()})
  }

  onChangeInputSobrenome = (event)=>{
    
    this.setState({loginInputSobrenome: event.target.value.toLowerCase()})
  }

  onClickButtonEnviar = ()=>{
      const usuario = {nome: this.state.loginInputNome.trim(), sobreNome: this.state.loginInputSobrenome.trim()}

      localStorage.setItem("usuario", JSON.stringify(usuario))

      this.setState({loginInputSobrenome: '', loginInputNome: ''})
      window.location.reload()
  }

  
  render(){

    return <MainDiv>
    <LoginDiv>
        <H1>Bem Vindo(a) ao bfy</H1>
        <H2>Entre com seu nome e sobrenome</H2>
        <LoginInput value={this.state.loginInputNome} onChange={this.onChangeInputNome} placeholder="digite seu nome" name="loginInputNome" />
        <LoginInput value={this.state.loginInputSobrenome} onChange={this.onChangeInputSobrenome} placeholder="digite seu sobrenome" name="loginInputSobrenome" />
        {console.log(this.state.loginInputNome)}
        <Button onClick={this.onClickButtonEnviar}>Entrar</Button>
    </LoginDiv>
    </MainDiv>

  }
}

export default Login;