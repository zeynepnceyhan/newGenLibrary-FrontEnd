import { Box, Heading, Text, Button,Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const Navigate = useNavigate()
  return (
    <Container maxW={1000} backgroundColor={"#FFFFFF"} opacity={0.9} h="100vh">
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
          onClick={(e) => Navigate("/home")}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
