import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from "../../public/villageLogo.png"
import Auth from '../utils/auth';
import '../../src/App.css'



function Navbar () {
  const handleLogout = () => {
    Auth.logout();
  };

    return (
    <>
    <nav className="navbar">
      <ul>
        <li><Link to="/search" style={{ textDecoration: 'none' }} smooth>Search<i class="fa-solid fa-magnifying-glass"></i></Link></li>
        <li><Link to="/how-it-works" style={{ textDecoration: 'none' }} smooth>How It Works</Link></li>
        <Link to={'/'}><img src={ Logo } /></Link>
        <li><Link to="/join" style={{ textDecoration: 'none' }} smooth>Join The Village</Link></li>
        {Auth.loggedIn() ? (
            <li><Link to="/" onClick={handleLogout} style={{ textDecoration: 'none' }} smooth>Logout</Link></li>
          ) : (
            <li><Link to="/login" style={{ textDecoration: 'none' }} smooth>Login</Link></li>
          )}
      </ul>
    </nav>
    </>
    );
}

export default Navbar;