import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/reducers/authSlice';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  // Obtient la fonction dispatch du Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // États locaux pour stocker les valeurs des champs d'entrée (username et password)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // En-têtes à inclure dans la requête
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }; 
  // Fonction appelée lors de la tentative de connexion
  const handleSignIn = async () => {
    // Crée un objet avec les informations d'identification à partir des états locaux
    const data = {
      email: username,
      password: password,
    };

    try {
      // Effectue une requête POST vers le serveur d'authentification
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      // Vérifie si la requête a réussi (code de statut HTTP 2xx)
      if (!response.ok) {
        console.error('Erreur lors de la requête de connexion');
        // Gérer l'erreur d'une manière appropriée pour l'utilisateur
        return;
      }
      // Analyse la réponse JSON
      const responseData = await response.json();
      console.log(responseData);
      // Extrait le token de la réponse et le dispatche dans le Redux store
      const token = responseData.token;
      dispatch(setToken(token)); 
      navigate('/users')     
    } catch (error) {
      // Gère les erreurs liées à la requête
      console.error("Erreur lors de la requête", error);
      // Gérer l'erreur d'une manière appropriée pour l'utilisateur
    }
  };
  
    return (
        <div>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username" >Username</label>
                            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>               
                        <button type="button" className="sign-in-button" onClick={handleSignIn}>Sign In</button>    
                    </form>                    
                </section>
            </main>            
        </div>
    );
};

export default Sign;