import React from "react";
import Coordinator from "../../Coordinator";

const ApplicationFormPage = ()=>{

    const {goBack} =  Coordinator()

    return <>
    ApplicationFormPage
    <button onClick={goBack}>go back</button>
    </>
}

export default ApplicationFormPage