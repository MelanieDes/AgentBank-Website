// import { setToken, setUser, setUsername } from "../reducers/authSlice";
import { setToken, setUser } from "../reducers/authSlice";

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
};

export const signIn = async (username, password, dispatch, navigate) => {
  const data = {
    email: username,
    password: password,
  };

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error('Erreur lors de la requête de connexion');
      return;
    }

    const responseData = await response.json();
    const token = responseData.body.token;

    // Dispatche le token dans le Redux store
    dispatch(setToken(token));
    navigate('/users');
  } catch (error) {
    console.error("Erreur lors de la requête", error);
  }
};

export const fetchUserProfile = async (dispatch) => {
  const state = JSON.parse(localStorage.getItem('reduxState'));
  const token = state.auth.token;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: headers,
    });

    if (!response.ok) {
      console.error('Erreur lors de la requête de profil');
      return;
    }

    const data = await response.json();    
    dispatch(setUser(data.body));
  } catch (error) {
    console.error('Erreur lors de la requête', error);
  }
};

export const updateUsername = async (token, newUsername, dispatch) => {
  try {
    
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUsername }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const data = await response.json();
    dispatch(setUser(data.body.userName)); 

  } catch (error) {
    console.error('Erreur lors de la requête', error);
  } 
};

