import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css'; 

function Header() {
  return (
    <header className="main-header">
        <div className="logo-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2>Sea of Thieves</h2>
        </Link>
      </div>
      
      <nav className="nav-links">
        <a href="#game">THE GAME</a>
        <a href="#pirate-emporium">PIRATE EMPORIUM</a>
        <a href="#news">NEWS</a>
        <a href="#community">COMMUNITY</a>
        <a href="#my-pirate">MY PIRATE</a>
        <a href="#shop">SHOP</a>
        <a href="#support">SUPPORT</a>
      </nav>
      <div className="header-actions">
        <Link to="/crew">
            <button className="btn-login">THE CREW</button>
        </Link>
        <Link to="/form">
          <button className="btn-play">PLAY NOW</button>
        </Link>
        <button className="btn-login">LOG IN</button>
      </div>
    </header>
  );
}

export default Header;