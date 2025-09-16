import React, { useState } from "react";
import "./Főoldal.css";
import AuthModal from "../components/AuthModal";

function Főoldal() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleBookingClick = () => {
    setPopupVisible(true);
  };

  return (
    <div className="home-container">
      <h1>Üdvözlünk a BarberShopban!</h1>

      <div className="buttons">
        <button className="main-btn" onClick={handleBookingClick}>
          Foglalj időpontot
        </button>
        <button className="secondary-btn" onClick={handleBookingClick}>
          Időpont lemondása
        </button>
      </div>

      {/* Piros popup overlay */}
      {popupVisible && (
        <div
          className="popup-overlay"
          onClick={() => setPopupVisible(false)}
        >
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()} // megakadályozza, hogy a belső kattintás bezárja
          >
            <p>Bejelentkezés szükséges!</p>
            <span
              className="popup-login"
              onClick={() => {
                setPopupVisible(false);
                setAuthModalOpen(true);
              }}
            >
              Bejelentkezés
            </span>
          </div>
        </div>
      )}

      {/* AuthModal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
}

export default Főoldal;
