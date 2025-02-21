import { useEffect, useState } from "react";
import Link from "next/link";

export default function Appetizers() {
  const [appetizers, setAppetizers] = useState([]);

  useEffect(() => {
    fetch("/api/recipes/appetizers")
      .then((res) => res.json())
      .then((data) => setAppetizers(data));
  }, []);

  return (
    <div>
      <h1>Appetizer Recipes</h1>
      {appetizers.length > 0 ? (
        appetizers.map((recipe) => (
          <div key={recipe._id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <Link href={`/recipe/${recipe._id}`}>
              <button>View Recipe</button>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
