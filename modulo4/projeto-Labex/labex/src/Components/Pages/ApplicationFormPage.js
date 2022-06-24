import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import { FluxoryButton, Titles } from "../../styles/styles";
import { useParams } from "react-router-dom";
import UseForm from '../../hooks/UseForm'
import UseCreateData from '../../hooks/UseCreateData'
import { baseUrl } from "../../constants/constants";

const ApplicationFormPage = ()=>{

    const [data, error, isLoading, apply] = UseCreateData()

    const {form, onChangeForm} = UseForm({
      name: '',
      age: '',
      applicationText: '',
      profession: '',
      country: 'Brasil',
    })

    const {id} = useParams()
    const {goToHomePage, goBack} =  UseCoordinator()

    const applyToTrip = ()=>{
      const deuCerto = ()=>{
        alert('funfou')
      }
      const deuErrado = ()=>{
        alert('não funfou')
      }
      apply(`${baseUrl}/trips/${id}/apply`, form, {}, deuCerto, deuErrado )
    }
    return <>
    
    <Titles>ApplicationFormPage</Titles>
    <FluxoryButton onClick={goToHomePage}>home</FluxoryButton>      
    <FluxoryButton onClick={goBack}>go back</FluxoryButton>    

    <input name='name' value={form.name} onChange={onChangeForm} placeholder="name"/>
    <input name='age' value={form.age} onChange={onChangeForm} placeholder="age" type={'number'}/>
    <input name='applicationText' value={form.applicationText} onChange={onChangeForm} placeholder="application text"/>
    <input name='profession' value={form.profession} onChange={onChangeForm} placeholder="profession"/>
    <button onClick={applyToTrip}>apply to trip</button>
    </>
}

export default ApplicationFormPage