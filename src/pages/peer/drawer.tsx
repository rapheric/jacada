// src/components/Drawer.tsx
import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const Drawer = ({
  isOpen,
  mode,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  mode: "add" | "edit";
  onClose: () => void;
  onSubmit: (data: any) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    group: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", address: "", group: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-gray-800 w-full max-w-md h-full p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {mode === "add" ? "Add Peer" : "Edit Peer"}
          </h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <FiX size={24} />
          </button>
        </div>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="text-sm text-gray-400">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-700 rounded-md p-2 text-white"
              placeholder="Enter peer name"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-400">Address</span>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="bg-gray-700 rounded-md p-2 text-white"
              placeholder="Enter peer address"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-400">Groups</span>
            <input
              type="text"
              name="group"
              value={formData.group}
              onChange={handleChange}
              className="bg-gray-700 rounded-md p-2 text-white"
              placeholder="Enter groups"
            />
          </label>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            {mode === "add" ? "Add Peer" : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Drawer;