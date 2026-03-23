import { useState } from 'react'
import React from "react"
import padsData from "./pads"
import './App.css'
import Pad from './components/Pad'

function App(props) {

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
    /**
     * Challenge: use a ternary to determine the backgroundColor
     * of the buttons
     * If darkMode is true, set them to "#222222"
     * If darkMode is false, set them to "#cccccc"
     */
     const[pads,setPads]=React.useState(padsData)
const handleClick=(id)=>{
   /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */
        setPads(prevPad=>
            prevPad.map((pad)=>{
                if(pad.id===id){
                    return {...pad,on:!pad.on}
                }
                return pad
            })
        
            
        )

}
  
    const padsList=pads.map((pad)=>{return (
    <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} handleClick={handleClick}></Pad>)
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
