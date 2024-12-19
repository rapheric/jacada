import React from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

interface TopBarProps {
  username: string;
  onLogout: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ username, onLogout }) => {
  return (
    <div className="flex items-center justify-between bg-blue-600 px-4 py-3 shadow-md text-white">
      <div className="text-lg font-bold">VPN Dashboard</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaUserCircle size={24} />
          <span className="font-medium">{username}</span>
        </div>
        <button
          className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md"
          onClick={onLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
