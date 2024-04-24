// StockPage.jsx
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import IngredientsList from "../components/IngredientsList";
import GoHomeButton from "../components/GoHomeButton";
import { Link } from "react-router-dom";

const StockPage = () => {
  return (
    <Box p='4' bg='gray.100' borderRadius='md'>
      <IngredientsList />
      <Link to={`/ingredients/add`}>
        <Button colorScheme='teal' mt='2'>
          Add Stock
        </Button>
      </Link>
      <GoHomeButton />
    </Box>
  );
};

export default StockPage;
