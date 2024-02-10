import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Avatar, Box, Chip, Divider, FormControl, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, ListSubheader, MenuItem, OutlinedInput, Select, SelectChangeEvent, useTheme } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import { Badge, Button, SpeedDialAction, TextField, ThemeProvider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../Creation.css';
import Menu from '../Menu';
import NavbarAnnonce from '../NavbarAnnonce';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListCompo from './ListCompo';
import GTR from './GTR35.jpg';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const ListAnnonce: React.FC = () => {
  const [products, setProduct] = useState([]);

  const history = useHistory();
  const token = localStorage.getItem('token');
  // console.log(token);
  useEffect(() => {
    const result = async () => {
      fetch('https://carselling-production-25cb.up.railway.app/api/annoncecontroller/annoncesUser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`,
          }
        })
    .then(async response => {
      // Vérifier si la réponse est OK (200)
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      // Extraire le corps de la réponse sous forme de JSON
      const data = await response.json();
      // console.log(data);
      setProduct(data);
    })
    .catch(error => {
      // Gérer les erreurs de réseau ou de traitement des données
      console.error('Erreur lors de la récupération des données:', error);
    });
    };
    
    result();
  }, [token]);


  const handleVendu = (event, product) => {
    const token = localStorage.getItem('token');
      fetch('https://carselling-production-25cb.up.railway.app/api/annoncecontroller/updateStatut', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`,
          },
          body: JSON.stringify(product),
        })
    .then(async response => {
      // Vérifier si la réponse est OK (200)
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      history.push('/List');
    })
    .catch(error => {
      // Gérer les erreurs de réseau ou de traitement des données
      console.error('Erreur lors de la récupération des données:', error);
    });
    
  };
return (
    <IonPage>
      <IonContent fullscreen>
      <NavbarAnnonce></NavbarAnnonce>
      <div>
        <List>
          {products.map((product, index) => (
           
           <div className="card">
           <div className="product">
             
          <img src={GTR}alt={"not found"} className="product-image" />
             
             <div className="product-info">
               <h2>{product.modele.nommodel} {product.modele.marque.nommarque}</h2>
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
                <Button
                value={product}
                onClick={handleVendu(product)} variant="contained">VALIDER </Button> 
               </div>
             </div>
           </div>
         </div>
          ))}
        </List>
      </div>
        <Menu></Menu> 
      </IonContent>
    </IonPage>
    
  );
};

export default ListAnnonce;