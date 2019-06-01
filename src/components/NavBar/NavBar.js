import React from 'react';
import { Link } from 'react-router-dom';
import '.NavBar.css'

const NavBar = () => <div className="container" id="top-nav-bar">
  <nav className="navbar" role="navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <span className="title is-5 first-name">Alain</span>
        <span className="title is-5 last-name">Burindi</span>
      </a>

      <button className="navbar-buger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </button>

      <div className="navbar-menu">
         <div className="navbar-end">
             <Link to="/" className="navbar-item">Home</Link>
             <Link to="/resume" className="navbar-item">Resume</Link>
             <Link to="/contact" className="navbar-item">Contact</Link>
         </div>
      </div>
    </div>
    <ul>
      
    </ul>
  </nav>
</div>;

export default NavBar;