import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                <Button color="inherit" component={Link} to="/" className="left-link">
                    <Typography variant="h6" style={{ fontSize: "1.2rem" }}>Etusivu</Typography>
                </Button>
                <Button color="inherit" component={Link} to="/lisaa-aktiviteetti" className="center-link">
                    <Typography variant="h6" style={{ fontSize: "1.2rem" }}>Lisää aktiviteetti</Typography>
                </Button>
                <Button color="inherit" component={Link} to="/aktiviteettilista" className="right-link">
                    <Typography variant="h6" style={{ fontSize: "1.2rem" }}>Aktiviteettilista</Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

