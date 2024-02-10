import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, useTheme } from '@mui/material';
import React from 'react';

const Moteur: React.FC = () => {
    const [voiture, setVoiture] = React.useState('');

    const handleChange = (event) => {
      setVoiture(event.target.value);
    };
return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Moteur</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={voiture}
        label="Moteur"
        onChange={handleChange}
       
        >
            <MenuItem value={10}>V8</MenuItem>
            <MenuItem value={20}>V6</MenuItem>
            <MenuItem value={30}>4 Cylindres</MenuItem>
        </Select>
    </FormControl>
  );
};

export default Moteur;