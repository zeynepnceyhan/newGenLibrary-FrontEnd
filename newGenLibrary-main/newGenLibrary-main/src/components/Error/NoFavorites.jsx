import { Box, Text, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

 function NoFavorites() {
  const Navigate = useNavigate();
  return (
    <Box textAlign="center" py={10} px={6}>

      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, green.600)"
        backgroundClip="text">
        Favorite list is empty
      </Heading>
      <Text color={"gray.500"} mb={6}>
        To add a book to your favorites list, go back home and click on favorite in the book item
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, green.400, green.600)"
        color="white"
        variant="solid"
        onClick={(e) => Navigate("/home")}
      >
        Go to Home
      </Button>
    </Box>
  );
}
export default NoFavorites;
