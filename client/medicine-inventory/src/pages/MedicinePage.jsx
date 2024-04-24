import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Box, Heading, List, ListItem, Button } from "@chakra-ui/react";
import GoHomeButton from "../components/GoHomeButton";

const MedicineDetails = () => {
  const { medicineId } = useParams();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState(null);
  const [maxQuantity, setMaxQuantity] = useState(null);

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/medicines/${medicineId}`
        );
        setMedicine(response.data);
      } catch (error) {
        console.error("Error fetching medicine:", error);
      }
    };

    const fetchMaxQuantity = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/medicines/${medicineId}/calculate`
        );
        setMaxQuantity(response.data.maxQuantity);
      } catch (error) {
        console.error("Error fetching max quantity:", error);
      }
    };

    fetchMedicine();
    fetchMaxQuantity();
  }, [medicineId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/medicines/${medicineId}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  if (!medicine) {
    return <div>Loading...</div>;
  }

  return (
    <Box p='4' bg='gray.100' borderRadius='md'>
      <Heading as='h2' size='lg' mb='4' color='teal.500'>
        {medicine.name}
      </Heading>
      <Box>
        <Heading as='h3' size='md' mb='2'>
          Ingredients:
        </Heading>
        <List>
          {medicine.ingredientsRequired.map((ingredient) => (
            <ListItem key={ingredient._id}>
              {ingredient.ingredientId.name} - {ingredient.amount}
            </ListItem>
          ))}
        </List>
        {maxQuantity != null && (
          <Box mt='2'>Producible Quantity: {maxQuantity}</Box>
        )}
        <Link to={`/medicines/update/${medicine._id}`}>
          <Button colorScheme='teal' mt='2'>
            Update Medicine
          </Button>
        </Link>
        <Button colorScheme='red' mt='2' onClick={handleDelete}>
          Delete Medicine
        </Button>
      </Box>
      <GoHomeButton />
    </Box>
  );
};

export default MedicineDetails;
