import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer, { fetchMovies } from '../movies/movies-slice';
import usersReducer from '../login/users-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
    users: usersReducer,
  },
});

// Initialize the store with movies
store.dispatch(fetchMovies());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
