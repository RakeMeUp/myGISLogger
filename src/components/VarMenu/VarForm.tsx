import { useVarContext } from "../../contexts/varContext"
import Input from "./Input"
import {inputTemplate} from '../../templates/inputTemplate.js'
import { useState } from "react"

export function VarForm() {
    const {setVariables, vars} = useVarContext()
    const [inputs, setInputs] = useState({
        ...vars
    })

    function onChange(e: any){
        setInputs({...inputs, [e.currentTarget.name]: e.currentTarget.value})
    }

    function handleSubmit(e: any){
        e.preventDefault();
        setVariables(inputs) 
        e.target.reset()       
    }

  return (
    <div>
        {JSON.stringify(inputs)}

        <form onSubmit={handleSubmit}>
            {inputTemplate.map(e=>{
                return <Input key={e.id} {...e} onChange={onChange}/>
            })}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}