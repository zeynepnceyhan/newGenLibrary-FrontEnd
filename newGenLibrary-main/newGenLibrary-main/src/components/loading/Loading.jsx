import { Box, Progress } from '@chakra-ui/react';
import React from 'react'

export const Loading = () => {
  return (
    <Box>
      <Progress colorScheme="green" size="sm" value={80}  isIndeterminate/>
    </Box>
  );
}
