import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import * as React from 'react';
import Password from './Password';
import Personne from './Personne';
import ButtonValidation from './ButtonValidation';
import './Sign.css';
import Sexe from './Sexe';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useHistory } from 'react-router';
import './Creation.css';

const Sign: React.FC = () => {
  const [nom, setNom] = React.useState('');
  const [prenom, setPrenom] = React.useState('');
  const [dtn, setDtn] = React.useState<Date | null>(null);
  const [sexe, setSexe] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNomChange = (event) => {
    setNom(event.target.value);
    // console.log(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
    // console.log(event.target.value);
  };

  const handleSexeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSexe(event.target.value as string);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  };
  
  const handleDtnChange = (newValue: Date | null) => {
    setDtn(newValue);
    // console.log('Selected Date:', newValue);
  };
  
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
      const formattedDate = dayjs(dtn).format('YYYY-MM-DD');
      console.log('Selected Date:', formattedDate);
      
    const formData = {
      nom: encodeURIComponent(nom),
      prenom: encodeURIComponent(prenom),
      date_naissance: encodeURIComponent(formattedDate),
      sexe: encodeURIComponent(sexe),
      email: encodeURIComponent(email),
      mdp: encodeURIComponent(password)
    };
    // console.log(formData.nom);
    // console.log(formData.prenom);
    // console.log(formData.sexe);
    // console.log(formData.date_naissance);
    // console.log(formData.email);
    // console.log(formData.mdp);

      fetch('https://carselling-production-25cb.up.railway.app/api/usercontroller/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `nom=${formData.nom}&prenom=${formData.prenom}&date_naissance=${formData.date_naissance}&email=${formData.email}&mdp=${formData.mdp}&sexe=${formData.sexe}`,
        })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur réseau');
      } else {
        history.push('/Login');
      }
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="personne">
          <div id="photo"><Personne></Personne></div>
          <Box component="form" sx={{'& .MuiTextField-root': { m:   1, width: '25ch' },}} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div id="annonce">
                <TextField  name="nom" label="Nom" 
                  value={nom}
                  onChange={handleNomChange}/>
                <TextField  name="prenom" label="Prenom" 
                  value={prenom}
                  onChange={handlePrenomChange}/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date de naissance"
                    value={dtn}
                    onChange={handleDtnChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Sexe
                value={sexe}
                onChange={handleSexeChange}></Sexe>
                <TextField
                  id="outlined-basic"
                  name="user"
                  label="E-mail"
                  variant="outlined"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <Password
                  value={password}
                  onChange={handlePasswordChange}
                />
              <div id="validation">
                <Button type="submit" variant="contained">Valider</Button>
              </div>
            </div>
          </Box>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sign;
