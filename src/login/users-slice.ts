import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { client } from '../api/fm-rest';
import { User } from '../favorite-movie-types';

interface UsersState {
  items: User[];
  loggedInUser: User | undefined;
  pendingUser?: User;
}

const initialState: UsersState = { items: [], loggedInUser: undefined };

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (arg, thunkAPI) => {
  const users = await client.getUsers();
  return users;
});

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
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.loggedInUser = action.payload;
    },
    logout(state) {
      state.loggedInUser = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.items.push(action.payload);
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.items = action.payload;
    });
  },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
