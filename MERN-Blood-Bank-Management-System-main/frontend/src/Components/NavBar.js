import React from 'react';
import '../NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar" style={{backgroundColor:''}}>
            <ul className="nav-list" >
                <li><a style={{fontSize:20 }} href="/">Home</a></li>
                <li><a style={{fontSize:20}}  href="/admin/login">Admin Login</a></li>
                <li><a style={{fontSize:20}} href="/donor/login">Donor Login</a></li>
                <li><a style={{fontSize:20}} href="/donor/signup">Donor Signup</a></li>
                <li><a style={{fontSize:20}} href="/admin/signup">Admin Signup</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
