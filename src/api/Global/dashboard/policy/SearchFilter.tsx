import React from "react";
import { Switch, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { FiSearch } from "react-icons/fi";

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  showActive: boolean;
  setShowActive: React.Dispatch<React.SetStateAction<boolean>>;
  showInactive: boolean;
  setShowInactive: React.Dispatch<React.SetStateAction<boolean>>;
  showTenRows: boolean;
  setShowTenRows: React.Dispatch<React.SetStateAction<boolean>>;
  setEditDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchFilter: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  showActive,
  setShowActive,
  showInactive,
  setShowInactive,
  showTenRows,
  setShowTenRows,
  setEditDrawerVisible,
}) => {
  const handleAddPolicy = () => {
    setEditDrawerVisible(true);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 md:p-6 rounded-md shadow-lg space-y-6">
      {/* Search Bar and Add Policy Button */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 space-y-4 md:space-y-0">
        <div className="flex items-center bg-white dark:bg-gray-800 rounded-md px-4 py-2 shadow-sm flex-grow">
          <FiSearch className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search by Name and Description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-transparent border-none focus:outline-none text-gray-800 dark:text-gray-300 px-4"
          />
        </div>
        <Button
          type="primary"
          onClick={handleAddPolicy}
          icon={<PlusCircleOutlined />}
          size="large"
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-md w-full md:w-auto"
        >
          Add Policy
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Filter: All */}
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
          <span className="text-gray-600 dark:text-gray-300">All</span>
          <Switch
            checked={showActive && !showInactive}
            onChange={() => {
              setShowActive(true);
              setShowInactive(false);
            }}
          />
        </div>

        {/* Filter: Active */}
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
          <span className="text-gray-600 dark:text-gray-300">Active</span>
          <Switch
            checked={showActive}
            onChange={() => {
              setShowActive(true);
              setShowInactive(false);
            }}
          />
        </div>

        {/* Filter: Inactive */}
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
          <span className="text-gray-600 dark:text-gray-300">Inactive</span>
          <Switch
            checked={showInactive}
            onChange={() => {
              setShowInactive(true);
              setShowActive(false);
            }}
          />
        </div>

        {/* Filter: Rows Per Page */}
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
          <span className="text-gray-600 dark:text-gray-300">10 Rows/Page</span>
          <Switch
            checked={showTenRows}
            onChange={() => setShowTenRows(!showTenRows)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
