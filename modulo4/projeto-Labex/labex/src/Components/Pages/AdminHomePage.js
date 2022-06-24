import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseProtectedPage from "../../hooks/UseProtectedPage";
import {UseRequestData} from '../../hooks/UseRequestData'
import { baseUrl } from "../../constants/constants";
import styled from 'styled-components'
import UseEraseData from "../../hooks/UseEraseData";

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
    const [deleteSuccess, deleteError, deleteIsLoading, Delete] = UseEraseData()

    const deleteTrip = (tripId)=>{
        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        const callBackError = ()=>{
            alert('error')
        }
        
        const reload = ()=>{
            window.location.reload()
        } 
        

        Delete(`${baseUrl}/trips/${tripId}`, header, reload, callBackError)
    }
    
    const tripsMap = trips && trips.trips.map((trip)=>{
        return <div key={trip.id}>
            
            <div 
            onClick={()=>onClickTripDetails(trip.id)}>
                {trip.name}
            </div>

            <button 
            onClick={()=>deleteTrip(trip.id)}>
                X
            </button></div>
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
    <h1>AdminHomePage</h1>
   
    <div>
        <button onClick={goBack}>go back</button>
        <button onClick={goToCreateTripPage}>go to create trips</button>
        <button onClick={logout}>logout</button>
    </div>
   
    {tripsIsLoading && <span>carregando...</span>}
    {trips && trips.trips.length>0 && <TripsMapDiv>{tripsMap}</TripsMapDiv>}
    </>
}

export default AdminHomePage