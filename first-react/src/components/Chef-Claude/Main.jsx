
import React from "react"
export default function Main(){
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients,setIngredients]=React.useState([])
       const ingredientsList=ingredients.map((ingredient)=>{
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    
 /* using form submisson
  function handleSubmit(event){
    event.preventDefault();
    const formdata=new FormData(event.currentTarget);
    const newIngredient=formdata.get("ingredient")
     setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
} */
/**
     * Challenge: use form action instead of onSubmit to
     * handle the data from the form
     */
 function getInputs(formData){
const ingredient=formData.get("ingredient")
setIngredients(prevIngredients=>[...prevIngredients,ingredient])
 }
    return (
        <main className="chef-claude-main">
            {/*<form className="add-ingredient-form" onSubmit={handleSubmit}> */}
            <form action={getInputs} className="add-ingredient-form">
                 <input
            type="text"
            placeholder="e.g.oregano"
            aria-label="Add ingredient"
            name="ingredient" 
           
             />
            <button>Add Ingredient</button>
            
            </form>
            <ul>{ingredientsList}</ul>
           
        </main>
    )
}

