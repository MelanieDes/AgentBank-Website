import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../redux/api/callAuth';

const Form = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn(email, password, dispatch, navigate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignIn();
  };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username" >Username</label>
                            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>               
                        <button type="submit" className="sign-in-button" onClick={handleSignIn}>Sign In</button>    
                    </form>
            
        </div>
    );
};

export default Form;