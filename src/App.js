import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
import RecipeDetails from './RecipeDetails';

function App() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const fetchRecipes = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=9dca53d3fd2e4ffc8dd6aa14303de23e`);
            const data = await response.json();
            setRecipes(data);
            setSelectedRecipe(null); // Reset selected recipe on new search
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRecipeSelect = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div>
            <SearchBar query={query} onInputChange={handleInputChange} onSearch={fetchRecipes} />
            {isLoading ? (
                <p>Loading recipes...</p>
            ) : selectedRecipe ? (
                <RecipeDetails recipe={selectedRecipe} />
            ) : (
                <RecipesList recipes={recipes} onRecipeSelect={handleRecipeSelect} />
            )}
        </div>
    );
}

export default App;
