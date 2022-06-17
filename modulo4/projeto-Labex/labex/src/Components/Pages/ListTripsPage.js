import React from "react";
import Coordinator from "../../Coordinator";

const ListTripsPage = ()=>{

    const {goToApplicationform} = Coordinator()


    return <>
    ListTripsPage
    <button onClick={goToApplicationform}>go to apllication form</button>
    </>
}

export default ListTripsPage