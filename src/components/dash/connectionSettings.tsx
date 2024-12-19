
const ConnectionSettings = () => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Connection Settings</h1>
        <div className="space-y-2">
          <p className="text-gray-700">Protocol Selection: <strong className="text-blue-600">OpenVPN, WireGuard, IKEv2</strong></p>
          <p className="text-gray-700">Auto-Connect Toggle</p>
          <p className="text-gray-700">Split Tunneling Configuration</p>
          <p className="text-gray-700">Kill Switch Toggle</p>
        </div>
      </div>
    );
  };
export default ConnectionSettings