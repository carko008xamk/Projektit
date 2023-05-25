import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

type Cottage = {
  name: string;
  pricePerDay: number;
};

const cottages: Cottage[] = [
  { name: 'Mökki A', pricePerDay: 100 },
  { name: 'Mökki B', pricePerDay: 120 },
  { name: 'Mökki C', pricePerDay: 150 },
  { name: 'Mökki D', pricePerDay: 180 },
];

const MAX_STAY_DAYS = 14;
const CLEANING_FEE = 100;

const App = () => {
  const [cottage, setCottage] = useState<Cottage>(cottages[0]);
  const [stayDays, setStayDays] = useState(1);
  const [cleaningService, setCleaningService] = useState(false);
  const [name, setName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  const handleCottageChange = (event: SelectChangeEvent<string>) => {
    const selectedCottage = cottages.find(c => c.name === event.target.value);
    if (selectedCottage) {
      setCottage(selectedCottage);
    }
  };

  const handleStayDaysChange = (_event: any, newValue: number | number[]) => {
    setStayDays(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const handleCleaningServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCleaningService(event.target.checked);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleArrivalDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(event.target.value);
  };

  const totalFee = cottage.pricePerDay * stayDays + (cleaningService ? CLEANING_FEE : 0);

  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Box m={4}>
      <Typography variant="h4">Varaa lomamökki</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Select value={cottage.name} onChange={handleCottageChange} fullWidth>
            {cottages.map(c => (
              <MenuItem key={c.name} value={c.name}>
                {`${c.name} (${c.pricePerDay} € / vrk)`}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Typography id="stay-days-slider" gutterBottom>
            Majoittumisen kesto (vrk)
          </Typography>
          <Slider
            value={stayDays}
            onChange={handleStayDaysChange}
            min={1}
            max={MAX_STAY_DAYS}
            aria-labelledby="stay-days-slider"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox checked={cleaningService}
                onChange={handleCleaningServiceChange}
                color="primary"
              />
            }
            label={`Loppusiivouspalvelu (${CLEANING_FEE} €)`}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Varauksen kokonaishinta: {totalFee} €</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nimi"
            value={name}
            onChange={handleNameChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Saapumispäivä"
            value={arrivalDate}
            onChange={handleArrivalDateChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleDialogOpen}>
            Varaa mökki
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Varauksen yhteenveto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Mökki: {cottage.name}
            <br />
            Majoittumisen kesto: {stayDays} vrk
            <br />
            Loppusiivouspalvelu: {cleaningService ? 'kyllä' : 'ei'}
            <br />
            Kokonaishinta: {totalFee} €
            <br />
            Nimi: {name}
            <br />
            Saapumispäivä: {arrivalDate}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Peruuta</Button>
          <Button onClick={handleDialogClose} color="primary">
            Vahvista varaus
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;








