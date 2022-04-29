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

aoCompartilharTwitter = () => {
    console.log("seu post foi compartilhado no Twitter")
}
aoCompartilharFacebook = () => {
    console.log("seu post foi compartilhado no Facebook")
}
aoCompartilharInstagram = () => {
    console.log("seu post foi compartilhado no Instagram")
}

	render() {
		return <>
			    <ButtonCompartilhar onClick={this.aoCompartilharTwitter}>
                    Twitter
                </ButtonCompartilhar>
			    <ButtonCompartilhar onClick={this.aoCompartilharFacebook}>
                    Facebook
                </ButtonCompartilhar>
			    <ButtonCompartilhar onClick={this.aoCompartilharInstagram}>
                    Instagram
                </ButtonCompartilhar>
        </>
	}
}
