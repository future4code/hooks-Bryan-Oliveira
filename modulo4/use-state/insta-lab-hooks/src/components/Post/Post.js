import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [iconeCurtida, setIconeCurtida] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [caixaDeComentario , setCaixaDeComentario] = useState(false)
  const [comentarios, setComentarios] = useState([{id:0 , comentario:''}])


  //
  const onClickCurtida = () => {
    setIconeCurtida(!iconeCurtida)
    setNumeroCurtidas(!iconeCurtida? numeroCurtidas + 1 : numeroCurtidas - 1)
  };

  const onClickComentario = () => {
    setCaixaDeComentario(!caixaDeComentario)
  };

  const enviarComentario = (comentario) => {
    const ultimoId = comentarios[comentarios.length - 1].id
    setComentarios([...comentarios, {id: ultimoId + 1, comentario: comentario}])
    setNumeroComentarios(numeroComentarios + 1)
  }

  const comentariosMap = comentarios.map((comentario)=>{
    return <CommentContainer key={comentario.id}>{comentario.comentario}</CommentContainer>
  })

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario && comentariosMap}
      {caixaDeComentario && <SecaoComentario enviarComentario={enviarComentario}/>}
    </PostContainer>
  )
}

export default Post