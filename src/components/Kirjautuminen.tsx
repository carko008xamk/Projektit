import React, { useState } from 'react';
import './Kirjautuminen.css';


const Kirjautuminen = () => {
    const [kirjautunut, setKirjautunut] = useState(false);
    const [kayttajaTunnus, setKayttajaTunnus] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const tunnus = event.currentTarget.username.value;
        const salasana = event.currentTarget.password.value;
        if (tunnus === 'testi' && salasana === 'testi') {
            setKirjautunut(true);
            setKayttajaTunnus(tunnus);
        }
    };

    const handleLogout = () => {
        setKirjautunut(false);
        setKayttajaTunnus('');
    };

    if (kirjautunut) {
        return (
            <div className="Kirjautuminen">
                <p>Olet kirjautunut sisään tunnuksella: {kayttajaTunnus}</p>
                <button onClick={handleLogout}>Kirjaudu ulos</button>
            </div>
        );
    }

    return (
        <div className="Kirjautuminen">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Tunnus:
                    <input type="text" id="username" name="username" />
                </label>

                <label htmlFor="password">
                    Salasana:
                    <input type="password" id="password" name="password" />
                </label>

                <button type="submit">Kirjaudu</button>
            </form>
        </div>
    );
};

export default Kirjautuminen;
