import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../favorite-movie-types';
import { client } from '../api/fm-rest';

interface MoviesState {
  items: Movie[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = { items: [], loading: 'idle' } as MoviesState;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (arg, thunkAPI) => {
  const movies = await client.getMovies();
  return movies;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
