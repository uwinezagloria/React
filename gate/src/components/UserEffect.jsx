import { useState ,useEffect} from "react"

export  const UseEffect=()=>{
     const [name,setName]=useState("")
    const [count,setCount]=useState(0)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=>res.json())
        .then(data=>setName(data[count].email))
    },[count])
   
    return (<div>
        <h1>Hello  {name}  </h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>counter</button>
    </div>)
}