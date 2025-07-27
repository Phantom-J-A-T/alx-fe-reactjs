import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No matching recipes found.</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
