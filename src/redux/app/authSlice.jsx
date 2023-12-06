import { createSlice } from '@reduxjs/toolkit';

//Récupération du token d'identhification depuis le localSorage du navigateur
const accesToken = localStorage.getItem('token');

const initialState = {
    token: accesToken || null, // utilisation du tioken stocké si existant, sinon null
};

const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSucces: (state, action) => {
            state.token = action.payload; //Mise à jour du token
            localStorage.setItem('token', action.payload);
        }
    }
}) 

export const { loginSucces } = authSlice.actions;

export default authSlice.reducer;