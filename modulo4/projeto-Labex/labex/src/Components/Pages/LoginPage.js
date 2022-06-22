import React, { useState } from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import {baseUrl} from '../../constants/constants'
import axios from "axios";

const LoginPage = ()=>{

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const {goToAdminHomePage, goToHomePage} = UseCoordinator()

    const onChangeEmail = (event)=>{
        setEmail(event.target.value)
    }

    const onchangePassword = (event)=>{
        setPassword(event.target.value)
    }

    const onClickLogin = (event)=>{
        if(event.key==='Enter'){localStorage.removeItem('token')
        
        axios
        .post(`${baseUrl}/login`,{
            email, 
            password
        })
        .then((res)=>{
            localStorage.setItem('token',res.data.token)
            goToAdminHomePage({replace: true})
        })
        .catch((err)=>{
            console.log(err)
            alert('usuário ou senha incorretos')
        })

        }
    }


    return <>
    <h1>LoginPage</h1>

    <input onKeyDown={onClickLogin} value={email} onChange={onChangeEmail} autoFocus placeholder="email" type={'email'}/>
    <input onKeyDown={onClickLogin} value={password} onChange={onchangePassword} placeholder="password" type={'password'}/>
    <button onClick={onClickLogin}>Login</button>
    <button onClick={goToHomePage}>go home</button>
    </>
}

export default LoginPage