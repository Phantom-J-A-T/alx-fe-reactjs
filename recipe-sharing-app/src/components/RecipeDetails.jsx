import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from '../components/DeleteRecipeButton';

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button onClick={() => navigate(`/edit/${recipe.id}`)}>Edit</button>
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
}

export default RecipeDetails;