import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { Bird } from '../types/bird';

interface Props {
    birds: Bird[];
    onDeleteBird: (uniqueId: string) => void;
}

export const BirdList: React.FC<Props> = ({ birds, onDeleteBird }) => {
    const sortedBirds = [...birds].sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        <>
            <h1>Lista lisätyistä linnuista</h1>
            <List>
                {sortedBirds.map((bird) => (
                    <ListItem key={bird.uniqueId}>
                        <ListItemText
                            primary={bird.species}
                            secondary={`${bird.date.toLocaleDateString()} ${bird.date.toLocaleTimeString()} at ${bird.location}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton component={Link} to={`/edit/${bird.uniqueId}`}>
                                <EditIcon />
                            </IconButton>
                            <IconButton component={Link} to={`/delete/${bird.uniqueId}`}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </>
    );
};
export default BirdList;
