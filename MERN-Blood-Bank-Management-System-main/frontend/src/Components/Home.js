import React from 'react';
import './Home.css'; // Make sure to create this CSS file for the styling

const Home = () => {

    const handleLoginAdmin = () => {
        window.location.href = '/admin/login';
    };

    const handleSignupAsDonor = () => {
        window.location.href = '/donor/signup';
    };

    const handleSignupAsAdmin = () => {
        window.location.href = '/admin/signup';
    };

    const handleLoginAsDonor = () => {
        window.location.href = '/donor/login';
    };

    return (
        <div className="home-container">
            <div className="content">
                <h1>Welcome to the Blood Bank</h1>
                <p>Your donation can save a life. Join us today!</p>
                <div className="button-container">
                    <button onClick={handleLoginAdmin} className="btn">Login as Admin</button>
                    <button onClick={handleSignupAsDonor} className="btn">Register as Donor</button>
                    <button onClick={handleSignupAsAdmin} className="btn">Register as Admin</button>
                    <button onClick={handleLoginAsDonor} className="btn">Login as Donor</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
