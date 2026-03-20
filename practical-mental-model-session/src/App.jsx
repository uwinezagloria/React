import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  const requirements = [{
title:"numberOfChar",
name:"At least 8 characters",
isChecked:false

  },
  {
title:"upperchar",
name:"Contains uppercase character",
isChecked:false

  },
  {
title:"lowerchar",
name:"Contains lowercase character",
isChecked:false

  },
  {
title:"digit",
name:"Contains a digit",
isChecked:false

  },
  {
title:"specialChar",
name:"Contains a special character",
isChecked:false

  }
    
  ];
   const upperLetter=[ "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 
  
  const lowerLetter=upperLetter.map((letters)=>letters.toLowerCase())
  const [requirementData,setRequirement]=useState(requirements)
  const digits=["0","1","2","3","4","5","6","7","8","9"]
   const [password,setPassword]=useState("")
   
  const getPassowrd=(event)=>{
    const value=event.target.value
    setPassword(value)
    togggleRequirement(value)
  }
  //toggling requirements
  const togggleRequirement=(value)=>{
    for(let elem of value){
      if(value.length>=8){
      setRequirement(prev=>
         prev.map(req=>{
          if(req.title==="numberOfChar"){
            return{...req,isChecked:true} 
          }
          return req
        })
      )
    }

  if(upperLetter.includes(elem)){
    //updating requirement for uppercase check
    setRequirement((prev)=>
   prev.map((req)=>{
        if(req.title==="upperchar"){
          return {...req,isChecked:true}
        }
        return req
      })
    )
  }
  //LOWER CASE
else if(lowerLetter.includes(elem)){
  setRequirement(prev=>
    prev.map(req=>{
      if(req.title==="lowerchar"){
 return {...req,isChecked:true}
      }
      return req
    })
    )}
    // digits
    else if(digits.includes(elem)){
      setRequirement(prev=>
        prev.map(req=>{
          if(req.title==="digit"){
            return {...req,isChecked:true}
          }
          return req
        })
      )
    }
      // otherwise
      else{
        setRequirement(prev=>
          prev.map(req=>{
            if(req.title==="specialChar"){
              return {...req,isChecked:true}
            }
            return req
          })
        )
      }
}

  }
  const requirementslist=requirementData.map((requirement)=>{
    return (
        <li className="text-gray-400 flex gap-4" key={requirement.title}>
            <input type="radio" checked={requirement.isChecked}  readOnly />
            <span>{requirement.name}</span>
        </li>
        
    )
  })
 const [showPassword,setShowPassword]=useState(true)
  function toggleShowPassword(){
setShowPassword(prev=>!prev)
  }
  const handleSubmit=()=>{
    setPassword("")
    setRequirement(requirements.map(req => ({ ...req, isChecked: false })));

  }
  return (
    <div className="flex  items-center   justify-center my-20 border-2 border-gray-400 rounded-2xl mx-50  ">
      <div className="space-y-2 py-12" >
        
        <h1 className="text-4xl font-bold  ">Create Password</h1>
        <p className="text-xl text-gray-500  ">Enter a secure Password</p>
        <div className=" p-3  border-gray-400 border-2 flex justify-between  rounded-3xl " >
          <input 
          className=" text-gray-400  focus:outline-none" 
            type={showPassword?"text":"password"}
            name="password"
            value={password}
            onChange={getPassowrd}
            placeholder="Enter your password"
          />
          {showPassword?<i onClick={toggleShowPassword} className="fas fa-eye  text-gray-400"></i>:<i onClick={toggleShowPassword} className="fas fa-eye-slash text-gray-400"></i>}
          
          {/* */}
        </div>
        <h2 className="text-xl font-bold">Password Requirements</h2>
        <ul  className="space-y-2">
          {requirementslist}
        </ul>
        <button  onClick={handleSubmit}type="submit" className="bg-gray-500 py-3 px-30 text-white  rounded-4xl">Submit</button>
      </div>
    </div>
  );
}

export default App;
