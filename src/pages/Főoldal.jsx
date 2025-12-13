import React from 'react';
import './Főoldal.css';

const Főoldal = ({ onOpenAuth }) => {
  return (
    <div className="hero-container">
      
      {/* Sötétítő réteg a háttérkép felett */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Kicsi díszítő szöveg felül */}
        <span className="hero-badge">EST. 2025 • GYŐR</span>
        
        {/* A fő üzenet */}
        <h1>
          A stílus <span className="highlight">örök</span>.<br />
          A vágás <span className="highlight">tökéletes</span>.
        </h1>
        
        <p className="hero-subtitle">
          Professzionális barber szolgáltatások, ahol a hagyomány találkozik a modern trendekkel.
          Dőlj hátra, mi gondoskodunk a megjelenésedről.
        </p>

        {/* A KÉT GOMB (Megtartva és bekötve) */}
        <div className="hero-buttons">
          <button className="btn-primary" onClick={onOpenAuth}>
            Időpontfoglalás
          </button>
          
          <button className="btn-secondary" onClick={onOpenAuth}>
            Időpont lemondása
          </button>
        </div>
      </div>

    </div>
  );
};

export default Főoldal;