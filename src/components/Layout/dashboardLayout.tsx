import AdminSidebar from './sidebar';
import AdminNavbar from './navbar';
import { useState } from 'react';
import UserContent from './content';

const DashLayout = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-200 dark:bg-gray-900">
      <div
        className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-64 border-r border-gray-300 dark:border-gray-700`}
      >
        <AdminSidebar
          setActiveItem={setActiveItem}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="border-b border-gray-300 dark:border-gray-700  bg-slate-200 ">
          <AdminNavbar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
        <div className="flex-1 border-t border-l border-gray-300 dark:border-gray-700 bg-slate-200 ">
          <UserContent activeItem={activeItem} />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
