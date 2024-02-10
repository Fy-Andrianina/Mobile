import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import * as React from 'react';
import Password from './Password';
import Personne from './Personne';
import ButtonValidation from './ButtonValidation';
import './Login.css';
import { Box, TextField } from '@mui/material';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      email: encodeURIComponent(email),
      mdp: encodeURIComponent(password),
    };

    fetch('https://carselling-production-25cb.up.railway.app/api/usercontroller/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${formData.email}&mdp=${formData.mdp}`,
      })
  .then(response => {
    // Vérifier si la réponse est OK (200)
    if (!response.ok) {
      throw new Error('Erreur réseau');
    }                                                                                                                              
    // Extraire le corps de la réponse sous forme de JSON
    return response.text();
  })
  .then(data => {
    // Utiliser les données extraites de la réponse
    localStorage.setItem('token',data);
    history.push('/List');
    // console.log('Contenu de la réponse:', data);
    // console.log('Token:', data.token);
    // Vous pouvez accéder aux propriétés de data ici
    // const token = data.token;
  })
  .catch(error => {
    // Gérer les erreurs de réseau ou de traitement des données
    console.error('Erreur lors de la récupération des données:', error);
  });
    // try {
    //   console.log('EMAIL', formData.email);
    //   console.log('PASS', formData.mdp);
    //   const response = await fetch('https://carselling-production-25cb.up.railway.app/api/usercontroller/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: `email=${formData.email}&mdp=${formData.mdp}`,
    //   });
    //   console.log('BD');

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

    //   console.log('resp',response.json());
    //   const data = await response.json();
    //   localStorage.setItem('token', data.token);
    //   console.log('Token valid', data.token);
    // } catch (error) {
    //   console.error('Error during connection', error);
    // }
  };

  const handleSign = () => {
    history.push('/Sign');
  };
  return (
    <IonPage>
      <IonContent fullscreen>

        <div id="personne" className="personne">
          <div id="photo"><Personne></Personne></div>
          <center><h1>Welcome to Carselling</h1></center>
          <Box component="form" sx={{'& .MuiTextField-root': { m:   1, width: '25ch' },}} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div id="form">
              <div id="mail">
                <TextField
                  id="outlined-basic"
                  name="user"
                  label="E-mail"
                  variant="outlined"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div id="mail">
                <Password
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div id="validation">
                <ButtonValidation type="submit"></ButtonValidation>
              </div>
            </div>
          </Box>
          <br></br>
          <br></br>
          <div id="validation">
                <Button onClick={handleSign}>Sign In</Button>
              </div>
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
