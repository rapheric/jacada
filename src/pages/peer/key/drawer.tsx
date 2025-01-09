import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-gray-900 bg-opacity-50`}
    >
      <div className="w-80 bg-white shadow-md p-4">
        <button
          onClick={onClose}
          className="text-red-500 font-bold text-right mb-2"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
