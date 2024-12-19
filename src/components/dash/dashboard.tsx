const DashboardOverview = () => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Dashboard Overview</h1>
        <div className="space-y-2">
          <p className="text-gray-700">Connection Status: <strong className="text-blue-600">Connected/Disconnected</strong></p>
          <p className="text-gray-700">Current Server Location: <strong className="text-blue-600">Your Location</strong></p>
          <p className="text-gray-700">Current IP Address: <strong className="text-blue-600">Your IP</strong></p>
          <p className="text-gray-700">Connection Duration: <strong className="text-blue-600">HH:MM:SS</strong></p>
        </div>
      </div>
    );
  };
  export default DashboardOverview