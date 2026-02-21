/* 
for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc. */
export default function NavBar(){
    return (
        <header className="heading">
            <nav className="navigation">
<img src="/src/assets/react-logo.jpg" alt="react logo " className="react-logo" />
<p className="paragraph">ReactFacts</p>
            </nav> 
        </header>
        
    )
}