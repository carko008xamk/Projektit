import React, { useState } from 'react';
import './App.css';

function App() {
  // useState hookeilla luodaan tilamuuttujat komponentin tilan hallintaan
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiDescription, setBmiDescription] = useState<string>('');

  // calculateBmi on funktio, joka laskee painoindeksin käyttäen komponentin tilamuuttujia
  const calculateBmi = () => {
    // lasketaan pituus metreinä, jakamalla arvo 100:lla
    const heightInMeters = height / 100;
    // lasketaan painoindeksi
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    // Pyöristetään painoindeksi kahden desimaalin tarkkuuteen
    setBmi(Math.round(calculatedBmi * 100) / 100);

    if (calculatedBmi < 18.5) {
      setBmiDescription('Alipaino');

    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      setBmiDescription('Normaali paino');


    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      setBmiDescription('Lievä ylipaino');

    } else if (calculatedBmi >= 30 && calculatedBmi <= 34.9) {
      setBmiDescription('Merkittävä ylipaino');

    } else if (calculatedBmi >= 35 && calculatedBmi <= 39.9) {
      setBmiDescription('Vaikea ylipaino');

    } else if (calculatedBmi >= 40) {
      setBmiDescription('Sairaalloinen ylipaino');
    }
  };
  // tapahtumankäsittelijä, joka asettaa uuden pituuden tilamuuttujaan, kun muutos tapahtuu
  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  };
  // tapahtumankäsittelija, joka asettaa uuden painon tilamuuttujaan, kun muutos tapahtuu
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
  };
  // funktio, joka palauttaa värin BMI-luokituksen mukaan
  const getBmiColor = (bmi: number | null): string => {
    // jos BMI arvo on null, ei palauteta mitään väriä 
    if (!bmi) return '';
    // palautetaan väri BMI-luokituksen mukaan 
    if (bmi < 18.5) {
      return 'red';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'green';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="height">Pituus (cm):</label>
        <input type="number" id="height" value={height} onChange={handleHeightChange} />
      </div>
      <div>
        <label htmlFor="weight">Paino (kg):</label>
        <input type="number" id="weight" value={weight} onChange={handleWeightChange} />
      </div>
      <button onClick={calculateBmi}>Laske painoindeksi</button>
      {bmi && (
        <div className="bmi-result" style={{ backgroundColor: getBmiColor(bmi) }}>
          <p>Painoindeksisi on: {bmi}</p>
          <p>{bmiDescription}</p>
        </div>
      )}
    </div>
  );
}

export default App;
