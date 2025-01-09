
// import React, { useState } from "react";

// interface CreateKeyDrawerProps {
//   onClose: () => void;
//   onCreate: (newKey: any) => void;
// }

// const CreateKeyDrawer: React.FC<CreateKeyDrawerProps> = ({ onClose, onCreate }) => {
//   const [name, setName] = useState<string>("");
//   const [usageLimit, setUsageLimit] = useState<number>(1);
//   const [expiresIn, setExpiresIn] = useState<number>(7);
//   const [isReusable, setIsReusable] = useState<boolean>(false);
//   const [isEphemeral, setIsEphemeral] = useState<boolean>(false);
//   const [group, setGroup] = useState<string>("");

//   const handleSubmit = () => {
//     const newKey = {
//       name,
//       key: "NEW_KEY_****",
//       usage: `0 of ${usageLimit} Peers`,
//       group,
//       ephemeral: isEphemeral,
//       expires: `Expires in ${expiresIn} days`,
//       valid: true,
//     };

//     onCreate(newKey);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-gray-800 text-white rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-lg font-bold mb-4">Create New Setup Key</h2>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm">Name</label>
//             <input
//               type="text"
//               className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm">Usage Limit</label>
//             <input
//               type="number"
//               className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
//               value={usageLimit}
//               onChange={(e) => setUsageLimit(parseInt(e.target.value, 10))}
//             />
//           </div>
//           <div>
//             <label className="block text-sm">Expires In (Days)</label>
//             <input
//               type="number"
//               className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
//               value={expiresIn}
//               onChange={(e) => setExpiresIn(parseInt(e.target.value, 10))}
//             />
//           </div>
//           <div>
//             <label className="block text-sm">Group</label>
//             <input
//               type="text"
//               className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
//               value={group}
//               onChange={(e) => setGroup(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={isReusable}
//                 onChange={(e) => setIsReusable(e.target.checked)}
//                 className="text-orange-500"
//               />
//               <span>Make Key Reusable</span>
//             </label>
//           </div>
//           <div>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={isEphemeral}
//                 onChange={(e) => setIsEphemeral(e.target.checked)}
//                 className="text-orange-500"
//               />
//               <span>Ephemeral Peers</span>
//             </label>
//           </div>
//         </div>
//         <div className="mt-6 flex justify-end space-x-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400"
//           >
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateKeyDrawer;
import React, { useState } from "react";

interface CreateKeyDrawerProps {
  onClose: () => void;
  onCreate: (newKey: any) => void;
}

const CreateKeyDrawer: React.FC<CreateKeyDrawerProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState<string>("");
  const [usageLimit, setUsageLimit] = useState<number>(1);
  const [expiresIn, setExpiresIn] = useState<number>(7);
  const [isReusable, setIsReusable] = useState<boolean>(false);
  const [isEphemeral, setIsEphemeral] = useState<boolean>(false);
  const [group, setGroup] = useState<string>("");

  const handleSubmit = () => {
    const newKey = {
      name,
      key: "NEW_KEY_****",
      usage: `0 of ${usageLimit} Peers`,
      group,
      ephemeral: isEphemeral,
      expires: `Expires in ${expiresIn} days`,
      valid: true,
    };

    onCreate(newKey);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose} // Close drawer when clicking outside
      ></div>

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-gray-800 text-white shadow-lg transform transition-transform duration-300">
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Create New Setup Key</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="space-y-4 flex-grow overflow-y-auto">
            <div>
              <label className="block text-sm">Name</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm">Usage Limit</label>
              <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
                value={usageLimit}
                onChange={(e) => setUsageLimit(parseInt(e.target.value, 10))}
              />
            </div>
            <div>
              <label className="block text-sm">Expires In (Days)</label>
              <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
                value={expiresIn}
                onChange={(e) => setExpiresIn(parseInt(e.target.value, 10))}
              />
            </div>
            <div>
              <label className="block text-sm">Group</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              />
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isReusable}
                  onChange={(e) => setIsReusable(e.target.checked)}
                  className="text-orange-500"
                />
                <span>Make Key Reusable</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isEphemeral}
                  onChange={(e) => setIsEphemeral(e.target.checked)}
                  className="text-orange-500"
                />
                <span>Ephemeral Peers</span>
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateKeyDrawer;
