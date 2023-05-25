import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

interface Props {
    setAktiviteetit: React.Dispatch<React.SetStateAction<{ id: number; aloitusAika: Date; lopetusAika: Date; kuvaus: string; }[]>>;
}


const LisaaAktiviteetti = ({ setAktiviteetit }: Props) => {

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [kuvaus, setKuvaus] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!startDate || !endDate || !kuvaus) {
            alert('Kaikki aktiviteettiin liittyvät tiedot ovat pakollisia!');
            return;
        }
        if (startDate > new Date() || endDate > new Date()) {
            alert('Aktiviteetin alkamis- ja päättymisajankohtien on oltava nykyhetkessä tai aikaisemmin!');
            return;
        }
        const uusiAktiviteetti = {
            id: new Date().getTime(),
            aloitusAika: startDate,
            lopetusAika: endDate,
            kuvaus: kuvaus
        };
        setAktiviteetit((prevAktiviteetit) => [...prevAktiviteetit, uusiAktiviteetti]);
        setStartDate(new Date());
        setEndDate(new Date());
        setKuvaus('');
    };

    return (
        <div>
            <Typography variant="h2" align="center">Lisää aktiviteetti</Typography>

            <form onSubmit={handleSubmit}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={'fi'}>
                    <DateTimePicker
                        label="Aloitusaika"
                        value={startDate}
                        onChange={(date: Date | null) => setStartDate(date)}
                        ampm={false}
                        minutesStep={5}
                    />

                    <DateTimePicker
                        label="Lopetusaika"
                        value={endDate}
                        onChange={(date: Date | null) => setEndDate(date)}
                        ampm={false}
                        minutesStep={5}
                    />

                    <TextField
                        label="Aktiviteetin kuvaus"
                        value={kuvaus}
                        onChange={(event) => setKuvaus(event.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        variant="outlined"
                    />

                    <button type="submit">Lisää aktiviteetti</button>
                </LocalizationProvider>
            </form>
        </div>
    );
};

export default LisaaAktiviteetti;










