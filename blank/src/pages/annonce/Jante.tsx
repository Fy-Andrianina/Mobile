import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

interface JanteProps {
  selectedJantes: any; // Replace 'any' with the actual type of the selected tire
  onSelectedJantesChange: (newSelectedJante: any) => void; // Replace 'any' with the actual type of the selected tire
  jante: any[]; // Add the jante prop to the interface
}

const Jante: React.FC<JanteProps> = ( selectedJantes, onSelectedJantesChange, jante) => {
    // const [voiture, setVoiture] = React.useState('');
    const handleJanteChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      const selectedIndex = Number(event.target.value);
      const selectedJante = jante[selectedIndex]; // Make sure `jante` is available in the props or state
      onSelectedJantesChange(selectedJante);
    };

return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Jante</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Jante"
        onChange={handleJanteChange}
        >
        {jante && jante.map((janteOption, index) => (
          console.log(janteOption.nomjante)
          // <MenuItem value={index}>{janteOption.nomjante}</MenuItem>
        ))}
        </Select>
    </FormControl>
  );
};

export default Jante;