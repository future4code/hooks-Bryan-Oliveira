import React, { useState } from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseProtectedPage from "../../hooks/UseProtectedPage";
const CreateTripPage = ()=>{
    UseProtectedPage()
    const [planet, setplanet] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const planets = ['terra', 'marte', 'mercurio', 'vênus', 'urano', 'saturno', 'neturno', 'júpter', 'plutão']

    const {goBack, goToHomePage} = UseCoordinator()

    const onchangeSelectPlanet = (event)=>{
        setplanet(event.target.value)
    }

    const onChangeInputName = (event)=>{
        setName(event.target.value)
    }

    const onChangeInputDescription = (event)=>{
        setDescription(event.target.value)
    }

    const onChangeInputDuration = (event)=>{
        setDuration(Number(event.target.value))
    }
    
    return <>
    <h1>CreateTripPage</h1>
    <button onClick={goBack}>go back</button>
    <button onClick={goToHomePage}>go home</button>
    <input onChange={onChangeInputName} placeholder='name' />
    <select value={planet} onChange={onchangeSelectPlanet}>
        {planets.map((planet)=>{
            return <option>{planet}</option>
        })}
    </select>
    <input type={'date'} />
    <input onChange={onChangeInputDescription} placeholder='description' />
    <input onChange={onChangeInputDuration} placeholder='duration in days' />
    </>
}

export default CreateTripPage