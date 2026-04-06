import { useReducer } from "react"

/*  create a simple counter app with the followig requirements:
use useReducer for state management: Actions:increment,decrement,reset*/
export  const CounterApp=()=>{
    const reducer=(state,action)=>{
if(action.type==="increment"){
    return {count:state.count+1}
}
else if(action.type ==="decrement"){
    return {count:state.count-1}

}
else if(action.type==="reset"){
    return {count:0}
}
else{
    return state
}
    }
    const[state,dispatch]=useReducer(reducer,{count:0})
return(
<div>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
</div>)
}