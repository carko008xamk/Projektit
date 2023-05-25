import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { Bird } from '../types/bird';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    onAddBird: (bird: Bird) => void;
}

export const AddBird: React.FC<Props> = ({ onAddBird }) => {
    const [species, setSpecies] = React.useState('');
    const [location, setLocation] = React.useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const uniqueId = uuidv4();

        const newBird: Bird = {
            uniqueId: uniqueId,
            species: species,
            location: location,
            date: new Date(),

        };

        onAddBird(newBird);
        navigate('/');
    };


    return (
        <>
            <Typography variant="h4" gutterBottom>
                Lisää lintuhavainto
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Havaittu lintulaji" value={species} onChange={(e) => setSpecies(e.target.value)} fullWidth />
                <TextField label="Havainnon paikka" value={location} onChange={(e) => setLocation(e.target.value)} fullWidth />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Lisää lintu
                </Button>
            </form>
        </>
    );
};
export default AddBird;

