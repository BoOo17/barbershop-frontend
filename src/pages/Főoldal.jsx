import React from 'react';
import './Főoldal.css';

const Főoldal = ({ onOpenAuth }) => {
  return (
    <div className="hero-container">
      
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">EST. 2025 • GYŐR</span>
        
        <h1>
          A stílus <span className="highlight">örök</span>.<br />
          A vágás <span className="highlight">tökéletes</span>.
        </h1>
        
        <p className="hero-subtitle">
          Professzionális barber szolgáltatások, ahol a hagyomány találkozik a modern trendekkel.
          Dőlj hátra, mi gondoskodunk a megjelenésedről.
        </p>

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