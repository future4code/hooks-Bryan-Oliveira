import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import UseProtectedPage from "../../hooks/UseProtectedPage";
const CreateTripPage = ()=>{
    
    UseProtectedPage()

    const {goBack} = UseCoordinator()


    return <>
    CreateTripPage
    <button onClick={goBack}>go back</button>

    </>
}

export default CreateTripPage