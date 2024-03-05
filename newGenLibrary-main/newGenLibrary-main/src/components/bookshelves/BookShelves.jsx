import { Box, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import React from 'react'

export default function BookShelves({ element, setSearchInputValue, icon }) {
  return (
    <Box marginX="2" paddingX="2" display="flex">
      <button onClick={(e) => setSearchInputValue(element)}>
        <Tag
          variant="solid"
          _hover={{ backgroundColor: "green.700", transition: "0.5s" }}
        >
          <TagLeftIcon as={icon} />
          <TagLabel>{element}</TagLabel>
        </Tag>
      </button>
    </Box>
  );
}
