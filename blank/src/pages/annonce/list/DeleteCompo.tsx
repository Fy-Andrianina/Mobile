import { Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton } from "@mui/material";
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteCompo: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    return (
        <span>
        <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
            <DeleteIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
            <DialogContentText>
                Voulez-vous vraiment supprimer cette annonce
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>OK</Button>
            </DialogActions>
        </Dialog>
        </span>
    );
};

export default DeleteCompo;
