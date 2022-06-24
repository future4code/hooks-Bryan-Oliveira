import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";


import { UseRequestData } from '../../hooks/UseRequestData'
import { baseUrl } from '../../constants/constants'

import styled from 'styled-components'
import {FluxoryButton, Text, Titles, PageDiv, SubText } from '../../styles/styles'

const Div = styled.div`
margin: 7px 0;
whidth: 90%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
max-width: 350px;

padding: 5px;

div{
margin: 5px;
}
` 
const CenterDiv = styled.div`
display: flex;
flex-direction: column;

h1{
    align-self:center;
}
`

const Prop = styled(Text)`
margin-right: 3px;
`

const Atribute = styled(SubText)`
`

const ListTripsPage = ()=>{

    const {goToApplicationform} = UseCoordinator()

    const [trips, tripsError, tripsIsLoading] = UseRequestData(`${baseUrl}/trips`)

    const tripsMap = trips && trips.trips.map((trip)=>{
        return <Div>
            <div>
            <Prop>Name:</Prop>
            <Atribute>{trip.name}</Atribute>
            </div>
            <div>
            <Prop>Planet:</Prop>
            <Atribute>{trip.planet}</Atribute>
            </div>
            <div>
            <Prop>Date:</Prop>
            <Atribute>{trip.date}</Atribute>
            </div>
            <div>
            <Prop>Duration:</Prop>
            <Atribute>{trip.durationInDays}</Atribute>
            </div>
            <div>
            <Prop>Description:</Prop>
            <Atribute>{trip.description}</Atribute>
            </div>
            <FluxoryButton onClick={()=>goToApplicationform(trip.id)}>inscrever-se</FluxoryButton>
        </Div>
    })

    return <CenterDiv>
    <Titles>ListTripsPage</Titles>
    {console.log(trips)}
    {tripsIsLoading && <span>Carregando...</span>}
    {!tripsIsLoading && tripsError && <span>ocorreu um erro</span>}
    {!tripsIsLoading && trips.trips.length>0 && tripsMap}
    {!tripsIsLoading && trips.trips.length===0 && <span>nenhuma viagem encontrada</span>}

    </CenterDiv>
}

export default ListTripsPage