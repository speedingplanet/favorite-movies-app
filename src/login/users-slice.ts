import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { client } from '../api/fm-rest';
import { User } from '../favorite-movie-types';

interface UsersState {
  items: User[];
  loggedInUser: User | undefined;
  pendingUser?: User;
}

const initialState: UsersState = { items: [], loggedInUser: undefined };

export const addUser = createAsyncThunk('users/addUser', async (user: User, thunkAPI) => {
  const updatedUser = await client.addUser(user);
  return updatedUser;
});
// => {type: 'users/addUser.pending', payload: null}
// => {type: 'users/addUser.fulfilled', payload: updatedUser}
// => {type: 'users/addUser.rejected', payload: error}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.items.push(action.payload);
    });
  },
});

export default usersSlice.reducer;
