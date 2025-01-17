import React, { useState } from "react";
import { FiTrash, FiEdit } from "react-icons/fi";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const [isReusable, setIsReusable] = useState(true);
  const [usageLimit, setUsageLimit] = useState<number | string>("Unlimited");
  const [expiryDays, setExpiryDays] = useState<number | string>(7);
  const [groups, setGroups] = useState<string[]>(["dddd", "dddddddd", "ssss"]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-gray-800 text-white w-full max-w-md h-full p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create New Setup Key</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 text-2xl"
          >
            &times;
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Use this key to register new machines in your network
        </p>

        {/* Form */}
        <form>
          {/* Key Name */}
          <label className="block mb-2 text-gray-300 text-sm">
            Name
            <input
              type="text"
              placeholder="e.g., AWS Servers"
              className="block w-full mt-1 p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </label>

          {/* Reusable Key */}
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-300 text-sm">
              Make this key reusable
              <span className="block text-gray-400 text-xs">
                Use this type to enroll multiple peers
              </span>
            </label>
            <input
              type="checkbox"
              checked={isReusable}
              onChange={() => setIsReusable(!isReusable)}
              className="toggle-checkbox"
            />
          </div>

          {/* Usage Limit */}
          <label className="block mb-4">
            <span className="block text-gray-300 text-sm mb-1">Usage limit</span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={usageLimit}
                onChange={(e) => setUsageLimit(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
              <span className="text-sm">Peer(s)</span>
            </div>
          </label>

          {/* Expiry Days */}
          <label className="block mb-4">
            <span className="block text-gray-300 text-sm mb-1">Expires in</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={expiryDays}
                onChange={(e) => setExpiryDays(Number(e.target.value))}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
              <span className="text-sm">Day(s)</span>
            </div>
          </label>

          {/* Groups */}
          <label className="block mb-4">
            <span className="block text-gray-300 text-sm mb-1">
              Search groups or add a new group
            </span>
            <div className="bg-gray-700 p-2 rounded">
              {groups.map((group, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <span className="text-gray-200">{group}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setGroups((prevGroups) =>
                        prevGroups.filter((_, i) => i !== index)
                      )
                    }
                    className="text-gray-400 hover:text-red-500"
                  >
                    <FiTrash />
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Add group(s)..."
                className="block w-full mt-2 p-2 rounded bg-gray-700 text-white border border-gray-600"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                    setGroups((prevGroups) => [
                      ...prevGroups,
                      e.currentTarget.value.trim(),
                    ]);
                    e.currentTarget.value = "";
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </label>

          {/* Footer */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
            >
              Create Setup Key
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Drawer;
