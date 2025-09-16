import React from "react";
import "./Barberek.css";

function Barberek() {
  return (
    <div className="barberek-container">
      <h1>Barbereink</h1>

      <div className="barber-list">
        <div className="barber-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrbvNVuNqSgOV40lU87fzDYG7A_vXPzUbGw&s" alt="Barber 1" />
          <h2>Kiss Péter</h2>
          <p>Specialitás: Különleges hajstílusok specialistája</p>
        </div>

        <div className="barber-card">
          <img src="https://i.pinimg.com/280x280_RS/8a/99/c8/8a99c85c8d6238f2c7cb86cd838032aa.jpg" alt="Barber 2" />
          <h2>Nagy Dávid</h2>
          <p>Specialitás: Modern frizurák</p>
        </div>

        <div className="barber-card">
          <img src="https://i1.sndcdn.com/artworks-YtpVUM4LQl1ECgyW-yrzxNA-t500x500.jpg" alt="Barber 3" />
          <h2>Lakatos Brendon</h2>
          <p>Specialitás: Legkomolyabb pacekok</p>
        </div>
      </div>
    </div>
  );
}

export default Barberek;
