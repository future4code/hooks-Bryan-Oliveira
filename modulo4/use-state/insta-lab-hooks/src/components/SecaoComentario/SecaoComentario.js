import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [comentario, setComentario] = useState('')

	const onChangeComentario = (event) => {
		setComentario(event.target.value)
	}

	const onClickEnviarComentario = (event)=>{
		const tecla = event.key

		if(tecla === 'Enter'){props.enviarComentario(comentario)
		setComentario('')}
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={comentario}
				onChange={onChangeComentario}
				onKeyDown={onClickEnviarComentario}
				autoFocus
			/>
			<button onClick={ onClickEnviarComentario } >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario