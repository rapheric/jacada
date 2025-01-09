import React from "react";

interface SetupKeyProps {
  setupKey: {
    name: string;
    key: string;
    usage: string;
    group: string;
    ephemeral: boolean;
    expires: string;
  };
}

const SetupKeyRow: React.FC<SetupKeyProps> = ({ setupKey }) => {
  return (
    <tr className="border-b border-gray-700">
      <td className="px-6 py-4">
        <div>
          <span className="font-bold">{setupKey.name}</span>
          <span className="text-gray-500"> {setupKey.key}</span>
        </div>
      </td>
      <td className="px-6 py-4">{setupKey.usage}</td>
      <td className="px-6 py-4">{setupKey.group}</td>
      <td className="px-6 py-4">
        {setupKey.ephemeral ? (
          <span className="bg-orange-500 text-white px-2 py-1 rounded-lg text-xs">
            Ephemeral
          </span>
        ) : (
          "Persistent"
        )}
      </td>
      <td className="px-6 py-4">{setupKey.expires}</td>
      <td className="px-6 py-4 flex gap-4">
        <button className="text-orange-500 hover:underline">Revoke</button>
        <button className="text-red-500 hover:underline">Delete</button>
      </td>
    </tr>
  );
};

export default SetupKeyRow;
