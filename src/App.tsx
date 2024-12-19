

import { BrowserRouter as Router } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';
import AppRoutes from "./routes/protectedRoutes";

const App = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {keycloak.authenticated ? (
        <AppRoutes />
      ) : (
        <button onClick={() => keycloak.login()}>Login</button>
      )}
    </Router>
  );
};

export default App;
