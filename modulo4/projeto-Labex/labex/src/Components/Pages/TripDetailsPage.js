import React from "react";
import Coordinator from "../../Coordinator";

const TripDetailsPage = ()=>{

    const {goToHomePage} = Coordinator()

    return <>
    TripDetailsPage

    <button onClick={goToHomePage}> go to home</button>
    </>
}

export default TripDetailsPage