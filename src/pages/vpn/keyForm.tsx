import { useState } from 'react';
import { Switch } from 'antd';

const KeyForm: React.FC = () => {
  const [isReusable, setIsReusable] = useState(false);
  const [usageLimit, setUsageLimit] = useState<number | ''>('');
  const [expiresIn, setExpiresIn] = useState(7);
  const [isEphemeral, setIsEphemeral] = useState(false);

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          placeholder="e.g., AWS Servers"
          className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring"
        />
      </div>

      <div className="flex items-center justify-between border px-3 rounded-md h-16 shadow-lg">
        <label className="text-sm font-medium">Make this key reusable</label>
        <Switch
          checked={isReusable}
          onChange={setIsReusable} // `setIsReusable` can be passed directly
        />
      </div>

      {isReusable && (
        <div className='flex justify-between  '>
          <label className="block text-sm font-medium mb-1 w-1/2">Usage limit</label>
          <input
            type="number"
            value={usageLimit}
            onChange={(e) => setUsageLimit(Number(e.target.value) || '')}
            placeholder="e.g., 30"
            className="w-1/2 px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring"
          />
        </div>
      )}

      <div className='flex  justify-between  '>
        <label className="block text-sm font-medium mb-1 w-1/2">Expires in (days)</label>
        <input
          type="number"
          value={expiresIn}
          onChange={(e) => setExpiresIn(Number(e.target.value))}
          min={1}
          max={365}
          className="w-1/2 px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring"
        />
      </div>

      <div className="flex items-center justify-between px-3  rounded-md border shadow-lg h-16">
        <label className="text-sm font-medium">Ephemeral Peers</label>
        <Switch
          checked={isEphemeral}
          onChange={setIsEphemeral}
        />
      </div>

      <button
        type="submit"
        className="w-full
         bg-blue-600 hover:bg-blue-700 text-white py-2 rounded focus:outline-none focus:ring"
      >
        Create Key
      </button>
    </form>
  );
};

export default KeyForm;
