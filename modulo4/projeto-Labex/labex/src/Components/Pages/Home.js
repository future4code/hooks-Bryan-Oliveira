import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UseCoordinator from '../../hooks/UseCoordinator'
import { FluxoryButton, PageDiv, Titles } from '../../styles/styles'
import home from '../../images/home.jpg'
import styled from 'styled-components'

const Buttons = styled(FluxoryButton)`
margin: 10px 0;
width: calc(80% - 20px);
padding: 5px;
`

const Home = ()=>{



    const token = localStorage.getItem('token') 
    const [isAthenticated, setIsAuthenticated] = useState(token? true: false)
    const {goToListTripsPage, goToAdminHomePage, goToLoginPage} = UseCoordinator()

    return <PageDiv>
    <Titles>Home</Titles>
    
    <Buttons id='go-to-list-trips-page' onClick={goToListTripsPage}>go to list trips page</Buttons>
    <Buttons onClick={isAthenticated? goToAdminHomePage : goToLoginPage}>admin area</Buttons>
    </PageDiv>

}

export default Home