// components/Header.tsx
import React from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div className="font-bold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <BsMoonStarsFill className="text-lg" />
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
