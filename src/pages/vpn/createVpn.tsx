
import React, { useState } from "react";
import { FormTitle, TextInput, ToggleSwitch, NumberInput } from "./formComponents";

const CreateVpn: React.FC = () => {
  const [isReusable, setIsReusable] = useState<boolean>(false);
  const [isEphemeral, setIsEphemeral] = useState<boolean>(false);
  const [expiry, setExpiry] = useState<number | "">("");

  return (
    <div className="w-full h-screen max-w-7xl mx-auto p-4 bg-gray-800 text-white rounded-lg">
      <FormTitle
        title="Create New Setup Key"
        subtitle="Use this key to register new machines in your network"
      />kkkk
    <hr style={{ border: '1px solid white', margin: '20px 0' }} />
      {/* Name Input */}
      <TextInput label="Name" placeholder="e.g., AWS Servers" />

      {/* Reusable Key Toggle */}
      <ToggleSwitch
        label="Make this key reusable"
        isChecked={isReusable}
        onToggle={() => setIsReusable(!isReusable)}
      />

      {/* Usage Limit Input (Conditionally Rendered) */}
      {isReusable && (
        <NumberInput
          label="Usage limit"
          placeholder="For example, set to 30"
        />
      )}

      {/* Expiry Input */}
      <div className="mb-4">
        <label className="flex  justify-between text-sm font-medium mb-2">Expires in</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={expiry}
            onChange={(e) => setExpiry(Number(e.target.value))}
            className="w-20 bg-gray-700 border border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            min={1}
            max={365}
          />
          <span className="text-sm">Day(s)</span>
        </div>
      </div>

      {/* Ephemeral Peers Toggle */}
      <ToggleSwitch
        label="Ephemeral Peers 
        peers that are offline for over ten minutes will be removed automatically"
        isChecked={isEphemeral}
        onToggle={() => setIsEphemeral(!isEphemeral)}
      />

      {/* Groups Input */}
      <TextInput
        label="Auto-assigned groups
        "
        placeholder="Add or select group(s)..."
      />

      {/* Submit Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition">
        Create Key
      </button>
    </div>
  );
};

export default CreateVpn;
