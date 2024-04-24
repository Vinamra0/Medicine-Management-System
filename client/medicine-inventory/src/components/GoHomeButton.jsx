import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { RiArrowLeftLine } from "react-icons/ri";

const GoHomeButton = () => {
  return (
    <Link to={`/`}>
      <IconButton
        colorScheme='teal'
        icon={<RiArrowLeftLine />}
        aria-label='Go Home'
        mt='2'
      />
    </Link>
  );
};

export default GoHomeButton;
