import { Avatar, Box, Chip, Divider, FormControl, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, ListSubheader, MenuItem, OutlinedInput, Select, SelectChangeEvent, useTheme } from '@mui/material';
import React from 'react';
import './Compo.css';
import GTR35 from 'E:/COURS/S5/Rojo/CLOUDS5/Mobile/blank/src/pages/annonce/list/GTR35.jpg'; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const ListCompo1: React.FC = () => {
  const products = [
    {
        id: '1',
        name: 'Nissan GTR 35',
        image: 'GTR35.jpg',
        price:  100,
        category: 'Category  1',
        inventoryStatus: 'IN STOCK',
        rating:  4
    },
    // Additional products...
];

const getSeverity = (status) => {
    switch (status) {
        case 'IN STOCK':
            return 'success';
        case 'LOW STOCK':
            return 'warning';
        case 'OUT OF STOCK':
            return 'danger';
        default:
            return null;
    }
};
return (
  <div className="card">
  {products.map((product) => (
      <div key={product.id} className="product">
          <img src={GTR35} alt={product.name} className="product-image" />
          <div className="product-info">
              <h2>{product.name}</h2>
              <div className="product-details">
                  <span className="product-price">${product.price}</span>
                  <span className={`product-stock ${getSeverity(product.inventoryStatus)}`}>
                      {product.inventoryStatus}
                  </span>
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
  ))}
</div>
  );
};

export default ListCompo1;