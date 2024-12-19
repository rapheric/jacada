import AdminSidebar from './sidebar';
import AdminNavbar from './navbar';
import { useState } from 'react';
import UserContent from './content';
// import { useAuth } from '../../context/KeycloakProvider';

const DashLayout = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-200 dark:bg-gray-900">
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-64`}>
        <AdminSidebar
          setActiveItem={setActiveItem}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="flex flex-col flex-1">
        <AdminNavbar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex-1 p-4">
          <UserContent activeItem={activeItem} />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
// // src/AdminDashboard.tsx
// import React, { useContext, useEffect } from "react";
// // import { KeycloakContext } from "../../context/KeycloakProvider";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard: React.FC = () => {
//   // const { keycloak, authenticated } = useContext(KeycloakContext) || {};
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!authenticated) {
//       // If not authenticated, redirect to the login page
//       navigate("/");
//     }
//   }, [authenticated, navigate]);

//   if (!keycloak) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h2 className="text-3xl font-semibold mb-4">Admin Dashboard</h2>
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <p className="text-xl mb-4">Welcome, {keycloak?.tokenParsed?.preferred_username}</p>
//         <button
//           // onClick={() => logout()}
//           className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
