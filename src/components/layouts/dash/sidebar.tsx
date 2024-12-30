// / components/Sidebar.tsx
import React from 'react';
import { AiOutlineTeam, AiOutlineSetting } from 'react-icons/ai';

interface SidebarProps {
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {
  return (
    <div className="w-64 bg-gray-800 p-4 space-y-6">
      <h1 className="text-xl font-bold">NetBird</h1>
      <button
        className="flex items-center w-full px-4 py-2 hover:bg-gray-700"
        onClick={() => setActiveTab('Peers')}
      >
        <AiOutlineTeam className="mr-2" /> Peers
      </button>
      <button
        className="flex items-center w-full px-4 py-2 hover:bg-gray-700"
        onClick={() => setActiveTab('AccessControl')}
      >
        <AiOutlineSetting className="mr-2" /> Access Control
      </button>
    </div>
  );
};

export default Sidebar;
