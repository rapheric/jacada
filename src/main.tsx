
import React from 'react';
import 'antd/dist/reset.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/themeContext/themeContext';
// import { ReactKeycloakProvider } from '@react-keycloak/web';
// import keycloak from './api/keycloak.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <ReactKeycloakProvider authClient={keycloak}> */}
        <App />
      {/* </ReactKeycloakProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);
