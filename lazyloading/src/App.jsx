import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import React from 'react'
import { Suspense } from 'react'
function App() {
  const [show,setShow]=useState(false)
  const LazyComponent=React.lazy(()=> new Promise((resolve) => {
    setTimeout(() => {

      resolve(import("./component/LazyComponent"));
    }, 5000); // 5 seconds
  }))
 return (
  <div>
     <h1>hello world</h1>
     <button onClick={()=>setShow(prev=>!prev)}>Toggle component</button>
     <Suspense fallback={<h1>component is loading ...</h1>}>
    {show&& <LazyComponent/> }

  </Suspense>
   
  </div>
  )
 
 
}

export default App
