import React from "react"
import axios from "axios"



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
            window.location.reload();
        }).catch((error)=>{
            alert(error.message)
        })
    }


    render(){

        return <>


        <div>
        <label>nome</label>
        <input placeholder="nome" value={this.state.nomeUsuario} 
        onChange={this.onChangeNomeUsuario}/>
        </div>
        <div>
        <label>email</label>
        <input placeholder="email" value={this.state.emailUsuario} 
        onChange={this.onChangeemailUsuario} type="email"/>
        </div>
        <button onClick={this.onClickEnviar}>enviar</button>
        </>
    }
}

export default Cadastro