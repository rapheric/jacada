const AccountSubscription = () => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Account & Subscription</h1>
        <div className="space-y-2">
          <p className="text-gray-700">Account Details: <strong className="text-blue-600">Username, Email</strong></p>
          <p className="text-gray-700">Subscription Status: <strong className="text-blue-600">Active/Inactive, Renewal Date</strong></p>
          <p className="text-gray-700">Upgrade or Manage Subscription</p>
        </div>
      </div>
    );
  };
  export default AccountSubscription