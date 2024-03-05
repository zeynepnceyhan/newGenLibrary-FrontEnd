import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  books: [],
  loading: false,
  error: "",
  favorites: [],
};

// Get books with thunk
export const getBooks = createAsyncThunk(
  "library/getBooks",
  async (thunkAPI) => {
    return fetch("backendAPI/api/books/getall").then((res) =>
      res.json()
    );
  }
);

// get next 0r previous page thunk
export const getNext = createAsyncThunk(
  "library/getBooks",
  async (url, thunkAPI) => {
    return fetch(url).then((res) => res.json());
  }
);

// get specific book from input
export const getPageNum = createAsyncThunk(
  "library/getBooks",
  async (url, thunkAPI) => {
    return fetch(url).then((res) => res.json());
  }
);

// create slice
export const bookSlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    // update favorite books
    favBooks(state, action) {
      const { book, isFavourite } = action.payload;
      const findBook = state.favorites.find((f) => book.id === f.id);
      if (findBook) {
        const newfav = state.favorites.filter((fav) => fav.id !== findBook.id);
        return { ...state, favorites: newfav };
      }
      return {
        ...state,
        favorites: [...state.favorites, { ...book, isFavourite }],
      };
    },
    // clear favorite books
    emptyFavBooks(state) {
      return { ...state, favorites: [] };
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.books = payload;
    },
    [getBooks.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = "ERR_INTERNET_DISCONNECTED";
    },
  },
});

export const { favBooks, searchQuery, emptyFavBooks } = bookSlice.actions;

export default bookSlice.reducer;
