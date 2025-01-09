
import React from 'react';
import { FaApple, FaWindows, FaLinux, FaAndroid, FaDocker } from 'react-icons/fa';

const AddPeer: React.FC<{ onAddPeer: (peer: { name: string; address: string; groups: string; lastSeen: string; os: string; version: string; }) => void }> = ({ onAddPeer }) => {
  const handleAddPeer = () => {
    const newPeer = {
      name: 'new-peer',
      address: '192.168.0.2',
      groups: 'Default',
      lastSeen: 'Just now',
      os: 'Linux',
      version: 'v0.25.6',
    };
    onAddPeer(newPeer);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add new peer</h2>
      <p className="mb-4">To get started, install NetBird and log in using your email address.</p>

      <div className="flex space-x-4 mb-6">
        <FaApple className="text-2xl" />
        <FaWindows className="text-2xl" />
        <FaLinux className="text-2xl" />
        <FaAndroid className="text-2xl" />
        <FaDocker className="text-2xl" />
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Install on macOS</h3>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mr-2">Download for Intel</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Download for M1 & M2</button>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Install manually with Terminal</h3>
        <button className="bg-gray-700 px-4 py-2 rounded-lg">View Instructions</button>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Install manually with HomeBrew</h3>
        <button className="bg-gray-700 px-4 py-2 rounded-lg">View Instructions</button>
      </div>

      <button
        onClick={handleAddPeer}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Add Peer
      </button>
    </div>
  );
};

export default AddPeer;