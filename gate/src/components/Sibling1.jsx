import { useContext } from "react"
import { PassingContext } from "./Context"
export  const SiblingOne=()=>{
    const{inputData,setInputData}=useContext(PassingContext)
    
    return (
        
        <div>
            <h1>Chat 1</h1>
            <input  type="text"  placeholder="type mesasge to send to chat two" value={inputData} onChange={(event)=>{
                setInputData(prev=>event.target.value)
                console.log(inputData)}}/>
        </div>
    )
}