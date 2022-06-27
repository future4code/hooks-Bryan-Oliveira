import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";


import { UseRequestData } from '../../hooks/UseRequestData'
import { baseUrl } from '../../constants/constants'

import styled from 'styled-components'
import {FluxoryButton, Text, Titles,  SubText, Card, RequestLoading } from '../../styles/styles'

const Div = styled(Card)`
margin-bottom: 15px;
width: 90%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
max-width: 350px;

border: none;
border-bottom: 1px solid ${({ theme }) => theme.border};
border-top: 1px solid ${({ theme }) => theme.border};




button{
    margin: auto;
}

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

const GoBack = styled(FluxoryButton)`
align-self: center;
margin: 15px 0;
`

const ListTripsPage = ()=>{

    const {goToApplicationform, goBack} = UseCoordinator()

    
    const [trips, tripsError, tripsIsLoading] = UseRequestData(`${baseUrl}/trips`)

    const subscribe = (trip) =>{
        localStorage.setItem('trip',JSON.stringify(trip))
        goToApplicationform(trip.id)
    }

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
            <Atribute>{trip.durationInDays} dias</Atribute>
            </div>
            <div>
            <Prop>Description:</Prop>
            <Atribute>{trip.description}</Atribute>
            </div>
            <FluxoryButton onClick={()=>subscribe(trip)}>subscribe</FluxoryButton>
        </Div>
    })

    return <CenterDiv>
    <Titles>ListTripsPage</Titles>
    
    <GoBack onClick={goBack}>go back</GoBack>
    
    {/* {tripsIsLoading && <span>Carregando...</span>} */}
    {tripsIsLoading && <RequestLoading><div/><div/><div/><div/><div/><div/></RequestLoading> }

    {!tripsIsLoading && tripsError && <span>ocorreu um erro</span>}
    {!tripsIsLoading && trips.trips.length>0 && tripsMap}
    {!tripsIsLoading && trips.trips.length===0 && <span>nenhuma viagem encontrada</span>}
    {console.log(tripsError)}
    </CenterDiv>
}

export default ListTripsPage