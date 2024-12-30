

import GroupSelector from "./createSelector";
import KeyForm from "./keyForm";

const SetupKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-4 text-center ">Create New Setup Key</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">Use this key to register new machines in your network</p>
        <KeyForm />
        <GroupSelector />
      </div>
    </div>
  );
};

export default SetupKey;



