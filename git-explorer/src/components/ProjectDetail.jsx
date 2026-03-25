import { useParams } from "react-router-dom"
const ProjectDetail=()=>{
    const {name}=useParams()
    return(
        <h1> Project name is {name} </h1>
    )

}
export default ProjectDetail