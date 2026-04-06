import { useReducer, useState } from "react"


export const  FormUserReducer=()=>{
    const reducer=(state,action)=>{
    if(action.type==="setName"){
return {...state,[action.name]:action.value}
    }
    else{
        return state
    }
   }
     const[state,dispatch]=useReducer(reducer,{firstName:"uwineza",lastName:"gloria"})
  
  
   
    function handleChange(event){

dispatch({type:"setName",name:event.target.name,value:event.target.value})
   }
     return (
        <div>
            <input  type="text" name="firstName" placeholder="Enter your first name" onChange={handleChange}/>
            <input  type="text" name="lastName" placeholder="Enter your second name" onChange={handleChange}/>
            <h1>my name is {state.firstName} {state.lastName}</h1>

        </div>
    )
}