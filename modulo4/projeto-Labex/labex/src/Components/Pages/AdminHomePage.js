import React, { useState } from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseProtectedPage from "../../hooks/UseProtectedPage";
import {UseRequestData} from '../../hooks/UseRequestData'
import { baseUrl } from "../../constants/constants";
import styled from 'styled-components'
import UseEraseData from "../../hooks/UseEraseData";
import { FluxoryButton, Titles,  Card, SubTitle, RequestLoading, PostPutDeleteLoading } from "../../styles/styles";

const TripsMapDiv = styled.div`
display: flex;
flex-direction: column;

`

const Buttons = styled(FluxoryButton)`
margin-bottom:15px;
`

const Cards = styled(Card)`
display: flex;
justify-content: space-between;

div{
    cursor: pointer;
    border-bottom: 2px solid transparent;
    padding: 0 10px;

    &:hover{
        border-color: orange;
    }
}

margin-bottom: 15px;
`

const DeleteButton = styled.button`
background-color: ${({ theme }) => theme.background};
border: none;
cursor: pointer;
font-size: 24px;
font-weight: 600;

color: ${({ theme }) => theme.text};

&:hover{
    color: red;
}
`

const AdminHomePage = ()=>{

    UseProtectedPage()

    const [trips, setTrips] = useState({})
    
    
    console.log(trips)
    const [tripsData , tripsError, tripsIsLoading] = UseRequestData(`${baseUrl}/trips`, {}, setTrips)
    const [deleteSuccess, deleteError, deleteIsLoading, Delete] = UseEraseData()

    const deleteTrip = (tripId)=>{
        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        const callBackError = ()=>{
            alert('something gone wrong!')
        }
        
        const reload = ()=>{
            const newTrips = trips.trips.filter((trip)=>{
                return trip.id !== tripId
            })
            setTrips({trips: newTrips})
        } 
        

        Delete(`${baseUrl}/trips/${tripId}`, header, reload, callBackError)
    }
    
    const tripsMap = !tripsIsLoading && trips.trips.map((trip)=>{
        return <Cards key={trip.id}>
            
            <div 
            onClick={()=>onClickTripDetails(trip.id)}>
                <SubTitle>{trip.name}</SubTitle>
            </div>

            <DeleteButton 
            onClick={()=>deleteTrip(trip.id)}>
                X
            </DeleteButton></Cards>
    })

    const onClickTripDetails = (tripId)=>{
        goToTripDetailsPage(tripId)
    }

    const {goBack, goToCreateTripPage, goToTripDetailsPage} = UseCoordinator()


    const logout = ()=>{
        localStorage.removeItem('token')
        window.location.reload()
    }


    return <>
    <Titles>AdminHomePage</Titles>
   
    <div>
        <Buttons onClick={goBack}>go back</Buttons>
        <Buttons onClick={goToCreateTripPage}>go to create trips</Buttons>
        <Buttons onClick={logout}>logout</Buttons>
    </div>
   
    {tripsIsLoading && <RequestLoading><div/><div/><div/><div/><div/><div/></RequestLoading> }
    {!tripsIsLoading && trips.trips.length>0 && <TripsMapDiv>{tripsMap}</TripsMapDiv>}
    {deleteIsLoading && <PostPutDeleteLoading />}
    </>
}

export default AdminHomePage