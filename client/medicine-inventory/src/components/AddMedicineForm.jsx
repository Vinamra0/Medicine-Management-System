import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

const AddMedicineForm = ({ medicine }) => {
  const [medicineName, setMedicineName] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [ingredientId, setIngredientId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  const handleAddIngredient = () => {
    setSelectedIngredients([
      ...selectedIngredients,
      { ingredientId: ingredientId, amount: ingredientAmount },
    ]);
    setIngredientAmount("");
    setIngredientId("");
  };
  const handleRemoveIngredient = (index) => {
    const updatedIngredients = selectedIngredients.filter(
      (_, i) => i !== index
    );
    setSelectedIngredients(updatedIngredients);
  };

  const handleIngredientChange = (index, event) => {
    const updatedIngredients = [...selectedIngredients];
    updatedIngredients[index][event.target.name] = event.target.value;
    setSelectedIngredients(updatedIngredients);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isUpdate) {
      try {
        const response = await axios.patch(
          `http://localhost:3000/api/medicines/${medicine._id}`,
          {
            name: medicineName,
            ingredientsRequired: selectedIngredients,
          }
        );
        navigate("/");
      } catch (error) {
        console.error("Error adding medicine:", error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/medicines",
          {
            name: medicineName,
            ingredientsRequired: selectedIngredients,
          }
        );
        navigate("/");
      } catch (error) {
        console.error("Error adding medicine:", error);
      }
    }
  };
  useEffect(() => {
    console.log(false);
    if (medicine != null) {
      console.log(true);
      setMedicineName(medicine.name);
      setSelectedIngredients(
        medicine.ingredientsRequired.map((i) => {
          return { ingredientId: i.ingredientId._id, amount: i.amount };
        })
      );
      setIsUpdate(true);
    }
  }, [medicine]);

  return (
    <Box>
      <Heading as='h3' size='md' mb='4'>
        Add Medicine Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing='4'>
          <FormControl>
            <FormLabel>Medicine Name:</FormLabel>
            <Input
              type='text'
              value={medicineName}
              onChange={(event) => setMedicineName(event.target.value)}
            />
          </FormControl>
          {selectedIngredients.map((ingredient, index) => (
            <Stack key={index} direction='row' spacing='4'>
              <FormControl>
                <FormLabel>Ingredient ID:</FormLabel>
                <Input
                  type='text'
                  name='ingredientId'
                  value={ingredient.ingredientId}
                  onChange={(event) => handleIngredientChange(index, event)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Amount:</FormLabel>
                <Input
                  type='text'
                  name='amount'
                  value={ingredient.amount}
                  onChange={(event) => handleIngredientChange(index, event)}
                />
              </FormControl>
              <Button
                type='button'
                onClick={() => handleRemoveIngredient(index)}
              >
                Remove
              </Button>
            </Stack>
          ))}
          <Stack direction='row' spacing='4'>
            <FormControl>
              <FormLabel>Ingredient ID:</FormLabel>
              <Input
                type='text'
                name='ingredientId'
                value={ingredientId}
                onChange={(event) => setIngredientId(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ingredient Amount:</FormLabel>
              <Input
                type='text'
                value={ingredientAmount}
                onChange={(event) => setIngredientAmount(event.target.value)}
              />
            </FormControl>
            <Button type='button' onClick={handleAddIngredient}>
              Add Ingredient
            </Button>
          </Stack>
          <Button type='submit'>
            {isUpdate ? "Update Medicine" : "Add Medicine"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddMedicineForm;
