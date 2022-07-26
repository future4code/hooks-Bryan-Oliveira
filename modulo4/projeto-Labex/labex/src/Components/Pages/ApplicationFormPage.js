import React, { useState } from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import { FluxoryButton, InputsText, Titles, SubmitButton, Form, SubTitle, PostPutDeleteLoading } from "../../styles/styles";
import { useParams } from "react-router-dom";
import UseForm from '../../hooks/UseForm'
import UseCreateData from '../../hooks/UseCreateData'
import { baseUrl } from "../../constants/constants";
import styled from "styled-components";
import Countries from "./Countries/Countries";

const InputText = styled(InputsText)`
margin:10px 0;
`

const ApplyForm = styled(Form)`
width: 325px;
min-height: 450px;
text-align: center;
` 

const DivButtons = styled.div`
width: 350px;
display: flex;
justify-content: space-evenly;
margin-top: 10px;
margin-bottom: 25px;
`

const Buttons = styled(FluxoryButton)`
margin-right: 15px;
`

const ApplicationFormPage = ()=>{
    const [trip, setTrip] = useState(JSON.parse(localStorage.getItem('trip')))


    const [data, error, applyIsLoading, apply] = UseCreateData()

    const {form, onChangeForm} = UseForm({
      name: '',
      age: '',
      applicationText: '',
      profession: '',
      country: 'Brazil',
    })

    const {id} = useParams()
    const {goToHomePage, goBack} =  UseCoordinator()

    const applyToTrip = (event)=>{
      event.preventDefault()
      const deuCerto = ()=>{
        alert('Application successufull!')
        goBack()
      }
      const deuErrado = ()=>{
        alert('something gone wrong!')
      }

      if(form.age >= 18){
        apply(`${baseUrl}/trips/${id}/apply`, form, {}, deuCerto, deuErrado )
      }else{
        alert('precisa ser maior de 18 anos!')
      }
    }
    return <>
    
    <Titles>ApplicationFormPage</Titles>

    
    <DivButtons>
      <FluxoryButton onClick={goToHomePage}>home</FluxoryButton>      
      <FluxoryButton onClick={goBack}>go back</FluxoryButton>    
    </DivButtons>

    <ApplyForm onSubmit={applyToTrip}>
    <SubTitle>{trip.name}</SubTitle>
      <Countries required value={form.country} onChange={onChangeForm} />
      <InputText required pattern='[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{3,}' title="preencha com seu nome no mínimo 3 letras" name='name' value={form.name} onChange={onChangeForm} placeholder="name"/>
      <InputText required pattern='[0-9]{2,}' name='age' value={form.age} onChange={onChangeForm} placeholder="age" type={'number'}/>
      <InputText required pattern='^.{30,}$' title="necessário 30 caracteres pelo menos" name='applicationText' value={form.applicationText} onChange={onChangeForm} placeholder="application text"/>
      <InputText required name='profession' value={form.profession} onChange={onChangeForm} placeholder="profession"/>
      <SubmitButton>apply to trip</SubmitButton>
    </ApplyForm>
    {applyIsLoading && <PostPutDeleteLoading />}
    </>
}

export default ApplicationFormPage