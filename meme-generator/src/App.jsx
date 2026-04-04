import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import WindowTracker from './components/WindowTracker'
function App() {
  /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    const [show,setShow]=useState(true)
 const toggleShow=()=>{
  setShow(prev=>!prev)
 }
  return (
    <>
    <Header></Header>
    <Main></Main> 
    <main className="container">
            <button onClick={toggleShow}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
            
        </main>
    </>
    
    
    
        
  )
}

export default App
