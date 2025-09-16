import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import "./Header.css";

function Header() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <header className="header">
      <div className="logo">BarberShop</div>

      <nav className="nav-links">
        <Link to="/" className="nav-link">Főoldal</Link>
        <Link to="/barberek" className="nav-link">Barberek</Link>
        <Link to="/szolgaltatasok" className="nav-link">Szolgáltatások</Link>
        <Link to="/kepek" className="nav-link">Képek</Link>
        <Link to="/rolunk" className="nav-link">Rólunk</Link>
        <Link to="/elerhetosegek" className="nav-link">Elérhetőségek</Link>

        {/* Fiók ikon */}
        <button
          className="account-icon"
          onClick={() => setShowAuth(true)}
        >
          👤
        </button>
      </nav>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </header>
  );
}

export default Header;
