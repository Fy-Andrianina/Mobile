import { IonContent, IonPage } from '@ionic/react';
import { IconButton, List } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../Creation.css';
import Menu from '../Menu';
import NavbarAnnonce from '../NavbarAnnonce';
import GTR from './GTR35.jpg';

const ListAnnonce: React.FC = () => {
  const [products, setProduct] = useState([]);

  const history = useHistory();
  const token = localStorage.getItem('token');
  // console.log(token);
  useEffect(() => {
    const result = async () => {
      fetch('https://ventevoiture-production-639f.up.railway.app/api/annoncecontroller/annoncesUser', {
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
      fetch('https://ventevoiture-production-639f.up.railway.app/api/annoncecontroller/updateStatut', {
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