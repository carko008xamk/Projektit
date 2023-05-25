import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { Bird } from '../types/bird';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers';
import fiLocale from 'date-fns/locale/fi';

interface Props {
    birds: Bird[];
    onEditBird: (id: string, bird: Bird) => void;
}

export const EditBird: React.FC<Props> = ({ birds, onEditBird }) => {
    const { id } = useParams<{ id: string }>();
    const bird = birds.find((b) => b.uniqueId === id);

    const [species, setSpecies] = React.useState<string>(bird?.species ?? '');
    const [location, setLocation] = React.useState<string>(bird?.location ?? '');
    const [date, setDate] = React.useState<Date>(bird?.date ?? new Date());
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (bird) {
            const editedBird: Bird = {
                uniqueId: bird.uniqueId,
                species: species,
                location: location,
                date: new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()),
            };
            onEditBird(bird.uniqueId, editedBird);
            navigate('/');
        }
    };

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Muokkaa
            </Typography>
            {bird ? (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField label="Havaittu lintulaji" value={species} onChange={(e) => setSpecies(e.target.value)} fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Havainnon paikka" value={location} onChange={(e) => setLocation(e.target.value)} fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={fiLocale}>
                                <DateTimePicker label="Havainnon päivämäärä ja kellonaika" value={date} onChange={(newDate: Date | null) => setDate(newDate || date)} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                                Tallenna
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            ) : (
                <Typography variant="body1">Lintua ei löydy</Typography>
            )}
        </>
    );
};

export default EditBird;

