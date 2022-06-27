import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseCreateData = ()=>{

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [data , setData] = useState({})
    
    const post = (url, body, header, callBackRes, callBackErr)=>{
        setIsLoading(true)

        axios
        .post(url, body, header)
        .then((res)=>{
            setIsLoading(false)
            setData(res)
            callBackRes(res)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
            callBackErr(err)
        })
    }

    return [data ,error , isLoading, post]
}

export default UseCreateData