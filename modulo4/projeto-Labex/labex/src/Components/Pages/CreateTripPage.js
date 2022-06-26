import React, { useState } from "react";
import { baseUrl } from "../../constants/constants";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseCreateData from "../../hooks/UseCreateData";
import UseForm from "../../hooks/UseForm";
import UseProtectedPage from "../../hooks/UseProtectedPage";
import styled from "styled-components";
import { InputsText, Select, Option, FluxoryButton, SubmitButton, Form, Titles, PageDiv, PostPutDeleteLoading} from '../../styles/styles'

const InputText = styled(InputsText)`
margin: 10px;
`

const MainDiv = styled(PageDiv)`
border: none;
`
const CreateTripPage = ()=>{
    UseProtectedPage()
    
    const planets = ['terra', 'marte', 'mercurio', 'vênus', 'urano', 'saturno', 'neturno', 'júpter', 'plutão']

    const {goBack, goToHomePage} = UseCoordinator()

    const {form, onChangeForm, clarFields} = UseForm({
        name: '',
        planet: planets[0],
        description: '',
        durationInDays: '',
        date: undefined
    })
    
    const [createTripRes, createTripErr, createTripIsLoading, createTrip] = UseCreateData()
    
    
    const submit = (event)=>{
        event.preventDefault()
        
        const callbackError = ()=>{
            alert("something gone wrong!")
        }

        const validation = ()=>{
            const header= {
                headers: {
                    auth: localStorage.getItem('token')
                }
            }
            
            createTrip(`${baseUrl}/trips`, form ,header, goBack, callbackError)
        }
        
        
        const currentDate = new Date()
        const formDate = new Date(form.date)

        
        if(form.durationInDays < 50){
        alert('A viagem deve ter pelo menos 50 dias')
        }
        else if(currentDate.getTime() >= formDate.getTime() ){
        alert('A viagem deve ser no futuro')
        }
        else{
        validation()
        }
    }
    
    
    return <MainDiv>
    <Titles>CreateTripPage</Titles>
    
    <div>
        <FluxoryButton onClick={goBack}>go back</FluxoryButton>
        <FluxoryButton onClick={goToHomePage}>go home</FluxoryButton>
    </div>
    
    <Form onSubmit={submit}>

        <InputText pattern='^.{5,}$' title="mínimo de 5 letras" name="name" value={Form.name} onChange={onChangeForm} placeholder='name' />
        <Select name="planet" value={form.planet} onChange={onChangeForm}>
            {planets.map((planet, i)=>{
                return <Option key={i}>{planet}</Option>
            })}
        </Select>
        <InputText name="date" value={form.date} onChange={onChangeForm} type={'date'} />
        <InputText pattern='^.{30,}$' title='mínimo de 30 caracteres' name="description" value={form.description} onChange={onChangeForm} placeholder='description' />
        <InputText name="durationInDays" value={form.durationInDays} onChange={onChangeForm} placeholder='duration in days' type={'number'}/>
        <SubmitButton>enviar</SubmitButton>
    </Form>

    {createTripIsLoading && <PostPutDeleteLoading />}
    
    </MainDiv>}

export default CreateTripPage