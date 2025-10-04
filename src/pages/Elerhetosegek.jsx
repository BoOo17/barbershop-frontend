import React from "react";
import "./elerhetosegek.css";

function Elerhetosegek() {
  return (
    <div className="elerhetosegek-container">
      <h1 className="elerhetosegek-title">Elérhetőségek</h1>
      <p className="elerhetosegek-text">📍 Cím: 1234 Budapest, Barbershop utca 5.</p>
      <p className="elerhetosegek-text">📞 Telefon: +36 30 123 4567</p>
      <p className="elerhetosegek-text">📧 Email: info@barbershop.hu</p>
      <p className="elerhetosegek-text">🕒 Nyitvatartás: H–P 9:00–19:00, Sz 10:00–15:00</p>
    </div>
  );
}

export default Elerhetosegek;
