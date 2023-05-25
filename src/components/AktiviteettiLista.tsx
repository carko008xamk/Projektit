import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/DeleteForever';

interface Aktiviteetti {
    id: number;
    aloitusAika: Date;
    lopetusAika: Date;
    kuvaus: string;
}

interface Props {
    aktiviteetit: Aktiviteetti[];
    handleDelete: (id: number) => void;
}

const AktiviteettiLista = ({ aktiviteetit, handleDelete }: Props) => {

    aktiviteetit.sort((a, b) => (a.lopetusAika > b.lopetusAika) ? -1 : 1);

    return (
        <div>
            <Typography variant="h2" align="center">Aktiviteettilista</Typography>

            {aktiviteetit.length > 0 ? (
                <List>
                    {aktiviteetit.map((aktiviteetti) => (
                        <ListItem key={aktiviteetti.id}>
                            <ListItemText
                                primary={aktiviteetti.kuvaus}
                                secondary={`${aktiviteetti.aloitusAika.toLocaleString()} - ${aktiviteetti.lopetusAika.toLocaleString()}`}

                            />
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(aktiviteetti.id)}>
                                <Delete />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body1" align="center">Ei tallennettuja aktiviteetteja.</Typography>
            )}
        </div>
    );
};

export default AktiviteettiLista;


