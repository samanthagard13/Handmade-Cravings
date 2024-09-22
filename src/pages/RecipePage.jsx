import React from "react";
import { useParams } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";


function RecipePage() {
  const { id } = useParams();

  const recipes = [
    { id: 1, name: "Bruschetta", description: "A simple tomato and basil starter." },
    { id: 2, name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese and herbs." },
    { id: 3, name: "Guacamole", description: "A creamy avocado dip." },
    { id: 4, name: "Spring Rolls", description: "Fresh vegetables wrapped in rice paper." },
    { id: 5, name: "Nachos", description: "Crispy tortilla chips with cheese and salsa." }
  ];

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  return (
    <>
      <TopNavbar />
      <div className="container mt-4">
        {recipe ? (
          <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
          </div>
        ) : (
          <p>Recipe not found.</p>
        )}
      </div>
    </>
  );
}

export default RecipePage;
