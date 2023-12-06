import { createSlice } from '@reduxjs/toolkit';

const initialState = {  
  id: null,
  email: null,
  userName: null,
  firstName: null,
  lastName: null,
}

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    // Défini un profil utilisateur
    setUserInfo: (state, action) => {      
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
    },    
  },
})
export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;