// import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import Logo from "/villageLogo.png"
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
      {Auth.loggedIn() ? (
        <li><Link to="/create" style={{ textDecoration: 'none' }} >Make A Call</Link></li>
      ) : (
        <li><Link to="/login" style={{ textDecoration: 'none' }} >Make A Call</Link></li>
      )}
      {Auth.loggedIn() ? (
          <li><Link to="/user" style={{ textDecoration: 'none' }} >Your Calls To Action</Link></li>
        ) : (
        <li><Link to="/login" style={{ textDecoration: 'none' }} >Your Calls To Action</Link></li>
      )}
        <Link to={'/'}><img className="visImg" src={ Logo } /></Link>
        {Auth.loggedIn() ? (
            <li><Link to="/create" style={{ textDecoration: 'none' }} >Join The Village</Link></li>
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
    <div>
        <Link to={'/'}><img className="invisImg" src={ Logo }/></Link>
    </div>
    </>
    );
}

export default Navbar;
