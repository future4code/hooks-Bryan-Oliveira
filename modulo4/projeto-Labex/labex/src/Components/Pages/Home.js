import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UseCoordinator from '../../hooks/UseCoordinator'

const Home = ()=>{
    const token = localStorage.getItem('token') 
    const [isAthenticated, setIsAuthenticated] = useState(token? true: false)



    const {goToListTripsPage, goToAdminHomePage, goToLoginPage} = UseCoordinator()


    return <>
    <h1>Home</h1>
    
    <button id='go-to-list-trips-page' onClick={goToListTripsPage}>go to list trips page</button>
    <button onClick={isAthenticated? goToAdminHomePage : goToLoginPage}>admin area</button>
    </>

}

export default Home