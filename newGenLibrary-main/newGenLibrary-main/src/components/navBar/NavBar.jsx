import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

export const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      w="100%"
      p={5}
      justifyContent="space-around"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    >
      <NavLink to="/home">
        <Heading size="md" fontWeight="semibold" _hover={{ color: "green.500" }}>
          Home
        </Heading>
      </NavLink>
      <NavLink to="/favorites">
        <Heading size="md" fontWeight="semibold" _hover={{ color: "green.500" }}>
          Favorite List
        </Heading>
      </NavLink>
    </Flex>
  );
};
