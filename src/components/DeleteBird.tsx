import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface Props {
    onDeleteBird: (uniqueId: string) => void;
}

export const DeleteBird: React.FC<Props> = ({ onDeleteBird }) => {
    const { uniqueId } = useParams<{ uniqueId: string }>();
    const navigate = useNavigate();

    const handleDelete = () => {
        onDeleteBird(uniqueId ?? '');
        navigate('/');
    };

    const handleClose = () => {
        navigate('/');
    };

    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Halutko varmasti poistaa linnun?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Huomaa, että poistettua lintuhavaintoa ei voi palauttaa takaisin.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Peruuta</Button>
                <Button onClick={handleDelete} color="error" variant="contained">
                    Poista
                </Button>
            </DialogActions>
        </Dialog>
    );
};

