import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEraseData = ()=>{
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const Delete = (url, header, callBackRes ,callBackError)=>{
        setIsLoading(true)

        axios
        .delete(url, header)
        .then((res)=>{
            setIsLoading(false)
            setData(res)
            console.log('res', res)
            setTimeout(()=>{
                callBackRes()},500)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
            console.log('error', err)
            callBackError()
        })
    }

    return [data , error, isLoading, Delete]
    
}

export default UseEraseData