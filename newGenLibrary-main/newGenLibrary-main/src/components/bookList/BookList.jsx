import { Box, HStack, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import BookItem from "../bookItem/BookItem";
import Pagination from "../pagination/Pagination";
import SearchInput from "../searchInput/SearchInput";
import SearchNotFound from "../searchNotFoundNote/SearchNotFound";
import { CloseIcon } from "@chakra-ui/icons";
import BookShelves from "../bookshelves/BookShelves";

export default function BookList({ books, nextUrl, prevUrl, count }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [keyTerms, setKeyTerms] = useState([]);

  // set book.results to this component state
  const [hbook, setHbook] = useState(books.results);

  useEffect(() => {
    setHbook(books.results);
  }, [books.results]);

  // search books
  const searchBooks = (text) => {
    setSearchTerm(text);
  
    if (!books.results || !Array.isArray(books.results)) {
      setHbook([]);
      return;
    }
  
    const filteredBooks = books.results.filter((book) => {
      const firstAuthor = book.authors[0];
      if (!firstAuthor || !firstAuthor.name) {
        return false; // Skip books without authors or authors without names
      }
  
      if (text === "") {
        return true;
      } else if (
        book.title.toLowerCase().includes(text.toLowerCase()) ||
        firstAuthor.name.toString().toLowerCase().includes(text.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  
    setHbook(filteredBooks);
  };

  // filter by bookshelf items
  const filterKeyTerms = useCallback(() => {
    if (keyTerms.length < 1) {
      setHbook(books.results);
      return;
    }

    let res = books.results.filter((book) =>
      book.bookshelves.some((key) => keyTerms.includes(key))
    );

    setHbook(res);
  }, [books.results, keyTerms]);

  // trigger renrender on keyterm change
  useEffect(() => {
    filterKeyTerms();
  }, [filterKeyTerms]);

  // remove bookshelf item from filter array
  const removeTerm = (term) => {
    const terms = keyTerms;
    let index = terms.findIndex((t) => t === term);

    if (index > -1) {
      terms.splice(index, 1);

      setKeyTerms([...terms]);
      filterKeyTerms();
    }
  };

  // add bookshelf item to filter array
  const addTerm = (term) => {
    if (keyTerms.includes(term)) return;
    setKeyTerms((prev) => [...prev, term]);
  };

  return (
    <Stack p={4} width="100%">
      <HStack
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        borderBottomWidth="1px"
        flexDirection={{ base: "column", md: "row" }}
        marginBottom={{ base: "1rem", md: "0" }}
      >
        <Box width="100%">
          <SearchInput
            searchInputValue={searchTerm}
            setSearchInputValue={(text) => searchBooks(text)}
          />
          <Box>
            {keyTerms.map((k, index) => (
              <BookShelves
                key={index}
                element={k}
                setSearchInputValue={removeTerm}
                icon={CloseIcon}
              />
            ))}
          </Box>
        </Box>
        <Box width="100%">
          <Pagination nextUrl={nextUrl} prevUrl={prevUrl} count={count} />
        </Box>
      </HStack>
      {/* filter by title, author and bookshelve */}
      {hbook &&
        hbook.map((book) => {
          return (
            <BookItem key={book.id} book={book} setSearchInputValue={addTerm} />
          );
        })}
      {searchTerm.length > 0 && hbook.length === 0 && (
        <SearchNotFound searchTerm={searchTerm} />
      )}
      <Box width="100%">
        {hbook.length > 1 && (
          <Pagination nextUrl={nextUrl} prevUrl={prevUrl} count={count} />
        )}
      </Box>
    </Stack>
  );
}
