import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Heading,
  List,
  ListItem,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

const MedicinesList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/medicines");
        setMedicines(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMedicines();
  }, []);

  return (
    <Box p='4' bg='gray.100' borderRadius='md'>
      <Heading as='h2' size='lg' mb='4' color='teal.500'>
        Medicines
      </Heading>
      <List>
        {medicines.map((medicine) => (
          <ListItem
            key={medicine._id}
            mb='2'
            p='2'
            bg='white'
            borderRadius='md'
            boxShadow='md'
          >
            <ChakraLink
              as={Link}
              to={`/medicines/${medicine._id}`}
              textDecoration='none'
            >
              {medicine.name}
            </ChakraLink>
            <Text color='gray.500' fontSize='sm'>
              {medicine.description}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MedicinesList;
