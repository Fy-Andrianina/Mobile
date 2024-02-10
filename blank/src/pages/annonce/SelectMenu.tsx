import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, useTheme } from '@mui/material';
import React from 'react';

const SelectMenu: React.FC = () => {
    const [voiture, setVoiture] = React.useState('');

    const handleChange = (event) => {
      setVoiture(event.target.value);
    };
return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Modèle</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={voiture}
        label="Modèle"
        onChange={handleChange}
        >
            <MenuItem value={10}>Mercedes</MenuItem>
            <MenuItem value={20}>Mc Laren</MenuItem>
            <MenuItem value={30}>Ferrari</MenuItem>
        </Select>
    </FormControl>
  );
};

export default SelectMenu;