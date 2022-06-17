import React, { useEffect, useState } from 'react'
import { UseRequestData } from '../../hooks/UseRequestData'
import { baseUrl } from '../../constants/constants'
import Coordinator from '../../Coordinator'

const Home = ()=>{

    const {goToListTripsPage, goToAdminHomePage, goToLoginPage, goToTripDetailsPage} = Coordinator()

    const [trips, tripsError, tripsIsLoading] = UseRequestData(`${baseUrl}/trips`)

    const tripsMap = trips && trips.trips.map((trip)=>{
        return <div>{trip.name}</div>
    })


    const isAthenticated = true

    return <>
    <h1>Home</h1>
    
    {tripsIsLoading && <span>Carregando...</span>}
    {!tripsIsLoading && tripsError && <span>ocorreu um erro</span>}
    {!tripsIsLoading && trips.trips.length>0 && tripsMap}
    {!tripsIsLoading && trips.trips.length===0 && <span>nenhuma viagem encontrada</span>}

    <button onClick={goToListTripsPage}>go to list trips page</button>
    <button onClick={isAthenticated? goToAdminHomePage : goToLoginPage}>admin area</button>
    <button onClick={goToTripDetailsPage}>go to trip details</button>
    </>

}

export default Home