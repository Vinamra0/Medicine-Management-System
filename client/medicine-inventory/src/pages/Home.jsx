// Home.jsx
import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import MedicinesList from "../components/MedicinesList";
import AddMedicineButton from "../components/AddMedicineButton";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

function Home() {
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <MedicinesList />
      <AddMedicineButton />
      <Flex justify='flex-end'>
        <Link to='/stock'>
          <Button colorScheme='teal' mt={4}>
            Show Stock <RiArrowRightSLine />
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Home;
