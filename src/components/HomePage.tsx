import React from 'react';
import Typography from '@mui/material/Typography';
import sportimage from './sport.jpg';

const HomePage = ({ aktiviteetit }: { aktiviteetit: { aloitusAika: Date; lopetusAika: Date }[] }) => {
    const yhteisAikaMinuutteina = aktiviteetit.reduce((acc, curr) => acc + ((curr.lopetusAika.getTime() - curr.aloitusAika.getTime()) / 1000 / 60), 0);
    const tunti = Math.floor(yhteisAikaMinuutteina / 60);
    const minuutti = yhteisAikaMinuutteina % 60;
    const yhteisAika = `${tunti} tuntia ja ${minuutti} minuuttia`;

    const seitsemanPaivaaSitten = new Date();
    seitsemanPaivaaSitten.setDate(seitsemanPaivaaSitten.getDate() - 7);

    const yhteisAikaMinuutteinaViimeiselta7Paivalta = aktiviteetit
        .filter(a => a.lopetusAika >= seitsemanPaivaaSitten)
        .reduce((acc, curr) => acc + ((curr.lopetusAika.getTime() - curr.aloitusAika.getTime()) / 1000 / 60), 0);

    const yhteisAikaViimeiselta7Paivalta = `${Math.floor(yhteisAikaMinuutteinaViimeiselta7Paivalta / 60)} tuntia ja ${yhteisAikaMinuutteinaViimeiselta7Paivalta % 60} minuuttia`;

    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h1" align="center">Liikuntapäiväkirja</Typography>
            <img src={sportimage} alt="liikunta" style={{ width: "50%", height: "auto", marginBottom: "16px" }} />
            <Typography variant="h3" align="center">Tästä voit seurata yhteenvetoa aktiviteetteihin käytetystä yhteisajasta</Typography>
            <Typography variant="h4" align="center">Yhteensä {yhteisAika} käytetty aikaa liikuntaan</Typography>
            <Typography variant="h4" align="center">Viimeisen 7 vuorokauden aikana käytetty aika: {yhteisAikaViimeiselta7Paivalta}</Typography>
        </div>
    );
};

export default HomePage;



