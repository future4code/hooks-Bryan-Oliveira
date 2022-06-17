import axios from 'axios'
import { useState, useEffect } from 'react'

export const UseRequestData = (url)=>{
    const [data, setData] = useState(undefined)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        
        setIsLoading(true)
        
        axios
        .get(url)
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
        })
    
    },[url])
    
    return [data, error, isLoading]
}