// src/pages/Elerhetosegek.jsx
import React from 'react';
import './Elerhetosegek.css';

const Elerhetosegek = () => {
  return (
    <div className="contact-wrapper">
      
      <div className="contact-content">
        
        {/* BAL OLDAL: INFÓK */}
        <div className="info-column">
          <h2>Kapcsolat</h2>
          <p className="contact-desc">Keress minket bizalommal vagy ugorj be hozzánk!</p>
          
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h3>Címünk</h3>
              <p>1052 Budapest, Deák Ferenc tér 3.</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <h3>Telefon</h3>
              <p>+36 1 234 5678</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>info@barbershop.hu</p>
            </div>
          </div>

          {/* Nyitvatartás táblázat szerűen */}
          <div className="opening-hours">
            <h3>Nyitvatartás</h3>
            <ul>
              <li><span>Hétfő - Péntek:</span> <strong>09:00 - 20:00</strong></li>
              <li><span>Szombat:</span> <strong>10:00 - 16:00</strong></li>
              <li><span>Vasárnap:</span> <strong>ZÁRVA</strong></li>
            </ul>
          </div>
        </div>

        {/* JOBB OLDAL: TÉRKÉP */}
        <div className="map-column">
          {/* Google Maps Embed (Ez egy példa iframe) */}
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.666838302068!2d19.0520967!3d47.4960309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc41b36965f9%3A0x6a0256e0d376510!2sBudapest%2C%20De%C3%A1k%20Ferenc%20t%C3%A9r!5e0!3m2!1shu!2shu!4v1700000000000!5m2!1shu!2shu" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>

      {/* COPYRIGHT CSÍK */}
      <div className="footer-bar">
        <p>&copy; 2024 BarberShop. Minden jog fenntartva.</p>
        <div className="social-links">
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </div>

    </div>
  );
};

export default Elerhetosegek;