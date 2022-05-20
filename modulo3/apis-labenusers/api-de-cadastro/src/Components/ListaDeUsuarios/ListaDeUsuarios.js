import React from "react";
import axios from "axios";


class ListaDeUsuarios extends React.Component{
    state = {
        usuarios:[]
    }

    getAllUsersURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    headers = {
        headers:{
        Authorization: "bryan-fernandes-hooks"
    }}

    deleteUserURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"

    getAllusers = ()=>{
        axios.get(this.getAllUsersURL, this.headers).then((response)=>{
            this.setState({usuarios: response.data})
        }).catch((error)=>{
            alert(error.message)
        })
    }

    componentDidMount(){
        this.getAllusers()
    }

    onClickDeletarUsuario = (userid)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userid}`, this.headers)
        .then((response)=>{
            alert("usuario deletado")
            this.getAllusers()
        }).catch((error)=>{
            alert(error.message)
        })
    }

    render(){

        const usuariosMap = this.state.usuarios.map((usuario)=>{
            return <li>{usuario.name}
            <button onClick={()=>this.onClickDeletarUsuario(usuario.id)}> deletar usuaio</button>
            </li>
        })

        return<>
        {usuariosMap}
        </>
    }
}

export default ListaDeUsuarios