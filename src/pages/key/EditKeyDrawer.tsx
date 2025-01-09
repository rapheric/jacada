import React, { useState } from "react";

interface EditKeyDrawerProps {
  keyData: {
    name: string;
    key: string;
    usage: string;
    group: string;
    ephemeral: boolean;
    expires: string;
  };
  onClose: () => void;
  onSave: (updatedKey: {
    name: string;
    key: string;
    usage: string;
    group: string;
    ephemeral: boolean;
    expires: string;
  }) => void;
}

const EditKeyDrawer: React.FC<EditKeyDrawerProps> = ({ keyData, onClose, onSave }) => {
  const [formData, setFormData] = useState(keyData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay to close the drawer */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Drawer Content */}
      <div className="relative w-1/3 h-full bg-gray-800 text-slate-200 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Key</h2>
        <div className="flex flex-col gap-4">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-800 border rounded text-slate-200"
            />
          </label>
          <label>
            Group:
            <input
              type="text"
              name="group"
              value={formData.group}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-800 border rounded text-slate-200"
            />
          </label>
          <label>
            Expires:
            <input
              type="date"
              name="expires"
              value={formData.expires}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-800 border rounded text-slate-200"
            />
          </label>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditKeyDrawer;
