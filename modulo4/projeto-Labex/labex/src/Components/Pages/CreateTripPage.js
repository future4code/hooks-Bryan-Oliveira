import React, { useState } from "react";
import { baseUrl } from "../../constants/constants";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseCreateData from "../../hooks/UseCreateData";
import UseForm from "../../hooks/UseForm";
import UseProtectedPage from "../../hooks/UseProtectedPage";
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
        
        const header= {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        
        createTrip(`${baseUrl}/trips`, form ,header, goBack)
    }
    
    
    return <>
    <h1>CreateTripPage</h1>
    <button onClick={goBack}>go back</button>
    <button onClick={goToHomePage}>go home</button>
    
    <form onSubmit={submit}>

        <input name="name" value={form.name} onChange={onChangeForm} placeholder='name' />
        <select name="planet" value={form.planet} onChange={onChangeForm}>
            {planets.map((planet, i)=>{
                return <option key={i}>{planet}</option>
            })}
        </select>
        <input name="date" value={form.date} onChange={onChangeForm} type={'date'} />
        <input name="description" value={form.description} onChange={onChangeForm} placeholder='description' />
        <input name="durationInDays" value={form.durationInDays} onChange={onChangeForm} placeholder='duration in days' type={'number'}/>
        <button>enviar</button>
    </form>
    
    </>
}

export default CreateTripPage