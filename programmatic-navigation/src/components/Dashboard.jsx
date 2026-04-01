import {useNavigate} from "react-router-dom"
const Dashboard=()=>{
    const navigate=useNavigate()
    function handleClick(){
        navigate("/")
    }

    return (
        <div>
            <h1>Welcome to  user dashbaord </h1>
        <button onClick={handleClick}>Go back </button>
         </div>
    )
       
        
}
export default Dashboard