import react from 'react';
import { useState } from 'react';

//Adding validation for proper email input
const Login = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [adminstatus, setAdminStatus] = useState(false);

    const handleLogin = async (event) => {
        
        event.preventDefault();

            try {
                const response = await fetch('http://localhost:4000/admin/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                });

                if (response.status === 200)
                {
                    const data = await response.json();
                    alert("Login Successful")
                    setAdminStatus(true)
                    localStorage.setItem('token', data.token)
                    console.log(data.token)
                }

                else
                {
                    alert("Invalid Credentials or Account does not exist")
                }

            }

            catch (error) {
                console.log("Error occurred while logging in")
                console.log(error)
            }
        
            
        };

        const handleSignup = (event) => {
            event.preventDefault();
            window.location.href = '/admin/signup'
        }

    

    return (
        <div class="login-box">
            <h2>Login Here as Administrator</h2>
            <form>
                <div class="user-box">
                
                <input type="email" placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)} /> 
                </div>

                
                <div class="user-box">
                
                <input type="password" placeholder="Enter Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit" onClick={handleLogin}>Login</button>
                <button type="submit" onClick={handleSignup}>Signup</button>
            </form>

            {adminstatus ? <button onClick={() => window.location.href = '/admin/dashboard'}>Go to Admin Dashboard</button> : null}
        </div>
    )
}

export default Login