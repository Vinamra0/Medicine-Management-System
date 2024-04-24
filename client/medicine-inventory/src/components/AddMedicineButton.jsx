import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

const AddMedicineButton = () => {
  return (
    <Link to='/medicines/add'>
      <Button leftIcon={<RiAddLine />} colorScheme='teal' mt='2'>
        Add Medicine
      </Button>
    </Link>
  );
};

export default AddMedicineButton;
