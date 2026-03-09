
import React from "react"
export default function Main(){
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients,setIngredients]=React.useState([])
       const ingredientsList=ingredients.map((ingredient)=>{
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    
function handleSubmit(event){
    event.preventDefault();
    const formdata=new FormData(event.currentTarget);
    const newIngredient=formdata.get("ingredient")
     setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
}
 
    return (
        <main className="chef-claude-main">
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
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

