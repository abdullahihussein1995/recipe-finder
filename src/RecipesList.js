function RecipesList({ recipes, onRecipeSelect }) {
    return (
        <div className="recipes-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className="recipe-card" onClick={() => onRecipeSelect(recipe)}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title} style={{ width: '100px' }} />
                </div>
            ))}
        </div>
    );
}

export default RecipesList;
