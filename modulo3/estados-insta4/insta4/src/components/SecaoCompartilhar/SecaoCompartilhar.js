import React, {Component} from 'react'
import styled from 'styled-components'
import './SecaoCompartilhar.css'
import {ButtonCompartilhando} from './ButtonCompartilhar'

const ShareContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
`

export class SecaoCompartilhar extends React.Component {
	state = {

	}

	onChangeComentario() {

	}

	render() {
		return <ShareContainer>
			    <ButtonCompartilhando aoCompartilhar={this.props.aoCompartilhar} redeSocial={this.props.redeSocial} redeSocial2={this.props.redeSocial2} redeSocial3={this.props.redeSocial3}/>
		</ShareContainer>
	}
}
