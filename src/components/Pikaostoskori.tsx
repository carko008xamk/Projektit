import React from 'react';
import './Pikaostoskori.css';

interface PikaostoskoriProps {
    ostoskori: { maara: number, loppusumma: number }
}

function Pikaostoskori({ ostoskori }: PikaostoskoriProps) {
    const handleClick = () => {
        alert("Jatketaan tilaukseen...");
    }

    return (
        <div className="pikaostoskori-container">
            <h2>Ostoskori</h2>
            {ostoskori.maara > 0 ?
                <div>
                    <p>Ostoskorissa on {ostoskori.maara} tuotetta, loppusumma {ostoskori.loppusumma.toFixed(2)} €</p>
                    <button onClick={handleClick}>Tilaa tuotteet</button>
                </div> :
                <p>Ostoskorissa ei ole tuotteita</p>
            }
        </div>
    );
}

export default Pikaostoskori;

















