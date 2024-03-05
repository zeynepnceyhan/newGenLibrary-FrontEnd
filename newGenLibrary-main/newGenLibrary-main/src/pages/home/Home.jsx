import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/BooksReducer/bookSlice";
import { Loading } from "../../components/loading/Loading";
import ConnectionError from "../../components/Error/ConnectionError";
import BookList from "../../components/bookList/BookList";
import { Container } from "@chakra-ui/react";
import { Header } from "../../components/header/Header";
import FooterNote from "../../components/footerNote/FooterNote";

const Home = () => {
  const dispatch = useDispatch();

  // booklist states from redux createAsyncThunk
  const { books, loading, error } = useSelector((state) => state.library);

  // fetch booklist and watch the dispatch
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // previous/next link and page count props
  const nextUrl = books.next;
  const prevUrl = books.previous;
  const pageCount = books.count;

  return (
    <Container maxW={1000} backgroundColor={"#FFFFFF"} opacity={0.9}>
      <div>
        <Header books={books.results} />
      </div>
      {loading && <Loading />}
      {books.results && (
        <BookList
          books={books}
          nextUrl={nextUrl}
          prevUrl={prevUrl}
          count={pageCount}
        />
      )}
      {error && <ConnectionError error={error} />}
      <FooterNote />
    </Container>
  );
};

export default Home;
