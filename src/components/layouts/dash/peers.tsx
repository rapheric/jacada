// components/Peers.tsx
import React from 'react';
import { Button } from 'antd';

const Peers: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-semibold mb-4">Get Started with NetBird</h2>
      <p className="text-center mb-4">
        It looks like you don’t have any connected machines. Get started by
        adding one to your network.
      </p>
      <Button type="primary" className="bg-orange-500 border-none">
        Add Peer
      </Button>
    </div>
  );
};

export default Peers;
