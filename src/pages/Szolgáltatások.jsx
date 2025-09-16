import React from "react";
import "./Szolgáltatások.css";

function Szolgaltatasok() {
  return (
    <div className="services-container">
      <h1>Szolgáltatások</h1>

      <div className="services-table">
        <div className="service-row">
          <span className="service-name">Hajvágás</span>
          <span className="service-price">4500 Ft</span>
        </div>
        <div className="service-row">
          <span className="service-name">Szakáll vágás</span>
          <span className="service-price">3000 Ft</span>
        </div>
        <div className="service-row">
          <span className="service-name">Szakáll + Hajvágás</span>
          <span className="service-price">7000 Ft</span>
        </div>
        <div className="service-row">
          <span className="service-name">Hajfestés</span>
          <span className="service-price">3500 Ft</span>
        </div>
        <div className="service-row">
          <span className="service-name">Igazítás</span>
          <span className="service-price">2000 Ft</span>
        </div>
      </div>
    </div>
  );
}

export default Szolgaltatasok;
