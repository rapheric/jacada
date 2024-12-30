

import { BrowserRouter as Router } from "react-router-dom";
// import { useKeycloak } from '@react-keycloak/web';
import AppRoutes from "./routes/protectedRoutes";

const App = () => {
  // const { keycloak, initialized } = useKeycloak();

  // if (!initialized) {
  //   return <div>Loading...</div>;
  // }

  return (
  
    <Router>
      <div className="bg-black">
      {/* {keycloak.authenticated ? ( */}
        <AppRoutes />
      {/* ) : ( */}
        {/* <button onClick={() => keycloak.login()}>Login</button> */}
      {/* )} */}
      </div>
    </Router>
   
  );
};

export default App;
