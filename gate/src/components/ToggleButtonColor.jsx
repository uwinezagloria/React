import React, { useState } from 'react';

function ToggleButtons() {
// these are initialColors: ['gray','gray','gray','gray','gray']
 const initialColors = Array(5).fill('gray');  
 const [buttonColors, setButtonColors] = useState(initialColors);
 
 return (
   <div>
     {initialColors.map((color, index) => (
       <button
         key={index}
         id={index}
         style={{ backgroundColor: buttonColors[index], padding: '10px', margin: '5px', border: 'none' }}
         onClick={(event) =>setButtonColors((prevColors)=>{
let newColors=[...prevColors]
newColors[event.target.id]=newColors[event.target.id]==="gray"?"blue":"gray"
return newColors
         })
         }  
       >
         Button {index + 1}
       </button>
     ))}
   </div>
	);
}

export default ToggleButtons;

