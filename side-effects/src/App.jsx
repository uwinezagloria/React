import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [starWarsData,setStarWarsData]=useState(null)
  const [count,setCount]=useState(1)
   /**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */
    /**
     * Challenge part 2:
     * Combine the "count" state with the request URL
     * so that pressing the "Get next character" button
     * will get a new character from the Star Wars API.
     * Remember to consider the dependencies array!
     */
  useEffect(function (){
    console.log("Effect function ran")
    fetch(`https://swapi.dev/api/people/${count}`)
  .then(res=>res.json())
  .then(data=>setStarWarsData(data))
  },[count])
  
  
 return (
  <div>
     <h2>The count is {count}</h2>
     <button onClick={()=>setCount(prev=>prev+1)}>Get next Character</button>
     <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
  </div>
 
 )
}

export default App
