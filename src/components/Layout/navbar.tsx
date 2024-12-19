import ThemeSwitcher from "../glo/themeswitcher/themeSwiter";
import ProfileDropdown from "../layouts/profileDropDown";
// import { useNavigate } from 'react-router-dom';
interface AdminNavbarProps {
  onMenuToggle: () => void;
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ onMenuToggle }) => {

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 dark:bg-black text-white">
      <div className="lg:hidden">
        <button onClick={onMenuToggle} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:block">
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher/>
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <button className="flex items-center">
          <ProfileDropdown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
