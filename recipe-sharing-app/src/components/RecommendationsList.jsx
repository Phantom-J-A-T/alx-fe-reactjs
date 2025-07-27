import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const getRecommendations = useRecipeStore((state) => state.getRecommendations);
  const recommendations = getRecommendations();

  if (recommendations.length === 0) {
    return <p>No recommendations available yet.</p>;
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#009688' }}>
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

export default RecommendationsList;
