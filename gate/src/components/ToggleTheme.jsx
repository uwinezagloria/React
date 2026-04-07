/* 
create an app with a  light/dark theme toggle :
//store te them in context.
A button toggles the theme between light and dark
the Theme applies globally (e.g : baclground and text Color change)
*/
import { useContext } from "react"
import { ToggleContext } from "./Context"
export const ToggleTheme=()=>{
   const {background,setbackground,textcolor,setTextColor}= useContext(ToggleContext)
    return (
    <div>
<p className={`bg-${background} text-${textcolor}`}>hello world</p>
<button onClick={()=>{
     setbackground(prev=>prev==="white"?"black":"white")
    setTextColor(prevColor=>prevColor==="white"?"black":"white")
}
 } className={`bg-${background} text-${textcolor} border-2 `}>Toggle theme</button>
    </div>)
}