// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    devtools: true,
  },
});

export default store;
