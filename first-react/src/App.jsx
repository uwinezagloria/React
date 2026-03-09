/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

import data from "./components/TravelJournalProject/data.js"
import Header  from "./components/Chef-Claude/Header.jsx";
import Main from "./components/Chef-Claude/Main.jsx"
import Page from "./components/Parent-ChildComponents.jsx";
import NavBar from "./components/ReactFactsProject/navbar.jsx";
//import Main from "./components/ReactFactsProject/mainComponent.jsx";
 //import Header from "./components/TravelJournalProject/Header.jsx";
import Entry from "./components/TravelJournalProject/Entry.jsx";
function App() {
  /*const dataArray=data.map((item)=>{
  return (
    <Entry 
    key={item.id}
    {...item}
*/
    /*
    key={item.id}
     img={item.img} 
     country={item.country} 
     title={item.title}
      googleMapsLink={item.googleMapsLink}
      dates={item.dates}
      text={item.text} */

    
    {/* />
    )
})*/} 
  return (
    <>
      {/*<Page></Page>*/}
      {/* react fact project
     <NavBar />
     <Main /> */}
{/* travel journal project compoents
<Header />
      <main>{dataArray}</main> */}
      <Header />
      <Main />
    </>
  );
}
export default App;
