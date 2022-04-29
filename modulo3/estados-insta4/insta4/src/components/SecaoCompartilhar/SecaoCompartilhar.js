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

	render() {
		return <ShareContainer>
			    <ButtonCompartilhando/>
		</ShareContainer>
	}
}
