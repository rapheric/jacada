import React from "react";
import { Input, Switch, Space, Button } from "antd";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  showActive: boolean;
  setShowActive: React.Dispatch<React.SetStateAction<boolean>>;
  showInactive: boolean;
  setShowInactive: React.Dispatch<React.SetStateAction<boolean>>;
  showTenRows: boolean;
  setShowTenRows: React.Dispatch<React.SetStateAction<boolean>>;
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
}) => {
  return (
    <div className="flex justify-between items-center space-x-4 bg-gray-800 p-4 rounded-md">
      <Input
        placeholder="Search by Name and Description"
        prefix={<SearchOutlined />}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-1/3 bg-gray-700 text-white"
      />

      <div className="flex space-x-4 items-center">
        <Space>
          <span className="text-gray-300">All</span>
          <Switch checked={showActive && !showInactive} onChange={() => { setShowActive(true); setShowInactive(false); }} />
        </Space>

        <Space>
          <span className="text-gray-300">Active</span>
          <Switch checked={showActive} onChange={() => { setShowActive(true); setShowInactive(false); }} />
        </Space>

        <Space>
          <span className="text-gray-300">Inactive</span>
          <Switch checked={showInactive} onChange={() => { setShowInactive(true); setShowActive(false); }} />
        </Space>

        <Space>
          <span className="text-gray-300">10 Rows per Page</span>
          <Switch checked={showTenRows} onChange={() => setShowTenRows(!showTenRows)} />
        </Space>
        
        <Button type="primary" icon={<PlusCircleOutlined />} size="small" className="bg-blue-600">Add Policy</Button>
      </div>
    </div>
  );
};

export default SearchFilter;
