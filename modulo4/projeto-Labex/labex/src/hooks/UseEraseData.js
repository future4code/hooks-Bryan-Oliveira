import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEraseData = ()=>{
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const Delete = (url, header, callBackRes ,callBackError)=>{
        setIsLoading(true)

        axios
        .delete(url, header)
        .then((res)=>{
            setData(res)
            setIsLoading(false)
            callBackRes(res.data)
        })
        .catch((err)=>{
            setError(err)
            setIsLoading(false)
            callBackError(err)
        })
    }

    return [data , error, isLoading, Delete]
    
}

export default UseEraseData