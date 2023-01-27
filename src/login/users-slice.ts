import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../favorite-movie-types';

interface UsersState {
  items: User[];
  loggedInUser: User | undefined;
}

const initialState: UsersState = { items: [], loggedInUser: undefined };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.items.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
