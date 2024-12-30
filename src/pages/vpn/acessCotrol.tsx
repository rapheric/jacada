

// Access Control Policy Component
const AccessControlPolicy = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg max-w-3xl mx-auto ">
      <h2 className="text-lg font-semibold mb-2">Create New Access Control Policy</h2>
      <p className="text-sm mb-4">Use this policy to restrict access to groups of resources.</p>

      {/* Tabs */}
      <div className="flex mb-4 text-sm border-b border-gray-700">
        <button className="flex-1 py-2 text-center border-b-2 border-orange-500">Policy</button>
        <button className="flex-1 py-2 text-center">Posture Checks</button>
        <button className="flex-1 py-2 text-center">Name & Description</button>
      </div>

      {/* Protocol Selector */}
      <div className="mb-4">
        <label className="block text-sm mb-2">Protocol</label>
        <select className="w-full p-2 bg-gray-800 border border-gray-700 rounded mb-4">
          <option value="ALL">ALL</option>
          <option value="TCP">TCP</option>
          <option value="UDP">UDP</option>
        </select>
      </div>

      {/* Source and Destination Groups */}
      <div className="mb-4 flex justify-between  w-full my-4" >
        <label className="block text-sm mb-2 w-1/2">Source</label>
        <input
          type="text"
          placeholder="Add or select group(s)..."
          className=" w-1/2 p-2 bg-gray-800 border border-gray-700 rounded mb-4"
        />
</div>
<div className="flex justify-between  my-4">
        <label className="block text-sm mb-2 w-1/2" >Destination</label>
        <input
          type="text"
          placeholder="Add or select group(s)..."
          className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>

      {/* Ports */}
      <div className="mb-4">
        <label className="block text-sm mb-2">Ports</label>
        <input
          type="text"
          placeholder="Select ports..."
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>

      {/* Enable Policy */}
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="enablePolicy" className="mr-2" />
        <label htmlFor="enablePolicy" className="text-sm">Enable Policy</label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button className="bg-gray-700 px-4 py-2 rounded">Cancel</button>
        <button className="bg-orange-500 px-4 py-2 rounded">Add Policy</button>
      </div>
    </div>
  );
};

// App Component (Main)
const AcessControl = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <AccessControlPolicy />
    </div>
  );
};

export default AcessControl;
