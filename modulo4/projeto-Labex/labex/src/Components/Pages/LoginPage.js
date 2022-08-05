import React, { useState } from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import {baseUrl} from '../../constants/constants'
import axios from "axios";
import { FluxoryButton, Form, InputsText, Titles } from '../../styles/styles'
import styled from "styled-components";
import UseCreateData from "../../hooks/UseCreateData";
import UseForm from '../../hooks/UseForm'

const GoBack = styled(FluxoryButton)`
margin: 10px 0;
`  

const InputText = styled(InputsText)`
margin-bottom: 15px;
`

const LoginPage = ()=>{

    const {form, onChangeForm, clarFields} = UseForm({
        email: '',
        password: '',

    })

    const [data, dataError, dataIsLoading, dataPost] = UseCreateData()

    const { goToAdminHomePage,goBack} = UseCoordinator()

    const onClickLogin = (event)=>{
        event.preventDefault()
        localStorage.removeItem('token')
        
        const callbackRes = (res) =>{
            localStorage.setItem('token',res.data.token)
            goToAdminHomePage({replace: true})
        }
        const callbackErr = () =>{
            alert('email ou senha incorretos')
        }

        dataPost(`${baseUrl}/login`,form, {},callbackRes, callbackErr )
    }


    return <>
    <Titles>LoginPage</Titles>
        <GoBack onClick={goBack}>go home</GoBack>

    <Form onSubmit={onClickLogin}>
        <InputText required pattern='[a-z0-9 ._%+-]+@[a-z0-9 .-]+\.[a-z]{2,}$' title='digite email válido' name='email' value={form.email} onChange={onChangeForm} autoFocus placeholder="email" type={'email'}/>
        <InputText required name='password' value={form.password} onChange={onChangeForm} placeholder="password" type={'password'}/>
        <FluxoryButton>Login</FluxoryButton>
        {console.log(form)}
    </Form>
    </>
}

export default LoginPage