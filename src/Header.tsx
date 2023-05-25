import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, TextField } from "@mui/material";

interface HeaderProps {
    kaupunki: string;
    setKaupunki: (kaupunki: string) => void;
}

const Header = ({ setKaupunki }: HeaderProps) => {
    const [syote, setSyote] = useState("");


    const handleSyoteMuutos = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSyote(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validKaupunki = syote.replace(/[åäö]/gi, (char) => {
            if (char === "å" || char === "ä") {
                return "a";
            } else if (char === "ö") {
                return "o";
            }
            return char;
        });
        setKaupunki(validKaupunki);
        setSyote("");
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Sääsovellus
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
                    <Button color="inherit" component={Link} to="/" sx={{ fontSize: "1.2rem" }}>
                        Aloitusnäkymä
                    </Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "20%" }}>
                    <Button color="inherit" component={Link} to="/ennuste" sx={{ fontSize: "1.2rem" }}>
                        Ennuste
                    </Button>
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Paikkakunta"
                        variant="outlined"
                        size="small"
                        value={syote}
                        onChange={handleSyoteMuutos}
                        sx={{ mr: 1 }}
                    />
                    <Button type="submit" variant="contained" sx={{ fontSize: "1.2rem" }}>
                        Vaihda kaupunkia
                    </Button>
                </form>
            </Toolbar>
        </AppBar>
    );
};


export default Header;



