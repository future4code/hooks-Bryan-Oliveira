import axios from 'axios'
import { useState, useEffect } from 'react'

export const UseRequestData = (url, headers, callbackRes, callbackErr)=>{
    const [data, setData] = useState(undefined)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const header = {
        headers: headers
        
    }

    useEffect(()=>{
        
        setIsLoading(true)
        
        axios
        .get(url, header)
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
            callbackRes && callbackRes(res.data)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
            callbackErr && callbackErr()
        })
    
    },[url])
    
    return [data, error, isLoading]
}