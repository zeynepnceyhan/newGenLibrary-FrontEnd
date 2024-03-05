import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  Icon,
  Image,
  Tag,
  TagLabel,
  Wrap,
  Text,
  HStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import ReadOutline from "../icons/ReadOutline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favBooks } from "../../redux/BooksReducer/bookSlice";
import { AddIcon } from "@chakra-ui/icons";
import BookShelves from "../bookshelves/BookShelves";

export default function BookItem({ book, setSearchInputValue }) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [isFavourite, setIsFavourite] = useState(false);

  //console.log("Book data:", book.authors[0].name);

  useEffect(() => {
    setIsFavourite(book.isFavourite);
  }, [book.isFavourite]);

  // get cover img url
  const coverImg = book.formats && book.formats["image/jpeg"];
  //console.log(coverImg)

  const epubLink = book.formats && book.formats["application/epub+zip"];

  const convertToHttps = (url) => {
    if (url && url.startsWith("http://")) {
      return url.replace("http://", "https://");
    }
    return url;
  };
  
  // coverImg ve epubLink için HTTP'yi HTTPS'ye dönüştür
  const secureCoverImg = convertToHttps(coverImg);
  const secureEpubLink = convertToHttps(epubLink);
  

  return (
    <Flex
      p={4}
      borderWidth={2}
      align="center"
      justify="space-between"
      textAlign="left"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex spacing={1}>
        <Box minWidth={70} maxW="100%" mr={6}>
          {secureCoverImg && (
            <Image
              alt={book.title}
              src={secureCoverImg}
              maxW="100%"
              maxH="100%"
              objectFit="contain" // oranları korumak için contain kullanabilirsiniz
            />
          )}
        </Box>

        <Box>
          <Box>
            {book.authors && book.authors.length > 0 && (
              <Box>{book.authors[0].name}</Box>
            )}
          </Box>
          <Heading
            size="md"
            my="2"
            _hover={{
              textDecoration: "underline",
            }}
          >
            <Link to={`/reading/${book.title}`} state={book}>
              {book.title}
            </Link>

            {book.languages.map((text) => (
              <Tag key={text} variant="solid" bgColor="black" marginX={2}>
                <TagLabel>{text.toUpperCase()}</TagLabel>
              </Tag>
            ))}
          </Heading>

          {secureEpubLink && (
            <Button
              as="a"
              href={secureEpubLink}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.400, green.400, green.600)"
              color="white"
              variant="solid"
            >
              Download EPUB
            </Button>
          )}

          <Wrap mt={4} spacing={2}>
            {book.bookshelves &&
              book.bookshelves.map((element, index) => {
                return (
                  <BookShelves
                    key={index}
                    element={element}
                    setSearchInputValue={setSearchInputValue}
                    icon={AddIcon}
                  />
                );
              })}
          </Wrap>
        </Box>
      </Flex>
      <VStack
        flexDirection={{ base: "row", md: "column" }}
        alignItems="center"
        marginY={{ base: "1rem", md: "auto" }}
      >
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, green.400, green.600)"
          color="white"
          variant="solid"
          onClick={(e) => {
            Navigate(`/reading/${book.title}`, { state: book });
          }}
        >
          <HStack>
            <Text> Read </Text>
            <Icon
              as={ReadOutline}
              fontSize={28}
              _hover={{ cursor: "pointer" }}
            />
          </HStack>
        </Button>

        <Button
          variant="solid"
          onClick={() => {
            dispatch(favBooks({ book, isFavourite: !isFavourite }));
            setIsFavourite((p) => !p);
          }}
        >
          <Text>Add List </Text>
          <Icon
            fontSize={28}
            _hover={{ cursor: "pointer" }}
            as={isFavourite ? MdFavorite : MdFavoriteBorder}
            color={isFavourite ? "red" : "black"}
            marginX="1"
          />
        </Button>
      </VStack>
    </Flex>
  );
}
