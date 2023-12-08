import { createSlice } from "@reduxjs/toolkit";

// Gère l'état du formulaire
const formSlice = createSlice({
    name: "form",
    initialState : {
        userName: "",
        password: "",
    },
    // Modification des propriétés userName et password en fonction des valeurs fournies dans l'action
    reducers:{
        setUsername: (state, action) =>{
            state.userName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    }
})

export const { setUsername, setPassword} = formSlice.actions;

export default formSlice.reducer;