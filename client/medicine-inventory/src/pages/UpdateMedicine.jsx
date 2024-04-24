import React, { useEffect, useState } from "react";
import { Box, Heading, VStack, Flex } from "@chakra-ui/react";
import IngredientsListWithId from "../components/IngredientsListWithId";
import AddMedicineForm from "../components/AddMedicineForm";
import GoHomeButton from "../components/GoHomeButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RiMedicineBottleLine } from "react-icons/ri";

const UpdateMedicine = () => {
  const { medicineId } = useParams();
  const [medicine, setMedicine] = useState(null);

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

    fetchMedicine();
  }, [medicineId]);
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <Heading as='h2' size='lg' mb={4} color='teal.500'>
        <RiMedicineBottleLine /> Update Medicine
      </Heading>
      <Flex>
        <Box flex={1} mr={4}>
          <IngredientsListWithId />
        </Box>
        <Box flex={1}>
          <VStack spacing={4}>
            <AddMedicineForm medicine={medicine} />
            <GoHomeButton />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default UpdateMedicine;
