import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEraseData = (url)=>{
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{

        setIsLoading(true)

        axios
        .delete()
        .then(()=>{
            setIsLoading(false)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
        })
    },[url])

    return [error, isLoading]
    
}

export default UseEraseData