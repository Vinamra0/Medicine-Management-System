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
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

const MedicinesList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/medicines");
        setMedicines(response.data);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMedicines();
  }, []);

  return (
    <Box p='4' bg='gray.100' borderRadius='md'>
      <Heading as='h2' size='lg' mb='4' color='teal.500' textAlign={"center"}>
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
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <ChakraLink
              as={Link}
              to={`/medicines/${medicine._id}`}
              textDecoration='none'
              flex='1'
            >
              {medicine.name}
            </ChakraLink>
            <Text color='gray.500' fontSize='sm' flex='1'>
              {medicine.description}
            </Text>
            <Flex>
              <IconButton
                as={Link}
                to={`/medicines/update/${medicine._id}`}
                aria-label='Edit'
                icon={<MdEdit />}
                colorScheme='teal'
                mr='2'
              />
              <IconButton
                as={Link}
                to={`/medicines/${medicine._id}`}
                aria-label='View'
                icon={<RiExternalLinkLine />}
                colorScheme='teal'
              />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MedicinesList;
