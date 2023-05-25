import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LisaaAktiviteetti from './components/LisaaAktiviteetti';
import AktiviteettiLista from './components/AktiviteettiLista';

const App = () => {

  const [aktiviteetit, setAktiviteetit] = useState<{ id: number; aloitusAika: Date; lopetusAika: Date; kuvaus: string; }[]>([]);

  const handleDelete = (id: number) => {
    setAktiviteetit((prevAktiviteetit) => prevAktiviteetit.filter((aktiviteetti) => aktiviteetti.id !== id));
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<HomePage aktiviteetit={aktiviteetit} />} />
          <Route path="/lisaa-aktiviteetti" element={<LisaaAktiviteetti setAktiviteetit={setAktiviteetit} />} />
          <Route path="/aktiviteettilista" element={<AktiviteettiLista aktiviteetit={aktiviteetit} handleDelete={handleDelete} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
















