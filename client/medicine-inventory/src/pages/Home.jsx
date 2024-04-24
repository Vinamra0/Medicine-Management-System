import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import MedicinesList from "../components/MedicinesList";
import AddMedicineButton from "../components/AddMedicineButton";

function Home() {
  return (
    <Box p='4' bg='gray.100' borderRadius='md'>
      <MedicinesList />
      <AddMedicineButton />
      <Link to={`/stock`}>
        <Button colorScheme='teal' mt='2'>
          Show Stock
        </Button>
      </Link>
    </Box>
  );
}

export default Home;
