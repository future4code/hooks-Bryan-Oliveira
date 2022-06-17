import React from "react";
import Coordinator from "../../Coordinator";

const LoginPage = ()=>{

    const {goToAdminHomePage} = Coordinator()

    return <>
    LoginPage

    <button onClick={goToAdminHomePage}>Login</button>
    </>
}

export default LoginPage