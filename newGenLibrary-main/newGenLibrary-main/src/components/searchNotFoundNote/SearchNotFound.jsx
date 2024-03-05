import { Container } from '@chakra-ui/react'
import React from 'react'

export default function SearchNotFound({ searchTerm }) {
    return (
        <Container maxW={1000} backgroundColor={"#FFFFFF"} opacity={0.9} h="100vh">
            <div>This "{searchTerm}" book doesn't exist</div>
        </Container>
    );
}
