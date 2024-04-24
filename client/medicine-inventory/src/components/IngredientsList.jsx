// IngredientsList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  List,
  ListItem,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";

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
      <Heading as='h2' size='lg' mb={4}>
        Ingredients in Stock
      </Heading>
      {error && <div>Error: {error}</div>}
      <List spacing={3}>
        {ingredients.map((ingredient) => (
          <ListItem
            key={ingredient._id}
            bg='gray.100'
            p={4}
            borderRadius='md'
            boxShadow='md'
          >
            <Box>
              <Heading as='h3' size='md' mb={2}>
                {ingredient.name}
              </Heading>
              <Text>Type: {ingredient.type}</Text>
              <Text>Quantity: {ingredient.quantity}</Text>
            </Box>
            <Box mt={4}>
              <Link to={`/ingredients/update/${ingredient._id}`}>
                <Button colorScheme='teal' leftIcon={<RiEdit2Line />} mr={2}>
                  Update
                </Button>
              </Link>

              <Button
                colorScheme='red'
                onClick={() => handleDelete(ingredient._id)}
                leftIcon={<RiDeleteBinLine />}
              >
                Delete
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <Divider my={4} />
    </Box>
  );
};

export default IngredientsList;
