import react from 'react';
import { useState } from 'react';

const SignupDonor = () => {

    const [name, setName] = useState('');
    const [CNIC, setCnic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [status, setStatus] = useState(false);

    const handleSignup = async (event) => {
        event.preventDefault();

        const userData = {
            name,
            CNIC,
            phone,
            email,
            password,
            city
        }

        try {
            const response = await fetch('http://localhost:4000/donor/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            if (response.status === 200)
            {
                alert("Donor Account created successfully!")
                setStatus(true)
            }

            else
            {
                alert("Error occurred while creating Donor Account. Account may already exist")
            }
        }

        catch (error) {
            console.log("Error occurred while signing up")
        }
    }

    const handleNext = () => {
        window.location.href = '/donor/login'
    }

    const handleBack = () => {
        window.location.href = '/'
    }

    return (
        <div class="login-box">
            <h2>Donor Signup</h2>
            <form>
                
                <div class="user-box">
                <input type="text" placeholder="Enter Name" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                
                <div class="user-box">
                <input type="text" placeholder="Enter CNIC in appropriate format" pattern="\d{5}-\d{7}-\d" value={CNIC} onChange={(event) => setCnic(event.target.value)}/>
                </div>
                
                <div class="user-box">
                <input type="text" placeholder="Enter Phone Number (11-Digit)" value={phone} pattern="^\d{11}$" onChange={(event) => setPhone(event.target.value)}/>
                </div>
                
                <div class="user-box">
                <input type="email" placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                
                <div class="user-box">
                <input type="password" placeholder="Enter Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                
                <div class="user-box">
                <input type="text" placeholder="Enter City" value={city} onChange={(event) => setCity(event.target.value)}/>
                </div>

                <button type="submit" onClick={handleSignup}>Signup</button>
            </form>

            <button onClick={handleBack}>Back</button>
            {status ? <button onClick={handleNext}>Login</button> : null}
        </div>

        
        
    )
}

export default SignupDonor