import { useState } from 'react'
import React from "react"
import padsData from "./pads"
import './App.css'

function App() {
  /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     * 
     */
    const[pads,setPads]=React.useState(padsData)
    const padsList=pads.map((pad)=>{
return (<button key={pad.id}></button>)
    })
    return (
        <main>
            <div className="pad-container">
                {padsList}
            </div>
        </main>
    )
              
}

export default App
