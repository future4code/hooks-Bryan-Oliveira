import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../constants/constants";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseProtectedPage from "../../hooks/UseProtectedPage";
import { UseRequestData } from "../../hooks/UseRequestData";
import styled from "styled-components";
import { Card, Text, SubText, Titles, FluxoryButton, SubTitle, RequestLoading, PostPutDeleteLoading } from "../../styles/styles";
import UseEditData from "../../hooks/UseEditData";


const TripDetailsDiv = styled(Card)`
width: 350px;
margin-bottom: 15px;
`

const Buttons = styled(FluxoryButton)`
margin: 15px;
`
const CardCandidate = styled(Card)`
width: 300px;
margin-bottom: 15px;
word-wrap: break-word;
display: flex;
flex-direction: column;
`
const CandidatesDiv = styled.div`
width: 350px;
`

const ButtonCandidate = styled(Buttons)`
&:hover{
    border-color: transparent;
}
`

const ButtonCandidateClicked = styled(ButtonCandidate)`
border-bottom-color: orange;

&:hover{
    border-bottom-color: orange;
}
`

const AcceptCandidate = styled(ButtonCandidate)`
color: green;

&:hover{
    border-bottom-color: green;
}
`

const DeclineCandidate = styled(ButtonCandidate)`
color: red;

&:hover{
    border-bottom-color: red;
}
`

const DecideCandidate = styled.div`
align-self: center;
`

const TripDetailsPage = ()=>{
    UseProtectedPage()
    
    const [candidatesList, setCandidatesList] = useState([])
    const [decideData, decideError, decideIsLoading, decide] = UseEditData()

    const setCandidatesListFromRequest = (data) =>{
        setCandidatesList(data.trip.candidates)
    }

    const token = localStorage.getItem('token')
    const {id} = useParams()


    const [ tripDetails, tripDetailsError, tripDetailsIsLoading ] = UseRequestData(`${baseUrl}/trip/${id}`, {
       auth: token
    }, setCandidatesListFromRequest)

    console.log('trip details', tripDetails)

    const tripDetailsRender = (tripDetails &&
        <TripDetailsDiv>
            <div><Text>name:</Text> <SubText>{tripDetails.trip.name}</SubText></div>
            <div><Text>planet:</Text> <SubText>{tripDetails.trip.planet}</SubText></div>
            <div><Text>duration:</Text> <SubText>{tripDetails.trip.durationInDays} days</SubText> </div>
            <div><Text>date:</Text> <SubText>{tripDetails.trip.date}</SubText></div>
            <div><Text>description:</Text> <SubText>{tripDetails.trip.description}</SubText></div>
        </TripDetailsDiv>
    )
    
    
    const tripCandidatesNotApproved = !tripDetailsIsLoading && candidatesList.filter((candidate)=>{
        return tripDetails.trip.approved.lenfth>0? !tripDetails.trip.approved.includes(candidate.id) : true
    })

    console.log('candidates not approved:', tripCandidatesNotApproved)


    const decideCandidate = (candidateId, approve) =>{
        
        const deucerto = () => {
            // alert('Request accepted')
            const newCandidatesList = candidatesList.filter((candidate)=>{
                return candidate.id !== candidateId
            }) 
            setCandidatesList(newCandidatesList)
        }
        
        const deuerrado = () => {
            alert('something gone wrong!')
            console.log('erro em decidir candidato', decideError)
        }
        
        decide(`${baseUrl}/trips/${id}/candidates/${candidateId}/decide`, {
            approve,
        }, {
            headers : {auth: token}
        },deucerto, deuerrado)
    }

    const tripCandidatesNoteApprovedMap = !tripDetailsIsLoading && tripCandidatesNotApproved.map((candidate)=>{
        return (
            <CardCandidate>
                <div><Text>name:</Text> <SubText>{candidate.name}</SubText></div>
                <div><Text>age:</Text> <SubText>{candidate.age}</SubText></div>
                <div><Text>country:</Text> <SubText>{candidate.country}</SubText></div>
                <div><Text>profession:</Text> <SubText>{candidate.profession}</SubText></div>
                <div><Text>application text:</Text> <SubText>{candidate.applicationText}</SubText></div>
                
                <DecideCandidate>
                    <AcceptCandidate onClick={()=>decideCandidate(candidate.id, true)}>accept</AcceptCandidate> 
                    <DeclineCandidate onClick={()=>decideCandidate(candidate.id, false)}>decline</DeclineCandidate> 
                </DecideCandidate>
            </CardCandidate>
        )
    })

    const tripCandidatesApproved = !tripDetailsIsLoading && tripDetails.trip.approved.map((candidate)=>{
        return <CardCandidate>
                <div><Text>name:</Text> <SubText>{candidate.name}</SubText></div>
                <div><Text>age:</Text> <SubText>{candidate.age}</SubText></div>
                <div><Text>country:</Text> <SubText>{candidate.country}</SubText></div>
                <div><Text>profession:</Text> <SubText>{candidate.profession}</SubText></div>
                <div><Text>application text:</Text> <SubText>{candidate.applicationText}</SubText></div>
        </CardCandidate>
    })

    const {goToHomePage, goBack} = UseCoordinator()

    const [buttonClicked, setButtonClicked] = useState('not approved')
    
    const decideButtonClicked = (button) =>{
        
        switch (button) {
            case 'not approved':
                setButtonClicked('not approved')
                break;
            case 'approved':
                setButtonClicked('approved')
                break;
        }

        const buttons = <>
        {buttonClicked==='not approved' && <><ButtonCandidateClicked>To decide</ButtonCandidateClicked> <ButtonCandidate onClick={()=>decideButtonClicked('approved')}>Approved</ButtonCandidate></>}
        {buttonClicked==='approved' && <><ButtonCandidate onClick={()=>decideButtonClicked('not approved')}>To decide</ButtonCandidate> <ButtonCandidateClicked>Approved</ButtonCandidateClicked></>}
        </>

        console.log('button clicked:', buttonClicked)
        return buttons
    }

    const renderCandidadtes = () => {
        let render = undefined;

        switch (buttonClicked) {
            case 'not approved':
                render = tripDetails.trip.candidates.length>0? tripCandidatesNoteApprovedMap : 
                <Text>Nenhum Candidato encontrado</Text>
                break;
            case 'approved':
                render = tripDetails.trip.approved.length>0? tripCandidatesApproved : 
                <Text>Nenhum candidato aprovado</Text>
                break;
        }

        return render
    }

    return <>
    <Titles>TripDetailsPage</Titles>
    
    <div>
        <Buttons onClick={goToHomePage}>go to home</Buttons>
        <Buttons onClick={goBack}>go back</Buttons>
    </div>

    {/* trip details part */} 
    {tripDetailsIsLoading && <RequestLoading><div/><div/><div/><div/><div/><div/></RequestLoading> }
    {!tripDetailsIsLoading && tripDetailsError && <SubText>ocorreu um erro</SubText>}
    {!tripDetailsIsLoading && tripDetails.trip && tripDetailsRender}
    {!tripDetailsIsLoading && !tripDetails.trip && <span>nenhum dado encontrado</span>}
    
    {/* candidates Part */}
    {!tripDetailsIsLoading && <SubTitle>Candidates</SubTitle>}
    {!tripDetailsIsLoading && <div>{decideButtonClicked()}</div>}
    {!tripDetailsIsLoading && <CandidatesDiv>{renderCandidadtes()}</CandidatesDiv> }
    {decideIsLoading && <PostPutDeleteLoading />}



    </>
}

export default TripDetailsPage