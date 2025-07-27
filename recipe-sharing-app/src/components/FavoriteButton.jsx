import { useRecipeStore } from './recipeStore';

function FavoriteButton({ id }) {
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);
    const favorites = useRecipeStore((state) => state.favorites);
  
    const isFavorite = favorites.includes(id);
  
    return (
      <button onClick={() => (isFavorite ? removeFavorite(id) : addFavorite(id))}>
        {isFavorite ? 'Unfavorite' : 'Add to Favorites'}
      </button>
    );
  }

export default FavoriteButton;