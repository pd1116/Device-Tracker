import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/users';
const API_URL = '/api/users'; // Use relative path for deployment

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addUser = createAsyncThunk('users/add', async (user) => {
  const res = await axios.post(API_URL, user);
  return res.data;
});

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});


const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.loading = true; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(u => u.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
