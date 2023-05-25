// Tuodaan React-kirjasto
import React from 'react';
// Tuodaan tarvittavat komponentit React-Router kirjastosta
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// Tuodaan tarvittavat komponenti MUI-kirjastosta
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// Komponenttien tuonnit
import Aloitus from './components/Aloitus';
import Saannot from './components/Saannot';
import Ilmoittaudu from './components/Ilmoittaudu';
import Kiitos from './components/Kiitos';

// Määritellään yhteinen tyyliobjekti kaikille napin komponenteille
const buttonStyle = { fontSize: '18px' };

const App: React.FC = () => {
  return (
    // Reitityskomponentti
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button sx={buttonStyle} color="inherit" component={Link} to="/">Vantaanjoen pilkkikilpailut</Button>
          </Typography>
          <Button sx={buttonStyle} color="inherit" component={Link} to="/saannot">Säännöt</Button>
          <Button sx={buttonStyle} color="inherit" component={Link} to="/ilmoittaudu">Ilmoittaudu</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Aloitus />} />
        <Route path="/saannot" element={<Saannot />} />
        <Route path="/ilmoittaudu" element={<Ilmoittaudu />} />
        <Route path="/kiitos" element={<Kiitos />} />
      </Routes>
    </Router>
  );
}

export default App;














