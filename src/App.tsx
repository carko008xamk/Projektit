import React, { useState } from 'react';
import './App.css';
import VerkkokauppaHeader from './components/VerkkokauppaHeader';
import VerkkokauppaFooter from './components/VerkkokauppaFooter';
import Tuotenostot from './components/Tuotenostot';
import Kirjautuminen from './components/Kirjautuminen';
import Pikaostoskori from './components/Pikaostoskori';

function App() {
  const [ostoskori, setOstoskori] = useState({ maara: 0, loppusumma: 0 });

  return (
    <div className="verkkokauppa">
      <VerkkokauppaHeader />
      <div className="verkkokauppa-content">
        <Tuotenostot setOstoskori={setOstoskori} ostoskori={ostoskori} />
        <div className="kirjautuminen-container">
          <Kirjautuminen />
        </div>
        <div className='verkkokauppa-container'>
          <Pikaostoskori ostoskori={ostoskori} />
        </div>
      </div>
      <VerkkokauppaFooter />
    </div>
  );
}

export default App;






