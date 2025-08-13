import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      image,
      title,
      ingredients: ingredients.split("\n"), // split into array by line
      steps: steps.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Reset form
    setImage("")
    setTitle("");
    setIngredients("");
    setSteps("");

    // Later, you can POST to API here
    // fetch("/api/recipes", { method: "POST", body: JSON.stringify(newRecipe) })
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 mt-6">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/*Image Upload Placeholder*/}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Upload Recipe Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder= "Upload the Image of your Recipe here"
            required
            />
          </div>
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="List each ingredient on a new line"
            rows={5}
            required
          />
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-semibold mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Write each step on a new line"
            rows={5}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
