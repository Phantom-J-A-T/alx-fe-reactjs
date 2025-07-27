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
}));

export default useRecipeStore;