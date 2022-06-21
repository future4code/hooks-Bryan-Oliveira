import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseCreateData = (url, body)=>{

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [data , setData] = useState({})
    useEffect(()=>{
        
        setIsLoading(true)

        axios
        .post(url, body)
        .then((res)=>{
            setIsLoading(false)
            setData(res)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(error)
        })
    },[url])

    return [data ,error , isLoading]
}

export default UseCreateData