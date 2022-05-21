import React from "react"
import axios from "axios"
import styled from "styled-components"

const Button = styled.button`
background-color: transparent;
border-radius: 3px;

-webkit-transition: background-color 500ms ease-out;
-ms-transition: background-color 500ms ease-out;
transition: background-color 500ms ease-out;

&:hover{
    background-color: rgb(205,205,205,0.5);
    
    -webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
    transition: background-color 500ms ease-out;
}

`

const Input = styled.input`
margin: 10px 0 10px 5px;
border-radius: 3px;
padding: 3px;
`

class Cadastro extends React.Component{
    state = {
        nomeUsuario: '',
        emailUsuario: '',

    }

    headers = {
        headers:{
        Authorization: "bryan-fernandes-hooks"
    }}

    createUserURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"



    onChangeNomeUsuario = (event)=>{
        this.setState({nomeUsuario: event.target.value})
    }

    onChangeemailUsuario = (event)=>{
        this.setState({emailUsuario: event.target.value})
    }

    onClickEnviar = ()=>{
        axios.post(this.createUserURL, {
            "name": this.state.nomeUsuario,
            "email": this.state.emailUsuario
        }, this.headers).then((response)=>{
            alert("usuario cadastrado com sucesso!")
            this.props.onclick()
        }).catch((error)=>{
            alert(error.message)
        })
    }


    render(){

        return <>

        <Button onClick={this.props.onclick}>  Ver lista de usuários </Button>


        <div>
        <label>NOME:</label>
        <Input placeholder="nome" value={this.state.nomeUsuario} 
        onChange={this.onChangeNomeUsuario}/>
        </div>
        <div>
        <label>EMAIL:</label>
        <Input placeholder="email" value={this.state.emailUsuario} 
        onChange={this.onChangeemailUsuario} type="email"/>
        </div>
        <Button onClick={this.onClickEnviar}>enviar</Button>
        </>
    }
}

export default Cadastro