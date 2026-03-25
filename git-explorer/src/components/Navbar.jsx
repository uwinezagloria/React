import { Outlet,Link } from "react-router-dom"
const Navbar=()=>{
    return (
        <>
        <nav>
            <Link to="/gitexplorer"> git explorer</Link>
            <div>
                <Link to="SignUp">signUp</Link> 
                <Link to="Login">Login</Link> 
                </div>
                
        </nav>
        <Outlet />
        </>
   )
}
export default Navbar