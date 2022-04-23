import React from 'react';
import styled from "styled-components";


const LittlecardContainer = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 65px;
    `

    const LittlecardContainerInfo = styled.h4`
        margin-right: 15px;
        `  

function CardPequeno(props) {

      

    return (
        <LittlecardContainer>
            <LittlecardContainerInfo>{ props.info }:</LittlecardContainerInfo>
            <p>{ props.infoData }</p>
        </LittlecardContainer>
    )
}

export default CardPequeno;