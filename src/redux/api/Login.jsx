const Login = async (userInfo) => {        
          

        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },    
            body: JSON.stringify({
                email: userInfo.userName,
                password: userInfo.password
            })
        });
        
        const data = await response.json();
        console.log(data.body.token);
                
    };

export default Login;