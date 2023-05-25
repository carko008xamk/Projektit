import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Etusivu from './components/Etusivu';
import SiivousLomake from './components/SiivousLomake';
import LahinToimipiste from './components/NearestOffice';
import Footer from './components/Footer';

export type Task = {
  id: number;
  name: string;
  category: string;
  completed: boolean;
};

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Container maxWidth="md" sx={{ pt: 4 }}>
            <Routes>
              <Route path="/" element={<Etusivu />} />
              <Route path="/cleaning-list" element={<Etusivu />} />
              <Route path="/statistics" element={<SiivousLomake />} />
              <Route path="/nearestoffice" element={<LahinToimipiste />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </div >
  );
}

export default App;


