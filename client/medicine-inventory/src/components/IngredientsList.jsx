import React, { useEffect, useState } from "react";
import axios from "axios";

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/ingredients"
        );
        setIngredients(response.data);
      } catch (error) {
        setError(error.response?.data?.error || "Error fetching ingredients.");
      }
    };

    fetchIngredients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/ingredients/${id}`);
      setIngredients(ingredients.filter((ingredient) => ingredient._id !== id));
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Error deleting ingredient.";
      window.alert(errorMessage);
    }
  };

  return (
    <div>
      <h2>Ingredients in Stock</h2>
      {error && <div>Error: {error}</div>}
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            {ingredient.name} - {ingredient.quantity}
            <button onClick={() => handleDelete(ingredient._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
