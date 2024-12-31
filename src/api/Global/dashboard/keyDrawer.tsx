import React, { useState } from "react";
import { Drawer, Button, Input, Select, Switch } from "antd";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";

const { Option } = Select;

const SetupKeysDrawer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isReusable, setIsReusable] = useState(false);
  const [usageLimit, setUsageLimit] = useState<number | "">(12);
  const [expiresIn, setExpiresIn] = useState(7);
  const [isEphemeral, setIsEphemeral] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const availableGroups = ["Admin", "Developers", "QA Team"];

  const toggleGroup = (group: string) => {
    setSelectedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const handleSave = () => {
    const keyData = {
      isReusable,
      usageLimit,
      expiresIn,
      isEphemeral,
      selectedGroups,
    };
    console.log("Key Setup Data:", keyData);
    closeDrawer();
  };

  return (
    <div className="p-4">
      <Button type="primary" onClick={showDrawer} icon={<KeyOutlined  />}>
        Setup Keys
      </Button>
      <Drawer
        title="Setup Keys"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
        width={500}
        bodyStyle={{ padding: "16px", backgroundColor: "#1f2937",color: "white"    }}
        headerStyle={{ backgroundColor: "#111827", color: "white" }}
      >
        <div className="space-y-4 text-white">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Key Name
            </label>
            <Input
              placeholder="Enter key name"
              prefix={<UserOutlined />}
              className="rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500 hover:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Key Type
            </label>
            <Select
              className="w-full rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500 hover:bg-gray-800"
              placeholder="Select a key type"
            >
              <Option value="ssh">SSH</Option>
              <Option value="api">API</Option>
              <Option value="token">Token</Option>
            </Select>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md h-16 shadow-lg bg-gray-800">
            <label className="text-sm font-medium text-gray-300">
              Make this key reusable
            </label>
            <Switch checked={isReusable} onChange={setIsReusable} />
          </div>
          {isReusable && (
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Usage limit
              </label>
              <Input
                type="number"
                value={usageLimit}
                onChange={(e) =>
                  setUsageLimit(Number(e.target.value) || "")
                }
                placeholder="e.g., 30"
                className="w-1/2 px-3 py-2 bg-gray-800 text-white placeholder-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-500 hover:bg-gray-800"
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Expires in (days)
            </label>
            <Input
              type="number"
              value={expiresIn}
              onChange={(e) => setExpiresIn(Number(e.target.value))}
              min={1}
              max={365}
              className="w-1/2 px-3 py-2 bg-gray-800 text-white placeholder-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-500 hover:bg-gray-800"
            />
          </div>
          <div className="flex items-center justify-between px-3 rounded-md border shadow-lg h-16 bg-gray-800">
            <label className="text-sm font-medium text-gray-300">
              Ephemeral Peers
            </label>
            <Switch checked={isEphemeral} onChange={setIsEphemeral} />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Auto-assigned groups
            </label>
            <div className="space-y-2">
              {availableGroups.map((group) => (
                <div key={group} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedGroups.includes(group)}
                    onChange={() => toggleGroup(group)}
                    className="form-checkbox h-5 w-5 text-blue-500 bg-gray-800 border-gray-600"
                  />
                  <span className="ml-2 text-sm text-gray-300">{group}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <Button onClick={closeDrawer}>Cancel</Button>
            <Button type="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SetupKeysDrawer;
