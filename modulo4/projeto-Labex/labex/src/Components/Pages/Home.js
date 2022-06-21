import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UseCoordinator from '../../hooks/UseCoordinator'

const Home = ()=>{

    const {goToListTripsPage, goToAdminHomePage, goToLoginPage, goToTripDetailsPage} = UseCoordinator()


    const isAthenticated = false

    return <>
    <h1>Home</h1>
    
    <button id='go-to-list-trips-page' onClick={goToListTripsPage}>go to list trips page</button>
    <button onClick={isAthenticated? goToAdminHomePage : goToLoginPage}>admin area</button>
    <button onClick={goToTripDetailsPage}>go to trip details</button>
    </>

}

export default Home