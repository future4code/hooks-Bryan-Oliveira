import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseProtectedPage from "../../hooks/UseProtectedPage";
import {UseRequestData} from '../../hooks/UseRequestData'
import { baseUrl } from "../../constants/constants";
import styled from 'styled-components'

const TripsMapDiv = styled.div`
display: flex;
flex-direction: column;


div{
    margin: 5px 0;
    border: 1px solid;
    padding: 3px;
    border-radius: 5px;
    cursor: pointer;
}
`

const AdminHomePage = ()=>{

    UseProtectedPage()

    const [trips , tripsError, tripsIsLoading] = UseRequestData(`${baseUrl}/trips`)

    const tripsMap = trips && trips.trips.map((trip)=>{
        return <div onClick={()=>onClickTripDetails(trip.id)}>{trip.name}</div>
    })

    const onClickTripDetails = (tripId)=>{
        goToTripDetailsPage(tripId)
    }

    const {goToTripDetailsPage, goToCreateTripPage} = UseCoordinator()
    return <>
    <h1>AdminHomePage</h1>
    
    {trips && trips.trips.length>0 && <TripsMapDiv>{tripsMap}</TripsMapDiv>}
    <button onClick={goToTripDetailsPage}>go to trip details</button>
    <button onClick={goToCreateTripPage}>go to create trips</button>
    </>
}

export default AdminHomePage