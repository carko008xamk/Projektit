import React from 'react';
import pilkki from './pilkki.jpg';
import './Aloitus.css';

const Aloitus: React.FC = () => {
    return (
        <div className="aloitus-container">
            <div className="aloitus-image">
                <img src={pilkki} alt="Pilkkimiskuva" />
            </div>
            <div className="aloitus-text">
                <h1>Tervetuloa pilkkimään Vantaanjoelle!</h1>
                <p>Kilpailu järjestetään 1.3.2023 klo 12-15 Vantaanjoella.</p>
                <p>Osallistu Vantaanjoen perinteiseen pilkkikilpailuun ja nappaa upeat palkinnot! Kilpailuaika on kolme tuntia ja sallittu kalalaji on ahven. Osallistumismaksu on 20 €, ja sen voi maksaa paikan päällä ennen kilpailun alkua. Kilpailualueena toimii kaunis Valkiajärvi, jossa on hyvät kalastusmahdollisuudet. Tule siis mukaan ja nauti talvisesta luonnosta!</p>
            </div>
        </div>
    );
}

export default Aloitus;
