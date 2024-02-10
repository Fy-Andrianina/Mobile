import { Avatar, Box, Chip, Divider, FormControl, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, ListSubheader, MenuItem, OutlinedInput, Select, SelectChangeEvent, useTheme } from '@mui/material';
import React from 'react';
import './Compo.css';
import GTR35 from 'E:/COURS/S5/Rojo/CLOUDS5/Mobile/blank/src/pages/annonce/list/GTR35.jpg'; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-ma`Xterial/ListAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const ListCompo: React.FC<{ product: any }> = ({ product }) => {
 console.log(product);
  return (
    <div className="card">
      <div className="product">
        {/* Removed image tag for brevity */}
        <div className="product-info">
          <h2>{product.model?.nommodel} {product.model?.marque.nommarque}</h2>
          <div className="product-details">
            <span className="product-price">{product.prix} AR</span>
            {product.statut ===  1 ? <span>Vendu</span> : <span>Non Vendu</span>}
          </div>
          <div>
            <IconButton aria-label="Supprimer">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Modifier">
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCompo;