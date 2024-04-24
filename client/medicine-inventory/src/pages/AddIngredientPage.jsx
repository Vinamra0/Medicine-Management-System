// AddIngredientPage.jsx
import React from "react";
import { Box } from "@chakra-ui/react";
import GoHomeButton from "../components/GoHomeButton";
import AddIngredientForm from "../components/AddIngredientForm";

const AddIngredientPage = () => {
  return (
    <Box p='4' bg='gray.100' borderRadius='md'>
      <AddIngredientForm />
      <GoHomeButton />
    </Box>
  );
};

export default AddIngredientPage;
