import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeBookmarkBranco from '../../img/bookmark_white.svg'
import iconeBookmarkPreto from '../../img/bookmark_black.svg'
import iconeCompartilhar from '../../img/share.svg'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false,
    escrevendoComentario: "",
    comentarios: [""]
  }

  onClickCurtida = () => {
    this.setState({curtido: !this.state.curtido})

    if(this.state.curtido){
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    }else{ this.setState({numeroCurtidas: this.state.numeroCurtidas - 1}) }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
    
  }

  aoEnviarComentario = () => {
    this.setState({
      // comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarios: [...this.state.comentarios, this.state.escrevendoComentario],
      escrevendoComentario: ''
    })
  }

  onChangeComentario = (event) =>{
		this.setState({escrevendoComentario: event.target.value})
	}

  onClickBookmark = () => {
    this.setState({salvo: !this.state.salvo})
  }

  onClickCompartilhar = () => {
    this.setState({compartilhando: !this.state.compartilhando})
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeBookmark

    if(this.state.salvo) {
      iconeBookmark = iconeBookmarkPreto
    } else {
      iconeBookmark = iconeBookmarkBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario onchange={this.onChangeComentario} aoEnviar={this.aoEnviarComentario} comentario={this.state.escrevendoComentario} comentarios={this.state.comentarios}/>
    }

    let componenteCompartilhando

    if(this.state.compartilhando) {
      componenteCompartilhando = <SecaoCompartilhar aoCompartilhar={this.aoCompartilhar} redeSocial={'Twitter'} redeSocial2={'Instagram'} redeSocial3={'Facebook'}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeBookmark}
          onClickIcone={this.onClickBookmark}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />


      </PostFooter>
      {componenteComentario}
      {componenteCompartilhando}
    </PostContainer>
  }
}

export default Post