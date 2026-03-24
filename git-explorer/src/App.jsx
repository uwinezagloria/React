import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes,Route} from "react-router-dom"
import HomePage from './components/Home'
import AboutPage from './components/About'
function App() {
  return (
<Routes>
  <Route   path='/' element={<HomePage></HomePage>}></Route>
  <Route path="/about" element={<AboutPage></AboutPage>}></Route>
</Routes>
  )
}

export default App
