// src/pages/Képek.jsx
import React, { useState } from 'react';
import './Képek.css';

const Képek = () => {
  // Ez tárolja, hogy épp melyik barber ID-ja van kiválasztva.
  // Ha null, akkor senkié nincs nyitva.
  const [activeBarber, setActiveBarber] = useState(null);

  // ADATOK (Itt állítsd be a saját képeket később)
  const galleryData = [
    {
      id: 1,
      name: "Dávid",
      avatar: "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg",
      works: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
      ]
    },
    {
      id: 2,
      name: "Aliz",
      avatar: "https://s.yimg.com/ny/api/res/1.2/ABv9asL4IBaRBtZ9zzZh1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzAwO2NmPXdlYnA-/https://media.zenfs.com/en/bang_showbiz_628/24d634077ef83b1e61a8e8cce1883aac",
      works: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
      ]
    },
    {
      id: 3,
      name: "Péter",
      avatar: "https://assets.fxnetworks.com/fx/950c40a9-c758-426a-a2f9-be192d3fc395.jpg",
      works: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4XfTrBiNfiJlONH-_Kfk_64Azugu13TUrQ&s",
      ]
    }
  ];

  // Ez a függvény fut le kattintáskor
  const toggleGallery = (id) => {
    if (activeBarber === id) {
      setActiveBarber(null); // Ha már nyitva volt, bezárjuk
    } else {
      setActiveBarber(id); // Kinyitjuk az újat (a többi automatikusan bezáródik)
    }
  };

  return (
    <div className="gallery-container">
      <h2>Munkáink</h2>
      <p className="subtitle">Válassz egy borbélyt a referencia munkák megtekintéséhez!</p>

      {/* 1. A VÁLASZTÓ FEJLÉC (Borbélyok fejei) */}
      <div className="barber-selectors">
        {galleryData.map((barber) => (
          <div 
            key={barber.id} 
            className={`selector-item ${activeBarber === barber.id ? 'active' : ''}`}
            onClick={() => toggleGallery(barber.id)}
          >
            <div className="img-ring">
              <img src={barber.avatar} alt={barber.name} />
            </div>
            <span className="selector-name">{barber.name}</span>
            {/* Kis nyíl lefelé, ha aktív */}
            {activeBarber === barber.id && <div className="arrow-down"></div>}
          </div>
        ))}
      </div>

      {/* 2. A LENYÍLÓ GALÉRIA ABLAK */}
      <div className="gallery-display-area">
        {galleryData.map((barber) => (
          // Csak akkor jelenítjük meg, ha ő az aktív
          activeBarber === barber.id && (
            <div key={barber.id} className="portfolio-grid fade-in">
              {barber.works.map((imgUrl, index) => (
                <div key={index} className="portfolio-item">
                  <img src={imgUrl} alt={`Work by ${barber.name}`} />
                </div>
              ))}
            </div>
          )
        ))}
        
        {/* Ha nincs senki kiválasztva, kiírhatunk valamit (opcionális) */}
        {!activeBarber && (
          <p className="placeholder-text">Kattints az egyik barberunkra fentről!</p>
        )}
      </div>

    </div>
  );
};

export default Képek;