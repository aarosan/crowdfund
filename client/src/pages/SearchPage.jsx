// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

import "../../src/App.css";
import '../../src/index.css';


function Search () {
    return (
    <>
    <div className="searchCard">
     <label className="searchLabel"> Search for a Call To Action:</label>
     <input type="search" className="searchInput"/>
     <p className="searchPTag">Search by Title, Keyword, Person's Name</p>
     <button className="searchBtn">Search<i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
    </>

    );
}

export default Search;