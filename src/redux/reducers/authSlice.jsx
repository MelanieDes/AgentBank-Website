// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
    },    
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    }, 
    setUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
    },
    setUsername: (state, action) => {
      state.userName = action.payload.data.body.userName;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },     
  },
});

export const { setToken, setUser, setUsername, logout } = authSlice.actions;

export default authSlice.reducer;