// src/components/Header.jsx
import React from 'react';
import './Header.css';

// Fontos: fogadjuk az onOpenAuth prop-ot!
const Header = ({ onOpenAuth }) => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <a href="#fooldal" className="logo">BarberShop</a>
        
        <ul className="nav-links">
          <li><a href="#fooldal">Főoldal</a></li>
          <li><a href="#rolunk">Rólunk</a></li>
          <li><a href="#szolgaltatasok">Szolgáltatások</a></li>
          <li><a href="#barberek">Csapatunk</a></li>
          <li><a href="#kepek">Galéria</a></li>
          <li><a href="#elerhetosegek">Kapcsolat</a></li>
        </ul>

        {/* --- ÚJ RÉSZ: PROFIL IKON --- */}
        <div className="user-icon" onClick={onOpenAuth}>
          {/* Egyszerű SVG emberke ikon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>

      </nav>
    </header>
  );
};

export default Header;