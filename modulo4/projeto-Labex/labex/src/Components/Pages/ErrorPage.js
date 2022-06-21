import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";

const ErrorPage = ()=>{

    const {goToHomePage} = UseCoordinator()
    return (
        <>
        <h1>Page not found</h1>
        <button onClick={goToHomePage} > go to home</button>
        </>
    )
}

export default ErrorPage