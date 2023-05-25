import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Button,
    Container,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';

import './Ilmoittaudu.css';

const Ilmoittaudu: React.FC = () => {
    // React Routerin hookki, jolla navigointi tapahtuu
    const navigate = useNavigate();
    // Hookit, joilla komponentti reagoi käyttäjän syötteisiin 
    const [etunimi, setEtunimi] = React.useState('');
    const [sukunimi, setSukunimi] = React.useState('');
    const [asuinpaikka, setAsuinpaikka] = React.useState('');
    const [puhelinnumero, setPuhelinnumero] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [ikasarja, setIkasarja] = React.useState('');

    // handleChange funktioita, joiden tarkoitus on muuttaa tilaa käyttäjän syötteiden perusteella 
    const handleEtunimiChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setEtunimi(event.target.value);
    };

    const handleSukunimiChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSukunimi(event.target.value);
    };

    const handleAsuinpaikkaChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAsuinpaikka(event.target.value);
    };

    const handlePuhelinnumeroChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPuhelinnumero(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleIkasarjaChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIkasarja(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // tarkistetaan, että ikäsarja on valittu ja navigoidaan kiitossivulle välittäen ilmoittautumislomakkeen tiedot propsina
        if (ikasarja.length > 0) {
            navigate('/kiitos', {
                state: {
                    etunimi,
                    sukunimi,
                    asuinpaikka,
                    puhelinnumero,
                    email,
                    ikasarja,
                },
            });
        } else {
            // jos ikäsarjaa ei ole valittu, ilmoitetaan käyttäjälle alert-ikkunalla 
            alert('Valitse ikäsarja');
        }
    };

    // tarkistetaan onko puh.nro syötetty oikein 
    const isPhoneNumberValid = () => {
        if (email.length === 0) {
            return puhelinnumero.length >= 10 && puhelinnumero.length <= 15;
        } else {
            return true;
        }
    };
    // tarkistetaan onko sähköposti syötetty oikein 
    const isEmailValid = () => {
        if (puhelinnumero.length === 0) {
            return email.length > 0 && /\S+@\S+\.\S+/.test(email);
        } else {
            return true;
        }
    };
    // Tarkistetaan, että etu- ja sukunimi ovat syötetty oikein
    const isNameValid = () => {
        return etunimi.length >= 2 && sukunimi.length >= 2;
    };
    // Lomakkeen renderöinti, jossa käytetään MUI-kirjaston komponentteja
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Ilmoittaudu kilpailuun
            </Typography>
            <form onSubmit={handleSubmit} className="form-container">
                <TextField
                    id="etunimi"
                    label="Etunimi"
                    value={etunimi}
                    onChange={handleEtunimiChange}
                    required
                    helperText={etunimi.length < 2 ? 'Etunimi vaatii vähintään 2 merkkiä' : ''}
                    className="form-field"
                />
                <TextField
                    id="sukunimi"
                    label="Sukunimi"
                    value={sukunimi}
                    onChange={handleSukunimiChange}
                    required
                    helperText={sukunimi.length < 2 ? 'Sukunimi vaatii vähintään 2 merkkiä' : ''}
                    className="form-field"
                />
                <TextField
                    id="asuinpaikka"
                    label="Asuinpaikkakunta"
                    value={asuinpaikka}
                    onChange={handleAsuinpaikkaChange}
                    className="form-field"
                />
                <TextField
                    id="puhelinnumero"
                    label="Puhelinnumero"
                    value={puhelinnumero}
                    onChange={handlePuhelinnumeroChange}
                    required={!isEmailValid()}
                    className="form-field"
                />
                <TextField
                    id="email"
                    label="Sähköposti"
                    value={email}
                    onChange={handleEmailChange}
                    required={!isPhoneNumberValid()}
                    className="form-field"
                />
                <RadioGroup
                    aria-label="ikä"
                    name="ikasarja"
                    value={ikasarja}
                    onChange={handleIkasarjaChange}
                    className="form-field"
                >
                    <Typography variant="h6" gutterBottom>
                        Ikäsarja
                    </Typography>
                    <FormControlLabel
                        value="alle 15 vuotiaat"
                        control={<Radio />}
                        label="Alle 15-vuotiaat"
                    />
                    <FormControlLabel
                        value="15 – 19 vuotiaat"
                        control={<Radio />}
                        label="15 - 19-vuotiaat"
                    />
                    <FormControlLabel
                        value="20 – 39 vuotiaat"
                        control={<Radio />}
                        label="20 - 39-vuotiaat"
                    />
                    <FormControlLabel
                        value="40 – 59 vuotiaat"
                        control={<Radio />}
                        label="40 - 59-vuotiaat"
                    />
                    <FormControlLabel
                        value="60 – 69 vuotiaat"
                        control={<Radio />}
                        label="60 - 69-vuotiaat"
                    />
                    <FormControlLabel
                        value="70 – 79 vuotiaat"
                        control={<Radio />}
                        label="70 - 79-vuotiaat"
                    />
                    <FormControlLabel
                        value="yli 80 vuotiaat"
                        control={<Radio />}
                        label="Yli 80-vuotiaat"
                    />
                </RadioGroup>
                <br />
                <Button variant="contained" color="primary" type="submit" className="form-button">
                    Lähetä ilmoittautuminen
                </Button>
            </form>
        </Container>
    );
}
export default Ilmoittaudu;




