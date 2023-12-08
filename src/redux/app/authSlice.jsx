import { createSlice } from '@reduxjs/toolkit';

//Récupération du token d'identhification depuis le localStorage du navigateur si existant
const accesToken = localStorage.getItem('token');

const initialState = {
    token: accesToken || null, // utilisation du token stocké si existant, sinon null
};

// Gère l'état d'authentification, stockage et mise à jour du token
const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSucces: (state, action) => {            
            state.token = action.payload; //Mise à jour du token
            localStorage.setItem('token', action.payload); // Stockage du nouveau token dans le localStorage du navigateur
        }
        
    }
}) 

export const { loginSucces } = authSlice.actions;

export default authSlice.reducer;