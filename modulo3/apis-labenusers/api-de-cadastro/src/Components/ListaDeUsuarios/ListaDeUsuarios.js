import React from "react";
import axios from "axios";
import styled from "styled-components"

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

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

const Span = styled.span`
color: blue;
`
const Input = styled.input`
border-radius: 3px;
padding: 3px;
`

const DivUsuario = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
border: 2px solid black;
border-radius: 3px;
margin-top: 30px;
padding: 10px 0;
align-self: stretch;

span{
    margin-left: 5px;
}
`

const EditarUsuario = styled.button`
border: none;
color: blue;
text-decoration: underline;
`

const Div = styled.div`
margin:10px 0;
cursor: pointer;
`

const H2 = styled.h2`
margin: 10px;
font-weight: 400;
`

const DivInfoUsuario = styled.div`
position: absolute;
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: rgb(255,255,255,0.9) ;


`
const P = styled.p`
margin-bottom: 20px;
`
class ListaDeUsuarios extends React.Component{
    state = {
        usuarios:[],
        infosUsuarios: false,
        dataUsuario: {},
        usuarioSendoEditado: '',
        novoEmailUsuario: '',
        novoNomeUsuario: '',
        buscarUsuario: '',
        usuariosEncontrados: '',
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

    onClickDeletarUsuario = (user)=>{
        window.confirm(`realmente deseja deletar o usuario "${user.name}"`) && 
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`, this.headers)
        .then((response)=>{
            alert("usuario deletado")
            this.getAllusers()
        }).catch((error)=>{
            alert(error.message)
        })
    }

    onClickUsuario = (user)=>{
        this.state.usuarioSendoEditado !== user.id &&
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`, this.headers)
        .then((response)=>{
            this.setState({infosUsuarios: !this.state.infosUsuarios, dataUsuario: response.data})
        }).catch((error)=>{
            alert(error.message)
        })

    }

    onClickBuscarUsuario = ()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.buscarUsuario}`, 
        this.headers)
        .then((response)=>{
            let ids = ''
            for(let usuario of response.data){
                ids = ids + " " + usuario.id
            }
            this.setState({usuariosEncontrados: ids})
        }).catch((error)=>{
            alert(error.message)
        })
    }

    onClickUsuarioVoltar = ()=>{
        this.setState({infosUsuarios: !this.state.infosUsuarios})
    }

    onClickEditarUsuario = (userid)=>{
        this.setState({ usuarioSendoEditado: userid})
    }

    onChangeNovoNomeUsuario = (event)=>{
        this.setState({novoNomeUsuario: event.target.value})
    }

    onChangeNovoEmailUsuario = (event)=>{
        this.setState({novoEmailUsuario: event.target.value})
    }

    onChangeBuscarUsuario = (event)=>{
        this.setState({buscarUsuario: event.target.value})
    }

    editarUsuario = (user) =>{
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`, {
            name: this.novoNomeUsuario, email: this.novoEmailUsuario
        }, this.headers).then((response)=>{
            alert("Usuario editado com sucesso!")
            this.setState({usuarioSendoEditado: ''})
            this.getAllusers()
        }).catch((error)=>{
            alert(error.message)
        })
    }



    render(){

        const usuariosMap = this.state.usuarios.filter((usuario)=>{

            return this.state.usuariosEncontrados? this.state.usuariosEncontrados.includes(usuario.id): true
        }).map((usuario)=>{
            return <DivUsuario key={usuario.id}>
                {this.state.usuarioSendoEditado !== usuario.id && <EditarUsuario onClick={()=>this.onClickEditarUsuario(usuario.id)}>Editar</EditarUsuario>}
            <Div onClick={()=>this.onClickUsuario(usuario)}>
            USUARIO: {this.state.usuarioSendoEditado !== usuario.id && <Span>{usuario.name}</Span>}
          
            {this.state.usuarioSendoEditado === usuario.id && 
            <Input value={this.state.novoNomeUsuario} onChange={this.onChangeNovoNomeUsuario} placeholder="novo nome de usuário"/>}
          
            {this.state.usuarioSendoEditado === usuario.id && 
            <span>EMAIL: </span>} 
           
            {this.state.usuarioSendoEditado === usuario.id && 
            <Input value={this.state.novoEmailUsuario} onChange={this.onChangeNovoEmailUsuario} placeholder="novo email" type="email"/>}

            </Div>
            {this.state.usuarioSendoEditado !== usuario.id && <Button onClick={()=>this.onClickDeletarUsuario(usuario)}> deletar usuaio</Button>}
            {this.state.usuarioSendoEditado === usuario.id && <Button onClick={()=>this.editarUsuario(usuario)}>Salvar</Button>}
            </DivUsuario>
        })

        return<MainDiv>
            <Div>
        <Input value={this.state.buscarUsuario} 
        placeholder="Buscar usuário" 
        onChange={this.onChangeBuscarUsuario}/> 
        <Button onClick={this.onClickBuscarUsuario}>buscar</Button>
            </Div>
        <Button onClick={this.props.onclick}> Voltar </Button>
        <H2>LISTA DE USUÁRIOS</H2>
        {this.state.usuarios.length===0 && <p>Carregando...</p>}
        {this.state.infosUsuarios && <DivInfoUsuario>
            <h3>USUARIO:</h3>
                <Span>
                {this.state.dataUsuario.name}
                </Span>

            <h3>EMAIL:</h3>
            <P>
                {this.state.dataUsuario.email}
            </P>

                <Button onClick={this.onClickUsuarioVoltar}>Voltar</Button>
            </DivInfoUsuario>}
        {usuariosMap}
        </MainDiv>
    }
}

export default ListaDeUsuarios