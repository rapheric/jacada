import { useState } from "react";
import { FaServer, FaList} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../glo/themeswitcher/themeSwiter";

interface SidebarProps {
  setActiveItem: (item: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const AdminSidebar: React.FC<SidebarProps> = ({
  setActiveItem,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const menuItems = [
    { name: "Setup keys", icon: <FaList /> },
    { name: "Peers", icon: <FaServer /> },
    { name: "Policy", icon: <FaList /> },
    { name: "activity logs", icon: <FaList /> },
  ];

  const [activeItem, setActive] = useState<string>("Dashboard Overview");

  const handleItemClick = (itemName: string) => {
    setActive(itemName);
    setActiveItem(itemName);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } lg:block w-64 bg-gray-900 dark:bg-black text-white dark:text-gray-200 h-screen fixed top-0 left-0 z-30 transition-transform duration-300 ease-in-out`}
    >
      <div className="p-5 flex items-center justify-center">
        <img
          alt="Company Logo"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          className="h-12 w-auto"
          onClick={handleLogoClick}
        />
      </div>
      <nav className="mt-10">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleItemClick(item.name)}
              className={`p-4 flex items-center gap-4 cursor-pointer m-4 rounded-lg transition-colors duration-200 ${
                activeItem === item.name
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-gray-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-44 ml-10">
        <ThemeSwitcher />
      </div>
    </aside>
  );
};

export default AdminSidebar;
