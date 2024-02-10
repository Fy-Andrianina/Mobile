import React from 'react';
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import './Sign.css';

interface SexeProps {
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const Sexe: React.FC<SexeProps> = ({ value, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event); // Call the onChange prop with the event
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Sexe"
          onChange={handleChange}
        >
          <MenuItem value={1}>Homme</MenuItem>
          <MenuItem value={0}>Femme</MenuItem>
        </Select>
    </FormControl>
  );
};

export default Sexe;
