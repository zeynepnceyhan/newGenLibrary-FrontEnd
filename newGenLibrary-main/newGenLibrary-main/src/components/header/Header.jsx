import React from "react";
import {
  Text,
  useColorModeValue,
  Box,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { NavBar } from "../navBar/NavBar";

export const Header = () => {
  return (
    <Box
      alignItems="center"
      width="100%"
      maxW={1000}
      margin="0 auto"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="center"
      textAlign="center"
    >
      <VStack spacing={{ base: "0", md: "2" }}>
        <Box>
            <NavBar />
          <Heading as="h2" size="lg" marginTop={3}>
            NewGenLibrary Project
          </Heading>
          <Text marginY={2}>Discover and explore books from our NewGenLibrary.</Text>
        </Box>
        <HStack width="95%" alignItems="center"></HStack>
      </VStack>
    </Box>
  );
};
