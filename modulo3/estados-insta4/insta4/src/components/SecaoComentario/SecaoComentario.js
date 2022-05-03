import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const Comentarios = styled.div`
	color: black;
	padding: 5px;
	display: flex;
	flex-direction: column;
`

export class SecaoComentario extends React.Component {
	state = {
	}

	

	render() {
		return <>
			<Comentarios>{this.props.comentarios.map((coment)=>{
				return <Comentarios>{coment}</Comentarios>
			})
		}</Comentarios>
				<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.props.comentario}
				onChange={this.props.onchange}
				/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
		</>
	}
}
