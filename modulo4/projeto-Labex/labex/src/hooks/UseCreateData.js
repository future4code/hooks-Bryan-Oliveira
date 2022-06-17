import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseCreateData = ()=>{

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect((url)=>{

        setIsLoading(true)

        axios
        .post(url)
        .then(()=>{
        setIsLoading(false)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(error)
        })
    },[url])

    return [error , isLoading]
}

export default UseCreateData