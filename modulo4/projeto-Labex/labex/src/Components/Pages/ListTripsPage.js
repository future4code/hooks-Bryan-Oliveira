import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";

import { UseRequestData } from '../../hooks/UseRequestData'
import { baseUrl } from '../../constants/constants'

const ListTripsPage = ()=>{

    const {goToApplicationform} = UseCoordinator()

    const [trips, tripsError, tripsIsLoading] = UseRequestData(`${baseUrl}/trips`)

    const tripsMap = trips && trips.trips.map((trip)=>{
        return <div>{trip.name}</div>
    })

    return <>
    <h1>ListTripsPage</h1>

    {tripsIsLoading && <span>Carregando...</span>}
    {!tripsIsLoading && tripsError && <span>ocorreu um erro</span>}
    {!tripsIsLoading && trips.trips.length>0 && tripsMap}
    {!tripsIsLoading && trips.trips.length===0 && <span>nenhuma viagem encontrada</span>}

    <button onClick={goToApplicationform}>inscrever-se</button>
    </>
}

export default ListTripsPage