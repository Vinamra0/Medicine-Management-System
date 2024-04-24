// AddIngredientForm.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const AddIngredientForm = ({ ingredient }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      try {
        const response = await axios.patch(
          `http://localhost:3000/api/ingredients/${ingredient._id}`,
          {
            name,
            type,
            quantity: parseInt(quantity),
          }
        );
        navigate("/stock");
      } catch (error) {
        console.error("Error adding ingredient:", error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/ingredients",
          {
            name,
            type,
            quantity: parseInt(quantity),
          }
        );
        navigate("/stock");
      } catch (error) {
        console.error("Error adding ingredient:", error);
      }
    }
  };
  useEffect(() => {
    if (ingredient != null) {
      setName(ingredient.name);
      setQuantity(ingredient.quantity);
      setType(ingredient.type);
      setIsUpdate(true);
    }
  }, [ingredient]);

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Type:</FormLabel>
          <Input
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Quantity:</FormLabel>
          <Input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </FormControl>
        <Button type='submit'>
          {isUpdate ? "Update Ingredient" : "Add Ingredient"}
        </Button>
      </form>
    </Box>
  );
};

export default AddIngredientForm;
