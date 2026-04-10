import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"

function App() {
  const [username,setUsername]=useState("")
    const [isLogged,setIsLoggedIn]=useState(false)
    const [password,setPassword]=useState("")
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login  username={username}
  password={password} setUsername={setUsername} setPassword={setPassword}  setIsLoggedIn={setIsLoggedIn}  />} />
         <Route path="/dashboard" element={ isLogged?<Dashboard  />:<Navigate replace to={"/"}/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
