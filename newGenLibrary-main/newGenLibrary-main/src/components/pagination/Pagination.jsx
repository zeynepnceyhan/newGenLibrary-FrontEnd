import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNext, getPageNum } from "../../redux/BooksReducer/bookSlice";

export default function Pagination({ prevUrl, nextUrl, count }) {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1)

  // set page url
    const url = `backendAPI/api/books/getByPageNumber?pageNumber=${pageNum}`  

  useEffect(() => {
    dispatch(getPageNum(url));
  }, [url, dispatch])

  return (
    <Flex
      textAlign="right"
      width="[100% 80%]"
      marginBottom={{ base: "5px", md: "0" }}
      paddingLeft={{ base: "0", md: "1rem" }}
    >
      {prevUrl && (
        <Button
          p="3"
          onClick={() => {
            dispatch(getNext(prevUrl));
            setPageNum((p) => Number(p - 1));
          }}
        >
          <ChevronLeftIcon />
          <small>Previous</small>
        </Button>
      )}

      <Flex alignItems="center" margin="auto 1rem">
        <Text margin="auto 0.5rem">Page</Text>
        <Input
          w="20"
          value={pageNum}
          type="number"
          min="1"
          onChange={(e) => {
            if (e.target.value < 1) {
              return null
            } setPageNum(e.target.value);
          }}
        />
        {count && <Text marginX="1" display={{base: "none", sm: "contents"}}>of {2264}</Text>}
      </Flex>

      {nextUrl && (
        <Button
          p="3"
          onClick={() => {
            dispatch(getNext(nextUrl));
            setPageNum((p) => Number(p + 1));
          }}
        >
          <small>Next</small>
          <ChevronRightIcon />
        </Button>
      )}
    </Flex>
  );
}
