// import { ReactNode } from "react";
// import { useNavigate } from "react-router-dom";
// import TopBar from "./topbar";
// import Sidebar from "./sidebar";

// interface Props {
//   children?: ReactNode;
// }

// const Layout: React.FC<Props> = ({ children, ...props }) => {
//   const navigate = useNavigate();
//   const username = "Admin";

//   const handleLogout = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="w-full dark:bg-s1">
//       <Sidebar />
//       <div className="lg:pl-72" {...props}>
//         <TopBar username={username} onLogout={handleLogout} />
//         <div className="p-6">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
