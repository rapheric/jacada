

import { useState } from "react";

const DashboardOverview = () => {
  const [isReusable, setIsReusable] = useState(false);
  const [isEphemeral, setIsEphemeral] = useState(false);
  const [expiry, setExpiry] = useState("");

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg text-white">
      <h2 className="text-xl font-semibold mb-4">Create New Setup Key</h2>
      <p className="text-sm text-gray-400 mb-6">Use this key to register new machines in your network</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          placeholder="e.g., AWS Servers"
          className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <label className="text-sm font-medium">Make this key reusable</label>
        <button
          onClick={() => setIsReusable(!isReusable)}
          className={`w-12 h-6 rounded-full flex items-center px-1 transition-all ${
            isReusable ? "bg-orange-500" : "bg-gray-600"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
              isReusable ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      {isReusable && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Usage limit</label>
          <input
            type="number"
            placeholder="For example, set to 30"
            className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Expires in</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-20 bg-gray-700 border border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            min="1"
            max="365"
          />
          <span className="text-sm">Day(s)</span>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <label className="text-sm font-medium">Ephemeral Peers</label>
        <button
          onClick={() => setIsEphemeral(!isEphemeral)}
          className={`w-12 h-6 rounded-full flex items-center px-1 transition-all ${
            isEphemeral ? "bg-orange-500" : "bg-gray-600"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
              isEphemeral ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Auto-assigned groups</label>
        <input
          type="text"
          placeholder="Add or select group(s)..."
          className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition">Create Key</button>
    </div>
  );
};

export default DashboardOverview;
