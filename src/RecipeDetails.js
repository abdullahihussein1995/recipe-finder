import React from "react";

function RecipeDetails({ recipe }) {
    return (
        <div className="recipe-details">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
            <p><strong>Likes:</strong> {recipe.likes}</p>
            <div>
                <h3>Ingredients you have:</h3>
                <ul>
                    {recipe.usedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.original}
                            <img src={ingredient.image} alt={ingredient.name} style={{ width: '50px' }} />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Ingredients you're missing:</h3>
                <ul>
                    {recipe.missedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.original}
                            <img src={ingredient.image} alt={ingredient.name} style={{ width: '50px' }} />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Unused ingredients:</h3>
                <ul>
                    {recipe.unusedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.original}
                            <img src={ingredient.image} alt={ingredient.name} style={{ width: '50px' }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RecipeDetails;
