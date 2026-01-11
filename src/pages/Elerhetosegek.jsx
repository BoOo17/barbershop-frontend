import React from 'react';
import './Elerhetosegek.css';

const Elerhetosegek = () => {
  return (
    <div className="contact-wrapper">
      
      <div className="contact-content">
        
        <div className="info-column">
          <h2>Kapcsolat</h2>
          <p className="contact-desc">Keress minket bizalommal vagy ugorj be hozzánk!</p>
          
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h3>Címünk</h3>
              <p>Győr, Egyetem tér 1, 9026</p>
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

          <div className="opening-hours">
            <h3>Nyitvatartás</h3>
            <ul>
              <li><span>Hétfő - Péntek:</span> <strong>09:00 - 20:00</strong></li>
              <li><span>Szombat:</span> <strong>10:00 - 16:00</strong></li>
              <li><span>Vasárnap:</span> <strong>ZÁRVA</strong></li>
            </ul>
          </div>
        </div>

        <div className="map-column">
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/place/Széchenyi+István+Egyetem/@47.6933064,17.6249578,567m/data=!3m2!1e3!4b1!4m6!3m5!1s0x476bbfdfda327c3b:0xd0538eef80041623!8m2!3d47.6933064!4d17.6275327!16s%2Fm%2F09gmw59?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>

      <div className="footer-bar">
        <p>&copy; 2024 BarberShop.</p>
        <div className="social-links">
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </div>

    </div>
  );
};

export default Elerhetosegek;