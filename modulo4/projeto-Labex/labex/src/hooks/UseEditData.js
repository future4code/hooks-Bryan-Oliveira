import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEditData = ()=>{
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const put = (url, body, headers, callbackRes, callbackErr) => {
        setIsLoading(true)

        axios
        .put(url, body, headers)
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
            callbackRes(res.data)
        })
        .catch((err)=>{
            setError(err)
            setIsLoading(false)
            callbackErr(err)
        })   
    }

    return [data , error, isLoading, put]

}

export default UseEditData