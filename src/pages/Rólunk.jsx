import React from "react";

function Rólunk() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Rólunk</h1>
      <p style={styles.text}>
        Mi vagyunk a Barbershop csapata 💈. Professzionális hajvágással és borotválással várjuk vendégeinket.
      </p>
      <p style={styles.text}>
        Küldetésünk, hogy minden vendég magabiztosan és stílusosan távozzon tőlünk.
      </p>
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
    gap: "15px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "18px",
    maxWidth: "600px",
    lineHeight: "1.5",
  },
};

export default Rólunk;
