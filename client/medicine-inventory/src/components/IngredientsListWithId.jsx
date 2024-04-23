import React, { useEffect, useState } from "react";
import axios from "axios";

const IngredientsListWithId = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/ingredients"
        );
        setIngredients(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <div>
      <h2>Ingredients in Stock</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <div key={ingredient._id}>
            <h3>Name - {ingredient.name}</h3>
            <li>Id - {ingredient._id}</li>
            <li>Quantity - {ingredient.quantity}</li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsListWithId;
