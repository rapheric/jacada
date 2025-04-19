import keycloak from "./keycloak";

const Dashboard = () => (
  <div>
    <h1>Welcome to the Dashboard</h1>
    <button
      onClick={() =>
        keycloak.logout({
          redirectUri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URI,
        })
      }
      className="text-sm text-red-600"
    >
      Logout
    </button>
  </div>
);

export default Dashboard;
