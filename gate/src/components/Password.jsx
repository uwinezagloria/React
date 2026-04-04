/*1. Create a login form with email and password fields:

 Make it a controlled component.
Show an error message if the password is less than 6 characters.
Add a button that toggles between showing and hiding the password. */
import {useState} from "react"
const Password=()=>{
    const [password,setPassword]=useState("")
    const[email,setEmail]=useState("") 
    const [isShow,setIsShow]=useState(false)
    function getdata(event){
        event.preventDefault()
    const {name,value}=event.currentTarget
    name==="password"?setPassword(value):setEmail(value)
    
 }
 const toggleShow=()=>{
setIsShow(prev=>!prev)

 }
return (
    
    <div>
        <form >
            <label htmlFor="email" >Email:</label>
             <input type="email" name="email"  value={email} onChange={getdata}/>
             <br></br>
        <label htmlFor="password" >Password :</label>
        <input type={isShow?"text":"password"} name="password" value={password} onChange={getdata}  />
        
        <br></br>
        
        </form>
        <button onClick={toggleShow}>show</button>
        <button onClick={()=>{
            if(password.length<6){
                alert("Password must  contain at least 6 characters ")
setPassword("")
            }
            else{
                alert("good password")
                setPassword("")
            setEmail("")
            }
        }}>Login</button>
       
    </div>
)
}
export default Password