import React from "react";
import "./RecipeView.css";
function RecipeView({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td className="list-container">
        <div className="list-item">
          <div id="name">
            <p>{`${recipe.name}`}</p>
          </div>
        </div>
        <div className="list-item">
          <div id="cuisine">
            <p>{recipe.cuisine}</p>
          </div>
        </div>
        <div className="list-item">
          <div id="img">
            <img src={recipe.photo} alt="img" />
          </div>
        </div>
        <div className="list-item">
          <div id="ingredients">
            <p>{recipe.ingredients}</p>
          </div>
        </div>
        <div className="list-item" id="preparation">
          <p>{recipe.preparation}</p>
        </div>
        <div className="list-item" id="btn">
          <button name="delete" onClick={deleteRecipe}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default RecipeView;
