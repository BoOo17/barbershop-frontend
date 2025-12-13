import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Űrlap adatok tárolása
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Hibaüzenet tárolása (ha nem egyezik a jelszó)
  const [error, setError] = useState('');

  // Mezők változásának kezelése
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Ha ír a felhasználó, töröljük a korábbi hibaüzenetet
    setError('');
  };

  // Beküldés kezelése
  const handleSubmit = (e) => {
    e.preventDefault(); // Ne töltődjön újra az oldal

    // Ha regisztráció van, ellenőrizzük a jelszavakat
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError('A két jelszó nem egyezik meg!');
        return; // Itt megáll a futás, nem enged tovább
      }
    }

    // Ha minden oké, itt történne a backend hívás
    console.log('Sikeres űrlap küldés:', formData);
    alert('Sikeres művelet!');
    onClose();
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h2>{isLogin ? 'Bejelentkezés' : 'Regisztráció'}</h2>
        
        <p>
          {isLogin 
            ? 'Jelentkezz be az időpontfoglaláshoz!' 
            : 'Add meg adataidat a regisztrációhoz!'}
        </p>

        {/* HIBAÜZENET MEGJELENÍTÉSE */}
        {error && <div className="error-message">{error}</div>}
        
        <form className="auth-form" onSubmit={handleSubmit}>
          
          {/* --- CSAK REGISZTRÁCIÓNÁL --- */}
          {!isLogin && (
            <>
              <div className="name-row">
                <div className="form-group">
                  <label>Vezetéknév</label>
                  <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Kovács" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Keresztnév</label>
                  <input 
                    type="text" 
                    name="firstname" 
                    placeholder="János" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Telefonszám</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+36 30 123 4567" 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </>
          )}

          {/* --- KÖZÖS MEZŐK --- */}
          <div className="form-group">
            <label>Email cím</label>
            <input 
              type="email" 
              name="email" 
              placeholder="pelda@email.com" 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Jelszó</label>
            <input 
              type="password" 
              name="password" 
              placeholder="********" 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* JELSZÓ MEGERŐSÍTÉS (Csak regisztrációnál) */}
          {!isLogin && (
            <div className="form-group">
              <label>Jelszó megerősítése</label>
              <input 
                type="password" 
                name="confirmPassword" 
                placeholder="********" 
                onChange={handleChange} 
                required 
                style={{ borderColor: error ? 'red' : '#ccc' }}
              />
            </div>
          )}
          
          <button type="submit" className="login-btn">
            {isLogin ? 'Belépés' : 'Regisztráció'}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? 'Még nincs fiókod?' : 'Már van fiókod?'} 
          <span className="link" onClick={switchMode}>
            {isLogin ? ' Regisztráció' : ' Belépés'}
          </span>
        </p>

      </div>
    </div>
  );
};

export default AuthModal;