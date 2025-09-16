import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Oldalak importálása
import Főoldal from "./pages/Főoldal";
import Barberek from "./pages/Barberek";
import Szolgáltatások from "./pages/Szolgáltatások";
import Képek from "./pages/Képek";
import Rólunk from "./pages/Rólunk";
import Elérhetőségek from "./pages/Elérhetőségek";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Főoldal />} />
        <Route path="/barberek" element={<Barberek />} />
        <Route path="/szolgaltatasok" element={<Szolgáltatások />} />
        <Route path="/kepek" element={<Képek />} />
        <Route path="/rolunk" element={<Rólunk />} />
        <Route path="/elerhetosegek" element={<Elérhetőségek />} />
      </Routes>
    </Router>
  );
}

export default App;
