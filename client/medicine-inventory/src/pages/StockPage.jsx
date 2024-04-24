// StockPage.jsx
import React from "react";
import { Box, Button, Divider } from "@chakra-ui/react";
import IngredientsList from "../components/IngredientsList";
import GoHomeButton from "../components/GoHomeButton";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";

const StockPage = () => {
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <IngredientsList />
      <Divider my={4} />
      <Link to={`/ingredients/add`}>
        <Button colorScheme='teal' leftIcon={<RiAddLine />} w='100%'>
          Add Stock
        </Button>
      </Link>
      <GoHomeButton />
    </Box>
  );
};

export default StockPage;
