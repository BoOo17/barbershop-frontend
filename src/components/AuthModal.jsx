import React, { useState } from "react";
import "./AuthModal.css";

function AuthModal({ isOpen, onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{isRegister ? "Fiók létrehozása" : "Bejelentkezés"}</h2>

        <form>
          {isRegister && (
            <div className="name-fields">
              <input type="text" placeholder="Vezetéknév" required />
              <input type="text" placeholder="Keresztnév" required />
            </div>
          )}
          <input type="email" placeholder="E-mail cím" required />
          <input type="password" placeholder="Jelszó" required />

          {isRegister && (
            <input type="password" placeholder="Jelszó megerősítése" required />
          )}

          <label className="checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Nem vagyok robot
          </label>

          <button type="submit" disabled={!isChecked}>
            {isRegister ? "Regisztráció" : "Belépés"}
          </button>
        </form>

        {!isRegister ? (
          <>
            <p className="forgot-password">Elfelejtett jelszó?</p>
            <p className="switch">
              Még nincs fiókod?{" "}
              <span onClick={() => setIsRegister(true)}>Regisztráció</span>
            </p>
          </>
        ) : (
          <p className="switch">
            Már van fiókod?{" "}
            <span onClick={() => setIsRegister(false)}>Bejelentkezés</span>
          </p>
        )}

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        
      </div>
    </div>
  );
}

export default AuthModal;
