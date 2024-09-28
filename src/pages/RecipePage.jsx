import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/Handmade-Cravings/Appetizers/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching the recipe:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <TopNavbar />
      <div className="container mt-4">
        {recipe ? (
          <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image_url} alt={recipe.name} />
            <h3>Ingredients:</h3>
            <div>
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>{ingredient}</div>
              ))}
            </div>
            <h3>Instructions:</h3>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li className="instruction-list" key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        ) : (
          <p>Recipe not found.</p>
        )}
      </div>
    </>
  );
}

export default RecipePage;
