import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Lintubongausta
                </Typography>
                <Button component={Link} to="/" color="inherit">
                    Lista linnuista
                </Button>
                <Button component={Link} to="/add" color="inherit">
                    Lisää lintu
                </Button>
            </Toolbar>
        </AppBar>
    );
};
export default Header;