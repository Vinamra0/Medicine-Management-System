import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Link, List, ListItem, Heading } from "@chakra-ui/react";

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/ingredients"
        );
        setIngredients(response.data);
      } catch (error) {
        setError(error.response?.data?.error || "Error fetching ingredients.");
      }
    };

    fetchIngredients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/ingredients/${id}`);
      setIngredients(ingredients.filter((ingredient) => ingredient._id !== id));
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Error deleting ingredient.";
      window.alert(errorMessage);
    }
  };

  return (
    <Box>
      <Heading as='h2' size='lg' mb='4'>
        Ingredients in Stock
      </Heading>
      {error && <div>Error: {error}</div>}
      <List spacing={3}>
        {ingredients.map((ingredient) => (
          <ListItem
            key={ingredient._id}
            bg='gray.100'
            p='4'
            borderRadius='md'
            boxShadow='md'
          >
            <Box>
              <Heading as='h3' size='md' mb='2'>
                {ingredient.name}
              </Heading>
              <p>Type: {ingredient.type}</p>
              <p>Quantity: {ingredient.quantity}</p>
            </Box>
            <Box mt='2'>
              <Button
                as={Link}
                to={`/ingredients/update/${ingredient._id}`}
                colorScheme='teal'
                mr='2'
              >
                Update
              </Button>
              <Button
                colorScheme='red'
                onClick={() => handleDelete(ingredient._id)}
              >
                Delete
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default IngredientsList;
