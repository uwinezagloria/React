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

function App() {
  return (<>
  <Password/>
  <CounterApp />
  <FormUserReducer/>
  <UseEffect />
  <NameTransferLists />
  <ToggleButtons/>
  <CardList />
  <Counter/>
  <FocusInput />
  </>)
}

export default App
