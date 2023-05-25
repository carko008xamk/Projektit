import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    PuhtaanapitoPlus Oy
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
                    <Button color="inherit" component={Link} to="/cleaning-list" sx={{ fontSize: "1.2rem" }}>Etusivu</Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "30%" }}>
                    <Button color="inherit" component={Link} to="/nearestoffice" sx={{ fontSize: "1.2rem" }}>Meistä</Button>
                </Box>
                <Button color="inherit" component={Link} to="/statistics" sx={{ fontSize: "1.2rem" }}>Tilauslomake</Button>
            </Toolbar>
        </AppBar >
    );
};

export default Header;