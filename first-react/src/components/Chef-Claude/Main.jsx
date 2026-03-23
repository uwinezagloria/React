
import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
export default function Main(props){
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
   
    /**
     * Challenge:
     * 1. Create a boolean state that, for now, will represent whether
     *    we've gotten a recipe back from the "chef". Default to `false`.
     *    Can call it `recipeShown`.
     * 2. Grab the markup in recipeCode.md and paste it below. This will
     *    be a placeholder for the content that will come back from the 
     *    chef once we set up that feature.
     * 3. When the user clicks the "Get a recipe" button, flip the
     *    `recipeShown` state to true.
     * 4. Only display the recipe code content if `recipeShown` is true.
     */
    const[recipeShow,setRecipeShow]=React.useState(false)
    const handleRecipeShow=()=>{
        setRecipeShow(true)
    }
       

    
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
 
/*
     * Challenge:
     * Only display the div.get-recipe-container if the ingredients list
     * has more than 3 items in it. (Fewer than that and it might not
     * give great results from the chef 🤖👩‍🍳)
     */ 

 
  /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */
    const [ingredients,setIngredients]=React.useState([])
 const ingredientsList=ingredients.map((ingredient)=>{
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })
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
            {ingredientsList.length>0 &&(<IngredientsList ingredientsList={ingredientsList} handleRecipeShow={handleRecipeShow}></IngredientsList>
           )}
           {recipeShow && (<ClaudeRecipe></ClaudeRecipe>)}
        
            
        </main>
    )
}

