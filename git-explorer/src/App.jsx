import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes,Route} from "react-router-dom"
import HomePage from './components/Home'
import AboutPage from './components/About'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import ProjectDetail from './components/ProjectDetail'
import User from './components/User'
function App() {
  return (
<Routes>
  <Route  path="/" element={<Navbar />} >
  <Route   path='/' element={<HomePage></HomePage>} />
  <Route path="/about" element={<AboutPage></AboutPage>} />
  <Route path="/product/:name" element={<ProjectDetail/>} />
  <Route path="/user/:firstname/:lastname" element={<User/>} />
  </Route>
   <Route path="*" element={<NotFound />} />
</Routes>
  )
}

export default App
