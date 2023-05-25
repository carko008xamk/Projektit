// Tuodaan tarvittavat kirjastot
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
import './Kiitos.css';

// Määritetään komponentti Kiitos
const Kiitos: React.FC = (): React.ReactElement => {

    // Käytetään "useLocation" hookkia saadaksemme pääsyn nykyiseen sijaintiin 
    const location = useLocation();
    // Puretaan sivulle siirretyt tiedot käyttämällä "location" -muuttujaa 
    const { etunimi, sukunimi, asuinpaikka, puhelinnumero, email, ikasarja } = location.state;
    // Luodaan uusi MUI-teema
    const theme = createTheme({
        typography: {
            fontSize: 16,
            fontFamily: [
                'Arial',
                'sans-serif',
            ].join(','),
            h6: {
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginTop: '10px',
                marginBottom: '10px',
            },
            body1: {
                fontSize: '1rem',
                marginTop: '10px',
                marginBottom: '10px',
            },
        },
    });
    // Palautetaan JSX-elementit
    return (
        <ThemeProvider theme={theme}>
            <Container className="container">
                <Typography variant="h6">Kiitos osallistumisestasi</Typography>
                <Typography variant="body1">
                    Ilmoittautumisesi tiedot: <br />
                    Etunimi: {etunimi} <br />
                    Sukunimi: {sukunimi} <br />
                    Asuinpaikka: {asuinpaikka} <br />
                    Puhelinnumero: {puhelinnumero} <br />
                    Sähköposti: {email} <br />
                    Ikäsarja: {ikasarja}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/"
                    sx={{
                        borderRadius: '20px',
                        backgroundColor: '#000000',
                        color: '#8cb8ff',
                        marginTop: '20px',
                        textTransform: 'uppercase',
                        '&:hover': {
                            backgroundColor: '#333333',
                        },
                    }}
                >
                    Takaisin etusivulle
                </Button>
            </Container>
        </ThemeProvider>
    );
}

export default Kiitos;

