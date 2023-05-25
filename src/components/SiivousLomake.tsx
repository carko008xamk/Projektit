import React, { ChangeEvent, useState } from "react";
import './SiivousLomake.css';
import {
    Box,
    FormControlLabel,
    FormGroup,
    Select,
    MenuItem,
    Slider,
    Checkbox,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Tooltip,
} from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import Grid from "@mui/material/Grid";


const cleaningOptions = [
    { name: "Toimisto", price: 20 },
    { name: "Koti", price: 25 },
    { name: "Sauna", price: 15 },
    { name: "Yritys", price: 30 },
];

const CleaningForm = () => {
    const [cleaningOption, setCleaningOption] = useState(cleaningOptions[0]);
    const [cleaningDuration, setCleaningDuration] = useState(1);
    const [includeAdditionalService, setIncludeAdditionalService] = useState(
        false
    );
    const [customerName, setCustomerName] = useState("");
    const [cleaningDate, setCleaningDate] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
    const [submissionCompleteDialogOpen, setSubmissionCompleteDialogOpen] = useState(false);

    const [streetAddress, setStreetAddress] = useState("");
    const [postalAddress, setPostalAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");



    const handleCleaningOptionChange = (event: SelectChangeEvent<string>) => {
        setCleaningOption(cleaningOptions.find(option => option.name === event.target.value) || cleaningOptions[0]);
    };

    const handleCleaningDurationChange = (_event: any, value: number | number[]) => {
        setCleaningDuration(value as number);
    };


    const handleIncludeAdditionalServiceChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIncludeAdditionalService(event.target.checked);
    };

    const handleCustomerNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCustomerName(event.target.value);
    };

    const handleCleaningDateChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCleaningDate(event.target.value);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSubmit = () => {
        handleCloseDialog();
        setSubmissionCompleteDialogOpen(true);
    };

    const handleCloseSubmissionCompleteDialog = () => {
        setSubmissionCompleteDialogOpen(false);
    };

    const calculateTotalPrice = () => {
        let totalPrice = cleaningOption.price * cleaningDuration;
        if (includeAdditionalService) {
            totalPrice += 30;
        }
        return totalPrice;
    };

    return (
        <>
            <Typography variant="h3" sx={{ fontFamily: 'Arial', textAlign: 'center' }}>LOMAKE</Typography>
            <div className="my-form">
                <Box sx={{ backgroundColor: '#e6f2ff' }}>
                    <Select
                        value={cleaningOption.name}
                        onChange={handleCleaningOptionChange}
                        label="Siivouksen kohde"
                        sx={{ marginBottom: "16px" }}
                    >
                        {cleaningOptions.map((option, index) => (
                            <MenuItem key={index} value={option.name}>
                                {option.name} ({option.price} € / tunti)
                            </MenuItem>
                        ))}
                    </Select>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Asiakkaan nimi"
                                value={customerName}
                                onChange={handleCustomerNameChange}
                                sx={{ marginBottom: "16px" }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Siivouksen ajankohta"
                                value={cleaningDate}
                                onChange={handleCleaningDateChange}
                                sx={{ marginBottom: "16px" }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Lähiosoite"
                                value={streetAddress}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setStreetAddress(event.target.value)
                                }
                                sx={{ marginBottom: "16px" }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Postiosoite"
                                value={postalAddress}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setPostalAddress(event.target.value)
                                }
                                sx={{ marginBottom: "16px" }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Postinumero"
                                value={postalCode}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setPostalCode(event.target.value)
                                }
                                sx={{ marginBottom: "16px" }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Puhelinnumero"
                                value={phoneNumber}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setPhoneNumber(event.target.value)
                                }
                                sx={{ marginBottom: "16px" }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Sähköpostiosoite"
                                value={email}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setEmail(event.target.value)
                                }
                                sx={{ marginBottom: "16px" }}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Typography variant="h6" sx={{ fontFamily: 'Arial', textAlign: 'left', fontSize: '1rem' }}>Valitse tästä haluamasi tuntimäärä joka käytetään siivoukseen</Typography>
                    <Slider

                        min={1}
                        max={8}
                        step={1}
                        value={cleaningDuration}
                        onChange={handleCleaningDurationChange}
                        marks={[
                            { value: 1, label: "1 tunti" },
                            { value: 2, label: "2 tuntia" },
                            { value: 3, label: "3 tuntia" },
                            { value: 4, label: "4 tuntia" },
                            { value: 5, label: "5 tuntia" },
                            { value: 6, label: "6 tuntia" },
                            { value: 7, label: "7 tuntia" },
                            { value: 8, label: "8 tuntia" },
                        ]}
                        sx={{ marginBottom: "16px" }}
                    />
                    <Box borderTop={1} borderColor="divider" sx={{ paddingTop: "16px" }}>
                        <FormGroup>
                            <Tooltip title="Extrasiivouspalvelu sisältää perussiivouksen lisäksi ikkunoiden pesun ja lattioiden vahauksen." arrow>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={includeAdditionalService}
                                            onChange={handleIncludeAdditionalServiceChange}
                                        />
                                    }
                                    label="Sisällytä extrasiivous palvelu (30 € / kerta)"
                                />
                            </Tooltip>
                        </FormGroup>
                    </Box>
                    <Button
                        variant="contained"
                        onClick={handleOpenDialog}
                        sx={{ marginTop: "16px" }}
                    >
                        Laske hinta
                    </Button>
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>Yhteenveto</DialogTitle>
                        <DialogContent>
                            <Typography>
                                Asiakkaan nimi: {customerName}
                            </Typography>
                            <Typography>
                                Lähiosoite: {streetAddress}
                            </Typography>

                            <Typography>
                                Postiosoite: {postalAddress}
                            </Typography>

                            <Typography>
                                Postinumero: {postalCode}
                            </Typography>

                            <Typography>
                                Puhelinnumero: {phoneNumber}
                            </Typography>

                            <Typography>
                                Sähköpostiosoite: {email}
                            </Typography>
                            <Typography>
                                Siivouksen ajankohta: {cleaningDate}
                            </Typography>
                            <Typography>
                                Valittu siivouksen kohde: {cleaningOption.name}
                            </Typography>
                            <Typography>
                                Siivouksen kesto: {cleaningDuration} tuntia
                            </Typography>
                            <Typography>
                                Extrasiivous:{" "}
                                {includeAdditionalService ? "Kyllä" : "Ei"}
                            </Typography>
                            <Typography>
                                Kokonaishinta: {calculateTotalPrice()} €
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog}>Peruuta</Button>
                            <Button onClick={handleSubmit} color="primary">
                                Vahvista tilaus
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={submissionCompleteDialogOpen}
                        onClose={handleCloseSubmissionCompleteDialog}
                    >
                        <DialogTitle>Tilausvahvistus</DialogTitle>
                        <DialogContent>
                            <Typography>
                                Kiitos tilauksesta, {customerName}! Olemme vastaanottaneet tilauksesi.
                            </Typography>
                            <Typography>
                                Saat sähköpostiisi lisätietoja tilauksesta sekä maksuohjeet.
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseSubmissionCompleteDialog} color="primary">
                                Sulje
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </div>
        </>
    );
};

export default CleaningForm;

