import React from "react";

interface DeleteKeyDrawerProps {
  keyData: {
    name: string;
    key: string;
  };
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteKeyDrawer: React.FC<DeleteKeyDrawerProps> = ({
  keyData,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-gray-800 w-1/3 h-full p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Delete Key</h2>
        <p className="text-white mb-6">
          Are you sure you want to delete the setup key <strong>{keyData.name}</strong>? This
          action cannot be undone.
        </p>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteKeyDrawer;
