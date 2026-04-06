/* We have two lists of names, and we want to transfer every name in the first list to the second list and every two seconds we want to send one name, 
what would you add or change in these codes to make that happen?*/
import { useState,useEffect } from "react";

const NameTransferLists = () => {
  const [secondList, setSecondList] = useState([]);
  const [firstList,setFirstList]=useState([
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Diana Prince",
    "Ethan Hunt",
  ])

  useEffect(()=>{
    let interval=setInterval(()=>{
      if(firstList.length===0){
        clearInterval(interval)
      }
      let moveElement=firstList[0]
      setSecondList(prevList=>[...prevList,moveElement])
      setFirstList(prevList=>prevList.slice(1))
    },2000)
    return ()=>clearInterval(interval)
  },[firstList])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-2 gap-8">
        {/* First List */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">First List</h2>
          <ul className="space-y-2">
            {firstList.map((name, index) => (
              <li key={`first-${name}-${index}`} className="text-blue-700">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Second List */}
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-800 mb-4">Second List</h2>
          <ul className="space-y-2">
            {secondList.map((name, index) => (
              <li key={`second-${name}-${index}`} className="text-green-700">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NameTransferLists;