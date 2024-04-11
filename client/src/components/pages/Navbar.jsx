import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from "../styles/assets/villageLogo.png"

import '../styles/Navbar.css'



function Navbar () {
    return (
    <>
    <nav className="navbar">
      <ul>
        <li><Link to="/search" style={{ textDecoration: 'none' }} smooth>Search<i class="fa-solid fa-magnifying-glass"></i></Link></li>
        <li><Link to="/how-it-works" style={{ textDecoration: 'none' }} smooth>How It Works</Link></li>
        <Link to={'/'}><img src={ Logo } /></Link>
        <li><Link to="/join" style={{ textDecoration: 'none' }} smooth>Join The Village</Link></li>
        <li><Link to="/signIn" style={{ textDecoration: 'none' }} smooth>Sign In</Link></li>
      </ul>
    </nav>
    </>
    );
}

export default Navbar;