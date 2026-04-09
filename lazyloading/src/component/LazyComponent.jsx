  import { useState } from "react"
import {useEffect} from "react"
  const LazyComponent=()=>{
    const [text,setText]=useState("")
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setText("I am a lazy component")
        },1000)
          return () => clearTimeout(timer);
  }, []);
    
    return <h1>{text}</h1>
}
export default LazyComponent