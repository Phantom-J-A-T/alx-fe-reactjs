import {create} from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [
    // Sample
    { id: '1', title: 'Jollof Rice', description: 'Delicious Nigerian rice.' },
  ],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
    searchTerm: '',
    filteredRecipes: [],
    
    setSearchTerm: (term) => set({ searchTerm: term }),
  
    filterRecipes: () =>
      set((state) => ({
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      })),
      favorites: [],
      addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
      removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
      })),
      recommendations: [],
      generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
      }),
}));

export default useRecipeStore;