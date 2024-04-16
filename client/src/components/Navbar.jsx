// import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
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
        <li><Link to="/search" style={{ textDecoration: 'none' }} >Search<i className="fa-solid fa-magnifying-glass"></i></Link></li>
        <li><Link to="/how-it-works" style={{ textDecoration: 'none' }} >How It Works</Link></li>
        <Link to={'/'}><img src={ Logo } /></Link>
        {Auth.loggedIn() ? (
            <li><Link to="/user" style={{ textDecoration: 'none' }} >Your Calls To Action</Link></li>
          ) : (
            <li><Link to="/join" style={{ textDecoration: 'none' }} >Join The Village</Link></li>
          )}
        {Auth.loggedIn() ? (
            <li><Link to="/" onClick={handleLogout} style={{ textDecoration: 'none' }} >Logout</Link></li>
          ) : (
            <li><Link to="/login" style={{ textDecoration: 'none' }} >Login</Link></li>
          )}
      </ul>
    </nav>
    </>
    );
}

export default Navbar;