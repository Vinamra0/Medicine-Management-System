// Header.jsx
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box p={4} bg='teal.500' color='white'>
      <Link to='/'>
        <Heading as='h1' size='md' cursor='pointer'>
          Everest Pharmaceuticals Pvt. Ltd Inventory Management System
        </Heading>
      </Link>
    </Box>
  );
};

export default Header;
