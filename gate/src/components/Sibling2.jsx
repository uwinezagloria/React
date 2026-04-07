import { useContext } from "react"
import { PassingContext } from "./Context"
export  const SiblingTwo=()=>{
    const {inputData}=useContext(PassingContext)
    return (
        <div>
            <h1>Chat 2</h1>
            <h2>Data from chat 1 : {inputData}</h2>
        </div>
    )
}