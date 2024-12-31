import React, { useState } from 'react';
import { Input, Switch, Button, Tooltip, Select} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const SetupKeyUI: React.FC = () => {
  const [isReusable, setIsReusable] = useState(false);
  const [usageLimit, setUsageLimit] = useState<number | undefined>(undefined);
  const [expiryDays, setExpiryDays] = useState<number | undefined>(7);
  const [isEphemeral, setIsEphemeral] = useState(false);
  const [autoAssignedGroups, setAutoAssignedGroups] = useState<string[]>([]);

  const handleCreateKey = () => {
    const setupKeyData = {
      isReusable,
      usageLimit,
      expiryDays,
      isEphemeral,
      autoAssignedGroups,
    };
    console.log('Setup Key Data:', setupKeyData);
    alert('Setup key created! Check console for data.');
  };

  return (
    <div className="bg-gray-900 text-white  h-screen p-8 rounded-lg shadow-lg w-1/3 mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New Setup Key</h2>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <Input placeholder="e.g., AWS Servers" className="bg-gray-800 text-white" />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <span>Make this key reusable</span>
        <Switch checked={isReusable} onChange={setIsReusable} />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Usage limit</label>
        <Input
          type="number"
          placeholder="e.g., 30"
          className="bg-gray-800 text-white"
          value={usageLimit}
          onChange={(e) => setUsageLimit(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Expires in</label>
        <Input
          type="number"
          placeholder="Days until the key expires"
          className="bg-gray-800 text-white"
          value={expiryDays}
          onChange={(e) => setExpiryDays(Number(e.target.value))}
          suffix="Day(s)"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <span>
          Ephemeral Peers
          <Tooltip title="Peers that are offline for over 10 minutes will be removed automatically">
            <InfoCircleOutlined className="ml-2" />
          </Tooltip>
        </span>
        <Switch checked={isEphemeral} onChange={setIsEphemeral} />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Auto-assigned groups</label>
        <Select
          mode="multiple"
          placeholder="Add or select group(s)"
          className="w-full bg-gray-800"
          value={autoAssignedGroups}
          onChange={setAutoAssignedGroups}
        >
          <Option value="Group1">Group1</Option>
          <Option value="Group2">Group2</Option>
          <Option value="Group3">Group3</Option>
        </Select>
      </div>
      <div className="flex justify-end">
        <Button onClick={() => alert('Cancelled')} className="mr-4">
          Cancel
        </Button>
        <Button type="primary" onClick={handleCreateKey}>
          Create Setup Key
        </Button>
      </div>
    </div>
  );
};

export default SetupKeyUI;
