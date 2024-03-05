import {
    Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";

const SearchInput = ({ searchInputValue, setSearchInputValue }) => {

  return (
    <Box width="[90% 100%]" maxW={500} marginY="1rem">
      <InputGroup size="md" borderRadius={10}>
        <Input
          type="text"
          p={2}
          placeholder="Search Book Title or Author"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          _focus={{ borderColor: "gray.500" }}
        />
        <InputRightElement>
          <Button
            mr={1}
            size="md"
            leftIcon={<Icon ml={2} as={HiSearch} />}
          ></Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
