import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import AuthModal from './components/AuthModal';

import Főoldal from './pages/Főoldal';
import Szolgáltatások from './pages/Szolgáltatások';
import Barberek from './pages/Barberek';
import Képek from './pages/Képek';
import Rolunk from './pages/Rolunk';
import Elerhetosegek from './pages/Elerhetosegek';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header onOpenAuth={openModal} />

      {isModalOpen && <AuthModal onClose={closeModal} />}

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