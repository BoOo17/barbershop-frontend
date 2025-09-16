import React from "react";

function Elérhetőségek() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Elérhetőségek</h1>
      <p style={styles.text}>📍 Cím: 1234 Budapest, Barbershop utca 5.</p>
      <p style={styles.text}>📞 Telefon: +36 30 123 4567</p>
      <p style={styles.text}>📧 Email: info@barbershop.hu</p>
      <p style={styles.text}>🕒 Nyitvatartás: H–P 9:00–19:00, Sz 10:00–15:00</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    textAlign: "center",
    gap: "10px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "18px",
  },
};

export default Elérhetőségek;
