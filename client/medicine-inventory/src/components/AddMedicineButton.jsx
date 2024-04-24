import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const AddMedicineButton = () => {
  return (
    <Link to={`/medicines/add`}>
      <Button colorScheme='teal' mt='2'>
        Add Medicine
      </Button>
    </Link>
  );
};

export default AddMedicineButton;
