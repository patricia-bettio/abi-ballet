import React, { useRef } from 'react'
import { Form } from './Forms'

function Input(props) {
    const { label, name, value } = props;

    const test = useRef(null)
    const handleChange = (event) => {
        // const updateForm = {...Form};
        // console.log("change:", event.target)
        // updateForm[label] = event.target.value;
        const value = event.target.value;
        console.log("value", value)
        console.log("test", test)
        
      }
    return (
        <label>
            {label}
            <input name={name} value={value} onChange={handleChange} ref={test}></input>
        </label> 
    )
}

export { Input }