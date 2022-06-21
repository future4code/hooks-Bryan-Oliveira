import React from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../constants/constants";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseProtectedPage from "../../hooks/UseProtectedPage";
import { UseRequestData } from "../../hooks/UseRequestData";
import styled from "styled-components";


const TripDetailsDiv = styled.div`
display: flex;
flex-direction: column;

border: 1px solid ;
border-radius: 5px;
padding: 3px;
`

const TripDetailsPage = ()=>{
    UseProtectedPage()

    const token = localStorage.getItem('token')
    const PathParm = useParams()


    const [ tripDetails, tripDetailsError, tripDetailsIsLoading ] = UseRequestData(`${baseUrl}/trip/${PathParm.id}`, {
        auth: token
    })
    console.log('trip details', tripDetails)

    const tripDetailsRender = (tripDetails &&
        <TripDetailsDiv>
            <div>name: {tripDetails.trip.name}</div>
            <div>planet: {tripDetails.trip.planet}</div>
            <div>duration: {tripDetails.trip.durationInDays} days</div>
            <div>date: {tripDetails.trip.date}</div>
            <div>description: {tripDetails.trip.description}</div>
        </TripDetailsDiv>
    )

    const {goToHomePage, goBack} = UseCoordinator()

    return <>
    <h1>TripDetailsPage</h1>

    {tripDetailsIsLoading && <span>Carregando...</span>}
    {!tripDetailsIsLoading && tripDetailsError && <span>ocorreu um erro</span>}
    {!tripDetailsIsLoading && tripDetails.trip && tripDetailsRender}
    {!tripDetailsIsLoading && !tripDetails.trip && <span>nenhum dado encontrado</span>}

    <button onClick={goToHomePage}>go to home</button>
    <button onClick={goBack}>go back</button>
    </>
}

export default TripDetailsPage