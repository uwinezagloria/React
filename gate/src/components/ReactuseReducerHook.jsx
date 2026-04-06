/* We have a state that is updating the counter by incrementing and decrementing it by one 

How can you archive this using the `useReducer` hook?*/
import React, { useState,useReducer } from 'react';

function Counter() {
    const reducer=(state,action)=>{
if(action.type==="increment"){
    return {count:state.count+1}
}
else if(action.type==="decrement"){
    return {count:state.count-1}
}
else{
    return state
}
    }
  const [state, dispatch] = useReducer(reducer,{count:0});
  
  const increment = () => dispatch({type:"increment"});
  const decrement = () => dispatch({type:"decrement"});

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
