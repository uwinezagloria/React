import {useRef, useState} from "react"
 export const FocusInput=()=>{
    let inputRef=useRef(null)
    const[number,setNumber]=useState(0)
    let refNumber=useRef(number)
    function focus(){
       
inputRef.current.focus()
refNumber.current=number
setNumber(prevNumber=>prevNumber+1)
    }
    return (
        <div>  
            <h1>current Value{number}</h1>
             <input type="text" placeholder="Ex..." ref={inputRef} />
             <h1>Previous Value{refNumber.current}</h1>
        <button onClick={focus}>Change me</button></div>
     
    )
}
;