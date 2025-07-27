import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useRecipeStore from './recipeStore';

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore((state) => ({
    recipes: state.recipes,
    updateRecipe: state.updateRecipe,
  }));

  const recipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(id, { title, description });
    navigate(`/recipe/${id}`);
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default EditRecipeForm;