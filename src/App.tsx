
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/protectedRoutes";

const App = () => {
  return (
  
    <Router>
      <div className=" bg-white dark:bg-gradient-to-r from-black via-gray-900   to-black">
        <AppRoutes />
      </div>
    </Router>
   
  );
};

export default App;
