import React from "react";
import { Box, Heading, VStack, Flex } from "@chakra-ui/react";
import IngredientsListWithId from "../components/IngredientsListWithId";
import AddMedicineForm from "../components/AddMedicineForm";
import GoHomeButton from "../components/GoHomeButton";
import { RiMedicineBottleLine } from "react-icons/ri";

const AddMedicine = () => {
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <Heading as='h2' size='lg' mb={4} color='teal.500'>
        <RiMedicineBottleLine /> Add Medicine
      </Heading>
      <Flex>
        <Box flex={1} overflowY='auto' mr={4}>
          <IngredientsListWithId />
        </Box>
        <Box flex={1}>
          <VStack spacing={4}>
            <AddMedicineForm />
            <GoHomeButton />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddMedicine;
