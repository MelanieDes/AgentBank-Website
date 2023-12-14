// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    }, 
    setUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
    },   
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
