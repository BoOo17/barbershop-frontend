// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

// Komponensek
import Header from './components/Header';
import AuthModal from './components/AuthModal';

// Oldalak importálása
// Figyelem: A fájlneveknek pontosan egyezniük kell a mappa tartalmával!
import Főoldal from './pages/Főoldal';
import Szolgáltatások from './pages/Szolgáltatások';
import Barberek from './pages/Barberek';
import Képek from './pages/Képek';
import Rolunk from './pages/Rolunk';
import Elerhetosegek from './pages/Elerhetosegek';

function App() {
  // 1. Állapot a Modál kezelésére (Alapértelmezés: zárva / false)
  const [isModalOpen, setModalOpen] = useState(false);

  // Segédfüggvények a nyitáshoz és záráshoz
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // 2. Scroll Animáció (IntersectionObserver)
  // Ez figyeli, hogy mikor érünk egy szekcióhoz, és ráteszi a 'show' osztályt
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    // Minden .hidden osztályú elemet figyelünk
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Takarítás kilépéskor
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* FEJLÉC: Átadjuk neki az 'openModal' függvényt 'onOpenAuth' néven.
        Így ha a fejlécben az ikonra kattintasz, megnyílik az ablak.
      */}
      <Header onOpenAuth={openModal} />

      {/* MODÁL (Pop-up): 
        Csak akkor rendereljük ki, ha az isModalOpen értéke IGAZ.
        Fontos: A section-ökön KÍVÜL van, hogy a z-index miatt mindent eltakarjon.
      */}
      {isModalOpen && <AuthModal onClose={closeModal} />}

      {/* --- SZEKCIÓK --- */}
      {/* Minden section kapott egy id-t a menü hivatkozáshoz és egy 'hidden' osztályt az animációhoz */}

      <section id="fooldal" className="hidden">
        <Főoldal onOpenAuth={openModal} />
      </section>

      <section id="rolunk" className="hidden">
        <Rolunk />
      </section>

      <section id="szolgaltatasok" className="hidden">
        <Szolgáltatások />
      </section>

      <section id="barberek" className="hidden">
        <Barberek onOpenAuth={openModal} />
      </section>

      <section id="kepek" className="hidden">
        <Képek />
      </section>

      <section id="elerhetosegek" className="hidden">
        <Elerhetosegek />
      </section>

    </div>
  );
}

export default App;