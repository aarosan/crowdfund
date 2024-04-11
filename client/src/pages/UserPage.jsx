import React from 'react';
import Logo from "../styles/assets/villageLogo.png"
import { NavLink, Link } from 'react-router-dom';

import '../styles/UserPage.css';
import '../styles/Navbar.css';

function User () {
    return (
    <>
    <nav className="navbar">
      <ul>
        <li><Link to="/search" style={{ textDecoration: 'none' }} smooth>Search<i class="fa-solid fa-magnifying-glass"></i></Link></li>
        <li><Link to="/how-it-works" style={{ textDecoration: 'none' }} smooth>How It Works</Link></li>
        <Link to={'/'}><img src={ Logo } /></Link>
        <li><Link to="/join" style={{ textDecoration: 'none' }} smooth>Join The Village</Link></li>
        <li><Link to="/user" style={{ textDecoration: 'none' }} smooth>Account</Link></li>
      </ul>
    </nav>
    <div className="userCard">
        <h1 className="welcome">Welcome Back UserName</h1>

    </div>
    </>
    );
}

export default User;