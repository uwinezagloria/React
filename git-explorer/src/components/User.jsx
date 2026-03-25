import {useParams} from "react-router-dom"
const User=()=>{
    const names=useParams()
return (<h1>My name is {names.firstname} {names.lastname} </h1>)
}
export default User