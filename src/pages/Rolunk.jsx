import React from 'react';
import './Rolunk.css';

const Rolunk = () => {
  return (
    <div className="rolunk-container">
      
      <div className="rolunk-header">
        <h2>Kik Vagyunk?</h2>
        <div className="divider-small"></div>
        <p className="intro-text">
          Nem csak egy fodrászat. Ez a hely, ahol a klasszikus stílus találkozik a modern technikával. 
          Nálunk nem sietünk: dőlj hátra, és élvezd a gondoskodó kezek munkáját egy barátságos környezetben.
        </p>
      </div>
      
      <div className="features-grid">
        
        <div className="feature-card">
          <div className="icon-box">💈</div>
          <h3>Tradíció</h3>
          <p>A régi iskolát követjük: pengés borotválás, forró törölköző és precíz átmenetek.</p>
        </div>

        <div className="feature-card">
          <div className="icon-box">✂️</div>
          <h3>Szakértelem</h3>
          <p>Csapatunk folyamatosan képzi magát, hogy a legújabb trendeket is profin vágja.</p>
        </div>

        <div className="feature-card">
          <div className="icon-box">🥃</div>
          <h3>Hangulat</h3>
          <p>Jó zene, kellemes társaság és kötetlen beszélgetések várnak.</p>
        </div>

      </div>
    </div>
  );
};

export default Rolunk;