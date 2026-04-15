import {useState,useEffect} from "react"
const useFetch=(url)=>{
    const[data,setdata]=useState(null)
    const[error,setError]=useState(null)
    const [isloading,setIsLoading]=useState(false)
    useEffect(()=>{
         const fetchData=async()=>{
        setIsLoading(true)
        try{
const result=await fetch(url)
        const data=await result.text()
        setdata(data.data)
        setIsLoading(false)
        }
        catch(error){
setError(error)
setIsLoading(false)
        }
        
    }
    fetchData()
    }
       ,[url])
       return {data,error,isloading}
}
export default useFetch