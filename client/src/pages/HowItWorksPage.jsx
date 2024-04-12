import React from 'react';
import Logo from "../../public/images/villageLogo.png"
import { NavLink, Link } from 'react-router-dom';

import '../../src/App.css';

function HowItWorks () {
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
    <div className="howCard">
        <h1 className="worksTitle">How It Works</h1>

    </div>
    </>
    );
}

export default HowItWorks;