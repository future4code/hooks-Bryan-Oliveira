import React from "react";
import Coordinator from "../../Coordinator";

const ErrorPage = ()=>{

    const {goToHomePage} = Coordinator()
    return (
        <>
        <h1>Page not found</h1>
        <button onClick={goToHomePage} > go to home</button>
        </>
    )
}

export default ErrorPage