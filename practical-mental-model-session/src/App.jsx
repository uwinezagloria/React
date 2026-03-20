import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  const requirements = [{
title:"numberOfChar",
name:"At least 8 characters"

  },
  {
title:"upperchar",
name:"Contains uppercase character",

  },
  {
title:"lowerchar",
name:"Contains lowercase character",

  },
  {
title:"digit",
name:"Contains a digit",

  },
  {
title:"specialChar",
name:"Contains a special character"

  }
    
  ];
  const requirementslist=requirements.map((requirement)=>{
    return (
        <li className="text-gray-400 flex gap-4">
            <input type="radio" name={requirement.title} />
            <span>{requirement.name}</span>
        </li>
        
    )
  })
  return (
    <div className="flex  items-center  justify-center my-20 border-2 border-gray-400 mx-100 py-5 ">
      <form>
        
        <h1 className="text-4xl font-bold ">Create Password</h1>
        <p className="text-xl text-gray-500 ">Enter a secure Password</p>
        <div className=" p-3  border-gray-400 border-2 flex justify-between " >
          <input 
          className=" text-gray-400" 
            type="text"
            name="password"
            placeholder="Enter your password"
          />
          <i className="fas fa-eye-slash text-gray-400"></i>
          {/* <i className="fas fa-eye"></i>*/}
        </div>
        <h2 className="text-xl font-bold">Password Requirements</h2>
        <ul>
          {requirementslist}
        </ul>
        <button type="submit" className="bg-gray-500 py-3 px-10 text-white">Submit</button>
      </form>
    </div>
  );
}

export default App;
