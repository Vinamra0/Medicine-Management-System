// IngredientsListWithId.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

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
    <Box>
      <Heading as='h3' size='md' mb='4'>
        Ingredients in Stock
      </Heading>
      <List>
        {ingredients.map((ingredient) => (
          <Box
            key={ingredient._id}
            bg='gray.200'
            p='2'
            borderRadius='md'
            mb='2'
          >
            <Heading as='h4' size='sm'>
              Name - {ingredient.name}
            </Heading>
            <ListItem>Id - {ingredient._id}</ListItem>
            <ListItem>Quantity - {ingredient.quantity}</ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default IngredientsListWithId;
