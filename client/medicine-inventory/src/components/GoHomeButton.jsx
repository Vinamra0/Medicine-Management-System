import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const GoHomeButton = () => {
  return (
    <Link to={`/`}>
      <Button colorScheme='teal' mt='2'>
        Go Home
      </Button>
    </Link>
  );
};

export default GoHomeButton;
