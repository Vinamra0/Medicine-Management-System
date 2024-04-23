import React, { useState } from "react";
import axios from "axios";

const AddIngredientForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/ingredients",
        {
          name,
          type,
          quantity: parseInt(quantity),
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error adding ingredient:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Type:
        <input
          type='text'
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </label>
      <br />
      <button type='submit'>Add Ingredient</button>
    </form>
  );
};

export default AddIngredientForm;
