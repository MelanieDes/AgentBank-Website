import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/reducers/authSlice';

const Users = () => {
    // Utilisation de useSelector pour extraire le token du state Redux
  const token = useSelector((state) => state.user.token);
  // Utilisation de useDispatch pour obtenir la fonction dispatch
  const dispatch = useDispatch();

   // Fonction fetchData qui effectue une requête API pour récupérer le profil de l'utilisateur
  const fetchData = async () => {
    // Définition des en-têtes de la requête avec le token d'authentification
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };    

    try {
        // Utilisation de l'API fetch pour effectuer une requête POST
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: headers,        
      });
      // Vérification de la réponse HTTP
      if (!response.ok) {
        console.error('Erreur lors de la requête de profil');
        // Gérer l'erreur d'une manière appropriée pour l'utilisateur
        return;
      }
      // Extraction des données JSON de la réponse
      const data = await response.json();
      console.log(data.body);
      dispatch(setUser(data));
    } catch (error) {
      console.error("Erreur lors de la requête", error);
      // Gérer l'erreur d'une manière appropriée pour l'utilisateur
    }
  };

  // Appel de la fonction fetchData directement dans le composant
  fetchData();


    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>            
        </div>
    );
};

export default Users;