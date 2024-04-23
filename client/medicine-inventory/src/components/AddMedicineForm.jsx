import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMedicineForm = () => {
  const [medicineName, setMedicineName] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [ingredientId, setIngredientId] = useState("");
  const navigate = useNavigate();

  const handleAddIngredient = () => {
    setSelectedIngredients([
      ...selectedIngredients,
      { ingredientId: ingredientId, amount: ingredientAmount },
    ]);
    setIngredientAmount("");
    setIngredientId("");
  };

  const handleIngredientChange = (index, event) => {
    const updatedIngredients = [...selectedIngredients];
    updatedIngredients[index][event.target.name] = event.target.value;
    setSelectedIngredients(updatedIngredients);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/medicines", {
        name: medicineName,
        ingredientsRequired: selectedIngredients,
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Medicine Name:
        <input
          type='text'
          value={medicineName}
          onChange={(event) => setMedicineName(event.target.value)}
        />
      </label>
      <br />
      {selectedIngredients.map((ingredient, index) => (
        <div key={index}>
          <label>
            Ingredient ID:
            <input
              type='text'
              name='ingredientId'
              value={ingredient.ingredientId}
              onChange={(event) => handleIngredientChange(index, event)}
            />
          </label>
          <label>
            Amount:
            <input
              type='text'
              name='amount'
              value={ingredient.amount}
              onChange={(event) => handleIngredientChange(index, event)}
            />
          </label>
        </div>
      ))}
      <label>
        Ingredient ID:
        <input
          type='text'
          name='ingredientId'
          value={ingredientId}
          onChange={(event) => setIngredientId(event.target.value)}
        />
      </label>
      <label>
        Ingredient Amount:
        <input
          type='text'
          value={ingredientAmount}
          onChange={(event) => setIngredientAmount(event.target.value)}
        />
      </label>
      <button type='button' onClick={handleAddIngredient}>
        Add Ingredient
      </button>
      <br />
      <button type='submit'>Add Medicine</button>
    </form>
  );
};

export default AddMedicineForm;
