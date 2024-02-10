import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';
import Login from './pages/login/login';
import Sign from './pages/singin/Sign';
import Password from './pages/login/Password';
import Menu from './pages/annonce/Menu';
import CreationAnnonce from './pages/annonce/CreationAnnonce';
import SelectMenu from './pages/annonce/SelectMenu';
import ListAnnonce from './pages/annonce/list/ListAnnonce';
import DeleteCompo from './pages/annonce/list/DeleteCompo';
import NavbarAnnonce from './pages/annonce/NavbarAnnonce';
import ListCompo from './pages/annonce/list/ListCompo';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Sign">
          <Sign />
        </Route>
        <Route exact path="/Menu">
          <Menu />
        </Route>
        <Route exact path="/Select">
          <SelectMenu />
        </Route>
        <Switch>
          <Route exact path="/Creation">
            <CreationAnnonce />
          </Route>
        </Switch>
        <Route exact path="/List">
          <ListAnnonce />
        </Route>
        <Route exact path="/Compo">
          <ListCompo />
        </Route>
        <Route exact path="/DeleteCompo">
          <DeleteCompo />
        </Route>
        <Route exact path="/Nav">
          <NavbarAnnonce />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
