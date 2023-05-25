import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Saatilanne from "./Saatilanne";
import SaaEnnuste from "./Ennuste";

const App = () => {
  const [kaupunki, setKaupunki] = useState("mikkeli");

  return (
    <Router>
      <Header kaupunki={kaupunki} setKaupunki={setKaupunki} />
      <Routes>
        <Route path="/" element={<Saatilanne kaupunki={kaupunki} />} />
        <Route path="/ennuste" element={<SaaEnnuste kaupunki={kaupunki} />} />
      </Routes>
    </Router>
  );
};

export default App;

