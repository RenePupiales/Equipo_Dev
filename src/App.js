
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Routes from './Routes/Routes';

function App() {
  return (
    <Auth0Provider
    domain="tiendavirtual2390.us.auth0.com"
    clientId="N7qxTB6aCGgFQ9K9o8tEsQvndYIGligm"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>
  );
}

export default App;
 