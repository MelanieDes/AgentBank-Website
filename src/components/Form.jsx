import React, { useState } from 'react';

const Form = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const viewUsernameChange = (event) =>{
        setUsername(event.target.value);
        console.log(username);
    }

    const clickSubmit = async (e) => {
        e.preventDefault();  

        const response = await fetch("http://locahost:3001/api/user/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },    
            body: JSON.stringify(username, password)
        });
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
    }

    return (
        <form onSubmit={(e) => clickSubmit(e)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username"
                value={username}
                onChange={viewUsernameChange} required />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>            
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    );
};

export default Form;



