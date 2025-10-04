import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Oldalak importálása
import Főoldal from "./pages/Főoldal";
import Barberek from "./pages/Barberek";
import Szolgáltatások from "./pages/Szolgáltatások";
import Kepek from "./pages/Kepek";
import Rolunk from "./pages/Rolunk";
import Elerhetosegek from "./pages/Elerhetosegek";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Főoldal />} />
        <Route path="/barberek" element={<Barberek />} />
        <Route path="/szolgaltatasok" element={<Szolgáltatások />} />
        <Route path="/kepek" element={<Kepek />} />
        <Route path="/rolunk" element={<Rolunk />} />
        <Route path="/elerhetosegek" element={<Elerhetosegek />} />
      </Routes>
    </Router>
  );
}

export default App;

