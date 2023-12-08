import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword } from "../redux/app/formSlice";

import loginUser from "../redux/api/Login";
import { useNavigate } from 'react-router-dom';
import loginSuccess from "../redux/app/authSlice";

const Sign = () => {

    // Pour extraire le nom d'utilisateur et le mot de passe du formulaire
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector((state) => state.formulaire.userName);
    const password = useSelector((state) => state.formulaire.password);
    const [rememberMe, setRememberMe] = useState(false);

    //Changement dans les entrées du formulaire
    const handleUsernameChange = (event) => {
        dispatch(setUsername(event.target.value));
        console.log(userName);
    };

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
        console.log(password);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
      };
   
   //Soumission du formulaire, effectue une requête d'authentification avec lonUser puis mise à jour du store et du local storage avec le token si connexion réussie
  const clickSubmit = async (e) => {
    e.preventDefault();

    if (!userName.trim() || !password.trim()) {
      alert("Username and password cannot be empty");
      return;
    }
    
    let infos = {
      userName: userName,
      password: password,
    };
    
    const response = await loginUser(infos);
    console.log(response);
    
    if (response.status === 200) {
      if (rememberMe) {
        localStorage.setItem("token", response.body.token);
      } else {
        localStorage.removeItem("token");
      }
      dispatch(loginSuccess(response.body.token));
      navigate("/user");
    }
  };
    // Vérifi si l'utilisateur est déjà connecté
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        //Si token trouvé, l'action 
        dispatch(loginSuccess(storedToken));
        navigate("/user");
      }
    }, [dispatch, navigate]);

    return (
        <div>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={clickSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={userName}
              onChange={handleUsernameChange} required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password}
              onChange={handlePasswordChange} required/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMeChange}/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>                    
                        <a href={"./users"} className="sign-in-button">Sign In</a>                    
                    </form>
                </section>
            </main>            
        </div>
    );
};

export default Sign;