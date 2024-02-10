import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, useTheme } from '@mui/material';
import React from 'react';

const Carburant: React.FC = () => {
    const [voiture, setVoiture] = React.useState('');

    const handleChange = (event) => {
      setVoiture(event.target.value);
    };
return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Carburant</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={voiture}
        label="Carburant"
        onChange={handleChange}
       
        >
            <MenuItem value={10}>Essence</MenuItem>
            <MenuItem value={20}>Diesel</MenuItem>
            <MenuItem value={30}>Electrique</MenuItem>
        </Select>
    </FormControl>
  );
};

export default Carburant;