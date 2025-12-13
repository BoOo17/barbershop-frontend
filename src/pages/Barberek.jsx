// src/pages/Barberek.jsx
import React from 'react';
import './Barberek.css';

// Fogadjuk az onOpenAuth prop-ot a gombhoz
const Barberek = ({ onOpenAuth }) => {
  const barbers = [
    {
      id: 1,
      name: "Kovács Dávid",
      role: "Master Barber",
      desc: "10 év tapasztalattal a klasszikus vágások szakértője. A precizitás a védjegye, nála minden milliméter számít.",
      image: "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg" 
    },
    {
      id: 2,
      name: "Nagy Aliz",
      role: "Szakáll Specialista",
      desc: "Ha a szakállad rendbetételéről van szó, ő a te embered. Forró törölközős borotválásban verhetetlen.",
      image: "https://s.yimg.com/ny/api/res/1.2/ABv9asL4IBaRBtZ9zzZh1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzAwO2NmPXdlYnA-/https://media.zenfs.com/en/bang_showbiz_628/24d634077ef83b1e61a8e8cce1883aac"
    },
    {
      id: 3,
      name: "Szabó Péter",
      role: "Modern Stylist",
      desc: "A legújabb trendek követője. Ha valami extrémre vagy modern átmenetre vágysz, keresd Pétert.",
      image: "https://assets.fxnetworks.com/fx/950c40a9-c758-426a-a2f9-be192d3fc395.jpg" }
  ];

  return (
    <div className="barbers-container">
      <h2>Ismerd meg csapatunkat</h2>
      <p className="subtitle">A legjobb kezekben leszel nálunk. A legmodernebb felszereléssel és szakértelemmel várunk!
      </p>

      <div className="barbers-list">
        {barbers.map((barber) => (
          <div key={barber.id} className="barber-card">
            
            <div className="barber-image-wrapper">
              <img src={barber.image} alt={barber.name} className="barber-img" />
            </div>

            <div className="barber-info">
              <h3>{barber.name}</h3>
              <span className="role">{barber.role}</span>
              <p>{barber.desc}</p>
              
              {/* --- ÚJ GOMB --- */}
              {/* Ha rákattint, megnyitja a foglaló ablakot */}
              <button className="book-barber-btn" onClick={onOpenAuth}>
                Időpontfoglalás
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Barberek;