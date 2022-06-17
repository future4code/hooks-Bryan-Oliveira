import React from "react";
import Coordinator from "../../Coordinator";

const AdminHomePage = ()=>{

    const {goToTripDetailsPage, goToCreateTripPage} = Coordinator()
    return <>
    AdminHomePage

    <button onClick={goToTripDetailsPage}>go to trip details</button>
    <button onClick={goToCreateTripPage}>go to create trips</button>
    </>
}

export default AdminHomePage