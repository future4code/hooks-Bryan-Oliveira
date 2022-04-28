import React, {Component} from 'react'
import styled from 'styled-components'
import './SecaoCompartilhar.css'

const ButtonCompartilhar = styled.button`
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    margin-right: 5px;
`
export class ButtonCompartilhando extends React.Component {
	state = {

	}

	render() {
		return <>
			    <ButtonCompartilhar onClick={this.props.aoCompartilhar}>
                    {this.props.redeSocial}
                </ButtonCompartilhar>

                <ButtonCompartilhar onClick={this.props.aoCompartilhar}>
                    {this.props.redeSocial2}
                </ButtonCompartilhar>

                <ButtonCompartilhar onClick={this.props.aoCompartilhar}>
                    {this.props.redeSocial3}
                </ButtonCompartilhar>
        </>
	}
}
