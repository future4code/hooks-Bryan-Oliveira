import React from "react";
import { useNavigate } from "react-router-dom";
import Coordinator from "../../Coordinator";
const CreateTripPage = ()=>{

    const {goBack} = Coordinator()

    return <>
    CreateTripPage
    <button onClick={goBack}>go back</button>

    </>
}

export default CreateTripPage