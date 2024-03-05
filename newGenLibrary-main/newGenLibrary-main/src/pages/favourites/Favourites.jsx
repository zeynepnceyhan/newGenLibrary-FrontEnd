import {  Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import BookItem from "../../components/bookItem/BookItem";
import ClearFavorites from "../../components/clearFavorites/ClearFavorites";
import NoFavorites from "../../components/Error/NoFavorites";
import { NavBar } from "../../components/navBar/NavBar";

export default function Favourites() {
  const { favorites } = useSelector((state) => state.library);

  return (
    <Container maxW={1000} backgroundColor={"#FFFFFF"} opacity={0.9}  h="100vh">
      <Stack p={4} w="100%">
        <NavBar />
        <Heading>List of Favorite Books</Heading>
        {favorites.length > 0 && <ClearFavorites /> }
        {favorites &&
          favorites.map((book) => {
            return <BookItem key={book.id} book={book} />;
          })}
          {
            favorites.length < 1 && <NoFavorites />
          }
      </Stack>
    </Container>
  );
}
