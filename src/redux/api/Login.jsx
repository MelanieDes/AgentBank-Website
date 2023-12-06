const Login = async (userInfo) => {        
          

        const response = await fetch("http://locahost:3001/api/user/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },    
            body: JSON.stringify({
                email: userInfo.userName,
                password: userInfo.password
            })
        });
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.body.token);
                
    };

export default Login;