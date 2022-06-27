import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const UseProtectedPage = ()=>{
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const notAuth = ()=>{
        navigate('/login')
    }
    useEffect(()=>{
        token===null && notAuth() 

    },[navigate])


}

export default UseProtectedPage