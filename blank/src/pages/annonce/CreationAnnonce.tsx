import { IonContent, IonPage } from '@ionic/react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, SpeedDialAction, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carburant from './Carburant';
import './Creation.css';
import Jante from './Jante';
import Menu from './Menu';
import Moteur from './Moteur';
import NavbarAnnonce from './NavbarAnnonce';
import SelectMenu from './SelectMenu';
import UploadPic from './list/UploadPic';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { getInformation } from '../../controller/getInformation';
import { useHistory } from 'react-router';

const CreationAnnonce: React.FC = () => {
  const history = useHistory();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    prix: null,
    kilometrage: null,
    description: null,
    couleur: null,
    modele: null,
    moteur: null,
    jante: null,
    carburant: null,
    photos: []
  });

  const [modeles, setModeles] = useState([]);
  const [moteurs, setMoteurs] = useState([]);
  const [jantes, setJantes] = useState([]);
  const [carburants, setCarburants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [model, moteurs, jantes, carburants] = await Promise.all([
          getInformation('https://carselling-production-25cb.up.railway.app/api/modelcontroller/models'),
          getInformation('https://carselling-production-25cb.up.railway.app/api/moteurcontroller/moteurs'),
          getInformation('https://carselling-production-25cb.up.railway.app/api/jantecontroller/jantes'),
          getInformation('https://carselling-production-25cb.up.railway.app/api/carburantcontroller/carburants'),
        ]);
        setModeles(model);
        setMoteurs(moteurs);
        setJantes(jantes);
        setCarburants(carburants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const updatePhotos = (newPhotos) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      photos: newPhotos
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectedImagesChange = (newSelectedImages: File[]) => {
    // console.log(newSelectedImages.length+"longueur");
      setSelectedImages(newSelectedImages);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      var result = await getBase64();
      formData.photos = result;
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }

    // Envoyer les données
    await Send();
  };

  const Send = async () => {
    
    const token = localStorage.getItem('token');

    console.log(formData);
    await fetch('https://carselling-production-25cb.up.railway.app/api/annoncecontroller/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Réponse du serveur :', data);
      history.push('/List'); 
    })
    .catch(error => {
      console.error('Erreur lors de l\'envoi de la chaîne Base64 au serveur:', error);
    });
  };

  const ConvertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };
  
  const getBase64 = async () => {
    const resultat = [];
    await Promise.all(
      selectedImages.map(async (file) => {
        resultat.push(await ConvertToBase64(file));
      })
    );
    return resultat;
  };

  return (
    <IonPage>
      <IonContent fullscreen>
      <NavbarAnnonce></NavbarAnnonce>
        <InputLabel id="demo-simple-select-label">Modèle</InputLabel>
        <form onSubmit={handleSubmit} method="post">
          <div id="annonce">
            <TextField  id="outlined-basic"  color="secondary" variant="outlined" name="description" label="Description" onChange={handleChange} />
            <TextField id="outlined-basic" color="secondary" variant="outlined"  name="couleur" label="Couleur" onChange={handleChange} />
            <FormControl color="secondary">
              <InputLabel id="demo-simple-select-label">Modèle</InputLabel>
              <Select color="secondary"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Modele" name="modele" onChange={handleChange}>
                {modeles.map((modele, index) => (
                  <MenuItem key={index} value={modele}>{modele.nommodel}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl color="secondary">
              <InputLabel id="demo-simple-select-label">Jante</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Jante" name="jante" onChange={handleChange}>
                {jantes.map((jante, index) => (
                  <MenuItem key={index} value={jante}>{jante.nomjante}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField  id="outlined-basic" name="kilometrage" label="Kilométrage" placeholder="km" onChange={handleChange} />
            <FormControl>
              <InputLabel
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Moteur" id="demo-simple-select-label">Moteur</InputLabel>
              <Select name="moteur" onChange={handleChange}>
                {moteurs.map((moteur, index) => (
                  <MenuItem key={index} value={moteur}>{moteur.nom}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Moteur" id="demo-simple-select-label">Carburant</InputLabel>
              <Select name="carburant" onChange={handleChange}>a
                {carburants.map((carburant, index) => (
                  <MenuItem key={index} value={carburant}>{carburant.nomcarburant}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField name="prix" label="Prix" onChange={handleChange} />
            <UploadPic selectedImages={selectedImages} onSelectedImagesChange={handleSelectedImagesChange} />
            <Button type="submit" variant="contained">VALIDER </Button>
          </div>
        </form>
        <div>
          <SpeedDialAction
            icon={
              <Badge color="error" variant="dot">
                <NotificationsIcon />
              </Badge>
            }
            tooltipTitle="Notification"
          />
        </div>
        <Menu />
      </IonContent>
    </IonPage>
  );
};

export default CreationAnnonce;
