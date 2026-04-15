import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Password from './components/Password'
import { CounterApp } from './components/CounterApp'
import { FormUserReducer } from './components/FormUserReducer'
import { UseEffect } from './components/UserEffect'
import NameTransferLists from './components/NameTransferLists'
import ToggleButtons from './components/ToggleButtonColor'
import CardList from './components/ToggleCards'
import Counter from './components/ReactuseReducerHook'
import { FocusInput } from './components/useRefFocus'
import { ToggleContext } from './components/Context'
import { ToggleTheme } from './components/ToggleTheme'
import { PassingContext } from './components/Context'
import { SiblingOne } from './components/Sibling1'
import { SiblingTwo } from './components/Sibling2'
import Employees from './components/CustomHook'

function App() {
  const [background,setbackground]=useState("white")
  const [textcolor,setTextColor]=useState("black")
const [inputData,setInputData]=useState("")
  
  return (<>
  <Password/>
  <CounterApp />
  <FormUserReducer/>
  <UseEffect />
  {/*<NameTransferLists />*/}
  <ToggleButtons/>
   {/*<CardList />*/}
  <Counter/>
  <FocusInput />
  <ToggleContext.Provider value={{background,setbackground,textcolor,setTextColor}} >
    <ToggleTheme/>
  </ToggleContext.Provider>
  <PassingContext.Provider value={{inputData,setInputData}}>
    <SiblingOne/>
    <SiblingTwo/>
  </PassingContext.Provider>
   <Employees/>
  </>)
 
}

export default App
