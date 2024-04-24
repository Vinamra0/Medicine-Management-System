import React, { useEffect, useState } from "react";
import GoHomeButton from "../components/GoHomeButton";
import AddIngredientForm from "../components/AddIngredientForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateIngredient = () => {
  const { ingredientId } = useParams();
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/ingredients/${ingredientId}`
        );
        setIngredient(response.data);
      } catch (error) {
        console.error("Error fetching Ingredient:", error);
      }
    };

    fetchIngredient();
  }, [ingredientId]);
  return (
    <div>
      <AddIngredientForm ingredient={ingredient} />
      <GoHomeButton />
    </div>
  );
};

export default UpdateIngredient;
