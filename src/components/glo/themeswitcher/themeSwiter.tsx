
import { useTheme } from '../../../context/themeContext/themeContext';
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="cursor-pointer" onClick={toggleTheme}>
      {theme === "light" ? (
        <BiMoon className="text-gray-700 dark:text-gray-300" size={25} />
      ) : (
        <BiSun className="text-gray-300 dark:text-yellow-500" size={25} />
      )}
    </div>
  );
};

export default ThemeSwitcher;

