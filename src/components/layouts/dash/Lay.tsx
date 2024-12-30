// App.tsx
import React, { useState } from 'react';
import Header from './header';
// import Peers from './peers';
import Sidebar from './sidebar';
import Access from './access';
import PeersPage from '../../../pages/vpn/peerspage';


const Lay: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Peers');

  const renderContent = () => {
    switch (activeTab) {
      case 'Peers':
        return <PeersPage />;
      case 'AccessControl':
        return <Access />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Lay;