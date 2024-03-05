import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { emptyFavBooks } from '../../redux/BooksReducer/bookSlice';

export default function ClearFavorites() {
    const dispatch = useDispatch();
    return (
      <Box>
        <Button variant="solid" onClick={(e) => dispatch(emptyFavBooks())}>
          <Text>Clear Favorite List</Text>
        </Button>
      </Box>
    );
}
