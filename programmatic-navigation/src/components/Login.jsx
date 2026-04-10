import { useState } from "react";
import {useNavigate} from "react-router-dom"
const Login=(props)=>{
    const{setPassword,setUsername,setIsLoggedIn, username, 
    password}=props
    const navigate=useNavigate()
    const handlePasswordInput=(event)=>{
        setPassword(event.target.value)
    }
    const handleUsernameInput = (event) => {
  setUsername(event.target.value);
};
    const handleLogin=(event)=>{
        event.preventDefault();
        if(username==="user" && password==="1234"){
navigate("/Dashboard")
setIsLoggedIn(true)
        }
        else{
            alert("Invalid credentials")
        }
    }
    return (
       <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameInput}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordInput}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
    )
}
export default Login