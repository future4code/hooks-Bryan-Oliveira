import { useState } from "react";

const UseForm = (initialState)=>{
    const [form , setForm] = useState(initialState)
    
    const onChangeForm = (event)=>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const clarFields = ()=>{
        setForm({initialState})
    }

    return {form, onChangeForm, clarFields}
}

export default UseForm