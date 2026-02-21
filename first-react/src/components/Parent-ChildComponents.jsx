import { createRoot } from "react-dom/client"
import { Fragment } from "react"

const root = createRoot(document.getElementById("root"))
function Header(){
    return (
        <header className="header">
            <img src="src/assets/react-logo.jpg"  className="react-logo" alt="React logo" />
             <nav>
               <ul className="nav-list">
                <li className="nav-list-item">Pricing</li>
                <li className="nav-list-item">About</li>
                <li className="nav-list-item">Contact</li>
                </ul> 
            </nav>
        </header>
    ) 
}
function Footer(){
    return  <small>© 2024 Ziroll development. All rights reserved.</small>
}
function MainContent(){
    return (
        <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
    )
}
export default function Page() {
    return (
        <Fragment>
            <Header /> 
            <MainContent></MainContent>
            <Footer />
        </Fragment>
    )
}


