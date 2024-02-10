import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useHistory } from 'react-router';
import { Badge } from '@mui/material';
import './Creation.css';

const Menu: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const history = useHistory();
    const handleNavigateToAddAnnonce = () => {
      history.push('/Creation');
    };
    
    const handleNavigateToListAnnonce = () => {
      history.push('/List');
    };
return (
      <div className="q-pa-md">
        <div className="q-mt-md row justify-center">
            <SpeedDial
              ariaLabel="SpeedDial example"
              sx={{ position: 'fixed', bottom: 16}}
              icon={<KeyboardArrowUpIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
              direction="up"
              FabProps={{ size: 'small' }}
            >
            
            <SpeedDialAction
              icon={<AddIcon />}
              tooltipTitle="Ajouter"
              onClick={handleNavigateToAddAnnonce}
            />

            <SpeedDialAction
              icon={<ListAltIcon />}
              tooltipTitle="Afficher"
              onClick={handleNavigateToListAnnonce}
            />
          </SpeedDial>
        </div>
      </div>
  );
};

export default Menu;